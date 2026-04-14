# OpenClaw Ecosystem Digest 2026-04-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-14 00:16 UTC

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

# OpenClaw Project Digest — 2026-04-14

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large, active community and likely an approaching release cycle. The project released **v2026.4.12** yesterday, a quality-focused release addressing plugin loading, memory/dreaming reliability, local-model options, and Feishu onboarding. However, **regression reports are surfacing rapidly** against recent builds (2026.4.9–2026.4.12), particularly around model resolution, browser/CDP startup, and Telegram message handling. With 342 open PRs and heavy issue volume, the project is shipping quickly but struggling with stability in edge configurations.

---

## 2. Releases

### v2026.4.12 — openclaw 2026.4.12
- **Focus areas:** plugin loading robustness, memory/dreaming reliability, new local-model options, smoother Feishu setup path
- **Notable additions:**
  - QA/lab: Convex-backed pooled Telegram credential leasing
  - New admin command: `openclaw qa credentials`
- **No documented breaking changes or migration notes** in the provided data

---

## 3. Project Progress

### Merged/Closed PRs Today (selected)

| PR | Author | Summary |
|---|---|---|
| [#66223](https://github.com/openclaw/openclaw/pull/66223) | amittell | Added `openclaw models auth clean` CLI command to prune stale auth profiles (with `--dry-run`, `--json`, `--agent` flags) |
| [#56964](https://github.com/openclaw/openclaw/pull/56964) | suboss87 | Security warning for insecure `session.dmScope` in multi-user setups |
| [#66167](https://github.com/openclaw/openclaw/pull/66167) | jalehman | Fixed recovery of reasoning-only OpenAI turns that previously stalled |
| [#66220](https://github.com/openclaw/openclaw/pull/66220) | omarshahine | Changelog backfill for two recent fixes |
| [#63511](https://github.com/openclaw/openclaw/pull/63511) | jetd1 | Fixed TTS audio attachments being dropped by reply-media normalizer |
| [#66216](https://github.com/openclaw/openclaw/pull/66216) | jinalex | Added voice-call replay quality test harness baseline |
| [#65461](https://github.com/openclaw/openclaw/pull/65461) | omarshahine | Fixed `sendPolicy: deny` to suppress delivery rather than kill inbound processing |

### Features Advancing
- **Bluesky integration:** [#65972](https://github.com/openclaw/openclaw/pull/65972) adds a full Bluesky skill with CLI tool and MCP server
- **You.com plugin:** [#64989](https://github.com/openclaw/openclaw/pull/64989) adds web search, research, and content extraction via You.com
- **MCP Apps protocol extension:** [#66168](https://github.com/openclaw/openclaw/pull/66168) builds gateway RPC surface for MCP tool/resource discovery and UI meta
- **WhatsApp refactor:** [#66221](https://github.com/openclaw/openclaw/pull/66221) centralizes plugin assembly to reduce startup drift

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | 21 | OAuth token refresh race condition with shared auth profiles | **Enterprise multi-agent deployments need safe credential sharing**; concurrent refresh causes cascading 401s |
| [#64799](https://github.com/openclaw/openclaw/issues/64799) | 19 | Volcengine Coding Plan model resolution regression on macOS | **Vendor-specific model aliases are fragile**; users need stable provider/model mapping across platforms |
| [#17101](https://github.com/openclaw/openclaw/issues/17101) | 14 | Telegram voice messages not transcribed | **Multimodal messaging parity**; audio-to-text is expected as a core channel feature |
| [#31486](https://github.com/openclaw/openclaw/issues/31486) | 13 | `image` tool ignores custom providers in `openclaw.json` | **Extensibility of image generation**; power users want to plug in local/custom vision models |
| [#62496](https://github.com/openclaw/openclaw/issues/62496) | 13 | Telegram DM voice-note transcription silently fails in 2026.4.5 | **Reliability of audio pipelines**; normalization layer is dropping valid attachments |

### Analysis
The hottest topics cluster around **authentication reliability at scale**, **Telegram multimedia handling**, and **model provider extensibility**. There's strong signal that OpenClaw's growth into enterprise/multi-agent setups is stretching its original single-user auth and channel attachment architectures.

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#65706](https://github.com/openclaw/openclaw/issues/65706) | **Critical** | `openclaw nodes status` and `openclaw nodes list` out of sync in 2026.4.9; marked **beta release blocker** | None identified |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | High | OAuth token refresh race condition causes spurious failovers | None identified |
| [#45589](https://github.com/openclaw/openclaw/issues/45589) | High | Discord channel unresponsive for 10 min: Gemini timeout + failover failure + lane blocking | None identified |
| [#62762](https://github.com/openclaw/openclaw/issues/62762) | High | Gateway 1006 "closed-before-connect" repro still present on 2026.4.12 after multiple fixes | None identified |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | High | Control UI requires HTTPS/localhost secure context; breaks VPS deployments | None identified |

### Medium Severity Regressions (2026.4.x)

| Issue | Description | Fix PR? |
|---|---|---|
| [#64799](https://github.com/openclaw/openclaw/issues/64799) | Volcengine model resolves to "Unknown model" on macOS | None identified |
| [#64238](https://github.com/openclaw/openclaw/issues/64238) | Qwen `qwen3.6-plus` fails as "Unknown model" in 2026.4.9, worked in 2026.4.5 | None identified |
| [#57099](https://github.com/openclaw/openclaw/issues/57099) | Explicit `api: ollama` provider config fails with "No API provider registered" after 2026.3.28 | None identified |
| [#65701](https://github.com/openclaw/openclaw/issues/65701) | Telegram provider sends duplicate messages for every response | None identified |
| [#65990](https://github.com/openclaw/openclaw/issues/65990) | Managed Chrome fails CDP websocket connection while manual CDP works | None identified |
| [#64978](https://github.com/openclaw/openclaw/issues/64978) | Managed Chrome falsely fails startup even though DevTools is listening | None identified |
| [#65093](https://github.com/openclaw/openclaw/issues/65093) | Chrome CDP websocket unreachable after start on macOS 26.4 arm64 | None identified |

### Stability Assessment
**Browser/CDP and model resolution are the two most unstable areas** in recent builds. Multiple overlapping Chrome/CDP issues suggest a systemic problem in managed browser spawning or port detection. The "Unknown model" regressions indicate provider registry or alias resolution changes in 2026.4.x are breaking previously valid configs.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|---|---|---|
| [#34644](https://github.com/openclaw/openclaw/issues/34644) | Configurable embedded-agent LLM timeout (currently hardcoded 15s) | **High** — small surface, clear pain point, latency spikes are common |
| [#30215](https://github.com/openclaw/openclaw/issues/30215) | Amazon Bedrock API key (Bearer token) auth | **Medium-High** — PR [#64512](https://github.com/openclaw/openclaw/pull/64512) already adds `service_tier`; auth expansion likely follows |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | Post-subagent completion extension hook | **Medium** — architectural; useful for observability/enterprise |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) | Behavioral reputation system for skills | **Low-Medium** — large RFC-scope change, security-focused, long-term |
| [#32495](https://github.com/openclaw/openclaw/issues/32495) | Agent switching in Control UI | **Medium** — closed as stale but recurring UX need |

### Emerging Themes
- **Enterprise auth & observability:** Multiple requests around auth profile management, subagent hooks, and node syncing
- **Local/self-hosted model support:** Ollama, SearXNG, local embeddings — strong community push for reducing cloud dependency
- **Channel UX polish:** Feishu streaming, Discord slash commands, Telegram formatting

---

## 7. User Feedback Summary

### Pain Points
1. **"Unknown model" errors are eroding trust** — users with working configs find them broken across patch releases, especially for Qwen, Volcengine, Ollama, and custom providers
2. **Browser automation is flaky on macOS** — CDP startup failures are a recurring source of frustration, with manual workarounds often succeeding where managed mode fails
3. **Telegram quality is degraded** — duplicate messages, failed voice transcription, and raw markdown tables all hurt the primary channel experience for many users
4. **Gateway stability under load** — 1006 disconnects, node sync failures, and compound failover failures suggest the orchestration layer needs hardening

### Positive Signals
- Feishu setup improvements in v2026.4.12 are explicitly noted as "much smoother"
- Strong community contribution velocity (Bluesky, You.com, Typecast TTS, SearXNG)
- Active security consciousness (DM scope warnings, auth profile pruning, skill reputation discussions)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Why It Needs Attention |
|---|---|---|
| [#33557](https://github.com/openclaw/openclaw/pull/33557) | ~6 weeks | Telegram health-check watchdog for long-polling — production reliability fix, stale but unmerged |
| [#33556](https://github.com/openclaw/openclaw/pull/33556) | ~6 weeks | Sandbox 60s timeout to prevent Docker hangs from blocking pipeline — critical resilience fix |
| [#33551](https://github.com/openclaw/openclaw/pull/33551) | ~6 weeks | Telegram `groupPolicy: "members"` for automatic group trust — large XL PR touching 15+ channels, needs review bandwidth |
| [#17101](https://github.com/openclaw/openclaw/issues/17101) | ~8 weeks | Telegram voice transcription — high-comment bug with no linked fix PR |
| [#36323](https://github.com/openclaw/openclaw/issues/36323) | ~6 weeks | Telegram markdown table formatting — 8 upvotes, clear UX gap, no fix PR |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) | ~6 weeks | Exec approvals path ignores active state root — security/data-integrity concern |

### Recommendation
The **#3355x PR series** (Telegram health, sandbox timeout, group policy) represents a coherent reliability push that has stalled for over a month. With Telegram being a dominant channel and current regressions piling up, prioritizing this backlog would directly address live user pain.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Agent Ecosystem
## Date: 2026-04-14

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing unprecedented velocity, with multiple projects pushing 40–500+ tracked items per day. The space has bifurcated into **mature, multi-channel platforms** (OpenClaw, Hermes Agent, ZeroClaw) racing to stabilize enterprise deployments, and **emerging or specialized frameworks** (NanoClaw, Moltis, IronClaw) investing heavily in security models, voice infrastructure, and hosted UI experiences. A dominant theme across all projects is the tension between rapid feature expansion—especially channel integrations (Feishu, Matrix, XMPP, Web UI) and provider diversity—and the stability demands of production, multi-agent, and enterprise use cases. Rebranding, containerization debates, and security hardening are signals of market maturation beyond early adopters.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Notes |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.12 (yesterday) | ⚠️ **B-** | Extreme velocity, but regression surge and 342 open PRs strain stability |
| **NanoBot** | 44 (18 open, 26 closed) | 58 (28 open, 30 closed) | None | **B+** | High close/merge rate; cost-control and memory safety are priority themes |
| **Hermes Agent** | 50 | 50 | v0.9.0 (Apr 13) | **B** | Responsive merging (21/29), but 1,000+ open issues meta-concern signals scale stress |
| **PicoClaw** | 5 | 41 | v0.2.6-nightly (Apr 13) | **B** | Strong pre-release push; 29 open PRs indicate review bandwidth constraints |
| **NanoClaw** | 5 | 13 | None | **B-** | Feature expansion phase; container infrastructure frictions are emerging blockers |
| **NullClaw** | 3 | 2 | None | **C+** | Modest activity; integration rough edges threaten user retention |
| **IronClaw** | 45 (38 open, 7 closed) | 50 (41 open, 9 closed) | None | **B-** | Aggressive bug-bash mode; staging UI/agent-loop regressions are acute |
| **LobsterAI** | 1 | 22 | v2026.4.13 (yesterday) | **B+** | Fast merge cycles; revert chain on workspace paths shows release discipline turbulence |
| **Moltis** | 7 (all closed) | 18 (all closed/merged) | 2 patches (`20260413.01`, `.03`) | **A-** | Excellent same-day resolution; tool-serialization regressions warrant QA attention |
| **CoPaw / QwenPaw** | 40 (28 open, 12 closed) | 50 (30 open, 20 closed) | v1.1.1-beta.1 | **B** | Rebrand migration friction dominates; responsive maintainer team |
| **ZeroClaw** | 21 | 50 | None (v0.7.0 likely target) | **B-** | Strong velocity but 4 S0 issues open, including unpatched security bypass |
| **TinyClaw** | 0 | 0 | None | **N/A** | No activity |
| **ZeptoClaw** | 0 | 0 | None | **N/A** | No activity |

*\*Health score synthesizes velocity, merge rate, open backlog pressure, regression severity, and release stability. Graded A-D.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale dominance**: OpenClaw's 500 issues and 500 PRs in 24 hours dwarf every peer, reflecting the largest contributor base and broadest platform coverage.
- **Release cadence**: Shipping daily/weekly releases (v2026.4.12) with explicit quality themes (plugin loading, memory reliability, local models) demonstrates mature release engineering.
- **Ecosystem breadth**: First-mover advantage in channel diversity (Telegram, Feishu, Discord, Bluesky, WhatsApp) and enterprise features (credential leasing, admin CLI commands).

### Technical Approach Differences
- **Plugin-heavy architecture** vs. **NanoClaw's container-isolated security model** or **Moltis's Rust-based gateway refactor**. OpenClaw optimizes extensibility over strict isolation.
- **Managed browser/CDP automation** is a distinctive investment area, though currently its most unstable surface (macOS Chrome startup failures, port detection races).
- **Memory/dreaming subsystem** is more exposed and actively iterated than in Hermes or ZeroClaw, where memory is either delegated (Honcho) or less prominent.

### Community Size Comparison
OpenClaw operates at **5–10x the raw volume** of the next tier (Hermes Agent, ZeroClaw, CoPaw). However, this scale creates **triage debt**: 342 open PRs and rapidly surfacing regressions suggest its maintainer-to-contributor ratio is stretched thinner than Moltis or NanoBot, which achieve higher resolution rates.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Enterprise multi-agent auth & credential sharing** | OpenClaw (#26322), NanoClaw (#1763 UID mismatch), Hermes (#8596 migration safety), IronClaw (#1610 SSO) | Safe concurrent OAuth refresh, RBAC, SSO/OIDC, scoped admin skills |
| **Channel reliability & parity** | OpenClaw (Telegram regressions), Hermes (BlueBubbles, Feishu, Signal broken), ZeroClaw (Matrix tracker), CoPaw (Feishu dedup), Moltis (XMPP, Telegram) | Message deduplication, E2EE, media handling, webhook resilience |
| **Local/self-hosted model support** | OpenClaw (Ollama, Volcengine, Qwen regressions), NanoBot (Ollama, Groq, LongCat), PicoClaw (DeepSeek/GLM fallback), ZeroClaw (Ollama Cloud OAuth) | Stable provider registry, model alias resolution, automatic fallback |
| **Memory & session management** | OpenClaw (memory/dreaming fixes), NanoBot (560K token heartbeat, blank MEMORY.md), NanoClaw (sqlite-first self-improving memory), ZeroClaw (SessionResetTool) | History pruning, token budgeting, persistent session recovery, dreaming safety |
| **Web UI as first-class channel** | Hermes (#501 longest-running request), NanoBot (`nanobot web`), IronClaw (staging UI bug bash), LobsterAI (multi-agent welcome screens) | Streaming, artifacts, mobile responsiveness, low-friction onboarding |
| **Security hardening & sandboxing** | NanoClaw (PII protection, container isolation), ZeroClaw (ClawGuard 188 findings), PicoClaw (OPA policy evaluation), Moltis (MCP schema sanitization) | Sandboxed execution, policy-as-code, secret sanitization, dependency audit |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Maximal channel/provider ecosystem + rapid iteration | Power users, early-enterprise | Plugin-heavy, managed CDP, exposed memory/dreaming layer |
| **NanoBot** | Cost-conscious agent loops + multi-channel Asian IM parity | Individual developers, small teams | Python-based, heartbeat/cron scheduling, strong QQ/DingTalk/Feishu support |
| **Hermes Agent** | "Everywhere" deployment (mobile/Termux) + delegation tiers | Mobile-first users, task-routing scenarios | Fast mode, delegation system, iMessage/WeChat gateways |
| **NanoClaw** | Container-isolated security model + enterprise integrations | Security-conscious operators, Microsoft 365 shops | Docker-native agent runners, MCP bridges, PII anonymization pipelines |
| **IronClaw** | Hosted/staging-ready platform + WASM tool ecosystem | SaaS builders, workspace tenants | Rust gateway, WASM channels, tenant-scoped skills, near.ai integration |
| **Moltis** | Rust performance + voice/local AI infrastructure | Self-hosters, privacy-focused users | `tokio-xmpp`, local Whisper/Voicebox, aggressive modular refactoring |
| **LobsterAI** | Desktop/Electron wrapper + OpenClaw runtime hardening | End-users wanting ChatGPT-like local app | Electron 41.x, NSIS installer, session keepalive policies |
| **CoPaw/QwenPaw** | Tight Qwen model integration + Chinese enterprise IM | Qwen ecosystem users, Lark/Feishu enterprises | Browser automation, skill pool UX, plan mode |
| **ZeroClaw** | Explicit "Zero Compromise" quality gates + WASM plugins | Production-oriented developers | Config schema versioning, ClawGuard security audits, systemd packaging |
| **PicoClaw** | Embedded/hardware-adjacent (Sipeed) + policy-driven security | IoT/edge, policy-governed deployments | OPA integration, multi-instance channels, seahorse SQLite memory |
| **NullClaw** | Minimalist Zig-based core + sub-agent orchestration | Systems programmers, Zig enthusiasts | Zig runtime, cron subagents, JSON CLI output |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Highest Velocity, Pre-Stabilization)
- **OpenClaw**: Shipping fastest, but stability debt is accumulating. Approach with caution for production edge configurations.
- **IronClaw**: Intense bug-bash mode on staging; UI and agent-loop fixes landing same-day, but architectural load is showing.
- **CoPaw/QwenPaw**: Rebrand turbulence is masking underlying momentum; channel and console fixes are merging rapidly.

### Tier 2: Stabilizing with Strong Resolution Discipline
- **Moltis**: Best-in-class same-day bug resolution. Tool-serialization regressions suggest QA gaps, but maintainer responsiveness is exemplary.
- **NanoBot**: High merge/close rate, clear thematic focus on cost control and memory safety. Maturing beyond hobbyist use.
- **LobsterAI**: Fast merge cycles around a packaged desktop experience. Revert chains indicate release-branch discipline needs tightening.

### Tier 3: Expanding Feature Surface with Infrastructure Friction
- **ZeroClaw**: Major architectural advances (agent teams/subagents, WASM plugins) concurrent with unpatched S0 security issues and channel gaps.
- **NanoClaw**: Memory architecture and channel integrations are advancing, but container runtime robustness is a blocking concern for Linux production.
- **PicoClaw**: Strong security/policy investment, but review bandwidth is constrained and a lingering `guardCommand` bug affects core tool safety.

### Tier 4: Early/Niche or Dormant
- **NullClaw**: Minimal but focused activity; integration rough edges risk churn among evaluators.
- **TinyClaw, ZeptoClaw**: No activity in the reporting period.

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **Voice and local AI infrastructure are becoming table stakes** | Moltis (Whisper, Voicebox), NanoBot (Whisper `language` param), OpenClaw (TTS normalizer, voice-call replay tests) | Developers should design agent architectures with pluggable STT/TTS pipelines and local model fallbacks from day one. |
| **Containerization vs. native execution is a defining architectural debate** | NanoClaw's Docker-native security model vs. [#1732] native runner requests; IronClaw's WASM channels; ZeroClaw's sandbox escapes | Choose isolation boundaries based on threat model. Expect user pressure for both "secure by default" and "escape hatches for power users." |
| **Enterprise auth and policy are no longer afterthoughts** | OpenClaw OAuth races, IronClaw SSO/RBAC, PicoClaw OPA policies, ZeroClaw ClawGuard, LobsterAI log desensitization | Multi-tenant agents require identity, audit, and policy infrastructure as core primitives, not plugins. |
| **Token economics and cost anxiety are shaping product behavior** | NanoBot 560K token heartbeat bug, Moltis cached token visibility, OpenClaw embedded-agent timeout requests | Build observable, budget-aware agent loops with history truncation, caching transparency, and model routing. |
| **Channel parity is as critical as model capability** | Matrix, Feishu, XMPP, and Web UI dominate issue backlogs across Hermes, ZeroClaw, OpenClaw, Moltis | Prioritize robust channel abstractions; users adopt agents based on where they already communicate, not model benchmarks. |
| **Rebranding and migration safety are maturity tests** | CoPaw→QwenPaw friction, Hermes `openclaw doctor` data loss, LobsterAI path revert chain | Invest in idempotent migrations, clear PATH/config handling, and user-state preservation before any restructure. |

---

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-14

## 1. Today's Overview

NanoBot showed **very high community activity** over the past 24 hours with **44 issues updated** (18 open/active, 26 closed) and **58 pull requests updated** (28 open, 30 merged/closed). Despite zero new releases, the project is experiencing rapid iteration, particularly around **agent loop stability**, **memory/dreaming safety**, **channel reliability** (Telegram, Web), and **provider compatibility**. The maintainer velocity appears strong with a high close/merge rate, though a growing backlog of open PRs suggests some review queue pressure.

---

## 2. Releases

**No new releases** were published today. The latest stable and nightly builds remain unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected Highlights)

| PR | Description | Impact |
|---|---|---|
| [#3110](https://github.com/HKUDS/nanobot/pull/3110) / [#3111](https://github.com/HKUDS/nanobot/pull/3111) | Fix agent injection queue draining on error/edge-case exits | **Critical stability fix** — prevents duplicate/confusing replies when loops break unexpectedly |
| [#3021](https://github.com/HKUDS/nanobot/pull/3021) | Fix Dream `edit_file` corruption bloating SOUL.md/USER.md | Prevents local models from infinitely repeating memory content |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) | Add Web channel + iOS app foundational APIs | Major UX expansion — browser-based chat without build tooling |
| [#2972](https://github.com/HKUDS/nanobot/pull/2972) | Add full Web UI (`nanobot web`) | Management dashboard + chat interface, separate CLI command |
| [#3104](https://github.com/HKUDS/nanobot/pull/3104) | Add post-dream completion hook | Extensibility for external memory storage (Lark, Tencent Docs) |
| [#3116](https://github.com/HKUDS/nanobot/pull/3116) | Add `language` parameter for Whisper STT (Groq + OpenAI) | Better non-English transcription accuracy |
| [#3114](https://github.com/HKUDS/nanobot/pull/3114) | Add LongCat OpenAI-compatible provider | New model backend support |
| [#2217](https://github.com/HKUDS/nanobot/pull/2217) | Cron tool `edit` action + full message in `list` | UX improvement for job management |
| [#2597](https://github.com/HKUDS/nanobot/pull/2597) | Fix off-by-one in `find_legal_message_start` | Prevents orphan tool result session corruption |
| [#2546](https://github.com/HKUDS/nanobot/pull/2546) | Fix Telegram streaming losing topic/reply context | Threaded group chat reliability |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Status | Core Need |
|---|---|---|---|
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) Heartbeat session history causes ENORMOUS token usage | 11 | **CLOSED** | **Cost control** — heartbeat JSONL grew to 600+ lines, burning 560K tokens per run. Users need session history truncation/rotation for recurring background tasks. |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) Upgrade 0.1.4 → 0.1.4post5 breaks gemini-3-flash-preview | 8 | **OPEN** | **Provider regression** — config parsing or routing changed in post5, breaking existing Gemini setups. Fix PR not yet linked. |
| [#2868](https://github.com/HKUDS/nanobot/issues/2868) `exec` tool forced to use bash on Windows | 5 | **CLOSED** | **Cross-platform execution** — commit `be6063a` broke Windows compatibility by hardcoding `bash`. |

### Underlying Needs
- **Token economics** are becoming a first-class concern as users deploy 24/7 agents.
- **Windows parity** remains fragile; platform-agnostic shell selection needs systematic testing.
- **Provider stability** across the Gemini/Anthropic/OpenAI ecosystem is a recurring pain point.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR / Notes |
|---|---|---|---|
| 🔴 **Critical** | [#2957](https://github.com/HKUDS/nanobot/issues/2957) Dream overwriting MEMORY.md to blank | **CLOSED** | No linked PR; closed same day — possibly fixed by [#3021](https://github.com/HKUDS/nanobot/pull/3021) memory corruption fix |
| 🔴 **Critical** | [#2826](https://github.com/HKUDS/nanobot/issues/2826) `restrictToWorkspace=true` does NOT restrict file deletion | **CLOSED** | Sandbox escape vulnerability — needs security audit confirmation |
| 🟡 **High** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) Heartbeat 560K token explosion | **CLOSED** | Cost/stability issue; session rotation needed |
| 🟡 **High** | [#2185](https://github.com/HKUDS/nanobot/issues/2185) Gemini-3-flash-preview regression in post5 | **OPEN** | No fix PR identified |
| 🟡 **High** | [#2713](https://github.com/HKUDS/nanobot/issues/2713) v0.1.4.post6 response speed regression (3 min → 1 sec) | **CLOSED** | Performance regression, likely provider/API parameter change |
| 🟡 **High** | [#2757](https://github.com/HKUDS/nanobot/issues/2757) OpenAI provider sends deprecated `max_tokens` | **CLOSED** | API compatibility fix merged |
| 🟢 **Medium** | [#2868](https://github.com/HKUDS/nanobot/issues/2868) `exec` forced bash on Windows | **CLOSED** | Cross-platform regression |
| 🟢 **Medium** | [#100](https://github.com/HKUDS/nanobot/issues/100) Telegram "Message text is empty" crash | **CLOSED** | Channel graceful degradation |
| 🟢 **Medium** | [#1313](https://github.com/HKUDS/nanobot/issues/1313) Moonshot Kimi reasoning model missing `reasoning_content` | **CLOSED** | Provider-specific field mapping |
| 🟢 **Medium** | [#3028](https://github.com/HKUDS/nanobot/issues/3028) Heartbeat creates duplicate cron tasks | **OPEN** | Logic bug in heartbeat scheduler — no fix PR yet |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Release |
|---|---|---|
| [#3070](https://github.com/HKUDS/nanobot/issues/3070) Model router (OpenRouter-style, cost-aware routing) | High community demand for token savings | **Medium-High** — aligns with cost-control theme |
| [#3096](https://github.com/HKUDS/nanobot/issues/3096) Trust LLM parallel tool calls instead of static `Tool` concurrency flags | Architecture shift toward faster tool execution | **Medium** — requires careful safety review |
| [#3103](https://github.com/HKUDS/nanobot/issues/3103) / [#3104](https://github.com/HKUDS/nanobot/pull/3104) Dream before/after hooks | Extensibility for external memory pipelines | **High** — PR already open |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) + [#2972](https://github.com/HKUDS/nanobot/pull/2972) Web UI / iOS foundations | Major platform expansion | **High** — two competing/complementary PRs in flight |
| [#2217](https://github.com/HKUDS/nanobot/pull/2217) Cron `edit` action | Small UX win | **High** — PR open, low risk |
| [#1378](https://github.com/HKUDS/nanobot/issues/1378) Universal Tool Orchestrator (parallel + dependency injection) | Deep architectural change | **Low-Medium** — powerful but complex |

---

## 7. User Feedback Summary

### Pain Points
- **Cost anxiety**: [#2375](https://github.com/HKUDS/nanobot/issues/2375) shows users are shocked by 560K token heartbeat bills. Token budgeting and history pruning are urgently needed.
- **Data loss fear**: [#2957](https://github.com/HKUDS/nanobot/issues/2957) (blank MEMORY.md) and [#2826](https://github.com/HKUDS/nanobot/issues/2826) (sandbox escape) erode trust in long-running production deployments.
- **Provider fragility**: Upgrades breaking existing configs ([#2185](https://github.com/HKUDS/nanobot/issues/2185), [#2713](https://github.com/HKUDS/nanobot/issues/2713)) suggest post-release regression testing needs strengthening.
- **Windows neglect**: Cross-platform shell execution remains a recurring footgun.

### Positive Signals
- Strong appreciation for **multi-channel support** (Telegram, DingTalk, QQ, Feishu, now Web).
- Active enthusiasm for **dreaming/memory** features when they work safely.
- Growing ecosystem interest in **custom providers** and **local model** support (Ollama).

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Problem | Action Needed |
|---|---|---|---|
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) Gemini-3-flash-preview regression | ~27 days | Open, no linked PR, blocks provider upgrade | Triage and assign |
| [#141](https://github.com/HKUDS/nanobot/issues/141) Redundant provider logic + unfixed Ruff lint | ~68 days | Open, low comments but touches core config architecture | Decide on config schema simplification |
| [#2318](https://github.com/HKUDS/nanobot/issues/2318) Tool-loop cost & reliability roadmap | ~24 days | Meta-issue tracking multiple agent-loop edge cases | Maintainer response / roadmap comment |
| [#2925](https://github.com/HKUDS/nanobot/issues/2925) PIP install `nanobot-ai[api]` fails | ~6 days | Open, blocks API feature adoption | Verify package publishing or docs |
| [#3074](https://github.com/HKUDS/nanobot/issues/3074) Message tool cross-channel delivery fails | ~2 days | Open, no PR — core messaging reliability | Reproduce and assign |
| [#3028](https://github.com/HKUDS/nanobot/issues/3028) Heartbeat duplicate cron tasks | ~3 days | Open, scheduler logic bug | Fix PR needed |

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-14.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-14

---

## 1. Today's Overview

Hermes Agent is experiencing **very high velocity** following its v0.9.0 release, with 50 issues and 50 PRs touched in the last 24 hours alone. Community activity is concentrated on platform gateway bugs (WhatsApp, BlueBubbles, Slack, Signal, Feishu), CLI/TUI polish, and provider expansion. The maintainer team is actively merging fixes — 21 PRs closed/merged versus 29 still open — suggesting a responsive but backlogged triage state. Notably, infrastructure concerns (NixOS permissions, Docker builds, Tailscale remote access) are surfacing alongside user-facing feature gaps, indicating the project is maturing beyond early adopters into broader deployment scenarios.

---

## 2. Releases

### [v0.9.0 — "The everywhere release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.13)
**Released:** April 13, 2026

| Metric | Value |
|---|---|
| Commits | 487 |
| Merged PRs | 269 |
| Resolved issues | 167 |
| Files changed | 493 |
| Insertions | 63,281 |
| Contributors | 24 |

**Headline changes:**
- **Mobile/Termux support:** Hermes now runs on Android via Termux
- **New messaging platforms:** iMessage and WeChat gateways added
- **Performance:** "Fast" mode shipped (details implied by release naming)

**Migration/breaking notes:** None explicitly flagged in release notes, but watch for gateway config changes if upgrading from pre-v0.8.0 custom platform setups.

---

## 3. Project Progress

### Merged/Closed PRs (21 total, highlights)

| PR | Author | Summary |
|---|---|---|
| [#9228](https://github.com/NousResearch/hermes-agent/pull/9228) | DeployFaith | **Mobile-responsive Web UI** — fixed layout breakage below 640px using Tailwind `sm:` breakpoints |
| [#6170](https://github.com/NousResearch/hermes-agent/pull/6170) | nepenth | **Matrix UX upgrade** — thinking fields, approval buttons, model picker via reactions |
| [#6167](https://github.com/NousResearch/hermes-agent/pull/6167) | nepenth | **Matrix tools** — 6 LLM-callable tools (send reaction, redact, set topic, etc.) with sync-to-async bridge |
| [#9255](https://github.com/NousResearch/hermes-agent/pull/9255) | MestreY0d4-Uninter | **Delegation tier system** — 5 named task profiles (`light`/`standard`/`deep`/`agentic`/`extreme`) with per-task `reasoning_effort` and model pool validation |
| [#8011](https://github.com/NousResearch/hermes-agent/pull/8011) + [#9233](https://github.com/NousResearch/hermes-agent/pull/9233) + [#9275](https://github.com/NousResearch/hermes-agent/pull/9275) | akhater, teknium1 | **Custom provider deduplication fix** — `/model` picker now correctly groups multi-model entries under one provider row instead of exploding into duplicate rows |
| [#8856](https://github.com/NousResearch/hermes-agent/pull/8856) | bugmaker2 | **Moonshot China provider** — added `moonshot-cn` domestic endpoint for mainland China users |
| [#9071](https://github.com/NousResearch/hermes-agent/issues/9071) + [#9211](https://github.com/NousResearch/hermes-agent/issues/9211) | (closed via fixes) | **CLI status bar `ctx --` bug** — resolved for both LCM context engine and plugin context engines missing `context_length` |

**What advanced:** Matrix is now a first-class platform with both UX and tool support. The delegation system got a major architectural upgrade. Web UI and mobile responsiveness are being actively hardened post-v0.9.0.

---

## 4. Community Hot Topics

### Most Active Issues/PRs by Engagement

| # | Title | Comments | Link | Underlying Need |
|---|---|---|---|---|
| #501 | **Web UI Gateway** — local browser interface with streaming, artifacts, rich rendering | 12 | [Issue](https://github.com/NousResearch/hermes-agent/issues/501) | Users want a competitive local alternative to Claude/ChatGPT web interfaces; this is the longest-running visible gap |
| #7335 | **More than 1000 open issues** — meta-concern about issue growth | 9 | [Issue](https://github.com/NousResearch/hermes-agent/issues/7335) | Community anxiety about project scale outpacing maintainer bandwidth; calls for triage process improvements |
| #4408 | package.json/package-lock.json out of sync after Camofox addition *(closed)* | 3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/4408) | Dependency hygiene for self-updating installs |
| #7966 | Gateway startup session suspension datetime/float comparison *(closed)* | 3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/7966) | Reliability of session state on restart |
| #7798 | smart_model_routing preflight compression uses cheap model's threshold | 3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/7798) | Correctness of the routing+compression pipeline — can cause silent context mishandling |
| #9179 | **SECURITY.md** — request to enable GitHub private vulnerability reporting | 3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/9179) | Maturity signal: community wants responsible disclosure infrastructure |

**Analysis:** The Web UI (#501) remains the dominant feature gap. The 1000+ open issues meta-thread (#7335) suggests the project may need a public triage strategy or bot automation to prevent contributor fatigue.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) | `smart_model_routing` triggers preflight compression against cheap model's threshold, potentially corrupting context for expensive-model turns | **None linked** |
| 🔴 **High** | [#8596](https://github.com/NousResearch/hermes-agent/issues/8596) | `hermes claw cleanup` and `openclaw doctor` silently destroy runtime state, plugins, and agent config after migration | **None linked** |
| 🟡 **Medium** | [#9265](https://github.com/NousResearch/hermes-agent/issues/9265) + [#9263](https://github.com/NousResearch/hermes-agent/issues/9263) | BlueBubbles adapter completely broken: invalid webhook event name + missing password in URL → 401s on every dispatch, no inbound messages | **None linked** (two fresh issues, no PRs yet) |
| 🟡 **Medium** | [#8764](https://github.com/NousResearch/hermes-agent/issues/8764) | Feishu card interactive buttons fail with code 200340, no callback received, severe timeout | **None linked** |
| 🟡 **Medium** | [#5434](https://github.com/NousResearch/hermes-agent/issues/5434) | Self-hosted Honcho memory broken: `honcho-ai` SDK 2.x incompatible with Honcho server 3.x | **None linked** |
| 🟡 **Medium** | [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | "Response truncated due to output length limit" breaks long-form responses across CLI and gateways | **None linked** |
| 🟡 **Medium** | [#9080](https://github.com/NousResearch/hermes-agent/issues/9080) | Signal gateway prepends `▉` character to every response after latest update | **None linked** |
| 🟢 **Low** | [#8478](https://github.com/NousResearch/hermes-agent/issues/8478) | Ctrl+D behavior in CLI inconsistent with Unix shell conventions | **None linked** |
| 🟢 **Low** | [#9270](https://github.com/NousResearch/hermes-agent/issues/9270) | Empty LLM responses leak literal `"(No response generated)"` to users, including cron targets | **None linked** |
| 🟢 **Low** | [#9268](https://github.com/NousResearch/hermes-agent/issues/9268) | Slack `reply_in_thread: false` ignored, always threads | **None linked** |

**Fixed today:** [#7966](https://github.com/NousResearch/hermes-agent/issues/7966) (datetime/float crash), [#9071](https://github.com/NousResearch/hermes-agent/issues/9071) + [#9211](https://github.com/NousResearch/hermes-agent/issues/9211) (`ctx --` status bar), [#4408](https://github.com/NousResearch/hermes-agent/issues/4408) (package lock sync).

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in next version |
|---|---|---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | **Web UI Gateway** — full local browser interface with streaming, artifacts, rich rendering | **High** — most commented issue, clear competitive parity need |
| [#9269](https://github.com/NousResearch/hermes-agent/issues/9269) | **Tailscale serve integration** for secure remote API/WebUI access | Medium — fits "everywhere" narrative, low implementation surface |
| [#9154](https://github.com/NousResearch/hermes-agent/issues/9154) | **Feishu auto-thread** with topic-level session isolation (Discord parity) | Medium — platform parity request, engaged user base |
| [#9245](https://github.com/NousResearch/hermes-agent/issues/9245) | **Word wrap for streamed TUI responses** | Medium — pure UI polish, good first issue |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) | **Ink/React TUI refactor** — replace prompt_toolkit with JSON-RPC React terminal UI | Medium/Long-term — large architectural PR, ongoing since April 3 |

**Prediction:** The Web UI (#501) is the strongest candidate for v0.10.0 or a v0.9.x minor release. Tailscale and Feishu threading are plausible follow-ups.

---

## 7. User Feedback Summary

### Pain Points
- **Gateway reliability:** Multiple platforms (BlueBubbles, Feishu, Signal, WhatsApp, Slack) have broken or regressed behaviors, suggesting the "everywhere" expansion in v0.9.0 may have outpaced QA.
- **Context/compression pipeline:** Users are hitting subtle but serious bugs in `smart_model_routing` and context overflow handling (#7798, #7237, #9181).
- **Self-hosting friction:** NixOS permission issues (#9239), Docker build failures (#8828 / #8838), and missing security infrastructure (#9179) indicate deployment at scale is rough.
- **Migration safety:** [#8596](https://github.com/NousResearch/hermes-agent/issues/8596) reveals destructive CLI behavior that can wipe user state without warning.

### Positive Signals
- **Matrix platform** received significant investment and community praise via merged PRs.
- **Delegation tiers** (#9255) show the project advancing toward production task-routing sophistication.
- **Provider diversity** (Arcee, Moonshot CN, Xiaomi MiMo, vLLM local fixes) demonstrates active ecosystem expansion.

---

## 8. Backlog Watch

| Issue/PR | Age | Why it needs attention |
|---|---|---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | ~5 weeks | Highest-engagement feature request; no maintainer roadmap comment visible |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) | 4 days | Meta-issue about 1000+ open issues; needs maintainer response on triage strategy |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) | ~11 days | Large TUI refactor PR (Ink/React); no merge or detailed review feedback visible — risk of bitrot |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) | 3 days | Core routing bug with potential for silent context corruption; no linked fix |
| [#8596](https://github.com/NousResearch/hermes-agent/issues/8596) | 2 days | Data-loss bug in migration tooling; no PR response yet |

---

*Digest generated from GitHub activity for NousResearch/hermes-agent on 2026-04-14.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-14

## 1. Today's Overview

PicoClaw shows **very high development velocity** with 41 PRs and 5 issues updated in the last 24 hours, indicating an active pre-release stabilization push toward v0.2.6. The project released a new nightly build (`v0.2.6-nightly.20260413.6d037919`) while maintaining a heavy open PR backlog of 29 items. Community activity is dominated by security hardening efforts, multi-channel configuration refactors, and tooling bug fixes. A notable process issue emerged around an irrelevant SAP CLA being used for contributions. Overall project health is **strong on momentum but strained on review bandwidth**.

---

## 2. Releases

**v0.2.6-nightly.20260413.6d037919** — Nightly Build
- Automated nightly from `main` branch; explicitly marked as potentially unstable
- Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.6...main
- *No formal release notes or migration guidance provided.*

---

## 3. Project Progress

### Merged/Closed PRs (12 total, key items highlighted)

| PR | Author | Summary | Link |
|---|---|---|---|
| #2481 | cytown | **Multi-instance channel config support** — refactored `config.Channel` to support multiple instances, introduced `channel_list`, bumped config version to 3 | https://github.com/sipeed/picoclaw/pull/2481 |
| #2507 | cytown | Bug fix: `allowFrom` containing empty string | https://github.com/sipeed/picoclaw/pull/2507 |
| #2508 | cytown | Batch bug fixes: `hiddenValues` panic in `manager_channel.go`, `GetDecoded()` error handling in `weixin.go` | https://github.com/sipeed/picoclaw/pull/2508 |
| #2495 | liuy | `/clear` command now properly clears seahorse SQLite DB (not just JSONL history) | https://github.com/sipeed/picoclaw/pull/2495 |
| #2492 | rjungles | Protoagent code isolation | https://github.com/sipeed/picoclaw/pull/2492 |
| #2509 | rjungles | Policy evaluation system with YAML config, tool/intent control lists, regex argument matching | https://github.com/sipeed/picoclaw/pull/2509 |
| #2510 | rjungles | Security in PicoClaw with OPA | https://github.com/sipeed/picoclaw/pull/2510 |
| #2479 (issue closed) | — | NVIDIA API 404 bug with DeepSeek-v3.1/GLM-4.7 resolved | https://github.com/sipeed/picoclaw/issues/2479 |

**Key advances:** Configuration architecture is evolving toward multi-tenancy (channels, agents); security/policy infrastructure is being actively layered in; memory/context management (`/clear`, seahorse) is getting reliability fixes.

---

## 4. Community Hot Topics

### Most Active Threads

| # | Item | Comments | Core Need |
|---|---|---|---|
| **#1042** | `[BUG] exec工具的guardCommand方法问题` | 3 comments | **Safer tool execution without false positives** — the `guardCommand` path check incorrectly blocks legitimate commands like `curl` when `restrict_to_workspace=true` because its regex over-matches URL parameters as relative paths | https://github.com/sipeed/picoclaw/issues/1042 |
| **#2479** | `[BUG] v0.2.6` — NVIDIA API 404 with DeepSeek/GLM | 3 comments | **Provider fallback reliability** — users need robust model routing when APIs return 404 | https://github.com/sipeed/picoclaw/issues/2479 |
| **#2499** | `[Feature] Secure third-party Pico WS access + versioned compatibility policy` | 1 comment | **Official third-party integration contract** — browser extensions and external clients need auth boundaries, stable WS APIs, and documented compatibility guarantees | https://github.com/sipeed/picoclaw/issues/2499 |

**Underlying needs:** (1) Security that doesn't break legitimate use cases, (2) provider resilience, (3) ecosystem extensibility beyond the built-in WebUI.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix PR? |
|---|---|---|---|
| **High** | #1042 | `exec` tool `guardCommand` false-positive blocks harmless commands (e.g., `curl wttr.in/Beijing?T`) | **No** — open since 2026-03-04 |
| **Medium** | #2479 | NVIDIA API 404 errors with DeepSeek-v3.1 / GLM-4.7 | **Yes** — closed; related fix PR #2394 (provider 404 fallback) also open |
| **Medium** | #2504 | Audio buffer reuse bug in `DecodeOggOpus` corrupts Discord voice frames | **PR open:** #2504 | https://github.com/sipeed/picoclaw/pull/2504 |
| **Medium** | #2505 | CLI embeds vestigial workspace files instead of latest only | **PR open:** #2505 | https://github.com/sipeed/picoclaw/pull/2505 |
| **Low** | #2507 (closed) | `allowFrom` empty string bug | **Merged** |
| **Low** | #2508 (closed) | Panics from bad type assertions in `manager_channel.go` | **Merged** |

**Stability assessment:** Active bug-fixing is keeping pace, but #1042 is a lingering regression affecting core tool safety logic.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|---|---|---|
| #2499 | Secure, versioned WebSocket API for third-party clients | **High** — aligns with closed PR #2481 (multi-instance channels) and open PR #2503 (parallel agent loop); ecosystem expansion is a natural next step |
| #2493 | Multiple Feishu applications via separate config directories | **High** — directly builds on merged #2481's multi-instance channel refactor |
| #2313 | Multi-user support, security hardening, skills whitelisting ("Agent Shield") | **Medium-High** — large PR open since 2026-04-03; security is clearly a priority theme |
| #2503 | Parallel agent loop processing | **Medium** — depends on #2481 being fully integrated; significant architectural change |

---

## 7. User Feedback Summary

### Pain Points
- **Security vs. usability tension:** `guardCommand` is too aggressive and breaks real workflows (#1042)
- **Provider fragility:** Model API changes cause hard failures; users expect automatic fallback (#2479, #2394)
- **Single-tenant limitations:** Cannot run multiple Feishu apps or channel instances (#2493, #2481)
- **Memory management confusion:** `/clear` didn't actually clear SQLite-backed sessions until #2495

### Use Cases Emerging
- **Enterprise/multi-account messaging:** Multiple Feishu/Lark instances
- **Third-party client ecosystem:** Browser extensions, desktop tools wanting secure WS access
- **Voice/Discord integrations:** Opus audio pipeline quality matters for real-time bots

### Satisfaction Signals
- Rapid nightly builds and same-day bug-fix merges (e.g., cytown's #2507, #2508) show responsive maintenance
- Community members actively contributing security and policy frameworks

### Dissatisfaction Signals
- #2506: CLA points to **SAP**, not Sipeed — a procedural oversight that damages contributor trust
- #1042: Month-old open bug with no fix merged yet

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| **#1042** `guardCommand` bug | ~6 weeks open | **High** — affects core exec tool safety; PR #2378 may address it but is still open | Maintainer review of #2378 | https://github.com/sipeed/picoclaw/issues/1042 |
| **#2313** Agent Shield / multi-user hardening | ~11 days | **Medium** — large, cross-cutting PR; may bit-rot quickly | Review and scope decision | https://github.com/sipeed/picoclaw/pull/2313 |
| **#2249** Inbound context routing session refactor | ~13 days | **Medium** — architectural refactor; conflicts likely | Rebase and review | https://github.com/sipeed/picoclaw/pull/2249 |
| **#2506** Irrelevant CLA | 1 day | **Medium-High** — legal/process credibility issue | Replace or clarify CLA with Sipeed-specific agreement | https://github.com/sipeed/picoclaw/issues/2506 |

---

*Digest generated from GitHub activity for 2026-04-14.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-14

## 1. Today's Overview

NanoClaw showed **strong development velocity** over the past 24 hours with **18 tracked items** (5 issues, 13 PRs) in active motion, though **no new release was cut**. The project is clearly in a feature-expansion phase: contributors are pushing multiple channel integrations (Matrix, Discord, Twilio, IMAP/SMTP), MCP tooling enhancements, and payment/monetization experiments. However, **container infrastructure stability is emerging as a friction point**, with two fresh issues highlighting silent failures, permission mismatches, and session-management problems. Closed activity (1 issue, 5 PRs) indicates maintainers are merging at a healthy pace, but the open backlog of 12 items suggests review bandwidth may soon become a bottleneck.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Significance |
|---|---|---|
| [#1766](https://github.com/qwibitai/nanoclaw/pull/1766) | **MS Graph MCP bridge for container access** — Adds `start-mcp-proxy.sh` launcher and conditional `microsoft_graph` MCP server in agent runner | Expands enterprise/Microsoft 365 integration; closed without merge (author or maintainer decision) |
| [#1765](https://github.com/qwibitai/nanoclaw/pull/1765) | **Discord multi-bot support with per-bot trigger injection** — `DISCORD_BOTS` env var, individual identities/JID prefixes, fixed @mention trigger injection | Major scalability fix for Discord deployments; eliminates global `ASSISTANT_NAME` collision |
| [#1563](https://github.com/qwibitai/nanoclaw/pull/1563) | **Extend PII protection to PDFs and images** — Host-side `pdf-parse` + LLaVA-based image anonymization; fail-closed design | Significant security/privacy advance; keeps raw media out of containers |
| [#1743](https://github.com/qwibitai/nanoclaw/pull/1743) | **Complete ENG-123 sqlite-first self-improving memory agent** — Staged memory retrieval, confidence feedback, consolidation, "dreaming" maintenance | Core memory architecture milestone; closes a major internal engineering ticket |
| [#82](https://github.com/qwibitai/nanoclaw/pull/8282) | **PR 75** — Unclear scope; template-only submission | Appears to be cleanup/closure of an old or superseded contribution |

**Key advances:** Discord infrastructure hardened for multi-tenant use, PII pipeline now covers rich media, and the memory subsystem graduated from planning to implementation.

---

## 4. Community Hot Topics

### Most Active Threads

| Item | Activity | Analysis |
|---|---|---|
| [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) — Native runner mode (bypass Docker) | 2 comments, open since Apr 10 | **Highest-discussed open issue.** Tension between NanoClaw's security model (container isolation) and power-user needs (tmux, headed browsers, macOS APIs). Underlying need: a supported "privileged" or "host-native" execution tier without requiring full filesystem mounts. |
| [#1755](https://github.com/qwibitai/nanoclaw/issues/1755) — Update CLAUDE.md for geo-miner v2 | 1 comment, closed | Documentation debt from a skill redesign; quickly resolved, showing responsive maintenance. |

### Emerging Themes
- **Integration density:** Multiple concurrent PRs for Matrix, IMAP/SMTP, Twilio, Discord, and MCP bridges suggest the community is racing to make NanoClaw universally pluggable.
- **Monetization:** [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) (x402 micropayments) introduces a pay-per-call API access model—an early signal that operators want commercial deployment patterns.

---

## 5. Bugs & Stability

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#1762](https://github.com/qwibitai/nanoclaw/issues/1762) | **High** | Container agent fails **silently** when `agent-runner` has TypeScript compilation errors; `tsc` exits 2, container dies, retry loop spawns infinite failing containers. **All groups go silent simultaneously.** | **None identified** |
| [#1763](https://github.com/qwibitai/nanoclaw/issues/1763) | **High** | Container UID mismatch: host creates root-owned session/IPC dirs, container's `node` user (UID 1000) cannot write. SDK crashes with `EACCES` on `/home/node/.claude/debug`. Affects every new Linux group where host runs as root. | Proposed in issue: `chownForContainer()` helper; **no PR yet** |
| [#1761](https://github.com/qwibitai/nanoclaw/issues/1761) | **Medium** | Stale Claude Code sessions on EFS cause "No conversation found" errors. Gateway blindly passes stored session IDs without validation or cleanup. | **None identified** |

**Stability assessment:** Two high-severity issues (#1762, #1763) both stem from **host-container boundary fragility**—one in error propagation, one in permissions. These are deployment-blocking for Linux production users. No linked fix PRs exist as of this snapshot.

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Signal | Likelihood in Next Release |
|---|---|---|
| [#1764](https://github.com/qwibitai/nanoclaw/pull/1764) IMAP/SMTP email integration | Strong demand for bidirectional email as a first-class channel | High — well-scoped, host-side credential isolation is architecturally sound |
| [#1760](https://github.com/qwibitai/nanoclaw/pull/1760) Twilio fallback call | Voice-channel reliability for reminders/alerts | Moderate — small surface area, but test plan is unchecked |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix channel with E2EE | Privacy-conscious user base; follows established `telegram.ts` patterns | Moderate — E2EE crypto store adds operational complexity that may slow review |
| [#1757](https://github.com/qwibitai/nanoclaw/pull/1757) `send_file` MCP tool | Container-to-user file delivery is a gaps in current UX | High — narrow scope, auto path translation is a clean design |
| [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) x402 micropayments (`add-agentcash`) | Early monetization infrastructure | Low-Moderate — novel dependency (x402), may need architectural review |
| [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) Native runner mode | Recurring power-user request; conflicts with core security model | Moderate — may spawn a compromise design (e.g., opt-in privileged runner) rather than full bypass |

---

## 7. User Feedback Summary

### Pain Points
1. **Silent failures in production** (#1762) — Operators cannot debug container agent crashes because errors never surface; this is a trust/observability crisis.
2. **Linux deployment friction** (#1763) — Root-vs-node UID mismatch makes NanoClaw effectively broken on standard Linux server setups without manual workarounds.
3. **Session/EFS hygiene** (#1761) — Stale state between deployments forces manual intervention; users expect resilient session recovery.

### Use Cases Gaining Traction
- **Local-first development tools** (tmux, headed browsers) via [#1732](https://github.com/qwibitai/nanoclaw/issues/1732)
- **Enterprise messaging** (Discord multi-bot, Matrix E2EE, email)
- **Voice/telephony** (Twilio fallback for critical reminders)
- **Paid API access** via [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) — signal of commercial operator interest

### Satisfaction/Dissatisfaction
- **Satisfied with:** Pace of integrations, responsive documentation fixes (#1755), security-first design (PII protection, credential isolation in #1764).
- **Dissatisfied with:** Container runtime robustness, error visibility, and session state management in production.

---

## 8. Backlog Watch

| Item | Age | Risk | Why It Needs Attention |
|---|---|---|---|
| [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) Native runner mode | 4 days | Medium | Most-discussed feature request; without maintainer guidance, contributors may submit incompatible ad-hoc escape hatches |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix channel with E2EE | 10 days | Medium | Large PR with Rust crypto dependencies; at risk of bit-rot or merge conflicts as channel code evolves |
| [#1762](https://github.com/qwibitai/nanoclaw/issues/1762) Silent TS compilation failures | 1 day | **High** | Production stability issue; no fix PR yet. Should be fast-tracked. |
| [#1763](https://github.com/qwibitai/nanoclaw/issues/1763) UID mismatch | 1 day | **High** | Breaks Linux onboarding; proposed fix in issue body but unclaimed. |
| [#1758](https://github.com/qwibitai/nanoclaw/pull/1758) Milestone/3 mastery tracking | 1 day | Low | Template-heavy PR with unclear scope; may need clarification to avoid review limbo |

**Maintainer priority recommendation:** Triage #1762 and #1763 for immediate fix PRs; provide architectural response on #1732 to prevent fragmentation.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-14

## 1. Today's Overview
NullClaw saw modest but focused activity on 2026-04-13 with **3 new issues** and **2 updated pull requests**, all remaining open. No releases were cut. The project shows signs of active community usage with bug reports spanning core capabilities: internet search (`http_request`), sub-agent orchestration with custom providers, and OpenRouter model refresh failures. On the development side, a substantial cron subagent feature continues to mature while a new SysVinit compatibility PR broadens deployment support. Overall project health appears stable with steady contributor engagement, though the lack of merged PRs today suggests maintainers may be in review mode.

---

## 2. Releases
**No new releases.**

---

## 3. Project Progress
No PRs were merged or closed today. However, two significant contributions received updates:

- **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)** — `feat(cron): cron subagent, run history, JSON output, security hardening` by **yanggf8** (last updated 2026-04-13): A large feature adding a database-backed cron scheduler, JSON CLI output, and security hardening. This represents the most substantial capability expansion in flight.
- **[PR #810](https://github.com/nullclaw/nullclaw/pull/810)** — `service: add SysVinit fallback for nullclaw service install` by **mark-os** (opened 2026-04-13): Expands Linux service manager support beyond systemd and OpenRC, improving portability for legacy or minimal environments.

---

## 4. Community Hot Topics
| Item | Activity | Analysis |
|------|----------|----------|
| **[Issue #812](https://github.com/nullclaw/nullclaw/issues/812)** — `[bug] http_request` | 1 comment, 0 reactions | **Most active issue today.** A new user migrating from Picoclaw/ZeroClaw reports that internet search (`http_request`) fails entirely despite following examples. This signals a **onboarding friction point** for users evaluating NullClaw against competitors. |
| **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)** | Updated after 6 days | The cron subagent PR is drawing sustained attention. Its scale suggests it may be undergoing careful review; community interest in scheduled agent execution appears strong. |

**Underlying needs:** Reliable out-of-box search/tool capabilities, and enterprise-grade scheduling/orchestration features.

---

## 5. Bugs & Stability
| Severity | Issue | Fix PR? | Details |
|----------|-------|---------|---------|
| **High** | **[#812](https://github.com/nullclaw/nullclaw/issues/812)** `[bug] http_request` | ❌ No | Core capability (internet search) non-functional for a new user. Reproducibility unknown but impacts first impressions. |
| **High** | **[#811](https://github.com/nullclaw/nullclaw/issues/811)** `Fails to connect to sub agent with a custom OpenAI-compatible provider` | ❌ No | Sub-agent communication broken for custom OpenAI-compatible providers. Blocks multi-agent workflows for users not on official OpenAI. |
| **Medium** | **[#809](https://github.com/nullclaw/nullclaw/issues/809)** `models refresh fails for OpenRouter — Child.run() max_output_bytes too small` | ❌ No | Root cause **identified and precisely located** (`src/onboard.zig:2501`, 50KB default buffer too small for ~400KB OpenRouter response). Appears to be a straightforward fix. |

**Stability note:** Two of three bugs affect external API integrations (OpenAI-compatible providers, OpenRouter), suggesting the project's interoperability layer needs hardening.

---

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were opened today, but **PR #783** signals strong maintainer/community investment in:
- **Scheduled agent execution (cron)**
- **Structured JSON CLI output**
- **Audit logging and security hardening for automated runs**

These capabilities position NullClaw for server/enterprise deployments. **Prediction:** Cron subagent support and JSON output will likely ship in the next minor release.

---

## 7. User Feedback Summary
| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Migration/competitive evaluation** | Issue #812: user explicitly mentions trying Picoclaw and ZeroClaw before choosing NullClaw for its organization | 😐 Positive on architecture, negative on broken search |
| **Custom provider interoperability** | Issue #811: custom OpenAI-compatible providers fail for sub-agents | 😞 Frustrated — blocks workflow |
| **OpenRouter support quality** | Issue #809: model refresh completely broken for OpenRouter | 😞 Annoyed — but impressed by own root-cause analysis |

**Key pain point:** Users adopting NullClaw for its clean architecture are hitting integration rough edges that prevent basic workflows from functioning.

---

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| **[Issue #812](https://github.com/nullclaw/nullclaw/issues/812)** | 1 day | New user with broken core feature; fast response would reduce churn risk. |
| **[Issue #811](https://github.com/nullclaw/nullclaw/issues/811)** | 1 day | No comments yet; sub-agent orchestration is a differentiated feature, so this deserves attention. |
| **[Issue #809](https://github.com/nullclaw/nullclaw/issues/809)** | 1 day | Fix is well-scoped; ideal candidate for a quick maintainer patch or community PR. |
| **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)** | 7 days open | Large PR with broad scope. Risk of merge conflicts or reviewer fatigue if it lingers. |

**Recommendation for maintainers:** Prioritize a patch for #809 (known one-line fix area), acknowledge #812 to support user retention, and advance review of #783 to prevent stall.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-14

## 1. Today's Overview

IronClaw saw extremely high development velocity in the last 24 hours, with **45 issues updated** (38 still open, 7 closed) and **50 pull requests updated** (41 open, 9 merged/closed). No new releases were cut. Activity is heavily concentrated on **web UI stability fixes**, **agent execution reliability**, and **channel infrastructure** (pairing, WASM, CLI). The core team is clearly in active "bug bash" mode on hosted staging, with multiple XL-sized PRs landing from maintainer `henrypark133` to address critical user-facing regressions.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

### Merged/Closed PRs Today (9 total, selected highlights)

| PR | Author | Summary |
|---|---|---|
| [#2436](https://github.com/nearai/ironclaw/pull/2436) | henrypark133 | **fix(channels): pairing approval + eliminate dual card/text for gate flows** — Closed (superseded by #2432). Established pairing approval flow with `external_id` return, `RwLock` around `WasmChannel.owner_actor_id`, and SSE emission on completion. |
| [#2435](https://github.com/nearai/ironclaw/pull/2435) | henrypark133 | **fix(bridge): eliminate dual card + text for approval/auth flows** — Closed (likely consolidated). Fixed v2 engine gate-paused flows sending duplicate UI prompts; gate-pending paths now return `None` instead of text. |
| [#2431](https://github.com/nearai/ironclaw/pull/2431) | henrypark133 | **fix(web): prevent browser crash from timer leaks, DOM growth, SSE buffer** — Closed (superseded by #2433). Root cause identified: leaked `setInterval` timers, unconstrained DOM nodes, and unbounded SSE buffers caused Chrome "Pages Unresponsive" dialogs. |
| [#2200](https://github.com/nearai/ironclaw/pull/2200) | zetyquickly | **fix(engine): admin skills visible to all tenants via `system_project_id`** — Merged. Introduced `Uuid::nil` as a well-known system project for shared admin skills; fixed skill migration scoping. |
| [#2227](https://github.com/nearai/ironclaw/pull/2227) | henrypark133 | **fix(tools): normalize hyphens to underscores in MCP/WASM tool names** — Merged. Fixed dispatch failures when LLMs called `notion_notion_search` but the tool was registered as `notion_notion-search`. |

**Key advances:**
- **Tenant-scoped shared skills** now work correctly across gateway users.
- **Tool name normalization** aligns MCP/WASM registration with LLM provider behavior.
- **Web UI resource leaks** have been diagnosed and are being actively patched.
- **v2 engine gate/approval flows** are being refactored to eliminate duplicate prompts and support persistent "always approve" decisions.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | Status | Link |
|---|---|---|---|---|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth blocked: Error 400 `invalid_request` on authorize | 5 | Open | [link](https://github.com/nearai/ironclaw/issues/2229) |
| [#1852](https://github.com/nearai/ironclaw/issues/1852) | should make it easy to use | 4 | Open | [link](https://github.com/nearai/ironclaw/issues/1852) |
| [#846](https://github.com/nearai/ironclaw/issues/846) | `onboard` fails with "Failed to save settings to database", but `ironclaw` starts successfully and applies migrations | 4 | Open | [link](https://github.com/nearai/ironclaw/issues/846) |
| [#84](https://github.com/nearai/ironclaw/issues/84) | Agent system advanced features (multi-agent, streaming, thinking modes, elevated mode) | 3 | Open | [link](https://github.com/nearai/ironclaw/issues/84) |

### Analysis

- **OAuth reliability (#2229, #2391):** Two distinct Google OAuth bugs (`invalid_request` on Sheets, `access_type='offlin'` typo in Calendar) indicate the Google Suite extension auth flow is brittle and under-tested. Underlying need: **first-class, validated OAuth flows for enterprise SaaS integrations**.
- **Ease of use (#1852):** A recurring theme from non-technical users. The onboarding and configuration experience is too CLI-heavy and file-driven. Underlying need: **guided UI setup, one-click deploys, and reduced YAML/ENV archaeology**.
- **Onboarding trust (#846):** A database error during `onboard` that self-resolves on next start erodes confidence in the setup process. Underlying need: **atomic, idempotent onboarding with clear success/failure signals**.
- **Agent sophistication (#84):** The longest-running open feature request. Multi-agent routing, global sessions, and thinking modes are parity gaps vs. competing frameworks. Underlying need: **enterprise-grade agent orchestration primitives**.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **Critical** | [#2406](https://github.com/nearai/ironclaw/issues/2406) | Web UI "Pages Unresponsive" dialog and black screen crashes during extended sessions | [#2433](https://github.com/nearai/ironclaw/pull/2433) (open, replaces #2431) |
| **Critical** | [#2409](https://github.com/nearai/ironclaw/issues/2409) | User messages disappear after typing in chat (history gap before async persist) | [#2434](https://github.com/nearai/ironclaw/pull/2434) (open) |
| **High** | [#2402](https://github.com/nearai/ironclaw/issues/2402) | Bot enters infinite "Calling LLM" loop after tool operations | None identified |
| **High** | [#2408](https://github.com/nearai/ironclaw/issues/2408) | Context length overflow: input exceeds 200K token limit | None identified |
| **High** | [#2276](https://github.com/nearai/ironclaw/issues/2276) | Orchestrator crashes with HTTP 413 Payload Too Large from `nearai_chat` provider | None identified |
| **Medium** | [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth blocked (Error 400) | None identified |
| **Medium** | [#2391](https://github.com/nearai/ironclaw/issues/2391) | Google OAuth `access_type='offlin'` typo | None identified |
| **Medium** | [#2230](https://github.com/nearai/ironclaw/issues/2230) | Twitter/X connection unavailable — MCP requires manual cookie extraction | None identified |
| **Medium** | [#2240](https://github.com/nearai/ironclaw/issues/2240) | Agent retries same failing tool call up to 50 times with no duplicate detection | **Closed** — fix merged |
| **Medium** | [#2419](https://github.com/nearai/ironclaw/issues/2419) | `ironclaw status` underreports active WASM channels | [#2420](https://github.com/nearai/ironclaw/pull/2420) (open) |

**Stability assessment:** The staging environment (`nearaidev/ironclaw-dind:0.25.0`) is experiencing **significant UI and agent-loop regressions**. Four critical/high severity bugs were filed in a single day, three directly from QA bug bash sessions. The good news: core maintainers have same-day PRs up for the two most severe UI issues (#2406, #2409). The bad news: token/context management (#2408, #2276) and agent infinite loops (#2402) lack identified fixes and suggest deeper architectural stress under load.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Release |
|---|---|---|
| [#84](https://github.com/nearai/ironclaw/issues/84) | Multi-agent routing, global sessions, streaming, thinking modes, elevated mode | **Medium** — P2-P3 parity item; large scope but actively referenced |
| [#2360](https://github.com/nearai/ironclaw/issues/2360) | Built-in browser tool with `chromiumoxide` CDP and AX-tree element refs | **High** — Has dependencies (#2357-2359) already filed; browser automation is a clear gap |
| [#1609](https://github.com/nearai/ironclaw/issues/1609) | Admin management panel (web UI for users, workspaces, roles, usage) | **Low-Medium** — Blocked on #1608 (RBAC) and #1610 (SSO); large UI surface |
| [#1608](https://github.com/nearai/ironclaw/issues/1608) | RBAC with per-workspace permission matrix | **Medium** — P2, risk: high; foundational for enterprise |
| [#1610](https://github.com/nearai/ironclaw/issues/1610) | SSO/OIDC (Google, Okta, generic) | **Medium** — P1 enterprise blocker; API-only auth is explicitly called out as adoption risk |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) | Slim mode runtime, Dockerfiles, and `/health` route | **High** — PR is open and active; directly supports hosted/scaling goals |

**Prediction:** The next release will likely emphasize **operational readiness** (slim mode, health routes, RBAC foundations) and **agent capabilities** (browser tool, parallel execution). Enterprise auth (SSO) may follow in the subsequent cycle.

---

## 7. User Feedback Summary

### Real Pain Points

| Source | Pain Point | Category |
|---|---|---|
| #1852 | Configuration is too hard for non-IT users | Onboarding UX |
| #846 | `onboard` appears to fail even when it partially succeeds | Onboarding trust |
| #1846 | Hosted UI upgrade caused data loss (reverted to v0.21.0, lost Telegram connection) | Upgrade safety |
| #1680 | Railway one-click template: `LLM_*` env vars not visible at runtime; model stuck on Anthropic Sonnet | Deploy reliability |
| #2426 | Telegram "open mode" splits identity from web UI history without warning | Channel UX / Documentation |
| #1339 | No `armv7` support for Raspberry Pi | Platform portability |

### Satisfaction Signals
- Users praise launch speed and safety: *"You are making claws launching very fast and safe. That's wonderful!"* (#1852)
- The project is attracting non-technical users, which is both an opportunity and a warning sign for UX debt.

### Dissatisfaction Signals
- **Setup fragility:** Onboarding, upgrades, and one-click deploys all have reported failure modes.
- **Hosted staging instability:** The 2026-04-13 bug bash surfaced multiple same-day regressions in the web UI and agent loop.
- **Integration brittleness:** Google OAuth and Twitter/X MCP require manual workarounds or fail outright.

---

## 8. Backlog Watch

| Issue/PR | Age | Why It Needs Attention |
|---|---|---|
| [#1852](https://github.com/nearai/ironclaw/issues/1852) | ~13 days | High-visibility UX request from a non-technical user; no maintainer response visible. IronClaw's growth depends on solving this. |
| [#846](https://github.com/nearai/ironclaw/issues/846) | ~35 days | Database error during first-run onboarding. Undermines trust for new adopters. |
| [#84](https://github.com/nearai/ironclaw/issues/84) | ~59 days | Long-running feature parity issue. Referenced in planning but no subtasks checked off. Needs roadmap communication. |
| [#1339](https://github.com/nearai/ironclaw/issues/1339) | ~27 days | ARMv7/Raspberry Pi support. Niche but vocal community; a simple "won't fix" or "help wanted" label would help. |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | ~24 days | XL PR adding Aliyun Coding Plan support. Open with no recent comments; may need review bandwidth or risk going stale. |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | ~27 days | XL PR for per-channel MCP and built-in tool filtering. Important for multi-channel deployments; needs maintainer review. |

---

*Digest generated from GitHub activity for nearai/ironclaw on 2026-04-14.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-14

## 1. Today's Overview

LobsterAI saw **high engineering velocity** on 2026-04-13 with **22 pull requests updated** (15 merged/closed, 7 open) and **1 new release** shipped. Activity was heavily concentrated on **release stabilization** for the 2026.4.13 milestone, **OpenClaw runtime reliability**, and **security hardening** (log sanitization, auth race fixes). The single active issue relates to enterprise group policy being overwritten, suggesting ongoing friction in **B2B/enterprise deployments**. Overall project health appears strong with rapid merge cycles, though a **revert chain** (#1651 → #1655 → #1657) indicates some turbulence in landing workspace-path fixes.

---

## 2. Releases

### [LobsterAI 2026.4.13](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.13)
Released: 2026-04-13

| Change | Author | PR |
|--------|--------|-----|
| **fix(build)**: Speed up NSIS overlay install with async old directory removal | @winsan-zhang | [#1633](https://github.com/netease-youdao/LobsterAI/pull/1633) |
| **fix(scheduled-tasks)**: Reset dirty state after saving task | @nmgwddj | [#1645](https://github.com/netease-youdao/LobsterAI/pull/1645) |
| **fix(openclaw)**: Backfill session keep-alive policy (30-day default) | @wulei05 | [#1638](https://github.com/netease-youdao/LobsterAI/pull/1638) |
| **refactor(providers)**: Unify provider configuration registry | — | — |

**Migration notes**: The session keep-alive policy now defaults to **30 days** for OpenClaw continuity; no manual migration required. Provider metadata consolidation may affect custom provider configs—verify `openclaw.json` regeneration on first startup.

---

## 3. Project Progress

### Merged/Closed PRs (15 total)

**OpenClaw Runtime & Reliability**
- **[#1658](https://github.com/netease-youdao/LobsterAI/pull/1658)** — Restored silent scope-upgrade for internal `cron` loopback clients, fixing a regression from a CVSS 9.2 security patch.
- **[#1657](https://github.com/netease-youdao/LobsterAI/pull/1657)** — *Restored* the non-main agent persona file fix after accidental revert (#1655).
- **[#1654](https://github.com/netease-youdao/LobsterAI/pull/1654)** — Surfaces `phase=error` in agent lifecycle when chat error events are missing; prevents sessions from hanging "in progress."
- **[#1652](https://github.com/netease-youdao/LobsterAI/pull/1652)** — Added `[AbortDiag]` diagnostic logging for premature timeout investigation.
- **[#1651](https://github.com/netease-youdao/LobsterAI/pull/1651)** → **[#1655](https://github.com/netease-youdao/LobsterAI/pull/1655)** (reverted) → **[#1657](https://github.com/netease-youdao/LobsterAI/pull/1657)** (restored) — Fixed non-main agent persona files not loading due to workspace path mismatch.
- **[#1650](https://github.com/netease-youdao/LobsterAI/pull/1650)** — Prevents unnecessary OpenClaw gateway restart on config hot-reload.
- **[#1647](https://github.com/netease-youdao/LobsterAI/pull/1647)** — Resolves MCP Bridge 401 auth mismatch on startup (race condition with `LOBSTER_MCP_BRIDGE_SECRET`).
- **[#1638](https://github.com/netease-youdao/LobsterAI/pull/1638)** — Backported session keepalive policy (30-day default).

**Platform & Integrations**
- **[#1648](https://github.com/netease-youdao/LobsterAI/pull/1648)** — Fixed multi-bot agent creation; changed Feishu advanced settings to default group chats to `open`.
- **[#1646](https://github.com/netease-youdao/LobsterAI/pull/1646)** — Unified provider config registry and fixed MiniMax OpenClaw sync.
- **[#1649](https://github.com/netease-youdao/LobsterAI/pull/1649)** → **[#1656](https://github.com/netease-youdao/LobsterAI/pull/1656)** (reverted) — Skill creation path prompt fix was reverted.

**Release Engineering**
- **[#1659](https://github.com/netease-youdao/LobsterAI/pull/1659)** — Release branch for 2026.04.13 (closed).

---

## 4. Community Hot Topics

| Item | Status | Heat | Analysis |
|------|--------|------|----------|
| **[#1661](https://github.com/netease-youdao/LobsterAI/pull/1661)** — Desensitize exported logs (mask API keys, Bearer tokens, OAuth tokens) | **OPEN** | 🔥 High | Critical security PR. Addresses a **compliance and trust gap**: users can currently export logs containing plaintext secrets. Strong signal that enterprise/security review is tightening. |
| **[#1660](https://github.com/netease-youdao/LobsterAI/pull/1660)** — Non-main agent welcome screen shows agent name & description | **OPEN** | 🔥 High | UX personalization for multi-agent workflows. Indicates product strategy is shifting from "single assistant" to **agent marketplace/persona switching** as a first-class experience. |
| **[#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)** — `groupPolicy` periodically overwritten to `allowlist` | **OPEN** | 🌡️ Warm | Only open issue. Suggests **state sync conflict** between local config and remote/cloud policy push. Enterprise admin tooling may need improvement. |

**Underlying needs**: (1) **Security/compliance readiness** for log exports and secret handling; (2) **Multi-agent UX maturity**; (3) **Enterprise policy durability**—admins need guarantees that group policies stick.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **🔴 Critical** | Log exports leak plaintext API keys, Bearer tokens, OAuth credentials | Open | **[#1661](https://github.com/netease-youdao/LobsterAI/pull/1661)** |
| **🔴 Critical** | MCP Bridge 401 auth mismatch on startup (race condition) | **Fixed** | **[#1647](https://github.com/netease-youdao/LobsterAI/pull/1647)** |
| **🟠 High** | Agent lifecycle `phase=error` missing → sessions hang "in progress" | **Fixed** | **[#1654](https://github.com/netease-youdao/LobsterAI/pull/1654)** |
| **🟠 High** | Non-main agent persona files fail to load (workspace path mismatch) | **Fixed** (restored in #1657) | **[#1657](https://github.com/netease-youdao/LobsterAI/pull/1657)** |
| **🟠 High** | OpenClaw gateway unnecessarily restarts on config hot-reload | **Fixed** | **[#1650](https://github.com/netease-youdao/LobsterAI/pull/1650)** |
| **🟡 Medium** | `groupPolicy` overwritten to `allowlist` periodically | Open | None yet |
| **🟡 Medium** | Premature "task timeout" during conversations (intermittent, under investigation) | Investigating | **[#1652](https://github.com/netease-youdao/LobsterAI/pull/1652)** (diagnostics only) |
| **🟡 Medium** | `cron` loopback clients broken by scope-upgrade security patch | **Fixed** | **[#1658](https://github.com/netease-youdao/LobsterAI/pull/1658)** |

**Regressions noted**: A fix-land-revert-restore cycle on non-main agent workspace paths (#1651 → #1655 → #1657) suggests release-branch merge discipline needs tightening.

---

## 6. Feature Requests & Roadmap Signals

**In-flight features likely for next release:**
- **Log desensitization/sanitization** ([#1661](https://github.com/netease-youdao/LobsterAI/pull/1661)) — security hardening, almost certain to merge.
- **Dynamic agent welcome screens** ([#1660](https://github.com/netease-youdao/LobsterAI/pull/1660)) — multi-agent UX polish.
- **Session/message pagination** ([#924](https://github.com/netease-youdao/LobsterAI/pull/924)) — performance at scale; has been open since March 26, likely nearing merge.

**Emerging signals:**
- **Provider registry unification** ([#1646](https://github.com/netease-youdao/LobsterAI/pull/1646)) + MiniMax OAuth support points to **expanding LLM provider ecosystem**.
- **Feishu (Lark) integration hardening** ([#1648](https://github.com/netease-youdao/LobsterAI/pull/1648)) — enterprise IM integration is a priority market.
- **Electron 41.x upgrade** ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)) and **Claude Agent SDK bump** ([#1278](https://github.com/netease-youdao/LobsterAI/pull/1278)) — infrastructure modernization in progress.

---

## 7. User Feedback Summary

| Pain Point | Source | Severity |
|------------|--------|----------|
| **Exported logs contain secrets** | PR #1661 description + screenshot | 🔴 Critical — compliance risk |
| **groupPolicy keeps reverting** | Issue #1653 | 🟠 High — breaks enterprise access control |
| **Sessions hang with no error feedback** | PR #1654 | 🟠 High — erodes trust in agent reliability |
| **Non-main agents lose personality/persona** | PR #1651/#1657 | 🟡 Medium — degrades multi-agent experience |
| **"Task timeout" falsely triggers mid-conversation** | PR #1652 | 🟡 Medium — intermittent but frustrating |

**Satisfaction drivers**: Rapid fix turnaround (multiple bugs patched same day they were identified).  
**Dissatisfaction drivers**: Enterprise policy drift (#1653) and intermittent timeout false-alarms (#1652) remain unresolved.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs Attention |
|------|-----|------|---------------|
| **[#924](https://github.com/netease-youdao/LobsterAI/pull/924)** — Session/message pagination | 18 days | 🟠 **Medium-High** | Performance-critical for power users; stalled despite being technically ready. |
| **[#1498](https://github.com/netease-youdao/LobsterAI/pull/1498)** — Fix all 165 ESLint errors | 6 days | 🟡 Medium | Large refactor (161 files); needs careful review to avoid merge conflicts. |
| **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — Electron 41.x + electron-builder bump | 11 days | 🟡 Medium | Security and compatibility; dependabot PRs often deprioritized. |
| **[#1278](https://github.com/netease-youdao/LobsterAI/pull/1278)** — `@anthropic-ai/claude-agent-sdk` 0.2.12 → 0.2.90 | 11 days | 🟡 Medium | Major SDK version jump; may block Anthropic feature parity. |
| **[#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)** — `groupPolicy` overwritten | 1 day | 🟠 **Medium-High** | Only open issue with user report; needs maintainer triage and reproduction. |

**Recommendation**: Prioritize [#924](https://github.com/netease-youdao/LobsterAI/pull/924) pagination and [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) enterprise policy bug to prevent user churn in two high-value segments (power users and B2B customers).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-14

## 1. Today's Overview

Moltis had an **extremely active day** with **18 merged/closed PRs and 7 closed issues**, indicating a high-velocity, well-maintained project. The activity was dominated by two themes: **rapid bug-fix releases** (two versions shipped: `20260413.01` and `20260413.03`) and **major architectural refactoring** of the gateway and node execution systems. Notably, all 7 issues closed today were resolved with corresponding PRs, showing strong maintainer responsiveness. The project health appears **excellent** with zero open issues/PRs left stale from today's batch.

---

## 2. Releases

Two releases shipped today, both dated 2026-04-13:

- **[`20260413.03`](https://github.com/moltis-org/moltis/releases/tag/20260413.03)** — Likely a follow-up patch addressing regressions introduced earlier in the day.
- **[`20260413.01`](https://github.com/moltis-org/moltis/releases/tag/20260413.01)** — Initial patch release.

Given the PR timeline, these releases almost certainly contain:
- **Fix for tool argument serialization regression** ([#693](https://github.com/moltis-org/moltis/issues/693) / [#697](https://github.com/moltis-org/moltis/pull/697))
- **Fix for MCP tool schema sanitization** ([#694](https://github.com/moltis-org/moltis/issues/694) / [#698](https://github.com/moltis-org/moltis/pull/698))
- **Session archiving UI** ([#701](https://github.com/moltis-org/moltis/issues/701) / [#702](https://github.com/moltis-org/moltis/pull/702))
- **Cached input token display** ([#692](https://github.com/moltis-org/moltis/issues/692) / [#699](https://github.com/moltis-org/moltis/pull/699))

**Breaking changes / migration notes:** None explicitly flagged in PR summaries, but users on `20260413` should upgrade immediately due to confirmed tool serialization regressions.

---

## 3. Project Progress

### Features Shipped
| PR | Description |
|---|---|
| [#702](https://github.com/moltis-org/moltis/pull/702) | **Session archiving controls in web UI** — Exposes the pre-existing `archived` field in gateway APIs and adds hide/reveal/archive/unarchive UI. |
| [#699](https://github.com/moltis-org/moltis/pull/699) | **Cached input token visibility** — Persists cached token counts through chat broadcasts and displays them in assistant footers and debug panels. |
| [#700](https://github.com/moltis-org/moltis/pull/700) | **Local Whisper setup UI** — Onboarding and settings for local/OpenAI-compatible Whisper and OpenAI TTS via configurable `base_url`. |
| [#48](https://github.com/moltis-org/moltis/pull/48) | **XMPP channel support** — Full multi-channel architecture refactor; adds 1:1 chat, MUC, reactions, and typing indicators via `tokio-xmpp`. |
| [#199](https://github.com/moltis-org/moltis/pull/199) | **Voicebox TTS provider** — Local voice cloning via Qwen3-TTS server, behind `voicebox` feature flag. |
| [#689](https://github.com/moltis-org/moltis/pull/689) | **Structured document persistence** — Telegram documents now persist as saved-file metadata rather than body text only. |

### Bug Fixes
| PR | Description |
|---|---|
| [#697](https://github.com/moltis-org/moltis/pull/697) | Fixed OpenAI-compatible tool argument parsing for falsy/null values (`0`, `false`, `null`). |
| [#698](https://github.com/moltis-org/moltis/pull/698) | Sanitized MCP tool schemas by stripping unsupported JSON Schema keywords (`not`, `if/then/else`) before OpenAI serialization. |
| [#696](https://github.com/moltis-org/moltis/pull/696) | Fixed tool-call regressions for cron reminders and legacy internal WASM tools. |
| [#659](https://github.com/moltis-org/moltis/pull/659) | Added Browserless v2 websocket path compatibility in sandbox mode. |

### Architecture / Refactoring
| PR | Description |
|---|---|
| [#695](https://github.com/moltis-org/moltis/pull/695) | Split oversized Rust modules across `agents`, `gateway`, and `provider-setup`; removed file-size allowlist. |
| [#690](https://github.com/moltis-org/moltis/pull/690) | Extracted MCP service logic from gateway into dedicated `moltis-mcp` crate. |
| [#691](https://github.com/moltis-org/moltis/pull/691) | Grouped lock-free broadcast state into new `Broadcaster` struct. |
| [#688](https://github.com/moltis-org/moltis/pull/688) / [#685](https://github.com/moltis-org/moltis/pull/685) / [#683](https://github.com/moltis-org/moltis/pull/683) / [#703](https://github.com/moltis-org/moltis/pull/703) | Systematic decoupling of node execution types from gateway; introduced `NodeInfoProvider` trait, moved pure helpers, then merged types back into owning crates. |

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|---|---|---|
| [**#548**](https://github.com/moltis-org/moltis/issues/548) — Application/channel-level proxy support | **5 comments**, closed | Longest-running active issue. Underlying need: **enterprise/network-restricted deployments** requiring fine-grained proxy routing. Despite closure, no linked fix PR appeared today; may have been closed as duplicate or out-of-scope. Worth monitoring for reopening. |
| [**#646**](https://github.com/moltis-org/moltis/issues/646) — Unable to login to remote deployment | **3 comments**, closed | High-priority operational issue. Suggests **authentication/SSO pain points in self-hosted setups** — a recurring friction point for open-source AI assistants. |

Other issues had ≤1 comment, indicating either straightforward fixes or lower community debate volume.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Details |
|---|---|---|---|
| **Critical** | [#693](https://github.com/moltis-org/moltis/issues/693) — Serialization with tools in `20260413` | [#697](https://github.com/moltis-org/moltis/pull/697) | Falsy/null tool arguments mishandled on OpenAI-compatible providers. **Fixed same day.** |
| **Critical** | [#694](https://github.com/moltis-org/moltis/issues/694) — MCP tool schemas with `not` keyword rejected by OpenAI | [#698](https://github.com/moltis-org/moltis/pull/698) | Attio MCP tools unusable. Caused by forwarding raw JSON Schema with unsupported keywords. **Fixed same day.** |
| **High** | [#646](https://github.com/moltis-org/moltis/issues/646) — Unable to login to remote deployment | *Not visible in today's PRs* | Self-hosted auth failure; closed but fix source unclear. |
| **Medium** | [#696](https://github.com/moltis-org/moltis/pull/696) — Tool-call compatibility regressions (cron, WASM tools) | [#696](https://github.com/moltis-org/moltis/pull/696) | Internal tool leakage and cron schema issues. **Fixed same day.** |

**Stability assessment:** The `20260413` release introduced **multiple tool-serialization regressions** that were caught and patched within hours. This suggests either a complex release pipeline or insufficient pre-release integration testing for the MCP/tool-call paths. The rapid fix turnaround is positive, but the pattern warrants closer QA attention.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|---|---|---|
| [#701](https://github.com/moltis-org/moltis/issues/701) | Archive sessions/conversations | **Shipped today** (#702) |
| [#692](https://github.com/moltis-org/moltis/issues/692) | Show cached input tokens in chat | **Shipped today** (#699) |
| [#570](https://github.com/moltis-org/moltis/issues/570) | Local OpenAI Whisper setup flow | **Shipped today** (#700) |
| [#548](https://github.com/moltis-org/moltis/issues/548) | Application/channel-level proxy support | **Medium** — enterprise need, but may require architectural negotiation. |
| *(implied by #48)* | Multi-channel architecture (XMPP) | **Shipped today** — major platform expansion. |

**Roadmap signal:** Moltis is aggressively expanding **voice infrastructure** (Whisper, Voicebox, TTS configurability) and **channel diversity** (XMPP alongside Telegram). The next frontier likely includes **more enterprise controls** (proxying, SSO hardening) and **additional channel integrations** (Discord, Slack, Matrix).

---

## 7. User Feedback Summary

### Pain Points
- **Tool/MCP reliability:** Users on `20260413` immediately hit serialization failures with real MCP servers (Attio) and falsy arguments. This is the most acute dissatisfaction signal.
- **Self-hosted auth:** Remote deployment login failures (#646) indicate deployment complexity remains a barrier.
- **Proxy support:** Enterprise users need granular proxy controls (#548), currently unmet.

### Positive Signals
- **Rapid maintainer response:** All reported regressions fixed within hours.
- **Voice/local AI demand:** Strong user interest in local Whisper and voice cloning providers.
- **Session management:** Users value conversation hygiene (archiving) and token transparency (cached counts).

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|---|---|---|---|
| [**#548**](https://github.com/moltis-org/moltis/issues/548) — Proxy support | ~10 days | **Medium** | Most-commented open issue recently closed without visible code resolution. If closed as "won't fix," expect enterprise user pushback. If deferred, needs clear milestone assignment. |
| *(No other stale high-priority items visible)* | — | — | Today's batch was fully resolved. |

**Maintainer attention needed:** Clarification on the resolution path for **#548** would reduce community uncertainty. Otherwise, backlog health is strong.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-14

## 1. Today's Overview

CoPaw (now branded as QwenPaw) showed **very high community activity** over the past 24 hours with **40 updated issues** (28 open/active, 12 closed) and **50 updated pull requests** (30 open, 20 merged/closed). The project released **v1.1.1-beta.1**, indicating active iteration. A significant portion of activity revolves around the **CoPaw → QwenPaw rebrand migration**, with users reporting confusion over CLI commands, directory structures, and coexistence of old/new binaries. The maintainer team is responsive—multiple bugs and feature requests filed today already have associated fix PRs under review or merged.

---

## 2. Releases

### v1.1.1-beta.1
- **News/docs update** — updated project news ([PR #3287](https://github.com/agentscope-ai/QwenPaw/pull/3287))
- **Branding chore** — updated IP/logo assets ([PR #3289](https://github.com/agentscope-ai/QwenPaw/pull/3289))
- **Version bump** to `1.1.1b1` ([PR #3289](https://github.com/agentscope-ai/QwenPaw/pull/3289))

**Migration notes:** No breaking changes documented in the release notes themselves, but **user reports indicate real-world friction**: the `qwenpaw` command may not be found post-update (requires manual PATH addition to `~/.qwenpaw/bin`), and legacy `copaw` app/binaries coexist with `qwenpaw` equivalents. Users also observe that agent/skill/workspace data remains in `~/.copaw/` while the new install only populates `~/.qwenpaw/bin` and `venv` ([Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)).

---

## 3. Project Progress

### Merged/Closed PRs Today (selected)

| PR | Description | Status |
|---|---|---|
| [#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343) | chore(version): bumping version to 1.1.1b2 | **Merged** |
| [#3341](https://github.com/agentscope-ai/QwenPaw/pull/3341) | Fix(Provider): Enable Model Discovery for all Providers | **Merged** |
| [#3337](https://github.com/agentscope-ai/QwenPaw/pull/3337) | feat(DingTalk): support media delivery in AI Card mode & prevent base64 overflow | **Merged** |
| [#3335](https://github.com/agentscope-ai/QwenPaw/pull/3335) | feat: add RESTful API doc & minor opt | **Merged** |
| [#3164](https://github.com/github/agentscope-ai/QwenPaw/pull/3164) | feat(tool): refine browser start strategy and private mode handling | **Merged** |
| [#3136](https://github.com/agentscope-ai/QwenPaw/pull/3136) | perf(channels): QQ/WeChat channel stop() blocks asyncio event loop for up to 8-10 seconds | **Merged** |
| [#3331](https://github.com/agentscope-ai/QwenPaw/pull/3331) | fix(channels): Feishu channel WebSocket crashes with cross-loop RuntimeError in multi-agent environment | **Merged** |
| [#3265](https://github.com/agentscope-ai/QwenPaw/pull/3265) | fix(console): dark mode pinned-chat button contrast too low | **Merged** |
| [#3247](https://github.com/agentscope-ai/QwenPaw/pull/3247) | feat: cancel already-selected skills for agents | **Merged** |
| [#3088](https://github.com/agentscope-ai/QwenPaw/pull/3088) | fix: agent skill config mysteriously selects all skills on re-edit | **Merged** |
| [#2931](https://github.com/agentscope-ai/QwenPaw/pull/2931) | fix: newly created agent defaults to copying all skills | **Merged** |
| [#2852](https://github.com/agentscope-ai/QwenPaw/pull/2852) | fix: Feishu group chat quoted file messages not recognized (private chat works) | **Merged** |
| [#3075](https://github.com/agentscope-ai/QwenPaw/pull/3075) | question resolved: browser_visible CAPTCHA triggering | **Closed** |

**Key advances:**
- **Channel reliability:** Fixed Feishu WebSocket crash in multi-agent setups, DingTalk base64 overflow, and QQ/WeChat blocking shutdown.
- **Console UX:** Dark-mode fixes, skill selection bugs resolved, and `/clear` chat history support in flight ([PR #3348](https://github.com/agentscope-ai/QwenPaw/pull/3348) open).
- **Provider ecosystem:** Model discovery enabled across all providers; new Venice AI provider pending ([PR #1088](https://github.com/agentscope-ai/QwenPaw/pull/1088)).
- **Security:** localhost API auth bypass removed ([PR #2840](https://github.com/agentscope-ai/QwenPaw/pull/2840) under review).

---

## 4. Community Hot Topics

| Item | Comments | Why It's Hot |
|---|---|---|
| [#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 55 | The central contribution board. Task 6 (file operation rollback) now has an open PR ([#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346)), showing the backlog is converting into code. |
| [#3288 How to smoothly upgrade CoPaw → QwenPaw](https://github.com/agentscope-ai/QwenPaw/issues/3288) | 23 | **Core migration anxiety.** Users want to preserve agents, configs, and memory. Closed without a canonical migration guide—gap in documentation. |
| [#2377 Automatic interruption during long tasks](https://github.com/agentscope-ai/QwenPaw/issues/2377) | 8 | Agent "gives up" after only a few files despite batching and checkpointing. Suggests **task-loop robustness** issues in production workloads. |
| [#2301 Suggestions on updates, /approve UI, model switching](https://github.com/agentscope-ai/QwenPaw/issues/2301) | 8 | **Umbrella UX feedback.** One-click updates, button-based approvals, auto model-failover, self-evolution, and mobile continuity. Highly upvoted themes. |
| [#2897 vLLM Qwen3.5-9B: think content not displayed in frontend](https://github.com/agentscope-ai/QwenPaw/issues/2897) | 7 | Deployment/integration gap between reasoning models and the CoPaw console. |

**Underlying needs:** smoother rebrand migration, **long-running task reliability**, **one-click/no-downtime updates**, and **better reasoning-model UI support**.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | Agent interrupts itself during large file batches despite checkpointing | **None yet** |
| 🔴 **High** | [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) | Feishu WebSocket cross-loop RuntimeError in multi-agent env | ✅ Fixed ([#3331](https://github.com/agentscope-ai/QwenPaw/pull/3331)) |
| 🟡 **Medium** | [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) | Feishu messages processed multiple times (no dedup) | **None yet** |
| 🟡 **Medium** | [#3317](https://github.com/agentscope-ai/QwenPaw/issues/3317) | Agent-created memory subdirectories not indexed for retrieval | ✅ Fix PR open ([#3347](https://github.com/agentscope-ai/QwenPaw/pull/3347)) |
| 🟡 **Medium** | [#3323](https://github.com/agentscope-ai/QwenPaw/issues/3323) | LAN deployment: icons not found | **None yet** |
| 🟡 **Medium** | [#3328](https://github.com/agentscope-ai/QwenPaw/issues/3328) | Extra sidebar toggle appears on Console chat page at certain zooms | **None yet** |
| 🟢 **Low** | [#3344](https://github.com/agentscope-ai/QwenPaw/issues/3344) | WeChat cron task fails: "Failed to decrypt value" | **None yet** |
| 🟢 **Low** | [#3339](https://github.com/agentscope-ai/QwenPaw/issues/3339) | Ollama LAN connection fails | Closed; likely config/docs issue |

**Regressions:** The rebrand introduced PATH/directory confusion ([#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)) and coexisting binaries, which may fragment user environments.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|---|---|---|
| [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) / [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | **File operation rollback / undo** | **High** — PR open today, tied to Task 6 |
| [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349) | Red warning UI for risky agent operations | Medium — small scoped UX change |
| [#3329](https://github.com/agentscope-ai/QwenPaw/issues/3329) | View online images/videos directly (not just local) | Medium — clear use case, needs backend+frontend |
| [#3327](https://github.com/agentscope-ai/QwenPaw/issues/3327) | Skill pool sync status UI (show up-to-date vs outdated) | Medium — backend status fields already exist |
| [#3325](https://github.com/agentscope-ai/QwenPaw/issues/3325) | Allow custom Agent ID (not random 6-char string) | Medium — API/CLI ergonomics improvement |
| [#2416](https://github.com/agentscope-ai/QwenPaw/issues/2416) | Concurrent conversations + follow-up while run in progress | Medium — architectural change |
| [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) | **Plan mode** (`/plan` command) | Medium-High — substantial PR under review |
| [#2457](https://github.com/agentscope-ai/QwenPaw/pull/2457) | **User asset backup & migration module** | Medium-High — aligns with rebrand pain points |
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | One-click update, button approvals, auto model failover | **High priority user demand**; may split into sub-issues |

---

## 7. User Feedback Summary

### Pain Points
- **Rebrand confusion:** The CoPaw→QwenPaw transition is the dominant source of friction. Users report mixed binaries, split config directories, and missing migration docs ([#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288), [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)).
- **Update difficulty:** Reinstalling or self-updating often fails; users want an in-app or one-click updater ([#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301)).
- **Long-task reliability:** Agents stop mid-job on large workloads, undermining trust for production use ([#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377)).
- **Approval UX:** CLI `/approve` is clunky; users want explicit buttons with risk highlighting ([#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301), [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349)).

### Positive Signals
- **Channel diversity valued:** Active use of Feishu, DingTalk, QQ, WeChat, and browser integrations.
- **Customization appetite:** Users actively want to inject custom IDs, sync skills, and configure memory subdirectories—signs of power-user adoption.
- **Brand attachment:** Some users express strong preference for the "CoPaw" name, indicating emotional investment in the product ([#3336](https://github.com/agentscope-ai/QwenPaw/issues/3336)).

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|---|---|---|
| [#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291) | ~3 weeks | Central coordination issue for external contributions. Needs maintainer updates as tasks are claimed/completed (e.g., Task 6 now has PR #3346). |
| [#2377 Automatic interruption](https://github.com/agentscope-ai/QwenPaw/issues/2377) | ~2.5 weeks | High-impact bug with no linked fix. Affects core agent reliability on real workloads. |
| [#1403 Feishu message dedup](https://github.com/agentscope-ai/QwenPaw/issues/1403) | ~1 month | Production bug for enterprise users on Feishu. No fix PR. |
| [#2416 Concurrent conversations](https://github.com/agentscope-ai/QwenPaw/issues/2416) | ~2.5 weeks | Frequently requested architectural improvement; no PR yet. |
| [#2506 Channel testing infrastructure](https://github.com/agentscope-ai/QwenPaw/pull/2506) | ~2.5 weeks | Large PR establishing systematic tests for 11 channels. Stalled in review; critical for long-term stability. |
| [#1088 Venice AI provider](https://github.com/agentscope-ai/QwenPaw/pull/1088) | ~1 month | First-time contributor PR. Simple provider addition; long review time risks contributor churn. |

---

*Digest generated from GitHub activity data for 2026-04-14.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-14

## 1. Today's Overview

ZeroClaw shows **very high development velocity** with 50 PRs and 21 issues updated in the last 24 hours, indicating an active, rapidly maturing open-source AI agent project. No new release was cut, suggesting the team is accumulating changes toward a larger milestone (likely v0.7.0). Security and performance received outsized attention today, with multiple merged fixes for command-policy bypasses, dependency cleanup, and build-time optimizations. The community is actively stress-testing channels (Matrix, Telegram, Mattermost, Feishu, email), revealing friction in multi-platform deployments. Overall project health is **strong but strained** — progress is excellent, yet the growing bug backlog in runtime/daemon and channels signals a need for stabilization focus.

---

## 2. Releases

**No new releases.** The latest release remains unspecified in today's data. The absence of a release despite heavy merge activity suggests maintainers may be targeting a v0.7.0 milestone (hinted at in [Issue #5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653)).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | What Advanced |
|---|---|
| [#2420](https://github.com/zeroclaw-labs/zeroclaw/pull/2420) | **Major agent orchestration upgrade**: explicit separation of `agent teams` vs. `subagents` with hot runtime config — a core architectural improvement. |
| [#5706](https://github.com/zeroclaw-labs/zeroclaw/pull/5706) | Maintainer cleanup: removed `SimianAstronaut7` from `CODEOWNERS` and docs. |

### Notable Fixes That Closed Issues

| Issue | Fix Status |
|---|---|
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | Duplicate assistant messages with narration+tool calls — **closed** |
| [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268) | Context compressor dropping `tool_call_id` (DeepSeek 400 errors) — **closed** |
| [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | Extremely slow compilation — **closed** |

---

## 4. Community Hot Topics

### Most Active Threads

| Item | Activity | Underlying Need |
|---|---|---|
| [#4657 Matrix channel: friction tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 11 comments, 👍 2 | **Enterprise/self-hosting users need Matrix as a first-class channel.** E2EE, media handling, and mention filtering are blockers for production use. |
| [#5125 CPU spikes when typing into agent chat](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | 4 comments | **Frontend/runtime performance on Linux/Firefox** — users running desktop workflows hit severe CPU saturation, suggesting inefficient input handling or re-rendering. |
| [#5584 Duplicate consecutive assistant messages](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | 4 comments, **closed** | Tool-dispatcher robustness when models emit reasoning text alongside tool calls. |
| [#5628 Daemon auto-starts on boot, port conflict](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | 3 comments | **Developer ergonomics**: systemd integration conflicts with manual `zeroclaw daemon` runs — needs service-aware CLI behavior. |

**Analysis**: The Matrix friction tracker dominates conversation, revealing that channel parity (not just core agent logic) is critical for adoption. Performance and systemd packaging are secondary but recurring pain points for daily users.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **S0** | [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | CPU spikes when typing in agent chat (Firefox/Ubuntu) | ❌ |
| **S0** | [#5698](https://github.com/zeroclaw-labs/zeroclaw/issues/5698) | Allowlisted interpreters bypass command policy via `-c`/`-e`/install args | ✅ [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702) |
| **S0** | [#5692](https://github.com/zeroclaw-labs/zeroclaw/issues/5692) | Incorrect permission claim blocks file creation in working directory | ❌ |
| **S0** | [#5709](https://github.com/zeroclaw-labs/zeroclaw/issues/5709) | ClawGuard scan: 188 security findings (66 critical) | ❌ |
| **S1** | [#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) | Telegram channel returns raw `tool_calls` JSON or empty result | ❌ |
| **S1** | [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) | Skills blocked even when `skills.allow_scripts = true` | ❌ |
| **S1** | [#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685) | CLI channel factory not registered — crashes on `zeroclaw agent` | ❌ |
| **S2** | [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon service auto-start causes port conflict | ❌ |

**Stability Assessment**: Four S0 issues are open today, including an unpatched security policy bypass with a ready fix PR ([#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702)) and a broad security audit ([#5709](https://github.com/zeroclaw-labs/zeroclaw/issues/5709)) requiring triage. The runtime/daemon and channel layers are the most unstable surfaces.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | v0.7.0 Likelihood |
|:---|:---|:---:|
| [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | Pre/post message hooks for shell commands (memory, logging, context injection) | Medium — architecture-heavy, needs RFC alignment |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | Subscription-native OAuth for Ollama Cloud, Zhipu, Moonshot, MiniMax | Medium-High — follows established provider-auth pattern |
| [#5701](https://github.com/zeroclaw-labs/zeroclaw/issues/5701) | `clear_messages` in `SessionBackend` trait for O(1) session reset | High — small, infra-focused, has PR interest |
| [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) | `SessionResetTool` and `SessionDeleteTool` | High — directly addresses user-requested session management |
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) | WASM plugin system with security sandbox | Medium — large, distinguished-contributor PR, may slip |
| [#5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653) | RFC: "Zero Compromise" code health & production readiness standard | N/A — process/meta, signals v0.7.0 quality gate |

**Prediction**: Session management tools ([#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696)), OAuth provider expansion ([#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)), and build/perf improvements are the safest bets for the next release. The WASM plugin system and message hooks are more ambitious and may target v0.8.0.

---

## 7. User Feedback Summary

### Real Pain Points

| Theme | Evidence |
|:---|:---|
| **Channel reliability gaps** | Matrix ([#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)), Telegram ([#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553)), email IMAP IDLE ([#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712)), Feishu ([#5676](https://github.com/zeroclaw-labs/zeroclaw/pull/5676)) — users on non-Slack/Discord channels hit more bugs. |
| **Security policy too permissive** | [#5698](https://github.com/zeroclaw-labs/zeroclaw/issues/5698) — sandbox escape via interpreter args undermines trust. |
| **Desktop performance degradation** | [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) — high CPU on typing threatens local usability. |
| **Docs drift** | [#5679](https://github.com/zeroclaw-labs/zeroclaw/issues/5679), [#5683](https://github.com/zeroclaw-labs/zeroclaw/issues/5683) — translated guides and website copy lag behind CLI changes. |
| **Daemon/service confusion** | [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) — packaging as a systemd service creates friction for power users. |

### Satisfaction Signals
- Strong contributor engagement: 50 PRs in 24h, rapid security fix turnaround.
- Build performance [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) was resolved quickly.
- Active expansion of provider ecosystem and channel capabilities.

---

## 8. Backlog Watch

These important items risk stagnation without maintainer focus:

| Item | Age | Risk |
|:---|:---|:---|
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) Matrix friction tracker | 20+ days | **Highest** — umbrella issue for a major channel; competing PRs exist but some are unresponsive to review. |
| [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) Pre/post message hooks | ~1 month | Medium — architectural feature with clear user demand, no assigned PR. |
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) WASM plugin system | ~11 days | Medium — XL PR, needs sustained review bandwidth. |
| [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) Config schema versioning (V1→V2) | ~5 days | High — blocking for config stability; explicitly "seeking feedback" from maintainers. |
| [#5709](https://github.com/zeroclaw-labs/zeroclaw/issues/5709) ClawGuard security findings | 1 day | **Critical** — 66 critical findings; needs immediate triage and response plan. |

**Recommendation**: Prioritize merging the security fix [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702), triaging [#5709](https://github.com/zeroclaw-labs/zeroclaw/issues/5709), and assigning a maintainer to the Matrix friction tracker ([#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)) to prevent channel-quality divergence.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*