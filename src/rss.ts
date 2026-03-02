/**
 * Atom/RSS feed generator — produces feed.xml from daily digest reports.
 */

import fs from "node:fs";
import type { RssConfig } from "./config.ts";

export interface FeedEntry {
  title: string;
  link: string;
  date: string;
  summary: string;
  category: string;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function stripMarkdown(md: string, maxLen = 500): string {
  return md
    .replace(/#{1,6}\s/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/^[-*]\s/gm, "")
    .replace(/\n+/g, " ")
    .trim()
    .slice(0, maxLen);
}

export function generateAtomFeed(config: RssConfig, entries: FeedEntry[]): string {
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date)).slice(0, config.maxItems);
  const updated = sorted[0]?.date ?? new Date().toISOString();

  const items = sorted
    .map(
      (e) => `  <entry>
    <title>${escapeXml(e.title)}</title>
    <link href="${escapeXml(e.link)}"/>
    <id>${escapeXml(e.link)}</id>
    <updated>${e.date}</updated>
    <summary type="text">${escapeXml(e.summary)}</summary>
    <category term="${escapeXml(e.category)}"/>
  </entry>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(config.title)}</title>
  <subtitle>${escapeXml(config.description)}</subtitle>
  <link href="${config.link}" rel="alternate"/>
  <link href="${config.link}feed.xml" rel="self"/>
  <id>${config.link}</id>
  <updated>${updated}</updated>
  <generator>agents-radar</generator>
${items}
</feed>`;
}

export function saveFeed(config: RssConfig, entries: FeedEntry[]): void {
  const xml = generateAtomFeed(config, entries);
  fs.writeFileSync("feed.xml", xml, "utf-8");
  console.log(`  [rss] Saved feed.xml (${entries.length} entries)`);
}

export function buildFeedEntry(
  dateStr: string,
  label: string,
  content: string,
  issueUrl: string | null,
  siteUrl: string,
  category: string,
): FeedEntry {
  return {
    title: `[${dateStr}] ${label}`,
    link: issueUrl ?? `${siteUrl}#${dateStr}/${category}`,
    date: new Date(`${dateStr}T00:00:00Z`).toISOString(),
    summary: stripMarkdown(content),
    category,
  };
}
