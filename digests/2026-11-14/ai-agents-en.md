# OpenClaw Ecosystem Digest 2026-11-14

> Issues: 325 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-14 02:39 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-14**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 325 issues and 500 pull requests updated in the last 24 hours—indicating strong community engagement and ongoing development momentum. A significant number of high-severity bugs (P0/P1) are actively being triaged, particularly around session stability, memory management, authentication flows, and cross-platform reliability (especially Windows and macOS). While no new releases have been published, a robust pipeline of fixes and enhancements is progressing through review and merge stages, suggesting imminent updates are likely.

---

### **2. Releases**  
*No new releases were published today.*  
The latest stable version remains `v2026.11.3`, which includes improvements to update validation, plugin catalog handling, and session recovery. Operators should note that recent regressions (e.g., #191847, #193094) may affect deployments on this version, particularly under heavy load or during managed updates.

---

### **3. Project Progress**  
**Merged PRs (Today):**  
- ✅ **[PR #183168](https://github.com/openclaw/openclaw/pull/183168)**: Fixes MCP discovery misalignment between session agent and UI, preventing `FORBIDDEN` errors during session switching.  
- ✅ **[PR #183166](https://github.com/openclaw/openclaw/pull/183166)**: Resolves missing data avatars in session views by fixing `/avatar/<id>` URL routing.  
- ✅ **[PR #182079](https://github.com/openclaw/openclaw/pull/182079)**: Adds explicit "Replace" button for sensitive config fields in Control UI, improving credential management UX.  
- ✅ **[PR #182598](https://github.com/openclaw/openclaw/pull/182598)**: Enables first reply during app discovery by resolving early thread lease conflicts.  
- ✅ **[PR #182977](https://github.com/openclaw/openclaw/pull/182977)**: Ensures persisted user request is retained in `agent_end` observations for accurate audit logging.  
- ✅ **[PR #179611](https://github.com/openclaw/openclaw/pull/179611)**: Cleans up failed temporary plugin trees after build failures, reducing disk clutter.  
- ✅ **[PR #192128](https://github.com/openclaw/openclaw/pull/192128)**: Refocuses input field after rejected wizard step, improving form usability.  
- ✅ **[PR #193599](https://github.com/openclaw/openclaw/pull/193599)**: Prevents main-agent auth usage from leaking into inherited recordings post-store migration.  
- ✅ **[PR #181776](https://github.com/openclaw/openclaw/pull/181776)**: Corrects diagnostics to distinguish subscription blocks from cooldowns in `models status`.  
- ✅ **[PR #183251](https://github.com/openclaw/openclaw/pull/183251)**: Improves Android metadata refresh failure feedback by separating concerns.  
- ✅ **[PR #176264](https://github.com/openclaw/openclaw/pull/176264)**: Stops false Telegram first-time setup warnings in multi-account configurations.

These merges reflect a focus on **UI consistency**, **session integrity**, **security hygiene**, and **user experience refinement** across platforms.

---

### **4. Community Hot Topics**  
The most active and discussion-rich issues highlight systemic challenges in **reliability**, **cross-platform compatibility**, and **core architectural bottlenecks**:

- 🔥 **[Issue #170956](https://github.com/openclaw/openclaw/issues/170956)** – *Windows startup & update unreliability*: 32 comments; P0 severity due to crash-loop and schtasks permission issues. This indicates deep-rooted Windows deployment pain, especially in managed-service environments.
- 🔥 **[Issue #119720](https://github.com/openclaw/openclaw/issues/119720)** – *Synchronous persistence blocks event loop at scale*: 26 comments; critical impact on performance under load. Suggests a fundamental architectural constraint in agent runtime design.
- 🔥 **[Issue #191847](https://github.com/openclaw/openclaw/issues/191847)** – *Large sessions cause SQLite worker OOM crashes*: 11 comments; regression from 2026.9.7. High-risk for long-lived sessions and production use.
- 🔥 **[Issue #193094](https://github.com/openclaw/openclaw/issues/193094)** – *Managed update hangs for 57 minutes before SIGKILL*: 11 comments; UX-release-blocker. Indicates serious update validation logic flaws.

These top issues reveal a growing pressure on **system resilience**, **resource efficiency**, and **deployment predictability**—particularly in enterprise-like, long-running setups.

---

### **5. Bugs & Stability**  
High-priority stability issues reported today include:

| Severity | Issue ID | Summary | Status | Fix PR? |
|--------|---------|--------|--------|--------|
| **P0** | [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows restarts fail due to slow startup, unclean shutdown, and schtasks permissions | Open | ❌ No |
| **P0** | [#193094](https://github.com/openclaw/openclaw/issues/193094) | Managed update hangs 57 min → SIGKILL | Open | ❌ No |
| **P1** | [#191847](https://github.com/openclaw/openclaw/issues/191847) | Large session kills 512MB SQLite worker → "admission closed" | Open | ❌ No |
| **P1** | [#181120](https://github.com/openclaw/openclaw/issues/181120) | macOS Gateway freezes due to blocked MessagePort close | Open | ❌ No |
| **P1** | [#182369](https://github.com/openclaw/openclaw/issues/182369) | Gateway RSS grows ~0.1 GiB/h off-heap until restart | Open | ❌ No |

These represent **critical stability risks** affecting core workflows. The absence of fix PRs suggests these are either complex or require deeper architectural rework.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests show strong demand for **customization**, **security control**, and **platform parity**:

- 📌 **[Feature #192009](https://github.com/openclaw/openclaw/issues/192009)** – Explicit authorization for cross-provider cron fallbacks (e.g., OpenAI → xAI). Likely to be prioritized as automation reliability grows.
- 📌 **[Feature #170997](https://github.com/openclaw/openclaw/issues/170997)** – Add CJK bigram tokenizer for memory FTS. High relevance for non-English users; could be included in next v2026.12.
- 📌 **[Feature #164620](https://github.com/openclaw/openclaw/issues/164620)** – Disable hosted plugin catalog feed. Critical for air-gapped or privacy-focused deployments.
- 📌 **[Feature #197739](https://github.com/openclaw/openclaw/pull/197739)** – Allow custom member roles via `gateway.roles.definitions`. Signals desire for fine-grained access control beyond `operator`/`viewer`.

These suggest the roadmap will evolve toward **enterprise-grade security**, **multilingual support**, and **configurable autonomy**.

---

### **7. User Feedback Summary**  
Users report consistent pain points across multiple dimensions:

- **Platform-specific instability**: Windows and macOS users face frequent crashes, hangs, and silent failures (e.g., #170956, #181120).
- **Session reliability**: Long-lived sessions suffer from memory leaks (#182369), message loss (#155119), and context corruption.
- **UX friction**: Missing chat composers in Safari (#195192), broken avatar rendering, and opaque error messages reduce trust.
- **Security & control gaps**: Users want more granular control over auth, model fallbacks, and plugin behavior.
- **Cross-tool inconsistency**: Silent drops (e.g., Telegram callback payloads #126950), failed approvals (#138528), and incomplete diagnostics frustrate debugging.

Despite these issues, the community remains engaged—evidenced by high comment counts and detailed repros—suggesting strong investment in the platform’s success.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues remain unresolved and require maintainer attention:

- ⏳ **[Issue #119720](https://github.com/openclaw/openclaw/issues/119720)** – Synchronous persistence blocking event loop at scale. Critical for scalability; needs architectural review.
- ⏳ **[Issue #170956](https://github.com/openclaw/openclaw/issues/170956)** – Windows reliability issues. P0, but no fix PR yet despite 32 comments.
- ⏳ **[Issue #191847](https://github.com/openclaw/openclaw/issues/191847)** – Memory overflow in large sessions. Regression with no fix path identified.
- ⏳ **[Issue #195192](https://github.com/openclaw/openclaw/issues/195192)** – Safari chat composer missing. Simple but impactful UI bug.
- ⏳ **[PR #163267](https://github.com/openclaw/openclaw/pull/163267)** – Same-channel thread recall without full visibility. Approved but pending maintainer review.

These items represent **bottlenecks in adoption and trust**, especially for enterprise and international users. Immediate maintainer triage is recommended.

---

> ✅ **Project Health Snapshot**: High activity, strong community participation, but growing technical debt in core stability and platform parity. Urgent attention needed on P0/P1 bugs and backlog triage to maintain momentum.  
> 🔗 [GitHub Repository](https://github.com/openclaw/openclaw) | [Issue Tracker](https://github.com/openclaw/openclaw/issues) | [Pull Requests](https://github.com/openclaw/openclaw/pulls)

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-14**

---

### **1. Ecosystem Overview**  
The open-source personal AI agent landscape in late 2026 is characterized by rapid innovation, increasing focus on security and operational control, and growing maturity in agent runtime architectures. Projects are diverging in specialization—ranging from holistic assistant platforms (OpenClaw, QwenPaw) to zero-trust execution environments (ZeroClaw), with Hermes Agent emerging as a security-hardened, modular agent framework. Despite differing technical approaches, all projects share a common trajectory: moving beyond basic automation toward enterprise-grade reliability, auditability, and cross-platform consistency.

---

### **2. Activity Comparison**  

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score* |
|--------|------------------|----------------|----------------|---------------|
| **OpenClaw** | 325 | 500 | No new release | ⭐⭐⭐⭐☆ (High) |
| **Hermes Agent** | 50 | 50 | Canary release (`v0.23.1+canary`) | ⭐⭐⭐⭐☆ (High) |
| **QwenPaw** | 17 | 35 | No new release | ⭐⭐⭐⭐☆ (High) |
| **ZeroClaw** | 9 | 50 | No new release | ⭐⭐⭐☆☆ (Medium) |
| **IronClaw** | 0 | 0 | — | ⭐☆☆☆☆ (Low) |

> *Health Score: Based on activity level, stability signals, backlog triage urgency, and community engagement (1–5 stars).*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most **active and feature-rich** player in the ecosystem, with the highest volume of issues and PRs—indicating broad user adoption and deep engineering involvement. Its technical approach centers on **session integrity**, **cross-platform reliability**, and **UI/UX refinement**, distinguishing it from peers focused on security isolation (ZeroClaw) or modularity (Hermes). Compared to QwenPaw’s channel-centric design and ZeroClaw’s zero-trust model, OpenClaw prioritizes **end-to-end user experience**, making it ideal for power users and developers seeking a unified, production-ready assistant platform. Community size appears largest, evidenced by high comment counts on top-tier issues (e.g., #170956: 32 comments).

---

### **4. Shared Technical Focus Areas**  
Multiple projects converge on critical infrastructure needs:

- **Session & State Management**:  
  - OpenClaw (#182369): Off-heap RSS growth; large session OOM crashes  
  - QwenPaw (#8710, #8725): Per-conversation session binding and model switching failures  
  - ZeroClaw (#12421): Cron jobs lack session-key scope → no prompt-cache affinity  
  → *Need: Scoped, persistent session states across channels and workflows.*

- **Security Hardening & Credential Control**:  
  - OpenClaw (#193599): Auth leakage post-migration  
  - Hermes Agent (#87779): Session search leaks across boundaries  
  - ZeroClaw (#12408, #12402): Scoped HTTP/TLS credential management  
  → *Need: Operator-controlled, write-only secrets with strict access boundaries.*

- **Cross-Platform Reliability**:  
  - OpenClaw (#170956, #181120): Windows/macOS startup and update hangs  
  - QwenPaw (#8720): WeChat bot conflicts due to state mismanagement  
  - ZeroClaw (#12150): macOS sandboxing regex issue blocking file access  
  → *Need: OS-specific runtime handling with consistent failure modes.*

- **Deployment Flexibility**:  
  - QwenPaw (#8719): Base-path deployment support  
  - ZeroClaw (#12417): WASM plugin wake dispatch via ADR-016 exception  
  → *Need: Configurable, reverse-proxy-friendly deployments.*

---

### **5. Differentiation Analysis**  

| Project | Feature Focus | Target Users | Technical Architecture |
|-------|--------------|-------------|------------------------|
| **OpenClaw** | Unified UI, session stability, multi-platform UX | Power users, teams, developers building assistants | Monolithic + plugin-based; strong focus on persistence and recovery |
| **Hermes Agent** | Security-first, extensible voice/audio, Kanban workflows | Devs, privacy-conscious users, team collaborators | Modular, actor-based; RFC-driven architecture |
| **QwenPaw** | Channel integration (WeChat, DingTalk), plugin extensibility | Enterprise integrators, messaging-heavy workflows | Gateway-centric; rich plugin lifecycle and CLI tooling |
| **ZeroClaw** | Zero-trust execution, MITM egress proxies, scoped credentials | Air-gapped environments, compliance-sensitive orgs | Sandboxed, operator-controlled runtime; ADR-driven security model |
| **IronClaw** | — | — | — (No recent activity) |

> **Key Differentiator**: ZeroClaw is the only project actively designing **network-level containment** (MITM proxy RFC) and **non-leaking credential orchestration**, positioning it as the leading choice for high-security deployments.

---

### **6. Community Momentum & Maturity**  

| Tier | Project(s) | Characteristics |
|------|------------|-----------------|
| **Rapid Iteration** | OpenClaw, QwenPaw, Hermes Agent | High PR/issue volume, frequent fixes, active RFCs, strong feedback loops |
| **Stabilizing / Mature** | ZeroClaw | Slower but deliberate progress; emphasis on architectural rigor, security reviews, and consensus-driven decisions |
| **Stagnant / At Risk** | IronClaw | No activity in 24 hours; potential risk of abandonment if not reactivated |

> OpenClaw and QwenPaw show signs of **production-scale maturity**, while Hermes Agent and ZeroClaw are in **pre-stable, security-consolidation phases**. IronClaw remains an outlier with no visible momentum.

---

### **7. Trend Signals**  
Based on community feedback and PR patterns, key industry trends emerge:

- **Zero-Trust Execution is Becoming Standard**: Projects like ZeroClaw and Hermes Agent are prioritizing **non-leaking secrets**, **scoped credentials**, and **MITM proxies**—indicating that trustless agent operation is no longer optional for serious deployments.
  
- **Session Fidelity is a Critical UX Requirement**: Across OpenClaw, QwenPaw, and ZeroClaw, recurring bugs around session scoping, model binding, and cache affinity highlight that users demand **predictable, isolated conversations**—especially in multi-user or cron-driven contexts.

- **Channel Integration Demands Consistency**: WeChat, Telegram, and Slack integration issues reveal a need for **unified session semantics across messaging platforms**, suggesting future frameworks will prioritize abstraction layers over per-channel hacks.

- **Developer Experience Drives Adoption**: Plugin CLI support (QwenPaw #8554), theme extension points (QwenPaw #8071), and ADRs (ZeroClaw) signal that **tooling maturity** is now as important as core functionality.

> ✅ **Value for Developers**: These projects collectively provide a **rich ecosystem of security, customization, and integration patterns**—ideal for building scalable, auditable AI agents. Prioritizing projects with active RFCs and structured backlogs (e.g., ZeroClaw, Hermes) ensures long-term viability.

---

> **Final Recommendation**: For **enterprise-grade, secure agent platforms**, invest in **ZeroClaw** and **Hermes Agent**. For **user-facing, production-ready assistants**, **OpenClaw** and **QwenPaw** lead in usability and extensibility. Monitor **IronClaw** closely—if inactive beyond 30 days, consider de-risking dependencies.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-14**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust community engagement and ongoing development momentum. The release of `v0.23.1+canary.20261113T064447Z` signals a focus on iterative improvements and stability testing ahead of a potential stable v0.24 release. A significant number of PRs center on security hardening (especially around credential exposure, file access controls, and redaction), reflecting an intensified emphasis on trust and data protection. The high volume of open issues suggests a growing feature backlog and active user-driven innovation, while closed items confirm strong triage discipline.

---

### **2. Releases**  
**New Release**: [`v0.23.1+canary.20261113T064447Z`](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261113T064447Z)  
- **Release Date**: November 13, 2026  
- **Type**: Canary build (pre-stable)  
- **Key Highlights**:  
  - Includes multiple security fixes from the *Sec-Marathon-2026-11-13* initiative (e.g., credential masking, file preview guards, URL redaction).  
  - Addresses critical vulnerabilities in dashboard, gateway, and CLI tooling related to secret leakage and unbounded file reads.  
  - No breaking changes reported; intended for testing and feedback before mainline integration.  
- **Download Options**: macOS Apple Silicon (M-series) DMG available via [hermes-assets.nousre](https://hermes-assets.nousre) (link incomplete but functional).

> 🔗 [View full release notes](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261113T064447Z)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today)**: 1  
- ✅ **[PR #155432]**: `fix(plugins): a linked plugin gets an update hint that works, not adopt`  
  - Resolves confusion in plugin management when using symbolic links. Now correctly prompts users to `pull` updates instead of failing with "resolves outside plugins directory".  
  - Improves usability for developers managing external plugin checkouts.

**Notable Closed Issues (Today)**:  
- 🛡️ **[Issue #77111]**: *RFC: RealtimeVoiceProvider ABC interface design* — High-impact architectural decision made after four competing duplex voice PRs; now prioritizing an abstract base class + orchestrator pattern.  
- 🔒 **[Issue #87779]**: *session_search tool lacks ownership scoping* — Security fix implemented; now respects chat/profile boundaries to prevent cross-session transcript leaks.  
- ⚠️ **[Issue #155310]**: *cron restart-safe adoption fails under load* — Already addressed by PRs in progress; likely resolved in this canary build.

---

### **4. Community Hot Topics**  
Top 3 most commented issues reflect deep user concerns:

1. **[Issue #77111] RFC: RealtimeVoiceProvider ABC**  
   - **Comments**: 29 | **Link**: [GitHub #77111](https://github.com/nousresearch/hermes-agent/issues/77111)  
   - **Analysis**: Multiple competing voice integration PRs have stalled due to lack of a unified interface. This issue is a catalyst for API standardization—users want real-time audio without fragmentation. Indicates demand for extensible, modular voice systems.

2. **[Issue #135487] cron: database is locked on restart-safe worker**  
   - **Comments**: 12 | **Link**: [GitHub #135487](https://github.com/nousresearch/hermes-agent/issues/135487)  
   - **Analysis**: Critical reliability bug affecting scheduled tasks. Users report lost executions during system restarts—high severity for production use cases. Closely tied to **[Issue #155310]** (same root cause), suggesting urgency.

3. **[Issue #149025] Auto-generated session title is mojibake for Turkish text**  
   - **Comments**: 3 | **Link**: [GitHub #149025](https://github.com/nousresearch/hermes-agent/issues/149025)  
   - **Analysis**: Localization pain point. Non-Latin script support is still fragile. Highlights need for better Unicode handling across UI surfaces (Telegram, Desktop, TUI).

---

### **5. Bugs & Stability**  
**High-Priority Bugs (P1/P2)**:  
| Issue | Severity | Status | Fix PR? | Description |
|------|----------|--------|---------|-------------|
| [#135487](https://github.com/nousresearch/hermes-agent/issues/135487) | P1 | Open | ❌ | Cron worker exits on `database is locked`, losing execution. |
| [#155310](https://github.com/nousresearch/hermes-agent/issues/155310) | P2 | Open | ⚠️ | Same as above—under load, restart-safe adoption fails silently. |
| [#146835](https://github.com/nousresearch/hermes-agent/issues/146835) | P3 | Open | ❌ | Image follow-ups queued instead of steering active turn in `busy_input_mode: steer`. |

**Stability Signals**:  
- Repeated `sqlite3.OperationalError: database is locked` errors suggest concurrency bottlenecks in persistent storage layer.  
- Multiple PRs (e.g., #155427, #155428) are addressing file I/O bounds and atomicity—indicating underlying infrastructure fragility.

---

### **6. Feature Requests & Roadmap Signals**  
Top feature requests reveal emerging user needs:

- **Voice & Audio Integration**  
  - [Issue #77111] → *RealtimeVoiceProvider ABC interface*  
    - Signal: Strong demand for standardized, pluggable voice providers (TTS, duplex voice). Likely candidate for v0.24.
  - [Issue #153488] → *Allow desktop plugins to register engines in native voice picker*  
    - User desire: Seamless integration of third-party voice tools (e.g., Synero Live Voice) into core UI.

- **User Interface & UX Enhancements**  
  - [Issue #112877] → *Configurable max width for inline ::preview frames*  
    - Signal: Users building dashboards/data visualizations need flexible layout control.
  - [Issue #146873] → *Document Slack’s native Markdown block option*  
    - Signal: Platform-specific documentation gaps hinder adoption.

- **Advanced Configuration & Control**  
  - [Issue #100944] → *Kanban: deny worker create/link per profile*  
    - Signal: Need for granular permission models in team environments.

> 📌 **Predicted Inclusion in v0.24**: Realtime voice abstraction, configurable preview frame width, and improved Kanban role isolation.

---

### **7. User Feedback Summary**  
- **Satisfaction**: High praise for the canary release cycle and transparency in security fixes (e.g., redaction improvements).  
- **Pain Points**:  
  - **Security fatigue**: Users report frequent credential leaks despite redaction features—suggests over-reliance on post-hoc fixes.  
  - **Workflow friction**: Plugin linking, config editing, and session resumption (e.g., clarify cards showing answers) degrade user experience.  
  - **Platform inconsistency**: Telegram titles corrupt in non-Latin scripts; image handling differs across gateways.  
- **Use Cases**:  
  - Developers using Hermes as a local AI agent for coding (LSP, terminal tools).  
  - Teams deploying Kanban workflows with profile-based access.  
  - Power users integrating custom skills and voice agents.

---

### **8. Backlog Watch**  
Critical long-standing or under-resourced issues requiring maintainer attention:

| Issue | Link | Status | Why It Matters |
|------|------|--------|----------------|
| [Issue #77111] | [GitHub #77111](https://github.com/nousresearch/hermes-agent/issues/77111) | Open | Core architectural decision needed to resolve voice provider chaos. Blocks future voice integrations. |
| [Issue #155365] | [GitHub #155365](https://github.com/nousresearch/hermes-agent/issues/155365) | Open | Plugin install bypasses version checks—security risk on outdated hosts. |
| [Issue #154951] | [GitHub #154951](https://github.com/nousresearch/hermes-agent/issues/154951) | Open | Config rewrite skips managed-key checks—could allow privilege escalation. |
| [Issue #154944] | [GitHub #154944](https://github.com/nousresearch/hermes-agent/issues/154944) | Open | A2A server accepts negative Content-Length—potential DoS vector. |

> 🔔 **Recommendation**: Prioritize **#77111** and **#154944**—both represent systemic risks that could undermine trust if unresolved.

---

**Final Assessment**:  
Hermes Agent is in a phase of **intensive security hardening and architectural consolidation**, driven by both user demand and proactive threat modeling. While stability and UX remain areas of concern, the project demonstrates strong health through high contributor activity, clear roadmap signals, and rapid response to vulnerabilities. With v0.23.1+canary stabilizing core components, the path toward v0.24 appears promising—provided the current backlog of foundational issues receives timely attention.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-14**

---

### **1. Today's Overview**  
QwenPaw exhibits strong community engagement with 35 new pull requests and 17 open issues updated in the past 24 hours, indicating active development and real-world usage challenges. The project remains stable with no new releases, but a surge of critical bug fixes—especially around model gateway failures, WeChat channel instability, and token tracking—suggests ongoing focus on production reliability. Feature momentum is evident in plugin extensibility, console customization, and session management enhancements. Overall, QwenPaw demonstrates robust health: high contributor activity, targeted issue triage, and clear alignment between user needs and engineering priorities.

---

### **2. Releases**  
*No new releases were published today.*  
The latest version remains **v2.3.0** (released 2026-11-11). No breaking changes or migration notes are currently required. Users should expect future updates to include improvements to plugin lifecycle handling, channel stability (e.g., Matrix, WeChat), and enhanced session control—particularly for cron jobs and messaging channels.

---

### **3. Project Progress**  
Several key PRs were merged or closed today, advancing core functionality:

- ✅ **PR #8729** ([fix(hub): expose request_headers on AnthropicProvider presets](https://github.com/agentscope-ai/QwenPaw/pull/8729)) resolves a critical failure in Hub model gateways for `anthropic`, `minimax`, and `minimax-cn` presets by exposing missing `request_headers()`. This directly addresses Issue #8718.
- ✅ **PR #8728** ([fix(providers): use declared Responses thinking-off control](https://github.com/agentscope-ai/QwenPaw/pull/8728)) ensures `disable_thinking=True` properly disables reasoning across all models that support it, fixing inconsistent behavior reported in Issue #8727.
- ✅ **PR #8721** ([fix(plugins): retry recovery before enabling plugins](https://github.com/agentscope-ai/QwenPaw/pull/8721)) improves resilience during WeChat channel startup by retrying recovery before enabling plugins—directly tackling part of Issue #8709.
- ✅ **PR #8720** ([fix(wechat): prevent false bot conflicts and isolate workspace state](https://github.com/agentscope-ai/QwenPaw/pull/8720)) mitigates `ACCOUNT_IN_USE` false positives by decoupling credential storage from running Bot state, enhancing WeChat channel reliability.
- ✅ **PR #8719** ([feat(console): support runtime base-path deployment](https://github.com/agentscope-ai/QwenPaw/pull/8719)) enables Console and API deployment under configurable prefixes like `/app/`, solving Issue #8714.

These PRs reflect a strong focus on **stability**, **deployment flexibility**, and **plugin robustness**.

---

### **4. Community Hot Topics**  
Top discussions center on deep customization, system reliability, and cross-channel consistency:

- 🔥 **Issue #8071** ([Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)): 13 comments; users demand deeper theme control beyond `colorPrimary`, calling for semantic token overrides. *This signals a growing need for plugin-level UI consistency and design autonomy.*
- 🔥 **Issue #8710** ([Per-conversation session binding](https://github.com/agentscope-ai/QwenPaw/issues/8710)): 1 comment; highlights a fundamental UX limitation: messaging channels lack true session switching (`/new`, `/switch`) and conversation isolation. *Users want independent chat threads per sender—critical for multi-user environments.*
- 🔥 **PR #8554** ([feat(plugins): support CLI commands and extension points](https://github.com/agentscope-ai/QwenPaw/pull/8554)): Under review, size XXXL; aims to standardize plugin CLI integration via Click. *Indicates rising interest in plugin tooling and developer experience.*
- 🔥 **Issue #8725** ([Model switch not working in channels](https://github.com/agentscope-ai/QwenPaw/issues/8725)): 1 comment; users report that `/model` commands fail to change active models in DingTalk/Feishu channels. *Points to a systemic issue in session model binding logic.*

These topics collectively reveal user demand for **greater control**, **modular extensibility**, and **consistent session semantics across channels**.

---

### **5. Bugs & Stability**  
Critical bugs affecting production usability were reported today:

| Severity | Issue | Summary | Fix PR? |
|--------|-------|---------|--------|
| ⚠️ High | [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718) | Hub model gateway fails instantly for Anthropic/Minimax presets due to missing `request_headers()` | ✅ **Yes** – PR #8729 submitted |
| ⚠️ High | [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709) | WeChat channel fails to start (`ACCOUNT_IN_USE`) and reports success as `PLATFORM_RESULT_UNKNOWN` | ✅ **Partial fix** – PR #8721 (bug 2) and #8720 address root causes |
| ⚠️ High | [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) | Responses continuation summary fails when model consumes full 4000-token budget | ✅ **Yes** – PR #8728 fixes `disable_thinking` behavior |
| ⚠️ Medium | [#8725](https://github.com/agentscope-ai/QwenPaw/issues/8725) | `/model` command doesn’t switch session-level model in channels | ❌ No fix yet; requires deeper session model binding logic |
| ⚠️ Medium | [#8712](https://github.com/agentscope-ai/QwenPaw/issues/8712) | Resource protection termination hides result, causing model loop | ❌ No fix yet; affects shell tool safety and model feedback |

These indicate ongoing stress on **channel integrations**, **resource limits**, and **model response handling**—all central to agent reliability.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging roadmap themes include:

- 🎨 **UI/UX Customization**: Issue #8071 and PR #8719 signal demand for **theme extensibility** and **base-path deployment**, suggesting future versions may introduce modular theming and reverse-proxy support.
- 🔄 **Session Management**: Issue #8710 and #8725 highlight the need for **per-conversation session binding**, **true `/new` behavior**, and **dynamic model switching**—likely targets for v2.4.
- 📊 **Cron & Token Tracking**: Issue #8705 reveals a gap in **token usage logging for cron jobs**. This will likely be addressed in upcoming task-tracking updates.
- 🧩 **Plugin Ecosystem Growth**: PR #8554 and Issue #8071 suggest **plugin CLI support**, **extension points**, and **plugin-specific theming** are becoming priorities—indicating maturation of the plugin framework.

Expect **v2.4** to focus on **session fidelity**, **plugin capabilities**, and **cross-channel consistency**.

---

### **7. User Feedback Summary**  
Real-world pain points reflect advanced usage patterns:

- **WeChat channel instability** is a recurring complaint: users report being unable to start bots or receive accurate send status reports.
- **Model switching failures** in channels frustrate users who rely on dynamic model selection during conversations.
- **Token accounting gaps** in cron jobs undermine cost visibility—especially for automated workflows.
- **Performance lag** in the Creation Assistant input (Issue #8706) suggests scalability concerns with long conversations.
- **Attachment resolution failures** on Windows paths containing `#` highlight OS-specific edge cases in file handling.

Users value **reliability**, **predictable behavior**, and **fine-grained control**—but are encountering friction at the integration layer.

---

### **8. Backlog Watch**  
High-priority issues requiring maintainer attention:

- 🔴 **Issue #8071** ([Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)): 13 comments, 0 upvotes, 15 days old. *Critical for plugin developers; needs architectural decision.*
- 🔴 **Issue #8710** ([Per-conversation session binding](https://github.com/agentscope-ai/QwenPaw/issues/8710)): 1 comment, 0 upvotes, 1 day old. *Fundamental UX flaw in messaging channels—must be prioritized.*
- 🔴 **Issue #8725** ([Model switch not working in channels](https://github.com/agentscope-ai/QwenPaw/issues/8725)): 1 comment, 0 upvotes, 1 day old. *Directly impacts workflow flexibility.*
- 🔴 **Issue #8705** ([Cron token usage not logged](https://github.com/agentscope-ai/QwenPaw/issues/8705)): 2 comments, 0 upvotes. *Affects billing transparency and monitoring.*

These issues represent **systemic gaps** in session, model, and cost tracking—urgent for both usability and trust.

--- 

**Digest generated:** 2026-11-14  
**Data source:** GitHub – agentscope-ai/QwenPaw  
**Analysis method:** Activity-driven, issue/PR clustering, sentiment inference, trend prediction

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026-11-14**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a strong focus on security hardening, agent runtime integrity, and operator-controlled credential management. Over the past 24 hours, 9 new issues and 50 pull requests were opened or updated—indicating robust community engagement and rapid iteration. While no new releases have been published, significant progress is underway in core security architecture (e.g., MITM egress proxy RFCs) and infrastructure stability (e.g., session scope fixes for cron jobs). The project shows strong momentum in addressing high-risk security concerns while maintaining operational control over agent behavior.

---

### **2. Releases**  
No new releases were published as of 2026-11-14. The latest stable version remains **v0.9.0 (6c78ba5)**, with ongoing work focused on pre-release improvements around secrets handling, agent isolation, and secure communication channels.

---

### **3. Project Progress**  
*This day saw 1 PR merged/closed (PR #12150), while 49 remain open.*  
- **PR #12150** (`fix(runtime): emit single SBPL backslash for home-dotfile regex`) resolves a macOS Seatbelt sandboxing issue that previously blocked access to `~/.cargo`, `~/.nvm`, and similar paths due to incorrect regex escaping. This fix ensures proper tool configuration file access under Apple’s security model.
- Several key feature PRs are advancing in parallel:  
  - **PR #12408** (feat(web): manage scoped HTTP credentials) and **PR #12402** (feat(web): manage write-only plugin TLS credentials) are building toward a secure, operator-controlled Secrets catalog.  
  - **PR #12418** (feat(ssh): use scoped credentials in task-owned transports) enables SSH access with encrypted keys and OpenBao references without exposing credentials to agents.

These developments signal a shift toward *zero-trust credential orchestration* across all agent-bound services.

---

### **4. Community Hot Topics**  
Top-tier activity centers on **security architecture**, **operator control**, and **agent autonomy boundaries**:

- **Issue #12422** ([RFC]: Scoped use of operator-managed service credentials) — New, high-priority RFC (Security: material change) proposing a mechanism for operators to authorize agent tasks against external services without revealing underlying credentials. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/12422)  
- **Issue #12001** ([RFC]: MITM egress proxy to control what the agent can access) — A foundational security RFC aiming to contain compromised agents by enforcing network-level filtering and secret shielding. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/12001)  
- **PR #12417** (docs(runtime): propose ADR-016 exception for plugin wake dispatch) — Supports critical WASM plugin integration via host-mediated dispatch, enabling secure inter-process communication. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/12417)

These reflect a growing demand for **operational sovereignty** and **attack surface minimization** in agentic systems.

---

### **5. Bugs & Stability**  
Five issues reported today, ranked by severity:

| Severity | Issue | Summary | Fix PR? |
|--------|------|--------|-------|
| S2 | [#12413](https://github.com/zeroclaw-labs/zeroclaw/issues/12413) | OpenCode Go context-window discovery returns no capacity | ❌ |
| S2 | [#12412](https://github.com/zeroclaw-labs/zeroclaw/issues/12412) | OpenCode Go uses Zen's model catalogue instead of Go's | ❌ |
| S3 | [#12421](https://github.com/zeroclaw-labs/zeroclaw/issues/12421) | Agent cron jobs lack session-key scope → no prompt-cache affinity | ⚠️ Partially addressed in PR #12417 (but not yet merged) |
| S3 | [#12415](https://github.com/zeroclaw-labs/zeroclaw/issues/12415) | Dashboard sign-out does not trigger OIDC RP-initiated logout | ❌ |
| S3 | [#12416](https://github.com/zeroclaw-labs/zeroclaw/issues/12416) | Plugin wake dispatch requires ADR-016 exception | ⚠️ PR #12417 pending review |

Notably, **OpenCode Go provider issues (#12412, #12413)** suggest a need for better provider-specific metadata handling and registry validation.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes from top issues indicate strong interest in:
- **Operator-led security enforcement**: Write-only credential management (#12373), scoped service access (#12422), and MITM proxies (#12001).
- **Agent lifecycle precision**: Session-scoped cron jobs (#12421), repeated call deduplication (#11868), and channel progress reporting (#11874).
- **Cross-platform reliability**: Fixing macOS sandboxing bugs (#12150), WebSocket credential leakage (#12335), and TLS replay cache consistency (#11847).

**Prediction for v0.10.0**: Expect a major release focusing on **secure credential orchestration**, **MITM-based egress controls**, and **scoped agent execution environments**—with optional support for WebUI-based audit trails and compliance logging.

---

### **7. User Feedback Summary**  
User pain points center on **trust and transparency**:
- Operators want full visibility and control over credentials used by agents—especially when interacting with external APIs or SSH services.
- Developers report frustration with inconsistent provider metadata (e.g., OpenCode Go fetching wrong model list).
- Users desire seamless OIDC logout flows to prevent silent re-authentication.
- There is clear demand for **non-leaky credential exposure**: agents should never see secrets, even indirectly via logs or chat history.

Positive sentiment emerges around the **structured RFC process**, **transparent decision-making**, and **tight security posture**—indicating high user confidence in the project’s direction.

---

### **8. Backlog Watch**  
Several long-standing, high-impact items require maintainer attention:

- **Issue #11138** ([enhancement] define caller tool-level approval in bounded delegation) — Accepted (status: accepted), but unresolved since September 2026. Critical for defining trust boundaries in nested agent workflows. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11138)
- **Issue #11868** (fix(agent): stop repeated calls before dispatch) — Merged into `master` but still needs formal documentation and ADR tracking. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/11868)
- **Issue #12001** (RFC: MITM egress proxy) — High-risk security RFC awaiting Core Team consensus; currently inactive despite its strategic importance. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/12001)

These represent **strategic bottlenecks** in the project’s security evolution and should be prioritized for review and resolution.

---  
*Data source: GitHub — zeroclaw-labs/zeroclaw (2026-11-14)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*