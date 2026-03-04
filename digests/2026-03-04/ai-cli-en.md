# AI CLI Tools Community Digest 2026-03-04

> Generated: 2026-03-04 00:08 UTC | Tools covered: 7

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

# Cross-Tool AI CLI Ecosystem Report — 2026-03-04

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive six-player market with distinct architectural philosophies: Claude Code and OpenAI Codex lead on autonomous agent capabilities, Gemini CLI and Kimi Code CLI prioritize protocol standardization (A2A/ACP), while GitHub Copilot CLI and OpenCode focus on IDE ecosystem integration. All tools are converging on MCP (Model Context Protocol) as the extensibility standard, though implementation maturity varies significantly. The sector is experiencing intense pressure on pricing transparency, context management reliability, and enterprise deployment flexibility—pain points that now dominate community discourse across all platforms.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Activity |
|------|:-----------:|:---------:|----------------|----------------|
| **Claude Code** | 50 updated | 12 active | No release | Security plugin surge; India pricing pressure |
| **OpenAI Codex** | ~15 tracked | ~10 active | **4 alpha releases** (0.108.0-alpha.1–5) | Rapid Rust CLI iteration; metering crisis |
| **Gemini CLI** | ~12 tracked | ~10 active | **v0.32.0 + v0.33.0-preview.0** | A2A streaming fixes; Remote Agents sprints |
| **GitHub Copilot CLI** | ~10 tracked | 0 open | **v0.0.421 / v0.0.421-2** | MCP Elicitations; plugin directory loading |
| **Kimi Code CLI** | 9 tracked | 9 active | **v1.17.0** | ACP protocol; session export/import shipped |
| **OpenCode** | ~15 tracked | ~10 active | **v1.2.16** | Copilot billing crisis; workspace refactor |
| **Qwen Code** | ~10 tracked | ~10 active | **v0.11.1** | AGENTS.md support; parallel tool execution WIP |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|-------------|-------|-------------------------|
| **MCP Ecosystem Maturity** | All 7 tools | Timeout handling (Kimi #1316), dynamic tools (Copilot #132), hooks on resume (Copilot #1503), validation bypass (Claude #30257) |
| **Context/Session Management** | Claude, Codex, Kimi, OpenCode | Export/import (Kimi shipped), compaction control (Claude #30556), session resume (Kimi 1.17.0), undo functionality (Kimi #1311) |
| **Pricing & Quota Transparency** | Claude, Codex, OpenCode | India-localized pricing (Claude #17432), metering anomaly fixes (Codex #13186, OpenCode #8030), premium request visibility |
| **Plan/Approval Mode Hardening** | Claude, Gemini, Codex | Truncation fixes (Gemini #20716), raw tag leaks (Gemini #19514), CLI/SDK parity (Codex #13377) |
| **Terminal/IDE Integration** | Codex, Copilot, Gemini, Qwen | LSP support (Codex #8745, Copilot #491), VS Code parity (Copilot #618), Xcode fix (Qwen #643) |
| **Agent Identity & Control** | Kimi, OpenCode, Qwen | Subagent lifecycle (Kimi #1315), per-message identity (OpenCode #14930), agent switching clarity (OpenCode #7492) |
| **Hooks/Extensibility Systems** | Claude, Codex, Kimi, Qwen | PreToolUse security hooks (Claude), SessionStart/Stop (Codex #13276), lifecycle events (Qwen #1988), notifications (Kimi #1313) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Technical Approach | Target User |
|-----------|---------|-------------------|-------------|
| **Autonomous Agent Depth** | Claude Code, OpenAI Codex | Sandboxed execution with permission systems; Codex emphasizes subagents, Claude focuses on Cowork long-sessions | Power users, full-stack developers |
| **Protocol Standardization** | Gemini CLI, Kimi Code CLI | A2A streaming (Gemini), ACP negotiation + session resume (Kimi); both prioritize multi-agent orchestration | Enterprise platform builders |
| **IDE Ecosystem Lock-in** | GitHub Copilot CLI, OpenCode | Deep VS Code integration; Copilot leverages Microsoft ecosystem, OpenCode emphasizes provider flexibility | Existing IDE users, polyglot developers |
| **Open Source/Modularity** | Qwen Code, OpenCode | AGENTS.md standardization (Qwen), workspace adaptors (OpenCode), extensive provider support | Self-hosters, enterprise customization |
| **Security/Compliance** | Claude Code (community plugins) | Community-built guardrails (destructive-command-guardrails, vibeguard, gpg-pinentry-guard) | Security-conscious enterprises |

**Key Technical Divergence**: Claude and Codex compete on *agent autonomy sophistication* (permissions, sandboxing); Gemini and Kimi on *interoperability protocols*; Copilot and OpenCode on *developer workflow integration*.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Highest Activity** | Claude Code, OpenAI Codex | 50+ issues/24h (Claude), 4 rapid alpha releases (Codex); both have critical trust crises (pricing, metering) driving engagement |
| **Strong Iteration** | Kimi Code CLI, Gemini CLI, OpenCode | Shipped releases with protocol features (Kimi 1.17.0, Gemini v0.32.0); structured sprints (Gemini Remote Agents); billing crisis response (OpenCode) |
| **Steady Maintenance** | GitHub Copilot CLI, Qwen Code | Regular releases but lower community velocity; Copilot has Microsoft resource backing but slower open-source engagement; Qwen consolidating AGENTS.md standard |

**Maturity Signals**: 
- **Claude Code**: Most mature plugin ecosystem (security plugins proliferating organically)
- **Codex**: Fastest release cadence but pre-stable quality concerns
- **Gemini**: Most structured roadmap (tracked sprints for A2A)
- **Kimi**: Strongest session management feature set (export/import/resume)

---

## 6. Trend Signals

| Trend | Evidence | Developer Implications |
|-------|----------|------------------------|
| **Billing Trust Crisis** | Codex #13186 (5h quota on micro-tasks), OpenCode #8030 (Copilot miscounting), Claude #29579 (rate limits at 16% usage) | Demand granular usage dashboards, deterministic metering, and localized pricing; *cost unpredictability is now a primary churn driver* |
| **Context Management as Differentiator** | Compression bugs (Qwen #1924, OpenCode #14368), compaction control requests (Claude #30556), auto-compression PRs (Kimi #1329) | Long-session reliability becoming table stakes; *token efficiency engineering is core infrastructure* |
| **MCP as De Facto Standard** | Universal adoption, but pain points converge on timeouts, validation, and hook reliability | Ecosystem fragmentation risk if implementations diverge; *portability depends on strict protocol compliance* |
| **Agent-to-Agent Orchestration** | Gemini's three Remote Agents sprints, Kimi's subagent control issues, Codex's subagent cost explosion (#13179) | Multi-agent workflows moving from experimental to production; *orchestration complexity is the new scaling bottleneck* |
| **Enterprise Deployment Friction** | Air-gapped Web needs (OpenCode #8549), IAM auth (OpenCode #14969), Windows/WSL gaps (Copilot #475, #1775) | Self-hosted and hybrid cloud requirements accelerating; *vendor SaaS-only strategies face resistance* |
| **Permission Fatigue vs. Security** | Over-eager prompts (Claude #28240, Codex #13117), severity-tiered systems (Claude #30305) | UX tension between autonomous utility and safety; *configurable autonomy boundaries emerging as solution pattern* |

---

*Report compiled from 2026-03-04 community digests across 7 major AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-04 | github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description & Discussion |
|:---|:---|:---|:---|:---|
| 1 | **skill-quality-analyzer** + **skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Claude Skills across 5 quality dimensions (structure, documentation, safety, performance, maintainability). Includes automated security scanning. *High-value tooling for skill authors; under review since Nov 2025.* |
| 2 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and actionability—ensures every instruction is executable in a single conversation. *Addresses core usability feedback; active refinement through Feb 2026.* |
| 3 | **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Persistent memory system for AI agents maintaining context across conversations. Teaches proactive context surfacing and rich memory structuring. *Recently updated Mar 3, 2026—indicates ongoing development.* |
| 4 | **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step systematic audit for orphaned code, unused files, documentation gaps, and infrastructure bloat. Generates CODEBASE-STATUS.md as single source of truth. |
| 5 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Enterprise analytics skill leveraging SAP's open-source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data. *Targets enterprise ERP workflows.* |
| 6 | **Buildr** (Telegram bridge) | [#419](https://github.com/anthropics/skills/pull/419) | 🟡 Open | One-command Telegram bot bridge for Claude Code—mirror messages, forward permissions, stop tasks, control sessions from mobile. *Recently submitted Feb 19, 2026.* |
| 7 | **AURELION suite** (4 skills) | [#444](https://github.com/anthropics/skills/pull/444) | 🟡 Open | Cognitive framework for professional knowledge management: structured thinking templates (kernel), decision protocols (advisor), autonomous execution (agent), and persistent memory (memory). *Comprehensive ecosystem play.* |
| 8 | **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | 🟡 Open | AI-powered media generation via Masonry CLI—Imagen 3.0 images, Veo 3.1 videos, job management, and cost tracking. |

---

## 2. Community Demand Trends

Derived from top Issues by engagement:

| Trend | Evidence | Community Need |
|:---|:---|:---|
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (3 comments) — *agent-governance* proposal | Policy enforcement, threat detection, trust scoring, audit trails for multi-agent systems |
| **MCP Integration & Standardization** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#369](https://github.com/anthropics/skills/issues/369) (2 comments), [#185](https://github.com/anthropics/skills/issues/185) (2 comments) | Expose Skills as MCPs; package manager for AI agents; MCP Apps support |
| **Skill Authoring Tooling** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments) | Rewrite `skill-creator` to operational best practices (less documentation, more execution) |
| **Multi-Platform Deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — AWS Bedrock compatibility | Run Claude Skills on non-Anthropic infrastructure |
| **Reliability & Debugging** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments), [#61](https://github.com/anthropics/skills/issues/61) (3 comments), [#406](https://github.com/anthropics/skills/issues/406) (2 comments) | Skill persistence, 404/500 error resolution, version management |

---

## 3. High-Potential Pending Skills

Active PRs with sustained engagement likely to merge:

| Skill | PR | Last Activity | Why It Lands Soon |
|:---|:---|:---|:---|
| **skill-quality-analyzer** + **skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Jan 7, 2026 | Addresses critical gap in skill validation; meta-tooling benefits entire ecosystem |
| **frontend-design** (revision) | [#210](https://github.com/anthropics/skills/pull/210) | Feb 27, 2026 | Direct response to usability feedback; tight iteration loop |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | Mar 3, 2026 | Very recent update indicates active maintainer engagement |
| **AURELION suite** | [#444](https://github.com/anthropics/skills/pull/444) | Feb 21, 2026 | Comprehensive 4-skill framework; professional knowledge management is underserved |
| **Buildr** | [#419](https://github.com/anthropics/skills/pull/419) | Feb 19, 2026 | Mobile control surface for Claude Code fills clear UX gap |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *meta-cognitive infrastructure*—tools that govern, validate, and persist skill behavior across sessions, with strong secondary demand for enterprise integration (SAP, MCP, Bedrock) and mobile accessibility.**

---

*Report generated from 50 PRs and 50 Issues in anthropics/skills repository.*

---

# Claude Code Community Digest — 2026-03-04

---

## 1. Today's Highlights

No new releases dropped in the last 24 hours, but community activity surged with **50 updated issues** and **12 active PRs**. The dominant themes are **pricing accessibility for emerging markets** (India-specific plans gaining massive traction), **context/memory management reliability**, and a **flurry of community-built security plugins** addressing gaps in autonomous agent safety.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#17432](https://github.com/anthropics/claude-code/issues/17432) | **India-Specific Pricing Plans (INR)** | Largest emerging market request; competitors (OpenAI, Google) already offer localized pricing. 121 upvotes, 49 comments show this is a market-accessibility blocker, not a nice-to-have. | Strong consensus; users sharing competitor pricing comparisons and regional purchasing power arguments. |
| [#15942](https://github.com/anthropics/claude-code/issues/15942) | **Visual Studio 2026 Integration** | Windows enterprise developers remain underserved; VS is the dominant IDE in corporate environments. 93 upvotes indicates pent-up demand. | Active discussion on extension architecture; users noting VS Code integration exists but VS proper is gap. |
| [#19018](https://github.com/anthropics/claude-code/issues/19018) | **Context limit reached — /compact or /clear to continue** | Core reliability issue: users hitting context walls mid-workflow with disruptive recovery experience. "Has repro" label confirms reproducibility. | Frustration with mid-session interruptions; requests for proactive warnings and smarter auto-compaction. |
| [#29579](https://github.com/anthropics/claude-code/issues/29579) | **Rate limit reached despite Claude Max subscription, 16% usage** | Billing/trust issue: paying users hitting limits far below advertised caps. Affects Claude Max specifically (highest tier). | Confusion and concern about metering accuracy; requests for transparent quota dashboards. |
| [#22931](https://github.com/anthropics/claude-code/issues/22931) | **Archived Claude Cowork chats disappeared** | Data loss perception: user archives vanishing breaks trust in conversation persistence. | Anxiety about data retention policies; requests for export/backup functionality. |
| [#19047](https://github.com/anthropics/claude-code/issues/19047) | **Cowork crashes on M4 Mac — seccomp killed error** | Hardware-specific crash on Apple's newest silicon; "seccomp" suggests sandboxing/permissions conflict. | M4 users blocked from core feature; debugging ongoing with system logs. |
| [#28240](https://github.com/anthropics/claude-code/issues/28240) | **Permission prompt incorrectly triggers on `cd` in compound bash statements** | UX regression: over-eager permission system breaks common shell patterns. "Regression" label indicates recent degradation. | Workarounds shared; frustration with permission noise vs. actual security value. |
| [#30021](https://github.com/anthropics/claude-code/issues/30021) | **"Create PR" button missing in Claude Code web UI after push** | iOS/web workflow breakage: critical GitHub integration step fails silently. | 12 upvotes; users confirming iOS-specific, desktop works. |
| [#29175](https://github.com/anthropics/claude-code/issues/29175) | **Context corruption: auto-memory/compaction mixes/truncates previous conversation** | Data integrity bug: compaction corrupting context rather than preserving it. Undermines trust in long sessions. | Detailed reproductions; concern about silent information loss. |
| [#30523](https://github.com/anthropics/claude-code/issues/30523) | **AskUserQuestion returns empty inside Skill tool (GSD plugin context)** | Plugin ecosystem breakage: interactive prompts fail in skill context, breaking GSD workflows. | Duplicate filed (#30544, since closed); plugin developers seeking stable interactivity APIs. |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#30521](https://github.com/anthropics/claude-code/pull/30521) | **Add gpg-pinentry-guard plugin** | PreToolUse hook preventing broken GPG signing prompts during git commits. Fixes [#30539](https://github.com/anthropics/claude-code/issues/30539). | Solves real workflow blocker for signed-commit users; terminal TTY conflict resolution. |
| [#30537](https://github.com/anthropics/claude-code/pull/30537) | **Fix ralph-loop crash when invoked without arguments** | Null-safe bash parameter expansion (`${PROMPT_PARTS[*]:-}`). Closes [#18496](https://github.com/anthropics/claude-code/issues/18496). | Stability fix for community plugin; defensive programming pattern. |
| [#30305](https://github.com/anthropics/claude-code/pull/30305) | **feat(plugins): Implement severity system and add new security patterns** | Transitions security tools from binary "block-all" to 2-tier "Block/Warn" severity system. | Critical UX improvement for security plugins; reduces friction for low-risk operations. |
| [#30299](https://github.com/anthropics/claude-code/pull/30299) | **feat(plugins): add vibeguard prompt guard plugin** | Secrets/PII blocker with placeholder-redacted prompt output for safe copy/re-send. | Privacy-focused community innovation; addresses enterprise compliance needs. |
| [#29461](https://github.com/anthropics/claude-code/pull/29461) | **Constrain dedupe candidates to canonical open issues** | Improves duplicate-bot by requiring valid open-issue targets before suggestions. | Reduces maintainer noise; addresses [#19267](https://github.com/anthropics/claude-code/issues/19267), [#20282](https://github.com/anthropics/claude-code/issues/20282). |
| [#30261](https://github.com/anthropics/claude-code/pull/30261) | **feat(plugins): Add destructive-command-guardrails plugin** | PreToolUse hook intercepting 23+ destructive patterns (rm -rf, git reset --hard, DROP TABLE, etc.). | Essential safety net for autonomous agent sessions; community filling platform gap. |
| [#30257](https://github.com/anthropics/claude-code/pull/30257) | **feat(plugins): Add mcp-doctor plugin** | Robust `.mcp.json` validation bypassing built-in `/doctor` false positives (no LRU cache). | Fixes [#30172](https://github.com/anthropics/claude-code/issues/30172); community solving tooling reliability. |
| [#30245](https://github.com/anthropics/claude-code/pull/30245) | **docs: add bash security hook example** | Comprehensive PreToolUse hook template + README for `examples/hooks/`. | Developer onboarding improvement; security pattern documentation. |
| [#29522](https://github.com/anthropics/claude-code/pull/29522) | **fix: Fix three bugs making hookify plugin non-functional** | Python import fixes, relative path correction, rule discovery repair. | Closed; demonstrates plugin ecosystem fragility around Python path handling. |
| [#30273](https://github.com/anthropics/claude-code/pull/30273) | **Add tree inventory management web app with Flask backend** | Complete mobile-first tree registry app (樹木台帳) — appears off-topic/spam. | Closed; likely test/accidental submission; indicates need for contribution guidelines enforcement. |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Cross-platform sync parity** | [#20697](https://github.com/anthropics/claude-code/issues/20697) (Skills sync), [#28791](https://github.com/anthropics/claude-code/issues/28791) (conversation history sync) | Users expect seamless CLI ↔ Desktop ↔ Web experience; fragmentation is friction. |
| **Emerging market pricing** | [#17432](https://github.com/anthropics/claude-code/issues/17432) (India), similar patterns in comments | Global expansion requires localized pricing; competitors are ahead. |
| **Configurable autonomy boundaries** | [#30556](https://github.com/anthropics/claude-code/issues/30556) (compaction threshold), [#30555](https://github.com/anthropics/claude-code/issues/30555) (stdin passthrough), [#30550](https://github.com/anthropics/claude-code/issues/30550) (token credits for bug reports) | Power users want fine-grained control over when/how Claude interrupts or escalates. |
| **MCP/tooling transparency** | [#30525](https://github.com/anthropics/claude-code/issues/30525) (diffs for MCP tool calls), [#30545](https://github.com/anthropics/claude-code/issues/30545) (CLAUDE.md vs MCP priority) | As MCP adoption grows, users need visibility into tool behavior and prompt hierarchy. |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Context management brittleness** | [#19018](https://github.com/anthropics/claude-code/issues/19018) (hard limits), [#29175](https://github.com/anthropics/claude-code/issues/29175) (corruption), [#30556](https://github.com/anthropics/claude-code/issues/30556) (no threshold control) | **High** — disrupts long sessions, causes data loss perception |
| **Permission system noise** | [#28240](https://github.com/anthropics/claude-code/issues/28240) (false positives), [#30463](https://github.com/anthropics/claude-code/issues/30463) (plan mode blocks in don't-ask mode), [#30527](https://github.com/anthropics/claude-code/issues/30527) (over-eager parent directory access) | **High** — breaks flow, trains users to ignore real security prompts |
| **Plugin/skill interactivity gaps** | [#30523](https://github.com/anthropics/claude-code/issues/30523) (AskUserQuestion fails in skills), [#28554](https://github.com/anthropics/claude-code/issues/28554) (plugin uninstall ignored), [#30143](https://github.com/anthropics/claude-code/issues/30143) (hooks don't fire in `-p` mode) | **Medium-High** — limits ecosystem extensibility |
| **Platform-specific instability** | [#19047](https://github.com/anthropics/claude-code/issues/19047) (M4 Mac), [#30541](https://github.com/anthropics/claude-code/issues/30541) (Linux TTY freeze), [#30539](https://github.com/anthropics/claude-code/issues/30539) (GPG pinentry conflict) | **Medium** — fragmentation in core experience |
| **Billing/trust transparency** | [#29579](https://github.com/anthropics/claude-code/issues/29579) (rate limits vs. advertised), [#17432](https://github.com/anthropics/claude-code/issues/17432) (pricing accessibility) | **Medium** — affects conversion and retention |

---

*Digest compiled from 50 issues and 12 PRs updated 2026-03-03 to 2026-03-04.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-04

## 1. Today's Highlights

The team shipped four rapid-fire Rust alpha releases (0.108.0-alpha.1–5) as they iterate toward stable. Community attention is sharply focused on two emerging concerns: **rate-limit metering anomalies** where small tasks allegedly consume disproportionate quota, and **WebSocket transport reliability** with servers closing connections immediately after upgrade. Meanwhile, enterprise and platform-extensibility features dominate active development.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.108.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.108.0-alpha.5) through [alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.108.0-alpha.1) | Rapid iteration cycle on the Rust CLI core; no detailed changelogs provided—typical for pre-release channels. Users on the alpha track should expect breaking changes. |

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Pulse |
|---|-------|--------------|-----------------|
| [#13186](https://github.com/openai/codex/issues/13186) | Possible Codex usage metering anomaly on Plus (very small tasks consuming large 5h + weekly quota) | **Critical trust issue**: Plus users report micro-tasks burning massive quota. If confirmed, this undermines the subscription value proposition. | 53 comments, 6 👍; active investigation demanded |
| [#11561](https://github.com/openai/codex/issues/11561) | GPT-5.3-Codex being routed to GPT-5.2 | **Model routing transparency**: Users paying for top-tier models expect deterministic routing. Closed but resurfacing in related issues. | 47 comments, 44 👍; high engagement, resolution requested |
| [#13041](https://github.com/openai/codex/issues/13041) | WebSocket upgrade succeeds then server closes with 1008 Policy | **Connectivity reliability**: Affects real-time collaboration features; forced HTTPS fallback degrades latency. | 43 comments, 81 👍; top-voted open issue |
| [#2137](https://github.com/openai/codex/issues/2137) | Pasting multi-line text in Codex CLI only keeps first line and auto-submits on Windows | **Windows UX parity**: Long-standing input handling bug finally closed. | 29 comments, 40 👍; closure celebrated |
| [#8745](https://github.com/openai/codex/issues/8745) | LSP integration (auto-detect + auto-install) for Codex CLI | **Developer experience**: Would elevate Codex from code generator to intelligent IDE companion. | 23 comments, 132 👍; highest-voted enhancement |
| [#7138](https://github.com/openai/codex/issues/7138) | `AGENTS.md` is silently truncated without any warning within the TUI | **Silent data loss**: Users unaware their instructions are being ignored. | 18 comments, 4 👍; frustration over lack of visibility |
| [#10571](https://github.com/openai/codex/issues/10571) | "Bad request" error | **Opaque error handling**: Blocking production use without actionable diagnostics. | 17 comments, 3 👍; needs better error surfacing |
| [#13179](https://github.com/openai/codex/issues/13179) | Using subagents exponentially explodes "messages" usage | **Cost control**: Architectural pattern (subagents) has unintended billing consequences. | 12 comments; emerging pattern to watch |
| [#12661](https://github.com/openai/codex/issues/12661) | Markdown file:// links open in default browser (Edge) instead of VS Code editor | **IDE integration friction**: Breaks VS Code extension workflow expectations. | 7 comments, 10 👍 |
| [#13117](https://github.com/openai/codex/issues/13117) | Codex is again asking for permission for every single file read command | **Regression in trust model**: Sandbox fatigue undermines autonomous agent utility. | 4 comments, 1 👍; reported as regression |

---

## 4. Key PR Progress

| # | Title | Technical Significance |
|---|-------|------------------------|
| [#13329](https://github.com/openai/codex/pull/13329) | Hard-stop active js_repl execs on explicit user interrupts | **Reliability**: Proper cleanup of JavaScript REPL state prevents zombie processes and resource leaks on Ctrl+C. |
| [#13401](https://github.com/openai/codex/pull/13401) | feat: load plugin apps | **Extensibility foundation**: Runtime-mentionable apps via `.app.json` configuration; enables third-party ecosystem without hardcoding. |
| [#13177](https://github.com/openai/codex/pull/13177) | Allow turn context refreshes between sampling requests | **Dynamic configuration**: Mid-turn settings changes (nudges, model params) apply without turn restart—improves iterative refinement. |
| [#13290](https://github.com/openai/codex/pull/13290) | image-gen-core | **Multimodal expansion**: Core tool-calling infrastructure for image generation via Responses API. |
| [#13292](https://github.com/openai/codex/pull/13292) | [feedback] diagnostics | **Observability**: Header-based diagnostic display and environment variable collection for faster incident response. |
| [#13331](https://github.com/openai/codex/pull/13331) | Make js_repl image output controllable | **Context efficiency**: Prevents automatic hoisting of nested tool outputs; lets JS code curate what reaches the model context. |
| [#13388](https://github.com/openai/codex/pull/13388) | config: enforce enterprise feature requirements | **Enterprise governance**: Closes gap where feature flags were "managed defaults" rather than enforced policy; critical for compliance deployments. |
| [#13276](https://github.com/openai/codex/pull/13276) | start of hooks engine | **Automation infrastructure**: MVP for SessionStart/Stop hooks with synchronous execution; foundation for CI/CD integration and custom workflows. |
| [#13409](https://github.com/openai/codex/pull/13409) | Feat: Preserve network access on read-only sandbox policies | **Security flexibility**: Enables read-only filesystem with network access—a common enterprise requirement previously unrepresentable. |
| [#13096](https://github.com/openai/codex/pull/13096) | Introduce rollout store and in-memory source | **System architecture**: Abstraction layer for rollout reconstruction; enables better testing and eventually distributed rollout coordination. |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **LSP/IDE integration** | [#8745](https://github.com/openai/codex/issues/8745) (132 👍), [#3405](https://github.com/openai/codex/issues/3405) | Highest-voted enhancement; developers want Codex to leverage project-wide semantic understanding |
| **Plan mode in CLI/SDK** | [#13377](https://github.com/openai/codex/issues/13377), [#11988](https://github.com/openai/codex/issues/11988) | Collaboration-mode parity across interfaces |
| **Azure enterprise auth** | [#8732](https://github.com/openai/codex/issues/8732) | `DefaultAzureCredential` support for keyless environments |
| **Sandbox policy granularity** | [#13409](https://github.com/openai/codex/pull/13409), [#13403](https://github.com/openai/codex/issues/13403) | Finer control over what Codex can access without all-or-nothing tradeoffs |

---

## 6. Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Rate-limit transparency & fairness** | [#13186](https://github.com/openai/codex/issues/13186), [#13167](https://github.com/openai/codex/issues/13167), [#13179](https://github.com/openai/codex/issues/13179) | 🔥 Critical cluster—users tracking usage report 2-4x consumption increases without notice |
| **WebSocket/connection stability** | [#13041](https://github.com/openai/codex/issues/13041), [#13406](https://github.com/openai/codex/issues/13406) | High—IPv6-first hangs and 1008 policy closes block real-time features |
| **Windows second-class citizenship** | [#2137](https://github.com/openai/codex/issues/2137), [#12661](https://github.com/openai/codex/issues/12661), [#9661](https://github.com/openai/codex/issues/9661), [#13380](https://github.com/openai/codex/issues/13380) | Persistent—input handling, sandboxing, and even bug-report links remain broken |
| **Silent failures & opacity** | [#7138](https://github.com/openai/codex/issues/7138), [#10571](https://github.com/openai/codex/issues/10571), [#13384](https://github.com/openai/codex/issues/13384) | UX debt—users cannot distinguish "working" from "hung" without external tooling |
| **Over-permissioning fatigue** | [#13117](https://github.com/openai/codex/issues/13117), [#13403](https://github.com/openai/codex/issues/13403) | Trust erosion—either too many prompts or security concerns about env var exposure |

---

*Digest compiled from github.com/openai/codex activity 2026-03-03 to 2026-03-04.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-04

## Today's Highlights

The team shipped **v0.32.0** with A2A streaming reliability fixes and plan mode integration tests, while **v0.33.0-preview.0** begins stabilizing documentation ahead of broader feature releases. Remote Agents infrastructure is accelerating with three structured sprints now tracked, and significant UX polish is landing across terminal rendering, focus colors, and shell autocomplete. The community is actively pushing for better history search, external editor support, and Windows Terminal compatibility.

---

## Releases

### [v0.32.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.32.0)
- **Plan mode integration tests** added for reliability ([#20214](https://github.com/google-gemini/gemini-cli/pull/20214))
- **A2A auth handshake** updated to latest spec ([#19725](https://github.com/google-gemini/gemini-cli/pull/19725))
- **Robust A2A streaming** implementation (details truncated in release notes)

### [v0.33.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0-preview.0)
- Documentation cleanup: removed Preview Features markers, fixed installation typos, added Windows PowerShell guidance ([#20084](https://github.com/google-gemini/gemini-cli/pull/20084), [#20153](https://github.com/google-gemini/gemini-cli/pull/20153))

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#20716](https://github.com/google-gemini/gemini-cli/issues/20716) **Plan truncation in approval dialog** | 15-line limit hides critical plan details, breaking trust in plan mode | 8 comments, maintainer-triaged |
| [#20142](https://github.com/google-gemini/gemini-cli/issues/20142) **Ctrl+R history search for AskUser** | Power users repeatedly type similar queries; muscle memory from shells | 8 comments, "help wanted" |
| [#20882](https://github.com/google-gemini/gemini-cli/issues/20882) **Kitty support for Windows Terminal** | Windows Terminal canary added Kitty sequences, but `shift+enter` still broken | 5 comments, Windows-specific |
| [#7231](https://github.com/google-gemini/gemini-cli/issues/7231) **Tool Confirmation Message Bus** | Core architecture refactor for decoupling; enables safer extensibility | 5 comments, long-running epic |
| [#10673](https://github.com/google-gemini/gemini-cli/issues/10673) **Flicker-free terminal rendering** | Persistent UX pain point; affects perceived performance | 3 comments, foundational |
| [#20302](https://github.com/google-gemini/gemini-cli/issues/20302) **Remote Agents Sprint 1 (P0)** | Foundation for multi-agent workflows; blocking downstream features | 3 comments, epic tracker |
| [#20181](https://github.com/google-gemini/gemini-cli/issues/20181) **External editor for AskUser** | Long-form answers (e.g., Conductor tracks) need vim/emacs workflow | 3 comments, power-user feature |
| [#19514](https://github.com/google-gemini/gemini-cli/issues/19514) **Raw tags in plan mode AskUser** | Leaking `<question>` tags breaks immersion and reliability | 3 comments, polish gap |
| [#20886](https://github.com/google-gemini/gemini-cli/issues/20886) **Subagent UX refinement** | Expander for tool history, updated mocks—critical for agent adoption | 2 comments, design sync |
| [#20550](https://github.com/google-gemini/gemini-cli/issues/20550) **JS heap exhaustion** | Production stability issue; GC logs show 4GB+ scavenge cycles | 2 comments, needs repro |

---

## Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| [#21032](https://github.com/google-gemini/gemini-cli/pull/21032) **Vendor-neutral `AGENT=gemini` env var** | Standardized agent detection for downstream tools; complements `GEMINI_CLI=1` | Open |
| [#20895](https://github.com/google-gemini/gemini-cli/pull/20895) **Extract shared OAuth primitives** | Refactors MCP OAuth for reuse by A2A; unifies auth architecture | Open |
| [#20745](https://github.com/google-gemini/gemini-cli/pull/20745) **Semantic focus colors + history visibility** | Comprehensive color system overhaul; dev tools for theme validation | Open |
| [#18725](https://github.com/google-gemini/gemini-cli/pull/18725) **Thinking UI overhaul** | Replaces emoji with text indicator; modernizes inline status | Open |
| [#21028](https://github.com/google-gemini/gemini-cli/pull/21028) **A2A timeout 30min → closed** | Deep Research agents need long-running sessions; reverted or superseded | Closed |
| [#20931](https://github.com/google-gemini/gemini-cli/pull/20931) **Shell autocomplete as ghost text** | More native-feeling completions; fixes [#20930](https://github.com/google-gemini/gemini-cli/issues/20930) | Open |
| [#20922](https://github.com/google-gemini/gemini-cli/pull/20922) **Compact header redesign** | Mac Terminal logo fix; terminal-specific rendering | Open |
| [#20940](https://github.com/google-gemini/gemini-cli/pull/20940) **Defensive coding for max update depth** | Prevents React-style loop crashes; no external repro yet | Open |
| [#20928](https://github.com/google-gemini/gemini-cli/pull/20928) **Merge duplicate imports (141 files)** | ESLint compliance; massive codebase hygiene | Open |
| [#18709](https://github.com/google-gemini/gemini-cli/pull/18709) **Remove tool frames in copy mode** | Cleaner copy/paste from alternate buffer | Open |

---

## Feature Request Trends

1. **Agent-to-Agent (A2A) & Remote Agents** — Three structured sprints ([#20302](https://github.com/google-gemini/gemini-cli/issues/20302), [#20303](https://github.com/google-gemini/gemini-cli/issues/20303), [#20304](https://github.com/google-gemini/gemini-cli/issues/20304)) indicate this is the dominant roadmap theme, covering streaming, auth, and background operations.

2. **Terminal UX Polish** — Ghost text autocomplete, flicker-free rendering, focus colors, and Kitty/Windows Terminal support show sustained investment in "feeling native."

3. **Plan Mode Hardening** — Integration tests shipped, but truncation ([#20716](https://github.com/google-gemini/gemini-cli/issues/20716)) and raw tag leaks ([#19514](https://github.com/google-gemini/gemini-cli/issues/19514)) reveal gaps in production readiness.

4. **AskUser Power Features** — History search (ctrl+R), external editor support, and long-form input handling are recurring asks from intensive users.

5. **Enterprise Policy Management** — Policy import from external directories ([#21031](https://github.com/google-gemini/gemini-cli/issues/21031)) signals organizational adoption needs.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Memory/Performance** | JS heap exhaustion ([#20550](https://github.com/google-gemini/gemini-cli/issues/20550)), 36.6k token baselines, "tactful extraction" needed ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)) | High — production crashes |
| **Input/Interaction Friction** | No ctrl+R history ([#20142](https://github.com/google-gemini/gemini-cli/issues/20142)), no external editor ([#20181](https://github.com/google-gemini/gemini-cli/issues/20181)), `shift+enter` broken on Windows ([#20882](https://github.com/google-gemini/gemini-cli/issues/20882)) | Medium — daily workflow |
| **Visual Instability** | Flickering on file path input ([#20217](https://github.com/google-gemini/gemini-cli/issues/20217)), rendering outside windows ([#10673](https://github.com/google-gemini/gemini-cli/issues/10673)) | Medium — perceived quality |
| **API Resilience** | Parsing crashes on proto changes ([#20193](https://github.com/google-gemini/gemini-cli/issues/20193)), no retry on API errors ([#20144](https://github.com/google-gemini/gemini-cli/issues/20144)) | High — reliability at scale |
| **Loop Detection False Positives** | Long shell commands trigger warnings ([#19519](https://github.com/google-gemini/gemini-cli/issues/19519)) | Low-Medium — annoyance |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity through 2026-03-04.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-04

---

## 1. Today's Highlights

Two fresh releases (v0.0.421 and v0.0.421-2) landed with experimental MCP Elicitations for structured form inputs, local plugin loading via `--plugin-dir`, and improved Linux clipboard integration. Meanwhile, the community is actively debating custom slash commands parity with VS Code, WSL support gaps, and terminal rendering issues across multiple emulators.

---

## 2. Releases

### [v0.0.421](https://github.com/github/copilot-cli/releases/tag/v0.0.421) & [v0.0.421-2](https://github.com/github/copilot-cli/releases/tag/v0.0.421-2) — 2026-03-03

| Category | Change |
|----------|--------|
| **UX** | Autopilot permission dialog now appears on first prompt submission, not mode switch |
| **Theming** | `AUTO` theme reads terminal ANSI palette directly for native color matching |
| **MCP (Experimental)** | Structured form input for `ask_user` tool via MCP Elicitations |
| **Plugins** | New `--plugin-dir` flag for loading plugins from local directories |
| **Linux** | Mouse selection auto-copies to primary selection buffer (middle-click paste) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#618](https://github.com/github/copilot-cli/issues/618) | Custom slash commands from `.github/prompts` | Top-requested parity feature with VS Code extension; enables reusable prompt workflows | 86 👍, 19 comments; active triage |
| [#1161](https://github.com/github/copilot-cli/issues/1161) | Invalid session ID with Opus 4.5 | Breaks bash task execution on macOS/Fish; user already churned to competitor | 12 👍, 18 comments; severity acknowledged |
| [#1348](https://github.com/github/copilot-cli/issues/1348) | Screen flickering in iTerm2 | Accessibility and usability blocker; root cause identified (`clearScreenDown`) | 7 👍, 10 comments; **closed** with fix |
| [#475](https://github.com/github/copilot-cli/issues/475) | WSL terminal setup support | Surprising gap for Microsoft product; blocks Windows/Linux hybrid workflows | 3 👍, 7 comments; long-standing request |
| [#491](https://github.com/github/copilot-cli/issues/491) | LSP integration | Would enable static analysis without build execution; matches IDE Copilot behavior | 21 👍, 7 comments; high-value enhancement |
| [#1048](https://github.com/github/copilot-cli/issues/1048) | CLI flag for reasoning effort | Power users need programmatic control over model reasoning depth | 21 👍, 6 comments; API design pending |
| [#1739](https://github.com/github/copilot-cli/issues/1739) | Codex 5.3 server errors | Model-specific regression affecting latest release | 4 👍, 5 comments; needs repro |
| [#978](https://github.com/github/copilot-cli/issues/978) | Skills not used unless explicitly stated | Undermines agent modularity; forces bloated `AGENTS.md` files | 4 👍, 8 comments; **closed** |
| [#1775](https://github.com/github/copilot-cli/issues/1775) | Windows Terminal scroll position chaos | Rendering regression breaking long sessions | 4 👍, 3 comments; repro elusive |
| [#1805](https://github.com/github/copilot-cli/issues/1805) | "Rocket scroll" in xterm.js web terminals | Detailed 4-layer solution proposed with reference implementation for browser-based terminals | Fresh report, 1 comment |

---

## 4. Key PR Progress

*No open PRs updated in the last 24 hours. Recent issue closures suggest maintainer activity is focused on bug fixes rather than new feature merges.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **VS Code parity** | #618 (slash commands), #491 (LSP), #1009 (built-in editor) | Users expect seamless extension of IDE workflows to CLI |
| **Agent/skill modularity** | #978, #1374 (nested subagents), #1632 (skill subfolders), #903 (env var injection) | Growing complexity demands better organization primitives |
| **Terminal compatibility** | #475 (WSL), #1348/#1775/#1805 (rendering), #1799 (alt-screen toggle) | Cross-platform terminal support is strained |
| **Power user control** | #1048 (reasoning effort), #1729 (configurable keybinds), #1541 (list-tools) | Need for transparency and customization beyond defaults |
| **MCP ecosystem maturity** | #132 (dynamic tools), #1759 (timeouts), #1503 (hooks on resume), #1805 (Elicitations) | MCP integration is active but rough-edged |

---

## 6. Developer Pain Points

1. **Terminal rendering instability** — Flickering, "rocket scroll," and resize-induced duplication (#1348, #1775, #1804, #1805) suggest the new alt-screen implementation needs hardening. Users want escape hatches (#1799).

2. **Session reliability** — Resume functionality has multiple failure modes: invalid session IDs (#1161), hooks not loading (#1503), EIO errors (#1772). Long-running workflows feel fragile.

3. **Microsoft ecosystem gaps** — Ironically, WSL (#475) and Windows Terminal (#1775) have worse experiences than macOS/Linux native, frustrating the core audience.

4. **Skill/agent discoverability** — Without `/list-tools` (#1541) or automatic skill invocation (#978), users can't trust the system to use configured capabilities.

5. **Premium request opacity** — The "Continuing autonomously (3 premium requests)" flow confuses users about when and why credits are consumed (#1477).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-04

---

## 1. Today's Highlights

Version 1.17.0 shipped with ACP protocol negotiation, session resume capabilities, and new `/export`/`/import` commands for context portability. The release coincides with active community work on terminal UI stability, video clipboard support, and auto context compression—though early adopters on Ubuntu 22.04 are reporting post-upgrade launch failures that the team is investigating.

---

## 2. Releases

**v1.17.0** (2026-03-03) — [Release Notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.17.0)

| Change | Impact |
|--------|--------|
| ACP protocol version negotiation + session resume | Enables robust long-running agent sessions with recovery |
| MCP loading status indicators | Visual feedback during tool initialization (shell + web UI) |
| `/export` & `/import` slash commands | Session context portability for debugging and continuity |
| Context token visibility in status bar | Real-time `42.0% (4.2k/10.0k)` format display |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1332](https://github.com/MoonshotAI/kimi-cli/issues/1332) | **Ubuntu 22.04 launch failure after 1.17.0 upgrade** | Blocking regression for Linux users; immediate attention needed | 🔴 Critical — 1 comment, fresh report |
| [#1316](https://github.com/MoonshotAI/kimi-cli/issues/1316) | **MCP timeout crashes entire CLI** | Single MCP failure shouldn't brick the whole session; resilience gap | 🔴 High — affects 1.16.0, duplicate of #1314 |
| [#1314](https://github.com/MoonshotAI/kimi-cli/issues/1314) | MCP server failure → `MCPRuntimeError` crash | **Closed** as duplicate; root cause being tracked in #1316 | ✅ Closed — 1 👍 |
| [#1321](https://github.com/MoonshotAI/kimi-cli/issues/1321) | System kernel variables break CLI (no defensive sanitization) | Environment pollution causing total failure; security/reliability concern | 🟡 Medium — 1 👍 |
| [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315) | Subagents continue after ESC press | User control issue — cancellation not propagating to child agents | 🟡 Medium — UX friction |
| [#1266](https://github.com/MoonshotAI/kimi-cli/issues/1266) | HTTP header validation fails on `platform.version()` trailing whitespace | Edge case breaking connections on specific Ubuntu kernels | 🟡 Medium — 1 👍, diagnostic needed |
| [#1301](https://github.com/MoonshotAI/kimi-cli/issues/1301) | Ghostty light theme: 'yolo' identifier unreadable | Accessibility/theming polish for terminal users | 🟢 Low — 1 👍 |
| [#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327) | Default 100-step limit too low for real workflows | User hits ceiling at 34.5% context usage; config workaround exists but defaults matter | 🟡 Medium — efficiency complaint |
| [#1320](https://github.com/MoonshotAI/kimi-cli/issues/1320) | Arrow keys navigate history instead of multiline cursor | Core editing UX pain point; conflicts with muscle memory from other tools | 🟡 Medium — daily friction |
| [#1319](https://github.com/MoonshotAI/kimi-cli/issues/1319) | No unified local skills management (no `skills list`, `skills rm`) | Feature gap vs. `/mcp` experience; fragmented storage locations | 🟡 Medium — workflow organization |

---

## 4. Key PR Progress

| # | PR | Status | What It Delivers |
|---|-----|--------|------------------|
| [#1331](https://github.com/MoonshotAI/kimi-cli/pull/1331) | Version bump to 1.17.0 | ✅ **Merged** | Release coordination, changelog sync, docs for MCP status + ACP auth |
| [#1330](https://github.com/MoonshotAI/kimi-cli/pull/1330) | `/export` & `/import` in shell mode | ✅ **Merged** | Session portability with context preservation |
| [#1317](https://github.com/MoonshotAI/kimi-cli/pull/1317) | Session export/import with shell utilities | ✅ **Merged** | Foundation for #1330; path helpers and test coverage |
| [#1329](https://github.com/MoonshotAI/kimi-cli/pull/1329) | **Auto Context Compress (ACC) for agents** | 🔄 **Open** | Agent-autonomous context compaction for long tasks; major scalability play |
| [#1328](https://github.com/MoonshotAI/kimi-cli/pull/1328) | File tools bug fixes | 🔄 **Open** | Correct replacement counting, cumulative edit handling |
| [#1326](https://github.com/MoonshotAI/kimi-cli/pull/1326) | Terminal resize handling bundle | 🔄 **Open** | SIGWINCH handler, Rich cache clearing, proper redraw — fixes Hyprland/fullscreen artifacts |
| [#1325](https://github.com/MoonshotAI/kimi-cli/pull/1325) | Video clipboard paste support | 🔄 **Open** | Ctrl-V paste in shell, auto-detection in print mode; MP4/MKV/MOV/WebM/etc. |
| [#1323](https://github.com/MoonshotAI/kimi-cli/pull/1323) | Terminal resize artifacts fix | ✅ **Merged** | Duplicate toolbar cleanup (superseded by #1326) |
| [#1324](https://github.com/MoonshotAI/kimi-cli/pull/1324) | Structured session logging | ✅ **Merged** | Audit trail to `~/.kimi/sessions/` for debugging |
| [#1322](https://github.com/MoonshotAI/kimi-cli/pull/1322) | Context token usage in status + rotating tips | ✅ **Merged** | Transparency feature shipped in 1.17.0 |

---

## 5. Feature Request Trends

**Session & Context Management**
- Export/import shipped; community now pushing for **undo functionality** ([#1311](https://github.com/MoonshotAI/kimi-cli/issues/1311)) and **smart context compression** (PR #1329 in flight)

**Agent Orchestration**
- **Subagent interaction patterns**: session switching (keys 2-9), `/agents` command menu ([#1312](https://github.com/MoonshotAI/kimi-cli/issues/1312)), and proper lifecycle control (ESC cancellation — [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315))

**Extensibility & Automation**
- **Hooks system** for notifications/lifecycle events ([#1313](https://github.com/MoonshotAI/kimi-cli/issues/1313))
- **OpenClaw-like features**: heartbeat, cron, memories ([#1309](https://github.com/MoonshotAI/kimi-cli/issues/1309)) — bridging web and CLI capabilities

**Skills & MCP Governance**
- Unified CLI for local skills (list/remove/version) ([#1319](https://github.com/MoonshotAI/kimi-cli/issues/1319))
- Richer output: inline Mermaid diagrams in webui ([#1310](https://github.com/MoonshotAI/kimi-cli/issues/1310))

---

## 6. Developer Pain Points

| Theme | Manifestation | Frequency |
|-------|-------------|-----------|
| **MCP Reliability** | Timeouts and connection failures crash entire CLI rather than degrading gracefully | 🔥🔥🔥 High — #1316, #1314, #1318 |
| **Terminal UI Fragility** | Resize artifacts, theme contrast issues, multiline editing friction | 🔥🔥🔥 High — #1326, #1323, #1301, #1320 |
| **Environment Sensitivity** | Kernel variables, HTTP header edge cases, proxy/trust_env needs break connectivity | 🔥🔥 Medium — #1321, #1266, #1236 |
| **Agent Control & Observability** | Can't stop subagents, no hooks for long-running tasks, step limits hit prematurely | 🔥🔥 Medium — #1315, #1313, #1327, #1312 |
| **Configuration Discoverability** | Default step limits, skills management, context compression require manual config tuning | 🔥🔥 Medium — #1327, #1319 |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-03-03.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-04

## Today's Highlights

OpenCode v1.2.16 shipped with critical auth fixes and OpenTUI v0.1.86 enabling markdown rendering by default. The community is intensely focused on Copilot billing concerns (#8030, 152 comments) and agent identity awareness gaps during agent switching. Meanwhile, core infrastructure work accelerates with workspace adaptor rewrites and new provider integrations for Perplexity, GitLab Duo, and Bedrock IAM.

---

## Releases

### [v1.2.16](https://github.com/anomalyco/opencode/releases/tag/v1.2.16)
- **Auth**: Normalize trailing slashes in login URLs ([@elithrar](https://github.com/elithrar))
- **UI**: Upgrade OpenTUI to v0.1.86 with markdown rendering enabled by default
- **Providers**: Forward metadata options to Cloudflare AI Gateway ([@ryanskidmore](https://github.com/ryanskidmore))
- **Fixes**: Prevent Gemini combiner schema sibling injection; clone part data in Bus events to prevent reference mutations

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | Copilot auth over-counting "user" requests, burning premium quotas | **Critical billing impact** — 60 agent-initiated requests incorrectly billed as user premium requests; affects cost control for teams | 152 comments, 50 👍; urgent demand for `X-Initiator` header fix |
| [#6918](https://github.com/anomalyco/opencode/issues/6918) | qwen3-coder fails to call edit tool via OpenRouter | Blocks Qwen adoption; `oldString` validation failures break core editing workflow | 28 comments, 16 👍; Nix users particularly affected |
| [#9178](https://github.com/anomalyco/opencode/issues/9178) | Copilot reauthentication loop despite successful OAuth | Auth reliability regression; users locked out of Copilot models entirely | 18 comments; authentication flow trust erosion |
| [#7048](https://github.com/anomalyco/opencode/issues/7048) | Copy-to-clipboard fails silently in GhostTTY/Ubuntu | Fundamental UX breakage; "Copied" notification lies, data loss risk | 13 comments, 5 👍; terminal compatibility concern |
| [#13469](https://github.com/anomalyco/opencode/issues/13469) | GPT-5.3-Codex-Spark rejected via Codex OAuth | New OpenAI model support gap; "not supported with ChatGPT account" error | 13 comments; enterprise adoption blocker |
| [#8549](https://github.com/anomalyco/opencode/issues/8549) | Web version requires internet, breaks air-gapped corporate use | **Enterprise deployment blocker** — SaaS dependency vs. self-hosted requirement | 7 comments, 6 👍; need bundled/offline WebUI |
| [#1573](https://github.com/anomalyco/opencode/issues/1573) | "ASK MODE" to reduce token burn on simple queries | Cost optimization; 17.7K tokens for "hi" due to agent/tool overhead | 7 comments; efficiency-focused users vocal |
| [#14194](https://github.com/anomalyco/opencode/issues/14194) | SQLite corruption when sharing config between local and Docker | Data integrity risk; concurrent session handling flawed | 6 comments, 3 👍; containerized workflow impact |
| [#14368](https://github.com/anomalyco/opencode/issues/14368) | Compaction loses entire conversation context | **Data loss** — context limit handling destroys session history | 4 comments; reliability concern for long sessions |
| [#15325](https://github.com/anomalyco/opencode/issues/15325) | Desktop Write tool reports success but doesn't persist files | **Silent data loss** — 13 "successful" writes vanished; critical bug | 4 comments; Windows Desktop specific |

---

## Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#15919](https://github.com/anomalyco/opencode/pull/15919) | Perplexity Agent API provider | Custom loader using `sdk.responses()` vs. `sdk.llm()` for agent-native API | New provider expansion |
| [#15895](https://github.com/anomalyco/opencode/pull/15895) | Rework workspace integration and adaptor interface | Structural refactor enabling proper worktree usage; removes `setTimeout` anti-pattern | Core architecture evolution |
| [#15863](https://github.com/anomalyco/opencode/pull/15863) | Tool-call abstraction + timeline motion polish | `ToolCall` explicit variants, auto-scroll stability, session turn presentation | UX quality of life |
| [#14969](https://github.com/anomalyco/opencode/pull/14969) | Bedrock IAM credentials connect flow | Replaces generic API key with IAM (access key, secret, region) + env var auth | Enterprise AWS adoption |
| [#15899](https://github.com/anomalyco/opencode/pull/15899) | Prioritize `text/markdown` in webfetch Accept header | Implements Cloudflare "Markdown for Agents" spec negotiation | Web content efficiency |
| [#15573](https://github.com/anomalyco/opencode/pull/15573) | GitLab Duo Agent Platform (DAP) workflow models | Full DAP integration with package migration to unscoped names | Enterprise GitLab users |
| [#9139](https://github.com/anomalyco/opencode/pull/9139) | Thinking/reasoning block visibility toggle | `Ctrl+i` keyboard shortcut for quick TUI thinking mode toggle | Power user ergonomics |
| [#15770](https://github.com/anomalyco/opencode/pull/15770) | Restore Task click-to-navigate via InlineTool onClick | Fixes broken task navigation in TUI | Interaction regression fix |
| [#15908](https://github.com/anomalyco/opencode/pull/15908) | Configurable terminal title format | Template placeholders for terminal/tmux pane titles | Customization, multi-session UX |
| [#10275](https://github.com/anomalyco/opencode/pull/10275) | Track provider packages for automatic cleanup | Reference counting in `package.json` `opencode.providers` section | Dependency hygiene |

---

## Feature Request Trends

1. **VS Code Extension** — Strong demand (#11176, 11 👍) for native IDE integration vs. standalone TUI/Web
2. **"Ask Mode" / Lightweight Chat** — Multiple requests (#1573, #15901) for token-efficient conversation without full agent/tool context loading
3. **Offline/Self-Hosted Web** — Enterprise requirement (#8549) for air-gapped WebUI deployment
4. **Provider Expansion** — PPQ.ai (#14086), Perplexity (#15919), GitLab Duo (#15573), Cloudflare features (#13486) showing ecosystem breadth demands
5. **Agent Identity & Context Awareness** — Requests for per-message agent identity (#14930) and fixing agent switching confusion (#7492)
6. **Settings Portability** — Import from Claude Code and other tools (#6207) for migration friction reduction

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Authentication & Billing** | Copilot quota miscounting (#8030), reauth loops (#9178), model availability gaps (#15321, #13469) | **Critical** — highest engagement |
| **Data Integrity** | Silent write failures (#15325), compaction data loss (#14368), SQLite corruption (#14194), clipboard failures (#7048, #15907) | High — trust erosion in core operations |
| **Terminal/Environment Compatibility** | GhostTTY clipboard, tmux/SSH issues, mouse selection regressions (#15760), LaTeX math rendering bugs (#15892) | Medium-High — Linux/terminal-heavy users affected |
| **Context & Token Efficiency** | "Ask mode" requests, surprise token costs, agent overhead complaints | Medium — cost-conscious users |
| **Enterprise Deployment** | Air-gapped Web needs, Docker/config sharing patterns, IAM auth requirements | Growing — B2B adoption friction |

---

*Digest compiled from github.com/anomalyco/opencode activity on 2026-03-04.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-04

## Today's Highlights
Qwen Code v0.11.1 shipped with official **AGENTS.md support** as a default context file, aligning with emerging agent standards. The community is actively stress-testing this feature while reporting edge cases in subagent prompt handling. Meanwhile, work on **parallel tool execution** and **multi-model arena comparisons** signals major architectural improvements on the horizon.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.11.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.11.1)** | • `feat`: Support `AGENTS.md` as default context file ([#2018](https://github.com/QwenLM/qwen-code/pull/2018))<br>• `fix`: Append `output-language.md` to subagent system prompt<br>• `chore`: Version bump |

*Preview and nightly builds (2026-03-03) contain identical changes.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2062](https://github.com/QwenLM/qwen-code/issues/2062) | **AGENTS.md does not take effect** | Critical regression in the flagship v0.11.1 feature; code inspection reveals hardcoded `GeminiMd` references blocking new file format | 🔴 High priority; immediate follow-up needed |
| [#643](https://github.com/QwenLM/qwen-code/issues/643) | **Xcode "[] is too short - 'tools'" error** | Blocks IDE integration for Apple developers; likely API schema mismatch with empty tool arrays | 5 comments, cross-referenced in [#2054](https://github.com/QwenLM/qwen-code/issues/2054) |
| [#1924](https://github.com/QwenLM/qwen-code/issues/1924) | **Useless compression + buggy contextWindowSize** | Core reliability issue with local llama.cpp deployments; compression failing to maintain context boundaries | 4 comments; affects self-hosted workflows |
| [#2064](https://github.com/QwenLM/qwen-code/issues/2064) | **Intermittent API Error: Model stream ended without finish reason** | Transient infrastructure failures breaking UX; PR [#2065](https://github.com/QwenLM/qwen-code/pull/2065) already proposed | Active fix in flight |
| [#2068](https://github.com/QwenLM/qwen-code/issues/2068) | **Input length range error [1, 983616]** | Hard ceiling on prompt length causing cryptic failures; needs better client-side validation | Fresh report; needs triage |
| [#2058](https://github.com/QwenLM/qwen-code/issues/2058) | **Edit failures: excessive write_file usage** | Model bypassing diff-based editing, causing full-file rewrites; impacts token efficiency and reviewability | No comments yet; common pain point |
| [#2057](https://github.com/QwenLM/qwen-code/issues/2057) | **Cannot execute terminal commands** | Permission/sandboxing issue blocking core functionality on Windows | v0.10.6 user; version gap may be factor |
| [#2053](https://github.com/QwenLM/qwen-code/issues/2053) | **Windows: CRLF/UTF-8 BOM breaks Markdown frontmatter** | Localization/formatting edge case degrading Windows UX | No engagement yet |
| [#2066](https://github.com/QwenLM/qwen-code/issues/2066) | **Chinese+numeric paths get space-injected** | i18n path handling bug breaking file operations for CJK users | Fresh report |
| [#773](https://github.com/QwenLM/qwen-code/issues/773) | **Termux (Android) installation fails** | Mobile/edge platform support gap; community patch available but unmerged | 3 comments; long-standing |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2065](https://github.com/QwenLM/qwen-code/pull/2065) | **Transient stream anomaly retry budget** | Independent retry logic for `NO_FINISH_REASON`/`NO_RESPONSE_TEXT` with exponential backoff; fixes [#2064](https://github.com/QwenLM/qwen-code/issues/2064) | 🟡 Open |
| [#1912](https://github.com/QwenLM/qwen-code/pull/1912) | **Agent collaboration arena** | Multi-model competitive execution via git worktrees; side-by-side comparison + merge-best-solution workflow | 🟡 Open — major feature |
| [#2000](https://github.com/QwenLM/qwen-code/pull/2000) | **Parallel tool call execution** | `Promise.allSettled` replaces sequential loops; independent tool calls execute concurrently | 🟡 Open — performance win |
| [#2063](https://github.com/QwenLM/qwen-code/pull/2063) | **ACP migration to @agentclientprotocol/sdk** | Standardizes on official SDK, removes legacy custom implementation | 🟡 Open — protocol alignment |
| [#2061](https://github.com/QwenLM/qwen-code/pull/2061) | **Multi-language insight reports** | LLM-generated content localization for `/insight` HTML reports | 🟡 Open — i18n milestone |
| [#1988](https://github.com/QwenLM/qwen-code/pull/1988) | **Hooks system infrastructure** | 12 lifecycle events (PreToolUse, PostToolUse, etc.) with CLI/UI management | 🟡 Open — extensibility foundation |
| [#2024](https://github.com/QwenLM/qwen-code/pull/2024) | **Reject PDFs to prevent session corruption** | Hard stop on PDF ingestion vs. base64 embedding that caused API 400s | 🟡 Open — reliability fix |
| [#2056](https://github.com/QwenLM/qwen-code/pull/2056) | **Handle symlinks in extension install** | Fixes `ENOTSUP: operation not supported on socket` for GitHub repos with symlinks | 🟡 Open — fixes [#2050](https://github.com/QwenLM/qwen-code/issues/2050) |
| [#2047](https://github.com/QwenLM/qwen-code/pull/2047) | **Ignore stream-json in TTY mode** | Prevents CLI hang when interactive terminal misconfigured with stream-json input | 🟡 Open — UX fix |
| [#1830](https://github.com/QwenLM/qwen-code/pull/1830) | **JSON Schema validation for VS Code settings** | Autocomplete + type checking for `.qwen/settings.json` | 🟡 Open — v0.12.0 target |

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Agent ecosystem standardization** | AGENTS.md support landed; `.agents/` directory loading requested ([#2042](https://github.com/QwenLM/qwen-code/issues/2042)); ACP protocol migration ([#2063](https://github.com/QwenLM/qwen-code/pull/2063)) | Qwen Code positioning as agent-native IDE; interoperability with Claude Code, Skills.sh |
| **Per-skill model selection** | [#2052](https://github.com/QwenLM/qwen-code/issues/2052) requests `model:` frontmatter in skills | Fine-grained model routing for cost/ capability optimization |
| **Project-scoped insights** | [#2040](https://github.com/QwenLM/qwen-code/issues/2040) vs. current machine-level | Multi-repo workflow support |
| **Client-side secret redaction** | [#2010](https://github.com/QwenLM/qwen-code/issues/2010) placeholder + session restore | Enterprise security compliance |
| **macOS-native UX** | [#2046](https://github.com/QwenLM/qwen-code/issues/2046) Cmd+V for clipboard images | Platform polish gaps |

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Context/compression reliability** | [#1924](https://github.com/QwenLM/qwen-code/issues/1924) compression failures, [#2068](https://github.com/QwenLM/qwen-code/issues/2068) length limits, [#2051](https://github.com/QwenLM/qwen-code/issues/2051) wrong window sizes for GPT-5.x Codex | 🔥🔥🔥 High — affects daily use |
| **IDE integration fragility** | Xcode [#643](https://github.com/QwenLM/qwen-code/issues/643)/[#2054](https://github.com/QwenLM/qwen-code/issues/2054), VS Code settings validation gaps, container DNS issues ([#1817](https://github.com/QwenLM/qwen-code/pull/1817)) | 🔥🔥🔥 High — adoption blocker |
| **File/path handling edge cases** | Chinese+numeric paths [#2066](https://github.com/QwenLM/qwen-code/issues/2066), CRLF/BOM [#2053](https://github.com/QwenLM/qwen-code/issues/2053), symlink installs [#2050](https://github.com/QwenLM/qwen-code/issues/2050) | 🔥🔥 Medium — i18n/Windows debt |
| **Tool use robustness** | Edit failures [#2058](https://github.com/QwenLM/qwen-code/issues/2058), terminal execution [#2057](https://github.com/QwenLM/qwen-code/issues/2057), `@` file completion [#2055](https://github.com/QwenLM/qwen-code/issues/2055) | 🔥🔥 Medium — core loop friction |
| **New feature stability** | AGENTS.md not working post-release [#2062](https://github.com/QwenLM/qwen-code/issues/2062) | 🔥🔥 Medium — release QA gap |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*