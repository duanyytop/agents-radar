# OpenClaw Ecosystem Digest 2026-11-01

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-01 01:25 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-11-01**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with a surge in developer engagement: **500 issues and 500 pull requests updated in the last 24 hours**, indicating robust community participation and ongoing development momentum. A significant portion of activity centers on critical stability, security, and UX issues—particularly around session state integrity, memory management, and plugin handling. Despite no new releases, the ecosystem is actively resolving high-severity regressions from recent versions (e.g., 2026.9.6–2026.10.8), suggesting a focus on post-release stabilization before the next formal release cycle.

---

### **2. Releases**  
**None**  
No new releases were published in the past 24 hours. The latest stable version remains **2026.10.8**, which has been under scrutiny for multiple critical regressions reported across Windows, macOS, and Linux hosts. Maintainers are likely prioritizing bug fixes ahead of a potential patch release to address urgent stability concerns.

---

### **3. Project Progress**  
**17 PRs merged or closed today**, primarily focused on diagnostics, UI refinement, and runtime reliability:
- ✅ **PR #189729** (`fix(control-ui): retire deleted sessions once without wiping cached sidebars`) improves session lifecycle handling and reduces unnecessary UI re-renders.
- ✅ **PR #189889** (`fix(sessions): preserve explicit web search preferences`) ensures user settings persist through session updates.
- ✅ **PR #189395** (`feat(google): use the Interactions API for Gemini Flash models`) enables more efficient model routing by adopting modern Google APIs.
- ✅ **PR #189843** (`perf(ui): reduce shared agent selector setup and focus work`) optimizes performance for large agent rosters.
- ✅ **PR #188946** (`improve: Doctor flags cron failure alerts that could not be delivered`) enhances observability of automation failures.

These changes reflect a strong emphasis on **user experience polish, diagnostic clarity, and operational resilience**.

---

### **4. Community Hot Topics**  
Top 5 most commented issues and PRs reveal pressing community pain points:

| Issue/PR | Comment Count | Severity | Link |
|--------|---------------|----------|------|
| [Issue #160959](https://github.com/openclaw/openclaw/issues/160959) | 66 | 🦞 Diamond Lobster (P0, crash-loop) | [Gateway blocks during plugin capture](https://github.com/openclaw/openclaw/issues/160959) |
| [Issue #177656](https://github.com/openclaw/openclaw/issues/177656) | 22 | 🦪 Silver Shellfish (P1, security) | [Native host exec returns integrity error without child result](https://github.com/openclaw/openclaw/issues/177656) |
| [Issue #166634](https://github.com/openclaw/openclaw/issues/166634) | 21 | 🦞 Diamond Lobster (P0, message-loss) | [Late reclamation commit checkpoint failure after crash](https://github.com/openclaw/openclaw/issues/166634) |
| [Issue #153426](https://github.com/openclaw/openclaw/issues/153426) | 15 | 🦞 Diamond Lobster (P0, security/UX-blocker) | [Curated `MEMORY.md` silently excluded forever after provenance trust loss](https://github.com/openclaw/openclaw/issues/153426) |
| [PR #189916](https://github.com/openclaw/openclaw/pull/189916) | N/A | 🧂 Unranked Krab (diagnostics) | [Identify native main-thread stalls on Linux](https://github.com/openclaw/openclaw/pull/189916) |

> 🔍 **Underlying Needs**: Users are demanding **predictable, recoverable system behavior** after crashes, **transparent state management**, and **diagnostic visibility into long-running processes**—especially on Linux and macOS. The recurring theme is **"silent data loss"** due to unreported failures or irreversible state transitions.

---

### **5. Bugs & Stability**  
Critical bugs reported today highlight systemic risks to uptime and data integrity:

| Bug | Severity | Impact | Fix PR? | Notes |
|-----|----------|--------|---------|-------|
| [Issue #160959](https://github.com/openclaw/openclaw/issues/160959) | P0 🦞 | Crash loop, minutes-long blockage during startup | ❌ No fix yet | Regression from 2026.9.6; affects external plugins |
| [Issue #177656](https://github.com/openclaw/openclaw/issues/177656) | P1 🦪 | Native host exec fails silently without child result | ❌ No fix yet | 28+ failures on 2026.10.5 |
| [Issue #187900](https://github.com/openclaw/openclaw/issues/187900) | P1 🦪 | `doctor` hangs indefinitely at startup (all modes) | ❌ No fix yet | Linux-only; reproducible on Ubuntu 24.04 |
| [Issue #182369](https://github.com/openclaw/openclaw/issues/182369) | P1 🦪 | Gateway RSS grows ~0.1 GiB/h off-heap until restart | ❌ No fix yet | Memory leak affecting long-term stability |
| [Issue #153426](https://github.com/openclaw/openclaw/issues/153426) | P0 🦞 | Curated memory roots permanently dropped with no recovery | ❌ No fix yet | Security + UX blocker; silent data loss |

> ⚠️ **Pattern**: Multiple **unrecoverable state transitions**, **silent failures**, and **resource leaks**—indicating deeper architectural challenges in state persistence, error propagation, and garbage collection.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging feature signals suggest demand for **greater control, transparency, and customization**:

- **[Issue #159858](https://github.com/openclaw/openclaw/issues/159858)**: *Let idle worker isolates release memory on small hosts* — users report 650 MB heap residency; **likely candidate for 2026.11**.
- **[Issue #138366](https://github.com/openclaw/openclaw/issues/138366)**: *Let memory slot owner drive Dreams page* — indicates growing interest in **user-owned memory governance**.
- **[PR #129388](https://github.com/openclaw/openclaw/pull/129388)**: *Context-pressure-aware continuation* — advanced self-managed turn continuity; **signals roadmap toward autonomous agent workflows**.
- **[Issue #76493](https://github.com/openclaw/openclaw/issues/76493)**: *Allow SecretRef in `mcp.servers[].env`* — security best practices request; **high priority for config flexibility**.

> 💡 **Prediction**: The next minor release (2026.11) will likely include **memory optimization improvements**, **enhanced secret handling**, and **context-aware agent continuations**.

---

### **7. User Feedback Summary**  
Real-world user pain points reveal deep frustrations with **reliability, configurability, and diagnostics**:

- **“My agent crashes on startup after plugin update”** — common complaint tied to [Issue #160959](https://github.com/openclaw/openclaw/issues/160959).
- **“I lost my curated memory because it was marked untrusted”** — users report **no warning or recovery path** when `MEMORY.md` is silently excluded ([Issue #153426](https://github.com/openclaw/openclaw/issues/153426)).
- **“Doctor hangs and gives no output”** — frequent on macOS/Linux; users feel powerless during repairs ([Issue #187900](https://github.com/openclaw/openclaw/issues/187900)).
- **“Settings disappear after reload”** — reported in multiple contexts, including web search preferences ([PR #189889](https://github.com/openclaw/openclaw/pull/189889)).

> 😩 **Sentiment**: High frustration with **lack of feedback**, **irreversible state changes**, and **opaque debugging tools**—despite powerful features.

---

### **8. Backlog Watch**  
High-priority issues and PRs requiring maintainer attention:

| Issue/PR | Age | Status | Why It Matters |
|--------|-----|--------|----------------|
| [Issue #153426](https://github.com/openclaw/openclaw/issues/153426) | 2 months | OPEN, P0, 🦞 | Silent data loss; impacts core memory integrity |
| [Issue #160959](https://github.com/openclaw/openclaw/issues/160959) | 2 weeks | OPEN, P0, 🦞 | Critical regression; blocks production use |
| [Issue #177656](https://github.com/openclaw/openclaw/issues/177656) | 12 days | OPEN, P1, 🦪 | Security-related crash; affects 28+ stable installs |
| [PR #129388](https://github.com/openclaw/openclaw/pull/129388) | 3 months | OPEN, XL, 🦐 | Major agent autonomy feature; design mature |
| [Issue #112313](https://github.com/openclaw/openclaw/issues/112313) | 4 months | OPEN, stale | Dead-letter queue entries permanent—no cleanup path |

> 📌 **Action Needed**: Maintainers should prioritize **P0/P1 issues with high comment counts and real-world impact**, especially those involving **data loss, crashes, or irrecoverable state**.

---

**✅ Project Health Score**: **Medium-High**  
While activity is intense and fixes are being made, unresolved P0/P1 bugs and silent failures indicate **ongoing stability risks**. Immediate focus on crash diagnostics, memory safety, and error transparency is critical for user retention and adoption.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem – 2026-11-01**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem is entering a pivotal phase of maturation, marked by intense developer engagement, growing focus on production readiness, and increasing convergence around core capabilities like session persistence, security hardening, and cross-environment deployment. Projects are no longer just proof-of-concept tools—they are evolving into deployable platforms with real-world use cases in automation, knowledge management, and workflow orchestration. However, this momentum is tempered by persistent stability challenges, particularly around crash recovery, silent data loss, and configuration fragility. The landscape reflects a shift from feature experimentation to trust-building, where reliability, diagnostics, and auditability are now primary differentiators.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score |
|--------|-------------------|----------------|----------------|--------------|
| **OpenClaw** | 500 | 500 | None | Medium-High |
| **Hermes Agent** | 50 | 50 | None | Strong Momentum, Growing Pains |
| **QwenPaw** | 9 | 14 | None | Stable but Under Pressure |
| **ZeroClaw** | 24 | 50 | None (v0.9.0 imminent) | High Activity, Moderate Stability |

> 🔍 *Note*: OpenClaw leads in volume and community participation; ZeroClaw shows high technical velocity despite lower issue count. QwenPaw and Hermes Agent exhibit balanced activity with targeted fixes.

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most **developer-engaged and technically active** project in the ecosystem, with 500 issues and 500 PRs updated daily—far exceeding peer levels. Its **deep focus on session state integrity, memory safety, and diagnostic visibility** positions it as a foundational platform for long-running, mission-critical agent workflows. Unlike others, OpenClaw’s architecture emphasizes **persistent agent identity and recoverable state**, making it ideal for users prioritizing resilience over rapid iteration. While its community size appears larger than peers based on comment volume and PR density, this also exposes deeper systemic risks—particularly around irreversible state transitions and silent failures—which may hinder enterprise adoption without urgent stabilization.

---

### **4. Shared Technical Focus Areas**  
Across all four projects, several critical requirements are emerging as universal needs:

- **Crash Recovery & Session Resilience**:  
  - *OpenClaw* (Issue #160959, #166634), *Hermes Agent* (Issue #147379), *ZeroClaw* (Issue #12142): All report unhandled state transitions after crashes or restarts.
- **Security Hardening in Execution Environments**:  
  - *ZeroClaw* (S1 vulnerabilities), *QwenPaw* (Docker non-root runtime), *Hermes Agent* (smart approval exploit): All face credential leakage or privilege escalation risks during execution.
- **Configuration Robustness & Migration**:  
  - *Hermes Agent* (Issue #146480), *OpenClaw* (session lifecycle), *QwenPaw* (config writeback guard): Users demand fail-safe config handling and portable session states.
- **Real-Time Streaming & Proxy Compatibility**:  
  - *QwenPaw* (Issue #8522), *Hermes Agent* (Android streaming stutter): Core UX depends on reliable SSE/HTTP streaming behind proxies.
- **Diagnostic Visibility & Observability**:  
  - *OpenClaw* (Doctor flags), *ZeroClaw* (audit trails), *QwenPaw* (latency display): Developers demand better insight into agent behavior and performance.

> ✅ These signals indicate a **cross-project consensus** that "trust" in AI agents hinges not on model quality—but on **predictable, observable, and recoverable system behavior**.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **Target User** | Power users, developers, long-term workflows | Productivity seekers, mobile-first adopters | Multi-channel integrators, DevOps teams | Security-conscious enterprises, SREs |
| **Feature Focus** | State persistence, UX polish, memory safety | Mobile experience, plugin ecosystem, smart approvals | Cross-platform channels, proxy compatibility | Identity governance, sandboxing, auditability |
| **Architecture** | Centralized session state + agent registry | Modular gateway + profile-based isolation | Channel-agnostic Hub + reverse proxy support | Gateway separation + SBPL policy enforcement |
| **Deployment Model** | Hybrid (local/cloud) | Multi-profile, remote-capable | Containerized, restricted environments | CLI-only, headless, minimal footprint |

> 📌 **Key Differentiator**:  
> - **OpenClaw** = *Reliability-first agent platform*.  
> - **Hermes Agent** = *Mobile-optimized productivity assistant*.  
> - **QwenPaw** = *Multi-channel integration engine*.  
> - **ZeroClaw** = *Security-hardened, enterprise-grade agent orchestrator*.

---

### **6. Community Momentum & Maturity**

| Project | Activity Tier | Stabilization Phase | Developer Engagement Level |
|-------|---------------|---------------------|----------------------------|
| **OpenClaw** | High (500+ PRs/day) | Post-release stabilization | Very High |
| **Hermes Agent** | High (50+ PRs/day) | Feature refinement / mobile push | High |
| **QwenPaw** | Medium (14 PRs/day) | Patch-level stability | Medium-High |
| **ZeroClaw** | High (50 PRs/day) | Pre-release (v0.9.0) | High |

> 🚀 **Rapid Iterators**: OpenClaw, Hermes Agent, and ZeroClaw are advancing rapidly—each targeting major releases or architectural shifts.  
> 🛠️ **Stabilizers**: QwenPaw is focused on fixing release blockers before v2.3.1, indicating a move toward production readiness.  
> 📈 **Maturity Signal**: ZeroClaw’s RFC-driven roadmap and security triage suggest a mature, governance-aware community; OpenClaw’s high comment volume reflects both enthusiasm and frustration.

---

### **7. Trend Signals**  
Based on community feedback and development patterns, key industry trends for AI agent developers include:

1. **Trust > Features**: Users prioritize **reliability, error transparency, and recovery mechanisms** over new functionalities. Silent failures and irreversible state changes are top pain points across all projects.
2. **Mobile & Voice Integration Demand**: Hermes Agent’s overwhelming demand for native iOS/Android apps with voice calling signals a **shift toward ambient, hands-free AI interaction**—a major growth vector.
3. **Cross-Platform & Embedded Deployment Needs**: QwenPaw’s struggles in fnOS sandboxes and Docker non-root setups reflect rising interest in **AI agents on NAS devices, edge systems, and embedded environments**.
4. **Agent Autonomy & Governance**: ZeroClaw’s RAG RFC and OpenClaw’s context-aware continuation requests show growing demand for **autonomous, knowledge-grounded agent workflows with clear ownership and audit trails**.
5. **Security-by-Design Expectations**: From credential exposure to approval bypasses, **security is no longer optional**—it’s a baseline requirement for any production-grade agent platform.

> 💡 **Value for Developers**: Building successful AI agents now requires more than API access and prompt engineering. It demands **robust state management, secure execution, cross-environment portability, and observability**—the very areas where these projects are investing heavily.

---

**Conclusion**: The personal AI agent ecosystem is transitioning from experimental tooling to **production-ready platforms**. Success will go to those who balance innovation with **systemic reliability, security, and user trust**—not just model performance. OpenClaw leads in scale, ZeroClaw in security rigor, Hermes Agent in user experience ambition, and QwenPaw in integration breadth. The next 6–12 months will determine which projects become foundational infrastructure for the next wave of autonomous AI workflows.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-11-01**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating strong community engagement and ongoing development momentum. No new releases were published, suggesting a focus on stabilization and feature refinement ahead of a potential upcoming milestone. The high volume of mobile-related issues (especially Android beta) signals growing user interest in native app experiences, while critical backend stability bugs—particularly around session handling, gateway lifecycle, and memory management—are emerging as top concerns. Overall, the project is in a phase of intensive iteration, balancing rapid innovation with technical debt resolution.

---

### **2. Releases**  
❌ **No new releases** have been published as of 2026-11-01.  
The latest stable version remains **v0.22.5+1855.g642dfd1 (2026.9.24)**, with no indication of a patch or feature release imminent. Users should expect continued updates to be delivered through incremental PR merges rather than formal version bumps.

---

### **3. Project Progress**  
✅ **13 Pull Requests merged/closed today**, reflecting significant progress in stabilizing core infrastructure and enhancing tooling:

- **PR #147382** (`fix(gateway): record initial delivery attempt atomically`) — Addresses a critical race condition where failed `mark_attempting` calls could cause duplicate message delivery after restarts. This fix directly resolves **Issue #147379**.
- **PR #147381** (`fix(config): reject empty documents during raw writeback`) — Prevents accidental overwriting of user config files when `config.yaml` is blank or malformed, fixing **Issue #147350**.
- **PR #147380** (`fix(prompt): honor configured temporary directories`) — Ensures temporary file paths respect user-defined `TMPDIR`, improving sandboxing and security compliance.
- **PR #147378** (`fix(daytona): pass profile-scoped API key to SDK`) — Resolves authentication failures under multiplexed gateways by correctly passing scoped keys.
- **PR #147376** (`fix(kanban): identify refused PR acceptance reads`) — Enhances diagnostics for GitHub integration failures by adding structured failure provenance.
- **PR #147072** (`fix(slack): render multi-select clarify as checkboxes + Submit`) — Improves UX consistency on Slack by properly rendering multi-select clarifications.
- **PR #147054** (`fix(ssh): keep ControlMaster sockets under sun_path`) — Fixes SSH connection failures due to path length limits in deep profile hierarchies.
- **PR #146170 & #146171** — Added SoChain-hosted MCP and UTXO blockchain skill, expanding financial tooling capabilities.
- **PR #147375** — Added NeuralMind plugin to catalog, broadening AI agent ecosystem integrations.
- **PR #147370** — Makes JSON output configurable by default, easing automation workflows.
- **PR #147075** — Patched three redaction vulnerabilities related to URL masking and argv dumps, improving security hygiene.
- **PR #131210** — Fixed duplicate `User-Agent` headers in Anthropic OAuth flows, resolving a subtle but real protocol issue.
- **PR #131211** — Introduced opt-in delegation inheritance of `SOUL.md`, enabling richer subagent identity propagation.

These PRs collectively improve reliability, security, usability, and extensibility—particularly in multi-profile and remote deployment scenarios.

---

### **4. Community Hot Topics**  
🔥 **Top 3 Most Active Issues (by comments/reactions)** reflect urgent user needs:

1. **[Issue #11911: Native Mobile App (iOS & Android) with Voice Calling](https://github.com/nousresearch/hermes-agent/issues/11911)**  
   - **21 comments**, **15 upvotes**  
   - *Demand*: Real-time voice calling with Hermes AI assistant. This is the most requested feature, indicating users want hands-free, natural interaction—likely for productivity and accessibility use cases. High visibility suggests this may become a strategic priority.

2. **[Issue #147269: Android beta at Firebase tester limit](https://github.com/nousresearch/hermes-agent/issues/147269)**  
   - **5 comments**, **1 upvote**  
   - *Need*: Increased access to the Android beta. This highlights strong demand for mobile adoption, but also reveals a bottleneck in distribution infrastructure. A public waitlist or expanded testing program may be needed soon.

3. **[Issue #147373: Smart Approval Auto-Approved Dangerous Command](https://github.com/nousresearch/hermes-agent/issues/147373)**  
   - **1 comment**, **0 upvotes**  
   - *Critical risk*: A smart approval system authorized a destructive PowerShell command that deleted 188K+ files. Though low comment count, this represents a severe security flaw—potentially exploitable in production environments. Immediate review required.

> 🔗 **Top PRs by activity**:  
> - **PR #147382** (atomic delivery recording) — Directly addresses a core stability bug; already linked to Issue #147379.  
> - **PR #147381** (config writeback guard) — Fixes a common user error pattern with configuration loss.  
> - **PR #147075** (redaction fixes) — Security-critical, with multiple leak types patched.

---

### **5. Bugs & Stability**  
⚠️ **Critical stability and reliability bugs reported today**, ranked by severity:

| Severity | Issue | Summary | Fix PR? |
|--------|------|--------|--------|
| 🔴 **Critical** | [Issue #147373](https://github.com/nousresearch/hermes-agent/issues/147373) | Smart approval auto-approved a destructive command (`rm -rf`) based on misleading description. Risk: data loss, trust erosion. | ❌ Not yet fixed |
| 🔴 **Critical** | [Issue #147379](https://github.com/nousresearch/hermes-agent/issues/147379) | Gateway resends delivered replies after restart without duplicate markers. Risk: message duplication, confusion. | ✅ **PR #147382** submitted |
| 🟡 **High** | [Issue #147321](https://github.com/nousresearch/hermes-agent/issues/147321) | Android beta: conversation scrolling stutters and long replies can’t be scrolled into view. Impacts UX severely. | ❌ No fix PR |
| 🟡 **High** | [Issue #147323](https://github.com/nousresearch/hermes-agent/issues/147323) | Android beta crashes with `OutOfMemoryError` after ~1 hour of mixed use. Indicates memory leak. | ❌ No fix PR |
| 🟡 **High** | [Issue #145999](https://github.com/nousresearch/hermes-agent/issues/145999) | Gateway event loop blocks on `state.db get_meta()` → watchdog kills process → turns marked `unknown`. Causes silent failures. | ❌ No fix PR |
| 🟡 **High** | [Issue #147087](https://github.com/nousresearch/hermes-agent/issues/147087) | Soft cache eviction leaks SQLite connections per evicted agent → memory growth over time. | ❌ No fix PR |

> ⚠️ **Note**: Several high-severity bugs are unaddressed despite being reported within 24h. The lack of immediate PR responses suggests potential triage delays.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **Emerging roadmap trends from user feedback**:

- **Mobile-first experience**: The overwhelming demand for a **native iOS/Android app with voice calling** (Issue #11911) signals a shift toward mobile-centric AI assistants. This may influence future investment in mobile SDKs and cross-platform frameworks.
- **Enhanced session management**: Multiple issues highlight problems with session migration (`HERMES_HOME` moves), prompting a need for **session migration tools or rebind mechanisms** (Issue #146480).
- **Cron job metadata**: Users request tagging, categorization, and descriptions for cron jobs (Issue #68482). This suggests growing use of Hermes for automated workflows.
- **Apple Silicon GPU acceleration**: With macOS dominance, users push for **MLX-Whisper as first-class STT provider** (Issue #41659), signaling hardware-aware optimization is expected.
- **Config robustness**: Empty config file handling (Issue #147350) shows users value resilience against misconfiguration—suggesting more validation layers will be added.

> 📌 **Prediction**: The next major release (likely v0.23.0) will include **mobile app beta expansion**, **session migration support**, and **enhanced config safety**, possibly with **early-stage voice calling** in preview.

---

### **7. User Feedback Summary**  
🗣️ **Real user pain points observed**:

- **Mobile frustration**: Android beta users report stuttery UI, crashes, and missing notifications (Issues #147321, #147345, #147323). These are not edge cases—they affect core usability.
- **Security anxiety**: The **smart approval exploit** (Issue #147373) reveals deep concern about AI agents executing dangerous commands without sufficient context scrutiny. Users want stronger guardrails.
- **Configuration fragility**: Moving `HERMES_HOME` breaks all sessions (Issue #146480), causing irreversible data loss unless users know workarounds. This indicates poor migration design.
- **Missing features**: Users desire one-click prompt enhancement (Issue #135931), better model picker display (Issue #35115), and clearer filter options in mobile apps (Issue #147371).
- **Positive sentiment**: Appreciation for modular plugins (SoChain, NeuralMind), security patches, and CLI improvements (JSON output config).

> ✅ **Satisfaction drivers**: Plugin ecosystem, CLI flexibility, security hardening.  
> ❌ **Dissatisfaction drivers**: Mobile UX, session portability, smart approval risks.

---

### **8. Backlog Watch**  
🔍 **Long-standing, high-impact issues needing maintainer attention**:

| Issue | Description | Age | Status | Priority |
|------|-------------|-----|--------|----------|
| [Issue #11911](https://github.com/nousresearch/hermes-agent/issues/11911) | Native mobile app with voice calling | 6 months | Open | ⭐⭐⭐⭐⭐ |
| [Issue #146480](https://github.com/nousresearch/hermes-agent/issues/146480) | Session invalidation after `HERMES_HOME` move | 2 months | Open | ⭐⭐⭐⭐☆ |
| [Issue #41659](https://github.com/nousresearch/hermes-agent/issues/41659) | Apple Silicon GPU underutilized for STT | 5 months | Open | ⭐⭐⭐⭐☆ |
| [Issue #68482](https://github.com/nousresearch/hermes-agent/issues/68482) | Cron job metadata (tags/description/workflow) | 4 months | Open | ⭐⭐⭐☆☆ |
| [Issue #135931](https://github.com/nousresearch/hermes-agent/issues/135931) | One-click AI prompt enhancement in desktop input | 1 month | Open | ⭐⭐⭐☆☆ |

> 📌 **Actionable insight**: These five issues represent **core user experience gaps**. Addressing them would significantly boost adoption, especially among power users and mobile adopters. Maintainers should consider assigning dedicated teams or roadmap milestones.

---

### ✅ **Final Assessment**  
**Project Health: Strong Momentum, Growing Pains**  
Hermes Agent is thriving as an open-source AI agent platform with vibrant community participation and rapid innovation. However, **stability and mobile readiness are lagging behind ambition**. Critical bugs remain unpatched, and the absence of a mobile app despite massive demand suggests a strategic gap.  

**Recommendation**: Prioritize **mobile beta expansion**, **session migration tools**, and **security hardening** in the next sprint cycle. Formalize a **feature roadmap** with clear milestones to align community expectations and guide contributions.

🔗 **Project Home**: [https://github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-01**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with a strong influx of new issues and PRs over the past 24 hours: **9 open issues** and **14 open pull requests**, indicating robust community engagement and ongoing development momentum. Most activity centers on critical stability fixes, particularly around proxy handling, Docker runtime permissions, and streaming behavior behind reverse proxies. While no new releases were published, multiple high-impact bug fixes are in progress, suggesting imminent patch-level updates. The project is clearly prioritizing reliability and cross-environment compatibility ahead of broader feature rollout.

---

### **2. Releases**  
❌ **No new releases** were published in the last 24 hours.  
No version updates or changelogs were issued. The latest available release remains **v2.3.0-beta.1** (as noted in Issue #8511), with v2.3.0b2 reported to crash in restricted environments (Issue #8515). Maintainers appear focused on stabilizing core functionality before formalizing a new release candidate.

---

### **3. Project Progress**  
✅ **1 merged PR today**:  
- [#8338](https://github.com/agentscope-ai/QwenPaw/pull/8338) *fix(channels): carry Telegram quoted reply context into the agent*  
  - Resolves missing contextual reference in Telegram replies by properly extracting `reply_to_message`.  
  - Enhances usability for users relying on quote-based conversation flow, especially in team or support scenarios.

🛠️ **Key PRs in review/active**:
- [#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522): Fixes SSE buffering issue (`X-Accel-Buffering: no`) behind nginx — critical for real-time chat responsiveness.
- [#8519](https://github.com/agentscope-ai/QwenPaw/pull/8519): Addresses Docker runtime ownership issues when Hub runs as non-root — essential for secure deployment in containerized environments.
- [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409): Adds QQ C2C streaming message support — expanding multi-channel capabilities.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement**:
- **[Issue #8424](https://github.com/agentscope-ai/QwenPaw/issues/8424)**: *Legacy MCP server handshake failure due to hard-failed JSON-RPC error*  
  - 4 comments, 0 likes — but represents a **critical backward-compatibility regression** affecting older server integrations.  
  - Root cause: Modern server protocol fails gracefully; legacy servers can't fall back via `initialize` handshake.  
  - **Need**: Protocol fallback logic must be re-enabled or documented.

- **[Issue #8515](https://github.com/agentscope-ai/QwenPaw/issues/8515)**: *v2.3.0b2 crashes in fnOS application sandbox due to incorrect `HOME` path resolution*  
  - 1 comment, 0 likes — but highlights **deployment fragility in constrained environments** (e.g., NAS devices, embedded systems).  
  - **Need**: Better environment variable override control and documentation for `QWENPAW_DEPENDENCY_STATE_DIR`.

🔥 **Top PRs by Impact & Activity**:
- [#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522): Fixing SSE buffering — directly addresses real-time streaming failures in production setups.
- [#8519](https://github.com/agentscope-ai/QwenPaw/pull/8519): Docker runtime permission fix — vital for non-root deployments in CI/CD and cloud contexts.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (High Severity)**:
1. **[Issue #8517](https://github.com/agentscope-ai/QwenPaw/issues/8517)**: Hub Docker runtime fails to start with `Permission denied` on `config.json` when running as non-root.  
   - **Fix PR**: [#8519](https://github.com/agentscope-ai/QwenPaw/pull/8519) — already submitted; pending review.  
   - **Impact**: Blocks non-root containerized deployments.

2. **[Issue #8515](https://github.com/agentscope-ai/QwenPaw/issues/8515)**: v2.3.0b2 crashes during import in fnOS sandboxes due to hardcoded `pwd.getpwuid()` override.  
   - **Fix PR**: None yet — requires urgent attention from maintainers.  
   - **Impact**: Breaks adoption in niche but growing use cases (e.g., home NAS automation).

🟡 **Medium Severity**:
- **[Issue #8424](https://github.com/agentscope-ai/QwenPaw/issues/8424)**: Legacy MCP server handshake fails due to improper error handling — prevents integration with older infrastructure.
- **[Issue #8511](https://github.com/agentscope-ai/QwenPaw/issues/8511)**: Intermittent `ProviderError: No active model configured` during concurrent messages — affects Feishu channel reliability.

🟢 **Low Severity**:
- **[Issue #8521](https://github.com/agentscope-ai/QwenPaw/issues/8521)**: Copy-paste lag (Ctrl+C requires multiple presses) — UX annoyance, not functional breakage.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **Emerging User Needs**:
- **[Issue #8518](https://github.com/agentscope-ai/QwenPaw/issues/8518)**: *Display per-reply latency in Console chat UI*  
  - **Signal**: Users want performance visibility — likely for debugging slow agents or optimizing workflows.  
  - **Predicted inclusion**: Likely in **v2.4.0** as part of observability improvements.

- **[Issue #8516](https://github.com/agentscope-ai/QwenPaw/issues/8516)**: SSE stream buffering behind nginx  
  - Already addressed by PR [#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522) — suggests **real-time streaming is a priority**.

- **[PR #8409](https://github.com/agentscope-ai/QwenPaw/pull/8409)**: Add QQ C2C streaming support  
  - Indicates **multi-platform expansion** is underway — likely to be included in next beta.

- **[PR #8520](https://github.com/agentscope-ai/QwenPaw/pull/8520)**: Reply to `/approval` in agent’s language  
  - Shows growing demand for **internationalization and localization** in control flows.

---

### **7. User Feedback Summary**  
🔧 **Pain Points Reported**:
- **UI/UX Degradation**: Multiple users report newer UI being “sluggish,” “less efficient,” and “harder to switch models” (Issue #8521).
- **Copy-Paste Lag**: Ctrl+C requiring multiple presses across browsers — indicates input method friction.
- **Unpredictable Responses**: Random lack of reply content despite visible thinking steps (Issue #8521) — raises concerns about model or agent logic stability.
- **Crashes in Restricted Environments**: fnOS, Docker, and proxy configurations causing immediate startup failure (Issues #8515, #8517).

😊 **Positive Signals**:
- Active contribution from first-time contributors (e.g., PRs #8522, #8520) — indicates healthy ecosystem growth.
- Growing interest in cross-platform channels (QQ, Telegram, Feishu) — shows broadening user base.

---

### **8. Backlog Watch**  
⚠️ **Long-Unanswered High-Impact Items Requiring Attention**:
- **[Issue #8424](https://github.com/agentscope-ai/QwenPaw/issues/8424)**: Legacy MCP server handshake failure  
  - **Status**: Open since Oct 26, 2026 — 5 days old, no assigned maintainer.  
  - **Risk**: Breaks backward compatibility; may hinder enterprise or hybrid deployments.

- **[Issue #8184](https://github.com/agentscope-ai/QwenPaw/issues/8184)**: Doom-loop gate kills legitimate long-running tasks  
  - **Status**: Open since Oct 12, 2026 — 20 days old.  
  - **Risk**: Can terminate valid agent workflows prematurely — serious reliability concern.

- **[PR #7211](https://github.com/agentscope-ai/QwenPaw/pull/7211)**: Prevent injected context from persisting  
  - **Status**: Open since Aug 21, 2026 — over 2 months old, labeled "ready-for-human-review".  
  - **Risk**: Context leakage could pose privacy or security risks if misused.

> 🔔 **Recommendation**: Maintain a dedicated triage rotation to address these high-value backlog items, especially those blocking stable deployments or introducing potential security gaps.

---

**Project Health Score**: ✅ **Stable but Under Pressure**  
While QwenPaw shows strong developer activity and user engagement, several critical bugs in production readiness — especially around **permissions, proxy handling, and backward compatibility** — suggest that a **patch release (v2.3.1)** should be prioritized within the next 1–2 weeks to restore trust in deployment stability.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-11-01**

---

### **1. Today's Overview**  
ZeroClaw remains highly active with a robust momentum in development, evidenced by **50 pull requests** and **24 new issues** updated within the last 24 hours. The project is entering a critical phase ahead of its upcoming **v0.9.0 release**, with a strong focus on security hardening, identity access controls, and runtime stability. A significant portion of recent activity centers around **security vulnerabilities**, particularly in sandboxing, tool execution, and OIDC flows. While no new releases were issued, the pipeline is primed for a major update as multiple high-risk fixes and feature enhancements are nearing merge.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-11-01.  
The project continues to build toward **v0.9.0**, which is tagged in several PRs and issues (e.g., #11971, #12129). No migration notes or breaking changes have been documented yet, but the presence of `release:v0.9.0` labels across numerous high-priority items suggests this version will include substantial architectural shifts—especially in gateway separation, CLI-only builds, and security policy enforcement.

---

### **3. Project Progress**  
✅ **Merged/Completed PRs (Today):**  
- **[PR #12071](https://github.com/zeroclaw-labs/zeroclaw/pull/12071)**: Added `/load-session <name|uuid>` command to ZeroCode, enabling direct session resumption—improving UX for developers working in long-running workflows.  
- **[PR #11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822)**: Fixed shell command parsing to properly split at substitution and subshell boundaries (`$(...)`, `<(...)`, etc.), preventing potential injection risks.  
- **[PR #12129](https://github.com/zeroclaw-labs/zeroclaw/pull/12129)**: Upgraded Wasmtime to **48.0.8**, resolving **five RustSec advisories (RUSTSEC-2026-0420 to RUSTSEC-2026-0424)** that blocked CI pipelines.  
- **[PR #12111](https://github.com/zeroclaw-labs/zeroclaw/pull/12111)**: Enabled safe installation of the **CLI-only build**, now installable only on explicit request—preventing accidental overwrites of minimal installations.

These merges indicate strong progress in **user experience**, **security hygiene**, and **build reliability**.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issue:**  
- **[Issue #11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)** – *RFC: Knowledge corpus — document retrieval (RAG) for the agent*  
  - **8 comments**, **high risk**, **P2 priority**, labeled **RFC** and **domain:security/architecture**.  
  - This is a foundational capability request: enabling agents to retrieve context from operator-managed documents (APIs, OS references, security standards).  
  - **Need**: Structured knowledge management for autonomous agents—critical for real-world deployment beyond code generation.

🔥 **Most Active PR:**  
- **[PR #11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234)** – *fix(rpc): judge queued session ownership by current authority*  
  - Though closed, it’s part of a chain of high-severity security fixes (linked to #11220, #11230).  
  - Addresses **session ownership bypasses** in RPC layer—indicating deep concern about **privilege escalation vectors** in multi-agent workflows.

🔍 **Underlying Need**: Users are demanding **trustworthy, auditable, and secure agent behavior**—especially around identity, access control, and data isolation. The volume of security-related issues signals that ZeroClaw is maturing into a production-grade system where trust boundaries matter.

---

### **5. Bugs & Stability**  
🚨 **Critical (S1):**  
- **[Issue #12142](https://github.com/zeroclaw-labs/zeroclaw/issues/12142)**: Agent can read daemon’s master secrets (`config.toml`, `gateway-admin.token`, OTPs) under `level = "full"`—**S1: workflow blocked (master-key disclosure)**.  
  - ✅ **Fix PR pending**: [PR #12150](https://github.com/zeroclaw-labs/zeroclaw/pull/12150) proposes SBPL regex fix for home dotfiles; likely related.  
- **[Issue #12143](https://github.com/zeroclaw-labs/zeroclaw/issues/12143)**: MCP stdio servers inherit full environment (including `ZEROCLAW_*` keys), risking credential leakage.  
  - ✅ **Fix PR**: [PR #12168](https://github.com/zeroclaw-labs/zeroclaw/pull/12168) enforces Act policy on `send_message_to_peer`.  
- **[Issue #12141](https://github.com/zeroclaw-labs/zeroclaw/issues/12141)**: Admin routes (`/admin/shutdown`, `/admin/reload`) accept any loopback peer—**approval bypass + DoS vulnerability**.  
  - 🔴 **High risk**: Could allow unauthenticated local abuse.

🟡 **High Severity (S2):**  
- **[Issue #12145](https://github.com/zeroclaw-labs/zeroclaw/issues/12145)**: Plugin store limiter allows memory overuse via thousands of instances.  
- **[Issue #12146](https://github.com/zeroclaw-labs/zeroclaw/issues/12146)**: MCP SSE client accepts absolute URLs—potential redirect attack.  
- **[Issue #12156](https://github.com/zeroclaw-labs/zeroclaw/issues/12156)**: `zeroclaw update` forces glibc build even on musl systems—breaks minimal installs.

🟢 **Minor (S3):**  
- Several installer UX bugs (e.g., version display, musl detection on glibc hosts, config file creation after cancellation).

> ⚠️ **Stability Risk**: Multiple S1/S2 bugs suggest **runtime integrity is under pressure**, especially in multi-agent, remote-execution scenarios. Immediate attention needed.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Top-Ranked Feature Requests:**  
- **[Issue #11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)**: **Document retrieval (RAG)** — already flagged as an RFC with high risk and priority. Likely to be **core v0.9.0+ feature**.  
- **[Issue #12069](https://github.com/zeroclaw-labs/zeroclaw/issues/12069)**: `/load-session` — now implemented via PR #12071. Signals demand for **persistent, recoverable agent sessions**.  
- **[Issue #11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971)**: **CLI-only build** — merged and stabilized. Indicates growing demand for **headless, server-side deployments**.

🔮 **Roadmap Prediction**:  
- **v0.9.0** will likely include:  
  - Gateway separation (RPC + HTTP)  
  - CLI-only build support  
  - RAG/Knowledge Corpus integration  
  - Enhanced security policies (sandboxing, audit logging)  
  - Improved session persistence and recovery

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points:**  
- **Session management frustration**: Users rely on `Ctrl+S` picker but want direct named/resumable sessions (#12069).  
- **Security anxiety**: Multiple reports confirm users are deeply concerned about **credential exposure**, **unauthorized access**, and **data leakage**—especially when using `level = "full"` or `workspace_only = false`.  
- **Installer confusion**: Users report inconsistent behavior (wrong build type, misleading messages like “No config written” despite file creation).  
- **Developer experience**: Demand for better **debugging visibility**, **tool execution logs**, and **audit trails** is emerging.

✅ **Positive Sentiment**:  
- Users appreciate **modular design**, **open governance**, and **rapid iteration**.  
- High engagement in RFCs and security reviews shows **community trust** in the project’s direction.

---

### **8. Backlog Watch**  
⏳ **Long-standing, High-Impact Issues Needing Attention:**  
- **[Issue #12158](https://github.com/zeroclaw-labs/zeroclaw/issues/12158)**: *10 unpatched vulnerabilities found in professional security scan*.  
  - Despite fixes applied in fork, upstream remains vulnerable.  
  - 🟡 **Urgent**: Requires maintainer review and patching before v0.9.0 release.  
- **[Issue #12139](https://github.com/zeroclaw-labs/zeroclaw/issues/12139)**: Missing macOS user secret paths (`~/Library/Keychains`, `.netrc`, etc.) in default forbidden list.  
  - Critical gap in cross-platform security coverage.  
- **[Issue #12137](https://github.com/zeroclaw-labs/zeroclaw/issues/12137)**: Misescaped regex in Seatbelt profile breaks toolchain access on macOS.  
  - Fix exists ([PR #12150](https://github.com/zeroclaw-labs/zeroclaw/pull/12150)) but not yet merged.

> 💡 **Recommendation**: Prioritize **security backlog** items (S1/S2) and **cross-platform consistency** before finalizing v0.9.0. These are gatekeepers to enterprise adoption.

---

**Project Health Score**: ⚠️ **High Activity, Moderate Stability**  
ZeroClaw is advancing rapidly with strong community involvement and technical rigor—but **security debt must be addressed immediately** to maintain trust and readiness for production use.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*