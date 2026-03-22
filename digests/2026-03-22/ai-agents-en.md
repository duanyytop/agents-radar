# OpenClaw Ecosystem Digest 2026-03-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-22 00:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-22

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, fast-moving project with substantial community engagement. The 82% open issue rate (408/500) and 72% open PR rate (361/500) suggest either a recent surge in contributions or potential backlog pressure. **No new releases** were published today, with the project operating on a continuous development model. The maintainer team appears highly active with multiple merged PRs addressing critical stability issues, while community interest remains strong across internationalization, enterprise integrations (DingTalk), and model provider expansions (MiniMax, Gemini).

---

## 2. Releases

**No new releases** — OpenClaw remains on version 2026.3.13 (released 2026-03-13) with active development toward next version.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#51924](https://github.com/openclaw/openclaw/pull/51924) | Multi-session selection and deletion in Web UI | UX improvement for session management |
| [#51912](https://github.com/openclaw/openclaw/pull/51912) | CI optimization — remove redundant lanes, fix Bun deprecation | Developer experience, build reliability |
| [#51939](https://github.com/openclaw/openclaw/pull/51939) | Fix plugin SDK relative extension boundary escapes across **18 channels** | Critical architecture fix preventing cross-package import violations |
| [#51920](https://github.com/openclaw/openclaw/pull/51920) | Doctor command flow extraction (shared formatters) | Code maintainability |
| [#51938](https://github.com/openclaw/openclaw/pull/51938) | Doctor command legacy/cleanup steps extraction | Code maintainability |
| [#51652](https://github.com/openclaw/openclaw/pull/51652) | Website SSL connectivity fix (UK ISP issue) | Infrastructure reliability |

### Active Development Areas

- **Memory system hardening**: PR [#49220](https://github.com/openclaw/openclaw/pull/49220) strips injected metadata before session indexing
- **Signal channel**: PR [#31078](https://github.com/openclaw/openclaw/pull/31078) implements instant ACK reactions
- **Telegram reliability**: PR [#42485](https://github.com/openclaw/openclaw/pull/42485) restores 429 retry behavior
- **Rate limiting**: PR [#50930](https://github.com/openclaw/openclaw/pull/50930) fixes mid-turn 429 silent failures
- **Security hardening**: Multiple PRs by @ernestodeoliveira sanitizing errors before channel posting ([#51344](https://github.com/openclaw/openclaw/pull/51344), [#51323](https://github.com/openclaw/openclaw/pull/51323), [#51338](https://github.com/openclaw/openclaw/pull/51338))

---

## 4. Community Hot Topics

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 112 | 4 | **i18n/Localization Support** | Global accessibility; maintainers explicitly lack bandwidth, creating tension between community demand and resource constraints |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 75 | 26 | **DingTalk first-install channel** | Enterprise China market penetration; feature exists but not exposed in UX |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) | 23 | 2 | **Kimi web_search 401 auth error** | Chinese model provider integration reliability |
| [#30177](https://github.com/openclaw/openclaw/issues/30177) | 18 | 2 | WhatsApp announce queue delivery | **CLOSED** — Sub-agent messaging reliability |
| [#50234](https://github.com/openclaw/openclaw/issues/50234) | 11 | 0 | **MiniMax M2.7 Support** | Latest model provider coverage (PR [#51514](https://github.com/openclaw/openclaw/pull/51514) in progress) |

**Analysis**: The 26 👍 on DingTalk vs. 4 on i18n suggests **enterprise/China-market features outweigh global accessibility** in user priorities. The Kimi/MiniMax activity indicates strong APAC model provider demand.

---

## 5. Bugs & Stability

### Critical/Severe

| Issue | Severity | Status | Fix PR | Description |
|:---|:---:|:---:|:---|:---|
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 🔴 **CRITICAL** | OPEN | None | **Hardcoded path `/Users/wangtao`** merged to production — workspace hijacking |
| [#51593](https://github.com/openclaw/openclaw/issues/51593) | 🔴 **CRITICAL** | OPEN | None | HTTP 400 "tool call id duplicated" crash with moonshot/kimi-k2.5 in WhatsApp groups |
| [#49163](https://github.com/openclaw/openclaw/issues/49163) | 🔴 **CRITICAL** | OPEN | None | Crash accessing remote browser — unhandled promise rejection |
| [#49157](https://github.com/openclaw/openclaw/issues/49157) | 🟠 **HIGH** | OPEN | None | Session write locks leak causing >30min deadlocks |
| [#51887](https://github.com/openclaw/openclaw/issues/51887) | 🟠 **HIGH** | OPEN | None | Gateway-client/TUI loses `operator.read` scope — breaks `openclaw status --all` |

### Regressions in 2026.3.13

| Issue | Regression Type | Notes |
|:---|:---|:---|
| [#48479](https://github.com/openclaw/openclaw/issues/48479) | google-vertex auth (ADC→API-key) | Affects Gemini 3.x preview models |
| [#51558](https://github.com/openclaw/openclaw/issues/51558) | WhatsApp Web listener accessibility | Running but inaccessible to message handler |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | `clearUnboundScopes` strips operator scopes | Breaks backend clients using token auth |
| [#50438](https://github.com/openclaw/openclaw/issues/50438) | **CLOSED** | devices commands fail with "gateway closed" |

### Stability Fixes In Progress

- PR [#51835](https://github.com/openclaw/openclaw/pull/51835): Discord Message Content Intent graceful degradation
- PR [#51883](https://github.com/openclaw/openclaw/pull/51883): Discord large attachment fetch failure handling
- PR [#51751](https://github.com/openclaw/openclaw/pull/51751): Missing ffprobe graceful handling

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal Strength | Predicted Version | Rationale |
|:---|:---:|:---:|:---|
| [#50234](https://github.com/openclaw/openclaw/issues/50234) MiniMax M2.7 | ⭐⭐⭐⭐⭐ | **2026.3.14+** | PR [#51514](https://github.com/openclaw/openclaw/pull/51514) actively implements XML tool call promotion |
| [#51372](https://github.com/openclaw/openclaw/issues/51372) Gemini Context Caching | ⭐⭐⭐⭐⭐ | **2026.3.14+** | Cost optimization critical for enterprise; parity with Anthropic `cacheRetention` |
| [#49246](https://github.com/openclaw/openclaw/issues/49246) STT/TTS Verbal Dialogue | ⭐⭐⭐⭐☆ | **2026.Q2** | Home Assistant Voice integration demand; hardware exists |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) DingTalk first-install | ⭐⭐⭐⭐☆ | **2026.3.14** | Feature complete, UX-only change; high community demand (26 👍) |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent Identity & Trust (ERC-8004) | ⭐⭐⭐☆☆ | **2026.H2** | Speculative; crypto-adjacent, needs architectural review |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) Community Skill Development/ClawHub | ⭐⭐⭐⭐☆ | **Ongoing** | Ecosystem growth critical; "promise vs practice gap" acknowledged |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Configuration fragility** | [#51429](https://github.com/openclaw/openclaw/issues/51429) hardcoded path, [#24008](https://github.com/openclaw/openclaw/issues/24008) silent config resets, [#23307](https://github.com/openclaw/openclaw/issues/23307) env var resolution to plaintext | 🔴 High |
| **Vision/media handling broken** | [#23452](https://github.com/openclaw/openclaw/issues/23452) systemic vision issues, [#14231](https://github.com/openclaw/openclaw/issues/14231) document attachments brick sessions, [#51857](https://github.com/openclaw/openclaw/issues/51857) "Blind Spot Problem" | 🔴 High |
| **WhatsApp reliability** | [#30177](https://github.com/openclaw/openclaw/issues/30177), [#51558](https://github.com/openclaw/openclaw/issues/51558) listener issues | 🟠 Medium |
| **ARM64/embedded support** | [#23909](https://github.com/openclaw/openclaw/issues/23909), [#23790](https://github.com/openclaw/openclaw/issues/23790) Raspberry Pi build failures | 🟠 Medium |
| **Sub-agent orchestration** | [#44925](https://github.com/openclaw/openclaw/issues/44925) silent completion loss, [#37869](https://github.com/openclaw/openclaw/issues/37869) ACP session loops | 🟠 Medium |

### Positive Signals

- Strong multi-channel support (18+ channels maintained)
- Active security hardening (error sanitization PRs)
- Memory system improvements (compaction, refresh tools)
- Community skill ecosystem emerging (ClawHub concept)

---

## 8. Backlog Watch

### Stale Critical Issues (>30 days, high impact)

| Issue | Age | Problem | Action Needed |
|:---|:---:|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n | ~2 months | 112 comments, maintainer bandwidth constraint | Decision: accept community PRs with maintenance disclaimer, or defer to 2026.H2 |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) `memoryFlush` unreliable | ~1.5 months | Every-other-cycle firing bug | Code review of `memory-flush.ts:100` dedup logic |
| [#23452](https://github.com/openclaw/openclaw/issues/23452) Vision broken across channels | ~1 month | Systemic media handling | Architectural review; may need protocol-level fix |
| [#23909](https://github.com/openclaw/openclaw/issues/23909) Raspberry Pi ARM64 | ~1 month | `@discordjs/opus` NEON build | Prebuilt binary or alternative codec |
| [#20451](https://github.com/openclaw/openclaw/issues/20451) Per-agent TTS voice | ~1 month | Persona differentiation | Low complexity, good first issue |

### PRs Needing Review

| PR | Description | Risk if Stalled |
|:---|:---|:---|
| [#43497](https://github.com/openclaw/openclaw/pull/43497) | Subagent recovery after gateway restart | Data loss in distributed deployments |
| [#43498](https://github.com/openclaw/openclaw/pull/43498) | `memory_refresh` atomic replace | Data-loss window in current implementation |
| [#31078](https://github.com/openclaw/openclaw/pull/31078) | Signal ACK reactions | Channel parity gap |

---

**Project Health Assessment**: 🟡 **Active but strained** — High velocity with quality control gaps (hardcoded paths, regressions in releases). Strong maintainer response to security issues, but architectural debt accumulating in configuration system and media handling.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-22

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem shows **intense development velocity** across 11 tracked projects, with aggregate activity exceeding 1,200 GitHub events in 24 hours. The space is bifurcating between **mature, multi-channel platforms** (OpenClaw, IronClaw, LobsterAI) optimizing for enterprise deployments and **lightweight, specialized tools** (TinyClaw, Moltis) serving specific use cases. A critical mass of projects are converging on **multi-agent orchestration**, **voice interfaces**, and **local-first AI** as competitive differentiators, while shared pain points around **LLM provider fragility**, **configuration complexity**, and **data persistence** indicate ecosystem-wide maturity gaps.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | None (2026.3.13) | 🟡 Strained | High velocity, quality gaps |
| **NanoBot** | 17 | 52 | None | 🟢 Healthy | Cost optimization focus |
| **Zeroclaw** | 32 | 50 | **10** (v0.5.5–v0.5.6) | 🟢 Active | Rapid iteration, A2A protocol |
| **PicoClaw** | 27 | 34 | Nightly (v0.2.3) | 🟢 Active | Voice/TTS priority |
| **NanoClaw** | 28 | 37 | None | 🟡 Strained | Container reliability fixes |
| **NullClaw** | 8 | 50 | **v2026.3.21** | 🟢 Robust | WASM3 runtime, rapid response |
| **IronClaw** | 13 | 50 | None | 🟡 Bottlenecked | 43 open PRs, review backlog |
| **LobsterAI** | 16 | 29 | **2026.3.21** | 🟡 Moderate | Security audit backlog |
| **TinyClaw** | 0 | 2 | None | 🟢 Stable | Maintenance mode |
| **Moltis** | 0 | 2 | None | 🟢 Quiet | Platform compatibility |
| **CoPaw** | 50 | 14 | None | 🟡 Strained | v0.1.0 migration trauma |
| **EasyClaw** | 0 | 0 | **3** (v1.7.3–v1.7.5) | 🟢 Stable | Distribution fixes only |
| **ZeptoClaw** | — | — | — | ⚪ Inactive | No activity |

*Health Score: 🟢 Healthy/Active | 🟡 Strained/Moderate | 🔴 Critical | ⚪ Inactive*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10–50× higher volume than next active project |
| **Channel breadth** | 18+ maintained channels | IronClaw (~6), NanoBot (~5), others fewer |
| **Enterprise penetration** | DingTalk, MiniMax, Gemini integrations | Leading APAC enterprise coverage |
| **Security investment** | Active error sanitization, hardening PRs | Comparable to IronClaw, ahead of smaller projects |

### Technical Approach Differences
- **OpenClaw**: Continuous deployment, plugin SDK architecture, heavy TypeScript/Node.js ecosystem
- **Zeroclaw**: Rust-based, safety-critical design, explicit security/utility tension management
- **NullClaw**: Zig/WASM3 runtime, minimal resource footprint, embedded-friendly
- **IronClaw**: WASM sandboxing, NEAR AI TEE integration, crypto-adjacent identity

### Community Size
OpenClaw operates at **ecosystem-leading scale** with 112-comment i18n threads and 26👍 enterprise feature requests. Only CoPaw matches raw issue volume (50), but with lower PR velocity. OpenClaw's 82% open issue rate indicates **scale-driven backlog pressure** unmatched by peers.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Multi-agent orchestration** | OpenClaw, IronClaw, CoPaw, Zeroclaw | CoPaw #1952 workflows; IronClaw #84 "agent system advanced features"; Zeroclaw A2A #4166 |
| **Voice/TTS/ASR** | PicoClaw, Zeroclaw, NanoBot, NanoClaw | PicoClaw #1648 (17 comments, top demand); Zeroclaw wake detection #4191; NanoBot STT/TTS #49246 |
| **Local-first / edge deployment** | Zeroclaw, NullClaw, NanoClaw, PicoClaw | NullClaw WASM3 default; Zeroclaw Ollama `:cloud` tag fixes; NanoClaw ARM64 struggles |
| **Cost control / token budgeting** | NanoBot, OpenClaw, Zeroclaw, NullClaw | NanoBot #2317 context budget; OpenClaw Gemini caching #51372; Zeroclaw cost tracking regression #3679 |
| **LLM provider reliability** | OpenClaw, IronClaw, LobsterAI, CoPaw | OpenClaw #51593 "tool call id duplicated"; IronClaw #1520 Qwen3.5 405; LobsterAI #634 Gemini 400; CoPaw #2033 "Corrupted thought signature" |
| **Configuration UX simplification** | NanoBot, OpenClaw, NanoClaw, CoPaw | NanoBot webUI popularity (#1922); OpenClaw "silent config resets" (#24008); CoPaw "skill system confusion" (#2023) |

---

## 5. Differentiation Analysis

| Project | Core Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Channel ecosystem breadth, enterprise APAC | Multi-channel deployers, integrators | Plugin SDK, continuous deploy |
| **Zeroclaw** | Security/utility explicit tradeoff, A2A protocol | Security-conscious, local-first users | Rust, granular permission tiers |
| **NullClaw** | Minimal runtime, WASM3, rapid bug response | Embedded, resource-constrained | Zig, interpreter-based |
| **IronClaw** | WASM sandboxing, NEAR AI TEE, crypto identity | Web3, verifiable compute | WASM + blockchain attestation |
| **LobsterAI** | IDE-like "Cowork" experience, IM integration | Developer-centric, China enterprise | Electron, structured composer |
| **NanoBot** | Cost optimization, vision/LLM decoupling | Budget-conscious, multimodal | Per-session locks, token estimation |
| **PicoClaw** | Browser automation, hardware-adjacent (Sipeed) | IoT/edge, web scraping | Chrome CDP integration |
| **CoPaw** | Multi-agent workflows, academic roots | Research, complex task automation | Async Python, workflow API |
| **NanoClaw** | Container-native, macOS ecosystem | Apple-centric developers | Swift/Apple framework integration |
| **TinyClaw/Moltis** | Minimal scope, reliability-focused | Single-purpose deployments | Reduced surface area |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Daily Releases/High Velocity)
| Project | Evidence | Risk |
|:---|:---|:---|
| Zeroclaw | 10 releases, v0.5.5→v0.5.6 in 24h | Feature flag complexity |
| NullClaw | v2026.3.21 release, 50 PRs, same-day fixes | Windows bug #665 unassigned |
| LobsterAI | 2026.3.21 release, security audit influx | 8 critical issues from @BucleLiu unaddressed |

### Tier 2: Active Development (No Releases, High PR Velocity)
| Project | Evidence | Risk |
|:---|:---|:---|
| OpenClaw | 500 PRs, security hardening | 82% open issue rate, hardcoded path #51429 |
| IronClaw | 50 PRs, OAuth security fix | 43 open PRs, review bottleneck |
| NanoBot | 52 PRs, vision decoupling | Ollama silent failures #2293 |
| PicoClaw | 34 PRs, browser automation | Config refactor #1352 stalled 11 days |
| NanoClaw | 37 PRs, crash resilience | Skill branch CI failures (15+ issues) |

### Tier 3: Stabilization/Maintenance Mode
| Project | Evidence | Trajectory |
|:---|:---|:---|
| CoPaw | v0.1.0.post1, migration trauma | Recovery from breaking release |
| TinyClaw | 2 PRs, zero issues, Telegram fix | Stable, limited scope |
| Moltis | 2 PRs, Windows/Nix fixes | Quiet, infrastructure focus |
| EasyClaw | 3 identical releases, Gatekeeper docs | Distribution-only attention |

### Tier 4: Inactive
| Project | Evidence |
|:---|:---|
| ZeptoClaw | Zero activity |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **A2A protocol emergence** | Zeroclaw #4166, OpenClaw sub-agent discussions, IronClaw multi-agent #84 | Implement A2A-compatible interfaces; cross-framework agent communication becoming standard |
| **Voice as table stakes** | PicoClaw #1648 (top issue), Zeroclaw wake detection, NanoBot verbal dialogue | Plan TTS/ASR infrastructure; Discord/IM voice modes expected |
| **Cost transparency demand** | NanoBot token estimation, Zeroclaw cost tracking regression, OpenClaw context caching | Build usage dashboards; users reject opaque LLM spend |
| **Local LLM fragility** | NanoBot Ollama #2293, Zeroclaw `:cloud` routing, OpenClaw local model issues | Test local provider paths rigorously; "works with OpenAI" insufficient |
| **Security/utility tension** | Zeroclaw #1478 "除了安全,什么功能也没有" (44 comments) | Offer granular permission tiers, not binary secure/insecure modes |
| **Configuration as barrier** | NanoBot webUI popularity, OpenClaw "silent resets", CoPaw YAML confusion | Invest in visual/GUI configuration; JSON/YAML friction limits adoption |
| **Data loss anxiety** | CoPaw v0.1.0 trauma, LobsterAI migration #622, NanoClaw crash recovery | Implement automatic backup/restore; migration tooling is competitive advantage |
| **Windows as second-class** | Multiple projects with Windows-specific bugs (IronClaw #1538, Moltis #436, CoPaw encoding issues) | Prioritize Windows CI; enterprise adoption requires parity |

### Strategic Implications

1. **Multi-channel is commoditizing** — 18+ channels (OpenClaw) no longer differentiates; *reliability* per channel does
2. **Local-first is accelerating** — WASM runtimes (NullClaw), edge TTS (Zeroclaw), ARM64 support (PicoClaw) indicate hardware diversification
3. **Agent-to-agent standards converging** — A2A protocol adoption suggests interoperability will replace walled gardens
4. **Cost control becoming hygiene** — Token estimation, context budgeting, caching are now baseline expectations, not premium features

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-22

## 1. Today's Overview

NanoBot shows **high development velocity** with 52 PRs and 17 issues updated in the last 24 hours, though no new release was cut. The project is actively addressing core stability issues around tool-loop costs, session concurrency, and channel media handling while expanding platform support. Community contributions remain strong with third-party tools like [nanobot-webui](https://github.com/Good0007/nanobot-webui) gaining traction. The maintainer team appears focused on performance optimization and enterprise channel integrations (QQ, WeCom, Teams, DingTalk), suggesting maturation toward production deployments.

---

## 2. Releases

**None** — No new releases published today. Last activity suggests ongoing work toward a future version with significant architectural changes.

---

## 3. Project Progress

### Merged/Closed PRs Today (19 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#398](https://github.com/HKUDS/nanobot/pull/398) | Configurable web search providers (Brave, DuckDuckGo, Tavily, SearXNG) | **Major UX improvement** — users can now choose privacy-friendly or enterprise search backends |
| [#2338](https://github.com/HKUDS/nanobot/pull/2338) | Unify `process_direct()` to return `OutboundMessage` | Code quality — eliminates dual-API confusion in CLI |
| [#1985](https://github.com/HKUDS/nanobot/pull/1985) | Add `/status` slash command for runtime diagnostics | **Operational visibility** — no more SSH/log diving for health checks |
| [#2336](https://github.com/HKUDS/nanobot/pull/2336) | Project analysis (closed, likely automated) | — |
| [#2215](https://github.com/HKUDS/nanobot/pull/2215) | Deduplicate progress messages with synthetic ack pattern | **UX polish** — reduces repetitive "thinking..." spam |
| [#2277](https://github.com/HKUDS/nanobot/pull/2277) | Count image tokens in prompt estimation | **Cost control** — prevents budget surprises with vision inputs |
| [#2333](https://github.com/HKUDS/nanobot/pull/2333) | Content-aware synthetic ack for progress deduplication | Refinement of #2215 with fuzzy matching |

### Key Architectural Advances
- **Vision/LLM decoupling**: PR [#2340](https://github.com/HKUDS/nanobot/pull/2340) introduces dedicated vision provider routing — foundational for multimodal deployments
- **Concurrency scaling**: PR [#2335](https://github.com/HKUDS/nanobot/pull/2335) replaces global lock with per-session locks (default 3 concurrent sessions)
- **Session durability**: PR [#2334](https://github.com/HKUDS/nanobot/pull/2334) persists messages per-iteration instead of only at LLM completion

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#1922](https://github.com/HKUDS/nanobot/issues/1922) — [nanobot-webui](https://github.com/Good0007/nanobot-webui) | 7 comments, 6 👍 | **Strong demand for GUI management** — community-built solution for dashboard, multi-user, MCP/skill/cron configuration. Signals that YAML/JSON config is a barrier for non-technical users. |
| [#623](https://github.com/HKUDS/nanobot/issues/623) — Persistent "Tool Not Found" for custom skills | 7 comments, 1 👍 | **Onboarding friction** — custom skill discovery/registration remains confusing despite being closed. Suggests documentation or scaffolding tools needed. |
| [#2250](https://github.com/HKUDS/nanobot/issues/2250) — `--config`/`-c` flag not recognized | 5 comments | **Multi-instance deployment blocker** — users want isolated workspaces but CLI doesn't support it. Closed but workaround unclear. |
| [#2141](https://github.com/HKUDS/nanobot/issues/2141) — Voice transcription broke in v0.1.4.post5 | 4 comments | **Regression anxiety** — upgrade broke existing workflows; "summarize skill" dependency unclear to users. |

**Underlying Needs**: Visual configuration tools, stable skill APIs, clearer multi-instance documentation, and regression-tested upgrades.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| 🔴 **High** | [#2293](https://github.com/HKUDS/nanobot/issues/2293) — Ollama local models silently fail on tool execution | Open | ❌ No — root cause unclear (context window? tool schema?) |
| 🔴 **High** | [#2325](https://github.com/HKUDS/nanobot/issues/2325) — MCP tools not discovered after server update | Open | ❌ No — caching/refresh mechanism broken |
| 🟡 **Medium** | [#2329](https://github.com/HKUDS/nanobot/issues/2329) — Custom provider works in CLI, fails in Feishu channel | Open | ❌ No — channel/provider interaction bug |
| 🟡 **Medium** | [#2327](https://github.com/HKUDS/nanobot/issues/2327) — DingTalk images downloaded but not passed to multimodal pipeline | Open | ❌ No — media routing gap |
| 🟡 **Medium** | [#2321](https://github.com/HKUDS/nanobot/issues/2321) — Subagent results sent to chat root instead of thread | Open | ❌ No — context threading broken |
| 🟢 **Low** | [#981](https://github.com/HKUDS/nanobot/issues/981) — Current time in system prompt breaks prompt cache | Open | [#2317](https://github.com/HKUDS/nanobot/pull/2317) addresses related cost issues |

**Stability Concerns**: Local model support (Ollama) is fragile; MCP tooling has cache invalidation problems; channel-specific bugs suggest insufficient integration testing.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|:---|:---|:---|
| **Dedicated vision provider** | [#2339](https://github.com/HKUDS/nanobot/issues/2339), [#2340](https://github.com/HKUDS/nanobot/pull/2340) | **High** — PR open, architectural foundation |
| **Silent/quiet heartbeat** | [#2126](https://github.com/HKUDS/nanobot/issues/2126) | Medium — small UX fix, community interest |
| **Context budget tokens for tool loops** | [#2317](https://github.com/HKUDS/nanobot/pull/2317), [#2318](https://github.com/HKUDS/nanobot/issues/2318) | **High** — cost control is urgent |
| **NapCatQQ channel** (unlimited group chat) | [#2337](https://github.com/HKUDS/nanobot/pull/2337) | Medium — PR open, Chinese market priority |
| **Microsoft Teams channel** | [#2129](https://github.com/HKUDS/nanobot/pull/2129) | Medium — enterprise demand |
| **Full media support for QQ/WeCom** | [#2324](https://github.com/HKUDS/nanobot/pull/2324) | **High** — PR open, completes channel parity |

**Predicted v0.1.5 themes**: Cost optimization (context budgeting, token estimation), multimodal architecture (vision decoupling), and Chinese enterprise channels (QQ ecosystem).

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Configuration complexity** | WebUI project popularity (#1922), `--config` flag confusion (#2250) | High |
| **Opaque failures** | "Tool Not Found" errors (#623), silent Ollama deaths (#2293) | High |
| **Upgrade fragility** | Voice transcription regression (#2141) | Medium |
| **Cost unpredictability** | Image token estimation (#2277), context budget (#2317) | Medium |
| **Channel inconsistencies** | Feishu/DingTalk/QQ media handling gaps (#2327, #2329) | Medium |

### Positive Signals
- Strong DIY enthusiasm ("first personal AI, very exciting" — #623)
- Active third-party ecosystem (webui, skills marketplace)
- Responsive maintainer engagement (most issues updated same day)

### Use Case Evolution
Users moving from "personal experiment" → "persistent service" → "multi-user deployment" — driving demand for `/status` commands, web UIs, and session isolation.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#144](https://github.com/HKUDS/nanobot/issues/144) — Gemini API key error | 45 days | **Configuration UX** | Document or fix provider routing; user patched locally |
| [#1164](https://github.com/HKUDS/nanobot/pull/1164) — Vietnamese README | 25 days | Low | Localization review/merge |
| [#1359](https://github.com/HKUDS/nanobot/pull/1359), [#1360](https://github.com/HKUDS/nanobot/pull/1360) — Heartbeat improvements | 21 days | **Reliability** | Maintainer review; builds on each other |
| [#1474](https://github.com/HKUDS/nanobot/pull/1474) — Subagent deduplication | 19 days | **Concurrency safety** | Test coverage review |
| [#2129](https://github.com/HKUDS/nanobot/pull/2129) — Microsoft Teams | 4 days | Enterprise expansion | Functional review |

**Maintainer Attention Recommended**: Heartbeat PRs (#1359/#1360) and subagent fixes (#1474) address production reliability but risk bit-rot without review.

---

*Digest generated from 52 PRs and 17 issues updated 2026-03-21. Data source: HKUDS/nanobot GitHub.*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-03-22

---

## 1. Today's Overview

Zeroclaw shows **high development velocity** with 50 PRs and 32 issues updated in the last 24 hours, alongside 10 new releases (v0.5.5 through v0.5.6 and betas). The project is actively iterating on stability fixes while pushing forward major architectural features including A2A protocol support, voice wake detection, and local-first capabilities. Community engagement remains strong with heated discussions around security policy flexibility and local LLM workflows. The release cadence suggests a mature CI/CD pipeline, though the volume of "incremental improvements and polish" betas indicates aggressive feature flagging. Critical bugs in voice streaming and merge conflict regressions are being actively patched.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.5.6](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.6)** | Stable | **macOS install fix**: Auto-accept Xcode/CLT license in `curl \| bash` flows via `/dev/tty` sudo prompt (#4153, #4165, #4169); **Flaky test fix**: `execute_successful_subprocess` broken pipe failure |
| **[v0.5.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.5)** | Stable | **DeepMyst provider** (OpenAI-compatible, #4103); **WeatherTool** (wttr.in integration, #4104); **Slack Assistants API** status indicators (#4105); **Cron edit modal** |
| v0.5.6-beta.526–523 | Beta | Incremental polish (Argenis) |
| v0.5.5-beta.522–516 | Beta | Auth import for OpenAI Codex; per-channel proxy_url (HTTP/SOCKS5); Slack markdown blocks; configurable pacing |

**Migration Notes**: v0.5.6 requires no config changes; v0.5.5 adds new optional `[tools.weather]` and `[providers.deepmyst]` sections.

---

## 3. Project Progress

### Merged/Closed PRs (18 total, selected highlights)

| PR | Description | Impact |
|----|-------------|--------|
| [#4174](https://github.com/zeroclaw-labs/zeroclaw/pull/4174) | chore: bump version to v0.5.6 | Release coordination |
| [#4185](https://github.com/zeroclaw-labs/zeroclaw/pull/4185) | fix(agent): system prompt budgeting for small-context models | Resolves "Prompt exceeds max length" for 8K models (glm-4.5-air) |
| [#4184](https://github.com/zeroclaw-labs/zeroclaw/pull/4184) | fix(approval): wildcard `*` support in `auto_approve`/`always_ask` | Critical fix: supervised mode users with `["*"]` had all tools blocked |
| [#4176](https://github.com/zeroclaw-labs/zeroclaw/pull/4176) | fix(install): remove pairing code display from installer | UX cleanup — pairing now dashboard-only |
| [#4168](https://github.com/zeroclaw-labs/zeroclaw/pull/4168) | fix(ollama): preserve `:cloud` tag for private remote servers | LAN Ollama servers no longer misrouted to Ollama Cloud |
| [#4173](https://github.com/zeroclaw-labs/zeroclaw/pull/4173) | fix(ollama): preserve `:cloud` tag (re-land) | Duplicate fix, suggests revert/reapply cycle |

**Features Advanced**: A2A protocol (#4166), voice wake detection (#4191), Discord history logging (#4182), Codex/Gemini CLI tools (#4154), provider streaming re-land (#4175).

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Core Tension |
|-------|----------|--------------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) — "除了安全,什么功能也没有" (44 comments, 6 👍) | **Security vs. utility tradeoff**: User enabled all security configs, still blocked from installing ffmpeg. Wants "fully open" mode for personal use. | **Underlying need**: Granular permission tiers, not binary secure/insecure. "Safety theater" frustration. |
| [#4127](https://github.com/zeroclaw-labs/zeroclaw/issues/4127) — "Unknown problem" (6 comments) | S0 severity: Agent executes shell commands in "illusionary state" when security disabled. Hallucinated execution? | Needs clarification — possible critical bug in sandbox bypass. |
| [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) — webui agent not work v0.1.8 (6 comments) | Connection error, WebSocket issues. Version mismatch (user on v0.1.8, project at v0.5.6) suggests documentation/upgrade path problem. | **Underlying need**: Clearer version compatibility matrix. |

### Most Active PRs

| PR | Focus | Significance |
|----|-------|------------|
| [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | A2A (Agent-to-Agent) protocol support | **Ecosystem expansion**: Enables cross-instance, cross-framework agent communication. Positions Zeroclaw in emerging A2A standard (Linux Foundation). |
| [#4191](https://github.com/zeroclaw-labs/zeroclaw/pull/4191) | Voice wake word critical fixes | Resource leak fix (`std::mem::forget` → proper drop) shows memory safety maturation. |
| [#3934](https://github.com/zeroclaw-labs/zeroclaw/pull/3934) | Homebrew release source archive | Distribution infrastructure — unblocks clean Homebrew installs with prebuilt assets. |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **S0** — Data loss/security | [#4127](https://github.com/zeroclaw-labs/zeroclaw/issues/4127) | Agent executes commands in "illusionary" state with security off | **Open**, needs investigation |
| **S0** — Data loss/security | [#4171](https://github.com/zeroclaw-labs/zeroclaw/issues/4171) | Telegram channel: agent stops responding, possible message loss | **Open**, no fix PR |
| **S0** — Data loss/security | [#4170](https://github.com/zeroclaw-labs/zeroclaw/issues/4170) | Weather tool unavailable from channels | **Open**, likely related to tool routing |
| **S1** — Workflow blocked | [#4139](https://github.com/zeroclaw-labs/zeroclaw/issues/4139) | Panic on UTF-8 multi-byte character slicing (Chinese text) in `creator.rs` | **Open**, no fix PR |
| **S1** — Workflow blocked | [#4042](https://github.com/zeroclaw-labs/zeroclaw/issues/4042) | Agent can't find MCP servers/tools; UI tools menu empty | **Closed** — resolution unclear |
| **S2** — Degraded | [#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679) | Cost tracking removed in `master` branch switch (regression from `main`) | **Open**, regression acknowledged |
| **Regression** | [#4187](https://github.com/zeroclaw-labs/zeroclaw/pull/4187) | `max_system_prompt_chars` lost in merge conflict from #4160 | **Fix PR open** |

**Critical Pattern**: Multiple S0 bugs around **channel tool routing** (weather, web search, MCP) suggest architectural gap between agent-mode and channel-mode tool registries.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **A2A Protocol Support** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) / [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | **90%** | PR open, active development, aligns with industry standard |
| **Local GPU TTS (Piper/Coqui)** | [#4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116) / [#4115](https://github.com/zeroclaw-labs/zeroclaw/issues/4115) | **75%** | Issue + PR, local-first trend strong |
| **Vision provider routing** | [#4119](https://github.com/zeroclaw-labs/zeroclaw/issues/4119) | **70%** | Local LLM users blocked on image handling |
| **Database-first memory (pgvector/graph)** | [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) | **50%** | Detailed proposal, but large architectural change |
| **SearXNG search provider** | [#4152](https://github.com/zeroclaw-labs/zeroclaw/issues/4152) | **60%** | Simple addition, privacy-aligned |
| **Hot config reload** | [#3569](https://github.com/zeroclaw-labs/zeroclaw/issues/3569) | **40%** | UX pain point, but requires daemon architecture changes |
| **Autonomous skill creation** | [#3683](https://github.com/zeroclaw-labs/zeroclaw/issues/3683) | **30%** | Research-stage, Hermes-inspired |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Security policy too restrictive** | [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) (44 comments), [#4127](https://github.com/zeroclaw-labs/zeroclaw/issues/4127) | 🔴 High — "safety theater" causing abandonment risk |
| **Channel-mode tool availability gaps** | [#4170](https://github.com/zeroclaw-labs/zeroclaw/issues/4170), [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083), [#4042](https://github.com/zeroclaw-labs/zeroclaw/issues/4042) | 🔴 High — core functionality inconsistent |
| **Local LLM workflow friction** | [#2963](https://github.com/zeroclaw-labs/zeroclaw/issues/2963), [#4119](https://github.com/zeroclaw-labs/zeroclaw/issues/4119), [#4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116) | 🟡 Medium — pacing, vision, TTS gaps |
| **Cost visibility missing** | [#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679), [#3565](https://github.com/zeroclaw-labs/zeroclaw/issues/3565) | 🟡 Medium — regression from `main` branch |
| **WebUI polish** | [#4183](https://github.com/zeroclaw-labs/zeroclaw/issues/4183), [#4179](https://github.com/zeroclaw-labs/zeroclaw/issues/4179), [#4177](https://github.com/zeroclaw-labs/zeroclaw/issues/4177) | 🟢 Low — active fixes in flight |

### Satisfaction Signals
- Strong appreciation for **macOS install fix** (Xcode auto-accept)
- Active community contribution (WareWolf-MoonWall, 5queezer, theonlyhennygod)
- Rapid response to critical bugs (wildcard approval fix in <24h)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) — webui agent not work | 15 days | User on ancient version (v0.1.8), possible docs gap | Close with "please upgrade" or document legacy support |
| [#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679) — Cost tracking regression | 5 days | **Branch management debt** | Decide: re-implement on `master` or document intentional removal |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) — A2A protocol | 6 days | PR exists, needs review | Maintainer review of [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) |
| [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) — Database-first memory | 1 day | Large architectural proposal | Acknowledge and roadmap, or request RFC |
| [#3934](https://github.com/zeroclaw-labs/zeroclaw/pull/3934) — Homebrew source archive | 3 days | Distribution blocker | Merge to unblock clean installs |

---

**Project Health**: 🟢 **Active/Healthy** — High velocity, responsive maintainers, architectural ambition balanced with stability focus. Watch items: security UX polarization, channel/agent mode parity, branch management (cost tracking regression).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-22

## 1. Today's Overview

PicoClaw shows **high development velocity** with 27 issues and 34 PRs updated in the last 24 hours. The project is actively iterating on its v0.2.3 release cycle with daily nightly builds. Core themes today include: **voice interaction capabilities** (TTS/ASR), **WebUI accessibility improvements**, **Docker/containerization refinements**, and **provider ecosystem expansion**. The 21 open PRs vs. 13 merged/closed indicates a healthy but backlogged review pipeline. Notably, one PR (#1867) proposing a full project rename to "Piconomous" was closed the same day, suggesting maintainer rejection of major rebranding.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.3-nightly.20260321.100720bb](https://github.com/sipeed/picoclaw/compare/v0.2.3...main) | Nightly | Automated build; no breaking changes documented. Changelog spans from v0.2.3 to main. |

**No stable release** since v0.2.3. Users should treat nightly builds as unstable.

---

## 3. Project Progress

### Merged/Closed PRs (13 total, key items)

| PR | Description | Impact |
|----|-------------|--------|
| [#1717](https://github.com/sipeed/picoclaw/pull/1717) | Fix: Subagents receive tools properly | **Critical fix** — spawned subagents were broken without tool registry |
| [#1617](https://github.com/sipeed/picoclaw/pull/1617) | Fix: Heartbeat token consumption | Resolves [#1561](https://github.com/sipeed/picoclaw/issues/1561) — stops sending template examples as real prompts |
| [#1855](https://github.com/sipeed/picoclaw/pull/1855) | Fix: Telegram negative group ID handling | **Production fix** — group IDs like `-1001234567890` now parse correctly |
| [#1782](https://github.com/sipeed/picoclaw/pull/1782) | Chore: Add `docker/data` to `.gitignore` | Developer experience |
| [#1861](https://github.com/sipeed/picoclaw/pull/1861) | Feat: Add agent-browser skill + Dockerfile.heavy | **Major capability** — browser automation via Chrome CDP |
| [#1860](https://github.com/sipeed/picoclaw/pull/1860) | Fix: Azure AI Foundry host recognition | Enables prompt caching & native search for Azure users |
| [#1837](https://github.com/sipeed/picoclaw/pull/1837) | Docs: 25+ fixes, 60 new channel docs, translations | **Documentation overhaul** |
| [#1865](https://github.com/sipeed/picoclaw/pull/1865) | Revert: Exec tool PTY/background support | **Regression** — [#1752](https://github.com/sipeed/picoclaw/pull/1752) reverted due to build failures (loong64, Windows) |

**Key advancement**: Browser automation skill lands, making PicoClaw viable for web scraping/agentic browsing workflows.

---

## 4. Community Hot Topics

| Rank | Issue/PR | Activity | Underlying Need |
|------|----------|----------|-----------------|
| 1 | [#1648](https://github.com/sipeed/picoclaw/issues/1648) — TTS/ASR Support | 17 comments, enhancement | **Voice-native AI assistant** — users want full multimodal interaction; PR [#1642](https://github.com/sipeed/picoclaw/pull/1642) exists but unmerged |
| 2 | [#806](https://github.com/sipeed/picoclaw/issues/806) — WebUI Support | 7 comments, 7 👍, high priority | **Accessibility for non-technical users** — TUI barrier too high; actively being refactored |
| 3 | [#1852](https://github.com/sipeed/picoclaw/pull/1852) — Discord ASR/TTS | New PR | **Voice chat in Discord** — implements #1648 design for Mode 4.2 streaming voice |

**Analysis**: Voice interaction is the #1 unmet demand. The community is building around this gap with both design proposals (#1648) and implementations (#1852). WebUI remains a persistent accessibility request with strong upvote signal.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#1862](https://github.com/sipeed/picoclaw/issues/1862) | MCP returns Base64 data → LLM context explosion | **Open**, no PR |
| **High** | [#1763](https://github.com/sipeed/picoclaw/issues/1763) | aarch64 .deb package uninstallable | **Open**, 4 comments, needs investigation |
| **High** | [#1150](https://github.com/sipeed/picoclaw/issues/1150) | Pool factory panic → permanent deadlock | **Fixed** in earlier commit (closed today) |
| **Medium** | [#1864](https://github.com/sipeed/picoclaw/issues/1864) | `/v1/models` missing API key for OpenAI-compatible providers | **Open**, no PR |
| **Medium** | [#1737](https://github.com/sipeed/picoclaw/issues/1737) | Launcher mode: port 18800 undocumented, WebSocket failures | **Open**, documentation gap |
| **Medium** | [#1704](https://github.com/sipeed/picoclaw/issues/1704) | `picoclaw-launcher-tui` breaks gateway/talk start | **Closed** — resolution unclear |
| **Low** | [#386](https://github.com/sipeed/picoclaw/issues/386) | exec tool blocks URLs as paths | **Fixed** (closed today) |

**Regression alert**: Exec tool PTY/background support ([#1752](https://github.com/sipeed/picoclaw/pull/1752)) was **reverted** ([#1865](https://github.com/sipeed/picoclaw/pull/1865)) due to cross-platform build failures. Re-submitted as [#1869](https://github.com/sipeed/picoclaw/pull/1869) with loong64/Windows patches.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.4 | Signal Strength |
|---------|----------|----------------------|-----------------|
| **TTS/ASR Core Support** | [#1648](https://github.com/sipeed/picoclaw/issues/1648), [#1852](https://github.com/sipeed/picoclaw/pull/1852) | **High** | Architecture design merged, Discord implementation in PR |
| **WebUI (Refactored)** | [#806](https://github.com/sipeed/picoclaw/issues/806) | **Medium-High** | Explicitly marked "Refactoring now", 7 upvotes |
| **Python3 in Docker Runtime** | [#1870](https://github.com/sipeed/picoclaw/issues/1870), [#1871](https://github.com/sipeed/picoclaw/pull/1871) | **High** | PR open, simple change, clear use case |
| **Configurable Logging Levels** | [#1848](https://github.com/sipeed/picoclaw/issues/1848) | **Medium** | User pain point, no PR yet |
| **ClawTeam Integration** | [#1850](https://github.com/sipeed/picoclaw/issues/1850) | **Low-Medium** | Niche academic project, low engagement |
| **Qwen CLI Provider** | [#1750](https://github.com/sipeed/picoclaw/pull/1750) | **Medium** | PR open, Chinese market relevance |
| **Hook Manager** | [#1863](https://github.com/sipeed/picoclaw/pull/1863) | **Unclear** | PR open, no description filled |

**Prediction**: v0.2.4 will likely ship with TTS/ASR infrastructure, WebUI beta, and Docker Python support.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Installation friction** | [#1763](https://github.com/sipeed/picoclaw/issues/1763) (aarch64 .deb broken), [#1704](https://github.com/sipeed/picoclaw/issues/1704) (launcher breaks gateway) | High |
| **Documentation gaps** | [#1737](https://github.com/sipeed/picoclaw/issues/1737) (undocumented port), [#1868](https://github.com/sipeed/picoclaw/issues/1868) (missing cron docs), [#1856](https://github.com/sipeed/picoclaw/issues/1856) (REST API unclear) | Medium |
| **Context/token waste** | [#1862](https://github.com/sipeed/picoclaw/issues/1862) (Base64 in LLM context), [#1561](https://github.com/sipeed/picoclaw/issues/1561) (heartbeat token burn) | Medium |
| **Logging noise** | [#1848](https://github.com/sipeed/picoclaw/issues/1848) | Low |

### Positive Signals
- **Browser automation** (#1861) — "complete CLI reference for Chrome CDP" addresses power-user needs
- **Azure AI Foundry** (#1860) — enterprise cloud support expanding
- **Discord voice** (#1852) — community-driven feature completion

---

## 8. Backlog Watch

| Item | Age | Issue | Risk |
|------|-----|-------|------|
| **Config migration system** | 11 days | [#1352](https://github.com/sipeed/picoclaw/pull/1352) | **High** — Large refactor removing `AuthMethod`, needs careful review |
| **Exec tool PTY/background** | 3 days | [#1869](https://github.com/sipeed/picoclaw/pull/1869) | Medium — Already reverted once, needs platform testing |
| **Anthropic tool result deduplication** | 2 days | [#1793](https://github.com/sipeed/picoclaw/pull/1793) | Medium — Fixes production 400 errors |
| **TTS/ASR architecture** | 5 days | [#1648](https://github.com/sipeed/picoclaw/issues/1648) | Low — Active discussion, implementation emerging |

**Maintainer attention needed**: [#1352](https://github.com/sipeed/picoclaw/pull/1352) is a foundational config refactor with broad impact that has sat open for 11 days without merge. [#1869](https://github.com/sipeed/picoclaw/pull/1869) needs CI verification across loong64/Windows before merge to avoid second revert.

---

*Digest generated from 27 issues and 34 PRs updated 2026-03-21. Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-22

## 1. Today's Overview

NanoClaw shows **high development velocity** with 37 PRs and 28 issues updated in the past 24 hours, though the 28:9 open-to-merged PR ratio suggests a growing review backlog. The project is experiencing **active stabilization work** with multiple crash-recovery and container lifecycle fixes in flight. A persistent pattern of **skill branch merge failures** (15+ related issues) indicates structural CI/CD debt requiring attention. No new releases were cut, suggesting maintainers are accumulating changes before a version bump. Community interest remains strong with diverse feature contributions spanning messaging platforms (WhatsApp, Discord), infrastructure tools (Tailscale, Unraid), and security enhancements.

---

## 2. Releases

**None** — No new releases published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Description | Impact |
|----------|-------------|--------|
| [#1288](https://github.com/qwibitai/nanoclaw/issues/1288) | Read incoming emoji reactions on messages | **Completed** — Agent can now perceive Telegram reactions |
| [#1282](https://github.com/qwibitai/nanoclaw/issues/1282) | Telegram emoji reactions support | **Completed** — Bidirectional reaction support finished |
| [#1314](https://github.com/qwibitai/nanoclaw/pull/1314) | Fix/audit findings | **Merged** — Security/stability improvements |
| Multiple skill-maintenance issues | Merge-forward failures resolved | **15 closed** — `apple-container`, `compact`, `ollama-tool` branches |

### Key Advances

- **Telegram integration maturation**: Completed emoji reaction ecosystem (set + read)
- **Crash resilience**: 4 PRs from `akasha-scheuermann` address message loss on container crash, stale session cleanup, and IPC timing bugs
- **Infrastructure expansion**: Linux/Docker support, Unraid integration, Tailscale API all in active development

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#1075](https://github.com/qwibitai/nanoclaw/issues/1075) Linux docs mismatch | 3 comments, `good first issue` | **Trust/signal issue** — Platform support claims misaligned between README and website; blocks Linux adoption confidence |
| [#876](https://github.com/qwibitai/nanoclaw/issues/876) Slack integration? | 2 comments, 👍1 | **Enterprise demand** — User offering to implement; signals need for workplace chat integration beyond Telegram |
| [#1211](https://github.com/qwibitai/nanoclaw/issues/1211) `/new` command for session reset | 1 comment, 👍2 | **UX pain point** — Token cost anxiety from infinite context accumulation; users want control |
| [#1273](https://github.com/qwibitai/nanoclaw/issues/1273) Multi-session web channel | 1 comment, 👍1 | **Deployment flexibility** — Community-built alternative to messenger-only operation; author sharing for students |

**Underlying needs**: Documentation accuracy, enterprise integrations (Slack), cost control mechanisms, and deployment optionality (web vs. messenger).

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#1312](https://github.com/qwibitai/nanoclaw/issues/1312) | `claw` CLI exits non-zero on happy path after `proc.kill()` | **Open** — Container lifecycle bug breaking automation |
| **High** | [#1315](https://github.com/qwibitai/nanoclaw/issues/1315) | Duty cycle never completes retrospective/dream phases | **Open** — Core agent loop broken; author disabled feature |
| **High** | [#1321](https://github.com/qwibitai/nanoclaw/pull/1321) | Crash-resilient message processing with pipe rollback | **PR open** — Fixes message loss on container crash |
| **Medium** | [#1319](https://github.com/qwibitai/nanoclaw/pull/1319) | Slash commands checked after IPC drain | **PR open** — `/compact` etc. broken by message timing |
| **Medium** | [#1320](https://github.com/qwibitai/nanoclaw/pull/1320) | Stale skills not cleared on container spawn | **PR open** — Skill removal doesn't propagate |
| **Medium** | [#1317](https://github.com/qwibitai/nanoclaw/pull/1317) | Stale sessions not cleared on crash recovery | **PR open** — State pollution across restarts |
| **Medium** | [#1307](https://github.com/qwibitai/nanoclaw/issues/1307), [#1306](https://github.com/qwibitai/nanoclaw/issues/1306), [#1305](https://github.com/qwibitai/nanoclaw/issues/1305) | Skill branch merge-forward failures | **3 open, 15 closed** — Recurring CI/CD debt |

**Stability assessment**: Critical fixes in flight from `akasha-scheuermann` addressing container reliability. The duty cycle bug (#1315) suggests the autonomous agent features may be unstable in production.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **macOS Keychain secrets** | [#1316](https://github.com/qwibitai/nanoclaw/issues/1316) | **High** | Security-critical, well-scoped, author has implementation plan |
| **Linux/Docker deployment** | [#1089](https://github.com/qwibitai/nanoclaw/pull/1089) | **High** | Large PR in review, addresses #1075 docs issue |
| **Session reset (`/new`)** | [#1211](https://github.com/qwibitai/nanoclaw/issues/1211), [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) | **High** | PR open, strong user demand (👍2), cost-saving feature |
| **WhatsApp/Discord channels** | [#1313](https://github.com/qwibitai/nanoclaw/pull/1313) | **Medium** | Large bundle PR; may split for review |
| **Slack integration** | [#876](https://github.com/qwibitai/nanoclaw/issues/876) | **Medium** | User volunteered; depends on maintainer guidance |
| **Tailscale API** | [#1260](https://github.com/qwibitai/nanoclaw/pull/1260) | **Medium** | Infrastructure skill; needs env var passthrough (#1258) |
| **Unraid MCP** | [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) | **Medium** | Niche but complete; homelab user base |
| **API usage tracking** | [#1111](https://github.com/qwibitai/nanoclaw/pull/1111) | **Low-Medium** | Large feature (new DB tables); may defer for stability |
| **Voice/Whisper transcription** | [#1313](https://github.com/qwibitai/nanoclaw/pull/1313) | **Low** | Bundled in large PR; may need separation |

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency | User Impact |
|-------|-----------|-------------|
| **Documentation inconsistency** | Recurring | Linux support confusion (#1075); trust erosion |
| **Session/cost management** | High | No way to reset context → token waste (#1211) |
| **Messenger-only operation** | Moderate | Web channel workaround built by community (#1273) |
| **Plaintext secrets** | Moderate | Security anxiety, `.env` file handling (#1316) |
| **Container reliability** | High | Crashes lose messages, stale state (#1312, #1317, #1321) |

### Positive Signals

- **Strong extensibility**: Users building custom channels (web) and skills (mac-control, Unraid)
- **Active contribution**: Multiple first-time contributors with complete PRs
- **Responsive fixes**: Rapid turnaround on Telegram reactions feature

### Dissatisfaction Risk

The **skill branch merge failure pattern** (15+ automated issues) suggests maintainer bandwidth constraints may frustrate contributors. The **duty cycle feature being disabled** (#1315) indicates core autonomous agent functionality is not production-ready.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#876](https://github.com/qwibitai/nanoclaw/issues/876) Slack integration | 12 days | Contributor may abandon | Maintainer response to volunteer |
| [#1075](https://github.com/qwibitai/nanoclaw/issues/1075) Linux docs mismatch | 8 days | `good first issue` unclaimed | Clarify platform status, merge #1089 |
| [#1091](https://github.com/qwibitai/nanoclaw/pull/1091) `.env` fallback fix | 6 days | "Needs Review" | Container deployment blocker |
| [#1090](https://github.com/qwibitai/nanoclaw/pull/1090) `.claude.json` writable mount | 6 days | "Needs Review" | EROFS crash fix |
| [#1111](https://github.com/qwibitai/nanoclaw/pull/1111) API usage tracking | 6 days | Large feature, no comments | Scope decision or milestone assignment |
| [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) UnraidClaw | 4 days | Complete, unreviewed | Infrastructure skill review |
| [#1237](https://github.com/qwibitai/nanoclaw/pull/1237) OneCLI gateway | 3 days | Architectural change | Security review for credential proxy replacement |

**Critical attention**: The 6-day-old "Needs Review" PRs (#1090, #1091) block containerized deployments. The skill branch CI failures require infrastructure investment to reduce noise.

---

*Digest generated from 28 issues and 37 PRs updated 2026-03-21*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-22

## 1. Today's Overview

NullClaw shows **exceptionally high development velocity** with 50 PRs updated in 24 hours (40 merged/closed, 10 open) and active issue resolution. The project released **v2026.3.21** with major runtime enhancements including WASM3 interpreter by default and configurable prompt timezones. Community engagement is strong with 8 issues updated, though 4 remain open including two fresh ACP protocol bugs. The maintainer team (particularly @manelsen and @vernonstinebaker) is highly responsive, with same-day fixes for reported issues. Overall project health: **robust and accelerating**.

---

## 2. Releases

### [v2026.3.21](https://github.com/nullclaw/nullclaw/releases/tag/v2026.3.21) — 2026-03-21

| Change | PR | Impact |
|--------|-----|--------|
| **WASM3 interpreter by default** | [#568](https://github.com/nullclaw/nullclaw/pull/568) | Runtime now uses wasm3 for WebAssembly execution |
| **Configurable prompt timezone** | (merged) | Multi-language support for agent prompt scheduling |

**Migration Notes:** No breaking changes documented. WASM3 replaces previous interpreter transparently.

---

## 3. Project Progress

### Major Features Advanced Today

| Feature | PR | Status | Description |
|---------|-----|--------|-------------|
| **Sandboxed Shell Execution** | [#678](https://github.com/nullclaw/nullclaw/pull/678) | 🟡 Open | OS-level isolation for shell commands via `security.sandbox` config |
| **Inbound Message Debouncing** | [#676](https://github.com/nullclaw/nullclaw/pull/676) | 🟡 Open | Closes [#618](https://github.com/nullclaw/nullclaw/issues/618) — "wife safe" rapid-fire message handling (Telegram/Discord/CLI) |
| **Bidirectional Email (IMAP IDLE)** | [#667](https://github.com/nullclaw/nullclaw/pull/667) | 🟡 Open | Full IMAP polling with push notifications, network resilience |
| **Adaptive Intelligence Pipeline** | [#527](https://github.com/nullclaw/nullclaw/pull/527) | 🟡 Open | Post-turn quality loop with Turn Scorer and Skill Router |
| **Cron Session Routing** | [#666](https://github.com/nullclaw/nullclaw/pull/666) | ✅ Merged | `SessionTarget` enum now wired for `.isolated` vs `.main` job delivery |

### Critical Fixes Merged

| Fix | PR | Issue Resolved |
|-----|-----|----------------|
| Ollama empty responses | [#668](https://github.com/nullclaw/nullclaw/pull/668) | Default `"think":false` prevents silent failures |
| Shell command hangs | [#673](https://github.com/nullclaw/nullclaw/pull/673) | [#644](https://github.com/nullclaw/nullclaw/issues/644) — timeout now enforced, stdin ignored for TUI commands |
| SSE stream stalls | [#597](https://github.com/nullclaw/nullclaw/pull/597) | curl speed-limit detection for hung streams |
| MCP HTTP transport | [#658](https://github.com/nullclaw/nullclaw/pull/658) | Accept headers + SSE parsing for HTTP-based MCP |
| Empty response retry | [#663](https://github.com/nullclaw/nullclaw/pull/663) | Streaming turns now properly retry on empty content |

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#117](https://github.com/nullclaw/nullclaw/issues/117) — Add custom provider (Claude) | 12 | **CLOSED** — Documentation gap for custom provider setup; community needs clearer onboarding for non-built-in LLMs |
| 2 | [#638](https://github.com/nullclaw/nullclaw/issues/638) — OTel diagnostics issue | 8 | **CLOSED** — Podman networking complexity with OpenTelemetry; indicates container deployment friction |
| 3 | [#618](https://github.com/nullclaw/nullclaw/issues/618) — "Wife safe" debounce | 1 | **OPEN → PR #676** — Real UX pain point: rapid sequential messages trigger multiple responses. Fix in progress. |

**Underlying Needs:**
- **Better documentation** for custom provider integration (not just "read the code")
- **Container deployment guides** for observability stack integration
- **UX polish** for conversational interfaces — users expect human-like turn-taking

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **High** | [#674](https://github.com/nullclaw/nullclaw/issues/674) | Gemini CLI ACP provider hangs indefinitely (protocolVersion as string, missing fields) | **PR [#675](https://github.com/nullclaw/nullclaw/pull/675) open** — same-day response |
| 🔴 **High** | [#665](https://github.com/nullclaw/nullclaw/issues/665) | `error.NoResponseContent` on Windows with memory-enabled agents | No fix yet — needs investigation |
| 🟡 **Medium** | [#671](https://github.com/nullclaw/nullclaw/issues/671) | Chat UI public binding confusion on constrained devices | **PR [#672](https://github.com/nullclaw/nullclaw/pull/672) open** — docs clarification |
| 🟢 **Low** | [#646](https://github.com/nullclaw/nullclaw/issues/646) | Memory system perceived as non-functional | **CLOSED** — user education issue, not bug |

**Stability Assessment:** Two high-severity bugs in new features (Gemini CLI ACP, Windows memory). Both have active maintainer attention. No regressions in core functionality.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---------|--------|---------------------------|
| **Message debouncing** | [#618](https://github.com/nullclaw/nullclaw/issues/618) + [#676](https://github.com/nullclaw/nullclaw/pull/676) | **95%** — PR open, addresses real UX pain |
| **Sandboxed shell execution** | [#678](https://github.com/nullclaw/nullclaw/pull/678) | **90%** — Security hardening, actively developed |
| **Bidirectional email** | [#667](https://github.com/nullclaw/nullclaw/pull/667) | **85%** — Large PR, enterprise use case |
| **Adaptive Intelligence Pipeline** | [#527](https://github.com/nullclaw/nullclaw/pull/527) | **70%** — Complex feature, may need iteration |
| **WhatsApp Web channel** | [#527](https://github.com/nullclaw/nullclaw/pull/527) | **60%** — Bundled with adaptive pipeline, may split |
| **vLLM/Qwen reasoning** | [#669](https://github.com/nullclaw/nullclaw/pull/669) | **80%** — Small, targeted fix for custom endpoints |

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Context | Emotional Tone |
|-------|-----------|--------------|
| Chat UI confusion | Portable hotspot user, Quark browser | Frustrated ("driving me crazy") — documentation gap for constrained environments |
| Message flooding | Wife using Telegram bot | Amused but seeking solution — UX expectation mismatch |
| Memory "not working" | New user testing persistence | Confused — gap between technical capability and user-visible behavior |
| Gemini CLI ACP hang | Early adopter of new provider | Blocked — protocol incompatibility with latest CLI version |

### Satisfaction Signals
- **Rapid maintainer response**: Multiple same-day PRs for reported issues
- **Active multilingual support**: Chinese/English bilingual PRs and docs
- **Extensibility**: Users successfully adding custom providers (Claude, Moonshot)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#527](https://github.com/nullclaw/nullclaw/pull/527) Adaptive Intelligence + channels | 7 days | Medium complexity, may bitrot | Review for merge or split into smaller PRs |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) Windows NoResponseContent | 1 day | **High** — blocking Windows users | Needs maintainer assignment, Windows environment repro |
| [#669](https://github.com/nullclaw/nullclaw/pull/669) vLLM reasoning | 1 day | Low — small, targeted | Quick win, should merge soon |

**Maintainer Attention Recommended:** Windows bug [#665](https://github.com/nullclaw/nullclaw/issues/665) lacks assigned response despite being a crash-level issue on a major platform.

---

*Digest generated from 50 PRs and 8 issues updated 2026-03-21. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-22

## 1. Today's Overview

IronClaw shows **high development velocity** with 50 PRs and 13 issues updated in the last 24 hours, though zero new releases indicate the project is in active development rather than shipping mode. The team is pushing hard on core infrastructure: multi-tenancy, tool system refactoring, and UX overhaul dominate the merge queue. Notably, 43 PRs remain open against 7 merged/closed, suggesting a potential bottleneck in review capacity. Critical security fixes landed for OAuth flow vulnerabilities, while new bug reports highlight ongoing LLM provider integration fragility (Gemini, Qwen). The project appears healthy but review bandwidth may need attention to prevent PR pile-up.

---

## 2. Releases

**No new releases** — IronClaw v0.21.0 remains the latest version as of this digest.

---

## 3. Project Progress

### Merged/Closed PRs Today (7 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1454](https://github.com/nearai/ironclaw/pull/1454) | ilblackdragon | **Critical OAuth fix**: Reject malformed `ic2.*` states in `decode_hosted_oauth_state` — prevents flow ID mismatch vulnerability | Security hardening |
| [#1121](https://github.com/nearai/ironclaw/pull/1121) | NYX-privacy-ai | Persist startup MCP clients in ExtensionManager — fixes `active: false` false negatives | Extension reliability |
| [#496](https://github.com/nearai/ironclaw/pull/496) | Mcxiaocaibug | Support text setup fields in web configure modal (non-secret inputs) | UX flexibility |
| [#1441](https://github.com/nearai/ironclaw/issues/1441) | ironclaw-ci[bot] | [CLOSED] OAuth flow registration/lookup key mismatch — **CRITICAL severity 95/100** | Auto-resolved via #1454 |
| [#1280](https://github.com/nearai/ironclaw/issues/1280) | henrypark133 | [CLOSED] Flaky OAuth wildcard callback tests — CI race condition on `OAUTH_CALLBACK_HOST` | CI stability |
| [#1521](https://github.com/nearai/ironclaw/issues/1521) | jonhoosh | [CLOSED] Gemini `thought_signature` error — duplicate of #1510 | Provider compatibility |

**Key Advances:**
- **Security**: OAuth state validation hardened against injection attacks
- **Extensions**: MCP client lifecycle and setup UX improved
- **CI**: Staging promotion pipeline stabilizing (2 auto-promotion PRs: [#1551](https://github.com/nearai/ironclaw/pull/1551), [#1552](https://github.com/nearai/ironclaw/pull/1552))

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Core Need |
|:---|:---|:---|
| [#84](https://github.com/nearai/ironclaw/issues/84) — Agent system advanced features | 2 comments, P2-P3 priority | **Multi-agent orchestration** — users need workspace isolation, message routing, global sessions, and elevated privilege modes |
| [#1537](https://github.com/nearai/ironclaw/issues/1537) — WASM credential injection fails on NEAR AI hosted TEE | 1 comment, reported 2026-03-21 | **TEE runtime reliability** — secrets stored but never injected breaks hosted deployments |
| [#1458](https://github.com/nearai/ironclaw/issues/1458) — Persistent sandbox for generic actions | 1 comment | **Operational agent workloads** — SSH, VPN, kubectl, terraform need stateful containers vs. current ephemeral-per-command model |

**Underlying Pattern**: Users are pushing IronClaw from "chat assistant" toward "infrastructure operator" — requiring persistent state, elevated privileges, and multi-agent coordination. The ephemeral sandbox design is becoming a friction point.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| **CRITICAL** | [#1441](https://github.com/nearai/ironclaw/issues/1441) OAuth flow registration/lookup key mismatch | **CLOSED** | ✅ #1454 |
| **HIGH** | [#1537](https://github.com/nearai/ironclaw/issues/1537) WASM credential injection fails on NEAR AI hosted TEE | **OPEN** | ❌ None — TEE runtime bug |
| **HIGH** | [#1538](https://github.com/nearai/ironclaw/issues/1538) Microsoft Defender flagging Windows installer as Trojan | **OPEN** | ❌ None — code signing/reputation issue |
| **MEDIUM** | [#1520](https://github.com/nearai/ironclaw/issues/1520) Qwen3.5-plus 405 "Coding Plan only for Coding Agents" | **OPEN** | ❌ None — provider API change |
| **MEDIUM** | [#1510](https://github.com/nearai/ironclaw/issues/1510) / [#1521](https://github.com/nearai/ironclaw/issues/1521) Gemini `thought_signature` missing in function calls | **OPEN** / CLOSED | ❌ None — provider schema mismatch |
| **MEDIUM** | [#1280](https://github.com/nearai/ironclaw/issues/1280) Flaky OAuth wildcard callback tests | **CLOSED** | ✅ CI fix landed |

**Stability Assessment**: OAuth security posture improved, but **LLM provider integration fragility** is emerging as a theme — Gemini and Qwen both showing schema/behavior drift. The TEE credential injection bug (#1537) is operationally critical for NEAR AI hosted users.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Signal Strength |
|:---|:---|:---|:---|
| **Per-tool reasoning visibility** | [#1513](https://github.com/nearai/ironclaw/pull/1513) | **HIGH** — XL PR open by core maintainer | 🔥🔥🔥 |
| **Multi-tenant auth + workspace isolation** | [#1118](https://github.com/nearai/ironclaw/pull/1118) | **HIGH** — rebased, previously reviewed | 🔥🔥🔥 |
| **Complete UX overhaul** | [#1277](https://github.com/nearai/ironclaw/pull/1277) | **MEDIUM** — XL PR, design system + onboarding | 🔥🔥 |
| **Slack Socket Mode** | [#1547](https://github.com/nearai/ironclaw/pull/1547), [#1549](https://github.com/nearai/ironclaw/pull/1549) | **MEDIUM** — 2 competing implementations | 🔥🔥 |
| **Persistent sandbox / generic actions** | [#1458](https://github.com/nearai/ironclaw/issues/1458) | **MEDIUM** — user demand clear, architecture change needed | 🔥🔥 |
| **Multi-agent routing** | [#84](https://github.com/nearai/ironclaw/issues/84) | **LOW-MEDIUM** — P2-P3 priority, long-running issue | 🔥 |
| **HTTP domain whitelist** | [#1518](https://github.com/nearai/ironclaw/issues/1518) | **MEDIUM** — small UX fix, clear use case | 🔥🔥 |

**Prediction**: Next release (likely v0.22.0) will emphasize **observability** (#1513 reasoning), **enterprise readiness** (#1118 multi-tenancy), and **channel expansion** (Slack Socket Mode).

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Voice | Frequency |
|:---|:---|:---|
| **Manual HTTP approval fatigue** | "Every HTTP request requires manual approval, even to domains the agent has been explicitly configured to use" — breaks multi-step ACP workflows | [#1518](https://github.com/nearai/ironclaw/issues/1518) |
| **Sandbox too restrictive** | "Shell tool blocks many legitimate operations" — can't SSH, VPN, run infrastructure tools | [#1458](https://github.com/nearai/ironclaw/issues/1458) |
| **LLM provider fragility** | Same config works on other platforms; Gemini/Qwen errors are IronClaw-specific | [#1520](https://github.com/nearai/ironclaw/issues/1520), [#1510](https://github.com/nearai/ironclaw/issues/1510) |
| **Routine notification context loss** | Notifications isolated from chat thread — "user sees the message but lacks conversation context" | [#1519](https://github.com/nearai/ironclaw/issues/1519) |
| **Antivirus false positives** | Windows installer flagged as Trojan — trust/reputation barrier | [#1538](https://github.com/nearai/ironclaw/issues/1538) |

### Satisfaction Signals
- Active community: Feishu channel integration inquiry ([#1516](https://github.com/nearai/ironclaw/issues/1516)) shows international adoption
- Users building complex workflows (ACP, multi-step agents) — indicating platform stickiness despite friction

---

## 8. Backlog Watch

### Long-Running Items Needing Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#84](https://github.com/nearai/ironclaw/issues/84) Agent system advanced features | ~5 weeks | **Architecture debt** — multi-agent is a competitive differentiator | Maintainer priority decision: P2 vs. P3 |
| [#1023](https://github.com/nearai/ironclaw/pull/1023) CLI hooks list subcommand | ~9 days | **Contributor experience** — static discovery for lifecycle hooks | Review/merge — low risk, `size: L` |
| [#1013](https://github.com/nearai/ironclaw/pull/1013) musl targets for Linux installer | ~9 days | **Platform coverage** — older glibc compatibility | Review/merge — medium risk, `skip-regression-check` flagged |
| [#1118](https://github.com/nearai/ironclaw/pull/1118) Multi-tenant auth | ~8 days | **Security + scalability** — previously reviewed, rebased | Final review pass, merge |
| [#496](https://github.com/nearai/ironclaw/pull/496) Extension setup fields | ~18 days | **UX completeness** — **MERGED** today ✅ | — |

**Review Bandwidth Concern**: 43 open PRs with 7 closed suggests ~6:1 ratio. The two `staging-promotion` PRs (#1551, #1552) indicate CI automation is working, but human review may be bottlenecked on `size: XL` changes (#1277, #1513, #1412, #1118).

---

*Digest generated from IronClaw GitHub activity 2026-03-21 → 2026-03-22. Data source: github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-22

## 1. Today's Overview

LobsterAI shows **high development velocity** with 29 PRs and 16 issues updated in 24 hours, indicating an active maintenance window. The project released **2026.3.21** with logging improvements and IM connectivity enhancements. Notably, **13 issues remain open** with a significant cluster of **code quality and stability concerns** raised by security-focused contributor @BucleLiu (8 related issues). The merge/close ratio (16/29) suggests efficient PR processing, though many critical fixes are still pending review. Overall project health is **moderate-to-strong on features, but emerging technical debt in core infrastructure** requires attention.

---

## 2. Releases

### [2026.3.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.21) — March 21, 2026

| Change | PR | Impact |
|--------|-----|--------|
| **Logger improvements** | [#569](https://github.com/netease-youdao/LobsterAI/pull/569) | Daily rotation, 80MB limit, 7-day retention, log export functionality |
| **泡泡IM WebSocket support** | [#556](https://github.com/netease-youdao/LobsterAI/pull/556) | Long-connection mode for Popo IM integration |
| **Feishu one-click integration** | — | Streamlined Feishu/Lark IM channel setup |

**Migration notes:** Popo users upgrading from webhook-only versions should verify [#615](https://github.com/netease-youdao/LobsterAI/pull/615) — existing webhook configurations are now preserved during upgrade.

---

## 3. Project Progress

### Merged/Closed PRs (16 items)

| PR | Title | Significance |
|----|-------|------------|
| [#573](https://github.com/netease-youdao/LobsterAI/pull/573) | **perf(sqlite): convert SqliteStore to async IO with debounced saves** | Critical performance fix — eliminates main thread blocking on database operations |
| [#617](https://github.com/netease-youdao/LobsterAI/pull/617) | fix(cowork): clean up in-memory state when sessions are deleted | Resolves memory leak in `stoppedSessions` (fixes [#571](https://github.com/netease-youdao/LobsterAI/issues/571)) |
| [#615](https://github.com/netease-youdao/LobsterAI/pull/615) | fix(popo): preserve webhook connectionMode for existing users | Prevents breaking change for legacy Popo webhook users |
| [#612](https://github.com/netease-youdao/LobsterAI/pull/612) | feat(cowork): add unknown error friendly hints | UX improvement — localizes cryptic OpenClaw errors |
| [#616](https://github.com/netease-youdao/LobsterAI/pull/616) | refactor(logging): add logging guidelines and reduce channel sync noise | Developer experience + performance (removes 11 noisy per-tick logs) |
| [#614](https://github.com/netease-youdao/LobsterAI/pull/614) | feat(cowork): disable input controls for IM-created sessions | Prevents confusion — IM sessions now show info banner instead of input |
| [#613](https://github.com/netease-youdao/LobsterAI/pull/613) | fix(popo): skip token validation in websocket connection mode | Fixes false "missing token" errors for WebSocket users |
| [#608](https://github.com/netease-youdao/LobsterAI/pull/608) | feat(renderer): add first-start privacy agreement dialog | **Compliance requirement** — GDPR/privacy law adherence |
| [#607](https://github.com/netease-youdao/LobsterAI/pull/607) | fix(openclaw): fix assistant message fragmentation after tool_use | Critical UX fix — prevents message splitting in tool workflows |
| [#593](https://github.com/netease-youdao/LobsterAI/pull/593) | feat(skills): add safety scanning for skill installation | Security hardening — malware scanning for third-party skills |
| [#584](https://github.com/netease-youdao/LobsterAI/pull/584) | feat(cowork): improve engine error UX | Prevents message loss on gateway failure, preserves draft state |

**Key advancement:** Core infrastructure stabilization (SQLite async I/O, memory leak fixes, error handling) alongside IM ecosystem expansion.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#498](https://github.com/netease-youdao/LobsterAI/issues/498) — Context compression causing repetitive responses | 1 comment, open since Mar 19 | **Core AI behavior issue** — users report LobsterAI "stuck" repeating previous answers. Suggests memory/context window management problems. High user impact, needs prioritization. |
| [#611](https://github.com/netease-youdao/LobsterAI/issues/611) — Post-upgrade 404 errors | 1 comment, urgent | **Regression** — complete functionality loss after update. Nginx 404 suggests backend routing/API breakage. |
| [#634](https://github.com/netease-youdao/LobsterAI/issues/634) — Google Gemini 400 error after latest update | 0 comments, new | **Model provider regression** — Gemini 3 integration broken in latest main. |
| [#589](https://github.com/netease-youdao/LobsterAI/pull/589) — Complete GitHub engineering infrastructure (CI/CD, security scanning) | Open, high effort | Community-contributed DevOps modernization — includes 20+ workflow files, templates, auto-labeling. **Critical for project maturity.** |
| [#610](https://github.com/netease-youdao/LobsterAI/pull/610) — Refactor prompt input with structured composer | Open, major UX refactor | **Cursor-like experience** — aims to unify `@` mentions, `/` commands, attachments into single composer. Addresses "discovery cost" pain point. |

**Underlying needs:** Users demand **reliable AI responses** (#498), **stable upgrades** (#611), and **modern IDE-like interaction patterns** (#610). Infrastructure maturity (#589) is recognized as blocker for scaling contributions.

---

## 5. Bugs & Stability

### Critical (Data Loss / Crash)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#622](https://github.com/netease-youdao/LobsterAI/issues/622) | Migration ROLLBACK still writes completion marker → **permanent data loss** for user memories | ❌ No PR |
| [#624](https://github.com/netease-youdao/LobsterAI/issues/624) | `BrowserWindow.fromWebContents` null → **main process crash** | ❌ No PR |
| [#623](https://github.com/netease-youdao/LobsterAI/issues/623) | Unhandled Promise rejection in async IPC handlers → **crash/white screen** | ❌ No PR |

### High (Performance / Reliability)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#621](https://github.com/netease-youdao/LobsterAI/issues/621) | SQLite sync write blocks event loop → **UI freezing** | ✅ Fixed by [#573](https://github.com/netease-youdao/LobsterAI/pull/573) |
| [#571](https://github.com/netease-youdao/LobsterAI/issues/571) | `stoppedSessions` memory leak | ✅ Fixed by [#617](https://github.com/netease-youdao/LobsterAI/pull/617) |
| [#627](https://github.com/netease-youdao/LobsterAI/issues/627) | `drainTurnMemoryQueue` busy loop on error → **CPU exhaustion** | ❌ No PR |
| [#628](https://github.com/netease-youdao/LobsterAI/issues/628) | Unbounded memory XML → **token explosion/API limits** | ❌ No PR |

### Medium (Security / Resource Leaks)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#630](https://github.com/netease-youdao/LobsterAI/issues/630) | ReDoS vulnerability in memory regex | ❌ No PR |
| [#625](https://github.com/netease-youdao/LobsterAI/issues/625) | Skill temp directory leak on extraction failure | ❌ No PR |
| [#626](https://github.com/netease-youdao/LobsterAI/issues/626) | TTL timer race condition in skill install | ❌ No PR |

### Regressions in Latest Release

- [#611](https://github.com/netease-youdao/LobsterAI/issues/611): 404 errors post-upgrade
- [#634](https://github.com/netease-youdao/LobsterAI/issues/634): Google Gemini 400 errors

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Likelihood in Next Version |
|------|------|---------------------------|
| [#610](https://github.com/netease-youdao/LobsterAI/pull/610) — Structured composer (Cursor-like input) | UX overhaul | **High** — actively developed, addresses core interaction friction |
| [#605](https://github.com/netease-youdao/LobsterAI/pull/605) — Cron expression preview (next 5 executions) | Developer convenience | **High** — complete, pending review |
| [#609](https://github.com/netease-youdao/LobsterAI/pull/609) — Scheduled task strategy pattern refactor | Architecture | **Medium** — large refactor, may target next minor |
| [#632](https://github.com/netease-youdao/LobsterAI/issues/632) — MEEET World integration (707 AI agents) | Ecosystem expansion | **Low** — third-party request, needs evaluation |
| [#589](https://github.com/netease-youdao/LobsterAI/pull/589) — GitHub engineering infrastructure | Project health | **Critical** — community PR, maintainer decision pending |

**Emerging pattern:** Heavy investment in **Cowork/IDE experience** (#610, #605, #609) suggests LobsterAI positioning as **AI-native development environment** rather than chat interface.

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency | Severity |
|-------|-----------|----------|
| "Talk too long, AI repeats last answer" ([#498](https://github.com/netease-youdao/LobsterAI/issues/498)) | Recurring | High — breaks core utility |
| "After upgrade, completely unusable" ([#611](https://github.com/netease-youdao/LobsterAI/issues/611)) | Acute | Critical — trust erosion |
| "404 errors on all conversations" | Acute | Critical |
| Message loss on engine failure (addressed in [#584](https://github.com/netease-youdao/LobsterAI/pull/584)) | Recurring | Medium |

### Positive Signals

- IM integration flexibility (WebSocket + webhook) appreciated
- Skill ecosystem safety scanning welcomed ([#593](https://github.com/netease-youdao/LobsterAI/pull/593))
- Privacy compliance dialog ([#608](https://github.com/netease-youdao/LobsterAI/pull/608)) demonstrates responsibility

### Use Case Tensions

| Tension | Evidence |
|---------|----------|
| **Power users want IDE-like control** vs. **simplicity for IM users** | [#610](https://github.com/netease-youdao/LobsterAI/pull/610) composer refactor vs. [#614](https://github.com/netease-youdao/LobsterAI/pull/614) IM session simplification |
| **Local-first reliability** vs. **cloud AI features** | Multiple SQLite/data integrity issues |

---

## 8. Backlog Watch

### Critical Issues Awaiting Maintainer Response

| Issue | Age | Risk |
|-------|-----|------|
| [#498](https://github.com/netease-youdao/LobsterAI/issues/498) — Context compression/repetition | 3 days | **Core AI quality** — no maintainer comment |
| [#622](https://github.com/netease-youdao/LobsterAI/issues/622) — Permanent data loss on failed migration | 1 day | **Data integrity** — no PR, high severity |
| [#624](https://github.com/netease-youdao/LobsterAI/issues/624) + [#623](https://github.com/netease-youdao/LobsterAI/issues/623) — Crash vulnerabilities | 1 day | **Stability** — batch of 8 issues from @BucleLiu needs triage |

### Stalled PRs

| PR | Status | Blocker |
|----|--------|---------|
| [#589](https://github.com/netease-youdao/LobsterAI/pull/589) — Full CI/CD infrastructure | Open, 2 days | Large scope — needs maintainer review bandwidth |
| [#633](https://github.com/netease-youdao/LobsterAI/pull/633) — OpenClaw message display + anti-sleep | Open, 1 day | Likely pending #607 stabilization |

### Recommendation

The **@BucleLiu security/stability audit** (8 issues filed Mar 21) represents a **critical quality intervention**. These issues identify real crash, data loss, and resource exhaustion vectors. Prioritizing these fixes over new features would significantly improve project health metrics.

---

*Digest generated from 45 GitHub events (16 issues, 29 PRs) on 2026-03-22*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-22

**Repository:** [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

---

## 1. Today's Overview

TinyClaw shows **minimal but targeted activity** with 2 PRs updated in the past 24 hours—one merged fix and one open fix under review. No new issues were reported, suggesting either stability in current deployments or low user engagement. The project appears to be in a **maintenance-focused phase**, with contributions concentrated on reliability improvements rather than feature expansion. Zero open issues indicates either effective triage or limited community reporting. Overall project health reads as **stable but quiet**, with core contributors addressing edge-case bugs in messaging infrastructure.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

### Merged/Closed PRs

| PR | Description | Impact |
|:---|:---|:---|
| [#246](https://github.com/TinyAGI/tinyclaw/pull/246) | **fix(telegram): fix watchdog timer bug that prevented polling restart** | Critical reliability fix for Telegram bot connectivity |

**Technical Details:** Resolved a dual-bug condition in the Telegram watchdog timer where (1) polling failed to restart after network disruptions or laptop sleep/wake cycles, and (2) the bot would permanently lose message reception capability without recovery. This fixes a **production-critical failure mode** affecting long-running deployments on unstable networks or mobile hardware.

---

## 4. Community Hot Topics

| Item | Status | Engagement | Analysis |
|:---|:---|:---|:---|
| [#247](https://github.com/TinyAGI/tinyclaw/pull/247) | Open | 0 reactions, 0 comments | Underlying need: **Predictable message ordering** in multi-agent routing |

**Signal:** PR #247 addresses queue serialization—parallel processing of channel/scheduled messages versus sequential handling. The "default" chain vs. heartbeat/routing split suggests **architectural tension** in the agent dispatch system. Users likely need guarantees about which agent handles which message class. No explicit user demand visible, but the fix implies reported runtime misrouting.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available |
|:---|:---|:---|:---|
| 🔴 **Critical** | Telegram polling permanent failure after network events | **Fixed** in [#246](https://github.com/TinyAGI/tinyclaw/pull/246) | ✅ Merged |
| 🟡 **Medium** | Agent routing misassignment at enqueue time | **In Review** [#247](https://github.com/TinyAGI/tinyclaw/pull/247) | ⏳ Pending merge |

**Assessment:** Both bugs affect **production reliability**—message delivery and correct agent dispatch. The Telegram fix removes a silent failure mode; the routing fix prevents logical errors in multi-agent deployments. No new regressions reported.

---

## 6. Feature Requests & Roadmap Signals

*No explicit feature requests in today's data.*

**Inferred from PR #247:** The queue serialization work suggests roadmap pressure toward:
- **Deterministic agent assignment** (explicit agent field handling)
- **Better observability** for message routing decisions
- **Potential:** Structured logging/telemetry for queue state (common follow-up to serialization fixes)

---

## 7. User Feedback Summary

| Aspect | Evidence | Assessment |
|:---|:---|:---|
| **Pain points** | Telegram bot "going silent" — required watchdog fix | Network resilience gaps in long-running deployments |
| **Use cases** | Laptop sleep/wake, mobile hardware, unstable networks | Edge-case production environments |
| **Satisfaction** | No open issues, rapid fix turnaround (same-day merge) | Core contributors responsive to critical bugs |

**Gap:** Zero user-reported issues suggests either (a) small user base, (b) effective self-hosting without upstream reporting, or (c) issues filed elsewhere (Discord, etc.).

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| *None identified* | — | — | — |

**Note:** With zero open issues and only one open PR (#247, created 2026-03-21), the project has **no visible backlog**. Maintainer attention appears fully current. If #247 remains unmerged beyond 48 hours, it would warrant priority review given its pairing with the already-merged critical fix.

---

## Summary Metrics

| Metric | Value |
|:---|:---|
| Issues (open/closed today) | 0 / 0 |
| PRs (merged/open) | 1 / 1 |
| Releases | 0 |
| Critical fixes delivered | 1 |
| Time to merge critical fix | <24 hours |

**Verdict:** TinyClaw is in **stable maintenance mode** with responsive core maintenance but limited community velocity. The Telegram fix removes a significant production blocker; #247's merge would complete a reliability-focused maintenance window.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-22

## 1. Today's Overview

Moltis shows minimal but steady maintenance activity with **2 open pull requests updated in the past 24 hours**, though no new issues, releases, or merged code. The project appears to be in a **stabilization phase** with focus on platform compatibility fixes rather than feature development. No active community discussions or reported bugs today suggests either low user friction with current builds or reduced user engagement. The 7-day gap between PR creation dates indicates sporadic contributor activity. Overall project health: **stable but quiet**, with attention needed on aging open PRs.

---

## 2. Releases

**No new releases.** The project has no tagged releases in the tracked period.

---

## 3. Project Progress

**No PRs merged or closed today.**

Active PRs under development:

| PR | Status | Progress |
|:---|:---|:---|
| [#459 Feat/nix build fix](https://github.com/moltis-org/moltis/pull/459) | Open, updated 2026-03-21 | Nix build system integration; witness code development in progress |
| [#436 fix(sessions): Windows file lock fix](https://github.com/moltis-org/moltis/pull/436) | Open, updated 2026-03-21 | Windows compatibility fix refined; addresses #434 |

Both PRs remain unmerged with ongoing work. The Windows fix PR (#436) shows sustained attention (7 days since creation, updated yesterday), suggesting active refinement.

---

## 4. Community Hot Topics

**No active discussions today.** The two open PRs represent the only community-visible work:

- **[#459](https://github.com/moltis-org/moltis/pull/459)** — Infrastructure expansion (Nix support)
  - *Underlying need*: Reproducible builds, developer environment portability
  - *Signal*: Project maturing toward production deployment standards

- **[#436](https://github.com/moltis-org/moltis/pull/436)** — Cross-platform reliability
  - *Underlying need*: Windows user base expansion; enterprise/corporate environment support
  - *Technical depth*: Author demonstrates deep Windows API knowledge (LockFileEx, FILE_APPEND_DATA semantics)

**Engagement gap**: Zero comments and zero reactions on both PRs indicates limited maintainer or community feedback loops.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available |
|:---|:---|:---|:---|
| **Medium** | Windows session file locking (os error 5) — [#434](https://github.com/moltis-org/moltis/issues/434) | Known, fix in review | **Yes** — [#436](https://github.com/moltis-org/moltis/pull/436) |

**No new bugs reported today.** The Windows file lock issue remains the only tracked stability concern. The fix PR (#436) addresses a nuanced platform-specific behavior in Rust's stdlib; delayed merge may indicate:
- Awaiting Windows CI verification
- Maintainer bandwidth constraints
- Pending review of seek-position edge cases in the proposed `write(true)+seek` replacement

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests today.** Inferred roadmap signals from active PRs:

| Signal | Likelihood in Next Release | Rationale |
|:---|:---|:---|
| Nix build support | Medium-High | Active development, infrastructure priority |
| Windows stability improvements | High | Fix PR mature, addresses reported issue |
| Witness/attestation features | Medium | Mentioned in #459, may be experimental |

**Gap**: No user-facing feature requests visible; roadmap appears contributor-driven rather than demand-driven.

---

## 7. User Feedback Summary

**No direct user feedback captured today.**

Inferred pain points from PR activity:
- **Windows developers** experiencing file lock failures (session persistence)
- **DevOps/infra users** seeking Nix reproducibility for deployment

**Satisfaction indicators**: Absence of new issues may indicate core functionality meets needs, or conversely, low adoption. The detailed technical quality of #436 suggests engaged, sophisticated contributors.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#436 Windows file lock fix](https://github.com/moltis-org/moltis/pull/436) | 8 days | **Medium** — platform stability, user-reported | Maintainer review, Windows CI pass, merge decision |
| [#459 Nix build](https://github.com/moltis-org/moltis/pull/459) | 1 day | Low — feature addition | Clarification on "witness code" scope; review when ready |

**Recommendation**: PR #436 warrants priority attention—it's a complete, well-documented fix for a reported platform bug with no outstanding author activity needed. Delayed merge risks contributor disengagement and Windows user attrition.

---

*Digest generated from github.com/moltis-org/moltis data. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-22

## 1. Today's Overview

CoPaw shows **high community activity** with 50 issues updated in 24 hours (41 open, 9 closed) and 14 PRs (10 open, 4 merged/closed). No new release was published, indicating the project is in a stabilization phase following the recent v0.1.0 major release. The community is actively reporting migration pains from v0.0.7 to v0.1.0, with critical issues around data loss, skill system changes, and configuration compatibility dominating discussions. Developer response appears moderately engaged with 4 PR closures, though the high open-to-closed ratio suggests backlog pressure. The project health is **stable but strained** with significant technical debt from architectural changes in v0.1.0.

---

## 2. Releases

**No new releases** — The latest version remains v0.1.0.post1.

---

## 3. Project Progress

### Merged/Closed PRs Today (4 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1995](https://github.com/agentscope-ai/CoPaw/pull/1995) | emoubarak | Windows port 8088 conflict troubleshooting guide | **Docs** — Addresses Docker deployment blocker on Windows |
| [#1994](https://github.com/agentscope-ai/CoPaw/pull/1994) | emoubarak | Windows port 8088 conflict FAQ (duplicate/related) | **Docs** — Merged alongside #1995 |
| [#1991](https://github.com/agentscope-ai/CoPaw/pull/1991) | f3125472 | Fix custom channels dict type handling in `ChannelManager` | **Bug Fix** — Resolves [#1987](https://github.com/agentscope-ai/CoPaw/issues/1987), enables custom channel startup |
| [#1996](https://github.com/agentscope-ai/CoPaw/pull/1996) | aimentorai | Feature/add model selection | **Feature** — Closed without merge details; possibly superseded |

### Active Development (10 Open PRs)

| PR | Author | Focus Area |
|:---|:---|:---|
| [#1952](https://github.com/agentscope-ai/CoPaw/pull/1952) | mautops | **Multi-agent orchestration** — User-level workflows folder and API |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | seoeaa | **OpenRouter provider** with model filtering |
| [#2016](https://github.com/agentscope-ai/CoPaw/pull/2016) | Yaohua-Leo | **Async fix** — `threading.Lock` → `asyncio.Lock` for TokenUsageManager |
| [#2010](https://github.com/agentscope-ai/CoPaw/pull/2010) | lcq225 | **Documentation** — Troubleshooting, Embedding config, examples (Chinese) |
| [#1984](https://github.com/agentscope-ai/CoPaw/pull/1984) | gnipping | **ToolGuard** — Parallel tool call support and forced replay fix |
| [#1980](https://github.com/agentscope-ai/CoPaw/pull/1980) | ltzu929 | **UI fix** — Mermaid diagram scroll flickering |
| [#2002](https://github.com/agentscope-ai/CoPaw/pull/2002) | EuanTop | **Agent config** — Exposed LLM auto-retry settings in Console |
| [#2001](https://github.com/agentscope-ai/CoPaw/pull/2001) | finenter-molei | **Channel stability** — Console reconnection queue size fix |
| [#1986](https://github.com/agentscope-ai/CoPaw/pull/1986) | chujianyun | **QQ channel** — File sending via rich media API |
| [#1988](https://github.com/agentscope-ai/CoPaw/pull/1988) | bowenliang123 | **Docker optimization** — Reduced layers and apt-get calls |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | Core Concern |
|:---|:---|:---:|:---|
| 1 | [#1976](https://github.com/agentscope-ai/CoPaw/issues/1976) — RuntimeError: Task has been cancelled! | **14** | **Critical stability** — Async task cancellation causing agent crashes; fix claimed in #1956 but persists |
| 2 | [#2023](https://github.com/agentscope-ai/CoPaw/issues/2023) — Skills missing after v1.0 upgrade, memory lost | **12** | **Data loss** — Docker upgrade path destroys user data; skills and memory vanish |
| 3 | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) — Feishu channel "delayed reply" bug | **10** | **Production reliability** — Bot answers wrong message due to race condition in message queue |
| 4 | [#1960](https://github.com/agentscope-ai/CoPaw/issues/1960) — Web console showing raw JSON in chat | **7** | **UI regression** — Nested JSON structure leaking to user interface |
| 5 | [#1967](https://github.com/agentscope-ai/CoPaw/issues/1967) — Version display mismatch (pip 0.1.0 vs UI 0.0.5) | **6** | **Configuration confusion** — Cache/persistence issue in version detection |

### Underlying Needs Analysis

- **Migration tooling**: Users desperately need official v0.0.7 → v0.1.0 migration scripts
- **Data durability**: Multiple reports of configuration/memory loss indicate insufficient backup/restore mechanisms
- **Channel reliability**: Feishu integration has persistent message ordering issues
- **Skill system clarity**: Breaking changes in skill architecture poorly communicated

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#1976](https://github.com/agentscope-ai/CoPaw/issues/1976) | `RuntimeError: Task has been cancelled!` — Agent crashes mid-conversation | **Partial** — Claimed fixed in #1956, but reports continue; needs investigation |
| [#2023](https://github.com/agentscope-ai/CoPaw/issues/2023) | Skills and memory lost on v1.0 Docker upgrade | **None** — Workaround: manual backup before upgrade |
| [#2034](https://github.com/agentscope-ai/CoPaw/issues/2034) | WebUI chat history lost on page refresh | **None** — Persistence layer failure |
| [#2033](https://github.com/agentscope-ai/CoPaw/issues/2033) | Gemini API "Corrupted thought signature" + FunctionCallOutput ValidationError | **None** — Google GenAI SDK compatibility issue |

### High Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | Feishu delayed reply — message queue race condition | **None** — Long-standing, affects production users |
| [#1960](https://github.com/agentscope-ai/CoPaw/issues/1960) | Raw JSON leaking to WebUI chat | **None** — Rendering pipeline issue |
| [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) | Context compression interrupts active tasks, loses session | **None** — Background task priority conflict |
| [#1950](https://github.com/agentscope-ai/CoPaw/issues/1950) | `chats.json` corruption → JSONDecodeError | **Closed** — Root cause: file emptying; needs hardening |
| [#1985](https://github.com/agentscope-ai/CoPaw/issues/1985) | Google GenAI SDK `AttributeError: 'BaseApiClient' object has no attribute '_async_httpx_client'` | **None** — SDK version incompatibility |

### Medium Severity

| Issue | Description |
|:---|:---|
| [#1935](https://github.com/agentscope-ai/CoPaw/issues/1935) | `write_file` CSV Chinese encoding garbled on Windows |
| [#2004](https://github.com/agentscope-ai/CoPaw/issues/2004) | `write_file` cannot create subdirectories or Chinese folders |
| [#2015](https://github.com/agentscope-ai/CoPaw/issues/2015) | `active_skills`/`customized_skills` not auto-syncing in v0.1.0 |
| [#1403](https://github.com/agentscope-ai/CoPaw/issues/1403) | Feishu message deduplication missing |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|:---|:---|:---:|
| [#1952](https://github.com/agentscope-ai/CoPaw/pull/1952) | **Multi-agent orchestration** — User-level workflows API | **High** — Active PR, core architectural direction |
| [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) | Multi-agent bot binding + collaborative task execution | **High** — Natural extension of #1952 |
| [#2032](https://github.com/agentscope-ai/CoPaw/issues/2032) | Global/shared skills directory for multi-agent scenarios | **Medium** — Depends on #1952 architecture |
| [#2026](https://github.com/agentscope-ai/CoPaw/issues/2026) | Mobile-responsive console UI | **Medium** — UX improvement, lower priority |
| [#2002](https://github.com/agentscope-ai/CoPaw/pull/2002) | Configurable LLM auto-retry settings in Console | **High** — PR active, user-configurability theme |
| [#1986](https://github.com/agentscope-ai/CoPaw/pull/1986) | QQ channel file sending | **Medium** — Channel parity feature |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | OpenRouter provider with model filtering | **Medium** — Provider expansion |

### Predicted v0.1.1 Priorities
1. Multi-agent orchestration (#1952)
2. Migration tooling and data preservation
3. Feishu channel reliability fixes
4. Gemini/Google GenAI SDK compatibility

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Upgrade trauma** | #2023, #1998, #2015, #1945 | 🔴 Critical |
| | Users losing skills, memory, configuration when upgrading to v0.1.0 | |
| **Data persistence failures** | #2034, #1950, #1974 | 🔴 Critical |
| | Chat history, session state, configuration files corrupt or vanish | |
| **Feishu production issues** | #1345, #1403, #1306 | 🟡 High |
| | Message ordering, deduplication, prefix handling | |
| **Windows-specific problems** | #1935, #2004, #1485, #1131 | 🟡 High |
| | Encoding, paths, port conflicts, PowerShell error handling | |
| **Skill system confusion** | #2023, #2015, #2008, #1945 | 🟡 High |
| | YAML Front Matter requirement, directory structure changes, sync behavior | |

### Positive Signals

- Active community contributing fixes (#1991, #1995, #2016, #2001)
- Documentation improvements addressing gaps (#2010, #1995)
- Multi-agent direction aligns with user needs (#2035)

### Use Case Patterns

| Pattern | Description |
|:---|:---|
| Enterprise Feishu deployment | Heavy reliance on Feishu channel for business workflows |
| Local model experimentation | Ollama, local embeddings for privacy-sensitive use |
| Multi-agent task automation | Users building agent teams for complex workflows |
| File/data processing | Heavy use of `write_file`, CSV handling, document generation |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days, high impact)

| Issue | Age | Problem | Action Needed |
|:---|:---:|:---|:---|
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 9 days | Feishu delayed reply — production blocker | Assign channel maintainer; message queue audit |
| [#1403](https://github.com/agentscope-ai/CoPaw/issues/1403) | 8 days | Feishu message deduplication | Related to #1345; needs architectural fix |
| [#1306](https://github.com/agentscope-ai/CoPaw/issues/1306) | 9 days | Feishu `[BOT]` prefix hardcoded | Simple fix; needs triage |
| [#1131](https://github.com/agentscope-ai/CoPaw/issues/1131) | 11 days | PowerShell error capture incomplete | Windows compatibility gap |
| [#326](https://github.com/agentscope-ai/CoPaw/issues/326) | 19 days | Ollama tool support error | Local model documentation |

### PRs At Risk of Stagnation

| PR | Age | Risk |
|:---|:---:|:---|
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | 11 days | OpenRouter provider — significant work, needs review |
| [#1952](https://github.com/agentscope-ai/CoPaw/pull/1952) | 2 days | Multi-agent orchestration — high complexity, needs architectural review |

### Recommended Maintainer Actions

1. **Emergency**: Create official v0.0.7 → v0.1.0 migration guide with backup/restore scripts
2. **High**: Assign dedicated Feishu channel maintainer; message queue system needs audit
3. **Medium**: Review and merge #1952 (multi-agent) to unblock dependent features
4. **Process**: Establish "migration" label for upgrade-related issues; weekly triage

---

*Digest generated from GitHub activity 2026-03-21 to 2026-03-22. All links: https://github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-22

---

## 1. Today's Overview

EasyClaw (RivonClaw) shows **moderate maintenance activity** with three rapid-fire patch releases (v1.7.3–v1.7.5) issued in the past 24 hours, suggesting an active hotfix cycle for macOS distribution issues. No open issues or pull requests remain, indicating either effective triage or limited community engagement. The project appears to be in a **stabilization phase** following the v1.7.x series launch, with maintainer focus on installation friction rather than feature development. All recent issues were closed within 48 hours, demonstrating responsive support. Overall health: **stable with distribution teething problems**.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| **[v1.7.5](https://github.com/gaoyangz77/rivonclaw/releases/tag/v1.7.5)** | 2026-03-21 | Identical macOS Gatekeeper documentation to v1.7.4 |
| **[v1.7.4](https://github.com/gaoyangz77/rivonclaw/releases/tag/v1.7.4)** | 2026-03-21 | Identical macOS Gatekeeper documentation to v1.7.3 |
| **[v1.7.3](https://github.com/gaoyangz77/rivonclaw/releases/tag/v1.7.3)** | 2026-03-21 | **First documented release** with macOS unsigned app workaround |

**Analysis:** Three releases with identical content suggests **release automation issues** or repeated attempts to fix release asset packaging. No changelog differences detected—only macOS installation troubleshooting documentation.

**Breaking Changes:** None  
**Migration Notes:** macOS users must run `xattr -cr /Applications/RivonClaw.app` or equivalent Gatekeeper bypass (documented in all three releases).

---

## 3. Project Progress

**No pull requests** updated in the last 24 hours.

Progress appears to occur via **direct commits** rather than community PRs. The v1.7.3–1.7.5 sequence indicates maintainer-driven fixes for:
- macOS code signing/notarization gaps
- Release packaging pipeline reliability

---

## 4. Community Hot Topics

| Issue | Status | Activity | Key Insight |
|-------|--------|----------|-------------|
| [#22](https://github.com/gaoyangz77/rivonclaw/issues/22) | **CLOSED** | 2 comments | **Multi-browser architecture clarification** — user confusion between "multi-user" vs. "cross-platform sync" paradigms |
| [#25](https://github.com/gaoyangz77/rivonclaw/issues/25) | **CLOSED** | 2 comments | **API validation error** — `⚠ 400 [] is too short - 'tools'` on Windows 11 v1.7.2 |

**Underlying Needs:**
- **#22:** Users need clearer product positioning. "Multi-browser" terminology is ambiguous—suggests either browser automation (Selenium/Playwright) or cloud sync. The login/no-login comparison indicates **privacy-conscious users evaluating data handling**.
- **#25:** Empty `tools` array validation failure suggests **schema mismatch between client and API**—likely fixed in v1.7.3+ given rapid release cycle.

---

## 5. Bugs & Stability

| Severity | Issue | Platform | Status | Fix Available |
|----------|-------|----------|--------|---------------|
| 🔴 **High** | [#25](https://github.com/gaoyangz77/rivonclaw/issues/25): `400 [] is too short - 'tools'` | Windows 11 | **CLOSED** | Likely fixed in v1.7.3+ (implied by release timing) |
| 🟡 **Medium** | macOS "damaged app" Gatekeeper block | macOS | **WORKAROUND DOCUMENTED** | No code signing fix; manual bypass required |

**Regressions:** None new. The #25 error pattern (empty tools array) suggests **backend API tightening** without client-side validation updates—watch for recurrence.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** in active issues.

**Inferred from #22:**
- **Clarified multi-browser/multi-user documentation** — likely incoming
- **Offline/local-only mode** — implied by "login vs. no login" concern
- **Cross-platform state sync** — user expectation not clearly met

**Predicted for next version:**
- Proper macOS code signing (eliminating Gatekeeper workaround)
- Client-side `tools` array validation before API submission

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Installation friction (macOS)** | All three releases dedicated to Gatekeeper workaround | High |
| **API error opacity** | #25: cryptic `[] is too short` message | Medium |
| **Feature discoverability** | #22: core architecture misunderstood | Medium |
| **Rapid version churn** | 3 releases in 24h with identical docs | Low (confusion) |

**Use Case Signal:** Single user (`slowayear`) filed both issues—suggests **early adopter power user** stress-testing the v1.7.x release. Their engagement pattern (Windows + macOS questions, multi-browser inquiry) indicates **cross-platform productivity workflow** target demographic.

---

## 8. Backlog Watch

**No stagnant issues detected** — all recent issues closed within 48 hours.

**Watch Items:**
- **Code signing status:** No open issue tracking proper Apple notarization
- **API schema documentation:** No reference docs for `tools` array structure
- **Changelog discipline:** Three releases with identical content needs explanation

**Maintainer Attention Needed:**
- Clarify release versioning strategy (semantic versioning adherence?)
- Add issue template for bug reports (would have captured #25 environment details faster)
- Consider pinned issue explaining multi-browser architecture per #22

---

*Digest generated from gaoyangz77/rivonclaw repository data. Links reference `rivonclaw` as the active project name (EasyClaw appears to be parent organization or legacy naming).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*