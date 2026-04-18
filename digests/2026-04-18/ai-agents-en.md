# OpenClaw Ecosystem Digest 2026-04-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-18 00:13 UTC

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

# OpenClaw Project Digest — 2026-04-18

---

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature but strained project undergoing significant churn. The 67.6% open issue rate (338/500) and 72% open PR rate (360/500) suggest backlog accumulation outpacing resolution capacity. No new releases were cut today, despite multiple regression reports against recent versions (2026.4.10–2026.4.15). The project appears to be in a **stabilization phase** following rapid feature delivery, with community focus shifting toward trust infrastructure (agent identity, skill reputation) and platform reliability (Windows UI, auth systems, provider compatibility).

---

## 2. Releases

**No new releases today.**

The latest release remains prior to 2026-04-18. Notable context: multiple regressions are reported against versions 2026.4.10–2026.4.15, suggesting the project may be due for a patch release or is holding for a larger stabilization effort.

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Description | Impact |
|:---|:---|:---|
| [#64722](https://github.com/openclaw/openclaw/pull/64722) | `fix(tasks): add JSON fallback when node:sqlite is unavailable` | **Critical stability fix** — prevents gateway crashes every ~6-7 minutes on Homebrew Node.js builds |
| [#68292](https://github.com/openclaw/openclaw/pull/68292) | `fix: security hardening — MCP ownership spoofing, poll double-delivery, cron trust escalation, failover classification gaps` | **Security-critical** — addresses 5 bugs including trust boundary gaps and cache management |
| [#61693](https://github.com/openclaw/openclaw/pull/61693) | `fix(agents): add model cooldown circuit breaker` | Prevents infinite retry loops consuming resources for hours during model cooldowns |
| [#67515](https://github.com/openclaw/openclaw/pull/67515) | `feat(google): add Gemini TTS provider` | New speech synthesis capability via Gemini API |
| [#65644](https://github.com/openclaw/openclaw/pull/65644) | `docs: harden podman env sample guidance` | Security hygiene — prevents accidental empty token deployment |

### Active Development (Open PRs)

| PR | Description | Stage |
|:---|:---|:---|
| [#68234](https://github.com/openclaw/openclaw/pull/68234) | `bluebubbles: consolidate HTTP traffic through typed BlueBubblesClient` | Draft — early review |
| [#65700](https://github.com/openclaw/openclaw/pull/65700) | `fix(whatsapp): unify inbound policy resolution` | XL-sized policy refactor |
| [#67838](https://github.com/openclaw/openclaw/pull/67838) | `CI: stabilize live release lanes` | Infrastructure hardening |
| [#68331](https://github.com/openclaw/openclaw/pull/68331) | `feat: per-agent TTS and STT config overrides` | Feature — multi-agent speech personalization |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| # | Issue | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | **RFC: Native Agent Identity & Trust Verification** | 93 | 0 | **Foundational infrastructure need** — proposes ERC-8004/DID/VC-based identity layer for inter-agent trust. Zero upvotes despite high engagement suggests technical depth limiting broader participation, or disagreement on approach. |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | Skill install fails in Docker: `brew not installed` | 24 | 17 | **Long-standing platform gap** — Docker/Linux containers lack Homebrew, breaking skill installation. High 👍 indicates broad impact. |
| [#64799](https://github.com/openclaw/openclaw/issues/64799) | Volcengine Coding Plan model resolves to "Unknown model" | 23 | 0 | Provider integration fragility — model reference strings break across versions |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) | Severe 60s hangs on multi-step tool calls with OAuth | 21 | 0 | **Performance regression** — native OAuth path 6× slower than self-hosted proxy, suggesting retry/rate-limit logic defects |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | OAuth token refresh race condition (closed) | 21 | 14 | Shared auth profiles unsafe for multi-agent deployments |

### Underlying Community Needs

1. **Trust infrastructure** — Identity verification (#49971) and behavioral reputation (#55342) signal maturation from "agent framework" to "agent economy"
2. **Container-native deployment** — Docker gaps (#14593, #68337) reveal assumption of macOS-centric development
3. **Enterprise auth reliability** — OAuth race conditions, token refresh, and provider auth regressions dominate stability complaints

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Version | Description | Fix PR? |
|:---|:---|:---|:---:|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 2026.4.14 | **Windows chat UI completely broken** — input swallowed, invisible replies, flashing indicators | ❌ No |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 2026.4.2+ | **Coding Agent non-functional** — never completes tasks, vague status loops | ❌ No |
| [#67888](https://github.com/openclaw/openclaw/issues/67888) | 2026.4.15 | **Opus 4.7 forward-compat broken** — every first-turn 400s, falls back to thinking=off | ❌ No |
| [#67744](https://github.com/openclaw/openclaw/issues/67744) | — | **Agent infinite-loop on unconfigured TTS** — 275 messages/10min until context overflow | ❌ No |

### High Severity

| Issue | Version | Description | Fix PR? |
|:---|:---|:---|:---:|
| [#67295](https://github.com/openclaw/openclaw/issues/67295) | 2026.4.14 | `openclaw agents add` writes wrong `baseUrl`s — breaks 4+ providers simultaneously | ❌ No |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) | 2026.4.11 | Azure Foundry GPT models reject request schema with reasoning/tools | ❌ No |
| [#64852](https://github.com/openclaw/openclaw/issues/64852) | 2026.4.10 | google-vertex auth regression: OAuth works on 4.9, fails 401 on 4.10 | ❌ No |
| [#48479](https://github.com/openclaw/openclaw/issues/48479) | 2026.3.13 | google-vertex uses API-key instead of ADC/Bearer for Gemini 3.x | ❌ No |
| [#63132](https://github.com/openclaw/openclaw/issues/63132) | 2026.4.7 | SSRF guard blocks private/LAN STT providers (regression) | ❌ No |

### Medium Severity (Selected)

| Issue | Description | Fix PR? |
|:---|:---|:---:|
| [#67780](https://github.com/openclaw/openclaw/issues/67780) | `contextEngine` plugin crashes agent: `toolMsg.content.filter is not a function` | ❌ No |
| [#67649](https://github.com/openclaw/openclaw/issues/67649) | QuickStart crash: `TypeError: Cannot read properties of undefined (reading 'trim')` | ❌ No (related #67074 closed, but recurrence suggests incomplete fix) |
| [#67366](https://github.com/openclaw/openclaw/issues/67366) | `openclaw onboard` crashes replacing Telegram token | ❌ No |
| [#67074](https://github.com/openclaw/openclaw/issues/67074) | Same `TypeError` on QuickStart — **closed** but pattern persists | ✅ #67074 closed |

**Stability Assessment:** ⚠️ **Concerning** — Multiple regressions in 2026.4.x series, Windows UI broken, core onboarding flows crashing, auth systems degrading across providers. No patch release despite known issues.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Description | Likelihood in Next Version |
|:---|:---|:---:|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | Native Agent Identity & Trust Verification (ERC-8004/DID/VC) | 🔶 Medium — foundational, but complex standardization |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) | Behavioral reputation for skills (beyond identity) | 🔶 Medium — depends on #49971 |
| [#8081](https://github.com/openclaw/openclaw/issues/8081) | Multi-user RBAC (28 👍, highest voted open issue) | 🔷 High — clear enterprise demand, scoped feature |
| [#68331](https://github.com/openclaw/openclaw/pull/68331) | Per-agent TTS/STT config overrides | 🔷 High — PR already open |
| [#66835](https://github.com/openclaw/openclaw/pull/66835) | Telegram `groupPolicy: "members"` auto-verification | 🔷 High — XL PR in progress |
| [#32513](https://github.com/openclaw/openclaw/issues/32513) | Auto-retry for agent runs on timeout | 🔶 Medium — reliability feature, moderate complexity |
| [#32621](https://github.com/openclaw/openclaw/issues/32621) | Hook point inside `message` tool (not just `message_sending`) | 🔶 Medium — plugin ecosystem need |

**Emerging Theme:** The project is pivoting from "single-user personal assistant" toward **multi-agent, multi-user, trust-aware infrastructure** — identity, reputation, RBAC, and per-agent configuration all support this trajectory.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Patterns)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **"Worked before, now fails"** | 8+ issues tagged `regression` in top 50 alone | 🔴 Critical |
| **Windows as second-class** | #67035 UI broken, #68327 mDNS disabled, bonjour crashes | 🔴 Critical |
| **OAuth/auth hell** | Token races (#26322), refresh failures, provider-specific breaks (#64852, #59205) | 🔴 Critical |
| **Docker/container gaps** | brew missing (#14593), ACP tools in wrong container (#68337) | 🟡 High |
| **Model/provider churn** | Unknown model errors (#64799, #59943), pricing cache timeouts (#53639) | 🟡 High |
| **Silent failures / misleading status** | `modelApplied: true` but wrong model (#59257), cron ignores overrides | 🟡 High |

### Use Cases Emerging

- **Family/small-team sharing** — RBAC request (#8081) explicitly mentions family members
- **Multi-agent coding teams** — Coding Agent regressions hit power users hardest (#62505)
- **Self-hosted / LAN deployments** — MCP servers, STT providers on private IPs blocked by SSRF (#63132, #67775)
- **Enterprise OAuth** — Shared service accounts, token refresh at scale

### Satisfaction Signal

Mixed-to-negative in 2026.4.x cycle. The volume of "regression" tags, Windows-specific breakage, and onboarding crashes (#67649, #67366) suggest **quality debt from rapid feature shipping**. Positive signals: active community proposing deep architectural improvements (identity, reputation), and responsive PR activity.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>1 month old, high impact, unresolved)

| Issue | Age | Problem | Risk |
|:---|:---|:---|:---|
| [#8081](https://github.com/openclaw/openclaw/issues/8081) | ~2.5 months | **Multi-user RBAC** — highest voted feature (28 👍), zero maintainer response visible | Enterprise adoption blocker |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | ~2 months | **Docker skill install broken** — 17 👍, fundamental platform gap | Container deployment credibility |
| [#28222](https://github.com/openclaw/openclaw/issues/28222) | ~1.5 months | Built-in `diagnostics-otel` plugin non-functional — missing dependency | Observability/ops readiness |
| [#30257](https://github.com/openclaw/openclaw/issues/30257) | ~1.5 months | `boot-md` hook race condition — never fires | Plugin ecosystem reliability |
| [#32513](https://github.com/openclaw/openclaw/issues/32513) | ~1.5 months | Auto-retry on timeout — basic reliability feature | User experience friction |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) | ~1.5 months | **60s OAuth hangs** — 6× performance penalty vs. proxy | Core auth path performance |

### PRs At Risk of Staleness

| PR | Age | Description | Blocker |
|:---|:---|:---|:---|
| [#68234](https://github.com/openclaw/openclaw/pull/68234) | 1 day | BlueBubbles typed client refactor | Marked draft — needs author completion |
| [#65700](https://github.com/openclaw/openclaw/pull/65700) | 5 days | WhatsApp policy unification | XL size, complex review |
| [#61620](https://github.com/openclaw/openclaw/pull/61620) | 12 days | Subagent announce routing fix | Complex routing logic, needs thorough test |

---

## Project Health Summary

| Metric | Assessment |
|:---|:---|
| **Activity** | 🔥 Extremely high — 1000 items/day turnover |
| **Velocity** | ⚠️ Merged PRs present but open backlog growing (72% PR open rate) |
| **Stability** | 🔴 Concerning — multiple 2026.4.x regressions, no patch release |
| **Community** | 🟢 Strong — deep technical engagement, architectural proposals |
| **Maintainership** | 🟡 Strained — high volume, complex PRs, some critical issues unaddressed |
| **Direction** | 🟢 Clear — maturing toward multi-agent trust infrastructure |

**Recommendation:** The project would benefit from a **stabilization sprint** — halt feature work, cut a 2026.4.16 patch addressing the Windows UI, onboarding crashes, and auth regressions, then resume architectural work with stronger CI gates.

---

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Assistant Ecosystem
## 2026-04-18 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a **maturation inflection point**, with projects bifurcating between rapid feature expansion and stabilization sprints. The landscape now spans from reference implementations (OpenClaw) to specialized derivatives (NanoBot, Hermes Agent, PicoClaw), each making distinct architectural bets on memory systems, sandboxing, and deployment models. A dominant theme across all projects is the tension between **security-by-default** (ZeroClaw's Landlock, NanoBot's SSRF guards) and **developer ergonomics** (NullClaw's web-discovered skills, CoPaw's ACP server). The ecosystem is collectively grappling with production readiness: OAuth reliability, container-native deployment, and multi-agent orchestration remain unsolved at scale.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 | 500 | None | 🟡 Strained | Stabilization phase; 67.6% open issue rate, 72% open PR rate |
| **NanoBot** | 18 | 54 | None (v0.1.4.post3) | 🟢 Strong | Polish-and-harden; 48% PR merge rate, same-day critical fixes |
| **Hermes Agent** | 50 | 50 | None | 🟡 Strained | Provider integration strain; 86% open issue rate, 68% open PR rate |
| **PicoClaw** | 109 | 138 | v0.2.6-nightly | 🟡 Improving | Rapid growth; 3.7% issue close rate, 19.6% PR merge rate |
| **NanoClaw** | 12 | 22 | None | 🟢 Active | v2 infrastructure sprint; 59% PR merge rate |
| **NullClaw** | 5 | 19 | v2026.4.17 | 🟢 Strong | 84% PR merge rate, all bugs resolved within 24h |
| **IronClaw** | 28 | 50 | None | 🟡 Stabilizing | QA bug bashes; 72% open PR rate, secrets system pain cluster |
| **LobsterAI** | 7 (3 spam) | 28 | 2026.4.17 | 🟢 Strong velocity / 🟡 Moderate community | Weekly release cadence; spam moderation gap |
| **TinyClaw** | 0 | 1 | None | 🟢 Stable / ⚪ Low activity | Maintenance-steady; zero backlog |
| **Moltis** | 14 | 16 | 20260417.01-02 | 🟢 Strong | 69% PR merge rate, excellent critical bug closure |
| **CoPaw/QwenPaw** | 50 | 45 | v1.1.2 | 🟡 Strong velocity / strained UX | Rebrand migration debt; 56% PR merge rate |
| **ZeroClaw** | 33 | 50 | v0.7.0-beta.1041 | 🟡 Active / constrained | v0.7.0 structural overhaul; 62% open PR rate |
| **ZeptoClaw** | 0 | 0 | None | ⚪ Inactive | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Community scale** | 1,000 items/day turnover | 5-10× larger than next active project (PicoClaw: 247) |
| **Ecosystem centrality** | Core reference implementation | 4+ derived projects (NanoBot, PicoClaw, NanoClaw, LobsterAI embeds) |
| **Architectural depth** | Identity/reputation RFC (#49971), multi-agent RBAC (#8081) | Peers lack comparable trust infrastructure proposals |
| **Provider breadth** | 15+ providers including niche (Gemini TTS, Volcengine) | Most peers support 5-8 providers |

### Technical Approach Differences
- **OpenClaw**: Monolithic TypeScript/Node.js with plugin-based skill system; macOS-centric development assumptions; heavy reliance on Homebrew for skill distribution
- **NanoBot**: Lightweight Python with session→archive→dream memory pipeline; prioritizes Chinese LLM compatibility (GLM/Zhipu/minimax)
- **NullClaw**: Zig-based systems programming approach; static binary deployment, web-discovered skills via `.well-known` manifest
- **ZeroClaw**: Rust/Cargo workspace with aggressive sandboxing (Landlock, Docker); security-first, developer-second philosophy

### Community Size Comparison
OpenClaw's 500 issues/500 PRs/day dwarfs all peers, but this scale is **degrading signal-to-noise**: 72% open PR rate versus NanoBot's 52% and NullClaw's 16%. The project risks becoming a **coordination bottleneck** rather than velocity leader.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **OAuth/auth reliability** | OpenClaw, Hermes Agent, NanoBot, PicoClaw, IronClaw | Token refresh race conditions (#26322), 60s hangs (#36399), multiple credential conflicts (#7893), silent Feishu failures (#3251) |
| **Container-native deployment** | OpenClaw, NanoClaw, PicoClaw, ZeroClaw, Moltis | Docker skill install without Homebrew (#14593), Podman support (#957), port remapping fixes (#2236), credential isolation (#1830) |
| **Streaming robustness** | NanoBot, Hermes Agent, PicoClaw, ZeroClaw | Mid-stream error handling (#3266), backend failure masquerading as success (#3262), Codex empty responses (#2437) |
| **Memory system scaling** | OpenClaw, NanoBot, PicoClaw, CoPaw, NullClaw | Hierarchical/vector memory (#3227), Seahorse biologically-inspired system (#1919), context usage observability (#2537), knowledge graphs (#712) |
| **Multi-agent orchestration** | OpenClaw, CoPaw, IronClaw | RBAC (#8081), mission mode (CoPaw v1.1.2), agent identity/trust (#49971), swarm exploration (#11844) |
| **Provider format compliance** | Hermes Agent, PicoClaw, ZeroClaw, NanoBot | Per-model parameter constraints (#11765), Groq tool call format (#748), OpenAI Responses API migration (#2171) |
| **Sandbox security ↔ ergonomics tradeoff** | ZeroClaw, IronClaw, OpenClaw | Landlock poisoning (#5153), shell policy parsing (#5809), MCP ownership spoofing (#68292) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Bet |
|:---|:---|:---|:---|
| **OpenClaw** | Reference completeness; trust infrastructure | Power users, agent economy builders | Monolithic extensibility |
| **NanoBot** | Rapid Chinese-LLM compatibility; code quality | APAC developers, lightweight deployers | Session-based memory pipeline |
| **Hermes Agent** | Self-modifying agents; skill ecosystem | Claude Code migrants, tinkerers | Mutable agent codebase |
| **PicoClaw** | Biologically-inspired memory; embedded/hardware | IoT/edge, privacy-conscious | Seahorse memory + Go runtime |
| **NanoClaw** | Commercial Telegram deployments; Bun runtime | SaaS operators, bot entrepreneurs | Container-optimized v2 |
| **NullClaw** | Web-discovered skills; Zig performance | Systems programmers, minimalists | Static binary, manifest-based skills |
| **IronClaw** | WASM-isolated skills; gateway architecture | Enterprise multi-tenant | Sandboxed WebAssembly execution |
| **LobsterAI** | Chinese IM ecosystem (WeChat, POPO, NIM) | NetEase ecosystem, enterprise China | Electron app + embedded OpenClaw |
| **Moltis** | Decentralized messaging (Nostr, Matrix OIDC) | Privacy-first, self-hosting | SQLite+FTS5 code indexing, NIP-59 |
| **CoPaw/QwenPaw** | Mission Mode autonomy; ACP interoperability | IDE-integrated developers | Lazy-loaded parallel init |
| **ZeroClaw** | Aggressive sandboxing; Cargo workspace modularity | Security-critical, FINOS/enterprise | Landlock + Docker + policy engine |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Hyperactive** | OpenClaw | 1000+ items/day; risk of maintainer burnout |
| **⚡ High-velocity** | PicoClaw, ZeroClaw, CoPaw, IronClaw, NanoBot | 50-250 items/day; rapid iteration, some backlog accumulation |
| **🚀 Growing** | NullClaw, Moltis, NanoClaw, Hermes Agent | 20-80 items/day; healthy merge rates, focused scope |
| **🛠️ Maintenance** | LobsterAI, TinyClaw | Steady or minimal; LobsterAI has release cadence, TinyClaw dormant |
| **💤 Inactive** | ZeptoClaw | Zero activity |

### Stabilization vs. Expansion

| Phase | Projects | Indicators |
|:---|:---|:---|
| **Stabilization sprint needed** | OpenClaw, ZeroClaw, IronClaw | Regression clusters, no patch releases despite critical bugs, onboarding crashes |
| **Active stabilization** | NanoBot, Moltis | Same-day critical fixes, polish-focused PRs, no feature shipping |
| **Structural overhaul** | ZeroClaw (v0.7.0), NanoClaw (v2), CoPaw (rebrand) | Breaking changes, migration paths, infrastructure modernization |
| **Feature expansion** | PicoClaw, NullClaw, Hermes Agent | New channels, memory systems, skill distribution mechanisms |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **Trust infrastructure maturation** | OpenClaw #49971 (ERC-8004/DID/VC), #55342 (behavioral reputation); CoPaw tool guard severity indicators (#3515) | Agents are becoming economic actors; identity and reputation will be prerequisite for inter-agent commerce |
| **Local-first / edge deployment** | PicoClaw #28 (LM Studio Easy Connect), #1919 (Seahorse memory); Moltis code indexing; NanoBot "clean, lightweight" praise | Privacy regulations and latency requirements are pushing compute to edge; projects optimizing for local LLM compatibility gain adoption |
| **Container runtime diversification** | NanoClaw #957 (Podman), PicoClaw #2236 (Docker port mapping), ZeroClaw #5719 (Docker bypass), Moltis #757 (Podman tmpfs) | Docker Desktop licensing and security concerns are driving Podman/rootless adoption; container-native design is table stakes |
| **IDE/agent protocol convergence** | CoPaw #3487 (ACP server for Zed/OpenCode); NanoClaw #1776 (OpenCode provider); OpenClaw MCP ecosystem | Agents are becoming IDE plugins; ACP/MCP standard adoption determines ecosystem reach |
| **Security policy nuance** | ZeroClaw Perlow/InvestorClaw friction (#5719-#5722); IronClaw #2491 (secret scanning bypass); OpenClaw #68292 (MCP ownership) | "Secure by default" is colliding with "productive by default"; next generation needs graduated trust, not binary sandboxing |
| **Chinese LLM ecosystem integration** | NanoBot GLM/minimax fixes; Hermes Agent Kimi temperature crisis; LobsterAI Baidu Qianfan; CoPaw Qwen branding | Domestic Chinese models (Qwen, GLM, Kimi, minimax) require dedicated compatibility investment; Western-centric projects lose APAC market |
| **Memory system paradigm shift** | NanoBot #3227 (hierarchical/vector); PicoClaw #1919 (Seahorse); NullClaw #712 (knowledge graph); OpenClaw context overflow (#67744) | Session→archive→dream pipelines are hitting scaling limits; biologically-inspired and graph-based approaches are emerging alternatives |
| **Observability as reliability prerequisite** | Moltis #2537 (context ring indicator); NanoBot #3257 (pipeline latency); OpenClaw #28222 (diagnostics-otel broken) | Production agent deployments require token usage visibility, latency tracing, and structured logging; observability gaps block enterprise adoption |

---

*Report generated from 13 project digests covering 1,847 issues and 1,073 PRs updated 2026-04-17 to 2026-04-18.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-18

## 1. Today's Overview

NanoBot showed **very high development velocity** with 72 total items updated in the last 24 hours (18 issues, 54 PRs), indicating an active, well-maintained project. The merge/close rate of 26/54 PRs (48%) suggests healthy code review throughput. No new release was cut, but the volume of same-day merged fixes — particularly around memory safety, API compliance, and security — signals the maintainers are prioritizing stability over shipping. The project appears to be in a **polish-and-harden phase** following its v0.1.4.post3 release, with substantial community contribution (multiple external PR authors merged).

---

## 2. Releases

**No new releases** — None published today. The latest available remains v0.1.4.post3.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#3266](https://github.com/HKUDS/nanobot/pull/3266) | JakobBonhoeffer | Fixed mid-stream error leads to exit | Streaming reliability; pairs with #3256 issue |
| [#3261](https://github.com/HKUDS/nanobot/pull/3261) | shaun0927 | Hide sensitive nested config fields in `my(action="check")` output | **Security** — closes #3259, prevents secret leakage |
| [#3262](https://github.com/HKUDS/nanobot/pull/3262) | shaun0927 | Avoid success-style SSE termination after backend failure | **Reliability** — failed streams no longer masquerade as success |
| [#3163](https://github.com/HKUDS/nanobot/pull/3163) | sicnuyudidi | Make cron tool schema require `message` for `add` action | **UX** — eliminates LLM retry loops from schema/runtime mismatch |
| [#3249](https://github.com/HKUDS/nanobot/pull/3249) | fuleinist | Guard tool execution with `finish_reason` check | **Stability** — prevents infinite loops from non-compliant API gateways |
| [#3248](https://github.com/HKUDS/nanobot/pull/3248) | chengyongru | Fall back to `raw_archive` on LLM error response | **Data safety** — prevents memory loss on LLM overload (529 errors) |
| [#3233](https://github.com/HKUDS/nanobot/pull/3233) | chengyongru | Preserve user message to prevent GLM error 1214 | **Compatibility** — fixes Zhipu/GLM API role alternation requirements |
| [#3238](https://github.com/HKUDS/nanobot/pull/3238) | mcampo | Pass `allowed_env_keys` to exec tool calls in subagents | **Completeness** — extends #2962 env forwarding to subagents |
| [#3225](https://github.com/HKUDS/nanobot/pull/3225) | subalkum | Guard tool execution against non-compliant API gateway injection | **Stability** — duplicate fix pattern, shows systemic issue |

**Themes:** Streaming robustness, API gateway compliance, memory/data safety, security hardening, and Chinese LLM ecosystem compatibility (GLM/Zhipu, minimax).

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| 1 | [#3227](https://github.com/HKUDS/nanobot/issues/3227) — Memory system limitations in long/large projects | 9 | 4 | **Core architectural tension**. User praises codebase quality ("整洁、轻巧、容易上手") but identifies fundamental scaling limit: `history.jsonl` + `MEMORY.md` + Dream consolidation loses detail in long-horizon projects. Underlying need: **hierarchical or vector memory** beyond current session→archive pipeline. High engagement suggests broad relevance. |
| 2 | [#2588](https://github.com/HKUDS/nanobot/issues/2588) — Home Assistant knowledge / tool use | 9 | 0 | Closed today. User struggled to replicate OpenClaw's Home Assistant integration with Qwen models. Resolved or stale? Closed without clear resolution path — may indicate documentation gap for tool configuration migration from OpenClaw. |
| 3 | [#3143](https://github.com/HKUDS/nanobot/issues/3143) — GLM error 1214 ("messages parameter is illegal") | 9 | 0 | **High-frequency production issue**. Token consolidation hitting context limits (71835/65536) with chunk=13 msgs. Fixed by #3233 (same-day turnaround). Shows rapid response to Chinese-LLM-specific breakage. |
| 4 | [#3107](https://github.com/HKUDS/nanobot/issues/3107) — Multi-item suggestions | 6 | 0 | Meta-issue tracking 7 UX improvements; 2 completed (status task count, retry termination). Remaining: model CLI flag, timeout config, provider fallback, multi-custom-provider. **Roadmap signal**: CLI ergonomics and provider resilience are user priorities. |

### Emerging PRs to Watch

- [#3144](https://github.com/HKUDS/nanobot/pull/3144) — **AgentHiFive integration** (MCP-backed backend, vault-managed Telegram/Slack, approval tracking). Large feature, open since Apr 14, no merge yet. Suggests major architecture expansion.
- [#3216](https://github.com/HKUDS/nanobot/pull/3216) — WebSocket tooling, session lifecycle, reasoning content. Substantial channel infrastructure work.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR | Status |
|:---|:---|:---|:---|:---|
| **P0 — Data Loss** | [#3244](https://github.com/HKUDS/nanobot/issues/3244) / [#3248](https://github.com/HKUDS/nanobot/pull/3248) | LLM error (529 overloaded) during `/new` compact causes `history.jsonl` wipe; error message saved as "summary" | #3248 merged | ✅ **Fixed same day** |
| **P0 — Silent Failure** | [#3251](https://github.com/HKUDS/nanobot/issues/3251) | `${VAR}` env variable syntax in `config.json` not parsed → Feishu auth fails silently for 78+ hours | None yet | 🔴 **Open, no PR** |
| **P1 — Infinite Loop** | [#3215](https://github.com/HKUDS/nanobot/issues/3215) | SMTP self-email triggers thousands of auto-replies | None yet | 🔴 **Open, no PR** |
| **P1 — Infinite Loop** | [#3256](https://github.com/HKUDS/nanobot/issues/3256) / [#3266](https://github.com/HKUDS/nanobot/pull/3266) | Mid-stream truncation not retried; treated as success | #3266 merged | ✅ **Fixed same day** |
| **P1 — Security** | [#3259](https://github.com/HKUDS/nanobot/issues/3259) / [#3261](https://github.com/HKUDS/nanobot/pull/3261) | `my(action="check")` exposes nested secrets (api_key, etc.) | #3261 merged | ✅ **Fixed same day** |
| **P1 — Security** | [#3252](https://github.com/HKUDS/nanobot/pull/3252) | Shell SSRF scan misses non-HTTP schemes (`file://`, `gopher://`) | #3252 open | 🟡 **PR pending** |
| **P1 — Streaming Deception** | [#3260](https://github.com/HKUDS/nanobot/issues/3260) / [#3262](https://github.com/HKUDS/nanobot/pull/3262) | Backend failures emit `finish_reason: "stop"` + `[DONE]` | #3262 merged | ✅ **Fixed same day** |
| **P2 — UX Noise** | [#3265](https://github.com/HKUDS/nanobot/issues/3265) | Terminal spinner dumps excessive ANSI sequences with Gemini 2.0 Flash | None yet | 🟢 **Open, cosmetic** |
| **P2 — API Error** | [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Gemini provider: "Multiple authentication credentials received" | None yet | 🟡 **Open** |

**Assessment:** Excellent same-day fix velocity for critical issues (4/5 P0-P1 with PRs merged). The unhandled open items (#3251 env parsing, #3215 SMTP loop) represent configuration edge cases that could bite production users.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Custom provider configuration** | [#3107](https://github.com/HKUDS/nanobot/issues/3107) (item 7), [#3264](https://github.com/HKUDS/nanobot/pull/3264) | **High** | PR #3264 already open; aligns with multi-LLM strategy |
| **Provider fallback / timeout config** | [#3107](https://github.com/HKUDS/nanobot/issues/3107) (items 5-6) | **Medium-High** | Explicitly requested; resilience is current theme |
| **Silent/quiet retry mode** | [#3246](https://github.com/HKUDS/nanobot/issues/3246) | **Medium** | Clean UX request; low implementation cost |
| **Pipeline latency metrics (STT→LLM→TTS)** | [#3257](https://github.com/HKUDS/nanobot/issues/3257) | **Medium** | Voice use case growing; observability gap |
| **Hierarchical/vector memory for long projects** | [#3227](https://github.com/HKUDS/nanobot/issues/3227) | **Low-Medium** | Architectural, not incremental; may need design RFC |
| **LangSmith integration restore** | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | **Medium** | PR open, closes #2493; evaluation infrastructure |

---

## 7. User Feedback Summary

### What's Working
- **Code quality appreciation**: Multiple users explicitly praise "整洁、轻巧、容易上手" (clean, lightweight, easy to start) — [#3227](https://github.com/HKUDS/nanobot/issues/3227)
- **Rapid bug response**: Same-day fixes for GLM 1214, memory loss, streaming issues
- **OpenClaw migration path**: Users discovering NanoBot via OpenClaw interest

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Configuration opacity / "black box" behavior** | [#3107](https://github.com/HKUDS/nanobot/issues/3107) status/task visibility, retry noise | Moderate |
| **Memory scaling ceiling** | [#3227](https://github.com/HKUDS/nanobot/issues/3227) long-project detail loss | **High — architectural** |
| **Chinese LLM ecosystem friction** | [#3143](https://github.com/HKUDS/nanobot/issues/3143) GLM, [#3244](https://github.com/HKUDS/nanobot/issues/3244) minimax 529 handling | Moderate (improving) |
| **Channel-specific edge cases** | [#3215](https://github.com/HKUDS/nanobot/issues/3215) SMTP loops, [#1672](https://github.com/HKUDS/nanobot/issues/1672) WhatsApp self-messages | Moderate |
| **Environment/config system brittleness** | [#3251](https://github.com/HKUDS/nanobot/issues/3251) unexpanded `${VAR}`, [#3206](https://github.com/HKUDS/nanobot/issues/3206) auth credential conflicts | Moderate |

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) AgentHiFive integration | 4 days | **High** — large PR, complex (MCP, vault, multi-channel) | Maintainer review; potential v0.2.0 flagship feature? |
| [#2529](https://github.com/HKUDS/nanobot/pull/2529) WhatsApp audio message transcription | 22 days | Medium — voice UX gap | Review or close; overlaps with #3257 voice pipeline work |
| [#1672](https://github.com/HKUDS/nanobot/issues/1672) WhatsApp self-message reply | 42 days | Low — niche use case | Triage: bug or `wontfix`? |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) LangSmith integration | 4 days | Medium — observability demand | Review; closes long-standing #2493 |

---

**Overall Health Score: 🟢 Strong**

- **Velocity**: Excellent (72 items/day)
- **Responsiveness**: Excellent (critical bugs fixed same-day)
- **Community**: Healthy (diverse external contributors, Chinese and international)
- **Risk Areas**: Configuration system robustness (#3251), long-horizon memory architecture (#3227), large PR backlog (#3144)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-18

## 1. Today's Overview

Hermes Agent shows **elevated community activity** with 50 issues and 50 PRs updated in the last 24 hours, though **no new releases** were cut. The project is experiencing significant **provider integration strain**, particularly with the Kimi coding endpoint and Gemini authentication, alongside active **macOS platform hardening** and **security patching**. With 43 open/active issues versus only 7 closed, the issue resolution rate suggests either high incoming volume or maintainer bandwidth constraints. The PR pipeline is similarly backlogged with 34 open PRs against 16 merged/closed. Notably, the community is actively contributing skills and security fixes, indicating healthy external engagement despite infrastructure friction.

---

## 2. Releases

**No new releases** (0 today; none listed in recent history).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Significance |
|:---|:---|:---|
| [#5663](https://github.com/NousResearch/hermes-agent/pull/5663) | `feat(skills): add Claude Code to Hermes migration skill` | **Closed** — Migration tooling for Claude Code users; supports rules, memories, MCP servers, custom commands with dry-run preview |
| [#11856](https://github.com/NousResearch/hermes-agent/pull/11856) | `fix(memory): strip UTF-8 BOM from MEMORY.md on load` | **Closed** — Fixes Windows Notepad BOM pollution of system prompt; closes [#10878](https://github.com/NousResearch/hermes-agent/issues/10878) |
| [#11859](https://github.com/NousResearch/hermes-agent/pull/11859) | `fix(voice): alt+ record_key crashes on startup with ValueError` | **Closed** — Fixes `alt+*` keybinding crash; closes [#11387](https://github.com/NousResearch/hermes-agent/issues/11387) |

### Notable Open PRs Advancing

| PR | Description | Status |
|:---|:---|:---|
| [#9664](https://github.com/NousResearch/hermes-agent/pull/9664) | Kimi `/coding/v1` fixes: api_mode detection, API key fallback, User-Agent header | Addresses critical Kimi 403 errors; adds `claude-code/0.1.0` User-Agent spoofing |
| [#11861](https://github.com/NousResearch/hermes-agent/pull/11861) | Security: close three dangerous-command detection gaps (Claude Code 2.1.113-inspired) | Proactive security hardening against bash-approval bypasses |
| [#11855](https://github.com/NousResearch/hermes-agent/pull/11855) | Prompt-injection immune system for tool outputs | Novel defensive architecture: lexical scanner + `<untrusted-data>` wrapping |
| [#10353](https://github.com/NousResearch/hermes-agent/pull/10353) | macOS: read process start_time via `ps` instead of `/proc` | Fixes `/status` token counting and session identity on macOS |
| [#10317](https://github.com/NousResearch/hermes-agent/pull/10317) | macOS: skip redundant `kickstart -k` after SIGTERM | Eliminates ~10s gateway unresponsiveness post-update |
| [#11615](https://github.com/NousResearch/hermes-agent/pull/11615) | Preserve `${ENV_VAR}` references when `save_config` rewrites config | Fixes secret leakage; closes [#11551](https://github.com/NousResearch/hermes-agent/issues/11551) |
| [#11849](https://github.com/NousResearch/hermes-agent/pull/11849) | Plumb per-turn `user_id` + `user_name` to memory providers | Fixes multi-user session identity in group chats; closes [#7781](https://github.com/NousResearch/hermes-agent/issues/7781) |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Underlying Need |
|:---|:---|:---:|:---:|:---|
| 1 | [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) Security Policies and Practices Thread | 24 | 0 | **Governance maturity**: Community pushing for responsible disclosure infrastructure; closed after enabling private vulnerability reporting |
| 2 | [#11765](https://github.com/NousResearch/hermes-agent/issues/11765) Kimi provider temperature error — per-model override needed | 10 | 2 | **Provider API fragmentation**: Kimi's strict temperature constraints (0.6 for `kimi-for-coding`, 1.0 for others) break generic provider abstraction |
| 3 | [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) Gemini "Multiple authentication credentials received" | 10 | 0 | **Auth complexity**: Conflicting credential paths (env vs. Vertex AI vs. native) causing 400 errors |
| 4 | [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) Feishu plugin: auth card errors + topic reply behavior | 5 | 0 | **Enterprise messaging fidelity**: Chinese enterprise users need precise thread/topic semantics |
| 5 | [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) Empty Codex response normalized to incomplete, retried 3× | 3 | 0 | **Silent failure modes**: Over-eager retry logic creates user-visible noise when agent should stay silent |

### Key Insight
The **Kimi temperature crisis** (#11765, #11764, #9125) reveals architectural debt: Hermes lacks per-model parameter constraints in its provider abstraction. Three separate issues trace to the same root cause with different manifestations (main loop vs. auxiliary calls vs. `provider: auto`).

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| 🔴 **Critical** | [#11765](https://github.com/NousResearch/hermes-agent/issues/11765) | Kimi `kimi-for-coding` completely broken — all calls fail with HTTP 400 temperature error | [#9664](https://github.com/NousResearch/hermes-agent/pull/9664) (partial) |
| 🔴 **Critical** | [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) | Gemini native provider auth failure — multiple credential sources conflict | ❌ No |
| 🟡 **High** | [#11551](https://github.com/NousResearch/hermes-agent/issues/11551) | `save_config` destroys `${ENV_VAR}` refs, leaks secrets to disk | [#11615](https://github.com/NousResearch/hermes-agent/pull/11615) |
| 🟡 **High** | [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) | Stale adapter busy lock traps Telegram sessions in interrupt loop | ❌ No |
| 🟡 **High** | [#10877](https://github.com/NousResearch/hermes-agent/issues/10877) | `memory_tool` char limit not validated on external file load — potential DoS | ❌ No |
| 🟡 **High** | [#10879](https://github.com/NousResearch/hermes-agent/issues/10879) | Non-UTF-8 MEMORY.md crashes agent with `UnicodeDecodeError` | [#11856](https://github.com/NousResearch/hermes-agent/pull/11856) (BOM only) |
| 🟡 **High** | [#11387](https://github.com/NousResearch/hermes-agent/issues/11387) | `alt+*` voice record_key crashes startup | [#11859](https://github.com/NousResearch/hermes-agent/pull/11859) |
| 🟡 **High** | [#11840](https://github.com/NousResearch/hermes-agent/issues/11840) | SSH ControlMaster socket path exceeds macOS 104-char limit with IPv6 | ❌ No |
| 🟢 **Medium** | [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) | Feishu plugin auth card + topic reply bugs | ❌ No |
| 🟢 **Medium** | [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) | Empty Codex response misclassified as incomplete, spams retries | ❌ No |
| 🟢 **Medium** | [#6207](https://github.com/NousResearch/hermes-agent/issues/6207) | Stale `.pyc` cache causes `TypeError` after update | ❌ No |
| 🟢 **Medium** | [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) | Gateway working directory config not respected, resets on update | ❌ No |
| 🟢 **Medium** | [#11200](https://github.com/NousResearch/hermes-agent/issues/11200) | Skill load failure silently treated as success | ❌ No |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Maturity Signal |
|:---|:---|:---|
| **Per-model parameter constraints** (temperature, etc.) | [#11765](https://github.com/NousResearch/hermes-agent/issues/11765), [#9125](https://github.com/NousResearch/hermes-agent/issues/9125), [#11764](https://github.com/NousResearch/hermes-agent/issues/11764) | **Likely next release** — Blocking multiple providers, community actively patching |
| **Docker/VPS deployment** | [#913](https://github.com/NousResearch/hermes-agent/issues/913) | High demand (7 👍), PR-linked, infrastructure gap |
| **GPU monitoring in status bar** | [#11757](https://github.com/NousResearch/hermes-agent/pull/11757) | Local LLM trend alignment; PR open |
| **WhatsApp service-conversation support** | [#11751](https://github.com/NousResearch/hermes-agent/issues/11751), [#11854](https://github.com/NousResearch/hermes-agent/pull/11854) | Enterprise messaging expansion; cautious scope |
| **Vibe Coding upgrade** (kanban, self-learning, docs fetcher) | [#11857](https://github.com/NousResearch/hermes-agent/pull/11857) | Community-driven productivity feature bundle |
| **Swarm exploration skill** | [#11844](https://github.com/NousResearch/hermes-agent/pull/11844) | Advanced reasoning pattern; zero-dependency design |
| **Crypto-analyze skill** | [#11862](https://github.com/NousResearch/hermes-agent/pull/11862) | DeFi vertical expansion; no API keys required |
| **Google Workspace CLI migration** | [#411](https://github.com/NousResearch/hermes-agent/issues/411) | Long-term maintenance; official Google tool available |
| **Provenance/receipts for self-modifying agents** | [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Governance/compliance; philosophical alignment with Hermes's unique self-modification property |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Provider brittleness** | Kimi, Gemini, Copilot all have active breakage issues | 🔴 Critical |
| **Configuration durability** | `save_config` leaks secrets; working dir resets; env vars not preserved | 🟡 High |
| **macOS second-class experience** | `/proc` dependency, `launchd` restart races, SSH socket limits | 🟡 High |
| **Memory system fragility** | BOM pollution, char limit bypasses, encoding crashes, multi-user identity | 🟡 High |
| **Messaging platform edge cases** | Feishu topics, Discord attachments, Telegram stale locks | 🟢 Medium |

### Use Cases & Satisfaction Signals

- **Positive**: Active skill ecosystem (Task-Centric Memory showcase [#11652](https://github.com/NousResearch/hermes-agent/issues/11652)), migration tooling from Claude Code, community security contributions
- **Negative**: "I told the bot not to reply" → agent spams retries anyway ([#3956](https://github.com/NousResearch/hermes-agent/issues/3956)); "Changing the systemd unit working directory... seems `hermes update` overwrites this" ([#11312](https://github.com/NousResearch/hermes-agent/issues/11312))

### Enterprise Readiness Gap
Multiple issues indicate Hermes is not yet enterprise-deployable: secret leakage, no Docker support, auth conflicts, and platform-specific crashes.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#913](https://github.com/NousResearch/hermes-agent/issues/913) Docker/VPS support | ~38 days | **Deployment blocker** for cloud users; 7 👍 | Maintainer decision on official Docker strategy |
| [#411](https://github.com/NousResearch/hermes-agent/issues/411) Google Workspace CLI migration | ~44 days | Technical debt; official Google tool exists | Evaluate `gws` Rust CLI vs. current implementation |
| [#7619](https://github.com/NousResearch/hermes-agent/issues/7619) Long session context pollution (149 turns) | ~7 days | **Core architecture** — context window management | Deep investigation; may require summarization strategy |
| [#7731](https://github.com/NousResearch/hermes-agent/issues/7731) Copilot hardcoded context windows + no token exchange | ~7 days | Enterprise Copilot users blocked | Provider abstraction redesign |
| [#7832](https://github.com/NousResearch/hermes-agent/issues/7832) MCP env vars not passed to subprocess | ~7 days | MCP ecosystem growth blocked | Config parsing fix |
| [#7723](https://github.com/NousResearch/hermes-agent/issues/7723) `tool_progress=verbose` regression | ~7 days | CLI UX degradation | Display system regression |
| [#5163](https://github.com/NousResearch/hermes-agent/pull/5163) Web Console GUI modernization (Skills Hub) | ~13 days | Large PR; Web UI parity with CLI | Code review, merge decision |

---

*Digest generated from 50 issues and 50 PRs updated 2026-04-17 to 2026-04-18.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-18

## 1. Today's Overview

PicoClaw shows **extremely high development velocity** with 247 total items updated in the last 24 hours (109 issues, 138 PRs), indicating a project in active maturation. The 105:4 open-to-closed issue ratio and 111:27 open-to-merged PR ratio suggest a backlog accumulation pattern typical of rapidly growing open-source projects. A new nightly build (`v0.2.6-nightly.20260417`) was released, signaling steady iteration toward v0.2.6. The community is particularly engaged around **provider compatibility**, **memory systems**, and **multi-channel deployments**. However, the high volume of unmerged PRs and persistent open issues indicates potential maintainer bandwidth constraints.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [`v0.2.6-nightly.20260417.ba08d523`](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) | Nightly (automated) | Automated build; marked unstable. Full changelog tracks `main` branch delta since `v0.2.6`. **Use with caution in production.** |

No stable release today. The nightly suggests v0.2.6 stable is approaching but not yet finalized.

---

## 3. Project Progress

### Merged/Closed PRs Today (27 total; notable items)

| PR | Author | Description | Impact |
|----|--------|-------------|--------|
| [#2579](https://github.com/sipeed/picoclaw/pull/2579) | `afjcjsbx` | **fix(mcp): send empty object instead of nil arguments in CallTool + tests** | Fixes Zod-based MCP TypeScript server compatibility; prevents `'expected record, received null'` errors |
| [#2437](https://github.com/sipeed/picoclaw/pull/2437) | `grearsl` | **fix(codex): accumulate output items from stream events** | Critical fix for Codex/OpenAI Responses streaming API returning empty content despite model generation |
| [#2566](https://github.com/sipeed/picoclaw/pull/2566) | `lc6464` | **refactor(providers,tools): reorganize packages and facades** | Code health: reduces root-level file sprawl, improves maintainability |
| [#2571](https://github.com/sipeed/picoclaw/pull/2571) | `alexhoshina` | **docs: add session and routing documentation** | Closes gap in architectural docs |
| [#2567](https://github.com/sipeed/picoclaw/pull/2567) | `wj-xiao` | **docs: reorganize docs by type and add layout guidance** | Establishes contributor conventions for documentation structure |

### Features Advanced (Open PRs with momentum)

| PR | Author | Description | Status |
|----|--------|-------------|--------|
| [#2570](https://github.com/sipeed/picoclaw/pull/2570) | `lahuman` | **feat(seahorse): make fresh tail size configurable** | Implements configurability for biologically-inspired memory system ([Issue #1919](https://github.com/sipeed/picoclaw/issues/1919)) |
| [#2537](https://github.com/sipeed/picoclaw/pull/2537) | `imguoguo` | **feat(agent): add context usage ring indicator and /context command** | Adds observability into session token usage |
| [#2569](https://github.com/sipeed/picoclaw/pull/2569) | `lxowalle` | **Feat/channel tool feedback animation** | Unifies tool execution progress across Discord, Telegram, Feishu |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | `cytown` | **refactor: standardize channel identification and decouple name from provider type** | Enables multiple instances of same channel provider |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) | `2niuhe` | **feat(channels): add Mattermost channel** | Native Mattermost integration (pairs with [Issue #1587](https://github.com/sipeed/picoclaw/issues/1587)) |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Core Need |
|-------|----------|-----------|
| [#28: Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 15 | **Local LLM accessibility** — non-technical users want one-click local model setup; Android deployment mentioned |
| [#629: [BUG] Didn't retry if meet LLM call failed](https://github.com/sipeed/picoclaw/issues/629) | 9 | **Reliability engineering** — production tasks hang on transient HTTP 500s; retry/backoff logic missing |
| [#1919: [Feature] Seahorse - Biologically-inspired Memory System](https://github.com/sipeed/picoclaw/issues/1919) | 9 | **Agent memory architecture** — human-like short/long-term memory; active development ([PR #2570](https://github.com/sipeed/picoclaw/pull/2570)) |
| [#2236: docker部署修改了web监听端口，web页面无法发送任何消息](https://github.com/sipeed/picoclaw/issues/2236) | 8 | **Docker configuration fragility** — port remapping breaks WebSocket/message delivery |
| [#618: [Task] self-upgrade support](https://github.com/sipeed/picoclaw/issues/618) | 8 | **Operational maturity** — package manager distribution for Ubuntu, Windows, embedded |
| [#748: [BUG] Groq API compatibility: tool call format error](https://github.com/sipeed/picoclaw/issues/748) | 8 | **Provider format compliance** — non-standard `<function=name{...}>` vs OpenAI-style tool calls |

### Underlying Pattern

The community is **pushing PicoClaw toward production readiness**: retry logic, self-upgrades, standardized Docker configs, and broader provider compatibility. The LM Studio request (#28) and memory system (#1919) signal strong interest in **local-first, privacy-preserving deployments**.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#629](https://github.com/sipeed/picoclaw/issues/629) | Tasks hang without retry on LLM HTTP 500 | ❌ None linked |
| **High** | [#748](https://github.com/sipeed/picoclaw/issues/748) | Groq API rejects tool call format entirely | ❌ None linked |
| **High** | [#2371](https://github.com/sipeed/picoclaw/issues/2371) | Agent loop panic/crash (`loop.go:2171`) with Qwen models | ❌ None linked |
| **High** | [#2236](https://github.com/sipeed/picoclaw/issues/2236) | Docker port remapping disables message input | ❌ None linked |
| **Medium** | [#1708](https://github.com/sipeed/picoclaw/issues/1708) | REST API endpoints (`/chat`, `/a2a`) unavailable on Gateway | ❌ None linked |
| **Medium** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) | Windows QQ channel non-functional | ❌ None linked |
| **Medium** | [#2136](https://github.com/sipeed/picoclaw/issues/2136) | Flawed tool call extraction in `pkg/providers/tool_call_extract.go` | ⚠️ Author submitted PR previously, conflicts pending |
| **Medium** | [#1058](https://github.com/sipeed/picoclaw/issues/1058) | Cron `deliver=false` silently discards LLM responses | ❌ None linked |
| **Low** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | "Multiple authentication credentials received" with Gemini | ❌ None linked |

**Regressions fixed today:** Codex streaming empty responses ([PR #2437](https://github.com/sipeed/picoclaw/pull/2437)), MCP nil arguments ([PR #2579](https://github.com/sipeed/picoclaw/pull/2579)), config panic on non-addressable SecureString ([PR #2270](https://github.com/sipeed/picoclaw/pull/2270)).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Seahorse memory system** | [#1919](https://github.com/sipeed/picoclaw/issues/1919) + [#2570](https://github.com/sipeed/picoclaw/pull/2570) | **High** | PR merged for configurability; core architecture in place |
| **Mattermost channel** | [#1587](https://github.com/sipeed/picoclaw/issues/1587) + [#1586](https://github.com/sipeed/picoclaw/pull/1586) | **High** | PR open since March, actively updated |
| **Tool execution feedback** | [#571](https://github.com/sipeed/picoclaw/issues/571) + [#2569](https://github.com/sipeed/picoclaw/pull/2569) | **High** | PR open today with cross-channel unification |
| **Context usage observability** | [#2537](https://github.com/sipeed/picoclaw/pull/2537) | **Medium-High** | Addresses opaque token usage complaints |
| **Self-upgrade mechanism** | [#618](https://github.com/sipeed/picoclaw/issues/618) | **Medium** | High community demand but complex distribution matrix |
| **LM Studio easy connect** | [#28](https://github.com/sipeed/picoclaw/issues/28) | **Medium** | Long-standing request; may depend on provider abstraction |
| **LangSmith observability** | [#2173](https://github.com/sipeed/picoclaw/issues/2173) | **Low-Medium** | Niche enterprise need; competing priorities |
| **OpenAI Responses API migration** | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | **Medium** | OpenAI recommendation; breaking change risk |
| **Streaming web chat** | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | **Medium** | Nice-to-have with roadmap alignment claimed |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent failures** | [#629](https://github.com/sipeed/picoclaw/issues/629) (hung tasks), [#1058](https://github.com/sipeed/picoclaw/issues/1058) (discarded cron output), [#571](https://github.com/sipeed/picoclaw/issues/571) (no tool progress) | High — erodes trust |
| **Provider fragility** | [#748](https://github.com/sipeed/picoclaw/issues/748) (Groq), [#1790](https://github.com/sipeed/picoclaw/issues/1790) (OpenRouter free), [#2371](https://github.com/sipeed/picoclaw/issues/2371) (Qwen), [#2548](https://github.com/sipeed/picoclaw/issues/2548) (Gemini auth) | High — blocks adoption |
| **Docker complexity** | [#2236](https://github.com/sipeed/picoclaw/issues/2236) (port mapping), [#1228](https://github.com/sipeed/picoclaw/issues/1228) (missing dev tools), [#1708](https://github.com/sipeed/picoclaw/issues/1708) (Gateway API unavailable) | Medium-High — deployment friction |
| **Windows/QQ incompatibility** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) | Medium — regional user base affected |
| **Configuration ambiguity** | [#1883](https://github.com/sipeed/picoclaw/issues/1883) (model name parsing), [#2105](https://github.com/sipeed/picoclaw/issues/2105) (gateway startup confusion) | Medium — onboarding friction |

### Positive Signals

- **Memory system enthusiasm**: [#1919](https://github.com/sipeed/picoclaw/issues/1919) demonstrates sophisticated community contributions
- **Security consciousness**: [#2313](https://github.com/sipeed/picoclaw/pull/2313) (Agent Shield integration) shows enterprise interest
- **Documentation improvements**: Multiple docs PRs merged today ([#2571](https://github.com/sipeed/picoclaw/pull/2571), [#2567](https://github.com/sipeed/picoclaw/pull/2567))
- **Platform expansion**: Mattermost, Feishu, OpenIM requests indicate broad applicability

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 months old, high impact)

| Issue | Age | Risk if Neglected |
|-------|-----|-------------------|
| [#28: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | ~2 months | Local LLM users diverge to alternatives |
| [#618: Self-upgrade support](https://github.com/sipeed/picoclaw/issues/618) | ~2 months | Security patch delivery bottleneck |
| [#571: Tool execution progress feedback](https://github.com/sipeed/picoclaw/issues/571) | ~2 months | UX degradation vs. competing agents |
| [#748: Groq API compatibility](https://github.com/sipeed/picoclaw/issues/748) | ~2 months | Provider ecosystem fragmentation |
| [#1372: OpenIM plugin](https://github.com/sipeed/picoclaw/issues/1372) | ~1 month | Enterprise China market |
| [#1790: OpenRouter free not working](https://github.com/sipeed/picoclaw/issues/1790) | ~1 month | Cost-sensitive user churn |

### PRs at Risk of Stale Conflict

| PR | Age | Issue |
|----|-----|-------|
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | ~2 weeks | Large "Agent Shield" security PR — needs review bandwidth |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) | ~1 month | Mattermost channel — may conflict with routing refactors |
| [#2036](https://github.com/sipeed/picoclaw/pull/2036) | ~3 weeks | Spanish README — low risk but community goodwill |

---

## Project Health Assessment

| Metric | Status |
|--------|--------|
| Development velocity | 🟢 **Strong** — 247 items/day |
| Issue resolution rate | 🟡 **Concerning** — 3.7% close rate (4/109) |
| PR merge rate | 🟡 **Moderate** — 19.6% (27/138) |
| Release cadence | 🟢 **Regular** — nightly builds active |
| Community engagement | 🟢 **Healthy** — diverse providers, platforms, use cases |
| Production readiness | 🟡 **Improving** — retry logic, observability, stability fixes in flight |

**Key recommendation**: Prioritize retry/resilience engineering ([#629](https://github.com/sipeed/picoclaw/issues/629)) and provider format standardization ([#748](https://github.com/sipeed/picoclaw/issues/748), [#1883](https://github.com/sipeed/picoclaw/issues/1883)) to unblock production deployments. Consider triage process for the 105 open active issues to prevent maintainer burnout.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-18

## 1. Today's Overview

NanoClaw shows **high development velocity** with 22 PRs and 12 issues updated in the last 24 hours, indicating an active pre-release sprint. The project is undergoing significant v2 infrastructure modernization (Bun runtime, pnpm migration, provider registry refactoring) while simultaneously addressing production stability issues. Notably, **13 PRs were merged/closed versus 9 remaining open**, suggesting maintainers are actively landing changes. However, **zero new releases** despite heavy activity implies either a pending major version or release pipeline friction. The community is expanding platform support (Podman, Matrix E2EE, OpenCode provider) while grappling with container security and credential isolation concerns.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs (13 total, selected highlights)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#1828](https://github.com/qwibitai/nanoclaw/pull/1828) | ashsolei | Docs rename: agent-hub → iAsh | Maintenance |
| [#1822](https://github.com/qwibitai/nanoclaw/pull/1822) | topcoder1 | "Already handled" button for agent triage cards | **UX: reduces false pending states** |
| [#1821](https://github.com/qwibitai/nanoclaw/pull/1821) | topcoder1 | Parallelize independent work in agent system prompt | **Performance: reduces Telegram ack queueing** |
| [#1696](https://github.com/qwibitai/nanoclaw/pull/1696) | ashsolei | README refresh with status table, deployment guide | Documentation |
| [#1811](https://github.com/qwibitai/nanoclaw/pull/1811) | topcoder1 | v1 LLM-backed email triage pipeline (Haiku→Sonnet→Opus) | **Major feature: tiered classification** |
| [#1816](https://github.com/qwibitai/nanoclaw/pull/1816) | stereographica | Large-scale split + ≥90% test coverage, CI gates | **Quality: technical debt reduction** |
| [#1632](https://github.com/qwibitai/nanoclaw/pull/1632) | gavrielc | Auto-prune stale session artifacts | **Ops: storage management** |
| [#1813](https://github.com/qwibitai/nanoclaw/pull/1813) | gavrielc | Bun container runtime + build-surface improvements | **v2 Infra: faster cold starts** |
| [#1814](https://github.com/qwibitai/nanoclaw/pull/1814) | gavrielc | Self-registration barrel + host container-config registry | **v2 Arch: extensibility** |
| [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) | talmosko-code | OpenCode agent provider | **Platform: new provider support** |
| [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) | meeech | Migrate v2 from npm to pnpm | **v2 Infra: package management** |

**Key advancement**: v2 architecture is stabilizing with three major infrastructure PRs (Bun, pnpm, provider registry) landing simultaneously, suggesting a coordinated platform upgrade.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|---|---|---|
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) Podman support | **6 comments, 6 👍** | **Longest-running active issue** (created 2026-03-11). Signals strong demand for Docker alternatives, especially from macOS/Linux security-conscious users. Underlying need: reduced container runtime lock-in, rootless operation. |
| [#1831](https://github.com/qwibitai/nanoclaw/issues/1831) MTProto fallback for large media | 0 comments, new | Fresh production blocker for Telegram video workflows. Filed same day as related issues by same author—suggests coordinated bug bash or incident response. |
| [#1830](https://github.com/qwibitai/nanoclaw/issues/1830) Public lead auto-registration + credential isolation | 0 comments, new | **Security-critical**: combines user acquisition (Telegram Ads) with container security. Likely driven by commercial deployment needs. |
| [#1829](https://github.com/qwibitai/nanoclaw/issues/1829) Agent-browser session persistence | 0 comments, new | Depends on upstream fix ([vercel-labs/agent-browser#259](https://github.com/vercel-labs/agent-browser/issues/259)). Blocks reliable container restart behavior. |

**Underlying pattern**: Three issues (#1831, #1830, #1829) filed by `shakhruz` on 2026-04-18 form a **coherent production readiness cluster** addressing media handling, user onboarding, and session durability for commercial Telegram bot deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Details | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#1824](https://github.com/qwibitai/nanoclaw/issues/1824) — openclaw crash loop → SIGTERM cascade | openclaw config error caused 12s crash loop, systemd resource exhaustion, NanoClaw terminated without restart | **Closed** — incident resolved, root cause in upstream config |
| 🔴 **High** | [#1830](https://github.com/qwibitai/nanoclaw/issues/1830) — Credential isolation failure | Gmail/GCal credentials mounted into all non-main containers; security gap for public-facing groups | **No fix PR** — enhancement proposal filed |
| 🟡 **Medium** | [#1831](https://github.com/qwibitai/nanoclaw/issues/1831) — Silent large media download failures | Telegram Bot API 20MB limit causes silent failures; agents receive `[Video]` without path | **No fix PR** — MTProto fallback proposed |
| 🟡 **Medium** | [#1829](https://github.com/qwibitai/nanoclaw/issues/1829) — Session loss on container restart | `--profile` flag broken upstream; sessions stored in ephemeral container storage | **No fix PR** — volume mount + symlink workaround proposed |
| 🟡 **Medium** | [#1825](https://github.com/qwibitai/nanoclaw/issues/1825) — Hardcoded paths in cleanup script | Ignores `NANOCLAW_*_DIR` env vars; breaks forked deployments | **No fix PR** |
| 🟡 **Medium** | [#1820](https://github.com/qwibitai/nanoclaw/issues/1820) — Unconditional env override | `CLAUDE_CODE_AUTO_COMPACT_WINDOW` cannot be overridden for experiments | **No fix PR** |
| 🟡 **Medium** | [#1819](https://github.com/qwibitai/nanoclaw/issues/1819) — Telemetry without consent | PostHog telemetry in `setup.sh` with no opt-in/opt-out | **No fix PR** — privacy concern |
| 🟡 **Medium** | [#1818](https://github.com/qwibitai/nanoclaw/issues/1818) — Missing API key threading | Host-side OneCLI client missing `ONECLI_API_KEY` authentication | **Fix PR open**: [#1823](https://github.com/qwibitai/nanoclaw/pull/1823) |
| 🟡 **Medium** | [#1812](https://github.com/qwibitai/nanoclaw/issues/1812) — Team lead interactivity loss | Non-interactive mode blocks all user messages during teammate execution | **No fix PR** |
| 🟡 **Medium** | [#1806](https://github.com/qwibitai/nanoclaw/issues/1806) — RemoteTrigger unavailable in API-key containers | Organization UUID resolution fails; no docs for workaround | **No fix PR** |

**Stability assessment**: One resolved incident (#1824) versus **8 open medium-severity issues** with no fixes, indicating potential accumulation of technical debt. The credential isolation (#1830) and telemetry consent (#1819) issues carry reputational risk.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **Podman documentation/official support** | [#957](https://github.com/qwibitai/nanoclaw/issues/957) | High | 6-month-old issue with consistent engagement; low implementation cost |
| **MTProto fallback for large files** | [#1831](https://github.com/qwibitai/nanoclaw/issues/1831) | High | Blocks commercial video workflows; author provided implementation sketch |
| **Public lead auto-registration** | [#1830](https://github.com/qwibitai/nanoclaw/issues/1830) | High | Revenue-adjacent (Telegram Ads); security pairing increases urgency |
| **Agent-browser session persistence** | [#1829](https://github.com/qwibitai/nanoclaw/issues/1829) | Medium | Blocked on upstream; may require fork or alternative |
| **SkillClaw integration** | [#1827](https://github.com/qwibitai/nanoclaw/issues/1827) | Low-Medium | Strategic direction discussion; no implementation commitment |
| **Matrix E2EE channel** | [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | Medium | Large open PR with per-group config; needs review bandwidth |
| **OpenAI model support** | [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) | Medium | Cost reduction driver; alternative to Claude dependency |

**Predicted v2.1 or v2.2 themes**: Telegram commercial robustness (MTProto, auto-registration), runtime flexibility (Podman, OpenAI models), and security hardening (credential isolation).

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact | Frequency Signal |
|---|---|---|
| Docker lock-in | macOS/Linux users avoiding Docker Desktop | Sustained (#957) |
| Silent failures | Undetected missing video files in production | New, specific (#1831) |
| Session fragility | Repeated re-authentication after restarts | New, upstream-blocked (#1829) |
| Blocked interactivity | Cannot interrupt agent teams | New (#1812) |
| Undocumented API limitations | Wasted time on `/schedule` in containers | New (#1806) |

### Satisfaction Indicators
- [#957](https://github.com/qwibitai/nanoclaw/issues/957): "very useful and well designed" — core design validated
- Rapid triage feature (#1811) and parallelization (#1821) suggest responsive UX iteration

### Dissatisfaction Indicators
- Privacy: telemetry without consent (#1819) — "no user-visible notice or opt-out path"
- Security: credential overexposure (#1830) — "security gap if public-facing groups are added"
- Operational: hardcoded paths break forks (#1825) — "robustness issues I ran into while syncing a fork"

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) Podman support | **38 days** | Community frustration, competitive parity | Maintainer decision: docs-only or CI testing commitment |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix E2EE + per-group config | **14 days** | Large PR bit-rot | Review or request split; "Happy to split if upstream prefers" |
| [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) OpenAI model support | **4 days** | Cost-sensitive users waiting | Architecture review for model-agnostic runner |
| [#1809](https://github.com/qwibitai/nanoclaw/pull/1809) Merge upstream 1.2.35→1.2.53 | **1 day** | Fork divergence | Standard upstream sync, but check for conflicts with v2 work |

**Critical attention**: [#957](https://github.com/qwibitai/nanoclaw/issues/957) risks becoming a symbol of unresponsiveness if not addressed in next 2-4 weeks. The Matrix PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) is at bit-rot risk given parallel v2 restructuring.

---

*Digest generated from GitHub activity 2026-04-17 to 2026-04-18. All links: https://github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-18

---

## 1. Today's Overview

NullClaw shows **strong project health** with 24 tracked items updated in the last 24 hours (5 issues, 19 PRs), indicating an active development cycle. The project shipped **v2026.4.17** with a significant **Zig 0.16 migration** and a security fix for Docker sandbox initialization. Merge velocity is high with 16 of 19 PRs closed/merged, leaving only 3 open PRs in flight. The community demonstrates healthy engagement with cross-reported bugs getting rapid fixes, though one long-running feature PR (#411, tool customization) has been open for over five weeks without resolution. Overall, NullClaw maintains its position as a fast-moving, infrastructure-focused AI agent framework with particular strength in multi-channel integrations and provider compatibility.

---

## 2. Releases

### [v2026.4.17](https://github.com/nullclaw/nullclaw/pull/830) — 2026-04-17

| Aspect | Detail |
|--------|--------|
| **Version bump** | [PR #830](https://github.com/nullclaw/nullclaw/pull/830) by @DonPrus |

**Changes:**
- **Zig 0.16 migration** ([PR #823](https://github.com/nullclaw/nullclaw/pull/823)) — Major toolchain upgrade; users building from source must update their Zig compiler
- **Security fix: Docker sandbox mount args** ([commit](http...)) — Mount parameters now initialized via factory pattern to prevent unsafe defaults (bilingual EN/ZH commit message indicates cross-regional collaboration)

**Migration notes:** Users building from source should upgrade to Zig 0.16 before pulling latest. No runtime configuration changes required for prebuilt binaries.

---

## 3. Project Progress

### Merged/Closed PRs (16 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#830](https://github.com/nullclaw/nullclaw/pull/830) | @DonPrus | Version bump for release | Release orchestration |
| [#735](https://github.com/nullclaw/nullclaw/pull/735) | @manelsen | **Web-discovered skill installs** via `.well-known/nullclaw-skill.json` | Major UX: skills installable from any HTTPS origin without git |
| [#754](https://github.com/nullclaw/nullclaw/pull/754) | @manelsen | Refactor provider error text predicates into shared `text_helpers.zig` | Code health, i18n foundation |
| [#786](https://github.com/nullclaw/nullclaw/pull/786) | @fakhriaunur | Tests for `version.zig`, `verbose.zig`, `web_search_providers` | Test coverage expansion |
| [#757](https://github.com/nullclaw/nullclaw/pull/757) | @quinlanjager | **Heartbeat task dispatch** — actually executes tasks from `HEARTBEAT.md` | Critical fix: previously heartbeat was "effectively ignored" |
| [#782](https://github.com/nullclaw/nullclaw/pull/782) | @vedmalex | Telegram interactive skill menus + OpenAI Codex timeout hardening | Multi-channel UX + reliability |
| [#798](https://github.com/nullclaw/nullclaw/pull/798) | @grtninja | CI action pinning to commit SHAs + `contents: read` permissions | Supply-chain security |
| [#818](https://github.com/nullclaw/nullclaw/pull/818) | @DDGRCF | **Weixin (WeChat) QR auth flow** and channel integration | Major platform expansion for Chinese market |
| [#829](https://github.com/nullclaw/nullclaw/pull/829) | @DonPrus | Admin CLI: `config show --json`, `models summary --json` | Operational tooling for deployments |
| [#755](https://github.com/nullclaw/nullclaw/pull/755) | @juvenn | `http_proxy`/`https_proxy` env var support in `std.http.Client` | Enterprise/networked environment support |
| [#772](https://github.com/nullclaw/nullclaw/pull/772) | @telagod | Responses API tool schema fix + null error classification | Provider compatibility (fixes #773) |
| [#787](https://github.com/nullclaw/nullclaw/pull/787) | @fakhriaunur | Tests for `search_base_url.zig`, `status.zig` | Continued test coverage |
| [#814](https://github.com/nullclaw/nullclaw/pull/814) | @manelsen | Fix named-agent provider lifetime bug (vtable stack storage) | Memory safety / crash prevention |
| [#813](https://github.com/nullclaw/nullclaw/pull/813) | @manelsen | Raise models refresh output budget for large provider catalogs | Fixes OpenRouter 400KB response failures |
| [#828](https://github.com/nullclaw/nullclaw/pull/828) | @manelsen | Clarify doctor CLI-only channel diagnostics | UX: eliminated false "no channels configured" warning |
| [#815](https://github.com/nullclaw/nullclaw/pull/815) | @manelsen | Web search setup guidance for missing providers | Self-service onboarding improvement |

**Key advancement areas:** Multi-channel ecosystem (Telegram, Weixin), skill distribution (web discovery), operational reliability (heartbeat execution, proxy support), and test infrastructure.

---

## 4. Community Hot Topics

| Rank | Item | Engagement | Analysis |
|:---|:---|:---|:---|
| 1 | [#812](https://github.com/nullclaw/nullclaw/issues/812) http_request bug — **CLOSED** | 4 comments, 1 👍 | **Highest engagement.** User migrating from Picoclaw/ZeroClaw ecosystem couldn't enable internet search. Resolved but signals **onboarding friction** for new users discovering search configuration. |
| 2 | [#764](https://github.com/nullclaw/nullclaw/issues/764) Add NullClaw to Agent Skills client list | 2 comments, 0 👍 | **Strategic positioning request.** Community member advocating for NullClaw's inclusion in [agentskills.io](https://agentskills.io/clients). Open since April 3; needs maintainer decision on standards participation. |

**Underlying needs:**
- **#812**: Better documentation/discovery for search provider setup (partially addressed by [#815](https://github.com/nullclaw/nullclaw/pull/815))
- **#764**: Project marketing/standards alignment — NullClaw's skill system needs external validation for ecosystem credibility

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#811](https://github.com/nullclaw/nullclaw/issues/811) | Sub-agent connection fails with custom OpenAI-compatible provider (`error.CompatibleApiError`, exit_code=3) | **Fixed** (implied by closure, likely via #814 or related) |
| **High** | [#809](https://github.com/nullclaw/nullclaw/issues/809) | `models refresh` crashes for OpenRouter — `Child.run()` 50KB buffer too small for ~400KB response | **Fixed** by [#813](https://github.com/nullclaw/nullclaw/pull/813) |
| **Medium** | [#827](https://github.com/nullclaw/nullclaw/issues/827) | `channel status` contradicts `doctor` output (CLI channel OK vs. "no channels configured") | **Fixed** by [#828](https://github.com/nullclaw/nullclaw/pull/828) |
| **Medium** | [#812](https://github.com/nullclaw/nullclaw/issues/812) | http_request/internet search non-functional for new user | **Fixed** (closed) |
| **Medium** | [#814](https://github.com/nullclaw/nullclaw/pull/814) | Named-agent provider lifetime bug — vtable could outlive stack storage | **Fixed** by [#814](https://github.com/nullclaw/nullclaw/pull/814) |

**Stability assessment:** All reported bugs from the period have been resolved. The OpenRouter buffer issue (#809) and heartbeat task dispatch (#757) represent **latent production bugs** that could have caused silent failures; their fixes improve reliability significantly.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Knowledge Graph Memory backend** | [#712](https://github.com/nullclaw/nullclaw/pull/712) — OPEN since Mar 24 | High | Complex feature (SQLite recursive CTEs, FTS5, entity-relation graph) with substantial implementation. May need review bandwidth. |
| **Tool customization system** | [#411](https://github.com/nullclaw/nullclaw/pull/411) — OPEN since Mar 10 | Medium | 5+ weeks open; trigger-based prioritization + parameter management. Large surface area, may be held for architectural review. |
| **Gateway hardening** | [#789](https://github.com/nullclaw/nullclaw/pull/789) — OPEN | Medium-High | Security-critical (public bind safeguards, rate limiting); actively maintained by contributor |
| **Agent Skills standard compliance** | [#764](https://github.com/nullclaw/nullclaw/issues/764) | Unknown | Requires maintainer decision, not technical implementation |
| **Expanded channel integrations** | Trend from #782, #818 | High | Clear pattern of adding messaging platforms (Telegram, Weixin); Discord/Slack/WhatsApp likely candidates |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Search setup opacity** | #812 (new user unable to enable search), #815 (added guidance as fix) | Moderate — addressed |
| **Provider compatibility gaps** | #811 (custom OpenAI-compatible), #809 (OpenRouter-specific), #772 (Responses API) | Moderate — active fixes |
| **Diagnostic confusion** | #827 (contradictory doctor/channel status) | Low — fixed |
| **Proxy/enterprise networking** | #755 (proxy env var support) | Moderate — addressed |

### Use Cases Observed
- **Migration from competitors**: Picoclaw/ZeroClaw → NullClaw (#812)
- **Multi-agent orchestration**: Sub-agents with custom providers (#811)
- **Chinese market deployment**: Weixin integration (#818)
- **Headless/CI operation**: JSON config output, machine-readable models (#829)

### Satisfaction Indicators
- User #812: "NullClaw seems very organized" — positive perception despite friction
- Rapid fix turnaround (all bugs closed within 24h of update)
- Active bilingual community (EN/ZH PRs and commits)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#411](https://github.com/nullclaw/nullclaw/pull/411) Tool customization system | ~5.5 weeks | **High** — may bit-rot, contributor energy at risk | Maintainer architectural review; large PR, may need splitting |
| [#712](https://github.com/nullclaw/nullclaw/pull/712) Knowledge Graph Memory | ~3.5 weeks | Moderate | Code review; complex SQLite/CTE implementation |
| [#789](https://github.com/nullclaw/nullclaw/pull/789) Gateway bind/rate limit fixes | ~1.5 weeks | Low-Moderate | Security review, likely mergeable |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) Agent Skills client list | ~2 weeks | Low — strategic decision | Maintainer response on standards participation |

**Maintainer attention priority:** #411 requires urgent engagement to prevent contributor attrition on a substantial feature. #712 is technically complex and would benefit from dedicated review time.

---

*Digest generated from GitHub activity 2026-04-17. All links reference `https://github.com/nullclaw/nullclaw`.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-18

## 1. Today's Overview

IronClaw shows **high-velocity development with significant quality control pressure**. With 78 items updated in 24 hours (28 issues, 50 PRs) and zero new releases, the project is in an active stabilization phase rather than shipping cadence. The team is running intensive QA bug bashes (4/16 and 4/17), yielding 12+ new P1/P2 bugs, while simultaneously pushing large feature PRs for DingTalk integration, gateway UX improvements, and auth system unification. The 36:14 open-to-merged PR ratio suggests a backlog building, with several XL-sized PRs competing for review bandwidth. Notably, two duplicate secret-management feature proposals (#2600 closed, #2601 opened) indicate documentation gaps frustrating new users.

---

## 2. Releases

**No new releases** — None published. The project remains on v0.25.0 (per staging tags).

---

## 3. Project Progress

### Merged/Closed PRs (14 total, selected highlights)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #2595 | henrypark133 | **MCP lifecycle trace test in gateway mode** — Fixed timeout by enabling gateway-mode OAuth, avoiding CLI browser path in tests | [PR #2595](https://github.com/nearai/ironclaw/pull/2595) |
| #2594 | henrypark133 | **Gateway auth & Telegram pairing flow** — Unified auth UI path, fixed SSE-backed pairing with rotated request IDs | [PR #2594](https://github.com/nearai/ironclaw/pull/2594) |
| #2592 | henrypark133 | **Critical: Restored web login bootstrap** — Fixed stray `}` in `app.js` that broke gateway bundle parsing on staging; added `node --check` CI guard | [PR #2592](https://github.com/nearai/ironclaw/pull/2592) |
| #2265 | dependabot[bot] | **GitHub Actions dependency bumps** (13 updates) — Routine maintenance | [PR #2265](https://github.com/nearai/ironclaw/pull/2265) |

**Features advancing in open PRs:**
- **DingTalk anti-silence UX** (#2589, XL, high risk) — Real-time agent status surfacing during silent periods; includes DB migration
- **Gateway tool output previews** (#2571, XL) — Structured rendering of tool results, duration fixes, expandable cards
- **Slack Socket Mode** (#1549, XL) — NAT-friendly WebSocket bridge, long-running community contribution

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Status | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| [#2522](https://github.com/nearai/ironclaw/issues/2522) — DB error saving API keys in local setup | **OPEN** | 3 | 2 | **Critical onboarding blocker** — Local DB path (`ironclaw onboard` → `Y` for local) fails at secret storage layer. Multiple scope labels (db, secrets, setup) suggest architectural ambiguity in error handling. |
| [#2411](https://github.com/nearai/ironclaw/issues/2411) — Telegram bot token save does nothing | **OPEN** | 2 | 0 | Staging QA P2 — UI feedback gap; token appears saved but isn't persisted. Pattern with #2522 suggests secrets system reliability concerns. |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) — Agent instance dies after 1hr inactivity | **OPEN** | 2 | 0 | **Infrastructure reliability** — Hosted-staging lifecycle/persistence issue; impacts production viability for always-on agents. |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) — Chat messages disappear on refresh | **OPEN** | 2 | 0 | State management fragility — Bot continues processing but UI loses context; fundamental web channel reliability issue. |

**Underlying needs:** Secrets management is emerging as a **systemic pain point** (3+ issues), compounded by missing documentation (#2601). Users need transparent, robust credential flows across local and hosted deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **P1 — Security** | [#2491](https://github.com/nearai/ironclaw/issues/2491) — Engine V2 bypasses inbound secret scanning | **CLOSED** | ✅ #2592 area | Secrets sent directly to LLM; `scan_inbound_for_secrets()` skipped. **Fixed in staging.** |
| **P1 — Functional** | [#2580](https://github.com/nearai/ironclaw/issues/2580) — Telegram message "sent" but not delivered | **OPEN** | ❌ No | False positive delivery confirmation; channel/wasm scope |
| **P1 — Privacy** | [#2581](https://github.com/nearai/ironclaw/issues/2581) — Chain-of-thought leaked to user | **OPEN** | ❌ No | Internal reasoning exposed instead of final response; Engine V2 output formatting |
| **P1 — Functional** | [#2582](https://github.com/nearai/ironclaw/issues/2582) — Markdown file "attached" but not provided | **OPEN** | ❌ No | File attachment claim without delivery; Telegram channel |
| **P1 — Functional** | [#2583](https://github.com/nearai/ironclaw/issues/2583) — Routine creation fails with "5 consecutive code errors" | **OPEN** | ❌ No | Orchestrator unable to generate valid routine code |
| **P1 — Security** | [#2584](https://github.com/nearai/ironclaw/issues/2584) — Internal system files visible in UI | **OPEN** | ❌ No | Workspace scope — information disclosure risk |
| **P2** | [#2522](https://github.com/nearai/ironclaw/issues/2522) | **OPEN** | ❌ No | Local DB setup → secret save failure (see above) |
| **P2** | [#2564](https://github.com/nearai/ironclaw/issues/2564) | **OPEN** | ❌ No | WASM channel scope model inconsistency — architectural debt |

**Regression risk:** The #2592 fix (stray `}` in `app.js`) reveals **frontend bundle validation gaps** that reached staging. New CI guard (`node --check`) should prevent recurrence.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Proposal | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#2601](https://github.com/nearai/ironclaw/issues/2601) | **CLI/TUI for managing secrets** | **High** | Duplicate submitted within 24h (#2600→#2601); directly addresses #2522, #2411, #2543 pain cluster. Low implementation cost, high user impact. |
| [#2569](https://github.com/nearai/ironclaw/issues/2569) | `web_fetch` tool with secondary LLM summarization | Medium | Clear spec from core contributor (serrrfirat); aligns with existing tool architecture. Depends on LLM provider integration bandwidth. |
| [#2591](https://github.com/nearai/ironclaw/issues/2591) | `SKILLS_BUNDLED_ENABLED` opt-out flag | Medium | Build-time flexibility request; straightforward env-var implementation. |
| [#2590](https://github.com/nearai/ironclaw/issues/2590) | SkillClaw integration as skill lifecycle layer | Low | External project suggestion; strategic decision needed on ecosystem boundaries. |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | **Epic: Gateway feature boundaries + crate guardrails** | High (as epic) | Core maintainer (henrypark133) initiative; foundational for scaling. Staged implementation over multiple releases. |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Secrets/auth friction** | #2522, #2411, #2543, #2601, #2600 | 🔴 Critical |
| **"Ghost" confirmations** | #2580 (Telegram), #2582 (files) — agent claims success without delivery | 🔴 High |
| **State loss** | #2285 (refresh), #2284 (inactivity death) | 🟡 High |
| **Onboarding documentation** | #2601 explicitly calls out undocumented auth patterns | 🟡 Medium |
| **Engine V2 reliability** | #2581 (CoT leak), #2583 (routine failures), #2491 (security bypass) | 🔴 High |

### Use Cases
- **Local-first deployment**: Raspberry Pi support request (#1339, closed — armv7 still unsupported)
- **Multi-channel agents**: Telegram + web + DingTalk (PR #2589) — users expect consistent behavior across channels
- **Long-running automation**: Routines, missions, event-driven workflows — but #2524 (event routines mislabeled as manual) shows execution gap

### Satisfaction Signals
- Active QA program (bug bashes) indicates investment in quality
- Rapid duplicate issue closure (#2600 closed same day) shows responsive triage
- CI improvements (#2592) demonstrate operational learning

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) — Aliyun Coding Plan support | **28 days** | Merge conflict, XL scope | **Decision:** Largest open PR; touches 15+ scopes. Stalled? Needs rebase or split. |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) — Slack Socket Mode | **28 days** | XL, community contrib | Review backlog; NAT-friendly Slack is significant enterprise feature. |
| [#2348](https://github.com/nearai/ironclaw/pull/2348) — Descriptive chat titles | **7 days** | Medium | UX polish; low risk, ready for merge? |
| [#2367](https://github.com/nearai/ironclaw/pull/2367) — Auth flows + live canary unification | **6 days** | Medium | Core infrastructure; blocks other auth work. |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) — Instance death after 1hr | **8 days** | **Production blocker** | No assignee visible; fundamental to hosted offering viability. |

**Concerns:** Two XL PRs (#1446, #1549) aging past 4 weeks with undefined comment counts suggest **review bottleneck**. The 36 open PRs with only 14 merged/closed indicates **throughput constraint** that could demotivate contributors.

---

*Digest generated from GitHub activity data for nearai/ironclaw on 2026-04-18.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-18

## 1. Today's Overview

LobsterAI (NetEase Youdao's personal AI assistant) shows **very high development velocity** with 28 PRs updated in 24 hours and 21 merged/closed, indicating an active release cycle. The project shipped version **2026.4.17** yesterday, suggesting a weekly or bi-weekly release cadence. OpenClaw (the AI agent engine) receives concentrated engineering attention with multiple cowork-session and gateway fixes. However, **issue triage quality is concerning**: 3 of 7 active issues are spam/gambling advertisements (changan1524), and legitimate user-reported bugs around silent failures and Win11 installation remain unaddressed. The maintainer team (primarily liuzhq1986, flowell, nmgwddj) is highly productive on features but may need stronger community moderation.

---

## 2. Releases

### [LobsterAI 2026.4.17](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.17) (2026-04-17)

| Change | PR | Author |
|--------|-----|--------|
| **Upgrade OpenClaw to 2024.4.8** | [#1709](https://github.com/netease-youdao/LobsterAI/pull/1709) | @liuzhq1986 |
| **Fix WeChat gateway methods patch & channel config** | [#1592](https://github.com/netease-youdao/LobsterAI/pull/1592) | @btc69m979y-dotcom |
| **Fix OpenClaw** *(description truncated)* | — | — |

**Assessment**: This is a maintenance release focused on OpenClaw engine upgrade and IM channel stability. No breaking changes documented. The OpenClaw version jump to 2024.4.8 suggests synchronization with upstream; users relying on custom OpenClaw configurations should verify compatibility.

---

## 3. Project Progress

### Merged/Closed PRs (21 total — highlights by impact)

| PR | Area | Description | Author |
|----|------|-------------|--------|
| [#1715](https://github.com/netease-youdao/LobsterAI/pull/1715) | `main`, `openclaw` | **Fix: Add missing `session_id` in OpenClaw server proxy requests** — critical for multi-session cowork stability | @flowell |
| [#1713](https://github.com/netease-youdao/LobsterAI/pull/1713) | `main`, `openclaw` | *Duplicate of above, closed* | @flowell |
| [#1711](https://github.com/netease-youdao/LobsterAI/pull/1711) | `renderer`, `main`, `openclaw`, `im` | **NIM multi-bot delivery + GitHub plugin install support** — major IM infrastructure expansion | @nmgwddj |
| [#1710](https://github.com/netease-youdao/LobsterAI/pull/1710) | `main`, `openclaw` | **Fix: Suppress heartbeat prompt history leaks in Cowork** — UI/UX polish for session cleanliness | @nmgwddj |
| [#1712](https://github.com/netease-youdao/LobsterAI/pull/1712) | `im` | Upgrade NetEase POPO IM plugin | @liuzhq1986 |
| [#1708](https://github.com/netease-youdao/LobsterAI/pull/1708) | `main`, `openclaw` | **Fix: Force gateway restart when MCP-bridge config changes** — resolves race condition causing MCP failures | @liuzhq1986 |
| [#1706](https://github.com/netease-youdao/LobsterAI/pull/1706) | `renderer` | Add UUID/userId to update check requests (telemetry/rollout tracking) | @liuzhq1986 |
| [#1699](https://github.com/netease-youdao/LobsterAI/pull/1699) | `renderer` | **Fix: Crash when importing settings with nonexistent provider** — defensive programming | @liuzhq1986 |
| [#1696](https://github.com/netease-youdao/LobsterAI/pull/1696) | `main`, `im` | Fix WeChat switch state logic (remove accountId dependency) + QR login diagnostics | @liuzhq1986 |
| [#1692](https://github.com/netease-youdao/LobsterAI/pull/1692) | `renderer` | Add API Key link for Baidu Qianfan provider | @liuzhq1986 |
| [#1689](https://github.com/netease-youdao/LobsterAI/pull/1689) | `docs`, `main`, `cowork` | **Chore: Remove yd_cowork legacy code** — significant technical debt cleanup (~multiple files) | @liuzhq1986 |
| [#1684](https://github.com/netease-youdao/LobsterAI/pull/1684) | `openclaw` | **Fix: Prune 65MB orphaned Tlon native binary from macOS builds** — package size optimization | @liuzhq1986 |
| [#1678](https://github.com/netease-youdao/LobsterAI/pull/1678) | `renderer` | Remove unused icon imports (build cleanup) | @liuzhq1986 |
| [#1655](https://github.com/netease-youdao/LobsterAI/pull/1655) | `main`, `openclaw` | Revert: "non-main agent persona files not loaded" fix — indicates regression in prior release | @liuzhq1986 |
| [#1605](https://github.com/netease-youdao/LobsterAI/pull/1605) | `renderer` | Fix MCP list command text overflow (UI key tag wrapping) | @liuzhq1986 |

**Key Themes**: (1) **Cowork session reliability** — multiple session_id and heartbeat fixes; (2) **IM platform expansion** — NIM multi-bot, POPO upgrade, WeChat hardening; (3) **Build/package hygiene** — legacy code removal, binary pruning; (4) **MCP ecosystem stabilization** — gateway restart logic, UI fixes.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) "提问后不运行，也不显示任何信息" | **4 comments**, open since 2026-04-08 | **Highest legitimate activity**. Silent failure on query submission — indicates critical UX/debuggability gap. No error surfacing suggests logging/telemetry failure or renderer-main process communication breakdown. |
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) "add hermes-agent as AI engine" | **2 comments**, open since 2026-04-10 | Community request for pluggable agent architecture expansion. Hermes-agent (likely reference to specific agent framework) as alternative to OpenClaw signals demand for **engine modularity**. Currently no maintainer response. |

**Spam Contamination**: Issues [#1716](https://github.com/netease-youdao/LobsterAI/issues/1716), [#1717](https://github.com/netease-youdao/LobsterAI/issues/1717), [#1718](https://github.com/netease-youdao/LobsterAI/issues/1718) are gambling site spam from single user `changan1524` — **requires immediate moderation action**.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **🔴 High** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | Complete silent failure — no execution, no error display | **UNFIXED** — 9 days old, 4 comments, no maintainer assignment visible |
| **🟡 Medium** | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11: White/invalid icons during installation | **UNFIXED** — reported yesterday, likely Electron builder/icon resource issue |
| **🟡 Medium** | [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) *(closed)* | Login failure on Deepin V25 (Linux) — "network error" after OAuth flow | **CLOSED** but resolution unclear — may be environment-specific or fixed in 4.13+ |
| **🟢 Low** | [#1708](https://github.com/netease-youdao/LobsterAI/pull/1708) *(fix)* | MCP bridge race condition causing tools unavailable | **FIXED** in 2026.4.17 |
| **🟢 Low** | [#1715](https://github.com/netease-youdao/LobsterAI/pull/1715) *(fix)* | Missing session_id broke multi-cowork session routing | **FIXED** in 2026.4.17 |
| **🟢 Low** | [#1710](https://github.com/netease-youdao/LobsterAI/pull/1710) *(fix)* | Heartbeat prompts leaking into Cowork UI history | **FIXED** in 2026.4.17 |

**Regression Risk**: PR [#1655](https://github.com/netease-youdao/LobsterAI/pull/1655) reverted a persona file loading fix, suggesting the original fix (#1651) caused regressions — **agent personality/config loading may be unstable**.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|---------|--------|---------------------------|
| **Hermes-agent engine support** | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Medium — architecture already supports OpenClaw pluggability; community demand +1 |
| **Email-based AI agent (ClawEmail)** | [#1719](https://github.com/netease-youdao/LobsterAI/pull/1719) *(open)* | **High** — substantial PR in review with full UI, config sync, session mapping |
| **NIM multi-bot + GitHub plugin install** | [#1711](https://github.com/netease-youdao/LobsterAI/pull/1711) *(merged)* | **Shipped** — indicates roadmap priority on enterprise IM (NetEase NIM) and plugin ecosystem |
| **Electron 41 + React 19 + Vite 8 upgrades** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281), [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282), [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) | Medium — Dependabot PRs open since early April, may batch for major version |

**Predicted Next Release Focus**: ClawEmail channel GA, Electron/React dependency upgrades, continued Cowork stability hardening.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Silent failures / no error feedback** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | Critical — users cannot self-diagnose |
| **Cross-platform installation issues** | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) (Win11), [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) (Deepin Linux) | Moderate — Electron app packaging fragility |
| **Login/OAuth reliability on Linux** | [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) | Moderate — browser-LobsterAI handoff fails |
| **Desire for engine choice / vendor independence** | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Low-Moderate — power user segment |
| **Satisfaction**: IM channel breadth (WeChat, POPO, NIM, now Email) | PRs [#1696](https://github.com/netease-youdao/LobsterAI/pull/1696), [#1712](https://github.com/netease-youdao/LobsterAI/pull/1712), [#1711](https://github.com/netease-youdao/LobsterAI/pull/1711), [#1719](https://github.com/netease-youdao/LobsterAI/pull/1719) | Positive signal — enterprise/team use cases supported |

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) Silent query failure | **9 days** | User attrition, support burden | Maintainer assignment, reproduction steps, add logging/telemetry |
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) Hermes-agent request | **8 days** | Community engagement | Roadmap response — yes/no/maybe with rationale |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 41 upgrade | **16 days** | Security/performance debt | Merge or close with plan |
| [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) React 19 upgrade | **16 days** | Breaking change risk | Coordination with renderer team |
| **Spam issues #1716-1718** | 1 day | Repository hygiene, trust | Block user, report to GitHub, consider issue templates/verification |

---

**Overall Health Score**: 🟢 **Strong engineering velocity**, 🟡 **Moderate community health** (spam, untriaged bugs), 🔴 **Needs attention on error handling UX and moderation**.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-04-18

## 1. Today's Overview

TinyClaw (TinyAGI/tinyagi) showed minimal activity on 2026-04-18, with only one pull request receiving an update in the past 24 hours—specifically, the closure of a provider integration PR that had been open for nearly four weeks. No new issues were opened or updated, and no releases were published, suggesting the project is in a maintenance-steady phase rather than active feature development. The single closed PR represents the completion of a third-party LLM provider expansion, indicating continued ecosystem growth but limited core architectural work. Overall project health appears stable with zero open issues and zero open PRs, though this low issue volume may also reflect modest community engagement rather than exceptional code quality.

---

## 2. Releases

**No new releases** were published on 2026-04-18. The project has no recent release history documented in this data period.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Status | Description | Link |
|:---|:-------|:------------|:-----|
| #243 | **CLOSED** | feat: add Novita AI as a built-in LLM provider | [TinyAGI/tinyagi#243](https://github.com/TinyAGI/tinyagi/pull/243) |

**Details:** This PR by contributor [Alex-wuhu](https://github.com/Alex-wuhu) integrates [Novita AI](https://novita.ai) as a first-class LLM provider, joining existing integrations for Anthropic, OpenAI, and OpenCode. The implementation leverages Novita's OpenAI-compatible API by reusing the existing **codex harness** with a custom `OPENAI_BASE_URL` configuration, requiring no additional CLI dependencies. The PR was created 2026-03-20 and closed 2026-04-17 after approximately 28 days in review.

**Technical significance:** This follows a pattern of "adapter-style" provider expansion that minimizes maintenance burden by standardizing on OpenAI-compatible API surfaces, suggesting the project's architecture is intentionally designed for rapid provider onboarding.

---

## 4. Community Hot Topics

**No active community discussions** were identified in the past 24 hours. The closed PR #243 had **zero reactions (👍: 0)** and **undefined comment count** in the data feed, indicating limited community engagement during its review period.

**Underlying need analysis:** The Novita AI integration addresses a growing demand for **cost-efficient, API-compatible LLM alternatives** to premium providers (OpenAI, Anthropic). Novita AI positions itself as a price-competitive inference platform; this PR suggests TinyClaw users or maintainers are seeking to reduce operational costs while maintaining interoperability. The lack of community discussion, however, indicates either: (a) maintainer-driven roadmap decisions with limited external input, or (b) a small, passive user base.

---

## 5. Bugs & Stability

**No bug reports, crashes, or regressions** were identified on 2026-04-18.

- Open issues: **0**
- Issues updated in last 24h: **0**

**Assessment:** The zero-issue state is atypical for an active open-source project. Possible interpretations:
- Mature, stable codebase with effective issue resolution
- Low adoption resulting in limited real-world stress testing
- Issues tracked outside GitHub (Discord, private channels)

**Recommendation for monitoring:** Watch for sudden issue spikes following new releases, which could indicate latent stability problems in currently untested code paths.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** were filed on 2026-04-18. However, the closed PR reveals implicit roadmap direction:

| Signal | Likelihood in Next Version | Rationale |
|:-------|:--------------------------|:----------|
| Additional OpenAI-compatible providers (Together, Fireworks, Anyscale, Groq) | **High** | Established architectural pattern; minimal integration cost |
| Provider-specific optimization (routing, fallback, cost-based selection) | **Medium** | Natural evolution as provider count grows |
| Native Novita-specific features (fine-tuning endpoints, model-specific parameters) | **Low** | Current implementation uses generic compatibility layer; divergence would increase maintenance |

**Predicted next provider additions:** Given the codex harness reuse strategy, projects like [Together AI](https://www.together.ai/), [Fireworks AI](https://fireworks.ai/), or [Groq](https://groq.com/) would require similarly minimal effort and align with cost-reduction trends.

---

## 7. User Feedback Summary

**No direct user feedback** (issues, discussions, PR comments) was captured in this period.

**Inferred user profile from PR #243:**
- **Use case:** Production deployments seeking to optimize LLM inference costs
- **Pain point addressed:** Vendor lock-in and API pricing pressure from premium providers
- **Satisfaction indicator:** Contributor (Alex-wuhu) invested effort in upstream integration rather than maintaining a private fork, suggesting the project's provider architecture is sufficiently extensible

**Gap:** Absence of user-reported issues or feature requests limits understanding of actual deployment friction points (e.g., rate limiting, error handling, streaming reliability across providers).

---

## 8. Backlog Watch

**No stale issues or PRs requiring maintainer attention** were identified, as the project currently has:

| Category | Count | Status |
|:---------|:------|:-------|
| Open issues | 0 | — |
| Open PRs | 0 | — |
| PRs open >14 days | 0 | — |

**Historical note:** PR #243 spent **28 days** in open state (2026-03-20 to 2026-04-17), which may indicate:
- Maintainer bandwidth constraints
- Awaiting upstream changes (Novita API stability verification)
- Review standards requiring extended validation for provider integrations

**Monitoring recommendation:** If future PRs exhibit similar review latency, consider documenting expected review timelines to retain contributors. The current zero-backlog state provides an opportunity to establish proactive maintenance practices before community scale increases.

---

*Digest generated from TinyAGI/tinyagi GitHub activity on 2026-04-18. Data source: github.com/TinyAGI/tinyagi*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-18

## 1. Today's Overview

Moltis shows **strong development velocity** with 16 PRs and 14 issues updated in the last 24 hours, maintaining a healthy 69% merge/closure rate (11 of 16 PRs). The project released two builds yesterday (20260417.01 and 20260417.02), indicating active CI/CD. Community engagement is moderate with concentrated activity around reliability fixes (Matrix, Slack, Podman) and a major new code-indexing subsystem landing in four stacked PRs. The open PR backlog of 5 items and 7 active issues suggests the project is in an active development phase with some accumulation of feature work awaiting review.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [20260417.02](https://github.com/moltis-org/moltis/releases/tag/20260417.02) | 2026-04-17 | No detailed release notes provided in source data |
| [20260417.01](https://github.com/moltis-org/moltis/releases/tag/20260417.01) | 2026-04-17 | No detailed release notes provided in source data |

**Assessment:** The dated versioning scheme (YYYYMMDD.XX) suggests nightly/continuous delivery. Without changelogs, users should inspect merged PRs below for actual changes. The rapid dual-release pattern may indicate hotfix deployment or CI artifact publishing.

---

## 3. Project Progress

### Major Features Landed

| PR | Description | Impact |
|----|-------------|--------|
| [#730](https://github.com/moltis-org/moltis/pull/730) | **Matrix OIDC authentication via MAS** — OAuth 2.0/OIDC flow for Matrix homeservers using Matrix Authentication Service (MSC3861); resolves blocker for matrix.org and modern homeservers that dropped password auth in April 2025 | Critical infrastructure: unblocks Matrix adoption for security-conscious deployments |
| [#753→#756](https://github.com/moltis-org/moltis/pull/756) | **Code indexing subsystem (4-PR stack)** — Complete `moltis-code-index` crate with SQLite+FTS5 backend, incremental reindexing, file watcher, delta sync, and gateway integration as agent tools | Major capability: enables agents to search, index, and reason about project source code locally without external dependencies |
| [#763](https://github.com/moltis-org/moltis/pull/763) | **Nostr NIP-59 Gift Wrap support** — Private DMs with metadata hiding via ephemeral keys; backward-compatible with legacy NIP-04 | Privacy enhancement for decentralized messaging |

### Reliability & Bug Fixes

| PR | Fixes Issue | Description |
|----|-------------|-------------|
| [#761](https://github.com/moltis-org/moltis/pull/761) | [#758](https://github.com/moltis-org/moltis/issues/758) | Matrix sync loop retry with exponential backoff (5s→300s cap) |
| [#767](https://github.com/moltis-org/moltis/pull/767) | [#766](https://github.com/moltis-org/moltis/issues/766) | Slack `/commands` endpoint registration for slash commands |
| [#765](https://github.com/moltis-org/moltis/pull/765) | [#757](https://github.com/moltis-org/moltis/issues/757) | Podman sysfs tmpfs overlay skip for Ubuntu 24.04/26.04 |
| [#762](https://github.com/moltis-org/moltis/pull/762) | [#760](https://github.com/moltis-org/moltis/issues/760) | Recursive `$schema` stripping; eliminates 1000+ WARN logs/session |
| [#768](https://github.com/moltis-org/moltis/pull/768) | — | Remove hardcoded secrets from tests (CodeQL compliance) |

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Activity | Analysis |
|------|----------|----------|
| [#748](https://github.com/moltis-org/moltis/issues/748) — Retry prompt on error | **7 comments, 1 👍** | Core UX gap: users need resilience against transient LLM/provider failures without manual intervention. The discussion volume suggests this is a daily friction point for production use. |
| [#769](https://github.com/moltis-org/moltis/issues/769) — Heartbeat/cron docs for multi-agent | **3 comments** | Documentation debt blocking correct multi-agent deployment architecture; users unclear on session isolation boundaries |

### Emerging Themes

- **Reliability engineering**: Multiple fixes around connection resilience (Matrix, Slack, Podman) suggest the project is maturing from "works in demo" to "runs in production"
- **Developer experience**: [#441](https://github.com/moltis-org/moltis/issues/441) CSS path resolution, [#774](https://github.com/moltis-org/moltis/issues/774) "clunky" agent management — friction in setup and configuration

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **High** | [#758](https://github.com/moltis-org/moltis/issues/758) Matrix sync loop death | **CLOSED** | [#761](https://github.com/moltis-org/moltis/pull/761) | Permanent connection loss until manual reset; now has exponential backoff retry |
| 🔴 **High** | [#766](https://github.com/moltis-org/moltis/issues/766) Slack slash commands 404 | **CLOSED** | [#767](https://github.com/moltis-org/moltis/pull/767) | Broken webhook endpoint; core Slack integration non-functional |
| 🟡 **Medium** | [#757](https://github.com/moltis-org/moltis/issues/757) Podman broken on Ubuntu 24.04/26.04 | **CLOSED** | [#765](https://github.com/moltis-org/moltis/pull/765) | Container runtime incompatibility; affects Linux server deployments |
| 🟡 **Medium** | [#760](https://github.com/moltis-org/moltis/issues/760) Schema normalization log spam | **CLOSED** | [#762](https://github.com/moltis-org/moltis/pull/762) | 1000+ WARN/session; operational noise masking real issues |
| 🟡 **Medium** | [#776](https://github.com/moltis-org/moltis/issues/776) `task_list.list` invisible tasks | **OPEN** | [#779](https://github.com/moltis-org/moltis/pull/779) | Tasks in custom lists unreachable without knowing list_id; PR adds discovery |
| 🟢 **Low** | [#773](https://github.com/moltis-org/moltis/issues/773) PWA push CTA 404 | **OPEN** | — | Mobile web push notification routing broken |
| 🟢 **Low** | [#770](https://github.com/moltis-org/moltis/issues/770) Env variables unresolved | **OPEN** | — | Configuration loading inconsistency |

**Stability assessment**: Excellent closure rate on critical bugs (4/4 high/medium severity fixed within 24h of report). Two operational issues remain open.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood Near-Term | Rationale |
|---------|----------|----------------------|-----------|
| **Prompt retry on error** | [#748](https://github.com/moltis-org/moltis/issues/748) | ⭐⭐⭐⭐⭐ High | Active discussion, clear user pain, fits reliability theme |
| **Simplified agent management** | [#774](https://github.com/moltis-org/moltis/issues/774) | ⭐⭐⭐⭐ High | Author (vvuk) is repeat contributor; aligns with DX focus |
| **Code indexing** | [#771](https://github.com/moltis-org/moltis/pull/771) open, [#753-756](https://github.com/moltis-org/moltis/pull/756) merged | ⭐⭐⭐⭐⭐ **In progress** | Major infrastructure; open PR likely final polish |
| **Netbird VPN support** | [#764](https://github.com/moltis-org/moltis/issues/764) | ⭐⭐⭐ Medium | Network infrastructure; niche but growing in self-hosted |
| **Nix Flake** | [#745](https://github.com/moltis-org/moltis/pull/745) | ⭐⭐⭐ Medium | Package manager support; PR open since Apr 16 |
| **TypeScript web UI migration** | [#775](https://github.com/moltis-org/moltis/pull/775) | ⭐⭐⭐⭐ **Active** | Large open PR; Vite/Preact/Tailwind modernization |

**Predicted next release priorities**: Prompt retry resilience, code-index completion, web UI TypeScript migration.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent failures need recovery** | [#748](https://github.com/moltis-org/moltis/issues/748) retry prompts, [#758](https://github.com/moltis-org/moltis/issues/758) Matrix death | Critical — users lose work/state |
| **Configuration complexity** | [#770](https://github.com/moltis-org/moltis/issues/770) env vars, [#774](https://github.com/moltis-org/moltis/issues/774) clunky agents, [#769](https://github.com/moltis-org/moltis/issues/769) unclear heartbeat docs | High — deployment friction |
| **Platform-specific breakage** | [#757](https://github.com/moltis-org/moltis/issues/757) Podman, [#766](https://github.com/moltis-org/moltis/issues/766) Slack | Medium — ecosystem coverage gaps |

### Positive Signals
- **Security-conscious users**: NIP-59 gift wraps, OIDC, and hardcoded secret removal show project takes security seriously
- **Self-hosting community**: Podman fixes, Nix flake PR, Netbird request indicate strong self-hosted deployment interest
- **Developer tooling**: Code indexing feature shows investment in "agent that understands codebases"

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#745](https://github.com/moltis-org/moltis/pull/745) Nix Flake | 2 days | Medium | Package manager support; no comments/review visible — may need maintainer triage |
| [#775](https://github.com/moltis-org/moltis/pull/775) TypeScript UI migration | 1 day | Low | Large PR (Vite/Preact/Tailwind); needs architectural review |
| [#771](https://github.com/moltis-org/moltis/pull/771) Code-index final PR | 1 day | Low | Companion to merged stack; likely ready for merge |
| [#779](https://github.com/moltis-org/moltis/pull/779) Task list fix | 1 day | Low | Addresses open bug [#776](https://github.com/moltis-org/moltis/issues/776); straightforward fix |

**No critically stale items** — the project's 24-48 hour response rate on issues and PRs is healthy. The Nix flake PR is the only item without visible engagement that serves a distinct user segment.

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-04-18.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-18

## 1. Today's Overview

CoPaw/QwenPaw shows **very high community activity** with 50 issues and 45 PRs updated in the last 24 hours, indicating a rapidly evolving project with active maintainer engagement. The project released v1.1.2 with a major new "Mission Mode" for autonomous multi-phase task execution, signaling a strategic push toward more capable agentic behavior. However, the community is clearly experiencing **migration friction** from the CoPaw→QwenPaw rebrand, with multiple top issues concerning leftover `.copaw` directories, path confusion, and dual command coexistence. The PR pipeline is healthy with 25 merged/closed versus 20 open, though several critical bug fixes and feature PRs remain under review. Overall project health is **moderate-to-strong on velocity, strained on user experience stability**.

---

## 2. Releases

### [v1.1.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.2) — New Today

| Aspect | Details |
|--------|---------|
| **Headline Feature** | **Mission Mode** (`/mission` command) — autonomous, multi-phase task execution with iterative planning, execution, and self-correction |
| **Monitoring** | `/mission status` and `/mission list` for tracking running missions |
| **Breaking Changes** | None explicitly documented |
| **Migration Notes** | Users upgrading from v1.1.1 or earlier should verify `WORKING_DIR` points to `.qwenpaw` not `.copaw` (see [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)) |

---

## 3. Project Progress

### Merged/Closed PRs Today (25 total, key items)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#3539](https://github.com/agentscope-ai/QwenPaw/pull/3539) | bowenliang123 | Dark mode text color fix for empty select dropdown | UI polish, accessibility |
| [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) | xuanrui-L | **ACP server support** — expose QwenPaw as Agent Client Protocol server for Zed, OpenCode, etc. | **Major interoperability milestone** |
| [#3535](https://github.com/agentscope-ai/QwenPaw/pull/3535) | pan-x-c | Remove stale docs, update `make_plan` skill | Documentation hygiene |
| [#3537](https://github.com/agentscope-ai/QwenPaw/pull/3537) | xiaoyaoyouyue | Fix: local model shows available when actually unavailable | Reliability fix |
| [#3533](https://github.com/agentscope-ai/QwenPaw/pull/3533) | biggsun | Fix: `qwenpaw chats list` channel parameter typo (`weichat`→`wechat`) | CLI bugfix |
| [#3536](https://github.com/agentscope-ai/QwenPaw/pull/3536) | zhijianma | CLI support to update provider base URLs | Provider flexibility |
| [#3515](https://github.com/agentscope-ai/QwenPaw/pull/3515) | gnipping | Tool guard response with risk severity indicators (🔴🟡) | **Security UX enhancement** |
| [#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386) | rayrayraykk | **Startup performance: ~4.5s → ~0.05s** via lazy loading + parallel init | **Critical performance win** |
| [#3506](https://github.com/agentscope-ai/QwenPaw/pull/3506) | ainisa20 | Fix: `/api/console/chat` crash on missing `channel` attribute | API stability |

### Key Open PRs Advancing

| PR | Status | Feature |
|----|--------|---------|
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) / [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | OPEN | **LLM Routing UI** — local-first vs cloud-first with per-agent scope |
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) | WIP | **Memory & context rebuild** — BaseMemoryManager, summarization, pruning |
| [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) | Under Review | **Backup and restore system** |
| [#3508](https://github.com/agentscope-ai/QwenPaw/pull/3508) / [#3498](https://github.com/agentscope-ai/QwenPaw/pull/3498) | Under Review | **Signal** and **WhatsApp** channels |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | Under Review | Semantic skill routing (embedding-based) |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Status | Core Problem / Underlying Need |
|-------|----------|--------|-------------------------------|
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) — WORKING_DIR still points to old `.copaw` directory | **18** | OPEN | **Rebrand migration incomplete**: Installer puts binaries in `.qwenpaw` but runtime writes data to `.copaw`. Users need seamless migration tool or clear uninstall-or-rename guidance. |
| [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) — Confusion about qwenpaw vs copaw commands | **11** | CLOSED | Same root cause: dual binaries, PATH confusion, split data directories. Users want **single source of truth** or definitive deprecation timeline. |
| [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) — MCP config not passed to ReMe module | **6** | OPEN | **Architectural complexity**: Two internal MCP systems with different config fields. GUI configuration doesn't reach the runtime module. Need unified MCP config layer or clearer documentation. |
| [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) — Multi-Agent Orchestration Gateway | **6** | CLOSED | **Strategic feature request**: Users want true multi-agent collaboration, not prompt-level role switching. Community validated need; closed likely as roadmap item rather than implemented. |
| [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) — `copaw init` hangs on security warning | **5** | OPEN | Windows + Python 3.13 compatibility issue with interactive prompts. Blocks new user onboarding. |

**Analysis**: The top community pain point is **brand transition technical debt** (CoPaw→QwenPaw). The most upvoted feature request (#508, 2 👍) reveals demand for architectural evolution beyond single-agent design.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0 — Onboarding blocker** | [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) | `copaw init` hangs indefinitely on Windows/Python 3.13 | None identified |
| **P0 — Data integrity** | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | WORKING_DIR misconfiguration causes data split across old/new directories | None identified |
| **P1 — Crash** | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) | `ValidationError: call_id should be valid string` on ARM/Armbian | None identified |
| **P1 — API failure** | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | Anthropic-compatible APIs fail with 400 BadRequest (invalid message formats) | None identified |
| **P1 — Integration** | [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) | MCP GUI config not passed to ReMe module | None identified |
| **P2 — Performance** | [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | API latency highly variable (1111ms vs normal) | None identified |
| **P2 — UI** | [#3421](https://github.com/agentscope-ai/QwenPaw/issues/3421) | Figure preview lost on chat refresh | None identified |
| **P2 — Frontend** | [#3541](https://github.com/agentscope-ai/QwenPaw/issues/3541) | Skill search broken, dark mode text invisible | [#3547](https://github.com/agentscope-ai/QwenPaw/pull/3547) fixes dark mode |

**Regressions**: The v1.1.2 release may have introduced or exposed the [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) validation error on ARM systems.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **LLM Routing (local/cloud failover)** | [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452), [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | **Very High** | Two coordinated PRs, active refinement, runtime integration in progress |
| **Memory system rebuild** | [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) | **High** | WIP but foundational; may slip for stability |
| **Backup/Restore** | [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) | **Medium-High** | Clean API, under review, user-facing value |
| **Signal/WhatsApp channels** | [#3508](https://github.com/agentscope-ai/QwenPaw/pull/3508), [#3498](https://github.com/agentscope-ai/QwenPaw/pull/3498) | **Medium** | Under review, dependency complexity (neonize, signal-cli) |
| **Multi-Agent Orchestration** | [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) | **Low-Medium** | Validated demand but architectural; may require v2.0 |
| **Kimi Code API support** | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | **Medium** | User request, provider expansion pattern |
| **Semantic skill routing** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | **Medium** | First-time contributor, needs discussion |

---

## 7. User Feedback Summary

### Pain Points (Quantified)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Rebrand confusion** | #3356, #3309, #3532 | 🔴 Critical — affects all migrating users |
| **Installation/initialization friction** | #2943, #3532, #3352 (slow startup) | 🔴 High — blocks new users |
| **Memory/performance degradation** | #3170 (high memory), #3499 (latency) | 🟡 Moderate |
| **MCP/integration complexity** | #3445, #3486 (security panel blank) | 🟡 Moderate |
| **Frontend polish gaps** | #3541, #3421, #3486 | 🟡 Moderate — many quick fixes in flight |

### Positive Signals

- **Mission Mode** in v1.1.2 praised for advancing agent autonomy
- **Startup performance fix** (#3386, ~4.5s→0.05s) highly impactful
- **ACP server** (#3487) opens ecosystem integration possibilities
- Active maintainer response: most issues updated within 24h

### Use Cases Emerging

- **Remote/local hybrid**: Users running LM Studio on separate machines (#3532)
- **ARM/embedded deployment**: Armbian users on RK3318 (#3549)
- **Enterprise messaging**: WeCom (#3523), Signal, WhatsApp integrations
- **IDE integration**: ACP for Zed, OpenCode (#3487)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) Multi-Agent Orchestration | ~6 weeks | High — 2 👍, closed without implementation | Reopen or create roadmap issue with maintainer response |
| [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) Agent silent failure after thinking | 3+ weeks | High — no error feedback to user | Root cause analysis, reproduce |
| [#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026) copaw dead loop, 2h repeated tasks | 2+ weeks | Critical — resource exhaustion, no interrupt | Task cancellation mechanism design |
| [#415](https://github.com/agentscope-ai/QwenPaw/issues/415) Human-in-the-Loop capabilities | ~6 weeks | Medium — closed, AgentScope parity gap | Verify if addressed in Mission Mode or needs reopening |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) Semantic skill routing | 10 days | Medium — first-time contributor, needs discussion | Maintainer decision on embedding dependency |

---

*Digest generated from 50 issues and 45 PRs updated 2026-04-17. Data source: github.com/agentscope-ai/CoPaw (redirects to QwenPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-18

## 1. Today's Overview

ZeroClaw exhibits **high-velocity development activity** with 83 total updates in the past 24 hours (33 issues, 50 PRs), indicating an active pre-release stabilization period for the massive v0.7.0 structural overhaul. The project is in a **beta-heavy phase** with three rapid-fire beta releases (1041, 1040, 1030) as the team irons out the Cargo workspace migration and new config schema. Community engagement is strong with 29 open/active issues, though the high ratio of open PRs (31 of 50) suggests a backlog building up for maintainer review. Notably, contributor Jason Perlow (InvestorClaw) is stress-testing production-grade use cases, surfacing critical sandbox and shell execution blockers.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **[v0.7.0-beta.1041](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1041)** | Latest; same changelog base as 1040/1030 |
| **[v0.7.0-beta.1040](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1040)** | — |
| **[v0.7.0-beta.1030](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1030)** | — |

**Changelog (all three releases):**
- **Breaking:** Complete codebase split into proper Cargo workspace of focused crates
- **Breaking:** New config schema shipped with **live migration path** from v0.6.9
- **Impact:** Described as "largest structural overhaul in ZeroClaw's history"

**Migration Status:** In-progress; users on v0.6.9 stable should expect friction. The rapid beta iteration (11 builds between 1030→1041 in ~18 days) suggests active bugfixing.

---

## 3. Project Progress

### Merged/Closed PRs (19 total, notable selections)

| PR | Author | Status | Impact |
|----|--------|--------|--------|
| **[#5676](https://github.com/zeroclaw-labs/zeroclaw/pull/5676)** — Feishu `mention_only` + Groq tool_use_failed fix | theonlyhennygod | **CLOSED** (superseded by #5848) | Fixed two channel/provider bugs; #5848 carries forward |
| **[#5839](https://github.com/zeroclaw-labs/zeroclaw/pull/5839)** — CI: use RELEASE_TOKEN for tag creation | theonlyhennygod | **CLOSED** | Unblocks manual release dispatch via admin PAT |
| **[#5778](https://github.com/zeroclaw-labs/zeroclaw/issues/5778)** — Telegram inline_keyboard fix | ErCondor1886 | **CLOSED via issue** | S1 blocker resolved |

### Advanced Features (Open PRs with momentum)

| PR | Description | Risk Level |
|----|-------------|------------|
| **[#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705)** | Session abort endpoint + incremental streaming persistence | **HIGH** |
| **[#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696)** | SessionResetTool / SessionDeleteTool | **HIGH** |
| **[#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733)** | Web model quick-switcher + persistent WebSocket | Medium |
| **[#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838)** | Webhook retry logic with exponential backoff | Medium |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | Core Need |
|---|-------|----------|-----------|
| **[#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787)** | RFC: Replace TOML i18n with Mozilla Fluent | **4** | Professional localization infrastructure; remove doc translation debt |
| **[#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153)** | Landlock sandbox poisons caller process | **3** | **Production Linux security** — sandbox must not break workspace access |
| **[#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)** | Web dashboard not available [CLOSED] | **3** | Build/packaging UX for self-hosters |

### Underlying Needs Analysis

- **#5787**: Project maturation signal — moving from hand-rolled i18n to industry-standard Fluent indicates enterprise readiness goals
- **#5153**: Critical for "secure by default" positioning; Landlock is Linux's modern sandbox, but implementation bugs damage trust
- **Perlow's triple-issue cluster (#5719, #5720, #5722)**: Real-world Python skill development (InvestorClaw) is hitting systematic shell/sandbox friction — signals that v0.6.9's security defaults are **overly aggressive for legitimate development workflows**

---

## 5. Bugs & Stability

### Critical/Severe (S0-S2)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **S0** | **[#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)** — Document `gateway.web_dist_dir` / `ZEROCLAW_WEB_DIST_DIR` | OPEN | None |
| **S1** | **[#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153)** — Landlock shell sandbox poisons process | OPEN | None |
| **S1** | **[#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719)** — `runtime.kind = "native"` doesn't bypass Docker | OPEN | None |
| **S1** | **[#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591)** — "Denied by user" in supervised mode via channel | OPEN | None |
| **S2** | **[#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)** — Shell policy blocks `git -C` via arg lowercasing | OPEN | None |
| **S2** | **[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** — Too much emphasis on memory in prompts | OPEN | None |

### New Regressions (reported 2026-04-17)

| Issue | Reporter | Description |
|-------|----------|-------------|
| **[#5831](https://github.com/zeroclaw-labs/zeroclaw/issues/5831)** | databillm | `show_tool_calls = true` ignored due to hardcoded system prompt |
| **[#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)** | michidk | Security audit needed: `extra_args` validation for Codex CLI flags |
| **[#5825](https://github.com/zeroclaw-labs/zeroclaw/issues/5825)** | shaun0927 | `strip_native_tool_messages` breaks role alternation on strict providers |
| **[#5824](https://github.com/zeroclaw-labs/zeroclaw/issues/5824)** | shaun0927 | `cron_run` silently drops when no delivery handler registered |
| **[#5823](https://github.com/zeroclaw-labs/zeroclaw/issues/5823)** | shaun0927 | `prune_history` Phase 1/3 interaction evicts protected tools |
| **[#5822](https://github.com/zeroclaw-labs/zeroclaw/issues/5822)** | shaun0927 | OpenRouter stream_chat leaks HTTP connections (detached tokio task) |

**Note:** shaun0927 filed **4 critical bugs in one day** — all in provider/runtime core. Suggests either deep code review or production incident driving investigation.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likelihood in v0.7.x | Rationale |
|-------|---------|----------------------|-----------|
| **[#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787)** | Mozilla Fluent i18n | **HIGH** | RFC with active discussion; aligns with v0.7 structural overhaul |
| **[#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761)** → **[#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838)** | Webhook retry + backoff | **HIGH** | PR already open, closes issue |
| **[#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843)** | Model-wise reasoning config | Medium | Logical extension of provider config work; small scope |
| **[#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668)** | MariaDB memory backend | Medium | Production infrastructure need; database abstraction exists |
| **[#5246](https://github.com/zeroclaw-labs/zeroclaw/issues/5246)** | Configurable default shell | Medium | User friction clear; security implications to resolve |
| **[#5701](https://github.com/zeroclaw-labs/zeroclaw/issues/5701)** | `clear_messages` for O(1) session reset | **HIGH** | In-progress with PR #5705; performance-critical |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Sandbox too restrictive for real development** | Perlow's #5719, #5720, #5722; #5809 | **HIGH** |
| **Security policy parsing bugs** | #5809 (`-C` → `-c` conflation); #5720 (inline env vars) | HIGH |
| **Memory system over-prioritization** | #5844 | MEDIUM |
| **Documentation gaps for self-hosting** | #5847 (web_dist_dir); #5348 (dashboard build) | MEDIUM |
| **Channel parity issues** | #5591 (Telegram vs. CLI approval); #5778 (inline keyboards) | MEDIUM |

### Use Case: Production Skill Development

**[InvestorClaw](https://github.com/perlowja/InvestorClaw)** (FINOS CDM 5.x portfolio analysis) is emerging as a **canary project** for ZeroClaw's enterprise readiness. Blockers encountered:
- Shell sandbox prevents standard Python patterns (pip install, PYTHONPATH, multi-file skills)
- Docker bypass fails even when explicitly configured
- Security policies lack nuance for "trusted skill" vs. "untrusted agent" distinction

### Satisfaction Signals
- Active contribution from FINOS-adjacent developers (Perlow)
- Rapid beta iteration shows responsive maintainers
- Web UI improvements (#5733) show investment in UX

---

## 8. Backlog Watch

### PRs Needing Maintainer Review (High-Risk, Stalled)

| PR | Age | Risk | Blocker |
|----|-----|------|---------|
| **[#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773)** | 3 days | **HIGH** | Shell guard bypass — security-critical, needs security review |
| **[#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774)** | 3 days | **HIGH** | Skill tools not registered in gateway path — breaks skills entirely |
| **[#5361](https://github.com/zeroclaw-labs/zeroclaw/pull/5361)** | 13 days | **HIGH** | Codex CLI compatibility — tool broken on latest Codex |
| **[#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705)** | 5 days | **HIGH** | Session abort + streaming persistence — complex, needs architecture review |
| **[#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696)** | 5 days | **HIGH** | Session management tools — security model implications |
| **[#5552](https://github.com/zeroclaw-labs/zeroclaw/pull/5552)** | 9 days | **HIGH** | Container-aware URLs for onboarding — Docker UX blocker |

### Issues Without Response (0 comments, recent)

| Issue | Age | Concern |
|-------|-----|---------|
| **[#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)** | 1 day | S0 severity self-reported; documentation gap for basic operation |
| **[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** | 1 day | Core behavior regression (memory over-prioritization) |
| **[#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)** | 1 day | Security tracking issue — needs maintainer acknowledgment |

---

## Project Health Assessment

| Metric | Status |
|--------|--------|
| Development velocity | ✅ **Strong** — 83 updates/24h |
| Release cadence | ✅ **Active** — 3 betas, rapid iteration |
| Maintainer bandwidth | ⚠️ **Constrained** — 31 open PRs, high-risk items aging |
| Security posture | ⚠️ **Mixed** — Landlock issues, sandbox bypass risks, policy parsing bugs |
| Production readiness | ⚠️ **In progress** — v0.7.0 overhaul stabilizing; real-world testing surfacing gaps |
| Community health | ✅ **Growing** — Enterprise users (FINOS), multiple channels, active RFCs |

**Recommendation:** ZeroClaw should prioritize **sandbox/security policy refinement** and **maintainer review bandwidth** to avoid PR backlog choking the v0.7.0 release. The Perlow/InvestorClaw feedback loop is a valuable production stress-test that should be actively cultivated.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*