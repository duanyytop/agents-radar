/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   ANTHROPIC_API_KEY   - API key (Anthropic or Kimi Code)
 *   ANTHROPIC_BASE_URL  - Endpoint override (e.g. https://api.kimi.com/coding/)
 *   ANTHROPIC_MODEL     - Model name (default: claude-sonnet-4-6)
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
  buildHnPrompt,
} from "./prompts.ts";
import { callLlm, saveFile, autoGenFooter } from "./report.ts";
import { loadWebState, saveWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { loadConfig } from "./config.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
} = loadConfig();

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
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  console.log(`  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn`);

  const [fetched, skillsData, webResults, trendingData, hnData] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        const [issuesRaw, prs, releases] = await Promise.all([
          fetchRecentItems(cfg, "issues", since),
          fetchRecentItems(cfg, "pulls", since),
          fetchRecentReleases(cfg.repo, since),
        ]);
        const issues = issuesRaw.filter((i) => !i.pull_request);
        console.log(
          `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
        );
        return { cfg, issues, prs, releases };
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO).then((d) => {
      console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
      return d;
    }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
  ]);

  return { fetched, skillsData, webResults, trendingData, hnData };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: "zh" | "en" = "zh",
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const noActivity = lang === "en" ? "No activity in the last 24 hours." : "过去24小时无活动。";
  const summaryFailed = lang === "en" ? "⚠️ Summary generation failed." : "⚠️ 摘要生成失败。";
  const skillsFailed = lang === "en" ? "⚠️ Skills summary generation failed." : "⚠️ Skills 摘要生成失败。";
  const trendingNoData =
    lang === "en"
      ? "⚠️ Trending data unavailable, unable to generate report."
      : "⚠️ 今日趋势数据获取失败，无法生成报告。";
  const trendingFailed = lang === "en" ? "⚠️ Trending report generation failed." : "⚠️ 趋势报告生成失败。";

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary] = await Promise.all([
    Promise.all(
      fetchedCli.map(async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: noActivity };
        }
        console.log(`  [${cfg.id}] Calling LLM for summary...`);
        try {
          const summary = await callLlm(buildCliPrompt(cfg, issues, prs, releases, dateStr, lang));
          return { config: cfg, issues, prs, releases, summary };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: summaryFailed };
        }
      }),
    ),
    (async () => {
      const { cfg, issues, prs, releases } = fetchedOpenclaw;
      const hasData = issues.length || prs.length || releases.length;
      if (!hasData) {
        console.log(`  [openclaw] No activity, skipping LLM call`);
        return noActivity;
      }
      console.log(`  [openclaw] Calling LLM for OpenClaw report...`);
      try {
        return await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr, 50, 30, lang));
      } catch (err) {
        console.error(`  [openclaw] LLM call failed: ${err}`);
        return summaryFailed;
      }
    })(),
    (async () => {
      console.log("  [claude-code-skills] Calling LLM for skills report...");
      try {
        return await callLlm(buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr, lang));
      } catch (err) {
        console.error(`  [claude-code-skills] LLM call failed: ${err}`);
        return skillsFailed;
      }
    })(),
    Promise.all(
      fetchedPeers.map(async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: noActivity };
        }
        console.log(`  [${cfg.id}] Calling LLM for peer summary...`);
        try {
          return {
            config: cfg,
            issues,
            prs,
            releases,
            summary: await callLlm(
              buildPeerPrompt(cfg, issues, prs, releases, dateStr, undefined, undefined, lang),
            ),
          };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: summaryFailed };
        }
      }),
    ),
    (async () => {
      const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
      if (!hasData) return trendingNoData;
      console.log("  [trending] Calling LLM for trending report...");
      try {
        return await callLlm(buildTrendingPrompt(trendingData, dateStr, lang), 6144);
      } catch (err) {
        console.error(`  [trending] LLM call failed: ${err}`);
        return trendingFailed;
      }
    })(),
  ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Report content builders
// ---------------------------------------------------------------------------

function buildCliReportContent(
  cliDigests: RepoDigest[],
  skillsSummary: string,
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${CLAUDE_SKILLS_REPO})`;

  const t =
    lang === "en"
      ? {
          title: `# AI CLI Tools Community Digest ${dateStr}\n\n`,
          meta: `> Generated: ${utcStr} UTC | Tools covered: ${cliDigests.length}\n\n`,
          skillsHeading: `## Claude Code Skills Highlights`,
          skillsSource: `Source`,
          comparison: `## Cross-Tool Comparison\n\n`,
          detail: `## Per-Tool Reports\n\n`,
        }
      : {
          title: `# AI CLI 工具社区动态日报 ${dateStr}\n\n`,
          meta: `> 生成时间: ${utcStr} UTC | 覆盖工具: ${cliDigests.length} 个\n\n`,
          skillsHeading: `## Claude Code Skills 社区热点`,
          skillsSource: `数据来源`,
          comparison: `## 横向对比\n\n`,
          detail: `## 各工具详细报告\n\n`,
        };

  const skillsSection =
    `${t.skillsHeading}\n\n` +
    `> ${t.skillsSource}: [anthropics/skills](https://github.com/${CLAUDE_SKILLS_REPO})\n\n` +
    `${skillsSummary}\n\n---\n\n`;

  const toolSections = cliDigests
    .map((d) => {
      const skills = d.config.id === "claude-code" ? skillsSection : "";
      return [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        skills + d.summary,
        ``,
        `</details>`,
      ].join("\n");
    })
    .join("\n\n");

  return (
    t.title +
    t.meta +
    `${repoLinks}\n\n` +
    `---\n\n` +
    t.comparison +
    comparison +
    `\n\n---\n\n` +
    t.detail +
    toolSections +
    footer
  );
}

function buildOpenclawReportContent(
  fetchedOpenclaw: RepoFetch,
  peerDigests: RepoDigest[],
  openclawSummary: string,
  peersComparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const { issues, prs } = fetchedOpenclaw;

  const peersRepoLinks =
    `- [OpenClaw](https://github.com/${OPENCLAW.repo})\n` +
    OPENCLAW_PEERS.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

  const peerDetailSections = peerDigests
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

  const t =
    lang === "en"
      ? {
          title: `# OpenClaw Ecosystem Digest ${dateStr}\n\n`,
          meta: `> Issues: ${issues.length} | PRs: ${prs.length} | Projects covered: ${1 + OPENCLAW_PEERS.length} | Generated: ${utcStr} UTC\n\n`,
          deepDive: `## OpenClaw Deep Dive\n\n`,
          comparison: `## Cross-Ecosystem Comparison\n\n`,
          peers: `## Peer Project Reports\n\n`,
        }
      : {
          title: `# OpenClaw 生态日报 ${dateStr}\n\n`,
          meta: `> Issues: ${issues.length} | PRs: ${prs.length} | 覆盖项目: ${1 + OPENCLAW_PEERS.length} 个 | 生成时间: ${utcStr} UTC\n\n`,
          deepDive: `## OpenClaw 项目深度报告\n\n`,
          comparison: `## 横向生态对比\n\n`,
          peers: `## 同赛道项目详细报告\n\n`,
        };

  return (
    t.title +
    t.meta +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    t.deepDive +
    openclawSummary +
    `\n\n---\n\n` +
    t.comparison +
    peersComparison +
    `\n\n---\n\n` +
    t.peers +
    peerDetailSections +
    footer
  );
}

// ---------------------------------------------------------------------------
// Report savers (LLM call + file save + optional GitHub issue)
// ---------------------------------------------------------------------------

async function saveWebReport(
  webResults: WebFetchResult[],
  webState: WebState,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): Promise<void> {
  const hasNewContent = webResults.some((r) => r.newItems.length > 0);

  if (hasNewContent) {
    console.log(`  [web/${lang}] Calling LLM for web content report...`);
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr, lang), 8192);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const anthropicNew = webResults.find((r) => r.site === "anthropic")?.newItems.length ?? 0;
      const anthropicTotal = webResults.find((r) => r.site === "anthropic")?.totalDiscovered ?? 0;
      const openaiNew = webResults.find((r) => r.site === "openai")?.newItems.length ?? 0;
      const openaiTotal = webResults.find((r) => r.site === "openai")?.totalDiscovered ?? 0;

      const fileName = lang === "en" ? "ai-web-en.md" : "ai-web.md";

      const t =
        lang === "en"
          ? {
              mode: isFirstRun ? "First full crawl" : "Today's update",
              title: `# Official AI Content Report ${dateStr}\n\n`,
              meta: `> ${isFirstRun ? "First full crawl" : "Today's update"} | New content: ${totalNew} articles | Generated: ${utcStr} UTC\n\n`,
              sources:
                `Sources:\n` +
                `- Anthropic: [anthropic.com](https://www.anthropic.com) — ${anthropicNew} new articles (sitemap total: ${anthropicTotal})\n` +
                `- OpenAI: [openai.com](https://openai.com) — ${openaiNew} new articles (sitemap total: ${openaiTotal})\n\n`,
            }
          : {
              mode: isFirstRun ? "首次全量" : "今日更新",
              title: `# AI 官方内容追踪报告 ${dateStr}\n\n`,
              meta: `> ${isFirstRun ? "首次全量" : "今日更新"} | 新增内容: ${totalNew} 篇 | 生成时间: ${utcStr} UTC\n\n`,
              sources:
                `数据来源:\n` +
                `- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 ${anthropicNew} 篇（sitemap 共 ${anthropicTotal} 条）\n` +
                `- OpenAI: [openai.com](https://openai.com) — 新增 ${openaiNew} 篇（sitemap 共 ${openaiTotal} 条）\n\n`,
            };

      const webContent = t.title + t.meta + t.sources + `---\n\n` + webSummary + footer;

      console.log(`  Saved ${saveFile(webContent, dateStr, fileName)}`);

      if (digestRepo && lang === "zh") {
        const webUrl = await createGitHubIssue(
          `🌐 AI 官方内容追踪报告 ${dateStr}${isFirstRun ? "（首次全量）" : ""}`,
          webContent,
          "web",
        );
        console.log(`  Created web issue: ${webUrl}`);
      }
    } catch (err) {
      console.error(`  [web/${lang}] Report generation failed: ${err}`);
    }
  } else {
    console.log(`  [web/${lang}] No new content detected, skipping report.`);
  }

  if (lang === "zh") {
    saveWebState(webState);
    console.log("  [web] State saved.");
  }
}

async function saveTrendingReport(
  trendingData: TrendingData,
  trendingSummary: string,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): Promise<void> {
  const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
  if (!hasData) {
    console.log(`  [trending/${lang}] No data available, skipping report.`);
    return;
  }

  const fileName = lang === "en" ? "ai-trending-en.md" : "ai-trending.md";
  const header =
    lang === "en"
      ? `# AI Open Source Trends ${dateStr}\n\n> Sources: GitHub Trending + GitHub Search API | Generated: ${utcStr} UTC\n\n---\n\n`
      : `# AI 开源趋势日报 ${dateStr}\n\n> 数据来源: GitHub Trending + GitHub Search API | 生成时间: ${utcStr} UTC\n\n---\n\n`;

  const trendingContent = header + trendingSummary + footer;

  console.log(`  Saved ${saveFile(trendingContent, dateStr, fileName)}`);

  if (digestRepo && lang === "zh") {
    const trendingUrl = await createGitHubIssue(`📈 AI 开源趋势日报 ${dateStr}`, trendingContent, "trending");
    console.log(`  Created trending issue: ${trendingUrl}`);
  }
}

async function saveHnReport(
  hnData: HnData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): Promise<void> {
  if (!hnData.fetchSuccess) {
    console.log(`  [hn/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [hn/${lang}] Calling LLM for HN report...`);
  try {
    const hnSummary = await callLlm(buildHnPrompt(hnData, dateStr, lang));
    const fileName = lang === "en" ? "ai-hn-en.md" : "ai-hn.md";
    const header =
      lang === "en"
        ? `# Hacker News AI Community Digest ${dateStr}\n\n` +
          `> Source: [Hacker News](https://news.ycombinator.com/) | ` +
          `${hnData.stories.length} stories | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# Hacker News AI 社区动态日报 ${dateStr}\n\n` +
          `> 数据来源: [Hacker News](https://news.ycombinator.com/) | ` +
          `共 ${hnData.stories.length} 条 | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const hnContent = header + hnSummary + footer;

    console.log(`  Saved ${saveFile(hnContent, dateStr, fileName)}`);

    if (digestRepo && lang === "zh") {
      const hnUrl = await createGitHubIssue(`📰 Hacker News AI 社区动态日报 ${dateStr}`, hnContent, "hn");
      console.log(`  Created HN issue: ${hnUrl}`);
    }
  } catch (err) {
    console.error(`  [hn/${lang}] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");
  requireEnv("ANTHROPIC_API_KEY");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = new Date(now.getTime() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const utcStr = now.toISOString().slice(0, 16).replace("T", " ");
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  console.log(
    `[${now.toISOString()}] Starting digest | endpoint: ${process.env["ANTHROPIC_BASE_URL"] ?? "api.anthropic.com"}`,
  );

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const { fetched, skillsData, webResults, trendingData, hnData } = await fetchAllData(since, webState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));

  // 2. Generate per-repo LLM summaries in parallel (zh + en simultaneously)
  console.log("  Generating summaries in ZH and EN in parallel...");
  const [zhSummaries, enSummaries] = await Promise.all([
    generateSummaries(fetchedCli, fetchedOpenclaw, skillsData, fetchedPeers, trendingData, dateStr, "zh"),
    generateSummaries(fetchedCli, fetchedOpenclaw, skillsData, fetchedPeers, trendingData, dateStr, "en"),
  ]);

  // 3. Generate cross-repo comparisons in parallel (zh + en)
  console.log("  Calling LLM for comparative analyses (ZH + EN)...");
  const openclawDigest: RepoDigest = {
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: zhSummaries.openclawSummary,
  };
  const enOpenclawDigest: RepoDigest = {
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: enSummaries.openclawSummary,
  };
  const [comparison, peersComparison, enComparison, enPeersComparison] = await Promise.all([
    callLlm(buildComparisonPrompt(zhSummaries.cliDigests, dateStr, "zh")),
    callLlm(buildPeersComparisonPrompt(openclawDigest, zhSummaries.peerDigests, dateStr, "zh")),
    callLlm(buildComparisonPrompt(enSummaries.cliDigests, dateStr, "en")),
    callLlm(buildPeersComparisonPrompt(enOpenclawDigest, enSummaries.peerDigests, dateStr, "en")),
  ]);

  const footer = autoGenFooter("zh");
  const enFooter = autoGenFooter("en");

  // 4. Build + save all reports
  const digestContent = buildCliReportContent(
    zhSummaries.cliDigests,
    zhSummaries.skillsSummary,
    comparison,
    utcStr,
    dateStr,
    footer,
    "zh",
  );
  const openclawContent = buildOpenclawReportContent(
    fetchedOpenclaw,
    zhSummaries.peerDigests,
    zhSummaries.openclawSummary,
    peersComparison,
    utcStr,
    dateStr,
    footer,
    "zh",
  );
  const enDigestContent = buildCliReportContent(
    enSummaries.cliDigests,
    enSummaries.skillsSummary,
    enComparison,
    utcStr,
    dateStr,
    enFooter,
    "en",
  );
  const enOpenclawContent = buildOpenclawReportContent(
    fetchedOpenclaw,
    enSummaries.peerDigests,
    enSummaries.openclawSummary,
    enPeersComparison,
    utcStr,
    dateStr,
    enFooter,
    "en",
  );

  console.log(`  Saved ${saveFile(digestContent, dateStr, "ai-cli.md")}`);
  console.log(`  Saved ${saveFile(openclawContent, dateStr, "ai-agents.md")}`);
  console.log(`  Saved ${saveFile(enDigestContent, dateStr, "ai-cli-en.md")}`);
  console.log(`  Saved ${saveFile(enOpenclawContent, dateStr, "ai-agents-en.md")}`);

  // Web report: zh saves state, en skips state save
  await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, footer, "zh");
  await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, enFooter, "en");

  await Promise.all([
    saveTrendingReport(trendingData, zhSummaries.trendingSummary, utcStr, dateStr, digestRepo, footer, "zh"),
    saveTrendingReport(
      trendingData,
      enSummaries.trendingSummary,
      utcStr,
      dateStr,
      digestRepo,
      enFooter,
      "en",
    ),
    saveHnReport(hnData, utcStr, dateStr, digestRepo, footer, "zh"),
    saveHnReport(hnData, utcStr, dateStr, digestRepo, enFooter, "en"),
  ]);

  // 5. Create GitHub issues for CLI + OpenClaw (zh only)
  if (digestRepo) {
    const cliUrl = await createGitHubIssue(`📊 AI CLI 工具社区动态日报 ${dateStr}`, digestContent, "digest");
    console.log(`  Created CLI issue: ${cliUrl}`);

    const openclawUrl = await createGitHubIssue(
      `🦞 OpenClaw 生态日报 ${dateStr}`,
      openclawContent,
      "openclaw",
    );
    console.log(`  Created OpenClaw issue: ${openclawUrl}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
