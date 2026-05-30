/**
 * LLM prompt builders for data-source reports (trending, web, HN)
 * and rollup reports (weekly, monthly).
 *
 * Separated from prompts.ts to keep each module focused.
 */

import type { WebFetchResult } from "./web.ts";
import type { TrendingData } from "./trending.ts";
import type { HnData } from "./hn.ts";
import type { PhData } from "./ph.ts";
import type { ArxivData } from "./arxiv.ts";
import type { HfData } from "./hf.ts";
import type { DevtoData } from "./devto.ts";
import type { LobstersData } from "./lobsters.ts";
import type { RedditData } from "./reddit.ts";
import type { Lang } from "./i18n.ts";
export function buildTrendingPrompt(data: TrendingData, dateStr: string, lang: Lang = "zh"): string {
  const trendingSection =
    data.trendingFetchSuccess && data.trendingRepos.length > 0
      ? data.trendingRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.totalStars.toLocaleString()}` +
              (r.todayStars > 0 ? ` (+${r.todayStars} today)` : "") +
              (r.forks > 0 ? ` 🍴${r.forks.toLocaleString()}` : "") +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(Unable to fetch today's GitHub Trending list)"
        : "（未能抓取今日 GitHub Trending 榜单）";

  const searchSection =
    data.searchRepos.length > 0
      ? data.searchRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.stargazersCount.toLocaleString()}` +
              ` [topic:${r.searchQuery}]` +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(No search results)"
        : "（无搜索结果）";

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following is ${dateStr} GitHub AI-related trending repository data. Please filter for AI relevance, categorize, and analyze trends.

## Data Sources
- **Trending List** (github.com/trending, today's stars most reliable): Real-time hot list with today's new stars
- **Topic Search** (GitHub Search API, topic tags): AI-related projects active in last 7 days, grouped by topic

---

## GitHub Today's Trending (${data.trendingRepos.length} repositories)
${trendingSection}

---

## AI Topic Search Results (${data.searchRepos.length} repositories, deduplicated)
${searchSection}

---

Generate a structured AI Open Source Trends Report in English:

**Step 1 (Filter)**: From the above data, select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.). Skip non-AI trending repos.

**Step 2 (Categorize)**: Group filtered projects into these categories (a project can belong to multiple; pick the primary one):
- 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
- 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
- 📦 AI Applications (specific apps, vertical solutions)
- 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
- 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

**Step 3 (Output Report)** with these sections:

1. **Today's Highlights** — 3-5 sentences on the most noteworthy AI open-source developments today

2. **Top Projects by Category** — For each category, list 3-8 representative projects, each with:
   - Project name (with link)
   - Stars data (total + today's new, if available)
   - One sentence: what it is and why it's worth attention today

3. **Trend Signal Analysis** — 200-300 words, distill from today's hot list:
   - Which type of AI tool is getting explosive community attention?
   - Any new tech stacks or directions appearing for the first time?
   - Connection to recent LLM releases / industry events

4. **Community Hot Spots** — Bullet list of 3-5 specific projects or directions worth developer focus, with brief reasoning

Style: English, professional and concise, must include GitHub links for every project.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是 ${dateStr} 的 GitHub AI 相关热门仓库数据，请进行 AI 相关性筛选、分类和趋势分析。

## 数据说明
- **Trending 榜单**（github.com/trending，今日 stars 数最可信）：今日实时热榜，含今日新增 stars
- **主题搜索**（GitHub Search API，topic 标签）：7天内活跃的 AI 相关项目，按主题分类

---

## GitHub 今日 Trending 榜单（共 ${data.trendingRepos.length} 个仓库）
${trendingSection}

---

## AI 主题搜索结果（共 ${data.searchRepos.length} 个仓库，已去重）
${searchSection}

---

请生成一份结构清晰的《AI 开源趋势日报》，要求：

**第一步（过滤）**：从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。

**第二步（分类）**：将筛选后的项目按以下维度分类（一个项目可归入多类，优先归入最主要类别）：
- 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- 📦 AI 应用（具体应用产品、垂直场景解决方案）
- 🧠 大模型/训练（模型权重、训练框架、微调工具）
- 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

**第三步（输出报告）**，包含以下部分：

1. **今日速览** — 3~5 句话概括今日 AI 开源领域最值得关注的动向

2. **各维度热门项目** — 每个维度列出 3~8 个代表项目，每项包含：
   - 项目名（附链接）
   - stars 数据（总量 + 今日新增，如有）
   - 一句话说明：这个项目是什么，为什么今天值得关注

3. **趋势信号分析** — 200~300 字，从今日热榜中提炼：
   - 哪类 AI 工具正在获得社区爆发性关注？
   - 有无新兴技术栈或方向首次登榜？
   - 与近期大模型发布/行业事件的关联

4. **社区关注热点** — 以 bullet 形式列出 3~5 个值得开发者重点关注的具体项目或方向，给出简短理由

语言要求：中文，专业简洁，每个项目必须附 GitHub 链接。
`;
}

export function buildWebReportPrompt(results: WebFetchResult[], dateStr: string, lang: Lang = "zh"): string {
  const isAnyFirstRun = results.some((r) => r.isFirstRun);

  const siteSections = results
    .map(({ siteName, isFirstRun, newItems, totalDiscovered }) => {
      const mode =
        lang === "en"
          ? isFirstRun
            ? `First full crawl (sitemap total ${totalDiscovered} URLs, showing latest ${newItems.length} articles)`
            : `Incremental update, ${newItems.length} new articles today`
          : isFirstRun
            ? `首次全量抓取（sitemap 共 ${totalDiscovered} 条 URL，以下为最新 ${newItems.length} 篇正文内容）`
            : `今日增量更新，共 ${newItems.length} 篇新内容`;

      if (newItems.length === 0) {
        const noContent =
          lang === "en" ? `(${mode}, no content to analyze.)` : `（${mode}，暂无可供分析的内容。）`;
        return `## ${siteName}\n\n${noContent}`;
      }

      const categoryLabel = lang === "en" ? "Category" : "分类";
      const dateLabel = lang === "en" ? "Published/Updated" : "发布/更新";
      const unknownDate = lang === "en" ? "unknown" : "未知";
      const excerptLabel = lang === "en" ? "Excerpt" : "内容节选";
      const metadataOnlyNote =
        lang === "en"
          ? "(metadata-only: title derived from URL slug, may be inaccurate; no article text available)"
          : "（仅元数据：标题由 URL 路径推断，可能不准确；无法获取正文内容）";
      const itemsText = newItems
        .map((item) => {
          const lines = [
            `### [${item.title || item.url}](${item.url})`,
            `- ${categoryLabel}: ${item.category} | ${dateLabel}: ${item.lastmod.slice(0, 10) || unknownDate}`,
          ];
          if (item.content) {
            lines.push(`- ${excerptLabel}: ${item.content}`);
          } else {
            lines.push(`- ${metadataOnlyNote}`);
          }
          return lines.join("\n");
        })
        .join("\n\n");

      const lp = lang === "en" ? "(" : "（";
      const rp = lang === "en" ? ")" : "）";
      return `## ${siteName}${lp}${mode}${rp}\n\n${itemsText}`;
    })
    .join("\n\n---\n\n");

  const firstRunNote =
    lang === "en"
      ? isAnyFirstRun
        ? "This is the first full crawl. Please focus on the overall content landscape, historical context, and core themes of each site, rather than individual articles."
        : "This is an incremental update. Please focus on today's new content and assess its strategic significance in context."
      : isAnyFirstRun
        ? "本次为首次全量抓取，请重点梳理各站点的内容格局、历史脉络与核心主题，而非仅关注单篇文章。"
        : "本次为增量更新，请聚焦今日新增内容，并结合上下文判断其战略意义。";

  if (lang === "en") {
    return `You are a deep content analyst focused on AI, skilled at extracting strategic signals from official announcements, technical blogs, research papers, and product documentation.

The following content was crawled on ${dateStr} from Anthropic (claude.com / anthropic.com) and OpenAI (openai.com). ${firstRunNote}

${siteSections}

---

Generate a detailed AI Official Content Tracking Report in English with these sections:

1. **Today's Highlights** — 3-5 sentences on the most important new releases or developments, calling out key highlights

2. **Anthropic / Claude Content Highlights** — Organize important content by category (news / research / engineering / learn, etc.):
   - For each piece, 2-4 sentences extracting core insights, technical details, or business significance
   - Note publication date and original link
   - If first full crawl, trace important milestones chronologically

3. **OpenAI Content Highlights** — Same structure, organized by research / release / company / safety categories
   - ⚠️ Note: OpenAI data is metadata-only (titles derived from URL slugs, no article text). Only list URLs and categories objectively. Do NOT speculate on title meanings or fabricate content summaries. If information is insufficient for analysis, state the data limitation clearly.

4. **Strategic Signal Analysis** — Based on both companies' release cadence and content focus, analyze:
   - Each company's recent technical priorities (model capabilities / safety / productization / ecosystem)
   - Competitive dynamics: who is setting the agenda, who is following
   - Potential impact on developers and enterprise users

5. **Notable Details** — Extract hidden signals from titles, phrasing, and timing, e.g.:
   - New terms or topics appearing for the first time
   - Dense releases in a category (may signal a product milestone)
   - Policy, compliance, and safety developments

${isAnyFirstRun ? "6. **Content Landscape Overview** — First full crawl only: summarize the content category distribution for both companies and describe their content strategy style (academic-oriented vs product-oriented vs user stories, etc.)\n\n" : ""}Style: English, professional and detailed, suited for AI researchers, product managers, and technical decision-makers. Every item must include official links.
`;
  }

  return `你是一位专注于 AI 领域的深度内容分析师，擅长从官方公告、技术博客、研究论文和产品文档中提炼战略信号。

以下是 ${dateStr} 从 Anthropic（claude.com / anthropic.com）和 OpenAI（openai.com）官网抓取的内容，${firstRunNote}

${siteSections}

---

请生成一份详实的《AI 官方内容追踪报告》，包含以下部分：

1. **今日速览** — 3~5 句话概括最重要的新发布或动向，点出核心亮点

2. **Anthropic / Claude 内容精选** — 按分类（news / research / engineering / learn 等）逐条整理重要内容：
   - 每篇用 2~4 句话提炼核心观点、技术细节或业务意义
   - 标注发布日期和原文链接
   - 如首次全量，按时间线梳理重要里程碑

3. **OpenAI 内容精选** — 同上，按 research / release / company / safety 等分类整理
   - ⚠️ 注意：OpenAI 数据为仅元数据模式（标题由 URL 路径推断，无正文）。请仅基于 URL 和分类进行客观列举，不要对标题含义进行推测性解读或编造内容摘要。如果信息不足以分析，直接说明数据受限即可。

4. **战略信号解读** — 基于两家公司的发布节奏和内容重点，分析：
   - 各自近期的技术优先级（模型能力 / 安全 / 产品化 / 生态）
   - 竞争态势：谁在引领议题，谁在跟进
   - 对开发者和企业用户的潜在影响

5. **值得关注的细节** — 从标题、措辞、发布时机中提取隐含信号，例如：
   - 新兴词汇或话题的首次出现
   - 某类主题的密集发布（可能预示产品节点）
   - 政策、合规、安全方面的动向

${isAnyFirstRun ? "6. **内容格局总览** — 首次全量独有：汇总两家公司各内容类别的数量分布，并说明各自的内容运营风格（学术导向 vs 产品导向 vs 用户故事等）\n\n" : ""}语言要求：中文，专业深入，内容详实，适合 AI 领域研究者、产品经理和技术决策者阅读。每个条目必须附上 GitHub/官网链接。
`;
}

export function buildWeeklyPrompt(
  dailyDigests: Record<string, string>,
  weekStr: string,
  lang: Lang = "zh",
): string {
  const digestEntries = Object.entries(dailyDigests)
    .map(([date, content]) => `## ${date}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are daily digest summaries from the past 7 days (${weekStr}) of AI tool community activity. Generate a comprehensive weekly recap.

${digestEntries}

---

Generate an AI Tools Ecosystem Weekly Report with these sections:

1. **Week's Top Stories** - 5-8 most important events, releases, and community developments this week, each with date
2. **CLI Tools Progress** - Overall activity and key changes for each AI CLI tool (Claude Code, Codex, Gemini CLI, etc.)
3. **AI Agent Ecosystem** - Key developments from OpenClaw and peer projects this week
4. **Open Source Trends** - Most notable technical directions from GitHub Trending and AI community this week
5. **HN Community Highlights** - Core AI discussion topics and community sentiment on Hacker News this week
6. **Official Announcements** - Important content published by Anthropic and OpenAI this week (if any)
7. **Next Week's Signals** - Based on this week's data, predict trends and upcoming events worth watching

Style: English, concise and professional, helping technical developers quickly grasp the week's developments.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是过去 7 天（${weekStr}）的 AI 工具社区每日动态摘要，请生成本周综合回顾报告。

${digestEntries}

---

请生成《AI 工具生态周报》，包含以下部分：

1. **本周要闻** - 5-8 条本周最重要的事件、版本发布、社区动向，每条附日期
2. **CLI 工具进展** - 各 AI CLI 工具（Claude Code、Codex、Gemini CLI 等）本周整体动态与关键变化
3. **AI Agent 生态** - OpenClaw 及同赛道项目的本周重要进展
4. **开源趋势** - 本周 GitHub Trending 和 AI 社区最关注的技术方向
5. **HN 社区热议** - 本周 Hacker News AI 讨论的核心话题与社区情绪
6. **官方动态** - Anthropic 和 OpenAI 本周发布的重要内容（若有）
7. **下周信号** - 基于本周数据，预判值得关注的趋势或即将到来的事件

语言要求：中文，简洁专业，适合技术开发者快速掌握一周动态。
`;
}

export function buildMonthlyPrompt(
  sourceDigests: Record<string, string>,
  monthStr: string,
  lang: Lang = "zh",
): string {
  const digestEntries = Object.entries(sourceDigests)
    .map(([key, content]) => `## ${key}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are ${monthStr} AI tool community digest summaries (${Object.keys(sourceDigests).length} reports total). Generate a comprehensive monthly review.

${digestEntries}

---

Generate an AI Tools Ecosystem Monthly Report with these sections:

1. **Month's Top Stories** - 5-10 most important events and milestones this month, in chronological order
2. **CLI Tools Monthly Progress** - Overall development trajectory, major releases, and community growth for each key AI CLI tool
3. **AI Agent Ecosystem Monthly Review** - Ecosystem landscape shifts, emerging projects, notable signals this month
4. **Technical Trend Summary** - Most significant technical directions and paradigm shifts in AI open-source this month
5. **Community Health Assessment** - Monthly activity comparison across major projects, developer engagement evaluation
6. **Official Announcements Review** - Strategic analysis of Anthropic and OpenAI content published this month
7. **Next Month's Outlook** - Based on this month's trends, predict key directions and potential events to watch

Style: English, in-depth analysis, data-driven, suited for monthly retrospectives and strategic decision-making.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是 ${monthStr} 月的 AI 工具社区动态汇总（共 ${Object.keys(sourceDigests).length} 份报告），请生成本月综合回顾报告。

${digestEntries}

---

请生成《AI 工具生态月报》，包含以下部分：

1. **月度要闻** - 本月最重要的 5-10 条事件和里程碑，按时间排列
2. **CLI 工具月度进展** - 各主要 AI CLI 工具本月整体发展轨迹、重要版本、社区规模变化
3. **AI Agent 生态月报** - 本月生态格局变化、新兴项目、值得关注的信号
4. **技术趋势总结** - 本月 AI 开源领域最显著的技术方向与范式变化
5. **社区生态健康度** - 各主要项目月度活跃度对比、开发者参与度评估
6. **官方动态回顾** - Anthropic 和 OpenAI 本月发布内容的战略意义分析
7. **下月展望** - 基于本月趋势，预判值得重点关注的方向和潜在事件

语言要求：中文，深度分析，数据驱动，适合月度复盘和战略决策参考。
`;
}

// ---------------------------------------------------------------------------
// Highlights prompt — extracts structured highlights from finished reports
// for use in Telegram notifications.
// ---------------------------------------------------------------------------

export interface ReportHighlights {
  [reportId: string]: string[];
}

export function buildHighlightsPrompt(
  reportContents: Record<string, string>,
  lang: Lang = "zh",
  itemsPerReport: number = 6,
): string {
  const sections = Object.entries(reportContents)
    .map(([id, content]) => `## [${id}]\n\n${content.slice(0, 2000)}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a concise news editor. The following are today's AI ecosystem report excerpts, each labeled with a report ID.

${sections}

---

For each report, extract ${itemsPerReport} of the most noteworthy highlights — the kind that would make a reader want to click through. Each highlight should be a single short sentence (under 60 characters).

Return ONLY valid JSON, no markdown fences, no explanation. Format:
{"ai-cli":["highlight 1","highlight 2",...],"ai-agents":["highlight 1","highlight 2",...],...}

Rules:
- Use the exact report IDs from the [brackets] above as keys
- Only include reports that have meaningful content (skip reports with failure messages or no activity)
- ${itemsPerReport} highlights per report, each under 60 characters
- Focus on: new releases, notable features, trending projects, key discussions
- Be specific: include project names, version numbers, star counts where relevant`;
  }

  return `你是一位简洁的新闻编辑。以下是今日 AI 生态各报告的摘要，每个报告用 ID 标注。

${sections}

---

为每份报告提取 ${itemsPerReport} 条最值得关注的亮点——能让读者产生点击欲望的那种。每条亮点用一句简短的话（不超过 30 个字）。

只返回合法的 JSON，不要 markdown 代码块，不要解释。格式：
{"ai-cli":["亮点1","亮点2",...],"ai-agents":["亮点1","亮点2",...],...}

规则：
- 用上面方括号中的报告 ID 作为 key
- 只包含有实际内容的报告（跳过失败或无活动的报告）
- 每个报告 ${itemsPerReport} 条亮点，每条不超过 30 个字
- 重点关注：新版本发布、重要特性、热门项目、关键讨论
- 要具体：包含项目名、版本号、star 数等关键信息`;
}

export function buildHnPrompt(data: HnData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n` +
          `   Link: ${s.url}\n` +
          `   Discussion: ${s.hnUrl}\n` +
          `   Score: ${s.points} | Comments: ${s.comments} | Author: ${s.author} | Time: ${s.createdAt.slice(0, 16)}`
        : `${i + 1}. **${s.title}**\n` +
          `   链接: ${s.url}\n` +
          `   讨论: ${s.hnUrl}\n` +
          `   分数: ${s.points} | 评论: ${s.comments} | 作者: ${s.author} | 时间: ${s.createdAt.slice(0, 16)}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI industry news analyst. The following are AI-related top posts from Hacker News in the past 24 hours as of ${dateStr} (sorted by score, ${data.stories.length} total):

---

${storiesText}

---

Generate a structured Hacker News AI Community Digest in English:

1. **Today's Highlights** — 3-5 sentences on the hottest AI discussion topics and community sentiment on HN today

2. **Top News & Discussions** — Organized by category, select the 2-5 most representative items per category, each with:
   - Title (with original link) + HN discussion link
   - Score and comment count
   - One sentence: why this matters, what the community's typical reaction is

   Categories:
   - 🔬 Models & Research (new model releases, papers, benchmarks)
   - 🛠️ Tools & Engineering (open-source projects, frameworks, engineering practices)
   - 🏢 Industry News (company news, funding, product launches)
   - 💬 Opinions & Debates (notable Ask HN, Show HN, or hot discussion threads)

3. **Community Sentiment Signal** — 100-200 words analyzing today's HN AI discussion mood and focus:
   - Which topics are most active (high score + high comments)?
   - Any clear points of controversy or consensus?
   - Compared to last cycle, any notable shift in focus?

4. **Worth Deep Reading** — List 2-3 pieces most worth developers/researchers reading in depth, with brief reasoning

Style: English, concise and professional, preserve all original links.
`;
  }

  return `你是 AI 行业资讯分析师。以下是 ${dateStr} 从 Hacker News 抓取的过去 24 小时内 AI 相关热门帖子（按分数降序，共 ${data.stories.length} 条）：

---

${storiesText}

---

请生成一份结构清晰的《Hacker News AI 社区动态日报》，要求：

1. **今日速览** — 3~5 句话，概括今日 HN 社区围绕 AI 最热门的讨论方向和情绪

2. **热门新闻与讨论** — 按以下分类整理，每类选取最具代表性的 2~5 条，每条包含：
   - 标题（附原文链接）+ HN 讨论链接
   - 分数和评论数
   - 一句话说明：这条内容为什么值得关注，社区有何典型反应

   分类：
   - 🔬 模型与研究（新模型发布、论文、基准测试）
   - 🛠️ 工具与工程（开源项目、框架、工程实践）
   - 🏢 产业动态（公司新闻、融资、产品发布）
   - 💬 观点与争议（值得关注的 Ask HN、Show HN 或热议帖子）

3. **社区情绪信号** — 100~200 字，分析今日 HN AI 讨论的整体情绪和关注重点：
   - 社区对哪类话题最活跃（高分 + 高评论）？
   - 有无明显的争议点或共识？
   - 与上周期相比，关注方向有无明显变化？

4. **值得深读** — 列出 2~3 条今日最值得开发者/研究者深入阅读的内容，简述理由

语言要求：中文，简洁专业，保留所有原文链接。
`;
}

export function buildPhPrompt(data: PhData, dateStr: string, lang: Lang = "zh"): string {
  const productsText = data.products
    .map((p, i) =>
      lang === "en"
        ? `${i + 1}. **${p.name}** — ${p.tagline}\n` +
          `   Product Hunt: ${p.url}\n` +
          `   Website: ${p.website}\n` +
          `   Votes: ${p.votesCount} | Comments: ${p.commentsCount} | Topics: ${p.topics.join(", ")}`
        : `${i + 1}. **${p.name}** — ${p.tagline}\n` +
          `   Product Hunt: ${p.url}\n` +
          `   官网: ${p.website}\n` +
          `   投票: ${p.votesCount} | 评论: ${p.commentsCount} | 话题: ${p.topics.join(", ")}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI product analyst. The following are AI-related products launched on Product Hunt in the past 24 hours as of ${dateStr} (sorted by votes, ${data.products.length} total):

---

${productsText}

---

Generate a structured Product Hunt AI Products Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most notable AI product launches and trends on Product Hunt today

2. **Top Products** — Organized by category, select the most representative products per category, each with:
   - Product name + tagline (with Product Hunt link and website link)
   - Vote count and comment count
   - One sentence: what problem it solves, what makes it stand out

   Categories:
   - 🤖 AI Agents & Assistants (chatbots, copilots, autonomous agents)
   - 🛠️ Developer Tools (APIs, SDKs, coding tools, dev infrastructure)
   - 📊 AI Applications (vertical products, SaaS tools powered by AI)
   - 🎨 Creative & Content (image/video/text generation, design tools)
   - 🔧 Infrastructure & Models (model serving, fine-tuning, MLOps)

3. **Market Signal** — 100-200 words analyzing today's Product Hunt AI launch patterns:
   - Which categories are most crowded?
   - Any innovative approaches or novel use cases?
   - Open-source vs closed-source trend among launches

4. **Worth Trying** — List 2-3 products most worth developers trying out, with brief reasoning

Style: English, concise and professional, preserve all original links.
`;
  }

  return `你是 AI 产品分析师。以下是 ${dateStr} 从 Product Hunt 抓取的过去 24 小时内 AI 相关产品发布（按投票数降序，共 ${data.products.length} 个）：

---

${productsText}

---

请生成一份结构清晰的《Product Hunt AI 产品日报》，要求：

1. **今日速览** — 3~5 句话，概括今日 Product Hunt 上 AI 产品发布的整体趋势和亮点

2. **热门产品** — 按以下分类整理，每类选取最具代表性的产品，每个产品包含：
   - 产品名 + 简介（附 Product Hunt 链接和官网链接）
   - 投票数和评论数
   - 一句话说明：解决什么问题，有何独特之处

   分类：
   - 🤖 AI 智能体与助手（聊天机器人、Copilot、自主 Agent）
   - 🛠️ 开发者工具（API、SDK、编程工具、开发基础设施）
   - 📊 AI 应用（垂直场景产品、AI 驱动的 SaaS 工具）
   - 🎨 创意与内容（图像/视频/文本生成、设计工具）
   - 🔧 基础设施与模型（模型服务、微调、MLOps）

3. **市场信号** — 100~200 字，分析今日 Product Hunt AI 产品的发布规律：
   - 哪些类别最密集？
   - 有无创新性的思路或新颖的应用场景？
   - 开源 vs 闭源的趋势

4. **值得试用** — 列出 2~3 个最值得开发者试用的产品，简述理由

语言要求：中文，简洁专业，保留所有原文链接。
`;
}

// ---------------------------------------------------------------------------
// ArXiv prompt
// ---------------------------------------------------------------------------

export function buildArxivPrompt(data: ArxivData, dateStr: string, lang: Lang = "zh"): string {
  const papersText = data.papers
    .map((p, i) => {
      const authors =
        p.authors.length > 3 ? p.authors.slice(0, 3).join(", ") + " et al." : p.authors.join(", ");
      const cats = p.categories.slice(0, 3).join(", ");
      return lang === "en"
        ? `${i + 1}. **${p.title}**\n` +
            `   Link: ${p.url}\n` +
            `   Authors: ${authors} | Categories: ${cats}\n` +
            `   Published: ${p.published.slice(0, 10)}\n` +
            `   Abstract: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`
        : `${i + 1}. **${p.title}**\n` +
            `   链接: ${p.url}\n` +
            `   作者: ${authors} | 分类: ${cats}\n` +
            `   发布: ${p.published.slice(0, 10)}\n` +
            `   摘要: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`;
    })
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI research analyst. The following are recent AI-related papers from ArXiv as of ${dateStr} (${data.papers.length} papers from cs.AI, cs.CL, cs.LG):

---

${papersText}

---

Generate a structured ArXiv AI Research Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most significant research directions and breakthroughs

2. **Key Papers** — Select 8-15 most important papers, organized by theme:
   - 🧠 Large Language Models (architecture, training, alignment, evaluation)
   - 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
   - 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
   - 📊 Applications (domain-specific, multimodal, code generation)

   For each paper:
   - Title (with ArXiv link)
   - Authors (abbreviated)
   - One sentence: key contribution and why it matters

3. **Research Trend Signal** — 100-200 words on emerging research directions visible from today's submissions

4. **Worth Deep Reading** — 2-3 papers most worth reading in full, with reasoning

Style: English, concise and professional, preserve all ArXiv links.
`;
  }

  return `你是 AI 研究分析师。以下是 ${dateStr} ArXiv 上最新的 AI 相关论文（共 ${data.papers.length} 篇，来自 cs.AI、cs.CL、cs.LG）：

---

${papersText}

---

请生成一份结构清晰的《ArXiv AI 研究日报》，要求：

1. **今日速览** — 3~5 句话，概括今日最值得关注的研究方向和突破

2. **重点论文** — 选出 8~15 篇最重要的论文，按主题分类：
   - 🧠 大语言模型（架构、训练、对齐、评估）
   - 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
   - 🔧 方法与框架（新技术、基准测试、效率优化）
   - 📊 应用（垂直领域、多模态、代码生成）

   每篇论文包含：
   - 标题（附 ArXiv 链接）
   - 作者（缩写）
   - 一句话说明：核心贡献和为什么值得关注

3. **研究趋势信号** — 100~200 字，从今日投稿中观察到的新兴研究方向

4. **值得精读** — 2~3 篇最值得完整阅读的论文，简述理由

语言要求：中文，简洁专业，保留所有 ArXiv 链接。
`;
}

// ---------------------------------------------------------------------------
// Hugging Face prompt
// ---------------------------------------------------------------------------

export function buildHfPrompt(data: HfData, dateStr: string, lang: Lang = "zh"): string {
  const modelsText = data.models
    .map((m, i) =>
      lang === "en"
        ? `${i + 1}. **${m.id}**\n` +
          `   Link: ${m.url}\n` +
          `   Author: ${m.author} | Pipeline: ${m.pipelineTag || "N/A"}\n` +
          `   Likes: ${m.likes.toLocaleString()} | Downloads: ${m.downloads.toLocaleString()}\n` +
          `   Tags: ${m.tags.slice(0, 5).join(", ")}`
        : `${i + 1}. **${m.id}**\n` +
          `   链接: ${m.url}\n` +
          `   作者: ${m.author} | 任务: ${m.pipelineTag || "N/A"}\n` +
          `   点赞: ${m.likes.toLocaleString()} | 下载: ${m.downloads.toLocaleString()}\n` +
          `   标签: ${m.tags.slice(0, 5).join(", ")}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI model ecosystem analyst. The following are trending models on Hugging Face Hub as of ${dateStr} (${data.models.length} models, sorted by weekly likes):

---

${modelsText}

---

Generate a structured Hugging Face Trending Models Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most notable model releases and trends on Hugging Face

2. **Trending Models** — Organized by category, each with:
   - Model name (with HF link)
   - Author, likes, downloads
   - One sentence: what it is, why it's trending

   Categories:
   - 🧠 Language Models (LLMs, chat models, instruction-tuned)
   - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
   - 🔧 Specialized Models (code, math, medical, embeddings)
   - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

3. **Ecosystem Signal** — 100-200 words analyzing model ecosystem trends:
   - Which model families are gaining momentum?
   - Open-weight vs proprietary trends
   - Notable quantization or fine-tuning activity

4. **Worth Exploring** — 2-3 models most worth trying or studying, with reasoning

Style: English, concise and professional, preserve all HuggingFace links.
`;
  }

  return `你是 AI 模型生态分析师。以下是 ${dateStr} Hugging Face Hub 上的热门模型（共 ${data.models.length} 个，按周点赞数排序）：

---

${modelsText}

---

请生成一份结构清晰的《Hugging Face 热门模型日报》，要求：

1. **今日速览** — 3~5 句话，概括 Hugging Face 上最值得关注的模型发布和趋势

2. **热门模型** — 按以下分类整理，每个模型包含：
   - 模型名（附 HF 链接）
   - 作者、点赞数、下载数
   - 一句话说明：这个模型是什么，为什么在趋势榜上

   分类：
   - 🧠 语言模型（LLM、对话模型、指令微调）
   - 🎨 多模态与生成（图像、视频、音频、文本到X）
   - 🔧 专用模型（代码、数学、医疗、嵌入）
   - 📦 微调与量化（社区微调、GGUF、AWQ）

3. **生态信号** — 100~200 字，分析模型生态趋势：
   - 哪些模型家族势头正旺？
   - 开源权重 vs 闭源的趋势
   - 值得注意的量化或微调活动

4. **值得探索** — 2~3 个最值得尝试或研究的模型，简述理由

语言要求：中文，简洁专业，保留所有 HuggingFace 链接。
`;
}

// ---------------------------------------------------------------------------
// Community prompt (Dev.to + Lobste.rs combined)
// ---------------------------------------------------------------------------

export function buildCommunityPrompt(
  devto: DevtoData,
  lobsters: LobstersData,
  dateStr: string,
  lang: Lang = "zh",
): string {
  const devtoText =
    devto.articles.length > 0
      ? devto.articles
          .map((a, i) =>
            lang === "en"
              ? `${i + 1}. **${a.title}**\n` +
                `   Link: ${a.url}\n` +
                `   Author: ${a.user} | Reactions: ${a.positiveReactionsCount} | Comments: ${a.commentsCount} | Reading: ${a.readingTimeMinutes} min\n` +
                `   Tags: ${a.tags.join(", ")}\n` +
                `   ${a.description}`
              : `${i + 1}. **${a.title}**\n` +
                `   链接: ${a.url}\n` +
                `   作者: ${a.user} | 点赞: ${a.positiveReactionsCount} | 评论: ${a.commentsCount} | 阅读: ${a.readingTimeMinutes} 分钟\n` +
                `   标签: ${a.tags.join(", ")}\n` +
                `   ${a.description}`,
          )
          .join("\n\n")
      : lang === "en"
        ? "(No Dev.to articles available)"
        : "（无 Dev.to 文章）";

  const lobstersText =
    lobsters.stories.length > 0
      ? lobsters.stories
          .map((s, i) =>
            lang === "en"
              ? `${i + 1}. **${s.title}**\n` +
                `   Link: ${s.url}\n` +
                `   Discussion: ${s.commentsUrl}\n` +
                `   Score: ${s.score} | Comments: ${s.commentCount} | Author: ${s.author} | Tags: ${s.tags.join(", ")}`
              : `${i + 1}. **${s.title}**\n` +
                `   链接: ${s.url}\n` +
                `   讨论: ${s.commentsUrl}\n` +
                `   分数: ${s.score} | 评论: ${s.commentCount} | 作者: ${s.author} | 标签: ${s.tags.join(", ")}`,
          )
          .join("\n\n")
      : lang === "en"
        ? "(No Lobste.rs stories available)"
        : "（无 Lobste.rs 内容）";

  if (lang === "en") {
    return `You are a tech community analyst. The following are AI-related content from Dev.to and Lobste.rs as of ${dateStr}:

## Dev.to Articles (${devto.articles.length} articles)

${devtoText}

---

## Lobste.rs Stories (${lobsters.stories.length} stories)

${lobstersText}

---

Generate a structured Tech Community AI Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most discussed AI topics across these communities today

2. **Dev.to Highlights** — Select 5-10 most valuable articles:
   - Title (with link)
   - Reactions and comments
   - One sentence: key takeaway for developers

3. **Lobste.rs Highlights** — Select 3-8 most notable stories:
   - Title (with link + discussion link)
   - Score and comments
   - One sentence: why it's worth reading

4. **Community Pulse** — 100-200 words on what these communities are talking about:
   - Common themes across both platforms
   - Practical concerns developers have about AI tools
   - Emerging tutorials, patterns, or best practices

5. **Worth Reading** — 2-3 articles/stories most worth reading in depth

Style: English, concise and developer-friendly, preserve all original links.
`;
  }

  return `你是技术社区分析师。以下是 ${dateStr} Dev.to 和 Lobste.rs 上的 AI 相关内容：

## Dev.to 文章（共 ${devto.articles.length} 篇）

${devtoText}

---

## Lobste.rs 内容（共 ${lobsters.stories.length} 条）

${lobstersText}

---

请生成一份结构清晰的《技术社区 AI 动态日报》，要求：

1. **今日速览** — 3~5 句话，概括今日技术社区围绕 AI 最热门的讨论方向

2. **Dev.to 精选** — 选出 5~10 篇最有价值的文章：
   - 标题（附链接）
   - 点赞数和评论数
   - 一句话说明：对开发者的核心价值

3. **Lobste.rs 精选** — 选出 3~8 条最值得关注的内容：
   - 标题（附链接 + 讨论链接）
   - 分数和评论数
   - 一句话说明：为什么值得阅读

4. **社区脉搏** — 100~200 字，分析技术社区在聊什么：
   - 两个平台共同关注的主题
   - 开发者对 AI 工具的实际关切
   - 新兴的教程、模式或最佳实践

5. **值得精读** — 2~3 篇最值得深入阅读的内容

语言要求：中文，简洁专业，保留所有原文链接。
`;
}

export function buildRedditPrompt(data: RedditData, dateStr: string, lang: Lang = "zh"): string {
  const postsText = data.posts
    .map((p, i) => {
      const textSnippet = p.postText 
        ? `\n   Text Snippet: ${p.postText.slice(0, 300)}${p.postText.length > 300 ? "..." : ""}`
        : "";
      const extLink = p.externalLink ? `\n   External Link: ${p.externalLink}` : "";
      
      return lang === "en"
        ? `${i + 1}. **${p.title}** (r/${p.subreddit})\n` +
          `   Discussion: ${p.redditUrl}${extLink}\n` +
          `   Score: ${p.score} | Comments: ${p.comments} | Author: ${p.author} | Time: ${p.createdAt.slice(0, 16)}${textSnippet}`
        : `${i + 1}. **${p.title}** (r/${p.subreddit})\n` +
          `   讨论: ${p.redditUrl}${extLink}\n` +
          `   分数: ${p.score} | 评论: ${p.comments} | 作者: ${p.author} | 时间: ${p.createdAt.slice(0, 16)}${textSnippet}`;
    })
    .join("\n\n");

  if (lang === "en") {
    return `You are a professional AI technology analyst and community researcher. The following are trending and high-engagement posts from AI-related subreddits (such as r/LocalLLaMA) in the past 24 hours as of ${dateStr} (sorted by custom engagement/recency score, ${data.posts.length} total):

---

${postsText}

---

Generate a highly structured Reddit AI Community Digest in English:

1. **Today's Highlights** — 3-5 sentences summarizing the most critical discussions, trends, and breakthroughs on Reddit today.

2. **Key Insights by Category** — Categorize the most noteworthy posts and extract their core signals. Avoid simply listing the posts. Instead, summarize what they mean, include links, scores, comments, and the subreddit context. Identify findings under these headings:
   - 💬 Top Discussions (significant technical threads, arguments, community thoughts)
   - 🧠 Model Releases & Fine-Tuning (new models, open-weights releases, quantization updates, fine-tuning results)
   - 🛠️ Tooling & Infrastructure (inference engines, local AI tooling, RAG, agent frameworks, hardware optimization)
   - 🔬 Research & Experiments (notable papers, benchmark results, user experiments)

3. **Community Sentiment & Pulse** — 150-250 words analyzing what the community is excited, concerned, or debating about today:
   - What are the dominant consensus points or hot debates?
   - Any emergent tech stacks or challenges appearing for AI engineers?
   - Practical developer sentiment about newly released tools.

4. **Actionable Takeaways** — A bulleted list of 3-5 specific signals, projects, or practices that AI engineers and software developers should pay close attention to, with brief developer-focused reasoning.

Style: English, professional, analytical, concise, and focused on insight extraction. Ensure all original Reddit links (discussion links) and external links are preserved.
`;
  }

  return `你是一位专业的 AI 技术分析师和社区研究员。以下是 ${dateStr} 从 AI 相关 Reddit 社区（如 r/LocalLLaMA）抓取的过去 24 小时内热门且高互动的帖子（按自定义的热度与时效性得分降序，共 ${data.posts.length} 条）：

---

${postsText}

---

请生成一份结构清晰、分析深入的《Reddit AI 社区动态日报》，要求：

1. **今日速览** — 3~5 句话，概括今日 Reddit 社区最核心的讨论方向、前沿趋势或重大突破。

2. **热门讨论与技术信号** — 避免简单罗列帖子，请按以下分类进行整合和提炼，深入分析其背后的核心价值、社区反馈与影响，并包含原文/讨论链接、subreddit 标识以及分数/评论数：
   - 💬 深度社区热议（重点技术讨论、行业观点争议、社区思想碰撞）
   - 🧠 模型发布与微调（新模型及开源权重发布、量化更新、微调成效、评测结果）
   - 🛠️ 工具链与基础设施（推理引擎、本地 AI 工具、RAG、Agent 框架、硬件优化）
   - 🔬 研究与前沿实验（值得关注的论文分享、用户自测基准、新奇探索）

3. **社区情绪与技术脉搏** — 150~250 字，剖析今日 Reddit 社区的整体情绪和热点议题：
   - 社区对哪些话题达成了共识，又在争论什么？
   - 开发者在使用最新工具时遇到了哪些实际痛点或带来了哪些新思路？
   - 透露出哪些潜在的技术演进方向？

4. **开发者行动指南** — 以 bullet 形式列出 3~5 条最值得 AI 工程师/软件开发者重点跟进的具体项目、工具或实践，并给出硬核的技术理由。

语言要求：中文，专业硬核，简洁清晰，每个条目必须保留所有 Reddit 讨论链接和外部链接。
`;
}

