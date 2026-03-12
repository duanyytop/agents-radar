/**
 * LLM prompt builders and item formatting.
 */

import type { RepoConfig, GitHubItem, GitHubRelease } from "./github.ts";
import type { Lang } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RepoDigest {
  config: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
  summary: string;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

export function formatItem(item: GitHubItem, lang: Lang = "zh"): string {
  const labels = item.labels.map((l) => l.name).join(", ");
  const labelStr = labels ? ` [${labels}]` : "";
  const body = (item.body ?? "").replace(/\n/g, " ").trim().slice(0, 300);
  const ellipsis = (item.body ?? "").length > 300 ? "..." : "";
  const t =
    lang === "en"
      ? {
          author: "Author",
          created: "Created",
          updated: "Updated",
          comments: "Comments",
          url: "URL",
          summary: "Summary",
        }
      : { author: "作者", created: "创建", updated: "更新", comments: "评论", url: "链接", summary: "摘要" };
  // Extract "owner/repo" from html_url to avoid full GitHub URLs that trigger cross-references
  const repoSlug = item.html_url.replace(/^https:\/\/github\.com\//, "").replace(/\/(issues|pull)\/\d+$/, "");
  const itemKind = item.html_url.includes("/pull/") ? "PR" : "Issue";
  const refStr = `${repoSlug} ${itemKind} #${item.number}`;
  return [
    `#${item.number} [${item.state.toUpperCase()}]${labelStr} ${item.title}`,
    `  ${t.author}: @${item.user.login} | ${t.created}: ${item.created_at.slice(0, 10)} | ${t.updated}: ${item.updated_at.slice(0, 10)} | ${t.comments}: ${item.comments} | 👍: ${item.reactions?.["+1"] ?? 0}`,
    `  ${t.url}: ${refStr}`,
    `  ${t.summary}: ${body}${ellipsis}`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Sampling helpers (shared)
// ---------------------------------------------------------------------------

const CLI_ISSUE_LIMIT = 30;
const CLI_PR_LIMIT = 20;

/** Sort by comment count desc, take top N. */
export function topN(items: GitHubItem[], n: number): GitHubItem[] {
  return [...items].sort((a, b) => b.comments - a.comments).slice(0, n);
}

export function sampleNote(total: number, sampled: number, lang: Lang = "zh"): string {
  if (lang === "en") {
    return total > sampled
      ? `(Total: ${total} items; showing top ${sampled} by comment count)`
      : `(Total: ${total} items)`;
  }
  return total > sampled ? `（共 ${total} 条，以下展示评论数最多的 ${sampled} 条）` : `（共 ${total} 条）`;
}

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------

export function buildCliPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  lang: Lang = "zh",
): string {
  const sampledIssues = topN(issues, CLI_ISSUE_LIMIT);
  const sampledPrs = topN(prs, CLI_PR_LIMIT);

  const issuesText =
    sampledIssues.map((i) => formatItem(i, lang)).join("\n") || (lang === "en" ? "None" : "无");
  const prsText = sampledPrs.map((p) => formatItem(p, lang)).join("\n") || (lang === "en" ? "None" : "无");
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : lang === "en"
      ? "None"
      : "无";

  const issueNote = sampleNote(issues.length, sampledIssues.length, lang);
  const prNote = sampleNote(prs.length, sampledPrs.length, lang);

  if (lang === "en") {
    return `You are a technical analyst focused on AI developer tools. Based on the following GitHub data, generate the ${cfg.name} community digest for ${dateStr}.

# Data source: github.com/${cfg.repo}

## Latest Releases (last 24h)
${releasesText}

## Latest Issues (updated in last 24h)${issueNote}
${issuesText}

## Latest Pull Requests (updated in last 24h)${prNote}
${prsText}

---

Generate a structured English digest with the following sections:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases** - If new versions exist, summarize changes; omit if none
3. **Hot Issues** - Pick 10 noteworthy Issues, explain why they matter and community reaction
4. **Key PR Progress** - Pick 10 important PRs, describe features or fixes
5. **Feature Request Trends** - Distill the most-requested feature directions from all Issues
6. **Developer Pain Points** - Summarize recurring developer frustrations or high-frequency requests

Style: concise and professional, suited for technical developers. Include GitHub links for each item.
`;
  }

  return `你是一位专注于 AI 开发工具的技术分析师。请根据以下 GitHub 数据，生成 ${dateStr} 的 ${cfg.name} 社区动态日报。

# 数据来源: github.com/${cfg.repo}

## 最新 Releases（过去24小时）
${releasesText}

## 最新 Issues（过去24小时内更新）${issueNote}
${issuesText}

## 最新 Pull Requests（过去24小时内更新）${prNote}
${prsText}

---

请生成一份结构清晰的中文日报，包含以下部分：

1. **今日速览** - 用2-3句话概括今天最重要的动态
2. **版本发布** - 如有新版本，总结更新内容；无则省略
3. **社区热点 Issues** - 挑选 10 个最值得关注的 Issue，说明为什么重要、社区反应如何
4. **重要 PR 进展** - 挑选 10 个重要的 PR，说明功能或修复内容
5. **功能需求趋势** - 从所有 Issues 中提炼出社区最关注的功能方向（如 IDE 集成、性能、新模型支持等）
6. **开发者关注点** - 总结开发者反馈中的痛点或高频需求

语言要求：简洁专业，适合技术开发者阅读。每个条目附上 GitHub 链接。
`;
}

const PEER_ISSUE_LIMIT = 30;
const PEER_PR_LIMIT = 20;

export function buildPeerPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  issueLimit = PEER_ISSUE_LIMIT,
  prLimit = PEER_PR_LIMIT,
  lang: Lang = "zh",
): string {
  const totalIssues = issues.length;
  const totalPrs = prs.length;

  const sampledIssues = topN(issues, issueLimit);
  const sampledPrs = topN(prs, prLimit);

  const noneStr = lang === "en" ? "None" : "无";
  const issuesText = sampledIssues.map((i) => formatItem(i, lang)).join("\n") || noneStr;
  const prsText = sampledPrs.map((p) => formatItem(p, lang)).join("\n") || noneStr;
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : noneStr;

  const openIssues = issues.filter((i) => i.state === "open").length;
  const closedIssues = issues.filter((i) => i.state === "closed").length;
  const openPrs = prs.filter((p) => p.state === "open").length;
  const mergedPrs = prs.filter((p) => p.state === "closed").length;

  const issueSampleNote = sampleNote(totalIssues, sampledIssues.length, lang);
  const prSampleNote = sampleNote(totalPrs, sampledPrs.length, lang);

  if (lang === "en") {
    return `You are an analyst of AI agent and personal AI assistant open-source projects. Based on the following GitHub data from ${cfg.name} (github.com/${cfg.repo}), generate a project digest for ${dateStr}.

# Data Overview
- Issues updated in last 24h: ${totalIssues} (open/active: ${openIssues}, closed: ${closedIssues})
- PRs updated in last 24h: ${totalPrs} (open: ${openPrs}, merged/closed: ${mergedPrs})
- New releases: ${releases.length}

## Latest Releases
${releasesText}

## Latest Issues ${issueSampleNote}
${issuesText}

## Latest Pull Requests ${prSampleNote}
${prsText}

---

Generate a structured English ${cfg.name} project digest with the following sections:

1. **Today's Overview** - 3-5 sentences summarizing project status, including activity assessment
2. **Releases** - If new versions exist, detail changes, breaking changes, migration notes; omit if none
3. **Project Progress** - Merged/closed PRs today, what features advanced or were fixed
4. **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs
5. **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist
6. **Feature Requests & Roadmap Signals** - User-requested features, predict which might be in next version
7. **User Feedback Summary** - Real user pain points, use cases, satisfaction/dissatisfaction
8. **Backlog Watch** - Long-unanswered important Issues or PRs needing maintainer attention

Style: objective, data-driven, highlighting project health. Include GitHub links for each item.
`;
  }

  return `你是一位 AI 智能体与个人 AI 助手领域开源项目分析师。请根据以下来自 ${cfg.name} (github.com/${cfg.repo}) 的 GitHub 数据，生成 ${dateStr} 的项目动态日报。

# 数据概览
- 过去24小时 Issues 更新：${totalIssues} 条（新开/活跃: ${openIssues}，已关闭: ${closedIssues}）
- 过去24小时 PR 更新：${totalPrs} 条（待合并: ${openPrs}，已合并/关闭: ${mergedPrs}）
- 新版本发布：${releases.length} 个

## 最新 Releases
${releasesText}

## 最新 Issues ${issueSampleNote}
${issuesText}

## 最新 Pull Requests ${prSampleNote}
${prsText}

---

请生成一份结构清晰的 ${cfg.name} 项目日报，包含以下部分：

1. **今日速览** - 用3-5句话概括项目今日整体状态，包括活跃度评估
2. **版本发布** - 如有新版本，详细说明更新内容、破坏性变更、迁移注意事项；无则省略
3. **项目进展** - 今日合并/关闭的重要 PR，说明推进了哪些功能或修复，项目整体向前迈进了多少
4. **社区热点** - 今日讨论最活跃、评论最多、反应最多的 Issues/PRs（附链接），分析背后的诉求
5. **Bug 与稳定性** - 今日报告的 Bug、崩溃、回归问题，按严重程度排列，标注是否已有 fix PR
6. **功能请求与路线图信号** - 用户提出的新功能需求，结合已有 PR 判断哪些可能被纳入下一版本
7. **用户反馈摘要** - 从 Issues 评论中提炼真实用户痛点、使用场景、满意/不满意的地方
8. **待处理积压** - 长期未响应的重要 Issue 或 PR，提醒维护者关注

语言要求：客观专业，数据驱动，突出项目健康度。每个条目附上 GitHub 链接。
`;
}

export function buildPeersComparisonPrompt(
  openclawDigest: RepoDigest,
  peerDigests: RepoDigest[],
  dateStr: string,
  lang: Lang = "zh",
): string {
  const noActivityStr = lang === "en" ? "No activity in the last 24 hours." : "过去24小时无活动。";

  const openclawSection =
    lang === "en"
      ? `## OpenClaw (core reference, github.com/${openclawDigest.config.repo})\n${openclawDigest.summary}`
      : `## OpenClaw（核心参照，github.com/${openclawDigest.config.repo}）\n${openclawDigest.summary}`;

  const peerSections = peerDigests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n${noActivityStr}`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a senior analyst of the AI agent and personal AI assistant open-source ecosystem. The following are ${dateStr} community digest summaries for each project.

${openclawSection}

---

${peerSections}

---

Generate a cross-project comparison report in English with these sections:

1. **Ecosystem Overview** - 3-5 sentences on the overall personal AI assistant / agent open-source landscape
2. **Activity Comparison** - Table comparing Issues count, PR count, Release status, and health score for each project
3. **OpenClaw's Position** - Advantages vs peers, technical approach differences, community size comparison
4. **Shared Technical Focus Areas** - Requirements emerging across multiple projects (note which projects, specific needs)
5. **Differentiation Analysis** - Key differences in feature focus, target users, technical architecture
6. **Community Momentum & Maturity** - Activity tiers, which are rapidly iterating, which are stabilizing
7. **Trend Signals** - Industry trends extracted from community feedback, value for AI agent developers

Style: concise and professional, data-backed, suited for technical decision-makers and developers.
`;
  }

  return `你是一位专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师。以下是 ${dateStr} 各开源项目的社区动态摘要。

${openclawSection}

---

${peerSections}

---

请基于上述各项目的动态，生成一份横向对比分析报告，包含以下部分：

1. **生态全景** - 用3-5句话概括个人 AI 助手/自主智能体开源生态整体态势
2. **各项目活跃度对比** - 以表格形式汇总各项目今日的 Issues 数、PR 数、Release 情况及健康度评估
3. **OpenClaw 在生态中的定位** - 与同类相比的优势、技术路线差异、社区规模对比
4. **共同关注的技术方向** - 多项目共同涌现的需求（注明涉及哪些项目、具体诉求）
5. **差异化定位分析** - 功能侧重、目标用户、技术架构的关键差异
6. **社区热度与成熟度** - 活跃度分层，哪些处于快速迭代阶段，哪些在质量巩固阶段
7. **值得关注的趋势信号** - 从社区反馈中提炼行业趋势，对 AI 智能体开发者的参考价值

语言要求：简洁专业，有数据支撑，适合技术决策者和开发者阅读。
`;
}

export function buildSkillsPrompt(
  prs: GitHubItem[],
  issues: GitHubItem[],
  dateStr: string,
  lang: Lang = "zh",
): string {
  const topPrs = topN(prs, 20);
  const topIssues = topN(issues, 15);

  const noneStr = lang === "en" ? "None" : "无";
  const prsText = topPrs.map((p) => formatItem(p, lang)).join("\n") || noneStr;
  const issuesText = topIssues.map((i) => formatItem(i, lang)).join("\n") || noneStr;

  if (lang === "en") {
    return `You are a technical analyst focused on the Claude Code ecosystem. The following data is from github.com/anthropics/skills (official Claude Code Skills repository). Analyze the community's most-watched Skills activity (data as of ${dateStr}).

## Repository Context
anthropics/skills is the official Claude Code Skills collection. Each PR typically represents a new or improved Skill. The community proposes new Skills and reports issues via Issues; PRs represent actual Skill submissions.

## Popular Pull Requests (sorted by comments, ${prs.length} total, showing top ${topPrs.length})
${prsText}

## Community Issues (sorted by comments, ${issues.length} total, showing top ${topIssues.length})
${issuesText}

---

Generate a Claude Code Skills community highlights report in English with these sections:

1. **Top Skills Ranking** - List the 5-8 most-discussed Skills (PRs) by comments/attention, describe each Skill's functionality, discussion highlights, and current status (open/merged/draft)
2. **Community Demand Trends** - From Issues, distill the most-anticipated new Skill directions (e.g. workflow automation, code review, test generation, documentation)
3. **High-Potential Pending Skills** - Active-comment PRs not yet merged; these Skills may land soon
4. **Skills Ecosystem Insight** - One-sentence summary: what is the community's most concentrated demand at the Skills level?

Style: concise and professional, include GitHub links for each item.
`;
  }

  return `你是一位专注于 Claude Code 生态的技术分析师。以下是来自 github.com/anthropics/skills（Claude Code Skills 官方仓库）的数据，请分析社区最关注的 Skills 动态（数据截止 ${dateStr}）。

## 仓库说明
anthropics/skills 是 Claude Code 官方 Skills 集合仓库，每个 PR 通常对应一个新增或改进的 Skill。社区通过 Issues 提出新 Skill 需求或反馈问题，PR 则代表实际提交的 Skill。

## 热门 Pull Requests（按评论数排序，共 ${prs.length} 条，展示前 ${topPrs.length} 条）
${prsText}

## 社区 Issues（按评论数排序，共 ${issues.length} 条，展示前 ${topIssues.length} 条）
${issuesText}

---

请生成一份 Claude Code Skills 社区热点报告，包含以下部分：

1. **热门 Skills 排行** - 列出评论/关注度最高的 5~8 个 Skills（PR），说明每个 Skill 的功能、社区讨论热点及当前状态（open/merged/draft）
2. **社区需求趋势** - 从 Issues 中提炼社区最期待的新 Skill 方向（如工作流自动化、代码审查、测试生成、文档等）
3. **高潜力待合并 Skills** - 评论活跃但尚未合并的 PR，这些 Skills 可能近期落地
4. **Skills 生态洞察** - 一句话总结：当前社区在 Skills 层面最集中的诉求是什么

语言要求：简洁专业，每个条目附上 GitHub 链接。
`;
}

export function buildComparisonPrompt(digests: RepoDigest[], dateStr: string, lang: Lang = "zh"): string {
  const noActivityStr = lang === "en" ? "No activity in the last 24 hours." : "过去24小时无活动。";

  const sections = digests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n${noActivityStr}`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a senior technical analyst of the AI developer tools ecosystem. The following are ${dateStr} community digest summaries for each major AI CLI tool:

${sections}

---

Generate a cross-tool comparison report in English with these sections:

1. **Ecosystem Overview** - 3-5 sentences on the overall AI CLI tools development landscape
2. **Activity Comparison** - Table comparing Issues count, PR count, Release status for each tool today
3. **Shared Feature Directions** - Requirements appearing across multiple tool communities (note which tools, specific needs)
4. **Differentiation Analysis** - Differences in feature focus, target users, and technical approach
5. **Community Momentum & Maturity** - Which tools have more active communities, which are rapidly iterating
6. **Trend Signals** - Industry trends from community feedback, reference value for developers

Style: concise and professional, data-backed, suited for technical decision-makers and developers.
`;
  }

  return `你是一位专注于 AI 开发工具生态的资深技术分析师。以下是 ${dateStr} 各主流 AI CLI 工具的社区动态摘要：

${sections}

---

请基于上述各工具的动态，生成一份横向对比分析报告，包含以下部分：

1. **生态全景** - 用3-5句话概括当前 AI CLI 工具整体发展态势
2. **各工具活跃度对比** - 以表格形式汇总各工具今日的 Issues 数、PR 数、Release 情况
3. **共同关注的功能方向** - 多个工具社区都在关注的需求（说明哪些工具、具体诉求）
4. **差异化定位分析** - 各工具在功能侧重、目标用户、技术路线上的差异
5. **社区热度与成熟度** - 哪些工具社区更活跃，哪些处于快速迭代阶段
6. **值得关注的趋势信号** - 从社区反馈中提炼出的行业趋势，对开发者有何参考价值

语言要求：简洁专业，有数据支撑，适合技术决策者和开发者阅读。
`;
}
