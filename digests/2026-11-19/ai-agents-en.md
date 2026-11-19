# OpenClaw Ecosystem Digest 2026-11-19

> Issues: 486 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-19 03:48 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-19**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 486 issues and 500 pull requests updated in the past 24 hours — a clear sign of robust community engagement and ongoing development momentum. The release of **v2026.10.33** as an extended-stable (LTS-equivalent) version signals a focus on reliability and long-term stability for production users. Despite this, critical bugs related to session state integrity, agent persistence, and platform-specific edge cases (especially macOS and Windows) continue to surface, indicating that deep system-level refinements are still underway.

---

### **2. Releases**  
✅ **New Release: `v2026.10.33` (gateway-only, extended-stable)**  
- Released as a stable, LTS-equivalent update from late October 2026.
- Includes **critical security patches**, **performance improvements**, and **reliability fixes**.
- Adds **new model support** and addresses several high-severity stability issues reported in recent months.
- **No breaking changes** announced; migration is straightforward for existing installations.
- [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.10.33)

> 💡 *Note: This release serves as the current recommended baseline for production environments.*

---

### **3. Project Progress**  
🎉 **Merged/Closed PRs (Top 10 by impact):**  
- [#201566](https://github.com/openclaw/openclaw/pull/201566): Perf optimization for transcript search — defers snippet generation until needed, reducing queue contention.
- [#201590](https://github.com/openclaw/openclaw/pull/201590): Fixed test drift in restart handoff logic (Linux-only).
- [#201591](https://github.com/openclaw/openclaw/pull/201591): Reduced CPU overhead during session list refreshes via metadata deduplication.
- [#201579](https://github.com/openclaw/openclaw/pull/201579): Improved `update` resilience when disk space is tight — now continues even if pre-migration image doesn’t fit.
- [#201548](https://github.com/openclaw/openclaw/pull/201548): CI fix to properly register published plugin drivers.
- [#196848](https://github.com/openclaw/openclaw/pull/196848): Fixed Discord DM sender bypass after removal from allowlist.
- [#196092](https://github.com/openclaw/openclaw/pull/196092): Ensures all Claude CLI replies are preserved in chat history (not just final one).
- [#201594](https://github.com/openclaw/openclaw/pull/201594): Fixes database port migration race condition during memory rebuild.
- [#199379](https://github.com/openclaw/openclaw/pull/199379): Resolves voice consult failures when using locked native harness or Claude CLI.
- [#198113](https://github.com/openclaw/openclaw/pull/198113): Clarifies which STT provider Talk uses in Settings → Talk.

> ✅ These merges reflect a strong focus on **stability**, **resource efficiency**, and **user experience polish** at the edge.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues (by comment count & severity):**  

| Issue | Comments | Severity | Summary |
|------|----------|----------|--------|
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | 37 | P2 (UX friction) | `gateway stop` fails on macOS due to ancestry inspection failure |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 28 | P1 (crash-loop, message loss) | Synchronous agent persistence blocks Gateway event loop at scale |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 25 | P2 (data loss) | Post-install Doctor leaves 11.3 update partially finalized |
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | 20 | P2 (UX friction) | Assistant renders twice in CLI backends (live + aggregate) |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 18 | P0 (security/UX blocker) | `MEMORY.md`/`USER.md` silently excluded forever after provenance drop |

🔍 **Underlying Needs:**  
- **Cross-platform reliability** (macOS/Windows) is a recurring pain point.
- **Session state consistency** under load and during upgrades is fragile.
- **User trust in automation** is eroding due to silent data loss and partial updates.
- **Transparency in system behavior** (e.g., why a file was dropped) is missing.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (Rank by Impact):**  

1. **[#153426](https://github.com/openclaw/openclaw/issues/153426)** – *P0* – `MEMORY.md` permanently excluded after provenance degradation. No diagnostics. **No fix PR yet.**
2. **[#119720](https://github.com/openclaw/openclaw/issues/119720)** – *P1* – Synchronous persistence blocks event loop → crash loops. **Partial fix landed, but not resolved.**
3. **[#196199](https://github.com/openclaw/openclaw/issues/196199)** – *P1* – Native Codex helper fails to resume parent, locking users out. **Regression since 2026.10.10.**
4. **[#194451](https://github.com/openclaw/openclaw/issues/194451)** – *P1* – `/think` kills running turns with SQLite conflict. **Only covered `/status` before.**
5. **[#198218](https://github.com/openclaw/openclaw/issues/198218)** – *P1* – Doctor/update livelocks while Gateway stopped. **Reproduced on 2026.10.6 and 2026.11.3.**

⚠️ **Regressions & Data Loss Risks:**  
- [#198373](https://github.com/openclaw/openclaw/issues/198373): Prompt cache collapses to ~1% with OpenAI-compatible routes.
- [#199155](https://github.com/openclaw/openclaw/issues/199155): Transcript row invisible to gateway after CLI write → UNIQUE constraint violation.
- [#197083](https://github.com/openclaw/openclaw/issues/197083): Update left in inconsistent state after WAL verification failure.

> 🔧 **Fix PRs exist for some**:  
> - [#196092](https://github.com/openclaw/openclaw/pull/196092) addresses double-rendering in CLI backend.  
> - [#199379](https://github.com/openclaw/openclaw/pull/199379) fixes voice consults in locked contexts.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **High-Value User-Requested Features:**  

| Request | Link | Signal Type |
|-------|------|------------|
| Configurable per-entry chunking for custom memory files | [#179954](https://github.com/openclaw/openclaw/issues/179954) | ✅ Likely next release |
| Manual team-sidebar agent ordering (drag/drop) | [#155039](https://github.com/openclaw/openclaw/issues/155039) | 🛠️ High UX demand |
| Deliver Matrix final reply as new message (not edit) | [#170261](https://github.com/openclaw/openclaw/issues/170261) | 📱 Platform-specific UX need |
| Expose auth profile in `/usage full` footer | [#169428](https://github.com/openclaw/openclaw/issues/169428) | ✅ Feedback-driven |
| Plugin hooks: append content after tool results | [#164355](https://github.com/openclaw/openclaw/issues/164355) | ⚙️ Extensibility gap |

> 📈 **Prediction:** The next major release (`v2026.11.x`) will likely include **memory chunking config**, **team sidebar reordering**, and **Matrix delivery improvements** based on consistent user demand and developer traction.

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points:**  
- **macOS users report persistent `stop` failures** (#191944), leading to manual process killing.
- **Windows users face exponential npm tree growth** during plugin staging (#162585), causing Gateway unhealthiness.
- **Telegram groups suffer from silent command drops** despite `requireMention` enabled (#164065).
- **Safari users lose chat composer entirely** (#195192), limiting browser access.
- **Long sessions (>228 MB) cause multi-second reads** and compaction failures (#181084).

✅ **Positive Signals:**  
- Many users confirm fixes after updates (e.g., #192667 resolved post-upgrade).
- Developers appreciate performance gains from merged PRs like #201566 and #201591.

> 🎯 **Overall Sentiment:** Mixed. High engagement indicates strong user investment, but frustration with **silent failures**, **platform inconsistencies**, and **automation fragility** is growing.

---

### **8. Backlog Watch**  
👀 **Critical Long-Unanswered Issues Requiring Maintainer Attention:**  

| Issue | Status | Why It Matters |
|------|--------|----------------|
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Open, P0, 18 comments | Silent, permanent exclusion of curated memory roots → irreversible UX/data loss. **No fix PR.** |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Open, P1, 28 comments | Blocks scaling — synchronous operations stall entire event loop. **Partially fixed, not resolved.** |
| [#155868](https://github.com/openclaw/openclaw/issues/155868) | Open, P2, 10 comments | Tool roster mismatch between human and inter-agent messages → prompt-cache misses. **No PR.** |
| [#170562](https://github.com/openclaw/openclaw/issues/170562) | Open, P2, 12 comments | No CLI tool to retire stranded `subagent_runs`. Requires DB surgery. **Operator recovery gap.** |
| [#167854](https://github.com/openclaw/openclaw/issues/167854) | Open, P2, 9 comments | Home drops session notices after 20 pending sessions → hidden activity. **UX blind spot.** |

> ⏳ **Urgent Need:** Maintainers must prioritize **state integrity**, **session consistency**, and **operator recovery tools** to prevent erosion of trust in the system.

---  
📌 **Next Steps for Maintainers:**  
- Prioritize **P0/P1 bugs** affecting core workflows (especially macOS/Windows).  
- Begin triage on **long-standing feature requests** with high community engagement.  
- Consider releasing a **patch candidate** for `v2026.10.33` with fixes for `#153426`, `#119720`, and `#198218`.

✅ **Project Health:** High activity, strong momentum, but stability and trust remain fragile. Focus on **resilience over features** in the short term.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-11-19**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a phase of **deep architectural refinement**, moving beyond rapid feature iteration toward stability, security, and system resilience. Projects are converging on core challenges: session state integrity, cross-platform reliability, and secure data handling—particularly around memory persistence, credential exposure, and silent failures. While innovation in modularity (e.g., plugin-driven architectures) and multi-modal integration accelerates, user trust remains fragile due to recurring regressions and poor error visibility. The landscape reflects a maturing ecosystem where **operational robustness now outweighs novelty**, signaling readiness for enterprise-grade adoption.

---

### **2. Activity Comparison**

| Project       | Issues (Last 24h) | PRs (Last 24h) | Release Status         | Health Score (1–10) |
|---------------|-------------------|------------------|------------------------|---------------------|
| **OpenClaw**  | 486               | 500              | v2026.10.33 (LTS)      | 7.8                 |
| **Hermes Agent** | 50              | 50               | Canary v0.23.2+canary   | 6.5                 |
| **QwenPaw**   | 32                | 32               | v2.3.0.post1           | 6.2                 |
| **ZeroClaw**  | 50                | 50               | No new release (v0.9.0) | 6.0                 |
| **IronClaw**  | 0                 | 0                | No activity            | 3.0                 |

> *Health Score*: Based on activity level, bug severity, fix velocity, community engagement, and release stability (higher = more mature/healthy).

---

### **3. OpenClaw's Position**  
**OpenClaw stands as the most mature and production-ready project** in the ecosystem. Its **extended-stable `v2026.10.33` release** signals a strategic pivot toward long-term reliability—unmatched by peers. Unlike others in canary or post-release phases, OpenClaw maintains a high volume of **high-impact PRs focused on performance, resource efficiency, and edge-case stability** (e.g., session list refreshes, disk space resilience). Its community size and contributor velocity are significantly larger than other projects, with over 400 active issues and 500 PRs daily—indicative of a large, engaged user base. This scale enables faster feedback loops and deeper triage, giving OpenClaw a **distinct advantage in resilience engineering**.

---

### **4. Shared Technical Focus Areas**  
Across all active projects, the following technical needs are emerging as systemic priorities:

| Need                                  | Projects Involved                  | Specific Examples |
|---------------------------------------|------------------------------------|-------------------|
| **Session State Integrity**           | OpenClaw, Hermes, QwenPaw, ZeroClaw | `#119720`, `#137287`, `#8806`, `#12401` |
| **Security & Credential Hygiene**     | Hermes, ZeroClaw, QwenPaw          | `#62336`, `#12146`, `#8756` |
| **Cross-Platform Reliability**        | OpenClaw, Hermes, QwenPaw          | macOS `stop` failure, Windows npm growth, CJK input |
| **Error Visibility & Diagnostics**    | All projects                       | Silent data loss (`#153426`), misleading status (`#9896`) |
| **Modularization & Plugin Architecture** | QwenPaw, OpenClaw (emerging), ZeroClaw | `#8426`, `#12450–#12457` |

> These patterns suggest a **shared foundational challenge**: building systems that are both powerful and predictable under load, especially across heterogeneous environments.

---

### **5. Differentiation Analysis**

| Dimension               | OpenClaw                            | Hermes Agent                         | QwenPaw                             | ZeroClaw                              |
|-------------------------|-------------------------------------|--------------------------------------|-------------------------------------|----------------------------------------|
| **Feature Focus**       | Stability, LTS, production use      | Gateway migration, multimodal UX     | Plugin-first modularity             | Security hardening, config rigor      |
| **Target Users**        | Enterprise, power users, devops     | Early adopters, researchers          | Developers, custom agent builders   | Infrastructure teams, compliance-heavy |
| **Architecture**        | Monolithic + plugin extensibility   | Gateway-to-serve migration path      | Fully modularized core              | Canonical model registry, V5 config   |
| **Release Model**       | Extended-stable (LTS-equivalent)    | Canary + frequent experimental builds | Post-release patching               | No recent release; focus on internal refactoring |

> **Key Differentiator**: OpenClaw prioritizes **trust through consistency**; Hermes emphasizes **evolutionary flexibility**; QwenPaw bets on **modular extensibility**; ZeroClaw enforces **rigorous configuration and security boundaries**.

---

### **6. Community Momentum & Maturity**  

| Tier                     | Projects                          | Characteristics |
|--------------------------|-----------------------------------|-----------------|
| **High-Momentum / Rapid Iteration** | OpenClaw, Hermes Agent, ZeroClaw | >50 issues/PRs/day; active canary testing; deep architectural changes |
| **Stabilizing / Feature-Driven**    | QwenPaw                           | Modularization in full swing; focused on security and UX polish |
| **Inactive / Dormant**              | IronClaw                            | No updates in 24h; likely abandoned or paused |

> **Trend**: The ecosystem is bifurcating—**core platforms (OpenClaw, Hermes, ZeroClaw)** are pushing toward production readiness, while **newer entrants (QwenPaw)** are redefining architecture via modularity. IronClaw’s inactivity suggests a broader trend of consolidation around a few dominant players.

---

### **7. Trend Signals**  
Based on community feedback and development patterns, the following industry trends are emerging:

- ✅ **Trust > Novelty**: Users prioritize **predictability and transparency**—silent failures and unexplained behavior are major trust eroders.
- ✅ **Security-by-Design is Non-Negotiable**: Credential leaks, insecure env snapshots, and token exposure are now P1/P0 issues across multiple projects.
- ✅ **Modularity is the New Standard**: QwenPaw’s plugin extraction and ZeroClaw’s V5 registry show that **decoupling functionality** is becoming essential for scalability and governance.
- ✅ **Operator Recovery Tools Are Critical**: Demand for CLI tools to clean up stranded processes, debug sessions, and audit logs indicates a growing need for **operator tooling in complex agent workflows**.
- ✅ **UX at Scale Matters**: Long sessions (>228MB), narrow screen rendering, and mobile compatibility are no longer edge cases—they define usability.

> 💡 **Value for Developers**: Build with **resilience, diagnostics, and configurability first**. The future belongs to agents that are not just smart, but **reliable, auditable, and maintainable**.

---

**Conclusion**: The personal AI agent ecosystem is transitioning from experimentation to operational maturity. **OpenClaw leads in stability and production readiness**, while **Hermes, QwenPaw, and ZeroClaw are pioneering new architectural paradigms**. For developers and decision-makers, the key takeaway is clear: **invest in systems that prioritize integrity, security, and observability—not just intelligence**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-19**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust developer engagement and rapid iteration. The release of `v0.23.2+canary.20261118T064620Z` signals continued progress toward stability and feature expansion, particularly around session management, gateway migration, and cross-platform compatibility. Community-driven development is evident in both high-volume bug reporting and targeted feature proposals. Despite strong momentum, several critical stability and security concerns persist, especially around credential exposure and session integrity.

---

### **2. Releases**  
- **New Release**: [`v0.23.2+canary.20261118T064620Z`](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261118T064620Z)  
  - *Release Date*: November 18, 2026  
  - **Key Highlights**:  
    - Canary build focused on pre-release validation for upcoming stable v0.23.2.  
    - Includes fixes related to terminal environment snapshot handling (see #62336), session persistence (see #147839), and desktop session switching (see #128770).  
    - Introduces early support for new cron scheduling syntax (#157655) and enhanced request dump retention controls (#157656).  
  - **Migration Notes**: This is a canary release; users should not deploy to production without testing. Expect breaking changes in future stable releases—especially those tied to gateway migration and plugin resolution.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today)**:  
- ✅ [#157649](https://github.com/nousresearch/hermes-agent/pull/157649): Fixes sidebar search to preserve archived session state in Desktop UI.  
- ✅ [#157551](https://github.com/nousresearch/hermes-agent/pull/157551): Restores Docker manifest-list builds to Blacksmith CI pipeline, improving image build reliability.  
- ✅ [#157319](https://github.com/nousresearch/hermes-agent/pull/157319): Enables dynamic model ID sets via catalog manifests—critical for future model compatibility.  

**Features Advanced**:  
- **Gateway Migration Path**: Multiple stacked PRs (#157430, #157484, #157393, #157387) are progressing through the serve-to-gateway migration roadmap, enabling backward-compatible backend moves.  
- **Cron Scheduling Expansion**: PR [#157655](https://github.com/nousresearch/hermes-agent/pull/157655) adds natural language cron parsing (e.g., "last friday of the month"), significantly improving usability for recurring tasks.  
- **File Reading Improvements**: PR [#157646](https://github.com/nousresearch/hermes-agent/pull/157646) introduces offset-based file reading beyond truncated lines—a major UX win for large/minified files.

---

### **4. Community Hot Topics**  
Top 5 most commented issues reflect core pain points in system reliability and security:

| Issue | Comments | Link | Key Concern |
|------|--------|------|-----------|
| [#62336](https://github.com/nousresearch/hermes-agent/issues/62336) | 20 | [Security] Terminal env snapshots leak credentials | Risky data persistence of sensitive env vars |
| [#137287](https://github.com/nousresearch/hermes-agent/issues/137287) | 17 | Desktop transcript corruption: duplicates, drops | Session state instability affecting user trust |
| [#147839](https://github.com/nousresearch/hermes-agent/issues/147839) | 13 | 20s timeout poisons turn → "No reply" | Critical regression impacting agent responsiveness |
| [#117894](https://github.com/nousresearch/hermes-agent/issues/117894) | 8 | Background memory queue unbounded & invisible | Hidden performance bottleneck under load |
| [#106487](https://github.com/nousresearch/hermes-agent/issues/106487) | 8 | CJK IME input garbled in web dashboard | Localization barrier for non-Latin users |

> 🔍 **Analysis**: These issues point to systemic challenges in **session state consistency**, **security hygiene**, and **internationalization support**. Users demand predictable, secure, and inclusive interactions—especially as Hermes evolves into a multi-modal, persistent assistant.

---

### **5. Bugs & Stability**  
Ranked by severity and impact:

1. **[P1] Session Persistence Failure** – [#147839](https://github.com/nousresearch/hermes-agent/issues/147839)  
   - A single 20-second worker receipt timeout causes entire turns to fail with “No reply.”  
   - Reproduced across multiple installs; no fix PR yet. High risk for enterprise users relying on reliable agent output.

2. **[P1] Credential Exposure** – [#62336](https://github.com/nousresearch/hermes-agent/issues/62336)  
   - Terminal snapshots capture all env vars—including Bitwarden secrets—on disk.  
   - Security-sensitive; requires immediate patching. Fix PR pending (no direct PR linked).

3. **[P2] Transcript Corruption** – [#137287](https://github.com/nousresearch/hermes-agent/issues/137287)  
   - Messages appear duplicated or missing mid-session. Affects desktop and CLI.  
   - No known fix; impacts user confidence in conversation fidelity.

4. **[P2] Gateway Deadlock on Windows** – [#41219](https://github.com/nousresearch/hermes-agent/issues/41219)  
   - Async event loop freezes after first crash. Persistent resource consumption.  
   - Root cause likely upstream (asyncio + Windows event handling). Needs investigation.

5. **[P2] Image Rendering Failures** – [#157632](https://github.com/nousresearch/hermes-agent/issues/157632), [#157605](https://github.com/nousresearch/hermes-agent/issues/157605)  
   - Inline images render as Python tuples or fail in Zellij/kitty environments.  
   - Impacts visual feedback in CLI and TUI workflows.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority user-driven features suggest imminent focus areas:

- **Antigravity OAuth Provider** – [#83244](https://github.com/nousresearch/hermes-agent/issues/83244)  
  - Request to add Google Antigravity (formerly Project Genie) as a first-class provider.  
  - Signals growing interest in Claude/Gemini hybrid models and broader LLM ecosystem access.

- **SSH Tunnel Output for Headless Deployments** – [#147984](https://github.com/nousresearch/hermes-agent/issues/147984)  
  - Users want clear instructions to connect headless webapps via SSH.  
  - Indicates rising adoption in remote server environments.

- **Opt-in Signed Thinking Blocks for Proxies** – [#120723](https://github.com/nousresearch/hermes-agent/issues/120723)  
  - Allows trusted Anthropic-compatible proxies to preserve thinking logs.  
  - Points to increasing use of third-party inference backends.

> 📌 **Prediction**: The next stable release (v0.23.2) will likely include:  
> - Improved session resilience (fix for #147839)  
> - Enhanced file reading (from #157646)  
> - Cron scheduling (from #157655)  
> - Initial steps in the gateway migration stack

---

### **7. User Feedback Summary**  
Real-world pain points from issue reports reveal key user expectations:

- **Trust & Reliability**: Users report message duplication, silent failures (“No reply”), and lost context—eroding confidence in long sessions.
- **Security Sensitivity**: Concerns over credential leakage (via env snapshots) indicate users handle sensitive data and expect strict data hygiene.
- **Cross-Platform Usability**: macOS Retina scaling, Windows WSL prompts, and CJK input issues show that non-standard environments are common.
- **Developer Experience**: Long-running processes surviving CLI exit (#40343), lack of logging control (#95803), and broken plugin search (#157603) frustrate advanced users.
- **Localization Gaps**: CJK input issues highlight a need for deeper internationalization testing.

> 💬 *"I’m using Hermes to manage my dev workflow—but if messages vanish or get duplicated, I can’t trust it."* — albayazid, Issue #137287

---

### **8. Backlog Watch**  
Critical issues with no assigned fix PRs or maintainer response:

| Issue | Status | Priority | Link | Notes |
|------|--------|----------|------|-------|
| [#62336](https://github.com/nousresearch/hermes-agent/issues/62336) | Open | P3 (Security) | [Link](https://github.com/nousresearch/hermes-agent/issues/62336) | Credential leakage via env snapshots—urgent fix needed |
| [#147839](https://github.com/nousresearch/hermes-agent/issues/147839) | Open | P1 | [Link](https://github.com/nousresearch/hermes-agent/issues/147839) | Turn failure due to 20s timeout—impacts core functionality |
| [#157615](https://github.com/nousresearch/hermes-agent/issues/157615) | Open | P3 | [Link](https://github.com/nousresearch/hermes-agent/issues/157615) | Secret redaction fails on label-prefixed field dumps |
| [#147405](https://github.com/nousresearch/hermes-agent/issues/147405) | Open | P2 | [Link](https://github.com/nousresearch/hermes-agent/issues/147405) | cua-driver 0.21.0 fails on Electron/Chrome windows on macOS |
| [#157603](https://github.com/nousresearch/hermes-agent/issues/157603) | Open | P2 | [Link](https://github.com/nousresearch/hermes-agent/issues/157603) | Desktop Plugin search can't find installed plugins by ID |

> ⚠️ **Maintenance Alert**: Several P2/P3 bugs have been open for weeks with minimal engagement. Prioritization of these could prevent regressions in upcoming stable releases.

---

**Final Assessment**:  
Hermes Agent is in a **high-velocity development phase** with strong community participation. While innovation is accelerating—especially in gateway migration and multimodal support—core stability and security remain fragile. Immediate attention to credential exposure, session corruption, and timeout-related failures is critical. With proper triage, this project is poised to become a leading open-source AI agent platform by Q1 2027.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-19**

---

### **1. Today's Overview**  
QwenPaw exhibits strong development momentum with 32 PRs and 18 issues updated in the past 24 hours, indicating active contributor engagement and a responsive community. The release of **v2.3.0.post1** marks a significant step toward modularization, with core features being extracted into plugins. Stability concerns are emerging around memory management, UI rendering on narrow screens, and channel availability post-update. While many fixes are landing, several high-severity bugs related to loop detection, context handling, and security policy enforcement remain open—highlighting ongoing challenges in balancing extensibility with reliability.

---

### **2. Releases**  
**🆕 v2.3.0.post1** (Released: 2026-11-18)  
[Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0.post1)

#### ✅ What’s Changed:
- **feat(agent)**: Third-party agent logic extracted into plugins ([#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)) — foundational step for plugin-based architecture.
- **feat(console)**: Quote response selections in follow-up drafts improves clarity and usability ([#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609)).
- **fix(console)**: Safari rendering restored after compatibility breakage ([#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609)).

#### ⚠️ Migration Notes:
- Users upgrading from `v2.3.0` may encounter **narrow screen message truncation** (#8811), likely due to CSS changes in the new console.
- **Channels (DingTalk, Feishu)** are now disabled by default post-update until manually re-enabled — a breaking change not clearly documented ([#8812](https://github.com/agentscope-ai/QwenPaw/issues/8812)).

---

### **3. Project Progress**  
#### 🔧 Merged & Closed PRs (Last 24h):
- [#8701](https://github.com/agentscope-ai/QwenPaw/pull/8701): Fixed `DoomLoopGate` recording logic to capture all tool calls per reply — critical for loop detection.
- [#8756](https://github.com/agentscope-ai/QwenPaw/pull/8756): Scoped WeChat credentials per agent workspace — resolves multi-agent conflict.
- [#8809](https://github.com/agentscope-ai/QwenPaw/pull/8809): Version bumped to `2.3.1b1` — prepares next beta cycle.
- [#7757](https://github.com/agentscope-ai/QwenPaw/pull/7757): Enforced destructive command and system credential guards — strengthens governance.
- [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028): Added flagging for inline Office COM automation — mitigates risk in auto-mode.

These PRs signal a focus on **security hardening**, **loop prevention**, and **multi-agent isolation**, aligning with the project’s long-term goal of safe, scalable AI agents.

---

### **4. Community Hot Topics**  
#### 🔥 Most Active Issues (by comments/reactions):
1. **#8071 [Feature]**: Plugin-facing theme extension point (semantic token override layer)  
   - *21 comments*, no likes — highlights growing demand for **plugin-level theming control** as modularity increases.  
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/8071)

2. **#8811 [Bug]**: Narrow screen message cut-off + overflow issues with tables/code blocks  
   - *3 comments*, reproducible across desktop and mobile — urgent UX issue affecting accessibility.  
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/8811)

3. **#8812 [Discussion]**: Startup diagnostic floods logs with warnings; channels disabled post-update  
   - *2 comments*, indicates user frustration with **noisy logging and hidden breaking changes** in v2.3.0.post1.  
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/8812)

#### 📌 Analysis:
Users are increasingly concerned about **customization depth**, **UI robustness**, and **transparency in updates**. As QwenPaw becomes more modular, users expect better configurability and fewer silent regressions.

---

### **5. Bugs & Stability**  
#### ⚠️ High-Priority Bugs Reported:
| Issue | Severity | Description | Fix PR? |
|------|----------|-------------|--------|
| [#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814) | Critical | WeChat channel silently dies at 128 active response routes (`RESPONSE_SCOPE_LIMIT`) | ❌ No fix yet |
| [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) | High | Text cutoff on narrow screens; no horizontal scroll for wide content | ❌ No fix yet |
| [#8475](https://github.com/agentscope-ai/QwenPaw/issues/8475) | High | QQ channel `enabled` flag reset to `false` on restart with no warning | ❌ No fix yet |
| [#8802](https://github.com/agentscope-ai/QwenPaw/issues/8802) | Medium | Context length exceeded during consecutive MCP tool calls | ❌ No fix yet |

> 💡 **Note**: Several bugs involve **state corruption**, **silent failures**, or **incomplete error reporting** — common in complex agent workflows. These undermine trust in stability.

---

### **6. Feature Requests & Roadmap Signals**  
#### 🎯 Emerging Themes:
- **Plugin Ecosystem Expansion**:  
  - #8071 (plugin theme override) and #8469 (MCP → plugin) suggest a clear direction: **decentralize functionality** beyond core.
  - #8426 and #8499 confirm **modularization is underway** — local model and Whisper services becoming plugins.

- **Performance & Scalability**:  
  - #8805: Base image lacks `MALLOC_ARENA_MAX` cap → 1.78 GB RSS in 112 threads — signals need for **resource-aware Docker base images**.
  - #8804: Deferred SDK imports improve startup time — likely to be expanded to other providers.

- **User Experience Enhancements**:  
  - #8808: “QwenPaw Is Getting Lighter” — reflects intentional shift toward **lean core + plugin extensibility**.

> 📈 **Prediction**: Next version (`v2.4.0`) will likely feature **plugin-first architecture**, **enhanced security gates**, and **better diagnostics**.

---

### **7. User Feedback Summary**  
#### ✅ Positive Signals:
- Users appreciate **rapid iteration** and **feature extraction** (e.g., plugin conversion).
- Many report successful use cases with **MCP tools**, **local models**, and **multi-channel agents**.

#### ❌ Pain Points:
- **Silent failures**: QQ channel disable, WeChat death, context errors — users lack visibility.
- **Poor upgrade experience**: v2.3.0.post1 introduced regressions without clear changelog.
- **No feedback on loops**: Agent continues executing despite repeated tool calls — feels like "ghost behavior" (#8806).
- **Inadequate error messaging**: `MODEL_QUOTA_EXCEEDED` prompts users to sign up but offers no help on quota management.

> 🗣️ *"It just keeps going... I don’t know why."* — User comment on #8806

---

### **8. Backlog Watch**  
#### ⏳ Long-Unanswered Critical Items:
1. **#8071 [Feature]**: Plugin-facing theme extension point — 21 comments, 18 days old.  
   - Needed for plugin developers to match host themes.  
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/8071)

2. **#8712 [Bug]**: Doom-loop gate doesn’t detect repeated tool calls — 1 comment, 6 days old.  
   - Directly undermines safety in long-running agents.  
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/8712)

3. **#8814 [Bug]**: Response scope limit causes silent channel failure — 1 comment, 1 day old.  
   - High impact: breaks real-world deployment.  
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/8814)

4. **#8469 [PR]**: Extract MCP into plugin — 20+ days since creation, no review.  
   - Key enabler for future extensibility.  
   - [Link](https://github.com/agentscope-ai/QwenPaw/pull/8469)

> 🔔 **Call to Maintainers**: Prioritize these items — they represent **core technical debt** and **user trust erosion** risks.

---

**📌 Final Assessment**:  
QwenPaw is undergoing a pivotal transition toward a **plugin-driven, lightweight agent framework**. While progress is strong, the current wave of stability and UX issues suggests that **release quality control and user communication must improve**. With proper attention to backlog items and clearer upgrade paths, QwenPaw is poised to become a leading open-source AI agent platform by Q2 2027.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-19**

---

### **1. Today's Overview**  
ZeroClaw (github.com/zeroclaw-labs/zeroclaw) exhibits strong development momentum with **50 issues and 50 pull requests updated in the last 24 hours**, indicating active contributor engagement across core components. The project is focused on stabilizing critical runtime behavior, improving security hardening, and advancing configuration system modernization. High-priority bugs affecting agent workflows, provider reliability, and memory/session state are actively being addressed, while significant architectural refactoring continues via a series of coordinated PRs around the canonical model registry and provider abstractions.

---

### **2. Releases**  
*No new releases published.*  
The latest stable version remains `v0.9.0`, with ongoing work targeting `v0.9.1` (see Issue #12401). No breaking changes or migration notes are currently documented.

---

### **3. Project Progress**  
Today’s merged/closed activity includes:  
- ✅ **PR #12530**: Fixes misleading memory status reporting (`Memory: none`) when SQLite backend is active — directly addressing user confusion from Issue #9896.  
- ✅ **PR #12388**: Fixes Discord custom emoji validation and URL encoding to prevent malformed reaction links.  
- ✅ **PR #12382**: Ensures first post is delivered in newly discovered Mattermost DMs by adjusting polling cursor logic.  
- ✅ **PR #12404**: Enables Telegram document replies to be properly passed as files to agents, fixing context loss during file-based interactions.  
- ✅ **PR #12566**: Documents a Core Team placement exception for session-ownership admission — part of compliance with ADR-016.  

These fixes reflect a focus on **user-facing stability, channel interoperability, and internal consistency**.

---

### **4. Community Hot Topics**  
Top community discussions center on **security, performance, and workflow integrity**:

- 🔥 **[Issue #9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345)** – *Recalculate PR risk/size labels on every diff update*  
  → 7 comments; high-risk, priority P2. Highlights need for dynamic, automated metadata that avoids manual drift in CI/CD pipelines.

- 🔥 **[Issue #12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401)** – *Claude Opus 5.5 crashes after tool-context window expires*  
  → 6 comments; S1 severity. Critical workflow blocker affecting users relying on advanced tooling with Anthropic models.

- 🔥 **[PR #12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450)** – *Adopt canonical V5 registry and model bindings*  
  → Part of a 5-part refactor chain (PRs #12454–#12457). Indicates strategic shift toward unified, type-safe configuration and model routing.

> **Analysis**: Users demand **predictable, secure, and self-maintaining systems**. There's a growing emphasis on automating metadata (labels), preventing silent failures (crashes), and enabling robust configuration at scale.

---

### **5. Bugs & Stability**  
Critical stability concerns reported today:

| Severity | Issue | Summary | Fix PR? |
|--------|-------|---------|--------|
| **S1** | [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | Claude Opus 5.5 chat fails after `keep_tool_context_turns` window closes | ❌ No fix yet |
| **S2** | [#12559](https://github.com/zeroclaw-labs/zeroclaw/issues/12559) | Config setters accept `inf`/`NaN` in decimal settings | ❌ No fix yet |
| **S2** | [#12402](https://github.com/zeroclaw-labs/zeroclaw/issues/12402) | OpenCode Go context-window discovery returns no capacity | ❌ No fix yet |
| **S2** | [#11823](https://github.com/zeroclaw-labs/zeroclaw/issues/11823) | Shell scanner skips command substitution in unquoted heredocs | ❌ No fix yet |
| **S2** | [#12146](https://github.com/zeroclaw-labs/zeroclaw/issues/12146) | MCP SSE client accepts absolute URLs, risking token leakage | ❌ No fix yet |

> ⚠️ Several S2+ bugs involve **security boundary violations** (e.g., URL redirection, policy bypasses) and **silent data corruption** (e.g., invalid config values). Urgent attention required.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging roadmap themes include:

- 🛠️ **Unified Model Registry & Configuration**: Multiple PRs (#12450–#12457) indicate a major overhaul to enable **exact model selection**, **canonical registry editing**, and **safe secret handling** — likely forming the basis of v0.9.1+.  
- 📱 **Channel Enhancements**:  
  - [Issue #12562](https://github.com/zeroclaw-labs/zeroclaw/issues/12562): Telegram trusted groups for broader access control.  
  - [Issue #12561](https://github.com/zeroclaw-labs/zeroclaw/issues/12561): Cleanup stale declined Matrix invites.  
- 🔄 **Provider Resilience**:  
  - [Issue #11768](https://github.com/zeroclaw-labs/zeroclaw/issues/11768): Honor `Retry-After` headers for 429s — signals intent to improve API rate-limit handling.

> 🔮 **Prediction**: v0.9.1 will focus on **configuration stability**, **provider reliability**, and **enhanced security boundaries**, with **V5 registry adoption** as a cornerstone.

---

### **7. User Feedback Summary**  
User pain points are increasingly technical but impactful:

- **"My Claude Opus 5.5 chat breaks after a few tool turns"** → Real-world impact on AI agent usability.  
- **"Why does it say 'Memory: none' when I'm using SQLite?"** → Confusion due to inconsistent UI feedback (fixed in PR #12530).  
- **"I can't trust the CLI if it accepts `inf` in config"** → Concern over input validation leading to undefined behavior.  
- **"My agent keeps crashing when sending messages to peers"** → Points to deep-seated SOP authorization flaws (Issue #12169).

> ✅ **Satisfaction** is rising where fixes resolve visibility issues (e.g., memory banner).  
> ❌ **Frustration** persists around **unreliable tooling**, **silent errors**, and **inconsistent security checks**.

---

### **8. Backlog Watch**  
High-impact, long-standing issues needing maintainer attention:

- 🔴 **[Issue #9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770)** – *Cron update silently discards declarative job changes* (6 columns affected)  
  → Still open since August 2026; risk: high. Affects automation reliability.

- 🔴 **[Issue #9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655)** – *Approval cards lack position info, making back-to-back cards indistinguishable*  
  → Closed but with follow-up needed. Impacts UX in multi-tool flows.

- 🔴 **[Issue #11124](https://github.com/zeroclaw-labs/zeroclaw/issues/11124)** – *SOP gate ignores strict fallback when mode answer is valid* (S0: data loss/security risk)  
  → Critical vulnerability with no fix yet despite being accepted and labeled high-risk.

- 🔴 **[PR #11289](https://github.com/zeroclaw-labs/zeroclaw/pull/11289)** – *Stable denial reason identifiers for RPC*  
  → High-risk feature delayed due to "do-not-merge" flag; essential for auditability and error debugging.

> ⏳ These require prioritization to maintain trust in ZeroClaw’s reliability and security posture.

---

**Final Assessment**: ZeroClaw is in a **high-intensity phase of architectural refinement and security hardening**. While user experience improvements are underway, **critical bugs and unresolved security risks remain a concern**. The project is healthy in terms of activity, but **maintainers must act decisively on high-severity issues** to avoid erosion of confidence. Next release should prioritize **stability, security, and configuration correctness**.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*