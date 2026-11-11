# OpenClaw Ecosystem Digest 2026-11-11

> Issues: 289 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-11 02:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-11**

---

### **1. Today's Overview**
OpenClaw remains highly active with a surge in community engagement: **289 issues** and **500 pull requests** updated in the past 24 hours, indicating robust development momentum. The project is navigating critical stability challenges, particularly around session state integrity, authentication reliability, and performance under load. High-severity bugs (diamond lobster) are concentrated in core execution flows—session lifecycle management, model fallbacks, and memory recall—suggesting ongoing refinement of agent orchestration logic. Meanwhile, feature work continues to advance in UI/UX, access control, and cross-provider automation.

---

### **2. Releases**
Two new releases were published today:

- **v2026.11.3**:  
  - ✅ **Private task results**: Subagent completions are now kept private and excluded from streamed chat replies.  
  - ✅ **Reliable child-task handoffs**: Parent agents can safely hand off work after cancelling a child without leaving stale state.  
  🔗 [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.11.3)

- **v2026.9.37** (gateway-only `extended-stable`):  
  - Released from a retired maintenance line; includes security patches, performance fixes, and new model support.  
  - *Note: This release is not recommended for general use unless explicitly required for legacy compatibility.*  
  🔗 [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.9.37)

> ⚠️ **Migration Note**: Users on v2026.10.10 should avoid upgrading to `2026.11.5-beta.1` due to config validation failures (see #193157).

---

### **3. Project Progress**
**Merged/Closed PRs (Today)**:
- **#196942** – Restored pre-#196602 chat behavior while preserving security fixes (web UI).  
- **#196478**, **#196460**, **#196470** – UI polish: focus frames, icon alignment, attachment ordering.  
- **#196960** – Fixed TTS directive hints when overrides are disabled.  
- **#196959** – Prevents forced ChatGPT re-sign-in during network outages.  
- **#196957** – Improved timing measurement for pending agent creation status.  
- **#196965** – Decoupled ClawHub publication from core release pipeline.  

These updates reflect strong focus on **user experience consistency**, **authentication resilience**, and **release pipeline reliability**.

---

### **4. Community Hot Topics**
Top 5 most commented Issues/PRs reveal deep user concerns:

| Issue/PR | Comment Count | Summary | Link |
|--------|---------------|--------|------|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 27 | Short-term recall retention evicts entries nightly → dreaming deep phase never promotes | [Issue #150635](https://github.com/openclaw/openclaw/issues/150635) |
| [#193962](https://github.com/openclaw/openclaw/issues/193962) | 26 | Fix for SQLite header probe timeout unreachable via `openclaw update` | [Issue #193962](https://github.com/openclaw/openclaw/issues/193962) |
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | 18 | Assistant renders twice in CLI backends (live + aggregate view) | [Issue #123792](https://github.com/openclaw/openclaw/issues/123792) |
| [#151962](https://github.com/openclaw/openclaw/issues/151962) | 15 | Phantom user messages appear as internal runtime strings (no transcript entry) | [Issue #151962](https://github.com/openclaw/openclaw/issues/151962) |
| [#170928](https://github.com/openclaw/openclaw/issues/170928) | 10 | Windows 2026.10.2 gateway takes 7–9 min to become ready, intermittently unresponsive | [Issue #170928](https://github.com/openclaw/openclaw/issues/170928) |

🔍 **Underlying Needs**:  
- **Session integrity** (phantom messages, double rendering, state leaks)  
- **Update reliability** (self-healing upgrades, probe timeouts)  
- **Cross-platform stability** (Windows startup latency, CLI backend inconsistency)  
- **Memory & state predictability** (recall eviction, session persistence)

---

### **5. Bugs & Stability**
High-severity bugs reported today highlight systemic risks in core workflows:

| Bug | Severity | Impact | Status | PR/Workaround? |
|-----|----------|--------|--------|----------------|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 🦞 Diamond Lobster | Session state, data loss | Open | No fix PR |
| [#193962](https://github.com/openclaw/openclaw/issues/193962) | 🦞 Diamond Lobster | UX release blocker | Closed | Patch in beta (2026.11.5-beta.1), but upgrade path broken |
| [#170928](https://github.com/openclaw/openclaw/issues/170928) | 🦪 Silver Shellfish | Crash loop, UX friction | Open | No fix yet |
| [#181459](https://github.com/openclaw/openclaw/issues/181459) | 🦪 Silver Shellfish | 3.5 GB DB causes startup gamble | Open | No fix PR |
| [#194403](https://github.com/openclaw/openclaw/issues/194403) | 🦪 Silver Shellfish | Blocked conversations after helper completion | Open | No fix PR |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | 🦪 Silver Shellfish | Codex continuation blocks all follow-ups | Open | No fix PR |

📌 **Critical Risk**: Multiple **session state corruption** and **authentication drift** issues (e.g., #144797, #155868) suggest fragile inter-agent communication. These could lead to data loss or silent failures.

---

### **6. Feature Requests & Roadmap Signals**
Emerging priorities from community input:

| Request | Link | Signal Strength | Predicted In |
|-------|------|------------------|--------------|
| **Explicit cross-provider cron fallback auth** (#192009) | [Issue #192009](https://github.com/openclaw/openclaw/issues/192009) | High (10 comments, P2) | v2026.12 |
| **Enforceable checkpoints & bounded yields** (#138990) | [Issue #138990](https://github.com/openclaw/openclaw/issues/138990) | High (10 comments) | v2026.12 |
| **Manual team-sidebar agent ordering** (#155039) | [Issue #155039](https://github.com/openclaw/openclaw/issues/155039) | Medium (7 comments) | v2026.11 |
| **Let memory slot owner drive Dreams page** (#138366) | [Issue #138366](https://github.com/openclaw/openclaw/issues/138366) | Medium (12 comments) | v2026.12 |
| **Accessibility: expose chat messages as headings** (#154524) | [Issue #154524](https://github.com/openclaw/openclaw/issues/154524) | Medium (8 comments) | v2026.11 |

💡 **Prediction**: The next stable release will likely include **checkpoint enforcement**, **cross-provider fallback authorization**, and **accessibility improvements**—addressing top pain points in long-running sessions and multi-provider setups.

---

### **7. User Feedback Summary**
Real-world user experiences reveal key pain points:

- **Long-lived sessions (>13 days)** suffer from phantom messages (#151962), state drift, and memory bloat.
- **CLI backends** (especially `claude-cli`) exhibit double-rendering (#123792), breaking trust in output fidelity.
- **Windows users** report extreme startup delays (7–9 mins) and intermittent unresponsiveness (#170928).
- **Model fallbacks** often fail silently or leak internal notices (#92473), reducing confidence in reliability.
- **Large databases (>3GB)** cause unpredictable startup failures (#181459), making deployment risky for enterprise users.

✅ **Satisfaction signals**:  
- New privacy controls in `v2026.11.3` are well-received.  
- Minor UI refinements (e.g., attachment order, icon centering) improve usability.

---

### **8. Backlog Watch**
Critical issues with **no assigned fix PRs** and **long-standing unresolved status**:

| Issue | Age | Comments | Severity | Maintainer Attention Needed? |
|------|-----|----------|----------|-------------------------------|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 2026-09-17 | 27 | 🦞 Diamond Lobster | ✅ Yes (core dream phase failure) |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | 2026-07-21 | 12 | 🦞 Diamond Lobster | ✅ Yes (permanent dead-letter queue) |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | 2026-07-22 | 10 | 🦞 Diamond Lobster | ✅ Yes (memory limits bypassed) |
| [#151962](https://github.com/openclaw/openclaw/issues/151962) | 2026-09-18 | 15 | 🦞 Diamond Lobster | ✅ Yes (phantom messages, data loss risk) |
| [#138561](https://github.com/openclaw/openclaw/issues/138561) | 2026-09-04 | 13 | 🦪 Silver Shellfish | ✅ Yes (regression in memory recall) |

⚠️ **Urgent Need**: These high-impact, low-resolution issues represent systemic weaknesses in session state, memory management, and data integrity. Immediate maintainer triage is recommended.

---

**Next Update**: Monitor **#196760** (delegated config approvals) and **#196706** (K8s fsGroup remount repair) — both critical for secure, scalable deployments.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-11**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a phase of maturity and specialization, marked by divergent technical strategies and growing user demands for reliability, security, and cross-platform consistency. Projects are increasingly focused on session integrity, long-running task stability, and secure execution—particularly around authentication, state management, and plugin sandboxing. While innovation in agent orchestration and workflow automation remains strong, the community is shifting from feature velocity to operational robustness, with several projects now prioritizing release stability over rapid iteration. This reflects a maturing landscape where trust, predictability, and enterprise readiness are becoming as critical as novelty.

---

### **2. Activity Comparison**

| Project | Issues (24h) | Pull Requests (24h) | Release Status | Health Score |
|--------|--------------|---------------------|----------------|--------------|
| **OpenClaw** | 289 | 500 | ✅ v2026.11.3, `extended-stable` patch | ⭐⭐⭐⭐☆ (High) |
| **Hermes Agent** | 50 | 50 | ❌ None | ⭐⭐⭐☆☆ (Moderate–High) |
| **QwenPaw** | 14 | 39 | ✅ v2.3.0-beta.4 | ⭐⭐⭐⭐☆ (High) |
| **ZeroClaw** | 16 | 50 | ❌ None (v0.9.0 in pipeline) | ⭐⭐⭐☆☆ (Moderate) |
| **IronClaw** | 0 | 0 | ❌ No activity | ⭐☆☆☆☆ (Inactive) |

> *Health Score: Based on activity level, bug severity, fix velocity, and community engagement.*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most active and technically aggressive project in the ecosystem, with **over 780 total changes (issues + PRs)** in 24 hours—surpassing all peers combined. Its advantage lies in **deep integration of agent orchestration logic**, with a focus on session lifecycle fidelity, model fallback resilience, and privacy-by-default design (e.g., private task results in v2026.11.3). Unlike others, OpenClaw maintains a **multi-tiered release strategy** (stable, beta, extended-stable), enabling granular risk control across deployments. Its community size appears largest, evidenced by 27+ comment threads on high-severity issues like phantom messages and recall eviction. This scale enables faster feedback loops but also amplifies systemic risks when core workflows are compromised.

---

### **4. Shared Technical Focus Areas**  
Across projects, the following **emerging cross-cutting requirements** dominate development priorities:

| Need | Projects Affected | Specific Examples |
|------|-------------------|-------------------|
| **Session & State Integrity** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Phantom messages (#151962), double rendering (#123792), memory leaks, state drift in long sessions |
| **Authentication & Access Control** | OpenClaw, Hermes Agent, ZeroClaw, QwenPaw | OAuth split-brain (#29530), write-only credential management (#12373), path-scoped file access (#92424) |
| **Plugin & Runtime Stability** | QwenPaw, Hermes Agent, OpenClaw | Plugin startup failures (#8653), dependency corruption, silent reaping during install |
| **Cross-Platform UX Consistency** | QwenPaw, OpenClaw, Hermes Agent | Safari rendering bugs (#8663), Windows startup delays (#170928), CLI backend inconsistencies |
| **Secure Execution & Sandboxing** | Hermes Agent, ZeroClaw, OpenClaw | Irreversible file deletion via `osascript`, hard-coded TLS/temperature values, token leakage in URLs |

These patterns indicate a **shared foundational challenge**: building agents that are both powerful and safe, especially in persistent, multi-agent environments.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **Feature Focus** | Deep agent orchestration, privacy, session control | Plugin-driven workflows, desktop UX, TUI polish | Multi-channel integrations (QQ/Feishu), plugin lifecycle | Enterprise-grade security, dashboard access control |
| **Target Users** | Power users, developers, team-based agents | Creative professionals, CLI-centric workflows | Chinese-market channel users, remote teams | DevOps, enterprises, regulated environments |
| **Architecture** | Modular agent hierarchy with fallback logic | Desktop-first, event-loop driven, plugin catalog | Desktop-packaged, channel-specific runtime | Rust-based, zero-trust gateway, WebSocket-hardened |
| **Release Model** | Frequent stable/beta releases with migration notes | Long-form stability cycles, no recent releases | Beta-heavy, rapid iteration toward v2.3.0 final | v0.9.0 pipeline underway; no public release yet |

> 🔍 **Key Insight**: OpenClaw leads in **agent-level complexity management**, while QwenPaw excels in **channel-native deployment**, Hermes Agent in **plugin innovation**, and ZeroClaw in **security-by-design**.

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Indicators |
|------|--------|-----------|
| **Rapid Iteration** | OpenClaw, QwenPaw, Hermes Agent | High PR/issue volume, frequent beta releases, active hot topics |
| **Stabilization Phase** | ZeroClaw | Pre-release version bump, focused on fixing S1/S2 bugs, roadmap tracking |
| **Lagging / Inactive** | IronClaw | No activity for 24h; potential stagnation or transition |

OpenClaw and QwenPaw are in **peak innovation mode**, with daily updates driving product evolution. Hermes Agent shows **strong momentum despite no release**, indicating pre-release refinement. ZeroClaw is transitioning into **stability testing**, preparing for v0.9.0. IronClaw’s inactivity raises concerns about long-term viability.

---

### **7. Trend Signals**  
Based on community feedback and issue trends, three **industry-wide signals** are emerging:

1. **Security Over Feature Velocity**  
   > *Users are demanding safer defaults*: irreversible actions (e.g., `osascript`) must require explicit consent, even in "smart" approval modes. This signals a shift from “autonomy” to “accountability” in agent design.

2. **Session Fidelity as a Core UX Metric**  
   > *Long-running sessions (>13 days) are breaking* due to state corruption, phantom messages, and memory bloat. The need for **checkpoint enforcement**, **bounded yields**, and **predictable recall retention** is now a top priority across projects.

3. **Enterprise-Grade Requirements Are Mainstreaming**  
   > Features like **write-only credential management**, **path-scoped file access**, **role-based dashboards**, and **audit-ready logging** are no longer niche—they appear in multiple projects’ roadmaps, reflecting growing adoption in regulated and team-based environments.

> 💡 **Value for Developers**: Prioritize **state immutability**, **secure configuration handling**, and **user-controlled rollbacks**. These are not future needs—they are today’s differentiators.

---

**Final Assessment**:  
The personal AI agent ecosystem is at a turning point—moving beyond prototyping to production-grade deployment. **OpenClaw leads in scope and speed**, **QwenPaw in platform reach**, **Hermes Agent in creativity**, and **ZeroClaw in security rigor**. For developers, the clear takeaway is: **build for reliability first, innovation second**. Trust, stability, and safety are now the new competitive moats.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-11**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with **50 open issues and 50 open pull requests updated in the last 24 hours**, indicating robust community engagement and ongoing development momentum. The ecosystem is experiencing a surge in platform-specific stability fixes (particularly macOS, Windows, and Telegram/WeChat integrations), while security and session integrity concerns are driving critical discussions. Despite no new releases, the volume of PRs—especially those focused on gateway reliability, TUI UX improvements, and plugin catalog expansion—suggests that core infrastructure updates are being prioritized ahead of a potential release cycle.

---

### **2. Releases**  
❌ **No new releases** were published in the last 24 hours.  
*Note: The project has been stable at v0.23.0+1473.g14485fc (desktop, macOS arm64) as of recent reports, with no breaking changes or migration notes issued.*

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **#152766**: Updated *Decision Ledger* to v0.3.2 with read-only Decision Board (enhanced transparency for human review).  
- **#152907**: Added *Whiteboard* plugin — an agentic visual planning tool for desktop users.  
- **#152416**: Registered *proactive-agent governor* — a subagent supervision tool for long-running turns.  
- **#152705**: Bumped *second-key* to v0.2.0 (Hackathon entry update).  

🚀 **Key Advances:**  
- **Plugin Ecosystem Growth**: 5 new plugin entries added to the catalog today (*IDEA CUT*, *webgraft*, *stagehands*, *Stoa*, *whiteboard*), signaling strong community innovation.  
- **TUI UX Improvements**: Clickable links in prompts and better API key guidance (PR #153057) enhance usability for terminal-based workflows.  
- **Gateway Reliability**: Fixes for Telegram slash-command scope bugs (#153064) and transient file reads (#153059) address persistent delivery failures.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement**:
- **#141346** – [Smart approval auto-approved destructive `osascript` commands](https://github.com/nousresearch/hermes-agent/issues/141346) (39 comments, high severity)  
  → *Underlying Need*: Critical need for safer automation gatekeeping—especially when agents interact with native OS tools like AppleScript. Users demand stronger consent enforcement even in "smart" approval modes.
  
- **#137838** – [macOS gateway exits 75 after missed liveness probes](https://github.com/nousresearch/hermes-agent/issues/137838) (11 comments)  
  → *Underlying Need*: Stability for enterprise deployments; root cause investigation ongoing but suspected to involve event-loop blocking under load.

- **#151727** – [Bots roster times out due to full table re-sort every 5s](https://github.com/nousresearch/hermes-agent/issues/151727) (4 comments)  
  → *Underlying Need*: Scalability for users managing large session stores—current polling logic creates performance bottlenecks.

🔥 **Top PRs by Activity & Impact**:
- **#153064** – Fixed `/resume` and `/restart` cross-topic issues in Telegram (2x fix for bot collision)  
  → *Impact*: Resolves a major usability regression affecting multi-bot setups.
- **#153057** – Made links clickable in TUI prompts + added key-source hints  
  → *Impact*: Directly improves user experience in CLI workflows, reducing friction in setup and authorization.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (P1/P2)**:
| Issue | Severity | Summary | Fix PR? |
|------|----------|--------|--------|
| [#141346](https://github.com/nousresearch/hermes-agent/issues/141346) | P3 (Security) | Smart approval allowed irreversible deletion of unsaved PowerPoint files via `osascript` | ❌ No PR yet |
| [#152557](https://github.com/nousresearch/hermes-agent/issues/152557) | P2 | `write_file` blocked 458s and was idle-reaped mid-call | ✅ Partial fix in #144597 (idle reaper guard) |
| [#152365](https://github.com/nousresearch/hermes-agent/issues/152365) | P2 | WeCom voice message leaves session stuck at 'started' for 12h | ❌ No fix |
| [#148846](https://github.com/nousresearch/hermes-agent/issues/148846) | P2 | Desktop queued prompts lack Edit/Steeer controls | ❌ No fix |

🛑 **Crash/Regression Risks**:
- **#132820**: Matrix `extra` fails `hermes update` on Linux due to native CMake build failure (7 reports this week) — blocks upgrades.
- **#125695**: Single model cooldown disables all auxiliary tasks (vision, smart approvals) for a year — severe credential mismanagement risk.

---

### **6. Feature Requests & Roadmap Signals**  
📈 **Emerging Themes in Feature Requests**:
- **Fine-grained access control**:  
  - [#92424](https://github.com/nousresearch/hermes-agent/issues/92424): Path-scoped file access per profile (multi-profile safety)  
  - [#29530](https://github.com/nousresearch/hermes-agent/issues/29530): Shared auth home for profiled workers to avoid OAuth split-brain  
  → *Signal*: Users want isolated, secure profiles with predictable state management.

- **Enhanced agent governance**:  
  - [#147631](https://github.com/nousresearch/hermes-agent/issues/147631): Parent agent silently stops incomplete tasks after local blocker  
  → *Signal*: Demand for better task lifecycle visibility and error reporting.

- **UX polish for desktop**:  
  - [#148318](https://github.com/nousresearch/hermes-agent/issues/148318): Session click replaces main tab instead of opening in focus  
  - [#148846](https://github.com/nousresearch/hermes-agent/issues/148846): Queued prompts lose Edit/Steeer buttons  
  → *Signal*: Desktop UI needs more consistency and user control.

👉 **Predicted Next Version Features**:  
- Enhanced session state persistence & profile isolation  
- Improved plugin security sandboxing  
- Better TUI feedback and interactivity (clickable links, status indicators)  
- Native support for path-scoped file access (via config or profile policy)

---

### **7. User Feedback Summary**  
💬 **Real Pain Points from Users**:
- **Data loss fear**: Users report irreversible file deletion via `osascript` without proper consent (Issue #141346).  
- **Session instability**: Long-running sessions (e.g., WeCom voice messages) hang indefinitely, causing silent message drops.  
- **Desktop UX friction**: Lack of edit/steer controls for queued prompts and inconsistent tab behavior frustrate power users.  
- **Platform fragility**: Linux users hit fatal `matrix` install crashes; Windows users face UTF-8 encoding errors during subprocess execution.  
- **Trust in automation**: High concern over "smart approval" bypassing safety gates (e.g., background terminal calls).

✅ **Satisfaction Signals**:  
- Positive reception of new plugins (*IDEA CUT*, *webgraft*, *whiteboard*) suggests strong appetite for creative, workflow-enhancing tools.  
- Users appreciate incremental improvements in TUI usability (clickable links, better prompts).

---

### **8. Backlog Watch**  
📌 **Long-Unanswered High-Impact Issues Requiring Attention**:
- **#141346** – Security bug with irreversible data loss (39 comments, 0 👍)  
  → *Urgent*: Requires immediate triage and fix proposal.  
- **#132820** – Matrix E2EE build breaks `hermes update` on Linux (8 comments, 2 👍)  
  → *High priority*: Blocks upgrade path for many users. Needs opt-out mechanism or fallback.  
- **#125695** – Credential cooldown causes cascading disable of unrelated features (10 comments)  
  → *Critical*: Misuse of entitlement system undermines trust in permission model.  
- **#147631** – Incomplete task termination without explanation (3 comments)  
  → *User Experience*: Impacts productivity and debugging. Needs clearer error messaging.

📌 **PRs Waiting for Review**:
- **#152168** – Redesigned agent workspace (1 comment, 0 👍)  
  → *Significant UX change*: Could be a flagship feature if approved.  
- **#153054** – Preserve audio path in transcribed voice notes (1 comment)  
  → *Small but impactful*: Enhances traceability in voice workflows.

---

### 🔗 **Project Health Snapshot**
- **Activity Level**: ⭐⭐⭐⭐☆ (Very High – 50 issues, 50 PRs in 24h)  
- **Stability Risk**: ⚠️⚠️ (Moderate–High – 4 P2/P3 bugs with no fixes)  
- **Feature Momentum**: ⭐⭐⭐⭐☆ (Strong – 5 new plugins, UX enhancements)  
- **Community Trust**: ⚠️ (Mixed – security incidents raise concerns despite active fixes)  

> ✅ **Recommendation**: Prioritize **security audits** (especially around `osascript`, `terminal(background=true)`), **stabilize gateway liveness**, and **address path-scoped file access** in next sprint. The project is healthy but must balance rapid innovation with safety and reliability.

---  
*Digest generated on 2026-11-11 | Source: [Hermes Agent GitHub](https://github.com/nousresearch/hermes-agent)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-11**

---

### **1. Today's Overview**  
QwenPaw remains highly active with strong contributor engagement, evidenced by **39 PRs updated in the last 24 hours** (21 open, 18 merged/closed) and **14 new issues**, indicating rapid iteration and real-world testing. The release of **v2.3.0-beta.4** signals a critical phase in the beta cycle, focused on stability fixes for desktop builds and plugin runtime integrity. A surge in platform-specific bugs—particularly around **Safari rendering**, **QQ channel message handling**, and **plugin startup failures**—suggests growing user adoption across diverse environments, especially Windows and macOS. Overall, the project is in a mature development phase with clear focus on production readiness ahead of v2.3.0 final.

---

### **2. Releases**  
✅ **New Release**: `v2.3.0-beta.4`  
[GitHub Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.4)

#### **What’s Changed**
- **Fix (channels)**: Preserves plugin dependencies across updates and resolves channel startup issues via improved runtime identity validation — critical for stable desktop deployments ([#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653)).
- **Fix (plugins)**: Recovers interrupted additive dependency installations, preventing silent failure states that block QwenPaw startup ([#8659](https://github.com/agentscope-ai/QwenPaw/pull/8659)).

> 🔧 **Migration Note**: Users on `beta.1` to `beta.3` should upgrade to `beta.4` to avoid plugin startup failures and dependency corruption. No breaking changes reported.

---

### **3. Project Progress**  
#### ✅ Merged/Closed PRs (Today)
| PR | Summary | Link |
|----|--------|------|
| [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) | Fixes plugin dependency persistence and channel startup logic for desktop builds | [PR #8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) |
| [#8659](https://github.com/agentscope-ai/QwenPaw/pull/8659) | Adds recovery mechanism for failed plugin dependency installs | [PR #8659](https://github.com/agentscope-ai/QwenPaw/pull/8659) |
| [#8665](https://github.com/agentscope-ai/QwenPaw/pull/8665) | Version bump to `2.3.0b4` | [PR #8665](https://github.com/agentscope-ai/QwenPaw/pull/8665) |
| [#8644](https://github.com/agentscope-ai/QwenPaw/pull/8644) | Resolved: Channel plugins failing activation due to `AttributeError` in `validate_runtime_identity` | [PR #8644](https://github.com/agentscope-ai/QwenPaw/pull/8644) |
| [#8406](https://github.com/agentscope-ai/QwenPaw/pull/8406) | Fixed: QQ channel enabled flag silently reset to false without warning | [PR #8406](https://github.com/agentscope-ai/QwenPaw/pull/8406) |

> 🚀 **Key Advancement**: Critical runtime fixes for **desktop packaging** and **plugin lifecycle management** now stabilized in `beta.4`.

---

### **4. Community Hot Topics**  
#### 🔥 Most Active Issues & PRs
| Issue/PR | Title | Activity | Link |
|--------|-------|---------|------|
| [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | **Feishu channel startup race condition** → `CHANNEL_NOT_CONNECTED` on every start | Open, 2 comments | [Issue #8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) |
| [#8663](https://github.com/agentscope-ai/QwenPaw/issues/8663) | **Safari: Message queue action buttons not rendered** | Open, 1 comment | [Issue #8663](https://github.com/agentscope-ai/QwenPaw/issues/8663) |
| [#8670](https://github.com/agentscope-ai/QwenPaw/pull/8670) | **Fix Safari icon rendering in message queue** | Open, 1 comment | [PR #8670](https://github.com/agentscope-ai/QwenPaw/pull/8670) |
| [#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) | **Attachment path truncated to drive root (`C:\`) since `beta.1`** | Open, 1 comment | [Issue #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) |
| [#8656](https://github.com/agentscope-ai/QwenPaw/issues/8656) | **Request: Add Mistral provider plugin support** | Open, 1 comment | [Issue #8656](https://github.com/agentscope-ai/QwenPaw/issues/8656) |

#### 🔍 Analysis of Underlying Needs:
- **Cross-browser compatibility** (especially Safari) is emerging as a key UX pain point.
- **Desktop build reliability** remains fragile, particularly for Feishu and QQ channels.
- **Plugin ecosystem expansion** is driving demand for **Mistral** and **Aliyun Token Plan** integration.
- **Path resolution bugs** suggest deeper filesystem abstraction issues in file attachment handling.

---

### **5. Bugs & Stability**  
#### ⚠️ High-Priority Bugs Reported (Ranked by Severity)
| Bug | Description | Severity | Fix PR? | Link |
|-----|-------------|----------|--------|------|
| [#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) | Attachment paths truncated to `C:\` on Windows → images fail to load | Critical | ❌ | [Issue #8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) |
| [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | Feishu channel fails to start on every launch → `CHANNEL_NOT_CONNECTED` | High | ❌ | [Issue #8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) |
| [#8663](https://github.com/agentscope-ai/QwenPaw/issues/8663) | Safari hides message queue action icons → unusable UI | Medium | ✅ ([PR #8670](https://github.com/agentscope-ai/QwenPaw/pull/8670)) | [Issue #8663](https://github.com/agentscope-ai/QwenPaw/issues/8663) |
| [#8651](https://github.com/agentscope-ai/QwenPaw/issues/8651) | QQ C2C image-only messages dropped silently | Medium | ❌ | [Issue #8651](https://github.com/agentscope-ai/QwenPaw/issues/8651) |
| [#8661](https://github.com/agentscope-ai/QwenPaw/issues/8661) | `/workspace/` links open SPA HTML instead of triggering download | Medium | ✅ ([PR #8662](https://github.com/agentscope-ai/QwenPaw/pull/8662)) | [Issue #8661](https://github.com/agentscope-ai/QwenPaw/issues/8661) |

> 💡 **Note**: Two high-impact bugs remain unresolved: **attachment path truncation** and **Feishu channel startup failure** — both affect core functionality on desktop platforms.

---

### **6. Feature Requests & Roadmap Signals**  
#### 📌 Top User-Requested Features
| Request | Details | Link |
|--------|--------|------|
| **Aliyun Token Plan: Add `thinking_param_style` to model catalog** | Needed to enable "Thinking level" controls in Console for Aliyun TTS/LLM models | [Issue #7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) |
| **Support Mistral provider plugin** | Enable reasoning & prompt caching for Mistral OpenAI-compatible endpoints | [Issue #8656](https://github.com/agentscope-ai/QwenPaw/issues/8656) |
| **Add local engine/GPU/auto-update controls** | Users want direct control over `llama.cpp`, `MLX`, and auto-updates in Console | [PR #8648](https://github.com/agentscope-ai/QwenPaw/pull/8648) |
| **Nested skill directories** | Organize skills under categories like `<category>/<skill>/SKILL.md` | [PR #8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) |

> 🎯 **Prediction**: These features are likely candidates for inclusion in **v2.3.0 final**, especially **local model engine controls** and **nested skills**, which align with ongoing PR momentum.

---

### **7. User Feedback Summary**  
Users are reporting **high satisfaction with core agent workflows** but significant frustration with **platform-specific edge cases**:
- **Windows users** struggle with file path handling (`C:\` truncation), image loading, and plugin startup.
- **macOS/Safari users** face UI rendering issues, especially in message queues.
- **Remote Docker deployments** need password login support (requested in #8664).
- **Aliyun Token Plan users** feel locked out of advanced thinking controls due to missing metadata.
- **Feishu and QQ channel users** report intermittent connectivity and silent failures.

> 📊 **Sentiment**: Mixed — strong enthusiasm for AI agent capabilities, but growing concern over **desktop stability** and **browser compatibility**.

---

### **8. Backlog Watch**  
#### ⏳ Long-Unanswered or High-Impact Issues Needing Attention
| Issue | Status | Age | Priority | Link |
|------|--------|-----|----------|------|
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | Open | 77 days | 🔴 High | [Issue #7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) |
| [#8656](https://github.com/agentscope-ai/QwenPaw/issues/8656) | Open | 1 day | 🔴 High | [Issue #8656](https://github.com/agentscope-ai/QwenPaw/issues/8656) |
| [#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650) | Open | 2 days | 🟡 Medium | [Issue #8650](https://github.com/agentscope-ai/QwenPaw/issues/8650) |
| [#8667](https://github.com/agentscope-ai/QwenPaw/issues/8667) | Open | 1 day | 🔴 Critical (Release Duty) | [Issue #8667](https://github.com/agentscope-ai/QwenPaw/issues/8667) |

> 🛠️ **Urgent**: Maintainers should prioritize **Aliyun Token Plan metadata**, **Mistral provider support**, and **Safari fix** before v2.3.0 final. **Release duty checks** must be completed promptly.

---

✅ **Project Health Score**: **High** — Active development, strong community input, and timely bug fixes. However, **desktop stability and cross-browser UX** require immediate attention to maintain trust during beta phase.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-11**

---

### **1. Today's Overview**  
ZeroClaw (v0.9.0 roadmap) remains in active development with strong momentum: 50 PRs updated in the last 24 hours (39 open, 11 merged/closed), and 16 new issues logged. The project is focused on stabilizing core runtime behavior, improving security and configuration handling, and refining dashboard UX for non-admin users. High-severity bugs related to TLS, temperature defaults, and credential exposure have been identified, while feature work continues on voice controls, SSH reuse, and chat channel enhancements. Despite no new releases, the team is preparing for v0.9.0 via coordinated version bump and dependency updates.

---

### **2. Releases**  
❌ **No new releases**  
There are currently **no new releases** as of 2026-11-11. However, **PR #12377** (`chore(release): bump version to v0.9.0`) was closed today, indicating that the release pipeline has been triggered and versioning is now aligned with the upcoming v0.9.0 milestone. This includes updates across 33 workspace packages and `Cargo.lock` files. No breaking changes or migration notes are documented yet—expect these in pre-release documentation.

🔗 [PR #12377: Bump version to v0.9.0](https://github.com/zeroclaw-labs/zeroclaw/pull/12377)

---

### **3. Project Progress**  
Today’s progress centers on **security hardening**, **runtime stability**, and **dashboard UX refinement**:

- ✅ **PR #12367**: Fixed hard-coded `temperature = 0.0` in heartbeat and model-routing probe — critical for compatibility with models rejecting fixed temperature values.
- ✅ **PR #12377**: Finalized version bump to `v0.9.0`, aligning all dependencies and lockfiles for coordinated release.
- ✅ **PR #12335**: Removed paired WebSocket credentials from URLs — mitigates potential token leakage in browser history/logs.
- ✅ **PR #12323**: Fixed HTTP client binding to Tokio runtime, preventing use-after-dispatch errors.
- ✅ **PR #12322**: Upgraded bundled SQLite to 3.54.1 without waiving advisory — improves security posture and resolves RUSTSEC-2026-0459.

These fixes reflect a shift toward robustness and secure-by-default design ahead of v0.9.0.

---

### **4. Community Hot Topics**  
The most active discussions revolve around **access control**, **authentication flow**, and **user experience gaps**:

- 🔥 **Issue #7432** ([Tracker]: Runtime, dashboard sign-in and gateway delivery) – *16 comments*, accepted, high risk. This is the central roadmap tracker for v0.9.0’s remaining runtime and gateway features. It underscores ongoing coordination between security, config, and architecture teams.
- 🔥 **Issue #12373** ([Feature]: Write-only WebUI credential management) – Open since 2026-11-10, no comments yet. A high-impact request for operator-only secret management with scoped references — signals growing demand for enterprise-grade access control.
- 🔥 **PR #11847** ([feat(channels): add native Rust XMPP]) – 11 comments, reviewed by Core Team. This large-scale integration (XL size) shows community interest in expanding communication channels beyond Telegram/Wecom/WeChat, particularly for privacy-focused environments.

These items highlight a strategic pivot: **from feature expansion to secure, auditable, and operator-controlled deployment**.

---

### **5. Bugs & Stability**  
Critical stability issues were reported and partially addressed today:

| Issue | Severity | Status | Fix PR | Summary |
|------|----------|--------|--------|--------|
| [#12366](https://github.com/zeroclaw-labs/zeroclaw/issues/12366) | S2 (degraded behavior) | Closed | ✅ [#12367](https://github.com/zeroclaw-labs/zeroclaw/pull/12367) | Hard-coded temperature in heartbeat/model routing probes breaks model compatibility. |
| [#12354](https://github.com/zeroclaw-labs/zeroclaw/issues/12354) | S1 (workflow blocked) | Closed | ❌ None yet | zerorelay doesn’t flush TLS writes → dashboard assets hang until idle timeout (~5 minutes). |
| [#12362](https://github.com/zeroclaw-labs/zeroclaw/issues/12362) | S2 (degraded behavior) | Closed | ❌ None yet | Skill review fork hardcodes `temperature = 0.3`, causing HTTP 400 on strict models like Reflection AI. |
| [#12357](https://github.com/zeroclaw-labs/zeroclaw/issues/12357) | S2 (degraded behavior) | Closed | ❌ None yet | Limited accounts exit at startup due to fatal config/logs pane failures. |
| [#12326](https://github.com/zeroclaw-labs/zeroclaw/issues/12326) | S3 (minor issue) | Closed | ❌ None yet | Pruned docs versions return GitHub Pages’ generic 404, not custom error page. |

> ⚠️ **Notable gap**: While two high-impact bugs (S1/S2) were closed with fixes, **three remain unpatched** despite being marked as workflow-blocking or degraded behavior.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging trends suggest **enterprise readiness** and **user autonomy** are top priorities:

- 🎯 **Issue #12373** ([Feature]: Write-only WebUI credential management) – Request for metadata-only listing, write-only creation, and controlled references. Indicates growing need for auditability and least-privilege access in production deployments.
- 🎯 **Issue #12372** ([Feature]: Git channel placeholder mode) – Adds draft_mode options (placeholder comment vs. streaming). Users want cleaner, more predictable Git interactions—especially in CI/CD workflows.
- 🎯 **Issue #12361** ([Multi-turn fails with providers requiring reasoning_content]) – Highlights growing support for advanced AI providers like Beam/Reflection AI. The absence of `reasoning_content` in ZeroClaw’s `ChatMessage` struct is a clear API limitation.

➡️ **Predicted v0.9.0 focus areas**: Secure credential management, enhanced provider compatibility (especially multi-turn), improved Git channel UX, and better role-based access in the dashboard.

---

### **7. User Feedback Summary**  
Real user pain points are emerging from operational use cases:

- **Limited users cannot fully use the dashboard** – As noted in #11984 and #12357, non-admin users can sign in but lack chat access or face crashes. This creates friction in team-based agent usage.
- **Configuration fragility under concurrent edits** – #12347 reveals a race condition where `zerocode-config.toml` can lose updates during concurrent writes, risking data loss in shared environments.
- **Inconsistent model behavior** – Multiple reports confirm that hardcoded temperature values break compatibility with modern AI providers (e.g., Reflection AI), leading to silent failures.
- **Poor error handling in docs and web assets** – Broken links to pruned docs versions and unhandled 404s degrade trust in long-term documentation reliability.

Users are increasingly reporting **production-readiness concerns** — especially around security, concurrency, and integrations.

---

### **8. Backlog Watch**  
Several high-priority, unresolved issues require maintainer attention:

- 🔴 **Issue #7432** – *Open, accepted, high risk* – The master tracker for v0.9.0’s runtime and gateway roadmap. Still lacks detailed sequencing or final acceptance evidence. **Needs status update and prioritization**.
- 🔴 **Issue #12361** – *Open, S2 severity* – Multi-turn failure with major providers like Beam. Currently unaddressed despite impact on advanced use cases.
- 🔴 **Issue #12373** – *Open, no implementation yet* – Write-only credential management. High-value for enterprises but stalled due to scope ambiguity.
- 🔴 **Issue #12354** – *Closed but no fix PR* – Workflow-blocked TLS flush issue in `zerorelay`. Critical for dashboard performance; fix should be prioritized.

> 💡 **Recommendation**: The Core Team should triage #7432 and #12373 within 48 hours to avoid further delay in v0.9.0 planning.

---

✅ **Summary**: ZeroClaw is in a strong state of preparation for v0.9.0, with significant technical improvements underway. However, **unresolved high-severity bugs and delayed feature implementations** indicate a need for tighter triage and prioritization. The project is maturing toward enterprise-grade reliability — but only if backlog bottlenecks are addressed promptly.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*