# OpenClaw Ecosystem Digest 2026-11-09

> Issues: 486 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-09 02:04 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-09**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 486 issues and 500 PRs updated in the last 24 hours—indicating strong community engagement and rapid development velocity. A new release, `v2026.11.2`, was just published, focusing on privacy hardening and trust boundary enforcement. The ecosystem shows signs of growing maturity: many issues are stable or regression-related, while a consistent stream of low-level UX fixes and security improvements reflects ongoing refinement. However, multiple high-severity bugs affecting stability, memory usage, and session persistence suggest underlying systemic challenges in state management and resource isolation.

---

### **2. Releases**  
**✅ `v2026.11.2` – Released 2026-11-09**  
*Key Highlights:*  
- **Privacy & Trust Boundaries:** Configuration secrets, conversation content, tool errors, and channel payloads are now excluded from diagnostic logs.  
- **Trust Enforcement:** Selected provider and navigation trust boundaries are enforced more strictly.  
- **MCP Grant Lifecycle:** MCP grants are now released after warm CLI turns, reducing long-lived credential exposure.  

> 🔗 [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.11.2)  
> 🔗 [PR #191318](https://github.com/openclaw/openclaw/pull/191318) | [PR #174998](https://github.com/openclaw/openclaw/pull/174998)

---

### **3. Project Progress**  
**🟢 Merged/Closed PRs (Today):**  
- **[PR #195483]** Fix: Prevent IME input drafts from being saved prematurely during plugin credential entry.  
- **[PR #195506]** UI fix: Make Details motion animation independent of frame rate to prevent E2E test flakiness.  
- **[PR #195450]** Fix: Expire cached GitHub detail reads based on wall-clock time, not just cache key.  
- **[PR #195444]** Fix: Allow Enter key during IME composition in login form without premature connection.  
- **[PR #195508]** Fix: Ensure chat transcript isn’t cut off above the composer input field.  

These represent focused, low-risk improvements to user experience and edge-case reliability across web, iOS, and backend systems.

---

### **4. Community Hot Topics**  
Top Issues by comment count reveal recurring pain points:

| Issue | Comments | Severity | Link |
|------|----------|---------|------|
| [#166634] Late reclamation commit checkpoint failure post-crash | 26 | 🦞 Diamond Lobster (P1) | [Issue #166634](https://github.com/openclaw/openclaw/issues/166634) |
| [#191944] `gateway stop` fails on macOS due to process ancestry inspection | 25 | 🦞 Diamond Lobster (P2) | [Issue #191944](https://github.com/openclaw/openclaw/issues/191944) |
| [#38327] "Cannot convert undefined or null to object" after update to 2026.3.2 | 18 | 🦞 Diamond Lobster (P1) | [Issue #38327](https://github.com/openclaw/openclaw/issues/38327) |
| [#193962] Update loop blocked by timeout probe even after fix is available | 15 | 🦞 Diamond Lobster (P0) | [Issue #193962](https://github.com/openclaw/openclaw/issues/193962) |

🔍 **Underlying Needs:**  
- **Stability under crash recovery** (e.g., SQLite state corruption, agent unavailability).  
- **Cross-platform reliability**, especially on macOS (process introspection, `launchd` integration).  
- **Regression resilience**: Users report breakage after minor updates, indicating fragile upgrade paths.  
- **Critical fix availability**: Some fixes are inaccessible via standard `update` commands—highlighting a gap in rollback safety.

---

### **5. Bugs & Stability**  
High-priority bugs reported today indicate systemic instability in core components:

| Bug | Severity | Impact | Status | Fix PR? |
|-----|----------|--------|--------|--------|
| [#193962] Header-probe timeout blocks access to fix in `package-update` | 🦞 Diamond Lobster (P0) | UX Release Blocker | Open | ❌ No |
| [#191944] `gateway stop` fails on macOS due to ancestry inspection | 🦞 Diamond Lobster (P2) | UX Friction | Open | ❌ No |
| [#191847] Large session kills 512MB SQLite worker → `admission closed` | 🦪 Silver Shellfish (P1) | Message Loss | Open | ❌ No |
| [#181432] Excessive RSS (~1.9GB) and SQLite timeouts post-2026.10.5 | 🦪 Silver Shellfish (P1) | Crash Loop | Open | ❌ No |
| [#162211] Startup blocks event loop for 40–200s → restart loop | 🦪 Silver Shellfish (P0) | Crash Loop | Open | ❌ No |

📌 **Pattern Analysis:** Multiple critical bugs stem from **event-loop blocking**, **SQLite contention**, and **memory leaks**, particularly affecting CLI backends and large sessions. These are likely exacerbated by poor resource accounting and lack of graceful degradation.

---

### **6. Feature Requests & Roadmap Signals**  
User demand is shifting toward **control, customization, and operational clarity**:

| Feature Request | Priority | User Need | Link |
|------------------|--------|-----------|------|
| Per-agent dreaming configuration | P2 | Avoid OOM crashes during scheduled dreams | [Issue #67413](https://github.com/openclaw/openclaw/issues/67413) |
| Opt-in personal identity on iOS/macOS | P2 | Balance privacy and shared ownership | [Issue #162164](https://github.com/openclaw/openclaw/issues/162164) |
| Configurable Tool Search result char limit | P2 | Reduce prompt bloat | [PR #194934](https://github.com/openclaw/openclaw/pull/194934) |
| Android notification QoL (session labels, suppression) | P2 | Reduce noise, improve context awareness | [Issue #143387](https://github.com/openclaw/openclaw/issues/143387) |
| Rendered Markdown preview in file review | P2 | Improve readability of documentation | [Issue #128090](https://github.com/openclaw/openclaw/issues/128090) |

💡 **Prediction:** Features like per-agent dreaming and configurable tool search are likely to be included in **2026.12.0** as part of a broader effort to improve scalability and UX control.

---

### **7. User Feedback Summary**  
Real-world pain points emerge clearly from issue reports:
- **Memory exhaustion** is a top concern: users report 1.9GB baseline RSS, 1.8GB after update, and OOM kills.
- **Session persistence failures** occur silently: tools denied via `tools.deny` disable memory saves without warning.
- **Update reliability** is broken: some fixes cannot be reached through `openclaw update`, creating dependency traps.
- **UX friction dominates**: jittery UI, invisible message drops, incorrect error messaging (e.g., `internal_error` masking guest script errors).
- **Cross-platform inconsistency**: macOS `stop` fails, Windows `doctor` hangs, iOS loses chat context on relaunch.

> ✅ **Satisfaction signals:** Recent fixes to IME handling, path rendering, and notification delivery show responsiveness to real-time feedback.

---

### **8. Backlog Watch**  
Critical, long-standing issues needing maintainer attention:

| Issue | Age | Comments | Status | Why It Matters |
|------|-----|--------|--------|----------------|
| [#158592] Post-sleep model runtime publish timeout → permanent failure | 2+ months | 11 | Open | Blocks recovery after sleep/wake cycles; affects uptime. |  
| [#166634] Reclamation checkpoint failure leaves agent permanently unavailable | 4 months | 26 | Open | Core crash-recovery failure — severe UX impact. |  
| [#162164] Opt-in personal identity on iOS/macOS | 2 months | 11 | Open | Balances privacy and shared ownership — strategic for mobile adoption. |  
| [#128090] Add rendered Markdown preview | 3 months | 10 | Open | Low-hanging fruit for UX improvement. |  
| [#195510] `Latest` stops short of final reply | 1 day | undefined | Open | Minor but visible UX flaw in chat navigation. |

📌 **Action Needed:** Maintainers should prioritize triaging and assigning ownership to high-comment, high-severity, long-unanswered issues—especially those involving crash recovery, memory leaks, and cross-platform stability.

---

**📊 Project Health Score: 7.8 / 10**  
Strong momentum, excellent community participation, and timely releases—but persistent stability and memory issues threaten long-term reliability. Immediate focus on event-loop hygiene, SQLite tuning, and update resilience is advised.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-09**

---

### **1. Ecosystem Overview**  
The open-source personal AI agent landscape in late 2026 is characterized by rapid maturation, divergent architectural philosophies, and a growing emphasis on security, privacy, and operational resilience. Projects are transitioning from feature experimentation to production-grade stability, with clear signals of enterprise readiness—particularly in access control, session persistence, and cross-platform reliability. While OpenClaw leads in community velocity and release cadence, ZeroClaw is emerging as the de facto standard for secure, permissioned agent environments. The ecosystem shows strong momentum across all fronts, driven by developer engagement, automation maturity, and increasing demand for trustworthy, auditable agent behavior.

---

### **2. Activity Comparison**

| Project         | Issues (Last 24h) | PRs (Last 24h) | Releases (Nov 9) | Health Score | Status |
|------------------|-------------------|------------------|-------------------|--------------|--------|
| **OpenClaw**     | 486               | 500              | ✅ v2026.11.2      | 7.8/10       | High activity |
| **Hermes Agent** | 50                | 50               | ❌ None            | 7.8/10       | Rapid iteration |
| **IronClaw**     | 0                 | 6                | ❌ None            | 8.0/10       | Low-velocity maintenance |
| **QwenPaw**      | 5                 | 19               | ❌ None            | 8.2/10       | Focused refinement |
| **ZeroClaw**     | 26                | 50               | ❌ None            | 8.3/10       | Security-focused sprint |

> ✅ *Note:* OpenClaw and Hermes Agent show the highest contributor volume; IronClaw operates via automated dependency hygiene; QwenPaw and ZeroClaw are in focused pre-release phases.

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most **community-driven and rapidly evolving** project in the ecosystem. Its advantages include:
- **Highest PR/issue volume**, indicating deep contributor involvement and active development.
- **Aggressive release cycle** (`v2026.11.2` released same-day with privacy hardening), positioning it as a leader in trust boundary enforcement.
- **Broad platform coverage** (web, iOS, macOS, Android) with consistent UX refinements.
- **Strong focus on state management and diagnostics**, though this exposes systemic stability risks (e.g., SQLite contention, memory leaks).

Compared to peers:
- Unlike **IronClaw**, which prioritizes dependency hygiene over features, OpenClaw balances innovation with real-world usability.
- Unlike **ZeroClaw**, which is building toward a hardened security model, OpenClaw is still refining core runtime reliability.
- Compared to **QwenPaw**, OpenClaw has broader infrastructure integration but faces more regression churn.

Its large community size enables rapid feedback loops but also amplifies the impact of unpatched P0/P1 bugs—making it both the most dynamic and most volatile project.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on critical technical requirements:

| Need                        | Projects Involved                     | Specific Examples |
|----------------------------|---------------------------------------|--------------------|
| **Memory & Resource Management** | OpenClaw, Hermes Agent, QwenPaw | OOM crashes, excessive RSS (>1.8GB), plugin hub CPU spikes |
| **Session Persistence & Recovery** | OpenClaw, Hermes Agent, ZeroClaw | Reclamation checkpoint failures, silent session loss, post-crash recovery issues |
| **Cross-Platform Stability** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | macOS `gateway stop`, Windows pipe deadlocks, long-path handling (Windows) |
| **Privacy & Trust Boundaries** | OpenClaw, ZeroClaw, QwenPaw | Diagnostic log scrubbing, session data retention, OAuth pool isolation |
| **Observability & Transparency** | QwenPaw, ZeroClaw, OpenClaw | Model fallback logging, session metadata, UI context awareness |

These shared challenges reflect a **common pain point**: the difficulty of scaling AI agents without sacrificing performance, reliability, or user trust—especially under high load or edge conditions.

---

### **5. Differentiation Analysis**

| Dimension             | OpenClaw                            | Hermes Agent                         | IronClaw                          | QwenPaw                             | ZeroClaw                              |
|------------------------|-------------------------------------|--------------------------------------|-----------------------------------|-------------------------------------|----------------------------------------|
| **Target Users**       | Power users, developers, multi-agent workflows | Teams, multi-user platforms (Discord, Telegram) | Internal contributors, dependency maintainers | Chinese-speaking devs, bot operators | Enterprises, security-conscious orgs |
| **Core Focus**         | Privacy, trust boundaries, UX polish | Multi-user isolation, streaming fidelity | Dependency hygiene, minimalism | Config integrity, media handling | Security, access control, auditability |
| **Architecture**       | Full-stack agent with CLI + GUI     | Kanban-based task orchestration      | Lightweight, modular, WASM-ready  | Console-first, channel-aware        | Sandboxed, RPC-based, role-bound       |
| **Security Posture**   | Moderate (privacy hardening)        | Moderate (OAuth sharing risk)        | High (automated patching)         | Medium (model fallbacks)            | **Extremely high (S0 bug surge)**      |
| **Deployment Model**   | Local + cloud hybrid                | Multi-platform (Telegram, Slack)     | Edge-computing / serverless       | Bot-centric (QQ, WeChat)            | Enterprise gateway + dashboard         |

> 🔑 **Key Differentiator**: ZeroClaw is uniquely positioned as a **secure-by-design** agent framework for regulated environments, while OpenClaw excels in **user-centric evolution**.

---

### **6. Community Momentum & Maturity**  

| Tier                  | Projects                                 | Characteristics |
|-----------------------|------------------------------------------|-----------------|
| **Rapid Iteration**   | OpenClaw, Hermes Agent, ZeroClaw         | >50 PRs/day, frequent security audits, high comment density on critical issues |
| **Focused Refinement**| QwenPaw                                  | Small, targeted fixes; responsive issue triage; stable beta testing |
| **Stable Maintenance**| IronClaw                                 | No new issues; only automated dependency updates; low visibility |

> 📈 **Maturity Gradient**:  
> - **High Maturity**: IronClaw (dependency discipline), ZeroClaw (security rigor).  
> - **Mid-Maturity**: OpenClaw (high velocity but instability), QwenPaw (responsive UX focus).  
> - **Emerging**: Hermes Agent (multi-user complexity emerging).

This reflects a healthy ecosystem where some projects are stabilizing while others push boundaries—ideal for diverse use cases.

---

### **7. Trend Signals**  
Based on community feedback and PR trends, the following industry-wide shifts are emerging:

1. **Trust Through Transparency**  
   - Users demand **observable decision-making** (e.g., model fallbacks, session states).  
   - Projects like QwenPaw (PR #8628) and ZeroClaw (scoped chat) are responding with audit trails and metadata exposure.

2. **Security as a Default**  
   - S0 vulnerabilities in ZeroClaw and privacy fixes in OpenClaw signal that **security is no longer optional**—it’s a core requirement for adoption.

3. **Operational Resilience Over Features**  
   - High-severity bugs related to **crash recovery**, **memory leaks**, and **update failure** dominate discussions—indicating a shift from "what can it do?" to "can it survive?"

4. **Cross-Platform Consistency is Non-Negotiable**  
   - macOS `stop` failures, Windows pipe deadlocks, and path handling issues highlight that **platform parity is now a baseline expectation**.

5. **User Control = Adoption**  
   - Feature requests for per-agent settings (OpenClaw), opt-in identity (Hermes), and config override (QwenPaw) show that **personalization and autonomy** are key drivers of long-term user retention.

> 💡 **Value for Developers**: Build systems that **fail gracefully**, **log transparently**, and **isolate state securely**—not just functionally. The next generation of AI agents will be judged not by capability, but by **reliability, accountability, and trustworthiness**.

---

**Final Assessment**:  
The personal AI assistant ecosystem is entering a **production-readiness phase**, where stability, security, and user control are paramount. OpenClaw leads in velocity and user engagement, but ZeroClaw is setting the bar for secure, auditable agent design. Developers should prioritize **resilient state management**, **cross-platform consistency**, and **transparent operations**—as these are now the true differentiators in a crowded market.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-09**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 new pull requests reported in the past 24 hours—indicating strong community engagement and rapid development velocity. Despite no new releases, significant progress is evident in stability fixes, platform-specific bug resolutions (especially on Windows and Telegram), and improvements to core agent behavior like streaming, session handling, and memory management. The focus is clearly shifting toward robustness, multi-user isolation, and security hardening, reflecting a maturing ecosystem targeting production-grade deployment.

---

### **2. Releases**  
**None**  
No new versions were released as of 2026-11-09. The latest stable release remains v0.23.0 (or equivalent `main` build). Users should expect potential breaking changes if upgrading from earlier versions, particularly around ACP streaming behavior, plugin hooks, and model routing logic.

---

### **3. Project Progress**  
**Merged / Closed PRs (Today):**  
- ✅ **PR #151575** (`fix(kanban): stop reclaimed workers writing terminal state to their old card`) — Resolves critical race condition where reclaimed Kanban workers could corrupt session state. This fix addresses a known regression affecting task integrity.  
- ✅ **PR #151595** (`Bug`: plugin `ctx.llm.complete()` drops a named custom provider's `extra_body`) — Fixes a key integration flaw for users relying on custom providers with advanced request parameters (e.g., Qwen3’s `chat_template`).  
- ✅ **PR #151087**, **#151062**, **#151007**, **#151016**, **#151000**, **#151050**, **#151071**, **#151083**, **#151064**, **#151077**, **#151068**, **#151061**, **#151057**, **#151066**, **#124290**, **#104030**, **#151599** — A major wave of Telegram-specific fixes addressing flood control, message delivery, link previews, topic routing, and input consistency. These improve reliability and UX across DMs and group chats.

> 🔗 [PR #151575](https://github.com/NousResearch/hermes-agent/pull/151575) | [PR #151595](https://github.com/NousResearch/hermes-agent/pull/151595)

---

### **4. Community Hot Topics**  
Top 5 most commented/critical issues reflect deep user pain points:

| Issue | Summary | Comments | Severity | Link |
|------|--------|----------|----------|------|
| [#110374](https://github.com/NousResearch/hermes-agent/issues/110374) | Slack status indicator broken after `slack-sdk >= 3.44` | 14 | P2 | [View](https://github.com/NousResearch/hermes-agent/issues/110374) |
| [#141919](https://github.com/NousResearch/hermes-agent/issues/141919) | ACP re-emits full transformed response under same ID, duplicating output | 9 | P2 | [View](https://github.com/NousResearch/hermes-agent/issues/141919) |
| [#135977](https://github.com/NousResearch/hermes-agent/issues/135977) | `hermes acp session/new` hangs forever on Windows due to subprocess pipe deadlock | 7 | P2 | [View](https://github.com/NousResearch/hermes-agent/issues/135977) |
| [#147613](https://github.com/NousResearch/hermes-agent/issues/147613) | Kanban worker stalls at admission-sequence 15 on Windows post-update | 3 | P2 | [View](https://github.com/NousResearch/hermes-agent/issues/147613) |
| [#138337](https://github.com/NousResearch/hermes-agent/issues/138337) | `delegate_task` children share OAuth pool → token revocation cascade | 2 | P1 | [View](https://github.com/NousResearch/hermes-agent/issues/138337) |

**Analysis:**  
- **Platform-specific instability** dominates: Windows hangs, Telegram flooding, and Slack SDK breakage point to incomplete cross-platform testing.  
- **Streaming & session fidelity** are recurring concerns—duplicates, missing status, and failed resumption indicate gaps in real-time state management.  
- **Security-critical bugs** (e.g., shared credential pools) highlight the need for deeper audit trails and isolation in multi-process flows.

---

### **5. Bugs & Stability**  
Ranked by severity and impact:

| Bug | Severity | Description | Fix Status |
|-----|----------|-------------|------------|
| [#138337](https://github.com/NousResearch/hermes-agent/issues/138337) | **P1 (Critical)** | Shared Anthropic OAuth pool causes token revocation cascades; can lead to complete task failure | ❌ No PR yet — high-risk, requires coordination |
| [#110374](https://github.com/NousResearch/hermes-agent/issues/110374) | P2 | Slack status indicator silently fails after SDK update | ❌ Pending fix — affects user feedback loop |
| [#135977](https://github.com/NousResearch/hermes-agent/issues/135977) | P2 | `session/new` hangs on Windows due to subprocess pipe issue | ❌ No fix PR — blocks Windows users |
| [#147613](https://github.com/NousResearch/hermes-agent/issues/147613) | P2 | Kanban worker stalls deterministically at step 15 on Windows | ❌ No fix PR — impacts workflow automation |
| [#144728](https://github.com/NousResearch/hermes-agent/issues/144728) | P2 | `session.resume` omits `running`/`status` for live sessions | ⚠️ Partially addressed in PRs but not merged |
| [#148365](https://github.com/NousResearch/hermes-agent/issues/148365) | P2 | Plugins hub rebuilds every 7–46s, dropping iOS WebSocket connections | ❌ High impact on mobile UX |

> 🔥 **High-Risk Cluster**: Multiple Windows-related issues suggest poor CI/CD coverage or lack of native Windows test infrastructure.

---

### **6. Feature Requests & Roadmap Signals**  
Key emerging themes:

| Request | Priority | Implication | Likely Inclusion |
|--------|----------|-------------|------------------|
| [#17254](https://github.com/NousResearch/hermes-agent/issues/17254) | P3 | Multi-user preference memory (per-user isolation) | ✅ Strong candidate for v0.24+ |
| [#106919](https://github.com/NousResearch/hermes-agent/issues/106919) | P2 | Opt-in for unattended memory consolidation | ✅ Aligns with autonomy + privacy trends |
| [#146503](https://github.com/NousResearch/hermes-agent/issues/146503) | P3 | Bens Magical Ticket: Multi-tenancy via shared process | ✅ Critical for hosted deployments |
| [#28226](https://github.com/NousResearch/hermes-agent/issues/28226) | P3 | Memory OS layer with diagnostics, inventory, and isolation tests | ✅ Future-proofing long-term memory systems |
| [#114195](https://github.com/NousResearch/hermes-agent/issues/114195) | P3 | UI localization (i18n) for non-English users | ✅ Needed for global adoption |

> 📌 **Predicted Next Version Focus**: Enhanced **multi-tenant architecture**, **memory isolation**, and **cross-platform stability**—with optional **i18n support** and **autonomous memory governance**.

---

### **7. User Feedback Summary**  
Real-world pain points reveal key usability and trust issues:

- **Windows users** report persistent crashes (`acp session/new`, Kanban stalls), indicating a lack of reliable local execution environment support.
- **Multi-user environments** (Discord, Feishu, Telegram) suffer from **memory leakage**—A’s preferences influencing B’s responses—which undermines personalization and privacy.
- **Mobile users** (iOS) experience frequent disconnections due to excessive plugin hub rebuilds (>1 CPU core), suggesting poor resource management.
- **Telegram users** face inconsistent message delivery, flooded replies, and lost context during retries—eroding confidence in reliability.
- **Security-conscious users** express concern over shared credential pools and unclear OAuth flows, especially in delegation-heavy workflows.

> 💬 *"I lose my prompt when switching chats too fast."* – [Issue #151269](https://github.com/NousResearch/hermes-agent/issues/151269)  
> 💬 *"My agent keeps replying twice—once streamed, once fully."* – [Issue #141919](https://github.com/NousResearch/hermes-agent/issues/141919)

---

### **8. Backlog Watch**  
Long-standing, high-impact issues requiring maintainer attention:

| Issue | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#17254](https://github.com/NousResearch/hermes-agent/issues/17254) | 6 months | Open, needs decision | Foundational for multi-user scenarios |
| [#146503](https://github.com/NousResearch/hermes-agent/issues/146503) | 3 months | Open, needs decision | Enables scalable hosting without per-tenant processes |
| [#28226](https://github.com/NousResearch/hermes-agent/issues/28226) | 6 months | Open, needs decision | Critical for diagnosing and testing memory degradation |
| [#106919](https://github.com/NousResearch/hermes-agent/issues/106919) | 2 months | Open, needs decision | Balances autonomy with user control over memory |
| [#114195](https://github.com/NousResearch/hermes-agent/issues/114195) | 2 months | Open, needs decision | Blocks global adoption beyond English-speaking users |

> ⚠️ These issues represent **strategic direction decisions**—not just technical fixes. Their resolution will shape Hermes Agent’s viability in enterprise and international markets.

---

**Final Assessment**:  
Hermes Agent is in a phase of **rapid stabilization and feature expansion**, with strong community participation. While core functionality is improving, **platform-specific regressions**, **memory isolation gaps**, and **security risks** remain top concerns. The next 2–3 months will likely define whether Hermes becomes a viable multi-user, multi-platform AI assistant or remains a niche tool with fragmentation risks. Prioritizing **Windows stability**, **multi-tenancy**, and **user data isolation** is essential for broader adoption.

> 📊 **Project Health Score**: 7.8 / 10 — Active, evolving, but with notable stability and design debt.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-11-09**

---

### **1. Today's Overview**  
The IronClaw project shows minimal activity on November 9, 2026, with no new issues opened or closed in the past 24 hours. However, six pull requests were updated—five remain open and one was merged—indicating ongoing maintenance of dependencies. All recent PRs are automated updates from `dependabot[bot]`, suggesting a strong focus on dependency hygiene and security patching. The absence of new releases or community-driven discussions points to a stable but low-velocity development phase.

---

### **2. Releases**  
*No new releases were published in the last 24 hours.*  
There have been no version bumps or release announcements since the previous cycle. The project remains on its current stable version(s), with all changes currently limited to internal dependency updates via PRs.

---

### **3. Project Progress**  
One pull request was merged today:  
- **PR #8160** ([Closed](https://github.com/nearai/ironclaw/pull/8160)): Automated dependency bump across the `everything-else` group (43 packages). This update includes critical upgrades to `uuid` (from `1.24.0` to `1.28.0`) and `base64`, enhancing security and compatibility. While not a feature addition, this contributes to long-term stability and vulnerability mitigation.

---

### **4. Community Hot Topics**  
The most active items are automated dependency updates, all originating from `dependabot[bot]`. No community-driven issues or PRs have gained traction recently. Notable PRs include:
- **PR #8169** ([Open](https://github.com/nearai/ironclaw/pull/8169)): Bumps 44 packages in `/`, including `thiserror` (v2.0.20 → v2.0.21) and `uuid` (v1.24.0 → v1.29.0). *This is the largest dependency batch in the last month.*
- **PR #8159** ([Open](https://github.com/nearai/ironclaw/pull/8159)): Updates GitHub Actions workflows, including `anthropics/claude-code-action` (v1.0.183 → v1.0.259), signaling integration with AI tooling trends.

> 🔍 *Insight:* The lack of user engagement suggests that core contributors are prioritizing infrastructure reliability over new features. The heavy reliance on automated dependency management indicates a mature, security-conscious CI/CD pipeline.

---

### **5. Bugs & Stability**  
*No bugs, crashes, or regressions were reported in the last 24 hours.*  
All recent PRs are non-breaking dependency updates with no known breaking changes. The `serde_json` upgrade (PR #8140) is particularly safe—only minor improvements in serialization performance and JSON parsing robustness. No associated issue reports indicate instability from these updates.

---

### **6. Feature Requests & Roadmap Signals**  
*No new feature requests were submitted.*  
However, the consistent automation of `wasm`-related dependency updates (e.g., PR #7834: `wasmtime`, `wit-component`) hints at an underlying interest in WebAssembly runtime capabilities. Combined with the use of `tokio-ecosystem` and `actions` integrations, IronClaw may be evolving toward a lightweight, modular AI agent framework with edge-computing or serverless deployment ambitions.

> 📌 *Prediction:* Future versions may emphasize WASM-based execution environments, possibly enabling portable AI agents across diverse platforms.

---

### **7. User Feedback Summary**  
*No user feedback was recorded in the last 24 hours.*  
Given the absence of issues or comments, there is no direct evidence of user satisfaction or dissatisfaction. The silence suggests either high user contentment with current functionality or low external visibility. The project appears to be primarily used internally or by a small, technical contributor base focused on dependency integrity rather than UX.

---

### **8. Backlog Watch**  
Several long-standing, unmerged PRs require attention:
- **PR #8169** ([Open](https://github.com/nearai/ironclaw/pull/8169)): 44 package updates in `/` — now 1 week old, pending review. High priority due to size and scope.
- **PR #7834** ([Open](https://github.com/nearai/ironclaw/pull/7834)): WASM stack updates (4 packages), created August 23, 2026 — over 2 months old. Critical for future cross-platform agent deployment.
- **PR #8141** ([Open](https://github.com/nearai/ironclaw/pull/8141)): Tokio ecosystem updates (5 packages) — also stale, with potential impact on async runtime performance.

> ⚠️ *Note:* These are all automated, low-risk updates. Their prolonged status suggests possible maintainer bandwidth constraints or delayed review cycles.

---

**Summary Status**: ✅ *Stable, secure, and actively maintained through automation*, but lacking visible community engagement. Prioritize reviewing high-volume dependency PRs to prevent drift and enable future extensibility.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-09**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust pipeline of development: **19 open pull requests** and **5 new issues** reported in the last 24 hours, indicating strong contributor engagement and ongoing refinement. The project is currently focused on stability fixes (especially around media handling, config persistence, and fallback behavior), UI/UX improvements for multi-tab navigation, and foundational tooling enhancements. No new releases have been published, suggesting the team is prioritizing internal quality before a formal update. Overall, the project health is positive—active community involvement, clear issue triage, and targeted PRs signal sustained momentum.

---

### **2. Releases**  
**None**  
No new releases were published as of 2026-11-09. The latest stable version remains `2.2.2.post1`, with beta testing underway for `2.3.0-beta.2`. This absence of release activity reflects a focus on stabilizing core functionality ahead of the next major iteration.

---

### **3. Project Progress**  
The following PRs were updated or merged today (as of 2026-11-09), representing key advancements:

- ✅ **[PR #8632]** *fix(media): downscale oversized images and mark stripped media as omitted*  
  Addresses **Issue #8629** by preventing oversized image re-sending and improving error transparency. Critical for multimodal reliability.
  
- ✅ **[PR #8631]** *fix(console): follow active chat name in browser tab title*  
  Implements dynamic tab titles based on current conversation name — directly resolves **Issue #8605**. Enhances usability for power users managing multiple sessions.

- ✅ **[PR #8630]** *fix(channels): preserve enabled state on partial channel updates*  
  Fixes silent disabling of QQ channels after config reload (**Issue #8475**) by ensuring `enabled` flag persists during partial updates.

- ✅ **[PR #8628]** *feat(providers): add model fallback metadata to chat response*  
  Adds visibility into model fallbacks via `model_used`, `model_req`, and `model_fallback_reason` fields — directly addresses **Issue #8103**’s core concern about silent model switches.

These PRs collectively improve **observability**, **config integrity**, and **user feedback clarity**, signaling a shift toward more transparent, user-aware agent behavior.

---

### **4. Community Hot Topics**  
Top 3 most discussed items reflect urgent UX and stability concerns:

1. 🔥 **[Issue #8475]** [Bug]: QQ channel `enabled` flag silently reset after restart  
   - **Link**: [GitHub #8475](https://github.com/agentscope-ai/QwenPaw/issues/8475)  
   - **Impact**: Full message reception failure with no warning — critical for bot operators relying on QQ integration.  
   - **Trend**: High urgency; resolved by **PR #8630** (merged today).

2. 🔥 **[Issue #8103]** [Enhancement]: Notify user when daemon falls back to a different model  
   - **Link**: [GitHub #8103](https://github.com/agentscope-ai/QwenPaw/issues/8103)  
   - **Impact**: Users receive responses from unexpected models without awareness — undermines trust in system predictability.  
   - **Resolution**: Addressed by **PR #8628**, which adds metadata to responses.

3. 🔥 **[Issue #8605]** [Feature]: Browser tab title should reflect current session  
   - **Link**: [GitHub #8605](https://github.com/agentscope-ai/QwenPaw/issues/8605)  
   - **User Need**: Multi-tab workflow efficiency — users struggle to distinguish between conversations visually.  
   - **Progress**: Fully resolved by **PR #8631**.

> 💡 **Insight**: The community is demanding *transparency* and *contextual fidelity*. Users want to know *what’s happening*, *why*, and *where* — especially during failures or transitions.

---

### **5. Bugs & Stability**  
Five new bugs reported in the past day, with **high severity** due to impact on core functionality:

| Issue | Severity | Description | Fix PR? |
|------|----------|-------------|--------|
| [#8475](https://github.com/agentscope-ai/QwenPaw/issues/8475) | ⚠️ Critical | QQ channel disabled silently after restart → complete message loss | ✅ **PR #8630** |
| [#8629](https://github.com/agentscope-ai/QwenPaw/issues/8629) | ⚠️ High | Oversized images resent repeatedly; misleading "Image loaded" log | ✅ **PR #8632** |
| [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627) | ⚠️ High | Checkpoint service fails on long paths (Windows); WeChat stuck in ambiguous state | ❌ None yet |
| [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627) | ⚠️ High | Windows Git path handling breaks checkpoint service | ❌ None yet |
| [#8629](https://github.com/agentscope-ai/QwenPaw/issues/8629) | ⚠️ Medium | Misleading "Image loaded" text persists after stripping | ✅ **PR #8632** |

> ⚠️ **Note**: Two critical Windows-specific issues (**#8627**) remain unaddressed despite being reported today. These may block adoption on Windows systems with long paths.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging trends suggest upcoming focus areas:

- 🎯 **Dynamic UI Context**: The **tab title feature request (#8605)** has been rapidly implemented — signals that QwenPaw is moving toward richer, context-aware interfaces.
- 🎯 **Model Fallback Transparency**: **#8103** and **PR #8628** indicate a roadmap shift toward observability and auditability in agent decision-making.
- 🎯 **Per-Job Configuration Overrides**: **PR #8626** (crons with `thinking_level` override) suggests future support for fine-grained scheduling control — likely targeting automation-heavy use cases.
- 🎯 **File Encoding Preservation**: Multiple PRs (**#8234**, **#8433**) fix GBK/CP936 and line-ending issues — indicates growing attention to **internationalization and legacy file support**, especially for Chinese users.

> 📈 **Prediction**: The next stable release (`2.3.0`) will likely include:
> - Enhanced fallback visibility
> - Improved Windows compatibility (long paths, encoding)
> - Better multi-session UX (dynamic tabs, per-job settings)

---

### **7. User Feedback Summary**  
Real-world pain points highlighted across issues:

- **Loss of communication channels** without warning (**QQ channel disable**): Users depend on persistent messaging — silence after restart is unacceptable.
- **Hidden model switching** causes confusion and distrust: “Why did I get a different answer?” — users want accountability.
- **Inability to manage multiple sessions** visually: Open tabs with identical names hinder productivity.
- **File corruption during editing**: Loss of CRLF and non-UTF-8 content breaks workflows involving scripts, configs, or legacy documents.
- **Unpredictable behavior in cron jobs**: High reasoning cost for simple tasks frustrates automation users.

> ✅ **Satisfaction signals**: Quick resolution of high-impact bugs and feature requests shows responsiveness. First-time contributors are welcomed and integrated (e.g., #8568, #8623).

---

### **8. Backlog Watch**  
Key long-standing or under-resolved items requiring maintainer attention:

- 🔹 **[Issue #8195]** [enhancement]: Allow removal of models from the pool  
  - **Status**: Open since Oct 2026; **PR #8410** exists but is pending review.  
  - **Link**: [GitHub #8195](https://github.com/agentscope-ai/QwenPaw/issues/8195)  
  - **Urgency**: High — deprecated models clutter the interface and confuse users.

- 🔹 **[Issue #7053]** [Bug]: OAuth2 refresh_token rotation not persisted  
  - **Status**: Open since Aug 2026; **PR #7066** submitted but still under review.  
  - **Link**: [GitHub #7053](https://github.com/agentscope-ai/QwenPaw/issues/7053)  
  - **Risk**: Breaks authentication for services like XMind using rotating tokens.

- 🔹 **[Issue #4036]** [Feature]: Streamline model addition in console  
  - **Status**: Multiple related PRs (e.g., #7307, #8434) exist but remain in review.  
  - **Link**: [GitHub #4036](https://github.com/agentscope-ai/QwenPaw/issues/4036)  
  - **Impact**: A poor onboarding experience for new users adding models.

> ⏳ **Recommendation**: Prioritize **PR #8410**, **PR #7066**, and **PR #8434** for review — they address core UX friction points with minimal risk.

---

✅ **Final Assessment**: QwenPaw is in a healthy, developer-driven phase. The project demonstrates strong technical rigor, responsive issue handling, and clear alignment with user needs. With minor delays in some PR reviews and unresolved Windows-specific bugs, it remains poised for a significant upgrade in late 2026–early 2027.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-09**

---

### **1. Today's Overview**  
ZeroClaw continues strong momentum with high activity across development and security review, reflecting a mature but rapidly evolving open-source AI agent platform. In the past 24 hours, 50 pull requests were updated (41 open, 9 merged), and 26 issues were updated (25 open, 1 closed), indicating active iteration on core runtime, security, and gateway features. A significant focus has emerged around **security hardening**, particularly in sandboxing, identity access control, and session lifecycle management—evidenced by 13 new S0–S1 severity security bugs reported today. Despite no new releases, the project is clearly preparing for v0.9.0, with multiple PRs targeting dashboard chat, agent ownership, and cross-platform CI.

---

### **2. Releases**  
**None**  
No new releases were published today or in the last 7 days. The project remains in pre-v0.9.0 development phase, with v0.9.0 tagged as a release milestone in several active issues (e.g., #7432, #11984, #12298). No breaking changes or migration notes are currently available.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- **PR #11406** ([fix(config)!: refuse macOS broad roots in the filesystem channel](https://github.com/zeroclaw-labs/zeroclaw/pull/11406)) – Security fix preventing unsafe filesystem watch paths on macOS.  
- **PR #11320** ([feat(rpc): dispatch plugin webhooks over the core RPC](https://github.com/zeroclaw-labs/zeroclaw/pull/11320)) – Enabled secure plugin-to-core communication via RPC.  
- **PR #11313** ([fix(cli): publish authorization edits from config set and config patch into the running daemon](https://github.com/zeroclaw-labs/zeroclaw/pull/11313)) – Ensures real-time policy enforcement after CLI config updates.  
- **PR #11317** ([docs(runtime): propose bounded plugin webhook RPC placement exception](https://github.com/zeroclaw-labs/zeroclaw/pull/11317)) – Documentation update to clarify RPC exceptions.  
- **PR #11322** ([feat(gateway): forward plugin webhooks to the core over RPC](https://github.com/zeroclaw-labs/zeroclaw/pull/11322)) – Follow-up to #11320, enabling secure plugin integration.  

These merges reflect progress in **core infrastructure stability**, **secure plugin architecture**, and **real-time configuration propagation**.

---

### **4. Community Hot Topics**  
The most active community discussions center on **security vulnerabilities** and **dashboard access controls**:

- **Issue #12301** ([Android SSH server trusts authorized_keys inside writable HOME](https://github.com/zeroclaw-labs/zeroclaw/issues/12301)) – *S0 risk*: Persistent remote access via shell command. **High urgency** due to privilege escalation potential.
- **Issue #12308** ([session delete and TTL only close the session; transcript and payloads stay readable](https://github.com/zeroclaw-labs/zeroclaw/issues/12308)) – *S0 risk*: No production data erasure path. Critical for compliance.
- **PR #12298** ([scoped dashboard chat with review fixes](https://github.com/zeroclaw-labs/zeroclaw/pull/12298)) – Core feature for non-admin user access. High visibility with 13+ contributors involved.

> 🔍 **Underlying Need**: Users demand **fine-grained access control** and **end-to-end data privacy**, especially for enterprise deployments. The spike in S0 bugs suggests a proactive security audit is underway—likely part of v0.9.0 readiness.

---

### **5. Bugs & Stability**  
**Top Severity Bugs Reported (Nov 9, 2026):**  
| Issue | Severity | Affected Component | Description | PR Fix? |
|------|----------|---------------------|-------------|--------|
| #12301 | S0 | Android SSH server | Remote persistent access via `authorized_keys` in writable HOME | ❌ |
| #12308 | S0 | Gateway/api | Session deletion doesn’t erase transcripts/payloads | ❌ |
| #12307 | S0 | Gateway/api | Sessions lose `gw_` namespace → cross-session hijacking | ❌ |
| #12306 | S0 | Channel | Matrix Goal parent turns bypass `effort_routing` allowlist | ❌ |
| #12305 | S0 | Channel | Cost-limit override approved by any allowlisted peer (except Telegram) | ❌ |
| #12304 | S0 | Channel | Colony replies leak operator messages to external members | ❌ |
| #12303 | S0 | Gateway/api | Quickstart apply allows `Execute-only` principals without config write check | ❌ |
| #12302 | S0 | Tools | Bounded delegation drops caller’s sandbox constraints | ❌ |

> ⚠️ **Critical Insight**: All 8 S0 bugs stem from **access control logic flaws** or **data persistence gaps**. None have associated fix PRs yet. This indicates a **critical security audit phase** ahead of v0.9.0.

---

### **6. Feature Requests & Roadmap Signals**  
Key upcoming features signaled by active PRs and issues:  

- **Scoped Dashboard Chat for Non-Admins** ([#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984), [PR #12298](https://github.com/zeroclaw-labs/zeroclaw/pull/12298)) – Enables role-based access to agent chat without admin rights.  
- **Non-Admin Agent Creation with Risk Bounds** ([#12290](https://github.com/zeroclaw-labs/zeroclaw/issues/12290)) – Allows users to create agents under admin oversight.  
- **Peer-Agent Durability & Attributability** ([#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597)) – Making peer interactions traceable and durable.  
- **Bounded Peer-Relay Chains** ([#12287](https://github.com/zeroclaw-labs/zeroclaw/issues/12287)) – Prevent infinite relay loops via hop limits.  
- **Cross-Platform CI Testing** ([#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)) – Expanding test matrix to Windows/macOS.  

> 📌 **Prediction**: These features will likely be included in **v0.9.0**, which is shaping up as a major **security and access control release**.

---

### **7. User Feedback Summary**  
User pain points revealed through issue reports include:  

- **Trust in sandboxing**: Users fear that delegated agents can access host filesystems (`#9872`, `#12302`).  
- **Data retention concerns**: Many worry about session data persisting after deletion (`#12308`, `#12307`).  
- **Lack of granular permissions**: Non-admins feel locked out despite being granted agent access (`#12290`, `#11984`).  
- **Inconsistent behavior across platforms**: Issues like `#12311` (macOS Seatbelt profile) suggest platform-specific edge cases undermine trust.  

> ✅ **Positive Signal**: Users are actively engaging with security and access control—indicating growing maturity and enterprise readiness.

---

### **8. Backlog Watch**  
Several high-priority items remain unaddressed and require maintainer attention:  

- **[Bug] Bounded delegate target resolves filesystem to delegator's workspace** ([#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)) – P1, high risk, no fix PR yet.  
- **[Feature] Make peer-agent turns durable and attributable** ([#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597)) – P2, in-progress, needs final implementation.  
- **[Task] Gateway tests for scoped dashboard chat race conditions** ([#11985](https://github.com/zeroclaw-labs/zeroclaw/issues/11985)) – Follow-up needed for robustness.  
- **[Bug] Disabled agents still run turns via operator chat** ([#12289](https://github.com/zeroclaw-labs/zeroclaw/issues/12289)) – S2, critical UX flaw.  
- **[Enhancement] Run test suite on Windows and macOS in CI** ([#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)) – Still pending full implementation.  

> 🛠️ **Call to Action**: Maintainers should prioritize **security-critical bugs** (#12301–#12308) and **access control features** (#11984, #12290) to ensure v0.9.0 is both secure and usable.

---

**📊 Project Health Score: 8.3/10**  
*Strong technical momentum, high-quality contributions, and focused security work—but urgent action needed on S0 bugs before next release.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*