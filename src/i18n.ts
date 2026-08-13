/**
 * Centralized i18n strings for bilingual (zh/en) report generation.
 */

export type Lang = "zh" | "en";

/** Get a bilingual string by language key. */
function t(zh: string, en: string): Record<Lang, string> {
  return { zh, en };
}

// ---------------------------------------------------------------------------
// Status & error messages (used in index.ts)
// ---------------------------------------------------------------------------

export const MSG = {
  noActivity: t("过去24小时无活动。", "No activity in the last 24 hours."),
  summaryFailed: t("⚠️ 摘要生成失败。", "⚠️ Summary generation failed."),
  skillsFailed: t("⚠️ Skills 摘要生成失败。", "⚠️ Skills summary generation failed."),
  trendingNoData: t(
    "⚠️ 今日趋势数据获取失败，无法生成报告。",
    "⚠️ Trending data unavailable, unable to generate report.",
  ),
  trendingFailed: t("⚠️ 趋势报告生成失败。", "⚠️ Trending report generation failed."),
} as const;

// ---------------------------------------------------------------------------
// Report headers & labels (used in report-builders.ts, index.ts)
// ---------------------------------------------------------------------------

export const CLI_REPORT = {
  title: t("AI CLI 工具社区动态日报", "AI CLI Tools Community Digest"),
  meta: (utcStr: string, count: number, lang: Lang) =>
    lang === "en"
      ? `> Generated: ${utcStr} UTC | Tools covered: ${count}\n\n`
      : `> 生成时间: ${utcStr} UTC | 覆盖工具: ${count} 个\n\n`,
  skillsHeading: t("Claude Code Skills 社区热点", "Claude Code Skills Highlights"),
  skillsSource: t("数据来源", "Source"),
  comparison: t("横向对比", "Cross-Tool Comparison"),
  detail: t("各工具详细报告", "Per-Tool Reports"),
} as const;

export const OPENCLAW_REPORT = {
  title: t("OpenClaw 生态日报", "OpenClaw Ecosystem Digest"),
  deepDive: t("OpenClaw 项目深度报告", "OpenClaw Deep Dive"),
  comparison: t("横向生态对比", "Cross-Ecosystem Comparison"),
  peers: t("同赛道项目详细报告", "Peer Project Reports"),
} as const;

export const INFRA_REPORT = {
  title: t("AI 基础设施日报", "AI Infrastructure Digest"),
  meta: (utcStr: string, count: number, lang: Lang) =>
    lang === "en"
      ? `> Generated: ${utcStr} UTC | Projects covered: ${count}\n\n`
      : `> 生成时间: ${utcStr} UTC | 覆盖项目: ${count} 个\n\n`,
  comparison: t("横向对比", "Cross-Project Comparison"),
  detail: t("各项目详细报告", "Per-Project Reports"),
} as const;

export const WEB_REPORT = {
  title: t("AI 官方内容追踪报告", "Official AI Content Report"),
  firstCrawl: t("首次全量", "First full crawl"),
  todayUpdate: t("今日更新", "Today's update"),
  newContent: (count: number, lang: Lang) =>
    lang === "en" ? `New content: ${count} articles` : `新增内容: ${count} 篇`,
  generated: (utcStr: string, lang: Lang) =>
    lang === "en" ? `Generated: ${utcStr} UTC` : `生成时间: ${utcStr} UTC`,
  sourcesHeader: t("数据来源:", "Sources:"),
  issueTitle: (dateStr: string, isFirstRun: boolean, lang: Lang) =>
    lang === "en"
      ? `🌐 Official AI Content Report ${dateStr}${isFirstRun ? " (First Crawl)" : ""}`
      : `🌐 AI 官方内容追踪报告 ${dateStr}${isFirstRun ? "（首次全量）" : ""}`,
} as const;

export const TRENDING_REPORT = {
  title: t("AI 开源趋势日报", "AI Open Source Trends"),
  sources: t("数据来源: GitHub Trending + GitHub Search API", "Sources: GitHub Trending + GitHub Search API"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📈 AI Open Source Trends ${dateStr}` : `📈 AI 开源趋势日报 ${dateStr}`,
} as const;

export const HN_REPORT = {
  title: t("Hacker News AI 社区动态日报", "Hacker News AI Community Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📰 Hacker News AI Digest ${dateStr}` : `📰 Hacker News AI 社区动态日报 ${dateStr}`,
} as const;

export const RADAR_REPORT = {
  title: t("AI 信息雷达", "AI Information Radar"),
  source: t("数据来源: Hacker News Top Stories", "Source: Hacker News Top Stories"),
  mode: {
    deepseek: t("DeepSeek 编辑评分", "DeepSeek editorial scoring"),
    deterministic: t("确定性降级模式", "Deterministic fallback"),
  },
  meta: (
    scanned: number,
    candidates: number,
    duplicates: number,
    mode: string,
    utcStr: string,
    lang: Lang,
  ) =>
    lang === "en"
      ? `> Source: Hacker News Top Stories | Scanned ${scanned} | Candidates ${candidates} | Duplicates ${duplicates} | Scoring: ${mode} | Generated: ${utcStr} UTC`
      : `> 数据来源: Hacker News Top Stories | 扫描 ${scanned} 条 | 候选 ${candidates} 条 | 去重 ${duplicates} 条 | 评分模式: ${mode} | 生成时间: ${utcStr} UTC`,
  top5: t("今日 Top 5", "Today's Top 5"),
  allCandidates: t("全部候选", "All Candidates"),
  reason: t("推荐理由", "Why it is recommended"),
  discussion: t("HN 讨论", "HN discussion"),
  tableHeader: t(
    "| 排名 | 标题 | 总分 | Points | Comments | 发布时间 | 摘要 |",
    "| Rank | Title | Score | Points | Comments | Published | Summary |",
  ),
  tableAlign: "| ---: | :--- | ---: | ---: | ---: | :--- | :--- |",
  insufficient: (count: number, lang: Lang) =>
    lang === "en"
      ? `Only ${count} candidates were available; no duplicate items were added.`
      : `当前仅有 ${count} 条候选，未使用重复条目补齐。`,
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📡 AI Information Radar ${dateStr}` : `📡 AI 信息雷达 ${dateStr}`,
} as const;

export const RADAR_FALLBACK = {
  summary: (title: string, points: number, comments: number): Record<Lang, string> =>
    t(
      `HN 热门条目：${title}（${points} 分，${comments} 条评论）。`,
      `HN item: ${title} (${points} points, ${comments} comments).`,
    ),
  reason: t(
    "基于 HN 排名、热度、讨论度与时效性的确定性推荐。",
    "Deterministic recommendation based on HN rank, popularity, discussion, and freshness.",
  ),
} as const;

export const PH_REPORT = {
  title: t("Product Hunt AI 产品日报", "Product Hunt AI Products Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `🚀 Product Hunt AI Digest ${dateStr}` : `🚀 Product Hunt AI 产品日报 ${dateStr}`,
} as const;

export const ARXIV_REPORT = {
  title: t("ArXiv AI 研究日报", "ArXiv AI Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📚 ArXiv AI Research Digest ${dateStr}` : `📚 ArXiv AI 研究日报 ${dateStr}`,
} as const;

export const HF_REPORT = {
  title: t("Hugging Face 热门模型日报", "Hugging Face Trending Models Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `🤗 Hugging Face Trending Models ${dateStr}` : `🤗 Hugging Face 热门模型日报 ${dateStr}`,
} as const;

export const COMMUNITY_REPORT = {
  title: t("技术社区 AI 动态日报", "Tech Community AI Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `💬 Tech Community AI Digest ${dateStr}` : `💬 技术社区 AI 动态日报 ${dateStr}`,
} as const;

export const ISSUE_LABELS = {
  cli: t("digest", "digest-en"),
  openclaw: t("openclaw", "openclaw-en"),
  infra: t("infra", "infra-en"),
  web: t("web", "web-en"),
  trending: t("trending", "trending-en"),
  hn: t("hn", "hn-en"),
  radar: t("radar", "radar-en"),
  ph: t("ph", "ph-en"),
  arxiv: t("arxiv", "arxiv-en"),
  hf: t("hf", "hf-en"),
  community: t("community", "community-en"),
} as const;

export const CLI_ISSUE_TITLE = (dateStr: string, lang: Lang) =>
  lang === "en" ? `📊 AI CLI Tools Digest ${dateStr}` : `📊 AI CLI 工具社区动态日报 ${dateStr}`;

export const OPENCLAW_ISSUE_TITLE = (dateStr: string, lang: Lang) =>
  lang === "en" ? `🦞 OpenClaw Ecosystem Digest ${dateStr}` : `🦞 OpenClaw 生态日报 ${dateStr}`;

export const INFRA_ISSUE_TITLE = (dateStr: string, lang: Lang) =>
  lang === "en" ? `⚙️ AI Infrastructure Digest ${dateStr}` : `⚙️ AI 基础设施日报 ${dateStr}`;

// ---------------------------------------------------------------------------
// Footer (used in report.ts)
// ---------------------------------------------------------------------------

export const FOOTER = {
  autoGen: t("本日报由", "This digest is auto-generated by"),
} as const;

// ---------------------------------------------------------------------------
// Telegram notification labels (used in notify.ts)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Report labels for manifest/RSS (used in generate-manifest.ts)
// ---------------------------------------------------------------------------

export const REPORT_LABELS: Record<string, string> = {
  "ai-cli": "AI CLI 工具社区动态日报",
  "ai-cli-en": "AI CLI Tools Digest",
  "ai-agents": "AI Agents 生态日报",
  "ai-agents-en": "AI Agents Ecosystem Digest",
  "ai-infra": "AI 基础设施日报",
  "ai-infra-en": "AI Infrastructure Digest",
  "ai-web": "AI 官方内容追踪报告",
  "ai-web-en": "Official AI Content Report",
  "ai-trending": "AI 开源趋势日报",
  "ai-trending-en": "AI Open Source Trends",
  "ai-hn": "Hacker News AI 社区动态日报",
  "ai-hn-en": "Hacker News AI Community Digest",
  "ai-radar": "AI 信息雷达",
  "ai-radar-en": "AI Information Radar",
  "ai-ph": "Product Hunt AI 产品日报",
  "ai-ph-en": "Product Hunt AI Products Digest",
  "ai-arxiv": "ArXiv AI 研究日报",
  "ai-arxiv-en": "ArXiv AI Research Digest",
  "ai-hf": "Hugging Face 热门模型日报",
  "ai-hf-en": "Hugging Face Trending Models Digest",
  "ai-community": "技术社区 AI 动态日报",
  "ai-community-en": "Tech Community AI Digest",
  // Weekly/monthly rollups are no longer generated; kept so archived reports
  // still render a proper title in the sidebar and RSS feed.
  "ai-weekly": "AI 工具生态周报",
  "ai-weekly-en": "AI Tools Weekly Digest",
  "ai-monthly": "AI 工具生态月报",
  "ai-monthly-en": "AI Tools Monthly Digest",
};

export const NOTIFY_LABELS: Record<string, Record<Lang, string>> = {
  "ai-cli": t("AI CLI 工具", "AI CLI Tools"),
  "ai-agents": t("AI Agents 生态", "AI Agents Ecosystem"),
  "ai-infra": t("AI 基础设施", "AI Infrastructure"),
  "ai-web": t("官网动态", "Official Updates"),
  "ai-trending": t("GitHub 趋势", "GitHub Trends"),
  "ai-hn": t("HN 社区动态", "HN Community"),
  "ai-radar": t("Top 5 信息雷达", "Top 5 Radar"),
  "ai-ph": t("Product Hunt", "Product Hunt"),
  "ai-arxiv": t("ArXiv 研究", "ArXiv Research"),
  "ai-hf": t("HF 模型", "HF Models"),
  "ai-community": t("技术社区", "Tech Community"),
};
