# agents-radar

English | [中文](./README.zh.md)

A GitHub Actions workflow that runs every morning at 08:00 CST. It tracks GitHub activity from AI CLI tools, OpenClaw and its peer projects in the AI agent ecosystem, scrapes official news and research from Anthropic and OpenAI, and monitors the GitHub AI trending repos daily — then publishes bilingual (Chinese + English) daily digests as GitHub Issues and committed Markdown files. Weekly and monthly rollup reports are also generated automatically.

## Web UI

**[https://duanyytop.github.io/agents-radar](https://duanyytop.github.io/agents-radar)**

Browse all historical digests in a clean, dark-themed interface — no login required. Reports are rendered from the Markdown files in this repo via GitHub Pages.

## RSS Feed

**[https://duanyytop.github.io/agents-radar/feed.xml](https://duanyytop.github.io/agents-radar/feed.xml)**

Subscribe in any RSS reader (Feedly, Reeder, NewsBlur, etc.) to receive new digests automatically. The feed includes the latest 30 reports across all report types, updated daily alongside `manifest.json`.

## Telegram Channel

**[t.me/agents_radar](https://t.me/agents_radar)**

Subscribe to get daily digest notifications pushed directly to Telegram. Each message links to all reports for that day (ZH and EN variants) plus the Web UI and RSS feed.

## Tracked sources

### AI CLI tools (GitHub)

| Tool | Repository |
|------|-----------|
| Claude Code | [anthropics/claude-code](https://github.com/anthropics/claude-code) |
| OpenAI Codex | [openai/codex](https://github.com/openai/codex) |
| Gemini CLI | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| GitHub Copilot CLI | [github/copilot-cli](https://github.com/github/copilot-cli) |
| Kimi Code CLI | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) |
| OpenCode | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| Qwen Code | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) |

### Claude Code Skills (GitHub)

| Source | Repository |
|--------|-----------|
| Claude Code Skills | [anthropics/skills](https://github.com/anthropics/skills) |

PRs and issues are fetched without a date filter and sorted by popularity (comment count), so the report always reflects the most actively discussed skills — not just the newest.

### OpenClaw + AI agent ecosystem (GitHub)

OpenClaw is tracked as the primary reference project. Ten peer projects in the personal AI assistant / autonomous agent space are tracked alongside it for cross-ecosystem comparison.

| Project | Repository | Stars |
|---------|-----------|-------|
| OpenClaw | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 240.5k |
| NanoBot | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 26.9k |
| Zeroclaw | [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 21.2k |
| PicoClaw | [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 21.1k |
| NanoClaw | [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | 16.6k |
| IronClaw | [nearai/ironclaw](https://github.com/nearai/ironclaw) | 3.9k |
| LobsterAI | [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 3.0k |
| TinyClaw | [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw) | 2.8k |
| CoPaw | [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) | 2.2k |
| ZeptoClaw | [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | 394 |
| EasyClaw | [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw) | 102 |

### GitHub AI Trending

Two data sources are fetched in parallel every day:

| Source | Details |
|--------|---------|
| [github.com/trending](https://github.com/trending?since=daily) | Today's trending repos — parsed from HTML; includes today's new star count |
| GitHub Search API | Repos active in the last 7 days matching 6 AI topics: `llm`, `ai-agent`, `rag`, `vector-database`, `large-language-model`, `machine-learning` |

The LLM filters out non-AI repos from the trending list, classifies the rest by dimension (AI infrastructure / agents / applications / models / RAG), and extracts trend signals.

### Hacker News

Top AI stories from the last 24 hours, fetched via the [Algolia HN Search API](https://hn.algolia.com/api). Six queries run in parallel (`AI`, `LLM`, `Claude`, `OpenAI`, `Anthropic`, `machine learning`), results are deduplicated and ranked by points. The top 30 stories are passed to the LLM for analysis.

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
- Generates a deep OpenClaw project report plus a cross-ecosystem comparison against 10 peer projects
- Scrapes official Anthropic and OpenAI web content via sitemaps; detects new articles incrementally
- Monitors GitHub Trending daily + searches 6 AI topic tags; classifies repos by dimension and extracts trend signals
- Fetches top-30 AI stories from Hacker News (last 24h, ranked by points); generates community sentiment report
- Publishes GitHub Issues for each report type; commits Markdown files to `digests/YYYY-MM-DD/`
- Runs on a daily schedule via GitHub Actions; supports manual triggering

## Setup

### 1. Fork this repository

### 2. Add Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Required | Description |
|--------|----------|-------------|
| `ANTHROPIC_API_KEY` | ✅ | API key — works with both Anthropic and Kimi Code |
| `ANTHROPIC_BASE_URL` | optional | API endpoint override. Set to `https://api.kimi.com/coding/` for Kimi Code; leave unset for Anthropic |
| `TELEGRAM_BOT_TOKEN` | optional | Telegram bot token from [@BotFather](https://t.me/BotFather). If set, a message is sent after each digest run |
| `TELEGRAM_CHAT_ID` | optional | Telegram chat/channel/group ID to send notifications to |

> `GITHUB_TOKEN` is provided automatically by GitHub Actions.

**Setting up Telegram notifications** (optional):
1. Message [@BotFather](https://t.me/BotFather) on Telegram, create a bot, and copy the token
2. Add the bot to your channel/group, or start a DM with it
3. Get the chat ID via [@userinfobot](https://t.me/userinfobot) or the [getUpdates](https://core.telegram.org/bots/api#getupdates) API
4. Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` as repository secrets

> If neither secret is set, the notification step is silently skipped.

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
| `ai-agents.md` | OpenClaw deep report + cross-ecosystem comparison + 10 peer details | `openclaw` |
| `ai-web.md` | Official web content report (only written when new content exists) | `web` |
| `ai-trending.md` | GitHub AI trending report — repos classified by dimension + trend signals (only written when data is available) | `trending` |
| `ai-hn.md` | Hacker News AI community digest — top stories + sentiment analysis (only written when fetch succeeds) | `hn` |

A shared state file `digests/web-state.json` tracks which web URLs have been seen; it is committed alongside the daily digests.

Each report is generated in both Chinese (`ai-cli.md`) and English (`ai-cli-en.md`). The Web UI sidebar shows ZH / EN toggle buttons for reports that have both variants.

---

`ai-cli.md` / `ai-cli-en.md` structure:
```
## Cross-Tool Comparison
  Ecosystem overview / Activity comparison table / Shared themes / Differentiation / Trend signals

## Per-Tool Reports
  <details> Claude Code    — [Claude Code Skills Highlights]
                             Top skills / Community demand trends / High-potential pending skills
                             ---
                             Today's summary / Hot issues / PR progress / Trends
  <details> OpenAI Codex   — Today's summary / Hot issues / PR progress / Trends
  <details> Gemini CLI     — ...
  <details> GitHub Copilot CLI — ...
  <details> Kimi Code CLI  — ...
  <details> OpenCode       — ...
  <details> Qwen Code      — ...
```

`ai-agents.md` / `ai-agents-en.md` structure:
```
Issues: N | PRs: N | Projects covered: 10

## OpenClaw Deep Dive
  Today's summary / Releases / Project progress / Community highlights /
  Bug stability / Feature requests / User feedback / Backlog

## Cross-Ecosystem Comparison
  Ecosystem overview / Activity table / OpenClaw positioning /
  Shared technical directions / Differentiation / Community maturity / Trend signals

## Peer Project Reports
  <details> Zeroclaw   — Today's summary / Releases / Progress / ... (8 sections)
  <details> EasyClaw   — ...
  <details> LobsterAI  — ...
  <details> ZeptoClaw  — ...
  <details> NanoBot    — ...
  <details> PicoClaw   — ...
  <details> NanoClaw   — ...
  <details> IronClaw   — ...
  <details> TinyClaw   — ...
  <details> CoPaw      — ...
```

`ai-web.md` / `ai-web-en.md` structure:
```
Sources: anthropic.com (N articles) + openai.com (N articles)

Today's summary
Anthropic / Claude highlights  (news / research / engineering / learn)
OpenAI highlights              (research / release / company / safety / ...)
Strategic signals
Notable details
[First full crawl also includes: Content landscape overview]
```

`ai-trending.md` / `ai-trending-en.md` structure:
```
Sources: GitHub Trending + GitHub Search API

Today's summary
Top repos by dimension
  🔧 AI Infrastructure  — frameworks / SDKs / inference engines / CLIs
  🤖 AI Agents          — agent frameworks / multi-agent / automation
  📦 AI Applications    — vertical products / solutions
  🧠 Models & Training  — model weights / training frameworks / fine-tuning
  🔍 RAG & Knowledge    — vector databases / retrieval augmentation
Trend signal analysis
Community focus
```

`ai-hn.md` / `ai-hn-en.md` structure:
```
Sources: Hacker News (top-30 AI stories, last 24h)

Today's summary
Top stories & discussions
  🔬 Models & Research  — new model releases / papers / benchmarks
  🛠️ Tools & Engineering — open-source projects / frameworks / engineering practice
  🏢 Industry news      — company news / funding / product launches
  💬 Opinions & debate  — Ask HN / Show HN / hot threads
Community sentiment signals
Worth reading
```

`ai-weekly.md` / `ai-weekly-en.md` structure (generated every Monday):
```
Coverage: YYYY-MM-DD ~ YYYY-MM-DD  (last 7 daily digests)

Weekly highlights
Key trends & developments
Notable releases
Community momentum
Outlook
```

`ai-monthly.md` / `ai-monthly-en.md` structure (generated on the 1st of each month):
```
Sources: N weekly reports  (or sampled daily reports if fewer than 2 weeklies available)

Month in review
Major themes
Ecosystem shifts
Top projects & releases
Looking ahead
```

Historical digests are stored in [`digests/`](./digests/). Published issues are tagged by type: [`digest`](../../issues?label=digest) · [`openclaw`](../../issues?label=openclaw) · [`web`](../../issues?label=web) · [`trending`](../../issues?label=trending) · [`hn`](../../issues?label=hn) · [`weekly`](../../issues?label=weekly) · [`monthly`](../../issues?label=monthly).

## Schedule

| Workflow | Cron | UTC | CST |
|----------|------|-----|-----|
| Daily digest | `0 0 * * *` | 00:00 daily | 08:00 daily |
| Weekly rollup | `0 1 * * 1` | 01:00 Monday | 09:00 Monday |
| Monthly rollup | `0 2 1 * *` | 02:00 on the 1st | 10:00 on the 1st |

To change the schedule, edit the cron expressions in the corresponding workflow files under `.github/workflows/`.
