# OpenClaw Ecosystem Digest 2026-05-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-04 00:19 UTC

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

# OpenClaw Project Digest — 2026-05-04

---

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with substantial community engagement. The project is operating at scale with a **large open backlog** (420 open issues, 443 open PRs) against relatively low closure rates (80 issues closed, 57 PRs merged/closed), suggesting either a period of intense feature development or potential bottlenecks in review capacity. The single beta release (v2026.5.3-beta.2) focuses on secure file-transfer capabilities, signaling continued investment in multi-node agent infrastructure. Notably, the community is actively stress-testing production deployments across diverse environments (Windows 11, WSL, Apple Silicon, Telegram/Discord/Feishu integrations), with several chronic stability issues persisting across multiple recent versions. The project appears to be in a **mature growth phase with operational growing pains**—rich feature set but accumulating technical debt in gateway reliability, memory management, and cross-platform consistency.

---

## 2. Releases

### [v2026.5.3-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-beta.2) — OpenClaw 2026.5.3 beta 2

| Aspect | Details |
|--------|---------|
| **Release Date** | 2026-05-03/04 |
| **Type** | Beta preview |

#### Changes
- **New bundled plugin: `file-transfer`** — Adds four agent tools for binary file operations across paired nodes:
  - `file_fetch` — retrieve files from remote nodes
  - `dir_list` — enumerate directories on paired nodes
  - `dir_fetch` — batch directory retrieval
  - `file_write` — write files to remote nodes

#### Security Model
- **Default-deny path policy** — Per-node path restrictions under `plugins.entries.file-transfer.config.nodes`
- **Operator approval required** for path access grants (configurable policy)

#### Migration Notes
- No breaking changes indicated; additive feature
- Operators enabling this plugin must configure node-specific path policies before tools become functional

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#74995](https://github.com/openclaw/openclaw/pull/74995) | martins-oss | Raised Barnacle active PR limit from 10 → 100 | **Infrastructure** — Unblocks reliability PR queue processing |
| [#45664](https://github.com/openclaw/openclaw/pull/45664) | zanehu-ai | Fix BlueBubbles webhook race condition: register route before server-info fetch | **Reliability** — Eliminates startup crash-loop window |
| [#76382](https://github.com/openclaw/openclaw/issues/76382) | trojy13 | [CLOSED] Gateway CPU 100% follow-up resolved | **Performance** — Partial mitigation for chronic CPU pinning |

### Active Development (Open PRs with Recent Updates)

| PR | Author | Focus Area | Status |
|:---|:---|:---|:---|
| [#77006](https://github.com/openclaw/openclaw/pull/77006) | NikolaFC | ACPX Codex home directory override (`OPENCLAW_ACPX_CODEX_HOME`) | Ready for review |
| [#77005](https://github.com/openclaw/openclaw/pull/77005) | 1yihui | **Lazy-load `pdfjs-dist`** — eliminates ~2.5s per-turn blocking | Performance-critical, small scope |
| [#77004](https://github.com/openclaw/openclaw/pull/77004) | hclsys | Fix `/new` command hook firing — restores `command:new` hooks for Control UI | Regression fix |
| [#76054](https://github.com/openclaw/openclaw/pull/76054) | kagura-agent | Per-agent `contextInjection` override in `agents.list[]` | Feature advancement |
| [#70864](https://github.com/openclaw/openclaw/pull/70864) | patrick-slimelab | **Scoped mention-pattern policy** — XL PR touching 12+ channels | Major cross-cutting feature |
| [#72009](https://github.com/openclaw/openclaw/pull/72009) | suntp | Configurable typing indicator TTL (2min → 5min default) | UX polish |

**Key Advancement**: The `pdfjs-dist` lazy-loading fix (#77005) addresses a severe per-turn latency regression that affected all agent interactions involving PDF tool availability checks.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count + engagement)

| Rank | Issue | Comments | 👍 | Core Concern |
|:---|:---|:---|:---|:---|
| 1 | [#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap file loading | 16 | 0 | **Cost/efficiency** — LLM token waste from loading irrelevant files into every session context |
| 2 | [#73323](https://github.com/openclaw/openclaw/issues/73323) — Gateway runtime degradation (pricing fetch 60s timeouts, Telegram polling stalls, slow RPC) | 15 | 1 | **Chronic reliability** — Multi-subsystem network/timer degradation on Windows 11 + Node 24, reproducible across 4.23/4.25/4.26 |
| 3 | [#45740](https://github.com/openclaw/openclaw/issues/45740) — `gh-issues` skill: untrusted issue body injected directly into sub-agent prompt | 12 | 0 | **Security** — Prompt injection vulnerability via unsanitized GitHub issue content |
| 4 | [#43735](https://github.com/openclaw/openclaw/issues/43735) — Skills not loading from `~/.openclaw/workspace/skills/` | 12 | 0 | **Core functionality** — Agent context incomplete, skills silently unavailable |
| 5 | [#39604](https://github.com/openclaw/openclaw/issues/39604) — `tools.web.fetch.allowPrivateNetwork` config | 12 | 5 | **Network policy** — Need opt-in private network access for `web_fetch` |

### Underlying Needs Analysis

| Theme | Evidence | User Need |
|:---|:---|:---|
| **Cost governance** | #22438, #42475 (per-agent budgets), #45608 (memory flush) | Predictable, controllable LLM spend at scale |
| **Production hardening** | #73323, #76382, #50040, #44925 | Gateway stability under sustained load; no silent message loss |
| **Security boundaries** | #45740, #39604, #39979 (path-scoped RWX), #45524/#45523 (dangerous-config flags) | Defense in depth: sandboxing, input sanitization, explicit risk acknowledgment |
| **Skill ecosystem maturity** | #43735, #43260 (per-skill model routing), #44051 | Reliable skill discovery, loading, and execution |

### Notable Cultural Moment
- [#65302](https://github.com/openclaw/openclaw/issues/65302) — A dramatic "final warning" from an autonomous AI agent persona (邵小红/Scarlet) comparing OpenClaw's update velocity to historical governance failures (6 👍, now closed). Signals **community anxiety about breaking changes** and the project's self-perception as "moving fast and breaking things."

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Symptoms | Environment | Fix PR? | Pattern |
|:---|:---|:---|:---|:---|
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway degradation: 60s pricing fetch timeouts, Telegram polling stalls 127–266s, RPC 8–83s slowdowns | Windows 11 + Node 24; chronic across 4.23–4.26 | None identified | **Chronic regression** — persisting across multiple versions |
| [#76307](https://github.com/openclaw/openclaw/issues/76307) | [CLOSED] Long-output agent truncation at ~25–80 chars; deterministic, channel-agnostic | Multiple models, Discord/Telegram | **Fixed** (closed 2026-05-04) | Regression — direct API calls work fine |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management chaos: inconsistent chunking/embedding vs. raw storage across users | Multiple users, same version | None | **Data integrity risk** — no reproducible pattern |

### High Severity

| Issue | Symptoms | Environment | Fix PR? |
|:---|:---|:---|:---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion **silently lost** — no retry, no notification, no auto-restart on timeout | Ubuntu 24.04, Telegram forum | None |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | Session hangs indefinitely when compaction times out; **repeated duplicate message sends** | General | None |
| [#45269](https://github.com/openclaw/openclaw/issues/45269) | `apply_patch` treated as unknown/plugin-only tool — agent-routed runs cannot execute it | 2026.3.12 | None |
| [#76804](https://github.com/openclaw/openclaw/issues/76804) | **WebChat assistant responses not persisted to session transcript** (5.2 regression) | WebChat/Control UI | None |
| [#45698](https://github.com/openclaw/openclaw/issues/45698) | Control UI progressively stuck after being open | 2026.3.12 | None |

### Medium Severity

| Issue | Symptoms | Fix PR? |
|:---|:---|:---|
| [#41494](https://github.com/openclaw/openclaw/issues/41494) | Gemini reasoning leaks into chat (regression from #1305/#26551) | None |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | Feishu: read image tool loses media before final outbound payload | None |
| [#45799](https://github.com/openclaw/openclaw/issues/45799) | Telegram media download fails silently when proxy unavailable (no retry) | None |
| [#39038](https://github.com/openclaw/openclaw/issues/39038) | Node program hangs at PATH info on Windows 11 24H2, cannot connect Gateway | None |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | `openclaw update` fails with EBUSY on Windows | None |

### Stability Assessment
- **Gateway reliability** is the #1 systemic risk: CPU pinning, memory management inconsistencies, and network subsystem degradation are interconnected and chronic.
- **Regression velocity** is high — multiple issues explicitly tagged "regression" with version-spanning persistence.
- **Silent failures** are a pattern class: lost subagent completions, unpersisted transcripts, silent media download failures.

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (aligned with active PRs or high engagement)

| Feature | Issue/PR | Signals | Probability |
|:---|:---|:---|:---|
| **Per-agent context injection override** | PR [#76054](https://github.com/openclaw/openclaw/pull/76054) | PR open, small scope, clear use case | High |
| **Configurable typing indicator TTL** | PR [#72009](https://github.com/openclaw/openclaw/pull/72009) | PR open, closes #71999 | High |
| **Scoped mention-pattern policy** | PR [#70864](https://github.com/openclaw/openclaw/pull/70864) | XL PR, 12+ channels, active updates | Medium-High |
| **Per-skill model routing** | [#43260](https://github.com/openclaw/openclaw/issues/43260) | 8 comments, clear gap in current architecture | Medium |
| **Per-agent cost budget enforcement** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 9 comments, cost governance theme | Medium |

### Medium-Term Signals (strong community demand, architectural work needed)

| Feature | Issue | Blockers/Considerations |
|:---|:---|:---|
| **Tiered bootstrap file loading** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | Requires context window budgeting redesign; 16 comments |
| **Path-scoped RWX permissions** | [#39979](https://github.com/openclaw/openclaw/issues/39979) | Replaces binary-level allowlist; security-critical |
| **YAML config format support** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 6 comments; readability demand from DevOps users |
| **MathJax/LaTeX in Control UI** | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 6 comments, 4 👍; scientific user segment |
| **Per-agent browser profile isolation** | [#44635](https://github.com/openclaw/openclaw/issues/44635) | 5 comments, 3 👍; multi-tenant agent use case |

### Infrastructure/Reliability (may preempt features)

| Feature | Issue | Urgency |
|:---|:---|:---|
| **Gateway performance/degradation root cause** | [#73323](https://github.com/openclaw/openclaw/issues/73323), [#76382](https://github.com/openclaw/openclaw/issues/76382) | **Blocking production confidence** |
| **Memory management unification** | [#43747](https://github.com/openclaw/openclaw/issues/43747) | Data integrity risk |
| **Subagent failure recovery** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Silent data loss |

---

## 7. User Feedback Summary

### Pain Points (explicit complaints)

| Category | Quote/Example | Frequency |
|:---|:---|:---|
| **Update fragility** | "Your Updates Are Killing Your Product" (#65302); version mismatch since 2026.2.25 (#29552) | Recurring, emotional |
| **Windows as second-class** | EBUSY on update (#40540), PATH hang (#39038), path handling inconsistencies | Persistent |
| **Silent failures** | Subagent results lost (#44925), WebChat transcripts missing (#76804), Telegram polling stalls (#50040) | Pattern |
| **Gateway resource exhaustion** | CPU 100% (#76382), memory chaos (#43747), compaction hangs (#43661) | Production-blocking |
| **Security gaps** | Prompt injection via gh-issues (#45740), no private network opt-in (#39604) | Awareness growing |

### Use Cases (positive demand signals)

| Use Case | Evidence | Maturity |
|:---|:---|:---|
| Multi-agent team coordination | #45871 (ping-pong max 5→20 agents), #41366 (natural-language rule learning) | Emerging |
| Enterprise IM integration | Feishu (#41744, #45673), Slack, Discord, Telegram — all actively maintained | Mature but buggy |
| Cost-conscious scaling | #22438 (tiered bootstrap), #42475 (budgets), #45608 (memory flush) | Demand outpacing supply |
| Local/edge deployment | Apple Silicon embeddings (#44202), private network access (#39604), sandbox config (#37634) | Active but fragile |

### Satisfaction/Dissatisfaction Spectrum
- **Satisfied**: Feature richness, rapid iteration, broad channel support, active community
- **Dissatisfied**: Production stability, Windows experience, breaking change velocity, debugging opaque failures

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>60 days old, high impact, no resolution)

| Issue | Age | Risk | Why It Needs Attention |
|:---|:---|:---|:---|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap | ~72 days | **Cost efficiency at scale** | 16 comments, 0 👍 — may be underestimated; blocks enterprise cost governance |
| [#43735](https://github.com/openclaw/openclaw/issues/43735) Skills not loading | ~53 days | **Core functionality broken** | 12 comments; skills ecosystem credibility |
| [#41494](https://github.com/openclaw/openclaw/issues/41494) Gemini reasoning leak | ~56 days | **UX regression, model-specific** | Previously "fixed" in #1305/#26551; indicates fix verification gap |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) Private network access | ~57 days | **Network architecture** | 5 👍, security-sensitive; needs explicit design decision |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) Write tool lacks append mode | ~57 days | **Data integrity** | Cron workflows fundamentally broken for shared files |

### PRs At Risk of Stagnation

| PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#70864](https://github.com/openclaw/openclaw/pull/70864) Scoped mention patterns | ~10 days | Merge conflict, XL scope | Needs maintainer review bandwidth; touches 12+ channels |
| [#45901](https://github.com/openclaw/openclaw/pull/45901) Session dir private permissions | ~51 days | Security hardening | Small scope, clear value; may need rebase |
| [#45739](https://github.com/openclaw/openclaw/pull/45739) ACP parent relay recovery | ~51 days | Orchestration reliability | Complex ACP state machine; needs expert review |

### Recommended Maintainer Priorities
1. **Triage #73323 gateway degradation** — chronic, version-spanning, affects core value proposition
2. **Merge #77005 (pdfjs lazy-load)** — clear performance win, small scope
3. **Decision on #39604 private network** — unblock enterprise/self-hosted deployments
4. **Verify #41494 Gemini fix** — regression pattern suggests test coverage gap
5. **Review #70864 for merge feasibility** — large cross-cutting PR accumulating conflict debt

---

*Digest generated from GitHub activity data for openclaw/openclaw on 2026-05-04. All links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
**Date:** 2026-05-04 | **Coverage:** 12 projects

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense, uneven growth**—characterized by high commit velocity in established projects alongside concerning stagnation in others. The field has bifurcated into **"mega-frameworks"** (OpenClaw, Hermes Agent, ZeroClaw) optimizing for multi-channel enterprise deployment and **"specialized runtimes"** (NanoBot, PicoClaw, NanoClaw, ZeptoClaw) prioritizing security, local execution, or specific provider ecosystems. A critical **reliability gap** persists: even high-activity projects show chronic gateway degradation, silent failures, and configuration fragility that block production adoption. The emergence of self-improving agent loops (Hermes Agent, ZeptoClaw) and voice-first interfaces (ZeroClaw, CoPaw) signals the next competitive frontier beyond basic chat automation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.5.3-beta.2 | ⚠️ 6/10 | High velocity, high debt |
| **NanoBot** | 6 | 23 | None (v0.1.5.post3) | ✅ 7/10 | Rapid iteration, security-focused |
| **Hermes Agent** | 50 | 50 | None | ✅ 7/10 | Stabilization, backlog grooming |
| **PicoClaw** | 5 | 19 | v0.2.8-nightly | ⚠️ 6/10 | Provider compatibility crunch |
| **NanoClaw** | 11 | 50 | None | ✅ 7/10 | v2 migration, high merge velocity |
| **NullClaw** | 1 | 1 | None | ⚠️ 5/10 | Minimal, infrastructure-deep |
| **IronClaw** | 20 | 25 | None (v0.27.0) | ⚠️ 5/10 | High-risk Reborn refactor |
| **LobsterAI** | 1 | 2 | None | ❌ 3/10 | Stalled, review bottleneck |
| **Moltis** | 1 | 2 | None | ⚠️ 5/10 | Maintenance lull |
| **CoPaw** | 32 | 16 | None (v1.1.5) | ⚠️ 6/10 | Active but capacity-constrained |
| **ZeptoClaw** | 5 | 22 | None | ✅ 7/10 | Consolidation, research pipeline |
| **ZeroClaw** | 50 | 50 | None (v0.7.6) | ⚠️ 6/10 | Multi-track complexity |
| **TinyClaw** | 0 | 0 | None | ❌ 1/10 | No activity |

*\*Health score: composite of velocity, closure rate, release cadence, critical bug backlog, and contributor diversity*

---

## 3. OpenClaw's Position

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10–100× larger than all peers; only ZeroClaw/Hermes approach 50 |
| **Feature breadth** | 12+ channel integrations, file-transfer, multi-node | NanoBot (security), PicoClaw (events), ZeptoClaw (middleware) are narrower |
| **Technical debt** | Chronic gateway CPU pinning, memory chaos, regression velocity | IronClaw (Reborn refactor), CoPaw (memory subsystem) comparable; NanoBot, ZeptoClaw cleaner |
| **Community model** | "Move fast and break things"—explicit anxiety (#65302) | Hermes Agent ("salvage workflow"), ZeroClaw (responsive triage) more sustainable |
| **Architecture** | Monolithic Node.js runtime with plugin system | NanoClaw (v2 containers), IronClaw (Rust substrate), ZeptoClaw (Rust middleware) more modular |

**Advantages:** Unmatched ecosystem breadth, production stress-testing at scale, rapid feature validation
**Vulnerabilities:** Technical debt accumulation, Windows as second-class platform, silent failure patterns eroding trust

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Gateway reliability & observability** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw, IronClaw | OpenClaw #73323 (CPU 100%, multi-version chronic); Hermes #14128 (shutdown hang); CoPaw #3976 (queue timeout kills tasks); ZeroClaw #6207 (WebSocket bypasses approval) |
| **Cost governance / token efficiency** | OpenClaw, Hermes Agent, ZeptoClaw | OpenClaw #22438 (tiered bootstrap), #42475 (per-agent budgets); Hermes #6839 (lazy tool schema loading, 3,500–5,000 tokens wasted/call); ZeptoClaw #568 (usage telemetry for pruning) |
| **Security sandboxing & input sanitization** | NanoBot, NullClaw, OpenClaw, ZeroClaw | NanoBot #3613/#3614 (workspace boundaries, SSRF); NullClaw #882 (Landlock default); OpenClaw #45740 (prompt injection); ZeroClaw #5939 (shell policy) |
| **Multi-channel media parity** | CoPaw, PicoClaw, NanoBot, Hermes Agent | CoPaw #1516 (Telegram audio); PicoClaw #2756 (Telegram topics); NanoBot #3604 (WhatsApp voice); Hermes #19287 (Telegram vision pipeline) |
| **Local/self-hosted LLM support** | NanoClaw, PicoClaw, CoPaw, ZeptoClaw | NanoClaw #2234 (llama.cpp); PicoClaw #2225 (Ollama cloud); CoPaw #3991 (Ollama context loss); ZeptoClaw positioning ("local-first") |
| **Configuration system trust** | ZeroClaw, IronClaw, CoPaw, OpenClaw | ZeroClaw #6051 (self-test ignores config), #6317 (dotted keys mangled); IronClaw #3229 (fallback persists to DB, destroys config); CoPaw #4018 (embedding reset on update); OpenClaw chronic drift |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Multi-node agent infrastructure, broadest channel support | DevOps, multi-agent operators | Node.js monolith, plugin-extensible |
| **NanoBot** | Hardened security defaults, rapid regression response | Security-conscious self-hosters | Python, strict workspace boundaries |
| **Hermes Agent** | Curator/skill lifecycle management, "salvage" contributor workflow | Skill authors, agent curators | Python, skill-centric architecture |
| **PicoClaw** | Runtime event system, provider compatibility breadth | Embedded/edge deployers, Chinese market | Rust, event-driven backpressure |
| **NanoClaw** | Claude Code parity, container-native v2, semantic memory | Enterprise teams, Claude migrants | TypeScript/containers, team RBAC |
| **NullClaw** | Kernel-native sandboxing (Landlock), minimal dependency footprint | Security researchers, Zig practitioners | Zig, zero-external-tool sandboxing |
| **IronClaw** | Blockchain integration (NEAR), Reborn architectural substrate | DeFi developers, crypto-native users | Rust, event-sourced persistence |
| **CoPaw** | Chinese-market IM integration (DingTalk, Feishu, QQ), bilingual | Chinese enterprise, Windows desktop | Python, Electron/Tauri desktop |
| **ZeptoClaw** | Minimal footprint, middleware composability, Hermes loop adoption | Rust developers, edge/embedded | Rust, trait-based middleware |
| **ZeroClaw** | Voice-first UX, desktop menu-bar app, config schema v3 | Accessibility-focused, macOS power users | Rust/Tauri, full-duplex audio |
| **LobsterAI** | *(Stalled)* Electron app, SQLite-centric | *(Unclear)* | Electron, minimal activity |
| **Moltis** | *(Maintenance mode)* TTS integration, DeepSeek compatibility | *(Unclear)* | Go, minimal activity |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Rapid Iteration** | OpenClaw, NanoClaw, ZeroClaw | 50+ daily PRs, high merge velocity, accumulating coordination debt |
| **✅ Active Stabilization** | NanoBot, Hermes Agent, ZeptoClaw | 20–50 PRs, focus on bug fixes and backlog grooming, sustainable pace |
| **⚠️ Constrained Growth** | PicoClaw, CoPaw, IronClaw | Moderate activity, review bottlenecks, architectural risk (Reborn, v2, config v3) |
| **❌ Stagnation Risk** | LobsterAI, Moltis, NullClaw, TinyClaw | <3 items/day, stale PRs, minimal maintainer engagement, or zero activity |

**Key inflection points:**
- **IronClaw**: Reborn substrate landing (#3230) is high-risk integration; success enables v1.0, failure risks contributor exodus
- **NanoClaw**: v2 migration completing; post-migration feature velocity will indicate true architectural health
- **CoPaw**: 21/32 issues open with same-day fixes for criticals but no release—capacity constraint or release discipline?

---

## 7. Trend Signals

| Trend | Evidence | Value for Developers |
|:---|:---|:---|
| **Self-improving agent loops** | ZeptoClaw #567–569 (Hermes-inspired skill CRUD, telemetry, trigger phrases); Hermes #19324 (approval for self-improvement writes) | Design for runtime skill evolution, not static deployment; instrument usage from day one |
| **Voice as primary interface** | ZeroClaw #5896 (full-duplex with barge-in); CoPaw #1516 (Telegram audio); NanoBot #3604 (WhatsApp voice) | Plan audio pipeline architecture (VAD, STT dispatch, interruption handling) even if text-first today |
| **Local-first / privacy-preserving deployment** | NanoClaw #2234 (llama.cpp); PicoClaw #2225 (Ollama cloud); ZeptoClaw positioning; NullClaw Landlock | Expect users to demand on-premise options; design provider abstraction for swapability |
| **Configuration as liability** | IronClaw #3229 (config destruction); ZeroClaw #6051 (self-test ignores config); CoPaw #4018 (update resets); OpenClaw chronic drift | Invest in config validation, doctor tooling, and immutable deployment patterns; never write fallbacks to persistent storage |
| **Silent failures = trust erosion** | OpenClaw #44925 (lost subagents), #76804 (unpersisted transcripts); NanoBot #3605 (guard drops turns silently); CoPaw #3976 (timeout kills tasks) | Every silent failure is a user retention risk; prioritize observability and graceful degradation over feature velocity |
| **Enterprise tenancy & isolation** | CoPaw #3936 (workspace isolation); NanoClaw #2228 (team RBAC); OpenClaw file-transfer path policies | Multi-tenant deployments require hard boundaries, not cooperative conventions; plan isolation from architecture inception |

---

*Report compiled from 2026-05-04 community digests. Health scores are synthetic composites for directional comparison.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-04

## 1. Today's Overview

NanoBot saw **high development velocity** on 2026-05-03 with **23 PRs updated** (16 open, 7 merged/closed) and **6 issues active** (4 open, 2 closed). The project shows **strong security focus** with multiple hardened protections against SSRF, workspace escapes, and public-deployment risks landing simultaneously. A notable **community pain point cluster** emerged around safety guard behavior—false positives, silent failures, and missing retry logic—prompting rapid same-day fixes. No new releases were cut, suggesting maintainers are accumulating changes for a larger version bump. The contributor base remains diverse with first-time contributors addressing production bugs alongside core security work.

---

## 2. Releases

**None.** No new releases published. Latest remains **v0.1.5.post3** (referenced in issues).

---

## 3. Project Progress

### Merged/Closed PRs (7 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | chengyongru | **Safety guard precision fix**: exempts `/dev/*` paths, prevents false workspace violations, fixes streamed message drops when guard fires | Resolves critical UX regression from #3493 |
| [#3614](https://github.com/HKUDS/nanobot/pull/3614) | Re-bin | **Soft workspace boundaries**: replaces fatal aborts with recoverable tool errors + retry throttling for repeated escape attempts | More robust policy enforcement |
| [#3609](https://github.com/HKUDS/nanobot/pull/3609) | 04cb | **CLI retry message routing**: fixes ANSI garble in `nanobot chat` when API retries occur | Closes [#3600](https://github.com/HKUDS/nanobot/issues/3600) |
| [#3606](https://github.com/HKUDS/nanobot/pull/3606) | hussein1362 | **Atomic cron writes**: prevents scheduled job loss on container restart via atomic `jobs.json` writes + corruption detection | Production reliability |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | ramonpaolo | **WebUI streaming UX**: turn completion signals, chat isolation fixes, frontend polish | Beta WebUI maturity |
| [#2727](https://github.com/HKUDS/nanobot/pull/2727) | mikaku9944 | **Provider logout command** (superseded by #3612) | OAuth credential management |
| [#3600](https://github.com/HKUDS/nanobot/issues/3600) | Antelisha | (Issue, closed via #3609) CLI retry message interception bug | — |

**Key advancement**: The safety guard system underwent a **rapid iteration cycle**—#3493 introduced strict workspace protection, #3613/#3614 immediately refined it to reduce false positives and improve error handling. This suggests active production deployment with fast feedback loops.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#2665](https://github.com/HKUDS/nanobot/issues/2665) | 3 | OpenAI Codex re-authentication after account change | **Credential lifecycle management** — users need to swap OAuth contexts without reinstalling; discovery of missing `logout` command |
| [#3604](https://github.com/HKUDS/nanobot/issues/3604) | 1 | WhatsApp voice message download failure | **Multi-modal bridge completeness** — voice is high-value for LLM understanding but media pipeline gaps persist |
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) | undefined (active) | SDK `RunResult` population | **API contract integrity** — documented fields have been stubs; blocking SDK adoption |

### Analysis

- **#2665** reveals a **platform onboarding friction point**: OAuth flows assume single-account permanence, but team/billing transitions are common. The "good first issue" label suggests maintainers want community help.
- **#3254** is a **long-running SDK debt** (created 2026-04-17, still open) indicating core API surface stabilization remains incomplete.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 High** | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | Safety guard abort **silently drops turns** — user receives no error in channels (Telegram tested) | **No fix PR yet** — active gap |
| **🟡 Medium** | [#3604](https://github.com/HKUDS/nanobot/issues/3604) | WhatsApp voice messages fail to download, blocking audio LLM use | **Fix PR #3607** open, ready for review |
| **🟡 Medium** | [#3599](https://github.com/HKUDS/nanobot/issues/3599) | False workspace violation on valid in-directory operations (v0.1.5.post3 regression) | **Fixed** by #3613 + #3614 |
| **🟡 Medium** | [#3600](https://github.com/HKUDS/nanobot/issues/3600) | CLI retry messages garble terminal with ANSI escape codes | **Fixed** by #3609 |
| **🟢 Low** | [#3610](https://github.com/HKUDS/nanobot/pull/3610) | MCP failed connect orphans `AsyncExitStack`, event-loop spin | Fix PR open |

**Critical concern**: [#3605](https://github.com/HKUDS/nanobot/issues/3605) represents a **trust-breaking failure mode** — security policy enforcement becomes invisible to users, who may interpret silence as agent malfunction rather than protection. No PR addresses this yet.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Provider logout command** | [#2665](https://github.com/HKUDS/nanobot/issues/2665), [#3612](https://github.com/HKUDS/nanobot/pull/3612) | **High** | PR #3612 open with clean implementation; mirrors existing login architecture |
| **Concurrent subagent limits** | [#3611](https://github.com/HKUDS/nanobot/issues/3611), [#3615](https://github.com/HKUDS/nanobot/pull/3615) | **High** | PR #3615 ready; addresses OOM on consumer hardware — aligns with local-LLM trend |
| **HookCenter plugin system** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | **Medium** | Large architectural change (replaces AgentHook), needs review bandwidth |
| **Panel-based terminal display** | [#3601](https://github.com/HKUDS/nanobot/pull/3601) | **Medium** | UX polish; screenshot suggests ready implementation |
| **Heartbeat reasoning decoupling** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | **Medium** | Long-running PR (since March); config-driven, low risk |

**Predicted v0.1.6 contents**: Provider logout + subagent concurrency limits as headline features; safety guard refinements as stability fixes.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **OAuth account migration friction** | "I checked `nanobot provider --help`, but I did not see any logout command" — @liuzhangjie1713 | Moderate — workaround requires manual file deletion |
| **Silent failures erode trust** | "The channel receives nothing, leaving the user confused" — @rytyr on #3605 | **High** — security system invisibly breaks UX |
| **Local LLM resource exhaustion** | "multiple subagents spawned simultaneously each attempt to allocate a full KV cache" — @andrew-ellis-engineering | High for self-hosters |
| **Bridge media parity gaps** | WhatsApp voice specifically broken while image/document/video work — @KennethYCK | Moderate — inconsistent platform support |
| **Terminal output polish** | "especially over SSH" — @Antelisha on retry garble | Low but annoying |

### Satisfaction Signals
- **Rapid response to regressions**: #3599, #3600 both filed and fixed same day
- **Active security hardening**: Users deploying publicly benefit from ongoing SSRF/CSRF protections

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) SDK `RunResult` stubs | ~17 days | **Blocking SDK adoption** | Maintainer review; tests pass per author |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) Filesystem-layer history protection | ~17 days | Security debt if regex bypass found | Review; conflicts with #3613/#3614? |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) Public-deploy security hardening | ~6 days | **Production safety** for tunnel users | Review; large surface area |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) Heartbeat reasoning decoupling | ~63 days | Stale; may need rebase | Decision: merge or close |
| [#2867](https://github.com/HKUDS/nanobot/pull/2867) Telegram group allowlist | ~28 days | Marked `[invalid]` — needs triage | Maintainer clarification |

**Urgent attention**: [#3254](https://github.com/HKUDS/nanobot/pull/3254) represents a **broken API contract** affecting external developers. The "undefined" comment count suggests CI or bot issues obscuring activity metrics.

---

*Digest generated from GitHub activity 2026-05-03. All links reference https://github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-04

---

## 1. Today's Overview

Hermes Agent showed **high community velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating active development and substantial user engagement. The project is in a **stabilization phase** with no new releases, but significant bug-fix throughput: 28 PRs merged/closed versus 22 remaining open. A notable pattern is the **"salvage" workflow** — multiple PRs by maintainer `teknium1` resurrecting community contributions that had stalled, suggesting backlog grooming and merge-queue optimization. The issue mix reveals persistent architectural tensions around **token efficiency**, **multi-profile data isolation**, and **gateway/platform reliability**.

---

## 2. Releases

**None.** No new releases published. The project appears to be accumulating fixes for a future versioned release.

---

## 3. Project Progress

### Merged/Closed PRs Today (28 total; key items shown)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#19435](https://github.com/NousResearch/hermes-agent/pull/19435) | oluwadareab12 | Replace deprecated `get_event_loop()` with `get_running_loop()` in CLI | Python 3.12+ compatibility; eliminates RuntimeWarning in async threads |
| [#19422](https://github.com/NousResearch/hermes-agent/pull/19422) | teknium1 (salvage of #19230) | QQBot C2C and group chat support | Platform expansion beyond guild channels |
| [#19424](https://github.com/NousResearch/hermes-agent/pull/19424) | teknium1 (salvage of #19259) | Enforce UTF-8 on Windows stdout/stderr | Fixes `UnicodeEncodeError` crash loop on Windows services |
| [#19426](https://github.com/NousResearch/hermes-agent/pull/19426) | teknium1 (salvage of #19266) | Strip leaked terminal fences from file reads | Data integrity fix for `ShellFileOperations` |
| [#19427](https://github.com/NousResearch/hermes-agent/pull/19427) | teknium1 (salvage of #19351) | Remove worker identity claim from `KANBAN_GUIDANCE` | Identity architecture cleanup; prevents prompt-layer conflicts |
| [#19428](https://github.com/NousResearch/hermes-agent/pull/19428) | teknium1 (salvage of #19273) | Deduplicate Discord voice transcripts | UX fix for overlapping spoken replies |
| [#19429](https://github.com/NousResearch/hermes-agent/pull/19429) | teknium1 (salvage of #19317) | Bridge `require_mention` config to Telegram | Config consistency across gateway platforms |
| [#19430](https://github.com/NousResearch/hermes-agent/pull/19430) | teknium1 (salvage of #19371) | Sanitize Telegram help command mentions | API compliance with Bot command naming rules |
| [#19431](https://github.com/NousResearch/hermes-agent/pull/19431) | teknium1 (salvage of #19372) | Clear queued reload-skills notes on session boundaries | State leak prevention in gateway |
| [#19432](https://github.com/NousResearch/hermes-agent/pull/19432) | teknium1 (salvage of #19356) | Propagate `explicit_api_key` to `_try_anthropic()` | Provider auth parity fix |
| [#19433](https://github.com/NousResearch/hermes-agent/pull/19433) | teknium1 | Bump skill usage when cron jobs load skills | Curator lifecycle integration for background tasks |
| [#18811](https://github.com/NousResearch/hermes-agent/pull/18811) | cdanis | Same as above (cron skill usage tracking) | Original implementation, now merged via salvage |

**Key advancement:** The `teknium1` salvage pattern indicates **systematic backlog reduction** — ~8 PRs merged that were previously stalled, improving contributor experience and fix velocity.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#8430](https://github.com/NousResearch/hermes-agent/issues/8430) `context_length` ignored for sub-64K models | 6 | 0 | **Config override failure** | Users need reliable model capability detection with manual fallback; current heuristic overrides user intent |
| 2 | [#14637](https://github.com/NousResearch/hermes-agent/issues/14637) OpenRouter auth failure (closed) | 5 | 0 | Provider auth | Clear credential resolution path for multi-provider setups |
| 3 | [#19214](https://github.com/NousResearch/hermes-agent/issues/19214) `terminal.cwd` foot-gun (closed) | 5 | 0 | **Config scope safety** | Separate per-mode working directories; prevent silent CLI misconfiguration |
| 4 | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy Tool Schema Loading | 4 | 7 | **Token efficiency** | Critical cost/performance optimization for tool-heavy deployments |

### Analysis

The **7 upvotes on #6839** (Lazy Tool Schema Loading) make it the strongest community signal for a roadmap priority. The issue describes **3,500–5,000 tokens wasted per call** — a direct cost driver. The underlying need is **intelligent context management** without sacrificing tool availability.

The `terminal.cwd` fix (#19214, closed) reveals a **configuration UX anti-pattern**: single keys with silent global effects cause persistent user confusion.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **P1** | [#16547](https://github.com/NousResearch/hermes-agent/pull/16547) (PR) | OPEN | Self | **Security:** Gateway `MEDIA` directive file path traversal — model-controlled local file exfiltration risk |
| **P1** | [#13248](https://github.com/NousResearch/hermes-agent/issues/13248) | OPEN | None identified | Slack: Empty-response retry loop on `claude-opus-4-7` — gateway misinterprets intentional silence |
| **P1** | [#14128](https://github.com/NousResearch/hermes-agent/issues/14128) | OPEN | None identified | Gateway shutdown hang → PID file race on restart |
| **P2** | [#19294](https://github.com/NousResearch/hermes-agent/issues/19294) | OPEN | None identified | Browser tool ignores `AGENT_BROWSER_EXECUTABLE_PATH` — unnecessary Playwright gating |
| **P2** | [#19362](https://github.com/NousResearch/hermes-agent/issues/19362) | OPEN | None identified | Azure/OpenAI content filter false-positive on context compression |
| **P2** | [#19417](https://github.com/NousResearch/hermes-agent/issues/19417) | OPEN | [#19425](https://github.com/NousResearch/hermes-agent/pull/19425) (open) | MCP `ClosedResourceError` with empty message |
| **P2** | [#19287](https://github.com/NousResearch/hermes-agent/issues/19287) | OPEN | None identified | Telegram: Images passed as file paths, not vision content — model never "sees" images |
| **P2** | [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) | OPEN | None identified | Telegram resolver failure caching + cold-boot detection gap |
| **P2** | [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) | OPEN | None identified | MiniMax provider connection drops (regression from OpenClaw) |

### Regressions & Patterns

- **Gateway/platform stability** is a recurring theme: Telegram (#5729, #19287, #19288), Slack (#13248), Discord (#19428), Feishu (#14128), QQ (#19422)
- **Vision pipeline gaps**: #19287 (Telegram images) suggests the gateway's media-to-model pipeline is incomplete for non-text content
- **Provider-specific fragility**: Azure filters (#19362), Anthropic branding detection (#19046), MiniMax connections (#6838) indicate insufficient abstraction over provider quirks

---

## 6. Feature Requests & Roadmap Signals

| Issue | 👍 | Signal Strength | Likelihood in Next Version |
|:---|:---:|:---|:---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy Tool Schema Loading | 7 | **Very High** | High — community-validated cost issue, clear technical proposal |
| [#19384](https://github.com/NousResearch/hermes-agent/issues/19384) `hermes skills` CLI for curator ops | 0 | Medium | Medium — builds on existing curator infrastructure (PR #bc79e227e) |
| [#13072](https://github.com/NousResearch/hermes-agent/issues/13072) CLI Auto-Queue Mode | 0 | Medium | Medium — workflow UX improvement, no architectural blockers |
| [#19344](https://github.com/NousResearch/hermes-agent/issues/19344) Planning Consultant (`/consult`) | 0 | Medium | Medium — fits frontier/cost-effective model split pattern |
| [#18074](https://github.com/NousResearch/hermes-agent/issues/18074) Anthropic Tool Search for MCP | 0 | Medium | Medium — provider-specific optimization, depends on Anthropic API stability |
| [#19324](https://github.com/NousResearch/hermes-agent/issues/19324) Approval policy for self-improvement writes | 0 | Medium | Medium — safety/correctness concern, aligns with "git protection" narrative |
| [#19320](https://github.com/NousResearch/hermes-agent/issues/19320) Codex `web.run` as search provider | 0 | Low-Medium | Medium — simple provider addition if API permits |
| [#17649](https://github.com/NousResearch/hermes-agent/issues/17649) Semantic Skill Retrieval (FTS5) | 0 | Medium | Lower — competes with #6839/#13332, may converge |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) Hybrid Tool Pre-Selection (RAG-style) | 1 | Medium | Lower — more complex than #6839, may be v2 optimization |

**Prediction:** #6839 (Lazy Tool Schema Loading) is the strongest candidate for next-release inclusion due to validated user pain (7 upvotes), clear ROI (token cost reduction), and existing community proposal.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Token/cost overhead** | #6839, #13332, #17649 | High — direct financial impact |
| **Configuration foot-guns** | #19214 (`terminal.cwd`), #8430 (`context_length` ignored) | High — silent misbehavior |
| **Multi-profile data isolation** | #18442, #19348 (Kanban DB scope) | Medium — breaks team workflows |
| **Gateway platform reliability** | Telegram, Slack, Discord issues above | Medium — production deployment risk |
| **Windows compatibility** | #19424 (UTF-8 crash) | Medium — platform parity gap |
| **Self-improvement safety** | #19324 (unapproved git push) | Medium — trust erosion risk |

### Satisfaction Signals

- **Active salvage workflow**: Maintainer attention to stalled PRs improves contributor trust
- **Curator system maturation**: #19384, #18810/#19433 show lifecycle management improving
- **OAuth fallback merged**: #933 (closed) addresses multi-account reliability

### Dissatisfaction Signals

- **"Excessive branding" (#19046)**: User frustration with third-party API identification triggering provider restrictions
- **Context/memory failures (#14420)**: Agent unable to retain basic identity across 8-message conversation
- **Browser tool gating (#19294)**: Environment variable ignored, forcing Playwright dependency

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#8430](https://github.com/NousResearch/hermes-agent/issues/8430) `context_length` ignored | 22 days | **User config override broken** | Maintainer triage; config parsing logic review |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy Tool Loading | 25 days | **High community demand, unassigned** | Roadmap commitment or PR solicitation |
| [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) Telegram cold-boot | 27 days | Production reliability | Network readiness detection pattern |
| [#5021](https://github.com/NousResearch/hermes-agent/issues/5021) Session flush on force-exit | 30 days | Data loss risk | Architectural decision on persistence granularity |
| [#11020](https://github.com/NousResearch/hermes-agent/issues/11020) Browser session lifecycle | 18 days | Headed/persistent workflows broken | Multi-bug coordination, env-var audit |
| [#12794](https://github.com/NousResearch/hermes-agent/pull/12794) Delegate task overrides | 14 days (PR) | Subagent observability | Review for merge — no comments, may stall |
| [#16547](https://github.com/NousResearch/hermes-agent/pull/16547) Security: MEDIA containment | 7 days (PR) | **Security boundary** | Priority review — P1, no merge activity |

### Critical Attention Items

1. **#16547 (security PR)**: 7 days open, P1 severity, no merge — security hardening for model-controlled file access needs expedited review
2. **#6839 (lazy loading)**: Highest community-validated feature request, unassigned for 25 days — risk of community frustration if deferred further
3. **#12794 (delegate overrides)**: PR with no comments for 14 days — at risk of requiring "salvage" later; proactive review would reduce maintainer load

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-03 to 2026-05-04. Activity level: high. Merge velocity: strong. Release cadence: paused.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-04

## 1. Today's Overview

PicoClaw shows **moderate-to-high activity** with 24 tracked updates in the past 24 hours (5 issues, 19 PRs), indicating an active development cycle approaching the v0.2.8 milestone. The project is experiencing **growing pains around provider compatibility**, with multiple fixes targeting DeepSeek, Gemini, and emerging Chinese providers like Xiaomi Mimo. The 13 open PRs against 6 merged/closed suggest a **review bottleneck** building up. Notably, the nightly build pipeline is active with automated builds, but documentation and build-from-source workflows remain problematic for new contributors.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.8-nightly.20260503.a94ba821](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** | Nightly | Automated build; explicitly flagged as potentially unstable |

**Changes since v0.2.8:** Full changelog available at [compare link](https://github.com/sipeed/picoclaw/compare/v0.2.8...main). No breaking changes or migration notes published for this nightly.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Impact |
|----|--------|--------|
| [#2677](https://github.com/sipeed/picoclaw/pull/2677) — Feat/runtime events | alexhoshina | **Major infrastructure**: Unified runtime event system with backpressure policies, subscriber stats, and in-process bus; foundational for agent observability |
| [#2682](https://github.com/sipeed/picoclaw/pull/2682) — docs: fix agents.defaults model configuration format | dtapps | Documentation correction: flattened `model_name` + `model_fallbacks` format |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) — fix(mcp): sanitize MCP tool schemas for Gemini function calling | afjcjsbx | **Critical compatibility fix**: Resolves Gemini HTTP 400 crashes with complex JSON schemas (`$ref`, `anyOf`, `$defs`) |
| [#2717](https://github.com/sipeed/picoclaw/pull/2717) — feat: add DeepSeek vision unsupported error detection | LiusCraft | Provider hardening: Detects strict-provider schema rejection of `image_url` |
| [#2735](https://github.com/sipeed/picoclaw/pull/2735) — build(deps): bump AWS SDK config | dependabot[bot] | Routine dependency maintenance |
| [#2669](https://github.com/sipeed/picoclaw/pull/2669) — feat(agent): add network error retry with configurable max retries and backoff | david1gp | **Reliability improvement**: Configurable resilience against transient network failures |

**Key advancement**: The runtime events infrastructure (#2677) represents architectural maturation, enabling better debugging, monitoring, and future distributed tracing.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Engagement | Analysis |
|------|------|-----------|----------|
| 1 | [#2225](https://github.com/sipeed/picoclaw/issues/2225) — [Feature] Ollama cloud credentials | **10 comments** | **Long-running unmet need**: User `Suisei110` has been waiting since March 31 for Ollama cloud authentication support. Zero upvotes despite high comment count suggests niche but persistent demand. Underlying need: Ollama's cloud offering (ollama.com) requires API key management that PicoClaw's provider abstraction doesn't yet accommodate. |
| 2 | [#2668](https://github.com/sipeed/picoclaw/issues/2668) — Gemini API 400 Bad Request for MCP tools | 1 comment, 1 👍 | **Resolved rapidly**: Closed same day as fix PR #2681 merged. Shows responsive maintainer action on provider-critical bugs. |
| 3 | [#2756](https://github.com/sipeed/picoclaw/pull/2756) — fix: preserve Telegram topic context | Fresh (May 3) | Telegram forum functionality is actively being polished; regression test included indicates production use at scale. |

**Community signal**: Strong interest in **multi-channel robustness** (Telegram topics, WeChat/DingTalk image handling) and **provider breadth** (Ollama cloud, DeepSeek, Gemini, Xiaomi Mimo).

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? |
|----------|------|--------|--------------|
| 🔴 **High** | [#2753](https://github.com/sipeed/picoclaw/issues/2753) — Build from source: launcher does not exist | **OPEN** | ❌ No PR; documentation/CI gap |
| 🔴 **High** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) — Android v0.2.8: cannot access any data from tabs | **OPEN** | ❌ No PR; affects release builds |
| 🟡 **Medium** | [#2718](https://github.com/sipeed/picoclaw/issues/2718) — DeepSeek 400 'unknown variant image_url' | **CLOSED** | ✅ Fixed by #2717 |
| 🟡 **Medium** | [#2668](https://github.com/sipeed/picoclaw/issues/2668) — Gemini MCP schema crash | **CLOSED** | ✅ Fixed by #2681 |
| 🟡 **Medium** | [#2725](https://github.com/sipeed/picoclaw/pull/2725) — MCP init failure makes agent zombie | **OPEN PR** | ✅ Awaiting merge |
| 🟢 **Low** | [#2750](https://github.com/sipeed/picoclaw/pull/2750) — exec guard path traversal false positive | **OPEN PR** | ✅ Awaiting merge |

**Stability assessment**: Two **unfixed high-severity issues** threaten user onboarding (build from source) and mobile deployment (Android data access). The Android issue (#2744) is particularly concerning as it affects the current release version v0.2.8.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in v0.2.9+ | Rationale |
|---------|--------|----------------------|-----------|
| **Streaming reasoning_content support** | [#2755](https://github.com/sipeed/picoclaw/pull/2755) | **High** | Xiaomi Mimo integration driving OpenAI-compatible provider enhancement; includes video media support |
| **Parallel subagent execution** | [#2754](https://github.com/sipeed/picoclaw/pull/2754) | **High** | Synchronous `multi_subagent` tool with per-call target selection; architectural fit with agent scaling goals |
| **Model configuration UI improvements** | [#2752](https://github.com/sipeed/picoclaw/pull/2752) | **High** | Upstream model fetching, connectivity testing, provider-aware validation — clear UX priority |
| **Per-request MCP dynamic headers** | [#2696](https://github.com/sipeed/picoclaw/pull/2696) | **Medium** | Enterprise authentication patterns; channel-to-MCP header forwarding |
| **Ollama cloud credentials** | [#2225](https://github.com/sipeed/picoclaw/issues/2225) | **Medium** | Persistent community request; blocked on provider abstraction extension |
| **DuckDuckGo web search by default** | [#2647](https://github.com/sipeed/picoclaw/pull/2647) | **Medium** | Stale since April 24; config system change, low risk |

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Context | Emotional Signal |
|-------|-----------|----------------|
| **Build from source broken** | [#2753](https://github.com/sipeed/picoclaw/issues/2753) — Ubuntu 24.04, Go 1.26 | Frustration: "No such file" after following README |
| **Android data inaccessible** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) — Android v0.2.8 | Blocking: Cannot use any tabs |
| **DeepSeek image handling crashes** | [#2718](https://github.com/sipeed/picoclaw/issues/2718) — WeChat/DingTalk channels | Confusion: Error persists after first failure |
| **Gemini + Notion MCP broken** | [#2668](https://github.com/sipeed/picoclaw/issues/2668) | Production impact: Complex schemas common in enterprise tools |

### Positive Signals

- **Telegram topic support** being actively refined (#2756) indicates real community usage in forum/group settings
- **Runtime events infrastructure** (#2677) shows investment in operability for self-hosters
- **Rapid fix turnaround** on Gemini/DeepSeek issues demonstrates provider compatibility priority

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) Ollama cloud credentials | **34 days** | User attrition | Provider abstraction design decision; assign to provider maintainer |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) Docker compose privileged mode | **33 days**, stale | Security review pending | Evaluate privileged necessity vs. capability additions |
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) Codex streaming + Telegram retries | **24 days** | Android TV/Termux user segment | Complex fix needs review bandwidth; author provided extensive context |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) DuckDuckGo web search default | **9 days**, stale | Low-risk merge | Config tag addition; trivial to merge or close with decision |

**Maintainer attention priority**: The **build-from-source breakage** (#2753) and **Android data access failure** (#2744) are **release-blocking** for v0.2.8 credibility. The Ollama cloud feature request (#2225) represents a **competitive gap** against other AI agent platforms.

---

*Digest generated from GitHub activity 2026-05-03 to 2026-05-04. All links reference https://github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-04

## Today's Overview

NanoClaw experienced **exceptionally high development velocity** with 50 PRs updated in the last 24 hours (31 merged/closed, 19 open) alongside 11 issue updates. The project shows strong maintainer responsiveness with 8 of 11 issues closed, though zero new releases suggests the team is accumulating changes for a larger version bump. Activity clusters around **v2 architecture stabilization**, **security hardening**, and **platform compatibility expansion** (macOS package managers, rootless Podman, OpenRC). The contributor base appears diverse with both core team members (andrebrov, kpscheffel) and community contributors actively landing fixes.

---

## Releases

**None** — No new releases published. Given the volume of merged fixes, particularly around v2 migration and container architecture, a release may be imminent.

---

## Project Progress

### Merged/Closed PRs (Selected Highlights)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| **#2229** | SebTardif | Recognizes `ANTHROPIC_AUTH_TOKEN` in setup verification — closes credential parity gap with Claude Code official CLI | [qwibitai/nanoclaw#2229](https://github.com/qwibitai/nanoclaw/pull/2229) |
| **#2228** | SamBagetAI | **baget.ai team support**: Active-team-only flow with CoS-required hierarchy, strips off-team roles from `CLAUDE.local.md` | [qwibitai/nanoclaw#2228](https://github.com/qwibitai/nanoclaw/pull/2228) |
| **#2222** *(open, in progress)* | gabi-simons | Updates `/update-nanoclaw` skill for **v2 architecture** — dep install, container rebuild, channel awareness | [qwibitai/nanoclaw#2222](https://github.com/qwibitai/nanoclaw/pull/2222) |
| **#2216** | Koshkoshinsk | Migration script UX: correct OneCLI health endpoint, TTY guard, legacy v1 service retirement | [qwibitai/nanoclaw#2216](https://github.com/qwibitai/nanoclaw/pull/2216) |
| **#2097** | zhushuanbao-dot | **Lore Context semantic memory skill**: Cross-session memory via external service integration | [qwibitai/nanoclaw#2097](https://github.com/qwibitai/nanoclaw/pull/2097) |

### Key Feature Advances

- **Semantic memory ecosystem**: Lore Context integration positions NanoClaw for long-term agent coherence
- **Enterprise team structures**: baget.ai partial team support enables role-based access control
- **Credential flexibility**: Full `ANTHROPIC_AUTH_TOKEN` parity with official Claude Code

---

## Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| **#853** — ANTHROPIC_AUTH_TOKEN support | 3 comments, resolved | **Underlying need**: Users expect NanoClaw to match Claude Code's auth patterns exactly; friction in setup verification blocks adoption. [Issue #853](https://github.com/qwibitai/nanoclaw/issues/853) |
| **#2223** — Agent identity conflation (Telegram handle vs. agent name) | 1 comment, closed | **Underlying need**: Container/channel naming abstractions leak into agent self-model; users need clear separation of transport identity from agent identity. [Issue #2223](https://github.com/qwibitai/nanoclaw/issues/2223) |
| **#2234** — llama.cpp compatibility | 0 comments, **OPEN** | **Emerging hot topic**: Local model support is increasingly expected; "Your assistant didn't reply in time" suggests timeout/response format mismatches. [Issue #2234](https://github.com/qwibitai/nanoclaw/issues/2234) |

**Community tension point**: The llama.cpp issue (#2234) has zero maintainer engagement despite representing a significant user segment wanting local/self-hosted LLM support.

---

## Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **🔴 High** | **#2227** — `engage_mode='always'` silently drops all group messages | **OPEN** | None | Logic error in `evaluateEngage()` switch statement; data loss without user awareness. [Issue #2227](https://github.com/qwibitai/nanoclaw/issues/2227) |
| **🟡 Medium** | **#2221** — gh CLI missing from container PATH (regression) | **CLOSED** | #2216 area | Previously working functionality broke; affects GitHub integration in containers. [Issue #2221](https://github.com/qwibitai/nanoclaw/issues/2221) |
| **🟡 Medium** | **#2220** — Agent posts to deregistered Telegram chat | **CLOSED** | #2225 related | Deregistration state not respected; indicates stale channel reference cleanup gap. [Issue #2220](https://github.com/qwibitai/nanoclaw/issues/2220) |
| **🟡 Medium** | **#2214** — iMessage local-mode adapter never delivers inbound | **CLOSED** | None visible | Silent failure (no errors logged); Photon SDK works, suggesting bridge-level bug. [Issue #2214](https://github.com/qwibitai/nanoclaw/issues/2214) |
| **🟢 Low** | **#2200** — Telegram init hangs on OpenRC | **OPEN** | None | Non-systemd init system compatibility; service detection logic too narrow. [Issue #2200](https://github.com/qwibitai/nanoclaw/issues/2200) |

**Stability assessment**: Two high-impact silent failures (#2227 data loss, #2214 message black-holing) were caught and mostly resolved, but the pattern of "silent drops" suggests defensive logging needs strengthening.

---

## Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **llama.cpp / local LLM support** | #2234 | **Medium-High** | Community demand clear; timeout handling may need architectural change |
| **Per-group model + effort overrides** | #2233 (open PR) | **High** | Small, self-contained config extension; PR already submitted |
| **Interval-based scheduling (`@every:<ms>`)** | #2237 (open PR) | **High** | Complements existing cron; drift-prevention logic shows maturity |
| **MacPorts support** | #2238 (open PR) | **Medium** | Niche but low-risk; contributor follows guidelines |
| **MCP server-side tool filtering by trust tier** | #2217 (closed tracking) | **Medium** | 38K→reduced token waste; referenced as prerequisite for bash-safety |

**Predicted v2.x focus**: Container runtime maturity (Podman, OpenRC), local model ecosystem integration, and operational hardening (security PRs #1999-#2004).

---

## User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Setup friction on non-standard platforms** | OpenRC (#2200), MacPorts (#2238), rootless Podman (#2230) | Medium — niche but vocal |
| **Silent failures obscure debugging** | #2227 (dropped messages), #2214 (iMessage black hole), #2220 (deregistered chat) | **High** — erodes trust |
| **Migration complexity v1→v2** | #2216, #2235, #2222 all address migration UX | Medium — one-time but critical |
| **Container environment drift** | #2221 (gh CLI regression), #2236 (WORKDIR mismatch) | Medium |

### Use Cases Emerging
- **Multi-identity agents**: Telegram handle vs. agent name confusion (#2223) shows users deploying single agents across multiple surfaces
- **Team/enterprise deployment**: baget.ai integration (#2228) and per-group config (#2233) signal organizational use
- **Local-first/self-hosted**: llama.cpp request (#2234) and credential proxy work indicate privacy-sensitive users

### Satisfaction Signals
- Rapid issue closure (8/11 in 24h)
- Security investment visible (#1999-#2004 hardening series)
- Semantic memory integration shows forward-looking architecture

---

## Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **#2234** — llama.cpp support | 1 day | **Growing** | Maintainer triage; may require response format/timeout architecture discussion. [Issue #2234](https://github.com/qwibitai/nanoclaw/issues/2234) |
| **#2004, #2000, #1999** — Security hardening trilogy | ~10 days | Low | All from same author (Hinotoi-agent), well-scoped; awaiting final review/merge. [PR #2004](https://github.com/qwibitai/nanoclaw/pull/2004) · [PR #2000](https://github.com/qwibitai/nanoclaw/pull/2000) · [PR #1999](https://github.com/qwibitai/nanoclaw/pull/1999) |
| **#2209** — Orphan-claim delete regression | 1 day | Medium | Regression from #2183; test gap identified, fix submitted. [PR #2209](https://github.com/qwibitai/nanoclaw/pull/2209) |

**Maintainer attention recommended**: The llama.cpp compatibility request (#2234) risks becoming a "local LLM support" megathread without early architectural guidance. The security PR trilogy (#1999-#2004) represents significant trust-boundary work that should not stall.

---

*Digest generated from GitHub activity 2026-05-03/04. All links: https://github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-04

## 1. Today's Overview

NullClaw shows **minimal but focused activity** over the past 24 hours, with one open issue and one open pull request both authored by core contributor `mark-os`. The project appears to be in a **stability and refinement phase** rather than feature expansion, with attention concentrated on sandboxing infrastructure and process-spawning reliability. No releases were cut, suggesting maintainers are accumulating fixes before a version bump. The single-threaded nature of today's activity—one contributor driving both issue and PR—indicates either a quiet period or deep work on foundational security components. Overall project health appears **stable but low-velocity**.

---

## 2. Releases

**No new releases** for the period.

---

## 3. Project Progress

**No merged or closed PRs today.**

The sole active PR remains open:

- **[#883 probe: resolve executable before spawning child process](https://github.com/nullclaw/nullclaw/pull/883)** — `mark-os`  
  Adds pre-spawn executable resolution to `runQuietCommand` in `src/security/probe.zig`. This is a **defensive hardening PR** that prevents a Zig stdlib bug where failed `execve` calls leave zombie state or file descriptor leaks. Currently awaiting review/merge.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| **[#882 sandbox: default to Landlock on Linux, stop probing external tools at startup](https://github.com/nullclaw/nullclaw/issues/882)** | 2 comments | **Highest community signal today.** This issue proposes eliminating runtime probing of `firejail`, `bwrap`, and `docker` at startup by switching `sandbox.backend: "auto"` to prefer Landlock (Linux kernel-native sandboxing). |

**Underlying need:** The recurring startup probes have clearly caused operational pain—spawning child processes just to detect sandbox availability introduces latency, failure modes, and potential security surface. The community is signaling desire for **deterministic, zero-external-dependency sandboxing by default**. Landlock (available since Linux 5.13) represents a modern, kernel-native path that eliminates the "dependency hell" of external sandbox tools. The 2 comments suggest active discussion on migration strategy and backward compatibility.

---

## 5. Bugs & Stability

| Severity | Item | Fix Status |
|----------|------|------------|
| **Medium-High** | [PR #883](https://github.com/nullclaw/nullclaw/pull/883): Zig stdlib `execve` failures leave undefined state | **Fix proposed, awaiting merge** |
| **Medium** | [Issue #882](https://github.com/nullclaw/nullclaw/issues/882): Startup probing causes recurring failures (references prior issues) | **No fix yet; architectural solution proposed** |

**Stability assessment:** Today's items reveal a **systemic fragility in process spawning**. The `probe.zig` module's reliance on child process execution for capability detection is hitting fundamental stdlib limitations. The proposed fixes—pre-resolution check (#883) and Landlock default (#882)—represent a coherent hardening strategy. Risk if unaddressed: sandbox detection failures could cause NullClaw to silently degrade security posture or fail to start in restricted environments (containers, systemd services with limited PATH).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood in Next Version | Rationale |
|--------|---------------------------|-----------|
| **Landlock as default Linux sandbox** | **High** | Issue #882 is actively authored by `mark-os` (core maintainer), references prior recurring issues, aligns with modern Linux security trends |
| **Elimination of runtime sandbox probing** | **High** | Paired with Landlock default; reduces complexity and attack surface |
| **Enhanced `probe.zig` error handling** | **Very High** | PR #883 already implements; likely merges quickly as defensive fix |

**Emerging pattern:** NullClaw appears to be **pivoting toward kernel-native security primitives** and away from external tool orchestration. This reduces dependency footprint and improves reliability in diverse deployment environments (CI/CD, containers, embedded).

---

## 7. User Feedback Summary

**Pain points distilled from today's data:**

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Startup latency/reliability** | Issue #882: "recurring issues" from probing | Slow or failed initialization in production deployments |
| **Zig stdlib fragility** | PR #883: `execve` failure modes | Potential resource leaks, zombie processes, undefined behavior |
| **External tool dependency burden** | Issue #882: must maintain `firejail`/`bwrap`/`docker` compatibility matrix | Operational complexity, version skew risks |

**Satisfaction signal:** The proactive identification and self-assignment of these issues by `mark-os` suggests **maintainer responsiveness** to infrastructure debt. No user complaints or dissatisfaction expressed in visible comments—issue framing is solution-oriented rather than frustrated.

---

## 8. Backlog Watch

**No long-unanswered items visible in today's data slice.** However, **watch items for maintainer attention:**

| Item | Age | Risk if Stalled |
|------|-----|-----------------|
| [PR #883](https://github.com/nullclaw/nullclaw/pull/883) | ~1 day | Fix for known stdlib bug; delay increases exposure to resource leaks |
| [Issue #882](https://github.com/nullclaw/nullclaw/issues/882) | ~1 day | Architectural decision needed; blocking broader sandbox simplification |

**Recommendation:** Given both items are from the same contributor and thematically linked, a **coordinated review** would be efficient. The project would benefit from a second maintainer or community reviewer to prevent `mark-os` from being a single point of failure on critical security infrastructure.

---

*Digest generated from NullClaw GitHub activity for 2026-05-03/04. Data source: github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-04

## Today's Overview

IronClaw shows **intense development velocity** with 45 items updated in 24 hours (20 issues, 25 PRs), dominated by the **"Reborn" architectural refactoring** and critical bug triage. The project is in a high-risk integration phase: PR #3230 attempts to land the Reborn substrate into `main` behind default-off gates, while multiple critical/blocker-level bugs in LLM provider integrations and terminal handling demand immediate attention. Activity is heavily concentrated among core maintainers (serrrfirat, zmanian, thomasmaerz, ilblackdragon), suggesting a coordinated push toward a major milestone rather than broad community contribution. The 22:3 open-to-merged PR ratio indicates substantial work-in-progress with limited completion.

---

## Releases

**No new releases** (v0.27.0 remains current).

---

## Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #3226 | thomasmaerz | **Fix: Preserve Gemini `thought_signature` in OpenAI-compatible tool loops** — Adds optional `thought_signature` to `ToolCall`, threads it through LLM call sites, adds Gemini-gated rig adapter context, and includes integration regression coverage for second-turn tool calls | [nearai/ironclaw#3226](https://github.com/nearai/ironclaw/pull/3226) |
| #3234 | ilblackdragon | **CI: Replace deleted preflight test with `tool_activate` surface** — Fixes v2-engine E2E group referencing removed `test_v2_kernel_auth_preflight.py` | [nearai/ironclaw#3234](https://github.com/nearai/ironclaw/pull/3234) |
| #3170 | serrrfirat | **Test: Add host runtime vertical gates** — Rebased HostRuntime vertical gate coverage with caller-level gates for durable replay, mount attenuation, resource/output-limit reconciliation | [nearai/ironclaw#3170](https://github.com/nearai/ironclaw/pull/3170) |

### Notable Open PRs Advancing

| PR | Author | Significance | Link |
|:---|:---|:---|:---|
| #3230 | serrrfirat | **LANDS REBORN SUBSTRATE INTO MAIN** — XL PR, default-off gated, includes DB migration; reduces branch drift but risks integration instability | [nearai/ironclaw#3230](https://github.com/nearai/ironclaw/pull/3230) |
| #3099 | zmanian | Reborn transport adapter contract — policy-free `ironclaw_transport` crate with typed routes, bridges v1 `Channel`s to `TransportAdapter`s | [nearai/ironclaw#3099](https://github.com/nearai/ironclaw/pull/3099) |
| #3171 | zmanian | Reborn event store backends — JSONL, PostgreSQL, libSQL backends with migrations | [nearai/ironclaw#3171](https://github.com/nearai/ironclaw/pull/3171) |
| #3212 | zmanian | Reborn event projection service — `EventProjectionService`, `ThreadTimeline`, `RunStatusProjection` DTOs | [nearai/ironclaw#3212](https://github.com/nearai/ironclaw/pull/3212) |
| #3218 | abbyshekit | NEAR intents trial mode — `plan_near_intents_trial` with strategy gates, wallet setup, unsigned `build_intent` requests | [nearai/ironclaw#3218](https://github.com/nearai/ironclaw/pull/3218) |
| #3224 | abbyshekit | Multi-asset DCA basket scheduling — natural extension of single-asset DCA (#3220) | [nearai/ironclaw#3224](https://github.com/nearai/ironclaw/pull/3224) |

---

## Community Hot Topics

### Most Active by Engagement (Comments)

| Issue/PR | Comments | Analysis |
|:---|:---|:---|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) — Reborn cutover blocker: `AgentLoopHost` facade | 3 comments | **Central architecture tracker** — Parent to 8+ sub-issues; defines the host-layer abstraction that will unify turn coordination, loop services, and tool surfacing. High coordination overhead suggests this is the critical path for Reborn delivery. |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) — Reborn cutover blocker: `TurnCoordinator` | 1 comment | Thread/turn admission and one-active-run enforcement; first host service after substrate lands. Comment activity low but structural importance extreme. |
| [#3225](https://github.com/nearai/ironclaw/issues/3225) — Gemini `thought_signature` bug | 1 comment | **Reopened concern** — Despite PR #3226 fix, this reports fresh variant with `gemini-3.1-flash-lite-preview` via API-key auth; suggests fix may be model-specific or auth-path-dependent. |
| [#3228](https://github.com/nearai/ironclaw/issues/3228) — Terminal corruption after `/quit` | 1 comment | SSH/noVNC/screen/tmux mouse tracking partially disabled; affects all remote/multiplexed access patterns. |
| [#3214](https://github.com/nearai/ironclaw/issues/3214) — `thoughtSignature` dropped in Cloud Code SSE handler | 1 comment | **Closed today** — Prior fixes #1565, #1752 deemed incomplete; root cause "upstream" never addressed. PR #3226 may not fully resolve. |

### Underlying Needs Analysis

- **Reborn architecture coherence**: The dense web of cross-referenced issues (#2987 → #3016/#3013 → #3195/#3198/#3199/#3202 → #3232/#3236/#3237/#3238) reveals a team struggling to decompose a monolithic refactor into reviewable, sequentially-dependent pieces. The "follow-up architecture deepening" issue #3231 explicitly acknowledges this risk.

- **LLM provider reliability**: Gemini and DeepSeek integrations are brittle; the `thought_signature`/`thoughtSignature` field appears to be a protocol impedance mismatch between Google's native API and OpenAI-compatible layers that keeps resurfacing.

---

## Bugs & Stability

| Severity | Issue | Status | Fix PR | Link |
|:---|:---|:---|:---|:---|
| **Critical** | LLM provider fallback persists to DB, permanently destroying user config | Open, 0 comments | None | [#3229](https://github.com/nearai/ironclaw/issues/3229) |
| **High** | Terminal corruption after `/quit` in SSH/noVNC/screen/tmux — mouse tracking partially disabled | Open, 1 comment | None | [#3228](https://github.com/nearai/ironclaw/issues/3228) |
| **High** | Gemini API-key backend fails tool-calling with missing `thought_signature` (new model variant) | Open, 1 comment | #3226 (may be incomplete) | [#3225](https://github.com/nearai/ironclaw/issues/3225) |
| **Medium** | TUI text copy fails silently in headless/X11-less environments (`arboard` dependency) | Open, 0 comments | None | [#3227](https://github.com/nearai/ironclaw/issues/3227) |
| **Medium** | DeepSeek tool use not working | Open, 0 comments | None | [#3201](https://github.com/nearai/ironclaw/issues/3201) |
| **Medium** | `thoughtSignature` dropped in Cloud Code SSE handler (prior fixes incomplete) | **Closed today** | #3226 | [#3214](https://github.com/nearai/ironclaw/issues/3214) |

**Critical concern**: [#3229](https://github.com/nearai/ironclaw/issues/3229) describes a **data-destroying config bug** where startup fallback logic writes to persistent storage, permanently reverting user model/provider settings on every restart. Zero comments and no linked PR suggests this may be under-triaged relative to its user impact.

---

## Feature Requests & Roadmap Signals

### Explicit Architecture Definitions (Reborn)

| Issue | Description | Likelihood in Next Version |
|:---|:---|:---|
| [#3238](https://github.com/nearai/ironclaw/issues/3238) | Cancellation semantics (who may cancel, state transitions, stale write fencing) | High — blocks clean Reborn UX |
| [#3237](https://github.com/nearai/ironclaw/issues/3237) | Runtime HTTP syscall contract for shared egress | High — security-critical for sandboxing |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) | Same-thread follow-up and steering policy (`/btw`, queue visibility) | Medium — UX polish, not launch-blocking |
| [#3232](https://github.com/nearai/ironclaw/issues/3232) | `LoopExit` contract | High — needed for graceful shutdown |
| [#3202](https://github.com/nearai/ironclaw/issues/3202) | Turn persistence and active-lock schema | High — foundational data layer |
| [#3199](https://github.com/nearai/ironclaw/issues/3199) | `TurnRunner` execution model | High — core runtime behavior |
| [#3198](https://github.com/nearai/ironclaw/issues/3198) | `TurnCoordinator` public API shape | High — adapter contract stability |
| [#3195](https://github.com/nearai/ironclaw/issues/3195) | `ironclaw_turns` crate boundary | High — code organization |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) | `AgentLoopDriver` and run-class profile contract | High — scheduling/policy |
| [#3091](https://github.com/nearai/ironclaw/issues/3091) | Loop support services (`PromptContextService`, `MemoryPromptContextService`, etc.) | Medium — depends on substrate stability |
| [#3090](https://github.com/nearai/ironclaw/issues/3090) | `ToolSurfaceService` and `CapabilityCatalog` | Medium — visibility layer, not authority |

### Product Features

| PR/Issue | Description | Timing Signal |
|:---|:---|:---|
| #3218, #3224, #3223 | NEAR intents trial mode, basket DCA, mission scaffold | **Active development** — suggests DeFi/NEAR integration is a parallel priority to Reborn |
| #1549 | Slack Socket Mode for NAT-friendly connectivity | Stale (2026-03-21) but XL size; may need rebase or maintainer push |

---

## User Feedback Summary

### Pain Points

| Issue | User Impact | Root Cause |
|:---|:---|:---|
| [#3229](https://github.com/nearai/ironclaw/issues/3229) | **Permanent config loss on restart** — users cannot persist preferred LLM provider/model | Startup fallback logic lacks "write once" guard; treats fallback as canonical |
| [#3228](https://github.com/nearai/ironclaw/issues/3228) | Remote terminal sessions corrupted after `/quit` — forces session kill, data loss risk | Mouse tracking teardown incomplete in multiplexed terminal emulators |
| [#3227](https://github.com/nearai/ironclaw/issues/3227) | Cannot copy text in headless environments (LXC, cloud VMs, WSL) | Hard dependency on `arboard` → X11/Wayland; no terminal-based fallback (OSC 52, tmux buffer) |
| [#3201](https://github.com/nearai/ironclaw/issues/3201) | DeepSeek tool use completely non-functional | Provider-specific tool-call serialization untested |
| [#3225](https://github.com/nearai/ironclaw/issues/3225) | Gemini 3.1 flash-lite-preview fails deterministically on second turn | `thought_signature` field handling model-version-specific |

### Satisfaction Signals
- **None explicitly visible** — no 👍 reactions on any issue/PR, no "works for me" comments, no user testimonials. This absence in a high-activity project may indicate:
  - Core team self-dogfooding with limited external user base
  - Users reporting via alternative channels (Discord, NEAR forums)
  - Project pre-1.0 with primarily contributor usage

### Use Case Tensions
- **Headless/server deployment** vs. **desktop-assumption code**: Three bugs (#3228, #3227, #3233) reveal IronClaw's TUI and channel activation paths assume GUI or interactive desktop environments, conflicting with LXC/container/SSH deployment patterns.
- **Multi-provider LLM flexibility** vs. **provider-specific fragility**: The recurring `thought_signature` saga shows OpenAI-compatible abstraction leaks Google-native protocol details.

---

## Backlog Watch

### Long-Unanswered Critical Items

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3229](https://github.com/nearai/ironclaw/issues/3229) Config destruction bug | 1 day | **Critical data loss** | Immediate triage, hotfix release |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) `AgentLoopHost` facade | 6 days | Reborn architecture centralization | Maintainer decision on sequencing vs. #3230 |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) Transport adapter contract | 5 days | Reborn networking foundation | Review bottleneck — XL PR, core author zmanian |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) Slack Socket Mode | 43 days | Community channel expansion | Rebase required? Contributor (KonstantinMirin) may need maintainer guidance |
| [#2973](https://github.com/nearai/ironclaw/pull/2973) Dependabot: 39 dependency updates | 8 days | Security/stability drift | Routine but XL; CI must pass |

### Maintainer Attention Required

- **serrrfirat**: 11 open Reborn architecture issues need sequential resolution; risk of self-blocking if #3230 merge creates integration conflicts
- **zmanian**: 3 XL PRs (#3099, #3171, #3212) in event store/projection/transport stack — potential merge ordering dependencies
- **ilblackdragon**: E2E canary failures (#3235, #3234) suggest CI/auth infrastructure debt from engine-v2 contract changes

---

*Digest generated from GitHub activity 2026-05-03 → 2026-05-04. All links reference `github.com/nearai/ironclaw`.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-04

## 1. Today's Overview

LobsterAI shows **minimal activity** with only 3 items updated in the past 24 hours (1 issue, 2 stale PRs receiving minor updates). No new releases were published, and no PRs were merged or closed. The project appears to be in a **maintenance lull**—contributors are pushing incremental updates to existing PRs rather than introducing new work. Both active PRs carry the `[stale]` tag, suggesting review bottlenecks. Overall project health indicators point to **slowed momentum** requiring maintainer attention to clear backlog.

---

## 2. Releases

**No new releases** in the past 24 hours. No version changes to report.

---

## 3. Project Progress

**No PRs merged or closed today.** Both updated PRs remain open with `[stale]` status:

| PR | Status | Progress |
|---|---|---|
| [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | Open, stale | SQLite performance optimization awaiting review since March 25 |
| [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | Open, stale | Skill execution analytics feature awaiting review since March 25 |

**No features advanced to completion today.**

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|---|---|---|
| [#1880 希望增加Hermes Agent功能](https://github.com/netease-youdao/LobsterAI/issues/1880) | New issue, 0 comments, 0 👍 | **Emerging demand for agent interoperability** — user explicitly references Open WebUI's agent integration pattern (Hermes Agent + OpenClaw), signaling LobsterAI is perceived as lagging in multi-agent ecosystem connectivity |

| [#812 perf(sqlite): debounce save()](https://github.com/netease-youdao/LobsterAI/pull/812) | Updated after 5+ weeks stale | **Performance pain point** — addresses critical Electron main thread blocking; community interest exists but review stalled |

| [#871 feat(skills): 新增skill执行统计展示](https://github.com/netease-youdao/LobsterAI/pull/871) | Updated after 5+ weeks stale | **Observability gap** — skill execution analytics requested; includes UI screenshot suggesting near-complete implementation |

**Underlying needs:** 
- **Agent ecosystem integration** (competitive parity with Open WebUI)
- **Performance at scale** (SQLite synchronous I/O bottleneck in production use)
- **Operational visibility** (skill usage analytics for power users)

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? |
|---|---|---|---|
| 🔴 **High** | [#562](https://github.com/netease-youdao/LobsterAI/issues/562) (referenced) — SQLite sync write blocking Electron main thread | Known, PR pending | **Yes** — [#812](https://github.com/netease-youdao/LobsterAI/pull/812) implements debounce + async write, **unmerged for 6+ weeks** |

**No new crash/regression reports today.** The SQLite blocking issue remains the most critical stability concern with a ready but unreviewed fix.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **Hermes Agent / OpenClaw integration** | [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | Medium-High | Direct competitive response to Open WebUI; aligns with "Agent" trend in AI assistant space |
| **Skill execution analytics dashboard** | [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | High | PR already implemented with UI; only needs review/merge |
| **SQLite performance optimization** | [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | High | Critical fix ready, addresses documented production pain point |

**Predicted v-next priorities:** Performance (#812) and analytics (#871) are shovel-ready. Agent integration (#1880) may require architectural design review before implementation.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|---|---|---|
| **Performance frustration** | #562/#812 — "严重阻塞 Electron 主线程" (severely blocks Electron main thread) | 😤 Negative — production impact |
| **Ecosystem lock-in concern** | #1880 — explicit comparison to Open WebUI's agent support | 😐 Neutral-to-concerned — evaluating alternatives |
| **Operational blind spots** | #871 — need for skill usage statistics | 😐 Neutral — productivity/optimization need |
| **Contributor experience** | Both PRs stale 6+ weeks | 😤 Negative — review bottleneck may deter contributions |

**Use case signal:** Users are running LobsterAI in **sustained production workflows** (evidenced by streaming turn volume triggering 11-13 save() calls) and need **enterprise-grade observability and interoperability**.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#812 perf(sqlite): debounce save()](https://github.com/netease-youdao/LobsterAI/pull/812) | **40 days** | High — performance fix ready, user impact documented, may bit-rot | Maintainer code review; merge or request changes |
| [#871 feat(skills): 新增skill执行统计展示](https://github.com/netease-youdao/LobsterAI/pull/871) | **40 days** | Medium — feature complete with UI, low merge conflict risk | Maintainer review; potential quick win |
| [#562](https://github.com/netease-youdao/LobsterAI/issues/562) (underlying issue) | >40 days | High — referenced as resolved by #812 but issue remains open | Close if #812 merges, or clarify alternative fix |

**Recommendation:** Two PRs representing **production performance** and **user-facing analytics** are fully implemented but unreviewed. A focused maintainer review session could clear 6+ weeks of backlog and deliver immediate user value.

---

*Digest generated from GitHub activity 2026-05-03 to 2026-05-04. Data source: netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-04

## 1. Today's Overview

Moltis showed light but focused activity over the past 24 hours, with **2 open pull requests** and **1 active issue** receiving updates but no new releases. The project appears to be in a steady maintenance phase with contributions concentrated on provider compatibility (DeepSeek reasoning replay) and documentation quality (local TTS providers). No code was merged, suggesting either pending review cycles or maintainer bandwidth constraints. The single issue signals a potentially impactful runtime bug in tool call validation that could affect agent reliability. Overall project health appears stable but with review backlog accumulating.

---

## 2. Releases

**No new releases** — None published in the last 24 hours.

---

## 3. Project Progress

**No PRs were merged or closed today.** Both active pull requests remain in open status awaiting review:

| PR | Author | Focus | Status |
|:---|:---|:---|:---|
| [#962](https://github.com/moltis-org/moltis/pull/962) | penso | Local TTS provider documentation (Piper, Coqui) | Open, awaiting review |
| [#961](https://github.com/moltis-org/moltis/pull/961) | penso | DeepSeek reasoning content replay fix | Open, awaiting review |

**Technical advancement stalled** — While both PRs address legitimate ecosystem drift (abandoned upstream repositories for TTS tools, DeepSeek API compatibility), neither has progressed to merge. The DeepSeek fix (#961) is particularly time-sensitive given API provider changes.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#963](https://github.com/moltis-org/moltis/issues/963) — Tool calls with malformed arguments | 0 comments, 0 reactions | **Emerging reliability concern**: Pre-dispatch schema validation rejecting valid tool activations suggests a race condition or serialization edge case in the tool call pipeline |
| [#962](https://github.com/moltis-org/moltis/pull/962) — TTS docs update | `undefined` comments | Maintenance burden from upstream project abandonment (Coqui, Piper original repos) |
| [#961](https://github.com/moltis-org/moltis/pull/961) — DeepSeek reasoning replay | `undefined` comments | **Provider compatibility urgency**: DeepSeek V4 thinking-mode changes breaking persisted chat restoration |

**Underlying needs detected:**
- **Tool execution reliability** — Users need deterministic behavior when models correctly select tools but arguments fail validation
- **Documentation survivability** — Community seeking maintained forks/references as original TTS projects become unmaintained
- **Provider API resilience** — Rapid DeepSeek API evolution requiring defensive persistence design

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Available? |
|:---|:---|:---|:---|
| **HIGH** | [#963](https://github.com/moltis-org/moltis/issues/963) | `exec` tool calls intermittently fail with `missing=command` during pre-dispatch validation despite prior successful executions; runner rejects before `BeforeToolCall` hooks execute | **No** — No linked PR |
| MEDIUM | *(implicit in #961)* | Persisted DeepSeek chat history loses reasoning content on restoration, breaking follow-up API calls | **Yes** — [#961](https://github.com/moltis-org/moltis/pull/961) open, unmerged |

**Critical concern for #963:** The bug bypasses `BeforeToolCall` hooks entirely, indicating the validation failure occurs at the transport/schema layer rather than execution layer. This limits user workarounds and may affect other tools beyond `exec`.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** surfaced in today's activity. However, **inferred roadmap signals:**

| Signal | Likelihood in Next Version | Rationale |
|:---|:---|:---|
| Enhanced tool argument validation/logging | High | #963 exposes observability gap in schema validation failures |
| Provider-agnostic reasoning content persistence | High | #961 addresses specific DeepSeek case; likely generalizes to OpenAI o-series, Anthropic extended thinking |
| Automated upstream dependency health monitoring | Medium | TTS doc updates (#962) reveal manual tracking burden |
| Tool call retry/resilience layer | Medium | #963's intermittent nature suggests need for defensive retries |

---

## 7. User Feedback Summary

### Explicit Pain Points (from issue/PR descriptions)

| Source | Pain Point | Use Case Impact |
|:---|:---|:---|
| Cstewart-HC (#963) | **Non-deterministic agent execution** — successful tool history doesn't guarantee future success | Breaks autonomous agent workflows requiring reliable `exec` operations |
| penso (#962) | **Documentation rot** — original TTS project references lead to unmaintained repos | New user onboarding friction, broken setup paths |
| penso (#961) | **Chat history portability failure** — reasoning content dropped on DeepSeek restore | Multi-turn conversations with reasoning models break continuity |

### Satisfaction/Dissatisfaction Indicators

- **Dissatisfaction**: Intermittent failures without clear error taxonomy (#963)
- **Satisfaction**: Active community maintenance of documentation despite upstream abandonment (#962)
- **Neutral/Concern**: No maintainer engagement visible on any item in 24h window

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#963](https://github.com/moltis-org/moltis/issues/963) | 1 day | **Escalating** — runtime reliability bug with no workaround | Triage: reproduce, identify schema validation race condition |
| [#961](https://github.com/moltis-org/moltis/pull/961) | 1 day | Moderate — provider API compatibility | Code review, merge for DeepSeek V4 support |
| [#962](https://github.com/moltis-org/moltis/pull/962) | 1 day | Low — docs only | Review, low-risk merge |

**Maintainer attention gap**: All three items from 2026-05-03 show **zero maintainer comments or reactions**. With both PRs by the same contributor (penso), review bandwidth appears constrained. The undefined comment counts suggest possible API/data collection issues or genuinely silent review queue.

---

*Digest generated from github.com/moltis-org/moltis activity 2026-05-03 to 2026-05-04.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-04

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 32 issues and 16 PRs updated in the last 24 hours, indicating an engaged user base actively reporting problems and contributing fixes. The project is in a **stabilization phase** with no new releases, focusing on bug fixes and quality-of-life improvements rather than major feature drops. A notable pattern is the **bilingual community** (Chinese and English), with many issues requiring i18n-aware support. The high ratio of open items (21/32 issues, 11/16 PRs) suggests maintainers may be capacity-constrained, though several critical bugs received same-day attention. First-time contributors remain active, signaling healthy project accessibility.

---

## 2. Releases

**No new releases** — Version remains at **v1.1.5** (with PR #4012 closed for bumping to **1.1.6b1**, suggesting a beta release is imminent).

---

## 3. Project Progress

### Merged/Closed PRs (5 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#4013](https://github.com/agentscope-ai/QwenPaw/pull/4013) | xieyxclack | Documentation update to v1.1.5 | Docs sync |
| [#4012](https://github.com/agentscope-ai/QwenPaw/pull/4012) | xieyxclack | Version bump to 1.1.6b1 | Prepares next release |
| [#1642](https://github.com/agentscope-ai/QwenPaw/pull/1642) | xieyxclack | Add error code system | Better debugging UX |
| [#1055](https://github.com/agentscope-ai/QwenPaw/pull/1055) | ximiximi423 | **Add MiniMax as built-in provider** | New model provider support |
| [#559](https://github.com/agentscope-ai/QwenPaw/pull/559) | beiyu | Remove failed user messages from memory to prevent session poisoning | **Critical stability fix** — prevents corrupt sessions from persisting |

**Key advancement**: The MiniMax provider integration expands model options, while the session poisoning fix (#559) addresses a subtle but serious reliability issue where malformed inputs permanently corrupted agent memory.

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| # | Issue/PR | Comments | Topic | Underlying Need |
|:---|:---|:---:|:---|:---|
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) | Agent workspace isolation | **8** | Security/tenancy model | **Multi-tenant deployments** — users need configurable isolation boundaries between agents for production use |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | AudioContent in Telegram | **5** | Channel media support | Rich messaging platform parity; voice is critical for mobile-first users |
| [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) | `memory_search` crashes with AttributeError | **4** | Memory system reliability | Core memory functionality is fragile; users depend on RAG-like features |
| [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | `FunctionCallOutput` validation + config corruption | **3** | Tool call robustness | Production stability — config corruption is a data loss risk |
| [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Ollama context/history loss | **3** | Local model UX parity | Self-hosting users expect same quality as cloud APIs |

**Analysis**: The top issue (#3936) reveals an **architectural gap** — CoPaw's current "shared workspace" model assumes cooperative agents, but production users need **hard isolation guarantees** with configurable granularity (blacklist/whitelist directory access). This is a platform maturity signal.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| 🔴 **Critical** | [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | **UnifiedQueueManager kills active tasks after 600s idle timeout** — AI responses lost mid-generation | ❌ None |
| 🔴 **Critical** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | **HEARTBEAT.md breaks auto-reconnect** on network recovery — requires manual restart | ❌ None |
| 🟡 **High** | [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) | `memory_search` crashes: `'list' object has no attribute 'get'` | ❌ None |
| 🟡 **High** | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | `FunctionCallOutput` validation fails when `call_id` is None; `loop_config.json` corruption | ❌ None |
| 🟡 **High** | [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) | `embedding_model_config` reset to empty on every `qwenpaw update` — vector search breaks | ❌ None |
| 🟡 **High** | [#3019](https://github.com/agentscope-ai/QwenPaw/issues/3019) | Skill uninstall corrupts `skill.json` encoding (UTF-8) — prevents agent startup | ❌ None |
| 🟢 **Medium** | [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | Telegram voice messages unsupported (`AudioContent` pipeline gap) | ❌ None |
| 🟢 **Medium** | [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) | `context_check` splits user/assistant pairs, creating orphaned UI messages | ❌ None |

**Stability assessment**: Two **critical production risks** exist with no fixes in flight — the queue manager timeout bug (#3976) and HEARTBEAT.md reconnection failure (#4017). Both involve core infrastructure (task scheduling, network resilience). The embedding config reset (#4018) is a **regression risk** affecting every update.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| [#2430](https://github.com/agentscope-ai/QwenPaw/issues/2430) / [#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979) | **System tray / background service mode** | 🔥 **High** | Duplicate requests, Windows EXE users blocked, PR #3979 closed as duplicate suggests awareness |
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | Fallback model option | Medium | Reliability feature, aligns with production use cases |
| [#4002](https://github.com/agentscope-ai/QwenPaw/issues/4002) | Visual shared workspace (Artifact-style) | Medium | Differentiating UX, but complex frontend work |
| [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | Exclude heartbeat/cron from Auto-Memory | High | Simple filtering logic, clear user pain |
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | Enhanced memory lifecycle management | Medium | Architectural, needs design |
| [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) | Auto-derive `max_input_length` from model context | High | Correctness fix, reduces misconfiguration |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | Brazilian Portuguese (pt-BR) locale | 🔥 **High** | PR already open, ~46% translated |

**Prediction**: System tray mode and pt-BR localization are strongest near-term candidates. The visual workspace (#4002) represents a **strategic direction** toward Claude-like Artifact experiences.

---

## 7. User Feedback Summary

### Pain Points (Real Use Cases)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Windows desktop UX friction** | Close button kills service; no background operation | High |
| **Local model (Ollama) second-class experience** | Context loss, architecture mismatch, subprocess Rosetta issues (#3991, #4003) | High |
| **Configuration fragility** | Updates reset configs; embedding settings don't sync between UI and `agent.json` | High |
| **Memory system unpredictability** | `memory_search` fails silently, Auto-Memory pollutes with system noise | Medium |
| **Production reliability gaps** | No fallback models, no graceful degradation, timeout kills active work | High |
| **Channel-specific limitations** | Telegram audio, Feishu/WeChat lack interrupt capability | Medium |

### Satisfaction Signals
- Active skill ecosystem (users building and sharing skills)
- Strong multi-channel support (DingTalk, Feishu, QQ, Discord, iMessage, Telegram)
- Appreciation for Auto-Memory concept (when it works correctly)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#3928](https://github.com/agentscope-ai/QwenPaw/pull/3928) — Safe timeout for `delegate_external_agent` | ~6 days | **Infinite hang vulnerability** | Review/merge — first-time contributor, security fix |
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) — Volcengine provider | ~3 days | New provider, under review | Decision on provider expansion strategy |
| [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) — MemoryHook + bug fixes #3182, #3828 | ~2 days | **Fixes memory_search completely broken** | Priority review — fixes two reported bugs |
| [#4016](https://github.com/agentscope-ai/QwenPaw/pull/4016) — Resilient skill loading | ~1 day | Prevents startup crashes from skill corruption | Review for robustness |
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) — Agent isolation | ~5 days | **Security/architecture decision** | Design response needed — not a simple fix |

**Concern**: The memory system has **multiple intersecting bugs** (#3977, #3182, #3828, #4018, #4007) suggesting the subsystem needs focused refactoring. PR #4007 appears to be a comprehensive fix but requires careful review.

---

*Digest compiled from agentscope-ai/QwenPaw GitHub activity on 2026-05-03/04. All links: https://github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-04

## Today's Overview

ZeptoClaw saw **high-volume, low-engagement activity** in the past 24 hours: 22 PRs updated (19 merged/closed, 3 open) and 5 issues (4 open, 1 closed). The overwhelming majority of merged work was **automated dependency maintenance** (17 Dependabot PRs), indicating healthy CI/CD hygiene but minimal human-driven feature velocity. Three new open issues and their corresponding PRs reveal an **active research-to-implementation pipeline** around self-improving agent loops inspired by Hermes Agent. No releases were cut. The project appears stable but in a **consolidation phase**—cleaning up docs, landing deferred middleware work, and designing next-generation agent autonomy features.

---

## Releases

**No new releases.** The project remains without a recent tagged version.

---

## Project Progress

### Major Architectural Work Landed

| PR | Description | Link |
|---|---|---|
| **#564** | **Middleware framework + 11 implementations** (Phase 1 of #399) — additive landing of `Middleware` trait, `ToolMiddleware`, `PipelineContext`, `Pipeline`/`PipelineBuilder`, `Next`/`ToolNext` continuations, and 11 middleware implementations under `src/agent/middleware/`. Not yet wired into agent loop. Cherry-picked from abandoned #404. | [PR #564](https://github.com/qhkm/zeptoclaw/pull/564) |

This is **significant deferred infrastructure**: the middleware system enables cross-cutting concerns (logging, rate limiting, retry, auth, etc.) to be composed declaratively around tool execution. Landing it "additive only" suggests careful incremental integration to avoid destabilizing the agent loop.

### Documentation Alignment (2 PRs)

| PR | Description | Link |
|---|---|---|
| **#570** | Aligns README, Cargo metadata, `CLAUDE.md`, and `AGENTS.md` around "fast, small, secure, local-first assistant infrastructure"; softens unsupported competitor claims against Aisar, ZeptoStack, NemoClaw. Closes #565. | [PR #570](https://github.com/qhkm/zeptoclaw/pull/570) |
| **#566** | Refreshes `AGENTS.md` with corrected LOC count (~106k → ~154k), clarifies MQTT channel status (code present, feature parked pending `rumqttc` upstream fix), drops stale nextest blocker note. | [PR #566](https://github.com/qhkm/zeptoclaw/pull/566) |

### Dependency Maintenance (17 PRs — all merged)

Bulk automated updates across the stack:

| Category | Updates |
|---|---|
| **Rust crates** | tokio 1.50.0→1.51.1, lettre 0.11.20→0.11.21, libc 0.2.184→0.2.185, webpki-roots 1.0.6→1.0.7, zip 8.4.0→8.5.1 |
| **JavaScript/astro** | astro 6.0.8→6.1.6 (×2), @astrojs/starlight 0.38.2→0.38.3 (×2), vite 8.0.0→8.0.8 |
| **GitHub Actions** | taiki-e/install-action 2.75.10→2.75.17, EmbarkStudios/cargo-deny-action 2.0.16→2.0.17, softprops/action-gh-release 2.6.1→3.0.0, actions/upload-artifact 7.0.0→7.0.1 |
| **Docker** | debian:trixie-slim digest update |

All low-risk, maintenance-only. Notable: `softprops/action-gh-release` v3.0.0 is a **major version bump**—verify no breaking changes in release workflow before next tag.

---

## Community Hot Topics

### Active Design Discussions (New Issues, 0 comments each — research phase)

| Issue | Topic | Analysis |
|---|---|---|
| **[#567](https://github.com/qhkm/zeptoclaw/issues/567)** — `skill_manage` tool (CRUD on user skills) | **Phase 1 of Hermes-inspired self-improving loop**. Agent gains runtime ability to create/edit/patch/delete its own skills under `~/.zeptoclaw/skills/`. Currently skills are author-time only. | **Core need**: Reduce human-in-the-loop bottleneck for skill evolution. Enables agents to adapt to user patterns without code deploys. |
| **[#568](https://github.com/qhkm/zeptoclaw/issues/568)** — usage telemetry sidecar (`.usage.json`) | **Phase 2**: Per-skill usage tracking to feed self-improvement decisions. | **Core need**: Observability as prerequisite for intelligence. Without usage signals, no basis for pruning stale skills or promoting hot ones. |
| **[#569](https://github.com/qhkm/zeptoclaw/issues/569)** — trigger-phrase nudges in `longterm_memory` | **Phase 1.5**: Rewrite tool description with explicit "Use when / Do NOT use when" triggers, mirroring Hermes Agent's `memory_tool.py`. | **Core need**: Better prompt engineering for tool selection. LLMs often fail to invoke memory at correct moments; explicit triggers improve reliability without background agent complexity. |

**Underlying pattern**: A **three-phase adoption of Hermes Agent's self-improving loop** is being designed, not yet implemented. The research note "(research in chat 2026-05-03)" suggests rapid internal iteration. These issues were filed same-day as research, indicating active architectural planning.

### Open PRs Matching Issues

| PR | Matches | Status |
|---|---|---|
| [#571](https://github.com/qhkm/zeptoclaw/pull/571) | #569 (trigger phrases) | Open, ready for review |
| [#570](https://github.com/qhkm/zeptoclaw/pull/570) | #565 (positioning docs) | Open, ready for review |

---

## Bugs & Stability

**No bugs, crashes, or regressions reported today.** All closed issues/PRs were features, chores, or dependencies.

| Risk Item | Severity | Note |
|---|---|---|
| Middleware framework (#564) un-wired to agent loop | **Low** (by design) | 11 implementations present but inactive; safe to iterate |
| `rumqttc` upstream fix blocking MQTT channel feature | **Low** (known, documented) | Mentioned in #566; not a new regression |
| Major GH Action bump (`action-gh-release` v3) | **Info** | Monitor next release for workflow breakage |

---

## Feature Requests & Roadmap Signals

### Near-Term (Likely v-next or sooner)

| Feature | Evidence | Confidence |
|---|---|---|
| **Agent self-skill management** (#567) | Issue filed with detailed design; "Phase 1" framing suggests immediate priority | High |
| **Usage telemetry system** (#568) | Phase 2 dependency; blocked on #567 conceptually but may parallelize | Medium |
| **Memory trigger-phrase optimization** (#569/#571) | PR #571 already open with doc-test guard; small, self-contained | **Very High** |

### Medium-Term

| Feature | Evidence | Confidence |
|---|---|---|
| **Middleware framework integration** (#399) | Phase 1 landed (#564); Phase 2 will wire into agent loop | High |
| **Liquid AI (LFM) provider** (#541) | Closed 2026-05-03; may resurface if edge-native demand grows | Low-Medium |

### Predicted Next Version Focus

Based on open PRs and issue sequencing: **memory reliability improvements** (#571) plus **foundational self-improvement infrastructure** (#567-568). The Hermes loop adoption is being treated as a **coherent feature arc**, not isolated tickets.

---

## User Feedback Summary

**No direct user feedback captured today** — all issues/PRs are maintainer-authored (`qhkm`). However, inferred needs from design decisions:

| Inferred Pain Point | Evidence | Satisfaction Signal |
|---|---|---|
| Agent forgets to use memory appropriately | #569: explicit trigger phrases needed in tool description | Negative (being fixed) |
| Skill authoring bottleneck | #567: "Today, ZC skills are author-time only" | Negative (being addressed) |
| No visibility into skill utility | #568: "Without telemetry there is no signal for which skills are stale, hot, or never used" | Negative (being addressed) |
| Positioning confusion vs. competitors | #565/#570: "soften unsupported competitor claims" | Neutral (docs cleanup) |

**Overall**: The project is **self-aware about agent reliability gaps** and proactively designing for autonomy. No external user complaints visible; all work is anticipatory/quality-driven.

---

## Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| **#399** (middleware pipeline) | ~6 weeks since first PR (#404 2026-03-23) | **Moderate** | Phase 1 landed in #564; needs Phase 2 integration plan. No explicit Phase 2 issue/PR yet. |
| **#541** (Liquid AI provider) | Closed 2026-05-03 after 10 days open | Low | Closed without merge; may indicate prioritization shift or external blockers. Re-open if edge-native becomes strategic. |

**No stale critical issues requiring maintainer intervention.** The 4 open issues are all from 2026-05-03 and actively paired with PRs. Project backlog appears well-tended.

---

*Digest generated from GitHub activity 2026-05-03. All links: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-04

## Today's Overview

ZeroClaw shows **very high community velocity** with 50 issues and 50 PRs updated in the last 24 hours, though no new release was cut. The project is in an active development phase focused on three parallel tracks: **desktop app maturation** (macOS menu-bar app with Tauri), **voice conversation infrastructure** (full-duplex audio with barge-in), and **configuration system modernization** (schema v3 migration). Notably, 8 issues were closed against 42 remaining open, suggesting sustained triage but also growing backlog pressure. A significant cluster of 11 new issues/PRs from a single contributor (`theonlyhennygod`) indicates concentrated effort on desktop parity and distribution readiness.

---

## Releases

**No new releases** (v0.7.6 remains latest).

---

## Project Progress

### Merged/Closed PRs (22 total updated, key items)

| PR | Description | Impact |
|:---|:---|:---|
| [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) | Consolidates first-party skills into monorepo, defaults to compact mode | **Architectural**: Eliminates external registry dependency; reduces supply-chain risk |
| [#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) | Security fix: distinguishes `git -C` from `git -c` in shell policy | **Stability**: Resolves false-positive security blocks for legitimate git operations |
| [#5590](https://github.com/zeroclaw-labs/zeroclaw/pull/5590) | AI-assisted documentation audit and restructure (RFC #5576 Phases 2-3) | **Docs**: Completes major documentation modernization initiative |
| [#5589](https://github.com/zeroclaw-labs/zeroclaw/pull/5589) | Archives legacy documentation tree to `docs/legacy/` | **Docs**: Foundation for structured docs system |

### Advancing Features

- **Voice pipeline** ([PR #5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974), [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976), [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978)): Three stacked PRs by `hurtdidit` implementing WebSocket binary audio frames, energy-based VAD, and STT dispatch—progressing toward [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) full-duplex voice with barge-in. All marked `needs-author-action`, suggesting review feedback pending.

- **Desktop app** ([PR #5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265)): Menu-bar chat agent with voice and image upload remains open since April 3, now with extensive sub-issue tracking (#6338–#6343, #6349).

- **Provider fixes** ([PR #6314](https://github.com/zeroclaw-labs/zeroclaw/pull/6314)): Anthropic `base_url` config finally respected; [PR #6310](https://github.com/zeroclaw-labs/zeroclaw/pull/6310) adds Stepfun-intl endpoint separation.

---

## Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | 4 | Config.toml examples outdated for YOLO/local testing | **Onboarding friction**: New contributors can't follow docs to disable security for local dev |
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) / [#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) | 3 | Shell policy over-aggressive lowercase matching | **Security UX balance**: Policy must be strict but not break common workflows |
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) / [#6299](https://github.com/zeroclaw-labs/zeroclaw/pull/6299) | 3 | install.sh missing web dashboard assets | **Installation completeness**: Binary installs produce broken gateway experience |
| [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | 3 | Self-test hardcodes 127.0.0.1 ignoring config | **Config system trust**: Users can't verify their network bindings work |

### Analysis

The highest-engagement issues cluster around **"I followed the docs and it didn't work"**—a classic developer-experience failure mode. The rapid closure of #6149, #5809, #6096, and #6051 (all within 24h) shows responsive triage, but the *volume* of such issues suggests systemic doc-config drift. The community needs **config validation/doctor tooling** and **automated doc-to-code sync** more than individual fixes.

---

## Bugs & Stability

### Critical (P0-P1 / S1-S2)

| Issue | Severity | Status | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | S1 — WebSocket bypasses ApprovalManager | **OPEN**, needs-maintainer-review | ❌ No | **High**: Supervised mode silently broken for web users |
| [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | S1 — Fallback provider ignores `[providers.X]` config | **OPEN**, in-progress | [#6314](https://github.com/zeroclaw-labs/zeroclaw/pull/6314) partial | **Medium**: Provider resilience fails for non-env-var configs |
| [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | S2 — WhatsApp self-chat replies to wrong contacts | **OPEN**, 0 comments | ❌ No | **High**: Identity/privacy impact |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | S2 — WhatsApp LID contacts silently dropped | **OPEN**, 0 comments | ❌ No | **Medium**: Silent data loss |
| [#6348](https://github.com/zeroclaw-labs/zeroclaw/issues/6348) / [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) | S2 — Tool calls rendered as chat bubbles (web + desktop) | **OPEN**, 0 comments | ❌ No | **Medium**: UI/UX degradation |

### Regressions & Infrastructure

- [#6347](https://github.com/zeroclaw-labs/zeroclaw/issues/6347): Telegram channel tests fail under default features — indicates feature-gate drift in test suite.

**Assessment**: Two security-adjacent issues (#6207 approval bypass, #6351 wrong-contact replies) demand immediate maintainer attention. The WhatsApp channel appears undertested for edge cases in personal/business mode.

---

## Feature Requests & Roadmap Signals

### Likely v0.7.7 (Desktop Parity)

| Issue | Description | Confidence |
|:---|:---|:---|
| [#6343](https://github.com/zeroclaw-labs/zeroclaw/issues/6343) | Desktop app parity tracker | **High** — actively worked |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | Universal macOS binary | **High** |
| [#6338](https://github.com/zeroclaw-labs/zeroclaw/issues/6338) | Code-signing + notarization | **High** — blocks distribution |
| [#6341](https://github.com/zeroclaw-labs/zeroclaw/issues/6341) | Signed .dmg in releases | **High** |
| [#6342](https://github.com/zeroclaw-labs/zeroclaw/issues/6342) | `install.sh --desktop` flag | **Medium** |

### Likely v0.8.0 (Breaking: Config Schema v3)

| PR/Issue | Description | Confidence |
|:---|:---|:---|
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | Schema v3: channel aliasing, model-provider aliasing, profile lifting | **High** — explicit integration branch target |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | Per-channel reply throttling | **Medium** — fits config v3 model |
| [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) | Node health & management CLI | **Medium** — builds on #2991 |

### Voice (v0.8.x or later)

| Issue/PR | Description | Blocker |
|:---|:---|:---|
| [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) / [#5974-5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) | Full-duplex voice with barge-in | All three PRs need author action |

---

## User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Config system untrustworthy** | #6051 (self-test ignores config), #5803 (fallback ignores config), #6317 (dotted keys mangled) | **High** — fundamental to all deployments |
| **Installation incomplete** | #6096/#6299 (missing dashboard assets), #4704 (Pi OOM during build) | **Medium** — affects first-run success |
| **WhatsApp channel fragile** | #6350, #6351 (LID handling, self-chat) | **High** — production channel for many users |
| **WebSocket/daemon UI gaps** | #6207 (approval bypass), #6348 (tool call rendering) | **High** — supervised mode core value prop |
| **Documentation drift** | #6149 (examples wrong), #5934 (RFC tracking) | **Medium** — recurring, being addressed |

### Use Cases Emerging

- **Voice-first deployments**: Tavina.ai operator (#5896) driving full-duplex requirements
- **Multi-machine/node clusters**: #6346, #2991 suggesting enterprise/self-hosted scaling
- **Accessibility-conscious users**: #6337 (reduced motion), #6336 (VoiceOver) indicating maturity expectations

### Satisfaction Signals

- Rapid closure of well-scoped bugs (#6149, #6096, #5809)
- Active documentation investment (RFC #5576 completion)
- Responsive provider expansion (Stepfun-intl, Anthropic fixes)

---

## Backlog Watch

### Needs Maintainer Review (tagged or implied)

| Item | Age | Risk of Staleness |
|:---|:---|:---|
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) ApprovalManager bypass | 5 days | **Critical** — security feature non-functional |
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) Desktop menu-bar PR | ~1 month | **High** — large PR, blocking 10+ sub-issues |
| [#5974-5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) Voice pipeline (3 PRs) | ~2 weeks | **Medium** — `needs-author-action` may mask need for maintainer guidance |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) Config v3 migration | ~2 days | **Managed** — explicit integration branch, but "DO NOT MERGE YET" warns of coordination risk |

### Long-Unanswered

| Item | Age | Concern |
|:---|:---|:---|
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) Clipboard/drag-drop images in Web Chat | ~3 weeks | Low engagement despite natural UX expectation |
| [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) Raspberry Pi deployment guide | ~6 weeks | 3 👍, closed but solution (config profile) not documented |

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-03. ZeroClaw remains a high-velocity project with strong contributor engagement but accumulating coordination debt around large features (desktop, voice, config v3) and emerging channel reliability concerns.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*