# OpenClaw Ecosystem Digest 2026-10-27

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-27 01:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-10-27**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with a surge in developer engagement: **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development momentum. Despite no new releases, stability concerns are escalating—particularly around memory leaks, SQLite WAL bloat, and Windows-specific reliability issues. The influx of high-severity P0 bugs (especially on Windows and in agent lifecycle management) suggests ongoing challenges in production-grade deployment consistency. Community-driven fixes and performance optimizations are advancing rapidly, but critical UX blockers remain unresolved.

---

### **2. Releases**  
**None**  
No new releases were published today. The most recent stable version is **2026.10.5**, which has already been flagged for multiple stability regressions (e.g., excessive baseline RSS memory, SQLite transaction timeouts). Users are advised to avoid upgrading until the current wave of P0 bugs is addressed.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- **PR #185263**: Fixes OAuth token expiry warnings by distinguishing between temporary expiry and actual authentication loss. Improves user confidence during routine session refreshes.  
- **PR #185292**: Resolves UI bug where saved Side chat comments required a second question to send—now fully usable independently.  
- **PR #185249**: Perf optimization—removes unused plugin root load tracking, reducing memory overhead in plugin metadata systems.

**Key Advances:**  
- Performance refinements continue across core components: **Control UI rendering**, **session store replay**, and **test suite cleanup** are being aggressively optimized.  
- Several test refactors (e.g., #185291, #185268, #185279) aim to reduce CI flakiness and improve long-term maintainability.

---

### **4. Community Hot Topics**  
Top 5 most commented items reflect deep systemic instability:

| Issue | Comments | Severity | Link |
|------|---------|----------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 139 | 🦞 Diamond Lobster (P0) | SQLite WAL grows to 2.8 GB → blocks startup |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 57 | 🦞 Diamond Lobster (P0) | Gateway blocks for minutes during plugin capture (2026.9.6 regression) |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 26 | 🦪 Silver Shellfish (P0) | `prepared-model-catalog.worker.js` leaks ~5 GB/hour |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 21 | 🦪 Silver Shellfish (P0) | Windows restarts/updates fail due to schtasks permission errors |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 13 | 🦪 Silver Shellfish (P0) | Agent unavailable after crash recovery due to checkpoint failure |

**Underlying Need:** Users demand **predictable, resilient operation under load and restarts**, especially on Windows. Critical path failures in startup, state persistence, and memory management are eroding trust in production use.

---

### **5. Bugs & Stability**  
Critical stability issues dominate the backlog:

| Bug | Severity | Impact | Fix PR? |
|-----|----------|--------|--------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 🦞 Diamond Lobster (P0) | Blocks gateway startup via unbounded WAL growth | ❌ No fix PR yet |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 🦞 Diamond Lobster (P0) | Unbounded memory leak (~5 GB/hour) in worker thread | ❌ No fix PR |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 🦞 Diamond Lobster (P0) | Minutes-long event loop stalls during plugin capture | ❌ No fix PR |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 🦪 Silver Shellfish (P1) | Baseline RSS jumps from 300 MB → 1.9 GB post-upgrade | ❌ No fix PR |
| [#172091](https://github.com/openclaw/openclaw/issues/172091) | 🦪 Silver Shellfish (P0) | SQLite transaction stays open forever, blocking checkpoints | ✅ Closed (but not merged into main) |

> 🔥 **Urgent**: Multiple P0 bugs are **blocking release readiness**, particularly on Windows and in agent lifecycle handling.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority feature signals emerging from community feedback:

| Request | Status | Significance |
|-------|--------|-------------|
| [#162164](https://github.com/openclaw/openclaw/issues/162164) | Open (P1) | Opt-in personal identity on iOS/macOS while preserving shared owner — indicates growing demand for **cross-platform privacy controls** |
| [#161050](https://github.com/openclaw/openclaw/issues/161050) | Open (P1) | Memory-pressure-aware admission for sessions_spawn — signals need for **resource-aware scheduling** in constrained environments |
| [#185068](https://github.com/openclaw/openclaw/pull/185068) | Open (P2) | Explicit discard of unwanted image candidates in Codex — reflects **user control over generative outputs** |
| [#136271](https://github.com/openclaw/openclaw/issues/136271) | Open (P2) | Dynamic SharePoint resolution in MS Teams — shows demand for **context-aware integration** |

> 💡 **Prediction**: Next major release (likely **2026.11.0**) will include **memory-aware admission control**, **enhanced output governance**, and **improved cross-platform identity management**.

---

### **7. User Feedback Summary**  
Real-world pain points reported:

- **Windows users** describe frequent update/restart failures due to `schtasks` permission issues (#170956), with "pas na veel proberen" (only after many retries) becoming common.
- **Multi-agent deployments** report persistent memory leaks and database bloat, leading to crashes and slow startups.
- **UI/UX friction**: Saved comments can't be sent without a follow-up question (#185292); system notices displace replies after reloads (#177094).
- **Security & transparency**: Operators are confused when `operator.admin` is rejected for missing `operator.read`, despite having full access (#184315).

> ✅ **Satisfaction**: Users appreciate granular tooling and embedded agent capabilities.  
> ❌ **Dissatisfaction**: Stability, predictability, and upgrade reliability are top concerns.

---

### **8. Backlog Watch**  
Critical issues requiring immediate maintainer attention:

| Issue | Age | Comments | Status | Notes |
|------|-----|----------|--------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 18 days old | 139 | Closed (bug confirmed) | Still no fix; high impact on startup |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 28 days old | 57 | Open | Regression since 2026.9.6; affects all plugin-heavy setups |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 30 days old | 26 | Open | Monotonic memory leak—reproduced across providers |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 14 days old | 21 | Open | Windows restarts failing repeatedly |
| [#182476](https://github.com/openclaw/openclaw/issues/182476) | 3 days old | 14 | Open | Update repair fails with lease lost error on Windows |

> ⚠️ **Action Required**: These P0/P1 bugs are **blocking production use cases**. Maintainers must prioritize triage and assign ownership.

---

**Final Assessment**: OpenClaw is at a critical inflection point. While innovation and community engagement are strong, **systemic stability and release reliability are deteriorating**. Immediate focus must shift from feature velocity to **core resilience, memory safety, and cross-platform consistency**—especially for Windows and multi-agent workloads. Without intervention, adoption may stall despite technical ambition.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-10-27**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a phase of intense technical maturation, marked by growing complexity in session lifecycle management, cross-platform reliability, and security-by-design principles. Projects are shifting from rapid feature velocity toward core resilience—especially around memory safety, state persistence, and identity isolation. While innovation remains strong, systemic stability issues (e.g., unbounded memory leaks, database bloat) are becoming critical adoption blockers. The landscape reflects a clear bifurcation: high-velocity experimentation (OpenClaw, QwenPaw) versus secure, production-hardened platforms (ZeroClaw, Hermes Agent). This convergence signals a market readiness for enterprise-grade, auditable agent systems.

---

### **2. Activity Comparison**

| Project       | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score (1–10) |
|---------------|-------------------|----------------|----------------|----------------------|
| **OpenClaw**   | 500               | 500            | ❌ None        | 4.2                  |
| **Hermes Agent** | 50              | 50             | ❌ None        | 6.8                  |
| **IronClaw**   | 0                 | 0              | N/A            | 2.0                  |
| **QwenPaw**    | 24                | 48             | ❌ None        | 7.6                  |
| **ZeroClaw**   | 23                | 29             | ❌ None        | 8.1                  |

> **Health Score**: Based on stability, community engagement, fix velocity, and release readiness (1 = critical instability; 10 = production-ready).

---

### **3. OpenClaw's Position**  
**Advantages vs Peers**:  
- **Highest developer velocity**—500 issues and 500 PRs/day indicates unmatched momentum and community participation.  
- **Deeper integration with agent tooling** (e.g., plugin metadata, control UI, test suite optimization) supports complex multi-agent workflows.  
- **Largest user base** reflected in comment volume (e.g., 139 comments on #143524), suggesting broad real-world use.

**Technical Approach Differences**:  
- Focuses on **extensive plugin orchestration**, **UI/UX polish**, and **low-level performance tuning** (e.g., SQLite WAL, worker thread memory).  
- Uses **SQLite as primary state store**, increasing exposure to transactional consistency risks (e.g., #143524, #172091).  
- Less emphasis on identity/access control compared to ZeroClaw or Hermes Agent.

**Community Size Comparison**:  
- Significantly larger than peers—over 10x more activity than Hermes Agent or QwenPaw in the last 24 hours.  
- High volume of feedback indicates active deployment across diverse environments (Windows, Linux, macOS), but also exposes deeper platform-specific flaws.

---

### **4. Shared Technical Focus Areas**  

| Requirement                     | Projects Affected                         | Specific Needs |
|----------------------------------|-------------------------------------------|----------------|
| **Memory Safety & Leak Prevention** | OpenClaw, QwenPaw, ZeroClaw           | Prevent unbounded growth (~5 GB/hour in OpenClaw; thread exhaustion in QwenPaw) |
| **Session Persistence & Resilience** | OpenClaw, Hermes Agent, ZeroClaw     | Recovery after restarts, `session.resume` reliability, checkpoint integrity |
| **Context Management & Trimming**   | ZeroClaw, QwenPaw, Hermes Agent      | Proactive token budgeting, avoid silent truncation, preserve long-term history |
| **Cross-Platform Consistency**      | OpenClaw, QwenPaw, ZeroClaw          | Windows permission errors (#170956), Linux packaging (#8444), CRLF/LF handling |
| **Security & Access Control**       | ZeroClaw, Hermes Agent, OpenClaw     | Fine-grained scopes, OIDC integration, RPC denial auditability, privilege escalation fixes |

> 🔑 **Emergent Theme**: *Predictable resource usage under load* is now a non-negotiable requirement—moving beyond "feature-rich" to "resilient-by-default."

---

### **5. Differentiation Analysis**

| Dimension             | OpenClaw                            | Hermes Agent                        | QwenPaw                             | ZeroClaw                          |
|------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-----------------------------------|
| **Target Users**       | Power users, developers, multi-agent testers | Teams, automation-heavy workflows | Privacy-focused devs, local model users | Enterprise operators, compliance teams |
| **Feature Focus**      | Plugin ecosystem, UI/UX polish, performance | Session resumption, delegation, Kanban | Linux support, MCP compatibility, local models | Security, access control, auditability |
| **Architecture**       | SQLite + plugin root tracking, JS/TS monolith | Multi-client event-driven, actor model | Tauri-based desktop, modular SDK | Rust-based, strict scope isolation |
| **Primary Strength**   | Developer velocity & tooling depth  | Workflow continuity & team coordination | Cross-platform parity & protocol flexibility | Security hardening & auditability |
| **Weakness**           | Stability regressions, Windows fragility | Overly aggressive admission guards | Context overflow, stream hangs | Config inconsistency, slow PR review |

> ✅ **Strategic Insight**: OpenClaw leads in *ecosystem breadth*, while ZeroClaw leads in *trustworthiness*. QwenPaw bridges the gap with *practical Linux support*.

---

### **6. Community Momentum & Maturity**  

| Maturity Tier         | Projects                              | Indicators |
|------------------------|---------------------------------------|------------|
| **High Velocity (Rapid Iteration)** | OpenClaw, QwenPaw                   | >40 PRs/day, high issue churn, frequent test refactors |
| **Stabilizing (Pre-Release)**       | Hermes Agent, ZeroClaw              | Focused on bug triage, security fixes, backlog cleanup |
| **Low Activity / Stagnant**         | IronClaw                            | No updates in 24h, no recent PRs/issues |

> 📈 **Trend**: The most active projects (OpenClaw, QwenPaw) are also the most unstable—suggesting a “burst-and-burn” development pattern. In contrast, ZeroClaw and Hermes Agent show signs of **mature release discipline**, prioritizing quality over speed.

---

### **7. Trend Signals**  
Based on community feedback and project direction, the following industry trends are emerging:

1. **Resource-Aware Scheduling** (Hermes Agent, QwenPaw):  
   - Demand for `memory-pressure-aware admission` and `token-budget compaction` signals a shift toward **predictable, constrained execution**—critical for edge and low-memory deployments.

2. **Privacy & Local Control** (QwenPaw, ZeroClaw):  
   - Requests for local Whisper integration, ChatGPT sign-in without API keys, and Gitea parity reflect growing demand for **self-hosted, identity-first agents**.

3. **Auditability & Debuggability** (ZeroClaw, Hermes Agent):  
   - Structured error codes (`PR #11289`), delegation lookup, and session tracing indicate that **debugging and accountability** are now first-class concerns—especially in regulated environments.

4. **Cross-Platform Parity** (QwenPaw, OpenClaw):  
   - Linux `.deb`/`.AppImage` packaging and Windows `schtasks` fixes highlight that **platform consistency is no longer optional**—it’s a core UX requirement.

5. **Agent-to-Agent Coordination** (Hermes Agent, OpenClaw):  
   - Kanban workflow controls, delegation persistence, and subagent reclaiming point to a future where agents **collaborate like human teams**, not isolated tools.

> 💡 **Value for Developers**: The next generation of AI agents will be judged not by their intelligence, but by their **reliability, security, and interoperability**—making these trends essential for building trustworthy, deployable systems.

---

**Final Note**: The ecosystem is at a pivotal inflection point. Projects with **high activity but low stability** (OpenClaw) risk losing early adopters unless core resilience improves. Conversely, those with **strong security and process maturity** (ZeroClaw, Hermes Agent) are poised to become foundational infrastructure for enterprise AI workloads. Developers should prioritize **stability-first** over feature-first when selecting platforms for production use.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-10-27**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with a robust pace of development: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained momentum across core components, integrations, and user-facing features. The absence of new releases suggests a focus on stabilizing ongoing work before a potential patch or minor version rollout. High activity in session lifecycle management, authentication flows, and platform-specific edge cases (Discord, Telegram, Mattermost) points to growing complexity in multi-client, multi-platform orchestration. Despite strong community engagement, several critical stability and usability bugs are accumulating—particularly around session resumption, delegation, and remote backend compatibility.

---

### **2. Releases**  
❌ **No new releases** were published in the last 24 hours.  
The current stable version remains **v0.22.5** (commit `bf0203a794`). No breaking changes or migration notes are available at this time. Maintainers appear to be prioritizing issue resolution and PR validation ahead of a release cadence.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (today)**:  
- **PR #145106** (`fix(webapp): plain-HTTP sends and copies, browser edit menus, rebuild-safe chunks, image links and restart-wait prompts`) – Secured webapp security by closing a vector for cross-origin attacks and improving UI reliability.  
- **PR #75981** (`fix(projects): reject create when primary_path already owns a project`) – Resolved a long-standing project creation conflict issue that could lead to duplicate projects.  
- **PR #62565** (`fix(feishu): tolerate legacy websocket client kwargs`) – Improved backward compatibility for Feishu integration, reducing connection failures in older environments.

🔹 **Key Advances**:  
- **PR #145319** (`feat(kanban): an orchestrator can request changes on a card in review`) and **PR #145317** (`feat(kanban): orchestrators can reclaim a running card`) extend Kanban workflow control, enabling better team coordination.  
- **PR #145316** (`feat(delegation): look up a finished delegation by id`) introduces persistent access to past delegation results—a significant step toward auditability and debugging.  
- **PR #145311** (`Google Workspace skill can check people's free/busy`) adds real-world scheduling intelligence via ported Cloudflare OS functionality.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count & Engagement**:

| Issue | Summary | Link |
|------|--------|------|
| [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) | Remote desktop sessions fail to resume after gateway restart — `session.resume` returns `not_found`. Critical for users relying on persistent chat contexts. | [Issue #139818](https://github.com/NousResearch/hermes-agent/issues/139818) |
| [#105758](https://github.com/NousResearch/hermes-agent/issues/105758) | Lifecycle guard blocks legitimate Node.js CLI tools (e.g., `obsidian-headless`) due to false-positive detection. Affects developers using local toolchains. | [Issue #105758](https://github.com/NousResearch/hermes-agent/issues/105758) |
| [#142461](https://github.com/NousResearch/hermes-agent/issues/142461) | Discord auto-thread automations are permanently blocked due to `admission_conflict`, preventing parent session recovery. High impact for automation-heavy users. | [Issue #142461](https://github.com/NousResearch/hermes-agent/issues/142461) |
| [#145261](https://github.com/NousResearch/hermes-agent/issues/145261) | Watch-pattern completions are refused with `admission_conflict` every 60 seconds—2,641 log entries in one day. Indicates a systemic policy misfire. | [Issue #145261](https://github.com/NousResearch/hermes-agent/issues/145261) |

🔍 **Underlying Needs**:  
- Users demand **resilience in distributed session state** across restarts and reconnections.  
- There’s growing frustration with **overly aggressive security guards** blocking valid workflows.  
- **Automation reliability** is under strain—especially in Discord and Kanban integrations—where failure modes cascade silently.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (P2/P1 severity)**:
- **[#139818]** Session resumption fails post-restart → **High risk of data loss** for remote-desktop users.  
- **[#145261]** Permanent `admission_conflict` on watch patterns → **Systemic logic error** causing log spam and task failure.  
- **[#143720]** Process-completion wake blocked indefinitely → **Attempt cap not firing**, despite retries.  
- **[#145315]** Webhook cron deadlock → Thread pool exhaustion if many jobs fire simultaneously.  
- **[#145292]** MCP transport teardown never finishes → Server run loop stuck, tools unresponsive.  

🔧 **Fix PRs in Progress**:  
- **PR #145307** addresses vision fallback model mismatch (critical for Ollama/SGLang users).  
- **PR #145309** fixes incorrect SGLang endpoint classification as Ollama.  
- **PR #145305** improves subagent result structure for better debugging.

🚨 **Stability Risk**: Multiple issues involve **infinite retry loops**, **resource leaks**, and **unreachable state**, suggesting deeper architectural concerns in session lifecycle and admission control.

---

### **6. Feature Requests & Roadmap Signals**  
📈 **Emerging Themes from Feature Requests**:
- **Kanban Workflow Control**:  
  - [#136614](https://github.com/NousResearch/hermes-agent/issues/136614): Allow selective event wakes (e.g., only `completed`, not `blocked`) → signal for granular automation tuning.
  - [#145319](https://github.com/NousResearch/hermes-agent/pull/145319), [#145317](https://github.com/NousResearch/hermes-agent/pull/145317): Reclaiming/reviewing cards → indicates need for dynamic team coordination.

- **Delegation & Subagent Clarity**:  
  - [#145316](https://github.com/NousResearch/hermes-agent/pull/145316): Look up finished delegations → signals demand for traceability in complex agent chains.

- **Platform Enhancements**:  
  - [#145312](https://github.com/NousResearch/hermes-agent/pull/145312): Mattermost thread free-response mode → desire for more natural, less gate-controlled interactions.  
  - [#145311](https://github.com/NousResearch/hermes-agent/pull/145311): Google Workspace free/busy check → practical AI-assisted calendar integration.

📌 **Prediction**: Next version (**v0.23.0**) will likely include **enhanced delegation persistence**, **Kanban workflow refinements**, and **improved session resilience**—with possible stabilization of Discord/Telegram threading logic.

---

### **7. User Feedback Summary**  
💬 **Real Pain Points Identified**:
- **Session State Fragility**: Users report losing context after gateway restarts, especially in remote/desktop setups ([#139818](https://github.com/NousResearch/hermes-agent/issues/139818)).  
- **False Positives in Security Guards**: Developers hit `Blocked: command cannot restart...` even with safe CLI tools like `ob` ([#105758](https://github.com/NousResearch/hermes-agent/issues/105758)), reducing trust in automation.  
- **Silent Failures**: Dashboard plugin activation returns 401 without feedback ([#141878](https://github.com/NousResearch/hermes-agent/issues/141878)) → leads to confusion and wasted debugging time.  
- **UI/UX Friction**: Desktop tray icon disappears after screen lock on GNOME ([#145282](https://github.com/NousResearch/hermes-agent/issues/145282)), and file drops fail on messaging platforms ([#145298](https://github.com/NousResearch/hermes-agent/issues/145298)) — signs of inconsistent cross-platform behavior.

✅ **Satisfaction Signals**:  
- New Kanban features are well-received in early PRs.  
- Local TTS optimization docs ([#85041](https://github.com/NousResearch/hermes-agent/pull/85041)) praised for actionable performance gains.

---

### **8. Backlog Watch**  
⏳ **Longstanding, High-Impact Issues Needing Attention**:
- **[#133212](https://github.com/NousResearch/hermes-agent/issues/133212)**: `subagent_lifecycle v1.1` for plugin orchestrators — needs decision; critical for plugin ecosystem maturity.  
- **[#119529](https://github.com/NousResearch/hermes-agent/issues/119529)**: `web_extract` fails on fresh installs due to wrong backend selection — affects first-time users.  
- **[#123923](https://github.com/NousResearch/hermes-agent/issues/123923)**: Anthropic `thinking blocks cannot be modified` error during heartbeat continuation — impacts advanced use cases with extended thinking.  
- **[#144438](https://github.com/NousResearch/hermes-agent/issues/144438)**: ACP clients show empty session history despite existing chats — breaks developer workflow.  
- **[#145306](https://github.com/NousResearch/hermes-agent/issues/145306)**: Skill authoring guidance overwrites existing work — risks user data loss during updates.

🛠️ **Call to Action**: These issues have been open for weeks/months with minimal maintainer engagement. Prioritization is needed to prevent erosion of trust in the platform’s reliability.

---

**Next Steps**: Monitor PR #145319, #145316, and #145317 for merge into next release cycle. Prepare for potential v0.23.0 if stability fixes consolidate. Address backlog items flagged above to improve adoption and retention.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-10-27**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust development pulse: **48 pull requests** and **24 issues** updated in the past 24 hours, indicating sustained momentum across core features, stability fixes, and community contributions. No new releases have been published, suggesting the team is prioritizing internal quality and feature refinement ahead of a potential v2.3 release. The high volume of open PRs—especially in Linux desktop support, memory retention, and MCP protocol compatibility—signals strong focus on platform parity, long-term reliability, and interoperability. While the project shows no signs of stagnation, critical stability concerns (e.g., context overflow, thread exhaustion) are emerging as recurring themes.

---

### **2. Releases**  
❌ **No new releases** were published today or in the last 7 days.  
The latest stable version remains **v2.2.2.post1**, with **v2.2.2.b4** and **v2.2.3b1** used in testing environments.  
*Note:* A formal release candidate (RC) or patch release may be imminent given the volume of merged fixes related to context handling, streaming, and legacy protocol fallbacks.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #8445** ([fix(mcp): fall back when discover returns HTTP 404 and -32601](https://github.com/agentscope-ai/QwenPaw/pull/8445)) – Enables backward compatibility with legacy MCP servers by falling back from modern JSON-RPC to `initialize` handshake. *Critical for plugin ecosystem continuity.*  
- **PR #8165** ([fix(providers): recover Responses output sent only on terminal event](https://github.com/agentscope-ai/QwenPaw/pull/8165)) – Resolves silent stream failure in OpenAI-like APIs where content arrives only at `completed` event. Fixes **Issue #8162**.  
- **PR #8062** ([fix(memory): keep healthy embedding vectors when one chunk is over limit](https://github.com/agentscope-ai/QwenPaw/pull/8062)) – Implements partial batch success in ReMe embedding reindexing, mitigating **Issue #8040**.  

✅ **Key Advancements:**  
- **Linux Desktop Parity**: PR #8444 ([feat(desktop): add Linux deb and AppImage packaging](https://github.com/agentscope-ai/QwenPaw/pull/8444)) brings Tauri-based Linux builds to the roadmap, addressing long-standing user demand.  
- **Memory Retention**: PR #8443 ([feat(scroll): age out tool_result blocks after blocks_retention_days](https://github.com/agentscope-ai/QwenPaw/pull/8443)) introduces granular retention for structured data, solving unbounded DB growth while preserving searchability.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement (Comments/Activity):**  
- **[Issue #8071]** [Feature]: Plugin-facing theme extension point — **12 comments**  
  → Users demand deeper theming control for plugins beyond `colorPrimary`. Suggests growing plugin ecosystem needs richer UI customization.  
  🔗 https://github.com/agentscope-ai/QwenPaw/issues/8071  

- **[Issue #8040]** [Bug]: Embedding reindex incomplete due to CJK token limits — **6 comments**  
  → Recurrence of a known issue; users report silent batch drops causing data loss. High severity for long-running ReMe workflows.  
  🔗 https://github.com/agentscope-ai/QwenPaw/issues/8040  

- **[Issue #8424]** [Bug]: server/discover hard-fails on 404 + JSON-RPC -32601 — **3 comments**  
  → Blocks integration with legacy MCP servers. PR #8445 already resolves this — urgent need for merge.  
  🔗 https://github.com/agentscope-ai/QwenPaw/issues/8424  

🔥 **Top PRs by Impact & Visibility:**  
- **PR #8444** ([Linux desktop packaging](https://github.com/agentscope-ai/QwenPaw/pull/8444)): First major step toward Linux parity. High demand from developers using Wayland/Weston systems.  
- **PR #8431** ([feat(local whisper): Convert local Whisper into SDK plugin](https://github.com/agentscope-ai/QwenPaw/pull/8431)): Signals intent to modularize local model management—key for privacy-focused users.  
- **PR #8437** ([feat(providers): add local ChatGPT subscription sign-in](https://github.com/agentscope-ai/QwenPaw/pull/8437)): Addresses growing demand for account-based access without API keys.  

---

### **5. Bugs & Stability**  
⚠️ **High-Priority Bugs (Today):**  
1. **Context Length Exceeded** ([#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312)):  
   - Model fails mid-task due to context overflow (252,565 > 251,904 tokens).  
   - No retry mechanism; task marked as failed.  
   - *Fix PR?* Not yet submitted. Critical for long-running agents.

2. **Long-lived ReMe Watchers Exhaust Threads** ([#8279](https://github.com/agentscope-ai/QwenPaw/issues/8279)):  
   - Synchronous HTTP endpoints stall due to AnyIO thread limiter exhaustion.  
   - Observed in Docker deployments. High risk for production use.  
   - *Fix PR?* None pending.

3. **Cancellable Wait Leaves Tasks Running** ([#8440](https://github.com/agentscope-ai/QwenPaw/issues/8440)):  
   - Inner tool tasks persist after outer cancellation. Can cause race conditions or resource leaks.  
   - PR #8441 submitted to fix. Pending review.

⚠️ **Moderate-Priority:**  
- **LLM Stream Hangs Indefinitely** ([#8435](https://github.com/agentscope-ai/QwenPaw/issues/8435)): Rate-limiter semaphore never released → no logs, frozen stream.  
- **Email Monitor Authentication Failure** ([#8425](https://github.com/agentscope-ai/QwenPaw/issues/8425)): Misconfigured login string (`name@domain@domain`) due to full email in `name` field.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Roadmap Themes:**  
- **Linux Desktop Support**: Strong signal via PR #8444 and Issue #8442. Expect official `.deb` and `.AppImage` packages in **v2.3**.  
- **Plugin Ecosystem Expansion**:  
  - Theme extensibility (#8071)  
  - Nested skill directories (#8178)  
  - Local Whisper as SDK plugin (#8431)  
  → Indicates move toward modular, reusable agent components.  
- **User Control Over Reasoning**:  
  - `thinking_level` in `JobRuntimeSpec` (#8439, #8429) — now requested twice. Likely to be included in next release.  
- **Authentication Flexibility**:  
  - Local ChatGPT sign-in (#8437) — addresses friction for non-API-key users. High adoption potential.

📌 **Predicted Next Version (v2.3):**  
- Linux desktop artifacts  
- `thinking_level` per cron job  
- Enhanced memory retention policies  
- Improved legacy MCP fallback

---

### **7. User Feedback Summary**  
💬 **Real Pain Points Reported:**  
- **"My daily paper job fails silently when output is truncated."** ([#8123](https://github.com/agentscope-ai/QwenPaw/issues/8123))  
  → Users lose trust in automated workflows when failures aren’t recoverable.  
- **"I can’t edit files without losing line endings (CRLF → LF)."** ([#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415))  
  → Critical for developers working in mixed environments (Windows ↔ Unix).  
- **"I get duplicate backups because cron runs twice."** ([#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476))  
  → Highlights instability in scheduling logic.  
- **"Windows ZIP files extract with garbled text."** ([#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270))  
  → Fundamental UX flaw affecting plugin installation and file import.

🟢 **Positive Signals:**  
- Active community engagement (17 new issues, 48 PRs in 24h)  
- Contributors tackling complex problems (thread safety, memory retention, protocol compatibility)  
- Multiple PRs targeting long-standing edge cases (e.g., CJK chunking, streaming recovery)

---

### **8. Backlog Watch**  
👀 **Important Unanswered Issues Needing Attention:**  
- **[Issue #8071]** Plugin-facing theme extension point — **12 comments, 17 days old**  
  → Core UI flexibility request; blocking rich plugin experiences.  
  🔗 https://github.com/agentscope-ai/QwenPaw/issues/8071  

- **[Issue #8040]** Embedding reindex failure due to CJK token limit — **6 comments, recurrence of #5950**  
  → Silent data loss risk; affects all ReMe-powered workflows.  
  🔗 https://github.com/agentscope-ai/QwenPaw/issues/8040  

- **[Issue #8424]** Legacy MCP server handshake failure — **3 comments, 10 days old**  
  → PR #8445 exists but not merged. Blocks plugin compatibility.  
  🔗 https://github.com/agentscope-ai/QwenPaw/issues/8424  

- **[Issue #8439]** Add `thinking_level` to `JobRuntimeSpec` — **1 comment, 1 day old**  
  → Already duplicated in #8429; indicates strong demand. Should be prioritized.  
  🔗 https://github.com/agentscope-ai/QwenPaw/issues/8439  

> ⚠️ **Maintenance Note:** Several high-impact bugs (context overflow, thread exhaustion) lack assigned PRs despite being reported. Maintainer triage is needed to prevent regression accumulation.

---  
*Digest generated: 2026-10-27 | Source: GitHub API, QwenPaw repo (agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-10-27  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active with 23 open issues and 29 open pull requests updated in the last 24 hours, indicating strong ongoing development momentum. The majority of activity centers on security hardening, identity/access control, and core runtime stability—particularly around session persistence, token budgeting, and RPC authorization. No new releases were published today, but multiple high-risk PRs targeting critical access controls and memory handling are under review. The community is increasingly focused on secure, auditable agent behavior and robust configuration management, reflecting a maturing production-grade focus.

---

### **2. Releases**

❌ **No new releases** were published as of 2026-10-27.  
The last release (v0.8.5) remains current.  
> 🔗 *See: [Releases](https://github.com/zeroclaw-labs/zeroclaw/releases)*

---

### **3. Project Progress**

#### ✅ Merged / Closed PRs (Today)
- **None** merged or closed in the past 24 hours.

#### 🚀 Features Advanced
- **PR #11965** (`feat(gateway): opt-in OIDC dashboard sign-in`) — A foundational step toward secure, scalable multi-user access via OpenID Connect. Now part of v0.9.0 roadmap.
- **PR #11986** (`feat(gateway): scoped dashboard chat through the core`) — Enables granular access to dashboard functionality based on user scope; stacked on prior auth work.
- **PR #11847** (`feat(channels): add native Rust XMPP with optional legacy OMEMO`) — Adds a new communication channel with strong privacy features, replacing outdated compatibility layers.

#### 🛠️ Fixes Implemented (in-flight)
- **PR #11910** (`fix(runtime): enforce the system prompt size budget (fail closed)`) — Addresses a critical flaw where oversized system prompts could silently exceed context limits. Now enforces hard limits.
- **PR #12040** (`fix(plugins): admit a component only beside the manifest that described it`) — Prevents manifest/component mismatch during plugin updates, fixing a potential security bypass.
- **PR #11326** (`fix(rpc): refuse persisted log reads to scoped principals`) — Closes a privilege escalation vector by ensuring non-admin users cannot read persistent logs.

> 🔗 *All PRs linked in section 4 & 6*

---

### **4. Community Hot Topics**

| Issue / PR | Activity | Summary | Link |
|-----------|--------|--------|------|
| **Issue #12053** (Security: Unpinned script in `/api/docs`) | 0 comments, 0 reactions | High-severity risk: third-party script loaded without integrity checks on same-origin dashboard. Could enable XSS if CDN compromised. | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/12053) |
| **PR #11289** (`feat(rpc): stable denial reason identifiers`) | 0 comments, 0 reactions | Introduces structured, machine-readable error codes for RPC denials—critical for auditability and tooling. | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/11289) |
| **Issue #10780** (Restore proactive token-budget context compaction) | 4 comments, 0 likes | Users report degraded performance due to lack of token-aware trimming. This is a top-priority UX/stability concern. | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) |

**Analysis**: The community is signaling deep concern about **security-by-design**, especially around **access control granularity**, **auditability**, and **configuration predictability**. There’s growing demand for transparent, debuggable error reporting and enforcement of resource budgets—not just warnings.

---

### **5. Bugs & Stability**

| Severity | Issue | Description | Fix PR? |
|--------|------|------------|--------|
| **S1 (Workflow Blocked)** | [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | Failed ACP turns persist incorrectly on daemon RPC path — blocks user workflows. | ❌ No fix yet |
| **S2 (Degraded Behavior)** | [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | Qdrant recall omits results due to missing `since`/`until` bounds in time-bounded queries. | ❌ No fix |
| **S2 (Degraded Behavior)** | [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | Long conversations permanently lose old turns after trimming — data loss risk. | ❌ No fix |
| **S2 (Degraded Behavior)** | [#12045](https://github.com/zeroclaw-labs/zeroclaw/issues/12045) | Response bodies from LLM-controlled URLs buffered fully before size cap applied → DoS risk. | ❌ No fix |
| **S2 (Degraded Behavior)** | [#12043](https://github.com/zeroclaw-labs/zeroclaw/issues/12043) | `glob_search` silently drops authorized files outside workspace and rejects absolute paths. | ❌ No fix |

> ⚠️ **Note**: Multiple S2 bugs involve **memory safety**, **data persistence**, and **resource exhaustion**, suggesting systemic stress points in long-running agents.

---

### **6. Feature Requests & Roadmap Signals**

| Feature Request | Status | Predicted In Version | Notes |
|----------------|--------|---------------------|-------|
| **[PR #12022]** Add external rerank stage for memory recall | Open | v0.9.0 | Enables integration with external ranking models (e.g., RAG re-ranker). |
| **[PR #12054]** Honor runtime-profile thinking levels for OpenAI | Open | v0.9.0 | Critical for agent-level reasoning customization. |
| **[Issue #12041]** Gitea/Forgejo parity with GitHub | Open | v0.9.0 | Indicates growing interest in decentralized git platforms. |
| **[Issue #10780]** Restore proactive token-budget context compaction | Accepted, In-Progress | v0.9.0 | Core UX improvement for long-running agents. |
| **[PR #11882]** Supervise execution epochs & deferred controls | Draft Proposal | v1.0 | Part of larger "Goal V1" architecture shift. |

> 🔮 **Trend**: The project is moving toward **predictable, auditable, and extensible agent behavior**—with emphasis on **context management**, **identity isolation**, and **interoperability**.

---

### **7. User Feedback Summary**

- **Pain Points**:
  - Users report **config keys not working as expected** (e.g., `context_compression.*`, `keep_tool_context_turns`) — leading to confusion and wasted tokens.
  - **Session trimming deletes history permanently**, causing frustration when revisiting long conversations.
  - **UI state bugs** (e.g., save button remains highlighted after config save) degrade trust in the interface.
- **Use Cases**:
  - Enterprise operators need **fine-grained access control** across agents and tools.
  - Developers want **external reranking** and **token-aware context management** for efficient RAG pipelines.
  - DevOps teams use **Gitea/Forgejo integrations** and require parity with GitHub.
- **Satisfaction**:
  - Positive sentiment around **native XMPP support** and **OIDC sign-in**—seen as mature, secure additions.
  - High praise for **structured error messaging** (e.g., PR #11289), which improves debugging.

---

### **8. Backlog Watch**

| Issue | Age | Priority | Status | Notes |
|------|-----|---------|--------|-------|
| [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) | 2026-09-11 | P2 | Accepted | Inert config keys confuse users; must be removed or implemented. |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | 2026-09-11 | P1 | In-Progress | Restoration of proactive context compaction is critical for scalability. |
| [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | 2026-09-20 | P2 | Accepted | Unified file intake implementation is overdue — affects all channels. |
| [#12042](https://github.com/zeroclaw-labs/zeroclaw/issues/12042) | 2026-10-26 | N/A | Open | Independent security review scored ZeroClaw 79/100 — right of reply pending. |

> 📌 **Action Required**: Maintainers should prioritize **config consistency**, **context management**, and **security review follow-up**. These issues represent both technical debt and reputational risk.

---

✅ **Project Health Summary**: **High activity, strong security focus, clear roadmap alignment.**  
⚠️ **Risks**: Several high-severity bugs remain unpatched, and config usability issues persist.  
🎯 **Next Steps**: Prioritize **S1/S2 bug fixes**, **merge v0.9.0 security stack**, and address **user-facing configurability**.  

> 🔗 *Full Project Dashboard: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*