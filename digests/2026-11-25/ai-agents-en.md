# OpenClaw Ecosystem Digest 2026-11-25

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-25 05:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-25**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development momentum. A surge in community engagement is evident across both bug reporting and feature implementation, particularly around stability, update reliability, and UI/UX refinement. Two new releases—v2026.11.9 and v2026.11.8—were published, signaling rapid iteration. Despite this velocity, several critical P0/P1 bugs related to gateway crashes, session state corruption, and update failures remain open, suggesting ongoing challenges in system resilience under load.

---

### **2. Releases**  
- **v2026.11.9**: [Release Notes](https://docs.openclaw.ai/releases/2026.11.9)  
  - **Changes**: Includes fixes for plugin capture latency (regression from 2026.9.6), WAL checkpoint blocking, and post-install Doctor verification failure. Addresses `state-migrated-no-rollback` edge cases that leave updates partially finalized.
  - **Breaking Changes**: None reported. Migration path is backward-compatible.
  - **Migration Note**: Users upgrading from 2026.11.1–11.3 should ensure `doctor --fix` runs after any failed update due to partial finalization.

- **v2026.11.8**: [Release Notes](https://docs.openclaw.ai/releases/2026.11.8)  
  - **Changes**: Introduced core improvements to agent ownership, session state management, and external plugin handling. Resolved long-standing WAL auto-checkpoint stalls and improved Windows service restart reliability.
  - **Note**: This release laid groundwork for the 2026.11.9 patch cycle; no major breaking changes.

---

### **3. Project Progress**  
**Merged PRs (275)**:  
- **PR #205097** ([Fix durable exec completion](https://github.com/openclaw/openclaw/pull/205097)): Ensures background commands complete even when child processes persist, fixing a silent hang in `durable: true` jobs.  
- **PR #205062** ([Refactor session admission logic](https://github.com/openclaw/openclaw/pull/205062)): Centralizes custody checks to prevent redundant access validation during session spawning—critical for security and consistency.  
- **PR #205085** ([Remove bright spots on macOS sidebar icons](https://github.com/openclaw/openclaw/pull/205085)): Minor but impactful UI polish improving visual harmony on Apple Silicon devices.

**Features Advanced**:  
- **Talk Settings Redesign (PR #205068)**: Part of a multi-phase UI overhaul. Now in review after stacking on prior work (PR #204355).  
- **Control UI Locale Refresh (PR #205109)**: Automated sync ensures translations stay up-to-date without bypassing branch protection.

---

### **4. Community Hot Topics**  
Top Issues by comment count reveal systemic pain points:

| Issue | Comments | Severity | Link |
|------|---------|----------|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959): Gateway blocks for minutes during plugin capture | 87 | **P0 (Crash Loop)** | [Bug: Plugin capture blocks event loop] |
| [#164294](https://github.com/openclaw/openclaw/issues/164294): WAL auto-checkpoint never completes | 43 | **P0 (Stability)** | [Blocked by in-process reader] |
| [#197083](https://github.com/openclaw/openclaw/issues/197083): Post-install Doctor leaves update partially finalized | 39 | **P0 (UX Release Blocker)** | [State migration failure] |
| [#170956](https://github.com/openclaw/openclaw/issues/170956): Windows restarts fail due to schtasks + slow startup | 34 | **P0 (Reliability)** | [Unreliable updates on Windows] |

**Underlying Needs**:  
- **Update reliability** is a top concern—especially on Windows and in managed environments.  
- **Database durability and performance** are recurring themes: WAL stalls, SQLite I/O pressure, and state DB snapshot inefficiencies.  
- **User-facing stability** dominates feedback: crashes, hangs, and invisible state corruption are frustrating users despite functional core features.

---

### **5. Bugs & Stability**  
**Critical Bugs (P0/P1)**:  

| Bug | Description | Fix PR? |
|-----|-------------|--------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes during large plugin capture (2026.9.6 regression) | ❌ No fix yet |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | WAL checkpoint permanently blocked by reader | ❌ No fix yet |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | Doctor fails to verify WAL commit → partial finalization | ❌ No fix yet |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | `doctor --fix --non-interactive` idles indefinitely on macOS | ❌ No fix yet |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | Native Codex helper completions fail to resume parent → user locked out | ✅ **PR pending** (#205100) |

**Regression Trends**:  
- Multiple regressions tied to **2026.9.6+** (e.g., memory leaks in `prepared-model-catalog.worker.js`, SQLite I/O pressure).  
- **Windows-specific issues dominate** (restarts, permissions, `schtasks` instability), indicating platform-specific testing gaps.

---

### **6. Feature Requests & Roadmap Signals**  
High-demand features emerging from community input:

| Request | Priority | Status | Link |
|--------|----------|--------|------|
| **Dynamic SharePoint resolution in Teams** | P2 | Open | [#136271](https://github.com/openclaw/openclaw/issues/136271) |
| **Enforceable checkpoints for WebChat runs** | P2 | Open | [#138990](https://github.com/openclaw/openclaw/issues/138990) |
| **Session model pins inherit fallback chain** | P2 | Closed (proposal accepted) | [#151980](https://github.com/openclaw/openclaw/issues/151980) |
| **Catch up on missed inbound messages after restart** | P1 | Open (stale) | [#55792](https://github.com/openclaw/openclaw/issues/55792) |
| **Consume MCP Events to trigger agent runs** | P3 | Open | [#166586](https://github.com/openclaw/openclaw/issues/166586) |

**Prediction for Next Version (v2026.11.10)**:  
Expect **enhanced update resilience** (especially on Windows), **WAL/SQLite performance tuning**, and **session state recovery improvements**. The "prepared-release" design issue (#204775) suggests upcoming structural changes to update flow.

---

### **7. User Feedback Summary**  
Real-world pain points reflect deep trust erosion in stability and upgrade safety:

- **"I’ve tried updating 10 times — it fails every time."** (Windows user, #170956)  
- **"After an update, my assistant is stuck in 'degraded' mode — can’t recover."** (macOS user, #190307)  
- **"The Control UI shows ‘no terminal sessions’ even though I just opened one."** (UI friction, #205099)  
- **"My chat history is fine, but the system says ‘no live response owner’ — why?"** (Android voice drop, #138272)

Users value **predictability** over novelty. Features like dynamic tool behavior or AI-driven automation are appreciated only if they don’t break core workflows.

---

### **8. Backlog Watch**  
Longstanding, high-impact issues needing maintainer attention:

| Issue | Age | Impact | Status |
|------|-----|--------|--------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959): Plugin capture blocks event loop | 7 weeks | ⚠️ Critical | Open, P0, 87 comments |
| [#164294](https://github.com/openclaw/openclaw/issues/164294): WAL checkpoint never completes | 5 weeks | ⚠️ Critical | Open, P0, 43 comments |
| [#150635](https://github.com/openclaw/openclaw/issues/150635): Short-term recall evicts entries nightly | 11 weeks | 🛑 Data loss risk | Open, P2, 31 comments |
| [#126360](https://github.com/openclaw/openclaw/issues/126360): AgentSelectionRequiredError floods logs | 12 weeks | 📉 UX friction | Open, P2, 22 comments |
| [#55792](https://github.com/openclaw/openclaw/issues/55792): Missed inbound messages after restart | 17 months | 🔥 Message loss | Open, P1, 11 comments |

> **Call to Action**: These issues represent **core trust barriers**. Prioritizing them will directly improve user retention and reduce support burden.

---  
*Data collected: 2026-11-25 | Source: [GitHub OpenClaw Repository](https://github.com/openclaw/openclaw)*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-25**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in late 2026 is characterized by rapid innovation, divergent architectural paths, and growing maturity in core reliability. Projects are increasingly focused on **session persistence**, **update resilience**, and **secure identity management**, signaling a shift from feature experimentation to production-grade stability. While OpenClaw leads in velocity and community scale, Hermes Agent and QwenPaw demonstrate strong engineering discipline and user-centric refinement. ZeroClaw stands out with its focus on **enterprise-grade composability**, **OIDC integration**, and **modular runtime design**, reflecting a strategic move toward secure, auditable agent workflows in regulated environments.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Releases (Last 24h) | Health Score¹ | Notes |
|--------|------------------|----------------|----------------------|---------------|-------|
| **OpenClaw** | 500 | 500 | v2026.11.9 / v2026.11.8 | ⭐⭐⭐⭐☆ (4.5/5) | Highest activity; rapid iteration, but critical bugs persist |
| **Hermes Agent** | 50 | 50 | v0.23.4, canary build | ⭐⭐⭐⭐☆ (4.4/5) | High stability focus; patch release consolidating 229+ PRs |
| **QwenPaw** | 20 | 41 | None (beta v2.3.1-beta.1 under verification) | ⭐⭐⭐☆☆ (3.8/5) | Intensive refinement phase; UX and memory fixes underway |
| **ZeroClaw** | 9 | 50 | None (v0.9.0 stable, v0.9.1 expected) | ⭐⭐⭐⭐☆ (4.3/5) | Architectural momentum; security and identity deepening |

> ¹ *Health Score*: Based on stability of releases, bug severity trends, PR quality, and backlog triage readiness (1–5 scale).

---

### **3. OpenClaw's Position**  
OpenClaw remains the **most active and largest-scale project** in the ecosystem, with unmatched development velocity—500 issues and 500 PRs in 24 hours. Its technical approach emphasizes **high-frequency updates**, **plugin extensibility**, and **cross-platform compatibility**, but this comes at the cost of systemic stability risks (e.g., P0 WAL stalls, update corruption). Compared to peers:  
- **vs. Hermes Agent**: OpenClaw prioritizes breadth and speed over granular session integrity; Hermes focuses on long-running reliability.  
- **vs. QwenPaw**: OpenClaw has larger community size and broader contributor base, but QwenPaw shows deeper UX polish and user feedback responsiveness.  
- **vs. ZeroClaw**: OpenClaw lacks structured identity/security foundations; ZeroClaw’s ACP/OIDC focus offers superior enterprise readiness.  

OpenClaw is the de facto "reference implementation" for general-purpose agents, but its instability may limit adoption in mission-critical use cases.

---

### **4. Shared Technical Focus Areas**  
Across all projects, recurring technical needs indicate emerging industry-wide priorities:

| Need | Projects Affected | Specific Examples |
|------|-------------------|-------------------|
| **Session State Integrity & Recovery** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Post-update state corruption, silent failures after restart, stale profiles (e.g., #170956, #156899, #8893) |
| **Update & Upgrade Reliability** | OpenClaw, ZeroClaw, QwenPaw | Windows service failures, partial finalization, `doctor --fix` dependency (e.g., #197083, #8830) |
| **Database & Storage Durability** | OpenClaw, Hermes Agent, ZeroClaw | WAL checkpoint stalls, SQLite contention, memory exhaustion (e.g., #164294, #159886, #12709) |
| **Model & Configuration Scoping** | QwenPaw, ZeroClaw | Global settings overriding per-agent config (#8893), model selection inconsistency (#12667) |
| **Security & Identity Management** | ZeroClaw, OpenClaw, Hermes Agent | OIDC integration, session theft risk, provider impersonation (e.g., #12707, #156899) |

These shared challenges suggest a **consensus forming around foundational agent reliability**, moving beyond "can it run?" to "can it survive a crash or reboot?"

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **Primary Focus** | General-purpose agent with rich plugin ecosystem | Long-lived, multi-profile autonomous agents | Human-in-the-loop (HITL) safety & UX polish | Secure, composable agent workflows (enterprise) |
| **Target Users** | Developers, power users, early adopters | Enterprise teams, researchers, devops | Creative professionals, content creators | Security-conscious orgs, compliance-driven users |
| **Architecture** | Monolithic + plugin-heavy | Modular, profile-based, DB-first | Componentized UI/UX, skill-driven | Microservices-style, ACP-integrated, OIDC-native |
| **Key Differentiator** | Velocity and scalability | Session consistency & Bot Mode robustness | User control & transparency | Identity governance & local-first data |

ZeroClaw and QwenPaw are building **user trust through predictability**, while OpenClaw and Hermes Agent prioritize **scale and automation depth**—but at higher risk of instability.

---

### **6. Community Momentum & Maturity**

| Tier | Project(s) | Characteristics |
|------|------------|----------------|
| **Rapid Iteration** | OpenClaw, QwenPaw | Constant PR/issue churn; new features and hotfixes daily; high-risk/high-reward development |
| **Stabilizing Phase** | Hermes Agent | Patch releases consolidate prior work; focus on eliminating silent failures and improving observability |
| **Architectural Refinement** | ZeroClaw | Deep investment in identity, access control, and modular runtime; fewer surface-level changes, more foundational work |

> ✅ **Maturity Signal**: Projects like Hermes Agent and ZeroClaw are transitioning from “build fast” to “build right”—a sign of maturing ecosystems ready for enterprise adoption.

---

### **7. Trend Signals**  
Based on community feedback and technical priorities, the following industry trends are emerging:

1. **Human-in-the-Loop (HITL) as a Core Requirement**  
   - Explicit demand for `ask_user_question` tools (QwenPaw #6274) and pause/resume controls signals that **trust and safety** are now primary UX drivers—not just performance.

2. **Local-First, Secure Memory Backends Are Non-Negotiable**  
   - ZeroClaw’s native Turso support request and QwenPaw’s archival reference counting show growing demand for **predictable, bounded memory retention**—not just “never forget.”

3. **Identity & Access Control Are Now Infrastructure-Level Needs**  
   - OIDC tracking in ZeroClaw, session scoping in QwenPaw, and provider validation in Hermes Agent reflect a shift: **agents must be owned, auditable, and accountable**—not just autonomous.

4. **Observability > Automation**  
   - Users are asking not “What can it do?” but “Why did it fail?” and “What is it doing right now?” This drives demand for better logging, session introspection, and error context (e.g., OpenClaw’s `exit status` fix, ZeroClaw’s stderr surfacing).

5. **Enterprise Readiness = Stability + Security + Composability**  
   - The most mature projects (ZeroClaw, Hermes Agent) are solving problems that only emerge at scale: session drift, cross-platform sync, and identity sprawl.

---

### **Conclusion**  
The personal AI agent landscape is evolving from **tool-focused experimentation** to **production-ready, trustworthy systems**. OpenClaw sets the pace in innovation, but its instability highlights the cost of speed. Hermes Agent and QwenPaw are proving that **user trust is earned through reliability and transparency**. ZeroClaw is defining the future of **secure, composable agent infrastructure**. For developers and decision-makers: prioritize projects with **strong identity models**, **robust session recovery**, and **clear upgrade paths**—these are the hallmarks of sustainable, scalable AI agents in real-world use.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-25**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating robust community engagement and rapid development momentum. Two new releases were issued: a patch update (v0.23.4) rolling up ~229 merged PRs, and a canary build for early adopters. The ecosystem is stabilizing around core agent reliability, session consistency, and cross-platform synchronization, while also pushing forward on advanced features like local model optimization and intelligent skill curation. High-priority bugs related to message delivery, session state corruption, and profile sync are being actively addressed.

---

### **2. Releases**  
- **`v0.23.4` (November 23, 2026)**  
  - *Type:* Patch release  
  - *Summary:* Consolidates ~229 merged PRs since `v0.23.3` into a stable build across CLI, Docker, Microsoft Store, and Hermes Cloud. No breaking changes reported.  
  - *Migration Note:* Users should upgrade to ensure stability, especially those relying on Bot Mode, Telegram/Slack integrations, or custom provider configurations. Full changelog will be included in `v0.24.0`.  
  - 🔗 [Release v0.23.4 on GitHub](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.4)

- **`canary.20261124T064706Z-v0.23.3` (November 24, 2026)**  
  - *Type:* Canary build  
  - *Summary:* Intended for testing bleeding-edge fixes and features; includes recent improvements to gateway watchdog logic, profile handling, and browser tooling. Not recommended for production use.  
  - 🔗 [Canary Build on GitHub](https://github.com/nousresearch/hermes-agent/releases/tag/canary.20261124T064706Z-v0.23.3)

---

### **3. Project Progress**  
*Today’s Merged/Closed PRs (top 8 by impact):*

| PR # | Title | Impact | Status |
|------|-------|--------|--------|
| [#159923](https://github.com/nousresearch/hermes-agent/pull/159923) | Fix compaction summaries: stop re-listing every archive path | Fixes long-term chat bloat (see #159686) | ✅ Closed |
| [#159924](https://github.com/nousresearch/hermes-agent/pull/159924) | Optimize `local_lineage_index` via expression index | Reduces DB contention and latency in session control | ✅ Closed |
| [#159926](https://github.com/nousresearch/hermes-agent/pull/159926) | Fix locale encoding errors in `strftime()` fallback | Resolves crash risk on Windows (cp936 locale) | ✅ Closed |
| [#159928](https://github.com/nousresearch/hermes-agent/pull/159928) | Prevent unnecessary gateway reconnect on `.env` save | Stops spurious platform disconnections | ✅ Closed |
| [#159914](https://github.com/nousresearch/hermes-agent/pull/159914) | Fix duplicate plugin member storm | Prevents cascading file system corruption during plugin merge | ✅ Closed |
| [#159927](https://github.com/nousresearch/hermes-agent/pull/159927) | Add Grounded Hermes to catalog | Expands AI-powered news verification capabilities | ✅ Closed |
| [#159906](https://github.com/nousresearch/hermes-agent/pull/159906) | Cap auto-generated skills in background review | Prevents infinite skill proliferation | ✅ Closed |
| [#159893](https://github.com/nousresearch/hermes-agent/pull/159893) | Update AgentRouter plugin to v0.2.0 | Enhances routing intelligence and skill set | ✅ Closed |

> 💡 **Key Advancement:** Critical performance and stability fixes around session persistence (`#159924`, `#159923`) and UI resilience (`#159926`, `#159899`) suggest a strong focus on long-running agent reliability.

---

### **4. Community Hot Topics**  
Top Issues & PRs by comment volume and urgency:

| Issue/PR | Summary | Link | Comments | Severity |
|--------|--------|------|----------|----------|
| [#122609](https://github.com/nousresearch/hermes-agent/issues/122609) | Skills index stale (28.1h old, limit 26h) — impacts `/docs/skills` | 📌 | 24 | ⚠️ P2 (Degraded) |
| [#156899](https://github.com/nousresearch/hermes-agent/issues/156899) | Concurrent profile plugin lookup leaves provider as "Unknown" until restart | 📌 | 10 | ⚠️ P2 (Functional Breakage) |
| [#159912](https://github.com/nousresearch/hermes-agent/issues/159912) | Localized skill description blocks updates due to hash collision | 📌 | 1 | ⚠️ P2 (UX/Localization) |
| [#159925](https://github.com/nousresearch/hermes-agent/issues/159925) | Plugins need explicit package index declaration for Python deps | 📌 | 0 | ⚠️ P2 (Dependency Management) |
| [#159928](https://github.com/nousresearch/hermes-agent/pull/159928) | Avoid gateway reconnect on no-change `.env` save | 📌 | undefined | ⚠️ P2 (Stability) |

> 🔍 **Analysis:** The top-tier issues center on **session integrity**, **profile state consistency**, and **plugin lifecycle management**—critical for users running multi-profile, long-lived agents. The recurring theme is **state drift** and **silent failures** that degrade trust without clear error signals.

---

### **5. Bugs & Stability**  
*Ranked by severity and impact:*

| Issue # | Description | Severity | Status | Fix PR? |
|--------|-------------|----------|--------|---------|
| [#122609](https://github.com/nousresearch/hermes-agent/issues/122609) | Skills index stale (28.1h old) → broken Skill Hub links | 🔴 P2 (Degraded) | Open | ❌ No fix yet |
| [#156899](https://github.com/nousresearch/hermes-agent/issues/156899) | "Unknown provider" after concurrent profile load — requires restart | 🔴 P2 (Critical) | Open | ❌ No fix yet |
| [#159446](https://github.com/nousresearch/hermes-agent/issues/159446) | Bot Mode hop cap refusal silently drops messages | 🔴 P2 (Silent Failure) | Open | ❌ No fix yet |
| [#159886](https://github.com/nousresearch/hermes-agent/issues/159886) | Whole-index routing rewrite causes 8.5s DB write lock → 30s timeouts | 🔴 P2 (Performance) | Open | ❌ No fix yet |
| [#159686](https://github.com/nousresearch/hermes-agent/issues/159686) | Bot Chat cannot reset or compact — token floor grows indefinitely | 🔴 P2 (State Bloat) | Open | ✅ Fix PR exists (#159923) |
| [#155093](https://github.com/nousresearch/hermes-agent/issues/155093) | `local_lineage_index()` scans all metadata rows → slow reads | 🔴 P2 (Performance) | Open | ✅ Fix PR exists (#159924) |

> ⚠️ **Note:** While several high-impact bugs lack immediate fixes, **two critical performance bottlenecks** have been resolved via PRs (#159923, #159924), indicating proactive maintenance of scalability.

---

### **6. Feature Requests & Roadmap Signals**  
Top feature requests signal emerging priorities:

| Request | Summary | Priority | Linked PR/Issue | Predicted In |
|--------|--------|----------|------------------|--------------|
| [#62780](https://github.com/nousresearch/hermes-agent/issues/62780) | Canonical cross-platform session (CLI, Desktop, TUI, Web, Telegram, IDE, etc.) | 🟡 P3 | Open | v0.24.0+ |
| [#159806](https://github.com/nousresearch/hermes-agent/issues/159806) | Local inference profiling for Ollama/Strata on DGX Spark | 🟡 P3 | Open | v0.24.0 |
| [#149488](https://github.com/nousresearch/hermes-agent/issues/149488) | Take over/hand back browser tab (CDP screen source) | 🟡 P2 | Open | v0.24.0 |
| [#145597](https://github.com/nousresearch/hermes-agent/issues/145597) | Support multiple API keys per provider (rotation/failover) | 🟡 P2 | Open | v0.24.0 |
| [#159925](https://github.com/nousresearch/hermes-agent/issues/159925) | Plugin package index declaration for Python wheels | 🟡 P3 | Open | v0.24.0 |

> 🎯 **Roadmap Signal:** The project is shifting toward **multi-environment orchestration**, **local AI performance tuning**, and **advanced automation workflows** (e.g., browser takeover). Expect deeper integration with local models and enterprise-grade resilience.

---

### **7. User Feedback Summary**  
Real user pain points from open issues:

- **Session State Corruption:** Users report bots failing silently due to stale profiles or misregistered providers (e.g., #156899).
- **Message Loss in Bot Mode:** Long replies vanish or show “last 0 chars” (e.g., #156513, #159446), leading to workflow deadlocks.
- **Profile Sync Conflicts:** Remote backend sync writes into default profile, corrupting data (e.g., #135119).
- **Local Model Limitations:** Users on DGX Spark demand better profiling tools for local inference (e.g., #159806).
- **Tooling Friction:** Symlinks break export/import pipelines (e.g., #92059), and localization breaks skill updates (e.g., #159912).

> ✅ **Satisfaction Indicators:** Users appreciate stability improvements in canary builds, and new features like Grounded Hermes (PR #159927) are well-received.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues needing maintainer attention:

| Issue # | Title | Age | Status | Notes |
|--------|-------|-----|--------|-------|
| [#122609](https://github.com/nousresearch/hermes-agent/issues/122609) | Skills index stale (28.1h old) | 81 days | Open | Impacts core discovery UX |
| [#62780](https://github.com/nousresearch/hermes-agent/issues/62780) | Canonical cross-platform session | 167 days | Open | Foundational for multi-device use |
| [#119694](https://github.com/nousresearch/hermes-agent/issues/119694) | Cron job pins 'custom' provider instead of named one | 83 days | Open | Silent billing risk |
| [#149830](https://github.com/nousresearch/hermes-agent/issues/149830) | Profile export fails on symlinks | 79 days | Closed (unmerged) | Still affects unattended deployments |
| [#156575](https://github.com/nousresearch/hermes-agent/issues/156575) | Cron run in console silently resumes paused jobs | 9 days | Closed | Shows inconsistency in CLI behavior |

> ⏳ **Recommendation:** Prioritize #122609 and #62780—both represent systemic UX risks and foundational gaps in agent continuity.

--- 

**📌 Final Assessment:**  
Hermes Agent is in a **high-growth, high-activity phase** with strong engineering responsiveness. Core stability is improving rapidly, but **long-running session integrity** and **cross-platform consistency** remain critical challenges. The project is clearly evolving toward **enterprise-grade autonomous agents** with local model support, distributed execution, and resilient state management. Maintain a close watch on the `v0.24.0` roadmap.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-25**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active, with 41 pull requests and 20 issues updated in the past 24 hours—indicating strong ongoing development momentum. No new releases were published, but a beta version (`v2.3.1-beta.1`) is under verification (Issue #8861), signaling imminent progress toward stability. The community is focused on core UX improvements, plugin reliability, and backend robustness, particularly around model handling, memory management, and cross-platform consistency. High-priority bugs related to UI rendering, session state, and local model processes are receiving attention.

---

### **2. Releases**  
**None**  
No new stable or pre-release versions were published today. However, **QwenPaw v2.3.1-beta.1** was released earlier this week (Nov 23) and is currently undergoing installation verification (see [Issue #8861](https://github.com/agentscope-ai/QwenPaw/issues/8861)). This release includes fixes for critical regressions like media handling and session stability, and is expected to be promoted to stable after successful validation.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #8897**: Fixed Windows path handling during storage migration ([#8897](https://github.com/agentscope-ai/QwenPaw/pull/8897))  
- ✅ **PR #8896**: Updated end-to-end tests for skill pool auto-sync menu ([#8896](https://github.com/agentscope-ai/QwenPaw/pull/8896))  
- ✅ **PR #8886**: Released **Creator 2.0.7** with review recovery and media fix patches ([#8886](https://github.com/agentscope-ai/QwenPaw/pull/8886))  
- ✅ **PR #8895**: Improved MCP client error reporting by preserving sessions on HTTP rejection ([#8895](https://github.com/agentscope-ai/QwenPaw/pull/8895))  

These updates address key pain points in user experience (Creator workflow), system resilience (session persistence), and compatibility (MCP integration). The Creator 2.0.7 release directly resolves a hard blocker in review rounds (referencing Issue #8592).

---

### **4. Community Hot Topics**  
The most active discussions center on **user control**, **model accuracy**, and **UI/UX polish**:

- 🔥 **[Issue #6274: Add `ask_user_question` tool for Human-in-the-Loop](https://github.com/agentscope-ai/QwenPaw/issues/6274)**  
  *4 comments, 1 upvote* — Users request structured user input during high-risk or ambiguous agent tasks. This signals demand for safer, more transparent agent interactions—especially in production or sensitive workflows.

- 🔥 **[Issue #8893: Console model settings lack agent scope](https://github.com/agentscope-ai/QwenPaw/issues/8893)**  
  *2 comments* — A recurring usability issue: global model settings override per-agent configurations. Users expect granular control, indicating a need for better configuration scoping in the console.

- 🔥 **[Issue #8882: Reference-counted archival for long-term memory](https://github.com/agentscope-ai/QwenPaw/issues/8882)**  
  *1 comment* — Highlights growing concern about "forgetting" important context despite the promise of "Never forgets." Suggests a strategic shift toward intelligent memory retention over simple storage.

> **Underlying Need:** Users want **predictable, safe, and configurable AI behavior**—not just powerful agents, but ones that respect user intent and avoid hallucinations or data loss.

---

### **5. Bugs & Stability**  
**Critical Bugs Reported Today (Ranked by Severity):**

| Issue | Description | Fix Status | Link |
|------|-------------|------------|------|
| **#8893** [OPEN] | Model settings not scoped to individual agents; causes "no model" display | Pending | [Issue #8893](https://github.com/agentscope-ai/QwenPaw/issues/8893) |
| **#8875** [OPEN] | MCP streamable_http masks 4xx errors as “not connected,” tearing down sessions | PR pending | [Issue #8875](https://github.com/agentscope-ai/QwenPaw/issues/8875) |
| **#8887** [OPEN] | Media blocks trigger 400 errors on non-multimodal models → cascading internal errors | PR pending | [Issue #8887](https://github.com/agentscope-ai/QwenPaw/issues/8887) |
| **#8888** [OPEN] | Transcript jumps back when content collapses (scrolling regression) | PR pending | [Issue #8888](https://github.com/agentscope-ai/QwenPaw/issues/8888) |
| **#8830** [OPEN] | Windows: `llama-server.exe` accumulates across restarts, exhausting memory | PR merged | [Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) |

> ✅ **Note**: PR #8841 ([#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)) already addresses the `llama-server.exe` process leak—this confirms the team is actively tackling platform-specific stability issues.

---

### **6. Feature Requests & Roadmap Signals**  
Top feature requests reflect a move toward **user-centric AI collaboration** and **technical maturity**:

- 🛠️ **`ask_user_question` tool** (Issue #6274): A clear signal for **Human-in-the-Loop (HITL)** support—likely to be prioritized in v2.4.
- 💬 **AI Prompt Polishing button** (Issue #8892): Indicates users value **input quality enhancement**, suggesting future UI tools for prompt engineering.
- 📦 **Runtime base-path deployment** (PR #8719): Implies demand for **reverse-proxy and containerized deployments**, hinting at enterprise adoption.
- 🔒 **Minimal egress policy for coding mode** (Issue #8878): Points to stronger security-by-default design—critical for sandboxed execution.

> **Prediction**: The next stable release will likely include HITL features, improved model scoping, and enhanced security policies—driven by these top-tier requests.

---

### **7. User Feedback Summary**  
Real-world feedback reveals three dominant themes:

1. **Frustration with inconsistent model behavior** — Users report models disappearing from agent cards even when configured, especially in multi-agent setups (#8893).
2. **Anxiety over unrecoverable state** — Errors like “Internal error” after media processing (Issue #8887) cause trust erosion, especially in long-running sessions.
3. **Desire for control and transparency** — Multiple reports emphasize needing to see *why* an agent paused, what it’s doing, or how it made decisions—highlighting the need for better observability.

> ✅ **Positive Signal**: The high volume of thoughtful, well-documented issues suggests a mature, engaged user base committed to improving the platform.

---

### **8. Backlog Watch**  
Several high-impact issues remain unaddressed or under discussion:

- ⚠️ **[Issue #8881]: Enforce tenant scoping at memory retrieval layer** ([#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881))  
  *Design-level gap*: Current isolation relies on directory conventions—fragile and error-prone. Needs architectural overhaul.

- ⚠️ **[Issue #8880]: Skill scanner fails open on CRITICAL findings** ([#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880))  
  *Security risk*: Default `warn` mode allows unsafe skill installs. Requires immediate reevaluation of default safety policies.

- ⚠️ **[Issue #8879]: max_processes/max_memory_mb not enforced by sandbox** ([#8879](https://github.com/agentscope-ai/QwenPaw/issues/8879))  
  *Critical oversight*: Resource limits are accepted but ignored—undermines sandbox integrity.

> **Action Required**: These represent foundational risks. Maintainers should prioritize triage and assign owners to prevent escalation.

---

### ✅ **Summary Assessment**  
**Project Health: Strong**  
QwenPaw is in a phase of **intensive refinement** post-v2.3.0. While no new releases landed, significant progress is visible in PR merges, bug fixes, and roadmap-aligned feature work. The community is deeply engaged, with high-quality feedback driving development. However, **security, memory, and configuration consistency** remain critical areas requiring urgent attention. With the beta release underway, the next 1–2 weeks will determine whether v2.3.1 can stabilize the platform ahead of broader adoption.

---  
*Data collected: 2026-11-25 | Source: GitHub API / QwenPaw repo*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-25**

---

### **1. Today's Overview**  
ZeroClaw (github.com/zeroclaw-labs/zeroclaw) exhibits strong momentum with 50 open pull requests and 9 active issues in the last 24 hours, indicating sustained contributor engagement and rapid development. The project is advancing key architectural shifts—particularly around OIDC identity management, ACP integration for web chat, and modularization of `zeroclaw-runtime`. While no new releases have been published, significant progress has been made on v0.9.1 features including canonical model configuration, enhanced security controls, and improved email channel behavior. Activity remains focused on stability, security hardening, and expanding protocol interoperability.

---

### **2. Releases**  
No new releases were published in the past 24 hours.  
Latest stable release: [v0.9.0](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.9.0), released on 2026-11-12.  
*Note:* This version shipped core OIDC stack and dashboard sign-in; v0.9.1 is expected to include remaining identity/access milestones.

---

### **3. Project Progress**  
**Merged/Closed PRs (last 24h):**  
- ✅ **PR #12398** – *fix(runtime): surface exit status and stderr on failed shell runs*  
  → Improves debugging visibility by exposing exit codes and error output from failed shell commands. Critical for agent reliability and observability.

**Key Features Advanced:**  
- ✅ **PR #12452 & #12450** – *feat(zerocode): configure and select canonical provider models*, *feat(providers): adopt V5 registry*  
  → Enables precise model selection across providers via a unified registry. Foundation for future model lifecycle management.
- ✅ **PR #12654** – *feat(webchat): wire ACP startup cutover*  
  → Finalizes transition from legacy `/ws/chat` to ACP-based web chat transport; enables session persistence and backward compatibility.
- ✅ **PR #12652 & #12651** – *feat(acp): durable session management and runtime parity*  
  → Ensures ACP supports full memory, steering, and accounting—critical for consistent client experiences across IDE and dashboard.

---

### **4. Community Hot Topics**  
The most active discussions center on **security**, **identity**, and **core infrastructure**:

- 🔥 **Issue #8289** – *[Tracker]: OIDC milestone: canonical principals and inbound authentication*  
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)  
  → Still open despite v0.9.0 launch; signals urgency in finalizing device-bound session lifecycles. High-risk, high-priority tracking.

- 🔥 **Issue #12707** – *[Tracker]: Daemon-held OIDC refresh grants for device sessions (ADR-017)*  
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/12707)  
  → New tracker aligned with ADR-017; implies ongoing work to prevent session drops during IdP token refreshes.

- 🔥 **PR #12452 & #12450** – Canonical model registry updates  
  [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/12452)  
  → High comment volume in related PRs reflects community demand for deterministic, auditable model routing—especially across OpenAI, Anthropic, and Ollama.

> 💡 **Underlying Need**: Users are demanding **predictable, secure, and composable AI workflows** with clear ownership of identities, models, and session state—especially in enterprise or privacy-sensitive contexts.

---

### **5. Bugs & Stability**  
Three S2-level bugs reported today, affecting core functionality:

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|------------|
| [#12703](https://github.com/zeroclaw-labs/zeroclaw/issues/12703) | S2 | Email channel re-processes backlog after restart due to missing `\Seen` flag | ✅ **Fix PR exists**: [#11762](https://github.com/zeroclaw-labs/zeroclaw/pull/11762) (merged Nov 25) |
| [#12709](https://github.com/zeroclaw-labs/zeroclaw/issues/12709) | S2 | MCP HTTP client lacks connection pooling → stale sockets cause outcome-unknown failures | ❌ No fix yet; risk: high |
| [#12667](https://github.com/zeroclaw-labs/zeroclaw/issues/12667) | S2 | `/model <id>` command reports success but actual requests use old model | ❌ No fix yet |

> ⚠️ **Critical Risk**: The MCP HTTP client’s lack of keep-alive control may lead to silent failures under load—potentially impacting agent reliability in production.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes suggest next-release priorities:

- 📌 **Native Local Turso Support** ([#12709](https://github.com/zeroclaw-labs/zeroclaw/issues/12709))  
  → Opt-in embedded database backend (Rust engine only). Signals growing interest in **local-first memory storage** with better concurrency than SQLite WAL.

- 📌 **Independent Browser Grants for Username/Password vs TOTP** ([#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596))  
  → Granular access control for web automation. Indicates demand for **fine-grained browser session permissions**.

- 📌 **Removal of Obsolete Tools** ([#12678](https://github.com/zeroclaw-labs/zeroclaw/pull/12678))  
  → Removal of `gemini_cli` tool due to Google’s deprecation. Reflects proactive cleanup of broken integrations—likely part of broader **provider lifecycle hygiene**.

> 🎯 **Prediction**: v0.9.1 will focus on **identity persistence**, **session resilience**, and **local data backends**, with continued emphasis on security and composability.

---

### **7. User Feedback Summary**  
Real user pain points are emerging from operational use cases:

- **Email Channel Friction**: Multiple users report that restarting the daemon causes duplicate responses to live emails ([#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760), [#12703](https://github.com/zeroclaw-labs/zeroclaw/issues/12703)).  
  → Feedback indicates reliance on persistent mail processing in production environments.

- **Model Switching Confusion**: Users expect `/model` to reflect changes immediately, but backend still uses old profile settings ([#12667](https://github.com/zeroclaw-labs/zeroclaw/issues/12667)).  
  → Highlights need for **real-time configuration sync** between CLI, UI, and agent runtime.

- **Browser Tool Limitations**: Only 16 of 100+ available browser commands exposed ([#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945)).  
  → Strong signal that advanced automation (e.g., form handling, iframe interaction) is blocked—critical for RPA-style agents.

---

### **8. Backlog Watch**  
High-priority items requiring maintainer attention:

- 🔴 **Issue #9945** – *browser tool exposes only 16 of 100+ commands*  
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9945)  
  → Blocked, accepted, high-risk. Long-standing limitation in agent-browser capabilities. Needs architectural review.

- 🔴 **Issue #12697** – *Split zeroclaw-runtime into smaller crates*  
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/12697)  
  → Tracker opened Nov 23; needs coordination. Essential for maintainability and dependency isolation.

- 🔴 **Issue #12709** – *Add native local Turso as opt-in memory backend*  
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/12709)  
  → First mention; low comment count but high strategic value. Should be prioritized for v0.9.1.

> ✅ **Recommendation**: Maintainers should triage these three issues for sprint planning—each addresses scalability, performance, and extensibility.

---

**Digest compiled:** 2026-11-25  
**Source:** GitHub activity (zeroclaw-labs/zeroclaw) – Last 24h  
**Analysis Scope:** Issues, PRs, comments, labels, metadata, trends

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*