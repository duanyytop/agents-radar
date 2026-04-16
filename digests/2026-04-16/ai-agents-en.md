# OpenClaw Ecosystem Digest 2026-04-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-16 00:17 UTC

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

# OpenClaw Project Digest — 2026-04-16

## 1. Today's Overview

OpenClaw remains highly active with **500 issues and 500 PRs updated in the last 24 hours**, indicating a large, engaged community and rapid development pace. However, project health shows strain: a **critical onboarding regression** (`TypeError: Cannot read properties of undefined (reading 'trim')`) is blocking new user installations across multiple paths (`onboard`, `configure`, install script), with numerous duplicate reports confirming widespread impact. The team shipped one beta release focused on control UI observability, while maintainers actively closed **138 PRs/issues** against **362 open PRs still in flight**. The contributor base is diverse with significant community PR activity, but stability issues—particularly around installation, Windows support, and provider integrations—are dominating user attention.

---

## 2. Releases

### [v2026.4.15-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15-beta.1)

| Aspect | Detail |
|--------|--------|
| **Type** | Beta |
| **Focus** | Gateway observability & model authentication health |

**Changes:**
- **Control UI/Overview**: Added a **Model Auth status card** displaying OAuth token health and provider rate-limit pressure at a glance
- Visual attention callouts when OAuth tokens are expiring or expired
- Backed by new `models.authStatus` gateway method that strips credentials and caches for 60s

**Breaking changes / migration notes:** None reported.

---

## 3. Project Progress

### Notable Merged/Closed PRs (2026-04-15/16)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#66378](https://github.com/openclaw/openclaw/pull/66378) | athletesofthereef | Fix WhatsApp media sends by bypassing legacy outbound send dependency | **Channel reliability** — media messaging restored |
| [#66331](https://github.com/openclaw/openclaw/pull/66331) | acwilan | Add **per-agent TTS and STT overrides** | Major multi-agent UX improvement; agents can now have individual voice/speech configs |
| [#59619](https://github.com/openclaw/openclaw/pull/59619) | MoerAI | Fix Feishu TTS audio delivery as voice messages instead of file attachments | **Enterprise channel fix** |
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | happydog-intj | SIGKILL stale processes when graceful shutdown times out | **Stability** — prevents port conflicts on restart |
| [#66259](https://github.com/openclaw/openclaw/pull/66259) | seank-com | Prefer `--mask` for QMD collection add compatibility | **Memory/local AI compatibility** |
| [#67395](https://github.com/openclaw/openclaw/pull/67395) | igormf | Fix Windows `pnpm.exe` runner and Lobster embedded runtime fallback | **Windows install unblocking** |

### Features Advancing in Open PRs

| PR | Focus |
|---|---|
| [#65554](https://github.com/openclaw/openclaw/pull/65554) | **Full media suite for WebChat** (images, audio, video, documents) — major UI enhancement |
| [#66168](https://github.com/openclaw/openclaw/pull/66168) | **MCP Apps protocol extension** — tools, resources, UI meta for gateway-powered app experiences |
| [#66898](https://github.com/openclaw/openclaw/pull/66898) | **Windows native wrapper & hardened installer** |
| [#67433](https://github.com/openclaw/openclaw/pull/67433) | Blocking mode for `POST /hooks/agent` endpoint |
| [#67420](https://github.com/openclaw/openclaw/pull/67420) | Per-agent dreaming control to prevent OOM |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Status | Topic | Underlying Need |
|---|---|---|---|---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | **89** | Open | **RFC: Native Agent Identity & Trust Verification** | Decentralized identity, agent-to-agent trust, verifiable credentials — signals demand for **inter-agent authentication standards** |
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | **31** | Closed | Memory leak / OOM on basic CLI commands | **Resource efficiency** in long-running or frequent CLI usage |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | **19** | Open (stale) | Text between tool calls leaks to messaging channels | **Clean UX boundary** between internal agent reasoning and user-facing output |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | **19** | Open (stale) | OpenRouter 401 missing authentication header regression | **Provider auth reliability** — regression in model routing |
| [#35220](https://github.com/openclaw/openclaw/issues/35220) | **15** | Open (stale) | Codex Responses API `server_error` doesn't trigger fallback | **Resilience** in model failover chains |

**Analysis:** The community is deeply engaged in two parallel tracks: **foundational trust/infrastructure** (identity, agent economy, MCP protocols) and **daily reliability** (auth, leaks, fallbacks, memory). The 89-comment RFC on agent identity suggests OpenClaw is being positioned as infrastructure for a broader multi-agent ecosystem.

---

## 5. Bugs & Stability

### Critical / Severe — Blocking New Users

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#66718](https://github.com/openclaw/openclaw/issues/66718) | **P0 — Critical** | `openclaw configure` crashes with `TypeError: Cannot read properties of undefined (reading 'trim')` | **Yes** — [#67130](https://github.com/openclaw/openclaw/pull/67130) closed, but reports continue |
| [#67291](https://github.com/openclaw/openclaw/issues/67291) | **P0 — Critical** | `openclaw onboard` crashes with same `trim` error, cannot skip channels | **Yes** — [#67130](https://github.com/openclaw/openclaw/pull/67130) |
| [#67347](https://github.com/openclaw/openclaw/issues/67347) | **P0 — Critical** | Install quickstart crashes with `trim` error | Same root cause |
| [#67074](https://github.com/openclaw/openclaw/issues/67074) | **P0** | New 4.14 install: `trim` crash on channel skip | Closed as duplicate |
| [#66641](https://github.com/openclaw/openclaw/issues/66641) | **P0** | Installer crashes after "Select channel (QuickStart)" | Closed as duplicate |

> **Note:** Despite [#67130](https://github.com/openclaw/openclaw/pull/67130) being merged as "fix bundled setup plugin meta is incomplete," fresh reports on 2026-04-15 suggest the fix may be **incomplete or not yet released**.

### High Severity — Runtime Regressions

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#66633](https://github.com/openclaw/openclaw/issues/66633) | **P1 — High** | `openai-codex` provider fails with Cloudflare 403 on every request after 2026.4.14 upgrade | **No fix PR identified** |
| [#66674](https://github.com/openclaw/openclaw/issues/66674) | **P1 — High** | `openai-codex/gpt-5.4` direct CLI infer returns HTML rawError, surfaced as "DNS lookup failed" | **No fix PR identified** |
| [#66601](https://github.com/openclaw/openclaw/issues/66601) | **P1 — High** | v2026.4.14 causes repeated context engine errors (`lossless-claw` factory invalid) | **No fix PR identified** |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | **P1 — High** | Windows chat UI regression: input swallowed, streamed replies invisible, typing indicator broken | **No fix PR identified** |

### Medium Severity — Functional / UX

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#66207](https://github.com/openclaw/openclaw/issues/66207) | **P2 — Medium** | Control UI chat flickers: sent messages disappear briefly then reappear | **No fix PR identified** |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | **P2 — Medium** | `amazon-bedrock-mantle` lacks `config.discovery.enabled` gate; unnecessary discovery on every request | **No fix PR identified** |
| [#67261](https://github.com/openclaw/openclaw/issues/67261) | **P2 — Medium** | Venice model responses missing `id`/`status` cause crash | **No fix PR identified** |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|---|---|---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | Native Agent Identity & Trust Verification (ERC-8004, DID, VC) | **Medium** — high engagement but architectural; likely spawns working group |
| [#28106](https://github.com/openclaw/openclaw/issues/28106) | Agent-to-Agent Task Delegation Protocol ("Agent Economy") | **Medium** — aligned with identity RFC, needs protocol design |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | Memory v2: Associative Traversal, Salience Weighting, Access-Based Forgetting | **High** — memory is a repeated pain point; closed but likely resurfacing |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | `memory_search` recursive subdirectory search (`memory/**/*.md`) | **High** — small, well-scoped, clear user value |
| [#20562](https://github.com/openclaw/openclaw/issues/20562) | Add Serper.dev as `web_search` provider | **Medium-High** — Brave Search free tier killed; community demand for alternative |
| [#29563](https://github.com/openclaw/openclaw/issues/29563) | Control UI session picker + "New chat" + rename | **Medium** — UX polish with sustained interest |
| [#66168](https://github.com/openclaw/openclaw/pull/66168) | MCP Apps protocol extension | **High** — large open PR, signals official direction |

---

## 7. User Feedback Summary

### Top Pain Points

1. **Installation/onboarding is broken** — The `trim` crash is the loudest, most repeated complaint across languages and platforms. New users cannot get past channel selection.
2. **Provider fragility** — OpenAI Codex, OpenRouter, and Venice integrations are failing after recent updates. Users experience 403s, 401s, DNS misreports, and missing fallbacks.
3. **Windows is second-class** — Multiple reports of UI regressions, install failures, and WebSocket races on Windows.
4. **Leaky abstractions** — Tool call text leaks to messaging channels; exec completion events pollute webchat; internal reasoning surfaces to users.

### Positive Signals

- **Multi-agent features** (per-agent TTS/STT) are advancing and respond to real power-user needs.
- **Media support in WebChat** (#65554) is a highly anticipated community contribution.
- **Chinese i18n docs** (#64605) show global adoption efforts.

### Satisfaction Assessment

| Dimension | Score | Rationale |
|---|---|---|
| Core stability | ⚠️ **At risk** | Onboarding regression + provider breakages in latest release |
| Feature velocity | ✅ **Strong** | Active PRs for media, MCP, Windows native, memory improvements |
| Community health | ✅ **Healthy** | High comment counts, diverse contributors, sustained engagement |
| Release quality | ⚠️ **Concerning** | 2026.4.14 introduced multiple regressions; beta cadence may need gating |

---

## 8. Backlog Watch

### Long-Unanswered Important Items Needing Maintainer Attention

| Issue/PR | Age | Problem | Why It Needs Attention |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | ~7 weeks | Tool call text leaks to messaging channels | **Core UX bug**; stale but unaddressed; PR #65508 partially addresses tag stripping |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | ~6 weeks | OpenRouter 401 missing auth header | **Provider regression** affecting a popular routing option |
| [#35220](https://github.com/openclaw/openclaw/issues/35220) | ~6 weeks | Codex `server_error` doesn't trigger fallback | **Reliability gap** in model failover; variant of previously closed issue |
| [#43419](https://github.com/openclaw/openclaw/issues/43419) | ~5 weeks | `npm install -g openclaw` fails without Git | **Installation barrier** due to `libsignal-node` git dependency |
| [#42225](https://github.com/openclaw/openclaw/issues/42225) | ~5 weeks | `gpt-5.4` still uses 272k context despite PR #37876 | **Context engineering debt**; wastes tokens and degrades performance |
| [#35071](https://github.com/openclaw/openclaw/pull/35071) | ~6 weeks | Eval framework for skill-creator | **Developer experience**; large open PR with no recent maintainer review |
| [#59949](https://github.com/openclaw/openclaw/pull/59949) | ~2 weeks | `includedWorkDirs` agent workspace support | **Agent workspace flexibility**; XL PR needing review |

---

*Digest generated from GitHub activity data for 2026-04-16.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent & Personal Assistant Ecosystem
## April 16, 2026

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem is experiencing **intense, sustained development velocity** across more than a dozen active projects, with daily issue and PR volumes rivaling major infrastructure software. However, the landscape is **deeply fragmented** — no single project has achieved dominant market position, and most are grappling with similar growing pains: onboarding regressions, provider API fragility, Windows/Linux cross-platform gaps, and the architectural leap from single-agent to multi-agent orchestration. The field is simultaneously **feature-expanding** (MCP adoption, voice channels, local LLM routing) and **stabilization-challenged**, with several projects shipping regressions that block new users. Enterprise and self-hosted deployment scenarios are emerging as the primary battlegrounds for differentiation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Assessment |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.15-beta.1 | ⚠️ **C+** | Massive scale, but critical onboarding regression blocking new users; provider breakages in latest release |
| **NanoBot** | 17 (11 open) | 46 (28 open) | None | ⚠️ **B** | Very high velocity, fast integration phase; memory regression risk from v0.1.5.post1 |
| **Hermes Agent** | 50 (22 open) | 50 (31 open) | None | ✅ **B+** | Rapid stabilization, strong maintainer response; healthy backlog with architectural milestones closing |
| **PicoClaw** | 7 (4 open) | 26 (6 open) | v0.2.6-nightly | ✅ **A-** | Highest merge rate, same-day maintainer turnaround; strong acceleration with mature multi-agent features |
| **NanoClaw** | 5 fresh | 17 (13 open) | None | ⚠️ **B-** | Aggressive feature expansion but concentrated onboarding friction; zero maintainer response to new issues |
| **NullClaw** | 9 | 8 (5 open) | None | ⚠️ **C+** | Active contributions but basic feature breakages (shell, HTTP) and source-build friction |
| **IronClaw** | 17 (9 open) | 50 (43 open) | None | ⚠️ **C+** | Very high velocity but P0 security regression + staging web UI regressions; backlog accumulating |
| **LobsterAI** | 3 | 27 (5 open) | None | ✅ **B** | Fast core-team throughput, limited external community; enterprise Chinese IM focus |
| **Moltis** | 7 (1 open) | 15 (5 open) | None | ✅ **A-** | Exceptional close rate (6/7 issues resolved); reactive but effective provider patching |
| **CoPaw/QwenPaw** | 50 (25 open) | 50 (25 open) | v1.1.2-beta.1, v1.1.1.post1 | ⚠️ **B-** | Aggressive iteration with dual releases; silent failures and branding confusion eroding trust |
| **ZeroClaw** | 50 (39 open) | 41 (34 open) | None | ⚠️ **C** | Backlog growing faster than resolution; 7 open S0 issues, persistent onboarding blockers |
| **TinyClaw** | 0 | 0 | None | — **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | None | — **Inactive** | No activity |

*\*Health score synthesizes velocity, close/merge rate, severity of open bugs, and maintainer responsiveness.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale dominance**: OpenClaw's 500 issues and 500 PRs in 24 hours dwarfs every competitor except CoPaw/QwenPaw and ZeroClaw, reflecting the largest contributor base and most diverse use cases.
- **Protocol leadership**: The 89-comment RFC on Native Agent Identity & Trust Verification (#49971) and the active MCP Apps protocol extension (#66168) position OpenClaw as the **de facto standards incubator** for inter-agent authentication and multi-agent tooling.
- **Channel breadth**: WhatsApp, Feishu, WebChat media suite, and per-agent TTS/STT overrides demonstrate the most mature multi-channel infrastructure.

### Technical Approach Differences
- **Gateway-centric architecture**: OpenClaw invests heavily in a unified gateway abstraction (`models.authStatus`, control UI observability) rather than per-channel silos, contrasting with NanoBot's or LobsterAI's connector-heavy approaches.
- **Beta-first release cadence**: Ships frequent beta releases with observability focus, whereas PicoClaw and Moltis prefer nightly/patch stability, and CoPaw pushes aggressive minor releases.

### Community Size Comparison
| Metric | OpenClaw | Nearest Comparable |
|:---|:---|:---|
| Daily issues+PRs | ~1,000 | CoPaw: ~100, ZeroClaw: ~91 |
| Comment velocity on RFCs | 89 (#49971) | Hermes multi-agent: 27, CoPaw help wanted: 57 |
| Contributor diversity | Very high (athletesofthereef, acwilan, MoerAI, seank-com, igormf, etc.) | Moltis: concentrated (penso, Cstewart-HC); LobsterAI: core-team dominated |

**Vulnerability**: OpenClaw's scale has become a liability for release quality. The 2026.4.14 release introduced multiple regressions, and the critical `trim` onboarding crash is generating duplicate reports faster than fixes propagate.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP (Model Context Protocol) tooling** | OpenClaw (#66168), PicoClaw (#2535), Moltis (#712, #724, #732, #733), NanoClaw (#1781), IronClaw (#2474) | Health-check robustness, stdio vs. Streamable HTTP server support, slash-command UX, OAuth discovery boundaries |
| **Multi-agent orchestration** | OpenClaw (#49971, #28106), Hermes (#344), PicoClaw (#2531), CoPaw (#3340), ZeroClaw (#5774) | Agent-to-agent delegation, trust verification, ACP-based external delegation, identity standards (ERC-8004, DID, VC) |
| **Local/self-hosted LLM support** | NanoBot (#3186), PicoClaw (#28), CoPaw (#3443, vLLM/Ollama issues), Moltis (#723, #727), ZeroClaw (#5531) | LM Studio frictionless connect, Ollama fixes, context window overrides, local/cloud routing, judge-based routing |
| **Provider resilience & fallbacks** | OpenClaw (#34830, #35220, #66633), NanoBot (#3143), Hermes (#10223, #10575), Moltis (#716, #717, #725), ZeroClaw (#5670, #5527, #5600) | Auth header regressions, 401/403 handling, Codex/OpenRouter failover, reasoning content preservation, strict schema compatibility |
| **Windows-native stability** | OpenClaw (#66898, #67035), Hermes (#10550), ZeroClaw (#5562), NanoClaw (#1787 Apple Container) | Installer hardening, UI regressions, pnpm/Node runtime alignment, WebSocket races |
| **Memory/data reliability** | NanoBot (#2957, #3190), OpenClaw (#28930), Hermes (#10570, #6025), CoPaw (#3011, #3279), Moltis (#728) | Dream/consolidation overwrite bugs, format compatibility, MEMORY.md reliability, context compression, unbounded state growth |
| **Voice/TTS/STT channels** | OpenClaw (#66331), CoPaw (#3449), NanoClaw (#1760), Moltis (#735) | Per-agent voice configs, Twilio fallback, SIP/LiveKit integration, custom ElevenLabs voices |

---

## 5. Differentiation Analysis

| Dimension | Leaders | Laggards | Key Differentiators |
|:---|:---|:---|:---|
| **Enterprise IM (China)** | LobsterAI (POPO, DingTalk, Feishu, Weixin, QQ), NanoBot (Feishu, Teams), OpenClaw (Feishu, WhatsApp) | NullClaw, ZeroClaw | LobsterAI's native connector depth; OpenClaw's media messaging reliability |
| **Terminal-first / developer UX** | Hermes (rich output, diff views, syntax highlighting), ZeroClaw (Rust TUI) | NanoBot, CoPaw | Hermes' `agent/rich_output.py` and Web UI Gateway closure |
| **Web UI polish** | PicoClaw (markdown highlighting, `/btw` command, composer fixes), IronClaw (dashboard, search integration) | ZeroClaw (#4866 dashboard unavailable), NullClaw | PicoClaw's same-day UI bug fixes; IronClaw's staging regressions are a liability |
| **Security/sandboxing** | Moltis (file tool containment, approval gating), ZeroClaw (TOTP shell gating, path guards), NullClaw (sandbox PATH validation) | OpenClaw, CoPaw | Moltis' directory containment + approval gating; ZeroClaw's per-command TOTP |
| **Local/edge deployment** | PicoClaw (Sogou search, cross-platform ARM/FreeBSD fixes), NanoBot (LM Studio first-class), CoPaw (local routing v1) | OpenClaw | PicoClaw's hardware-aware portability; CoPaw's judge-based local/cloud routing |
| **Observability/control plane** | OpenClaw (Model Auth status card, gateway caching), CoPaw (Agent Statistics PR), IronClaw (insights interval) | Hermes, NullClaw | OpenClaw's 60s-cached `models.authStatus` gateway method |
| **Architectural ambition** | ZeroClaw (microkernel RFC, crate splitting), OpenClaw (MCP Apps, identity RFC), Hermes (multi-agent architecture closed) | PicoClaw, Moltis | ZeroClaw's v1.0.0 microkernel restructuring; OpenClaw's protocol standardization |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating, High Merge Health
| Project | Characteristics |
|:---|:---|
| **PicoClaw** | 77% merge rate (20/26), same-day maintainer response, nightly builds, multi-agent delegation landing |
| **Moltis** | 75% merge rate (15/20), 86% issue close rate, exceptional maintainer velocity (penso), provider patching excellence |
| **Hermes Agent** | 38% PR merge/close rate but high-quality closures, rapid bug-fix turnaround, architectural milestones completed |

### Tier 2: High Velocity, Stability Strain
| Project | Characteristics |
|:---|:---|
| **OpenClaw** | Massive throughput but release quality degrading; onboarding blocked; community scale is unmatched but management lagging |
| **CoPaw/QwenPaw** | Dual releases in 24h, ambitious features (Mission Mode, routing), but silent failures and branding confusion |
| **NanoBot** | Fast `nightly` integration, large PR splitting, but memory regression and skill-development friction |
| **IronClaw** | High PR volume but backlog accumulating; P0 security + web regressions need immediate triage |

### Tier 3: Growing but Fragile
| Project | Characteristics |
|:---|:---|
| **NanoClaw** | Aggressive roadmap execution but zero maintainer response to concentrated onboarding issues |
| **NullClaw** | Active contribution base but basic tool breakages and build friction undermining first impressions |
| **ZeroClaw** | Backlog growing faster than resolution; 7 open S0 issues; architectural RFCs may be escape hatches from reactive maintenance |

### Tier 4: Core-Team Dominated / Limited External Community
| Project | Characteristics |
|:---|:---|
| **LobsterAI** | 81% merge rate but only 3 issues; NetEase-internal velocity with Chinese enterprise focus; low external contributor diversity |

### Inactive
| **TinyClaw**, **ZeptoClaw** | Zero activity |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **MCP is becoming table stakes** | 6+ projects actively implementing or hardening MCP server/tooling support | Developers should design agent skills around MCP compatibility; custom tool protocols face extinction |
| **Agent identity and trust protocols are emerging** | OpenClaw's 89-comment RFC (#49971), Hermes' multi-agent architecture closure, CoPaw's ACP delegation PR | Inter-agent authentication will be the next major standards war; early adoption of DID/VC patterns may yield interoperability advantages |
| **Local LLM + hybrid routing is a primary battleground** | LM Studio support in NanoBot/PicoClaw, CoPaw's local judge routing, Moltis' context window overrides, vLLM/Ollama issues everywhere | Self-hosted and edge deployments are no longer niche; agent frameworks must treat local model UX as first-class |
| **Provider fragility is the #1 operational pain** | OpenClaw's Codex/OpenRouter regressions, Moltis' Gemini/Qwen patches, ZeroClaw's 5+ provider OAuth/errors | Building robust provider abstraction layers with automatic failover, schema normalization, and auth resilience is a critical competitive moat |
| **Memory reliability is a trust threshold** | NanoBot's dream overwrite bug, CoPaw's silent task stops, OpenClaw's OOM dreaming controls | Users will abandon agents that lose or corrupt context; memory subsystems need data-loss guarantees, not just performance optimization |
| **Enterprise IM integration = geographic market share** | LobsterAI's Chinese connector dominance, NanoBot's Feishu refinement, OpenClaw's global channel breadth | Winning regional enterprise markets requires deep, native integration with local messaging platforms, not generic webhooks |
| **Release quality is outpacing feature velocity as a success predictor** | OpenClaw's onboarding regression, IronClaw's staging P0s, ZeroClaw's S0 backlog | The projects that survive the next 12 months will be those that slow feature expansion to stabilize onboarding and core reliability |

---

*Report compiled from 13 project digests dated 2026-04-16.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-16

## 1. Today's Overview

NanoBot saw **very high development velocity** in the last 24 hours, with **46 PRs updated** (28 open, 18 merged/closed) and **17 issues active** (11 open, 6 closed). No new release was cut. The project is in a **fast-moving integration phase** on the `nightly` branch: multiple large feature PRs are being split, reviewed, and re-landed (e.g., Microsoft Teams reintegration, performance optimizations from #3158). At the same time, a **regression from v0.1.5 → v0.1.5.post1** was reported, indicating some stability risk around memory compatibility. Community engagement is strong, particularly from Feishu and Microsoft Teams users.

---

## 2. Releases

**None today.**

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary |
|---|---|---|
| [#2600](https://github.com/HKUDS/nanobot/pull/2600) | T3chC0wb0y | **Microsoft Teams channel** — landed on `nightly` after a long review cycle. |
| [#2929](https://github.com/HKUDS/nanobot/pull/2929) | T3chC0wb0y | Fixed Teams quote normalization hardcoded fallback and wired restart notifications. |
| [#3178](https://github.com/HKUDS/nanobot/pull/3178) | LeoFYH | Removed duplicate `channel_id` assignment in Discord message handler. |
| [#3186](https://github.com/HKUDS/nanobot/pull/3186) | sohamb117 | **LM Studio first-class support + nullable API keys** — closed after merge. |
| [#3158](https://github.com/HKUDS/nanobot/pull/3158) | mohamed-elkholy95 | Large omnibus performance/correctness PR **closed and split** into smaller PRs (#3180–#3184). |
| [#3160](https://github.com/HKUDS/nanobot/pull/3160) | Aisht669 | Added **MiniMax Anthropic-compatible endpoint** with `reasoning_effort` (thinking mode). |
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) | chengyongru | **MyTool** runtime self-inspection tool — merged. |

**Key advances:**
- **Channel expansion:** Teams is now native; Feishu threading/reactions are being refined.
- **Local LLM UX:** LM Studio is officially supported; null API keys are allowed.
- **Performance:** A major optimization patchset was decomposed and is being re-reviewed for merge.
- **Agent introspection:** Agents can now read/set their own runtime state via `MyTool`.

---

## 4. Community Hot Topics

### Most Active Threads

| # | Item | Comments | Why It's Hot |
|---|---|---|---|
| [#623](https://github.com/HKUDS/nanobot/issues/623) | Persistent "Tool Not Found" Errors for Custom Skills | 8 | **Skill development friction.** New users building custom skills (Google Calendar, HA Voice) hit registration/discovery failures. Closed, but the pattern suggests docs or tooling gaps for skill authors. |
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) | Cron/scheduled task message send lacks user session | 7 | **Core UX gap.** Cron runs in an isolated session, so users cannot follow up on or refine automated outputs. Underlying need: persistent or attachable session context for scheduled agents. |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | LLM error 1214: illegal messages parameter | 5 | **Provider reliability.** High-frequency token-consolidation failures on Feishu. Suggests message-format validation or provider-specific adapter fragility. |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | 一些建议 (Various suggestions) | 5 | **Power-user configurability.** Requests cover CLI model overrides, configurable timeouts, LLM fallback chains, and multi-provider setup. Signals that NanoBot is being adopted in team/enterprise settings where reliability and flexibility matter. |

### Notable Large PRs Under Review
- [#3144](https://github.com/HKUDS/nanobot/pull/3144) — **AgentHiFive integration** (MCP-backed backend, vault-managed channels). This is a significant architectural addition and will likely draw sustained review attention.
- [#3191](https://github.com/HKUDS/nanobot/pull/3191) — **Teams reintegration** onto latest `nightly`, incorporating all prior review feedback.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| 🔴 **Critical** | [#3190](https://github.com/HKUDS/nanobot/issues/3190) | **v0.1.5 → v0.1.5.post1 regression:** crash on startup/memory load (`Error processing message for session feishu:...`). Reporter suspects memory-format incompatibility. | **None yet.** |
| 🟠 **High** | [#3143](https://github.com/HKUDS/nanobot/issues/3143) | Frequent LLM error 1214 during token consolidation on Feishu. Disrupts long conversations. | **None yet.** |
| 🟠 **High** | [#2957](https://github.com/HKUDS/nanobot/issues/2957) | **MEMORY.md overwritten/blanked by "dream"** — data loss bug. Closed today; fix presumably landed. | Closed |
| 🟡 **Medium** | [#3166](https://github.com/HKUDS/nanobot/issues/3166) | Feishu `send_progress` notifications missing. Fix likely in [#3176](https://github.com/HKUDS/nanobot/pull/3176). | [#3176](https://github.com/HKUDS/nanobot/pull/3176) |
| 🟡 **Medium** | [#3102](https://github.com/HKUDS/nanobot/issues/3102) | `NoneType` vs `int` comparison in `_build_kwargs` when `max_tokens`/`temperature` are absent. | Closed |
| 🟡 **Medium** | [#3115](https://github.com/HKUDS/nanobot/issues/3115) | Cron `deliver: false` ignored when agent produces output. | Closed |
| 🟢 **Low** | [#2921](https://github.com/HKUDS/nanobot/issues/2921) | MSTeams restart notify config exposed but unimplemented. | [#3191](https://github.com/HKUDS/nanobot/pull/3191) |

**Stability assessment:** The v0.1.5.post1 regression is the most urgent open risk. Memory/data-loss bugs (#2957) appear addressed, but the pattern raises confidence questions around the "dream" and consolidation subsystems.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|---|---|---|
| **Per-phase model overrides** (eval vs. exec in heartbeat) | [#3156](https://github.com/HKUDS/nanobot/pull/3156) | **High** — small, well-scoped, active review. |
| **LM Studio native provider** | [#3185](https://github.com/HKUDS/nanobot/issues/3185) → [#3186](https://github.com/HKUDS/nanobot/pull/3186) | **Merged** — already in. |
| **MiniMax thinking mode** | [#3160](https://github.com/HKUDS/nanobot/pull/3160) | **Merged** — already in. |
| **Feishu thread-scoped sessions + reply_in_thread** | [#3176](https://github.com/HKUDS/nanobot/pull/3176) | **High** — directly addresses enterprise Feishu UX. |
| **MyTool runtime self-inspection** | [#3177](https://github.com/HKUDS/nanobot/pull/3177) | **High** — already merged in #2521, this is a follow-up/reland. |
| **AgentHiFive integration** | [#3144](https://github.com/HKUDS/nanobot/pull/3144) | **Medium** — large PR, may need multiple review rounds. |
| **LLM provider fallback + multi-custom provider** | [#3107](https://github.com/HKUDS/nanobot/issues/3107) | **Medium** — architectural, but strongly requested by teams. |
| **Configurable LLM timeout + CLI `-model` override** | [#3107](https://github.com/HKUDS/nanobot/issues/3107) | **Medium-High** — small surface area, high user value. |
| **WebSocket tooling + session lifecycle** | [#3179](https://github.com/HKUDS/nanobot/pull/3179) | **Medium** — broad surface, may be staged. |

---

## 7. User Feedback Summary

### Pain Points
- **Memory/data-loss anxiety:** The "dream" overwrite bug (#2957) and the v0.1.5.post1 crash (#3190) have users worried about MEMORY.md reliability.
- **Skill development is hard:** Custom skill registration fails opaquely (#623), creating a steep onboarding curve.
- **Cron/scheduled tasks feel disconnected:** Users cannot iterate on cron outputs (#3123), limiting automation usefulness.
- **Provider robustness:** Feishu users especially hit frequent LLM format errors (#3143) and lack progress feedback (#3166).
- **Billing blindness:** No warning when an API key is in arrears (#3006).

### Positive Signals
- Strong enthusiasm from first-time personal-AI users (#623: "very exciting getting things to work!").
- Active enterprise/team adoption in China (Feishu) and globally (Teams, Telegram, Slack).
- Appreciation for fast maintainer response: multiple issues closed within days of reporting.

---

## 8. Backlog Watch

These items have been open for weeks or longer and need maintainer triage or decision:

| Item | Age | Why It Needs Attention |
|---|---|---|
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | ~1 month | **Proposal: `ContextVar` for task-local tool routing.** Async-safety hardening. Has architectural merit but no maintainer response. |
| [#3006](https://github.com/HKUDS/nanobot/issues/3006) | ~6 days | API-key arrearage silent failure. Small UX fix, zero engagement. |
| [#3095](https://github.com/HKUDS/nanobot/issues/3095) | ~3 days | Custom Anthropic API endpoint support. Blocked on provider architecture questions; no maintainer reply. |
| [#3188](https://github.com/HKUDS/nanobot/issues/3188) | 1 day | `nanobot-channel-webhook` install fails from docs. Likely docs or packaging regression; needs quick verification. |

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-16.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-16

---

## 1. Today's Overview

Hermes Agent saw **very high activity** on 2026-04-16 with **50 issues and 50 PRs updated** in the last 24 hours, though **no new releases** were cut. The project is in an active stabilization and feature-polish phase: 28 issues were closed and 19 PRs merged/closed, with maintainers rapidly landing fixes for profile isolation, Docker compatibility, Slack/Discord gateway bugs, and provider edge cases. At the same time, 31 open PRs and 22 open/active issues indicate a healthy but backlogged pipeline. The community is particularly engaged around multi-agent architecture, security reporting, and AWS Bedrock support.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged/Closed PRs Today (selected significant items)

| PR | Author | Summary |
|:---|:---|:---|
| [#10570](https://github.com/NousResearch/hermes-agent/pull/10570) | teknium1 | **Fixed five `HERMES_HOME` profile-isolation leaks** — honcho session titles, hardcoded skill paths, install.sh `--dir`, honcho config fallback, and skill manager external dirs write-through. |
| [#10569](https://github.com/NousResearch/hermes-agent/pull/10569) | teknium1 | **Fixed Docker `ps` compatibility** — replaced BSD `ps -ax` with POSIX `ps -A` to prevent false "gateway not running" reports in containers. |
| [#6644](https://github.com/NousResearch/hermes-agent/pull/6644) | shin4 | **Passed `HERMES_HOME` to `execute_code` subprocess** — fixes auth path resolution for tools like `vision_analyze` in Docker. |
| [#6527](https://github.com/NousResearch/hermes-agent/pull/6527) | iacker | **Made `install.sh --dir` honor `HERMES_HOME` state** — seeds correct profile-scoped skill directory during install. |
| [#6338](https://github.com/NousResearch/hermes-agent/pull/6338) | iacker | **Blocked mutations in external skill dirs** — prevents edit/patch/delete flows from touching `skills.external_dirs`. |
| [#6025](https://github.com/NousResearch/hermes-agent/pull/6025) | dontcallmejames | **Fixed honcho config fallback respecting `HERMES_HOME`** — stopped cross-profile memory leakage. |

### Features Advanced

- **Rich terminal output**: The stacked PRs for intra-line diff view, syntax highlighting, and markdown/theming support ([Issue #4518](https://github.com/NousResearch/hermes-agent/issues/4518)) were closed, indicating the layered terminal rendering engine in `agent/rich_output.py` has landed.
- **Web UI Gateway**: The umbrella feature for a local browser-based interface ([Issue #501](https://github.com/NousResearch/hermes-agent/issues/501)) was closed, suggesting substantial progress or completion.
- **Multi-Agent Architecture**: The foundational umbrella issue ([Issue #344](https://github.com/NousResearch/hermes-agent/issues/344)) was closed after 27 comments — a major architectural milestone.

---

## 4. Community Hot Topics

| Item | Status | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| [#344 — Multi-Agent Architecture](https://github.com/NousResearch/hermes-agent/issues/344) | **CLOSED** | 27 | 13 | The most discussed issue in the dataset. Signals strong community demand for orchestration, specialized roles, and resilient workflows beyond single-agent delegation. Closing this umbrella issue suggests either a roadmap shift or incremental delivery via sub-issues. |
| [#9179 — SECURITY.md / private vulnerability reporting](https://github.com/NousResearch/hermes-agent/issues/9179) | **OPEN** | 24 | 0 | Unusually high engagement for a process issue. Reflects growing production adoption and security researcher interest. The project currently lacks GitHub private vulnerability reporting, which is becoming a baseline expectation. |
| [#3863 — Native AWS Bedrock provider support](https://github.com/NousResearch/hermes-agent/issues/3863) | **CLOSED** | 13 | 17 | High-vote enterprise feature request. Closed status may indicate resolution via OpenRouter or a provider plugin; the cost/latency/VPC concerns remain relevant for AWS-heavy users. |
| [#501 — Web UI Gateway](https://github.com/NousResearch/hermes-agent/issues/501) | **CLOSED** | 13 | 1 | Closed despite low votes, likely because core implementation merged. Competitor parity (Claude Artifacts, OpenAI Canvas) is a clear driver. |
| [#4518 — Intra-line Diff-View, Syntax Highlighting, Theming](https://github.com/NousResearch/hermes-agent/issues/4518) | **CLOSED** | 13 | 0 | Developer-experience polish that closed via 5 stacked PRs. Shows investment in terminal UI quality as a differentiator. |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---:|:---|
| **High** | [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) | OPEN | ❌ | No private vulnerability reporting channel — security process gap. |
| **High** | [#10223](https://github.com/NousResearch/hermes-agent/issues/10223) | OPEN | ❌ | GitHub Copilot provider returns empty base URL via credential pool — breaks startup entirely. |
| **Medium** | [#10575](https://github.com/NousResearch/hermes-agent/issues/10575) | OPEN | ✅ [#10576](https://github.com/NousResearch/hermes-agent/pull/10576) | Anthropic OAuth/Claude Max proxy falsely reports "extra usage exhausted" due to system prompt misclassification. Fix PR open by same reporter. |
| **Medium** | [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) | CLOSED | ✅ | `UnicodeEncodeError` on API calls with `zai` provider — fixed. |
| **Medium** | [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | CLOSED | ✅ | "Response truncated due to output length limit" breaking long-form CLI/gateway responses — fixed. |
| **Medium** | [#7588](https://github.com/NousResearch/hermes-agent/issues/7588) | CLOSED | ✅ | Complete tool failure (memory, file read, history lookup) — fixed. |
| **Medium** | [#6360](https://github.com/NousResearch/hermes-agent/issues/6360) | CLOSED | ✅ | Quick install custom model fails with `Invalid port: 6153export` — setup script bug, fixed. |
| **Medium** | [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) | OPEN | ❌ | Discord `/sethome` writes channel ID to `config.yaml` instead of `.env`, breaking env-based config workflows. |
| **Medium** | [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) | OPEN | ❌ | Home-channel auto-prompt only checks env var, never yaml config — compounds [#6447](https://github.com/NousResearch/hermes-agent/issues/6447). |
| **Low** | [#10579](https://github.com/NousResearch/hermes-agent/issues/10579) | CLOSED | ✅ | Slack mention prefix breaks `is_command()` slash-command detection — fixed. |
| **Low** | [#10550](https://github.com/NousResearch/hermes-agent/issues/10550) | CLOSED | ✅ | Discord `/skill` group exceeds 8000-byte limit, causing fatal `CommandSyncFailure` on startup — fixed. |
| **Low** | [#10454](https://github.com/NousResearch/hermes-agent/issues/10454) | CLOSED | ✅ | Feishu (Lark) occasionally drops last message in conversation — fixed. |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Prediction |
|:---|:---:|:---|
| [#3863 — Native AWS Bedrock provider](https://github.com/NousResearch/hermes-agent/issues/3863) | 17 | **Likely near-term**. Enterprise demand is strong; closed status may mask ongoing provider work. |
| [#10299 — Cascading context file discovery](https://github.com/NousResearch/hermes-agent/issues/10299) | 0 | **Moderate priority**. Aligns with multi-repo and monorepo developer workflows; low friction to implement. |
| [#10488 — Secure first-run web onboarding wizard](https://github.com/NousResearch/hermes-agent/issues/10488) | 0 | **Medium-term**. Complements the closed Web UI Gateway issue; broadens non-technical user adoption. |
| [#10585 — Multi-resolution context compression (MEMORY.md / USER.md)](https://github.com/NousResearch/hermes-agent/issues/10585) | 0 | **High impact if implemented**. Cost reduction is a persistent theme; may be explored as token prices and context windows evolve. |
| [#10583 — Route Slack `reaction_added` events to agent](https://github.com/NousResearch/hermes-agent/issues/10583) | 0 | **Small, likely soon**. Tight Slack integration fix; fits current gateway polish trajectory. |
| [#10513 — WhatsApp default to `self-chat` instead of `bot`](https://github.com/NousResearch/hermes-agent/issues/10513) | 0 | **Easy UX win**. One-line default change; strong user-experience justification. |

---

## 7. User Feedback Summary

### Pain Points
- **Setup fragility**: Multiple closed issues around quick install (`#6360`), `HERMES_HOME` isolation leaks (`#5947`), and Docker `ps` behavior (`#9723`) show users struggle with non-default environments.
- **Gateway platform bugs**: Slack (`#10579`, `#10583`, `#10582`), Discord (`#6447`, `#10550`), and Feishu (`#10454`) all had active bugs — messaging platform reliability is a critical path.
- **Provider edge cases**: Copilot empty base URL (`#10223`), Anthropic OAuth false exhaustion (`#10575`), and Unicode errors (`#6843`) indicate provider abstraction layer still has brittle spots.
- **Context/cost bloat**: Issue `#10585` explicitly calls out `MEMORY.md` / `USER.md` loading fully into every call as a "massive cost driver."

### Positive Signals
- Strong engagement on architectural roadmap items (multi-agent, Web UI, rich terminal output).
- Rapid maintainer response time: many issues created in early April were closed within days.
- Active community contributing stacked PRs for complex features (e.g., `#4518`).

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|:---|:---|:---|:---|
| [#9179 — SECURITY.md / private vulnerability reporting](https://github.com/NousResearch/hermes-agent/issues/9179) | ~3 days | **High** | 24 comments, no maintainer resolution. Security process gaps become blockers for enterprise adoption. |
| [#10223 — GitHub Copilot provider empty base URL](https://github.com/NousResearch/hermes-agent/issues/10223) | ~1 day | **High** | 4 upvotes, startup-breaking. No linked fix PR yet. |
| [#6447 — Discord `/sethome` config leak](https://github.com/NousResearch/hermes-agent/issues/6447) | ~7 days | **Medium** | Known bug with clear reproduction; may need gateway config refactor. |
| [#10160 — Nous OAuth cross-process sync](https://github.com/NousResearch/hermes-agent/pull/10160) | ~1 day | **Medium** | Open PR preventing cron job session revocation. Needs review. |
| [#4692 — Ink/React TUI refactor](https://github.com/NousResearch/hermes-agent/pull/4692) | ~13 days | **Medium** | Large new terminal UI PR. High impact but needs careful review. |
| [#4424 — Honor main tracking remote during update checks](https://github.com/NousResearch/hermes-agent/pull/4424) | ~15 days | **Low** | Contributor workflow improvement; stalled without maintainer feedback. |

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-16

## 1. Today's Overview

PicoClaw shows **very high development velocity** with 26 PRs updated in the last 24 hours (20 merged/closed, 6 open) and 7 active issues. The project released a new nightly build (`v0.2.6-nightly.20260415.c0fadc59`), indicating steady progress toward the next patch release. Activity spans core agent behavior, channel integrations, web UI polish, and cross-platform stability fixes. The maintainer team appears highly responsive, with same-day turnaround on several PRs. Overall project health looks **strong and accelerating**.

---

## 2. Releases

- **[v0.2.6-nightly.20260415.c0fadc59](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)** — Nightly Build
  - Automated nightly ahead of `v0.2.6`; no explicit changelog beyond `main` delta.
  - **Caution:** Marked unstable; typical for automated builds.
  - No breaking changes or migration notes published.

---

## 3. Project Progress

### Merged/Closed PRs Today (20 total, selected highlights)

| PR | Author | Summary |
|:---|:---|:---|
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | afjcjsbx | **MCP slash commands** (`/list mcp`, `/show mcp`) for chat channels |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) | is-Xiaoen | **`delegate` tool** for cross-agent task handoff (Phase 2, #2148) |
| [#2532](https://github.com/sipeed/picoclaw/pull/2532) | lxowalle | **`/btw` side-question command** — immediate ask without touching session history |
| [#2503](https://github.com/sipeed/picoclaw/pull/2503) | cytown | **Parallel agent loop** refactor with updated docs |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | ex-takashima | **LINE channel** migrated to official SDK v8 |
| [#2524](https://github.com/sipeed/picoclaw/pull/2524) | SiYue-ZO | **Sogou-backed web search** for mainland China users + web UI config panel |
| [#2528](https://github.com/sipeed/picoclaw/pull/2528) | wj-xiao | **Fix:** preserve reused tool call IDs across turns for strict providers |
| [#2529](https://github.com/sipeed/picoclaw/pull/2529) | lc6464 | **Markdown syntax highlighting** in web chat and skills preview |
| [#2530](https://github.com/sipeed/picoclaw/pull/2530) | wj-xiao | **Fix:** nested `channel_list` patches for channel config saves |
| [#2502](https://github.com/sipeed/picoclaw/pull/2502) | lxowalle | **`/btw` one-off side-question command** (preceding #2532) |
| [#2525](https://github.com/sipeed/picoclaw/pull/2525) | afjcjsbx | **Fix:** recover after image-input-unsupported model failures |
| [#2526](https://github.com/sipeed/picoclaw/pull/2526) | wj-xiao | **Fix:** restore chat composer disabled-state messaging |
| [#2403](https://github.com/sipeed/picoclaw/pull/2403), [#2422](https://github.com/sipeed/picoclaw/pull/2422) | wj-xiao | **Gateway PID liveness hardening** and stale pidfile cleanup |
| [#2417](https://github.com/sipeed/picoclaw/pull/2417) | wj-xiao | **Fix:** disable seahorse context manager on `freebsd/arm` |
| [#2434](https://github.com/sipeed/picoclaw/pull/2434) | wj-xiao | **Fix:** skip isolation env test on unsupported OSes |
| [#2466](https://github.com/sipeed/picoclaw/pull/2466) | wj-xiao | **Fix:** fallback to token auth on unsupported platforms |
| [#2467](https://github.com/sipeed/picoclaw/pull/2467) | wj-xiao | **Fix:** align `react`/`react-dom` versions in launcher |
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) | BeaconCat | **LLM-as-Judge evaluation mode** for `membench` |
| [#2500](https://github.com/sipeed/picoclaw/pull/2500) | cytown | Remove useless backend output for platform-token |

**Key advances:** Multi-agent delegation, MCP server UX, parallel execution, China-localized search, and robust cross-platform stability.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|:---|:---|:---|
| [#28 Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 12 comments, 👍 1 | **Local/self-hosted LLM accessibility.** Users want frictionless connection to LM Studio, especially on Android/edge devices. Signals demand for broader local-provider onboarding. |
| [#2468 Scheduled Task Fails to Execute](https://github.com/sipeed/picoclaw/issues/2468) | 5 comments | **Cron tool permission model clarity.** Error `"scheduling command execution is restricted to internal channels"` suggests users hit policy boundaries without clear guidance. Needs better docs or channel-scope configuration. |
| [#2046 PicoClaw does not call tool with LongCat API](https://github.com/sipeed/picoclaw/issues/2046) | 2 comments | **Provider-specific tool-calling compatibility.** LongCat API integration is broken; points to incomplete provider adapter coverage. |
| [#2302 Web UI requires manual re-authentication frequently](https://github.com/sipeed/picoclaw/issues/2302) | 1 comment | **Credential/session persistence reliability.** Antigravity API `PERMISSION_DENIED` erodes trust in unattended setups. |
| [#2446 Messages echoed back in multi-channel setup](https://github.com/sipeed/picoclaw/issues/2446) | 1 comment, 👍 1 | **Cross-channel state isolation.** Pending tasks in one channel leak into another's response path — a concurrency/routing bug. |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix PR? |
|:---|:---|:---|:---|
| **High** | [#2468](https://github.com/sipeed/picoclaw/issues/2468) | Cron tool execution blocked by internal-channel restriction | **None linked** |
| **High** | [#2446](https://github.com/sipeed/picoclaw/issues/2446) | Multi-channel message echo / cross-channel task contamination | **None linked** |
| **Medium** | [#2302](https://github.com/sipeed/picoclaw/issues/2302) | Frequent credential re-auth in Web UI (antigravity API) | **None linked** |
| **Medium** | [#2046](https://github.com/sipeed/picoclaw/issues/2046) | Tool calls fail with LongCat API provider | **None linked** |
| **Medium** | [#2528](https://github.com/sipeed/picoclaw/pull/2528) *(merged)* | Reused tool call IDs dropped globally → provider sequencing failures | **Fixed** |
| **Medium** | [#2525](https://github.com/sipeed/picoclaw/pull/2525) *(merged)* | Session stuck after sending images to non-vision models | **Fixed** |
| **Low** | [#2530](https://github.com/sipeed/picoclaw/pull/2530) *(open)* | Channel config saves missing nested `channel_list` patches | **In review** |
| **Low** | [#2526](https://github.com/sipeed/picoclaw/pull/2526) *(merged)* | Chat composer disabled-state messaging broken | **Fixed** |

**Note:** Four open bugs lack linked fix PRs and represent the day's largest stability gaps.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|:---|:---|:---|
| **LM Studio easy connect / local provider UX** | [#28](https://github.com/sipeed/picoclaw/issues/28) | Medium — long-standing request, high comment volume, but requires dedicated provider work |
| **`--no-browser` flag for `picoclaw auth login`** | [#2533](https://github.com/sipeed/picoclaw/issues/2533) | **High** — small CLI flag, clear use case (headless/automated setups) |
| **Configurable `fresh_tail_size` in Seahorse** | [#2527](https://github.com/sipeed/picoclaw/issues/2527) | **High** — one-constant change, already scoped to config system |
| **MCP slash commands in chat** | [#2535](https://github.com/sipeed/picoclaw/pull/2535) | **Very High** — PR already open, aligns with MCP momentum |
| **Cross-agent `delegate` tool** | [#2531](https://github.com/sipeed/picoclaw/pull/2531) | **Very High** — core Phase 2 roadmap item, PR open |
| **Parallel agent loop** | [#2503](https://github.com/sipeed/picoclaw/pull/2503) | **Very High** — architectural refactor with docs, builds on merged #2481 |

---

## 7. User Feedback Summary

### Pain Points
- **Provider fragility:** LongCat API tool-calling broken; antigravity API sessions expire unpredictably.
- **Authentication friction:** Browser-pop auth flow unsuitable for containers/headless deploys; frequent Web UI re-auth.
- **Multi-channel reliability:** Task state bleeds across channels, breaking isolation expectations.
- **Local/self-hosted LLM gap:** LM Studio integration too difficult for non-technical users.

### Positive Signals
- **Responsiveness:** Same-day merges on multiple PRs.
- **China UX attention:** Sogou search integration shows geographic user-base awareness.
- **Advanced features landing:** MCP commands, agent delegation, and parallel loops signal mature architecture.

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|:---|:---|:---|:---|
| [#28 LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | **~2 months** | High | Highest-comment open issue; no linked PR. Represents accessibility barrier for local-LLM users. |
| [#2046 LongCat API tool-calling bug](https://github.com/sipeed/picoclaw/issues/2046) | **~3 weeks** | Medium | Provider compatibility gap; only 2 comments, may be under-prioritized. |
| [#2302 Antigravity API re-auth loop](https://github.com/sipeed/picoclaw/issues/2302) | **~2 weeks** | Medium | Impacts unattended deployments; no fix PR visible. |
| [#2413 LINE SDK v8 refactor](https://github.com/sipeed/picoclaw/pull/2413) | **~1 week** | Low | Open but updated today; likely nearing merge. |

**Maintainer attention recommended:** #28 (local LLM onboarding) and #2468/#2446 (stability bugs with no fixes).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-16

## 1. Today's Overview

NanoClaw saw **high development velocity** in the last 24 hours with **17 PRs updated** (13 open, 4 merged/closed) and **5 fresh issues** opened, all currently active. The project is in a **feature-heavy expansion phase**, with significant work on LLM provider diversification (OpenAI, OpenCode, multi-provider via Vercel AI SDK), container skill additions, and infrastructure hardening (scheduler fixes, channel isolation, pnpm migration, Node 24 upgrade). No new releases were cut. Notably, all 5 new issues come from a single reporter (`ythx-101`), suggesting concentrated onboarding friction around `/setup`, mount semantics, and container path handling.

---

## 2. Releases

**No new releases.**

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Summary |
|---|---|---|
| [#1281](https://github.com/qwibitai/nanoclaw/pull/1281) | heyjawrsh | **Headless Linux browser fallback + VPS docs**: `openBrowser()` now prints URL to stdout instead of silently failing on `$DISPLAY`-less Linux servers. |
| [#1777](https://github.com/qwibitai/nanoclaw/pull/1777) | johnnyfish | **Forward `ONECLI_API_KEY` to SDK**: Fixes authenticated container config for cloud/dev OneCLI gateways. |
| [#1782](https://github.com/qwibitai/nanoclaw/pull/1782) | openclaw-shi | **Credential proxy ETIMEDOUT fix**: TCP keepalive, cleaner connection teardown, and upstream error handling for streaming. |
| [#1760](https://github.com/qwibitai/nanoclaw/pull/1760) | Viral1010 | **Twilio fallback calls**: Voice reminders now retry a fallback number if the primary call fails. |

**Key advances**: Deployment reliability for headless/VPS environments improved; voice call robustness increased; authentication and streaming proxy stability patched.

---

## 4. Community Hot Topics

No items have comments or reactions yet, so "hot" is determined by **strategic significance and author activity**:

| Item | Link | Why It Matters |
|---|---|---|
| **PR #1786** — 7-layer scope expansion roadmap | [qwibitai/nanoclaw#1786](https://github.com/qwibitai/nanoclaw/pull/1786) | Massive feature dump (14 items) across webhook sources, LLM validation, confidence calibration, and cross-reference verification. Signals aggressive roadmap execution. |
| **PR #1784** — Multi-provider LLM layer via Vercel AI SDK | [qwibitai/nanoclaw#1784](https://github.com/qwibitai/nanoclaw/pull/1784) | Core architecture change enabling OpenAI, Google, Ollama, Groq, Together. Dual-runtime design preserves Anthropic path. |
| **PR #1771** — pnpm migration | [qwibitai/nanoclaw#1771](https://github.com/qwibitai/nanoclaw/pull/1771) | Infrastructure change touching CI, Dockerfile, setup scripts. High blast radius if merged. |

**Underlying needs**: The community and core contributors are pushing for **vendor independence** (multiple LLM providers), **operational maturity** (better package management, container upgrades), and **broader automation layers** (webhooks, pre-meeting briefings, validation pipelines).

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix PR? |
|---|---|---|---|
| **High** | [#1788](https://github.com/qwibitai/nanoclaw/pull/1788) | Scheduler silent hot-loop from `runTask` throws and non-text scripts. Three-layer defense: write-time coercion, startup repair, runtime guard. | **Yes — PR open** |
| **High** | [#1785](https://github.com/qwibitai/nanoclaw/pull/1785) | Single broken channel (e.g., expired Gmail OAuth) crashes entire service startup. | **Yes — PR open** |
| **Medium** | [#1787](https://github.com/qwibitai/nanoclaw/issues/1787) | `/setup` on macOS with Apple Container produces 6 git merge conflicts on first run. | No |
| **Medium** | [#1789](https://github.com/qwibitai/nanoclaw/issues/1789) | Non-ASCII display names silently normalized to `dm-with-unnamed`. | No |
| **Medium** | [#1790](https://github.com/qwibitai/nanoclaw/issues/1790) | `/setup` mount allowlist semantics unclear (directory vs. file). | No |
| **Medium** | [#1791](https://github.com/qwibitai/nanoclaw/issues/1791) | Mount allowlist can't differentiate peer files in same directory across groups. Security gap. | No |
| **Low-Medium** | [#1792](https://github.com/qwibitai/nanoclaw/issues/1792) | `additionalMounts.containerPath` must be relative; absolute paths rejected silently/undocumented. | No |

**Stability assessment**: Two critical runtime fixes are in open PRs. Onboarding (`/setup`) and mount security have emerging but unpatched issues.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likely Next-Version Inclusion? |
|---|---|---|
| **Multi-provider LLM support** | PRs [#1784](https://github.com/qwibitai/nanoclaw/pull/1784), [#1774](https://github.com/qwibitai/nanoclaw/pull/1774), [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) | **Very high** — 3 parallel PRs indicate this is a top priority. |
| **OpenCode agent provider** | PR [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) | **High** — aligned with v2 provider model. |
| **Composio MCP for managed OAuth** | PR [#1781](https://github.com/qwibitai/nanoclaw/pull/1781) | **High** — reduces Gmail/Calendar setup friction. |
| **5 new marketing/container skills** | PR [#1780](https://github.com/qwibitai/nanoclaw/pull/1780) | **Moderate** — skill PRs typically merge faster than core infra. |
| **News briefing skill** | PR [#886](https://github.com/qwibitai/nanoclaw/pull/886) | **Moderate** — open since March 9, needs review. |
| **pnpm + Node 24 upgrade** | PRs [#1771](https://github.com/qwibitai/nanoclaw/pull/1771), [#1778](https://github.com/qwibitai/nanoclaw/pull/1778) | **High** — infra debt, blocking some dependencies. |

---

## 7. User Feedback Summary

**Real pain points from `ythx-101`'s issue cluster:**

| Pain Point | Issue | Implication |
|---|---|---|
| **Opaque mount semantics** | [#1790](https://github.com/qwibitai/nanoclaw/issues/1790), [#1792](https://github.com/qwibitai/nanoclaw/issues/1792) | Users need trial-and-error to configure container mounts. Documentation and validation messages are inadequate. |
| **Security granularity gap** | [#1791](https://github.com/qwibitai/nanoclaw/issues/1791) | Cannot share one file in a directory while hiding another. Multi-tenant/token scenarios are under-supported. |
| **Localization/Unicode handling** | [#1789](https://github.com/qwibitai/nanoclaw/issues/1789) | Non-ASCII names silently degraded. Suggests ASCII-only assumptions in folder naming logic. |
| **macOS onboarding broken** | [#1787](https://github.com/qwibitai/nanoclaw/issues/1787) | Apple Container branch merge-conflicts on first setup. Major friction for macOS developers. |

**Satisfaction/dissatisfaction**: The reporter is actively testing edge cases and documenting failures clearly — a sign of **engaged but frustrated** early adoption. The lack of maintainer responses (0 comments) on all 5 issues is a **community health risk**.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| **PR #886** — Daily news briefing skill | **~38 days** (Mar 9) | Stalled feature contribution with clear value | Maintainer review/merge decision |
| **Issues #1787–#1792** (all from ythx-101) | **1 day** | Rapid cluster of onboarding bugs with **zero maintainer engagement** | Triage and at least acknowledge; #1787 and #1789 are likely quick fixes |
| **PR #1311** — Create new session | **~26 days** (Mar 21) | Feature skill PR idle | Review or request changes |

**Priority recommendation**: Address the 5-issue cluster from `ythx-101` first — it represents a concentrated onboarding failure mode that could deter new contributors.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-16

---

## 1. Today's Overview

NullClaw saw **high community activity** in the last 24 hours with **9 active issues** and **8 pull requests** updated, though **no new releases** were cut. The project is experiencing growing pains around **build tooling** (Zig version migrations, Debian installation friction), **runtime stability** (shell execution on Linux, HTTPS constraints breaking OTel), and **polish gaps** (version reporting, CLI health check inconsistencies). Three PRs were merged or closed, indicating maintainers are actively landing reviewed work, but the open PR backlog remains substantial with several ready-for-review contributions.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Author | Summary |
|---|---|---|
| [#369](https://github.com/nullclaw/nullclaw/pull/369) | jmylchreest | **Signal "Note to Self" support** — adds `parseSyncNoteToSelf()` to handle sync envelopes instead of blanket-dropping them, with 4 new tests. |
| [#377](https://github.com/nullclaw/nullclaw/pull/377) | jmylchreest | **Sandbox-validated `PATH` environment variables** — introduces `tools.path_env_vars` config, passing colon-separated paths to shell children after sandbox validation. |
| [#378](https://github.com/nullclaw/nullclaw/pull/378) | jmylchreest | **Security fix for `git -C` + Signal Note to Self** — tightens allowlist handling so uppercase `-C` is not misclassified as dangerous lowercase `-c`; also bundles the Signal sync fix. |

**What advanced:** Signal integration matured with self-messaging support, and shell sandboxing gained finer-grained environment variable control. A security hardening patch for git CLI parsing also landed.

---

## 4. Community Hot Topics

### Most Active Threads

| Rank | Item | Comments | 🔥 Why It's Hot |
|---|---|---|---|
| 1 | [#812](https://github.com/nullclaw/nullclaw/issues/812) — `[bug] http_request` | 4 | A **migrating user** (Picoclaw → ZeroClaw → NullClaw) praises organization but reports **internet search capability completely non-functional** since Friday despite trying all examples. This suggests either a regression, documentation gap, or environment-specific breakage. |
| 2 | [#820](https://github.com/nullclaw/nullclaw/issues/820) — `[documentation] How to install Zig on Debian?` | 3 | Highlights **onboarding friction** for source builds; users questioning whether Docker is mandatory. |
| 3 | [#791](https://github.com/nullclaw/nullclaw/issues/791) — `[bug] Shell can not run on the physical Linux` | 3 | Core runtime failure on native Linux — shell tool fails even with full permissions, impacting a key use case. |

### Underlying Needs
- **Reliable out-of-box tool execution** (http_request, shell)
- **Clearer Linux-native installation and dependency guidance**
- **Faster triage for regressions** affecting basic capabilities

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **High** | [#791](https://github.com/nullclaw/nullclaw/issues/791) | Shell tool fails on physical Linux with native runtime | ❌ No |
| **High** | [#812](https://github.com/nullclaw/nullclaw/issues/812) | `http_request` / internet search capability broken | ❌ No |
| **Medium** | [#800](https://github.com/nullclaw/nullclaw/issues/800) | OTel broken by new HTTPS endpoint enforcement in v2026.4.9 | ❌ No |
| **Medium** | [#821](https://github.com/nullclaw/nullclaw/issues/821) | `nullclaw version` returns `"dev"` for source installs | ❌ No |
| **Medium** | [#827](https://github.com/nullclaw/nullclaw/issues/827) | `nullclaw channel status` contradicts `nullclaw doctor` output | ❌ No |
| **Low** | [#826](https://github.com/nullclaw/nullclaw/issues/826) | Gateway tunnel fails with `NotImplemented` under Tailscale | ❌ No |

**Regressions noted:** Issue #800 explicitly calls out a **v2026.4.9 regression** where HTTPS enforcement broke existing Podman-based OTel configurations. No fix PRs are linked for any open bug.

---

## 6. Feature Requests & Roadmap Signals

| Item | Request | Likelihood in Next Version |
|---|---|---|
| [#825](https://github.com/nullclaw/nullclaw/issues/825) | **Nested Agent skills** — support directory hierarchies instead of flat skill folders | Moderate — author notes client-side implementation is the blocker; low complexity, high organization value |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | **WeChat QR code login** | Low — no maintainer response yet; likely requires significant auth subsystem work |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | **Cron subagent engine** with DB-backed scheduler, JSON CLI output, security hardening | High — large, well-scoped PR already open; would significantly expand automation capabilities |
| [#823](https://github.com/nullclaw/nullclaw/pull/823) | **Zig 0.16 migration** | High — critical for build sustainability; actively updated |

---

## 7. User Feedback Summary

### Pain Points
- **"It doesn't work" fatigue:** Multiple users report basic features (shell, HTTP search) failing with no clear error path (#791, #812).
- **Source build rough edges:** Zig installation unclear on Debian; version string unhelpful for debugging (#820, #821).
- **Networking assumptions too rigid:** HTTPS enforcement and tunnel backend gaps break containerized and VPN-based deployments (#800, #826).

### Positive Signals
- **Project structure praised:** #812 author explicitly likes NullClaw's organization compared to Picoclaw/ZeroClaw.
- **Active maintainer merges:** Three PRs closed in one day shows review pipeline is functional.

### Use Cases Emerging
- Linux-native personal agent deployment
- Containerized/Podman observability stacks
- VPN/Tailscale remote gateway access
- Signal-based personal messaging workflows

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|---|---|---|---|
| [#774](https://github.com/nullclaw/nullclaw/pull/774) — docs: update outdated stats | ~11 days | Stale docs erode trust | Maintainer merge — low risk, high value |
| [#789](https://github.com/nullclaw/nullclaw/pull/789) — Fix gateway bind and rate limit safeguards | ~8 days | Security/reliability improvement | Review and merge — includes regression tests |
| [#791](https://github.com/nullclaw/nullclaw/issues/791) — Shell can not run on physical Linux | ~8 days | Core feature broken | Triage + reproduction steps from maintainers |
| [#800](https://github.com/nullclaw/nullclaw/issues/800) — OTel broke due to https constraint | ~5 days | Confirmed regression | Revert or configurable override decision |

**Overall health:** The project shows **strong contribution velocity** but risks **user churn** if high-severity bugs (#791, #812) and onboarding friction (#820, #821) are not addressed before the next release. The open Zig 0.16 migration PR (#823) and cron feature PR (#783) are likely to dominate the next release cycle when maintainers cut a new version.

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-16

## 1. Today's Overview

IronClaw saw **very high development velocity** over the past 24 hours with **50 PRs updated** (43 still open, 7 merged/closed) and **17 issues active** (9 open, 8 closed). No new release was cut. The team is clearly in a heavy stabilization and feature-integration phase, with substantial focus on **Engine V2 hardening**, **web UI bug fixes**, **MCP/tooling improvements**, and **CI infrastructure**. A notable security concern emerged regarding secret scanning bypass in Engine V2, alongside multiple P0-quality web dashboard regressions on staging.

---

## 2. Releases

**No new releases** were published today.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary |
|:---|:---|:---|
| [#2509](https://github.com/nearai/ironclaw/pull/2509) | henrypark133 | CI: support historical Dockerfile targets in rebuild workflow |
| [#2507](https://github.com/nearai/ironclaw/pull/2507) | henrypark133 | CI: add historical release image rebuild workflow |
| [#2421](https://github.com/nearai/ironclaw/pull/2421) | standardtoaster | **DB MIGRATION** — scope grants for cross-user read/write access |

**Key advances:**
- **Cross-user workspace access restored** via [#2421](https://github.com/nearai/ironclaw/pull/2421), a major auth/data-sharing gap closed with a database migration.
- **CI reliability improved** with two new workflows for rebuilding historical release Docker images, addressing operational needs for v0.24.0 and earlier.
- **Chat API search landed** (issue [#548](https://github.com/nearai/ironclaw/issues/548) closed), giving IronClaw default web search access via the Chat API.

---

## 4. Community Hot Topics

### Most Active Threads

| Item | Comments | Topic | Link |
|:---|:---|:---|:---|
| [#548](https://github.com/nearai/ironclaw/issues/548) | 4 | Add Search to Chat API | [Issue](https://github.com/nearai/ironclaw/issues/548) |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | 3 | IronClaw stopped responding after trying to setup Notion | [Issue](https://github.com/nearai/ironclaw/issues/2087) |
| [#2474](https://github.com/nearai/ironclaw/issues/2474) | 1 | stdio MCP servers trigger OAuth discovery flow on activation | [Issue](https://github.com/nearai/ironclaw/issues/2474) |
| [#2345](https://github.com/nearai/ironclaw/issues/2345) | 1 | Tool install asks for permission repeatedly instead of remembering approval | [Issue](https://github.com/nearai/ironclaw/issues/2345) |
| [#2410](https://github.com/nearai/ironclaw/issues/2410) | 1 | Dashboard keeps refreshing and wiping contents in a loop | [Issue](https://github.com/nearai/ironclaw/issues/2410) |
| [#2409](https://github.com/nearai/ironclaw/issues/2409) | 1 | User messages disappear after typing in chat | [Issue](https://github.com/nearai/ironclaw/issues/2409) |
| [#2485](https://github.com/nearai/ironclaw/issues/2485) | 1 | Playwright test for always-approve persistence across restart | [Issue](https://github.com/nearai/ironclaw/issues/2485) |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | 1 | Staging agent instance dies after 1 hour of inactivity | [Issue](https://github.com/nearai/ironclaw/issues/2284) |

**Underlying needs:** The community is pressing for **reliable MCP/tool onboarding** (Notion setup failures, OAuth misfires on stdio MCP), **persistent permission UX** (not having to re-approve tools), and **stable web UI** (dashboard loops, disappearing messages). The high comment count on search API integration suggests strong demand for first-class information retrieval capabilities.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| **P0 / Security** | [#2491](https://github.com/nearai/ironclaw/issues/2491) — Engine V2 bypasses inbound secret scanning; tokens sent directly to LLM | **OPEN** | No linked fix yet |
| **P0 / Quality** | [#2410](https://github.com/nearai/ironclaw/issues/2410) — Dashboard keeps refreshing and wiping contents in a loop | **OPEN** | No linked fix yet |
| **P0 / Quality** | [#2409](https://github.com/nearai/ironclaw/issues/2409) — User messages disappear after typing in chat | **OPEN** | No linked fix yet |
| **P2** | [#2284](https://github.com/nearai/ironclaw/issues/2284) — Staging agent instance dies after 1 hour of inactivity | **OPEN** | No linked fix yet |
| **Bug** | [#2087](https://github.com/nearai/ironclaw/issues/2087) — IronClaw stopped responding after trying to setup Notion | **OPEN** | No linked fix yet |
| **Bug** | [#2482](https://github.com/nearai/ironclaw/issues/2482) — Telegram group messages omit chat_type metadata and skip group-chat prompt behavior | **OPEN** | No linked fix yet |

**Closed today:**
- [#2474](https://github.com/nearai/ironclaw/issues/2474) — stdio MCP servers no longer incorrectly trigger OAuth discovery.
- [#2345](https://github.com/nearai/ironclaw/issues/2345) — tool install permission repetition fixed (QA-confirmed).
- [#2279](https://github.com/nearai/ironclaw/issues/2279) — bot falsely claiming success despite shell/open tool errors.
- [#2405](https://github.com/nearai/ironclaw/issues/2405) — gateway routing error `broadcast() requires a thread_id`.
- [#2276](https://github.com/nearai/ironclaw/issues/2276) — orchestrator crashes with HTTP 413 Payload Too Large.
- [#2488](https://github.com/nearai/ironclaw/issues/2488) — TOCTOU race and cross-user gaps in assistant conversation fallback.

**Critical concern:** [#2491](https://github.com/nearai/ironclaw/issues/2491) is a **live security regression in Engine V2** where secret scanning is completely bypassed. This should be treated as a blocker for any V2 promotion to production.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal | Likely Next-Version Candidate? |
|:---|:---|:---|
| [#2484](https://github.com/nearai/ironclaw/issues/2484) — Param-aware always-allow grants | Security/UX enhancement for tool permissions | **High** — directly follows recent always-approve persistence work |
| [#2485](https://github.com/nearai/ironclaw/issues/2485) — E2E Playwright test for always-approve persistence | Test coverage gap | **High** — quality bar for V2 |
| [#2489](https://github.com/nearai/ironclaw/issues/2489) — HTTP 413 / context-length detection for all direct-HTTP providers | Reliability/LLM provider parity | **Medium-High** — follows #2276 fix pattern |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) — Per-channel MCP and built-in tool filtering | Major multi-channel enterprise feature | **Medium** — large PR, been open since March 18 |
| [#2336](https://github.com/nearai/ironclaw/pull/2336) — Configurable insights interval, session summary hook, reasoning-augmented recall | Memory system evolution | **Medium** — substantial feature, core team authored |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) — Abound demo (Responses API, credential injection, skills, guardrails) | Integration demo + production API hardening | **Medium** — demo-driven but touches production APIs |

---

## 7. User Feedback Summary

### Pain Points
- **Web UI is fragile on staging:** dashboard refresh loops and disappearing chat messages make the product feel unstable ([#2410](https://github.com/nearai/ironclaw/issues/2410), [#2409](https://github.com/nearai/ironclaw/issues/2409)).
- **MCP/tool setup is error-prone:** Notion configuration can hang the agent entirely ([#2087](https://github.com/nearai/ironclaw/issues/2087)), and stdio MCP servers had broken OAuth behavior until today ([#2474](https://github.com/nearai/ironclaw/issues/2474)).
- **Permission fatigue:** users are frustrated by repeated approval prompts for the same tools ([#2345](https://github.com/nearai/ironclaw/issues/2345) — now fixed, but param-aware grants still missing).
- **Security anxiety:** the secret scanning bypass ([#2491](https://github.com/nearai/ironclaw/issues/2491)) is a serious trust erosion risk if exploited.
- **Infrastructure reliability:** staging agents dying after 1 hour of inactivity undermines long-running use cases ([#2284](https://github.com/nearai/ironclaw/issues/2284)).

### Positive Signals
- Search integration in Chat API closed a long-standing capability gap ([#548](https://github.com/nearai/ironclaw/issues/548)).
- Cross-user workspace sharing is now possible again after the auth migration ([#2421](https://github.com/nearai/ironclaw/pull/2421)).

---

## 8. Backlog Watch

### Long-Running / High-Impact Items Needing Attention

| Item | Age | Risk | Why It Needs Eyes |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) — Aliyun Coding Plan support | ~4 weeks | XL/low | Massive scope PR touching 15+ scopes; no recent merge momentum despite being contributor-submitted |
| [#2086](https://github.com/nearai/ironclaw/pull/2086) — Resolve shared skills issue | ~2 weeks | XL/low | Fixes a real multi-tenant UX bug; needs review to avoid stalling |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) — Abound demo | ~2.5 weeks | XL/high | High-risk but high-value; touches Responses API and credential injection — needs security review |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) — Per-channel MCP and built-in tool filtering | ~4 weeks | XL/medium | Key enterprise feature; has been open since March 18 with no closure |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) — Slim mode runtime, Dockerfiles, /health route | ~3 days | L/medium | Important for multi-tenant density; may conflict with other infra changes |

**Maintainer attention recommended:** The combination of **#2491** (security), **#2410/#2409** (P0 web regressions), and **#2284** (staging instance lifecycle) represents the highest immediate risk to user trust and product stability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-16

## 1. Today's Overview

LobsterAI saw **high engineering velocity** on 2026-04-15 with **27 PRs updated** (22 merged/closed, 5 open) and **3 new issues** filed. No new release was cut. Activity was heavily skewed toward **internal bug-fixing, provider migrations, and IM/enterprise connector polish** rather than user-facing features. The merge rate (~81%) indicates a healthy, fast-moving codebase, though the small open issue volume suggests limited external community engagement relative to core-team throughput.

---

## 2. Releases

**No new releases** today. The latest release remains unspecified in the provided data.

---

## 3. Project Progress

### Merged / Closed PRs (22 items — selected highlights)

| PR | What Changed | Link |
|---|---|---|
| **#1701** | **Cowork reliability:** Defaults `skipMissedJobs` to enabled and adds backward compatibility for older installs. | [PR #1701](https://github.com/netease-youdao/LobsterAI/pull/1701) |
| **#1699** | **Settings stability:** Fixes a renderer crash when importing configs containing providers not present locally. | [PR #1699](https://github.com/netease-youdao/LobsterAI/pull/1699) |
| **#1697** | **OpenClaw packaging & DingTalk:** Removes duplicate plugin payloads and migrates DingTalk to the official `dingtalk-connector`. | [PR #1697](https://github.com/netease-youdao/LobsterAI/pull/1697) |
| **#1696** | **Weixin IM robustness:** Decouples WeChat connection status from `accountId`, aligning it with actual startup conditions; adds QR-login diagnostics. | [PR #1696](https://github.com/netease-youdao/LobsterAI/pull/1696) |
| **#1695 + #1694** | **Copilot provider migration:** Completes the rename from `github-copilot` to `lobsterai-copilot` in DB entries **and** provider definitions. | [PR #1695](https://github.com/netease-youdao/LobsterAI/pull/1695) · [PR #1694](https://github.com/netease-youdao/LobsterAI/pull/1694) |
| **#1692** | **Qianfan UX:** Adds an API-key helper link in the Qianfan provider settings. | [PR #1692](https://github.com/netease-youdao/LobsterAI/pull/1692) |
| **#1689** | **Tech debt:** Cleans up legacy `yd_cowork` references and dead SDK code. | [PR #1689](https://github.com/netease-youdao/LobsterAI/pull/1689) |
| **#1686** | **POPO display fix:** Strips system headers from POPO channel messages in the local chat history. | [PR #1686](https://github.com/netease-youdao/LobsterAI/pull/1686) |
| **#1351** | **MCP hardening:** Validates required env vars before MCP install and fixes edit-mode validation for registry-installed servers. | [PR #1351](https://github.com/netease-youdao/LobsterAI/pull/1351) |

### Open PRs in Progress (5 items)

| PR | Status | Link |
|---|---|---|
| **#1700** | Adds **POPO doc/msg skills**, upgrades `moltbot-popo` to 2.0.10, and bumps OpenClaw runtime to `v2026.4.14`. | [PR #1700](https://github.com/netease-youdao/LobsterAI/pull/1700) |
| **#1693** | **Cowork onboarding:** Improves `ModelSelector` empty-state UX with a one-click setup button and preserves draft input. | [PR #1693](https://github.com/netease-youdao/LobsterAI/pull/1693) |
| **#1691** | **Agent portability:** Introduces **agent template import/export** (JSON) with file/URL import and `.agent.json` export. | [PR #1691](https://github.com/netease-youdao/LobsterAI/pull/1691) |
| **#1690** | **Safety UX:** Adds confirmation modals before deleting IM instance configs (DingTalk, Feishu, QQ). | [PR #1690](https://github.com/netease-youdao/LobsterAI/pull/1690) |
| **#429** | *[Stale since 2026-03-15]* Fixes Chinese-character corruption in `workingDirectory` via encoding-detection heuristic. | [PR #429](https://github.com/netease-youdao/LobsterAI/pull/429) |

---

## 4. Community Hot Topics

No issue or PR today attracted significant comments or 👍 reactions. The most **operationally critical** thread is:

- **Issue #1698** — **Gateway port conflict between Youdao LobsterAI and "Zhiqi King Crab" (智企帝王蟹)**  
  [Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698)  
  **Underlying need:** Enterprise users running multiple NetEase AI products on the same macOS machine hit a **hard gateway port collision and process race**. The bug is 100% reproducible when LobsterAI is already running. This signals a **multi-product coexistence** problem that could affect fleet deployments.

- **PR #1693** — Model-selector onboarding fix  
  [PR #1693](https://github.com/netease-youdao/LobsterAI/pull/1693)  
  **Underlying need:** New users without a configured model lose drafted messages and face a dead-end UI. The PR directly addresses **first-session retention**.

- **PR #1691** — Agent import/export  
  [PR #1691](https://github.com/netease-youdao/LobsterAI/pull/1691)  
  **Underlying need:** Power users want to share or back up agent configs across devices—an emergent **collaboration / B2B requirement**.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR? |
|---|---|---|---|
| **High** | **Issue #1698** | Gateway auth failure / port conflict when LobsterAI and Zhiqi King Crab co-exist on macOS. 100% reproducible. | **None yet** |
| **Medium** | **Issue #1687** | Login loop on Deepin V25 (AMD64): browser OAuth succeeds, but LobsterAI shows "network error." Suggests a deep-link or localhost-callback issue on Linux. | **None yet** |
| **Medium** | **PR #1699** *(fixed)* | Crash on importing settings with missing providers. | **Merged** |
| **Low-Medium** | **PR #1696** *(fixed)* | Weixin connection state falsely dependent on `accountId`; could misreport online status. | **Merged** |
| **Low** | **PR #1686** *(fixed)* | POPO system headers polluting user chat display. | **Merged** |

---

## 6. Feature Requests & Roadmap Signals

| Source | Request | Likelihood in Next Release |
|---|---|---|
| **Issue #1688** | **Dynamic temperature control** via in-chat keywords (e.g., `/temp 0.2`). | Moderate — small surface area, high user value. |
| **PR #1691** *(open)* | **Agent template import/export** with JSON serialization. | **High** — PR is open and complete; addresses clear power-user gap. |
| **PR #1693** *(open)* | **One-click model setup** when no model is configured. | **High** — UX polish with low risk. |
| **PR #1700** *(open)* | **POPO skills expansion** (documents + group message history). | **High** — enterprise feature tied to plugin ecosystem growth. |
| **PR #1690** *(open)* | **Deletion confirmation** for IM instances. | **High** — safety UX, low risk. |

**Roadmap signal:** The concentration on **POPO, DingTalk, Feishu, Weixin, and QQ** connectors indicates LobsterAI is doubling down on **Chinese enterprise IM integration** rather than generic Western SaaS tools.

---

## 7. User Feedback Summary

### Pain Points
1. **Enterprise product conflicts** — Running LobsterAI alongside other NetEase AI tools breaks networking (Issue #1698).
2. **Linux compatibility gaps** — Deepin users cannot complete OAuth login, blocking usage entirely (Issue #1687).
3. **Configuration fragility** — Missing providers crash imports; missing models cause message loss; IM configs are too easy to delete.
4. **LLM tunability** — Users want direct control over `temperature` without digging into settings (Issue #1688).

### Use Cases
- **Cross-device agent sharing** (PR #1691) — power users building custom agents for teams.
- **Enterprise chatops** — heavy reliance on POPO/DingTalk/Feishu skills for document retrieval and group history.

### Sentiment
Mixed-to-positive for feature depth; **negative for stability on Linux and in multi-product NetEase environments**. The rapid PR velocity suggests the team is responsive, but two unaddressed issues (#1698, #1687) could erode trust in enterprise and Linux segments.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention | Link |
|---|---|---|---|
| **PR #429** | **~1 month** *(updated 2026-04-15, created 2026-03-15)* | Fixes Chinese-character corruption in `workingDirectory`—critical for CJK users on Windows. Stale label suggests it may be stuck in review limbo despite a recent bump. | [PR #429](https://github.com/netease-youdao/LobsterAI/pull/429) |
| **Issue #1698** | **1 day** | High-severity, reproducible port-conflict bug with another NetEase product. No assignee or PR. Risks escalation in enterprise support. | [Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698) |
| **Issue #1687** | **1 day** | Complete login failure on Deepin V25. No maintainer response yet; Linux user base may be small but vocal. | [Issue #1687](https://github.com/netease-youdao/LobsterAI/issues/1687) |

---

*Digest compiled from 27 PRs and 3 Issues updated on 2026-04-15.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-16

## 1. Today's Overview

Moltis saw **high development velocity** over the past 24 hours with **15 merged/closed PRs** against 5 open ones, and **6 of 7 updated issues were resolved**. No new release was cut. Activity is heavily concentrated on **provider compatibility fixes** (Google/Gemini via OpenRouter, Qwen, strict-mode schema patching), **MCP health-check and tooling reliability**, and **Matrix/WhatsApp channel stability**. The maintainer team (primarily `penso` and `Cstewart-HC`) is closing bugs and refactoring code at a rapid pace, signaling a healthy, well-resourced project.

---

## 2. Releases

**No new releases** — the latest release pipeline remains quiet.

---

## 3. Project Progress

### Merged/Closed PRs (15 total)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #734 | penso | **fix(chat):** Broadcast `user_message` event so GraphQL API-sent messages appear in web UI without reload | [PR #734](https://github.com/moltis-org/moltis/pull/734) |
| #733 | penso | **fix(mcp):** Treat any HTTP response as "alive" in MCP health checks, fixing false "dead" status for authenticated Streamable HTTP servers | [PR #733](https://github.com/moltis-org/moltis/pull/733) |
| #728 | penso | **feat(memory):** Add LLM-guided `memory_forget` flow on top of deterministic memory deletion | [PR #728](https://github.com/moltis-org/moltis/pull/728) |
| #731 | penso | **refactor:** Move implementation code out of `mod.rs`/`lib.rs` across 15 crates (27→28 files) | [PR #731](https://github.com/moltis-org/moltis/pull/731) |
| #725 | penso | **fix(providers):** Normalize Qwen system messages for OpenAI-compatible endpoints | [PR #725](https://github.com/moltis-org/moltis/pull/725) |
| #724 | penso | **fix(providers):** Add `null` to enum arrays for nullable optional properties, fixing MCP tool parameter parsing | [PR #724](https://github.com/moltis-org/moltis/pull/724) |
| #722 | penso | **fix(providers):** Repair OpenAI-compat CI regressions; split `openai_compat/mod.rs` into submodules | [PR #722](https://github.com/moltis-org/moltis/pull/722) |
| #721 | penso | **feat(web):** Add branded 404/500 error pages and proper SPA fallback routing | [PR #721](https://github.com/moltis-org/moltis/pull/721) |
| #720 | penso | **fix(agents):** Strip trailing stop tokens leaked by LLMs (e.g. `<\|eom\|>`) from final responses | [PR #720](https://github.com/moltis-org/moltis/pull/720) |
| #709 | penso | **fix(whatsapp):** Upgrade `whatsapp-rust` ecosystem 0.2 → 0.5 to fix inbound message decryption/parsing | [PR #709](https://github.com/moltis-org/moltis/pull/709) |
| #719 | Cstewart-HC | **fix(providers):** Collapse type arrays in strict-mode patching for Gemini/OpenRouter compatibility | [PR #719](https://github.com/moltis-org/moltis/pull/719) |
| #717 | penso | **fix(providers):** Skip strict tool schemas entirely for Google/Gemini via OpenRouter | [PR #717](https://github.com/moltis-org/moltis/pull/717) |
| #718 | Cstewart-HC | **docs:** Add comprehensive 1,078-line `moltis.toml` configuration reference | [PR #718](https://github.com/moltis-org/moltis/pull/718) |
| #714 | Cstewart-HC | **feat(agents):** Allow `GUIDELINES.md` file override for hardcoded tool guidelines | [PR #714](https://github.com/moltis-org/moltis/pull/714) |
| #667 | Cstewart-HC | **feat(tools):** Add native `file_read` and `file_info` tools with directory containment and approval gating | [PR #667](https://github.com/moltis-org/moltis/pull/667) |

**Key advances:**
- **Provider robustness:** A cluster of PRs (#717, #719, #724, #725, #722) hardens Moltis against real-world LLM API quirks—Gemini's strict schema rejection, Qwen chat-template limitations, and OpenAI strict-mode edge cases.
- **Channel reliability:** WhatsApp message parsing is restored (#709), and Matrix is being prepared for modern OIDC-only homeservers (#730).
- **Developer experience:** A full config reference landed (#718), and large-scale code-quality refactoring (#731) improves maintainability.

---

## 4. Community Hot Topics

**Note:** No item in the dataset has comments or reactions (>0), so "hot" is assessed by **issue/PR clustering around a theme** and **maintainer attention velocity**.

| Item | Theme | Link |
|:---|:---|:---|
| #730 (OPEN) — Matrix OIDC auth | **Highest community impact:** Modern Matrix homeservers (e.g. matrix.org) dropped password auth in April 2025. This PR unblocks Moltis for the entire Matrix ecosystem. | [PR #730](https://github.com/moltis-org/moltis/pull/730) |
| #726 (OPEN) — Oldest-first tool-result compaction | Addresses a fundamental agent-loop bug where long tool iterations destroy context. | [PR #726](https://github.com/moltis-org/moltis/pull/726) |
| #723/#727 (OPEN) — Per-model context window overrides | Highly requested configurability; stacked PRs suggest imminent merge. | [PR #723](https://github.com/moltis-org/moltis/pull/723), [PR #727](https://github.com/moltis-org/moltis/pull/727) |

**Underlying needs:** Users need Moltis to work reliably with **modern auth standards** (OIDC), **long-running agent loops** without context loss, and **fine-grained model tuning** (context windows) for cost/performance optimization.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Description | Link |
|:---|:---|:---|:---|:---|
| **High** | #705 — `/proc` and `/sys` exposed to Docker container | **None visible** | Security sandboxing gap in container deployment. Closed without visible linked PR—worth verifying if it was a configuration clarification or an actual fix. | [Issue #705](https://github.com/moltis-org/moltis/issues/705) |
| **High** | #712 — MCP not properly working | #724 | Optional enum parameters caused LLMs to send literal `"null"` strings instead of JSON `null`, breaking tool execution. | [Issue #712](https://github.com/moltis-org/moltis/issues/712) → [PR #724](https://github.com/moltis-org/moltis/pull/724) |
| **High** | #716 — Chat fails with Google/Gemini via OpenRouter | #717, #719 | Gemini rejects array-form types and union schemas in tool definitions. Fixed by skipping strict schemas and collapsing type arrays. | [Issue #716](https://github.com/moltis-org/moltis/issues/716) → [PR #717](https://github.com/moltis-org/moltis/pull/717), [PR #719](https://github.com/moltis-org/moltis/pull/719) |
| **Medium** | #729 — GraphQL-sent messages invisible in web UI | #734 | API messages persisted but never broadcast over WebSocket. Fixed by emitting `user_message` event. | [Issue #729](https://github.com/moltis-org/moltis/issues/729) → [PR #734](https://github.com/moltis-org/moltis/pull/734) |
| **Medium** | #732 — MCP status wrong in UI | #733 | Health probe only accepted 2xx/401; many valid MCP servers return 405/404/403 on optional GET. Fixed by accepting any HTTP response as alive. | [Issue #732](https://github.com/moltis-org/moltis/issues/732) → [PR #733](https://github.com/moltis-org/moltis/pull/733) |
| **Medium** | #534 — WhatsApp inbound messages empty after decryption | #709 | `whatsapp-rust` 0.2 ecosystem broke after WhatsApp protobuf schema update. Fixed by upgrading to 0.5. | [Issue #534](https://github.com/moltis-org/moltis/issues/534) → [PR #709](https://github.com/moltis-org/moltis/pull/709) |
| **Low** | #735 — Custom ElevenLabs voices don't work | **None yet** | Only **open** bug in the batch. No comments or linked PR. | [Issue #735](https://github.com/moltis-org/moltis/issues/735) |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Per-model context window overrides** | #723, #727 | **Very high** — stacked PRs by active maintainer, config schema already implemented. |
| **Matrix OIDC authentication** | #730 | **High** — critical for Matrix homeserver compatibility post-2025. |
| **External CLI agent bridge** | #566 | **Medium** — foundational crate merged, but still marked OPEN and updated recently. Suggests ongoing incremental work toward a larger integration (Claude Code, Codex CLI, etc.). |
| **Oldest-first tool result compaction** | #726 | **High** — fixes a reported stream-investigation bug (#1) that destroys agent context in long loops. |
| **Native filesystem tools expansion** | #667 | **Already merged** — `file_read`/`file_info` with containment gating. Likely precursor to more native tool replacements for MCP servers. |

---

## 7. User Feedback Summary

### Pain Points
- **Provider fragility:** Multiple users hit failures with Google/Gemini via OpenRouter (#716), Qwen system messages (#725), and strict-mode schema incompatibilities. Moltis's broad provider support requires continuous, reactive patching.
- **MCP tooling brittleness:** Health checks (#732) and enum null handling (#712) caused real workflow breaks. Users depend on MCP but hit edge cases in spec implementation.
- **Web UI sync gaps:** API-first users (#729) expect parity between GraphQL mutations and WebSocket-driven UI updates.
- **Voice customization:** ElevenLabs custom voices are non-functional (#735) — a quality-of-life regression for voice-interaction users.

### Positive Signals
- **Rapid maintainer response:** 6 of 7 issues closed within 24 hours of update.
- **Documentation investment:** The 1,078-line config reference (#718) directly addresses a common onboarding friction point.
- **Security-conscious tooling:** Native file tools (#667) with directory containment and approval gating show mature thinking about safe agent execution.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed | Link |
|:---|:---|:---|:---|:---|
| #735 — Custom ElevenLabs voices don't work | 1 day | **Medium** | Only open bug with no comments or PR. Needs triage and assignment. | [Issue #735](https://github.com/moltis-org/moltis/issues/735) |
| #566 — External CLI agent bridge foundation | ~10 days | **Low** | Long-running open PR that is actively updated. Not stale, but represents a large surface area that may need design review before merge. | [PR #566](https://github.com/moltis-org/moltis/pull/566) |
| #705 — `/proc` and `/sys` exposed to Docker container | 2 days | **Medium-High** | Closed abruptly with 1 comment and no visible fix PR. If unresolved, this is a live security issue. Worth auditing whether closure was a documentation fix or code fix. | [Issue #705](https://github.com/moltis-org/moltis/issues/705) |

---

*Digest generated from GitHub activity for moltis-org/moltis on 2026-04-16.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-16

## 1. Today's Overview

CoPaw (operating under the `agentscope-ai/QwenPaw` repository) showed **very high development velocity** in the past 24 hours, with **50 issues and 50 pull requests updated**, split evenly between open/active and closed/merged items. The project shipped **two patch releases** (`v1.1.2-beta.1` and `v1.1.1.post1`), indicating an aggressive iteration cadence. Community engagement is strong, with the top issue accumulating **57 comments**. However, a notable tension exists between rapid feature expansion and stability, as users report silent task failures, workspace path misconfigurations, and provider compatibility issues.

---

## 2. Releases

### [v1.1.2-beta.1](https://github.com/agentscope-ai/QwenPaw/pull/3416)
| Item | Detail |
|------|--------|
| **Type** | Beta pre-release |
| **Changes** | • Configurable recursion for file watcher in memory module ([PR #3347](https://github.com/agentscope-ai/QwenPaw/pull/3347))<br>• Added default memory summary ([memory feature]) |
| **Breaking / Migration** | None noted; beta channel suitable for early adopters testing memory improvements |

### [v1.1.1.post1](https://github.com/agentscope-ai/QwenPaw/pull/3399)
| Item | Detail |
|------|--------|
| **Type** | Post-release patch |
| **Changes** | • Fixed Cron Job ID info message text ([PR #3404](https://github.com/agentscope-ai/QwenPaw/pull/3404))<br>• Fixed Ollama provider connection issue ([PR #3405](https://github.com/agentscope-ai/QwenPaw/pull/3405)) |
| **Breaking / Migration** | None; recommended for users on v1.1.1 experiencing Ollama or cron logging glitches |

---

## 3. Project Progress

### Merged / Closed PRs Today (25 total; selected highlights)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#3443](https://github.com/agentscope-ai/QwenPaw/pull/3443) | vvv214 | **Local model routing v1** — wired `llm_routing` into runtime with deterministic local/cloud dual-slot config | Core infrastructure for hybrid on-prem + cloud deployments |
| [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) | yuanxs21 | **Fixed silent tool-call stop** on `qwen3-coder-plus` and similar models | Resolves a P0-style silent failure in agent reasoning loops |
| [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) | rayrayraykk | **Mission Mode** — autonomous iterative agent for complex long-running tasks | Major new capability; closes gap vs. Claude-style long-horizon agents |
| [#3385](https://github.com/agentscope-ai/QwenPaw/pull/3385) | pan-x-c | **Agent CLI & local agent template system** | Improves workspace seeding and maintainability |
| [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) | ekzhu | Fixed background task cancellation on workspace reload | Stability fix for `--background` task users |
| [#2144](https://github.com/agentscope-ai/QwenPaw/pull/2144) | vvv214 | **Local judge routing v1** | Upgrades routing from heuristics to a small local judge model |

**Key advancement:** The project simultaneously landed **long-horizon agent execution** (Mission Mode), **model routing infrastructure** (local/cloud + judge), and **template-based agent onboarding** — signaling a strategic push toward production deployability.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Status | Comments | Core Need |
|---|---|---|---|
| [#2291 — Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291) | Open | **57** | Centralized contributor onboarding; demand for clear task ownership and P0-P2 prioritization |
| [#3392 — No API login password, insecure](https://github.com/agentscope-ai/QwenPaw/issues/3392) | Closed | 6 | **Security / auth hardening** — users want built-in password auth for web UI by default |
| [#3011 — Long tasks silently stop mid-execution](https://github.com/agentscope-ai/QwenPaw/issues/3011) | Closed | 5 | **Reliability of long-running reasoning**; specifically affects `qwen3-coder-plus` |
| [#3426 — Context usage indicator for current conversation](https://github.com/agentscope-ai/QwenPaw/issues/3426) | Open | 5 | Transparency in token/window management |
| [#3430 — Relationship between QwenPaw and CoPaw?](https://github.com/agentscope-ai/QwenPaw/issues/3430) | Open | 5 | **Branding clarity** — users confused by dual naming; risk of trust/continuity concerns |

### Most Active PRs

| PR | Status | Focus |
|---|---|---|
| [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) | Open, Under Review | **ACP-based external agent delegation** — major architecture addition for multi-agent orchestration |
| [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) | Open, Under Review | Channel testing infrastructure and documentation |
| [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | Open, Under Review | **Agent Statistics page** — operational observability for deployments |

**Underlying needs:**  
1. **Governance & trust** — branding confusion and security defaults erode enterprise confidence.  
2. **Observability** — users want visibility into context limits, task progress, and agent metrics.  
3. **Reliability** — silent failures in long tasks are a recurring pain point.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR / Status |
|---|---|---|---|
| **High** | [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) | Long tasks silently stop with `qwen3-coder-plus`; no frontend/backend error | **Fixed** by [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) |
| **High** | [#3397](https://github.com/agentscope-ai/QwenPaw/issues/3397) | Session permanently freezes during multi-step CLI tasks when `max_input_length` is large | Open; no linked fix yet |
| **High** | [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) | Pipeline ops execute twice per message; tool ID set grows unbounded | Open; suspected logic bug in session state management |
| **Medium** | [#3381](https://github.com/agentscope-ai/QwenPaw/issues/3381) | Agent workspace path ignored; agent runs in wrong directory | Open |
| **Medium** | [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) | Duplicate `/api/files/preview` URL path breaks file downloads | Open; likely frontend routing bug |
| **Medium** | [#3421](https://github.com/agentscope-ai/QwenPaw/issues/3421) | PNG figure preview lost after tab switch/refresh | Open; frontend state persistence issue |
| **Medium** | [#3308](https://github.com/agentscope-ai/QwenPaw/issues/3308) | "Regenerate" adds new message instead of replacing previous | Open; UX regression |
| **Medium** | [#3420](https://github.com/agentscope-ai/QwenPaw/issues/3420) | Editing `skill.md` in UI deletes other files in workspace | **Fixed** (closed today) |
| **Low-Medium** | [#3375](https://github.com/agentscope-ai/QwenPaw/issues/3375) | Gunicorn startup conflict with Pydantic | Closed today |
| **Low-Medium** | [#3407](https://github.com/agentscope-ai/QwenPaw/issues/3407) | Minimax MCP tool fails to start in v1.1.1 | Closed today |

**Stability assessment:** Several **high-severity silent failures and state corruption bugs** remain open. The merge of [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) is a significant stability win, but [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) (unbounded tool ID growth + double execution) poses a resource-leak risk needing urgent attention.

---

## 6. Feature Requests & Roadmap Signals

| Issue / PR | Request | Likelihood in Next Version |
|---|---|---|
| [#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426) | **Context usage indicator** in current conversation | **High** — small UI addition, high user demand |
| [#3411](https://github.com/agentscope-ai/QwenPaw/issues/3411) | Configurable context length + auto-compression threshold | **High** — directly related to context management; already closed as request, implementation likely queued |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | **Skill classification / foldering** in skill pool | Medium — architectural; would pair well with semantic routing |
| [#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) | **Plan Mode** for serious workflow control | Medium — console-side feature; roadmap-aligned but needs design |
| [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349) | Red warning for high-risk agent operations requiring approval | Medium — security/UX enhancement |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | **Kimi Code API support** | Medium — provider expansion; pattern matches recent Aliyun updates |
| [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | **SIP voice channel** (pyVoIP/LiveKit) | Medium — large PR from first-time contributor; if reviewed promptly, could land in v1.2 |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | **Semantic skill routing** via embeddings | Medium — performance optimization for large skill pools |

**Prediction:** The next minor release (likely **v1.2.0**) will probably bundle **context usage UI**, **local model routing console settings** ([#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452)), and **Mission Mode** (already merged), with possible voice/SIP channel inclusion.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence |
|---|---|
| **Silent failures** | [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011), [#3397](https://github.com/agentscope-ai/QwenPaw/issues/3397) — users lose trust when agents stop without error |
| **Workspace / path confusion** | [#3381](https://github.com/agentscope-ai/QwenPaw/issues/3381), [#3380](https://github.com/agentscope-ai/QwenPaw/issues/3380) — Docker users struggle with backup/restore and ID-path coupling |
| **Security defaults too weak** | [#3392](https://github.com/agentscope-ai/QwenPaw/issues/3392) — demand for mandatory API/web UI password |
| **Provider compatibility gaps** | [#3434](https://github.com/agentscope-ai/QwenPaw/issues/3434) (Ollama), [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) (Kimi), [#3440](https://github.com/agentscope-ai/QwenPaw/issues/3440) (vLLM) — self-hosters hit integration friction |
| **Frontend UX clutter** | [#3298](https://github.com/agentscope-ai/QwenPaw/issues/3298) — tool-guard messages too verbose; [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349) — approval UI not prominent enough |
| **Channel integration issues** | [#3432](https://github.com/agentscope-ai/QwenPaw/issues/3432) — Feishu (Lark) permissions and API gaps vs. older OpenClaw experience |

### Satisfaction Signals
- Active contribution culture (#2291 with 57 comments).
- Rapid patch releases addressing Ollama and cron issues.
- Appreciation for Docker deployment flexibility.

---

## 8. Backlog Watch

The following items are **important but stalled**, needing maintainer review or decision:

| Item | Age | Risk if Ignored |
|---|---|---|
| [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) — ACP-based external agent delegation | Open since Apr 13 | **High** — core multi-agent architecture PR; bit-rot risk with ongoing routing changes |
| [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) — Channel testing infrastructure | Open since Mar 29 | **Medium** — quality debt; 11 channels lack systematic CI gating |
| [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) — Pipeline double execution & unbounded tool IDs | Open since Apr 12 | **High** — performance/stability degradation over long sessions |
| [#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) — Plan Mode request | Open since Mar 28 | Medium — competitive gap vs. other agent frameworks |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) — Skill classification / folders | Open since Apr 5 | Medium — usability at scale |
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) — QwenPaw vs. CoPaw branding | Open, 5 comments | **High** — confusion damages community growth and enterprise adoption |

**Recommended maintainer actions:**  
1. **Clarify branding** in README and issue templates (#3430).  
2. **Prioritize review** of [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) and [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279).  
3. **Merge or provide feedback** on [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) to prevent testing infrastructure from diverging.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-16

## 1. Today's Overview

ZeroClaw remains highly active with **50 issues and 41 PRs** touched in the last 24 hours, indicating a large and engaged community. However, **no new releases** were cut, and the ratio of **39 open/active items to only 11 closed** suggests the project is accumulating backlog faster than it resolves it. A significant portion of activity centers on **runtime/daemon stability, provider compatibility, and architectural planning** for the v0.7.0 → v1.0.0 transition. The maintainers appear focused on foundational refactoring (microkernel RFCs, CI/CD, crate splitting) rather than rapid feature shipping.

---

## 2. Releases

**No new releases** today. The project is operating between v0.7.0 and v1.0.0 with several major RFCs in flight but no tagged version.

---

## 3. Project Progress

Only **7 PRs were merged/closed** in the last 24h versus 34 still open. Notable merged/closed work includes:

| PR | Author | Summary |
|---|---|---|
| [#5531](https://github.com/zeroclaw-labs/zeroclaw/pull/5531) | RyanHoldren | **Groq compatibility fix**: added required `name` field to native `role:tool` messages and handled missing `tool_call_id` from context truncation. |
| *(implied from closed issues)* | sept-joe, ilteoood, etc. | Build-speed complaint ([#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575)) and GitHub Copilot provider config question ([#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)) were resolved/closed. |

**Active advancement areas (open PRs):**
- **Gateway/agent fixes**: [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) registers skill tools in the WebSocket/gateway path; [#5363](https://github.com/zeroclaw-labs/zeroclaw/pull/5363) makes model switching live-reloadable.
- **Security hardening**: [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) adds per-command TOTP gating for shell tools; [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) fixes shell guard bypass with wildcards.
- **Provider fixes**: [#5762](https://github.com/zeroclaw-labs/zeroclaw/pull/5762) resolves MiniMax/native-tool-calling false rejections; [#5777](https://github.com/zeroclaw-labs/zeroclaw/pull/5777) preserves `reasoning_content` for thinking models (Kimi/GLM).
- **Tool-system refactoring**: A cluster of PRs by yijunyu ([#4947](https://github.com/zeroclaw-labs/zeroclaw/pull/4947)–[#4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954), [#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772)) continues delegating rate-limiting and path-guarding to wrapper types across search, file, AI-CLI, cron, and network tools.

---

## 4. Community Hot Topics

| Item | Type | Comments | Why It's Hot |
|---|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Bug (S1) | **12** | **Web dashboard still unavailable** — users hit a build-instruction error across both web UI and Tauri desktop app, spanning multiple versions. This is a persistent onboarding blocker with the highest comment count. |
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) | RFC | **5** | **Microkernel transition (v0.7.0 → v1.0.0)** — WareWolf-MoonWall's architecture RFC signals a major codebase restructuring to escape "reactive growth." |
| [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | Bug/Closed | **5** | GitHub Copilot provider setup confusion — closed, but reflects ongoing documentation gaps for new providers. |
| [#5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) | Bug/Closed (S0) | **4** | Persistent error loop when GPT file parsing fails — closed, yet severe because it locked users into unrecoverable error states. |
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) | Enhancement/Closed | **4**, 👍 **9** | **Most upvoted issue in the dataset.** A strongly worded critique of code quality and maintainer responsiveness, closed but carrying significant community sentiment. |
| [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | Enhancement/Closed | **4** | Extremely slow compilation — closed after being raised as a pain point for Rust secondary development. |

**Underlying needs:**  
- **Reliable first-run experience** (dashboard builds, installation docs).  
- **Architectural clarity** (microkernel, crate splitting, governance).  
- **Faster feedback loops** for developers contributing to the Rust codebase.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Summary | Fix PR? |
|---|---|---|---|---|
| **S0** — data loss / security risk | [#5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) | Closed | GPT file-parse failure → persistent error loop | Closed |
| **S0** | [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | Open | **Consecutive OOM in WSL2** — zeroclaw killed at ~8.5 GB RSS | None linked |
| **S0** | [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) | Open | Improper email channel config logic (TLS/security settings) | None linked |
| **S0** | [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Open | Feishu bot ignores `mention_only`, responds to all messages | None linked |
| **S0** | [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | Open | Telegram token encryption in `config.json` breaks functionality | None linked |
| **S0** | [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) | Open | `allowed_path` containment logic broken (`~/` doesn't cover `~/dev`) | None linked |
| **S0** | [#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518) | Open | `forbidden_path_argument` blocks safe redirects (`/dev/null`, `/dev/stdout`) | None linked |
| **S1** — workflow blocked | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Open | Web dashboard / Tauri app unavailable | None linked |
| **S1** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Open | Kimi-code provider errors in streaming tool calls | [#5777](https://github.com/zeroclaw-labs/zeroclaw/pull/5777) likely related |
| **S1** | [#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) | Open | Groq provider 400 error | [#5531](https://github.com/zeroclaw-labs/zeroclaw/pull/5531) merged for related fix |
| **S1** | [#5527](https://github.com/zeroclaw-labs/zeroclaw/issues/5527) | Open | Gemini OAuth flow broken again | None linked |
| **S1** | [#5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475) | Open | Copilot + Telegram → "Invalid parameter" | None linked |
| **S2** — degraded behavior | [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Open | Daemon auto-starts on boot, conflicts with manual `zeroclaw daemon` | None linked |
| **S2** | [#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) | Open | Web dashboard ignores `session_persistence = true` | None linked |
| **S2** | [#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562) | Open | Windows shell commands flash `cmd.exe` window | None linked |

**Assessment:** Stability is the project's weakest signal. **7 open S0 issues** (security/data-loss class) with no linked fix PRs is a red flag. Provider fragility (Groq, Gemini, Kimi, Copilot, MiniMax) and path-permission bugs are recurring themes.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Likelihood in Next Version | Notes |
|---|---|---|---|
| **Microkernel / crate split** | Architecture RFC | **High** | [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) and closed [#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447) both push for crate splitting to fix compile times. |
| **Governance & contribution pipeline** | Governance RFC | Medium | [#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577) — needed to scale community, but not a code feature. |
| **Documentation standards + i18n** | Docs RFC | Medium | [#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576) — signals preparation for v1.0.0 polish. |
| **CI/CD and release automation** | Infra RFC | Medium-High | [#5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579) — enabler for faster, reliable releases. |
| **Native OpenRouter provider routing** | Enhancement | Medium | [#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) — relatively scoped provider enhancement. |
| **Mattermost WebSocket real-time support** | PR | Medium | [#5162](https://github.com/zeroclaw-labs/zeroclaw/pull/5162) has been open since early April; large feature. |
| **TOTP-gated shell commands** | Security PR | High | [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) is active and narrowly scoped. |
| **Claude Code skill for issue triage** | PR | Medium | [#5780](https://github.com/zeroclaw-labs/zeroclaw/pull/5780) — meta-improvement for project health. |

---

## 7. User Feedback Summary

**Pain points:**
1. **Onboarding friction** — web dashboard won't build, installation methods are poorly documented ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866), [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)).
2. **Provider reliability** — OAuth breakages, 400 errors, and missing config docs for Groq, Gemini, Kimi, Copilot, and MiniMax.
3. **Resource consumption** — WSL2 OOM kills and extremely slow Rust compilation.
4. **Security/sandbox behavior** — path guards are over-blocking (`/dev/null`) or under-blocking (`~/dev`), and shell command flashes on Windows hurt UX.
5. **Daemon lifecycle** — auto-start conflicts with manual runs, session persistence ignored.

**Sentiment:** Mixed to concerned. The **9 upvotes on #2691** (code-quality critique) and the persistent dashboard bug (#4866, 12 comments) indicate that **trust and first-impression quality are eroding**. Users value the project's ambition but are frustrated by reactive maintenance and incomplete docs.

---

## 8. Backlog Watch

These important items have been open for extended periods or carry high community impact and **need maintainer attention**:

| Item | Age | Risk if Ignored |
|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web dashboard unavailable | ~3 weeks, 12 comments | **Critical onboarding churn** — every new user hits this. |
| [#5162](https://github.com/zeroclaw-labs/zeroclaw/pull/5162) Mattermost WebSocket | ~2 weeks | Large community PR at risk of bit-rot; real-time channel support blocked. |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) WSL2 OOM | ~1 week | **S0 severity**, no fix PR. Memory usage pattern may affect all Linux users. |
| [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) `allowed_path` logic broken | ~1 week | **S0 severity**, undermines core security model. |
| [#4952](https://github.com/zeroclaw-labs/zeroclaw/pull/4952)–[#4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954) Tool-system refactor series | ~3 weeks | yijunyu's 7-PR refactor train risks merge conflicts if not reviewed in batch. |
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) Microkernel RFC | ~1 week | Will define v1.0.0 architecture; needs maintainer buy-in and timeline. |

---

*Digest generated from GitHub activity on 2026-04-16.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*