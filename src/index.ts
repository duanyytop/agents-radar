/**
 * agents-radar: daily digest for AI ecosystem.
 *
 * Config-driven version: reads tracked repos from config/sources.yaml.
 * Supports Kimi Code API (default) or any Anthropic-compatible endpoint.
 *
 * Env vars:
 *   ANTHROPIC_API_KEY   - API key (Kimi Code or Anthropic)
 *   ANTHROPIC_BASE_URL  - Endpoint override (default: from config)
 *   ANTHROPIC_MODEL     - Model name (default: from config)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 */

import {
  type RepoConfig,
  type GitHubItem,
  type GitHubRelease,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
  buildWebReportPrompt,
  buildTrendingPrompt,
} from "./prompts.ts";
import { callLlm, saveFile, autoGenFooter } from "./report.ts";
import { loadWebState, saveWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { loadConfig, type GroupConfig } from "./config.ts";
import { buildFeedEntry, saveFeed, type FeedEntry } from "./rss.ts";
import { sendNotifications, type DigestNotification } from "./notify.ts";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RepoFetch {
  cfg: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  config: ReturnType<typeof loadConfig>,
  since: Date,
  webState: WebState,
): Promise<{
  groupFetched: Map<string, RepoFetch[]>;
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
}> {
  const allRepos = config.groups.flatMap((g) => g.repos);
  console.log(`  Tracking: ${allRepos.map((r) => r.id).join(", ")}, claude-code-skills, web`);

  // Fetch all repos across all groups
  const allFetchPromises = config.groups.flatMap((group) =>
    group.repos.map(async (cfg) => {
      const [issuesRaw, prs, releases] = await Promise.all([
        fetchRecentItems(cfg, "issues", since),
        fetchRecentItems(cfg, "pulls", since),
        fetchRecentReleases(cfg.repo, since),
      ]);
      const issues = issuesRaw.filter((i) => !i.pull_request);
      console.log(`  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`);
      return { groupId: group.id, fetch: { cfg, issues, prs, releases } as RepoFetch };
    }),
  );

  const websiteIds = Object.keys(config.websites) as Array<"anthropic" | "openai">;

  const [repoResults, skillsData, webResults, trendingData] = await Promise.all([
    Promise.all(allFetchPromises),
    fetchSkillsData(config.skills.repo).then((d) => {
      console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
      return d;
    }),
    Promise.all(
      websiteIds.map((site) =>
        fetchSiteContent(site, webState).catch((err): WebFetchResult => {
          console.error(`  [web/${site}] fetch failed: ${err}`);
          return {
            site,
            siteName: config.websites[site]?.name ?? site,
            isFirstRun: false,
            newItems: [],
            totalDiscovered: 0,
          };
        }),
      ),
    ),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
  ]);

  // Group results by group ID
  const groupFetched = new Map<string, RepoFetch[]>();
  for (const { groupId, fetch } of repoResults) {
    const existing = groupFetched.get(groupId) ?? [];
    existing.push(fetch);
    groupFetched.set(groupId, existing);
  }

  return { groupFetched, skillsData, webResults, trendingData };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries (per group)
// ---------------------------------------------------------------------------

async function generateGroupSummaries(
  group: GroupConfig,
  fetched: RepoFetch[],
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  dateStr: string,
): Promise<{
  digests: RepoDigest[];
  primarySummary: string;
  skillsSummary: string;
}> {
  const primary = group.primaryRepo ? fetched.find((f) => f.cfg.id === group.primaryRepo) : undefined;
  const peers = group.primaryRepo ? fetched.filter((f) => f.cfg.id !== group.primaryRepo) : fetched;
  const isCliStyle = group.promptStyle === "cli";

  // Generate summaries for all repos in parallel
  const digestPromises = (group.primaryRepo ? peers : fetched).map(
    async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
      const hasData = issues.length || prs.length || releases.length;
      if (!hasData) {
        console.log(`  [${cfg.id}] No activity, skipping LLM call`);
        return { config: cfg, issues, prs, releases, summary: "过去24小时无活动。" };
      }
      console.log(`  [${cfg.id}] Calling LLM for summary...`);
      try {
        const prompt = isCliStyle
          ? buildCliPrompt(cfg, issues, prs, releases, dateStr)
          : buildPeerPrompt(cfg, issues, prs, releases, dateStr);
        const summary = await callLlm(prompt);
        return { config: cfg, issues, prs, releases, summary };
      } catch (err) {
        console.error(`  [${cfg.id}] LLM call failed: ${err}`);
        return { config: cfg, issues, prs, releases, summary: "⚠️ 摘要生成失败。" };
      }
    },
  );

  // Primary repo summary (for peer-style groups like OpenClaw)
  let primarySummary = "";
  if (primary) {
    const { cfg, issues, prs, releases } = primary;
    const hasData = issues.length || prs.length || releases.length;
    if (!hasData) {
      primarySummary = "过去24小时无活动。";
    } else {
      console.log(`  [${cfg.id}] Calling LLM for primary report...`);
      try {
        primarySummary = await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr, 50, 30));
      } catch (err) {
        console.error(`  [${cfg.id}] LLM call failed: ${err}`);
        primarySummary = "⚠️ 摘要生成失败。";
      }
    }
  }

  // Skills summary (only for groups containing claude-code)
  let skillsSummary = "";
  const hasClaudeCode = fetched.some((f) => f.cfg.id === "claude-code");
  if (hasClaudeCode) {
    console.log("  [claude-code-skills] Calling LLM for skills report...");
    try {
      skillsSummary = await callLlm(buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr));
    } catch (err) {
      console.error(`  [claude-code-skills] LLM call failed: ${err}`);
      skillsSummary = "⚠️ Skills 摘要生成失败。";
    }
  }

  const digests = await Promise.all(digestPromises);
  return { digests, primarySummary, skillsSummary };
}

// ---------------------------------------------------------------------------
// Phase 3 + 4: Comparison + Save (per group)
// ---------------------------------------------------------------------------

async function processGroup(
  group: GroupConfig,
  fetched: RepoFetch[],
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  dateStr: string,
  utcStr: string,
  digestRepo: string,
  footer: string,
): Promise<{ issueUrl: string | null; content: string }> {
  // Phase 2: Generate summaries
  const { digests, primarySummary, skillsSummary } = await generateGroupSummaries(
    group,
    fetched,
    skillsData,
    dateStr,
  );

  const primary = group.primaryRepo ? fetched.find((f) => f.cfg.id === group.primaryRepo) : undefined;

  // Phase 3: Comparison
  let content: string;

  if (group.primaryRepo && primary) {
    // Peer-style group (like OpenClaw): primary deep report + peers comparison
    const primaryDigest: RepoDigest = {
      config: primary.cfg,
      issues: primary.issues,
      prs: primary.prs,
      releases: primary.releases,
      summary: primarySummary,
    };

    console.log(`  [${group.id}] Calling LLM for peers comparison...`);
    const comparison = await callLlm(buildPeersComparisonPrompt(primaryDigest, digests, dateStr));

    const primaryCfg = primary.cfg;
    const peersRepoLinks =
      `- [${primaryCfg.name}](https://github.com/${primaryCfg.repo})\n` +
      digests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n");

    const peerDetailSections = digests
      .map((d) =>
        [
          `<details>`,
          `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
          ``,
          d.summary,
          ``,
          `</details>`,
        ].join("\n"),
      )
      .join("\n\n");

    content =
      `# ${group.issueEmoji} ${primaryCfg.name} 生态日报 ${dateStr}\n\n` +
      `> Issues: ${primary.issues.length} | PRs: ${primary.prs.length} | 覆盖项目: ${1 + digests.length} 个 | 生成时间: ${utcStr} UTC\n\n` +
      `${peersRepoLinks}\n\n---\n\n` +
      `## ${primaryCfg.name} 项目深度报告\n\n${primarySummary}\n\n---\n\n` +
      `## 横向生态对比\n\n${comparison}\n\n---\n\n` +
      `## 同赛道项目详细报告\n\n${peerDetailSections}${footer}`;
  } else {
    // CLI-style group: per-tool summaries + cross-tool comparison
    console.log(`  [${group.id}] Calling LLM for comparison...`);
    const comparison = await callLlm(buildComparisonPrompt(digests, dateStr));

    const repoLinks = digests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n");

    const toolSections = digests
      .map((d) => {
        const skillsSection =
          d.config.id === "claude-code" && skillsSummary
            ? `## Claude Code Skills 社区热点\n\n> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)\n\n${skillsSummary}\n\n---\n\n`
            : "";
        return [
          `<details>`,
          `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
          ``,
          skillsSection + d.summary,
          ``,
          `</details>`,
        ].join("\n");
      })
      .join("\n\n");

    content =
      `# ${group.issueEmoji} ${group.name}社区动态日报 ${dateStr}\n\n` +
      `> 生成时间: ${utcStr} UTC | 覆盖工具: ${digests.length} 个\n\n` +
      `${repoLinks}\n\n---\n\n` +
      `## 横向对比\n\n${comparison}\n\n---\n\n` +
      `## 各工具详细报告\n\n${toolSections}${footer}`;
  }

  // Phase 4: Save
  console.log(`  Saved ${saveFile(content, dateStr, group.reportFile)}`);

  let issueUrl: string | null = null;
  if (digestRepo) {
    const title = `${group.issueEmoji} ${group.name}日报 ${dateStr}`;
    issueUrl = await createGitHubIssue(title, content, group.issueLabel);
    console.log(`  Created ${group.id} issue: ${issueUrl}`);
  }

  return { issueUrl, content };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");
  requireEnv("ANTHROPIC_API_KEY");

  const config = loadConfig();

  // Apply LLM config: set env defaults if not already set
  if (!process.env["ANTHROPIC_BASE_URL"] && config.llm.defaultBaseUrl) {
    process.env["ANTHROPIC_BASE_URL"] = config.llm.defaultBaseUrl;
  }
  if (!process.env["ANTHROPIC_MODEL"] && config.llm.defaultModel) {
    process.env["ANTHROPIC_MODEL"] = config.llm.defaultModel;
  }

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = new Date(now.getTime() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const utcStr = now.toISOString().slice(0, 16).replace("T", " ");
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  console.log(
    `[${now.toISOString()}] Starting digest | endpoint: ${process.env["ANTHROPIC_BASE_URL"] ?? "api.anthropic.com"}`,
  );
  console.log(`  Groups: ${config.groups.map((g) => g.name).join(", ")}`);

  // Phase 1: Fetch all data
  const webState = loadWebState();
  const { groupFetched, skillsData, webResults, trendingData } = await fetchAllData(config, since, webState);

  const footer = autoGenFooter();
  const feedEntries: FeedEntry[] = [];
  const notifyReports: DigestNotification["reports"] = [];

  // Phase 2-4: Process each group
  for (const group of config.groups) {
    const fetched = groupFetched.get(group.id) ?? [];
    const { issueUrl, content } = await processGroup(
      group,
      fetched,
      skillsData,
      dateStr,
      utcStr,
      digestRepo,
      footer,
    );

    // RSS entry
    feedEntries.push(
      buildFeedEntry(dateStr, `${group.name}日报`, content, issueUrl, config.rss.link, group.reportFile.replace(".md", "")),
    );

    // Notification entry
    const summaryLines = content.split("\n").filter((l) => l.startsWith("> ") || l.startsWith("## "));
    notifyReports.push({
      label: group.name,
      emoji: group.issueEmoji,
      issueUrl: issueUrl ?? undefined,
      summary: summaryLines.slice(0, 2).join(" ").slice(0, 200) || `${group.name}日报已生成`,
    });
  }

  // Web report
  const hasNewContent = webResults.some((r) => r.newItems.length > 0);
  if (hasNewContent) {
    console.log("  [web] Calling LLM for web content report...");
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr), 8192);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const mode = isFirstRun ? "首次全量" : "今日更新";
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const webContent =
        `# 🌐 AI 官方内容追踪报告 ${dateStr}\n\n` +
        `> ${mode} | 新增内容: ${totalNew} 篇 | 生成时间: ${utcStr} UTC\n\n` +
        `数据来源:\n` +
        webResults
          .map(
            (r) =>
              `- ${r.siteName}: 新增 ${r.newItems.length} 篇（sitemap 共 ${r.totalDiscovered} 条）`,
          )
          .join("\n") +
        `\n\n---\n\n${webSummary}${footer}`;

      console.log(`  Saved ${saveFile(webContent, dateStr, "ai-web.md")}`);

      let webIssueUrl: string | null = null;
      if (digestRepo) {
        webIssueUrl = await createGitHubIssue(
          `🌐 AI 官方内容追踪报告 ${dateStr}${isFirstRun ? "（首次全量）" : ""}`,
          webContent,
          "web",
        );
        console.log(`  Created web issue: ${webIssueUrl}`);
      }

      feedEntries.push(buildFeedEntry(dateStr, "AI 官方内容追踪", webContent, webIssueUrl, config.rss.link, "ai-web"));
    } catch (err) {
      console.error(`  [web] Report generation failed: ${err}`);
    }
  } else {
    console.log("  [web] No new content detected, skipping report.");
  }
  saveWebState(webState);

  // Trending report
  const hasTrending = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
  if (hasTrending) {
    console.log("  [trending] Calling LLM for trending report...");
    try {
      const trendingSummary = await callLlm(buildTrendingPrompt(trendingData, dateStr), 6144);
      const trendingContent =
        `# 📈 AI 开源趋势日报 ${dateStr}\n\n` +
        `> 数据来源: GitHub Trending + GitHub Search API | 生成时间: ${utcStr} UTC\n\n---\n\n` +
        trendingSummary +
        footer;

      console.log(`  Saved ${saveFile(trendingContent, dateStr, "ai-trending.md")}`);

      let trendingIssueUrl: string | null = null;
      if (digestRepo) {
        trendingIssueUrl = await createGitHubIssue(`📈 AI 开源趋势日报 ${dateStr}`, trendingContent, "trending");
        console.log(`  Created trending issue: ${trendingIssueUrl}`);
      }

      feedEntries.push(
        buildFeedEntry(dateStr, "AI 开源趋势", trendingContent, trendingIssueUrl, config.rss.link, "ai-trending"),
      );
    } catch (err) {
      console.error(`  [trending] Report generation failed: ${err}`);
    }
  }

  // RSS feed
  saveFeed(config.rss, feedEntries);

  // Notifications
  if (notifyReports.length > 0) {
    await sendNotifications(config, {
      dateStr,
      reports: notifyReports,
      pagesUrl: config.rss.link,
    });
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
