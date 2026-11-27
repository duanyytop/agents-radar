# OpenClaw Ecosystem Digest 2026-11-27

> Issues: 367 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-27 04:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-27**

---

### **1. Today's Overview**  
OpenClaw remains highly active with a surge in developer engagement: **367 issues updated in the last 24 hours**, including **103 closed**, and **500 pull requests (PRs)** processed, of which **213 were merged or closed**. This reflects strong momentum in both issue triage and code delivery. The project is currently focused on stability improvements, update reliability, and memory management—especially under constrained environments like ARM64 and Windows. While no new releases have been issued, the volume of PRs indicates that a stable release is likely imminent.

---

### **2. Releases**  
*No new releases were published today.*  
The latest version remains **2026.11.8**, with ongoing work around update activation, plugin migration, and compatibility across platforms (Windows, macOS, Docker). Operators are advised to monitor **#204775** for upcoming changes to the prepared-release workflow.

> 🔗 [Latest Release Notes (GitHub)](https://github.com/openclaw/openclaw/releases)

---

### **3. Project Progress**  
Today’s merge activity centers on UX polish, session state hygiene, and robustness in edge cases:

- ✅ **#206376**: Fixed persistent chat lock after idle resets — ensures users can continue replying even after background tasks complete.
- ✅ **#206358**: Reduced Codex shutdown overhead on Linux hosts by minimizing procfs reads — improves performance during high-concurrency sessions.
- ✅ **#206361**: Consolidated repeated model switch notifications in Control UI — enhances clarity in multi-turn conversations.
- ✅ **#206359 & #206362**: Improved test coverage and isolation for agent deletion guards — strengthens CI reliability.
- ✅ **#206348**: Enhanced `doctor --fix` commands to report “no work” when applicable — reduces unnecessary gateway restarts.

These fixes collectively improve user experience and operational stability, especially in long-running or automated workflows.

> 🔗 [Merged PRs Summary](https://github.com/openclaw/openclaw/pulls?q=is%3Amerged+updated%3A%3D2026-11-27)

---

### **4. Community Hot Topics**  
Top issues and PRs reflect deep community engagement around core infrastructure challenges:

| Issue/PR | Comments | Status | Key Insight |
|--------|---------|--------|-----------|
| [#204775](https://github.com/openclaw/openclaw/issues/204775) | 38 | Open | Central design doc for *prepared-release updates* — critical for coordination across teams; needs ownership assignment. |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) | 29 | Closed | Prompt cache never reused — severe performance impact; fix has been applied but may require validation in beta. |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 29 | Open | Memory leak in `prepared-model-catalog.worker.js` (~4–5 GB/hour); affects all providers; urgent fix needed. |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 28 | Closed | Curated memory roots silently dropped from bootstrap — security + UX risk; now resolved. |
| [#206371](https://github.com/openclaw/openclaw/pull/206371) | N/A | Open | Sidebar persistence during startup — minor UX friction but widely reported. |

**Underlying Need:** Users demand predictable, stable, and efficient operation across diverse hardware (ARM64, Windows), with minimal silent failures or resource bloat.

---

### **5. Bugs & Stability**  
Critical bugs affecting uptime, memory, and update integrity remain top concerns:

| Severity | Issue | Description | Fix PR? |
|--------|------|------------|--------|
| 🦞 **P0 / Diamond Lobster** | [#153426](https://github.com/openclaw/openclaw/issues/153426) | `MEMORY.md`/`USER.md` permanently excluded after provenance change — leads to data loss | ✅ Closed |
| 🦞 **P0 / Diamond Lobster** | [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex protected continuation blocks follow-ups despite no active run | ❌ No PR yet |
| 🦪 **P1 / Silver Shellfish** | [#159662](https://github.com/openclaw/openclaw/issues/159662) | Unbounded memory leak in worker thread — ~4–5 GB/hour | ❌ No PR yet |
| 🦪 **P1 / Silver Shellfish** | [#182891](https://github.com/openclaw/openclaw/issues/182891) | Prompt cache never reused — every request drops cache | ✅ Fixed |
| 🦪 **P1 / Silver Shellfish** | [#195497](https://github.com/openclaw/openclaw/issues/195497) | Gateway RSS grows to ~3GB in 17h | ❌ No PR yet |

**Trend:** Memory leaks and update rollback failures dominate. Several P1/P0 bugs are unresolved despite being reported for weeks — signaling potential bottlenecks in maintainer bandwidth.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests highlight evolving expectations for autonomy and cross-platform consistency:

- **[#151178](https://github.com/openclaw/openclaw/issues/151178)**: Allow plugins to escalate Active Memory decisions — signals growing need for dynamic memory control.
- **[#103067](https://github.com/openclaw/openclaw/issues/103067)**: Centralize session naming and define subagent lifecycle — addresses fragmentation in multi-agent workflows.
- **[#206379](https://github.com/openclaw/openclaw/pull/206379)**: Show Gateway URL when browser blocks sign-in — small but impactful UX improvement.
- **[#204362](https://github.com/openclaw/openclaw/pull/204362)**: Add Talk status chimes for Apple devices — shows focus on accessibility and real-time feedback.

**Prediction:** These features suggest the next stable release will emphasize **session coherence**, **plugin extensibility**, and **cross-platform UX consistency**, particularly for mobile and voice-first interfaces.

---

### **7. User Feedback Summary**  
Real-world pain points emerge clearly from issue reports:

- **Memory & Performance:** Users on ARM64 and low-RAM systems (e.g., 1 GiB cgroup) report OOM kills and slow startups (#192547, #184843).
- **Update Reliability:** Frequent rollback failures during npm updates (e.g., #204816, #200756) cause frustration and distrust.
- **Silent Failures:** Many bugs involve "silent drops" — files ignored, sessions lost, or prompts missing — without diagnostics (#153426, #141172).
- **Platform-Specific Issues:** Windows (`#200756`, `#171831`) and macOS (`#203065`, `#200148`) users report distinct regressions, indicating platform-specific testing gaps.

Users express satisfaction with AI capabilities but concern over system reliability and transparency.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues remain unaddressed:

| Issue | Age | Status | Why It Matters |
|------|-----|--------|--------------|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 72 days | Open | Critical memory leak — could destabilize production deployments. |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) | 34 days | Closed | Despite fix, may still affect users due to delayed rollout. |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 98 days | Closed | Resolution confirmed, but documentation lacks visibility. |
| [#103067](https://github.com/openclaw/openclaw/issues/103067) | 140 days | Open | Core session lifecycle ambiguity persists — affects multi-agent workflows. |
| [#205007](https://github.com/openclaw/openclaw/issues/205007) | 2 days | Open | Security red flag regarding Go license and potential remote takeover — requires urgent review. |

> 🔗 [Backlog Watch List (GitHub)](https://github.com/openclaw/openclaw/issues?q=is%3Aopen+sort%3Aupdated-desc+label%3A%22clawsweeper%3Aneeds-maintainer-review%22+label%3A%22P1%22)

---

### ✅ **Final Assessment**  
OpenClaw is in a phase of **intensive stabilization and infrastructure hardening**. While innovation continues via PRs and feature proposals, **critical bugs related to memory, updates, and session integrity remain unresolved**. The project demonstrates strong community involvement but faces scaling challenges in maintaining responsiveness. A near-term stable release should prioritize fixing the top-tier memory and update reliability issues to restore trust and support broader adoption.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-27**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem in late 2026 is characterized by rapid maturation, increasing technical divergence, and a clear shift toward **production-grade reliability**, **privacy-by-design**, and **modular extensibility**. Projects are no longer focused solely on model integration or conversational flair but are instead addressing core infrastructure challenges—memory management, session integrity, update resilience, and cross-platform consistency. This marks a transition from experimentation to deployment readiness, with several projects nearing stable v1.0 milestones. The community is increasingly demanding transparency, auditability, and operational predictability, signaling the emergence of enterprise and professional use cases.

---

### **2. Activity Comparison**

| Project         | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Health Score (1–5) |
|----------------|----------------------|-------------------|----------------|--------------------|
| **OpenClaw**   | 367                  | 500               | None           | ⭐⭐⭐⭐☆ (4.2)       |
| **Hermes Agent** | 50                   | 50                | None           | ⭐⭐⭐⭐☆ (4.0)       |
| **QwenPaw**    | 21                   | 43                | None           | ⭐⭐⭐⭐☆ (4.1)       |
| **ZeroClaw**   | 13                   | 50                | None           | ⭐⭐⭐☆☆ (3.5)       |
| **IronClaw**   | 0                    | 0                 | None           | ⭐⭐☆☆☆ (2.0)       |

> *Health Score*: Based on activity velocity, issue resolution rate, PR merge throughput, and backlog management (higher = more stable & responsive).

---

### **3. OpenClaw's Position**  
**Advantages vs Peers**:  
- **Highest development velocity**—surpassing all others in both issue and PR volume, indicating a large, active contributor base and strong internal momentum.  
- **Deep focus on stability and edge-case hardening**—especially in memory management, session state hygiene, and update reliability—critical for production environments.  
- **Broad platform coverage**—with targeted fixes for ARM64, Windows, and Docker, making it one of the most portable agents in the ecosystem.

**Technical Approach Differences**:  
- Prioritizes **system-level robustness** over feature novelty—e.g., fixing persistent chat locks, worker thread leaks, and silent data drops.  
- Uses a **dual-layered release workflow** (prepared-release tracking via #204775), suggesting mature CI/CD governance.  
- Strong emphasis on **operational diagnostics** (e.g., `doctor --fix` reporting "no work" clearly).

**Community Size Comparison**:  
- Largest community engagement observed—evidenced by 38 comments on #204775 and 29+ on top P0 bugs—indicating broad adoption and high user investment.  
- More than double the issue volume of Hermes Agent and QwenPaw, suggesting either greater user base or higher sensitivity to system behavior.

---

### **4. Shared Technical Focus Areas**  
Across all active projects, recurring themes reveal foundational challenges:

| Focus Area              | Projects Involved                     | Specific Needs                                                                 |
|-------------------------|---------------------------------------|---------------------------------------------------------------------------------|
| **Memory Management**   | OpenClaw, QwenPaw, ZeroClaw, Hermes  | Unbounded leaks (~4–5 GB/hour), concurrent write loss, lack of TTL/reference counting |
| **Session State Integrity** | OpenClaw, Hermes, QwenPaw, ZeroClaw | Silent drops, idle resets, misclassified states, compaction failures             |
| **Update & Rollback Reliability** | OpenClaw, Hermes, QwenPaw         | npm rollback failures, version conflicts, failed migration handoffs               |
| **Cross-Platform Consistency** | OpenClaw, QwenPaw, ZeroClaw        | Windows-specific crashes (llama-server.exe), macOS rendering issues, Docker compatibility |
| **UI/UX Transparency**  | QwenPaw, ZeroClaw, Hermes            | Stuck spinners, invisible scroll, incorrect cost displays, poor real-time sync     |

These shared pain points indicate a **common underlying challenge**: building resilient, predictable systems at scale across diverse hardware and deployment models.

---

### **5. Differentiation Analysis**

| Dimension               | OpenClaw                          | Hermes Agent                        | QwenPaw                             | ZeroClaw                            |
|------------------------|-----------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| **Feature Focus**      | Infrastructure stability, UX polish | Modularity, privacy, scalability   | Rich output formatting, editor depth | Security, cost control, vault integration |
| **Target Users**       | Broad (developers, power users)   | Enterprise, multi-user workflows   | Creators, technical teams           | Privacy-focused operators, auditors |
| **Architecture**       | Centralized agent + plugin layer  | Modular toolchain + pluggable DB   | Forkable sessions + JSON-first      | Vault-driven, permission-scoped      |
| **Key Differentiator** | High-volume engineering rigor     | Session lifecycle clarity           | Rich-text UI fidelity               | Auditability & least-privilege control |

> **Summary**: OpenClaw leads in breadth and speed; Hermes prioritizes long-term scalability; QwenPaw excels in creative output quality; ZeroClaw stands out in security and compliance.

---

### **6. Community Momentum & Maturity**

| Tier                     | Projects                              | Characteristics |
|--------------------------|---------------------------------------|-----------------|
| **Rapid Iteration**      | OpenClaw, QwenPaw, Hermes Agent       | >30 daily PRs, frequent merges, high engagement on hot topics |
| **Stabilization Phase**  | ZeroClaw                              | Focused on v1.0.0 prep; fewer new PRs, deeper review cycles |
| **Declining Activity**   | IronClaw                              | No updates in 24h; potential stagnation or reorganization |

> **Insight**: OpenClaw and QwenPaw represent the **most dynamic** segments—driven by urgent bug fixes and UX improvements. Hermes shows signs of **enterprise readiness**, while ZeroClaw is preparing for a formal launch with strong security foundations.

---

### **7. Trend Signals**  
From community feedback and PR activity, key industry trends emerge:

1. **Demand for Predictable Memory Lifecycle**:  
   - All projects report memory leaks or unbounded growth.  
   - Rising interest in **reference-counted archival**, **TTL-based decay**, and **per-chat isolation** (QwenPaw #8882, Hermes #28279).  
   → *Value for developers: Design memory as a managed resource, not a black box.*

2. **Shift Toward Modularity & Pluggability**:  
   - Hermes moving tools (ByteRover, RetainDB) to Labs; ZeroClaw adding cloud vault support; QwenPaw enabling custom decision endpoints.  
   → *Value for developers: Build extensible, composable agents—avoid monolithic design.*

3. **Enterprise-Grade Requirements**:  
   - Pluggable DBs (Hermes #23717), cost accounting (ZeroClaw #10635), audit trails (ZeroClaw #12659), and secure credential provisioning.  
   → *Value for developers: Support identity, access, and budget governance from day one.*

4. **Cross-Platform UX Parity is Non-Negotiable**:  
   - Windows crashes (QwenPaw #8830), macOS rendering glitches (ZeroClaw #12743), and mobile accessibility gaps (Hermes #204362).  
   → *Value for developers: Test on ARM64, low-RAM, and non-desktop platforms early.*

5. **Transparency Over Black-Box AI**:  
   - Users demand visible cost tracking, real-time status, and error diagnostics (QwenPaw #8949, ZeroClaw #10635).  
   → *Value for developers: Make agent behavior observable and explainable—even when things fail.*

---

### ✅ **Conclusion**  
The personal AI agent ecosystem has evolved beyond prototyping into a **production-ready landscape**, where reliability, security, and usability are now primary differentiators. **OpenClaw** leads in execution velocity and infrastructure maturity, while **Hermes** and **QwenPaw** push boundaries in modularity and UX. **ZeroClaw** sets a benchmark for security-conscious design. For developers, the clear signal is: **build agents that are transparent, predictable, and maintainable—not just smart**. The next wave of innovation will be defined not by model size, but by system resilience and trustworthiness.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-27**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 new pull requests updated in the last 24 hours—indicating strong community engagement and rapid development velocity. Despite no new releases, significant progress is evident in session state management, gateway reliability, and plugin ecosystem expansion. The project continues to prioritize stability, security, and user experience across desktop, CLI, and gateway platforms, particularly in handling edge cases related to concurrency, persistence, and cross-platform compatibility.

---

### **2. Releases**  
**None**  
No new releases were published today. The latest stable version remains **v0.23.4**, which continues to be a focal point for several critical bug reports (e.g., #160647, #158264). Users are advised to monitor GitHub for upcoming patch releases addressing known regressions.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #160225** – Fixed backend migration restart handoff timing inconsistencies across systemd, UI polling, and gateway timeouts. Improves reliability during updates.  
- ✅ **PR #144928** – Added **ANKLE OS** as a community catalog plugin (pinned to commit `5d2e5fa`). Expands agent capabilities for niche OS integration.  

**Key Features Advanced:**  
- **PR #159622**: ByteRover and RetainDB are being moved from core to Hermes Labs, with automatic migration notices for existing users. Signals a shift toward modular, community-driven tooling.  
- **PR #158021**: Introduces `sessions.tool_payload_retention_days`, allowing users to retain conversations while pruning old tool outputs—directly addressing database bloat concerns.  
- **PR #160656**: `hermes -c` now skips already-open chats instead of blocking—improves usability in multi-terminal workflows.

---

### **4. Community Hot Topics**  
The most discussed items reflect deep user investment in **session integrity**, **platform-specific reliability**, and **privacy controls**:

- 🔥 **Issue #23717** – *RFC: Pluggable SessionDB Provider (PostgreSQL, MySQL)*  
  [Link](https://github.com/NousResearch/hermes-agent/issues/23717) | **26 comments**, **11 likes**  
  *Need:* Users demand scalable, production-grade storage beyond SQLite. This RFC is pivotal for enterprise adoption and multi-user environments.

- 🔥 **Issue #79357** – *idle_compact_after_seconds never fires in gateway mode*  
  [Link](https://github.com/NousResearch/hermes-agent/issues/79357) | **13 comments**, **6 likes**  
  *Need:* Prevents idle compaction from triggering due to timestamp reset race conditions—critical for memory efficiency in long-running gateways.

- 🔥 **Issue #28279** – *Per-Chat Memory Isolation (Scoped Memory)*  
  [Link](https://github.com/NousResearch/hermes-agent/issues/28279) | **11 comments**, **2 likes**  
  *Need:* Addresses privacy risks in multi-chat setups where global memory leaks context across conversations.

- 🔥 **PR #160651** – *Fix: Keep-alive mechanism for long replies that outlast prompt cache*  
  [Link](https://github.com/NousResearch/hermes-agent/pull/160651) | **Direct fix for Issue #160322**  
  *Impact:* Resolves performance regression where long-running subagent tasks re-trigger full prompt retransmission.

---

### **5. Bugs & Stability**  
Critical bugs reported today focus on **session corruption**, **gateway crashes**, and **platform-specific failures**:

| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| P1 | #160647 | `mnemosyne` plugin fails to install due to `onnxruntime` version conflict (1.31.0 vs <1.29) | ❌ No fix yet; affects profile-based installs |
| P2 | #158591 | SSH environment `__del__` blocks event loop → watchdog kills gateway | ❌ No PR submitted; high risk of silent failure |
| P2 | #139085 | Gateway worker dies due to ABI-mismatched `pydantic_core` from legacy venv | ⚠️ Likely fix in pipeline; requires runtime cleanup |
| P2 | #160634 | `/v1/runs` incorrectly labels `max_turns` exhaustion as `run.failed` | ✅ **PR #160651** addresses root cause (fix pending merge) |
| P2 | #158264 | Desktop misclassifies healthy Linux install as missing due to 15s timeout | ⚠️ Regression in update detection logic |

> **Note:** Several P2 issues stem from improper state handling during async operations or configuration drift—suggesting ongoing need for robust session lifecycle validation.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests highlight growing demands for **modularity**, **privacy**, and **UX polish**:

- **Pluggable SessionDB (Issue #23717)** – High signal for enterprise/multi-user support.
- **Per-Chat Memory Isolation (Issue #28279)** – Direct response to privacy concerns in shared environments.
- **Async-delegation wake-up for API clients (Issue #130226)** – UX gap in personal gateway flow.
- **First-visible-commitment SLO (Issue #16106)** – Needed for transparency in slow provider scenarios.
- **Bulk session delete (Issue #146527)** – Persistent UX friction in dashboard.

> **Prediction:** Next release (likely v0.24.0) will include **scoped memory**, **tool payload retention**, and **enhanced session recovery**—all stemming from top-ranked issues.

---

### **7. User Feedback Summary**  
Real-world pain points reveal a maturing user base:
- **Privacy**: Users in shared environments (teams, co-working) express concern over memory leakage (#28279).
- **Reliability**: Gateway crashes under heavy load or during updates are recurring complaints (#158591, #139085).
- **UX Friction**: Multiple users report confusion when `hermes -c` blocks silently (#160656), and bulk deletion fails (#146527).
- **Platform-Specific Gaps**: Windows (`#139085`, `#158264`), Feishu (`#160384`), and Matrix (`#155638`) integrations show instability.
- **Plugin Ecosystem Growth**: Positive reception to new plugins like ANKLE OS and reminders (#144928, #159877), but dependency conflicts remain a barrier.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues require maintainer attention:

- 🟡 **Issue #23717** – *Pluggable SessionDB Provider* (26 comments, 11 likes)  
  **Status:** Needs decision, not yet assigned. Critical for scalability.  
  **Action:** Should be prioritized for next sprint.

- 🟡 **Issue #155638** – *Receipt recovery loops forever on multiplexed gateway*  
  [Link](https://github.com/NousResearch/hermes-agent/issues/155638) | **7 comments**, **0 likes**  
  **Risk:** Can cause infinite retry loops, data loss, and service degradation.

- 🟡 **Issue #147660** – *hermes-session-reset-policy ignored for GUI sessions*  
  [Link](https://github.com/NousResearch/hermes-agent/issues/147660) | **2 comments**, **0 likes**  
  **Impact:** Causes persistent session bloat and compaction loops in desktop app.

- 🟡 **PR #84962** – *Kubernetes session-pod execution backend*  
  [Link](https://github.com/NousResearch/hermes-agent/pull/84962) | **Open since Aug 2026**  
  **Status:** Well-designed, but stalled due to review backlog. Key for cloud-native deployment.

> **Recommendation:** Assign dedicated owners to these high-impact items to prevent stagnation and maintain trust in the project’s roadmap.

---

✅ **Project Health Assessment**: **High Activity, Strong Momentum, Moderate Risk**  
Hermes Agent shows signs of a mature, rapidly evolving open-source ecosystem. While stability challenges persist—especially around session state and platform compatibility—the direction is clear: enhanced modularity, better privacy, and improved UX. Maintainers should prioritize backlog triage and release cadence to sustain momentum.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-27**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust pace of development: **43 pull requests** and **21 issues updated in the last 24 hours**, indicating strong community engagement and ongoing engineering momentum. While no new releases were published, the project is advancing rapidly across multiple fronts—particularly in UI/UX refinement, backend stability, and plugin extensibility. Critical Windows-specific bugs and cross-platform compatibility issues are receiving focused attention, signaling matured support for diverse deployment environments.

---

### **2. Releases**  
❌ **No new releases** detected in the past 24 hours.  
The latest version remains **QwenPaw 2.3.0.post1**, with ongoing work on `2.3.1b2` (as referenced in several PRs and issues). No breaking changes or migration notes are currently documented.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today)**:
- **PR #8950**: Fixes frame delivery in Console asset backpressure test on Windows — critical for stable desktop experience.
- **PR #8942**: Resolves 12 failing plugin installation tests on Windows, improving cross-platform reliability.
- **PR #8946**: Fixes Feishu table cards misrendering fenced code blocks — improves output fidelity in enterprise channels.
- **PR #8933 / #8932 / #8917 / #8915 / #8911 / #8907 / #8905**: A series of precision fixes in video memory and JSON handling by *passionworkeer*, enhancing structured data robustness in creator tools.
- **PR #8859**: Clarifies confirmation/approval interactions in the Console — improves UX consistency and reduces user error risk.

🔧 **Key Advances**:
- **Persistent session storage** (PR #8532) continues to progress toward enabling forkable turns and paginated history — foundational for long-form agent workflows.
- **Custom decision model endpoints** (PR #8928) now supported via UI settings, expanding flexibility in multi-model orchestration.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement**:
- **Issue #8845** – *Console markdown tables overflow message bubble*  
  🔗 [GitHub Issue #8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)  
  ✅ **Why it matters**: High visibility bug affecting readability of tabular responses; users cannot scroll horizontally → content effectively lost.  
  📌 **Underlying Need**: Responsive, scrollable rich-text rendering in web UI — essential for data-heavy agent outputs.

- **Issue #8949** – *Frontend fails to show real-time task status after upgrade*  
  🔗 [GitHub Issue #8949](https://github.com/agentscope-ai/QwenPaw/issues/8949)  
  ✅ **Why it matters**: Users report “stuck” spinners post-upgrade despite backend success — erodes trust in system state.  
  📌 **Underlying Need**: Real-time frontend synchronization with backend execution lifecycle, especially for cron and async tasks.

- **Issue #8882** – *Long-term memory lacks reference tracking or decay*  
  🔗 [GitHub Issue #8882](https://github.com/agentscope-ai/QwenPaw/issues/8882)  
  ✅ **Why it matters**: User frustration with "forgetting" key facts despite promised "never forgets" behavior.  
  📌 **Underlying Need**: Intelligent archival with TTL, access counters, or soft-deletion semantics — not just raw persistence.

🔥 **Top PRs by Engagement**:
- **PR #8532** – *Append-only session storage & Turn forks*  
  🔗 [GitHub PR #8532](https://github.com/agentscope-ai/QwenPaw/pull/8532)  
  💡 This is a **strategic feature** likely shaping QwenPaw’s next major release. It enables audit trails, branching conversations, and non-linear agent reasoning — a cornerstone for professional AI agents.

---

### **5. Bugs & Stability**  
🚨 **High Severity**:
- **Issue #8830** – *Windows: `llama-server.exe` processes accumulate and exhaust memory*  
  🔗 [GitHub Issue #8830](https://github.com/agentscope-ai/QwenPaw/issues/8830)  
  ⚠️ **Impact**: Prevents local model startup after restarts → breaks offline mode entirely.  
  🛠️ **Fix Status**: Not yet merged. Urgent fix needed for Windows users relying on local models.

- **Issue #8948** – *Single `~` parsed as strikethrough delimiter, corrupting number ranges*  
  🔗 [GitHub Issue #8948](https://github.com/agentscope-ai/QwenPaw/issues/8948)  
  ⚠️ **Impact**: Renders technical outputs (e.g., `600~1500 t/s`) unreadable → undermines credibility of agent responses.  
  🛠️ **Fix Status**: Open; PR #8946 partially addresses Feishu but not general Markdown parsing.

🟡 **Medium Severity**:
- **Issue #8727** – *Response continuation summary fails when reasoning consumes full token budget*  
  🔗 [GitHub Issue #8727](https://github.com/agentscope-ai/QwenPaw/issues/8727)  
  ⚠️ **Impact**: Breaks streaming summaries in high-token scenarios → limits scalability of complex agents.

- **Issue #8945** – *Feishu table cards misparse code blocks as tables*  
  🔗 [GitHub Issue #8945](https://github.com/agentscope-ai/QwenPaw/issues/8945)  
  ⚠️ **Impact**: Corrupts technical documentation and code samples in enterprise channels.

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **Emerging Trends**:
- **Rich editor integration**: Issue #8938 asks if the Composer will migrate from `<textarea>` to Lexical — signals growing demand for rich text, quoting, and formatting control.
- **WebRouter as search provider**: PR #8947 proposes adding WebRouter as a fourth `web_search` provider — suggests increasing desire for flexible, unified search tooling.
- **Reference-counted archival memory**: Issue #8882 calls for intelligent memory management — likely to be prioritized in upcoming v2.4+.
- **Runtime base-path deployment**: PR #8719 enables reverse-proxy hosting under `/qwenpaw` — indicates growing use in enterprise infrastructures with shared domains.

💡 **Prediction**: Next release (**v2.4**) will likely include:
- Persistent session storage + turn-level forks
- Enhanced memory lifecycle (reference counting, TTL)
- Rich editor upgrade (Lexical or similar)
- Improved cross-platform stability (especially Windows)

---

### **7. User Feedback Summary**  
🗣️ **Real Pain Points Expressed**:
- **Trust in UI state**: Users feel "fooled" by spinning loaders that don’t reflect actual backend progress (#8949).
- **Data integrity loss**: Number ranges (`600~1500 t/s`) being rendered as `6001500` due to `~` misinterpretation (#8848) damages credibility.
- **Memory inconsistency**: Despite marketing “never forgets,” users report agents forgetting important context over time (#8882).
- **Local model instability**: On Windows, repeated crashes lead to unkillable `llama-server.exe` processes — renders local inference unusable.

✅ **Positive Sentiment**:
- Appreciation for modular design (plugins, custom models).
- Recognition of progress in structured output and JSON handling (via recent PRs).

---

### **8. Backlog Watch**  
🔍 **Critical Long-Unanswered Items**:
- **Issue #8882** – *Reference-counted archival for long-term memory*  
  🔗 [GitHub Issue #8882](https://github.com/agentscope-ai/QwenPaw/issues/8882)  
  ⏳ **Status**: Open since Nov 24, 3 comments, no assignee.  
  📌 **Why it matters**: Core to QwenPaw’s value proposition — without it, “memory” feels unreliable. Needs urgent roadmap alignment.

- **Issue #8725** – *Cannot switch model in channel after session-level model is pinned*  
  🔗 [GitHub Issue #8725](https://github.com/agentscope-ai/QwenPaw/issues/8725)  
  ⏳ **Status**: Open since Nov 13, only 1 comment.  
  📌 **Why it matters**: Blocks failover during model failure — critical for production stability in team workflows.

- **Issue #8093** – *Runtime blocks image input even though model claims multimodal support*  
  🔗 [GitHub Issue #8093](https://github.com/agentscope-ai/QwenPaw/issues/8093)  
  ⏳ **Status**: Open since Oct 3, 1 comment.  
  📌 **Why it matters**: Breaks multimodal agent capabilities despite correct model catalog metadata.

📌 **Recommendation**: Maintainers should triage these high-impact, low-visibility issues to prevent erosion of user confidence.

---  
*Digest generated: 2026-11-27 | Source: GitHub — agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-27**

---

### **1. Today's Overview**  
ZeroClaw remains highly active with a strong momentum in development, evidenced by **50 open pull requests** and **13 new issues** updated within the last 24 hours. The project is in a critical phase of refining core security, runtime efficiency, and user experience ahead of its v1.0.0 milestone. High-severity bugs related to cost accounting, memory integrity, and session state persist, indicating ongoing focus on stability and data safety. A significant portion of activity centers around authentication hardening, tooling improvements, and cross-platform compatibility—particularly for macOS and Windows UI rendering.

---

### **2. Releases**  
No new releases were published today. There are currently **no recent releases**, meaning all changes remain in development or pending review. Users should expect no version updates until the next formal release cycle begins.

> 🔗 [Latest Release Page](https://github.com/zeroclaw-labs/zeroclaw/releases) (Empty)

---

### **3. Project Progress**  
Today saw no merged PRs, but several high-impact feature and fix proposals advanced significantly:

- **PR #12680** (`fix(memory): preserve typed writes for named agents`) enhances memory consistency for agent-specific workflows.
- **PR #12744** (`feat(skills): pass literal arguments to executables without a shell`) improves security and predictability in skill execution by eliminating shell injection risks.
- **PR #12691** (`feat(gateway): show Codex subscription usage in web chat`) brings transparency to API consumption via the web interface.
- **PR #12482 & #12481** extend credential provisioning to cloud vaults (1Password, Azure, AWS, Google, OpenBao), strengthening enterprise integration capabilities.

These PRs reflect a strategic shift toward **secure, auditable, and scalable operator control** over external systems.

> 🔗 [PR #12680](https://github.com/zeroclaw-labs/zeroclaw/pull/12680) | 🔗 [PR #12744](https://github.com/zeroclaw-labs/zeroclaw/pull/12744) | 🔗 [PR #12691](https://github.com/zeroclaw-labs/zeroclaw/pull/12691) | 🔗 [PR #12482](https://github.com/zeroclaw-labs/zeroclaw/pull/12482)

---

### **4. Community Hot Topics**  
The most discussed items center on **security, usability, and long-term architecture**:

- **Issue #5287** ([Feature]: define compact local_small runtime profile) — *11 comments, 2 👍*  
  Requested to reduce prompt bloat and prevent internal system instructions from leaking into user output. This is a top-tier UX concern for local-first users aiming for privacy and minimal overhead.

- **PR #12659** (`feat(ssh): scope password and TOTP authentication to vault grants`) — *high visibility due to security implications*  
  Enables granular SSH access control through vault-based authorization, directly addressing auditability and least-privilege principles.

- **Issue #10635** ([Bug]: Runtime profile cost limit does not reflect effective global daily budget) — *5 comments, high risk*  
  Critical flaw where cost limits appear unbounded despite actual spending caps. This undermines trust in resource governance.

> 🔗 [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 🔗 [PR #12659](https://github.com/zeroclaw-labs/zeroclaw/pull/12659) | 🔗 [Issue #10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635)

**Underlying Need**: Operators demand **predictable, transparent, and secure control** over costs, identity, and system behavior—especially in offline/local deployments.

---

### **5. Bugs & Stability**  
Five bugs reported today, with three classified as high severity:

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|------------|
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | S2 - degraded behavior | Cost limit misrepresents global daily cap | ❌ No fix yet |
| [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | S2 - degraded behavior | Re-sending old image markers causes hallucination | ✅ Closed (but may reappear) |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | S0 - data loss / security risk | Concurrent `store()` calls silently lose entries | ✅ Closed; requires careful validation |
| [#12746](https://github.com/zeroclaw-labs/zeroclaw/issues/12746) | S3 - minor issue | Chat box doesn’t regain focus after reconnect | ⚠️ Minor, but impacts workflow |
| [#12743](https://github.com/zeroclaw-labs/zeroclaw/issues/12743) | S3 - minor issue | Context meter renders unevenly on Windows Chrome | ⚠️ Visual inconsistency |

> 📌 **Critical Insight**: The **memory backend data loss bug (#10797)** was closed, but its root cause (lack of write serialization) remains a red flag for future reliability. Operators using concurrent memory operations should proceed cautiously.

---

### **6. Feature Requests & Roadmap Signals**  
Key upcoming features are being shaped by user feedback and architectural planning:

- **Local-only runtime profile (#5287)**: Likely to be included in v0.9.0 or early v1.0.0 to support privacy-focused, low-latency use cases.
- **Extended WebDAV support (#12695)** and **cloud vault integration (#12482)** suggest ZeroClaw is moving toward **enterprise-grade remote file and credential management**.
- **Web context meter fixes (#12743)** and **auto-scroll override (#9562)** indicate growing emphasis on polished web UX before v1.0.

> 🔗 [Roadmap Tracker #12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712) — *Active, maintained, and aligned with v1.0.0 goals*

---

### **7. User Feedback Summary**  
Users are expressing frustration with:
- **Unpredictable cost tracking** (#10635), which erodes confidence in budgeting.
- **UI inconsistencies** like uneven context meters and auto-scroll interference (#12743, #9562), impacting readability during long responses.
- **Prompt bloat** in local mode (#5287), especially when running models locally without internet dependency.

Positive sentiment appears around:
- **Enhanced security controls** (e.g., scoped SSH/TOTP, vault-granted access).
- **Transparency tools** like Codex usage reporting (#12641, #12691).

Overall, users value **control, predictability, and security**, but want smoother, more intuitive interactions.

---

### **8. Backlog Watch**  
Several high-priority items require maintainer attention:

- **Issue #5287** ([Feature]: compact local_small runtime profile) — *P2, in-progress, no stale*  
  Despite traction, this remains unresolved. It’s foundational for local-first adoption and should be prioritized.

- **Issue #12719** (`test(tunnel): start_forwarder_rechecks_the_process_after_the_probe fails on macOS runners`) — *Fails consistently on CI*  
  Blocks reliable testing on macOS. Must be addressed before stable cross-platform deployment.

- **PR #12459** (`feat(web): enable browser voice for OIDC sessions`) — *Blocked, needs-maintainer-review*  
  Currently stalled due to dependency chain and unclear scope. Needs decision to proceed.

> 🔗 [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 🔗 [Issue #12719](https://github.com/zeroclaw-labs/zeroclaw/issues/12719) | 🔗 [PR #12459](https://github.com/zeroclaw-labs/zeroclaw/pull/12459)

---

### ✅ **Final Assessment**  
ZeroClaw is **healthy and rapidly evolving**, with strong community engagement and clear direction toward v1.0.0. While technical debt and stability issues persist—especially in memory and cost accounting—the project demonstrates mature engineering practices through detailed documentation, structured RFCs, and proactive security enhancements. Maintainers must prioritize **critical bugs**, **UX polish**, and **roadmap clarity** to ensure successful v1.0 launch.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*