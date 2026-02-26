/**
 * Web content fetching for AI company news/blog/research.
 *
 * Strategy:
 *   - Discover article URLs via sitemaps (no date filter needed — lastmod is reliable)
 *   - Compare with stored state to find new/updated URLs
 *   - Fetch content only for new URLs; on first run, cap at MAX_CONTENT_FETCH_FIRST_RUN per site
 *   - After every run, mark ALL discovered URLs as seen so future runs stay incremental
 *
 * State is persisted in digests/web-state.json (committed to git by the Actions workflow).
 */

import fs from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface WebPageItem {
  url: string;
  title: string;
  lastmod: string;
  content: string;
  site: "anthropic" | "openai";
  category: string;
}

interface SiteState {
  lastChecked: string;
  /** url → lastmod string (or "seen" if no lastmod available) */
  seenUrls: Record<string, string>;
}

export interface WebState {
  anthropic: SiteState;
  openai: SiteState;
}

export interface WebFetchResult {
  site: "anthropic" | "openai";
  siteName: string;
  isFirstRun: boolean;
  newItems: WebPageItem[];
  /** Total URLs discovered in sitemap (for context in the report) */
  totalDiscovered: number;
}

// ---------------------------------------------------------------------------
// Site config
// ---------------------------------------------------------------------------

interface SiteConfig {
  name: string;
  /** For single sitemaps: URL to fetch */
  sitemapUrl: string;
  /** For single sitemaps: only keep URLs starting with these path prefixes */
  prefixes?: string[];
  /** For sitemap indexes: named sub-sitemaps to fetch */
  subSitemapNames?: string[];
  /** URL template for sub-sitemaps; {name} is replaced with each sub-sitemap name */
  subSitemapTemplate?: string;
}

const SITE_CONFIGS: Record<"anthropic" | "openai", SiteConfig> = {
  anthropic: {
    name: "Anthropic (Claude)",
    sitemapUrl: "https://www.anthropic.com/sitemap.xml",
    prefixes: ["/news/", "/research/", "/engineering/", "/learn/"],
  },
  openai: {
    name: "OpenAI",
    sitemapUrl: "https://openai.com/sitemap.xml",
    // Fetch only content-focused sub-sitemaps; skip app-category and i18n sitemaps
    subSitemapNames: [
      "research",
      "publication",
      "release",
      "company",
      "engineering",
      "milestone",
      "learn-guides",
      "safety",
      "product",
    ],
    subSitemapTemplate: "https://openai.com/sitemap.xml/{name}/",
  },
};

/** Max articles to fetch full content for on the very first run (per site). */
const MAX_CONTENT_FETCH_FIRST_RUN = 25;
/** Characters of page text forwarded to the LLM per article. */
const MAX_CONTENT_LENGTH = 1_500;
/** Polite delay between individual page GETs (ms). */
const FETCH_DELAY_MS = 300;
/** Per-request timeout (ms). */
const FETCH_TIMEOUT_MS = 10_000;

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

const WEB_HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; agents-radar/1.0; +https://github.com/search?q=agents-radar)",
  Accept: "text/html,application/xml,text/xml,*/*",
  "Accept-Language": "en-US,en;q=0.9",
};

async function httpGet(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(url, { headers: WEB_HEADERS, signal: controller.signal });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return await resp.text();
  } finally {
    clearTimeout(timer);
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// Sitemap parsing (plain-text XML; no DOM needed)
// ---------------------------------------------------------------------------

function parseSitemapUrls(xml: string): Array<{ loc: string; lastmod?: string }> {
  const results: Array<{ loc: string; lastmod?: string }> = [];
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc     = block.match(/<loc>\s*(.*?)\s*<\/loc>/)?.[1];
    const lastmod = block.match(/<lastmod>\s*(.*?)\s*<\/lastmod>/)?.[1];
    if (loc) results.push({ loc, lastmod });
  }
  return results;
}

function isSitemapIndex(xml: string): boolean {
  return /<sitemapindex[\s>]/.test(xml);
}

// ---------------------------------------------------------------------------
// HTML content extraction
// ---------------------------------------------------------------------------

function extractTitle(html: string): string {
  return (
    // Prefer OpenGraph title for cleaner strings
    html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']{1,200})["']/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']{1,200})["'][^>]+property=["']og:title["']/i)?.[1] ??
    html.match(/<title[^>]*>([^<]{1,200})<\/title>/i)?.[1] ??
    ""
  ).trim();
}

function extractText(html: string): string {
  // Prefer <main> or <article> to avoid nav/header/footer boilerplate
  const source =
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ??
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] ??
    html;

  return source
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_CONTENT_LENGTH);
}

function urlCategory(url: string): string {
  try {
    return new URL(url).pathname.split("/").filter(Boolean)[0] ?? "article";
  } catch {
    return "article";
  }
}

// ---------------------------------------------------------------------------
// URL discovery
// ---------------------------------------------------------------------------

async function discoverUrls(
  site: "anthropic" | "openai",
): Promise<Array<{ loc: string; lastmod?: string }>> {
  const cfg = SITE_CONFIGS[site];
  const results: Array<{ loc: string; lastmod?: string }> = [];

  if (cfg.subSitemapNames && cfg.subSitemapTemplate) {
    // Sitemap index: fetch each named sub-sitemap
    for (const name of cfg.subSitemapNames) {
      const subUrl = cfg.subSitemapTemplate.replace("{name}", name);
      try {
        const xml = await httpGet(subUrl);
        results.push(...parseSitemapUrls(xml));
        await sleep(100);
      } catch (err) {
        console.error(`  [web/${site}] sub-sitemap "${name}" failed: ${err}`);
      }
    }
  } else {
    // Single sitemap
    const xml = await httpGet(cfg.sitemapUrl);
    const all = isSitemapIndex(xml)
      ? [] // unexpected; skip rather than recurse
      : parseSitemapUrls(xml);

    const prefixes = cfg.prefixes ?? [];
    results.push(
      ...all.filter(({ loc }) => {
        try {
          return prefixes.some((p) => new URL(loc).pathname.startsWith(p));
        } catch {
          return false;
        }
      }),
    );
  }

  return results;
}

// ---------------------------------------------------------------------------
// State persistence
// ---------------------------------------------------------------------------

const STATE_FILE = path.join("digests", "web-state.json");

function emptyState(): WebState {
  return {
    anthropic: { lastChecked: "", seenUrls: {} },
    openai:    { lastChecked: "", seenUrls: {} },
  };
}

export function loadWebState(): WebState {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf-8")) as WebState;
  } catch {
    return emptyState();
  }
}

export function saveWebState(state: WebState): void {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchSiteContent(
  site: "anthropic" | "openai",
  state: WebState,
): Promise<WebFetchResult> {
  const cfg       = SITE_CONFIGS[site];
  const siteState = state[site];
  const isFirstRun = Object.keys(siteState.seenUrls).length === 0;

  console.log(`  [web/${site}] Discovering URLs from sitemap...`);
  const allDiscovered = await discoverUrls(site);
  console.log(`  [web/${site}] Discovered ${allDiscovered.length} URLs`);

  // Newest first
  allDiscovered.sort((a, b) => {
    if (!a.lastmod && !b.lastmod) return 0;
    if (!a.lastmod) return 1;
    if (!b.lastmod) return -1;
    return b.lastmod.localeCompare(a.lastmod);
  });

  // New = not seen before, OR lastmod is newer than what we stored
  const newUrls = allDiscovered.filter(({ loc, lastmod }) => {
    const prev = siteState.seenUrls[loc];
    if (!prev) return true;
    if (lastmod && lastmod > prev) return true;
    return false;
  });

  // Cap content fetches on first run to avoid excessive runtime
  const toFetch = isFirstRun ? newUrls.slice(0, MAX_CONTENT_FETCH_FIRST_RUN) : newUrls;

  console.log(
    `  [web/${site}] ${isFirstRun ? "First run" : "Incremental"}: ` +
    `${newUrls.length} new URLs, fetching content for ${toFetch.length}`,
  );

  // Fetch page content sequentially with a polite delay
  const items: WebPageItem[] = [];
  for (const { loc, lastmod } of toFetch) {
    try {
      const html = await httpGet(loc);
      items.push({
        url:      loc,
        title:    extractTitle(html),
        lastmod:  lastmod ?? "",
        content:  extractText(html),
        site,
        category: urlCategory(loc),
      });
    } catch (err) {
      console.error(`  [web/${site}] Failed to fetch ${loc}: ${err}`);
    }
    await sleep(FETCH_DELAY_MS);
  }

  // Mark ALL discovered URLs as seen (not just fetched ones)
  // This ensures future runs are truly incremental
  for (const { loc, lastmod } of allDiscovered) {
    siteState.seenUrls[loc] = lastmod ?? "seen";
  }
  siteState.lastChecked = new Date().toISOString();

  return {
    site,
    siteName: cfg.name,
    isFirstRun,
    newItems: items,
    totalDiscovered: allDiscovered.length,
  };
}
