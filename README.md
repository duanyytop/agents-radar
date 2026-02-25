# agents-radar

A GitHub Actions workflow that runs every morning at 08:00 CST, fetches the latest issues, pull requests, and releases from major AI CLI tool repositories, and publishes Chinese-language daily digests as a GitHub Issue and committed Markdown files.

## Tracked repositories

### AI CLI tools

| Tool | Repository |
|------|-----------|
| Claude Code | [anthropics/claude-code](https://github.com/anthropics/claude-code) |
| OpenAI Codex | [openai/codex](https://github.com/openai/codex) |
| Gemini CLI | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| Kimi Code CLI | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) |
| OpenCode | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| Qwen Code | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) |

### Claude Code Skills

| Source | Repository |
|--------|-----------|
| Claude Code Skills | [anthropics/skills](https://github.com/anthropics/skills) |

The official Claude Code Skills collection. PRs and issues are fetched without a date filter and sorted by popularity (comment count), so the report always reflects the most actively discussed skills rather than just recent activity.

## Features

- Fetches issues, pull requests, and releases updated in the last 24 hours across all CLI repos
- Tracks trending Claude Code Skills (anthropics/skills) — sorted by community engagement, not recency
- Generates a per-tool summary for each repository
- Generates a cross-tool comparative analysis covering trends, feature overlap, and ecosystem positioning
- Publishes a single GitHub Issue with the comparative report and links to individual digests
- Commits all Markdown files to `digests/YYYY-MM-DD/`
- Runs on a daily schedule via GitHub Actions; supports manual triggering

## Setup

### 1. Fork this repository

### 2. Add Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description |
|--------|-------------|
| `ANTHROPIC_API_KEY` | API key — works with both Anthropic and Kimi Code |
| `ANTHROPIC_BASE_URL` | API endpoint override. Set to `https://api.kimi.com/coding/` for Kimi Code; leave unset for Anthropic |

> `GITHUB_TOKEN` is provided automatically by GitHub Actions.

### 3. Enable the workflow

Confirm the workflow is enabled in the **Actions** tab.

To test immediately, go to **Actions → Daily Claude Code Digest → Run workflow**.

## Running locally

```bash
npm install

export GITHUB_TOKEN=ghp_xxxxx
export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/
export ANTHROPIC_API_KEY=sk-kimi-xxxxxxxx
export DIGEST_REPO=your-username/agents-radar  # optional; omit to only write the file

pnpm start
```

## Output format

Files are written to `digests/YYYY-MM-DD/`:

| File | Content |
|------|---------|
| `ai-cli.md` | Full CLI digest — cross-tool comparison + per-tool details (collapsible) |
| `openclaw.md` | OpenClaw project digest (standalone) |

`ai-cli.md` structure (written in Chinese):
```
## 横向对比
  生态全景 / 活跃度对比表 / 共同需求 / 差异定位 / 趋势信号

## 各工具详细报告
  <details> Claude Code    — [Claude Code Skills 社区热点]
                             热门 Skills 排行 / 社区需求趋势 / 高潜力待合并 Skills
                             ---
                             今日速览 / 热点 Issues / PR 进展 / 趋势
  <details> OpenAI Codex   — 今日速览 / 热点 Issues / PR 进展 / 趋势
  <details> Gemini CLI     — ...
  <details> Kimi Code CLI  — ...
  <details> OpenCode       — ...
  <details> Qwen Code      — ...
```

Historical digests are stored in [`digests/`](./digests/). Published issues are tagged [`digest`](../../issues?label=digest).

## Schedule

Default cron `"0 0 * * *"` = **00:00 UTC = 08:00 CST**.

To change the time, edit the cron expression in `.github/workflows/daily-digest.yml`:

| CST  | UTC cron       |
|------|----------------|
| 08:00 | `0 0 * * *`  |
| 09:00 | `0 1 * * *`  |
| 10:00 | `0 2 * * *`  |
