# AI CLI Tools Community Digest 2026-05-04

> Generated: 2026-05-04 00:19 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Report — 2026-05-04

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured beyond simple code completion into full agent orchestration platforms, with all major tools now supporting MCP (Model Context Protocol) as a de facto extension standard. Session durability, context management at scale, and multi-agent workflows dominate engineering priorities across the board. Subscription authentication and billing reliability have emerged as unexpected operational risks, with multiple tools experiencing paying customer lockouts. The field is bifurcating between cloud-tethered premium experiences (Claude Code, Codex) and increasingly capable open/local alternatives (OpenCode, Qwen Code, Pi) that prioritize provider flexibility and self-hosting.

---

## 2. Activity Comparison

| Tool | Issues Active (24h) | PRs Active (24h) | Release Status | Notable Velocity Signal |
|------|---------------------|------------------|----------------|------------------------|
| **Claude Code** | 50 | 5 | None | Low PR velocity; maintenance mode or pre-release consolidation |
| **OpenAI Codex** | 50 | 39 | None | Very high PR velocity; "Frodex" initiative driving architectural push |
| **Gemini CLI** | 50 | 13 | None | Balanced; Windows stabilization PRs indicate platform hardening |
| **GitHub Copilot CLI** | ~15 | 0 | None | Stagnant; zero PR activity, config regressions unaddressed |
| **Kimi Code CLI** | 9 | 1 | None | Emerging; focused skill-system and hook extensibility work |
| **OpenCode** | ~25 | 10 | None | Steady; native LLM core refactor signals architectural ambition |
| **Pi** | ~15 | 8 | None | Post-refactor stabilization; issue closure wave suggests internal reset |
| **Qwen Code** | 14 | 46 | **v0.15.6-nightly** | Highest PR velocity; nightly releases, rapid iteration cycle |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Session Durability & Recovery** | Claude Code, OpenCode, Pi, Qwen Code | Server-side persistence (Claude #26452), print-mode exit fixes (Pi #4103), cache invalidation for long sessions (Qwen #3810), sub-agent hang prevention (OpenCode #25187) |
| **MCP Ecosystem Maturity** | Claude Code, Gemini CLI, GitHub Copilot CLI, Kimi CLI | Tool registration reliability (Gemini #26417), config loading stability (Copilot #3083), image content handling (Claude #31208), recursive skill discovery (Kimi #1894) |
| **Context/Compaction Management** | Claude Code, OpenAI Codex, OpenCode, Qwen Code | Cache read token optimization (Claude #24147), GPT-5.5 compaction behavior (OpenCode #25202), auto-compaction controls (OpenCode), background task hints (Qwen #3809) |
| **Model Provider Flexibility** | OpenCode, Pi, Qwen Code, Kimi CLI, Copilot CLI | Auto-discovery for OpenAI-compatible endpoints (Qwen #3797/#3799), provider exclusion lists (Pi #4130), DeepSeek integration (Copilot #2995), Featherless AI (OpenCode #25549) |
| **Automation & Hook Extensibility** | Kimi CLI, OpenAI Codex, Claude Code | Programmatic auto-approval (Kimi #2154), global hooks (Copilot #1354), watchdog runtimes (Codex #20910), hook auto-review (Codex #20837) |
| **Cross-Project Configuration Reuse** | Kimi CLI, Claude Code, Pi | Global `AGENTS.md` (Kimi #2152), `--profile` isolation (Pi #3966), project vs. global memory routing (Gemini #22819) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Approach & Target User |
|-----------|---------|------------------------|
| **Cloud-Native Agent Orchestration** | OpenAI Codex | "Frodex" forked runtime architecture with prompt cache preservation across subagents; targets enterprise teams running complex multi-agent topologies with GPT-5.5 |
| **Terminal-Native UX Polish** | Claude Code | Vim mode, Cowork collaboration, tight Anthropic model integration; targets individual developers prioritizing flow-state coding sessions |
| **Windows-First Reliability** | Gemini CLI | Intensive PowerShell/Windows stabilization (3+ active PRs); targets Microsoft-ecosystem enterprise developers historically underserved by Unix-centric tools |
| **Open-Source Provider Agnosticism** | OpenCode, Pi, Qwen Code | Native LLM core refactor (OpenCode #24712), 50+ provider endpoints (Pi #4116), daemon mode for IDE integration (Qwen #3803); targets privacy-conscious and cost-optimized users |
| **Skill/Agent Ecosystem Standardization** | Kimi CLI, OpenAI Codex | Recursive skill directories (Kimi #2146), AGENTS.md composability (Codex #6038); targets framework builders and multi-project maintainers |
| **GitHub-Native Integration** | GitHub Copilot CLI | ACP protocol, `/remote` pairing, SKILL.md frontmatter; targets teams already embedded in GitHub Copilot ecosystem, though currently lagging in velocity |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **Rapid Iteration** | Qwen Code, OpenAI Codex | Qwen: 46 PRs, nightly releases, maintainer-authored RFCs; Codex: 39 PRs, coordinated "Frodex" feature wave with 6 related PRs |
| **Active Maintenance** | Gemini CLI, OpenCode, Pi | Gemini: 13 PRs with P1 Windows fixes; OpenCode: 10 PRs, thdxr actively moderating memory megathread; Pi: 8 PRs post-big-refactor stabilization |
| **Concerning Stagnation** | GitHub Copilot CLI, Claude Code | Copilot: 0 PRs, unaddressed v1.0.40 regression; Claude: 5 PRs, critical session-loss bug (#26452) with community building stopgaps rather than official fixes |
| **Emerging Growth** | Kimi CLI | 9 issues/24h on v1.41.0 Windows release, focused skill-system work; small but engaged community |

**Maturity Signals:** Qwen Code demonstrates production-operational discipline (telemetry hardening, bounded timeouts, doctor commands). OpenAI Codex shows architectural ambition with structured service tiers and deterministic replay. Claude Code's low PR velocity despite critical bugs suggests either resource reallocation or pre-major-release code freeze.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Agent runtime forking is becoming first-class** | Codex "Frodex" (#20909-20915), Qwen background tasks (#3634 Phase D), Kimi concurrency limits (#2157) | Multi-agent workflows moving from experimental to production; developers should design for fork-aware context management |
| **MCP is the new plugin standard, but plumbing lags** | Tool registration failures (Gemini #26417), config loading regressions (Copilot #3083), image content mishandling (Claude #31208) | Invest in MCP server quality; expect 6-12 months of integration roughness |
| **Context window economics are forcing architectural innovation** | Cache read token scaling bugs (Claude #24147), union-find compaction (Gemini #24736), GPT-5.5 compaction divergence (OpenCode #25202) | Long-session reliability requires explicit compaction strategy; monitor token economics |
| **Authentication/billing as operational risk** | Max→Free plan bugs (Claude #31012/#54588), phone verification lockouts (Codex #20161), free tier phase-out debates (Qwen #3203) | Build graceful degradation for auth failures; avoid hard dependencies on single-tool subscriptions |
| **Local/self-hosted path is accelerating** | LM Studio JIT fixes (Qwen #3802), vLLM tool calling (OpenCode #7185), 50+ NIM endpoints (Pi #4116), daemon mode proposals (Qwen #3803) | Enterprise and privacy-sensitive developers should evaluate hybrid cloud/local architectures |
| **Structured output and AST-aware tooling replacing line-range heuristics** | Gemini AST exploration (#22745), OpenCode tool_use/tool_result mismatch fixes (#16751) | Expect parser-aware file operations to become baseline; line-range edits increasingly seen as technical debt |

---

*Report compiled from 8 tool community digests covering 2026-05-03/04 GitHub activity.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-04 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | Universal applicability—"affects every document Claude generates"; debate on whether this should be core behavior vs. opt-in skill |
| 2 | **PDF Skill Fix** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 Open | Corrects 8 case-sensitive file reference mismatches (`REFERENCE.md` → `reference.md`) breaking Linux/WSL workflows | Cross-platform compatibility; maintenance burden of case-insensitive filesystem assumptions |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Claude Skills across 5 dimensions (structure, security, performance, UX, maintainability) | Meta-cognitive tooling; demand for automated skill validation in marketplace |
| 4 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised skill improving clarity, actionability, and single-conversation executability of design instructions | Token efficiency vs. comprehensiveness tradeoff; "every instruction must be followable" |
| 5 | **ODT Skill** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT→HTML conversion for LibreOffice/ISO-standard workflows | Open-source document standards vs. proprietary formats (DOCX/PPTX); enterprise compliance use cases |
| 6 | **Skill-Creator YAML Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse detection of unquoted `description` fields with YAML special characters (`:`) | Silent failure modes in skill authoring; developer experience improvements |
| 7 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Prevents document corruption by resolving `w:id` collisions between tracked changes and existing bookmarks | Deep OOXML expertise; shared ID space complexity in Word documents |
| 8 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, MSW, Playwright | Shift-left testing culture; "what NOT to test" as important as what to test |

---

## 2. Community Demand Trends

Derived from highest-comment Issues, ranked by engagement:

| Trend | Representative Issue | Demand Signal |
|:---|:---|:---|
| **Enterprise Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 7 👍) | Org-wide skill libraries replacing Slack/Teams file sharing; SSO-integrated permission models |
| **Skill Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 6 👍) | `claude -p` 0% trigger rate indicates critical gap between skill definition and runtime invocation |
| **Trust Boundary / Security** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍) | Community skills impersonating `anthropic/` namespace; demand for cryptographic provenance |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Skills-as-MCPs would standardize API contracts; `algorithmic-art` → `generateAlgorithmArt({...})` |
| **Bedrock / AWS Compatibility** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | Multi-cloud deployment; skills not portable across Anthropic hosting options |
| **Plugin Deduplication** | [#189](https://github.com/anthropics/skills/issues/189) (5 comments, 7 👍) | `document-skills` vs `example-skills` identity crisis; marketplace taxonomy needs overhaul |

**Emerging thematic clusters:**
- **Document engineering** (typography, ODT, DOCX fixes, PDF corrections) — production document quality
- **Developer experience** (YAML validation, skill-creator improvements, testing patterns) — skill authoring ergonomics
- **Enterprise governance** (org sharing, trust boundaries, SSO, deletion APIs) — operational maturity

---

## 3. High-Potential Pending Skills

Active PRs with maintainer attention or community momentum, not yet merged:

| Skill | PR | Author | Why It May Land Soon |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | [PGTBoos](https://github.com/PGTBoos) | Addresses universal pain point; zero thumbs suggests uncontroversial utility; "affects every document" |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | [4444J99](https://github.com/4444J99) | Fills major gap in skill collection; comprehensive scope (unit → E2E); Testing Trophy model aligns with industry best practice |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | [Vanka07](https://github.com/Vanka07) | Broad enterprise ITSM coverage; ITOM/ITAM/SecOps/FSM/SPM/CSDM/IntegrationHub; addresses Fortune 500 workflow |
| **Sensory (macOS AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | [AdelElo13](https://github.com/AdelElo13) | Native automation alternative to screenshot-based computer use; two-tier permission model shows security awareness |
| **HADS (Human-AI Document Standard)** | [#616](https://github.com/anthropics/skills/pull/616) | [catcam](https://github.com/catcam) | Solves "docs for AI vs. docs for humans" divergence; lightweight Markdown convention; upstream standard at [catcam/hads](https://github.com/catcam/hads) |
| **Claude-Obsidian-Reporter** | [#664](https://github.com/anthropics/skills/pull/664) | [sinaayyy](https://github.com/sinaayyy) | Developer workflow integration; Git → structured daily/weekly/monthly reports; PKM (Personal Knowledge Management) market |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade document engineering and enterprise operational governance—skills that transform Claude from a conversational assistant into a reliable, auditable, and interoperable component of business-critical workflows.**

---

*Report methodology: PRs ranked by comment volume as proxy for maintainer/community attention; Issues analyzed for thematic clustering. All GitHub links verified against `anthropics/skills` repository.*

---

# Claude Code Community Digest — 2026-05-04

## Today's Highlights

Session persistence and subscription recognition dominate community attention, with a critical bug causing session loss on logout/restart gathering 41 comments and urgent user demand for recovery options. Meanwhile, multiple Max 20x subscribers report their plans showing as Free, blocking Claude Code access entirely. On the engineering front, MCP tooling continues to mature with community PRs addressing plugin data persistence and update-checker reliability.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#26452](https://github.com/anthropics/claude-code/issues/26452) | **Session Disappeared After Logout/Restart** — Desktop sessions vanish without recovery path | Production-blocking data loss; users lose hours of context mid-task | 🔥 41 comments, 21 👍; urgent tone ("HOW to restore ASAP???") |
| [#31012](https://github.com/anthropics/claude-code/issues/31012) | **Max 20x subscription not recognized, shows Free Plan** | Paying customers locked out of Claude Code entirely | 25 comments, 6 👍; marked `invalid` but persists as pattern |
| [#9444](https://github.com/anthropics/claude-code/issues/9444) | **Plugin Dependencies and Shared Resources** | Ecosystem scalability — plugins currently siloed, duplicating effort | 17 comments, 46 👍; high-engagement long-running enhancement |
| [#29026](https://github.com/anthropics/claude-code/issues/29026) | **Desktop ignores `settings.json` permissions** — `bypassPermissions` has no effect | Breaks headless/automated workflows on macOS; config system untrusted | 16 comments, 25 👍; **closed** — resolution status unclear |
| [#24147](https://github.com/anthropics/claude-code/issues/24147) | **Cache read tokens consume 99.93% of quota** — CLAUDE.md re-reads scale linearly | Architectural cost bug: larger projects → exponentially worse economics | 13 comments, 13 👍; fundamental scaling concern |
| [#31208](https://github.com/anthropics/claude-code/issues/31208) | **MCP ImageContent returned as text** — 10-20x token waste | Severe efficiency regression for image-capable MCP servers | 10 comments, 4 👍; **closed** as stale — fix unverified |
| [#55879](https://github.com/anthropics/claude-code/issues/55879) | **Desktop blank screen + Cowork unusable + sandbox errors** — 9-day outage | Triple failure mode for Windows Max subscriber | 7 comments, 1 👍; marked duplicate, user still stranded |
| [#54588](https://github.com/anthropics/claude-code/issues/54588) | **Max subscription → Free plan (auth bug)** | Duplicate pattern of #31012, suggests systemic billing/auth issue | 6 comments, 1 👍 |
| [#53227](https://github.com/anthropics/claude-code/issues/53227) | **Double-Esc freezes TUI in resumed sessions** | Hard lock requiring process kill — regression in session restore | 4 comments; reproducible on macOS |
| [#51398](https://github.com/anthropics/claude-code/issues/51398) | **Cowork: `${CLAUDE_PLUGIN_DATA}` not persistent** | MCP plugins lose tokens every new conversation — breaks auth flows | 3 comments, 4 👍; documentation vs. implementation mismatch |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#55857](https://github.com/anthropics/claude-code/pull/55857) | **docs: warn against `npm update -g`** | Documents npm bug that wipes global `node_modules` during upgrade — prevents environment destruction | 🟡 Open |
| [#55864](https://github.com/anthropics/claude-code/pull/55864) | **feat: session-persist plugin** | Client-side stopgap for session loss; preserves working context across window closes — addresses #55860 | 🟡 Open |
| [#55832](https://github.com/anthropics/claude-code/pull/55832) | **Fix stray content in plugin-validator.md** | Removes accidental agent dialogue from docs — quality cleanup | 🟡 Open |
| [#55834](https://github.com/anthropics/claude-code/pull/55834) | **fix: false-positive update banner + update-checker plugin** | Resolves #18047 — Homebrew/WinGet users incorrectly nagged about npm-only updates | 🟡 Open |
| [#46024](https://github.com/anthropics/claude-code/pull/46024) | **docs: `--exclude-dynamic-system-prompt-sections`** | Documents print-mode cache optimization flag — merged | ✅ Closed |

*Only 5 PRs active in last 24h; remaining 5 slots not applicable.*

---

## Feature Request Trends

**1. Session Durability & Recovery**
The #1 theme across issues and PRs. Users need: server-side session persistence (independent of window lifecycle), graceful recovery from crashes/logouts, and clear session lifecycle documentation. Community building client-side stopgaps (#55864) while awaiting architectural fix.

**2. MCP Ecosystem Maturity**
Strong demand for: plugin dependency resolution (#9444), proper ImageContent handling (#31208), structuredContent/text dual-presentation (#55677, #54450), and persistent plugin storage (#51398). MCP is crossing from demo to production use, revealing gaps.

**3. Subscription/Billing System Reliability**
Multiple independent reports of Max→Free plan degradation (#31012, #54588, #55879) suggest auth pipeline instability at scale.

**4. Cost Transparency & Control**
Requests for: quota tracking UI (#38826), cache read token optimization (#24147), and configurable context compaction (#40665).

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Session fragility** | Critical | #26452, #55864, #40609, #53227 — sessions lost on logout, `--print` exit, resume, or Esc-press |
| **Subscription auth failures** | High | #31012, #54588, #55879 — paying users locked out, "Free plan" false negatives |
| **Permission system inconsistency** | High | #29026, #38914 — `settings.json` ignored in Desktop, worktrees, or specific contexts |
| **MCP token waste & data loss** | Moderate-High | #31208, #51398, #55677 — image→text expansion, plugin data ephemeral, content dropped |
| **Update mechanism confusion** | Moderate | #55834, #55857 — npm vs. Homebrew/WinGet detection broken; `npm update -g` dangerous |
| **Hooks context injection broken** | Emerging | #55889, #55900 — PreToolUse/PostToolUse channels dropped, termination on `{"ok": false}` |

---

*Digest compiled from 50 issues and 5 PRs updated 2026-05-03/04. Data source: [anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-04

---

## 1. Today's Highlights

No new releases dropped in the last 24 hours, but development activity remains intense with **39 pull requests** in motion and **50 issues** seeing updates. The standout theme is OpenAI's internal "Frodex" initiative—six related PRs landed simultaneously, pointing to a major architectural push around forked agent runtimes, watchdog processes, and prompt cache optimization. Meanwhile, auth and phone-verification bugs continue generating significant community friction, with the top issue hitting 45 comments.

---

## 2. Releases

**None** — No releases published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **#20161** | [Codex need phone number](https://github.com/openai/codex/issues/20161) | SSO login flow suddenly demands phone verification, breaking users who never configured one. Affects account portability across devices. | **45 comments, 38 👍** — highest engagement; users reporting complete lockout from paid accounts |
| **#11023** | [Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) | Mac thermal issues (linked #10432) pushing users to Linux desktops; no native app exists. | **44 comments, 104 👍** — long-running request with sustained demand |
| **#14919** | [bwrap: Failed RTM_NEWADDR](https://github.com/openai/codex/issues/14919) | **CLOSED** — Linux sandbox regression in 0.115.0 broke subagent execution; now resolved. | **40 comments, 42 👍** — confirmed regression, fix validated by community |
| **#12161** | [Codex IDE keeps getting stuck on "Thinking"](https://github.com/openai/codex/issues/12161) | Windows-specific IDE extension freeze across VS Code, Cursor, and Windsurf. | **27 comments, 16 👍** — cross-IDE impact suggests platform-level issue |
| **#18960** | [Frequent reconnect loop in Codex App](https://github.com/openai/codex/issues/18960) | WebSocket streaming failures cutting off GPT-5.5 sessions mid-response. | **16 comments, 13 👍** — Pro users reporting productivity impact |
| **#20501** | [Alt+Enter no longer inserts newline in VS Code WSL terminal](https://github.com/openai/codex/issues/20501) | **CLOSED** — TUI regression in 0.128.0 broke multi-line input for WSL users. | **14 comments, 7 👍** — quick fix appreciated by Windows devs |
| **#19558** | [GPT-5.5 remote compaction fails and leaves thread unusable](https://github.com/openai/codex/issues/19558) | Context management bug corrupts active threads, forcing work loss. | **12 comments, 8 👍** — critical for long-running sessions |
| **#20552** | [Toggle File Tree does not reliably reveal file tree](https://github.com/openai/codex/issues/20552) | UI state bug in macOS app breaking navigation workflow. | **11 comments, 1 👍** — quality-of-life regression |
| **#9184** | [vi editing mode](https://github.com/openai/codex/issues/9184) | Feature parity request vs. Claude Code's vim mode; current workaround (external editor) disrupts context visibility. | **8 comments, 40 👍** — strong demand from terminal-native users |
| **#20351** | [Phone number formatting bug for +251](https://github.com/openai/codex/issues/20351) | Ethiopian country code gets mangled with extra zero, blocking verification code delivery. | **8 comments, 0 👍** — completely blocks auth for affected region |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| **#20910** | [frodex: add watchdog runtime handles](https://github.com/openai/codex/pull/20910) | Singleton `"agent_type":"watchdog"` role with idle timers, helper forks, and parent wakeups | Core infrastructure for self-healing agent processes |
| **#20909** | [frodex: preserve fork prompt cache state](https://github.com/openai/codex/pull/20909) | Carries parent prompt cache keys, response IDs, and MCP snapshots into forked agents | **Major latency win** — avoids cold-start penalties on agent forks |
| **#20915** | [frodex: pin rollout references by segment](https://github.com/openai/codex/pull/20915) | Introduces `SegmentId` for precise rollout JSONL resolution, separate from `ThreadId` | Enables deterministic replay and debugging of distributed sessions |
| **#20914** | [frodex: restore fork command and debug hooks](https://github.com/openai/codex/pull/20914) | Restores `/fork` TUI command with tmux/zellij pane placement; adds `CODEX_MATERIALIZE_EPHEMERAL_ROLLOUTS` | Power-user tooling for session introspection |
| **#20913** | [frodex: restore TUI subagent surface](https://github.com/openai/codex/pull/20913) | Live subagent panel, watchdog status rendering, `/agent` filtering | Real-time visibility into complex multi-agent topologies |
| **#20891** | [Enforce Windows protected metadata targets](https://github.com/openai/codex/pull/20891) | ACL enforcement for sandbox metadata; prevents sandbox escape via file creation | Security hardening for Windows deployments |
| **#20892** | [feat(tui): add PR summary statusline items](https://github.com/openai/codex/pull/20892) | Opt-in `pull-request-number` and `pull-request-title` footer items | Bridges CLI ↔ GitHub workflow gap |
| **#20750** | [Unify skip-review handling for approval_mode = "approve"](https://github.com/openai/codex/pull/20750) | Eliminates mode-specific split in MCP auto-approval; `approve` consistently bypasses review | Reduces friction for trusted-tool configurations |
| **#20822** | [Use structured service tiers across core and app-server](https://github.com/openai/codex/pull/20822) | `ModelServiceTier` metadata propagation through presets, configs, and SDK types | Foundation for tiered pricing/performance exposure |
| **#20837** | [Add hook auto review](https://github.com/openai/codex/pull/20837) | Auto-routes newly loaded hooks through reviewer without manual trust step | Closes security gap in startup hook loading |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Linux desktop app** | #11023 (104 👍), #19305 (Windows Computer Use) | High — multi-year demand, thermal issues on Mac accelerating urgency |
| **Vim/terminal-native UX** | #9184 (vi mode, 40 👍), #8673 (Shift+Enter newline, 4 👍) | Moderate — parity with Claude Code expected |
| **AGENTS.md composability** | #6038 (`@file` includes, 20 👍) | Moderate — standardizing large-context workflows |
| **Windows feature parity** | #19305 (Computer Use), #16502 (crash on launch), #20845 (MCP noise) | Rising — Windows treated as second-class by some tooling |
| **Subagent/orchestration control** | #16996 (spawn policy conflicts), #20908 (thread limit recovery) | Emerging — power users hitting scaling boundaries |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Auth/identity fragility** | Phone verification demands (#20161), formatting bugs (#20351), CLI API key failures (#20871), SSO cross-device breakage | **Critical** — multiple vectors, high comment volume, paid users locked out |
| **Context/thread corruption** | GPT-5.5 compaction failures (#19558), context window exhaustion (#18052), TUI state desync (#19984, #20601) | High — undermines trust in long sessions |
| **Sandbox/platform regressions** | bwrap breakage (#14919), Windows metadata enforcement gaps (#20891), automation sandbox fallback (#15310) | Moderate-High — security vs. usability tension |
| **Rate limit opacity** | Arbitrary resets (#16423), quota inconsistency (#17764) | Moderate — breaks user planning workflows |
| **Connectivity/reliability** | WebSocket reconnect loops (#18960), "Failed to create follow-up" (#20902), MCP timeouts (#20177) | Moderate — infrastructure scaling stress visible |

---

*Digest compiled from openai/codex GitHub activity 2026-05-03 to 2026-05-04.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-04

## Today's Highlights
No new releases dropped in the last 24h, but community activity surged with 50 updated issues and 13 active PRs. The maintainers are heavily focused on agent reliability (subagent recovery, behavioral evaluations, AST-aware tooling) while contributors delivered critical Windows fixes and UX polish. A notable emerging theme: MCP integration friction, with users reporting servers appear "connected" but tools don't register in agent sessions.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | EPIC expanding behavioral evals from 76 tests across 6 Gemini versions; foundational for agent quality at scale. | 5 comments, maintainer-only, P1 priority |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | Could reduce token waste and misaligned reads by using AST boundaries instead of line ranges; explores `tilth`/`glyph` tooling. | 5 comments, 1 👍, linked to implementation issue |
| [#25884](https://github.com/google-gemini/gemini-cli/issues/25884) | **Bug: Invalid whitespace/newlines in terminal commands** | Breaks copy-paste workflow into Zsh—basic UX friction affecting daily use. | 4 comments, need-triage |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery hides MAX_TURNS interruption** | `codebase_investigator` falsely reports success after hitting turn limits; silently fails on deep analysis tasks. | 4 comments, 2 👍, P1 |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Repeated permission prompts on same file** | "Allow for all future sessions" intermittently ignored; trust/UX degradation. | 3 comments, security area |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution hangs with "Waiting input"** | Simple commands falsely claim they're awaiting input; blocks automation workflows. | 2 comments, 3 👍, core reliability |
| [#26417](https://github.com/google-gemini/gemini-cli/issues/26417) | **MCP enable: connected but no tools registered** | New issue: MCP server `ref-tools-mcp` shows connected yet `gemini mcp enable` fails and tools absent from agent session—integration gap. | 1 comment, fresh (May 3), need-triage |
| [#22441](https://github.com/google-gemini/gemini-cli/issues/22441) | **Raw XML tags leaking into stdout** | `<function_calls>`, `<pre_dispatch_explanation>` visible to users; breaks immersion and parser expectations. | 2 comments |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with > 128 tools** | Hard ceiling on tool count; needs smarter scoping for MCP-heavy or multi-agent setups. | 1 comment, maintainer-only |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory routing: global vs. project** | Architectural decision for persistent memory—impacts cross-project personalization vs. codebase isolation. | 1 comment, 2 👍 |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#26410](https://github.com/google-gemini/gemini-cli/pull/26410) | **fix(cli): use `os.homedir()` for home directory warning** | Corrects false-positive "running in home directory" warnings in subdirectories; `GEMINI_CLI_HOME` env var was incorrectly affecting the check. | Open, P1, help wanted |
| [#26392](https://github.com/google-gemini/gemini-cli/pull/26392) | **fix(windows): Resolve hangs, zombie processes, subagent reliability** | Major Windows stability bundle: fixes startup hangs, zombie processes, and subagent reliability. Fixes #26393. | Open, May 3 |
| [#26404](https://github.com/google-gemini/gemini-cli/pull/26404) | **fix(telemetry): stop buffering when disabled** | Prevents unbounded `telemetryBuffer` growth on disabled telemetry; API/MCP errors captured full conversation history. | Open, area/enterprise |
| [#26407](https://github.com/google-gemini/gemini-cli/pull/26407) | **fix: await IDE client initialization** | Eliminates race condition where `initializeApp` resolved before IDE connection established. | Open, May 3 |
| [#25900](https://github.com/google-gemini/gemini-cli/pull/25900) | **fix(core): prefer `pwsh.exe` over Windows PowerShell 5.1** | Resolves quote-stripping bugs in `run_shell_command` on Windows; addresses long-standing PowerShell compatibility. | Open, P2 |
| [#26401](https://github.com/google-gemini/gemini-cli/pull/26401) | **fix(core): handle `ENAMETOOLONG` in `robustRealpath`** | Prevents crashes from long pasted `@`-tokens; extends existing `ENOENT`/`EISDIR` handling. | Open, May 3 |
| [#26358](https://github.com/google-gemini/gemini-cli/pull/26358) | **feat(cli): exit shell mode with backspace on empty input** | UX polish: backspace exits shell mode intuitively ("erasing" the `!` prompt); indicator text updated. | Open |
| [#26361](https://github.com/google-gemini/gemini-cli/pull/26361) | **fix(core): externalize `https-proxy-agent`** | Fixes `TypeError: HttpsProxyAgent is not a constructor` in bundled builds; unblocks corporate proxy users. | Open, P1 |
| [#25102](https://github.com/google-gemini/gemini-cli/pull/25102) | **fix(core): Configure Windows PowerShell UTF-8 output** | Resolves terminal encoding bugs via explicit UTF-8 stdout/stderr configuration in PowerShell children. | Open, P2, help wanted |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | **feat(core): union-find context compaction for AgentHistoryProvider** | Alternative to binary split compression: semantic clustering preserves context quality at scale. | Open, help wanted |

---

## Feature Request Trends

1. **Agent Self-Improvement & Evaluation** — Heavy investment in behavioral evals (#24353, #23897), subagent recovery (#22323), and prompt tuning for memory writes (#22809). The team is building feedback loops for agent quality.

2. **AST-Aware Tooling** — Multiple issues explore parsing-aware file operations (#22745, #22746) to replace brittle line-range reads with semantic boundaries.

3. **Memory Architecture** — Clear push toward structured persistence: global vs. project routing (#22819), proactive memory writes (#22809), with tracker enablement for team visibility (#23925, #24037).

4. **MCP Ecosystem Maturity** — Integration gaps emerging: tool registration failures (#26417), tool count limits (#24246), and permission caching (#24916) suggest MCP is scaling faster than the plumbing.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Windows as second-class citizen** | Hangs (#26392), PowerShell quote stripping (#25900, #25102), encoding bugs, zombie processes, `A:\` path crashes (#25216) | High — multiple P1/P2 PRs active |
| **Subagent opacity & false success** | MAX_TURNS hidden as GOAL success (#22323), browser agent ignores settings (#22267), session lock failures (#22232) | High — erodes trust in automation |
| **Permission fatigue** | Same-file prompts repeat (#24916), security model unclear | Medium — daily friction |
| **Output sanitization gaps** | XML tags leak (#22441), whitespace breaks commands (#25884), trailing punctuation corrupts URLs (#25098) | Medium — polish gaps |
| **Context/compression quality** | Overcompression reports (#23556), union-find proposed (#24736) | Medium — emerging at scale |
| **Telemetry overhead** | Buffer growth when disabled (#26404) | Low but symptomatic of resource hygiene |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-04

## Today's Highlights

No new releases dropped today, but community activity surged around **MCP configuration regressions** in v1.0.40 and **model routing flexibility** gaps versus competitors like Claude Agent SDK. A notable security concern also emerged regarding PowerShell variable handling in generated scripts.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2995](https://github.com/github/copilot-cli/issues/2995) | **DeepSeek API integration broken** — Provider base URL configuration fails with `openai` provider type | Third-party model support is critical for enterprise users with existing API contracts or cost optimization needs; DeepSeek's pricing pressure makes this a competitive parity issue | 6 👍, 8 comments — active troubleshooting, no maintainer response yet |
| [#2751](https://github.com/github/copilot-cli/issues/2751) | **`/remote` fails on organization repos**: "could not resolve repository" | Blocks enterprise/team workflows where org-owned repos are the norm; breaks remote pairing and code review flows | 12 👍, 6 comments — highest engagement, long-running since April 16 |
| [#1354](https://github.com/github/copilot-cli/issues/1354) | **Model routing, per-agent model selection, global hooks** | Addresses architectural limitation where CLI ignores `agent.md` model fields; global hooks would enable cross-cutting concerns like logging, audit, cost controls | 5 👍, 3 comments — foundational feature request, referenced by other issues |
| [#3083](https://github.com/github/copilot-cli/issues/3083) | **v1.0.40 breaks `./.mcp.json` auto-loading** | Regression from deprecated `.vscode/mcp.json` path; breaks repo-level MCP server configs for teams that migrated per deprecation warning | 0 👍, 1 comment — fresh report, high impact potential for MCP-dependent workflows |
| [#3098](https://github.com/github/copilot-cli/issues/3098) | **PowerShell `$home` variable footgun risks profile deletion** | Security-critical: case-insensitive variable resolution causes `Remove-Item -Recurse -Force $home` to target `$HOME` (user profile) instead of intended scratch path | 0 👍, 0 comments — just filed by [DamianEdwards](https://github.com/DamianEdwards) (Microsoft PM), needs urgent triage |
| [#2369](https://github.com/github/copilot-cli/issues/2369) | **Scrolling broken for long outputs** | Basic terminal UX regression; blocks consumption of summaries, diffs, logs — core functionality | 4 👍, 2 comments — persistent since March 28, no fix in sight |
| [#2979](https://github.com/github/copilot-cli/issues/2979) | **Android app blocks remote use after premium limit despite billing budget** | Billing/limit logic inconsistency creates dead sessions; cross-product bug between CLI and mobile | 0 👍, 2 comments — niche but frustrating for mobile-first users |
| [#3097](https://github.com/github/copilot-cli/issues/3097) | **Paste corruption: extra newlines inserted in long strings** | Breaks cryptographic material, base64, JSON payloads — common in dev workflows | 0 👍, 0 comments — v1.0.40 regression, reproducible with provided test case |
| [#3096](https://github.com/github/copilot-cli/issues/3096) | **ACP agent lacks "Ask"/chat-only mode for Zed** | ACP protocol adoption depends on feature parity with native Copilot Chat; Zed users forced into heavy agent modes | 0 👍, 0 comments — ecosystem expansion blocker |
| [#3095](https://github.com/github/copilot-cli/issues/3095) | **SKILL.md frontmatter needs capability declarations** | Cross-tool standardization with VS Code Copilot Chat; enables declarative tool/MCP/hook/model binding for reusable skills | 0 👍, 0 comments — architectural alignment request |

**Closed today:**
- [#2939](https://github.com/github/copilot-cli/issues/2939) — Subagent model override (feature request, closed without merge)
- [#3092](https://github.com/github/copilot-cli/issues/3092) — `@` file mention CWD resolution (bug, fixed)
- [#3093](https://github.com/github/copilot-cli/issues/3093) — Spam/invalid

---

## Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Model flexibility & routing** | #2995, #1354, #2939, #3095 | Users want provider-agnostic configuration, per-agent model selection, and declarative model binding in SKILL.md — parity with Claude Agent SDK is explicit benchmark |
| **MCP ecosystem hardening** | #3083, #3095 | MCP is becoming the extension standard, but config loading is brittle; need stable discovery, capability declarations, and migration paths |
| **ACP protocol completeness** | #3096 | External editor integration (Zed, others) requires lightweight modes beyond full agent autonomy |
| **Global extensibility hooks** | #1354 | Cross-cutting concerns (cost tracking, audit, custom routing) need injection points |

---

## Developer Pain Points

1. **Configuration fragility** — v1.0.40's MCP regression (#3083) and ongoing provider URL issues (#2995) suggest insufficient test coverage for config loading paths. Teams cannot rely on migration guidance.

2. **Terminal UX debt** — Scrolling (#2369) and paste corruption (#3097) are basic I/O failures that erode trust in the CLI as a primary interface.

3. **Enterprise/org feature gaps** — `/remote` on org repos (#2751) and premium limit handling (#2979) indicate org-tier testing lags individual user scenarios.

4. **Generated script safety** — PowerShell variable shadowing (#3098) reveals need for sandbox-aware code generation or explicit variable scoping in agent outputs.

5. **Cross-tool parity lag** — CLI consistently trails VS Code Copilot Chat features (model overrides, SKILL.md capabilities), fragmenting the Copilot ecosystem for polyglot developers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-04

## 1. Today's Highlights

The community filed **9 new issues in 24 hours**, signaling active engagement with v1.41.0 on Windows. A PR addressing the **nested skill directory incompatibility with Codex** (#1894) gained traction, while developers continue pushing for **programmatic auto-approval hooks** and **global AGENTS.md support** to reduce multi-project friction.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2157](https://github.com/MoonshotAI/kimi-cli/issues/2157) | Configurable background task limit / queued subagents for multi-agent workflows | Hard 4-task concurrency ceiling blocks enterprise multi-agent orchestration. No queueing behavior forces brittle workarounds. | Fresh request, zero engagement yet—likely to attract +1s from agent-framework builders |
| [#2155](https://github.com/MoonshotAI/kimi-cli/issues/2155) | Configurable prompt symbols in config.toml | Emoji prompts (✨💫📋) break terminal search/history recall and render poorly in non-Unicode environments. UX papercut with easy fix surface. | Immediate practical pain, no comments but highly relatable |
| [#2154](https://github.com/MoonshotAI/kimi-cli/issues/2154) | PermissionRequest hook event for programmatic auto-approval | Asymmetric hook design: hooks can block but not approve. Forces manual intervention on safe, repetitive operations—CI/automation blocker. | Pairs with #2157 as infrastructure maturity request |
| [#2153](https://github.com/MoonshotAI/kimi-cli/issues/2153) | Update pillow 12.1.0 → 12.2.0 (CVE-2026-25990) | Security-tight environments already blocking this dependency. Zero-day pipeline risk for enterprise users. | Clean, actionable; likely fast-trackable |
| [#2152](https://github.com/MoonshotAI/kimi-cli/issues/2152) | Global `~/.kimi/AGENTS.md` for multi-project shared conventions | 10+ project maintenance overhead. Current CWD-only loading duplicates config across repos—violates DRY, increases drift. | Strong narrative from repeat contributor; aligns with cross-project tooling trends |
| [#2151](https://github.com/MoonshotAI/kimi-cli/issues/2151) | v1.41.0 Windows: `NoneType` crash on path completion + broken image attachment | Dual regression on Windows terminal path completion and image transmission. Blocks two core workflows on a major platform. | Critical severity, needs repro confirmation |
| [#2040](https://github.com/MoonshotAI/kimi-cli/issues/2040) | VS Code notification when approval required in VS Code Extension | Approval dialogs buried in webview panel cause missed interactions when VS Code minimized. Context-switching friction. | 5 comments, 2-week lifespan—mature discussion, awaiting prioritization |
| [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894) | Recursive nested skill directories (Codex incompatible) | Ecosystem fragmentation: same repo works in Codex, fails in Kimi. Blocks skill library reuse and migration paths. | 3 comments, active; PR #2146 now open |
| [#1493](https://github.com/MoonshotAI/kimi-cli/issues/1493) | CLI animation not rotating—status ambiguity | Closed without comment. Spinner failure breaks fundamental progress indication; closure pattern unclear. | Zero engagement, possible stale-bot or silent fix—worth monitoring for regression |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#2146](https://github.com/MoonshotAI/kimi-cli/pull/2146) | feat(#1894): recursively discover skills in nested subdirectories | Adds `_discover_subdir_skills()` helper; enables `.agents/skills/{name}/skills/xxx/SKILL.md` layouts matching Codex behavior | **Ecosystem parity milestone**—reduces migration friction from OpenAI Codex; unblocks nested skill library patterns |

*Only one PR updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Automation & hook extensibility** | #2154 (auto-approval hooks), #2157 (configurable concurrency) | Move from "human-in-the-loop" default toward programmable, CI-friendly agent orchestration |
| **Cross-project configuration reuse** | #2152 (global AGENTS.md) | Shift from per-repo isolation to developer-centric, portable settings—reducing maintenance burden |
| **Terminal/UX polish** | #2155 (configurable symbols), #2040 (VS Code notifications), #1493 (animation) | Maturity phase: core features exist, now optimizing for accessibility, searchability, and multi-window workflows |
| **Security hardening** | #2153 (Pillow CVE) | Dependency hygiene becoming adoption gate for enterprise environments |

---

## 6. Developer Pain Points

**Windows stability regressions** — v1.41.0 introduced path-completion crashes and image transmission failures (#2151), suggesting insufficient Windows terminal coverage in release QA.

**Asymmetric automation surface** — Hooks can intercept and block but cannot auto-approve (#2154), creating a "half-automated" state that frustrates hands-off workflows. Combined with the hard 4-task subagent ceiling (#2157), multi-agent development feels artificially constrained versus competitor flexibility.

**Configuration sprawl at scale** — No global AGENTS.md (#2152) and no recursive skill discovery (until #2146 merges) force repetitive, error-prone setup across projects. Developers maintaining polyglot or multi-repo environments bear disproportionate overhead.

**Approval visibility gaps** — Whether in VS Code webviews (#2040) or terminal emoji prompts (#2155), the tool's demand for human attention is poorly signaled, leading to stalled sessions and missed interactions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-04

## Today's Highlights

The community is actively tackling core stability issues with two major bug-fix PRs from contributor **altendky** addressing Anthropic API rejections and tool_use/tool_result mismatches that have plagued long-running sessions. Meanwhile, **kitlangton**'s ambitious native LLM core foundation PR (#24712) continues to mature, representing a potential architectural shift toward Effect-based provider management. Memory and context management remain the dominant pain points, with multiple new issues surfacing around GPT-5.5 compaction behavior and sub-agent hangs.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | Central coordination point for memory leak investigations; maintainers explicitly requesting heap snapshots rather than LLM-generated solutions | 73 comments, 44 👍 — highly engaged, with thdxr actively moderating |
| [#20650](https://github.com/anomalyco/opencode/issues/20650) | **Kimi k2.5 tool calling broken** | JSON parsing failures on bash tool calls block a popular model from basic functionality | 46 comments, ongoing model-specific debugging |
| [#768](https://github.com/anomalyco/opencode/issues/768) | **GitHub Copilot premium request tracking** | Cost transparency gap for Copilot users; $0.00 tracker is misleading | 32 comments, 70 👍 — long-standing, high-demand |
| [#6680](https://github.com/anomalyco/opencode/issues/6680) | **View archived sessions on desktop** | Desktop parity gap vs. other session management features | 29 comments, steady feature request |
| [#15035](https://github.com/anomalyco/opencode/issues/15035) | **Agent-teams timeline inquiry** | High-visibility feature (comparable to OpenAI's Codex agents) with no public roadmap | 20 comments, repeated asks |
| [#7185](https://github.com/anomalyco/opencode/issues/7185) | **vLLM local models fail tool calling** | Closed but representative: local/self-hosted deployments hit tool execution gaps | 20 comments, resolved pattern for local model issues |
| [#14808](https://github.com/anomalyco/opencode/issues/14808) | **Plugin `session.created` event not firing** | Breaks plugin ecosystem reliability for memory systems like Engram | 18 comments, 14 👍 — plugin dev blocker |
| [#12570](https://github.com/anomalyco/opencode/issues/12570) | **GPT-5.3-Codex early termination** | Regression from 5.2, subagent behavior inconsistent | 14 comments, version-specific model instability |
| [#25202](https://github.com/anomalyco/opencode/issues/25202) | **GPT-5.5 token count behavior vs. 5.4** | Visible compaction metrics diverge, causing premature hard compaction | 3 comments, new but critical for long sessions |
| [#25187](https://github.com/anomalyco/opencode/issues/25187) | **Sub-agents hang on context overflow** | No auto-compaction for sub-agents = indefinite hangs, parent waits for days | 3 comments, severe production impact |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#24712](https://github.com/anomalyco/opencode/pull/24712) | **Native LLM core foundation** | Effect-based LLM core with typed schemas, provider adapters, recorded tests; gated behind `OPENCODE_EXPERIMENTAL_LLM_NATIVE` | Open, vouched contributor |
| [#16750](https://github.com/anomalyco/opencode/pull/16750) | **Fix empty-text filtering for Anthropic** | Resolves "thinking blocks in last turn" API rejections; closes #16748 and 7 related issues | Open, ready for review |
| [#16751](https://github.com/anomalyco/opencode/pull/16751) | **Fix tool_use/tool_result mismatch root causes** | Reconstruction-time safety net for mismatched tool pairs; closes #16749 and 7 related issues | Open, paired with #16750 |
| [#7119](https://github.com/anomalyco/opencode/pull/7119) | **Dynamic MCP servers in TUI status** | POST-registered MCP servers now visible in `/status`; fixes #7482 | Open, TUI polish |
| [#17083](https://github.com/anomalyco/opencode/pull/17083) | **Flush stdin on POSIX exit** | Prevents stale bytes leaking to parent shell — fixes ghost input bugs | Open, reliability fix |
| [#25649](https://github.com/anomalyco/opencode/pull/25649) | **Increase LSP timeout for JDTLS/KotlinLS** | JVM language servers need 60–180s for Gradle sync; raises from 45s hardcode | Open, replaces #23988 |
| [#25549](https://github.com/anomalyco/opencode/pull/25549) | **Featherless AI provider** | New provider with client-side concurrency gating for 429 prevention | Open, new provider expansion |
| [#25573](https://github.com/anomalyco/opencode/pull/25573) | **CF AI Gateway provider options routing** | Fixes `reasoningEffort` and `variant` being dropped for Cloudflare gateway | Open, provider fix |
| [#25358](https://github.com/anomalyco/opencode/pull/25358) | **Preserve workspace adapter context** | Effect-native internal adapters while keeping plugin boundary Promise-based | Open, vouched, architectural |
| [#20467](https://github.com/anomalyco/opencode/pull/20467) | **Fix blank assistant text with MCP** | AI SDK v6 regression when any MCP is enabled; finish-reason handling | Open, high-impact fix |

---

## Feature Request Trends

1. **Context & Memory Management** — `/compact` command parity with Codex, auto-compaction controls, fork-aware conversation IDs ([#4317](https://github.com/anomalyco/opencode/issues/4317), [#25202](https://github.com/anomalyco/opencode/issues/25202), [#25187](https://github.com/anomalyco/opencode/issues/25187))
2. **Model Provider Flexibility** — Auto-discovery for OpenAI-compatible endpoints, more provider-specific knobs ([#6231](https://github.com/anomalyco/opencode/issues/6231), [#25549](https://github.com/anomalyco/opencode/pull/25549))
3. **Desktop UI Parity** — Archived sessions view, project rename/move with history preservation ([#6680](https://github.com/anomalyco/opencode/issues/6680), [#25625](https://github.com/anomalyco/opencode/issues/25625))
4. **Transparency & Observability** — Sub-agent token usage in TUI, premium request tracking for Copilot ([#22103](https://github.com/anomalyco/opencode/issues/22103), [#768](https://github.com/anomalyco/opencode/issues/768))
5. **Agent Ecosystem** — Agent-teams feature, ACP client support, plugin event reliability ([#15035](https://github.com/anomalyco/opencode/issues/15035), [#5182](https://github.com/anomalyco/opencode/issues/5182), [#14808](https://github.com/anomalyco/opencode/issues/14808))

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Memory leaks & heap growth** | Megathread #20695, multiple scattered reports | 🔴 Critical — thdxr actively collecting snapshots |
| **Context window / compaction edge cases** | GPT-5.5 vs 5.4 divergence, sub-agent hangs, Codex early termination | 🔴 Critical — long session reliability at risk |
| **Stale OAuth hijacking custom endpoints** | #25627, #18862 — residual `auth.json` credentials override explicit API keys | 🟡 High — configuration confusion |
| **Tool calling fragility across models** | Kimi k2.5, k2.6, local vLLM models, raw `<tool_calls>` markup in reasoning | 🟡 High — model-specific JSON parsing failures |
| **TUI rendering on non-standard terminals** | #11582 color corruption, #25224 Windows display issues | 🟡 Moderate — first-run experience damage |
| **Plugin event system reliability** | #14808 `session.created` not firing, #25646 regression test additions | 🟡 Moderate — ecosystem trust |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-04

## Today's Highlights

The Pi team closed a massive wave of weekend issues (many tagged `closed-because-weekend` or `closed-because-bigrefactor`), suggesting a significant internal refactor is underway. Critical stability fixes landed for print-mode hangs, Codex WebSocket fallbacks, and retry logic for transient HTTP errors. The community continues pushing for better provider management, isolated profiles, and improved TUI reliability.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|--------------|
| [#27](https://github.com/badlogic/pi-mono/issues/27) | **Implement Retries** — Vague error messages and missing debug mode for AI package failures | Long-standing developer pain point; 11 comments show sustained demand for observability in AI provider failures. Closed with retry infrastructure now landing in PRs. |
| [#3942](https://github.com/badlogic/pi-mono/issues/3942) | **`pi update --self` fails with npm `--prefix`** | Breaks self-updating for Nix/nodejs users; 8 comments. Exposes fragility in Pi's update mechanism when global paths aren't writable. |
| [#4082](https://github.com/badlogic/pi-mono/issues/4082) | **Xiaomi MiMo Token Plan (China) auth failures** | Regional provider configuration remains broken; 6 comments. Follow-up to #3912, now partially addressed by PR #4112 splitting API billing vs. token plan endpoints. |
| [#4103](https://github.com/badlogic/pi-mono/issues/4103) | **Codex WebSocket transport prevents `--print` mode from exiting** | Core workflow blocker; 4 comments. Print mode should be single-shot but WebSocket session caching keeps process alive. Fixed by PR #4127. |
| [#4105](https://github.com/badlogic/pi-mono/issues/4105) | **TUI crash: `value.startsWith is not a function` in autocomplete** | Type safety gap in TUI; 4 comments. Non-string autocomplete values from providers crash the editor component. |
| [#2994](https://github.com/badlogic/pi-mono/issues/2994) | **`pi.sendUserMessage` doesn't execute commands** | API design inconsistency; 3 comments. Programmatic API bypasses command routing, breaking extension and automation use cases. |
| [#4146](https://github.com/badlogic/pi-mono/issues/4146) | **UI hangs at 100% CPU highlighting large code blocks** | Performance regression; fresh issue. Sampler profiles point to syntax highlighting as bottleneck—critical for large-file workflows. |
| [#4145](https://github.com/badlogic/pi-mono/issues/4145) | **Bash tool: O(n²) rolling buffer rebuild during streaming** | Algorithmic inefficiency; 1 comment. Fast-streaming tools (ripgrep, tsc) trigger quadratic behavior in buffer management. |
| [#4144](https://github.com/badlogic/pi-mono/issues/4144) | **TUI 100% CPU + memory blow-up when terminal disappears** | Production reliability; 1 comment. Missing EIO/SIGHUP guards cause orphan processes consuming 3.2GB+ RSS after ssh/tmux disconnect. |
| [#3966](https://github.com/badlogic/pi-mono/issues/3966) | **Add built-in `--profile` support for isolated Pi state** | Developer experience; 2 comments. Strong community demand for project/personal/local-LLM isolation without manual `PI_CODING_AGENT_DIR` management. |

---

## Key PR Progress

| # | PR | Feature / Fix |
|---|-----|---------------|
| [#4136](https://github.com/badlogic/pi-mono/pull/4136) | **`/model -` toggles to previously used model** | Adds `cd -` semantics to model switching; tracks `_previousModel` on `AgentSession` with autocomplete support |
| [#4133](https://github.com/badlogic/pi-mono/pull/4133) | **Fallback from Codex WebSocket to SSE** | Addresses WebSocket error codes 1000 (remote close) and 1009 (frame too large); improves reliability for large payloads |
| [#4112](https://github.com/badlogic/pi-mono/pull/4112) | **Split Xiaomi MiMo: default API billing + regional token plans** | Follow-up to #4005/#4082; separates billing models with per-region provider entries (CN, SGP, etc.) |
| [#4127](https://github.com/badlogic/pi-mono/pull/4127) | **Disable provider session cache in print mode** | Fixes print-mode process hangs by preventing WebSocket session reuse across single-shot invocations |
| [#4126](https://github.com/badlogic/pi-mono/pull/4126) | **Retry on transient HTTP 404/408** | Expands `_isRetryableError` to cover CDN/edge 404s and 408 timeouts; fixes Cerebras streaming failures |
| [#4117](https://github.com/badlogic/pi-mono/pull/4117) | **Add `stopAfterTurn()` handoff control** | New agent/session API for graceful turn-boundary stops; enables better human-in-the-loop workflows |
| [#4119](https://github.com/badlogic/pi-mono/pull/4119) | **Stabilize env-sensitive test cases** | Hardens test suite against local SSH/MOSH env vars, HOME isolation, and Codex transport defaults |
| [#4116](https://github.com/badlogic/pi-mono/issues/4116) | *(Issue, no PR yet)* **NVIDIA NIM as first-class provider** | Community request for 50+ free OpenAI-compatible endpoints; zero-cost evaluation barrier |

---

## Feature Request Trends

1. **Provider ergonomics**: Simpler `/login` flows, regional endpoint handling, and provider exclusion from model lists (#4130, #4139, #4082, #4116)
2. **Session/model navigation**: Quick toggling between recent models (`/model -`, #4135/#4136) and `/resume` improvements
3. **Isolation primitives**: `--profile` support (#3966), `ignoreGlobalContext` (#4132), and per-repo settings override
4. **Compaction & resource management**: Ratio-based auto-compaction (#4129), better memory handling for long sessions
5. **Bitcoin/crypto payment integration**: `ppq.ai` API key support (#4139) signals niche but vocal demand for alternative billing

---

## Developer Pain Points

| Category | Pattern | Representative Issues |
|----------|---------|----------------------|
| **Process lifecycle** | Print mode and WebSocket sessions fail to exit; orphan processes after terminal disconnect | #4103, #4128, #4134, #4144, #4141 |
| **Provider fragility** | Auth token expiration, regional endpoint misconfiguration, transient HTTP errors | #4082, #4143, #4141, #3942 |
| **TUI stability** | CPU hangs, crashes on autocomplete, paste failures, keybinding conflicts | #4105, #4146, #4142, #4124, #4131 |
| **Performance at scale** | O(n²) streaming buffers, OOM on session scan, large-file highlighting | #4145, #4122, #4146 |
| **State management** | No clean isolation between projects/personas; global context leaks | #3966, #4132, #2994 |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-04

## 1. Today's Highlights

The Qwen Code project shipped **v0.15.6-nightly** with a new `FileReadCache` optimization and proxy support fixes, while the community filed **14 active issues** and **46 PRs** in 24 hours—indicating high velocity but also growing pains around long-running session stability and telemetry reliability. Core maintainer `wenshao` is driving architectural work on background tasks, daemon mode, and file mutation safety, while contributor `B-A-M-N` delivered multiple production-hardening fixes for model routing and error classification.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.15.6-nightly.20260503.5037fa762](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260503.5037fa762)** | • `FileReadCache` with short-circuit for unchanged file reads ([#3717](https://github.com/QwenLM/qwen-code/pull/3717)) — reduces redundant I/O in long sessions<br>• CLI proxy setting now honored ([#3766](https://github.com/QwenLM/qwen-code/pull/3766)) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** — propose cutting free quota 10× (1,000→100/day) and phasing out free tier entirely | **121 comments** make this the most engaged issue in the repo; directly impacts accessibility and adoption for individual developers | 🔥 Highly contentious; no consensus visible |
| [#3805](https://github.com/QwenLM/qwen-code/issues/3805) | `read`/`glob` tools fail to return content or don't reach LLM in long-running sessions | Breaks core agent loop reliability; filed same day as PR [#3810](https://github.com/QwenLM/qwen-code/pull/3810) fix | 2 comments; rapid maintainer response |
| [#3634](https://github.com/QwenLM/qwen-code/issues/3634) | **Background task management roadmap** — Phases A-D for background agents, now at Phase D | Defines long-term architecture for autonomous agent execution; referenced by multiple PRs | 2 comments; treated as design source-of-truth |
| [#3816](https://github.com/QwenLM/qwen-code/issues/3816) | `/memory show` command broken (empty output) | Core UX regression in memory introspection | 1 comment; needs triage |
| [#3806](https://github.com/QwenLM/qwen-code/issues/3806) | UI flickering during output streaming in 0.15.6 (regression from prior "expand-collapse" flicker) | Visual stability degradation in latest release | 1 comment; likely rendering layer bug |
| [#3804](https://github.com/QwenLM/qwen-code/issues/3804) | `AskUserQuestion` triggers `[API Error: Model stream ended with empty response text]` | Breaks interactive clarification flow | 1 comment; API/streaming reliability concern |
| [#3817](https://github.com/QwenLM/qwen-code/issues/3817) | **Race condition in `McpClientManager` spawns duplicate MCP processes** | Resource leak + potential port conflicts; includes root-cause analysis with code pointer | 0 comments; high-quality bug report |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | **Daemon mode (`qwen serve`) proposal** — HTTP server mode for IDE/editor integrations | Strategic enabler for ecosystem expansion; explicitly frames open architectural decisions | 0 comments; maintainer-authored RFC |
| [#3811](https://github.com/QwenLM/qwen-code/issues/3811) / [#3731](https://github.com/QwenLM/qwen-code/issues/3731) | Telemetry hardening: bounded shutdown timeout + `service.version` fix, plus broader OTLP production readiness | Production operability; prevents CLI hangs on exit | 0 comments each; paired with PR [#3813](https://github.com/QwenLM/qwen-code/pull/3813) |
| [#3802](https://github.com/QwenLM/qwen-code/issues/3802) | `/model` switch to LM Studio local model fails with "Model is unloaded" — pre-flight check blocks JIT loading | Local/self-hosted workflow breakage; LM Studio is popular for privacy-conscious users | 0 comments; Windows-specific |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3814](https://github.com/QwenLM/qwen-code/pull/3814) | **Fix: Prevent auto-memory recall from blocking main request** — reduces 5s timeout delay to 1s, moves heuristic fallback off critical path | Fixes [#3759](https://github.com/QwenLM/qwen-code/issues/3759); latency win for every turn | Open |
| [#3815](https://github.com/QwenLM/qwen-code/pull/3815) | **Fix: Use per-model settings for fast model side queries** — stops main model `extra_body`/`samplingParams`/`reasoning` config from leaking into fast model requests | Fixes [#3765](https://github.com/QwenLM/qwen-code/issues/3765); correctness for title generation, session recap | Open |
| [#3813](https://github.com/QwenLM/qwen-code/pull/3813) | **Fix: Bounded telemetry shutdown timeout (10s) + `service.version` attribute** | Production reliability; fail-open on unreachable OTLP endpoints | Open |
| [#3810](https://github.com/QwenLM/qwen-code/pull/3810) | **Fix: Clear `FileReadCache` on every history rewrite path** | Fixes [#3805](https://github.com/QwenLM/qwen-code/issues/3805); cache invalidation for session longevity | Open |
| [#3809](https://github.com/QwenLM/qwen-code/pull/3809) | **Feat: Hint to background long-running foreground bash commands** (≥60s) | Phase D of [#3634](https://github.com/QwenLM/qwen-code/issues/3634); nudges users toward background tasks | Open |
| [#3799](https://github.com/QwenLM/qwen-code/pull/3799) | **Feat: Normalize model list response parsing across OpenAI-compatible endpoints** | Handles `data[]`, `object:"list"`, bare array, and nested `models[]` shapes | Open |
| [#3797](https://github.com/QwenLM/qwen-code/pull/3797) | **Feat: `/model list` subcommand for dynamic model discovery** | Scriptable model enumeration; pairs with [#3799](https://github.com/QwenLM/qwen-code/pull/3799) | Open |
| [#3774](https://github.com/QwenLM/qwen-code/pull/3774) | **Feat: Enforce prior read before Edit/WriteFile mutates a file** | Safety guard using `FileReadCache`; prevents blind overwrites | Open |
| [#3798](https://github.com/QwenLM/qwen-code/pull/3798) | **Feat: Classify retryable transport failures vs deterministic errors** | Smart retry: 400/401/403/404/422 never retried; 429/5xx/network errors retried | Open |
| [#3785](https://github.com/QwenLM/qwen-code/pull/3785) | **Feat: `/doctor memory` diagnostics command** | Runtime memory snapshot for debugging and benchmarking | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Daemon/Server Mode** | [#3803](https://github.com/QwenLM/qwen-code/issues/3803) `qwen serve`, [#3634](https://github.com/QwenLM/qwen-code/issues/3634) background tasks | High — explicit roadmap, architectural RFC |
| **Local Model Ergonomics** | [#3802](https://github.com/QwenLM/qwen-code/issues/3802) LM Studio JIT loading, [#3797](https://github.com/QwenLM/qwen-code/pull/3797)/[#3799](https://github.com/QwenLM/qwen-code/pull/3799) model discovery | Medium — multiple PRs in flight |
| **Memory System Transparency** | [#3816](https://github.com/QwenLM/qwen-code/issues/3816) `/memory show` broken, [#3785](https://github.com/QwenLM/qwen-code/pull/3785) memory doctor, [#3814](https://github.com/QwenLM/qwen-code/pull/3814) recall latency | Medium — debugging and introspection tooling |
| **Telemetry/Production Ops** | [#3811](https://github.com/QwenLM/qwen-code/issues/3811)/[#3731](https://github.com/QwenLM/qwen-code/issues/3731)/[#3813](https://github.com/QwenLM/qwen-code/pull/3813) OTLP hardening | Medium — enterprise readiness push |
| **VS Code Extension Polish** | [#3762](https://github.com/QwenLM/qwen-code/pull/3762) message edit/rewind/metadata UI | Low — single PR, but significant UX gap |
| **WeChat/Image Channels** | [#3781](https://github.com/QwenLM/qwen-code/pull/3781) CDN image upload | Niche — China-specific integration |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Session longevity bugs** | [#3805](https://github.com/QwenLM/qwen-code/issues/3805) read/glob failures, [#3806](https://github.com/QwenLM/qwen-code/issues/3806) UI flicker, [#3804](https://github.com/QwenLM/qwen-code/issues/3804) stream empty responses | 🔴 **High** — multiple regressions in 0.15.6; core loop stability at risk |
| **Configuration leakage between models** | [#3815](https://github.com/QwenLM/qwen-code/pull/3815) fast model inheriting main model settings | 🔴 **High** — silent correctness bug |
| **CLI exit hangs / telemetry blocking** | [#3811](https://github.com/QwenLM/qwen-code/issues/3811)/[#3813](https://github.com/QwenLM/qwen-code/pull/3813) unbounded `sdk.shutdown()` | 🟡 **Medium** — affects CI/automation workflows |
| **Local model integration friction** | [#3802](https://github.com/QwenLM/qwen-code/issues/3802) LM Studio pre-flight check, missing `/model list` | 🟡 **Medium** — self-hosted path not first-class |
| **Pricing/access uncertainty** | [#3203](https://github.com/QwenLM/qwen-code/issues/3203) free tier phase-out, [#3307](https://github.com/QwenLM/qwen-code/issues/3307) Alibaba Cloud stock issues | 🟡 **Medium** — business model risk for community trust |
| **MCP process management** | [#3817](https://github.com/QwenLM/qwen-code/issues/3817) race condition spawning duplicates | 🟡 **Medium** — resource leak, needs hardening |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*