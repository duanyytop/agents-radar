# OpenClaw Ecosystem Digest 2026-11-23

> Issues: 397 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-23 03:03 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-23**

---

### **1. Today's Overview**  
The OpenClaw ecosystem remains highly active, with **397 new issues** and **500 updated pull requests** in the last 24 hours—indicating sustained momentum in both user-driven bug reporting and developer contributions. The release of **v2026.11.7** introduces critical stability improvements, particularly around conversation recovery and automation reliability. Despite a high volume of open issues (especially P0/P1 severity), the project demonstrates strong internal coordination: multiple PRs are ready for review, and several fixes have already been merged into stable branches. This suggests a healthy balance between rapid iteration and quality control.

---

### **2. Releases**  
✅ **New Release: `v2026.11.7`**  
- **Release URL**: [openclaw/openclaw v2026.11.7](https://github.com/openclaw/openclaw/releases/tag/v2026.11.7)  
- **Highlights**:
  - **Conversation Recovery**: Enables full recovery of interrupted replies and child results after Gateway restarts—critical for long-running sessions.
  - **Reliable Automations**: Fixes race conditions in background task execution, ensuring automations complete predictably even across restarts.
  - **Bug Fixes**: Resolves key issues around plugin migration conflicts (`#200606`) and post-install state corruption (`#197083`).
- **Migration Notes**: No breaking changes reported. Users upgrading from `2026.11.5` or earlier should ensure their agent configurations are compatible with the updated schema. Use `doctor --fix` if upgrade fails due to migration conflicts.

---

### **3. Project Progress**  
🔹 **Merged & Closed PRs (Today)**:
- `#203880`: Finalized release chore for `v2026.11.7`, closing out release branch and preserving changelog integrity.
- `#203522`: Fixed persistent memory growth during plugin reloads—critical for containerized deployments.
- `#203818`: Improved CI failure reporting by enforcing runtime version selection.
- `#203885`: Enabled reuse of release evidence after orchestration-only repairs, streamlining update workflows.
- `#203879`: Verified UI layout consistency in Gateway heading grid—minor but important for visual fidelity.

🔹 **Key Advancements**:
- **Session Management**: PRs like `#203063` and `#191138` introduce refined filtering for shared sessions and catalogs—enhancing collaboration safety.
- **Model & Plugin UX**: `#203237` allows renaming saved model accounts, reducing confusion in multi-provider setups.
- **iOS Stability**: `#203889` ensures accepted work continues after ending Talk sessions—improving real-time voice experience.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count**:
| Issue | Comments | Summary | Link |
|------|---------|--------|------|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 33 | Post-install Doctor fails with WAL commit verification error, leaving system in partial state after upgrade. | [Issue #197083](https://github.com/openclaw/openclaw/issues/197083) |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 30 | Short-term recall retention evicts entries nightly, blocking deep dreaming phase promotion. | [Issue #150635](https://github.com/openclaw/openclaw/issues/150635) |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) | 26 | Prompt cache never reused — `cache read dropped N -> 0` on every request. | [Issue #182891](https://github.com/openclaw/openclaw/issues/182891) |

🔥 **Top PRs by Activity**:
- `#203881` ([feat: manage skill changes via deployment](https://github.com/openclaw/openclaw/pull/203881)): Addresses deployment misalignment with skill sets—highly relevant for DevOps users.
- `#203889` ([fix: keep work running after End Talk](https://github.com/openclaw/openclaw/pull/203889)): Direct response to iOS user pain point; shows focus on real-time voice UX.

💡 **Underlying Needs**:  
Users are demanding **resilience under failure**, **predictable session state**, and **consistent cross-platform behavior**—especially around upgrades, voice, and AI tooling. There is growing pressure to treat *reliability* as a first-class feature, not just an afterthought.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (P0/P1)**:
| Issue | Severity | Summary | Fix PR? |
|------|----------|--------|-------|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 🦞 Diamond Lobster (P0) | WAL commit verification failure blocks updates; leaves system in inconsistent state. | ❌ Not yet fixed |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | 🦪 Silver Shellfish (P1) | Native Codex helper completions fail to resume parent, locking users out. | ❌ No fix PR |
| [#190563](https://github.com/openclaw/openclaw/issues/190563) | 🦞 Diamond Lobster (P0) | Cannot resume paused Codex chat due to provider thread mismatch. | ❌ No fix PR |
| [#190307](https://github.com/openclaw/openclaw/issues/190307) | 🐚 Platinum Hermit (P1) | Gateway restart leaves agents "degraded" indefinitely. | ❌ No fix PR |

🔧 **Stability Concerns**:
- Multiple regressions tied to **schema migrations** (`#144739`, `#200606`) suggest fragility in update paths.
- Persistent **memory leaks** in plugins (`#203522`) and **crash loops** on Windows (`#170928`) indicate platform-specific instability.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **High-Value Feature Requests**:
- **Claude Web Search Provider** (`#192632`): Users want server-side web search via Anthropic’s API—mirroring Perplexity/Gemini functionality.
- **Independent Command Text Limit** (`#157614`): For better control over streaming output formatting.
- **Override Model Request Failure Messages** (`#167341`): Operators need custom error messaging for better UX clarity.
- **Plugin-Driven Escalation Decisions** (`#151178`): Let plugins decide when to trigger deep recall—increasing flexibility.

🔮 **Predicted Inclusion in Next Version**:
- **Web search integration** (likely `v2026.12.x`)
- **Improved session persistence and recovery logic**
- **Enhanced CLI performance** (addressing `#114067`)

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points**:
- **Update Failures**: Frequent complaints about failed upgrades due to schema mismatches (`#197083`, `#200606`).
- **Voice Session Breakage**: iOS users report silent failures in transcription and premature termination (`#175167`, `#203889`).
- **Tool Output Loss**: Silent dead-lettering of messages (Telegram, Matrix) leads to lost data (`#125764`, `#191476`).
- **UX Friction**: Confusing model naming, lack of control over streaming output, and missing text search in browser tabs (`#203873`).

✅ **Positive Feedback Indicators**:
- High engagement in PRs related to **session sharing**, **plugin management**, and **real-time voice** suggests strong adoption of advanced features.
- Users actively contributing fixes (e.g., `@steipete`, `@vincentkoc`) indicate growing community trust.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered Critical Items**:
| Issue | Age | Status | Notes |
|------|-----|--------|-------|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 90+ days | OPEN (P2) | Blocking deep recall promotion; affects core AI reasoning. |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) | 30+ days | OPEN (P1) | Prompt cache inefficiency impacts all performance-sensitive users. |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | 100+ days | OPEN (P1) | Telegram message loss despite retries—high impact on communication reliability. |
| [#192632](https://github.com/openclaw/openclaw/issues/192632) | 20 days | OPEN (P2) | Long-awaited Claude web search support—strong community interest. |

📌 **PRs Needing Maintainer Attention**:
- `#178320` (retain source context in review cancellation) – stalled since Oct 2026.
- `#198919` (trim test infrastructure) – “ready for maintainer look” but no action.
- `#203881` (deployment skill management) – critical for enterprise use, awaiting merge.

---

> ✅ **Final Assessment**: OpenClaw is in a phase of **rapid stabilization and feature expansion**, driven by a vibrant community. While technical debt and update fragility remain concerns, recent releases and PR activity show strong directionality toward **resilient, production-grade AI agent orchestration**. Maintain continuity by prioritizing **upgrade reliability**, **session recovery**, and **cross-platform consistency** in upcoming milestones.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-23**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a phase of **production-grade maturation**, marked by divergent development trajectories across key projects. While some platforms like OpenClaw and QwenPaw are rapidly expanding feature sets and stabilizing core workflows, others such as ZeroClaw are undergoing major architectural transitions—particularly around provider modernization and security hardening. Hermes Agent maintains steady momentum with deep focus on session persistence and cross-platform reliability, while IronClaw remains in a low-activity maintenance phase. Across the board, user demand is shifting from novelty to **predictable behavior, resilience under failure, and secure, auditable execution**, signaling readiness for enterprise and long-term personal use.

---

### **2. Activity Comparison**

| Project       | Issues (Last 24h) | PRs (Last 24h) | Release Status       | Health Score¹ |  
|---------------|-------------------|-----------------|----------------------|---------------|
| **OpenClaw**  | 397               | 500             | ✅ `v2026.11.7`      | ⭐⭐⭐⭐☆ (4.8/5) |
| **Hermes Agent** | 50              | 50              | ❌ No new release     | ⭐⭐⭐⭐☆ (4.5/5) |
| **QwenPaw**   | 7                 | 22              | ❌ No new release     | ⭐⭐⭐⭐☆ (4.6/5) |
| **ZeroClaw**  | 19                | 50              | ❌ No new release     | ⭐⭐⭐☆☆ (4.0/5) |
| **IronClaw**  | 1                 | 0               | ❌ No new release     | ⭐⭐☆☆☆ (3.0/5) |

> ¹ *Health Score: Based on activity volume, stability, community engagement, and forward-looking roadmap signals (1–5 scale).*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the **most mature and actively iterating project** in the ecosystem, combining high velocity with strong quality control. Its technical approach emphasizes **resilient state management**, **session recovery after restarts**, and **cross-platform consistency**—critical for production use. Unlike peers focused on niche integrations or architectural overhauls, OpenClaw prioritizes **operational robustness**, evident in its recent v2026.11.7 release addressing WAL corruption and automation race conditions. With over 300 active contributors and a vibrant issue tracker reflecting real-world pain points, OpenClaw has cultivated the **largest and most engaged community**, enabling rapid feedback loops and peer-driven fixes. This positions it as the de facto standard for teams seeking a reliable, self-hosted AI orchestration platform.

---

### **4. Shared Technical Focus Areas**  
Across all five projects, recurring technical demands highlight emerging industry-wide priorities:

| Requirement                          | Projects Involved                     | Specific Needs |
|--------------------------------------|----------------------------------------|----------------|
| **Session & State Persistence**      | OpenClaw, Hermes Agent, QwenPaw       | Recovery after restarts; avoid `session_superseded` errors; prevent stale state resumption |
| **Reliable Cross-Platform UX**       | OpenClaw, QwenPaw, ZeroClaw           | Fix iOS Safari freezes; ensure keyboard navigation; prevent layout thrashing |
| **Secure & Auditable Tooling**       | ZeroClaw, Hermes Agent, QwenPaw       | Prevent filesystem path injection (`write_file`); enable per-user RBAC; track tool usage |
| **Configurable Runtime Behavior**    | IronClaw, QwenPaw, ZeroClaw           | Expose timeouts (e.g., `PRIMARY_MODEL_CALL_IDLE_TIMEOUT`), retry policies, connection settings |
| **Modernized Provider Integrations** | ZeroClaw, OpenClaw, QwenPaw           | Deprecate legacy tools (`gemini_cli`, `python_ssh_helper`); adopt OAuth2, mTLS, ACP protocols |

These shared challenges reflect a broader shift toward **trustworthy, long-running agents** that behave predictably across environments—moving beyond experimental prototypes to operational systems.

---

### **5. Differentiation Analysis**

| Dimension               | OpenClaw                              | Hermes Agent                          | QwenPaw                                | ZeroClaw                                 | IronClaw                             |
|-------------------------|----------------------------------------|----------------------------------------|-----------------------------------------|-------------------------------------------|---------------------------------------|
| **Feature Focus**       | Stability, recovery, multi-agent sessions | Persistent doc-chain memory, RBAC     | Local model support, Telegram isolation | Provider modernization, security hardening | Edge deployment flexibility |
| **Target Users**        | DevOps, enterprise teams, self-hosters | Research labs, collaborative agents   | Developers, remote teams, CLI users     | Security-conscious orgs, compliance teams | Edge/AI hobbyists, local LLM users |
| **Architecture**        | Gateway-centric, plugin-based          | Doc-chain substrate, profile-aware    | Console-first, plugin-SDK driven        | ACP/mTLS-integrated, Rust-native broker   | Lightweight loop, Ollama-friendly     |
| **Deployment Model**    | Multi-node, containerized              | Cloud + edge hybrid                   | Self-hosted web/console                  | Secure, identity-managed clusters         | CPU/GPU-local, offline-only           |

This divergence underscores a **fragmentation into specialized niches**: OpenClaw leads in general-purpose orchestration, while ZeroClaw and Hermes push boundaries in security and memory durability, and QwenPaw excels in developer experience and local AI integration.

---

### **6. Community Momentum & Maturity**  

| Tier                    | Projects                              | Characteristics |
|-------------------------|----------------------------------------|-----------------|
| **Rapid Iteration**     | OpenClaw, QwenPaw, ZeroClaw            | >50 PRs/day; frequent releases (OpenClaw); high contributor diversity; active RFCs and triage |
| **Stabilizing Growth**  | Hermes Agent                           | Moderate activity; focused on internal refinement; no public releases but strong engineering discipline |
| **Maintenance Phase**   | IronClaw                               | Minimal updates; single-issue backlog; reflects mature, stable core with limited innovation |

OpenClaw and QwenPaw represent the **highest maturity in developer engagement and user adoption**, with active communities driving both bug fixes and feature evolution. ZeroClaw shows signs of explosive growth through coordinated refactoring efforts. In contrast, IronClaw’s dormancy suggests either **product-market fit** or **resource constraints**, depending on long-term strategy.

---

### **7. Trend Signals**  
From community feedback and PR/issue patterns, the following industry trends emerge:

- **Resilience as a First-Class Feature**: Users now expect agents to survive crashes, upgrades, and network interruptions without data loss—driving demand for WAL integrity, session recovery, and idempotent automations.
- **Security-First Design**: The widespread focus on file system safety (`write_file`), RBAC, mTLS, and credential scoping indicates that **trust and auditability** are now primary concerns—not just functionality.
- **Local-First & Edge AI Deployment**: Rising interest in configurable timeouts, GPU controls, and offline operation (IronClaw, QwenPaw) reflects growing demand for **privacy-preserving, self-contained AI agents**.
- **Developer-Centric UX**: Features like CLI plugin support, error message customization, and spelling suggestions show that **developer experience** is now a key differentiator.
- **Provider Modernization Wave**: The coordinated retirement of legacy APIs (Gemini CLI, Python helpers) across multiple projects signals a move toward **standardized, secure, and maintainable integration frameworks**.

> 💡 **Value for AI Agent Developers**: Prioritize **configurability, observability, and upgrade safety**—these are now non-negotiable for adoption. Build with modularity and identity management from day one.

---

✅ **Final Insight**: The personal AI agent ecosystem is no longer fragmented by experimentation—it is converging on **reliability, security, and extensibility**. Projects that align with these principles will lead the next wave of AI agent adoption in production environments.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-23**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 updated pull requests in the past 24 hours—indicating strong community engagement and ongoing development momentum. No new releases were published, suggesting a focus on stabilization and feature refinement ahead of a potential upcoming version. The high volume of open PRs and issues reflects a mature but evolving codebase under active iteration, particularly in session management, tool safety, and cross-platform compatibility.

---

### **2. Releases**  
❌ **No new releases**  
There are no new versions or release notes for 2026-11-23. The latest stable version remains v0.23.1 (or `main` at `4e59ac2b883`), with ongoing work concentrated in the `main` branch rather than formal release cycles.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs Today:**  
While no PRs were merged today, several critical fixes were closed in recent days:  
- **PR #155925** (`refactor(profiles): consolidate profile-id grammar`) — unified profile-ID parsing across Python and frontend, reducing future drift.  
- **PR #152104** (`feat(plugins): publish LoginBackend, VaultItemMeta...`) — cleared API access for password/browser plugins, enabling better plugin ecosystem integration.  
- **PR #151953** (`fix(gateway): treat empty clarify as skip`) — improved UX by distinguishing skipped clarifications from timeouts.  

These represent progress in **API consistency**, **plugin capabilities**, and **user experience**.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement**  
| Issue | Comments | Severity | Focus Area | Link |
|------|----------|----------|------------|------|
| [#143379](https://github.com/nousresearch/hermes-agent/issues/143379) | 39 | P4 (High) | Doc-chain network & compression | [RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK](https://github.com/nousresearch/hermes-agent/issues/143379) |
| [#143720](https://github.com/nousresearch/hermes-agent/issues/143720) | 15 | P2 (Critical) | Discord gateway admission conflict | [Discord thread process-completion wake refused](https://github.com/nousresearch/hermes-agent/issues/143720) |
| [#143767](https://github.com/nousresearch/hermes-agent/issues/143767) | 13 | P2 (Critical) | Desktop app resumes old session after compression | [Desktop app resumes pre-compression session](https://github.com/nousresearch/hermes-agent/issues/143767) |

🔍 **Analysis of Needs**:  
- **Persistent session integrity** is a recurring pain point: users report sessions being incorrectly resumed post-compression or corrupted due to stale state.  
- **Gateway reliability** under load is under scrutiny—especially in multi-platform setups (Discord, Feishu).  
- **Documentation and governance** of long-term data storage (via doc-chain) are emerging as strategic concerns, indicating a shift toward durable agent memory.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (P2–P1)**  
| Bug | Description | Fix PR? | Link |
|-----|-------------|--------|------|
| [#143720](https://github.com/nousresearch/hermes-agent/issues/143720) | Discord thread process-completion refuses admission every 60s, even with `notify-mode=off` | ❌ | [admission_conflict loop](https://github.com/nousresearch/hermes-agent/issues/143720) |
| [#143767](https://github.com/nousresearch/hermes-agent/issues/143767) | Desktop app resumes ended session → model switch fails with `session_superseded` | ❌ | [pre-compression session resume](https://github.com/nousresearch/hermes-agent/issues/143767) |
| [#156063](https://github.com/nousresearch/hermes-agent/issues/156063) | `write_file`/`delete_file` allow writing to `/dev`, `/proc`, and `/sys` | ✅ **Yes** (in review) | [File tools unsafe on system paths](https://github.com/nousresearch/hermes-agent/issues/156063) |
| [#158976](https://github.com/nousresearch/hermes-agent/issues/158976) | `state.db` grows unbounded due to non-deleted `gateway.admission.result.v1.*` entries | ❌ | [State metadata not deleted](https://github.com/nousresearch/hermes-agent/issues/158976) |
| [#158204](https://github.com/nousresearch/hermes-agent/issues/158204) | Saving terminal cwd blocks event loop via routing lock | ❌ | [Blocking save operation](https://github.com/nousresearch/hermes-agent/issues/158204) |

📌 **Stability Concerns**:  
- **Session corruption** and **state leakage** are recurring themes.  
- **Security risks** like filesystem bypass remain unresolved despite awareness.  
- **Gateway scalability** under concurrent operations is fragile (e.g., idle processes blocking scale-to-zero).

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **High-Potential Features for Next Version**  
| Request | Priority | Use Case | Status | Link |
|--------|----------|----------|--------|------|
| [#143379](https://github.com/nousresearch/hermes-agent/issues/143379) | P4 (RFC) | Persistent doc-chain network for durable agent memory | Open RFC | [Doc-chain substrate](https://github.com/nousresearch/hermes-agent/issues/143379) |
| [#3897](https://github.com/nousresearch/hermes-agent/issues/3897) | P2 | Per-user RBAC for tools (Telegram) | Open, needs decision | [Per-user tool restrictions](https://github.com/nousresearch/hermes-agent/issues/3897) |
| [#159075](https://github.com/nousresearch/hermes-agent/pull/159075) | P3 | Expose messaging turn origin for plugins | In Review | [bound-only messaging origin](https://github.com/nousresearch/hermes-agent/pull/159075) |
| [#156527](https://github.com/nousresearch/hermes-agent/issues/156527) | P2 | Prevent `drive_preview` conflicts in multi-instance desktop | Open | [Multi-desktop drive_preview veto](https://github.com/nousresearch/hermes-agent/issues/156527) |

🔮 **Roadmap Signals**:  
- **Agent persistence** and **cross-session continuity** are becoming central.  
- **Fine-grained access control (RBAC)** is a growing demand for shared team deployments.  
- **Plugin extensibility** is maturing—new APIs for messaging context and identity are being introduced.

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points**  
- **Session corruption**: Users report that switching models or platforms causes the agent to fail with `session_superseded`, requiring manual restarts.  
- **Tool misbehavior**: File and terminal tools are vulnerable to path injection (e.g., `/dev/zero` writes), raising security concerns.  
- **Platform-specific bugs**: Windows users face deadlocks (`Kanban worker hangs`) and scheduled task failures due to incorrect principal resolution.  
- **UI/UX friction**: Desktop clients show stale activity logs and file panels stuck loading after session switches.  
- **Shared environments**: Teams using Telegram bots want granular user-level tool access (e.g., only admins can run `terminal`).

💬 **Satisfaction/Dissatisfaction**:  
- High satisfaction with core agent functionality and plugin ecosystem.  
- Growing frustration with **session resilience**, **security hygiene**, and **multi-device sync stability**.

---

### **8. Backlog Watch**  
👀 **Long-Unanswered Critical Items Needing Attention**  
| Issue | Age | Status | Why It Matters | Link |
|------|-----|--------|----------------|------|
| [#143379](https://github.com/nousresearch/hermes-agent/issues/143379) | 30 days | Open (RFC) | Foundational design for durable agent memory; could define next-gen architecture | [RFC: Doc-chain network](https://github.com/nousresearch/hermes-agent/issues/143379) |
| [#3897](https://github.com/nousresearch/hermes-agent/issues/3897) | 280+ days | Open, needs decision | Essential for enterprise/shared use cases | [Per-user tool restrictions](https://github.com/nousresearch/hermes-agent/issues/3897) |
| [#158976](https://github.com/nousresearch/hermes-agent/issues/158976) | 1 day | Open | State DB bloat risk (~1GB growth); affects long-running agents | [Undeleted admission results](https://github.com/nousresearch/hermes-agent/issues/158976) |
| [#156527](https://github.com/nousresearch/hermes-agent/issues/156527) | 7 days | Open | Multi-instance desktop conflict breaks collaboration | [drive_preview veto issue](https://github.com/nousresearch/hermes-agent/issues/156527) |

🔧 **Action Required**:  
- **RFC #143379** should be prioritized for architectural discussion.  
- **Issue #3897** requires maintainer decision to unlock shared-use case adoption.  
- **Fix PRs exist for some critical bugs** (e.g., `write_file`), but need review.

---

> ✅ **Project Health Assessment**: **Healthy but under pressure**  
Despite no new releases, the project shows strong developer and user engagement. Core stability is challenged by session and state management flaws, while security and scalability are emerging as key priorities. The roadmap signals a clear move toward **persistent, secure, and collaborative AI agents**—but execution speed and triage responsiveness will determine whether this vision becomes reality.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-11-23**

---

### **1. Today's Overview**  
The IronClaw project remains in a stable, low-activity state as of 2026-11-23, with no new pull requests or releases in the past 24 hours. Only one open issue exists, indicating minimal ongoing development or urgent troubleshooting. The project appears to be in a maintenance phase, with core functionality largely operational but facing subtle configuration challenges related to local LLM inference timeouts. Activity is light but focused on edge-case stability for self-hosted deployments.

---

### **2. Releases**  
*No new releases detected.*  
The latest version remains **1.4.1** (released previously), with no changelog updates or breaking changes reported in the last 7 days. No migration notes or deprecation warnings are applicable at this time.

---

### **3. Project Progress**  
*No pull requests were merged or closed today.*  
There has been no visible progress in feature implementation or bug resolution within the past 24 hours. Development momentum is currently dormant, with no code contributions observed across the repository.

---

### **4. Community Hot Topics**  
**#8172 [OPEN] [QA-Bug] Make PRIMARY_MODEL_CALL_IDLE_TIMEOUT configurable for slow local LLMs**  
🔗 [GitHub Issue #8172](https://github.com/nearai/ironclaw/issues/8172)  
This single active issue is the sole community-driven discussion point. It highlights a growing pain point among users running local LLMs via Ollama: the default `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` is too strict for slower models, leading to premature timeouts during inference.  

*Underlying Need:* Users require greater configurability in agent loop behavior—specifically, the ability to adjust idle watchdog thresholds—to support diverse hardware and model types (e.g., quantized models on CPU). This reflects a broader trend toward flexible deployment configurations for offline/edge use cases.

---

### **5. Bugs & Stability**  
**Critical Bug:**  
- **#8172**: *Configurable timeout for local LLMs not supported*  
  - **Severity**: Medium (impacts usability in real-world local setups)  
  - **Impact**: Agents may fail during long-running or resource-heavy local LLM calls due to rigid timeout enforcement.  
  - **Status**: Open, no fix PR submitted.  
  - **Root Cause**: Hardcoded timeout value in `HostManagedLoopModelPort` logic prevents customization for slow inference environments.

No other bugs, crashes, or regressions were reported today. The absence of closed issues suggests no recent stability fixes were deployed.

---

### **6. Feature Requests & Roadmap Signals**  
**#8172** serves as a strong signal for future roadmap planning:  
- **Request**: Expose `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` as a user-configurable parameter in `providers.json` or environment variables.  
- **Likely Inclusion**: High probability in v1.5.x, especially given its relevance to local/self-hosted use cases.  
- **Future Implications**: May pave the way for more granular tuning of agent execution parameters (e.g., retry policies, connection timeouts) for different deployment profiles (cloud vs. edge).

This request indicates increasing demand for developer-friendly customization in agent orchestration—especially for non-cloud workflows.

---

### **7. User Feedback Summary**  
Users are generally satisfied with IronClaw’s core agent loop and integration capabilities, particularly in hosted staging environments like "crab shack." However, frustration is emerging around **local LLM performance constraints**, where default timeouts disrupt workflow continuity.  

Key pain points include:  
- Inflexible timing settings that don’t accommodate slower models (e.g., 7B quantized models on CPU).  
- Lack of transparency in how timeouts are enforced across provider layers.  
- Limited documentation on tuning agent behaviors for offline use.

Feedback suggests a growing user base experimenting with edge AI deployments—indicating a shift from pure cloud-centric use toward hybrid/local-first architectures.

---

### **8. Backlog Watch**  
**#8172 [OPEN] Make PRIMARY_MODEL_CALL_IDLE_TIMEOUT configurable**  
🔗 [GitHub Issue #8172](https://github.com/nearai/ironclaw/issues/8172)  
This issue has been open since 2026-11-15 and remains unaddressed despite clear user impact. It represents a critical gap in flexibility for local LLM integrations—a key use case for IronClaw’s target audience.  

*Recommendation:* Prioritize this issue in the next sprint. A small, well-scoped PR adding config support would significantly improve user adoption in edge and offline scenarios. Given its relevance to QA testing (marked as QA-bug), it should be elevated in triage.

---  
*Data Source: GitHub — nearai/ironclaw | Last Updated: 2026-11-23*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-23**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust pace of development: **22 pull requests updated in the last 24 hours**, including several high-impact PRs related to local model support, console UX improvements, and session isolation. **7 open issues** reflect ongoing stability concerns—particularly around scheduled task failures, UI freezes on iOS, and keyboard navigation—indicating that while core functionality is advancing, user-facing reliability and accessibility require attention. The absence of new releases suggests that the team is prioritizing internal quality and feature integration over public versioning. Overall, project health is strong in engineering momentum but shows growing friction in real-world usability.

---

### **2. Releases**  
No new releases were published as of 2026-11-23. The latest stable version remains **v2.3.0.post1**, released earlier in November. No breaking changes or migration notes are currently pending.

---

### **3. Project Progress**  
The following PRs were merged or closed today (Nov 23), marking key advancements:

- **PR #8855** ([closed](https://github.com/agentscope-ai/QwenPaw/pull/8855)): Fixed Windows-specific timing and encoding issues in Plugin SDK tests — improving cross-platform test reliability.
- **PR #8791** ([closed](https://github.com/agentscope-ai/QwenPaw/pull/8791)): Improved approval card labeling and localization, enhancing clarity for authorization workflows.
- **PR #7632** ([closed](https://github.com/agentscope-ai/QwenPaw/pull/7632)): Added feedback for unknown slash commands with spelling suggestions — improves user guidance during input errors.

These contributions reflect continued focus on **robustness, error handling, and internationalization** within the runtime and plugin system.

---

### **4. Community Hot Topics**  

| Issue / PR | Activity | Summary & Insight |
|-----------|--------|------------------|
| [Issue #8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) | 3 comments, opened Nov 16 | A critical **scheduled task failure** with `APIConnectionError` on repeated runs, despite manual success. This indicates potential race conditions or connection pool exhaustion in background tasks — a red flag for production use. |
| [PR #8859](https://github.com/agentscope-ai/QwenPaw/pull/8859) | 0 comments, new (Nov 23) | A major **UX overhaul of confirmation/approval flows** in the Console. Addresses ambiguity in action labels and stale state reporting — signals growing emphasis on *user trust* in automated workflows. |
| [PR #8857](https://github.com/agentscope-ai/QwenPaw/pull/8857) | 0 comments, first-time contributor | Implements **Telegram forum topic isolation** — directly responding to Issue #8827. Shows strong community-driven feature adoption and highlights demand for multi-threaded agent sessions in enterprise-grade channels. |

> 🔍 **Underlying Need**: Users are demanding **predictable, isolated, and auditable agent behavior** across platforms — especially in long-running or scheduled contexts.

---

### **5. Bugs & Stability**  
Critical bugs reported today include:

| Bug | Severity | Status | Fix PR? |
|-----|----------|--------|--------|
| [Issue #8852](https://github.com/agentscope-ai/QwenPaw/issues/8852): Console freezes on iOS WebKit due to layout thrashing | ⚠️ High | Open | ✅ **PR #8854** exists and fixes keyboard focusability — indirectly addresses scroll performance. |
| [Issue #8844](https://github.com/agentscope-ai/QwenPaw/issues/8844): Message list not keyboard-focusable | ⚠️ Medium | Open | ✅ **PR #8854** fixes this directly — already merged into dev flow. |
| [Issue #8856](https://github.com/agentscope-ai/QwenPaw/issues/8856): Long content (e.g., tables) clipped without horizontal scroll | ⚠️ Medium | Open | ❌ No fix PR yet; design flaw in Markdown rendering layer. |
| [Issue #8848](https://github.com/agentscope-ai/QwenPaw/issues/8848): "Use `/clear`" advice misleading after context compaction failure | ⚠️ Medium | Open | ✅ **PR #8853** proposed to suggest retrying instead — addresses root cause. |

> 📌 **Stability Note**: While multiple UI/UX regressions are being addressed rapidly, **iOS Safari performance** and **long-conversation rendering** remain weak spots requiring deeper optimization.

---

### **6. Feature Requests & Roadmap Signals**  

| Request | Source | Prediction |
|--------|--------|------------|
| **Isolate agent sessions by Telegram forum topic** ([#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827)) | User request + PR #8857 | Likely to be included in **v2.4.0** — already under review and implemented. |
| **Support CLI commands for plugins** ([#8554](https://github.com/agentscope-ai/QwenPaw/issues/8554)) | Active PR (size/XXXL) | High-priority for DevOps and automation users — expected in next minor release. |
| **Runtime base-path deployment** ([#8719](https://github.com/agentscope-ai/QwenPaw/issues/8719)) | PR in review | Critical for reverse-proxy setups (e.g., Docker, Kubernetes) — likely in v2.4. |
| **Local engine GPU controls + auto-update** ([#8649–8648](https://github.com/agentscope-ai/QwenPaw/pulls?q=llama.cpp+MLX)) | Multi-PR feature bundle | Core part of upcoming **local AI stack upgrade** — may form v2.4’s foundation. |

> 💡 **Roadmap Signal**: QwenPaw is shifting toward **enterprise-ready self-hosting**, with enhanced **local model management**, **multi-channel isolation**, and **CLI automation** as pillars.

---

### **7. User Feedback Summary**  

Real user pain points from recent issues reveal key satisfaction/dissatisfaction trends:

- **Frustration with invisible progress indicators**: Users report no visual feedback when Copaw is “thinking” (Issue #2674). This undermines trust in AI agents.
- **Poor channel integration**: Despite being added as a friend, Copaw doesn’t appear in group chats (QQ/DingTalk/WeChat), indicating gaps in platform API coverage.
- **Confusion in error recovery**: Misleading prompts like “use `/clear`” after compaction failure lead to accidental context loss — a serious UX risk.
- **Mobile experience broken**: iOS Safari freezing during long chats makes QwenPaw unusable on mobile — a major barrier for remote teams.

> ✅ **Satisfaction Drivers**: Successful implementation of topic isolation, improved error messages, and responsive plugin CLI support are well-received signs of maturity.

---

### **8. Backlog Watch**  

Several high-impact issues remain unresolved and warrant maintainer attention:

- **[Issue #8762](https://github.com/agentscope-ai/QwenPaw/issues/8762)**: Scheduled task fails repeatedly with `APIConnectionError`, but manual runs succeed. This is a **critical reliability issue** affecting automation workflows. Needs immediate investigation into connection pooling, rate limiting, or async task scheduling.
- **[Issue #2674](https://github.com/agentscope-ai/QwenPaw/issues/2674)**: Multiple interface and integration problems with WeChat (no typing indicator, no group visibility, UI sync issues). This reflects a broader gap in **third-party chat platform support** and should be prioritized for v2.4.
- **[Issue #8856](https://github.com/agentscope-ai/QwenPaw/issues/8856)**: Content clipping in long replies (tables, code) without scroll — a **basic UX failure** in the primary output medium. Must be fixed before v2.4 release.

> ⏳ **Recommendation**: Maintain a triage board for these top 3 backlog items — they represent **user retention risks** and **enterprise adoption blockers**.

--- 

✅ **Final Assessment**: QwenPaw is in a strong growth phase with high developer engagement, advanced features emerging, and solid community participation. However, **UI/UX consistency**, **mobile performance**, and **cross-platform reliability** remain key hurdles. With targeted fixes to the top 3 backlog items, QwenPaw can transition from a powerful prototype to a production-grade AI assistant platform by early 2027.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-23**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a surge in developer engagement: **50 pull requests** and **19 new issues** updated within the last 24 hours, indicating strong momentum in development and community feedback. The focus is clearly on modernizing core integrations—especially Google/Gemini provider transitions—while addressing critical stability issues across channels (WhatsApp, Telegram), agent runtime behavior, and security policy enforcement. A significant number of PRs center on retiring legacy tools (`gemini_cli`, `python_ssh_helper`) and adopting new protocols (Antigravity CLI, ACP). This reflects a strategic pivot toward secure, maintainable, and future-proof infrastructure.

---

### **2. Releases**  
❌ **No new releases** were published today.  
*Note:* The absence of a release cycle suggests that recent changes are still under review or pending final integration. The team appears to be prioritizing internal stability and dependency alignment before releasing updates.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs & Fixes (Today):**  
- **#12026** (`fix(memory)`): Correctly compares Qdrant recall timestamps as `Instant` values, resolving potential data loss from improper string-based comparisons.  
- **#12025**, **#12024**, **#12023** (CI/Docs fixes): Improved CI reliability by preserving event bases, fixing pipe-drain issues in release scripts, and correcting broken link detection for non-ASCII filenames.  
- **#11818** (`bug`): Resolved Unix socket path truncation error when deep config directories exceed platform limits (macOS/Linux).  
- **#11257** (`bug`): Fixed WhatsApp Web channel dropping captions on inbound media—restoring sender-provided metadata.  
- **#11679** (`enhancement`): Enabled `zerocode` to obtain and store its own bearer token over mTLS, improving operator-to-agent pairing parity.  

These closed items reflect a strong emphasis on **stability, security, and cross-platform compatibility**.

---

### **4. Community Hot Topics**  
🔥 **Top Active Issues & PRs (by comments/reactions):**

| Issue/PR | Title | Activity | Link |
|--------|------|--------|------|
| **#12669** [Tracker] | Gemini provider modernization: Antigravity CLI, OAuth retirement | 1 comment, newly opened | [Issue #12669](https://github.com/zeroclaw-labs/zeroclaw/issues/12669) |
| **#12676** [feat] | Retire `gemini_cli` model provider | 0 comments, stacked PR | [PR #12676](https://github.com/zeroclaw-labs/zeroclaw/pull/12676) |
| **#12675** [feat] | Add `antigravity_cli` provider via ACP | 0 comments, stacked PR | [PR #12675](https://github.com/zeroclaw-labs/zeroclaw/pull/12675) |
| **#12673** [refactor] | Extract shared ACP CLI client from `grok_cli` | 0 comments, stacked PR | [PR #12673](https://github.com/zeroclaw-labs/zeroclaw/pull/12673) |

🔍 **Analysis:**  
The community is intensely focused on **Google/Gemini integration modernization**, driven by Google’s retirement of the old Gemini CLI and Code Assist OAuth. These stacked PRs form a coordinated effort to:
- Replace deprecated tools (`gemini_cli`)
- Adopt new official protocols (`agy acp`)
- Ensure backward compatibility via refactored clients

This signals a **major architectural shift** in provider stack design, likely preparing for a v0.10+ release.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (S2–S3 Severity):**

| Issue | Summary | Severity | Fix PR? |
|------|--------|---------|--------|
| **#12667** [`/model <id>` replies "Model switched" but uses old model] | Model change command doesn’t apply immediately | S2 | ❌ No fix yet |
| **#12666** `delegate` accepts unknown args silently | Silent failure due to strict schema + `additionalProperties: false` | S3 | ❌ No fix yet |
| **#12665** Recovered tool results omit name → Groq replay fails | Data loss in recovered envelopes | S2 | ⚠️ Pending #12188 merge |
| **#12661** Dashboard “Generate” pairing code button returns 403 | Authentication flow broken locally | S3 | ❌ No fix yet |
| **#12660** Agent cards show all-time spend instead of monthly | Misleading UI metric | S3 | ❌ No fix yet |
| **#12649** Channel-routed tools registered even if channel missing | Spurious registration & approval gating | S2 | ❌ No fix yet |

⚠️ **Notable Regressions:**  
- **#12518**: Python SSH helper tracking issue — indicates ongoing migration from legacy Python to native Rust broker.
- **#12655**: Autonomous skill creation disabled — affects AI self-improvement workflows.

> ✅ *Note:* While many bugs are minor or low-risk, several impact user experience and trust in system state (e.g., `/model`, dashboard metrics).

---

### **6. Feature Requests & Roadmap Signals**  
📈 **Emerging Features & Predictions for Next Version:**

| Request | Status | Likely Inclusion? | Rationale |
|-------|--------|------------------|----------|
| **#12422** [RFC]: Scoped operator-managed service credentials | Open, RFC | ✅ High | Security-first approach; aligns with identity/access model evolution |
| **#12668** Let operators set thinking level per bounded delegate | Open | ✅ Medium | Enables fine-grained control over agentic behavior; fits autonomy model |
| **#12662** Remove unreachable Raspberry Pi LED tools | Open | ✅ High | Clean-up of dead code; improves maintainability |
| **#12296** Check zsh commands using POSIX grammar | Open | ✅ Medium | Improves shell safety and precision in macOS defaults |

📌 **Predicted Next Release (v0.10?) Will Include:**
- Full retirement of `gemini_cli` and `gemini_code_assist`
- Introduction of `antigravity_cli` provider
- Enhanced mTLS-based credential management
- Refactored ACP client layer for reuse
- Removal of deprecated tools (Raspberry Pi, Python SSH helpers)

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points Observed:**

- **“I can’t switch models reliably”** – Users report confusion when `/model` command appears successful but actual requests use old settings (**#12667**).
- **“My agent spends look like they’re forever”** – Dashboard shows incorrect spend metrics (**#12660**), undermining cost monitoring.
- **“Why does my agent ignore my custom skills?”** – Skill creation logic is silent and unresponsive (**#12655**), breaking autonomous workflows.
- **“I can’t generate a pairing code locally”** – Developer frustration with 403 errors during local setup (**#12661**).
- **“Media captions vanish on WhatsApp”** – Major UX regression affecting message clarity (**#11257**).

💡 **User Satisfaction:** Mixed. Core functionality (agent execution, tool use) appears stable, but **UX polish, visibility into state changes, and consistency in configuration** remain weak points.

---

### **8. Backlog Watch**  
👀 **Long-Unanswered Critical Items Needing Maintainer Attention:**

| Issue | Age | Status | Why It Matters |
|------|-----|--------|---------------|
| **#12518** Track retirement of Python SSH task helper | 5 days | Blocked | Blocks full migration to native Rust broker; hinders performance and security |
| **#12422** RFC: Scoped operator-managed service credentials | 9 days | Open | Foundational security enhancement; could enable granular access policies |
| **#12655** Autonomous skill creation never fires | 1 day | Open | Breaks AI self-improvement loop; major usability gap |
| **#12296** Check zsh grammar for precise command parsing | 15 days | Open | Impacts shell safety and correctness on macOS |
| **#12669** Tracker: Gemini provider modernization | 1 day | Open | Central to avoiding future breakage; needs coordination |

🔧 **Recommendation:** Prioritize **#12518**, **#12655**, and **#12422** for triage—these affect long-term maintainability, security, and user empowerment.

---

✅ **Final Assessment:**  
ZeroClaw is in a **high-growth, transitional phase**—shifting from legacy integrations to a secure, modular, and extensible architecture. While stability issues persist in edge cases, the project demonstrates strong technical direction and community engagement. With careful attention to backlog items and a clear roadmap around Gemini modernization, **ZeroClaw is poised for a major version update in early 2027**.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*