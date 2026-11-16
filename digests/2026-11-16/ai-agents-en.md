# OpenClaw Ecosystem Digest 2026-11-16

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-16 02:22 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-16**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 500 issues and 500 pull requests updated in the last 24 hours—indicating intense development momentum and community engagement. A surge of high-severity bugs (P0/P1) related to startup reliability, session management, and plugin loading has emerged, particularly on Windows and macOS. While no new releases were published, the volume of PRs suggests a strong push toward stabilizing core workflows ahead of an imminent update cycle. The project continues to face significant challenges in cross-platform consistency, especially around process lifecycle handling and dependency management.

---

### **2. Releases**  
❌ **No new releases** were published today.  
*Note: The most recent stable version is 2026.10.8, with 2026.11.5-beta.1 released earlier this month. No migration notes or breaking changes are currently documented for upcoming releases.*

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #199626** (`fix(memory-wiki): keep imported Markdown links pointing to generated pages`) — Resolves broken internal links in wiki imports.  
- **PR #199639** (`fix(cli): show actionable inference preflight errors with JSON`) — Improves CLI error clarity for `--json` output.  
- **PR #199642** (`fix(cli): preserve Gmail setup remedies in JSON failures`) — Ensures actionable fixes appear in machine-readable output.  
- **PR #198302** (`fix(plugins): keep Gateway responsive during initial plugin loading`) — Addresses main-thread blocking during plugin boot (critical for UX).  

🔹 These fixes reflect a focus on **CLI usability**, **plugin stability**, and **error surface transparency**, suggesting the team is prioritizing developer and operator experience ahead of next-gen features.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count & Severity:**  
| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 82 | P0, 🦞 diamond lobster | [Gateway blocks for minutes on large plugin load](https://github.com/openclaw/openclaw/issues/160959) |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 33 | P0, 🦐 gold shrimp | [Windows: slow startup, unclean shutdown, schtasks permission errors](https://github.com/openclaw/openclaw/issues/170956) |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | 28 | P2, 🦪 silver shellfish | [macOS gateway stop fails with "ancestry could not be inspected"](https://github.com/openclaw/openclaw/issues/191944) |

🔍 **Underlying Needs:**  
- **Cross-platform reliability**: Persistent crashes and hangs on Windows/macOS indicate platform-specific race conditions in process lifecycle management.  
- **Plugin performance at scale**: Large external dependencies cause multi-minute stalls, undermining usability in enterprise or research environments.  
- **Update resilience**: Users report frequent failed restarts and updates—suggesting deep systemic flaws in managed service handoffs.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (2026-11-15–16):**  
| Bug | Severity | Impact | Fix PR? |
|-----|----------|--------|--------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | P0 | Crash-loop, UX blocker | ❌ No fix yet |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | P0 | Release blocker (Windows) | ❌ No fix |
| [#193962](https://github.com/openclaw/openclaw/issues/193962) | P0 | Update failure due to probe timeout | ✅ Fixed in #187197 but unreachable via `update` command |
| [#174681](https://github.com/openclaw/openclaw/issues/174681) | P1 | Regression: plugin prep blocks main thread | ✅ Reverted in `release` branch |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | P1 | Native Codex completions fail to resume parent | ❌ No fix |

⚠️ **Stability Trends:**  
- Multiple regressions tied to **plugin loading**, **agent handoff logic**, and **session state transitions**.  
- Critical path failures (e.g., `gateway stop`, `update`, `restart`) remain unresolved despite being flagged as P0.  
- **"Crash-loop"** and **"UX-release-blocker"** labels dominate top-tier issues—signaling instability in production deployments.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **High-Priority Feature Requests:**  
- **[#166586](https://github.com/openclaw/openclaw/issues/166586)**: Consume MCP Events from configured servers → *Signals intent to expand event-driven agent orchestration.*  
- **[#197297](https://github.com/openclaw/openclaw/issues/197297)**: Per-user secret vault → *Indicates growing need for granular access control in multi-user environments.*  
- **[#199872](https://github.com/openclaw/openclaw/pull/199872)**: Fix IME input behavior in Usage filters → *Highlights pain point in international user workflows.*  

🔮 **Predicted Next Features:**  
- **Dynamic automation scaling** (based on #197394/#197395) — likely to ship soon given PR maturity and dependency resolution.  
- **Enhanced session persistence & naming** (from #103067) — long-standing request indicating need for better session discoverability.  
- **Improved mobile UI responsiveness** — signaled by #199713 (mobile Chrome hang).

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points:**  
- **Windows users** report unreliable restarts and updates due to `schtasks` permission issues (#170956).  
- **macOS users** struggle with `gateway stop` failing silently (#191944), forcing manual kills.  
- **Large plugin users** describe 5–10 minute startup delays (#160959), rendering the system unusable in time-sensitive contexts.  
- **Mobile users** report UI freezes in Chrome after opening Plugins Advanced panel (#199713).  
- **Developers** complain about opaque error messages in CLI (`--json`) output, losing actionable insights (#199869, #199891).

✅ **Positive Signals:**  
- High-quality PRs like #198302 (plugin responsiveness) suggest strong engineering discipline.  
- Active use of `clawsweeper` labels indicates mature triage practices.  
- Frequent live repros and detailed logs (e.g., #143017) reflect engaged, technical users.

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered High-Impact Items Needing Maintainer Attention:**  
| Issue | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 2026-09-29 | Open, P0, 82 comments | Blocks large-plugin use cases; affects all platforms |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 2026-10-13 | Open, P0, 33 comments | Critical for Windows adoption; release blocker |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | 2026-08-10 | Open, P1, 18 comments | Model fabricates tool calls—security risk if unchecked |
| [#103067](https://github.com/openclaw/openclaw/issues/103067) | 2026-07-09 | Open, P2, 10 comments | Centralized session naming needed for scalability |
| [#199713](https://github.com/openclaw/openclaw/issues/199713) | 2026-11-15 | Open, P1, 7 comments | Mobile UI freeze reported just today—urgent UX issue |

🔧 **Action Required:**  
Maintainers should prioritize **P0 issues with high comment counts** and **revert/review regression fixes** (e.g., #174681). The backlog shows clear gaps in **cross-platform reliability**, **session lifecycle**, and **user visibility**—all critical for trust and adoption.

---

**📊 Project Health Snapshot (2026-11-16):**  
- **Activity Level:** ⭐⭐⭐⭐⭐ (Extremely high)  
- **Stability:** ⭐⭐☆☆☆ (Serious issues in core workflows)  
- **User Trust:** ⭐⭐☆☆☆ (High frustration in key scenarios)  
- **Roadmap Clarity:** ⭐⭐⭐⭐☆ (Strong signals in feature direction)  

> 🔗 *Full data: [GitHub OpenClaw Repository](https://github.com/openclaw/openclaw)*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-11-16)**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a phase of rapid maturation, marked by increasing specialization in security, cost governance, and cross-platform reliability. Projects are diverging in focus—ranging from lightweight multi-channel integrations to enterprise-grade, secure agent orchestration—while converging on shared needs around session integrity, configuration transparency, and financial accountability. A clear trend toward *operational resilience* is evident, driven by real-world deployment demands in hybrid (local/cloud) and multi-user environments. The community is no longer just building tools; it’s engineering trust, auditability, and long-term sustainability into core workflows.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score (⭐/5) |
|--------|------------------|---------------|----------------|--------------------|
| **OpenClaw** | 500 | 500 | ❌ No new release | ⭐⭐☆☆☆ |
| **Hermes Agent** | 50 | 50 | ✅ v0.23.1+canary | ⭐⭐⭐⭐☆ |
| **IronClaw** | 3 | 1 | ❌ No new release | ⭐⭐⭐☆☆ |
| **QwenPaw** | 16 | 15 | ❌ No new release | ⭐⭐☆☆☆ |
| **ZeroClaw** | 29 | 50 | ❌ No new release | ⭐⭐☆☆☆ |

> *Health score reflects stability, user trust, and roadmap clarity based on bug severity, backlog depth, and feature momentum.*

---

### **3. OpenClaw's Position**  
**Advantages vs Peers**:  
- **Highest development velocity**—500 issues and 500 PRs in 24 hours signals unmatched community engagement and active contributor base.  
- **Deep CLI and plugin UX focus**—PRs like `fix(cli): show actionable inference preflight errors with JSON` demonstrate a strong commitment to developer experience and observability.  
- **Broad cross-platform visibility**—issues on Windows/macOS indicate widespread real-world usage across OS boundaries.

**Technical Approach Differences**:  
- Unlike ZeroClaw’s infrastructure refactoring or IronClaw’s cost modeling, OpenClaw prioritizes *runtime stability* and *plugin lifecycle management*. Its P0 bugs center on startup hangs and session state corruption—indicating a project focused on usability under load rather than architectural overhaul.  
- Less emphasis on security hardening or cost control compared to ZeroClaw and IronClaw, suggesting a more general-purpose, workflow-first design.

**Community Size Comparison**:  
OpenClaw leads in activity volume by an order of magnitude. While Hermes Agent shows disciplined iteration and QwenPaw has strong niche traction (WeChat/Feishu), OpenClaw’s scale suggests the largest active developer and user base among the five projects—making it the de facto reference implementation for agent workflows.

---

### **4. Shared Technical Focus Areas**  

| Need | Projects Affected | Specific Requirements |
|------|-------------------|------------------------|
| **Session Lifecycle & State Integrity** | OpenClaw, Hermes Agent, ZeroClaw | Resilient resume after migration; avoid silent failures; prevent unresumable sessions post-move |
| **Cross-Platform Reliability (Windows/macOS)** | OpenClaw, ZeroClaw, QwenPaw | Fix process lifecycle issues (e.g., `gateway stop`, `rename_new`), clean shutdowns, permission handling |
| **Plugin/Tooling Stability at Scale** | OpenClaw, QwenPaw, ZeroClaw | Prevent main-thread blocking; handle large plugin loads gracefully; avoid credential collisions |
| **Cost Visibility & Enforcement** | IronClaw, ZeroClaw | USD-based budgeting; real-time cost tracking; configurable enforcement modes (`warn`, `enforce`) |
| **Security Hardening (Scoped Credentials)** | ZeroClaw, Hermes Agent, OpenClaw | Scoped access controls; prevention of RCE via shell scripts; audit trails for tool execution |

> 🔍 These areas represent *emergent industry standards*—not optional features but foundational requirements for production-grade agents.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Primary Focus** | Workflow reliability & CLI UX | Identity portability & multi-profile sync | Financial governance & cost-aware execution | Multi-channel integration (WeChat/Feishu) | Secure, scalable agent orchestration |
| **Target Users** | Developers, researchers, power users | Personal AI identity owners, nomadic users | Enterprises, cost-conscious teams | Teams, family installations | Regulated enterprises, security-first orgs |
| **Architecture** | Monolithic agent + plugin framework | Unified gateway + profile migration | Configurable provider routing + cost engine | Channel-centric agent manager | Canonical registry + scoped credential model |
| **Key Innovation** | Actionable error surfaces & plugin resilience | Reversible profile moves & backup/transfer | USD budgeting cascades | Native WeChat/Feishu support | Wazuh integration & write-only WebUI credentials |

> ✅ **Differentiation Insight**: While all projects aim to enable autonomous agents, they’ve carved distinct niches:  
> - *OpenClaw*: **Stability-first** for complex workflows  
> - *Hermes Agent*: **Identity mobility** for personal AI continuity  
> - *IronClaw*: **Financial control** for sustainable AI use  
> - *QwenPaw*: **Channel-native** collaboration  
> - *ZeroClaw*: **Enterprise-grade security** and compliance

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Characteristics |
|------|--------|----------------|
| **High Velocity / Rapid Iteration** | OpenClaw, ZeroClaw, Hermes Agent | >50 PRs/day; frequent canary releases; high comment counts on critical issues |
| **Feature-Driven Growth** | QwenPaw | Active plugin development, localization efforts, channel expansion |
| **Stabilizing / Patch-Focused** | IronClaw | Low issue volume, but high-impact fixes in progress (e.g., pricing, timeouts) |

> 📈 **Maturity Signal**: OpenClaw and ZeroClaw are in **"fracture point" mode**—high activity masking systemic instability. Hermes Agent is transitioning into **"stabilized innovation"**, balancing new features with quality assurance. IronClaw and QwenPaw are in **"feature refinement"** phases, preparing for next-gen versions with tighter technical foundations.

---

### **7. Trend Signals**  
Based on community feedback and PR patterns, the following **industry-wide trends** are emerging:

1. **From Heuristic Limits to Financial Accountability**  
   → IronClaw’s USD budgeting (#2843) and ZeroClaw’s cost enforcement (#12477) signal a shift from time/iteration caps to **real-time cost governance**—critical for scaling AI workloads.

2. **Security-by-Default Design**  
   → ZeroClaw’s RFC on operator-managed credentials (#12422), OpenClaw’s plugin blocking issues, and QwenPaw’s credential leakage concerns highlight growing demand for **scoped access, audit trails, and privilege minimization**.

3. **Agent as Identity, Not Just Tool**  
   → Hermes Agent’s `hermes move` and backup/transfer features reflect a paradigm shift: users treat agents as persistent, portable identities requiring **portability, disaster recovery, and persistence**.

4. **Operational Observability is Non-Negotiable**  
   → OpenClaw’s CLI error improvements, ZeroClaw’s cost estimation requests, and QwenPaw’s missing checkpoint navigation reveal that **transparent, actionable diagnostics** are now essential—not optional.

5. **Multi-User Workflows Demand RBAC**  
   → QwenPaw’s #8751 (multi-user support) and ZeroClaw’s #12441 (user identity to tools) indicate that **team and family use cases** are driving enterprise adoption.

> 💡 **Value for Developers**: The ecosystem is moving beyond “can it run?” to “can it be trusted?”—with success hinging on **security, cost control, and operational clarity**. Tools that prioritize these will dominate in 2027 and beyond.

---

> ✅ **Recommendation for Developers & Decision-Makers**:  
> Prioritize projects with **strong stability signals (e.g., Hermes Agent, IronClaw)** for production use. Use **OpenClaw and ZeroClaw** for early-stage experimentation and contribution. Monitor **QwenPaw** for team/collaborative use cases. Invest in tooling that enables **cost monitoring, session recovery, and secure credential handling**—these are now table stakes for any serious AI agent deployment.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-16**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust developer engagement and rapid iteration. The release of `v0.23.1+canary.20261115T064406Z` signals a focus on stability and feature integration ahead of potential v0.24.0. High activity is concentrated around session management, gateway reliability, security hardening, and desktop UX improvements. Community contributions are accelerating, particularly in authentication, profile migration, and toolset isolation.

---

### **2. Releases**  
**New Release**: `v0.23.1+canary.20261115T064406Z` (released Nov 15, 2026)  
- **Highlights**: Canary build focused on post-merge stabilization following the unified gateway rollout (#106742).  
- **Key Changes**:  
  - Resolves lingering issues from multiplexed profile gateway migration (e.g., #143150, #130676).  
  - Includes fixes for desktop session resume failures and storage state inconsistencies.  
- **Migration Note**: Users upgrading from pre-multiplex gateways should verify profile state metadata (`gateway.local_policy.v1`) and re-sync sessions if needed.  
- **Download Links**: [macOS Apple Silicon DMG](https://hermes-assets.nousre)  

> 🔗 [Release Page](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261115T064406Z)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today)**: 16  
- ✅ **Security & Stability Fixes**:  
  - #154853: Prevents chain cooldown extension from refused bot messages (critical for rate-limiting).  
  - #154868: Distinguishes provider outages from quota errors in Kanban workers (improves debugging).  
  - #156331: Fixes MEDIA directive parsing when wrapped in markdown emphasis (e.g., `**MEDIA:**/path.pdf`).  
- ✅ **UX & Migration Enhancements**:  
  - #154816 & #154817: Introduce `hermes move` to merge local profiles into Hermes Cloud agents with undo capability.  
  - #156114 & #156242: Implement **Backup & Transfer** in Desktop Settings—enable agent export/import and cloud replacement.  
- ✅ **Tooling & Config Improvements**:  
  - #156260: Rejects invalid `dashboard.basic_auth` credentials to prevent login blackouts.  
  - #156077: Isolates fallback model resolution to prevent primary model leakage across providers.

---

### **4. Community Hot Topics**  
Top 5 most discussed issues/PRs by comment count:

| Issue/PR | Topic | Comments | Link |
|--------|------|---------|------|
| [#143547](https://github.com/nousresearch/hermes-agent/issues/143547) | Unified Gateway Post-Merge Problems | 73 | [View Issue](https://github.com/nousresearch/hermes-agent/issues/143547) |
| [#127621](https://github.com/nousresearch/hermes-agent/issues/127621) | Desktop: Duplicate Assistant Responses | 14 | [View Issue](https://github.com/nousresearch/hermes-agent/issues/127621) |
| [#156000](https://github.com/nousresearch/hermes-agent/issues/156000) | Moving Sessions Between Profiles Leaves Them Unresumable | 2 | [View Issue](https://github.com/nousresearch/hermes-agent/issues/156000) |
| [#156333](https://github.com/nousresearch/hermes-agent/pull/156333) | Fix Diagnosis of Routed Local Chats Missing Receipts | 0 | [View PR](https://github.com/nousresearch/hermes-agent/pull/156333) |
| [#156330](https://github.com/nousresearch/hermes-agent/pull/156330) | Desktop Backup & Transfer Feature | 0 | [View PR](https://github.com/nousresearch/hermes-agent/pull/156330) |

**Analysis of Underlying Needs**:  
- **Session integrity and portability** dominate concerns (issues #143547, #156000, #156333), indicating users are actively experimenting with multi-profile workflows and cross-device sync.  
- **Desktop UX consistency** is critical—duplicated responses (#127621) and failed image saves (#156032) signal friction in real-world usage.  
- **Feature demand for backup/transfer** (PRs #156330, #156114) shows strong user desire for agent mobility and disaster recovery.

---

### **5. Bugs & Stability**  
**Critical (P1/P2) Bugs Reported Today**:  
1. **[#143150](https://github.com/nousresearch/hermes-agent/issues/143150)**: Session resume fails after multiplex migration due to unmigrated route in `state_meta`.  
   - *Impact*: Blocks users migrating from per-profile to one-gateway setup.  
   - *Fix Status*: Open — requires gateway state migration logic.  
2. **[#155955](https://github.com/nousresearch/hermes-agent/issues/155955)**: First DM into pre-gateway Bot Chat silently forks chat + freezes UI.  
   - *Impact*: Breaks chat continuity; hidden state corruption.  
   - *Fix Status*: Open — needs guardrail for legacy session routing.  
3. **[#156032](https://github.com/nousresearch/hermes-agent/issues/156032)**: Desktop "Save Image" fails on blob URLs (ERR_INVALID_PROTOCOL).  
   - *Impact*: Prevents saving pasted/dropped images.  
   - *Fix Status*: Open — likely needs URL protocol handling in Electron bridge.  
4. **[#156236](https://github.com/nousresearch/hermes-agent/issues/156236)**: Mistral Large 4 streaming crashes `"".join()` due to list-shaped `delta.content`.  
   - *Impact*: Tool call loss during streaming; affects reasoning-heavy workflows.  
   - *Fix Status*: Closed — already resolved in prior patch (#63755).

> ⚠️ **Stability Alert**: Multiple session lifecycle bugs suggest deeper state synchronization challenges in the gateway layer.

---

### **6. Feature Requests & Roadmap Signals**  
Top user-driven feature trends:

| Feature | Request Source | Priority | Notes |
|-------|----------------|----------|-------|
| **Least-Privilege Subagent Escalation** ([#91505](https://github.com/nousresearch/hermes-agent/issues/91505)) | Security-hardened delegation | P3 | Suggests growing use of delegated agents; demands scoped tokens. |
| **Path-Scoped File Access** ([#92424](https://github.com/nousresearch/hermes-agent/issues/92424)) | Multi-profile isolation | P3 | Critical for low-trust assistant workflows. |
| **OSC 7501 Program Status Protocol** ([#138147](https://github.com/nousresearch/hermes-agent/issues/138147)) | CLI/TUI terminal usability | P3 | Indicates heavy terminal usage; desired visibility across tabs. |
| **MiniMax Image Generation Backend** ([#156332](https://github.com/nousresearch/hermes-agent/pull/156332)) | Plugin expansion | P3 | Shows interest in diverse AI providers beyond OpenAI. |
| **Reversible Memory Mutations** ([#76883](https://github.com/nousresearch/hermes-agent/issues/76883)) | Auditability & safety | P3 | Long-standing request—now gaining traction. |

> 📌 **Prediction**: These features will likely appear in **v0.24.0**, especially path-scoped tools and backup/transfer functionality, given recent PR momentum.

---

### **7. User Feedback Summary**  
Real pain points surfaced in issue comments:  
- **"I can’t move or restore sessions between profiles — it’s broken."** → #156000  
- **"Duplicated responses make me lose trust in the assistant."** → #127621  
- **"Why can’t I restrict my ‘Yonda’ assistant to only access /projects?"** → #92424  
- **"My saved images just don’t download — this is frustrating."** → #156032  
- **"I want to back up my entire agent before switching devices."** → #156330  

✅ **Satisfaction Signals**:  
- Users appreciate new `hermes move` and backup features (PRs #156330, #156242).  
- Positive sentiment around MiniMax image generation (PR #156332).  

> 🧩 **Insight**: Users are increasingly treating Hermes as a personal AI identity—not just a tool—demanding portability, privacy, and resilience.

---

### **8. Backlog Watch**  
High-impact, long-standing issues needing attention:

| Issue | Severity | Age | Status | Link |
|------|----------|-----|--------|------|
| [#143547](https://github.com/nousresearch/hermes-agent/issues/143547) | P2 | 3 weeks | Open | [Unified Gateway Issues](https://github.com/nousresearch/hermes-agent/issues/143547) |
| [#122928](https://github.com/nousresearch/hermes-agent/issues/122928) | P2 | 4 months | Open | macOS PythonPATH leak in backend |  
| [#143065](https://github.com/nousresearch/hermes-agent/issues/143065) | P2 | 3 weeks | Open | MiniMax ignores `budget_tokens` knob |  
| [#147720](https://github.com/nousresearch/hermes-agent/issues/147720) | P3 | 2 weeks | Open | Profile routes inherit parent toolsets |  
| [#154965](https://github.com/nousresearch/hermes-agent/issues/154965) | P2 | 3 days | Open | Skill consolidation leaves no successor record |

> 🔎 **Urgent Attention Needed**: The **unified gateway** (issue #143547) remains the top technical debt point, affecting migration, session state, and stability. Its high comment count and severity indicate systemic risk.

---

**Final Assessment**:  
Hermes Agent is in a **high-growth, high-stakes phase**—balancing aggressive feature rollout with critical stability fixes. While innovation is rapid (backup/transfer, plugin extensibility), foundational session and gateway state issues threaten user trust. Maintainer focus must shift toward **session lifecycle rigor** and **security-by-default design** to sustain momentum.  

👉 **Recommended Action**: Prioritize fix PRs for #143547, #155955, and #156032 in next hotfix cycle.  
🔗 [Project Dashboard](https://github.com/nousresearch/hermes-agent)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-11-16**

---

### **1. Today's Overview**  
The IronClaw project remains highly active with consistent momentum in feature development and infrastructure refinement. Three new issues were opened in the past 24 hours, including a high-impact enhancement proposal for cost-based budgeting and two critical fixes related to LLM provider failover and timeout configurability. One pull request was submitted, addressing misaligned model pricing data crucial for upcoming USD budgeting functionality. No new releases were published, indicating that core improvements are being prioritized ahead of a potential version bump.

---

### **2. Releases**  
*No new releases in the last 24 hours.*  
The latest stable release remains **v1.4.1**, deployed to hosted-staging (crab shack). No breaking changes or migration notes are currently pending. The absence of a release suggests ongoing work on foundational features like cost modeling and provider resilience is taking precedence over formal versioning.

---

### **3. Project Progress**  
- **PR #8171** ([fix(common): price models from the llm-prices table](https://github.com/nearai/ironclaw/pull/8171)) — Submitted by Mattbusel on 2026-11-15, this PR corrects outdated model cost estimates across major providers (e.g., GPT-5.5, Opus 4.5/4.6, Haiku 4.5), aligning them with actual pricing. This fix is directly tied to the implementation of **Issue #2843**, which proposes a USD-based budgeting system.  
- *Status:* Open, awaiting review. High priority due to dependency chain with cost modeling.

---

### **4. Community Hot Topics**  
- **Issue #2843** ([Cost-based budgeting: replace iteration/time caps with USD budgets](https://github.com/nearai/ironclaw/issues/2843)) — *Created April 22, 2026; updated Nov 15, 2026*.  
  - **Risk:** High | **Scope:** Agent, DB, Config  
  - **Analysis:** This is the most strategic feature under discussion. It signals a shift from heuristic limits (iterations, time) to financial accountability via cascading USD budgets across user → project → mission → thread → sub-thread. With increasing usage of local and cloud LLMs, cost control is becoming a top-tier concern for developers and enterprises alike. The issue has not yet gained traction in terms of upvotes or comments but is foundational for future monetization and scalability.

- **PR #8171** — While not an issue, this PR is a direct enabler of Issue #2843 and reflects community-driven precision in cost modeling—indicating growing demand for accurate, auditable AI spending.

---

### **5. Bugs & Stability**  
- **Issue #8172** ([Make PRIMARY_MODEL_CALL_IDLE_TIMEOUT configurable for slow local LLMs](https://github.com/nearai/ironclaw/issues/8172)) — *Opened Nov 15, 2026*  
  - **Severity:** Medium-High  
  - **Impact:** Users running slow local LLMs (e.g., via Ollama) experience timeouts during model calls due to fixed idle timeouts. This breaks workflows involving larger or less responsive models.  
  - **Root Cause:** Hardcoded `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` in `HostManagedLoopModelPort` does not allow tuning for local inference latency.  
  - **Fix Status:** No PR yet. Urgent need for configuration flexibility.

- **Issue #8173** ([Support failover between registry providers (e.g. Ollama → Ollama)](https://github.com/nearai/ironclaw/issues/8173)) — *Opened Nov 15, 2026*  
  - **Severity:** Medium  
  - **Impact:** Current fallback logic only supports NEAR AI backend, limiting resilience when primary provider is a registry (like Ollama). Fallback attempts still default to `NearAi`, creating a dead-end path.  
  - **Fix Status:** No PR submitted. Requires architectural change in `create_llm_provider_with_config`.

> 🔴 Both bugs affect reliability in local and hybrid deployment scenarios—critical for users building autonomous agents on self-hosted infrastructure.

---

### **6. Feature Requests & Roadmap Signals**  
- **Issue #2843** is the strongest signal of roadmap direction: **financial governance at scale**. The move from time/iteration caps to USD-based budgets indicates IronClaw’s ambition to support enterprise-grade agent orchestration where cost tracking and enforcement are non-negotiable.
- **Configurable timeouts (Issue #8172)** and **multi-provider failover (Issue #8173)** suggest a growing emphasis on **resilience and operational flexibility**, particularly for local and edge deployments.
- These trends point toward **v1.5+** likely focusing on:
  - Cost-aware agent execution
  - Decentralized or hybrid LLM provider routing
  - Enhanced configuration layer for performance tuning

---

### **7. User Feedback Summary**  
- **Pain Point 1:** Inflexible timeouts break workflows with slower local models (Ollama, etc.). Users report "model call hanging" and "unreliable execution" in staging environments.
- **Pain Point 2:** Lack of cost visibility leads to unexpected spend spikes, especially when using high-cost models (e.g., GPT-5.2-Pro, Opus).
- **Use Case:** Developers running long-running agent missions locally need better control over resource consumption and fallback strategies.
- **Satisfaction:** Positive sentiment around modular design and extensible architecture, but frustration grows around missing configuration knobs and opaque cost behavior.

---

### **8. Backlog Watch**  
- **Issue #2843** – *High-risk, high-impact enhancement* — Despite its importance, it remains open since April 2026 with no assigned milestone or assignee. Needs urgent attention from maintainers to define scope and begin implementation.
- **Issue #8173** – *Critical for multi-provider resilience* — Already flagged as a bug but lacks PR. Should be prioritized alongside #8172 to ensure robustness in distributed agent systems.
- **Issue #8172** – *Immediate usability blocker* — Directly impacts local development workflow. No fix exists despite clear reproduction steps and environment details provided.

> ⚠️ **Recommendation:** Maintain a triage sprint focused on these three items. Prioritize fixing model pricing (PR #8171) and enabling timeout/config flexibility (Issue #8172) to unlock the full value of the cost budgeting system.

---  
*Data source: GitHub — nearai/ironclaw (2026-11-16)*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-16**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with a strong influx of developer and user engagement: **16 issues updated in the last 24 hours (11 open, 5 closed)** and **15 pull requests (12 open, 3 merged)**. The community is focused on stability fixes, plugin reliability, and multi-user support—particularly around WeChat and Feishu channel integration. Despite no new releases, the merge activity indicates significant behind-the-scenes improvements, especially in channel lifecycle management, credential isolation, and frontend robustness. Overall, the project shows healthy momentum ahead of potential v2.3.1 or v2.4 release cycles.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-11-16.  
The latest stable version remains **v2.3.0 (released 2026-11-11)**, which introduced major enhancements to plugin architecture and channel extensibility but has since revealed several critical regressions (e.g., credential leakage, missing file name decoding). Users are advised to monitor for a patch release addressing these issues.

> 🔗 [Latest Release on PyPI](https://pypi.org/project/qwenpaw/) | [GitHub Tags](https://github.com/agentscope-ai/QwenPaw/releases)

---

### **3. Project Progress**  
Three PRs were merged today, resolving key stability and upgrade issues:

- ✅ **PR #8721** ([fix(plugins): retry recovery before enabling plugins](https://github.com/agentscope-ai/QwenPaw/pull/8721)) – Fixes WeChat channel startup failure due to `ACCOUNT_IN_USE` errors by improving recovery logic.
- ✅ **PR #8692** ([fix(channels): preserve runtime directory context in channel workers](https://github.com/agentscope-ai/QwenPaw/pull/8692)) – Resolves Linux crash during WeChat plugin startup caused by missing `HOME`/`QWENPAW_WORKING_DIR`.
- ✅ **PR #8699** ([feat(channels): add plugin updates, version guards, and official marketplace releases](https://github.com/agentscope-ai/QwenPaw/pull/8699)) – Enhances plugin update mechanism with version checks and safe migration paths, preventing broken upgrades.

These merges reflect a strategic focus on **plugin resilience**, **upgrade safety**, and **cross-platform stability**.

---

### **4. Community Hot Topics**  
Top community concerns center on **multi-user workflows**, **channel reliability**, and **UI usability**:

- 🚩 **Issue #8751** ([Multi-user support](https://github.com/agentscope-ai/QwenPaw/issues/8751)): A high-priority feature request from an enterprise user highlighting that QwenPaw currently supports only one authenticated account. This limits shared installations (e.g., family or team use), signaling demand for role-based access control (RBAC) in future versions.
- 🚩 **Issue #8755** ([WeChat channel duplicates credentials across agents](https://github.com/agentscope-ai/QwenPaw/issues/8755)): Two users report that shared installations with multiple WeChat bots fail due to credential collision. The root cause is global scope; a fix PR (#8756) already exists.
- 🚩 **Issue #8747** ([Checkpoints navigation missing in v2.3.0 console](https://github.com/agentscope-ai/QwenPaw/issues/8747)): A UI regression where the "Checkpoints" sidebar entry disappeared despite working endpoints. Highlights ongoing challenges in frontend routing after core refactoring.

> 🔗 These issues represent **critical friction points** for real-world adoption—especially in collaborative or multi-person environments.

---

### **5. Bugs & Stability**  
Critical bugs reported today affect core functionality and platform interoperability:

| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| ⚠️ High | [#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757) | WeChat inbound polling silently fails with no logs or recovery — cursor never resets. | ❌ No fix yet; impacts message delivery reliability |
| ⚠️ High | [#8746](https://github.com/agentscope-ai/QwenPaw/issues/8746) | Tasks submitted during background startup are silently swallowed — no LLM call, no error log. | ❌ Critical for automation workflows |
| ⚠️ Medium | [#8752](https://github.com/agentscope-ai/QwenPaw/issues/8752) | Feishu uploads percent-encoded filenames (e.g., `%E9%99%84%E4%BB%B6`) instead of decoded ones. | ✅ PR #8753 exists and ready for review |
| ⚠️ Medium | [#8748](https://github.com/agentscope-ai/QwenPaw/issues/8748) | Feishu reconnect supervisor exits permanently when cleanup raises. | ✅ PR #8749 proposed |
| ⚠️ Medium | [#8750](https://github.com/agentscope-ai/QwenPaw/issues/8750) | Missing Italian UI localization. | ✅ PR #8750 is a feature request, not bug |

> 🔥 **High-severity issues remain unresolved**, indicating risk for production use cases involving WeChat and background tasking.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven innovation is shaping the next phase of development:

- 🎯 **[Feature: Native QwenAI Platform Integration](https://github.com/agentscope-ai/QwenPaw/issues/8759)** – Request for built-in support for `qianwenai.com` with pay-as-you-go and Token Plan endpoints. Given QwenPaw’s lineage from the Qwen Lab, this is a **strong candidate for v2.4**.
- 🎯 **[Feature: Olostep & Keenable Web Search Providers](https://github.com/agentscope-ai/QwenPaw/issues/8740, #8758)** – Multiple developers have contributed PRs adding Olostep and proposing Keenable as opt-in web search providers. These align with trend toward **specialized, high-quality external data sources**.
- 🎯 **[Feature: Italian UI Localization](https://github.com/agentscope-ai/QwenPaw/issues/8750)** – Enterprise PoC in Italy confirms growing demand for non-English UIs. Likely to be prioritized in upcoming localization sprint.

> 💡 **Predicted roadmap focus**: Enhanced multi-user security, native cloud provider integrations, and richer tooling ecosystem.

---

### **7. User Feedback Summary**  
Real-world usage reveals deep pain points:

- **Family/shared installations** struggle with WeChat credential overlap (#8755).
- **Enterprise users** need Italian/other language support and proper RBAC (#8751, #8750).
- **Reliability is paramount**: Silent failures (e.g., WeChat polling death, swallowed tasks) erode trust.
- **UI/UX gaps persist**: Checkpoint navigation loss, incorrect Markdown rendering (PR #8133), and notification spam (PR #8754) degrade experience.

Users appreciate the project’s vision but express frustration with **unstable upgrades**, **incomplete features**, and **lack of clear documentation** for advanced configurations.

---

### **8. Backlog Watch**  
Several long-standing, high-impact issues require maintainer attention:

- 🔔 **[Issue #8751] Multi-user Support** – Now open for 1 day, critical for scalability. No assignee or milestone set.
- 🔔 **[Issue #8747] Checkpoints Navigation Missing** – Reported on same day as v2.3.0 release; suggests poor QA coverage for frontend changes.
- 🔔 **[PR #6325] Show Built-in Tool Docs in Console** – Open since July 2026, essential for discoverability. Needs triage.
- 🔔 **[PR #7211] Prevent Injected Context from Persisting** – First-time contributor, over 3 months old. Addresses privacy/security concern in model input handling.

> ⏳ **Urgent need**: Maintain a dedicated triage cadence to prevent backlog erosion and maintain community trust.

---

### **Conclusion**  
QwenPaw is at a pivotal stage: rapid development momentum is evident through frequent PRs and issue activity, but **stability and user experience gaps threaten adoption**. Immediate priorities should include:
- Releasing a **v2.3.1 hotfix** for WeChat/Feishu crashes and credential leaks,
- Prioritizing **multi-user and localization features**,
- Establishing a **triage workflow** for high-impact backlogged items.

With strong community contributions and clear product direction, QwenPaw is poised for broader enterprise and personal AI agent deployment—if it can deliver consistent reliability.

---  
📌 *Data source: GitHub API snapshot – 2026-11-16*  
🔗 Full project: [github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-11-16  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

ZeroClaw continues to exhibit strong momentum with a surge in community engagement: **29 open issues** and **50 open pull requests** updated within the last 24 hours, signaling active development and real-world usage challenges. The project is undergoing significant architectural refinement—particularly around provider configuration, credential management, and runtime stability—with multiple high-impact PRs focused on refactoring core systems for scalability and maintainability. While no new releases have been issued, the volume of technical debt resolution and feature expansion suggests a major v0.10.0 release may be imminent. The focus remains on enhancing security, multi-user support, and cross-platform reliability.

---

### **2. Releases**

- **None**  
  No new releases were published in the last 24 hours. The most recent stable version remains **v0.9.0**, which introduced notable changes to tooling, agent delegation, and model context handling. Users should expect migration notes related to `keep_tool_context_turns`, `cost.enforcement.mode`, and the shift toward canonical model registry references in upcoming updates.

---

### **3. Project Progress**

**Merged or Closed PRs (Today):**  
- **1 PR merged** (from the 50 total open PRs) — *No details available in dataset*  
  → Indicates that while activity is high, actual integration and merging remain selective.

**Key Advancements:**  
- **PR #12456** (`refactor(providers): separate chat connection and timeout construction`) – Critical infrastructure work enabling finer-grained control over request deadlines vs. idle timeouts. This paves the way for more resilient streaming behavior across providers.
- **PR #12446** (`feat(api): add chat request builders and explicit sampling inputs`) – Introduces first-class builder patterns for API calls, improving configurability and reducing boilerplate.
- **PR #12457** (`feat(config): prepare nested registry reflection and input normalization`) – Part of a larger effort to build a canonical registry editor; foundational for future WebUI improvements.
- **PR #12453** (`feat(web): edit canonical registry and select exact model references`) – Brings full model selection fidelity to the web interface, aligning with the goal of eliminating ambiguity in model routing.

These efforts collectively point to a **major refactor phase** aimed at unifying provider logic, simplifying configuration, and preparing for a user-friendly, secure, and scalable next-generation UI.

---

### **4. Community Hot Topics**

| Issue / PR | Activity | Summary & Underlying Need |
|-----------|--------|----------------------------|
| [#12484](https://github.com/zeroclaw-labs/zeroclaw/issues/12484) | 1 comment, newly opened | **Windows-specific plugin removal failure** due to `rename_new` not handling `NotFound`. Highlights ongoing platform parity issues—especially critical for enterprise users relying on Windows deployments. |
| [#12483](https://github.com/zeroclaw-labs/zeroclaw/issues/12483) | 1 comment, newly opened | **Gateway port release race condition on Windows** during shutdown. Affects system stability and test reliability. Suggests deeper async I/O or process lifecycle bugs in the runtime. |
| [#12447](https://github.com/zeroclaw-labs/zeroclaw/issues/12447) | 1 comment | Proposal for **Wazuh SIEM integration with scoped credentials and sanitized evidence**. Signals growing demand for **enterprise-grade security automation tools** in AI agent workflows. |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | 0 comments | **RFC: Scoped use of operator-managed service credentials**. A high-risk security RFC indicating deep concern about **credential exposure in agent workflows**—a top priority for regulated environments. |

> 🔍 **Analysis**: The community is actively pushing for **platform stability (Windows)**, **security hardening (scoped secrets, Wazuh)**, and **operational transparency (credential visibility)**. These are not edge cases—they reflect real deployment concerns in production environments.

---

### **5. Bugs & Stability**

| Issue | Severity | Summary | Fix Status |
|------|---------|--------|------------|
| [#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014) | **S1 - Workflow Blocked** | Custom OpenAI-compatible provider without `context_window` silently assumes 32k, then rejects valid turns. Breaks custom provider integrations. | ❌ No fix PR yet. High risk for developers using non-standard models. |
| [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | **S1 - Workflow Blocked** | `keep_tool_context_turns` breaks Claude Opus 5.5 chats after tool-use window expires. Causes 400 errors. | ❌ No fix PR. Critical for users leveraging Anthropic’s latest models. |
| [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | **S1 - Workflow Blocked** | `cost.enforcement.mode = warn` is ignored—budget breaches always stop turns. Breaks cost-aware workflows. | ❌ No fix PR. Major regression for cost-conscious teams. |
| [#12118](https://github.com/zeroclaw-labs/zeroclaw/issues/12118) | **S0 - Security Risk** | `cmd.exe` dialect allows workspace-written `git.bat` to bypass allowlist. Potential RCE vector. | ⚠️ Not yet patched. Could enable privilege escalation if exploited. |
| [#12413](https://github.com/zeroclaw-labs/zeroclaw/issues/12413) | **S2 - Degraded Behavior** | OpenCode Go context-window discovery returns "no capacity". Prevents proper model setup. | ❌ No fix PR. Blocks adoption of this provider. |

> ✅ **Note**: Despite many open bugs, **no merged fixes** appear in today’s data—indicating a backlog of unresolved regressions despite high development velocity.

---

### **6. Feature Requests & Roadmap Signals**

| Request | Priority | Significance | Likely Inclusion |
|--------|----------|--------------|------------------|
| [#12373](https://github.com/zeroclaw-labs/zeroclaw/issues/12373) | P2 | Write-only WebUI credential management with scoped references | ✅ **High likelihood in v0.10.0** — part of broader security overhaul. |
| [#12441](https://github.com/zeroclaw-labs/zeroclaw/issues/12441) | P2 | Deliver user identity to tool execution | ✅ **Strong signal** — essential for multi-user, audit-compliant assistants. |
| [#12353](https://github.com/zeroclaw-labs/zeroclaw/issues/12353) | P2 | Show running estimated cost per conversation | ✅ **Likely in v0.10.0** — directly addresses budget visibility needs. |
| [#12480](https://github.com/zeroclaw-labs/zeroclaw/issues/12480) | P2 | Decide default web search provider and inform users | ✅ **Urgent UX improvement** — DuckDuckGo has no API; clarity needed. |
| [#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541) | P2 | Matrix thread-scoped session history | ✅ **Core to channel-native UX** — will likely be tied to V5 config refactor. |

> 📌 **Prediction**: The next major release (**v0.10.0**) will center on **secure multi-user architecture**, **cost transparency**, **cross-platform stability**, and **integrated credential management**—all reflected in these top-tier feature requests.

---

### **7. User Feedback Summary**

Real user pain points emerging from issues include:
- **Security anxiety**: Fear of credential leakage via shell scripts (`cmd.exe`), tool outputs, or agent workflows (e.g., #12118, #12422).
- **Cost unpredictability**: Users need real-time cost tracking (#12353) and reliable enforcement modes (#12477).
- **Platform fragility**: Persistent Windows-specific failures in tests and runtime behavior (#12484, #12483) suggest limited confidence in cross-platform readiness.
- **Model misbehavior**: Issues like silent 32k context assumptions (#12014) and broken tool contexts (#12401) indicate poor error messaging and lack of validation.
- **UX friction**: Users want clearer defaults (search provider), better history scoping (Matrix), and smoother recovery from network drops (e.g., #12107).

> 💬 **Overall sentiment**: Highly engaged but frustrated by instability and missing safety controls. Users trust ZeroClaw’s vision but are wary of production readiness without stronger security and observability.

---

### **8. Backlog Watch**

| Issue | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014) | 22 days | Open, S1 | Breaks custom providers—critical for extensibility. No fix PR. |
| [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | 1 day | Open, S1 | Budget enforcement broken by design—blocks cost-aware workflows. |
| [#12118](https://github.com/zeroclaw-labs/zeroclaw/issues/12118) | 17 days | Open, S0 | Security vulnerability with potential for RCE. Must be addressed urgently. |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | 2 days | Open, RFC | High-impact security RFC—needs maintainer review and prioritization. |
| [#12447](https://github.com/zeroclaw-labs/zeroclaw/issues/12447) | 2 days | Open, Feature | Enterprise-grade SIEM integration—signals growing professional adoption. |

> ⚠️ **Critical**: Several **S0/S1 issues** remain unaddressed despite being reported and flagged as workflow-blocking. The project’s ability to scale securely depends on resolving these soon.

---

### **Final Assessment**

ZeroClaw is at a pivotal stage: **high innovation velocity meets rising stability risks**. The project is clearly evolving toward a secure, multi-user, enterprise-ready AI assistant platform—but current bugs and unpatched vulnerabilities threaten credibility. Immediate attention must be given to **security flaws (S0/S1)**, **Windows platform parity**, and **cost enforcement**. With robust PRs already underway, the next release could be transformative—if the team prioritizes fixing the most critical issues before expanding features.

> 🔗 **Next Steps for Maintainers**: Prioritize triage of S0/S1 bugs, initiate RFC reviews (esp. #12422), and consider a patch release for v0.9.1 before v0.10.0.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*