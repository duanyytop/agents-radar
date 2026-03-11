/**
 * Report content builders — extracted from index.ts for testability.
 */

import type { RepoConfig, RepoFetch } from "./github.ts";
import type { RepoDigest } from "./prompts.ts";

// ---------------------------------------------------------------------------
// CLI Report
// ---------------------------------------------------------------------------

export function buildCliReportContent(
  cliDigests: RepoDigest[],
  skillsSummary: string,
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  skillsRepo: string,
  lang: "zh" | "en" = "zh",
): string {
  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${skillsRepo})`;

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
    `> ${t.skillsSource}: [anthropics/skills](https://github.com/${skillsRepo})\n\n` +
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

// ---------------------------------------------------------------------------
// OpenClaw Report
// ---------------------------------------------------------------------------

export function buildOpenclawReportContent(
  fetchedOpenclaw: RepoFetch,
  peerDigests: RepoDigest[],
  openclawSummary: string,
  peersComparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  openclaw: RepoConfig,
  openclawPeers: RepoConfig[],
  lang: "zh" | "en" = "zh",
): string {
  const { issues, prs } = fetchedOpenclaw;

  const peersRepoLinks =
    `- [OpenClaw](https://github.com/${openclaw.repo})\n` +
    openclawPeers.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

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
          meta: `> Issues: ${issues.length} | PRs: ${prs.length} | Projects covered: ${1 + openclawPeers.length} | Generated: ${utcStr} UTC\n\n`,
          deepDive: `## OpenClaw Deep Dive\n\n`,
          comparison: `## Cross-Ecosystem Comparison\n\n`,
          peers: `## Peer Project Reports\n\n`,
        }
      : {
          title: `# OpenClaw 生态日报 ${dateStr}\n\n`,
          meta: `> Issues: ${issues.length} | PRs: ${prs.length} | 覆盖项目: ${1 + openclawPeers.length} 个 | 生成时间: ${utcStr} UTC\n\n`,
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
