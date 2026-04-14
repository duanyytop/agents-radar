# AI CLI Tools Community Digest 2026-04-14

> Generated: 2026-04-14 00:16 UTC | Tools covered: 8

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

# AI CLI Tools Cross-Tool Comparison Report — 2026-04-14

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is experiencing intense, parallel evolution across seven major players, with daily release velocity and high issue tracker activity becoming the norm. All tools are grappling with the same maturation challenges: runaway token billing, context compaction reliability, Windows parity gaps, and MCP ecosystem robustness. The competitive pressure is visibly pushing teams toward faster iteration—multiple tools shipped releases within the same 24-hour window—while community backlash against regressive changes (token inflation, thinking UI opacity, CPU overheating) is sharper than ever. Enterprise readiness, particularly around cost predictability, offline resilience, and policy enforcement, is emerging as the primary battleground for differentiation.

---

## 2. Activity Comparison

| Tool | Issues Activity (24h) | PR Activity (24h) | Release Status |
|:---|:---|:---|:---|
| **Claude Code** | High — 9 hot issues tracked, multiple high-engagement regressions | Active — 10 key PRs, including open-source reconstruction efforts | ✅ v2.1.104–105 shipped |
| **OpenAI Codex** | Very high — 50 new issues/PRs, 530-comment megathread on billing | Active — 10+ PRs across runtime, marketplace, and realtime stack | ✅ Rust alpha v0.121.0-alpha.4/6 shipped |
| **Gemini CLI** | High — 10 hot issues, active enterprise/air-gapped focus | Active — 10 PRs including offline bundling and telemetry safety | ✅ v0.37.2 hotfix shipped |
| **GitHub Copilot CLI** | High — 50 updated issues, no PR merges | Stalled — **no PRs updated in 24h** | ✅ v1.0.25 shipped |
| **Kimi Code CLI** | Moderate — 10 hot issues, release-triggered feedback surge | Moderate — 10 PRs, mostly release mechanics and small fixes | ✅ v1.33.0 + v1.32.0 shipped |
| **OpenCode** | Very high — 50 updated issues | Active — 10 PRs, heavy Effect-TS infrastructure refactoring | ❌ No release |
| **Pi** | High — 50 updated issues, 19 PRs | Active — 10 PRs, TUI and provider auth focus | ✅ v0.67.0 + v0.67.1 shipped |
| **Qwen Code** | Moderate — 10 hot issues | Active — 10 PRs, loop detection and performance focus | ✅ v0.14.4 shipped |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Cost transparency & billing controls** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode | Quota exhaustion alerts, "agent" vs. "user" request attribution, token inflation root-cause visibility, spend capping |
| **MCP ecosystem robustness** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI, Kimi CLI | Persistent OAuth tokens, fewer "Invalid client" errors, sandboxed execution, registry integration, log spam reduction |
| **Session/context management** | Claude Code, Kimi CLI, Qwen Code, OpenCode | Out-of-shell session discovery, `/resume` filtering, manual/auto compaction controls, context-window visibility |
| **Windows parity & stability** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code | Keystroke lag fixes, SSH terminal compatibility, Defender false positives, sandbox/firewall errors, proper shell detection |
| **Voice & multimodal input** | OpenAI Codex, Gemini CLI, GitHub Copilot CLI | Realtime voice mode, clipboard image paste, native image generation, PDF ingestion |
| **Hook/extensibility systems** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi | PreToolUse actions (`ask`/`block`/`confirm`), global hooks configuration, extension SDK ergonomics, inline extension factories |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|:---|:---|:---|:---|
| **Claude Code** | Git-native workflows, cowork collaboration, hook/plugin extensibility | Engineering teams in git-heavy environments | TypeScript/Node runtime; heavy investment in git worktrees, PreCompact hooks, and plugin marketplace |
| **OpenAI Codex** | Realtime multimodal, sandboxed execution, VS Code extension parity | Developers wanting desktop-app polish with IDE integration | Rust CLI rewrite in progress; strong separation between core runtime and app-server; V8 code mode with ICU |
| **Gemini CLI** | Enterprise/offline resilience, YOLO mode policy engine, voice input | Enterprise and Google-cloud-aligned developers | Node-based SEA with bundled native binaries; explicit policy modes (YOLO/ASK_USER) with governance overrides |
| **GitHub Copilot CLI** | Copilot ecosystem integration, MCP registry, ACP extensibility | Existing GitHub Copilot subscribers and orgs | Tightly coupled to GitHub Copilot billing and models; focuses on session resilience and enterprise policy |
| **Kimi Code CLI** | Thinking transparency, session management, cross-platform shell behavior | Power users wanting visible reasoning and session control | PyInstaller-packaged Python CLI; strong emphasis on thinking UI and shell command targeting |
| **OpenCode** | Effect-TS functional architecture, Copilot provider integration, web UI | TypeScript/functional-programming enthusiasts, Copilot users | Heavy Effect-TS refactor; dual TUI + web UI; aggressive Copilot provider caching and attribution fixes |
| **Pi** | Terminal-native UX, local model support, extension SDK | Terminal power users, local-LLM adopters | Custom TUI framework with Kitty/tmux protocol support; lightweight telemetry; Ollama/LM Studio auto-detection |
| **Qwen Code** | Loop detection, CJK localization, VS Code Companion, memory systems | Chinese/Asian market developers, VS Code users | Bun/TypeScript runtime; strong IDE companion investment; autonomous memory ("dream") system |

---

## 5. Community Momentum & Maturity

### Most Active Communities
- **OpenAI Codex**: Highest raw engagement with a 530-comment billing megathread and 50+ daily tracker updates. The Rust rewrite signals major architectural investment but also turbulence.
- **Claude Code**: Extremely high emotional engagement—users are vocally invested, with 1,717 👍 on a single model-quality regression issue. The open-source reconstruction PRs show community depth.
- **OpenCode**: 50 daily issues plus dense PR activity around core infrastructure (Effect-TS, shell jobs, HTTP API). Smaller but technically sophisticated community.

### Rapidly Iterating
- **Gemini CLI**: v0.37.2 hotfix plus simultaneous PRs for offline bundling, YOLO hardening, and telemetry safety show disciplined, enterprise-focused velocity.
- **Pi**: Two releases in 24 hours, 19 PRs, and rapid issue closure (multiple same-day fixes) indicate a lean, responsive team.
- **Qwen Code**: v0.14.4 plus active P0/P1 work on loop detection and startup profiling shows structured prioritization.

### Stagnation Signals
- **GitHub Copilot CLI**: Shipped a release but had **zero PR activity** in 24 hours despite 50 updated issues. Suggests either a closed development model or resource constraints, with community frustration accumulating on billing bugs and policy inconsistencies.

---

## 6. Trend Signals

| Trend | Evidence | Value for Developers |
|:---|:---|:---|
| **Billing anxiety is reshaping product trust** | Token inflation (#46917), "user" vs. "agent" misattribution (#8030, #2591), and runaway premium consumption (#14593) are dominant across 4+ tools | **Demand upfront cost visibility**; tools without spend controls or transparent attribution will lose enterprise adoption |
| **Context compaction is a universal reliability cliff** | Auto-compaction infinite loops (#15533, #11301), Windows stalls, and cache-creation token spikes (#46917) plague multiple tools | **Favor tools with manual compaction triggers and context transparency**; long-session workflows remain risky |
| **Windows is still an afterthought for most** | Every tool except possibly Pi has active Windows regressions (lag, SSH garbling, Defender blocks, sandbox failures) | **Mac/Linux-first teams can adopt more aggressively**; Windows-native teams should evaluate Gemini CLI or Pi more closely |
| **MCP is becoming table stakes, but auth is the bottleneck** | OAuth token persistence, "Invalid client" errors, and excessive approval prompts are recurring across Claude Code, Codex, Copilot CLI, and Gemini CLI | **Expect MCP tooling to mature in H2 2026**; early adopters should budget integration debugging time |
| **Thinking/reasoning transparency is a polarizing UX concern** | Kimi CLI's compact thinking indicator triggered immediate backlash (#1864) and counter-requests (#1632); OpenCode users want context visibility | **One-size-fits-all UI decisions fail**; configurable verbosity is becoming a requirement, not a nice-to-have |
| **Local/offline and enterprise air-gapped support is ascending** | Gemini CLI bundling RipGrep, Pi adding Ollama/LM Studio auto-detection, and OpenCode's managed-settings enforcement all point in this direction | **Regulated and enterprise environments will increasingly require offline-capable or self-hosted AI CLI tools** |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-14 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) | 🟡 Open | Quality-control skill that prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. | Positions itself as universally relevant—"these issues affect every document Claude generates." Strong framing around invisible polish that users rarely ask for but always need. |
| 2 | **Skill Quality Analyzer + Skill Security Analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83)) | 🟡 Open | Two meta-skills for evaluating Claude Skills across structure, documentation, security, and compliance dimensions. | Appeals to marketplace maturity; treats skills as publishable artifacts requiring QA gates. |
| 3 | **Frontend Design** ([PR #210](https://github.com/anthropics/skills/pull/210)) | 🟡 Open | Revised skill improving clarity and actionability of single-conversation frontend design guidance. | Focus on "actually executable" instructions signals community pushback against vague, hand-wavy skill prompts. |
| 4 | **ODT Creation & Parsing** ([PR #486](https://github.com/anthropics/skills/pull/486)) | 🟡 Open | OpenDocument text creation, template filling, and ODT-to-HTML parsing for LibreOffice/Google Docs workflows. | Fills a clear gap alongside existing DOCX/PDF skills; emphasizes ISO standard compliance. |
| 5 | **DOCX Tracked Changes Fix** ([PR #541](https://github.com/anthropics/skills/pull/541)) | 🟡 Open | Fixes document corruption by preventing `w:id` collisions between tracked changes and existing bookmarks in DOCX files. | Deep OOXML expertise on display; community appreciates surgical bug fixes to existing high-utility skills. |
| 6 | **System Documentation & Flowcharts** ([PR #95](https://github.com/anthropics/skills/pull/95)) | 🟡 Open | Comprehensive evidence-management system docs with architecture diagrams and lifecycle flowcharts. | Enterprise/documentation-heavy; less a reusable skill and more a complete system template. |
| 7 | **SAP-RPT-1-OSS Predictor** ([PR #181](https://github.com/anthropics/skills/pull/181)) | 🟡 Open | Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data. | Niche but high-value enterprise use case; signals expansion into ERP/structured-data domains. |
| 8 | **Skill-Creator YAML Validation** ([PR #539](https://github.com/anthropics/skills/pull/539)) | 🟡 Open | Pre-parse validation to catch unquoted descriptions with YAML special characters, preventing silent failures. | Developer-experience improvement; part of a broader wave of skill-creator hardening PRs. |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Skill-creator tooling overhaul** | [Issue #202](https://github.com/anthropics/skills/issues/202) (8 comments), [Issue #556](https://github.com/anthropics/skills/issues/556) (5 comments), [Issue #532](https://github.com/anthropics/skills/issues/532) | The meta-skill for creating skills is seen as bloated, token-inefficient, and broken for enterprise SSO users. Demand for leaner, validated, and eval-friendly skill authoring. |
| **Trust, security & governance** | [Issue #492](https://github.com/anthropics/skills/issues/492) (4 comments), [Issue #412](https://github.com/anthropics/skills/issues/412) (4 comments) | Strong concern about namespace impersonation (`anthropic/` trust boundary) and agent safety patterns. |
| **Enterprise sharing & identity** | [Issue #228](https://github.com/anthropics/skills/issues/228) (3 comments), [Issue #29](https://github.com/anthropics/skills/issues/29) (4 comments) | Org-wide skill libraries, Bedrock compatibility, and SSO-aware workflows are blockers for team adoption. |
| **MCP interoperability** | [Issue #16](https://github.com/anthropics/skills/issues/16) (4 comments) | Community wants Skills exposed as MCPs for standardized API surfaces and cross-tool compatibility. |
| **Reliability of core document skills** | [Issue #189](https://github.com/anthropics/skills/issues/189) (5 comments), [Issue #62](https://github.com/anthropics/skills/issues/62) (10 comments) | Duplicate skill content and disappearing user skills erode confidence in the plugin/storage layer. |

---

## 3. High-Potential Pending Skills

These active, well-scoped PRs have generated meaningful discussion but remain unmerged:

- **[PR #514 — Document Typography](https://github.com/anthropics/skills/pull/514)** | Universal utility, strong problem statement, March 2026 activity.
- **[PR #83 — Skill Quality & Security Analyzers](https://github.com/anthropics/skills/pull/83)** | Marketplace maturity play; directly addresses governance gaps.
- **[PR #210 — Frontend Design Clarity](https://github.com/anthropics/skills/pull/210)** | Iterative improvement to an existing skill; low merge risk.
- **[PR #486 — ODT Skill](https://github.com/anthropics/skills/pull/486)** | Complements established document skills; April 2026 update shows sustained author engagement.
- **[PR #541 — DOCX Tracked Changes Fix](https://github.com/anthropics/skills/pull/541)** | Critical bugfix with precise root-cause analysis; likely to merge once reviewed.
- **[PR #723 — Testing Patterns](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing-stack skill (Testing Trophy, React, mocking, E2E); fills a clear developer-education gap.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, enterprise-ready document and meta-skills—specifically, polished output quality (typography, ODT/DOCX reliability), validated skill-creation tooling, and clear trust boundaries—while underlying frustrations center on skill storage, sharing, and SSO-aware infrastructure that currently lags the creativity of individual Skill submissions.**

---

# Claude Code Community Digest — 2026-04-14

## 1. Today's Highlights
Anthropic shipped two patch releases (v2.1.104–105) adding worktree path switching, PreCompact hook blocking, and plug background monitoring. Meanwhile, the community is intensely focused on cost/token inflation regressions in recent builds, with multiple high-engagement issues tracking unexpected quota exhaustion and cache-creation token spikes.

---

## 2. Releases
- **v2.1.105** — Added a `path` parameter to the `EnterWorktree` tool for switching into existing git worktrees; introduced `PreCompact` hook support allowing hooks to block compaction via exit code 2 or `{"decision":"block"}`; added background monitor support for plug.  
  [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.105)

- **v2.1.104** — Patch release (no detailed changelog provided).  
  [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.104)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | **Claude Code unusable for complex engineering tasks with Feb updates** | A 395-comment, 1,717-👍 closed issue that became the central rallying point for perceived model-quality regression in recent updates. | Extremely high engagement; now closed but continues to shape community sentiment. |
| [#22543](https://github.com/anthropics/claude-code/issues/22543) | **Cowork feature creates 10GB VM bundle, severe performance degradation** | Documents massive VM bundle bloat causing UI lag and slow startup—directly impacts daily usability of the cowork feature. | 60 comments, 148 👍; high-priority/oncall label. |
| [#45756](https://github.com/anthropics/claude-code/issues/45756) | **Pro Max 5x quota exhausted in 1.5 hours despite moderate usage** | Raises alarm about runaway billing/consumption on WSL, eroding trust in subscription value. | 29 comments, 124 👍; cost-critical. |
| [#46917](https://github.com/anthropics/claude-code/issues/46917) | **v2.1.100+ inflates `cache_creation` by ~20K tokens vs v2.1.98** | A data-driven regression report showing server-side/token-routing inflation with identical payloads. | 16 comments, 106 👍; highly technical repro. |
| [#20052](https://github.com/anthropics/claude-code/issues/20052) | **Claude Desktop incorrectly reads `<Name>` tags as `<n>` from files** | A precision bug in XML/file parsing that can corrupt configs or data on Windows. | 14 comments; has repro, MCP/IDE area. |
| [#22115](https://github.com/anthropics/claude-code/issues/22115) | **statusLine: pass terminal columns to command via stdin or env** | Custom status-line commands cannot detect terminal width, breaking responsive TUI integrations. | 9 comments, 10 👍; power-user friction. |
| [#39060](https://github.com/anthropics/claude-code/issues/39060) | **5-second keystroke lag at prompt on Windows 11** | Severe interactive latency making the CLI practically unusable for affected Windows users. | 7 comments, 2 👍. |
| [#47587](https://github.com/anthropics/claude-code/issues/47587) | **Usage limits gone crazy** | Another macOS cost/quota anomaly surfacing suddenly without config changes. | 6 comments, 1 👍. |
| [#47185](https://github.com/anthropics/claude-code/issues/47185) | **Linear MCP OAuth fails with "Invalid client"** | Blocks Linear integration entirely due to OAuth clientId mismatch with ephemeral ports. | 5 comments, 4 👍; auth/MCP intersection. |
| [#46093](https://github.com/anthropics/claude-code/issues/46093) | **Dispatch not working (Windows/cowork)** | Breaks a core cowork workflow for Windows users. | 5 comments. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#47676](https://github.com/anthropics/claude-code/pull/47676) | **fix(plugins): make hookify and plugin-dev agent frontmatter valid YAML** | Quotes colon-containing description strings so strict YAML parsers can load four agent files without scanner errors. |
| [#47554](https://github.com/anthropics/claude-code/pull/47554) | **Fix: MCP OAuth token persistence across sessions** | Implements platform keychain/credential storage so HTTP-based MCP servers (e.g., Supabase) no longer lose auth on every new conversation. |
| [#47490](https://github.com/anthropics/claude-code/pull/47490) | **feat(hookify): add ask action support** | Adds `action: ask` to hookify rules on `PreToolUse`, normalizes `confirm` approval flow, and documents fallback behavior for non-PreToolUse hooks. |
| [#47514](https://github.com/anthropics/claude-code/pull/47514) | **fix(security-guidance): skip doc files for substring checks** | Reduces false positives by exempting documentation/plaintext files from substring-based security heuristics while keeping source checks intact. |
| [#47502](https://github.com/anthropics/claude-code/pull/47502) | **fix(security-guidance): use a cross-platform Python launcher** | Introduces a small Node launcher so the security-guidance hook reliably finds Python on Windows and Unix with stdin/stdout passthrough. |
| [#47673](https://github.com/anthropics/claude-code/pull/47673) | **fix(plugin-dev): add missing `.claude-plugin/plugin.json` manifest** | Completes the plugin-dev metadata so it matches the other 12 marketplace plugins. |
| [#47674](https://github.com/anthropics/claude-code/pull/47674) | **docs(devcontainer): fix theme name typo in Dockerfile comment** | Corrects "powerline10k" → "powerlevel10k" in a devcontainer comment; no functional change. |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: open source claude code ✨** | A symbolic/community PR referencing long-standing open-source requests (closes multiple issues). |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | **Fully Open Source Claude Code** | An ambitious community effort reconstructing 1,906 TypeScript files from the shipped source map and adding a Bun-based build pipeline. |
| [#46095](https://github.com/anthropics/claude-code/pull/46095) | **Add Claude Mythos operating contract for Veriflow immune system** | Unusual/meta PR adding a proposed operating contract for an "immune system" concept. |

---

## 5. Feature Request Trends
- **Cost transparency & controls** — Users want clearer visibility into why token usage and quota consumption spike between versions, plus ways to cap or predict spend.
- **Windows parity** — Repeated requests for SSH agent inheritance in git subshells, lag-free TUI input, and proper credential paste support in the CLI.
- **Hook/action extensibility** — Growing interest in richer hook actions (`ask`, `block`, `confirm`) and better YAML/frontmatter validation for plugin agents.
- **MCP robustness** — Demands for persistent OAuth tokens, broader platform support, and fewer "Invalid client" / socket-connection failures.
- **Session/TUI ergonomics** — `/resume` filtering by current directory, plain-text `/copy` output, and terminal-width awareness for custom status-line integrations.

---

## 6. Developer Pain Points
- **Regressive token inflation** — Multiple independent reports (v2.1.100+, v2.1.105) of sudden jumps in `cache_creation_input_tokens` and context usage are creating billing anxiety and eroding upgrade confidence.
- **Authentication friction on Linux/Windows** — Pasting auth codes into the CLI is broken or unreliable for several terminal configurations (paste bracketing, non-TTY contexts), blocking first-time setup.
- **Cowork performance cliffs** — The cowork feature's 10 GB VM bundles and dispatch failures on Windows are making a flagship collaboration tool unusable for a subset of users.
- **Model behavior drift** — A persistent undercurrent of frustration that Claude Code has become less effective at delegating to custom subagents, loading skills, or handling complex engineering tasks compared to earlier builds.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-14

## 1. Today's Highlights
The team shipped two Rust alpha releases (v0.121.0-alpha.4 and alpha.6) while a firestorm of 50 new issues and PRs hit the tracker. The dominant themes are VS Code extension CPU regressions, Windows desktop app UI/sandbox polish, and a major push to refactor marketplace and plugin infrastructure in the core runtime.

---

## 2. Releases
- **rust-v0.121.0-alpha.6** and **rust-v0.121.0-alpha.4** were published within the last 24h. No detailed changelogs were provided; these appear to be iterative Rust CLI/runtime builds.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#14593](https://github.com/openai/codex/issues/14593) | Burning tokens very fast | A 530-comment megathread. Business-tier users report runaway token consumption, eroding trust in billing controls. | 🔥 201 upvotes; highly active |
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Codex Desktop App | Top feature gap vs. VS Code; blocks adoption for SSH/container workflows. | 535 upvotes, 112 comments |
| [#13041](https://github.com/openai/codex/issues/13041) | WebSocket 1008 Policy close → HTTPS fallback | Degrades real-time performance on Linux; indicates server-side policy drift. | 114 upvotes, 58 comments |
| [#13476](https://github.com/openai/codex/issues/13476) | Excessive approval prompts for Playwright MCP | Sandbox UX regression; MCP tools are unusable without constant clicking. | 38 upvotes, 27 comments |
| [#15764](https://github.com/openai/codex/issues/15764) | Code Helper Renderer >100% CPU when applying patches | Confirmed regression post-`26.313.41514`; macOS VS Code users hit hard. | 31 upvotes, 21 comments |
| [#16849](https://github.com/openai/codex/issues/16849) | `open-in-targets` error loop causes high CPU | Root cause identified and closed; shows rapid triage on extension stability. | 11 upvotes, 19 comments |
| [#15393](https://github.com/openai/codex/issues/15393) | High CPU utilization with IDE extension | Linux variant of the renderer CPU bug; extension performance is a cross-platform crisis. | 22 upvotes, 15 comments |
| [#15706](https://github.com/openai/codex/issues/15706) | MacBook Air M4 overheating with VS Code extension | Hardware-level thermal impact from the same patch-application path. | 9 upvotes, 10 comments |
| [#17615](https://github.com/openai/codex/issues/17615) | Azure safety-check over-triggering | `"I'm sorry, but I cannot assist"` loop on Azure API deployments; blocks enterprise CLI usage. | 4 upvotes, 9 comments |
| [#17596](https://github.com/openai/codex/issues/17596) | Windows desktop: unclickable "New Thread" and "Back to App" | Basic UI hit-testing broken on Windows; signals rushed desktop QA. | 2 upvotes, 6 comments |

---

## 4. Key PR Progress

| # | PR | Feature / Fix |
|---|-----|---------------|
| [#17709](https://github.com/openai/codex/pull/17709) | Initialize ICU data for code mode V8 | Prevents locale-dependent crashes in the V8 code-mode runtime by linking ICU data. |
| [#17674](https://github.com/openai/codex/pull/17674) | Route `apply_patch` through environment filesystem | Hardens sandboxing by forcing patch application via the selected environment filesystem rather than local self-exec. |
| [#17725](https://github.com/openai/codex/pull/17725) | Fix remote apply-patch timeout regression | Restores sibling-discovery for `codex-linux-sandbox` helper to resolve post-merge remote timeouts. |
| [#17286](https://github.com/openai/codex/pull/17286) | Prefix Compaction | Background prewarming of prefix compaction to reduce foreground latency on long-context sessions. |
| [#17714](https://github.com/openai/codex/pull/17714) | Support `original-detail` metadata on MCP image outputs | Enables high-fidelity MCP image passthrough with model-aware fallback stripping. |
| [#17711](https://github.com/openai/codex/pull/17711) / [#17718](https://github.com/openai/codex/pull/17718) | Add `marketplace/add` app-server RPC | Refactors marketplace addition into a shared core flow callable from both CLI and app-server. |
| [#17563](https://github.com/openai/codex/pull/17563) | Add `PermissionRequest` hooks support | Allows external hooks to intercept shell, unified exec, and network approval prompts. |
| [#17701](https://github.com/openai/codex/pull/17701) | Add realtime output modality and transcript events | Wires text/audio output selection through the full realtime stack plus split transcript delta/done events. |
| [#17373](https://github.com/openai/codex/pull/17373) | app-server: run initialized RPCs with keyed serialization | Adds per-key FIFO queues for stateful RPCs, preventing race conditions in concurrent app-server operations. |
| [#17724](https://github.com/openai/codex/pull/17724) | Config for `log_macos_seatbelt_denials` | Adds unified logging of macOS sandbox denials to debug seatbelt policy issues. |

---

## 5. Feature Request Trends
1. **Remote Development parity** — Users want SSH, containers, and WSL support in the Desktop App to match VS Code workflows ([#10450](https://github.com/openai/codex/issues/10450)).
2. **TUI/CLI ergonomics** — Recurring asks for configurable hotkeys ([#3049](https://github.com/openai/codex/issues/3049)), readable Markdown tables ([#8259](https://github.com/openai/codex/issues/8259)), and slash-command automation like `/loop` ([#15679](https://github.com/openai/codex/issues/15679)).
3. **Multimodal agent capabilities** — Strong demand for native image generation from Codex sessions ([#8758](https://github.com/openai/codex/issues/8758)) and richer MCP media handling ([#17714](https://github.com/openai/codex/pull/17714)).

---

## 6. Developer Pain Points
- **Extension performance regressions** — Multiple confirmed reports of 100%+ CPU and overheating on macOS/Linux VS Code extensions during patch application ([#15764](https://github.com/openai/codex/issues/15764), [#15393](https://github.com/openai/codex/issues/15393), [#15706](https://github.com/openai/codex/issues/15706)).
- **Approval fatigue** — MCP and sandbox prompts are excessive or non-persistent, breaking flow state ([#13476](https://github.com/openai/codex/issues/13476), [#16911](https://github.com/openai/codex/issues/16911), [#15122](https://github.com/openai/codex/issues/15122)).
- **Windows desktop quality gaps** — Hit-testing bugs, sandbox firewall failures (`0x80070057`), git-diff path formatting errors, and incomplete window-close behavior indicate the Windows app needs focused stabilization ([#17596](https://github.com/openai/codex/issues/17596), [#17686](https://github.com/openai/codex/issues/17686), [#17624](https://github.com/openai/codex/issues/17624), [#17322](https://github.com/openai/codex/issues/17322)).
- **Rate-limit & billing anxiety** — Business users still hitting opaque caps after 20–30 minutes, with admin controls failing to propagate ([#14593](https://github.com/openai/codex/issues/14593), [#17663](https://github.com/openai/codex/issues/17663)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-14

## 1. Today's Highlights

The team shipped a hotfix release **v0.37.2** to patch a regression on the v0.37 branch. Offline/air-gapped enterprise users are getting long-awaited relief with a PR to bundle RipGrep binaries directly into the CLI's Single Executable Application (SEA). Meanwhile, active work continues on YOLO mode hardening, telemetry safety, and real-time voice input.

---

## 2. Releases

### v0.37.2
A cherry-picked patch release resolving an issue on the `v0.37.1` branch.  
[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.37.1...v0.37.2) | [PR #25322](https://github.com/google-gemini/gemini-cli/pull/25322)

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) | **Failing to download RipGrep should not permanently slow down startup** | A blocked GitHub download currently adds **2+ minutes** to every cold start. Users want fail-fast behavior and bundling. 6 comments, actively discussed. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess impact of AST-aware file reads, search, and mapping** | Epic-level investigation into reducing token noise and misaligned reads via AST navigation. Could reshape core agent tooling. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **CLI keeps asking for permissions on the same file** | Persistent permission amnesia breaks flow-state; "allow for all future sessions" is unreliable. Recurring user complaint. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution gets stuck "Waiting input"** | Simple commands hang in the UI even after finishing. A reliability issue affecting basic interactive usage. |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | **Gemini failed to open in a temporary path `A:\`** | Windows-specific crash (`EISDIR` on `realpath`) when running from removable/temp drives. Edge case but hard-blocking. |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | **Subagents awareness of active Approval Modes** | Subagents don't know whether they're in Plan Mode or Auto-Edit Mode, causing policy conflicts and confused behavior. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Implement memory routing: global vs. project** | Defines where agent memory lives (`~/.gemini/` vs. `.gemini/`). Critical for multi-project workflows and personalization. |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | **Running SSH the text is scrambled** | Terminal corruption over SSH on Windows → gLinux makes the CLI unusable for remote developers. |
| [#24470](https://github.com/google-gemini/gemini-cli/issues/24470) | **Scroll issues with long chats** | Flashing screens and jumping scrollbars in long conversations degrade UX for power users. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **Gemini CLI encounters 400 error with > 128 tools** | Hitting API limits when too many tools are in scope. Needs smarter tool scoping to scale agent capabilities. |

---

## 4. Key PR Progress

| # | PR | Feature / Fix |
|---|-----|---------------|
| [#25342](https://github.com/google-gemini/gemini-cli/pull/25342) | **Bundle RipGrep binaries into SEA for offline support** | Embeds native `ripgrep` for 5 major architectures, solving air-gapped startup hangs. |
| [#25341](https://github.com/google-gemini/gemini-cli/pull/25341) | **Prevent YOLO mode from being downgraded** | Stops the policy engine from overriding YOLO decisions to `ASK_USER` on dangerous-shell heuristics. |
| [#25338](https://github.com/google-gemini/gemini-cli/pull/25338) | **Allow explicit write permissions to override governance file protections** | Fixes sandbox logic so explicit write allowances take precedence over read-only locks on `.git` and similar. |
| [#25331](https://github.com/google-gemini/gemini-cli/pull/25331) | **Add large-conversation performance tests** | Introduces ~60 MB / 1400-message perf benchmarks for load latency and input responsiveness. |
| [#25256](https://github.com/google-gemini/gemini-cli/pull/25256) | **Detect new files in `@` recommendations with watcher-based updates** | Adds a file watcher behind a flag to refresh `@` suggestions without full recrawls. |
| [#25186](https://github.com/google-gemini/gemini-cli/pull/25186) | **Migrate core tools to native `ToolDisplay` property** | Deprecates `returnDisplay` adapter; gives tools direct control over response rendering schema. |
| [#24174](https://github.com/google-gemini/gemini-cli/pull/24174) | **Implement real-time voice mode** | Adds cloud (Gemini Live API) and local (Whisper/whisper.cpp) voice dictation backends. |
| [#24664](https://github.com/google-gemini/gemini-cli/pull/24664) | **Add ACP host input requests** | Lets an ACP client opt into answering `ask_user` and `exit_plan_mode`, closing a headless/automation gap. |
| [#25343](https://github.com/google-gemini/gemini-cli/pull/25343) + [#25344](https://github.com/google-gemini/gemini-cli/pull/25344) | **Telemetry: trace opt-in + bounded structural truncation** | Decouples heavy tracing from baseline telemetry and adds safe payload truncation to prevent OOM/JSON parse failures. |
| [#24630](https://github.com/google-gemini/gemini-cli/pull/24630) | **Enable mouse clicking for cursor positioning in `AskUser`** | Adds mouse-click cursor placement in multi-line text input, specifically for alternate-buffer mode. |

---

## 5. Feature Request Trends

1. **Offline / Air-Gapped Resilience** — Bundling dependencies (RipGrep) and removing runtime downloads is a top priority for enterprise adoption.
2. **Smarter Agent Context & Memory** — Global vs. project memory routing, AST-aware code navigation, and skill extraction with recurrence gates.
3. **Voice & Alternative Input** — Real-time voice mode and ACP host integration point toward broader input modality support.
4. **Telemetry Hygiene** — Community and maintainers alike are pushing for opt-in tracing, bounded payloads, and privacy-safe observability.

---

## 6. Developer Pain Points

- **Startup Reliability** — RipGrep download failures causing multi-minute hangs is the most acute friction point for new and enterprise users.
- **Permission Fatigue** — Repeated prompts for the same file erode trust in the security model and interrupt workflows.
- **Terminal Rendering Bugs** — SSH scrambling, scroll jumping in long chats, and table incremental-rendering issues make the TUI feel fragile.
- **Shell Execution Hangs** — Commands falsely stuck in "Awaiting user input" break the core loop of agent-assisted development.
- **Windows Edge Cases** — Temp-drive paths (`A:\`) and SSH-terminal compatibility show lingering cross-platform rough edges.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-14

## 1. Today's Highlights
GitHub shipped **Copilot CLI v1.0.25** with native MCP server registry installation and improved session reliability, while community attention remains fixated on a critical billing bug where single sessions can burn through 80–100 premium requests. No new pull requests were merged in the last 24 hours, but issue velocity stayed high with 50 updated tickets.

---

## 2. Releases

### [v1.0.25](https://github.com/github/copilot-cli/releases/tag/v1.0.25) — 2026-04-13
- **MCP registry integration**: Install MCP servers directly from the registry with guided CLI configuration.
- **Session resilience**: `Esc` now works correctly after a failed `/resume` lookup; resolved models are persisted in session history and model changes are deferred during active turns.
- **ACP extensibility**: ACP clients can now supply their own MCP servers via stdio.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#2591](https://github.com/github/copilot-cli/issues/2591) | Single session request consumes infinite premium requests per tool/thinking step | **Critical billing bug**: one user request can burn 80–100 premium requests, making agent mode financially untenable for enterprises. | 25 comments, 11 👍 — highest engagement today |
| [#1481](https://github.com/github/copilot-cli/issues/1481) | `SHIFT+ENTER` executes prompt instead of inserting line break | Closed. Fixes a universal chat UX expectation; `CTRL+ENTER` was the non-standard mapping. | 22 comments, 11 👍 |
| [#223](https://github.com/github/copilot-cli/issues/223) | "Copilot Requests" permission missing for org-owned fine-grained tokens | Enterprise automation blocked because orgs refuse to use individual PATs for CI/CD workflows. | 20 comments, 63 👍 — strongest upvote signal |
| [#1595](https://github.com/github/copilot-cli/issues/1595) | Sporadic policy blocking prevents model listing despite valid Enterprise sub | Undermines trust in Enterprise policy enforcement; users with 40% remaining premium quota are randomly denied `/models`. | 18 comments, 8 👍 |
| [#1157](https://github.com/github/copilot-cli/issues/1157) | Global hooks configuration with lifecycle events | Closed. Brings parity with Claude Code and Cursor; repo-by-repo hook config is a major adoption friction point. | 12 comments, 25 👍 |
| [#1276](https://github.com/github/copilot-cli/issues/1276) | Paste images from system clipboard into prompts | Vision workflows (screenshots of bugs, diagrams) are impossible in a terminal without file-system detours. | 9 comments, 6 👍 |
| [#2551](https://github.com/github/copilot-cli/issues/2551) | 503 HTTP/2 GOAWAY errors on Opus 4.5 and Sonnet 4.5 | Model-specific reliability regression; retries waste 90+ seconds before hard failure. | 8 comments |
| [#892](https://github.com/github/copilot-cli/issues/892) | Sandbox mode to restrict file access to working directory | Security and safety concern for running agentic CLI in CI or on shared machines. | 7 comments, 31 👍 |
| [#853](https://github.com/github/copilot-cli/issues/853) | `ctrl+l` clears conversation instead of just screen | Closed. Violates decades of terminal muscle memory. | 7 comments |
| [#1665](https://github.com/github/copilot-cli/issues/1665) | Project/repository-scoped plugins instead of per-user global plugins | Team consistency and reproducibility issue; current model forces every teammate to manually install identical plugins. | 4 comments, 10 👍 |

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.**  
All movement today was driven by releases, issue triage, and community discussion.

---

## 5. Feature Request Trends

1. **Enterprise policy & billing transparency** — Orgs need org-scoped tokens, predictable quota consumption, and auditable usage statistics.
2. **Vision and multimodal input** — Clipboard image paste is requested repeatedly (#1276, #2409, #2675) as developers expect terminal parity with web/chat UIs.
3. **Extensibility & hooks** — Global hooks, project-scoped plugins, and MCP ecosystem growth show demand for customizable agent pipelines.
4. **Cross-device sessions** — Remote access to active CLI sessions from phones (#1687) signals interest in long-running agent mobility.
5. **Observability & control** — OTel telemetry, session deletion commands, and usage slash commands reflect operational maturity needs.

---

## 6. Developer Pain Points

| Theme | Summary |
|-------|---------|
| **Runaway premium billing** | The #2591 bug has created acute anxiety that agentic tool loops can silently exhaust monthly quotas in a single prompt. |
| **Enterprise policy inconsistency** | Valid subscriptions are randomly blocked (#1595), and org token permissions are incomplete (#223). |
| **Terminal UX violations** | Keyboard shortcuts (`Shift+Enter`, `Ctrl+L`) and mouse interactions (right-click, clipboard images) behave unexpectedly for terminal natives. |
| **Model reliability** | Newer Claude 4.5 models suffer 503 GOAWAY disconnects (#2551), eroding confidence in bleeding-edge model access. |
| **Security sandboxing** | No built-in filesystem sandbox (#892) makes running the agent in automated or shared environments risky. |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-14

---

## 1. Today's Highlights

The Kimi Code CLI project shipped **v1.33.0** today, unifying all managed model branding under "Kimi for Code" and retiring hardcoded `kimi-k2.5` references. The release immediately triggered user feedback about **missing or altered thinking traces**, revealing a tension between UI streamlining and power-user transparency. Meanwhile, session management and cross-platform shell behavior remain the most active feature-request themes.

---

## 2. Releases

### v1.33.0
- **Refactor:** Unified managed model display as **"Kimi for Code"** — removes version-specific `kimi-k2.5` strings from the welcome screen and `/login` tips.  
  [PR #1860](https://github.com/MoonshotAI/kimi-cli/pull/1860) | [Release](https://github.com/MoonshotAI/kimi-cli/)

### v1.32.0 (shipped concurrently)
- **Fix:** PyInstaller binaries now correctly include lazy CLI subcommands.  
- **Fix:** MCP tool output is truncated at 100K characters and unsupported content types are handled gracefully.  
- **Feat:** New compact, single-line thinking indicator with animated dots, elapsed time, and live tokens/sec pulse.  
  [PR #1858](https://github.com/MoonshotAI/kimi-cli/pull/1858)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#823](https://github.com/MoonshotAI/kimi-cli/issues/823) | **Auth failure after several conversation rounds** — requires new terminal to recover. | Affects long-lived sessions; suggests token refresh or state-management bug. | **Closed** after 14 comments. Fix likely landed, but pattern was disruptive. |
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | **400 Invalid request Error** on Windows/PowerShell with Claude Sonnet model. | Persistent, un-actionable API error blocking basic usage on a major platform. | 12 comments, still **open** — users awaiting root-cause diagnosis. |
| [#1814](https://github.com/MoonshotAI/kimi-cli/issues/1814) | **Query and quickly restore sessions from outside the shell.** | High-friction workflow: users forget which directory hosts a given session. | 4 comments, **open**; aligns with multiple session-management requests. |
| [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) | **Please display the full thinking traces in Kimi CLI.** | Direct pushback against the new compact thinking UI in v1.33.0. | Filed same day as release, **open**; signals power-users want verbosity toggle. |
| [#1859](https://github.com/MoonshotAI/kimi-cli/issues/1859) | **"Why is the thinking process gone?"** (Chinese) | Duplicate concern from v1.32.0/1.33.0 thinking-indicator changes. | **Open**, zero comments; likely to attract more +1s quickly. |
| [#1830](https://github.com/MoonshotAI/kimi-cli/issues/1830) | **VS Code extension: can't slash skills before typing something.** | Breaks muscle memory for IDE users relying on skill shortcuts. | **Open**, 3 comments; VS Code extension quality issue. |
| [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) | **@mention file path error** when using `~` in Kimi Web. | File-reference resolution fails on home-directory paths in macOS. | **Open**, 2 comments; impacts core file-context feature. |
| [#1862](https://github.com/MoonshotAI/kimi-cli/issues/1862) | **FetchURL duplicates GitHub issue body when comments extraction misfires.** | Content-quality bug in web-fetch tool; pollutes context window with duplicates. | **Open**, already has matching PR #1863. |
| [#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632) | **Option to hide thinking content while using thinking models.** | Counter-point to #1864: some users want *less* noise, not more. | **Open**, 1 comment, 1 👍; reveals need for a **user-controlled verbosity setting**. |
| [#1856](https://github.com/MoonshotAI/kimi-cli/issues/1856) | **Allow project-level custom system prompt via `system_prompt.md`.** | Would enable team-wide prompt conventions and per-repo behavior tuning. | **Open**, zero comments; high-value DevEx request. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1863](https://github.com/MoonshotAI/kimi-cli/pull/1863) | **fix(fetch): suppress duplicated extracted comment text** | Switches `FetchURL` HTML extraction to inspect Trafilatura main text and comments separately; deduplicates GitHub issue bodies. | **Open** |
| [#1861](https://github.com/MoonshotAI/kimi-cli/pull/1861) | **chore: bump kimi-cli 1.33.0** | Release mechanics for v1.33.0. | **Closed** |
| [#1860](https://github.com/MoonshotAI/kimi-cli/pull/1860) | **refactor: unify managed model display as "Kimi for Code"** | Removes hardcoded model version strings from CLI surfaces. | **Closed** |
| [#1857](https://github.com/MoonshotAI/kimi-cli/pull/1857) | **feat(shell): compact thinking indicator with animated dots** | Replaces multi-line thinking preview with dense single-line progress (time, tokens, t/s). | **Closed** |
| [#1858](https://github.com/MoonshotAI/kimi-cli/pull/1858) | **chore: bump kimi-cli 1.32.0** | Release mechanics bundling MCP truncation, PyInstaller fix, and compact thinking. | **Closed** |
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | **feat(yolo-mode): add YOLO support to web interface** | Extends auto-approve ("YOLO") mode to the Web UI with backend API and frontend toggle. | **Open** |
| [#1839](https://github.com/MoonshotAI/kimi-cli/pull/1839) | **feat(shell): add /delete command for session removal** | Implements `/delete [session_id]` (alias `/remove`) with safety guards. | **Open** |
| [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) | **fix: route MCP server log notifications to loguru instead of TUI** | Stops MCP log spam from corrupting the terminal UI by redirecting to structured logs. | **Open** |
| [#1854](https://github.com/MoonshotAI/kimi-cli/pull/1854) | **Remind model do not use unsafe pattern** | Adds prompt guard telling the model never to start glob patterns with `**`. | **Open** |
| [#1852](https://github.com/MoonshotAI/kimi-cli/pull/1852) | **fix: log hook task exceptions instead of silently discarding them** | Replaces silent `lambda` exception swallowing with proper `logger.error` across hook callbacks. | **Open** |

---

## 5. Feature Request Trends

1. **Session Management as a First-Class Concern**  
   Users want out-of-shell session discovery (`kimi-cli --list-sessions`), quick restore, multi-session TUI dashboards, and safe deletion. The current in-shell `/sessions` workflow is seen as too directory-dependent.

2. **Configurable Thinking / Output Verbosity**  
   A clear split has emerged: some users demand **full thinking traces** (#1864), while others want to **hide thinking entirely** (#1632). The v1.32–1.33 changes landed in the middle and satisfied neither camp. A user preference (e.g., `--thinking=full|compact|hidden`) appears necessary.

3. **Project-Level Customization**  
   Requests for repo-local `system_prompt.md` (#1856) and better per-project configuration show users treating Kimi CLI as a team toolchain, not just a personal assistant.

4. **Cross-Platform Shell Behavior**  
   Windows users are asking for explicit control over whether generated commands target Bash, CMD, or PowerShell (#1855), indicating the auto-detection heuristic is failing in mixed environments.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Thinking UI opacity** | #1864, #1859, #1632 | **High** — shipped change triggered immediate backlash and counter-requests. |
| **Session discoverability & portability** | #1814, #1853, #1839 | **High** — users lose track of sessions across directories and terminals. |
| **Windows/PowerShell instability** | #778, #1855, #1830 | **Medium-High** — API errors and wrong shell commands break trust on a major platform. |
| **Auth/token refresh reliability** | #823 | **Medium** — resolved, but pattern of auth drops in long sessions was disruptive. |
| **Tool output quality (FetchURL, MCP)** | #1862, #1843, #1637 | **Medium** — duplicate content and log spam pollute context and corrupt the TUI. |
| **File path resolution edge cases** | #1774 | **Medium** — `@mention` with `~` fails, breaking a core context-gathering feature. |

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-14

## 1. Today's Highlights
No new release dropped in the last 24h, but the issue tracker is extremely active with **50 updated issues**. The dominant themes are **GitHub Copilot billing/request attribution bugs**, **session compaction regressions**, and **Windows-specific rendering/MCP timeouts**. On the PR side, the core team and vouched contributors are pushing a wave of Effect-TS refactors, shell-job isolation, and Copilot startup performance fixes.

---

## 2. Releases
*No releases in the last 24h.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| **#8030** | [Copilot auth now sets far too many requests as "user" consuming premium requests rapidly](https://github.com/anomalyco/opencode/issues/8030) | A single session burned through half a user's monthly Copilot quota because ~60 agent-initiated requests were incorrectly billed as "user" instead of "agent". This is a direct-cost bug affecting every Copilot user. | 🔥 215 comments, 79 👍 — the most active issue in the repo right now. |
| **#13768** | [This model does not support assistant message prefill / Github Copilot with Opus 4.6](https://github.com/anomalyco/opencode/issues/13768) | Opus 4.6 via Copilot frequently halts with a prefill error, breaking long sessions. | 57 comments, 23 👍 — high frustration from Claude power users. |
| **#11112** | [always stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112) | A persistent TUI hang during file-write operations that loops forever with "Tool execution aborted". | 53 comments, 22 👍 — affects daily usability. |
| **#8140** | [Configurable context limit and auto-compaction threshold](https://github.com/anomalyco/opencode/issues/8140) | Users want earlier compaction triggers and custom context caps to control token spend. No official workaround exists. | 20 comments, 39 👍 — strong cost-optimization demand. |
| **#2632** | [Default permissions allow editing files and executing any commands](https://github.com/anomalyco/opencode/issues/2632) | Security-conscious users argue OpenCode is too permissive by default compared to other AI tools. Closed, but resurfaced in discussions. | 20 comments, 3 👍 — perennial security debate. |
| **#6152** | [Session context usage (similar to /context in Claude)](https://github.com/anomalyco/opencode/issues/6152) | Request for a TUI dialog showing real-time context-window breakdown so users know when compaction will hit. | 16 comments, 73 👍 — very popular UX request. |
| **#15533** | [Auto-compaction infinite loop when assistant ended its turn](https://github.com/anomalyco/opencode/issues/15533) | A core logic bug: compaction injects a synthetic "Continue..." message even when the assistant already finished, causing loops. | 13 comments, 2 👍 — subtle but session-breaking. |
| **#11301** | [processing stops after compaction EVERY time](https://github.com/anomalyco/opencode/issues/11301) | On Windows, compaction reliably kills the session flow; users must manually prompt "continue". | 11 comments, 7 👍 — Windows stability gap. |
| **#17516** | [`opencode run` hangs after completing tool calls — process never exits](https://github.com/anomalyco/opencode/issues/17516) | The non-interactive `run` command, critical for CI/automation, deadlocks after finishing work. | 11 comments, 4 👍 — blocking automation adoption. |
| **#20859** | [Subagent models are ignored when using GitHub Copilot provider — All Premium Requests billed to orchestrator model](https://github.com/anomalyco/opencode/issues/20859) | Another Copilot billing bug: subagents silently fall back to the expensive orchestrator model, inflating costs. | 5 comments, 0 👍 — financially impactful but lower visibility. |

---

## 4. Key PR Progress

| # | PR | What's Happening |
|---|----|------------------|
| **#22359** | [core: effectify Env service](https://github.com/anomalyco/opencode/pull/22359) | Converts `Env` to a fully Effect-TS service to eliminate AsyncLocalStorage-related Node errors. Infrastructure refactor. |
| **#22361** | [hook for compaction continue logic](https://github.com/anomalyco/opencode/pull/22361) | Adds a vouched hook to control the "continue" injection after compaction — directly targets #15533-style infinite loops. |
| **#22357** | [add experimental question HttpApi slice](https://github.com/anomalyco/opencode/pull/22357) | New `/experimental/httpapi/question` endpoint with Effect Schema boundaries; paves the way for external integrations. |
| **#21415** | [fix(copilot): Cache copilot plugin unblock UI thread and improve startup times](https://github.com/anomalyco/opencode/pull/21415) | Caches Copilot provider setup and moves it off the main thread, fixing the TUI freeze on launch. |
| **#22355** | [feat(shell-job): add isolated shell job service](https://github.com/anomalyco/opencode/pull/22355) | Introduces a background `ShellJob` Effect service with disk-backed spooling under `.opencode/jobs/`. Enables long-running tasks. |
| **#22356** | [fix grep exact file path searches](https://github.com/anomalyco/opencode/pull/22356) | Restores ripgrep exact-file-path matching; merged quickly as a clean regression fix. |
| **#22326** | [fix: prune LSP clients for deleted roots](https://github.com/anomalyco/opencode/pull/22326) | Cleans up zombie LSP processes when workspace roots are deleted instead of waiting for full instance teardown. |
| **#22079** | [feat(app): add markdown preview/source toggle for file tabs](https://github.com/anomalyco/opencode/pull/22079) | Web UI gets a Preview ↔ Source toggle for `.md` files, continuing earlier viewer improvements. |
| **#9871** | [feat: add /reload slash command](https://github.com/anomalyco/opencode/pull/9871) | Hot-reloads `opencode.jsonc`, plugins, and MCP servers without restarting the TUI — long-awaited UX win. |
| **#22296** | [fix: authoritative managed-settings.json applied after all user config](https://github.com/anomalyco/opencode/pull/22296) | Closes two enterprise-policy bypass vectors where env vars could override managed deny rules. |

---

## 5. Feature Request Trends

1. **Context Transparency & Control** — Users repeatedly ask for `/context`-style visibility (#6152), configurable compaction thresholds (#8140), and manual compaction triggers. Cost and predictability are the drivers.
2. **Billing & Model Attribution Accuracy** — Copilot integration issues dominate: correct "agent" vs "user" request labeling (#8030), subagent model respect (#20859), and premium-request attribution.
3. **Windows Hardening** — TUI rendering, MCP timeouts, Defender false positives, and post-compaction stalls are all clustered on Windows, indicating a platform reliability gap.
4. **Web UI File Editing** — Requests for in-UI file edits (#11501), Jupyter notebook support (#11409), and markdown preview toggles (#22079) show a push toward making the web interface a first-class workspace.
5. **Enterprise & Automation Surfaces** — Durable event export (#19567), managed-settings enforcement (#22296), and `opencode run` stability (#17516) point to B2B/CI adoption needs.

---

## 6. Developer Pain Points

- **Copilot Cost Surprises** — The combination of #8030 and #20859 means users cannot trust OpenCode to bill the correct model or initiator type, making budget management impossible.
- **Compaction Regressions** — A cluster of issues (#15533, #11301, #17911) shows auto-compaction is fragile: infinite loops, Windows stalls, and thinking-block corruption on Opus 4.6.
- **Windows as a Second-Class Citizen** — Garbled terminal output (#22261), Defender blocks (#22300), local MCP timeouts (#22310), and post-update display bugs (#21672) all hit Windows users disproportionately.
- **Non-Interactive Reliability** — `opencode run` hangs (#17516) and bash-tool environment inheritance gaps (#2863) block headless/CI workflows.
- **Permission & Security Defaults** — The ongoing tension between frictionless agent autonomy and safe defaults (#2632) remains unresolved for security-minded teams.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-14

## 1. Today's Highlights
Two fresh releases landed in the last 24 hours (v0.67.0 and v0.67.1), both introducing lightweight anonymous telemetry to help the team gauge per-version adoption. The issue tracker saw heavy activity with 50 updated issues and 19 pull requests, dominated by TUI rendering fixes, provider authentication expansions, and extension-system improvements.

---

## 2. Releases

| Version | Summary |
|--------|---------|
| **v0.67.1** | Patch release following v0.67.0. |
| **v0.67.0** | Interactive mode now sends an anonymous install/update telemetry ping to `https://pi.dev/install?version=x.y.z` after writing `lastChangelogVersion` to `settings.json`. The goal is to give the maintainers a reliable per-version usage signal. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| **#3094** | [Loader spinner ticking + tall ui.custom dialog → heavy flickering](https://github.com/badlogic/pi-mono/issues/3094) | TUI extensions that exceed viewport height trigger excessive redraws, causing severe visual flickering during permission gates or questionnaires. | 5 comments; actively discussed with a linked PR (#3105) addressing offscreen redraws. |
| **#2988** | [Multiline content sends each line separately](https://github.com/badlogic/pi-mono/issues/2988) | Pasting rich/multiline content from browsers fractures into individual messages, breaking workflow for a bug that has persisted across multiple releases. | 4 comments, 1 👍; recently closed. |
| **#2850** | [`/exit` command documented but not implemented](https://github.com/badlogic/pi-mono/issues/2850) | A simple but sharp UX papercut: README lists `/exit` alongside `/quit`, yet only `/quit` works. | 4 comments; closed after implementation. |
| **#3115** | [`@latest` ref on git packages treated as static pin](https://github.com/badlogic/pi-mono/issues/3115) | Installing extensions with `@latest` permanently freezes the package at that snapshot, making `pi update` a no-op. Surprising behavior for users expecting rolling updates. | 3 comments; closed quickly. |
| **#3112** | [Tool arguments not validated in Cloudflare Workers](https://github.com/badlogic/pi-mono/issues/3112) | A regression from #2395 skips `validateToolArguments` in Cloudflare Workers, letting malformed LLM tool calls reach execution unchecked. | 3 comments; closed with fix. |
| **#3103** | [Markdown links should be clickable via OSC 8](https://github.com/badlogic/pi-mono/issues/3103) | Modern terminals support OSC 8 hyperlinks, but Pi's Markdown renderer only styles links without making them clickable. Quality-of-life gap for terminal-native users. | 3 comments; closed after PR #3102 merged. |
| **#3088** | [Allow passing inline extension factories to `main()`](https://github.com/badlogic/pi-mono/issues/3088) | The SDK exposes `extensionFactories`, but `main()` does not—forcing CLI harness builders to reimplement core bootstrapping logic. | 3 comments; open with PR #3099 in flight. |
| **#2921** | [Custom models with new IDs don't merge into built-in providers](https://github.com/badlogic/pi-mono/issues/2921) | Users adding custom models to built-in providers (e.g., OpenRouter) find that only existing IDs merge; new IDs are silently dropped from `--list-models`. | 3 comments; open, with PR #3072 addressing it. |
| **#3057** | [Detached bash child processes leak as orphans when terminal is closed](https://github.com/badlogic/pi-mono/issues/3057) | SIGHUP/SIGTERM leaves bash-spawned children reparented to PID 1. One user reported 811 orphaned Pi processes consuming ~90 GB RAM. | 2 comments; open and serious for long-running sessions. |
| **#3108** | [Session becomes unrecoverable when model returns tool call with empty name](https://github.com/badlogic/pi-mono/issues/3108) | A single malformed tool call poisons session history forever, causing every subsequent request to 400. No user-facing recovery path exists. | 1 comment; open, flagged as critical reliability bug. |

---

## 4. Key PR Progress

| # | PR | Feature / Fix |
|---|-----|---------------|
| **#2989** | [Fix Ctrl+Alt key matching in tmux](https://github.com/badlogic/pi-mono/pull/2989) | Resolves incorrect key parsing for `ctrl+alt` combinations under tmux, unblocking common muscle-memory shortcuts like "delete word backwards." |
| **#3125** | [feat(bedrock): support Bearer token auth for Converse API](https://github.com/badlogic/pi-mono/pull/3125) | Adds Bearer token authentication for AWS Bedrock, enabling users with API keys but no IAM credentials to use the provider. |
| **#3116** | [Add configurable `sourceInfoStyle` setting for autocomplete tags](https://github.com/badlogic/pi-mono/pull/3116) | Lets users control verbosity of source-info tags in slash-command autocomplete, reclaiming horizontal space for command descriptions. |
| **#3111** | [feat(tui): add super keybinding support for kitty protocol](https://github.com/badlogic/pi-mono/pull/3111) | Extends Kitty keyboard protocol support to recognize `super` modifier keybindings (`super+k`, `super+enter`, etc.). |
| **#3102** | [feat(tui): wrap markdown links in OSC 8 hyperlink sequences](https://github.com/badlogic/pi-mono/pull/3102) | Makes Markdown-rendered links clickable in OSC 8-capable terminals (Kitty, iTerm2, Ghostty, Windows Terminal, etc.). |
| **#3106** | [fix(tui): no trailing spaces with no bg color](https://github.com/badlogic/pi-mono/pull/3106) | Strips trailing whitespace from copied TUI output unless a background color is present, fixing broken bash line continuations on paste. |
| **#3105** | [fix(tui): skip full redraw when only offscreen lines change](https://github.com/badlogic/pi-mono/pull/3105) | Targets #3094's flickering by avoiding full redraws for offscreen content changes in tall TUI extensions. |
| **#3072** | [fix(coding-agent): custom models for built-in providers and list-models error surfacing](https://github.com/badlogic/pi-mono/pull/3072) | Fixes custom-model merging for built-in providers and surfaces errors during `--list-models` instead of swallowing them. |
| **#3099** | [feat(coding-agent): accept inline extension factories in `main()`](https://github.com/badlogic/pi-mono/pull/3099) | Closes #3088 by threading `extensionFactories` through `main()`, reducing boilerplate for custom CLI harnesses. |
| **#3081** | [Add local Ollama and LM Studio support](https://github.com/badlogic/pi-mono/pull/3081) | Auto-detects Ollama (port 11434) and LM Studio (port 1234) in the OpenAI completions adapter and applies compatibility settings for out-of-the-box local LLM usage. |

---

## 5. Feature Request Trends

- **Extension SDK ergonomics**: Multiple requests to reduce friction when building custom CLI harnesses and extensions—e.g., passing `extensionFactories` to `main()` (#3088 / #3099), branching from genesis (#3130), and adding an `after_provider_response` hook (#3128).
- **Terminal UX polish**: Strong demand for better TUI behavior—clickable links (#3103), copy-friendly formatting (#2033 / #3106), configurable autocomplete density (#3052), and tmux/kitty key protocol improvements (#2989 / #3111).
- **Provider flexibility & local models**: Requests for broader auth options (Bedrock Bearer tokens #3125), local server auto-detection (Ollama/LM Studio #3081), and correct handling of provider-specific routing/cost fields (#2904, #3132).
- **Safety & sandboxing**: Interest in sandboxed execution modes (#3124) and better validation of tool calls (#3112, #3131, #3108).

---

## 6. Developer Pain Points

- **TUI rendering instability**: Flickering (#3094 / #3105), spinner scrollback leaks (#3083), and trailing whitespace on copy (#2033 / #3106) are recurring sources of daily friction.
- **Session reliability**: Orphaned process leaks (#3057) and unrecoverable sessions from malformed tool calls (#3108) undermine trust in long-running or production-adjacent usage.
- **Configuration surprises**: `@latest` pinning silently (#3115), custom models not appearing in built-ins (#2921), and missing `/exit` (#2850) all create "it should just work" moments that don't.
- **tmux/terminal compatibility**: Warnings and keybinding issues inside tmux (#3098, #2989, #2401) suggest a significant subset of users run Pi in multiplexed environments that need first-class support.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-14

## 1. Today's Highlights

Qwen Code shipped **v0.14.4** with CJK word segmentation improvements and a critical VS Code Companion fix for stale ACP sessions. Meanwhile, the community is actively pushing on **loop detection** and **startup performance**—two long-standing pain points—with multiple PRs merged and opened in the last 24 hours.

---

## 2. Releases

### [v0.14.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.4)
- **feat(cli):** CJK word segmentation and Ctrl+arrow navigation optimization — improves CLI usability for Chinese, Japanese, and Korean users ([#2942](https://github.com/QwenLM/qwen-code/pull/2942))
- **fix(vscode):** Forces a fresh ACP session on `new-session` action, resolving stale-session bugs in the IDE Companion ([#2874](https://github.com/QwenLM/qwen-code/pull/2874))

*Preview and nightly builds (2026-04-13) carried the same changes.*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|--------------|
| [#1922](https://github.com/QwenLM/qwen-code/issues/1922) | **Edit tool fails to modify files in latest version** — *CLOSED* | A regression in v0.10.5 broke Python file edits. 16 comments show this was a high-visibility blocker, now resolved. |
| [#2973](https://github.com/QwenLM/qwen-code/issues/2973) | **Poor system prompt adherence (对system prompt的遵循很差)** | Core reliability issue: model ignores instructions. 6 comments, no resolution yet. |
| [#1149](https://github.com/QwenLM/qwen-code/issues/1149) | **How to read PDF files?** | Long-standing feature gap. Users expect native PDF ingestion like competing tools. 5 comments since Dec 2025. |
| [#3037](https://github.com/QwenLM/qwen-code/issues/3037) | **`qwen3.6-plus` listed in `/model` but API rejects it** — *CLOSED* | Model discovery out of sync with backend availability. Fixed quickly after 4 comments. |
| [#3144](https://github.com/QwenLM/qwen-code/issues/3144) | **Terminal scroll jumps rapidly during agent execution** | Severe UX regression in streaming output. Makes CLI unusable during long runs. |
| [#3169](https://github.com/QwenLM/qwen-code/issues/3169) | **Typing `exit` or `quit` should quit the utility** — *CLOSED* | Small but expected UX parity with Claude Code / Copilot CLI. Closed with implementation. |
| [#2247](https://github.com/QwenLM/qwen-code/issues/2247) | **JetBrains IDEA plugin missing; ACP is hard to use** | Ecosystem expansion request. JetBrains support is a recurring theme for IDE coverage. |
| [#3137](https://github.com/QwenLM/qwen-code/issues/3137) | **Replace `fdir` with `git ls-files` + `ripgrep`** | Performance and accuracy improvement for `@` file search in large repos. Well-scoped community proposal. |
| [#2342](https://github.com/QwenLM/qwen-code/issues/2342) | **Add `/undo` command** | Basic CLI safety feature expected in all agentic coding tools. Surprisingly still missing. |
| [#3233](https://github.com/QwenLM/qwen-code/issues/3233) | **OAuth fails (email, GitHub, Google)** | Auth breakage blocking new user onboarding entirely. Zero comments suggests it may be under triage. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#3100](https://github.com/QwenLM/qwen-code/pull/3100) | **Optimize compact mode UX** | Adds `Ctrl+O` discoverability, settings sync, and safety guards for the compact UI mode. |
| [#3237](https://github.com/QwenLM/qwen-code/pull/3237) | **Fix build: invoke `tsx` via `node --import`** | Resolves bun compatibility issue in build scripts by bypassing `npx` wrapper. |
| [#2936](https:///QwenLM/qwen-code/pull/2936) | **Implement fork subagent for context sharing** | P0 feature: implicit fork inherits parent conversation context and shares prompt cache. Major architecture change. |
| [#3236](https://github.com/QwenLM/qwen-code/pull/3236) | **Enhanced loop detection** | Adds stagnation + validation-retry checks, plus EAGAIN pty fixes. Replaces closed #3176. |
| [#3232](https://github.com/QwenLM/qwen-code/pull/3232) | **Add startup performance profiler** | Instruments `main()` with 7 checkpoints, outputs JSON to `~/.qwen/startup-profile/`. Addresses P1 performance initiative. |
| [#3178](https://github.com/QwenLM/qwen-code/pull/3178) | **Detect tool validation retry loops** | Prevents infinite retry loops when schema validation fails repeatedly (e.g. malformed `ask_user_question`). |
| [#2592](https://github.com/QwenLM/qwen-code/pull/2592) | **VSCode Companion: `/export` session command** | Brings CLI-parity session export to the IDE with native save/open UX. |
| [#2550](https://github.com/QwenLM/qwen-code/pull/2550) | **Fix VS Code input lag in long conversations** | Memoizes message list rendering to eliminate 5+ second keystroke delays. |
| [#3229](https://github.com/QwenLM/qwen-code/pull/3229) | **Attribute `/stats` rows to originating subagent** | Improves cost/usage observability by tracing API calls to `main` vs. subagent. |
| [#3087](https://github.com/QwenLM/qwen-code/pull/3087) | **Managed auto-memory and auto-dream system** | Introduces persistent, queryable memory across sessions via autonomous background extraction and consolidation. |

---

## 5. Feature Request Trends

1. **Session management & safety** — `/undo`, named/chat saved sessions ([#3190](https://github.com/QwenLM/qwen-code/pull/3190)), conversation indexing ([#3234](https://github.com/QwenLM/qwen-code/issues/3234)), and history rollback ([#3186](https://github.com/QwenLM/qwen-code/issues/3186)) are heavily requested.
2. **IDE ecosystem expansion** — JetBrains plugin ([#2247](https://github.com/QwenLM/qwen-code/issues/2247)) and GitHub Copilot model support ([#3128](https://github.com/QwenLM/qwen-code/issues/3128)) keep surfacing.
3. **File & context handling** — PDF reading ([#1149](https://github.com/QwenLM/qwen-code/issues/1149)), `git ls-files` integration ([#3137](https://github.com/QwenLM/qwen-code/issues/3137)), and better system-prompt adherence ([#2973](https://github.com/QwenLM/qwen-code/issues/2973)).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Looping / runaway agents** | Multiple issues ([#3238](https://github.com/QwenLM/qwen-code/issues/3238), [#2273](https://github.com/QwenLM/qwen-code/issues/2273)) and active PRs ([#3236](https://github.com/QwenLM/qwen-code/pull/3236), [#3178](https://github.com/QwenLM/qwen-code/pull/3178)) show this is a top reliability concern. |
| **Startup & runtime performance** | P1 issues ([#3011](https://github.com/QwenLM/qwen-code/issues/3011), [#3219](https://github.com/QwenLM/qwen-code/issues/3219)) and profiler PRs ([#3232](https://github.com/QwenLM/qwen-code/pull/3232)) indicate performance is now a formal initiative. |
| **VS Code Companion polish** | Hook misalignment ([#3108](https://github.com/QwenLM/qwen-code/issues/3108)), input lag ([#2550](https://github.com/QwenLM/qwen-code/pull/2550)), tab width bugs ([#2873](https://github.com/QwenLM/qwen-code/issues/2873)), and stale sessions show the IDE path still lags CLI maturity. |
| **Auth & quota friction** | OAuth failures ([#3233](https://github.com/QwenLM/qwen-code/issues/3233)) and free-tier policy confusion ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)) create onboarding friction. Docs were updated to point users to OpenRouter/Fireworks ([#3217](https://github.com/QwenLM/qwen-code/pull/3217)). |
| **Missing "basic" CLI affordances** | No `exit`/`quit` (now fixed), no `/undo`, no PDF support — gaps that competitors already fill. |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*