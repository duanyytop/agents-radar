# AI CLI Tools Community Digest 2026-11-17

> Generated: 2026-11-17 04:44 UTC | Tools covered: 7

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
*Generated: 2026-11-17 | Prepared for Technical Decision-Makers & Developers*

---

### **1. Ecosystem Overview**

The AI CLI developer tools landscape in late 2026 reflects a maturing ecosystem transitioning from experimental prototyping to production-grade, team-oriented workflows. Tools are increasingly focused on enterprise readiness—emphasizing session persistence, security hardening, cross-platform stability, and auditability. While core capabilities like code generation and agent execution have converged, differentiation is emerging in areas such as model orchestration, sandboxing philosophy, and integration depth with IDEs and CI/CD pipelines. The community is no longer asking *if* these tools should be used—it’s now about *how* to use them reliably at scale.

---

### **2. Activity Comparison**

| Tool | Issues (Last 24h) | PRs (Last 24h) | Discussions (Last 24h) | Release Status |
|------|------------------|----------------|--------------------------|----------------|
| **Claude Code** | 10 | 1 | 0 | ✅ v2.1.326 released |
| **OpenAI Codex** | 10 | 10 | 10 | ⚠️ Alpha-only updates (no stable release) |
| **Gemini CLI** | 10 | 10 | 0 | ❌ No new release |
| **GitHub Copilot CLI** | 10 | 0 | 0 | ✅ v1.0.113-1 released |
| **OpenCode** | 10 | 10 | 0 | ✅ `@opencode/pty@0.6.0` released |
| **Pi** | 10 | 10 | 3 | ❌ No new release |
| **Qwen Code** | 10 | 10 | 0 | ✅ Nightly release (v0.27.4-nightly) |

> 🔍 *Note: OpenCode uses Discussions as its primary community channel; all other tools use GitHub Issues. For consistency, "Discussions" counts reflect active threads in the dataset, not upstream issue tracking.*

---

### **3. Shared Feature Directions**

Multiple tools are converging on several high-priority feature needs across the ecosystem:

- **Session Continuity & Resilience**:  
  - *Tools:* Claude Code (#103591), OpenAI Codex (#61964), Pi (#12229), Qwen Code (#17383)  
  - *Need:* Auto-recovery after network loss, usage limits, or WebSocket timeouts. Critical for long-running tasks and CI automation.

- **Enterprise-Grade Security & Policy Control**:  
  - *Tools:* Claude Code (#27302), GitHub Copilot CLI (#4998), OpenAI Codex (#39973), Qwen Code (#17501)  
  - *Need:* Granular policy enforcement (e.g., disable browser use), secure credential management, and certificate handling for private infra.

- **Model Orchestration & Routing Intelligence**:  
  - *Tools:* OpenAI Codex (#61844), Pi (#12184), Qwen Code (#17513)  
  - *Need:* Dynamic model selection based on task complexity, support for advanced reasoning levels (e.g., `xhigh`), and fallback logic.

- **Cross-Platform Consistency & Debuggability**:  
  - *Tools:* Gemini CLI (#21409), Pi (#9549), OpenCode (#63817), OpenAI Codex (#60778)  
  - *Need:* Unified UX across OSes, consistent state handling, and visibility into agent behavior (e.g., `ttftMs`, `session_start` events).

- **Free Tier Transparency & Quota Management**:  
  - *Tools:* OpenCode (#59387), Pi (#12241), Qwen Code (#14724)  
  - *Need:* Real-time quota indicators, pre-failure warnings, and predictable reset cycles—especially critical for non-subscribers.

---

### **4. Differentiation Analysis**

| Dimension | Key Differentiators |
|---------|---------------------|
| **Target Users** |  
- **Claude Code**: Enterprise teams needing agent collaboration + code mode consistency.  
- **OpenAI Codex**: Advanced users seeking remote control, mobile access, and extensible tooling.  
- **Gemini CLI**: Developers prioritizing zero-dependency sandboxes and low-level system safety.  
- **GitHub Copilot CLI**: DevOps-focused teams requiring tight integration with Git, compliance, and admin controls.  
- **OpenCode**: Community-driven, open-source advocates valuing transparency, accessibility, and free-tier usability.  
- **Pi**: Power users and builders wanting full control over agent logic, streaming, and plugin ecosystems.  
- **Qwen Code**: Chinese-speaking developers and enterprises using DingTalk/GitHub integrations; strong focus on internal tooling and CI reliability.

| **Technical Approach** |  
- **Claude Code**: Emphasizes workflow consistency (e.g., Code Mode with agent teams).  
- **OpenAI Codex**: Prioritizes app-server resilience, SSH tunnel fallbacks, and media-safe input handling.  
- **Gemini CLI**: Focuses on POSIX-native execution and AST-aware context reduction.  
- **GitHub Copilot CLI**: Leverages managed settings (`features.browserUse`) for policy enforcement.  
- **OpenCode**: Built around daemon lifecycle and PTY protocol stability (v0.6.0).  
- **Pi**: Event-driven kernel architecture with fine-grained metrics (`ttftMs`, `ttfaMs`).  
- **Qwen Code**: Headless event-bus kernel and unified agent loop for scalable orchestration.

---

### **5. Community Momentum & Maturity**

- **Most Active Communities (High Engagement)**:  
  - **OpenCode** (385 comments on #59387) — reflects intense user pressure around free-tier stability.  
  - **Claude Code** (#27302: 310 comments) — indicates strong demand for multi-account connectors in team environments.  
  - **OpenAI Codex** — highest number of discussion threads (10+), showing vibrant innovation culture.

- **Rapid Iteration & Stability Focus**:  
  - **Pi** leads in technical maturity: 10 PRs in 24h, including fixes for race conditions (#11950), CPU bloat (#9549), and stream leaks (#12225).  
  - **Qwen Code** shows aggressive development velocity with nightly releases and P1 CI/CD fixes.  
  - **Claude Code** and **GitHub Copilot CLI** demonstrate mature release cadence with stable, well-documented updates.

- **Maturity Signals**:  
  - Tools like **Pi**, **OpenAI Codex**, and **Qwen Code** are moving beyond MVP features into observability, security, and infrastructure resilience—hallmarks of production-grade platforms.  
  - **Gemini CLI** and **OpenCode** remain in early-to-mid adoption phase, with significant UX and platform-specific bugs still being reported.

---

### **6. Trend Signals**

- **Shift Toward Persistent, Audit-Ready Workflows**:  
  > *“Project-level persistence,” “session continuity,” “per-model weekly usage visibility”* — these recurring themes signal that developers want AI tools they can trust over time, not just for one-off experiments.

- **Security by Design Is Now Expected**:  
  > From `NODE_EXTRA_CA_CERTS` handling to `CreateProcessSecurityEnvironment` failures, the community demands secure defaults—especially in enterprise and regulated environments.

- **Developer Experience (DX) Is the New Competitive Edge**:  
  > Features like undo/redo (#2379), screen-reader mode (#39368), and `ttftMs` metrics are no longer nice-to-have—they define usability and retention.

- **AI Agents Are Becoming Workflow Orchestration Platforms**:  
  > The demand for remote control (Codex), peer-to-peer messaging (Pi), and task coordination (Taskhold) shows agents are evolving into autonomous coworkers, not just code generators.

- **Open Source vs. Proprietary Tensions Are Emerging**:  
  > OpenCode’s free-tier issues and Qwen Code’s CI flakiness highlight growing pains in open-source AI tooling—where community trust is fragile without reliable delivery.

---

### **Conclusion**

The AI CLI ecosystem is entering a pivotal phase: tools are no longer competing on raw capability but on **reliability, governance, and developer experience**. Teams should prioritize tools with:
- Proven session resilience (Pi, OpenAI Codex),
- Strong enterprise policies (GitHub Copilot CLI, Claude Code),
- Transparent, auditable behavior (Qwen Code, Pi),
- And robust community momentum (OpenCode, OpenAI Codex).

For strategic investment, **Pi** and **Qwen Code** represent the most forward-looking platforms—designed for extensibility and observability—while **Claude Code** and **GitHub Copilot CLI** offer the most mature, compliant paths for team adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-11-17 | Source: github.com/anthropics/skills*

---

### **1. Top Skills Ranking** *(by community attention & discussion)*

1. **`md2video-audio` (PR #1703)**  
   *Functionality:* Converts Markdown documents into professional MP4 videos with realistic human voiceovers using Marp for slide generation and AI audio synthesis.  
   *Discussion Highlights:* High interest in zero-cost, automated content creation; praised for enabling rapid video production from text.  
   *Status:* Open (created 2026-09-01, last updated 2026-09-15)  

2. **`proofcore-contract-auditor` (PR #1771)**  
   *Functionality:* Automated static analysis of Solidity/Rust smart contracts with cryptographic audit proofs anchored on the TON blockchain via ProofCore’s zero-storage Merkle protocol.  
   *Discussion Highlights:* Strong demand from Web3 developers; seen as a critical tool for trustless code validation.  
   *Status:* Open (created 2026-09-15, last updated 2026-09-16)  

3. **`notion-spec-to-implementation` (PR #1245)**  
   *Functionality:* Transforms Notion-based product or tech specifications into actionable implementation tasks with acceptance criteria and progress tracking.  
   *Discussion Highlights:* Addresses a key workflow gap between design and execution; aligns with growing use of Notion in dev teams.  
   *Status:* Open (created 2026-06-02, last updated 2026-10-15)  

4. **`webapp-testing` improvements (PRs #1980, #1977, #1976, #1975)**  
   *Functionality:* Enhances web application testing capabilities—security fixes (no `shell=True`), improved element detection, input validation, and error handling.  
   *Discussion Highlights:* Rapid iteration on core testing infrastructure; reflects deep focus on robustness and security.  
   *Status:* All open (Oct–Nov 2026)  

5. **`scnet-hpc` (PR #1615)**  
   *Functionality:* Enables SSH and Slurm-based access to SCNet HPC clusters with profile-specific workflows.  
   *Discussion Highlights:* Niche but high-value for academic and research users; signals growing adoption in computational domains.  
   *Status:* Open (created 2026-08-20, last updated 2026-08-24)  

6. **`document-typography` (PR #514)**  
   *Functionality:* Enforces typographic quality control in AI-generated documents—prevents orphaned words, widows, and misaligned numbering.  
   *Discussion Highlights:* Recognized as solving a persistent, invisible pain point in document output quality.  
   *Status:* Open (created 2026-03-04, last updated 2026-03-13)  

7. **`compact-memory` (Issue #1329)**  
   *Functionality:* Introduces symbolic notation for compact agent state representation, reducing context bloat in long-running agents.  
   *Discussion Highlights:* Proposed as a foundational skill for scalable agent systems; highlights need for memory efficiency.  
   *Status:* Proposal (open, created 2026-06-17)  

---

### **2. Community Demand Trends** *(from Issues & Proposals)*

- **Workflow Automation & Integration:** High demand for skills that bridge tools (e.g., Notion → implementation, Slack → Gifs).  
- **Code Quality & Security:** Consistent interest in automated code review, contract auditing (`proofcore-contract-auditor`), and secure command execution (`webapp-testing`).  
- **Documentation & Output Polish:** Users want smarter, publication-ready outputs—typography, formatting, and visual consistency are top concerns.  
- **Agent Governance & Safety:** Growing calls for safety patterns in AI agents (e.g., `agent-governance` proposal), reflecting maturity in deployment practices.  
- **User Experience & Infrastructure:** Desire for org-wide sharing, email management, and stable skill persistence (issues #228, #1143, #62).

---

### **3. High-Potential Pending Skills** *(Active-comment PRs with high impact potential)*

- **`md2video-audio` (PR #1703):** High visibility, clear use case, ready for integration.  
- **`proofcore-contract-auditor` (PR #1771):** Targets a specialized but rapidly expanding domain (Web3); likely to be prioritized.  
- **`webapp-testing` suite (PRs #1980, #1977, #1976, #1975):** Critical infrastructure updates with strong technical justification—likely to merge soon.  
- **`document-typography` (PR #514):** Solves a common user frustration; low risk, high value.  
- **`theme-factory` clarification (Issue #2064):** While not a new skill, it reveals a need for better guidance—could lead to improved UX in existing skills.

> 🔗 [View all top PRs](https://github.com/anthropic/skills/pulls?q=is%3Aopen+sort%3Acomments-desc)

---

### **4. Skills Ecosystem Insight**

The community’s most concentrated demand is for **trusted, production-grade automation tools that enhance reliability, security, and polish in AI-generated workflows—especially in documentation, code, and web interaction**.

> 📌 *Summary:* From raw code to polished delivery, the ecosystem is maturing toward enterprise-ready, safe, and self-sustaining agent systems.

---

**Claude Code Community Digest – 2026-11-17**

---

### **1. Today's Highlights**  
The latest release, **v2.1.326**, introduces critical support for enabling *Code Mode* alongside active agent teams—ensuring consistent developer workflows in collaborative environments. A new startup warning now alerts users to invalid or malformed `--allowedTools` configurations, improving CLI reliability and reducing silent failures during tool execution.

---

### **2. Releases**  
**v2.1.326 (2026-11-17)**  
- ✅ **Code Mode with Agent Teams**: Users can now enable Code Mode even when agent teams are active; existing sessions with teams will automatically start in Code Mode.  
- ⚠️ **Startup Validation**: Added warnings when `--allowedTools`, `--disallowedTools`, or `--tools` contain entries that don’t match expected tool identifier patterns (e.g., missing hyphens or invalid syntax), preventing misconfigurations from silently failing.

🔗 [GitHub Release v2.1.326](https://github.com/anthropics/claude-code/releases/tag/v2.1.326)

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | **Support multiple Connector accounts per connector** – developers need to manage different credentials (e.g., GitHub orgs, Slack workspaces) within the same connector. High demand from enterprise and multi-account users. | 🔥 310 comments, 476 👍 — most active feature request; signals growing adoption in team workflows. |
| [#110569](https://github.com/anthropics/claude-code/issues/110569) | **User message truncated at start when sent from Warp terminal** – long messages lose their beginning due to input handling bugs. Impacts productivity in rich-terminal workflows. | 📌 2 comments, urgent for users relying on Warp + Claude Code integration. |
| [#110565](https://github.com/anthropics/claude-code/issues/110565) | **Literal `\r` (CR) in model output collapses AskUserQuestion UI** – causes severe layout issues in macOS desktop app, especially with non-Anthropic models via proxy. | 💥 Critical UX issue; affects session interaction integrity. |
| [#95764](https://github.com/anthropics/claude-code/issues/95764) | **Opus 5: Prose between tool calls is summarized into "narration" blocks** – code blocks dropped, breaking debugging flow. Regressed since 2026-09-11. | 🔥 10 comments, 10 👍 — highlights ongoing tension between model summarization and developer visibility needs. |
| [#105132](https://github.com/anthropics/claude-code/issues/105132) | **Repeated 0.76–0.79M-token cache writes after image-history trimming** – massive disk I/O spikes during long AI tasks (e.g., game dev). Wastes bandwidth and degrades performance. | 🔥 7 comments, 1 👍 — high concern for users running iterative image-heavy workflows. |
| [#101651](https://github.com/anthropics/claude-code/issues/101651) | **"Couldn't share transcript" error despite accepting prompt** – feedback system fails post-consent, blocking data collection. | 📌 9 comments — frustrates user contribution efforts; undermines product improvement loop. |
| [#103591](https://github.com/anthropics/claude-code/issues/103591) | **Auto-continue at usage limit not working** – setting `autoContinueAtUsageLimit: true` has no effect. Breaks continuity for long sessions. | 📌 6 comments, 3 👍 — essential for cost-conscious users on limited plans. |
| [#100746](https://github.com/anthropics/claude-code/issues/100746) | **Usage limits depleting faster than expected (Linux)** – users report unexpected consumption, possibly due to incorrect token accounting. | 📌 10 comments — raises trust issues around billing transparency. |
| [#95539](https://github.com/anthropics/claude-code/issues/95539) | **Naver.com domains blocked by default safety filter** – false positive blocking South Korea’s top portal (daum.net, tistory.com unaffected). Affects regional developers. | 📌 12 comments, 12 👍 — shows need for smarter, region-aware safety policies. |
| [#110500](https://github.com/anthropics/claude-code/issues/110500) | **Plugin $.session.append reminder swaps with "Tool loaded." text** – breaks context flow during resends; prompt cache rewritten unexpectedly. | 📌 3 comments — disrupts workflow consistency in plugin-heavy environments. |

---

### **4. Key PR Progress**  

| PR | Summary | Status |
|----|--------|--------|
| [#78049](https://github.com/anthropics/claude-code/pull/78049) | Fixes `Set-ClaudeCodePolicy.ps1` to write to correct Program Files path in 32-bit PowerShell hosts (Intune compatibility). Prevents MDM deployment failures on older systems. | ✅ Closed |
| *(No other PRs updated in last 24h)* | | |

---

### **5. Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **6. Feature Request Trends**  
The most prominent trends emerging from community requests include:  
- **Multi-account & connector flexibility**: Demand for managing multiple accounts per connector (e.g., GitHub orgs, Slack teams) is overwhelming (#27302).  
- **Session continuity & handoff**: Users want seamless session transfer across devices and tools (Issue #11455, #110525).  
- **Cost control & budgeting**: High demand for per-session spend caps (`--max-budget-usd`) beyond print-mode only (Issue #95964).  
- **Project-level persistence**: Developers seek better ways to move artifacts, rules, and memories between sessions (Issue #110525).  
- **Integration with web platform**: Desire to sync local Claude Code sessions with claude.ai Projects and chat history (Issue #106011).  
- **Enhanced status monitoring**: Per-model weekly usage visibility in status line (Issue #99223).

These reflect a shift toward **enterprise-grade, persistent, and accountable AI development workflows**.

---

### **7. Developer Pain Points**  
Recurring frustrations include:  
- **Unreliable cost tracking**: Usage limits depleting unexpectedly (Issues #100746, #103591).  
- **Broken auto-continue and auto-update logic**: Sessions fail to resume after network loss or usage limits (Issues #65093, #103591).  
- **UI/UX regressions**: Truncated messages (#110569), collapsed question panels (#110565), broken navigation (#95174).  
- **Tool & hook misbehavior**: Plugins not recorded as used (#110537), hooks blocking turns repeatedly (#103414).  
- **Platform-specific edge cases**: Android sign-in failures on rooted devices (#105770), Windows junction redirects in MSIX (#102772).  

These highlight ongoing challenges in **cross-platform stability, session resilience, and predictable behavior**—especially under complex configurations.

---  
*Digest generated: 2026-11-17 | Source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex Community Digest – 2026-11-17**

---

### **1. Today's Highlights**  
The Codex team shipped critical stability and security improvements across Windows, macOS, and CLI environments, with a focus on sandboxing, session continuity, and cross-platform consistency. Notably, the app-server thread resume system was refactored to allow overlapping resumptions, improving responsiveness in long-running workflows. Meanwhile, user-driven discussions highlight growing demand for remote control capabilities and better model routing intelligence.

---

### **2. Releases**  
No new stable releases were published in the last 24 hours. The latest activity involves **alpha versions** of `rust-v0.171.0-alpha.8`, `9`, `10`, and `11`, and `rust-v0.170.0-alpha.4.1`. These updates primarily include internal refactoring, performance tuning, and minor bug fixes related to sandbox execution, session state handling, and platform-specific edge cases (e.g., Windows MXC launcher behavior). All are experimental and targeted at early adopters and CI testing.

> 🔗 [GitHub Release: rust-v0.171.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.11)

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#57101](https://github.com/openai/codex/issues/57101) | Persistent "gold/yellow border" after screenshot capture on Windows — UX blocker for visual debugging. | 43 comments, 7 👍; reported in v26.1021.3705.0 MSIX build. |
| [#60778](https://github.com/openai/codex/issues/60778) | iOS app shows “No tasks yet” despite active chats accessible via search — undermines trust in mobile sync. | 21 comments, 13 👍; impacts Pro users relying on mobile access. |
| [#39973](https://github.com/openai/codex/issues/39973) | Retirement of `approval_policy="untrusted"` without deprecation weakens execution safety boundary. | 16 comments, 41 👍; critical concern for enterprise and security-conscious devs. |
| [#29156](https://github.com/openai/codex/issues/29156) | Desktop custom providers unusable with existing chats — breaks workflow continuity for advanced users. | 14 comments, 42 👍; highlights inconsistency between CLI and desktop. |
| [#61703](https://github.com/openai/codex/issues/61703) | ChatGPT Memory causes confident false-memory reconstruction due to relational context loss. | 9 comments, 0 👍; signals deeper memory coherence issues in retrieval systems. |
| [#58569](https://github.com/openai/codex/issues/58569) | macOS desktop hits recurring HTTP 400 Bad Request during long-running tasks — blocks progress. | 9 comments, 1 👍; affects reliability in extended sessions. |
| [#59410](https://github.com/openai/codex/issues/59410) | Windows auth failure: missing `chatgpt_account_id` despite working web app. | 7 comments, 0 👍; indicates token routing or workspace metadata misalignment. |
| [#61611](https://github.com/openai/codex/issues/61611) | Windows `CreateProcessSecurityEnvironment` fails (HRESULT=0x8007000F) — prevents local command execution. | 3 comments, 0 👍; severe impact on development workflow integrity. |
| [#59557](https://github.com/openai/codex/issues/59557) | macOS Dot app shows “Messages aren't available” while web works — persistent Statsig bootstrap timeout. | 4 comments, 0 👍; suggests inconsistent account state handling. |
| [#61518](https://github.com/openai/codex/issues/61518) | Cybersecurity false positives block legacy game engine development — legitimate use case blocked. | 3 comments, 0 👍; raises concerns about overzealous safety filtering. |

---

### **4. Key PR Progress**  

| PR | Description | Impact |
|----|-------------|--------|
| [#61964](https://github.com/openai/codex/pull/61964) | Add HTTP/2 fallback for SSH tunnels — ensures connectivity when QUIC/HTTP/3 fails. | Critical for network resilience in restricted environments. |
| [#61962](https://github.com/openai/codex/pull/61962) | Capture local attachments before queuing turn input — prevents file loss during input delay. | Solves race condition in media-rich workflows. |
| [#61959](https://github.com/openai/codex/pull/61959) | Prewarm restored file images on cold resume — improves perceived responsiveness. | Enhances UX for resumed projects with historical assets. |
| [#61958](https://github.com/openai/codex/pull/61958) | Support turn-scoped exhaustion in host usage accounting — allows partial failure without blocking entire thread. | Enables more granular resource management. |
| [#61956](https://github.com/openai/codex/pull/61956) | Support saved environments when starting Cloud threads — enables reproducible project setups. | Boosts consistency in collaborative and CI workflows. |
| [#61955](https://github.com/openai/codex/pull/61955) | Bound item loading for paginated `read_thread` calls — reduces unnecessary data transfer. | Improves performance in large-thread scenarios. |
| [#61954](https://github.com/openai/codex/pull/61954) | Add undo/redo to non-Vim prompt composer — finally adds core editing functionality. | Addresses long-standing UX gap (Issue #2379). |
| [#61951](https://github.com/openai/codex/pull/61951) | Refactor composer undo/redo history — consolidates logic and preserves bindings. | Foundation for future extensible editing features. |
| [#61949](https://github.com/openai/codex/pull/61949) | Extract user input preparation into `codex-user-input` crate — improves modularity. | Supports cleaner separation of concerns in the codebase. |
| [#61947](https://github.com/openai/codex/pull/61947) | Mask system SSH config drop-ins in Linux sandbox — fixes OpenSSH rejection issues. | Resolves common SSH connection failures on Linux. |

---

### **5. Hot Discussions**  

#### **Ideas**
- [#9200](https://github.com/openai/codex/discussions/9200): *Remote control Codex from ChatGPT app* — 53 comments, 195 👍. A high-priority vision: headless Codex daemon + mobile UI for task orchestration.
- [#36238](https://github.com/openai/codex/discussions/36238): *Wildcards in permission model needed* — 2 comments, 3 👍. Users want flexible patterns like `git [show|log|...]` without literal argument matching.
- [#61844](https://github.com/openai/codex/discussions/61844): *Intelligent model routing & complexity assessment* — 0 comments, 1 👍. Suggests AI-driven model selection based on task analysis.

#### **Q&A**
- [#56686](https://github.com/openai/codex/discussions/56686): *Pre-request token bounds for `codex exec` without API key* — 3 comments, 1 👍. Real need for diagnostic workflows with hard token ceilings.
- [#61849](https://github.com/openai/codex/discussions/61849): *Supported metadata-only timing for latency diagnostics* — 0 comments, 1 👍. Developer seeks tools to isolate first-output vs. delivery latency.

#### **Show and Tell**
- [#58912](https://github.com/openai/codex/discussions/58912): *Codex Mobile Workbench* — phone controls desktop Codex via PWA. Practical remote workflow tool.
- [#59147](https://github.com/openai/codex/discussions/59147): *SnipToss* — annotate images/videos generated by Codex and hand notes back as files. Solves “where is this wrong?” problem.
- [#61953](https://github.com/openai/codex/discussions/61953): *Worktree Preflight* — checks if Codex runs Git in the correct checkout. Simple but vital debugging utility.
- [#61938](https://github.com/openai/codex/discussions/61938): *Offline CSV checker for order exports* — built with Codex to detect duplicates, blanks, etc. Real-world business automation.
- [#61923](https://github.com/openai/codex/discussions/61923): *Runheed* — MCP server for production errors. Codex integrates to diagnose and fix stack traces.
- [#61893](https://github.com/openai/codex/discussions/61893): *Taskhold* — shared task list with live progress for Codex clients. Enables team-based agent coordination.
- [#61870](https://github.com/openai/codex/discussions/61870): *CallForMe* — lets Codex call businesses via remote MCP. Shows real-world agent interaction potential.
- [#61758](https://github.com/openai/codex/discussions/61758): *TeapotRouter* — single metered key for both Codex CLI and Claude Code. Solves key fragmentation pain point.
- [#61475](https://github.com/openai/codex/discussions/61475): *Ragmir* — open-source retrieval layer citing code, PDFs, Office files. Enhances context grounding.
- [#61779](https://github.com/openai/codex/discussions/61779): *Inspect marketplace bundles before download* — helps assess third-party tools safely. Important for security-aware developers.

---

### **6. Feature Request Trends**  
The community is converging on three major feature directions:
1. **Enhanced Remote & Cross-Platform Control**: Demand for mobile/web-to-desktop remote control (e.g., Discussion #9200), consistent GUI access across platforms (Issue #45386).
2. **Smarter Model & Workflow Orchestration**: Users want automatic model selection based on task complexity (Discussion #61844), per-thread context window profiles (Issue #40429), and better support for custom provider routing (Issues #29156, #36597).
3. **Improved Session & Project Management**: Requests for hiding local projects without deletion (Issue #35749), better session tracking in IDEs (Discussion #22829), and isolated browser sessions per task (Issue #40467).

---

### **7. Developer Pain Points**  
Recurring frustrations reflect deep integration challenges:
- **Inconsistent State Across Platforms**: iOS shows “No tasks yet” despite valid conversations (Issue #60778); macOS Dot shows message unavailability while web works (Issue #59557).
- **Sandbox & Security Gaps**: Windows `CreateProcessSecurityEnvironment` failures (Issue #61611), poor SSH config handling (PR #61947), and unclear permissions model (Discussion #36238).
- **Workflow Breakage After Updates**: Desktop updates break existing chats using non-native providers (Issue #59323), and configuration changes (like retiring `untrusted` approval) cause silent failures (Issue #39973).
- **Missing Core Editing Features**: Lack of undo/redo in non-Vim prompt composer (Issue #2379) remains a top UX complaint despite recent PRs.
- **Context & Memory Coherence**: False memory reconstruction (Issue #61703) and excessive context import (Issue #34656) undermine reliability in complex projects.

---  
*Digest compiled by AI Developer Tools Analyst | Data source: github.com/openai/codex | Date: 2026-11-17*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI Community Digest — 2026-11-17**

---

### **1. Today's Highlights**  
The Gemini CLI community continues to focus on improving agent reliability, security hardening, and deeper integration with native shell workflows. Critical issues around subagent behavior—particularly hanging agents and incorrect termination signals—are receiving active attention. Meanwhile, recent PRs address high-priority security fixes (e.g., Git command injection) and performance bottlenecks in build pipelines.

---

### **2. Releases**  
No new releases were published in the last 24 hours.

---

### **3. Hot Issues**  

| Issue # | Title | Why It Matters | Community Reaction |
|--------|------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Misleading status reporting hides actual failures during codebase investigation; undermines trust in agent progress tracking. | 13 comments, 2 👍 – P1 priority, bot-triaged |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | Users report indefinite hangs when deferring to generalist agent—critical for UX stability. Requires immediate triage. | 8 comments, 8 👍 – High visibility, P1 severity |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero-Dependency OS Sandboxing | Aligns with Gemini 3’s native POSIX tooling capabilities; enables secure, efficient execution without external dependencies. | 9 comments, 1 👍 – Strategic enhancement, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping | Could drastically reduce context bloat and improve precision in code analysis. Key enabler for next-gen agents. | 7 comments, 1 👍 – Core platform-level exploration |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | User frustration: agents fail to auto-select relevant tools despite strong prompts. Limits customization power. | 7 comments, 0 👍 – Anecdotal but widely echoed |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | Configuration drift leads to inconsistent behavior across environments. Blocks reproducibility. | 5 comments, 0 👍 – P2 bug, affects config integrity |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | Platform-specific failure limits usability on Linux desktops using Wayland. Affects accessibility. | 4 comments, 1 👍 – Blocked on environment support |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model frequently creates tmp scripts in random spots | Causes clutter and cleanup overhead; violates workspace hygiene expectations. | 3 comments, 0 👍 – Low-level UX issue with high friction |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | Prevents risky commands like `git reset --force`. Essential for safe autonomous development. | 3 comments, 1 👍 – Safety-critical feature request |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done output hook causes crash | Crashes during final summary phase disrupts user workflow and task closure. | 3 comments, 0 👍 – P1 bug affecting core flow |

---

### **4. Key PR Progress**

| PR # | Title | Summary | Status |
|------|------|--------|--------|
| [#30325](https://github.com/google-gemini/gemini-cli/pull/30325) | Fix/bg output truncated header | Addresses misleading log headers when background output is truncated—improves debugging clarity. | Open |
| [#30095](https://github.com/google-gemini/gemini-cli/pull/30095) | fix: prevent Windows git diff permission bypass | Fixes a critical security flaw allowing dangerous Git arguments to be treated as safe. | Closed |
| [#30102](https://github.com/google-gemini/gemini-cli/pull/30102) | fix(core): log IDE connections with ide_connection event name | Corrects mislogging of IDE sessions, improving analytics accuracy. | Closed |
| [#30096](https://github.com/google-gemini/gemini-cli/pull/30096) | fix(cli): use default for empty env vars with :- | Resolves logic error where empty env vars ignored defaults—fixes config reliability. | Closed |
| [#30207](https://github.com/google-gemini/gemini-cli/pull/30207) | fix(build): clear bundle/ before esbuild | Solves nightly publish failures due to stale build artifacts inflating tarball size. | Open (P0) |
| [#30210](https://github.com/google-gemini/gemini-cli/pull/30210) | fix(core): stop WebFetch fallback work after cancellation | Prevents unnecessary fallback processing after request cancellation—reduces resource waste. | Open |
| [#30206](https://github.com/google-gemini/gemini-cli/pull/30206) | fix: block project Git environment injection | Stops malicious `.env` files from hijacking internal Git operations. Security patch. | Open |
| [#30292](https://github.com/google-gemini/gemini-cli/pull/30292) | fix(core): preserve oversized background log tails | Ensures no data loss when reading long logs by fixing truncation logic. | Open |
| [#30321](https://github.com/google-gemini/gemini-cli/pull/30321) | chore(deps): update workspace dependencies | Keeps sandbox runtime aligned with latest system packages and npm toolchain. | Open |
| [#30319](https://github.com/google-gemini/gemini-cli/pull/30319) | chore(gcp): push development worker to private artifact registry | Improves security by isolating dev images from public registries. | Open |

---

### **5. Hot Discussions**  
*No discussion threads provided in the dataset.*

---

### **6. Feature Request Trends**  
The most prominent trends emerging from open issues include:

- **Agent Intelligence & Autonomy**: Developers want agents to better self-identify and use relevant subagents/skills (e.g., [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) and avoid manual prompting.
- **Security & Isolation**: Strong demand for zero-dependency sandboxes ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), stricter environment variable handling ([#30206](https://github.com/google-gemini/gemini-cli/pull/30206)), and safer default behaviors.
- **Context Efficiency**: Users are pushing for AST-aware file operations ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) and "tactful extraction" ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)) to reduce token bloat.
- **Debuggability & Transparency**: Requests for better visibility into agent trajectories ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and richer diagnostic output (e.g., full context in bug reports) are recurring.

---

### **7. Developer Pain Points**  
Recurring frustrations include:

- **Unpredictable Agent Behavior**: Agents hang indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) or report false success states ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), eroding confidence in automation.
- **Configuration Inconsistency**: Settings like `maxTurns` are ignored by certain agents ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), leading to unpredictable execution.
- **Workspace Pollution**: Agents generate temporary scripts in arbitrary locations ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), requiring manual cleanup.
- **Platform Fragility**: Bugs like browser agent failures under Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) limit cross-platform adoption.
- **Tool Discovery & Management**: Users struggle to discover or reliably enable custom subagents, especially via symlinks ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

---  
*Digest compiled from GitHub activity: [gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest — 2026-11-17**

---

### **Today's Highlights**  
The Copilot CLI team has released **v1.0.113-1**, introducing granular control for administrators to disable browser use via the `features.browserUse` managed setting—enhancing security and compliance in enterprise environments. Meanwhile, a critical macOS-specific issue (#4998) affecting post-update usability has been resolved after 7 weeks of community feedback, underscoring ongoing stability improvements.

---

### **Releases**  
- **v1.0.113-1**:  
  - ✅ **Added**: Administrators can now disable built-in browser use via the managed setting `features.browserUse`, including in active sessions. This enables tighter policy enforcement in regulated environments.  
  - 🔧 *Note: v1.0.113-0 included fixes and minor changes (not detailed here).*

---

### **Hot Issues**  
*(Top 10 by impact, comment count, and community sentiment)*

1. **#4998 [CLOSED]** – *macOS update breaks Copilot CLI due to stale `.mcp-writer.binding` device ID*  
   📌 **Why it matters**: Affected users post-macOS security updates couldn’t use Copilot CLI at all. High severity; resolved after 7 weeks.  
   🔗 [Issue #4998](https://github.com/github/copilot-cli/issues/4998)

2. **#5220 [OPEN]** – *Option for 1-hour prompt cache TTL for Claude models (current: 5 min)*  
   📌 **Why it matters**: Users report frequent cache misses during interactive workflows. 11 upvotes highlight demand for longer cache windows with high-context models.  
   🔗 [Issue #5220](https://github.com/github/copilot-cli/issues/5220)

3. **#5145 [OPEN]** – *400 error on model call after background shell exits*  
   📌 **Why it matters**: Breaks custom OpenAI-compatible providers (e.g., DeepSeek). Affects advanced users relying on external models.  
   🔗 [Issue #5145](https://github.com/github/copilot-cli/issues/5145)

4. **#5359 [CLOSED]** – *Resumed session fails with "Tool reference not found" after MCP tool change*  
   📌 **Why it matters**: Critical UX flaw in session resumption when tools are updated mid-session. Resolved but highlights need for better state management.  
   🔗 [Issue #5359](https://github.com/github/copilot-cli/issues/5359)

5. **#5177 [CLOSED]** – *Manual approval missing for Git mutations after harness migration*  
   📌 **Why it matters**: Security regression where destructive Git commands no longer require explicit approval. High-risk fix.  
   🔗 [Issue #5177](https://github.com/github/copilot-cli/issues/5177)

6. **#5207 [OPEN]** – *Windows sandbox fails on non-system drives*  
   📌 **Why it matters**: Limits usability for developers using D:/ or E:/ as working directories. Common pain point on Windows.  
   🔗 [Issue #5207](https://github.com/github/copilot-cli/issues/5207)

7. **#4041 [CLOSED]** – *web_fetch fails in IPv4-only sandboxes*  
   📌 **Why it matters**: Breaks tooling in constrained network environments. Fixed, but shows edge-case testing gaps.  
   🔗 [Issue #4041](https://github.com/github/copilot-cli/issues/4041)

8. **#2378 [OPEN]** – *Cancel queued messages without stopping current operation*  
   📌 **Why it matters**: Core workflow friction—users want granular message control during long-running tasks. 7 upvotes indicate strong demand.  
   🔗 [Issue #2378](https://github.com/github/copilot-cli/issues/2378)

9. **#5483 [OPEN]** – *Immediate mode messages merged into single string without separator*  
   📌 **Why it matters**: Can cause model misinterpretation (e.g., “no drop phase 7” instead of “no” + “drop phase 7”). Subtle but impactful.  
   🔗 [Issue #5483](https://github.com/github/copilot-cli/issues/5483)

10. **#5365 [OPEN]** – *Sandbox reports extra temp-storage rule without visibility*  
    📌 **Why it matters**: Transparency issue in policy decisions. Developers need to know about implicit grants to audit security.  
    🔗 [Issue #5365](https://github.com/github/copilot-cli/issues/5365)

---

### **Key PR Progress**  
*No new pull requests were merged in the last 24 hours.*

---

### **Hot Discussions**  
*No discussion threads were provided in the data source.*

---

### **Feature Request Trends**  
The most prominent feature directions from open issues include:  
- **Enhanced sandbox control**: Selective tool enablement (#4298), path-specific policies, and better visibility into implicit rules (#5365).  
- **Improved session resilience**: Stable resume behavior across tool changes (#5359), persistent context, and better cache TTLs (#5220).  
- **Developer workflow flexibility**: Cancel queued messages (#2378), disable repetitive summaries in autopilot (#5033), and better prompt handling (#5483).  
- **Enterprise readiness**: Policy enforcement (#4446), authentication transparency (#4804), and support for remote sessions (#5355).

---

### **Developer Pain Points**  
Recurring frustrations include:  
- **Session instability** after OS updates or tool changes (e.g., #4998, #5359).  
- **Inconsistent or invisible security controls**, especially around Git commands (#5177) and sandboxed file access (#5207).  
- **Opaque policy decisions**, particularly around temporary storage grants and permission gates (#5365, #4701).  
- **Tooling limitations in constrained environments**, such as IPv4-only networks (#4041) or WSL/remote setups (#4546).  
- **Lack of granular control over AI behavior**, including prompt caching, message queuing, and summary verbosity.

These patterns reflect a growing demand for predictable, auditable, and developer-centric AI tooling—especially in production and collaborative environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-11-17

---

### **1. Today's Highlights**  
The OpenCode ecosystem saw a significant release with `process-daemon-v0.6.0`, shipping `@opencode/pty@0.6.0` (protocol 9) to npm, enhancing terminal interaction reliability. A surge in community engagement around free-tier usability and stability issues highlights growing pains in scaling the platform. Meanwhile, multiple PRs address critical bugs related to zombie processes, session management, and accessibility—reflecting a strong focus on core stability and inclusivity.

---

### **2. Releases**  
- **`process-daemon-v0.6.0`** → Released as `@opencode/pty@0.6.0` (npm).  
  - Upgraded to protocol 9, improving compatibility and performance for terminal sessions.  
  - Addresses long-standing issues with shell process lifecycle handling across platforms.  
  🔗 [GitHub Release](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.6.0)

---

### **3. Hot Issues**  

| Issue | Summary & Impact | Community Reaction |
|------|------------------|--------------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | **Free tier exhaustion without reset** – Users report quota not resetting at UTC 00:00 despite repeated attempts. Critical for non-subscribers. | 385 comments, 28 upvotes — *top concern*; widespread frustration with UX and transparency. |
| [#63817](https://github.com/anomalyco/opencode/issues/63817) | **Zombie processes in `opencode-pty daemon` post-upgrade to v2.3.0** – Shell commands leave defunct children, causing memory bloat. | 10 comments, 1 upvote — *reproduced by multiple users*, signals regression in daemon lifecycle. |
| [#63976](https://github.com/anomalyco/opencode/issues/63976) | **Unbounded zombie growth under single daemon PID** – Same issue as #63817, confirmed on Linux. | 5 comments, 1 upvote — *high severity*, impacts server stability in headless environments. |
| [#64096](https://github.com/anomalyco/opencode/issues/64096) | **Loss of blocking subagent calls after background default in v2.3.0** – Breaking workflows expecting synchronous behavior. | 9 comments, 2 upvotes — *urgent for developers relying on sync execution*. |
| [#64073](https://github.com/anomalyco/opencode/issues/64073) | **Request to restore foreground subagent execution** – Visual evidence shows broken UX after update. | 8 comments, 2 upvotes — *strong user demand* for revert or opt-in option. |
| [#64334](https://github.com/anomalyco/opencode/issues/64334) | **Free quota exhaustion only visible after 429 error** – No UI feedback until failure occurs. | 3 comments, 0 upvotes — *critical UX gap* affecting new users. |
| [#64355](https://github.com/anomalyco/opencode/issues/64355) | **Shell fails when cwd is deleted externally** – Even absolute paths fail. Breaks session continuity. | 2 comments, 0 upvotes — *high risk for dev workflows involving external file system changes*. |
| [#64317](https://github.com/anomalyco/opencode/issues/64317) | **Orphaned PTY shells lock worktree directories on Windows** – Prevents deletion/reuse. | 2 comments, 0 upvotes — *platform-specific but severe*, especially for Git workflows. |
| [#54916](https://github.com/anomalyco/opencode/issues/54916) | **Compaction restores redacted text** – Plugins removing content are undone during compaction. | 3 comments, 0 upvotes — *security/privacy risk* if data reappears post-compaction. |
| [#64304](https://github.com/anomalyco/opencode/issues/64304) | **Four Free models require training consent despite zero retention** – Misaligned with documentation. | 2 comments, 0 upvotes — *confusing policy*, risks alienating privacy-conscious users. |

---

### **4. Key PR Progress**  

| PR | Summary | Status |
|----|--------|--------|
| [#64350](https://github.com/anomalyco/opencode/pull/64350) | **Add screen reader mode** – Opt-in plain-text output for accessibility. Closes #39368. | ✅ Open |
| [#64353](https://github.com/anomalyco/opencode/pull/64353) | **Add `/cd <path>` slash command** – Matches TUI behavior in desktop app. Includes directory completion. | ✅ Open |
| [#64343](https://github.com/anomalyco/opencode/pull/64343) | **Background slow Code Mode scripts** – Long-running scripts stay active without blocking. | ✅ Open |
| [#64347](https://github.com/anomalyco/opencode/pull/64347) | **Allow plain string query in `search()` tool** – Fixes schema error; improves API usability. | ✅ Closed |
| [#64356](https://github.com/anomalyco/opencode/pull/64356) | **Align v1 npm setup with dev** – Ensures consistent publishing pipeline. | ✅ Closed |
| [#64349](https://github.com/anomalyco/opencode/pull/64349) | **Use GitHub-hosted runner for v1 publishing** – Improves security and trust in releases. | ✅ Closed |
| [#64351](https://github.com/anomalyco/opencode/pull/64351) | **Upgrade `oxlint` to 1.93.0** – Fixes linting bugs and improves code quality checks. | ✅ Closed |
| [#64340](https://github.com/anomalyco/opencode/pull/64340) | **Avoid WAL on Linux NFS databases** – Fixes startup failures on network filesystems. | ✅ Open |
| [#63246](https://github.com/anomalyco/opencode/pull/63246) | **Keep OAuth redirect prompt accessible** – Prevents URL truncation in terminal. | ✅ Closed |
| [#62577](https://github.com/anomalyco/opencode/pull/62577) | **Include hidden files in ripgrep search** – Fixes `@` picker missing dotfiles on Windows. | ✅ Closed |

---

### **5. Hot Discussions**  
*No discussion threads provided in dataset. This section is omitted.*

---

### **6. Feature Request Trends**  
Top recurring themes from Issues and PRs:
- **Accessibility & Inclusivity**: Strong demand for screen-reader support (#39368), readable TUI output, and keyboard navigation.
- **Session & Workflow Control**: Need for **blocking subagent calls**, **foreground execution**, and **`/cd` command parity** between TUI and desktop.
- **Free Tier Transparency**: Users want **real-time quota indicators**, **preemptive warnings**, and **clearer usage policies**.
- **Plugin & Marketplace Ecosystem**: Desire for a unified **OpenCode marketplace** (#28696) to discover, install, and manage plugins.
- **Developer Productivity Tools**: Requests for **notebook/scratchpad** (#64327) to store partial agent outputs and notes inline.
- **Cross-Platform Consistency**: Fixes for platform-specific behaviors (Windows/NFS/Linux) indicate need for more robust OS abstraction.

---

### **7. Developer Pain Points**  
Recurring frustrations reported across issues:
- **Zombie Process Bloat**: Multiple reports confirm unmanaged child processes persist after shell commands complete, especially after v2.3.0 upgrade.
- **Free Tier Instability**: Quota resets failing to trigger, leading to sudden 429 errors with no warning.
- **Invisible Session State Changes**: Deleting a working directory externally causes all subsequent shell commands to fail silently.
- **Missing Feedback Loops**: No visual indication of remaining free quota or authentication state before errors occur.
- **Broken Keyboard Shortcuts**: macOS key conflicts (e.g., ⌘+Up/Down scrolls instead of switching sessions).
- **Incomplete Migration Support**: V1 config blocks like `permission` are silently ignored in v2.3.0, breaking legacy setups.
- **Hidden File Discovery Gaps**: `@` autocomplete omits tracked dotfiles on Windows, reducing usability in complex projects.

---

*Digest generated: 2026-11-17 | Source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest – 2026-11-17

---

### **1. Today's Highlights**  
The Pi ecosystem continues to mature with critical performance and stability fixes in core streaming, RPC, and session lifecycle logic. Key improvements include resolving the Codex 60-minute WebSocket limit (now auto-recovered), fixing double `session_start` emissions in RPC mode, and adding first-token latency metrics (`ttftMs`, `ttfaMs`) for better observability. These changes significantly improve reliability in long-running and embedded workflows.

---

### **2. Releases**  
*No new releases in the past 24 hours.*

---

### **3. Hot Issues**  
*(Top 10 by impact and community engagement)*

1. **[#9549] Large transcripts re-render every frame**  
   🔥 *P0 Priority* – On Windows with only 2 logical cores, large transcripts cause 100% CPU usage due to inefficient re-rendering on every resize/scroll. This is a major usability blocker for developers working with long sessions. [Issue #9549](https://github.com/earendil-works/pi/issues/9549)

2. **[#11950] Tool calls run concurrently with bash, causing race conditions**  
   🔥 *P0 Priority* – When a model issues a `bash` command followed by a `read`, the read executes before the command finishes, leading to stale or missing output. This breaks agent logic relying on sequential execution. [Issue #11950](https://github.com/earendil-works/pi/issues/11950)

3. **[#12184] Google adapters reject Gemini 4 Hydrogen’s xhigh thinking level**  
   ⚠️ Despite being advertised, selecting `xhigh` thinking level fails with a pre-request error. This undermines the value of advanced reasoning tiers in Google’s latest model. [Issue #12184](https://github.com/earendil-works/pi/issues/12184)

4. **[#12177] Gemini 4 Hydrogen xhigh support not implemented**  
   ✅ Duplicate of #12184 but explicitly requests native support in both Google adapters. High demand from users wanting full access to the model’s capabilities. [Issue #12177](https://github.com/earendil-works/pi/issues/12177)

5. **[#12096] `/login llama.cpp` connection doesn’t persist across sessions**  
   🛠️ Users must re-run `/llama` after each restart to reload models, breaking workflow continuity. A regression in persistence that affects local LLM users. [Issue #12096](https://github.com/earendil-works/pi/issues/12096)

6. **[#12248] `pi update --models` skips providers registered by built-in extensions**  
   🔄 The model refresh command ignores extensions that dynamically register providers, leading to outdated or missing model catalogs. Critical for plugin-driven ecosystems. [Issue #12248](https://github.com/earendil-works/pi/issues/12248)

7. **[#12225] Anthropic/Pi SSE readers release lock without cancelling stream**  
   🧩 A subtle but dangerous bug: releasing a reader lock doesn’t cancel the underlying HTTP response body, potentially leading to memory leaks or stalled streams. [Issue #12225](https://github.com/earendil-works/pi/issues/12225)

8. **[#12224] MCP SSE concatenates incomplete events, causing parsing errors**  
   📦 Large event chunks are buffered and rescan repeatedly, increasing latency and risk of malformed payloads. Impacts real-time agent communication. [Issue #12224](https://github.com/earendil-works/pi/issues/12224)

9. **[#12060] OpenAI Codex SSE requests fail when zstd-compressed**  
   ❌ Requests with compressed bodies get `400 Bad Request`, while uncompressed versions succeed. Affects high-throughput agents using compression. [Issue #12060](https://github.com/earendil-works/pi/issues/12060)

10. **[#12241] `pi -p` hangs indefinitely with extensions loaded**  
    💣 Even with no active MCP servers, headless mode (`-p`) never exits if any extension is loaded — a showstopper for CI/CD and automation. [Issue #12241](https://github.com/earendil-works/pi/issues/12241)

---

### **4. Key PR Progress**  
*(Top 10 impactful contributions)*

1. **[PR #12249]** Add `ttftMs` and `ttfaMs` to `AssistantMessageEventStream`  
   📊 Adds time-to-first-content and time-to-first-non-thinking-delta metrics, enabling fine-grained latency analysis. [PR #12249](https://github.com/earendil-works/pi/pull/12249)

2. **[PR #12230]** Fix duplicate `session_start` emission in RPC mode  
   🛠️ Resolves #10470: Ensures `new_session`, `switch_session`, `fork`, `clone` emit `session_start` only once per session replacement. [PR #12230](https://github.com/earendil-works/pi/pull/12230)

3. **[PR #12229]** Recover from Codex 60-minute WebSocket limit  
   🔄 Automatically reconnects when the Codex backend closes the WebSocket after 60 minutes, preventing long-running turns from failing. [PR #12229](https://github.com/earendil-works/pi/pull/12229)

4. **[PR #12236]** Capture git/npm output during interactive TUI runs  
   🖥️ Prevents terminal corruption by properly capturing child process output instead of inheriting stdin/stdout. [PR #12236](https://github.com/earendil-works/pi/pull/12236)

5. **[PR #12231]** Emit `session_start` on reload after `bindExtensions()`  
   🔄 Fixes edge case where `reload()` didn’t trigger `session_start` unless UI context was set. [PR #12231](https://github.com/earendil-works/pi/pull/12231)

6. **[PR #12232]** Stream `session_start` events in JSON print mode  
   📄 Ensures `--mode json` captures all session lifecycle events, improving auditability. [PR #12232](https://github.com/earendil-works/pi/pull/12232)

7. **[PR #12233]** Report `pi.events` handler errors like other extension errors  
   🔔 Improves error visibility by catching and reporting exceptions in event handlers. [PR #12233](https://github.com/earendil-works/pi/pull/12233)

8. **[PR #12234]** Report model fallbacks after `/resume` and in all modes  
   📢 Makes model fallback messages visible even in non-interactive contexts. [PR #12234](https://github.com/earendil-works/pi/pull/12234)

9. **[PR #11968]** Optimize fullscreen scroll frames to O(viewport)  
   🎯 Eliminates full transcript re-rendering on every wheel event; drastically reduces CPU load. [PR #11968](https://github.com/earendil-works/pi/pull/11968)

10. **[PR #12228]** Add hosted gateway worked example and pitfalls to `models.md`  
    📚 Enhances documentation with practical guidance for integrating third-party gateways like TeapotRouter. [PR #12228](https://github.com/earendil-works/pi/pull/12228)

---

### **5. Hot Discussions**  
*(Top 3 discussions grouped by theme)*

#### **Ideas & Vision**
- **[#8420] From DSH plugin ecosystem to pi: are we missing an official Web UI base?**  
  🤔 A compelling comparison between DSH’s plugin-driven UI and Pi’s minimal CLI focus. Highlights a growing need for a standardized, extensible Web UI foundation to enable richer integrations. [Discussion #8420](https://github.com/earendil-works/pi/discussions/8420)

#### **Show & Tell**
- **[#10069] Show & tell: agent-chat – peer-to-peer messaging for independent Pi agents**  
  🤖 A lightweight extension enabling direct communication between standalone Pi agents without a central orchestrator. Ideal for distributed development workflows sharing resources like Docker or DBs. [Discussion #10069](https://github.com/earendil-works/pi/discussions/10069)

#### **Q&A / Workflow**
- **[#11830] How do you juggle two live conversations? Every extra one costs a terminal tab**  
  🔄 A common pain point: switching between long-running sessions requires killing one or opening a new terminal. Users seek session isolation or multi-tab support. [Discussion #11830](https://github.com/earendil-works/pi/discussions/11830)

---

### **6. Feature Request Trends**  
Based on top Issues and Discussions, recurring themes include:

- **Enhanced observability**: Metrics like `ttftMs`, `ttfaMs`, and structured error diagnostics are increasingly requested.
- **Session resilience**: Persistent login states (`/login`), robust handling of long-running turns, and automatic recovery from limits (e.g., Codex 60-min).
- **Better tooling coordination**: Need for atomic execution (e.g., wait for `bash` before `read`) and background command execution.
- **Web UI foundation**: Strong interest in a standardized, extensible Web UI layer to unlock richer plugin experiences beyond CLI.
- **Plugin lifecycle clarity**: Consistent event emission (`session_start`, `user_bash_complete`), error handling, and state persistence across reloads.

---

### **7. Developer Pain Points**  
Recurring frustrations reported across multiple Issues:

- **CPU saturation** on large transcripts due to inefficient rendering (e.g., #9549, #9399).
- **Race conditions** in tool execution sequences (e.g., #11950).
- **Inconsistent session lifecycle behavior**, especially around `session_start`, `reload`, and `fork`.
- **Headless mode (`pi -p`) hanging** when extensions are present — a major blocker for automation.
- **Model catalog sync issues** where `pi update --models` skips provider registrations from extensions.
- **Lack of persistent state** across sessions for local LLMs (`/login llama.cpp`).
- **Poor error visibility** in event handlers and failed model fallbacks.

These points reflect a maturing platform where core infrastructure is solidifying, but developer experience in complex workflows still needs refinement.

---  
*Digest generated: 2026-11-17 | Source: [github.com/earendil-works/pi](https://github.com/earendil-works/pi)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-11-17

---

### **Today's Highlights**  
The Qwen Code team advanced core agent architecture with the integration of the event-driven kernel for headless sessions and improved session management. Key improvements include a new DingTalk adapter, enhanced Web Shell worktree parity, and critical fixes to runtime provisioning and CI stability. The community is actively engaging on high-priority issues related to CI failures, security hardening, and session resilience.

---

### **Releases**  
**v0.27.4-nightly.20261116.eb3a599ef3**  
- Added sidebar workspace filter in Web Shell for better navigation (`#17244`)  
- Introduced DingTalk adapter for managed agents (`feat(managed-agent)`)  

[GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.4-nightly.20261116.eb3a599ef3)

---

### **Hot Issues**  

| Issue | Summary & Significance | Community Reaction |
|------|------------------------|--------------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failure: Managed Agent gate — no test identified (413 comments) | Highest engagement; indicates systemic CI instability impacting release velocity |
| [#11680](https://github.com/QwenLM/qwen-code/issues/11680) | E2E Tests CI failure: no test identified (63 comments) | Critical flakiness in end-to-end validation pipeline |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | Daily dependency CVE audit failed (54 comments) | Security concern: unpatched vulnerabilities in dependencies |
| [#17045](https://github.com/QwenLM/qwen-code/issues/17045) | Land 1.0 Preview loop kernel on main (P1, 22 comments) | Foundational shift toward unified agent loop; tracked as milestone |
| [#17371](https://github.com/QwenLM/qwen-code/issues/17371) | Verify PR: track residual risks from #17185 (land-with-residual-risk) | High-severity security governance issue; ongoing risk assessment |
| [#17501](https://github.com/QwenLM/qwen-code/issues/17501) | Pinned undici dispatcher ignores `NODE_EXTRA_CA_CERTS` (3 comments) | Breaks private CA HTTPS calls — critical for enterprise deployments |
| [#17350](https://github.com/QwenLM/qwen-code/issues/17350) | Windows `run_shell_command` output padded with trailing spaces (3 comments) | Regression in v0.24.0; corrupts model input with whitespace |
| [#17258](https://github.com/QwenLM/qwen-code/issues/17258) | Subscription models: window-budgeted cap conflicts with fixed `thinking_budget` (3 comments) | Triggers validation errors during long sessions |
| [#17383](https://github.com/QwenLM/qwen-code/issues/17383) | Session stuck in `RECOVERY_BLOCKED` after create timeout (3 comments) | No user recovery path — blocks usability post-failure |
| [#17490](https://github.com/QwenLM/qwen-code/issues/17490) | E2E Test: UI state save/load fails during running turn (2 comments) | Indicates fragile state persistence in UI flows |

---

### **Key PR Progress**  

| PR | Summary & Impact | Status |
|----|------------------|--------|
| [#17514](https://github.com/QwenLM/qwen-code/pull/17514) | Scope change overview fallback to session start commit | ✅ Merged |
| [#17516](https://github.com/QwenLM/qwen-code/pull/17516) | Defer pre-admission Turns while Workspace runtime provisioning | ✅ Open (P1 fix) |
| [#17442](https://github.com/QwenLM/qwen-code/pull/17442) | Add Aone Code channel plugin with polling event-stream inbound | ✅ Open |
| [#17511](https://github.com/QwenLM/qwen-code/pull/17511) | Add GitHub as third managed channel adapter | ✅ Open |
| [#17477](https://github.com/QwenLM/qwen-code/pull/17477) | Fix async hook output delivery to model | ✅ Open |
| [#17445](https://github.com/QwenLM/qwen-code/pull/17445) | Run headless sessions on event-bus kernel by default | ✅ Open |
| [#17484](https://github.com/QwenLM/qwen-code/pull/17484) | Allow `create_sub_session` to follow up existing sub-sessions | ✅ Open |
| [#17398](https://github.com/QwenLM/qwen-code/pull/17398) | Explain background tasks via composer chips | ✅ Open |
| [#17455](https://github.com/QwenLM/qwen-code/pull/17455) | Degraded markdown images to readable chip on load failure | ✅ Open |
| [#17513](https://github.com/QwenLM/qwen-code/pull/17513) | Add qwen4-max support with effort ladder, cache TTL, image detail | ✅ Open |

---

### **Feature Request Trends**  
- **Core Agent Architecture**: Strong momentum toward unified event-driven kernel (`#17045`, `#17445`) and session lifecycle standardization.
- **Web Shell Enhancements**: Demand for intelligent UI (stateful interactions, visualizations), Codex-style worktree parity (`#17228`), and configurable root paths.
- **Channel Integration**: Expansion beyond email/DingTalk to include GitHub, Aone Code, and QQ — indicating growing need for multi-channel orchestration.
- **Developer Experience**: Focus on CLI accessibility (screen-reader support), deterministic testing, and better error messaging.
- **Security & Stability**: Rising emphasis on secure certificate handling (`NODE_EXTRA_CA_CERTS`), CI reliability, and defensive defaults.

---

### **Developer Pain Points**  
- **CI/CD Flakiness**: Persistent failures across multiple workflows (`#14724`, `#11680`, `#17490`) are disrupting development cycles and delaying merges.
- **Runtime Provisioning Failures**: Sessions stuck in `RECOVERY_BLOCKED` or timing out before runtime readiness (`#17383`, `#17516`) hinder user experience.
- **Regression Bugs**: Long-standing issues like Windows shell output padding (`#17350`) and token budget conflicts (`#17258`) persist despite active development.
- **Security Gaps**: Unpatched dependency CVEs (`#13078`) and bypasses in certificate verification (`#17501`) raise concerns for production use.
- **Tooling Limitations**: Async hook output not reaching model (`#17477`), and inconsistent behavior in SDK cancellation (`#17496`) impact extensibility.

---

*Digest generated on 2026-11-17 from [Qwen Code GitHub repo](https://github.com/QwenLM/qwen-code).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*