# AI CLI Tools Community Digest 2026-03-22

> Generated: 2026-03-22 00:08 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Cross-Comparison Report — 2026-03-22

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive six-player market with distinct architectural philosophies. Claude Code and OpenAI Codex lead in enterprise adoption but struggle with reliability regressions and token economics. Gemini CLI and Qwen Code are rapidly iterating on agentic workflows with structured SDD approaches and context compression innovations. GitHub Copilot CLI and Kimi CLI occupy narrower niches—Copilot as a VS Code companion with emerging autonomy concerns, Kimi as a transparency-focused challenger addressing the "black box" critique. All tools now grapple with the tension between autonomous agent capabilities and user control, with context management and terminal stability emerging as universal pain points.

---

## 2. Activity Comparison

| Tool | Issues (Active/Hot) | PRs (Active) | Releases (24h) | Activity Level |
|------|---------------------|--------------|----------------|----------------|
| **Claude Code** | 10 hot, 5+ related scrolling issues | 10 open (4 plugin-focused) | None | 🔴 Very High |
| **OpenAI Codex** | 10 hot, 180-comment token burn thread | 10 open (architecture refactoring) | 2 alphas (0.117.0-a7/a8) | 🔴 Very High |
| **Gemini CLI** | 10 tracked, lower engagement | 10 open (security + SDD core) | 1 nightly (v0.36.0) | 🟡 Moderate-High |
| **GitHub Copilot CLI** | 10 active, 1 critical UX regression | 0 updated | None | 🟡 Moderate |
| **Kimi CLI** | 9 active, 1 PR | 1 (thinking stream) | None | 🟢 Emerging |
| **OpenCode** | 10 hot, auth crisis + 4 Effect PRs | 10 open (systematic refactoring) | None | 🔴 Very High |
| **Qwen Code** | 10 open, 1 critical OOM | 10 ready (netbrah contributor burst) | 1 nightly (v0.13.0) | 🔴 Very High |

*Note: "Very High" indicates >10 active items with critical-path issues or architectural work; "Emerging" indicates smaller volume but focused thematic development.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|-------------|-------|--------------------------|
| **Context/Token Management** | Claude Code, OpenAI Codex, OpenCode, Qwen Code | File-backed `/compact` (Claude #17428), compaction visibility (Codex #10336), configurable thresholds (OpenCode #11314, #15871), pre-flight trimming (Qwen #2571) |
| **Terminal Stability** | Claude Code, OpenAI Codex, OpenCode, Qwen Code, Copilot CLI | Scroll position jumping (Claude #33814, #33367), Zellij truncation (Codex #2558), tmux breakage (OpenCode #16351), PTY EBADF (Qwen #2555), Windows flicker (Copilot #1202) |
| **Agentic/Async Execution** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code | True async subagents (OpenCode #5887), task DAGs replacing Markdown (Gemini #23320), parallel tool calls (Qwen #2569), YOLO mode fixes (Qwen #2522) |
| **Remote/Headless Workflows** | Claude Code, OpenAI Codex, Copilot CLI, Kimi CLI | Remote Control failures (Claude #28758), desktop remote dev (Codex #10450), mobile attach (Copilot #1979), network resilience (Kimi #1540) |
| **Project-Level Configuration** | Claude Code, OpenAI Codex, Gemini CLI, Kimi CLI | Cowork folder restrictions (Claude #24964), workspace `config.toml` (Codex #2554), memory routing global vs. project (Gemini #22819), project MCP config (Kimi #1365) |
| **Security/Transparency** | Claude Code, Gemini CLI, Kimi CLI, OpenCode | Deny rules bypassed (Claude #8961), prompt injection hardening (Gemini #23221), full command logging (Kimi #1539), privacy leakage (OpenCode #10416) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Technical Approach | Target User |
|-----------|---------|-------------------|-------------|
| **Agent Architecture** | Gemini CLI (SDD/Task DAGs), Qwen Code (parallelization) | Structured, stateful planning with explicit tracker integration; batch/parallel tool execution | Engineering teams with formal development processes |
| **Local-First/Privacy** | OpenCode, Kimi CLI | External provider flexibility, local LLM support, thinking stream transparency | Privacy-conscious developers, air-gapped environments |
| **Enterprise Integration** | Claude Code, OpenAI Codex | Cowork workspaces, VS Code parity, sandbox security | Large orgs with existing Anthropic/OpenAI contracts |
| **Ecosystem Lock-in** | GitHub Copilot CLI | Deep GitHub/VS Code integration, skill system | Existing Copilot subscribers, Microsoft shops |
| **Reliability Engineering** | Qwen Code | Defensive programming: retry logic, context masking, OOM prevention | Production-hardened automation users |

**Key Divergence**: Claude Code and Codex prioritize * breadth of integration* (MCP, plugins, IDE parity) at cost of stability; Gemini and Qwen prioritize *structural correctness* of agent workflows; OpenCode and Kimi prioritize *user sovereignty* and observability.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Established, Strained** | Claude Code, OpenAI Codex | High issue volume (100+ comments on single issues), regression patterns, architectural debt visible in plugin-based fixes vs. core solutions |
| **Rapidly Iterating** | Gemini CLI, Qwen Code | Nightly releases, systematic SDD/Effect refactoring, contributor bursts (netbrah: 12 PRs), lower absolute issue count but focused on structural improvements |
| **Niche/Growing** | OpenCode, Kimi CLI | Smaller volume but thematic coherence (Effect architecture, transparency); auth crises (OpenCode) and onboarding gaps (Kimi) indicate growth-phase challenges |
| **Maintenance Mode** | GitHub Copilot CLI | Zero PR activity, reactive issue management, feature parity gaps with IDE extension |

**Velocity Signal**: Qwen Code's `netbrah` contributor and Gemini's SDD workstream show concentrated technical investment. Claude Code's plugin-based scroll fix (#35683) vs. Qwen's `structuredClone` elimination (#2568) illustrates maturity difference: workarounds vs. root-cause fixes.

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Context Compression as Core Competency** | 4+ tools investing in configurable thresholds, masking, pre-flight trimming | Token economics now primary selection criterion; expect commoditization of "unlimited context" claims |
| **Agent Determinism > Raw Capability** | YOLO mode fixes, plan mode state machines, tool priority configuration | Users prioritizing predictable automation over impressive demos; reliability engineering differentiates |
| **TUI Stability as Table Stakes** | 5+ tools with active terminal compatibility issues | Cross-platform terminal handling remains unsolved; expect continued fragmentation (musl, Windows Terminal, multiplexer-specific bugs) |
| **Transparency/Explainability Demand** | Streaming thinking (Kimi), compaction visibility (Codex), full command logging (Kimi) | "Black box" critique driving observable agent internals; trust architecture becoming feature |
| **Configuration Hierarchy Maturity** | Global → project → session scoping across 4 tools | Multi-tenant, CI-friendly tooling requires environment-aware config; global state considered technical debt |
| **Structured Agent Protocols** | SDD task DAGs (Gemini), AGENTS.md standardization (Claude #37241), skill systems (Copilot, Qwen) | Informal agent behavior giving way to explicit, versionable, shareable specifications |

---

*Report compiled from 7 community digests covering 69 active issues and 52 pull requests. Data current as of 2026-03-22.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-22 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Functionality | Status | Discussion Focus |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Prevents typographic quality issues in AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment | 🟡 Open | Addresses universal document generation pain point; creator notes "these issues affect every document Claude generates" |
| 2 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skills for evaluating Claude Skills across 5 quality dimensions and security posture | 🟡 Open | First comprehensive quality tooling for the Skills ecosystem itself |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** (improved) | Revised for clarity and single-conversation actionability | 🟡 Open | Community focus on making skills more executable vs. documentation-heavy |
| 4 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | Integrates SAP's open-source tabular foundation model for predictive analytics on business data | 🟡 Open | Enterprise ERP integration; bridges Claude with specialized tabular AI |
| 5 | **[system documentation](https://github.com/anthropics/skills/pull/95)** | Comprehensive evidence management system docs with flowcharts and architecture | 🟡 Open | Infrastructure/documentation skill for complex systems |
| 6 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | Community health improvement addressing 25% GitHub community health score | 🟡 Open | Addresses #452; meta-improvement for contributor onboarding |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 10-step workflow for identifying orphaned code, unused files, documentation gaps, infrastructure bloat | 🟡 Open | Technical debt management at scale |
| 8 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument text creation, template filling, and ODT-to-HTML parsing | 🟡 Open | LibreOffice/enterprise document workflow integration |

---

## 2. Community Demand Trends (From Issues Analysis)

| Trend | Evidence | Implied Skill Needs |
|:---|:---|:---|
| **Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍): "anthropic/" namespace impersonation risk; [#412](https://github.com/anthropics/skills/issues/412) agent-governance proposal | Agent governance, skill provenance verification, permission sandboxing |
| **Skill Creation Tooling** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments): skill-creator is "developer documentation, not operational skill"; [#532](https://github.com/anthropics/skills/issues/532): ANTHROPIC_API_KEY blocks enterprise users | Enterprise-friendly skill authoring, token-efficient skill templates |
| **Memory & Context Persistence** | [#629](https://github.com/anthropics/skills/pull/629) session-memory; [#154](https://github.com/anthropics/skills/pull/154) shodh-memory | Cross-session technical context, compaction-resistant memory |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): "Expose Skills as MCPs"; [#369](https://github.com/anthropics/skills/issues/369) MCP Apps support | Skills↔MCP bridge, protocol-native skill packaging |
| **Evaluation & Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (3 comments, 6 👍): 0% skill trigger rate in automated testing | Skill testing frameworks, deterministic trigger validation |
| **Enterprise Integration** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock support; duplicate skills issue [#189](https://github.com/anthropics/skills/issues/189) (4 comments, 5 👍) | Multi-platform deployment, skill deduplication, SSO/auth compatibility |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon | Blocker Risk |
|:---|:---|:---|:---|
| **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | Addresses critical context compaction problem; "zero dependencies" design; recent activity (updated 2026-03-17) | None apparent |
| **avoid-ai-writing** | [#535](https://github.com/anthropics/skills/pull/535) | Highly specific use case (21 detection patterns, 43 replacements); strong editorial demand | May need validation data |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | Clear activation triggers; fills enterprise workflow gap; recently updated (2026-03-20) | Scope breadth vs. specificity |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | Media generation is high-demand; Imagen 3.0/Veo 3.1 integration | External API dependencies |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Novel economic primitive for AI services; natural language payment interface | Niche blockchain adoption |
| **flutter-theme-factory** | [#368](https://github.com/anthropics/skills/pull/368) | 12 pre-built themes with full theming system; mobile development demand | Platform specificity |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, production-grade skill infrastructure** — spanning security boundaries (namespace verification), reliable execution (testing/evaluation), enterprise compatibility (SSO, Bedrock, no hardcoded API keys), and context persistence across sessions — rather than merely more domain-specific skills.

---

*Report generated from 50 PRs and 50 Issues in anthropics/skills. All links: https://github.com/anthropics/skills*

---

# Claude Code Community Digest — 2026-03-22

## Today's Highlights

The community is actively addressing a persistent terminal scrolling regression affecting multiple platforms, with a new plugin-based fix emerging in PR #35683. Meanwhile, Cowork's folder picker restrictions and ARM processor support remain the most engaged issues, reflecting strong demand for flexible workspace access and broader hardware compatibility.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#24964](https://github.com/anthropics/claude-code/issues/24964) **Cowork folder picker blocks external directories and symlinks** | Critical workflow blocker for developers organizing projects outside home directories or using symlinked workspaces; affects both Windows and macOS | 98 comments, 132 👍 — highest engagement; users sharing workarounds involving bind mounts |
| [#30864](https://github.com/anthropics/claude-code/issues/30864) **ARM processor support for Cowork** | Blocks adoption on Apple Silicon Macs and ARM Linux servers; increasingly critical as x86 declines in developer machines | 53 comments, 54 👍; community noting this limits enterprise deployments |
| [#17428](https://github.com/anthropics/claude-code/issues/17428) **Enhanced /compact with file-backed summaries** | Proposes Cursor-like persistent context to reduce token pressure in long sessions; addresses core memory limitation | 39 comments, 83 👍; strong technical discussion on implementation tradeoffs |
| [#33969](https://github.com/anthropics/claude-code/issues/33969) **Per-turn tool call limit regression** | Breaks agentic MCP/SSH workflows by throttling multi-tool operations; impacts automation-heavy users | 34 comments, 35 👍; frustration over undocumented limits |
| [#34413](https://github.com/anthropics/claude-code/issues/34413) **API rate limit errors** | Recurring operational pain point affecting reliability at scale | 29 comments; marked duplicate suggesting known systemic issue |
| [#33814](https://github.com/anthropics/claude-code/issues/33814) **Forced scroll-to-top during output** | Severely degrades readability of long responses; marked as regression | 26 comments, 21 👍; multiple "me too" confirmations across terminals |
| [#33367](https://github.com/anthropics/claude-code/issues/33367) **Scroll position jumps during upward scrolling** | Related scrolling jitter making conversation history navigation unusable | 21 comments, 45 👍; users describing as "unusable" for review workflows |
| [#28758](https://github.com/anthropics/claude-code/issues/28758) **Remote Control mobile connection failures** | Blocks mobile-to-desktop workflow for on-the-go development | 23 comments, 30 👍; authentication and network debugging ongoing |
| [#10835](https://github.com/anthropics/claude-code/issues/10835) **Terminal scrolling infinite loop** | Long-standing TUI stability issue causing uninterruptible behavior | 19 comments, 15 👍; has reproduction, awaiting fix |
| [#8961](https://github.com/anthropics/claude-code/issues/8961) **Deny rules in settings ignored — security vulnerability** | Active security concern where `.claude/settings.local.json` restrictions bypassed | 17 comments, 18 👍; needs urgent attention for enterprise compliance |

---

## Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| [#37241](https://github.com/anthropics/claude-code/pull/37241) **agents-md plugin: auto-load AGENTS.md** | Cross-tool compatibility with Cursor/OpenAI Codex project instructions; addresses 246-comment thread #6235 | Open |
| [#37236](https://github.com/anthropics/claude-code/pull/37236) **tmp-cwd-cleanup plugin** | Fixes memory leak from orphaned `/tmp/claude-*-cwd` files (#8856) | Open |
| [#35683](https://github.com/anthropics/claude-code/pull/35683) **scroll-fix plugin** | Community fix for terminal scroll-to-top regression with Ctrl+6 freeze toggle | Open, updated |
| [#37159](https://github.com/anthropics/claude-code/pull/37159) **Persistent memory and session management** | Complete agent memory system with context windowing and learning extraction | Open |
| [#37084](https://github.com/anthropics/claude-code/pull/37084) **GitHub API resilience: retry, timeout, rate-limit handling** | Shared utility replacing 4 inline implementations; +52 tests | Open |
| [#37082](https://github.com/anthropics/claude-code/pull/37082) **agentmarkup plugin** | AI-readable website metadata setup (`llms.txt`, JSON-LD, crawler directives) | Open |
| [#33070](https://github.com/anthropics/claude-code/pull/33070) **reframe plugin** | Debugging/design problem-solving via cognitive frameworks with codebase context | Open, updated |
| [#36925](https://github.com/anthropics/claude-code/pull/36925) **hookify: scope stop/prompt rules correctly** | Prevents unrelated tool hooks from evaluating on PreToolUse/PostToolUse | Open |
| [#20381](https://github.com/anthropics/claude-code/pull/20381) **MIT license for .devcontainer** | Legal clarity for devcontainer reuse | Open, stale |
| [#29656](https://github.com/anthropics/claude-code/pull/29656) **Fix GitHub Actions shell injection** | Security hardening via env var isolation; merged then closed | Closed |

---

## Feature Request Trends

1. **Memory & Context Management** — Strong demand for persistent, file-backed conversation summaries (`/compact` enhancements, temporal awareness, session memory systems)

2. **Hardware & Platform Expansion** — ARM support for Cowork, broader OS compatibility

3. **Workspace Flexibility** — Symlink support, external directory access, less restrictive folder pickers

4. **AI/Agent Interoperability** — AGENTS.md standardization, MCP notification integration, machine-readable web metadata

5. **Temporal Awareness** — Timestamps in context, time-between-messages, session continuity across days

---

## Developer Pain Points

| Category | Description | Frequency |
|----------|-------------|-----------|
| **TUI/Scrolling Stability** | Multiple related issues on scroll position jumping, forced top-scroll, and infinite loops — appears to be the most degrading daily experience | Very High (5+ issues, 100+ combined comments) |
| **Permission & Security Model** | `bypassPermissions` ignored, deny rules bypassed, encrypted SSH key handling broken — configuration not respecting user intent | High |
| **Rate Limiting & Reliability** | Undocumented per-turn tool limits, API rate errors, 100% CPU hangs with hooks — operational unpredictability | High |
| **Cowork Restrictions** | Folder picker limitations and missing ARM support blocking adoption for modern development setups | High |
| **Mobile/Remote Workflow** | Remote Control connection failures preventing mobile-desktop continuity | Moderate |
| **Context Window Management** | Irreversible context compaction in Cowork losing conversation history | Emerging |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-22

## 1. Today's Highlights

The Codex team shipped two rapid-fire Rust CLI alphas (0.117.0-alpha.7/8) while community frustration over token consumption in the VS Code extension reached a boiling point with 180 comments on a single issue. Meanwhile, foundational refactoring of context management and app-server APIs dominated the merge queue, signaling preparation for larger architectural changes.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.117.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.8) | Sequential alpha release, no detailed changelog provided |
| [rust-v0.117.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.7) | Preceding alpha in the 0.117 series |

*No substantive release notes were published for either alpha.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Token burn rate remains excessive** after VS Code extension update | Business-tier users reporting rapid quota depletion threatens production adoption; 180 comments indicate widespread impact | 🔥 74 upvotes, active troubleshooting |
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development support for Desktop App** | Critical gap vs. VS Code workflows; blocks migration from browser/remote setups | 414 upvotes, sustained demand since Feb |
| [#2558](https://github.com/openai/codex/issues/2558) | **TUI output truncated in Zellij** | Terminal multiplexer compatibility essential for power users | 94 upvotes, long-running (since Aug 2025) |
| [#10601](https://github.com/openai/codex/issues/10601) | **Sandbox setup fails on Windows** | Blocks Windows CLI adoption; sandbox security is core value prop | 9 upvotes, active debugging |
| [#5957](https://github.com/openai/codex/issues/5957) | **Auto-compaction causes task amnesia** | GPT-5-Codex loses mid-task context, breaking agent reliability | 8 upvotes, enterprise concern |
| [#11011](https://github.com/openai/codex/issues/11011) | **Thread switching latency regression** | Desktop app UX degradation; 10-second delays reported | 8 upvotes, recent regression |
| [#13117](https://github.com/openai/codex/issues/13117) | **Permission fatigue: every file read prompts** | Regression in sandbox UX; Windows-specific | 6 upvotes, workflow blocker |
| [#6403](https://github.com/openai/codex/issues/6403) | **OAuth fails in GitHub Codespaces** | `localhost` redirect breaks cloud dev environments | 6 upvotes, CI/CD impact |
| [#14794](https://github.com/openai/codex/issues/14794) | **Sandbox makes devcontainer workspace appear read-only** | Linux container workflows broken | 1 upvote, niche but severe |
| [#15391](https://github.com/openai/codex/issues/15391) | **CPU pegged at 70%+ on macOS launch** | Performance regression in latest build | Fresh report, needs triage |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#14822](https://github.com/openai/codex/pull/14822) | **Reference turn context state** | Moves reference-turn bookkeeping into dedicated `ReferenceTurnContextState` owned by context manager; enables rollback regression coverage | Open |
| [#15430](https://github.com/openai/codex/pull/15430) | **Model-visible context foundation** | Shared abstraction layer for typed model-visible fragments; contributor contract documentation | Open |
| [#13465](https://github.com/openai/codex/pull/13465) | **Standardize context fragment handling** | Unifies injection around `ModelVisibleContextFragment` and role-based envelopes (`DeveloperContextRole`, `ContextualUserContextRole`) | Open |
| [#13455](https://github.com/openai/codex/pull/13455) | **Turn-scoped ephemeral context** | Replaces IDE/editor context modeling as user input; strips during compaction, preserves in rollouts | Open |
| [#15197](https://github.com/openai/codex/pull/15197) | **Codex Apps sediment file remapping** | Bridges MCP file I/O through OpenAI files flow behind `apps_file_bridge` flag | Open |
| [#15424](https://github.com/openai/codex/pull/15424) | **Refactor codex exec to typed app-server APIs** | Eliminates exec-owned `AuthManager`/`ThreadManager`; routes through in-process app-server client | Open |
| [#15279](https://github.com/openai/codex/pull/15279) | **Label plugins as plugins, suppress duplicate apps** | UI/UX: caps mention lists to 8 rows, distinguishes `[Plugin]` vs `[App]` | Open |
| [#15265](https://github.com/openai/codex/pull/15265) | **Parent-scoped guardian approval review events** | Experimental notifications for command/file/MCP approvals with legacy compatibility aliases | Open |
| [#14835](https://github.com/openai/codex/pull/14835) | **Centralize slash command serialization** | Shared helpers for `tui` and `tui_app_server`; commands own parsing and usage metadata | Open |
| [#15408](https://github.com/openai/codex/pull/15408) | **Async ExecutorFileSystem for config** | Eliminates synchronous `::fs::` reads in core/config; aligns with async loading architecture | Open |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Remote/Cloud Development** | [#10450](https://github.com/openai/codex/issues/10450) (desktop), [#6403](https://github.com/openai/codex/issues/6403) (Codespaces OAuth) | High — 414 upvotes, enterprise blocker |
| **Workspace-level Configuration** | [#2554](https://github.com/openai/codex/issues/2554) (workspace `config.toml`), [#15410](https://github.com/openai/codex/issues/15410) (`CODEX_HOME` auth sharing) | Moderate — CI/programmatic use cases |
| **Context Transparency** | [#10336](https://github.com/openai/codex/issues/10336), [#10986](https://github.com/openai/codex/issues/10986) (compaction visibility), [#5957](https://github.com/openai/codex/issues/5957) (compaction amnesia) | Rising — users want visibility into what model "remembers" |
| **macOS Integration** | [#15373](https://github.com/openai/codex/issues/15373) (custom app handlers), [#15391](https://github.com/openai/codex/issues/15391) (CPU regression) | Niche but vocal |
| **Session/History Management** | [#15368](https://github.com/openai/codex/issues/15368) (session cap increase), [#15349](https://github.com/openai/codex/issues/15349) (history loss on restart) | Emerging reliability concern |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Token Economics & Rate Limits** | [#14593](https://github.com/openai/codex/issues/14593), [#15405](https://github.com/openai/codex/issues/15405) | 🔴 Critical — multiple reports, high engagement |
| **Sandbox UX Friction** | [#13117](https://github.com/openai/codex/issues/13117) (permission spam), [#10601](https://github.com/openai/codex/issues/10601) (Windows setup), [#14794](https://github.com/openai/codex/issues/14794) (read-only false positives) | 🟡 High — security vs. usability tension |
| **Context/State Loss** | [#5957](https://github.com/openai/codex/issues/5957) (compaction amnesia), [#15349](https://github.com/openai/codex/issues/15349) (history loss), [#11006](https://github.com/openai/codex/issues/11006) (drive wipe safety) | 🟡 High — trust erosion in agent autonomy |
| **Performance Regressions** | [#11011](https://github.com/openai/codex/issues/11011), [#15388](https://github.com/openai/codex/issues/15388) (thread switching), [#15391](https://github.com/openai/codex/issues/15391) (CPU spike) | 🟡 High — recent builds showing instability |
| **Terminal/Environment Compatibility** | [#2558](https://github.com/openai/codex/issues/2558) (Zellij), [#15416](https://github.com/openai/codex/issues/15416) (Terminal.app), [#15423](https://github.com/openai/codex/issues/15423) (Defender false positives) | 🟢 Moderate — power-user segment |
| **Windows-First Experience** | [#10601](https://github.com/openai/codex/issues/10601), [#13117](https://github.com/openai/codex/issues/13117), [#14549](https://github.com/openai/codex/issues/14549), [#14794](https://github.com/openai/codex/issues/14794) | 🟡 High — disproportionate friction vs. macOS/Linux |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-22

## Today's Highlights

The nightly build v0.36.0 landed with critical fixes for stale closure data loss in settings loading and foundational work on subagent local execution with tool isolation. Meanwhile, the SDD (Spec-Driven Development) workstream is accelerating with task integration replacing Markdown-based planning, and security hardening continues with a major prompt-injection patch under active review.

---

## Releases

**v0.36.0-nightly.20260321.fc03891a1** ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-nightly.20260321.fc03891a1))
- **Fix:** Lazily load settings in `onModelChange` to prevent stale closure data loss ([#20403](https://github.com/google-gemini/gemini-cli/pull/20403))
- **Feature:** Subagent local execution and tool isolation for improved sandboxing ([#core](https://github.com/google-gemini/gemini-cli/pulls))

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | EPIC investigating whether AST-aware tools can reduce token waste and misaligned reads by precisely targeting method bounds. Could fundamentally improve codebase navigation efficiency. | 4 comments, maintainer-only tracking |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | **Support passing prompt to `/plan`** | UX friction: `/plan` currently forces a separate interaction; inline prompts would enable single-command planning workflows. | 2 comments, 2 👍 |
| [#22822](https://github.com/google-gemini/gemini-cli/issues/22822) | **Refine `/spec setup` for existing `/conductor` migration** | Critical for SDD adoption—needs flexible migration path from legacy `conductor` directory structure. | 2 comments |
| [#20003](https://github.com/google-gemini/gemini-cli/issues/20003) | **Gemini CLI Companion broken in Theia IDE** | IDE integration gaps block enterprise adoption; `/ide` status falsely reports unsupported integration. | 2 comments, 1 👍 |
| [#23230](https://github.com/google-gemini/gemini-cli/issues/23230) | **Plan mode exit doesn't switch model** | `gemini-3-flash-preview` auto-switch fails post-plan confirmation unless interrupted—breaks expected cost/performance optimization. | 1 comment, 1 👍 |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory routing: global vs. project** | Foundation for contextual memory—distinguishing user preferences (`~/.gemini/`) from codebase specifics (`.gemini/`). | 1 comment, 1 👍 |
| [#23320](https://github.com/google-gemini/gemini-cli/issues/23320) | **SDD Phase 3: Tasks Integration** | Replacing `plan.md` checkboxes with native `TrackerService` DAG—core architectural shift for SDD workflow. | 1 comment |
| [#22933](https://github.com/google-gemini/gemini-cli/issues/22933) | **Fix the loop problem** | Agent stuck in circular tool execution loops with session ID policy conflicts—reliability concern. | 1 comment, 1 👍 |
| [#23245](https://github.com/google-gemini/gemini-cli/issues/23245) | **Context-Aware Persistent Policy Approvals** | Security/UX tension: global "Allow for all future sessions" undermines Plan Mode integrity; needs mode-scoped policies. | 0 comments |
| [#23407](https://github.com/google-gemini/gemini-cli/issues/23407) | **BUG: CLI blocks `/mcp` and `--yolo` for personal accounts** | Proxy project `splendid-syntax-pf16k` incorrectly restricts capabilities for `oauth-personal` users; quickly closed but indicates auth routing fragility. | 1 comment, closed |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#23221](https://github.com/google-gemini/gemini-cli/pull/23221) | **Strengthen prompt-injection and backtick defenses** | Security patch for command injection via backtick substitution; supersedes [#23170](https://github.com/google-gemini/gemini-cli/pull/23170) with review-addressed fixes | Open |
| [#23321](https://github.com/google-gemini/gemini-cli/pull/23321) | **Recursive prompter module with dynamic sections** | New `@google/gemini-cli-core` module for composable, context-aware system prompts—enables more sophisticated prompt engineering | Open |
| [#23208](https://github.com/google-gemini/gemini-cli/pull/23208) | **Add `SSH_AUTH_SOCK` to always-allowed env vars** | Enables SSO/ssh-agent workflows without manual approval—common enterprise/DevContainer need | Open |
| [#23179](https://github.com/google-gemini/gemini-cli/pull/23179) | **ACP: separate conversational text from execute tool command** | Refactors tool execution to cleanly separate explanations from commands; fixes MCP payload truncation | Open |
| [#23409](https://github.com/google-gemini/gemini-cli/pull/23409) | **Auto-remove clean Gemini worktrees on exit** | Cleanup automation for Gemini-managed git worktrees; preserves dirty trees with exit summary | Open |
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) | **Voice input with pluggable backend** | Zero-install Gemini transcription + optional local Whisper; long-running feature request | Open, help wanted |
| [#23283](https://github.com/google-gemini/gemini-cli/pull/23283) | **Decode API error messages from raw bytes** | Fixes unreadable `Uint8Array.toString()` error output (e.g., `91,123,10...`) | Open, P1 |
| [#21394](https://github.com/google-gemini/gemini-cli/pull/21394) | **Configurable PTY backend system** | Fallback to POSIX `script` utility when N-API addons fail on musl/static Node.js builds | Open, help wanted |
| [#23203](https://github.com/google-gemini/gemini-cli/pull/23203) | **Record skill activation tool calls in chat history** | Ensures slash-command skill activations persist for model context in multi-turn conversations | Open |
| [#23020](https://github.com/google-gemini/gemini-cli/pull/23020) | **Fix plan mode freeze on state transition** | Closed workaround adding "State Transition Override" directive to prevent 0-token freeze post-plan; indicates deeper state machine issues | Closed |

---

## Feature Request Trends

1. **SDD/Agent Workflow Maturity** — Dominant theme: task DAGs replacing linear Markdown plans, tracker integration, memory routing, and `/spec` migration tooling. The team is actively building toward a structured, stateful agent architecture.

2. **Context-Aware Tooling** — AST-aware file operations, custom exclude patterns ([#22725](https://github.com/google-gemini/gemini-cli/pull/22725)), and context-scoped approvals indicate push toward smarter, less wasteful codebase interaction.

3. **Enterprise/Security Hardening** — Policy granularity, IDE integration robustness, and environment variable handling (SSH, MCP restrictions) are recurring priorities.

4. **Voice & Multimodal Input** — Pluggable voice backends remain a long-term interest with [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) seeking community contribution.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Plan mode reliability** | Model switch failures ([#23230](https://github.com/google-gemini/gemini-cli/issues/23230)), freeze on transition ([#23020](https://github.com/google-gemini/gemini-cli/pull/23020)), exit confirmation UI truncation ([#23271](https://github.com/google-gemini/gemini-cli/issues/23271)) | High |
| **Policy/approval UX friction** | Global approvals undermining Plan Mode ([#23245](https://github.com/google-gemini/gemini-cli/issues/23245)), unexpected tool approvals for tracker tasks ([#23125](https://github.com/google-gemini/gemini-cli/issues/23125)) | Medium-High |
| **IDE integration gaps** | Theia breakage ([#20003](https://github.com/google-gemini/gemini-cli/issues/20003)), `/ide` detection failures | Medium |
| **Auth/proxy routing bugs** | Personal account capability blocks ([#23407](https://github.com/google-gemini/gemini-cli/issues/23407)), 500s in evals ([#23168](https://github.com/google-gemini/gemini-cli/issues/23168)) | Medium |
| **Eval maintainability** | "Bleeding" small project evals, 500-blocking PRs, need for automated impact comments ([#23166](https://github.com/google-gemini/gemini-cli/issues/23166)-[#23169](https://github.com/google-gemini/gemini-cli/issues/23169)) | Medium |
| **Non-interactive mode limitations** | Tracker visualization absent in CI/automation contexts ([#23033](https://github.com/google-gemini/gemini-cli/issues/23033)) | Low-Medium |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-22

---

## 1. Today's Highlights

No new releases dropped in the last 24 hours, but community activity remains intense with **20 active issues** spanning critical UX regressions, autopilot reliability concerns, and model availability gaps. The most pressing matter is a **screen flickering bug on Windows Terminal** (#1202) that has accumulated 37 upvotes and 36 comments, indicating widespread impact. Several users are also reporting **Claude model availability discrepancies** between VS Code and CLI, plus **infinite loop risks in autopilot mode** that can burn through premium request quotas.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#1202: Screen flickers with cursor blink when selecting "No, and tell Copilot what to do differently"](https://github.com/github/copilot-cli/issues/1202) | Severe Windows Terminal UX regression causing visual artifacts and buffer pollution; affects core feedback loop | 🔥 **37 👍, 36 comments** — highest engagement; users confirming repro across PowerShell versions |
| [#1532: Autopilot mode infinite loop when task_complete tool is unavailable](https://github.com/github/copilot-cli/issues/1532) | **Cost impact**: User reports ~20% premium quota consumed before manual cancellation; reliability concern for autonomous workflows | 2 👍, 11 comments; request for usage recovery |
| [#875: Execution failed: CAPIError: Connection error](https://github.com/github/copilot-cli/issues/875) | **Closed** — Cross-platform connectivity failure (WSL + Windows 11); resolution path valuable for similar reports | 12 👍, 16 comments; closure suggests fix deployed |
| [#2082: ctrl+shift+c no longer copies to clipboard on Linux](https://github.com/github/copilot-cli/issues/2082) | Breaking change to standard Linux terminal conventions; impacts muscle memory for power users | 1 👍, 8 comments; workaround identified (ctrl+c, right-click) |
| [#1979: Remote session support for Copilot CLI — attach from mobile / browser](https://github.com/github/copilot-cli/issues/1979) | **Feature request** — Competitive parity with Claude Code's remote sessions; unlocks mobile/headless workflows | 15 👍, strong demand signal |
| [#2045: Claude model available in VS Code but not in copilot-cli](https://github.com/github/copilot-cli/issues/2045) | Model parity gap between IDE and CLI surfaces; blocks users wanting consistent Claude access across tools | 0 👍 but high visibility; documentation gap |
| [#2189: Transient API errors with Claude Opus 4.6](https://github.com/github/copilot-cli/issues/2189) | Specific to latest Claude model; blocks plan-writing workflows with subagent handoffs | 1 👍, early report — monitoring for pattern |
| [#2188: AI model ignores SKILL.md instructions](https://github.com/github/copilot-cli/issues/2188) | **Prompt engineering failure** — Instructions to exclude 'Co-author' trailers systematically ignored; trust issue for custom skills | 0 👍, 2 comments; reproducible behavior |
| [#2161: Personal ~/.agents/skills not loaded inside repository](https://github.com/github/copilot-cli/issues/2161) | Scope inconsistency in skill discovery; breaks local development workflows | 1 👍, 2 comments; workaround unknown |
| [#2203: Allow switching to autopilot mode mid-task](https://github.com/github/copilot-cli/issues/2203) | **Regression** — Pre-v0.0.421 Shift+Tab behavior removed; blocks iterative trust-building workflow | 1 👍, fresh report — likely to gain traction |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

Based on active issues, the community is pushing toward:

| Trend | Evidence |
|-------|----------|
| **Remote/headless session support** | [#1979](https://github.com/github/copilot-cli/issues/1979) — explicit Claude Code parity request |
| **Dynamic mode switching** | [#2203](https://github.com/github/copilot-cli/issues/2203) — mid-task autopilot toggle; workflow flexibility |
| **Skill system improvements** | [#2185](https://github.com/github/copilot-cli/issues/2185) (`/create-skill` command), [#2207](https://github.com/github/copilot-cli/issues/2207) (agent-scoped skills), [#2188](https://github.com/github/copilot-cli/issues/2188) (instruction adherence) |
| **Task lifecycle management** | [#2206](https://github.com/github/copilot-cli/issues/2206) (auto-cleanup idle tasks), [#2202](https://github.com/github/copilot-cli/issues/2202) (`/resume` data loss) |
| **Documentation gaps** | [#2204](https://github.com/github/copilot-cli/issues/2204) (C# LSP setup), [#2194](https://github.com/github/copilot-cli/issues/2194) (`/chronicle` command non-functional) |

---

## 6. Developer Pain Points

| Category | Summary | Top Issues |
|----------|---------|------------|
| **Reliability & cost control** | Autopilot infinite loops causing uncontrolled premium quota consumption; transient API errors blocking workflows | [#1532](https://github.com/github/copilot-cli/issues/1532), [#2189](https://github.com/github/copilot-cli/issues/2189) |
| **UX regressions** | Terminal-specific breaking changes (Windows flicker, Linux copy shortcut); mouse/scroll behavior changes | [#1202](https://github.com/github/copilot-cli/issues/1202), [#2082](https://github.com/github/copilot-cli/issues/2082), [#2205](https://github.com/github/copilot-cli/issues/2205) |
| **Model availability inconsistency** | Claude models present in VS Code Copilot but absent/misbehaving in CLI; creates toolchain fragmentation | [#2045](https://github.com/github/copilot-cli/issues/2045), [#2189](https://github.com/github/copilot-cli/issues/2189) |
| **Skill system trust & scope** | Instructions ignored, personal skills not loading in repos, context bloat from plugin skills | [#2188](https://github.com/github/copilot-cli/issues/2188), [#2161](https://github.com/github/copilot-cli/issues/2161), [#2207](https://github.com/github/copilot-cli/issues/2207), [#2142](https://github.com/github/copilot-cli/issues/2142) |
| **Session persistence fragility** | `/resume` vs `--resume` behavior divergence causing data loss | [#2202](https://github.com/github/copilot-cli/issues/2202) |

---

*Digest compiled from github.com/github/copilot-cli — 2026-03-22*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-22

---

## 1. Today's Highlights

No new releases, but significant community momentum with **9 active issues** and **1 PR** touching core UX concerns: Windows installation reliability, project-level configuration granularity, and real-time observability of the agent's reasoning process. Security and transparency concerns are emerging as a thematic priority.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|------------------|
| [#1513](https://github.com/MoonshotAI/kimi-cli/issues/1513) — Windows install script crashes under default PowerShell execution policy | **Onboarding blocker**: Clean Windows environments fail silently, preventing new user acquisition. No error message = poor DX. | 4 comments, active troubleshooting |
| [#1365](https://github.com/MoonshotAI/kimi-cli/issues/1365) — Project-level MCP/subagents configuration | **Scalability gap**: Global-only config forces repetitive CLI flags per project. Critical for team/CI workflows. | 3 👍, clear use case |
| [#1537](https://github.com/MoonshotAI/kimi-cli/issues/1537) — MCP/Skill tool usage priority configuration | **Agent orchestration**: Overlapping tools create ambiguity; deterministic precedence needed for reliable automation. | Fresh, architectural concern |
| [#1539](https://github.com/MoonshotAI/kimi-cli/issues/1539) — Security: print full commands, reduce `cd` obfuscation | **Trust/transparency**: Truncated commands in logs hinder auditability and security review. | 0 👍 but high-impact topic |
| [#1540](https://github.com/MoonshotAI/kimi-cli/issues/1540) — Generation terminates on unstable networks | **Resilience**: No retry/resume logic wastes tokens and context on flaky connections. | Steam Deck/Linux user report |
| [#1476](https://github.com/MoonshotAI/kimi-cli/issues/1476) — Plan mode state inconsistency | **Reliability**: UI state drift undermines user confidence in agent mode transitions. | Screenshot evidence provided |
| [#1536](https://github.com/MoonshotAI/kimi-cli/issues/1536) — `/title` command for manual session naming | **Organization**: Auto-titles fail for multi-topic sessions; manual override needed for long-running contexts. | Quality-of-life request |
| [#1535](https://github.com/MoonshotAI/kimi-cli/issues/1535) — 100% usage but can still use | **Billing/quota clarity**: Quota enforcement appears inconsistent; raises fairness concerns. | Frustrated tone |
| [#1437](https://github.com/MoonshotAI/kimi-cli/issues/1437) — Enter key appends `[13u` in VS Code terminal *(closed)* | **Terminal compatibility**: Fixed escape sequence handling for IDE-embedded terminals. | Resolved, 1 👍 |

---

## 4. Key PR Progress

| PR | Description | Significance |
|----|-------------|------------|
| [#1538](https://github.com/MoonshotAI/kimi-cli/pull/1538) — Stream thinking content to terminal in real-time | Surfaces the model's reasoning chain (CoT) as it generates, not just final output | **Observability milestone**: Addresses the "black box" critique of agentic tools; enables debugging of tool selection logic and planning failures |

*Only 1 PR updated in tracking window.*

---

## 5. Feature Request Trends

| Theme | Evidence | Implication |
|-------|----------|-------------|
| **Configuration hierarchy** | #1365 (project-level MCP), #1537 (tool priority) | Users need multi-tenant, environment-aware config (global → project → session) |
| **Transparency/auditability** | #1539 (full command logging), #1538 (streaming thinking) | Shift from "trust the agent" to "verify the agent" |
| **Resilience engineering** | #1540 (network retry), #1513 (robust install) | Production-hardening for unreliable environments |
| **Session management** | #1536 (manual titles) | Long-context workflows need better organization primitives |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Windows onboarding friction** | High (#1513) | Silent failures in default security environments block enterprise adoption |
| **Configuration portability** | High (#1365) | Global state forces workarounds for multi-repo workflows |
| **Agent determinism** | Emerging (#1537) | Non-deterministic tool selection breaks reproducible automation |
| **Network resilience gaps** | Medium (#1540) | Token waste and context loss on connection drops |
| **Quota/billing opacity** | Low but sharp (#1535) | Perceived unfairness in enforcement undermines trust |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-22

## Today's Highlights

The OpenCode community is grappling with critical authentication disruptions as Anthropic's OAuth flow returns 429 errors for Pro/Max users, sparking 130+ comments of troubleshooting. Meanwhile, core contributor kitlangton is systematically migrating services to the Effect pattern with four new PRs this weekend, signaling a major architectural refactoring effort. Privacy concerns resurface as users discover session titles are computed externally even with local LLMs.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#18267](https://github.com/anomalyco/opencode/issues/18267) — Claude OAuth broken with 429 errors | **Critical auth outage** affecting Pro/Max users; blocks entire workflow | 130 comments, 60 👍 — highest engagement; users sharing workarounds, demanding urgent fix |
| [#18329](https://github.com/anomalyco/opencode/issues/18329) — Anthropic OAuth 429 on token exchange | **Technical root-cause analysis** with debug logs; distinguishes from generic UI failures | 23 comments, 48 👍 — engineers collaborating on rate-limiting patterns |
| [#10416](https://github.com/anomalyco/opencode/issues/10416) — OpenCode not private by default | **Privacy breach concern**: session titles leak to external servers despite local LLM config | 51 comments, 26 👍 — philosophical debate on "local-first" marketing vs. reality |
| [#16351](https://github.com/anomalyco/opencode/issues/16351) — TUI broken in tmux (solved in 1.2.25) | **Terminal compatibility** regression affecting developer workflows | 24 comments, 13 👍 — confirmed fix validates rapid patch cycle |
| [#5887](https://github.com/anomalyco/opencode/issues/5887) — True Async/Background Sub-Agent Delegation | **Core architecture limitation**: modal sub-agents block primary flow | 14 comments, 54 👍 — high-value feature with sustained 3-month interest |
| [#11314](https://github.com/anomalyco/opencode/issues/11314) — Configurable Context Compaction Threshold | **Control over token management**: hardcoded 75% threshold wastes context window | 13 comments, 13 👍 — power users want granularity for cost/performance tuning |
| [#13838](https://github.com/anomalyco/opencode/issues/13838) — Compaction replay injects fake "What did we do so far?" | **UX papercut**: synthetic messages trigger unwanted model behavior | 10 comments, 3 👍 — subtle but annoying; breaks conversation flow |
| [#15871](https://github.com/anomalyco/opencode/issues/15871) — Auto-compaction triggers at ~200k vs 1M context | **Bug in context window detection**: hardcoded values ignore `context1m: true` | 5 comments, 1 👍 — undermines Claude 3.5's key selling point |
| [#6231](https://github.com/anomalyco/opencode/issues/6231) — Auto-discover models from OpenAI-compatible endpoints | **Local-first UX**: manual model enumeration is friction for Ollama/LM Studio users | 6 comments, 59 👍 — highest 👍/comment ratio; clear demand signal |
| [#18567](https://github.com/anomalyco/opencode/issues/18567) — Shared conversation UI confusing | **Sharing feature polish**: navigation broken, labels generic | 3 comments, 0 👍 — recent regression affecting collaboration workflows |

---

## Key PR Progress

| PR | Focus | Significance |
|----|-------|------------|
| [#14973](https://github.com/anomalyco/opencode/pull/14973) — Fix agent loop stopping after tool calls (OpenAI-compatible providers) | **Reliability**: Gemini/LiteLLM return `finish_reason: "stop"` incorrectly halting execution | Unblocks non-Anthropic provider adoption |
| [#18572](https://github.com/anomalyco/opencode/pull/18572) — Effectify Pty service | **Architecture**: Migrate terminal service to Effect pattern with `InstanceState` | kitlangton's 4th Effect PR this weekend; systematic modernization |
| [#18570](https://github.com/anomalyco/opencode/pull/18570) — Effectify Plugin service | **Architecture**: Plugin lifecycle now explicit per-instance | Reduces state management bugs |
| [#18571](https://github.com/anomalyco/opencode/pull/18571) — Effectify ToolRegistry service | **Architecture**: Lazy tool loading with explicit error handling | Foundation for plugin ecosystem stability |
| [#18568](https://github.com/anomalyco/opencode/pull/18568) — Effectify Command service | **Architecture**: Command loading migrated from `Instance.state` | Completes core service layer refactoring |
| [#13924](https://github.com/anomalyco/opencode/pull/13924) — Individual subagent cancellation | **UX**: Clickable interrupt + keybinding for subagent tasks | Addresses #13916; partial answer to #5887 async requests |
| [#18306](https://github.com/anomalyco/opencode/pull/18306) — Open WebUI provider | **Integration**: Adds local UI gateway support | Builds on community contribution #14341 |
| [#16981](https://github.com/anomalyco/opencode/pull/16981) — Handle system messages for non-Anthropic providers | **Compatibility**: Fixes "System message must be at the beginning" for Qwen/etc. | Critical for local model users |
| [#18560](https://github.com/anomalyco/opencode/pull/18560) — LSP extension matching for Dockerfile | **Bug fix**: Case-insensitive matching, extensionless files | Small but precise DX improvement |
| [#18563](https://github.com/anomalyco/opencode/pull/18563) — `OPENCODE_AUTH_PATH` override | **Flexibility**: Configurable auth credential location | Enterprise/container use cases |

---

## Feature Request Trends

1. **True Local-First / Air-Gapped Operation** — Multiple requests (#10416 privacy, #18492 full offline mode) reveal gap between marketing and implementation; external dependencies for core functions (session titles, auth) violate expectations.

2. **Intelligent Context Management** — Configurable compaction (#11314, #15871, #13838) and accurate token counting dominate; users want control over when/what gets summarized, with transparency into thresholds.

3. **Async/Background Agent Execution** — #5887's 54 👍 and sustained discussion show demand for non-modal sub-agents; current synchronous delegation breaks flow state.

4. **OpenAI-Compatible Provider Polish** — Auto-discovery (#6231), proper system message handling (#16981), and tool call loop fixes (#14973) indicate local/self-hosted usage is mainstream, not edge case.

5. **Session Sharing & Collaboration** — #18567, #8397, #12140 show sharing features exist but lack refinement; unshare workflows, navigation, and deletion are friction points.

---

## Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Authentication Fragility** | OAuth 429s, token refresh failures, provider reappearing after removal (#18267, #18329, #18535) | **Critical** — blocks all usage |
| **Context Window Mismanagement** | Hardcoded thresholds, premature compaction, synthetic message injection (#15871, #11314, #13838) | **High** — daily workflow friction |
| **TUI/Terminal Instability** | tmux breakage, Windows Git Bash issues, visual glitches, prompt queue corruption (#16351, #16126, #18537, #13629) | **High** — core interface reliability |
| **Privacy Leakage** | External computation for "local" features, unclear data flows (#10416) | **Moderate-High** — trust erosion |
| **Provider Integration Gaps** | Manual model config, non-Anthropic provider bugs, rate limiting without concurrency control (#6231, #14973, #12019) | **Moderate** — local/enterprise adoption blocker |
| **Process/Resource Management** | Orphaned processes consuming 500MB (#13001), desktop black screen (#18507) | **Moderate** — operational overhead |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-22

## Today's Highlights

The v0.13.0 nightly release landed with OpenRouter pipeline fixes and system prompt customization. Community contributor **netbrah** dominated the day's activity with 12 PRs targeting core robustness, including a critical fix for `structuredClone` OOM crashes in long sessions. Vim users will appreciate upcoming Ctrl+N/P support for completion navigation.

---

## Releases

**v0.13.0-nightly.20260321.38caa0b21** — [Release](https://github.com/QwenLM/qwen-code/pull/2451)
- Version bump to 0.13.0
- Fix: Handle duplicate `finish_reason` chunks from OpenRouter ([PR #2403](https://github.com/QwenLM/qwen-code/pull/2403))
- Feat: System prompt customization options

---

## Hot Issues

| # | Issue | Why It Matters | Status |
|---|-------|--------------|--------|
| [#2561](https://github.com/QwenLM/qwen-code/issues/2561) | Vim mode dropdown navigation with arrows | Core UX gap for Vim users—violates muscle memory for modal editing workflows | 1 comment, needs triage |
| [#2522](https://github.com/QwenLM/qwen-code/issues/2522) | `exit_plan_mode` false rejection in YOLO mode | Breaks autonomous agent workflows; model thinks user rejected plan when it actually succeeded | 1 comment, active |
| [#2531](https://github.com/QwenLM/qwen-code/issues/2531) | `<\|image_pad\|>` token blocked in input | Unexpected input validation breaking multimodal workflows with image placeholders | 1 comment, needs triage |
| [#2560](https://github.com/QwenLM/qwen-code/issues/2560) | Docs: Qwen Code vs other AI assistants comparison | Onboarding friction—new users lack decision framework vs. Cursor/Copilot/Windsurf | 1 comment, feature request |
| [#2540](https://github.com/QwenLM/qwen-code/issues/2540) | `taskkill /F /IM node.exe` kills own process | Dangerous shell command suggestion causing self-termination; safety issue | 1 comment, Chinese report |
| [#2543](https://github.com/QwenLM/qwen-code/issues/2543) | Global Skills can't reference internal files | Skill system design gap—documentation files in skill directories inaccessible | 1 comment, needs triage |
| [#2562](https://github.com/QwenLM/qwen-code/issues/2562) | `structuredClone` OOM in long sessions | **Critical stability issue**—memory exhaustion crashes multi-hour sessions | PR ready (#2568) |
| [#2557](https://github.com/QwenLM/qwen-code/issues/2557) | Vibe Coding output corruption (escaped newlines) | Demo-breaking bug from D2 conference—reputation risk for flagship feature | 0 comments, fresh |
| [#2555](https://github.com/QwenLM/qwen-code/issues/2555) | Crash: `ioctl(2) failed, EBADF` | Terminal/PTY layer instability affecting core runtime | 0 comments, needs investigation |
| [#2558](https://github.com/QwenLM/qwen-code/issues/2558) | `Read EIO` unexpected error | Low-level I/O error with minimal context—needs reproduction details | 0 comments, fresh |

---

## Key PR Progress

| # | PR | Feature/Fix | Significance |
|---|-----|-------------|--------------|
| [#2587](https://github.com/QwenLM/qwen-code/pull/2587) | Vim Ctrl+N/P completion navigation | Addresses [#2561](https://github.com/QwenLM/qwen-code/issues/2561); unblocks Vim power users | Ready |
| [#2568](https://github.com/QwenLM/qwen-code/pull/2568) | Replace `structuredClone` with shallow copy | Fixes [#2562](https://github.com/QwenLM/qwen-code/issues/2562) OOM; removes largest GC pressure source in long sessions | Ready |
| [#2582](https://github.com/QwenLM/qwen-code/pull/2582) | Enforce history immutability with `readonly` types | Follow-up to #2568; prevents accidental mutation of shared history references | Ready |
| [#2583](https://github.com/QwenLM/qwen-code/pull/2583) | Retry logic for SSL/TLS and network errors | Production resilience: 11 error codes, cause chain traversal, increased retry budgets | Ready |
| [#2586](https://github.com/QwenLM/qwen-code/pull/2586) | Fix `exit_plan_mode` in YOLO mode | Fixes [#2522](https://github.com/QwenLM/qwen-code/issues/2522); `ProceedAlways` outcome handling bug | Ready |
| [#2580](https://github.com/QwenLM/qwen-code/pull/2580) | `read_many_files` tool for batch reading | 5-10x reduction in tool call overhead for large codebase workflows | Ready |
| [#2569](https://github.com/QwenLM/qwen-code/pull/2569) | Parallelize contiguous read-only tool calls | Latency win: batch file reads/greps via `Promise.all` instead of sequential | Ready |
| [#2573](https://github.com/QwenLM/qwen-code/pull/2573) | Tool output masking service for context reclamation | Pre-turn compression: replaces old bulky outputs with previews, preserves full on disk | Ready |
| [#2571](https://github.com/QwenLM/qwen-code/pull/2571) | Pre-flight context budget trimming | Prevents hard failures on Anthropic/OpenAI before chat compression runs | Ready |
| [#2581](https://github.com/QwenLM/qwen-code/pull/2581) | Omission placeholder detector | Blocks lazy model output like `(rest of code...)` preventing accidental deletion | Ready |

---

## Feature Request Trends

1. **Context Management & Compression** — 4 related PRs (#2566, #2567, #2571, #2573) targeting context window efficiency, dynamic truncation, and masking. Clear priority for long-session reliability.

2. **Tool System Robustness** — Batch operations (`read_many_files`), parallel execution (#2569), and read-only optimizations (#2564, #2570) dominate. Community wants fewer, faster, safer tool calls.

3. **Vim/Modal Editing Polish** — Navigation bindings (#2561, #2587) and general modal workflow improvements recurring theme.

4. **Documentation & Onboarding** — Comparison guides (#2560) and skill system discoverability (#2543) indicate growth-phase user experience gaps.

5. **Multi-Agent Orchestration** — Subagent resilience (#2578, #2584) and skill extension mechanisms (#2380) show maturing beyond single-agent workflows.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Memory instability in long sessions** | #2562, #2568, #2555 | **Critical** — crashes block production use |
| **Shell command safety** | #2540 (self-kill), #2556 (new shell tools) | High — needs guardrails |
| **Context window hard failures** | #2565, #2571, #2531 | High — API rejections before compression |
| **Vim/keyboard-centric UX gaps** | #2561, #2587 | Medium — power user friction |
| **Skill system file access limitations** | #2543 | Medium — documentation workflows broken |
| **Output corruption in Vibe Coding** | #2557 | Medium — flagship feature reliability |
| **Plan mode state machine bugs** | #2522, #2586 | Medium — autonomous workflow reliability |

---

*Digest compiled from 22 issues and 21 PRs updated 2026-03-21. Data source: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*