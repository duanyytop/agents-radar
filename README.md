# agents-radar

A GitHub Actions workflow that runs every morning at 09:00 CST, fetches the latest issues, pull requests, and releases from six major AI CLI tool repositories, and publishes Chinese-language daily digests as a GitHub Issue and committed Markdown files.

## Tracked repositories

| Tool | Repository |
|------|-----------|
| Claude Code | [anthropics/claude-code](https://github.com/anthropics/claude-code) |
| OpenAI Codex | [openai/codex](https://github.com/openai/codex) |
| Gemini CLI | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| Kimi Code CLI | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) |
| OpenCode | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| Qwen Code | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) |

## Features

- Fetches issues, pull requests, and releases updated in the last 24 hours across all repos
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
| `claude-code.md` | Claude Code individual digest |
| `codex.md` | OpenAI Codex individual digest |
| `gemini-cli.md` | Gemini CLI individual digest |
| `kimi-cli.md` | Kimi Code CLI individual digest |
| `opencode.md` | OpenCode individual digest |
| `qwen-code.md` | Qwen Code individual digest |
| `openclaw.md` | OpenClaw project digest |
| `comparison.md` | Cross-tool comparative analysis |

Each per-tool digest (written in Chinese):
```
## 今日速览        — Top highlights
## 版本发布        — New releases (omitted if none)
## 社区热点 Issues — 10 notable issues with context
## 重要 PR 进展    — 10 important PRs
## 功能需求趋势    — Feature request trends
## 开发者关注点    — Developer pain points
```

The comparative `index.md` covers:
```
## 生态全景           — Overall ecosystem overview
## 各工具活跃度对比   — Activity table across all tools
## 共同关注的功能方向 — Shared community feature requests
## 差异化定位分析     — Positioning and focus differences
## 社区热度与成熟度   — Community activity and maturity
## 值得关注的趋势信号 — Industry trend signals
```

Historical digests are stored in [`digests/`](./digests/). Published issues are tagged [`digest`](../../issues?label=digest).

## Schedule

Default cron `"0 1 * * *"` = **01:00 UTC = 09:00 CST**.

To change the time, edit the cron expression in `.github/workflows/daily-digest.yml`:

| CST  | UTC cron       |
|------|----------------|
| 08:00 | `0 0 * * *`  |
| 09:00 | `0 1 * * *`  |
| 10:00 | `0 2 * * *`  |
