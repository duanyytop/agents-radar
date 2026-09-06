# OpenClaw Ecosystem Digest 2026-09-06

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-06 00:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-06**

---

### **1. Today's Overview**  
OpenClaw remains highly active with a robust momentum in both development and community engagement. Over the past 24 hours, **500 issues** and **500 pull requests** were updated—indicating intense developer activity and a vibrant user feedback loop. The project is clearly in a high-intensity feature and stability phase, with a new release (v2026.9.2) focused on performance improvements. This level of activity reflects strong ongoing investment in core reliability, session handling, and multi-agent system resilience.

---

### **2. Releases**  
**`v2026.9.2`** — *Released today*  
- **Key Highlight**: Significant performance gains in chat responsiveness during long transcript processing.  
- **Improvements**:  
  - Direct dashboard lookup reduces cold-load work.  
  - Durable history reads now occur outside the Gateway event loop.  
  - Enhanced session state management under heavy disk I/O.  
- **No breaking changes** reported; migration requires only standard update procedures (`openclaw update --channel stable`).  
- [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.9.2)

---

### **3. Project Progress**  
Today saw **218 PRs merged or closed**, reflecting strong engineering velocity. Key advancements include:  
- **Stability & Reliability Fixes**:  
  - `fix(ai): prefer streamed tool-call arguments over stale output_item.done snapshot` (#139534) — resolves silent data corruption in AI response parsing.  
  - `fix(subagents): use metadata projection in subagent list reader` (#139538) — eliminates unnecessary prompt decoding in large sessions.  
- **Performance Optimizations**:  
  - `perf(prometheus): reduce temporary scrape allocations` (#139535) — critical for observability at scale.  
  - `perf(browser): avoid temporary NodeList copies in snapshots` (#139502) — improves UI rendering speed.  
- **Security & Configuration**:  
  - `fix(config): allow plugin SecretRefs to survive form saves` (#139536) — prevents accidental credential loss during config edits.  

These fixes directly address core stability and scalability concerns raised in recent issues.

---

### **4. Community Hot Topics**  
Top 5 most commented/engaged items reveal urgent pain points:

| Issue | Comments | Status | Link |
|------|----------|--------|------|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 14 | Open (P1, 🦞 diamond lobster) | Umbrella issue: duplicate transcripts across channels |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | 13 | Open (P1, 🦞 diamond lobster) | Overflow retry completes without final delivery |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 12 | Open (P3, 🌊 off-meta tidepool) | Request: built-in headless browser for web access |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | 12 | Open (P1, 🦞 diamond lobster) | A2A sessions_send causes message duplication |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 12 | Open (P2, 🌊 off-meta tidepool) | Isolate subagent completion from parent context |

> 🔍 **Analysis**: Users are grappling with **session integrity**, **message fidelity**, and **multi-agent coordination**. The recurring theme is **context pollution**—where agent interactions leak or corrupt state across sessions. Demand for **headless browser integration** signals growing need for reliable web automation within agents.

---

### **5. Bugs & Stability**  
Critical bugs reported today require immediate attention:

| Bug | Severity | Impact | Fix PR? | Link |
|-----|----------|--------|--------|------|
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | P1 (🔥 Diamond Lobster) | Session state, infinite retries | ✅ Yes — #139534 / #139542 | Mixed terminal batches retry forever |
| [#136183](https://github.com/openclaw/openclaw/issues/136183) | P1 (🔥 Diamond Lobster) | Crash-loop, SSH hang | ❌ No | SSH hangs on banner exchange after v2026.8.1 |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | P1 (🔥 Diamond Lobster) | Message loss, malformed JSON | ❌ No | Intermittent provider error on Claude Sonnet 5 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | P1 (🔥 Diamond Lobster) | Gateway blocking at scale | ❌ No | Synchronous persistence blocks event loop |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1 (🔥 Diamond Lobster) | Zombie process leaks | ❌ No | Unreaped child processes accumulate |

> ⚠️ **Urgency**: Several P1 issues are regressions post-v2026.8.1, suggesting a **release quality regression**. These affect core agent stability and message delivery.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority features emerging from user demand:

| Feature | Requested By | Priority | Link | Prediction |
|-------|--------------|---------|------|------------|
| Built-in headless browser | luoziyan100 | P3 | [#53763](https://github.com/openclaw/openclaw/issues/53763) | Likely in Q4 2026 |
| Per-turn send budget for `message` tool | SweetSophia | P1 | [#119992](https://github.com/openclaw/openclaw/issues/119992) | High chance in v2026.10 |
| Intelligent session auto-titling | apoapostolov | P3 | [#99583](https://github.com/openclaw/openclaw/issues/99583) | Could be in v2026.10 |
| Multi-index embedding memory | DIZ-admin | P3 | [#63990](https://github.com/openclaw/openclaw/issues/63990) | Long-term roadmap (Q1 2027) |

> 💡 **Roadmap Signal**: The push for **independent, self-contained agent tools** (e.g., headless browser, multi-index memory) indicates a shift toward **modular, resilient agent architectures**—a key trend for next-gen AI assistants.

---

### **7. User Feedback Summary**  
Real-world pain points revealed through issues:  
- **Message loss** is a top concern: users report silent drops in DMs (e.g., Telegram, iMessage), especially after model failover or overflow retries.  
- **Session state corruption** is pervasive: duplicate messages, stale replies, and context drift appear across channels (Teams, Discord, WhatsApp).  
- **Tool parameter loss** after long conversations disrupts workflows—critical for scripting and automation tasks.  
- **UX friction**: TUI scroll jumps, truncated message lists (max 25), and lack of LaTeX support hinder usability.  
- **Reliability fears**: Users report gateway crashes, zombie processes, and unrecoverable upgrades (e.g., macOS LaunchAgent failure requiring Time Machine restore).

> ✅ **Satisfaction**: Users appreciate rapid releases and transparency (e.g., detailed changelogs, public triage). However, trust in stability is eroding due to repeated regressions.

---

### **8. Backlog Watch**  
Critical issues with no fix PRs and prolonged open status:

| Issue | Age | Impact | Maintainer Attention Needed? | Link |
|------|-----|--------|-------------------------------|------|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 4 months | 🦞 diamond lobster (session/state) | ✅ Yes | Umbrella: duplicate transcript/replay |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | 7 days | 🦞 diamond lobster (message loss) | ✅ Yes | Overflow retry ends without delivery |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 1 month | 🦞 diamond lobster (Gateway block) | ✅ Yes | Sync persistence blocks event loop |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | 4 days | 🐚 platinum hermit (provider error) | ✅ Yes | Malformed JSON after upgrade |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | 2 days | 🦞 diamond lobster (infinite retry) | ✅ Yes | Mixed requester batches stuck |

> 🔎 **Note**: Despite high comment counts, many of these remain unresolved. Maintainers must prioritize **session integrity and message fidelity** before further feature expansion.

---

### ✅ **Final Assessment**  
OpenClaw is **technically advanced but operationally fragile**. While innovation is accelerating—with new tools, better performance, and modular design—the **stability of core agent communication is under stress**. The project is at a crossroads: continue building features or stabilize the foundation. Immediate focus should be on resolving **P1 session-state and message-loss bugs** to rebuild user confidence.  

👉 **Recommendation**: Prioritize fixing `#69208`, `#132762`, and `#137332` in the next patch cycle.  
👉 **Watchlist**: Monitor `#135111` and `#136183`—both indicate potential upstream provider compatibility issues.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (2026-09-06)**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem is entering a pivotal maturity phase in Q3 2026, marked by accelerated architectural refinement and growing operational complexity. Projects are shifting from rapid feature development toward stability, security, and cross-platform reliability—particularly around session integrity, message fidelity, and multi-agent coordination. A clear trend toward modular, resilient agent systems is emerging, driven by demand for production-grade deployment across teams and enterprises. While innovation remains strong, recurring P1 bugs related to context pollution, message loss, and configuration drift highlight systemic challenges in core communication layers.

---

### **2. Activity Comparison**

| Project        | Issues Updated | PRs Updated | Release Status       | Health Score (1–5) | Notes |
|----------------|----------------|-------------|------------------------|--------------------|-------|
| **OpenClaw**   | 500            | 500         | v2026.9.2 (Released)   | ⭐⭐⭐⭐☆             | Highest activity; high churn, urgent stability needs |
| **Hermes Agent** | 50           | 50          | None (in progress)     | ⭐⭐⭐⭐☆             | Steady momentum; focused on cron, desktop, toolset stability |
| **IronClaw**   | 3              | 5           | None                   | ⭐⭐⭐☆☆             | Low volume; UX polish and onboarding focus |
| **QwenPaw**    | 10             | 4           | None                   | ⭐⭐☆☆☆             | Moderate engagement; critical unpatched regressions |
| **ZeroClaw**   | 42             | 50          | v0.8.5 (Released)      | ⭐⭐⭐⭐☆             | High contributor count; security & RFC-driven evolution |

> *Health Score: Based on stability, regression rate, fix velocity, and user trust indicators.*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most active and technically ambitious project in the ecosystem, with unmatched velocity in issue and PR throughput. Its **core technical approach** centers on high-performance, low-latency agent sessions via event-loop optimization, durable history reads, and direct dashboard lookups—positioning it as a performance leader among peers. Compared to others, OpenClaw exhibits the largest community size and most aggressive release cadence (daily updates), though this comes at the cost of **regression risk**, as evidenced by multiple P1 issues post-v2026.8.1. Unlike more stable or niche projects, OpenClaw is actively shaping the frontier of **multi-agent resilience and real-time responsiveness**, making it a de facto reference implementation—but also a cautionary tale of speed vs. stability trade-offs.

---

### **4. Shared Technical Focus Areas**  
Across all five projects, several **emerging cross-cutting requirements** are converging:

| Requirement | Projects Involved | Specific Needs |
|------------|-------------------|----------------|
| **Session Integrity & Message Fidelity** | OpenClaw, Hermes Agent, ZeroClaw, QwenPaw | Prevent duplicate messages, silent data corruption, context drift, and message loss during retries or model failover |
| **Security Boundary Enforcement** | ZeroClaw, OpenClaw, QwenPaw, IronClaw | Consistent sandbox policies, filesystem access control (e.g., macOS Seatbelt), and plugin isolation |
| **Context-Aware UX & Error Messaging** | IronClaw, QwenPaw, ZeroClaw | Clear feedback for paired/unpaired users, proper degradation paths (e.g., `[media attachment]`), and admin-focused error hints |
| **Multi-Agent Coordination & Delegation** | OpenClaw, Hermes Agent, ZeroClaw, QwenPaw | Reliable `delegate_task`, bounded delegate consistency, and isolated subagent completion |
| **Config & State Persistence** | All projects | Avoid silent config loss, ensure migration compatibility, prevent state drift between environments |

These shared pain points indicate that **core agent runtime reliability** has become a universal bottleneck—not just a single-project issue.

---

### **5. Differentiation Analysis**

| Project       | Feature Focus | Target Users | Technical Architecture |
|---------------|---------------|--------------|-------------------------|
| **OpenClaw**  | Performance, session resilience, real-time responsiveness | Power users, developers, multi-agent architects | Event-loop optimized, durable history off-Gateway, streaming-first |
| **Hermes Agent** | Cron workflows, desktop integration, bot group persistence | Remote automation teams, CI/CD integrators | MCP toolset-centric, GIL-aware event loop, global HUD |
| **IronClaw**  | Onboarding clarity, Telegram UX, pairing workflow | Enterprise admins, internal tools builders | Simple, declarative config, embedded Telegram bot commands |
| **QwenPaw**   | Multi-tenancy, team collaboration, skill governance | Enterprises, product teams, AI platform operators | Role-based access, formalized skill creation, Hub architecture |
| **ZeroClaw**  | Security-by-design, WASM plugin composition, auditability | Regulated industries, secure orchestration | Runtime-owned sessions, append-only logs, policy unification |

> ✅ **Key Differentiator**: While OpenClaw leads in raw performance and scale, **ZeroClaw** is uniquely positioned for **high-assurance, compliant deployments** due to its RFC-driven, security-hardened design. **QwenPaw** is the only project explicitly targeting **enterprise team workflows** with multi-tenancy.

---

### **6. Community Momentum & Maturity**  

- **Rapid Iteration (High Velocity):**  
  - **OpenClaw**: Daily releases, 500+ issues/PRs daily — indicative of a **pre-mature, innovation-led phase**.  
  - **ZeroClaw**: 73 contributors in v0.8.5, RFC-heavy — shows **community-driven architectural evolution**.  

- **Stabilization Phase (Focus on Reliability):**  
  - **Hermes Agent**: No new release, but major fixes to cron, UI, and toolsets — signaling **maturity transition**.  
  - **QwenPaw**: Multi-tenant roadmap discussion (#7318) and dependency management requests — **planning for enterprise adoption**.  

- **Polish & Refinement Phase:**  
  - **IronClaw**: Minimal changes, focused on UX clarity — likely **post-beta stabilization**.  

> 📌 **Trend**: The ecosystem is bifurcating—some projects (OpenClaw, ZeroClaw) are pushing boundaries; others (Hermes, QwenPaw) are maturing into production-ready platforms.

---

### **7. Trend Signals**  
Based on community feedback and project direction, the following **industry-wide trends** are emerging:

1. **Shift from Individual Agents to Team-Centric Orchestration**  
   - Demand for **RBAC**, **shared skill pools**, and **multi-tenant hubs** (QwenPaw #7318) signals a move beyond personal assistants to **AI workspaces**.

2. **Demand for Immutable, Replayable Execution Histories**  
   - ZeroClaw’s RFC on append-only event history (#10526) reflects growing need for **debuggability, compliance, and reproducibility** in agent workflows.

3. **Security as First-Class Concern**  
   - Multiple projects now prioritize **sandbox policy enforcement**, **WASM plugin composition**, and **config-to-runtime alignment**—indicating that **security is no longer an afterthought**.

4. **User Experience Must Match Technical Sophistication**  
   - Repeated complaints about **ambiguous errors**, **UI freezes**, and **poor fallbacks** show that even advanced systems fail if UX lags behind capability.

5. **Developer Tooling as Competitive Advantage**  
   - Embedded sandboxes (IronClaw #8075), structured contracts (Hermes #103939), and skill versioning (QwenPaw #7557) reveal that **developer experience is now a key differentiator**.

> 🔍 **Value for Developers**: The next wave of competitive advantage will go to projects that **combine deep technical rigor with intuitive, reliable UX**—not just raw performance or feature count.

---

### ✅ **Final Summary**  
The open-source AI agent ecosystem is transitioning from **feature explosion** to **operational maturity**. While OpenClaw leads in innovation velocity, **stability and reliability are becoming the true differentiators**. Projects like ZeroClaw and QwenPaw are building the foundation for **secure, auditable, and team-ready AI platforms**—a clear signal that the future lies not in individual agents, but in **trusted, composable, and collaborative AI ecosystems**. For developers and decision-makers: prioritize projects with **strong security hygiene, clear error handling, and mature contributor processes**—they are best positioned for long-term success.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-06**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with a robust pace of development: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained momentum across multiple components. The ecosystem is heavily focused on **stability, session continuity, and cross-platform reliability**, particularly around cron workflows, desktop integration, and bot group chat persistence. While no new releases have been published, significant progress is being made in resolving high-severity bugs and advancing core features like global HUD access and structured delegation contracts. The community is engaged and vocal, especially regarding usability and edge-case reliability.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-09-06.  
The project continues to operate on the `main` branch with ongoing stabilization efforts ahead of the next versioned release (expected soon after critical fixes are merged).

---

### **3. Project Progress**  
✅ **Merged & Closed PRs (Today):**  
- **PR #86031** (`fix(mcp): keep colliding MCP servers available to tool search`) — Resolves silent shadowing of MCP tools by built-in toolsets, improving discoverability and compatibility.  
- **PR #37887** (`fix(toolsets): resolve alias target when merging registry tools`) — Fixes tool loss during alias resolution, enhancing plugin stability.  
- **PR #31788** (`fix(mcp): warn when an MCP server name collides with a built-in toolset`) — Adds explicit warnings for naming conflicts, preventing silent failures.  
- **PR #19793** (`fix(toolsets): merge MCP tools when alias collides with static toolset`) — Salvaged and rebased to restore visibility of MCP tools under conflicting names.  

🔹 These merges collectively address long-standing **MCP toolset collision issues**, significantly improving plugin reliability and user transparency.

---

### **4. Community Hot Topics**  
🔥 **Top 3 Most Active Issues (by comment count):**  
1. **[Issue #88584]** [Automated Nous integration blocked](https://github.com/NousResearch/hermes-agent/issues/88584) – *68 comments*  
   - **Status:** Open, P3, blocking integration pipeline.  
   - **Need:** Resolution of merge conflicts in `cron/jobs.py` to unblock automated sync between Nous and Enterkey. Critical for CI/CD workflow integrity.  
   - **Implication:** Delays broader ecosystem alignment; signals dependency tension between forks.

2. **[Issue #97681]** [Bot Group Chats should keep working after Desktop closes](https://github.com/NousResearch/hermes-agent/issues/97681) – *23 comments*  
   - **Status:** Open, P2, in production rollout phase.  
   - **Need:** Persistent bot coordination across gateways even when the desktop client is offline.  
   - **Implication:** Key use case for remote automation and team collaboration — a major UX and architectural milestone.

3. **[Issue #58576]** [Desktop UI freezes due to GIL pressure in event loop](https://github.com/NousResearch/hermes-agent/issues/58576) – *9 comments*  
   - **Status:** Open, P1, platform-specific (Windows).  
   - **Need:** Fix for UI freeze during heavy agent workloads.  
   - **Implication:** High impact on user trust and productivity, especially for power users running complex agents.

💡 **Trend Analysis:** The community is prioritizing **cross-component resilience**, **desktop reliability**, and **automated workflow stability** — suggesting a shift from feature growth to maturity and operational robustness.

---

### **5. Bugs & Stability**  
🚨 **High-Priority Bugs (P1/P2) Reported Today:**  
- **[Bug #100401]** Cron heartbeat deadlocks job execution → kills jobs >60s.  
  🔗 [GitHub Issue](https://github.com/NousResearch/hermes-agent/issues/100401)  
  ✅ **Fix PR exists:** Not yet merged, but conceptually sound. Urgent for scheduled task reliability.

- **[Bug #103904]** Recurring cron job drifts 2h late due to UTC persistence.  
  🔗 [GitHub Issue](https://github.com/NousResearch/hermes-agent/issues/103904)  
  ✅ **Fix PR pending:** Requires timezone-aware storage logic update.

- **[Bug #96925]** Copilot duplicates tool calls post-v0.20.6.  
  🔗 [GitHub Issue](https://github.com/NousResearch/hermes-agent/issues/96925)  
  🟡 **Impact:** High — breaks deterministic agent behavior. No fix PR yet.

- **[Bug #103579]** Background review fork drops external memory tools → cache inconsistency.  
  🔗 [GitHub Issue](https://github.com/NousResearch/hermes-agent/issues/103579)  
  ⚠️ **Risk:** Data integrity breach in memory-heavy workflows.

⚠️ **Stability Concerns:**  
- Multiple **cron-related regressions** (deadlocks, timezone drift, delivery path failure) suggest instability in scheduling infrastructure.  
- **Desktop UI freezing** (Issue #58576) remains unresolved despite being P1 — indicates potential GIL bottlenecks in core event handling.

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **Top User-Requested Features (with PRs in flight):**  
- **Global HUD summon shortcut** (`CommandOrControl+Shift+U`) — Closely tied to **PR #103942** and **#101951**.  
  🔗 [Feature Request #103940](https://github.com/NousResearch/hermes-agent/issues/103940)  
  ✅ **In Development:** Already implemented in PRs — likely in next minor release.

- **Simplified structured output contracts for `delegate_task`** — Addresses model authoring burden.  
  🔗 [Feature Request #103917](https://github.com/NousResearch/hermes-agent/issues/103917)  
  ✅ **PR #103939** implements it — strong signal of roadmap adoption.

- **Standalone Desktop installer (lite client)** — Addressing bloat in current installers.  
  🔗 [Feature Request #58799](https://github.com/NousResearch/hermes-agent/issues/58799)  
  💬 *High upvotes (4 likes), low priority (P3)* — may be delayed unless demand increases.

📌 **Predicted Next Version Focus:**  
- **v0.21.1 or v0.22.0** will likely include:  
  - Global HUD hotkey  
  - Structured output contracts  
  - Cron stability fixes (timezone, deadlock)  
  - Improved MCP toolset visibility

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points (from Issues & Comments):**  
- **Desktop app feels "heavy" and slow** — users report freezing during agent tasks (Issue #58576).  
- **Bot group chats go silent unexpectedly** — users can't resume work after stopping via desktop (Issue #97740).  
- **Configuration changes don’t persist** — e.g., `browser.allow_private_urls` shows success but fails silently (Issue #103277).  
- **MCP toolsets vanish without warning** — frustration over silent collisions (repeated in multiple issues).  
- **Cron jobs misfire or die silently** — undermines trust in automation workflows.

👍 **Positive Signals:**  
- High engagement in PR reviews (e.g., #103942, #103939) suggests strong community buy-in.  
- Users actively contribute fixes (e.g., #86031, #19793) — signs of healthy contributor culture.

---

### **8. Backlog Watch**  
🔍 **Critical Long-Unanswered Issues Needing Attention:**  
- **[Issue #88584]** Automated Nous integration blocked — *68 comments*, P3, but **blocking upstream merge**.  
  ➤ **Action Required:** Assign owner to resolve merge conflict in `cron/jobs.py`.  
  🔗 [Link](https://github.com/NousResearch/hermes-agent/issues/88584)

- **[Issue #97681]** Bot Group Chats must survive Desktop shutdown — *23 comments*, P2, **core feature for remote operation**.  
  ➤ **Action Required:** Prioritize implementation of gateway-to-gateway message relay and state persistence.  
  🔗 [Link](https://github.com/NousResearch/hermes-agent/issues/97681)

- **[Issue #58576]** Desktop UI freezes under load — *9 comments*, P1, **impacts usability**.  
  ➤ **Action Required:** Investigate GIL contention in `web_server` event loop; consider async refactoring.  
  🔗 [Link](https://github.com/NousResearch/hermes-agent/issues/58576)

- **[Issue #103946]** 32K-model startup blocked by 64K minimum — *1 comment*, P2, **limits local model support**.  
  ➤ **Action Required:** Relax context window enforcement for models with valid YaRN support.  
  🔗 [Link](https://github.com/NousResearch/hermes-agent/issues/103946)

---

> ✅ **Overall Project Health:** **Strong momentum**, **high engagement**, **critical stability issues emerging**. The project is transitioning from rapid feature expansion to **maturity and reliability focus**. Immediate attention to cron, desktop UI, and MCP toolset issues is essential to maintain user trust and developer confidence.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

### **1. Today's Overview**  
As of 2026-09-06, IronClaw continues steady development with moderate activity: 3 new issues and 5 pull requests updated in the past 24 hours. The project maintains a focus on user experience refinement, particularly around Telegram integration and pairing workflows. No new releases were published, indicating a current stabilization phase. Most recent work centers on improving error messaging, command routing, and sandbox defaults—signaling a shift toward polish and reliability ahead of potential feature expansion.

---

### **2. Releases**  
*None.*  
No new versions were released in the last 24 hours. The project remains on its current stable branch without updates to versioned artifacts or release notes.

---

### **3. Project Progress**  
The following PRs were merged/closed today, advancing core functionality and UX:

- **[PR #8073](https://github.com/nearai/ironclaw/pull/8073)** – *Fixes:* Improved error messaging for unconfigured Telegram personal-account linking by replacing vague "Something went wrong" with clear admin-level guidance: *"not configured by administrator"*. This reduces user confusion and improves diagnostic clarity.
  
- **[PR #8054](https://github.com/nearai/ironclaw/pull/8054)** – *Fixes:* Ensures unpaired users receive the correct connect/pairing notice on first `/start` interaction in Telegram. Previously, they saw a command inventory before being prompted to pair—an anti-pattern in onboarding flow. Now, pairing check occurs *before* command admission.

- **[PR #8072](https://github.com/nearai/ironclaw/pull/8072)** – *Feature:* Registers Telegram bot commands (`/model`, `/status`, etc.) via `setMyCommands` at extension activation, making them visible in the chat menu (hamburger icon). Enhances discoverability and aligns with Telegram best practices.

These changes reflect a strong emphasis on **onboarding clarity**, **command visibility**, and **error transparency**.

---

### **4. Community Hot Topics**  
The most active discussion revolves around **user intent alignment during initial interactions** and **correct error context**:

- **Issue #8074** – *[OPEN]* A paired user acting in a disconnected shared channel receives incorrect copy meant for unpaired users.  
  🔗 [Issue #8074](https://github.com/nearai/ironclaw/issues/8074)  
  💡 *Underlying Need:* The system must distinguish between *pairing state* and *channel connectivity*, ensuring messages reflect the actual user’s context—not a generic "connect your account" prompt when the real issue is channel disconnection.

- **PR #8075** – *[OPEN]* Proposes setting up an embedded Pi sandbox with a pinned Bun/Pi agent-core worker as the default startup profile.  
  🔗 [PR #8075](https://github.com/nearai/ironclaw/pull/8075)  
  💡 *Underlying Need:* Performance benchmarking and developer consistency are driving demand for predictable, reproducible sandbox environments. This change supports both dev workflow stability and performance testing.

These items highlight growing interest in **context-aware messaging** and **developer tooling maturity**.

---

### **5. Bugs & Stability**  
Two notable bugs were closed today; one remains open:

- **Closed:**  
  - **[Issue #7956](https://github.com/nearai/ironclaw/issues/7956)** – Unpaired Telegram `/start` sent command inventory instead of pairing notice.  
    ✅ *Fixed in [PR #8054](https://github.com/nearai/ironclaw/pull/8054)* — now resolved via pre-command pairing check.  
  - **[Issue #7955](https://github.com/nearai/ironclaw/issues/7955)** – Generic "Something went wrong" shown when Telegram API credentials missing.  
    ✅ *Fixed in [PR #8073](https://github.com/nearai/ironclaw/pull/8073)* — replaced with clear admin-configured message.

- **Open:**  
  - **[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)** – Paired user in non-connected shared channel gets wrong error copy.  
    ⚠️ *Severity:* Medium (UX regression).  
    📌 *Impact:* Misleading feedback may cause users to believe their account needs pairing, when it’s actually a channel connection issue.  
    🔗 [GitHub Issue #8074](https://github.com/nearai/ironclaw/issues/8074)

This indicates ongoing refinement of **edge-case handling** in multi-channel, paired-user scenarios.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging signals point toward enhanced **developer tooling** and **system observability**:

- **[PR #8075](https://github.com/nearai/ironclaw/pull/8075)** – Embedded Pi sandbox loop as default startup.  
  🔗 [PR #8075](https://github.com/nearai/ironclaw/pull/8075)  
  📌 *Roadmap Implication:* Suggests upcoming focus on **benchmarking**, **agent boot profiling**, and **sandbox consistency**—likely leading to a dedicated `--benchmark` mode or CI/CD integration.

- **[PR #8072](https://github.com/nearai/ironclaw/pull/8072)** – Bot command registration via `setMyCommands`.  
  🔗 [PR #8072](https://github.com/nearai/ironclaw/pull/8072)  
  📌 *Roadmap Implication:* Indicates a push toward **native platform integration**—Telegram UI improvements suggest broader plans for rich client experiences across platforms.

These features signal that IronClaw is maturing from a basic agent framework into a **production-ready, integrable AI assistant platform**.

---

### **7. User Feedback Summary**  
User pain points remain centered on **onboarding friction** and **ambiguous error messages**:

- Users expect immediate guidance upon first contact (e.g., `/start`) — not a list of commands they can’t use yet.
- When something goes wrong (e.g., missing API keys), blaming the user (“Something went wrong”) causes frustration. Clearer admin-focused messaging (as fixed in #8073) significantly improves trust.
- Paired users in disconnected channels feel misled by “connect your account” prompts — highlighting the need for **context-aware UX**.

✅ *Satisfaction indicators:* Fixes to `/start` behavior and error messaging have been well-received internally, suggesting improved confidence in deployment reliability.

---

### **8. Backlog Watch**  
Critical long-standing issues requiring maintainer attention:

- **[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)** – Paired user in non-connected shared channel receives incorrect pairing notice.  
  🔗 [GitHub Issue #8074](https://github.com/nearai/ironclaw/issues/8074)  
  📌 *Status:* Open since 2026-09-04, no assigned reviewer.  
  📌 *Priority:* High (affects paired user experience in shared environments).  
  📌 *Risk:* Could lead to misdiagnosis of account issues vs. infrastructure issues.

- **[PR #8075](https://github.com/nearai/ironclaw/pull/8075)** – Embedded Pi sandbox loop default.  
  🔗 [PR #8075](https://github.com/nearai/ironclaw/pull/8075)  
  📌 *Status:* Open, stacked on another PR (#7908), awaiting base merge.  
  📌 *Priority:* Medium-High (impacts developer workflow and benchmarking).

> ⚠️ *Recommendation:* Prioritize resolving #8074 to maintain trust in paired workflows. Unblock #8075 after base PR merges to accelerate sandbox usability.

--- 

*Generated: 2026-09-06 | Source: GitHub data from nearai/ironclaw*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-06**

---

### **1. Today's Overview**  
QwenPaw shows moderate activity with 10 new issues and 4 open pull requests updated in the past 24 hours, indicating sustained community engagement. The project is transitioning toward a multi-tenant architecture with the upcoming 2.2.0 release, signaling a strategic pivot from personal AI assistant to team-oriented agent orchestration. While no new releases were issued, several high-impact bugs were reported—particularly around model context handling and error propagation—that could affect stability in production environments. Overall, the project remains active and responsive, though some critical infrastructure gaps are emerging.

---

### **2. Releases**  
**None**  
No new releases were published as of 2026-09-06. The latest stable version remains **v2.2.0**, which includes recent updates such as `ModelInfo.max_tokens` deprecation (PR #7337) and improvements to the web UI and tool coordination layer. No breaking changes or migration notes have been announced for this version.

---

### **3. Project Progress**  
*No PRs were merged or closed today.*  
However, significant feature work is underway:
- **PR #7569 (feat(modes): add Advisor Mode)** introduces a novel dual-model interaction pattern (advisor + worker), enhancing task performance while reducing cost—this could become a flagship feature in v2.2.1.
- **PR #7509 (feat(skill): Update make-skill to v2)** implements a formalized, approval-driven skill creation workflow, improving governance and reusability—critical for enterprise adoption.
- **PR #7486 (feat(creator))** brings major enhancements to the Creator app plugin: async delegation, media scheduling, Windows hardening, and Docker support—key steps toward professional-grade deployment.

---

### **4. Community Hot Topics**  
The most active discussions center on **multi-tenancy and team collaboration**, reflecting a clear shift in user expectations:

- **Issue #7318 [OPEN]** – *“QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0: what should we build next?”*  
  🔗 [GitHub Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)  
  With **23 comments** and growing momentum, this thread is the epicenter of community-driven roadmap planning. Users are eager to shape QwenPaw Hub’s future—especially around role-based access, shared skill pools, and admin controls. This signals strong demand for organizational use cases beyond personal agents.

- **PR #7569 (Advisor Mode)** has sparked interest due to its potential to improve reasoning quality without increasing compute costs—a compelling value proposition for teams.

These topics suggest that QwenPaw is evolving from a developer-friendly prototype into a scalable, collaborative AI platform.

---

### **5. Bugs & Stability**  
Critical stability issues were reported today, primarily related to **error handling and context management**:

| Severity | Issue | Description | Link |
|--------|-------|-------------|------|
| ⚠️ High | **#7576 [Bug]** – Hardcoded 32768 context fallback | Forces all models to use a fixed 32768 context window regardless of actual capability, causing `CONTEXT_UNFIT` errors (>31130 tokens). Affects all v2.1.0–v2.2.0 releases. | [Issue #7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) |
| ⚠️ High | **#7572 [Bug]** – Exception swallowing in `_coordinator.py` | Silently catches all exceptions during tool execution, logging only `str(exc)` — erasing stack traces and making debugging impossible. | [Issue #7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) |
| ⚠️ Medium | **#7474 [Bug]** – Custom provider loading failure | After `max_tokens` → `max_output_length` migration, custom providers fail to load due to unsupported field. | [Issue #7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) |
| ⚠️ Medium | **#7574 / #7575 [Bugs]** – img-gen skill API misconfigurations | `edit()` sends `response_format` unconditionally; `generate()` omits `model` field — both trigger HTTP 503/400 errors on OpenAI endpoints. | [Issue #7574](https://github.com/agentscope-ai/QwenPaw/issues/7574), [Issue #7575](https://github.com/agentscope-ai/QwenPaw/issues/7575) |

> ✅ **Note**: No fix PRs exist for these yet. These represent immediate risks to usability and reliability.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests point to three key directions for the next 6–12 months:

- **Multi-tenancy & Team Management**  
  - **#7318** (discussed above) is the top priority. Expect QwenPaw Hub to launch with RBAC, shared skill repositories, and workspace isolation in v2.2.1+.

- **Skill Versioning & Dependency Management**  
  - **#7557 [Feature]** – Request for version and dependency metadata in skills. This reflects real-world pain points in managing agent fleets across environments. Likely to be addressed via a `skill.yaml` manifest format.

- **Enhanced Web UI Interactions**  
  - **#7573 [Feature]** – "Edit last message" and "Rewind" buttons are highly requested. Users want session-level control without restarting. This aligns with modern LLM chat UX trends.

- **Improved Output Formatting**  
  - **#7570 [Feature]** – Auto-collapse thinking cards in Feishu output. Demonstrates deep integration needs with external platforms and UX polish demands.

---

### **7. User Feedback Summary**  
Real-world usage reveals nuanced pain points:
- **Workflow confusion**: User **xiaohushi512 (#7571)** reports persistent confusion between development (A), runtime (C), and default paths (B), leading to accidental code overwrites. Suggests poor path isolation and lack of configuration clarity.
- **Memory & consistency issues**: The user humorously notes “it always forgets,” but the root cause is actually inconsistent behavior across environments and unclear deployment workflows.
- **UX friction**: Users appreciate the Feishu streaming card feature (#3001) but want better layout control (e.g., auto-collapsing), showing a desire for polished, production-ready integrations.

> 💬 **Takeaway**: While technical capabilities are advancing, **user experience and operational clarity remain weak spots**—especially for non-expert users deploying in teams.

---

### **8. Backlog Watch**  
Several long-standing, high-impact issues remain unresolved and require maintainer attention:

- **#7318 [OPEN]** – Multi-tenant Hub roadmap discussion  
  🔗 [Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)  
  Despite 23 comments, it lacks a formal proposal or design doc. Needs leadership to consolidate feedback into a roadmap.

- **#7557 [OPEN]** – Skill versioning and dependency metadata  
  🔗 [Issue #7557](https://github.com/agentscope-ai/QwenPaw/issues/7557)  
  Critical for scaling agent fleets. Currently no PRs or proposals—priority for v2.2.1.

- **#6874 [Under Review]** – Configurable tool call timeout  
  🔗 [PR #6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)  
  Over a month old, with no review progress. Essential for long-running tools and edge deployments.

> 📌 **Recommendation**: Assign dedicated maintainers to triage these items and initiate design discussions to prevent stagnation.

---

**Status Summary**:  
🟢 **Active** | ⚠️ **Moderate Risk** (due to unpatched regressions) | 🔮 **Future-Ready** (multi-tenant, team features)  
**Next Milestone**: **QwenPaw Hub (v2.2.1)** – Expected to address team workflows, error resilience, and skill governance.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-06  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

ZeroClaw continues its rapid development momentum with high engagement across issues and pull requests: **42 active issues** and **50 open PRs** updated in the last 24 hours. The project is undergoing a major architectural refinement phase, driven by **RFCs on session lifecycle, WASM plugin composition, and sandbox policy unification**, indicating a focus on long-term scalability and security. A new release, **v0.8.5**, was issued with 454 commits from 73 contributors—highlighting strong community participation and a shift toward production-hardened stability. Activity remains concentrated in core areas: runtime architecture, security boundaries, and cross-channel compatibility.

---

### **2. Releases**

#### ✅ **v0.8.5 (Released 2026-09-05)**  
- **Summary**: Security, connectivity, and operator experience release spanning **454 commits** from **73 contributors**.
- **Key Additions**:
  - Introduction of **ZeroRelay** and **ZeroRouter** for improved inter-service communication and routing.
  - Expanded live chat capabilities with enhanced provider integration.
  - Hardened boundaries for plugins, sandboxes, webhooks, credentials, and file handling.
- **Migration Notes**: No breaking changes reported. Users should verify configuration compatibility with `web_dist_dir` and `model_routing_config` if using custom providers or advanced routing logic.
- 🔗 [Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.5)

---

### **3. Project Progress**

#### 📌 **Merged / Closed PRs (Today)**
- **PR #10064** – *Fix: Self-destruct approval cards after Telegram tap*  
  → Enhances UX and security in group workflows; resolves potential UI clutter and stale approvals.  
  🔗 [PR #10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064)
- **PR #10435** – *Fix: Preserve model context when anchoring Gemini requests*  
  → Prevents loss of context during request forwarding; critical for accurate agent behavior.  
  🔗 [PR #10435](https://github.com/zeroclaw-labs/zeroclaw/pull/10435)
- **PR #10649** – *Fix: Allow PR size label updates*  
  → Enables better CI automation and contributor feedback loops.  
  🔗 [PR #10649](https://github.com/zeroclaw-labs/zeroclaw/pull/10649)

> These fixes reflect ongoing improvements in **security hygiene**, **UX consistency**, and **development workflow efficiency**.

---

### **4. Community Hot Topics**

The most active discussions center on **core architectural evolution** and **security policy refinement**:

- **Issue #9487** – *RFC: Runtime-owned conversation sessions and transport surface adapters* (**33 comments**)  
  🔗 [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)  
  > *Underlying need*: Establishing clear ownership of session state and transport surfaces to reduce fragility and improve auditability in multi-agent flows.

- **Issue #9488** – *RFC: Unified file and attachment architecture* (**26 comments**)  
  🔗 [Issue #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)  
  > *Underlying need*: Eliminate drift between application-level path admission and OS-level sandbox enforcement—critical for preventing privilege escalation.

- **Issue #10526** – *RFC: Append-only session event history, deterministic replay* (**3 comments**)  
  🔗 [Issue #10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)  
  > *Signaling future direction*: Pushing toward immutable, replayable execution histories—key for debugging, compliance, and reproducibility.

These RFCs indicate a strategic pivot toward **predictable, auditable, and secure agent execution environments**, especially relevant for enterprise and regulated deployments.

---

### **5. Bugs & Stability**

| Severity | Issue | Summary | Fix PR? |
|--------|------|--------|-------|
| **S1 (Blocked)** | #10536 – macOS Seatbelt ignores `allowed_roots` | Shell commands fail despite configured filesystem access rights | ❌ No fix yet |
| **S2 (Degraded)** | #10534 – Bounded delegates silently strip `delegate` tool | Config mismatch leads to unexpected tool loss | ❌ No fix yet |
| **S2 (Degraded)** | #10625 – `[media attachment]` placeholder shown to text-only models | Poor degradation path harms user experience | ❌ No fix yet |
| **S2 (Degraded)** | #10626 – TTS speaks Markdown and emoji verbatim | Audio output includes markup, reducing clarity | ❌ No fix yet |
| **S3 (Minor)** | #10585 – New log sink races migration tests | Flaky CI due to shared tracing sinks | ✅ PR pending (#10649 handles infrastructure, not logic) |

> ⚠️ **Critical risk**: Multiple S1/S2 bugs relate to **sandbox policy enforcement** and **config-to-runtime alignment**, suggesting ongoing challenges in maintaining consistent security boundaries across platforms.

---

### **6. Feature Requests & Roadmap Signals**

Emerging patterns signal upcoming capabilities in **user control**, **multi-modal interaction**, and **extensibility**:

- **Feature Request**: Per-field cron schedule input (#10641)  
  🔗 [Issue #10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)  
  → *Predicted for v0.8.6+*: Improves usability for non-technical users managing scheduled agents.

- **Feature Request**: Pass Anthropic extended-thinking params through OpenAI-compatible gateways (#10530)  
  🔗 [Issue #10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530)  
  → *Likely in v0.8.6*: Enables full feature parity across gateway layers—key for Claude-powered deployments.

- **Feature Request**: Add Mattermost approval prompts (#10358)  
  🔗 [PR #10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358)  
  → *Blocked but actively discussed*: Indicates growing demand for **enterprise collaboration platform support**.

> 🚀 **Roadmap inference**: ZeroClaw is evolving into a **cross-platform, extensible agent orchestration layer**, prioritizing **security-by-design**, **configurability**, and **integration depth**.

---

### **7. User Feedback Summary**

Real-world pain points are emerging from complex deployment scenarios:

- **Android/Termux users** report installation failure due to incorrect binary selection (#7911) → Highlights gaps in **platform-aware installer logic**.
- **Enterprise users** express frustration with **inconsistent message degradation** (e.g., showing `[media attachment]` in text-only contexts) → Calls for more **context-aware fallback strategies**.
- **Operators** complain about **config drift warnings pointing to wrong binaries** (#10532) → Underlines the need for **self-consistent daemon self-repair mechanisms**.
- **Developers** want **better tooling for local testing**, especially around Windows update paths (#7910) → Points to **cross-platform CI/CD maturity needs**.

> 💬 **Overall sentiment**: High satisfaction with innovation and security focus, but growing demand for **robustness in edge cases** and **user-friendly defaults**.

---

### **8. Backlog Watch**

Critical Issues requiring maintainer attention:

- **Issue #10536** – *macOS Seatbelt ignores `allowed_roots`* (S1)  
  🔗 [Issue #10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)  
  > Requires urgent review: blocks secure shell execution on macOS despite correct config.

- **Issue #10534** – *Bounded delegates silently strip `delegate` tool* (S2)  
  🔗 [Issue #10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534)  
  > Misalignment between config and runtime behavior undermines trust in delegation systems.

- **Issue #10533** – *`model_routing_config` rejects valid `custom.*` slots* (S1)  
  🔗 [Issue #10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533)  
  > Breaks use of custom providers; contradicts documented schema — requires immediate patch.

- **Issue #10549** – *RFC: Simplify RFC voting process*  
  🔗 [Issue #10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)  
  > Highlights governance friction; could slow down decision-making at scale.

> 🔔 **Action needed**: Maintainers must prioritize **security boundary audits** and **RFC process streamlining** to sustain momentum.

---

### ✅ **Project Health Assessment (2026-09-06)**

- **Development Velocity**: ⭐⭐⭐⭐⭐ (High activity, strong contributor base)
- **Security Focus**: ⭐⭐⭐⭐⭐ (Multiple hardening efforts, active policy RFCs)
- **Stability & Reliability**: ⭐⭐⭐☆☆ (Several S1/S2 bugs persist; needs triage)
- **User Experience**: ⭐⭐⭐☆☆ (Improving, but edge cases hinder adoption)
- **Governance & Process**: ⭐⭐⭐☆☆ (RFCs are active but voting overhead is high)

> **Verdict**: ZeroClaw is a **high-potential, rapidly maturing AI agent framework** with strong technical ambition. Immediate focus should be on **stabilizing core security boundaries** and **streamlining contributor workflows** to maintain trust and velocity.

---  
*Data sourced from GitHub API as of 2026-09-06 00:00 UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*