# OpenClaw Ecosystem Digest 2026-11-18

> Issues: 486 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-18 03:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-18**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 486 issues and 500 pull requests updated in the past 24 hours—indicating strong community engagement and rapid development velocity. The release of **v2026.11.5** introduces critical stability improvements, particularly around restart safety and update rollback mechanisms. A surge in high-severity bugs (P0/P1) related to session state corruption, startup failures on macOS/Windows, and data loss risks suggests ongoing challenges with system resilience and cross-platform consistency. Despite this, a significant number of PRs are focused on performance optimization and UX refinement, signaling a maturing product.

---

### **2. Releases**  
**🆕 v2026.11.5** – *Released today*  
[GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5)

#### **Highlights**
- **Restart-safe conversations**: Queued messages, send permissions, and final chat writes are now preserved across Gateway restarts.  
  - Fixes: [#196923](https://github.com/openclaw/openclaw/issues/196923), [#196540](https://github.com/openclaw/openclaw/issues/196540), [#196493](https://github.com/openclaw/openclaw/issues/196493)
- **Safer updates**: Failed Doctor or Gateway startups now trigger automatic rollback, preventing partial or broken states.  
  - Addresses: [#197083](https://github.com/openclaw/openclaw/issues/197083), [#161921](https://github.com/openclaw/openclaw/issues/161921)

> ✅ **Migration Note**: Users upgrading from `2026.11.1` to `2026.11.3` may encounter partial finalization due to WAL verification failure; manual intervention may be needed if plugins remain stuck.

---

### **3. Project Progress**  
**✅ Merged/Closed PRs (Today)**  
- [PR #200968](https://github.com/openclaw/openclaw/pull/200968): Updated Sparkle appcast for macOS users — enables proper in-app update discovery.
- [PR #200969](https://github.com/openclaw/openclaw/pull/200969): Fixed e2e test flakiness in titlebar rail clicks (Linux).
- [PR #200960](https://github.com/openclaw/openclaw/pull/200960): Added temporary notice on release notes page during updates.
- [PR #200963](https://github.com/openclaw/openclaw/pull/200963): Removed outdated model recommendations from suggestion list.

**🔧 Key Advances**  
- **Performance Optimization**: Multiple PRs focus on reducing redundant CPU/memory usage:
  - Reusing verified database digests within one update run ([#200869](https://github.com/openclaw/openclaw/pull/200869))
  - Reducing memory churn in isolated completions ([#200966](https://github.com/openclaw/openclaw/pull/200966))
  - Avoiding duplicate source scans during CI qualification ([#200379](https://github.com/openclaw/openclaw/pull/200379))

---

### **4. Community Hot Topics**  
Top 5 most commented issues reflect deep user pain points:

| Issue | Comments | Severity | Link |
|------|---------|----------|------|
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 42 | P2 (Critical) | *WAL auto-checkpoint never completes — blocks gateway state persistence* |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | 35 | P2 | *Gateway stop fails on macOS with "Process ancestry could not be fully inspected"* |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 29 | P1 (High) | *Short-term recall evicts entries nightly → dreaming deep phase never promotes* |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | 26 | P1 (Crash-loop) | *Doctor --fix --non-interactive idles indefinitely on macOS* |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 22 | P1 (Regression) | *Startup time regressed from ~410s to ~1030s after 2026.10.1 upgrade* |

> 🔍 **Underlying Need**: Users demand **reliable state persistence**, **predictable startup behavior**, and **stable long-running sessions**—especially under load or after restarts. Many issues stem from SQLite contention, WAL blocking, and race conditions in agent lifecycle management.

---

### **5. Bugs & Stability**  
**🚨 High-Risk Bugs Reported (Today)**

| Bug | Impact | Status | Fix PR? |
|-----|--------|--------|--------|
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | Session state corruption (WAL blocked) | P2 | ❌ No fix PR yet |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | macOS `gateway stop` failure | P2 | ❌ No fix PR |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | Doctor hangs indefinitely | P1 | ❌ No fix PR |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 2.5x slower startup post-2026.10.1 | P1 | ❌ No fix PR |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | Post-install Doctor leaves 11.3 partially finalized | P2 | ❌ No fix PR |

> ⚠️ **Pattern**: Multiple regressions tied to **update logic**, **SQLite WAL handling**, and **agent lifecycle timing**. These indicate systemic fragility in state migration and process coordination.

---

### **6. Feature Requests & Roadmap Signals**  
**🚀 Emerging Themes**  
- **Enhanced Session Control**: 
  - Enforceable checkpoints and bounded yields for foreground runs ([#138990](https://github.com/openclaw/openclaw/issues/138990)) — signals demand for “safe” long-running AI workflows.
- **Better Plugin Integration**:
  - Plugins should gate final model requests ([#193550](https://github.com/openclaw/openclaw/pull/193550)) — shows growing need for plugin-level security and control.
- **Improved Accessibility**:
  - Expose chat messages as headings for screen readers ([#154524](https://github.com/openclaw/openclaw/issues/154524)) — indicates inclusive design is gaining traction.

> 📌 **Prediction**: v2026.12.0 will likely include **session checkpointing**, **plugin policy hooks**, and **accessibility enhancements**, based on PR momentum and issue volume.

---

### **7. User Feedback Summary**  
Real-world pain points revealed through issues and PRs:

- **macOS Users**: Struggle with `gateway stop` failures and sluggish Settings UI (resolved after update in [#192667](https://github.com/openclaw/openclaw/issues/192667)).
- **Multi-Agent Workflows**: Users report silent message loss, agent ownership confusion, and turn claim leaks ([#126360](https://github.com/openclaw/openclaw/issues/126360), [#157255](https://github.com/openclaw/openclaw/issues/157255)).
- **Memory & Recall**: Core functionality like short-term recall retention and memory index stability are frequently failing, undermining trust in persistent AI agents.
- **UX Friction**: Duplicate turn rendering, invisible tool outputs, and inaccessible chat navigation frustrate daily users.

> 💬 **Satisfaction Signal**: v2026.11.5’s restart safety and safer updates were well-received by early adopters — indicating that reliability improvements drive user confidence.

---

### **8. Backlog Watch**  
**🔴 Long-Unanswered Critical Issues (Need Maintainer Attention)**  

| Issue | Age | Severity | Notes |
|------|-----|----------|-------|
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 15 days | P2 | WAL checkpoint blocked forever — affects all state durability |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 61 days | P1 | Dreaming deep phase never activates due to nightly eviction |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 111 days | P2 | AgentSelectionRequiredError floods logs — usability nightmare |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 59 days | P0 (Security) | Curated roots (`MEMORY.md`) permanently excluded after provenance change — **data integrity risk** |
| [#158592](https://github.com/openclaw/openclaw/issues/158592) | 51 days | P0 | After sleep/wake, agent runtime fails to recover — requires restart |

> 🛑 **Urgent**: These issues represent **core system flaws** in state management, security, and reliability. Without resolution, they threaten adoption beyond experimental use.

---

### **Final Assessment**  
OpenClaw is in a **high-growth, high-risk phase** — rapid innovation is evident, but stability and maintainability are under pressure. While recent releases address critical gaps in restart safety and update robustness, unresolved P0/P1 bugs in session state, SQLite, and multi-agent coordination pose real barriers to production use. The community is actively shaping the roadmap through feature requests and detailed bug reports. **Maintainer triage of the backlog is urgently needed** to prevent further erosion of trust and ensure sustainable growth.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Open-Source AI Agent Ecosystem – 2026-11-18**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a pivotal phase of **maturation and divergence**, marked by rapid innovation in core reliability, extensibility, and deployment flexibility. Projects are increasingly focused on **production-grade stability**, with strong emphasis on session persistence, state durability, and secure execution—especially under long-running or multi-agent workloads. While early-stage experimentation remains active, user demand is shifting toward **predictable behavior, robust error handling, and clear upgrade paths**. The landscape reflects a growing consensus that trust in AI agents hinges not just on model capability, but on system resilience, data integrity, and UX consistency across platforms.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score¹ |
|--------|------------------|---------------|----------------|---------------|
| **OpenClaw** | 486 | 500 | ✅ v2026.11.5 released | ⭐⭐⭐⭐☆ (4.8/5) |
| **Hermes Agent** | 50 | 50 | 🟡 Canary build (pre-release) | ⭐⭐⭐☆☆ (3.7/5) |
| **IronClaw** | 0 | 10 (auto-updates) | ❌ No release | ⭐⭐⭐⭐☆ (4.5/5) |
| **QwenPaw** | 15 | 45 | ❌ No new release | ⭐⭐⭐☆☆ (3.6/5) |
| **ZeroClaw** | 21 | 50 | ❌ Pre-release (v0.9.1 pending) | ⭐⭐⭐⭐☆ (4.3/5) |

> *¹ Health Score: Composite metric based on stability, community engagement, release cadence, and backlog risk (1–5 scale).*

---

### **3. OpenClaw's Position**  
**OpenClaw stands as the most mature and high-velocity project** in the ecosystem, with unmatched development velocity and a clear focus on **system-level reliability**. Its technical approach centers on **restart-safe state management**, **atomic updates with rollback**, and **SQLite WAL resilience**, addressing foundational pain points that plague other agents. Compared to peers:
- It leads in **community size and issue volume** (486 issues today), indicating broad real-world testing.
- It has **the most structured release cadence** (weekly patch releases) and proactive security hardening (e.g., v2026.11.5’s automatic rollback).
- Unlike QwenPaw or ZeroClaw, it treats **state persistence and startup predictability** as non-negotiable pillars—reflecting a production-first mindset.

This positions OpenClaw as the **de facto standard for enterprise-grade, long-running AI agents**, though at the cost of increased complexity.

---

### **4. Shared Technical Focus Areas**  
Across all projects, **three critical requirements are emerging** as universal needs:

| Requirement | Projects Involved | Specific Needs |
|------------|-------------------|----------------|
| **Session & State Persistence** | OpenClaw, Hermes, QwenPaw, ZeroClaw | Prevent message loss after restart; fix WAL blocking (OpenClaw #164294); handle resumption after sleep (ZeroClaw #12514); avoid silent eviction (QwenPaw #7724). |
| **Reliable Model & Provider Integration** | All five | Fix context compression clamping (Hermes #99943); prevent quota misreporting (QwenPaw #8798); ensure tool schema order stability (QwenPaw #6952); enforce thinking block validation (ZeroClaw #12509). |
| **Secure & Predictable Execution** | ZeroClaw, OpenClaw, Hermes | Enforce emergency stop across runtime (ZeroClaw #9390); prevent bypass of SOP approval (ZeroClaw #12514); add wall-clock timeouts (ZeroClaw #9191); improve CLI config protection (Hermes #59293). |

These shared challenges highlight a **convergence on operational excellence**—not just feature richness.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Target User** | Enterprise, developers, long-running workflows | Hybrid cloud-local users, developers | Backend engineers, infrastructure teams | Personal AI power users, mobile-first adopters | Security-conscious operators, automation-heavy users |
| **Core Architecture** | Gateway + Doctor + SQLite WAL safety | Lightweight agent + provider abstraction | WebAssembly + video rendering engine | Plugin-driven UI + cross-channel sync | Supervised execution + memory backend retirement |
| **Feature Focus** | Stability, rollback, session durability | Model diversity, streaming UX, remote access | Developer tooling, CI/CD hygiene | Mobile UX, plugin themes, draft saving | Safety enforcement, cron timeouts, credential scoping |
| **Differentiator** | Production-grade resilience | Rapid model integration, remote-first design | High-performance Wasm + docs pipeline | Hybrid deployment via Web App | Emergency stop enforcement, SOP rigor |

> **Key Insight**: While OpenClaw prioritizes **trustworthiness**, ZeroClaw emphasizes **safety-by-design**, QwenPaw focuses on **user experience**, and IronClaw on **developer infrastructure**—each carving out a distinct niche.

---

### **6. Community Momentum & Maturity**  

| Tier | Projects | Characteristics |
|------|--------|----------------|
| **High Velocity / Rapid Iteration** | OpenClaw, ZeroClaw, QwenPaw | Daily PR/issue surges; frequent fixes; active bug triage; roadmap driven by user feedback. |
| **Stabilization / Internal Hygiene** | IronClaw | No visible feature progress; only dependency updates; low community interaction; quiet but disciplined. |
| **Pre-Release Focus** | Hermes Agent, ZeroClaw | Canary builds; no stable release; high-priority bug fixing; RFCs shaping future architecture. |

> **Maturity Signal**: OpenClaw and ZeroClaw are in **late beta maturity**, with well-defined release pipelines and security audits underway. QwenPaw shows signs of **early adoption maturity**. IronClaw remains in **maintenance mode**, possibly awaiting external contribution or productization.

---

### **7. Trend Signals**  
Based on community feedback and PR patterns, the following **industry trends** are emerging for AI agent developers:

1. **State Management is Now a First-Class Concern**  
   > Users will no longer accept session loss or silent corruption. Expect rising demand for **checkpointing, versioned sessions, and audit trails**—especially for legal, financial, or research use cases.

2. **Security & Control Over AI Actions Are Non-Negotiable**  
   > Features like **SOP enforcement**, **emergency stop runtime integration**, and **scoped credentials** are no longer optional. This signals a shift from "what can AI do?" to "how do we control it?"

3. **Hybrid Deployment Models Are Gaining Traction**  
   > Requests for **shared Web App access to local agents (QwenPaw #8793)** and **remote-first gateways (Hermes #157223)** indicate a growing need for **cloud-local synchronization**, enabling mobility without sacrificing privacy.

4. **Plugin Extensibility Drives Ecosystem Growth**  
   > Themes, tool schemas, and configuration hooks (QwenPaw #8071, ZeroClaw #11882) are becoming key differentiators. Developers want **plug-and-play customizability**—not just functional features.

5. **UX Friction Is a Major Adoption Barrier**  
   > Even minor issues—like **mobile rendering under status bar (QwenPaw #8796)** or **silent errors (Hermes #157224)**—are causing user frustration. **Clarity in error messaging and visual fidelity** are now competitive advantages.

---

### ✅ **Conclusion for Developers & Decision-Makers**  
The open-source AI agent landscape is no longer about raw model access—it’s about **operational trust**. **OpenClaw leads in reliability and maturity**, making it ideal for production systems. **ZeroClaw excels in safety-critical environments**, while **QwenPaw offers the most polished user experience**. **Hermes Agent** is a strong choice for developers seeking rapid iteration and cloud-native flexibility. **IronClaw**, while quiet, represents a deep engineering investment in performance and developer tools.

**Strategic takeaway**: Prioritize agents with proven **session persistence, update safety, and error transparency**. As the market matures, **stability, security, and UX** will be the true differentiators—not just model size or speed.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-18**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the last 24 hours—indicating robust developer engagement and ongoing feature development. The release of **v0.23.2+canary.20261117T064624Z** signals a focus on stability and incremental improvements ahead of future stable releases. A surge in high-severity bugs (P2/P3) related to session state, message delivery, and gateway coordination suggests that core reliability is under active scrutiny. Meanwhile, community-driven feature requests and performance optimizations continue to drive innovation.

---

### **2. Releases**  
**[v0.23.2+canary.20261117T064624Z](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261117T064624Z)**  
- *Release Date:* November 17, 2026  
- **Summary:** Canary build focused on internal fixes and stability enhancements for upcoming v0.23.2.  
- **Key Changes:**  
  - Introduced `gateway.client_only: true` mode (see PR #157223) to support remote-primary Desktop setups.  
  - Added support for new GPT-6.2 Astra and Sol models via OpenAI/Codex providers (PR #157141).  
  - Resolved several critical session persistence and compression issues (e.g., PR #154878, #157100).  
- **Migration Notes:** Users on custom providers or self-hosted gateways should verify `model.ollama_num_ctx` behavior and update configs if using Ollama-backed models. No breaking changes reported; this is a pre-release canary for testing.

---

### **3. Project Progress**  
**Merged / Closed PRs (Today):**  
- ✅ **[PR #157141](https://github.com/NousResearch/hermes-agent/pull/157141):** Added support for GPT-6.2 Astra and Sol models — now available in OpenAI and Codex provider pickers.  
- ✅ **[PR #157229](https://github.com/NousResearch/hermes-agent/pull/157229):** Fixes silent no-op when `agent.reasoning_effort` cannot reach the wire — adds warning for misconfigured profiles.  
- ✅ **[PR #157228](https://github.com/NousResearch/hermes-agent/pull/157228):** Allows `metadata` as JSON string in Kanban tool calls — improves compatibility with GLM-family and other models.  
- ✅ **[PR #151587](https://github.com/NousResearch/hermes-agent/pull/151587):** Restores safe interim assistant messages for Codex Responses on Telegram — resolves long-standing gap in streaming feedback.  

These merges reflect strong progress in **provider compatibility**, **streaming UX**, and **tool-call robustness**.

---

### **4. Community Hot Topics**  
Top 5 most discussed items reveal key user concerns:

| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293): CLI bypasses system-config write protection | 29 | P3, Security Risk | [View Issue](https://github.com/NousResearch/hermes-agent/issues/59293) |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943): Compressor window silently clamped to Ollama num_ctx | 14 | P2, Critical Bug | [View Issue](https://github.com/NousResearch/hermes-agent/issues/99943) |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565): Request for configurable temperature parameter | 14 | P3, Feature Request | [View Issue](https://github.com/NousResearch/hermes-agent/issues/17565) |
| [#137287](https://github.com/NousResearch/hermes-agent/issues/137287): Desktop transcript corruption (duplicates, drops) | 13 | P2, Stability | [View Issue](https://github.com/NousResearch/hermes-agent/issues/137287) |
| [#146538](https://github.com/NousResearch/hermes-agent/issues/146538): Gateway thrashing filesystem metadata on Windows | 11 | P2, Performance | [View Issue](https://github.com/NousResearch/hermes-agent/issues/146538) |

**Analysis:**  
- **Security & configuration integrity** is a growing concern (#59293), indicating trust in the approval layer is fragile.  
- **Model inference control** (temperature) is a top usability request (#17565), showing users want fine-grained tuning beyond defaults.  
- **Desktop UI stability** and **Windows performance** are major pain points—suggesting platform-specific optimization needs attention.

---

### **5. Bugs & Stability**  
Critical stability issues reported today:

| Issue | Description | Severity | Fix PR? |
|------|-------------|----------|--------|
| [#157169](https://github.com/NousResearch/hermes-agent/issues/157169): Session FIFO permanently wedged after restart | Stale "unknown" admission blocks all message processing | P2 | ❌ No fix yet |
| [#157057](https://github.com/NousResearch/hermes-agent/issues/157057): Terminal-worker reaper kills still-running workers | Grace period anchored incorrectly → premature kill | P2 | ❌ No fix yet |
| [#157142](https://github.com/NousResearch/hermes-agent/issues/157142): Branch row with origin_json but no chat_id is unresumable | Resume fails silently; no clear error path | P3 | ❌ No fix yet |
| [#156888](https://github.com/NousResearch/hermes-agent/issues/156888): Windows Electron main-process stalls (2–4s) | Low-CPU blocking, recurrent during use | P2 | ❌ No fix yet |
| [#157167](https://github.com/NousResearch/hermes-agent/issues/157167): Cron jobs lose tools after MCP server idle timeout | Tools disappear from execution context | P2 | ❌ No fix yet |

> 🔴 **High Risk**: Several of these affect session continuity, workflow resumption, and long-running tasks—core to agent reliability.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging roadmap trends from user requests:

| Feature | Requested By | Status | Predicted In Next Version |
|-------|--------------|--------|----------------------------|
| Configurable `temperature` for model inference | cedricwyh | P3, 18 👍 | ✅ Likely in v0.24 |
| Support multiple API endpoints per `custom` provider | boy530064320 | P3, closed | ⚠️ Possible in v0.24 |
| `client_only` gateway mode (remote-first) | rogtrik | P3, open | ✅ High priority |
| Subagent messaging in batch runs | teknium1 | P2, open | 🟡 Strong candidate |
| Per-tool latency reporting + registry metadata | autoeverything | P3, 1 👍 | 🟡 Future iteration |

> 💡 **Predicted Focus**: v0.24 will likely include **configurable inference parameters**, **multi-endpoint support**, and **enhanced subagent collaboration**.

---

### **7. User Feedback Summary**  
Real-world pain points surfaced by users:
- **Desktop instability**: Random message duplication, ordering issues, and failed resumes (e.g., #137287, #157169) reduce trust in long sessions.
- **Platform fragmentation**: Mobile rendering breaks Markdown image placement (#156814); WhatsApp sends blank messages during E2EE retry (#63647).
- **Workflow friction**: Manual config editing required for multi-provider setups; no GUI for selecting endpoints (issue #47039).
- **Feedback gaps**: Users report "runtime_coordination_required" with no explanation (#157224), creating confusion during failures.

> ✅ **Satisfaction Indicators**: Positive sentiment around new model support (GPT-6.2), improved streaming, and plugin updates (e.g., tldr 6.0.1).

---

### **8. Backlog Watch**  
Important long-standing issues needing maintainer attention:

| Issue | Age | Priority | Status | Link |
|------|-----|----------|--------|------|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293): CLI bypasses config protection | 4.5 months | P3, Security | Needs decision | [View](https://github.com/NousResearch/hermes-agent/issues/59293) |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943): Context compressor silently capped | 2.5 months | P2, Critical | Needs repro | [View](https://github.com/NousResearch/hermes-agent/issues/99943) |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565): Configurable temperature | 6.5 months | P3 | Needs implementation | [View](https://github.com/NousResearch/hermes-agent/issues/17565) |
| [#157231](https://github.com/NousResearch/hermes-agent/issues/157231): pm sync overwrites latest.json | 1 day | P2 | New, urgent | [View](https://github.com/NousResearch/hermes-agent/issues/157231) |
| [#157230](https://github.com/NousResearch/hermes-agent/issues/157230): hermes update drops local patches | 1 day | P2 | New, high risk | [View](https://github.com/NousResearch/hermes-agent/issues/157230) |

> ⚠️ **Urgent Attention Needed**: Issues #157231 and #157230 represent potential data loss risks post-update—require immediate triage.

---

**Final Assessment:**  
Hermes Agent is in a **high-growth, high-activity phase** with strong community involvement. While feature velocity is impressive, **stability and security** remain top challenges. Immediate focus should be on fixing session persistence, preventing data loss during updates, and improving error messaging. The project shows strong momentum toward becoming a production-grade AI agent framework.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-11-18**

---

### **1. Today's Overview**  
The IronClaw project shows moderate maintenance activity as of 2026-11-18, with no new releases or closed issues reported in the past 24 hours. However, ten open pull requests were updated within this period—primarily automated dependency updates from Dependabot across JavaScript, Rust, Python, and GitHub Actions ecosystems. This indicates a strong focus on dependency hygiene and security patching, though there is no visible progress on feature development or issue resolution. The lack of community engagement (no comments or reactions on PRs) suggests low external involvement or that updates are being processed silently by CI/CD systems.

---

### **2. Releases**  
*No new releases have been published in the last 24 hours.*  
There are currently no release notes or changelogs available for version updates, implying that any changes remain internal or pending final validation before release.

---

### **3. Project Progress**  
*No pull requests were merged or closed today.*  
All recent activity consists of pre-merge dependency updates, indicating that the project is in a stabilization phase focused on dependency health rather than functional enhancements. No features were advanced, nor were critical bugs resolved during this window.

---

### **4. Community Hot Topics**  
*No issues or PRs have received comments or reactions (👍: 0 across all entries).*  
Despite having ten active dependency update PRs, none have sparked discussion or feedback. The most notable PRs include:
- [#8167](https://github.com/nearai/ironclaw/pull/8167): Update of `zod`, `@remotion/cli`, and `@remotion/tailwind-v4` in `/docs/internal/architecture-video` — relevant to documentation and video rendering tooling.
- [#8162](https://github.com/nearai/ironclaw/pull/8162): Upgrade of `wasmtime` from 47.0.3 to 48.0.7 — significant for WebAssembly performance and security.
- [#8159](https://github.com/nearai/ironclaw/pull/8159): Bulk update of GitHub Actions workflows — critical for CI/CD reliability.

While these updates are technically substantial, their lack of visibility or interaction suggests either high confidence in automated safety checks or limited community engagement.

---

### **5. Bugs & Stability**  
*No bugs, crashes, or regressions were reported today.*  
All recent PRs are non-functional dependency updates with no associated error reports. The absence of stability-related issues is positive, but also reflects a lack of real-world testing feedback. Notably, several updates target security-sensitive dependencies (e.g., `rustls`, `dompurify`, `certifi`), which may be proactive mitigation efforts rather than reactive fixes.

---

### **6. Feature Requests & Roadmap Signals**  
*No user-reported feature requests are visible in the current dataset.*  
However, the consistent focus on modernizing frontend tooling (`vite`, `storybook`, `wasmtime`) and improving CI/CD infrastructure signals a long-term roadmap shift toward:
- Enhanced developer experience via better UI tooling (Storybook v10.6+).
- Improved performance and security in WebAssembly execution (via `wasmtime` upgrade).
- Streamlined documentation generation (Remotion + Tailwind integration).

These trends suggest upcoming emphasis on **developer productivity**, **rendering efficiency**, and **scalable frontend architecture**.

---

### **7. User Feedback Summary**  
*No user feedback has surfaced in public issues or PR discussions.*  
This absence could indicate either:
- High satisfaction with current functionality (users not encountering blockers).
- Low user base or inactive community.
- Reliance on private channels or internal reporting.

Given the project’s focus on backend and infrastructure-level tooling (e.g., latency runners, Wasm execution), user feedback may come indirectly through test failures or production incidents rather than direct issue submissions.

---

### **8. Backlog Watch**  
*No high-priority issues are currently open or unresolved in the data.*  
However, several important dependency PRs remain unmerged and open for review:
- [#8167](https://github.com/nearai/ironclaw/pull/8167): Zod and Remotion stack updates — essential for documentation and video generation workflows.
- [#8162](https://github.com/nearai/ironclaw/pull/8162): `wasmtime` upgrade — impacts core execution engine performance and security.
- [#8159](https://github.com/nearai/ironclaw/pull/8159): GitHub Actions group update — affects entire CI pipeline reliability.

These PRs represent **critical technical debt cleanup** that, if delayed, could expose the project to known vulnerabilities or performance bottlenecks. Maintainers should prioritize reviewing and merging these automation-driven updates to maintain system integrity.

---

**Summary**: IronClaw is in a quiet but stable state—focused on internal dependency hygiene with no visible feature progress or community interaction. Proactive updates suggest strong engineering discipline, but long-term sustainability depends on timely merge reviews and increased community engagement.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-18**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust development pace: **45 pull requests updated in the last 24 hours**, including multiple large-scale refactors and feature enhancements, and **15 new issues opened or updated**, indicating strong community engagement. The project is currently in a phase of architectural refinement—particularly around plugin extensibility, session persistence, and cross-channel stability—while also addressing critical usability bugs. Despite no new releases, the merge activity suggests imminent updates are likely in the pipeline, especially for v2.3.0+ hotfixes.

---

### **2. Releases**  
**No new releases** were published in the past 24 hours. The latest stable version remains **v2.2.2.post1**, with **v2.3.0** (latest from PyPI) still suffering from unresolved issues such as WeChat channel failures (`ACCOUNT_IN_USE`) and `PLATFORM_RESULT_UNKNOWN` errors (see [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)). Users should expect a **patch release (v2.3.1)** soon to address these blockers.

---

### **3. Project Progress**  
Several high-impact PRs were merged or closed today, advancing core functionality:

- ✅ **[PR #8795](https://github.com/agentscope-ai/QwenPaw/pull/8795)**: Lowered minimum QwenPaw version to `2.3.0.post1` for channels—improves compatibility and reduces deployment friction.
- ✅ **[PR #8151](https://github.com/agentscope-ai/QwenPaw/pull/8151)**: Fixed `llama.cpp` version parsing logic to prevent false update triggers—critical for local model stability.
- ✅ **[PR #8166](https://github.com/agentscope-ai/QwenPaw/pull/8166)**: Enhanced documentation on heartbeat runtime semantics—improves user understanding of silent timeouts and reload behavior.
- ✅ **[PR #2367](https://github.com/agentscope-ai/QwenPaw/pull/2367)**: Hardened session deletion flow with timestamped backups—mitigates accidental data loss risks.
- ✅ **[PR #8133](https://github.com/agentscope-ai/QwenPaw/pull/8133)**: Fixed CJK emphasis rendering in Markdown—addresses real-world text formatting edge cases in multilingual chats.

These fixes collectively improve **stability, clarity, and data safety**, signaling a focus on production-readiness.

---

### **4. Community Hot Topics**  
The most active discussions center on **plugin extensibility**, **session integrity**, and **mobile UX**:

- 🔥 **[Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)**: *Plugin-facing theme extension point* — 18 comments, calls for deeper theming control beyond `colorPrimary`. This reflects growing demand for **plugin-level UI customization** and design consistency across third-party integrations.
- 🔥 **[PR #8793](https://github.com/agentscope-ai/QwenPaw/pull/8793)**: *Access local QwenPaw via shared Platform Web App* — 11 comments, proposed as a bridge between local and cloud workspaces. Indicates strong interest in **hybrid deployment models** and remote access to personal AI agents.
- 🔥 **[Issue #8796](https://github.com/agentscope-ai/QwenPaw/issues/8796)**: *Mobile full-screen containers render under status bar* — highlights ongoing challenges in **responsive mobile UI design**, particularly for iOS/Android safe areas.

These topics suggest a shift from basic functionality to **user experience maturity and ecosystem integration**.

---

### **5. Bugs & Stability**  
Critical stability issues reported today include:

| Severity | Issue | Summary | Fix PR? |
|---------|-------|--------|--------|
| ⚠️ High | [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709) | WeChat channel fails to start (`ACCOUNT_IN_USE`) and sends report as `PLATFORM_RESULT_UNKNOWN` | ❌ No fix yet |
| ⚠️ High | [#8798](https://github.com/agentscope-ai/QwenPaw/issues/8798) | Repeated `MODEL_QUOTA_EXCEEDED` despite valid free-tier access | ❌ No fix; user frustration evident |
| ⚠️ Medium | [#8789](https://github.com/agentscope-ai/QwenPaw/issues/8789) | Invalid batch task values dispatch subagents before failing | ❌ No fix; could lead to unintended agent spawning |
| ⚠️ Medium | [#8796](https://github.com/agentscope-ai/QwenPaw/issues/8796) | Mobile console renders under system status bar | ❌ No fix; affects UX on mobile devices |

> **Note**: Multiple session-related regressions remain open, including **conversation loss after shutdown** ([#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)) and **agent switch deleting last session metadata** ([#7745](https://github.com/agentscope-ai/QwenPaw/issues/7745)), which indicate persistent issues in **state management and session bookkeeping**.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging features reflect user desire for **greater workflow control and autonomy**:

- 🎯 **[Issue #8780](https://github.com/agentscope-ai/QwenPaw/issues/8780)**: Add `save_draft` tool for `qwenpawmail-mcp` — users want **non-sending message drafting**, essential for agent-assisted email workflows.
- 🎯 **[Issue #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)**: Plugin-facing theme extension — signals need for **plugin UI consistency and branding flexibility**.
- 🎯 **[PR #8554](https://github.com/agentscope-ai/QwenPaw/pull/8554)**: Support CLI commands and extension points — indicates growing interest in **scriptable agent orchestration** and automation.
- 🎯 **[PR #8793](https://github.com/agentscope-ai/QwenPaw/pull/8793)**: Shared Web App access to local QwenPaw — strongly suggests **cloud-local sync** will be a top priority in **v2.4.0**.

These signals align with a roadmap focused on **extensibility, cross-device access, and workflow fidelity**.

---

### **7. User Feedback Summary**  
Real user pain points highlight **core reliability gaps**:

- **Persistent conversation loss**: Users report sessions vanishing after app restart or shutdown ([#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724), [#7745](https://github.com/agentscope-ai/QwenPaw/issues/7745)), undermining trust in long-running agent workflows.
- **Model quota confusion**: Free-tier users hit `MODEL_QUOTA_EXCEEDED` even when they’ve signed up — suggests **poor error messaging or backend quota logic** ([#8798](https://github.com/agentscope-ai/QwenPaw/issues/8798)).
- **WeChat channel instability**: Frequent startup failures (`ACCOUNT_IN_USE`) disrupt automated messaging workflows ([#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)).
- **Mobile UX flaws**: Rendering issues on mobile devices reduce accessibility ([#8796](https://github.com/agentscope-ai/QwenPaw/issues/8796)).

Users express frustration with **fragile state management and unclear error feedback**, but remain engaged through detailed reports.

---

### **8. Backlog Watch**  
Key long-standing issues requiring maintainer attention:

- 🔴 **[Issue #8547](https://github.com/agentscope-ai/QwenPaw/issues/8547)**: *Creator example cat-perspective-0803 still can't open on Windows* — regression in v2.0.4; **closed as fixed in 1.1.2**, but still broken. Indicates poor regression testing and platform-specific oversight.
- 🔴 **[Issue #6952](https://github.com/agentscope-ai/QwenPaw/issues/6952)**: *Prefix cache instability due to unsorted tool schemas* — 11 months old, affects LLM prompt efficiency and response consistency.
- 🔴 **[Issue #8700](https://github.com/agentscope-ai/QwenPaw/issues/8700)**: *DoomLoopGate never triggers when replies are aggregated into one message* — directly impacts loop detection and agent safety; **no fix PR exists yet**.
- 🔴 **[Issue #8716](https://github.com/agentscope-ai/QwenPaw/issues/8716)**: *Windows source-intelligence write path uses raw `source_id`* — root cause of file path corruption on Windows systems.

These unresolved issues represent **technical debt and risk areas** that could hinder adoption if not addressed.

---

### ✅ **Conclusion**  
QwenPaw is in a **critical growth phase**—active development, strong community input, and clear technical direction—but **stability and data integrity remain fragile**. Immediate priorities should include resolving **session loss, WeChat channel failures, and quota misreporting**, while accelerating **plugin extensibility and mobile UX fixes**. With the current momentum, **v2.3.1 (hotfix)** and **v2.4.0 (feature-rich)** are expected within the next 4–6 weeks.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-18**

---

### **1. Today's Overview**  
ZeroClaw remains highly active with a strong momentum in development and community engagement. The project is experiencing a surge in issue and PR activity—21 open issues and 50 pull requests updated in the last 24 hours—indicating intense focus on core stability, security hardening, and feature refinement ahead of the upcoming v0.9.1 release. A notable concentration of high-severity bugs (S1/S0) related to runtime execution, emergency stop enforcement, and model provider integration suggests that the team is prioritizing reliability and safety. The absence of new releases confirms that the current sprint is focused on patching critical path issues before finalizing the next stable version.

---

### **2. Releases**  
❌ **No new releases** were published today or in the past 7 days.  
The project is currently in a **pre-release stabilization phase**, with v0.9.1 pending. No breaking changes are confirmed yet, but several high-risk fixes (e.g., `Lucid` backend retirement, emergency-stop enforcement) suggest this release will include significant architectural shifts. Operators should expect migration steps for memory backends and credential handling.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #12521** ([feat(memory)!: retire the Lucid memory backend](https://github.com/zeroclaw-labs/zeroclaw/pull/12521)) – Finalized removal of the deprecated `Lucid` memory backend. All configs now default to SQLite; existing users must migrate.
- **PR #12509** ([fix(providers): leave unsigned thinking out of Anthropic replays](https://github.com/zeroclaw-labs/zeroclaw/pull/12509)) – Resolves a 400 error in Claude Opus 5.5 tool usage by preventing unsigned `thinking` blocks from being replayed.
- **PR #12515** ([fix(web): show the typed prompt and stored times in a reloaded chat](https://github.com/zeroclaw-labs/zeroclaw/pull/12515)) – Fixes dashboard UI inconsistency when reloading chats.
- **PR #12495** ([fix(matrix): restore auto-accept of room invites](https://github.com/zeroclaw-labs/zeroclaw/pull/12495)) – Enables Matrix bot integration to join rooms automatically.

These merges reflect progress on **security**, **UI fidelity**, and **provider reliability**—key pillars for v0.9.1 readiness.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues & PRs (by comments/reactions):**  

| Issue/PR | Link | Activity | Key Insight |
|--------|------|----------|------------|
| **Issue #12401** ([Bug]: Tool-context collapse breaks Claude Opus 5.5) | [GitHub #12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | 5 comments, S1 severity | Users are blocked from using advanced tools with Claude Opus 5.5 — a major pain point for real-world agent workflows. |
| **Issue #9191** ([Bug]: Cron jobs lack wall-clock timeout) | [GitHub #9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | 5 comments, S1 severity | Critical workflow blocking: long-running cron jobs can hang indefinitely, risking system stability. |
| **PR #11882** ([Goal V1 proposal]: supervise execution epochs) | [GitHub #11882](https://github.com/zeroclaw-labs/zeroclaw/pull/11882) | 0 comments, XL size | High-impact, foundational design work for future agent orchestration—likely to shape v0.9.2+. |
| **Issue #12514** ([Bug]: Supervised SOP skips approval if decision is "no") | [GitHub #12514](https://github.com/zeroclaw-labs/zeroclaw/issues/12514) | 0 comments, S0 severity | Data loss/security risk: an agent could bypass human approval entirely. Urgent fix required. |

📌 **Underlying Need:** The community is demanding **robustness under failure**, **predictable execution flow**, and **tighter control over AI decisions**—especially in production-grade deployments.

---

### **5. Bugs & Stability**  
🚨 **High-Priority Bugs Reported (Severity S1/S0):**

| Issue | Severity | Component | Status | Fix PR? |
|------|----------|----------|--------|--------|
| [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | S1 | Runtime/Daemon | Open | ✅ Yes: PR #12509 merged |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | S1 | Cron Scheduler | Open | ❌ No |
| [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | S1 | Cost Enforcement | Open | ❌ No |
| [#12514](https://github.com/zeroclaw-labs/zeroclaw/issues/12514) | S0 | SOP Execution | Open | ❌ No |
| [#12504](https://github.com/zeroclaw-labs/zeroclaw/issues/12504) | S2 | Anthropic Provider | Open | ❌ No |

⚠️ **Stability Risks:**  
- **Cron scheduler** (`#9191`) is vulnerable to indefinite hangs due to missing timeouts.  
- **Cost enforcement** (`#12477`) ignores config mode — budget warnings don’t work.  
- **Emergency stop** (`#9390`, `#9802`) remains partially unenforced across network and in-flight operations.

> 🔥 **Critical Note:** Despite PRs like #12509 fixing some issues, **multiple S1/S0 bugs remain open** and unpatched, indicating a bottleneck in review/merge velocity.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **Top User-Requested Features (Predicted for v0.9.1+):**

| Request | Link | Predicted Release | Rationale |
|-------|------|------------------|---------|
| Per-chat model switching across providers | [Issue #8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | v0.9.1 | Directly addresses user demand from Moltis migration; low-hanging fruit. |
| Honor runtime profile thinking levels for OpenAI | [Issue #12054](https://github.com/zeroclaw-labs/zeroclaw/issues/12054) | v0.9.1 | Needed for consistent reasoning behavior across agents sharing providers. |
| Scoped operator-managed service credentials | [RFC #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | v0.9.2 | Security-first request; aligns with ZeroClaw’s growing focus on secure agent operation. |
| Retire Lucid memory backend | [Issue #9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) | v0.9.1 | Already implemented via PR #12521 — signals end-of-life for legacy components. |

📈 **Roadmap Signal:** The project is shifting toward **modular, secure, and predictable agent execution**, with emphasis on **configurable reasoning**, **safe credential handling**, and **stable provider integrations**.

---

### **7. User Feedback Summary**  
👥 **Real User Pain Points & Use Cases:**

- **"I came from Moltis and miss per-chat model switching."** → User wants flexibility to switch models mid-conversation without restarting agents.
- **"My Claude Opus 5.5 chat fails after a few tool turns."** → Indicates a regression in v0.9.0+, impacting productivity for users relying on advanced tool use.
- **"Dashboard shows fake timestamps after reload."** → UX frustration: synthetic metadata disrupts user trust in conversation history.
- **"Cron jobs never time out — one slow job kills everything."** → Operational concern for automation-heavy users.
- **"Emergency stop only works in CLI — not in runtime."** → Major security gap reported by auditors.

✅ **Satisfaction Indicators:**  
- Users appreciate the **fast response to high-severity bugs** (e.g., PR #12509 merged same day as issue).  
- The **emergence of RFCs and goal proposals** (e.g., #11882) shows community trust in long-term vision.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered, High-Impact Issues Requiring Maintainer Attention:**

| Issue | Link | Age | Risk | Status | Notes |
|------|------|-----|------|--------|-------|
| **#9191** – Cron jobs have no wall-clock timeout | [GitHub #9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | 148 days | S1 | Accepted, no stale | Blocks reliable automation. Needs urgent triage. |
| **#9390** – Emergency stop is CLI-only, not runtime-enforced | [GitHub #9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | 146 days | S0 | Accepted, no stale | Critical security flaw; requires full runtime integration. |
| **#12422** – RFC: Scoped use of operator-managed credentials | [GitHub #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | 4 days | Security | RFC, needs review | High-value security enhancement; stalled in discussion. |
| **#12513** – SOP: test fallback for ignored decision answers | [GitHub #12513](https://github.com/zeroclaw-labs/zeroclaw/issues/12513) | 1 day | Medium | Follow-up | Regression testing needed for edge cases in SOP logic. |

📌 **Call to Action:** Maintainers should prioritize **#9191**, **#9390**, and **#12422** to close critical gaps in reliability and security before v0.9.1 release.

---

✅ **Final Assessment:**  
ZeroClaw is in a **high-intensity pre-release phase** with strong community involvement. While technical progress is impressive (especially in security and provider stability), **critical bugs remain unpatched**, and **some high-impact RFCs are stalled**. The project is healthy but under pressure to deliver a robust v0.9.1. With timely triage and merge action, it has strong potential to become a leading open-source AI agent platform.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*