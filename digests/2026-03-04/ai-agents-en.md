# OpenClaw Ecosystem Digest 2026-03-04

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-03-04 00:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-04

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with substantial community engagement. The project released v2026.3.2 with expanded SecretRef security coverage across 64 credential targets, suggesting a security-hardening focus. However, the **high open-to-closed ratio** (434 open issues vs. 66 closed; 414 open PRs vs. 86 merged/closed) signals potential backlog pressure. Multiple regression reports against v2026.3.2 indicate release stability challenges, with several critical bugs emerging within 24 hours of release.

---

## 2. Releases

### [v2026.3.2](https://github.com/openclaw/openclaw/releases/tag/v2026.3.2) & [v2026.3.2-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.2-beta.1)

| Aspect | Details |
|--------|---------|
| **Primary Change** | Expanded SecretRef support across full user-supplied credential surface (64 targets) |
| **Coverage Areas** | Runtime collectors, `openclaw secrets` planning/apply/audit flows, onboarding SecretInput UX, documentation |
| **Behavior Change** | **Unresolved SecretRef references now fail fast** (breaking change for misconfigured deployments) |
| **Migration Notes** | Users with incomplete SecretRef configurations will experience hard failures instead of silent credential omission; verify all `secretRef` declarations resolve correctly |

---

## 3. Project Progress

### Merged/Closed PRs (Selected Significant Items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#29713](https://github.com/openclaw/openclaw/pull/29713) | @liquidhorizon88-bot | Security audit: suggest valid `gateway.nodes.denyCommands` entries | Improved security UX with actionable warnings |
| [#28306](https://github.com/openclaw/openclaw/pull/28306) | @xrom2863 | Expand SecretRef scope to channel credentials (botToken, webhookSecret) | Completed credential security expansion |
| [#27189](https://github.com/openclaw/openclaw/pull/27189) | @kellyGrillo | Fix MS Teams "proxy revoked" error | Channel stability |
| [#33496](https://github.com/openclaw/openclaw/pull/33496) | @bmendonca3 | Fix Feishu replies when target message withdrawn | Edge case handling |
| [#29632](https://github.com/openclaw/openclaw/pull/29632) | @yushuaibing9084-oss | Fix duplicate Feishu plugin entry causing pairing failure | Critical channel fix |
| [#17052](https://github.com/openclaw/openclaw/pull/17052) | @ukr-coder | Document HEARTBEAT.md bootstrap file size limit (899 chars) | Documentation clarity |
| [#26426](https://github.com/openclaw/openclaw/pull/26426) | @lolaopenclaw | Fix Control UI mobile responsiveness (Android) | Mobile UX improvement |
| [#32439](https://github.com/openclaw/openclaw/pull/32439) | @Minessential | Resolve macOS headless install failure | Platform support |

### Active Development Areas (Open PRs)
- **Discord reliability**: Decoupled message handler from AI execution ([#33583](https://github.com/openclaw/openclaw/pull/33583)), chunked send retry logic ([#33643](https://github.com/openclaw/openclaw/pull/33643))
- **Session continuity**: Recovery paths for orphaned turns ([#28926](https://github.com/openclaw/openclaw/pull/28926)), session key lookup misses ([#33646](https://github.com/openclaw/openclaw/pull/33646))
- **Agent autonomy**: Self-elected continuation + gateway-native delegation ([#33499](https://github.com/openclaw/openclaw/pull/33499)) — *major feature*
- **Browser tooling**: Proxy configuration support, `disableLaunch` and `lockTab` options ([#33181](https://github.com/openclaw/openclaw/pull/33181))
- **Anthropic ecosystem**: 1M context window for Bedrock ([#31263](https://github.com/openclaw/openclaw/pull/31263)), reasoning_effort stripping for compatibility ([#33529](https://github.com/openclaw/openclaw/pull/33529))

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Issue | Comments | Reactions | Core Need |
|:---|:---:|:---:|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) — i18n & Localization Support | 73 | 0 | **Global accessibility** — acknowledged blocker due to maintainer bandwidth; community PRs exist but unreviewed |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) — DingTalk first-install channel | 28 | 10 | **Enterprise China onboarding** — feature exists but not exposed in UX; completion gap |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) — Anthropic setup-token 401 error | 17 | 0 | **Auth reliability** — isolated profile reproduction suggests credential persistence bug |
| [#21872](https://github.com/openclaw/openclaw/issues/21872) — Telegram streaming + MiniMax | 15 | 1 | **Streaming UX consistency** — provider-specific streaming protocol mismatch |
| [#29632](https://github.com/openclaw/openclaw/issues/29632) — Feishu duplicate plugin (closed) | 15 | 0 | **Upgrade stability** — auto-config mutation causing breakage |

### Underlying Needs Analysis
- **Internationalization demand is persistent but resource-blocked** — 73 comments with no maintainer commitment suggests governance/policy decision needed
- **China enterprise ecosystem integration** (DingTalk, Feishu) is active but fragmented — multiple related issues indicate market importance
- **Streaming message UX** is a recurring pain point across Telegram, with provider-specific edge cases (MiniMax, Anthropic-compatible endpoints)

---

## 5. Bugs & Stability

### Critical/High Severity (v2026.3.2 Regressions)

| Issue | Severity | Description | Fix PR Status |
|:---|:---|:---|:---|
| [#32833](https://github.com/openclaw/openclaw/issues/32833) | **Critical** | Exec plugin install fails — CLI functionality broken | 🔴 **No PR linked** |
| [#33225](https://github.com/openclaw/openclaw/issues/33225) | **Critical** | Non-interactive onboarded agents lose file-write tools | 🟡 Workaround identified; root cause under investigation |
| [#33419](https://github.com/openclaw/openclaw/issues/33419) | **Critical** | Agents cannot access files (fresh installs) | 🔴 **No PR linked** — possibly same root as #33225 |
| [#33258](https://github.com/openclaw/openclaw/issues/33258) | **High** | File write failure: assistant outputs tool syntax instead of executing | 🔴 **No PR linked** |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) | **High** | Vertex embedded runs fail with "Cannot convert undefined or null to object" | 🔴 **No PR linked** |
| [#33468](https://github.com/openclaw/openclaw/issues/33468) | **High** | Google Chat fails to start (same error as #32245) | 🔴 **No PR linked** — pattern suggests shared regression |

### Medium Severity

| Issue | Description | Notes |
|:---|:---|:---|
| [#33453](https://github.com/openclaw/openclaw/issues/33453) | Telegram duplicate messages with partial streaming | UX degradation, not data loss |
| [#33623](https://github.com/openclaw/openclaw/issues/33623) | `openclaw doctor --fix` clears custom API keys | **Data loss risk** — credential destruction |
| [#33025](https://github.com/openclaw/openclaw/issues/33025) | Telegram DM streaming never triggers | Feature non-functional in DMs |
| [#33180](https://github.com/openclaw/openclaw/issues/33180) | Telegram streaming causes "Pinned Message" appearance in DMs | UX confusion |
| [#32088](https://github.com/openclaw/openclaw/issues/32088) | Slack crash on startup with Bolt 4.6.0 | Channel completely broken |

### Stability Assessment
**v2026.3.2 release quality is concerning**: At least 4 critical regressions affecting core functionality (plugin install, file operations, agent tooling) reported within 24 hours. The "Cannot convert undefined or null to object" error appears across multiple providers (Vertex, Google Chat), suggesting a shared configuration handling regression.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Vision/multimodal support** | [#28744](https://github.com/openclaw/openclaw/issues/28744) | High | Strong user demand (Feishu/MiniMax ecosystem), technical feasibility demonstrated, competitive necessity |
| **Telegram Business Bot support** | [#20786](https://github.com/openclaw/openclaw/issues/20786) | Medium | Clear spec, engaged requester, Telegram ecosystem expansion |
| **Browser tool proxy configuration** | [#8079](https://github.com/openclaw/openclaw/issues/8079) | **High** | PR [#33181](https://github.com/openclaw/openclaw/pull/33181) already in flight |
| **Sub-agent completion announce routing** (`announceTarget`) | [#27445](https://github.com/openclaw/openclaw/issues/27445) | Medium | PR [#33499](https://github.com/openclaw/openclaw/pull/33499) addresses related functionality |
| **i18n framework** | [#3460](https://github.com/openclaw/openclaw/issues/3460) | Low | Maintainer bandwidth blocker explicitly stated |
| **Per-topic Telegram forum routing** | [#33647](https://github.com/openclaw/openclaw/pull/33647) | **High** | PR already open, natural multi-agent enabler |

### Emerging Patterns
- **Agent orchestration complexity** is driving demand for better sub-agent lifecycle control
- **China-market messaging platforms** (DingTalk, Feishu, WeChat ecosystem) require dedicated attention
- **Security hardening** (SecretRef expansion) suggests enterprise/compliance market focus

---

## 7. User Feedback Summary

### Pain Points

| Category | Specific Issues | Severity |
|:---|:---|:---:|
| **Release stability** | Multiple v2026.3.2 regressions breaking fresh installs | 🔴 Critical |
| **Credential management** | SecretRef migration friction, doctor command destroying keys | 🔴 Critical |
| **Streaming UX inconsistency** | Telegram partial streaming has 5+ related bugs across providers | 🟡 High |
| **Multi-account configuration** | Feishu routing failures, complex binding logic | 🟡 High |
| **Documentation gaps** | Undocumented limits (HEARTBEAT.md size), config path confusion | 🟡 Medium |
| **Platform-specific breakage** | Windows ByteString errors, macOS headless install issues | 🟡 Medium |

### Positive Signals
- **Security expansion well-received**: SecretRef coverage increase addresses enterprise needs
- **Active maintainer response**: Quick closure of MS Teams proxy issue, Feishu duplicate plugin fix
- **Community contribution quality**: Multiple "trusted-contributor" and "experienced-contributor" PRs in flight

### Use Case Evolution
Users are deploying OpenClaw in increasingly complex scenarios: multi-agent orchestration, cron-driven autonomous workflows, enterprise messaging platform integration, and Tailscale-secured remote access. The project is being stretched beyond "personal assistant" into "infrastructure component" territory.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>30 days, high engagement)

| Issue | Age | Comments | Blocker |
|:---|:---|:---:|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) — i18n | 35 days | 73 | **Policy decision needed** — explicit bandwidth constraint stated |
| [#10386](https://github.com/openclaw/openclaw/issues/10386) — Workspace skills not discovered | 26 days | 7 | Core functionality; may relate to current regressions |
| [#19193](https://github.com/openclaw/openclaw/issues/19193) — Telegram streamMode text loss | 15 days | 6 | Streaming architecture debt |
| [#15442](https://github.com/openclaw/openclaw/issues/15442) — `before_agent_start` hook missing on main path | 19 days | 4 | Plugin ecosystem limitation |

### PRs At Risk of Stagnation

| PR | Age | Size | Risk |
|:---|:---|:---:|:---|
| [#28926](https://github.com/openclaw/openclaw/pull/28926) — Orphaned turn recovery | 5 days | XL | Complex, needs thorough review |
| [#28620](https://github.com/openclaw/openclaw/pull/28620) — Lazy plugin initialization | 5 days | XL | Foundation change, high impact, needs architectural review |
| [#33499](https://github.com/openclaw/openclaw/pull/33499) — Agent autonomy features | 1 day | XL | Large feature PR, may need iteration cycles |

### Recommended Actions
1. **Emergency patch release** for v2026.3.2 regressions (file access, exec plugin, doctor command)
2. **i18n governance decision** — either commit resources or close with explicit "not planned" status
3. **Streaming architecture review** — pattern of Telegram streaming bugs suggests systemic issue

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
*Analysis Date: 2026-03-04*

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense maturation pressure**, with 8+ active projects racing to define the dominant architecture for agent deployment. Three distinct patterns have emerged: **monolithic all-in-one platforms** (OpenClaw, LobsterAI), **minimalist security-first frameworks** (ZeptoClaw, NanoClaw), and **enterprise messaging-centric solutions** (CoPaw, PicoClaw). All projects face common challenges: provider API fragility, multi-platform deployment complexity, and the tension between local privacy and cloud capability. The ecosystem is simultaneously consolidating around MCP (Model Context Protocol) as a interoperability standard while fragmenting on runtime philosophy—Node.js/Bun vs. Python vs. Rust vs. Go.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Health Score* | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.3.2 (2026-03-04) | ⚠️ 65% | High velocity, stability debt |
| **PicoClaw** | 107 | 239 | None (stalled) | ⚠️ 55% | Bottlenecked on review |
| **NanoBot** | 29 | 57 | 0.1.4@post3 | ✅ 75% | Responsive, consolidating |
| **ZeroClaw** | 27 | 50 | v0.1.8-alpha.1 | ✅ 70% | Pre-release stabilization |
| **CoPaw** | 50 | 50 | v0.0.5-beta.1 | ✅ 72% | Enterprise-focused growth |
| **IronClaw** | 15 | 29 | Pending v0.14.0 | ✅ 78% | Stabilizing, test-driven |
| **NanoClaw** | 7 | 26 | None | ✅ 68% | Runtime abstraction shift |
| **LobsterAI** | 30 | 9 | v0.1.24 | ⚠️ 60% | Sandbox fragility |
| **TinyClaw** | 4 | 5 | v0.0.9 | ✅ 72% | Responsive, narrow scope |
| **ZeptoClaw** | 4 | 14 | None | ✅ 75% | Feature sprint, low community |
| **EasyClaw** | 0 | 0 | v1.5.16 | ✅ 80% | Stable, low activity |

*Health Score: Composite of resolution velocity, release cadence, backlog pressure, and critical bug density*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Competitive Gap |
|:---|:---|:---|
| **Ecosystem breadth** | 64 SecretRef targets, 8+ channel integrations | 2-3x more credential surface than NanoBot/PicoClaw |
| **Release velocity** | Daily patch releases | ZeroClaw/IronClaw on weekly cycles |
| **Enterprise features** | Audit flows, `openclaw doctor`, onboarding UX | ZeptoClaw/NanoClaw lack comparable tooling |
| **Community scale** | 500 issues/PRs daily | 10-50x activity of next tier |

### Technical Approach Differences
| Aspect | OpenClaw | Peers |
|:---|:---|:---|
| **Architecture** | Monolithic, batteries-included | ZeptoClaw: thin kernel; NanoClaw: skill marketplace |
| **Security model** | SecretRef hardening, fail-fast | ZeptoClaw: taint tracking; NanoClaw: auditable core |
| **Runtime** | Node.js/TypeScript | ZeptoClaw: Rust; PicoClaw: Go; NanoBot: Python |
| **Extensibility** | Plugin SDK | MCP-first (IronClaw, LobsterAI); WASM (IronClaw) |

### Community Size Comparison
OpenClaw operates at **ecosystem-defining scale**: its 24-hour activity (1000 items) exceeds PicoClaw's entire open backlog (203 PRs). However, this scale creates **maintainer bandwidth constraints**—i18n (#3460) blocked for 35 days vs. NanoBot's same-day critical fixes. ZeptoClaw demonstrates inverse pattern: 14 merges with zero community debate, indicating maintainer-driven efficiency but limited network effects.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP (Model Context Protocol)** | IronClaw (#233), LobsterAI (#233), NanoBot (#1488), CoPaw (#280) | Bidirectional server/client; SSE transport; Docker Desktop compatibility |
| **Streaming message UX** | OpenClaw (5+ Telegram issues), ZeroClaw (#2569), NanoBot (#1472), TinyClaw (v0.0.9) | Native `sendMessageDraft`, chunked retry, network recovery |
| **Provider abstraction & routing** | OpenClaw, NanoBot (#1486), PicoClaw (#79, #127), CoPaw (#388, #507), TinyClaw (#124) | Gemini 3 schema changes, DashScope/Kimi misrouting, local LLM (Ollama/LM Studio) |
| **Multi-agent orchestration** | OpenClaw (#33499), NanoBot (#222, #1181), ZeroClaw (#2651, #2663), IronClaw (#467), CoPaw (#508) | Sub-agent lifecycle, tool visibility scoping, delegation protocols |
| **Windows compatibility** | OpenClaw, ZeroClaw (#2501), NanoBot (#1479), LobsterAI (#238), CoPaw (#61), PicoClaw (#425) | Native builds, sandbox VM startup, Cygwin elimination |
| **China enterprise messaging** | OpenClaw (DingTalk, Feishu), CoPaw (DingTalk, Feishu, QQ), PicoClaw (Feishu), NanoBot (QQ) | Webhook validation, long-message handling, image variants |
| **Session/memory management** | OpenClaw (#28926), ZeroClaw (#2641, #2664), LobsterAI (#227, #232), NanoClaw (#572) | Persistence without compaction thresholds, context compression |
| **Security hardening** | OpenClaw (SecretRef), ZeptoClaw (taint tracking), ZeroClaw (canary tokens), NanoClaw (sender gating), CoPaw (#284) | Supply chain scanning, PII detection, granular tool approval |

---

## 5. Differentiation Analysis

| Project | Core Thesis | Target User | Key Differentiator |
|:---|:---|:---|:---|
| **OpenClaw** | "Production-grade personal assistant" | Technical individuals, small teams | Breadth + enterprise tooling |
| **ZeptoClaw** | "Security-first agent kernel" | Regulated enterprises, security-conscious | Taint tracking, audit trails, Rust |
| **NanoClaw** | "Tiny auditable core + skills" | Privacy-focused, code-literate | Minimal attack surface, skill marketplace |
| **IronClaw** | "WASM-powered extensible runtime" | Developers, tool builders | WASM sandbox, trajectory benchmarking |
| **LobsterAI** | "Sandboxed desktop AI" | General users, China market | VM isolation, NetEase backing |
| **CoPaw** | "AgentScope for teams" | Enterprise China, multi-agent workflows | Human-in-the-loop, voice channels |
| **PicoClaw** | "Edge-first Go agents" | Mobile/ARM deployment, Sipeed hardware | Binary size optimization, local LLM |
| **NanoBot** | "Pythonic agent framework" | Researchers, rapid prototypers | HKUDS academic credibility |
| **ZeroClaw** | "Rust reliability" | Infrastructure engineers | Memory safety, daemon architecture |
| **TinyClaw** | "Minimal viable agent" | Claude Code power users | Provider diversity, team management |

**Architectural Fault Lines:**
- **Monolithic vs. Composable**: OpenClaw/LobsterAI vs. NanoClaw/ZeptoClaw
- **Cloud-native vs. Edge-first**: IronClaw/CoPaw vs. PicoClaw/NanoClaw
- **WASM vs. Native plugins**: IronClaw vs. OpenClaw's Node.js SDK

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity > Stability)
| Project | Pattern | Risk |
|:---|:---|:---|
| **OpenClaw** | Daily releases, 1000 items/day | Regression debt (4 critical v2026.3.2 bugs) |
| **PicoClaw** | 239 PRs, 15% merge rate | Review bottleneck, contributor attrition |
| **ZeptoClaw** | 14 merges/24h, maintainer-driven | Bus factor, limited network validation |

### Tier 2: Stabilization Mode
| Project | Pattern | Signal |
|:---|:---|:---|
| **IronClaw** | v0.14.0 pending, test infrastructure (#507) | Pre-1.0 hardening |
| **ZeroClaw** | v0.1.8-alpha.1, security patches | Production readiness push |
| **NanoBot** | 5 critical fixes/day, no release | Consolidation before bump |
| **CoPaw** | Beta releases, Windows/Docker fixes | Enterprise onboarding |

### Tier 3: Maintenance/Consolidation
| Project | Pattern | Trajectory |
|:---|:---|:---|
| **TinyClaw** | Hotfix releases, narrow scope | Sustainable niche |
| **EasyClaw** | Patch releases, zero backlog | Mature, limited growth |
| **NanoClaw** | Runtime migration, skill marketplace | Inflection point |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **MCP as interoperability standard** | 6+ projects implementing; LobsterAI, IronClaw shipped | Design tools as MCP servers first, native integration second |
| **Provider diversification imperative** | TinyClaw #124, NanoClaw #663, OpenClaw multi-provider PRs | Abstract LLM clients; assume quota/rate-limit as norm |
| **Streaming UX as table stakes** | Native Telegram streaming (ZeroClaw #2569), OpenClaw's 5+ bugs | Implement `sendMessageDraft` equivalent; test network recovery |
| **Security as competitive moat** | ZeptoClaw taint tracking, OpenClaw SecretRef, CoPaw YARA scanning | Budget for supply chain + runtime security; users will demand |
| **China market specialization** | DingTalk/Feishu/QQ dominance in CoPaw, OpenClaw, PicoClaw | Consider APAC-first channel strategy; webhook validation complexity |
| **Edge/mobile deployment demand** | PicoClaw #190 (Android), #28 (LM Studio), NanoClaw local LLM focus | Optimize binary size; plan for ARM/phone constraints |
| **Multi-agent orchestration emergence** | Tool filtering (ZeroClaw), sub-agent configs (NanoBot #1489), delegation (OpenClaw #33499) | Design for agent-to-agent protocols; avoid single-agent assumptions |
| **Configuration as UX crisis** | Ollama setup failures (NanoBot #75, PicoClaw #109), Windows env issues (CoPaw #61) | Invest in `doctor` commands, validation, guided onboarding |

### Strategic Implications

1. **Build vs. adopt**: OpenClaw's scale suggests ecosystem consolidation; smaller projects should specialize (ZeptoClaw: security, NanoClaw: minimalism) or integrate (MCP consumption)

2. **Runtime bets**: Bun (NanoClaw #675), Rust (ZeptoClaw, ZeroClaw), and Go (PicoClaw) are gaining vs. Node.js dominance—performance and binary size driving

3. **Community health metrics**: Merge rate >50% (IronClaw, ZeroClaw) predicts sustainability; <20% (PicoClaw) predicts contributor attrition

4. **Enterprise readiness gap**: No project fully satisfies security (audit), operations (observability), and compliance (data residency) simultaneously—opportunity for differentiated offering

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-04

## 1. Today's Overview

NanoBot shows **very high community activity** with 29 issues and 57 PRs updated in the last 24 hours, indicating a rapidly maturing open-source AI agent framework. The project is experiencing growing pains typical of fast adoption: configuration complexity, provider integration fragility, and multi-platform stability challenges. No new releases were published today, suggesting maintainers are consolidating recent changes before a version bump. The PR merge rate (26% closed/merged) indicates active code review but also a substantial backlog of contributions awaiting integration. Chinese and English user bases are equally active, reflecting HKUDS's regional influence and global reach.

---

## 2. Releases

**No new releases** (current version appears to be 0.1.4@post3 based on issue references).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#313](https://github.com/HKUDS/nanobot/pull/313) | Model alias resolution with automatic provider prefixing | **Major UX improvement** — eliminates manual provider/model string formatting |
| [#1485](https://github.com/HKUDS/nanobot/pull/1485) | Added missing `openai` dependency to pyproject.toml | **Stability fix** — resolves direct import failures |
| [#1480](https://github.com/HKUDS/nanobot/pull/1480) | Streaming output support with Telegram `sendMessageDraft` | **UX enhancement** — closed without merge, likely superseded |
| [#1477](https://github.com/HKUDS/nanobot/pull/1477) | Refactored runtime-context merge logic | **Code quality** — simplifies internal architecture |

### Notable Open PRs Advancing

| PR | Description | Status |
|:---|:---|:---|
| [#1489](https://github.com/HKUDS/nanobot/pull/1489) | Subagent LLM configuration independence | Ready for review — addresses cost optimization use case |
| [#1488](https://github.com/HKUDS/nanobot/pull/1488) | MCP SSE transport with auto-detection | New — expands Model Context Protocol support |
| [#1474](https://github.com/HKUDS/nanobot/pull/1474) | Deduplicate subagent spawn calls | Fixes [#1473](https://github.com/HKUDS/nanobot/issues/1473) |
| [#1472](https://github.com/HKUDS/nanobot/pull/1472) | Telegram video file support | Implements [#1471](https://github.com/HKUDS/nanobot/issues/1471) |
| [#1482](https://github.com/HKUDS/nanobot/pull/1482) | Telegram group topic isolation | Fixes context leakage across topics |
| [#1484](https://github.com/HKUDS/nanobot/pull/1484) | PDF text extraction in ReadFileTool | Expands document processing capabilities |
| [#1224](https://github.com/HKUDS/nanobot/pull/1224) | Optional双层架构 (Steering Loop + AgentMessage) | Major architectural enhancement implementing [#1181](https://github.com/HKUDS/nanobot/issues/1181) |

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Comments | 👍 | Analysis |
|:---|:---:|:---:|:---|
| [#75](https://github.com/HKUDS/nanobot/issues/75) Ollama connection | 17 | 0 | **Configuration documentation gap** — users struggle with local LLM setup despite Ollama being a primary use case. The JSON snippet shows confusion around provider/model string formats. |
| [#222](https://github.com/HKUDS/nanobot/issues/222) Multi-agent setup | 8 | 5 | **Architecture clarity needed** — users detect multi-agent capability in configs but lack guidance. Signals demand for orchestration documentation. |
| [#140](https://github.com/HKUDS/nanobot/issues/140) GitHub Copilot provider | 8 | 4 | **Enterprise integration demand** — users want to leverage existing Copilot subscriptions, avoiding separate API costs. |
| [#1181](https://github.com/HKUDS/nanobot/issues/1181) 双层架构 proposal | 2 | 9 | **High-value architectural discussion** — Chinese community proposing Steering Loop + AgentMessage pattern for autonomous agent runtime. Low comment count but high engagement quality. |

### Underlying Needs Identified

1. **Provider abstraction maturity** — Users expect seamless local (Ollama, LM Studio) and enterprise (Copilot) integration
2. **Multi-agent orchestration patterns** — Framework supports it, but lacks prescriptive guidance
3. **Runtime autonomy** — Demand for agents that can self-manage task execution without synchronous user oversight

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1197](https://github.com/HKUDS/nanobot/issues/1197) | Final response silently discarded when `message` tool used | **Fixed** — closed 2026-03-03 |
| 🔴 **Critical** | [#1441](https://github.com/HKUDS/nanobot/issues/1441) | Cron notification infinite loop | **Fixed** — closed 2026-03-03 |
| 🟡 **High** | [#1486](https://github.com/HKUDS/nanobot/issues/1486) | Provider routing bug: dashscope + kimi-k2.5 routes to Moonshot | Open — validation logic failure |
| 🟡 **High** | [#1401](https://github.com/HKUDS/nanobot/issues/1401) | `TypeError: type 'Choice' is not subscriptable` crash on startup | Open — Python 3.11 compatibility? |
| 🟡 **High** | [#1487](https://github.com/HKUDS/nanobot/issues/1487) | Dashscope function.arguments JSON format error with qwen3.5 | Open — model-specific tool calling |
| 🟡 **High** | [#1468](https://github.com/HKUDS/nanobot/issues/1468) | Anthropic built-in + custom tools conflict | Open — provider API limitation exposure |
| 🟡 **High** | [#1022](https://github.com/HKUDS/nanobot/issues/1022) | Long-running tasks stall at "Starting execution" | Open — execution engine reliability |
| 🟢 **Medium** | [#1394](https://github.com/HKUDS/nanobot/issues/1394) | QQ channel message deduplication error | **Fixed** — closed 2026-03-03 |
| 🟢 **Medium** | [#1462](https://github.com/HKUDS/nanobot/issues/1462) | Telegram proxy parameter error | **Fixed** — closed 2026-03-03 |
| 🟢 **Medium** | [#1344](https://github.com/HKUDS/nanobot/issues/1344) | Dashscope messages content type error | **Fixed** — closed 2026-03-03 |
| 🟢 **Medium** | [#1414](https://github.com/HKUDS/nanobot/issues/1414) | Minimax consecutive user messages rejected | **Fixed** — closed 2026-03-03 |

### Stability Assessment

**Positive**: 5 critical/high issues resolved today, showing responsive maintenance.  
**Concern**: 4 open high-severity issues related to provider/model compatibility suggest the abstraction layer needs hardening.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Subagent independent LLM config** | [#1489](https://github.com/HKUDS/nanobot/pull/1489) | ⭐⭐⭐⭐⭐ | PR open, clear cost-optimization use case |
| **MCP SSE transport** | [#1488](https://github.com/HKUDS/nanobot/pull/1488) | ⭐⭐⭐⭐⭐ | Expands protocol support, PR ready |
| **Telegram video support** | [#1471](https://github.com/HKUDS/nanobot/issues/1471) / [#1472](https://github.com/HKUDS/nanobot/pull/1472) | ⭐⭐⭐⭐⭐ | PR implements issue directly |
| **Telegram topic isolation** | [#1482](https://github.com/HKUDS/nanobot/pull/1482) | ⭐⭐⭐⭐⭐ | Fixes real UX problem, PR ready |
| **PDF text extraction** | [#1484](https://github.com/HKUDS/nanobot/pull/1484) | ⭐⭐⭐⭐☆ | Common need, clean implementation |
| **Steering Loop architecture** | [#1181](https://github.com/HKUDS/nanobot/issues/1181) / [#1224](https://github.com/HKUDS/nanobot/pull/1224) | ⭐⭐⭐⭐☆ | Major architectural PR, may need review cycle |
| **Nostr channel** | [#1475](https://github.com/HKUDS/nanobot/pull/1475) | ⭐⭐⭐☆☆ | Niche but complete implementation |
| **Web chat channel** | [#1297](https://github.com/HKUDS/nanobot/pull/1297) | ⭐⭐⭐☆☆ | Flask-based, may need security review |
| **GitHub Copilot provider** | [#140](https://github.com/HKUDS/nanobot/issues/140) | ⭐⭐☆☆☆ | No PR yet, authentication complexity |
| **Hugging Face local models** | [#1470](https://github.com/HKUDS/nanobot/issues/1470) | ⭐⭐☆☆☆ | Architectural decision needed on vLLM/etc. |
| **Xiaomi speaker integration** | [#1411](https://github.com/HKUDS/nanobot/issues/1411) | ⭐☆☆☆☆ | User volunteered to develop, no PR yet |
| **OpenAI-compatible API exposure** | [#1268](https://github.com/HKUDS/nanobot/issues/1268) | ⭐⭐☆☆☆ | Would reposition NanoBot as gateway; significant scope |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Configuration complexity** | [#75](https://github.com/HKUDS/nanobot/issues/75), [#1478](https://github.com/HKUDS/nanobot/issues/1478), [#1481](https://github.com/HKUDS/nanobot/issues/1481) | High — blocks onboarding |
| **Provider/model routing bugs** | [#1486](https://github.com/HKUDS/nanobot/issues/1486), [#1304](https://github.com/HKUDS/nanobot/issues/1304), [#1459](https://github.com/HKUDS/nanobot/issues/1459) | High — breaks core functionality |
| **"Lazy" agent execution** | [#1459](https://github.com/HKUDS/nanobot/issues/1459), [#1022](https://github.com/HKUDS/nanobot/issues/1022), [#1481](https://github.com/HKUDS/nanobot/issues/1481) | High — trust erosion |
| **Windows compatibility** | [#1479](https://github.com/HKUDS/nanobot/pull/1479) | Medium — platform gaps |
| **History file bloat** | [#1449](https://github.com/HKUDS/nanobot/issues/1449) | Low — operational hygiene |

### Positive Signals

- **Multi-channel enthusiasm**: Active development on Telegram, QQ, Discord, Nostr, Luffa, Feishu
- **Architectural engagement**: Sophisticated proposals like [#1181](https://github.com/HKUDS/nanobot/issues/1181) show user investment in framework evolution
- **Self-healing attempts**: Users like @luojiaaoo volunteering to develop Xiaomi integration

### Use Case Patterns

1. **Personal automation assistant** (Telegram/Discord primary interface)
2. **Multi-agent research/delegation system** (emerging, needs docs)
3. **Cost-optimized LLM routing** (local + cloud hybrid)
4. **Cross-platform notification hub** (cron + proactive messaging)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem | Action Needed |
|:---|:---:|:---|:---|
| [#75](https://github.com/HKUDS/nanobot/issues/75) Ollama config | 28 days | 17 comments, no resolution | Documentation PR or config validation improvement |
| [#222](https://github.com/HKUDS/nanobot/issues/222) Multi-agent docs | 26 days | 5 upvotes, acknowledged capability gap | Official multi-agent guide |
| [#1022](https://github.com/HKUDS/nanobot/issues/1022) Long-running tasks | 10 days | Core reliability issue | Execution engine investigation |
| [#1181](https://github.com/HKUDS/nanobot/issues/1181) Steering Loop | 7 days | 9 upvotes, architectural significance | Review [#1224](https://github.com/HKUDS/nanobot/pull/1224) PR |

### PRs Stalled >2 Weeks

| PR | Age | Blocker |
|:---|:---:|:---|
| [#126](https://github.com/HKUDS/nanobot/pull/126) Docker CI/CD | 27 days | Needs official registry decision (ghcr vs. dockerhub) |
| [#1297](https://github.com/HKUDS/nanobot/pull/1297) Web chat | 5 days | Security review of Flask implementation |
| [#1376](https://github.com/HKUDS/nanobot/pull/1376) Progress event optimization | 3 days | Low priority, but closes [#1350](https://github.com/HKUDS/nanobot/issues/1350) |

---

## Health Assessment

| Metric | Status | Trend |
|:---|:---:|:---:|
| Issue resolution velocity | ✅ Strong | ↑ 5 closed today |
| PR merge rate | ⚠️ Moderate | → 26% — backlog growing |
| Community engagement | ✅ Very Strong | ↑ Bilingual, high-quality proposals |
| Release cadence | ⚠️ Stalled | → No release since 0.1.4@post3 |
| Documentation coverage | ❌ Weak | → Repeated config questions |

**Recommendation**: Prioritize a 0.1.5 release consolidating recent fixes, followed by focused documentation sprint addressing Ollama setup and multi-agent patterns.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-04

## 1. Today's Overview

ZeroClaw shows **high velocity development** with 50 PRs and 27 issues updated in 24 hours, indicating an active pre-release stabilization push for v0.1.8. The project released v0.1.8-alpha.1 with critical security and reliability fixes, while maintaining a 46% merge rate (23/50 PRs closed). Notable concerns include a **repository visibility incident** that was quickly resolved, and ongoing instability around web agent connectivity and Raspberry Pi compatibility. The contributor base appears healthy with distinguished contributors like @theonlyhennygod and @reidliu41 driving major features. However, the 12 open/active issues suggest some persistent runtime/daemon stability challenges need attention before stable release.

---

## 2. Releases

### v0.1.8-alpha.1 (2026-03-03)
[Release Link](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.8-alpha.1)

| Change | PR | Author |
|--------|-----|--------|
| **Security fix**: Allow explicit executable paths in `allowed_commands` | [#1379](https://github.com/zeroclaw-labs/zeroclaw/pull/1379) | @chumyin |
| **Slack fix**: Prevent replaying old messages after restart | [#1378](https://github.com/zeroclaw-labs/zeroclaw/pull/1378) | @chumyin |
| **Config fix**: Enforcement improvements (truncated in data) | — | — |

**Assessment**: Security-hardened patch release addressing command injection vectors and Slack channel reliability. No breaking changes noted. Users on v0.1.7 should prioritize upgrade for security fixes.

---

## 3. Project Progress

### Major Features Merged Today

| Feature | PR | Issue | Author | Impact |
|---------|-----|-------|--------|--------|
| **Post-turn durable fact extraction** | [#2664](https://github.com/zeroclaw-labs/zeroclaw/pull/2664) | [#2641](https://github.com/zeroclaw-labs/zeroclaw/issues/2641) | @theonlyhennygod | Memory persistence now works for short sessions/webhooks, not just compaction threshold |
| **Primary agent tool filtering** (`allowed_tools`/`denied_tools`) | [#2663](https://github.com/zeroclaw-labs/zeroclaw/pull/2663) | [#2651](https://github.com/zeroclaw-labs/zeroclaw/issues/2651) | @theonlyhennygod | Enables safe multi-agent orchestration architectures |
| **Canary token exfiltration guard** | [#2661](https://github.com/zeroclaw-labs/zeroclaw/pull/2661) | [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | @theonlyhennygod | Per-session injection detection for prompt security |
| **Native Telegram streaming** (`StreamMode::On`) | [#2569](https://github.com/zeroclaw-labs/zeroclaw/pull/2569) | [#2561](https://github.com/zeroclaw-labs/zeroclaw/issues/2561) | @theonlyhennygod | Uses Bot API 9.5 `sendMessageDraft` instead of polling workaround |
| **MCP HTTP session persistence** | [#2656](https://github.com/zeroclaw-labs/zeroclaw/pull/2656) | [#2638](https://github.com/zeroclaw-labs/zeroclaw/issues/2638) | @theonlyhennygod | Fixes Docker Desktop MCP Toolkit compatibility |
| **All-features Docker image** | [#2657](https://github.com/zeroclaw-labs/zeroclaw/pull/2657) | [#2628](https://github.com/zeroclaw-labs/zeroclaw/issues/2628) | @theonlyhennygod | GHCR image now includes compiled features previously missing |

### Reliability Fixes
- **Credential profile env resolution** stabilized with caching ([#2570](https://github.com/zeroclaw-labs/zeroclaw/pull/2570))
- **ClawHub URL detection** hardened against git fallback errors ([#2662](https://github.com/zeroclaw-labs/zeroclaw/pull/2662))
- **Cron model inheritance** fixed for custom endpoints ([#2660](https://github.com/zeroclaw-labs/zeroclaw/pull/2660))
- **Windows compilation** restored ([#2501](https://github.com/zeroclaw-labs/zeroclaw/pull/2501))

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement depth)

| Rank | Topic | Issue/PR | Comments | Analysis |
|------|-------|----------|----------|----------|
| 1 | **Web agent connection failures** | [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | 5 | CLI works, daemon fails — suggests runtime/daemon split architecture issue. Users blocked on S1 severity. |
| 2 | **Skills install failing** | [#2650](https://github.com/zeroclaw-labs/zeroclaw/issues/2650) | 4 | **CLOSED** — Git skill source errors even with ClawHub URLs. Fixed by [#2662](https://github.com/zeroclaw-labs/zeroclaw/pull/2662). |
| 3 | **Custom OpenAI endpoint model resolution** | [#2589](https://github.com/zeroclaw-labs/zeroclaw/issues/2589) | 3 | **CLOSED** — OpenWebUI/ollama integration gaps. Provider registry parity needed. |
| 4 | **Memory fact extraction architecture** | [#2641](https://github.com/zeroclaw-labs/zeroclaw/issues/2641) | 3 | **CLOSED** — Principal contributor @reidliu41 drove design. Shows community investment in long-term memory. |
| 5 | **Tool visibility scoping for multi-agent** | [#2651](https://github.com/zeroclaw-labs/zeroclaw/issues/2651) | 3 | **CLOSED** — Enterprise/orchestration use case emerging. |

**Underlying Needs**: 
- **Reliability over features**: Web/daemon stability is #1 pain point
- **Enterprise multi-agent patterns**: Tool filtering requests indicate production deployment needs
- **Memory persistence**: Users want session continuity without hitting compaction thresholds

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| **S0** — Data loss/security | [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) | **OPEN** | None | Raspberry Pi 3B+ cannot call tools — sandbox/security layer failure |
| **S1** — Workflow blocked | [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | **OPEN** | None | Web agent "Connection error. Attempting to reconnect..." — daemon runtime |
| **S1** — Workflow blocked | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | **OPEN** | None | `channel_ack_config` invalid schema — all providers fail |
| **S1** — Workflow blocked | [#2650](https://github.com/zeroclaw-labs/zeroclaw/issues/2650) | **CLOSED** | [#2662](https://github.com/zeroclaw-labs/zeroclaw/pull/2662) | Skills install git fallback error |
| **S1** — Workflow blocked | [#2562](https://github.com/zeroclaw-labs/zeroclaw/issues/2562) | **CLOSED** | [#2570](https://github.com/zeroclaw-labs/zeroclaw/pull/2570) | `http_request` credential_profile env-var access |
| **S1** — Workflow blocked | [#2638](https://github.com/zeroclaw-labs/zeroclaw/issues/2638) | **CLOSED** | [#2656](https://github.com/zeroclaw-labs/zeroclaw/pull/2656) | MCP HTTP transport missing `Mcp-Session-Id` |
| **S2** — Degraded | [#2665](https://github.com/zeroclaw-labs/zeroclaw/issues/2665) | **OPEN** | None | Memory web page React error on object category |
| **S2** — Degraded | [#2403](https://github.com/zeroclaw-labs/zeroclaw/issues/2403) | **OPEN** | None | Telegram photo duplication on first turn (anthropic-custom) |

**Regression Risk**: The Raspberry Pi S0 issue (#2600) suggests ARM/sandbox compatibility gaps that could affect edge deployment scenarios.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood v0.1.9 | Rationale |
|---------|-------|-------------------|-----------|
| **LM Studio native provider** | [#2669](https://github.com/zeroclaw-labs/zeroclaw/issues/2669) / [#2671](https://github.com/zeroclaw-labs/zeroclaw/pull/2671) | **HIGH** | PR already open; follows established OpenAiCompatibleProvider pattern |
| **LiteLLM provider alias** | [#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602) | **HIGH** | Principal contributor @reidliu41 filed; gateway/orchestration trend |
| **Matrix voice transcription** | [#2668](https://github.com/zeroclaw-labs/zeroclaw/issues/2668) | **MEDIUM** | Parity with Telegram/Discord; clear use case |
| **Webhook transforms** | [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | **MEDIUM** | Generic webhook usability blocker; needs design |
| **Semantic VectorDB guard** | [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | **MEDIUM** | Security roadmap item; canary token partial implementation |
| **SIGTERM graceful shutdown** | [#2652](https://github.com/zeroclaw-labs/zeroclaw/pull/2652) | **HIGH** | PR open; container/Kubernetes critical |
| **Telegram env var for `allowed_users`** | [#2601](https://github.com/zeroclaw-labs/zeroclaw/issues/2601) | **MEDIUM** | Security hygiene pattern; small scope |

**Emerging Theme**: Provider ecosystem expansion (LM Studio, LiteLLM) and container/enterprise hardening (SIGTERM, tool filtering) dominate roadmap signals.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Daemon/web runtime instability** | #2595, #2487, #2600 | Critical — blocks headless deployment |
| **Configuration complexity** | #2669 (LM Studio "messy"), #2589 (custom endpoints) | High — onboarding friction |
| **Security model gaps** | #2634 (open-skills supply chain), #2606 (granular shell approval) | High — enterprise blocker |
| **Platform compatibility** | #2501 (Windows), #2600 (Raspberry Pi) | Medium — limits deployment targets |

### Positive Signals
- **Memory persistence improvements** (#2641) — "finally works for short sessions"
- **Native Telegram streaming** (#2561) — eliminates polling workaround pain
- **MCP compatibility** (#2638) — Docker Desktop integration now works

### Use Case Evolution
Users are moving from personal CLI bots toward:
- **Multi-agent team orchestration** (tool filtering requests)
- **Containerized production deployment** (SIGTERM, all-features Docker image)
- **Local/edge AI stacks** (LM Studio, Raspberry Pi — though latter blocked)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Blocker | Action Needed |
|-------|-----|---------|---------------|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) Web agent connection | 1 day | S1 — no workaround | Runtime/daemon architecture review; 5 comments, no assignee |
| [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) Raspberry Pi tools | 1 day | S0 — security sandbox | ARM compatibility investigation; no assignee |
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) `channel_ack_config` schema | 2 days | S1 — all providers fail | Schema validation fix; no PR |
| [#2403](https://github.com/zeroclaw-labs/zeroclaw/issues/2403) Telegram photo duplication | 3 days | S2 — media handling | anthropic-custom provider specific; needs reproduction |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) Webhook transforms | 2 days | Enhancement — design needed | API design decision; 3 comments, stalled |

### Open PRs Requiring Review

| PR | Scope | Risk | Blocker |
|----|-------|------|---------|
| [#2671](https://github.com/zeroclaw-labs/zeroclaw/pull/2671) LM Studio provider | Provider | Medium | Size L — needs thorough review |
| [#2652](https://github.com/zeroclaw-labs/zeroclaw/pull/2652) SIGTERM handling | Daemon | Medium | Duplicate effort? #2670 also addresses sentinels |
| [#2670](https://github.com/zeroclaw-labs/zeroclaw/pull/2670) HEARTBEAT_OK suppression | Channels | Medium | Overlaps with #2653 — coordination needed |
| [#2653](https://github.com/zeroclaw-labs/zeroclaw/pull/2653) Sentinel suppression (broader) | Channels | Medium | Preferred fix? Needs maintainer call |

**Recommendation**: Prioritize #2595 and #2600 for v0.1.8 stable; consolidate sentinel suppression PRs (#2652/#2653/#2670) to avoid merge conflicts.

---

*Digest generated from 77 GitHub events (27 issues, 50 PRs) on 2026-03-04*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-04

## 1. Today's Overview

PicoClaw shows **extremely high community activity** with 107 issues and 239 PRs updated in the last 24 hours, indicating a rapidly maturing open-source AI agent project. The 203 open PRs against only 36 merged/closed suggests a potential bottleneck in maintainer review capacity. No new releases were published today. The project is experiencing growing pains around provider compatibility (especially Gemini 3 series and local LLMs), configuration management, and cross-platform deployment. Community demand for broader provider support, better documentation, and improved session management is driving most active discussions.

---

## 2. Releases

**No new releases** published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (36 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#433](https://github.com/sipeed/picoclaw/pull/433) | Fix agent persistence | **Stability** — Resolves state management issues |
| [#370](https://github.com/sipeed/picoclaw/pull/370) | Social Media Integration Guide | **Documentation** — Comprehensive platform setup docs |
| [#668](https://github.com/sipeed/picoclaw/pull/668) | Telegram command menu registration | **UX** — Users now see `/` command menu in Telegram |
| [#853](https://github.com/sipeed/picoclaw/pull/853) | Discord proxy support | **Enterprise** — SOCKS5/proxy environments now supported |
| [#951](https://github.com/sipeed/picoclaw/pull/951) | Feishu inbound image messages | **Feature** — Vision pipeline integration for Feishu |
| [#532](https://github.com/sipeed/picoclaw/pull/532) | Task scheduler fixes | **Bugfix** — Cron timing and duplicate execution resolved |
| [#783](https://github.com/sipeed/picoclaw/issues/783) | Model parser fix for `/` in names | **Bugfix** — OpenRouter namespaced models now work |

### Active Development Areas
- **Provider ecosystem expansion**: 6+ PRs adding MiniMax, Avian, Kimi/Moonshot, Opencode, Anthropic OAuth
- **Command infrastructure**: Major refactoring toward centralized command registry (#959, #960)
- **Configuration management**: `.env` file loading, environment variable overrides (#996)

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Core Need |
|:---|:---:|:---:|:---|
| [#190](https://github.com/sipeed/picoclaw/issues/190) Tutorial for Android installation | 10 | 0 | **Mobile deployment** — Users want edge/phone deployment guides |
| [#79](https://github.com/sipeed/picoclaw/issues/79) Gemini 3 Flash: missing `thought_signature` | 9 | 0 | **Provider compatibility** — Breaking API changes from Google |
| [#148](https://github.com/sipeed/picoclaw/issues/148) OpenClaw SKILL compatibility | 8 | 2 | **Ecosystem interoperability** — Skill/plugin portability |
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio easy connect | 8 | 1 | **Local LLM accessibility** — Simplified local model setup |
| [#297](https://github.com/sipeed/picoclaw/issues/297) Mantis Shrimp logo design | 7 | 0 | **Brand identity** — Community building (closed, design selected) |
| [#109](https://github.com/sipeed/picoclaw/issues/109) Ollama "no API key" error | 7 | 0 | **Local LLM configuration** — Confusion around keyless providers |

### Underlying Needs Analysis

| Pattern | Evidence | Implication |
|:---|:---|:---|
| **Local-first demand** | #75 (6👍), #28, #109, #425 | Strong user preference for self-hosted/private LLMs |
| **Provider fragility** | #79, #161, #127, #96 | Rapid provider API changes breaking integrations |
| **Mobile/edge deployment** | #190, #28 | Users want personal AI agents on phones, not just servers |
| **Skill ecosystem** | #148, #415 | Demand for reusable, shareable agent capabilities |

---

## 5. Bugs & Stability

### Critical/High Priority

| Issue | Severity | Status | Details |
|:---|:---:|:---|:---|
| [#79](https://github.com/sipeed/picoclaw/issues/79) Gemini 3 Flash `thought_signature` | **High** | Open | Function calls fail on latest Gemini 3 models; fix likely requires provider SDK update |
| [#161](https://github.com/sipeed/picoclaw/issues/161) Gemini 3 Pro/Flash mandatory thought signatures | **High** | Open | Duplicate/related to #79; multi-turn tool use broken |
| [#127](https://github.com/sipeed/picoclaw/issues/127) Windows Gemini "404 v1main" | **High** | Open | Native provider targeting deprecated endpoint; OpenAI bridge also fails |
| [#966](https://github.com/sipeed/picoclaw/issues/966) Qwen 3.5 empty content | **High** | Open | Thinking models return empty responses when reasoning consumes all tokens |
| [#116](https://github.com/sipeed/picoclaw/issues/116) Code quality audit (P0 bugs) | **High** | Open | Community audit found `skillsCmd()` duplicate definition, other issues |

### Configuration/Provider Bugs

| Issue | Severity | Fix PR? |
|:---|:---:|:---|
| [#109](https://github.com/sipeed/picoclaw/issues/109) Ollama "no API key" | Medium | #996 (env loading) may help |
| [#96](https://github.com/sipeed/picoclaw/issues/96) Z-ai/GLM4.7 key not recognized | Medium | None identified |
| [#66](https://github.com/sipeed/picoclaw/issues/66) `PICOCLAW_PROVIDERS_*` env vars broken | Medium | None identified — template parsing issue |
| [#288](https://github.com/sipeed/picoclaw/issues/288) Docker identity changes not persisting | Medium | None identified |

### Website/Security

| Issue | Severity | Status |
|:---|:---:|:---|
| [#1037](https://github.com/sipeed/picoclaw/issues/1037) Fraudulent nanoclaw.net link | **Critical** | Open — Active security issue, needs immediate fix |

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (active PRs exist)

| Feature | PR/Issue | Confidence |
|:---|:---|:---:|
| Centralized command registry | #959, #960, #572 | **High** — Core infrastructure refactor in progress |
| Session management (`/new`, `/clear`) | #572, #960 | **High** — Directly addresses user pain |
| `.env` file support | #996 | **High** — Merges configuration management improvements |
| Kimi/Moonshot/Opencode providers | #933, #1040 | **High** — Multiple PRs, clear demand |
| Anthropic OAuth | #926 | **Medium** — Enterprise auth pattern |
| Matrix channel | #356 | **Medium** — Federation/self-hosted demand |

### Medium-Term Signals

| Feature | Evidence | Blockers |
|:---|:---|:---|
| Multi-user support | #995 (4 comments) | Architecture — MEMORY.md and cronjobs are global |
| File send/receive in chat | #61 (5👍) | Channel-specific implementation complexity |
| WhatsApp support | #248 | Meta API access, policy compliance |
| Azure OpenAI | #260 | Enterprise feature, may need sponsor |
| User-configurable hooks | #738 | Design — needs event system architecture |
| Binary size optimization | #171 | Build system complexity |

### Ecosystem Integration

| Request | Issue | Strategic Value |
|:---|:---|:---|
| Open-Skills integration | #415 | 95-98% token reduction, skill marketplace |
| OpenClaw SKILL compatibility | #148 | Backward compatibility, migration path |

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Quote/Example | Frequency |
|:---|:---|:---:|
| **Configuration hell** | "I tried so many times to change soul.md... rebuild docker... remove volume" (#288) | High |
| **Provider setup confusion** | "no API key configured" errors despite keys being set (#96, #109) | High |
| **Windows as second-class** | Multiple Windows-specific bugs (#127, #425) | Medium |
| **Vague feedback** | "Memory threshold reached. Optimizing..." — no progress indication (#580) | Medium |
| **Session management** | "No way to start fresh without restarting process" (#572) | Medium |

### Use Cases (Positive/Constructive)

| Pattern | Evidence | Opportunity |
|:---|:---|:---|
| **Family/friend sharing** | #995 multi-user request | SaaS/hosted opportunity |
| **Android/phone deployment** | #190, #28 | Mobile edge AI market |
| **Local privacy-first** | #75 (6👍), Ollama issues | Privacy-conscious segment |
| **Developer tooling** | #39 `picoclaw doctor`, #197 Express server stuck | Developer experience focus |

### Satisfaction Indicators
- **Positive**: High engagement (107 issues, 239 PRs), creative community (#297 logo contest), active third-party ports (#425 Windows-x86)
- **Negative**: Configuration friction, provider breakage on updates, platform-specific rough edges

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>14 days old, high impact)

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#75](https://github.com/sipeed/picoclaw/issues/75) Ollama support documentation | 19 days | **User onboarding** | Official guide, resolve #109/#96 first |
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio easy connect | 21 days | **Local LLM adoption** | Simplified configuration or dedicated provider |
| [#61](https://github.com/sipeed/picoclaw/issues/61) File send/receive | 21 days | **Feature parity** | Channel abstraction design decision |
| [#66](https://github.com/sipeed/picoclaw/issues/66) Env var template bug | 21 days | **Configuration reliability** | Fix `caarlos0/env` integration or document limitation |
| [#171](https://github.com/sipeed/picoclaw/issues/171) Smaller binaries | 18 days | **Edge deployment** | Build tag system design |
| [#197](https://github.com/sipeed/picoclaw/issues/197) Bot stuck on long-running services | 18 days | **Tool execution** | Async/background task architecture |

### PR Review Bottleneck

| PR | Age | Risk |
|:---|:---:|:---|
| [#154](https://github.com/sipeed/picoclaw/pull/154) MiniMax provider | 18 days | Provider diversity |
| [#356](https://github.com/sipeed/picoclaw/pull/356) Matrix channel | 14 days | Federation support |
| [#440](https://github.com/sipeed/picoclaw/issues/440) Replace hard iteration limit | 14 days | Complex task reliability |

---

## Summary Assessment

| Metric | Status | Trend |
|:---|:---|:---:|
| Community engagement | Very High | ↑ |
| Code velocity | Moderate (36/239 PRs closed) | → |
| Release cadence | Stalled (no releases) | ↓ |
| Provider stability | Fragile | ↓ |
| Documentation | Improving | ↑ |
| Configuration UX | Painful | → |

**Recommendation**: Project would benefit from a maintainer focus on (1) clearing the provider compatibility backlog (Gemini 3, Ollama), (2) shipping a release with configuration improvements, and (3) establishing PR triage process to address the 203 open PR queue.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-04

## 1. Today's Overview

NanoClaw shows **high development velocity** with 26 PRs and 7 issues updated in the last 24 hours, though no new releases were cut. The project is actively expanding beyond its Claude-centric origins toward a **multi-runtime, multi-channel, multi-model** architecture—evidenced by PRs adding OpenAI/Gemini/Codex support, Bun runtime migration, and Feishu/Avian integrations. Community interest in the "skill marketplace" concept remains strong (#384, 13 👍). The maintainer team appears responsive with 10 PRs merged/closed today, including critical infrastructure improvements like Unix socket IPC replacing file-based polling.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (10 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#276](https://github.com/qwibitai/nanoclaw/pull/276) | Chrome browser skill via Docker sidecar | First persistent browser automation capability |
| [#677](https://github.com/qwibitai/nanoclaw/pull/677) | Configurable model selection + `/model` Telegram command | Runtime model switching with DB persistence |
| [#673](https://github.com/qwibitai/nanoclaw/pull/673) | *(implied closure)* Fix `hq-sync.sh` untracked files bug | Resolved git config edge case |
| [#161](https://github.com/qwibitai/nanoclaw/pull/161) | Bun runtime migration (superseded by #675) | Foundation for performance improvements |
| [#408](https://github.com/qwibitai/nanoclaw/pull/408) | Chinese README sync | Documentation i18n maintenance |
| [#327](https://github.com/qwibitai/nanoclaw/pull/327) | Third-party API endpoints in containers | Enables self-hosted/proxied Anthropic usage |
| [#667](https://github.com/qwibitai/nanoclaw/pull/667) | **Unix socket IPC replacing file polling** | Major latency/reliability improvement |
| [#644](https://github.com/qwibitai/nanoclaw/pull/644) | Multi-modal agent (voice, vision, file sending) | Telegram/Discord rich media support |
| [#674](https://github.com/qwibitai/nanoclaw/pull/674) | WebSockets channel (closed) | Channel infrastructure experiment |

**Key architectural shifts:** Unix sockets eliminate filesystem polling overhead; multi-modal support expands addressable use cases; runtime abstraction begins decoupling from Claude vendor lock-in.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#384](https://github.com/qwibitai/nanoclaw/issues/384) Skill marketplace/registry | 8 comments, 13 👍 | **Core differentiator thesis**: Community recognizes NanoClaw's "tiny auditable core + opt-in skills" as a security model vs. OpenClaw's monolithic approach. Request for discoverability/distribution mechanism. |
| [#664](https://github.com/qwibitai/nanoclaw/issues/664) NanoClaw vs. Claude Code comparison | 2 comments | Positioning confusion—users need clearer messaging on agentic capabilities (Agents.md, SOUL.md, TOOL.md support). |
| [#661](https://github.com/qwibitai/nanoclaw/issues/661) Community-built Web UI | 0 comments, but significant | @WhosClaw's derivative project signals unmet need for visual management layer. |

**Underlying needs:** (1) Skill discovery/distribution infrastructure, (2) clearer competitive positioning documentation, (3) official or blessed Web UI for non-technical users.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|:---|:---|:---|:---|
| [#669](https://github.com/qwibitai/nanoclaw/issues/669) Scheduled tasks run twice | **High** — duplicate user notifications | Open | [#657](https://github.com/qwibitai/nanoclaw/pull/657) (3-line atomic claim fix, ready) |
| [#673](https://github.com/qwibitai/nanoclaw/issues/673) `hq-sync` skips untracked files | Low — git config edge case | **Closed** | Merged |
| [#670](https://github.com/qwibitai/nanoclaw/pull/670) Claude rate limit drops requests | Medium — silent failures | Open | PR available with auto-retry logic |

**Critical:** #669 affects production reliability; #657 should be prioritized for merge. Rate limiting (#670) impacts cost-sensitive users.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Sender allowlist/gating** (#678) | @akshan-main | High — security-critical for group deployments |
| **Multi-runtime support** (#663) | @stakeswky | High — PR ready, unblocks Gemini/Codex users |
| **Bun runtime migration** (#675) | @jackbravo (rebase of #161) | Medium — performance gain, but migration risk |
| **Feishu/Lark channel** (#671) | @yefengr | Medium — enterprise China market |
| **Avian LLM provider** (#549) | @avianion | Medium — diversifies model options |
| **Composio 100+ integrations** (#545) | @bandepanu | Medium — ecosystem play via MCP |
| **Channel media support** (#676) | @k-fls | Medium — builds on #500 multi-channel work |

**Predicted v-next themes:** Runtime flexibility, enterprise access control, APAC market channels, performance (Bun).

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|:---|:---|:---|
| **Cost control in groups** | #678: "anyone can burn API tokens" | Frustrated — needs gating |
| **Silent failures** | #670: rate limits drop requests | Distrust — needs transparency |
| **Claude vendor lock-in** | #664, #663, #672, #677 | Anxious — wants options |
| **Mobile experience** | #603 (fixed) | Previously negative, now resolved |
| **Skill discoverability** | #384 | Enthusiastic but blocked |

**Use case expansion:** Family groups with children, work teams, China enterprise (Feishu), browser automation workflows.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#384](https://github.com/qwibitai/nanoclaw/issues/384) Skill marketplace | 10 days | High — core value proposition undefined | Maintainer response on scope/timeline |
| [#545](https://github.com/qwibitai/nanoclaw/pull/545) Composio integration | 6 days | Medium — large dependency | Review for MCP architecture alignment |
| [#569](https://github.com/qwibitai/nanoclaw/pull/569) Channel interactions skill | 4 days | Low — alternative to #676 | Consolidate with #676? |
| [#496](https://github.com/qwibitai/nanoclaw/pull/496) Things.app skill | 7 days | Low — niche | Merge or decline |

**Attention required:** #384 needs roadmap clarity; #657 (scheduler fix) is merge-ready and high-impact.

---

*Digest generated from GitHub activity 2026-03-03 to 2026-03-04.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-04

## 1. Today's Overview

IronClaw shows **high development velocity** with 44 items updated in 24 hours (15 issues, 29 PRs). The project is in active stabilization mode: 10 PRs merged/closed versus 19 remaining open, with a strong focus on bug fixes and testing infrastructure. Core contributors @zmanian, @henrypark133, and @PierreLeGuen are driving most activity. Notably, two critical bugs (#481, #482) were identified and fixed same-day, demonstrating responsive maintenance. The pending v0.14.0 release (#480) with breaking API changes suggests the project is approaching a significant milestone.

---

## 2. Releases

**No new releases published today.**

**Pending Release:** [PR #480 — v0.14.0](https://github.com/nearai/ironclaw/pull/480) is queued with **breaking API changes**:
- `constructible_struct_adds_field` warning: externally-constructible structs have new public fields
- Migration required for code using struct literals for affected types

---

## 3. Project Progress

### Merged/Closed PRs (10 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#502](https://github.com/nearai/ironclaw/pull/502) | @zmanian | Fix skill install using slug vs. display name for ClawHub download URL | **Fixes #482** — ghost DB records on failed installs |
| [#503](https://github.com/nearai/ironclaw/pull/503) | @zmanian | Thread document path through memory search results | **Fixes #481** — broken document links from search |
| [#411](https://github.com/nearai/ironclaw/pull/411) | @jrevillard | Replace `tokio::sync::RwLock` with `std::sync::RwLock` in MessageTool | Fixes runtime panic on message tool approval |
| [#500](https://github.com/nearai/ironclaw/pull/500) | @zmanian | Assign unique thread_id to manual routine triggers | Fixes #484 — output routing to wrong threads |
| [#497](https://github.com/nearai/ironclaw/pull/497) | @zmanian | Strip leaked `[Called tool ...]` text from agent responses | Fixes #487 — internal markers visible to users |
| [#505](https://github.com/nearai/ironclaw/pull/505) | @henrypark133 | Import custom workspace templates before seeding defaults | Custom templates now prioritized |
| [#506](https://github.com/nearai/ironclaw/pull/506) | @nickpismenkov | Remove Okta tool | Dependency cleanup |
| [#489](https://github.com/nearai/ironclaw/pull/489) | @henrypark133 | OAuth support for WASM tools in web gateway | **Major feature** — enables Google Calendar, Gmail OAuth flows |
| *(2 additional closed PRs)* | | | |

### Key Advances
- **Testing infrastructure**: [#507](https://github.com/nearai/ironclaw/pull/507) introduces `StubChannel`, gateway helpers, and tier-separated tests inspired by OpenClaw
- **WASM reliability**: [#478](https://github.com/nearai/ironclaw/pull/478) fixes Windows file lock errors; [#498](https://github.com/nearai/ironclaw/pull/498) adds parameter type coercion for LLM string inputs
- **Error transparency**: [#490](https://github.com/nearai/ironclaw/pull/490) displays failed tool call details in UI with sensitive value redaction

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#467 Trajectory benchmark system](https://github.com/nearai/ironclaw/issues/467) | 2 comments | **Strategic priority**: @zmanian proposing real-world agent evaluation with hard assertions + LLM-as-judge. Signals need for production readiness metrics. |
| [#410 Cropped UI - Tablet](https://github.com/nearai/ironclaw/issues/410) | 1 comment | Responsive design gap affecting tablet users — accessibility/usability concern. |
| [#459 Missing docker images](https://github.com/nearai/ironclaw/issues/459) | 1 comment | Deployment friction — `ironclaw-worker:latest` image availability blocking users. |

**Underlying needs**: (1) **Quality assurance infrastructure** — the benchmark proposal (#467) and testing PRs (#507, #442) show investment in reliability; (2) **Deployment ergonomics** — Docker image issues suggest CI/CD gaps; (3) **Multi-device UX** — tablet support indicates growing user base beyond desktop.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#482](https://github.com/nearai/ironclaw/issues/482) Ghost DB records on skill install failure | **Fixed** | [#502](https://github.com/nearai/ironclaw/pull/502) |
| 🔴 **High** | [#481](https://github.com/nearai/ironclaw/issues/481) Memory search links to chunk UUID not document path | **Fixed** | [#503](https://github.com/nearai/ironclaw/pull/503) |
| 🟡 **Medium** | [#494](https://github.com/nearai/ironclaw/issues/494) Embedding dimension error (768 vs 1536) | Open | None — needs libSQL schema flexibility or config validation |
| 🟡 **Medium** | [#495](https://github.com/nearai/ironclaw/issues/495) Memory hygiene error on AFK | Open | None — race condition in cleanup pass |
| 🟡 **Medium** | [#486](https://github.com/nearai/ironclaw/issues/486) WASM rejects numeric parameters as JSON strings | **Fix pending** | [#498](https://github.com/nearai/ironclaw/pull/498) |
| 🟡 **Medium** | [#487](https://github.com/nearai/ironclaw/issues/487) Raw `[Called tool ...]` text on failures | **Fixed** | [#497](https://github.com/nearai/ironclaw/pull/497) |
| 🟡 **Medium** | [#484](https://github.com/nearai/ironclaw/issues/484) Manual routine output to wrong thread | **Fixed** | [#500](https://github.com/nearai/ironclaw/pull/500) |
| 🟡 **Medium** | [#485](https://github.com/nearai/ironclaw/issues/485) Job restart failure shows no UI error | Open | None |
| 🟡 **Medium** | [#483](https://github.com/nearai/ironclaw/issues/483) Routine "Run Now" no UI feedback | Open | None |
| 🟢 **Low** | [#504](https://github.com/nearai/ironclaw/issues/504) Google Calendar WASM tool bugs | Open | Related to [#489](https://github.com/nearai/ironclaw/pull/489) OAuth work |

**Regression risk**: The embedding dimension mismatch (#494) and memory hygiene race (#495) could affect data integrity. No fixes yet.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.15+ |
|:---|:---|:---|
| **Trajectory benchmark system** | [#467](https://github.com/nearai/ironclaw/issues/467) | **High** — @zmanian authored, aligns with testing investment |
| **OpenClaw-inspired testing architecture** | [#466](https://github.com/nearai/ironclaw/issues/466), [#507](https://github.com/nearai/ironclaw/pull/507) | **High** — PR in progress |
| **Slack HMAC-SHA256 webhook validation** | [#492](https://github.com/nearai/ironclaw/issues/492) | **Medium** — security hardening, pattern exists for Telegram/Discord |
| **Venice.ai LLM provider** | [#451](https://github.com/nearai/ironclaw/pull/451) | **Medium** — community contribution, provider expansion trend |
| **Anthropic prompt caching** | [#291](https://github.com/nearai/ironclaw/pull/291) | **Medium** — performance optimization, PR open since Feb 21 |
| **NPA psychographic profiling** | [#321](https://github.com/nearai/ironclaw/pull/321) | **Medium** — personalization feature, large PR |
| **Tool-level retry with backoff** | [#357](https://github.com/nearai/ironclaw/pull/357) | **Medium** — reliability feature, PR open |
| **WhatsApp Cloud API full support** | [#403](https://github.com/nearai/ironclaw/pull/403) | **Medium** — enterprise channel, comprehensive PR |

---

## 7. User Feedback Summary

### Pain Points
| Issue | User | Core Problem |
|:---|:---|:---|
| [#459](https://github.com/nearai/ironclaw/issues/459) | @JeremyHutchings | **Deployment blocker**: Missing Docker images prevent job restart |
| [#494](https://github.com/nearai/ironclaw/issues/494) | @PolBlanco | **Configuration trap**: Embedding dimension mismatch breaks vector search |
| [#495](https://github.com/nearai/ironclaw/issues/495) | @PolBlanco | **Reliability**: Background memory cleanup fails during idle periods |
| [#504](https://github.com/nearai/ironclaw/issues/504) | @henrypark133 | **Integration fragility**: Google Calendar WASM tools partially broken |
| [#410](https://github.com/nearai/ironclaw/issues/410) | @henrypark133 | **UX gap**: Tablet layout unusable |

### Positive Signals
- **Responsive fixes**: Same-day resolution of #481, #482 demonstrates maintainers prioritize data integrity bugs
- **OAuth completion**: [#489](https://github.com/nearai/ironclaw/pull/489) unblocks Google Workspace integrations — major enterprise use case

### Satisfaction Assessment
**Mixed**: Core functionality stabilizing rapidly, but deployment/configuration friction persists. Users with non-standard setups (768-dim embeddings, tablet devices, custom Docker) hit edge cases.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#291 Anthropic prompt caching](https://github.com/nearai/ironclaw/pull/291) | 13 days | **Medium** | Review — large PR (XL), performance-critical |
| [#321 NPA psychographic profiling](https://github.com/nearai/ironclaw/pull/321) | 9 days | **Medium** | Review — feature flag evaluation? |
| [#357 Tool-level retry](https://github.com/nearai/ironclaw/pull/357) | 7 days | **Low** | Review — reliability infrastructure |
| [#403 WhatsApp Cloud API](https://github.com/nearai/ironclaw/pull/403) | 5 days | **Medium** | Review — enterprise channel completeness |
| [#442 26 new tests](https://github.com/nearai/ironclaw/pull/442) | 3 days | **Low** | Merge after #411 (now closed) — ready |

**Maintainer attention needed**: The Anthropic caching PR (#291) and NPA profiling (#321) are substantial features at risk of bit-rot. Consider prioritizing or requesting rebase to prevent merge conflicts with v0.14.0 breaking changes.

---

*Digest generated from 44 GitHub items on 2026-03-04. Project health: **Active development, stabilizing, approaching release milestone**.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-04

## 1. Today's Overview

LobsterAI shows **high community activity** with 30 issues and 9 PRs updated in the last 24 hours, indicating an engaged user base actively stress-testing the platform. The project demonstrates **strong maintenance velocity** with 11 issues closed and 7 PRs merged/closed, though 19 issues remain open with several critical stability concerns. A notable pattern emerges: **sandbox functionality** dominates both bug reports and fixes, suggesting this core feature is undergoing rapid iteration but remains fragile. Memory management on macOS and Windows compatibility issues are emerging as significant pain points. No new release was published today, leaving users on v0.1.23/0.1.24 with known regressions.

---

## 2. Releases

**No new releases** (v0.1.24 remains latest as of 2026-03-03).

---

## 3. Project Progress

### Merged/Closed PRs Today (7 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#238](https://github.com/netease-youdao/LobsterAI/pull/238) | **Fix: Windows sandbox VM startup, attachments, and image issues** — Resolves QEMU file lock conflicts, Alpine OpenRC boot sequence, agentd service dependencies, and attachment path handling | **Critical stability fix** for Windows sandbox users; addresses root cause of multiple filed issues |
| [#236](https://github.com/netease-youdao/LobsterAI/pull/236) | Fix: Issue #195 (email invoice search) | Resolves email skill failing on specific sender domains |
| [#233](https://github.com/netease-youdao/LobsterAI/pull/233) | **Feat: MCP support** | Major protocol expansion enabling Model Context Protocol integration |
| [#222](https://github.com/netease-youdao/LobsterAI/pull/222) | Feat: Math formula rendering (KaTeX + remark-math) | UX enhancement for STEM/educational use cases |
| [#229](https://github.com/netease-youdao/LobsterAI/pull/229) | Optimize config: fix IM config save bug, email settings UI flash; add ToS and log export | Polishes core settings reliability |
| [#228](https://github.com/netease-youdao/LobsterAI/pull/228) | Fix: Support real-time Xiaomifeng account changes | Enterprise auth flexibility |
| [#216](https://github.com/netease-youdao/LobsterAI/pull/216) | Fix: Windows packaging skill dependency install failure | Build pipeline reliability |

**Key Advancement:** MCP support (#233) positions LobsterAI for broader AI ecosystem integration. The comprehensive Windows sandbox fix (#238) suggests maintainers are prioritizing cross-platform parity.

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Activity | Core Need |
|:---|:---|:---|
| [#3](https://github.com/netease-youdao/LobsterAI/issues/3) Sandbox auto-download wrong version | 7 comments, 1 👍 | **Architecture confusion**: M1/M2 Macs receiving x86_64 VMs instead of ARM64; users need transparent platform detection |
| [#205](https://github.com/netease-youdao/LobsterAI/issues/205) Latest version still won't install? | 6 comments | **Installation reliability**: Persistent upgrade failures causing data loss anxiety |
| [#37](https://github.com/netease-youdao/LobsterAI/issues/37) Web search capability disabled | 3 comments | **Capability transparency**: Users don't understand why WebFetch/WebSearch are blocked by "app policy" — need clearer feature gating communication |
| [#191](https://github.com/netease-youdao/LobsterAI/issues/191) API Error after multiple turns in single session | 2 comments | **Conversation state management**: Tool call/response pairing failures in long sessions |

**Underlying Pattern:** Users are hitting **opaque system boundaries** — whether architectural (VM selection), policy-based (web search), or stateful (API errors). The project needs better error surfacing and proactive capability documentation.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#232](https://github.com/netease-youdao/LobsterAI/issues/232) | macOS v0.1.23 memory spike → system freeze; suspected sandbox-related | **Open**, no PR |
| 🔴 **Critical** | [#239](https://github.com/netease-youdao/LobsterAI/issues/239) | Fresh Windows 10 install: "Claude Code process exited with code 1" on any query | **Open**, no PR |
| 🟡 **High** | [#191](https://github.com/netease-youdao/LobsterAI/issues/191), [#243](https://github.com/netease-youdao/LobsterAI/issues/243) | API Error 400: assistant `tool_calls` missing corresponding tool messages | **Open**, no PR; appears regression in conversation handling |
| 🟡 **High** | [#245](https://github.com/netease-youdao/LobsterAI/issues/245) | Ollama model calls consistently interrupt/error | **Open**, no PR; user notes local OpenClaw works fine |
| 🟡 **High** | [#244](https://github.com/netease-youdao/LobsterAI/issues/244) | macOS input latency (M2 Max) — typing卡顿 across all IMEs | **Open**, no PR |
| 🟡 **High** | [#231](https://github.com/netease-youdao/LobsterAI/issues/231) | Built-in Python unavailable in new versions | **Open**, no PR |
| 🟢 **Medium** | [#241](https://github.com/netease-youdao/LobsterAI/issues/241) | Telegram group: multi-user indistinguishable, replies to all messages not just @mentions | **Open**, no PR |
| 🟢 **Medium** | [#242](https://github.com/netease-youdao/LobsterAI/issues/242) | Feishu messages lack status icons, no real-time echo | **Open**, no PR |

**Regression Alert:** Multiple users report [#191](https://github.com/netease-youdao/LobsterAI/issues/191)/[#243](https://github.com/netease-youdao/LobsterAI/issues/243) — conversation breakdown after several turns — suggesting a state management bug introduced in recent versions.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release |
|:---|:---|:---|
| **Context compression** | [#227](https://github.com/netease-youdao/LobsterAI/issues/227) | High — explicit gap identified, affects core usability |
| **IM session management** (start new session via IM) | [#179](https://github.com/netease-youdao/LobsterAI/issues/179) | Medium — enterprise/team use case |
| **Workflow enhancement** (multi-agent with soul.md, PASS/REJECT routing) | [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | Medium — PR open, needs review; complex feature |
| **Stepfun provider** (Step 3.5 Flash) | [#237](https://github.com/netease-youdao/LobsterAI/pull/237) | High — PR ready, standard provider addition |
| **OAuth for OpenAI** | [#189](https://github.com/netease-youdao/LobsterAI/issues/189) | Low — closed without resolution, may resurface |
| **Skill persistence fix** (sandbox `/home/ubuntu/skills/` cleared on restart) | [#234](https://github.com/netease-youdao/LobsterAI/issues/234) | High — data loss bug, user provided detailed analysis |

**Predicted v0.1.25:** Context compression (#227), Stepfun provider (#237), skill persistence fix (#234), and continued sandbox hardening.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Evidence | Severity |
|:---|:---|:---|
| **Data loss anxiety** | "训练的话术全部丢失了" (#246); skills vanish on sandbox restart (#234) | Critical trust issue |
| **Upgrade trauma** | "覆盖安装" failures forcing complete reinstalls (#205, #246) | Adoption barrier |
| **Platform inconsistency** | Windows users feel second-class: Cygwin forced dependency (#202), bash-only skills | Market expansion risk |
| **Sandbox fragility** | File access issues (#125, #78, #213, #141, #91, #50) — "路径拼接不对" | Core feature reliability |
| **Memory/performance** | "内存飙升，容易卡死" (#232); input latency (#244) | macOS user retention risk |

### Satisfaction Signals
- Users actively comparing to **OpenClaw** (#186, #245) — favorable comparisons on memory/stability suggest LobsterAI's value proposition is recognized when it works
- Enthusiasm for **MCP support** (#233 merge) indicates technical users see long-term potential

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#37](https://github.com/netease-youdao/LobsterAI/issues/37) Web search disabled | 11 days | **Capability confusion** — users don't understand policy vs. bug | Document policy; clarify if configurable |
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) Poor memory vs. OpenClaw | 4 days | **Competitive positioning** | Investigate memory implementation differences |
| [#202](https://github.com/netease-youdao/LobsterAI/issues/202) Windows bash/Cygwin dependency | 1 day | **Platform accessibility** | Evaluate PowerShell-native skill alternative |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) Workflow enhancement PR | 0 days | **Community contribution** | Maintainer review for architectural fit |

**Maintainer Attention Recommended:** The workflow enhancement PR (#240) represents significant community investment in multi-agent orchestration — timely review would signal contributor relationship health.

---

*Digest generated from GitHub activity 2026-03-03. All links verified against netease-youdao/LobsterAI repository.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-04

## 1. Today's Overview

TinyClaw shows **high development velocity** with 4 active issues, 5 PRs (4 open, 1 merged), and 2 patch releases in the last 24 hours. The project is actively stabilizing its core messaging infrastructure—particularly Telegram reliability—while expanding AI provider integrations. Community engagement is moderate with focused technical discussions around provider diversity and deployment stability. The rapid iteration on polling fixes (v0.0.9 hotfix following v0.0.8) indicates responsive maintenance but also suggests ongoing production rough edges.

---

## 2. Releases

### [v0.0.9](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.9) — Critical Hotfix
- **Fix**: Prevented Telegram polling restart loop after laptop sleep/wifi reconnection
- **Root cause**: `stopPolling()` was not awaited, causing orphaned polling loops to compete with new ones, triggering cascading 409 conflicts
- **Migration**: No breaking changes; immediate upgrade recommended for all Telegram users

### [v0.0.8](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.8) — Feature Release
- **Features**:
  - In-chat `/restart` command across Discord, Telegram, and WhatsApp channels
  - `tinyclaw-admin` skill registration
  - Polling watchdog and recovery for Telegram client

---

## 3. Project Progress

### Merged/Closed Today

| PR | Author | Summary |
|:---|:---|:---|
| [#153](https://github.com/TinyAGI/tinyclaw/pull/153) | @mokizzz | **Team member management** — adds `team add-agent`/`team remove-agent` commands, fixes stale team references on agent removal with safe leader reassignment/empty-team deletion |

### Active Development (Open PRs)
- [#159](https://github.com/TinyAGI/tinyclaw/pull/159): Cursor CLI provider integration (4th AI provider)
- [#155](https://github.com/TinyAGI/tinyclaw/pull/155): Telegram auto-reconnect hardening (complements v0.0.9)
- [#154](https://github.com/TinyAGI/tinyclaw/pull/154): Security hardening — removes plaintext logs, Chromium sandbox enforcement
- [#150](https://github.com/TinyAGI/tinyclaw/pull/150): OpenViking plugin continuation (rebased)

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#124](https://github.com/TinyAGI/tinyclaw/issues/124) — More provider support | **4 comments**, 0 👍 | **Highest engagement**. Core tension: users hitting Claude Code API quotas with multi-agent workflows. Requested: z.ai, Kimi, OpenCode.zen, OpenRouter. Signals demand for **cost/availability diversification** beyond current Anthropic/OpenAI/OpenCode trio. |
| [#159](https://github.com/TinyAGI/tinyclaw/pull/159) — Cursor CLI provider | New PR | Direct response to provider diversity demand; leverages existing Cursor subscriptions |

**Underlying need**: Users want **provider abstraction** to avoid single-vendor lock-in and quota bottlenecks. The "more providers" theme appears across issues #124, #157 (GitHub Copilot SDK), #158 (ClawRouter), and PR #159.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | **macOS startup race condition**: All channel/queue processes exit immediately on `tinyclaw start` (zsh shell init race). tmux session survives but panes return to shell prompt. | **No fix PR** — needs immediate maintainer attention |
| 🟡 **High** | v0.0.9 release / [#155](https://github.com/TinyAGI/tinyclaw/pull/155) | Telegram polling instability after network interruptions | **Fixed in v0.0.9**, additional hardening in #155 |
| 🟡 **Medium** | [#154](https://github.com/TinyAGI/tinyclaw/pull/154) | Security gaps: plaintext message content in logs, Chromium sandbox disabled by default | **Fix PR open** |

**Assessment**: The macOS race condition (#156) is a **deployment blocker** for a significant user segment. The Telegram fixes show responsive maintenance, but platform-specific shell initialization issues suggest broader cross-platform testing gaps.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|:---|:---|:---|
| **Cursor CLI provider** | [#159](https://github.com/TinyAGI/tinyclaw/pull/159) | **High** — PR open, clean integration pattern |
| **z.ai, Kimi, OpenRouter providers** | [#124](https://github.com/TinyAGI/tinyclaw/issues/124) | **Medium-High** — high user demand, may follow Cursor pattern |
| **GitHub Copilot SDK integration** | [#157](https://github.com/TinyAGI/tinyclaw/issues/157) | **Medium** — strategic (instant provider coverage), but SDK dependency |
| **ClawRouter implementation** | [#158](https://github.com/TinyAGI/tinyclaw/issues/158) | **Unclear** — links to external project, may be research spike |
| **Team management hardening** | [#153](https://github.com/TinyAGI/tinyclaw/pull/153) | **Shipped** — merged |

**Prediction**: v0.1.0 likely to include Cursor provider (#159) and possibly one additional provider from #124, with continued Telegram stability improvements.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **API quota anxiety** | [#124](https://github.com/TinyAGI/tinyclaw/issues/124) | 😤 Frustrated — Claude Code quotas limit multi-agent scaling |
| **Deployment fragility** | [#156](https://github.com/TinyAGI/tinyclaw/issues/156), v0.0.9 hotfix | 😟 Concerned — macOS and network recovery issues block reliable operation |
| **Provider flexibility desire** | [#124](https://github.com/TinyAGI/tinyclaw/issues/124), [#157](https://github.com/TinyAGI/tinyclaw/issues/157), [#159](https://github.com/TinyAGI/tinyclaw/pull/159) | 😊 Engaged — active participation in shaping roadmap |
| **Security consciousness** | [#154](https://github.com/TinyAGI/tinyclaw/pull/154) | ✅ Appreciative — community contributing hardening fixes |

**Key pain point**: Users with existing AI subscriptions (Cursor, GitHub Copilot) want to **leverage sunk costs** rather than pay for additional Claude Code quotas. TinyClaw's value proposition strengthens with each provider added.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#156](https://github.com/TinyAGI/tinyclaw/issues/156) — macOS race condition | **1 day** (but critical) | 🔴 **Deployment blocker** | Maintainer reproduction + fix; consider CI matrix for macOS/zsh |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) — OpenViking continuation | **4 days** | 🟡 Stale rebase | Review if #149 hardening conflicts resolved; may need re-rebase |
| [#124](https://github.com/TinyAGI/tinyclaw/issues/124) — Provider diversity | **14 days** | 🟡 Roadmap input | Maintainer response on prioritization; community PR encouragement |

**Note**: No truly long-unanswered items (>30 days), indicating healthy maintainer responsiveness. The macOS issue (#156) requires urgent attention despite its recency due to severity.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-04

## 1. Today's Overview

CoPaw shows **high community activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a rapidly maturing open-source AI assistant framework. The project released v0.0.5-beta.1 with critical vLLM embedding and provider configuration fixes. A significant portion of activity centers on **multi-platform deployment challenges** (Windows virtual environments, Docker persistence, GGUF local model loading) and **enterprise messaging integrations** (DingTalk, Feishu, QQ). The maintainer team is responsive with 15/35 issues closed, though 22 open PRs suggest a healthy but backlogged contribution pipeline. Notably, first-time contributors are actively submitting localization (French, Japanese) and security features, signaling growing global adoption.

---

## 2. Releases

### v0.0.5-beta.1 (2026-03-03)
| PR | Change | Author |
|:---|:---|:---|
| [#396](https://github.com/agentscope-ai/CoPaw/pull/396) | Version bump to 0.0.5b1 | @xieyxclack |
| [#383](https://github.com/agentscope-ai/CoPaw/pull/383) | **[Bugfix]** Add vLLM embedding support | @jinliyl |
| [#377](https://github.com/agentscope-ai/CoPaw/pull/377) | **[Bugfix]** Persist `providers.json` under sibling `SECRET_DIR` | @fancyboi999 |

**Migration Notes:** Users with custom provider configurations in Docker should verify `SECRET_DIR` mounting to prevent config loss on restart (addresses [#80](https://github.com/agentscope-ai/CoPaw/issues/80)).

---

## 3. Project Progress

### Merged/Closed PRs (28 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#390](https://github.com/agentscope-ai/CoPaw/pull/390) | Preserve thinking content as text for better summaries | Fixes memory compaction for reasoning models |
| [#390](https://github.com/agentscope-ai/CoPaw/pull/390) | Refactor: `TimestampedDashScopeChatFormatter` simplification | Closes [#388](https://github.com/agentscope-ai/CoPaw/issues/388) (partial) |

### Active Development Areas
- **Memory system refactor**: [#528](https://github.com/agentscope-ai/CoPaw/pull/528) updates memory management architecture
- **Security hardening**: [#284](https://github.com/agentscope-ai/CoPaw/pull/284) adds skill scanner with YARA rules and static analysis
- **Voice channels**: [#38](https://github.com/agentscope-ai/CoPaw/pull/38) introduces Twilio voice with Cloudflare tunnel support
- **Authentication**: [#519](https://github.com/agentscope-ai/CoPaw/pull/519) adds basic Web UI login (addresses [#492](https://github.com/agentscope-ai/CoPaw/issues/492))

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | Core Need |
|:---|:---|:---:|:---|
| 1 | [#61](https://github.com/agentscope-ai/CoPaw/issues/61) Windows virtual environment initialization failure | 15 | **Cross-platform reliability** — Windows users blocked from basic setup |
| 2 | [#414](https://github.com/agentscope-ai/CoPaw/issues/414) `ClosedResourceError` in agent query handler | 11 | **Runtime stability** — MCP client registration failures |
| 3 | [#423](https://github.com/agentscope-ai/CoPaw/issues/423) GGUF model loading failure | 9 | **Local AI deployment** — llama.cpp integration gaps |
| 4 | [#91](https://github.com/agentscope-ai/CoPaw/issues/91) QQ bot not responding | 7 | **Channel reliability** — Callback/polling mechanism issues |
| 5 | [#510](https://github.com/agentscope-ai/CoPaw/issues/510) DingTalk crashes on long messages | 6 | **Enterprise scalability** — Context length handling |

### Underlying Pattern
**Chinese enterprise messaging ecosystem dominance**: 4 of top 5 issues involve DingTalk, Feishu, or QQ integration—indicating CoPaw's primary adoption vector is enterprise automation in China, with stability demands exceeding current architectural limits.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#414](https://github.com/agentscope-ai/CoPaw/issues/414) | `ClosedResourceError` crashes agent runtime | Closed — root cause MCP client lifecycle |
| 🔴 **Critical** | [#388](https://github.com/agentscope-ai/CoPaw/issues/388) [#507](https://github.com/agentscope-ai/CoPaw/issues/507) | Kimi 2.5 / DeepSeek-reasoner `reasoning_content` missing after tool calls | **Open** — PR [#158](https://github.com/agentscope-ai/CoPaw/pull/158) in progress |
| 🟡 **High** | [#510](https://github.com/agentscope-ai/CoPaw/issues/510) | DingTalk 400 error on >131K tokens | Open — needs context truncation strategy |
| 🟡 **High** | [#400](https://github.com/agentscope-ai/CoPaw/issues/400) | DingTalk image messages break conversation | Open — `image_url` variant handling |
| 🟡 **High** | [#148](https://github.com/agentscope-ai/CoPaw/issues/148) | Gemini 3 `thought_signature` missing | Open — Google API schema change |
| 🟢 **Medium** | [#505](https://github.com/agentscope-ai/CoPaw/issues/505) | "Answer has been stopped" requires restart | Open — state machine bug |
| 🟢 **Medium** | [#497](https://github.com/agentscope-ai/CoPaw/issues/497) | Chat session state lost on navigation | Open — frontend state management |

**Regression Alert**: [#511](https://github.com/agentscope-ai/CoPaw/issues/511) reports duplicate skills after v0.0.4 upgrade—data migration issue.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Multi-Agent Orchestration Gateway** | [#508](https://github.com/agentscope-ai/CoPaw/issues/508) | Medium | Fundamental architecture shift; high community demand but complex |
| **Human-in-the-Loop** | [#415](https://github.com/agentscope-ai/CoPaw/issues/415) | High | Inherited from AgentScope framework; core differentiator |
| **Web UI Authentication** | [#492](https://github.com/agentscope-ai/CoPaw/issues/492) → [#519](https://github.com/agentscope-ai/CoPaw/pull/519) | **Very High** | PR already submitted; security baseline for production |
| **File upload/download in Console** | [#509](https://github.com/agentscope-ai/CoPaw/issues/509) | Medium | Blocked by multimodal infrastructure; depends on [#400](https://github.com/agentscope-ai/CoPaw/issues/400) resolution |
| **Natural language cron input** | [#238](https://github.com/agentscope-ai/CoPaw/pull/238) | Medium | UX polish; PR ready with dual regex+LLM strategy |
| **Telegram CLI configuration** | [#529](https://github.com/agentscope-ai/CoPaw/pull/529) | **Very High** | PR submitted; completes channel parity |
| **Skill security scanner** | [#284](https://github.com/agentscope-ai/CoPaw/pull/284) | High | Enterprise readiness; addresses supply chain concerns |

---

## 7. User Feedback Summary

### Pain Points 😤
| Theme | Evidence | Quote/Example |
|:---|:---|:---|
| **Windows hostile** | [#61](https://github.com/agentscope-ai/CoPaw/issues/61), [#484](https://github.com/agentscope-ai/CoPaw/pull/484) | "虚拟环境里，copaw无法初始化" — silent failure, no `.copaw` folder |
| **Docker state ephemeral** | [#80](https://github.com/agentscope-ai/CoPaw/issues/80) | Custom configs lost on restart |
| **Reasoning model incompatibility** | [#388](https://github.com/agentscope-ai/CoPaw/issues/388), [#507](https://github.com/agentscope-ai/CoPaw/issues/507) | DeepSeek/Kimi tool calls crash workflow |
| **MCP "black box"** | [#501](https://github.com/agentscope-ai/CoPaw/issues/501) | "模型不知道怎么使用MCP！！！一直在尝试使用浏览器工具" |
| **No graceful shutdown** | [#478](https://github.com/agentscope-ai/CoPaw/issues/478) | "除了kill -9 外，好像没有找到stop的命令" |

### Positive Signals 😊
- **Localization enthusiasm**: French, Japanese, Chinese documentation contributions
- **Enterprise adoption**: Heavy DingTalk/Feishu/QQ integration demand
- **Security consciousness**: Skill scanning feature requested and contributed

### Competitive Benchmark
> "The application you've developed is too difficult to use; it's not even as good as NetEase's LobsterAI." — [#231](https://github.com/agentscope-ai/CoPaw/issues/231)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>3 days, high impact)

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#280](https://github.com/agentscope-ai/CoPaw/issues/280) | 2 days | **Architecture decision** | Define built-in Skills/MCP policy—blocking ecosystem growth |
| [#372](https://github.com/agentscope-ai/CoPaw/issues/372) | 2 days | **Data loss** | Config auto-rewrite blocks local LLM access |
| [#231](https://github.com/agentscope-ai/CoPaw/issues/231) | 3 days | **Onboarding failure** | llama.cpp documentation gap—user abandoned |

### Stalled PRs

| PR | Status | Blocker |
|:---|:---|:---|
| [#158](https://github.com/agentscope-ai/CoPaw/pull/158) | Open | Critical fix for reasoning models—needs review |
| [#38](https://github.com/agentscope-ai/CoPaw/pull/38) | Open | Twilio voice—large feature, may need rebase |
| [#373](https://github.com/agentscope-ai/CoPaw/pull/373) | Open | Dynamic MCP persistence—core reliability fix |

---

**Project Health**: 🟡 **Active but strained** — High contribution velocity with maintainer bandwidth constraints. Priority should be reasoning model compatibility ([#158](https://github.com/agentscope-ai/CoPaw/pull/158)) and Windows installation robustness ([#484](https://github.com/agentscope-ai/CoPaw/pull/484)) to reduce onboarding friction.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-04

---

## 1. Today's Overview

ZeptoClaw experienced **exceptionally high development velocity** on 2026-03-03 with **14 merged/closed PRs** and **7 closed issues** against only **4 open issues** and **3 open PRs**. The project demonstrates a clear **milestone push pattern** — multiple major features (taint tracking, MCP server mode, OpenAI-compatible API, loop guard upgrades, kernel refactoring) were all landed in a single day. This suggests either a coordinated release preparation or intensive sprint activity. All open items are dependency bumps or documentation clarifications, indicating **strong codebase stability** with no critical blockers in flight.

---

## 2. Releases

**No new releases** — despite significant feature landings, no version tag was cut. The merged features (MCP server, OpenAI API compatibility, taint tracking) appear to be accumulating on main branch pending a future release.

---

## 3. Project Progress

### Major Features Landed

| PR | Feature | Impact |
|:---|:---|:---|
| [#241](https://github.com/qhkm/zeptoclaw/pull/241) / [#240](https://github.com/qhkm/zeptoclaw/pull/240) / [#239](https://github.com/qhkm/zeptoclaw/pull/239) / [#234](https://github.com/qhkm/zeptoclaw/pull/234) | **Taint tracking for data-flow safety** | Type-level provenance tracking with auto-tainting, PII detection, shell/network sink blocking — positions ZeptoClaw as security-first agent framework |
| [#233](https://github.com/qhkm/zeptoclaw/pull/233) | **MCP server mode** | Bidirectional MCP: ZeptoClaw can now *provide* tools to Claude Desktop, VS Code, Cursor (previously only consumed MCP servers) |
| [#236](https://github.com/qhkm/zeptoclaw/pull/236) | **Upgraded loop guard** | Multi-layer detection (ping-pong patterns, outcome-aware blocking, graduated responses) — addresses core agent reliability pain point |
| [#235](https://github.com/qhkm/zeptoclaw/pull/235) | **OpenAI-compatible API** | Drop-in `/v1/chat/completions` replacement — massive adoption surface unlock |
| [#224](https://github.com/qhkm/zeptoclaw/pull/224) | **Thin kernel extraction** | ~700-line subsystem assembly refactored into `ZeptoKernel::boot()` — architectural foundation for future extensibility |
| [#214](https://github.com/qhkm/zeptoclaw/pull/214) | **SearXNG web search** | Self-hosted search option alongside Brave/DuckDuckGo — privacy/decentralization play |

### Infrastructure & Maintenance
- [#183](https://github.com/qhkm/zeptoclaw/pull/183): Comprehensive dependency update with supply chain security improvements (pinning, Dependabot cooldowns)
- 4 Dependabot PRs merged (clap, futures, @types/node, rust Docker image)

---

## 4. Community Hot Topics

**No high-engagement items** — all merged issues/PRs have **0-1 comments and 0 reactions**. This indicates:

- **Maintainer-driven development**: @qhkm authored 10 of 14 closed PRs and all 7 closed issues
- **Low external contributor activity**: Only @superhero75 filed a feature request (#196, now closed), @reneleonhardt contributed #183
- **Silent consensus**: Features merged without debate suggests either (a) strong architectural vision with pre-alignment, or (b) limited community review bandwidth

**Most substantive open discussion**: [#238](https://github.com/qhkm/zeptoclaw/issues/238) — Docker/act test mismatch investigation, though currently 0 comments.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **P2-high** | [#238](https://github.com/qhkm/zeptoclaw/issues/238) | **OPEN** | Docker/act environment produces test failures for `providers::plugin` and `tools::binary_plugin` tests — local runs pass. **No fix PR yet.** |
| P3-normal | [#237](https://github.com/qhkm/zeptoclaw/issues/237) | **OPEN** | Documentation gap: screenshot feature behavior confusing (`--features screenshot` = web capture, not desktop; routing ambiguity with `agent -m`) |

**Assessment**: No critical crashes or regressions. The Docker test mismatch is the only stability risk — suggests environment sensitivity in plugin system that could affect CI reliability.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood in Next Release |
|:---|:---|:---|:---|
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) — Per-template capability sandbox | P3-normal | Security hardening, template system extension | **High** — natural extension of today's taint tracking and kernel refactoring |
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) — Merkle hash-chain audit trail | P3-normal | Compliance/enterprise trust signal | **Medium** — "tamper-evident audit trail" is marketing-differentiated but complex |
| [#223](https://github.com/qhkm/zeptoclaw/issues/223) — Thin kernel Phases 1-2 | (was P2-high) | **COMPLETED** via [#224](https://github.com/qhkm/zeptoclaw/pull/224) | — |

**Emerging pattern**: Security-first positioning (taint tracking → sandboxed templates → audit trails) suggests ZeptoClaw is targeting **enterprise/regulated environments** where data lineage and access control are table stakes.

---

## 7. User Feedback Summary

**Limited direct user feedback in dataset** — all issues/PRs are maintainer-authored or automated. Inferred signals:

| Source | Pain Point/Need | Evidence |
|:---|:---|:---|
| #196 (external request) | Self-hosted search for unlimited/privacy-preserving usage | SearXNG integration merged |
| #237 | CLI feature discoverability | Screenshot behavior confusion |
| #238 | Developer experience — reproducible builds/tests | Docker/act mismatch |

**Satisfaction indicators**: Rapid feature delivery (SearXNG requested 2026-02-28, merged 2026-03-02/03).  
**Dissatisfaction risk**: Test environment fragility may frustrate contributors.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#238](https://github.com/qhkm/zeptoclaw/issues/238) Docker test mismatch | 1 day | **Medium** — CI instability | Reproduction steps, environment parity investigation |
| [#237](https://github.com/qhkm/zeptoclaw/issues/237) Screenshot docs | 1 day | Low — UX friction | Documentation PR |
| [#228](https://github.com/qhkm/zeptoclaw/pull/228), [#229](https://github.com/qhkm/zeptoclaw/pull/229), [#232](https://github.com/qhkm/zeptoclaw/pull/232) gog-* dependency bumps | 1 day | Low — automated | Merge or close (likely blocked on upstream) |

**No long-neglected items** — project shows healthy issue/PR turnover. The 3 open gog-* dependency PRs may indicate upstream coordination needed.

---

## Health Assessment

| Dimension | Score | Rationale |
|:---|:---|:---|
| Development velocity | ⭐⭐⭐⭐⭐ | 14 merges in 24h, major features landed |
| Code quality | ⭐⭐⭐⭐☆ | Test environment sensitivity (-1) |
| Community engagement | ⭐⭐☆☆☆ | Maintainer-dominated, low external participation |
| Security posture | ⭐⭐⭐⭐⭐ | Taint tracking, sandboxing, audit trail planning |
| Release readiness | ⭐⭐⭐⭐☆ | Features accumulated, awaiting version cut |

**Overall**: ZeptoClaw is in **active feature maturation** with strong technical direction but would benefit from broadening contributor base and resolving CI test parity before next release.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-04

## 1. Today's Overview

EasyClaw shows **moderate maintenance activity** with two patch releases (v1.5.15 and v1.5.16) published within 24 hours, suggesting rapid iteration on installation/packaging issues. No open issues or PRs remain, indicating effective issue resolution. The project appears stable with active maintainer responsiveness—both recent issues were closed within one day of their last update. However, the release notes pattern (identical macOS Gatekeeper warnings across consecutive versions) hints at ongoing code-signing challenges for macOS distribution. Overall project health: **stable with packaging friction**.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [v1.5.16](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.16) | 2026-03-03 | Installation documentation update; identical macOS Gatekeeper guidance as v1.5.15 |
| [v1.5.15](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.15) | 2026-03-03 | Installation documentation update; macOS unsigned app workaround instructions |

**Analysis:** Two consecutive patch releases with identical release notes suggest either:
- Attempted fix of packaging/signing pipeline (failed)
- Documentation-only iterations while code remains unchanged
- Release automation triggering on non-code changes

**Breaking Changes:** None  
**Migration Notes:** Windows users upgrading via installer should **back up configurations** before updating (see Issue #6 below).

---

## 3. Project Progress

**No PRs merged or closed today.**

Progress is entirely issue-driven:
- Two user-reported bugs resolved through direct maintainer intervention (no PR workflow visible)
- Release pipeline active but may need attention for macOS code-signing

---

## 4. Community Hot Topics

### Most Active: Feishu (Lark) Integration Failure
- **[Issue #5: 连接飞书不成功](https://github.com/gaoyangz77/easyclaw/issues/5)** — 11 comments, CLOSED
  - **Problem:** Whitelist configuration loop—user adds IP to Feishu whitelist, system still rejects
  - **Underlying Need:** Clearer Feishu bot configuration workflow, possibly automated webhook validation or better error messaging
  - **Signal:** Enterprise/China-market users actively adopting; integration UX is friction point

### Configuration Persistence on Windows Upgrade
- **[Issue #6: 1.5.13→1.5.14升级配置丢失](https://github.com/gaoyangz77/easyclaw/issues/6)** — 3 comments, CLOSED
  - **Problem:** Windows installer reset all user data/configurations on version upgrade
  - **Underlying Need:** Reliable migration path for Windows users; installer should preserve `%APPDATA%` or equivalent

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| 🔴 **High** | [#6](https://github.com/gaoyangz77/easyclaw/issues/6) Windows installer wipes user data on upgrade | **CLOSED** | Unknown—no PR linked; likely fixed in v1.5.15+ |
| 🟡 **Medium** | [#5](https://github.com/gaoyangz77/easyclaw/issues/5) Feishu integration authentication loop | **CLOSED** | Unknown—configuration guidance likely provided |
| 🟡 **Medium** | macOS Gatekeeper blocking (unsigned app) | **ONGOING** | Workaround documented; no signed release yet |

**Regression Alert:** Issue #6 marks a **data-loss regression** in the v1.5.14 release—critical for user trust even if now resolved.

---

## 6. Feature Requests & Roadmap Signals

**Inferred from closed issues:**

| Signal | Likely Priority | Rationale |
|--------|---------------|-----------|
| **Code-signed macOS builds** | High | Repeated release notes workarounds indicate user friction; enterprise adoption blocker |
| **Feishu integration wizard** | Medium | Most commented issue; China-market differentiation |
| **Windows installer migration preservation** | High | Data-loss bug now fixed, but validation needed |
| **Configuration backup/restore** | Medium | Would mitigate upgrade risks |

**Next Version Prediction:** v1.5.17 likely focuses on signed macOS builds or Windows installer hardening.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Upgrade anxiety (Windows)** | Issue #6: "被归零重新开始" (reset to zero) | High emotional impact |
| **Enterprise integration friction** | Issue #5: 11-comment thread on Feishu whitelist | Adoption blocker |
| **macOS trust/security UX** | Repeated Gatekeeper warnings in releases | First-run friction |

### Use Cases Emerging
- **China enterprise users:** Feishu/Lark integration for team workflows
- **Cross-platform individual users:** Windows primary, macOS secondary
- **Version-loyal upgraders:** Long-term users (1.5.10→1.5.13) expecting seamless migration

### Satisfaction Signals
- Rapid issue closure (<24h response)
- Bilingual support (Chinese/English documentation)

### Dissatisfaction Signals
- Data loss on upgrade erodes trust
- Unsigned macOS builds feel unprofessional

---

## 8. Backlog Watch

**No critical backlog items identified** — all recent issues closed promptly.

**Monitoring recommendations:**
- Watch for recurrence of Issue #6 pattern in future Windows releases
- Track if Feishu integration issues resurface (may indicate deeper API/auth problem)
- Monitor if unsigned macOS releases continue beyond v1.5.16

---

*Digest generated from GitHub data: 2 issues closed, 2 releases published, 0 PRs active — 2026-03-04*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*