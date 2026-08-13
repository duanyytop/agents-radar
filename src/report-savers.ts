/**
 * Report saver functions — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import {
  type Lang,
  WEB_REPORT,
  TRENDING_REPORT,
  HN_REPORT,
  RADAR_REPORT,
  PH_REPORT,
  ARXIV_REPORT,
  HF_REPORT,
  COMMUNITY_REPORT,
  ISSUE_LABELS,
} from "./i18n.ts";
import {
  buildWebReportPrompt,
  buildHnPrompt,
  buildPhPrompt,
  buildArxivPrompt,
  buildHfPrompt,
  buildCommunityPrompt,
} from "./prompts-data.ts";
import { buildRadarReportContent } from "./report-builders.ts";
import { callLlm, saveFile, LLM_TOKENS_WEB, LLM_TOKENS_LISTING } from "./report.ts";
import { createGitHubIssue } from "./github.ts";
import { saveWebState, type WebFetchResult, type WebState } from "./web.ts";
import type { HnData } from "./hn.ts";
import type { RadarData } from "./radar.ts";
import type { PhData } from "./ph.ts";
import type { TrendingData } from "./trending.ts";
import type { ArxivData } from "./arxiv.ts";
import type { HfData } from "./hf.ts";
import type { DevtoData } from "./devto.ts";
import type { LobstersData } from "./lobsters.ts";

// ---------------------------------------------------------------------------
// Web report
// ---------------------------------------------------------------------------

export async function saveWebReport(
  webResults: WebFetchResult[],
  webState: WebState,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  const hasNewContent = webResults.some((r) => r.newItems.length > 0);

  if (hasNewContent) {
    console.log(`  [web/${lang}] Calling LLM for web content report...`);
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr, lang), LLM_TOKENS_WEB);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const anthropicNew = webResults.find((r) => r.site === "anthropic")?.newItems.length ?? 0;
      const anthropicTotal = webResults.find((r) => r.site === "anthropic")?.totalDiscovered ?? 0;
      const openaiNew = webResults.find((r) => r.site === "openai")?.newItems.length ?? 0;
      const openaiTotal = webResults.find((r) => r.site === "openai")?.totalDiscovered ?? 0;

      const fileName = lang === "en" ? "ai-web-en.md" : "ai-web.md";
      const mode = isFirstRun ? WEB_REPORT.firstCrawl[lang] : WEB_REPORT.todayUpdate[lang];

      const webTitle = `# ${WEB_REPORT.title[lang]} ${dateStr}\n\n`;
      const webMeta = `> ${mode} | ${WEB_REPORT.newContent(totalNew, lang)} | ${WEB_REPORT.generated(utcStr, lang)}\n\n`;
      const webSources =
        lang === "en"
          ? `${WEB_REPORT.sourcesHeader[lang]}\n` +
            `- Anthropic: [anthropic.com](https://www.anthropic.com) — ${anthropicNew} new articles (sitemap total: ${anthropicTotal})\n` +
            `- OpenAI: [openai.com](https://openai.com) — ${openaiNew} new articles (sitemap total: ${openaiTotal})\n\n`
          : `${WEB_REPORT.sourcesHeader[lang]}\n` +
            `- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 ${anthropicNew} 篇（sitemap 共 ${anthropicTotal} 条）\n` +
            `- OpenAI: [openai.com](https://openai.com) — 新增 ${openaiNew} 篇（sitemap 共 ${openaiTotal} 条）\n\n`;

      const webContent = webTitle + webMeta + webSources + `---\n\n` + webSummary + footer;

      console.log(`  Saved ${saveFile(webContent, dateStr, fileName)}`);

      if (digestRepo) {
        const issueTitle = WEB_REPORT.issueTitle(dateStr, isFirstRun, lang);
        const webLabel = ISSUE_LABELS.web[lang];
        const webUrl = await createGitHubIssue(issueTitle, webContent, webLabel);
        console.log(`  Created web issue (${lang}): ${webUrl}`);
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

// ---------------------------------------------------------------------------
// Trending report
// ---------------------------------------------------------------------------

export async function saveTrendingReport(
  trendingData: TrendingData,
  trendingSummary: string,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
  if (!hasData) {
    console.log(`  [trending/${lang}] No data available, skipping report.`);
    return;
  }

  const fileName = lang === "en" ? "ai-trending-en.md" : "ai-trending.md";
  const header =
    `# ${TRENDING_REPORT.title[lang]} ${dateStr}\n\n` +
    `> ${TRENDING_REPORT.sources[lang]} | ${lang === "en" ? "Generated" : "生成时间"}: ${utcStr} UTC\n\n---\n\n`;

  const trendingContent = header + trendingSummary + footer;

  console.log(`  Saved ${saveFile(trendingContent, dateStr, fileName)}`);

  if (digestRepo) {
    const trendingTitle = TRENDING_REPORT.issueTitle(dateStr, lang);
    const trendingLabel = ISSUE_LABELS.trending[lang];
    const trendingUrl = await createGitHubIssue(trendingTitle, trendingContent, trendingLabel);
    console.log(`  Created trending issue (${lang}): ${trendingUrl}`);
  }
}

// ---------------------------------------------------------------------------
// Hacker News report
// ---------------------------------------------------------------------------

export async function saveHnReport(
  hnData: HnData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!hnData.fetchSuccess) {
    console.log(`  [hn/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [hn/${lang}] Calling LLM for HN report...`);
  try {
    const hnSummary = await callLlm(buildHnPrompt(hnData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-hn-en.md" : "ai-hn.md";
    const header =
      lang === "en"
        ? `# ${HN_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Source: [Hacker News](https://news.ycombinator.com/) | ` +
          `${hnData.stories.length} stories | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${HN_REPORT.title[lang]} ${dateStr}\n\n` +
          `> 数据来源: [Hacker News](https://news.ycombinator.com/) | ` +
          `共 ${hnData.stories.length} 条 | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const hnContent = header + hnSummary + footer;

    console.log(`  Saved ${saveFile(hnContent, dateStr, fileName)}`);

    if (digestRepo) {
      const hnTitle = HN_REPORT.issueTitle(dateStr, lang);
      const hnLabel = ISSUE_LABELS.hn[lang];
      const hnUrl = await createGitHubIssue(hnTitle, hnContent, hnLabel);
      console.log(`  Created HN issue (${lang}): ${hnUrl}`);
    }
  } catch (err) {
    console.error(`  [hn/${lang}] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Radar report
// ---------------------------------------------------------------------------

export async function saveRadarReport(
  data: RadarData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (data.items.length === 0) {
    console.log(`  [radar/${lang}] No data available, skipping report.`);
    return;
  }
  const fileName = lang === "en" ? "ai-radar-en.md" : "ai-radar.md";
  const content = buildRadarReportContent(data, utcStr, dateStr, footer, lang);
  console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);
  if (digestRepo) {
    const url = await createGitHubIssue(
      RADAR_REPORT.issueTitle(dateStr, lang),
      content,
      ISSUE_LABELS.radar[lang],
    );
    console.log(`  Created Radar issue (${lang}): ${url}`);
  }
}

// ---------------------------------------------------------------------------
// Product Hunt
// ---------------------------------------------------------------------------

export async function savePhReport(
  phData: PhData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!phData.fetchSuccess) {
    console.log(`  [ph/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [ph/${lang}] Calling LLM for Product Hunt report...`);
  try {
    const phSummary = await callLlm(buildPhPrompt(phData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-ph-en.md" : "ai-ph.md";
    const header =
      lang === "en"
        ? `# ${PH_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Source: [Product Hunt](https://www.producthunt.com/) | ` +
          `${phData.products.length} products | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${PH_REPORT.title[lang]} ${dateStr}\n\n` +
          `> 数据来源: [Product Hunt](https://www.producthunt.com/) | ` +
          `共 ${phData.products.length} 个产品 | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const phContent = header + phSummary + footer;

    console.log(`  Saved ${saveFile(phContent, dateStr, fileName)}`);

    if (digestRepo) {
      const phTitle = PH_REPORT.issueTitle(dateStr, lang);
      const phLabel = ISSUE_LABELS.ph[lang];
      const phUrl = await createGitHubIssue(phTitle, phContent, phLabel);
      console.log(`  Created PH issue (${lang}): ${phUrl}`);
    }
  } catch (err) {
    console.error(`  [ph/${lang}] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// ArXiv report
// ---------------------------------------------------------------------------

export async function saveArxivReport(
  arxivData: ArxivData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!arxivData.fetchSuccess) {
    console.log(`  [arxiv/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [arxiv/${lang}] Calling LLM for ArXiv report...`);
  try {
    const summary = await callLlm(buildArxivPrompt(arxivData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-arxiv-en.md" : "ai-arxiv.md";
    const header =
      lang === "en"
        ? `# ${ARXIV_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | ` +
          `${arxivData.papers.length} papers | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${ARXIV_REPORT.title[lang]} ${dateStr}\n\n` +
          `> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | ` +
          `共 ${arxivData.papers.length} 篇论文 | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = ARXIV_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.arxiv[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created ArXiv issue (${lang}): ${url}`);
    }
  } catch (err) {
    console.error(`  [arxiv/${lang}] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Hugging Face report
// ---------------------------------------------------------------------------

export async function saveHfReport(
  hfData: HfData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!hfData.fetchSuccess) {
    console.log(`  [hf/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [hf/${lang}] Calling LLM for Hugging Face report...`);
  try {
    const summary = await callLlm(buildHfPrompt(hfData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-hf-en.md" : "ai-hf.md";
    const header =
      lang === "en"
        ? `# ${HF_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Source: [Hugging Face Hub](https://huggingface.co/) | ` +
          `${hfData.models.length} models | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${HF_REPORT.title[lang]} ${dateStr}\n\n` +
          `> 数据来源: [Hugging Face Hub](https://huggingface.co/) | ` +
          `共 ${hfData.models.length} 个模型 | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = HF_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.hf[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created HF issue (${lang}): ${url}`);
    }
  } catch (err) {
    console.error(`  [hf/${lang}] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Community report (Dev.to + Lobste.rs)
// ---------------------------------------------------------------------------

export async function saveCommunityReport(
  devtoData: DevtoData,
  lobstersData: LobstersData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  const hasData = devtoData.fetchSuccess || lobstersData.fetchSuccess;
  if (!hasData) {
    console.log(`  [community/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [community/${lang}] Calling LLM for community report...`);
  try {
    const summary = await callLlm(
      buildCommunityPrompt(devtoData, lobstersData, dateStr, lang),
      LLM_TOKENS_LISTING,
    );
    const fileName = lang === "en" ? "ai-community-en.md" : "ai-community.md";
    const devtoCount = devtoData.articles.length;
    const lobstersCount = lobstersData.stories.length;
    const header =
      lang === "en"
        ? `# ${COMMUNITY_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Sources: [Dev.to](https://dev.to/) (${devtoCount} articles) + [Lobste.rs](https://lobste.rs/) (${lobstersCount} stories) | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${COMMUNITY_REPORT.title[lang]} ${dateStr}\n\n` +
          `> 数据来源: [Dev.to](https://dev.to/) (${devtoCount} 篇) + [Lobste.rs](https://lobste.rs/) (${lobstersCount} 条) | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = COMMUNITY_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.community[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created community issue (${lang}): ${url}`);
    }
  } catch (err) {
    console.error(`  [community/${lang}] Report generation failed: ${err}`);
  }
}
