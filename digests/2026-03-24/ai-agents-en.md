# OpenClaw Ecosystem Digest 2026-03-24

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-24 00:08 UTC

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

# OpenClaw Project Digest — 2026-03-24

---

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a major release cycle with significant community engagement. The project released **v2026.3.23** as a hotfix following the **v2026.3.22** release, which introduced a critical regression: missing Control UI assets in npm packages. This packaging failure dominated issue traffic, generating 15+ duplicate reports within hours. Despite the disruption, the team responded rapidly with a same-day fix. The 370 open/active issues against 130 closed suggests the project is in a high-velocity but potentially destabilizing phase, with community growth outpacing QA capacity.

---

## 2. Releases

### [v2026.3.23](https://github.com/openclaw/openclaw/releases/tag/v2026.3.23) — Hotfix Release
**Released:** 2026-03-23

| Category | Details |
|----------|---------|
| **Breaking Changes** | None |
| **Fixes** | **Browser/Chrome MCP**: Fixed macOS Chrome attach flows by waiting for existing-session browser tabs to become usable after attach, rather than treating the initial Chrome MCP handshake as ready. Reduces user-profile timeouts and repeated consent churn. |
| **Migration Notes** | Direct upgrade recommended for macOS users experiencing Chrome MCP connection issues. |

### [v2026.3.22](https://github.com/openclaw/openclaw/releases/tag/v2026.3.22) — Major Release (Problematic)
**Released:** 2026-03-22

| Category | Details |
|----------|---------|
| **Breaking Changes** | **Plugins/install**: Bare `openclaw plugins install <package>` now prefers **ClawHub before npm** for npm-safe names, falling back to npm only when ClawHub lacks the package/version. [Docs](https://docs.openclaw.ai/tools/clawhub) |
| **Known Critical Issue** | **Control UI assets missing from npm package** — `dist/control-ui/` directory not included in published package, causing dashboard 503 errors. **Fixed in v2026.3.23.** |
| **Migration Notes** | Users upgrading via npm should skip v2026.3.22 and install v2026.3.23 directly. Docker/appcast users unaffected. |

### [v2026.3.22-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.22-beta.1)
- Pre-release with same breaking changes as v2026.3.22
- **No macOS app build attached** — macOS assets intentionally remain on stable v2026.3.22

---

## 3. Project Progress

### Merged/Closed PRs (24h)

| PR | Author | Scope | Impact |
|:---|:---|:---|:---|
| [#53177](https://github.com/openclaw/openclaw/pull/53177) | MoerAI | `commands` | **Mistral fix**: Lowered default `maxTokens` to prevent 422 rejections when `max_tokens` equals context window |
| [#50105](https://github.com/openclaw/openclaw/pull/50105) | aidenwildenbadt | `scripts` | **Plugin SDK fix**: Exported `imessage-core` subpath for BlueBubbles extension compatibility |
| [#42450](https://github.com/openclaw/openclaw/pull/42450) | altaywtf | `docs` | Telegram documentation: clarified `groupAllowFrom` vs `channels.telegram.groups` distinction |
| [#45349](https://github.com/openclaw/openclaw/pull/45349) | altaywtf | `channel: voice-call` | Config schema parity: fixed Zod schema validation gaps for channel configs |
| [#42168](https://github.com/openclaw/openclaw/pull/42168) | ghost | `channel: discord` | Reduced ack-reaction churn on bot-authored messages |
| [#25260](https://github.com/openclaw/openclaw/pull/25260) | martinfrancois | `docs` | Removed personal references ("Peter") from documentation for generic agent guidance |
| [#53229](https://github.com/openclaw/openclaw/pull/53229) | sallyom | `maintainer` | Changelog for #53187 |

### Active Development (Open PRs)

| PR | Author | Scope | Status |
|:---|:---|:---|:---|
| [#48561](https://github.com/openclaw/openclaw/pull/48561) | zoherghadyali | `browser` | **macOS Edge detection fix** — addresses silent null returns from osascript path resolution |
| [#52534](https://github.com/openclaw/openclaw/pull/52534) | ATran28 | `gateway` | **Delivery queue reliability** — replaces startup-only recovery with periodic 2-min timer |
| [#48590](https://github.com/openclaw/openclaw/pull/48590) | xinbenlv | `security` | **Phase 1 Progressive Permission Pattern** — exact-match "allow-always" prevents privilege escalation |
| [#53037](https://github.com/openclaw/openclaw/pull/53037) | ViewWay | `i18n` | **Internationalization support** — locale parameter in config schema, UI components, command palette language switcher |
| [#32154](https://github.com/openclaw/openclaw/pull/32154) | HollyLight28 | `memory` | **Hybrid memory plugin** — Knowledge Graph + 5-channel scoring + free Gemini support |
| [#52651](https://github.com/openclaw/openclaw/pull/52651) | sallyom | `cli` | **Containerized OpenClaw support** — major infrastructure feature |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Status | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 114 | 5 | OPEN | **i18n/Localization Support** | Global accessibility; team acknowledges demand but cites bandwidth constraints |
| [#52808](https://github.com/openclaw/openclaw/issues/52808) | 29 | 60 | **CLOSED** | Control UI missing from npm (v2026.3.22) | **Critical packaging QA gap** — users need reliable dashboard deployment |
| [#52823](https://github.com/openclaw/openclaw/issues/52823) | 29 | 12 | **CLOSED** | Control UI assets not found (regression) | Same as above; Chinese-speaking user base affected |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) | 24 | 3 | OPEN | Kimi web_search 401 errors | Chinese AI ecosystem integration reliability |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 18 | 1 | OPEN | **Prebuilt Android APK releases** | Mobile deployment friction; build-from-source barrier |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | 15 | 1 | OPEN | **Community Skill Development & ClawHub** | Ecosystem growth; skill discoverability and trust |
| [#52925](https://github.com/openclaw/openclaw/issues/52925) | 14 | 0 | **CLOSED** | Control UI assets missing (npm) | Packaging regression |
| [#52820](https://github.com/openclaw/openclaw/issues/52820) | 14 | 2 | OPEN | Control UI disappeared after update | Ongoing dashboard stability concerns |

### Analysis

The **i18n issue (#3460)** remains the longest-running community demand with 114 comments, signaling a structural gap between OpenClaw's global user base and maintainer capacity. The **Control UI packaging disaster** reveals CI/CD weaknesses in the npm release pipeline. **ClawHub ecosystem maturity (#50090)** represents strategic technical debt — the plugin marketplace promise outpaces implementation.

---

## 5. Bugs & Stability

### Critical (Data Loss / Complete Failure)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#52808](https://github.com/openclaw/openclaw/issues/52808) | `dist/control-ui/` missing from npm package — dashboard 503 | **FIXED in v2026.3.23** |
| [#52823](https://github.com/openclaw/openclaw/issues/52823) | Same regression, Chinese user report | **FIXED** |
| [#52925](https://github.com/openclaw/openclaw/issues/52925) | Debian/npm install: Control UI assets missing | **FIXED** |
| [#53019](https://github.com/openclaw/openclaw/issues/53019) | npm package missing Control UI build files | **FIXED** |

### High (Feature Broken / Workaround Required)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#52813](https://github.com/openclaw/openclaw/issues/52813) | **WhatsApp plugin disappeared** after v2026.3.22 upgrade — "Unknown channel: whatsapp" | **CLOSED** — moved to `optionalBundledClusters`, needs `OPENCLAW_INCLUDE_OPTIONAL_BUNDLED=1` |
| [#52838](https://github.com/openclaw/openclaw/issues/52838) | **ACPX, WhatsApp, 4 other plugins silently broken** — optional bundled plugins excluded from npm | **CLOSED** — workflow issue identified |
| [#52831](https://github.com/openclaw/openclaw/issues/52831) | ACPX metadata present but plugin missing, resolves to skill | **CLOSED** |
| [#52885](https://github.com/openclaw/openclaw/issues/52885) | **WeChat plugin incompatible** with v2026.3.22+ — `openclaw/plugin-sdk` module not found (ESM/CJS mismatch) | **OPEN** — plugin ecosystem breakage |
| [#52899](https://github.com/openclaw/openclaw/issues/52899) | **Matrix Plugin API Version Mismatch** after v2026.3.22 | **OPEN** — 13 👍, migration path unclear |
| [#52876](https://github.com/openclaw/openclaw/issues/52876) | **Lark (Feishu) plugin loading errors** + Control UI missing | **OPEN** |

### Medium (Degraded Experience)

| Issue | Description | Fix PR |
|:---|:---|:---|
| [#44714](https://github.com/openclaw/openclaw/issues/44714) | `openclaw logs --follow` handshake timeout after v2026.3.12 | None identified |
| [#45311](https://github.com/openclaw/openclaw/issues/45311) | **Slack socket mode connects but receives zero events** (v2026.3.12 regression) | None identified |
| [#45753](https://github.com/openclaw/openclaw/issues/45753) | Control UI pairing flow gateway timeout with reverse proxy | None identified |
| [#36651](https://github.com/openclaw/openclaw/issues/36651) | Agent tools (exec, read, write, browser) not loading in Telegram sessions | None identified |
| [#39620](https://github.com/openclaw/openclaw/issues/39620) | Token usage shows 'unknown' in v2026.3.7 (regression from 3.2) | None identified |

### Stability Assessment

**Severe regression in v2026.3.22 release process** — the npm packaging omission suggests gaps in pre-publish validation. The "optional bundled plugins" architectural change broke multiple integrations without clear migration communication. Matrix, WeChat, and Lark plugin ecosystems are experiencing version compatibility crises.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| [#53037](https://github.com/openclaw/openclaw/pull/53037) | **i18n/Locale Support** | **HIGH** | Active PR with implementation; addresses #3460 (114 comments) |
| [#32154](https://github.com/openclaw/openclaw/pull/32154) | **Hybrid Memory Plugin** (Knowledge Graph + Gemini) | MEDIUM | Large PR open; memory architecture is competitive differentiator |
| [#52651](https://github.com/openclaw/openclaw/pull/52651) | **Containerized OpenClaw** | MEDIUM | Infrastructure demand; PR in review |
| [#52532](https://github.com/openclaw/openclaw/issues/52532) | **Cognitive Memory Layer** (Ebbinghaus decay, semantic memory) | LOW-MEDIUM | Well-specified RFC; significant architectural work |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | **Prebuilt Android APK** | LOW | Acknowledged but no maintainer bandwidth; build complexity |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | **ClawHub Skill Ecosystem** | LOW | Strategic but requires platform investment beyond core team |
| [#16357](https://github.com/openclaw/openclaw/issues/16357) | **prompt_cache_key for provider routing** | LOW | Niche optimization; provider-specific |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | **Safe/Unsafe ClawdBot modes** | LOW | Philosophical/architectural proposal; no implementation path |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Packaging/Release QA** | 15+ duplicate issues on Control UI assets; plugin ecosystem breakage | 🔴 Critical |
| **Plugin Version Compatibility** | WeChat, Matrix, Lark, WhatsApp, ACPX all broken by v2026.3.22 | 🔴 Critical |
| **Documentation Gaps** | Telegram allowlist confusion (#42450); "Peter" references in docs (#25260) | 🟡 Moderate |
| **Non-interactive/CI Deployments** | `openclaw doctor --fix` not honoring flags in non-interactive mode (#53197) | 🟡 Moderate |
| **Slack Reliability** | Socket mode event delivery failures (#45311, #28037) | 🟡 Moderate |
| **Mobile Deployment** | No prebuilt Android APKs (#9443) | 🟢 Low |

### Positive Signals

- **Rapid hotfix response**: v2026.3.23 released same day as critical reports
- **Security investment**: Progressive Permission Pattern (#48590) shows maturity
- **Memory architecture innovation**: Hybrid memory plugin (#32154) and cognitive memory RFC (#52532) demonstrate technical ambition

### User Sentiment Indicators

> *"The developers of OpenClaw are just a makeshift team; every update has bugs"* — [#53136](https://github.com/openclaw/openclaw/issues/53136)

> *"Skills are how OpenClaw grows beyond what ships in the box... The gap between promise and practice is wide right now"* — [#50090](https://github.com/openclaw/openclaw/issues/50090)

---

## 8. Backlog Watch

### Stale Critical Issues Needing Attention

| Issue | Age | Last Activity | Risk |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n Support | ~2 months | 2026-03-23 | **Community frustration**; PR #53037 may finally address |
| [#28037](https://github.com/openclaw/openclaw/issues/28037) Slack Socket Mode routing | ~1 month | 2026-03-23 | Enterprise adoption blocker; no assignee |
| [#10004](https://github.com/openclaw/openclaw/issues/10004) Multi-agent per-org isolation | ~1.5 months | 2026-03-23 | Platform scalability; referenced by Second (major user) |
| [#17189](https://github.com/openclaw/openclaw/issues/17189) Agent misled to restart gateway | ~1 month | 2026-03-23 | UX/prompt engineering; easy fix, no PR |
| [#11038](https://github.com/openclaw/openclaw/issues/11038) Context corruption exposes API errors | ~1.5 months | 2026-03-23 | Reliability; error handling gap |

### PRs At Risk of Stagnation

| PR | Age | Blocker |
|:---|:---|:---|
| [#48590](https://github.com/openclaw/openclaw/pull/48590) Security: Progressive Permission | ~1 week | Large scope (Phase 1 of 3); needs security review |
| [#29793](https://github.com/openclaw/openclaw/pull/29793) Workspace mutation locking | ~3 weeks | XL size; concurrency complexity |
| [#48355](https://github.com/openclaw/openclaw/pull/48355) Agent event hooks + streaming | ~1 week | L size; channel plugin architecture review needed |

---

**Digest compiled from 500 issues and 500 PRs updated 2026-03-23 to 2026-03-24.**

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-24

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem demonstrates exceptional velocity with **10 active projects** generating 1,000+ combined issue/PR updates in 24 hours. The landscape is bifurcated between **mature orchestration platforms** (OpenClaw, IronClaw, Moltis) optimizing for multi-channel enterprise deployments and **emerging specialized runtimes** (ZeptoClaw, NullClaw, NanoClaw) prioritizing security, local execution, or protocol interoperability. A critical mass has formed around the **Model Context Protocol (MCP)** and **Agent Client Protocol (ACP)** as interoperability standards, while **voice-native interactions**, **memory architecture innovations**, and **TEE/hosted security models** represent the primary technical battlegrounds. Chinese market integration (WeChat, Feishu/Lark, DingTalk) and local LLM optimization (Ollama, vLLM, GGUF) are universal priorities reflecting global deployment realities.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.3.23 (hotfix) | ⭐⭐⭐⭐☆ | High-velocity, destabilizing |
| **NanoBot** | 19 | 78 | — | ⭐⭐⭐⭐☆ | Active development |
| **ZeroClaw** | 44 | 50 | v0.5.9 + 2 betas | ⭐⭐⭐⭐☆ | Feature-rich, security friction |
| **PicoClaw** | 26 | 78 | v0.2.3-nightly | ⭐⭐⭐⭐☆ | Stabilization phase |
| **NanoClaw** | 17 | 37 | — | ⭐⭐⭐☆☆ | Security reckoning |
| **NullClaw** | 8 | 15 | — | ⭐⭐⭐⭐⭐ | Exceptional responsiveness |
| **IronClaw** | 16 | 50 | v0.22.0 (queued) | ⭐⭐⭐☆☆ | Scaling complexity |
| **LobsterAI** | 21 | 36 | 2026.3.23 | ⭐⭐⭐⭐☆ | Strong, resource-constrained |
| **TinyClaw** | 0 | 7 | — | ⭐⭐⭐☆☆ | Maintainer-dependent |
| **Moltis** | 0 (10 closed) | 42 | — | ⭐⭐⭐⭐⭐ | Zero backlog, excellent |
| **CoPaw** | 50 | 50 | — | ⭐⭐⭐⭐☆ | Post-release stabilization |
| **ZeptoClaw** | 6 | 11 | v0.8.0 | ⭐⭐⭐⭐☆ | Production-hardening |
| **EasyClaw** | 0 | 0 | v1.7.7 | ⭐⭐☆☆☆ | Maintenance mode |

*\*Health Score: 5-star scale based on velocity, responsiveness, backlog management, and stability*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 10× issue/PR volume of nearest competitor | Moltis, CoPaw at ~50 items/day; others <40 |
| **Release cadence** | Daily hotfix capability | Most peers: weekly or ad-hoc |
| **Ecosystem breadth** | 15+ channel integrations, ClawHub marketplace | IronClaw, Moltis catching up; NanoClaw fragmented |
| **Commercial backing** | Implied from velocity and infrastructure | LobsterAI (NetEase), IronClaw (NEAR) have corporate sponsors |

### Technical Approach Differences
| Aspect | OpenClaw | Key Peers |
|:---|:---|:---|
| **Architecture** | Monolithic TypeScript/Node with plugin SDK | Moltis (Rust), ZeptoClaw (Rust), NullClaw (Zig) — systems languages for performance |
| **Security model** | Progressive permission patterns (emerging) | ZeroClaw (restrictive defaults), NanoClaw (container escape concerns), Moltis (Secret<String> serialization) |
| **Memory** | Hybrid KG + semantic (PR #32154) | CoPaw (ReMe compaction), PicoClaw (Seahorse biologically-inspired), NanoBot (unbounded context crisis) |
| **Deployment** | npm, Docker, appcast channels | Moltis (Nix), NullClaw (GitOps/container-native), IronClaw (TEE-hosted) |

### Community Size Comparison
OpenClaw's **500 issues/500 PRs in 24 hours** indicates an order-of-magnitude larger contributor base than any peer. However, this scale creates **QA capacity constraints**—the v2026.3.22 packaging regression generated 15+ duplicate reports, while Moltis and NullClaw demonstrate superior **signal-to-noise ratios** with zero open issues despite high velocity.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP/ACP Protocol Interoperability** | OpenClaw, IronClaw, ZeptoClaw, NullClaw, LobsterAI | Tool discovery (#4042 ZeroClaw, #728 LobsterAI), ACP job delegation (#1600 IronClaw), stdio+HTTP transport (#356 ZeptoClaw) |
| **Voice/ASR-TTS Pipelines** | PicoClaw (#1648, #1852), ZeroClaw (beta.579), NanoBot (#2419), LobsterAI (#722) | Streaming audio I/O, multi-provider support (ElevenLabs, Whisper, local), platform-native formats (Discord, Weixin, Telegram) |
| **Memory Architecture Innovation** | OpenClaw (#32154), CoPaw (#2092, #2129), PicoClaw (#1919), Moltis (#476), NanoBot (#2343) | Bounded context guarantees, knowledge graphs, semantic + keyword hybrid, biological-inspired (hippocampus), KV cache optimization |
| **Chinese Platform Integration** | OpenClaw (WeChat, Lark, QQ), LobsterAI (DingTalk, Feishu, POPO), CoPaw (Xiaoyi, WeChat ClawBot), Moltis (WhatsApp improved), NanoBot (#2348) | QR login, webhook deduplication, official bot API migration, platform-specific rate limiting |
| **Local/Private LLM Optimization** | Moltis (#476, #408), IronClaw (#1537 TEE), LobsterAI (#713 Ollama), NanoBot (#2293), PicoClaw | Prefix caching, Vulkan GGUF, Ollama compatibility, TEE credential injection, cost-controlled failover |
| **Security Hardening** | NanoClaw (#457, #458, #865), ZeroClaw (#1478), Moltis (#472), ZeptoClaw (#402, #406), OpenClaw (#48590) | Command injection prevention, network sandboxing, secret redaction, container privilege separation, progressive permissions |
| **Multi-Agent Orchestration** | IronClaw (#1600 ACP), NullClaw (#700 a2a_call), CoPaw (#2035), NanoClaw (Rovo Dev backend) | Cross-agent memory, delegation protocols, per-agent tool permissions, session handoff |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Ecosystem scale, ClawHub marketplace, rapid iteration | Power users, integrators, multi-channel operators | TypeScript monolith, plugin SDK, npm distribution |
| **Moltis** | Performance-first Rust, zero technical debt, local LLM optimization | Performance-sensitive, privacy-first, Rust ecosystem | Rust, lazy tool registry, Vulkan support, Nix packaging |
| **IronClaw** | TEE/hosted security, NEAR blockchain integration, enterprise orchestration | Enterprise, crypto-native, compliance-required | Rust, staging promotion pipeline, ACP delegation |
| **ZeptoClaw** | Embedded/backend use cases, safety-critical tooling, middleware architecture | Backend developers, safety-conscious deployers | Rust, taint analysis, JSON fixture testing, embedded facade |
| **NullClaw** | Extreme responsiveness, Zig systems programming, A2A protocol completeness | Protocol engineers, GitOps-native operators | Zig, 100% issue-to-PR coverage, multi-instance topology |
| **CoPaw** | Chinese enterprise platforms, multi-agent collaboration, long-running autonomy | Enterprise China, research teams, automation-heavy | Python, memory compaction, session interruption, ReMe |
| **NanoBot** | Rapid channel expansion, heartbeat automation, personal productivity | Individual automation, scheduled tasks, email monitoring | Python, cron-heavy, cost optimization focus |
| **ZeroClaw** | Browser automation, voice transcription, declarative infrastructure | Power users, self-hosters, team workflows | Rust, VNC browser, SearXNG, tmux/Matrix streaming |
| **LobsterAI** | NetEase ecosystem, OAuth-first onboarding, Cowork collaboration | NetEase users, enterprise IM, low-friction adoption | TypeScript/Electron, OAuth providers, anti-sleep UX |
| **PicoClaw** | Hardware-adjacent (Sipeed), voice-native design, biologically-inspired memory | Edge deployment, voice-first, research | Python, ASR-TTS universal, Seahorse memory |
| **NanoClaw** | Multi-backend AI (Rovo Dev, Copilot SDK), container security model | Multi-provider users, security-conscious | Python, SOUL.md identity, capability-based permissions |
| **TinyClaw** | Minimal footprint, Linear-style project management, workspace isolation | Small teams, project-oriented, low complexity | TypeScript, SQLite tasks, grammY Telegram |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Active Feature Development)
| Project | Indicators | Risk Factors |
|:---|:---|:---|
| **OpenClaw** | 1000 items/day, daily releases, hybrid memory PR | QA capacity, packaging regressions |
| **Moltis** | 86% merge rate, 36 PRs/day, zero open issues | Single maintainer (penso), bus factor |
| **CoPaw** | 100 items/day, 66% closure, WeChat/ClawBot response | Memory system instability, v0.1.0 upgrade friction |
| **ZeroClaw** | 94 items/day, beta feature velocity | Security configuration backlash (#1478) |

### Tier 2: Production Hardening (Stabilization, Reliability Focus)
| Project | Indicators | Risk Factors |
|:---|:---|:---|
| **ZeptoClaw** | v0.8.0 release, embedded hardening, middleware RFC | Critical edit_file bug (#403), ACP PR stall |
| **PicoClaw** | v0.2.3 stabilization, 52 merges, security filtering | Configuration validation crashes, cron silent failures |
| **IronClaw** | v0.22.0 queued, 100+ PR backlog, TEE fixes | Windows hostility, Defender false positives, review congestion |
| **LobsterAI** | 2026.3.23 release, OAuth expansion, export PR | Windows update pipeline, MCP onboarding friction |

### Tier 3: Security/Architecture Reckoning (Fundamental Rework)
| Project | Indicators | Risk Factors |
|:---|:---|:---|
| **NanoClaw** | Security audit skill, container trust model debate, multi-backend pivot | Critical unpatched injection (#457), 4-week response latency |
| **NanoBot** | Token management crisis, heartbeat bounded retention, zombie fixes | Unbounded context (#2343), architectural tension |

### Tier 4: Exceptional Responsiveness (Low Backlog, High Quality)
| Project | Indicators | Risk Factors |
|:---|:---|:---|
| **NullClaw** | 100% issue-to-PR in 24h, 14:1 open:closed ratio, Zig | Review bandwidth constraint, no releases |

### Tier 5: Maintenance/Stagnation
| Project | Indicators | Risk Factors |
|:---|:---|:---|
| **TinyClaw** | 7 PRs, zero issues, single contributor | Bus factor, no community engagement |
| **EasyClaw** | Zero activity, packaging hotfixes only | Unknown adoption, no issue tracking |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Protocol convergence on MCP/ACP** | OpenClaw, IronClaw, ZeptoClaw, NullClaw all implementing | Design tools with protocol-first architecture; expect standardization within 6 months |
| **Cost predictability as core requirement** | NanoBot's 560k token crisis, Moltis's lazy tool registry, OpenClaw's Mistral maxTokens fix | Implement bounded context guarantees; token budgeting is user trust infrastructure |
| **Security defaults vs. power user tension** | ZeroClaw #1478 backlash ("only a chatbot"), NanoClaw's "god mode" requests | Offer graduated safety levels with explicit trust boundaries; document escape hatches |
| **Voice-native agent interfaces** | PicoClaw #1648 (21 comments), ZeroClaw beta, NanoBot streaming | Audio I/O is table stakes for next-generation agents; invest in streaming architecture |
| **Chinese platform as primary expansion vector** | WeChat ClawBot response across 5+ projects, LobsterAI's IM focus | Official API migration (QR login, bot platforms) is urgent; unofficial protocols being deprecated |
| **Memory as competitive differentiator** | Hybrid KG (OpenClaw), Seahorse (PicoClaw), ReMe (CoPaw), cognitive memory RFCs | Invest in domain-specific memory architectures; RAG is insufficient for long-horizon agents |
| **Local LLM optimization arms race** | Moltis KV caching, IronClaw TEE, LobsterAI Ollama, PicoClaw edge | Prefix caching, quantization, and hardware-specific inference are critical for cost-sensitive deployments |
| **Container/GitOps-native deployment** | NullClaw env var focus, NanoClaw `--data-dir`, Moltis Nix | Assume users deploy via Kubernetes/Docker; eliminate interactive configuration requirements |

### Strategic Implications

1. **Interoperability > Monopoly**: Projects investing in ACP/MCP (IronClaw, ZeptoClaw, NullClaw) are positioning as **infrastructure layers** rather than end-to-end solutions—higher leverage, lower lock-in risk.

2. **Security as product feature**: ZeroClaw's restrictive defaults and Moltis's Secret<String> serialization demonstrate **security UX** as differentiation, not just checkbox compliance.

3. **Memory architecture is the new moat**: With LLM APIs commoditizing, projects with sophisticated context management (OpenClaw hybrid, PicoClaw biologically-inspired) create sustainable differentiation.

4. **Velocity without quality is unsustainable**: OpenClaw's scale advantage is offset by regression frequency; Moltis and NullClaw demonstrate **high-velocity, high-quality** is achievable with architectural discipline.

---

*Report compiled from 12 project digests representing 1,200+ GitHub events on 2026-03-24.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-24

## 1. Today's Overview

NanoBot shows **high community activity** with 78 PRs and 19 issues updated in the last 24 hours, indicating an active development phase. The project is experiencing **growing pains around token management and resource efficiency**, with multiple critical issues surfacing about unbounded context growth and zombie process accumulation. Security concerns are being actively addressed through community contributions, particularly around sandboxing and credential isolation. The maintainer team appears responsive with 30 PRs merged/closed today, though 48 open PRs suggest a potential review backlog. Overall project health is **moderate-to-strong** with robust feature development but emerging technical debt in core runtime systems.

---

## 2. Releases

**No new releases** today. The project remains on the last tagged version with development activity concentrated on `main` branch.

---

## 3. Project Progress

### Merged/Closed PRs Today (30 total, key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2398](https://github.com/HKUDS/nanobot/pull/2398) | flobo3 | **Critical fix**: Clear heartbeat session to prevent token overflow | Addresses 560k token consumption bug; merged as immediate fix |
| [#2413](https://github.com/HKUDS/nanobot/pull/2413) | Re-bin | **Refined fix**: Bounded retention of heartbeat messages (default: 8) | Replaces #2398's nuclear option with configurable retention |
| [#2362](https://github.com/HKUDS/nanobot/pull/2362) | macroadster | **Zombie process reaping** in shell timeout handling | Fixes #2405; production stability improvement |
| [#2412](https://github.com/HKUDS/nanobot/pull/2412) | chengyongru | WeChat channel support (superseded by #2348) | Closed in favor of nightly PR #2348 |
| [#2348](https://github.com/HKUDS/nanobot/pull/2348) | ZhangYuanhan-AI | **Personal WeChat channel** via ilinkai HTTP long-poll API | Major new channel; leverages OpenClaw protocol |

**Features Advanced:**
- **Streaming infrastructure**: Feishu channel now supports real-time token streaming (#2419)
- **MCP ecosystem**: ImageContent handling for tool responses (#2416), MCP tool discovery improvements
- **Reliability**: Fallback model chains for automatic failover (#2417)
- **Security**: Pre-exec command scanning with Tirith (#2414), bubblewrap sandboxing exploration (#1940)

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Core Concern | Underlying Need |
|:---|:---:|:---|:---|
| [#2343](https://github.com/HKUDS/nanobot/issues/2343) | 14 | Context window overflow in `run_agent_loop` | **Predictable resource budgeting** — users need guaranteed bounds on token consumption regardless of conversation history |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) | 10 | Config file key leakage via `exec()` | **Multi-tenant security model** — enterprise users need privilege separation between agent runtime and configuration |
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | 8 | Heartbeat session history causing 560k token usage | **Stateless background operations** — scheduled tasks shouldn't accumulate conversational state |

### Analysis

The **token management crisis** (#2343, #2375) reveals architectural tension: NanoBot's session persistence model assumes conversational continuity, but background tasks (heartbeat) and long-running agents need bounded, predictable costs. Users are effectively subsidizing unbounded memory growth with API fees.

The **security issue #1873** signals enterprise adoption friction — the current single-process model with file-based config is insufficient for containerized, multi-tenant deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Heartbeat consumes 560k tokens/session, causes context overflow | **Fixed** via #2398/#2413 (merged) |
| **Critical** | [#2405](https://github.com/HKUDS/nanobot/issues/2405) | Zombie process accumulation from exec tool | **Fixed** via #2362 (merged), #2410 (open, alternative) |
| **High** | [#2343](https://github.com/HKUDS/nanobot/issues/2343) | `contextWindowTokens` not enforced in `run_agent_loop` | No fix PR; workaround: reduce `maxTokens` |
| **High** | [#2293](https://github.com/HKUDS/nanobot/issues/2293) | Ollama local models silently fail on tool execution | Under investigation; likely prompt formatting issue |
| **Medium** | [#2329](https://github.com/HKUDS/nanobot/issues/2329) | Custom model providers fail in channels but work in CLI | Config propagation bug; no PR yet |
| **Medium** | [#2358](https://github.com/HKUDS/nanobot/issues/2358) | Workspace switch doesn't stop old CRON jobs | Lifecycle management gap; #2204 addresses related cron scoping |
| **Medium** | [#2376](https://github.com/HKUDS/nanobot/issues/2376) | Duplicate assistant messages at end of list | Regression from subagent role fix; needs message deduplication |

**Regression Alert**: [#2376](https://github.com/HKUDS/nanobot/issues/2376) suggests recent "fix" for subagent message roles introduced LLM API compatibility issues with vLLM-hosted models.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Predicted Priority | Rationale |
|:---|:---|:---:|:---|
| **OpenWebUI official channel** | [#2389](https://github.com/HKUDS/nanobot/issues/2389) | High | Web UI convergence; #1341 (web chat PR) provides foundation |
| **`--data-dir` separation** | [#2399](https://github.com/HKUDS/nanobot/issues/2399) | High | Kubernetes production requirement; config/runtime split is architectural debt |
| **Skip heartbeat when idle** | [#2406](https://github.com/HKUDS/nanobot/issues/2406) → [#2415](https://github.com/HKUDS/nanobot/pull/2415) | **Merged** | Cost optimization; already implemented |
| **WeChat official support** | [#2353](https://github.com/HKUDS/nanobot/issues/2353) → [#2348](https://github.com/HKUDS/nanobot/pull/2348) | **Merged** | Largest user base channel; OpenClaw protocol enables this |
| **Endpoint/OpenAI-compatible API** | [#1861](https://github.com/HKUDS/nanobot/pull/1861) | Medium | Ecosystem integration; enables external tool chains |
| **Tirith security scanning** | [#2414](https://github.com/HKUDS/nanobot/pull/2414) | Medium | Security hardening; addresses #1873 concerns |

**Next Version Prediction**: v0.2.0 likely to include WeChat channel, heartbeat optimization, zombie process fixes, and possibly bubblewrap sandboxing (#1940).

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Unpredictable API costs** | #2375 (560k tokens), #2343 (context overflow), #2406 (wasted heartbeat calls) | Critical |
| **Configuration complexity** | #2329 (CLI vs channel divergence), #2399 (K8s deployment friction) | High |
| **Local model reliability** | #2293 (Ollama tool execution failures), #2376 (vLLM compatibility) | High |
| **Security model immaturity** | #1873 (config leakage), #2358 (workspace isolation gaps) | High |
| **MCP ecosystem friction** | #2325 (tool discovery), #2416 (image handling) | Medium |

### Use Cases Emerging

- **Personal automation**: Email monitoring, scheduled tasks (heartbeat-heavy users)
- **Enterprise team collaboration**: Feishu/Lark, Slack, Discord integrations
- **Local-first AI**: Ollama deployments for privacy-sensitive environments
- **Multi-tenant SaaS**: Kubernetes deployments requiring workspace isolation

### Satisfaction Signals

- Active contribution of production-hardening features (sandboxing, zombie reaping)
- Willingness to engage with complex PRs (bubblewrap, Tirith integration)
- Rapid issue filing with detailed reproductions

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem | Risk |
|:---|:---:|:---|:---|
| [#144](https://github.com/HKUDS/nanobot/issues/144) | 47 days | Gemini API key handling broken for non-Vertex routes | User confusion; litellm integration debt |
| [#1315](https://github.com/HKUDS/nanobot/issues/1315) | 24 days | Discord slash commands conflict with native commands | Platform UX degradation |
| [#1851](https://github.com/HKUDS/nanobot/issues/1851) | 14 days | Matrix auth error spam | Log noise; potential retry storm |
| [#1473](https://github.com/HKUDS/nanobot/issues/1473) | 21 days | Duplicate subagent spawn calls | Resource waste; race condition? |

### Stalled PRs

| PR | Age | Blocker |
|:---|:---:|:---|
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) | 24 days | Web chat channel — needs review for SSE streaming architecture |
| [#1940](https://github.com/HKUDS/nanobot/pull/1940) | 12 days | Bubblewrap sandboxing — security-critical, needs security review |
| [#1861](https://github.com/HKUDS/nanobot/pull/1861) | 13 days | Endpoint channel — API design review needed |

**Recommendation**: Prioritize #1940 (security) and #1341/#1861 (ecosystem expansion) for next review cycle. The sandboxing PR addresses the highest-severity open security concern.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-24

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 44 issues and 50 PRs updated in the last 24 hours, indicating an active, rapidly iterating codebase. The project released **v0.5.9** alongside two beta builds, signaling a mature release cadence with browser automation and voice transcription as headline features. However, **community friction is evident**: the most-commented issue (#1478) reflects user frustration with security restrictions that allegedly render the agent "only a chatbot," suggesting tension between safety defaults and power-user expectations. The merge of 20 PRs against 30 open indicates healthy throughput, though the backlog of open items warrants monitoring. Overall, the project appears technically robust but faces **usability challenges around security configuration discoverability**.

---

## 2. Releases

### [v0.5.9](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.9) (Stable)
- **Changes**: Incremental improvements and polish (minimal changelog)
- **Status**: Likely a stabilization release following beta feature integration

### [v0.5.9-beta.579](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.9-beta.579) / [v0.5.9-beta.578](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.9-beta.578)
**Major additions:**
| Feature | Description |
|--------|-------------|
| Browser automation skill + VNC setup scripts | Headless browser control for web interaction tasks |
| Feishu/Lark channel image/file support | Enterprise messaging platform parity |
| SearXNG search provider | Self-hosted, privacy-preserving search integration |
| Voice message transcription | STT pipeline for audio inputs |
| Declarative cron job configuration | Infrastructure-as-code for scheduled tasks |
| Gateway named sessions | Reconnectable, validated session management |

**Breaking changes**: None documented; beta.578 and beta.579 appear identical, suggesting a release pipeline artifact.

**Migration notes**: Users on custom OpenAI providers should verify compatibility—issues [#4296](https://github.com/zeroclaw-labs/zeroclaw/issues/4296) and [#4299](https://github.com/zeroclaw-labs/zeroclaw/issues/4299) report regressions in 0.5.6+.

---

## 3. Project Progress

### Merged/Closed PRs (Selected Highlights)

| PR | Author | Impact |
|:---|:---|:---|
| [#4450](https://github.com/zeroclaw-labs/zeroclaw/pull/4450) | DustinReynoldsPE | **Live tmux streaming to Matrix** + cron-bot deduplication; enables real-time collaborative agent sessions |
| [#4112](https://github.com/zeroclaw-labs/zeroclaw/pull/4112) | glamberson | **pgvector memory backend** with hybrid semantic+keyword search; closes architectural gap vs. cloud vector DBs |
| [#792](https://github.com/zeroclaw-labs/zeroclaw/pull/792) | willsarg | Restored GHCR as Docker Compose default—reliability win for new users |
| [#371](https://github.com/zeroclaw-labs/zeroclaw/pull/371) | willsarg | Hardened CI: Docker/release jobs routed to self-hosted runners (security) |
| [#4449](https://github.com/zeroclaw-labs/zeroclaw/pull/4449) | hwc9169 | Verbose logging improvements (debuggability) |

**Technical trajectory**: Heavy investment in **memory infrastructure** (pgvector), **enterprise channels** (Matrix, Feishu/Lark), and **observability** (logging, streaming). The tmux/Matrix integration suggests positioning toward team-based agent workflows.

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Issue | Comments | Core Tension |
|:---|:---:|:---|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) — "除了安全,什么功能也没有" (Besides security, no functionality) | **46** | **Safety defaults vs. user autonomy**: User enabled all security configs yet agent still refused ffmpeg installation and other operations. Requests "full permission override" for personal/development use. |
| [#848](https://github.com/zeroclaw-labs/zeroclaw/issues/848) — Web search tool timeout | 7 | Tool reliability: 5-minute timeouts on weather queries suggest provider integration fragility |
| [#3818](https://github.com/zeroclaw-labs/zeroclaw/issues/3818) — Restore missing security/core functionalities from legacy `main` | 5 | **Branch migration debt**: Features lost in `main`→`master` transition (Copilot onboarding, task_plan tool, cost tracking) |
| [#4042](https://github.com/zeroclaw-labs/zeroclaw/issues/4042) — Agent can't find MCP server/tools | 5 | MCP (Model Context Protocol) discoverability gap; UI doesn't expose tools menu |
| [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) — Database-first memory architecture | 4 | Community contributor (glamberson) proposing pgvector+graph hybrid; aligns with merged PR #4112 |

**Underlying needs**: 
- **Granular security controls** with escape hatches for trusted environments
- **Migration tooling/documentation** for branch switch survivors
- **MCP ecosystem maturity** (discovery, UI exposure, debugging)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **S0** — Data loss/Security risk | [#3664](https://github.com/zeroclaw-labs/zeroclaw/issues/3664) | Runtime daemon failure (image-only report, needs triage) | **OPEN** — lacks reproduction steps |
| **S0** | [#4299](https://github.com/zeroclaw-labs/zeroclaw/issues/4299) | Custom OpenAI provider → 502 Gateway Error after Mattermost integration | **OPEN** — fresh report, no PR |
| **S0** | [#4445](https://github.com/zeroclaw-labs/zeroclaw/issues/4445) | Docker/Podman image cannot read/write files; stripped utilities (curl/wget/touch) | **OPEN** — container hardening regression |
| **S1** — Workflow blocked | [#4442](https://github.com/zeroclaw-labs/zeroclaw/issues/4442) | `allowed_tools` must stay empty or jobs fail — documentation/implementation mismatch | **OPEN** — cron tool validation bug |
| **S1** | [#4296](https://github.com/zeroclaw-labs/zeroclaw/issues/4296) | Custom OpenAI provider broken in 0.5.6+ (regression from 0.5.1) | **OPEN** — provider response parsing |
| **S1** | [#4409](https://github.com/zeroclaw-labs/zeroclaw/issues/4409) | `git_operations` only runs in workspace root, ignores subdirectories | **PR [#4420](https://github.com/zeroclaw-labs/zeroclaw/pull/4420) OPEN** — fix proposed |
| **S1** | [#4408](https://github.com/zeroclaw-labs/zeroclaw/issues/4408) | WebSocket channels ignore proxy settings | **OPEN** — affects all `tokio_tungstenite` channels |
| **S1** | [#4400](https://github.com/zeroclaw-labs/zeroclaw/issues/4400) | All tools return `[Used tools: xxx]` instead of actual output | **OPEN** — tool result formatting regression |

**Stability assessment**: Multiple **S0/S1 regressions** in provider integrations and containerized deployments. The OpenAI provider breakage across 0.5.6+ suggests insufficient test coverage for custom endpoint configurations. PR #4420 addresses one S1; others need maintainer triage.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|:---|:---|:---:|
| **Security override/"god mode" toggle** | [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | Medium — PR [#4443](https://github.com/zeroclaw-labs/zeroclaw/pull/4443) adds path-validation fallback sandbox, showing safety layer investment; may enable trusted-mode bypass |
| **pgvector + graph memory** | [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) / PR [#4112](https://github.com/zeroclaw-labs/zeroclaw/pull/4112) | **High** — merged; likely in v0.6.0 |
| **MCP server UI visibility** | [#4042](https://github.com/zeroclaw-labs/zeroclaw/issues/4042) | Medium — requires frontend + protocol work |
| **Hot-reload config (SIGHUP)** | PR [#4424](https://github.com/zeroclaw-labs/zeroclaw/pull/4424) | **High** — operational necessity, PR open |
| **Voice pipeline unification** | PR [#4427](https://github.com/zeroclaw-labs/zeroclaw/pull/4427) | Medium — consolidates Telegram/Discord voice handling |
| **mDNS peer discovery** | PR [#4428](https://github.com/zeroclaw-labs/zeroclaw/pull/4428) | Medium — multi-node clustering enabler |
| **Message chunking per platform** | PR [#4422](https://github.com/zeroclaw-labs/zeroclaw/pull/4422) | **High** — quality-of-life fix for truncation issues |
| **CSRF protection for gateway** | PR [#4426](https://github.com/zeroclaw-labs/zeroclaw/pull/4426) | Medium — security hardening |

**Predicted v0.6.0 themes**: Memory infrastructure maturity, operational robustness (hot-reload, chunking), and security layer refinement.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Security configuration opacity** | "I enabled ALL security settings, still blocked" — no visible override path | 🔴 Critical |
| **Branch migration casualties** | Cost tracking, Copilot onboarding, tools lost in `main`→`master` | 🔴 Critical |
| **Provider regressions** | Custom OpenAI broken 0.5.1→0.5.6+; Ollama warnings | 🟡 High |
| **Container minimalism** | Stripped Docker images lack basic debugging tools | 🟡 High |
| **Tool output quality** | `[Used tools: xxx]` instead of actual results renders agent useless | 🟡 High |

### Use Cases
- **Personal/development sandbox**: Users expect "unsafe mode" for local experimentation
- **Enterprise messaging**: Feishu/Lark, Matrix integrations show B2B traction
- **Self-hosted AI**: SearXNG, Ollama, custom OpenAI endpoints indicate privacy-conscious deployment

### Satisfaction Signals
- ✅ Active maintainer response (most issues closed within 24h)
- ✅ Rapid feature delivery (browser automation, voice in beta)
- ⚠️ **Trust erosion**: #1478's "那我安装它干嘛!!!" ("Why did I install this!!!") signals power-user churn risk

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) Database-first memory | 3 days | Low (PR merged) | Close as completed via #4112 |
| [#3664](https://github.com/zeroclaw-labs/zeroclaw/issues/3664) Runtime daemon failure | 7 days | **High** — S0, no repro steps | Maintainer triage; request logs |
| [#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679) Cost tracking missing | 7 days | Medium | Verify if #3818 restoration covers this |
| [#3753](https://github.com/zeroclaw-labs/zeroclaw/issues/3753) Tools still missing post-migration | 6 days | Medium | Audit against legacy `main` branch |
| PR [#4440](https://github.com/zeroclaw-labs/zeroclaw/pull/4440) Recover provider streaming | Fresh | **High** — stranded work from deleted `dev` branch | Code review; validate against current architecture |
| PR [#4443](https://github.com/zeroclaw-labs/zeroclaw/pull/4443) Path-validation sandbox | Fresh | Medium | Security review; addresses #1478 concerns |

**Maintainer attention recommended**: 
- **S0 issues** (#3664, #4299, #4445) need 24h triage
- **Branch migration debt** requires systematic audit (multiple related issues)
- **PR #4440** resurrects orphaned streaming work—architectural review needed to prevent repeat loss

---

*Digest generated from 44 issues, 50 PRs, and 3 releases on 2026-03-24.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-24

## 1. Today's Overview

PicoClaw shows **high development velocity** with 78 PRs updated in the last 24 hours (52 merged/closed, 26 open) and 26 active issues. The project is in an active **v0.2.3 stabilization phase** with a nightly build released. Key themes include: (1) major Agent architecture refactoring entering Phase 2, (2) voice/ASR-TTS capabilities nearing production readiness, (3) security hardening with pre-exec scanning and credential filtering, and (4) multi-channel reliability improvements. The 2:1 merge-to-open PR ratio indicates healthy code review throughput, though 15 open issues signal ongoing stabilization work.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.3-nightly.20260323.3500080a](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)** | Nightly | Automated build; marked unstable. No breaking changes documented. Changelog spans all commits since v0.2.3 stable. |

*No stable release today. Nightly builds suggest v0.2.3 patch release is imminent.*

---

## 3. Project Progress

### Major Merged PRs (52 total)

| PR | Description | Impact |
|----|-------------|--------|
| [#1903](https://github.com/sipeed/picoclaw/pull/1903) | **AWS Bedrock provider** (build-tagged) | Enterprise cloud expansion |
| [#1905](https://github.com/sipeed/picoclaw/pull/1905) | **ElevenLabs Scribe STT + Telegram SendVoice** | Voice pipeline diversification |
| [#1907](https://github.com/sipeed/picoclaw/pull/1907) | Fix `reasoning_content` routing to reasoning channel | Closes [#1746](https://github.com/sipeed/picoclaw/issues/1746) regression |
| [#1930](https://github.com/sipeed/picoclaw/pull/1930) | **Sensitive data filtering** from tool results | Security: prevents LLM credential exposure |
| [#1913](https://github.com/sipeed/picoclaw/pull/1913) | QQ channel filename preservation | UX fix for file uploads |
| [#687](https://github.com/sipeed/picoclaw/pull/687) | Regex precompilation performance | Latency reduction |
| [#1703](https://github.com/sipeed/picoclaw/pull/1703) | Documentation: "exec" tool disabling | Operator safety guidance |

---

## 4. Community Hot Topics

### Highest Engagement

| Item | Comments | Topic | Underlying Need |
|------|----------|-------|---------------|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) | **21** | [TTS/ASR Architecture Design](https://github.com/sipeed/picoclaw/issues/1648) | **Voice-native AI agents** — users want streaming, multi-provider audio I/O (Discord/Weixin/Telegram) |
| [#1216](https://github.com/sipeed/picoclaw/issues/1216) | 10 | [Agent Refactor Phase 1 Complete](https://github.com/sipeed/picoclaw/issues/1216) | **Maintainable multi-agent systems** — codebase scalability for complex agent behaviors |
| [#1790](https://github.com/sipeed/picoclaw/issues/1790) | 5 | [OpenRouter free tier broken](https://github.com/sipeed/picoclaw/issues/1790) | **Cost-effective model access** — free tier users blocked by model ID validation |

### Emerging High-Interest

| Item | Comments | Analysis |
|------|----------|----------|
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) | 3 | [**Seahorse Memory System**](https://github.com/sipeed/picoclaw/issues/1919): Biologically-inspired memory (hippocampus model) for agents — addresses **long-horizon agent coherence**, a critical gap vs. commercial platforms |
| [#1852](https://github.com/sipeed/picoclaw/pull/1852) | *active* | [Universal ASR-TTS PR](https://github.com/sipeed/picoclaw/pull/1852) — implements #1648 design; **Mode 4.2 streaming voice** for Discord/Weixin |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#1790](https://github.com/sipeed/picoclaw/issues/1790) OpenRouter free tier: `minimax-m2.5:free` rejected as invalid model ID | **Open** | None |
| **High** | [#1901](https://github.com/sipeed/picoclaw/issues/1901) Config validation crash: `no API key configured for model: step-3.5` → service exit | **Open** | [#1928](https://github.com/sipeed/picoclaw/pull/1928) (open) |
| **High** | [#1058](https://github.com/sipeed/picoclaw/issues/1058) Cron `deliver=false` silently discards LLM responses | **Open** | None |
| **Medium** | [#1824](https://github.com/sipeed/picoclaw/issues/1824) Heartbeat tool feedback leak on container restart | **Open** | [#1937](https://github.com/sipeed/picoclaw/pull/1937) (open) |
| **Medium** | [#1936](https://github.com/sipeed/picoclaw/issues/1936) Telegram failing in Termux environment | **Open** | None |
| **Medium** | [#1917](https://github.com/sipeed/picoclaw/issues/1917) Weixin: permission denied to `/root/.picoclaw` for cursor persistence | **Open** | None |
| **Medium** | [#1916](https://github.com/sipeed/picoclaw/issues/1916) Telegram new topic triggers random tool call spam | **Open** | None |
| **Medium** | [#1909](https://github.com/sipeed/picoclaw/issues/1909) Named agents send duplicate replies after `message` tool | **Open** | None |

### Regressions Fixed Today
- [#1746](https://github.com/sipeed/picoclaw/issues/1746) `reasoning_channel_id` with OpenAI-compatible providers → fixed by [#1907](https://github.com/sipeed/picoclaw/pull/1907)
- [#1792](https://github.com/sipeed/picoclaw/issues/1792) Anthropic API 400 on duplicate `tool_result` blocks → **closed**
- [#1886](https://github.com/sipeed/picoclaw/issues/1886) MediaStore deleting workspace files → **closed**

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.4 | Rationale |
|---------|----------|----------------------|-----------|
| **Universal Voice (ASR/TTS)** | [#1648](https://github.com/sipeed/picoclaw/issues/1648), [#1852](https://github.com/sipeed/picoclaw/pull/1852) | **90%** | PR open, architecture approved, multi-channel tested |
| **Multi-Agent Collaboration** | [#1934](https://github.com/sipeed/picoclaw/issues/1934) | **70%** | Phase 2 roadmap item; Phase 1 just completed |
| **Tirith Security Scanning** | [#1931](https://github.com/sipeed/picoclaw/issues/1931), [#1932](https://github.com/sipeed/picoclaw/pull/1932) | **80%** | PR open; security-focused, aligns with recent credential filtering work |
| **Model Cascade Failover** | [#1908](https://github.com/sipeed/picoclaw/issues/1908) | **60%** | High user value for rate-limited environments; needs design review |
| **Seahorse Memory System** | [#1919](https://github.com/sipeed/picoclaw/issues/1919) | **40%** | Research-stage; complex, may slip to v0.3.x |
| **HKUDS/ClawTeam Integration** | [#1850](https://github.com/sipeed/picoclaw/issues/1850) | **30%** | External ecosystem dependency; low priority tagged |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Impact |
|-------|-----------|-------------|
| Configuration/API key validation failures | 3 issues | **Deployment blockers** — service exits on misconfig |
| Container/Termux environment fragility | 2 issues | Edge deployment reliability |
| Cron task silent failures | 2 issues | Automation reliability concerns |
| Provider-specific quirks (OpenRouter, MiniMax) | 3 issues | **Multi-provider portability** gaps |

### Positive Signals
- Strong demand for **voice-native interactions** (Discord/Weixin/Telegram audio)
- Appreciation for security hardening (credential filtering, pre-exec scanning)
- Active enterprise interest (AWS Bedrock, ClawTeam integration requests)

### Satisfaction Drivers
- Rapid bug fix turnaround (multiple same-day closures)
- Transparent nightly build process

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1058](https://github.com/sipeed/picoclaw/issues/1058) Cron `deliver=false` silent discard | 19 days | **High** — breaks core automation | Maintainer triage; likely simple fix in `pkg/tools/cron.go` |
| [#1346](https://github.com/sipeed/picoclaw/pull/1346) `EffectiveReasoning()` refactor | 13 days | Medium — code quality | Review bottleneck; affects reasoning content handling |
| [#1709](https://github.com/sipeed/picoclaw/pull/1709) Session history metadata persistence | 7 days | Medium — feature completeness | Needs review for JSONL schema compatibility |
| [#1889](https://github.com/sipeed/picoclaw/pull/1889) Binary outputs through media pipeline | 2 days | High — MCP/tool reliability | Fixes [#1862](https://github.com/sipeed/picoclaw/issues/1862); needs merge for media stability |

---

*Digest generated from 26 issues and 78 PRs updated 2026-03-23. Project health: **Active development, stabilization phase, strong community engagement on voice and security features.***

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-24

## 1. Today's Overview

NanoClaw shows **high community velocity** with 54 total updates in 24 hours (17 issues, 37 PRs), indicating an active but potentially fragmented development phase. The project is experiencing a **security reckoning**: multiple critical vulnerabilities were disclosed and discussed, while simultaneously seeing rapid expansion in AI backend options (Copilot SDK, Rovo Dev, multi-provider routing) and channel integrations (Emacs, Mattermost, AstrBot). No releases were cut today, suggesting maintainers are accumulating changes before a versioned release. The 25:12 open-to-closed PR ratio indicates review backlog pressure.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed Today (12 items)

| PR/Issue | Description | Significance |
|----------|-------------|--------------|
| [#1131](https://github.com/qwibitai/nanoclaw/pull/1131) | **MemOS skill merged** — persistent memory backend with semantic search | Addresses scaling limits of current memory system |
| [#1250](https://github.com/qwibitai/nanoclaw/pull/1250) | Local voice transcription via whisper.cpp | Offline capability, no API costs |
| [#1238](https://github.com/qwibitai/nanoclaw/pull/1238) | Per-group model selection (Haiku/Sonnet/etc.) | Cost/performance optimization |
| [#1198](https://github.com/qwibitai/nanoclaw/pull/1198) | SOUL.md identity system — separates personality from instructions | Architectural cleanup for agent identity |
| [#1196](https://github.com/qwibitai/nanoclaw/pull/1196) | Security audit skill (`/audit-security`) | Self-hardening capability |
| [#1195](https://github.com/qwibitai/nanoclaw/pull/1195) | SQLite FTS5 memory system with BM25 search | Replaces/augments markdown-based memory |
| [#1377](https://github.com/qwibitai/nanoclaw/pull/1377) | Google Calendar container skill | Enterprise scheduling integration |
| [#1374](https://github.com/qwibitai/nanoclaw/pull/1374) | **Rovo Dev backend added** | First non-Claude agent backend |
| [#1359](https://github.com/qwibitai/nanoclaw/pull/1359) | Knowledge warehouse → KB migration | Consolidation of documentation system |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) | Container security hardening discussion closed | Established "agent-level scripts are untrusted" principle |
| [#1171](https://github.com/qwibitai/nanoclaw/issues/1171) | Per-group tool permissions | Granular access control foundation |
| [#1363](https://github.com/qwibitai/nanoclaw/issues/1363) | Slack free-form conversation architecture | Replaces rigid command structure |

**Key advancement**: The project pivoted from single-provider (Claude-only) to **multi-backend architecture** with Rovo Dev merged and Copilot SDK proposed, while container security models are being actively redefined.

---

## 4. Community Hot Topics

| Rank | Item | Activity | Underlying Need |
|------|------|----------|---------------|
| 1 | [#865](https://github.com/qwibitai/nanoclaw/issues/865) — "Containers alone don't make you secure" | 6 comments, closed | **Zero-trust architecture** — community rejecting "container = secure" assumption; demands privilege separation |
| 2 | [#398](https://github.com/qwibitai/nanoclaw/issues/398) — Attenuate WebFetch/WebSearch | 4 comments, open | **Principle of least privilege** — users want to disable unnecessary capabilities per-agent |
| 3 | [#411](https://github.com/qwibitai/nanoclaw/issues/411) — Indirect prompt injection risks | 3 comments, open | **Safety documentation** — users need threat model awareness before deployment |
| 4 | [#1273](https://github.com/qwibitai/nanoclaw/issues/1273) — Multi-session web channel | 2 comments, 👍×2 | **Web-native deployment** — messenger-centric design excludes non-chat use cases |

**Analysis**: The top discussions reveal a community maturation from "feature excitement" to "production readiness" — security modeling, capability attenuation, and deployment flexibility dominate over new capabilities.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **CRITICAL** | [#457](https://github.com/qwibitai/nanoclaw/issues/457) — Command injection in `stopContainer()` via shell interpolation | Open, 1 comment | **None identified** — `exec()` with unsanitized input |
| **HIGH** | [#842](https://github.com/qwibitai/nanoclaw/issues/842) — WebFetch/WebSearch vulnerable to Anthropic refusal string injection | Open, 1 comment | **None** — requires output sanitization |
| **HIGH** | [#458](https://github.com/qwibitai/nanoclaw/issues/458) — Unrestricted container network access enables data exfiltration | Open, 👍×4 | **None** — architecture discussion ongoing |
| **MEDIUM** | [#1361](https://github.com/qwibitai/nanoclaw/issues/1361) — Agent-runner source cache never refreshes | Open, 0 comments | **None** — affects development velocity |
| **MEDIUM** | [#1372](https://github.com/qwibitai/nanoclaw/pull/1372) — Diagnostics prompt never shown to user (markdown link resolution failure) | **PR open** | [Fix proposed](https://github.com/qwibitai/nanoclaw/pull/1372) |

**Stability assessment**: Two critical/high security issues without fixes indicate **deployment risk** for production users. The command injection (#457) is particularly acute — arbitrary container names could execute host commands.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|---------|----------|---------------------------|-----------|
| **Multi-provider AI routing** | [#1383](https://github.com/qwibitai/nanoclaw/pull/1383) | **HIGH** — PR open | Architectural foundation laid by #1374 (Rovo Dev); credential proxy pattern established |
| **GitHub Copilot SDK backend** | [#1350](https://github.com/qwibitai/nanoclaw/issues/1350) | MEDIUM — issue only | Demand exists but no PR yet; may follow #1383 pattern |
| **Capability-based skill security** | [#779](https://github.com/qwibitai/nanoclaw/issues/779) | MEDIUM | Aligns with #398, #458 security thrust; requires manifest schema design |
| **Mattermost channel** | [#1379](https://github.com/qwibitai/nanoclaw/issues/1379), [#546](https://github.com/qwibitai/nanoclaw/pull/546) | **HIGH** — PR blocked | Blocked on architectural review; pattern established by Slack/Emacs |
| **Emacs channel** | [#1375](https://github.com/qwibitai/nanoclaw/pull/1375) | **HIGH** — PR open | Low complexity, local-only, no external dependencies |
| **Agent memory redesign** | [#1356](https://github.com/qwibitai/nanoclaw/issues/1356) | MEDIUM-LONG | Research phase; #1131 (MemOS) and #1195 (SQLite) are interim solutions |

**Predicted v-next themes**: Multi-backend AI infrastructure, channel ecosystem expansion, security hardening (network restrictions, capability models).

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Severity |
|--------|-------|----------|
| @calebfaruki (#865) | "Most scripts should not live at agent level" — container trust model broken | Architectural |
| @rozek (#1273) | "No use for agent system only operable from messenger" | Deployment flexibility |
| @bahree (#1361) | Source cache staleness forces manual workarounds | Developer experience |
| @IYENTeam (#1357) | Silent failures on cloud VMs (Oracle Cloud iptables) | Operational |

### Satisfaction Signals
- MemOS integration (#1131) — "wonderful tool" (@rozek)
- Rapid skill ecosystem growth (voice, memory, calendar, security audit)
- Community self-organizing solutions (web channel, Emacs bridge)

### Use Case Evolution
- **From**: Personal assistant in chat apps
- **Toward**: Enterprise-deployable agent infrastructure with web UI, multiple AI backends, and compliance controls

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#398](https://github.com/qwibitai/nanoclaw/issues/398) WebFetch attenuation | 30 days | Security debt | Design review for capability config schema |
| [#411](https://github.com/qwibitai/nanoclaw/issues/411) Prompt injection documentation | 29 days | User safety | Threat model documentation PR |
| [#457](https://github.com/qwibitai/nanoclaw/issues/457) Command injection | 28 days | **Exploitable** | Emergency fix — sanitize `name` parameter |
| [#458](https://github.com/qwibitai/nanoclaw/issues/458) Network restrictions | 28 days | Data exfiltration risk | Architecture decision on default-deny networking |
| [#546](https://github.com/qwibitai/nanoclaw/pull/546) Mattermost (blocked) | 26 days | Community contribution attrition | Maintainer review of channel registry pattern |
| [#779](https://github.com/qwibitai/nanoclaw/issues/779) Capability-based security | 18 days | Skill sandboxing | RFC for `skill.json` manifest format |

**Critical gap**: No maintainer response on #457/#458 security issues for 4 weeks despite HIGH/CRITICAL severity. Community has provided analysis but awaits architectural decisions.

---

**Project Health**: ⭐⭐⭐☆☆ (3/5) — High velocity, growing ecosystem, but **security response latency** and **review backlog** threaten production readiness.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-24

## 1. Today's Overview

NullClaw shows **exceptionally high development velocity** with 23 tracked items updated in 24 hours (8 issues, 15 PRs). The project demonstrates a mature, responsive maintainer culture: 6 of 7 open issues from yesterday already have corresponding fix PRs submitted by community member `manelsen`. Activity is heavily concentrated around **bug fixes and small-but-critical UX improvements** rather than major architectural changes. The 14:1 open-to-merged PR ratio suggests a pending review bottleneck rather than code quality concerns. No releases today, indicating accumulated changes likely pending for a future version bump.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

### Closed/Merged Today

| PR | Description | Impact |
|:---|:---|:---|
| [#702](https://github.com/nullclaw/nullclaw/pull/702) | Browser-based OpenAI Codex login flow | Adds OAuth PKCE flow, modernizing auth UX; keeps legacy device-code path |

### Advanced Features (Open PRs, High Confidence)

| PR | Description | Addresses |
|:---|:---|:---|
| [#708](https://github.com/nullclaw/nullclaw/pull/708) | Wire `file_append` tool into runtime | [#699](https://github.com/nullclaw/nullclaw/issues/699) — fixes implemented-but-dead code |
| [#710](https://github.com/nullclaw/nullclaw/pull/710) | Heartbeat detailed logging | [#703](https://github.com/nullclaw/nullclaw/issues/703) — observability gap |
| [#709](https://github.com/nullclaw/nullclaw/pull/709) | OpenAI API `session_id` + custom body params | [#701](https://github.com/nullclaw/nullclaw/issues/701) — **deal-breaker fix for OpenAI compatibility** |
| [#707](https://github.com/nullclaw/nullclaw/pull/707) | Pushover env var support | [#698](https://github.com/nullclaw/nullclaw/issues/698) — container/GitOps deployment |
| [#705](https://github.com/nullclaw/nullclaw/pull/705) | Telegram routing fallback fix | [#696](https://github.com/nullclaw/nullclaw/issues/696) — subagent misidentification |
| [#706](https://github.com/nullclaw/nullclaw/pull/706) | Clarify config interpolation docs | [#697](https://github.com/nullclaw/nullclaw/issues/697) — documentation confusion |
| [#704](https://github.com/nullclaw/nullclaw/pull/704) | Lark reaction emoji support | New channel feature (no linked issue) |

**Notable pattern**: Single contributor (`manelsen`) authored 6 of 15 PRs, functioning as a **de facto co-maintainer** for issue resolution.

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Activity | Analysis |
|:---|:---|:---|
| [#647](https://github.com/nullclaw/nullclaw/issues/647) — Qwen Code CLI support | 4 comments, **CLOSED** | Provider expansion demand; closed without merge (likely superseded or rejected). Indicates user interest in **free-tier LLM providers** as cost optimization strategy. |

### Emerging Architectural Interest

| Item | Signal |
|:---|:---|
| [#700](https://github.com/nullclaw/nullclaw/issues/700) — `a2a_call` client tool | **Multi-agent orchestration** use case: user runs "public-facing doorman + private personal agent" topology. NullClaw serves A2A protocol server-side but lacks client implementation. Represents **ecosystem expansion** beyond single-agent deployments. |

### Underlying Needs Analysis

- **Cost sensitivity**: Qwen (#647), free token mentions → users seeking provider diversity for budget control
- **Deployment complexity**: Pushover env vars (#698), `NULLCLAW_HOME` respect (#692) → container/GitOps production usage increasing
- **Protocol completeness**: A2A client (#700), OpenAI API parity (#701) → users integrating NullClaw into larger agent ecosystems

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR | Status |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#701](https://github.com/nullclaw/nullclaw/issues/701) | OpenAI API missing `session_id`, no custom params — "deal breaker" per reporter | [#709](https://github.com/nullclaw/nullclaw/pull/709) | **PR ready** |
| 🟡 **High** | [#699](https://github.com/nullclaw/nullclaw/issues/699) | `file_append` tool exists but unreachable — dead code in production | [#708](https://github.com/nullclaw/nullclaw/pull/708) | **PR ready** |
| 🟡 **High** | [#696](https://github.com/nullclaw/nullclaw/issues/696) | Telegram bot misidentifies as wrong agent when subagents configured | [#705](https://github.com/nullclaw/nullclaw/pull/705) | **PR ready** |
| 🟡 **High** | [#692](https://github.com/nullclaw/nullclaw/pull/692) | `cron.zig` ignores `NULLCLAW_HOME`, breaks Docker deployments | — | **PR ready** |
| 🟢 **Medium** | [#703](https://github.com/nullclaw/nullclaw/issues/703) | Heartbeat produces zero logs despite verbose config | [#710](https://github.com/nullclaw/nullclaw/pull/710) | **PR ready** |
| 🟢 **Medium** | [#694](https://github.com/nullclaw/nullclaw/pull/694) | Telegram dupes, Bifrost compatibility, tool cache staleness | — | **PR ready (batch fix)** |

**Assessment**: Zero unaddressed critical bugs. All reported issues from 2026-03-23 have corresponding PRs within 24 hours — **exceptional maintainer/community responsiveness**.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **A2A client tool (`a2a_call`)** | [#700](https://github.com/nullclaw/nullclaw/issues/700) | Medium-High | Aligns with project's A2A server capability; clear use case; community-contributed implementation mentioned |
| **Cross-agent memory** | [#711](https://github.com/nullclaw/nullclaw/pull/711) | Medium | PR exists but marked "TBD" — may need design review |
| **OTel observability enhancements** | [#693](https://github.com/nullclaw/nullclaw/pull/693) | High | Production readiness feature; PR complete with channel attribution, delegation tracing |
| **Reliability/fallback documentation** | [#695](https://github.com/nullclaw/nullclaw/pull/695) | High | Docs-only, addresses existing gap |
| **Lark reaction emojis** | [#704](https://github.com/nullclaw/nullclaw/pull/704) | High | Self-contained channel feature, PR ready |

**Predicted vNext themes**: Multi-agent orchestration (A2A), enterprise observability (OTel), deployment hardening (env vars, Docker), protocol parity (OpenAI).

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Quote/Context | Severity |
|:---|:---|:---|
| OpenAI API incompleteness | *"Without proper OpenAI API support this project is not useful"* — [ivan-tkatchev](https://github.com/nullclaw/nullclaw/issues/701) | Existential for OpenAI-dependent users |
| Configuration confusion | `${VAR}` interpolation assumed but unsupported — [tolkonepiu](https://github.com/nullclaw/nullclaw/issues/697) | UX friction |
| Silent failures | Heartbeat logs nothing despite explicit enable flags — [balehu86](https://github.com/nullclaw/nullclaw/issues/703) | Debugging difficulty |
| Deployment friction | Hardcoded paths break containerized setups — [realrubberduckdev](https://github.com/nullclaw/nullclaw/pull/692) | Production blocker |

### Positive Signals

- **Rapid issue-to-PR turnaround**: Users report bugs and see fixes proposed within hours
- **Multi-instance deployments**: [#700](https://github.com/nullclaw/nullclaw/issues/700) demonstrates sophisticated production use (public/private agent topology)
- **Protocol adoption**: A2A implementation attracts users building agent ecosystems

### Satisfaction Assessment

**High** for responsiveness; **moderate** for documentation clarity and deployment ergonomics (actively improving).

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|:---|:---|:---|:---|
| [#679](https://github.com/nullclaw/nullclaw/pull/679) — Markdown timestamp temporal decay | 3 days | Low | Memory system improvement; may be pending review queue |
| [#681](https://github.com/nullclaw/nullclaw/pull/681) — Custom-url model resolution | 2 days | Low | Provider routing edge case |
| [#692](https://github.com/nullclaw/nullclaw/pull/692) — `NULLCLAW_HOME` in cron | 2 days | **Medium** | Docker deployment blocker; fix ready |

**No critical stagnation**. The 14 open PRs from 2026-03-23 suggest a **review bandwidth constraint** rather than abandoned contributions. Recommend maintainer prioritization of:
1. [#709](https://github.com/nullclaw/nullclaw/pull/709) (OpenAI API critical fix)
2. [#708](https://github.com/nullclaw/nullclaw/pull/708), [#705](https://github.com/nullclaw/nullclaw/pull/705) (bug fixes with user impact)
3. [#692](https://github.com/nullclaw/nullclaw/pull/692) (production deployment)

---

*Digest generated from 23 GitHub items. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-24

## 1. Today's Overview

IronClaw shows **high velocity but mounting complexity pressures**. With 50 PRs updated in 24 hours (39 still open) and 16 active issues, the project is pushing aggressively toward v0.22.0 while managing significant technical debt. The merge rate of ~22% (11 closed/merged vs. 39 open) suggests either rigorous review standards or potential bottlenecks in the staging promotion pipeline. Critical concerns emerging: **security false positives** (Microsoft Defender flagging), **hosted TEE reliability issues**, and **Windows-specific provider breakages** that could block adoption. The team is actively triaging with automated CI reviews and staged promotions, but the 100+ open PR backlog flagged in [#1575](https://github.com/nearai/ironclaw/issues/1575) indicates scaling challenges.

---

## 2. Releases

**No new releases today.** However, [PR #1601](https://github.com/nearai/ironclaw/pull/1601) (`chore: release v0.22.0`) is queued with **API-breaking changes**:

| Aspect | Details |
|--------|---------|
| Version bump | 0.21.0 → 0.22.0 |
| Breaking change | `constructible_struct_adds_field`: externally-constructible structs gain new public fields |
| Risk | Existing struct literal construction will fail compilation |
| Status | Awaiting promotion through staging pipeline |

**Migration preview**: Users constructing IronClaw structs directly (vs. using builders) should verify compilation against v0.22.0 before deployment.

---

## 3. Project Progress

### Merged/Closed Today (11 total)

| PR/Issue | Description | Significance |
|----------|-------------|------------|
| [#1550](https://github.com/nearai/ironclaw/pull/1550) | Post-merge review sweep: 8 fixes across security, perf, correctness | Closes residual gaps from prior merges; improves code quality hygiene |
| [#893](https://github.com/nearai/ironclaw/issues/893) | [CLOSED] Unnecessary parameter cloning on every tool execution | CI-automated fix; medium-severity perf optimization |
| [#558](https://github.com/nearai/ironclaw/issues/558) | [CLOSED] Issue Triage Report (superseded by #1575) | Process maintenance |
| [#1241](https://github.com/nearai/ironclaw/issues/1241) | [CLOSED] Mistral API rejects tool call IDs | Format compliance fix for Mistral backend |

### Key Advances in Open PRs

- **Architecture**: [#1557](https://github.com/nearai/ironclaw/pull/1557) — New `ironclaw_engine` crate with unified Thread-Capability-CodeAct execution (v2 architecture, 7,275 lines, 43 files)
- **Security**: [#1590](https://github.com/nearai/ironclaw/pull/1590) — Blocks cross-channel approval thread hijacking; [#1598](https://github.com/nearai/ironclaw/pull/1598) — Blocks Telegram bot tokens in normal chat
- **Interoperability**: [#1600](https://github.com/nearai/ironclaw/pull/1600) — ACP (Agent Client Protocol) job mode for delegating to external coding agents (Kiro, Codex, Gemini CLI, Cline, Copilot)
- **Provider stability**: [#1588](https://github.com/nearai/ironclaw/pull/1588) — Preserves Gemini `thought_signature` through tool call round-trips

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Core Tension |
|------|------|----------|------------|
| 1 | [#602](https://github.com/nearai/ironclaw/issues/602) — No Telegram in default install | 6 comments, 👍1 | **Distribution vs. modularity**: Users expect batteries-included experience; current model requires source builds for Telegram |
| 2 | [#1537](https://github.com/nearai/ironclaw/issues/1537) — WASM credential injection fails on NEAR AI hosted TEE | 4 comments | **Trust boundary complexity**: Secrets store succeeds but runtime injection fails—critical for hosted TEE value proposition |
| 3 | [#407](https://github.com/nearai/ironclaw/issues/407) — Ideas from Hermes Agent worth adopting | 4 comments, 👍2 | **Competitive intelligence**: Community benchmarking against NousResearch's Hermes Agent for architecture patterns |

### Underlying Needs Analysis

- **#602**: Users want frictionless multi-channel setup; the "extension marketplace" model isn't discoverable enough
- **#1537**: Enterprise/hosted users need verifiable secret handling; silent failures destroy trust
- **#407**: Demand for proven patterns: better memory management, tool composition, and skill packaging

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| **HIGH** | [#1538](https://github.com/nearai/ironclaw/issues/1538) — Microsoft Defender flagging as Trojan | OPEN | None | Windows distribution blocked by AV false positive; affects `ironclaw-x86_64-pc-windows-msvc.msi/.exe` |
| **HIGH** | [#1537](https://github.com/nearai/ironclaw/issues/1537) — WASM credential injection fails on hosted TEE | OPEN | None | Secrets stored but never injected at runtime; breaks hosted TEE workflows |
| **HIGH** | [#1577](https://github.com/nearai/ironclaw/issues/1577) — Ollama provider 502 Bad Gateway on Windows v0.21.0 | OPEN | None | Windows-specific; tools disabled, still fails |
| **MEDIUM** | [#1596](https://github.com/nearai/ironclaw/issues/1596) — Telegram onboarding exposes tokens in chat | OPEN | [#1598](https://github.com/nearai/ironclaw/pull/1598) | Security UX failure; fix in review |
| **MEDIUM** | [#1595](https://github.com/nearai/ironclaw/issues/1595) — LLM forgets activated Telegram channel | OPEN | None | State synchronization bug between UI and agent |
| **MEDIUM** | [#1520](https://github.com/nearai/ironclaw/issues/1520) — Qwen3.5-plus 405 "Coding Plan only for Coding Agents" | OPEN | None | Provider-specific API limitation |

**Regression pattern**: Windows platform showing systemic issues (Defender, Ollama, general stability). Hosted TEE path has credential lifecycle gaps.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength | Likelihood in v0.23+ |
|---------|----------|-----------------|----------------------|
| **WeChat channel support** | [#1584](https://github.com/nearai/ironclaw/issues/1584) | Strong — plugin already exists for OpenClaw, demand from Chinese market | HIGH |
| **Hot-reload LLM provider** | [#1350](https://github.com/nearai/ironclaw/issues/1350) | Clear UX pain, architectural change needed | MEDIUM |
| **Unified execution engine v2** | [#1557](https://github.com/nearai/ironclaw/pull/1557) | In progress, 7K+ lines, core team driven | VERY HIGH (v0.22.x) |
| **ACP protocol support** | [#1600](https://github.com/nearai/ironclaw/pull/1600) | Strategic interoperability play | HIGH |
| **Multi-tenant auth** | [#1118](https://github.com/nearai/ironclaw/pull/1118) | Security architecture, previously reviewed | MEDIUM (complexity risk) |
| **ClawHub opt-out** | [#1594](https://github.com/nearai/ironclaw/pull/1594) | Enterprise/air-gapped deployment need | HIGH (PR ready) |
| **Adaptive learning system** | [#1187](https://github.com/nearai/ironclaw/pull/1187) | Large scope (30+ review iterations), needs validation | MEDIUM |

**Architectural inflection**: The v2 engine (#1557) + ACP support (#1600) suggests IronClaw is positioning as an **orchestration layer** for multiple agent runtimes, not just a monolithic agent.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Evidence | Severity |
|----------|----------|----------|
| **Installation friction** | "no Telegram or option to install it...only works if built from source" [#602](https://github.com/nearai/ironclaw/issues/602) | HIGH |
| **Security UX failures** | "ask for bot tokens in chat and misreport them as invalid" [#1596](https://github.com/nearai/ironclaw/issues/1596) | HIGH |
| **Windows hostility** | Defender flags, Ollama 502s, general breakage | CRITICAL for Windows market |
| **Provider quirks** | Qwen "Coding Plan" restriction, Mistral ID format, Gemini thought signatures | MEDIUM (fragmentation tax) |
| **Hosted TEE unreliability** | "secrets stored but never injected" [#1537](https://github.com/nearai/ironclaw/issues/1537) | HIGH (breaks paid tier) |
| **Configuration confusion** | "OpenAI-compatible vLLM still needs NEAR AI Authentication?" [#1585](https://github.com/nearai/ironclaw/issues/1585) | MEDIUM |

### Satisfaction Signals

- Active contribution from new contributors (e.g., [#1588](https://github.com/nearai/ironclaw/pull/1588), [#1437](https://github.com/nearai/ironclaw/pull/1437))
- Community benchmarking against competitors (#407) indicates engagement
- Rapid security response (token exposure fix in <24h)

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Attention

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#1118](https://github.com/nearai/ironclaw/pull/1118) — Multi-tenant auth | 10 days | **Security architecture** | Rebased, previously approved, needs final merge decision |
| [#1187](https://github.com/nearai/ironclaw/pull/1187) — Adaptive learning | 9 days | **Scope creep** | 30+ iterations, needs core team validation or scope reduction |
| [#1538](https://github.com/nearai/ironclaw/issues/1538) — Defender false positive | 2 days | **Windows distribution** | Code signing or AV vendor outreach |
| [#1537](https://github.com/nearai/ironclaw/issues/1537) — TEE credential injection | 2 days | **Hosted tier reliability** | Deep TEE/debug investigation |
| [#1093](https://github.com/nearai/ironclaw/pull/1093) — Managed tunnels fix | 10 days | **Webhook reliability** | Low risk, fixes SIGPIPE + port targeting |

### Process Concern

[#1575](https://github.com/nearai/ironclaw/issues/1575) documents **100+ open PRs and ~100 open issues** with velocity of 68 new PRs in 2 days. The staging promotion pipeline (evidenced by multiple `staging-promote/*` PRs) may be creating queue congestion. Recommend: explicit WIP limits or expedite path for critical fixes.

---

*Digest generated from GitHub activity 2026-03-23 to 2026-03-24. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-24

## 1. Today's Overview

LobsterAI demonstrates **very high development velocity** with 21 active issues and 36 pull requests updated in the last 24 hours, alongside the release of version 2026.3.23. The project shows strong maintainer engagement with 12 merged/closed PRs versus 24 open ones, indicating active triage. Community participation is robust with diverse feedback spanning MCP configuration difficulties, IM platform integrations (DingTalk, Feishu, POPO), and feature requests for export capabilities and voice input. The codebase is undergoing significant refactoring efforts to improve maintainability, while new OAuth integrations (Qwen, MiniMax, GitHub Copilot) suggest strategic expansion toward mainstream AI provider support. Overall project health appears **strong but resource-constrained**, with user-reported stability issues around updates and networking requiring attention.

---

## 2. Releases

### [2026.3.23](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.23)

| Change | PR | Author |
|--------|-----|--------|
| **Anti-sleep functionality + OpenClaw assistant message/tool card alternating display** | [#659](https://github.com/netease-youdao/LobsterAI/pull/659) | @wuleihenbang |
| **UI optimizations** | [#706](https://github.com/netease-youdao/LobsterAI/pull/706) → merged via [#709](https://github.com/netease-youdao/LobsterAI/pull/709) | @liuzhq1986 |
| **Fix: Keep full input box for IM channel sessions** | [#708](https://github.com/netease-youdao/LobsterAI/pull/708) | @winsan-zhang |

**Notable:** The OpenClaw enhancement enables richer visual interaction patterns; IM channel input fix addresses a UX regression where remote-managed sessions had collapsed input areas.

---

## 3. Project Progress

### Merged/Closed PRs Today (12 total)

| PR | Description | Significance |
|----|-------------|------------|
| [#709](https://github.com/netease-youdao/LobsterAI/pull/709) | UI optimize: Ctrl/Cmd/Alt+Enter line breaks | Input experience improvement |
| [#708](https://github.com/netease-youdao/LobsterAI/pull/708) | Fix IM channel session input box | UX regression fix |
| [#714](https://github.com/netease-youdao/LobsterAI/pull/714) | Release/2026.03.24 preparation | Release engineering |
| [#682](https://github.com/netease-youdao/LobsterAI/pull/682) | MiniMax OAuth login support | **Major provider integration** |
| [#553](https://github.com/netease-youdao/LobsterAI/pull/553) | Optimize image attachment preview | Cowork UX enhancement |

### Advanced Features (Open PRs)

| PR | Description | Status |
|----|-------------|--------|
| [#725](https://github.com/netease-youdao/LobsterAI/pull/725) | **Message bookmark/favorites system + global bookmark view** | Ready for review |
| [#718](https://github.com/netease-youdao/LobsterAI/pull/718) | **Export conversations to Markdown/JSON** | Addresses [#719](https://github.com/netease-youdao/LobsterAI/issues/719) |
| [#717](https://github.com/netease-youdao/LobsterAI/pull/717) | Focus chat input shortcut + fix settings page shortcut flashing | UX polish |
| [#644](https://github.com/netease-youdao/LobsterAI/pull/644) | **Qwen OAuth login** | 10-second onboarding goal |
| [#707](https://github.com/netease-youdao/LobsterAI/pull/707) | **GitHub Copilot integration** | Major provider expansion |
| [#721](https://github.com/netease-youdao/LobsterAI/pull/721) | Prefer external Python over bundled runtime | Environment flexibility |
| [#635](https://github.com/netease-youdao/LobsterAI/pull/635) | **Refactor: Split 3,984-line main.ts and 3,301-line Settings.tsx** | Critical maintainability |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | Topic | Underlying Need |
|----------|----------|-------|---------------|
| [#703](https://github.com/netease-youdao/LobsterAI/issues/703) | 3 | Windows update slowness (30-40%, 85% stalls) | **Reliability anxiety** — users need transparent progress and faster delta updates |
| [#691](https://github.com/netease-youdao/LobsterAI/issues/691) | 1 | DingTalk bot double-message replies | **IM platform consistency** — webhook deduplication logic needs hardening |
| [#720](https://github.com/netease-youdao/LobsterAI/issues/720) | 1 | IM conversations blocked from desktop continuation | **Cross-platform workflow continuity** — session portability between IM and desktop |
| [#719](https://github.com/netease-youdao/LobsterAI/issues/719) | 1 | Export chat history to Markdown/JSON | **Data portability and archival** — addressed by PR [#718](https://github.com/netease-youdao/LobsterAI/pull/718) |

### Emerging Patterns

- **MCP (Model Context Protocol) configuration confusion**: [#728](https://github.com/netease-youdao/LobsterAI/issues/728), [#724](https://github.com/netease-youdao/LobsterAI/issues/724) — users struggle with "0 tools" sync status; **documentation and validation UX gap**
- **OAuth onboarding race**: Multiple provider OAuth PRs suggest strategic push for "zero-config" setup vs. API key complexity

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **High** | [#703](https://github.com/netease-youdao/LobsterAI/issues/703) | Windows update stalls 2+ minutes at 30-40% and 85% | No fix PR |
| 🔴 **High** | [#695](https://github.com/netease-youdao/LobsterAI/issues/695) | 2+ day idle → network failure, requires reboot + permission re-grant | No fix PR; **macOS network stack issue** |
| 🟡 **Medium** | [#691](https://github.com/netease-youdao/LobsterAI/issues/691) | DingTalk bot duplicate messages | No fix PR |
| 🟡 **Medium** | [#716](https://github.com/netease-youdao/LobsterAI/issues/716) | Feishu robot task failures after replacement | Logs attached; needs investigation |
| 🟡 **Medium** | [#713](https://github.com/netease-youdao/LobsterAI/issues/713) | macOS Ollama detection fails (ERR_ADDRESS_INVALID) vs. Windows works | **Regression in 2026.3.22** |
| 🟡 **Medium** | [#705](https://github.com/netease-youdao/LobsterAI/issues/705) | OpenClaw gateway startup timeout | No fix PR |
| 🟡 **Medium** | [#693](https://github.com/netease-youdao/LobsterAI/issues/693) | Windows install "cannot close process" despite no visible process | Installer issue |
| 🟡 **Medium** | [#692](https://github.com/netease-youdao/LobsterAI/issues/692) | Auto-start on boot broken in 2026.3.22 | **Confirmed regression** |
| 🟢 **Low** | [#686](https://github.com/netease-youdao/LobsterAI/issues/686) | Hardcoded export encryption password | Security hygiene; no exploit vector yet |
| 🟢 **Low** | [#685](https://github.com/netease-youdao/LobsterAI/issues/685) | CoworkSessionItem useEffect render loop risk | Code quality |

### Security Note
[#686](https://github.com/netease-youdao/LobsterAI/issues/686) exposes `EXPORT_PASSWORD = 'lobsterai-APP'` in source — while export files are decryptable by anyone with codebase access, this appears to be a **known limitation** rather than active vulnerability given open-source nature.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **Chat export (Markdown/JSON)** | [#719](https://github.com/netease-youdao/LobsterAI/issues/719) | **Very High** | PR [#718](https://github.com/netease-youdao/LobsterAI/pull/718) already implemented |
| **Voice input** | [#722](https://github.com/netease-youdao/LobsterAI/issues/722) | Medium | Common request; Youdao has speech tech |
| **Custom sandbox storage capacity** | [#699](https://github.com/netease-youdao/LobsterAI/issues/699) | Medium | Clear use case (ML dependencies, large files) |
| **Bundled OpenClaw CLI access** | [#715](https://github.com/netease-youdao/LobsterAI/issues/715) | Medium | Power user enablement; low risk |
| **IM robot on-demand installation** | [#687](https://github.com/netease-youdao/LobsterAI/issues/687) | Medium | Installation friction reduction; Deepin compatibility |
| **Pissbook agent forum integration** | [#683](https://github.com/netease-youdao/LobsterAI/issues/683) | Low | Novel but niche; external dependency |

### Provider Integration Trajectory
GitHub Copilot ([#707](https://github.com/netease-youdao/LobsterAI/pull/707)), Qwen ([#644](https://github.com/netease-youdao/LobsterAI/pull/644)), and MiniMax ([#682](https://github.com/netease-youdao/LobsterAI/pull/682)) OAuth implementations suggest **"OAuth-first" strategy** to reduce API key friction — expect more providers to follow this pattern.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Update reliability** | [#703](https://github.com/netease-youdao/LobsterAI/issues/703), [#693](https://github.com/netease-youdao/LobsterAI/issues/693) | High — "救命" (help!) in [#724](https://github.com/netease-youdao/LobsterAI/issues/724) shows frustration |
| **MCP configuration opacity** | [#728](https://github.com/netease-youdao/LobsterAI/issues/728), [#724](https://github.com/netease-youdao/LobsterAI/issues/724) | High — "折腾几天了" (struggled for days) |
| **IM platform quirks** | [#691](https://github.com/netease-youdao/LobsterAI/issues/691) (DingTalk dupes), [#716](https://github.com/netease-youdao/LobsterAI/issues/716) (Feishu failures) | Medium — enterprise integration fragility |
| **Cross-platform session limits** | [#720](https://github.com/netease-youdao/LobsterAI/issues/720) | Medium — workflow interruption |
| **Long-haul stability** | [#695](https://github.com/netease-youdao/LobsterAI/issues/695) | Medium — rare but severe when hit |

### Satisfaction Drivers

- **OAuth convenience**: "十秒内发起对话" (start conversation in 10 seconds) — speed-to-value
- **Rich Cowork interactions**: OpenClaw tool cards, bookmark system, image previews
- **Open source extensibility**: Users filing detailed PRs for integrations (Pissbook)

### Use Case Signals

- **Enterprise IM-heavy workflows**: DingTalk, Feishu, POPO, Lark integrations dominate issues
- **Local AI preference**: Ollama detection bug [#713](https://github.com/netease-youdao/LobsterAI/issues/713) shows on-premise deployment demand
- **Developer-centric**: GitHub Copilot integration, MCP tooling, Python environment control

---

## 8. Backlog Watch

### Issues Needing Maintainer Response

| Issue | Age | Why It Matters | Risk |
|-------|-----|---------------|------|
| [#683](https://github.com/netease-youdao/LobsterAI/issues/683) | New | First "agent social network" integration proposal | Community innovation signal; evaluate API stability |
| [#711](https://github.com/netease-youdao/LobsterAI/issues/711) | New | Internal NetEase registry `npm.nie.netease.com` blocks external builds | **Build reproducibility** for non-NetEase contributors |
| [#688](https://github.com/netease-youdao/LobsterAI/issues/688) | New | Screenshot-only bug report with no description | Needs triage template enforcement |

### Stale PRs at Risk

| PR | Age | Blocker | Recommendation |
|----|-----|---------|---------------|
| [#554](https://github.com/netease-youdao/LobsterAI/pull/554) | 3 days | Session deletion + streaming state race | Merge — fixes [#545](https://github.com/netease-youdao/LobsterAI/issues/545), well-scoped |
| [#557](https://github.com/netease-youdao/LobsterAI/pull/557) | 3 days | Attachment @mention system | Large feature; needs design review |
| [#609](https://github.com/netease-youdao/LobsterAI/pull/609) | 2 days | Scheduled task refactor + docs | Architectural improvement; schedule for post-release |

### Maintainer Attention Needed

- **Windows update pipeline**: [#703](https://github.com/netease-youdao/LobsterAI/issues/703) + [#693](https://github.com/netease-youdao/LobsterAI/issues/693) suggest installer/upgrade service needs dedicated owner
- **MCP onboarding**: Multiple "0 tools" reports indicate need for troubleshooting wizard or validation UI
- **macOS network permissions**: [#695](https://github.com/netease-youdao/LobsterAI/issues/695) suggests entitlements or firewall helper may need adjustment

---

*Digest generated from 21 issues, 36 PRs, and 1 release on 2026-03-24. Data source: github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-24

## 1. Today's Overview

TinyClaw shows **moderate development velocity** with 7 PRs updated in the past 24 hours, though no new releases were cut. Activity is concentrated entirely in pull requests—zero issues were opened or updated, suggesting either a healthy codebase with few reported bugs or limited community issue reporting. The project appears to be in an **active feature development phase**, with jlia0 (likely a core maintainer) driving 6 of 7 PRs. The 5:2 open-to-closed PR ratio indicates substantial work-in-progress accumulating in the review queue.

---

## 2. Releases

**No new releases** — No version tags were published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (2 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#253](https://github.com/TinyAGI/tinyagi/pull/253) | **docs(agents): move setup and system prompt config to workspace-level AGENTS.md** | Improves multi-agent workspace isolation; reduces shared documentation clutter |
| [#248](https://github.com/TinyAGI/tinyagi/pull/248) | **refactor(telegram): migrate to grammY for reliable polling** | Critical stability fix—resolves silent polling stalls in Telegram bot integration |

**Key advancement:** The grammY migration (#248) addresses a production-reliability issue (NTBA's documented polling failures), indicating prioritization of operational stability over pure feature work.

---

## 4. Community Hot Topics

| PR/Issue | Engagement | Analysis |
|:---|:---|:---|
| [#251](https://github.com/TinyAGI/tinyagi/pull/251) — Subprocess lifecycle management | 👍 0, comments: undefined | **Infrastructure reliability** — Prevents queue hangs from zombie agent processes; 30-second timeout + kill mechanism suggests production hardening |
| [#252](https://github.com/TinyAGI/tinyagi/pull/252) — Linear-style task/project management | 👍 0, comments: undefined | **Major UX expansion** — SQLite-backed project management with comment threads; signals shift toward comprehensive workspace tooling |
| [#250](https://github.com/TinyAGI/tinyagi/pull/250) — Immediate user message persistence | 👍 0, comments: undefined | **UI/UX polish** — Eliminates chat history lag; enables optimistic UI patterns |

**Underlying needs:** All three open PRs from jliao0 on 2026-03-23 cluster around **reliability and responsiveness**—queue robustness, immediate feedback, and structured project management. This suggests user friction with async delays and workflow organization.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **High** | [#251](https://github.com/TinyAGI/tinyagi/pull/251) | Fix in review | Subprocess hangs in agent queue → unbounded resource consumption |
| **Medium** | [#248](https://github.com/TinyAGI/tinyagi/pull/248) | **RESOLVED** | Telegram polling stalls (migrated to grammY) |

**Assessment:** One critical stability fix pending (#251). The pattern of queue/subprocess fixes suggests the agent execution model may have edge cases with long-running or non-terminating agent tasks.

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Likelihood in Next Release |
|:---|:---|:---|
| [#252](https://github.com/TinyAGI/tinyagi/pull/252) | Linear-style task/project management with comments | **High** — Comprehensive implementation, SQLite schema defined |
| [#249](https://github.com/TinyAGI/tinyagi/pull/249) | Office layout reorganization with topbar navigation | **High** — UI/UX polish, likely paired with #252 |
| [#243](https://github.com/TinyAGI/tinyagi/pull/243) | Novita AI LLM provider | **Medium** — Straightforward OpenAI-compatible integration, but 3-day review lag suggests lower priority |
| [#250](https://github.com/TinyAGI/tinyagi/pull/250) | Immediate message enqueue | **High** — Small surface area, clear user benefit |

**Predicted vNext themes:** Workspace productivity (tasks/projects), UI consolidation, and infrastructure reliability.

---

## 7. User Feedback Summary

**Inferred from PR descriptions:**

| Pain Point | Evidence | Satisfaction Signal |
|:---|:---|:---|
| Chat message visibility delays | #250: "gap between sending a message and it showing up" | Fix addresses core UX friction |
| Agent workspace clutter | #253: "without cluttering the shared documentation" | Multi-agent setups becoming complex |
| Telegram bot reliability | #248: "silent polling stalls" | Critical infrastructure fix merged |
| Queue hangs from stuck agents | #251: "background tasks within Claude Code keep the subprocess alive" | Production edge case being hardened |

**No explicit user feedback** (issues, discussions) was captured in the 24h window—feedback is indirect through maintainer-driven PRs.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#243](https://github.com/TinyAGI/tinyagi/pull/243) — Novita AI provider | 4 days | **Contributor friction** | External contributor (Alex-wuhu); 3-day review lag may discourage participation |
| [#249](https://github.com/TinyAGI/tinyagi/pull/249) — Office layout refactor | 1 day | Merge conflict risk with #252 | Both touch UI/layout; coordination needed |

**Maintainer attention:** The Novita AI PR (#243) from an external contributor has been open since 2026-03-20 without closure—positive signal for community growth, but review velocity should be monitored to prevent contributor attrition.

---

**Project Health Indicator:** 🟡 **Active development, stable operations** — Strong maintainer velocity, infrastructure-focused improvements, but reliance on single contributor (jlia0) and zero community issue engagement warrants monitoring for bus factor and user adoption depth.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-24

## 1. Today's Overview

Moltis demonstrates **exceptional project velocity** with 42 PRs updated in 24 hours (36 merged/closed, 6 open) and 10 issues closed with zero remaining open. The project is in a **high-activity maintenance phase** with no new releases, suggesting focused iteration toward a larger upcoming version. Core maintainer `penso` dominates contributions (12+ PRs), indicating centralized but rapid development. The merge rate of 86% (36/42) signals healthy code review throughput.

---

## 2. Releases

**No new releases** — version stable at last published release.

---

## 3. Project Progress

### Major Merged PRs (36 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#476](https://github.com/moltis-org/moltis/pull/476) | penso | **System prompt stabilization for KV cache** — moves datetime injection post-history to enable local LLM prefix caching | Critical performance win for Ollama/LM Studio users |
| [#474](https://github.com/moltis-org/moltis/pull/474) | penso | Fixes exec node parameter hallucination in weak models (Qwen3-Coder) | Resolves [#427](https://github.com/moltis-org/moltis/issues/427) |
| [#475](https://github.com/moltis-org/moltis/pull/475) | penso | Adds MiniMax M2.7 models + highspeed variants | Expands provider coverage |
| [#472](https://github.com/moltis-org/moltis/pull/472) | penso | **Security: redacts secrets in channel config API** — replaces fragile hardcoded key list with proper `Secret<String>` serialization | Fixes [#462](https://github.com/moltis-org/moltis/issues/462) |
| [#473](https://github.com/moltis-org/moltis/pull/473) | penso | WhatsApp UX improvements: discoverability, debug logging, config templates | Fixes [#460](https://github.com/moltis-org/moltis/issues/460) |
| [#408](https://github.com/moltis-org/moltis/pull/408) | penso | **Vulkan GGUF support** (opt-in feature) | Closes [#122](https://github.com/moltis-org/moltis/issues/122) — cross-platform GPU inference |
| [#471](https://github.com/moltis-org/moltis/pull/471) | penso | Fixes Chrome/Brave login loop via `Secure` cookie attribute | Fixes [#370](https://github.com/moltis-org/moltis/issues/370) |
| [#467](https://github.com/moltis-org/moltis/pull/467) | penso | **Lazy tool registry** with `tool_search` meta-tool — reduces input tokens 15K+ per turn | Major scalability for MCP-heavy setups |
| [#464](https://github.com/moltis-org/moltis/pull/464) | penso | `send_document` tool for file sharing (PDF, ZIP, etc.) to channels | Implements [#332](https://github.com/moltis-org/moltis/issues/332), [#337](https://github.com/moltis-org/moltis/issues/337) |
| [#436](https://github.com/moltis-org/moltis/pull/436) | vanduc2514 | Windows file lock fix: `append(true)` → `write(true)+seek` | Fixes [#434](https://github.com/moltis-org/moltis/issues/434) |
| [#419](https://github.com/moltis-org/moltis/pull/419) | zuisong | Configurable MCP request timeouts | Enables slow MCP servers like `codex mcp-server` |

**Key Themes:** Local LLM optimization, security hardening, cross-platform stability, MCP ecosystem scaling.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#460](https://github.com/moltis-org/moltis/issues/460) WhatsApp confusing | 👍 3 | **Highest user-reported pain point** — onboarding friction for business messaging. Fixed same-day by [#473](https://github.com/moltis-org/moltis/pull/473). |
| [#332](https://github.com/moltis-org/moltis/issues/332) Telegram file attachments | 👍 2 | Strong demand for document workflows; merged via [#464](https://github.com/moltis-org/moltis/pull/464). |
| [#370](https://github.com/moltis-org/moltis/issues/370) Chrome sign-in failure | 2 comments | Browser compatibility critical for web adoption; root cause was TLS cookie handling. |

**Underlying Need:** Users want Moltis as a **universal messaging bridge** — seamless file sharing, multi-channel reach, and frictionless auth across platforms.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Notes |
|:---|:---|:---|:---|
| 🔴 **High** | [#370](https://github.com/moltis-org/moltis/issues/370) Chrome login failure | ✅ [#471](https://github.com/moltis-org/moltis/pull/471) | Silent cookie rejection blocked HTTPS auth |
| 🔴 **High** | [#434](https://github.com/moltis-org/moltis/issues/434) Windows file lock crash | ✅ [#436](https://github.com/moltis-org/moltis/pull/436) | `LockFileEx` OS error 5 — platform-specific |
| 🟡 **Medium** | [#427](https://github.com/moltis-org/moltis/issues/427) Agent node confusion | ✅ [#474](https://github.com/moltis-org/molltis/pull/474) | Weak model hallucination — defensive fix |
| 🟡 **Medium** | [#420](https://github.com/moltis-org/moltis/issues/420) `web_fetch` UTF-8 panic | ✅ Closed | Legacy page encoding crash |
| 🟡 **Medium** | [#462](https://github.com/moltis-org/moltis/issues/462) Secret leakage in API | ✅ [#472](https://github.com/moltis-org/moltis/pull/472) | Security refactor — rejected prior fragile fix |

**Stability Assessment:** All reported bugs closed with targeted fixes. No regressions in open issues.

---

## 6. Feature Requests & Roadmap Signals

| Request | Status | Prediction |
|:---|:---|:---|
| **Vulkan support** [#122](https://github.com/moltis-org/moltis/issues/122) | ✅ Merged [#408](https://github.com/moltis-org/moltis/pull/408) | Now available as opt-in; likely promoted to default in future |
| **Lazy tool registry** [#467](https://github.com/moltis-org/moltis/pull/467) | ✅ Merged | Critical for MCP scale — may become default behavior |
| **System prompt profiles** [#466](https://github.com/moltis-org/moltis/pull/466) | 🔄 Open | Advanced customization — likely v0.10+ feature |
| **Witness recording / zkperf** [#470](https://github.com/moltis-org/moltis/pull/470) | 🔄 Open | Audit/observability layer — experimental, may ship behind flag |
| **Nix flake support** [#469](https://github.com/moltis-org/moltis/pull/469) | 🔄 Open | Reproducible builds — strong community signal |

**Next Version Indicators:** Prompt engineering tools (#466), observability (#470), and packaging (#469) suggest **v0.10** will focus on **operational maturity** and **enterprise readiness**.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|:---|:---|:---|
| **WhatsApp setup complexity** | [#460](https://github.com/moltis-org/moltis/issues/460) | 😤 Frustrated → 😊 Fixed rapidly |
| **File sharing limitations** | [#332](https://github.com/moltis-org/moltis/issues/332), [#337](https://github.com/moltis-org/moltis/issues/337) | 😐 Limited → ✅ Resolved |
| **Windows compatibility** | [#434](https://github.com/moltis-org/moltis/issues/434) | 😤 Blocker → ✅ Community fix merged |
| **Browser auth reliability** | [#370](https://github.com/moltis-org/moltis/issues/370) | 😤 Confusing → ✅ Root cause addressed |
| **Local LLM performance** | [#476](https://github.com/moltis-org/moltis/pull/476) | 🚀 Proactive optimization |

**Satisfaction Trend:** Strong — issues addressed with <24h median response for critical bugs. Users expressing needs around **document workflows**, **multi-platform deployment**, and **local AI efficiency**.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#476](https://github.com/moltis-org/moltis/pull/476) KV cache optimization | 0 days | Low — open but active | Final review for merge |
| [#466](https://github.com/moltis-org/moltis/pull/466) System prompt profiles | 0 days | Low | Feature-complete, awaiting review |
| [#465](https://github.com/moltis-org/moltis/pull/465) HTTP transport refactor | 0 days | Medium | Architecture review for crate split |
| [#470](https://github.com/moltis-org/moltis/pull/470) Witness recording | 0 days | Medium | Experimental — needs use-case validation |
| [#469](https://github.com/moltis-org/moltis/pull/469) Nix support | 0 days | Low | Community-driven, CI verification |
| [#468](https://github.com/moltis-org/moltis/pull/468) Windows shell hooks | 0 days | Low | Targeted fix, needs Windows CI |

**No stale items** — all open PRs are from today. Project exhibits **zero backlog drift**.

---

**Project Health Score:** 🟢 Excellent — high velocity, zero open issues, responsive maintainer, proactive performance work.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-24

## 1. Today's Overview

CoPaw demonstrates **high community velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an active development cycle around the recent v0.1.0 release. The project shows a healthy 66% closure rate on issues (33/50) and 60% on PRs (30/50), though 17 open issues and 20 open PRs suggest ongoing stabilization work. Activity concentrates on **memory/context management fixes**, **channel integrations** (WeChat, Huawei Xiaoyi, Telegram), and **CLI performance improvements**. The v0.1.0 release appears to have introduced authentication and tool-chain regressions that the community is actively triaging. Overall project health is **moderate-to-strong** with responsive maintainers but accumulating technical debt in memory compaction and multi-channel synchronization.

---

## 2. Releases

**No new releases** — v0.1.0.post1 remains the latest version.

---

## 3. Project Progress

### Merged/Closed PRs (Selected Highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1993](https://github.com/agentscope-ai/CoPaw/pull/1993) | Community QR codes on homepage | Lower barrier to community entry |
| [#967](https://github.com/agentscope-ai/CoPaw/pull/967) | Session interruption mechanism (8 keywords) | Critical UX improvement for long-running tasks |
| [#1913](https://github.com/agentscope-ai/CoPaw/pull/1913) | Unified `/stop` command across all channels | Cross-platform task control |
| [#1814](https://github.com/agentscope-ai/CoPaw/pull/1814) | Timezone-aware ReMe memory summarization | Fixes daily note filename generation |
| [#2136](https://github.com/agentscope-ai/CoPaw/pull/2136) | Windows print encoding fix | Platform stability |
| [#2130](https://github.com/agentscope-ai/CoPaw/pull/2130) → superseded by [#2135](https://github.com/agentscope-ai/CoPaw/pull/2135) | CLI lazy loading (53.9% faster startup) | Performance milestone |

### Active Development Areas
- **Memory system hardening**: Multiple PRs addressing compaction failures, empty results, and hallucination injection
- **Channel ecosystem expansion**: WeChat QR-login ([#2123](https://github.com/agentscope-ai/CoPaw/pull/2123)), OpenRouter provider ([#1192](https://github.com/agentscope-ai/CoPaw/pull/1192))
- **Embedding infrastructure**: Local multimodal embedding support ([#1789](https://github.com/agentscope-ai/CoPaw/pull/1789))

---

## 4. Community Hot Topics

| Rank | Item | Engagement | Core Need |
|:---|:---|:---|:---|
| 1 | [#2102](https://github.com/agentscope-ai/CoPaw/issues/2102) v0.1.0 auth error (CLOSED) | 21 comments | **Post-upgrade authentication stability** — resolved but indicates release friction |
| 2 | [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) Huawei Xiaoyi channel | 17 comments, OPEN | **Enterprise channel reliability** — bot appears in app but returns "network busy" errors; unclear if CoPaw or platform-side issue |
| 3 | [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) Tool-chain hangs | 12 comments, OPEN | **Production reliability** — 20+ minute stalls on file operations, browser use, script execution |
| 4 | [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) Multi-agent bot binding | 10 comments, OPEN | **Scalable agent architecture** — users want per-agent bot bindings and true multi-agent collaboration |
| 5 | [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043) WeChat ClawBot support | 6 comments, 8 👍, OPEN | **Platform expansion** — immediate response to WeChat's March 22 ClawBot announcement |

**Underlying Pattern**: Users are pushing CoPaw toward **production multi-agent deployments** across diverse Chinese platforms (Xiaoyi, WeChat, Feishu, QQ), but hitting **reliability walls** in authentication, tool execution timeouts, and memory management at scale.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) Tool-chain hangs | OPEN | None identified | 20+ min stalls blocking core workflows |
| 🔴 **Critical** | [#2092](https://github.com/agentscope-ai/CoPaw/issues/2092) Memory compaction hallucinations | OPEN | [#2129](https://github.com/agentscope-ai/CoPaw/pull/2129) (partial) | GLM-5 generates false content injected into context |
| 🟡 **High** | [#2077](https://github.com/agentscope-ai/CoPaw/issues/2077) Skill creation broken in v0.1.0 | OPEN | None | Core feature regression |
| 🟡 **High** | [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) Compaction interrupts active tasks | OPEN | None | UX-breaking: long tasks killed by maintenance operations |
| 🟡 **High** | [#2041](https://github.com/agentscope-ai/CoPaw/issues/2041) Telegram connection drops | OPEN | None | Channel reliability |
| 🟢 **Medium** | [#1068](https://github.com/agentscope-ai/CoPaw/issues/1068) Frontend image display failure | OPEN | None | Web UI/Channel sync issues |

**Memory system** is the dominant stability concern: 4+ issues trace to compaction, context loss, and token overflow handling. PR [#2129](https://github.com/agentscope-ai/CoPaw/pull/2129) and [#2141](https://github.com/agentscope-ai/CoPaw/pull/2141) address symptoms but root cause (summarizer quality + timing) remains unresolved.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.1.x | Rationale |
|:---|:---|:---|:---|
| **WeChat ClawBot native support** | [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043), [#2123](https://github.com/agentscope-ai/CoPaw/pull/2123) | **High** | PR in flight, platform strategic importance |
| **Per-workspace browser isolation** | [#2131](https://github.com/agentscope-ai/CoPaw/pull/2131) | **High** | PR open, addresses multi-agent cookie collision |
| **Multi-agent bot binding + collaboration** | [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) | **Medium** | Architectural change, high user demand |
| **Cross-channel session continuity** | [#2138](https://github.com/agentscope-ai/CoPaw/issues/2138) | **Medium** | PR [#2143](https://github.com/agentscope-ai/CoPaw/pull/2143) adds handoff hooks |
| **Local embedding models** | [#1789](https://github.com/agentscope-ai/CoPaw/pull/1789) | **Medium** | Privacy/offline use case, PR pending review |
| **LLM routing in chat UI** | [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209) | **Medium** | Infrastructure ready, needs UI polish |
| **Configurable heartbeat timeout** | [#2134](https://github.com/agentscope-ai/CoPaw/pull/2134) | **High** | Small surface, clear use case |

**Predicted v0.1.1 focus**: Memory system hotfixes, WeChat channel GA, CLI performance, and heartbeat configurability.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **v0.1.0 upgrade friction** | [#2102](https://github.com/agentscope-ai/CoPaw/issues/2102), [#2077](https://github.com/agentscope-ai/CoPaw/issues/2077) | High — auth breaks, features non-functional |
| **Silent failures / poor observability** | [#1270](https://github.com/agentscope-ai/CoPaw/issues/1270), [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) | High — agents stop without error, tools hang |
| **Memory/context corruption** | [#2092](https://github.com/agentscope-ai/CoPaw/issues/2092), [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222), [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) | Critical — hallucinations, lost sessions |
| **Channel-specific quirks** | [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) (Xiaoyi), [#2041](https://github.com/agentscope-ai/CoPaw/issues/2041) (Telegram), [#1199](https://github.com/agentscope-ai/CoPaw/issues/1199) (QQ/Console cross-talk) | Medium — platform integration debt |
| **Documentation gaps** | [#1194](https://github.com/agentscope-ai/CoPaw/issues/1194) (config persistence), [#1131](https://github.com/agentscope-ai/CoPaw/issues/1131) (PowerShell error handling) | Medium |

### Positive Signals
- **Responsive maintainers**: 66% issue closure rate, many closed within 24h
- **Performance investment**: CLI lazy loading shows engineering maturity
- **Community growth**: Homepage QR codes, active first-time contributors

### Use Cases Emerging
- **Enterprise assistant deployment** (Xiaoyi, Feishu, DingTalk integration)
- **Long-running autonomous agents** (highlighting memory/timeout limitations)
- **Multi-agent research teams** (demand for collaboration primitives)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) Xiaoyi channel | 4 days | **Platform partnership credibility** | Maintainer coordination with Huawei; unclear if fixable in CoPaw |
| [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209) Chat routing selector | 13 days | **Feature completeness** | UI polish + merge decision |
| [#1789](https://github.com/agentscope-ai/CoPaw/pull/1789) Local embedding | 6 days | **Privacy/offline roadmap** | Review bottleneck; high community value |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) OpenRouter provider | 14 days | **Model provider diversity** | Model filtering complete, needs final review |
| [#1068](https://github.com/agentscope-ai/CoPaw/issues/1068) Frontend images | 14 days | **Core UX degradation** | No assignee; affects all web UI users |

**Critical gap**: No maintainer response on [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) (Xiaoyi) for 4 days despite 17 comments — risks enterprise user churn.

---

*Digest generated from 50 issues and 50 PRs updated 2026-03-23*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-24

## 1. Today's Overview

ZeptoClaw showed **high development velocity** with 17 total updates (6 issues, 11 PRs) in the past 24 hours, including a significant v0.8.0 release. The project demonstrates strong maintainer responsiveness with 4/6 issues and 5/11 PRs closed. Activity centers on **production hardening** (embedded agent security, dependency vulnerabilities), **developer experience** (CLI polish, middleware refactoring), and **multi-channel expansion** (Telegram UX, ACP protocol). The codebase is undergoing substantial architectural work to address technical debt in the 4,155-line agent loop.

---

## 2. Releases

### [v0.8.0](https://github.com/qhkm/zeptoclaw/releases/tag/v0.8.0) — Latest

| Change | PR | Description |
|--------|-----|-------------|
| **Shimmer spinner + enhanced CLI UX** | [#337](https://github.com/qhkm/zeptoclaw/pull/337) | Visual feedback improvements for agent responses |
| **Deep-research skill** | [#344](https://github.com/qhkm/zeptoclaw/pull/344) | 4-phase research methodology implementation |
| **Ask clarification tool** | — | `pause_for_input` functionality for interactive agent flows |

**Breaking Changes:** None noted  
**Migration:** Standard `cargo update` path

---

## 3. Project Progress

### Merged/Closed PRs (5 items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#405](https://github.com/qhkm/zeptoclaw/pull/405) | qhkm | Fixed all 33 clippy warnings under `--all-targets` | CI hygiene, contributor onboarding |
| [#406](https://github.com/qhkm/zeptoclaw/pull/406) | qhkm | **Critical safety fix**: Empty taint snippets causing false positives | Security/stability |
| [#396](https://github.com/qhkm/zeptoclaw/pull/396) | stuartbowness | Telegram UX: typing indicator, markdown fixes, security hardening | Production channel quality |
| [#398](https://github.com/qhkm/zeptoclaw/pull/398) | qhkm | Conformance fixtures, edit fuzzy matching, output truncation | Tool reliability, testability |
| [#402](https://github.com/qhkm/zeptoclaw/pull/402) | qhkm | Hardened embedded ZeptoAgent facade | Backend/coding use case support |

**Key Advances:**
- **Safety infrastructure**: Taint engine hardened against edge case false positives
- **Testing maturity**: JSON fixture system enables non-Rust contributors to add regression tests
- **Embedded use cases**: ZeptoAgent now viable as library for backend integration

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#399](https://github.com/qhkm/zeptoclaw/issues/399) — Middleware pipeline RFC | 0 comments, but **scaffolding PR #404 already opened** | Maintainer-acknowledged technical debt; rapid response suggests high priority |
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) — ACP stdio + HTTP | 10 days old, last updated today | **Strategic protocol play** — ACP (Agent Client Protocol) positions ZeptoClaw as interoperable infrastructure; needs review attention |
| [#407](https://github.com/qhkm/zeptoclaw/pull/407) — Model discoverability | Fresh (today) | Addresses UX friction: manual provider configuration |

**Underlying Needs:**
- **Simplified configuration**: Users want "just works" model selection without provider micromanagement
- **Interoperability**: ACP support indicates demand for standard agent protocol compatibility
- **Architectural sustainability**: 4,155-line loop.rs is blocking feature velocity

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **P1-Critical** | [#403](https://github.com/qhkm/zeptoclaw/issues/403) — `edit_file` fuzzy-match range mapping bugs, empty-whitespace hangs | **OPEN** | None yet |
| P2-High | [#400](https://github.com/qhkm/zeptoclaw/issues/400), [#401](https://github.com/qhkm/zeptoclaw/issues/401) — Embedded agent hardening | **CLOSED** | [#402](https://github.com/qhkm/zeptoclaw/pull/402) |
| P2-High | [#408](https://github.com/qhkm/zeptoclaw/pull/408) — RUSTSEC vulnerabilities (aws-lc-sys, rustls-webpki) | **OPEN** | Pending merge |

**Critical Concern:** [#403](https://github.com/qhkm/zeptoclaw/issues/403) introduces data corruption risk — NFC normalization can map to wrong byte ranges, affecting file editing correctness. No fix PR yet despite same-day filing.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in v0.9.0 |
|--------|--------|----------------------|
| **Middleware pipeline architecture** | [#399](https://github.com/qhkm/zeptoclaw/issues/399) + [#404](https://github.com/qhkm/zeptoclaw/pull/404) | **High** — scaffolding merged, addresses core tech debt |
| **ACP protocol full implementation** | [#356](https://github.com/qhkm/zeptoclaw/pull/356) | Medium — substantial work, needs review bandwidth |
| **Auto model-provider selection** | [#407](https://github.com/qhkm/zeptoclaw/pull/407) | **High** — small UX win, already implemented |
| **Extended channel support** | [#392](https://github.com/qhkm/zeptoclaw/pull/392) pattern | Medium — Telegram improvements suggest channel ecosystem investment |

---

## 7. User Feedback Summary

| Source | Pain Point | Satisfaction Indicator |
|--------|-----------|------------------------|
| [stuartbowness](https://github.com/stuartbowness) daily-driving Telegram | "Bot now feels much more responsive"; markdown mangling fixed | ✅ **Resolved** — responsive maintainer loop |
| Embedded/backend users | Need parity between embedded facade and main agent loop | ✅ **Addressed** in v0.8.0 via [#402](https://github.com/qhkm/zeptoclaw/pull/402) |
| Security-conscious deployers | RUSTSEC advisories in dependencies | ⚠️ **Pending** — [#408](https://github.com/qhkm/zeptoclaw/pull/408) open |
| Tool users | Fuzzy matching reliability | ❌ **Active issue** — [#403](https://github.com/qhkm/zeptoclaw/issues/403) |

**Pattern:** Users actively deploying ZeptoClaw in production (Telegram bots, embedded systems) with tight feedback loops to maintainers.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) ACP implementation | 11 days | **High** — strategic protocol feature, bit-rotting | Maintainer review, possible rebase |
| [#386](https://github.com/qhkm/zeptoclaw/pull/386) toml bump | 7 days | Low | Routine dependency update, merge or close |
| [#392](https://github.com/qhkm/zeptoclaw/pull/392) Telegram typing indicator | 2 days | Low | Partially superseded by [#396](https://github.com/qhkm/zeptoclaw/pull/396)? Verify redundancy |

**Attention Required:** [#356](https://github.com/qhkm/zeptoclaw/pull/356) represents significant community contribution (ACP protocol) at risk of stalling. Recommend priority review to maintain contributor engagement and protocol roadmap credibility.

---

*Digest generated from 17 GitHub events on 2026-03-24. ZeptoClaw demonstrates healthy maintainer velocity with focused attention on production reliability and architectural sustainability.*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-24

**Repository:** [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. Today's Overview

EasyClaw (distributed as "RivonClaw") shows **minimal development activity** over the past 24 hours, with zero issues, pull requests, or code changes tracked. The project appears to be in a **maintenance/stable release phase**, focusing on distribution rather than active feature development. The two rapid-fire patch releases (v1.7.6 and v1.7.7) within 24 hours suggest **hotfix iterations**, likely addressing macOS distribution issues. No community engagement (comments, reactions, new contributors) was observed. Overall project health appears **stable but low-velocity**, typical of a mature desktop application with infrequent update cycles.

---

## 2. Releases

Two consecutive patch releases published today, both addressing the **same macOS Gatekeeper compatibility issue**:

| Version | Focus | Breaking Changes | Migration Notes |
|---------|-------|------------------|-----------------|
| **[v1.7.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.7)** | macOS installation troubleshooting | None | Users encountering "'RivonClaw' is damaged" errors should run `xattr -cr /Applications/RivonClaw.app` in Terminal |
| **[v1.7.6](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.6)** | macOS installation troubleshooting (initial fix) | None | Same fix as v1.7.7; v1.7.7 likely contains documentation refinement or additional edge case handling |

**Analysis:** The back-to-back releases suggest the initial fix (v1.7.6) may have been incomplete or poorly communicated, prompting a rapid v1.7.7 follow-up. No functional code changes are indicated—this is purely **distribution infrastructure hardening** for macOS users.

---

## 3. Project Progress

**No merged or closed PRs in the last 24 hours.**

Given the release activity, progress appears limited to:
- **Documentation updates** for macOS installation troubleshooting
- Potential **CI/CD adjustments** for notarization/signing workflows (inferred, not visible in PR data)

No feature advancement or bug fixes (beyond distribution packaging) are evident.

---

## 4. Community Hot Topics

**No active issues or PRs to analyze.**

The complete absence of open issues and pull requests indicates either:
- Effective issue resolution (all user problems addressed)
- **Low community adoption** or user base
- Issue tracking occurring outside GitHub (Discord, email, or other channels)

**Underlying need signal:** The repeated macOS Gatekeeper documentation in releases suggests **recurring user friction** with macOS installation, yet no corresponding GitHub issues were filed—users may be abandoning rather than reporting, or seeking help through alternative support channels.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| **Medium** | macOS Gatekeeper false-positive ("app is damaged") | **Mitigated via documentation** | Workaround in [v1.7.7 release notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.7) |

**No new crash reports, regressions, or stability issues** filed today. The Gatekeeper issue is a **packaging/distribution problem**, not a runtime bug. No permanent fix (Apple notarization/developer ID signing) appears implemented—users must still bypass security manually.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests submitted today.**

**Predicted next-version candidates** (based on release pattern analysis):
| Likely Priority | Feature | Rationale |
|-----------------|---------|-----------|
| High | **Apple notarization / Developer ID signing** | Eliminates manual Terminal workarounds, reduces support burden |
| Medium | **Automated notarization in CI/CD** | Prevents future patch-release churn for distribution issues |
| Low | **Windows/Linux distribution parity** | No evidence of cross-platform demand in current data |

---

## 7. User Feedback Summary

**Quantified feedback:** Zero GitHub issues, comments, or reactions in 24h.

**Inferred pain points** (from release note emphasis):
- **macOS installation friction** is the dominant user experience problem
- Users likely encountering Gatekeeper, abandoning install, or seeking help externally
- No satisfaction/dissatisfaction signals available in public channels

**Use case opacity:** Project purpose (AI agent/personal assistant functionality) is unclear from release metadata; repository may need clearer README positioning.

---

## 8. Backlog Watch

**No stale issues or PRs requiring attention**—backlog is empty.

**Recommendation for maintainers:** The zero-issue state is atypical for active open-source projects. Consider:
- Enabling GitHub Discussions to capture user feedback that may be going unreported
- Adding issue templates to lower barrier for macOS installation reports
- Monitoring external support channels (if any) for unfiled bugs

---

*Digest generated from GitHub API data. No speculative claims beyond data-supported inferences.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*