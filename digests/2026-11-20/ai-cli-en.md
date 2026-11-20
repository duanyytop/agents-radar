# AI CLI Tools Community Digest 2026-11-20

> Generated: 2026-11-20 03:41 UTC | Tools covered: 7

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
*Generated: 2026-11-20 | Data Source: GitHub Community Digests*

---

### **1. Ecosystem Overview**

The AI CLI developer tools landscape in late 2026 is characterized by rapid iteration, growing maturity in agent orchestration, and increasing focus on stability, security, and cross-platform consistency. While core models (e.g., GPT-6.2 Sol, Opus 4.8, Qwen4) are being pushed into production workflows, underlying tooling struggles with session integrity, context management, and safeguard overblocking—especially in DevOps, embedded systems, and enterprise environments. A clear divergence is emerging between **platform-first** tools (OpenAI Codex, GitHub Copilot) emphasizing integration depth and **open-ecosystem** tools (OpenCode, Pi, Qwen Code) prioritizing extensibility and customization. Despite advances in TUIs, multi-agent systems, and memory persistence, fundamental UX and reliability issues continue to hinder adoption at scale.

---

### **2. Activity Comparison**

| Tool | Issues Count | PR Count (Last 24h) | Discussions Count | Release Status |
|------|--------------|-----------------------|--------------------|----------------|
| **Claude Code** | 10 hot issues | 1 | N/A | v2.1.329 (Released) |
| **OpenAI Codex** | 10 hot issues | 10 | 8 | `rust-v0.173.0-alpha.1` (Released) |
| **Gemini CLI** | 10 hot issues | 10 | N/A | v0.71.0-nightly.20261120.gd4cb1713f (Released) |
| **GitHub Copilot CLI** | 10 hot issues | 1 | N/A | v1.0.115-1 (Released) |
| **OpenCode** | 10 hot issues | 10 | N/A | No new release |
| **Pi** | 10 hot issues | 10 | 2 | No new release |
| **Qwen Code** | 10 hot issues | 10 | N/A | No new release |

> ✅ *Notes*:  
> - OpenAI Codex, Gemini CLI, OpenCode, Pi, and Qwen Code show high PR activity, indicating active development cycles.  
> - Claude Code and GitHub Copilot CLI report minimal PR updates despite ongoing issue backlogs—suggesting slower engineering velocity or bottlenecked pipelines.  
> - Discussions are only active in **Pi** and **OpenAI Codex**, reflecting a more mature feedback loop in those ecosystems.  
> - "N/A" indicates no discussions available in the dataset; not necessarily inactive.

---

### **3. Shared Feature Directions**

Across multiple tools, several key feature demands are converging:

| Feature Direction | Tools Involved | Specific Needs |
|-------------------|----------------|----------------|
| **Context & Project Isolation** | OpenAI Codex, OpenCode, Pi, Qwen Code | Per-workspace chat scoping, project-level memory, scope-aware agent behavior |
| **Session Stability & Persistence** | All tools | Recovery from crashes, zero-turn session survival, state restoration post-restart |
| **Granular Security & Safeguard Controls** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Disable/override safety filters for legitimate DevOps/security tasks; model-specific trust policies |
| **Improved Tooling Visibility & Discovery** | OpenAI Codex, Gemini CLI, OpenCode, Pi | Centralized registry for subagents/plugins; visible tool catalogs; better error messaging |
| **Cross-Platform Consistency** | All tools | Reliable terminal handling (SIGTSTP), UI rendering, file system access across Windows/macOS/Linux |
| **Agent Autonomy & Intelligence** | Gemini CLI, OpenCode, Qwen Code | Self-directed skill discovery, adaptive task routing, AST-aware code navigation |

> 🔑 *Insight*: These shared needs reflect a maturing ecosystem where developers expect **predictable, safe, and intelligent automation**—not just code generation.

---

### **4. Differentiation Analysis**

| Dimension | **Claude Code** | **OpenAI Codex** | **Gemini CLI** | **GitHub Copilot CLI** | **OpenCode** | **Pi** | **Qwen Code** |
|---------|------------------|-------------------|----------------|--------------------------|--------------|--------|---------------|
| **Target User** | Enterprise DevOps, embedded systems | Full-stack devs, IDE power users | Cost-conscious teams, CI/CD engineers | GitHub ecosystem users | Open-source adopters, custom workflow builders | Production-grade managed agents | Large-scale enterprise integrators |
| **Technical Focus** | Trust transparency, hook visibility | TUI richness, multi-modal support | Token efficiency, lightweight execution | Auth robustness, OAuth fidelity | Free-tier usability, plugin extensibility | CI/CD stability, test infrastructure | Managed agent reliability, compliance |
| **Model Integration** | Opus 4.8 (security-focused) | GPT-6.2 Sol (default) | Multi-provider via MCP | GitHub Copilot + external providers | Beam Free (free tier), OpenRouter | DeepSeek V3.1/V3.2, Ollama Llama4 |
| **Architecture** | Hook-based, Cowork sync | Multi-agent V2, TUI workspace | Subagent-driven, command-line focused | MCP-OAuth flow, direct execution | Plugin-driven, Git-based upgrades | Managed agent gate, E2E testing suite |
| **Differentiator** | Session-level task visibility, trust dialogs | Built-in prompt enhancement, adaptive mode | `/stats heatmap`, AST-aware tools | Silent refresh, auth resilience | Free-tier fixes, per-project credentials | CI stability, flake reduction |

> 📌 *Key Insight*: While all tools aim for seamless AI-assisted development, their differentiation lies in **integration depth** (Copilot, Codex), **operational reliability** (Qwen Code, Pi), **cost control** (Gemini CLI), or **freedom of choice** (OpenCode, Pi).

---

### **5. Community Momentum & Maturity**

| Indicator | Most Active Tools | Observations |
|---------|---------------------|-------------|
| **Development Velocity** | OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code | All report ≥10 PRs in last 24h; Qwen Code has 10 open PRs addressing CI/CD and security gaps. |
| **Community Engagement** | OpenAI Codex, Pi | OpenAI Codex leads in discussion volume (8 threads); Pi has active ideas and show-and-tell. |
| **Stability vs. Innovation** | Claude Code, GitHub Copilot CLI | High issue count but low PR output suggests **reactive maintenance** rather than proactive innovation. |
| **Maturity Signal** | OpenAI Codex, Qwen Code | Mature TUI features, structured CI/CD, multi-agent patterns; Qwen Code’s E2E test stabilization shows production-grade discipline. |
| **Emerging Ecosystems** | OpenCode, Pi | Strong plugin culture, community-led tool registries, and cross-tool integrations (e.g., Orchevia). |

> ✅ *Conclusion*: **OpenAI Codex, Gemini CLI, and Qwen Code** demonstrate the highest momentum in both development and community engagement. **OpenCode and Pi** are gaining traction as open, extensible platforms. **Claude Code and GitHub Copilot CLI** remain stable but reactive—prioritizing fixes over forward innovation.

---

### **6. Trend Signals**

Based on community feedback and issue trends, the following industry-wide signals emerge:

1. **Security Overblocking is a Critical Bottleneck**  
   Multiple tools report false positives in DevOps, penetration testing, and infrastructure tasks (e.g., DNS/TLS setup, firmware config). This indicates a **systemic misalignment between safety policies and real-world workflows**—a major friction point for enterprise adoption.

2. **Context Efficiency is a Rising Priority**  
   Accurate token estimation (PDFs, images), prompt cache reuse, and AST-aware file reads are top requests. Developers are increasingly cost-sensitive and demand **transparent, efficient use of context windows**.

3. **Session Integrity = Productivity**  
   Lost projects, silent data corruption (Cowork lag), and session resets after restarts are recurring themes. This reflects a **shift from “can it generate code?” to “can it keep my work safe?”** — a hallmark of mature tooling.

4. **Free Tier Usability Defines Adoption**  
   OpenCode’s 393-comment thread on free-tier quota failures highlights that **accessibility is still a key differentiator**. Tools that fail here risk alienating early adopters and open-source contributors.

5. **Multi-Agent Workflows Are Now Expected**  
   Features like `/chat share`, subagent trajectory visibility, and adaptive mode suggest developers now expect **collaborative, explainable AI agents**—not isolated prompts.

6. **Extensibility > Proprietary Lock-In**  
   Demand for shared tool catalogs, plugin auto-updates, and interoperability (e.g., OpenAI → Ollama) reveals a strong preference for **open, composable ecosystems** over vendor-locked experiences.

> 🚩 *Strategic Implication*: For technical decision-makers, **stability, security tunability, and extensibility** are now more important than raw model performance. The next wave of AI CLI tools will be defined not by what they can do, but by how safely, reliably, and flexibly they can do it.

---  
*Report compiled by Senior Technical Analyst, AI Developer Tools Ecosystem | November 20, 2026*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-11-20 | Source: github.com/anthropics/skills*

---

### **1. Top Skills Ranking** *(by community discussion & impact)*

1. **`md2video-audio` (PR #1703)**  
   *Functionality:* Converts Markdown documents into professional MP4 videos with realistic human-like voiceovers using Marp for slide generation and audio synthesis.  
   *Discussion Highlights:* High interest in AI-generated multimedia content; praised for zero-cost, seamless integration.  
   *Status:* Open | [View PR](https://github.com/anthropics/skills/pull/1703)

2. **`proofcore-contract-auditor` (PR #1771)**  
   *Functionality:* Automates static analysis of Solidity/Rust smart contracts and anchors cryptographic audit proofs on the TON blockchain via ProofCore’s zero-storage Merkle protocol.  
   *Discussion Highlights:* Strong traction from Web3 developers; addresses critical security needs in decentralized systems.  
   *Status:* Open | [View PR](https://github.com/anthropics/skills/pull/1771)

3. **`notion-spec-to-implementation` (PR #1245)**  
   *Functionality:* Transforms Notion-based product or technical specifications into actionable implementation tasks with acceptance criteria and progress tracking.  
   *Discussion Highlights:* Addresses a key workflow gap between planning and execution—highly relevant for engineering teams.  
   *Status:* Open | [View PR](https://github.com/anthropics/skills/pull/1245)

4. **`scnet-hpc` (PR #1615)**  
   *Functionality:* Enables SSH and Slurm-based interaction with SCNet HPC clusters through profile-driven workflows.  
   *Discussion Highlights:* Niche but high-value for academic and research users; fills a critical infrastructure gap.  
   *Status:* Open | [View PR](https://github.com/anthropics/skills/pull/1615)

5. **`document-typography` (PR #514)**  
   *Functionality:* Enforces typographic quality in AI-generated documents by detecting and fixing issues like orphaned lines, widows, and misaligned numbering.  
   *Discussion Highlights:* Widely recognized as a "missing piece" in professional document output.  
   *Status:* Open | [View PR](https://github.com/anthropics/skills/pull/514)

6. **`pyxel` (PR #525)**  
   *Functionality:* Supports retro game development in Python using Pyxel, including debugging, headless runs, frame inspection, and state checks.  
   *Discussion Highlights:* Long-standing request; popular among indie developers and educators.  
   *Status:* Open | [View PR](https://github.com/anthropics/skills/pull/525)

7. **`webapp-testing` improvements (PRs #1980, #1976, #1975)**  
   *Functionality:* Enhances web application testing skills by eliminating shell injection risks, improving element detection, and validating input parameters.  
   *Discussion Highlights:* Critical fixes for security and reliability; multiple PRs from same contributor show focused effort.  
   *Status:* Open | [View #1980](https://github.com/anthropics/skills/pull/1980), [View #1976](https://github.com/anthropics/skills/pull/1976), [View #1975](https://github.com/anthropics/skills/pull/1975)

---

### **2. Community Demand Trends**

The community is increasingly focused on **workflow automation, quality assurance, and domain-specific expertization**. Key emerging themes:

- **AI Output Quality Control:** Demand for skills that enforce typographic integrity (`document-typography`), structural consistency, and visual polish (e.g., `theme-factory`, `create_gradient_background`).
- **Developer Tooling & Testing:** Strong interest in robust, secure testing pipelines—especially for web apps (`webapp-testing`), codebases, and HPC environments.
- **Specialized Domain Expertise:** Growth in demand for niche but high-impact skills in Web3 (`proofcore-contract-auditor`), retro game dev (`pyxel`), and scientific computing (`scnet-hpc`).
- **Multimedia Generation:** Rising appetite for turning text into rich media (e.g., `md2video-audio`) to support presentations and content creation.

---

### **3. High-Potential Pending Skills**

These open PRs have strong community engagement and are likely candidates for near-term merge:

- **`md2video-audio` (#1703):** High utility for creators; minimal friction to integrate.  
- **`proofcore-contract-auditor` (#1771):** Addresses urgent Web3 security concerns; already has clear use cases.  
- **`notion-spec-to-implementation` (#1245):** Solves a real-world planning-execution disconnect; aligns with product-led workflows.  
- **`webapp-testing` series (#1980, #1976, #1975):** Security-critical fixes with demonstrable impact; author shows deep understanding of edge cases.

> ✅ *Recommendation:* Prioritize review and merge of these four PRs due to their alignment with top community pain points and readiness for production use.

---

### **4. Skills Ecosystem Insight**

The community's most concentrated demand is for **specialized, production-grade skills that bridge the gap between AI capabilities and real-world workflows—particularly in quality control, domain-specific automation, and secure execution.**

---

**Claude Code Community Digest – 2026-11-20**

---

### **1. Today's Highlights**  
The latest release, v2.1.329, introduces critical trust and stability improvements, including warnings for misconfigured hooks and session-level task visibility. However, the community continues to grapple with persistent connectivity issues and a surge of cybersecurity safeguard false positives—particularly in embedded systems and DevOps workflows—that are halting authorized work.

---

### **2. Releases**  
**v2.1.329**  
- Added a trust dialog warning that displays where folder hooks are declared, improving transparency.  
- Introduced a warning in non-interactive hosts (e.g., Claude Desktop) when managed settings fail to load.  
- Enhanced session visibility by exposing scheduled tasks (`/loop` wakeups), goals, and current state.  
🔗 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

---

### **3. Hot Issues**  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#69415](https://github.com/anthropics/claude-code/issues/69415) | Frequent API "Connection closed mid-response" errors make Claude Code unusable—critical for daily development. | 57 comments, 89 👍 — highest priority bug; reported across VSCode & WSL. |
| [#94159–#94158](https://github.com/anthropics/claude-code/issues?q=label:Bug%5Bcyber%5D+label:security+sort%3Aupdated-desc) | 14 duplicate reports of Opus 4.8 model falsely blocking legitimate security, firmware, and infrastructure tasks (e.g., DNS setup, TLS config). Sessions halted despite valid inputs. | All closed as “session-halted” — high severity; users report blocked pentesting, hardening, and CI/CD workflows. |
| [#93482](https://github.com/anthropics/claude-code/issues/93482) | Silent stale write in Cowork: `device_commit_files` reports success but disk lags one commit behind. Risk of data loss. | 28 comments — major concern for teams relying on real-time sync in embedded projects. |
| [#96870](https://github.com/anthropics/claude-code/issues/96870) | Windows MSIX Desktop leaks kernel nonpaged pool via junction paths under AppData (bindflt.sys bug). Performance degradation over time. | 19 comments — impacts long-running sessions; potential crash risk. |
| [#95593](https://github.com/anthropics/claude-code/issues/95593) | Chat response completion notifications silent on desktop app (Win/macOS), while code/cowork alerts fire correctly. Breaks feedback loop. | 10 comments — UX issue affecting workflow awareness. |
| [#105868](https://github.com/anthropics/claude-code/issues/105868) | Missing `mcp__claude-in-chrome__file_upload` tool in new chats unless in auto-approval mode. Limits Chrome integration. | 7 comments — intermittent functionality; now requires specific settings. |
| [#38536](https://github.com/anthropics/claude-code/issues/38536) | Feature request: Shared Team Memory — essential for knowledge transfer in engineering teams. | 35 comments, 11 👍 — top feature demand; highlights scalability gap. |
| [#94137](https://github.com/anthropics/claude-code/issues/94137) | Safeguard blocks Go build script review and cross-platform compilation setup — common DevOps task. | Repeated in multiple threads; shows overzealous filtering in infra workflows. |
| [#94141](https://github.com/anthropics/claude-code/issues/94141) | False positive during key search in local backups for server hardening — invalid blocking of defensive actions. | 3 comments — highlights conflict between safety and legitimate security operations. |
| [#94140](https://github.com/anthropics/claude-code/issues/94140) | Blocks local TLS certificate setup using DNS API credentials — core DevOps task. | 3 comments — indicates deep integration issues with cloud infra tools. |

---

### **4. Key PR Progress**  

| PR | Summary | Status |
|----|--------|--------|
| [#111198](https://github.com/anthropics/claude-code/pull/111198) | Prevents `@claude` mentions from triggering on pull requests from forks — reduces noise and potential abuse. | Open (2026-11-19) |

> *Note: Only one PR updated in last 24h. No other high-impact changes visible.*

---

### **5. Hot Discussions**  
*No discussion data provided in source. This section is omitted.*

---

### **6. Feature Request Trends**  
The most prominent feature directions emerging from issues and community feedback:  
- **Shared Team Memory**: High demand for collaborative context retention across team members (Issue #38536).  
- **Improved Security Safeguards**: Users want granular control over safety filters—especially in DevOps, embedded systems, and penetration testing workflows.  
- **Enhanced Session Stability & Visibility**: Requests for better diagnostics around task scheduling, hook loading, and connection health.  
- **Cross-Platform Consistency**: Fixing platform-specific bugs (Windows, macOS, Linux) in UI, networking, and file handling.  
- **Better Tool Integration**: Reliable access to tools like `file_upload`, especially in browser-hosted modes.

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Safeguard Overblocking**: Multiple reports of legitimate code reviews, CI/CD steps, and security audits being blocked by the safety filter (Opus 4.8).  
- **Unreliable Connectivity**: Persistent "Connection closed mid-response" errors disrupting workflow continuity.  
- **Silent Data Corruption**: Cowork’s delayed file writes create hidden data loss risks.  
- **Inconsistent Notifications**: Critical chat completions go unnoticed in desktop apps while other alerts fire.  
- **Fork-Specific Mentions**: Unintended triggers from external PRs causing confusion and noise.  
- **Kernel-Level Leaks**: Windows MSIX Desktop process memory leaks degrade performance over time.

---

*Digest generated from GitHub data: [anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex Community Digest – 2026-11-20**

---

## **1. Today's Highlights**  
The Codex ecosystem continues to evolve with the release of `rust-v0.173.0-alpha.1`, introducing GPT-6.2 Sol as the default model and enabling TUI workspace features by default. Key improvements include enhanced document previews, image rendering, and subagent transcript visibility in the terminal UI. Meanwhile, community attention is sharply focused on persistent session integrity issues across platforms—especially Windows—and growing demand for project-scoped chat isolation.

---

## **2. Releases**  
### `rust-v0.173.0-alpha.1` (Released)  
- **Default Model Update**: GPT-6.2 Sol now selected by default in model catalogs; Astra also added.  
- **TUI Workspace Enabled by Default**: Searchable document previews, image previews, and subagent transcripts are now active in the terminal interface.  
🔗 [GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.1)

### `rust-v0.172.0-alpha.2` & `rust-v0.171.0-alpha.13.1`  
- Minor patch releases addressing stability and CLI integration issues. No major feature changes noted.

---

## **3. Hot Issues**  

| Issue # | Title | Why It Matters | Community Reaction |
|--------|------|----------------|--------------------|
| [#25319](https://github.com/openai/codex/issues/25319) | Scope Codex VS Code chats to current workspace/project | Critical for workflow safety—ensures context doesn’t leak between projects. High priority for IDE users. | 61 comments, 139 👍 |
| [#49383](https://github.com/openai/codex/issues/49383) | Windows Computer Use screenshot capture fails with FrameArrived timeout | Breaks core automation functionality on Windows. Affects remote control and desktop agent workflows. | 60 comments, 3 👍 |
| [#62212](https://github.com/openai/codex/issues/62212) | Unsupported audio tool output causes HTTP 400 in text-only turns | Blocks continuity in multi-modal sessions; prevents recovery after malformed audio responses. | 29 comments, 5 👍 |
| [#55795](https://github.com/openai/codex/issues/55795) | Dots entry disappears after update on Windows | User-facing regression impacting Dot connectivity—critical for hybrid local/remote workflows. | 17 comments, 4 👍 |
| [#61294](https://github.com/openai/codex/issues/61294) | Local Codex projects disappear after app update | Data loss risk: existing projects vanish post-update despite chat history persisting. | 12 comments, 0 👍 |
| [#38873](https://github.com/openai/codex/issues/38873) | Accessibility traversal freezes IntelliJ IDEA Git Log | Performance bottleneck affecting developer productivity in IDE-heavy environments. | 15 comments, 4 👍 |
| [#32810](https://github.com/openai/codex/issues/32810) | Shared Projects missing from macOS app after update | Breaks collaboration workflows; undermines trust in persistent project state. | 13 comments, 8 👍 |
| [#33551](https://github.com/openai/codex/issues/33551) | Multi-Agent V2 sends OpenAI-specific `agent_message` to external providers | Hinders interoperability with Ollama and other non-OpenAI backends. Major concern for open-source adopters. | 13 comments, 16 👍 |
| [#61679](https://github.com/openai/codex/issues/61679) | Apps tool catalog sent in full with every request | Causes context window overflow and auto-compaction loops in fresh sessions—impacts performance and cost. | 5 comments, 0 👍 |
| [#62663](https://github.com/openai/codex/issues/62663) | Windows 11 25H2: Dot cannot create native local Codex task | New OS version compatibility issue disrupting Dot-native task delegation. Urgent for enterprise users. | 2 comments, 0 👍 |

---

## **4. Key PR Progress**  

| PR # | Summary | Impact |
|------|--------|--------|
| [#62654](https://github.com/openai/codex/pull/62654) | Add thread and child retention policies for injected items | Enables fine-grained control over data persistence across agents and context windows. |
| [#62653](https://github.com/openai/codex/pull/62653) | Return file sizes from `fs/getMetadata` | Improves client-side file handling for tools and scripts relying on size metadata. |
| [#62648](https://github.com/openai/codex/pull/62648) | Fix standalone release pruning on macOS with GNU coreutils | Resolves installer failure due to conflicting `stat` behavior—improves cross-platform reliability. |
| [#62644](https://github.com/openai/codex/pull/62644) | Pass inherited history visibility to thread store | Allows clients to control what history is exposed during thread forks—enhances privacy and scope. |
| [#62643](https://github.com/openai/codex/pull/62643) | Shrink npm release tarballs with libdeflate | Reduces package size by ~30%—faster downloads, lower bandwidth usage. |
| [#62641](https://github.com/openai/codex/pull/62641) | Release persisted MCP tool results from active-turn memory | Frees up RAM during long-running sessions—reduces memory bloat. |
| [#62640](https://github.com/openai/codex/pull/62640) | Reuse executor Discovery V2 inventories across turns | Speeds up turn startup by avoiding redundant discovery scans. |
| [#62639](https://github.com/openai/codex/pull/62639) | Defer queue-only mail after retained final answer | Prevents premature resampling during interrupt handling—stabilizes session flow. |
| [#62637](https://github.com/openai/codex/pull/62637) | Add center and end alignment to status line rows | Enhances UI flexibility for custom TUI toolbars and dashboards. |
| [#62635](https://github.com/openai/codex/pull/62635) | Centralize thread context ID allocation | Simplifies internal ID management—improves consistency and debugging. |

---

## **5. Hot Discussions**  

### **Ideas**  
- [#62661](https://github.com/openai/codex/discussions/62661): *Support opening Temporary Chat in a separate window* — Users want more flexibility for multitasking without cluttering the main UI.  
- [#62213](https://github.com/openai/codex/discussions/62213): *Built-in One-Click Prompt Enhancement* — Suggests integrating prompt optimization directly into input box (like WorkBuddy).  
- [#61844](https://github.com/openai/codex/discussions/61844): *Intelligent Model Routing & Task Complexity Assessment* — Proposes auto-selecting models based on task difficulty using lightweight pre-analysis.  
- [#62394](https://github.com/openai/codex/discussions/62394): *Adaptive Development Mode with Task-Aware Orchestration* — Calls for automatic switching between Manual and Adaptive modes based on task complexity.

### **Q&A**  
- [#61849](https://github.com/openai/codex/discussions/61849): *Diagnosing screenshot/tool response-start latency* — Developers seek metadata-only timing signals to isolate first-output delays from command delivery overhead.

### **Show and Tell**  
- [#16329](https://github.com/openai/codex/discussions/16329): *Awesome Codex CLI — curated list of 150+ ecosystem tools* — A comprehensive resource for subagents, skills, plugins, and MCP servers.  
- [#62355](https://github.com/openai/codex/discussions/62355): *Slidr: presentation editor driven by Codex via Deck API* — Demonstrates Codex’s potential in creative workflows.  
- [#61997](https://github.com/openai/codex/discussions/61997): *Cloud Alter Ego: unified memory across AI platforms* — Enables persistent personalization across ChatGPT, Claude, etc.  
- [#61870](https://github.com/openai/codex/discussions/61870): *CallForMe: remote MCP for phone calls* — First-party use case showing Codex’s ability to act as an agent in real-world services.  
- [#61923](https://github.com/openai/codex/discussions/61923): *Runheed: MCP server for production error tracking* — Integrates Codex into DevOps pipelines for automated incident resolution.  
- [#62551](https://github.com/openai/codex/discussions/62551): *Orchevia: local workflow with Codex + Claude Code as independent reviewers* — Highlights value of multi-agent code review.  
- [#62426](https://github.com/openai/codex/discussions/62426): *TernaryCode: see which Codex session is waiting for you* — Solves session visibility problem across multiple projects.  
- [#62492](https://github.com/openai/codex/discussions/62492): *Deepmine: pixel-art mine from local Codex usage* — Fun, playful proof-of-concept of AI-driven gamification.  

---

## **6. Feature Request Trends**  
The community is converging on three core directions:  
1. **Context & Project Isolation**: Demand for per-workspace chat scoping (#25319), improved project state persistence, and better session lifecycle control.  
2. **Interoperability & Extensibility**: Push for open standards—especially support for external MCP providers (#33551), CLI-only Dot connection (#56601), and shared tool catalogs.  
3. **Workflow Intelligence**: Growing interest in adaptive development modes (#62394), intelligent model routing (#61844), and built-in prompt optimization (#62213).

---

## **7. Developer Pain Points**  
- **Session Integrity Loss**: Multiple reports of lost projects after updates (Windows/macOS), broken chat state, and disappearing local tasks.  
- **Platform-Specific Crashes**: Persistent bugs on Windows (e.g., Computer Use, Dots, clipboard images) and macOS (IDE integrations, accessibility conflicts).  
- **Inconsistent Context Handling**: Full tool catalogs sent repeatedly causing context overflow (#61679); unclear or inconsistent retention policies.  
- **Tooling Fragmentation**: Lack of centralized discovery for subagents, plugins, and MCP servers—users spend hours hunting tools.  
- **Remote Agent Limitations**: Dot can read but not relay messages (#61670); inability to initiate native local tasks from Dot on Windows 11 25H2 (#62663).

> 🔧 *Recommendation*: Prioritize stability fixes for Windows and macOS app updates, improve session persistence, and invest in a public ecosystem registry for tools.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-11-20

---

### **1. Today's Highlights**  
The Gemini CLI team released **v0.71.0-nightly.20261120.gd4cb1713f**, introducing a critical fix for `$` literal preservation in template placeholders and launching a new `/stats heatmap` subcommand to visualize daily token usage. These updates reflect ongoing efforts to improve reliability, developer visibility, and UX fidelity—particularly for teams managing cost and context efficiency at scale.

---

### **2. Releases**

- **v0.71.0-nightly.20261120.gd4cb1713f**  
  - ✅ **Fix**: Preserves literal `$` characters during template placeholder replacement ([#30136](https://github.com/google-gemini/gemini-cli/pull/30136))  
  - 📊 **New Feature**: Added `/stats heatmap` subcommand for real-time daily token usage visualization ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))  

- **v0.71.0-preview.0**  
  - Changelog generated for prior release cycle; version bump to nightly build ([#30361](https://github.com/google-gemini/gemini-cli/pull/30361), [#30366](https://github.com/google-gemini/gemini-cli/pull/30366))

- **v0.70.0**  
  - Changelog updates for v0.69.0-preview.0 and v0.68.0 ([#30222](https://github.com/google-gemini/gemini-cli/pull/30222), [#30224](https://github.com/google-gemini/gemini-cli/pull/30224))

---

### **3. Hot Issues**

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL success` despite hitting `MAX_TURNS`, hiding interruptions | 13 comments, 2 👍 — indicates core agent state misreporting impacting debugging |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple tasks (e.g., folder creation) | 8 comments, 8 👍 — high severity P1 bug affecting usability |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Request to leverage model’s native bash affinity via zero-dependency sandboxing | 9 comments, 1 👍 — strategic direction toward safer, more efficient shell execution |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess value of AST-aware file reads/searches to reduce token noise and improve precision | 7 comments, 1 👍 — foundational work for next-gen codebase navigation |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model fails to auto-use custom skills/sub-agents even when relevant | 7 comments, 0 👍 — highlights gap in agent autonomy and skill discovery |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides like `maxTurns` | 5 comments, 0 👍 — undermines configuration control in complex workflows |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent crashes under Wayland environments | 4 comments, 1 👍 — platform-specific stability issue affecting Linux users |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Model uses destructive commands (`git reset --force`) unnecessarily | 3 comments, 1 👍 — raises safety concerns around autonomous actions |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | `get-shit-done` output hook causes crash during summary generation | 3 comments, 0 👍 — recurring stability issue in task completion flow |
| [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) | Subagent trajectories not visible via `/chat share` | 2 comments, 1 👍 — impedes collaboration and evaluation of agent behavior |

---

### **4. Key PR Progress**

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#30136](https://github.com/google-gemini/gemini-cli/pull/30136) | Fixes literal `$` handling in templates — prevents unintended variable substitution | ✅ Merged |
| [#30370](https://github.com/google-gemini/gemini-cli/pull/30370) | Corrects `.gitignore` negation parsing under wildcard directories (e.g., `logs/**`) | ✅ Merged |
| [#30376](https://github.com/google-gemini/gemini-cli/pull/30376) | Expands Windows home-relative paths using backslash (`~\...`) | ✅ Merged |
| [#30334](https://github.com/google-gemini/gemini-cli/pull/30334) | Parses PowerShell commands asynchronously to prevent UI freeze on Windows | ✅ Merged |
| [#30375](https://github.com/google-gemini/gemini-cli/pull/30375) | Fixes broken internal links in documentation (e.g., missing `.md`, anchor mismatches) | ✅ Merged |
| [#30372](https://github.com/google-gemini/gemini-cli/pull/30372) | Corrects dead anchor link in Auto Memory guide (`#skill-discovery-tiers`) | ✅ Merged |
| [#30365](https://github.com/google-gemini/gemini-cli/pull/30365) | Auto-generated changelog for v0.69.0 | ✅ Merged |
| [#30380](https://github.com/google-gemini/gemini-cli/pull/30380) | Auto-generated changelog for v0.70.0 | ✅ Merged |
| [#30378](https://github.com/google-gemini/gemini-cli/pull/30378) | Auto-generated changelog for v0.71.0-preview.0 | ✅ Merged |
| [#30382](https://github.com/google-gemini/gemini-cli/pull/30382) | Automated version bump to `0.71.0-nightly.20261120.gd4cb1713f` | ✅ Merged |

---

### **5. Hot Discussions**  
*No discussion threads provided in data source.*

---

### **6. Feature Request Trends**

Across top-tier issues, the following feature directions dominate community demand:

- **Agent Intelligence & Autonomy**:  
  - *Need for better subagent discovery and skill utilization without explicit prompting* ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))  
  - *Improved self-awareness*: agents should know their own flags, hotkeys, and execution context ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432))

- **Security & Safety**:  
  - *Prevent destructive operations* (e.g., `git reset --force`) by default unless explicitly requested ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))  
  - *Zero-dependency OS sandboxing* to safely leverage native shell capabilities without risk ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873))

- **Efficiency & Context Management**:  
  - *AST-aware tools* for precise, low-token file reads and searches ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747))  
  - *Tactful extraction logic* to surgically read code and avoid context bloat ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561))

- **Developer Experience & Debugging**:  
  - *Visible subagent trajectories* via `/chat share` for review and evaluation ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598))  
  - *Persistent, file-based task tracking* replacing in-context todo lists to avoid memory loss between sessions ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836))

---

### **7. Developer Pain Points**

Recurring frustrations reported across multiple issues include:

- **Unpredictable Agent Behavior**:  
  - Agents hang indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), fail to recover after hitting turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), or ignore config settings like `maxTurns` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

- **Context Bloat & Token Waste**:  
  - Models generate unnecessary temporary scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) and firehose large files into context, increasing costs and latency.

- **Poor Configuration Handling**:  
  - Symlinks in `~/.gemini/agents/` are ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)); global/project configs aren’t respected consistently.

- **Lack of Visibility & Debuggability**:  
  - Subagent context is missing from `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)); trajectories aren’t shareable or inspectable.

- **Platform-Specific Crashes**:  
  - Browser agent fails under Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)); PowerShell parsing freezes UI on Windows ([#30334](https://github.com/google-gemini/gemini-cli/pull/30334)).

---  
*Digest compiled from GitHub data: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest — 2026-11-20**

---

### **Today's Highlights**  
The Copilot CLI team addressed critical authentication edge cases in the latest release, particularly around MCP OAuth flows and refresh token handling. Key fixes include resolving silent auth failures for non-first-party HTTP servers and ensuring direct workflow execution waits for project extensions to register. Meanwhile, community attention is focused on persistent auth issues, context estimation inaccuracies, and session stability across platforms.

---

### **Releases**  
**v1.0.115-1** (Released: 2026-11-20)  
- Fixed: MCP sign-in now continues even when a server grants required scopes but omits an automatically requested `refresh_token` scope.  
- Fixed: Direct workflow execution now properly waits for project extension workflows to register before proceeding.  

**v1.0.115-0** (Released: 2026-11-19)  
- Various bug fixes and improvements (no detailed changelog provided).

> 🔗 [Release v1.0.115-1](https://github.com/github/copilot-cli/releases/tag/v1.0.115-1)

---

### **Hot Issues**  
*(Ranked by impact, comment volume, and urgency)*

1. **#4017**: *MCP OAuth fails silently for non-first-party HTTP servers (e.g., Atlassian, incident.io)*  
   → Critical UX failure: no popup, no error, no auth. Affects remote MCP integrations. 8 comments, 3 👍.  
   > 🔗 [Issue #4017](https://github.com/github/copilot-cli/issues/4017)

2. **#4203**: *Expired access token forces interactive re-auth instead of silent refresh*  
   → Invalidates cached refresh tokens; breaks seamless session continuity. High friction for users with long-lived sessions. 5 comments, 5 👍.  
   > 🔗 [Issue #4203](https://github.com/github/copilot-cli/issues/4203)

3. **#1168**: *Excessive authorization prompts ("authorization fatigue")*  
   → Single request triggers dozens of prompts. Hinders productivity and frustrates developers. 5 comments, 3 👍.  
   > 🔗 [Issue #1168](https://github.com/github/copilot-cli/issues/1168)

4. **#5350**: *Authorization code received but token exchange never runs (WSL2 + Entra ID)*  
   → Browser flow completes, but backend stalls at "Connecting". WSL2-specific regression affecting Azure DevOps users. 4 comments.  
   > 🔗 [Issue #5350](https://github.com/github/copilot-cli/issues/5350)

5. **#5516**: *`store_memory` offers user scope even when unavailable (fails with 404)*  
   → UI misleads users; all user-scoped stores fail despite valid repo-level memory. Blocks personal customization. 2 comments.  
   > 🔗 [Issue #5516](https://github.com/github/copilot-cli/issues/5516)

6. **#5517**: *Pasted PDFs overcounted in context estimate (620k vs 31k real tokens)*  
   → Triggers premature compaction. Similar to image handling bugs (#2936). Real cost ignored. 1 comment.  
   > 🔗 [Issue #5517](https://github.com/github/copilot-cli/issues/5517)

7. **#5501**: *Zero-turn sessions fail to persist events.jsonl and break after restart*  
   → Sessions with no input or only `/` commands are lost post-restart. Breaks automation in tools like Zed. 2 comments.  
   > 🔗 [Issue #5501](https://github.com/github/copilot-cli/issues/5501)

8. **#5510**: *Entra ID sign-in stalls silently if `xdg-open` missing in WSL2*  
   → No fallback mechanism; URL shown fails with "State mismatch". Platform-specific UX gap. 1 comment.  
   > 🔗 [Issue #5510](https://github.com/github/copilot-cli/issues/5510)

9. **#4424**: *`/compact` fails after CAPI Responses hit 5 MB limit*  
   → No recovery path once limit is reached. Session becomes unusable without restart. 1 comment, 1 👍.  
   > 🔗 [Issue #4424](https://github.com/github/copilot-cli/issues/4424)

10. **#5519**: *Latest CLI versions break BYOK (Bring Your Own Model Kit)*  
    → Model ownership verification fails; prevents local model use. Breaking change for enterprise devs. 1 comment.  
    > 🔗 [Issue #5519](https://github.com/github/copilot-cli/issues/5519)

---

### **Key PR Progress**  
*(Only one recent PR available)*

1. **#2957**: *Fix: extension bootstrap path mismatch in `launchExtension()`*  
   → Resolves extension loading failures on macOS and Windows due to incorrect path resolution in `pkg`-packed binaries. Fixes security checks in child processes.  
   > 🔗 [PR #2957](https://github.com/github/copilot-cli/pull/2957)

---

### **Hot Discussions**  
*No active discussions were found in the dataset.*

---

### **Feature Request Trends**  
Developers are increasingly requesting:

- **Smarter context management**: Accurate token estimation (PDFs, images), auto-compaction awareness, and better handling of large payloads.
- **Seamless authentication**: Silent refreshes, support for non-first-party OAuth providers, and robust browser/OS broker fallbacks.
- **Session persistence & reliability**: Zero-turn session survival, event persistence, and recovery from state limits (e.g., 5MB CAPI cap).
- **Improved UX in terminals**: Scroll preservation during output, expandable/collapsible reasoning blocks, multiline commenting (`C`, `V`), and better terminal rendering (diff panels not obscuring prior output).
- **Granular control**: Per-model effort levels, selective tool enablement via config, and visibility into which LLM each agent uses.

---

### **Developer Pain Points**  
Recurring frustrations include:

- **Authentication instability**: Silent failures, broken flows, and lack of feedback during OAuth (especially for remote MCP servers).
- **Context estimation flaws**: Overestimation of file sizes (PDFs, images) leading to unnecessary compaction.
- **Session fragility**: Sessions failing after restarts or hitting size limits with no recovery option.
- **UI/UX friction**: Scrolling jumps, diff panels covering prior output, excessive prompt fatigue.
- **Platform inconsistencies**: WSL2, Windows, and macOS show divergent behaviors (e.g., `xdg-open`, sandboxing, path handling).
- **Limited configuration control**: Inability to disable specific tools, manage global instructions clearly, or retain custom agent model visibility.

---  
*Data source: github.com/github/copilot-cli | Updated: 2026-11-20*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-20

---

### **1. Today's Highlights**  
The OpenCode community is actively addressing critical free-tier usability issues, with over 390 comments on the central `#59387` issue highlighting persistent quota resets and access failures. Meanwhile, major progress was made on Claude Agent stability—fixes for model ID flickering (`#64746`) and catch-up message handling (`#63871`) were merged, improving session reliability. New features like per-project credential management and auto-updating Git-based plugins are also advancing.

---

### **2. Releases**  
*No new releases in the past 24 hours.*

---

### **3. Hot Issues**

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | **Free tier usage errors persist**: users report "free usage exceeded" despite minimal use, with resets failing to occur. This is the top-reported pain point. | ⭐️ **393 comments**, 29 likes – *urgent, widespread impact*. |
| [#65027](https://github.com/anomalyco/opencode/issues/65027) | **Beam Free model lacks intelligence**: users report it fails on basic tasks, requiring repeated prompting. A major concern for free-tier users relying on this model. | 4 comments, 0 likes – *frustration with model quality*. |
| [#65044](https://github.com/anomalyco/opencode/issues/65044) | **Snap-confined curl blocks install staging dir** on Linux: installer creates `/tmp` path inaccessible to confined `curl`, falsely blaming disk space. | 3 comments, 0 likes – *installation blocker for snap users*. |
| [#64835](https://github.com/anomalyco/opencode/issues/64835) | **UNABLE_TO_GET_ISSUER_CERT on macOS 27** with trusted WoTrus/Sectigo chains. TLS handshake fails despite valid certs. | 4 comments, 0 likes – *security/cert chain issue affecting Mac users*. |
| [#61072](https://github.com/anomalyco/opencode/issues/61072) | **Claude Agent consumes 1.8x faster plan time** due to SDK labeling requests as `sdk-ts`. Impacts cost predictability. | 9 comments, 2 likes – *cost efficiency concern*. |
| [#64746](https://github.com/anomalyco/opencode/issues/64746) | **Claude Agent model list flips between `fable` and `claude-fable-5-2`**, causing session failures. | 3 comments, 0 likes – *critical session instability*. |
| [#64967](https://github.com/anomalyco/opencode/issues/64967) | **OpenRouter (Gemini 4 Argon) streams runaway closing braces `}}}}...`** at end of responses, breaking tool calls. | 3 comments, 0 likes – *output corruption issue*. |
| [#51209](https://github.com/anomalyco/opencode/issues/51209) | **Expose V2 TUI composer to plugins** for richer interaction. Plugin authors want deeper control over prompt input. | 15 comments, 8 likes – *popular plugin extensibility request*. |
| [#51152](https://github.com/anomalyco/opencode/issues/51152) | **Per-project credential activation needed** to avoid global account switching conflicts. | 4 comments, 3 likes – *high-value workflow improvement*. |
| [#65017](https://github.com/anomalyco/opencode/issues/65017) | **Add interactive PTY tool** for REPLs, debuggers, and EOF-driven sessions. Critical for advanced dev workflows. | 2 comments, 0 likes – *long-term core feature request*. |

---

### **4. Key PR Progress**

| PR | Summary & Impact | GitHub Link |
|----|------------------|------------|
| [#65055](https://github.com/anomalyco/opencode/pull/65055) | Regenerates OpenAPI document after missing `home_memory` flag addition; fixes CI check failure. | [PR #65055](https://github.com/anomalyco/opencode/pull/65055) |
| [#65053](https://github.com/anomalyco/opencode/pull/65053) | Re-reads background jobs after reconnect; improves state consistency post-disconnect. | [PR #65053](https://github.com/anomalyco/opencode/pull/65053) |
| [#65054](https://github.com/anomalyco/opencode/pull/65054) | Clarifies `session.prompt` treats slash commands as text — directs users to `session.command` instead. | [PR #65054](https://github.com/anomalyco/opencode/pull/65054) |
| [#65052](https://github.com/anomalyco/opencode/pull/65052) | Enables auto-updates for plugins installed from Git branches (like `main` or `develop`). | [PR #65052](https://github.com/anomalyco/opencode/pull/65052) |
| [#62649](https://github.com/anomalyco/opencode/pull/62649) | Stops Claude Agent processes when session is deleted — prevents zombie processes. | [PR #62649](https://github.com/anomalyco/opencode/pull/62649) |
| [#63873](https://github.com/anomalyco/opencode/pull/63873) | Fixes catch-up messages by merging text into a single block — restores prompt cache efficiency. | [PR #63873](https://github.com/anomalyco/opencode/pull/63873) |
| [#65051](https://github.com/anomalyco/opencode/pull/65051) | Retries download if `curl` can't access `/tmp` due to snap confinement. | [PR #65051](https://github.com/anomalyco/opencode/pull/65051) |
| [#65049](https://github.com/anomalyco/opencode/pull/65049) | Fills missing Chinese translations (Simplified & Traditional), improving localization. | [PR #65049](https://github.com/anomalyco/opencode/pull/65049) |
| [#64784](https://github.com/anomalyco/opencode/pull/64784) | Promotes `dev` branch to `production` — includes Console docs and core changes. | [PR #64784](https://github.com/anomalyco/opencode/pull/64784) |
| [#65034](https://github.com/anomalyco/opencode/pull/65034) | Uses `<system-update>` tag consistently for instruction updates — improves prompt clarity. | [PR #65034](https://github.com/anomalyco/opencode/pull/65034) |

---

### **5. Hot Discussions**  
*No discussion threads provided in the data source.*

---

### **6. Feature Request Trends**  
The most prominent trends in feature requests include:
- **Enhanced developer control**: Per-project credentials (`#51152`), configDir support for multiple Claude accounts (`#60793`, `#62514`, `#64580`), and plugin-level TUI access (`#51209`).
- **Improved stability & UX**: Fixing model ID flickering (`#64746`), preserving scroll position (`#61033`), and ensuring consistent tab behavior.
- **Extended tooling capabilities**: Interactive PTY tools (`#65017`), browser tab management (`#59787`), and WebSearch integration (`#64996`).
- **Better plugin lifecycle**: Auto-updating Git-based plugins (`#65052`) and improved error messaging for deleted sessions (`#65046`).

---

### **7. Developer Pain Points**  
Recurring frustrations include:
- **Free-tier instability**: Users repeatedly report being locked out despite no actual usage (`#59387`, `#65040`).
- **Installation barriers**: Snap users face silent failures due to `/tmp` visibility issues (`#65044`, `#65051`).
- **TLS/cert validation failures**: macOS users encounter certificate errors even with trusted chains (`#64835`).
- **Model inconsistency**: Beam Free is perceived as unintelligent, and model IDs flip unexpectedly (`#65027`, `#64746`).
- **Tooling gaps**: Lack of `browser.close` API (`#59787`), broken file preview logic (`#61625`), and poor error feedback for session directory loss (`#65046`).

---  
*Digest generated: 2026-11-20 | Source: github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest – 2026-11-20

---

## **Today's Highlights**  
The Pi ecosystem saw a surge in terminal and OS-specific stability fixes, particularly around SIGTSTP handling and terminal state restoration on Windows and Linux. Critical improvements were merged to ensure external signals like `SIGTSTP` restore the terminal properly—preventing persistent garbage input and mouse tracking issues. Additionally, key AI provider integrations (Anthropic, OpenAI, GitHub Copilot) received targeted updates to improve model availability, strict mode enforcement, and prompt caching behavior.

---

## **Releases**  
None reported in the last 24 hours.

---

## **Hot Issues**  

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | *Windows support clarity: users struggle with inconsistent setup paths and lack of unified guidance.* | **99 comments**, 2 upvotes — high visibility; reflects growing Windows adoption and need for better documentation. |
| [#12273](https://github.com/earendil-works/pi/issues/12273) | *GPT-6.2 Sol shows significantly reduced prompt cache reuse vs GPT-6.1 Sol.* | 6 comments, 2 upvotes — critical performance regression affecting cost and latency; highlights cache efficiency concerns in newer models. |
| [#12133](https://github.com/earendil-works/pi/issues/12133) | *After exit, PowerShell echoes SGR mouse sequences as garbage on Windows Terminal.* | 5 comments — recurring UI corruption issue impacting user experience post-session. |
| [#12282](https://github.com/earendil-works/pi/issues/12282) | *llama.cpp classifiers ignore image input despite `architecture.input_modalities` reporting it.* | 4 comments — blocks multimodal use cases for local models; urgent fix needed for vision-capable models. |
| [#12318](https://github.com/earendil-works/pi/issues/12318) | *Anthropic `/login` fails for Team/Enterprise seats with “Unknown scope” error.* | 3 comments — enterprise adoption blocked; indicates OAuth scope misalignment in identity flow. |
| [#11006](https://github.com/earendil-works/pi/issues/11006) | *Copilot Enterprise-enabled models stay hidden after restart due to stale `availableModelIds` cache.* | 5 comments — major usability blocker for admins; affects team-wide model access. |
| [#12272](https://github.com/earendil-works/pi/issues/12272) | *External `SIGTSTP` leaves terminal in dirty state with active mouse tracking.* | 4 comments — foundational UX issue; directly impacts session reliability across platforms. |
| [#12264](https://github.com/earendil-works/pi/issues/12264) | *OpenAI Decisions GA cache usage reset to zero due to parsing bug.* | 3 comments — undermines monitoring and optimization efforts for decision-making agents. |
| [#12323](https://github.com/earendil-works/pi/issues/12323) | *npm-based tools not restored on session resume, unlike file-based extensions.* | 2 comments — breaks developer workflow for packaged skills; incomplete fix from prior PR. |
| [#12311](https://github.com/earendil-works/pi/issues/12311) | *`createProvider` re-merges model catalog in quadratic time on every `getModels()` call.* | 2 comments — performance bottleneck under heavy model loading; potential scalability risk. |

---

## **Key PR Progress**

| PR | Summary & Impact | Link |
|----|------------------|------|
| [#12339](https://github.com/earendil-works/pi/pull/12339) | Fixes SIGTSTP handler binding to terminal ownership — prevents dangling terminal states. | [PR #12339](https://github.com/earendil-works/pi/pull/12339) |
| [#12335](https://github.com/earendil-works/pi/pull/12335) | Enables image input for llama.cpp decision classifiers by respecting `input_modalities`. | [PR #12335](https://github.com/earendil-works/pi/pull/12335) |
| [#12332](https://github.com/earendil-works/pi/pull/12332) | Sends `strict` mode flag to Claude via GitHub Copilot when supported. | [PR #12332](https://github.com/earendil-works/pi/pull/12332) |
| [#12329](https://github.com/earendil-works/pi/pull/12329) | Ensures `strict` is sent for all Copilot Responses tools (fixes #12286). | [PR #12329](https://github.com/earendil-works/pi/pull/12329) |
| [#12313](https://github.com/earendil-works/pi/pull/12313) | Adds `qwen4-max-preview` to individual token plan catalog. | [PR #12313](https://github.com/earendil-works/pi/pull/12313) |
| [#12319](https://github.com/earendil-works/pi/pull/12319) | Makes Codex system prompts cacheable by moving them out of non-cacheable prefix. | [PR #12319](https://github.com/earendil-works/pi/pull/12319) |
| [#12283](https://github.com/earendil-works/pi/pull/12283) | Handles external `SIGTSTP` like `Ctrl+Z`, restoring terminal state. | [PR #12283](https://github.com/earendil-works/pi/pull/12283) |
| [#12336](https://github.com/earendil-works/pi/pull/12336) | Flushes stdout before `process.exit()` to prevent lost terminal control sequences. | [PR #12336](https://github.com/earendil-works/pi/pull/12336) |
| [#12278](https://github.com/earendil-works/pi/pull/12278) | Refreshes scoped models on `/reload` without requiring restart. | [PR #12278](https://github.com/earendil-works/pi/pull/12278) |
| [#12325](https://github.com/earendil-works/pi/pull/12325) | Keeps GitHub Copilot’s available models up to date even after token expiry. | [PR #12325](https://github.com/earendil-works/pi/pull/12325) |

---

## **Hot Discussions**

### **Ideas**
- [#12320](https://github.com/earendil-works/pi/discussions/12320): *Leverage free chat quotas via WebDriver to power editor AI backends*  
  A creative proposal to offload AI costs using public free tiers (e.g., ChatGPT Web), enabling low-cost AI integration in IDEs.

- [#12314](https://github.com/earendil-works/pi/discussions/12314): *Consider renaming `codemode` to avoid confusion with `codemod`/`codemodule`*  
  Suggests improving clarity in tool naming to reduce misclassification by LLMs.

### **Show and Tell**
- [#12331](https://github.com/earendil-works/pi/discussions/12331): *Pi-Personal: a small always-on personal agent built on pi*  
  A lightweight, Herdr Core-integrated agent that runs continuously via Telegram. Uses pinned Pi instance with extensions — showcases Pi’s extensibility and potential for persistent assistant workflows.

---

## **Feature Request Trends**

1. **Cross-platform consistency** — Users demand reliable, consistent behavior across Windows, macOS, and Linux, especially regarding terminal state management (`SIGTSTP`, mouse input).
2. **Improved model lifecycle management** — Frequent requests for better handling of model availability, especially after admin changes or token refreshes.
3. **Persistent conversation & session recovery** — High interest in reliable restoration of tools, state, and context across sessions (especially for npm-based skills).
4. **Enhanced multi-modal support** — Growing demand for image and audio input support in local models (e.g., `llama.cpp`), particularly for decision-making agents.
5. **Better debugging & observability** — Requests for clearer logs around cache usage, model selection, and tool execution (e.g., `strict` mode, prompt reuse).

---

## **Developer Pain Points**

- **Terminal state corruption** after signal interruption (`SIGTSTP`, `Ctrl+Z`) remains a top pain point, especially on Windows and in TUI environments.
- **Inconsistent model availability** after admin changes or token refreshes — leads to silent failures and confusion.
- **Poor tool discovery in codemode batching** — skill reads are obscured behind higher-level calls, reducing transparency.
- **Missing or incorrect model metadata** — e.g., `qwen4-max-preview` missing from plans, `image` support ignored in classifier registration.
- **Cache inefficiencies** — Prompt cache reuse dropped in GPT-6.2, and system prompts not being cacheable due to improper placement.
- **Clipboard issues in devcontainers** — `wl-clipboard` dependency assumed but not installed by default, breaking copy functionality.
- **High-frequency API inconsistencies** — `openai-responses` sending `strict` incorrectly, `GitHub Copilot` models not updating dynamically.

--- 

*Digest generated: 2026-11-20 | Source: [github.com/earendil-works/pi](https://github.com/earendil-works/pi)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-11-20

---

### **1. Today's Highlights**  
The Qwen Code project continues to prioritize CI/CD stability and managed agent reliability, with multiple high-priority failures in the `Managed Agent` and `E2E Tests` suites persisting on `main`. Critical security concerns have emerged around AUTO mode trust bypasses, while recent PRs focus on stabilizing test infrastructure, improving mobile UX, and refining token accounting across services.

---

### **2. Releases**  
No new releases were published in the last 24 hours.

---

### **3. Hot Issues**

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failure: Managed Agent gate — no test identified (484 comments) | Highest engagement; indicates systemic CI instability affecting production-grade workflows. |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | Daily dependency CVE audit failed (57 comments) | Critical for security hygiene; likely blocking merges until resolved. |
| [#15486](https://github.com/QwenLM/qwen-code/issues/15486) | Token estimate double-counts pending tool results post-compaction (7 comments) | P1 issue impacting context handling and request routing accuracy. |
| [#17851](https://github.com/QwenLM/qwen-code/issues/17851) | Chronic `Managed Agent full tier` E2E failure since Nov 11 (3 comments) | Persistent regression in core managed-agent functionality. |
| [#17854](https://github.com/QwenLM/qwen-code/issues/17854) | AUTO mode bypasses LLM classifier — trusted servers execute unreviewed tools (3 comments) | High-severity security flaw; potential for malicious code execution. |
| [#17188](https://github.com/QwenLM/qwen-code/issues/17188) | DeepSeek V3.1/V3.2 fall back to 32K output limit instead of 65K (3 comments) | Model misconfiguration affects performance expectations. |
| [#17189](https://github.com/QwenLM/qwen-code/issues/17189) | Ollama Llama4 models lose image input due to ID normalization (3 comments) | Critical UX and capability loss for multimodal users. |
| [#17834](https://github.com/QwenLM/qwen-code/issues/17834) | Flaky test: `managed DingTalk adapter outbox > keeps window loadable` (4 comments) | Flagged by CI Patrol as flakiness needing stabilization or validation. |
| [#17884](https://github.com/QwenLM/qwen-code/issues/17884) | Flaky E2E test: `ExportTranscriptDocument` browser gate (3 comments) | Another recurring flake in Web Shell export path. |
| [#17859](https://github.com/QwenLM/qwen-code/issues/17859) | iOS Safari keyboard covers Send button on welcome screen (3 comments) | Mobile UX pain point affecting accessibility and usability. |

---

### **4. Key PR Progress**

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#17865](https://github.com/QwenLM/qwen-code/pull/17865) | Stabilize `Managed Agent gate` name for required checks | Open – critical for CI enforceability |
| [#17871](https://github.com/QwenLM/qwen-code/pull/17871) | Refactor files-on-v2 lifecycle and public child relaxation | Open – pre-production convergence step |
| [#17901](https://github.com/QwenLM/qwen-code/pull/17901) | Fix JSONL tail diagnostic recovery and cache churn | Open – resolves follow-up from prior fix |
| [#17900](https://github.com/QwenLM/qwen-code/pull/17900) | Recover durable Runtime in long-answer restart E2E | Open – improves resilience in persistence scenarios |
| [#17437](https://github.com/QwenLM/qwen-code/pull/17437) | Add Arabic support with RTL layout for CLI/Web Shell | Open – major internationalization milestone |
| [#17825](https://github.com/QwenLM/qwen-code/pull/17825) | End tool-calling turn immediately when “Send now” is clicked | Open – enhances real-time user control |
| [#17822](https://github.com/QwenLM/qwen-code/pull/17822) | Turn dynamic workflows on by default | Open – simplifies developer experience |
| [#17701](https://github.com/QwenLM/qwen-code/pull/17701) | Deflake large-file smoke line-count assertions | Open – stabilizes key file preview logic |
| [#17895](https://github.com/QwenLM/qwen-code/pull/17895) | Bind daemon chat controller to session provider | Open – enables unified chat surface |
| [#17902](https://github.com/QwenLM/qwen-code/pull/17902) | Correct token usage accounting across dashboard and /stats | Open – fixes visibility and billing accuracy |

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**

Top emerging feature directions from open issues and PRs:

- **Mobile-first UX improvements**: Responsive design fixes (e.g., iOS keyboard overlay), touch-friendly controls.
- **Enhanced multilingual support**: Full RTL layout and Arabic localization in both CLI and Web Shell.
- **Improved managed agent reliability**: Stable gates, consistent E2E test coverage, and better runtime recovery.
- **Default-enabled advanced features**: Dynamic workflows, interactive cards, and permission modeling.
- **Developer tooling maturity**: Better LSP integration, command migration safety, and robust testing frameworks.
- **Security-by-design enhancements**: Trust model clarity, automated review enforcement, and zero-trust fallbacks.

---

### **7. Developer Pain Points**

Recurring frustrations reported by contributors:

- **Persistent CI/CD failures**: Multiple `Main CI failed` issues across different workflows (`Managed Agent`, `E2E`, `Qwen Code CI`) indicate fragile pipelines.
- **Flaky E2E and unit tests**: Repeatedly flagged by CI Patrol (e.g., `ExportTranscriptDocument`, `DingTalk adapter`), slowing development velocity.
- **Security configuration gaps**: AUTO mode trust bypass vulnerability raises red flags about policy enforcement.
- **Token and context management bugs**: Miscounts during compaction and incorrect max_tokens behavior impact model predictability.
- **Legacy infrastructure debt**: Dead review bots, outdated CI gates (`qwen-code-ci-bot` 404), and obsolete versioning machinery hinder automation.
- **Mobile platform inconsistencies**: iOS Safari rendering issues impair cross-platform usability.

---  
*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | Updated: 2026-11-20*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*