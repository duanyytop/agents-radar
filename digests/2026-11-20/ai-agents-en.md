# OpenClaw Ecosystem Digest 2026-11-20

> Issues: 462 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-20 03:41 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-20**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 462 issues and 500 pull requests updated in the last 24 hours—indicating intense development and community engagement. The release of **v2026.11.10-beta.1** and **v2026.11.6** signals a sprint toward stability and enhanced agent onboarding. Critical focus areas include agent trust flows, update resilience, and session state integrity, particularly on Windows and macOS. High comment counts on top issues suggest widespread user impact from persistent bugs in upgrades, memory management, and plugin migration.

---

### **2. Releases**  
#### **v2026.11.10-beta.1**  
- **Agent Templates**: Native integration with ClawHub packages via `CLAW.md` manifest; bundled skill folders now verified through a trusted flow (#195707, #196322, #196348).  
- **OpenClaw ID**: Enables secure node-to-node identity linking (partial implementation).  
- **Impact**: Simplifies agent distribution and reduces dependency on manual configuration. No breaking changes reported.

#### **v2026.11.6**  
- **Smoother Upgrades**: Fixed bridge between 2026.11.5 updater and current path; corrected staged plugin dependency validation on Windows (#200662, #200595).  
- **Resilient Conversations**: Improved handling of subagent lifecycle and message delivery during transient failures.  
- **Migration Note**: Users upgrading from 2026.11.3 to 11.5 should verify plugin compatibility before activation due to known migration conflicts.

🔗 [Release v2026.11.10-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.1) | 🔗 [Release v2026.11.6](https://github.com/openclaw/openclaw/releases/tag/v2026.11.6)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #202206**: Recover interrupted QuickJS cells after Gateway crash — critical for code-mode reliability.  
- ✅ **PR #202204**: Preserve worktrees for completed sessions during idle cleanup — improves resumability.  
- ✅ **PR #202207**: Remove superseded Kimi K3 from model recommendations — prevents user confusion.  
- ✅ **PR #202198**: Fix Template preview navigation in review dialog — improves UX consistency.  

**Key Advancements:**  
- **Agent Trust & Onboarding**: PRs like #202013 (sign in to ClawHub from private drafts) and #202212 (assign computer name in UI) enhance usability and security.  
- **UI/UX Refinements**: Multiple fixes to reduce visual flicker (#202222), prevent duplicate progress displays (#202217), and improve avatar visibility (#201407).

---

### **4. Community Hot Topics**  
Top Issues by comment count reveal systemic pain points:

| Issue | Comments | Severity | Summary | Link |
|------|----------|----------|--------|------|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 29 | 🦪 Silver Shellfish (UX Release Blocker) | Post-install Doctor fails WAL verification after npm upgrade, leaving gateway partially finalized. | [Issue #197083](https://github.com/openclaw/openclaw/issues/197083) |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 29 | 🦞 Diamond Lobster (Crash Loop) | Synchronous persistence blocks event loop at scale — high resource contention. | [Issue #119720](https://github.com/openclaw/openclaw/issues/119720) |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | 27 | 🦪 Silver Shellfish | `doctor --fix --non-interactive` hangs indefinitely with no output on macOS. | [Issue #178359](https://github.com/openclaw/openclaw/issues/178359) |

> **Analysis**: These reflect deep instability in **state management**, **upgrade workflows**, and **resource handling under load**. Users are experiencing silent hangs, data corruption risks, and failed updates—indicating urgent need for improved diagnostics and recovery paths.

---

### **5. Bugs & Stability**  
High-severity bugs reported today:  

| Bug | Severity | Impact | Status | Related PRs? |
|-----|----------|--------|--------|--------------|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 🦪 Silver Shellfish | UX Release Blocker | Open | ❌ No fix yet |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 🦞 Diamond Lobster | Crash Loop | Open | ❌ No fix |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | 🦪 Silver Shellfish | Crash Loop | Open | ❌ No fix |
| [#199155](https://github.com/openclaw/openclaw/issues/199155) | 🦞 Diamond Lobster | Message Loss | Open | ❌ No fix |
| [#200606](https://github.com/openclaw/openclaw/issues/200606) | 🦪 Silver Shellfish | Update Blocked | Open | ❌ No fix |

> **Trend**: Persistent **update failures**, **SQLite lock contention**, and **race conditions in state DB access** dominate. Several bugs involve `doctor` and `update` commands hanging or failing silently—critical for production users.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes from high-comment PRs and Issues:

- **Agent Templates & ClawHub Integration** (#202013, #202212): Users want seamless, secure agent discovery and deployment via package registry.
- **Progress Streaming & Chat Clarity** (#202214, #202217): Demand for cleaner, non-redundant UI feedback in real-time chats.
- **Cron Job Controls** (#131457, #130247): Need for `--max-runs`, `--until`, and end conditions in automation.
- **Memory FTS Improvements** (#170997): CJK tokenization support indicates growing multilingual use.

> **Prediction**: Next stable release (v2026.12.0) will likely include **ClawHub-first agent templates**, **streaming UI enhancements**, and **cron job refinement**—with continued focus on **Windows/macOS upgrade stability**.

---

### **7. User Feedback Summary**  
Real-world pain points from issue reports:
- **Update failures** are crippling: Users report multi-hour stalls, SQLite locks, and unexplained rollbacks (e.g., #200289, #200606).
- **Silent failures** cause frustration: Messages lost without alerts (Telegram adapter, #125764), tool calls repeated (Kimi Code, #177989).
- **Session state inconsistency**: Stale banners persist across restarts (#186973), and WebChat shows phantom replies (#177210).
- **Resource exhaustion**: Memory leaks from failed image processing (#163107), and 2.5x memory increase post-upgrade (#169797).

> **Sentiment**: High satisfaction with new features (e.g., agent templates), but **trust in update reliability is eroding**. Users demand better error messaging and rollback safety.

---

### **8. Backlog Watch**  
Critical long-standing Issues needing maintainer attention:

| Issue | Age | Priority | Status | Notes |
|------|-----|----------|--------|-------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 3+ months | P1 | Open | Blocks scalability; sync persistence causes event loop stall |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | 3+ months | P1 | Open | Silent dead-lettering on Telegram network failure |
| [#187264](https://github.com/openclaw/openclaw/issues/187264) | 2+ months | P2 | Open | Request for caller-scoped scheduling without owner privileges |
| [#170997](https://github.com/openclaw/openclaw/issues/170997) | 3+ months | P2 | Open | CJK search fails due to trigram tokenizer limitation |
| [#202001](https://github.com/openclaw/openclaw/issues/202001) | 1 day | P2 | Open | Prompt cache invalidated by minor system prompt churn |

> **Call to Action**: Maintainers should prioritize **state consistency**, **plugin migration**, and **cross-platform stability**. High-impact issues like #119720 and #125764 are likely blockers for enterprise adoption.

---  
*Data source: GitHub — openclaw/openclaw • Updated: 2026-11-20*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-20**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in late 2026 is characterized by rapid evolution, divergent architectural philosophies, and growing maturity across key projects. Projects like OpenClaw and Hermes Agent are driving innovation in agent onboarding, session resilience, and cross-platform coordination, while QwenPaw and ZeroClaw emphasize UX refinement and security-hardened execution. Despite strong community engagement, systemic challenges around **update stability**, **state consistency**, and **cross-device synchronization** persist—indicating that the ecosystem is transitioning from experimental prototyping toward production-grade reliability. The convergence of agent templates, identity management, and secure model routing suggests a maturing infrastructure layer.

---

### **2. Activity Comparison**

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score¹ |
|--------|--------------|-----------|----------------|---------------|
| **OpenClaw** | 462 | 500 | v2026.11.10-beta.1 / v2026.11.6 | ⭐⭐⭐⭐☆ |
| **Hermes Agent** | 50 | 50 | v0.23.3 (patch), canary build | ⭐⭐⭐⭐☆ |
| **QwenPaw** | 21 | 39 | None (v2.3.0.post1 current) | ⭐⭐⭐☆☆ |
| **ZeroClaw** | 12 | 50 | Pending v0.9.1 release | ⭐⭐⭐☆☆ |

> **¹ Health Score**: Based on release cadence, bug severity, PR merge velocity, maintainer responsiveness, and user sentiment (1–5 stars).  
> *Note: OpenClaw leads in volume; Hermes shows high stability momentum; QwenPaw exhibits strong growth but UX friction; ZeroClaw has high activity with delayed releases.*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most **feature-rich and architecturally ambitious** project in the ecosystem, positioning itself as a **reference implementation for agent ecosystems**. Its use of `CLAW.md` manifests for agent templates, early adoption of OpenClaw ID for node linking, and native integration with ClawHub signal a move toward **standardized, verifiable agent distribution**—a capability not yet matched by peers. Compared to Hermes Agent’s focus on real-time workflows or QwenPaw’s UI polish, OpenClaw prioritizes **agent trust flows, upgrade resilience, and state integrity**, especially on Windows/macOS. With over 460 issues and 500 PRs in 24 hours, it also commands the largest active developer base, indicating strong community investment and influence.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on critical infrastructure needs:

| Focus Area | Projects Involved | Specific Needs |
|-----------|-------------------|----------------|
| **Session & State Integrity** | OpenClaw, Hermes Agent, ZeroClaw | Recovery after crashes, persistent context, idle cleanup, message loss prevention |
| **Update & Upgrade Stability** | OpenClaw, QwenPaw, ZeroClaw | Silent hangs (`doctor`, `update`), SQLite lock contention, plugin migration failures |
| **Security & Identity Management** | OpenClaw, ZeroClaw, Hermes Agent | Secure credential handling, role-based access, OpenClaw ID, scoped service credentials |
| **Cross-Platform Consistency** | OpenClaw, QwenPaw, Hermes Agent | Windows/macOS behavior parity, mobile layout robustness, desktop-mobile sync |
| **Model & Tool Routing Precision** | ZeroClaw, OpenClaw, QwenPaw | Canonical registry support, exact model referencing, custom provider validation |

These shared pain points indicate a **common foundational challenge**: building reliable, scalable, and auditable agent systems under dynamic environments.

---

### **5. Differentiation Analysis**

| Project | Feature Focus | Target Users | Technical Architecture |
|--------|---------------|--------------|--------------------------|
| **OpenClaw** | Agent templates, identity linking, update resilience | Enterprise developers, multi-agent system architects | Modular core with CLI-first design, emphasis on trust and state |
| **Hermes Agent** | Real-time chat, cron jobs, CI/CD integration | Dev teams, workflow automation users | Unified gateway, profile persistence, cloud-desktop sync |
| **QwenPaw** | Mobile-first UX, visual clarity, data lifecycle | General users, privacy-conscious adopters | Responsive web UI, extensible plugin system, local model focus |
| **ZeroClaw** | Security hardening, cost control, fine-grained access | Security-sensitive orgs, regulated environments | Minimalist binary, OIDC/OAuth2 support, V5 model registry |

> **Key Differentiator**: OpenClaw is **infrastructure-first**; ZeroClaw is **security-first**; Hermes is **workflow-first**; QwenPaw is **UX-first**.

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, Hermes Agent, ZeroClaw | High PR/issue volume, frequent patch releases, active RFCs and canary builds |
| **Stabilization Phase** | QwenPaw | No new release, focused on post-release UX fixes and mobile compatibility |
| **Mature Adoption** | OpenClaw, Hermes Agent | Production use reported; enterprise concerns (auditability, rollback safety) evident |

> **Trend**: OpenClaw and Hermes Agent are in **"scale-to-stability" mode**, while QwenPaw is entering **"productization" phase**—prioritizing usability over feature expansion. ZeroClaw remains in **pre-release rigor**, awaiting final gating.

---

### **7. Trend Signals**  
Based on community feedback and development signals, the following industry trends are emerging:

- **Agent Templates as Standard**: OpenClaw and Hermes are leading in **package-based agent deployment**, signaling a shift toward **reproducible, auditable agent lifecycles**.
- **Security-by-Design Imperative**: ZeroClaw’s RFC #12422 and OpenClaw’s OpenClaw ID reflect a growing demand for **scoped identities and credential isolation**—critical for enterprise adoption.
- **UX as Competitive Edge**: QwenPaw’s overwhelming UI/UX complaints highlight that **visual coherence and responsiveness** are now primary differentiators, not just functionality.
- **Local Model Integration Complexity**: Persistent issues with `llama-server.exe` leaks (QwenPaw), model URI routing (ZeroClaw), and tool call errors (Hermes) show that **local inference deployment remains fragile**.
- **Automation Needs Beyond Chat**: Cron job controls, background task visibility, and system notifications (QwenPaw) indicate rising demand for **persistent, autonomous agent behaviors**.

> ✅ **Value for Developers**: These trends point to a future where success depends less on raw model performance and more on **trust, stability, and seamless integration**—making OpenClaw’s agent trust framework and ZeroClaw’s security model particularly valuable for long-term system design.

---

**Prepared by**: Senior Analyst, AI Agent & Personal Assistant Ecosystem  
**Date**: 2026-11-20  
**Data Source**: GitHub repositories — openclaw/openclaw, nousresearch/hermes-agent, agentscope-ai/QwenPaw, zeroclaw-labs/zeroclaw

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-20**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating intense development momentum and strong community engagement. The release of **v0.23.3**, a patch rollup of ~370 merged PRs since v0.23.2, underscores rapid iteration and stabilization efforts across CLI, desktop, Docker, Microsoft Store, and Hermes Cloud. A concurrent canary build (v0.23.2+canary.20261119T064637Z) suggests ongoing integration testing for upcoming features. High comment counts on critical infrastructure issues reveal deep user reliance on session management, authentication, and gateway reliability.

---

### **2. Releases**  
- **`v0.23.3`** *(Released: 2026-11-19)*  
  - **Type:** Patch release  
  - **Summary:** Rolls up ~370 merged PRs into a stable release across all platforms (GitHub CLI, Desktop, Docker, Microsoft Store, Hermes Cloud).  
  - **Notes:** No breaking changes reported. Full changelog available in `v0.24.0` release notes. Ideal for users seeking stability after recent feature-heavy updates.  
  - [Download & Release Notes](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.3)

- **`v0.23.2+canary.20261119T064637Z`** *(Released: 2026-11-19)*  
  - **Type:** Canary build  
  - **Summary:** Pre-release version for early adopters; includes latest fixes and experimental features. Intended for testing before final v0.24.0.  
  - **Use Case:** Developers and power users validating real-time behavior of unified gateway, cron jobs, and session resilience.  
  - [Canary Build Downloads](https://hermes-assets.nousre)

---

### **3. Project Progress**  
*5 PRs merged/closed today:*  
- ✅ **PR #155459**: Security fix — prevents BlueBubbles password from leaking into gateway logs via webhook calls.  
- ✅ **PR #129602**: Fixes cron job handling by skipping malformed Bot Chat receipts instead of blocking future deferrals.  
- ✅ **PR #156330**: Adds **Backup & Transfer** feature to Desktop Settings, enabling agent migration between local and Hermes Cloud.  
- ✅ **PR #129610**: Improves context selection logic by ignoring empty-reply archives during `context_from` resolution.  
- ✅ **PR #142424**: Fixes desktop session control bar error when opening archived sessions by routing RPCs properly.

> 🔧 These merges reflect strong focus on **security hardening**, **session resilience**, and **user experience polish**—particularly around profile persistence and recovery workflows.

---

### **4. Community Hot Topics**  
Top 3 most commented items highlight systemic pain points:

| Issue | Comments | Severity | Link |
|------|---------|----------|------|
| [#143547](https://github.com/nousresearch/hermes-agent/issues/143547) | 84 | P2 | Unified gateway post-merge instability |
| [#131859](https://github.com/nousresearch/hermes-agent/issues/131859) | 64 | P3 | API permission error when creating PRs |
| [#155028](https://github.com/nousresearch/hermes-agent/issues/155028) | 9 | P2 | Heartbeat poller causing excessive DB reads |

🔍 **Underlying Needs:**  
- Users are deeply invested in **gateway stability** and **cross-process session continuity** (Issue #143547).  
- There’s growing friction around **CI/CD integrations** (Issue #131859), suggesting increased use of Hermes in developer workflows.  
- Performance optimization is emerging as a concern, especially under load (Issue #155028).

---

### **5. Bugs & Stability**  
*Critical bugs reported today (ranked by severity):*

| Bug | Severity | Impact | Fix PR? |
|-----|----------|--------|--------|
| [#158043](https://github.com/nousresearch/hermes-agent/issues/158043) | P2 | Background process completion notification lost due to truncation | ❌ No PR yet |
| [#158023](https://github.com/nousresearch/hermes-agent/issues/158023) | P2 | Gateway-owned group chats don’t trigger “needs you” badge on `@user` mentions | ❌ No PR |
| [#157667](https://github.com/nousresearch/hermes-agent/issues/157667) | P2 | Large paste preview fails with 404 in remote mode | ❌ No PR |
| [#154326](https://github.com/nousresearch/hermes-agent/issues/154326) | P2 | Transcript collapses to stale fragment after WebSocket storm | ❌ No PR |
| [#158084](https://github.com/nousresearch/hermes-agent/issues/158084) | P3 | Repetition-loop flagged replies fail to reach user or run tools | ✅ **PR #158084 open** |

> ⚠️ Multiple high-severity issues center on **session integrity**, **real-time communication**, and **remote gateway behavior**, indicating that distributed agent coordination remains a complex frontier.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature demands point toward deeper ecosystem integration and customization:

| Request | Priority | Signal |
|--------|----------|--------|
| [#91057](https://github.com/nousresearch/hermes-agent/issues/91057): Import browser cookies/profiles into desktop app | P2 | Demand for seamless web automation workflows |
| [#112627](https://github.com/nousresearch/hermes-agent/issues/112627): Config inheritance across profiles | P3 | Suggests scaling challenges with multi-profile setups |
| [#158090](https://github.com/nousresearch/hermes-agent/issues/158090): Allow audio replacement before size check | P3 | Indicates growing use of voice input and TTS pipelines |
| [#158091](https://github.com/nousresearch/hermes-agent/issues/158091): Add z0live plugin (self-hosted voice stack) | P3 | Signals interest in low-latency, real-time voice AI |

> 📈 Predictions: **Profile configuration inheritance**, **browser session import**, and **enhanced voice processing** are likely candidates for inclusion in **v0.24.0**.

---

### **7. User Feedback Summary**  
Real-world pain points reveal mature adoption patterns:

- **Multi-device users** struggle with session mismatches across SSH, desktop, and mobile (e.g., Issue #151990, #144466).  
- **Developers** report frustration with GitHub API rate limits and credential propagation (Issue #131859, #139087).  
- **Privacy-focused users** face blockers using local Ollama models due to malformed tool calls (Issue #153962).  
- **Voice users** are impacted by missing fallback chains and incomplete transcription flows (Issue #140431).  
- **Enterprise teams** need better auditability and backup capabilities (Issue #156330 confirmed as implemented).

> 💬 Verdict: High satisfaction with core agentic functionality, but **cross-platform consistency**, **authentication robustness**, and **offline/local model support** remain top concerns.

---

### **8. Backlog Watch**  
*Long-standing, high-impact issues needing maintainer attention:*

| Issue | Age | Status | Reason |
|------|-----|--------|--------|
| [#143547](https://github.com/nousresearch/hermes-agent/issues/143547) | 28 days | Open, 84 comments | Core gateway architecture instability after unification |
| [#131859](https://github.com/nousresearch/hermes-agent/issues/131859) | 58 days | Open, 64 comments | Critical auth flow issue affecting CI/CD workflows |
| [#92774](https://github.com/nousresearch/hermes-agent/issues/92774) | 110 days | Open, 2 comments | Hardcoded system prompt caps block large-context plugins |
| [#149812](https://github.com/nousresearch/hermes-agent/issues/149812) | 15 days | Open, 1 comment | Android beta terminal fails over SSH (critical for mobile users) |
| [#158040](https://github.com/nousresearch/hermes-agent/issues/158040) | 1 day | Open, 1 comment | Docs contradict themselves on hook injection order |

> 🔍 **Maintenance Alert:** Several high-traffic issues (especially #143547 and #131859) have been open for weeks despite significant community feedback—suggesting possible resource constraints or architectural complexity.

--- 

✅ **Project Health Assessment:**  
**High activity, strong momentum, solid release cadence, but increasing pressure on stability and cross-platform consistency.** Prioritize fixing foundational issues (#143547, #131859) and improve documentation clarity (e.g., hooks.md) to reduce friction. Maintain current pace for v0.24.0.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-20**

---

### **1. Today's Overview**  
QwenPaw exhibits strong community engagement with 21 new issues and 39 pull requests updated in the past 24 hours, reflecting active development and user-driven feedback. No new releases were published, indicating that the current `v2.3.0.post1` version remains stable but under active refinement. The project is experiencing a surge in UI/UX-related bug reports and feature enhancements, particularly around mobile responsiveness, message rendering, and session lifecycle management. While core functionality remains robust, several critical stability and usability issues—especially on Windows and mobile—are emerging as focal points for the dev team.

---

### **2. Releases**  
❌ **No new releases** detected.  
The last release was `v2.3.0.post1` (2026-11-17), which introduced fixes for mobile safe-area rendering and narrow-screen message clipping. Users are still reporting regressions from this version, suggesting that post-release validation may be incomplete or ongoing.

> 🔗 [GitHub Release History](https://github.com/agentscope-ai/QwenPaw/releases)

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today)**: 12  
These primarily address UI/UX consistency, mobile layout bugs, and session lifecycle stability:

- **[PR #8829]** Fix: Only show unread completions in tab favicon — improves notification clarity without visual clutter.
- **[PR #8824]** Fix: Reserve top and side safe-area insets in full-screen containers — resolves mobile UI overlay issue (#8796).
- **[PR #8823]** Fix: Keep wide tables and code blocks scrollable in bubbles — directly addresses #8811 (narrow screen clipping).
- **[PR #8766]** Fix: Prevent adjacent conversation backgrounds from overlapping — enhances sidebar readability.
- **[PR #8822]** Docs update for v2.3.0 — ensures documentation aligns with recent changes.
- **[PR #8785]** Fix: Enforce inline media budget and rescale after refusal — improves image handling consistency.
- **[PR #8784]** Fix: Keep rollback backups until every workspace restored — strengthens multi-workspace recovery safety.

These merged PRs signal a focus on **user experience polish**, **cross-device compatibility**, and **robust state management**.

---

### **4. Community Hot Topics**  
🔥 **Top 3 Most Active Issues/PRs by Engagement**:

| Issue/PR | Type | Comments | Link |
|--------|------|----------|------|
| [#8811] [Bug]: Narrow screen text clipped + no horizontal scroll | Bug | 4 | [Issue #8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) |
| [#8817] [Enhancement]: UI/UX overhaul request | Feature | 1 | [Issue #8817](https://github.com/agentscope-ai/QwenPaw/issues/8817) |
| [#8823] [Fix]: Scrollable wide content in message bubbles | PR | N/A | [PR #8823](https://github.com/agentscope-ai/QwenPaw/pull/8823) |

🔍 **Underlying Needs**:  
- **Mobile-first design failure**: Multiple users report that UI elements are cut off or overlapped on small screens (e.g., 375px width), indicating poor responsive design.  
- **UI/UX degradation**: A recurring theme in multiple issues (e.g., #8817, #8796, #8811) reveals widespread dissatisfaction with inconsistent styling, component misalignment, and lack of visual cohesion.  
- **Functional expectations vs. reality**: Users expect features like stream output (QQ, Feishu), system notifications, and clean deletion workflows — but current implementation falls short.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported Today** (Ranked by Severity):

| Issue | Severity | Description | Fix PR? | Link |
|------|----------|-------------|---------|------|
| [#8830] Windows: orphaned `llama-server.exe` processes accumulate | High | Memory exhaustion risk; prevents local model startup after restarts | ❌ No fix yet | [Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) |
| [#8811] Message text clipped on narrow screens; no horizontal scroll | Medium-High | Breaks usability on desktop/mobile; affects all long content (tables/code) | ✅ Partial fix in PR #8823 | [Issue #8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) |
| [#8815] Scheduled tasks show no messages until completion | Medium | Impairs visibility of long-running tasks; leads to user confusion | ❌ No fix yet | [Issue #8815](https://github.com/agentscope-ai/QwenPaw/issues/8815) |
| [#8579] Disabling provider leaves stale model config | Medium | Causes runtime errors on channel dispatch; breaks workflow reliability | ❌ No fix yet | [Issue #8579](https://github.com/agentscope-ai/QwenPaw/issues/8579) |

📌 **Note**: The `llama-server.exe` memory leak is particularly concerning due to its potential for system instability on Windows systems.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **High-Priority User-Requested Features**:

| Request | Use Case | Expected Impact | Likely Roadmap Inclusion |
|--------|----------|------------------|---------------------------|
| [Feature #8821] Windows system notification on task completion | Background task monitoring | Reduces user attention overhead | ✅ Likely for v2.4 |
| [Feature #8827] Telegram forum topic isolation | Multi-topic agent sessions | Enables structured collaboration | ⚠️ Possible in v2.4 |
| [Feature #8826] Add Rapid-MLX local OpenAI-compatible preset | Apple Silicon optimization | Targets growing M-series user base | ✅ High priority |
| [Feature #8816] Recoverable chat deletion + scoped retention | Data hygiene & privacy | Addresses major UX pain point | ✅ Strong candidate for v2.4 |
| [Feature #8817] Full UI/UX redesign | General usability | Could redefine QwenPaw’s perception | 🟡 Long-term effort |

💡 **Roadmap Signal**: The repeated demand for **clean data lifecycle management**, **better mobile support**, and **system-level integration** (notifications, background execution) suggests QwenPaw is transitioning from a prototype-grade tool toward a production-ready AI assistant platform.

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points**:
- **"UI is chaotic":** Multiple users describe the interface as "disaster-level," citing inconsistent components, poor alignment, and mismatched styles (#8817).
- **"I can’t see my results":** Long-running tasks appear frozen, especially scheduled ones (#8815), leading to uncertainty and frustration.
- **"My settings break silently":** Disabling a provider doesn’t update agent configs, causing silent failures (#8579).
- **"My computer crashes":** Orphaned `llama-server.exe` processes consume memory, preventing local model use (#8830).
- **"I need to clean up, but can’t":** No unified cleanup tool exists despite massive storage bloat (#6593).

🎯 **Satisfaction Level**: Mixed. While advanced users appreciate the extensibility and plugin ecosystem, **new and intermediate users report high friction** due to UI inconsistencies and hidden technical debt.

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered Critical Issues Needing Maintainer Attention**:

| Issue | Status | Age | Priority | Link |
|------|--------|-----|----------|------|
| [#6952] Prefix cache instability due to unsorted tool schemas | Open | 110 days | High | [Issue #6952](https://github.com/agentscope-ai/QwenPaw/issues/6952) |
| [#8817] Comprehensive UI/UX overhaul | Open | 1 day | Critical | [Issue #8817](https://github.com/agentscope-ai/QwenPaw/issues/8817) |
| [#8816] Chat storage lifecycle: recoverable deletion & retention | Open | 1 day | High | [Issue #8816](https://github.com/agentscope-ai/QwenPaw/issues/8816) |
| [#8827] Isolate agent sessions by Telegram forum topic | Open | 1 day | Medium-High | [Issue #8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) |
| [#8700] DoomLoopGate never triggers with accumulated replies | Closed (but unresolved) | 8 days | High | [Issue #8700](https://github.com/agentscope-ai/QwenPaw/issues/8700) |

📌 **Action Required**: The dev team should prioritize **UI/UX modernization (#8817)** and **storage lifecycle (#8816)** as foundational upgrades before introducing more complex features. These are systemic issues affecting adoption and retention.

---

### ✅ **Final Assessment**  
QwenPaw is in a **high-growth, high-friction phase** — technically capable but hampered by UX inconsistency, mobile fragility, and backend stability issues. With 39 PRs and 21 issues in 24 hours, the project is **alive and evolving**, but needs strategic triage to avoid burnout. Prioritizing **UI/UX coherence**, **mobile responsiveness**, and **data lifecycle control** will be key to unlocking broader adoption beyond early adopters.

> 🔗 **Project Dashboard**: [GitHub - agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-20**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a surge in developer engagement: **50 open pull requests** and **12 new or updated issues** within the last 24 hours. The ecosystem is experiencing intense focus on security, configuration robustness, and user experience improvements—particularly around identity access, cost control, and cross-channel tooling. No new releases have been published, indicating that the team is prioritizing internal stability and feature refinement ahead of a potential v0.9.1 release. High-priority bugs related to runtime behavior, model routing, and session handling are receiving urgent attention.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-11-20.  
- The `release:v0.9.1` label appears on several high-severity issues (e.g., #11580, #12476), suggesting this version may be imminent but not yet deployed.
- Pending release gates include binary size compliance (x86_64 Linux binary at 0.7 MB under 64 MiB cap) and resolution of critical security-related PRs.

> 🔗 [Release Gate Tracker: Issue #11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)

---

### **3. Project Progress**  
✅ **Merged/Closed PRs**: None today.  
✅ **Key PRs in progress (high impact)**:
- **#12450** (`feat(providers): adopt canonical V5 registry`) — Core infrastructure update enabling exact model referencing across CLI, WebUI, and Zerocode. *Depends on #12453*.
- **#12453** (`feat(web): edit canonical registry`) — Enables fine-grained model selection and registry editing via Web dashboard.
- **#10391** (`fix(delegate): keep bounded delegate state beyond turn`) — Critical fix for delegation stability; currently in review with dependency chain.
- **#12596** (`feat(browser): scope username/password and TOTP access independently`) — Advanced browser access controls, pending RFC #12422 approval.

> 🔗 [PR #12450 - Providers V5 Registry Adoption](https://github.com/zeroclaw-labs/zeroclaw/pull/12450)  
> 🔗 [PR #12596 - Browser Access Granularity](https://github.com/zeroclaw-labs/zeroclaw/pull/12596)

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues & PRs (by comments, urgency, and risk)**:

| Issue/PR | Topic | Comments | Risk Level | Link |
|--------|------|---------|------------|------|
| **#12597** ([Bug]: Telegram voice message failure blocks channel) | Workflow blocker | 0 | S1 | [GitHub #12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) |
| **#12570** ([Bug]: Daemon hangs on millions of leaked log files) | System crash risk | 0 | S1 | [GitHub #12570](https://github.com/zeroclaw-labs/zeroclaw/issues/12570) |
| **#12568** ([Bug]: Dashboard cost bars always full) | UX/UI degradation | 1 | S3 | [GitHub #12568](https://github.com/zeroclaw-labs/zeroclaw/issues/12568) |
| **#12422** ([RFC]: Scoped use of operator-managed service credentials) | Security architecture | 3 | High | [GitHub #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) |
| **#12592** ([Feat]: Telegram trusted_groups auth) | Channel security | 0 | High | [GitHub #12592](https://github.com/zeroclaw-labs/zeroclaw/pull/12592) |

🔍 **Underlying Needs**:
- **Security-first design** is central: users demand credential isolation (RFC #12422), secure browser access (PR #12596), and strict group authorization (PR #12592).
- **Reliability under edge cases**: Voice message failures (#12597), log file bloat (#12570), and model routing misbehavior (#11296) indicate a growing need for resilient error handling and resource cleanup.
- **User experience parity**: Discord/Matric lack Telegram-style approvals (#12557); dashboard visuals are misleading (#12568).

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (S1–S2 Severity)**:

| Issue | Severity | Description | Fix Status |
|------|----------|-------------|-----------|
| [#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) | S1 | Telegram voice transcription failure causes infinite retry loop → channel stalls | ❌ No fix PR |
| [#12570](https://github.com/zeroclaw-labs/zeroclaw/issues/12570) | S1 | Daemon crashes on startup due to leaked `.tmp` log files | ❌ No fix PR |
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | S2 | Runtime profile cost limit ignores global daily budget ($10 cap still enforced) | ⚠️ In-progress (PR #9345 relates to risk recalculations) |
| [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | S2 | Gateway logs every connection at INFO level → trace flooding | ✅ Fixed in PR #12476 (closed) |
| [#12569](https://github.com/zeroclaw-labs/zeroclaw/issues/12569) | S2 | Plugin installed but fails to load due to name collision with built-in tools | ❌ No fix PR |

> 🛠️ **Note**: While #12476 has been closed, its fix was merged into a branch without public visibility. The issue remains relevant for logging hygiene.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Features Likely in v0.9.1 or v1.0**:

| Feature | Origin | Rationale |
|-------|--------|---------|
| **Scoped service credentials (RFC #12422)** | User-driven security need | Direct response to trust boundaries in agent operations; likely to be a core v0.9.1+ feature |
| **Independent browser access grants (username/pass vs TOTP)** | PR #12596 | Follow-up to RFC; enables granular control over sensitive web actions |
| **Enhanced approval UX (Discord/Matric emoji reactions)** | Issue #12557 | Addresses Telegram’s superior UX gap; indicates user preference for low-friction interfaces |
| **Canonical V5 model registry + exact reference support** | PRs #12450, #12453 | Infrastructure overhaul; expected to be foundational for future tooling |
| **OIDC refresh token persistence (ADR-017)** | PR #12496 | Enables device-session continuity — key for enterprise adoption |

> 💡 **Prediction**: The next major release will emphasize **security hardening**, **cross-channel parity**, and **model/config precision**, driven by both technical debt and user feedback.

---

### **7. User Feedback Summary**  
💬 **Real Pain Points Expressed by Users**:
- **"Telegram stops working after a failed voice message"** (#12597): A workflow-blocking bug reported directly from production use.
- **"I can’t see actual cost usage in the dashboard"** (#12568): Users perceive cost tracking as unreliable due to misleading visual scaling.
- **"My custom provider URL isn't respected"** (#11296): Confusion and frustration when deploying local llama.cpp instances.
- **"Plugins appear loaded but don’t work"** (#12569): Frustration with silent failures during setup.
- **"Browser access feels too broad"** (#12596): Users want more granular control over login steps.

✅ **Positive Sentiment Indicators**:
- High engagement in RFC discussions (e.g., #12422) suggests strong community investment.
- Many PRs include detailed justification and test coverage, indicating mature contributor culture.

---

### **8. Backlog Watch**  
📌 **Long-Unanswered or Stalled Items Needing Maintainer Attention**:

| Issue/PR | Age | Status | Risk | Action Needed |
|--------|-----|--------|------|---------------|
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | 2 months | Open, accepted | High | Fix model URI routing in custom providers |
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | 4 months | In-progress, accepted | High | Recalculate PR labels automatically |
| [#12217](https://github.com/zeroclaw-labs/zeroclaw/issues/12217) | 1 week | Closed | Low | Documentation update needed |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | 6 days | Accepted, needs maintainer review | High | RFC for scoped credentials — delayed |
| [#12557](https://github.com/zeroclaw-labs/zeroclaw/issues/12557) | 2 days | Open | Medium | UX improvement request |

> ⚠️ **Critical Gap**: Despite high-risk issues being accepted, **maintainer triage is slow** — many PRs remain unreviewed despite high comment volume and dependency chains (e.g., #12450 depends on #12453). This may delay v0.9.1 rollout.

---

### ✅ **Overall Project Health Assessment**  
🟢 **Strengths**:  
- High contributor velocity (50 open PRs in 24h).  
- Strong focus on security, configuration correctness, and UX polish.  
- Mature RFC and issue labeling system shows disciplined development process.

🟡 **Risks**:  
- Several **S1 bugs** (workflow blocking) remain unresolved.  
- **Maintainer bottleneck** evident in stalled reviews despite community activity.  
- Release readiness unclear despite v0.9.1 tagging.

🔴 **Recommendation**: Prioritize **bug triage and release gating** (especially #12597, #12570, #11296) to prevent user churn. Accelerate review of **RFC #12422** and **PR #12450** to unlock next-gen model routing.

---  
📅 **Digest Generated**: 2026-11-20  
📊 **Data Source**: GitHub — zeroclaw-labs/zeroclaw (public repo)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*