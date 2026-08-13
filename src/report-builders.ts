/**
 * Report content builders — extracted from index.ts for testability.
 */

import type { RepoConfig, RepoFetch } from "./github.ts";
import type { RepoDigest } from "./prompts.ts";
import type { RadarData } from "./radar.ts";
import { type Lang, CLI_REPORT, OPENCLAW_REPORT, INFRA_REPORT, RADAR_REPORT } from "./i18n.ts";

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
  lang: Lang = "zh",
): string {
  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${skillsRepo})`;

  const title = `# ${CLI_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta = CLI_REPORT.meta(utcStr, cliDigests.length, lang);

  const skillsSection =
    `## ${CLI_REPORT.skillsHeading[lang]}\n\n` +
    `> ${CLI_REPORT.skillsSource[lang]}: [anthropics/skills](https://github.com/${skillsRepo})\n\n` +
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
    title +
    meta +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## ${CLI_REPORT.comparison[lang]}\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## ${CLI_REPORT.detail[lang]}\n\n` +
    toolSections +
    footer
  );
}

// ---------------------------------------------------------------------------
// Infra Report
// ---------------------------------------------------------------------------

export function buildInfraReportContent(
  infraDigests: RepoDigest[],
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: Lang = "zh",
): string {
  const repoLinks = infraDigests
    .map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`)
    .join("\n");

  const projectSections = infraDigests
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

  return (
    `# ${INFRA_REPORT.title[lang]} ${dateStr}\n\n` +
    INFRA_REPORT.meta(utcStr, infraDigests.length, lang) +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## ${INFRA_REPORT.comparison[lang]}\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## ${INFRA_REPORT.detail[lang]}\n\n` +
    projectSections +
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
  lang: Lang = "zh",
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

  const title = `# ${OPENCLAW_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta =
    lang === "en"
      ? `> Issues: ${issues.length} | PRs: ${prs.length} | Projects covered: ${1 + openclawPeers.length} | Generated: ${utcStr} UTC\n\n`
      : `> Issues: ${issues.length} | PRs: ${prs.length} | 覆盖项目: ${1 + openclawPeers.length} 个 | 生成时间: ${utcStr} UTC\n\n`;

  return (
    title +
    meta +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    `## ${OPENCLAW_REPORT.deepDive[lang]}\n\n` +
    openclawSummary +
    `\n\n---\n\n` +
    `## ${OPENCLAW_REPORT.comparison[lang]}\n\n` +
    peersComparison +
    `\n\n---\n\n` +
    `## ${OPENCLAW_REPORT.peers[lang]}\n\n` +
    peerDetailSections +
    footer
  );
}

function escapeRadarTable(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
}

function escapeMarkdownLinkLabel(value: string): string {
  return value.replace(/([\\[\]])/g, "\\$1");
}

export function buildRadarReportContent(
  data: RadarData,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: Lang = "zh",
): string {
  const mode = RADAR_REPORT.mode[data.mode][lang];
  const recommendations = data.top5
    .slice(0, 5)
    .map(
      (item, index) =>
        `### ${index + 1}. [${escapeMarkdownLinkLabel(item.story.title)}](${item.story.url}) — ${item.totalScore.toFixed(1)}\n\n` +
        `**${RADAR_REPORT.reason[lang]}:** ${item.reason[lang]}\n\n` +
        `[${RADAR_REPORT.discussion[lang]}](${item.story.hnUrl})`,
    )
    .join("\n\n");

  const rows = data.items
    .map(
      (item, index) =>
        `| ${index + 1} | [${escapeRadarTable(escapeMarkdownLinkLabel(item.story.title))}](${item.story.url}) | ` +
        `${item.totalScore.toFixed(1)} | ${item.story.points} | ${item.story.comments} | ` +
        `${escapeRadarTable(item.story.createdAt)} | ${escapeRadarTable(item.summary[lang])} |`,
    )
    .join("\n");

  const insufficient =
    data.items.length < 5 ? `${RADAR_REPORT.insufficient(data.items.length, lang)}\n\n` : "";

  return (
    `# ${RADAR_REPORT.title[lang]} ${dateStr}\n\n` +
    RADAR_REPORT.meta(data.scannedCount, data.items.length, data.duplicateCount, mode, utcStr, lang) +
    `\n\n---\n\n## ${RADAR_REPORT.top5[lang]}\n\n` +
    insufficient +
    recommendations +
    `\n\n---\n\n## ${RADAR_REPORT.allCandidates[lang]}\n\n` +
    RADAR_REPORT.tableHeader[lang] +
    "\n" +
    RADAR_REPORT.tableAlign +
    "\n" +
    rows +
    footer
  );
}
