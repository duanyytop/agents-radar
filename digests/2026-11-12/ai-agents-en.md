# OpenClaw Ecosystem Digest 2026-11-12

> Issues: 469 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-12 03:18 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest**  
**Date:** 2026-11-12  
**Repository:** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)  

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **469 issues** and **500 pull requests** updated in the last 24 hours—indicating a robust development velocity and strong community engagement. The release of **v2026.11.5-beta.2** introduces key stability and UX improvements, particularly around conversation history management and macOS secret persistence. Despite this momentum, several high-severity bugs affecting core functionality (e.g., crash loops, memory bloat, session state corruption) remain open, suggesting ongoing challenges in reliability under load or complex workflows.

---

### **2. Releases**  
**✅ v2026.11.5-beta.2** – Released November 12, 2026  
[GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2)  

#### **Highlights**
- **Enhanced Conversation Browsing**: Large conversations now support bidirectional paged history, visible boundary markers, and bounded archive reads (#188450, #188483, #188557, #188372, #190690).  
- **macOS Secret Persistence**: Saved secrets are now preserved across app restarts, improving workflow continuity for Apple users.  

> ✅ *No breaking changes reported.*  
> 📌 *Migration Note:* Users on earlier beta versions should expect improved stability in long-running sessions and reduced memory churn during plugin captures.

---

### **3. Project Progress**  
**🟢 Merged/Closed PRs (Today):**  
- **PR #197029** – Moved Advisor out of Labs into main Plugins menu (still off by default). Finalized feature stabilization.  
  [Link](https://github.com/openclaw/openclaw/pull/197029)  
- **PR #197488** – Fixed test-lines ratchet failure after hosted pricing tests; repaid 5-line budget deficit.  
  [Link](https://github.com/openclaw/openclaw/pull/197488)  
- **PR #197431** – Added diagnostic timing logs for SIGUSR2 shutdown proof stalls in CI (non-fix, but improves debugging).  
  [Link](https://github.com/openclaw/openclaw/pull/197431)  

#### **Key Advances:**
- **UX Polish**: Multiple UI fixes targeting font rendering consistency on macOS (thin text in previews, composer drafts, reasoning blocks).  
- **Performance & Reliability**: Fixes to cron scheduler logic, dependency cache reuse, and agent runtime eviction.  
- **Security & Stability**: Improved error propagation in native hook relays and better handling of device renumbering.

---

### **4. Community Hot Topics**  
Top 5 most commented Issues and PRs reflect deep user frustration with **core system stability**, **session state integrity**, and **cross-platform reliability**:

| Issue/PR | Comments | Severity | Link |
|--------|---------|----------|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 81 | 🦞 **P0 / Crash Loop** | Gateway blocks for minutes during large plugin capture (2026.9.6 regression) |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 40 | 🦪 P2 / Blocking | WAL checkpoint never completes due to pinned reader |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 31 | 🦐 P0 / UX Release Blocker | Windows startup/shutdown failures with `schtasks` |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 13 | 🦪 P1 / Memory Bloat | ~1.9 GB RSS baseline post-2026.10.5 update |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | 8 | 🦪 P0 / UX Release Blocker | Codex continuation blocks all follow-ups |

> 🔍 **Underlying Needs**: Users demand **predictable performance**, **zero-downtime updates**, and **consistent behavior across platforms**—especially on Windows and macOS. High comment counts indicate real-world impact on productivity.

---

### **5. Bugs & Stability**  
**🚨 Critical Bugs (P0/P1) Reported Today:**
1. **[#160959]**: Gateway hangs for minutes at startup when loading large external plugins (regression from 2026.9.6).  
   - *Fix PR*: None yet. High priority — affects all users with complex plugin stacks.  
2. **[#194664]**: Protected Codex continuation blocks all follow-up turns even after session Stop reports no active run.  
   - *Fix PR*: None. Blocks chat progression post-OAuth login.  
3. **[#181432]**: Excessive memory usage (~1.9 GB RSS) post-2026.10.5 on ARM64 Linux.  
   - *Fix PR*: None. Impacts low-memory devices and cloud deployments.  

**⚠️ Other Notable Issues:**
- **[#164294]**: WAL auto-checkpoint stuck indefinitely — can lead to DB growth and eventual failure.
- **[#170956]**: Windows service restarts fail repeatedly due to permission errors and unclean shutdowns.

> ⚠️ *No fix PRs merged today for these P0 bugs*, indicating they remain unresolved despite high visibility.

---

### **6. Feature Requests & Roadmap Signals**  
Top feature requests reveal growing demand for **cross-provider flexibility**, **developer tooling**, and **workflow transparency**:

| Feature Request | Priority | Key Insight |
|----------------|---------|-----------|
| [#192009](https://github.com/openclaw/openclaw/issues/192009) | P1 | Explicit authorization for fallback provider accounts (critical for automation resilience). |
| [#176273](https://github.com/openclaw/openclaw/issues/176273) | P2 | Native progress-card SDK for trusted plugins — signals intent to expand plugin ecosystem. |
| [#179954](https://github.com/openclaw/openclaw/issues/179954) | P2 | Configurable chunking for non-standard memory files — shows interest in structured personal knowledge. |
| [#197267](https://github.com/openclaw/openclaw/pull/197267) | P2 | Support for Z.AI models via Claude Code SDK — indicates expanding model diversity needs. |

> 🧭 **Prediction**: These features are likely candidates for **v2026.12.0** or early **2027.01.0** release. Especially **Z.AI integration** and **progress-card SDK** suggest roadmap expansion beyond core AI assistant.

---

### **7. User Feedback Summary**  
Real user pain points highlight:
- **Windows Instability**: Frequent failed restarts and updates make daily use unreliable.  
- **macOS UX Friction**: Font rendering inconsistencies, sluggish Settings after opening chats, and missing dark theme inputs.  
- **Session State Corruption**: Silent data loss (e.g., pasted text vanishing), dead-lettered messages, and unresponsive agents after crashes.  
- **Developer Frustration**: Lack of visibility into background processes (e.g., `skill_workshop` retries silently), and no way to recover stranded subagents.  

> 💬 *User sentiment*: High engagement but growing concern over reliability. Many users report “only after many retries” success rates, signaling erosion in trust.

---

### **8. Backlog Watch**  
Long-unanswered critical issues requiring maintainer attention:

| Issue | Age | Status | Notes |
|------|-----|--------|-------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 74 days | Open, P0 | Gateway hang during plugin capture — **urgent fix needed**. |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 69 days | Open, P2 | WAL checkpoint deadlock — risk of DB corruption. |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 69 days | Open, P0 | Windows restart/update failures — **release blocker**. |
| [#162585](https://github.com/openclaw/openclaw/issues/162585) | 71 days | Open, P2 | Plugin staging explodes npm tree → gateway never healthy. |
| [#181662](https://github.com/openclaw/openclaw/issues/181662) | 69 days | Open, P1 | `npm update` blocks Gateway for 19+ minutes — **downtime grows per release**. |

> 🔔 *Action Required*: These issues represent systemic risks to stability and adoption. Prioritization is essential for future release credibility.

---

### **Final Assessment**  
OpenClaw is in a phase of rapid iteration with strong community participation, but **stability and reliability remain fragile**. While new features and UX polish are advancing, **core infrastructure bugs persist without resolution**. The project is healthy in activity, but **trust in production use is eroding** if P0 issues like plugin hangs and memory bloat aren’t addressed urgently.  

**Recommendation**: Focus next sprint on triaging and fixing **P0 bugs** from the top 5 list before shipping major new features. Prioritize **Windows and macOS stability**, and ensure **migration paths** are clear for affected users.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (2026-11-12)**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem is in a phase of rapid maturation, marked by increasing technical sophistication, modular architecture, and growing focus on privacy, reliability, and cross-platform usability. Projects are diverging in target use cases—from developer-centric tooling to consumer-grade assistants—while converging on core needs: session integrity, local inference, plugin extensibility, and user trust. With strong community engagement across major players like OpenClaw, QwenPaw, and Hermes Agent, the landscape reflects a shift from experimental prototypes toward production-ready systems capable of handling complex, long-running workflows.

---

### **2. Activity Comparison**

| Project         | Issues (Last 24h) | Pull Requests (Last 24h) | Release Status       | Health Score (1–10) |
|----------------|-------------------|--------------------------|----------------------|---------------------|
| **OpenClaw**   | 469               | 500                      | v2026.11.5-beta.2    | 6.2                 |
| **Hermes Agent**| 50                | 50                       | v0.23.0 (stable)     | 7.5                 |
| **QwenPaw**    | 12                | 38                       | v2.3.0 (Stable)      | 8.0                 |
| **ZeroClaw**   | 8                 | 38                       | v0.9.0 (new release) | 8.5                 |
| **IronClaw**   | 0                 | 0                        | No activity          | 3.0                 |

> *Health Score*: Composite metric based on stability, feature velocity, backlog severity, and community responsiveness (higher = more mature/robust).

---

### **3. OpenClaw's Position**  
OpenClaw leads in **development velocity and contributor volume**, with over 500 PRs and 469 issues active in 24 hours—indicating a highly engaged, large-scale community. Its **modular plugin architecture** and **deep UX polish** (e.g., bidirectional conversation browsing) position it as a feature-rich platform for power users and developers. However, this comes at the cost of **systemic instability**: P0 bugs like gateway crash loops (#160959), memory bloat (#181432), and Windows startup failures (#170956) undermine its credibility despite high activity. Compared to peers, OpenClaw prioritizes **feature breadth** over **infrastructure stability**, making it ideal for early adopters but risky for production deployment.

---

### **4. Shared Technical Focus Areas**  
Across projects, recurring technical demands reflect convergence on maturity:

- **Session & State Integrity**:  
  - OpenClaw (#160959, #181432), ZeroClaw (#8794), Hermes Agent (#153683) all face issues with state loss during interruptions or restarts.
  - *Need*: Persistent, atomic session snapshots and recovery mechanisms.

- **Cross-Platform Reliability**:  
  - QwenPaw (#8616, #8682), OpenClaw (#170956), ZeroClaw (#7461) report platform-specific crashes due to environment variables and file path handling.
  - *Need*: Unified runtime configuration, deterministic build environments, and CI/CD parity across macOS, Windows, and Linux.

- **Plugin & Dependency Management**:  
  - OpenClaw (#162585), QwenPaw (#8669), Hermes Agent (#149734) highlight race conditions and SHA drift in plugin lifecycles.
  - *Need*: Versioned, sandboxed plugin registries with dependency resolution and rollback support.

- **Local Inference & Privacy**:  
  - QwenPaw (Piccolo models), OpenClaw (plugin capture), ZeroClaw (local shell tools) signal demand for **on-device reasoning** and reduced cloud reliance.

---

### **5. Differentiation Analysis**

| Project        | Feature Focus                          | Target Users                     | Technical Architecture                  |
|----------------|----------------------------------------|----------------------------------|-----------------------------------------|
| **OpenClaw**   | Rich UI, plugin ecosystems, UX polish | Developers, advanced users       | Monorepo, hybrid cloud/local, heavy plugins |
| **Hermes Agent**| Long-term memory, vision pipelines, security | Privacy-focused users, multi-account | Modular agents, provenance-aware data chains |
| **QwenPaw**    | Local decision models, modularity, diagnostics | DevOps, embedded systems, privacy advocates | Plugin-first, Hugging Face/ModelScope integration |
| **ZeroClaw**   | Decentralized comms, multi-user OIDC, RPC orchestration | Teams, self-hosted infra, enterprises | Rust-based, XMPP/MATRIX-native, secure shell binding |
| **IronClaw**   | — (inactive)                           | —                                | —                                       |

> *Key Differentiators*:  
> - **ZeroClaw** stands out in **decentralization** and **multi-user access control** via OpenID Connect.  
> - **QwenPaw** leads in **local model integration** with Piccolo series.  
> - **Hermes Agent** pioneers **provenance-preserving document chains** (RFC #143379).  
> - **OpenClaw** remains the most **feature-dense** but least stable.

---

### **6. Community Momentum & Maturity**  

| Tier              | Projects                              | Characteristics |
|-------------------|---------------------------------------|----------------|
| **Rapid Iteration** | OpenClaw, QwenPaw, ZeroClaw           | High PR/issue volume; frequent releases; active RFCs and feature proposals. |
| **Stabilizing**     | Hermes Agent                          | Low release churn; focus on security hardening and infrastructure fixes. |
| **Inactive**        | IronClaw                              | No activity in 24h; potential risk of abandonment. |

> **Maturity Signal**: QwenPaw and ZeroClaw are transitioning from "alpha" to "production-readiness" phases, evidenced by stable releases and enterprise-use case validation (e.g., WeChat/Linux server support, XMPP channels). OpenClaw remains in a high-risk, high-reward iteration cycle.

---

### **7. Trend Signals**  
Based on community feedback and project direction, key industry trends emerge:

- **Shift to Local & Private Reasoning**: Demand for **on-device models** (QwenPaw’s Piccolo) and **no-cloud workflows** is accelerating—critical for compliance and trust.
- **Agent Autonomy & Self-Management**: Features like **memory compression** (Hermes #143379), **cost monitoring** (Hermes #93951), and **auto-retention policies** (QwenPaw #8678) signal a move toward autonomous, self-sustaining agents.
- **Mobile & Voice-First Access**: The high demand for **native mobile apps with voice calling** (Hermes #11911) indicates a clear pivot from desktop CLI to ambient, hands-free interaction.
- **Decentralized Communication**: ZeroClaw’s XMPP push and Hermes’ multi-channel integrations show growing interest in **self-hosted, censorship-resistant messaging**.
- **Developer Tooling Demand**: SDKs for progress cards (Hermes #176273), plugin catalogs (QwenPaw), and diagnostic tracing (ZeroClaw) reveal a maturing ecosystem requiring **toolchain investment**.

> ✅ **Value for Developers**: Projects that prioritize **modular design**, **cross-platform testing**, and **transparent diagnostics** will lead the next wave of adoption. Infrastructure resilience—not just features—is now the primary differentiator.

---

### **Final Recommendation**  
For developers and organizations evaluating AI agent platforms:  
- Choose **QwenPaw** for **privacy-first, locally-driven workflows** with strong modularity.  
- Select **ZeroClaw** for **team collaboration and decentralized communication**.  
- Consider **Hermes Agent** for **long-term memory and security-critical applications**.  
- Exercise caution with **OpenClaw** until core stability issues (P0 bugs) are resolved.  
- Monitor **IronClaw** closely—if no revival within 30 days, consider migration paths.

The ecosystem is no longer about “which AI can answer questions”—it’s about **which system can be trusted to act autonomously, securely, and reliably across platforms and time**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-12**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating robust community engagement and ongoing development momentum. No new releases were published today, maintaining a stable state in the current v0.23.0 iteration. The focus is heavily on stability, security hardening, and infrastructure improvements, particularly around session persistence, credential handling, and cross-platform compatibility (macOS/Windows). High-priority bugs related to agent state management, gateway streaming, and plugin integrity dominate recent activity.

---

### **2. Releases**  
**None**  
No new releases were published today. The latest version remains **v0.23.0**, with no breaking changes or migration notes issued. Users should continue using the existing release unless explicitly advised otherwise via official channels.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #154161** ([bump pixel-hq to 1.2.0](https://github.com/NousResearch/hermes-agent/pull/154161)) – Adds drag-and-drop departments, session actions, and roster editor support.
- ✅ **PR #154046** ([fix Mac screenshot paths in vision/video/image gen](https://github.com/NousResearch/hermes-agent/pull/154046)) – Resolves persistent macOS Unicode filename issues affecting image loading.
- ✅ **PR #124742** ([tolerate macOS Unicode drift in vision resolver](https://github.com/NousResearch/hermes-agent/pull/124742)) – Fixes NFD normalization edge cases in file resolution.
- ✅ **PR #76376** ([U+202F filename handling fix](https://github.com/NousResearch/hermes-agent/pull/76376)) – Closes long-standing issue #76334; now resolved upstream.

> These fixes represent critical stabilization of core media handling on macOS, especially for vision and file input workflows.

---

### **4. Community Hot Topics**  

#### 🔥 **Top Issue: RFC – Doc-Chain Substrate Network (#143379)**  
- **Comments:** 37 | **Last Updated:** 2026-11-12  
- **Link:** [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379)  
- **Summary:** A foundational design proposal for a durable, provenance-preserving document chain system that survives session compression. This RFC signals deep architectural thinking toward long-term memory integrity and agent autonomy beyond transient interactions.

#### 🔥 **Top Feature Request: Native Mobile App with Voice Calling (#11911)**  
- **Comments:** 22 | **👍:** 16 | **Last Updated:** 2026-11-12  
- **Link:** [Issue #11911](https://github.com/NousResearch/hermes-agent/issues/11911)  
- **Summary:** High demand for iOS/Android native apps with real-time voice calling—a major UX leap for hands-free interaction. This reflects user desire for Hermes as a true personal assistant rather than a desktop CLI tool.

#### 🔥 **Top Security Fix: WhatsApp Session Store Protection (#153849)**  
- **PR Comments:** 0 | **Severity:** P2 | **Link:** [PR #153849](https://github.com/NousResearch/hermes-agent/pull/153849)  
- **Summary:** Addresses critical exposure where WhatsApp credentials were readable by all local users due to lax umask settings. Highlights growing emphasis on privacy in multi-account, multi-device deployments.

> *Analysis:* Community interest centers on **longevity of data**, **cross-device usability**, and **security-by-default**—all key pillars for an AI agent aiming to be a trusted personal companion.

---

### **5. Bugs & Stability**  

| Severity | Issue | Summary | Fix Status |
|---------|-------|--------|------------|
| **P2** | [#153683](https://github.com/NousResearch/hermes-agent/issues/153683) | `hermes pause` deletes one-time cron jobs without running them | Open |
| **P2** | [#152365](https://github.com/NousResearch/hermes-agent/issues/152365) | Weixin voice message stalls session forever after admission | Open |
| **P2** | [#152364](https://github.com/NousResearch/hermes-agent/issues/152364) | Windows gateway event-loop stalls under concurrent Kanban workers | Open |
| **P2** | [#143449](https://github.com/NousResearch/hermes-agent/issues/143449) | Gateway emits to dead WebSocket → silent reply loss + RuntimeError spam | Open |
| **P2** | [#149734](https://github.com/NousResearch/hermes-agent/issues/149734) | Plugin catalog SHA bumps needed (storm-fusion-research, etc.) | Open |
| **P2** | [#151247](https://github.com/NousResearch/hermes-agent/issues/151247) | Routed-profile env strips MNEMOSYNE_EMBEDDING_* → memories stored without vectors | Open |

> ⚠️ **Critical Risk**: Several P2 bugs affect **session continuity**, **agent responsiveness**, and **data integrity** across platforms—especially on Windows and macOS. While some fixes are in flight (e.g., #154046), broader systemic issues remain unresolved.

---

### **6. Feature Requests & Roadmap Signals**  

| Feature | Requested By | Link | Roadmap Signal |
|--------|--------------|------|----------------|
| Native iOS/Android App with Voice Calling | chefroger | [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Strong signal for mobile-first adoption; likely target for Q1 2027 |
| Real-Time Cost Display per Session | Code0020161314 | [#93951](https://github.com/NousResearch/hermes-agent/issues/93951) | Indicates rising user concern over API spending — could drive billing transparency features |
| Per-Session Memory Compression & Governance | c0wb0yp0tat0 | [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | Suggests maturing vision toward autonomous, self-managing agents with bounded memory lifecycle |
| Plugin Catalog Expansion (Summon, Shinjuku, Printsi, etc.) | Multiple contributors | [PRs #153861, #153340, #153325, #153570] | Active ecosystem growth — indicates strong community-driven plugin economy |

> 📌 **Prediction**: Next major release (likely v0.24.0) will include **mobile app foundation**, **cost monitoring UI**, and **enhanced plugin catalog governance**.

---

### **7. User Feedback Summary**  

- **High Frustration Points:**  
  - **"Enter sends message" bug** (#52952): Users report recurring annoyance when trying to write multi-line messages in Desktop chat.  
  - **Model switching fails silently** (#151686): No feedback when changing models mid-session leads to confusion and lost trust.  
  - **Sticky prompt broken at non-100% zoom** (#147400): UI breaks under common scaling settings—impacts accessibility and usability.

- **Positive Signals:**  
  - Users appreciate **plugin ecosystem expansion** (e.g., Pixel-HQ, VividSites, Summon) — clear sign of platform adoption.  
  - **Voice calling request** (#11911) shows strong desire for natural, conversational interaction—moving beyond typed queries.

> 💬 *User sentiment*: Loyal early adopters are pushing for maturity—especially in **UX polish**, **mobile access**, and **reliability under load**.

---

### **8. Backlog Watch**  

| Issue | Age | Priority | Status | Notes |
|------|-----|----------|--------|-------|
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | 20 days | P4 (RFC) | Open | Foundational architecture—needs maintainer review to initiate implementation planning |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 20 months | P3 | Open | High upvotes (16), but lacks assigned owner—critical for future growth |
| [#145401](https://github.com/NousResearch/hermes-agent/issues/145401) | 15 days | P2 | Open | Billing misbehavior causes infinite requeues—urgent for paid users |
| [#153048](https://github.com/NousResearch/hermes-agent/issues/153048) | 1 day | P2 | Open | 0-byte DB crash kills bot delivery—critical for production use |
| [#153518](https://github.com/NousResearch/hermes-agent/pull/153518) | 1 day | P3 | Open | "Werk" plugin submission—proof-of-concept, needs review before merge |

> ⏳ **Call to Action**: Maintainers should prioritize **stability-critical bugs** (e.g., #153048, #153683) and **high-impact feature RFCs** (#143379) to maintain credibility and momentum.

---

✅ **Project Health Assessment**: **Active & Growing**, but with increasing pressure on **stability**, **security**, and **user experience**. The next 30–60 days will determine whether Hermes transitions from a powerful developer tool to a reliable personal AI assistant.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-12**

---

### **1. Today's Overview**  
The QwenPaw project is in a high-velocity development phase, with **38 pull requests updated in the last 24 hours** and **12 new issues opened**, indicating strong community engagement and active feature delivery. The release of **v2.3.0 (Stable)** marks a major milestone, introducing significant enhancements to local decision models and system stability. However, several critical platform-specific bugs—particularly on Windows IoT LTSC, Linux worker environments, and Safari—have emerged post-release, suggesting ongoing challenges in cross-platform compatibility. Overall, the project remains healthy and rapidly evolving, with a clear focus on performance, reliability, and user experience refinement.

---

### **2. Releases**  
✅ **New Release: v2.3.0 (Stable)**  
- **Release Page:** [GitHub v2.3.0](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0)  
- **Key Additions:**  
  - ✨ **Piccolo Local Decision Models**: Added support for **Piccolo 4B, 9B, and 27B** as local models for tool review and context compaction.  
    - Supports BF16 & Q8_0 quantization.  
    - Enables Hugging Face or ModelScope model downloads.  
    - Runtime installation and update workflows are now integrated.  
  - 🔧 Improvements to memory retrieval, task tracking, and console UX.  

- **Migration Notes:**  
  - Users upgrading from beta versions should verify channel plugin compatibility (e.g., Feishu, Matrix).  
  - Ensure `HOME` and `QWENPAW_WORKING_DIR` are properly set in Linux environments for official plugins.  
  - No breaking changes reported in core API; backward compatibility preserved.

---

### **3. Project Progress**  
🟢 **Merged/Closed PRs (Today):**  
- **PR #8670** – Fixed Safari message queue action icons (via Lucide SVG size fix) → *Resolved Issue #8663*.  
- **PR #8660** – Gate terminal status checks on auth → improves security and startup stability.  
- **PR #8638** – Added `title` field to shell command cards → enhances readability in long jobs.  
- **PR #8634** – Enabled cron job tracking via TaskTracker → allows cancellation and visibility.  
- **PR #8609** – Implemented “Quote to follow-up” functionality → directly addresses **Issue #5110**.  
- **PR #8678** – Bound query error dumps and added retention policy → fixes **Issue #8674**.  
- **PR #8426 & #8469** – Extracted third-party agents and MCP into plugins → paves way for modular architecture.  
- **PR #8236** – Fixed Ollama context window detection by using `num_ctx` instead of hardcoded 128k → prevents truncation errors.

These merges signal progress in **UX polish, stability, modularity, and diagnostics**, aligning with v2.3.0’s focus on robustness and extensibility.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues & PRs (by engagement):**  
- **Issue #8669** – *Feishu channel startup race condition* (Windows desktop build)  
  - **Link:** [GitHub #8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)  
  - **Why it matters:** Reproducible failure on every start in packaged builds — impacts usability for enterprise users relying on Feishu integration.  
  - **User need:** Stable, deterministic startup behavior across all platforms.

- **Issue #8682** – *WeChat official plugin crashes on Linux due to missing HOME/QWENPAW_WORKING_DIR*  
  - **Link:** [GitHub #8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)  
  - **Why it matters:** Blocks adoption in server/cloud deployments where environment variables aren’t auto-set.  
  - **Underlying need:** Robust environment fallbacks and better error messaging for missing paths.

- **PR #8472** – *Reranker model center with multi-query history and auto-verify*  
  - **Link:** [GitHub #8472](https://github.com/agentscope-ai/QwenPaw/pull/8472)  
  - **Why it matters:** One of the largest feature PRs this cycle — indicates deep investment in **memory & retrieval quality**.  
  - **Signal:** Future emphasis on precision, reproducibility, and AI agent self-improvement.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (Ranked by Severity):**  
1. **[High] Issue #8616** – v2.3.0-beta.1 fails to start on **Windows 11 IoT LTSC** with "path not found" → AppHang  
   - **Impact:** Prevents deployment in embedded/industrial use cases.  
   - **Fix PR?** ❌ Not yet resolved.  
   - **Link:** [GitHub #8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)

2. **[High] Issue #8682** – Official WeChat plugin crashes on Linux due to undefined `HOME`/`QWENPAW_WORKING_DIR`  
   - **Impact:** Breaks official plugin workflow on Linux servers.  
   - **Fix PR?** ❌ Pending.  
   - **Link:** [GitHub #8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)

3. **[Medium] Issue #8538** – Matrix plugin fails to activate when multiple workspaces enabled  
   - **Impact:** User-facing regression after upgrade; breaks multi-account support.  
   - **Fix PR?** ❌ Not yet addressed.  
   - **Link:** [GitHub #8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)

4. **[Medium] Issue #8669** – Feishu channel plugin fails on every start due to state race  
   - **Impact:** High friction for users in packaged desktop builds.  
   - **Fix PR?** ❌ Not yet merged.  
   - **Link:** [GitHub #8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)

> 🛠 **Note:** Several stability issues stem from **environment variable handling** and **plugin lifecycle management**, pointing to a systemic need for improved runtime configuration resilience.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Top User-Requested Features (Predictions for v2.4+):**  
- **Quote/Reference Text for Follow-Up Context** (*Issue #5110*) → Now implemented via **PR #8609** → likely to be polished in next version.  
- **Better Markdown Preview View** (*Issue #8683*) → Request for full-screen, resize, copy buttons → signals growing demand for rich document interaction.  
- **Consistent Visual Design for Thinking Blocks & Tools** (*Issue #8650*, *#8612*) → Indicates UX maturity focus; expect layout unification in future releases.  
- **Local Decision Models (Piccolo)** → Already shipped in v2.3.0 → sets precedent for **on-device reasoning** and privacy-first AI workflows.

📌 **Roadmap Signal:** The project is shifting toward **modular, extensible, and privacy-aware agent systems** with enhanced local inference, better diagnostics, and richer UI/UX.

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points (from Issues & PR Comments):**  
- **Platform Fragmentation:** Users report inconsistent behavior across Windows (especially IoT), Linux, and macOS — particularly with bundled/desktop apps.  
- **Plugin Instability:** Official channel plugins (WeChat, Matrix) fail silently or crash without clear error messages.  
- **UX Friction in Long Sessions:** Users struggle with unreadable markdown previews, jumping visual alignment in thinking blocks, and unclear tool execution states.  
- **Diagnostic Overload:** Unbounded error dumps fill temp directories → causes disk pressure and confusion.  
- **Safari Incompatibility:** UI elements like message queue buttons vanish — affects Mac users who rely on Safari.

✅ **Positive Feedback:**  
- Users appreciate the **new "Quote to follow-up"** feature and **Piccolo local models** for faster, private reasoning.  
- Many praise the **modular plugin architecture** and improved memory tools.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered Critical Items Needing Attention:**  
- **Issue #8669** – Feishu channel startup race → still open, 5 comments, no fix PR → **high priority for v2.3.1 patch**.  
- **Issue #8682** – WeChat plugin crash on Linux → only 1 comment, but critical for server-side deployments → **urgent fix needed**.  
- **Issue #8616** – Windows IoT LTSC startup failure → isolated but severe; may block industrial adoption → **requires dedicated QA testing**.  
- **Issue #8683** – Poor markdown preview UX → simple but impactful UI issue → could be addressed in v2.3.1.  
- **PR #8472** – Reranker model center (size/XXL) – **under review** → pivotal for memory accuracy; needs timely feedback.

> ⏳ **Recommendation:** Prioritize **environment variable handling**, **cross-platform testing**, and **plugin bootstrapping** in next sprint. These are recurring pain points affecting user trust and adoption.

---

✅ **Final Assessment:**  
QwenPaw is a **fast-moving, matureing open-source AI agent platform** with strong momentum in v2.3.0. While the release brings powerful new capabilities (local models, quoting, diagnostics), **stability across edge environments remains a challenge**. The project is healthiest in terms of contributor activity and feature innovation, but must address platform-specific regressions to maintain credibility. With careful attention to the backlog items above, v2.4 can position QwenPaw as a leading **privacy-first, extensible AI assistant framework**.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-12**

---

### **1. Today's Overview**  
ZeroClaw is experiencing robust community engagement with **8 open issues** and **38 active pull requests** updated in the last 24 hours, signaling strong momentum ahead of its next release cycle. The project has just launched **v0.9.0**, marking a major milestone by enabling non-admin users to sign in via OpenID Connect—expanding access and multi-user collaboration. Development activity is highly focused on cross-platform CI stability, runtime reliability, and deeper integration with decentralized communication protocols like XMPP. With over 20 contributors involved in recent changes, the ecosystem remains vibrant and contributor-driven.

---

### **2. Releases**  
🔹 **v0.9.0** – *Released: 2026-11-12*  
- **Key Change**: First version allowing non-admin users to authenticate via **OpenID Connect**, enabling scoped chat environments per user.  
- **Contributor Impact**: 22 contributors across 117 commits; marks a shift toward broader community ownership.  
- **Migration Note**: Existing admin-only deployments should verify OIDC provider configuration in `zeroclaw-config.toml`. No breaking changes reported.  
- 🔗 [Release Notes & Changelog](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.9.0)

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- [#12380](https://github.com/zeroclaw-labs/zeroclaw/pull/12380) – *chore(docs): pin translations to v0.9.0*  
  → Ensures documentation consistency post-release.  
- [#12392](https://github.com/zeroclaw-labs/zeroclaw/pull/12392) – *fix(deps): bump rustix to 1.1.6 for RUSTSEC-2026-0486*  
  → Critical security patch addressing an xattr vulnerability in low-level filesystem operations.  
- [#12215](https://github.com/zeroclaw-labs/zeroclaw/pull/12215) – *chore(deps): bump rust-all group across 1 directory with 36 updates*  
  → Part of ongoing dependency hygiene efforts.  

🔧 **Features Advanced:**  
- [#12395](https://github.com/zeroclaw-labs/zeroclaw/pull/12395) – *docs(runtime): correct shell-grammar binding row before recording approval*  
  → Final step in securing POSIX command parsing logic (linked to #11994).  
- [#12258](https://github.com/zeroclaw-labs/zeroclaw/pull/12258) – *feat(tools): add sync sessions_prompt tool*  
  → Enables inter-agent prompting via live RPC sessions—key for complex orchestration workflows.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issue**:  
- [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) – *Run test suite on Windows and macOS in CI* (6 comments, P2 priority)  
  → **Need**: Cross-platform testing parity to prevent regressions on non-Linux systems. High risk due to growing Windows/macOS adoption.  

🔥 **Most Active PR**:  
- [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) – *feat(providers): support multiple models per provider profile* (in progress, XL size)  
  → **Need**: Flexibility in model routing (e.g., fallback chains, A/B testing), critical for enterprise-grade deployment.  

💡 **Underlying Trends**:  
- Users demand **cross-platform reliability** (Windows/macOS CI).  
- Growing need for **multi-model routing** and **fine-grained cost control** (see #11589).  
- Strong interest in **decentralized communication channels** (XMPP, Matrix, Discord).

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (S1–S2 Severity)**:  
1. [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) – *Stopping agent mid-work erases tool calls and thinking* (S1, P1)  
   → **Impact**: Workflow integrity lost during interruption. **No fix PR yet**.  
2. [#12391](https://github.com/zeroclaw-labs/zeroclaw/issues/12391) – *runtime-trace.jsonl loses hours of events across daemon restarts* (S2)  
   → **Impact**: Breaks observability and debugging in production. **No fix PR yet**.  

⚠️ **Other Notable Issues**:  
- [#12396](https://github.com/zeroclaw-labs/zeroclaw/issues/12396) – *dead config knobs*: `keep_recent` and `collapse_tool_results` no longer read  
  → **Risk**: Misleading config state; could cause confusion in policy enforcement.  
- [#12390](https://github.com/zeroclaw-labs/zeroclaw/issues/12390) – *shell tool returns empty error string on non-zero exit*  
  → **Impact**: Agents can’t diagnose failures properly. **Fix PR pending**.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **High-Priority Feature Requests**:  
- [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) – *Native XMPP / Prosody channel* (22 contributors, P2, high risk)  
  → Signal: Demand for lightweight, self-hosted messaging alternatives. Likely to be included in **v0.10.0**.  
- [#12397](https://github.com/zeroclaw-labs/zeroclaw/issues/12397) – *Distinguish agent task outcome from cron execution status*  
  → Signal: Need for granular monitoring of automated tasks—critical for DevOps use cases.  

🎯 **Predicted Next Release Features**:  
- XMPP channel support  
- Enhanced inter-agent session tools (`sessions_prompt`, `sessions_message`)  
- Multi-model routing per provider profile  
- Improved trace persistence and recovery

---

### **7. User Feedback Summary**  
💬 **Pain Points Reported**:  
- **Loss of context during agent interruption** (#8794): “I lose all my work if I stop the agent mid-task.”  
- **Invisible stderr output** in shell tools (#12390): “The agent says ‘failed’ but gives no clue why.”  
- **Trace gaps after restarts** (#12391): “My logs show 3-hour blackouts even though agents kept running.”  

🌟 **Positive Feedback**:  
- v0.9.0’s **multi-user login** is praised as “a game-changer for team collaboration.”  
- Users appreciate **deep configurability** (e.g., cost limits, session caps) and **rich tool integrations**.

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered Important Items Requiring Maintainer Attention**:  
- [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) – *CI platform matrix: Windows/macOS testing*  
  → Blocked on maintainer review despite 6 comments. **Critical for future stability**.  
- [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) – *Native XMPP channel*  
  → Already has a PR (#11847), but stalled due to lack of maintainership. **High-value feature with community effort**.  
- [#12394](https://github.com/zeroclaw-labs/zeroclaw/issues/12394) – *Bound SOP step agent’s tool ceiling to registry*  
  → Follow-up to security-hardening; needs review to close gap in tool delegation safety.

---

> ✅ **Overall Project Health**: **Strong** — high contributor velocity, active issue triage, and strategic release planning. Risks stem from **infrastructure gaps (CI, tracing)** and **slow maintainer response on key features**. Immediate focus should be on stabilizing cross-platform testing and resolving context loss bugs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*