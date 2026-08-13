# CLAUDE.md

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

Preferred Windows local run (DeepSeek):

```dotenv
LLM_PROVIDER=deepseek
DEEPSEEK_API_KEY=sk-xxxxx
```

Keep only the provider and its required key in the ignored `.env` file. Then run from PowerShell:

```powershell
corepack pnpm install --frozen-lockfile
$env:GITHUB_TOKEN = gh auth token
Remove-Item Env:DIGEST_REPO -ErrorAction SilentlyContinue
node --env-file=.env --import=tsx src/index.ts
```

`GITHUB_TOKEN` belongs only to the current process and must not be written to `.env`. With `DIGEST_REPO` unset, reports are written locally and no GitHub Issues are created. Set `DIGEST_REPO=owner/repo` only for an intentional publishing run.

The provider factory still defaults to `anthropic` when `LLM_PROVIDER` is absent. Supported providers are `anthropic`, `openai`, `github-copilot`, `openrouter`, and `deepseek`. `README.md` is the complete provider/key matrix; `.env.example` is the preferred local DeepSeek example with commented Anthropic/OpenAI alternatives.

## Architecture

The main flow has four major stages, but Radar intentionally overlaps the middle two rather than running as a sequential stage:

1. **`fetchAllData`** — all network I/O in parallel: GitHub API (issues/PRs/releases) for 17 repos, Claude Code Skills, Anthropic/OpenAI sitemaps, GitHub Trending HTML + Search API, and Hacker News Firebase Top Stories.
2. **`generateSummaries`** — per-repo LLM calls, all in parallel, rate-limited to 5 concurrent requests by a queue in `src/report.ts`.
3. **Comparisons** — cross-tool CLI, OpenClaw cross-ecosystem, and infrastructure comparison calls.
4. **Save phase** — report builders assemble Markdown; savers write bilingual files and create GitHub Issues only when `DIGEST_REPO` is explicitly set. `saveRadarReport` reuses the single shared Radar result for both languages.

Immediately after fetch, `main()` creates one `radarDataPromise` for the bilingual editorial request. It runs while summaries and comparisons proceed, falls back to deterministic scoring if editorial validation or retries fail, and is awaited exactly once immediately before the save batch; both languages reuse that result.

## Source files

| File | Responsibility |
|------|---------------|
| `src/index.ts` | Orchestration: repo config, phase functions, `main()` |
| `src/i18n.ts` | Centralized bilingual strings: `Lang` type, report titles, issue labels, footer text, `REPORT_LABELS`, `NOTIFY_LABELS` |
| `src/github.ts` | GitHub API helpers: `fetchRecentItems`, `fetchRecentReleases`, `fetchSkillsData`, `createGitHubIssue`; shared `RepoFetch` type |
| `src/config.ts` | Loads `config.yml` into `RadarConfig` (`cliRepos`, `skillsRepo`, `openclaw`, `openclawPeers`, `infraRepos`); built-in defaults when a section is missing |
| `src/prompts.ts` | LLM prompt builders for repo reports: `buildCliPrompt`, `buildPeerPrompt`, `buildInfraPrompt`, `buildComparisonPrompt`, `buildInfraComparisonPrompt`, `buildPeersComparisonPrompt`, `buildSkillsPrompt` |
| `src/prompts-data.ts` | LLM prompt builders for data-source reports, including one bilingual `buildRadarPrompt` request for all Radar candidates |
| `src/report.ts` | `callLlm` (with concurrency limiter), `saveFile`, `autoGenFooter` (uses i18n), LLM token budget constants |
| `src/report-builders.ts` | Pure Markdown builders, including `buildRadarReportContent` for bilingual candidate tables and Top 5 sections |
| `src/report-savers.ts` | Report save wrappers, including `saveRadarReport`; GitHub Issue creation is conditional on `DIGEST_REPO` |
| `src/date.ts` | Date and timing utilities: `toCstDateStr`, `toUtcStr`, `sleep` |
| `src/providers/types.ts` | `LlmProvider` interface, `ProviderName` type, `VALID_PROVIDER_NAMES` |
| `src/providers/openai-compatible.ts` | `OpenAICompatibleProvider` — shared base class for OpenAI-compatible providers |
| `src/providers/anthropic.ts` | `AnthropicProvider` — Anthropic SDK wrapper |
| `src/providers/openai.ts` | `OpenAIProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/github-copilot.ts` | `GitHubCopilotProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/openrouter.ts` | `OpenRouterProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/deepseek.ts` | `DeepSeekProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/index.ts` | `createProvider` factory + barrel re-exports |
| `src/web.ts` | Sitemap-based web content fetching; state persisted to `digests/web-state.json` |
| `src/trending.ts` | GitHub Trending HTML scraper + Search API topic queries |
| `src/link-utils.ts` | Canonical URL/title normalization and streaming duplicate rejection |
| `src/hn.ts` | Scans Hacker News Firebase Top Stories in rank order for up to 30 unique AI links |
| `src/radar.ts` | Deterministic scoring, editorial validation, fallback, stable ranking, and Top 5 selection |
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
| `ai-hn.md` | `hn` | Skipped if the HN Top Stories fetch yields no data |
| `ai-radar.md` | `radar` | Up to 30 unique HN candidates and Top 5 recommendations; skipped only when there are no candidates |

## Tracked sources

- **CLI_REPOS** (10): claude-code, codex, gemini-cli, copilot-cli, kimi-cli, opencode, pi, qwen-code, deepseek-tui, grok-build
- **OPENCLAW** + **OPENCLAW_PEERS** (13): openclaw/openclaw + 12 peer projects (sorted by stars)
- **INFRA_REPOS** (6): vllm, sglang, llama-cpp, ollama, litellm, unsloth — inference engines, gateway and fine-tuning layer
- **CLAUDE_SKILLS_REPO**: anthropics/skills — no date filter, sorted by popularity
- **Web**: anthropic.com + openai.com via sitemap, state in `digests/web-state.json`
- **Trending**: github.com/trending (HTML) + GitHub Search API (6 AI topics, 7-day window)
- **HN**: Firebase Top Stories — scanned in HN rank order until up to 30 canonical URL/title-unique AI links are accepted

## Key conventions

- All bilingual strings (titles, labels, footers, messages) are centralized in `src/i18n.ts`. Use the `Lang` type (`"zh" | "en"`) and `Record<Lang, string>` maps. Do not add inline bilingual ternaries elsewhere.
- LLM prompt builders are split across two files: `src/prompts.ts` (repo-level prompts) and `src/prompts-data.ts` (data-source prompts). Each report type has its own builder function.
- Weekly and monthly rollups were removed in July 2026. `ai-weekly`/`ai-monthly` remain in `REPORT_LABELS` (`src/i18n.ts`) and `REPORT_FILES` (`src/generate-manifest.ts`) only so archived reports stay reachable — do not add generation code back.
- `callLlm(prompt, maxTokens?)` defaults to 4096 tokens. Web report uses 8192; listing reports and the single Radar editorial request use `LLM_TOKENS_LISTING` = 6144.
- Data-source listing reports render item lists as **Markdown tables**. Radar renders every sorted unique candidate exactly once in its table and a maximum of five unique recommendations in its Top 5 section.
- Radar ranking is stable: total score descending, original HN rank ascending, then candidate ID ascending. Invalid or unavailable editorial output uses the deterministic base-score fallback rather than suppressing the reports.
- On 429 rate-limit errors `callLlm` retries up to 3 times with exponential backoff (5 s / 10 s / 20 s); the concurrency slot is released during the wait.
- The concurrency limiter (`LLM_CONCURRENCY = 5`) prevents 429s when many parallel LLM calls fire. Do not bypass it by calling SDK clients directly.
- LLM provider is selected via `LLM_PROVIDER` env var (default: `anthropic`). Valid values: `anthropic`, `openai`, `github-copilot`, `openrouter`, `deepseek`.
- Provider implementations live in `src/providers/`. Each file implements the `LlmProvider` interface. The factory in `src/providers/index.ts` validates the provider name and logs only the provider name — never API keys or endpoint URLs.
- GitHub issue label colors are defined in `LABEL_COLORS` in `src/github.ts`. Add new labels there.
- `sampleNote(total, sampled)` in `src/prompts.ts` formats the "(共 N 条，展示前 M 条)" note. Reuse it — do not inline the same string format.
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
9. Update `README.md` and the contributor instruction docs required by the task. Do not create `README.zh-CN.md`.
