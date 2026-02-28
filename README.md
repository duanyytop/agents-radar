# agents-radar

English | [中文](./README.zh.md)

A GitHub Actions workflow that runs every morning at 08:00 CST. It tracks GitHub activity from AI CLI tools, OpenClaw and its peer projects in the AI agent ecosystem, scrapes official news and research from Anthropic and OpenAI, and monitors the GitHub AI trending repos daily — then publishes Chinese-language daily digests as GitHub Issues and committed Markdown files.

## Web UI

**[https://duanyytop.github.io/agents-radar](https://duanyytop.github.io/agents-radar)**

Browse all historical digests in a clean, dark-themed interface — no login required. Reports are rendered from the Markdown files in this repo via GitHub Pages.

## Tracked sources

### AI CLI tools (GitHub)

| Tool | Repository |
|------|-----------|
| Claude Code | [anthropics/claude-code](https://github.com/anthropics/claude-code) |
| OpenAI Codex | [openai/codex](https://github.com/openai/codex) |
| Gemini CLI | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| Kimi Code CLI | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) |
| OpenCode | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| Qwen Code | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) |

### Claude Code Skills (GitHub)

| Source | Repository |
|--------|-----------|
| Claude Code Skills | [anthropics/skills](https://github.com/anthropics/skills) |

PRs and issues are fetched without a date filter and sorted by popularity (comment count), so the report always reflects the most actively discussed skills — not just the newest.

### OpenClaw + AI agent ecosystem (GitHub)

OpenClaw is tracked as the primary reference project. Nine peer projects in the personal AI assistant / autonomous agent space are tracked alongside it for cross-ecosystem comparison.

| Project | Repository | Stars |
|---------|-----------|-------|
| OpenClaw | [openclaw/openclaw](https://github.com/openclaw/openclaw) | — |
| Zeroclaw | [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 19.6k |
| EasyClaw | [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw) | 87 |
| LobsterAI | [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 2.6k |
| ZeptoClaw | [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | 372 |
| NanoBot | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 25.5k |
| PicoClaw | [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 20.2k |
| NanoClaw | [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | 15k |
| IronClaw | [nearai/ironclaw](https://github.com/nearai/ironclaw) | 3.5k |
| TinyClaw | [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw) | 2.7k |

### GitHub AI Trending

Two data sources are fetched in parallel every day:

| Source | Details |
|--------|---------|
| [github.com/trending](https://github.com/trending?since=daily) | Today's trending repos — parsed from HTML; includes today's new star count |
| GitHub Search API | Repos active in the last 7 days matching 6 AI topics: `llm`, `ai-agent`, `rag`, `vector-database`, `large-language-model`, `machine-learning` |

The LLM filters out non-AI repos from the trending list, classifies the rest by dimension (AI infrastructure / agents / applications / models / RAG), and extracts trend signals.

### Official web content (sitemap-based)

| Organization | Site | Tracked sections |
|---|---|---|
| Anthropic | [anthropic.com](https://www.anthropic.com) | `/news/`, `/research/`, `/engineering/`, `/learn/` |
| OpenAI | [openai.com](https://openai.com) | research, publication, release, company, engineering, milestone, learn-guides, safety, product |

New articles are detected by comparing sitemap `lastmod` timestamps against a persisted state file (`digests/web-state.json`). On the **first run**, up to 25 recent articles per site are fetched and a comprehensive overview report is generated. On subsequent runs, only new or updated URLs trigger a report; if nothing changed, the web report step is skipped entirely.

## Features

- Fetches issues, pull requests, and releases updated in the last 24 hours across all tracked repos
- Tracks trending Claude Code Skills — sorted by community engagement, not recency
- Generates a per-tool summary for each CLI repository and a cross-tool comparative analysis
- Generates a deep OpenClaw project report plus a cross-ecosystem comparison against 9 peer projects
- Scrapes official Anthropic and OpenAI web content via sitemaps; detects new articles incrementally
- Monitors GitHub Trending daily + searches 6 AI topic tags; classifies repos by dimension and extracts trend signals
- Publishes GitHub Issues for each report type; commits Markdown files to `digests/YYYY-MM-DD/`
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

To test immediately, go to **Actions → Daily Agents Radar → Run workflow**.

> **First run note**: The web content step will fetch up to 50 articles (25 per site) and may take a few extra minutes. Subsequent runs are fast — only new articles are processed.

## Running locally

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/
export ANTHROPIC_API_KEY=sk-kimi-xxxxxxxx
export DIGEST_REPO=your-username/agents-radar  # optional; omit to only write files

pnpm start
```

## Output format

Files are written to `digests/YYYY-MM-DD/`:

| File | Content | GitHub Issue label |
|------|---------|-------------------|
| `ai-cli.md` | CLI digest — cross-tool comparison + per-tool details | `digest` |
| `ai-agents.md` | OpenClaw deep report + cross-ecosystem comparison + 9 peer details | `openclaw` |
| `ai-web.md` | Official web content report (only written when new content exists) | `web` |
| `ai-trending.md` | GitHub AI trending report — repos classified by dimension + trend signals (only written when data is available) | `trending` |

A shared state file `digests/web-state.json` tracks which web URLs have been seen; it is committed alongside the daily digests.

---

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

`ai-agents.md` structure (written in Chinese):
```
Issues: N | PRs: N | 覆盖项目: 10 个

## OpenClaw 项目深度报告
  今日速览 / 版本发布 / 项目进展 / 社区热点 /
  Bug稳定性 / 功能请求 / 用户反馈 / 待处理积压

## 横向生态对比
  生态全景 / 活跃度对比表 / OpenClaw定位分析 /
  共同技术方向 / 差异化定位 / 社区热度与成熟度 / 趋势信号

## 同赛道项目详细报告
  <details> Zeroclaw   — 今日速览 / 版本发布 / 项目进展 / ...（8节）
  <details> EasyClaw   — ...
  <details> LobsterAI  — ...
  <details> ZeptoClaw  — ...
  <details> NanoBot    — ...
  <details> PicoClaw   — ...
  <details> NanoClaw   — ...
  <details> IronClaw   — ...
  <details> TinyClaw   — ...
```

`ai-web.md` structure (written in Chinese):
```
数据来源: anthropic.com (N 篇) + openai.com (N 篇)

今日速览
Anthropic/Claude 内容精选  (news / research / engineering / learn)
OpenAI 内容精选            (research / release / company / safety / ...)
战略信号解读
值得关注的细节
[首次全量时额外包含: 内容格局总览]
```

`ai-trending.md` structure (written in Chinese):
```
数据来源: GitHub Trending + GitHub Search API

今日速览
各维度热门项目
  🔧 AI 基础工具   — 框架 / SDK / 推理引擎 / CLI
  🤖 AI 智能体/工作流 — Agent 框架 / 多智能体 / 自动化
  📦 AI 应用       — 垂直场景产品 / 解决方案
  🧠 大模型/训练   — 模型权重 / 训练框架 / 微调工具
  🔍 RAG/知识库    — 向量数据库 / 检索增强
趋势信号分析
社区关注热点
```

Historical digests are stored in [`digests/`](./digests/). Published issues are tagged by type: [`digest`](../../issues?label=digest) · [`openclaw`](../../issues?label=openclaw) · [`web`](../../issues?label=web) · [`trending`](../../issues?label=trending).

## Schedule

Default cron `"0 0 * * *"` = **00:00 UTC = 08:00 CST**.

To change the time, edit the cron expression in `.github/workflows/daily-digest.yml`:

| CST  | UTC cron       |
|------|----------------|
| 08:00 | `0 0 * * *`  |
| 09:00 | `0 1 * * *`  |
| 10:00 | `0 2 * * *`  |
