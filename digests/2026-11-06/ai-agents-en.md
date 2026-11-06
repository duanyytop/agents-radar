# OpenClaw Ecosystem Digest 2026-11-06

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-06 02:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-11-06**

---

### **1. Today's Overview**  
OpenClaw remains highly active with a surge in developer engagement: **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and triage activity. The project is in a high-intensity phase, likely preparing for upcoming releases or addressing critical stability concerns across multiple platforms. Despite this volume, only **one new release (v2026.11.1)** was published, suggesting a focus on quality control over rapid iteration. The issue backlog shows deep technical challenges—especially around macOS reliability, crash loops, and state integrity—indicating ongoing infrastructure hardening.

---

### **2. Releases**  
#### **v2026.11.1** – *Released 2026-11-06*  
**Highlights:**  
- ✅ **Safer Mac settings**: Prevents failed config saves from overwriting secrets; disabling Tailscale exposure now preserves Gateway authentication. ([#187734](https://github.com/openclaw/openclaw/pull/187734), [#187664](https://github.com/openclaw/openclaw/pull/187664))  
- ✅ **More reliable channel replies**: Improved handling for Telegram, Discord, and webhook conversations.  

**Migration Notes:**  
No breaking changes reported. Users on v2026.10.x are encouraged to update to ensure fixes for macOS startup failures and credential persistence issues. No migration script required.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ `perf(ui): reduce long-session streaming onset work` ([#193479](https://github.com/openclaw/openclaw/pull/193479)) – Reduces initial load overhead in long-running sessions.  
- ✅ `fix(memory-wiki): ignore commented and escaped wikilinks` ([#193469](https://github.com/openclaw/openclaw/pull/193469)) – Eliminates false broken-link warnings in documentation.  
- ✅ `fix(release): accept qualified candidate plugin artifacts without repacking` ([#193795](https://github.com/openclaw/openclaw/pull/193795)) – Speeds up release pipelines by reusing validated plugin builds.  
- ✅ `test(qa): retire the redundant Swift portability adapter` ([#193887](https://github.com/openclaw/openclaw/pull/193887)) – Clean-up improves CI maintainability.  

These merges reflect a strong focus on **performance optimization, CI hygiene, and reducing friction in build/deployment workflows**.

---

### **4. Community Hot Topics**  
The most active issues and PRs today center on **crash loops, state corruption, and platform-specific instability**:

| Issue/PR | Comments | Link | Summary |
|--------|---------|------|--------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 75 | [P0 Crash Loop] | Gateway blocks for minutes during large plugin capture (regression since 2026.9.6). High impact on dev workflow. |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | 19 | [P1 macOS Stop Failure] | `gateway stop` fails on macOS due to process ancestry inspection failure. Blocks restarts. |
| [#193842](https://github.com/openclaw/openclaw/pull/193842) | N/A | [Security Fix] | Fixes PostgreSQL staged authority commit race condition — critical for data consistency. |
| [#193907](https://github.com/openclaw/openclaw/pull/193907) | N/A | [Discord Fix] | Ensures Discord real-time wake-name TTL uses monotonic clock, preventing timing bugs after NTP adjustments. |

**Underlying Need:** Stability under edge cases (large plugins, long sessions, system clock changes) is a top priority. Developers are reporting **systemic hangs, crashes, and unresponsive gateways**, especially on macOS and Linux with heavy plugin loads.

---

### **5. Bugs & Stability**  
Critical stability issues dominate the current landscape:

| Severity | Issue | Description | Fix PR? |
|--------|------|------------|--------|
| 🔴 P0 | [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes during plugin capture (2026.9.6 regression) | ❌ No fix yet |
| 🔴 P0 | [#191944](https://github.com/openclaw/openclaw/issues/191944) | `gateway stop` fails on macOS due to process inspection error | ❌ No fix yet |
| 🔴 P0 | [#191847](https://github.com/openclaw/openclaw/issues/191847) | Large session kills 512MB SQLite worker → "admission is closed" | ❌ No fix yet |
| 🟡 P1 | [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec returns shared-state integrity error without child result | ⚠️ Partial context, no fix |
| 🟡 P1 | [#178359](https://github.com/openclaw/openclaw/issues/178359) | `doctor --fix --non-interactive` idles for 15+ min with no output | ❌ No fix yet |

> **Trend:** Multiple P0/P1 issues involve **SQLite worker exhaustion, process lifecycle mismanagement, and state corruption** — signaling deeper architectural challenges in agent lifecycle and resource management.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests highlight growing demand for **customization, security, and UX polish**:

| Request | Link | Signal |
|-------|------|--------|
| Add `--prompt-file <path>` to `infer model run` | [#140244](https://github.com/openclaw/openclaw/issues/140244) | High demand for automation-friendly CLI workflows |
| Disable hosted plugin catalog feed | [#164620](https://github.com/openclaw/openclaw/issues/164620) | Privacy/security concern; users want offline control |
| Progress streaming in Feishu (Lark) | [#131457](https://github.com/openclaw/openclaw/issues/131457) | Expansion of real-time feedback across channels |
| Fork prior chat segments in Control UI | [#158800](https://github.com/openclaw/openclaw/issues/158800) | Strong desire for better conversation history navigation |

**Prediction:** These features will likely appear in **v2026.12.0** or **v2027.1.0**, particularly prompt file support and progress streaming, as they align with OpenClaw’s push toward **automation and multi-channel UX parity**.

---

### **7. User Feedback Summary**  
Real-world pain points reveal systemic frustrations:

- **macOS users report frequent crashes, unclean shutdowns, and `stop` command failures** — making updates unreliable. ([#170956](https://github.com/openclaw/openclaw/issues/170956), [#191944](https://github.com/openclaw/openclaw/issues/191944))
- **Large session users face memory exhaustion and silent failures** — e.g., SQLite workers dying mid-turn. ([#191847](https://github.com/openclaw/openclaw/issues/191847))
- **Plugin developers complain about opaque error messages** — e.g., “CLI command failed” without diagnostics. ([#193902](https://github.com/openclaw/openclaw/pull/193902))
- **Native app users report dead links in dashboard widgets** — breaking expected functionality. ([#142606](https://github.com/openclaw/openclaw/issues/142606))

> **Overall sentiment:** High frustration with **stability and debugging opacity**, but strong trust in the project’s direction. Users are willing to tolerate complexity if it leads to robustness.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues remain unresolved despite significant community attention:

| Issue | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#161921](https://github.com/openclaw/openclaw/issues/161921) | 2 months | Open, P0 | Plugin and doctor cycles block each other after failed migrations — major release blocker. |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 8 months | Open, P0 | `write` tool overwrites files instead of appending — **silent data loss risk**. |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 7 months | Open, P0 | Billing recovery cooldown persists across restarts — **hours-long user lockout**. |
| [#142821](https://github.com/openclaw/openclaw/issues/142821) | 2 months | Open, P0 | Default redaction poisons replayed context — **security and correctness flaw**. |
| [#150743](https://github.com/openclaw/openclaw/issues/150743) | 4 months | Open | QQ bot support stalled — **ecosystem uncertainty** for Chinese users. |

> **Call to Action:** These require **maintainer prioritization**. They represent risks to data integrity, user retention, and cross-platform reliability.

---

**Final Assessment:** OpenClaw is in a **critical stabilization phase**. While innovation continues (e.g., improved streaming, plugin UX), the team must urgently address **crash loops, memory leaks, and platform-specific regressions** before broader adoption can scale. The next release should prioritize **P0 bug resolution and CI/CD resilience** to restore confidence in the platform’s reliability.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-06**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in late 2026 is characterized by rapid architectural convergence, intense focus on stability and security, and growing maturity in deployment patterns. Projects are shifting from isolated tools toward integrated, unified runtime environments—evidenced by Hermes Agent’s “Hearth Release” and ZeroClaw’s push for deterministic session replay. While innovation continues in plugin ecosystems and cross-channel UX, the dominant trend is *infrastructure hardening*: addressing crash loops, memory leaks, state corruption, and identity governance. This phase reflects a transition from early experimentation to production-grade readiness, with user feedback increasingly demanding reliability over novelty.

---

### **2. Activity Comparison**

| Project         | Issues (Last 24h) | PRs Updated (Last 24h) | New Release? | Health Score (1–5) |
|----------------|-------------------|--------------------------|--------------|--------------------|
| **OpenClaw**   | 500               | 500                      | ✅ v2026.11.1 | ⭐⭐⭐⭐☆ (4.3)        |
| **Hermes Agent** | 50                | 50                       | ✅ v0.23.0     | ⭐⭐⭐⭐☆ (4.2)        |
| **QwenPaw**    | 14                | 31                       | ❌ None       | ⭐⭐⭐⭐☆ (4.0)        |
| **ZeroClaw**   | 30                | 50                       | ❌ None       | ⭐⭐⭐☆☆ (3.7)        |
| **IronClaw**   | 0                 | 0                        | ❌ None       | ⭐⭐☆☆☆ (2.0)        |

> **Notes:**  
> - OpenClaw leads in volume and triage intensity; IronClaw shows stagnation.  
> - Hermes Agent exhibits high post-release instability despite strong activity.  
> - QwenPaw and ZeroClaw show balanced development momentum with unmet critical bugs.

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most **operationally active and stability-focused** project in the ecosystem. Its 500-issue/PR surge signals a massive internal effort to resolve systemic issues—particularly around macOS crashes, SQLite worker exhaustion, and credential persistence—placing it ahead of peers in real-world reliability fixes. Unlike Hermes Agent’s monolithic gateway shift or ZeroClaw’s security-first RFCs, OpenClaw prioritizes **platform-specific resilience** and **user-facing workflow continuity**, making it a preferred choice for developers requiring stable, long-running agents across diverse environments. Community size appears larger than average, with sustained engagement across GitHub, Discord, and Telegram channels—evident in the high comment counts on P0 issues.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on identical technical challenges:

| Focus Area                     | Projects Involved              | Specific Needs |
|-------------------------------|-------------------------------|----------------|
| **Session State Integrity**   | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Prevent silent failures, ensure durable storage, avoid corruption during restarts |
| **Memory & Resource Management** | OpenClaw, QwenPaw, ZeroClaw | Handle large sessions without OOM; prevent SQLite worker death |
| **Plugin & Tool Lifecycle**   | OpenClaw, QwenPaw, ZeroClaw   | Fix silent install failures; improve diagnostics; secure execution context |
| **Cross-Platform Stability**  | OpenClaw, Hermes Agent, QwenPaw | Resolve macOS process lifecycle issues, Windows path handling, NTP clock drift |
| **Security & Access Control** | ZeroClaw, Hermes Agent, OpenClaw | Prevent privilege escalation, enforce ownership checks, rate-limit auth flows |

This convergence indicates a **standardization of core agent requirements**—beyond mere functionality, users now demand predictable, auditable, and recoverable behavior under load.

---

### **5. Differentiation Analysis**

| Project         | Feature Focus                              | Target User Profile                  | Core Architecture                     |
|----------------|--------------------------------------------|--------------------------------------|----------------------------------------|
| **OpenClaw**   | Platform stability, CLI/UX polish, plugin robustness | Devs, power users, enterprise teams | Modular, multi-platform, config-safe |
| **Hermes Agent** | Unified gateway, cross-client sync, bot collaboration | Teams, automation engineers, remote workers | Single multiplexed gateway (v0.23.0+) |
| **QwenPaw**    | RAG integrity, memory tagging, async plugin safety | Researchers, LLM practitioners, Chinese-speaking devs | Async-first, modular tooling, CJK-aware |
| **ZeroClaw**   | Security-hardened identity, auditability, deterministic replay | Regulated orgs, compliance-sensitive users | Rust/WASM, zero-trust sandbox, event-sourced sessions |
| **IronClaw**   | —                                          | —                                    | — (inactive)                           |

> 🔍 **Key Differentiators**:  
> - **ZeroClaw** is the only project actively pursuing **Rust-based web UIs** and **append-only event history** for legal/audit use cases.  
> - **QwenPaw** uniquely addresses **CJK text chunking failures** in embeddings—critical for Asian markets.  
> - **Hermes Agent** is the only one enforcing a **unified gateway model**, sacrificing flexibility for scalability.

---

### **6. Community Momentum & Maturity**

| Tier                   | Projects                                  | Indicators |
|-----------------------|-------------------------------------------|-----------|
| **Rapid Iteration**   | OpenClaw, Hermes Agent, QwenPaw           | High PR/issue volume, frequent releases (or imminent), active RFCs |
| **Stabilizing Phase** | ZeroClaw                                  | Focused on security audits, RFCs, and pre-release polish |
| **Declining Activity**| IronClaw                                  | No updates in 24h; no new issues or PRs |

> 📈 **Maturity Signal**: OpenClaw and Hermes Agent are in **"post-innovation stabilization"**—they’ve shipped major architecture changes (gateway unification, config safety) and are now fixing edge cases at scale. QwenPaw and ZeroClaw are in **"precision refinement"** mode, targeting specific pain points before broader adoption.

---

### **7. Trend Signals**  
Based on community feedback and project direction, key industry trends emerge:

1. **From Features to Reliability**: Users no longer tolerate silent failures. Demand for **error visibility**, **recovery guarantees**, and **predictable state** is rising—e.g., ZeroClaw’s RFC on append-only events, QwenPaw’s fix for CJK embedding drops.
   
2. **Security-First Design**: Identity and access control are no longer afterthoughts. Projects like ZeroClaw and Hermes Agent are rearchitecting auth flows around **ownership tracking**, **rate limiting**, and **revocation consistency**.

3. **Cross-Channel Consistency**: Real-time progress streaming (Discord, Slack, Feishu) and unified chat history are becoming expectations—not luxuries—driving UX parity across platforms.

4. **Ecosystem Interoperability**: The rise of plugin marketplaces (Hermes, QwenPaw) and cross-gateway collaboration (Hermes #97681) signals a move toward **inter-agent coordination**, not just single-agent autonomy.

5. **Localization & Inclusion**: CJK support in QwenPaw and China-specific features (QQ bot, GBK decoding) highlight the need for **non-Western-first design** in global AI agents.

> 💡 **Value for Developers**: The next generation of AI agents must be **resilient, observable, and secure by default**. Tools that prioritize these traits will dominate in enterprise and team settings.

---

**Final Summary**: The open-source personal AI agent landscape is maturing rapidly. While innovation remains active, the competitive edge now lies in **stability, observability, and trustworthiness**—not feature count. OpenClaw leads in operational rigor, Hermes Agent in architectural ambition, QwenPaw in domain-specific precision, and ZeroClaw in security-forward design. For developers, the message is clear: build with durability first.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-06**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 updated pull requests in the past 24 hours — reflecting robust community engagement and ongoing development momentum. The release of **v0.23.0 ("The Hearth Release")** marks a pivotal milestone, following ~10,080 commits and over 850 closed issues since v0.22.0. This surge indicates strong progress in stabilizing the unified gateway architecture, though post-merge stability challenges are emerging across session management, cross-platform compatibility, and plugin reliability. The project continues to evolve rapidly, balancing feature innovation with critical infrastructure hardening.

---

### **2. Releases**  
#### **v0.23.0: The Hearth Release**  
- **Release Date:** November 5, 2026  
- **Summary:** This release delivers the foundational shift to a **unified gateway runtime**, consolidating all local sessions (CLI, TUI, Desktop, API, cron, bots) under a single gateway process.  
- **Key Changes:**  
  - Centralized session lifecycle control via one multiplexed gateway.  
  - Improved scalability and reduced resource duplication.  
  - Introduced `GATEWAY_MULTIPLEX_PROFILES=true` as default behavior.  
- **Migration Notes:**  
  - Existing standalone profiles must be migrated using `hermes gateway migrate --multiplex`.  
  - Users on Windows/macOS may encounter session persistence or update-related issues (see #134889, #132645).  
  - Legacy `state.db` files without `INTEGER PRIMARY KEY id` may fail compression (see #148742).  
- **Breaking Changes:**  
  - All local clients now route through the shared gateway; direct `hermes serve` usage is deprecated for desktop/cloud modes.  
  - Auth flows now rely on gateway session authority (tracked in #145171).  
- **Link:** [GitHub Release v0.23.0](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

---

### **3. Project Progress**  
Today saw **6 merged/closed PRs** and **44 open PRs**, indicating active development with a focus on stability, security, and usability improvements:

- ✅ **Fixed**:  
  - `fix(web): read transcript instead of typing /copy` (#149814) → improves copy-paste reliability in dashboard.  
  - `fix(cli): report URL-safety-blocked skill downloads` (#149235) → better diagnostics for blocked skill installs.  
  - `fix(tools): bound bot-mode turn subprocess` (#137942) → prevents deadlocks in Bot Mode.  
  - `fix(prompt): restore frozen plugin frames` (#149806) → fixes prompt corruption after profile switches.  
  - `fix(desktop): fail closed for unsupported workspaces` (#149805) → enhances security in file access.  
  - `fix(gateway): record /stop-cancelled delegation` (#149802) → prevents spurious session wakeups.  

- 📌 **Advanced**:  
  - Added **PrintWatch** plugin for Anycubic Kobra printers (#149803).  
  - Added **qbo-ops** plugin for QuickBooks Online reconciliation (#149801).  
  - Added **proofops** plugin for verification of completion claims (#149625).  
  - Merged CI optimization to reduce billed minutes by combining small jobs (#149786).  
  - Switched JS workspaces from npm to pnpm (#149746), improving dependency resolution speed.

---

### **4. Community Hot Topics**  
Top 3 most discussed issues reflect deep concerns around **post-merge stability** and **cross-platform reliability**:

1. **[Issue #134889](https://github.com/NousResearch/hermes-agent/issues/134889)** – *Tracking: one gateway owns every local session* (227 comments)  
   - **Status:** Closed  
   - **Analysis:** This was the central tracking issue for the unified gateway rollout. Its closure signals that the core architectural change has been implemented, but it highlights the massive effort required to stabilize downstream systems. The high comment count reflects intense community scrutiny and real-world pain points during migration.

2. **[Issue #143547](https://github.com/NousResearch/hermes-agent/issues/143547)** – *Unified gateway: open post-merge problems on main* (50 comments)  
   - **Status:** Open  
   - **Analysis:** A living tracker for residual bugs post-v0.23.0. Highlights that while the architecture is stable, integration issues persist across platforms, authentication, and session state — particularly in remote desktop and multi-profile setups.

3. **[Issue #110374](https://github.com/NousResearch/hermes-agent/issues/110374)** – *Slack status indicator silently broken with slack-sdk >= 3.44* (13 comments, 16 👍)  
   - **Status:** Open  
   - **Analysis:** A critical UX regression affecting user visibility in Slack. Despite low comment count, high upvotes indicate widespread frustration. The root cause is a breaking change in Slack’s SDK — a signal that third-party library updates require tighter dependency pinning.

---

### **5. Bugs & Stability**  
**Critical Issues Reported (Ranked by Severity):**

| Issue | Severity | Summary | Fix PR? |
|------|----------|--------|--------|
| [#149784](https://github.com/NousResearch/hermes-agent/issues/149784) | P1 (High) | Desktop sessions become unrecoverable after 90-day pruning (`admission_conflict`) | ❌ No fix yet |
| [#149770](https://github.com/NousResearch/hermes-agent/issues/149770) | P2 | Local image uploads fail after legacy remote profile connects | ❌ No fix yet |
| [#148742](https://github.com/NousResearch/hermes-agent/issues/148742) | P2 | Legacy `state.db` with no `PRIMARY KEY` causes compression failure | ⚠ Partial workaround in PR #149813 |
| [#149682](https://github.com/NousResearch/hermes-agent/issues/149682) | P2 | Group Chats fail first turn after migration from standalone backend | ❌ No fix yet |
| [#147387](https://github.com/NousResearch/hermes-agent/issues/147387) | P2 | Gated dashboard rejects Desktop token-mode credentials | ❌ No fix yet |

> 🔴 **Note:** Multiple high-severity bugs relate to **session state consistency**, **migration path validation**, and **auth boundary violations** — signaling that the unified gateway’s long-term stability is still under strain.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes suggest future focus areas:

- **Cross-gateway collaboration**:  
  - [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) – *Let Bots collaborate across gateways* (40 comments, 4 👍)  
    → Strong demand for decentralized agent teamwork. Likely candidate for v0.24.0.

- **Enhanced automation & scheduling**:  
  - [#145314](https://github.com/NousResearch/hermes-agent/issues/145314) – *Cron leaves empty sessions* → needs cleanup logic.  
  - [#98004](https://github.com/NousResearch/hermes-agent/issues/98004) – *Per-group auto-continue budget* → safety cap extension.

- **Plugin ecosystem expansion**:  
  - [#102269](https://github.com/NousResearch/hermes-agent/issues/102269) – *Bot Marketplace* → demand for discoverability and curation of third-party bots.  
  - New plugins like `qbo-ops`, `proofops`, and `PrintWatch` show growing interest in domain-specific automation.

> 💡 **Prediction:** Next major version (v0.24.0) will likely include **cross-gateway bot collaboration**, **enhanced scheduler cleanup**, and **plugin marketplace integration**.

---

### **7. User Feedback Summary**  
Real user pain points reveal both satisfaction and growing friction:

- ✅ **Satisfied**:  
  - Users appreciate the **unified gateway** for reducing overhead and enabling seamless local/remote sync.  
  - Positive reception to new plugins like `qbo-ops` and `proofops` for real-world automation.

- ❌ **Frustrated**:  
  - **Session loss after 90-day pruning** (#149784) reported by long-term users — suggests insufficient retention policies.  
  - **Image upload failures** after connecting to remote backends (#149770) break core functionality.  
  - **Remote session resume fails** due to `not_found` errors (#139818) undermines trust in persistence.  
  - **Slack status indicator silence** (#110374) reduces visibility in team workflows.

> 🎯 **Insight:** While the technical foundation is advancing, **user-facing reliability and predictability** are lagging — especially in hybrid (local + remote) use cases.

---

### **8. Backlog Watch**  
Several high-impact issues remain unaddressed despite traction:

- **[Issue #97681](https://github.com/NousResearch/hermes-agent/issues/97681)** – *Let Bots collaborate across gateways*  
  - 40 comments, 4 👍, marked `needs-decision`  
  - **Action Needed:** Maintainers must prioritize this for next roadmap phase.

- **[Issue #148531](https://github.com/NousResearch/hermes-agent/issues/148531)** – *owner-backfill 409s with "Exclusive maintenance refused"*  
  - 4 comments, 0 👍, but affects split-topology users  
  - **Action Needed:** High-risk corner case impacting desktop boot reliability.

- **[PR #149786](https://github.com/NousResearch/hermes-agent/pull/149786)** – *Merge small CI jobs to cut billing*  
  - Open for 1 day, no comments  
  - **Action Needed:** Low-effort win with clear cost savings — should be merged quickly.

- **[PR #149813](https://github.com/NousResearch/hermes-agent/pull/149813)** – *Fix Nous plane token scope*  
  - Critical auth bug in multiplexed environments  
  - **Action Needed:** Must be reviewed and merged before next release.

---

> 🔗 **Project Health Snapshot:**  
> - **Activity Level:** ⭐⭐⭐⭐⭐ (High)  
> - **Stability:** ⭐⭐⭐☆☆ (Moderate, post-merge instability)  
> - **Community Engagement:** ⭐⭐⭐⭐⭐ (Very active)  
> - **Roadmap Clarity:** ⭐⭐⭐⭐☆ (Clear direction, but backlog pressure)  
> - **User Trust:** ⭐⭐⭐☆☆ (Improving, but critical bugs persist)

> **Recommendation:** Prioritize **bug triage**, **migration tooling**, and **session durability** in v0.24.0 to solidify user confidence post-“Hearth” release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-06**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with a strong influx of developer contributions and user-reported issues. Over the past 24 hours, 31 pull requests (PRs) were updated—19 open, 12 merged or closed—indicating sustained development momentum. Concurrently, 14 new issues were reported, including critical bugs related to embedding indexing, memory tagging, and plugin installation. The ecosystem is clearly undergoing a phase of refinement and stability tightening, particularly around core agent runtime behavior, memory management, and UI/UX consistency. While no new releases have been published, the volume of PRs suggests imminent patch or minor version updates.

---

### **2. Releases**  
❌ **No new releases** observed in the last 24 hours.  
The latest stable release remains **v2.2.2.post1**, with recent beta builds like `v2.3.0b2` and `v2.3.0b3` used by contributors and early adopters. No changelogs or migration notes are available for upcoming releases, but several PRs addressing foundational issues (e.g., session storage, memory tagging) may be included in a future v2.3.x patch series.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- [#8597](https://github.com/agentscope-ai/QwenPaw/pull/8597): Adds missing `view_audio` tool translation — improves internationalization clarity.  
- [#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842): Fixes synchronous blocking calls in async hooks — critical for plugin stability.  
- [#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788): Corrects ACL store location to shared root workspace — resolves access control breakage on task restart.  
- [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659): Implements model fallback with cooldown — enhances resilience during provider outages.  
- [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738): Filters unrecognized kwargs before OpenAI API call — prevents `TypeError` from proxy layers.  
- [#8558](https://github.com/agentscope-ai/QwenPaw/pull/8558): Simplifies legacy Matrix state migration — reduces startup failure risk.

These fixes collectively improve system robustness, security, and cross-platform compatibility.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issue:**  
- [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040): *Embedding reindex incomplete due to silent CJK chunk drop*  
  - **8 comments**, raised recurrence of prior bug (#5950), affecting data integrity in RAG pipelines.  
  - Root cause: CJK text exceeding provider token limits silently discards entire batch — high severity.  
  - **Fix PR**: Not yet submitted, but likely to be prioritized given its impact on retrieval accuracy.

🔥 **Most Active PR:**  
- [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532): *Add append-only session storage, paginated history, native Turn forks*  
  - **Under review**, size: XXXL — one of the largest feature proposals.  
  - Addresses long-standing pain points in conversation durability, recovery, and turn-level debugging.  
  - If approved, this will fundamentally reshape session persistence and enable advanced agent debugging workflows.

💡 **Emerging Theme**: Users demand more reliable, scalable, and auditable agent execution — especially around memory, history, and error handling.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (High Severity):**  
1. **[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)**: Embedding reindex fails silently for CJK chunks → data loss in RAG systems.  
   - *Status*: Open, urgent; fix PR pending.  
2. **[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)**: Memory tag index never rebuilds → returns 503 even when tags exist.  
   - *Status*: Open; blocks metadata search functionality.  
3. **[#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585)**: `recall_history` broken on Windows due to extended path (`\\?\`) interfering with SQLite URI.  
   - *Status*: Open; affects Windows users using default paths.

⚠️ **Moderate Issues:**  
- [#8596](https://github.com/agentscope-ai/QwenPaw/issues/8596): Reopening chat after `/clear` shows stale message.  
- [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595): Plugin install fails with "No package metadata was found" — blocks plugin adoption.  
- [#8590](https://github.com/agentscope-ai/QwenPaw/issues/8590): Plugin pages reset left nav to chat list — UX regression.

📌 **Fix PRs Exist For:**  
- [#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276): Fixing empty `api_key` acceptance in ReMe reranker → [PR #8291](https://github.com/agentscope-ai/QwenPaw/pull/8291) merged.  
- [#8581](https://github.com/agentscope-ai/QwenPaw/issues/8581): Tool `name` parameter conflict → [PR #8581](https://github.com/agentscope-ai/QwenPaw/pull/8581) fixed via positional-only args.

---

### **6. Feature Requests & Roadmap Signals**  
🔍 **Top User-Requested Features:**  
- **Pagination for “All Chats” list** ([#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570)): High demand due to performance degradation at scale.  
- **Plugin routing preserves navigation context** ([#8590](https://github.com/agentscope-ai/QwenPaw/issues/8590)): Indicates growing plugin ecosystem needs better integration.  
- **Draggable conversation width handles** ([#8594](https://github.com/agentscope-ai/QwenPaw/pull/8594)): Suggests desire for customizable UI layout.  

🔮 **Roadmap Predictions:**  
- **v2.3.0** will likely include:  
  - Persistent append-only session storage ([#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532))  
  - Improved memory tagging and reranking ([#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472))  
  - Better plugin lifecycle and UI stability  
- **Long-term**: OpenViking-backed memory backend ([#7252](https://github.com/agentscope-ai/QwenPaw/issues/7252)) signals interest in scalable, externalized long-term memory.

---

### **7. User Feedback Summary**  
💬 **Key Pain Points Expressed:**  
- **Data Integrity Loss**: Silent failures in embedding/reindexing (especially with CJK text) undermine trust in retrieval quality.  
- **UI/UX Inconsistencies**: Navigation resets after plugin use, buttons blend into white backgrounds, unclear states.  
- **Installation Friction**: Plugin install fails silently — discourages community extension.  
- **Performance at Scale**: Large chat lists cause lag; pagination needed.  
- **Configuration Confusion**: Model selection, API keys, and workspace settings feel tightly coupled but inconsistently enforced.

🎯 **Satisfaction Signals**:  
- Positive reception of plugin system (despite bugs).  
- Appreciation for CLI and config flexibility.  
- Recognition of architectural improvements (e.g., event loop watchdog).

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered Critical Issues (Need Maintainer Attention):**  
- [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040): *Embedding reindex incomplete* — recurring, high-impact, no assigned fix PR.  
- [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580): *Memory tag index never rebuilds* — breaks core metadata functionality.  
- [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595): *Plugin install fails with metadata error* — impedes ecosystem growth.  
- [#8591](https://github.com/agentscope-ai/QwenPaw/issues/8591): *UI feedback on Creator interface* — highlights poor visual design in key areas.

🛠️ **PRs Needing Review:**  
- [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532): Append-only session storage — major architecture shift; requires deep review.  
- [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472): Reranker model center + precision testing — significant enhancement to memory stack.  
- [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234): GBK/CP936 file decoding — crucial for Chinese users; low-risk, high-impact.

---

> ✅ **Overall Project Health**: **Strong** — active community, high-quality PRs, clear roadmap signals.  
> ⚠️ **Risks**: Unresolved critical bugs (embedding, memory tagging) may affect production reliability.  
> 📈 **Future Outlook**: Next 1–2 months likely to see v2.3.x release focused on stability, scalability, and memory/session resilience.

🔗 **Project Hub**: [GitHub - agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-06**

---

### **1. Today's Overview**  
ZeroClaw remains highly active with a robust momentum in development, evidenced by **30 new issues** and **50 updated pull requests** within the last 24 hours—indicating strong community engagement and ongoing architectural refinement. The project is focused on **security hardening**, **runtime stability**, and **user experience polish**, particularly around identity management, session durability, and agent tooling. While no new releases have been published, several high-priority fixes and enhancements are in flight, suggesting imminent progress toward the next stable release (likely v0.9.0). The activity pattern reflects a mature project balancing innovation with operational reliability.

---

### **2. Releases**  
❌ **No new releases** were published today.  
There are currently **no tagged releases** in the repository, and the latest known version remains **v0.8.7** (as of prior updates). No breaking changes or migration notes are available for immediate action.

> 📌 *Note: The `release:v0.9.0` label appears frequently across open issues and PRs, indicating that this version is likely in active development and may be near release.*

---

### **3. Project Progress**  
✅ **Merged / Closed PRs (Today):**  
None reported in the provided data. However, several high-impact PRs are in review and appear ready for merge:

- **PR #12259** (`feat(tools): scaffold async sessions_message`) — foundational work for durable messaging.
- **PR #12258** (`feat(tools): add sync sessions_prompt tool`) — enables inter-agent prompting.
- **PR #12254** (`fix(runtime): don't ask for approval of a tool call that can't run`) — critical UX/security fix in supervised mode.

These represent significant advances in **agent communication**, **tool safety**, and **session resilience**.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues & PRs (by comment count):**

| Issue/PR | Title | Comments | Link |
|--------|------|---------|------|
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history, deterministic state replay | 16 | [Issue #10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | Evaluate Rust/WASM web UI prototype before React/Vite migration | 13 | [Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) |
| [#11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622) | feat(zerocode): show message times in the transcript | 0+ | [PR #11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622) |

🔍 **Analysis of Underlying Needs:**  
- **Deterministic state replay (#10526)** signals demand for auditability, debugging, and reproducible agent behavior—critical for enterprise use cases.
- **Rust/WASM UI migration (#8132)** reflects a strategic pivot toward **zero-trust runtime environments**, reduced JavaScript dependencies, and improved security posture.
- **Timestamp visibility (#11622)** highlights user frustration with opaque execution timelines, especially during complex agent interactions.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs (S0–S1 Severity):**  
| Issue | Summary | Severity | Status | Fix PR? |
|------|--------|----------|--------|--------|
| [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) | Session-data tools bypass principal ownership checks | S0 (Security Risk) | Open | ❌ |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) | SOP execution accepts wildcard selectors without `tools:execute` | S0 (Data Loss) | Closed | ✅ (Landed in #10265) |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | Queued session ops retain revoked admin ownership | S1 (High Risk) | Open | ❌ |
| [#12194](https://github.com/zeroclaw-labs/zeroclaw/issues/12194) | Unknown model silently falls back to 32k context | S1 (Cost/Behavior) | Open | ❌ |
| [#12047](https://github.com/zeroclaw-labs/zeroclaw/issues/12047) | OIDC bearer verification has no rate limiter | S1 (Security Risk) | Open | ❌ |

📌 **Stability Concerns:**  
- **Stack overflow in debug gateway WebSocket turns (#9572)** — intermittent crash risk under load.
- **Mock HTTP client sharing across test runs (#12236)** — flaky CI/CD pipelines due to shared state.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Features (Likely in v0.9.0+):**

| Feature | Description | Priority | Source |
|-------|------------|----------|--------|
| **Web document upload (#12181)** | Attach files via dashboard; store as `FileId` | P2 | User request |
| **Scoped dashboard chat (#11984)** | Non-admin users can chat with granted agents | P1 | Core UX |
| **Stream model reasoning to Slack/Telegram (#11744)** | Real-time draft streaming for external channels | P2 | Channel integration |
| **Firecrawl web search provider (#11680)** | Add new AI-powered web search backend | P2 | Third-party integration |
| **OpenRouter credit balance display (#11845, #11846)** | Show real-time API cost tracking | P2 | Financial transparency |

💡 **Roadmap Signal:** The consistent focus on **secure, auditable, and observable agent workflows** suggests a shift toward **production-grade deployment readiness**, especially in regulated or team-based environments.

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points Identified:**

- **“Silent failures”**: Users report **no warnings when SOPs fail to load** (#9779), leading to unexplained absence of functionality.
- **Confusing tool access**: Limited users can **run high-risk tools like `cron`, `peer messaging`**, even with wildcard access (#12046).
- **Opaque session behavior**: Lack of timestamps and event history makes debugging complex agent chains difficult (#11622).
- **Inconsistent file access**: `glob_search` drops matches outside workspace despite valid permissions (#12225, #12043).
- **Poor error feedback**: Daemon refusal messages are relayed verbatim to users, causing confusion (#12247).

✅ **Positive Feedback Indicators:**  
- High engagement with **RFCs and design proposals** (e.g., #10526), showing strong user investment in long-term architecture.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered High-Impact Items Requiring Attention:**

| Issue | Summary | Age | Status | Risk |
|------|--------|-----|--------|------|
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history | 2 months | Accepted | 🔥 High |
| [#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) | Make peer-agent turns durable and attributable | 3.5 months | In-progress | 🔥 High |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | Queued session operations retain revoked admin ownership | 1.5 months | Accepted | 🔥 High |
| [#12047](https://github.com/zeroclaw-labs/zeroclaw/issues/12047) | OIDC bearer verification lacks rate limiting | 1 month | Open | 🔥 High |
| [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) | Dashboard chat for non-admin accounts | 1.5 months | Open | ⚠️ Medium |

📌 **Urgent Need:** These issues collectively point to **identity/access control gaps**, **lack of observability**, and **incomplete lifecycle management**—all critical for production adoption. Maintainer attention is strongly advised.

---

**Final Assessment:** ZeroClaw is in a **high-growth, high-stakes phase**—balancing rapid feature delivery with deep security and stability improvements. The project shows strong health indicators but must prioritize **access control integrity**, **auditability**, and **user-facing clarity** to scale beyond early adopters.  

👉 **Next Steps:** Prioritize merging #12254, #12258, and #12259; address S0/S1 bugs in `security/sandbox` and `rpc` layers; and begin drafting v0.9.0 release notes based on accepted RFCs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*