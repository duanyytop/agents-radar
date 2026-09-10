# agents-radar

English | [中文](./README.zh.md)

A GitHub Actions workflow that runs every morning at 07:00 CST. It aggregates AI ecosystem signals from 10 data sources, then publishes bilingual (Chinese + English) daily digests as GitHub Issues and committed Markdown files.

### Data Sources

| Source | Type | Data |
|--------|------|------|
| [GitHub Repos](https://github.com) | API | Issues, PRs, releases from 18 tracked AI tool repos |
| [Claude Code Skills](https://github.com/anthropics/skills) | API | Trending skills sorted by community engagement |
| [GitHub Trending](https://github.com/trending) | HTML + API | Daily trending repos + AI topic search (7-day window) |
| [Hacker News](https://news.ycombinator.com) | [Algolia API](https://hn.algolia.com/api) | Top 30 AI stories from last 24h, 6 parallel queries |
| [Product Hunt](https://www.producthunt.com) | GraphQL API | Yesterday's top AI products by votes |
| [ArXiv](https://arxiv.org) | [ArXiv API](https://export.arxiv.org/api/query) | Latest papers from cs.AI, cs.CL, cs.LG (last 48h) |
| [Hugging Face](https://huggingface.co) | [Hub API](https://huggingface.co/api/models) | 30 trending models sorted by weekly likes — **weekly**, Mondays only |
| [Dev.to](https://dev.to) | [Forem API](https://dev.to/api) | Top AI/LLM articles from 5 tags |
| [Lobste.rs](https://lobste.rs) | JSON API | AI/ML tagged stories from last 7 days |
| [Anthropic](https://anthropic.com) + [OpenAI](https://openai.com) | Sitemap | New articles detected via `lastmod` diff |

## Web UI

**[https://duanyytop.github.io/agents-radar](https://duanyytop.github.io/agents-radar)**

Browse all historical digests in a clean, dark-themed interface — no login required. Reports are rendered from the Markdown files in this repo via GitHub Pages.

![Web UI](assets/web-en.png)

## Telegram Channel & Feishu Group

Subscribe to get daily digest notifications pushed directly to your preferred platform. Each message links to all reports for that day (ZH and EN variants) plus the Web UI and RSS feed.

<table>
  <tr>
    <td align="center"><b><a href="https://t.me/agents_radar">Join Telegram Channel</a></b></td>
    <td align="center"><b><a href="https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=b56v3be8-b027-4ee6-abc4-65bf1f80bccd">Join Feishu Group</a></b></td>
  </tr>
  <tr>
    <td><img src="assets/telegram.jpg" width="300" alt="Telegram notification"></td>
    <td><img src="assets/feishu.jpg" width="300" alt="Feishu notification"></td>
  </tr>
</table>

## RSS Feed

**[https://duanyytop.github.io/agents-radar/feed.xml](https://duanyytop.github.io/agents-radar/feed.xml)**

Subscribe in any RSS reader (Feedly, Reeder, NewsBlur, etc.) to receive new digests automatically. The feed includes the latest 30 reports across all report types, updated daily alongside `manifest.json`.

## MCP Server

**`https://agents-radar-mcp.duanyytop.workers.dev`**

A hosted [Model Context Protocol](https://modelcontextprotocol.io) server that exposes agents-radar data as tools. Any MCP-compatible client (Claude Desktop, OpenClaw, etc.) can query the latest AI ecosystem reports directly.

**Available tools:**

| Tool | Description |
|------|-------------|
| `list_reports` | List available dates and report types (last N days) |
| `get_latest` | Fetch the most recent report of a given type |
| `get_report` | Fetch a specific report by date and type |
| `search` | Keyword search across recent reports |

**Claude Desktop setup** — add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "agents-radar": {
      "url": "https://agents-radar-mcp.duanyytop.workers.dev"
    }
  }
}
```

Restart Claude Desktop after saving. You can then ask Claude things like:
- *"What's the latest in AI CLI tools?"* → calls `get_latest`
- *"Search for Claude Code mentions this week"* → calls `search`
- *"Show me the AI trending report for 2026-03-05"* → calls `get_report`

**OpenClaw setup** — run the following command:

```bash
openclaw mcp add --transport http agents-radar https://agents-radar-mcp.duanyytop.workers.dev
```

Or add it manually to `~/.openclaw/openclaw.json`:

```json
{
  "mcpServers": {
    "agents-radar": {
      "type": "http",
      "url": "https://agents-radar-mcp.duanyytop.workers.dev"
    }
  }
}
```

You can then ask OpenClaw things like:
- *"What's the latest in AI CLI tools?"* → calls `get_latest`
- *"Search for Claude Code mentions this week"* → calls `search`
- *"Show me the AI trending report for 2026-03-05"* → calls `get_report`

**Self-hosting** — deploy your own instance from the `mcp/` directory:

```bash
cd mcp
pnpm install
wrangler deploy
```

## Tracked sources

### AI CLI tools (GitHub)

| Tool | Repository |
|------|-----------|
| Claude Code | [anthropics/claude-code](https://github.com/anthropics/claude-code) |
| OpenAI Codex | [openai/codex](https://github.com/openai/codex) |
| Gemini CLI | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| GitHub Copilot CLI | [github/copilot-cli](https://github.com/github/copilot-cli) |
| OpenCode | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| Pi | [earendil-works/pi](https://github.com/earendil-works/pi) |
| Qwen Code | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) |

Repos marked `discussions: true` in `config.yml` (Codex, Pi) also have their GitHub Discussions
pulled in.

### Claude Code Skills (GitHub)

| Source | Repository |
|--------|-----------|
| Claude Code Skills | [anthropics/skills](https://github.com/anthropics/skills) |

PRs and issues are fetched without a date filter and sorted by popularity (comment count), so the report always reflects the most actively discussed skills — not just the newest.

### OpenClaw + AI agent ecosystem (GitHub)

OpenClaw is tracked as the primary reference project, alongside several peer projects in the personal AI assistant / autonomous agent space for cross-ecosystem comparison.

| Project | Repository | Stars |
|---------|-----------|-------|
| OpenClaw | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 387.8k |
| Hermes Agent | [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 237.0k |
| QwenPaw | [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34.5k |
| ZeroClaw | [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 32.7k |
| IronClaw | [nearai/ironclaw](https://github.com/nearai/ironclaw) | 12.6k |

### AI infrastructure (GitHub)

The inference and serving layer the agent/CLI tools run on top of — tracked in a dedicated report with its own cross-project comparison.

| Project | Repository | Layer | Stars |
|---------|-----------|-------|-------|
| Ollama | [ollama/ollama](https://github.com/ollama/ollama) | Local runtime | 177.2k |
| llama.cpp | [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | Inference engine | 121.9k |
| vLLM | [vllm-project/vllm](https://github.com/vllm-project/vllm) | Serving engine | 87.5k |
| Unsloth | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Fine-tuning | 69.0k |
| LiteLLM | [BerriAI/litellm](https://github.com/BerriAI/litellm) | LLM gateway | 55.0k |
| SGLang | [sgl-project/sglang](https://github.com/sgl-project/sglang) | Serving engine | 30.9k |

Summaries focus on new model/hardware support, performance work, breaking changes, and what each change means for developers building on top of these projects.

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
- Generates a deep OpenClaw project report plus a cross-ecosystem comparison against 4 peer projects
- Tracks 6 AI infrastructure projects (inference engines, gateways, fine-tuning) with a dedicated report and cross-project comparison
- Scrapes official Anthropic and OpenAI web content via sitemaps; detects new articles incrementally
- Monitors GitHub Trending daily + searches 6 AI topic tags; classifies repos by dimension and extracts trend signals
- Fetches top-30 AI stories from Hacker News (last 24h, ranked by points); generates community sentiment report
- Publishes GitHub Issues for each report type; commits Markdown files to `digests/YYYY-MM-DD/`
- Generates every report body once in English and translates it to Chinese, instead of running the whole pipeline twice per language
- Runs on a daily schedule via GitHub Actions; supports manual triggering
- All tracked repositories are configurable via `config.yml` — no code changes needed

## Setup

### 1. Fork this repository

### 2. Customize `config.yml` (optional)

Edit `config.yml` in the repo root to add, remove, or replace the tracked repositories. The file is fully commented. No code changes are needed — the pipeline reads it on every run and falls back to built-in defaults if the file is absent.

```yaml
# Add a new CLI tool
cli_repos:
  - id: my-tool
    repo: owner/my-ai-cli
    name: My AI Tool

# Add a new peer project to the OpenClaw ecosystem comparison
openclaw_peers:
  - id: my-agent
    repo: owner/my-agent
    name: My Agent

# Add a new AI infrastructure project
infra_repos:
  - id: my-engine
    repo: owner/my-engine
    name: My Engine
    paginated: true   # for repos with >100 daily issue/PR updates
```

### 3. Add Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Required | Description |
|--------|----------|-------------|
| `LLM_PROVIDER` | optional | `anthropic` (default), `openai`, `github-copilot`, `openrouter`, `deepseek`, `qwen`, or `atlas` |
| `ANTHROPIC_API_KEY` | if Anthropic | API key — works with both Anthropic and Kimi Code |
| `ANTHROPIC_BASE_URL` | optional | API endpoint override. Set to `https://api.kimi.com/coding/` for Kimi Code; leave unset for Anthropic |
| `OPENAI_API_KEY` | if OpenAI | OpenAI API key |
| `OPENAI_BASE_URL` | optional | OpenAI endpoint override |
| `OPENROUTER_API_KEY` | if OpenRouter | OpenRouter API key |
| `DEEPSEEK_API_KEY` | if DeepSeek | DeepSeek API key |
| `ATLASCLOUD_API_KEY` | if Atlas Cloud | Atlas Cloud API key |
| `DASHSCOPE_API_KEY` | if Qwen | Alibaba Model Studio API key |
| `TELEGRAM_BOT_TOKEN` | optional | Telegram bot token from [@BotFather](https://t.me/BotFather). If set, a message is sent after each digest run |
| `TELEGRAM_CHAT_ID` | optional | Telegram chat/channel/group ID to send notifications to |
| `FEISHU_WEBHOOK_URLS` | optional | Comma-separated Feishu custom bot webhook URLs. If set, a card message is sent to each group after each digest run |

> `GITHUB_TOKEN` is provided automatically by GitHub Actions. When using `github-copilot` as the provider, the same `GITHUB_TOKEN` is used for LLM calls.

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

## LLM providers

Set `LLM_PROVIDER` to choose which model backend powers the digest generation. Defaults to `anthropic`.

| Provider | `LLM_PROVIDER` | Required env vars | Default model |
|----------|---------------|-------------------|---------------|
| Anthropic | `anthropic` | `ANTHROPIC_API_KEY` | `claude-sonnet-4-6` |
| OpenAI | `openai` | `OPENAI_API_KEY` | `gpt-4o` |
| GitHub Copilot | `github-copilot` | `GITHUB_TOKEN` | `gpt-4o` |
| OpenRouter | `openrouter` | `OPENROUTER_API_KEY` | `anthropic/claude-sonnet-4` |
| DeepSeek | `deepseek` | `DEEPSEEK_API_KEY` | `deepseek-v4-flash` |
| Qwen | `qwen` | `DASHSCOPE_API_KEY` | `qwen-flash` |
| Atlas Cloud | `atlas` | `ATLASCLOUD_API_KEY` | `Qwen/Qwen3-235B-A22B-Instruct-2507` |

Override the model name with `ANTHROPIC_MODEL`, `OPENAI_MODEL`, `GITHUB_COPILOT_MODEL`, `OPENROUTER_MODEL`, `DEEPSEEK_MODEL`, `QWEN_MODEL`, or `ATLASCLOUD_MODEL` respectively. The Qwen and Atlas Cloud endpoints can be overridden with `DASHSCOPE_BASE_URL` and `ATLASCLOUD_BASE_URL`.

The scheduled daily run uses `qwen` / `qwen-flash`.

The provider abstraction lives in `src/providers/` — each provider is a separate file implementing the `LlmProvider` interface. Adding a new provider only requires creating a new file and registering it in the factory.

## Running locally

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx

# Option A: Anthropic (default)
export ANTHROPIC_API_KEY=sk-ant-xxxxxxxx

# Option B: OpenAI
# export LLM_PROVIDER=openai
# export OPENAI_API_KEY=sk-xxxxxxxx

# Option C: GitHub Copilot (uses GITHUB_TOKEN)
# export LLM_PROVIDER=github-copilot

# Option D: OpenRouter
# export LLM_PROVIDER=openrouter
# export OPENROUTER_API_KEY=sk-or-xxxxxxxx

# Option E: DeepSeek
# export LLM_PROVIDER=deepseek
# export DEEPSEEK_API_KEY=sk-xxxxxxxx

# Qwen (Alibaba Model Studio)
# export LLM_PROVIDER=qwen
# export DASHSCOPE_API_KEY=sk-xxxxxxxx

# export LLM_PROVIDER=atlas
# export ATLASCLOUD_API_KEY=sk-xxxxxxxx

export DIGEST_REPO=your-username/agents-radar  # optional; omit to only write files

pnpm start
```

## Output format

Files are written to `digests/YYYY-MM-DD/`:

| File | Content | GitHub Issue label |
|------|---------|-------------------|
| `ai-cli.md` | CLI digest — cross-tool comparison + per-tool details | `digest` |
| `ai-agents.md` | OpenClaw deep report + cross-ecosystem comparison + 4 peer details | `openclaw` |
| `ai-infra.md` | AI infrastructure digest — cross-project comparison + per-project details | `infra` |
| `ai-web.md` | Official web content report (only written when new content exists) | `web` |
| `ai-trending.md` | GitHub AI trending report — repos classified by dimension + trend signals (only written when data is available) | `trending` |
| `ai-hn.md` | Hacker News AI community digest — top stories + sentiment analysis (only written when fetch succeeds) | `hn` |
| `ai-ph.md` | Product Hunt AI products digest (only written when `PRODUCTHUNT_TOKEN` is set and data is available) | `ph` |
| `ai-arxiv.md` | ArXiv AI research digest — key papers from cs.AI/cs.CL/cs.LG | `arxiv` |
| `ai-hf.md` | Hugging Face trending models digest — sorted by weekly likes (**weekly**: written on Mondays only) | `hf` |
| `ai-community.md` | Tech community AI digest — Dev.to articles + Lobste.rs stories combined | `community` |

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
  <details> OpenCode       — ...
  <details> Pi             — ...
  <details> Qwen Code      — ...
```

`ai-agents.md` / `ai-agents-en.md` structure:
```
Issues: N | PRs: N | Projects covered: 5

## OpenClaw Deep Dive
  Today's summary / Releases / Project progress / Community highlights /
  Bug stability / Feature requests / User feedback / Backlog

## Cross-Ecosystem Comparison
  Ecosystem overview / Activity table / OpenClaw positioning /
  Shared technical directions / Differentiation / Community maturity / Trend signals

## Peer Project Reports
  <details> ZeroClaw     — Today's summary / Releases / Progress / ... (8 sections)
  <details> Hermes Agent — ...
  <details> IronClaw     — ...
  <details> QwenPaw      — ...
```

`ai-infra.md` / `ai-infra-en.md` structure:
```
Projects covered: 6

## Cross-Project Comparison
  Ecosystem overview / Activity table / Model support race /
  Performance frontier / Layer positioning / Trend signals

## Per-Project Reports
  <details> vLLM       — Today's highlights / Releases & breaking changes /
                         New model & hardware support / Performance & optimization /
                         Stability & regressions / What it means for app developers
  <details> SGLang     — ...
  <details> llama.cpp  — ...
  <details> Ollama     — ...
  <details> LiteLLM    — ...
  <details> Unsloth    — ...
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

Historical digests are stored in [`digests/`](./digests/). Published issues are tagged by type: [`digest`](../../issues?q=is%3Aissue+label%3Adigest) · [`openclaw`](../../issues?q=is%3Aissue+label%3Aopenclaw) · [`web`](../../issues?q=is%3Aissue+label%3Aweb) · [`trending`](../../issues?q=is%3Aissue+label%3Atrending) · [`hn`](../../issues?q=is%3Aissue+label%3Ahn) · [`ph`](../../issues?q=is%3Aissue+label%3Aph) · [`arxiv`](../../issues?q=is%3Aissue+label%3Aarxiv) · [`hf`](../../issues?q=is%3Aissue+label%3Ahf) · [`community`](../../issues?q=is%3Aissue+label%3Acommunity).

Only the most recent day's issues are left open — `pnpm close-stale` closes everything older on each run, so the issue list stays at roughly one day's worth instead of thousands. Nothing is deleted: the label links above include closed issues, and the full archive also lives under `digests/` and in the Web UI. Issues without a digest label, and pull requests, are never touched.

Weekly and monthly rollup reports were discontinued in July 2026; past ones remain browsable under `digests/` and in the Web UI.

## Schedule

| Workflow | Cron | UTC | CST |
|----------|------|-----|-----|
| Daily digest | `37 22 * * *` | 22:37 daily | 06:37 next day |

To change the schedule, edit the cron expression in `.github/workflows/daily-digest.yml`.

GitHub's scheduled runs are queued, not guaranteed — typical delay for this workflow is 10-15 minutes, so a 06:37 CST start lands the digest around 07:00 CST. The minute is off the hour on purpose: the `:00` slot is the most contended, and while this workflow sat at `0 23 * * *` the delays degraded from minutes to hours (the 2026-08-26 run was dispatched 5h07m late, and the 2026-08-27 run was never created at all).

When a scheduled run is late enough that you dispatch a catch-up run manually, the two would otherwise both build the same day's digest and open a duplicate set of issues. Two guards prevent that: a `concurrency: daily-digest` group serializes overlapping runs, and a `guard` job skips any **scheduled** run whose `digests/YYYY-MM-DD` folder (CST date) is already committed. Manual `workflow_dispatch` runs always proceed, so you can still force a regeneration.

## Star History

[![Star History Chart](https://star-history.dera.page/svg?repos=duanyytop/agents-radar&type=Date)](https://star-history.dera.page/#duanyytop/agents-radar&Date)
