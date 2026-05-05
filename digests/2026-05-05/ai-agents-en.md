# OpenClaw Ecosystem Digest 2026-05-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-05 00:20 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-05

---

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly maturing but strained project. The 436:64 open-to-closed issue ratio and 412:88 open-to-merged PR ratio suggest **incoming work significantly outpaces resolution capacity**. Four releases shipped recently, with v2026.5.4-beta.1 landing today—primarily iterating on the new file-transfer plugin. A notable cluster of maintainer activity (vincentkoc) closed 5 PRs in rapid succession, focusing on auth stability and SSE streaming reliability. The project appears to be in a **intense stabilization phase** following major feature drops, with gateway reliability and session management emerging as critical pressure points.

---

## 2. Releases

### v2026.5.4-beta.1 (Latest)
- **File-transfer plugin (bundled)**: Adds `file_fetch`, `dir_list`, `dir_fetch`, `file_write` agent tools for binary file operations on paired nodes
- **Security policy**: Default-deny per-node path policy with operator approval required
- **Note**: This is the third iteration of this feature across releases (also appeared in v2026.5.3 and v2026.5.3-beta.3), suggesting refinement in progress

### v2026.5.3-1 (Core npm hotfix)
- **Critical fix**: Security install scanner no longer blocks official bundled plugins when `process.env` access and API sends appear in distant parts of compiled bundles
- **Published**: `openclaw@2026.5.3-1` on beta channel

### v2026.5.3 (Stable)
- Same file-transfer plugin as beta.1 (initial release)

### v2026.5.3-beta.3 (Earlier beta)
- File-transfer plugin pre-release

**Migration note**: Users on v2026.5.3 should upgrade to v2026.5.3-1 for security scanner fix, or v2026.5.4-beta.1 for latest file-transfer capabilities.

---

## 3. Project Progress

### Merged/Closed PRs Today (5 maintainer-merged by vincentkoc)

| PR | Description | Impact |
|---|---|---|
| [#77592](https://github.com/openclaw/openclaw/pull/77592) | Route diagnostics to stderr in `agent --json` mode | Fixes broken JSON piping for CLI automation |
| [#77591](https://github.com/openclaw/openclaw/pull/77591) | Block remote node OAuth writes | Prevents refresh_token_reused incidents; supersedes #42381 |
| [#77589](https://github.com/openclaw/openclaw/pull/77589) | Honor selected usage auth profile | Fixes #58498; corrects provider usage billing attribution |
| [#77588](https://github.com/openclaw/openclaw/pull/77588) | Preserve legacy Codex OAuth profiles | Fixes #47964; backward compatibility for older configs |
| [#77587](https://github.com/openclaw/openclaw/pull/77587) | Keep split SSE frames flowing | Fixes #76305; critical for OpenAI streaming reliability |
| [#77585](https://github.com/openclaw/openclaw/pull/77585) | Refresh plugin SDK API gate + heap cap increase | Prevents OOM during release checks |
| [#77595](https://github.com/openclaw/openclaw/pull/77595) | Route Codex audio to transcription model | Fixes audio model misrouting in Codex mode |
| [#77557](https://github.com/openclaw/openclaw/pull/77557) | Surface Codex usage-limit reset details | Better user-facing error messages for rate limits |

### Open PRs Advancing

| PR | Description | Stage |
|---|---|---|
| [#77565](https://github.com/openclaw/openclaw/pull/77565) | Clear stale Codex session state (doctor command) | Open, large, multi-component |
| [#77555](https://github.com/openclaw/openclaw/pull/77555) | Post-compaction loop guard in pi-embedded-runner | Open, XL—prevents infinite tool-call loops |
| [#77593](https://github.com/openclaw/openclaw/pull/77593) | Bedrock aws-sdk auth refresh after credential rotation | Open—AWS enterprise critical |
| [#73243](https://github.com/openclaw/openclaw/pull/73243) | Abort stuck sessions (diagnostics) | Open—addresses #71127 |

---

## 4. Community Hot Topics

### Most Active Issues (by comments + engagement)

| Issue | Comments | 👍 | Core Need |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 104 | 74 | **Platform parity** — macOS/iOS/Android exist; Linux/Windows desktop apps heavily demanded since January |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APK releases | 23 | 1 | **Distribution friction** — users want GitHub release APKs, not source builds |
| [#52875](https://github.com/openclaw/openclaw/issues/52875) Session_send "no session found" | 20 | 0 | **Inter-agent communication broken** — regression from 2026.3.22 upgrade |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) Community Skill Development & ClawHub | 14 | 1 | **Ecosystem growth** — skill marketplace discovery, quality, monetization gaps |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot modes | 12 | 0 | **Security model** — sandboxing, memory safety, Rust rewrite suggestion |
| [#50096](https://github.com/openclaw/openclaw/issues/50096) Long-Term Memory & Knowledge Management | 12 | 0 | **Agent continuity** — memory plumbing failures, context loss |
| [#75882](https://github.com/openclaw/openclaw/issues/75882) Gateway event-loop stalls | 9 | 1 | **Infrastructure reliability** — cross-channel latency, disconnects |

### Underlying Needs Analysis

- **Desktop expansion** (#75): The 74 upvotes and 104 comments over 4 months show this is the #1 unmet market need. Linux/Windows users are effectively second-class citizens.
- **Build/distribute simplification** (#9443, #50090): Technical barriers to adoption—APKs, skill discovery, onboarding friction.
- **Session/gateway reliability** (#52875, #75882, #51871, #52305): The core "agent talking to agent" promise is fragile; async routing and event-loop stalls break the multi-agent vision.

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#75882](https://github.com/openclaw/openclaw/issues/75882) Gateway event-loop stalls → cross-channel failures | **Critical** | Closed | Yes — root cause fixed, monitoring added |
| [#71127](https://github.com/openclaw/openclaw/issues/71127) Stuck processing sessions never abort | **Critical** | Open | [#73243](https://github.com/openclaw/openclaw/pull/73243) open |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) sessions.json unbounded growth → OOM | **Critical** | Open | None yet |
| [#77241](https://github.com/openclaw/openclaw/issues/77241) Discord plugin secret contract never loaded (dist/ bug) | **High** | Closed | Fixed in release cycle |
| [#77295](https://github.com/openclaw/openclaw/issues/77295) Fal GPT Image 2 routes to wrong endpoint (404) | **High** | Open | None yet |
| [#54253](https://github.com/openclaw/openclaw/issues/54253) LLM Request Failed on RISC-V64 | **High** | Open | None yet |
| [#52875](https://github.com/openclaw/openclaw/issues/52875) Session_send regression — no session found | **High** | Open | None yet |

### Medium Severity

| Issue | Notes |
|---|---|
| [#73148](https://github.com/openclaw/openclaw/issues/73148) Image tool fails opaquely without `sharp` | Poor error messaging, missing fallback |
| [#51871](https://github.com/openclaw/openclaw/issues/51871) Cron jobs not displayed in dashboard | UI regression from 2026.3.13 |
| [#52305](https://github.com/openclaw/openclaw/issues/52305) Async task completion reports lost | Event/wake not session-targeted |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) Hardcoded path `/Users/wangtao` merged | Embarrassing QA gap, cultural/translation friction |
| [#77416](https://github.com/openclaw/openclaw/issues/77416) Discord channel still skipped with env-backed SecretRef | Regression of #76371, fix #76449 missed dist/ layout |

### Regression Pattern
**2026.3.x releases introduced multiple regressions**: session routing (#52875), cron dashboard (#51871), Discord auth (#77416), Telegram delivery (#50040). The rapid release cadence appears to be outpacing test coverage.

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (aligned with active work)

| Request | Issue | Signals |
|---|---|---|
| **Skill priority configuration** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | 7 comments; overlapping skills cause selection chaos—foundational for ClawHub |
| **Denylist for exec-approvals** | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 7 comments, 7 👍; security-critical, complements existing allowlist |
| **Context usage visibility** | [#2597](https://github.com/openclaw/openclaw/issues/2597) | 8 comments; compaction pain is widespread, PR #77555 addresses loop guard |
| **Suppress sub-agent announce** | [#8299](https://github.com/openclaw/openclaw/issues/8299) | 6 comments; model frequently fails ANNOUNCE_SKIP protocol |

### Medium-Term (structural)

| Request | Issue | Blockers |
|---|---|---|
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | Resource allocation, likely waiting for core stability |
| **Long-term memory overhaul** | [#50096](https://github.com/openclaw/openclaw/issues/50096) | Architectural; QMD issues (#54463), sqlite-vec breakage (#65156) |
| **Safe/unsafe ClawdBot modes** | [#6731](https://github.com/openclaw/openclaw/issues/6731) | Rust rewrite suggested; massive undertaking |
| **Model fallback on context exceeded** | [#9986](https://github.com/openclaw/openclaw/issues/9986) | 5 comments; config exists but doesn't trigger on context limit |

### Predicted for v2026.6.x
- Skill priority/denylist (security + ecosystem maturity)
- Session pruning/garbage collection (#55334, #51767)
- Context provenance metadata (#54373) — enables better memory debugging

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|---|---|---|
| **"She starts every conversation from zero"** | #50096 | Core value proposition failure |
| **"The agent processed something. It just wasn't what you sent."** | #51857 | Media/vision pipeline silently fails |
| **"Apparently some wangtao hardcode his working space"** | #51429 | Trust/quality erosion |
| **"Session lane blocked indefinitely"** | #71127, #50739 | Production reliability |
| **"No visible confirmation that the agent received your message"** | #51088 | UX uncertainty in async systems |

### Use Cases
- **Multi-agent teams**: Cron + subagent + ACP spawning is central to power-user workflows, but session lifecycle management is brittle (#51767, #52249, #54342)
- **Cross-platform deployment**: Raspberry Pi (#51871), RISC-V (#54253), DigitalOcean droplets (#67509) — edge/self-hosting is popular but rough
- **Business integrations**: Feishu (#53486), WhatsApp (#50093, #50195), Telegram (#50040, #51628), Discord (#77416) — channel reliability directly impacts operations

### Satisfaction/Dissatisfaction
- **Satisfied with**: Vision, macOS experience, extensibility, active development
- **Dissatisfied with**: Stability regressions, opaque errors, Linux/Windows neglect, memory/session management at scale

---

## 8. Backlog Watch

### Critical Issues Needing Maintainer Attention >30 Days

| Issue | Age | Risk | Why Stalled? |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | 4+ months | Market expansion blocked | Likely resource constraint; 74 👍, no assignee |
| [#2597](https://github.com/openclaw/openclaw/issues/2597) Context/state lost | 3+ months | Core UX degradation | Partially addressed by #77555 but not root cause |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe modes | 3+ months | Security positioning | "Rewrite in Rust" is dismissive; needs product decision |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) ClawHub ecosystem | 6+ weeks | Ecosystem growth | Needs dedicated owner; driftnet mentioned but no PM |
| [#50096](https://github.com/openclaw/openclaw/issues/50096) Long-term memory | 6+ weeks | Competitive parity | Deep architectural; sqlite-vec ABI issues (#65156) compound |

### PRs At Risk of Stale

| PR | Age | Risk |
|---|---|---|
| [#42381](https://github.com/openclaw/openclaw/pull/42381) Block remote node OAuth | 8+ weeks | Superseded by #77591, but #77591 is closed—verify merge status |
| [#59208](https://github.com/openclaw/openclaw/pull/59208) Honor usage auth profile | 5+ weeks | Superseded by #77589 |
| [#76324](https://github.com/openclaw/openclaw/pull/76324) Split SSE frames | 2 days | Superseded by #77587—close or merge? |
| [#74163](https://github.com/openclaw/openclaw/pull/74163) Microsoft tracker | 6 days | Meta-PR, needs maintainer curation |

---

## Project Health Assessment

| Metric | Status | Trend |
|---|---|---|
| Release velocity | High (4 in ~2 days) | ⚠️ Potentially too fast |
| Issue resolution rate | Low (12.8% closed in 24h) | 🔴 Worsening backlog |
| Critical bug response | Moderate (event-loop fixed, stuck sessions in progress) | 🟡 Improving |
| Community engagement | Very high (500 updates/day) | 🟢 Healthy |
| Platform parity | Poor (Linux/Windows missing) | 🔴 Long-term risk |
| Multi-agent reliability | Fragile | 🔴 Core promise at risk |

**Verdict**: OpenClaw is experiencing **growth pains of a project transitioning from "impressive demo" to "production infrastructure."** The file-transfer plugin shows ecosystem maturation, but session management, memory systems, and cross-platform support need sustained investment to match the project's ambition.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
## 2026-05-05 Community Digest Analysis

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing **intense growth pressure** as projects transition from demonstration-grade to production infrastructure. OpenClaw leads in raw activity (500 issues/PRs daily) but exhibits classic scale strain with resolution rates lagging intake by 7:1. The field is consolidating around three architectural patterns: **Node.js/TypeScript runtimes** (OpenClaw, NanoBot, Hermes), **systems-language substrates** (NullClaw in Zig, IronClaw in Rust), and **embedded/edge deployments** (PicoClaw). Cross-project convergence is visible in MCP (Model Context Protocol) adoption, provider failover demands, and session/memory reliability as the dominant pain point. Security posture varies dramatically—from OpenClaw's active auth hardening to CoPaw's unauthenticated gateway default—suggesting the ecosystem has not yet internalized production security requirements.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Trajectory |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.5.4-beta.1 (daily cadence) | ⚠️ **Strained** | Rapid iteration, backlog growing |
| **NanoBot** | 8 | 19 | None (v0.1.5.post3) | 🟢 **Healthy** | Accumulating for major release |
| **Hermes Agent** | 50 | 50 | None (v0.12.0, crash regression) | 🔴 **Critical** | Stabilization post-bad release |
| **PicoClaw** | 29 | 60 | None (v0.2.8, auth broken) | 🟡 **Fragile** | Feature velocity masking regressions |
| **NanoClaw** | 5 | 34 | None (v2 stabilization) | 🟡 **Blocked** | Data loss bug blocks release |
| **NullClaw** | 3 | 5 | **v2026.5.4** (today) | 🟢 **Stable** | Maintenance mode, deliberate pace |
| **IronClaw** | 2 | 19 | None (Reborn architecture) | 🟢 **Advancing** | Major substrate overhaul |
| **LobsterAI** | 1 | 2 | None | 🟡 **Dormant** | Minimal activity, review bottleneck |
| **Moltis** | 1 | 1 | None | 🟡 **Stable** | Low volume, focused reliability |
| **CoPaw (QwenPaw)** | 13 | 22 | None (v1.1.5post1) | 🟡 **Stressed** | High intake, zero issue closure |
| **ZeroClaw** | 50 | 50 | None (v0.8.0 integration) | ⚠️ **Bottlenecked** | 29 open PRs, merge throughput constrained |
| **TinyClaw** | 0 | 0 | — | ⚫ **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | — | ⚫ **Inactive** | No activity |

*\*Health Score: Composite of merge/close rate, critical bug count, release cadence, and community responsiveness*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 10–25× raw activity of nearest active competitor | ZeroClaw matches issue/PR count but with 6× lower merge rate; NanoBot 1/26th the volume |
| **Ecosystem maturity** | File-transfer plugin, ClawHub marketplace, multi-platform apps (macOS/iOS/Android) | PicoClaw has SkillManager; ZeroClaw has SkillForge; neither has distribution parity |
| **Release velocity** | Daily beta releases, 4 in 2 days | NullClaw monthly; NanoBot none in period; Hermes stuck on broken v0.12.0 |
| **Maintainer bandwidth** | vincentkoc merged 5 PRs in rapid succession | singlerider (ZeroClaw) active but overwhelmed; futuremeng (CoPaw) dominant solo contributor |

### Technical Approach Differences

| Aspect | OpenClaw | Peer Alternatives |
|:---|:---|:---|
| **Runtime** | Node.js/TypeScript with plugin SDK | NullClaw (Zig, memory-safe systems); IronClaw (Rust, WASM sandbox); NanoClaw (Chat SDK bridge abstraction) |
| **Session model** | Multi-agent ACP with session lanes | ZeroClaw (context isolation with S0 spillage bug); NanoBot (focus tool persistence); Hermes (state.db deferred write) |
| **Provider abstraction** | OAuth + API key hybrid, per-profile billing | NanoBot (fallback chain for retriable errors); ZeroClaw (50+ provider cost tracking); PicoClaw (FreeRide auto-rotation) |
| **Security model** | Default-deny path policy, operator approval | CoPaw (opt-in auth—critically weaker); NullClaw (Landlock sandbox); IronClaw (capability catalog, never-grant-authority design) |

### Community Size Comparison

OpenClaw's **74 upvotes on Linux/Windows desktop apps** (#75) exceeds total engagement on most peer issues. Its 104-comment threads indicate a **mass user base with unmet platform demands**. By contrast, NanoBot's most discussed issue (#3376, provider failover) has 13 comments; ZeroClaw's onboarding crisis (#6123) has 15. OpenClaw operates at **social proof scale** but risks losing users to PicoClaw/ZeroClaw if platform parity and stability gaps persist.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Provider failover & resilience** | NanoBot (#3376, #3618), ZeroClaw (#6059, #6095), PicoClaw (#2769, #2578), OpenClaw (#77589 billing attribution) | Multi-provider chains; region-block handling; credential rotation; cost tracking across 50+ providers |
| **Session/memory lifecycle integrity** | OpenClaw (#52875, #55334, #71127), Hermes (#14420, #19816, #19818), NanoBot (#3292), ZeroClaw (#5415 S0 spillage), NanoClaw (#2257 data loss) | Pruning/garbage collection; compaction without context loss; crash-resilient state; isolation between chat/cron contexts |
| **MCP ecosystem integration** | NanoClaw (#2242, #2261 ffmpeg), CoPaw (#1977–#1978, #4033), ZeroClaw (#6165 philosophy shift), PicoClaw (#1731 OTel) | Server registration reliability; tool timeout configurability; image content support; WASM vs. ad-hoc tool architecture debate |
| **Streaming/real-time UX** | NanoBot (#3480 Codex deltas, #3625 WhatsApp spam), OpenClaw (#77587 SSE frames), CoPaw (#4034 repetition, #2784 thinking leaks), Hermes (#12221 Feishu cards) | Token-level streaming without channel spam; SSE frame integrity; thinking/reasoning output visibility |
| **Sandbox security hardening** | NullClaw (#882 Landlock default, #883 execve zombies), Moltis (#964 Docker collisions), IronClaw (#3240 WASM signing), OpenClaw (#6731 safe/unsafe modes) | Kernel-native isolation; predictable startup; collision-resistant naming; secrets scope in WASM |
| **Local/self-hosted model parity** | NanoClaw (#2234 llama.cpp), PicoClaw (#28 LM Studio), ZeroClaw (#6180 llama-server), CoPaw (#1480 Ollama IPv6, #4025 ARM64) | Timeout configuration; response format handling; auto-discovery protocols; GLIBC compatibility |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Bet |
|:---|:---|:---|:---|
| **OpenClaw** | Ecosystem breadth & release velocity | Power users, multi-agent teams, ClawHub developers | Plugin SDK + marketplace; rapid iteration |
| **NanoBot** | Production reliability engineering | Enterprise/multi-tenant operators | Fallback chains, configurable memory, SDK completeness |
| **Hermes Agent** | TUI + gateway platform density | Terminal-centric developers, chat-ops teams | `prompt_toolkit` REPL, per-channel routing |
| **PicoClaw** | Edge/embedded & internationalization | Raspberry Pi/Termux/Android deployers, BR/VN users | Cost optimization (FreeRide), structured compression |
| **NanoClaw** | Chat SDK abstraction & MCP tooling | Discord/Slack bot operators, media workflows | `@chat-adapter` bridge, ffmpeg MCP |
| **NullClaw** | Extreme resource efficiency | $5 ARM boards, IoT, offline environments | Zig, no external dependencies, Landlock |
| **IronClaw** | Enterprise security & auditability | Platform engineers, regulated industries | Reborn substrate, config-as-code, capability catalog |
| **CoPaw (QwenPaw)** | Windows ecosystem & streaming model support | Chinese-market developers, Windows-first teams | Qwen integration, conda packaging, Win32 native |
| **ZeroClaw** | Schema evolution & skills marketplace | Self-hosters, Jira/GitHub integrators | Schema v3 migration, hybrid WASM skills |
| **Moltis** | Deterministic sandboxing for parallel execution | Security-conscious multi-tenant deployers | Docker sandbox orchestration, RPC observability |
| **LobsterAI** | Electron desktop, NetEase backing | Desktop-first knowledge workers | Electron app, streaming performance |

**Key architectural tension**: **MCP vs. ad-hoc tools** (ZeroClaw #6165, NanoClaw's ffmpeg server, OpenClaw's bundled plugins) represents a **standards-based vs. integrated tradeoff** that will reshape maintenance surfaces across projects.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Structural Risk)

| Project | Pattern | Risk |
|:---|:---|:---|
| **OpenClaw** | 500 updates/day, 4 releases/2 days | Resolution rate 12.8%; core promise (multi-agent reliability) at risk |
| **ZeroClaw** | 50/50 issues/PRs, 29 open PRs | Merge bottleneck; S0 security bug blocked 29 days; 286 open PRs unconsolidated |
| **PicoClaw** | 60 PRs, 41 merged, features daily | Auth regressions across versions; gateway initialization broken |

### Tier 2: Healthy Accumulation (Controlled Velocity, Preparing)

| Project | Pattern | Signal |
|:---|:---|:---|
| **NanoBot** | 27 updates, 63% merge rate, zero releases | Accumulating for significant release; production reliability focus |
| **NanoClaw** | 34 PRs, same-day fixes, blocked on #2257 | Release-ready except data loss bug; responsive maintainers |
| **CoPaw** | 22 PRs, 15 merged, 13 open issues (0 closed) | High intake but no closure; Windows stress; security default gap |

### Tier 3: Deliberate Progress (Sustainable, Architecture-Focused)

| Project | Pattern | Signal |
|:---|:---|:---|
| **IronClaw** | 19 PRs, Reborn consolidation, default-off gates | Major substrate landing; enterprise targeting; config-as-code EPIC |
| **NullClaw** | 8 updates, released v2026.5.4, critical tests | Maintenance mode; defensive engineering; resource-constrained niche |
| **Hermes Agent** | 50/50 but post-crash stabilization | v0.12.0 release was damaging; security P0s unaddressed; recovery in progress |

### Tier 4: Concerning / Dormant

| Project | Pattern | Concern |
|:---|:---|:---|
| **LobsterAI** | 1 issue closed, 2 stale PRs, zero merges | 41-day-old performance PR unmerged; likely maintainer reduction |
| **Moltis** | 1 bug, 1 diagnostic PR | Low volume acceptable but #964 is critical; community too small for redundancy |
| **TinyClaw, ZeptoClaw** | Zero activity | Effectively inactive |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **"Production infrastructure" gap** | OpenClaw's 7:1 open/closed ratio; ZeroClaw's 286 open PRs; NanoBot's 10-day silent outage (#3618) | **Testing, observability, and graceful degradation** are undervalued vs. feature velocity. Projects investing in canary testing (IronClaw #3235), critical path tests (NullClaw #884), and diagnostic tooling (Moltis #965) will differentiate on trust. |
| **Provider abstraction fatigue** | DeepSeek-V4 breaks across CoPaw, ZeroClaw, NanoBot; Anthropic/Bedrock temperature shapes diverge | **Expect API fragmentation to worsen.** Design provider layers with field optionality, schema migration capability (ZeroClaw #6266), and explicit fallback architecture—not retry loops. |
| **Memory/session as competitive moat** | #50096 (OpenClaw), #14420 (Hermes), #5415 (ZeroClaw S0), #2257 (NanoClaw data loss) | **Context continuity is the core user promise.** Projects solving compaction without loss, crash recovery, and isolation boundaries will capture long-running autonomous use cases. |
| **MCP as de facto standard** | NanoClaw's server registry; CoPaw's MCP hardening; ZeroClaw's philosophy shift (#6165) | **Adopt MCP early for interoperability**, but invest in server lifecycle management (registration, timeout, teardown). The "MCP over ad-hoc tools" debate will resolve toward standards within 2–3 release cycles. |
| **Security defaults as trust signal** | CoPaw #4037 (unauthenticated gateway); Hermes #19897/#19845 (credential exposure); OpenClaw #6731 (safe/unsafe modes) | **Opt-in security is becoming unacceptable.** Projects with default-deny, least-privilege, and transparent secret handling will win enterprise adoption. The "Rust rewrite" suggestion in #6731 reflects market demand for memory safety. |
| **Edge/embedded as emerging battlefield** | PicoClaw's Android/Termux focus; NullClaw's $5 board target; CoPaw's ARM64 llama.cpp | **Local AI sovereignty is shifting from hobbyist to requirement.** Auto-discovery protocols (LM Studio #28), OTA updates (#618), and offline-capable search (#871) are underserved. |
| **Observability as feature** | #886 (NullClaw reasoning output), #19922 (Hermes cost footer), #6356 (ZeroClaw pricing WARN) | **Users need to see agent cognition and cost in real-time.** Thinking blocks, token usage, and execution progress are becoming baseline expectations, not premium features. |
| **Platform parity as adoption gate** | OpenClaw #75 (74 upvotes, 4 months); CoPaw Windows stress; NanoClaw headless Telegram | **macOS-first development excludes majority market.** Linux/Windows desktop and headless/VM deployment are now baseline for infrastructure credibility. |

---

*Report generated from 13 project digests covering 1,247 issues and pull requests active 2026-05-04 to 2026-05-05.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-05

## 1. Today's Overview

NanoBot showed **high development velocity** with 27 total items updated in the last 24 hours (8 issues, 19 PRs), indicating an active, well-maintained project. The merge/close rate is strong at 63% (12/19 PRs), though 5 open issues and 7 open PRs remain in flight. Notably, **zero new releases** were cut despite significant bug fixes landing, suggesting maintainers may be accumulating changes for a larger release. Community engagement is healthy with cross-referencing between issues and PRs, though several critical bugs reported today lack immediate resolution.

---

## 2. Releases

**None** — No new releases published. Current latest remains `v0.1.5.post3` (referenced in bug reports).

---

## 3. Project Progress

### Merged/Closed PRs (12 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#3480](https://github.com/HKUDS/nanobot/pull/3480) | boogieLing | **Restored Codex streaming progress deltas** — enables real-time token streaming for OpenAI Codex provider | Fixes UX gap where channels only received final response |
| [#3281](https://github.com/HKUDS/nanobot/pull/3281) | subalkum | **Configurable memory consolidation ratio** (0.1–0.95) | User-tunable memory compression; addresses feedback from @chengyongru |
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) | mohamed-elkholy95 | **SDK fix: populate `RunResult.tools_used` and `RunResult.messages`** | Long-standing documentation/implementation gap fixed |
| [#3548](https://github.com/HKUDS/nanobot/pull/3548) | Re-bin | **Revert** of feishu streaming card reply-to fix | Indicates #3543 introduced regressions; needs re-implementation |
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | chengyongru | **Safety guard fixes + streamed message drop prevention** | 3-in-1 fix: `/dev/*` path handling, workspace regex, message dropping |
| [#1163](https://github.com/HKUDS/nanobot/pull/1163) | coldxiangyu163 | **LLM fallback chain on retriable errors** (Timeout/503/502/429) | Core reliability feature — closes gap with #3376 request |
| [#3091](https://github.com/HKUDS/nanobot/pull/3091) | OldSuns | **Custom base_url support for Tavily web search** | Proxy/mirror server support for restricted networks |
| [#3080](https://github.com/HKUDS/nanobot/pull/3080) | OldSuns | **Custom provider support + workspace command loading** | Extensibility improvement for agent deployments |
| [#3616](https://github.com/HKUDS/nanobot/pull/3616) | 04cb | **DeepSeek `reasoning_content` backfill fix** | Non-destructive fix for #3554, #3584 — preserves conversation history |
| [#3612](https://github.com/HKUDS/nanobot/pull/3612) | chengyongru | **`nanobot provider logout` CLI command** | OAuth credential clearing for account switches |
| [#3607](https://github.com/HKUDS/nanobot/pull/3607) | yorkhellen | **WhatsApp voice message download support** | Fixes #3604 — audioMessage handling in bridge |
| [#1154](https://github.com/HKUDS/nanobot/pull/1154) | dnd288 | **Mezon channel implementation** | New platform integration |

**Key Advances:** Core reliability (fallback chains, DeepSeek fixes), SDK completeness, multi-platform expansion (Mezon, WhatsApp voice), and operational tooling (logout, configurable memory).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) — Provider/Model Failover | **13 comments**, 👍×1 | **Most discussed**. User `1723229` articulates production need: multi-provider resilience beyond single-provider retry. PR #1163 partially addresses this for retriable errors, but full failover (including 403/region blocks) remains unimplemented. **Underlying need:** Enterprise-grade availability SLA. |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) — Session-Level Focus Tool | **7 comments** | Philosophical feature request for "task board" mental model in agents. PR #3622 implements persistence layer. **Underlying need:** Long-running task reliability amid interruptions — critical for autonomous agent workflows. |
| [#3624](https://github.com/HKUDS/nanobot/pull/3624) — Hallucinated Tool-Call Guard | Fresh PR, novel concept | Detects when LLM *claims* action without actual tool execution. Addresses trust/safety gap in agent autonomy. |

**Trend:** Community is pushing toward **production reliability** (failover, focus persistence, hallucination guards) rather than just feature expansion.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#3618](https://github.com/HKUDS/nanobot/issues/3618) | **Region-locked model causes total agent failure** — `403: This model is not available in your region` killed all tasks from Apr 25–May 4. User recovered via reinstall. | **No fix PR.** Root cause: unhandled 403 without fallback. Related to #3376. |
| 🟡 **High** | [#3625](https://github.com/HKUDS/nanobot/issues/3625) | **WhatsApp spam** — `supports_progress_deltas=True` providers send each token as separate message + final consolidated message. UX-breaking. | **No fix PR.** Channel-specific streaming logic bug. |
| 🟡 **High** | [#2804](https://github.com/HKUDS/nanobot/issues/2804) | DuckDuckGo search hangs indefinitely, blocks entire session | **Closed** — fixed via timeout/abort handling |
| 🟢 **Medium** | [#3554](https://github.com/HKUDS/nanobot/issues/3554) | DeepSeek-V4 `reasoning_content` error on Windows/WebUI/exec tool | **Fixed by #3616** |
| 🟢 **Medium** | [#2665](https://github.com/HKUDS/nanobot/issues/2665) | No provider logout command for account changes | **Fixed by #3612** |

**Stability Assessment:** Two **unfixed critical/high bugs** today — both relate to **provider/model handling edge cases** (region blocks, streaming deltas). These are systemic gaps in the provider abstraction layer.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Full Provider/Model Failover** | #3376, #3618, #1163 | **High** | Partial implementation exists; critical production need; multiple incidents |
| **Session Focus Persistence** | #3292, #3622 | **High** | PR ready; aligns with autonomous agent roadmap |
| **Hallucination Guard** | #3624 | **Medium** | Novel safety feature; opt-in design reduces risk |
| **Xiaomi MiMo Documentation** | #3617, #3619 | **High** | Trivial docs PR ready; community contribution |
| **HF Spaces Multi-Agent Deployment** | #3621 | **Medium** | Experimental; gated by "nightly" designation |
| **MCP ImageContent Support** | #2438 | **Medium** | Long-open PR (since Mar 24); blocked on review? |
| **Tool Hint Length Config** | #3623 | **High** | Small, complete PR; clear user pain point |

---

## 7. User Feedback Summary

### Pain Points
- **"Silent failures are deadly"**: #3618 user's 10-day outage (Apr 25–May 4) due to unhandled 403 — *"还好我有备份的习惯"* ("luckily I have backup habits") implies low trust in recovery
- **Account portability friction**: #2665, #3612 — OAuth credential management is immature
- **Streaming UX inconsistency**: #3625 WhatsApp spam, #3480 Codex delta restoration — channel-specific behaviors diverge

### Use Cases Emerging
- **Multi-provider production deployments** (#3376, #3621) — users treating NanoBot as infrastructure, not toy
- **China-market model integration** (#3617 MiMo, #3618 GLM-5.1 region issues) — geographic diversification pressure
- **Autonomous long-running tasks** (#3292) — shift from chatbot to agent paradigm

### Satisfaction Signals
- Strong community contribution rate (multiple first-time contributors: `honjiaxuan`, `DreamShepherd2006`)
- Responsive maintainer merge velocity (same-day merges for #3612, #3616)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2438](https://github.com/HKUDS/nanobot/pull/2438) — MCP ImageContent | **42 days** open | Medium | MCP ecosystem growth; image tools becoming standard. Needs maintainer review/merge decision |
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) — Provider Failover | **13 days**, 13 comments | **High** | #1163 closed partial gap; needs maintainer response on full architecture |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) — Focus Tool | **16 days**, 7 comments | Medium | PR #3622 ready; needs review/merge |

**Maintainer Attention Recommended:** 
1. **#2438** — Stale PR with clear value, may need rebase
2. **#3376** — High-engagement issue with production impact; architectural decision needed on whether #1163 is "enough"
3. **#3625** — Fresh critical bug, no assignee

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-04/05.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-05

## 1. Today's Overview

Hermes Agent saw **high activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a vibrant but somewhat turbulent development cycle. The project is experiencing **significant stability pressure** following the v0.12.0 release (2026-04-30), with a critical startup crash affecting all platforms due to a `prompt_toolkit` keybinding regression. Security concerns are escalating, with multiple P0 vulnerabilities reported around credential exposure. No new releases were cut today, suggesting maintainers are likely prioritizing stabilization over feature delivery.

---

## 2. Releases

**No new releases today.**  
The latest available release remains **v0.12.0 (2026-04-30)**, which introduced the critical `c-S-c` keybinding regression now affecting Linux and macOS users. Users should monitor for an emergency patch release.

---

## 3. Project Progress

### Merged/Closed PRs Today (20 total; highlights below)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#19952](https://github.com/NousResearch/hermes-agent/pull/19952) | quen0xi | Fixed FTS5 search bug with colon-delimited literals and Windows paths in `SessionDB.search_messages()` | Prevents `no such column` crashes on path queries |
| [#19811](https://github.com/NousResearch/hermes-agent/pull/19811) | briandevans | WeCom: split long markdown into multiple messages instead of silently truncating at 4000 chars | Fixes data loss in enterprise messaging |
| [#12221](https://github.com/NousResearch/hermes-agent/pull/12221) | lancecheney | Feishu: streaming cards, typing feedback, completion metadata | Major UX upgrade for Feishu platform |
| [#15693](https://github.com/NousResearch/hermes-agent/pull/15693) | el-analista | Fixed FD leak in TUI gateway by properly closing `AIAgent` on session teardown | Resource stability improvement |
| [#11581](https://github.com/NousResearch/hermes-agent/pull/11581) | el-analista | Fixed suppressed reply context in gateway skill/chat prompts | Restores conversation threading accuracy |
| [#4455](https://github.com/NousResearch/hermes-agent/pull/4455) | el-analista | Migrated `youtube-transcript-api` to v1.x instance-based API | Dependency compatibility |
| [#17658](https://github.com/NousResearch/hermes-agent/pull/17658) | akamel001 | ACP adapter: `todo` tool renders as live markdown checklist | Better IDE integration |
| [#11103](https://github.com/NousResearch/hermes-agent/pull/11103) | briandevans | Signal platform `enabled=false` now honored over env vars | Config precedence fix |

**Key themes:** Gateway platform reliability (WeCom, Feishu, Signal), search correctness, resource cleanup, and ACP/IDE integration polish.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Status | Core Concern |
|:---|:---:|:---:|:---|:---|
| [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) — CLI crash: Invalid key 'c-S-c' | 7 | 4 | **OPEN** | `prompt_toolkit` Shift modifier incompatibility |
| [#19894](https://github.com/NousResearch/hermes-agent/issues/19894) — macOS: same `c-S-c` crash | 6 | 1 | CLOSED | Platform-specific duplicate of above |
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) — Agent context/memory failure | 5 | 0 | OPEN | Core agent memory reliability |
| [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) — Terminal resize causes status bar duplication | 4 | 0 | OPEN | TUI rendering robustness on macOS |
| [#19915](https://github.com/NousResearch/hermes-agent/issues/19915) — Empty `voice.record_key` crashes REPL | 3 | 0 | OPEN | Config validation gap |

### Underlying Needs Analysis

- **Immediate usability crisis:** The `c-S-c` startup crash is dominating user reports across platforms, indicating insufficient cross-platform keybinding testing in v0.12.0.
- **Memory/trust erosion:** [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) (context failure) represents a fundamental agent capability concern—users expect persistent identity memory.
- **Enterprise TUI polish:** macOS Terminal.app-specific rendering issues suggest the TUI is optimized for modern terminals, neglecting legacy/standard environments.

---

## 5. Bugs & Stability

### Critical (P0)

| Issue | Description | Fix PR? | Platforms |
|:---|:---|:---|:---|
| [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) | CLI crash on startup: `Invalid key 'c-S-c'` — `prompt_toolkit` doesn't support Shift modifier | **Partial** — [#19896](https://github.com/NousResearch/hermes-agent/issues/19896) closed as duplicate, no dedicated fix PR visible | Linux, macOS |
| [#19897](https://github.com/NousResearch/hermes-agent/issues/19897) | `HERMES_REDACT_SECRETS` off-by-default exposes API keys in Telegram/Discord chat output | ❌ No | Telegram, Discord |
| [#4427](https://github.com/NousResearch/hermes-agent/issues/4427) | Subprocess env blocklist bypassed via `/proc/environ` — stripped secrets recoverable | ❌ No | All (Linux) |
| [#19845](https://github.com/NousResearch/hermes-agent/issues/19845) | Session capture leaks API credentials in plaintext to `session_*.json` | ❌ No | All |

### High (P1)

| Issue | Description | Fix PR? |
|:---|:---|:---|
| [#19822](https://github.com/NousResearch/hermes-agent/issues/19822) | Discord message delivery fails when auxiliary tasks run after response ready | ❌ No |

### Medium (P2)

| Issue | Description | Fix PR? |
|:---|:---|:---|
| [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) | Terminal resize causes status bar duplication and blank line flooding (macOS) | [#19948](https://github.com/NousResearch/hermes-agent/pull/19948) open — virtual row height cache fix |
| [#19915](https://github.com/NousResearch/hermes-agent/issues/19915) | Empty `voice.record_key` crashes REPL startup | [#19945](https://github.com/NousResearch/hermes-agent/pull/19945) open — key normalization |
| [#19937](https://github.com/NousResearch/hermes-agent/issues/19937) | Gateway drain hangs on wedged adapter websockets (WSL + Feishu/Weixin) | [#19946](https://github.com/NousResearch/hermes-agent/pull/19946) open — 5s disconnect timeout |
| [#19861](https://github.com/NousResearch/hermes-agent/issues/19861) | `claw migrate` produces wrong `api_mode` for byok-anthropic | ❌ No |
| [#19543](https://github.com/NousResearch/hermes-agent/issues/19543) | Web UI chat does not auto-refresh new messages | ❌ No |

**Stability assessment:** 🔴 **Concerning.** Three open P0 security issues with no visible fix PRs, plus a widespread startup crash. The security posture around credential handling needs immediate maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Description | Likelihood in Next Version |
|:---|:---|:---:|
| [#19852](https://github.com/NousResearch/hermes-agent/issues/19852) | Split main site navigation for new vs returning users | Medium — simple, user-acquisition focused |
| [#19816](https://github.com/NousResearch/hermes-agent/issues/19816) | Session state not written to `state.db` until session end — invisible to external tooling | High — observability critical for production deployments |
| [#19818](https://github.com/NousResearch/hermes-agent/issues/19818) | Session continuation after `max_turns` orphaned from original thread | High — pairs with #19816 for session lifecycle integrity |
| [#19809](https://github.com/NousResearch/hermes-agent/issues/19809) | Per-channel profile routing for Discord (single bot, single gateway) | Medium — reduces operational complexity significantly |
| [#19922](https://github.com/NousResearch/hermes-agent/issues/19922) | Expand `display.runtime_footer` to include all `/usage` variables | Medium — cost monitoring is operational necessity |
| [#16068](https://github.com/NousResearch/hermes-agent/issues/16068) | Configurable auto-continue when max tool-call iterations reached | Medium — autonomy enhancement, already discussed |

**Predicted v0.12.1 priorities:** Session lifecycle improvements (#19816, #19818) and critical security fixes (#19897, #19845) are most likely to ship given production impact.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Can't start the app** | 4+ `c-S-c` crash reports across platforms in 24h | Critical |
| **Secrets exposed in plain sight** | Gateway echoes API keys to chat; session files leak credentials | Critical |
| **Memory doesn't work** | "Agent can't read the context/hermes agent 無法根據上下文與記憶去回答我" | High |
| **Web UI stale state** | Manual refresh required to see responses | Medium |
| **Gateway shutdown hangs** | 90s systemctl timeouts on WSL | Medium |
| **Config migration broken** | `claw migrate` produces non-functional provider configs | Medium |

### Use Cases Emerging

- **Multi-tenant Discord deployments:** Users want single-bot, multi-personality operation (#19809)
- **Real-time cost monitoring:** Operations teams need token usage visibility in chat footers (#19922)
- **Long-running autonomous sessions:** Containerized deployments need crash-resilient session state (#19816)

### Satisfaction Signal

Mixed-to-negative. The v0.12.0 release introduced a **regression affecting basic startup**, which severely undermines trust. However, rapid issue triage (duplicates closed quickly) and active PR flow suggest responsive maintainers.

---

## 8. Backlog Watch

### Long-Unanswered Important Items Needing Maintainer Attention

| Issue/PR | Age | Problem | Risk |
|:---|:---:|:---|:---|
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | ~12 days | Core agent memory/context failure — no assignee, no fix PR | **User trust erosion** — fundamental capability questioned |
| [#4427](https://github.com/NousResearch/hermes-agent/issues/4427) | ~34 days | P0 security: `/proc/environ` subprocess env bypass | **Exploitable in production** — no visible progress |
| [#18060](https://github.com/NousResearch/hermes-agent/issues/18060) | ~5 days | 23 files bypass `get_hermes_home()` — Docker deployments broken | [#19947](https://github.com/NousResearch/hermes-agent/pull/19947) open but incomplete (11 files) |
| [#18131](https://github.com/NousResearch/hermes-agent/pull/18131) | ~4 days | Feishu tool client from env credentials — approved but unmerged | Enterprise integration blocked |
| [#13274](https://github.com/NousResearch/hermes-agent/pull/13274) | ~14 days | Telegram username chat ID support — community PR, needs review | Platform compatibility gap |

### Maintainer Action Recommended

1. **Emergency:** Cut v0.12.1 with `c-S-c` fix and security patches (#19897, #19845, #4427)
2. **Urgent:** Assign owner to #14420 (memory) — longest-running capability regression
3. **This week:** Merge or close stale PRs >10 days old; #13274 and #18131 have clear value

---

*Digest generated from GitHub activity data for NousResearch/hermes-agent on 2026-05-05.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-05

## 1. Today's Overview

PicoClaw shows **strong development velocity** with 60 PRs and 29 issues updated in the last 24 hours, yielding a healthy 68% merge/close rate (41 closed vs. 19 open PRs). The project is actively iterating on v0.2.8 with no new release cut today. Key focus areas include provider stability (OpenAI-compatible, Codex OAuth), channel reliability (Telegram, Gateway initialization), and tooling expansion (web search, session management). Notably, multiple security and authentication regressions have emerged in recent versions, suggesting growing pains as the codebase scales.

---

## 2. Releases

**No new releases** (v0.2.8 remains latest as of 2026-05-01).

---

## 3. Project Progress

### Merged/Closed PRs (41 total; notable items)

| PR | Description | Impact |
|---|---|---|
| [#2731](https://github.com/sipeed/picoclaw/pull/2731) | AWS Bedrock runtime dependency bump (1.50.5 → 1.50.6) | Infrastructure maintenance |
| [#2670](https://github.com/sipeed/picoclaw/pull/2670) | Tool feedback: `pretty_print` + `disable_escape_html` options | Fixes Unicode escape bug (e.g., `\u0026` for `&`) |
| [#2603](https://github.com/sipeed/picoclaw/pull/2603) | **FreeRide tool**: Automated OpenRouter free model rotation | New capability: cost-optimized model fallback |
| [#2336](https://github.com/sipeed/picoclaw/pull/2336) | Fix `thinking_level` resolution from model references | Agent reasoning bugfix |
| [#2333](https://github.com/sipeed/picoclaw/pull/2333) | **Structured context compression** (6-phase algorithm) | Major agent memory/performance improvement |
| [#2332](https://github.com/sipeed/picoclaw/pull/2332) | **SkillManager**: Dynamic skill CRUD operations | Agent extensibility milestone |
| [#2330](https://github.com/sipeed/picoclaw/pull/2330) | Brazilian Portuguese (pt-br) translation + session history UI | Localization + UX |
| [#2329](https://github.com/sipeed/picoclaw/pull/2329) | WhatsApp group message blocking via `GroupTrigger` | Privacy/security hardening |

### Active Development (Open PRs)

| PR | Description | Status |
|---|---|---|
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) | `update_plan` tool port from OpenClaw | **New today** — structured progress tracking |
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | **Gemini web search provider** | **New today** — Google Search grounding integration |
| [#2759](https://github.com/sipeed/picoclaw/pull/2759) | Scope Seahorse retrieval to current session | Security isolation improvement |
| [#2758](https://github.com/sipeed/picoclaw/pull/2758) | Fix Telegram media group album handling | **New today** — multi-photo message support |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | Session management commands (`/status`, `/compact`, `/new`) | User-facing agent control |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) | Fix ChatGPT subscription (OAuth) empty responses | Codex streaming fix |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | Web search YAML config + DuckDuckGo default | Configuration ergonomics |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Topic | Underlying Need |
|---|---|---|---|---|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) — **TTS/ASR Support** | 24 | 0 | Voice interaction architecture | Users want multimodal, hands-free agent operation; PR #1642 exists but unmerged to gateway |
| [#28](https://github.com/sipeed/picoclaw/issues/28) — **LM Studio Easy Connect** | 17 | 2 | Local model accessibility | Non-technical users need friction-free local LLM setup; Android deployment specifically requested |
| [#2578](https://github.com/sipeed/picoclaw/issues/2578) — `openai_compat` drops Authorization header | 13 | 0 | **Critical auth regression** | Enterprise/API-key users blocked from all HTTP providers; silently fails |
| [#618](https://github.com/sipeed/picoclaw/issues/618) — Self-upgrade support | 11 | 2 | Distribution/maintenance | Embedded/IoT deployments (opkg, winget) need OTA updates |
| [#571](https://github.com/sipeed/picoclaw/issues/571) — Tool execution progress feedback | 8 | 0 | UX transparency | Users abandon long-running agents due to perceived hangs |

### Analysis

- **Voice/multimodal** (#1648) is the longest-running unfulfilled demand with architectural design already proposed
- **Local-first deployment** (#28, #618) signals strong hobbyist/edge computing user base
- **Silent failures** (#2578, #2769) indicate testing gaps in authentication flows

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---:|---|---|---|
| 🔴 **Critical** | [#2769](https://github.com/sipeed/picoclaw/issues/2769) | **401 auth failures across all providers** (Groq, OpenRouter, Nvidia) — valid keys rejected | ❌ None yet; reported today |
| 🔴 **Critical** | [#2578](https://github.com/sipeed/picoclaw/issues/2578) | `openai_compat` **never sends Authorization header** — API keys silently dropped | ❌ Closed but may regress; root cause unclear |
| 🟡 **High** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) | **Sandbox escape**: `find /` enumerates filesystem outside workspace | ❌ None; security boundary failure |
| 🟡 **High** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) | Gateway starts with **no channels in v0.2.8** | ❌ None; config loading regression |
| 🟡 **High** | [#2690](https://github.com/sipeed/picoclaw/issues/2690) | Gateway starts with **no channels in v0.2.7** (Docker/QQ) | ❌ None; persistent across versions |
| 🟡 **High** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth: empty assistant responses via `response.output_item.done` | ✅ [#2679](https://github.com/sipeed/picoclaw/pull/2679), [#2581](https://github.com/sipeed/picoclaw/pull/2581) |
| 🟡 **High** | [#2590](https://github.com/sipeed/picoclaw/issues/2590) | Android app: service fails to start (`libpicoclaw.so` execution error) | ❌ None; embedded deployment blocker |
| 🟢 **Medium** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Cron/channel error on hourly task scheduling | ❌ None; Telegram + cron interaction |
| 🟢 **Medium** | [#2753](https://github.com/sipeed/picoclaw/issues/2753) | Build from source: `picoclaw-launcher` missing | ❌ None; documentation/build gap |
| 🟢 **Medium** | [#2684](https://github.com/sipeed/picoclaw/issues/2684) | Skill search: address parsing error (Chinese locale) | ❌ None; internationalization bug |

### Stability Assessment

**Concerning pattern**: Two independent "gateway starts with no channels" reports (#2742, #2690) across v0.2.7-v0.2.8 suggest a **systematic configuration loading regression**. Combined with widespread authentication failures (#2769, #2578), the v0.2.x series appears to have **broken core initialization paths** that need immediate maintainer attention before v0.2.9.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---|---|:---:|---|
| **TTS/ASR voice pipeline** | [#1648](https://github.com/sipeed/picoclaw/issues/1648), PR [#1642](https://github.com/sipeed/picoclaw/pull/1642) | ⭐⭐⭐⭐⭐ | Architecture designed; blocked on gateway integration |
| **Gemini web search grounding** | PR [#2763](https://github.com/sipeed/picoclaw/pull/2763) | ⭐⭐⭐⭐⭐ | PR open today; completes provider trio (Brave/Tavily/Gemini) |
| **Session management commands** | PR [#2491](https://github.com/sipeed/picoclaw/pull/2491) | ⭐⭐⭐⭐⭐ | High user value; slash command pattern established |
| **`update_plan` progress tracking** | PR [#2765](https://github.com/sipeed/picoclaw/pull/2765) | ⭐⭐⭐⭐⭐ | Ports proven OpenClaw pattern; agent UX gap |
| **LM Studio auto-discovery** | [#28](https://github.com/sipeed/picoclaw/issues/28) | ⭐⭐⭐☆☆ | High demand but requires protocol negotiation design |
| **Self-upgrade (OTA)** | [#618](https://github.com/sipeed/picoclaw/issues/618) | ⭐⭐⭐☆☆ | Complex distribution matrix; security implications |
| **Zalo channel** | [#2261](https://github.com/sipeed/picoclaw/issues/2261) | ⭐⭐⭐☆☆ | Regional demand (Vietnam); reference implementation exists |
| **SerpAPI search provider** | [#2232](https://github.com/sipeed/picoclaw/issues/2232) | ⭐⭐⭐⭐☆ | Low effort; fills Brave pricing gap |
| **Web search auto-fallback chain** | [#2582](https://github.com/sipeed/picoclaw/issues/2582) | ⭐⭐⭐⭐☆ | Complements FreeRide tool pattern; reliability win |
| **OTel GenAI observability** | [#1731](https://github.com/sipeed/picoclaw/issues/1731) | ⭐⭐☆☆☆ | Enterprise feature; low current traction |
| **Authula integration** | [#1067](https://github.com/sipeed/picoclaw/issues/1067) | ⭐⭐☆☆☆ | Security demand but architectural decision pending |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|:---:|
| **Authentication mysteriously fails** | [#2769](https://github.com/sipeed/picoclaw/issues/2769), [#2578](https://github.com/sipeed/picoclaw/issues/2578) | 🔴 Critical |
| **Gateway/channel initialization silent failures** | [#2742](https://github.com/sipeed/picoclaw/issues/2742), [#2690](https://github.com/sipeed/picoclaw/issues/2690), [#1708](https://github.com/sipeed/picoclaw/issues/1708) | 🔴 Critical |
| **Sandbox security incomplete** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) | 🟡 High |
| **Android/embedded deployment fragile** | [#2590](https://github.com/sipeed/picoclaw/issues/2590), [#2675](https://github.com/sipeed/picoclaw/issues/2675), [#28](https://github.com/sipeed/picoclaw/issues/28) | 🟡 High |
| **No visibility into long-running tasks** | [#571](https://github.com/sipeed/picoclaw/issues/571) | 🟢 Medium |
| **Build from source documentation gaps** | [#2753](https://github.com/sipeed/picoclaw/issues/2753) | 🟢 Medium |

### Positive Signals

- **Strong contributor velocity**: Multiple feature PRs daily (#2763, #2765, #2758 all opened today)
- **Tool ecosystem expanding**: FreeRide, Gemini search, `get_current_time`, `update_plan` all in flight
- **Internationalization**: pt-br translation merged; Zalo, Chinese platforms actively supported
- **Standards alignment**: Agent Skills `.well-known` URI support (#2101), OTel GenAI (#1731)

### User Archetypes

1. **Edge/embedded deployers** (Raspberry Pi, Android, Termux) — need robust binaries, OTA updates, local model support
2. **Multi-channel bot operators** (Telegram, Feishu, QQ, WhatsApp) — need reliable gateway initialization, group privacy controls
3. **Cost-conscious API users** — driving FreeRide, OpenRouter fallbacks, free tier providers
4. **Enterprise/observability** — early OTel, auth standards adoption

---

## 8. Backlog Watch

### Issues Needing Maintainer Triage (>2 weeks old, unresolved, high impact)

| Issue | Age | Problem | Action Needed |
|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | ~84 days | Most-commented open issue; blocks local LLM adoption | Design LM Studio discovery protocol or document manual workaround |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) Cron channel errors | ~47 days | Agent scheduling broken on Telegram | Reproduce cron+channel lifecycle interaction |
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) LongCat API tool calls fail | ~39 days | Provider-specific tool invocation | Verify against LongCat API spec |
| [#2232](https://github.com/sipeed/picoclaw/issues/2232) SerpAPI missing | ~34 days | Search provider gap after Brave pricing change | Evaluate PR feasibility or document alternative |
| [#2582](https://github.com/sipeed/picoclaw/issues/2582) Search API quota fallback | ~16 days | Reliability feature; complements #2232 | Design fallback chain architecture |

### PRs Stalled/Awaiting Review

| PR | Age | Blocker |
|---|---|---|
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) Session management commands | ~23 days | Needs review; conflicts possible with session compression (#2333) |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) Web search YAML + DuckDuckGo default | ~11 days | Straightforward; likely ready to merge |
| [#2581](https://github.com/sipeed/picoclaw/pull/2581) Codex stream recovery | ~16 days | Competing with #2679; needs consolidation decision |

### Critical Decision: Authentication Regressions

**[#2769](https://github.com/sipeed/picoclaw/issues/2769)** and **[#2578](https://github.com/sipeed/picoclaw/issues/2578)** represent a **potential v0.2.8 blocker**. The pattern of API key handling failures across multiple providers suggests a shared configuration parsing or HTTP client regression introduced in the v0.2.6-v0.2.8 window. Recommend:
1. Immediate bisect to identify offending commit
2. Hotfix release v0.2.9 if confirmed
3. Add integration tests for all major provider auth flows

---

*Digest generated from 29 issues and 60 PRs updated 2026-05-04 to 2026-05-05.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-05

## 1. Today's Overview

NanoClaw shows **high engineering velocity** with 34 PRs updated in the last 24 hours (19 merged/closed, 15 open) and 5 active issues. The project is in an intensive **stabilization phase for v2**, with significant focus on container configuration durability, MCP server integration reliability, and Chat SDK channel parity. No new releases were cut today, suggesting maintainers are accumulating fixes before a version bump. The contributor base is actively engaged, with multiple same-day PR responses to fresh issues.

---

## 2. Releases

**None today.**

---

## 3. Project Progress

### Merged/Closed PRs (19 total, key highlights)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#2242](https://github.com/qwibitai/nanoclaw/pull/2242) | mashkovtsevlx | **fix(agent-runner): derive MCP allowedTools from registered mcpServers** | Closes [#2241](https://github.com/qwibitai/nanoclaw/issues/2241); unblocks all `add_mcp_server` registrations |
| [#2251](https://github.com/qwibitai/nanoclaw/pull/2251) | axxml | Add `namespacedPlatformId` exclusion for DeltaChat | Platform compatibility fix |
| [#2055](https://github.com/qwibitai/nanoclaw/pull/2055) | dooha333 | Inject `~/.local/bin` into PATH for post-install `onecli` | Setup reliability |
| [#2254](https://github.com/qwibitai/nanoclaw/pull/2254) | ulimonte05 | WhatsApp business flow integration (`rial` module) | Closed without merge — likely superseded or needs revision |
| [#2258](https://github.com/qwibitai/nanoclaw/pull/2258) | CrAzyScreamx | `/add-ffmpeg-tool` MCP server (duplicate, closed) | Superseded by [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) |

### Notable Open PRs Advancing

| PR | Author | What It Moves Forward |
|---|---|---|
| [#2266](https://github.com/qwibitai/nanoclaw/pull/2266) | glifocat | Bumps `@chat-adapter/*` to 4.27.0, fixes Discord card duplication |
| [#2265](https://github.com/qwibitai/nanoclaw/pull/2265) | glifocat | Implements `send_card` support in Chat SDK bridge |
| [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) | CrAzyScreamx | New `ffmpeg/ffprobe` MCP skill for media transformation |
| [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) | ddaniels | Agent-to-agent reply routing to originating session |
| [#2259](https://github.com/qwibitai/nanoclaw/pull/2259) | gavrielc | Baileys v6→v7 upgrade for WhatsApp LID handling |

---

## 4. Community Hot Topics

### Most Active by Engagement Potential

| Item | Comments | Analysis |
|---|---|---|
| [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) — llama.cpp compatibility | 1 comment | **Core interoperability demand**: Users expect NanoClaw to match Claude Code's seamless `llama.cpp`/`llama-server` integration. The "assistant didn't reply in time" vs. server-side success logging suggests a **timeout/response parsing mismatch** in NanoClaw's provider layer. Underlying need: **local/self-hosted model parity with commercial providers**. |
| [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) + [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) | 0 comments each, but paired fix PRs | **Chat SDK feature gap**: `send_card` is completely non-functional across all Chat SDK channels, and Discord specifically duplicates card content. These are **discovered-in-production** regressions from the `@chat-adapter` 4.26.0 release. Rapid same-day PRs (#2265, #2266) indicate maintainers treat this as P0-adjacent. |

### Underlying Needs Analysis

- **Local AI sovereignty**: [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) reflects a segment of users avoiding cloud API dependencies
- **Channel SDK reliability**: Multiple `chat-adapter` issues suggest the abstraction layer is a **fragile surface**; users need card/rich-media features to work identically across Discord, Slack, Telegram, etc.
- **Operational transparency**: "Silent no-op" and "silent data loss" patterns in bugs indicate **missing observability/validation** in critical paths

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) | **Silent data loss**: Corrupt `container.json` wiped on next spawn — all per-group config (mounts, MCP servers, packages, allowed tools) lost | **None yet** — *critical gap* |
| 🟡 **Medium** | [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) | Discord card duplication via `@chat-adapter/*@4.26.0` | [#2266](https://github.com/qwibitai/nanoclaw/pull/2266) (open) |
| 🟡 **Medium** | [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) | `send_card` MCP tool silent no-op on all Chat SDK channels | [#2265](https://github.com/qwibitai/nanoclaw/pull/2265) (open) |
| 🟡 **Medium** | [#2241](https://github.com/qwibitai/nanoclaw/issues/2241) | `add_mcp_server` registrations dropped by `allowedTools` filter | **Fixed** — [#2242](https://github.com/qwibitai/nanoclaw/pull/2242) merged |

### Regression Pattern

Two bugs ([#2263](https://github.com/qwibitai/nanoclaw/issues/2263), [#2264](https://github.com/qwibitai/nanoclaw/issues/2264)) stem from **Chat SDK bridge incompleteness** and **adapter version pinning**. The v2 rewrite appears to have **reduced test coverage for channel-specific message shapes**. The unaddressed [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) is a **data integrity failure** that could destroy production configurations.

---

## 6. Feature Requests & Roadmap Signals

| Source | Request | Likelihood in Next Release |
|---|---|---|
| [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) — `/add-ffmpeg-tool` | Media transformation MCP server (`ffmpeg`, `ffprobe`) | **High** — PR open, follows guidelines, fills clear gap |
| [#2248](https://github.com/qwibitai/nanoclaw/pull/2248) — per-wiring channel permissions | `read | write | read+write` granularity for channel-agent wiring | **Medium** — architectural change, needs review bandwidth |
| [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) — a2a reply routing | Multi-session agent groups need reply-to-originator | **High** — bug fix for broken multi-channel behavior |
| [#2259](https://github.com/qwibitai/nanoclaw/pull/2259) + [#2260](https://github.com/qwibitai/nanoclaw/pull/2260) | WhatsApp Baileys v7 + LID migration cleanup | **High** — paired PRs, addresses production split-session issues |
| [#2246](https://github.com/qwibitai/nanoclaw/pull/2246), [#2249](https://github.com/qwibitai/nanoclaw/pull/2249) | Telegram setup UX: BotFather QR, mobile fallback | **Medium** — polish items, low risk |

### Predicted Next Version Focus

- **MCP ecosystem expansion** (ffmpeg, more servers)
- **WhatsApp stability** (v7 migration, LID resolution)
- **Chat SDK parity** (cards, rich media)
- **Container config durability** (must address [#2257](https://github.com/qwibitai/nanoclaw/issues/2257))

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Silent failures** | [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) "silent no-op", [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) "silent data loss" | Critical — erodes trust |
| **Local model support gaps** | [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) llama.cpp timeout vs. Claude Code working | High — competitive disadvantage |
| **Setup friction on headless/VM** | [#2249](https://github.com/qwibitai/nanoclaw/pull/2249) Telegram card assumes desktop client | Medium |
| **Multi-session confusion** | [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) a2a replies land in wrong session | High — breaks agent-group workflows |

### Positive Signals

- **Responsive maintainer team**: Same-day PRs for [#2264](https://github.com/qwibitai/nanoclaw/issues/2264)/[#2263](https://github.com/qwibitai/nanoclaw/issues/2263) (glifocat), [#2241](https://github.com/qwibitai/nanoclaw/issues/2241) (mashkovtsevlx)
- **Contributor growth**: Multiple first-time or recent contributors (CrAzyScreamx, alipgoldberg, gavrielc)
- **Structured contributions**: Most PRs follow the `contributing-guide: v1` template

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|---|---|---|---|
| [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) — corrupt `container.json` silent wipe | **1 day old but HIGH severity** | 🔴 **Critical** — data loss in production; no PR yet | Immediate maintainer assignment, possibly emergency patch release |
| [#2123](https://github.com/qwibitai/nanoclaw/pull/2123) — suppress duplicate text in `send_message` | 6 days open | Duplicate UX degradation; fix designed but unmerged | Review/merge or conflict resolution |
| [#2143](https://github.com/qwibitai/nanoclaw/pull/2143) — admin cancel commands for active agent runs | 5 days open | Operational safety gap — runaway agents can't be killed | Product decision on admin surface area |
| [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) — llama.cpp compatibility | 2 days old | Community expansion blocker for local/self-hosted users | Provider-layer investigation; likely timeout config or response format handling |

---

## Project Health Assessment

| Metric | Status |
|---|---|
| Velocity | 🟢 Strong — 34 PRs, rapid issue-to-PR turnaround |
| Stability | 🟡 Fragile — silent failures, data loss risk, Chat SDK regressions |
| Responsiveness | 🟢 Good — same-day fixes for reported bugs |
| Release readiness | 🔴 **Blocked** — [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) data loss bug must be resolved before any release |

**Recommendation**: Prioritize [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) fix and cut a hotfix release; the current `main` has a known high-severity data destruction path.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-05

## 1. Today's Overview

NullClaw shows **moderate-to-high activity** with 8 total updates in the past 24 hours (3 issues, 5 PRs), culminating in the **v2026.5.4 release**. The project demonstrates healthy momentum with 2 merged/closed PRs versus 3 remaining open, including one critical build fix for Zig v0.16. Notably, the community is actively pushing on security hardening (sandbox defaults, executable probing) and observability (reasoning/thinking output), suggesting maturation beyond core functionality toward production readiness. The presence of a hackathon submission indicates growing external contributor interest. However, three open issues with zero reactions may signal maintainer bandwidth constraints or community uncertainty about prioritization.

---

## 2. Releases

### [v2026.5.4](https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.4) — Released 2026-05-04

| Aspect | Details |
|--------|---------|
| **Version bump** | Routine release by @DonPrus ([PR #830](https://github.com/nullclaw/nullclaw/pull/830)) |
| **Skills system hardening** | **Agent Skills RFC 0.2.0 compliance** + strengthened web skill fetch logic ([PR #831](https://github.com/nullclaw/nullclaw/pull/831) by @manelsen) |
| **Incomplete changelog** | Release notes truncated ("feat: add to" — likely cut off, suggesting rushed release or tooling issue) |

**Assessment**: This appears to be a **maintenance/security release** rather than feature-heavy. The RFC 0.2.0 support indicates evolving standards compliance—users relying on custom skills should verify compatibility. The truncated changelog is a minor concern for transparency.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Author | Impact |
|----|--------|--------|
| [#888 v2026.5.4](https://github.com/nullclaw/nullclaw/pull/888) | @DonPrus | Release orchestration — version bump merged |
| [#884 Fix/add crit tests](https://github.com/nullclaw/nullclaw/pull/884) | @DonPrus | **Critical Zig test coverage** for "high-risk runtime contracts": ownership, lifecycle, security, routing, parser, and registry subsystems; fixes production issues exposed by testing |

**Key advancement**: The critical tests PR represents **defensive engineering investment**—documenting expected behavior at system boundaries rather than chasing test volume. This suggests the team recognizes stability risks in Zig's memory safety model and is proactively hardening.

---

## 4. Community Hot Topics

### By Engagement (Comments)

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#871 web_search impractical on low-resource devices](https://github.com/nullclaw/nullclaw/issues/871) | **5 comments** | **Core architectural tension**: NullClaw's value proposition (cheap/weak hardware) conflicts with its web search implementation requiring paid APIs (Brave) or complex infrastructure. DuckDuckGo direct support requested as zero-config alternative. Underlying need: **frictionless, free, offline-capable or low-bandwidth operation** |
| 2 | [#882 Sandbox: default to Landlock, stop probing external tools](https://github.com/nullclaw/nullclaw/issues/882) | **2 comments** | Startup performance/security trade-off: spawning `firejail`, `bwrap`, `docker` child processes at boot creates latency and failure modes. Landlock (kernel-native, no external deps) proposed as Linux default. Underlying need: **predictable, fast startup on constrained environments** |
| 3 | [#883 probe: resolve executable before spawning](https://github.com/nullclaw/nullclaw/pull/883) | **0 comments, but directly addresses #882** | Zig stdlib bug workaround: failed `execve` leaves zombie state. Pre-spawn PATH resolution added. Underlying need: **reliable process management, defense against stdlib defects** |

**Synthesis**: The hottest topic (#871) reveals a **product-market fit risk**—if NullClaw can't run web search on a $5 ARM board without API keys, the "cheap device" narrative weakens. The sandbox discussion (#882/#883) shows operational maturity concerns.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **🔴 Critical** | [#871 web_search broken on low-resource devices](https://github.com/nullclaw/nullclaw/issues/871) | Open since 2026-04-25, active discussion | **None linked** — architectural discussion stage |
| **🟡 High** | [Zig stdlib execve zombie bug](https://github.com/nullclaw/nullclaw/pull/883) (affects probe spawning) | PR #883 open, ready for review | **Self-fixing** — @mark-os submitted |
| **🟡 High** | [Sandbox startup probing failures](https://github.com/nullclaw/nullclaw/issues/882) | Open, 2 comments | **Partial** — #883 addresses symptom (probe resolution), not root cause (default backend selection) |

**Regression watch**: The v2026.5.4 release's "harden web skill fetch" ([PR #831](https://github.com/nullclaw/nullclaw/pull/831)) suggests previous web skill fetching was brittle—users should monitor for new fetch failures.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Reasoning/thinking output toggle** | [#886](https://github.com/nullclaw/nullclaw/issues/886) | **High** | Zero comments but zero opposition; common in agent frameworks (OpenAI reasoning tokens, Claude thinking blocks); low implementation cost, high UX impact |
| **Landlock default sandbox on Linux** | [#882](https://github.com/nullclaw/nullclaw/issues/882) | **Medium-High** | PR #883 shows active work in adjacent code; aligns with "cheap device" mission by removing Docker/Firejail dependencies |
| **DuckDuckGo native web search** | [#871](https://github.com/nullclaw/nullclaw/issues/871) | **Medium** | 5 comments show demand, but requires scraping infrastructure or DDG API partnership; may conflict with "no external dependencies" goal |
| **Data Governance Layer** | [#885](https://github.com/nullclaw/nullclaw/pull/885) | **Low (hackathon)** | External hackathon submission by "Безопасность бэкофиса (DS)" team; interesting but draft status, needs maintainer review |

**Prediction**: v2026.5.x or v2026.6 will likely include **observability improvements** (#886) and **sandbox simplification** (#882/#883). Web search rework depends on maintainer prioritization vs. API strategy.

---

## 7. User Feedback Summary

### Pain Points

| Source | Pain | Context |
|--------|------|---------|
| #871 @uMendex | **"API key tax" on cheap hardware** | "practical options seem to be: 1. Use Brave Search API, which requires an external API key" — core value proposition erosion |
| #886 @darklight9811 | **Opaque execution, potential hangs** | "running for 30 minutes and its not displaying anything... I dont know what is doing or if its stuck" — **trust/observability crisis** in long-running agent tasks |
| #882 @mark-os | **Startup unpredictability** | Recurring issues from external tool probing; implicit dependency on system state |

### Use Case Signals

- **Edge/embedded deployment**: Repeated emphasis on "weak, cheap, low-resource devices" suggests IoT, home automation, or developing-market deployment scenarios
- **MCP integration**: Outlook MCP mentioned in #886 — Microsoft ecosystem connectivity is active use case
- **Security-conscious environments**: Sandbox hardening + data governance hackathon indicate enterprise/backoffice interest

### Satisfaction/Dissatisfaction

| Satisfied | Dissatisfied |
|-----------|--------------|
| Release cadence (regular v2026.x.x) | Transparency (truncated changelog, no reasoning output) |
| Security investment (tests, sandbox) | Resource efficiency (web search, startup probing) |

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#871 web_search low-resource](https://github.com/nullclaw/nullclaw/issues/871) | **10 days** | **High** — oldest active issue, most commented, no maintainer response pattern visible | Decision: commit to DuckDuckGo integration, document workaround, or deprecate low-resource claim |
| [#887 Zig v0.16 build fix](https://github.com/nullclaw/nullclaw/pull/887) | 1 day | **Medium** — build breakage blocks contributors on latest Zig | Review/merge urgency; Zig ecosystem moves fast, lag risks contributor attrition |
| [#885 Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885) | 1 day | **Medium** — hackathon deadline pressure, may stall post-event | Maintainer triage: architectural fit assessment, team contact for follow-through |

**Maintainer attention gap**: No issues/PRs from today have maintainer comments visible in data. The 5-comment #871 and critical build fix #887 both warrant explicit maintainer engagement to prevent contributor frustration.

---

*Digest generated from GitHub activity 2026-05-04 to 2026-05-05. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-05

## 1. Today's Overview

IronClaw saw **high engineering velocity** with 19 PRs updated in the last 24 hours (11 open, 8 merged/closed) and 2 active issues, indicating sustained development momentum on the "Reborn" architecture overhaul. The project is in a **consolidation phase**: a 7-PR reborn-memory stack was collapsed into a single PR (#3180), while the broader Reborn substrate is being landed behind default-off gates (#3230) to reduce branch drift. No new releases were published. Core contributors (nickpismenkov, ilblackdragon, zmanian, serrrfirat) dominate the activity, with security and WASM credential signing emerging as new focus areas from newer contributors.

---

## 2. Releases

**No new releases** published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (8 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| **#3180** | nickpismenkov | **Reborn memory substrate — consolidated mega-PR** (native-isolated guardrails, lib.rs module split, plus squash-merged content from PRs #3181–#3185) | [nearai/ironclaw#3180](https://github.com/nearai/ironclaw/pull/3180) |
| #3181 | nickpismenkov | Reborn native schema + empty repo wiring (closed, merged into #3180) | [nearai/ironclaw#3181](https://github.com/nearai/ironclaw/pull/3181) |
| #3182 | nickpismenkov | Native libSQL repository behavior (closed, merged into #3180) | [nearai/ironclaw#3182](https://github.com/nearai/ironclaw/pull/3182) |
| #3183 | nickpismenkov | Native Postgres repository behavior (closed, merged into #3180) | [nearai/ironclaw#3183](https://github.com/nearai/ironclaw/pull/3183) |
| #3184 | nickpismenkov | Port pure-behavior contract over native repos (closed, merged into #3180) | [nearai/ironclaw#3184](https://github.com/nearai/ironclaw/pull/3184) |
| #3185 | nickpismenkov | Vertical integration through public seams (closed, merged into #3180) | [nearai/ironclaw#3185](https://github.com/nearai/ironclaw/pull/3185) |
| #3242 | zetyquickly | Add mission markdown file (missing docs) | [nearai/ironclaw#3242](https://github.com/nearai/ironclaw/pull/3242) |
| #3241 | zetyquickly | Demo/Abound fix missions: target rate checking with termination support | [nearai/ironclaw#3241](https://github.com/nearai/ironclaw/pull/3241) |
| #2390 | georgeglarson | Fix default image detail to 'auto' for OpenAI-compatible vision | [nearai/ironclaw#2390](https://github.com/nearai/ironclaw/pull/2390) |

### Key Advances

- **Reborn memory infrastructure**: The consolidated #3180 delivers native-isolated guardrails, full libSQL/Postgres repository implementations, behavior contracts, and vertical integration tests — a major substrate milestone.
- **Abound demo hardening**: Target rate checking missions can now auto-terminate on success (#3241), plus credential injection and forex timing intelligence remain in active development (#1764).
- **OpenAI vision compatibility**: Fixed `detail: None` causing failures with all OpenAI-compatible providers (#2390).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **[#3036] Configuration-as-Code for IronClaw Reborn** | 3 comments, 1 👍, updated 2026-05-04 | [nearai/ironclaw#3036](https://github.com/nearai/ironclaw/issues/3036) |
| **[#3090] Add ToolSurfaceService and CapabilityCatalog** | 3 comments, updated 2026-05-04 | [nearai/ironclaw#3090](https://github.com/nearai/ironclaw/issues/3090) |

**Underlying needs:**

- **#3036 (Config-as-Code)**: Two operator personas — platform engineers and use-case developers — need **declarative, versioned, auditable configuration** replacing the current fragmented `.env`/JSON/workspace-doc mix. The EPIC signals demand for **GitOps-style tenant blueprints and harnesses**, suggesting IronClaw is targeting enterprise/multi-tenant deployment at scale. The "no schema, no diff, no audit trail" pain point is a competitive vulnerability vs. Terraform/Pulumi-backed alternatives.

- **#3090 (ToolSurfaceService)**: The explicit "**visibility only — must never grant authority**" framing reveals deep architectural concern about **capability leakage between host runtime and model context**. This is a security-critical design boundary for the Reborn architecture, ensuring the model sees tool metadata without bypassing host-side authorization.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **HIGH** | **#3157: Gate await regression in CodeAct scripts** | Open, fix PR active | `EngineError::GatePaused` incorrectly surfaces as `RuntimeError: execution paused by gate 'approval'` inside scripts instead of pausing for user approval. Breaks Tier 0/1 approval gates for interactive tool use. [nearai/ironclaw#3157](https://github.com/nearai/ironclaw/pull/3157) |
| **HIGH** | **#3240: WASM per-request credential signing** | Open, new PR | Adds HMAC/EIP-712/NEP-413 signing but marked `risk: high` due to secrets/sandbox scope. Potential security surface expansion needing careful review. [nearai/ironclaw#3240](https://github.com/nearai/ironclaw/pull/3240) |
| **MEDIUM** | **#3235: Live Canary auth lane failures (3+ days)** | Open, fix PR active | Engine-v2 callable-only contract change broke `Auth Smoke`, `Auth Full`, `Auth Live Seeded` tests. Canary has failed every run since 2026-05-01. [nearai/ironclaw#3235](https://github.com/nearai/ironclaw/pull/3235) |
| MEDIUM | #1764: Abound demo — Responses API, credential injection | Open, ongoing | Large-scope demo PR with production fixes; high risk due to secrets/sandbox/agent/channel surface area. [nearai/ironclaw#1764](https://github.com/nearai/ironclaw/pull/1764) |

**Stability assessment**: The 3-day Live Canary outage (#3235) is a **CI/CD reliability concern** — auth is a critical path. The gate regression (#3157) affects interactive safety guarantees. Both have active fix PRs.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Runtime policy vocabulary / presets** | #3243 (PR 1 of 8 for #3045) | **High** — foundational contract work, no behavior changes yet, but 7 more PRs queued |
| **Reborn event store + projections** | #3171, #3212 | **High** — both open, core contributor work, infrastructure for audit/replay |
| **Reborn substrate cutover** | #3230 | **Medium** — landed behind gates, needs explicit later PR to enable |
| **WASM credential signing (HMAC/EIP-712/NEP-413)** | #3240 | **Medium** — new contributor, high risk, may need iteration |
| **WeChat channel** | #1666 | **Low-Medium** — open since March 26, large scope, may slip |
| **Config-as-Code blueprints** | #3036 (EPIC) | **Low** — design phase, no implementation PRs visible |

**Prediction**: The next release will likely focus on **Reborn infrastructure completion** (event store, projections, runtime policy resolver) rather than user-visible features. The Abound demo (#1764) may drive a tagged release if production deployment is imminent.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Configuration fragility** | #3036: "hand-edit a mix of `.env`, workspace docs, settings JSON... no schema, no diff, no audit trail" | **Critical** for operators |
| **OpenAI vision breakage** | #2390: All OpenAI-compatible providers fail without `detail` field | **Fixed** — compatibility gap |
| **Interactive approval broken** | #3157: Scripts crash instead of pausing for user | **High** — safety UX regression |
| **Auth system instability** | #3235: Canary failures block release confidence | **High** — CI reliability |
| **Missing security policy** | #3239: New contributor filed SECURITY.md | **Process gap** being addressed |

**Satisfaction**: Core architecture progress is strong; **operational ergonomics and stability** are lagging. The project appears engineering-heavy with emerging need for operator/user experience polish.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs Attention |
|:---|:---|:---|:---|
| **#1666 WeChat channel** | ~40 days open | Large scope, may bit-rot against Reborn changes | Review for Reborn compatibility or defer decision |
| **#1764 Abound demo** | ~35 days open | High risk, many scopes, blocks production use? | Milestone decision: merge scope or split |
| **#3036 Config-as-Code EPIC** | ~7 days open | No implementation PRs yet | Maintainer roadmap commitment, schema design |
| **#3090 ToolSurfaceService** | ~6 days open | Security-critical, blocking Reborn capability model | Implementation plan, dependency on #2987 |

**Maintainer action recommended**: #1666 and #1764 are aging XL PRs at risk of merge conflicts with the Reborn substrate landing. Explicit milestone tagging or scope reduction would reduce contributor friction.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-05

## 1. Today's Overview

LobsterAI shows minimal activity over the past 24 hours, with only **1 closed issue** and **2 open pull requests** receiving updates but no merges. The project appears to be in a **maintenance mode** with no new releases and limited community engagement (zero reactions across all items). Notably, both active PRs are dependency updates and a month-old performance optimization still awaiting review, suggesting **maintainer bandwidth constraints**. The single resolved issue was a geographic access restriction rather than a code bug, indicating the project faces external API policy challenges beyond its control.

---

## 2. Releases

**No new releases.** No version tags or release notes published.

---

## 3. Project Progress

**No PRs merged or closed today.** Both updated PRs remain open:

| PR | Status | Progress |
|:---|:---|:---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Open (updated 2026-05-04) | Dependabot Electron ecosystem update (40.2.1 → 41.5.0); blocked pending maintainer review |
| [#811](https://github.com/netease-youdao/LobsterAI/pull/811) | Open, stale (updated 2026-05-04) | Performance optimization for streaming message updates; author may have rebased or pushed updates after 6-week dormancy |

**No feature advancement or bug fixes shipped to mainline.**

---

## 4. Community Hot Topics

### Most Active Discussion
**[#1877 — OpenAI authentication failure (CLOSED)](https://github.com/netease-youdao/LobsterAI/issues/1877)**
- **2 comments** | Created: 2026-04-29 | Closed: 2026-05-04
- **Root cause:** OpenAI's regional restriction (`unsupported_country_region_territory`) blocking token exchange via HTTP 403
- **Underlying need:** Users in restricted regions require **reliable alternative authentication pathways** or clearer documentation on geographic limitations. The issue closure without code change suggests workaround guidance rather than structural fix.

### Underexplored but Significant
**[#811 — O(n)→O(1) performance optimization](https://github.com/netease-youdao/LobsterAI/pull/811)**
- **Zero comments/reactions** despite addressing a clear scalability bottleneck in long chat sessions
- **Signal:** Community lacks technical reviewers, or performance improvements are deprioritized vs. feature work

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **Medium** | [#1877](https://github.com/netease-youdao/LobsterAI/issues/1877) | OpenAI 403 geographic block — affects user onboarding in restricted regions | **Closed without code fix**; workaround only |
| **Low (latent)** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 40.2.1 → 41.5.0 upgrade pending; security/stability implications of delayed dependency updates | Unmerged, 33 days old |

**No crash reports, regressions, or critical stability issues reported today.**

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests in today's data.** Inferred signals from active items:

| Signal | Likelihood in Next Version | Rationale |
|:---|:---|:---|
| **Multi-region authentication fallback** | Medium | #1877 pattern suggests recurring need; competitors typically implement Azure OpenAI or proxy configurations |
| **Performance optimizations for long sessions** | Medium-High | #811 ready to merge; low risk, measurable UX improvement |
| **Electron modernization** | High | Dependabot automation ensures eventual merge; critical for security posture |

**Absent from signals:** No AI model provider expansion, no mobile/Web client requests, no integration demands visible in recent activity.

---

## 7. User Feedback Summary

### Pain Points
- **Geographic accessibility:** Users in China/unsupported regions blocked from OpenAI-native features despite local alternatives (Codex) functioning — **friction in hybrid provider workflows**
- **Review latency:** 6-week-old performance PR (#811) with clear technical merit unmerged suggests **contributor discouragement risk**

### Use Cases Implied
- Desktop-first AI assistant (Electron app)
- Multi-provider LLM switching (OpenAI + local Codex)
- Long-context cowork/team collaboration sessions (performance PR target)

### Satisfaction Indicator
**Neutral-to-concerned.** Issue resolution was reactive (closed with explanation), not proactive (code fix). No user celebration or positive feedback visible.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#811](https://github.com/netease-youdao/LobsterAI/pull/811) | **41 days** | Contributor abandonment, performance debt accumulation | Maintainer code review; merge or request changes |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 33 days | Security exposure from outdated Electron | Automated or manual merge of Dependabot PR |

**Systemic concern:** Only 2 PRs updated in 24h, both stale, with zero maintainer merges. Suggests **review bottleneck** or **maintainer team reduction** requiring community attention.

---

*Digest generated from GitHub activity 2026-05-04 to 2026-05-05. Data source: netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-05

## 1. Today's Overview

Moltis showed minimal but focused activity over the past 24 hours, with one bug report filed and one diagnostic PR merged. The project appears to be in a maintenance and stability phase rather than active feature development. The single merged PR addresses CI infrastructure reliability, suggesting ongoing investment in developer experience and test stability. No new releases were cut. Overall activity level is **low**, typical of a mature project prioritizing reliability over velocity.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

**Merged/Closed PR:**

- **#965** — `debug(e2e): add RPC logging + gateway.log capture for CI diagnosis` by penso ([moltis-org/moltis#965](https://github.com/moltis-org/moltis/pull/965))
  - **Status:** Merged/Closed (2026-05-04)
  - **Advancement:** Enhanced CI observability for end-to-end tests
  - **Key additions:**
    - Comprehensive WebSocket RPC logging (method, timing, success/error status)
    - Connection close warnings at `warn` level
    - Gateway stderr capture to `gateway.log` with CI artifact upload
    - Performance timing warnings for lock acquisition and RPC dispatch exceeding 50ms
  - **Impact:** Addresses persistent CI-only RPC hangs (30s timeouts) that do not reproduce locally, reducing debug cycle time and improving infrastructure reliability

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|------|-----------|----------|
| #964 [OPEN] Parallel tool execution results in docker name sandbox collisions | 0 comments, 0 👍 | Despite zero engagement, this represents a **critical runtime bug** affecting core sandboxing functionality. The prefilled checklist and structured report suggest a prepared, experienced reporter (faevourite) who expects maintainer attention |

**Underlying Need:** The community requires robust sandbox isolation for concurrent AI agent tool execution—a foundational requirement for production multi-tenant or parallel workloads. The collision implies non-unique container naming logic, potentially a regression or architectural gap in Docker sandbox provisioning.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Details |
|----------|-------|---------|---------|
| **High** | [#964](https://github.com/moltis-org/moltis/issues/964) Parallel tool execution → Docker sandbox name collisions | **None** | Race condition in container naming; breaks parallel execution entirely. No workaround mentioned. Affects latest version per reporter verification. |

**Stability Assessment:** One high-severity unaddressed bug with no fix in flight. The merged PR (#965) improves diagnostic capability but does not address runtime stability directly.

---

## 6. Feature Requests & Roadmap Signals

*No explicit feature requests filed today.*

**Inferred from #964:** Improved sandbox orchestration with collision-resistant naming (UUID-based or indexed) and potentially configurable sandbox pools may be needed. The RPC logging infrastructure added in #965 could support future distributed execution features requiring deeper observability.

---

## 7. User Feedback Summary

| Pain Point | Source | Context |
|-----------|--------|---------|
| **Production reliability: parallel execution broken** | #964 (faevourite) | Sandbox collisions block scaling beyond sequential tool calls |
| **CI/debugging friction: non-reproducible hangs** | #965 (penso, internal) | 30s RPC timeouts in CI only; local execution works |

**Satisfaction Signal:** The structured bug report with checklist completion indicates users still engage formally with the project, suggesting retained investment in its success.

**Dissatisfaction Signal:** Core concurrency functionality is non-functional; this is a significant regression in production viability.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#964](https://github.com/moltis-org/moltis/issues/964) Docker sandbox collisions | 1 day (new) | **Escalating** — blocks parallel execution, no comments or assignment | Maintainer triage, assignment, and reproduction. Potential for rapid community impact if multiple users hit this concurrently |

**Watch Recommendation:** Given the bug's severity and the reporter's diligence (latest version confirmed, existing issues searched), this should be prioritized for next-day response. No long-stale items require attention today due to low overall issue volume.

---

*Digest generated from GitHub activity 2026-05-04 to 2026-05-05. Project health: Stable infrastructure investment, active reliability concern in core sandbox feature requiring urgent attention.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-05

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 13 new issues and 22 pull requests updated in the last 24 hours, indicating a vibrant but potentially strained development cycle. Notably, **all 13 issues remain open** with zero closures, suggesting either a backlog accumulation or maintainer capacity constraints. The PR pipeline is healthier with 15 merged/closed versus 7 open, demonstrating continued code velocity. A significant portion of activity (8 issues, 4 PRs) comes from **first-time contributors**, signaling growing community adoption but also onboarding friction. The project appears to be in a **stability-hardening phase** with multiple critical bug reports around session management, virtual environment isolation, and streaming model compatibility.

---

## 2. Releases

**No new releases** (v1.1.5post1 / v1.1.6b1 remain current).

---

## 3. Project Progress

### Merged/Closed PRs (15 total — updated today)

| PR | Author | Focus | Impact |
|:---|:---|:---|:---|
| [#1508](https://github.com/agentscope-ai/QwenPaw/pull/1508) | ekzhu | Docker "full" dependencies + 7 missing `pyproject.toml` declarations | **Infrastructure reliability** — fixes silent import failures |
| [#763](https://github.com/agentscope-ai/QwenPaw/pull/763) | ekzhu | iMessage channel error surfacing + `BaseChannel.last_error` | **Observability** — ends silent macOS channel crashes |
| [#756](https://github.com/agentscope-ai/QwenPaw/pull/756) | ekzhu | OpenAI `max_completion_tokens` for GPT-5/o-series compat | **Provider compatibility** — closes #733 |
| [#1977](https://github.com/agentscope-ai/QwenPaw/pull/1977) | futuremeng | MCP teardown hardening, cron/channel exception handling | **Runtime stability** |
| [#1480](https://github.com/agentscope-ai/QwenPaw/pull/1480) | futuremeng | Ollama IPv6→IPv4 fallback (`127.0.0.1` default) | **Local model connectivity** |
| [#2520](https://github.com/agentscope-ai/QwenPaw/pull/2520) | futuremeng | Model preflight checks + provider compute error surfacing | **Fail-fast model activation** |
| [#2052](https://github.com/agentscope-ai/QwenPaw/pull/2052) | futuremeng | MCP connection error degradation to tool-level | **ReAct loop resilience** |
| [#1978](https://github.com/agentscope-ai/QwenPaw/pull/1978) | futuremeng | MCP import validation/preview + runtime diagnostics | **MCP UX** |
| [#1848](https://github.com/agentscope-ai/QwenPaw/pull/1848) | futuremeng | MCP templates + description preservation | **MCP onboarding** |
| [#2783](https://github.com/agentscope-ai/QwenPaw/pull/2783) | futuremeng | Auto-recover context overflow with compaction retry | **Chat reliability** |
| [#1883](https://github.com/agentscope-ai/QwenPaw/pull/1883) | futuremeng | Agents Square source browsing + import flow | **Ecosystem expansion** |
| [#2784](https://github.com/agentscope-ai/QwenPaw/pull/2784) | futuremeng | Sanitize leaked thinking prefixes in streams | **Streaming UX polish** |
| [#2374](https://github.com/agentscope-ai/QwenPaw/pull/2374) | futuremeng | Reconnect stream recovery + history order preservation | **Session continuity** |

**Pattern:** `futuremeng` dominates merged work — suggests a core maintainer focused on **runtime resilience, MCP ecosystem, and streaming robustness**.

### Open PRs Under Active Review

| PR | Status | Focus |
|:---|:---|:---|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | Under Review | Async LLM-generated session titles (replaces "first 10 chars" placeholder) |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | Under Review, first-time | Brazilian Portuguese (pt-BR) i18n |
| [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) | WIP, Under Review | Windows taskbar icon via Win32 API |
| [#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032) | first-time | `qwenpaw doctor` Windows environment diagnostics |
| [#4028](https://github.com/agentscope-ai/QwenPaw/pull/4028) | first-time | **Fixes #4027**: stop mismatch + workspace venv enforcement |
| [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) | first-time | `write_file` overwrite guard for non-empty files |
| [#4021](https://github.com/agentscope-ai/QwenPaw/pull/4021) | first-time | `file://` URL audio block path resolution |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Core Tension |
|:---|:---|:---|:---|
| 1 | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) conda-pack ≤0.7.1 vs `pip install qwenpaw[full]` conflict | 3 | **Windows packaging fragility** — build pipeline lacks subprocess stderr forwarding, obscuring root cause |
| 2 | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) Severe input box lag | 3 | **Console frontend performance** — no version/context provided, suggests user frustration bypassing template |
| 3 | [#4024](https://github.com/agentscope-ai/QwenPaw/issues/4024) Adopt Hermes mechanism for QwenPaw upgrade | 3 | **Architecture evolution pressure** — users comparing to competing frameworks, seeking roadmap clarity |
| 4 | [#4027](https://github.com/agentscope-ai/QwenPaw/issues/4027) Session stop intermittent + Python interpreter missing venv | 2 | **Core reliability** — has matching fix PR #4028 |

### Underlying Needs Analysis

- **#3988 & #4023**: Windows ecosystem remains a **second-class citizen** — build tooling and frontend performance gaps vs. macOS/Linux
- **#4024**: Community seeking **authoritative architectural direction**; Hermes reference suggests interest in more structured agent orchestration (planning/memory/tool-use patterns)
- **Multi-agent context loss (#4031)** and **streaming model bugs (#4034)** indicate **scale stress** — users pushing beyond single-agent, single-model designs

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) | HTTP gateway exposes `execute_shell_command` **unauthenticated by default** on non-loopback binds | ❌ None | **Remote code execution** — security boundary failure |
| 🔴 **Critical** | [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) | Streaming models (MiMo-V2.5, DeepSeek-V4-Pro) cause **ReAct loop repetition** + duplicate responses | ❌ None | Infinite token burn, user trust erosion |
| 🟡 **High** | [#4033](https://github.com/agentscope-ai/QwenPaw/issues/4033) | MCP `execution_timeout` hardcoded to 30s via `HttpStatefulClient.timeout` | ❌ None | Long-running tools (e.g., web search) falsely fail |
| 🟡 **High** | [#4027](https://github.com/agentscope-ai/QwenPaw/issues/4027) | Session stop intermittent; skills Python hits **system interpreter instead of venv** | ✅ **#4028** | State corruption, dependency conflicts |
| 🟡 **High** | [#4025](https://github.com/agentscope-ai/QwenPaw/issues/4025) | Debian 12 base image → GLIBC 2.36 incompatibility with ARM64 llama.cpp | ❌ None | Local LLM deployment blocked on ARM64 |
| 🟡 **High** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | conda-pack ≤0.7.1 conflicts with pip setuptools upgrade during Windows build | ❌ None | Release pipeline breakage |
| 🟢 **Medium** | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | Input box severe lag | ❌ None | UX degradation, no diagnostic data provided |

**Security Alert**: #4037 is a **default-unsafe configuration** — the `QWENPAW_AUTH_ENABLED` opt-in model for a tool-executing HTTP gateway violates principle of least privilege. Suggest: **bind to loopback by default**, require explicit `--bind` override with auth warning.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) Vertex AI Gemini provider | **High** | Enterprise GCP adoption blocker; symmetric to existing Gemini Developer API support |
| [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) One-shot cron via `--at <iso-datetime>` | **High** | Small surface, clear use case (reminders), extends existing cron infrastructure |
| [#4031](https://github.com/agentscope-ai/QwenPaw/issues/4031) Multi-agent session continuity + progress notification | **Medium** | Architectural — requires session model changes; high user value but complex |
| [#4024](https://github.com/agentscope-ai/QwenPaw/issues/4024) Hermes-like mechanism adoption | **Low-Medium** | Vague scope; likely sparks design discussion rather than immediate implementation |
| [#4020](https://github.com/agentscope-ai/QwenPaw/issues/4020) Tool-layer read-only guard for MEMORY/AGENTS/SOUL files | **Medium** | Has partial implementation in PR #4026 (general non-empty overwrite guard); could extend to path-pattern matching |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) Reduce model addition click-through complexity | **Medium** | UX debt; provider settings → model creation flow needs state persistence |

**Emerging Theme**: Users want **agent memory protection** (#4020, #4026) and **multi-agent orchestration maturity** (#4031, #4024) — suggesting QwenPaw is being used for more complex, long-running agent deployments.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|:---|:---|:---|
| **Windows as neglected platform** | #3988 (packaging), #4023 (input lag), #4032 (doctor diagnostics PR), #3729 (taskbar icon) | 🔴 High |
| **Streaming model compatibility** | #4034 (MiMo/DeepSeek repetition), #2784 (thinking prefix leak — *fixed*) | 🟡 Rising |
| **MCP/tool timeout rigidity** | #4033 (30s hardcoded), #2052/#1977/#1978 (MCP hardening — *fixed*) | 🟡 Moderate |
| **Security defaults too permissive** | #4037 (unauthenticated tool gateway) | 🔴 Critical |
| **Multi-agent context fragility** | #4031 (session loss), #4027 (stop mismatch) | 🟡 Growing |

### Satisfaction Signals

- **i18n contribution** (#4009 pt-BR) indicates global community investment
- **First-time contributor volume** (4 PRs today) suggests accessible codebase
- **`qwenpaw doctor` expansion** (#4032) shows self-service diagnostic culture taking root

### Dissatisfaction Signals

- **All issues remain open** — no same-day resolution visible
- **Template non-compliance** (#4023 lacks version info) suggests users are frustrated enough to bypass process
- **"Too many clicks"** (#4036) — classic enterprise UX complaint

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) Async session titles | 10 days | Low — polish feature | Final review, merge before next release |
| [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) Windows taskbar icon | 12 days, WIP | Medium — brand perception | Author completion or maintainer takeover |
| [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) conda-pack conflict | 5 days | **High** — blocks Windows builds | Assign maintainer; stderr forwarding fix needed |
| [#4024](https://github.com/agentscope-ai/QwenPaw/issues/4024) Hermes mechanism | 1 day | Low — discussion | Roadmap response from core team |
| [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) **Unauthenticated gateway** | 1 day | **Critical** — security | Immediate triage; likely needs hotfix |

**Maintainer Attention Required**: The security issue #4037 demands **same-day response**. The Windows build breakage #3988 is **release-blocking** for Windows users. The multi-agent architecture discussion in #4031 and #4024 would benefit from **core team roadmap communication** to manage community expectations.

---

*Digest generated from agentscope-ai/QwenPaw GitHub activity on 2026-05-05. All links: https://github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-05

## 1. Today's Overview

ZeroClaw shows **intense development velocity** with 50 issues and 50 PRs active in the last 24 hours, though merge throughput remains constrained (only 21 PRs merged/closed versus 29 still open). The project is in a **critical pre-release stabilization phase** for v0.8.0, with a massive schema migration PR (#6266) held in integration branch. No new releases were cut today. Community health appears robust with active maintainer triage (notable maintainer edits on multiple PRs by `singlerider`), but the 3:1 ratio of open PRs to open issues signals potential merge bottleneck risks that contributors are explicitly flagging (#6060).

---

## 2. Releases

**No new releases** (v0.7.6 appears to be the current stable target; v0.8.0 in integration).

---

## 3. Project Progress

### Merged/Closed PRs (21 total; key items highlighted)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#6116](https://github.com/zeroclaw-labs/zeroclaw/pull/6116) | aliasliao | **fix(jira): support API v2 server mode** — Makes `jira.email` optional; selects API v3 for Cloud, v2 for Server/Data Center | Unblocks Jira Server PAT authentication (closes #5613) |
| [#6046](https://github.com/zeroclaw-labs/zeroclaw/pull/6046) | jscholz | **feat(memory): expose `zeroclaw memory reindex` CLI** | Enables backfill of NULL embeddings post-migration |
| [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) | ilteoood | **feat(cron): add WhatsApp to supported delivery channels** | Expands cron delivery surface |
| [#6263](https://github.com/zeroclaw-labs/zeroclaw/pull/6263) | ilteoood | **fix: hands learned facts hashset** | O(n²)→O(1) deduplication in `HandContext` |
| [#6356](https://github.com/zeroclaw-labs/zeroclaw/pull/6356) | singlerider | **fix(runtime/cost): WARN once per (provider, model) on missing pricing** | Diagnostic improvement for 50+ provider cost tracking |

### Major In-Flight Features

- **[#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)** — **Schema v3 migration** (XL, DO NOT MERGE): Channel aliasing, model-provider aliasing, profile lifting. Blocked on coordinated v0.8.0 integration.
- **[#6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370)** — Dashboard self-update flow (closes CLI/web UI ops gap).
- **[#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214)** — HMAC tool receipt re-activation (wiring stripped from #5168).

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Labels | Core Concern |
|:---|:---|:---|:---|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — default_model issue on fresh install | **15** | `bug`, `risk:medium`, `priority:p1`, `r:needs-repro` | **Onboarding fragility**: Fresh LXC install fails with provider resolution error when Ollama is remote. |
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — Incompatible with DeepSeek-V4 API format | **8** | `bug`, `risk:high`, `priority:p1` | **Provider compatibility gap**: DeepSeek-V4 thinking mode breaks integration; affects both Pro and Flash. |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) — Matrix voice transcription failed | **6** | `bug`, `risk:medium`, `priority:p2` | **Audio format handling**: Element clients produce unsupported format; needs MIME type normalization. |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) — Context spillage from chat to schedule | **5** | `bug`, `risk:high`, `security`, `status:blocked` | **Critical isolation failure**: Chat memory leaks into scheduled executions — S0 security/data-loss risk. |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) — SkillForge auto-integrator emits non-schema fields | **5** | `bug`, `risk:medium`, `status:in-progress` | **Schema drift**: Auto-generated TOML violates `deny_unknown_fields` after #6128. |

### Underlying Needs Analysis

- **Onboarding DX crisis**: #6123, #6120, #6126, #6364 (closed as dup) all cluster around provider URL/key resolution during first-run. The onboarding flow appears to conflate provider identifiers with API endpoints.
- **Provider fragmentation**: DeepSeek (#6059), Anthropic/Bedrock temperature shapes (#6095, #6147), llama-server (#6180) indicate the provider abstraction is cracking under variant API behaviors.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| **S0** | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) Context spillage chat→schedule | `status:blocked` | ❌ No | **Data loss / security breach** — memory isolation failure |
| **S1** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) default_model fresh install fail | `r:needs-repro` | ❌ No | Blocks new user adoption |
| **S1** | [#6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095) Bedrock 400 temperature deprecated | Open | ❌ No | Regression on opus-4-7 |
| **S1** | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) Cannot use llama-server services | `r:needs-repro` | ❌ No | Local model deployment blocked |
| **S1** | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) Onboarding Codex→OpenAI key confusion | Open | ❌ No | Workflow blocked |
| **S2** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 incompatible | Open | ❌ No | Degraded behavior, popular provider |
| **S2** | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) Matrix voice transcription fail | `r:needs-repro` | ❌ No | Feature degradation |
| **S2** | [#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156) Nextcloud Talk 5sec timeout | Open | ❌ No | Local LLM users affected |

**Stability assessment**: High-severity bugs are accumulating without corresponding fix PRs. The S0 isolation bug (#5415) has been `status:blocked` since April 6 with no resolution path visible. Provider-side S1 issues suggest configuration schema v3 (#6266) may need to address temperature/pricing field optionality.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal Strength | Predicted Version |
|:---|:---|:---|
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) Track: zeroclaw skills support and UX (v0.7.6) | ⭐⭐⭐ **Committed** | v0.7.6 |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) Schema v3 migration | ⭐⭐⭐ **In integration** | v0.8.0 |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) Hybrid skills + WASM tools | ⭐⭐⭐ **Architecture planned** | Post-v0.8.0 |
| [#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) Re-activate HMAC tool receipts | ⭐⭐⭐ **PR open (#6214)** | v0.7.6 or v0.8.0 |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) Prefer lighter ZeroClaw (MCP over ad-hoc tools) | ⭐⭐ **Philosophy shift** | v0.8.0+ |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) Configurable reply-intent precheck | ⭐⭐ **In progress** | v0.7.6 |
| [#6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150) Channel-native memory clear (/clear) | ⭐⭐ **Good first issue** | Community PR likely |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) Discord bot channel restriction | ⭐⭐ **New today** | v0.7.6 patch |

**Key roadmap tension**: Issue #6165 advocates replacing built-in tool integrations (Jira, GitHub, gws-cli) with MCP-based skills — this would significantly reduce maintenance surface but conflicts with current ad-hoc tool PRs in flight.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Onboarding falls over with custom endpoints** | #6123, #6364, #6180, #6126 | 🔴 Critical |
| **Provider compatibility whack-a-mole** | #6059 (DeepSeek), #6095/#6147 (Anthropic/Bedrock temp), #6180 (llama-server) | 🔴 Critical |
| **Memory/context isolation failures** | #5415 (chat→cron spillage), #6105 (cron lacks self-context), #6150 (no clear command) | 🟡 High |
| **Cost/pricing invisible for non-top providers** | #6356 fix merged, but #6357 in flight for per-provider pricing | 🟡 High |
| **Channel timeouts too aggressive for local LLMs** | #6156 (Nextcloud 5sec), #6067 (reply-intent blocks main model) | 🟡 High |
| **Jira auth broken for Server/Data Center** | #5613 — **fixed by #6116 today** | 🟢 Resolved |

### Satisfaction Signals

- Active maintainer engagement: `singlerider` personally editing PR titles/templates (#6212, #6310) indicates healthy triage.
- v0.8.0 integration branch discipline suggests structured release process.
- Community proposing architectural simplifications (#6165) indicates investment in long-term health.

---

## 8. Backlog Watch

| Issue/PR | Age | Blocker | Action Needed |
|:---|:---|:---|:---|
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) Context spillage | **29 days** | `status:blocked` | **Security audit + architecture review** — S0 with no assignee |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits lost in bulk revert | **11 days** | Recovery tracking | Maintainer decision on cherry-pick strategy |
| [#6060](https://github.com/zeroclaw-labs/zeroclaw/issues/6060) 1.0 Refactor Tracking | **11 days** | No pinned issue | **Project leadership**: Consolidate 286 open PRs into merge policy |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) Hybrid WASM skills | **9 days** | `needs-maintainer-review` | Architecture sign-off on WASM sandbox boundaries |
| [#6136](https://github.com/zeroclaw-labs/zeroclaw/issues/6136) Deferred MCP tools not inherited | **9 days** | `priority:p2` | Runtime session inheritance design |

**Critical concern**: The S0 security issue (#5415) has been blocked for nearly a month with no visible progress. Combined with the HMAC receipt wiring being stripped before merge (#5168 → #6182 → #6214), this suggests **security-sensitive code paths need stronger merge gating**.

---

*Digest generated from 50 issues and 50 PRs active 2026-05-04 to 2026-05-05.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*