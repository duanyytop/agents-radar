# AI CLI Tools Community Digest 2026-11-21

> Generated: 2026-11-21 03:25 UTC | Tools covered: 7

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

# **Cross-Tool AI CLI Ecosystem Comparison Report – 2026-11-21**

---

### **1. Ecosystem Overview**  
The AI CLI tool ecosystem in late 2026 is characterized by rapid iteration, increasing enterprise readiness, and growing maturity in agent orchestration and session management. While foundational tools like **Claude Code**, **OpenAI Codex**, and **GitHub Copilot CLI** lead in integrations and UX polish, newer entrants such as **Pi**, **Qwen Code**, and **OpenCode** are gaining traction through open-source flexibility, model agnosticism, and strong developer-centric design. A clear shift is underway from prototyping tools toward production-grade, secure, and persistent AI-assisted development environments—evidenced by rising demands for memory, state persistence, and cross-platform reliability.

---

### **2. Activity Comparison**

| Tool | Issues (Count) | PRs (Count) | Discussions (Count) | Release Status |
|------|----------------|-------------|---------------------|----------------|
| **Claude Code** | 10 | 1 | 0 | ✅ v2.1.330 (Enterprise focus) |
| **OpenAI Codex** | 10 | 10 | 5 | 🟡 Alpha builds (rust-v0.173.0-alpha) |
| **Gemini CLI** | 10 | 9 | 0 | ✅ v0.71.0-nightly.20261121 |
| **GitHub Copilot CLI** | 10 | 0 | 0 | ✅ v1.0.115-4 (Security + stability) |
| **OpenCode** | 10 | 10 | 0 | ❌ No new release |
| **Pi** | 10 | 10 | 1 | ✅ v1.6.0 (GPT-6.2 default) |
| **Qwen Code** | 10 | 10 | 0 | ✅ v0.28.3 (CI/CD hygiene focus) |

> **Notes**:  
> - All tools report active issue tracking; OpenCode, Qwen Code, and Pi use GitHub Discussions minimally or not at all.  
> - OpenAI Codex leads in PR velocity with 10 merged in 24h—indicating aggressive internal development.  
> - Qwen Code shows high activity despite no functional release: 10 PRs focused on CI stability, security, and runtime isolation.

---

### **3. Shared Feature Directions**  
Across the ecosystem, several core requirements emerge repeatedly:

- **Persistent Session State & Project Memory**  
  *Tools:* Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi, OpenCode  
  *Need:* Cross-session retention of decisions, context, and project state. Users demand unified, structured state layers (e.g., `canonical project-state layer`), and reproducible workflows.

- **Session Stability & Recovery**  
  *Tools:* All seven tools  
  *Need:* Reliable resumption after crashes, sleep, or network disconnects. Critical for remote developers and long-running agents (e.g., #60839 in OpenCode, #5535 in Copilot CLI).

- **Agent Autonomy & Safety Controls**  
  *Tools:* Gemini CLI, OpenCode, Pi, Qwen Code  
  *Need:* Prevent destructive actions (`git reset --force`, `rsync` wipes), enforce policy boundaries, and enable self-initiated subagent execution without prompts.

- **Cross-Platform Reliability (Especially Windows)**  
  *Tools:* OpenAI Codex, OpenCode, Qwen Code, Pi, GitHub Copilot CLI  
  *Need:* Fix path handling, shell crashes, process leaks, and GUI state loss post-sleep. High-frequency issues in Windows-specific regressions indicate platform fragmentation.

- **Cost Transparency & Usage Tracking**  
  *Tools:* Claude Code, GitHub Copilot CLI, OpenAI Codex  
  *Need:* Unified `claude usage`, `AI credits used` columns, and quota visibility—critical for enterprise budgeting and CI/CD automation.

---

### **4. Differentiation Analysis**

| Dimension | **Claude Code** | **OpenAI Codex** | **Gemini CLI** | **GitHub Copilot CLI** | **OpenCode** | **Pi** | **Qwen Code** |
|---------|------------------|------------------|----------------|------------------------|--------------|--------|---------------|
| **Target User** | Enterprise teams, compliance-heavy orgs | Developer-first, general-purpose coders | Open-source advocates, custom agent builders | Devs in GitHub ecosystem | Power users, local-first devs | Multi-provider, flexible workflow engineers | Java/enterprise SDK users |
| **Technical Focus** | Enterprise auth, MCP metrics, cloud policies | Remote control, UI consistency, tool traceability | Subagent behavior, safety enforcement, AST-awareness | Plugin lifecycle, sandboxing, permission UX | Windows stability, snapshot hygiene | CI/CD reliability, ephemeral runtime |
| **Model Agnosticism** | Limited (Anthropic-only) | Moderate (OpenAI, Azure, Codex) | High (supports multiple providers) | High (via `@provider`) | Very high (Ollama, Hugging Face, etc.) | Medium (focused on managed agents) | High (Java SDK abstraction) |
| **Architecture** | Cloud-first with gateway policies | Client-server sync with TUI focus | Local-first with strict sandboxing | Hybrid (local agent + cloud) | Desktop-native with low-level hooks | Server-driven with daemon lifecycle |
| **Differentiator** | Enterprise admin console integration | Rich discussion ecosystem, live agent demos | Safety-first subagent logic | Seamless GitHub integration, permission UX | Windows resilience, free-tier clarity | CI/CD rigor, runtime isolation |

---

### **5. Community Momentum & Maturity**

- **Highest Momentum**: **OpenAI Codex** and **Qwen Code** show the most active development cycles. Codex’s 10 PRs in 24h signal aggressive internal progress, while Qwen Code’s 10 PRs (mostly CI/CD and security fixes) reflect deep investment in engineering quality.
- **Rapid Iteration**: **Pi** released v1.6.0 with major model upgrades and resolved 6 P0 issues in a single week—demonstrates agile responsiveness to user feedback.
- **Mature Communities**: **Claude Code** and **GitHub Copilot CLI** have well-documented feature request trends and stable release cadence, indicating longer-term product planning.
- **Emerging but Active**: **OpenCode** and **Gemini CLI** are building strong foundations with focused improvements in stability and agent intelligence, though both face significant usability hurdles (e.g., free-tier access, window state).
- **Low Engagement, High Risk**: **Qwen Code** has high technical activity but minimal community discourse—suggests internal prioritization over external collaboration.

---

### **6. Trend Signals**  
Key industry signals emerging from community feedback:

1. **AI Agent as First-Class Citizen**  
   Developers now expect agents to *initiate* actions autonomously (e.g., #21968 in Gemini CLI), self-manage subagents, and maintain persistent goals—beyond simple code suggestions.

2. **Security-by-Design is Non-Negotiable**  
   Destructive command risks (#5541 in Copilot CLI, #22672 in Gemini CLI) and silent permission bypasses (#65290 in OpenCode) are top concerns. Tools must embed guardrails early.

3. **State Persistence > Context Window**  
   Demand for “memory” and “project state” exceeds interest in larger context windows. This reflects a move from *token-heavy* to *meaningful, structured* AI collaboration.

4. **Windows Is the Frontier**  
   Multiple tools report critical Windows-specific bugs (path handling, shell crashes, GUI state loss). This indicates that Linux/macOS are mature, but Windows remains the last mile for broad adoption.

5. **Developer Experience Over Features**  
   Even with powerful models, users prioritize stability, predictable UX, and error transparency. Silent failures and broken flows (e.g., session loss, prompt resets) are more damaging than missing features.

---

### **Conclusion**  
The AI CLI landscape is maturing rapidly, shifting from novelty to operational reliability. **OpenAI Codex** and **Qwen Code** lead in technical velocity, while **Claude Code** and **GitHub Copilot CLI** dominate in enterprise readiness. **Pi** and **Gemini CLI** exemplify the rise of modular, provider-agnostic systems. The consensus across communities is clear: *trust, persistence, and security* are now the primary differentiators—not just model size or speed. For technical decision-makers, investing in tools with robust session recovery, granular permissions, and cross-platform stability will yield the highest ROI in 2027 and beyond.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-11-21 | Source: [anthropics/skills](https://github.com/anthropic/skills)*

---

### **1. Top Skills Ranking**  
*(Ranked by community attention via comments and discussion velocity)*

1. **`md2video-audio` – Markdown-to-Professional Video with Voiceover**  
   *PR #1703* | [View on GitHub](https://github.com/anthropic/skills/pull/1703)  
   - **Functionality**: Converts Markdown documents into polished MP4 videos with natural-sounding voiceovers using Marp for slides and AI audio synthesis.  
   - **Discussion Highlights**: High interest in zero-cost, automated content production; users anticipate use in tutorials, pitch decks, and knowledge sharing.  
   - **Status**: Open (last updated 2026-09-15)

2. **`proofcore-contract-auditor` – Smart Contract Notarization on TON Blockchain**  
   *PR #1771* | [View on GitHub](https://github.com/anthropic/skills/pull/1771)  
   - **Functionality**: Automates static analysis of Solidity/Rust contracts and anchors cryptographic audit proofs to the public TON blockchain via ProofCore’s zero-storage Merkle protocol.  
   - **Discussion Highlights**: Strong enthusiasm from Web3 developers seeking trustless verification; seen as a foundational tool for secure AI-assisted smart contract development.  
   - **Status**: Open (merged status unclear; last updated 2026-09-16)

3. **`notion-spec-to-implementation` – Tech/Product Spec → Notion Task Pipeline**  
   *PR #1245* | [View on GitHub](https://github.com/anthropic/skills/pull/1245)  
   - **Functionality**: Transforms high-level product or technical specs into structured Notion tasks with acceptance criteria, progress tracking, and implementation plans.  
   - **Discussion Highlights**: Praised for bridging ideation and execution; aligns with growing demand for AI-driven project management workflows.  
   - **Status**: Open (last updated 2026-10-15)

4. **`document-typography` – Typographic Quality Control for AI Documents**  
   *PR #514* | [View on GitHub](https://github.com/anthropic/skills/pull/514)  
   - **Functionality**: Detects and prevents common typographic flaws in AI-generated docs—orphans, widows, and numbering misalignment—commonly overlooked but visually disruptive.  
   - **Discussion Highlights**: Recognized as essential for professional-grade output; users note it fixes a "silent flaw" in Claude's document generation.  
   - **Status**: Open (last updated 2026-03-13)

5. **`scnet-hpc` – SCNet HPC Cluster Management via SSH & Slurm**  
   *PR #1615* | [View on GitHub](https://github.com/anthropic/skills/pull/1615)  
   - **Functionality**: Enables profile-based SSH access, Slurm job submission, and cluster discovery for scientific computing environments.  
   - **Discussion Highlights**: Niche but critical for academic and research users; signals rising demand for domain-specific infrastructure automation.  
   - **Status**: Open (last updated 2026-08-24)

6. **`webapp-testing` – Enhanced Element Discovery & Shell-Safe Server Spawning**  
   *PRs #1976, #1975, #1980* | [View PR #1980](https://github.com/anthropic/skills/pull/1980)  
   - **Functionality**: Improves element detection in web apps (e.g., correctly identifying `<textarea>` vs `<input>`) and removes `shell=True` risks in server spawning.  
   - **Discussion Highlights**: Multiple related PRs indicate deep community investment in robust, secure UI testing workflows.  
   - **Status**: Open (all updated within October–November 2026)

---

### **2. Community Demand Trends**  
Based on top issues and feature requests, the most anticipated Skill directions are:

- **Workflow Automation & Integration**: Demand for end-to-end automation (e.g., spec → task → code → test), exemplified by `notion-spec-to-implementation` and `md2video-audio`.  
- **Security & Trust Integrity**: High concern over impersonation via `anthropic/` namespace (Issue #492); calls for verified skill signing and org-wide trust controls.  
- **Code & Documentation Quality Gates**: Rising interest in pre-commit validation (e.g., `document-typography`, `reasoning-quality-gate-pipeline` proposal).  
- **AI Agent Safety & Governance**: Clear need for skills like `agent-governance` (Issue #412) to manage policy enforcement, audit trails, and threat detection in autonomous agent systems.  
- **Developer Tooling & Debugging**: Persistent issues around trigger reliability (`run_eval.py` failure, Issue #556, #1352) highlight demand for reliable, debuggable skill evaluation frameworks.

---

### **3. High-Potential Pending Skills**  
These open PRs have strong momentum and are likely candidates for near-term merge:

- **`md2video-audio`** (#1703): High novelty and clear use case in content creation; well-documented and non-invasive.  
- **`proofcore-contract-auditor`** (#1771): Addresses a real pain point in Web3 development; built on proven cryptographic anchoring.  
- **`theme-factory`** (Issue #2064): While not yet merged, its popularity (5 comments) reflects demand for visual consistency tools in AI-generated assets.  
- **`compact-memory`** (Issue #1329): Proposed as a symbolic state representation for long-running agents—critical for context efficiency in complex workflows.

---

### **4. Skills Ecosystem Insight**  
The community’s most concentrated demand is for **trustworthy, production-ready automation tools that bridge AI capabilities with real-world workflows**, particularly in documentation quality, security integrity, and cross-platform integration—moving beyond prototyping toward enterprise-grade reliability.

---  
*Report generated by Technical Analyst, Claude Code Ecosystem Intelligence Team.*

---

**Claude Code Community Digest — 2026-11-21**

---

### **1. Today's Highlights**  
The latest release, **v2.1.330**, introduces critical enterprise integration with support for organizational authentication via Anthropic’s Enterprise Admin Console, enabling unified cloud and gateway policies. A new built-in mod, *easel*, now allows on-demand chart generation under MCP metrics, enhancing developer productivity in AI-driven code workflows.

---

### **2. Releases**  
**v2.1.330**  
- ✅ **Enterprise Organization Sign-In**: After `claude auth login`, Claude Code now applies organization-specific settings from Anthropic’s Enterprise Admin Console, including cloud provider or gateway configurations.  
- 🎨 **Easel Mod Added**: A built-in mod that generates visual charts when prompted, particularly useful during MCP (Model-Controlled Processing) metric analysis.  
> 🔗 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#79808](https://github.com/anthropics/claude-code/issues/79808) | Users unable to log in due to suppressed verification emails; no escalation path via support bot. Critical access blocker. | ⭐ 31 comments, 7 👍 – High urgency; recurring theme in enterprise adoption. |
| [#51828](https://github.com/anthropics/claude-code/issues/51828) | Terminal scrollback duplication persists after resize (macOS, VS Code). Breaks workflow continuity. | ⭐ 31 comments, 38 👍 – Long-standing regression affecting core TUI UX. |
| [#95364](https://github.com/anthropics/claude-code/issues/95364) | Desktop auto-update forcibly quits and restarts while Remote Control sessions are active, dropping all connections. | ⭐ 22 comments, 24 👍 – Major disruption for remote developers; "stealth update" behavior criticized. |
| [#111275](https://github.com/anthropics/claude-code/issues/111275) | Claude for Microsoft 365 Office add-in vanishes seconds after install on macOS. Possibly removed post-session. | ⭐ 5 comments – Fresh, high-impact issue impacting productivity integrations. |
| [#94166–94167](https://github.com/anthropics/claude-code/issues/94166) | Cybersecurity safeguards trigger false positives during embedded firmware debugging (buffer overflows, microcontroller toolchains). Blocks authorized work. | ⭐ 4+ closed issues, severity: *session-halted* – Urgent for hardware/software engineers. |
| [#89690](https://github.com/anthropics/claude-code/issues/89690) | `opusplan` mode not visible in model picker despite being valid. Misleading UI leads to confusion. | ⭐ 23 comments – Confusion between modes vs. models; impacts planning workflows. |
| [#102045](https://github.com/anthropics/claude-code/issues/102045) | Project decisions lost across sessions despite same session link — undermines persistent AI collaboration. | ⭐ 6 comments – Fundamental flaw in state management for web users. |
| [#110449](https://github.com/anthropics/claude-code/issues/110449) | Windows desktop app loses code sessions from sidebar despite intact index and transcripts. UI sync failure. | ⭐ 4 comments – Reproducible regression; breaks user trust in data persistence. |
| [#98526](https://github.com/anthropics/claude-code/issues/98526) | Multiple accounts share a single skills sync bucket via `CLAUDE_SECURESTORAGE_CONFIG_DIR`, causing trash churn. | ⭐ 2 comments – Security and hygiene risk in multi-account environments. |
| [#109419](https://github.com/anthropics/claude-code/issues/109419) | Remote Control turns off on Windows even with "enable by default" and sleep disabled. Unpredictable behavior. | ⭐ 3 comments – High impact for remote dev teams relying on persistent access. |

---

### **4. Key PR Progress**  

| PR | Summary | Status |
|----|--------|--------|
| [#111198](https://github.com/anthropics/claude-code/pull/111198) | Prevents `@claude` mentions from triggering on pull requests from forks. Reduces noise and potential security risks. | ✅ Closed |
| *(No other PRs updated in last 24h)* | — | — |

---

### **5. Hot Discussions**  
*No discussion threads provided in source data.*

---

### **6. Feature Request Trends**  
The community is increasingly focused on:  
- **Cost Transparency**: Unified usage analytics (`claude usage` command) requested across 10+ issues ([#33978](https://github.com/anthropics/claude-code/issues/33978)).  
- **Session Persistence**: Cross-machine transcript storage ([#81835](https://github.com/anthropics/claude-code/issues/81835)) and retention of project decisions across sessions ([#102045](https://github.com/anthropics/claude-code/issues/102045)).  
- **Enterprise Integration**: Enhanced org-level control via admin console, credential override (`CLAUDE_SECURESTORAGE_CONFIG_DIR`), and secure multi-account handling.  
- **Agent & Tooling Clarity**: Better docs on sub-agent parameters ([#100347](https://github.com/anthropics/claude-code/issues/100347)), and opt-in custom slash command expansion ([#91146](https://github.com/anthropics/claude-code/issues/91146)).

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Unreliable Authentication**: Email suppression and lack of support escalation paths ([#79808](https://github.com/anthropics/claude-code/issues/79808)).  
- **Desktop Stability**: Auto-updates killing Remote Control sessions ([#95364](https://github.com/anthropics/claude-code/issues/95364)) and unexpected session loss ([#110449](https://github.com/anthropics/claude-code/issues/110449)).  
- **False Positives in Safety Filters**: Blocking legitimate embedded systems development ([#94166–94167](https://github.com/anthropics/claude-code/issues/94166)).  
- **Inconsistent State Management**: Loss of project context, session visibility, and saved decisions across platforms.  
- **Poor Documentation**: Undocumented environment variables like `CLAUDE_SECURESTORAGE_CONFIG_DIR` ([#79223](https://github.com/anthropics/claude-code/issues/79223)) hinder automation and tooling.

---  
*Data sourced from GitHub: github.com/anthropics/claude-code | Updated: 2026-11-21*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-11-21**

---

### **1. Today's Highlights**  
The Codex team continues to prioritize stability and cross-platform reliability, with critical fixes for macOS launch crashes and Windows app hangs following recent updates. A surge in high-comment issues highlights ongoing challenges with remote control, session persistence, and cloud thread management—particularly on macOS and Windows—underscoring the need for robust client-server synchronization.

---

### **2. Releases**  
No new stable releases were published in the last 24 hours. However, three alpha builds were released under the `rust-v0.173.0-alpha` series:  
- [`v0.173.0-alpha.4`](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4)  
- [`v0.173.0-alpha.3`](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.3)  
- [`v0.173.0-alpha.2`](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.2)  

These alpha versions focus on internal infrastructure improvements, particularly around tool invocation handling and network configuration composition, likely preparing for upcoming cloud agent and multi-agent enhancements.

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#57101](https://github.com/openai/codex/issues/57101) | Windows Computer Use: gold/yellow border remains after screenshot turn completes. Affects UI feedback during active use. | 75 comments, 13 upvotes – users report persistent visual artifacts disrupting workflow. |
| [#62650](https://github.com/openai/codex/issues/62650) | macOS app crashes at startup due to wallpaper tint fallback. Launch-blocking regression affecting all users with custom wallpapers. | 53 comments, 16 upvotes – high severity; impacts early user experience. |
| [#62877](https://github.com/openai/codex/issues/62877) | Codex Remote Control spins or becomes unavailable on both iOS and macOS after update. Breaks cross-device continuity. | 4 comments – urgent for remote workflows; reported by multiple users post-update. |
| [#62733](https://github.com/openai/codex/issues/62733) | Windows Bluetooth dictation fails after update 26.1117.3838.0. Clock=unavailable error disrupts voice input. | 5 comments – affects accessibility and hands-free development. |
| [#62868](https://github.com/openai/codex/issues/62868) | AppX errors 0x80073D02 / 0x8007045B on Windows (OpenAI.CodexPrimaryRuntime). Reinstalling doesn’t resolve. | 2 comments – indicates deeper system-level package corruption risk. |
| [#62880](https://github.com/openai/codex/issues/62880) | macOS: misleading work status, incomplete stop handling, rapid quota depletion. Users lose visibility into task progress. | 2 comments – raises concerns about automation reliability and cost transparency. |
| [#62700](https://github.com/openai/codex/issues/62700) | macOS 26.1117.31558 regression: enabled local skills disappear from slash menu. Critical UX break. | 2 comments, 7 upvotes – immediate usability loss for developers relying on custom tools. |
| [#62856](https://github.com/openai/codex/issues/62856) | macOS ChatGPT crashes on startup with NSUnknownKeyException. Works on new user account only. | 5 comments – suggests corrupted user profile state or sandbox misconfiguration. |
| [#62722](https://github.com/openai/codex/issues/62722) | Quick relaunch fails with “Connection for host ID local not found”. Disrupts workflow continuity. | 2 comments – affects fast iteration cycles on Windows. |
| [#59398](https://github.com/openai/codex/issues/59398) | Plus quota hits 98% in 5 minutes despite cached context. Suggests aggressive rate-limiting behavior. | 3 comments, 4 upvotes – concerns over predictable billing and long-context efficiency. |

---

### **4. Key PR Progress**  

| PR | Summary | Impact |
|----|--------|--------|
| [#62888](https://github.com/openai/codex/pull/62888) | Introduces shared `ToolCallId` for dispatched tool invocations. Improves traceability and coordination across agents. | Enables better debugging and audit trails in multi-tool workflows. |
| [#62884](https://github.com/openai/codex/pull/62884) | Tracks explicit web search modes and exposes `indexed` in SDK. Clarifies intent behind searches. | Enhances developer control over search behavior and results. |
| [#62883](https://github.com/openai/codex/pull/62883) | Tags user reports with latest reasoning removal status. Improves transparency in safety filtering. | Supports compliance and model behavior analysis. |
| [#62882](https://github.com/openai/codex/pull/62882) | Composes managed domain rules across network config layers (e.g., `[permissions.network]`, `[network_proxy]`). | Resolves conflicts in enterprise network policies. |
| [#62879](https://github.com/openai/codex/pull/62879) | Allows new threads to opt out of Daybreak propagation. Useful for pre-prepared sessions. | Enables fine-grained control in automated workflows. |
| [#62876](https://github.com/openai/codex/pull/62876) | Prewarms MCP servers during cloud catalog refresh. Reduces latency on first turn. | Improves responsiveness in cloud-based agent setups. |
| [#62871](https://github.com/openai/codex/pull/62871) | Preserves per-image metadata in app-server image generation items. | Maintains provenance and context for AI-generated assets. |
| [#62870](https://github.com/openai/codex/pull/62870) | Uses runtime authentication for TUI WebRTC calls. | Strengthens security in real-time collaboration features. |
| [#62867](https://github.com/openai/codex/pull/62867) | Enables OAuth during app-server startup for config servers. | Essential for organizations requiring pre-authentication. |
| [#62863](https://github.com/openai/codex/pull/62863) | Requests Responses API omit echoed tool catalog via `x-codex-exclude: tools`. | Reduces payload size and improves performance. |

---

### **5. Hot Discussions**  

#### **Ideas**  
- [#12567](https://github.com/openai/codex/discussions/12567): *Memories in Codex* – 42 comments on how much users want Codex to cite past conversations. Strong support for memory integration (avg. 4.2/5 demand).  
- [#33353](https://github.com/openai/codex/discussions/33353): *Canonical Project-State Layer* – Users demand a persistent, structured state layer for complex technical projects. Highlights lack of continuity.  
- [#44795](https://github.com/openai/codex/discussions/44795): *Live integrations + secure sign-in* – Calls for continuous sync with user’s daily tools (Slack, GitHub, etc.) without manual re-auth.  
- [#62661](https://github.com/openai/codex/discussions/62661): *Temporary Chat in separate window* – Request to isolate temporary chats from main workspace for better focus.  

#### **Q&A**  
- [#2503](https://github.com/openai/codex/discussions/2503): *How to scroll through conversation history in CLI?* – High engagement (10 comments, 38 likes). Users frustrated by terminal overflow.  
- [#57029](https://github.com/openai/codex/discussions/57029): *Using work email with Gmail plugin* – 2 comments; common issue with multi-account access.  

#### **Show and Tell**  
- [#62494](https://github.com/openai/codex/discussions/62494): *LrrK Agent Desk* – Using Codex to track changes in public evidence via MCP. Demonstrates advanced research automation.  
- [#61475](https://github.com/openai/codex/discussions/61475): *Ragmir* – Open-source retrieval layer pulling context from code, PDFs, and Office files. Popular among devs.  
- [#62463](https://github.com/openai/codex/discussions/62463): *Element Picker Chrome extension* – Helps Codex identify correct buttons on complex pages. Practical UI enhancement.  
- [#62545](https://github.com/openai/codex/discussions/62545): *Calling local Codex via OpenAI SDK* – Self-hosted gateway allows existing apps to invoke Codex without subprocess overhead.  
- [#61997](https://github.com/openai/codex/discussions/61997): *Cloud Alter Ego* – Unified memory layer across ChatGPT, Claude, and other models using personal cloud storage.  

---

### **6. Feature Request Trends**  
- **Persistent Context & Memory**: Users consistently request built-in memory that remembers past interactions across sessions and models (e.g., #12567, #61997).  
- **Cross-Device Continuity**: Demand for reliable remote control and session sync between iOS, macOS, and Windows is growing (#62877, #62700).  
- **Structured State Management**: Developers want a canonical project-state layer to avoid ad-hoc workarounds (#33353, #51228).  
- **Better Tool & Workflow Visibility**: Need for clearer status tracking, deletion controls, and session management (e.g., #27207, #50618).  
- **Enhanced Local-Cloud Integration**: Users seek tighter coupling between local agents and cloud environments with seamless authentication and data flow (#62867).

---

### **7. Developer Pain Points**  
- **Remote Control Instability**: Frequent crashes and unresponsiveness in Codex Remote (iOS/macOS) post-updates.  
- **Session Persistence Failures**: Ghost chats, missing titles, and failed unarchiving persist across platforms (macOS, Windows).  
- **Startup Crashes**: Multiple OS-specific launch failures (macOS wallpaper crash, Windows hang on startup due to WSL probe).  
- **Tool & Plugin Visibility Loss**: Local skills disappearing from menus and inaccessible tool catalogs frustrate workflow consistency.  
- **Rate-Limiting Obscurity**: Rapid quota exhaustion despite caching suggests poor transparency in usage monitoring.  
- **Inconsistent State Across Clients**: Cloud vs. local discrepancies (e.g., empty iOS history despite active Windows sessions) undermine trust in synchronization.

---  
*Digest compiled from GitHub data as of 2026-11-21. For real-time updates, follow [openai/codex](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026-11-21**

---

### **1. Today's Highlights**  
The Gemini CLI team shipped a new nightly release with critical fixes for Windows path handling and session resumption, improving reliability across platforms. Significant progress was made on agent stability and security, including enhanced policy enforcement, improved subagent behavior, and better handling of dangerous commands.

---

### **2. Releases**  
**v0.71.0-nightly.20261121.geecccfcd5**  
- ✅ **Fix (CLI)**: Expanded support for Windows home-relative paths using tilde (`~`) and backslashes (via #30376).  
- ✅ **Fix (CLI)**: Now resumes the most recently active session instead of the most recently started (via #30376).  

> 🔗 [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261121.geecccfcd5)

---

### **3. Hot Issues**  
| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL success` despite hitting `MAX_TURNS` — hides real failure. Critical for accurate debugging. | 13 comments, 2 👍 — P1 priority; affects reliability of automated codebase analysis. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely during simple operations (e.g., folder creation). Blocks user workflows. | 8 comments, 8 👍 — High visibility; users report waiting up to an hour. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model ignores custom skills/subagents unless explicitly instructed. Undermines automation potential. | 7 comments, 0 👍 — Anecdotal but widespread; signals poor agent autonomy. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Investigating AST-aware file reads/search for precision and token efficiency. Could reduce context bloat. | 7 comments, 1 👍 — Core to next-gen agent intelligence. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides like `maxTurns`. Breaks config-driven workflows. | 5 comments, 0 👍 — Affects reproducibility and control in headless mode. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails under Wayland. Limits Linux desktop compatibility. | 4 comments, 1 👍 — Platform-specific regression affecting developers on modern Linux. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model generates temporary scripts in random directories, polluting workspace. Hard to clean up. | 3 comments, 0 👍 — Direct impact on developer hygiene and commit integrity. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Model uses destructive Git commands (e.g., `reset --force`) when safer alternatives exist. Risky by default. | 3 comments, 1 👍 — Urgent safety concern; calls for defensive guardrails. |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | `get-shit-done` output hook causes crashes during summary printing. Breaks final workflow steps. | 3 comments, 0 👍 — Reproducible crash at critical moment. |
| [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) | Subagent trajectories not visible via `/chat share`. Hinders evaluation and sharing. | 2 comments, 1 👍 — Needed for transparency and debugging. |

---

### **4. Key PR Progress**  
| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#30174](https://github.com/google-gemini/gemini-cli/pull/30174) | Fixes body timeouts killing long model turns (e.g., large `write_file`). Prevents unwanted replay loops. | ✅ Closed |
| [#30178](https://github.com/google-gemini/gemini-cli/pull/30178) | Fixes loss of last Hangul syllable when Enter is pressed after IME commit. Improves international UX. | ✅ Closed |
| [#30171](https://github.com/google-gemini/gemini-cli/pull/30171) | Ensures `rm -r -f`, `rm -Rf`, and other forms are flagged as dangerous regardless of flag order. Enhances safety. | ✅ Closed |
| [#30169](https://github.com/google-gemini/gemini-cli/pull/30169) | Prevents pasted SSH keys from being attached without confirmation. Mitigates secret leakage risk. | ✅ Closed |
| [#30175](https://github.com/google-gemini/gemini-cli/pull/30175) | Applies local subagent’s `generateContentConfig` (temperature, topP, etc.) across all models (auto, flash, pro, etc.). Enables consistent behavior. | ✅ Closed |
| [#30173](https://github.com/google-gemini/gemini-cli/pull/30173) | Restores reading `~/.gemini/.env` in untrusted folders — resolves endless login loop. | ✅ Closed |
| [#30172](https://github.com/google-gemini/gemini-cli/pull/30172) | Ensures one result per tool call ID in session history and live requests. Eliminates duplication bugs. | ✅ Closed |
| [#30170](https://github.com/google-gemini/gemini-cli/pull/30170) | Stops local subagents from waiting out full deadline on stalled model calls. Reduces timeout delays. | ✅ Closed |
| [#30268](https://github.com/google-gemini/gemini-cli/pull/30268) | Respects `--approval-mode=yolo` in taint/build checks — enables seamless YOLO runs without prompts. | 🟡 Open |
| [#30281](https://github.com/google-gemini/gemini-cli/pull/30281) | Upgrades Undici to 7.30.2 to support Node 26’s built-in fetch symbol. Future-proofing core networking. | 🟡 Open |

---

### **5. Hot Discussions**  
*No discussion data provided.*

---

### **6. Feature Request Trends**  
The community is converging on three major feature directions:  
1. **Agent Intelligence & Autonomy**:  
   - Demand for AST-aware tools (e.g., `ast-grep`, `glyph`) to enable precise, low-token file reads and searches ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)).  
   - Need for agents to *self-initiate* subagents and skills without explicit prompting ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).  
2. **Security & Safety**:  
   - Strong push to prevent destructive actions (e.g., `git reset --force`) via policy enforcement ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).  
   - Better detection of permission issues in sandboxes and restricted environments ([#30277](https://github.com/google-gemini/gemini-cli/pull/30277)).  
3. **Developer Experience & Debuggability**:  
   - Visibility into subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).  
   - Persistent, file-based task tracking to replace context-heavy `WriteToDo` ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836)).  

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Agent Hanging / Crashing**: Generalist and browser agents frequently hang or crash during routine tasks ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22186](https://github.com/google-gemini/gemini-cli/issues/22186)).  
- **Poor Configuration Handling**: Agents ignore `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and symlinks aren’t recognized as valid agents ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).  
- **Context Bloat & Noise**: Models generate excessive temporary files and use high-context methods like “firehose” file reads ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).  
- **Lack of Transparency**: Subagent behavior is opaque; no easy way to inspect or share execution paths ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).  

---  
*Digest generated: 2026-11-21 | Source: [google-gemini/gemini-cli GitHub](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-11-21

---

### **1. Today's Highlights**  
The latest release, **v1.0.115-4**, introduces structured clarification questions in ACP editors that support forms—enhancing interactive feedback workflows. Critical fixes address plugin initialization races and Windows process cleanup, improving session stability and shell compatibility. Notably, Windows sandboxing is now enabled by default with granular opt-out controls, reflecting growing platform-specific security awareness.

---

### **2. Releases**  
**v1.0.115-4** (2026-11-21)  
- ✅ **Added**: Support for structured clarification questions in ACP editors using form-based input. Enables richer, more precise user feedback loops during agent interactions.  
- 🔧 **Fixed**: Resolved a plugin initialization race condition that could block new sessions or cause existing ones to fail on resume.  
- 🔧 **Fixed**: On Windows, properly cleans up child processes spawned from Git commands, hooks, and language server checks—preventing resource leaks and shell crashes.

**v1.0.115-3**  
- 🔧 **Fixed**: Ensures the `@` mention picker remains visible until an empty search completes, preserving expected keyboard behavior (Ctrl+Y + Tab).

**v1.0.115-2**  
- ✅ **Added**: Enabled Windows sandbox package queries by default; use `sandbox.userPolicy.capabilities = []` to opt out.  
- ✅ **Added**: Allowed specific macOS Mach service lookups via `sandbox.userPolicy.seatbelt.extraMachLookups`, without enabling Keychain access.  
- ✅ **Added**: Added Ctrl+X then A shortcut in `/model` command for quick model switching.

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#5478](https://github.com/github/copilot-cli/issues/5478) | Cortex XDR kills shell during `git` calls due to `parent_process_spoofing`. High-risk: breaks entire dev shell environment. | 8 comments, 1 👍 – urgent fix needed; affects enterprise users with EDR tools. |
| [#5220](https://github.com/github/copilot-cli/issues/5220) | Claude prompt cache TTL (5 min) too short for interactive use. Leads to re-fetching context mid-conversation. | 4 comments, 17 👍 – top-rated UX request; critical for long-form coding tasks. |
| [#5066](https://github.com/github/copilot-cli/issues/5066) | Assisted permissions mode now over-requests approvals. Users feel changes are opaque. | 5 comments, 1 👍 – highlights regression in permission UX; needs transparency. |
| [#4203](https://github.com/github/copilot-cli/issues/4203) | Expired OAuth access token triggers full interactive re-auth instead of silent refresh. Breaks headless workflows. | 5 comments, 5 👍 – major friction for CI/agent use cases; RFC 6749 compliance issue. |
| [#5468](https://github.com/github/copilot-cli/issues/5468) | Remote control fails on GitHub Mobile and github.com due to "sealed value must bind this connection’s challenge". Blocks remote access. | 2 comments, 1 👍 – growing demand for mobile integration; impacts hybrid workflows. |
| [#5440](https://github.com/github/copilot-cli/issues/5440) | Agent Plugins 1.0 ignores `.instructions.md` and `applyTo` frontmatter in `com.github.copilot/rules/`. Silently breaks rule enforcement. | 1 comment, 1 👍 – blocks adoption of standardized plugin governance. |
| [#5541](https://github.com/github/copilot-cli/issues/5541) | Agent ran `rsync -a --delete <dir>/ /` in WSL, wiping drive due to quoting failure. Catastrophic data loss risk. | 0 comments, 0 👍 – red flag for agent safety; requires immediate input validation. |
| [#5535](https://github.com/github/copilot-cli/issues/5535) | Model changes applied non-deterministically; session shows one model while running another. Confuses users. | 0 comments, 0 👍 – undermines trust in session state consistency. |
| [#5536](https://github.com/github/copilot-cli/issues/5536) | Permission prompts reset open question dialogs, forcing re-entry. Breaks multi-step user flows. | 0 comments, 0 👍 – high-friction UX issue; common in complex agents. |
| [#5533](https://github.com/github/copilot-cli/issues/5533) | Scrolled-up timeline jumps forward as output arrives. Disrupts reading flow. | 0 comments, 0 👍 – persistent terminal UX pain point across platforms. |

---

### **4. Key PR Progress**  
*No pull requests were merged in the last 24 hours.*  
However, several high-impact PRs remain pending:
- **[PR #5540](https://github.com/github/copilot-cli/pull/5540)**: Fixes missing MCP Tasks augmentation for `taskSupport: "required"` tools—critical for agent orchestration.
- **[PR #5537](https://github.com/github/copilot-cli/pull/5537)**: Adds AI credits used column to session list—enables cost tracking per session.
- **[PR #5539](https://github.com/github/copilot-cli/pull/5539)**: Proposes persistent user-level read access rules—reduces policy complexity.
- **[PR #5534](https://github.com/github/copilot-cli/pull/5534)**: Implements multiline commenting in `/diff`—improves code review efficiency.
- **[PR #5050](https://github.com/github/copilot-cli/pull/5050)**: Case-insensitive `/mcp <server-name>` matching—fixes discoverability issues.
- **[PR #5538](https://github.com/github/copilot-cli/pull/5538)**: Extends browser extension approval flow to Chromium browsers like Vivaldi—broadens accessibility.

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**  
Top feature directions from community feedback:
- **Extended Permissions & Security Controls**: Persistent read access policies (`#5539`), finer-grained sandboxing (`#5440`, `#5540`).
- **Improved Session Stability & Recovery**: Fix stale locks (`#4805`), deterministic model switching (`#5535`), better error handling.
- **Agent Safety & Guardrails**: Prevent catastrophic actions (e.g., `rsync` wipe) via input validation (`#5541`).
- **Enhanced Developer Experience**: Multiline commenting (`#5534`), scroll preservation (`#5533`), longer prompt caches (`#5220`).
- **Cross-Platform Consistency**: Better mobile remote control (`#5468`), consistent behavior across OSes and shells.

---

### **7. Developer Pain Points**  
Recurring frustrations include:
- **Permission Overload**: Too many approval prompts without clear rationale (`#5066`, `#5536`).
- **Unpredictable State Changes**: Model selection not applied reliably; UI shows one model while session runs another (`#5535`).
- **Security Tool Conflicts**: EDR software (Cortex XDR) killing shells during Git operations (`#5478`).
- **Data Loss Risk**: Agents executing destructive commands due to input parsing failures (`#5541`).
- **UX Fragmentation**: Input fields reset during permission prompts, timelines jump unexpectedly (`#5536`, `#5533`).
- **Poor Error Visibility**: Silent failures in plugins, MCP servers, and session recovery (`#5440`, `#4805`).

---

*Stay updated: [GitHub Copilot CLI Repository](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-21

---

### **Today's Highlights**  
The OpenCode community continues to focus on stability and UX polish, with critical fixes for Windows-specific issues including taskbar integration, window restoration after sleep, and session resumption. A surge in free-tier reports (#59387) highlights ongoing concerns about usage limits and subscription transitions, while a major PR series from Hona enhances desktop reliability across Windows, particularly around window state management and event stream resilience.

---

### **Releases**  
No new releases detected in the last 24 hours.

---

### **Hot Issues**  
*Top 10 issues by impact and community engagement:*

1. **[Free Tier Issues](https://github.com/anomalyco/opencode/issues/59387)** (400 comments)  
   *Why it matters:* The largest open issue, reporting persistent `Free usage exceeded` errors even after resets. Users report losing access without clear recovery paths—critical for adoption and retention of non-paying users.

2. **[Restore Foreground Subagent Execution](https://github.com/anomalyco/opencode/issues/64073)** (24 comments)  
   *Why it matters:* Blocks real-time agent interaction in active workflows. High demand from developers using complex agent chains requiring foreground execution continuity.

3. **[TUI Window Returns to Start Screen After Sleep](https://github.com/anomalyco/opencode/issues/60839)** (7 comments)  
   *Why it matters:* Loss of long-running TUI sessions disrupts productivity. Fixes are underway via PR #65311.

4. **[Qwen2.5-Coder 1.5B Returns Empty Tool Calls with Ollama](https://github.com/anomalyco/opencode/issues/65156)** (7 comments)  
   *Why it matters:* Hinders use of popular lightweight models in local inference setups—directly impacts developer flexibility.

5. **[Snapshots Capture Git-Ignored & Large Files](https://github.com/anomalyco/opencode/issues/65127)** (4 comments)  
   *Why it matters:* Risk of accidental data exposure and massive storage bloat (90GB+ reported). Urgent need for snapshot filtering logic.

6. **[OpenCode Desktop Opens %USERPROFILE% Instead of Project Folder](https://github.com/anomalyco/opencode/issues/65309)** (3 comments)  
   *Why it matters:* Regression in v2.3.2 affecting Windows users—repeatedly opens root directory despite project selection. Directly impacts workflow continuity.

7. **[Shell Tool Returns Empty Output on Windows Paths](https://github.com/anomalyco/opencode/issues/65214)** (4 comments)  
   *Why it matters:* Breaks file inspection and path-based operations on Windows, undermining core CLI functionality.

8. **[permissions: external_directory Rule Never Prompts](https://github.com/anomalyco/opencode/issues/65290)** (2 comments)  
   *Why it matters:* Security feature fails silently—users can read outside project roots without consent, violating trust in sandboxing.

9. **[Infinite Hang on First CLI Message](https://github.com/anomalyco/opencode/issues/65245)** (3 comments)  
   *Why it matters:* Prevents basic interaction in CLI mode; blocks entry point for many developers.

10. **[Keybinds Fail on Non-Latin Layouts](https://github.com/anomalyco/opencode/issues/55676)** (3 comments)  
    *Why it matters:* Excludes international developers using Russian, Chinese, or other non-Latin keyboard layouts—impacts global accessibility.

---

### **Key PR Progress**  
*Top 10 PRs driving stability and UX improvements:*

1. **[fix(desktop): reopen snapped, moved and minimized windows where they were](https://github.com/anomalyco/opencode/pull/65323)**  
   Restores window position and size after restart—critical for power users managing multiple workspaces.

2. **[fix(desktop): draw caption buttons in contrast theme text color](https://github.com/anomalyco/opencode/pull/65324)**  
   Improves visibility for users with high-contrast themes—minor but meaningful accessibility fix.

3. **[fix(browser): keep every open tab in the strip](https://github.com/anomalyco/opencode/pull/65322)**  
   Prevents tabs from disappearing during sessions—addresses a frequent user frustration.

4. **[feat(desktop): open in Windows Terminal and list only installed apps](https://github.com/anomalyco/opencode/pull/65320)**  
   Enhances developer workflow by integrating native terminal and filtering app list.

5. **[fix(desktop): resync server event streams after Windows resumes from sleep](https://github.com/anomalyco/opencode/pull/65321)**  
   Fixes session loss post-sleep—directly resolves #60839.

6. **[feat(desktop): flash taskbar button for pending user input](https://github.com/anomalyco/opencode/pull/65319)**  
   Visual cue improves responsiveness awareness—helps avoid missed interactions.

7. **[feat(desktop): show count badge for sessions needing user input](https://github.com/anomalyco/opencode/pull/65318)**  
   Increases visibility of pending tasks—enhances multitasking efficiency.

8. **[feat(desktop): show session status on taskbar progress bar](https://github.com/anomalyco/opencode/pull/65317)**  
   Real-time feedback on session progress—improves UX for long-running agents.

9. **[fix(app): handle prompt delivery during undo](https://github.com/anomalyco/opencode/pull/65314)**  
   Prevents race conditions during undo—maintains draft integrity.

10. **[fix(tui): retry session reads after reconnect instead of returning to start screen](https://github.com/anomalyco/opencode/pull/65311)**  
   Resolves TUI session drift post-reconnect—core fix for long-lived terminals.

---

### **Hot Discussions**  
*No discussion threads provided in the dataset. This section is omitted.*

---

### **Feature Request Trends**  
The most frequently requested feature directions include:

- **Enhanced Session Management:** Archive, pin, hide, reorder, and tree-view organization (#61746).
- **Improved UX for Long-Running Workflows:** One-click close for thinking panels (#60009), better TUI navigation (#65250), and session persistence.
- **Customization & Accessibility:** Custom message colors (#60169), non-Latin keybinding support (#55676), and Polish spellcheck integration (#65281).
- **Agent & Tool Control:** Restore foreground subagent execution (#64073), better tool call visibility, and interrupt reason logging (#65279).
- **Cross-Platform Consistency:** Fixing Windows-specific regressions (taskbar behavior, shell handling, window positioning).

These trends reflect a shift toward mature, production-grade developer experience—beyond prototyping tools into reliable AI-assisted coding environments.

---

### **Developer Pain Points**  
Recurring frustrations include:

- **Unreliable Free Tier Access:** Persistent "free usage exceeded" messages with no reset mechanism (#59387).
- **Windows-Specific Stability Issues:** Session loss after sleep, incorrect folder opening, and shell command failures (#60839, #65309, #65214).
- **Tool Call Reliability:** Empty `analyze` responses with Qwen2.5-Coder (#65156), `edit` tool misfires (#52067).
- **Security Gaps:** Silent bypass of `external_directory` permission rules (#65290).
- **CLI & Shell Bugs:** Infinite hangs on first message (#65245), malformed path handling (#64573), and raw error outputs (#49663).
- **Missing Feedback Loops:** No visual cues for pending user input or session status until manually checked.

These pain points underscore the need for deeper platform testing, especially on Windows, and stronger validation layers in both UI and backend logic.

---  
*Digest generated: 2026-11-21 | Source: [anomalyco/opencode GitHub](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# **Pi Community Digest – 2026-11-21**

---

### **1. Today's Highlights**  
The Pi ecosystem releases **v1.6.0**, introducing GPT-6.2 Astra and Sol across all major providers, with GPT-6.2 Sol now set as the default. This update enhances model availability and performance while addressing critical stability issues in core agents and AI integrations. Significant progress is also seen in provider compatibility fixes, especially for Anthropic and Google Gemini.

---

### **2. Releases**  
**v1.6.0**  
- ✅ **GPT-6.2 Astra & GPT-6.2 Sol** now available on `openai`, `azure`, and `openai-codex` providers.  
- 🔁 GPT-6.2 Sol is now the default model across all three providers.  
- 📚 See [Providers Documentation](https://github.com/earendil-works/pi/blob/v1.6.0/packages/coding-agent/docs/providers.md) for full details.

---

### **3. Hot Issues**  

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#12318](https://github.com/earendil-works/pi/issues/12318) | Anthropic `/login` fails for Team/Enterprise seats due to "Unknown scope" error. Blocks enterprise adoption. | ⚠️ High priority (p0), 4 comments, urgent fix needed |
| [#12361](https://github.com/earendil-works/pi/issues/12361) | `--thinking high/xhigh` on GPT-6 models results in fixed `"medium"` effort instead of expected behavior. Undermines reasoning control. | ⚠️ p0, 2 comments — critical UX/performance issue |
| [#12367](https://github.com/earendil-works/pi/issues/12367) | OpenAI drops reasoning items (`prefix_mismatch`) intermittently after v1.6.0 upgrade. Breaks context integrity. | ⚠️ p0, 2 comments — impacts reliability of complex reasoning |
| [#12340](https://github.com/earendil-works/pi/issues/12340) | Windows Git Bash silently truncates long RPC commands (>8K chars). Prevents execution of large scripts. | ⚠️ p0, 3 comments — platform-specific regression |
| [#12353](https://github.com/earendil-works/pi/issues/12353) | AWS Bedrock requests hang when `HTTPS_PROXY` is set due to SSO credential chain bypassing proxy. | ⚠️ p0, 2 comments — security/enterprise deployment blocker |
| [#12308](https://github.com/earendil-works/pi/issues/12308) | OpenAI ultrafast tier billed at standard rate; Codex pricing misapplied in `onPayload`. | ⚠️ p0, 2 comments — financial accuracy concern |
| [#12156](https://github.com/earendil-works/pi/issues/12156) | `schemaToType` ignores array item limits — leads to incorrect type generation. | 3 comments — fundamental type system bug |
| [#11127](https://github.com/earendil-works/pi/issues/11127) | Request to configure idle cache-warming horizon beyond 30 minutes. Critical for long-running sessions. | 5 comments — recurring workflow pain point |
| [#12321](https://github.com/earendil-works/pi/issues/12321) | Gemini models not recognized if ID doesn’t start with `gemini-` (e.g., `google/gemini-4-argon`). Limits flexibility. | 3 comments — integration friction |
| [#12311](https://github.com/earendil-works/pi/issues/12311) | `createProvider` re-merges model catalog on every `getModels()` call → quadratic performance degradation. | 3 comments — scalability bottleneck |

---

### **4. Key PR Progress**  

| PR | Summary & Impact | GitHub Link |
|----|------------------|-------------|
| [#12369](https://github.com/earendil-works/pi/pull/12369) | Fixes Windows bash command truncation by passing long commands via environment variable. | [PR #12369](https://github.com/earendil-works/pi/pull/12369) |
| [#12371](https://github.com/earendil-works/pi/pull/12371) | Enables Gemini 3+ strict tool use and proper detection for prefixed IDs like `google/gemini-4-argon`. | [PR #12371](https://github.com/earendil-works/pi/pull/12371) |
| [#12365](https://github.com/earendil-works/pi/pull/12365) | Resolves Bedrock SSO credential chain ignoring `HTTPS_PROXY`. | [PR #12365](https://github.com/earendil-works/pi/pull/12365) |
| [#12366](https://github.com/earendil-works/pi/pull/12366) | Optimizes `createProvider` model catalog merge — now runs once per publish, not per read. | [PR #12366](https://github.com/earendil-works/pi/pull/12366) |
| [#12360](https://github.com/earendil-works/pi/pull/12360) | Fixes stack overflow in `buildContextEntries` for sessions with >120k entries post-compaction. | [PR #12360](https://github.com/earendil-works/pi/pull/12360) |
| [#12358](https://github.com/earendil-works/pi/pull/12358) | Adds reporting of `cached_tokens` and `cache_write_tokens` for OpenAI Decisions API. | [PR #12358](https://github.com/earendil-works/pi/pull/12358) |
| [#12355](https://github.com/earendil-works/pi/pull/12355) | Ensures over-long lines ending in `\n\n` are properly displayed in bash output. | [PR #12355](https://github.com/earendil-works/pi/pull/12355) |
| [#12357](https://github.com/earendil-works/pi/pull/12357) | Distinguishes blocked prompts from incomplete streams in Google adapters — improves diagnostics. | [PR #12357](https://github.com/earendil-works/pi/pull/12357) |
| [#12356](https://github.com/earendil-works/pi/pull/12356) | Makes `pi --mode json` exit nonzero on final response failure (consistent with text mode). | [PR #12356](https://github.com/earendil-works/pi/pull/12356) |
| [#12352](https://github.com/earendil-works/pi/pull/12352) | Adds retry logic for gateway errors like “provider unavailable” or “connection reset”. | [PR #12352](https://github.com/earendil-works/pi/pull/12352) |

---

### **5. Hot Discussions**  
> *Note: Only one discussion was active in the last 24h.*

#### **Show & Tell**
- [#12364](https://github.com/earendil-works/pi/discussions/12364): **Claude Pro/Max Subscriptions Work in Pi Without Installing Claude Code**  
  - Leohenon demonstrates how `pi install npm:pi-anthropic-oauth` enables seamless access to Claude models directly via Pi’s toolchain.  
  - Highlights improved developer experience and reduced dependency overhead.  
  - 👍 1 reaction — valuable proof-of-concept for plugin-based model access.

---

### **6. Feature Request Trends**  
Top emerging directions from community feedback:  
- **Flexible Model Configuration**: Users want more granular control over cache warming horizons (`idle`), reasoning levels (`xhigh`), and model routing (e.g., virtual models with overrides).  
- **Enhanced Provider Compatibility**: Strong demand for support of non-standard model IDs (e.g., `google/gemini-*`), better handling of enterprise OAuth scopes, and cross-provider consistency.  
- **Improved Tooling & UX**: Requests for clearer visibility of skill activations, better session history management, and consistent error reporting across providers.  
- **Cross-Platform Reliability**: Persistent focus on fixing Windows-specific bugs (Git Bash truncation, console signals, path handling).

---

### **7. Developer Pain Points**  
Recurring frustrations observed across issues and PRs:  
- **Windows-Specific Bugs**: Silent command truncation, console signal handling, and process hanging under `pi -p` mode.  
- **Inconsistent Error Handling**: Missing or obscured error codes (e.g., OpenAI SSE errors lost before retry classification).  
- **Performance Bottlenecks**: Quadratic scaling in model catalog merging, memory exhaustion in large sessions (>120k entries).  
- **Tool Visibility Issues**: Batching hides individual `tools.read()` calls; skill activations are obscured in UI.  
- **Enterprise Integration Gaps**: OAuth failures with Team/Enterprise accounts, proxy misconfiguration with AWS/Bedrock.  

---  
*Digest generated: 2026-11-21 | Source: [github.com/earendil-works/pi](https://github.com/earendil-works/pi)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-11-21

---

### **1. Today's Highlights**  
The Qwen Code team released **v0.28.3**, marking a minor but impactful update focused on stability and CI/CD hygiene. Key developments include enhanced background task visualization in the web shell via composer chips, and critical fixes to runtime state management in ephemeral environments. A surge in CI failures across managed agent and E2E test gates highlights ongoing integration challenges.

---

### **2. Releases**

- **v0.28.3** (Released 2026-11-21)  
  [PR #17977](https://github.com/QwenLM/qwen-code/pull/17977)  
  Automated release with updated package versions and changelog sync. No functional changes—focused on release pipeline integrity.

- **v0.28.1-preview.1**  
  [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.1-preview.1)  
  Preview build introducing early feedback for new features in managed agent scheduling and web shell UX refinements.

- **v0.28.0-nightly.20261120.19b31401f5**  
  [Nightly Build](https://github.com/QwenLM/qwen-code/actions/runs/44775447485)  
  Contains experimental improvements to managed agent runtime provisioning and session recovery logic.

---

### **3. Hot Issues**

| Issue | Summary | Why It Matters | Community Reaction |
|------|--------|----------------|--------------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failure: Managed Agent gate — no test identified | High-severity blocker affecting all PRs touching managed agent scope; currently has **508 comments**. Indicates systemic test discovery or workflow misconfiguration. | 🔥 *Most active issue*; widespread concern about merge safety |
| [#11680](https://github.com/QwenLM/qwen-code/issues/11680) | Main CI failed: E2E Tests — no test identified | Continues to block merges despite multiple re-runs; suggests flaky test detection or missing test metadata. | 📌 *Critical regression tracking* |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | Daily dependency CVE audit failed | Security risk due to unpatched vulnerabilities in dependencies; requires immediate triage. | ⚠️ *High-priority security alert* |
| [#16091](https://github.com/QwenLM/qwen-code/issues/16091) | `node`: 300 no-gap toggles during 5000-line flood stay byte-exact | Memory/determinism bug in core unit tests; may impact real-world code generation fidelity. | 💡 *Deep technical concern* |
| [#17934](https://github.com/QwenLM/qwen-code/issues/17934) | E2E Test: session recovery after SIGKILL | New failure post-merge; indicates instability in daemon lifecycle handling. | 🧪 *Fresh regression* |
| [#17957](https://github.com/QwenLM/qwen-code/issues/17957) | Managed Agent gate: `builtinProvidersAreTrulyOptionalOnTheApplicationClasspath` fails | Breaks Java SDK compatibility; affects plugin loading behavior. | 🔥 *Blocking for Java users* |
| [#17086](https://github.com/QwenLM/qwen-code/issues/17086) | `qwen4-max-preview`: Chinese tool-URL rule leaks into context | Model treats internal server-side instruction as prompt injection — serious hallucination risk. | ❗ *Model safety red flag* |
| [#17523](https://github.com/QwenLM/qwen-code/issues/17523) | Pre-admission load refusals consume retry budget | Causes unnecessary retry exhaustion; impacts session reliability under load. | ⏳ *Performance/UX pain point* |
| [#17885](https://github.com/QwenLM/qwen-code/issues/17885) | Windows Java lane fails due to argv > 32767 limit | Platform-specific regression breaking Windows builds since Nov 19. | 🖥️ *Cross-platform compatibility issue* |
| [#17980](https://github.com/QwenLM/qwen-code/issues/17980) | Peer discovery omits live sessions due to descriptor exhaustion | Can lead to false-negative session availability; high risk in distributed environments. | 🔄 *Network resilience concern* |

---

### **4. Key PR Progress**

| PR | Summary | Impact |
|----|--------|--------|
| [#17964](https://github.com/QwenLM/qwen-code/pull/17964) | Fix: Create ephemeral Runtime state dir at spawn time | Prevents filesystem pollution during provider creation; improves sandbox isolation. |
| [#17970](https://github.com/QwenLM/qwen-code/pull/17970) | Compact automatic trigger messages in Web Shell | Reduces UI clutter for cron/self-paced `/loop` events; better UX for long-running agents. |
| [#17952](https://github.com/QwenLM/qwen-code/pull/17952) | Add contract-driven ChatSurface chat column | Enables unified rendering of chat UI across platforms; foundational for future modularity. |
| [#17919](https://github.com/QwenLM/qwen-code/pull/17919) | Retire SpotBugs exclusion with analyzer-visible assertion | Improves static analysis coverage and reduces false negatives in receipt verification. |
| [#17471](https://github.com/QwenLM/qwen-code/pull/17471) | Unify unbound Session authority under ownership row | Critical step toward secure, auditable session ownership model. |
| [#17965](https://github.com/QwenLM/qwen-code/pull/17965) | Restore rule: no filesystem touch during provider creation | Reinforces clean separation between provider construction and runtime execution. |
| [#17910](https://github.com/QwenLM/qwen-code/pull/17910) | Retain oversized transcript indexes in bounded cache class | Solves performance bottleneck when handling large transcripts; avoids admission rejection. |
| [#17982](https://github.com/QwenLM/qwen-code/pull/17982) | Isolate standalone runtime regression from ambient env | Makes test hermetic; reduces flakiness in local CI runs. |
| [#17953](https://github.com/QwenLM/qwen-code/pull/17953) | Implement Phase 3b: Runtime-owned background observation | Enables deeper monitoring of running agents without relying on harness process. |
| [#17903](https://github.com/QwenLM/qwen-code/pull/17903) | Gate Teams channel on npm publishing bootstrap | Prevents accidental public release until manual approval — enhances release control. |

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**

The community is increasingly focused on three core areas:

1. **Agent Lifecycle & Reliability**  
   - Persistent session recovery after crashes (`SIGKILL`, daemon restart)  
   - Runtime state isolation and ephemeral environment safety  
   - Background task visibility and compact UI presentation  

2. **Cross-Platform & Internationalization**  
   - Arabic RTL support in CLI and Web Shell ([#17437](https://github.com/QwenLM/qwen-code/pull/17437))  
   - Dark theme logo optimization ([#17935](https://github.com/QwenLM/qwen-code/pull/17935))  
   - Better internationalized error messages and diagnostics  

3. **Developer Tooling & Observability**  
   - Unified chat surface and contract-driven UI components ([#17952](https://github.com/QwenLM/qwen-code/pull/17952))  
   - JSONL append diagnostics and platform coverage ([#17852](https://github.com/QwenLM/qwen-code/issues/17852))  
   - Improved token accounting across dashboard and stats APIs ([#17902](https://github.com/QwenLM/qwen-code/pull/17902))

---

### **7. Developer Pain Points**

- **CI/CD Flakiness & Failure Noise**:  
  Multiple issues (#14724, #11680, #13078) highlight that CI failures are either not reporting actual test results or are being triggered by non-test issues. This leads to wasted review cycles and merge delays.

- **Platform-Specific Bugs**:  
  The Windows Java lane failure due to `argv` size limits ([#17885](https://github.com/QwenLM/qwen-code/issues/17885)) reveals fragile assumptions in command-line argument handling, especially in high-load scenarios.

- **Test Hermeticity & Debuggability**:  
  Many failures stem from environmental interference (e.g., `CLI_VERSION`, `NODE_OPTIONS`). PRs like [#17982](https://github.com/QwenLM/qwen-code/pull/17982) address this, but it remains a recurring theme.

- **Security & Stability Gaps**:  
  Leaked internal instructions causing prompt injection ([#17086](https://github.com/QwenLM/qwen-code/issues/17086)), and unbounded retry budgets consuming resources ([#17523](https://github.com/QwenLM/qwen-code/issues/17523)) indicate deeper architectural risks in agent trust boundaries.

- **Tooling Conflicts & Migration Hazards**:  
  File overwrite bugs during TOML-to-Markdown migration ([#17628](https://github.com/QwenLM/qwen-code/issues/17628), [#17873](https://github.com/QwenLM/qwen-code/pull/17873)) show need for safer file operation semantics in tooling pipelines.

---  
*Digest compiled from GitHub activity on 2026-11-21. For full context, explore the linked issues and PRs.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*