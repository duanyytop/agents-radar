# OpenClaw Ecosystem Digest 2026-11-17

> Issues: 318 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-17 04:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-17**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 318 issues and 500 pull requests updated in the last 24 hours—indicating intense development momentum and robust community engagement. A significant number of high-severity bugs (P0/P1) are actively being triaged, particularly around gateway stability, memory leaks, and session state corruption. The absence of new releases suggests a focus on stabilizing pre-release builds ahead of a major update cycle. Despite this, critical regressions from recent versions (e.g., 2026.9.6) continue to surface, signaling ongoing challenges in backward compatibility and runtime resilience.

---

### **2. Releases**  
**None**  
No new releases were published today. The latest stable version remains `v2026.10.7`, with prerelease candidates `v2026.11.5-beta.1` through `v2026.11.5-beta.4` available for testing. These betas include fixes for historical-state recovery (`#164445`) and improved agent yield handling, but no formal release notes have been issued. Maintainers are likely preparing for a full rollout post-stabilization.

> 🔗 [Prerelease Builds](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1)

---

### **3. Project Progress**  
**Merged PRs (10):**  
- ✅ [#200407](https://github.com/openclaw/openclaw/pull/200407): Fixed scrollbars in session menus to stay within rounded corners.  
- ✅ [#200410](https://github.com/openclaw/openclaw/pull/200410): Refreshed Control UI locales without bypassing branch protection.  
- ✅ [#200392](https://github.com/openclaw/openclaw/pull/200392): Resolved Git/third-party plugin install rejections in chat interfaces.  
- ✅ [#200406](https://github.com/openclaw/openclaw/pull/200406): Fixed hidden plugin install confirmation logic.  
- ✅ [#200389](https://github.com/openclaw/openclaw/pull/200389): Prevented update race conditions by ensuring installation ownership is preserved.  
- ✅ [#200398](https://github.com/openclaw/openclaw/pull/200398): Restored full release watcher startup after GitHub pin migration.  
- ✅ [#200402](https://github.com/openclaw/openclaw/pull/200402): Fixed CI failure due to missing private server ownership guard.  
- ✅ [#200399](https://github.com/openclaw/openclaw/pull/200399): Handled retired animation IDs safely in WebKit checks.  
- ✅ [#200401](https://github.com/openclaw/openclaw/pull/200401): Fixed catalog publication regression test serialization issue.  
- ✅ [#200397](https://github.com/openclaw/openclaw/pull/200397): Reduced docs link audit overhead by avoiding redundant rebuilds.  

**Key Advances:**  
- Improved plugin installation UX across chat platforms.  
- Enhanced CI stability and test reliability.  
- Better handling of edge cases in web UI animations and localization.

---

### **4. Community Hot Topics**  
Top 5 most commented issues reflect deep user pain points:

1. **[Issue #160959](https://github.com/openclaw/openclaw/issues/160959)** – *Gateway blocks for minutes during large plugin capture (P0, 🦞 diamond lobster)*  
   - **83 comments**, reported as a 2026.9.6 regression.  
   - **Need**: High-performance event loop handling under heavy load; likely tied to model runtime republishing.

2. **[Issue #164294](https://github.com/openclaw/openclaw/issues/164294)** – *WAL auto-checkpoint never completes (pinned reader)*  
   - **41 comments**, affecting long-running gateways.  
   - **Need**: Persistent database integrity under concurrent access; potential deadlock in SQLite WAL layer.

3. **[Issue #191944](https://github.com/openclaw/openclaw/issues/191944)** – *`gateway stop` fails on macOS with "ancestry could not be inspected"*  
   - **34 comments**, blocking core lifecycle management on Apple Silicon.  
   - **Need**: Reliable process introspection and termination, especially in sandboxed environments.

4. **[Issue #150635](https://github.com/openclaw/openclaw/issues/150635)** – *Short-term recall evicts entries nightly, breaking dreaming phase promotion*  
   - **28 comments**, impacting long-running AI agents.  
   - **Need**: Persistent session state preservation; better recall retention policies.

5. **[Issue #197083](https://github.com/openclaw/openclaw/issues/197083)** – *Post-install Doctor leaves 11.3 update partially finalized*  
   - **18 comments**, indicating serious upgrade path instability.  
   - **Need**: Atomic updates with rollback guarantees; stronger state validation.

> 🔗 [Top 5 Issues (GitHub)](https://github.com/openclaw/openclaw/issues?q=is%3Aopen+sort%3Acomments-desc)

---

### **5. Bugs & Stability**  
**Critical Regressions (P0/P1):**  
| Issue | Severity | Description | Fix PR? |
|------|----------|-------------|--------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | P0 | Gateway crash-loop due to large plugin capture | ❌ No |
| [#169844](https://github.com/openclaw/openclaw/issues/169844) | P0 | Windows update hangs at “Activating” | ❌ No |
| [#194403](https://github.com/openclaw/openclaw/issues/194403) | P1 | Helper-completion invalidates authority, blocks conversations | ❌ No |
| [#185578](https://github.com/openclaw/openclaw/issues/185578) | P1 | Heap leak (~25 MiB/h), V8 cap aborts | ❌ No |
| [#162497](https://github.com/openclaw/openclaw/issues/162497) | P1 | SQLite worker store cap at 64 causes turn failures | ❌ No |

**Security Alert (P1):**  
- [#65624](https://github.com/openclaw/openclaw/issues/65624): Mattermost slash commands expose reusable tokens via cleartext URLs (CVSS 8.6).  
  - **High severity**, requires urgent patching before public exposure.

> ⚠️ **Stability Note**: Over 15 open P1/P2 issues involve session state corruption, memory leaks, or irreversible data loss—highlighting systemic risks in long-running agent workflows.

---

### **6. Feature Requests & Roadmap Signals**  
**Top User-Requested Features:**  
- **One-way dispatch mode** ([#44309](https://github.com/openclaw/openclaw/issues/44309)) – Requested since March 2026; enables efficient agent-to-agent handoffs without ping-pong.  
- **Manual team-sidebar agent ordering** ([#155039](https://github.com/openclaw/openclaw/issues/155039)) – Now 8 comments, indicating need for workflow personalization.  
- **Markdown preview in file review** ([#128090](https://github.com/openclaw/openclaw/issues/128090)) – 11 comments, shows demand for richer UX in code collaboration.  
- **Memory slot owner drives Dreams page** ([#138366](https://github.com/openclaw/openclaw/issues/138366)) – Critical for decentralized memory control.  
- **Santa Claws addition to Lobsterdex** ([#199470](https://github.com/openclaw/openclaw/pull/199470)) – Lighthearted but signals cultural engagement.

> 📈 **Prediction**: The next stable release (`v2026.11.6`) will likely include:  
> - One-way dispatch (PR #44309 nearing readiness)  
> - Memory index retry logic (fixing #196505)  
> - Improved plugin install UX (from merged PRs #200392, #200406)

---

### **7. User Feedback Summary**  
Users report frustration with:  
- **Core reliability**: Frequent crashes, hangs, and silent failures (e.g., `gateway stop` failing, update validation errors).  
- **Session persistence**: Loss of context, unexplained state resets, and recall eviction patterns.  
- **Platform-specific bugs**: macOS (process inspection), Windows (Scheduled Task issues), and Linux (heap/memory pressure).  
- **Developer friction**: Poor error messages (e.g., “Invalid URL” for missing modelProvider), lack of diagnostics in dead-letter queues.  
- **Positive sentiment**: Appreciation for incremental UI polish (scrollbars, Markdown previews) and proactive bug fixes in CI/CD pipelines.

> 💬 *"I’ve lost three sessions due to ‘session context snapshot read’ timing out—this is not acceptable for production use."* — @UHDPass

---

### **8. Backlog Watch**  
**Longstanding Issues Needing Attention:**  
- [#112313](https://github.com/openclaw/openclaw/issues/112313): Dead-lettered delivery queue entries are permanent—no clear path to cleanup.  
- [#114414](https://github.com/openclaw/openclaw/issues/114414): Dated TODO sweep—overdue stale code markers still present.  
- [#137613](https://github.com/openclaw/openclaw/issues/137613): Pre-compaction flush disabled on CLI backends—risk of data loss.  
- [#143375](https://github.com/openclaw/openclaw/issues/143375): Scanned PDFs inaccessible without vision model—critical usability gap.  
- [#92473](https://github.com/openclaw/openclaw/issues/92473): Model fallback notices leaking to users—security and UX risk.

> 🔔 **Call to Maintainers**: These issues represent technical debt and operational hazards. Prioritization is needed to avoid feature creep undermining stability.

---

**📌 Final Assessment:**  
OpenClaw is in a **high-intensity stabilization phase**. While innovation continues (UI polish, new features), the backlog of P0/P1 bugs—especially around memory, session state, and platform-specific crashes—poses a real risk to adoption. Immediate focus should shift toward fixing critical regressions and improving diagnostic visibility before the next major release.  

> 🔗 [Full GitHub Activity Dashboard](https://github.com/openclaw/openclaw)

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-17**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in late 2026 is characterized by rapid maturation, divergent architectural philosophies, and increasing operational rigor. Projects are shifting from experimental prototyping toward production-grade reliability, with strong emphasis on session persistence, cross-platform consistency, and cost/security observability. While innovation remains high—especially in plugin extensibility and multi-agent coordination—core stability issues across all major projects indicate that the industry is entering a critical phase of infrastructure hardening before widespread enterprise adoption.

---

### **2. Activity Comparison**

| Project         | Issues (Last 24h) | PRs (Last 24h) | Releases | Health Score (Out of 5) |
|-----------------|-------------------|------------------|----------|----------------------------|
| **OpenClaw**    | 318               | 500              | None     | ⭐⭐⭐☆☆ (3.8)                |
| **Hermes Agent**| 50                | 50               | 2        | ⭐⭐⭐⭐☆ (4.2)                |
| **QwenPaw**     | 46                | 50               | None     | ⭐⭐⭐⭐☆ (4.0)                |
| **ZeroClaw**    | 12                | 50               | None     | ⭐⭐⭐☆☆ (3.9)                |
| **IronClaw**    | 0                 | 0                | N/A      | ⭐⭐☆☆☆ (2.0) *(inactive)*   |

> *Note: OpenClaw leads in volume but reflects instability; Hermes Agent shows balanced growth with recent releases; QwenPaw and ZeroClaw exhibit focused, high-quality development; IronClaw shows stagnation.*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most active project in terms of issue and PR volume, signaling both intense community engagement and systemic instability. Its technical approach emphasizes **deep integration with runtime systems** (e.g., gateway event loops, SQLite WAL, V8 memory management), positioning it as a low-level, high-performance foundation for agent workflows. Compared to peers:
- **Advantages**: Largest contributor base, most comprehensive UI/UX refinements, advanced plugin lifecycle handling.
- **Differentiation**: Focus on **agent state integrity**, **memory leak mitigation**, and **platform-specific crash resolution**—critical for long-running workflows.
- **Community Size**: Significantly larger than others—driven by its role as a reference implementation in many downstream ecosystems.

However, this scale comes at a cost: over 15 open P1/P2 bugs related to session corruption and data loss suggest that OpenClaw may be ahead of itself in feature velocity without commensurate stabilization.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on core operational challenges:

| Need | Projects Affected | Specific Requirements |
|------|-------------------|------------------------|
| **Session Persistence & State Integrity** | OpenClaw, Hermes Agent, QwenPaw | Prevent silent resets, recall evictions, and state corruption during restarts or updates. |
| **Memory & Resource Management** | OpenClaw, QwenPaw, ZeroClaw | Fix heap leaks (~25 MiB/h), prevent indefinite DB growth (`history.db` never shrinks), enforce media byte budgets. |
| **Cost & Billing Transparency** | ZeroClaw, Hermes Agent | Accurate OpenRouter spend tracking, proper fallback behavior when quotas exceed. |
| **Observability & Debuggability** | ZeroClaw, OpenClaw, Hermes Agent | Reduce log noise (e.g., `spawn!` flooding), improve error messages, enable trace recovery after daemon restart. |
| **Plugin & Provider Resilience** | OpenClaw, QwenPaw, Hermes Agent | Handle installation failures gracefully, avoid silent dependency drops, support secure credential isolation. |

These shared pain points indicate a **cross-project maturity threshold**: the ecosystem is now grappling with the same foundational problems—**operational reliability**—rather than just feature novelty.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | IronClaw |
|---------|----------|--------------|---------|----------|----------|
| **Feature Focus** | Core runtime stability, session state, UI polish | Workflow automation, CLI/desktop UX, plugin telemetry | Plugin SDK maturity, resource governance, mid-turn control | Cost enforcement, model registry standardization, security isolation | — (inactive) |
| **Target Users** | Developers building complex agent systems | Power users, contributors, hybrid desktop/cloud workflows | Teams using WeChat/DingTalk, mobile-heavy workflows | Enterprise operators, cost-conscious deployments | — |
| **Technical Architecture** | Monolithic gateway + deep OS-level integration | Modular agents with provider abstraction layer | Multi-channel agent routing with identity-per-workspace | Model registry-driven, zero-trust execution model | — |
| **Innovation Signal** | High-volume incremental fixes | `/implement` commands, remote secret stores | Plugin theme extensions, draft saving | Per-agent dev runners, scoped credentials | — |

> **Key Insight**: OpenClaw is a **foundational platform**; Hermes Agent is a **user-centric productivity tool**; QwenPaw targets **enterprise collaboration**; ZeroClaw is evolving into a **security-first orchestration layer**.

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Characteristics |
|------|--------|----------------|
| **Rapid Iteration** | OpenClaw, QwenPaw, Hermes Agent | High PR/issue ratio; frequent small fixes; active contributor base; strong feedback loops. |
| **Stabilization Phase** | ZeroClaw | Focused on resolving P1/P2 bugs; RFC-driven roadmap; fewer new features, more operational clarity. |
| **Stagnant / Declining** | IronClaw | No activity in 24h; likely abandoned or on hold. |

> **Maturity Trend**: The ecosystem is transitioning from “build everything” to “make it work reliably.” OpenClaw and QwenPaw are still in **high-intensity development mode**, while ZeroClaw is moving toward **production readiness**—a sign of growing ecosystem sophistication.

---

### **7. Trend Signals**  
Based on community feedback and PR trends, the following industry-wide signals emerge:

1. **Operational Reliability > Feature Velocity**  
   - Users consistently report frustration with crashes, silent failures, and lost sessions—indicating that **stability is now the top priority** for developers choosing tools.

2. **Security & Isolation Are Non-Negotiable**  
   - RFCs like per-agent dev runners (#12494), scoped credentials (#12422), and plugin identity management (#8764) show a clear shift toward **zero-trust execution models**—essential for AI-assisted code generation and sensitive workflows.

3. **Resource Governance Is Critical**  
   - Media budget enforcement (#8785), memory cap handling (#185578), and disk space guards (#156593) reflect growing demand for **predictable, bounded AI usage**—key for cost control and system health.

4. **Developer Experience (DX) Is Now a Productivity Lever**  
   - Requests for better error messages, diagnostic visibility, and UI toggles (e.g., old vs new interface) reveal that **developer trust** depends not just on functionality but on **transparency and control**.

5. **Multi-Agent & Multi-Channel Workflows Are Mainstream**  
   - Session ID collisions (#8771), shared workspace conflicts (#8755), and channel-specific bugs (WeChat/DingTalk) confirm that real-world use cases involve **complex, concurrent agent interactions**—not isolated tasks.

---

### ✅ **Strategic Takeaway for Developers & Decision-Makers**  
While innovation continues across the ecosystem, **the next competitive advantage will be operational resilience**. Projects that prioritize:
- **session integrity**
- **cost transparency**
- **resource limits**
- **secure isolation**

will lead in adoption—especially in enterprise and production environments. OpenClaw offers the most extensive foundation, but only if its stability issues are addressed. For teams seeking reliable, secure, and observable AI workflows, **ZeroClaw and Hermes Agent represent stronger bets for near-term deployment**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-17**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 updated pull requests in the past 24 hours—indicating robust community engagement and ongoing development momentum. Two new releases were issued: a patch release (v0.23.2) for stability and a canary build (v0.23.1+canary.20261116T070005Z) reflecting recent integration work. The ecosystem is maturing rapidly, with a strong focus on session integrity, cross-platform compatibility, and infrastructure resilience across desktop, CLI, and cloud environments.

---

### **2. Releases**  
- **[v0.23.2](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.2)** *(Patch Release)*  
  - **Release Date:** November 16, 2026  
  - **Summary:** Rolls up ~1,989 merged PRs since v0.23.1 into a stable release across all platforms: GitHub CLI, Microsoft Store, Docker, and Hermes Cloud.  
  - **Notes:** No breaking changes; intended for general stability and deployment. Full changelog details will be included in **v0.24**.  
  - **Migration:** Minimal action required; users should update via `hermes update` or reinstall via official channels.

- **[v0.23.1+canary.20261116T070005Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261116T070005Z)** *(Canary Build)*  
  - **Release Date:** November 16, 2026  
  - **Summary:** Includes latest experimental features and fixes from main branch for early adopters.  
  - **Use Case:** Testing of upcoming functionality, especially around plugin lifecycle, session management, and agent reliability.  
  - **Download:** Available via [DMG (Apple Silicon)](https://hermes-assets.nousre) and other installers.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):** 6  
Key improvements include:
- **[PR #156787](https://github.com/nousresearch/hermes-agent/pull/156787):** Exposes `hermes_user_agent` to plugins for better telemetry and debugging.
- **[PR #156785](https://github.com/nousresearch/hermes-agent/pull/156785):** Restores Feishu bot tool access after months of outage due to Lark client misconfiguration.
- **[PR #156784](https://github.com/nousresearch/hermes-agent/pull/156784):** Fixes horizontal overflow in group approval cards when long unbroken commands are used.
- **[PR #156782](https://github.com/nousresearch/hermes-agent/pull/156782):** Introduces `/implement` command that runs saved plans—enhancing workflow automation.
- **[PR #156786](https://github.com/nousresearch/hermes-agent/pull/156786):** Fixes Desktop freeze during manual compression by isolating chat-specific operations.
- **[PR #156775](https://github.com/nousresearch/hermes-agent/pull/156775):** Ensures sandbox kill signals don’t terminate entire job chains across backends (Docker, SSH, Modal, etc.).

These reflect a growing emphasis on **user experience polish**, **plugin reliability**, and **desktop performance**.

---

### **4. Community Hot Topics**  
Top 5 most commented issues highlight systemic pain points:

| Issue | Comments | Link | Summary |
|------|---------|------|--------|
| [#131859](https://github.com/nousresearch/hermes-agent/issues/131859) | 61 | [Open] | API fails to create PRs despite working fork/issue flows — likely OAuth/permissions bug affecting contributors. |
| [#119070](https://github.com/nousresearch/hermes-agent/issues/119070) | 27 | [Open] | Kanban card stuck in `blocker_auth` after rate-limited retry — indicates flawed state recovery logic in task dispatchers. |
| [#122609](https://github.com/nousresearch/hermes-agent/issues/122609) | 22 | [Open] | Skills index stale (28.1h old); breaks Docs Hub dependency — shows need for more robust CI freshness checks. |
| [#99943](https://github.com/nousresearch/hermes-agent/issues/99943) | 13 | [Open] | Context compressor silently caps 1M context to 65K on Ollama — serious performance regression risk for large models. |
| [#144413](https://github.com/nousresearch/hermes-agent/issues/144413) | 8 | [Open] | Unicode error crashes sessions when tool results contain lone surrogates — critical for international users. |

> 🔍 **Underlying Needs:** These issues reveal deep concerns around **session persistence**, **state machine correctness**, **cross-platform text handling**, and **infrastructure reliability**—especially under edge cases like network failure, rate limits, or large payloads.

---

### **5. Bugs & Stability**  
Critical bugs reported today, ranked by severity:

| Severity | Issue | Description | Fix PR? |
|--------|------|-------------|--------|
| P1 | [#134469](https://github.com/nousresearch/hermes-agent/issues/134469) | `hermes update` rebuilds venv without plugin deps → silent failures for native providers (e.g., `mnemosyne`) | ❌ No fix yet |
| P2 | [#156665](https://github.com/nousresearch/hermes-agent/issues/156665) | GUI creates session with stale provider → billed incorrectly on OpenRouter for 4 days | ⚠️ Partial fix proposed in PR #156665 |
| P2 | [#156593](https://github.com/nousresearch/hermes-agent/issues/156593) | "No space left on device" despite 103GB free — inode exhaustion bypasses disk guards | ❌ Not fixed |
| P2 | [#136535](https://github.com/nousresearch/hermes-agent/issues/136535) | Lean compaction drops user messages — budget fills newest-first, crowding out key input | ⚠️ Under investigation |
| P2 | [#144413](https://github.com/nousresearch/hermes-agent/issues/144413) | `UnicodeEncodeError` on lone surrogates → session locks in `paused: unknown_execution` | ✅ PR #156784 (partial) addresses related UI rendering issue |

> 🛑 **Stability Alert:** Several high-severity bugs impact **core workflows** (sessions, billing, updates), suggesting urgent attention needed before v0.24.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging trends from user requests indicate future direction:

- **[Feature Request #156670](https://github.com/nousresearch/hermes-agent/issues/156670):** "Keep agent windows off user’s active display" — signals demand for **privacy-preserving automation** on macOS.
- **[Feature Request #156789](https://github.com/nousresearch/hermes-agent/pull/156789):** Desktop screen authority gate — implies interest in **human-in-the-loop security** for sensitive actions.
- **[Feature Request #156782](https://github.com/nousresearch/hermes-agent/pull/156782):** `/implement` runs saved plans — confirms strong desire for **structured AI execution pipelines**.
- **[Feature Request #156779](https://github.com/nousresearch/hermes-agent/pull/156779):** Remote secret store on connector plane — suggests push toward **centralized credential orchestration**.

> 💡 **Predicted v0.24 Inclusions:** Enhanced session safety, remote secrets management, automated plan execution, and improved desktop UX for multi-monitor workflows.

---

### **7. User Feedback Summary**  
Real-world pain points expressed by users:
- **Windows Users:** Frequent plugin import failures (`ModuleNotFoundError`) after `hermes update`, especially with `hindsight` and `solstice`.
- **MacOS Users:** Agent windows unexpectedly pop to front during `computer_use`, disrupting workflow — even in `yolo` mode.
- **Desktop Users:** Image attachments lost during prompt submission; long file paths cause visual overflow in approval cards.
- **Enterprise Users:** Billing errors due to stale provider configs — significant trust issue for paid users.
- **International Users:** Hardcoded English in `/egress` status panel despite language settings — breaks localization.

> ✅ **Satisfaction Indicators:** Positive feedback on new `/implement` feature and improved TTS/audio routing in recent PRs.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues requiring maintainer attention:

| Issue | Age | Comments | Priority | Status |
|------|-----|----------|----------|--------|
| [#131859](https://github.com/nousresearch/hermes-agent/issues/131859) | 75 days | 61 | P3 | Open, blocked |
| [#119070](https://github.com/nousresearch/hermes-agent/issues/119070) | 86 days | 27 | P2 | Open, needs decision |
| [#122609](https://github.com/nousresearch/hermes-agent/issues/122609) | 82 days | 22 | P2 | Open |
| [#99943](https://github.com/nousresearch/hermes-agent/issues/99943) | 107 days | 13 | P2 | Open |
| [#153361](https://github.com/nousresearch/hermes-agent/issues/153361) | 6 days | 2 | P2 | Closed but unresolved root cause |

> ⚠️ **Maintenance Note:** Issues like #153361 show that even closed bugs may have lingering implications — suggest audit of managed worker credential flow.

---

**Project Health Score:** ⭐⭐⭐⭐☆ (4.2/5)  
*High activity, rapid iteration, strong community voice—but several stability risks remain unresolved.*  
**Next Focus:** Stabilize core session and update lifecycle; prioritize P1/P2 bugs before v0.24 release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-17**

---

### **1. Today's Overview**  
QwenPaw exhibits strong community engagement with **46 new issues and 50 pull requests updated in the last 24 hours**, indicating active development and user-driven feedback. The project is in a high-intensity phase of stability refinement, particularly around core runtime behavior, plugin system robustness, and multi-agent/session management. Despite no new releases, multiple critical bug fixes are being merged, suggesting an imminent v2.3.1 patch release. Activity spans desktop, mobile, and channel-specific concerns (WeChat, DingTalk), reflecting broad real-world usage.

---

### **2. Releases**  
❌ **No new releases** detected.  
The latest stable version remains **v2.3.0**, released earlier in November 2026. No migration notes or breaking changes are documented for this release. However, ongoing PRs like #8770 (reject chats until startup completes) and #8785 (media byte budget enforcement) suggest upcoming hotfixes targeting reliability and resource control—likely bundled into a minor release soon.

---

### **3. Project Progress**  
✅ **Merged & Closed PRs (Today):**
- [#8772](https://github.com/agentscope-ai/QwenPaw/pull/8772): *Hardens WeChat delivery and prevents cron reload deadlocks* — resolves race conditions in shared-channel setups.
- [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764): *Expands Plugin SDK 1.1 APIs* — introduces identity, permissions, and lifecycle management; foundational for plugin ecosystem maturity.
- [#8676](https://github.com/agentscope-ai/QwenPaw/pull/8676): *Fixes empty response handling and output limit warnings* — directly addresses issue #8521 (missing replies).
- [#8769](https://github.com/agentscope-ai/QwenPaw/pull/8769): *Prevents CLI relaunch during Windows upgrades* — improves install stability on Windows.
- [#8784](https://github.com/agentscope-ai/QwenPaw/pull/8784): *Ensures rollback backups persist until all workspaces restored* — critical for safe skill updates.

These merges signal a focus on **runtime stability, security isolation, and developer tooling** — key pillars for enterprise-grade agent deployment.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues (by comment count):**
1. **[Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)**: *"Plugin-facing theme extension point (semantic token override layer)"*  
   - **16 comments** — users demand deeper theming control for plugins beyond `colorPrimary`.  
   - **Need**: Customizable UI styling per plugin to support branding and UX consistency across complex workflows.

2. **[Issue #8779](https://github.com/agentscope-ai/QwenPaw/issues/8779)**: *"FAILED remote asset_ingest is terminal — no retry path"*  
   - **1 comment**, but critical: Transient failures (e.g., network) cause permanent 404s due to lack of retry logic.  
   - **Underlying Need**: Resilience in asset ingestion pipelines, especially for AI-generated content (images/models).

3. **[PR #8785](https://github.com/agentscope-ai/QwenPaw/pull/8785)**: *"Enforce inline byte budget and gate media by capability"*  
   - **Top PR by activity** — fixes media handling inconsistencies post-downscale.  
   - **Implication**: Users are hitting limits on image-heavy workflows; need for smarter, configurable media policies.

💡 **Trend Analysis**: Community is increasingly focused on **plugin extensibility**, **resource governance**, and **error resilience** — not just UI polish but system-level robustness.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (Ranked by Severity):**
1. **[Issue #8771](https://github.com/agentscope-ai/QwenPaw/issues/8771)**: *DingTalk session_id collision across 1:1 chats*  
   - **Impact**: All 1:1 conversations in same org share same `session_id` → message confusion, state corruption.  
   - **Status**: Open. **No fix PR yet**. High risk for production use.

2. **[Issue #8776](https://github.com/agentscope-ai/QwenPaw/issues/8776)**: *classify_model_error misclassifies quota-exceeded as bad_request*  
   - **Impact**: Blocks fallback model when primary quota exhausted → "Internal error" instead of graceful failover.  
   - **Fix PR**: [PR #8776](https://github.com/agentscope-ai/QwenPaw/pull/8776) pending review — **critical for multi-provider reliability**.

3. **[Issue #8755](https://github.com/agentscope-ai/QwenPaw/issues/8755)**: *Shared frontend, two agents: credential duplication, one channel runs*  
   - **Impact**: Shared installations break multi-user scenarios.  
   - **Fix PR**: [PR #8756](https://github.com/agentscope-ai/QwenPaw/pull/8756) — scopes WeChat credentials per agent workspace. **High priority**.

4. **[Issue #8773](https://github.com/agentscope-ai/QwenPaw/issues/8773)**: *history.db never shrinks (VACUUM not called)*  
   - **Impact**: DB grows indefinitely → disk exhaustion over time.  
   - **Root Cause**: `auto_vacuum=NONE` in SQLite. **Fix PR pending**.

🟢 **Stability Signal**: Core runtime is under pressure from **multi-agent, multi-channel, and resource-constrained environments** — common in real deployments.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Features (User-Requested, Likely in v2.4):**
- **Mid-turn steering (`send-now`)**: [Issue #8774](https://github.com/agentscope-ai/QwenPaw/issues/8774) — allows users to interrupt long-running agent tasks.  
  ✅ *Working local implementation exists* → likely to be prioritized.
- **Draft saving in qwenpawmail-mcp**: [Issue #8780](https://github.com/agentscope-ai/QwenPaw/issues/8780) → **already implemented in PR #8781** → near-term inclusion.
- **UI toggle between old and new interface**: Repeatedly requested in #8521. Suggests dissatisfaction with current UX performance and layout.
- **Theme customization for plugins**: [Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) — signals desire for plugin-level branding and UX personalization.

📌 **Roadmap Prediction**: Q2 2027 will likely include **plugin SDK 1.1**, **mid-turn controls**, **draft mode**, and **theme extensibility** — positioning QwenPaw as a full-stack agent platform.

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points:**
- **Session loss** (#7724, #7745): Users lose entire conversation history after restart or agent switch — **high frustration** in long-running workflows.
- **Missing responses / thinking-only outputs** (#8521, #8711): Critical for trust in agent reliability; impacts usability in production.
- **Slow UI / laggy interactions** (#8521): Especially on mobile and large chat histories — suggests performance bottlenecks in rendering.
- **Plugin installation failures** (#8595): `No package metadata was found` — blocks adoption of official tools.
- **Persistent bugs in scheduled tasks** (#7480, #8762): Scheduled jobs fail intermittently despite manual success — undermines automation trust.

✅ **Satisfaction Indicators**:  
- Plugin SDK expansion (#8764) is well-received — indicates growing confidence in extensibility.
- Multiple contributors submitting PRs (e.g., @liunux4odoo, @w1tv) show healthy contributor ecosystem.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered High-Impact Items (Need Maintainer Attention):**
- **[Issue #8771](https://github.com/agentscope-ai/QwenPaw/issues/8771)**: *DingTalk session_id collision* — affects multi-user orgs; **no fix PR yet** despite clear root cause.
- **[Issue #8773](https://github.com/agentscope-ai/QwenPaw/issues/8773)**: *SQLite DB never shrinks* — long-term storage risk; **no automated VACUUM** — needs urgent attention.
- **[Issue #8755](https://github.com/agentscope-ai/QwenPaw/issues/8755)**: *Shared agent setup fails* — common use case (family/team sharing); **PR #8756 exists but not merged**.
- **[Issue #8779](https://github.com/agentscope-ai/QwenPaw/issues/8779)**: *Asset ingest failure = terminal* — lacks retry logic; **user workaround required**.

🔔 **Recommendation**: Prioritize these four issues for **v2.3.1** release to prevent data loss, scalability issues, and user churn.

---

> 📌 **Final Assessment**: QwenPaw is at a pivotal stage — rapidly maturing from a prototype tool into a production-grade agent platform. While innovation and contribution are strong, **stability, resiliency, and multi-user support must be elevated** to match the ambition. Immediate focus should be on **bug triage, database hygiene, and session integrity**.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-11-17  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active with a surge in recent development: **50 pull requests** and **12 open issues** updated within the last 24 hours, indicating strong momentum in feature implementation and issue triage. Despite no new releases, significant progress is underway in core areas including cost tracking, provider integration, security policy refinement, and observability improvements. The community is actively engaging with high-severity bugs related to cost enforcement, trace logging, and credential handling—particularly around OpenRouter billing accuracy and daemon stability. This reflects a mature, production-focused ecosystem where reliability and operational visibility are top priorities.

---

### **2. Releases**

❌ **No new releases** were published today or in the past 24 hours.  
The latest stable version remains **0.8.7**, with ongoing development focused on the upcoming **0.9.0** release cycle (targeting `master` at commit `6e8398234`). No breaking changes have been announced for this phase, but several high-risk PRs (e.g., #12450, #12453) suggest foundational refactoring of model routing and registry systems may impact configuration workflows.

---

### **3. Project Progress**

✅ **Merged/Closed PRs (today):** 3  
While full merge details aren't available in the provided data, the following notable PRs were recently closed or merged:

- **[PR #12450]** (`feat(providers): adopt canonical V5 registry`) — Finalizes model registry standardization across providers, enabling exact model referencing and improved fallback logic.
- **[PR #12453]** (`feat(web): edit canonical registry`) — Enables UI-level editing of model references with compare-and-swap semantics.
- **[PR #12452]** (`feat(zerocode): configure canonical provider models`) — Integrates V5 model selection into Zerocode configuration flow.

These three PRs represent a major step toward unifying model identity and routing across ZeroClaw’s ecosystem—critical for multi-provider deployments and auditability.

---

### **4. Community Hot Topics**

🔥 **Top Issues by Engagement (Last 24h):**

| Issue | Title | Comments | Severity | Link |
|------|-------|----------|----------|------|
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter spend shows $0.00; all tokens labeled "free tok" | 6 | S2 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) |
| [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | `cost.enforcement.mode` ignored — always blocks turns even in "warn" mode | 1 | S1 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) |
| [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | Gateway logs every connection at INFO via `spawn!`, flooding trace | 1 | S2 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) |

🔍 **Underlying Needs Analysis:**  
The top issues reveal a critical tension between **operational transparency** and **financial control**:
- Users cannot trust cost monitoring due to incorrect reporting (OpenRouter), undermining budgeting.
- Cost enforcement is rigidly blocking instead of warning—indicating misalignment between intended behavior and implementation.
- Logging verbosity threatens observability, suggesting a need for fine-grained log filtering in production environments.

This signals growing pains in scaling ZeroClaw for enterprise use, where accountability, audit trails, and predictable behavior are essential.

---

### **5. Bugs & Stability**

🚨 **High-Priority Bugs Reported (Today):**

| Issue | Description | Severity | Status | Fix PR? |
|------|-------------|----------|--------|---------|
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter cost not ingested; all tokens marked as free | S2 | Accepted | ❌ No PR yet |
| [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | `cost.enforcement.mode` ignored — always blocks | S1 | Accepted | ❌ No PR yet |
| [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | Gateway floods logs with `spawn!` INFO messages | S2 | Accepted | ❌ No PR yet |
| [#12491](https://github.com/zeroclaw-labs/zeroclaw/issues/12491) | `runtime-trace.jsonl` loses hours during daemon restarts | S2 | Accepted | ❌ No PR yet |
| [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | Cost limit can only be cleared via daemon restart | S2 | In-progress | ❌ No PR yet |

📌 **Stability Concerns:**  
Multiple critical bugs affect **observability**, **cost tracking**, and **daemon resilience**. Notably:
- The **OpenRouter cost ingestion failure** (#11204) risks financial mismanagement in production workloads.
- The **tracing gap** (#12491) undermines debugging capabilities during outages.
- **Cost enforcement bypasses config** (#12477) contradicts design intent and breaks workflow continuity.

All are marked “accepted” but lack fix PRs—suggesting potential bottlenecks in triage or resource allocation.

---

### **6. Feature Requests & Roadmap Signals**

🚀 **Emerging Features with Strong Community Demand:**

| Feature | Requested By | Summary | Roadmap Signal |
|--------|--------------|--------|----------------|
| [RFC #12494](https://github.com/zeroclaw-labs/zeroclaw/issues/12494) | CastelloBrancoTecnologia | Per-agent isolated dev build runner | ✅ Security-first architecture shift |
| [RFC #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | CastelloBrancoTecnologia | Scoped operator-managed service credentials | ✅ Enabling zero-trust agent execution |
| [Issue #12373](https://github.com/zeroclaw-labs/zeroclaw/issues/12373) | CastelloBrancoTecnologia | Write-only WebUI credential management | ✅ Operator-controlled secrets pipeline |

💡 **Prediction:** These RFCs point to **next-gen security hardening** in the 0.9.0+ roadmap. Expect tighter isolation, role-based secret access, and secure execution sandboxes—especially for agents performing code builds or external API calls.

---

### **7. User Feedback Summary**

💬 **Real User Pain Points (From Issues & PRs):**

- **“I can’t trust my OpenRouter costs.”** – Multiple users report `$0.00` spend despite heavy usage (#11204). This erodes confidence in cost governance.
- **“My agent gets stuck after hitting a daily limit.”** – Users must restart the daemon to resume, losing live sessions (#11585). High friction for long-running workflows.
- **“I want to run untrusted code safely.”** – Developers request isolated build runners (#12494), revealing demand for sandboxed AI-assisted development.
- **“I don’t know what’s happening inside my agent.”** – Silent failures in transcription (#12198) and missing thinking settings in dashboard (#12492) indicate poor visibility.

📉 **Satisfaction Level:** Mixed. While technical depth is impressive, usability gaps in **cost visibility**, **error feedback**, and **configuration clarity** are emerging as key pain points.

---

### **8. Backlog Watch**

⏳ **Long-Unanswered Critical Issues (≥30 days, high risk):**

| Issue | Age | Risk | Status | Notes |
|------|-----|------|--------|-------|
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | 2026-08-18 (~90 days) | High | In-progress | Retire `StoragePolicy::Rolling`; performance regression under sustained load |
| [#12494](https://github.com/zeroclaw-labs/zeroclaw/issues/12494) | 2026-11-16 (new) | High | Accepted | Per-agent dev runner — security-critical |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | 2026-11-14 (new) | High | Accepted | Scoped service credentials — critical for secure deployment |

⚠️ **Action Required:**  
- **#10073** has been in progress since August 2026—despite high risk, it lacks visible movement. Should be prioritized.
- **#12494 & #12422** are newly opened but carry high security implications. Their acceptance suggests they’re being considered, but no assigned maintainers or timelines.

---

### ✅ **Overall Project Health Assessment**

🟢 **Strengths:**  
- High velocity in PRs and issue resolution (50 PRs in 24h).  
- Strong focus on security, observability, and configuration robustness.  
- Clear alignment between user needs and roadmap (e.g., credential isolation).

🟡 **Risks:**  
- Several high-severity bugs remain unresolved despite being accepted.  
- Critical features like cost enforcement and tracing suffer from silent failures.  
- Long-standing backlog items (e.g., #10073) indicate potential maintenance debt.

🔴 **Recommendation:** Prioritize **cost tracking integrity** and **daemon persistence** fixes before next release. Accelerate review of high-impact RFCs to guide 0.9.0 planning.

---  
*Digest generated: 2026-11-17 | Source: GitHub activity (zeroclaw-labs/zeroclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*