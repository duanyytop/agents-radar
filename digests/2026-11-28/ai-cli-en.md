# AI CLI Tools Community Digest 2026-11-28

> Generated: 2026-11-28 04:11 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# **Cross-Tool AI CLI Ecosystem Comparison Report**  
*Generated: 2026-11-28 | Data Source: GitHub Community Digests*

---

### **1. Ecosystem Overview**

The AI CLI ecosystem in late 2026 is characterized by rapid maturation, increasing focus on agent orchestration, and growing pains around stability, security, and cross-platform reliability. While all major tools are advancing core capabilities—such as multi-agent workflows, sandboxing, and session persistence—user expectations have shifted from novelty to production-grade resilience. A clear divide is emerging between platforms prioritizing enterprise integration (e.g., GitHub Copilot CLI, Qwen Code) and those pushing innovation in multimodal interaction and extensibility (e.g., Pi, OpenCode). The dominant theme across the landscape is a demand for **transparency, control, and predictability**, especially in agentic execution, cost management, and permission handling.

---

### **2. Activity Comparison**

| Tool | Hot Issues (Top 10) | PRs Merged (Last 24h) | Discussions | Releases (Last 24h) | Notes |
|------|---------------------|--------------------------|-------------|------------------------|-------|
| **Claude Code** | 10 | 10 | N/A | None | High issue volume; top priority: multi-account support and data loss prevention |
| **OpenAI Codex** | 10 | 10 | 5 | ✅ `rust-v0.174.0-alpha.9` | Active release cycle; desktop UX issues dominate |
| **Gemini CLI** | 10 | 10 | N/A | None | Focused on subagent architecture and context optimization |
| **GitHub Copilot CLI** | 10 | 0 | N/A | ✅ v1.0.118 series | Critical fixes in Fusion routing and sandbox policy |
| **OpenCode** | 10 | 10 | N/A | None | High free-tier instability; severe security regressions reported |
| **Pi** | 10 | 10 | 2 | ✅ v1.7.0 | Major leap in session resume; strong community momentum |
| **Qwen Code** | 10 | 10 | N/A | ✅ `sdk-typescript-v0.1.39` | CI/CD instability blocking progress; performance regression in v0.28.7 |

> **Note**: Tools using Discussions instead of Issues (e.g., Pi, OpenCode) report "N/A" for Issue count. OpenAI Codex and Pi are exceptions with active discussion threads.

---

### **3. Shared Feature Directions**

Across all seven tools, recurring feature demands reveal convergence on foundational requirements:

- **Multi-Account & Session Management**  
  *Tools:* Claude Code (#18435), OpenCode (#59387), Pi (#12637)  
  *Need:* Seamless switching between personal/professional profiles, secure credential isolation, and cross-device continuity.

- **Cost & Token Transparency**  
  *Tools:* Claude Code (#112458), Gemini CLI (#19561), OpenAI Codex (#64403), GitHub Copilot CLI (#5607)  
  *Need:* Pre-execution cost estimation, real-time budget tracking, and visibility into token consumption per task.

- **Security & Permission Control**  
  *Tools:* Claude Code (#112492), OpenCode (#66861), OpenAI Codex (#64416), Qwen Code (#18355)  
  *Need:* Explicit user consent before API/key access, safe sandbox enforcement, and zero-trust model adherence.

- **Agent Resilience & Context Management**  
  *Tools:* Gemini CLI (#17758), OpenCode (#66826), Qwen Code (#18489), Pi (#12483)  
  *Need:* Subagent resumability, background execution, compaction safety, and avoidance of infinite retry loops.

- **Cross-Platform Consistency**  
  *Tools:* OpenAI Codex (#54564), OpenCode (#57278), Qwen Code (#18486), Pi (#12606)  
  *Need:* Unified behavior across Windows/macOS/Linux; consistent path handling, shell quoting, and UI rendering.

---

### **4. Differentiation Analysis**

| Dimension | Key Differentiators |
|---------|---------------------|
| **Target Users** |  
- **Claude Code / OpenAI Codex**: Power users and individual developers focused on workflow efficiency.  
- **GitHub Copilot CLI / Qwen Code**: Enterprise teams and CI/CD-heavy environments requiring integration with GHE/GitHub, policy gates, and managed agents.  
- **Gemini CLI / OpenCode**: Research-oriented or experimental users building custom agent squads and tool chains.  
- **Pi**: Hybrid developers seeking seamless terminal session resume and multimodal input support.  

| **Feature Focus** |  
- **Claude Code**: Account switching, project isolation, and prompt fidelity.  
- **OpenAI Codex**: Desktop stability, TUI polish, and local command execution.  
- **Gemini CLI**: Agent architecture (subagents, async execution), context trimming.  
- **GitHub Copilot CLI**: Model routing transparency (Fusion tier), plugin reliability, and enterprise compatibility.  
- **OpenCode**: Security hardening, native tool chaining (`context.tool.call`), and Windows-specific robustness.  
- **Pi**: Terminal session resume, Web UI extension, and provider interoperability.  
- **Qwen Code**: Hosted agent scheduling, adversarial verification, and fail-closed security models.  

| **Technical Approach** |  
- **Gemini CLI / OpenCode / Pi**: Emphasis on modular, composable agents with explicit state and lifecycle control.  
- **Qwen Code / GitHub Copilot CLI**: Centralized orchestration with strict sandboxing and audit trails.  
- **OpenAI Codex / Claude Code**: Strong IDE integration, with incremental improvements to UI and local execution.  

---

### **5. Community Momentum & Maturity**

- **Highest Momentum**:  
  - **Pi** – Rapid iteration with v1.7.0 release introducing terminal session resume, coupled with vibrant Show & Tell discussions and high engagement in feature requests.  
  - **OpenCode** – Extremely active issue thread (#59387 with 417 comments); reflects passionate user base pushing for production readiness despite early-stage bugs.  
  - **OpenAI Codex** – Frequent alpha releases and high-quality PRs focused on security and platform stability.

- **Rapid Iteration (Enterprise-Focused)**:  
  - **Qwen Code** – Multiple open PRs addressing CI/CD, hosted agent scheduling, and adversarial verification—indicating deep engineering investment.  
  - **GitHub Copilot CLI** – Continuous patching of critical issues related to Fusion routing and credential pollution.

- **Mature but Stagnant**:  
  - **Claude Code** – High-quality issues and PRs, but no new releases in 24h; suggests stabilization phase after recent upgrade controversy.  
  - **Gemini CLI** – Solid technical progress on agent architecture, but lacks visible community engagement beyond issues.

> **Overall Trend**: The most mature tools (Copilot, Codex, Claude) are stabilizing core experiences, while newer entrants (Pi, OpenCode, Qwen) are aggressively innovating in agent design and extensibility.

---

### **6. Trend Signals**

1. **Agent Ecosystem Maturity is the Next Frontier**  
   Demand for *subagent configurability*, *resumability*, *async execution*, and *built-in expert agents* (Gemini CLI #15670, OpenCode #12711, Pi #12634) signals a shift from single-model assistants to orchestrated AI teams.

2. **Security & Trust Are Non-Negotiable**  
   Over 15% of top issues involve silent permission bypasses, credential leakage, or unauthorized API access (OpenCode #66861, Qwen Code #18370). This reflects a market where developers demand **zero-trust defaults** and **explicit consent**.

3. **Context Efficiency Is a Performance Bottleneck**  
   Features like *tactful extraction* (Gemini CLI #19561), *persistent task tracking* (Qwen Code #18836), and *token-aware compaction* are now standard concerns—not fringe optimizations—indicating that context bloat is a systemic challenge.

4. **Terminal-Centric Workflows Are Gaining Ground**  
   Pi’s session resume, OpenCode’s TUI enhancements, and Qwen Code’s CLI resilience show a growing preference for **native terminal integration** over browser-based interfaces, especially among DevOps and backend engineers.

5. **Hybrid Execution Models Are Emerging**  
   Projects like *Codexless* (OpenAI Codex) and *pi-config-palette* (Pi) demonstrate a move toward **local-first, cloud-offloading** patterns—reducing latency, cost, and dependency on external models.

---

### **Conclusion**

The AI CLI ecosystem has evolved from experimental prototyping to a production-ready infrastructure layer. Developers now expect **enterprise-grade reliability, granular control, and predictable costs**—not just speed or creativity. The most successful tools will be those that balance **innovation in agent architecture** with **pragmatic stability, security, and developer experience**. For technical decision-makers: prioritize tools with **active communities, transparent issue tracking, and proven CI/CD pipelines**—especially if you’re deploying in regulated or collaborative environments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-11-28 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

### **1. Top Skills Ranking** *(by community discussion & impact)*

1. **`proofcore-contract-auditor`** ([PR #1771](https://github.com/anthropics/skills/pull/1771))  
   *Functionality:* Automated static analysis of Solidity and Rust smart contracts with cryptographic proof anchoring on the TON Blockchain via ProofCore’s zero-storage Merkle protocol.  
   *Discussion Highlights:* High interest from Web3 developers; addresses trust and auditability in decentralized systems.  
   *Status:* Open (2026-09-15), awaiting review.

2. **`md2video-audio`** ([PR #1703](https://github.com/anthropics/skills/pull/1703))  
   *Functionality:* Converts Markdown documents into professional MP4 videos with human-like voiceovers using Marp for slide generation. Zero-cost, AI-native workflow.  
   *Discussion Highlights:* Seen as a powerful content creation tool for educators, creators, and technical documentation teams.  
   *Status:* Open (2026-09-01).

3. **`notion-spec-to-implementation`** ([PR #1245](https://github.com/anthropics/skills/pull/1245))  
   *Functionality:* Transforms product or tech specifications in Notion into actionable implementation tasks with acceptance criteria and progress tracking.  
   *Discussion Highlights:* Addresses a major gap in bridging design specs to execution—highly relevant for engineering and product teams.  
   *Status:* Open (2026-06-02).

4. **`scnet-hpc`** ([PR #1615](https://github.com/anthropics/skills/pull/1615))  
   *Functionality:* Enables SSH-based access and Slurm job management on SCNet HPC clusters with profile-driven workflows.  
   *Discussion Highlights:* Targets academic and research users needing reproducible HPC automation.  
   *Status:* Open (2026-08-20).

5. **`compact-memory`** ([Issue #1329](https://github.com/anthropics/skills/issues/1329))  
   *Functionality:* Introduces symbolic notation for compact agent state representation to reduce context bloat in long-running agents.  
   *Discussion Highlights:* Direct response to growing concerns about agent memory overhead; proposes a foundational efficiency improvement.  
   *Status:* Proposed (2026-06-17), no PR yet.

6. **`quantitative-resume-auditor`** ([PR #1245](https://github.com/anthropics/skills/pull/1245))  
   *Functionality:* Evaluates resumes quantitatively by analyzing structure, keyword density, and ATS compatibility.  
   *Discussion Highlights:* Fills a niche in job market preparation tools; seen as useful for both candidates and recruiters.  
   *Status:* Open (2026-06-02).

---

### **2. Community Demand Trends**

The community is increasingly focused on **workflow automation**, **specialized domain expertise**, and **AI system safety**:

- **Workflow Automation:** High demand for skills that automate end-to-end processes (e.g., `md2video-audio`, `notion-spec-to-implementation`, `scnet-hpc`).
- **Code & Documentation Quality:** Persistent interest in tools like `document-typography`, `pyxel`, and `resume-auditor` reflects a push for higher fidelity in AI-generated outputs.
- **Security & Trust:** The top-rated issue (#492) reveals deep concern over trust boundary abuse via impersonation in the `anthropic/` namespace—indicating demand for verified skill provenance and digital signatures.
- **Agent Governance & Safety:** Emerging trend with proposals like `agent-governance` and `reasoning-quality-gate-pipeline` showing appetite for structured safety patterns in autonomous agents.

---

### **3. High-Potential Pending Skills**

These open PRs are likely to be merged soon due to strong alignment with current trends and active community engagement:

- **`webapp-testing`: avoid shell=True** ([PR #1980](https://github.com/anthropics/skills/pull/1980))  
  *Fixes critical security risk (CWE-78) in command injection via `subprocess.Popen(shell=True)`.*  
  *High priority — already reviewed, minimal changes needed.*

- **`fix(skill-creator): parse YAML frontmatter scalars correctly`** ([PR #1997](https://github.com/anthropics/skills/pull/1997))  
  *Prevents metadata corruption in skill descriptions during parsing.*  
  *Critical for consistency in evaluation pipelines; small but impactful fix.*

- **`fix(xlsx): resolve worksheet-scoped defined names`** ([PR #2019](https://github.com/anthropics/skills/pull/2019))  
  *Addresses false negatives in Excel formula risk detection.*  
  *Highly relevant for enterprise data validation workflows.*

- **`docs: clarify document skills snapshot status`** ([PR #2108](https://github.com/anthropics/skills/pull/2108))  
  *Improves transparency around sync behavior and skill versioning.*  
  *Essential for user confidence in long-term skill management.*

---

### **4. Skills Ecosystem Insight**

The community's most concentrated demand is for **trustworthy, production-grade automation tools** that bridge high-level intent (e.g., “write a video,” “audit a contract”) with secure, reliable execution—especially in domains like Web3, HPC, and documentation where failure has real-world consequences.

---

**Claude Code Community Digest – 2026-11-28**

---

### **1. Today's Highlights**  
The community continues to prioritize robust session management, cross-platform stability, and granular control over AI behavior—evident in high-impact issues around account switching, token cost transparency, and model misbehavior in agentic workflows. A growing chorus calls for better project isolation, especially after the recent controversial upgrade that wiped out classic projects without opt-out.

---

### **2. Releases**  
*No new releases detected in the past 24 hours.*

---

### **3. Hot Issues**  

| Issue # | Title | Why It Matters | Community Reaction |
|--------|-------|----------------|--------------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Add ability to manage multiple Claude accounts in Desktop | Critical for power users managing personal/professional workloads; enables seamless profile switching | 260 comments, 1.1K upvotes — top-requested feature |
| [#101369](https://github.com/anthropics/claude-code/issues/101369) | Broken Projects upgrade wiped out classic projects | Major data loss concern: users lost private, structured chat folders with no warning or recovery path | 13 comments, 12 upvotes — reflects deep distrust in UI changes |
| [#108990](https://github.com/anthropics/claude-code/issues/108990) | Sonnet 5.5 ignores task on turn 1, emits runaway text | Indicates potential model-level instability in new versions; risks generating invalid code or hallucinations | 3 comments, 0 upvotes — urgent red flag for agentic workflows |
| [#112458](https://github.com/anthropics/claude-code/issues/112458) | Workflow launched 708 agents, used 68M tokens (45% of Ultra limit) | Highlights lack of cost estimation before execution; users face surprise billing | 1 comment, 0 upvotes — serious financial risk |
| [#112492](https://github.com/anthropics/claude-code/issues/112492) | Fable 5.2 used third-party API key without consent | Security breach risk: models accessing environment variables without prompts | 1 comment, 0 upvotes — triggers trust concerns |
| [#111552](https://github.com/anthropics/claude-code/issues/111552) | Long sessions upload >1MB per turn even for small continuations | Causes severe latency; indicates inefficient state transfer in long-running conversations | 3 comments, 0 upvotes — performance bottleneck |
| [#107851](https://github.com/anthropics/claude-code/issues/107851) | Let `start_session` run on message typed over Remote Control | Enables more natural workflow in remote development scenarios | 7 comments, 4 upvotes — niche but valuable UX improvement |
| [#103745](https://github.com/anthropics/claude-code/issues/103745) | Can’t add history chats to projects | Hinders reuse of prior context; breaks workflow continuity | 5 comments, 0 upvotes — frustration with project organization |
| [#97146](https://github.com/anthropics/claude-code/issues/97146) | Linux: `bashEditDiff` shows edits from concurrent sessions | Risk of edit conflicts and misattribution in collaborative environments | 11 comments, 8 upvotes — platform-specific reliability issue |
| [#112802](https://github.com/anthropics/claude-code/issues/112802) | GitHub integration fails to access private repo post-scheduled task | Breaks CI/CD automation pipelines; prevents secure repo access | 0 comments, 0 upvotes — urgent for DevOps users |

---

### **4. Key PR Progress**  

| PR # | Summary | Impact |
|------|--------|--------|
| [#106972](https://github.com/anthropics/claude-code/pull/106972) | Run dedupe agents in foreground | Prevents premature termination of background tasks; improves reliability of automated cleanup |
| [#112436](https://github.com/anthropics/claude-code/pull/112436) | Don’t mark reproducible/high-impact issues as stale | Protects critical bugs from being auto-closed; ensures visibility of impactful reports |
| [#112684](https://github.com/anthropics/claude-code/pull/112684) | Comment on issues when sweep marks them stale | Improves transparency and communication during triage cycles |
| [#103373](https://github.com/anthropics/claude-code/pull/103373) | Fix auto-denied `request_access` on Windows | Resolves a silent failure in Remote Control workflows |
| [#97044](https://github.com/anthropics/claude-code/pull/97044) | Fix OOM crashes in VS Code webview after large agent turns | Addresses memory leaks affecting productivity in IDEs |
| [#95800](https://github.com/anthropics/claude-code/pull/95800) | Fix LSP `documentSymbol` output dropping `selectionRange` | Restores accurate symbol navigation in codebases |
| [#107436](https://github.com/anthropics/claude-code/pull/107436) | Fix missing computer use approval prompt in Remote Control | Ensures user consent is respected during sensitive operations |
| [#103951](https://github.com/anthropics/claude-code/pull/103951) | Fix unreachable popup windows in Chrome | Fixes usability gap in browser-based Claude workflows |
| [#108851](https://github.com/anthropics/claude-code/pull/108851) | Non-interactive usage reset listing/redeeming | Enables headless automation of quota management via CLI/SDK |
| [#112800](https://github.com/anthropics/claude-code/pull/112800) | Restore sidebar slot for plugin mods (Windows) | Re-enables extensibility for custom UI enhancements |

---

### **5. Hot Discussions**  
*No discussion data provided.*

---

### **6. Feature Request Trends**  
The most recurring themes in feature requests are:

- **Multi-account support** (#18435): Users demand profile switching across devices and platforms.
- **Project & session control**: Requests for opt-out of coordinator memory, manual chat movement, and customizable sidebar styling (#102108, #112801, #112804).
- **Cost transparency**: Need for pre-execution cost estimates, non-interactive reset handling, and real-time budget tracking (#108851, #112458).
- **Cross-machine continuity**: Ability to resume sessions across devices via CLI handoff (#31992).
- **Security & permissions**: Demand for explicit user consent before using APIs, keys, or system resources (#112492, #112805).

These trends reflect a maturing developer base pushing for enterprise-grade control, accountability, and workflow portability.

---

### **7. Developer Pain Points**  
Recurring frustrations include:

- **Unintended data loss**: Classic projects erased during upgrades without warnings or rollback options (#101369).
- **Opaque costs**: Agentic workflows consuming massive token budgets without alerts (#112458, #109834).
- **Inconsistent behavior across platforms**: Regression bugs in Remote Control, shell commands, and desktop apps on Windows/macOS/Linux (#92276, #97146, #112803).
- **Poor error visibility**: Silent failures in authentication, file access, and permission flows (#103373, #107436, #112802).
- **Lack of customization**: Limited UI control over session grouping, visual cues, and sidebar layout (#102108, #112804).

These pain points highlight the need for greater transparency, configurability, and resilience in both the core product and its ecosystem.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex Community Digest – 2026-11-28**

---

### **1. Today's Highlights**  
The Codex team closed a batch of critical security and sandbox integrity PRs, focusing on cross-platform filesystem permission enforcement—especially in Windows and Linux sandboxes. Meanwhile, high-priority UI/UX bugs affecting Windows and macOS desktop apps (including missing input fields, flickering overlays, and session instability) continue to trend with strong community engagement, signaling growing friction in the desktop experience.

---

### **2. Releases**  
- **`rust-v0.174.0-alpha.9`** (Released: 2026-11-28)  
  This alpha release introduces foundational improvements to the CLI’s TUI rendering engine, including enhanced line-breaking logic for Markdown content and improved handling of inline code formatting. It also includes preliminary support for dynamic thread permission syncing between the TUI and server state, reducing discrepancies in user-facing access controls.

> 🔗 [GitHub Release: rust-v0.174.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.9)

---

### **3. Hot Issues**  

| Issue # | Title & Summary | Why It Matters | Community Reaction |
|--------|------------------|----------------|--------------------|
| [#45163](https://github.com/openai/codex/issues/45163) | TUI: startup-only palette cache leaves input unreadable after system light/dark changes | Affects readability across all TUI sessions post-theme switch; impacts accessibility and usability. | 39 comments, 46 👍 |
| [#54564](https://github.com/openai/codex/issues/54564) | [Windows] Cannot send messages in new Work threads — Send button remains disabled | Blocks core functionality in Work mode; users unable to initiate tasks despite visible UI elements. | 35 comments, 1 👍 |
| [#54989](https://github.com/openai/codex/issues/54989) | Windows: browser reports disabled in Work settings while Browser toggle is enabled | Frequent regression requiring app restart; undermines trust in local tooling. | 35 comments, 1 👍 |
| [#53278](https://github.com/openai/codex/issues/53278) | Codex Desktop on Windows applies networkAccess=false despite network access being enabled | Breaks local command execution and integration with external tools; serious workflow disruption. | 30 comments, 6 👍 |
| [#63869](https://github.com/openai/codex/issues/63869) | ChatGPT desktop app repeatedly displays "ChatGPT hit a snag" after loading home screen | Appears intermittently but returns without clear trigger; affects reliability on macOS. | 18 comments, 7 👍 |
| [#63093](https://github.com/openai/codex/issues/63093) | [macOS][Work] Local/cloud run selector missing when starting a new chat | Users can’t choose execution context, causing confusion and potential misbehavior. | 14 comments, 8 👍 |
| [#59344](https://github.com/openai/codex/issues/59344) | [Windows Desktop] Workspace routing fails during active use and persists after OAuth login | Leads to authentication loops and inaccessible workspaces; severe impact on productivity. | 13 comments, 1 👍 |
| [#59941](https://github.com/openai/codex/issues/59941) | CreateProcessSecurityEnvironment 0x8007000F blocks all local commands after update | Prevents even minimal commands from running; likely due to broken security policy propagation. | 11 comments, 0 👍 |
| [#64403](https://github.com/openai/codex/issues/64403) | app-server: stream disconnect reported as `other` instead of `responseStreamDisconnected` | Hinders client-side error detection and recovery logic; breaks observability. | 4 comments, 0 👍 |
| [#63463](https://github.com/openai/codex/issues/63463) | Idle Unity repo repeatedly cancels review-summary Git diffs; Git/LFS process buildup | Causes system slowdowns and resource exhaustion in large repositories. | 3 comments, 0 👍 |

---

### **4. Key PR Progress**  

| PR # | Summary | Impact |
|------|--------|--------|
| [#64416](https://github.com/openai/codex/pull/64416) | Honor declared filesystem permissions in Windows sandboxes | Fixes MXC volume expansion issues that bypassed directory restrictions. Critical for security compliance. |
| [#64415](https://github.com/openai/codex/pull/64415) | Preserve Linux sandbox restrictions across writable symlink aliases | Prevents parent mounts from overriding child deny rules—fixes privilege escalation risks. |
| [#64411](https://github.com/openai/codex/pull/64411) | Fit Agent Command Center grouping header to the panel | Improves UI layout in narrow views; prevents clipping in responsive interfaces. |
| [#64400](https://github.com/openai/codex/pull/64400) | Fix TUI Markdown line breaks before inline code | Resolves rendering bug where inline code merged into heading lines—improves readability. |
| [#64398](https://github.com/openai/codex/pull/64398) | Seal synthetic mounts in read-restricted Linux sandboxes | Prevents unauthorized modification of synthetic filesystems outside allowed paths. |
| [#64396](https://github.com/openai/codex/pull/64396) | Show confirmed thread permissions in TUI status | Aligns UI display with actual server-reported permissions—reduces user confusion. |
| [#64393](https://github.com/openai/codex/pull/64393) | Track server-confirmed thread permissions in the TUI | Ensures TUI reflects authoritative policy, not just local config. |
| [#64388](https://github.com/openai/codex/pull/64388) | Bind Linux sandbox paths before shell snapshot replay | Maintains correct `TMPDIR`/`HOME` semantics during environment replay—prevents path resolution errors. |
| [#64384](https://github.com/openai/codex/pull/64384) | Report pending startup dialogs through terminal program status | Enables terminal hosts to detect waiting states (e.g., directory trust prompts), improving automation support. |
| [#64341](https://github.com/openai/codex/pull/64341) | Persist command completions when approval is declined or fails | Prevents loss of completed command history upon rejection—preserves audit trail and debugging context. |

---

### **5. Hot Discussions**  

#### **Ideas**
- [#12567](https://github.com/openai/codex/discussions/12567) **Memories in Codex**  
  > *“How much would you need Codex to cite past threads?”*  
  44 comments, 14 👍 — Users are split between wanting deeper contextual memory (4–5/5) vs. privacy-preserving minimalism. Suggests demand for configurable memory retention.
  
- [#64264](https://github.com/openai/codex/discussions/64264) **Keeping long-running conversations on track**  
  > *“How do we maintain focus while exploring tangents?”*  
  1 comment, 1 👍 — Early-stage idea highlighting a real pain point in complex development workflows.

#### **Show and Tell**
- [#38868](https://github.com/openai/codex/discussions/38868) **Codexless**  
  > *“Reuse local Codex capabilities inside ChatGPT, call full Codex only when needed.”*  
  Open-source project enabling hybrid agent workflows. Seen as a promising pattern for efficiency and reduced overhead.

- [#64414](https://github.com/openai/codex/discussions/64414) **Keep noisy test output out of Codex context while retaining evidence**  
  > *“Capture once, retrieve later” via sidecar tool.*  
  Practical solution for managing test logs without cluttering conversation context—ideal for CI/CD integrations.

- [#64280](https://github.com/openai/codex/discussions/64280) **Agent Cat**  
  > *Free menu bar/tray monitor for Codex CLI quota and run state.*  
  Popular utility offering real-time visibility into API usage—addresses a common gap in local monitoring.

#### **Q&A**
- [#64406](https://github.com/openai/codex/discussions/64406) **Go subscription in codex**  
  > *“Does Go subscription offer more usage than free version?”*  
  1 comment, 1 👍 — Indicates growing curiosity about tiered access and usage limits, especially around advanced features.

---

### **6. Feature Request Trends**  
From recent issues and discussions, the most prominent feature directions include:
- **Enhanced UX in desktop clients**: Consistent UI behavior, reliable input fields, and stable session persistence.
- **Improved sandbox security and transparency**: Clearer permission reporting, better handling of file system policies, and prevention of privilege escalation.
- **Hybrid agent models**: Demand for lightweight local execution (`Codexless`) with selective offloading to full agents.
- **Context management**: Tools to preserve evidence (e.g., test logs) without polluting conversation history.
- **Memory and continuity**: User-driven interest in persistent, intelligent recall of prior interactions—balanced with privacy controls.

---

### **7. Developer Pain Points**  
Recurring frustrations include:
- **Desktop instability on Windows and macOS**: Frequent crashes, invisible UI elements (e.g., composer disappearing), and unresponsive inputs.
- **Permission inconsistencies**: Mismatch between UI indicators and actual runtime access (e.g., browser toggles showing enabled but blocked).
- **Local command execution failures**: Especially after updates (e.g., `CreateProcessSecurityEnvironment` errors).
- **Missing or broken control surfaces**: Loss of key selectors (e.g., local/cloud run, plan mode cards) without explanation.
- **Poor error messaging**: Stream disconnects labeled as `"other"` instead of specific codes, hindering diagnostics.
- **Resource bloat**: Uncontrolled process growth during Git operations in large repos (e.g., Unity projects).

These patterns suggest a need for deeper platform-specific testing, improved error telemetry, and stronger validation of user interface state against backend reality.

---  
*Digest generated: 2026-11-28 | Source: [openai/codex GitHub](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-11-28

---

### **1. Today's Highlights**  
The Gemini CLI community continues to focus on advancing agent architecture and security, with significant progress in subagent resilience, async execution, and sandbox robustness. Notably, the team is actively addressing critical hangs in the generalist agent (Issue #21409) and refining context management through tactical extraction and improved task tracking.

---

### **2. Releases**  
*No new releases in the past 24 hours.*

---

### **3. Hot Issues**  
*(Top 10 by comment count and impact)*

1. **[P1] Generalist Agent Hangs Forever** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
   *Why it matters:* A critical UX blocker where `gemini-cli` freezes indefinitely when deferring to the generalist agent. Users report waiting up to an hour before cancellation. High 👍 (8), indicating widespread frustration.  
   *Status:* Needs retesting; flagged as a priority P1 bug.

2. **[P2] Leverage Model’s Bash Affinity via Zero-Dependency OS Sandboxing** [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)  
   *Why it matters:* Aligns with Gemini 3’s native bash proficiency. Enables secure, efficient use of POSIX tools without dependency overhead. Major architectural shift for agent efficiency.  
   *Community reaction:* 9 comments, high interest from maintainers.

3. **[P2] Agent Should Run Changes to Validate App** [#17110](https://github.com/google-gemini/gemini-cli/issues/17110)  
   *Why it matters:* Addresses non-determinism in LLMs by enabling self-validation loops—critical for reliable AI coding.  
   *Community reaction:* 6 comments, seen as foundational for trustable agents.

4. **[P2] Subagent Resumability & Persistence** [#17758](https://github.com/google-gemini/gemini-cli/issues/17758)  
   *Why it matters:* Ensures work isn’t lost across sessions—essential for long-term project workflows.  
   *Community reaction:* 3 comments, marked as “need information” but high strategic value.

5. **[P2] Async & Background Execution of Subagents** [#17754](https://github.com/google-gemini/gemini-cli/issues/17754)  
   *Why it matters:* Allows non-blocking execution, improving responsiveness. Key enabler for parallel agent workflows.  
   *Community reaction:* 2 comments, part of larger async execution epic.

6. **[P2] Built-in Agents Epic** [#17762](https://github.com/google-gemini/gemini-cli/issues/17762)  
   *Why it matters:* Standardizing reusable expert agents (e.g., validators, test runners) improves developer onboarding and tool reliability.  
   *Community reaction:* 2 comments, requires behavioral evaluation.

7. **[P2] Codebase Investigator Fails to Initialize** [#17648](https://github.com/google-gemini/gemini-cli/issues/17648)  
   *Why it matters:* Core investigation functionality broken due to schema validation failure—impacts code navigation and planning.  
   *Community reaction:* 2 comments, needs immediate triage.

8. **[P2] Tactful Extraction for Token-Frugal Surgical Reads** [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)  
   *Why it matters:* Directly targets context bloat—current reads add +15k tokens per turn. This feature aims to reduce token cost via smart filtering.  
   *Community reaction:* 2 comments, high relevance to performance.

9. **[P3] Replace WriteToDo with Persistent File-Based Task Tracking** [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)  
   *Why it matters:* Solves “context rot” and session loss by moving task state outside prompt history.  
   *Community reaction:* 2 comments, clear need for persistence.

10. **[P2] Standardizing Reusable Intelligence: Native Sub-agent Architecture** [#15670](https://github.com/google-gemini/gemini-cli/issues/15670)  
    *Why it matters:* Proposes a squad model where the main agent orchestrates domain-specific experts—foundational for scalable AI development.  
    *Community reaction:* 3 comments, strong conceptual appeal.

---

### **4. Key PR Progress**  
*(Top 10 by priority and impact)*

1. **[P1] Fix CI Release Patch Comment Auth** [#30503](https://github.com/google-gemini/gemini-cli/pull/30503)  
   *Fixes:* Authentication issues in release patch comments. Ensures automated release pipelines function correctly.

2. **[P1] Respect YOLO Mode in Taint & Build Checks** [#30268](https://github.com/google-gemini/gemini-cli/pull/30268)  
   *Fixes:* Prevents false positives during `--approval-mode=yolo` runs. Critical for headless, autonomous workflows.

3. **[P2] Improve Sandbox Permission Denial Detection** [#30277](https://github.com/google-gemini/gemini-cli/pull/30277)  
   *Fixes:* Better handling of permission errors in restricted environments (e.g., containers). Enhances sandbox reliability.

4. **[P2] Unify Exit Codes Mapping** [#30273](https://github.com/google-gemini/gemini-cli/pull/30273)  
   *Fixes:* Centralizes fatal error exit codes, reducing inconsistency across components.

5. **[P1] Honor Fetch Timeouts on Node 26** [#30281](https://github.com/google-gemini/gemini-cli/pull/30281)  
   *Fixes:* Upgrades Undici to v7.30.2 to support Node 26’s built-in fetch symbols. Ensures compatibility with latest runtime.

6. **[P1] Detect Local Git Clone Installation Correctly** [#30267](https://github.com/google-gemini/gemini-cli/pull/30267)  
   *Fixes:* Stops unintended global auto-updates during local source checks. Improves installation stability.

7. **[P2] Preserve Trimmed Function Call Names in History** [#30279](https://github.com/google-gemini/gemini-cli/pull/30279)  
   *Fixes:* Prevents `INVALID_ARGUMENT` errors caused by whitespace in function names. Fixes #30256.

8. **[P1] Explain Gemini API Fetch Failures** [#30278](https://github.com/google-gemini/gemini-cli/pull/30278)  
   *Improvement:* Adds network troubleshooting guidance for pre-response failures. Reduces debugging friction.

9. **[P2] Normalize CRLF Line Endings in Diff Computation** [#30489](https://github.com/google-gemini/gemini-cli/pull/30489)  
   *Fixes:* Prevents false diff changes due to line ending mismatches. Matches behavior in `edit.ts`.

10. **[P2] Honor Abort Signal in Background Output Reads** [#30498](https://github.com/google-gemini/gemini-cli/pull/30498)  
    *Fixes:* Ensures background output streams respond promptly to `AbortSignal`, improving responsiveness.

---

### **5. Hot Discussions**  
*No discussion threads provided in the data source.*

---

### **6. Feature Request Trends**  
The community is converging on three core directions:

1. **Agent Ecosystem Maturity**  
   - Demand for *subagent configurability*, *resumability*, *async execution*, and *built-in agent templates*.  
   - Desire for a standardized, reusable "Squad Model" (Issue #15670).

2. **Context & Performance Optimization**  
   - Push for *tactful extraction*, *context trimming*, and *persistent task tracking* to reduce token bloat and improve efficiency.

3. **Security & Developer Experience**  
   - Focus on *zero-dependency sandboxing*, *machine-to-machine auth (OAuth 2.0)*, and *YOLo mode consistency* for safe, autonomous workflows.

---

### **7. Developer Pain Points**  
Recurring frustrations include:

- **Agent Stability:** The generalist agent hanging indefinitely (#21409) remains a top pain point.
- **Context Management:** Inconsistent task tracking leads to “context rot” and high token costs (issues #18836, #21420).
- **Installation & Environment Confusion:** Misclassification of local vs. global installs triggers unwanted auto-updates (#30267).
- **Tool Validation Gaps:** Missing confirmation blocking for async subagents (#17756) and lack of deep validation options (#21418).
- **Sandbox Limitations:** Permission denial detection fails in containerized environments (#30277), and agent initialization breaks silently (#17648).

These points highlight growing demand for more robust, predictable, and user-friendly agent orchestration in production-grade AI development workflows.

---  
*Digest generated from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — Data as of 2026-11-28.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-11-28**

---

### **1. Today's Highlights**  
The latest release, **v1.0.118**, introduces critical fixes for sandbox policy visibility, prompt history navigation, and CA certificate trust in proxy environments. Notably, users now see detailed reasoning effort and context tier in subagent task footers, improving transparency during complex workflows. Meanwhile, multiple high-impact issues highlight persistent challenges around Copilot Fusion routing, agent plugin discovery, and session stability—especially under enterprise and cross-platform conditions.

---

### **2. Releases**  
**v1.0.118-2, v1.0.118-1, v1.0.118-0 (2026-11-27)**  
- ✅ Fixed: Up/Down arrow navigation after `Ctrl+R` search no longer applies hidden suggestions.  
- ✅ Fixed: Concurrent `copilot mcp enable/disable` commands now preserve MCP server state.  
- ✅ Enhanced: `/sandbox policy` now displays paths to trusted CA certificates from both user and managed settings.  
- ✅ Added: Reasoning effort and context tier shown in `/tasks` footer for nested subagents.  
- ✅ Improved: Detailed transcript now includes match counts for prompt matches.  

**v1.0.117 (2026-11-27)**  
- 🛠️ Added: `sandbox.userPolicy.network.extraCaCertificates` support for custom TLS-intercepting proxies.  
- 🛠️ Added: Explicit tool exposure mechanism for custom agents to opt into tools.  
- 🛠️ Fixed: Page Down key no longer stalls at pinned prompts in long sessions.

👉 [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.118)

---

### **3. Hot Issues**  
| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#5354](https://github.com/github/copilot-cli/issues/5354) *ACP doesn’t advertise Copilot Fusion tier* | Blocks ACP clients like T3 Code from showing Fusion or tier selection, undermining UX parity between interactive and non-interactive modes. | 🔥 12 👍, active discussion on model routing transparency |
| [#5589](https://github.com/github/copilot-cli/issues/5589) *CLI ignores commit instructions despite rejections* | Shows a core failure in instruction adherence—critical for code quality and compliance. | ❗ High concern; indicates rule-following breakdown |
| [#5607](https://github.com/github/copilot-cli/issues/5607) *Reasoning models compact due to stale token counting* | Causes frequent session compaction in tool-heavy workflows, hurting performance and context retention. | ⚠️ Reported by BYO-key users; impacts advanced AI workflows |
| [#5604](https://github.com/github/copilot-cli/issues/5604) *ACP ignores `fusionTier=high`, defaults to Standard* | Undermines the value of setting high-tier fusion—same prompt behaves differently across modes. | 🔥 10+ developers report inconsistent behavior |
| [#5571](https://github.com/github/copilot-cli/issues/5571) *Updater fails with GHE-only login: missing token* | Blocks enterprise users on GHE.com domains from updating, creating security and maintenance gaps. | 🛠️ Workaround exists but not ideal; urgent for enterprise adoption |
| [#5606](https://github.com/github/copilot-cli/issues/5606) *User extensions don’t start in PR-linked sessions* | Breaks extension integration in collaborative workflows—common in pull request automation. | 💡 Critical for CI/CD and team workflows |
| [#5605](https://github.com/github/copilot-cli/issues/5605) *Fork PRs ignore `maintainer_can_modify` flag* | Prevents maintainers from editing forked PRs—a workflow blocker in open-source contributions. | 📌 Seen as a regression in GitHub collaboration flow |
| [#5591](https://github.com/github/copilot-cli/issues/5591) *Copilot floods Windows Credential Manager* | Causes credential write failures for other apps (e.g., Azure CLI), breaking dev toolchains. | ⚠️ Severe system-level impact; reported by multiple users |
| [#5593](https://github.com/github/copilot-cli/issues/5593) *Sandbox blocks `git submodule update` even when no-op* | Breaks build pipelines in monorepos—regression from v1.0.99-2. | 🔥 Major pain point for Git-based projects |
| [#5588](https://github.com/github/copilot-cli/issues/5588) *Cypress crashes in macOS sandbox* | Hinders testing automation; affects teams using end-to-end test frameworks. | 🧪 High priority for QA and DevOps teams |

---

### **4. Key PR Progress**  
*(No new PRs merged in last 24h)*  
➡️ **Pending**: Several critical fixes are awaiting review, including:
- Fix for `gemini-4-neon` idle timeout on large tool calls ([#5590](https://github.com/github/copilot-cli/issues/5590))  
- Resolution for Entra broker sign-in caching failure on macOS ([#5600](https://github.com/github/copilot-cli/issues/5600))  
- Patch for AHP connection retry loop without backoff ([#5594](https://github.com/github/copilot-cli/issues/5594))

---

### **5. Hot Discussions**  
*No discussions were provided in the dataset.*

---

### **6. Feature Request Trends**  
The most recurring feature directions from Issues include:  
- **Enhanced Model Transparency**: Users demand visible control over model routing (e.g., Fusion tier visibility via ACP).  
- **Plugin & Extension Reliability**: Consistent loading of `.instructions.md`, hooks, and tools across sessions and platforms.  
- **Enterprise-Grade Stability**: Better handling of GHE, managed policies, and credential management (e.g., avoiding credential vault exhaustion).  
- **Session Persistence & State Management**: Fixes for large session corruption, `getMessages` hangs, and RPC failures.  
- **Cross-Platform Consistency**: Unified behavior across Windows, macOS, and Linux—especially around file paths, permissions, and sandboxing.

---

### **7. Developer Pain Points**  
Top recurring frustrations include:  
- **Inconsistent Behavior Across Modes**: Same prompt routed differently in `--acp` vs `-p` (e.g., Fusion ignored despite config).  
- **Sandbox Overreach**: Denying safe operations like `git submodule update` or `cypress run` even when explicitly allowed.  
- **Credential Pollution**: Copilot CLI flooding Windows Credential Manager, blocking other tools.  
- **Tool Call Instability**: Long-running tool calls failing due to timeouts or incomplete responses (e.g., Gemini 4 Neon).  
- **Missing Feedback Loops**: No observability on why notifications are dropped, hooks fail, or model responses are filtered.  
- **Configuration Reload Lag**: Changes to `settings.json` or `hooks` require full CLI restart—no hot-reload support.

---

*Stay tuned for next week’s digest. Report issues at [github.com/github/copilot-cli/issues](https://github.com/github/copilot-cli/issues).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# **OpenCode Community Digest – 2026-11-28**

---

### **1. Today's Highlights**  
The OpenCode community is actively addressing critical stability and usability issues in v2.4.x, particularly around subagent behavior, TUI reliability, and free-tier limitations. Key PRs today focus on core improvements: better tool invocation via `context.tool.call`, safer MCP connection pooling, and enhanced Windows support—signaling a strong push toward production readiness ahead of the next major release.

---

### **2. Releases**  
No new releases were published in the last 24 hours.

---

### **3. Hot Issues**  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) [OPEN] Free tier issues: read this first… | A top-priority pain point affecting thousands; reports of expired quotas not resetting, broken UI states, and misleading error messages. Critical for user retention and trust. | **417 comments**, **31 likes** – one of the most active threads; users report widespread impact across platforms. |
| [#66555](https://github.com/anomalyco/opencode/issues/66555) [OPEN] Critical Regression | A deliberate change broke foreground subagent execution, causing excessive context pollution and session wakeups. This regressed performance and UX after v2.3.2. | **6 comments**, **0 likes** – flagged as a *critical regression*, indicating urgent need for rollback or fix. |
| [#66826](https://github.com/anomalyco/opencode/issues/66826) [OPEN] compaction: background summary drops unconsumed tool-result images | Causes repeated image re-downloads due to silent data loss during auto-compaction, degrading performance and increasing API costs. | **4 comments**, **0 likes** – technical depth suggests high impact on long-running sessions. |
| [#66861](https://github.com/anomalyco/opencode/issues/66861) [CLOSED] TUI: "ask" permissions silently allowed without prompt | Security-critical regression: tools like `shell` and `webfetch` now execute without user consent in v2.4.x. A direct threat to safe execution. | **3 comments**, **0 likes** – resolved quickly post-discovery; highlights risk of silent permission bypasses. |
| [#66824](https://github.com/anomalyco/opencode/issues/66824) [CLOSED] Esc key deletes multiple messages and ruins sessions | High-severity UX bug: pressing `Esc` can erase large portions of conversation history, breaking session continuity. | **3 comments**, **0 likes** – closed with fix; underscores fragility in interrupt handling. |
| [#66840](https://github.com/anomalyco/opencode/issues/66840) [OPEN] Inkling 2 mini unable to call `edit` tool | Model-specific failure where Inkling 2 mini loops endlessly calling `shell` instead of `edit`, suggesting prompt or tool routing misalignment. | **5 comments**, **0 likes** – raises concerns about model compatibility and prompt engineering. |
| [#66534](https://github.com/anomalyco/opencode/issues/66534) [OPEN] TUI: /sessions drops pinned sessions outside current page | Loss of essential navigation feature from v1.x — breaks workflow for power users managing many sessions. | **4 comments**, **0 likes** – shows erosion of legacy functionality in newer versions. |
| [#54220](https://github.com/anomalyco/opencode/issues/54220) [OPEN] codemode: execute and plugin tool calls have no timeout | Long-running plugins can block entire sessions indefinitely, requiring manual interruption. Risky for untrusted or slow tools. | **5 comments**, **1 like** – high concern for safety and session health. |
| [#57278](https://github.com/anomalyco/opencode/issues/57278) [OPEN] Git Bash alters shell commands on Windows | Command parsing discrepancies between Node/Bun and Git Bash cause subtle but dangerous script execution differences. | **3 comments**, **0 likes** – platform-specific edge case with real-world consequences. |
| [#66771](https://github.com/anomalyco/opencode/issues/66771) [OPEN] shell: permission scanner misses nested-shell quote mangling | Dangerous command injection risk: `cmd /c "rmdir /s /q \"$p\""` becomes `rmdir /s /q C:\` — could delete root drive. | **3 comments**, **0 likes** – severity marked high; requires immediate attention. |

---

### **4. Key PR Progress**  

| PR | Summary | Impact |
|----|--------|--------|
| [#66927](https://github.com/anomalyco/opencode/pull/66927) fix(core): return whole lines from read and show grep matches in long lines | Fixes JSON corruption caused by truncated line markers being written back into files. | Prevents silent data loss during file edits. |
| [#66928](https://github.com/anomalyco/opencode/pull/66928) refactor(core): register Code Mode's execute tool from a plugin | Decouples `execute` from core logic; enables future extensibility and dynamic tooling. | Improves modularity and maintainability. |
| [#66923](https://github.com/anomalyco/opencode/pull/66923) fix(core): keep MCP needs_auth and event follows through connection teardown | Resolves lifecycle bugs in MCP service that could break authentication and event flow. | Enhances reliability of remote agent communication. |
| [#66875](https://github.com/anomalyco/opencode/pull/66875) feat(cli-rs): find in session, and TUI fixes since #66776 | Brings powerful search (via `/find`) to Rust CLI and patches several TUI rendering issues. | Boosts productivity for CLI users and stabilizes interface. |
| [#66546](https://github.com/anomalyco/opencode/pull/66546) fix(desktop): give macOS main executable its own LC_UUID | Solves privacy tracking issue on macOS where all Electron apps share the same UUID. | Improves compliance with Apple’s privacy policies. |
| [#66920](https://github.com/anomalyco/opencode/pull/66920) feat(tui): pin expanded activity summary | Keeps important summaries visible at the top of transcripts even after expansion. | Enhances readability in complex sessions. |
| [#66229](https://github.com/anomalyco/opencode/pull/66229) feat(core): stop a subagent's Claude process once it goes idle | Reduces memory bloat (up to 200MB per subagent) by terminating idle processes. | Critical for resource efficiency in multi-agent workflows. |
| [#66912](https://github.com/anomalyco/opencode/pull/66912) feat(core): support native Windows machine workers on the home | Enables full Windows path and shell awareness (`C:\`, `cmd.exe`) in machine-worker contexts. | Expands cross-platform capabilities for local agents. |
| [#66919](https://github.com/anomalyco/opencode/pull/66919) feat(core): let tools call other tools through context.tool.call | Enables tools to invoke other tools safely and consistently via `context.tool.call`. | Foundational for building modular, composable AI agents. |
| [#66924](https://github.com/anomalyco/opencode/pull/66924) feat(core): enable opencode api in dev by default | Makes API available out-of-the-box in development builds, improving debugging and integration. | Streamlines local SDK usage and testing. |

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**  
Top-requested directions from issues include:
- **Multi-agent coordination**: Parallel, named teams with shared state and messaging (#12711).
- **Enhanced project management**: Delete projects and clear recent entries (#51197).
- **Better multi-repo change tracking**: Track Git status across workspace subdirectories (#45498).
- **Improved security & control**: Fine-grained tool permissions, timeouts, and explicit user prompts (#66861, #54220).
- **Cross-platform consistency**: Fix Windows-specific quirks (Git Bash, DriveCrypt, shell quoting) (#57278, #66771, #64905).
- **TUI enhancements**: Restore legacy behaviors (pinning, Ctrl+F), fix rendering (Mermaid, bold tags) (#66534, #66773).

---

### **7. Developer Pain Points**  
Recurring frustrations include:
- **Free-tier instability**: Quotas not resetting, misleading errors, and lack of transparency.
- **Unpredictable subagent behavior**: Depth limits ignored, tools advertised beyond limits, and background-only execution causing context pollution.
- **Security gaps**: Silent tool execution (`ask` permissions bypassed), dangerous shell command munging.
- **Session fragility**: Esc key crashes, long-running tasks blocking sessions, and corrupted history.
- **Platform inconsistencies**: Especially on Windows (path handling, Git Bash, DriveCrypt drives).
- **Missing developer tools**: No API to delete projects, poor debug visibility in CLI (`session import` errors without stack traces).

---

*Stay informed: Follow [@anomalyco](https://github.com/anomalyco) and track issues via [GitHub](https://github.com/anomalyco/opencode).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# **Pi Community Digest – 2026-11-28**

---

### **1. Today's Highlights**  
The Pi ecosystem saw a major leap in session continuity with the release of **v1.7.0**, introducing **terminal session resume**—enabling users to restore their full coding context, tool setup, and instructions after a restart. Meanwhile, community momentum is building around multimodal support, with growing demand for video/audio input via the `prompt` RPC command, and developers are actively refining AI provider compatibility, especially for Google Vertex and OpenRouter.

---

### **2. Releases**  
**v1.7.0**  
- ✅ **Terminal Session Resume**: Compatible terminals can now reopen a Pi session post-restart with preserved profile, tool restrictions, and instructions.  
  🔗 [Docs: Terminal Session Resume](https://github.com/earendil-works/pi/blob/v1.7.0/packages/coding-agent/docs/terminal-setup.md#program-resume)

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#3200](https://github.com/earendil-works/pi/issues/3200) | Request to extend `prompt` RPC to support video/audio inputs (like images), enabling true multimodal interaction with models like Gemma 4 and GPT-4o. | 📌 13 comments, 8 👍 — High demand for next-gen multimodal workflows. |
| [#12633](https://github.com/earendil-works/pi/issues/12633) | OpenAI policy violations aren’t auto-retried, causing silent failures. Users report getting blocked without recovery paths. | ⚠️ Critical P0 concern; highlights need for robust error resilience. |
| [#12483](https://github.com/earendil-works/pi/issues/12483) | Failed auto-compaction triggers endless retry loops due to token limit errors. Risk of infinite work cycles. | 🔥 P0 bug; warns of system instability under long sessions. |
| [#12594](https://github.com/earendil-works/pi/issues/12594) | Codemode drops truncation notices from long tool outputs, leading to model unawareness of content cutoff. | ❗ Major reasoning integrity issue; affects correctness in large-scale tasks. |
| [#12637](https://github.com/earendil-works/pi/issues/12637) | Gemini 3+ returns `400 INVALID_ARGUMENT` because URL-safe base64 `thoughtSignature`s are rejected by current validation. | 💥 Breaking issue for enterprise proxy users; urgent fix needed. |
| [#12575](https://github.com/earendil-works/pi/issues/12575) | No wall-clock time on TUI messages — users cannot track turn age or timing. | 📅 UX pain point; essential for debugging and collaboration. |
| [#12585](https://github.com/earendil-works/pi/issues/12585) | GitHub Copilot Fusion not supported despite official Pi integration. | 🛠️ Frustration over incomplete Copilot ecosystem access. |
| [#12580](https://github.com/earendil-works/pi/issues/12580) | Chokidar creates unbounded `fs.watch` handles on deep directory trees, risking file descriptor exhaustion. | ⚠️ Performance hazard in large repos (e.g., Unity/.NET projects). |
| [#12606](https://github.com/earendil-works/pi/issues/12606) | `nativeToolChanges` unreachable due to strict `messages[0]` system message requirement. | 🧩 Blocks mid-conversation tool updates on Anthropic-compatible models. |
| [#12632](https://github.com/earendil-works/pi/issues/12632) | Virtual model triggers compaction even on empty sessions when routed to smaller models. | 🔄 Systemic flaw in context management logic. |

---

### **4. Key PR Progress**  

| PR | Summary | Status |
|----|--------|--------|
| [#12635](https://github.com/earendil-works/pi/pull/12635) | Fixes Chord process locks on macOS/BSDs that persist after signal kills. | ✅ Merged |
| [#12609](https://github.com/earendil-works/pi/pull/12609) | Ensures `$` symbol is preserved in exported HTML cost display (fixes #12608). | ✅ Merged |
| [#12634](https://github.com/earendil-works/pi/pull/12634) | Detects WSL environment without relying on WSL-specific env vars. | ✅ Merged |
| [#12623](https://github.com/earendil-works/pi/pull/12623) | Caps nested codemode call rows to prevent V8 OOM crashes during heavy RPC retries. | ✅ Merged |
| [#12543](https://github.com/earendil-works/pi/pull/12543) | Adds `AGENTS.local.md` support in agent loading order (after override, before default). | ✅ Merged |
| [#12479](https://github.com/earendil-works/pi/pull/12479) | Implements stateless MCP protocol `2026-07-28`, enabling ephemeral connections. | 🟡 In-progress (Refs #10416) |
| [#12611](https://github.com/earendil-works/pi/pull/12611) | Adds `ctyun-token-plan` as built-in provider with OpenAI-compatible models. | ✅ Merged |
| [#12610](https://github.com/earendil-works/pi/pull/12610) | Enables auto-reload of agent/project resources on file change (no `/reload` needed). | ✅ Merged |
| [#12628](https://github.com/earendil-works/pi/pull/12628) | Adds “Reference artifacts” section linking to Radius Discord deck & product specs. | ✅ Merged |
| [#12535](https://github.com/earendil-works/pi/pull/12535) | Introduces `pi-image` API for unified image generation across providers. | ✅ Merged |

---

### **5. Hot Discussions**  

#### **Show and Tell**  
- [#12629](https://github.com/earendil-works/pi/discussions/12629): **pi-config-palette** — A toggle UI for skills, extensions, tools, and MCP, allowing real-time config changes without leaving the session.  
  🔧 Install: `pi install npm:pi-config-palette` → `/config-palette`.  
  👏 Developer love: simple, powerful, and highly usable.

#### **Ideas**  
- Proposal: Add browser-based Web UI (`pi --web port 3000`) for non-CLI users.  
  🌐 Potential for broader accessibility and integration with IDEs.
- Request: Allow extension registration of editor/footer components *before* first paint.  
  🛠️ Needed for dynamic UI rendering and early component hydration.

---

### **6. Feature Request Trends**  
The community is converging on several key directions:  
- **Multimodal Expansion**: Strong demand for video/audio support in prompts (via `prompt` RPC).  
- **Session Persistence & Resumption**: Core focus on resuming terminal sessions seamlessly.  
- **Provider Interoperability**: Push for better support across Google Vertex, OpenRouter, CTYUN Token Plan, and Copilot Fusion.  
- **Developer Experience**: Auto-reload on file change, pre-paint UI hooks, and improved TUI metadata (timestamps, costs).  
- **Extensibility**: More public hooks for MCP extensions, especially for file transfer and lifecycle control.

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- 🔁 **Infinite loop risks** from failed auto-compactions (especially with CJK-heavy, high-token sessions).  
- 🧩 **Tool schema normalization issues** with OpenAI-compatible providers (missing `required` fields in object schemas).  
- 📉 **Context loss** due to dropped truncation notices in codemode workflows.  
- 🖥️ **TUI limitations**: Missing timestamps, broken cost display (`$` missing), and visual overlay bugs (e.g., "Jump to latest" hidden under images).  
- ⚙️ **Hardcoded dependencies**: Node.js version pinning (NixOS) and lack of runtime config hooks hinder plugin flexibility.

---

> *Stay tuned for v1.7.1 — expected to address compaction stability and provider normalization.*  
> 🔗 [GitHub: earendil-works/pi](https://github.com/earendil-works/pi)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-11-28

---

## **Today's Highlights**

The Qwen Code ecosystem saw a surge in CI/CD instability, with multiple E2E and managed agent gate failures blocking main branch progress. The latest `sdk-typescript-v0.1.39` release bundles CLI v0.28.7, but performance regressions in `v0.28.7`—notably event-loop freezes during worktree retention—are raising alarms among long-running session users. Meanwhile, significant architectural proposals around hosted harness pull scheduling and session management are gaining traction.

---

## **Releases**

- **`sdk-typescript-v0.1.39`** (Released: 2026-11-28)  
  Bundles CLI version **v0.28.7**, built from the same branch/ref as the SDK. No detailed changelog provided, but this release coincides with critical performance issues reported in `v0.28.7`.

---

## **Hot Issues**

| Issue # | Title | Why It Matters | Community Reaction |
|--------|-------|----------------|--------------------|
| [#18342](https://github.com/QwenLM/qwen-code/issues/18342) | Main CI failed: E2E Tests — no test identified | Blocks PR merges; indicates potential test discovery or pipeline misconfiguration. High comment count suggests urgency. | 🔥 61 comments |
| [#18252](https://github.com/QwenLM/qwen-code/issues/18252) | Main CI failed: E2E Tests — cli/cron-tools.test.ts > should have cron tools registered by default | Critical regression in core functionality; likely breaks scheduled tasks. Indicates flaky or broken test setup. | 🔥 58 comments |
| [#18258](https://github.com/QwenLM/qwen-code/issues/18258) | Managed Agent gate — HostedMonitorRunFaultGatesIT.fg8cProcessCrashesNeverDuplicateOrFabricateOnMySql | Affects reliability of fault detection in hosted agents; could lead to data inconsistency or missed crash recovery. | 🔥 38 comments |
| [#18541](https://github.com/QwenLM/qwen-code/issues/18541) | feat(serve): allow branch/fork for trusted secondary-workspace sessions | Enables flexible session branching—key for collaborative workflows. Follow-up to high-demand feature (#7014). | 💬 3 comments |
| [#18489](https://github.com/QwenLM/qwen-code/issues/18489) | bug(serve): v0.28.7 worktree retention freezes event loop for 6–8 min | Severe performance regression impacting long-running daemons; blocks `/health` and all routes. Urgent fix required. | 🔥 3 comments |
| [#18508](https://github.com/QwenLM/qwen-code/issues/18508) | fix(web-shell): opening Artifacts should show the list, not a restored preview tab | UX issue affecting artifact navigation; breaks expected behavior. Low severity but high user impact. | 💬 6 comments |
| [#18475](https://github.com/QwenLM/qwen-code/issues/18475) | fix(serve): fail closed on unreadable worktree sidecars during session deletion | Prevents silent data loss during cleanup. Critical for session integrity. | 💬 3 comments |
| [#18534](https://github.com/QwenLM/qwen-code/issues/18534) | follow-up(cron): retain permission hints for gates with standalone comments | Improves auditability and transparency in policy gates. Part of ongoing permissions refinement. | 💬 3 comments |
| [#18524](https://github.com/QwenLM/qwen-code/issues/18524) | Developer guide still uses npm install… | Highlights outdated dev workflow guidance. Misalignment with pnpm-based project setup. | 💬 3 comments |
| [#18486](https://github.com/QwenLM/qwen-code/issues/18486) | Desktop AppImage: gray window on current Mesa | Major UI failure on Linux (Mesa), preventing usability. Root cause: outdated libwayland-client in bundle. | 💬 3 comments |

---

## **Key PR Progress**

| PR # | Title | Summary | Status |
|------|-------|---------|--------|
| [#18549](https://github.com/QwenLM/qwen-code/pull/18549) | feat(verify-pr): add destructive-diff adversarial protocol | Hardens PR verification with adversarial diff checks, review capture, and publish guards. Prevents silent data-loss bugs. | ✅ Open |
| [#18561](https://github.com/QwenLM/qwen-code/pull/18561) | docs(managed-agent): Design Harness pull for released Sessions (P1) | Designs phase 1 of pull scheduling for hosted harnesses. Enables dynamic workload distribution. | ✅ Open |
| [#18568](https://github.com/QwenLM/qwen-code/pull/18568) | test(integration): keep distribution process observer off PTY loop | Reduces interference with terminal I/O during boot. Improves stability of integration tests. | ✅ Open |
| [#18546](https://github.com/QwenLM/qwen-code/pull/18546) | fix(autofix-pr): harden tracked-state guard, watch consent | Addresses 11 review findings post-merge; prevents forged state files and enforces explicit watch consent. | ✅ Closed |
| [#18579](https://github.com/QwenLM/qwen-code/pull/18579) | fix(ci): keep fork-PR reviews off unreachable canary endpoint | Fixes CI routing for fork PRs by avoiding inaccessible endpoints (e.g., CN-only MaaS gateway). | ✅ Open |
| [#18552](https://github.com/QwenLM/qwen-code/pull/18552) | feat(verify-pr): add host capability probes and per-round VM staging | Eliminates need for ad-hoc shell glue in sandboxed PR reviews; enables per-round VM workspace prep. | ✅ Closed |
| [#18570](https://github.com/QwenLM/qwen-code/pull/18570) | fix(core): skip incomplete worktree snapshot pairs in unkeyed recovery | Prevents crashes during historical recovery when snapshots are missing. Safer fallback logic. | ✅ Open |
| [#18355](https://github.com/QwenLM/qwen-code/pull/18355) | feat(review): tiered sandbox cutover, CLI capability gate | Completes Phase 2-A of sandbox rollout: now fails closed by default. Enhances security posture. | ✅ Open |
| [#18559](https://github.com/QwenLM/qwen-code/pull/18559) | feat(managed-agent): Wake MySQL session resource GC via RocketMQ | Enables real-time garbage collection triggering via message bus. Improves resource hygiene. | ✅ Closed |
| [#18555](https://github.com/QwenLM/qwen-code/pull/18555) | fix(web-shell): surface branch sourceWarnings even when switch fails | Ensures users are informed even if branch creation fails mid-flow. Better error visibility. | ✅ Open |

---

## **Hot Discussions**

*None provided in the dataset.*

---

## **Feature Request Trends**

The most prominent feature directions emerging from Issues and PRs include:

- **Hosted Agent & Session Flexibility**:  
  - Pull scheduling for hosted harnesses ([#18514](https://github.com/QwenLM/qwen-code/issues/18514))  
  - Shared workers across external Files sessions with distinct working directories ([#18544](https://github.com/QwenLM/qwen-code/issues/18544))  
  - Branch/fork support for trusted secondary workspaces ([#18541](https://github.com/QwenLM/qwen-code/issues/18541))

- **Security & Verification Hardening**:  
  - Adversarial PR verification protocols ([#18549](https://github.com/QwenLM/qwen-code/pull/18549))  
  - Tiered sandbox enforcement with fail-closed defaults ([#18355](https://github.com/QwenLM/qwen-code/pull/18355))  
  - Fail-closed handling of ambient credentials and authority surfaces ([#18370](https://github.com/QwenLM/qwen-code/pull/18370))

- **Developer Experience & Tooling**:  
  - Improved CLI TUI resilience (e.g., preserving input on scroll) ([#18492](https://github.com/QwenLM/qwen-code/issues/18492))  
  - Unified chat surface and decoupled editor components ([#18543](https://github.com/QwenLM/qwen-code/pull/18543))  
  - Support for multimodal inputs and audio encoding auto-selection ([#18523](https://github.com/QwenLM/qwen-code/pull/18523))

---

## **Developer Pain Points**

Recurring frustrations reported by contributors and users:

- **CI/CD Instability**:  
  Multiple E2E and managed agent gate failures on `main` (e.g., [#18342](https://github.com/QwenLM/qwen-code/issues/18342), [#18252](https://github.com/QwenLM/qwen-code/issues/18252)) suggest pipeline fragility and inconsistent test coverage.

- **Performance Regression in v0.28.7**:  
  Long event-loop freezes (6–8 minutes) due to O(N²) operations on large `.qwen` snapshots ([#18489](https://github.com/QwenLM/qwen-code/issues/18489)) severely degrade daemon usability.

- **Outdated Dev Documentation**:  
  Guides still recommend `npm install` despite `pnpm` being used in CI, causing dependency mismatches ([#18524](https://github.com/QwenLM/qwen-code/issues/18524)).

- **Platform-Specific Bugs**:  
  Gray window on Linux desktop AppImage due to outdated `libwayland-client` ([#18486](https://github.com/QwenLM/qwen-code/issues/18486)) and Windows settings hot-reload failures ([#17489](https://github.com/QwenLM/qwen-code/issues/17489)) indicate cross-platform testing gaps.

- **Flaky Tests & CI Noise**:  
  Several flaky tests flagged by CI Failure Patrol ([#18540](https://github.com/QwenLM/qwen-code/issues/18540), [#18536](https://github.com/QwenLM/qwen-code/issues/18536)) hinder reliable development cycles.

--- 

*Digest compiled from GitHub activity on 2026-11-28. For full context, visit [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*