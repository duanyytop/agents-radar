# AGENTS.md

## Project overview

agents-radar is a daily digest generator for the AI open-source ecosystem. A GitHub Actions cron job runs at 00:00 UTC (08:00 CST) and produces bilingual (Chinese + English) reports, published as GitHub Issues and committed Markdown files.

## Commands

```bash
pnpm start          # run the full digest locally
pnpm test           # vitest (unit tests)
pnpm typecheck      # tsc --noEmit
pnpm lint           # ESLint
pnpm lint:fix       # ESLint --fix
pnpm format         # Prettier --write src
pnpm format:check   # Prettier --check src
```

Required env vars for local runs:

```bash
export GITHUB_TOKEN=ghp_xxxxx
export DIGEST_REPO=owner/repo   # omit to skip GitHub issue creation

# LLM provider (default: anthropic)
export LLM_PROVIDER=anthropic   # anthropic | openai | github-copilot | openrouter | deepseek | qwen | atlas

# Anthropic (default)
export ANTHROPIC_API_KEY=sk-ant-xxxxx

# OpenAI
# export OPENAI_API_KEY=sk-xxxxx

# GitHub Copilot — uses GITHUB_TOKEN

# OpenRouter
# export OPENROUTER_API_KEY=sk-or-xxxxx

# DeepSeek
# export DEEPSEEK_API_KEY=sk-xxxxx

# Qwen (Alibaba Model Studio)
# export DASHSCOPE_API_KEY=sk-xxxxx

# Atlas Cloud
# export ATLASCLOUD_API_KEY=sk-xxxxx
```

## Architecture

The pipeline runs in four sequential phases, each implemented as a named async function in `src/index.ts`:

1. **`fetchAllData`** — all network I/O in parallel: GitHub API (issues/PRs/releases) for 17 repos, Claude Code Skills, Anthropic/OpenAI sitemaps, GitHub Trending HTML + Search API, Hacker News Algolia API.
2. **`generateSummaries`** — per-repo LLM calls, all in parallel, rate-limited to 5 concurrent requests by a queue in `src/report.ts`.
3. **Comparisons** — two LLM calls: cross-tool CLI comparison and OpenClaw cross-ecosystem comparison.
4. **Save phase** — `buildCliReportContent` / `buildOpenclawReportContent` / `buildInfraReportContent` (in `src/report-builders.ts`) build Markdown strings; `saveWebReport` / `saveTrendingReport` / `saveHnReport` (in `src/report-savers.ts`) call LLM + write file + create GitHub Issue.

## Source files

| File | Responsibility |
|------|---------------|
| `src/index.ts` | Orchestration: repo config, phase functions, `main()` |
| `src/i18n.ts` | Centralized bilingual strings: `Lang` type, report titles, issue labels, footer text, `REPORT_LABELS`, `NOTIFY_LABELS` |
| `src/github.ts` | GitHub API helpers: `fetchRecentItems`, `fetchRecentReleases`, `fetchRecentDiscussions` (GraphQL), `fetchSkillsData`, `createGitHubIssue`; shared `RepoFetch` type |
| `src/config.ts` | Loads `config.yml` into `RadarConfig` (`cliRepos`, `skillsRepo`, `openclaw`, `openclawPeers`, `infraRepos`); built-in defaults when a section is missing |
| `src/prompts.ts` | LLM prompt builders for repo reports: `buildCliPrompt`, `buildPeerPrompt`, `buildInfraPrompt`, `buildComparisonPrompt`, `buildInfraComparisonPrompt`, `buildPeersComparisonPrompt`, `buildSkillsPrompt` |
| `src/prompts-data.ts` | LLM prompt builders for data-source reports: `buildTrendingPrompt`, `buildWebReportPrompt`, `buildHnPrompt` |
| `src/report.ts` | `callLlm` (with concurrency limiter), `saveFile`, `autoGenFooter` (uses i18n), LLM token budget constants |
| `src/report-builders.ts` | `buildCliReportContent`, `buildOpenclawReportContent`, `buildInfraReportContent` — assemble final Markdown strings for CLI, OpenClaw and infra reports |
| `src/report-savers.ts` | `saveWebReport`, `saveTrendingReport`, `saveHnReport` — LLM call + file save + optional GitHub issue |
| `src/date.ts` | Date and timing utilities: `toCstDateStr`, `toUtcStr`, `sleep` |
| `src/providers/types.ts` | `LlmProvider` interface, `ProviderName` type, `VALID_PROVIDER_NAMES` |
| `src/providers/openai-compatible.ts` | `OpenAICompatibleProvider` — shared base class for OpenAI-compatible providers |
| `src/providers/anthropic.ts` | `AnthropicProvider` — Anthropic SDK wrapper |
| `src/providers/openai.ts` | `OpenAIProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/github-copilot.ts` | `GitHubCopilotProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/openrouter.ts` | `OpenRouterProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/deepseek.ts` | `DeepSeekProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/qwen.ts` | `QwenProvider` — extends `OpenAICompatibleProvider`; Alibaba Model Studio |
| `src/providers/atlas.ts` | `AtlasProvider` — extends `OpenAICompatibleProvider`; Atlas Cloud |
| `src/providers/index.ts` | `createProvider` factory + barrel re-exports |
| `src/web.ts` | Sitemap-based web content fetching; state persisted to `digests/web-state.json` |
| `src/trending.ts` | GitHub Trending HTML scraper + Search API topic queries |
| `src/hn.ts` | Hacker News top AI stories via Algolia HN Search API |
| `src/generate-manifest.ts` | Generates `manifest.json` (sidebar data for Web UI) and `feed.xml` (RSS 2.0 feed) |

## Report outputs

Files written to `digests/YYYY-MM-DD/`:

| File | Label | Notes |
|------|-------|-------|
| `ai-cli.md` | `digest` | Always generated |
| `ai-agents.md` | `openclaw` | Always generated |
| `ai-infra.md` | `infra` | Always generated |
| `ai-web.md` | `web` | Skipped if no new sitemap content |
| `ai-trending.md` | `trending` | Skipped if both data sources fail |
| `ai-hn.md` | `hn` | Skipped if Algolia fetch fails |

## Tracked sources

- **CLI_REPOS** (9): claude-code, codex, gemini-cli, copilot-cli, opencode, pi, qwen-code, codewhale, deepseek-harness
- **Discussions** (`discussions: true` in `config.yml`): codex, pi, codewhale, deepseek-harness. deepseek-harness has Issues/PRs disabled upstream — Discussions is its only community channel.
- **OPENCLAW** + **OPENCLAW_PEERS** (12): openclaw/openclaw + 11 peer projects (sorted by stars)
- **INFRA_REPOS** (6): vllm, sglang, llama-cpp, ollama, litellm, unsloth — inference engines, gateway and fine-tuning layer
- **CLAUDE_SKILLS_REPO**: anthropics/skills — no date filter, sorted by popularity
- **Web**: anthropic.com + openai.com via sitemap, state in `digests/web-state.json`
- **Trending**: github.com/trending (HTML) + GitHub Search API (6 AI topics, 7-day window)
- **HN**: Algolia HN Search API — 6 parallel queries, top-30 AI stories by points, last 24h

## Key conventions

- All bilingual strings (titles, labels, footers, messages) are centralized in `src/i18n.ts`. Use the `Lang` type (`"zh" | "en"`) and `Record<Lang, string>` maps. Do not add inline bilingual ternaries elsewhere.
- LLM prompt builders are split across two files: `src/prompts.ts` (repo-level prompts) and `src/prompts-data.ts` (data-source prompts). Each report type has its own builder function.
- Weekly and monthly rollups were removed in July 2026. `ai-weekly`/`ai-monthly` remain in `REPORT_LABELS` (`src/i18n.ts`) and `REPORT_FILES` (`src/generate-manifest.ts`) only so archived reports stay reachable — do not add generation code back.
- `callLlm(prompt, maxTokens?)` defaults to 4096 tokens. Web report uses 8192, trending uses 6144. The table-formatted listing reports (HN, PH, ArXiv, HF, Community) use `LLM_TOKENS_LISTING` = 6144 to fit multi-row tables plus 2-sentence summaries.
- Data-source listing reports (Trending, HN, PH, ArXiv, HF, Community) render their item lists as **Markdown tables** (not bullet lists). Numeric columns are copied verbatim from the fetched data; the summary column is 2 sentences. Tables already have CSS in `index.html` and render natively in GitHub Issues too.
- On 429 rate-limit errors `callLlm` retries up to 3 times with exponential backoff (5 s / 10 s / 20 s); the concurrency slot is released during the wait.
- The concurrency limiter (`LLM_CONCURRENCY = 5`) prevents 429s when many parallel LLM calls fire. Do not bypass it by calling SDK clients directly.
- LLM provider is selected via `LLM_PROVIDER` env var (default: `anthropic`). Valid values: `anthropic`, `openai`, `github-copilot`, `openrouter`, `deepseek`, `qwen`, `atlas`.
- Provider implementations live in `src/providers/`. Each file implements the `LlmProvider` interface. The factory in `src/providers/index.ts` validates the provider name and logs only the provider name — never API keys or endpoint URLs.
- GitHub issue label colors are defined in `LABEL_COLORS` in `src/github.ts`. Add new labels there.
- GitHub Discussions have no REST API, so `fetchRecentDiscussions` uses GraphQL. Enable per-repo with `discussions: true` — most tracked repos have the board enabled but dormant, and an unconditional fetch would just burn quota. Only `buildCliPrompt` renders a Discussions section, and it is omitted entirely when there is no data.
- `sampleNote(total, sampled, lang, by)` in `src/prompts.ts` formats the "(共 N 条，展示前 M 条)" note. Reuse it — do not inline the same string format. Pass `by: "engagement"` when the sample was ranked by comments + upvotes (discussions) instead of comments alone.
- Web state (`digests/web-state.json`) is committed to git on every run. It is the source of truth for which URLs have been seen.

## Web UI & RSS Feed

- Web UI: `index.html` reads `manifest.json` to build the sidebar, then fetches `digests/YYYY-MM-DD/report.md` on demand.
- RSS Feed: `feed.xml` at the repo root. Generated by `src/generate-manifest.ts` in the same `pnpm manifest` step. Contains the latest 30 items (newest first) across all report types. Item links use hash routing: `https://duanyytop.github.io/agents-radar/#YYYY-MM-DD/report`.
- Both `manifest.json` and `feed.xml` are committed together in the "Commit manifest and feed" GHA step.
- The `REPORT_LABELS` map in `src/i18n.ts` must be kept in sync with the `LABELS` object in `index.html` when adding new report types.

## Adding a new report type

1. Create a data fetcher (or add to an existing one). For a repo-backed report, add the section to `RawConfig`/`RadarConfig` and `loadConfig` in `src/config.ts` — a `config.yml` section with no schema entry is silently ignored.
2. Add a `buildXxxPrompt` function in `src/prompts-data.ts` (for data-source prompts) or `src/prompts.ts` (for repo-level prompts).
3. Add bilingual strings (titles, labels, issue title function) to `src/i18n.ts`.
4. Add a `saveXxxReport` function in `src/report-savers.ts`.
5. Wire into `fetchAllData`, `generateSummaries`, and the save phase in `src/index.ts`.
6. Add a label color entry in `LABEL_COLORS` in `src/github.ts`.
7. Add the report ID and label to `REPORT_LABELS` in `src/i18n.ts` and `LABELS` in `index.html`.
8. Add the report file name to `REPORT_FILES` in `src/generate-manifest.ts`.
9. Update both README files and this file.
