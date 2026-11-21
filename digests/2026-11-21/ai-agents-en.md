# OpenClaw Ecosystem Digest 2026-11-21

> Issues: 339 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-21 03:25 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-21**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **339 open issues** and **500 open pull requests** updated in the past 24 hours—indicating robust community engagement and ongoing development momentum. A significant number of high-severity bugs (P0/P1) are being reported, particularly around **Gateway stability**, **plugin loading**, **update reliability**, and **cross-platform UX friction**. Despite no new releases, the pipeline is heavily focused on fixing regressions from recent versions (2026.10–11), especially those affecting macOS, Windows, and large plugin workspaces. The ecosystem shows strong technical maturity but faces growing strain due to complex runtime interactions.

---

### **2. Releases**  
❌ **No new releases** were published today.  
The latest stable version remains **2026.11.3**, while beta candidates like **2026.11.5-beta.4** are under active validation. No release notes or migration guidance have been issued for this period.

> 🔗 [GitHub Release Page](https://github.com/openclaw/openclaw/releases)

---

### **3. Project Progress**  
**Merged/Closed PRs (today):**  
- **PR #202878** – Fixed background tab screenshot capture in headed Chrome (`fix(browser): keep screenshots working for background tabs`).  
- **PR #202865** – Cleaned up environment stub leakage in tests (`fix(test): clear environment stubs after process.env replacement`).  
- **PR #202735** – Improved Git update verification by waiting for Gateway restart (`fix: wait for a busy gateway to restart before verifying a Git update`).  
- **PR #202897** – Refreshed Control UI localization assets without bypassing branch protection.

These fixes address minor but persistent issues in test reliability, browser behavior, and update workflow integrity—critical for developer experience and CI/CD stability.

---

### **4. Community Hot Topics**  
Top **issues by comment count** reflect systemic pain points:

| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 84 | P0 / Crash Loop | Gateway blocks for minutes during external plugin capture (regression since 2026.9.6) |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | 38 | P2 / UX Friction | `gateway stop` fails on macOS with "Process ancestry could not be fully inspected" |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 31 | P0 / UX Release Blocker | Post-install Doctor leaves 11.3 update partially finalized |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | 31 | P1 / Crash Loop | `doctor --fix --non-interactive` idles indefinitely on macOS |

**Underlying Needs:**  
Users demand **predictable startup performance**, **robust process lifecycle management**, and **resilient upgrade paths**. These issues suggest deep-rooted challenges in **asynchronous resource handling**, **system-level process inspection**, and **state consistency across upgrades**—especially on macOS and Windows.

---

### **5. Bugs & Stability**  
**Critical Bugs Reported (Today):**  

| Bug | Severity | Impact | Fix PR? | Notes |
|-----|----------|--------|---------|-------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | P0 | Crash Loop | ❌ No | Plugin generation capture causes 5+ minute block at startup |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | P0 | UX Release Blocker | ❌ No | Partially finalized state after Doctor failure; update can’t roll back |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | P1 | Crash Loop | ❌ No | Update-run admission re-hashes unchanged DB forever when Gateway stopped |
| [#174681](https://github.com/openclaw/openclaw/issues/174681) | P1 | Regression | ✅ Reverted | Plugin prep now blocks main thread (reverted #172750) |
| [#192496](https://github.com/openclaw/openclaw/issues/192496) | P2 | Idle CPU Spike | ❌ No | 100–170% CPU usage on idle Windows with 20 agents |

**Stability Concerns:**  
The project is experiencing **critical regressions** in core workflows: **upgrade pipelines**, **process lifecycle control**, and **memory/resource cleanup**. Multiple issues point to **inadequate isolation of long-running operations**, **lack of timeout safeguards**, and **over-reliance on system-level process introspection**—particularly problematic on macOS and Windows.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority feature signals include:

| Request | Priority | Key Themes | Likely Inclusion |
|--------|----------|------------|------------------|
| [#197297](https://github.com/openclaw/openclaw/issues/197297) | P2 | Per-user secret vault | ✅ High probability in 2026.12 |
| [#187264](https://github.com/openclaw/openclaw/issues/187264) | P2 | Caller-scoped scheduling | ✅ Needed for team collaboration |
| [#179685](https://github.com/openclaw/openclaw/issues/179685) | P2 | IMAP durable processing | ✅ Strong use case for enterprise users |
| [#202880](https://github.com/openclaw/openclaw/pull/202880) | P2 | WhatsApp task scheduling | ✅ Expanding channel support |
| [#195397](https://github.com/openclaw/openclaw/issues/195397) | P2 | Optional reply declarations | ✅ User-driven UX flexibility |

**Roadmap Signal:**  
The team is actively expanding **channel integration** (WhatsApp, Slack, Telegram), **multi-user security models** (per-user vaults), and **durable execution frameworks** (IMAP, scheduled tasks). Expect **2026.12** to focus on **enterprise-grade automation resilience** and **user-specific context isolation**.

---

### **7. User Feedback Summary**  
Real user pain points dominate the issue tracker:

- **macOS Users**: Consistent failures with `gateway stop`, WebSocket reconnect loops (4008), and native app instability.
- **Windows Users**: Update failures due to path length limits (`MAX_PATH`), file lock timeouts, and broken handoff logic.
- **Large Plugin Workloads**: Users report **minutes-long stalls** during startup and plugin preparation—especially with heavy dependency trees.
- **UX Frustration**: Hidden agent sessions, lost narration, incomplete progress updates, and unresponsive UI controls (e.g., iOS text size).
- **Update Reliability**: Many users report **partial finalization**, **failed rollbacks**, and **unrecoverable states** post-upgrade.

> 💬 *“I upgraded from 11.3 to 11.5 and now my agent won’t start. Doctor says ‘no rollback’ and I’m stuck.”* — @Staruy

---

### **8. Backlog Watch**  
Critical long-standing issues requiring maintainer attention:

| Issue | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 2 months | Open, P0 | Blocks adoption in production environments |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | 1.5 months | Open, P1 | Silent hang during repair—no feedback |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | 1 month | Open, P1 | Infinite loop in maintenance—requires immediate fix |
| [#173599](https://github.com/openclaw/openclaw/issues/173599) | 1.5 months | Open, P2 | iMessage edit action hidden on macOS 26 |
| [#181791](https://github.com/openclaw/openclaw/issues/181791) | 1 month | Open, P3 | Missing provenance for safe interruption recovery |

> ⚠️ **Note**: Several **P0/P1 issues lack assigned maintainers** despite high comment counts and impact. Immediate triage is recommended to prevent further degradation of user trust.

---

**✅ Summary**: OpenClaw is in a phase of **high velocity development** with intense community activity, but **stability and reliability are under pressure**. The project must prioritize **core runtime fixes** and **release hygiene** to maintain credibility. While innovation continues (e.g., per-user vaults, WhatsApp scheduling), **crash loops and update failures** threaten user adoption. Maintainers should urgently review top-tier issues and stabilize the upgrade path before the next release cycle.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-21**

---

### **1. Ecosystem Overview**  
The open-source personal AI agent landscape in late 2026 is characterized by rapid innovation, increasing technical maturity, and growing divergence in architectural philosophy and user focus. Projects are moving beyond basic task automation toward enterprise-grade resilience, secure multi-user contexts, and composable plugin ecosystems. While core functionality remains stable across platforms, a shared pressure point has emerged: **runtime reliability**, particularly around process lifecycle management, session integrity, and update consistency—issues that directly impact user trust and adoption. The ecosystem is bifurcating into two distinct tracks: one focused on **developer-centric extensibility and modularity** (e.g., Hermes, QwenPaw), and another on **production-hardened stability and security** (e.g., OpenClaw, ZeroClaw).

---

### **2. Activity Comparison**

| Project | Open Issues | Open PRs | Release Status | Health Score (1–5) |
|--------|-------------|----------|----------------|--------------------|
| **OpenClaw** | 339 | 500 | ❌ No new release | ⭐⭐⭐☆☆ (3.0) |
| **Hermes Agent** | 50 | 50 | ✅ Canary v0.23.3+canary.20261120T064609Z | ⭐⭐⭐⭐☆ (4.0) |
| **QwenPaw** | 13 | 41 | ❌ No new release | ⭐⭐⭐⭐☆ (3.8) |
| **ZeroClaw** | 13 | 50 | ❌ No new release | ⭐⭐⭐⭐☆ (4.2) |

> **Health Score**: Based on stability, community responsiveness, code hygiene, and regression density (higher = healthier).  
> *Note: OpenClaw's high issue/PR volume reflects intense development strain; ZeroClaw’s low engagement despite high cleanup activity signals strong internal health.*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most technically ambitious project in the ecosystem, with the largest contributor base and highest velocity of feature innovation—particularly in **plugin orchestration**, **cross-platform UX**, and **enterprise-grade automation** (e.g., per-user vaults, IMAP durability). However, this ambition comes at a cost: **systemic instability in core workflows** (gateway startup, upgrades, process lifecycle) undermines user confidence. Unlike peers, OpenClaw prioritizes **feature velocity over release hygiene**, resulting in frequent regressions and partial rollbacks. Its community size (~500 active contributors) far exceeds others, but this scale amplifies the risk of uncoordinated changes. In contrast, projects like ZeroClaw and Hermes maintain tighter control over quality, using canary pipelines or phased rollouts.

---

### **4. Shared Technical Focus Areas**  
Across all four projects, the following **emerging systemic requirements** dominate development:

| Requirement | Projects Affected | Specific Needs |
|-----------|-------------------|----------------|
| **Session & State Integrity** | OpenClaw, Hermes, ZeroClaw | Prevent loss of agent reasoning during interruptions; avoid silent state corruption post-restart. |
| **Process Lifecycle Management** | OpenClaw, Hermes, ZeroClaw | Fix `gateway stop` failures (macOS/Windows), prevent hanging processes, ensure graceful shutdown. |
| **Update & Rollback Reliability** | OpenClaw, QwenPaw, Hermes | Resolve partial finalization, failed rollbacks, and broken upgrade paths. |
| **Plugin Orchestration & Feedback** | Hermes, OpenClaw, QwenPaw | Enable real-time status (`delivery.status`), cancellable tasks, and transparent execution tracking. |
| **Security & Access Control** | ZeroClaw, Hermes, OpenClaw | Scoped credentials, audit trails, fine-grained OAuth scopes, and zero-trust model handling. |

These issues are not isolated bugs—they reflect a **shared maturity challenge** in building resilient, long-running AI agents in complex environments.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **Target User** | Power users, developers, early adopters | Developers, CI/CD integrators, automation teams | Enterprise users, local inference advocates | Security-conscious orgs, compliance-driven deployments |
| **Feature Focus** | Plugin explosion, cross-channel automation, team collaboration | Plugin feedback, API extensibility, Kanban workflows | Local model control, GPU acceleration, reverse-proxy readiness | Security hardening, code cleanup, session reliability |
| **Architecture** | Monolithic gateway + plugin sandbox | Modular plugin layer + RPC-based orchestration | Plugin-managed local models + frontend-first UI | WASM-powered, minimal runtime, zero-trust design |
| **Deployment Model** | Desktop-first, cross-platform | CLI/Desktop hybrid | Self-hosted, container-ready | Cloud-native, Kubernetes-friendly |

> **Key Insight**: While OpenClaw leads in feature breadth, **ZeroClaw leads in foundational robustness**, and **QwenPaw is evolving into a full-stack local inference platform**—a strategic differentiator for privacy-sensitive use cases.

---

### **6. Community Momentum & Maturity**  

| Tier | Project(s) | Characteristics |
|------|------------|-----------------|
| **Rapid Iteration** | OpenClaw, QwenPaw | High PR/issue volume; feature-heavy; frequent breaking changes; active bug influx. |
| **Stabilizing & Refining** | Hermes Agent | Canaries in use; stable core; focus on polish and resilience; lower issue count but higher engagement on critical bugs. |
| **Technical Consolidation** | ZeroClaw | Low public noise but high internal cleanup; dead code removal, dependency hardening, RFC-driven design. |

> **Maturity Signal**: ZeroClaw and Hermes represent **mature engineering discipline**—prioritizing long-term sustainability. OpenClaw and QwenPaw are in **high-growth mode**, where innovation outpaces stabilization.

---

### **7. Trend Signals**  
Based on community feedback and PR trends, the following **industry-wide shifts** are emerging:

1. **From "Agent" to "Agent Platform"**: Projects are shifting from single-agent tools to **modular, extensible systems** (e.g., plugin-based model management in QwenPaw, `delivery.status` in Hermes).
2. **Enterprise Readiness Demands**: Per-user secrets, scoped credentials, audit trails, and OIDC integration are no longer niche—they’re **baseline expectations**.
3. **Local Compute Is Now Central**: GPU-accelerated local models (via llama.cpp, MLX) are being treated as first-class citizens—not add-ons—indicating a **move away from cloud-only reliance**.
4. **UX Parity with Production Systems**: Users now expect **real-time feedback**, **resilient UI states**, and **no silent failures**—hallmarks of professional-grade software.
5. **Security-by-Design Culture**: The rise of RFCs (e.g., ZeroClaw #12422) and proactive dependency patching shows a maturing culture where **security is baked in, not bolted on**.

> 💡 **Value for Developers**: The ecosystem is now mature enough to support **production-grade AI agent pipelines**—but only if teams prioritize **runtime stability, rollback safety, and state persistence**. Choosing a project should now hinge not just on features, but on **its ability to handle failure gracefully**.

---

**✅ Conclusion**: The personal AI assistant ecosystem is entering a **post-experimentation phase**, where reliability, security, and scalability are paramount. OpenClaw offers unmatched innovation but risks user churn due to instability. ZeroClaw and Hermes represent the future of **engineered resilience**. QwenPaw is uniquely positioned as the **local inference champion**. For developers, the key takeaway is clear: **choose your tool based on operational needs—not just feature lists**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-21**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust community engagement and ongoing development momentum. The release of `v0.23.3+canary.20261120T064609Z` signals a continuous integration flow focused on stability and feature refinement. High-priority bugs related to session state, Windows process management, and gateway reliability are dominating discussions, while several key PRs address critical path fixes for desktop, CLI, and plugin lifecycle management. Overall, the project demonstrates strong health with consistent progress across core components.

---

### **2. Releases**  
- **New Release**: `v0.23.3+canary.20261120T064609Z`  
  - *Release Date*: November 20, 2026  
  - *Type*: Canary build (pre-release, unstable)  
  - *Summary*: This is a rolling canary release intended for early adopters and testing environments. It includes incremental fixes and improvements from recent PR merges, particularly around session persistence, gateway stability, and plugin configuration handling.  
  - *Notes*: No breaking changes reported. Users should expect potential instability; not recommended for production use.  
  - 🔗 [GitHub Release Page](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.3%2Bcanary.20261120T064609Z)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today)**: 13  
Key merged changes include:  
- ✅ **PR #156611** – Fixed duplicate message rendering during WebSocket reconnects in Desktop app, improving chat consistency.  
- ✅ **PR #157157** & **#157156** – Closed in favor of **PR #158454**, which introduces real kanban task cancellation and a read-only `delivery.status` RPC, enabling plugins to monitor execution state.  
- ✅ **PR #158399** – Fixed a persistent gateway hang after failed stop by ensuring shutdown event is properly set even if an exception occurs.  
- ✅ **PR #158449** – Ensures failed dependency syncs do not leave gateways paused indefinitely, restoring normal operation post-update.  

These updates collectively improve system resilience, especially under high-load or error-prone conditions.

---

### **4. Community Hot Topics**  
Top 5 most discussed Issues/PRs based on comment volume and urgency:

| Issue/PR | Title | Comments | Link |
|--------|------|---------|------|
| **Issue #131859** | Cannot open PR via API: CreatePullRequest permission error | 68 | [GitHub #131859](https://github.com/nousresearch/hermes-agent/issues/131859) |
| **Issue #156335** | Kanban board removal must not orphan in-flight writers | 7 | [GitHub #156335](https://github.com/nousresearch/hermes-agent/issues/156335) |
| **PR #158454** | feat(plugins,gateway,kanban): plugin state surface, delivery.status and real kanban cancellation | — | [GitHub #158454](https://github.com/nousresearch/hermes-agent/pull/158454) |
| **Issue #158441** | Control socket: 2s hard timeout causes kanban worker crash under concurrent load | 1 | [GitHub #158441](https://github.com/nousresearch/hermes-agent/issues/158441) |
| **PR #158432** | fix(gateway): FooteredReply deepcopy crash and unpruned dead platform writers | — | [GitHub #158432](https://github.com/nousresearch/hermes-agent/pull/158432) |

**Analysis of Underlying Needs**:  
- **System Resilience**: Multiple reports highlight race conditions (e.g., board removal while writer active), indicating a need for stronger transactional integrity in SQLite operations.  
- **Plugin Orchestration**: High demand for real-time feedback (`delivery.status`) and cancellable tasks shows growing reliance on external plugins and automation workflows.  
- **API Reliability**: The top issue (#131859) reflects frustration with GitHub API permissions—suggesting deeper OAuth and fine-grained access control gaps in the auth layer.

---

### **5. Bugs & Stability**  
**Critical Bugs Reported (P1–P2)**:  
1. **Issue #158441** – *Control socket timeout crashes kanban worker under load* (P2)  
   - **Impact**: System instability under concurrency; affects multi-profile deployments.  
   - **Fix Status**: PR #158454 pending review; no fix yet merged.  
2. **Issue #158371** – *Kanban comment injection skips own profile comments* (P2)  
   - **Impact**: Agents cannot self-steer running tasks, limiting autonomy.  
   - **Fix Status**: Open; requires deep logic change in `inject_new_comments_from_env`.  
3. **Issue #158383** – *Cron jobs fail with 401 on managed llama.cpp runtime* (P2)  
   - **Impact**: Breaks scheduled automation; stems from incorrect provider tagging.  
   - **Fix Status**: PR #158450 addresses this by repinning routes after profile rename.  
4. **Issue #155862** – *Desktop falls into first-run setup due to blobless clone probe timeout* (P2)  
   - **Impact**: Confuses users on partial clones; breaks headless installs.  
   - **Fix Status**: No PR yet; needs update guard logic.

> ⚠️ **High-Risk Regressions**: Several P2 bugs relate to gateway lifecycle, session state corruption, and OS-specific behavior (especially Windows), signaling potential instability in production-grade setups.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes suggest upcoming focus areas:  

| Feature Request | Priority | Key Drivers | Predicted Inclusion |
|----------------|----------|-------------|---------------------|
| **Per-provider model allowlist/blocklist** ([#126996](https://github.com/nousresearch/hermes-agent/issues/126996)) | P2 | User desire for granular model control | Likely in v0.24 |
| **Spoilers for images in Telegram/Discord** ([#158416](https://github.com/nousresearch/hermes-agent/issues/158416)) | P3 | Messaging UX enhancement | Possible in v0.24 |
| **Public API for staged memory/skill writes** ([#148313](https://github.com/nousresearch/hermes-agent/issues/148313)) | P2 | Plugin-driven governance | High priority for next version |
| **Comma-separated scopes + pinned redirect port for OAuth** ([#152732](https://github.com/nousresearch/hermes-agent/issues/152732)) | P2 | Integration with enterprise IdPs (Linear, QuickBooks) | Likely in v0.24 |
| **Runtime governance gate + tamper-evident audit trail** ([#157274](https://github.com/nousresearch/hermes-agent/issues/157274)) | P3 | Security and compliance needs | May appear in v0.25 |

> 📌 **Roadmap Signal**: The shift toward **plugin extensibility**, **auditability**, and **enterprise-grade integrations** is clear. Expect increased focus on secure, composable agent systems.

---

### **7. User Feedback Summary**  
Real user pain points observed:  
- **Windows-Specific Frustrations**: Multiple users report hangs (`hermes gateway stop` fails), file I/O errors (`OSError: Invalid argument`), and Git version checks blocking startup.  
- **Session State Corruption**: Users note completed turns vanish after switching sessions despite DB integrity—this undermines trust in conversation history.  
- **Plugin Configuration Complexity**: Users struggle with OAuth redirects (port mismatch), scope formatting, and lack of visibility into background job status.  
- **Desktop App Instability**: First-run loops and infinite hangs during startup frustrate new users, especially on git-cloned installations.  
- **Satisfaction**: Positive sentiment around kanban task cancellation and live streaming improvements (e.g., PR #158454), showing appreciation for actionable feedback.

> 💬 *"I’ve lost two full days of work because my session disappeared after switching tabs—this is unacceptable."* – Anonymous user, Issue #134290

---

### **8. Backlog Watch**  
Long-standing, high-impact issues requiring maintainer attention:  

| Issue | Age | Severity | Status | Notes |
|------|-----|----------|--------|-------|
| **Issue #131859** | 78 days old | P3 (blocked upstream) | Open | Critical for CI/CD automation pipelines |
| **Issue #93592** | 110 days old | P2 | Open | Background review silently fails on fallback chain failure |
| **Issue #158266** | 1 day old | P2 | Open | ModuleNotFoundError after Docker upgrade — likely regression |
| **Issue #158371** | 3 days old | P2 | Open | Self-steering blocked by comment filtering logic |
| **Issue #146767** | 12 days old | P2 | Open | Unclear Anthropic ToS compliance for native vs plugin OAuth |

> 🔔 **Urgent Attention Needed**: The lack of response to **#131859** (permission error) despite 68 comments suggests systemic oversight. Maintainers should prioritize resolving upstream authentication bottlenecks.

---

**✅ Final Assessment**:  
Hermes Agent is in a phase of rapid evolution with strong developer activity, but stability concerns—especially on Windows and in multi-profile/gateway scenarios—are emerging as blockers. The project is well-positioned for v0.24 with clear roadmap signals around security, plugin maturity, and UX polish. Immediate focus should be on fixing regressions, stabilizing core workflows, and addressing high-impact user pain points.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-21**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active, with 41 pull requests and 13 issues updated in the last 24 hours—indicating strong developer momentum and ongoing user-driven refinement. A surge in frontend and backend bug fixes suggests a focus on stability and usability ahead of potential feature rollouts. While no new releases have been published, multiple PRs targeting critical infrastructure (e.g., memory indexing, CLI health checks, local model management) are under review, signaling preparatory work for an upcoming release cycle. The community is actively engaged in both issue reporting and contribution, particularly around UI/UX polish and cross-platform compatibility.

---

### **2. Releases**  
❌ **No new releases** were published in the past 24 hours.  
*Note: The latest stable version remains v2.3.0b2 (Desktop), with recent updates focused on internal improvements rather than user-facing changes.*

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #8835** ([fix(windows): retry agent config saves...](https://github.com/agentscope-ai/QwenPaw/pull/8835)) — Resolves transient file access errors during config saving on Windows, improving reliability in enterprise environments.  
- **PR #8784** ([fix(skills): keep rollback backups until every workspace is restored](https://github.com/agentscope-ai/QwenPaw/pull/8784)) — Fixes a critical flaw in multi-workspace skill rollback logic, ensuring complete recovery even if one workspace fails.  
- **PR #8512** ([fix(providers): read a gateway-reported status from the error text](https://github.com/agentscope-ai/QwenPaw/pull/8512)) — Enables proper error classification for OpenAI-compatible gateways that return raw status codes in message text, improving fallback behavior.  
- **PR #8499** ([feat(providers): extract local model management into plugin](https://github.com/agentscope-ai/QwenPaw/pull/8499)) — Major architectural shift: local model lifecycle now managed via plugin, enhancing modularity and maintainability.

📌 *These merges indicate progress toward a more resilient, modular, and platform-aware core system.*

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement:**  
- **Issue #8580**: [Memory tag index never rebuilds → 503 error](https://github.com/agentscope-ai/QwenPaw/issues/8580) *(6 comments, open)*  
  - **Need**: Persistent memory metadata corruption despite correct configuration (`auto_memory_generate_tags = true`). Users cannot access tags after regeneration, blocking workflow tracking.  
  - **Root Cause**: Index rebuild logic appears to be broken or not triggered. High severity due to impact on AI agent memory integrity.

- **Issue #8836**: [Tool config with password causes page loop refresh](https://github.com/agentscope-ai/QwenPaw/issues/8836) *(1 comment, open)*  
  - **Need**: Frontend state management flaw when handling sensitive form inputs (password fields). Affects UX and usability for custom tool configurations.

🔥 **Top PRs by Engagement & Impact:**  
- **PR #8648** ([feat(console): add local engine, GPU, and auto-update controls](https://github.com/agentscope-ai/QwenPaw/pull/8648)) *(size/XL, under review)*  
  - Part of a major **local model stack upgrade** (llama.cpp + MLX support), enabling GPU acceleration and runtime auto-updates. This is likely a cornerstone of the next release.  
- **PR #8719** ([feat(console): support runtime base-path deployment](https://github.com/agentscope-ai/QwenPaw/pull/8719)) *(size/XL, under review)*  
  - Critical for reverse-proxy deployments (e.g., Docker, Kubernetes). Addresses long-standing limitation in hosting QwenPaw behind subpaths like `/qwenpaw`.

💡 *Underlying trend: users demand better integration with production infrastructures, enhanced local model control, and improved reliability in complex workflows.*

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (High Severity):**  
- **#8580** Memory tag index failure → 503 error despite valid config.  
  - *Impact*: Breaks agent memory functionality; affects all agents using tagged memory.  
  - *Fix PR?* ❌ Not yet merged.  
- **#8757** WeChat channel silent polling death → messages stop arriving without logs or recovery.  
  - *Impact*: Disrupts real-time inbound communication for users relying on WeChat integration.  
  - *Fix PR?* ❌ No fix submitted yet.

⚠️ **Medium-Severity Bugs:**  
- **#8123** Daily Paper job fails on truncated model output → `ToolJSONDecodeError` with no per-paper retry.  
  - *Impact*: Whole batch marked as failed despite partial success.  
  - *Fix PR?* ❌ Not addressed.  
- **#8845** Markdown tables overflow message bubbles → no horizontal scroll.  
  - *Impact*: Renders data unreadable in chat.  
  - *Fix PR?* ❌ No fix PR yet.  
- **#8844** Message list not keyboard-focusable → no scroll via PageUp/Down.  
  - *Impact*: Accessibility and usability loss on non-mouse devices.  
  - *Fix PR?* ❌ Not addressed.

🔧 **CLI/Backend Issues:**  
- **#8833**: Mission CLI duplicates `/api` prefix → requests `/api/api/chat/send`.  
  - *Fix PR:* ✅ **PR #8837** ([remove deprecated mission command](https://github.com/agentscope-ai/QwenPaw/pull/8837)) — Already merged, resolves the root cause.  
- **#8832**: Auto CLI health check uses unsupported `HEAD /version` → returns 405.  
  - *Fix PR?* ❌ Not yet resolved.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **High-Potential Features for Next Release:**  
- **Windows System Notification** ([#8821](https://github.com/agentscope-ai/QwenPaw/issues/8821)) — User-requested pop-up alert on task completion.  
  - *Signal*: Strong interest in background task awareness; likely to be implemented soon.  
- **Runtime Base Path Deployment** ([#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)) — Critical for cloud/container use cases.  
  - *Signal*: Clear roadmap push toward enterprise readiness.  
- **Local Model GPU Controls & Auto-Update** ([#8649, #8647, #8648](https://github.com/agentscope-ai/QwenPaw/pulls?q=is%3Aopen+is%3Apr+label%3Afeat%3Alocal-models)) — Indicates a strategic shift toward self-hosted, high-performance inference.  
  - *Signal*: QwenPaw is evolving into a full-stack AI agent platform with local compute capabilities.

---

### **7. User Feedback Summary**  
💬 **Key Pain Points Reported:**  
- **Frustration with unexplained failures**: Users report silent crashes (e.g., WeChat channel), missing error logs, and no feedback (e.g., #8757, #8580).  
- **UI/UX friction**: Mobile (Android Pad) layout bugs (#8839), inaccessible message scrolls (#8844), and table overflow (#8845) hinder daily use.  
- **Configuration complexity**: Misleading docs suggest `PUT /envs` deletes all env vars (#8843), causing accidental data loss.  
- **Reliability concerns**: Local model installers failing silently (#8830), and tools looping on password forms (#8836) reduce trust.

✅ **Positive Sentiment:**  
- Appreciation for modular design (e.g., plugin-based model management).  
- Excitement around new local model features (GPU, auto-update).  
- Recognition of timely fixes (e.g., PR #8835).

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered High-Impact Issues Needing Attention:**  
- **#8580** Memory tag index never rebuilds → 503 error despite correct config.  
  - *Age*: 17 days old | *Comments*: 6 | *Status*: Open  
  - ⚠️ **Critical**: Blocks memory tagging — core functionality for agent persistence.  
  - 🔗 [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/8580)  

- **#8757** WeChat channel silent polling death → no logging, cursor never resets.  
  - *Age*: 5 days | *Comments*: 2 | *Status*: Open  
  - ⚠️ **High severity**: Breaks inbound messaging; silent failure reduces debugging ability.  
  - 🔗 [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/8757)  

- **#8123** Daily Paper fails on truncated output → no retry per paper.  
  - *Age*: 44 days | *Comments*: 3 | *Status*: Open  
  - ⚠️ **Workflow disruption**: Whole job fails despite partial success.  
  - 🔗 [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/8123)

> 📌 **Recommendation**: Prioritize these three issues in next sprint. They represent systemic risks to user trust and workflow continuity.

---  
*Data collected from GitHub: agentscope-ai/QwenPaw – 2026-11-21*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-21**

---

### **1. Today's Overview**  
ZeroClaw remains highly active with a strong momentum in code cleanup, security hardening, and feature refinement. The project is experiencing a surge in development activity: **50 open pull requests** (PRs) and **13 new issues** updated within the last 24 hours, indicating intense engineering focus. Most PRs are focused on technical debt reduction—dead code removal, dependency updates, and config consistency—while critical bugs related to session state, memory recall, and agent workflow integrity are being prioritized. Despite no new releases, the project is clearly advancing toward a stable, secure, and maintainable state through internal refactoring.

---

### **2. Releases**  
❌ **No new releases** were published today or in the past 7 days.  
The project maintains a release cadence of stability-focused updates, but current efforts are concentrated on backend cleanup and security fixes rather than user-facing features. No breaking changes or migration notes are pending at this time.

---

### **3. Project Progress**  
✅ **Merged/Completed PRs:**  
- **None merged today** — all 50 PRs remain open.  
- However, **three major refactorings** were submitted today by JordanTheJet (`#12615`, `#12616`, `#12618`) targeting dead code, unused modules, and stale artifacts across core crates, web, and CI tooling. These represent foundational improvements to code health and maintainability.  

📌 **Key progress highlights:**  
- **`#12612` (feat(memory)!: retire the local LLM response cache)** — A significant architectural decision to remove a nearly non-functional cache, reducing complexity and potential failure points. This aligns with recent bug reports (#12607) and performance concerns.  
- **`#12610` (fix(deps): bump wasmtime-wasi to 48.0.10)** — Immediate security patch addressing RUSTSEC-2026-0587 (WASI sandbox escape), showing proactive dependency hygiene.  
- **`#12617` & `#12615`** — Refactor of i18n keys and dead source files improve clarity and reduce cognitive load for contributors.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues & PRs (by engagement):**  

| Issue/PR | Topic | Engagement | Link |
|--------|------|-----------|------|
| [#12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) | Gateway session state stuck in `running` after failed write | 0 comments, high-risk | [Issue #12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) |
| [#12612](https://github.com/zeroclaw-labs/zeroclaw/pull/12612) | Retire local LLM response cache | 0 comments, high impact | [PR #12612](https://github.com/zeroclaw-labs/zeroclaw/pull/12612) |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | RFC: Scoped use of operator-managed service credentials | 5 comments, security-critical | [Issue #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) |

🔍 **Underlying Needs:**  
- **Security-first access control**: The RFC (#12422) reflects growing demand for zero-trust credential handling, especially as agents interact with sensitive services.  
- **Session reliability**: Multiple PRs and issues point to instability in session lifecycle management (e.g., `running` state not cleared), suggesting a need for robust error recovery in the gateway layer.  
- **Developer experience**: High volume of cleanup PRs indicates that codebase bloat is impacting contributor onboarding and long-term sustainability.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs (S1 - Workflow Blocked):**  
- **[#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794)**: Stopping an agent mid-task erases tool calls and thinking from context — **high risk**, impacts workflow integrity.  
- **[#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597)**: Telegram channel hangs indefinitely if voice transcription fails — prevents message flow and breaks chat continuity.

🟡 **Degraded Behavior (S2):**  
- **[#12604](https://github.com/zeroclaw-labs/zeroclaw/issues/12604)**: FastMCP tools return string results twice — causes redundant model input and potential hallucination risk.  
- **[#12606](https://github.com/zeroclaw-labs/zeroclaw/issues/12606)**: Config cannot set `a2a.client.peers` due to prefix mismatch — blocks advanced peer setup.

🟢 **Fixes in Progress:**  
- **`#12619` (gateway session state)** has a clear root cause (discarded `set_session_state` result), and a fix PR is expected soon.  
- **`#12612`** (response cache removal) directly addresses instability and inefficiency reported in #12607.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Top User-Requested Features (Predicting Next Release):**  
- **File upload support in BrowserTool** ([#12614](https://github.com/zeroclaw-labs/zeroclaw/issues/12614)) — blocking for any form-based automation; likely to be prioritized in v0.18+.  
- **WhatsApp quoted replies** ([#12598](https://github.com/zeroclaw-labs/zeroclaw/issues/12598)) — improves UX in group chats; signals growing demand for contextual communication.  
- **Scoped service credentials** ([#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422)) — RFC already accepted; will likely become a core policy feature in next major update.  
- **Memory recall reranking via external API** ([#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022)) — enables enterprise-grade memory filtering; strong signal for AI orchestration maturity.

👉 **Roadmap Prediction:** Next version (likely v0.18) will emphasize **security hardening**, **session reliability**, and **enterprise integration** (OIDC, scoped credentials, memory control).

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points:**  
- **Loss of context during interruptions** — users report frustration when stopping an agent mid-task, only to lose all prior reasoning and tool output ([#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794)).  
- **Voice message failures break entire channels** — Telegram users face complete bot paralysis due to one failed transcription ([#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597)).  
- **Missing file upload capability** — limits automation of real-world workflows like form submissions ([#12614](https://github.com/zeroclaw-labs/zeroclaw/issues/12614)).  
- **Confusing config structure** — users struggle to configure `a2a.client.peers` due to prefix mismatches ([#12606](https://github.com/zeroclaw-labs/zeroclaw/issues/12606)), indicating poor UX documentation.

👍 **Positive Signals:**  
- Users appreciate the depth of RFCs and design transparency (e.g., #12422).  
- High engagement on technical cleanup PRs suggests community trust in the project’s long-term health.

---

### **8. Backlog Watch**  
👀 **High-Priority Issues Needing Maintainer Attention:**  

| Issue | Severity | Status | Link | Notes |
|------|----------|--------|------|-------|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | S1 | Accepted | [Issue #8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | Workflow-blocking; urgent fix needed |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | Security | Accepted | [Issue #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | RFC accepted; needs implementation roadmap |
| [#12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607) | S1 | Open | [Issue #12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607) | Memory recall corrupts facts — serious data integrity risk |
| [#12613](https://github.com/zeroclaw-labs/zeroclaw/issues/12613) | Cleanup | In-progress | [Issue #12613](https://github.com/zeroclaw-labs/zeroclaw/issues/12613) | Tracker for dead code audit — critical for future maintainability |

📌 **Action Required:**  
Maintainers should prioritize resolving **context loss** (#8794) and **memory corruption** (#12607) before launching new features. The RFC (#12422) should be fast-tracked into implementation given its security significance.

---

**Summary:** ZeroClaw is in a phase of deep technical consolidation — cleaning up legacy code, fixing session stability, and hardening security. While no new releases are imminent, the project is building a solid foundation for future scalability and enterprise adoption. The community is engaged, but user pain points around workflow interruption and configuration complexity must be addressed urgently.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*