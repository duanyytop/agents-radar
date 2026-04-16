# AI CLI Tools Community Digest 2026-04-16

> Generated: 2026-04-16 00:17 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Cross-Comparison Report — 2026-04-16

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape in mid-2026 is characterized by intense, rapid iteration across at least seven actively maintained projects, with community friction increasingly centered on trust, cost control, and cross-platform reliability. All major tools have moved beyond basic chat interfaces into sophisticated agentic execution environments featuring MCP integrations, sandboxed tool calling, subagent orchestration, and extensible hook systems. However, this maturity has exposed a shared vulnerability: silent feature removals, opaque rate limiting, and provider-specific compatibility bugs are now the dominant sources of community backlash, often outweighing technical feature requests in volume and emotional intensity.

---

## 2. Activity Comparison

| Tool | Issues Activity (Today) | PR Activity (Today) | Release Status | Notable Release |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10 hot issues tracked; #45596 at 739 👍, 177 comments | 10 PRs (coordinated `agnix` metadata cleanup by @Rohan5commit) | v2.1.109–110 shipped | TUI polish (`/tui fullscreen`, `Ctrl+O` toggle) |
| **OpenAI Codex** | 10 hot issues; #14593 at 222 👍, 542 comments | 10 PRs; 8-PR stack on MCP remote executor architecture | rust-v0.121.0 shipped | Plugin marketplace + `Ctrl+R` prompt history |
| **Gemini CLI** | 10 hot issues; #22141 at 122 👍, 154 comments | 10 PRs; voice mode (#24174) in review | v0.38.1 patch + v0.40.0 nightly | Planning improvements, MCP error-code fixes |
| **GitHub Copilot CLI** | 10 hot issues; #618 at 95 👍 (closed) | 7 PRs (4 spam/invalid closed) | v1.0.28 shipped | Git submodule fixes, agent notification dedup |
| **Kimi Code CLI** | 10 hot issues; #1864 at 10 👍 | 10 PRs; v1.35.0 release PRs merged | **v1.35.0 shipped today** | `show_thinking_stream` default true |
| **OpenCode** | 10 hot issues; #8030 at 79 👍, 221 comments | 10 PRs | v1.4.5–1.4.6 shipped | Telemetry export, staging performance |
| **Pi** | 10 hot issues; #3175 actively discussed | 10 PRs | v0.67.3 shipped | `renderShell: "self"` for custom TUI rendering |
| **Qwen Code** | 10 hot issues; #3203 at 48 comments | 10 PRs; 39 active PRs mentioned | **v0.14.5 shipped yesterday** | Free-tier discontinuation, startup profiler |

---

## 3. Shared Feature Directions

| Requirement | Tools Expressing Need | Specific Evidence |
|:---|:---|:---|
| **Thinking/reasoning visibility controls** | Kimi, Claude Code, Copilot CLI, OpenCode | Kimi #1864/#1865 (full traces); Copilot #2725 (GPT-5.4 `xhigh` hidden); OpenCode reasoning-item pairing errors |
| **Context compaction / session management** | OpenAI Codex, Gemini CLI, Kimi, Pi | Codex #11325/#14346 (manual `/compact`, compaction hangs); Gemini #24736 (union-find compaction); Pi #3108/#3057 (session recovery) |
| **MCP integration hardening** | Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi | Claude #30457 (Google Drive "connected but not exposed"); Codex 8-PR remote executor stack; Gemini v0.40.0 nightly MCP fixes; Copilot #2232/#2282; Kimi #1897 (MCP hang) |
| **Permission granularity & persistence** | Claude Code, Copilot CLI, OpenCode, Kimi | Claude #16561 (compound Bash parsing); Copilot #307/#2284; OpenCode #8832 (ignored `opencode.json`); Kimi #1882 (WriteFile approval gate) |
| **Local/offline & multi-provider support** | Gemini CLI, Pi, OpenCode, Qwen Code | Gemini #24174 (local Whisper) / #25498 (`gemini gemma`); Pi #3251 (Gemma4 via Ollama); OpenCode #22408 (Kimi K2.6); Qwen #2973 (model quality) |
| **TUI extensibility & customization** | Claude Code, Pi, Kimi, Qwen Code | Claude `/tui fullscreen`; Pi `renderShell: "self"`; Kimi #1892 (unified `/setting` TUI); Qwen #3100 (compact mode UX) |
| **Subagent observability & cleanup** | Claude Code, Gemini CLI, Kimi, Pi | Claude #47830 (orphaned subagent cleanup); Gemini #23582/#22323 (subagent approval/silent failure); Kimi #1889 (VS Code subagent diffs invisible) |

---

## 4. Differentiation Analysis

| Dimension | Tool Positioning | Technical Approach |
|:---|:---|:---|
| **Claude Code** | Premium enterprise agent; deepest Cowork/MCP ecosystem | Proprietary, closed-source; heavy TUI investment; skills (`/buddy`) and hooks as extensibility surface |
| **OpenAI Codex** | Scale-oriented, Rust-rewritten CLI with distributed execution ambitions | Rust CLI with remote executor abstraction; marketplace model for plugins; strongest on provider-agnostic architecture |
| **Gemini CLI** | Google-native, research-forward with voice and planning experiments | Tight Gemini API integration; aggressive AST-aware tooling investigation; local-first features (Whisper, Gemma) |
| **GitHub Copilot CLI** | Microsoft/GitHub ecosystem integration; fleet/team features | Tightly coupled to Copilot subscription and VS Code; conservative release cadence; focus on org-wide policy |
| **Kimi Code CLI** | Transparency-first; rapid community feedback loops | Web + shell + VS Code triple surface; reasoning visibility as differentiator; Chinese and global market dual focus |
| **OpenCode** | Open-source multi-provider agnostic platform | Self-hostable; broad model support (Azure, Gemini, Kimi, etc.); ACP protocol; permission/config debates reflect community governance |
| **Pi** | Extensible, extension-author-centric TUI framework | `renderShell: "self"` and viewport navigation show focus on custom UI; strong cross-provider compatibility layer |
| **Qwen Code** | Alibaba-backed; aggressive hook/subagent architecture | Experimental "Agent Team" parallel coordination; heavy ACP/hooks investment; currently destabilized by monetization shock |

---

## 5. Community Momentum & Maturity

| Category | Assessment | Evidence |
|:---|:---|:---|
| **Highest raw community energy** | **Claude Code** | #45596 (739 👍, 177 comments) represents the largest single-issue mobilization; emotional, organized backlash indicates deep user investment |
| **Most rapid technical iteration** | **OpenAI Codex** | 8-PR architectural stack on MCP remote execution in one cycle; Rust rewrite enables sustained velocity |
| **Most responsive to community feedback** | **Kimi Code CLI** | v1.35.0 shipped *today* reversing `show_thinking_stream` default after days of heated feedback; 24-hour turnaround on emotional issues |
| **Most experimental / research-forward** | **Gemini CLI** | Voice mode PR (#24174), AST-aware file reads (#22745), union-find compaction (#24736) show long-horizon R&D investment |
| **Most mature/stable release rhythm** | **GitHub Copilot CLI** | Predictable patch releases (v1.0.27–28); but lowest PR quality ratio (4/7 spam) suggests thinner contributor surface |
| **Most open-source governance friction** | **OpenCode** | Permission model debates (#2632, #8832), Copilot billing regression (#8030), and multi-provider breakage reflect the complexity of community-driven neutrality |
| **Highest churn risk** | **Qwen Code** | Free-tier discontinuation (#3203, 48 comments, overwhelmingly negative) with "sold out" Pro tier (#3272) creates a user exodus scenario |

---

## 6. Trend Signals

| Trend | Signal Strength | Implication for Developers |
|:---|:---|:---|
| **Trust erosion from silent changes** | 🔴 Very High | Users now treat changelog transparency as a core feature. Claude's `/buddy` removal and Qwen's quota changes show that policy/communication failures rival technical bugs in damage. |
| **Cost control as primary selection criterion** | 🔴 Very High | Codex #14593 ("burning tokens very fast"), Qwen's free-tier collapse, and Copilot's rate-limit disputes (#2336, #2712) make predictable pricing more important than raw capability. |
| **MCP as the new integration battlefield** | 🟡 High | Every tool is investing in MCP, but "connected but not exposed" bugs dominate. Developers should expect 6–12 months of integration fragility before standardization stabilizes. |
| **Reasoning visibility = user trust** | 🟡 High | Kimi's rapid reversal, Copilot's `xhigh` UI confusion, and OpenCode's reasoning-item errors all confirm that developers insist on seeing (and controlling) model reasoning. |
| **Local/offline capabilities gaining priority** | 🟡 High | Gemini's Whisper local backend, Pi's Ollama support, and Qwen's Agent Team suggest a hedge against cloud cost volatility and provider lock-in. |
| **Subagent orchestration complexity outpacing UX** | 🟡 High | Invisible subagent changes, orphaned processes, and silent `MAX_TURNS` failures indicate that multi-agent execution is technically possible but operationally immature. |
| **Windows and Linux as persistent second-class platforms** | 🟡 High | Every tool's bug tracker shows disproportionate Windows/Linux pain: encoding, sandbox, path handling, and memory leaks. macOS-centric development remains the default. |

---

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-16 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | Status | Description | Discussion Highlights |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment in Claude outputs. | Positioned as universally relevant since "these issues affect every document Claude generates." Community sees high daily utility. |
| 2 | **skill-quality-analyzer + skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83)) | 🟡 Open | Two meta-skills for evaluating other Skills across structure, security, performance, and maintainability dimensions. | Enterprise-focused; fills a gap in governance and quality assurance for internal skill libraries. |
| 3 | **frontend-design** ([PR #210](https://github.com/anthropics/skills/pull/83)) | 🟡 Open | Revised skill improving clarity and actionability of frontend design guidance in single-conversation contexts. | Iteration on an existing skill rather than new functionality; signals community investment in refining core UX skills. |
| 4 | **odt** ([PR #486](https://github.com/anthropics/skills/pull/486)) | 🟡 Open | OpenDocument creation, template filling, and ODT-to-HTML parsing for LibreOffice/ISO-standard workflows. | Addresses open-source document format gap alongside existing DOCX/PDF skills. |
| 5 | **DOCX tracked-change fix** ([PR #541](https://github.com/anthropics/skills/pull/541)) | 🟡 Open | Fixes document corruption by resolving `w:id` collisions between tracked changes and existing bookmarks in DOCX files. | Deep technical fix with precise OOXML root-cause analysis; demonstrates mature contributor expertise. |
| 6 | **system-documentation** ([PR #95](https://github.com/anthropics/skills/pull/95)) | 🟡 Open | Comprehensive system documentation and flowcharts for evidence management systems. | Niche but thorough; targets compliance and audit-heavy industries. |
| 7 | **SAP-RPT-1-OSS predictor** ([PR #181](https://github.com/anthropics/skills/pull/181)) | 🟡 Open | Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data. | Bridges enterprise ERP workflows with Claude Code; notable for leveraging a major 2025 vendor release. |
| 8 | **skill-creator YAML validation fix** ([PR #539](https://github.com/anthropics/skills/pull/539)) | 🟡 Open | Prevents silent YAML parsing failures by warning on unquoted descriptions containing special characters. | Developer-experience improvement; reduces friction in the most common skill creation path. |

---

## 2. Community Demand Trends

Derived from the most-commented Issues, the community's strongest demand vectors are:

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Skill reliability & trust boundaries** | [Issue #492](https://github.com/anthropics/skills/issues/492) (security/namespace abuse), [Issue #412](https://github.com/anthropics/skills/issues/412) (agent governance) | Users want verified, safe skills—especially in enterprise settings. |
| **Skill creator/developer experience** | [Issue #202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices), [Issue #556](https://github.com/anthropics/skills/issues/556) (0% eval trigger rate) | The authoring pipeline is seen as broken or suboptimal; fixes here have outsized impact. |
| **Cross-platform & API interoperability** | [Issue #29](https://github.com/anthropics/skills/issues/29) (Bedrock support), [Issue #16](https://github.com/anthropics/skills/issues/16) (MCP exposure) | Demand to use skills outside Claude's native client—via AWS, MCP, or other standards. |
| **Org-wide collaboration** | [Issue #228](https://github.com/anthropics/skills/issues/228) (org sharing), [Issue #62](https://github.com/anthropics/skills/issues/62) (skill loss/sync) | Skills are treated as team assets, not personal configs; users need sharing, versioning, and backup. |
| **Document & content generation** | [Issue #189](https://github.com/anthropics/skills/issues/189) (document-skills duplicates) | Document workflows remain the highest-volume use case, but plugin packaging needs cleanup. |

---

## 3. High-Potential Pending Skills

These PRs are open, actively discussed, and appear technically ready or near-ready for merge:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves a universal, well-scoped problem with clear user value and no external dependencies. |
| **DOCX tracked-change fix** | [#541](https://github.com/anthropics/skills/pull/541) | Bug fix with precise root-cause analysis; low risk, high impact on existing DOCX skill users. |
| **skill-creator YAML validation fix** | [#539](https://github.com/anthropics/skills/pull/539) | Small, defensive improvement to the primary onboarding path for new contributors. |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Directly addresses a flagged community health gap (25% GitHub score); non-controversial docs addition. |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive, well-structured skill covering a high-demand developer workflow with clear scope. |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Addresses a frequently reported pain point—session context loss—with a lightweight persistence mechanism. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, shareable document and enterprise-automation skills delivered through a polished, interoperable developer experience.**

---

# Claude Code Community Digest — 2026-04-16

---

## 1. Today's Highlights

Anthropic shipped two rapid-fire releases (v2.1.109–110) focused on TUI polish, including a new `/tui fullscreen` command for flicker-free rendering and a cleaner transcript toggle via `Ctrl+O`. Meanwhile, the community is in open revolt over the silent removal of `/buddy` in v2.1.97, with a consolidated plea now at 177 comments and 739 upvotes. Windows and MCP integrations continue to dominate the bug tracker.

---

## 2. Releases

| Version | Summary |
|--------|---------|
| **v2.1.110** | Added `/tui` command and `tui` setting — run `/tui fullscreen` for flicker-free rendering in the same conversation. Changed `Ctrl+O` to toggle only normal/verbose transcript; focus view is now handled separately via the new `/focus` command. |
| **v2.1.109** | Improved the extended-thinking indicator with a rotating progress hint. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | **Bring Back Buddy — A Consolidated Plea from the Community** | The `/buddy` skill was silently removed in v2.1.97 with no changelog notice. It had become a daily workflow anchor for thousands of developers. | **739 👍, 177 comments.** Emotional, organized backlash; users treating it as a trust-breaking deletion. |
| [#26224](https://github.com/anthropics/claude-code/issues/26224) | **Claude Code hanging / freezing for 5–20+ minutes** | Widespread reports of the CLI becoming unresponsive mid-prompt, severely breaking flow state. | **100 👍, 76 comments.** Long-running thread with users sharing reproduction patterns and workarounds. |
| [#30457](https://github.com/anthropics/claude-code/issues/30457) | **Google Drive connector shows connected but tools not exposed in Cowork** | Cowork's promise of unified tool access fails for a major enterprise integration; blocks document-centric workflows. | **39 👍, 55 comments.** Mac users particularly affected; no clear fix from maintainers yet. |
| [#7229](https://github.com/anthropics/claude-code/issues/7229) | **Terminal window title settings** | Power users running multiple Claude Code sessions in tabs/windows need customizable titles for orientation. | **47 👍, 34 comments.** Long-standing request (since Sept 2025); steady upvote growth. |
| [#16561](https://github.com/anthropics/claude-code/issues/16561) | **Parse compound Bash commands and match each component against permissions** | Security/UX friction: `&&` or `\|` chains currently require blanket approval even if every sub-command is allowlisted. | **140 👍, 19 comments.** Highly upvoted; seen as a core permissions-system design gap. |
| [#36286](https://github.com/anthropics/claude-code/issues/36286) | **PermissionDecision in PreToolUse is ignored in latest VS Code Extension** | Hooks are a critical enterprise extensibility point; regression breaks automated policy enforcement in VS Code. | **12 comments, 0 👍.** Niche but severe for orgs relying on PreToolUse hooks; marked `regression`. |
| [#43454](https://github.com/anthropics/claude-code/issues/43454) | **apply-seccomp fails on Linux — cannot write /proc/self/setgroups** | Sandboxing breaks on certain Linux environments, preventing Claude Code from starting at all. | **12 👍, 7 comments.** Has repro; Linux users blocked from launch. |
| [#48281](https://github.com/anthropics/claude-code/issues/48281) | **Claude Code Desktop is crashing with new version** | Desktop app crashes immediately after update for some macOS users; total workflow halt. | **2 👍, 10 comments.** Rapid reports after recent release; typical post-update fire drill. |
| [#48813](https://github.com/anthropics/claude-code/issues/48813) | **Claude Desktop cowork leaks ~19GB kernel non-paged pool memory** | Extreme kernel memory leak in Cowork mode requiring full system restart; data-center and long-session users at risk. | **2 comments, 0 👍.** Serious but early; needs broader reproduction. |
| [#48835](https://github.com/anthropics/claude-code/issues/48835) | **claude --resume fails silently for worktree conversations** | Git worktrees are common in monorepo workflows; silent failure erodes trust in session persistence. | **2 comments, 0 👍.** Frustrating DX papercut with no diagnostic feedback. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | **feat: add preserve-session plugin** | Assigns path-independent UUIDs to projects so session history survives directory renames, moves, or copies. |
| [#48714](https://github.com/anthropics/claude-code/pull/48714) | **Add proposal scraper Stop hook example** | New `examples/hooks/` sample: a Stop hook that persists assistant proposal blocks to `PROPOSALS.md` across crashes and compaction. |
| [#47830](https://github.com/anthropics/claude-code/pull/47830) | **feat: add subagent-cleanup plugin** | Terminates orphaned subagent processes at session start to prevent CPU/memory leaks from agent teams. |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: open source claude code ✨** | Community-driven PR referencing multiple open-source requests; symbolic of ongoing pressure for source availability. |
| [#48377](https://github.com/anthropics/claude-code/pull/48377) | **fix: semgrep-run-shell-injection** | Patches a GitHub Actions workflow to eliminate variable-interpolation shell-injection risk flagged by Semgrep. |
| [#48353](https://github.com/anthropics/claude-code/pull/48353) | **fix(plugin-dev): align agent-development skill metadata** | Renames skill and escapes XML-like tags to satisfy `agnix` parsing rules. |
| [#48351](https://github.com/anthropics/claude-code/pull/48351) | **fix(hookify): align writing-rules skill name with directory** | Renames Hookify skill to `writing-rules` for directory-name consistency. |
| [#48350](https://github.com/anthropics/claude-code/pull/48350) | **fix(pr-review-toolkit): make type-design-analyzer frontmatter valid YAML** | Rewrites plugin frontmatter as YAML block scalars to fix `agnix` parse failures. |
| [#48349](https://github.com/anthropics/claude-code/pull/48349) | **fix(pr-review-toolkit): make silent-failure-hunter frontmatter valid YAML** | Same metadata hygiene fix for the `silent-failure-hunter` agent. |
| [#48348](https://github.com/anthropics/claude-code/pull/48348) | **fix(pr-review-toolkit): make pr-test-analyzer frontmatter valid YAML** | Continues the `agnix`-compatibility cleanup sweep across PR-review toolkit agents. |

*Note: PRs #48341–48353 represent a coordinated community effort (led by @Rohan5commit) to fix `agnix` YAML/metadata parsing across the plugin ecosystem.*

---

## 5. Feature Request Trends

1. **TUI/UX Polish** — Requests for finer font-size controls ([#48841](https://github.com/anthropics/claude-code/issues/48841)), bilingual status spinners ([#48838](https://github.com/anthropics/claude-code/issues/48838)), terminal window titles ([#7229](https://github.com/anthropics/claude-code/issues/7229)), and the new `/tui fullscreen` mode show sustained appetite for interface customization.
2. **Session & Project Portability** — `preserve-session` ([#39148](https://github.com/anthropics/claude-code/pull/39148)) and worktree resume fixes ([#48835](https://github.com/anthropics/claude-code/issues/48835)) reflect a broader demand: sessions must survive refactoring, renames, and CI environments.
3. **Agent Observability & Control** — Users want visibility into subagents in VS Code ([#46076](https://github.com/anthropics/claude-code/issues/46076)), cleanup of orphaned processes ([#47830](https://github.com/anthropics/claude-code/pull/47830)), and richer cron scheduling in Routines ([#48842](https://github.com/anthropics/claude-code/issues/48842)).
4. **Permission & Security Granularity** — Compound Bash command parsing ([#16561](https://github.com/anthropics/claude-code/issues/16561)), `--no-hooks` for `claude -p` without breaking OAuth ([#48840](https://github.com/anthropics/claude-code/issues/48840)), and per-project OAuth for MCP plugins ([#48834](https://github.com/anthropics/claude-code/issues/48834)) all point to enterprise-scale policy needs.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|-----------|----------|
| **Silent feature removals break trust** | The `/buddy` deletion ([#45596](https://github.com/anthropics/claude-code/issues/45596)) is the loudest community backlash in months, compounded by zero changelog mention. |
| **Windows is a second-class citizen** | A disproportionate share of bugs target Windows: desktop crashes ([#48553](https://github.com/anthropics/claude-code/issues/48553), [#48843](https://github.com/anthropics/claude-code/issues/48843)), MCP tool registration failures ([#38783](https://github.com/anthropics/claude-code/issues/38783)), plugin-dir config errors ([#35879](https://github.com/anthropics/claude-code/issues/35879)), and massive memory leaks ([#48813](https://github.com/anthropics/claude-code/issues/48813)). |
| **MCP/Cowork integration fragility** | Google Drive, Gmail, custom local MCP servers, and Claude Desktop connectors all suffer from "connected but not exposed" or stale-session bugs ([#30457](https://github.com/anthropics/claude-code/issues/30457), [#42453](https://github.com/anthropics/claude-code/issues/42453), [#48557](https://github.com/anthropics/claude-code/issues/48557), [#48713](https://github.com/anthropics/claude-code/issues/48713)). |
| **Performance and hanging** | Long freezes ([#26224](https://github.com/anthropics/claude-code/issues/26224)) and memory leaks ([#48813](https://github.com/anthropics/claude-code/issues/48813)) make Claude Code unsuitable for long-running or unattended sessions. |
| **Hooks & permissions regressions** | Recent VS Code extension updates broke `PermissionDecision` in `PreToolUse` ([#36286](https://github.com/anthropics/claude-code/issues/36286)), and the `--bare` flag forces an undesirable auth trade-off ([#48840](https://github.com/anthropics/claude-code/issues/48840)). |

---

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-16

---

## 1. Today's Highlights

OpenAI shipped **Rust CLI v0.121.0**, introducing a full plugin marketplace system and TUI prompt-history upgrades with `Ctrl+R` reverse search. Meanwhile, an 8-part PR stack landed to re-architect MCP stdio server execution behind a remote executor abstraction, laying groundwork for distributed tool calling. The issue tracker remains dominated by resource-burning complaints—fast token consumption, CPU/GPU spikes, and sandbox friction across macOS, Windows, and Linux.

---

## 2. Releases

| Version | Highlights |
|--------|------------|
| **rust-v0.121.0** | • `codex marketplace add` + app-server support for installing plugin marketplaces from GitHub, git URLs, local directories, or direct `marketplace.json` URLs<br>• TUI prompt history improvements: `Ctrl+R` reverse search and local recall |
| rust-v0.122.0-alpha.1 | Alpha pre-release; no detailed notes |
| rust-v0.121.0-alpha.11 through alpha.14 | Incremental alpha builds |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** (Business/VS Code/Windows) | The most-upvoted active issue (542 comments, 222 👍). Users report runaway token consumption that makes Codex economically unusable at scale. | Intense, sustained outcry; no confirmed fix. |
| [#11325](https://github.com/openai/codex/issues/11325) | **Manual `/compact` command in Codex app** | CLI has `/compact`; desktop app users lack any manual context compaction, leading to abrupt session failures. | 141 👍, 51 comments; treated as a parity gap. |
| [#8648](https://github.com/openai/codex/issues/8648) | **Codex replies to earlier messages instead of latest one** | Core agentic context bug: multi-turn conversations degrade as the model fixates on stale prompts. Hurts reliability. | 41 comments, 33 👍; recurring repros. |
| [#17809](https://github.com/openai/codex/issues/17809) | **Context compaction fails with unknown parameter `prompt_cache_retention`** | Recently closed. Affected Mac app users on latest builds; rapid closure suggests it was a deployed regression. | 38 comments, 56 👍; fast team response noted. |
| [#16231](https://github.com/openai/codex/issues/16231) | **High CPU usage on macOS after VS Code extension update** | Regression in `26.325.31654` causing thermal spikes on Apple Silicon. Directly impacts daily usability. | 36 comments, 50 👍; users actively bisecting. |
| [#17615](https://github.com/openai/codex/issues/17615) | **Azure deployments keep throwing safety refusals** | Closed. Azure API users hit over-aggressive "I cannot assist" blocks, breaking enterprise workflows. | 27 comments, 18 👍; resolution unclear. |
| [#14346](https://github.com/openai/codex/issues/14346) | **Context compaction hanging** | VS Code extension users on `5.4` Extra High see compaction freeze sessions mid-task. | 20 comments, 19 👍; linked to broader compaction instability. |
| [#17624](https://github.com/openai/codex/issues/17624) | **Review tab stuck on "Loading diff" on Windows** | Windows path handling bug (`/F:/...` passed literally to `git diff`) breaks code-review UX. | 15 comments, 13 👍; clear repro, awaiting patch. |
| [#12241](https://github.com/openai/codex/issues/12241) | **Failed to apply patch constantly** | Persistent tool-call failure in CLI; patch application is a core editing primitive. | 14 comments, 3 👍; long-running, low engagement but high severity. |
| [#17525](https://github.com/openai/codex/issues/17525) | **On Ubuntu, every normal edit requires skipping sandbox** | Ubuntu CLI users must bypass sandbox on each edit, defeating security defaults and adding friction. | 12 comments; viewed as a Linux support gap. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#18027](https://github.com/openai/codex/pull/18027) | **Fail exec client operations after disconnect** | Final piece of an 8-PR stack: hardens remote executor resilience by rejecting new ops and converting pending RPCs to closed errors after transport disconnect. |
| [#18025](https://github.com/openai/codex/pull/18025) | **Cover MCP stdio tests with executor placement** | Parameterizes MCP stdio core tests over local vs. executor-backed placement, ensuring parity as execution moves remote. |
| [#17974](https://github.com/openai/codex/pull/17974) | **Wire remote MCP stdio through executor** | Uses new MCP server environment setting to route stdio locally or through the executor; defers streamable HTTP. |
| [#17987](https://github.com/openai/codex/pull/17987) | **Add executor process transport for MCP stdio** | Implements rmcp transport backed by executor process read/write calls, enabling non-tty piped stdin for remote MCP servers. |
| [#17986](https://github.com/openai/codex/pull/17986) | **Abstract MCP stdio server launching** | Refactors local MCP stdio startup behind a launcher trait, preserving behavior while enabling remote alternatives. |
| [#17982](https://github.com/openai/codex/pull/17982) | **Add rollout trace capture and reducer** | Introduces opt-in session tracing that bundles raw runtime evidence into a semantic `state.json` graph for debugging complex failures. |
| [#17713](https://github.com/openai/codex/pull/17713) | **Add opt-in provider runtime abstraction** | Creates `codex-model-provider` crate to host provider-specific behavior outside core, supporting future non-OpenAI model backends. |
| [#17980](https://github.com/openai/codex/pull/17980) | **Use AgentAssertion downstream behind `use_agent_identity`** | Feature-gated wiring for agent identity assertions, trimming an earlier oversized PR into a focused downstream slice. |
| [#17956](https://github.com/openai/codex/pull/17956) | **Match usage-limit TUI copy and owner nudge type** | Second attempt at a workspace owner-notify feature when members hit usage limits; carefully avoids the auth-endpoint sev from the first try. |
| [#18026](https://github.com/openai/codex/pull/18026) | **Add OTEL metrics for hook runs** | Emits `codex.hooks.run` and `codex.hooks.run.duration_ms` with `hook_name`, `source`, and `status` tags for operational observability. |

---

## 5. Feature Request Trends

1. **Model-tier flexibility in Plan/Review modes** — Users want separate `plan_model` and implementation model selectors, plus the ability to downgrade from `xhigh` for execution to save cost/latency ([#14969](https://github.com/openai/codex/issues/14969), [#13206](https://github.com/openai/codex/issues/13206)).
2. **Per-project configuration** — Global `~/.codex/config.toml` is insufficient; teams need repo-local configs and auto-discovered profiles ([#3120](https://github.com/openai/codex/issues/3120)).
3. **Manual context management parity** — CLI `/compact` is missing in the desktop app; users also want on-demand compaction controls across all surfaces ([#11325](https://github.com/openai/codex/issues/11325)).
4. **Dynamic `AGENTS.md` loading** — Nested directory-level agent instructions that load on demand, matching Claude Code behavior ([#12115](https://github.com/openai/codex/issues/12115)).
5. **Windows sandbox UX improvements** — Explicit "no sandbox" mode with per-command approval, rather than forced sandbox setup on every new workspace ([#18005](https://github.com/openai/codex/issues/18005)).

---

## 6. Developer Pain Points

| Theme | Summary | Top References |
|-------|---------|--------------|
| **Runaway token / cost burn** | Users on Business/Pro plans report unexpectedly rapid token depletion, making Codex expensive for production use. | [#14593](https://github.com/openai/codex/issues/14593) |
| **Thermal & CPU/GPU regression** | Repeated reports of high CPU/GPU usage on macOS (both app and VS Code extension), sometimes tied to tiny UI animations or post-task spikes. | [#16231](https://github.com/openai/codex/issues/16231), [#16185](https://github.com/openai/codex/issues/16185), [#16857](https://github.com/openai/codex/issues/16857), [#10530](https://github.com/openai/codex/issues/10530) |
| **Context compaction instability** | Compaction hangs, fails with unknown parameters, or triggers at wrong times—breaking long sessions. | [#14346](https://github.com/openai/codex/issues/14346), [#17809](https://github.com/openai/codex/issues/17809) |
| **Agentic context drift** | Model answers stale questions or stops mid-turn, eroding trust in multi-turn agent execution. | [#8648](https://github.com/openai/codex/issues/8648), [#14513](https://github.com/openai/codex/issues/14513) |
| **Patch-application fragility** | `apply_patch` tool fails frequently, especially on custom/local models, blocking code edits. | [#12241](https://github.com/openai/codex/issues/12241), [#17899](https://github.com/openai/codex/issues/17899) |
| **Cross-platform sandbox friction** | Ubuntu users skip sandbox every edit; Windows users want no-sandbox mode; macOS `danger-full-access` blocks GPU/Metal. | [#17525](https://github.com/openai/codex/issues/17525), [#18005](https://github.com/openai/codex/issues/18005), [#17644](https://github.com/openai/codex/issues/17644) |
| **Windows path & link handling** | File-reference links in VS Code extension are broken; Review tab fails on `F:/` paths passed to `git diff`. | [#17649](https://github.com/openai/codex/issues/17649), [#17624](https://github.com/openai/codex/issues/17624) |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-16

---

## 1. Today's Highlights

The project shipped **v0.38.1** (a patch release) and pushed a **v0.40.0 nightly** with planning and MCP reliability improvements. Meanwhile, a blockbuster voice-mode PR entered review, and the community continues to surface severe agent-loop performance regressions—with one issue now at **154 comments and 122 upvotes**.

---

## 2. Releases

| Version | Summary |
|--------|---------|
| **v0.38.1** | Patch release cherry-picking a single fix onto the v0.38.0 branch. ([compare](https://github.com/google-gemini/gemini-cli/compare/v0.38.0...v0.38.1)) |
| **v0.40.0-nightly.20260415** | Nightly build containing generalist-agent doc updates, a more robust MCP error-code check (replacing brittle string matching), and an in-progress planning feature. ([release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.40.0-nightly.20260415.g06e7621b2)) |

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22141](https://github.com/google-gemini/gemini-cli/issues/22141) | Gemini CLI becomes extremely slow (1+ hours) / stuck during small code-edit tasks | The highest-visibility performance regression in the repo; users report hour-long agent loops for trivial edits. | **154 comments, 122 👍** — the dominant thread. |
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) | Failing to download RipGrep should not permanently slow down Gemini CLI startup | A 2+ minute cold-start penalty when GitHub is unreachable; directly impacts first-run UX. | 6 comments; filed by a maintainer (jacob314). |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads, search, and mapping | EPIC-level investigation that could reduce token waste and misaligned reads across the agent stack. | 5 comments; maintainer-only tracker. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Gemini CLI keeps asking for permissions on the same file | Persistent permission-memory failure breaks flow-state for security-conscious users. | 3 comments. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" after command completes | A hang-on-completion bug that makes simple CLI automation unreliable. | 2 comments. |
| [#25503](https://github.com/google-gemini/gemini-cli/issues/25503) | Issue with `/security:analyze` | Newly filed crash/timeout during security analysis of HTML files. | 1 comment; fresh as of today. |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | Gemini failed to open in a temporary path `A:\` | Windows-specific `realpath` crash on removable drives. | 1 comment. |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagents Awareness of Active Approval Modes | Subagents ignore Plan/Auto-Edit mode constraints, causing policy-engine rejections that waste turns. | 1 comment; workstream rollup. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` is reported as `GOAL` success, hiding interruption | Silent failure masks when subagents give up; corrupts higher-level agent reasoning. | 1 comment; P1 priority. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Implement memory routing: global vs. project | Foundation for scalable, non-leaky memory architecture. | 1 comment; 2 👍. |

---

## 4. Key PR Progress

| # | Title | Feature / Fix |
|---|-------|---------------|
| [#24174](https://github.com/google-gemini/gemini-cli/pull/24174) | feat(voice): implement real-time voice mode with cloud and local backends | **Major feature:** Adds speech-to-text via Gemini Live API *and* local Whisper (`whisper.cpp`) integration. |
| [#25409](https://github.com/google-gemini/gemini-cli/pull/25409) | feat(core): wire up the new `ContextManager` and `AgentChatHistory` | Core architecture refactor for context lifecycle management. |
| [#25498](https://github.com/google-gemini/gemini-cli/pull/25498) | feat(cli): add `gemini gemma` local model setup and logs commands | First-class local-model support with LiteRT server log inspection. |
| [#25338](https://github.com/google-gemini/gemini-cli/pull/25338) | fix(core): allow explicit write permissions to override governance file protections in sandboxes | Sandbox fix: explicit write allowances now beat read-only defaults on macOS (Seatbelt) and Linux (bwrap). |
| [#25421](https://github.com/google-gemini/gemini-cli/pull/25421) | feat(core): integrate skill-creator into skill extraction agent | Unifies skill authoring against the canonical `skill-creator` spec instead of a hardcoded inline prompt. |
| [#25343](https://github.com/google-gemini/gemini-cli/pull/25343) | feat(telemetry): add flag for enabling traces specifically | Opt-in heavy tracing decoupled from baseline telemetry, reducing overhead for most users. |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | feat(core): union-find context compaction for `AgentHistoryProvider` | Alternative compression strategy using semantic clustering rather than binary keep/discard truncation. |
| [#25489](https://github.com/google-gemini/gemini-cli/pull/25489) | refactor(core): abstract `OsSandboxManager` and centralize common logic | Cross-platform sandbox unification; paves the way for new OS targets. |
| [#25384](https://github.com/google-gemini/gemini-cli/pull/25384) | feat(core): implement JIT plan directory provisioning with path safety | Dynamic extension plan-directory resolution (Phase 3). |
| [#25396](https://github.com/google-gemini/gemini-cli/pull/25396) | feat(core): isolate sub-agent `activeExtensionName` via `AsyncLocalStorage` | Prevents extension-context leakage between concurrent sub-agents. |

---

## 5. Feature Request Trends

1. **Local-first / offline capabilities** — The `gemini gemma` PR and Whisper local backend in the voice-mode PR show strong investment in reducing cloud dependency.
2. **AST-aware tooling** — Multiple rollup issues (#22745, #22746) are investigating semantic code navigation to cut token burn and misread boundaries.
3. **Memory architecture** — Global-vs-project memory routing (#22819), `MemoryService` event buses (#25394), and persistent permission stores (#24916) all point to a maturing long-term state layer.
4. **Telemetry hygiene** — Trace opt-ins (#25343) and bounded truncation (#25344) reflect enterprise demands for observable but safe telemetry.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Agent-loop latency & hangs** | #22141 (1+ hour stalls), #25166 (shell hangs), #25503 (`/security:analyze` timeouts) — the dominant user complaint. |
| **Cold-start / bootstrap friction** | #25323 (RipGrep download delays), #25216 (Windows `realpath` crash on `A:\`). |
| **Permission fatigue** | #24916 (repeated file permission prompts) and #23582 (subagents ignoring approval modes). |
| **Silent / misleading failures** | #22323 (`MAX_TURNS` reported as success) and #24246 (>128 tools causing 400 errors without graceful fallback). |
| **Terminal rendering over SSH** | #24202 (scrambled text over SSH) and #24546 (need for SSH detection helper). |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-16

---

## 1. Today's Highlights

GitHub shipped Copilot CLI **v1.0.28** with targeted fixes for git submodule permission prompts, redundant background-agent notifications, and improved MCP migration docs. Meanwhile, the community is actively debating newly introduced rate-limiting behavior and UI inconsistencies around reasoning-level options for GPT-5.4.

---

## 2. Releases

### [v1.0.28](https://github.com/github/copilot-cli/releases/tag/v1.0.28) — 2026-04-16
- **Git submodule fix:** Permission prompts now display the correct repository path when working inside git submodules.
- **Agent notification deduplication:** Background agent completion notifications are no longer sent redundantly when `read_agent` is already awaiting the result.
- **MCP docs improvement:** The MCP migration hint now links to platform-specific documentation.

### [v1.0.27](https://github.com/github/copilot-cli/releases/tag/v1.0.27) — 2026-04-15
- **Trial status clarity:** A clearer message is shown when a Copilot Pro trial is paused, replacing a generic policy error.
- **Enhanced status bar:** The status bar now displays `@files` and `#issues` hints while typing, plus a `/help` hint when the slash-command picker is open.
- **WSL clipboard fix:** Copying to clipboard on WSL no longer leaks an invisible BOM character into pasted text.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#618](https://github.com/github/copilot-cli/issues/618) | **Custom slash commands from `.github/prompts`** (Closed) | Brings CLI parity with the VS Code extension for repo-specific commands. | 95 👍, 30 comments — one of the highest-voted feature requests ever. |
| [#2082](https://github.com/github/copilot-cli/issues/2082) | **Ctrl+Shift+C broken on Linux** | Breaks a standard terminal muscle-memory shortcut for copying. | 16 comments, ongoing frustration; workaround exists but unsatisfying. |
| [#2336](https://github.com/github/copilot-cli/issues/2336) | **Strange rate-limit message** | Users hit opaque limits during moderate background-agent tasks. | 13 comments; confusion over what triggers the limit. |
| [#978](https://github.com/github/copilot-cli/issues/978) | **Skills not used unless explicitly stated** | Undermines the value of the Skills system for lighter `AGENTS.md` workflows. | 11 comments; users want automatic skill invocation. |
| [#2541](https://github.com/github/copilot-cli/issues/2541) | **Option to disable eye animation** (Closed) | Accessibility / distraction concern for the startup banner. | 9 comments; closed, suggesting a config path may exist. |
| [#1590](https://github.com/github/copilot-cli/issues/1590) | **"Failed to get response from AI model" after retries** (Closed) | Long-running executions crash with repeated server errors. | 8 comments, 10 👍; reliability pain point for heavy workflows. |
| [#2232](https://github.com/github/copilot-cli/issues/2232) | **MCP config files stopped loading in 1.0.11-1** (Closed) | Broke MCP server discovery for users relying on `.mcp.json`. | 8 comments, 11 👍; high impact for MCP adopters. |
| [#307](https://github.com/github/copilot-cli/issues/307) | **Comprehensive Permissions System Improvements** (Closed) | Consolidated 16+ issues on path detection, docs, and UX gaps in permissions. | 8 comments, 8 👍; seen as a milestone meta-issue. |
| [#2712](https://github.com/github/copilot-cli/issues/2712) | **MS liability for rate-limit behavior** | Legal/policy angle: users argue rate-limiting is triggered by autonomous agent actions, not direct user input. | 5 comments; contentious, signals trust erosion. |
| [#2725](https://github.com/github/copilot-cli/issues/2725) | **GPT-5.4 `/model` picker hides Extra High** | UI shows only Low/Medium/High even though `xhigh` still works, creating inconsistency. | 3 comments, 6 👍; likely a UI regression or intentional un-announced change. |

---

## 4. Key PR Progress

Only **7 PRs** were active in the last 24 hours. The meaningful ones are below; the remainder were spam/invalid and closed.

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2565](https://github.com/github/copilot-cli/pull/2565) | **Guard against duplicate PATH entries on reinstall** | Fixes installer idempotency: running `install.sh` twice no longer appends duplicate PATH lines. | Open |
| [#2587](https://github.com/github/copilot-cli/pull/2587) | **Automated issue classification with GitHub Agentic Workflows** | Introduces `gh-aw`–powered auto-labeling (`area:` + `triage`) on new/reopened issues. | Closed |
| [#1617](https://github.com/github/copilot-cli/pull/1617) | **Top-level cleanup: move examples/gradio and add scripts** | Repository hygiene: reorganizes examples and adds migration helper scripts. | Closed (invalid) |
| [#1850](https://github.com/github/copilot-cli/pull/1850) | **Create blank.yml** | Spam — no meaningful change. | Closed (invalid) |
| [#1916](https://github.com/github/copilot-cli/pull/1916) | **Rename install.sh to 1install.sh** | Spam — no meaningful change. | Closed (invalid) |
| [#2069](https://github.com/github/copilot-cli/pull/2069) | **Create devcontainer.json** | Spam — no meaningful change. | Closed (invalid) |
| [#2713](https://github.com/github/copilot-cli/pull/2713) | **Create my-agent.agent.md** | Spam — no meaningful change. | Closed (invalid) |

---

## 5. Feature Request Trends

1. **Custom slash commands & prompt configurability** — Strong demand for repo-level commands (`.github/prompts`) and customizable prompt symbols/status lines ([#618](https://github.com/github/copilot-cli/issues/618), [#2329](https://github.com/github/copilot-cli/issues/2329)).
2. **Animation & accessibility controls** — Repeated requests for options to disable animations, including the banner eye animation and thinking indicators ([#1326](https://github.com/github/copilot-cli/issues/1326), [#2541](https://github.com/github/copilot-cli/issues/2541)).
3. **Persistent permissions & directory management** — Users want `/add-dir` allowances and permission decisions to survive across sessions ([#2284](https://github.com/github/copilot-cli/issues/2284), [#307](https://github.com/github/copilot-cli/issues/307)).
4. **Context visibility & status-line enhancements** — Live context-window percentage and usage metrics in the status bar ([#2342](https://github.com/github/copilot-cli/issues/2342)).
5. **Skills auto-invocation** — Expectation that defined Skills trigger automatically without explicit user mention ([#978](https://github.com/github/copilot-cli/issues/978)).

---

## 6. Developer Pain Points

- **Rate limiting & retry behavior** — The dominant frustration this cycle. Users report sudden, opaque limits (`user_weekly_rate_limited`, 58-hour waits) and question whether autonomous agents/fleet commands should count against their quotas ([#2336](https://github.com/github/copilot-cli/issues/2336), [#2696](https://github.com/github/copilot-cli/issues/2696), [#2712](https://github.com/github/copilot-cli/issues/2712), [#2741](https://github.com/github/copilot-cli/issues/2741)).
- **MCP reliability & discovery** — Ongoing issues with MCP servers failing to connect, config files not loading, and missing MCP tools in sub-agent contexts ([#2232](https://github.com/github/copilot-cli/issues/2232), [#2282](https://github.com/github/copilot-cli/issues/2282), [#2630](https://github.com/github/copilot-cli/issues/2630)).
- **Linux input/clipboard regressions** — Broken `Ctrl+Shift+C` copy and WSL BOM leaks disrupt terminal-native workflows ([#2082](https://github.com/github/copilot-cli/issues/2082)).
- **Headless resource leaks** — Kqueue file-descriptor leaks in `--headless` mode cause tool execution to fail after prolonged or multi-agent use ([#2389](https://github.com/github/copilot-cli/issues/2389), [#2707](https://github.com/github/copilot-cli/issues/2707)).
- **Model-picker UI inconsistencies** — The GPT-5.4 reasoning-level dropdown hiding `xhigh` while the backend still accepts it generates confusion and suspicion of silent feature removal ([#2725](https://github.com/github/copilot-cli/issues/2725), [#2739](https://github.com/github/copilot-cli/issues/2739)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-16

## 1. Today's Highlights
Kimi CLI **v1.35.0** shipped today, flipping `show_thinking_stream` to `true` by default after days of heated community feedback that reasoning traces had disappeared. The release also fixes a nasty Web UI deadlock where stale in-flight prompts would lock the session permanently. Meanwhile, the VS Code extension remains a hot topic, with multiple new issues and PRs targeting skill interaction, thinking visibility, and subagent change tracking.

---

## 2. Releases
**v1.35.0** — [Release notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.35.0)
- **Shell**: `show_thinking_stream` now defaults to `true` so new installs see streaming reasoning previews out of the box; users preferring the compact indicator can opt out via config.
- **Web**: Clears stale in-flight prompts on error to prevent a "session busy" deadlock when workers crash or throw uncaught exceptions.
- **Docs**: Fixed misplaced v1.34.0 entries in the EN/ZH changelogs.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) | Display full thinking traces in Kimi CLI | The most-upvoted open issue (10 👍, 11 comments). Users on Linux report reasoning streams are truncated or hidden entirely, breaking trust in model outputs. | Strong demand for transparency; v1.35.0 partially addresses this. |
| [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) | "Why is the thinking process gone?" | A visceral complaint that the reasoning UI was stripped in v1.33.0, labeled "pure negative optimization." | 3 👍, 10 comments; emotional pushback against UX regression. |
| [#1882](https://github.com/MoonshotAI/kimi-cli/issues/1882) | WriteFile should request permission first | File generation is async and can timeout while users are away; they want an explicit approval gate before writes. | Niche but high-impact for unattended workflows. |
| [#1877](https://github.com/MoonshotAI/kimi-cli/issues/1877) | VS Code compact mode: thinking blocks unexpandable | Mac users cannot expand thinking blocks in the VS Code plugin's compact mode, creating a split experience vs. CLI. | 1 👍; extension quality gap flagged. |
| [#1905](https://github.com/MoonshotAI/kimi-cli/issues/1905) | `/login` OAuth wait cannot be cancelled with Esc | Shell UX friction: the Kimi Code device-auth flow traps users in an uncancellable polling loop. | Already has a fix PR open (#1906). |
| [#1902](https://github.com/MoonshotAI/kimi-cli/issues/1902) | VS Code skill selection sends immediately | Users complain that selecting a `/skill` in VS Code auto-submits, unlike CLI behavior where they can append context. | 0 👍 but vocal; referenced existing MR that hasn't merged. |
| [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897) | Web UI hangs when MCP server fails to connect | A backend `MCPRuntimeError` crashes the worker, leaving the frontend spinning forever. | Reliability concern for MCP adopters. |
| [#1898](https://github.com/MoonshotAI/kimi-cli/issues/1898) | Support OAI-compatible API for native VS Code usage | Users want to plug Kimi models into standard VS Code OAI extensions instead of the dedicated plugin. | Ecosystem portability request. |
| [#1889](https://github.com/MoonshotAI/kimi-cli/issues/1889) | VS Code subagent file changes invisible in diff panel | Subagent edits don't surface in the extension's changes sidebar, breaking review workflows. | Workflow-blocking for plan-mode users. |
| [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) | Error code 400 on `kimi-for-coding` | A generic 400 from the LLM provider on macOS with v1.34.0; no repro details yet but signals potential API drift. | Needs triage; 0 comments so far. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1900](https://github.com/MoonshotAI/kimi-cli/pull/1900) | Default `show_thinking_stream` to `true` | Restores streaming reasoning preview for fresh installs; compact mode still available via config. | **Merged** |
| [#1890](https://github.com/MoonshotAI/kimi-cli/pull/1890) | Clear stale in-flight prompts on Web error | Fixes the session-busy deadlock by wiping prompt IDs when workers crash on SSL/connection errors. | **Merged** |
| [#1906](https://github.com/MoonshotAI/kimi-cli/pull/1906) | Fix OAuth wait cancellation in `/login` | Pipes a cancel event into the device polling loop so `Esc` aborts Kimi Code OAuth flows. | Open |
| [#1892](https://github.com/MoonshotAI/kimi-cli/pull/1892) | Unified `/setting` command + `show_thinking_stream` config | Adds a full-screen TUI settings panel consolidating model, editor, theme, yolo, plan, and thinking preferences. | Open |
| [#1896](https://github.com/MoonshotAI/kimi-cli/pull/1896) | Honor `http_proxy` env vars via `aiohttp trust_env=True` | Enables corporate proxy support by letting `aiohttp` respect standard `HTTP_PROXY`/`NO_PROXY` variables. | Open |
| [#1893](https://github.com/MoonshotAI/kimi-cli/pull/1893) | Handle non-UTF-8 filenames in `git ls-files` on Windows | Forces `utf-8` encoding in `file_filter.py` to prevent GBK crashes on Chinese Windows systems. | Open |
| [#1886](https://github.com/MoonshotAI/kimi-cli/pull/1886) | Add explicit UTF-8 encoding to subprocess calls | Parallel fix to #1893 covering `file_filter.py` subprocess calls; cross-PR collision suggests maintainer attention needed. | Open |
| [#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876) | Register `/btw` slash command at soul level | Elevates `/btw` from shell-only to all execution modes (print, web, ACP). | Open |
| [#1883](https://github.com/MoonshotAI/kimi-cli/pull/1883) | Echo slash command inputs in shell UI | Makes `/skill:coding` and `/help` visible in terminal history instead of suppressing them. | Open |
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | Add YOLO mode support to Web UI | Backend + frontend changes to toggle auto-approval in the browser interface. | **Merged** |

---

## 5. Feature Request Trends
1. **Thinking visibility controls** — Users want configurable, always-on reasoning traces across CLI, Web, and VS Code; the v1.35.0 default change is a direct response.
2. **VS Code extension parity** — Skill interaction, subagent diff tracking, and thinking expandability are all lagging behind CLI; users expect feature parity.
3. **Unified configuration surface** — Scattered slash commands (`/model`, `/editor`, `/theme`) are seen as friction; the `/setting` TUI panel in #1892 addresses this.
4. **Proxy and enterprise connectivity** — `http_proxy` support (#1896) and OAI-compatible API access (#1898) show demand for corporate and multi-tool integration.
5. **Nested skill / Codex compatibility** — Issue #1894 highlights an interoperability gap in skill directory recursion that limits migration from OpenAI's agent stack.

---

## 6. Developer Pain Points
- **Reasoning opacity erodes trust** — The most emotional and upvoted feedback this cycle. Developers depend on thinking traces to validate model logic; hiding them is treated as a regression, not a feature.
- **VS Code extension UX inconsistencies** — Auto-submitting skills, missing thinking expanders, and invisible subagent changes make the extension feel half-baked compared to the CLI.
- **Session reliability in Web / MCP modes** — Deadlocks from stale prompts and hanging MCP connections create production fears for anyone running `kimi web` with external tools.
- **Windows encoding papercuts** — Multiple reports and PRs around `git ls-files` and subprocess encoding on Chinese Windows indicate a platform QA gap.
- **OAuth / login flow friction** — Uncancellable waits and 400 errors during authentication break first-run experience and CI/automation use cases.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-16

## 1. Today's Highlights

OpenCode shipped two patch releases (v1.4.5 and v1.4.6) focused on telemetry export, staging performance, and desktop reliability. The community is actively debating a major Copilot billing regression where agent-initiated requests were incorrectly counted as premium "user" requests, drawing 221 comments and significant attention. Meanwhile, maintainers merged several contributor PRs improving config startup latency, request tracing, and CLI dependency cleanup.

---

## 2. Releases

### v1.4.6
- **Core:** Fixed snapshot staging for very long file lists and improved staging performance; fixed OTEL header parsing when header values contain `=`.
- **Desktop:** Fixed prompt submission state updates to prevent failed or inconsistent sends; improved session title input spacing while editing.

### v1.4.5
- **Core:** Added AI SDK telemetry span export to OTLP trace backends; exposed the experimental question API schema and OpenAPI spec from `@opencode-ai/server`; added a reusable question handler factory for custom question API hosts.
- **Desktop:** Fixed desktop shell commands to start from the home directory.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | Copilot auth sets far too many requests as "user", consuming premium quota rapidly | A billing regression causing agent requests to burn through user Copilot quotas; affects cost and trust | **221 comments, 79 👍** — highest engagement by far |
| [#266](https://github.com/anomalyco/opencode/issues/266) | Gemini doesn't handle edit tool very well | Persistent `oldString not found` failures limit Gemini usability for file edits | 36 comments, 14 👍; whitespace normalization proposed |
| [#4406](https://github.com/anomalyco/opencode/issues/4406) | Why must the read tool be executed before the edit tool | Philosophical/design tension around context efficiency vs. safety guarantees | 34 comments, tagged `good first issue` |
| [#4832](https://github.com/anomalyco/opencode/issues/4832) | Gemini 3 Pro function calling fails — missing `thoughtSignature` support | Breaks latest Gemini model integration; closed after resolution | 27 comments, 14 👍 |
| [#20698](https://github.com/anomalyco/opencode/issues/20698) | GPT 5.4 from Azure constantly fails with reasoning item pairing error | Azure OpenAI users blocked on GPT 5.4 after tool calls; affects both Web and TUI | 24 comments, 3 👍 |
| [#2632](https://github.com/anomalyco/opencode/issues/2632) | Default permissions allow editing files and executing any commands | Security/usability debate: OpenCode's permissive defaults surprise new users | 21 comments, 3 👍; closed |
| [#5408](https://github.com/anomalyco/opencode/issues/5408) | Delayed queue feature | Workflow enhancement for iterative prompt loops; strong community interest | 17 comments, 18 👍 |
| [#8832](https://github.com/anomalyco/opencode/issues/8832) | OpenCode not respecting permissions | Users report granular `permission` config in `opencode.json` is ignored | 13 comments, 3 👍 |
| [#22444](https://github.com/anomalyco/opencode/issues/22444) | Azure OpenAI Models not working in the latest update | Broad Azure breakage across GPT-5.3-Codex, GPT-5.2-Codex, and GPT-5.4 Mini | 8 comments, 3 👍 |
| [#22191](https://github.com/anomalyco/opencode/issues/22191) | `auth login <url>` should confirm before running `auth.command` | Security concern: remote commands executed without user confirmation | 6 comments, 2 👍 |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#21697](https://github.com/anomalyco/opencode/pull/21697) | fix(opencode): resolve npmrc with `@npmcli/config` | Replaces custom npmrc loader with standard npm config resolution; fixes registry-related plugin install hangs |
| [#22652](https://github.com/anomalyco/opencode/pull/22652) | CLI perf: reduce deps | Refactors plugin dependency installation to use shared npm service; moves test files and simplifies config handling |
| [#22679](https://github.com/anomalyco/opencode/pull/22679) | feat(core): add fence to make all methods strongly consistent when syncing | Introduces sync-state fencing for strong consistency between workspace and control plane servers |
| [#22676](https://github.com/anomalyco/opencode/pull/22676) | feat: use proper globbing for edit/read/external_directory permissions | Adds real glob support (except `*` still means anywhere) for permission rules |
| [#22674](https://github.com/anomalyco/opencode/pull/22674) | fix: add support for ACP `writeTextFile` clientCapability | Fixes ACP file syncing for clients advertising `fs.writeTextFile` |
| [#22670](https://github.com/anomalyco/opencode/pull/22670) | fix(opencode): avoid org lookup during config startup | Removes blocking `Account.orgs` lookup at startup, improving config load latency |
| [#22649](https://github.com/anomalyco/opencode/pull/22649) | feat(opencode): add request route spans | Adds top-level HTTP route tracing spans for session/config endpoints |
| [#22637](https://github.com/anomalyco/opencode/pull/22637) | refactor(opencode): use `AppFileSystem` path helpers | Replaces helper-only `Filesystem` usages with `AppFileSystem` static helpers across core and TUI |
| [#22587](https://github.com/anomalyco/opencode/pull/22587) | fix: fallback custom model output limit to `OUTPUT_TOKEN_MAX` instead of 0 | Prevents `maxOutputTokens must be >= 1` errors for custom models missing explicit output limits |
| [#22461](https://github.com/anomalyco/opencode/pull/22461) | fix(tui): prevent out-of-order `project.sync()` responses from overwriting state | Guards TUI state against stale sync responses arriving out of order |

---

## 5. Feature Request Trends

- **New model/provider integrations:** Strong demand for Kimi K2.6 ([#22408](https://github.com/anomalyco/opencode/issues/22408)), Gab.ai ([#8762](https://github.com/anomalyco/opencode/issues/8762)), and LLM Gateway ([#7847](https://github.com/anomalyco/opencode/pull/7847)).
- **Permission and security hardening:** Repeated calls for stricter defaults, glob-based permission rules, and enforcement of existing `opencode.json` permission settings.
- **Workflow automation:** Interest in delayed/queued prompt execution ([#5408](https://github.com/anomalyco/opencode/issues/5408)) and inline skill invocation using `$skill-name` anywhere in prompts ([#15617](https://github.com/anomalyco/opencode/issues/15617)).
- **Mobile and self-hosted flexibility:** Mobile touch optimization ([#18767](https://github.com/anomalyco/opencode/pull/18767)) and build-time base URL configuration ([#18209](https://github.com/anomalyco/opencode/pull/18209)) for custom deployments.

---

## 6. Developer Pain Points

- **Azure OpenAI reliability:** Multiple reports of GPT 5.x and Codex models failing on Azure with reasoning-item pairing errors ([#20698](https://github.com/anomalyco/opencode/issues/20698), [#22444](https://github.com/anomalyco/opencode/issues/22444)) and unsupported `max_tokens` parameters ([#22374](https://github.com/anomalyco/opencode/issues/22374)).
- **Gemini toolchain fragility:** Edit tool mismatches ([#266](https://github.com/anomalyco/opencode/issues/266)) and missing `thoughtSignature` support ([#4832](https://github.com/anomalyco/opencode/issues/4832)) continue to make Gemini a second-class experience.
- **Permission model confusion:** Users expect granular `opencode.json` rules to be respected ([#8832](https://github.com/anomalyco/opencode/issues/8832)), while others argue defaults are dangerously permissive ([#2632](https://github.com/anomalyco/opencode/issues/2632)).
- **TUI rendering and portability:** Windows ARM64 FFI failures ([#20767](https://github.com/anomalyco/opencode/issues/20767)), tmux rendering stalls ([#16566](https://github.com/anomalyco/opencode/issues/16566)), and Android/Termux misdetection ([#21043](https://github.com/anomalyco/opencode/issues/21043)) highlight cross-platform TUI rough edges.
- **npm/registry configuration drift:** Hardcoded or ignored registry configs cause plugin installs to hang in corporate and regional environments ([#21324](https://github.com/anomalyco/opencode/issues/21324), [#21697](https://github.com/anomalyco/opencode/pull/21697)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-16

## Today's Highlights
The v0.67.3 release landed with a major TUI extensibility win: tools can now opt out of the default boxed shell via `renderShell: "self"`, enabling stable large previews like edit diffs. Meanwhile, the community closed a flurry of critical bugs around session recovery, terminal paste handling, and orphaned process leaks. Anthropic streaming reliability also got significant hardening with two closely-watched PRs from `mitsuhiko`.

---

## Releases

**v0.67.3**
- **`renderShell: "self"`** — Custom and built-in tool renderers can now own their outer shell instead of being wrapped in the default boxed shell. This is especially useful for stable, large previews such as edit diffs. [docs/extensions.md#custom-rendering](https://github.com/badlogic/pi-mono/blob/main/docs/extensions.md#custom-rendering)
- Interactive features (release notes truncated in source)

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#3175](https://github.com/badlogic/pi-mono/issues/3175) | JSON parse error at position 3875 breaks edits repeatedly | A recurring, non-deterministic failure in the edit tool that bricks user sessions; 14 comments show widespread impact with Anthropic models. | High frustration; actively discussed |
| [#3167](https://github.com/badlogic/pi-mono/issues/3167) | Pasting multiline text inserts CSI-u escape sequences | Terminal paste corruption inside tmux breaks basic UX; quickly closed after identification. | Relief at fast resolution |
| [#3108](https://github.com/badlogic/pi-mono/issues/3108) | Empty tool-call name makes session permanently unrecoverable | A malformed model response poisons session history, causing 400 errors forever. | Seen as critical reliability gap; now closed |
| [#3214](https://github.com/badlogic/pi-mono/issues/3214) | Cloud Code Assist API rejects MCP tools due to `$schema` meta-fields | Antigravity / Google Cloud Code Assist compatibility broken by JSON Schema meta-declarations in tool params. | Active debugging; provider-specific workaround needed |
| [#3112](https://github.com/badlogic/pi-mono/issues/3112) | Tool arguments not validated in Cloudflare Workers | `validateToolArguments` is silently skipped in Workers, letting invalid LLM inputs reach `execute()`. | Security/reliability concern; PR in flight |
| [#3005](https://github.com/badlogic/pi-mono/issues/3005) | Make "UPDATE AVAILABLE" message toggleable | The big yellow banner on every startup is disruptive for NixOS and other non-standard install paths; 2 upvotes. | Recurring QoL request |
| [#3057](https://github.com/badlogic/pi-mono/issues/3057) | Detached bash child processes leak as orphans | Closing a terminal left 811 orphaned `pi` processes consuming ~90GB RAM. | Shock at scale; appreciated fix |
| [#3196](https://github.com/badlogic/pi-mono/issues/3196) | Prompt caching broken for OpenAI-compatible proxies | `openai-responses` path misses cache-routing headers, causing 100% cache misses on proxies like litellm. | Cost/perf impact; in progress |
| [#3021](https://github.com/badlogic/pi-mono/issues/3021) | `pi.*` calls target disposed session after `ctx.newSession()` | Extension API silently targets the wrong session, causing data loss. | Breaking bug; awaiting fix |
| [#3230](https://github.com/badlogic/pi-mono/issues/3230) | `/reload` does not load newly installed extensions | Users expect hot-reload of new extensions mid-session; currently requires restart. | Common workflow friction |

---

## Key PR Progress

| # | PR | Feature or Fix |
|---|----|---------------|
| [#3251](https://github.com/badlogic/pi-mono/pull/3251) | Fix Gemma4 via Ollama: force `reasoning_effort: "none"` | Stops Gemma4 from emitting unwanted thinking tokens when reasoning is disabled. |
| [#3248](https://github.com/badlogic/pi-mono/pull/3248) | OSC 8 hyperlinks in Markdown (TUI) | Adds clickable terminal hyperlinks for supported emulators, with proper line-wrap state tracking. |
| [#3247](https://github.com/badlogic/pi-mono/pull/3247) | Typebox fallback for Cloudflare | Addresses [#3112](https://github.com/badlogic/pi-mono/issues/3112) by providing a validation path that works in Workers. |
| [#3246](https://github.com/badlogic/pi-mono/pull/3246) | Replace deprecated `k2p5` with `kimi-for-coding` | Keeps Kimi coding provider aligned with current API slugs. |
| [#3229](https://github.com/badlogic/pi-mono/pull/3229) / [#3226](https://github.com/badlogic/pi-mono/pull/3226) | Harden Anthropic tool-call streaming and recovery | Switches to raw `messages.create(..., stream: true)` with a non-stream fallback mid-turn; fixes [#3175](https://github.com/badlogic/pi-mono/issues/3175). |
| [#3197](https://github.com/badlogic/pi-mono/pull/3197) | Add `interrupt()` for graceful turn interruption | New `pi-agent-core` API to stop the agent without destroying in-flight tool work—fills the gap between `abort()` and `pause()`. |
| [#3238](https://github.com/badlogic/pi-mono/pull/3238) | Omit `reasoning: none` for GPT-5 family | Fixes compaction failures caused by sending disallowed reasoning params to GPT-5 models. |
| [#3215](https://github.com/badlogic/pi-mono/pull/3215) | Strip meta-declarations from tool params for Cloud Code Assist | Removes `$schema` and other schema metadata before sending tool definitions, fixing [#3214](https://github.com/badlogic/pi-mono/issues/3214). |
| [#3227](https://github.com/badlogic/pi-mono/pull/3227) | Extension viewport navigation layer | Adds `ctx.ui.navigateTo()`, anchor registration, and viewport capture/restore for rich extension UIs. |
| [#3234](https://github.com/badlogic/pi-mono/pull/3234) | Round-trip Gemini 3 `thought_signature` through OpenAI-compat tool calls | Preserves Google's opaque thought signature across turns, preventing 400 errors on follow-up tool calls. |

---

## Feature Request Trends

1. **TUI/Rendering Extensibility** — `renderShell: "self"`, OSC 8 hyperlinks, and viewport navigation PRs show strong momentum around letting extensions and tools control their own presentation surface.
2. **Session Lifecycle Robustness** — Multiple requests for better `--resume`/`--continue` behavior, graceful `interrupt()`, and cleanup on `SIGHUP`/`SIGTERM` indicate users want Pi to feel more like a persistent, recoverable service.
3. **Quiet/Customizable UX** — Toggleable update banners, less intrusive startup, and clearer reasoning-mode UX are recurring themes.
4. **Cross-Provider Compatibility** — Heavy activity on Anthropic, Google Vertex/Gemini, OpenRouter, Cloud Code Assist, and Cloudflare Workers shows the community is pushing Pi to work reliably across fragmented provider behaviors.

---

## Developer Pain Points

- **Session corruption is too easy** — Empty tool names, JSON parse failures, and orphaned processes all lead to unrecoverable or resource-leaking sessions. Users need Pi to degrade gracefully rather than brick.
- **Extension API lifecycle bugs** — `ctx.newSession()` leaving stale references, `/reload` not picking up new extensions, and `session_shutdown` not firing on common signals all create "spooky action at a distance" for extension authors.
- **Provider-specific papercuts** — Reasoning parameter semantics, prompt caching headers, and schema meta-declarations vary wildly across backends. Developers are repeatedly hitting 400 errors that require provider-specific workarounds.
- **Terminal environment fragility** — Kitty keyboard protocol in multiplexers, paste behavior in tmux, and spinner scrollback leaks show that Pi's TUI assumptions don't always match real-world terminal stacks.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-16

---

## 1. Today's Highlights

Qwen Code shipped **v0.14.5** yesterday with the permanent discontinuation of the Qwen OAuth free tier, triggering significant community backlash across GitHub issues. The release also brings startup profiling and SDK exposure of `/context` usage data, while the repo saw 39 active PRs pushing on hooks, session management, and CLI ergonomics.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **[v0.14.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5)** | Discontinues Qwen OAuth free tier; exposes `/context` usage data in non-interactive mode and SDK; adds startup performance profiler; implements fork subagent improvements. |
| **[v0.14.4-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.4-preview.1)** | Same feature set as v0.14.5 (cut from same commit base). |
| **[v0.14.4-nightly.20260415.9f9ffbf95](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.4-nightly.20260415.9f9ffbf95)** | Nightly build containing the above features. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#3203](https://github.com/QwenLM/qwen-code/issues/3203)** | Qwen OAuth Free Tier Policy Adjustment | Official proposal to slash free quota from 1,000 to 100 requests/day and fully close the free entry point. | **48 comments** — highest engagement in the repo; overwhelmingly negative, with users calling it a betrayal of trust. |
| **[#1742](https://github.com/QwenLM/qwen-code/issues/1742)** | 429 Free allocated quota exceeded | Users hitting quota limits far below the advertised 1,000/day, suggesting enforcement preceded the official announcement. | 19 comments; resolved as closed but fueled suspicion of uncommunicated policy changes. |
| **[#3263](https://github.com/QwenLM/qwen-code/issues/3263)** | Alternative solutions for canceling the free quota | Users already sharing competitor referrals (MonkeyCode, SiliconFlow) as migration paths. | 7 comments; indicative of user churn. |
| **[#3277](https://github.com/QwenLM/qwen-code/issues/3277)** | MCP Client limited to 2 connections | Production-blocking bug for multi-node MCP infrastructure; causes data loss risk. | 6 comments; labeled critical by reporter, awaiting maintainer response. |
| **[#3267](https://github.com/QwenLM/qwen-code/issues/3267)** | Requests limits overview | Users cannot track consumption, leading to surprise rate limits. | 5 comments; UX gap directly tied to monetization friction. |
| **[#3288](https://github.com/QwenLM/qwen-code/issues/3288)** | Free limits documentation mismatch | Russian docs still advertise 1,000 free requests while enforcement is at 100. | 4 comments; trust erosion from inconsistent messaging. |
| **[#3281](https://github.com/QwenLM/qwen-code/issues/3281)** | OAuth auth succeeds but requests fail | Onboarding breakage: users authenticate successfully then immediately hit quota errors. | 4 comments, 2 upvotes; severe first-run experience regression. |
| **[#2973](https://github.com/QwenLM/qwen-code/issues/2973)** | Poor system prompt adherence | Core model behavior issue where Qwen Code ignores explicit system instructions. | 7 comments; quality concern affecting power users. |
| **[#3306](https://github.com/QwenLM/qwen-code/issues/3306)** | Why did you kick OAuth users out? | Emotional user appeal from a team that built workflows around the CLI and recommended it widely. | 1 comment but high symbolic weight of community betrayal. |
| **[#3272](https://github.com/QwenLM/qwen-code/issues/3272)** | No Pro plan available | Pro tier perpetually "sold out," leaving users with no paid migration path. | 1 comment; monetization infrastructure appears unprepared for the free-tier removal. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **[#3103](https://github.com/QwenLM/qwen-code/pull/3103)** | fix(cli): support Shift+Enter for newline insertion across terminals | Adds three fallback mechanisms to make Shift+Enter work reliably for newline insertion in diverse terminal emulators. | Open |
| **[#3085](https://github.com/QwenLM/qwen-code/pull/3085)** | feat(cli): add startup optimization with API preconnect and early input capture | Warms TCP+TLS before first API call and captures user input during initialization to reduce perceived latency. | Open |
| **[#3303](https://github.com/QwenLM/qwen-code/pull/3303)** | fix(editor): detect Zed.app on macOS when CLI is not in PATH | Improves `/editor` integration by detecting Zed via `.app` bundle path, not just `zed` CLI. | Open |
| **[#3100](https://github.com/QwenLM/qwen-code/pull/3100)** | feat: optimize compact mode UX — shortcuts, settings sync, and safety | Adds `Ctrl+O` discoverability, live settings dialog sync, and safety guardrails for compact mode. | Open |
| **[#3297](https://github.com/QwenLM/qwen-code/pull/3297)** | fix(tool-registry): add lazy factory registration with inflight concurrency dedup | Fixes P0 race condition where concurrent `ensureTool()` calls could instantiate the same tool twice, leaking event listeners. | Open |
| **[#3299](https://github.com/QwenLM/qwen-code/pull/3299)** | fix(cli): block discontinued qwen-oauth model selection in ModelDialog | UI follow-up to #3291: marks `qwen-oauth` as "Discontinued" and prevents selection, replacing silent server rejection. | Closed |
| **[#3291](https://github.com/QwenLM/qwen-code/pull/3291)** | feat(auth): discontinue Qwen OAuth free tier (2026-04-15 cutoff) | The policy implementation PR: blocks new OAuth signups, updates all client messaging to past-tense "discontinued," and removes DashScope web search auto-top-up. | Closed |
| **[#3276](https://github.com/QwenLM/qwen-code/pull/3276)** | fix(skill/review): enforce parallel agent dispatch for weaker models | Strengthens `/review` prompts so `qwen3.6-plus` launches all review agents in parallel rather than serializing them. | Open |
| **[#3248](https://github.com/QwenLM/qwen-code/pull/3248)** | feat(acp): add complete hooks support for ACP integration | Brings ACP integration to parity with core hooks: lifecycle, prompt interception, tool execution, and stop hooks. | Open |
| **[#2886](https://github.com/QwenLM/qwen-code/pull/2886)** | feat: add Agent Team experimental feature for parallel sub-agent coordination | Introduces "Agent Team" — lead agent can spawn parallel sub-agents on sub-tasks, gated behind an experimental flag. | Open |

---

## 5. Feature Request Trends

1. **Transparent quota and fallback model management** — Users repeatedly ask for request-limit dashboards, consumption tracking, and automatic fallback models when quotas are exhausted (e.g., `OPENAI_FALLBACK_MODEL` env var).
2. **Enhanced hook and extensibility architecture** — Strong momentum across multiple PRs for HTTP hooks, function hooks, async hooks, prompt hooks, and ACP lifecycle hooks to enable custom integrations.
3. **Session and CLI ergonomics** — Requests for session rename/delete, auto-titling, resume-by-title, and compact-mode polish indicate investment in long-lived interactive workflows.
4. **Editor and terminal integration** — Ongoing fixes for Zed detection, Shift+Enter behavior, and terminal hyperlink support show focus on developer environment compatibility.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Abrupt free-tier discontinuation with no viable paid path** | Issues #3203, #3267, #3281, #3272, #3306 | **Critical** — dominant theme across all top issues; Pro plan is "sold out," leaving users stranded. |
| **Quota enforcement inconsistent with documentation** | Issues #1742, #2426, #3288 | High — users experience limits far below advertised numbers, sometimes before official policy dates. |
| **MCP scalability limits in production** | Issue #3277 | High — hard 2-connection cap breaks real multi-node deployments. |
| **System prompt adherence and model quality** | Issue #2973 | Moderate-High — power users report the agent ignoring explicit instructions, undermining trust. |
| **LSP and shell tool reliability** | Issues #3243, #3289, #3161 | Moderate — stale diagnostics, silent shell failures, and SSH confirmation-dialog crashes disrupt coding workflows. |
| **Buffer and rendering glitches** | Issues #3259, #3273 | Moderate — terminal freezing, wrong message ordering, and visual artifacts degrade CLI experience. |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*