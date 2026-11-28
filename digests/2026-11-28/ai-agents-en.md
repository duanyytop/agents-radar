# OpenClaw Ecosystem Digest 2026-11-28

> Issues: 344 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-28 04:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-28**

---

### **1. Today's Overview**  
OpenClaw remains highly active with a robust momentum in development and community engagement. On November 28, 2026, the project saw **344 new issues** and **500 pull requests** updated in the past 24 hours—indicating intense contributor activity and ongoing user-driven feedback. The release of **v2026.12.1-beta.1** signals a focus on stability improvements, particularly around update mechanisms and prompt caching. While core functionality is advancing rapidly, several high-severity bugs related to memory management, session state corruption, and crash loops are emerging as critical blockers, especially for ARM64 and Windows users.

---

### **2. Releases**  
**🆕 v2026.12.1-beta.1** – *Released: 2026-11-28*  
[GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.12.1-beta.1)  

#### **Highlights**  
- **Git Update Improvements**: Prepared releases now use a resident launcher, enabling non-disruptive package updates without stopping the Gateway.  
- **Prompt Caching**: Warm prompt cache is now reused across routes (read-only), improving inference efficiency and reducing redundant computation.  

> ✅ **Migration Note**: No breaking changes reported. Users should expect smoother background updates and improved response consistency during long-running sessions.  

---

### **3. Project Progress**  
**✅ Merged/Closed PRs (Today)**: 220  
The day’s most impactful merged changes include:  
- **PR #207207** ([docs/skills](https://github.com/openclaw/openclaw/pull/207207)): Optimized skill loading by only fetching procedures relevant to the selected task—reducing startup overhead and memory usage.  
- **PR #207202** ([improve: defer browser profile setup](https://github.com/openclaw/openclaw/pull/207202)): Prevents unnecessary initialization when no browser config exists—critical for CLI-only workflows.  
- **PR #207196** ([fix: cold Skills detail loads](https://github.com/openclaw/openclaw/pull/207196)): Resolves layout test flakiness due to timing race conditions in first-load scenarios.  
- **PR #207211** ([chore(i18n): refresh native locales](https://github.com/openclaw/openclaw/pull/207211)): Synchronizes iOS/macOS app localization to prevent stale UI strings.  

These fixes collectively improve performance, reliability, and developer experience—especially for headless or mobile deployments.

---

### **4. Community Hot Topics**  
Top issues and PRs driving discussion today:

| Issue/PR | Title | Comments | Link |
|--------|-------|----------|------|
| **#204775** [Design] Prepared-release updates (state, ownership, plan) | *Shared design reference for update path* | 58 | [Issue #204775](https://github.com/openclaw/openclaw/issues/204775) |
| **#178359** [Bug] `doctor --fix --non-interactive` idles for 15+ min | *Hangs during DB repair with no output* | 33 | [Issue #178359](https://github.com/openclaw/openclaw/issues/178359) |
| **#192547** Reduce Gateway startup memory on constrained ARM64 hosts | *Memory overflow despite 1 GiB limit* | 30 | [Issue #192547](https://github.com/openclaw/openclaw/issues/192547) |
| **#207173** Improve: open cold chats with latest 24 messages | *User request for better default chat behavior* | 0 (new) | [PR #207173](https://github.com/openclaw/openclaw/pull/207173) |

> 🔍 **Analysis**: The top issues reflect **deep system-level concerns**—particularly around **resource exhaustion**, **update resilience**, and **tooling reliability**. The high comment count on #204775 suggests strong interest in architectural clarity, indicating that teams need a unified understanding of how updates propagate across environments.

---

### **5. Bugs & Stability**  
High-priority bugs reported today, ranked by severity:

| Severity | Issue | Summary | Fix PR? |
|---------|-------|---------|--------|
| ⚠️ **P0 / Diamond Lobster** | [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex protected continuation blocks all follow-ups; session reports "no active run" | ❌ |
| ⚠️ **P0 / Diamond Lobster** | [#152275](https://github.com/openclaw/openclaw/issues/152275) | Post-commit plugin failure leaves model catalog & reply dispatch unusable | ❌ |
| ⚠️ **P1 / Silver Shellfish** | [#195497](https://github.com/openclaw/openclaw/issues/195497) | Memory growth to ~3GB in 17h on gateway process (v2026.11.1) | ❌ |
| ⚠️ **P1 / Silver Shellfish** | [#205007](https://github.com/openclaw/openclaw/issues/205007) | Security concern: potential complete device takeover via Go license misuse | ⚠️ *Security review pending* |
| ⚠️ **P1 / Silver Shellfish** | [#196820](https://github.com/openclaw/openclaw/issues/196820) | Control UI locks up at 100% CPU due to `getAnimations()` loop (macOS) | ❌ |

> 📌 **Stability Alert**: Multiple **memory leaks**, **crash loops**, and **UI hangs** persist across platforms—especially on **ARM64**, **Windows**, and **macOS**. These are not isolated but systemic, suggesting deeper runtime or GC issues in Node.js integration.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging user needs signal future direction:

| Request | Key Insight | Likely Next Version? |
|--------|-------------|------------------------|
| [#205007](https://github.com/openclaw/openclaw/issues/205007) | Security: risk of uncontrolled device takeover via Go license | ❗ High priority if verified |
| [#204701](https://github.com/openclaw/openclaw/issues/204701) | Configurable git timeout + table exclusions in `backup git create` | ✅ Likely in v2026.12.1 stable |
| [#193150](https://github.com/openclaw/openclaw/issues/193150) | Dreaming Promotion cron emits no progress → false aborts | ✅ Critical for multi-agent setups |
| [#158897](https://github.com/openclaw/openclaw/issues/158897) | Make `MEMORY.md` promotion size budget configurable | ✅ User demand for larger dreams |
| [#155588](https://github.com/openclaw/openclaw/issues/155588) | Completed automation runs leave broken chat links | ✅ UX polish needed |

> 💡 **Roadmap Signal**: Users are demanding **better observability**, **configurability**, and **resilience in automation and backup systems**—suggesting v2026.12 will prioritize operational maturity over feature expansion.

---

### **7. User Feedback Summary**  
Real pain points from users:  
- **“My agent hangs after restart”** — macOS users report **in-process restarts hang forever** (#200148).  
- **“I can’t delete agents”** — multiple reports of **directory deletion failing silently** due to registry inconsistencies (#205927).  
- **“My automation runs fail mysteriously”** — recurring issue where **agent fails to start due to “physical store scope” error** despite valid config (#207180).  
- **“The UI freezes”** — macOS users see **100% CPU spikes** in Control UI after upgrade (#196820).  
- **“No progress logs”** — users unable to debug cron jobs because **no run progress is logged** (#193150).

> 😤 **Satisfaction Level**: Mixed. Core AI functionality works, but **operational reliability and diagnostics remain weak**, especially on edge devices and OSes.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues needing maintainer attention:

| Issue | Status | Why It Matters | Link |
|------|--------|----------------|------|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | Closed (stale) | Unbounded SQLite tables fill disk over time — **critical data hygiene issue** | [Issue #114612](https://github.com/openclaw/openclaw/issues/114612) |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | Open | `session.maintenance` ignores max limits — **silent memory/data bloat** | [Issue #112638](https://github.com/openclaw/openclaw/issues/112638) |
| [#158373](https://github.com/openclaw/openclaw/issues/158373) | Open | Offline update fails after Gateway stop — **blocker for production upgrades** | [Issue #158373](https://github.com/openclaw/openclaw/issues/158373) |
| [#104068](https://github.com/openclaw/openclaw/issues/104068) | Closed (stale) | Support profile-qualified agent-to-agent routing — **key for multi-profile deployments** | [Issue #104068](https://github.com/openclaw/openclaw/issues/104068) |

> ⏳ **Urgency**: These issues represent **systemic risks** to long-term stability and scalability. They require dedicated triage and roadmap prioritization.

---

### **Final Assessment**  
OpenClaw is in a **high-growth, high-stakes phase**. The project shows strong engineering velocity and community engagement, but **stability and operational resilience are lagging behind feature innovation**. Immediate focus should shift toward:  
- Fixing memory leaks and crash loops (especially on ARM64 and Windows)  
- Improving diagnostic visibility (logs, progress tracking)  
- Formalizing update and rollback procedures  
- Addressing security posture (e.g., #205007)  

Without these, even the most advanced features may fail in real-world deployment.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-28**

---

### **1. Ecosystem Overview**  
The open-source personal AI agent landscape in late 2026 is characterized by rapid innovation, increasing architectural maturity, and growing focus on operational reliability. Projects are shifting from feature-first development toward system resilience, observability, and enterprise readiness—evident in cross-project emphasis on session stability, memory management, and plugin modularity. A clear trend toward **modular extensibility**, **cross-platform consistency**, and **secure, auditable workflows** is emerging as core differentiators. The ecosystem is now at a pivotal stage: high velocity meets systemic risk, demanding stronger quality gates and clearer roadmaps.

---

### **2. Activity Comparison**

| Project         | Issues (Last 24h) | PRs (Last 24h) | Releases (Today) | Health Score¹ | Status |
|------------------|-------------------|----------------|------------------|---------------|--------|
| **OpenClaw**     | 344               | 500            | v2026.12.1-beta.1 | ⚠️ **Moderate** | High activity, stability concerns |
| **Hermes Agent** | 50                | 50             | v0.23.5          | ✅ **Healthy**   | Stable patch, strong momentum |
| **QwenPaw**      | 10                | 25             | None             | ✅ **Healthy**   | Polishing for v2.4+ |
| **ZeroClaw**     | 11                | 39             | None             | ⚠️ **Stable**    | Pre-release refinement |
| **IronClaw**     | 0                 | 0              | None             | ❌ **Inactive**  | No recent engagement |

> **¹ Health Score**: Based on stability alerts, fix velocity, user satisfaction signals, and release cadence (scale: 1–5).

---

### **3. OpenClaw's Position**  
OpenClaw leads in **development velocity** and **community scale**, with 344 new issues and 500 PRs daily—far exceeding peer projects. Its technical approach emphasizes **resident launchers**, **prompt caching across routes**, and **deep integration with Git-based update mechanisms**, positioning it as a platform for long-running, production-grade agents. However, this speed comes at a cost: multiple P0/P1 bugs related to **memory leaks**, **crash loops**, and **session corruption** on ARM64 and Windows indicate under-resourced stability testing. Compared to peers, OpenClaw has the largest contributor base and most active discussion threads (e.g., #204775), but its community is also more fragmented by technical debt and urgent fixes.

---

### **4. Shared Technical Focus Areas**  
Across all active projects, several **emerging systemic requirements** are converging:

| Need | Projects Affected | Specific Examples |
|------|-------------------|-------------------|
| **Memory & Session Stability** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Memory growth to 3GB over 17h (#195497); `gc.collect()` blocking GIL (#150518); tool leakage in code mode (#8954) |
| **Plugin/Provider Reliability** | OpenClaw, Hermes Agent, ZeroClaw | Image loss in OpenRouter responses (#12774); failed plugin migration (#159644); missing workspace refs in cron API (#8960) |
| **Operational Observability** | All except IronClaw | Missing logs in cron jobs (#193150); no progress tracking; need for JSON usage output (`hermes usage --json`) |
| **Cross-Platform Consistency** | OpenClaw, Hermes Agent, QwenPaw | GPU load on Linux + AMD (#89732); Windows symlink issues (#8941); ARM64 memory overflow (#192547) |
| **Config & Security Hardening** | ZeroClaw, OpenClaw, QwenPaw | Strict config validation (#12779); security review pending (#205007); governance rule configurability (#8955) |

These shared pain points suggest that **systemic engineering rigor**—not just feature velocity—is now the primary bottleneck for real-world adoption.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **Feature Focus** | Core infrastructure, update resilience, prompt optimization | Plugin-driven extensibility, autonomous skill learning | Console UX, recovery logic, enterprise deployment | Provider integration, desktop tools, security policy |
| **Target Users** | DevOps, edge devices, production agents | Developers, self-hosted power users | Enterprise teams, developers needing stable UI | Enterprises, compliance-heavy orgs |
| **Architecture** | Gateway-centric, Git-integrated updates, resident launcher | Plugin-catalog model, modular core | Relay + console stack, runtime path flexibility | RPC-based, feature-flagged tools, strict config validation |
| **Innovation Edge** | Update mechanism design, prompt reuse | Skill self-improvement with quality control | Live context chips, hot-reload plugins | Multi-provider resilience, audit-ready error codes |

> **Key Insight**: While OpenClaw pushes boundaries in *infrastructure*, ZeroClaw focuses on *compliance and security*, QwenPaw on *UX polish*, and Hermes Agent on *autonomous evolution*—each carving distinct niches.

---

### **6. Community Momentum & Maturity**  

- **High-Momentum Projects (Rapid Iteration)**:  
  - **OpenClaw**: Highest activity; driven by massive contributor volume but plagued by instability.  
  - **Hermes Agent**: Steady innovation with strong plugin decoupling and UI refinements.  
  - **ZeroClaw**: Focused pre-release iteration; prioritizing S1 bugs and provider compatibility.

- **Stabilizing Projects (Polishing for Release)**:  
  - **QwenPaw**: Quiet but consistent progress; preparing for v2.4 with cloud-native and governance features.  
  - **IronClaw**: Dormant—no activity suggests either stagnation or deep refactoring phase.

> **Maturity Signal**: OpenClaw and Hermes Agent are in **"growth-at-scale"** mode, while QwenPaw and ZeroClaw are entering **"release-readiness"** phases—indicating a bifurcation between innovation engines and stability-focused rollouts.

---

### **7. Trend Signals**  
From community feedback and PR patterns, three **industry-wide trends** emerge:

1. **Demand for Predictable Autonomy**  
   > Users fear self-improving agents regress workflows (#136931, Hermes Agent). This signals a shift from "more intelligence" to **controlled, auditable autonomy**—a prerequisite for trust in production use.

2. **Enterprise-Grade Operational Rigor**  
   > Requests for **config validation**, **audit logs**, **recovery budgets**, and **governance rules** (QwenPaw, ZeroClaw) reflect growing adoption in regulated environments. Open-source agents must now meet enterprise SLA standards.

3. **Modular, Plugin-First Architecture is Now Standard**  
   > Decoupling WeChat/DingTalk integrations (#159644), enabling live plugin reloads (#54941), and supporting custom model endpoints (#8928) show that **extensibility is no longer optional**—it’s foundational.

> 💡 **Value for Developers**: These trends signal that future success will favor projects that prioritize **observability**, **resilience**, and **extensibility over raw feature count**—with stability and security becoming key competitive advantages.

---

**Conclusion**: The personal AI agent ecosystem is maturing rapidly. While OpenClaw leads in scale and ambition, **stability and operational robustness** are now the true differentiators. Developers should prioritize projects with proven resilience, strong configuration controls, and mature plugin ecosystems—especially for production deployments. The next wave of innovation will not be about smarter agents, but **safer, more predictable, and easier-to-manage ones**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-28**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 open pull requests reported in the last 24 hours—indicating sustained momentum across development, user feedback, and community contributions. A new patch release, **v0.23.5**, was issued today to consolidate ~338 merged PRs since v0.23.4 into stable builds for CLI, Docker, Microsoft Store, and Hermes Cloud. The ecosystem is undergoing significant architectural refinement, particularly around plugin decoupling, session lifecycle management, and cross-platform integration. Despite high activity, several critical stability and UX issues persist, especially in desktop and gateway components.

---

### **2. Releases**  
- **v0.23.5** (Released: 2026-11-27)  
  - *Type:* Patch release  
  - *Summary:* Rolls up ~338 merged PRs since v0.23.4 into a stable production-ready version across all platforms: GitHub CLI, Docker, Microsoft Store, and Hermes Cloud.  
  - *Notes:* No breaking changes. Full changelog will be included in **v0.24.0**. This release focuses on stability and compatibility fixes ahead of major feature integrations.  
  - 🔗 [Release Notes](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.5)

---

### **3. Project Progress**  
**Merged/Completed PRs (Today):**  
- ✅ **PR #160995** – `plugin-catalog`: Bumps REVamp to **1.0.0** (stable), introducing improved channel states and UI consistency.  
- ✅ **PR #160994** – Adds `--json` output to `hermes usage --provider nous`, enabling programmatic access to account usage data.  
- ✅ **PR #160993** – Enables plugins to dynamically label and split sidebar messaging sections via `session.sourceLabels`.  
- ✅ **PR #159644 / #159649 / #159638** – Refactors Weixin, WeCom, and DingTalk integrations out of core into official plugins (auto-migrated). Enhances modularity and reduces core bloat.  

These updates reflect a strategic shift toward **plugin-driven extensibility** and **platform-specific isolation**, reducing core complexity while improving maintainability.

---

### **4. Community Hot Topics**  
Top 3 most commented issues and PRs reveal key pain points:

| Issue/PR | Title | Comments | Link | Analysis |
|--------|------|---------|------|---------|
| [#89732](https://github.com/nousresearch/hermes-agent/issues/89732) | Desktop ambient animations hold iGPU at 50–69% sustained (Linux + AMD) | 9 | 🔗 | Critical performance regression affecting Linux users with AMD GPUs; suggests inefficient rendering or animation loop in desktop shell. High visibility due to hardware-specific impact. |
| [#136931](https://github.com/nousresearch/hermes-agent/issues/136931) | Skill self-improvement can regress good workflows | 8 | 🔗 | Highlights a fundamental tension in autonomous learning: how to distinguish durable improvements from temporary workarounds. Core AI agent reliability hinges on this. |
| [#152168](https://github.com/nousresearch/hermes-agent/pull/152168) | Redesign desktop workspace with classic recovery toggle | 0 (but high visibility) | 🔗 | Most discussed PR of the day. Users are eager for visual refresh but demand backward compatibility. Signals strong interest in UI/UX evolution. |

> 💬 **Underlying Need:** Users want **predictable autonomy** (no regressions), **hardware efficiency**, and **modern, flexible UIs** without sacrificing stability.

---

### **5. Bugs & Stability**  
**Critical Issues Reported (P2/P1 severity):**  
1. **[#160977](https://github.com/nousresearch/hermes-agent/issues/160977)** – Anthropic usage reporting scales 1% → 100% due to flawed `fraction=True` logic.  
   - *Impact:* Misleading billing data; could affect cost monitoring.  
   - *Fix Status:* No fix PR yet — urgent priority.  
2. **[#150518](https://github.com/nousresearch/hermes-agent/issues/150518)** – Gateway freezes for minutes on macOS due to `gc.collect()` blocking GIL during memory trim.  
   - *Impact:* Complete service unavailability. Critical for Mac users.  
   - *Fix Status:* No PR submitted; requires low-level Python/GIL optimization.  
3. **[#160983](https://github.com/nousresearch/hermes-agent/issues/160983)** – `hermes kanban claim` falsely reclaims cards after TTL if worker never binds.  
   - *Impact:* Task loss risk; undermines Kanban reliability.  
   - *Fix Status:* No PR yet.  
4. **[#160945](https://github.com/nousresearch/hermes-agent/issues/160945)** – Cron agents don’t receive external memory tools (e.g., Honcho) despite provider activation.  
   - *Impact:* Breaks automated workflows relying on memory providers.  
   - *Fix Status:* No PR submitted.  

> ⚠️ **Stability Risk:** Multiple P2 bugs in core components (gateway, cron, sessions) suggest ongoing fragility in long-running agent state management.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority feature signals emerging from user requests:

| Feature Request | Link | Significance |
|----------------|------|-------------|
| **Live plugin hot-reload** (`/reload-plugins`) – #54941 | 🔗 | Users demand dynamic plugin management without restarting sessions. Indicates growing reliance on modular tooling. |
| **Attach log excerpts as context chips** – #160948 | 🔗 | Strong UX signal: users want to reuse past reasoning directly in chat, improving continuity. |
| **Native delegation result streaming mid-turn** – #136708 (PR) | 🔗 | Addresses a major latency bottleneck. Already implemented in PR, suggesting it’s nearing inclusion. |
| **Configurable empty-chat wordmark** – #88512 | 🔗 | Low-hanging fruit, but indicates desire for personalization and branding control. |

> 📌 **Predicted for v0.24.0:** Live delegation streaming, plugin hot-reload, and enhanced session context reuse are likely candidates for inclusion based on PR maturity and user demand.

---

### **7. User Feedback Summary**  
Real-world pain points from recent issues and PRs:

- **Desktop Performance:** Linux + AMD users report sustained GPU load from ambient animations — a sign that visual polish may be impacting system efficiency.
- **Workflow Integrity:** Users fear that autonomous skill improvement might break working processes, highlighting trust gaps in self-learning systems.
- **Session Management Friction:** Losing conversation history during updates (e.g., #160941, #160982) causes frustration and workflow disruption.
- **Update Transparency:** Several users report being silently upgraded to gated webapp mode with no warning (e.g., #160977), indicating poor communication around update behavior.

> ✅ **Satisfaction Signal:** Plugin decoupling and new JSON usage output are well-received, showing appreciation for cleaner architecture and better observability.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues needing maintainer attention:

| Issue | Link | Status | Why It Matters |
|------|------|--------|----------------|
| [#136931](https://github.com/nousresearch/hermes-agent/issues/136931) | Skill self-improvement can regress workflows | Open (8 comments) | Foundational issue for autonomous agents. Without quality control, self-improvement risks harm. |
| [#28226](https://github.com/nousresearch/hermes-agent/issues/28226) | Multi-tenant Memory OS with diagnostics & isolation tests | Open (2 comments) | Critical for enterprise/multi-user adoption. Currently lacks memory integrity safeguards. |
| [#158684](https://github.com/nousresearch/hermes-agent/issues/158684) | Compression fails when sending role-typed tool messages | Open (4 comments) | Prevents efficient context management in large sessions. Impacts scalability. |
| [#71266](https://github.com/nousresearch/hermes-agent/issues/71266) | Native skill-sleep with validation-gated improvement (SkillOpt) | Open (2 comments) | Could enable safe, staged self-improvement — a key next step for AI agents. |

> 🛠️ **Action Required:** These issues represent the frontier of agent intelligence and reliability. Prioritizing them will define Hermes Agent’s long-term credibility.

---

**📌 Final Assessment:**  
Hermes Agent is in a **high-growth, high-velocity phase** with strong community engagement and architectural evolution. However, **stability and user experience** remain fragile due to unresolved P2 bugs in core pathways. The project is shifting toward a **modular, plugin-first design**, which is promising but introduces new dependency and lifecycle challenges. Maintainers must balance rapid innovation with rigorous quality gates—especially around autonomy, memory, and session resilience—to maintain trust.  

**Next Milestone:** v0.24.0 (expected late Q1 2027) should prioritize bug stabilization, session robustness, and the rollout of validated self-improvement mechanisms.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-28**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with strong developer engagement: 10 new issues and 25 pull requests updated in the past 24 hours, indicating sustained momentum in both bug triage and feature development. The ecosystem is particularly focused on stability improvements—especially around console rendering, recovery mechanisms, and plugin reliability—while also advancing core architectural enhancements like custom model support and runtime deployment flexibility. No new releases were published today, suggesting a focus on internal polish ahead of potential upcoming milestones.

---

### **2. Releases**  
*None*  
No new releases have been published as of 2026-11-28. The latest stable version remains `v2.3.0.post1`. The absence of a release indicates that recent changes are still undergoing review or testing, likely preparing for a patch-level or minor update.

---

### **3. Project Progress**  
Several critical PRs were merged or closed today, advancing key areas of stability and usability:

- ✅ **PR #8951** (closed): Stabilized chat navigation, scrolling, and timestamp handling in the console—critical for long conversation UX.
- ✅ **PR #8952** (closed): Improved recovery and shutdown behavior in Relay, ensuring cleaner cleanup during interruptions.
- ✅ **PR #8953** (closed): Fixed pagination and scrolling inconsistencies in chat history, resolving edge cases in virtualized message lists.

These merges reflect ongoing refinement of the user interface and backend resilience, particularly around session state management and client-server synchronization.

---

### **4. Community Hot Topics**  
Top community discussions center on **console rendering**, **recovery logic**, and **enterprise integration**:

- 🔥 **Issue #8845** – *Console markdown tables overflow without horizontal scroll*:  
  [GitHub Issue #8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)  
  *Need*: Visual integrity in assistant messages; users cannot access table content beyond the bubble boundary, despite selectable text. Affects readability and trust in output.

- 🔥 **Issue #8956** – *Creator App Tests red due to shared recovery budget misbehavior*:  
  [GitHub Issue #8956](https://github.com/agentscope-ai/QwenPaw/issues/8956)  
  *Need*: Accurate exception tracking in retry logic. Current object identity check breaks recovery flow when exceptions are recreated—impacting test reliability and system robustness.

- 🔥 **Issue #8959** – *Enterprise platform-worker implementation proposal*:  
  [GitHub Issue #8959](https://github.com/agentscope-ai/QwenPaw/issues/8959)  
  *Need*: Strategic guidance on upstream contribution vs. private extension. Signals growing enterprise adoption and desire for modular, extensible architecture.

> These topics reveal a maturing ecosystem: users are pushing boundaries with complex workflows, requiring deeper control over execution safety, UI fidelity, and deployment flexibility.

---

### **5. Bugs & Stability**  
Critical bugs reported today highlight instability in core components:

| Severity | Issue | Description | Fix PR? |
|--------|------|------------|--------|
| 🔴 High | [#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962) | QQ channel reconnect supervisor exits permanently after websocket cleanup error | ✅ Yes → PR #8963 |
| 🔴 High | [#8960](https://github.com/agentscope-ai/QwenPaw/issues/8960) | Cron API returns 500 due to missing workspace reference (`mam._workspaces`) | ✅ Yes → PR #8965 |
| 🟡 Medium | [#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954) | Code Mode subagent leaks parent’s `_execution_toolkit`, causing `ToolNotFoundError` | ⚠️ Pending fix |
| 🟡 Medium | [#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903) | `run_tool_batch` fails in code mode due to toolkit encapsulation issue | ⚠️ Pending fix |

The presence of multiple high-severity fixes in progress (PR #8963, #8965) shows proactive addressing of production-grade concerns.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging feature trends suggest future directions:

- ✅ **Custom Decision Model Endpoints** (PR #8928): Users want to define custom models via UI—indicating demand for flexible orchestration beyond built-in providers.
- ✅ **Runtime Base Path Deployment** (PR #8719, under review): Enables reverse-proxy hosting (e.g., `/qwenpaw/`), signaling cloud-native deployment needs.
- ✅ **Governance Rule Configurability** (Issue #8955): Request to disable or configure builtin governance rules—shows awareness of policy control in agent systems.
- 📌 **Enhanced Markdown Parsing**: Single tilde strikethrough breaking numeric ranges (PR #8961) hints at need for more granular formatting control.

These signals point toward **enterprise-ready customization**, **cloud deployment readiness**, and **policy-aware agent behavior** in QwenPaw v2.4+.

---

### **7. User Feedback Summary**  
Real-world pain points revealed through issues:

- **UI/UX Friction**: Users report invisible table content (Issue #8845), broken markdown parsing (Issue #8961), and unstable scrolling—impacting confidence in AI-generated content.
- **Reliability Gaps**: Persistent crashes in cron APIs (Issue #8960), QQ reconnection failures (Issue #8962), and terminal step retries (Issue #8956) indicate fragility in long-running or external-integrated agents.
- **Extensibility Hurdles**: Enterprise team (Issue #8959) notes difficulty in upstream integration, suggesting a need for better extension hooks or contributor documentation.
- **Code Mode Limitations**: Subagent tool leakage (Issue #8954) and batch tool failure (Issue #8903) reveal gaps in sandboxing and context isolation.

Overall, users are satisfied with core functionality but seek greater control, predictability, and deployability.

---

### **8. Backlog Watch**  
Long-standing or high-impact issues needing attention:

- ⏳ **Issue #8712** – Repeated identical tool calls not interrupted due to flawed doom-loop gate:  
  [GitHub Issue #8712](https://github.com/agentscope-ai/QwenPaw/issues/8712)  
  *Status*: Closed, but highlights a systemic risk in resource protection—could lead to infinite loops if not properly mitigated.

- ⏳ **Issue #8941** – 12 plugin-install tests fail on Windows due to symlink privileges and slow init:  
  [GitHub Issue #8941](https://github.com/agentscope-ai/QwenPaw/issues/8941)  
  *Status*: Closed, but underscores persistent cross-platform testing challenges—needs improved CI/CD validation for Windows environments.

- ⏳ **PR #8719** – Support for base-path deployment (size/XXXL, under review):  
  [GitHub PR #8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)  
  *Status*: Waiting for final review. This is a major enabler for Kubernetes, Docker, and reverse-proxy deployments—should be prioritized.

> These items represent strategic bottlenecks: either technical debt (test coverage) or architectural opportunities (deployment flexibility). Immediate maintainer follow-up recommended.

--- 

✅ **Project Health Assessment**: **Healthy** – Active contributions, responsive issue handling, strong focus on stability and scalability. Ready for next release cycle with clear direction.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026-11-28**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a strong momentum in development, evidenced by **39 open pull requests** and **11 new issues** updated within the last 24 hours—none closed or merged. Activity is concentrated in security hardening, provider integration (especially OpenRouter and Gemini), UI/UX refinements in the web dashboard, and foundational stability improvements. The community is actively addressing critical workflow blockers, particularly around tool result handling, authentication, and session resilience. Despite no new releases, the pipeline reflects rapid iteration toward v0.9.0 stabilization.

---

### **2. Releases**  
❌ *No new releases published today.*  
The project continues to operate on `master` (commit `d4a5d2afd`, version `0.9.0`), with ongoing work focused on pre-release stability and feature refinement. No breaking changes have been introduced in recent PRs, but users should expect migration considerations for upcoming changes in OAuth retirement (see #12669) and config validation (see #12779).

---

### **3. Project Progress**  
✅ **Key PRs merged or nearing merge** (noted via activity):  
- **#12780**: Fixes OpenRouter tool-result image delivery (#12774), enabling proper image attachment handling across chat paths.  
- **#12781**: Recovers damaged tool results by preserving IDs and names, improving resilience during batch processing.  
- **#12704**: Ensures `tool_call_id` and `name` are preserved during envelope recovery—critical for Groq compatibility.  
- **#12779**: Adds strict config validation before admin reload, preventing daemon crashes due to invalid configs.  
- **#12776**: Introduces opt-in macOS `computer_use` tool and enables OpenRouter image delivery via feature flags.  

These PRs collectively enhance **provider reliability**, **security policy enforcement**, and **agent robustness** under transient failures.

---

### **4. Community Hot Topics**  
🔥 **Top 3 Most Active Issues & PRs (by comments/reactions)**:  
1. **#12774** – *OpenRouter drops declared tool-result image attachments*  
   - **Impact**: S1 workflow blocked; affects all agents using OpenRouter with image tools.  
   - **Fix**: PR #12780 addresses it directly.  
   - 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/12774) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/12780)  
   → *Underlying need*: Reliable multimodal tool output delivery across providers.

2. **#11005** – *Stable RPC denial reasons and localized selector denials*  
   - **Status**: In-progress, accepted, high-risk.  
   - **Context**: Part of broader authorization clarity initiative (linked to #8289).  
   - 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11005)  
   → *Need*: Machine-readable error codes + human-friendly messages for auditability and debugging.

3. **#12773** – *Quickstart cannot configure Lark/Feishu credentials*  
   - **Impact**: S1 blocker; prevents setup of enterprise-grade channels.  
   - **PR Pending**: No fix yet.  
   - 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/12773)  
   → *Signal*: Demand for improved onboarding for third-party integrations.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (S1–S2 Severity)**:  
| Issue | Severity | Description | Fix Status |
|------|----------|-------------|------------|
| [#12774](https://github.com/zeroclaw-labs/zeroclaw/issues/12774) | S1 | OpenRouter ignores tool-result image attachments | ✅ PR #12780 ready |
| [#12773](https://github.com/zeroclaw-labs/zeroclaw/issues/12773) | S1 | Quickstart skips `app_id`/`app_secret` for Lark/Feishu | ❌ No PR |
| [#12766](https://github.com/zeroclaw-labs/zeroclaw/issues/12766) | S1 | Gateway `/health` unresponsive during MCP startup | ⚠️ No fix yet |
| [#12767](https://github.com/zeroclaw-labs/zeroclaw/issues/12767) | S2 | Transient MCP failure leaves agent without tools until restart | ⚠️ No fix yet |

⚠️ **Stability Risks**:  
- Agents can become non-responsive after transient provider outages (e.g., HTTP 429/503).  
- Health checks may trigger unnecessary restarts in Kubernetes environments.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Roadmap Themes**:  
- **Multi-platform desktop access**: #11015 (desktop computer-use protocol) signals intent to enable local app interaction (screenshots, accessibility).  
- **New channel support**: #12765 (Buzz channel) highlights demand for open-source Slack alternatives.  
- **Fine-grained tool control**: #12772 requests per-MCP-tool disablement—suggesting growing need for granular risk management.  
- **Provider modernization**: #12669 (Gemini OAuth retirement) confirms shift from deprecated APIs to secure, supported paths (API keys, Vertex).

👉 *Prediction*: Next release will likely include **enhanced provider support**, **desktop tooling**, and **config validation** as core features.

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points**:  
- **Workflow disruption**: Users report losing focus in web chat after replies (#11658, #12746), requiring manual re-focus.  
- **Onboarding friction**: Lark/Feishu setup fails silently due to missing credentials (#12773), frustrating enterprise users.  
- **Tool reliability**: Image loss in OpenRouter responses breaks multimodal workflows (#12774).  
- **Session resilience**: Agents fail to recover from transient errors without restart (#12767), impacting uptime.  

🟢 **Positive Signals**:  
- High engagement in PRs related to security (e.g., bounded exceptions, policy validation) suggests trust in ZeroClaw’s governance model.  
- Feature-flagged tools (e.g., `computer_use`) indicate user appetite for experimental but safe capabilities.

---

### **8. Backlog Watch**  
⏳ **High-Priority Items Needing Maintainer Attention**:  
- **#11005** – Stable RPC denial reasons: *Accepted, in-progress, high risk*. Critical for audit and compliance.  
- **#12669** – Gemini provider modernization: *Tracker issue*, requires coordinated migration plan.  
- **#12773** – Lark/Feishu quickstart: *S1 blocker*, no assigned PR. Blocks adoption in orgs using Feishu/Buzz.  
- **#12766 / #12767** – Health check and MCP resilience: *S1/S2 bugs*, impact production stability.  
- **#12772** – Tool exclusion in `mcp_bundles`: *Security request*, indicates growing complexity in tool management.

🔧 **Recommendation**: Prioritize #12773, #12766, and #11005 for immediate triage and assignment to ensure smooth v0.9.0 release.

---  
**Next Update**: 2026-12-05  
📊 *Data sourced from GitHub: zeroclaw-labs/zeroclaw — 2026-11-28*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*