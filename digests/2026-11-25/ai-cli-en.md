# AI CLI Tools Community Digest 2026-11-25

> Generated: 2026-11-25 05:36 UTC | Tools covered: 7

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

# **AI CLI Tools Ecosystem Cross-Tool Comparison Report**  
*Compiled: 2026-11-25 | For Technical Decision-Makers & Developers*

---

### **1. Ecosystem Overview**

The AI CLI tool landscape in late 2026 is characterized by rapid evolution toward full-fledged, agent-driven development environments. Tools are shifting from simple code generation assistants to complex orchestration platforms with persistent memory, multi-agent workflows, and deep integration with external systems via MCP (Model Control Protocol) servers. While core functionality remains centered on code completion and reasoning, community demand is increasingly focused on **session management, security hardening, cross-platform stability, and transparency in context usage and costs**. This reflects a maturing ecosystem where developers expect not just intelligent responses but predictable, reliable, and auditable workflows—especially as AI agents take on higher-stakes tasks.

---

### **2. Activity Comparison**

| Tool | Issues (Open) | PRs (Last 24h) | Discussions | Release Status (24h) |
|------|----------------|------------------|-------------|------------------------|
| **Claude Code** | 380+ | 0 | N/A | ✅ v2.1.332 (MCP + PreSkillShellCommand) |
| **OpenAI Codex** | 60+ | 10 | 5 active threads | 🔁 Alpha builds (rust-v0.174.0/0.173.0) |
| **Gemini CLI** | 30+ | 10 | N/A | No new release |
| **GitHub Copilot CLI** | 10+ | 2 (merged) | N/A | ✅ v1.0.116 (security + UX) |
| **OpenCode** | 10+ | 10 (merged) | N/A | No new release |
| **Pi** | 10+ | 10 (merged) | N/A | No new release |
| **Qwen Code** | 10+ | 10 (merged) | N/A | No new release |

> ✅ *Note:* "N/A" indicates upstream disablement of issues/PRs or reliance solely on Discussions. GitHub Copilot CLI’s two merged PRs reflect improved contributor onboarding (devcontainer setup).

---

### **3. Shared Feature Directions**

Across all tools, the following requirements emerge as **cross-cutting priorities**, indicating industry-wide convergence:

| Requirement | Tools Affected | Specific Needs |
|------------|----------------|----------------|
| **Session & Project Management** | All (esp. Claude Code, OpenAI Codex, OpenCode, Qwen Code) | Granular deletion (`/delete`, `claude session delete`), directory-scoped resume (`-c`), project-level overviews, archive persistence |
| **Context Transparency & Visibility** | Claude Code, OpenAI Codex, Pi, Qwen Code | Real-time context usage indicators, live session status, token budgeting, transcript integrity |
| **Security & Safe Execution** | All (strongest in Copilot CLI, Pi, Qwen Code) | Shell command blocking (`PreSkillShellCommand`), sandboxing, `refs/agents/*` opt-out, permission tracking, plugin integrity checks |
| **Cross-Platform Stability** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code | macOS TCC/WebAuthn, Windows CRLF corruption, Linux/Wayland rendering, SSH config handling |
| **Configuration Flexibility** | All (especially Qwen Code, OpenAI Codex) | Custom provider registration, model selection persistence, environment variable injection, UI defaults |

> 📌 These shared needs suggest that **developer experience maturity** is now defined not by model capability, but by **operational reliability, configurability, and trust**.

---

### **4. Differentiation Analysis**

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|--------------------|
| **Claude Code** | Agent autonomy via MCP, early-stage agentic workflows | Advanced developers, enterprise users needing control | Experimental MCP server skills; strong emphasis on pre-execution hooks and security |
| **OpenAI Codex** | Workflow continuity, execution control, subagent orchestration | DevOps teams, secure environments (BYOK), long-running pipelines | High focus on session state preservation, work mode consistency, and local/cloud choice |
| **Gemini CLI** | Agent reliability, AST-aware navigation, non-destructive branching | Research engineers, writers, complex workflow builders | `/fork` for iterative development; deep investment in agent recovery and safety guards |
| **GitHub Copilot CLI** | Enterprise-grade security, policy enforcement, integration clarity | Large orgs, regulated industries | Prioritizes plugin safety warnings, re-authentication flows, and clean auth UX |
| **OpenCode** | Cross-platform parity, remote execution scalability, UI polish | Global dev teams, mobile-first contributors | Emphasis on path normalization, cloud Durable Objects, and terminal fidelity |
| **Pi** | Streaming robustness, durable state, provider interoperability | Devs building custom agent stacks, CI/CD integrators | Event-driven design; fixes SSE parsing, compaction logic, and OSC protocol compliance |
| **Qwen Code** | Developer tooling maturity, enterprise embedding, pipeline stability | Java-heavy teams, internal AI platform builders | Strong focus on CI/CD health, Spring Boot starters, typed SDKs, and audit-ready logging |

> 🔍 **Key Insight:** While all tools support agent-like behavior, their differentiation lies in **where they place the burden of reliability**:  
> - *Copilot CLI* pushes it to the **policy layer** (security gates).  
> - *Pi* and *Qwen Code* focus on **infrastructure resilience** (streaming, state).  
> - *Gemini CLI* and *Claude Code* prioritize **agent intelligence and orchestration**.

---

### **5. Community Momentum & Maturity**

| Indicator | Top Performers | Notes |
|---------|----------------|-------|
| **Highest Issue Volume** | **Claude Code** (>380 open issues) | Reflects broad adoption and high user expectations |
| **Most Active PRs (Recent)** | **Qwen Code, OpenCode, Pi** (10+ merged in 24h) | Signals rapid iteration and engineering velocity |
| **Best Contributor Onboarding** | **GitHub Copilot CLI** | Devcontainer PRs show intentional focus on lowering entry barrier |
| **Most Mature Feedback Loops** | **OpenAI Codex, OpenCode** | Active discussions (Codex) and consistent PRs (OpenCode) indicate healthy community engagement |
| **Lowest Signal-to-Noise Ratio** | **Gemini CLI, Pi** | Fewer public discussions despite high issue severity — may signal centralized decision-making |

> 🏁 **Conclusion:**  
> - **Qwen Code, OpenCode, and Pi** demonstrate the highest technical momentum, with frequent, impactful PRs addressing foundational stability.  
> - **Claude Code** leads in community scale and visibility, but lags in PR activity—suggesting potential roadmap alignment delays.  
> - **OpenAI Codex** balances mature UX with ongoing refinement, ideal for production use.  
> - **Copilot CLI** excels in enterprise readiness and developer onboarding.

---

### **6. Trend Signals**

Based on community feedback across all tools, the following **industry trends** are emerging:

1. **Agent Orchestration > Simple Code Generation**  
   > Demand for `/fork`, subagent recovery, and autonomous skill routing signals that users are no longer satisfied with one-off suggestions—they want **persistent, goal-driven workflows**.

2. **Trust Through Transparency**  
   > Recurring requests for real-time context indicators, cost tracking, and session metadata reveal that **developers need observability** to trust AI outputs—especially in high-stakes environments.

3. **Security as Default, Not Add-on**  
   > Features like `PreSkillShellCommand`, `exit-2 PreToolUse`, and `MCP env value preservation` show a shift from reactive to proactive security—**hardened by design**.

4. **Enterprise-Grade Integration is Non-Negotiable**  
   > BYOK support, re-authentication flows, multiple runtime control, and organization-managed servers are no longer niche—they’re baseline expectations.

5. **UX Is Now Infrastructure**  
   > The sheer volume of issues around terminal truncation, CRLF corruption, and WebAuthn failures shows that **a seamless developer experience is now a core technical requirement**, not a nice-to-have.

> 💡 **Reference Value for Developers:**  
> When evaluating tools, prioritize those with:
> - **Active PRs on critical bugs** (e.g., session leaks, hanging agents)
> - **Clear paths to re-authentication and session cleanup**
> - **Support for configuration persistence and cross-platform consistency**
> - **Strong contributor onboarding (devcontainers, docs)**

---

### ✅ Final Recommendation

For **production-grade AI development workflows in 2026**, prioritize tools with:
- **Proven session and state management** (Copilot CLI, OpenCode, Qwen Code)
- **Active security hardening** (Pi, Copilot CLI, Qwen Code)
- **Cross-platform reliability** (OpenCode, OpenAI Codex, Gemini CLI)

Avoid tools with stagnant PRs and unresolved P1 bugs—even if they offer cutting-edge features—unless you’re prepared to manage the risk.

---  
*Report compiled from GitHub community data (2026-11-25)*  
*For real-time updates, follow: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code), [github.com/openai/codex](https://github.com/openai/codex), [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli), [github.com/github/copilot-cli](https://github.com/github/copilot-cli), [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode), [github.com/earendil-works/pi](https://github.com/earendil-works/pi), [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-11-25 | Source: github.com/anthropics/skills*

---

### **1. Top Skills Ranking**  
*(Based on community engagement and discussion volume)*

1. **`proofcore-contract-auditor`**  
   - **Functionality**: Automated static analysis of Solidity/Rust smart contracts with cryptographic audit proofs anchored to the TON Blockchain via ProofCore’s zero-storage Merkle protocol. Targets Web3 developers seeking verifiable code integrity.  
   - **Discussion Highlights**: High interest in blockchain security; praised for enabling trustless auditing. PR #1771 remains open but has strong early support.  
   - **Status**: Open (PR #1771) | [View on GitHub](https://github.com/anthropics/skills/pull/1771)

2. **`md2video-audio`**  
   - **Functionality**: Converts Markdown documents into professional MP4 videos with natural-sounding voiceovers, using Marp for slide generation and audio synthesis. Zero-cost, fully automated.  
   - **Discussion Highlights**: Seen as a game-changer for content creators and educators. Mentioned in multiple issue threads as a "must-have" for knowledge dissemination.  
   - **Status**: Open (PR #1703) | [View on GitHub](https://github.com/anthropics/skills/pull/1703)

3. **`notion-spec-to-implementation`**  
   - **Functionality**: Translates product or technical specifications in Notion into actionable implementation tasks with acceptance criteria and progress tracking. Bridges vision → execution.  
   - **Discussion Highlights**: Recognized as solving a core pain point in AI-driven development workflows. PR #1245 includes detailed use cases and integration logic.  
   - **Status**: Open (PR #1245) | [View on GitHub](https://github.com/anthropics/skills/pull/1245)

4. **`scnet-hpc`**  
   - **Functionality**: Enables SSH-based access and Slurm job management on SCNet HPC clusters, tailored to user profiles with memory, partition, and accelerator guidance.  
   - **Discussion Highlights**: Niche but high-value for academic and research users. PR #1615 highlights need for domain-specific infrastructure skills.  
   - **Status**: Open (PR #1615) | [View on GitHub](https://github.com/anthropics/skills/pull/1615)

5. **`document-typography`**  
   - **Functionality**: Enforces typographic quality in AI-generated documents by detecting and fixing orphaned words, widow paragraphs, and numbering misalignment.  
   - **Discussion Highlights**: Repeatedly cited as essential for professional output. Issue #514 was flagged as critical due to its impact on document polish.  
   - **Status**: Open (PR #514) | [View on GitHub](https://github.com/anthropics/skills/pull/514)

6. **`compact-memory` (Proposal)**  
   - **Functionality**: Introduces symbolic notation for compact agent state representation, reducing context bloat in long-running agents.  
   - **Discussion Highlights**: Featured in Issue #1329 as a forward-looking solution to context decay. Community sees it as foundational for advanced agent systems.  
   - **Status**: Proposal (Issue #1329) | [View on GitHub](https://github.com/anthropics/skills/issues/1329)

7. **`quantitative-resume-auditor`**  
   - **Functionality**: Evaluates resumes quantitatively—assessing structure, keyword density, experience metrics, and ATS compatibility.  
   - **Discussion Highlights**: Gained traction alongside `notion-spec-to-implementation` as part of a broader trend toward structured, evaluable outputs.  
   - **Status**: Open (PR #1245) | [View on GitHub](https://github.com/anthropics/skills/pull/1245)

---

### **2. Community Demand Trends**  
The community is increasingly focused on **structured, measurable, and production-ready AI workflows**, with clear demand for:

- **Workflow Automation & Integration**: Skills that bridge design → implementation (e.g., *Notion spec → code*, *Markdown → video*).  
- **Code Quality & Safety**: Tools like `proofcore-contract-auditor`, `agent-governance` (Issue #412), and `compact-memory` reflect growing concern for robustness and accountability.  
- **Documentation & Output Polish**: High demand for typographic quality (`document-typography`) and documentation clarity (`docs/claude-api` updates).  
- **Developer Infrastructure**: Skills enabling access to HPCs (`scnet-hpc`), web app testing (`webapp-testing`), and file format handling (`docx`, `xlsx`) indicate a maturing ecosystem.  
- **Security & Trust**: The top-rated Issue #492 underscores urgent demand for transparent skill provenance and namespace integrity.

---

### **3. High-Potential Pending Skills**  
These PRs are actively discussed and likely candidates for imminent merge:

- **`proofcore-contract-auditor`** (PR #1771): High-value niche skill with clear use case and active developer advocacy.  
- **`md2video-audio`** (PR #1703): Popular, low-risk feature with broad appeal across education, marketing, and dev teams.  
- **`notion-spec-to-implementation` + `quantitative-resume-auditor`** (PR #1245): Bundled proposal addressing two high-demand needs; already approved in concept.  
- **`webapp-testing` fixes** (PRs #1980, #1976, #1975): Critical stability and security patches that are small but impactful.  
- **`skill-creator` improvements** (PRs #1681, #1997, #1730): Address core usability and reliability issues in the skill creation pipeline.

---

### **4. Skills Ecosystem Insight**  
The community's most concentrated demand is for **trusted, production-grade skills that transform abstract prompts into executable, auditable, and polished outcomes**—especially in documentation, code safety, and workflow automation.

---  
*Report generated by Technical Analyst, Claude Code Ecosystem | Data sourced from official anthropics/skills repository*

---

**Claude Code Community Digest – 2026-11-25**

---

### **1. Today's Highlights**  
The latest release, **v2.1.332**, introduces experimental support for MCP server skills (visible as `server:skill` in the `/` menu) and a new `PreSkillShellCommand` hook to control inline shell execution at load time. Meanwhile, community demand is sharply focused on session management, UI clarity, and cross-platform stability—particularly around macOS TCC permissions, Windows auth persistence, and memory/session hygiene.

---

### **2. Releases**  
**v2.1.332**  
- ✅ Added support for **MCP server skills** (beta): Skills from external servers now appear as `server:skill` in the command menu.  
- 🛠 Introduced `PreSkillShellCommand` hook event: Allows plugins or security mods to reject or block inline shell commands before execution. On older versions (≤2.1.331), this behavior was controlled via a settings file.  
> [GitHub Release v2.1.332](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

---

### **3. Hot Issues**  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#38005](https://github.com/anthropics/claude-code/issues/38005) RTL Support for Hebrew & Arabic | Critical for global accessibility; currently blocks use in right-to-left languages. High engagement (50 comments, 99 👍). | 🔥 *Most upvoted issue* – urgent UX need for international users |
| [#26904](https://github.com/anthropics/claude-code/issues/26904) Add `/delete` command to delete current session | Developers want granular session cleanup without losing entire project state. Repeatedly requested. | 💬 *Top feature request* – seen as essential for workflow hygiene |
| [#90708](https://github.com/anthropics/claude-code/issues/90708) Bring back context-usage indicator in desktop footer | Users prefer real-time context window visibility over usage limits. More actionable mid-session. | 📊 *High comment count* – indicates strong user preference for transparency |
| [#79217](https://github.com/anthropics/claude-code/issues/79217) Make MEMORY.md limit configurable | Current 200-line/25KB cap restricts long-term agent memory. Devs need flexibility for complex workflows. | ⚙️ *Frequent pain point* – highlights growing agentic complexity |
| [#105621](https://github.com/anthropics/claude-code/issues/105621) Usage limits drain faster since mid-Oct 2026 | Suggests possible backend or token accounting regression with no user change. Widespread concern. | ⚠️ *Critical bug signal* – impacts cost predictability |
| [#77473](https://github.com/anthropics/claude-code/issues/77473) Built-in browser fails passkey (WebAuthn) login on macOS | Blocks GitHub and other secure logins. Major security/UX flaw on Apple devices. | 🔐 *Security-critical* – prevents adoption in enterprise environments |
| [#87891](https://github.com/anthropics/claude-code/issues/87891) Background daemon leaks 64+ processes (~7GB) | Persistent memory leak after 6 weeks. Impacts performance and stability. | 🧨 *High-risk bug* – affects long-running sessions |
| [#106708](https://github.com/anthropics/claude-code/issues/106708) MCP App tool calls fail with "IPC not available" | Breaks integration with remote tools in desktop app. Hinders automation. | 🔄 *Regression* – likely tied to recent MCP changes |
| [#94878](https://github.com/anthropics/claude-code/issues/94878) macOS TCC permissions lost on auto-update | Forces repeated permission prompts. Breaks automation and trust. | 📱 *Platform-specific pain point* – affects dev experience |
| [#111879](https://github.com/anthropics/claude-code/issues/111879) Directory-scoped session resume (`claude -c`) | Enables context-aware resumption across projects. Currently global and unpredictable. | 🗂️ *High-value UX fix* – needed for multi-project workflows |

---

### **4. Key PR Progress**  
*No pull requests updated in the last 24 hours.*  
> Note: No active PRs suggest delayed implementation of high-priority features like session deletion, memory config, or RTL support. Community may be awaiting internal roadmap alignment.

---

### **5. Hot Discussions**  
*No discussion threads provided in data source.*  
> Omitted due to absence of discussion activity.

---

### **6. Feature Request Trends**  
The most prominent trends from open issues are:  
- **Session & Project Management**: Granular session deletion (`/delete`, `claude session delete`), directory-scoped resume (`-c`), and project-level work overviews.  
- **UI/UX Transparency**: Context-usage indicators, live session status, and configurable sidebar views.  
- **Cross-Platform Reliability**: Persistent auth (especially Chrome/Windows), TCC permission handling on macOS, and WebAuthn support.  
- **Memory & Agent Control**: Configurable `MEMORY.md` size and better multi-context handling for parallel workflows (e.g., PR reviews).  
- **Security & Automation**: OAuth token expiration tracking, plugin integrity checks (e.g., `known_marketplaces.json` repair), and safe skill execution via hooks.

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Session clutter** and lack of cleanup options (deletion, purge, scope control).  
- **Unpredictable state** due to global resume behavior and missing session metadata.  
- **Persistent bugs on macOS** (TCC, WebAuthn, background process leaks).  
- **Auth instability** (Chrome restarts wiping sign-in, stale tokens).  
- **Poor error feedback** (e.g., zero-byte `known_marketplaces.json` silently breaks plugins).  
- **Lack of configuration** for core behaviors (memory size, context display, theme rendering in Remote Control).

> These indicate a growing need for **configurability, observability, and platform consistency**—especially as Claude Code evolves into a full-fledged AI development environment.

---  
*Digest compiled from GitHub data — anthropics/claude-code, 2026-11-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026-11-25**

---

### **1. Today's Highlights**  
The Codex team delivered a wave of stability and UX refinements across the CLI, TUI, and desktop app, with critical fixes for session persistence, terminal compatibility, and sandbox behavior. High-priority issues around rate limits, model capacity errors, and permission handling continue to dominate community attention, especially as users prepare for December’s usage policy changes.

---

### **2. Releases**  
No new stable releases were published in the last 24 hours. However, five alpha versions of `rust-v0.174.0` and `rust-v0.173.0` were released, indicating ongoing internal development and testing of core Rust components. These are primarily targeted at developers using the CLI and embedded runtime environments.

---

### **3. Hot Issues**  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#58530](https://github.com/openai/codex/issues/58530) | A high-profile request to preserve access to **ChatGPT High and Codex on Plus subscriptions** ahead of December 2026’s expected usage cap rollout. This is seen as critical for advanced AI developers relying on high-throughput models. | 43 comments, 68 upvotes — one of the most urgent community-driven concerns. |
| [#54841](https://github.com/openai/codex/issues/54841) | Work mode blocks message submission when **BYOK (Bring Your Own Key)** and local tools are enabled. Breaks workflow continuity for enterprise-grade security setups. | 43 comments, 28 upvotes — highlights friction between security features and usability. |
| [#15723](https://github.com/openai/codex/issues/15723) | Subagents fail to wake calling agents upon completion, causing silent task stalls. Critical for multi-agent workflows. | 33 comments, 15 upvotes — long-standing issue impacting complex automation pipelines. |
| [#62975](https://github.com/openai/codex/issues/62975) | Permissions selector disappears after first message; **Work home forces Cloud/TPP**, disabling Local execution. Major UX regression post-November update. | 28 comments, 10 upvotes — directly impacts developer control over execution environment. |
| [#62943](https://github.com/openai/codex/issues/62943) | New conversations lose **permission and execution-location selectors** after Nov 21 update. Confuses users and breaks consistency. | 27 comments, 15 upvotes — signals a broader regression in session state management. |
| [#62912](https://github.com/openai/codex/issues/62912) | New chats no longer show execution location choice — user cannot select between local or cloud. Undermines trust in control flow. | 13 comments, 3 upvotes — reinforces concern about lost configurability. |
| [#63577](https://github.com/openai/codex/issues/63577) | Account-specific “Selected model is at capacity” error despite other accounts on same network working. Suggests potential misattribution in load balancing. | 6 comments, 2 upvotes — raises concerns about fairness and transparency in model availability. |
| [#63822](https://github.com/openai/codex/issues/63822) | TUI’s `FenceTracker` closes plain code fences when a line starts with `> ````, breaking Markdown rendering. Affects documentation workflows. | 5 comments, 0 upvotes — niche but impactful for technical writers using fenced code blocks. |
| [#63819](https://github.com/openai/codex/issues/63819) | Subagent entries in TUI no longer open details — broken navigation in CLI interface. Hinders debugging. | 4 comments, 0 upvotes — indicates degradation in interactive tooling. |
| [#63779](https://github.com/openai/codex/issues/63779) | Desktop app intermittently stalls during reasoning, with reconnect delays and "model at capacity" errors. Impacts productivity. | 2 comments, 0 upvotes — symptomatic of deeper infra or connection instability. |

---

### **4. Key PR Progress**  

| PR | Summary | Impact |
|----|--------|--------|
| [#63821](https://github.com/openai/codex/pull/63821) | Enables fixed launch directories for shared MCP REPL servers by default. Improves reproducibility in collaborative environments. | Enhances reliability in multi-user and CI/CD settings. |
| [#63811](https://github.com/openai/codex/pull/63811) | Updates bundled `ripgrep` to version 16.0.0 — faster search, better Unicode support. | Performance and correctness boost for codebase scanning. |
| [#63810](https://github.com/openai/codex/pull/63810) | Uses ChatGPT account preferences for Codex voice chat — unifies voice settings across platforms. | Better consistency for voice-enabled workflows. |
| [#63809](https://github.com/openai/codex/pull/63809) | Preserves saved Daybreak choice across live goal continuations — prevents loss of context in autonomous tasks. | Critical for long-running, goal-driven agent sessions. |
| [#63808](https://github.com/openai/codex/pull/63808) | Fixes API workload identity authentication at startup and refresh — resolves credential conflicts. | Prevents silent failures in secure deployment scenarios. |
| [#63807](https://github.com/openai/codex/pull/63807) | Probes `/models` route automatically for custom HTTPS gateways — enables seamless discovery of private model catalogs. | Simplifies integration with internal model providers. |
| [#63806](https://github.com/openai/codex/pull/63806) | Hardens SSH host checks for plugin marketplaces — prevents URL ambiguity exploits. | Security hardening for plugin ecosystem. |
| [#63802](https://github.com/openai/codex/pull/63802) | Centralizes terminal capability checks in TUI — reduces redundancy and improves detection accuracy. | Foundation for consistent terminal behavior across environments. |
| [#63797](https://github.com/openai/codex/pull/63797) | Centralizes clipboard decisions in terminal capabilities — avoids inconsistent paste behavior. | Smoother copy-paste experience in CLI workflows. |
| [#63788](https://github.com/openai/codex/pull/63788) | Collapses turn details by default in full-screen transcript — reduces visual noise in long conversations. | Improves readability in complex, multi-turn sessions. |

---

### **5. Hot Discussions**  

#### **Ideas**
- [#12567](https://github.com/openai/codex/discussions/12567): *Memories in Codex* — Users want Codex to cite past threads, with 43 comments debating how much memory should be enabled (1–5 scale). Strong interest in persistent, reviewable knowledge.
- [#27941](https://github.com/openai/codex/discussions/27941): *Support multiple remote Codex machines/runtimes* — Request for unified client control over distributed Codex instances. Relevant for DevOps and distributed teams.

#### **Show & Tell**
- [#63534](https://github.com/openai/codex/discussions/63534): *Memlayer v0.3.1* — Open-source project that gives Codex **project memory you can review and revise**. Allows commands like: “From now on, put test command first.”
- [#63816](https://github.com/openai/codex/discussions/63816): *Docsworth* — Team-owned docs with owner and review date on every page. Codex can cite them with provenance awareness.
- [#63634](https://github.com/openai/codex/discussions/63634): *StoryDesk* — Local Markdown writing agent with author-approved memory. Designed for novelists using Codex for drafting.
- [#63536](https://github.com/openai/codex/discussions/63536): *indiebiz-evidence 0.9.1* — Cross-checks data from exports via SQLite + MCP tools. Ensures factual consistency.
- [#63629](https://github.com/openai/codex/discussions/63629): *CybeDefend* — AGPL-3.0 security audit skill that proves each flaw with an exploit test. Integrates with Codex via `npx skills add`.
- [#63681](https://github.com/openai/codex/discussions/63681): *Typo in `codex mcp get`* — Example of inspecting configuration without triggering model sessions. Useful for safe research-tool validation.

---

### **6. Feature Request Trends**  
- **Persistent Context & Memory**: Users demand **reviewable, auditable memories** across sessions (e.g., Memlayer, StoryDesk).
- **Project-First Navigation**: Longtime frustration — users want back **project-centric workflows** instead of conversation-based UI (see #62449).
- **Control Over Execution Environment**: Consistent demand for **local execution options**, **execution location selection**, and **permission persistence**.
- **Multi-Instance Support**: Desire to manage **multiple remote Codex runtimes** from a single client.
- **Transparency & Debugging**: Need for clearer feedback on **rate limits**, **model availability**, and **session states**.

---

### **7. Developer Pain Points**  
- **Session State Loss**: Frequent regressions where **permissions, execution location, and settings reset** in new conversations.
- **Unpredictable Rate Limits**: Users report **sudden quota drains** (e.g., GPT-6.2 Astra), even under similar workloads (#63138).
- **Broken UX in Work Mode**: Multiple reports of **disabled Send buttons**, **missing selectors**, and **failed approvals**.
- **Subagent Lifecycle Issues**: Persistent orphaned subagents, missing status updates, and failure to resume correctly.
- **Terminal Compatibility Fragility**: Inconsistent behavior across terminals (TUI), especially with paste handling and image rendering.
- **Security vs. Usability Trade-offs**: BYOK and local tools often break due to permission misconfigurations or hidden constraints.

---

*Digest compiled from GitHub data (openai/codex) – November 25, 2026.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI Community Digest — 2026-11-25**

---

### **1. Today's Highlights**  
The Gemini CLI community continues to focus on stability and agent reliability, with critical fixes for hanging agents and SSH configuration issues now in review. A major new feature—`/fork` for non-destructive conversation branching—is being introduced to enhance workflow flexibility. Meanwhile, ongoing efforts to improve AST-aware codebase navigation and secure shell execution are shaping the next phase of AI agent intelligence.

---

### **2. Releases**  
*No new releases in the past 24 hours.*

---

### **3. Hot Issues**  

| Issue # | Title | Why It Matters | Community Reaction |
|--------|-------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Misleading success state hides actual failure; undermines trust in agent progress tracking. | 🔥 14 comments, 2 👍 – P1 priority, indicates core logic flaw |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Blocks user workflows entirely; severe usability impact. Confirmed reproducible under specific conditions. | 🔥 8 comments, 8 👍 – High visibility; P1 severity |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills/sub-agents autonomously | Contradicts design intent: model fails to self-route to specialized tools despite availability. | 🔥 7 comments, 0 👍 – Anecdotal but widely felt; signals weak agent orchestration |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads/search/mapping | Could reduce context bloat and turn count by enabling precise code boundaries. Foundational for future agent efficiency. | 🔥 7 comments, 1 👍 – Strategic investigation into architectural shift |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides | Configuration drift leads to inconsistent behavior across environments. Security and UX risk. | 🔥 5 comments, 0 👍 – Critical for reproducibility and policy enforcement |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | Platform-specific regression limits adoption on Linux desktops. Hinders developer inclusivity. | 🔥 4 comments, 1 👍 – Active bug affecting real-world usage |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model creates tmp scripts in random directories | Pollutes workspace, complicates cleanup, and risks accidental commits. Poor sandbox hygiene. | 🔥 3 comments, 0 👍 – High friction for clean development |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | Prevents dangerous actions like `git reset --force`. Essential for safe autonomous execution. | 🔥 3 comments, 1 👍 – Strong consensus on need for guardrails |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done output hook causes crash | Breaks post-execution summary flow; disrupts user feedback loop. | 🔥 3 comments, 0 👍 – P1 bug impacting core UX |
| [#30328](https://github.com/google-gemini/gemini-cli/issues/30328) | `core.sshCommand=""` causes fatal: unable to fork | Direct Git failure due to misconfigured env vars. Blocks all SSH-based operations. | 🔥 2 comments, 0 👍 – Urgent fix; affects every git-integrated workflow |

---

### **4. Key PR Progress**  

| PR # | Title | Summary | Impact |
|------|-------|---------|--------|
| [#30464](https://github.com/google-gemini/gemini-cli/pull/30464) | Add `/fork` command and rewind fork option | Enables non-destructive branching of conversations via `fork` and shared `ChatRecordingService.forkAsync()`. | 🚀 Major UX upgrade for iterative development |
| [#30454](https://github.com/google-gemini/gemini-cli/pull/30454) | Enforce origin consistency in MCP OAuth flow | Hardens security by validating issuer and endpoint origins per RFC 8414. | 🔐 Critical for identity and auth integrity |
| [#30451](https://github.com/google-gemini/gemini-cli/pull/30451) | Harden shell wrapper inspection for policy checks | Ensures command substitutions and denied commands inside wrappers are detected consistently. | 🔐 Improves safety in complex shell interactions |
| [#30456](https://github.com/google-gemini/gemini-cli/pull/30456) | Restrict SA impersonation token recipients | Mitigates exfiltration risk by enforcing host allowlist and required scopes. | 🔐 High-severity security fix |
| [#30415](https://github.com/google-gemini/gemini-cli/pull/30415) | Add time limit to web search & stop retries on abort | Fixes indefinite hang in `google_web_search` tool when server stalls. | ⏱️ Resolves critical hang issue (reported in #29594) |
| [#30468](https://github.com/google-gemini/gemini-cli/pull/30468) | Fix `read_many_files` to respect binary assets | Restores support for reading PDFs, images, audio files from included directories. | 📂 Fixes regression from #30211 |
| [#30335](https://github.com/google-gemini/gemini-cli/pull/30335) | Stop overriding `core.sshCommand` with empty string | Fixes `fatal: unable to fork` error caused by empty SSH config. | 🛠️ Critical fix for Git integration |
| [#30331](https://github.com/google-gemini/gemini-cli/pull/30331) | Preserve MCP env values with `=` and empty values | Fixes corruption of values like `TOKEN=abc=def==` or `EMPTY=` during `gemini mcp add`. | 💼 Ensures correct environment propagation |
| [#30332](https://github.com/google-gemini/gemini-cli/pull/30332) | Support comma-separated MCP tool filters | Allows `--include-tools=tool1,tool2` syntax for cleaner CLI input. | ✅ Smoother admin experience |
| [#30467](https://github.com/google-gemini/gemini-cli/pull/30467) | Preserve Markdown code fence boundaries | Fixes rendering issues around fenced code blocks and tables. | 🖋️ Improves readability and terminal output fidelity |

---

### **5. Hot Discussions**  
*No discussion threads provided in data source.*

---

### **6. Feature Request Trends**  
The community is converging on several key directions:  
- **Agent Intelligence & Orchestration**: Demand for better sub-agent discovery, skill utilization, and trajectory visibility (e.g., `/chat share` for subagent logs).  
- **Security & Safety**: Persistent calls for defensive behaviors—preventing destructive commands (`git reset`, `--force`) and enforcing policy checks in shell execution.  
- **Codebase Navigation**: Growing interest in **AST-aware tools** (e.g., `tilth`, `glyph`) to enable precise, low-turn code exploration and mapping.  
- **Workflow Flexibility**: New features like `/fork` and persistent task tracking reflect a desire for resilient, non-linear development workflows.  
- **Sandboxing & Isolation**: Push for Zero-Dependency OS Sandboxing and Bash affinity to leverage model-native capabilities safely.

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Hanging agents** (especially generalist and browser agents), blocking productivity.  
- **Unreliable configuration handling**, such as `settings.json` being ignored or `core.sshCommand` being incorrectly set.  
- **Poor workspace hygiene**: Model generates temporary scripts in arbitrary locations, making cleanup difficult.  
- **Lack of autonomy**: Agents fail to use available skills/sub-agents even when relevant.  
- **Inconsistent error reporting**: Bugs lack subagent context (e.g., missing logs in `/bug` reports).  
- **Tool overload**: System crashes at >400 tools, indicating scalability gaps in agent tool management.

---

*Generated: 2026-11-25 | Source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# **GitHub Copilot CLI Community Digest – 2026-11-25**

---

### **1. Today's Highlights**  
The latest release, `v1.0.116`, introduces critical improvements to plugin and MCP server safety—warning users when both a plugin and standalone MCP server connect to the same endpoint. New ACP enhancements allow dynamic context size selection in compatible editors without altering defaults, while PowerShell parameter handling now respects allow rules correctly. These updates strengthen security, usability, and developer control across environments.

---

### **2. Releases**  
**`v1.0.116` series (2026-11-23–2026-11-25)**  
- ✅ **Added**:  
  - Build-time JSON Schema for extension manifests (improves tooling validation).  
  - "Jump to latest" button in fullscreen timeline for real-time output tracking.  
  - Context size override in ACP-compatible editors (without changing saved defaults).  
  - Environment variable injection for all Copilot-started processes.  
- 🔧 **Fixed**:  
  - PowerShell parameters with digits (`-n1`, `-ExpectedSha256`) now honor allow rules instead of requiring full-script approval.  
  - Folder trust prompt now closes immediately on "Yes" selection.  
  - Prevents idle session misreporting after reconnecting to host.  
  - Resolves Unix foreground process cancellation issues.  
- 🛡️ **Improved**:  
  - Suppresses slow-connection/sign-in warnings for organization-managed MCP servers (except Connectors), focusing attention only where needed.  
  - Delays browser open until `/mcp auth <name>` is run, improving authentication flow clarity.

> 🔗 [GitHub Copilot CLI v1.0.116 Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.116)

---

### **3. Hot Issues**  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#1148](https://github.com/github/copilot-cli/issues/1148) CRLF line ending corruption on Windows | Breaks Git workflows; silently alters file format, causing merge conflicts and CI failures. | 👍 9 | Comments: 8 |
| [#2165](https://github.com/github/copilot-cli/issues/2165) Ubuntu keychain support broken | Blocks authentication on Linux; docs are outdated, and `secret-tool` dependency isn’t clearly communicated. | 👍 23 | Comments: 7 |
| [#5323](https://github.com/github/copilot-cli/issues/5323) Disable agent checkpoint refs (`refs/agents/*`) | Refs clutter git history and can confuse version tools. Users want opt-out control. | 👍 5 | Comments: 7 |
| [#5559](https://github.com/github/copilot-cli/issues/5559) TLS 1.3 broken on macOS since v1.0.93-0 | Regressed network connectivity for enterprise users relying on secure MCP endpoints. | 👍 0 | Comments: 2 |
| [#5175](https://github.com/github/copilot-cli/issues/5175) No way to re-authenticate expired MCP sessions | App shows green status but offers no path to re-sign in—critical UX gap for enterprise integrations. | 👍 1 | Comments: 2 |
| [#5568](https://github.com/github/copilot-cli/issues/5568) MCP registry requests lack User-Agent header | AWS WAF blocks requests due to missing `User-Agent`, breaking registry lookups in protected infrastructures. | 👍 0 | Comments: 0 |
| [#5564](https://github.com/github/copilot-cli/issues/5564) Files denied in sandbox still copied to COPILOT_HOME | Security risk: sensitive files are read and persisted despite being blocked by policy. | 👍 0 | Comments: 0 |
| [#5565](https://github.com/github/copilot-cli/issues/5565) `create_session` hangs indefinitely on child host failure | Causes workflow deadlocks with no timeout or error feedback—high impact on automation pipelines. | 👍 0 | Comments: 0 |
| [#5563](https://github.com/github/copilot-cli/issues/5563) Terminal truncates Copilot output relentlessly | Makes long responses unusable; screen rendering issue limits practical use of AI assistance. | 👍 0 | Comments: 0 |
| [#5518](https://github.com/github/copilot-cli/issues/5518) Gemini 4 Neon/Hydrogen reports `xhigh` but behaves as `medium` | Misleading usage metrics; impacts cost estimation and task prioritization in production. | 👍 0 | Comments: 1 |

---

### **4. Key PR Progress**  
*(Note: Only two PRs updated in last 24h — both closed)*

| PR | Summary | Impact |
|----|--------|--------|
| [#4316](https://github.com/github/copilot-cli/pull/4316) Create `devcontainer.json` | Adds initial dev container setup for local development. | Enables consistent, reproducible contributor environments. |
| [#4428](https://github.com/github/copilot-cli/pull/4428) Add initial devcontainer configuration | Finalizes devcontainer setup with base image and tooling. | Reduces onboarding friction for new contributors. |

> ✅ Both PRs merged — excellent progress toward improved contributor experience.

---

### **5. Hot Discussions**  
*No discussion data provided in source.*  
👉 **Omitted** — no active discussions found in the dataset.

---

### **6. Feature Request Trends**  
Top emerging feature directions from community feedback:

- **Enhanced Configuration Flexibility**:  
  - `contextTier` exposure in ACP sessions (Issue #4275).  
  - Default agent setting (Issue #5383).  
  - Dynamic context size per-session (v1.0.116 adds this for ACP).

- **Security & Privacy Controls**:  
  - Opt-out for `refs/agents/*` checkpoint refs (Issue #5323).  
  - Persistent URL permission storage (Issue #3253).  
  - Better sandboxing (Issue #5564: prevent reading denied files).

- **Enterprise & Integration Support**:  
  - Multiple BYOK providers (Issue #4976).  
  - Full re-authentication flow for expired MCP sessions (Issue #5175).  
  - Proper `User-Agent` in MCP registry requests (Issue #5568).

- **UX & Rendering Improvements**:  
  - Markdown rendering in `ask_user` prompts (Issue #5084).  
  - Fix terminal text truncation (Issue #5563).  
  - Expand reasoning steps by default for Gemini models (Issue #5532).

---

### **7. Developer Pain Points**  
Recurring frustrations highlighted by developers:

- **Authentication & Session Management**:  
  - Inability to re-authenticate expired MCP sessions via app UI (Issue #5175).  
  - Sessions hang indefinitely with no timeout or error (Issue #5565).  
  - Keychain issues on Ubuntu block access entirely (Issue #2165).

- **File System & Security Bugs**:  
  - Silent CRLF conversion corrupts Git files (Issue #1148).  
  - Denied files are still read and stored locally (Issue #5564).  
  - Sandbox policies not respected during file access.

- **Rendering & Output Issues**:  
  - Terminal output truncated and unreadable (Issue #5563).  
  - Markdown formatting lost in structured prompts (Issue #5084).  
  - Thought blocks collapsed by default on Gemini models (Issue #5532).

- **Network & Enterprise Compatibility**:  
  - TLS 1.3 regression on macOS (Issue #5559).  
  - Missing `User-Agent` breaks AWS WAF protections (Issue #5568).  
  - Loopback callback rejection by Entra ID (Issue #5040).

---

*📌 *Digest compiled from GitHub Copilot CLI repository activity (2026-11-25).*  
*For real-time updates, follow the project: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-11-25

---

### **1. Today's Highlights**  
The OpenCode community continues to focus on stability, performance, and usability improvements ahead of the v2.4 release cycle. Key developments include critical bug fixes for session management, model routing, and cross-platform compatibility—particularly on Windows and macOS. A surge in activity around UI/UX enhancements and accessibility underscores growing maturity in the desktop and web interfaces.

---

### **2. Releases**  
None reported in the last 24 hours.

---

### **3. Hot Issues**

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#64073](https://github.com/anomalyco/opencode/issues/64073) | Restoring foreground subagent execution is essential for agent orchestration workflows. Without it, subagents cannot execute reliably in active contexts. | 27 comments, 12 upvotes — high demand from users building complex agent chains. |
| [#28030](https://github.com/anomalyco/opencode/issues/28030) | Users can’t delete projects in Desktop — a long-standing UX blocker. Now closed after 6 months, indicating team prioritization. | 20 comments, 21 upvotes — one of the most requested features; closure signals progress. |
| [#66067](https://github.com/anomalyco/opencode/issues/66067) | `deepseek-v4.1-flash` requests are being routed across multiple backends despite stable `x-opencode-session`, causing redundant billing and cache misses. | 19 comments — urgent concern for cost control and inference efficiency. |
| [#48411](https://github.com/anomalyco/opencode/issues/48411) | Better sandboxing and execution permissions needed to prevent unsafe code execution. Critical for secure development environments. | 15 comments — reflects rising security awareness among advanced users. |
| [#66166](https://github.com/anomalyco/opencode/issues/66166) | Custom providers fail to register on service boot due to missing config reload logic. Breaks workflow for users relying on private models. | 6 comments — affects power users and enterprise adopters. |
| [#66087](https://github.com/anomalyco/opencode/issues/66087) | Cost display hardcoded to USD — no option for CNY or other currencies. A barrier for global teams. | 3 comments — small but impactful localization need. |
| [#66053](https://github.com/anomalyco/opencode/issues/66053) | Shell permission checks bypassed when directory commands use I/O redirection (`cd . > file`). Security risk in script execution. | 3 comments — highlights latent vulnerability in shell handling. |
| [#66192](https://github.com/anomalyco/opencode/issues/66192) | Path comparisons fail on Windows due to `/` vs `\` mismatch in pre-push hooks. Hinders CI/CD reliability. | 2 comments — platform-specific regression affecting DevOps pipelines. |
| [#66172](https://github.com/anomalyco/opencode/issues/66172) | Browser pane tabs freeze on Linux/Wayland even when visible — `requestAnimationFrame` stops firing. | 2 comments — UX issue impacting productivity on modern desktops. |
| [#66268](https://github.com/anomalyco/opencode/issues/66268) | Session move fails on Windows with `~\repo` due to unexpanded tilde. Prevents home-relative project organization. | 1 comment — shows ongoing pain point in cross-platform path handling. |

---

### **4. Key PR Progress**

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#66270](https://github.com/anomalyco/opencode/pull/66270) | Adds OpenCode TTS plugin to ecosystem docs — improves discoverability of community tools. | ✅ Merged |
| [#66240](https://github.com/anomalyco/opencode/pull/66240) | Wires Cloudflare Durable Object `alarm()` hibernation and WebSocket-based `WorkerClient` — foundational for remote execution scalability. | ✅ Merged |
| [#66263](https://github.com/anomalyco/opencode/pull/66263) | Fixes exact edits failing after formatting by syncing post-format state — resolves #66262. | ✅ Merged |
| [#66269](https://github.com/anomalyco/opencode/pull/66269) | Expands `~\` paths on Windows during session moves — fixes #66268. | ✅ Merged |
| [#66265](https://github.com/anomalyco/opencode/pull/66265) | Fills gaps in Consolidated sidebar navigation (pins, Home picker). Improves UI consistency. | ✅ Merged |
| [#66215](https://github.com/anomalyco/opencode/pull/66215) | Ensures subagents move with their parent session — prevents orphaned agents. | ✅ Merged |
| [#66254](https://github.com/anomalyco/opencode/pull/66254) | Traces background compaction waits — helps debug long delays in session cleanup. | ✅ Merged |
| [#66251](https://github.com/anomalyco/opencode/pull/66251) | Skips redundant schema work in Code Mode catalogs — improves startup speed. | ✅ Merged |
| [#66246](https://github.com/anomalyco/opencode/pull/66246) | Reduces file diff overhead by skipping empty sides — performance win in core operations. | ✅ Merged |
| [#66250](https://github.com/anomalyco/opencode/pull/66250) | Eliminates repeated work in Code Mode runs — further optimizes execution efficiency. | ✅ Merged |

---

### **5. Hot Discussions**  
*No discussion threads provided in data source.*

---

### **6. Feature Request Trends**

Based on top issues and PRs, the following feature directions are emerging as dominant:

- **Cross-platform parity**: Consistent behavior across Windows/macOS/Linux, especially in path handling (`~\`), shell commands, and GUI rendering.
- **Enhanced UI/UX controls**: Persistent defaults (e.g., model selection), better session management (deletion, search limits), and improved keyboard shortcuts.
- **Localization & monetization**: Currency support (CNY), cost transparency, and billing visibility.
- **Security & isolation**: Granular execution permissions, sandboxing, and safe handling of shell commands and file operations.
- **Accessibility**: Screen reader support for streaming content and real-time updates — critical for inclusive design.
- **Remote & distributed workflows**: Support for remote-only mode, mobile push notifications, and robust device pairing.

---

### **7. Developer Pain Points**

Recurring frustrations highlighted by developers include:

- **Session management limitations**: Silent truncation at 64 sessions per project (#64127), inability to delete projects (#28030), and session reset after updates (#66124).
- **Model routing instability**: Inconsistent backend assignment leading to redundant billing (#66067).
- **Platform-specific bugs**: Persistent issues on Windows (path expansion, Ctrl+F not working) and Linux/Wayland (browser tab freezing).
- **Inconsistent state handling**: Tools failing after formatter changes due to stale text references (#66262).
- **Missing configuration persistence**: Custom providers not reloading after service restart (#66166).
- **Poor error feedback**: Generic "request failed" messages on Safari when pasting images (#66260).

These points reflect growing complexity in OpenCode’s architecture and emphasize the need for more resilient, predictable, and user-friendly developer tooling.

---  
*Digest generated: 2026-11-25 | Source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# **Pi Community Digest – 2026-11-25**

---

### **1. Today’s Highlights**  
The Pi ecosystem continues to mature with critical fixes addressing stability in streaming, model compatibility, and stateful session handling. Notably, PRs have resolved long-standing issues with GitHub Copilot reasoning replay, OpenAI-compatible proxy misbehavior, and improper handling of large SSE events. A surge in community engagement around compaction behavior, token budgeting, and terminal integration highlights growing demand for robustness in long-running agent workflows.

---

### **2. Releases**  
*No new releases in the last 24 hours.*

---

### **3. Hot Issues**  

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#10956](https://github.com/earendil-works/pi/issues/10956) | `cacheWarming: "idle"` fails silently after `turn_end` handlers — critical for session efficiency | 🔥 17 comments, 5 👍 — signals a core flow breakdown affecting performance tuning |
| [#12242](https://github.com/earendil-works/pi/issues/12242) | Compaction summary grows uncontrollably (17k → 164k chars), causing extreme latency | 🔥 6 comments — raises concerns about memory safety and scalability in long sessions |
| [#12407](https://github.com/earendil-works/pi/issues/12407) | `gemini-4-neon` stops mid-stream due to OpenRouter normalization of `"MALFORMED_RESPONSE"` | 🔥 4 comments — exposes risk in error propagation across providers |
| [#12443](https://github.com/earendil-works/pi/issues/12443) | `xhigh` thinking level unsupported for `gemini-4-neon`, despite Google API support | 🔥 3 comments — indicates provider mismatch in model configuration |
| [#12482](https://github.com/earendil-works/pi/issues/12482) | Recheck output budget post-compaction to avoid over-token requests | 🔥 3 comments — essential for reliable auto-retry logic |
| [#12510](https://github.com/earendil-works/pi/issues/12510) | Codemode parse errors lack source context, forcing models to retry blind | 🔥 1 comment — impacts debugging accuracy in code generation |
| [#12509](https://github.com/earendil-works/pi/issues/12509) | Kimi’s coding endpoint splits function calls, leading to duplicated `call_id` on replay | 🔥 1 comment — breaks idempotency in tool execution |
| [#12439](https://github.com/earendil-works/pi/issues/12439) | Startup dialogs fail to emit OSC 7501 `blocked` status, breaking unattended session flows | 🔥 3 comments — affects automation and CI/CD integrations |
| [#12474](https://github.com/earendil-works/pi/issues/12474) | `openai-responses` provider doesn’t send `previous_response_id`, breaking session correlation | 🔥 2 comments — undermines stateful gateway design |
| [#12476](https://github.com/earendil-works/pi/issues/12476) | Turn-end handlers can't request native compaction without aborting run | 🔥 2 comments — desired for extensions like `pi-obsidian-memory` |

---

### **4. Key PR Progress**  

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#12505](https://github.com/earendil-works/pi/pull/12505) | Fixes replay of `reasoning_opaque` in `openai-completions` — preserves full Copilot context | ✅ Merged |
| [#12495](https://github.com/earendil-works/pi/pull/12495) | Adds `gpt-6-luna-decisions` and filters classifier models by account availability | ✅ Merged |
| [#12494](https://github.com/earendil-works/pi/pull/12494) | Fixes Git Bash detection on Windows outside `ProgramFiles` | ✅ Merged |
| [#12490](https://github.com/earendil-works/pi/pull/12490) | Reports startup dialogs as `permission` requests per Program Status Protocol | ✅ Merged |
| [#12487](https://github.com/earendil-works/pi/pull/12487) | Ensures OSC 7501 `blocked` status is emitted during startup dialogs | ✅ Merged |
| [#12451](https://github.com/earendil-works/pi/pull/12451) | Fixes linear-time streaming for large lines/events — prevents memory bloat | ✅ Merged |
| [#12489](https://github.com/earendil-works/pi/pull/12489) | Removes invalid `thinking: disabled` support for Claude 5.5 models | ✅ Merged |
| [#12470](https://github.com/earendil-works/pi/pull/12470) | Handles `native_finish_reason` from OpenRouter to preserve upstream error semantics | ✅ Merged |
| [#12475](https://github.com/earendil-works/pi/pull/12475) | Limits OSC 8 hyperlinks to ≤8192 chars to prevent V8 heap exhaustion | ✅ Merged |
| [#12473](https://github.com/earendil-works/pi/pull/12473) | Skips synthetic right-click paste in Tabby on Windows to avoid double-paste | ✅ Merged |

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**  
- **Model & Provider Flexibility**: Strong interest in adding EXAONE 2.5 as a built-in provider and better support for OpenAI-compatible backends (e.g., Kimi, Qwen).  
- **Stateful Session Integrity**: Recurring demand for proper `previous_response_id` tracking and `OSC 7501` reporting for all interactive flows.  
- **Streaming Robustness**: High priority on fixing SSE/event parsing, especially for large payloads and malformed chunking (e.g., Kimi, OpenRouter).  
- **Extension Control**: Developers want finer control over compaction (`turn_end` handlers), input abortion, and durable storage.  
- **Durable Storage Expansion**: Requests for Postgres backend support for Chord/Durable, enabling enterprise-grade persistence.

---

### **7. Developer Pain Points**  
- **Compaction & Memory Bloat**: Uncontrolled growth of compaction summaries (Issue #12242) and memory leaks during long sessions remain top concerns.  
- **Streaming Reliability**: Multiple models (Gemini, Kimi) exhibit mid-stream halts or broken event boundaries, requiring manual workarounds.  
- **Provider Misalignment**: Inconsistent behavior between upstream APIs and Pi’s model catalog (e.g., `xhigh` not supported despite API docs).  
- **Error Handling Gaps**: Missing HTTP error reporting to `onResponse` and `after_provider_response` (Issue #12376) hampers diagnostics.  
- **Platform-Specific Bugs**: Persistent Windows issues with Git detection, mouse escape sequences (Issue #12133), and terminal echo corruption.  
- **Lack of Context in Errors**: Codemode parse failures provide only line/column — no source snippet (Issue #12510), making debugging hard.  

---

*Stay tuned for next week’s digest. Follow [earendil-works/pi](https://github.com/earendil-works/pi) for real-time updates.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-11-25

---

### **Today's Highlights**  
The Qwen Code project continues strong momentum in stabilizing its Managed Agent infrastructure, with multiple CI failures across `Managed Agent gate` and `E2E Tests` highlighting ongoing challenges in Java SDK reliability and test coverage. Key progress includes the introduction of a new `reasoning_effort` persistence in the CLI and improvements to session management, particularly around archival and live transcript integrity.

---

### **Releases**  
None reported in the last 24 hours.

---

### **Hot Issues**  

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Persistent Main CI failure: "no test identified" — critical for release stability | 🔥 **546 comments** — one of the most active issues; signals systemic CI pipeline instability affecting all PRs. |
| [#18252](https://github.com/QwenLM/qwen-code/issues/18252) | E2E test failure: cron tools not registered by default — breaks automation workflows | ⚠️ High impact on workflow reliability; marked as "provisional" but still actively triaged. |
| [#17045](https://github.com/QwenLM/qwen-code/issues/17045) | Tracking landing of the 1.0 Preview loop kernel — foundational shift to event-driven agent architecture | 🎯 P1 priority; central to v1.0 roadmap; developers are watching closely for incremental rollouts. |
| [#18253](https://github.com/QwenLM/qwen-code/issues/18253) | ClassSizeRatchetTest failure — Java SDK class size exceeds limits | 🔧 Indicates growing codebase complexity; needs attention before feature merge. |
| [#18288](https://github.com/QwenLM/qwen-code/issues/18288) | New "no test identified" CI failure — recurring pattern | 🔁 Part of a cluster of CI flakes; suggests need for deeper pipeline diagnostics. |
| [#18298](https://github.com/QwenLM/qwen-code/issues/18298) | Web Shell renders unset boolean settings as OFF — hides true default behavior | 💡 UX concern: misleads users about experimental feature state; affects configuration clarity. |
| [#17559](https://github.com/QwenLM/qwen-code/issues/17559) | User prompt sent mid-turn not recorded in transcript — data loss risk | ⚠️ Critical for debugging and audit trails; impacts user trust in session history. |
| [#18258](https://github.com/QwenLM/qwen-code/issues/18258) | HostedMonitorRunFaultGatesIT failure — MySQL process fault handling issue | 🔍 Points to edge-case resilience gaps in production-grade deployments. |
| [#17668](https://github.com/QwenLM/qwen-code/issues/17668) | `read_file` reports invalid line range at EOF — misleading output | 🐞 Low-level bug but affects tool usability; must be fixed for robust file operations. |
| [#18313](https://github.com/QwenLM/qwen-code/issues/18313) | Web Shell lacks native reasoning selection during standalone session creation | 🛠️ Blocks customization; prevents users from setting preferences early in session flow. |

---

### **Key PR Progress**

| PR | Summary & Impact | GitHub Link |
|----|------------------|-------------|
| [#18297](https://github.com/QwenLM/qwen-code/pull/18297) | Fixes reproducible main branch CI failures — stabilizes core pipelines | [PR #18297](https://github.com/QwenLM/qwen-code/pull/18297) |
| [#18303](https://github.com/QwenLM/qwen-code/pull/18303) | Implements Shell approval parking on version-0 public sessions — enhances session lifecycle control | [PR #18303](https://github.com/QwenLM/qwen-code/pull/18303) |
| [#17902](https://github.com/QwenLM/qwen-code/pull/17902) | Corrects token accounting across dashboard and `/stats` — improves usage transparency | [PR #17902](https://github.com/QwenLM/qwen-code/pull/17902) |
| [#18316](https://github.com/QwenLM/qwen-code/pull/18316) | Persists reasoning effort and context window per model in CLI — enhances user experience | [PR #18316](https://github.com/QwenLM/qwen-code/pull/18316) |
| [#18315](https://github.com/QwenLM/qwen-code/pull/18315) | Pins clock in scheduled-tasks tests — eliminates flakiness | [PR #18315](https://github.com/QwenLM/qwen-code/pull/18315) |
| [#18319](https://github.com/QwenLM/qwen-code/pull/18319) | Passes reasoning selection at standalone session creation — fixes Web Shell UX gap | [PR #18319](https://github.com/QwenLM/qwen-code/pull/18319) |
| [#18324](https://github.com/QwenLM/qwen-code/pull/18324) | Classifies MCP SDK timeout as execution timeout — improves error semantics | [PR #18324](https://github.com/QwenLM/qwen-code/pull/18324) |
| [#18267](https://github.com/QwenLM/qwen-code/pull/18267) | Refactors closed JSON fields into explicit types — improves code maintainability | [PR #18267](https://github.com/QwenLM/qwen-code/pull/18267) |
| [#18322](https://github.com/QwenLM/qwen-code/pull/18322) | Ensures exit-2 PreToolUse blocks override other hooks — strengthens security logic | [PR #18322](https://github.com/QwenLM/qwen-code/pull/18322) |
| [#18317](https://github.com/QwenLM/qwen-code/pull/18317) | Adds explanation for repetitive tool call rejection — improves user guidance | [PR #18317](https://github.com/QwenLM/qwen-code/pull/18317) |

---

### **Hot Discussions**  
*No discussion threads were included in the provided data.*

---

### **Feature Request Trends**  
The community is increasingly focused on:
- **Enhanced session lifecycle control**: Multiple requests for better handling of archived sessions, zombie transcripts, and mid-turn message persistence.
- **Improved developer tooling**: Demand for official Spring Boot Starter (`#18311`) and typed Java SDK clients (`#18247`) reflects a push toward enterprise-grade embedding.
- **Customization and configuration flexibility**: Users want persistent preferences (e.g., reasoning effort, model context window), discoverable models in custom providers (`#17446`), and clearer UI defaults (`#18298`).
- **Cross-platform and language support**: Ongoing efforts to improve i18n (`#18320`), voice dictation compatibility (`#18305`), and extension submission pathways (`#14540`).

---

### **Developer Pain Points**  
Recurring frustrations include:
- **CI/CD instability**: Repeated `no test identified`, `ClassSizeRatchetTest`, and `E2E Test` failures indicate fragile pipelines that block merges.
- **Configuration ambiguity**: Boolean settings rendering as `OFF` when unset (`#18298`) and unclear defaults hinder user confidence.
- **Session state inconsistencies**: Mid-turn messages not logged (`#17559`), archive-related zombie transcripts (`#17251`), and lack of session persistence create trust issues.
- **Tooling limitations**: Missing model discovery in custom providers, hardcoded voice detection modes (`#17000`, `#18305`), and lack of API-first access via Spring Boot starters.
- **Flaky tests**: Clock-dependent assertions (`#18315`) and unscoped CI checks (`#18310`) increase maintenance burden.

---  
*Generated: 2026-11-25 | Source: [QwenLM/qwen-code GitHub](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*