# OpenClaw Ecosystem Digest 2026-11-26

> Issues: 359 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-26 04:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-11-26**

---

### **1. Today's Overview**  
OpenClaw remains a highly active open-source AI agent platform, with **359 issues updated in the last 24 hours** and **500 pull requests** in motion—reflecting intense development momentum. The project is currently in a critical phase of stabilization around **v2026.11.10**, a key release that includes security hardening, performance tuning, and new model support. Despite strong contributor engagement (7,671 PRs, 349 contributors), stability concerns are mounting: multiple high-severity memory leaks, OOM crashes, and session corruption bugs persist across releases. The community is actively triaging, but several P0/P1 issues remain unresolved.

---

### **2. Releases**  
**✅ v2026.11.10** – *Released today*  
- **Summary**: A major update focused on reliability, security, and extended stability. Includes critical fixes for memory leaks, WAL checkpoint blocking, and plugin migration conflicts.  
- **Key Changes**:  
  - Resolves persistent `state/openclaw.sqlite` WAL auto-checkpoint blocking (#164294)  
  - Fixes unbounded memory growth in `prepared-model-catalog.worker.js` (#159662)  
  - Adds support for new model providers (e.g., XingChen-AGI via #197803)  
  - Enhanced plugin validation and rollback safety during updates  
- **Migration Note**: Users upgrading from `2026.10.34` should expect improved stability; however, some legacy plugin configs may require manual adjustment due to stricter validation.  
- 🔗 [Release Notes](https://docs.openclaw.ai/releas)  

**✅ v2026.10.34** – *Extended-stable (LTS-equivalent)*  
- Gateway-only release with critical security patches and reliability improvements.  
- Serves as a fallback for production environments requiring minimal change.  
- Recommended for users avoiding experimental features.  

---

### **3. Project Progress**  
**🟢 Merged / Closed PRs (Today)**:  
- **#205728**: Optimized credential refresh by skipping unused model rows → reduces CPU/memory load during auth cycles.  
- **#205721**: Fixed role scope checks to align with saved assignments → prevents false policy enforcement failures.  
- **#205733**: Skips ambient credential lookup when provider-specific keys are set → improves auth performance and clarity.  
- **#205729**: Allows Workboard cards to restart after worker failure → enhances workflow resilience.  
- **#205736**: Ensures 2026.11.10 update completes safely even if lease expires mid-process → avoids partial rollbacks.  

These PRs reflect a focus on **systemic efficiency**, **security hygiene**, and **reliability under stress**—key themes in the current patch cycle.

---

### **4. Community Hot Topics**  
Top 5 most-commented Issues highlight systemic pain points:

1. **#164294** – *WAL auto-checkpoint never completes* (44 comments)  
   - **Root Cause**: In-process reader blocks SQLite WAL checkpoint indefinitely.  
   - **Impact**: Long-term DB bloat, potential data loss if not addressed.  
   - 🔗 [Issue #164294](https://github.com/openclaw/openclaw/issues/164294)

2. **#91588** – *Critical: Gateway Memory Leak (RSS 350MB → 15.5GB)* (42 comments)  
   - **Impact**: Repeated OOM kills, service instability.  
   - **User Need**: Immediate memory leak mitigation and diagnostics visibility.  
   - 🔗 [Issue #91588](https://github.com/openclaw/openclaw/issues/91588)

3. **#197083** – *Post-install Doctor leaves 11.3 update partially finalized* (40 comments)  
   - **User Pain**: Update succeeds but state is inconsistent; no rollback path exists.  
   - **Need**: More robust post-update verification and recovery mechanisms.  
   - 🔗 [Issue #197083](https://github.com/openclaw/openclaw/issues/197083)

4. **#159662** – *unbounded memory leak in prepared-model-catalog.worker.js (~4–5 GB/h)* (28 comments)  
   - **Critical**: Affects all models/providers; independent of workload.  
   - **Fix Status**: No PR yet; requires deep worker thread inspection.  
   - 🔗 [Issue #159662](https://github.com/openclaw/openclaw/issues/159662)

5. **#153426** – *MEMORY.md silently excluded forever after provenance ratchet triggers* (25 comments)  
   - **User Impact**: Loss of curated context, no diagnostic or recovery path.  
   - **Underlying Need**: Transparent state governance and auditability.  
   - 🔗 [Issue #153426](https://github.com/openclaw/openclaw/issues/153426)

> 📌 **Pattern**: High comment counts correlate with **irreversible state corruption**, **silent failures**, and **lack of recovery tools**—indicating urgent need for better observability and self-healing.

---

### **5. Bugs & Stability**  
| Severity | Issue | Summary | Fix PR? |
|--------|------|--------|--------|
| **P0 (Crash-loop)** | #91588 | RSS grows from 350MB → 15.5GB over days | ❌ No PR |
| **P0 (UX Release Blocker)** | #153426 | `MEMORY.md` permanently excluded without warning | ❌ No PR |
| **P0 (Security/UX)** | #190563 | Cannot resume paused Codex chat due to thread mismatch | ❌ No PR |
| **P1 (Crash-loop)** | #159662 | `prepared-model-catalog.worker.js` leaks ~5GB/h | ❌ No PR |
| **P1 (Message Loss)** | #196199 | Native Codex helper completions fail to resume parent | ❌ No PR |
| **P2 (Session State)** | #148707 | Reply lost when second run displaces in-flight turn | ❌ No PR |

> ⚠️ **Stability Risk**: Multiple P0/P1 issues related to **memory management**, **session state integrity**, and **plugin lifecycle control** remain open. These threaten long-running deployments and user trust.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority feature signals emerging from recent activity:

- **Auto-recovery for stranded runs** (#170562): Operators need a CLI command to retire stuck `requesterSettleWake` entries.  
- **Antigravity session resume** (#205731): Safe automatic retry after Gateway restart → critical for CLI automation users.  
- **Context budgeting for Skill Workshop Review** (#150238): Guard against oversized sessions causing timeouts.  
- **Session naming centralization** (#103067): Address inconsistent naming across agents and channels.  
- **Unbypassable outbound policy enforcement** (#56349): Pre-send validation guarantee → essential for enterprise compliance.  

> ✅ **Predicted Next Version Focus**: **Session resilience**, **state durability**, and **policy enforcement** will dominate v2026.12+ roadmap based on PRs like #205731 and #205723.

---

### **7. User Feedback Summary**  
Real-world user pain points revealed through issue reports:

- **"My assistant keeps crashing after 2 days."** → Memory leaks (#91588, #159662)  
- **"I lost a reply because it was displaced by another run."** → Session race conditions (#148707)  
- **"My custom `MEMORY.md` vanished overnight and I can’t recover it."** → Silent state corruption (#153426)  
- **"Updates fail with no explanation, and rollback doesn’t work."** → Broken update pipeline (#204816)  
- **"The Control UI shows duplicate replies."** → Rendering bugs in webchat (#123792)  

> 💬 **Sentiment**: High frustration with **unpredictable behavior**, **lack of diagnostics**, and **no recovery options**. Users value stability and predictability more than new features.

---

### **8. Backlog Watch**  
Critical long-standing issues needing maintainer attention:

- **#153426** – `MEMORY.md` permanently excluded after provenance ratchet. **(25 comments, 2 👍, stale since Sep 2026)**  
  - 🔗 [GitHub Link](https://github.com/openclaw/openclaw/issues/153426)  
  - **Action Needed**: Design a recovery mechanism + improve UX warnings.

- **#127195** – "changed while starting work" error has no reason code → impossible to debug in prod. **(15 comments, 0 👍)**  
  - 🔗 [GitHub Link](https://github.com/openclaw/openclaw/issues/127195)  
  - **Action Needed**: Add cause field to error messages.

- **#164065** – Telegram `requireMention` does not gate bare slash commands. **(10 comments, 0 👍)**  
  - 🔗 [GitHub Link](https://github.com/openclaw/openclaw/issues/164065)  
  - **Action Needed**: Enforce mention requirement across all command types.

- **#159743** – Post-upgrade survey and recovery window. **(9 comments, 0 👍)**  
  - 🔗 [GitHub Link](https://github.com/openclaw/openclaw/issues/159743)  
  - **Action Needed**: Implement telemetry-driven feedback loop.

> 🎯 **Maintainer Priority**: Prioritize **debuggability**, **recoverability**, and **user transparency** in next sprint.

---

**📌 Final Assessment**: OpenClaw is **technically vibrant** but **operationally fragile**. While innovation continues (new providers, CLI enhancements), core stability and user experience are under threat. Immediate focus should shift from feature velocity to **systemic resilience**, **error observability**, and **self-healing mechanisms**. Without intervention, user adoption will stall despite technical depth.

---

## Cross-Ecosystem Comparison

⚠️ Comparative analysis generation failed.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-26**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust development pace: **35 new issues** and **50 pull requests** updated in the last 24 hours, indicating strong community engagement and ongoing refinement. The project is in a critical phase of stabilizing core components—especially around memory handling, model routing, and structured output parsing—while also advancing UI/UX enhancements and cross-platform support. No new releases have been published, suggesting that the team is prioritizing internal quality and bug resolution ahead of a potential v2.3.1 release. Overall, the project shows signs of healthy momentum with focused technical debt reduction and feature polish.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-11-26.  
The latest stable version remains **v2.3.0.post1**, with no changelog or migration notes available for recent updates. This absence of a release suggests that the team is likely preparing a patch release (e.g., v2.3.1) to bundle recent fixes, particularly those related to video memory processing, model context routing, and JSON parsing stability.

---

### **3. Project Progress**  
✅ **Merged & Closed PRs (Today):**  
- **#8933** (`fix(video_memory)`): Guards `merged_graph_payload()` against `null`/non-string themes/entities — directly addresses #8931.  
- **#8932** (`fix(video_memory)`): Ensures short-tail segments are capped at `max_scene_sec`, resolving #8930.  
- **#8853** (`fix(agents)`): Improves error feedback for failed compaction by suggesting retrying `/compact`, fixing #8848.  
- **#8857** (`feat(telegram)`): Enables topic-scoped agent sessions in Telegram forums — a major UX improvement.  
- **#8841** (`fix(plugins)`): Prevents `llama-server.exe` from outliving crashed backends — enhances reliability.  

These merges reflect a focus on **stability**, **user experience**, and **cross-platform robustness**, particularly in edge-case handling within media and memory systems.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues (by comment count):**  
1. **[Bug] Manual /compact ignores session model selection** — Issue #8464 (6 comments)  
   - *Link:* [GitHub #8464](https://github.com/agentscope-ai/QwenPaw/issues/8464)  
   - **Need:** Users expect manual compression to respect current session model (M2), not default agent model (M1). This breaks workflows when M1 enforces strict input validation.  

2. **Windows ReMe tag index fails permanently** — Issue #8863 (5 comments)  
   - *Link:* [GitHub #8863](https://github.com/agentscope-ai/QwenPaw/issues/8863)  
   - **Need:** Critical path issue for Windows users using ReMe Light memory backend; prevents proper tagging and indexing.  

3. **AI Prompt Polishing button request** — Issue #8892 (3 comments)  
   - *Link:* [GitHub #8892](https://github.com/agentscope-ai/QwenPaw/issues/8892)  
   - **Need:** User-driven demand for AI-assisted prompt optimization — signals growing interest in conversational efficiency and accessibility.  

🔥 **Top PRs by activity:**  
- **#8933** & **#8932** (video_memory fixes) — both open but already linked to resolved issues, showing high confidence in fix validity.  
- **#8857** (Telegram topic isolation) — first-time contributor, well-received, indicates community interest in channel-specific session management.

---

### **5. Bugs & Stability**  
🚨 **High Severity Bugs Reported Today:**  
1. **#8931 / #8930**: Video memory crashes on `null` or non-string themes/entities and returns segments longer than `max_scene_sec`.  
   - *Fix PR:* [PR #8933](https://github.com/agentscope-ai/QwenPaw/pull/8933) and [PR #8932](https://github.com/agentscope-ai/QwenPaw/pull/8932) now merged.  
   - **Impact:** Can cause data corruption or playback errors in video-memory workflows.  

2. **#8887**: Media data blocks trigger 400 errors on non-multimodal models, causing cascading "Internal error" states.  
   - *Fix PR:* Pending — urgent for tool compatibility across model types.  

3. **#8877**: Status-less OpenAI-compatible stream overload bypasses retries.  
   - *Impact:* Risk of silent failure during high-load scenarios.  

⚠️ **Medium Severity:**  
- **#8893**: Console model settings lack agent scope — leads to misleading "no model" display.  
- **#8888**: Transcript jumps backward when content collapses — poor UX for long conversations.  

All critical bugs are either fixed or have active PRs, indicating strong responsiveness.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **Emerging Feature Themes:**  
- **AI-Powered Input Assistance**: [Issue #8892](https://github.com/agentscope-ai/QwenPaw/issues/8892) — “AI Prompt Polishing” button requested by user Moonlit-Pages. Signals demand for smarter, more guided interaction design.  
- **Better API Configuration UX**: [Issue #8929](https://github.com/agentscope-ai/QwenPaw/issues/8929) — MCP config pages need header form fields for authentication. Indicates frustration with manual JSON editing.  
- **Cross-Platform Desktop Support**: [PR #8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) — Linux `.deb` and `.AppImage` packaging requested. Strong signal for broader adoption beyond Windows/macOS.  
- **Custom Decision Model Endpoints**: [PR #8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) — allows users to define custom decision models via UI. Likely to be included in v2.3.1.

➡️ **Predicted Next Release (v2.3.1):**  
Likely to include:  
- Fixed video memory pipeline  
- Enhanced model routing (session-aware `/compact`)  
- Improved error messaging (per #8848)  
- Custom model endpoint support  
- Better Linux desktop packaging

---

### **7. User Feedback Summary**  
💬 **Key Pain Points Expressed:**  
- **Model confusion**: Users expect `/compact` to use the current session model, not the agent’s default — leading to unexpected failures ([#8464](https://github.com/agentscope-ai/QwenPaw/issues/8464)).  
- **Error guidance flaws**: Suggesting `/clear` after compaction failure misleads users into losing context ([#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848)).  
- **UI/UX friction**: Long tables or code blocks get cut off without horizontal scroll ([#8856](https://github.com/agentscope-ai/QwenPaw/issues/8856)); transcript jumping disrupts flow ([#8888](https://github.com/agentscope-ai/QwenPaw/issues/8888)).  
- **Workflow complexity**: Need for manual JSON edits for headers in MCP configs undermines usability ([#8929](https://github.com/agentscope-ai/QwenPaw/issues/8929)).

✅ **Positive Signals:**  
- First-time contributors are actively submitting PRs (e.g., #8857, #8923), indicating growing community trust and ease of contribution.  
- Detailed, reproducible bug reports suggest experienced users are deeply engaged.

---

### **8. Backlog Watch**  
🔍 **Important Issues Requiring Maintainer Attention:**  
1. **[Bug] Built-in providers lack glm-5.3/5.4 context table entries** — Issue #8891 (3 comments)  
   - *Why it matters:* Causes fallback to 128k context even for newer models, reducing precision and increasing cost.  
   - *Link:* [GitHub #8891](https://github.com/agentscope-ai/QwenPaw/issues/8891)  

2. **[Bug] Responses continuation summary fails when model uses full output budget** — Issue #8727 (3 comments)  
   - *Why it matters:* Breaks long-running reasoning flows where `disable_thinking=True` is used.  
   - *Link:* [GitHub #8727](https://github.com/agentscope-ai/QwenPaw/issues/8727)  

3. **[Enhancement] Enforce tenant scoping at memory retrieval layer** — Issue #8881 (1 comment)  
   - *Why it matters:* Current reliance on directory conventions is fragile and not scalable for multi-tenant deployments.  
   - *Link:* [GitHub #8881](https://github.com/agentscope-ai/QwenPaw/issues/8881)  

4. **[Bug] pytest -n aborts due to parametrization order mismatch** — Issue #8925 (1 comment)  
   - *Why it matters:* Blocks parallel testing, slowing CI/CD pipelines and reducing test reliability.  
   - *Link:* [GitHub #8925](https://github.com/agentscope-ai/QwenPaw/issues/8925)  

> These issues represent **critical gaps in scalability, correctness, and developer experience** — should be prioritized in upcoming sprints.

---

**Final Assessment:**  
QwenPaw is in a mature, high-intensity development phase. With **strong PR-to-issue ratio**, rapid fix deployment, and clear roadmap signals, the project is poised for a stable, feature-rich v2.3.1 release. Focus areas remain **model/session consistency**, **structured data resilience**, and **user-centric UX improvements**. Maintainers are responding effectively — but must prioritize backlog items tied to long-term system integrity.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-26**

---

### **1. Today's Overview**  
ZeroClaw remains highly active with a robust momentum in development, evidenced by **50 PRs updated in the last 24 hours** (39 open, 11 merged/closed) and **11 new issues**, including critical security and localization fixes. The project is advancing rapidly toward its v1.0.0 milestone, with multiple high-priority tracks focused on identity management, session persistence, and modularization of core components. A strong emphasis on security (OIDC refresh grants, agent autonomy enforcement) and cross-channel UX (Telegram rich messages, email backlog handling) reflects a matured focus on production readiness and user trust.

---

### **2. Releases**  
*No new releases were published today.*  
There are currently **no version updates** in the pipeline, indicating that ongoing work is concentrated on internal refactoring, feature implementation, and stabilization ahead of a major release. Maintainers appear to be prioritizing foundational improvements over public-facing versioning at this stage.

---

### **3. Project Progress**  
The following PRs were merged or closed today:

- **[PR #12167](https://github.com/zeroclaw-labs/zeroclaw/pull/12167)** – *Bug: `send_message_to_peer` ignores sender autonomy level and action budget*  
  ➤ **Fixed**: Ensures `readonly` agents cannot trigger turns for peers, aligning with security policy and action budget enforcement. This patch closes a critical access control gap.

- **[PR #12703](https://github.com/zeroclaw-labs/zeroclaw/issues/12703)** – *Email channel reprocesses UNSEEN messages after restart*  
  ➤ **Resolved via related fix**: Addressed by PR #12718 (see below), which ensures field help is retained during schema lookup — indirectly resolving state inconsistency in message tracking.

- **[PR #12718](https://github.com/zeroclaw-labs/zeroclaw/pull/12718)** – *Fix: retain Config field help when schema lookup misses*  
  ➤ **Merged**: Resolves issue #9363 (config metadata stays English) by improving fallback behavior in dashboard UI, enhancing UX consistency across locales.

These updates reflect ongoing attention to **security integrity**, **data consistency**, and **user experience polish**—particularly around stateful operations in email and config systems.

---

### **4. Community Hot Topics**  
Top community-driven discussions center on **identity & session persistence**, **modular architecture**, and **cross-platform messaging**:

- **[Issue #12707](https://github.com/zeroclaw-labs/zeroclaw/issues/12707)** – *Daemon-held OIDC refresh grants (ADR-017)*  
  🔗 [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/12707)  
  💬 **Status**: Open, but actively being implemented via stacked PRs (#12716, #12717).  
  📌 **Need**: Users demand secure, persistent device sessions without relying on external IdPs for refresh tokens—critical for long-lived agents and offline resilience.

- **[PR #12440](https://github.com/zeroclaw-labs/zeroclaw/pull/12440)** – *Add host-mediated agent wake dispatch*  
  🔗 [View PR](https://github.com/zeroclaw-labs/zeroclaw/pull/12440)  
  💬 **Comments**: 0 (early stage), but marked as **XL size** and **high risk**.  
  📌 **Need**: Enables dynamic agent activation from external triggers—key for event-driven workflows and integration with external orchestration tools.

- **[Issue #12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712)** – *Roadmap to v1.0.0*  
  🔗 [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/12712)  
  💬 **Status**: Recently created (Nov 25), now serving as central coordination point.  
  📌 **Need**: Transparent planning for v1.0 is essential for ecosystem confidence; signals that ZeroClaw is moving from experimental to stable release phase.

> ✅ **Trend Analysis**: The community is increasingly focused on **long-term session reliability**, **secure identity lifecycle management**, and **extensibility via plugins**—indicating maturation beyond prototyping.

---

### **5. Bugs & Stability**  
Critical stability concerns reported today include:

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|------------|
| [#12710](https://github.com/zeroclaw-labs/zeroclaw/issues/12710) | S2 | `Containerfile check` stage fails in StageX image; no workflow builds it | ❌ No fix yet |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | S2 | Config metadata remains English in localized surfaces | ✅ Partially fixed via #12718 |
| [#12107](https://github.com/zeroclaw-labs/zeroclaw/issues/12107) | S2 | Chat turn answer not shown after socket reconnect | ✅ Fixed in #12718 (indirectly) |
| [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) | S2 | Email channel reprocesses same mail after restart | ✅ Fixed via #12718 |

> ⚠️ **Note**: While several S2 bugs have been addressed, **#12710 (CI build failure)** remains unpatched and could block CI/CD pipelines if unresolved. It’s a potential blocker for future releases.

---

### **6. Feature Requests & Roadmap Signals**  
Key feature requests and roadmap indicators suggest the next version will prioritize:

- **Persistent Sessions & State**:  
  - [PR #11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727): Reopen sessions on `zerocode` restart → likely included in v1.0.
  - [PR #10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407): Persistent prompt attachments → enables session continuity.

- **Modular Architecture**:  
  - [Issue #12697](https://github.com/zeroclaw-labs/zeroclaw/issues/12697): Split `zeroclaw-runtime` into smaller crates → signal of architectural refactoring for maintainability.

- **Enhanced Channel UX**:  
  - [Issue #8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415): Telegram Bot API 10.1 Rich Messages → indicates growing demand for richer bot interactions.

> 🚀 **Prediction**: **v1.0.0** will feature **persistent sessions**, **enhanced identity/security (OIDC refresh grants)**, **modular runtime**, and **improved multi-channel UX**—making ZeroClaw a production-grade agent platform.

---

### **7. User Feedback Summary**  
Real-world pain points highlighted by users:

- **Email Channel Backlog Loop**: Users report receiving duplicate replies after daemon restarts (**#11760, #12703**) — impacts trust in automated responses.
- **Localization Gaps**: Config metadata remains in English despite selecting non-English locale (**#9363**) — hinders usability for global teams.
- **Session Disruption**: Losing open chat sessions on `zerocode` restart causes workflow interruption (**#11727**) — urgent for productivity.
- **Overly Permissive Messaging**: `readonly` agents can still initiate peer turns (**#12167**) — raises security concerns in shared environments.

> ✅ **Satisfaction Signal**: Users appreciate granular control (e.g., config deletion confirmation in #11510), suggesting growing comfort with advanced features.

---

### **8. Backlog Watch**  
Critical long-standing issues needing maintainer attention:

- **[Issue #11119](https://github.com/zeroclaw-labs/zeroclaw/issues/11119)** – *Implement receiver-discretionary session messaging (RFC #11027)*  
  🔗 [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11119)  
  📌 **Status**: Open, accepted, no stale label.  
  💡 **Why it matters**: Foundational to secure, privacy-preserving agent-to-agent communication. Delayed implementation may impact v1.0 timeline.

- **[Issue #12697](https://github.com/zeroclaw-labs/zeroclaw/issues/12697)** – *Split `zeroclaw-runtime` into smaller crates*  
  🔗 [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/12697)  
  📌 **Status**: Open, tracker-style, no stale.  
  💡 **Why it matters**: Essential for long-term maintainability and dependency isolation. Should be prioritized before v1.0 finalization.

- **[PR #11881](https://github.com/zeroclaw-labs/zeroclaw/pull/11881)** – *Goal execution lifecycle (Goal V1 proposal 4/12)*  
  🔗 [View PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11881)  
  📌 **Status**: Draft, local validation failing, awaiting review.  
  💡 **Why it matters**: Core to ZeroClaw’s goal-driven agent model. Blocker for advanced AI workflows.

> 🔔 **Recommendation**: Assign owners to these three items to prevent stagnation and ensure v1.0 delivery.

--- 

✅ **Project Health Score**: **High**  
ZeroClaw is in a strong, forward-moving phase—driven by clear roadmaps, active contributor engagement, and solid progress on security and usability. With careful attention to backlog items and CI stability, v1.0.0 is within reach.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*