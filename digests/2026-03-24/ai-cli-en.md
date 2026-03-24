# AI CLI Tools Community Digest 2026-03-24

> Generated: 2026-03-24 00:08 UTC | Tools covered: 7

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

# AI CLI Tools Cross-Comparison Report — 2026-03-24

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a fragmented but competitive market with six actively developed alternatives. Claude Code and OpenAI Codex lead in enterprise adoption but face significant reliability and transparency challenges. GitHub Copilot CLI leverages its platform integration advantage, while Gemini CLI, Kimi Code, and Qwen Code represent strong regional/vertical competitors with distinct technical philosophies. The sector is converging on plugin ecosystems (MCP, Open Plugins) and agentic workflows, though implementation quality varies dramatically. Authentication fragility, token economics opacity, and cross-platform stability remain universal pain points across all tools.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Status |
|------|:-----------:|:---------:|:-------------:|----------------|
| **Claude Code** | 10+ tracked | 9 open | 0 | v2.1.81 stable; regression-heavy |
| **OpenAI Codex** | 10+ tracked | 10+ merged | 2 alphas (0.117.0-α.9/10) | Rapid Rust iteration; no stable |
| **Gemini CLI** | 10 tracked | 9 open | 4 (v0.36.0-nightly + 3 preview patches) | Aggressive nightly cadence |
| **GitHub Copilot CLI** | 10 tracked | 2 closed | 3 (v1.0.11, v1.0.11-0, v1.0.11-1) | Patch-heavy; MCP regressions |
| **Kimi Code CLI** | 4 tracked | 9 (6 closed, 3 open) | 1 (v1.25.0) | Feature-dense stable release |
| **OpenCode** | 10+ tracked | 10+ mixed | 0 | Compliance-driven; auth crisis |
| **Qwen Code** | 10 tracked | 10+ open | 8 (v0.13.0 + 7 previews/nightlies) | Highest velocity; automation failures |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **MCP/OAuth Enterprise Auth** | Claude Code (#27302, #7744), Copilot CLI (#33, #2236), OpenCode (#18267, #18477) | Multi-tenant connector accounts, HTTPS redirect URIs, org policy enforcement, non-Anthropic OAuth pathways |
| **Token Usage Transparency** | Claude Code (#29579, #37917), Codex (#14593, #14762, #14750), Qwen Code (#2040) | Per-action cost preview, usage dashboards, rate limit accuracy, billing anomaly detection |
| **Plugin/Extension Ecosystem** | Gemini CLI (#23601, #23610), Kimi Code (v1.25.0 plugin system), Claude Code (4 plugin PRs), OpenCode (#18280) | Open Plugin manifest standard, skill namespacing, credential injection, multi-plugin repositories |
| **Plan Mode / Approval Workflows** | Gemini CLI (#23230, #23582, #23608), Qwen Code (#1151, #2551), Codex | Subagent approval awareness, mode-aware routing, non-interactive scripting support |
| **Persistent Memory & Context** | Gemini CLI (#22819), Codex (#14339, #15060), Claude Code | Project-scoped vs. global memory, conversation history beyond 20/50 limits, context compression controls |
| **Cross-Platform Parity** | Codex (#10601, #15578), Claude Code (Windows Hyper-V, Linux TTY), Qwen Code (Windows zombies, IME), Kimi Code (#1334) | Windows sandbox stability, signal handling, international input methods, ARM support |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|-------------|------------|------------------|
| **Claude Code** | Enterprise multi-tenancy, hook/plugin extensibility, XDG compliance | Large teams, DevOps engineers | TypeScript/Node, heavy MCP integration, rapid feature shipping with regression risk |
| **OpenAI Codex** | Rust performance, unified execution runtime, conversation forking | Performance-sensitive developers, Azure enterprises | Rust core, PTY abstraction, aggressive alpha iteration with stability tradeoffs |
| **Gemini CLI** | Eval infrastructure, behavioral testing, GSoC community building | ML engineers, quality-focused teams, academic contributors | TypeScript, explicit eval-first culture, Open Plugin standardization |
| **GitHub Copilot CLI** | GitHub platform integration, monorepo discovery, org policy governance | Existing Copilot subscribers, GitHub-centric workflows | Proprietary/closed core, rapid patch releases, React-based TUI |
| **Kimi Code CLI** | Plugin architecture, scheduled automation (`/loop`), subagent persistence | Automation-heavy users, remote/mobile developers | Python, Wire protocol alignment, feature-dense releases |
| **OpenCode** | Multi-provider flexibility, compliance adaptability, mobile touch | Provider-agnostic users, legal-constrained enterprises | Effect/functional TS, plugin-driven architecture, reactive to legal pressures |
| **Qwen Code** | VSCode integration depth, Alibaba Cloud ecosystem, rapid iteration | Chinese market, VSCode power users | Rust/TypeScript hybrid, highest release velocity, IDE companion focus |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Highest Engagement** | Claude Code, OpenAI Codex | 90-200+ comment issues; sustained billing/auth crisis discussions; enterprise user concentration |
| **Rapid Iteration** | Qwen Code, Gemini CLI | 8 releases/24h (Qwen), 4 releases/24h (Gemini); active GSoC programs; eval infrastructure investment |
| **Platform-Leveraged** | GitHub Copilot CLI | Lower PR velocity (2/24h) but release cadence maintained; issue volume driven by org policy complexity |
| **Emerging Velocity** | Kimi Code CLI | Feature-dense v1.25.0 with plugin system; smaller absolute issue volume but high merge rate (6/9 PRs closed) |
| **Reactive/Disrupted** | OpenCode | Compliance-driven auth removal triggered community crisis; high issue volume (137 comments on #18267) but defensive posture |

**Maturity Signals**: Gemini CLI demonstrates strongest engineering culture (eval-first, memory leak patches, telemetry hardening). Codex shows architectural ambition (Rust rewrite, crate extraction) but billing transparency failures. Claude Code exhibits feature leadership with quality control gaps. Qwen Code's automation fragility (3 failed workflows) suggests scaling pains.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Authentication as Competitive Battleground** | Anthropic OAuth removal from OpenCode, Poe OAuth emergence, enterprise IdP scope battles | Developers need multi-provider auth strategies; vendor lock-in risks increasing |
| **Token Economics Transparency Crisis** | Codex #14593 (204 comments), Claude Code #29579/37917, unified execution verbosity analysis | Demand for per-action cost visibility will drive tooling innovation; "credit burn" becoming selection criterion |
| **MCP as De Facto Standard** | All tools implementing MCP; Gemini's Open Plugin convergence; org policy governance in Copilot | Interoperability investment justified; expect consolidation around MCP + Open Plugin hybrid |
| **Agent Reliability > Capability** | Gemini's behavioral eval focus, subagent approval awareness PRs, Plan Mode UX refinements across tools | Production deployment requires predictable agent behavior over feature breadth |
| **Regional/Ecosystem Verticalization** | Qwen's Alibaba Cloud integration, Kimi's mobile/remote focus, Lingma/Qoder branding fragmentation | Developers in specific ecosystems may find superior integration with non-US tools |
| **Terminal-Native UX Expectations** | tmux safety (#22067), status lines (#1550), OSC notifications (#2528), IME handling (#2598) | CLI tools must match IDE polish; terminal is not a downgrade from GUI |

---

*Report compiled from community digest data 2026-03-24. For methodological questions or corrections, contact the analysis team.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of March 24, 2026 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | Addresses universal document formatting pain point affecting all Claude outputs |
| 2 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Claude Skills across 5 quality dimensions and security posture | First comprehensive quality gates for the Skills ecosystem itself |
| 3 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and single-conversation actionability; eliminates vague guidance | Community refinement of existing skill for practical execution |
| 4 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP/AI convergence; Apache 2.0 model adoption |
| 5 | **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step workflow for identifying orphaned code, unused files, documentation gaps, infrastructure bloat | Technical debt management at scale |
| 6 | **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Persistent memory system maintaining context across conversations via `proactive_context` calls | Addresses core Claude limitation: context loss between sessions |
| 7 | **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT→HTML parsing (ISO/IEC 26300 standard) | LibreOffice/enterprise document interoperability |
| 8 | **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | 🟡 Open | Preserves critical technical facts across context compaction and session restarts, zero dependencies | Targets silent data loss during long coding sessions |

---

## 2. Community Demand Trends

From 50 tracked Issues, four dominant Skill categories emerge:

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Agent Governance & Safety** | 4+ comments, security-focused | [#412](https://github.com/anthropics/skills/issues/412) Agent governance patterns; [#492](https://github.com/anthropics/skills/issues/492) Trust boundary abuse concerns |
| **Memory & Context Persistence** | Multiple PRs, high engagement | [#154](https://github.com/anthropics/skills/pull/154), [#629](https://github.com/anthropics/skills/pull/629) — solving Claude's context window limitations |
| **Enterprise Tooling & ERP Integration** | SAP, system documentation skills | [#181](https://github.com/anthropics/skills/pull/181) SAP-RPT; [#95](https://github.com/anthropics/skills/pull/95) Evidence management systems |
| **MCP Interoperability** | Protocol adoption requests | [#16](https://github.com/anthropics/skills/issues/16) Expose Skills as MCPs; [#369](https://github.com/anthropics/skills/issues/369) MCP Apps support |

**Emerging pattern:** Skills are evolving from single-task utilities toward **system-level infrastructure** (memory, governance, quality assurance) that enables reliable autonomous agent operation.

---

## 3. High-Potential Pending Skills

Active PRs with sustained engagement likely to merge:

| Skill | PR | Why It Lands Soon |
|:---|:---|:---|
| **Pre-Deployment Validator** | [#740](https://github.com/anthropics/skills/pull/740) | Created March 23, 2026 — addresses universal Node.js/Next.js deployment need; standardized quality gates |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Novel economic layer for AI services; natural language payment interface |
| **AURELION skill suite** | [#444](https://github.com/anthropics/skills/pull/444) | 4-skill cognitive framework; professional knowledge management system |
| **Masonry image/video generation** | [#335](https://github.com/anthropics/skills/pull/335) | Imagen 3.0 + Veo 3.1 integration; media generation workflow management |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Directly addresses [#452](https://github.com/anthropics/skills/issues/452) community health gap (25% → target 100% metrics) |

---

## 4. Skills Ecosystem Insight

> **The community's concentrated demand is for reliability infrastructure—memory systems that survive context compaction, governance frameworks for safe agent autonomy, and quality validation tools that prevent silent failures—shifting the Skills ecosystem from "what Claude can do" to "what Claude can reliably do at scale."**

---

*Report methodology: PRs ranked by comment velocity and cross-referenced with Issue demand signals. All GitHub links verified against `anthropics/skills` repository state as of 2026-03-24.*

---

# Claude Code Community Digest — 2026-03-24

---

## 1. Today's Highlights

The v2.1.81 release brought significant regressions: the `--worktree` flag hangs indefinitely on macOS, and Desktop app v1.1.7714 introduced permission handling changes that broke remote server workflows. Meanwhile, rate limiting and authentication issues continue dominating community reports, with multiple Max subscribers reporting API access problems despite low usage.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#29579](https://github.com/anthropics/claude-code/issues/29579) — Rate limit reached despite Max subscription (16% usage) | Critical billing/API reliability issue; undermines paid tier value | 92 comments, 49 👍 — highest engagement; users sharing workarounds |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) — Multiple Connector accounts support | Enterprise blocker for teams managing multiple AWS/GCP environments | 72 comments, 93 👍 — top-voted open feature |
| [#30864](https://github.com/anthropics/claude-code/issues/30864) — ARM processor support for Cowork | Expands hardware compatibility for Apple Silicon and cloud ARM instances | 64 comments, 76 👍; active user testing |
| [#1455](https://github.com/anthropics/claude-code/issues/1455) — XDG Base Directory spec non-compliance | Long-standing Linux hygiene issue affecting config management | 52 comments, 309 👍 — highest-voted issue overall |
| [#11447](https://github.com/anthropics/claude-code/issues/11447) — Tab indentation breaks file editing | Core editing functionality broken for legacy codebases | 41 comments, 42 👍; reproduction confirmed |
| [#35646](https://github.com/anthropics/claude-code/issues/35646) — Protected directory prompt lacks override (CLOSED) | v2.1.78 regression forced hacky workarounds for automation workflows | 16 comments, 20 👍; closed but sparked broader permissions discussion |
| [#7744](https://github.com/anthropics/claude-code/issues/7744) — MCP client ignores OAuth scopes | Blocks refresh token issuance for enterprise IdP integrations | 12 comments, 21 👍; security-critical |
| [#36351](https://github.com/anthropics/claude-code/issues/36351) — 1M context window removed from Desktop | Feature regression on Max plan affecting large codebase workflows | 8 comments, 5 👍; multiple confirmations |
| [#37917](https://github.com/anthropics/claude-code/issues/37917) — Usage explosion (unexpected cost spike) | Financial risk for users on metered plans | 8 comments, 9 👍; investigation ongoing |
| [#37874](https://github.com/anthropics/claude-code/issues/37874) — `claude -w <worktree>` hangs in v2.1.81 | **Fresh regression** breaking git worktree workflows | 3 comments, 1 👍; downgrade to v2.1.80 confirmed fix |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#37979](https://github.com/anthropics/claude-code/pull/37979) — StopFailure hook support + credit balance error handling | Adds hookify support for API failure responses (rate limits, auth, credits) | Open |
| [#36625](https://github.com/anthropics/claude-code/pull/36625) — Fix Pre/PostToolUse message visibility to Claude | Corrects hookify to show block messages to Claude, not just users | Open |
| [#29943](https://github.com/anthropics/claude-code/pull/29943) — MCP OAuth redirectUri hotfix | Enables HTTPS redirect URIs for enterprise IdP compliance | Open |
| [#37800](https://github.com/anthropics/claude-code/pull/37800) — `claude-tunnels` multi-project orchestration plugin | Slack/Teams/Telegram routing with isolated Claude sessions | Open |
| [#37680](https://github.com/anthropics/claude-code/pull/37680) — `parallel-batch-safe` plugin for auth-safe batching | Prevents VS Code/Cursor auth loss during parallel `claude -p` runs | Open |
| [#37658](https://github.com/anthropics/claude-code/pull/37658) — Remove client-side MCP scope gate | Fixes Claude.ai MCP server loading; lets server enforce permissions | **Closed** |
| [#37631](https://github.com/anthropics/claude-code/pull/37631) — `spinner-customization` plugin | User-configurable spinner verbs (quirky/plain/minimal/none) | Open |
| [#31501](https://github.com/anthropics/claude-code/pull/31501) — Fix TodoWrite overwriting phase-level todos | Resolves `/feature-dev` skipping Phases 6-7 | Open |
| [#37648](https://github.com/anthropics/claude-code/pull/37648) — Complete skill-development frontmatter docs | Updates SKILL.md with all 11 frontmatter fields | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Priority Signal |
|-----------|----------|---------------|
| **Enterprise auth & multi-tenancy** | #27302 (multi-Connector accounts), #7744 (OAuth scopes), #32668 (Bedrock backend) | High — 145+ combined 👍 |
| **Hardware/platform expansion** | #30864 (ARM/Cowork), #1455 (XDG/Linux) | Medium-High — 385+ combined 👍 |
| **Voice & accessibility** | #34305 (wake-word, toggle-to-talk) | Emerging — 3 comments |
| **Cost control & transparency** | #37917 (usage explosion), #29579 (rate limit accuracy) | Urgent — active incidents |
| **Plugin ecosystem maturation** | 4 plugin PRs in 24h (tunnels, batch-safe, spinner, hookify fixes) | Active development |

---

## 6. Developer Pain Points

**Authentication & Session Stability**
- OAuth tokens expiring multiple times daily (#36911)
- Slack MCP re-authentication failures (#37625)
- Desktop local sessions crashing with 429 errors (#36653)

**Billing & Rate Limit Transparency**
- Max subscribers blocked despite low reported usage (#29579, #29513)
- Unpredictable cost spikes (#37917, #25970)

**Recent Regressions (v2.1.78–v2.1.81)**
- `--worktree` hangs on macOS (#37874, #37965)
- Protected directory prompts breaking automation (#35646)
- Desktop plugin marketplace showing wrong plugins (#38008)

**Cross-Platform Inconsistencies**
- Windows-specific: Hyper-V initialization failures (#37967), webview service worker errors (#24142)
- Linux: TTY device freezes (#30541), terminal scrollback jumps (#37370)

**Configuration Precedence Bugs**
- Environment variables ignored in favor of settings.json (#35155, #23347)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-24

---

## 1. Today's Highlights

The Codex team shipped two rapid-fire Rust alpha releases (0.117.0-alpha.9/10) while community frustration over **token burn rates** reached a boiling point with 200+ comments on a single VS Code extension issue. Windows sandbox stability and Azure stream disconnections remain unresolved pain points as the team merges foundational runtime improvements for cross-platform unified execution.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| **rust-v0.117.0-alpha.9** → **rust-v0.117.0-alpha.10** | Back-to-back alpha releases with no detailed changelog; typical of rapid iteration cycle on the Rust CLI core. No breaking changes flagged. |

*No production/stable releases in the last 24h.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Token burn rate still excessive after VS Code update** | Business-tier user reports catastrophic credit consumption; 80% of $40 credits burned on "small portion of work." Suggests regression in context caching or tool-call efficiency. | 🔥 **204 comments, 77 👍** — highest engagement in months; users sharing detailed usage logs |
| [#14762](https://github.com/openai/codex/issues/14762) | **Paid usage dropping too quickly** | Pro user documents 1000→208 credits consumed rapidly, with overnight Mini prompts burning remainder. Pattern suggests billing/caching bug, not expected behavior. | 19 comments, 21 👍; multiple "me too" confirmations |
| [#10601](https://github.com/openai/codex/issues/10601) | **Sandbox setup error on Windows** | Blocks Windows CLI adoption entirely; affects restricted-token sandbox initialization. Long-running issue with 32 comments. | 9 👍; users posting workarounds involving manual policy edits |
| [#8865](https://github.com/openai/codex/issues/8865) | **Frequent stream disconnection on Azure** | Enterprise Azure Foundry users hit production-blocking reliability issues. Affects `gpt-5-codex` and `gpt-5.1-codex` models. | 26 comments, 8 👍; Azure-specific debugging threads |
| [#9936](https://github.com/openai/codex/issues/9936) | **Azure: "stream disconnected before completion"** | Visual Studio Enterprise subscribers affected; `response.failed` events suggest infrastructure-side timeout or capacity issue. | 13 comments; cross-referenced with #8865 |
| [#13715](https://github.com/openai/codex/issues/13715) | **macOS local clients hang after prompts** | Affects latest models (`gpt-5.4`, `gpt-5.3-codex high`) on Apple Silicon; complete session blockage. | 10 comments, 2 👍; ghostty/Terminal.app both affected |
| [#14860](https://github.com/openai/codex/issues/14860) | **Remote compact task timeout on Linux** | `/compact` command fails with child process exit timeout; breaks long-context workflows. User submitted patch. | 9 comments, 8 👍; community-contributed fix under review |
| [#15001](https://github.com/openai/codex/issues/15001) | **Subagent TUI corrupts live message text** | UI regression where TUI display diverges from actual rollout content; damages trust in live feedback. | 8 comments; reproducible on macOS desktop |
| [#15105](https://github.com/openai/codex/issues/15105) | **ALL CLI API calls fail with "high demand" error** | Complete service outage experience for Pro user; correlated with remote compaction errors. Suggests cascading backend failure. | 5 comments, 4 👍; critical severity |
| [#14750](https://github.com/openai/codex/issues/14750) | **UnifiedExec inflates uncached prompt suffixes** | Technical analysis showing verbose exec wrappers and polling loops burning tokens unnecessarily. Explains #14593 root cause. | 3 comments, 2 👍; highly technical, actionable |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Impact |
|---|-----|-------------|--------|
| [#15530](https://github.com/openai/codex/pull/15530) | **Stop app-server auth refresh storms** | Fixes infinite token refresh loops after permanent failure; closes hole from PR #11802. | Eliminates client-side DDoS of auth endpoints; improves reliability |
| [#15578](https://github.com/openai/codex/pull/15578) | **Windows sandbox unified exec runtime** | Adds `unified_exec` support for Windows sandbox (legacy + elevated backends); extends PTY/process runtime. | **Critical path for Windows parity**; unblocks #10601 class of issues |
| [#15547](https://github.com/openai/codex/pull/15547) | **Back pressure + batching for `command/exec`** | Adds `send_server_notification_to_connection_and_wait` for flow-controlled stdout/stderr streaming. | Prevents memory pressure and websocket backlogs on large output |
| [#15569](https://github.com/openai/codex/pull/15569) | **Handle inline image request caps gracefully** | Enforces 512 MiB / 1,500 image limits with model capability data; graceful degradation on overflow. | Prevents hard failures on vision-heavy workflows |
| [#15360](https://github.com/openai/codex/pull/15360) | **Build PATH with OsString not String** | Fixes non-UTF-8 PATH handling on Unix systems; uses `std::ffi::OsString`. | Robustness fix for international/legacy environments |
| [#15239](https://github.com/openai/codex/pull/15239) | **Add fork snapshot modes** | Introduces `ForkSnapshotMode` for committed vs. interrupted snapshots; shares `<turn_aborted>` marker. | Enables precise conversation branching and recovery |
| [#15577](https://github.com/openai/codex/pull/15577) | **Trim pre-turn context updates during rollback** | Prevents duplicate context accumulation on rollback; adds regression test. | Fixes context bloat, indirectly reduces token usage |
| [#15531](https://github.com/openai/codex/pull/15531) | **Non-streaming PostToolUse shell hooks** | Matches PreToolUse blocking behavior for post-tool shell execution. | Completes hook parity for security/auditing workflows |
| [#15519](https://github.com/openai/codex/pull/15519) | **Default MCP tool approval when annotations missing** | Unannotated MCP tools now default to `destructiveHint=true`, requiring approval/ARC monitoring. | **Security hardening**; prevents silent auto-execution |
| [#15548](https://github.com/openai/codex/pull/15548) | **Extract rollout into `codex-rollout` crate** | Major refactor: moves recorder, metadata, policy, session index to dedicated crate. | Improves compile times and enables SDK reuse |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Context/Conversation Management** | [#14339](https://github.com/openai/codex/issues/14339) "Clear context before implementing plan" (6 👍), [#11427](https://github.com/openai/codex/issues/11427) multi-terminal support (24 👍), [#14601](https://github.com/openai/codex/issues/14601) separate project trust levels from config | High — users want Copilot/Claude Code parity in context control |
| **Thread/History Persistence** | [#15060](https://github.com/openai/codex/issues/15060) sidebar only shows 50 recent threads, [#14751](https://github.com/openai/codex/issues/14751) workspace history incomplete, [#6410](https://github.com/openai/codex/issues/6410) 20-chat limit in VS Code | **Critical** — data loss perception damaging trust |
| **Token Usage Transparency & Control** | [#14593](https://github.com/openai/codex/issues/14593), [#14762](https://github.com/openai/codex/issues/14762), [#14750](https://github.com/openai/codex/issues/14750) all demand visibility into *why* credits burn | Explosive — billing trust erosion |
| **Sandbox/Security Hardening** | [#8161](https://github.com/openai/codex/issues/8161) disable `apply_patch` tool (2 👍, closed), ongoing Windows sandbox struggles | Steady — enterprise adoption blocker |

---

## 6. Developer Pain Points

| Category | Symptoms | Root Indicators |
|----------|----------|---------------|
| **💸 Opaque Token Economics** | Rapid credit depletion, "small work" → large bills, Mini models burning overnight credits | `UnifiedExec` verbosity (#14750), cache miss inflation, lack of per-action cost preview |
| **🔌 Connection Reliability** | Stream disconnections, "no healthy upstream" 503s, "high demand" errors | Azure-specific fragility (#8865, #9936), compaction service overload (#15105), macOS hangs (#13715) |
| **🪟 Windows Second-Class Status** | Sandbox setup failures, unified exec gaps, path handling bugs | Long tail of platform-specific issues; PR #15578 addresses but not yet released |
| **🗂️ Conversation Data Loss** | Disappearing threads, 20/50 chat limits, incomplete workspace history | Architecture choice (lazy loading?) vs. user expectation of infinite history |
| **🔧 Configuration Sprawl** | Project trust levels polluting global config, MDM path handling | [#14601](https://github.com/openai/codex/issues/14601), PR [#15351](https://github.com/openai/codex/pull/15351) addressing |

---

*Digest compiled from github.com/openai/codex public activity. For corrections or additions, open an issue or discussion.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-24

---

## 1. Today's Highlights

The team shipped **v0.36.0-nightly** with onboarding telemetry and eval reliability improvements, while the v0.35.0-preview series stabilized through three rapid patch releases. Developer momentum is accelerating around **Google Summer of Code** participation, with multiple community-proposed tools for multi-model eval comparison and behavioral eval improvements entering review. The core focus remains on **agent reliability**—subagent approval mode awareness, memory routing, and plan mode UX refinements dominate active development.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.36.0-nightly.20260323.6055c4707](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-nightly.20260323.6055c4707)** | Onboarding telemetry setup; eval retry logic on API errors; removed tool restrictions with compile-time guards |
| **[v0.35.0-preview.5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-preview.5)** | Cherry-pick patch with merge conflict resolution |
| **[v0.35.0-preview.4](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-preview.4)** | Stabilization release |
| **[v0.35.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-preview.3)** | Cherry-pick patch for v0.35.0-preview.2 |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| **[#23331](https://github.com/google-gemini/gemini-cli/issues/23331)** GSoC: Behavioral evals, Quality, and OSS Community | **41 comments** — the highest-engagement issue tracking a GSoC project to democratize quality contributions. Aims to open behavioral evals, prompt engineering, and tool development to external contributors. | 🔥 14 👍, active maintainer coordination |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST-aware file reads, search, and mapping | EPIC investigating precision improvements for codebase navigation. Could reduce token waste from misaligned file reads and enable method-boundary-aware tool calls. | 4 comments, research-phase |
| **[#23230](https://github.com/google-gemini/gemini-cli/issues/23230)** Plan mode exit doesn't switch model | UX friction: confirmed plans should auto-downgrade to `gemini-3-flash-preview` but require manual interruption. Affects cost and latency expectations. | 3 comments, user-reported |
| **[#22855](https://github.com/google-gemini/gemini-cli/issues/22855)** Support passing prompt to `/plan` | Workflow efficiency: eliminates the two-step `/plan` → type pattern. Requested for enterprise scripting and headless workflows. | 2 comments, 2 👍 |
| **[#22822](https://github.com/google-gemini/gemini-cli/issues/22822)** SDD: Refine `/spec setup` for existing `/conductor` migration | Migration path for early adopters stuck on deprecated `conductor` directory structure. Blocks clean upgrades. | 2 comments |
| **[#23604](https://github.com/google-gemini/gemini-cli/issues/23604)** [GSoC] Multi-model eval comparison tool | Community-proposed GSoC project to eliminate manual cross-model eval comparison. Addresses a real pain point in prompt engineering workflows. | 1 comment, fresh submission |
| **[#23582](https://github.com/google-gemini/gemini-cli/issues/23582)** Subagents Awareness of Active Approval Modes | Critical for Plan Mode reliability: subagents currently attempt blocked actions, causing failure loops. Policy Engine blocks them but without context. | 1 comment |
| **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** Model creates tmp scripts in random spots | Workspace hygiene issue: shell-restricted agents scatter edit scripts, complicating git workflows. | 1 comment |
| **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** Memory routing: global vs. project | Foundation for persistent agent memory. Distinguishes user preferences (`~/.gemini/`) from codebase-specific context (`.gemini/`). | 1 comment, 1 👍 |
| **[#22933](https://github.com/google-gemini/gemini-cli/issues/22933)** Fix the loop problem | Agent stuck in clarification loops when session paths are ambiguous. Affects task completion reliability. | 1 comment, 1 👍 |

---

## 4. Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| **[#23611](https://github.com/google-gemini/gemini-cli/pull/23611)** refactor(core): remove redundant casts in snippets.ts | Adds behavioral eval for unnecessary type casts; prompt refinement to reduce noise | Open |
| **[#23601](https://github.com/google-gemini/gemini-cli/pull/23601)** feat(cli): support Open Plugin (`plugin.json`) manifest standard | **Major extensibility milestone**: unifies Gemini extensions and Open Plugins under shared abstraction. Enables broader plugin ecosystem. | Open |
| **[#22067](https://github.com/google-gemini/gemini-cli/pull/22067)** fix(cli): use tmux-safe thinking indicator | Resolves terminal redraw interference in tmux panes—critical for terminal-native developers | Open, help wanted |
| **[#23272](https://github.com/google-gemini/gemini-cli/pull/23272)** feat(evals): behavioral evaluations for subagent routing | Tests specialist vs. generalist routing decisions without explicit user instruction | Open |
| **[#20407](https://github.com/google-gemini/gemini-cli/pull/20407)** ~~fix(core): wire abort signal through chat compression~~ | **Merged** — Ctrl+C now cancels in-flight compression LLM calls | Closed |
| **[#23610](https://github.com/google-gemini/gemini-cli/pull/23610)** feat(cli): skill discovery and namespacing for Open Plugins | Convention-based skill discovery with auto-prefixing (`plugin-name:skill-name`) for model/policy clarity | Open |
| **[#23281](https://github.com/google-gemini/gemini-cli/pull/23281)** fix(telemetry): patch memory leak and enforce logPrompts privacy | **Critical**: fixes ~1.7GB V8 closure leak risking OOM; security fix for telemetry privacy | Open |
| **[#22584](https://github.com/google-gemini/gemini-cli/pull/22584)** fix(cli): stabilize copy mode to prevent flickering | Resolves macOS/Windows fullscreen flickering and cursor resets during text selection | Open, maintainer priority |
| **[#23608](https://github.com/google-gemini/gemini-cli/pull/23608)** fix(core): make subagents aware of active approval modes | Injects Plan/Auto-Edit context to prevent subagent failure loops | Open |
| **[#23607](https://github.com/google-gemini/gemini-cli/pull/23607)** [GSoC] feat(scripts): add multi-model eval comparison tool | Community-contributed CLI script for local multi-model eval comparison—reduces CI dependency | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Eval infrastructure democratization** | #23331, #23604, #23607, #23169, #23166 | 🔥🔥🔥 High — GSoC focus area |
| **Open Plugin ecosystem expansion** | #23601, #23610 | 🔥🔥🔥 High — standardization push |
| **AST-aware codebase intelligence** | #22745, #22746 | 🔥🔥 Medium — research phase |
| **Persistent memory architecture** | #22819, #22809 | 🔥🔥 Medium — foundational work |
| **Plan mode UX refinements** | #22855, #23230, #23577, #23582 | 🔥🔥 Medium — active iteration |
| **Non-interactive/headless workflows** | #23033, #22855 | 🔥 Medium — enterprise need |
| **Tracker/task management visibility** | #23133, #23131, #23129, #23126, #23125 | 🔥🔥 Medium — polish phase |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Eval flakiness blocking PRs** | High | Workflow friction | #23168, #23166, #23313, #23326 |
| **Memory leaks in long sessions** | Medium-High | Stability risk | #23281 (~1.7GB leak patched) |
| **Subagent context gaps** | High | Reliability failures | #23582, #23608, #22933 |
| **Terminal UX in tmux/screen** | Medium | Daily friction | #22067, #22584 |
| **Model switching latency/cost** | Medium | Operational overhead | #23230 |
| **Workspace pollution from tmp files** | Medium | Git hygiene | #23571 |
| **Cross-platform nvm/Node setup** | Low-Medium | Contributor onboarding | #23605 |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity 2026-03-23/24.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-24

---

## 1. Today's Highlights

GitHub shipped three rapid-fire releases (v1.0.11, v1.0.11-0, v1.0.11-1) bringing **monorepo-native configuration discovery**, **refined session management** (`/clear` now fully abandons sessions vs. `/new` backgrounding them), and **tighter enterprise MCP governance** with organization-wide policy enforcement. The community is actively stress-testing these changes, with fresh reports of MCP loading regressions and authentication edge cases already surfacing.

---

## 2. Releases

| Version | Date | Key Changes |
|--------|------|-------------|
| **v1.0.11** | 2026-03-23 | Model picker improvements; MCP policy warnings for blocked servers; org policy enforcement for third-party MCPs; `~/.agents/skills/` added as personal skill directory |
| **v1.0.11-0** | 2026-03-23 | **Monorepo support**: config discovery at every directory level up to git root; startup message shows loaded hook count; background agent progress improvements |
| **v1.0.11-1** | 2026-03-23 | `/clear` now fully abandons current session; `/new` starts fresh conversation (old session backgrounded); extension hooks now merge instead of overwriting; `sessionStart` hook fixes |

---

## 3. Hot Issues

| # | Status | Title | Why It Matters | Community Pulse |
|---|--------|-------|--------------|-----------------|
| [#33](https://github.com/github/copilot-cli/issues/33) | **CLOSED** | Support OAuth HTTP MCP servers | Unlocks major enterprise integrations (Figma, Atlassian) previously blocked by auth limitations | 36 comments, 107 👍 — long-awaited, now resolved |
| [#640](https://github.com/github/copilot-cli/issues/640) | OPEN | Invalid session ID errors (`read_sql_files`) | Breaks agent continuity for Gemini 3 Preview users; indicates session state corruption | 23 comments, active debugging |
| [#2232](https://github.com/github/copilot-cli/issues/2232) | OPEN | v1.0.11-1 stopped loading `.mcp.json` / `.vscode/mcp.json` | **Direct regression** from monorepo discovery changes; blocking MCP workflows | 6 comments, 8 👍, reported same day as release |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | OPEN | MCP servers disappear — false "disabled by organization" warning | Enterprise users losing registry-configured servers; policy enforcement appears over-eager | Fresh report (0 comments), critical for org admins |
| [#223](https://github.com/github/copilot-cli/issues/223) | OPEN | "Copilot Requests" permission invisible for org-owned tokens | Blocks enterprise automation patterns; security teams need org-level PATs | 13 comments, 57 👍, months-old |
| [#700](https://github.com/github/copilot-cli/issues/700) | OPEN | No way to list supported models with multipliers | Transparency gap for cost-aware model selection | 12 comments, feature request |
| [#1585](https://github.com/github/copilot-cli/issues/1585) | OPEN | macOS Cmd+C broken with alt-screen enabled | Daily friction for experimental users; terminal UX regression | 5 comments, 6 👍 |
| [#1857](https://github.com/github/copilot-cli/issues/1857) | OPEN | Cannot cancel enqueued messages | Control gap during long agent operations; safety/usability issue | 4 comments, 9 👍 |
| [#2088](https://github.com/github/copilot-cli/issues/2088) | OPEN | "Rendered more hooks than during previous render" error | React internals leaking through; stability concern | 3 comments, 7 👍 |
| [#1723](https://github.com/github/copilot-cli/issues/1723) | OPEN | `/ide` fails in VS Code — no active workspace | IDE integration breakage for core workflow | 4 comments, 2 👍 |

---

## 4. Key PR Progress

| # | Status | Title | Impact |
|---|--------|-------|--------|
| [#1253](https://github.com/github/copilot-cli/pull/1253) | **CLOSED** | docs: add experimental mode section to README | Documents `--experimental` flag persistence and autopilot mode — reduces onboarding friction |
| [#959](https://github.com/github/copilot-cli/pull/959) | **CLOSED** | feat: add Ubuntu/Debian apt install support | Expands distribution coverage; `install.sh` now auto-detects Debian-based systems |

*Note: Only 2 PRs had 24h activity. The project's velocity appears concentrated in direct commits/releases rather than community PRs.*

---

## 5. Feature Request Trends

| Theme | Evidence | Direction |
|-------|----------|-----------|
| **MCP Ecosystem Maturity** | #33 (OAuth), #2235 (MCP Profiles), #700 (model listing), #1322 (subagent tool visibility) | Users want granular MCP control: selective loading, profile switching, and deeper observability |
| **Enterprise Governance** | #223 (org tokens), #2236 (false policy warnings), #1707 (policy enforcement) | Tension between security lockdown and developer autonomy; needs clearer policy UX |
| **Session & Hook Extensibility** | #2108 (session_id in hooks), #1857 (cancel queue), #1322 (subagent details) | Power users building automation need richer programmatic control |
| **Terminal UX Polish** | #1585 (Cmd+C), #2237 (Option+Backspace), #2205 (scroll), #1974 (clickable links) | Daily editing interactions need native terminal convention support |

---

## 6. Developer Pain Points

| Issue | Frequency | Severity | Summary |
|-------|-----------|----------|---------|
| **MCP Configuration Fragility** | HIGH | HIGH | v1.0.11's monorepo discovery broke existing `.mcp.json` loading (#2232); org policy warnings are misfiring (#2236, #1707) |
| **Silent Authentication Failures** | MEDIUM | HIGH | `copilot` exits with no output on login issues (#2184) or invalid proxy configs (#2225) — debugging requires trial-and-error |
| **Session State Instability** | MEDIUM | MEDIUM | Invalid session ID errors (#640) and hook lifecycle bugs (#2142, #2076) disrupt agent continuity |
| **macOS Terminal Integration** | MEDIUM | MEDIUM | Alt-screen mode breaking copy (#1585), missing word-delete shortcuts (#2237), auto-copy on select (#2231) |
| **Enterprise Token Permissions** | LOW | HIGH | Org-owned tokens missing "Copilot Requests" scope (#223) blocks corporate automation |

---

*Digest compiled from github.com/github/copilot-cli — 38 issues and 2 PRs active in last 24h.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-24

---

## 1. Today's Highlights

The Kimi Code CLI team shipped **v1.25.0** with a major **plugin system** (Skills + Tools) enabling extensible AI capabilities, alongside critical fixes for web tool execution sync and enhanced git context in prompts. The release closes 6 PRs including subagent refactoring for Wire 1.6 protocol alignment and a new `/loop` command for scheduled recurring tasks—marking one of the most feature-dense drops in recent weeks.

---

## 2. Releases

### [v1.25.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.25.0) — 2026-03-23

| Change | Impact |
|--------|--------|
| **Plugin System (Skills + Tools)** | Extensible architecture with credential injection, multi-plugin repo support, and OAuth/env var auth |
| **Web tool execution sync fix** | Resolves race conditions on cancel/approval states |
| **Git branch/status in prompts** | Better contextual awareness for repository operations |

---

## 3. Hot Issues

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|--------------|----------------|
| [#1548](https://github.com/MoonshotAI/kimi-cli/issues/1548) Model performance degradation in recent update | 🔴 OPEN | User reports quality regression on `kimi-for-coding` since 1.24.0—potential blocker for production users | 2 comments, needs repro details |
| [#1550](https://github.com/MoonshotAI/kimi-cli/issues/1550) Add status lines | 🔴 OPEN | Request for token usage, cwd, and session metadata in terminal UI—addresses power-user visibility gaps | 2 comments, screenshot attached |
| [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334) JetBrains IDE kimi unavailable | 🔴 OPEN | IDE integration breakage affecting JetBrains users—cross-platform reliability concern | 1 comment, image evidence |
| [#1382](https://github.com/MoonshotAI/kimi-cli/issues/1382) Mobile connector proposal | 🟢 CLOSED | Remote session control from mobile devices—closed but represents strong workflow demand | 2 comments, use case: dining out coding |

---

## 4. Key PR Progress

| PR | Author | Status | Feature/Fix |
|----|--------|--------|-------------|
| [#1556](https://github.com/MoonshotAI/kimi-cli/pull/1556) | RealKai42 | 🟢 CLOSED | Version bump to 1.25.0 with changelog sync |
| [#1555](https://github.com/MoonshotAI/kimi-cli/pull/1555) | RealKai42 | 🟢 CLOSED | Web UI adaptation for Wire 1.6 subagent protocol |
| [#1554](https://github.com/MoonshotAI/kimi-cli/pull/1554) | tempurai | 🟢 CLOSED | Comprehensive plugin system documentation |
| [#1553](https://github.com/MoonshotAI/kimi-cli/pull/1553) | RealKai42 | 🟢 CLOSED | Fix: RuntimeError during bridge-task dict iteration on shutdown |
| [#1552](https://github.com/MoonshotAI/kimi-cli/pull/1552) | RealKai42 | 🟢 CLOSED | **Major refactor**: Unified subagent execution with persistent instances and approval bridging |
| [#1551](https://github.com/MoonshotAI/kimi-cli/pull/1551) | Leihb | 🟢 CLOSED | **`/loop` command**: Cron-like scheduled recurring tasks (resolves #1309) |
| [#1549](https://github.com/MoonshotAI/kimi-cli/pull/1549) | CanerKocak | 🔴 OPEN | Configurable compaction providers—dedicated model for context compression |
| [#1545](https://github.com/MoonshotAI/kimi-cli/pull/1545) | n-WN | 🔴 OPEN | Fix: CTRL+Z SIGTSTP handling in raw keyboard mode (resolves #38, #1480) |
| [#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400) | howardpen9 | 🔴 OPEN | ACP 0.8 migration: Replace deprecated `TerminalHandle` with Client methods |
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) | dependabot[bot] | 🔴 OPEN | Ruff 0.15.0 linting upgrade |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Observability & Status UX** | #1550 (status lines), #1548 (performance monitoring needs) | High—users want runtime visibility |
| **Remote/Mobile Workflows** | #1382 (mobile connector), #1551 (`/loop` for async automation) | Growing—distributed development demand |
| **IDE Ecosystem Expansion** | #1334 (JetBrains), implicit VS Code competition | Critical—platform parity gaps |
| **Context Management** | #1549 (configurable compaction), subagent persistence in #1552 | Active—scaling to large codebases |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Current Mitigation |
|------------|-----------|------------------|
| **Model quality regression** | High (#1548) | Under investigation; needs detailed reports |
| **IDE integration fragility** | Medium (#1334) | JetBrains specifically impacted |
| **Terminal UX information density** | Medium (#1550) | No built-in status bar; workaround: external monitoring |
| **Signal handling in interactive mode** | Low but chronic (#38, #1480, #1545) | PR #1545 pending—CTRL+Z suspension bug |
| **ACP protocol churn** | Medium (#1400) | Migration to 0.8 in progress |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity 2026-03-23*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-24

## Today's Highlights

The OpenCode team executed a major compliance-driven removal of Anthropic-specific authentication flows following legal requests, triggering widespread community discussion about OAuth alternatives. Simultaneously, contributors are actively shipping fixes for critical stability issues including tool execution aborts, session idle event reliability, and Windows-specific process spawning regressions.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#18267](https://github.com/anomalyco/opencode/issues/18267) — Claude OAuth broken (429 errors) | **137 comments** — the highest-engagement issue this cycle; users locked out of Claude Pro/Max authentication entirely | Frustration peaked with "killed ??? how can login now" sentiment; 60 upvotes indicates scale of impact |
| [#18362](https://github.com/anomalyco/opencode/issues/18362) — Anthropic OAuth callback fails on Windows | Cross-platform auth regression affecting Windows users specifically; invalid authorization code errors | 47 comments, 30 upvotes; users tested multiple versions (1.2.27, 1.1.37) confirming systemic breakage |
| [#17318](https://github.com/anomalyco/opencode/issues/17318) — SSE read timed out during file writes | Core streaming infrastructure failure interrupting long-running code generation sessions | 46 comments; affects "planning-with-files" skill — critical for software architecture workflows |
| [#266](https://github.com/anomalyco/opencode/issues/266) — Gemini edit tool failures | Long-standing model integration issue; whitespace sensitivity causing "oldString not found" errors | 34 comments since June 2025; community proposing normalization fixes |
| [#13768](https://github.com/anomalyco/opencode/issues/13768) — Opus 4.6 assistant prefill unsupported | Model capability detection gap causing conversation termination | 28 comments; GitHub Copilot integration affected |
| [#18315](https://github.com/anomalyco/opencode/issues/18315) — Claude Pro/Max "Invalid token" | Post-OAuth-removal authentication gap; users attempting workarounds | 22 comments, 28 upvotes; reinstall/cache clearing ineffective |
| [#9674](https://github.com/anomalyco/opencode/issues/9674) — `<tool_call>` tag rendering failures | UI/UX regression breaking conversation flow after long sessions | 17 comments; Oh My Open Code plugin interaction suspected |
| [#18794](https://github.com/anomalyco/opencode/issues/18794) — `/compact` causes unexpected agent continuation | Session management UX issue — users lose control of agent flow | 3 comments; relates to #13217, suggesting pattern of compaction-related bugs |
| [#18813](https://github.com/anomalyco/opencode/issues/18813) — "model_context_window_exceeded" not handled | Non-standard Anthropic/z.ai finish reason causing infinite loops instead of graceful degradation | 2 comments; provider compatibility gap |
| [#3815](https://github.com/anomalyco/opencode/issues/3815) — Deterministic session completion monitoring | SDK reliability issue for programmatic integrations — idle events fire prematurely | 6 comments; enterprise/automation use case impact |

---

## Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| [#18186](https://github.com/anomalyco/opencode/pull/18186) — Remove Anthropic references per legal requests | **Compliance-critical**: Removes `opencode-anthropic-auth` builtin plugin, provider hints, and prompt files | Explains OAuth breakage; community seeking migration path |
| [#18477](https://github.com/anomalyco/opencode/pull/18477) — Poe OAuth auth plugin | **Replacement auth pathway**: Browser-based OAuth + token-based auth for Poe platform | Direct response to Anthropic removal; expands provider options |
| [#18798](https://github.com/anomalyco/opencode/pull/18798) — Restore cross-spawn for Effect child processes | **Windows stability**: Fixes command resolution and shell behavior regression post-Effect migration | Addresses platform-specific execution failures |
| [#16945](https://github.com/anomalyco/opencode/pull/16945) — Emit completion-only idle events | **Session reliability**: Adds `reason` to idle status; prevents false completion signals on interrupt/error | Fixes plugin/SDK integration issues |
| [#18842](https://github.com/anomalyco/opencode/pull/18842) — Auto-review flow and model preferences | **UX enhancement**: Persisted settings for default/review models, auto-queued reviews post-assistant-turn | Workflow automation for code review |
| [#18851](https://github.com/anomalyco/opencode/pull/18851) — Renderer theme mode switching | **UI polish**: Native dark/light mode detection via renderer | Visual consistency improvement |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) — Mobile touch optimization | **Platform expansion**: Touch-friendly interface while preserving desktop experience | Addresses growing mobile developer use case |
| [#18852](https://github.com/anomalyco/opencode/pull/18852) — Normalize external edit permission prompts | **Security/consistency**: Absolute paths for external files, relative for worktree; regression tests added | Permission model hardening |
| [#18280](https://github.com/anomalyco/opencode/pull/18280) — Plugin system robustness improvements | **Extensibility**: Fixes agent/command resolution, async error handling, two-phase initialization | Critical for plugin ecosystem stability |
| [#18849](https://github.com/anomalyco/opencode/pull/18849) — Bump gitlab-ai-provider to 5.3.1 | **Model support**: Adds GPT-5.4, GPT-5.4 Mini, GPT-5.4 Nano proxy models | Keeps GitLab Duo integration current |

---

## Feature Request Trends

1. **Alternative Authentication Providers** — Poe OAuth (#18477) represents community demand for non-Anthropic pathways; broader provider flexibility repeatedly requested
2. **Model Routing Intelligence** — Complexity-based model selection (#18845) indicates need for automatic tiering (cheap/fast vs. capable/expensive)
3. **Enhanced Observability** — OpenTelemetry instrumentation (#6629) with Aspire Dashboard support for debugging production deployments
4. **Mobile-First Experience** — Touch optimization (#18767) signals platform expansion beyond desktop-centric design
5. **WordPress/PHP Ecosystem Support** — Auto-enabling WordPress stubs (#17236) for LSP reflects demand for CMS-specific tooling

---

## Developer Pain Points

| Category | Manifestation | Frequency Indicator |
|----------|-------------|---------------------|
| **Authentication Fragility** | OAuth flow breakages, token refresh failures (429 errors), "Invalid code/token" errors | 5+ high-engagement issues; 200+ combined comments |
| **Tool Execution Reliability** | "Tool execution aborted" errors, SSE timeouts, context window exceeded handling failures | Recurring across bash/edit/read tools; session restart required |
| **Session State Management** | `/compact` behavior unpredictability, idle event timing, interrupt responsiveness | Multiple PRs (#16945, #16943) addressing core state machine |
| **Cross-Platform Consistency** | Windows-specific regressions (character spamming, spawn behavior, path handling) | Dedicated Windows labels; disproportionate issue volume |
| **Model Integration Gaps** | Finish reason handling, prefill support detection, edit tool whitespace sensitivity | Provider-specific workarounds needed repeatedly |
| **Plugin/SDK Contract Stability** | Event listener reliability, deterministic completion detection, hook timing | Enterprise integration blockers |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-24

## Today's Highlights

Qwen Code **v0.13.0** shipped today with OpenRouter pipeline fixes and system prompt customization, capping a flurry of 8 releases in 24 hours. The VSCode IDE Companion saw significant investment with 5 active PRs targeting Plan Mode, LSP improvements, and error handling—though release automation hit snags with 3 failed workflow runs. Windows and input method bugs continue to dominate community pain points.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v0.13.0** (stable) | • Fix: Handle duplicate `finish_reason` chunks from OpenRouter ([#2403](https://github.com/QwenLM/qwen-code/pull/2403))<br>• Feat: System prompt customization optimization<br>• Chore: Version bump via CI |
| v0.13.0-preview.2–.7 | Iterative preview builds; .7 failed VSCode companion release ([#2615](https://github.com/QwenLM/qwen-code/issues/2615)) |
| v0.13.0-nightly.20260323 | Nightly build for bleeding-edge testers |

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#2040](https://github.com/QwenLM/qwen-code/issues/2040) **Project-level Insight** | Machine-level insight forces context switching between projects; enterprise users need isolated project analytics | 17 comments, sustained interest since March 2 |
| [#2603](https://github.com/QwenLM/qwen-code/issues/2603) **Custom session IDs** | CI/CD and automation workflows need deterministic session naming for traceability | 6 comments, fresh request |
| [#2543](https://github.com/QwenLM/qwen-code/issues/2543) **Global Skills file access** | Security sandbox blocks Skills from reading their own documentation files—breaks reusable skill libraries | 3 comments, needs triage |
| [#1151](https://github.com/QwenLM/qwen-code/issues/1151) **ACP plan mode broken** | Core ACP feature fails to respect `--approval-mode plan`, falling back to edit prompts | 3 comments, long-running |
| [#2596](https://github.com/QwenLM/qwen-code/issues/2596) **Extraneous `</think>` tags** | Model output pollution degrades trust in generated code; regression in reasoning tag handling | 2 comments, 👍 1 |
| [#2598](https://github.com/QwenLM/qwen-code/issues/2598) **VSCode terminal Chinese input freeze** | IME deadlock on macOS blocks non-English developers | 1 comment, critical UX |
| [#2553](https://github.com/QwenLM/qwen-code/issues/2553) **Zombie ACP processes** | VSCode extension leaks `qwen-cli --acp` processes, causing 90s shutdown delays | 0 comments, 👍 1 (underreported severity) |
| [#2613](https://github.com/QwenLM/qwen-code/issues/2613) **Product differentiation confusion** | Users can't distinguish Qwen Code, Qoder CLI, and Lingma—branding fragmentation hurts adoption | 1 comment, meta-issue |
| [#2599](https://github.com/QwenLM/qwen-code/issues/2599) **Windows image paste broken** | Alt+V shortcut fails; path-based image reading contradicts itself | 1 comment, Windows-specific |
| [#2558](https://github.com/QwenLM/qwen-code/issues/2558) **Read EIO crash** | Unhandled PTY I/O error crashes CLI—stability concern | 1 comment, needs repro |

---

## Key PR Progress

| PR | Feature/Fix | Target Release |
|----|-------------|--------------|
| [#2525](https://github.com/QwenLM/qwen-code/pull/2525) **Follow-up suggestions** | Context-aware next-step prompts ("commit this", "run tests")—Claude Code NES parity | 0.14.0 |
| [#2551](https://github.com/QwenLM/qwen-code/pull/2551) **Plan Mode toggle + approval UI** | Full Plan Mode support in VSCode Companion with Tab cycling | 0.14.0 |
| [#2548](https://github.com/QwenLM/qwen-code/pull/2548) **`/skills` slash command** | Secondary picker for skill selection in VSCode | 0.14.0 |
| [#2547](https://github.com/QwenLM/qwen-code/pull/2547) **LSP fixes for C++/Java/Python** | Adds missing `textDocument/didOpen` for jdtls, clangd, pylsp | 0.14.0 |
| [#2546](https://github.com/QwenLM/qwen-code/pull/2546) **ACP error handling** | Surfaces CLI crashes instead of silent "Preparing..." hangs | 0.14.0 |
| [#2490](https://github.com/QwenLM/qwen-code/pull/2490) **Coding Plan Authentication** | Alibaba Cloud Coding Plan auth + i18n onboarding | 0.14.0 |
| [#2420](https://github.com/QwenLM/qwen-code/pull/2420) **Ctrl+Y skip rate-limit** | Immediate retry on TPM throttling vs. 60s wait | 0.14.0 |
| [#2611](https://github.com/QwenLM/qwen-code/pull/2611) **PTY race condition fixes** | Graceful handling of `EIO`/`EBADF` on process exit | — |
| [#2612](https://github.com/QwenLM/qwen-code/pull/2612) **Kitty sequence timeout** | 200ms timeout for incomplete escape sequences—fixes IME in VSCode terminal | — |
| [#2277](https://github.com/QwenLM/qwen-code/pull/2277) **Preserve CRLF line endings** | Stops Windows files from being silently converted to LF | — |

---

## Feature Request Trends

1. **Runtime configurability** — Dynamic MCP server enable/disable ([#2617](https://github.com/QwenLM/qwen-code/issues/2617)), custom session IDs, and system prompt customization reflect demand for operational flexibility without file edits.

2. **IDE ecosystem parity** — OSC notify support ([#2528](https://github.com/QwenLM/qwen-code/issues/2528)), image paste from clipboard, and Vim keybindings in dropdowns show users expect terminal-native UX in CLI tools.

3. **Project-scoped operations** — Project-level Insight ([#2040](https://github.com/QwenLM/qwen-code/issues/2040)) and namespace-isolated Skills indicate growth beyond single-repo personal use toward team/enterprise workflows.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Windows instability** | Process cleanup failures, zombie ACP processes, image paste broken, CRLF corruption | High—4+ active issues |
| **Input method / terminal integration** | Chinese IME freeze, keyboard layout focus loss, kitty sequence handling | High—3 issues, affects international users |
| **ACP/Plan Mode reliability** | Silent hangs, plan mode ignored, zombie processes | Medium—core feature gaps |
| **Release automation fragility** | 3 failed workflow runs in 24h (VSCode companion, SDK, generic) | Medium—impacts preview access |
| **Model output hygiene** | `</think>` leakage, web_fetch returning greetings vs. content | Medium—trust erosion in generated output |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*