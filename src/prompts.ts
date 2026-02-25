/**
 * LLM prompt builders and item formatting.
 */

import type { RepoConfig, GitHubItem, GitHubRelease } from "./github.ts";

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

export function formatItem(item: GitHubItem): string {
  const labels   = item.labels.map((l) => l.name).join(", ");
  const labelStr = labels ? ` [${labels}]` : "";
  const body     = (item.body ?? "").replace(/\n/g, " ").trim().slice(0, 300);
  const ellipsis = (item.body ?? "").length > 300 ? "..." : "";
  return [
    `#${item.number} [${item.state.toUpperCase()}]${labelStr} ${item.title}`,
    `  作者: @${item.user.login} | 创建: ${item.created_at.slice(0, 10)} | 更新: ${item.updated_at.slice(0, 10)} | 评论: ${item.comments} | 👍: ${item.reactions?.["+1"] ?? 0}`,
    `  链接: ${item.html_url}`,
    `  摘要: ${body}${ellipsis}`,
  ].join("\n");
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
): string {
  const issuesText   = issues.map(formatItem).join("\n") || "无";
  const prsText      = prs.map(formatItem).join("\n") || "无";
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : "无";

  return `你是一位专注于 AI 开发工具的技术分析师。请根据以下 GitHub 数据，生成 ${dateStr} 的 ${cfg.name} 社区动态日报。

# 数据来源: github.com/${cfg.repo}

## 最新 Releases（过去24小时）
${releasesText}

## 最新 Issues（过去24小时内更新，共${issues.length}条）
${issuesText}

## 最新 Pull Requests（过去24小时内更新，共${prs.length}条）
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

/** Max items forwarded to the LLM for high-volume repos. */
const OPENCLAW_ISSUE_LIMIT = 50;
const OPENCLAW_PR_LIMIT    = 30;

/** Sort by comment count desc, take top N. */
function topN(items: GitHubItem[], n: number): GitHubItem[] {
  return [...items].sort((a, b) => b.comments - a.comments).slice(0, n);
}

export function buildOpenclawPrompt(
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
): string {
  const totalIssues = issues.length;
  const totalPrs    = prs.length;

  // Cap items sent to the LLM; keep stats over the full fetched set
  const sampledIssues = topN(issues, OPENCLAW_ISSUE_LIMIT);
  const sampledPrs    = topN(prs,    OPENCLAW_PR_LIMIT);

  const issuesText   = sampledIssues.map(formatItem).join("\n") || "无";
  const prsText      = sampledPrs.map(formatItem).join("\n") || "无";
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : "无";

  const openIssues   = issues.filter((i) => i.state === "open").length;
  const closedIssues = issues.filter((i) => i.state === "closed").length;
  const openPrs      = prs.filter((p) => p.state === "open").length;
  const mergedPrs    = prs.filter((p) => p.state === "closed").length;

  const issueSampleNote = totalIssues > OPENCLAW_ISSUE_LIMIT
    ? `（共 ${totalIssues} 条，以下展示评论数最多的 ${sampledIssues.length} 条）`
    : `（共 ${totalIssues} 条）`;
  const prSampleNote = totalPrs > OPENCLAW_PR_LIMIT
    ? `（共 ${totalPrs} 条，以下展示评论数最多的 ${sampledPrs.length} 条）`
    : `（共 ${totalPrs} 条）`;

  return `你是一位资深开源项目分析师，专注于跟踪大型开源项目的社区动态和项目进展。
请根据以下来自 OpenClaw (github.com/openclaw/openclaw) 的 GitHub 数据，生成 ${dateStr} 的项目动态日报。

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

请生成一份结构清晰的 OpenClaw 项目日报，包含以下部分：

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

export function buildComparisonPrompt(digests: RepoDigest[], dateStr: string): string {
  const sections = digests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n过去24小时无活动。`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

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
