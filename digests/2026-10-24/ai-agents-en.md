# OpenClaw Ecosystem Digest 2026-10-24

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-24 01:00 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest**  
**Date:** 2026-10-24  
**Repository:** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)  

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and user engagement. The issue backlog shows a strong focus on stability, performance, and reliability—particularly around startup latency, memory management, disk cleanup, and cross-platform (Windows, macOS, Android/Termux) compatibility. Despite no new releases, multiple high-priority bug fixes and feature enhancements are under review or merged, signaling a mature but rapidly evolving system. Community-driven triage and maintainer responsiveness remain robust, though some critical regressions are impacting production usability.

---

### **2. Releases**  
❌ **No new releases** were published today.  
- The most recent stable version remains **2026.9.6**, with ongoing feedback from users reporting significant regressions in **2026.10.1** and **2026.10.2**.
- No migration notes, breaking changes, or release announcements are available for this period.

---

### **3. Project Progress**  
✅ **Key Merged/Updated PRs (24h)**:  
- **[PR #182053]** Fix: Apply archive retention even when cron is disabled — resolves silent data accumulation ([#181976](https://github.com/openclaw/openclaw/issues/181976)).  
- **[PR #182048]** Fix: Release PostgreSQL bridges after 3 idle minutes — improves resource hygiene in long-running gateways.  
- **[PR #182066]** Perf: Avoid repeated authority checks in cron turn bookkeeping — reduces auth overhead by ~38k checks per turn.  
- **[PR #182059]** Fix: Respect agent-specific `verboseDefault` in UIs — aligns chat history display with agent config.  
- **[PR #182052]** Fix: Ollama Web Search respects `maxResults` and `timeoutSeconds` — addresses misconfiguration behavior.  
- **[PR #182039]** Docs: Clarify recovery steps for oversized sandbox artifacts — improves error visibility for admins.  

🔹 These updates reflect a strong focus on **resource efficiency**, **UI consistency**, and **config fidelity**, particularly in edge-case scenarios.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count & Severity**:  
| Issue | Title | Comments | Severity | Link |
|------|-------|---------|----------|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes during plugin capture (2026.9.6 regression) | 44 | 🦞 P0 (crash-loop) | [View](https://github.com/openclaw/openclaw/issues/160959) |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | Gateway state DB WAL checkpoint never completes (pinned by reader) | 29 | 🦪 P2 (other) | [View](https://github.com/openclaw/openclaw/issues/164294) |
| [#180690](https://github.com/openclaw/openclaw/issues/180690) | `doctor --fix` causes heap OOM at 6GB (v28 → v31) | 20 | 🦪 P1 (crash-loop) | [View](https://github.com/openclaw/openclaw/issues/180690) |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | Startup regression: 1030s vs 410s (2026.10.1 vs 2026.9.9) | 18 | 🦪 P1 (crash-loop) | [View](https://github.com/openclaw/openclaw/issues/168955) |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows restarts/updates fail due to slow startup + schtasks perms | 16 | 🦪 P1 (ux-release-blocker) | [View](https://github.com/openclaw/openclaw/issues/170956) |

🔍 **Underlying Needs**:  
- **Startup performance degradation** is a recurring theme across multiple OS platforms (Windows, macOS).  
- **Memory and disk resource exhaustion** (OOM, uncleaned tmp dirs, WAL blocking) suggests deeper systemic issues in lifecycle management and garbage collection.  
- **Cross-platform reliability** (especially on Windows and Android) is a major pain point for end-users.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (P0/P1, Impact: crash-loop, ux-release-blocker)**:  
- **[#160959]** Plugin capture now blocks event loop for **minutes** post-2026.9.6 — affects all large-plugin deployments. *No fix PR yet.*  
- **[#168955]** Startup time increased from ~410s to **~1030s** on Windows; sidecars.control-ui-assets blocks 477s. *Regression confirmed in 2026.10.1.*  
- **[#158592]** After sleep/wake, one agent fails to recover — every inbound message fails until gateway restart. *High impact on uptime.*  
- **[#170928]** 2026.10.2 Windows gateway takes 7–9 mins to become ready and stays unresponsive. *Confirmed regression.*  
- **[#164294]** WAL checkpoint stuck indefinitely — database integrity risk if not resolved. *No known fix.*  

🛠️ **Fixes in Progress**:  
- **[PR #182057]** Fixes reply-barrier deadline misalignment with monotonic clock — mitigates timing drift risks.  
- **[PR #182066]** Reduces auth check overhead in cron — improves scalability under load.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **Top User-Requested Features (High Engagement)**:  
| Feature | Requested By | Votes | Status | Link |
|--------|--------------|-------|--------|------|
| Per-agent cost budget enforcement | hkochar | 1 | ⏳ Needs decision | [#42475](https://github.com/openclaw/openclaw/issues/42475) |
| Per-agent dreaming configuration | aaronwong1989 | 5 | ⏳ Needs review | [#67413](https://github.com/openclaw/openclaw/issues/67413) |
| One-way dispatch mode (no ping-pong) | Kaze310 | 1 | ⏳ Needs review | [#44309](https://github.com/openclaw/openclaw/issues/44309) |
| Configurable Dream Diary language | mtuwei | 2 | ⏳ Needs review | [#79223](https://github.com/openclaw/openclaw/issues/79223) |
| Interactive "memory therapy" session | kip-claw | 0 | ⏳ Needs design | [#105494](https://github.com/openclaw/openclaw/issues/105494) |

🔮 **Predicted Inclusion in Next Version (2026.11)**:  
- **Per-agent cost budgets** (critical for enterprise adoption).  
- **One-way dispatch mode** (improves A2A scalability).  
- **Configurable Dream Diary language** (UX polish for global users).

---

### **7. User Feedback Summary**  
🗣️ **Real Pain Points from Users**:  
- **Performance regressions** are causing frustration: “Gateway takes 10+ minutes to start” (Windows), “Updates fail repeatedly” (managed service).  
- **Disk space bloat** is a recurring issue: `/tmp/plugin-captures/` grows indefinitely with no cleanup.  
- **Windows reliability** is poor: schtasks permissions, unclean shutdowns, and failed updates.  
- **Confusing error messages**: “Runtime owner was not published” without context; “empty response” from tools.  
- **Missing configurability**: “Can’t set fallback models chain,” “Can’t add multiple providers during onboarding.”  

🎯 **User Satisfaction**: Mixed. While core functionality works, **stability and reliability are eroding** due to recent regressions. High-value features like cost control and session isolation are eagerly awaited.

---

### **8. Backlog Watch**  
👀 **Long-Pending, High-Impact Issues Needing Maintainer Attention**:  
| Issue | Description | Age | Status | Link |
|------|-------------|-----|--------|------|
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | Gateway state DB WAL checkpoint never completes | 21 days | ✅ Open, needs fix | [View](https://github.com/openclaw/openclaw/issues/164294) |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | Plugin-capture tmp dirs not GC’d — disk fills | 30 days | ✅ Open, needs fix | [View](https://github.com/openclaw/openclaw/issues/158390) |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement (feature) | 230 days | 🔍 Needs product decision | [View](https://github.com/openclaw/openclaw/issues/42475) |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Per-agent dreaming configuration | 230 days | 🔍 Needs review | [View](https://github.com/openclaw/openclaw/issues/67413) |
| [#155563](https://github.com/openclaw/openclaw/issues/155563) | Service-child relay retained after agent turn (regression) | 32 days | ✅ Open, needs fix | [View](https://github.com/openclaw/openclaw/issues/155563) |

📌 **Action Required**: Maintainers should prioritize **WAL checkpoint**, **disk cleanup**, and **cost budgeting** issues — they represent systemic risks to long-term stability and operator trust.

---

**Next Update**: Monitor PRs #182049, #182053, and #182066 for integration into next patch release.  
**Project Health Score**: ⚠️ **Moderate Risk** — Active development, but critical regressions and resource leaks threaten production use.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (2026-10-24)**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem in Q4 2026 is characterized by rapid iteration, increasing enterprise readiness, and growing focus on stability, security, and extensibility. Projects are diverging in maturity: some (e.g., OpenClaw, QwenPaw) are undergoing high-intensity development with critical regressions, while others (e.g., IronClaw, ZeroClaw) are stabilizing or preparing for major releases. A clear trend toward modular architecture, fine-grained access control, and cross-platform reliability is emerging, driven by real-world deployment needs across Windows, macOS, Android, and containerized environments.

---

### **2. Activity Comparison**

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
|--------|--------------|-----------|----------------|--------------|
| **OpenClaw** | 500 | 500 | ❌ No new release | ⚠️ Moderate Risk |
| **Hermes Agent** | 50 | 50 | ✅ v0.22.5 (patch) | ✅ High Stability |
| **IronClaw** | 0 | 5 (auto-updates) | ❌ No new release | ✅ Healthy but Passive |
| **QwenPaw** | 25 | 50 | ❌ No new release | ⚠️ High Activity, Moderate Risk |
| **ZeroClaw** | 28 | 50 | ❌ No new release | ⚠️ Critical Pre-Release |

> 🔍 *Notes*: OpenClaw and QwenPaw show the highest engagement volume, indicating active production use with significant pain points. ZeroClaw’s activity is tightly focused on pre-release hardening. IronClaw shows minimal user-driven activity, relying on automated dependency hygiene.

---

### **3. OpenClaw's Position**  
**OpenClaw stands as the most active and largest-scale project**, with unparalleled community volume (500 issues/PRs/day), reflecting broad adoption across diverse environments—especially Windows, Android/Termux, and managed services. Its technical approach emphasizes **deep lifecycle management** (startup latency, memory cleanup, WAL integrity) and **config fidelity**, differentiating it from peers focused more on UX or access control. Compared to Hermes Agent (focused on session resilience) or ZeroClaw (security-first), OpenClaw prioritizes **systemic stability and resource efficiency at scale**, making it a de facto backbone for large-scale agent deployments. However, its massive community size also amplifies regression risks, as seen in recent 10x startup time degradation and OOM crashes—highlighting the trade-off between breadth and reliability.

---

### **4. Shared Technical Focus Areas**  
Across all projects, several systemic challenges are emerging:

| Need | Projects Involved | Specific Examples |
|------|-------------------|-------------------|
| **Startup & Session Performance** | OpenClaw, QwenPaw, ZeroClaw | OpenClaw: 1030s vs 410s startup; QwenPaw: session wedges; ZeroClaw: WebSocket upgrade failures |
| **Memory/Disk Resource Leaks** | OpenClaw, QwenPaw, ZeroClaw | OpenClaw: uncleaned `/tmp/plugin-captures`; QwenPaw: 48MB media payloads; ZeroClaw: RPC session exhaustion |
| **Cross-Platform Reliability (Windows)** | OpenClaw, QwenPaw, ZeroClaw | OpenClaw: schtasks perms; QwenPaw: QQ channel breakage; ZeroClaw: PowerShell `@` parsing |
| **Session State Integrity** | Hermes Agent, QwenPaw, ZeroClaw | Hermes: duplicate replies; QwenPaw: draft carryover; ZeroClaw: conversation trimming loss |
| **Security & Access Control** | ZeroClaw, OpenClaw, QwenPaw | ZeroClaw: OIDC credential exposure; OpenClaw: silent data accumulation; QwenPaw: missing tool policy enforcement |

These signals indicate that **infrastructure-level robustness**—not just feature richness—is now a primary bottleneck for adoption.

---

### **5. Differentiation Analysis**

| Project | Feature Focus | Target User | Architecture Key Differentiator |
|--------|---------------|-------------|-------------------------------|
| **OpenClaw** | System stability, performance, scalability | Enterprise ops, DevOps teams, large-scale deployments | Monolithic core with deep lifecycle hooks; heavy focus on daemon lifecycle and resource accounting |
| **Hermes Agent** | Session persistence, goal tracking, UI fidelity | Individual power users, long-running agents | Stateful session management with context compression; strong desktop client integration |
| **IronClaw** | Developer experience, frontend tooling | Internal dev teams, CI/CD pipelines | Frontend-heavy, Storybook/Vitest-centric; minimal user-facing features |
| **QwenPaw** | Extensibility, plugin modularity, media handling | Developers, integrators, multi-channel workflows | Plugin-refactored architecture (v2.3.0); rich media and channel-specific logic |
| **ZeroClaw** | Security, access control, enterprise governance | Teams, regulated environments, compliance-driven orgs | OIDC-first access model; scoped dashboards; MITM proxy RFCs |

> 📌 **Key Insight**: While OpenClaw leads in scale and complexity, ZeroClaw is defining the future of **enterprise-grade AI agent platforms**, and QwenPaw is shaping the **plugin economy** through modular design.

---

### **6. Community Momentum & Maturity**  

| Tier | Projects | Characteristics |
|------|----------|----------------|
| **Rapid Iteration** | OpenClaw, QwenPaw, ZeroClaw | High issue/PR volume, frequent bug reports, active triage; focused on fixing regressions and enabling new features |
| **Stabilization & Maintenance** | Hermes Agent | Patch-focused updates (v0.22.5), responsive fixes, fewer new features — mature, reliable base |
| **Passive / Automation-Driven** | IronClaw | Low user engagement; activity limited to Dependabot PRs; no visible feedback loops |

> 🔥 **Trend**: The ecosystem is bifurcating: **high-momentum projects** are solving foundational problems (latency, leaks, security), while **stable projects** are becoming trusted backbones for specific use cases.

---

### **7. Trend Signals**  
Based on community feedback and PR activity, the following industry trends are crystallizing:

1. **Enterprise Readiness is Now a Priority**  
   - ZeroClaw’s OIDC integration, role-based dashboards, and S1 security bugs reflect demand for identity-aware, auditable AI systems.
   - Per-agent cost budgets (OpenClaw, QwenPaw) and tool policy enforcement signal rising need for **cost control and compliance**.

2. **Modular Architecture is the Next Frontier**  
   - QwenPaw’s v2.3.0 roadmap and IronClaw’s Storybook upgrades highlight a shift toward **developer-first design**, plug-in extensibility, and testability.

3. **UX Quality is No Longer Optional**  
   - Duplicate replies (Hermes), media crashes (QwenPaw), and invisible errors (OpenClaw) are eroding trust—indicating that **reliability and clarity** are now as important as functionality.

4. **Cross-Platform Consistency is a Major Bottleneck**  
   - Windows-specific issues dominate across OpenClaw, QwenPaw, and ZeroClaw—suggesting that **desktop and OS-level compatibility** remains a key barrier to mainstream adoption.

5. **Dependency Hygiene Is a Strategic Imperative**  
   - IronClaw’s reliance on automated updates and ZeroClaw’s urgent patching of `dompurify`, `certifi` underscore that **security must be baked into development workflows**.

---

### ✅ **Conclusion**  
The personal AI agent ecosystem is transitioning from novelty to infrastructure. **OpenClaw leads in scale and complexity**, but faces systemic stability challenges. **ZeroClaw and QwenPaw are defining next-gen capabilities** in security and modularity. **Hermes Agent** exemplifies mature, reliable individual-agent use. Meanwhile, **IronClaw’s quiet maintenance** reflects a broader trend: once stable, projects become invisible—but essential. For developers and decision-makers, the message is clear: **prioritize stability, security, and extensibility over flashy features**. The era of “just make it work” is over—now, it must work *reliably*, *securely*, and *at scale*.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-10-24**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust development momentum. A new patch release, **v0.22.5**, was issued on October 22, rolling up ~81 merged PRs into stable builds across CLI, Docker, Microsoft Store, and Hermes Cloud. The ecosystem is focused on stabilizing session management, improving cross-platform compatibility (especially Windows), and enhancing security boundaries in plugin and gateway workflows. High-severity bugs related to session state corruption, message delivery failures, and authentication misbehavior are dominating attention.

---

### **2. Releases**  
- **[v0.22.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5)** *(Released: 2026-10-22)*  
  - **Type**: Patch release  
  - **Summary**: This release consolidates ~81 merged PRs since v0.22.4 into a stable version for all platforms: GitHub CLI/installers, Microsoft Store app, Docker containers, and Hermes Cloud.  
  - **Key Focus Areas**: Session resilience, streaming reliability, plugin stability, and platform-specific fixes (especially Windows).  
  - **Migration Notes**: No breaking changes reported. Users should update to v0.22.5 to benefit from cumulative bug fixes and stability improvements. Full changelog details will be included in the upcoming **v0.23.0** release.

---

### **3. Project Progress**  
**Merged/Closed PRs (20+ today):**  
- ✅ **PR #143820** – *fix(goals): migrate standing goals across session-id rotation*  
  → Ensures persistent `/goal` tracking through context compression and auto-reset cycles. Critical for long-running agent workflows.
- ✅ **PR #143821** – *fix(desktop): serialize writers of desktop-plugins root*  
  → Resolves `ENOTEMPTY` errors during plugin installation boot sequence, preventing crashes.
- ✅ **PR #143822** – *fix(plugins): portable plugin skills named after plugin*  
  → Improves UX by simplifying skill naming (`blender:blender`) instead of cryptic IDs.
- ✅ **PR #143819** – *fix(discord): skip empty chunks*  
  → Prevents Discord API rejection due to empty messages (HTTP 400 code 50006).
- ✅ **PR #143811** – *fix(cli): preserve branch commits when no remote exists*  
  → Prevents accidental data loss during `hermes -w` session cleanup.

These fixes collectively improve **session integrity**, **plugin stability**, and **platform interoperability**, particularly on Windows and Linux WSL environments.

---

### **4. Community Hot Topics**  
Top Issues/PRs by engagement:

| Issue/PR | Title | Comments | Severity | Link |
|--------|------|---------|----------|------|
| [Issue #129993](https://github.com/NousResearch/hermes-agent/issues/129993) | Desktop: assistant reply rendered twice | 17 | P2 (High) | [View Issue](https://github.com/NousResearch/hermes-agent/issues/129993) |
| [Issue #139818](https://github.com/NousResearch/hermes-agent/issues/139818) | Remote-backend sessions unresumable — `not_found` error | 11 | P2 (High) | [View Issue](https://github.com/NousResearch/hermes-agent/issues/139818) |
| [Issue #46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Concurrent sessions cross-contaminate (shared memory/git worktree) | 11 | P2 (High) | [View Issue](https://github.com/NousResearch/hermes-agent/issues/46303) |
| [PR #143820](https://github.com/NousResearch/hermes-agent/pull/143820) | Migrate standing goals across session-id rotation | — | P2 (High) | [View PR](https://github.com/NousResearch/hermes-agent/pull/143820) |

**Analysis of Underlying Needs**:  
- **Session state consistency** is a recurring pain point: users expect reliable resume behavior across restarts, upgrades, and remote connections.  
- **Isolation between concurrent sessions** is critical for multi-user or multitasking scenarios. Shared state leads to unpredictable outcomes.  
- **UI fidelity** (e.g., duplicate replies) reflects deeper rendering/state synchronization issues in the desktop client.

---

### **5. Bugs & Stability**  
Critical bugs reported today (ranked by severity):

| Bug | Description | Severity | Status | Fix PR? |
|-----|-------------|----------|--------|---------|
| [Issue #129993](https://github.com/NousResearch/hermes-agent/issues/129993) | Assistant reply duplicated in transcript (only one persisted) | P2 | Open | ❌ |
| [Issue #139818](https://github.com/NousResearch/hermes-agent/issues/139818) | Remote desktop sessions fail to resume (`not_found`) | P2 | Open | ❌ |
| [Issue #46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Concurrent sessions share memory/worktree → cross-contamination | P2 | Open | ❌ |
| [Issue #143775](https://github.com/NousResearch/hermes-agent/issues/143775) | Stale PID blocks gateway startup indefinitely | P2 | Closed | ✅ (Fixed via PR #143775) |
| [Issue #143816](https://github.com/NousResearch/hermes-agent/issues/143816) | `UnscopedSecretError` on re-attaching bot screen (Docker sandbox) | P2 | Open | ❌ |
| [Issue #143806](https://github.com/NousResearch/hermes-agent/issues/143806) | Logging overload → unbounded queue → memory growth | P2 | Open | ❌ |

> **Note**: While some high-severity bugs remain open, the team has responded rapidly—many are already being addressed in PRs.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging trends in user requests:

| Request | Summary | Priority | Significance |
|--------|--------|----------|--------------|
| [Issue #136931](https://github.com/NousResearch/hermes-agent/issues/136931) | Skill self-improvement must distinguish durable lessons vs temporary fixes | P3 | Indicates demand for smarter, more responsible AI learning |
| [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379) | RFC: Doc-chain substrate network (read, governance, compaction) | P2 | Signals intent to build a permanent, auditable agent memory layer |
| [Issue #143053](https://github.com/NousResearch/hermes-agent/issues/143053) | Plugin catalog guidance for full workflow/source bundles | P3 | Suggests growing ecosystem maturity and need for formal plugin standards |
| [Issue #118181](https://github.com/NousResearch/hermes-agent/issues/118181) | Paste files from OS file manager (Ctrl+C/V) with original paths | P3 | User-centric UX improvement; aligns with mainstream chat clients |

**Prediction for v0.23.0**: Expect enhanced **session persistence**, **plugin governance**, and **doc-chain memory architecture** to be prioritized based on these signals.

---

### **7. User Feedback Summary**  
Real-world pain points reported by users:

- **Windows Installer Failures** ([#131199](https://github.com/NousResearch/hermes-agent/issues/131199)): First-run install fails at Python dependency stage — a blocker for new adopters.
- **Discord Voice Message Corruption** ([#123680](https://github.com/NousResearch/hermes-agent/issues/123680)): TTS produces MP3, but Discord requires Opus → unplayable audio. Requires transcode fallback.
- **Desktop UI Glitches**: Duplicate assistant bubbles ([#129993](https://github.com/NousResearch/hermes-agent/issues/129993)) and flashing "unconfirmed send" notices ([#143285](https://github.com/NousResearch/hermes-agent/issues/143285)) degrade trust in agent output.
- **Remote Session Breakage**: Users report inability to resume conversations started via remote backend, especially when switching devices or restarting servers.

**Satisfaction Note**: Despite bugs, users appreciate rapid response times and clear communication around patches and fixes.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues needing maintainer attention:

| Issue | Description | Age | Status | Priority |
|------|-------------|-----|--------|----------|
| [Issue #46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Concurrent sessions cross-contaminate (shared memory + git worktree) | 4 months | Open | ⚠️ Critical |
| [Issue #98801](https://github.com/NousResearch/hermes-agent/issues/98801) | `lifecycle_guard` recursion blocks reading Hermes docs | 2 months | Open | P3 (but systemic) |
| [Issue #136931](https://github.com/NousResearch/hermes-agent/issues/136931) | Skill self-improvement can regress good workflows | 1 month | Open | Needs decision |
| [Issue #96703](https://github.com/NousResearch/hermes-agent/issues/96703) | MCP trust-gate approval card lacks call argument visibility | 2 months | Closed | Still relevant |

> **Recommendation**: Prioritize **#46303** and **#136931** as they undermine core agent reliability and autonomy. These are foundational for safe, scalable use.

---

**Final Assessment**:  
Hermes Agent is in a **high-growth, high-stability phase**. Rapid iteration and strong community feedback are driving meaningful improvements. The project is well-positioned for v0.23.0 with a focus on **session integrity**, **memory durability**, and **cross-platform reliability**. Maintainers are responsive, and the health of the codebase and contributor activity indicate strong sustainability.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-10-24**

---

### **1. Today's Overview**  
The IronClaw project remains in a stable, maintenance-focused state as of October 24, 2026. No new releases or issues were created in the past 24 hours, indicating low user-reported incident activity. However, five pull requests (PRs) were updated—four open and one merged—primarily driven by automated dependency updates via Dependabot. These changes reflect routine security and compatibility upkeep across core dependencies, particularly in the JavaScript/TypeScript frontend ecosystem and Python test environments. The absence of active issues suggests strong current stability, though long-term feature development appears paused.

---

### **2. Releases**  
*No new releases were published in the last 24 hours.*  
The project has not issued any version updates since the previous release cycle. There are no breaking changes, migration notes, or release announcements to report at this time.

---

### **3. Project Progress**  
One PR was closed today:  
- **[PR #8149](https://github.com/nearai/ironclaw/pull/8149)**: *chore(deps): bump dompurify from 3.4.12 to 3.4.16*  
  - **Status**: Merged on October 23, 2026  
  - **Impact**: Addressed a vulnerability related to improper sanitization handling in DOMPurify (specifically, a problem with attribute parsing). This update improves security posture for the web UI component (`/crates/product/ironclaw_webui/frontend`).  
  - **Note**: A follow-up PR (#8155) already proposes an even newer version (3.4.17), suggesting ongoing security hygiene.

---

### **4. Community Hot Topics**  
No issues are currently open or actively discussed. However, the following **five open PRs** represent the most significant community-driven activity today:  

- **[PR #8157](https://github.com/nearai/ironclaw/pull/8157)**: Bump `certifi` from 2026.7.22 to 2026.10.19 (Python tests)  
  - *Rationale*: Security patch for certificate trust bundle; affects test environment reliability.  
- **[PR #8156](https://github.com/nearai/ironclaw/pull/8156)**: Update `@storybook/addon-vitest` to 10.6.2  
  - *Rationale*: Enables newer Vitest integration features and fixes for Storybook’s testing addon.  
- **[PR #8158](https://github.com/nearai/ironclaw/pull/8158)**: Upgrade `storybook` core to 10.6.2  
  - *Rationale*: Improves UI development workflow and aligns with Storybook’s latest best practices.  
- **[PR #8155](https://github.com/nearai/ironclaw/pull/8155)**: Bump `dompurify` from 3.4.12 to 3.4.17  
  - *Rationale*: Addresses XSS-related edge case fixes reported in upstream release (3.4.17).  
- **[PR #8149](https://github.com/nearai/ironclaw/pull/8149)**: Already merged — predecessor to #8155  

> 🔍 **Analysis**: The dominant theme is **dependency hygiene**, especially around **security patches** (certifi, dompurify) and **frontend tooling upgrades** (Storybook, Vitest). These are all auto-generated by Dependabot, signaling that the project relies heavily on automation for risk mitigation. No community-driven feature debates or urgent bug reports are visible.

---

### **5. Bugs & Stability**  
*No bugs, crashes, or regressions were reported in the last 24 hours.*  
All recent PRs are non-breaking dependency updates. The merged PR (#8149) resolves a known issue in `dompurify`, but no further incidents have been logged. Given the lack of open issues and zero reactions/comments on active PRs, there is no evidence of instability in production or staging environments.

---

### **6. Feature Requests & Roadmap Signals**  
There are **no open feature requests** or user-driven proposals in the issue tracker as of today. The only activity consists of automated dependency updates.  
However, the consistent upgrade of **Storybook** and **Vitest** integration hints at an evolving focus on **developer experience (DX)** and **UI testing infrastructure**—potential signals that future roadmap iterations may emphasize:  
- Enhanced visual regression testing  
- Improved local dev environment parity  
- Better CI/CD pipeline integration for frontend components  

These could be upcoming priorities if the trend continues.

---

### **7. User Feedback Summary**  
*No user feedback or satisfaction metrics are available* due to the absence of open issues, comments, or discussions. The project appears to be operating in a quiet, self-maintaining phase where users are not reporting pain points. This could indicate either:  
- High user satisfaction with current functionality  
- Low user engagement or adoption  
- Or reliance on internal teams rather than public contributors  

Without feedback loops, it’s difficult to assess real-world usability beyond technical stability.

---

### **8. Backlog Watch**  
While no high-priority issues are currently open, several **long-standing dependency PRs** remain unmerged or pending review:  

- **[PR #8155](https://github.com/nearai/ironclaw/pull/8155)**: Upgrade `dompurify` to 3.4.17 — *critical security fix*  
  - **Age**: Created October 23, 2026 (1 day old)  
  - **Risk**: Delayed application of a security patch may expose the web UI to potential XSS exploits  
  - **Action Needed**: Requires merge approval to close security gap  

- **[PR #8158](https://github.com/nearai/ironclaw/pull/8158)**: Storybook v10.6.2 upgrade — *enhances developer tooling*  
  - **Age**: 1 day  
  - **Action Needed**: May block future UI component improvements if outdated Storybook versions persist  

> ⚠️ **Note**: Despite being automated, these PRs require manual review. Their delay could signal low maintainer bandwidth or prioritization of other tasks. If unresolved, they pose growing technical debt and security risk.

---

**Summary Rating**: ✅ **Healthy but Passive**  
IronClaw shows strong technical hygiene through automated dependency management, with no critical failures reported. However, the lack of user engagement and stalled PR reviews suggest limited momentum in innovation or community interaction. Maintainers should prioritize reviewing and merging security-critical updates to prevent drift.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-10-24**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with a strong momentum in both issue and pull request activity: 25 issues updated (18 open, 7 closed) and 50 PRs updated (38 open, 12 merged/closed) within the last 24 hours. This reflects sustained community engagement and developer focus on stability, extensibility, and core UX improvements. Despite no new releases, recent PRs indicate progress toward v2.3.0’s modular refactoring and enhanced plugin support. The ecosystem is clearly shifting toward deeper customization and reliability—particularly around session handling, media processing, and cross-channel consistency.

---

### **2. Releases**  
❌ **No new releases** were published today.  
- The latest stable version remains **v2.2.2.post1**, released on October 22, 2026.  
- A release verification check (`#8386`) passed successfully, confirming integrity of the post-release build.  
- No breaking changes or migration notes are currently applicable.

> 🔗 [Release v2.2.2.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2.post1)

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (12 total)** today include critical fixes and foundational upgrades:

| PR | Summary | Impact |
|----|--------|--------|
| [#8399](https://github.com/agentscope-ai/QwenPaw/pull/8399) | Preserve model policy drafts on refresh | Prevents loss of custom timeout settings during model switching |
| [#8383](https://github.com/agentscope-ai/QwenPaw/pull/8383) | Fix sips preflight tests on Windows | Improves test platform parity; enables reliable CI across OSes |
| [#8381](https://github.com/agentscope-ai/QwenPaw/pull/8381) | Stabilize advisor listing & TUI drain assertions | Fixes Windows-specific unit test failures |
| [#8382](https://github.com/agentscope-ai/QwenPaw/pull/8382) | Answer sidecar probe via raw socket | Resolves macOS test timeouts related to service lifecycle |
| [#8372](https://github.com/agentscope-ai/QwenPaw/issues/8372) | Closed as resolved — HUB gateway timeout too short | Suggests user-facing config override now available |
| [#8396](https://github.com/agentscope-ai/QwenPaw/issues/8396) | Fixed: "Chat not found" error on delete | Addresses UI inconsistency after deletion |
| [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) | Fixed: Wheel scroll snapping in long conversations | Enhances UX for long chat sessions |
| [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) | Fixed: `send_file_to_user` wedging session on video | Critical fix for media handling reliability |
| [#8368](https://github.com/agentscope-ai/QwenPaw/issues/8368) | Fixed: 404 on deleting current conversation | Removes backend race condition |
| [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) | Fixed: DingTalk final reply dropped on expiry | Ensures delivery reliability under TTL limits |
| [#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359) | Fixed: Hub readiness probe hardcodes `127.0.0.1` | Enables Docker-in-Docker deployments |
| [#8378](https://github.com/agentscope-ai/QwenPaw/issues/8378) | Fixed: Upgrade breaks `active_model` config parsing | Restores backward compatibility |

These fixes collectively improve **stability**, **deployment flexibility**, and **user trust** in high-load scenarios.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement (comments/reactions)**

1. **[Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071): Plugin-facing theme extension point (semantic token override layer)**  
   - *8 comments*, 0 likes — but flagged as **feature-critical** for plugin developers.  
   - **Need**: Plugins currently have limited visual control beyond `colorPrimary`. Users want granular theme overrides (e.g., `--token-accent`, `--bg-surface`) to align with their UI design.  
   - **Signal**: Strong demand for **plugin-level theme extensibility** — likely key for v2.3.0’s plugin refactor.

2. **[Issue #8289](https://github.com/agentscope-ai/QwenPaw/issues/8289): Making QwenPaw Lighter and More Extensible (v2.3.0 roadmap)**  
   - *3 comments*, 1 👍 — highest upvote among feature requests.  
   - **Need**: Modular architecture via plugin refactor to reduce bundle size and enable dynamic loading.  
   - **Signal**: Clear direction from maintainers — this is the **central theme** of upcoming v2.3.0.

3. **[PR #8347](https://github.com/agentscope-ai/QwenPaw/pull/8347): Integrate ReMe 0.4.2.0 with decision compaction, images, tags**  
   - *High priority* — integrates memory system enhancements.  
   - **Implication**: Future AI agents will better handle context, retain richer metadata, and compress irrelevant decisions.  
   - **Note**: Already being tested in production workflows.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (Rank by Severity)**

| Issue | Description | Status | Fix PR? |
|------|-------------|--------|--------|
| [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351) | Composer draft carries over between conversations due to per-agent keying | Open | ❌ |
| [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350) | Feishu channel blocks entire service on sync network call | Open | ❌ |
| [#8394](https://github.com/agentscope-ai/QwenPaw/issues/8394) | XiaoYi channel drops WebSocket silently during long turns | Open | ❌ |
| [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) | QQ channel enabled flag reset without warning | Open | ❌ |
| [#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335) | Media in chat history causes 48MB request bodies → session wedge | Open | ❌ |
| [#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388) | Post-upgrade QQ channel broken due to missing `_qwenpaw_remote_backend` | Open | ❌ |

> ⚠️ **All major bugs involve session corruption, silent failures, or irreversible state loss.** These represent high-risk areas for production use.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **Emerging Priorities for v2.3.0 (based on trends)**

| Feature | Evidence | Expected In |
|-------|----------|------------|
| ✅ **Plugin-centric theme system** ([#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)) | High demand, tied to plugin ecosystem growth | v2.3.0 |
| ✅ **Lighter, modular architecture** ([#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)) | Top-ranked enhancement; linked to PRs like #8187 | v2.3.0 |
| ✅ **Office file preview (docx/xlsx/pptx)** ([#8404](https://github.com/agentscope-ai/QwenPaw/issues/8404)) | Daily pain point for users generating reports | Likely v2.3.0 |
| ✅ **Auto-scroll toggle during streaming** ([#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339)) | Long-standing UX request | Possible v2.3.0 |
| ✅ **Quoted reply routing across channels** ([#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342)) | Cross-channel inconsistency reported | v2.3.0 |

> 📌 **Prediction**: **v2.3.0** will be a major milestone focused on **modularity, performance, and extensibility** — possibly delayed until early 2027 due to scope.

---

### **7. User Feedback Summary**  
💬 **Real Pain Points from Users (Direct Quotes & Observations)**

- **“After upgrading, my QQ channel stopped working entirely.”** → Confirms **upgrade instability** and **dependency mismanagement** ([#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388)).
- **“I lost all my draft text when switching conversations.”** → Highlights **draft persistence flaws** ([#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)).
- **“The agent just stops responding for minutes during long tasks.”** → Reflects **WebSocket silence issues** in XiaoYi and other channels ([#8394](https://github.com/agentscope-ai/QwenPaw/issues/8394)).
- **“Media files cause the whole session to crash.”** → Underscores **unhandled edge cases in payload size and type validation** ([#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335)).
- **“Deleting a conversation shows a confusing error.”** → Indicates **poor feedback loops** despite functional fixes ([#8396](https://github.com/agentscope-ai/QwenPaw/issues/8396)).

> ✅ **Satisfaction**: Users appreciate timely bug fixes and transparency (e.g., release verification logs).

---

### **8. Backlog Watch**  
🔍 **Longstanding or High-Impact Issues Needing Attention**

| Issue | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | 22 days old | Open | Cross-session messages split into separate chats — **core UX flaw** causing confusion |
| [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) | 3 days old | Open | Silent drop of final replies — **trust erosion in mission-critical flows** |
| [#8333](https://github.com/agentscope-ai/QwenPaw/issues/8333) | 5 days old | Open | Visual overlap in sidebar — minor but persistent UI regression |
| [#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342) | 4 days old | Open | Quoted replies lose command routing — breaks expected behavior across 7 channels |
| [#8405](https://github.com/agentscope-ai/QwenPaw/issues/8405) | 1 day old | Open | MCP config dialog won’t close — **blocking UI interaction** |

> ⏳ **Action Needed**: Maintain a dedicated triage cadence for these. They represent **friction points that degrade user confidence** even if not critical.

---

### ✅ **Final Assessment**  
**Project Health: High Activity, Moderate Risk**  
QwenPaw is in a **strong development phase** with robust contributor engagement and clear roadmap signals. However, **several high-severity bugs persist**, especially around session integrity, media handling, and cross-channel consistency. The team is actively addressing them, but **post-upgrade fragility and silent failures remain concerning**.  

With v2.3.0 on the horizon, the project is poised for transformation — but must prioritize **stability testing**, **backward compatibility**, and **user feedback integration** to avoid regression fatigue.

> 🔗 **Track All Issues**: [GitHub Issues Dashboard](https://github.com/agentscope-ai/QwenPaw/issues)  
> 🔗 **Follow PRs**: [GitHub Pull Requests](https://github.com/agentscope-ai/QwenPaw/pulls)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-10-24  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active, with **50 open pull requests** and **28 new issues** raised in the last 24 hours—indicating strong momentum in development and community engagement. Activity is concentrated in security hardening, gateway stability, session persistence, and access control enhancements, particularly around OIDC integration and tool policy enforcement. Despite no new releases, multiple high-severity bugs (S1–S2) have surfaced, signaling a focus on reliability ahead of the upcoming **v0.9.0 release milestone**. The influx of PRs suggests significant progress toward feature consolidation and quality assurance.

---

### **2. Releases**

> ❌ **No new releases** were published in the past 24 hours.  
> No releases scheduled for v0.9.0 as of this date.  
> All recent activity is focused on finalizing pre-release features and fixing critical path bugs.

---

### **3. Project Progress**

Several key PRs advanced today, primarily supporting the **v0.9.0 release train**:

- ✅ **PR #11986** (`feat(gateway): scoped dashboard chat through the core`) — Implements secure, role-based dashboard access for non-admin users, building on OIDC sign-in.
- ✅ **PR #11965** (`feat(gateway): opt-in OIDC dashboard sign-in`) — Enables identity federation via OIDC providers; a foundational piece for enterprise-grade access control.
- ✅ **PR #11976** (`ci(cli-only): build and test the CLI-only feature set`) — Adds CI validation for headless, minimal deployments, improving support for server environments.
- ✅ **PR #12007** (`fix(tools): serve deferred tool schemas from live tools`) — Addresses stale schema behavior post-reload; fixes a high-risk issue affecting dynamic tool availability.
- ✅ **PR #11933** (`fix(web): keep the chat header on screen in narrow layouts`) — Improves UX for mobile users; small but impactful UI fix.

These PRs collectively advance **security**, **access control**, **deployment flexibility**, and **user experience**.

---

### **4. Community Hot Topics**

| Issue / PR | Link | Activity | Key Insight |
|-----------|------|---------|-----------|
| **Issue #11984** ([Dashboard chat for non-admins](https://github.com/zeroclaw-labs/zeroclaw/issues/11984)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) | 1 comment, 1 reaction | Users demand granular access to agent chat without admin privileges—critical for team collaboration workflows. |
| **PR #11986** ([Scoped dashboard chat](https://github.com/zeroclaw-labs/zeroclaw/pull/11986)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) | 0 comments, 0 reactions | High-priority implementation tracking OIDC + scoped access; stacked on prior PRs, indicating deep architectural integration. |
| **Issue #11991** ([Email HTML carries raw markup](https://github.com/zeroclaw-labs/zeroclaw/issues/11991)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11991) | 1 comment | Real user pain: agents can inject malicious HTML into outbound emails—urgent need for sanitization. |
| **PR #11680** ([Add Firecrawl web search provider](https://github.com/zeroclaw-labs/zeroclaw/pull/11680)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11680) | 0 comments, 0 reactions | Feature request from Firecrawl team—shows growing interest in real-time web search integrations. |

**Underlying Need:** Users are demanding **fine-grained access controls**, **secure output rendering**, and **modern tooling integrations**—especially for production and team use cases.

---

### **5. Bugs & Stability**

| Issue | Severity | Component | Status | Fix PR? |
|------|----------|----------|--------|--------|
| **#11951** [WebSocket upgrades fail over TLS listener](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) | S2 | Gateway | Open | ❌ No PR yet |
| **#11711** [Conversation trimming deletes older turns permanently](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | S2 | Runtime/Session Store | Open | ❌ No PR yet |
| **#11987** [Inline `nosemgrep` comments ignored by Semgrep](https://github.com/zeroclaw-labs/zeroclaw/issues/11987) | S3 | CI Tooling | Open | ❌ No PR yet |
| **#11992** [Email channel lacks sanitized HTML body](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) | S2 | Channels | Open | ❌ No PR yet |
| **#11989** [per-channel `excluded_tools` never applied](https://github.com/zeroclaw-labs/zeroclaw/issues/11989) | S2 | Channels | Open | ❌ No PR yet |
| **#11970** [Agents delete/rename skip cascade checks without gateway](https://github.com/zeroclaw-labs/zeroclaw/issues/11970) | S2 | Runtime/Daemon | Open | ❌ No PR yet |
| **#11962** [64 RPC sessions never released → exhaustion risk](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | S2 | Daemon | Open | ❌ No PR yet |
| **#11957** [OIDC enrollment sends raw client credentials](https://github.com/zeroclaw-labs/zeroclaw/issues/11957) | S1 | Security/Sandbox | Open | ❌ No PR yet |
| **#12005** [PowerShell dialect rejects bare `@` in args](https://github.com/zeroclaw-labs/zeroclaw/issues/12005) | S3 | Shell Policy | Open | ❌ No PR yet |

> ⚠️ **Critical Risk**: S1 bug (#11957) exposes secret credentials in plaintext during OIDC enrollment—high priority for immediate attention.

---

### **6. Feature Requests & Roadmap Signals**

| Request | Link | Priority | Predicted Inclusion |
|-------|------|----------|---------------------|
| **Add DeepSeek Web Search provider** | [Issue #12000](https://github.com/zeroclaw-labs/zeroclaw/issues/12000) | Medium | Likely in v0.9.0 or v0.9.1 |
| **Send attachments via `send_via` with read policy check** | [Issue #11996](https://github.com/zeroclaw-labs/zeroclaw/issues/11996) | High | Strong candidate for v0.9.0 |
| **Operator templates + sanitized HTML for email** | [Issue #11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) | High | Expected in v0.9.0 |
| **MITM egress proxy for agent traffic control** | [RFC #12001](https://github.com/zeroclaw-labs/zeroclaw/issues/12001) | High | May be delayed to v1.0 due to architecture impact |
| **CLI-only source build** | [Issue #11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971) | High | Already being implemented via PR #11976 |

> 🔮 **Roadmap Signal**: The project is shifting toward **enterprise-grade deployment**, **secure output**, and **flexible configuration**—with v0.9.0 likely serving as a major stabilization and access-control milestone.

---

### **7. User Feedback Summary**

- **Pain Points**:
  - Agents can **inject arbitrary HTML** into emails (#11991), risking phishing or XSS.
  - **Long conversations disappear** after trimming (#11711), breaking audit trails.
  - **Non-admin users cannot chat** with agents they’re authorized to use (#11984).
  - **Raw secrets exposed** in OIDC flows (#11957)—a serious security flaw.
  - **PowerShell commands break** on valid syntax (`@` in arguments), limiting usability.

- **Satisfaction Signals**:
  - Positive momentum on **OIDC sign-in** and **scoped access**—users appreciate tighter security and role-based access.
  - Developers appreciate **CI improvements** (e.g., PR #11976) and **tooling enhancements** (e.g., Firecrawl integration).

---

### **8. Backlog Watch**

| Issue | Link | Status | Why It Matters |
|------|------|--------|----------------|
| **#7432** [Runtime, gateway, dashboard roadmap tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Open, accepted, no stale | Critical for v0.9.0 planning—tracks remaining gaps in runtime/gateway delivery. Needs maintainer review to finalize sequencing. |
| **#8279** [Delegate bypasses parent’s tool allowlist](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | Open, P1, high risk | Security-critical: sub-agents can invoke forbidden tools. No fix PR yet—urgent fix needed. |
| **#11013** [Unified file intake/resolver/delivery](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | Open, accepted | Core infrastructure work—must be resolved before file-heavy workflows scale. |
| **#11876** [Focus PR review on purpose, safety, quality](https://github.com/zeroclaw-labs/zeroclaw/issues/11876) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11876) | Closed | RFC passed—now needs implementation. Affects all future PR reviews. |

> 🛑 **High-Priority Backlog Items**: #8279 and #7432 require immediate maintainer attention to avoid blocking v0.9.0.

---

### **Conclusion**

ZeroClaw is in a **critical pre-release phase** with intense focus on **security**, **access control**, and **session integrity**. While the codebase shows strong momentum—especially in OIDC, CLI-only builds, and tooling—the presence of **multiple S1/S2 bugs** and **unresolved security flaws** poses a risk to timely v0.9.0 delivery. Community contributions are high-quality and aligned with long-term goals. Immediate action on high-severity issues and backlog triage will determine whether ZeroClaw meets its next milestone with confidence.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*