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
} from "./prompts.ts";
import { callLlm, saveFile, autoGenFooter } from "./report.ts";
import { loadWebState, saveWebState, fetchSiteContent, type WebFetchResult } from "./web.ts";

// ---------------------------------------------------------------------------
// Repo config
// ---------------------------------------------------------------------------

/** AI CLI tools — included in per-tool digests and cross-tool comparison. */
const CLI_REPOS: RepoConfig[] = [
  { id: "claude-code", repo: "anthropics/claude-code",   name: "Claude Code"   },
  { id: "codex",       repo: "openai/codex",             name: "OpenAI Codex"  },
  { id: "gemini-cli",  repo: "google-gemini/gemini-cli", name: "Gemini CLI"    },
  { id: "kimi-cli",    repo: "MoonshotAI/kimi-cli",      name: "Kimi Code CLI" },
  { id: "opencode",    repo: "anomalyco/opencode",       name: "OpenCode"      },
  { id: "qwen-code",   repo: "QwenLM/qwen-code",         name: "Qwen Code"     },
];

/** OpenClaw — high-volume project tracked separately with its own prompt. */
const OPENCLAW: RepoConfig = {
  id: "openclaw",
  repo: "openclaw/openclaw",
  name: "OpenClaw",
  paginated: true,
};

/** Peer projects in the personal AI assistant / agent space — tracked for cross-ecosystem comparison. */
const OPENCLAW_PEERS: RepoConfig[] = [
  { id: "zeroclaw",  repo: "zeroclaw-labs/zeroclaw",   name: "Zeroclaw"  },
  { id: "easyclaw",  repo: "gaoyangz77/easyclaw",       name: "EasyClaw"  },
  { id: "lobsterai", repo: "netease-youdao/LobsterAI",  name: "LobsterAI" },
  { id: "zeptoclaw", repo: "qhkm/zeptoclaw",            name: "ZeptoClaw" },
  { id: "nanobot",   repo: "HKUDS/nanobot",             name: "NanoBot",  paginated: true },
  { id: "picoclaw",  repo: "sipeed/picoclaw",            name: "PicoClaw", paginated: true },
  { id: "nanoclaw",  repo: "qwibitai/nanoclaw",          name: "NanoClaw"  },
  { id: "ironclaw",  repo: "nearai/ironclaw",            name: "IronClaw"  },
  { id: "tinyclaw",  repo: "TinyAGI/tinyclaw",           name: "TinyClaw"  },
];

/** Claude Code Skills — trending skills tracked separately, no date filter. */
const CLAUDE_SKILLS_REPO = "anthropics/skills";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");
  requireEnv("ANTHROPIC_API_KEY");

  const now     = new Date();
  const since   = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = new Date(now.getTime() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const utcStr  = now.toISOString().slice(0, 16).replace("T", " ");
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const baseUrl = process.env["ANTHROPIC_BASE_URL"] ?? "api.anthropic.com";
  console.log(`[${now.toISOString()}] Starting digest | endpoint: ${baseUrl}`);

  // ── 1. Fetch all repos + web content in parallel ───────────────────────────

  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  console.log(`  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web`);

  const webState = loadWebState();

  const [fetched, skillsData, webResults] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        const [issuesRaw, prs, releases] = await Promise.all([
          fetchRecentItems(cfg, "issues", since),
          fetchRecentItems(cfg, "pulls", since),
          fetchRecentReleases(cfg.repo, since),
        ]);
        const issues = issuesRaw.filter((i) => !i.pull_request);
        console.log(`  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`);
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
        return { site: "anthropic", siteName: "Anthropic (Claude)", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
  ]);

  const peerIds         = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli      = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers    = fetched.filter((f) => peerIds.has(f.cfg.id));

  // ── 2. Generate CLI summaries + OpenClaw summary + Skills summary + Peer summaries in parallel

  const [cliDigests, openclawSummary, skillsSummary, peerDigests] = await Promise.all([
    Promise.all(
      fetchedCli.map(async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: "过去24小时无活动。" };
        }
        console.log(`  [${cfg.id}] Calling LLM for summary...`);
        try {
          const summary = await callLlm(buildCliPrompt(cfg, issues, prs, releases, dateStr));
          return { config: cfg, issues, prs, releases, summary };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: "⚠️ 摘要生成失败。" };
        }
      }),
    ),
    (async () => {
      const { cfg, issues, prs, releases } = fetchedOpenclaw;
      const hasData = issues.length || prs.length || releases.length;
      if (!hasData) {
        console.log(`  [openclaw] No activity, skipping LLM call`);
        return "过去24小时无活动。";
      }
      console.log(`  [openclaw] Calling LLM for OpenClaw report...`);
      try {
        return await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr, 50, 30));
      } catch (err) {
        console.error(`  [openclaw] LLM call failed: ${err}`);
        return "⚠️ 摘要生成失败。";
      }
    })(),
    (async () => {
      console.log("  [claude-code-skills] Calling LLM for skills report...");
      try {
        return await callLlm(buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr));
      } catch (err) {
        console.error(`  [claude-code-skills] LLM call failed: ${err}`);
        return "⚠️ Skills 摘要生成失败。";
      }
    })(),
    Promise.all(
      fetchedPeers.map(async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: "过去24小时无活动。" };
        }
        console.log(`  [${cfg.id}] Calling LLM for peer summary...`);
        try {
          return { config: cfg, issues, prs, releases,
                   summary: await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr)) };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: "⚠️ 摘要生成失败。" };
        }
      }),
    ),
  ]);

  // Build openclawDigest for peers comparison (reuses openclawSummary — zero extra LLM call)
  const openclawDigest: RepoDigest = {
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: openclawSummary,
  };

  // ── 3. Generate CLI comparison + peers comparison in parallel ──────────────

  console.log("  Calling LLM for CLI comparative analysis + peers comparison...");
  const [comparison, peersComparison] = await Promise.all([
    callLlm(buildComparisonPrompt(cliDigests, dateStr)),
    callLlm(buildPeersComparisonPrompt(openclawDigest, peerDigests, dateStr)),
  ]);

  const footer = autoGenFooter();

  // ── 4. Build merged CLI digest (comparison + per-tool details) ─────────────

  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${CLAUDE_SKILLS_REPO})`;

  const toolSections = cliDigests
    .map((d) => {
      // For Claude Code, prepend the skills section at the top of the details block
      const skillsSection = d.config.id === "claude-code"
        ? `## Claude Code Skills 社区热点\n\n> 数据来源: [anthropics/skills](https://github.com/${CLAUDE_SKILLS_REPO})\n\n${skillsSummary}\n\n---\n\n`
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

  const digestContent =
    `# AI CLI 工具社区动态日报 ${dateStr}\n\n` +
    `> 生成时间: ${utcStr} UTC | 覆盖工具: ${cliDigests.length} 个\n\n` +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## 横向对比\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## 各工具详细报告\n\n` +
    toolSections +
    footer;

  console.log(`  Saved ${saveFile(digestContent, dateStr, "ai-cli.md")}`);

  // ── 5. Save merged OpenClaw + peers report ────────────────────────────────

  const { issues: ocIssues, prs: ocPrs, releases: ocReleases } = fetchedOpenclaw;

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

  const openclawContent =
    `# OpenClaw 生态日报 ${dateStr}\n\n` +
    `> Issues: ${ocIssues.length} | PRs: ${ocPrs.length} | 覆盖项目: ${1 + OPENCLAW_PEERS.length} 个 | 生成时间: ${utcStr} UTC\n\n` +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    `## OpenClaw 项目深度报告\n\n` +
    openclawSummary +
    `\n\n---\n\n` +
    `## 横向生态对比\n\n` +
    peersComparison +
    `\n\n---\n\n` +
    `## 同赛道项目详细报告\n\n` +
    peerDetailSections +
    footer;

  console.log(`  Saved ${saveFile(openclawContent, dateStr, "ai-agents.md")}`);

  // ── 6. Web report ──────────────────────────────────────────────────────────

  const hasNewWebContent = webResults.some((r) => r.newItems.length > 0);
  let webReportPath = "";

  if (hasNewWebContent) {
    console.log("  [web] Calling LLM for web content report...");
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr), 8192);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const mode = isFirstRun ? "首次全量" : "今日更新";
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const webContent =
        `# AI 官方内容追踪报告 ${dateStr}\n\n` +
        `> ${mode} | 新增内容: ${totalNew} 篇 | 生成时间: ${utcStr} UTC\n\n` +
        `数据来源:\n` +
        `- Anthropic: [anthropic.com](https://www.anthropic.com) — ` +
          `新增 ${webResults.find((r) => r.site === "anthropic")?.newItems.length ?? 0} 篇` +
          `（sitemap 共 ${webResults.find((r) => r.site === "anthropic")?.totalDiscovered ?? 0} 条）\n` +
        `- OpenAI: [openai.com](https://openai.com) — ` +
          `新增 ${webResults.find((r) => r.site === "openai")?.newItems.length ?? 0} 篇` +
          `（sitemap 共 ${webResults.find((r) => r.site === "openai")?.totalDiscovered ?? 0} 条）\n\n` +
        `---\n\n` +
        webSummary +
        footer;

      webReportPath = saveFile(webContent, dateStr, "ai-web.md");
      console.log(`  Saved ${webReportPath}`);

      if (digestRepo) {
        const webUrl = await createGitHubIssue(
          `🌐 AI 官方内容追踪报告 ${dateStr}${isFirstRun ? "（首次全量）" : ""}`,
          webContent,
          "web",
        );
        console.log(`  Created web issue: ${webUrl}`);
      }
    } catch (err) {
      console.error(`  [web] Report generation failed: ${err}`);
    }
  } else {
    console.log("  [web] No new content detected, skipping report.");
  }

  // Persist updated web state (runs regardless of whether a report was generated)
  saveWebState(webState);
  console.log("  [web] State saved.");

  // ── 7. Create GitHub issues (CLI + OpenClaw) ────────────────────────────────

  if (digestRepo) {
    const cliUrl = await createGitHubIssue(`📊 AI CLI 工具社区动态日报 ${dateStr}`, digestContent, "digest");
    console.log(`  Created CLI issue: ${cliUrl}`);

    const openclawUrl = await createGitHubIssue(`🦞 OpenClaw 生态日报 ${dateStr}`, openclawContent, "openclaw");
    console.log(`  Created OpenClaw issue: ${openclawUrl}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
