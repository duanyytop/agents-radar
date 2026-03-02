/**
 * Config loader — reads config/sources.yaml and provides typed access.
 * Env vars override notification settings and LLM endpoint.
 */

import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import type { RepoConfig } from "./github.ts";

// ── Types ────────────────────────────────────────────────

export interface GroupConfig {
  id: string;
  name: string;
  reportFile: string;
  issueLabel: string;
  issueEmoji: string;
  promptStyle: "cli" | "peer";
  primaryRepo?: string; // For peer groups: id of the primary project
  repos: RepoConfig[];
}

export interface WebsiteConfig {
  name: string;
  sitemapUrl: string;
  prefixes?: string[];
  subSitemapNames?: string[];
  subSitemapTemplate?: string;
  metadataOnly?: boolean;
}

export interface SearchQuery {
  query: string;
  label: string;
}

export interface LlmConfig {
  defaultBaseUrl: string;
  defaultModel: string;
  concurrency: number;
  defaultMaxTokens: number;
  trendingMaxTokens: number;
  webMaxTokens: number;
}

export interface RssConfig {
  title: string;
  description: string;
  link: string;
  language: string;
  maxItems: number;
}

export interface RadarConfig {
  groups: GroupConfig[];
  skills: { repo: string };
  websites: Record<string, WebsiteConfig>;
  trending: { searchQueries: SearchQuery[] };
  notifications: {
    slack: { enabled: boolean };
    discord: { enabled: boolean };
    telegram: { enabled: boolean };
  };
  llm: LlmConfig;
  rss: RssConfig;
}

// ── Loader ───────────────────────────────────────────────

let _config: RadarConfig | null = null;

export function loadConfig(configPath?: string): RadarConfig {
  if (_config) return _config;

  const file = configPath ?? path.join(process.cwd(), "config", "sources.yaml");
  const raw = fs.readFileSync(file, "utf-8");
  const parsed = parseYaml(raw) as RadarConfig;

  // Validate groups
  for (const group of parsed.groups) {
    if (!group.id || !group.repos?.length) {
      throw new Error(`Invalid group: missing id or repos in "${group.id ?? "unknown"}"`);
    }
    for (const repo of group.repos) {
      if (!repo.repo.includes("/")) {
        throw new Error(`Invalid repo format (need owner/repo): ${repo.repo}`);
      }
    }
  }

  // Env overrides for notifications
  if (process.env["SLACK_WEBHOOK_URL"]) {
    parsed.notifications.slack.enabled = true;
  }
  if (process.env["DISCORD_WEBHOOK_URL"]) {
    parsed.notifications.discord.enabled = true;
  }
  if (process.env["TELEGRAM_BOT_TOKEN"] && process.env["TELEGRAM_CHAT_ID"]) {
    parsed.notifications.telegram.enabled = true;
  }

  _config = parsed;
  return parsed;
}

/** Get all repos across all groups as flat list with RepoConfig shape. */
export function getAllRepos(config: RadarConfig): RepoConfig[] {
  return config.groups.flatMap((g) => g.repos);
}

/** Get search queries from config (falls back to hardcoded if missing). */
export function getSearchQueries(config: RadarConfig): Array<{ q: string; label: string }> {
  return config.trending.searchQueries.map((sq) => ({
    q: sq.query,
    label: sq.label,
  }));
}
