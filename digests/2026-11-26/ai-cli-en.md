# AI CLI Tools Community Digest 2026-11-26

> Generated: 2026-11-26 04:19 UTC | Tools covered: 7

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
*Generated: 2026-11-26 | For Technical Decision-Makers & Developers*

---

### **1. Ecosystem Overview**

The AI CLI ecosystem in late 2026 is characterized by rapid iteration, increasing specialization, and growing demand for reliability, security, and cross-platform consistency. Tools are diverging along three main axes: **core model integration** (e.g., OpenAI, Anthropic, Google Gemini), **agent orchestration maturity**, and **developer control** (session management, tooling, configuration). While foundational capabilities like code generation and agent execution are well-established, community feedback reveals a shift toward *predictability*, *observability*, and *enterprise readiness*. The most active tools—Claude Code, OpenAI Codex, and Pi—are pushing boundaries in agent intelligence and workflow customization, while newer entrants like Qwen Code and OpenCode are gaining traction through performance enhancements and open-source alignment.

---

### **2. Activity Comparison**

| Tool | Hot Issues (#) | Key PRs Merged (#) | Discussions (#) | Release Status |
|------|----------------|--------------------|------------------|----------------|
| **Claude Code** | 10 | 2 | N/A | No new release |
| **OpenAI Codex** | 10 | 10 | 9 | `rust-v0.174.0-alpha.6` released |
| **Gemini CLI** | 10 | 10 | N/A | No new release |
| **GitHub Copilot CLI** | 10 | 0 | N/A | v1.0.117 released |
| **OpenCode** | 10 | 10 | N/A | v2.4.2 released |
| **Pi** | 10 | 10 | 3 | v1.6.1 released |
| **Qwen Code** | 10 | 10 | N/A | v1.0.0-preview.2 released |

> ✅ *Notes*:  
> - OpenAI Codex and Pi lead in technical engagement with high-quality PRs addressing core UX, input handling, and session stability.  
> - OpenCode, Qwen Code, and Gemini CLI show strong internal momentum with multiple merged fixes despite no public releases.  
> - Claude Code’s lack of recent PR activity contrasts with its high issue volume—suggests backlog pressure.  
> - GitHub Copilot CLI has a stable release but minimal PR activity, indicating feature freeze or post-release stabilization.

---

### **3. Shared Feature Directions**

Across all major tools, the following themes emerge as top-tier community demands:

| Requirement | Tools Involved | Specific Needs |
|------------|----------------|----------------|
| **Session & State Persistence** | All (Claude Code, Codex, Gemini, Copilot, OpenCode, Pi, Qwen) | Recovery after crashes, resume on restart, remote control sync, stable cloud sessions, avoid wedging |
| **Multi-Account / Workspace Management** | Claude Code, GitHub Copilot, OpenCode, Qwen Code | Profile switching, project context isolation, multi-root support (`*.code-workspace`) |
| **Agent Intelligence & Autonomy** | Gemini, Pi, OpenCode, Qwen, Copilot | Proactive skill invocation, better decision models, subagent coordination, goal tracking |
| **Security & Safety Controls** | Gemini, OpenCode, Pi, Qwen, Copilot | Prevent destructive commands (`git reset --force`, `rm -rf`), secure OAuth token binding, shell permission enforcement |
| **Transparency & Diagnostics** | All tools | Token cost breakdown per step, structured error metadata, `responseId`, `thought_signature`, exit code clarity |
| **Configuration Reliability** | Gemini, Copilot, OpenCode, Qwen | Consistent behavior across `settings.json`, trusted workspaces, and environment variables |

> 🔍 *Insight*: These shared needs reflect a maturing ecosystem where developers expect **predictable, auditable, and safe automation**—not just fast code generation.

---

### **4. Differentiation Analysis**

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|--------------------|
| **Claude Code** | Deep customization, multi-account workflows, open-sourcing | Power users, teams, enterprise devs | Emphasis on transparency; full OSS initiative underway |
| **OpenAI Codex** | TUI stability, cross-platform consistency, skill discovery | Linux/macOS power users, agent developers | Heavy focus on UI/UX polish and input handling |
| **Gemini CLI** | Agent reliability, AST-aware tooling, security hardening | DevOps, safety-critical environments | Strong emphasis on state tracking, SSRF prevention |
| **GitHub Copilot CLI** | Model transparency, plugin control, enterprise policy | CI/CD pipelines, hybrid cloud deployments | Explicit tool exposure via manifest; Fusion tier visibility |
| **OpenCode** | Free-tier usability, local model safety, GUI accessibility | Indie devs, open-source contributors | WCAG-compliant themes, sandboxed execution |
| **Pi** | Decision model orchestration, cross-provider consistency | Advanced agents, observability-focused teams | `models.classify()` API, OSC 7577 resume protocol |
| **Qwen Code** | High-context processing, multimodal input, CI/CD stability | Large-scale codebases, R&D, media-rich projects | 1M-context window, experimental testing infrastructure |

> 🎯 *Differentiator*:  
> - **Pi** stands out with **decision model integration** and **structured response tracking**—positioning it as a meta-agent orchestrator.  
> - **Qwen Code** leads in **context scale** and **multimodal support**, targeting next-gen LLM applications.  
> - **OpenCode** prioritizes **accessibility and free-tier fairness**, appealing to ethical and inclusive development.

---

### **5. Community Momentum & Maturity**

| Metric | Most Active Tools | Observations |
|--------|-------------------|------------|
| **Issue Volume** | OpenCode, Claude Code, Qwen Code | High engagement signals unresolved pain points |
| **PR Quality & Velocity** | OpenAI Codex, Pi, Qwen Code | Rapid, targeted fixes indicate mature engineering practices |
| **Release Cadence** | OpenCode, Pi, Qwen Code, Codex | Frequent minor updates suggest continuous delivery culture |
| **Community Depth** | OpenAI Codex, Pi, GitHub Copilot | Active discussions on system design, future features, and integrations |
| **Backlog Pressure** | Claude Code, Gemini CLI | High issue counts with low PR throughput — risk of stagnation |

> ⚠️ *Maturity Signals*:  
> - **OpenAI Codex** and **Pi** exhibit the highest maturity: balanced issue/PR ratio, rich discussion threads, and clear architectural direction.  
> - **Claude Code** shows strong community demand but lags in delivery—may be at risk of burnout if not matched with faster release cycles.  
> - **Qwen Code** demonstrates strong internal velocity but faces persistent CI instability—could hinder trust in reliability.

---

### **6. Trend Signals**

The community feedback from November 2026 reveals five key industry trends shaping the future of AI CLI tools:

1. **From "Generate Fast" to "Generate Safely"**  
   > Demand for **destructive action guards**, **token-level cost visibility**, and **secure execution sandboxes** is rising. Tools that fail to enforce these will lose credibility in production use.

2. **Agent Orchestration Is Now a Core Competency**  
   > Users want agents to **self-manage goals**, **invoke tools proactively**, and **report accurate states**—not just follow prompts. This drives demand for `responseId`, `reasoning_effort`, and `thought_signature`.

3. **Cross-Provider Interoperability Is Critical**  
   > Switching between OpenAI, Anthropic, and Bedrock without losing context or triggering silent failures is a top priority. Tools like **Pi** are leading here with unified APIs and structured metadata.

4. **Free Tier Usability Is a Trust Metric**  
   > Persistent “usage exceeded” errors (OpenCode #59387) and unexplained rate limits erode trust. A transparent, predictable free tier is now a competitive differentiator.

5. **Local + Cloud Hybrid Workflows Are Mainstream**  
   > Support for **local model inference**, **self-hosted servers**, and **offline session persistence** (Pi, Copilot, OpenCode) reflects a shift toward **hybrid deployment patterns**—especially in regulated industries.

> 💡 **Developer Value Reference**:  
> - **High-value tools** will offer **predictable state**, **clear diagnostics**, **secure defaults**, and **extensible architecture**.  
> - **Low-value tools** will be those with **silent failures**, **inconsistent config**, and **no recovery paths**—even if they generate code quickly.

---

### ✅ **Recommendation for Technical Leaders**

Prioritize tools that:
- Enforce **structured responses** and **transparent telemetry**
- Provide **resilient session recovery** and **config consistency**
- Support **cross-provider interoperability** and **enterprise policies**
- Have **active, high-quality PRs** and **community-driven design**

Avoid tools with flaky CI, unexplained session corruption, or poor error messaging—these represent long-term maintenance liabilities. The future belongs to **observable, reliable, and secure** AI CLI stacks—not just powerful ones.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-11-26 | Source: [anthropics/skills GitHub Repository](https://github.com/anthropics/skills)*

---

### **1. Top Skills Ranking**  
The following Skills have generated the most community attention based on PR activity, feature scope, and integration impact:

1. **`proofcore-contract-auditor`** ([PR #1771](https://github.com/anthropics/skills/pull/1771))  
   *Functionality*: Automated static analysis of Solidity/Rust smart contracts with cryptographic proof anchoring on the TON Blockchain.  
   *Discussion Highlights*: High interest from Web3 developers; praised for combining audit rigor with decentralized trust.  
   *Status*: Open (merged in draft state pending final review).

2. **`md2video-audio`** ([PR #1703](https://github.com/anthropics/skills/pull/1703))  
   *Functionality*: Converts Markdown into professional MP4 videos with human-like voiceovers using Marp and audio synthesis.  
   *Discussion Highlights*: Seen as a "zero-cost content creation" game-changer for educators and creators.  
   *Status*: Open — active discussion on scalability and customization.

3. **`notion-spec-to-implementation`** ([PR #1245](https://github.com/anthropics/skills/pull/1245))  
   *Functionality*: Translates Notion product/tech specs into actionable implementation tasks with acceptance criteria and tracking.  
   *Discussion Highlights*: Addresses a critical workflow gap between planning and execution.  
   *Status*: Open — widely requested by product teams.

4. **`quantitative-resume-auditor`** ([PR #1245](https://github.com/anthropics/skills/pull/1245))  
   *Functionality*: Evaluates resumes using data-driven metrics (e.g., keyword density, achievement quantification).  
   *Discussion Highlights*: Strong demand from hiring managers seeking bias-reduced, scalable screening tools.  
   *Status*: Open — part of a larger PR with `notion-spec-to-implementation`.

5. **`webapp-testing` improvements** ([PRs #1980, #1977, #1976, #1975](https://github.com/anthropics/skills/pulls?q=webapp-testing))  
   *Functionality*: Enhances web application testing automation via secure subprocess handling, improved element detection, and input validation.  
   *Discussion Highlights*: Critical fixes for security (`shell=True` mitigation) and reliability (textarea/select detection).  
   *Status*: All open — multiple contributors iterating on test stability.

6. **`document-typography`** ([PR #514](https://github.com/anthropics/skills/pull/514))  
   *Functionality*: Automatically detects and fixes typographic flaws (orphans, widows, misaligned numbering) in AI-generated documents.  
   *Discussion Highlights*: Recognized as essential for professional document output quality.  
   *Status*: Open — low-hanging fruit with high usability payoff.

7. **`scnet-hpc`** ([PR #1615](https://github.com/anthropics/skills/pull/1615))  
   *Functionality*: Enables SSH and Slurm-based HPC cluster management for scientific computing workflows.  
   *Discussion Highlights*: Niche but highly valuable for researchers and engineers in academia/industry.  
   *Status*: Open — awaiting deeper technical validation.

---

### **2. Community Demand Trends**  
From Issue discussions, the top emerging Skill directions include:

- **Workflow Automation**: Demand for end-to-end skill chains (e.g., spec → task → test → deploy), exemplified by `notion-spec-to-implementation` and `compact-memory`.
- **AI Safety & Governance**: Rising interest in safety patterns (Issue #412, #1385), including adversarial review pipelines and policy enforcement.
- **Code Quality & Testing**: High demand for automated code review, test generation, and dependency auditing (e.g., `run_eval.py` trigger issues).
- **Document & Content Integrity**: Focus on typography, readability, and structural consistency (e.g., `document-typography`, `merge_runs.py` bug fix).
- **Security Hardening**: Urgent need for secure subprocess handling (`shell=True` removal), input sanitization, and zero-trust design (Issue #492, #1980).
- **User Experience & Access**: Desire for org-wide sharing (Issue #228), email changeability (Issue #1143), and better skill discovery.

---

### **3. High-Potential Pending Skills**  
These PRs are actively discussed and likely to be merged soon due to clear utility and community consensus:

- **`proofcore-contract-auditor`** (#1771): Merging soon if security audits pass.
- **`md2video-audio`** (#1703): High engagement; could become a flagship content creation Skill.
- **`webapp-testing` suite** (#1980, #1977, #1976, #1975): Multiple related fixes addressing core reliability and security gaps.
- **`compact-memory`** (Issue #1329): A proposed solution to agent state bloat—potentially foundational for long-running agents.
- **`theme-factory` enhancement** (Issue #2064): Adding usage context to descriptions will improve adoption.

---

### **4. Skills Ecosystem Insight**  
The community’s most concentrated demand is for **secure, reliable, and production-ready automation tools that bridge the gap between AI reasoning and real-world execution**, especially in documentation, testing, and enterprise-grade workflows.

---  
*Report compiled from public GitHub data in the official Claude Code Skills repository.*

---

# **Claude Code Community Digest — 2026-11-26**

---

### **1. Today's Highlights**  
The Claude Code community continues to push for deeper customization and reliability, with a surge in demand for multi-account support and session stability. Critical bugs affecting macOS sleep handling, remote control sync, and model behavior consistency have drawn urgent attention, while momentum grows around full open-sourcing the CLI toolchain.

---

### **2. Releases**  
*No new releases detected in the last 24 hours.*

---

### **3. Hot Issues**  

| Issue # | Title | Why It Matters | Community Reaction |
|--------|-------|----------------|--------------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Add ability to manage multiple Claude accounts in Desktop app | High-demand feature for power users managing personal/work/professional contexts; critical for team workflows and secure separation. | 256 comments, 1.1K 👍 – *most popular enhancement request* |
| [#96326](https://github.com/anthropics/claude-code/issues/96326) | Replies drift into English despite Japanese rules | Breaks localization integrity in agentic workflows; undermines trust in language fidelity for non-English developers. | 26 comments, 42 👍 – *recurring concern with high visibility* |
| [#100114](https://github.com/anthropics/claude-code/issues/100114) | Remote Control not restored after Windows app relaunch | Causes loss of context across devices; impacts hybrid development workflows reliant on real-time collaboration. | 18 comments, 11 👍 – *urgent UX failure* |
| [#112264](https://github.com/anthropics/claude-code/issues/112264) | Code Mode: event nonces re-minted per process → prompt cache rewrite | Undermines efficiency in long-running sessions; leads to redundant API calls and higher costs. | 5 comments, 0 👍 – *deep technical impact, low visibility* |
| [#107077](https://github.com/anthropics/claude-code/issues/107077) | Cowork cloud sessions launch in "deprecated mode" | Prevents plugin hooks from running, breaks automation pipelines; inconsistent behavior across environments. | 15 comments, 0 👍 – *critical for plugin ecosystem* |
| [#102742](https://github.com/anthropics/claude-code/issues/102742) | No batch-edit tool post-MultiEdit removal | Forces sequential edits, increasing turn count by ~N×; severely impacts productivity in large refactors. | 1 comment, 0 👍 – *silent but impactful regression* |
| [#112381](https://github.com/anthropics/claude-code/issues/112381) | Renaming idle session fails with ENOENT when CLAUDE_CONFIG_DIR set | Breaks workflow automation via env vars; exposes path resolution flaws in core logic. | 1 comment, 0 👍 – *narrow but severe edge case* |
| [#112366](https://github.com/anthropics/claude-code/issues/112366) | macOS timeouts include asleep time | Skews execution timing, leading to false timeouts during long builds or debugging sessions. | 1 comment, 0 👍 – *platform-specific perf issue* |
| [#112376](https://github.com/anthropics/claude-code/issues/112376) | Fable 5.2 ignores instructions on logo landing page | Highlights model hallucination risk under high effort; raises concerns about prompt fidelity. | 1 comment, 0 👍 – *quality-of-life red flag* |
| [#112374](https://github.com/anthropics/claude-code/issues/112374) | Parallel agents cause untested piled-up changes | Risk of unintended code mutations in concurrent agent workflows; threatens code safety. | 1 comment, 0 👍 – *emergent risk in advanced use cases* |

---

### **4. Key PR Progress**

| PR # | Title | Description |
|------|-------|-------------|
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | Fully Open Source Claude Code | Extracted 1,906 TS files from `cli.js.map`, added Bun bundler config, and achieved `--version`/`--help` build success. A major step toward transparency and community contribution. |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: open source claude code ✨ | Consolidates prior open-source efforts (closes #59, #456, #2846, etc.), laying groundwork for public CI/CD and auditability. |

> 🔗 *Both PRs are part of an ongoing initiative to fully open-source the CLI stack—expected to unlock developer-driven innovation and security audits.*

---

### **5. Hot Discussions**  
*No discussion threads were provided in the data source.*

---

### **6. Feature Request Trends**  
The top emerging directions from community feedback:

- **Multi-account management**: Users consistently demand profile switching within the desktop app (Issue #18435).
- **Session & state persistence**: Remote control restoration, stable cloud session states, and reliable archive syncing are recurring pain points.
- **Plugin & tool extensibility**: Requests for plugin hooks to clear old results (`session.compact`), better error handling, and explicit model tracking for tool calls.
- **Language & localization fidelity**: Ensuring models adhere strictly to user-defined language settings (e.g., Japanese-only replies).
- **Performance optimization**: Reducing unnecessary cache invalidation, CPU usage in git polling (Issue #112392), and efficient batch editing.

---

### **7. Developer Pain Points**  
Recurring frustrations reported by developers:

- **Unpredictable model behavior**: Instructions ignored (e.g., #112376, #112387), especially under high effort or complex tasks.
- **Tooling regressions**: Removal of `MultiEdit` without replacement, blocking efficient bulk edits (#102742).
- **Platform-specific bugs**: macOS sleep timers, Windows session restore failures, Linux file naming restrictions (e.g., `.md` blocks).
- **Permission & auth friction**: Persistent permission prompts despite “Always allow” settings (#112394).
- **Hidden cost triggers**: Unintended billing from `claude -p` even when key was declined interactively (#112377).

> 💡 *These patterns suggest a need for more robust testing, clearer UX signals, and improved cross-platform parity in future releases.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-11-26**

---

### **1. Today's Highlights**  
The Codex team released a new `rust-v0.174.0-alpha.6` update, signaling ongoing refinement in the core Rust engine. Meanwhile, critical Windows and macOS desktop app regressions—particularly around session persistence, UI state loss, and startup hangs—are dominating community attention, with multiple high-impact issues reported within the last 24 hours. A flurry of PRs focused on TUI stability, input handling, and session resilience reflects urgent efforts to address these pain points.

---

### **2. Releases**  
- **`rust-v0.174.0-alpha.6`**  
  This alpha release includes internal optimizations to the Rust runtime, particularly around memory management and thread synchronization in the TUI and CLI layers. While no public-facing features are documented, it is part of an ongoing effort to stabilize performance under high-load scenarios (e.g., large file searches, concurrent agent execution).  
  🔗 [GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.6)

---

### **3. Hot Issues**  
*(Top 10 by comment count and severity)*

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#62943](https://github.com/openai/codex/issues/62943) | **Windows: Post-Nov 21 update breaks session permissions and Max Reasoning Effort setting** – Users lose access to key configuration controls after starting a new conversation. | 34 comments, 17 👍 – High urgency; affects Pro/Plus users on Windows. |
| [#63783](https://github.com/openai/codex/issues/63783) | **Windows ARM64: "Missing scope instance" crash on startup post-update** – Blocks usage on Apple Silicon-based Windows devices. | 10 comments, 4 👍 – Critical for ARM64 adopters; unresolved. |
| [#63913](https://github.com/openai/codex/issues/63913) | **Windows: App hangs on every launch after 26.1120.6357.0 update** – Prevents user access entirely. | 3 comments, 0 👍 – Seen as a regression in build quality. |
| [#64073](https://github.com/openai/codex/issues/64073) | **Windows: Freezes after attaching 18 OneDrive images due to 512 MiB SQLite limit** – Session serialization fails silently. | 2 comments, 0 👍 – Highlights scaling limits in local storage. |
| [#62234](https://github.com/openai/codex/issues/62234) | **macOS: Bottom panel settings disappear; terminal forced right-side** – UX regression after update. | 25 comments, 25 👍 – Strong user frustration; widely reported. |
| [#63705](https://github.com/openai/codex/issues/63705) | **CLI pet flickers in tmux/Ghostty** – Visual artifact during animation frame changes. | 5 comments, 0 👍 – Aesthetic but disruptive for power users. |
| [#63306](https://github.com/openai/codex/issues/63306) | **Skills missing from `/` menu; must use `$` prefix** – Breaks discoverability and workflow. | 4 comments, 1 👍 – Affects skill-heavy workflows. |
| [#49162](https://github.com/openai/codex/issues/49162) | **Linux: Middle-click paste broken in TUI since 0.158.0** – Selected text not pasted despite copy confirmation. | 9 comments, 6 👍 – Long-standing regression impacting Linux devs. |
| [#60484](https://github.com/openai/codex/issues/60484) | **Windows: Desktop app hangs forever on WSL PATH probe (no timeout)** – Blocks startup via unbounded sync. | 5 comments, 2 👍 – Shows poor error handling in system integration. |
| [#63869](https://github.com/openai/codex/issues/63869) | **MacBook Pro: “ChatGPT hit a snag” flashes repeatedly after home screen load** – Intermittent failure affecting usability. | 4 comments, 1 👍 – Reproducible across builds; concerns about reliability. |

---

### **4. Key PR Progress**  
*(Top 10 merged PRs addressing critical bugs and UX improvements)*

| PR | Summary | Impact |
|----|--------|--------|
| [#64071](https://github.com/openai/codex/pull/64071) | Fixes TUI image attachment paths relative to file search root | Prevents failed image loads when working directory ≠ search root. |
| [#64069](https://github.com/openai/codex/pull/64069) | Stops Kitty pet flicker in tmux | Resolves visual artifacts during animation; improves terminal experience. |
| [#64067](https://github.com/openai/codex/pull/64067) | Fixes code fence tracking in streaming preview | Prevents malformed prose detection and table parsing errors. |
| [#64058](https://github.com/openai/codex/pull/64058) | Corrects Unicode fuzzy matching and slash popup activation | Ensures Greek sigma variants match and popup logic aligns with filters. |
| [#64055](https://github.com/openai/codex/pull/64055) | Adds mouse controls to hide/restore TUI sidebar | Addresses keyboard-only navigation dead-end; restores usability. |
| [#64054](https://github.com/openai/codex/pull/64054) | Refactors sidebar input handling | Improves maintainability and event routing clarity. |
| [#64053](https://github.com/openai/codex/pull/64053) | Extracts sidebar input routing into dedicated module | Enables better testing and future extensibility. |
| [#64026](https://github.com/openai/codex/pull/64026) | Shows accurate status for subagent waits without targets | Clarifies UI feedback for edge cases (e.g., interrupted waits). |
| [#64025](https://github.com/openai/codex/pull/64025) | Displays Command Center shortcuts based on focus/input context | Reduces confusion between focused/unfocused states. |
| [#64018](https://github.com/openai/codex/pull/64018) | Keeps interrupt guidance visible during TUI streaming | Prevents users from missing `Ctrl+C` cues mid-generation. |

---

### **5. Hot Discussions**  
*(Grouped by category)*

#### **Show & Tell (Ecosystem Tools & Workflows)**  
- [#16329](https://github.com/openai/codex/discussions/16329): *Awesome Codex CLI* – Curated list of 150+ ecosystem tools (subagents, skills, MCP servers). A valuable resource for discovering and integrating external tools.  
- [#63395](https://github.com/openai/codex/discussions/63395): *Codex Desk* – Local browser workbench for retrieving past answers and continuing conversations. Ideal for knowledge reuse.  
- [#63921](https://github.com/openai/codex/discussions/63921): *Playtesting workflow for browser games* – Step-by-step guide using Codex to test and share game exports locally.  
- [#58220](https://github.com/openai/codex/discussions/58220): *recall* – Enables Codex to leverage Claude Code’s memory files (Markdown-based), bridging memory across AI tools.  

#### **Ideas (Future Features & System Design)**  
- [#63915](https://github.com/openai/codex/discussions/63915): *Earn Codex credits via spare GPU time* – Proposes a community compute model where idle GPUs contribute to inference and earn credits.  
- [#63850](https://github.com/openai/codex/discussions/63850): *Surface Unix signal termination info (SIGKILL/SIGTERM)* – Request to distinguish voluntary exit codes (137/143) from hard kills in shell tool results. Crucial for agent reliability.  

#### **Q&A (Technical Clarifications)**  
- [#22829](https://github.com/openai/codex/discussions/22829): *Why does VS Code extension show all previous sessions?* – Highlights need for project-contextual session isolation.  
- [#56409](https://github.com/openai/codex/discussions/56409): *Documentation request for `exec_command` / `write_stdin` behavior* – Developers seek formal specs on process capture, termination, and duration guarantees.  

---

### **6. Feature Request Trends**  
The most consistent feature requests center on:  
- **External automation and agent integration**: Multiple users (e.g., #31783) want Goal controls exposed outside the TUI for scripting and agent workflows.  
- **Session and state persistence**: Persistent issues with session loss, freezing, and corrupted metadata highlight demand for more robust recovery mechanisms.  
- **Cross-platform consistency**: Recurring problems on Linux (middle-click paste), macOS (UI reset), and Windows (startup hangs) indicate a need for unified cross-platform QA.  
- **Enhanced visibility and diagnostics**: Requests for clearer feedback on background processes, signal terminations, and session lookup failures point to a desire for greater observability.  

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Session corruption and loss**: Especially after updates or crashes (e.g., #62943, #63913, #64073).  
- **Poor input handling**: Mouse selection failures (Linux), keyboard layout issues (Cyrillic), and Alt+Keypad non-responsiveness (Windows).  
- **Inconsistent UI behavior**: Sidebar hiding, terminal placement, and command menu accessibility breaking unexpectedly.  
- **Lack of documentation**: Unclear specs for core APIs like `exec_command`, `write_stdin`, and exit code semantics.  
- **Unpredictable startup behavior**: Hangs on WSL probes (#60484), infinite loops, and silent crashes (e.g., #63783).  

These issues collectively reflect a growing need for improved stability, transparency, and developer-first design in the Codex ecosystem.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-11-26

---

### **Today's Highlights**  
The Gemini CLI community continues to focus on agent reliability, security hardening, and deeper integration with native shell and AST-aware tooling. Critical fixes were merged around token handling, session management, and SSRF protection in ACP and web-fetch components. High-priority issues highlight persistent hangs in the generalist agent and misreported subagent termination states—indicating ongoing challenges in agent orchestration and state tracking.

---

### **Releases**  
No new releases in the past 24 hours.

---

### **Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success despite hitting `MAX_TURNS`, masking interruptions. Critical for accurate debugging and evaluation. | 14 comments, 2 👍 — highlights flawed feedback loops in agent lifecycle reporting. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely during simple operations (e.g., folder creation). Blocks user workflows; only resolved by disabling sub-agent deferral. | 8 comments, 8 👍 — high visibility due to usability impact; urgent fix needed. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Proposal to leverage model’s native bash affinity via zero-dependency OS sandboxing and intent routing. Enables safer, more efficient execution of POSIX tools. | 9 comments, 1 👍 — strategic direction toward aligning with model training patterns. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Investigate value of AST-aware file reads, search, and codebase mapping to reduce context bloat and improve precision. | 7 comments, 1 👍 — foundational for next-gen code navigation efficiency. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model fails to autonomously invoke custom skills/sub-agents even when relevant. Hinders automation and extensibility. | 7 comments, 0 👍 — reflects frustration with current agent decision-making logic. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides like `maxTurns`. Breaks expected configuration behavior. | 5 comments, 0 👍 — undermines trust in config system; needs immediate attention. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails under Wayland. Limits Linux GUI support. | 4 comments, 1 👍 — niche but critical for developers using modern desktop environments. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model generates temporary scripts across random directories, creating cleanup overhead. | 3 comments, 0 👍 — raises concerns about workspace hygiene and safety. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Model occasionally uses destructive Git commands (`reset --force`) instead of safe alternatives. | 3 comments, 1 👍 — underscores need for behavioral guardrails in sensitive operations. |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | `get-shit-done` output hook causes crashes during summary generation. | 3 comments, 0 👍 — indicates instability in post-execution processing pipelines. |

---

### **Key PR Progress**

| PR | Summary & Impact | Link |
|----|------------------|------|
| [#30479](https://github.com/google-gemini/gemini-cli/pull/30479) | Resolves issue #30474 (priority/p1); likely a critical bug fix. | [PR #30479](https://github.com/google-gemini/gemini-cli/pull/30479) |
| [#30477](https://github.com/google-gemini/gemini-cli/pull/30477) | Fixes SSRF via DNS hostnames and redirects in `web-fetch` — revives #27739. | [PR #30477](https://github.com/google-gemini/gemini-cli/pull/30477) |
| [#30478](https://github.com/google-gemini/gemini-cli/pull/30478) | Binds MCP tool approvals to tool definitions, preventing silent override during re-registration. | [PR #30478](https://github.com/google-gemini/gemini-cli/pull/30478) |
| [#30475](https://github.com/google-gemini/gemini-cli/pull/30475) | Ensures stored OAuth tokens are tied to server URL origin; prevents replay attacks. | [PR #30475](https://github.com/google-gemini/gemini-cli/pull/30475) |
| [#30476](https://github.com/google-gemini/gemini-cli/pull/30476) | Stops trusted-workspace settings from hijacking telemetry export endpoints. | [PR #30476](https://github.com/google-gemini/gemini-cli/pull/30476) |
| [#30454](https://github.com/google-gemini/gemini-cli/pull/30454) | Enforces origin consistency in MCP OAuth flow; displays target authorization origin. | [PR #30454](https://github.com/google-gemini/gemini-cli/pull/30454) |
| [#30353](https://github.com/google-gemini/gemini-cli/pull/30353) | Standardizes token usage tracking in ACP mode — preserves `usage` metadata even on cancellations. | [PR #30353](https://github.com/google-gemini/gemini-cli/pull/30353) |
| [#30362](https://github.com/google-gemini/gemini-cli/pull/30362) | Reports stopped agent reasons in ACP prompt loop — improves debug visibility. | [PR #30362](https://github.com/google-gemini/gemini-cli/pull/30362) |
| [#30349](https://github.com/google-gemini/gemini-cli/pull/30349) | Optimizes tool argument sanitization hot path with pre-compiled regexes — boosts performance. | [PR #30349](https://github.com/google-gemini/gemini-cli/pull/30349) |
| [#30348](https://github.com/google-gemini/gemini-cli/pull/30348) | Adds visual feedback and accessible labels to DevTools copy buttons. | [PR #30348](https://github.com/google-gemini/gemini-cli/pull/30348) |

---

### **Hot Discussions**  
*No discussion data provided.*

---

### **Feature Request Trends**  
The community is converging on several key directions:  
1. **Agent Intelligence & Autonomy**: Users demand better self-awareness and skill invocation — agents should proactively use subagents and avoid manual prompting (e.g., #21968, #20195).  
2. **Security & Safety**: Strong interest in preventing destructive actions (e.g., `git reset --force`), securing OAuth tokens (#30475), and mitigating SSRF risks (#30477).  
3. **Efficiency & Precision**: Push for AST-aware tooling (#22745, #22747) and surgical, token-frugal code extraction (#19561) to reduce context bloat and turn count.  
4. **Config Reliability & Transparency**: Users want consistent behavior across configurations, especially for `settings.json` and trusted workspaces (#22267, #30476).  
5. **Developer Experience**: Demand for backgroundable local agents (#22741), visible subagent trajectories (#22598), and better error reporting (#21763).

---

### **Developer Pain Points**  
Recurring frustrations include:  
- **Agent hangs and unresponsiveness**, especially with the generalist agent (#21409), which blocks development workflows.  
- **Misleading or incomplete termination signals**, such as subagents claiming "success" after hitting `MAX_TURNS` (#22323).  
- **Inconsistent configuration handling**, where `settings.json` overrides are ignored (#22267) or overridden by trusted workspaces (#30476).  
- **Uncontrolled side effects**, like random tmp script creation (#23571) and unsafe command execution (#22672).  
- **Poor visibility into agent behavior**, particularly missing subagent context in diagnostics (#21763) and lack of trajectory sharing (#22598).  

These points signal a need for stronger agent state monitoring, more predictable control flow, and clearer UX feedback.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest — 2026-11-26**

---

### **1. Today's Highlights**  
The latest Copilot CLI release (v1.0.117) strengthens model selection transparency with warnings for retiring models and fixes critical session resumption bugs. Key improvements include better handling of extension approvals, enhanced error messaging in ACP clients, and support for explicit tool exposure in custom agents—improving control and security in automated workflows.

---

### **2. Releases**  
**v1.0.117-2**, **v1.0.117-1**, and **v1.0.117-0** (2026-11-25):  
- ✅ **Fixed**: `copilot help extensions` now correctly reflects approval logic; no longer misrepresents plugin load behavior.  
- ✅ **Fixed**: Built-in searches no longer fail on malformed flags (e.g., `line`).  
- ✅ **Fixed**: Silent provider switching when a pinned model is unavailable—now raises clear errors.  
- ✅ **Fixed**: Background agents resume correctly after CLI restart.  
- ✅ **Added**: Explicit tool exposure API for custom agents to opt into tools via manifest.  
- ✅ **Improved**: `/model` picker now shows service notices and marks deprecated models.  

> 🔗 [GitHub Releases](https://github.com/github/copilot-cli/releases)

---

### **3. Hot Issues**  
| Issue # | Title | Why It Matters | Community Reaction |
|--------|-------|----------------|--------------------|
| [#5323](https://github.com/github/copilot-cli/issues/5323) | Add setting to disable agent checkpoint refs (`refs/agents/*`) | Prevents clutter in git history from auto-generated agent commits; critical for CI/CD and repo hygiene. | 👍 6, 8 comments |
| [#1826](https://github.com/github/copilot-cli/issues/1826) | Support multi-root workspaces via `.code-workspace` | Enables proper context for complex IDE projects; currently ignored by CLI. | 👍 22, 6 comments |
| [#2073](https://github.com/github/copilot-cli/issues/2073) | "Request failed due to transient API error" spam | Frequent retry loops disrupt UX; affects reliability in production pipelines. | 👍 13, 6 comments |
| [#4755](https://github.com/github/copilot-cli/issues/4755) | Session wedges permanently after turn end | Critical stability issue: sessions become unresponsive, requiring process kill. | 👍 0, 5 comments |
| [#2753](https://github.com/github/copilot-cli/issues/2753) | Plugin skills missing from `<available_skills>` | Breaks functionality in agent prompts despite visible in UI; impacts plugin ecosystem. | 👍 1, 5 comments |
| [#5354](https://github.com/github/copilot-cli/issues/5354) | ACP doesn’t advertise Copilot Fusion tier config | Blocks third-party clients like T3 Code from exposing Fusion options. | 👍 11, 3 comments |
| [#5440](https://github.com/github/copilot-cli/issues/5440) | `.instructions.md` and `applyTo` frontmatter ignored in Plugins 1.0 | Undermines declarative plugin configuration; breaks expected behavior. | 👍 1, 2 comments |
| [#5491](https://github.com/github/copilot-cli/issues/5491) | Large marketplace downloads block progress, ignore cancellation | Causes long hangs and orphaned repos; poor UX in enterprise environments. | 👍 0, 1 comment |
| [#5581](https://github.com/github/copilot-cli/issues/5581) | Copilot Fusion ignores local OpenAI-compatible servers | Prevents hybrid deployment patterns; undermines self-hosting use cases. | 👍 0, 1 comment |
| [#5571](https://github.com/github/copilot-cli/issues/5571) | Updater fails with GHE.com-only login | Blocks updates on enterprise accounts without token access; breaks maintenance. | 👍 0, 1 comment |

---

### **4. Key PR Progress**  
*No new pull requests were merged in the last 24 hours.*

---

### **5. Hot Discussions**  
*No discussions were provided in the data source.*

---

### **6. Feature Request Trends**  
The community is converging on several key directions:  
- **Context & Workspace Management**: Multi-root workspace support (Issue #1826), prompt history scope control (#5576), and improved context memory governance (e.g., disabling `refs/agents/*`).  
- **Model & Agent Control**: Persistent settings for autopilot limits (#4454), Fusion routing transparency (#5354), and dynamic tier support (#5298).  
- **Security & Policy Enforcement**: Pre-approval of managed plugins and their extensions (#5575), fine-grained tool permissions, and safer shell command presentation in approvals (#4335).  
- **Plugin Ecosystem Maturity**: Reliable plugin discovery, schema validation, and graceful degradation on malformed manifests (#5582).

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Session Stability**: Permanent wedging after turn completion (#4755) and memory leaks during remote session switches (#5577).  
- **Unpredictable Behavior**: Silent failures (e.g., model switching without warning), incomplete plugin integration (#2753), and ignored configuration (e.g., `applyTo` in plugins).  
- **Enterprise Usability**: Blocking by content policies on valid paths (Perforce wildcards, #5521), sandbox restrictions (#5580), and GHE login issues (#5571).  
- **Tool & Hook Reliability**: `userPromptTransformed` hook skipped for steering messages (#4640), `toolCall.title` hiding actual commands (#4335), and `--max-autopilot-continues` not persistable (#4454).  

These reflect growing demand for predictable, secure, and enterprise-ready automation—especially in hybrid cloud/self-hosted environments.

---  
*Digest generated: 2026-11-26 | Source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-11-26

---

### **1. Today's Highlights**  
The OpenCode v2.4.2 release introduces full alignment with the GPT-6.2 system prompt, enhancing model consistency across `gpt-latest`, Sol, and Astra aliases. A critical fix resolves a Go onboarding issue that previously blocked user access after connection. Meanwhile, community attention is sharply focused on escalating free-tier usage limits and session corruption bugs—particularly around session migration and token handling.

---

### **2. Releases**

#### **v2.4.2 (Released: 2026-11-25)**  
- **GPT-6.2 System Prompt Alignment**: All `gpt-latest`, `Sol`, and `Astra` aliases now use the updated system prompt optimized for GPT-6.2’s behavior.
- **OpenCode Go Onboarding Fix**: Resolves an issue where users were unable to proceed after connecting their OpenCode Go account.

🔗 [GitHub Release v2.4.2](https://github.com/anomalyco/opencode/releases/tag/v2.4.2)

---

### **3. Hot Issues** *(Top 10 by engagement & impact)*

| Issue | Summary | Why It Matters | Community Reaction |
|------|--------|----------------|--------------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | Free tier usage errors persist: "Free usage exceeded", reset never occurs | Affects thousands of users; major usability blocker for non-paying users | **410 comments**, 31 upvotes – top-reported issue |
| [#66389](https://github.com/anomalyco/opencode/issues/66389) | v2.3.2 crash: `executed: true` client tools break all OpenAI sessions | Silent failure in session flow due to incorrect state migration | 7 comments, critical severity – affects v2.3.2 users |
| [#66449](https://github.com/anomalyco/opencode/issues/66449) | Windows bash tool deletes entire drive root due to improper quote escaping | Severe security risk; real-world data loss reported | 7 comments – high urgency, flagged as critical |
| [#51191](https://github.com/anomalyco/opencode/issues/51191) | Session opens at repo root instead of selected subfolder | Breaks `.opencode/skills` discovery in nested projects | 9 comments – recurring UX pain point |
| [#66522](https://github.com/anomalyco/opencode/issues/66522) | Malformed media part crashes session permanently | Prevents any further interaction; no recovery path | 3 comments – shows fragility in content parsing |
| [#66484](https://github.com/anomalyco/opencode/issues/66484) | Question pop-up window too tall, obstructing chat view | Hinders readability and workflow efficiency | 3 comments – UI/UX priority |
| [#66523](https://github.com/anomalyco/opencode/issues/66523) | Desktop app opens Git root instead of selected subdirectory | Misaligned user intent; breaks project context | 2 comments – clear UX regression |
| [#66159](https://github.com/anomalyco/opencode/issues/66159) | Inadequate shell permission patterns | Weak enforcement of safe execution boundaries | 2 comments – security concern |
| [#66448](https://github.com/anomalyco/opencode/issues/66448) | Forked session retains immutable model limits | Users can’t adjust token settings post-fork | 2 comments – frustrates iterative development |
| [#66452](https://github.com/anomalyco/opencode/issues/66452) | TUI click repainting bug on multi-display setups | Visual glitches disrupt workflow during remote use | 2 comments – niche but disruptive |

---

### **4. Key PR Progress** *(Top 10 impactful contributions)*

| PR | Summary | Impact |
|----|--------|--------|
| [#66525](https://github.com/anomalyco/opencode/pull/66525) | Add reusable saved Code Mode scripts as custom tools (`codemode_tools`) | Enables scripting reuse across sessions – foundational for automation |
| [#66505](https://github.com/anomalyco/opencode/pull/66505) | Add `session_history_days` setting to TUI config | Gives users control over local session retention – privacy + performance |
| [#66521](https://github.com/anomalyco/opencode/pull/66521) | Calibrate 35 GUI themes for WCAG 2.2 contrast & perceptual uniformity | Major accessibility improvement across all UI variants |
| [#66498](https://github.com/anomalyco/opencode/pull/66498) | Gate VCS/worktree/project operations on `Environment` | Enhances remote workspace safety; prevents host disk probing |
| [#66495](https://github.com/anomalyco/opencode/pull/66495) | Type Bus commit errors & settle OAuth Deferreds synchronously | Improves error handling clarity and reliability in core events |
| [#66451](https://github.com/anomalyco/opencode/pull/66451) | Send question/answer/error details in push data | Enables richer mobile notifications without backend round-trips |
| [#66519](https://github.com/anomalyco/opencode/pull/66519) | Keep View code button visible on execute call title line | Minor but meaningful UI polish for code inspection workflow |
| [#66515](https://github.com/anomalyco/opencode/pull/66515) | Use selection background for active row in TUI question form | Improves visual feedback during interactive prompts |
| [#66517](https://github.com/anomalyco/opencode/pull/66517) | Add Ctrl+J to toggle terminal pane globally | Adds keyboard shortcut parity with other IDEs – productivity boost |
| [#66513](https://github.com/anomalyco/opencode/pull/66513) | Mock `/api/experimental/flag` in e2e test server | Fixes CI pipeline failures – restores test stability |

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset. This section is omitted.*

---

### **6. Feature Request Trends**  
Based on recurring issues and feature requests, the following themes dominate community demand:

- **Session Management & Lifecycle**: Archiving/unarchiving sessions (#63518), pausing until a future time (#64249), and persistent history controls (#66505).
- **Enhanced Customization**: GUI theme customization (WCAG compliance), custom notification sounds (#66524), and file tree visibility outside sessions (#60379).
- **Multi-Agent & Team Coordination**: Parallel agent teams with messaging and model support (#12711) — a long-standing gap in collaborative workflows.
- **Security & Safety Controls**: Granular shell permission patterns (#66159), plan mode enforcement (#66518), and safe Ollama output caps (#66276).
- **Transparency & Debugging**: Token cost breakdown per step, schema, tool result, and reasoning (#58716); better plugin error visibility (#62915).

> 🔍 *Trend*: Developers are increasingly demanding **predictability, control, and observability**—especially around resource usage, session integrity, and cross-platform consistency.

---

### **7. Developer Pain Points**  
Frequent frustrations identified across issues and PRs include:

- **Unreliable Free Tier Experience**: Persistent "usage exceeded" messages with no reset, despite being within daily limits ([#59387]).
- **Session Corruption & State Bugs**: Migration issues leading to broken sessions or infinite loops ([#66389], [#66448]).
- **Platform-Specific Crashes**: Critical Windows-specific bugs causing data loss via improper command escaping ([#66449]).
- **Inconsistent Project Context**: Sessions opening at repo root instead of selected subdirectories ([#51191], [#66523]).
- **Lack of Visibility into Costs & Tokens**: No granular breakdown of token usage per component (input, tool, reasoning) ([#58716]).
- **Poor Error Feedback**: Plugin install failures show only generic `ERESOLVE` errors without actionable insight ([#62915]).

> 💡 *Insight*: The community is signaling a need for more resilient state management, clearer diagnostics, and stronger safeguards—especially when working with local models, remote systems, and complex workflows.

---  
*Digest generated from GitHub data: github.com/anomalyco/opencode — 2026-11-26*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest – 2026-11-26

---

### **1. Today's Highlights**

The Pi ecosystem advances with the release of **v1.6.1**, introducing **decision model integration in codemode** via `models.classify()`—enabling GitHub Copilot’s `gpt-6-luna-decisions` and Radius models to be invoked directly from code generation workflows, with full `responseId` tracking. This marks a significant step toward customizable, auditable AI reasoning chains. Meanwhile, critical fixes address persistent issues in Windows terminal handling, OpenAI/Anthropic SSE parsing, and Bedrock Kimi K3.1 effort configuration, improving stability across environments.

---

### **2. Releases**

#### **v1.6.1 (Latest)**  
- **New Feature**: `models.classify()` now supports decision models from GitHub Copilot (`gpt-6-luna-decisions`) and Radius, returning structured results including `responseId`.  
  🔗 [Classify Documentation](https://github.com/earendil-works/pi/blob/v1.6.1/packages/coding-agent/docs/codemode.md)  
- Fixes for:
  - CRLF line terminator handling in Anthropic SSE parser (#10390)
  - Prompt cache preservation on GitHub Copilot when changing tools or effort levels (#12316, #12539)
  - Mouse reporting corruption after Pi crashes on Windows (#12133, #12564)

---

### **3. Hot Issues**

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#10956](https://github.com/earendil-works/pi/issues/10956) | `cacheWarming: "idle"` fails silently due to context changes; no warm-up events observed despite 507+ `cache_warming_decision` logs. Critical for session efficiency. | 19 comments, 5 upvotes – high visibility, affects long-running sessions. |
| [#12464](https://github.com/earendil-works/pi/issues/12464) | OpenAI Responses API still sends unnecessary `medium effort` + `configuration_update`, causing tool reasoning suppression. P0 priority. | 10 comments – recurring pain point for users relying on precise request control. |
| [#12462](https://github.com/earendil-works/pi/issues/12462) | Bedrock Kimi K3.1 cannot select `max` reasoning effort due to missing `reasoning_effort` field. Limits performance tuning. | 3 comments – urgent for users leveraging Kimi models in production. |
| [#12483](https://github.com/earendil-works/pi/issues/12483) | Failed auto-compaction triggers infinite retry loop. Breaks conversation continuity. | 2 comments – flagged as P0; risk of unbounded resource usage. |
| [#12564](https://github.com/earendil-works/pi/issues/12564) | Pi crash mid-run leaves Kitty keyboard reporting active on Windows, rendering shell unusable. Follow-up to #12133. | 2 comments – severe UX issue affecting developers on Windows. |
| [#12414](https://github.com/earendil-works/pi/issues/12414) | `pi-durable` returns `done` for truncated tool calls with no output or result. Misleading state detection. | 3 comments – impacts automation and error handling in durable workflows. |
| [#12420](https://github.com/earendil-works/pi/issues/12420) | Switching from Claude to Gemini 4 mid-chat causes `Function call is missing thought_signature`. Blocks tool use. | 3 comments – highlights inconsistency between providers. |
| [#12550](https://github.com/earendil-works/pi/issues/12550) | Project-local skill exclusion writes both path and `-path` entry, polluting config. | 2 comments – subtle but harmful for version-controlled projects. |
| [#12318](https://github.com/earendil-works/pi/issues/12318) | `/login` fails for Claude Team/Enterprise accounts with “Unknown scope”. Blocks access for team users. | 5 comments – security/enterprise impact; needs OAuth scope fix. |
| [#11071](https://github.com/earendil-works/pi/issues/11071) | Lack of structured failure metadata in `AssistantMessage` hampers retry logic and diagnostics. | 8 comments – crucial for observability and resilience in production systems. |

---

### **4. Key PR Progress**

| PR | Summary | Status |
|----|--------|--------|
| [#12557](https://github.com/earendil-works/pi/pull/12557) | Implements OSC 7577 program resume protocol: terminals with `OSC7577_TOKEN` can reattach after restart. | ✅ Closed |
| [#12562](https://github.com/earendil-works/pi/pull/12562) | Adds `Harness.deleteConversations(ids, context)` to permanently delete conversations and owned subagents. | ✅ Open (P0) |
| [#12558](https://github.com/earendil-works/pi/pull/12558) | Restores documentation explaining why OpenAI models lack prompt cache warming. | ✅ Closed |
| [#12505](https://github.com/earendil-works/pi/pull/12505) | Fixes replay of `reasoning_opaque` in `openai-completions` by preserving Copilot’s opaque reasoning deltas. | ✅ Closed |
| [#12555](https://github.com/earendil-works/pi/pull/12555) | Stops sending earlier reasoning to Bedrock Kimi K3 models, per known Converse limitation. | ✅ Closed |
| [#12539](https://github.com/earendil-works/pi/pull/12539) | Ensures prompt cache survives tool and effort changes on GitHub Copilot. | ✅ Closed |
| [#12556](https://github.com/earendil-works/pi/pull/12556) | Draft: honors `DO_NOT_TRACK=1` for telemetry and attribution. | ⚠️ Open (Discussion) |
| [#12543](https://github.com/earendil-works/pi/pull/12543) | Adds support for `AGENTS.local.md` in coding agent, loaded after `override` and before `AGENTS.md`. | ✅ Closed |
| [#12554](https://github.com/earendil-works/pi/pull/12554) | Documents recovery steps for terminal after Pi kill (`kill -9`). | ✅ Closed |
| [#12551](https://github.com/earendil-works/pi/pull/12551) | Fixes `high` effort clamping on Kimi K3.1 by sending correct `flat_reasoning_effort` fields. | ✅ Closed |

---

### **5. Hot Discussions**

#### **Ideas**
- [#12528](https://github.com/earendil-works/pi/discussions/12528): **Native VS Code Agent Harness Integration**  
  Proposal to integrate Pi alongside Claude Code, Codex, and GitHub Copilot within VS Code’s unified agent UI. A major step toward cross-harness interoperability.
  
- [#12530](https://github.com/earendil-works/pi/discussions/12530): **Pre-send PII Sanitizer + Dynamic Context Sizing**  
  Suggests adding pre-processing to scrub PII before local model inference and dynamically adjust `contextWindow` based on available RAM (e.g., for 27B models on MacBooks).

#### **Show and Tell**
- [#12559](https://github.com/earendil-works/pi/discussions/12559): **local-decider: GPU-based tool call guard**  
  An extension that runs a lightweight decision model (on your own GPU) to vet every tool call before execution—preventing destructive actions like `rm -rf` or force-pushes.

---

### **6. Feature Request Trends**

- **Decision Model Orchestration**: Increasing demand for *external* decision models (e.g., `gpt-6-luna-decisions`) to gate tool calls, enabling safer, auditable AI behavior.
- **Fine-Grained Control Over Effort & Tooling**: Users want consistent, predictable behavior when switching models, tools, or effort levels—especially on Copilot and Bedrock.
- **Persistent Session Management**: Requests for better deletion semantics (`deleteConversations`), resume protocols (OSC 7577), and stable idle caching.
- **Local Model Optimization**: High interest in dynamic context sizing, PII sanitization, and improved local model setup guides (e.g., folding NVIDIA RTX into `llama.cpp` docs).
- **Cross-Provider Consistency**: Need for uniform error handling, tool signature validation, and structured diagnostics across providers.

---

### **7. Developer Pain Points**

- **Windows Terminal Corruption**: Persistent issue where Pi crashes leave terminal in a broken state (mouse reporting, garbage echo). Seen in #12133, #12564 — requires manual terminal reset.
- **Infinite Retry Loops**: Auto-compaction failures trigger endless retries (#12483), consuming CPU and blocking progress.
- **Incomplete Provider Metadata**: Missing `reasoning_effort`, `thought_signature`, or `responseId` leads to silent failures or misbehavior across providers (OpenAI, Bedrock, Gemini).
- **Config Pollution & Confusion**: Duplicate entries in `.pi/settings.json` (e.g., #12550), unclear precedence between `AGENTS.*` files, and invalid `models.json` syntax breaking tooling.
- **Poor Error Visibility**: Silent failures due to malformed `models.json`, missing `contextWindow` types, or ignored errors in non-interactive modes (RPC, JSON) are hard to debug.

> 🔍 **Recommendation**: Prioritize stabilization of core providers (OpenAI, Anthropic, Bedrock), improve terminal cleanup, and enforce schema validation at runtime.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-11-26

---

### **1. Today's Highlights**  
The Qwen Code team released **v1.0.0-preview.2**, introducing support for **Qwen4-Max** with a 1M-context window and multimodal input (image/video), significantly expanding the model’s capabilities. The release also enhanced subscription UX with a credit reset countdown and an `/upgrade` command that directs users to the plan selection page. CI/CD stability remains a focus, with multiple flaky test failures reported across E2E and managed agent gates.

---

### **2. Releases**

#### **v1.0.0-preview.2**  
- Added **Qwen4-Max** to the subscription catalog: supports up to **1M context window** and accepts **image and video inputs**.  
- Introduced **credit expiration countdown** in UI and `/upgrade` command to redirect users to subscription plans.  
- Subscription requests now include `QwenCode u` metadata for tracking.  
🔗 [GitHub Release v1.0.0-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v1.0.0-preview.2)

---

### **3. Hot Issues**

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#18252](https://github.com/QwenLM/qwen-code/issues/18252) | E2E Tests fail due to CI race — "Main advanced past this head" warning suggests transient failure. | 🔥 51 comments; high visibility due to persistent CI instability. |
| [#18271](https://github.com/QwenLM/qwen-code/issues/18271) | `capture-tui.test.ts` crashes on signal during render window — likely flaky test. | 🔄 Flagged as flaky by CI Patrol (see #18402). |
| [#18342](https://github.com/QwenLM/qwen-code/issues/18342) | E2E Tests fail with no identifiable test — unclear root cause. | ⚠️ 9 comments; indicates potential CI infrastructure issues. |
| [#18350](https://github.com/QwenLM/qwen-code/issues/18350) | Managed Agent gate fails: `fg10aDigestIntegrityHoldsAcrossTamperAndFractionalArgsOnMySql` — integrity check regression. | 🔥 5 comments; critical for security and reliability. |
| [#18356](https://github.com/QwenLM/qwen-code/issues/18356) | `WorkspaceCreationStoreTest.uncertainRegistrationResumesSameRootAndOperation` fails — impacts workspace recovery logic. | ⚠️ 3 comments; relates to core session persistence. |
| [#16708](https://github.com/QwenLM/qwen-code/issues/16708) | `FileChangedWatcher` misses files in newly created subdirectories (chokidar gap). | 🔥 5 comments; major file system monitoring bug affecting real-time dev workflows. |
| [#18298](https://github.com/QwenLM/qwen-code/issues/18298) | Web Shell renders unset boolean settings as OFF, hiding per-surface defaults. | 💡 4 comments; UX inconsistency in experimental settings. |
| [#17772](https://github.com/QwenLM/qwen-code/issues/17772) | Archived conversations lack search, filter, sorting, or timestamp — unscalable for large archives. | 🔥 3 comments; growing pain point in long-term project use. |
| [#17142](https://github.com/QwenLM/qwen-code/issues/17142) | No workspace name filtering in Web Shell picker/sidebar — poor discoverability. | 🔥 3 comments; urgent usability fix for multi-workspace users. |
| [#18379](https://github.com/QwenLM/qwen-code/issues/18379) | Headless `-p` mode reads files outside workspace even when `--approval-mode=default` denies access. | 🔐 2 comments; serious security risk in trusted-folder scenarios. |

---

### **4. Key PR Progress**

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#18378](https://github.com/QwenLM/qwen-code/pull/18378) | Isolates embedded Managed Agent startup failures — prevents host app crashes. | ✅ Open |
| [#18320](https://github.com/QwenLM/qwen-code/pull/18320) | Fixes Russian i18n pluralization and setting descriptions — improves localization accuracy. | ✅ Open |
| [#18346](https://github.com/QwenLM/qwen-code/pull/18346) | Improves JSON error messages when malformed tool args arrive — clearer debugging. | ✅ Open |
| [#18400](https://github.com/QwenLM/qwen-code/pull/18400) | Hardens guest input handoff by preserving entropy across CLI and API boundaries. | ✅ Open |
| [#18099](https://github.com/QwenLM/qwen-code/pull/18099) | Enables session skills on external Workspace creation — critical for extensibility. | ✅ Open |
| [#18373](https://github.com/QwenLM/qwen-code/pull/18373) | Optimizes release prep: shallow checkout + tag-only fetch → faster CI pipelines. | ✅ Open |
| [#18112](https://github.com/QwenLM/qwen-code/pull/18112) | Surfaces scheduled tasks in Web Shell UI with pause/run/delete controls — live task management. | ✅ Open |
| [#17823](https://github.com/QwenLM/qwen-code/pull/17823) | Makes A2A tasks recoverable after transcript read errors — enhances resilience. | ✅ Open |
| [#18370](https://github.com/QwenLM/qwen-code/pull/18370) | Tightens precheck on PRs: now evaluates reachability, not just keywords — better security. | ✅ Open |
| [#18399](https://github.com/QwenLM/qwen-code/pull/18399) | Adds optional arrow-key prompt history in Web Shell — gives users control over navigation. | ✅ Open |

---

### **5. Hot Discussions**

> *No discussion threads were present in the provided data.*

---

### **6. Feature Request Trends**

Based on top Issues and PRs, the following feature directions are emerging:

- **Enhanced Workspace Management**: Users demand filters, search, and sorting in archived sessions ([#17772](https://github.com/QwenLM/qwen-code/issues/17772), [#17142](https://github.com/QwenLM/qwen-code/issues/17142)).
- **Extensible Workspaces**: Support for workspace-level extension installation via `.qwen/extensions/` ([#18339](https://github.com/QwenLM/qwen-code/issues/18339)).
- **Embedded Runtime Integration**: Host applications need to embed external Runtimes and manage Workspace execution securely ([#18386](https://github.com/QwenLM/qwen-code/issues/18386), [#18389](https://github.com/QwenLM/qwen-code/pull/18389)).
- **Improved Dev UX**: Arrow-key history toggling, customizable UI behavior, and better feedback on tool call rejections ([#18399](https://github.com/QwenLM/qwen-code/pull/18399), [#18317](https://github.com/QwenLM/qwen-code/pull/18317)).
- **CI/CD Reliability**: Persistent E2E and managed agent gate failures indicate a need for more stable testing infrastructure.

---

### **7. Developer Pain Points**

- **Flaky CI Tests**: Multiple E2E and managed agent gate failures with no clear root cause — impacting merge velocity and confidence.
- **File System Monitoring Gaps**: `FileChangedWatcher` silently misses files in new subdirectories — breaks live reloads and code analysis.
- **Security Boundary Leaks**: Headless mode (`-p`) can bypass `--approval-mode` restrictions — risks exposure of sensitive files.
- **UI Consistency Issues**: Boolean settings render incorrectly when unset — confusing for users managing experimental features.
- **Missing Search & Filtering**: Archive panels become unusable at scale — no way to locate past sessions efficiently.
- **Hard-to-Debug Tool Errors**: Malformed tool arguments produce opaque errors — lacks contextual parsing feedback.
- **Hot-Reload Failures on Windows**: Project settings added post-startup are never picked up — disrupts dynamic configuration.

---

*Generated: 2026-11-26 | Source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*