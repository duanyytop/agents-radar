# AI CLI Tools Community Digest 2026-04-02

> Generated: 2026-04-02 00:10 UTC | Tools covered: 8

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

# AI CLI Tools Cross-Comparison Report — 2026-04-02

## 1. Ecosystem Overview

The AI CLI tooling landscape has entered a **maturation phase marked by reliability crises and architectural divergence**. All major tools face intense pressure around token consumption transparency, context management at scale, and cross-platform parity—particularly Windows support. Simultaneously, we're seeing divergent bets: Anthropic and OpenAI are aggressively shipping rapid releases with mixed stability, while Google and community alternatives (Pi, OpenCode) are investing in foundational rewrites (Effect-TS, Rust) and context compression research. The emergence of "open source Claude Code" extraction efforts and complete architectural rewrite proposals (Kimi's Bun/TS migration) signals growing frustration with closed-source opacity and performance ceilings.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Velocity | Notable |
|------|:-----------:|:---------:|:--------:|:----------------:|---------|
| **Claude Code** | 50 | 46 | 2 (v2.1.89–v2.1.90) | 🔥 Rapid | Crisis-driven patches; rate-limit regression unacknowledged |
| **OpenAI Codex** | 50 | 50 | 1 (rust-v0.119.0-alpha.2) | 🐢 Slow | Internal crate modularization focus; minimal user-facing changes |
| **Gemini CLI** | ~15 | ~10 | 3 (v0.37.0-preview.0, v0.36.0, preview.8) | 🔥 Rapid | Context compression service landed; Windows reliability push |
| **GitHub Copilot CLI** | ~12 | **0** | 4 (v1.0.15 through v1.0.16-0) | 🔥 Rapid | MCP auth flows, BYOK fixes; no community PR activity |
| **Kimi CLI** | ~10 | ~10 | 1 (v1.29.0) | 🐢 Slow | Session UX polish; provocative Python→Bun rewrite PR |
| **OpenCode** | 50 | 50 | 1 (v1.3.13) | 🐢 Slow | Effect-TS migration ongoing; Zen tier communication crisis |
| **Pi** | 24 closed | ~10 | 0 | ⏸️ Stalled | Memory leak fixes, OAuth repairs; release gap |
| **Qwen Code** | ~12 | ~10 | 4 (v0.14.0-preview.3–.4, backports) | 🔥 Rapid | Path fix propagated across channels; model parity embarrassment |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Evidence | Urgency |
|-------------|-------|-------------------|---------|
| **Token/usage transparency & billing controls** | Claude Code, OpenAI Codex, OpenCode | CC #16157, #38335 (Max plan exhaustion); Codex #14593 ("burning tokens"); OpenCode #15585, #15714 (Zen tier confusion) | 🔴 Critical |
| **Context compression & sliding window management** | Gemini CLI, OpenCode, Kimi CLI | Gemini #24483 (`ContextCompressionService`); OpenCode #4659 (sliding window proposal); Kimi #1691 (incremental compression) | 🔴 Critical |
| **Windows parity & reliability** | Claude Code, OpenAI Codex, Gemini CLI, Kimi CLI, Pi | CC #32227 (EBUSY Windows); Codex #10410 (Intel Mac), #15057 (AppArmor); Gemini 4+ Windows PRs; Kimi #1702 (PowerShell); Pi #2744 (CRLF) | 🟡 High |
| **MCP ecosystem maturity** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Qwen Code | CC plugin infrastructure; Codex #15919 (codex-mcp crate); Copilot v1.0.15-1 (MCP auth); Qwen #2782 (MCP permissions) | 🟡 High |
| **Voice/multimodal input** | OpenAI Codex, Gemini CLI, Kimi CLI | Codex #3000, #16404 (regression); Gemini #18499 (pluggable voice); Kimi implicit via web UI | 🟢 Emerging |
| **Session portability & persistence** | Claude Code, Kimi CLI, OpenCode | CC #39148 (preserve-session plugin); Kimi #1536/#1685 (manual titles); OpenCode #20532 (desktop persistence) | 🟡 High |
| **Agent behavior verification & testing** | Claude Code, OpenAI Codex | CC #42245 (EvalView plugin); Codex #16055 (fork inheritance), #13637 (fork replay) | 🟢 Emerging |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi CLI | OpenCode | Pi | Qwen Code |
|-----------|:-----------:|:------------:|:----------:|:------------------:|:--------:|:--------:|:--:|:---------:|
| **Primary Target** | Professional developers, Max subscribers | Rust/performance-focused engineers; multi-agent systems | Google Cloud/enterprise users | GitHub ecosystem natives | Chinese market, Web UI hybrid users | Cost-conscious, model-agnostic power users | Gateway operators, extension builders | Alibaba Cloud, Chinese developers |
| **Technical Architecture** | Closed-source, rapid iteration | Rust, crate-modularized | TypeScript, context compression R&D | Electron/TypeScript, VS Code parity focus | Python (Bun rewrite proposed) | Effect-TS, functional rewrite | TypeScript, RPC-first | TypeScript, ACP/IDE companion |
| **Key Differentiator** | Deepest IDE integration; plugin ecosystem | Multi-agent orchestration; reasoning model optimization | Native Google model integration; compression research | GitHub-native workflows; MCP auth maturity | Web UI + terminal hybrid; hierarchical AGENTS.md | Extreme model flexibility; sliding window research | Extension API; gateway/server mode | Alibaba Cloud integration; Chinese localization |
| **Current Vulnerability** | Rate-limit/billing crisis; source extraction PRs | Token burn complaints; platform gaps (Intel Mac) | Subagent coordination failures; memory routing confusion | Model entitlement desync; zero community PRs | Windows fragility; MCP dev cycle friction | Zen tier trust erosion; Effect migration instability | OAuth breakage; Windows gaps | Model parity gaps (Qwen 3.6); ACP reliability |
| **Openness** | Closed (source extraction efforts) | Partial (Rust open, models closed) | Partial | Closed | Partial | Partial | Most extensible (extension API) | Partial |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **🔥 High Velocity, High Tension** | Claude Code, Gemini CLI, Qwen Code | Rapid releases but acute user crises; communities are active but frustrated. Claude Code has the most engaged issue tracker (1,422-comment threads) but trust erosion from unacknowledged regressions. |
| **🛠️ Structural Investment** | OpenAI Codex, OpenCode, Kimi CLI | Slower user-facing progress but significant architectural work (Rust modularization, Effect-TS migration, rewrite proposals). Communities are patient but watching for delivery. |
| **⚠️ Maintenance Mode Risk** | Pi, GitHub Copilot CLI | Pi: 24 issues closed but no release; effective triage but shipping stalled. Copilot CLI: 4 releases but **zero PR activity** suggests internal-only development; community engagement superficial. |
| **🌊 Emerging Pressure** | Qwen Code | Aggressive release cadence with backport propagation, but model availability gaps create credibility risk with core audience. |

**Maturity Indicators**: Gemini CLI and OpenCode show most sophisticated technical discourse (context compression architectures, sliding window proposals). Claude Code has deepest operational experience but is struggling with scale-induced reliability. Pi demonstrates strongest extension API design for ecosystem building.

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Billing transparency as competitive differentiator** | Universal crisis across CC, Codex, OpenCode; users demanding per-prompt token visibility | Tools that solve this proactively will capture enterprise trust; current "percentage bar" UX is insufficient |
| **Context management as core architecture** | Gemini's `ContextCompressionService`, OpenCode's sliding window proposal, Kimi's incremental compression | Next-generation differentiator beyond raw model capability; efficiency at 100K+ token contexts |
| **Platform parity as adoption gate** | Windows issues pervasive; WSL, PowerShell, CRLF, sandboxing as recurring themes | "Mac-first, Linux-second, Windows-eventually" strategy is now a liability; enterprise adoption requires Windows excellence |
| **MCP as interoperability standard** | Codex extracting codex-mcp crate; Copilot MCP auth flows; Qwen MCP permission gaps | Ecosystem bet: tools that make MCP seamless (auth, discovery, hot-reload) will capture integration value |
| **Architectural bets: Rust vs. Effect-TS vs. status quo** | Codex (Rust), OpenCode (Effect-TS), Kimi (proposed Bun/TS), Claude Code (opaque) | Performance vs. type safety vs. ecosystem velocity tradeoffs becoming explicit; no consensus winner yet |
| **"Open source pressure" as forcing function** | Claude Code source extraction PRs (#41518), multiple "open source Claude Code" efforts | Closed-source tools face auditability and customization demands; may force licensing or transparency concessions |

---

**Bottom Line**: The AI CLI market is transitioning from "does it work?" to "can I trust it with production workloads and costs?" Reliability, transparency, and cross-platform maturity are now table stakes. The winners of 2026 will be those who solve the billing/context crises while delivering genuine architectural innovation—not just model upgrades.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-02 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Quality control for AI-generated documents: prevents orphan words, widow paragraphs, and numbering misalignment | Universal pain point—every Claude document affected; seeking merge |
| 2 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation frontend design instructions | Clarity vs. verbosity tradeoffs; token efficiency |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Skills across 5 quality dimensions and security posture | Meta-cognitive tooling; marketplace validation |
| 4 | **ODT Processing** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and HTML conversion (ISO 26300) | Enterprise document workflows; LibreOffice/OnlyOffice integration |
| 5 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for business data analytics | Enterprise ERP integration; Apache 2.0 model adoption |
| 6 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step workflow for identifying orphaned code, unused files, documentation gaps | Technical debt management; monolith cleanup |
| 7 | **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Persistent memory system for AI agents across conversations | Session continuity; context retention architecture |
| 8 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, MSW | Test generation philosophy; what NOT to test |

---

## 2. Community Demand Trends

From high-engagement Issues, four dominant Skill categories emerge:

| Trend | Evidence | Representative Issue |
|:---|:---|:---|
| **Workflow Persistence** | Session state loss is critical friction | [#522](https://github.com/anthropics/skills/pull/522) `plan-task`, [#154](https://github.com/anthropics/skills/pull/154) `shodh-memory` |
| **Enterprise Governance** | Security, audit trails, policy enforcement | [#412](https://github.com/anthropics/skills/issues/412) agent-governance proposal, [#492](https://github.com/anthropics/skills/issues/492) trust boundary concerns |
| **Quality Engineering Revival** | Automated quality systems, traditional QA practices | [#659](https://github.com/anthropics/skills/pull/659) `quality-playbook` |
| **MCP Interoperability** | Skills as standardized APIs | [#16](https://github.com/anthropics/skills/issues/16) Expose Skills as MCPs |

Secondary: **Multi-modal generation** (image/video via [#335](https://github.com/anthropics/skills/pull/335)), **Telegram/remote control** ([#419](https://github.com/anthropics/skills/pull/419)), and **org-wide skill sharing** ([#228](https://github.com/anthropics/skills/issues/228)).

---

## 3. High-Potential Pending Skills

Active PRs with recent momentum (March 2026 activity) likely to merge:

| Skill | PR | Last Activity | Merge Readiness |
|:---|:---|:---|:---|
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-03-30 | Comprehensive scope; fills critical gap |
| **Quality Playbook** | [#659](https://github.com/anthropics/skills/pull/659) | 2026-03-29 | Unique "requirements-first" testing philosophy |
| **Multi-skill Bundle** | [#740](https://github.com/anthropics/skills/pull/740) | 2026-03-30 | 11 skills: UX Journeymapper, Pre-deployment Validator, Mermaid Terminal |
| **Plan-Task Persistence** | [#522](https://github.com/anthropics/skills/pull/522) | 2026-03-09 | Addresses #1 user pain: session continuity |
| **DOCX/PDF Fixes** | [#541](https://github.com/anthropics/skills/pull/541), [#538](https://github.com/anthropics/skills/pull/538) | 2026-03-31 | Critical bug fixes; maintenance priority |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for stateful, enterprise-grade workflow orchestration—Skills that persist context across sessions, enforce governance boundaries, and integrate with existing business systems (SAP, ODT, quality management) rather than generating net-new code.**

---

*Report generated from 50 PRs and 50 Issues. All 🔗 link to github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-04-02

---

## 1. Today's Highlights

Anthropic shipped two rapid-fire releases (v2.1.89–v2.1.90) adding interactive `/powerup` tutorials and flicker-free rendering, but the community is in crisis over **catastrophic rate-limit consumption** on paid Max plans. Multiple users report 100% quota exhaustion in under 70 minutes of light usage—a regression traced to late March. Meanwhile, a wave of "open source Claude Code" PRs continues to gain traction, with one contributor successfully extracting 1,906 TypeScript files from source maps.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **v2.1.90** | • `/powerup` — interactive lessons with animated demos for onboarding<br>• `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` — offline resilience for plugin cache<br>• `.husky` added to protected directories |
| **v2.1.89** | • `"defer"` permission decision for `PreToolUse` hooks — enables headless pause/resume workflows<br>• `CLAUDE_CODE_NO_FLICKER=1` — virtualized alt-screen rendering to eliminate terminal flicker |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) — Max subscription instantly hitting usage limits | **The original mega-thread** (1,422 comments, 645 👍); ground zero for the rate-limit crisis dating to January | Sustained pressure; users compiling timestamped evidence of billing irregularities |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) — Max plan session limits exhausted abnormally fast since March 23 | **Confirmed regression date**; CLI-specific tracking with 313 comments | Users cross-referencing with API changelog; demands for rollback |
| [#41814](https://github.com/anthropics/claude-code/issues/41814) — Messages disappear from terminal after v2.1.89 | **UI regression** breaking conversation continuity; 44 👍 in 24h | Immediate downgrade recommendations; linked to new flicker-free rendering |
| [#42244](https://github.com/anthropics/claude-code/issues/42244) — Terminal content disappearing in v2.1.89 (IntelliJ/Linux) | Confirms [#41814](https://github.com/anthropics/claude-code/issues/41814) across platforms; TUI integrity at risk | Reproduction confirmed on JetBrains terminals |
| [#42052](https://github.com/anthropics/claude-code/issues/42052) — Max 20x plan: 100% usage after 2 hours (no agents) | **Quantified severity**: 5 commits, zero subagent usage, $200/mo tier | Benchmark for "normal" vs. broken consumption rates |
| [#41788](https://github.com/anthropics/claude-code/issues/41788) — Max 20 plan exhausted in ~70 min post-v2.1.89 | **Version-correlated regression** with detailed timeline (2.1.86→2.1.89) | Smoking gun for release-triggered bug |
| [#40652](https://github.com/anthropics/claude-code/issues/40652) — CLI mutates historical tool results, breaking prompt cache | **Root cause analysis**: billing hash substitution destroys cache hits, causing 30–50K token waste per turn | Technical deep-dive; explains *why* consumption spiked |
| [#41930](https://github.com/anthropics/claude-code/issues/41930) — Critical: Widespread abnormal usage limit drain, no formal communication | **Meta-issue** demanding accountability; catalogs multiple root causes | Frustration over silence from Anthropic; 10 👍 |
| [#41506](https://github.com/anthropics/claude-code/issues/41506) — 3–5x token increase since March 28–29 without config changes | **Quantified multiplier** on established workflows | "Months of normal usage" vs. sudden breakage narrative |
| [#32227](https://github.com/anthropics/claude-code/issues/32227) — `/insights` fails with EBUSY on Windows (v2.1.71 regression) | Long-standing Windows reliability issue; blocks usage analytics | Persistent despite multiple releases |

---

## 4. Key PR Progress

| PR | Description | Significance |
|----|-------------|------------|
| [#41518](https://github.com/anthropics/claude-code/pull/41518) — Fully Open Source Claude Code | Extracted 1,906 TS files from `cli.js.map`, added Bun build config, runs `--version` | **Most complete source reconstruction to date**; 57MB sourcemap exploitation |
| [#41568](https://github.com/anthropics/claude-code/pull/41568) — Rust Implementation: High-Performance Rewrite | 16-crate workspace, full QueryEngine, TUI, streaming | Community-driven performance alternative |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) — feat: open source claude code | Closes 5 longstanding open-source requests | Symbolic momentum for OSS pressure |
| [#41661](https://github.com/anthropics/claude-code/pull/41661) — Add 14 Revolutionary Plugins | Security, performance, architecture, fullstack automation | Ecosystem expansion; production-ready plugin suite |
| [#42245](https://github.com/anthropics/claude-code/pull/42245) — Add EvalView plugin | Regression testing via structural diffing of tool calls vs. golden baselines | **Testing infrastructure** for agent behavior validation |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) — preserve-session plugin | Path-independent session history via UUID registry | Solves project rename/move friction |
| [#42265](https://github.com/anthropics/claude-code/pull/42265) — Fix deprecated install instructions | Replaces npm with native install scripts, updates 5 stale `docs.claude.com` links | Documentation hygiene; reduces onboarding friction |
| [#42162](https://github.com/anthropics/claude-code/pull/42162) — fix(hookify): use relative imports | Plugin cache compatibility fix | Reliability for plugin ecosystem |
| [#42205](https://github.com/anthropics/claude-code/pull/42205) — fix(hookify): normalize tool matcher parsing | Trims whitespace in OR-separated matchers | Robustness for hook configurations |
| [#42086](https://github.com/anthropics/claude-code/pull/42086) — docs: add README for security-guidance plugin | Documents 9 security patterns, completes plugin documentation set | Ecosystem completeness |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Usage transparency & billing controls** | 15+ cost-tagged issues, demands for per-prompt token visibility | Users need granular consumption metrics, not just percentage bars |
| **Offline/air-gapped operation** | `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` env var in v2.1.90 | Enterprise/secure environments require resilience |
| **Session portability** | [#39148](https://github.com/anthropics/claude-code/pull/39148) preserve-session plugin | Projects are dynamic; session binding to paths is fragile |
| **Agent behavior verification** | [#42245](https://github.com/anthropics/claude-code/pull/42245) EvalView, [#31633](https://github.com/anthropics/claude-code/pull/31633) safe-edit-guard | Maturity: from "make it work" to "ensure it doesn't break" |
| **Windows parity** | [#32227](https://github.com/anthropics/claude-code/issues/32227), multiple platform:windows issues | Second-class citizen status for Windows users |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Details |
|------------|-----------|---------|
| **Rate-limit/billing catastrophe** | **Critical** | Paid users (Max 5x–20x) hitting limits in 30–120 min; suspected cache invalidation bug ([#40652](https://github.com/anthropics/claude-code/issues/40652)) plus potential API-side changes; **no official acknowledgment** |
| **Silent UI regressions** | High | v2.1.89 message disappearance ([#41814](https://github.com/anthropics/claude-code/issues/41814), [#42244](https://github.com/anthropics/claude-code/issues/42244)); forced downgrades |
| **Opaque token accounting** | High | "Percentage used" without breakdown; inability to audit what consumed tokens |
| **Cache reliability** | Medium-High | [#40652](https://github.com/anthropics/claude-code/issues/40652) shows systematic cache destruction mid-session; 30–50K token penalties |
| **Closed-source friction** | Medium | Multiple source-extraction PRs indicate demand for auditability, custom forks, security review |
| **Plugin ecosystem brittleness** | Medium | Path resolution issues ([#42162](https://github.com/anthropics/claude-code/pull/42162)), stale documentation ([#42265](https://github.com/anthropics/claude-code/pull/42265)) |

---

*Digest compiled from 50 issues, 46 PRs, and 2 releases in the 24-hour window ending 2026-04-02.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-02

## 1. Today's Highlights

The Codex team shipped **rust-v0.119.0-alpha.2** as the only release in the last 24h, with detailed changelog pending. Community attention remains fixated on token consumption efficiency (#14593, 369 comments) and platform support gaps, particularly macOS Intel (#10410, 226 👍) and Linux sandboxing under AppArmor (#15057). Engineering activity is heavily concentrated on internal crate modularization—four PRs landed today extracting tool and MCP infrastructure into dedicated crates—while user-facing friction around IDE performance regressions and voice input removal continues to generate sustained discussion.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.119.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.2) | New alpha release; no detailed changelog provided in release notes. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business tier user reports rapid token depletion | Directly impacts cost economics for production users; suggests potential inefficiency in context management or model selection | 369 comments, 144 👍 — highest engagement in tracker |
| [#10410](https://github.com/openai/codex/issues/10410) | **macOS Intel (x86_64) support** for Codex Desktop App | Excludes significant legacy hardware base from native app experience; Universal build would expand addressable market | 154 comments, 226 👍 — persistent demand since Feb 2026 |
| [#8745](https://github.com/openai/codex/issues/8745) | **LSP integration (auto-detect + auto-install)** for Codex CLI | Would elevate CLI from text-based agent to IDE-quality code intelligence; bridges gap with VS Code extension experience | 44 comments, 222 👍 — strong technical interest |
| [#2998](https://github.com/openai/codex/issues/2998) | **IDE-integrated diff / approval** | CLI's red/green diff flow is superior to extension's current experience; parity request signals UX fragmentation pain | 41 comments, 126 👍 |
| [#3962](https://github.com/openai/codex/issues/3962) | **Play sound when Codex finishes** | Low-friction productivity win for async workflows; common pattern in long-running dev tools | 35 comments, 128 👍 |
| [#9224](https://github.com/openai/codex/issues/9224) | **Codex Remote Control** — phone → desktop PC via ChatGPT app | Enables "vibe coding" mobility; user already DIY-ing with SSH suggests strong product-market fit | 34 comments, 237 👍 — highest vote count in sample |
| [#3000](https://github.com/openai/codex/issues/3000) | **Voice dictation / microphone input** | Natural complement to fast agent execution; #418 closure suggests partial delivery but IDE gap remains | 26 comments, 99 👍 |
| [#15764](https://github.com/openai/codex/issues/15764) | **Performance regression: Code Helper >100% CPU when applying patches** | Confirmed regression in builds >26.313.41514; blocks adoption for macOS VS Code users | 13 comments, 21 👍 — active regression |
| [#16404](https://github.com/openai/codex/issues/16404) | **TUI voice transcription removed in 0.118.0** | Feature removal breaks established terminal-first workflows; documentation gap compounds frustration | 4 comments, 5 👍 — fresh, high-signal |
| [#15057](https://github.com/openai/codex/issues/15057) | **Linux sandbox fails on Ubuntu with AppArmor userns restrictions** | Security/policy conflict blocks sandbox functionality on modern Ubuntu; `bwrap` EPERM is hard stop | 6 comments, 1 👍 — infrastructure-critical |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#15919](https://github.com/openai/codex/pull/15919) | **Extract MCP into codex-mcp crate** | Splits MCP runtime/server from `codex-core`; new public types: `McpConfig`, `McpConnectionManager`, `McpManager` API | Foundation for MCP ecosystem expansion; cleaner dependency graph |
| [#16055](https://github.com/openai/codex/pull/16055) | **Force forked agents to inherit parent model settings** | `fork_context = true` now ignores child `model`/`reasoning_effort` overrides; preserves context reuse economics | Prevents accidental cost/performance degradation in agent hierarchies |
| [#13637](https://github.com/openai/codex/pull/13637) | **Preserve fork references across replay** | Adds fork reference rollout items; fixes nested fork replay and truncation behavior | Enables complex multi-agent session reconstruction |
| [#16181](https://github.com/openai/codex/pull/16181) | **Add deferred watchdog namespace tools** | Introduces `watchdog` namespace for parent-management tools; collab tools remain top-level | Cleaner tool organization; paves way for `[agents.$role]` config migration |
| [#15915](https://github.com/openai/codex/pull/15915) | **[codex-analytics] subagent analytics** | Emits subagent thread analytics from core; wires client metadata through from app-server | Observability foundation for multi-agent deployments |
| [#16462](https://github.com/openai/codex/pull/16462) | **Fix guardian event ordering** | Corrects sequence for `CommandExecution` guardian events; fixes frontend rendering of auto-reviews | Reliability fix for safety-critical approval flows |
| [#16482](https://github.com/openai/codex/pull/16482) | **Remove client_common tool re-exports** | Eliminates `codex-rs/core/src/client_common.rs` `tools` re-export module after #16379, #16471, #16477, #16481 | Completes tool extraction; explicit dependencies |
| [#16471](https://github.com/openai/codex/pull/16471) | **Extract tool spec helpers into codex-tools** | Moves pure tool-definition helpers from `codex-core` to `codex-tools` | Continues crate boundary hardening |
| [#16477](https://github.com/openai/codex/pull/16477) | **Extract tool discovery helpers into codex-tools** | Migrates `tool_search`/`tool_suggest` shaping logic; no runtime state dependency | Enables external tool registry innovation |
| [#15914](https://github.com/openai/codex/pull/15914) | **permissions: start migrating runtime state to PermissionProfile** | Moves `SandboxPolicy` toward `PermissionProfile` for richer filesystem/network state | Unblocks granular permission UX |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Cross-platform parity** | macOS Intel (#10410), Linux sandbox fixes (#15057), Windows terminal issues (#16176, #16489) | High — platform gaps block adoption |
| **Voice/multimodal input** | #3000, #16404 (regression), #418 (closed but incomplete) | Sustained — "vibe coding" cultural pressure |
| **IDE/CLI experience convergence** | #2998 (diff parity), #8745 (LSP), #3962 (sound), #2948 (edit history) | Strong — users want CLI power in IDE, IDE polish in CLI |
| **Remote/mobile workflows** | #9224 (phone control), implied by voice requests | Emerging — mobility as productivity vector |
| **Agent observability & control** | #9799 (skill selection), #2788 (checkpoints), #13018 (thread deletion) | Growing — operational maturity needs |
| **Notification/awareness systems** | #3962 (sound), #14813 (approval hooks), #15497 (suppress hook noise) | Moderate — async workflow ergonomics |

---

## 6. Developer Pain Points

| Category | Manifestation | Severity |
|----------|-------------|----------|
| **Cost unpredictability** | #14593 (token burn) dominates discussion; no clear resolution path | 🔴 Critical — business blocker |
| **Performance regressions** | #15764, #16231 (CPU spikes), #14666 (memory leaks) in recent builds | 🔴 Critical — stability erosion |
| **Platform exclusion** | macOS Intel unsupported; Linux sandbox broken under AppArmor; Windows terminal edge cases | 🟡 High — accessibility limits |
| **Feature removal without migration** | #16404 (TUI voice transcription) — "document the rationale" request unfulfilled | 🟡 High — trust erosion |
| **Async workflow friction** | No completion signals (#3962), no remote control (#9224), notification gaps | 🟡 Moderate — productivity drag |
| **Permission/sandbox complexity** | #15057 (AppArmor), #16339 (approval latency), #9799 (skill granularity) | 🟡 Moderate — control vs. convenience tension |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-01 to 2026-04-02.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-02

---

## 1. Today's Highlights

The team shipped **v0.37.0-preview.0** with centralized test agent utilities and reverted a controversial change that disabled agents by default. A major push on **context compression** landed with the new `ContextCompressionService`, addressing long-standing token efficiency concerns. Meanwhile, Windows reliability and sandbox usability saw significant investment with multiple merged fixes.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.37.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.37.0-preview.0)** | Centralized test agents into `test-utils` for reuse across evals; **reverted** the change disabling agents by default; telemetry fixes in planning module |
| **[v0.36.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0)** | Multi-registry architecture for subagents with tool filtering; changelog automation improvements |
| **[v0.36.0-preview.8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.8)** | Incremental preview (no detailed notes) |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST-aware file operations** | EPIC investigating semantic code navigation—could eliminate misaligned reads and reduce token waste. Foundation for smarter codebase mapping. | 4 comments, maintainer-driven |
| [#24434](https://github.com/google-gemini/gemini-cli/issues/24434) **Extraneous empty lines in history** | P1 UI polish issue affecting perceived quality; breaks visual flow in terminal output. | 2 comments, fresh report |
| [#22863](https://github.com/google-gemini/gemini-cli/issues/22863) **Unsafe object cloning** | Code quality concern—Gemini generates partial type implementations that create maintenance debt. | 2 comments, linked to active PR |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) **Browser Agent ignores settings.json** | Configuration system integrity bug—users can't override `maxTurns` or other critical params. | 2 comments, P2 priority |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) **SSH text scrambling on Windows** | Accessibility barrier for remote development workflows; Windows+gLinux cloudtop users blocked. | 1 comment, possible duplicate |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) **Subagents unaware of approval modes** | Policy engine and agent instructions are misaligned—causes confusion in Plan/Auto-Edit modes. | 1 comment, 👍 1 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) **Tmp scripts scattered in workspace** | Cleanup friction—model generates ephemeral edit scripts everywhere when shell is restricted. | 1 comment |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) **Memory routing: global vs. project** | Core UX design for persistent memory—determines whether preferences travel across projects. | 1 comment, 👍 1 |
| [#22809](https://github.com/google-gemini/gemini-cli/issues/22809) **Proactive memory writes** | Prompt engineering gap—agents don't know *when* to persist user preferences without explicit guidance. | 1 comment, 👍 1 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **MAX_TURNS reported as GOAL success** | Silent failure mode—subagents appear successful when actually interrupted, corrupting task state. | 1 comment, 👍 2 |

---

## 4. Key PR Progress

| PR | Feature/Fix | Impact |
|----|-------------|--------|
| [#24483](https://github.com/google-gemini/gemini-cli/pull/24483) **Land `ContextCompressionService`** | Upstreams community contribution for intelligent context compression; enables [#24482](https://github.com/google-gemini/gemini-cli/issues/24482) | Token efficiency, long-context handling |
| [#24460](https://github.com/google-gemini/gemini-cli/pull/24460) **Sandbox usability & build fixes** | Proactive permissions, clearer denial detection, resolves `GeminiSandbox.exe ENOENT` errors | Windows/enterprise unblocking |
| [#24479](https://github.com/google-gemini/gemini-cli/pull/24479) **Agent stop on declined tools** | Fixes parallel `update_topic` execution preventing proper cancellation | Reliability, user control |
| [#24480](https://github.com/google-gemini/gemini-cli/pull/24480) **Windows sandbox reliability** | `CREATE_BREAKAWAY_FROM_JOB` flag, integration test fixes | Windows CI stability |
| [#24476](https://github.com/google-gemini/gemini-cli/pull/24476) **Windows CI execution fix** | Stops silent test skipping, resolves 5 exposed Windows failures | Quality infrastructure |
| [#24478](https://github.com/google-gemini/gemini-cli/pull/24478) **Top-level `/reload` command** | Consolidates skill/agent/MCP/memory/settings refresh into one action | Power user ergonomics |
| [#24477](https://github.com/google-gemini/gemini-cli/pull/24477) **Parallel task tracker enforcement** | Prompt update to batch `tracker_update_task` calls, prevents sync drift | Agent coordination |
| [#24457](https://github.com/google-gemini/gemini-cli/pull/24457) **Eval + fix for unsafe cloning** | Behavioral test + fix for [#22863](https://github.com/google-gemini/gemini-cli/issues/22863) | Code quality guardrails |
| [#24449](https://github.com/google-gemini/gemini-cli/pull/24449) **Fix vertical spacing in compact UI** | Resolves [#24434](https://github.com/google-gemini/gemini-cli/issues/24434) double-margin issue | Visual polish |
| [#24475](https://github.com/google-gemini/gemini-cli/pull/24475) **Hide model-intended errors from UI** | Non-zero exits shown as normal output, not terminal failures | UX clarity, reduced panic |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Context compression & distillation** | [#24482](https://github.com/google-gemini/gemini-cli/issues/24482), [#24483](https://github.com/google-gemini/gemini-cli/pull/24483), [#23556](https://github.com/google-gemini/gemini-cli/issues/23556) | Active implementation |
| **AST-aware / semantic codebase tools** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) | Investigation phase |
| **Persistent memory architecture** | [#22819](https://github.com/google-gemini/gemini-cli/issues/22819), [#22809](https://github.com/google-gemini/gemini-cli/issues/22809), [#24272](https://github.com/google-gemini/gemini-cli/issues/24272), [#24274](https://github.com/google-gemini/gemini-cli/pull/24274) | Background service in preview |
| **Background process inspection** | [#23799](https://github.com/google-gemini/gemini-cli/pull/23799) | Long-running execution support |
| **Voice input (pluggable)** | [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) | Community PR, zero-install Gemini backend |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Tracking |
|------------|-----------|----------|
| **Windows reliability gaps** | High | 4+ PRs this cycle: sandbox, CI, SSH rendering, `ENOENT` errors |
| **Subagent coordination failures** | High | MAX_TURNS misreporting, approval mode unawareness, tracker sync issues |
| **Configuration override failures** | Medium | `settings.json` ignored by Browser Agent; agents disabled-by-default reverted |
| **Workspace hygiene** | Medium | Scattered tmp scripts, unsafe cloning patterns, memory routing confusion |
| **UI/UX friction** | Medium | Scroll issues, extraneous spacing, loading phrases default changed to `off` |

---

*Digest compiled from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) activity 2026-04-01/02.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-02

---

## 1. Today's Highlights

GitHub shipped **four releases in 24 hours** (v1.0.15 through v1.0.16-0), focusing on MCP server stability, BYOK Anthropic token limits, and deprecating legacy GPT-5.1 Codex models. The community closed two long-standing feature requests for custom slash commands and ACP slash command support, while model entitlement mismatches between CLI and VS Code emerged as a top frustration. No open PRs were updated in this period.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.16-0** | 2026-04-01 | Fixed MCP server loading after login/user switch/reload; BYOK Anthropic now respects `maxOutputTokens`; removed deprecated `marketplaces` setting |
| **v1.0.15** | 2026-04-01 | Dropped GPT-5.1 Codex models; added blinking mascot animation; alphabetical user sorting; new `mcp.config.*` RPCs |
| **v1.0.15-2** | 2026-04-01 | Improved: alphabetical account ordering in user switcher |
| **v1.0.15-1** | 2026-04-01 | Added: `mcp.config.list/add/update/remove` RPCs; device code flow for MCP OAuth in headless/CI; `/mcp auth` command |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#618](https://github.com/github/copilot-cli/issues/618) | **Custom slash commands from `.github/prompts`** | Closes 5+ month gap with VS Code extension; enables team-shared prompt libraries | 28 comments, 93 👍 — **closed as completed** |
| [#1481](https://github.com/github/copilot-cli/issues/1481) | **SHIFT+ENTER executes instead of line break** | Violates universal chat UX convention; daily friction for power users | 20 comments, 11 👍 — **closed as completed** |
| [#223](https://github.com/github/copilot-cli/issues/223) | **"Copilot Requests" permission invisible for org tokens** | Blocks enterprise automation without user PATs; security/compliance concern | 17 comments, 60 👍 — *open, triage* |
| [#1703](https://github.com/github/copilot-cli/issues/1703) | **Org-enabled models missing in CLI (Gemini 3.1 Pro)** | Feature parity gap with VS Code; paying orgs can't access provisioned models | 16 comments, 26 👍 — *open, triage* |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | **Transient API errors → rate limit cascade** | Reliability issue wasting premium requests; poor retry ergonomics | 15 comments, 12 👍 — *open, triage* |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | **Tool whitelist for Interactive Mode** | `/allow-all` too permissive; manual approval fatigue for safe read-only ops | 5 comments, 9 👍 — *open, triage* |
| [#1211](https://github.com/github/copilot-cli/issues/1211) | **Per-session custom terminal titles** | Status updates overwrite user titles; breaks terminal workspace organization | 5 comments, 8 👍 — *open, triage* |
| [#2334](https://github.com/github/copilot-cli/issues/2334) | **Restore `no-alt-screen` option** | Alt-screen breaks scrollback, find, and copy workflows; regression from earlier versions | 3 comments, 13 👍 — *open, triage* |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | **HTTP/2 GOAWAY race condition** | Root cause of multiple retry failure reports; wastes premium requests silently | 2 comments, 4 👍 — *open, triage, consolidates 5 issues* |
| [#1217](https://github.com/github/copilot-cli/issues/1217) | **WSL clipboard image paste from Windows** | Critical workflow gap for Windows developers sharing screenshots | 2 comments, 46 👍 — *open, triage* |

---

## 4. Key PR Progress

**No Pull Requests were updated in the last 24 hours.**

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **VS Code parity demands** | #618, #1703, #2449, #2434 | Users expect CLI to match web/VS Code model availability and prompt features |
| **MCP ecosystem maturity** | #2108, #2458, #1403, releases | Hooks, auth flows, and config management becoming production-critical |
| **Terminal UX customization** | #1211, #1504, #2334, #2078 | Power users want control over themes, screen modes, and shortcuts |
| **Enterprise/CI hardening** | #223, #2431, #1973 | Token handling, permissions, and tool governance for team deployments |
| **WSL/Windows polish** | #1217, #1148 | Cross-platform fidelity gaps in clipboard and line endings |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Model entitlement desync** | 3+ issues (#1703, #2393, #2449, #2434) | Paying users blocked from provisioned models; trust erosion |
| **Alt-screen regression** | #2334 (13 👍) | Breaks fundamental terminal workflows; no workaround |
| **Silent failures & poor observability** | #2101, #2421, #2314 | Wasted premium requests, unclear retry behavior |
| **Rigid permission model** | #1973, #2338 | Binary choice between friction (`/allow-all` off) and risk (on) |
| **Environment variable handling** | #1403, #2431 | Breaking changes in MCP config, proxy auth blocked |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-04-01 → 2026-04-02.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-02

## 1. Today's Highlights

Version 1.29.0 shipped with session management improvements including the new `/title` command for manual session renaming and hierarchical `AGENTS.md` loading. A provocative community PR proposes a complete rewrite from Python to Bun/TypeScript/React Ink, sparking discussion about the CLI's architectural future. Meanwhile, Windows compatibility issues and MCP/skill extensibility dominate the issue tracker.

---

## 2. Releases

**v1.29.0** — [Release Notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.29.0)

| Change | Author | Impact |
|--------|--------|--------|
| Prevent auto-title from overwriting manual session rename | [@Jesse-XIE](https://github.com/Jesse-XIE) | Fixes UX regression where generated titles clobbered user-defined names |
| Documentation fix in CONTRIBUTING.md | [@wbxl2000](https://github.com/wbxl2000) | Minor grammar correction |
| Tool message handling fix | — | Stability improvement for tool execution |

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Signal |
|---|-------|--------|--------------|----------------|
| [#1682](https://github.com/MoonshotAI/kimi-cli/issues/1682) | Double Enter required for command execution | **OPEN** | UX friction vs. Claude Code's single-Enter behavior; affects muscle memory and workflow efficiency | 2 comments, active discussion |
| [#1681](https://github.com/MoonshotAI/kimi-cli/issues/1681) | UI rendering: character spacing, slash display, label leakage | **OPEN** | Visual corruption undermines trust in terminal UI; suggests TUI framework limitations | 2 comments, reproducible reports |
| [#1708](https://github.com/MoonshotAI/kimi-cli/issues/1708) | Dynamic MCP/Skill loading without restart | **OPEN** | Critical for production workflows; current restart requirement breaks iterative development | Fresh, no comments yet |
| [#1705](https://github.com/MoonshotAI/kimi-cli/issues/1705) / [#1704](https://github.com/MoonshotAI/kimi-cli/issues/1704) | Skill discovery ignores plugin-installed skills | **OPEN** | Ecosystem fragmentation; Claude plugins incompatible with Kimi's discovery mechanism | Duplicate filings indicate urgency |
| [#1702](https://github.com/MoonshotAI/kimi-cli/issues/1702) | Shell tool broken on Windows (PowerShell path) | **OPEN** | Complete blocker for Windows `uv tool install` users; root cause identified | Has matching PR #1703 |
| [#1695](https://github.com/MoonshotAI/kimi-cli/issues/1695) | Openclaw scheduled tasks failing (rate limit) | **OPEN** | Integration reliability concern; "engine overloaded" suggests backend capacity issues | Production impact reported |
| [#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691) | Incremental session memory for zero-cost context compression | **OPEN** | Addresses core cost/scaling limitation of `/compact`; proposes architectural improvement | Novel approach, awaiting feedback |
| [#1615](https://github.com/MoonshotAI/kimi-cli/issues/1615) | GLM-5.1 model feedback not received | **CLOSED** | Third-party model compatibility; resolved but indicates testing gaps | 3 comments, resolved |
| [#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596) | AGENTS.md instruction compliance (priority) | **CLOSED** | Project-level constraints ignored by agent; hierarchical loading in PR #1700 addresses this | 1 comment, 👍 1 |
| [#1536](https://github.com/MoonshotAI/kimi-cli/issues/1536) | Manual session title command | **CLOSED** | Shipped in v1.29.0 via PR #1685; validates community-driven feature requests | 1 comment, implemented |

---

## 4. Key PR Progress

| # | PR | Status | Description | Strategic Note |
|---|-----|--------|-------------|--------------|
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | Rewrite: Python → Bun + TypeScript + React Ink | **OPEN** | Complete architectural pivot; removes Web UI, terminal-native focus | Polarizing but technically substantive; tests maintainer appetite for breaking changes |
| [#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709) | Fix diff inline highlight offsets with tabs | **OPEN** | Corrects syntax highlighting misalignment when tabs expand | Quality-of-life for code review workflows |
| [#1703](https://github.com/MoonshotAI/kimi-cli/pull/1703) | Resolve full PowerShell path on Windows | **OPEN** | Fixes #1702 by using absolute path instead of bare `powershell.exe` | Critical Windows compatibility fix |
| [#1701](https://github.com/MoonshotAI/kimi-cli/pull/1701) | Session status indicators in sidebar | **OPEN** | Visual busy/idle/error states with pulsing dots | Enhances situational awareness in web UI |
| [#1700](https://github.com/MoonshotAI/kimi-cli/pull/1700) | Hierarchical AGENTS.md loading | **CLOSED** | Loads from git root → working directory, with `.kimi/AGENTS.md` priority | Addresses #1596; enables project-level governance |
| [#1699](https://github.com/MoonshotAI/kimi-cli/pull/1699) | Clean up empty sessions on all exit paths | **CLOSED** | Fixes orphan session directories on crash/non-zero exit | Reliability improvement |
| [#1698](https://github.com/MoonshotAI/kimi-cli/pull/1698) | Env vars for paste text folding thresholds | **CLOSED** | `KIMI_CLI_PASTE_CHAR_THRESHOLD`, `KIMI_CLI_PASTE_LINE_THRESHOLD` | Accessibility for CJK terminals over SSH |
| [#1697](https://github.com/MoonshotAI/kimi-cli/pull/1697) | Respect terminal color capability | **CLOSED** | Removes hardcoded `truecolor`, fixes Xshell/256-color terminal rendering | Compatibility with enterprise SSH environments |
| [#1696](https://github.com/MoonshotAI/kimi-cli/pull/1696) | Cache-Control headers for web assets | **CLOSED** | Prevents 404 white screens post-upgrade by busting cached `index.html` | Fixes #1602 deployment reliability |
| [#1693](https://github.com/MoonshotAI/kimi-cli/pull/1693) | Prevent LF→CRLF conversion on Windows | **CLOSED** | `newline=""` in `aiofiles.open()` preserves original line endings | Cross-platform file integrity |

---

## 5. Feature Request Trends

| Theme | Evidence | Implication |
|-------|----------|-------------|
| **Runtime extensibility** | #1708 (dynamic MCP/Skill loading), #1705/#1704 (plugin skill discovery) | Users want hot-reloadable capabilities without process restart |
| **Context/memory efficiency** | #1691 (incremental compression), #1596 (AGENTS.md compliance) | Cost and token limits driving architectural innovation |
| **Cross-platform parity** | #1702/#1703 (Windows shell), #1687/#1693 (line endings), #1674/#1694 (SOCKS proxy) | Windows and enterprise network environments need first-class support |
| **Session UX refinement** | #1682 (command entry), #1681 (rendering), #1536/#1685 (manual titles) | Terminal interaction polish competitive with Claude Code |
| **Integration reliability** | #1695 (Openclaw rate limits), #1615 (GLM-5.1 compatibility) | Production dependencies on third-party services require graceful degradation |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Current Mitigation | Gap |
|------------|-----------|-------------------|-----|
| **Windows toolchain fragility** | High | PR #1703 pending | `uv tool install` path resolution, PowerShell detection |
| **MCP/Skill development cycle** | High | None | Requires CLI restart for every change; no local dev server |
| **Terminal rendering inconsistency** | Medium | PR #1697 merged, #1681 open | Rich/truecolor assumptions break on older terminals |
| **Context window economics** | Medium | `/compact` exists | Expensive full-LLM summarization; incremental approach proposed in #1691 |
| **Proxy/network configuration** | Low-Medium | PR #1694 merged | SOCKS scheme normalization; trust_env enablement pending in #1236 |
| **Web UI asset caching** | Low | PR #1696 merged | Upgrade-time white screens addressed |

---

*Digest compiled from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity 2026-04-01.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-02

## Today's Highlights

The OpenCode team shipped **v1.3.13** with an `opentui` version bump, while community activity surged around **context management** and **tool execution reliability**. A major architectural shift continues with **Effect-TS adoption** across core services, and users are raising urgent concerns about **Zen free tier limits** and **model compatibility gaps** with GitHub Copilot and OpenRouter providers.

---

## Releases

| Version | Changes |
|---------|---------|
| **v1.3.13** | Bumps `opentui` dependency — likely includes TUI stability fixes (no detailed changelog provided). |

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | **Assistant prefill incompatibility with Opus 4.6 + GitHub Copilot** | Breaks GitHub Copilot integration for Opus 4.6 users; blocks conversation flow with cryptic error. | **50 comments, 18 👍** — highest engagement; users sharing session exports to debug |
| [#4659](https://github.com/anomalyco/opencode/issues/4659) | **Sliding window context management** | Proposes replacing destructive context compaction with forward-sliding windows — could revolutionize long-session UX. | **25 comments, 18 👍**; rich technical discussion with prototype ideas |
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | **"Free usage exceeded" on allegedly free models** | Perceived bait-and-switch on Big Pickle and other free models; trust issue. | **16 comments, 5 👍**; confusion about actual limits |
| [#15714](https://github.com/anomalyco/opencode/issues/15714) | **BigPickle Zen free tier ended without notice** | Same as above — users caught mid-workflow with 10h+ lockouts and no prior communication. | **16 comments**; frustration over lack of transparency |
| [#17376](https://github.com/anomalyco/opencode/issues/17376) | **Infinite auth loop in Web Terminal (v1.2.25)** | Critical regression blocking Web UI terminal access entirely. | **12 comments, 7 👍**; security/UX blocker |
| [#8003](https://github.com/anomalyco/opencode/issues/8003) | **VS Code diff preview integration** | TUI diff viewing is painful for large files; IDE integration highly requested. | **11 comments, 41 👍** — highest vote count; clear product gap |
| [#7006](https://github.com/anomalyco/opencode/issues/7006) | **`permission.ask` plugin hook not triggered** | New permissions system (PR #6319) has broken plugin API — affects early adopters. | **8 comments, 8 👍**; reported by Redux author (@markerikson) |
| [#17047](https://github.com/anomalyco/opencode/issues/17047) | **Unbounded memory leak in `Tool.define()`** | Causes `RangeError` crashes in server mode; affects long-running processes. | **2 comments, 18 👍**; serious but under-discussed |
| [#20531](https://github.com/anomalyco/opencode/issues/20531) | **Duplicate tool calls with OpenRouter qwen3.6-preview** | Every bash command executes twice — data corruption risk. | Fresh (1 comment); critical execution bug |
| [#20527](https://github.com/anomalyco/opencode/issues/20527) | **PowerShell tool confuses agents post-#16069** | Agents still use Unix-isms (`tail`) on Windows despite new PowerShell tool. | Fresh (3 comments); platform parity issue |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#20547](https://github.com/anomalyco/opencode/pull/20547) | **CI: Publish unit test reports in Actions** | Splits unit workflow into OS-sharded packages, adds JUnit output + GitHub check summaries. Improves debuggability of CI failures. | Open |
| [#20539](https://github.com/anomalyco/opencode/pull/20539) | **Show model display name in footer/transcript** | Fixes UX inconsistency where raw model IDs leaked into UI; uses provider lookup with graceful fallback. | Open |
| [#20542](https://github.com/anomalyco/opencode/pull/20542) | **Migrate instruction system to Effect service pattern** | Major refactor: adds `Instruction.Service` class, replaces `Config.get()` facade, wraps FS calls in `Effect.promise`. Part of ongoing Effect-TS migration. | Open |
| [#20560](https://github.com/anomalyco/opencode/pull/20560) | **Fix cross-session patch contamination** | Critical bugfix: concurrent sessions shared git index state, causing revert/snapshot leaks between sessions. Now scopes per-session. | Open |
| [#20558](https://github.com/anomalyco/opencode/pull/20558) | **Proactive console token refresh** | Prevents auth expiry mid-session with 5-minute eager refresh window; maintains single-flight via Cache. | Open |
| [#20551](https://github.com/anomalyco/opencode/pull/20551) | **Speed up slow revert functionality** | Batches adjacent same-hash reverts, reducing git subprocess overhead for large operations. | Open |
| [#20496](https://github.com/anomalyco/opencode/pull/20496) | **Bash tool: Effect ChildProcess refactor** | Replaces raw `node:child_process.spawn` with Effect primitives; cleaner abort/timeout/exit handling. | Closed |
| [#20563](https://github.com/anomalyco/opencode/pull/20563) | **Fix `ProviderContext` type mismatch** | Corrects plugin type definition to match runtime shape; fixes `chat.params`/`chat.headers` hooks. | Open |
| [#19955](https://github.com/anomalyco/opencode/pull/19955) | **GitLab DWS tool approval integration** | Wires GitLab Duo Workflow Service into permission system for enterprise compliance workflows. | Open |
| [#20564](https://github.com/anomalyco/opencode/pull/20564) | **Batch snapshot revert without reordering** | Optimizes revert performance while preserving patch order — fixes path conflict edge cases (e.g., `foo` vs `foo/bar`). | Closed |

---

## Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Context/session management** | #4659 (sliding window), #14561 (global session list), #20532 (desktop session persistence), #9387 (session export to MD/JSON) | **High** — core UX gap for power users |
| **IDE/editor integration** | #8003 (VS Code diff), #20535 (Blender-style workspace tabs) | **Medium-High** — TUI limitations driving external tool demand |
| **Plugin system extensibility** | #18969 (TUI footer plugin hook), #7006 (broken permission hook), #20563 (ProviderContext fix) | **Medium** — ecosystem maturation pains |
| **Export/observability** | #9387 (session export), #18969 (persistent status vs. toast spam) | **Medium** — enterprise/audit needs |

---

## Developer Pain Points

| Issue | Frequency | Severity |
|-------|-----------|----------|
| **Zen free tier communication & limits** | 2+ issues (#15585, #15714) | 🔴 High — trust erosion, workflow disruption |
| **Model provider compatibility** | 3+ issues (Copilot/Opus, OpenRouter/qwen, GLM-5.1 missing) | 🔴 High — blocks adoption of preferred models |
| **Windows platform parity** | 4+ issues (TUI crash, PowerShell, FileTime normalization, MCP headers) | 🟡 Medium-High — persistent second-class experience |
| **Long-running session stability** | Context loss (#4659), memory leaks (#17047), auth expiry (#20558) | 🟡 Medium-High — affects professional workflows |
| **Web/Desktop feature gaps** | Auth loops (#17376), no session history (#20532) | 🟡 Medium — parity with CLI expected |
| **Effect-TS migration friction** | Multiple refactors in flight; some instability (#20567 test fix) | 🟢 Low-Medium — temporary, but noisy |

---

*Generated from github.com/anomalyco/opencode — 50 issues and 50 PRs processed.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-02

## Today's Highlights

The Pi team closed 24 issues in 24 hours, with heavy focus on OpenAI Responses API integration and memory management fixes. A critical unbounded heap growth bug in `SessionManager.fileEntries` was identified and patched, alongside OAuth authentication fixes for Anthropic and OpenAI Codex providers. Terminal UI stability improved with fixes for viewport corruption during terminal resizing.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2752](https://github.com/badlogic/pi-mono/issues/2752) **SessionManager.fileEntries grows unbounded, causes 1GB+ heap retention** | Long-running gateway sessions were leaking memory due to unlimited in-memory mirroring of JSONL entries. Affects production OpenClaw deployments. | Rapid triage; fix PR merged same day |
| [#2751](https://github.com/badlogic/pi-mono/issues/2751) **Anthropic API rejects OAuth tokens sent via Bearer auth** | Breaking change in Anthropic's auth—OAuth tokens now require `X-Api-Key` header instead of `Authorization: Bearer`. Broke all Anthropic OAuth flows. | Immediate fix prioritized; provider auth patterns under review |
| [#2745](https://github.com/badlogic/pi-mono/issues/2745) **Streaming tool call arguments missing when using OpenAI Responses API** | Tool calls via new Responses API path silently dropped arguments, breaking agent functionality for `gpt-5.3-codex-spark` and similar models. | Fixed with event handler addition |
| [#2759](https://github.com/badlogic/pi-mono/issues/2759) **Viewport scroll corruption when terminal widened with nonCapturing overlays** | UI corruption pushed prompts off-screen during terminal resize—a daily friction for tmux/terminal users. | Root cause identified in `compositeOverlays`; one-line fix |
| [#2744](https://github.com/badlogic/pi-mono/issues/2744) **Problem with edit tool on files with CRLF line endings** | Windows developers hit consistent failures with the edit tool due to line ending mismatches. Cross-platform reliability gap. | Fix in progress; highlights Windows testing needs |
| [#2742](https://github.com/badlogic/pi-mono/issues/2742) **Find and Grep tools referenced in default prompt but not enabled** | Prompt promises capabilities that don't exist by default—confusing UX and broken agent expectations. | Small fix, larger pattern: prompt/tool sync needs attention |
| [#2750](https://github.com/badlogic/pi-mono/issues/2750) **agentLoop: void promise has no .catch() — config callback throw hangs stream permanently** | Unhandled promise rejection could permanently hang agent streams. Defensive coding gap in core async loop. | Fix merged; error handling patterns being audited |
| [#2741](https://github.com/badlogic/pi-mono/issues/2741) **openai-codex OAuth requests wrong scopes** | OAuth tokens lacked `model.request` scope, breaking all model API calls after login. Gateway operator reported production impact. | Scope fix merged; OAuth flow validation improved |
| [#2755](https://github.com/badlogic/pi-mono/issues/2755) **Add homebrew tap** | Mac distribution friction—Homebrew is the standard CLI installation path for many developers. | Community upvoted; maintainer evaluating tap setup |
| [#2757](https://github.com/badlogic/pi-mono/issues/2757) **Extension API for registering custom @ autocomplete providers** | Extensions currently locked out of `@` mention system—limits ecosystem extensibility for team workflows. | Feature request with clear use case; API design pending |

---

## Key PR Progress

| PR | Feature / Fix | Impact |
|----|-------------|--------|
| [#2758](https://github.com/badlogic/pi-mono/pull/2758) **fix(tui): prevent overlay padding from inflating scrollback on terminal widen** | One-line fix: `workingHeight` now uses `result.length` instead of `maxLinesRendered` | Eliminates viewport corruption during terminal resize |
| [#2749](https://github.com/badlogic/pi-mono/pull/2749) **fix: cap in-memory `fileEntries` array to prevent unbounded heap growth** | Caps `fileEntries` at 1000 entries with LRU eviction; adds `sessionManager.maxFileEntries` config | Resolves 1GB+ memory leaks in long sessions |
| [#2747](https://github.com/badlogic/pi-mono/pull/2747) **feat(ai): pass previous_response_id for OpenAI reasoning model continuity** | Wires `previousResponseId` through OpenAI Responses providers | Cuts reasoning token costs by ~30-50% on multi-turn OpenAI reasoning models |
| [#2743](https://github.com/badlogic/pi-mono/issues/2743) **fix: Anthropic OAuth token refresh sends JSON instead of form-encoded** | Corrects `Content-Type` to `application/x-www-form-urlencoded` per RFC 6749 | Unblocks Anthropic OAuth refresh flows |
| [#1723](https://github.com/badlogic/pi-mono/pull/1723) **feat: WSL clipboard image support via PowerShell fallback** | Falls back to `powershell.exe` when Linux clipboard tools fail in WSL | Closes gap for Windows developers using WSL |
| [#2474](https://github.com/badlogic/pi-mono/pull/2474) **feat: expose contextUsage in get_session_stats RPC response** | Adds accurate context window usage vs. unbounded cumulative tokens | Enables proper context bars in VS Code extensions and other RPC clients |
| [#1312](https://github.com/badlogic/pi-mono/pull/1312) **Fix queued follow-ups getting stuck after auto-compaction** | Restarts processing post-compaction when queued messages exist; refactors queue dequeue logic | Eliminates "stuck" sessions after context compaction |
| [#604](https://github.com/badlogic/pi-mono/pull/604) **feat(coding-agent): add Alt+Up hotkey to restore queued messages** | New keybinding to recall queued steering/follow-up messages | UX improvement for message queue navigation |
| [#542](https://github.com/badlogic/pi-mono/pull/542) **feat(coding-agent): make ctx.shutdown() available for extensions** | Exposes graceful shutdown hook to extension API | Enables proper resource cleanup in extensions |
| [#476](https://github.com/badlogic/pi-mono/pull/476) **feat(coding-agent): queue compaction submissions** | Allows submit during compaction with queuing instead of blocking | Removes friction during long context windows |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **First-class RPC/Server Mode** | [#2737](https://github.com/badlogic/pi-mono/issues/2737) "RPC as first class citizen" | High—multiple requests for headless/integratable Pi |
| **Extension API Expansion** | [#2757](https://github.com/badlogic/pi-mono/issues/2757) custom `@` providers, [#2746](https://github.com/badlogic/pi-mono/issues/2746) `defineTool()` helper | Growing—ecosystem building blocks |
| **Prompt Template Enhancements** | [#2761](https://github.com/badlogic/pi-mono/issues/2761) argument-hint frontmatter, [#2762](https://github.com/badlogic/pi-mono/issues/2762) visual image path markers | Active—team customization workflows |
| **Package Manager Distribution** | [#2755](https://github.com/badlogic/pi-mono/issues/2755) Homebrew tap, plus implicit apt/yum needs | Steady—installation friction reduction |
| **Provider Parity** | [#1349](https://github.com/badlogic/pi-mono/issues/1349) Kiro as built-in provider | Ongoing—internal providers vs. extension architecture tension |

---

## Developer Pain Points

| Pain Point | Frequency | Status |
|------------|-----------|--------|
| **OAuth/Auth Provider Breakage** | Very High—Anthropic header change, OpenAI Codex scope issues, token refresh encoding | Partially resolved; provider auth tests needed |
| **Windows/CRLF Compatibility** | High—edit tool failures, clipboard gaps | In progress; WSL support improved, CRLF fix pending |
| **Memory Management in Long Sessions** | High—unbounded arrays, heap retention | Fixed for `fileEntries`; broader audit likely |
| **Terminal UI Fragility** | Medium-High—resize corruption, cursor issues, tmux interactions | Active fixes; overlay system being hardened |
| **Hot-Reload Reliability** | Medium—[#2753](https://github.com/badlogic/pi-mono/issues/2753) `/reload` uses stale settings | Open issue; plugin developer blocked |
| **Documentation Gaps** | Medium—`switchSession` missing from docs, OAuth setup unclear | Being addressed ad-hoc |

---

*Digest compiled from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) activity 2026-04-01.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-02

## Today's Highlights

The Qwen Code team is pushing aggressively toward the **v0.14.0 stable release** with multiple preview builds dropping in the last 24 hours, including critical path fixes for extension installation and proxy handling. Community tension is rising around **model availability gaps**—notably Qwen 3.6's absence from Qwen Code despite being available in competing tools—while developers continue wrestling with **ACP connection reliability** and **MCP tooling permissions** in production workflows.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.14.0-preview.4** | Preview | Path replacement fix in markdown files during extension install; proxy URL normalization for protocol-less addresses |
| **v0.14.0-preview.3** | Preview | Full changelog since v0.13.2 |
| **v0.13.2-preview.0** | Preview | Backported path replacement fix |
| **v0.13.2-nightly.20260401** | Nightly | Same path fix on nightly channel |

The repeated `.qwen` path replacement fix across multiple release streams indicates this was a **blocking issue** for extension marketplace installations.

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|-------------------|
| [#2040](https://github.com/QwenLM/qwen-code/issues/2040) | Supports project-level Insight | 🔵 OPEN | Machine-level Insight forces context switching between projects; enterprise teams need isolated project analytics | 24 comments, longest-running active request |
| [#2721](https://github.com/QwenLM/qwen-code/issues/2721) | 能否把 iflow cli 项目接过呀? | 🔵 OPEN | Competitor shutdown creates user migration opportunity; community sees iflow as superior UX reference | 6 comments, sentiment: "adopt their good ideas" |
| [#2803](https://github.com/QwenLM/qwen-code/issues/2803) | Incorporate good idea/code from claw-code | 🟢 CLOSED | References leaked "big AI company" coding tool code; community pressure to absorb innovations | 4 comments, closed quickly—legal sensitivity? |
| [#2736](https://github.com/QwenLM/qwen-code/issues/2736) | 无法运行 qwen 命令，在哪里删除 cli 配置文件？ | 🟢 CLOSED | Critical startup failure with cryptic URL error; config corruption recovery path unclear | 4 comments, resolved with config location guidance |
| [#2780](https://github.com/QwenLM/qwen-code/issues/2780) | 路径识别异常 | 🔵 OPEN | Path handling bugs breaking WeChat dev tool integration; Chinese path encoding issues persist | 3 comments, active debugging |
| [#2759](https://github.com/QwenLM/qwen-code/issues/2759) | Qwen3.6 not available in QwenCode | 🔵 OPEN | **Embarrassing parity gap**: competitor tool (OpenCode) has Qwen 3.6, official tool doesn't | 3 comments, frustration evident: "Is this a bug?" |
| [#2783](https://github.com/QwenLM/qwen-code/issues/2783) | 长期出现缺少参数的现象 | 🔵 OPEN | Core tool execution reliability—WriteFile/shell calls missing required params | 2 comments, affects daily workflow |
| [#2775](https://github.com/QwenLM/qwen-code/issues/2775) | [Web UI] Unable to terminate/cancel long-running task | 🟢 CLOSED | Session hangs with no kill switch; productivity killer for long jobs | 2 comments, closed with fix |
| [#2806](https://github.com/QwenLM/qwen-code/issues/2806) | 考虑 加入 qwen 3.6 模型吗? | 🔵 OPEN | Duplicate of #2759 reinforcing demand; user explicitly asking for roadmap clarity | 1 comment |
| [#2782](https://github.com/QwenLM/qwen-code/issues/2782) | "@qwen-code/sdk": "0.1.6": need permission to use the MCP tool | 🔵 OPEN | **Silent permission failures**—MCP tools fail without prompting user for approval | 1 comment, breaks expected UX flow |

---

## Key PR Progress

| # | Title | Author | Feature/Fix Description |
|---|-------|--------|------------------------|
| [#2525](https://github.com/QwenLM/qwen-code/pull/2525) | feat(cli, webui): add follow-up suggestions feature | @wenshao | **Claude Code NES competitor**—context-aware next-step suggestions post-task (commit, test, etc.) |
| [#2808](https://github.com/QwenLM/qwen-code/pull/2808) | feat(sdk): full CLI parity | @mabry1985 | Major SDK expansion: hooks, LSP, tasks, truncation, read-before-edit—enables full agent stack via `query()` |
| [#2802](https://github.com/QwenLM/qwen-code/pull/2802) | fix(vscode): inherit model selection for new chat tabs | @yiliang114 | Fixes #2794—new panes no longer reset to default model |
| [#2732](https://github.com/QwenLM/qwen-code/pull/2732) | Add math rendering support | @ultrakill148852-collab | LaTeX/fraction/fractal rendering + markdown validator to prevent code block leakage |
| [#2805](https://github.com/QwenLM/qwen-code/pull/2805) | feat: add multi-language support for /insight HTML report | @qwen-code-dev-bot | i18n for insight command—addresses #2022 |
| [#2804](https://github.com/QwenLM/qwen-code/pull/2804) | fix: improve ACP connection reliability | @qqqys | Spawn retry + auto-reconnect when ACP process dies—resilience critical for IDE stability |
| [#2490](https://github.com/QwenLM/qwen-code/pull/2490) | [0.14.0] Add Coding Plan Authentication | @xuewenjie123 | Alibaba Cloud Coding Plan auth + WebUI i18n onboarding |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | feat(channels): add extensible Channels platform | @tanzhenxin | **Plugin architecture** for Telegram/WeChat/DingTalk integrations—opens enterprise messaging |
| [#2731](https://github.com/QwenLM/qwen-code/pull/2731) | feat(cron): add in-session loop scheduling | @tanzhenxin | Session-scoped cron jobs for monitoring long operations without blocking |
| [#2698](https://github.com/QwenLM/qwen-code/pull/2698) | feat: add cross-provider model selection for subagents | @tanzhenxin | Subagents can now target different models/providers than parent—enables cost/quality optimization |

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Model parity urgency** | #2759, #2806, #2803 | Users expect Qwen Code to lead on Qwen model availability, not lag competitors |
| **Enterprise observability** | #2040 (project-level Insight), #2805 (i18n) | Scaling from individual to team/organization workflows |
| **MCP ecosystem maturation** | #2782 (permissions), #2241/PR#2428 (reconnect), #2790 (configurable patterns) | MCP becoming production-critical, needs robust UX |
| **Multi-modal flexibility** | #2790 (MODALITY_PATTERNS config), #2732 (math rendering) | Users want control over how models consume diverse inputs |
| **Workflow automation** | #2525 (follow-up suggestions), #2731 (cron loops), #2791 (smallFastModel) | Reducing cognitive load through intelligent defaults and task chaining |

---

## Developer Pain Points

| Pain Point | Frequency | Manifestation | Tracking |
|------------|-----------|---------------|----------|
| **ACP/connection fragility** | 🔴 High | SIGTERM orphans, spawn failures, Web UI hangs | #2634, #2666 (reverted), #2775, #2804 |
| **Silent failures & permission gaps** | 🔴 High | MCP tools fail without prompting, auth flows bypassed | #2782, #2795 (`/login` falls back silently) |
| **Model configuration drift** | 🟡 Medium | New tabs reset models, OpenRouter switching broken | #2794, #2785 |
| **Path/encoding edge cases** | 🟡 Medium | Chinese paths, spaces, WeChat dev tool integration | #2780, #2736 |
| **Parameter validation in tool calls** | 🟡 Medium | WriteFile/shell missing required args intermittently | #2783 |
| **Process lifecycle management** | 🟢 Emerging | Orphan processes on IDE exit, PTY leaks | #2665, #2433, #2313 |

**Critical observation**: The revert of PR #2666 (ACP retry logic) due to incompatibility with the relaunch wrapper suggests **architectural tension** between CLI spawning mechanisms and IDE companion stability—likely root cause of ongoing connection issues.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*