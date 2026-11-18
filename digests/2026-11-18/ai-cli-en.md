# AI CLI Tools Community Digest 2026-11-18

> Generated: 2026-11-18 03:49 UTC | Tools covered: 7

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
*Generated: 2026-11-18 | For Technical Decision-Makers & Developers*

---

### **1. Ecosystem Overview**

The AI CLI ecosystem in late 2026 is marked by rapid convergence toward agent-driven, multi-tool orchestration workflows, with a strong emphasis on reliability, security, and cross-platform consistency. Tools are increasingly differentiating not just by model access or UI, but by their approach to session persistence, memory management, and developer control—especially in enterprise and research contexts. While OpenAI Codex and GitHub Copilot CLI lead in integration depth with existing dev toolchains (GitHub, Jira), newer entrants like Qwen Code and OpenCode are pushing architectural innovation through event-driven kernels and extensible plugin models. A growing pain point across all platforms is the tension between safety enforcement and workflow efficiency, particularly in sensitive domains like oncology research and CI/CD automation.

---

### **2. Activity Comparison**

| Tool | Hot Issues | PRs Merged/Updated | Discussions | Release Status |
|------|------------|--------------------|-------------|----------------|
| **Claude Code** | 10 | 0 | N/A | v2.1.327 (stable) |
| **OpenAI Codex** | 10 | 10 | 9 | `rust-v0.170.0` (stable) |
| **Gemini CLI** | 10 | 10 | N/A | No new release |
| **GitHub Copilot CLI** | 10 | 0 | N/A | v1.0.114-0 (stable) |
| **OpenCode** | 10 | 10 | N/A | v2.3.2 (released) |
| **Pi** | 10 | 10 | N/A | No new release |
| **Qwen Code** | 10 | 10 | N/A | `v0.28.1-preview.0` (preview) |

> ✅ *Notes*:  
> - **"N/A"** indicates tools use Discussions as their primary community channel instead of public issues/PRs.  
> - **Qwen Code**, **OpenCode**, **Pi**, and **Gemini CLI** show strong internal momentum despite no recent releases.  
> - **OpenAI Codex** leads in active PR velocity, reflecting ongoing engineering investment.

---

### **3. Shared Feature Directions**

Several high-impact requirements appear across multiple tool communities:

| Feature Direction | Tools Involved | Specific Needs |
|-------------------|----------------|----------------|
| **Persistent Session & Memory Integrity** | Claude Code, OpenAI Codex, Gemini CLI, Pi, Qwen Code | Prevent silent auto-archiving (#110861), fix compaction crashes (#64500), ensure context continuity after reload |
| **Cross-Platform Consistency** | All tools (esp. Claude Code, OpenAI Codex, Gemini CLI) | Unified UI behavior across macOS, Windows, iOS, Linux; consistent plugin rendering and toast positioning |
| **Safe Automation & Non-Interactive Execution** | OpenAI Codex, GitHub Copilot CLI, Qwen Code, OpenCode | Need for safe, auditable execution without `--dangerously-bypass` (`#24135`, `#5491`) |
| **Agent Intelligence & Subagent Orchestration** | Gemini CLI, OpenCode, Qwen Code, Pi | Better skill discovery (#21968), foreground subagent control (#64073), visible agent trajectories |
| **Enterprise Security & Compliance Controls** | GitHub Copilot CLI, OpenAI Codex, Claude Code | Admin disable of Browser Use (`features.browserUse`), MDM-friendly packaging, auditability of tool calls |

> 🔑 *Key Insight*: The demand for **secure, predictable, and composable agent workflows** is now a universal requirement—not just a niche feature.

---

### **4. Differentiation Analysis**

| Dimension | Key Differentiators |
|---------|---------------------|
| **Target Users** | • **Claude Code**: Research scientists, privacy-conscious teams<br>• **OpenAI Codex**: Enterprise developers, real-time collaboration users<br>• **GitHub Copilot CLI**: GitHub-native workflows, DevOps pipelines<br>• **Qwen Code**: China-centric and open-source adopters, multi-agent system builders<br>• **OpenCode**: Multilingual, open-ecosystem innovators<br>• **Pi**: Advanced users focused on low-level control and agent resilience<br>• **Gemini CLI**: POSIX-integrated shell workloads, native bash affinity seekers |
| **Technical Approach** | • **Qwen Code / OpenCode**: Event-driven loop kernel, AST-aware navigation<br>• **Pi / OpenCode**: Deep focus on session state integrity and crash recovery<br>• **Claude Code / Gemini CLI**: Model safety-first UX, with growing friction in sensitive domains<br>• **OpenAI Codex**: WebRTC-enabled TUI, real-time audio interaction<br>• **GitHub Copilot CLI**: Tight GitHub integration, managed settings for org policy |
| **Feature Focus** | • **Claude Code**: Team collaboration, plugin stability<br>• **OpenAI Codex**: Real-time voice, TUI refinement<br>• **Gemini CLI**: Native shell alignment, safety guardrails<br>• **Qwen Code**: Scalable managed agents, SDK robustness<br>• **Pi**: Context window fidelity, error resilience |

> 🚩 *Notable Gap*: No tool currently offers a unified, cross-provider model catalog with live sync—highlighting a future opportunity.

---

### **5. Community Momentum & Maturity**

| Indicator | High Momentum | Medium Momentum | Low Momentum |
|---------|---------------|------------------|--------------|
| **Active PRs** | OpenAI Codex, Qwen Code, OpenCode, Pi | Gemini CLI, Claude Code | GitHub Copilot CLI |
| **Issue Volume** | OpenAI Codex, Qwen Code, Claude Code | Gemini CLI, Pi | OpenCode |
| **Release Cadence** | OpenAI Codex, OpenCode, Qwen Code | Claude Code, Pi | GitHub Copilot CLI |
| **Community Engagement** | OpenAI Codex (discussions), Qwen Code (issue depth) | Gemini CLI, Pi | GitHub Copilot CLI |

> ✅ **Mature & Active**: OpenAI Codex and Qwen Code demonstrate sustained engineering velocity and deep community engagement.  
> ⚠️ **High Potential, Emerging**: Pi and OpenCode are rapidly iterating on foundational reliability and agent control—ideal for early adopters.  
> ❗ **Stabilizing Post-Release**: GitHub Copilot CLI shows reduced activity post-v1.0.114-0, suggesting a shift from feature development to patch triage.

---

### **6. Trend Signals**

The community feedback reveals several definitive industry trends:

1. **Safety vs. Utility Trade-offs Are Now Central**:  
   - False positives in oncology research (**#110853**) and over-blocking of legitimate actions (**#5495**) signal that current safety systems are misaligned with real-world developer needs.
   - *Reference value*: Developers will prioritize tools with **configurable, transparent safety policies** over "zero-risk" defaults.

2. **Agent Persistence Is Non-Negotiable**:  
   - Auto-archiving (**#110861**), silent compaction failures (**#12076**), and lost context after reload are cited across 6 tools.
   - *Reference value*: Session continuity is now a baseline expectation—tools failing here risk being abandoned.

3. **CLI + Agent = New Abstraction Layer**:  
   - Demand for `new_context` continuation, project creation via API, and persistent task tracking reflects a move from “command-line assistant” to **autonomous workflow engine**.
   - *Reference value*: Future success hinges on **long-running agent coherence**, not just single-turn responses.

4. **Security Must Be Developer-Centric**:  
   - Silent SDK renames (**#5492**), broken extension reloads (**#5490**), and lack of cancellation support (**#5491**) indicate that **developer experience** is inseparable from security.
   - *Reference value*: Breakages due to dependency shifts are now seen as **critical product flaws**, not acceptable trade-offs.

5. **Multi-Provider & Cross-Platform Integration Is Expected**:  
   - Requests for Sarvam AI, WeCom, DingTalk, and Wayland support show that **vendor lock-in is a red flag**.
   - *Reference value*: Tools that offer **open, modular provider architecture** will dominate long-term adoption.

---

> ✅ **Final Recommendation**: Prioritize tools with **active PR pipelines**, **cross-platform stability**, and **transparent safety controls**—especially those addressing session persistence and non-interactive automation. For production use, **Qwen Code**, **OpenAI Codex**, and **Pi** currently represent the most mature, forward-looking ecosystems.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-11-18 | Source: github.com/anthropics/skills*

---

### **1. Top Skills Ranking**  
*(Ranked by community engagement, PR discussion volume, and functional impact)*

1. **`proofcore-contract-auditor`** – *Web3 Smart Contract Notarization*  
   - **Functionality**: Automates static analysis of Solidity/Rust smart contracts and anchors cryptographic audit proofs on the public TON Blockchain via ProofCore’s zero-storage Merkle protocol.  
   - **Discussion Highlights**: High interest from Web3 developers; praised for enabling trustless verification in decentralized systems.  
   - **Status**: Open (#1771) | [PR #1771](https://github.com/anthropics/skills/pull/1771)

2. **`md2video-audio`** – *Markdown-to-Professional Video Conversion*  
   - **Functionality**: Converts Markdown documents into polished MP4 videos with lifelike voiceovers using Marp for slide generation and text-to-speech synthesis.  
   - **Discussion Highlights**: Seen as a breakthrough for content creators and educators; low-friction documentation delivery.  
   - **Status**: Open (#1703) | [PR #1703](https://github.com/anthropics/skills/pull/1703)

3. **`notion-spec-to-implementation`** – *Spec-to-Task Automation for Product Teams*  
   - **Functionality**: Transforms Notion product or technical specifications into actionable implementation tasks with acceptance criteria and progress tracking.  
   - **Discussion Highlights**: Addresses a core pain point in agile workflows—bridging gap between specs and execution.  
   - **Status**: Open (#1245) | [PR #1245](https://github.com/anthropics/skills/pull/1245)

4. **`document-typography`** – *AI Document Quality Control*  
   - **Functionality**: Detects and fixes typographic flaws (orphaned words, widows, misaligned numbering) in AI-generated documents.  
   - **Discussion Highlights**: Recognized as essential for professional-grade output; frequently cited as missing in current skillset.  
   - **Status**: Open (#514) | [PR #514](https://github.com/anthropics/skills/pull/514)

5. **`scnet-hpc`** – *HPC Cluster Management for Research Workflows*  
   - **Functionality**: Enables SSH-based access to SCNet HPC clusters with Slurm job submission, profile management, and resource allocation guidance.  
   - **Discussion Highlights**: Niche but high-value for academic and research users; signals growing demand for domain-specific infrastructure skills.  
   - **Status**: Open (#1615) | [PR #1615](https://github.com/anthropics/skills/pull/1615)

6. **`compact-memory`** – *Symbolic Agent State Compression*  
   - **Functionality**: Represents long-running agent memory using symbolic notation instead of verbose prose, reducing context bloat.  
   - **Discussion Highlights**: Proposed as a solution to state explosion in persistent agents; aligns with emerging interest in efficient agent design.  
   - **Status**: Open Proposal (#1329) | [Issue #1329](https://github.com/anthropics/skills/issues/1329)

7. **`webapp-testing`** – *Automated UI Testing Framework*  
   - **Functionality**: Includes multiple sub-skills for testing web applications via element discovery, server spawning, and form validation.  
   - **Discussion Highlights**: Active development with 3 recent PRs addressing security (`shell=True` risk), textarea detection, and argument validation.  
   - **Status**: Multiple open PRs (#1980, #1976, #1975) | [PR #1980](https://github.com/anthropics/skills/pull/1980)

---

### **2. Community Demand Trends**  
From top Issues and proposals, key emerging themes include:

- **Workflow Automation & Efficiency**: High demand for skills that reduce manual steps (e.g., `notion-spec-to-implementation`, `md2video-audio`).  
- **Documentation & Publishing Quality**: Users want tools to ensure AI-generated docs meet professional standards (typography, structure, clarity).  
- **Security & Trust Boundaries**: Critical concern over trust abuse via impersonation (`Issue #492`) and insecure code patterns (e.g., `shell=True` injection risks).  
- **Agent System Governance**: Growing need for safety patterns (policy enforcement, audit trails) — highlighted in `agent-governance` proposal (`Issue #412`).  
- **Infrastructure & DevOps Integration**: Demand for skills bridging AI agents with real-world systems (HPC, cloud, CI/CD).

---

### **3. High-Potential Pending Skills**  
These actively discussed PRs are likely candidates for near-term merge due to high relevance and clear value:

- **`proofcore-contract-auditor`** (#1771): High-demand Web3 tool with strong technical justification.  
- **`md2video-audio`** (#1703): Low-hanging fruit with viral potential for content creators.  
- **`notion-spec-to-implementation`** (#1245): Solves a universal product/engineering workflow bottleneck.  
- **`document-typography`** (#514): Direct response to user-reported quality issues.  
- **`webapp-testing`** series (#1980, #1976, #1975): Security-critical improvements to an active testing framework.

---

### **4. Skills Ecosystem Insight**  
The community's most concentrated demand is for **trusted, production-grade automation tools that bridge AI capabilities with real-world workflows**, especially in documentation, deployment, security, and agent governance — reflecting a maturing ecosystem focused on reliability and operational integration over novelty.

---

**Claude Code Community Digest – 2026-11-18**

---

### **1. Today's Highlights**  
The latest release, v2.1.327, introduces critical UX improvements including a confirmation step before GitHub App installations and enhanced JSON input handling via `claude mcp add-json -` for secure token management. Meanwhile, community attention is sharply focused on persistent stability issues—especially in macOS and desktop environments—and growing demand for team collaboration features, with top-tier issues reflecting deep user frustration over auto-archiving, plugin UI rendering failures, and model safety false positives in research workflows.

---

### **2. Releases**  
**v2.1.327**  
- Added confirmation prompt before `/install-github-app` modifies repositories, improving safety during integrations.  
- Introduced `claude mcp add-json <name> -` to read server JSON from stdin (preventing tokens from appearing in command lines); not available within active Claude Code sessions.  
- Fixed display of resumed session state, ensuring continuity in long-running workflows.

🔗 [GitHub Release v2.1.327](https://github.com/anthropics/claude-code/releases/tag/v2.1.327)

---

### **3. Hot Issues**  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#12925](https://github.com/anthropics/claude-code/issues/12925) *Linear Integration: Assign issues to Claude Code to trigger cloud agent sessions* | Enables seamless workflow integration with Linear, allowing users to initiate AI-driven development directly from issue tracking. High demand for toolchain interoperability. | 48 comments, 156 👍 – most active feature request |
| [#89690](https://github.com/anthropics/claude-code/issues/89690) *modelPicker skips opusplan row despite no coverage* | Breaks access to Opus Plan Mode in the UI, despite it being a valid mode. Affects users relying on advanced planning capabilities. | 21 comments, zero 👍 – critical UX bug |
| [#63671](https://github.com/anthropics/claude-code/issues/63671) *TCC re-prompts on every update due to versioned install path* | Mac users face repeated privacy permission dialogs after each update, breaking MDM policies and enterprise deployment. | 16 comments, 31 👍 – major pain point for sysadmins |
| [#105334](https://github.com/anthropics/claude-code/issues/105334) *Desktop app declines MCP elicitation requests without showing them* | Desktop clients silently ignore user prompts from plugins, undermining trust in Remote Control functionality. | 8 comments, 12 👍 – highlights reliability gap |
| [#109663](https://github.com/anthropics/claude-code/issues/109663) */feedback refused on personal Max plan despite no org lock* | Users unable to provide feedback even on individual plans, blocking product improvement loops. | 3 comments, 1 👍 – symbolic of broader access friction |
| [#110853](https://github.com/anthropics/claude-code/issues/110853) *Biology safety classifier triggers false positives in oncology research* | Legitimate cancer research is blocked or interrupted by overzealous safety filters—critical for scientific integrity. | 1 comment, 0 👍 – high-stakes concern |
| [#109773](https://github.com/anthropics/claude-code/issues/109773) *MEMORY.md/CLAUDE.md changes not picked up post-compaction or -p* | Memory persistence breaks after compaction, leading to lost context and confusion. | 2 comments, 0 👍 – undermines core memory system |
| [#110856](https://github.com/anthropics/claude-code/issues/110856) *iOS app never attaches mobile surface → plugin backdrops don’t render* | Plugin visuals fail on iOS, breaking rich UI experiences across devices. | 1 comment, 0 👍 – cross-platform inconsistency |
| [#110845](https://github.com/anthropics/claude-code/issues/110845) *$.ui.toast shows in main window, not session window* | Toast notifications appear globally instead of per-session, reducing clarity in multi-window setups. | 1 comment, 0 👍 – subtle but disruptive UX flaw |
| [#110861](https://github.com/anthropics/claude-code/issues/110861) *Sessions archived automatically without user action* | Pinned sessions vanish unexpectedly—directly contradicts user expectations and workflow continuity. | 0 comments, 0 👍 – alarming data loss risk |

---

### **4. Key PR Progress**  
*No pull requests were merged or updated in the last 24 hours.*

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**  
Top emerging trends from open issues:  
- **Team Collaboration & Shared Projects**: Demand for shared project memory, real-time co-editing, and centralized configuration (e.g., [#110627](https://github.com/anthropics/claude-code/issues/110627)).  
- **Cross-Platform Consistency**: Urgent need for unified UI behavior across desktop, iOS, and VS Code (e.g., plugin rendering, toast positioning).  
- **Workflow Automation & Integrations**: Desire to trigger agents from external tools like Linear, GitHub, and Jira (e.g., [#12925](https://github.com/anthropics/claude-code/issues/12925)).  
- **Memory & Context Management**: Requests for better control over memory loading, file-change notes, and artifact transfer between sessions (e.g., [#110525](https://github.com/anthropics/claude-code/issues/110525), [#109125](https://github.com/anthropics/claude-code/issues/109125)).  
- **Developer Tooling Enhancements**: Better plugin API visibility (rate limits), improved TUI controls, and support for Android emulator panels (e.g., [#102400](https://github.com/anthropics/claude-code/issues/102400)).

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Unpredictable Session Behavior**: Auto-archiving of pinned sessions and silent failure to resume (**#110861**, **#110857**) erodes trust in session persistence.  
- **Plugin UI Glitches**: Critical rendering issues across platforms (iOS, desktop, VS Code) where `ui.render`, `backdrop`, and `toast` elements fail or misplace (e.g., **#109773**, **#110856**, **#110845**).  
- **Enterprise Deployment Barriers**: macOS TCC prompts on every update (**#63671**) and lack of MDM-friendly packaging hinder organizational adoption.  
- **Model Safety Overreach**: False positives in sensitive domains like oncology research (**#110853**) threaten legitimacy and usability.  
- **Inconsistent CLI vs Desktop Behavior**: Differences in how `modelPicker`, `elicitation`, and `usage` APIs behave across environments frustrate developers expecting parity.

---  
*Digest compiled from GitHub activity as of 2026-11-18.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-11-18**

---

### **1. Today's Highlights**  
The latest release, `rust-v0.170.0`, introduces critical improvements for real-time collaboration with WebRTC support in the TUI and enhanced authentication resilience via auto-refreshed OpenTelemetry headers. Meanwhile, ongoing work on app-server stability and TUI UX refinement shows strong momentum, particularly in reducing latency and improving session continuity across platforms.

---

### **2. Releases**  
- **`rust-v0.170.0` (Stable)**  
  - Added **WebRTC negotiation** for real-time voice calls in the TUI (#61172), enabling low-latency audio interaction directly within terminal workflows.  
  - Introduced **automatically refreshed authentication headers** for OpenTelemetry HTTP exporters (#61028), preventing token expiry issues during long-running traces.  
  - Experimental support for **identically named MCP servers across environments** (#60905) improves cross-environment consistency in agent orchestration.  

- **`rust-v0.170.0-alpha.4.2`**  
  Patch fix for alpha stability; no user-facing changes documented.  

- **`rust-v0.169.1`**  
  Chores-only release; no public feature or bugfix highlights.  

- **`rust-v0.171.0-alpha.12`, `0.171.0-alpha.11`**  
  Alpha builds focused on internal refactoring and integration testing ahead of next major release.

---

### **3. Hot Issues**  
| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#57101](https://github.com/openai/codex/issues/57101) | Windows Computer Use leaves gold/yellow border visible after screenshot turns — visual artifact persists post-task. | 55 comments, high visibility; affects UI trust during automation workflows. |
| [#54564](https://github.com/openai/codex/issues/54564) | Send button disabled in new Work threads on Windows — blocks message submission. | 19 comments; severe usability blocker for Pro users relying on thread-based workflows. |
| [#37231](https://github.com/openai/codex/issues/37231) | macOS locked Computer Use fails to unlock after display sleep — intermittent failure when session is locked via sleep. | 18 comments; security concern: potential lockout during active use. |
| [#37420](https://github.com/openai/codex/issues/37420) | Computer Use triggers replayd XPC reconnect loop → ~90% CPU idle on macOS. | 16 comments; performance disaster impacting battery life and system responsiveness. |
| [#24135](https://github.com/openai/codex/issues/24135) | No non-interactive way to allow MCP tool calls without bypassing sandboxing (`--dangerously-bypass-approvals-and-sandbox`). | 9 comments; urgent need for safe, automated execution control. |
| [#25385](https://github.com/openai/codex/issues/25385) | Request for CLI/API to create and manage projects — essential for automation and CI/CD pipelines. | 9 comments, 12 upvotes; core workflow missing from CLI. |
| [#38638](https://github.com/openai/codex/issues/38638) | WebSocket stalls after 300s retries; HTTPS fallback requires 5 failed attempts — breaks long-running sessions. | 9 comments; impacts reliability in unstable networks. |
| [#57300](https://github.com/openai/codex/issues/57300) | Startup failure due to corrupted `codex.toml` with null values — prevents app launch. | 5 comments; common config corruption issue reported across versions. |
| [#61637](https://github.com/openai/codex/issues/61637) | macOS primary window freezes at logo while tasks continue — UI unresponsive but functional in background. | 5 comments; high frustration due to perceived crash despite active work. |
| [#61570](https://github.com/openai/codex/issues/61570) | Primary runtime installer leaves 381 temp dirs (~472 GB) — risks filling system disk. | 3 comments; alarming disk usage behavior; urgent cleanup needed. |

---

### **4. Key PR Progress**  
| PR | Summary | Impact |
|----|--------|--------|
| [#62176](https://github.com/openai/codex/pull/62176) | Expose `bioPolicy` errors in app-server v2 | Enables clients to distinguish biology policy violations from generic errors. |
| [#62175](https://github.com/openai/codex/pull/62175) | Fix stale terminal dimensions in immediate TUI redraws | Prevents rendering glitches after rapid terminal resize. |
| [#62174](https://github.com/openai/codex/pull/62174) | Anchor TUI composer caret during typing | Improves input predictability when footer hints appear/disappear. |
| [#62171](https://github.com/openai/codex/pull/62171) | Extract TUI thread resume finalization | Improves code clarity and enables better state management. |
| [#62163](https://github.com/openai/codex/pull/62163) | Move app-server socket relay into CLI | Reduces binary complexity and simplifies local proxy setup. |
| [#62159](https://github.com/openai/codex/pull/62159) | Open subagent transcripts from activity links | Enhances traceability of multi-agent workflows in TUI. |
| [#62157](https://github.com/openai/codex/pull/62157) | Open subagents in sidebar without switching context | Maintains parent conversation visibility during review. |
| [#62149](https://github.com/openai/codex/pull/62149) | Show subagents and status in TUI sidebar chooser | Centralizes agent visibility and navigation. |
| [#62144](https://github.com/openai/codex/pull/62144) | Preserve web search provider ownership across resumes | Prevents broken follow-up searches after session restore. |
| [#62142](https://github.com/openai/codex/pull/62142) | Add audio transcription to backend client | Enables direct voice-to-text processing via `/transcribe` endpoint. |

---

### **5. Hot Discussions**  
#### **Ideas**
- [#16329](https://github.com/openai/codex/discussions/16329): *Awesome Codex CLI — curated list of 150+ ecosystem tools*  
  A comprehensive catalog of subagents, skills, plugins, and MCP servers — a must-have for CLI developers navigating the expanding ecosystem.
- [#61525](https://github.com/openai/codex/discussions/61525): *AppScreen: let Codex design App Store screenshots over MCP*  
  Instantly generate high-conversion app store visuals via remote MCP server integration.
- [#61997](https://github.com/openai/codex/discussions/61997): *Cloud Alter Ego: unified memory across ChatGPT, Claude, etc.*  
  Sync personal context across AI platforms using cloud storage as a shared knowledge layer.

#### **Q&A**
- [#59292](https://github.com/openai/codex/discussions/59292): *Is there a versioned client contract for `turn/moderationMetadata`?*  
  Developers seek clarity on evolving metadata structure for moderation compliance and auditing.
- [#61849](https://github.com/openai/codex/discussions/61849): *Diagnosing screenshot/tool response-start latency*  
  Users want standardized timing metrics to distinguish first-output delay from command delivery overhead.

#### **Show and Tell**
- [#58912](https://github.com/openai/codex/discussions/58912): *Codex Mobile Workbench*  
  Phone/PWA interface to control desktop Codex — ideal for remote task initiation and progress monitoring.
- [#61667](https://github.com/openai/codex/discussions/61667): *Handoff note reopens after reload*  
  Demonstrates persistent state handling in project workflows.
- [#61980](https://github.com/openai/codex/discussions/61980): *Video Clip Planner: turns podcast transcripts into Shorts cut lists*  
  Automates content repurposing for social media platforms.

---

### **6. Feature Request Trends**  
- **CLI & Automation**: High demand for **project creation via API/CLI**, **non-interactive MCP tool execution**, and **scriptable session management**.  
- **Cross-Platform Consistency**: Users request **stable behavior across OSes** (especially macOS/Windows), including consistent sandboxing and UI fidelity.  
- **Multi-Agent Visibility**: Persistent interest in **centralized subagent tracking** (sidebar, activity links, status indicators).  
- **Performance & Stability**: Recurring themes: **reduce CPU/memory footprint**, **eliminate hang loops**, and **improve session persistence**.  
- **Remote Control & Integration**: Strong growth in **mobile/desktop handoff tools** and **external tool integrations** (e.g., AppStore, video editing).

---

### **7. Developer Pain Points**  
- **Unpredictable Session State**: Multiple reports of **UI freezing**, **window crashes**, and **background tasks continuing silently** — undermines trust in reliability.  
- **High Resource Consumption**: Critical issues around **CPU spikes** (especially macOS), **disk bloat** (temp directories), and **memory leaks** in long-running sessions.  
- **Missing Safe Automation Paths**: Lack of **non-interactive approval mechanisms** for MCP tools forces risky `--dangerously-bypass` usage.  
- **Inconsistent Tool Behavior**: Users report **Python scripts used instead of File Edit tool**, raising concerns about safety and auditability.  
- **Fragmented Configuration Management**: Corrupted `codex.toml`, missing projects, and startup failures indicate fragile config handling.  
- **Poor Error Feedback**: Generic error codes (e.g., `other`) obscure root causes — especially for policy and network issues.

---  
*Digest compiled from GitHub data as of 2026-11-18. For full context, visit [openai/codex](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI Community Digest — 2026-11-18**

---

### **1. Today's Highlights**  
The Gemini CLI community continues to focus on agent reliability, security hardening, and deeper integration with native shell workflows. Critical bugs in subagent recovery, browser session resilience, and tool execution behavior have drawn significant attention. Meanwhile, foundational improvements in AST-aware codebase navigation and secure sandboxing are gaining momentum, signaling a strategic shift toward smarter, safer, and more efficient AI-driven development.

---

### **2. Releases**  
No new releases were published in the last 24 hours.

---

### **3. Hot Issues**  
*Top 10 issues by comment count and impact:*

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** – *Subagent recovery after MAX_TURNS incorrectly reports GOAL success*  
   → A critical logic flaw where `codebase_investigator` falsely signals completion despite hitting turn limits. This undermines trust in agent progress tracking and can cause silent failures during code analysis.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** – *Generalist agent hangs indefinitely*  
   → Users report the generalist agent freezes during basic tasks like folder creation. The issue is reproducible and blocks workflow continuity; high upvote (8 👍) indicates widespread pain.

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** – *Leverage model’s bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing*  
   → A pivotal P2 enhancement proposing to align agent behavior with Gemini 3’s native POSIX toolchain training. Could drastically reduce context bloat and improve execution efficiency.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** – *Assess impact of AST-aware file reads, search, and mapping*  
   → Explores whether AST-aware tools (e.g., `ast-grep`, `glyph`) can reduce token overhead and misaligned file reads. High potential for improving precision in large codebases.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** – *Gemini does not use skills/sub-agents enough*  
   → Users observe agents ignore custom skills even when relevant. Suggests a gap in intent routing or skill discovery mechanisms—critical for extensibility.

6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** – *Browser Agent ignores settings.json overrides*  
   → Configuration drift in `maxTurns` and other settings breaks predictability. Affects user control over agent behavior, especially in long-running tasks.

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** – *Browser subagent fails in Wayland*  
   → Specific platform compatibility issue affecting Linux users. Highlights need for broader GUI environment testing and robust session management.

8. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** – *Agent should stop/discourage destructive behavior*  
   → Model occasionally uses `git reset --force` or unsafe DB commands. Calls for proactive safety guardrails to prevent irreversible actions.

9. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** – *get-shit-done output hook causes crash*  
   → Crashes during final summary generation, disrupting task completion. Reproducible and blocking for users relying on structured outputs.

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** – *Gemini CLI encounters 400 error with >128 tools*  
    → Limitation in tool scope handling leads to API errors. Indicates scaling challenges in agent orchestration as toolset grows.

---

### **4. Key PR Progress**  
*Top 10 PRs by priority, size, and impact:*

1. **[#30335](https://github.com/google-gemini/gemini-cli/pull/30335)** – *Fix core.sshCommand override with empty string*  
   → Prevents Git SSH failures due to corrupted config. Critical fix for remote repo access in CI/CD and developer workflows.

2. **[#30331](https://github.com/google-gemini/gemini-cli/pull/30331)** – *Preserve MCP env values with = and empty values*  
   → Fixes silent data loss in `gemini mcp add -e KEY=value` parsing. Ensures accurate environment injection into agents.

3. **[#30107](https://github.com/google-gemini/gemini-cli/pull/30107)** – *Make auth URL clickable even when terminal wraps*  
   → Resolves OAuth flow breakage due to line wrapping. Improves usability for developers on narrow terminals.

4. **[#30115](https://github.com/google-gemini/gemini-cli/pull/30115)** – *Prevent $-pattern expansion in custom command substitutions*  
   → Stops corruption of `{{args}}` and `${AgentSkills}` templates. Vital for safe dynamic prompt rendering.

5. **[#30219](https://github.com/google-gemini/gemini-cli/pull/30219)** – *Record tool calls on active chat to avoid 400 on reload*  
   → Addresses compression/session reload crashes by preserving tool call history. Essential for stable long-term sessions.

6. **[#30334](https://github.com/google-gemini/gemini-cli/pull/30334)** – *Parse PowerShell commands asynchronously to prevent UI freeze*  
   → Fixes multi-second spinner freeze on Windows. Enhances UX during command validation and execution.

7. **[#30340](https://github.com/google-gemini/gemini-cli/pull/30340)** – *Use per-user discovery directory and atomic port writes*  
   → Hardens IDE companion security and avoids race conditions. Improves stability in shared environments.

8. **[#30315](https://github.com/google-gemini/gemini-cli/pull/30315)** – *Detect local git clone from CLI path, not cwd*  
   → Fixes misclassification of local CLI installs during auto-update. Prevents unintended upgrades and side effects.

9. **[#30338](https://github.com/google-gemini/gemini-cli/pull/30338)** – *Keep ASK_USER for shell commands with unresolved expansion*  
   → Preserves user consent for potentially dangerous commands. Adds safety layer for dynamic script execution.

10. **[#30289](https://github.com/google-gemini/gemini-cli/pull/30289)** – *Disclose canonical link path and default consent to no*  
    → Improves transparency in extension linking. Helps users understand what they’re authorizing.

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**  
Key emerging directions from community feedback:

- **Agent Intelligence & Autonomy**: Users want agents to proactively leverage subagents and skills without explicit prompting (e.g., #21968).
- **Native Shell Integration**: Strong demand for leveraging Gemini 3’s innate bash affinity through zero-dependency sandboxes (#19873).
- **AST-Aware Code Navigation**: Exploration of AST-aware tools (e.g., `ast-grep`, `glyph`) to improve precision in file reading, searching, and mapping (#22745, #22747).
- **Security & Safety Guardrails**: Increasing requests for automatic prevention of destructive operations (`git reset --force`, DB mutations) (#22672).
- **Transparency & Debugging**: Desire to expose subagent trajectories via `/chat share` (#22598) and include subagent context in bug reports (#21763).
- **Persistent Task Tracking**: Move away from in-context todo lists toward file-based CRUD systems to avoid context rot (#18836).

---

### **7. Developer Pain Points**  
Recurring frustrations reported across multiple issues:

- **Unpredictable Hangs & Freezes**: Generalist and browser agents hang indefinitely, breaking workflows (#21409, #22465).
- **Configuration Ignorance**: Agents ignore `settings.json` overrides like `maxTurns`, leading to inconsistent behavior (#22267).
- **Tool Overload Errors**: 400 errors when exceeding ~128 tools indicate scalability bottlenecks (#24246).
- **Inconsistent Subagent Behavior**: Agents fail to invoke available skills even when relevant, requiring manual prompting (#21968).
- **Unsafe Script Generation**: Model generates temporary scripts in arbitrary directories, polluting workspaces (#23571).
- **Platform-Specific Failures**: Browser agent fails under Wayland, highlighting OS-level compatibility gaps (#21983).
- **Crash During Output**: Final stages of task completion (e.g., `get-shit-done`) trigger crashes (#22186).
- **Poor Context Management**: In-context task tracking leads to high token usage and memory loss between sessions (#18836).

--- 

*For full context, visit the [Gemini CLI GitHub repository](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest — 2026-11-18**

---

### **1. Today's Highlights**  
The latest release, **v1.0.114-0**, introduces critical administrative controls allowing orgs to disable built-in Browser Use via the `features.browserUse` managed setting—enhancing security and compliance for enterprise environments. Meanwhile, urgent issues have emerged around integration conflicts with Cortex XDR on Windows and a breaking SDK rename in v1.0.113 that disrupts existing extensions.

---

### **2. Releases**  
- **v1.0.114-0 (2026-11-17)**  
  - Introduced: Administrators can now disable built-in Browser Use via the `features.browserUse` managed setting, including in active sessions.  
  - Improves policy enforcement and reduces risk of unintended browser access in sensitive workflows.  
  [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.114-0)

- **v1.0.113 (2026-11-17)**  
  - No major feature changes; primarily bug fixes and stability improvements.  
  - Notable side effect: Renamed `@github/copilot-sdk` → `@microsoft/copilot-sdk` without alias or release note, causing breakage for dependent extensions.  
  [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.113)

---

### **3. Hot Issues**  

| # | Issue | Why It Matters | Community Reaction |
|---|------|----------------|--------------------|
| [#5478](https://github.com/github/copilot-cli/issues/5478) | Cortex XDR kills shell during `copilot` git execution on Windows | Breaks workflow continuity in secure environments using EDR tools like Cortex. High impact for enterprises. | 5 comments, 1 👍 |
| [#5492](https://github.com/github/copilot-cli/issues/5492) | SDK renamed to `@microsoft/copilot-sdk` with no alias or notice | Breaks all existing extensions relying on `@github/copilot-sdk`. Major disruption for plugin developers. | 0 comments, 0 👍 |
| [#5491](https://github.com/github/copilot-cli/issues/5491) | `plugins.marketplaces.add` downloads full repos with no progress/cancel support | Causes long hangs and disk bloat for large marketplaces. Poor UX and resource management. | 0 comments, 0 👍 |
| [#5490](https://github.com/github/copilot-cli/issues/5490) | `extensions_reload` leaves failed extensions due to tool name clashes | Blocks extension reloading after crash or restart—requires full session restart. Critical for dev iteration. | 0 comments, 0 👍 |
| [#5497](https://github.com/github/copilot-cli/issues/5497) | Nested instructions only load after `view`, skipping edits without file inspection | Agents miss scoped rules when modifying files directly—leads to silent misbehavior. | 0 comments, 0 👍 |
| [#5496](https://github.com/github/copilot-cli/issues/5496) | Repo instruction files skipped on Windows volumes without drive letters | Breaks customization on mapped network drives or reparse points—common in enterprise setups. | 0 comments, 0 👍 |
| [#5495](https://github.com/github/copilot-cli/issues/5495) | Computer Use blocks ChatGPT desktop app despite being read-only | Overly restrictive safety policy vs. Claude. Raises concerns about fairness and transparency. | 0 comments, 0 👍 |
| [#5494](https://github.com/github/copilot-cli/issues/5494) | Fusion judge rejects cross-session actions due to missing evidence | Can cause false negatives in collaborative workflows. Undermines trust in automated validation. | 0 comments, 0 👍 |
| [#5493](https://github.com/github/copilot-cli/issues/5493) | `new_context` ends solver phase prematurely instead of continuing | Interrupts long-running agent tasks—breaks continuity in complex workflows. | 0 comments, 0 👍 |
| [#5413](https://github.com/github/copilot-cli/issues/5413) | Sub-agents cannot use `hydrafusion` or `hydrafusion-max` models | Limits advanced model capabilities in autonomous sub-agent workflows—blocks powerful use cases. | 0 comments, 0 👍 |

---

### **4. Key PR Progress**  
*No pull requests were updated in the last 24 hours.*  
> Note: The lack of recent PR activity suggests stabilization efforts are underway post-release, with focus shifting to issue triage and patching rather than new features.

---

### **5. Hot Discussions**  
*No discussion threads were provided in the data source.*  
> Omitted per instructions.

---

### **6. Feature Request Trends**  
Top emerging directions from community feedback:

- **Enterprise Control & Security**:  
  - Policy enforcement for sandboxing (`#4446`) and granular control over features like Browser Use (`#5478`).  
  - Need for better auditability and visibility into authentication sources (`#4804`).

- **Extension & Plugin Ecosystem Health**:  
  - Demand for backward compatibility (e.g., SDK aliases), cancellation support in marketplace operations (`#5491`), and reliable reload mechanisms (`#5490`).

- **Agent Intelligence & Workflow Continuity**:  
  - Requests for persistent context across sessions (`#5497`), proper handling of `new_context` continuation (`#5493`), and support for advanced models like `hydrafusion` in sub-agents (`#5413`).

- **Developer Experience Enhancements**:  
  - Better diagnostics (e.g., OpenTelemetry export for HydraFusion phases `#4825`), improved error messaging (`#4848`), and safer defaults for non-interactive mode (`#2882`).

---

### **7. Developer Pain Points**  
Recurring frustrations reported by users:

- **Breakage from Silent Dependency Changes**:  
  The sudden SDK rename from `@github/copilot-sdk` to `@microsoft/copilot-sdk` without deprecation or alias caused widespread extension failures—highlighting risks of opaque dependency shifts.

- **Unpredictable Agent Behavior Due to Late Discovery**:  
  Scoped instructions (`AGENTS.md`, `applyTo`) only activate after `view`, leading to silent rule bypasses during file edits or shell commands—undermining trust in automation.

- **Resource and UX Mismanagement**:  
  Marketplace downloads clone entire repos with no progress indicator, cancellation, or cleanup—leading to long hangs and disk waste (`#5491`).

- **Tool and Session State Corruption**:  
  Tools fail to reload properly after crashes (`#5490`), and session resumption loses custom agent state (`#4674`), requiring manual restarts.

- **Overly Restrictive Safety Policies**:  
  Built-in policies block legitimate actions (e.g., reading accessibility trees from ChatGPT app), creating friction without clear justification.

---

*Stay informed. Contribute. Help shape the future of AI-powered development.*  
👉 [GitHub Copilot CLI Repository](https://github.com/github/copilot-cli)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-18

---

### **1. Today's Highlights**  
OpenCode v2.3.2 introduces critical improvements for GPT-6.2 prompt handling, ensuring system instructions are properly cached by moving them into the developer message stream—eliminating costly re-billing of uncached input. Meanwhile, shell commands now persist in the background after timeout, enabling long-running builds and tests to complete without interruption.

---

### **2. Releases**

#### **v2.3.2 (Released 2026-11-18)**  
- ✅ **GPT-6.2 Prompt Caching Fix**: System prompts sent via `instructions` are now injected as leading developer messages, aligning with GPT-6.2’s behavior and preventing repeated uncached input charges.  
  [GitHub Issue #64550](https://github.com/anomalyco/opencode/issues/64550)

#### **v2.3.1 (Released 2026-11-17)**  
- ⏳ **Timed-Out Shell Commands Now Run in Background**: Previously killed on timeout, shell processes now continue running and report results post-completion. `timeout: 0` defaults to 120 seconds.  
  [GitHub Issue #63699](https://github.com/anomalyco/opencode/issues/63699)

#### **v1.19.6 (Released 2026-11-17)**  
- 🔄 **OpenCode 1 → 2 Upgrade Path**: Users can now upgrade to OpenCode 2.0 seamlessly in the background. Sessions, projects, and settings are preserved. Note: Plugins require updates.  
  [GitHub Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.19.6)

---

### **3. Hot Issues**

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#64073](https://github.com/anomalyco/opencode/issues/64073) | **Restore Foreground Subagent Execution**: Subagents currently run in the background only; users request foreground execution for better control and debugging. | 11 comments, 3 👍 – high demand from advanced users managing complex agent workflows. |
| [#64543](https://github.com/anomalyco/opencode/issues/64543) | **Chinese Text Rendering Bug on macOS (English UI)**: Chinese session titles display incorrect glyphs despite correct storage. Affects multilingual teams. | 10 comments – urgent fix needed for international users. |
| [#40524](https://github.com/anomalyco/opencode/issues/40524) | **Reconcile Provider Model Catalogs with `/models` Endpoint**: Static catalogs lead to missing or stale models. Critical for real-time provider integration. | 8 comments, 1 👍 – core infra issue affecting model availability across providers. |
| [#61342](https://github.com/anomalyco/opencode/issues/61342) | **`api.responses.write` Scope Error After Upgrade**: Post-upgrade sessions fail due to missing scope, requiring cache clearing. Security and UX concern. | 6 comments – recurring pain point during upgrades. |
| [#64558](https://github.com/anomalyco/opencode/issues/64558) | **Subagent Completion Skipped Across Execution Boundaries**: Child subagents complete successfully but notification is silently dropped. Breaks workflow reliability. | 3 comments – subtle but critical bug in agent orchestration. |
| [#64416](https://github.com/anomalyco/opencode/issues/64416) | **OVHcloud Qwen3.8-27B Fails Without `finish_reason`**: Model returns incomplete responses, breaking generation. Workaround exists but not ideal. | 3 comments – major issue for users relying on OVHcloud deployment. |
| [#64538](https://github.com/anomalyco/opencode/issues/64538) | **Inconsistent TUI Text Width Calculation**: CJK and emoji misaligned due to inconsistent width logic. Impacts readability. | 3 comments – subtle but impactful for global developers. |
| [#54059](https://github.com/anomalyco/opencode/issues/54059) | **SSH Service Start Failure Misreported**: Port conflicts shown as "SSH connection failed" instead of clear error. Confuses users. | 5 comments – UX failure in remote setup flow. |
| [#64481](https://github.com/anomalyco/opencode/issues/64481) | **Failed Response Persists as Empty Tool Call**: Causes infinite loop on invalid arguments. Breaks session continuity. | 6 comments – serious regression in v2.3.0. |
| [#64500](https://github.com/anomalyco/opencode/issues/64500) | **Auto-Compaction Crash During In-Flight Tool Calls**: TypeError when `content.flatMap` fails due to undefined content. Crashes sessions. | 2 comments – stability issue under load. |

---

### **4. Key PR Progress**

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#64580](https://github.com/anomalyco/opencode/pull/64580) | **Switch Claude Agent Accounts by Config Folder**: Enables multiple Claude accounts via config directory isolation. | Open |
| [#64577](https://github.com/anomalyco/opencode/pull/64577) | **GUI Plugins Can Declare Their Own Icons**: Plugins now define icons directly, improving branding and consistency. | Open |
| [#63666](https://github.com/anomalyco/opencode/pull/63666) | **Add Experimental Video Generation Tool**: Agents can now generate video outputs via durable jobs. | Closed |
| [#64574](https://github.com/anomalyco/opencode/pull/64574) | **Pass Windows Shell Commands Verbatim**: Fixes quoting issues in `cmd` and PowerShell. | Open |
| [#64501](https://github.com/anomalyco/opencode/pull/64501) | **Show Hours in Duration Labels**: Improves readability for long-running turns (e.g., “Worked 2h 5m”). | Open |
| [#64555](https://github.com/anomalyco/opencode/pull/64555) | **Read Console Artifacts via New API Endpoint**: Enables artifact retrieval from OpenCode Console. | Closed |
| [#64437](https://github.com/anomalyco/opencode/pull/64437) | **Embeddable Rust Port for Code Mode**: Allows Rust programs to embed Code Mode without Node.js/Bun. | Open |
| [#63382](https://github.com/anomalyco/opencode/pull/63382) | **Always Run Subagents in Background**: Eliminates `background` option; all subagents now run asynchronously. | Closed |
| [#64576](https://github.com/anomalyco/opencode/pull/64576) | **Fix Code Block Border Visibility Under Action Fill**: Improves visual clarity of code blocks on hover. | Closed |
| [#64572](https://github.com/anomalyco/opencode/pull/64572) | **Fallback to Classical TLS Handshake**: Prevents failures on networks dropping post-quantum TLS handshakes (e.g., Rostelecom). | Open |

---

### **5. Hot Discussions**  
*No discussion data provided.*  

---

### **6. Feature Request Trends**

The most prominent feature directions emerging from issues and PRs include:

- **Agent Orchestration Control**: Demand for foreground subagent execution (#64073), explicit job lifecycle management, and visibility into routing decisions.
- **Multi-Provider & Model Transparency**: Users want to see which upstream model was selected via auto/fusion routers (#60309) and real-time model catalog sync (#40524).
- **Enhanced Developer UX**: Persistent notifications, better duration formatting, improved localization (CJK/emoji), and consistent text rendering.
- **Extensibility & Customization**: Plugin icon support (#64577), config-based account switching (#64580), and embedded Rust tooling (#64437).
- **Remote & CLI Experience**: Better SSH diagnostics, clearer progress indicators during remote setup (#56668), and reliable deep-link handling (#64575).

---

### **7. Developer Pain Points**

Recurring frustrations highlighted across the community:

- **Model Availability & Sync**: Stale model catalogs (#64489), missing models in UI despite being enabled in Console (#64507), and lack of dynamic reconciliation (#40524).
- **Session Stability**: Auto-compaction crashes (#64500), silent subagent completion skips (#64558), and persistent empty tool calls causing loops (#64481).
- **Cross-Platform Rendering Bugs**: Chinese text corruption (#64543), hidden scrollbars in code blocks (#60143), and inconsistent text width calculations (#64538).
- **Upgrade & Cache Management**: Permission errors post-upgrade (#61342), invisible pre-upgrade sessions (#64494), and unclear cache behavior.
- **Shell & CLI Reliability**: Command escaping issues on Windows (#64574), and long-running processes being prematurely killed.

---  
*Digest compiled from GitHub activity at anomalyco/opencode — 2026-11-18*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# **Pi Community Digest – 2026-11-18**

---

### **1. Today's Highlights**  
The Pi ecosystem continues to mature with critical stability fixes for session management, compaction logic, and tool handling—especially around concurrent operations and crash resilience. Notably, two high-impact PRs landed: one ensuring `session_compact` events are emitted during boundary-draft compactions (PR #12262), and another fixing silent agent halts due to unhandled `AbortError` in `tools.read()` (PR #12253). These address long-standing reliability concerns reported across multiple issues.

---

### **2. Releases**  
*No new releases in the last 24 hours.*

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | *Windows usability chaos:* Multiple conflicting ways to run Pi on Windows cause confusion and hinder adoption. High comment count (97) signals urgent need for unified docs, installers, and out-of-box experience. | 🚨 **Top priority**: Developer frustration is widespread; calls for a single recommended path. |
| [#11021](https://github.com/earendil-works/pi/issues/11021) | *Context window mismatch*: `gpt-6.1-sol` shows only 272K context via Pi despite 500K available in ChatGPT UI. Undermines performance expectations and compaction accuracy. | 🔥 **High impact**: Affects model fidelity and AI efficiency; reported by advanced users. |
| [#12271](https://github.com/earendil-works/pi/issues/12271) | *Crash on failed read during `Promise.all`*: `pi` process crashes with unhandled `AbortError`, breaking codemode workflows. Reproducible in v1.5.2. | ⚠️ **Critical bug**: Seen as a major reliability risk for production agents. |
| [#12253](https://github.com/earendil-works/pi/issues/12253) | *Same as #12271*: Confirmed crash when aborting `tools.read()` mid-stream in parallel scripts. Highlights deeper issue in error propagation. | ✅ **Confirmed fix incoming**: Part of recent PR activity. |
| [#12076](https://github.com/earendil-works/pi/issues/12076) | *Silent compaction failure loop*: Near context limit, Pi enters infinite `seq 1 2000` loops without compacting, leading to memory exhaustion. | 💥 **P0-level concern**: Impacts long-running coding sessions and model scalability. |
| [#12184](https://github.com/earendil-works/pi/issues/12184) | *Gemini 4 Hydrogen xhigh rejected*: Model supports `xhigh`, but adapter refuses it pre-request. Blocks access to highest-tier reasoning. | 🤔 **Feature gap**: Users expect full alignment with model capabilities. |
| [#12177](https://github.com/earendil-works/pi/issues/12177) | *Same as #12184*: Advocates for native support of `xhigh` thinking level in Google adapters. | 👍 **Upvoted twice**: Strong community push for parity. |
| [#12266](https://github.com/earendil-works/pi/issues/12266) | *Stale leaf fork on resume*: Idle Pi instance appends to old session branch, creating orphaned tree nodes. Breaks session consistency. | 🧩 **Subtle but dangerous**: Can corrupt agent state if not caught early. |
| [#12251](https://github.com/earendil-works/pi/issues/12251) | *Queue leak after `abort()`*: Steering/follow-up messages persist across runs, causing unintended message bleed into next session. | 📉 **Design flaw**: Undermines clean session boundaries. |
| [#12258](https://github.com/earendil-works/pi/issues/12258) | *Request to add Sarvam AI Token Factory as built-in provider*. | ✅ **New provider demand**: Reflects growing interest in alternative LLM providers beyond OpenAI/Gemini. |

---

### **4. Key PR Progress**  

| PR | Summary | Status |
|----|--------|--------|
| [#12262](https://github.com/earendil-works/pi/pull/12262) | Fixes `session_compact` emission during extension-driven boundary drafts (`turn_end`, `agent_before_settle`). Ensures downstream systems react correctly to compaction. | ✅ **Merged** |
| [#12256](https://github.com/earendil-works/pi/pull/12256) | Suppresses redundant diagnostics for intentional skill overrides (scoped collision warnings). Improves clarity in multi-skill environments. | ✅ **Merged** |
| [#12028](https://github.com/earendil-works/pi/pull/12028) | Defers `triggerTurn` from `sendMessage` until compaction completes. Prevents race conditions between manual compaction and new input. | ✅ **Merged** (Closes #10982) |
| [#12265](https://github.com/earendil-works/pi/pull/12265) | Fixes ignored `compaction.modelOverrides` for routed virtual models (e.g., hybrid/auto). Ensures per-model compaction settings apply correctly. | ✅ **Closed** |
| [#12263](https://github.com/earendil-works/pi/pull/12263) | Adds `session_compact` event when boundary drafts commit compaction entries. Aligns with core compaction lifecycle. | ✅ **Closed** |
| [#12268](https://github.com/earendil-works/pi/pull/12268) | Invalid report dismissed: user misconfigured `models.json` schema; no actual bug found. | ✅ **Closed** |
| [#12269](https://github.com/earendil-works/pi/pull/12269) | Proposes preserving prompt cache when changing thinking level on OpenAI-Codex. Avoids unnecessary re-prompting. | ✅ **Closed** |
| [#12272](https://github.com/earendil-works/pi/pull/12272) | Fixes terminal corruption after `SIGTSTP`: restores SGR/mouse tracking on resume. | ✅ **Closed** |
| [#12270](https://github.com/earendil-works/pi/pull/12270) | Makes `(main)` in footer clickable to jump to branch. Enhances UX in TUI. | ✅ **Closed** |
| [#12267](https://github.com/earendil-works/pi/pull/12267) | Addresses missing `ultra` in thinking scale; allows parsing `:ultra` suffixes in model IDs. | ✅ **Closed** |

---

### **5. Hot Discussions**  
*No discussion threads were provided in the data source.*

---

### **6. Feature Request Trends**  
The most consistent feature directions emerging from issues include:

- **Cross-provider expansion**: Demand for adding new providers like **Sarvam AI Token Factory** (#12255, #12258) indicates appetite for diversified inference backends beyond OpenAI and Google.
- **Enhanced context control**: Users want more granular control over compaction behavior, including:
  - Default compaction models (#12260)
  - Preserving prompt cache across thinking level changes (#12269)
  - Proper handling of virtual/routed models (#12265)
- **Improved error handling and debugging**: Silent crashes, unhandled `AbortError`, and lost queues signal a need for better resilience and observability.
- **Better Windows support**: Top-tier pain point (#7547) calls for standardized installation, documentation, and runtime compatibility.

---

### **7. Developer Pain Points**  
Recurring frustrations include:

- **Unreliable tool cancellation**: Crashes occur when `tools.read()` is aborted mid-stream (issues #12271, #12253).
- **Session state corruption**: Race conditions (e.g., stale leaf forks #12266) and queue leaks (#12251) undermine trust in long-running agents.
- **Inconsistent model behavior**: Discrepancies between advertised model capabilities (e.g., `xhigh` support in Gemini 4 Hydrogen) and actual Pi adapter support (#12184, #12177).
- **Poor visibility into internal state**: Missing `session_compact` events (#12263), silent compaction failures (#12076), and lack of logging make debugging hard.
- **Platform fragmentation**: Windows-specific challenges (#7547) highlight the need for unified, well-documented deployment paths.

---

> 📌 *For real-time updates, follow the [Pi GitHub repo](https://github.com/earendil-works/pi).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-11-18

---

### **1. Today's Highlights**  
The Qwen Code team advanced core agent loop modernization with the release of `v0.28.1-preview.0`, introducing critical stability fixes and UI refinements for managed agents. Key progress includes deeper integration of the event-driven `loop` kernel, enhanced Web Shell worktree parity, and ongoing hardening of CI/CD pipelines to address flaky tests and dependency vulnerabilities.

---

### **2. Releases**  
- **`v0.28.1-preview.0` (Preview)**  
  - Added real scheduled `/loop` fire observation in full-stack E2E testing (`#17506`).  
  - Hardened `watc` verification logic.  
  - [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.1-preview.0)  

- **`v0.28.0` (Stable)**  
  - Released desktop client (`desktop-v0.28.0`) and SDK TypeScript `v0.1.35`.  
  - Bundled CLI version: `0.28.0`.  
  - Introduced sidebar workspace filter in Web Shell (`#17244`).  
  - Added DingTalk adapter support in managed agent path.  
  - [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.0)

---

### **3. Hot Issues**

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724): Main CI failed: Managed Agent gate — no test identified | High-impact failure blocking main branch merges; 432 comments indicate urgent need for resolution. | 🔥 *High visibility, frequent updates from dev bot* |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078): Daily dependency CVE audit failed | Security risk due to unpatched high-severity dependencies; affects all downstream users. | ⚠️ *Critical alert; requires immediate triage* |
| [#17045](https://github.com/QwenLM/qwen-code/issues/17045): Land 1.0 Preview loop kernel on main | Foundational change: replacing legacy loops with event-driven kernel. P1 priority, tracking phased rollout. | 📌 *Core architectural shift; community watching closely* |
| [#13851](https://github.com/QwenLM/qwen-code/issues/13851): Headless mode delays result until auto-memory tasks finish | Causes 40s–5min latency in SDK workflows; major pain point for automation and CI/CD integrations. | 💬 *Repeatedly cited in multiple PRs and issues* |
| [#17678](https://github.com/QwenLM/qwen-code/issues/17678): External Workspace 409 rejection in managed-agent-server | Critical admission bug preventing ephemeral sessions; three stacked defects require fix. | 🔧 *Blocked deployment scenarios; needs urgent attention* |
| [#17682](https://github.com/QwenLM/qwen-code/issues/17682): Grep fallback non-UTF8 corpus paths | Impacts file search reliability on non-UTF8 repositories; follows up on prior PR. | ✅ *Post-merge hygiene issue; low-risk but important* |
| [#17679](https://github.com/QwenLM/qwen-code/issues/17679): Grep fallback scope when Git corpus unavailable | Defines behavior for edge cases in corrupted or inaccessible repos. | 🔍 *Follow-up to #17530; needed for robustness* |
| [#15082](https://github.com/QwenLM/qwen-code/issues/15082): Managed Agent capacity & idle-reclamation model | Essential for scaling multi-agent systems; currently unlimited resource usage risks. | 🎯 *P1 request; foundational for production use* |
| [#17559](https://github.com/QwenLM/qwen-code/issues/17559): Prompt sent mid-turn not recorded in transcript | Breaks auditability and debugging; model sees input but session log misses it. | 📝 *Serious UX/data integrity flaw* |
| [#17640–17642](https://github.com/QwenLM/qwen-code/issues/17640): Java SDK process leaks, content loss, line corruption | Multiple bugs in Java SDK affecting stability, correctness, and resource management. | ❌ *High-priority SDK fix cluster; impacts enterprise users* |

---

### **4. Key PR Progress**

| PR | Summary | GitHub Link |
|----|--------|-------------|
| [#17686](https://github.com/QwenLM/qwen-code/pull/17686) | Fixes layout gap after `/send` in Web Shell; improves visual continuity. | [PR #17686](https://github.com/QwenLM/qwen-code/pull/17686) |
| [#17557](https://github.com/QwenLM/qwen-code/pull/17557) | Aligns managed error presentation with DAC; removes redundant recovery panel. | [PR #17557](https://github.com/QwenLM/qwen-code/pull/17557) |
| [#17685](https://github.com/QwenLM/qwen-code/pull/17685) | Labels shell output as "combined streams" vs "execution errors" for clarity. | [PR #17685](https://github.com/QwenLM/qwen-code/pull/17685) |
| [#17684](https://github.com/QwenLM/qwen-code/pull/17684) | Extracts shared composer status stack into reusable component. | [PR #17684](https://github.com/QwenLM/qwen-code/pull/17684) |
| [#17405](https://github.com/QwenLM/qwen-code/pull/17405) | Adds configurable generic webhook destinations in Web Shell. | [PR #17405](https://github.com/QwenLM/qwen-code/pull/17405) |
| [#17441](https://github.com/QwenLM/qwen-code/pull/17441) | Adds WeCom adapter to managed channel path. | [PR #17441](https://github.com/QwenLM/qwen-code/pull/17441) |
| [#17680](https://github.com/QwenLM/qwen-code/pull/17680) | Fixes epoch-less resubmission logic in managed agent recovery. | [PR #17680](https://github.com/QwenLM/qwen-code/pull/17680) |
| [#17654](https://github.com/QwenLM/qwen-code/pull/17654) | Prevents automatic work from blocking worktree restore during cold start. | [PR #17654](https://github.com/QwenLM/qwen-code/pull/17654) |
| [#17500](https://github.com/QwenLM/qwen-code/pull/17500) | Adds native screen-reader support with keyboard controls. | [PR #17500](https://github.com/QwenLM/qwen-code/pull/17500) |
| [#17495](https://github.com/QwenLM/qwen-code/pull/17495) | Preserves plugin hook roots through installation. | [PR #17495](https://github.com/QwenLM/qwen-code/pull/17495) |

---

### **5. Hot Discussions**  
*No discussion threads provided in data source.*

---

### **6. Feature Request Trends**

- **Agent Loop Modernization**: The `1.0 Preview loop kernel` is the central theme across multiple P1/P2 issues (#17045, #17284). Community is focused on phased, safe migration from legacy loops.
- **Managed Agent Scalability & Resource Control**: Requests for capacity limits, idle reclamation, and admission control (#15082) indicate growing interest in production-grade multi-agent deployments.
- **Web Shell Parity & Worktree Management**: Ongoing efforts to match Codex’s worktree behavior (e.g., retention, snapshots, root config) are tracked in #17237 and #17533.
- **Cross-Platform Integration**: Demand for new channels (WeCom, Microsoft Teams), plus improved Aone/DingTalk/AOP coverage, shows push toward enterprise communication ecosystems.
- **SDK Stability & Developer Experience**: Java SDK issues (#17640–17642) highlight a strong demand for reliable, well-documented SDKs with proper lifecycle management.

---

### **7. Developer Pain Points**

- **Headless Mode Latency**: Non-interactive SDK mode waits for auto-memory tasks (up to 5 minutes), disrupting CI/CD and automation workflows (#13851).
- **Java SDK Instability**: Multiple open issues around process leaks, content loss, and UTF-8 corruption suggest fragile SDK state handling.
- **CI/CD Flakiness & Failures**: Persistent failures in main CI and dependency audits (#14724, #13078) hinder merge velocity and trust.
- **Session Transcript Inconsistencies**: Mid-turn user prompts are not logged despite being processed by the model (#17559), breaking audit trails.
- **External Workspace Admission Bugs**: Managed agent rejects external sessions with 409 errors due to hidden configuration flaws (#17678), blocking ephemeral use cases.
- **Grep Robustness Gaps**: Fallback behaviors fail on non-UTF8 paths or broken Git repos, reducing reliability in real-world projects (#17682, #17679).

---  
*Digest generated: 2026-11-18 | Source: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*