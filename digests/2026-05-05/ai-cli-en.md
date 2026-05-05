# AI CLI Tools Community Digest 2026-05-05

> Generated: 2026-05-05 00:20 UTC | Tools covered: 8

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-05

## 1. Ecosystem Overview

The AI CLI tools landscape in mid-2026 is characterized by intense competition around **agent reliability, quota transparency, and multi-modal context handling**—with all major tools struggling to balance automation power against predictable cost and safety. The field has bifurcated between ** vertically-integrated stacks** (Claude Code, Codex, Copilot CLI) optimizing for proprietary model ecosystems and **model-agnostic routers** (OpenCode, Pi, Qwen Code) serving polyglot developers who demand flexibility across providers. A critical inflection point is emerging around **unattended multi-agent orchestration**, where marketing promises significantly outpace mechanical reliability across every tool. Meanwhile, **terminal UI fragility** has become a systemic cross-platform liability, with Ink-based renderers (Qwen Code, OpenCode components) and native TUI frameworks (Codex, Claude Code) both exhibiting regressions under real-world usage patterns.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Key Release |
|------|:-----------:|:---------:|----------------|-------------|
| **Claude Code** | 10+ tracked | 4 | v2.1.128 shipped | QoL: session colors, MCP visibility, plugin archives |
| **OpenAI Codex** | 10+ tracked | 10+ | 2 Rust alphas (0.129.0-a.4/5) | `codex-rs` migration in progress; no detailed notes |
| **Gemini CLI** | 10+ tracked | 10+ | v0.42.0-nightly | ACP modularization, workflow hardening |
| **GitHub Copilot CLI** | 10+ tracked | **0** | v1.0.41-0 shipped | `--attachment` flag, edit reliability |
| **Kimi Code CLI** | 5 tracked | 1 | **None** | Thinking toggle PR (#2158) pending |
| **OpenCode** | 10+ tracked | 10+ | v1.14.34 shipped | PTY tickets, v2 session failures, shell improvements |
| **Pi** | 10+ tracked | 10+ | v0.73.0 shipped | Xiaomi MiMo regional providers |
| **Qwen Code** | 10+ tracked | 10+ | v0.15.6-nightly | `FileReadCache`, proxy fixes |

**Observations:** Copilot CLI shows **zero PR activity**—suggesting code freeze, internal branch, or maintenance mode. Kimi Code CLI is **release-dormant** with minimal velocity. Codex and Gemini CLI are in **active architectural transitions** (Rust rewrite, ACP modularization respectively) with high PR volume but opaque release notes.

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Quota/usage transparency & controls** | Claude Code, Codex, Copilot CLI, Gemini CLI | Real-time burn indicators; predictable billing; prevention of silent over-consumption; session accounting accuracy |
| **Unattended multi-agent orchestration** | Claude Code, Codex, Qwen Code, Copilot CLI | Mechanical enforcement of permissions; hook governance; background task promotion; cron/wakeup reliability; race condition elimination |
| **Context window expansion/parity** | Codex (#19464: 1M for GPT-5.5), Claude Code (#45390: 1M context billing), Pi (#3737: context accuracy) | API-model parity; accurate token planning; inclusion in base plans vs. "extra usage" gating |
| **TUI input ergonomics & reliability** | Codex (Shift+Enter regression), Kimi (#1585: Ctrl+J newline), Qwen Code (terminal loops), Copilot CLI (scrollback loss) | Multi-line input; standard keybindings; resize handling; durable output; cross-platform parity |
| **MCP server governance & auth** | Claude Code (#44112: auto-injection), Copilot CLI (#3019: VS Code config parity), Qwen Code (#3819: duplicate processes), OpenCode (#12308: Entra auth) | Opt-in consent; flexible auth (OAuth/API key/Bearer); config portability; enterprise policy compliance |
| **Thinking/reasoning content control** | Kimi (#1632/#2158: toggle), OpenCode (#24722/#23104: DeepSeek/Kimi reasoning preservation), Pi (#3208: per-model levels), Claude Code (implicit via sub-agent issues) | Visibility toggle; API contract compliance; model-native capability exposure; multi-turn preservation |
| **Local/self-hosted LLM integration** | Pi (#3357/#4154: llama.cpp/ollama/vLLM/LM Studio), OpenCode (provider flexibility) | Dynamic model discovery; first-class provider parity; no manual config |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi | OpenCode | Pi | Qwen Code |
|-----------|:-----------:|:------------:|:----------:|:-----------:|:----:|:--------:|:--:|:---------:|
| **Primary model lock-in** | Anthropic (Claude) | OpenAI (GPT/Codex) | Google (Gemini) | GitHub/OpenAI | Moonshot (Kimi) | Multi-provider | Multi-provider | Alibaba (Qwen) |
| **Target user** | Pro/Max subscribers; agent-heavy workflows | Enterprise; API-first developers | Google ecosystem; cloud-native | GitHub-centric; CI/CD integration | China market; reasoning-focused | Polyglot power users; IDE integrators | Local-LLM enthusiasts; model agnostics | Alibaba cloud; structured output needs |
| **Architecture bet** | Plugin ecosystem (nascent); MCP-first | Rust rewrite (`codex-rs`); app-server consolidation | ACP protocol; npm distribution | VS Code convergence; `--attachment` for automation | Minimal core; community plugins | Tauri + HttpApi backend; compliance-heavy | Provider abstraction layer; "big refactor" | Ink TUI; background task orchestration |
| **Automation positioning** | Marketed heavily; mechanical gaps (#53610) | ThreadStore for distributed consistency | Emerging (Flash→Flash-Lite failover) | `--agent` + `--plugin-dir` friction | YOLO/AFK modes; safety visibility gaps | Plan/build/run injection hooks | Scripting (`pi -p`); non-interactive fragility | Background tasks (Ctrl+B); ACP mode |
| **Unique strength** | Deep Claude model integration; `/extra-usage` granularity | Desktop app + CLI unification; analytics depth | Google model access; regional distribution | GitHub native; billing closure speed (#2591) | Thinking model optimization; Web UI | Provider flexibility; mobile/touch | Local LLM first-class; model capability accuracy | File mutation safety; structured output |
| **Critical weakness** | Quota accounting systemic failure; memory leaks | TUI regressions; opaque Rust migration | Model availability chaos; 2000+ issue backlog | Zero PR velocity; config fragmentation | Release dormancy; Windows crashes | Review bottlenecks; compliance friction | "Big refactor" disruption; auth drift | Terminal renderer fragility; session bloat |

---

## 5. Community Momentum & Maturity

### Highest Activity / Rapid Iteration
| Tool | Evidence | Assessment |
|------|----------|------------|
| **OpenCode** | 10+ open PRs, daily releases, active issue triage | **Most velocity** but review bottleneck risks quality; compliance-tagging suggests scaling pains |
| **Pi** | 10+ merged PRs in 24h, community ownership (ghost91-, julien-c, mitsuhiko contributing) | **Healthiest external contribution**; "big refactor" is risky but maintainers are decisive |
| **Qwen Code** | Nightly releases, architectural roadmap (#3634 Phase D), safety-critical PRs (#3840, #3774) | **Most structured evolution**; background task design shows mature planning |
| **Gemini CLI** | Bot-driven backlog pruning (#26477), modularization at scale | **Maintenance mode recovery**; 2000+ issues being aggressively managed |

### Stagnation Signals
| Tool | Evidence | Concern |
|------|----------|---------|
| **Copilot CLI** | Zero PRs in 24h; 30 issues updated but no code changes | **Maintenance mode or internal freeze**; configuration fragmentation unaddressed |
| **Kimi Code CLI** | No release, 1 PR, minimal issue volume | **Lowest ecosystem energy**; dependent on Moonshot model competitiveness |

### Community Engagement Intensity
| Tool | Standout Metric | Interpretation |
|------|-----------------|----------------|
| **Claude Code** | #38335: 681 comments, 452 👍 on quota issue | **Highest user frustration concentration**; sustained daily activity indicates unresolved crisis |
| **Codex** | #19464: 153 👍, 120 comments on 1M context | **Strong enterprise lobbying**; API-model parity is make-or-break |
| **Copilot CLI** | #2591 closure: 31 comments on billing bug | **Trust recovery** from closure speed, but #2421 shows systemic undici issue remains |

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Metering/trust crisis** | Claude Code #38335 (681 comments), Copilot #2421 (silent waste), Codex #19464 (context parity) | **Cost predictability is now a primary purchasing criterion**, not secondary to capability. Vendors treating billing as "backend detail" will lose enterprise accounts. |
| **Agent reliability > agent capability** | Claude Code #53610 (9 gaps), Qwen #3634 (background task roadmap), Codex #20702 (PreToolUse escalation) | **The market is shifting from "can it do X?" to "can I leave it running overnight?"** Unattended orchestration is the new battleground. |
| **Model-agnostic routing as differentiator** | Pi #3357 (21 👍 local LLM), OpenCode multi-provider, Pi #3737 (context accuracy per route) | **Proprietary lock-in is becoming a liability.** Tools that abstract model choice gain power as model churn accelerates (Gemini 3.x availability chaos exemplifies). |
| **Terminal as liability** | Qwen #3838 (infinite loop), Codex #20580 (Shift+Enter), Copilot #3110 (scrollback loss), Kimi #1585 (keybindings) | **TUI frameworks are not keeping pace with agent complexity.** Expect migration to web-based or hybrid UIs, or heavy investment in terminal emulator partnerships. |
| **Reasoning content as first-class API surface** | OpenCode #24722/#25758, Pi #3208, Kimi #1632/#2158, Claude Code sub-agent timing | **Thinking/reasoning is no longer debug output—it's user-facing product.** Tools that don't give granular control over reasoning visibility will lose power-user adoption. |
| **Enterprise policy as friction point** | Copilot #3101 (total lockout), Claude #44112 (GDPR-adjacent), Gemini #19979 (CUELang policy), Qwen #3836 (task transparency) | **Consumer-grade "trust us" consent models are failing enterprise procurement.** Explicit, auditable, deterministic policy enforcement is becoming table stakes. |
| **Cross-session persistence as ecosystem gap** | Kimi #2161 (kimi-mneme plugin), Claude #55864 (session-persist plugin), Codex #21079 (CLI/desktop history unification) | **Statelessness is a 2024 pattern; 2026 agents need memory.** Native persistence is missing everywhere; community plugins are filling the void. |

---

**Bottom Line for Decision-Makers:** The AI CLI space is experiencing a **reliability recession**—capabilities marketed in 2025 are now hitting mechanical limits in production. Quota transparency, unattended orchestration robustness, and terminal UI stability are the decisive factors for 2026 adoption. Model-agnostic tools (Pi, OpenCode) are gaining strategic optionality as proprietary model availability becomes volatile. Enterprises should prioritize tools with **explicit safety boundaries and deterministic policy engines** over raw capability demonstrations.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-05 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment. Addresses universal document output issues. *Active since March 2026.* |
| 2 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and actionability; ensures every instruction is executable in a single conversation. *Long-running PR under refinement.* |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Claude Skills across 5 quality dimensions (structure, security, documentation, etc.). *Enterprise-grade tooling for skill authors.* |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, and convert ODT/ODS files with LibreOffice/ISO standard compliance. *Fills open-source document gap.* |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack: Testing Trophy philosophy, AAA pattern, React component testing, and anti-patterns. *Recently submitted, high engagement.* |
| 6 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub. *Largest scope single-platform skill.* |
| 7 | **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 🟡 Open | Deploy full-stack web apps directly from Claude to public URLs via [appdeploy.ai](https://appdeploy.ai/). *Recently updated May 2026.* |
| 8 | **macOS Sensory/AppleScript** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native macOS automation via `osascript` vs. screenshot-based computer use; tiered permission system. *Novel OS-native approach.* |

---

## 2. Community Demand Trends

From high-engagement Issues, five dominant skill directions emerge:

| Trend | Evidence | Demand Signal |
|:---|:---|:---|
| **Enterprise Collaboration & Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 7 👍) | Org-wide skill libraries; eliminate Slack/Teams manual distribution |
| **Quality Assurance & Governance** | [#202](https://github.com/anthropics/skills/issues/202), [#412](https://github.com/anthropics/skills/issues/412) | Meta-skills for skill validation, policy enforcement, audit trails |
| **Platform-Native Automation** | [#16](https://github.com/anthropics/skills/issues/16), [#806](https://github.com/anthropics/skills/pull/806) | MCP exposure, OS-level scripting (AppleScript), API-first integration |
| **Cloud/Enterprise System Connectors** | [#29](https://github.com/anthropics/skills/issues/29), [#568](https://github.com/anthropics/skills/pull/568) | AWS Bedrock compatibility, ServiceNow, SAP integration |
| **Developer Workflow Integration** | [#664](https://github.com/anthropics/skills/pull/664), [#299](https://github.com/anthropics/skills/pull/299) | Git→Obsidian reporting, Google Workspace orchestration, email/calendar automation |

---

## 3. High-Potential Pending Skills

Active PRs with sustained engagement likely to merge with maintainer review:

| Skill | PR | Last Activity | Blocker/Path Forward |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Universal applicability; awaits review |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | Strong structure; recently active |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | 2026-04-23 | Enterprise demand; scope may need trimming |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 2026-05-04 | Very recent update; author responsive |
| **macOS Sensory** | [#806](https://github.com/anthropics/skills/pull/806) | 2026-04-02 | Novel category; security review likely |

**Quality-of-life fixes gaining traction:** [Lubrsy706](https://github.com/Lubrsy706) has submitted 3 targeted bug-fix PRs ([#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541)) for PDF case-sensitivity, YAML parsing, and DOCX corruption—indicating mature ecosystem maintenance needs.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade operational infrastructure: skills that govern, validate, and distribute other skills within organizational boundaries, while extending Claude's reach into proprietary systems (ServiceNow, SAP, Google Workspace, macOS) through native API and automation patterns rather than conversational prompts alone.**

---

---

# Claude Code Community Digest — 2026-05-05

## 1. Today's Highlights

Anthropic shipped **v2.1.128** with quality-of-life improvements to session colors, MCP server visibility, and plugin archive support. Meanwhile, the community remains fixated on **quota and session limit exhaustion**—the top three active issues by engagement all involve abnormal depletion of Max/Pro plan limits, with one thread accumulating **681 comments and 452 upvotes** since March. Multi-agent reliability and permission system edge cases also continue to generate significant discussion.

---

## 2. Releases

### [v2.1.128](https://github.com/anthropics/claude-code/releases/tag/v2.1.128)

| Change | Impact |
|--------|--------|
| Bare `/color` (no args) now picks random session color | Small UX delight for multi-session users |
| `/mcp` shows tool counts per server; flags 0-tool servers | Helps debug MCP connection failures faster |
| `--plugin-dir` accepts `.zip` archives | Easier plugin distribution; no manual extraction |
| `--channels` works with console | Expands preview channel access to headless environments |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Max plan session limits exhausted abnormally fast since March 23** | The dominant thread on usage accounting; users report CLI sessions burning 5-20× expected quota. Anthropic has acknowledged investigation but no resolution yet. | 🔥 681 comments, 452 👍; sustained daily activity |
| [#45756](https://github.com/anthropics/claude-code/issues/45756) | **Pro Max 5x quota exhausted in 1.5 hours** | WSL-specific pattern of rapid depletion; suggests platform-specific metering bug or background sync overhead. | 58 comments, 143 👍; cross-referenced with #38335 |
| [#11315](https://github.com/anthropics/claude-code/issues/11315) | **Critical memory leak: 129GB RAM consumed, system freeze** | Long-standing Linux issue with virtual memory ballooning; affects CI/automation use cases. Repro confirmed. | 51 comments, 43 👍; users monitoring with `vmstat` |
| [#55053](https://github.com/anthropics/claude-code/issues/55053) | **5-hour session window squeezes 5-10× faster since Apr 29** | New regression cluster post-April 29; Sonnet sub-agents implicated. Timing correlates with model updates. | 34 comments; users tracking burn rates |
| [#53610](https://github.com/anthropics/claude-code/issues/53610) | **Multi-agent runtime needs mechanical enforcement: 9 gaps** | Comprehensive audit of unattended operation failures—permissions, hooks, cron, wakeups all have race conditions. | 25 comments; detailed technical analysis |
| [#7618](https://github.com/anthropics/claude-code/issues/7618) | **VS Code terminal steals focus despite external `/ide` usage** | macOS-specific IDE integration friction; breaks flow for users running Claude in separate terminal. | 19 comments, 33 👍; workaround partially effective |
| [#45390](https://github.com/anthropics/claude-code/issues/45390) | **1M context incorrectly requires extra usage on Max plan** | Billing/policy bug: Opus 4.6 1M context should be included but prompts for `/extra-usage`. | 14 comments, 16 👍; duplicate of broader pricing issues |
| [#54204](https://github.com/anthropics/claude-code/issues/54204) | **Max 5x → Max 20x upgrade stuck in `void_invoice` loop** | Payment infrastructure bug: canceled PaymentIntent retries indefinitely. Blocks revenue conversion. | 10 comments; payment engineering attention needed |
| [#44112](https://github.com/anthropics/claude-code/issues/44112) | **Cloud MCP servers auto-injected without consent** | Privacy/control concern: Gmail/Calendar MCPs pushed from claude.ai to CLI without opt-out. | 6 comments, 3 👍; GDPR-adjacent concerns raised |
| [#55523](https://github.com/anthropics/claude-code/issues/55523) | **Auto Mode silently weakened by hook auto-blocks** | Hooks blocking tool calls reduce Auto Mode to "Accept Edits On" behavior; defeats automation purpose. | 5 comments; security vs. automation tension |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#55864](https://github.com/anthropics/claude-code/pull/55864) | **feat: add session-persist plugin** | Client-side session state preservation as stopgap for window-close data loss; complements server-side proposal in #55860 | 🟢 Open |
| [#33007](https://github.com/anthropics/claude-code/pull/33007) | **fix(hookify): correct field mapping for stop/prompt events** | Fixes `Rule.from_dict()` incorrectly mapping `stop`/`prompt` events to `content` field instead of `name`/`description` | 🔴 Closed |
| [#33006](https://github.com/anthropics/claude-code/pull/33006) | **fix(code-review): align README with actual workflow** | Documentation sync: updates stale confidence scoring and Agent 4 references to match current validation architecture | 🔴 Closed |
| [#55832](https://github.com/anthropics/claude-code/pull/55832) | **Fix: Remove stray content from plugin-validator.md** | Cleanup of accidental dialogue content pasted into agent documentation | 🟢 Open |

*Note: Only 4 PRs had 24h activity. The plugin ecosystem remains nascent; most engineering velocity is directed toward internal releases.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Unattended multi-agent orchestration** | #53610 (9 gaps), #56151 (hook matcher for Agent), #56146 (skill hijacking) | High — enterprise/automation demand |
| **Quota transparency & controls** | #38335, #45756, #55053, #45390, #56139, #56148 | Critical — blocking paid users |
| **Permission system robustness** | #16762 (closed), #31889 (closed), #55523, #53610 | Steady — hooks and persistence need overhaul |
| **MCP server governance** | #44112 (auto-injection), #53408 (M365 personal accounts), #54647 (third-party inference UI lock) | Growing — consent and auth flexibility |
| **Git workflow enhancements** | #56163 (EnterWorktree base ref), #56147 (CWD drift in worktrees) | Moderate — power-user productivity |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Session/quota accounting opaque or broken** | 🔴 Ubiquitous | Critical | #38335, #45756, #55053, #45390, #54204, #56139, #56148 |
| **Multi-agent reliability for automation** | 🔴 High | High | #53610, #55523, #56151, #56146, #43869 |
| **Memory/resource management on Linux** | 🟡 Moderate | High | #11315, #56148 |
| **IDE/terminal focus and integration friction** | 🟡 Moderate | Medium | #7618, #40909, #55436 |
| **MCP auth and consent model** | 🟡 Moderate | Medium | #44112, #53408, #54647 |
| **Plugin documentation quality** | 🟢 Low | Low | #55832, #33006 |

**Bottom line:** The community's dominant frustration remains **unpredictable consumption of paid quotas**, with multiple distinct failure modes (fast depletion, incorrect "extra usage" prompts, payment loop bugs) suggesting systemic metering or policy infrastructure strain. Multi-agent automation—heavily marketed—is encountering mechanical gaps that prevent reliable unattended operation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-05

---

## 1. Today's Highlights

The Codex team shipped two Rust alpha releases (0.129.0-alpha.4/5) as the project continues its core migration to `codex-rs`. The most significant community friction this cycle is a **TUI regression in v0.128.0** where `Shift+Enter` newline insertion broke across macOS, Windows, and embedded terminals (Zed, VS Code), spawning at least five duplicate issues and multiple rapid-fix PRs. Meanwhile, the app-server team is pushing hard on **ThreadStore architecture consolidation** and **analytics instrumentation**, with 10+ PRs in flight around metadata routing, tool lifecycle events, and goal metrics.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.129.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.5) | Latest Rust alpha; no detailed changelog published. Follows alpha.4 within short succession, suggesting active iteration on the `codex-rs` rewrite. |
| [rust-v0.129.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.4) | Preceding alpha in the same release train. |

*No detailed release notes or migration guidance published yet for either alpha.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#19464](https://github.com/openai/codex/issues/19464) | **Support 1M token context for GPT-5.5 in Codex** | GPT-5.5 API supports 1M tokens, but Codex caps at 400K—users want parity for large codebase operations. | **153 👍, 120 comments** — highest-engagement issue this cycle; enterprise users actively lobbying. |
| [#20161](https://github.com/openai/codex/issues/20161) | **Phone number verification doesn't work** | SSO login flow broken for cross-device auth; blocks users who never added phone to account. | **54 👍, 64 comments** — authentication is a hard blocker; users frustrated by unexplained phone gating. |
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** | Mac thermal issues driving users to Linux; no native app available despite CLI working. | **115 👍, 45 comments** — long-standing request; Flatpak packaging offer (#8160) recently closed without resolution. |
| [#17615](https://github.com/openai/codex/issues/17615) | **Azure: "I'm sorry, but I cannot assist" safety over-trigger** | Azure-hosted Codex unusable due to aggressive safety filter on benign requests. | 19 👍, 30 comments — **closed** after investigation; enterprise Azure users still monitoring. |
| [#17322](https://github.com/openai/codex/issues/17322) | **Windows: App doesn't fully exit on close + UI hit-testing bug** | Two distinct Windows desktop polish issues affecting daily usability. | 14 👍, 16 comments — persistent Windows app quality gap vs. macOS. |
| [#19891](https://github.com/openai/codex/issues/19891) | **Regression: "For coding" view hides file names/commands behind summaries** | UI change reduced transparency in agent actions; users lose trust without visibility. | 6 👍, 6 comments — Business-tier user reporting; suggests UX tension between "simple" and "power user" modes. |
| [#20607](https://github.com/openai/codex/issues/20607) | **Shift+Enter no longer inserts newline on macOS in 0.128.0** | Core TUI regression breaking multi-line prompt workflow. | 6 👍, 3 comments — **closed** as duplicate of #20580; rapid community triage. |
| [#20580](https://github.com/openai/codex/issues/20580) | **Regression: Shift+Enter / Alt+Enter no longer insert newline** | Root issue for TUI newline regression across platforms. | **11 👍, 3 comments** — **closed**; fix likely in next patch. |
| [#21046](https://github.com/openai/codex/issues/21046) | **SHIFT+BACKSPACE / CTRL+BACKSPACE not working on Windows** | Related input handling regression in same 0.128.0 release window. | 0 👍, 5 comments — **closed**; Windows terminal input stack appears fragile this release. |
| [#20987](https://github.com/openai/codex/issues/20987) | **Memory enabled in config, but runtime blocks saving learnings** | Config/runtime drift in memory feature; "read-only" injection contradicts user intent. | 1 👍, 2 comments — subtle but serious for users relying on persistent memory. |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#20576](https://github.com/openai/codex/pull/20576) | **Route metadata updates through ThreadStore** | Centralizes thread metadata mutations; adds git metadata patch semantics (set/partial/clear); removes dead code. | Open |
| [#20575](https://github.com/openai/codex/pull/20575) | **Migrate app-server thread history reads to ThreadStore** | Moves token usage replay, rollback, and fork setup off direct rollout files—foundational for distributed consistency. | Open |
| [#20702](https://github.com/openai/codex/pull/20702) | **Support PreToolUse permissionDecision ask** | Allows hooks to *escalate* to explicit approval without weakening policy; closes gap in hook governance model. | Open |
| [#20672](https://github.com/openai/codex/pull/20672) | **Escalate repeated auto-review denials to user approval** | Circuit-breaker pattern: instead of hard-stopping on too many auto-rejections, surface to user for manual decision. | Open |
| [#20619](https://github.com/openai/codex/pull/20619) | **Request desktop attestation from app** | Integrates DeviceCheck attestation for `codex-rs`/app-server; security hardening for scoped Codex API paths. | Open |
| [#21109](https://github.com/openai/codex/pull/21109) | **TUI local file upload command (`/upload`)** | Bridges client-local files to host-managed upload API; critical for remote execution workflows. | Open |
| [#21108](https://github.com/openai/codex/pull/21108) | **Managed remote file uploads (app-server)** | Backend for #21109; stores client bytes in `$CODEX_HOME/uploads` for remote host access. | Open |
| [#21090](https://github.com/openai/codex/pull/21090) | **Dedupe fallback model metadata warnings** | Reduces log noise from gateway/provider model name lookups; follows community report in #21070. | Open |
| [#21113](https://github.com/openai/codex/pull/21113) | **Auto-deny MCP elicitations for Xcode 26.4 clients** | Compatibility shim: older Xcode clients can't handle new MCP elicitation events; preserves legacy behavior. | Open |
| [#21111](https://github.com/openai/codex/pull/21111) | **Warn on invalid config enum values** | Graceful degradation: single bad enum no longer bricks entire config; warns instead of fails. | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Expanded context windows** | #19464 (1M tokens for GPT-5.5) | 🔥 High — API-model parity is now expectation, not nice-to-have |
| **Linux desktop parity** | #11023, #8160 (Flatpak offer) | High — Mac thermal issues amplifying demand |
| **Hook/skill lifecycle observability** | #16226 (subagent discrimination), #17132 (Pre/PostSkillUse) | Medium — power-user extensibility theme |
| **Cross-session history unification** | #21079 (CLI sessions in desktop history) | Emerging — fragmentation between CLI and app UX |
| **TUI input ergonomics** | #8673 (Shift+Enter newline), #20555, #20607, #20580, #21046, #21115 | **Critical mass** — multi-line input is table stakes; regression handling damaged trust |
| **Browser Use / skill reliability** | #20678, #19463 (IAB backend discovery), #20629 (system skills flash then hide) | Medium — "agents that use browsers" are core promise but flaky in practice |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **TUI input regressions (Shift+Enter, backspace)** | 6+ issues in 5 days | 🔴 Critical | #20580, #20607, #20555, #21046, #21115, #8673 |
| **Safety filter false positives** | 3+ issues (#17615, #19403, #21086, #21114) | High | "Cyber-safety" and "security risk" flags on benign coding tasks; Azure especially affected |
| **Auth/identity friction** | 2+ issues (#20161 phone, #18680 usage/dictate) | High | SSO/phone mismatch, usage visibility gaps |
| **Windows app quality gap** | 3+ issues (#17322, #21046, #21115) | Medium | Exit behavior, input handling, UI hit-testing all lag macOS |
| **Config/runtime drift** | 2+ issues (#20987 memory, #21093 reasoning selector) | Medium | Settings accepted in UI/config not honored in actual requests |
| **Desktop app transparency regression** | #19891 | Medium | Aggregate summaries reducing action visibility in "For coding" mode |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-05-04 to 2026-05-05.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-05

## Today's Highlights
The v0.42.0 nightly landed with ACP client modularization and workflow hardening, while the bot-driven backlog pruning initiative (#26477) signals maintainers are actively addressing the project's 2000+ open issues. Model availability remains the dominant community pain point, with multiple high-engagement issues tracking `gemini-3-pro-preview` and `3.1` access failures.

---

## Releases

**[v0.42.0-nightly.20260504.g37edd1d4d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260504.g37edd1d4d)**
- Documentation workflow updates with workspace trust enforcement
- Major refactor: `acpClient` split into specialized modules ([PR #26143](https://github.com/google-gemini/gemini-cli/pull/26143))
- Test infrastructure fixes

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#19624](https://github.com/google-gemini/gemini-cli/issues/19624) | `gemini-3-pro-preview` unreachable since 3.1 announcement | 16 comments, 22 👍 — flagship model degradation affecting production workflows | High frustration; users stuck on degraded fallback |
| [#20521](https://github.com/google-gemini/gemini-cli/issues/20521) | Inconsistent `ReadFiles` behavior — falls back to `cat` | Core agent reliability issue; file reading is foundational | Zero 👍 but 12 comments suggests active debugging |
| [#20755](https://github.com/google-gemini/gemini-cli/issues/20755) | Shell tool strips trailing newlines, breaking heredocs | **Closed** with fix merged; classic shell execution bug | 8 comments, resolved via [#23705](https://github.com/google-gemini/gemini-cli/pull/23705) |
| [#20308](https://github.com/google-gemini/gemini-cli/issues/20308) | CLI auto-selects unavailable `3.1-pro-preview`, breaks `3-pro-preview` | Model routing logic fundamentally broken | User reports `flash-preview` "terrible for code tasks" |
| [#1442](https://github.com/google-gemini/gemini-cli/issues/1442) | Add winget distribution channel | 10 👍, oldest open request; Windows enterprise adoption blocked | Persistent demand, simple fix, no maintainer action |
| [#20115](https://github.com/google-gemini/gemini-cli/issues/20115) | Only Gemini-2.5 available after 0.29.6 update | Model availability regression across versions | Users explicitly pinned to older models losing access |
| [#8143](https://github.com/google-gemini/gemini-cli/issues/8143) | Built-in SSH client for direct device access | 6 👍, enterprise/IoT use case; would differentiate from competitors | Niche but high-value for infrastructure workflows |
| [#21131](https://github.com/google-gemini/gemini-cli/issues/21131) | Windows test regressions (paths, symlinks, shell) | 18 failing tests on Windows; contributor onboarding friction | Zero 👍 = Windows devs likely just leaving |
| [#19997](https://github.com/google-gemini/gemini-cli/issues/19997) | API key redaction missing in proxy URL telemetry | Security exposure in enterprise proxy environments | Under-discussed but critical for compliance |
| [#19979](https://github.com/google-gemini/gemini-cli/issues/19979) | Migrate policy config from TOML to CUELang | 4 comments; represents architectural policy engine debate | CUELang's validation-native design vs. TOML simplicity |

---

## Key PR Progress

| # | PR | Impact |
|---|-----|--------|
| [#26477](https://github.com/google-gemini/gemini-cli/pull/26477) | **BT-36: Optimize Lifecycle Manager & Prune Backlog** | Bot-authored; switches to GraphQL pagination for 2000+ issue scale, implements aggressive stale issue pruning — signals project health initiative |
| [#25890](https://github.com/google-gemini/gemini-cli/pull/25890) | Fix home directory warning using `os.homedir()` | Resolves false positives when `GEMINI_CLI_HOME` set; corrects [#22309](https://github.com/google-gemini/gemini-cli/issues/22309) |
| [#23705](https://github.com/google-gemini/gemini-cli/pull/23705) | Preserve trailing newlines in shell execution | Fixes heredoc breakage; narrowly scoped to execution path only |
| [#25684](https://github.com/google-gemini/gemini-cli/pull/25684) | Runtime Flash→Flash-Lite failover for quota resilience | Addresses 5 linked issues; mitigates silent hangs and infinite 429 loops — critical reliability improvement |
| [#25412](https://github.com/google-gemini/gemini-cli/pull/25412) | Use active keybinding config for UI shortcuts | UX polish: remapped shortcuts now reflected in prompts, not just defaults |
| [#25705](https://github.com/google-gemini/gemini-cli/pull/25705) | Performance/memory baseline overhaul | Automation for CI baselines with remote update workflows — engineering quality investment |
| [#25712](https://github.com/google-gemini/gemini-cli/pull/25712) | Shell tool RC file support + `PAGER=cat` default | Prevents `less`/`more` hangs in non-interactive shells; restores prior reverted PR |
| [#25691](https://github.com/google-gemini/gemini-cli/pull/25691) | Elapsed time display for >3s tool executions | Live timer on spinner; addresses "is this stuck?" UX anxiety |
| [#25683](https://github.com/google-gemini/gemini-cli/pull/25683) | Pass new messages as steering instructions during execution | Fixes silent queuing bug; enables mid-execution corrections — significant agent interactivity improvement |
| [#25681](https://github.com/google-gemini/gemini-cli/pull/25681) | User feedback on tool cancellation | Extends confirmation protocol with structured cancel reason; improves agent context on user intent |

---

## Feature Request Trends

1. **Windows-native experience** — winget distribution (#1442), PowerShell keybinding fixes (#20929), path normalization (#21131): Windows parity remains a second-class concern despite large user base.

2. **Enterprise policy & security hardening** — CUELang migration (#19979), `allowEnv` policy rules ([#24782](https://github.com/google-gemini/gemini-cli/pull/24782)), proxy credential redaction (#19997), SSH client (#8143): Organizations need deterministic, auditable agent behavior.

3. **Model context portability** — Gems integration (#19268): Bridging web UI and CLI contexts for workflow continuity.

4. **Background process management** — Long-running subprocess tools (#20944): Current `tail`/`cat` heuristics fail for daemon-style workflows.

5. **Silent/transparent updates** — (#21106): Daily npm install popups creating friction for habitual users.

---

## Developer Pain Points

| Theme | Frequency | Severity | Representative Issues |
|-------|-----------|----------|----------------------|
| **Model availability/selection failures** | Very High | Critical | #19624, #20308, #20115, #20857, #20718, #21238 |
| Agent "stuck" in reasoning/looping | High | High | #21279, #21195, #20718 |
| Windows platform instability | Medium | Medium | #21131, #20929, #1442 |
| File access tooling inconsistency | Medium | High | #20521, #20586 |
| Update mechanism intrusiveness | Low-Medium | Low | #21106 |
| Telemetry/security gaps | Low | High | #19997, #20611 |

**Model availability dominates** — six distinct issues with overlapping symptoms suggest systemic routing or quota management problems rather than isolated incidents. The Flash→Flash-Lite failover PR (#25684) addresses symptoms but not root cause. Users report explicit model flags ignored, "Auto" selecting unavailable models, and 30-minute waits (#21238).

**Agent reliability** — "Stuck in reasoning" and looping reports cluster around Gemini 3.x models, suggesting possible token limit or context window handling regressions in newer model generations.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-05

---

## 1. Today's Highlights

GitHub shipped **v1.0.41-0** with non-interactive file attachment support and improved edit reliability, while closing several high-visibility billing and model-access bugs. The community remains actively engaged with **30 issues updated in 24 hours**, including fresh reports on terminal rendering regressions, SSH marketplace installation failures, and enterprise policy lockouts.

---

## 2. Releases

### [v1.0.41-0](https://github.com/github/copilot-cli/releases/tag/v1.0.41-0)
| Category | Change |
|----------|--------|
| **Added** | `--attachment` flag for `-p/--prompt` non-interactive mode — enables attaching images or native documents to initial prompts |
| **Improved** | File edit reliability via better recovery from fuzzy or misaligned edit blocks |
| **Fixed** | `@`-mention completion now works for `./` relative paths |

This release notably bridges a gap between interactive and scripted workflows, allowing CI/CD and automation pipelines to leverage multimodal capabilities.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|-------------------|
| [#2591](https://github.com/github/copilot-cli/issues/2591) | Single session burning 80-100 premium requests via tool/thinking loops | **CLOSED** | Critical billing fairness bug where one user request cascaded into dozens of charged API calls; directly impacts cost trust | 31 comments, 13 👍 — high engagement, relief at closure |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | HTTP/2 GOAWAY race condition causing silent premium request waste | **OPEN** | Consolidates 5 related issues; describes a fundamental undici connection pool bug that burns quota during retries without user visibility | 16 👍, strong technical analysis, awaiting upstream fix |
| [#3101](https://github.com/github/copilot-cli/issues/3101) | Enterprise policy blocking all model access (`Failed to load models`) | **OPEN** | Regression from #2691 resurfacing in v1.0.40; completely blocks enterprise users | 2 👍, urgent tone, needs immediate attention |
| [#2795](https://github.com/github/copilot-cli/issues/2795) | `--agent` incompatible with `--plugin-dir` + `-p` non-interactive mode | **OPEN** | Breaks headless agent orchestration for custom plugin workflows | 8 👍, specific reproduction steps provided |
| [#3019](https://github.com/github/copilot-cli/issues/3019) | Breaking change: `.vscode/mcp.json` support removed | **OPEN** | Forces teams to maintain duplicate MCP configs for CLI vs. VS Code users; friction for polyglot teams | 2 👍, enterprise context |
| [#3110](https://github.com/github/copilot-cli/issues/3110) | Terminal output overwrites scrollback buffer instead of appending | **OPEN** | Fundamental TUI regression — session output is unrecoverable after execution | New, no votes yet but severe UX impact |
| [#3106](https://github.com/github/copilot-cli/issues/3106) | Task tool doesn't hot-reload newly added agents mid-conversation | **OPEN** | Breaks iterative agent development workflow; requires session restart | New, affects agent ecosystem growth |
| [#3102](https://github.com/github/copilot-cli/issues/3102) | Marketplace installation fails over SSH (forces HTTPS) | **OPEN** | Blocks enterprise/SSH-only environments from plugin distribution | New, security/policy implications |
| [#3098](https://github.com/github/copilot-cli/issues/3098) | PowerShell `$home` variable footgun risks profile deletion | **OPEN** | Safety-critical: generated scripts can accidentally nuke user profiles due to case-insensitive variable resolution | New, from Microsoft employee (DamianEdwards) |
| [#3100](https://github.com/github/copilot-cli/issues/3100) | HTTP MCP server with Bearer token fails OAuth discovery instead of falling back to headers | **OPEN** | Blocks standard API key auth patterns for MCP servers | New, authentication architecture gap |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.** All activity is concentrated in issues and releases. This suggests either a code freeze period, internal development branch, or maintenance-mode prioritization of issue triage over new feature work.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Project-scoped configuration** | [#1665](https://github.com/github/copilot-cli/issues/1665) (plugins), [#2528](https://github.com/github/copilot-cli/issues/2528) (MCP servers), [#3019](https://github.com/github/copilot-cli/issues/3019) (VS Code parity) | High — recurring theme that CLI lags VS Code in workspace-level config |
| **Transparency & observability** | [#2052](https://github.com/github/copilot-cli/issues/2052) (token usage indicator), [#3111](https://github.com/github/copilot-cli/issues/3111) (agent thinking timer), [#2421](https://github.com/github/copilot-cli/issues/2421) (silent request waste) | Growing — users demand visibility into costs and latency |
| **Non-interactive/headless maturity** | [#2795](https://github.com/github/copilot-cli/issues/2795), [#2665](https://github.com/github/copilot-cli/issues/2665), [#1607](https://github.com/github/copilot-cli/issues/1607), v1.0.41 `--attachment` flag | Active — CLI positioning for automation/CI, but gaps remain in plugin loading, permissions, and agent discovery |
| **Model access flexibility** | [#2758](https://github.com/github/copilot-cli/issues/2758) (sub-agent model override), [#3099](https://github.com/github/copilot-cli/issues/3099) (Claude Opus for personal accounts), [#3101](https://github.com/github/copilot-cli/issues/3101) (enterprise policy blocks) | Tense — cost controls vs. user agency is a friction point |
| **Cross-platform input parity** | [#3104](https://github.com/github/copilot-cli/issues/3104), [#3105](https://github.com/github/copilot-cli/issues/3105) (macOS paste/backspace behaviors) | Emerging — Windows-first features creating macOS second-class experience |

---

## 6. Developer Pain Points

**Billing opacity and premium request anxiety** dominates. The closure of [#2591](https://github.com/github/copilot-cli/issues/2591) and [#1770](https://github.com/github/copilot-cli/issues/1770) confirms the issue was real and widespread, but [#2421](https://github.com/github/copilot-cli/issues/2421) shows underlying infrastructure still silently wastes quota. Users lack real-time feedback — [#2052](https://github.com/github/copilot-cli/issues/2052) requests a "status bar" for context usage.

**Enterprise/policy friction** is escalating. [#3101](https://github.com/github/copilot-cli/issues/3101) reports total model lockout; [#953](https://github.com/github/copilot-cli/issues/953) highlights excessive OAuth scope requests; [#1607](https://github.com/github/copilot-cli/issues/1607) notes regression in headless security primitives. The CLI feels caught between consumer simplicity and enterprise control.

**Terminal rendering regressions** are multiplying. Alt-screen adoption ([#1799](https://github.com/github/copilot-cli/issues/1799)) introduced compatibility issues, and now [#3110](https://github.com/github/copilot-cli/issues/3110) reports complete scrollback loss. The TUI is becoming a source of distrust for users who need durable output.

**Configuration fragmentation** between VS Code and CLI is a maintenance burden. [#3019](https://github.com/github/copilot-cli/issues/3019) explicitly calls out the breaking removal of `.vscode/mcp.json` support, forcing teams into duplicate configs. The ecosystem is not converging as expected.

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-05-05.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-05

## Today's Highlights

The community is actively addressing one of the most requested UX improvements: **thinking content visibility**. A new PR (#2158) implements a `Ctrl+T` toggle to hide/show reasoning traces from thinking models, directly closing a popular feature request (#1632). Meanwhile, a new plugin **kimi-mneme** introduces persistent cross-session memory, solving a fundamental "blank slate" problem that has plagued CLI assistants.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2160](https://github.com/MoonshotAI/kimi-cli/issues/2160) | **Inexplicable crash during operation** | Stability bug on Windows with v1.41.0 affecting core usability; 3 comments suggest active investigation needed | 🔴 High priority; user reports multiple crashes mid-session |
| [#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632) | **Option to hide thinking content** | Thinking models dump verbose reasoning traces that clutter terminal real estate; impacts daily productivity for power users | 2 👍, strong consensus; now has active PR |
| [#1585](https://github.com/MoonshotAI/kimi-cli/issues/1585) | **Customizable newline keybinding (Shift+Enter)** | `Ctrl+J` for newlines is universally criticized as ergonomically hostile; this is a persistent UX papercut | 1 👍, emotionally charged feedback ("不会死的"/"won't kill you") |
| [#2161](https://github.com/MoonshotAI/kimi-cli/issues/2161) | **Plugin Showcase: kimi-mneme** | First notable community plugin for persistent memory; addresses architectural limitation of stateless sessions | Early traction; 1 comment, potential ecosystem growth signal |
| [#2159](https://github.com/MoonshotAI/kimi-cli/issues/2159) | **Show yolo & afk mode status in Web UI** | Safety-critical visibility gap: users need to know when autonomous modes are active to prevent unintended actions | New, no reactions yet; fills trust/safety hole |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2158](https://github.com/MoonshotAI/kimi-cli/pull/2158) | **feat(ui): add Ctrl+T toggle for thinking content visibility** | Runtime toggle for thinking traces; **hidden by default** to reduce noise; closes #1632 | 🟢 Open, ready for review |

---

## Feature Request Trends

1. **Thinking Content Control** — Users want granular control over reasoning visibility (toggle, filter, or collapse), not just all-or-nothing display
2. **Input Ergonomics** — Customizable keybindings for newline insertion and other shell interactions; current defaults feel alien to standard terminal conventions
3. **Mode Visibility & Safety** — Autonomous modes (yolo/afk) need persistent, unmissable status indicators across all interfaces
4. **Session Continuity** — Cross-session memory and context persistence emerging as ecosystem-level need (kimi-mneme plugin validates this)

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Crash stability on Windows** | Sporadic but severe | #2160 — mid-operation termination, v1.41.0, no clear repro pattern yet |
| **Non-ergonomic default keybindings** | Chronic, recurring | #1585 — `Ctrl+J` for newline repeatedly flagged as "genius" design (sarcastic) |
| **Thinking output clutter** | Daily friction | #1632 + #2158 — terminal noise from reasoning models actively hurts readability |
| **Opaque autonomous mode state** | Safety risk | #2159 — users cannot confirm yolo/afk status from Web UI, creating trust gaps |
| **Stateless session boundaries** | Architectural | #2161 plugin — community building workarounds for missing native persistence |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-05-05.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-05

## Today's Highlights

OpenCode v1.14.34 shipped with critical terminal reliability improvements including PTY connection tickets and v2 session failure events. The community is actively wrestling with DeepSeek V4 reasoning content handling, with multiple unmerged PRs containing complete fixes still pending review. Meanwhile, a surge of compliance-tagged issues and PRs suggests maintainers are enforcing stricter contribution standards.

---

## Releases

### [v1.14.34](https://github.com/anomalyco/opencode/releases/tag/v1.14.34)
- **PTY connection tickets**: Authenticated terminal websockets now work more reliably across clients
- **v2 session failure events**: Clients can now detect and surface failed runs
- **Shell command handling improvements**: Better support for Bash, PowerShell, and cmd sessions

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | "Preparing write..." infinite loop | Core workflow blocker affecting file operations; 62 comments suggest widespread impact with no clear resolution path | 🔥 62 comments, 27 👍 |
| [#23887](https://github.com/anomalyco/opencode/issues/23887) | Kimi K2.6/K2.5 "Provider returned error" via OpenCode Go | Model-specific provider breakage; contrasts with working GLM-5/Qwen3.5 under same subscription | 37 comments, 7 👍 |
| [#4832](https://github.com/anomalyco/opencode/issues/4832) | Gemini 3 Pro function calling missing `thoughtSignature` | Closed after resolution; highlights Google's evolving API surface and OpenCode's lag in adopting new Gemini features | 29 comments, 14 👍 |
| [#16685](https://github.com/anomalyco/opencode/issues/16685) | Kimi K2.5 "Provider returned error" on Windows | Platform-specific variant of #23887; closed but pattern suggests systemic OpenCode Go + Kimi compatibility issues | 24 comments, 8 👍 |
| [#24722](https://github.com/anomalyco/opencode/issues/24722) | DeepSeek thinking mode: `reasoning_content` not passed back | Critical for DeepSeek V4 adoption; API contract violation causes 400 errors on multi-turn tool calls | 10 comments, 5 👍 |
| [#25311](https://github.com/anomalyco/opencode/issues/25311) | DeepSeek V4 fix exists in unmerged PRs | Community frustration: complete fix available but not merged in v1.14.31; signals review bottleneck | 4 comments, 1 👍 |
| [#25758](https://github.com/anomalyco/opencode/issues/25758) | `reasoning_content` missing in assistant tool call message | Fresh v1.14.33 regression affecting both Kimi 2.6 and DeepSeek-v4-pro via OpenCode Go | 3 comments, new |
| [#25711](https://github.com/anomalyco/opencode/issues/25711) | Plan mode "useless now" — truncated to 4 lines | User experience degradation in v1.14.33; plan mode core value proposition compromised | 3 comments, new |
| [#12308](https://github.com/anomalyco/opencode/issues/12308) | Entra Authentication for MCP doesn't work | Enterprise/Azure adoption blocker; resource parameter mismatch prevents OAuth flow completion | 16 comments |
| [#23944](https://github.com/anomalyco/opencode/issues/23944) | Frequent OpenAI server errors | GPT-5.4 reliability concerns; error surfacing could be improved per related PR #25763 | 11 comments, 8 👍 |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#25780](https://github.com/anomalyco/opencode/pull/25780) | Fix Japanese i18n for todo progress | 🟡 Open | Localization fix; compliance-tagged, awaiting review |
| [#21650](https://github.com/anomalyco/opencode/pull/21650) | Add `OPENCODE_DISABLE_GLOBAL_CONFIG` flag | 🟡 Open | Enables embedded `opencode serve` use cases (Electron, backend services); closes #21264 |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | Mobile touch optimization | 🟡 Open | First-class mobile/touch support while preserving desktop experience |
| [#25778](https://github.com/anomalyco/opencode/pull/25778) | Refresh config cache after file changes | 🟡 Open | Fixes stale config state; closes #25767 |
| [#25775](https://github.com/anomalyco/opencode/pull/25775) | Keep tool-call/tool-result paired in Anthropic normalize | 🟡 Open | Fixes message splitting bug for Anthropic/Vertex; closes #25774 |
| [#25773](https://github.com/anomalyco/opencode/pull/25773) | Preserve shell PATH for Tauri sidecar | 🟡 Open | Fixes #25748; non-nushell Unix shells get proper env harvesting |
| [#25667](https://github.com/anomalyco/opencode/pull/25667) | Research: delete Hono backend | 🟡 Open | **Not for merge** — scope spike for HttpApi-only backend; ~9K deletions shows migration cliff |
| [#25121](https://github.com/anomalyco/opencode/pull/25121) | Project config overrides global `~/.opencode` | 🟡 Open | Fixes long-standing precedence bug; closes #19296, #21307 |
| [#23111](https://github.com/anomalyco/opencode/pull/23111) | Display cached token count inline in TUI | 🟡 Open | UX improvement for cache visibility; closes #23109 |
| [#23104](https://github.com/anomalyco/opencode/pull/23104) | Preserve reasoning `providerMetadata` across model switches | 🟡 Open | Fixes Anthropic thinking block stripping; closes #22813 |

---

## Feature Request Trends

1. **Remote/Network Access**: ACP over WebSocket (#13388) and reverse proxy base path support (#25776, closed via #25777) indicate demand for non-local deployments
2. **Multi-Account Provider Support**: Power users want multiple credentials per provider (#25738) — personal/team/org isolation
3. **Compaction Model Selection**: Lightweight models for context compression (#6976, closed) — cost/performance optimization
4. **Terminal UX Polish**: Disable copy-on-select (#15941), mouse wheel scrolling behavior (#24760), question dialog collapse (#19400)
5. **Lifecycle Extensibility**: Custom agents need parity with built-in plan/build injection hooks (#25753, closed)

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **DeepSeek V4 reasoning content handling** | #24722, #25311, #25758, #23104, #23108 | 🔴 Critical — multiple unmerged fixes, 400 errors block usage |
| **Plan mode degradation** | #25711, #15475 | 🔴 High — core feature broken in recent releases |
| **OpenCode Go + Kimi compatibility** | #23887, #16685, #25758 | 🟡 High — model-specific provider failures |
| **Config precedence/embedding** | #21264, #19296, #21307, #25121, #25778 | 🟡 Moderate — global vs. project config confusion |
| **Enterprise auth (Entra/Azure)** | #12308 | 🟡 Moderate — MCP OAuth flow broken |
| **Compliance friction** | #25771, #25770, #25783, #25782, #25759, #25753 | 🟡 Rising — new `needs:compliance` tag closing issues/PRs rapidly |

---

*Digest compiled from github.com/anomalyco/opencode activity on 2026-05-04 to 2026-05-05.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-05

## Today's Highlights

Pi v0.73.0 shipped with Xiaomi MiMo API billing and regional token plan providers, marking continued expansion into China-market AI infrastructure. Meanwhile, a massive "big refactor" closure wave swept through the issue tracker—dozens of bugs and feature requests were bulk-closed, signaling a major architectural rewrite underway that the maintainers are using to reset technical debt before the next development cycle.

---

## Releases

**[v0.73.0](https://github.com/badlogic/pi-mono/releases/tag/v0.73.0)** — New regional provider architecture for Xiaomi MiMo: `xiaomi` now routes through API billing, with dedicated `xiaomi-token-plan-{cn,ams,sgp}` providers for China, Amsterdam, and Singapore regions. Documentation updated in [providers.md](https://github.com/badlogic/pi-mono/blob/main/docs/providers.md#api-keys) and [README.md](https://github.com/badlogic/pi-mono/blob/main/README.md#providers--models).

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | Custom Thinking Levels per Model | Foundation for model-aware reasoning control; shifts thinking from global hack to first-class model capability | 14 comments, 13 👍—ghost91- volunteered to implement once approach is blessed; shows strong community ownership |
| [#3357](https://github.com/badlogic/pi-mono/issues/3357) | Official local LLM provider extension | julien-c (Hugging Face co-founder) filed this—dynamic model list fetching from `{baseUrl}/models` would unlock llama.cpp/ollama/LM Studio integration without manual config | 8 comments, 21 👍; highest-voted open issue, reflects massive local-LLM demand |
| [#4022](https://github.com/badlogic/pi-mono/issues/4022) | Antigravity Models broken | Provider deprecation broke auth flow—"This version of Antigravity is no longer supported" | 5 comments; rapid closure suggests external dependency drift, not core Pi bug |
| [#3567](https://github.com/badlogic/pi-mono/issues/3567) | Official llama.cpp provider | Complements #3357 with specific llama-server integration—model discovery, context window defaults, thinking config | 4 comments; closed as completed, indicating this shipped or was absorbed into refactor |
| [#4157](https://github.com/badlogic/pi-mono/issues/4157) | `pi-update` TLS warning on Windows | `NODE_TLS_REJECT_UNAUTHORIZED=0` degrades security posture on Windows installs | 4 comments; tagged `closed-because-bigrefactor`—security debt deferred to post-rewrite |
| [#4173](https://github.com/badlogic/pi-mono/issues/4173) | Anthropic /login OAuth URL missing parameters | Blocks Claude Code Pro subscription integration entirely | 3 comments; closed despite being same-day report—refactor priority over provider fixes |
| [#4163](https://github.com/badlogic/pi-mono/issues/4163) | `pi -p` silent no-op on `---` prefix | YAML frontmatter-style prompts fail silently—breaks automation pipelines that use `---` as delimiter | 3 comments; edge case but dangerous for scripting users |
| [#4158](https://github.com/badlogic/pi-mono/issues/4158) | TUI nested list double indent | Hardcoded regex mismatches shipped themes—visual regression compounds with depth | 3 comments; open, UI polish deferred |
| [#4134](https://github.com/badlogic/pi-mono/issues/4134) | `pi -p` hangs after output | Non-interactive mode fails to exit—breaks CI/CD integrations | 3 comments; `possibly-openclaw-clanker` tag suggests embedded-runner specific |
| [#4142](https://github.com/badlogic/pi-mono/issues/4142) | macOS image paste hard-aborts in sandbox | `NSPasteboard` panic crashes Pi when pasteboard permissions denied—no graceful fallback | 2 comments; open, security/sandboxing concern for enterprise deployments |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#4178](https://github.com/badlogic/pi-mono/pull/4178) | Moonshot K2.6 `reasoning_content` fix | Non-empty placeholder required for multi-turn tool-call replay; provider-specific adapter config | **Merged**—fixes 400 errors on Moonshot thinking models |
| [#3887](https://github.com/badlogic/pi-mono/pull/3887) | Image content / image generation API | New streaming API for image blocks via Google/OpenRouter; enables agent image output with TUI preview | **Open**—major feature, 7 days old, awaiting review |
| [#4162](https://github.com/badlogic/pi-mono/pull/4162) | Comments & trailing commas in `models.json` | `stripJsonComments` helper—human-friendly config without breaking JSON.parse | **Merged**—julien-c's UX polish |
| [#4170](https://github.com/badlogic/pi-mono/pull/4170) / [#4171](https://github.com/badlogic/pi-mono/pull/4171) | OpenRouter reasoning preservation (Responses API) | Out-of-order output item events dropped reasoning; fixes streaming for OpenRouter `openai-responses` compatibility | **Both merged**—duplicate PRs suggest hotfix urgency |
| [#4165](https://github.com/badlogic/pi-mono/pull/4165) | Incremental bash output streaming | Eliminates O(n²) buffer rebuild on every chunk—fixes TUI lag/freeze on verbose commands | **Merged**—mitsuhiko's performance fix |
| [#4154](https://github.com/badlogic/pi-mono/pull/4154) | Official local-LLM provider extensions | Four async-factory providers (llama.cpp, ollama, LM Studio, vLLM) probing `{baseUrl}/models` at startup | **Merged**—closes #3357 and #3469 |
| [#4126](https://github.com/badlogic/pi-mono/pull/4126) / [#4159](https://github.com/badlogic/pi-mono/pull/4159) | Retry on HTTP 404/408 | Expands `_isRetryableError` beyond 429/5xx—catches CDN edge transient failures (observed with Cerebras) | **Both merged**—duplicate PRs, nlachica persistent |
| [#3737](https://github.com/badlogic/pi-mono/pull/3737) | GPT-5.5 context metadata correction | Distinguishes OpenAI native (1.05M) vs. Copilot route (400K) vs. legacy Codex route (272K) context windows | **Merged**—model accuracy critical for token planning |
| [#4148](https://github.com/badlogic/pi-mono/pull/4148) | Active tool updates during running sessions | Fixes `setActiveTools()` mid-session—stale array reference prevented tool visibility in current prompt cycle | **Merged**—correctness fix for dynamic tool injection |

---

## Feature Request Trends

1. **Local LLM first-class citizenship** — Dynamic model discovery (#3357, #4154), llama.cpp/ollama/vLLM/LM Studio integrations dominate demand; community wants Pi to treat local inference as peer to cloud APIs, not afterthought.

2. **Model-native capability exposure** — Thinking levels per model (#3208), context window accuracy (#3737, #4176), reasoning content handling (#4178, #4179) show push toward model-specific schema rather than one-size-fits-all abstraction.

3. **Multi-modal output** — Image generation API (#3887) is the first non-text output path; likely precursor to audio/video if pattern holds.

4. **Cross-language SDKs** — Python SDK request (#4174) for `pi-agent-core`/`pi-ai` indicates embedding demand beyond TypeScript/node ecosystem.

5. **Standardized agent identification** — `AGENT=pi` env var proposal (#4169) reflects industry move toward interoperable agent signaling (referencing #2868 precedent).

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **"Big refactor" disruption** | 15+ issues/PRs tagged `closed-because-bigrefactor` in 24h | 🔴 High — legitimate bugs closed without fix, erodes trust in issue tracker as signal |
| **Windows second-class support** | #4157 (TLS warnings), #4144 (terminal detach CPU spin) | 🟡 Medium — platform parity gaps in update mechanism and TUI lifecycle |
| **Non-interactive mode fragility** | #4163 (`---` silent no-op), #4134 (hang after output), #4175 (`sendUserMessage` command dispatch broken) | 🔴 High — automation/CI use cases fundamentally unreliable |
| **Provider auth drift** | #4022 (Antigravity deprecated), #4173 (Anthropic OAuth broken), #4141 (expired tokens hang), #4143 (Xiaomi regional providers non-functional) | 🟡 Medium — auth layer appears reactive, not resilient to provider changes |
| **Performance at scale** | #4145 (bash O(n²) streaming — fixed), #4151 (resource loader redundant reloads), #4150 (stale subprocess crashes) | 🟡 Medium — embedded/long-running deployments hit resource and correctness limits |
| **Clipboard/platform integration gaps** | #4177 (Wayland silent failure), #4142 (macOS sandbox panic) | 🟢 Low — polish issues, but break user trust in "it just works" |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-05

## Today's Highlights

The Qwen Code team shipped **v0.15.6-nightly** with a new `FileReadCache` for short-circuiting redundant file reads, alongside critical proxy fixes. Meanwhile, the community is actively stress-testing terminal rendering stability and file mutation safety, with two significant PRs landing to prevent silent overwrites of externally modified files and to enforce read-before-write semantics.

---

## Releases

### [v0.15.6-nightly.20260504.e617f20d1](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260504.e617f20d1)
- **feat(core)**: Added `FileReadCache` with short-circuit for unchanged reads — reduces redundant I/O and LLM context consumption ([#3717](https://github.com/QwenLM/qwen-code/pull/3717))
- **fix(cli)**: Proxy settings now properly honored in CLI requests ([#3766](https://github.com/QwenLM/qwen-code/pull/3766))

---

## Hot Issues

| # | Issue | Why It Matters | Status |
|---|-------|--------------|--------|
| [#3838](https://github.com/QwenLM/qwen-code/issues/3838) | **Terminal infinite scroll/refresh loop** — UI enters "crazy refresh cycle" during code generation, making output unreadable | Critical UX regression affecting daily usability; appears to be Ink renderer issue on Node.js v24 | 🔴 Open, 1 comment |
| [#3822](https://github.com/QwenLM/qwen-code/issues/3822) | **Session JSONL bloat after large file edits** — `edit`/`write_file` persist unbounded `originalContent`/`newContent`/`fileDiff`, causing `/resume` to hang | Direct performance impact on session recovery; root cause identified, needs bounded persistence | 🔴 Open, 1 comment |
| [#3839](https://github.com/QwenLM/qwen-code/issues/3839) | **Edit/WriteFile silently clobber externally modified files** — write path ignores `FileReadCache.check()` stale status | Data loss risk; race condition between parallel agents or external editors | 🔴 Open, 0 comments |
| [#3824](https://github.com/QwenLM/qwen-code/issues/3824) | **Terminal resize leaves blue border artifacts** — Ink 6.2.3 reflow bug causes composer frame accumulation | Related to #3213 and #3838; suggests systemic terminal renderer fragility | 🔴 Open, 0 comments |
| [#3634](https://github.com/QwenLM/qwen-code/issues/3634) | **Background task management roadmap** — wenshao's phased design for background agents, now at Phase D | Core architecture evolution; Ctrl+B foreground→background promotion designed in [#3831](https://github.com/QwenLM/qwen-code/issues/3831) | 🟡 Open, 2 comments |
| [#3837](https://github.com/QwenLM/qwen-code/issues/3837) | **ACP mode missing slash command `/` support** — skills unselectable in Zed integration | Blocks IDE workflow; ACP (Agent Chat Protocol) parity gap | 🔴 Open, 0 comments |
| [#3823](https://github.com/QwenLM/qwen-code/issues/3823) | **@qwen-code/sdk 0.1.6/0.1.7 CLI process crash** — "exited with code 1" regression from 0.1.5 | SDK stability concern for downstream builders; lacks detailed error diagnostics | 🔴 Open, 0 comments |
| [#3213](https://github.com/QwenLM/qwen-code/issues/3213) | **Terminal display corruption after resize** — Windows-specific, ongoing since April | Long-standing renderer issue; may share root cause with #3824 and #3838 | 🔴 Open, 2 comments |
| [#3805](https://github.com/QwenLM/qwen-code/issues/3805) | **read/glob tools fail to return content to LLM after long sessions** — session duration correlation suspected | Closed but noteworthy: suggests state degradation over time, may recur | ✅ Closed |
| [#3829](https://github.com/QwenLM/qwen-code/issues/3829) | **Image paste broken on Wayland** — `wl-clipboard` present but non-functional | Linux desktop parity gap; regression or environment detection issue | 🔴 Open, 0 comments |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3840](https://github.com/QwenLM/qwen-code/pull/3840) | **Refuse Edit/WriteFile when file changed since last read** — Enforces `FileReadCache.check()` on write path; prevents silent overwrites | Fixes #3839; safety-critical | 🟡 Open |
| [#3774](https://github.com/QwenLM/qwen-code/pull/3774) | **Enforce prior read before Edit/WriteFile mutation** — Builds on #3717 cache to require model has seen current bytes | Architectural guardrail for tool safety | 🟡 Open |
| [#3836](https://github.com/QwenLM/qwen-code/pull/3836) | **Surface and cancel auto-memory dream tasks** — Exposes background memory consolidation in unified tasks UI | Background task transparency; part of #3634 roadmap | 🟡 Open |
| [#3819](https://github.com/QwenLM/qwen-code/pull/3819) | **Prevent duplicate MCP processes from concurrent discovery** — In-flight guard for `McpClientManager` | Fixes #3817; resource leak prevention | 🟡 Open |
| [#3815](https://github.com/QwenLM/qwen-code/pull/3815) | **Per-model settings for fast model side queries** — Stops main model `extra_body`/`samplingParams` from leaking into fast model | Fixes #3765; configuration isolation | 🟡 Open |
| [#3814](https://github.com/QwenLM/qwen-code/pull/3814) | **Prevent auto-memory recall from blocking main request** — Reduces 5s per-turn delay from recall timeout | Fixes #3759; latency improvement | 🟡 Open |
| [#3826](https://github.com/QwenLM/qwen-code/pull/3826) | **Track model-sent slash command history** — Distinguishes local UI commands from actual model submissions | UX accuracy for command history | 🟡 Open |
| [#3714](https://github.com/QwenLM/qwen-code/pull/3714) | **Write runtime.json sidecar for active sessions** — PID→session mapping for external tooling | Observability/integrability improvement | 🟡 Open |
| [#3698](https://github.com/QwenLM/qwen-code/pull/3698) | **Run auto compression before ACP model sends** — Fixes #3652; chat compression in ACP mode | ACP reliability | 🟡 Open |
| [#3820](https://github.com/QwenLM/qwen-code/pull/3820) | **Unescape shell-escaped file paths in file tools** — `my\ file.txt` → `my file.txt` normalization | Closed; path handling robustness | ✅ Closed |

---

## Feature Request Trends

1. **Background Task Orchestration** — Phase D design for Ctrl+B foreground→background promotion ([#3831](https://github.com/QwenLM/qwen-code/issues/3831)) and unified task visibility ([#3836](https://github.com/QwenLM/qwen-code/pull/3836)) indicate mature multi-agent execution is a priority.

2. **Structured/Programmatic Output** — `--json-schema` headless mode ([#3598](https://github.com/QwenLM/qwen-code/pull/3598)) and `/model list` for scripting ([#3797](https://github.com/QwenLM/qwen-code/pull/3797), closed) show demand for automation-friendly interfaces.

3. **Readline/Emacs Keybinding Parity** — macOS-native shortcuts ([#3821](https://github.com/QwenLM/qwen-code/issues/3821)) requested for CLI ergonomics.

4. **Path-Conditional Skill Activation** — Result-side path tracking ([#3830](https://github.com/QwenLM/qwen-code/issues/3830)) to broaden skill triggering beyond input candidates.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Terminal Renderer Fragility** | #3838, #3824, #3213 — Ink-based UI exhibits resize corruption, infinite loops, and frame accumulation across platforms | 🔴 High |
| **Session State Degradation** | #3822 (JSONL bloat), #3805 (tool failures after long sessions), #3606 (session not found) — persistence layer scales poorly | 🔴 High |
| **File Mutation Safety** | #3839, #3774, #3840 — lack of stale-file detection risks data loss; being actively patched | 🟡 Medium (mitigating) |
| **SDK Version Stability** | #3823 — patch-level SDK upgrades breaking existing integrations | 🟡 Medium |
| **IDE Integration Gaps** | #3837 (ACP slash commands in Zed), #3825 (401 auth in Zed) — editor plugin parity lags CLI | 🟡 Medium |
| **Linux Desktop Polish** | #3829 (Wayland image paste) — clipboard integration inconsistent outside macOS/Windows | 🟢 Lower |

---

*Digest compiled from github.com/QwenLM/qwen-code activity through 2026-05-05 00:00 UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*