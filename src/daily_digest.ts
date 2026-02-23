/**
 * Daily digest for anthropics/claude-code GitHub repository.
 * Fetches recent issues and PRs, summarizes with the Anthropic SDK,
 * then creates a GitHub issue with the digest.
 *
 * Uses standard Anthropic SDK env vars:
 *   ANTHROPIC_API_KEY   - API key (works for both Anthropic and Kimi Code)
 *   ANTHROPIC_BASE_URL  - Override API endpoint (e.g. https://api.kimi.com/coding/)
 *   ANTHROPIC_MODEL     - Model name to use (default: claude-sonnet-4-6)
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface GitHubUser {
  login: string;
}

interface GitHubLabel {
  name: string;
}

interface GitHubReactions {
  "+1": number;
}

interface GitHubItem {
  number: number;
  title: string;
  state: string;
  user: GitHubUser;
  labels: GitHubLabel[];
  created_at: string;
  updated_at: string;
  comments: number;
  reactions?: GitHubReactions;
  body?: string | null;
  html_url: string;
  pull_request?: unknown;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  body?: string | null;
  published_at: string;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const GITHUB_TOKEN = requireEnv("GITHUB_TOKEN");
const DIGEST_REPO = process.env["DIGEST_REPO"] ?? "";
const TARGET_REPO = "anthropics/claude-code";
const MODEL = process.env["ANTHROPIC_MODEL"] ?? "claude-sonnet-4-6";

const GITHUB_HEADERS: Record<string, string> = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// GitHub API
// ---------------------------------------------------------------------------

async function githubGet<T>(url: string, params: Record<string, string> = {}): Promise<T> {
  const u = new URL(url);
  for (const [k, v] of Object.entries(params)) u.searchParams.set(k, v);
  const resp = await fetch(u.toString(), { headers: GITHUB_HEADERS });
  if (!resp.ok) throw new Error(`GitHub API error ${resp.status}: ${await resp.text()}`);
  return resp.json() as Promise<T>;
}

async function fetchRecentItems(itemType: "issues" | "pulls", since: Date): Promise<GitHubItem[]> {
  const params: Record<string, string> = {
    state: "all",
    sort: "updated",
    direction: "desc",
    per_page: "50",
  };
  // The /pulls endpoint does not support `since`; filter client-side instead.
  // The /issues endpoint supports `since` natively.
  if (itemType === "issues") params["since"] = since.toISOString();

  const items = await githubGet<GitHubItem[]>(
    `https://api.github.com/repos/${TARGET_REPO}/${itemType}`,
    params,
  );

  return itemType === "pulls"
    ? items.filter((i) => new Date(i.updated_at) >= since)
    : items;
}

async function fetchRecentReleases(since: Date): Promise<GitHubRelease[]> {
  const releases = await githubGet<GitHubRelease[]>(
    `https://api.github.com/repos/${TARGET_REPO}/releases`,
    { per_page: "10" },
  );
  return releases.filter((r) => new Date(r.published_at) >= since);
}

async function ensureLabel(name: string, color: string): Promise<void> {
  const url = `https://api.github.com/repos/${DIGEST_REPO}/labels`;
  const resp = await fetch(url, {
    method: "POST",
    headers: { ...GITHUB_HEADERS, "Content-Type": "application/json" },
    body: JSON.stringify({ name, color }),
  });
  // 422 means the label already exists — that's fine.
  if (!resp.ok && resp.status !== 422) {
    throw new Error(`Failed to create label "${name}": ${await resp.text()}`);
  }
}

async function createGitHubIssue(title: string, body: string): Promise<string> {
  await ensureLabel("digest", "0075ca");
  const resp = await fetch(`https://api.github.com/repos/${DIGEST_REPO}/issues`, {
    method: "POST",
    headers: { ...GITHUB_HEADERS, "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, labels: ["digest"] }),
  });
  if (!resp.ok) throw new Error(`Failed to create issue: ${await resp.text()}`);
  const data = (await resp.json()) as { html_url: string };
  return data.html_url;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

function formatItem(item: GitHubItem): string {
  const labels = item.labels.map((l) => l.name).join(", ");
  const labelStr = labels ? ` [${labels}]` : "";
  const body = (item.body ?? "").replace(/\n/g, " ").trim().slice(0, 300);
  const ellipsis = (item.body ?? "").length > 300 ? "..." : "";

  return [
    `#${item.number} [${item.state.toUpperCase()}]${labelStr} ${item.title}`,
    `  作者: @${item.user.login} | 创建: ${item.created_at.slice(0, 10)} | 更新: ${item.updated_at.slice(0, 10)} | 评论: ${item.comments} | 👍: ${item.reactions?.["+1"] ?? 0}`,
    `  链接: ${item.html_url}`,
    `  摘要: ${body}${ellipsis}`,
  ].join("\n");
}

function buildPrompt(
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
): string {
  const issuesText = issues.map(formatItem).join("\n") || "无";
  const prsText = prs.map(formatItem).join("\n") || "无";
  const releasesText = releases.length
    ? releases
        .map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`)
        .join("\n")
    : "无";

  return `你是一位专注于 AI 开发工具的技术分析师。请根据以下 GitHub 数据，生成 ${dateStr} 的 Claude Code 社区动态日报。

# 数据来源: github.com/anthropics/claude-code

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

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

async function callLlm(prompt: string): Promise<string> {
  // SDK automatically reads ANTHROPIC_API_KEY and ANTHROPIC_BASE_URL from env
  const client = new Anthropic();
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });
  const block = message.content[0];
  if (block?.type !== "text") throw new Error("Unexpected response type from LLM");
  return block.text;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function saveDigestFile(content: string, dateStr: string): string {
  const filepath = path.join("digests", `${dateStr}.md`);
  fs.mkdirSync("digests", { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

async function main(): Promise<void> {
  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  // CST = UTC+8
  const dateStr = new Date(now.getTime() + 8 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const baseUrl = process.env["ANTHROPIC_BASE_URL"] ?? "api.anthropic.com";
  console.log(`[${now.toISOString()}] Fetching ${TARGET_REPO} | endpoint: ${baseUrl} | model: ${MODEL}`);

  const [issuesRaw, prs, releases] = await Promise.all([
    fetchRecentItems("issues", since),
    fetchRecentItems("pulls", since),
    fetchRecentReleases(since),
  ]);

  // The /issues endpoint returns both issues and PRs; filter to issues only
  const issues = issuesRaw.filter((i) => !i.pull_request);

  console.log(`  Issues: ${issues.length}, PRs: ${prs.length}, Releases: ${releases.length}`);

  if (!issues.length && !prs.length && !releases.length) {
    console.log("No activity in the last 24 hours, skipping.");
    process.exit(0);
  }

  const prompt = buildPrompt(issues, prs, releases, dateStr);
  console.log("  Calling LLM to generate summary...");
  const summary = await callLlm(prompt);

  const digestHeader =
    `# Claude Code 社区日报 ${dateStr}\n\n` +
    `> 数据来源: [${TARGET_REPO}](https://github.com/${TARGET_REPO}) ` +
    `| 生成时间: ${now.toISOString().slice(0, 16).replace("T", " ")} UTC\n\n`;
  const digestFooter = DIGEST_REPO
    ? `\n\n---\n*本日报由 [claude-code-digest](https://github.com/${DIGEST_REPO}) 自动生成。*`
    : "";
  const fullDigest = digestHeader + summary + digestFooter;

  const filepath = saveDigestFile(fullDigest, dateStr);
  console.log(`  Saved to ${filepath}`);

  if (DIGEST_REPO) {
    const issueUrl = await createGitHubIssue(`📋 Claude Code 社区日报 ${dateStr}`, fullDigest);
    console.log(`  Created issue: ${issueUrl}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
