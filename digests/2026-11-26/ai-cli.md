# AI CLI 工具社区动态日报 2026-11-26

> 生成时间: 2026-11-26 04:19 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# **跨工具 AI CLI 生态系统对比报告**  
*生成时间：2026-11-26 | 面向技术决策者与开发者*

---

### **1. 生态概览**

截至2026年末，AI CLI 生态系统呈现出快速迭代、专业化程度加深以及对可靠性、安全性与跨平台一致性需求持续增长的特征。各类工具正沿着三大核心方向分化：**核心模型集成**（如 OpenAI、Anthropic、Google Gemini）、**智能体编排成熟度**，以及**开发者控制力**（会话管理、工具链、配置能力）。尽管代码生成与智能体执行等基础功能已趋于成熟，但社区反馈显示，开发者关注点正转向**可预测性**、**可观测性**与**企业级就绪状态**。最活跃的工具——Claude Code、OpenAI Codex 与 Pi——在智能体智能与工作流自定义方面不断突破边界，而 Qwen Code 与 OpenCode 等新入局者则凭借性能提升与开源对齐策略迅速获得关注。

---

### **2. 活跃度对比**

| 工具 | 热门问题 (#) | 关键 PR 合并 (#) | 讨论 (#) | 发布状态 |
|------|----------------|--------------------|------------------|----------------|
| **Claude Code** | 10 | 2 | N/A | 无新版本发布 |
| **OpenAI Codex** | 10 | 10 | 9 | `rust-v0.174.0-alpha.6` 已发布 |
| **Gemini CLI** | 10 | 10 | N/A | 无新版本发布 |
| **GitHub Copilot CLI** | 10 | 0 | N/A | v1.0.117 已发布 |
| **OpenCode** | 10 | 10 | N/A | v2.4.2 已发布 |
| **Pi** | 10 | 10 | 3 | v1.6.1 已发布 |
| **Qwen Code** | 10 | 10 | N/A | v1.0.0-preview.2 已发布 |

> ✅ *备注*：  
> - OpenAI Codex 与 Pi 在技术参与度上领先，高质量的 PR 聚焦于核心用户体验、输入处理与会话稳定性。  
> - OpenCode、Qwen Code 与 Gemini CLI 展现出强劲的内部推进力，虽无公开发布，但已合并多项修复。  
> - Claude Code 缺乏近期的 PR 活动，与其高问题数量形成反差，暗示积压压力显著。  
> - GitHub Copilot CLI 虽有稳定版本发布，但 PR 活动极少，可能处于功能冻结或发布后稳定阶段。

---

### **3. 共享功能方向**

在所有主流工具中，以下主题成为社区最高优先级的需求：

| 要求 | 涉及工具 | 具体需求 |
|------------|----------------|----------------|
| **会话与状态持久化** | 所有（Claude Code、Codex、Gemini、Copilot、OpenCode、Pi、Qwen） | 崩溃后恢复、重启时续传、远程控制同步、稳定的云会话、避免卡死 |
| **多账号/工作区管理** | Claude Code、GitHub Copilot、OpenCode、Qwen Code | 配置文件切换、项目上下文隔离、多根目录支持（`*.code-workspace`） |
| **智能体智能与自主性** | Gemini、Pi、OpenCode、Qwen、Copilot | 主动调用技能、更优的决策模型、子智能体协调、目标追踪 |
| **安全与防护控制** | Gemini、OpenCode、Pi、Qwen、Copilot | 防止破坏性命令（`git reset --force`、`rm -rf`）、OAuth token 安全绑定、Shell 权限强制 |
| **透明性与诊断能力** | 所有工具 | 每步操作的 token 成本拆解、结构化错误元数据、`responseId`、`thought_signature`、退出码清晰化 |
| **配置可靠性** | Gemini、Copilot、OpenCode、Qwen | 在 `settings.json`、受信工作区与环境变量间行为一致 |

> 🔍 *洞察*：这些共性需求反映出生态日趋成熟，开发者期待的是**可预测、可审计、可信赖的自动化**，而不仅是快速生成代码。

---

### **4. 差异化分析**

| 工具 | 功能聚焦 | 目标用户 | 技术路径 |
|------|---------------|--------------|--------------------|
| **Claude Code** | 深度定制、多账号工作流、开源化 | 高级用户、团队、企业开发者 | 强调透明性；全面开源计划正在进行中 |
| **OpenAI Codex** | TUI 稳定性、跨平台一致性、技能发现 | Linux/macOS 高级用户、智能体开发者 | 重点打磨 UI/UX 与输入处理 |
| **Gemini CLI** | 智能体可靠性、AST感知工具、安全加固 | DevOps、安全关键场景 | 强调状态追踪、防止 SSRF 攻击 |
| **GitHub Copilot CLI** | 模型透明性、插件控制、企业策略支持 | CI/CD 流水线、混合云部署 | 通过清单显式暴露工具；融合层级可见性 |
| **OpenCode** | 免费版可用性、本地模型安全、图形界面友好 | 独立开发者、开源贡献者 | 符合 WCAG 标准的主题、沙箱执行机制 |
| **Pi** | 决策模型编排、跨提供商一致性 | 高级智能体、可观测性导向团队 | `models.classify()` API、OSC 7577 恢复协议 |
| **Qwen Code** | 高上下文处理、多模态输入、CI/CD 稳定性 | 大规模代码库、研发、多媒体项目 | 1M 上下文窗口、实验性测试基础设施 |

> 🎯 *差异化亮点*：  
> - **Pi** 凭借**决策模型集成**与**结构化响应追踪**脱颖而出，定位为元智能体编排器。  
> - **Qwen Code** 在**上下文规模**与**多模态支持**方面领先，瞄准下一代 LLM 应用。  
> - **OpenCode** 重视**可访问性与免费版公平性**，契合伦理与包容性开发理念。

---

### **5. 社区活力与成熟度**

| 指标 | 最活跃工具 | 观察结果 |
|--------|-------------------|------------|
| **问题数量** | OpenCode、Claude Code、Qwen Code | 高活跃度反映未解决的痛点仍存 |
| **PR 质量与速度** | OpenAI Codex、Pi、Qwen Code | 快速精准修复，体现成熟工程实践 |
| **发布节奏** | OpenCode、Pi、Qwen Code、Codex | 频繁的小版本更新，体现持续交付文化 |
| **社区深度** | OpenAI Codex、Pi、GitHub Copilot | 活跃讨论系统设计、未来功能与集成方案 |
| **积压压力** | Claude Code、Gemini CLI | 问题数量高但 PR 流出低——存在停滞风险 |

> ⚠️ *成熟度信号*：  
> - **OpenAI Codex** 与 **Pi** 成熟度最高：问题/PR 比例均衡，讨论深入，架构方向清晰。  
> - **Claude Code** 社区需求旺盛但交付滞后——若不匹配更快的发布周期，恐面临倦怠风险。  
> - **Qwen Code** 内部推进迅猛，但持续存在 CI 不稳定问题——可能影响可靠性信任度。

---

### **6. 趋势信号**

2026年11月的社区反馈揭示了塑造未来 AI CLI 工具发展的五大行业趋势：

1. **从“快速生成”转向“安全生成”**  
   > 对**破坏性操作防护**、**按 token 粒度的成本可见性**、**安全执行沙箱**的需求持续上升。无法强化这些能力的工具将在生产环境中失去信誉。

2. **智能体编排已成为核心竞争力**  
   > 用户希望智能体能**自主管理目标**、**主动调用工具**、**准确上报状态**，而不仅仅是响应指令。这推动了对 `responseId`、`reasoning_effort`、`thought_signature` 的强烈需求。

3. **跨提供商互操作性至关重要**  
   > 在 OpenAI、Anthropic 与 Bedrock 之间无缝切换而不丢失上下文或触发静默失败，是首要诉求。**Pi** 等工具凭借统一 API 与结构化元数据在此领域领先。

4. **免费版可用性即信任指标**  
   > 持续出现的“使用超限”错误（OpenCode #59387）与不明原因的速率限制正在侵蚀信任。透明、可预测的免费层已成为竞争性差异化要素。

5. **本地+云端混合工作流已成主流**  
   > 对**本地模型推理**、**自托管服务器**、**离线会话持久化**（Pi、Copilot、OpenCode）的支持，反映了向**混合部署模式**的转变——尤其在受监管行业尤为明显。

> 💡 **开发者价值参考**：  
> - **高价值工具**将提供**可预测的状态**、**清晰的诊断信息**、**安全默认设置**与**可扩展架构**。  
> - **低价值工具**即便代码生成迅速，若存在**静默失败**、**配置不一致**与**无恢复路径**，终将成为长期维护负担。

---

### ✅ **给技术负责人的建议**

应优先选择具备以下特性的工具：
- 强制**结构化响应**与**透明遥测**
- 提供**健壮的会话恢复**与**配置一致性**
- 支持**跨提供商互操作性**与**企业策略**
- 拥有**活跃且高质量的 PR** 与**社区驱动的设计**

避免使用 CI 不稳定、会话异常崩溃或错误提示模糊的工具——这些是长期维护隐患。未来属于**可观测、可靠、安全**的 AI CLI 堆栈，而非仅强大者。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

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

# **Claude Code 社区简报 — 2026-11-26**

---

### **1. 今日亮点**  
Claude Code 社区持续推动深度定制化与可靠性提升，对多账户支持和会话稳定性的需求显著增长。影响 macOS 睡眠处理、远程控制同步以及模型行为一致性的关键缺陷引发紧急关注，同时全开源 CLI 工具链的势头日益增强。

---

### **2. 发布情况**  
*过去 24 小时内未检测到新版本发布。*

---

### **3. 热门问题**  

| 问题 # | 标题 | 重要性 | 社区反应 |
|--------|-------|----------------|--------------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | 在桌面客户端中添加多 Claude 账户管理功能 | 高需求功能，适用于需在个人/工作/专业场景间切换的进阶用户；对团队协作和安全隔离至关重要。 | 256 条评论，1.1K 👍 – *最受欢迎的功能请求* |
| [#96326](https://github.com/anthropics/claude-code/issues/96326) | 尽管设置了日语规则，回复仍漂移至英文 | 破坏代理工作流中的本地化完整性；削弱非英语开发者对语言保真度的信任。 | 26 条评论，42 👍 – *高可见度的反复出现问题* |
| [#100114](https://github.com/anthropics/claude-code/issues/100114) | Windows 客户端重启后远程控制无法恢复 | 导致跨设备上下文丢失；影响依赖实时协作的混合开发流程。 | 18 条评论，11 👍 – *紧急的用户体验缺陷* |
| [#112264](https://github.com/anthropics/claude-code/issues/112264) | 代码模式：事件随机数每进程重置 → 提示缓存重写 | 严重影响长时间会话效率；导致冗余 API 调用并增加成本。 | 5 条评论，0 👍 – *深层技术影响，但曝光度低* |
| [#107077](https://github.com/anthropics/claude-code/issues/107077) | Cowork 云会话以“已弃用模式”启动 | 阻止插件钩子执行，破坏自动化流水线；环境间行为不一致。 | 15 条评论，0 👍 – *对插件生态至关重要* |
| [#102742](https://github.com/anthropics/claude-code/issues/102742) | 移除 MultiEdit 后无批量编辑工具 | 强制顺序编辑，使操作轮次增加约 N 倍；在大规模重构中严重损害生产力。 | 1 条评论，0 👍 – *无声但影响深远的回归问题* |
| [#112381](https://github.com/anthropics/claude-code/issues/112381) | 当设置 CLAUDE_CONFIG_DIR 时，重命名空闲会话失败并返回 ENOENT | 破坏通过环境变量实现的工作流自动化；暴露核心逻辑中的路径解析缺陷。 | 1 条评论，0 👍 – *范围窄但严重边缘案例* |
| [#112366](https://github.com/anthropics/claude-code/issues/112366) | macOS 超时包含睡眠时间 | 扭曲执行时序，导致长时间构建或调试过程中产生误判超时。 | 1 条评论，0 👍 – *平台特异性性能问题* |
| [#112376](https://github.com/anthropics/claude-code/issues/112376) | Fable 5.2 忽略横幅页上的指令 | 突显高负载下的模型幻觉风险；引发对提示保真度的担忧。 | 1 条评论，0 👍 – *生活质量警示信号* |
| [#112374](https://github.com/anthropics/claude-code/issues/112374) | 并行代理导致未经测试的累积变更 | 并发代理工作流中存在意外代码修改的风险；威胁代码安全性。 | 1 条评论，0 👍 – *高级用例中的新兴风险* |

---

### **4. 关键 PR 进展**

| PR # | 标题 | 描述 |
|------|-------|-------------|
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | 完全开源 Claude Code | 从 `cli.js.map` 中提取 1,906 个 TS 文件，新增 Bun 打包配置，并成功实现 `--version` / `--help` 构建。向透明化和社区贡献迈出关键一步。 |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: 开源 Claude Code ✨ | 整合此前开源努力（关闭 #59, #456, #2846 等），为公开 CI/CD 和可审计性奠定基础。 |

> 🔗 *这两项 PR 是持续推进 CLI 堆栈完全开源计划的一部分——预计将解锁开发者驱动的创新与安全审计能力。*

---

### **5. 热门讨论**  
*数据源中未提供讨论帖。*

---

### **6. 功能请求趋势**  
来自社区反馈的几大新兴方向：

- **多账户管理**：用户持续呼吁在桌面客户端内实现配置文件切换（问题 #18435）。
- **会话与状态持久化**：远程控制恢复、稳定的云会话状态、可靠的归档同步是反复出现的痛点。
- **插件与工具扩展性**：请求支持插件钩子清除旧结果（`session.compact`）、更优的错误处理机制，以及对工具调用的显式模型追踪。
- **语言与本地化保真度**：确保模型严格遵循用户定义的语言设置（如仅输出日语）。
- **性能优化**：减少不必要的缓存失效、降低 git 轮询中的 CPU 占用（问题 #112392），以及高效的批量编辑。

---

### **7. 开发者痛点**  
开发者反复报告的困扰：

- **模型行为不可预测**：指令被忽略（例如 #112376, #112387），尤其在高负载或复杂任务下。
- **工具链回归问题**：移除 `MultiEdit` 但未提供替代方案，阻碍高效批量编辑（#102742）。
- **平台相关缺陷**：macOS 睡眠计时器问题、Windows 会话恢复失败、Linux 文件命名限制（如 `.md` 块）。
- **权限与认证摩擦**：即使设置了“始终允许”，仍频繁弹出权限提示（#112394）。
- **隐藏的成本触发点**：即使交互式拒绝了密钥，仍可能因 `claude -p` 导致意外计费（#112377）。

> 💡 *这些模式表明未来版本亟需更强的测试覆盖、更清晰的用户体验信号，以及更好的跨平台一致性。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区简报 — 2026-11-26**

---

### **1. 今日亮点**  
Codex 团队发布了新的 `rust-v0.174.0-alpha.6` 更新，标志着核心 Rust 引擎持续优化。与此同时，Windows 和 macOS 桌面应用中出现的严重回归问题——特别是会话持久性、UI 状态丢失和启动卡死——成为社区关注焦点，过去 24 小时内报告了多个高影响问题。大量提交的 PR 集中在 TUI 稳定性、输入处理和会话容错方面，反映出对这些痛点的紧急修复努力。

---

### **2. 发布记录**  
- **`rust-v0.174.0-alpha.6`**  
  本次 alpha 版本包含对 Rust 运行时的内部优化，尤其聚焦于 TUI 与 CLI 层的内存管理及线程同步。尽管未记录公开功能更新，但属于持续提升高负载场景（如大文件搜索、并发代理执行）下性能稳定性的努力之一。  
  🔗 [GitHub 发布页面](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.6)

---

### **3. 热门问题**  
*(按评论数与严重性排序的前 10 项)*

| 问题 | 摘要与影响 | 社区反应 |
|------|------------------|--------------------|
| [#62943](https://github.com/openai/codex/issues/62943) | **Windows：11月21日更新后破坏会话权限与最大推理努力设置** – 用户在开启新对话后失去关键配置控制权。 | 34 条评论，17 个 👍 – 高优先级；影响 Windows 上的 Pro/Plus 用户。 |
| [#63783](https://github.com/openai/codex/issues/63783) | **Windows ARM64：“缺少作用域实例”启动崩溃** – 导致基于 Apple Silicon 的 Windows 设备无法使用。 | 10 条评论，4 个 👍 – 对 ARM64 采用者至关重要；尚未解决。 |
| [#63913](https://github.com/openai/codex/issues/63913) | **Windows：更新至 26.1120.6357.0 后每次启动均卡死** – 完全阻断用户访问。 | 3 条评论，0 个 👍 – 被视为构建质量退化。 |
| [#64073](https://github.com/openai/codex/issues/64073) | **Windows：附加 18 张 OneDrive 图片后冻结，因 512 MiB SQLite 限制** – 会话序列化静默失败。 | 2 条评论，0 个 👍 – 突显本地存储的扩展性瓶颈。 |
| [#62234](https://github.com/openai/codex/issues/62234) | **macOS：底部面板设置消失；终端强制位于右侧** – 更新后的用户体验退化。 | 25 条评论，25 个 👍 – 用户强烈不满；广泛报告。 |
| [#63705](https://github.com/openai/codex/issues/63705) | **CLI 宠物在 tmux/Ghostty 中闪烁** – 动画帧切换时产生视觉伪影。 | 5 条评论，0 个 👍 – 视觉瑕疵但对高级用户造成干扰。 |
| [#63306](https://github.com/openai/codex/issues/63306) | **技能未显示在 `/` 菜单中；必须使用 `$` 前缀** – 打破可发现性与工作流逻辑。 | 4 条评论，1 个 👍 – 影响以技能为核心的流程。 |
| [#49162](https://github.com/openai/codex/issues/49162) | **Linux：自 0.158.0 起 TUI 中中键粘贴失效** – 选中文本虽确认复制却未粘贴。 | 9 条评论，6 个 👍 – 长期存在的回归问题，影响 Linux 开发者。 |
| [#60484](https://github.com/openai/codex/issues/60484) | **Windows：桌面应用在 WSL PATH 探测时永久卡死（无超时机制）** – 通过无界同步阻塞启动。 | 5 条评论，2 个 👍 – 显示系统集成中的错误处理缺陷。 |
| [#63869](https://github.com/openai/codex/issues/63869) | **MacBook Pro：主屏幕加载后“ChatGPT 遇到问题”反复闪现** – 间歇性失败影响可用性。 | 4 条评论，1 个 👍 – 多版本可复现；对可靠性提出担忧。 |

---

### **4. 关键 PR 进展**  
*(前 10 项已合并的 PR，重点修复关键漏洞与用户体验改进)*

| PR | 摘要 | 影响 |
|----|--------|--------|
| [#64071](https://github.com/openai/codex/pull/64071) | 修复 TUI 图片附件路径相对于文件搜索根目录的问题 | 避免工作目录 ≠ 搜索根目录时图片加载失败。 |
| [#64069](https://github.com/openai/codex/pull/64069) | 停止 tmux 中 Kitty 宠物闪烁 | 解决动画过程中的视觉伪影，改善终端体验。 |
| [#64067](https://github.com/openai/codex/pull/64067) | 修复流式预览中代码块跟踪问题 | 防止误判散文内容与表格解析错误。 |
| [#64058](https://github.com/openai/codex/pull/64058) | 修正 Unicode 模糊匹配与斜杠弹窗激活逻辑 | 确保希腊西格玛变体匹配，并使弹窗逻辑与过滤器一致。 |
| [#64055](https://github.com/openai/codex/pull/64055) | 为 TUI 侧边栏添加鼠标隐藏/恢复控制 | 解决仅键盘导航的死胡同，恢复可用性。 |
| [#64054](https://github.com/openai/codex/pull/64054) | 重构侧边栏输入处理逻辑 | 提升可维护性与事件路由清晰度。 |
| [#64053](https://github.com/openai/codex/pull/64053) | 将侧边栏输入路由提取至专用模块 | 支持更好测试与未来可扩展性。 |
| [#64026](https://github.com/openai/codex/pull/64026) | 在无目标时准确显示子代理等待状态 | 明确边缘情况（如中断等待）下的 UI 反馈。 |
| [#64025](https://github.com/openai/codex/pull/64025) | 根据焦点/输入上下文动态显示命令中心快捷键 | 减少聚焦/非聚焦状态之间的混淆。 |
| [#64018](https://github.com/openai/codex/pull/64018) | 在 TUI 流式生成过程中保持中断指引可见 | 防止用户在生成中途错过 `Ctrl+C` 提示。 |

---

### **5. 热门讨论**  
*(按类别分组)*

#### **展示与分享（生态工具与工作流）**  
- [#16329](https://github.com/openai/codex/discussions/16329): *Awesome Codex CLI* – 整理了 150+ 生态工具列表（子代理、技能、MCP 服务器），是发现与集成外部工具的宝贵资源。  
- [#63395](https://github.com/openai/codex/discussions/63395): *Codex Desk* – 本地浏览器工作台，用于检索历史回答并继续对话。非常适合知识复用。  
- [#63921](https://github.com/openai/codex/discussions/63921): *浏览器游戏的测试工作流* – 使用 Codex 本地测试并共享游戏导出的逐步指南。  
- [#58220](https://github.com/openai/codex/discussions/58220): *recall* – 使 Codex 能利用 Claude Code 的记忆文件（基于 Markdown），实现跨 AI 工具的记忆衔接。  

#### **创意提案（未来功能与系统设计）**  
- [#63915](https://github.com/openai/codex/discussions/63915): *通过闲置 GPU 时间赚取 Codex 积分* – 提议社区计算模型，空闲 GPU 参与推理并获得积分。  
- [#63850](https://github.com/openai/codex/discussions/63850): *暴露 Unix 信号终止信息（SIGKILL/SIGTERM）* – 请求在 shell 工具结果中区分自愿退出码（137/143）与强制终止，对代理可靠性至关重要。  

#### **问答（技术澄清）**  
- [#22829](https://github.com/openai/codex/discussions/22829): *为何 VS Code 插件显示所有历史会话？* – 突显项目上下文会话隔离的需求。  
- [#56409](https://github.com/openai/codex/discussions/56409): *请求 `exec_command` / `write_stdin` 行为的文档说明* – 开发者寻求进程捕获、终止与持续时间保证的正式规范。  

---

### **6. 功能需求趋势**  
最集中的功能请求包括：  
- **外部自动化与代理集成**：多位用户（如 #31783）希望将目标控制暴露于 TUI 外部，以支持脚本化与代理工作流。  
- **会话与状态持久化**：会话丢失、冻结与元数据损坏等持续问题，凸显对更健壮恢复机制的需求。  
- **跨平台一致性**：Linux（中键粘贴）、macOS（UI 重置）、Windows（启动卡死）的重复问题表明亟需统一的跨平台质量保障。  
- **增强的可见性与诊断能力**：对后台进程、信号终止与会话查找失败提供更清晰反馈的请求，反映对更高可观测性的渴求。  

---

### **7. 开发者痛点**  
反复出现的困扰包括：  
- **会话损坏与丢失**：尤其在更新或崩溃后（如 #62943、#63913、#64073）。  
- **输入处理不佳**：鼠标选择失败（Linux）、键盘布局问题（西里尔字母）、Alt+数字键盘无响应（Windows）。  
- **UI 行为不一致**：侧边栏隐藏、终端位置、命令菜单可访问性意外中断。  
- **文档缺失**：核心 API（如 `exec_command`、`write_stdin`、退出码语义）缺乏明确规范。  
- **不可预测的启动行为**：WSL 探测卡死（#60484）、无限循环、无声崩溃（如 #63783）。  

这些问题共同反映出 Codex 生态系统对更高稳定性、透明度与开发者优先设计的迫切需求。

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

**GitHub Copilot CLI 社区简报 — 2026-11-26**

---

### **1. 今日亮点**  
最新发布的 Copilot CLI 版本（v1.0.117）增强了模型选择的透明度，对即将淘汰的模型发出警告，并修复了关键的会话恢复问题。主要改进包括：更妥善处理扩展审批、提升 ACP 客户端的错误提示信息，以及支持自定义代理中显式暴露工具——进一步提升了自动化工作流中的控制力与安全性。

---

### **2. 发布记录**  
**v1.0.117-2**、**v1.0.117-1** 和 **v1.0.117-0**（2026-11-25）：  
- ✅ **已修复**：`copilot help extensions` 现在正确反映审批逻辑；不再误报插件加载行为。  
- ✅ **已修复**：内置搜索不再因格式错误的标志（如 `line`）而失败。  
- ✅ **已修复**：当固定模型不可用时，不再静默切换提供者——现在会抛出明确错误。  
- ✅ **已修复**：背景代理在 CLI 重启后可正确恢复。  
- ✅ **新增功能**：为自定义代理提供显式工具暴露 API，可通过清单文件主动启用工具。  
- ✅ **优化**：`/model` 选择器现显示服务通知，并标记已弃用的模型。  

> 🔗 [GitHub 发布页面](https://github.com/github/copilot-cli/releases)

---

### **3. 热门问题**  
| 问题 # | 标题 | 重要性说明 | 社区反馈 |
|--------|-------|----------------|--------------------|
| [#5323](https://github.com/github/copilot-cli/issues/5323) | 添加设置以禁用代理检查点引用（`refs/agents/*`） | 防止自动生成的代理提交污染 git 历史；对 CI/CD 及仓库整洁性至关重要。 | 👍 6, 8 条评论 |
| [#1826](https://github.com/github/copilot-cli/issues/1826) | 通过 `.code-workspace` 支持多根工作区 | 为复杂 IDE 项目提供完整上下文；当前被 CLI 忽略。 | 👍 22, 6 条评论 |
| [#2073](https://github.com/github/copilot-cli/issues/2073) | “由于临时 API 错误请求失败” 消息频繁刷屏 | 频繁重试循环干扰用户体验；影响生产流水线可靠性。 | 👍 13, 6 条评论 |
| [#4755](https://github.com/github/copilot-cli/issues/4755) | 会话在回合结束后永久卡死 | 严重稳定性问题：会话变得无响应，需强制终止进程。 | 👍 0, 5 条评论 |
| [#2753](https://github.com/github/copilot-cli/issues/2753) | `<available_skills>` 中缺失插件技能 | 尽管 UI 上可见，但代理提示中功能失效；影响插件生态。 | 👍 1, 5 条评论 |
| [#5354](https://github.com/github/copilot-cli/issues/5354) | ACP 未通告 Copilot Fusion 层级配置 | 阻碍第三方客户端（如 T3 Code）展示 Fusion 选项。 | 👍 11, 3 条评论 |
| [#5440](https://github.com/github/copilot-cli/issues/5440) | Plugins 1.0 中忽略 `.instructions.md` 与 `applyTo` 前置元数据 | 破坏声明式插件配置；违背预期行为。 | 👍 1, 2 条评论 |
| [#5491](https://github.com/github/copilot-cli/issues/5491) | 大型市场下载阻塞进度且忽略取消操作 | 导致长时间挂起和孤立仓库；企业环境中体验极差。 | 👍 0, 1 条评论 |
| [#5581](https://github.com/github/copilot-cli/issues/5581) | Copilot Fusion 忽略本地 OpenAI 兼容服务器 | 阻碍混合部署模式；削弱自托管使用场景。 | 👍 0, 1 条评论 |
| [#5571](https://github.com/github/copilot-cli/issues/5571) | 更新程序在仅 GHE.com 登录时失败 | 无 token 访问权限的企业账户无法更新；破坏维护流程。 | 👍 0, 1 条评论 |

---

### **4. 关键 PR 进展**  
*过去 24 小时内无新的合并拉取请求。*

---

### **5. 热门讨论**  
*数据源中未提供讨论内容。*

---

### **6. 功能请求趋势**  
社区正逐步聚焦于以下几个关键方向：  
- **上下文与工作区管理**：多根工作区支持（问题 #1826）、提示历史范围控制（#5576），以及改进上下文记忆治理（如禁用 `refs/agents/*`）。  
- **模型与代理控制**：持久化自动飞行限制设置（#4454）、Fusion 路由透明度（#5354），以及动态层级支持（#5298）。  
- **安全与策略执行**：对托管插件及其扩展进行预审批（#5575）、细粒度工具权限控制，以及审批中更安全的 shell 命令呈现方式（#4335）。  
- **插件生态系统成熟**：可靠的插件发现机制、模式验证，以及对格式错误清单的优雅降级处理（#5582）。

---

### **7. 开发者痛点**  
反复出现的困扰包括：  
- **会话稳定性**：回合结束后永久卡死（#4755），远程会话切换期间内存泄漏（#5577）。  
- **行为不可预测**：静默失败（如未预警地切换模型）、插件集成不完整（#2753），以及配置被忽略（如插件中的 `applyTo`）。  
- **企业可用性问题**：对有效路径的内容策略阻断（如 Perforce 通配符，#5521）、沙箱限制（#5580），以及 GHE 登录问题（#5571）。  
- **工具与钩子可靠性**：`userPromptTransformed` 钩子在引导消息中被跳过（#4640）、`toolCall.title` 隐藏实际命令（#4335），以及 `--max-autopilot-continues` 无法持久化（#4454）。  

这些问题反映出对可预测、安全且适合企业环境的自动化系统日益增长的需求，尤其是在混合云/自托管环境中。

---  
*简报生成时间：2026-11-26 | 数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

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

# Pi 社区简报 – 2026-11-26

---

### **1. 今日亮点**

Pi 生态系统迎来 v1.6.1 版本发布，首次在 codemode 中集成**决策模型**，通过 `models.classify()` 实现对 GitHub Copilot 的 `gpt-6-luna-decisions` 和 Radius 模型的直接调用，可无缝嵌入代码生成工作流，并支持完整的 `responseId` 追踪。这标志着向可定制、可审计的 AI 推理链迈出关键一步。与此同时，一系列关键修复解决了 Windows 终端处理、OpenAI/Anthropic SSE 解析以及 Bedrock Kimi K3.1 努力度配置等长期存在的问题，显著提升了跨环境的稳定性。

---

### **2. 发布记录**

#### **v1.6.1（最新版）**
- **新功能**：`models.classify()` 现已支持来自 GitHub Copilot（`gpt-6-luna-decisions`）和 Radius 的决策模型，返回结构化结果并包含 `responseId`。
  🔗 [分类文档](https://github.com/earendil-works/pi/blob/v1.6.1/packages/coding-agent/docs/codemode.md)
- 修复项：
  - Anthropic SSE 解析器中对 CRLF 行终止符处理的问题 (#10390)
  - 切换工具或努力等级时，GitHub Copilot 提示缓存未被保留的问题 (#12316, #12539)
  - Windows 上 Pi 崩溃后鼠标报告损坏的问题 (#12133, #12564)

---

### **3. 热门问题**

| 问题 | 概要与重要性 | 社区反馈 |
|------|------------------------|--------------------|
| [#10956](https://github.com/earendil-works/pi/issues/10956) | `cacheWarming: "idle"` 因上下文变更而静默失败；尽管有 507+ 条 `cache_warming_decision` 日志，但未观察到预热事件。影响会话效率。 | 19 条评论，5 个点赞 – 高关注度，影响长时间运行会话。 |
| [#12464](https://github.com/earendil-works/pi/issues/12464) | OpenAI Responses API 仍发送不必要的 `medium effort` + `configuration_update`，导致工具推理被抑制。P0 级别。 | 10 条评论 – 用户依赖精确请求控制时反复出现痛点。 |
| [#12462](https://github.com/earendil-works/pi/issues/12462) | Bedrock Kimi K3.1 无法选择 `max` 推理努力度，因缺少 `reasoning_effort` 字段。限制性能调优。 | 3 条评论 – 对生产环境中使用 Kimi 模型的用户而言极为紧急。 |
| [#12483](https://github.com/earendil-works/pi/issues/12483) | 自动压缩失败触发无限重试循环，破坏对话连续性。 | 2 条评论 – 被标记为 P0；存在资源无界消耗风险。 |
| [#12564](https://github.com/earendil-works/pi/issues/12564) | Pi 运行中崩溃后，Windows 上的 Kitty 键盘报告仍处于激活状态，导致终端不可用。为 #12133 的后续问题。 | 2 条评论 – 严重影响 Windows 开发者体验。 |
| [#12414](https://github.com/earendil-works/pi/issues/12414) | `pi-durable` 对截断的工具调用返回 `done`，但无输出或结果，造成状态误判。 | 3 条评论 – 影响持久化工作流中的自动化与错误处理。 |
| [#12420](https://github.com/earendil-works/pi/issues/12420) | 在聊天中途从 Claude 切换至 Gemini 4 时，出现 `Function call is missing thought_signature`，阻塞工具使用。 | 3 条评论 – 突显不同提供方间的一致性问题。 |
| [#12550](https://github.com/earendil-works/pi/issues/12550) | 项目本地技能排除写入了路径和 `-path` 两项条目，污染配置。 | 2 条评论 – 细微但有害，影响版本控制项目。 |
| [#12318](https://github.com/earendil-works/pi/issues/12318) | Claude Team/Enterprise 账号访问 `/login` 失败，提示“Unknown scope”。阻碍团队用户登录。 | 5 条评论 – 安全与企业级影响；需修复 OAuth 范围问题。 |
| [#11071](https://github.com/earendil-works/pi/issues/11071) | `AssistantMessage` 缺乏结构化失败元数据，阻碍重试逻辑与诊断。 | 8 条评论 – 对生产系统可观测性与容错至关重要。 |

---

### **4. 关键 PR 进展**

| PR | 概要 | 状态 |
|----|--------|--------|
| [#12557](https://github.com/earendil-works/pi/pull/12557) | 实现 OSC 7577 程序恢复协议：带有 `OSC7577_TOKEN` 的终端可在重启后重新连接。 | ✅ 已关闭 |
| [#12562](https://github.com/earendil-works/pi/pull/12562) | 添加 `Harness.deleteConversations(ids, context)`，用于永久删除对话及所属子代理。 | ✅ 已开放（P0） |
| [#12558](https://github.com/earendil-works/pi/pull/12558) | 恢复文档说明为何 OpenAI 模型不支持提示缓存预热。 | ✅ 已关闭 |
| [#12505](https://github.com/earendil-works/pi/pull/12505) | 通过保留 Copilot 的模糊推理增量，修复 `openai-completions` 中 `reasoning_opaque` 的重放问题。 | ✅ 已关闭 |
| [#12555](https://github.com/earendil-works/pi/pull/12555) | 根据已知 Converse 限制，停止向 Bedrock Kimi K3 模型发送早期推理内容。 | ✅ 已关闭 |
| [#12539](https://github.com/earendil-works/pi/pull/12539) | 确保 GitHub Copilot 在切换工具或努力等级时，提示缓存得以保留。 | ✅ 已关闭 |
| [#12556](https://github.com/earendil-works/pi/pull/12556) | 草案：在遥测与归因中尊重 `DO_NOT_TRACK=1`。 | ⚠️ 已开放（讨论中） |
| [#12543](https://github.com/earendil-works/pi/pull/12543) | 为 coding agent 添加对 `AGENTS.local.md` 的支持，加载顺序位于 `override` 之后、`AGENTS.md` 之前。 | ✅ 已关闭 |
| [#12554](https://github.com/earendil-works/pi/pull/12554) | 文档说明在 Pi 被强制终止后（`kill -9`）如何恢复终端。 | ✅ 已关闭 |
| [#12551](https://github.com/earendil-works/pi/pull/12551) | 通过发送正确的 `flat_reasoning_effort` 字段，修复 Kimi K3.1 上 `high` 努力度的钳制问题。 | ✅ 已关闭 |

---

### **5. 热门讨论**

#### **创意提案**
- [#12528](https://github.com/earendil-works/pi/discussions/12528): **原生 VS Code Agent Harness 集成**  
  提议将 Pi 与 Claude Code、Codex 及 GitHub Copilot 一同集成进 VS Code 的统一代理界面。是实现跨框架互操作性的重大一步。

- [#12530](https://github.com/earendil-works/pi/discussions/12530): **预发送 PII 清理 + 动态上下文尺寸调整**  
  建议在本地模型推理前加入 PII 清理预处理，并根据可用内存动态调整 `contextWindow`（例如在 MacBook 上运行 27B 模型时）。

#### **展示与分享**
- [#12559](https://github.com/earendil-works/pi/discussions/12559): **local-decider：基于 GPU 的工具调用防护机制**  
  一个扩展，可在你自己的 GPU 上运行轻量级决策模型，对每个工具调用进行审查——防止破坏性操作如 `rm -rf` 或强制推送。

---

### **6. 功能需求趋势**

- **决策模型编排**：对 *外部* 决策模型（如 `gpt-6-luna-decisions`）的需求日益增长，用于控制工具调用，实现更安全、可审计的 AI 行为。
- **精细化努力度与工具控制**：用户希望在切换模型、工具或努力等级时获得一致且可预测的行为表现，尤其在 Copilot 与 Bedrock 平台上。
- **持久会话管理**：亟需改进删除语义（`deleteConversations`）、恢复协议（OSC 7577）以及稳定的空闲缓存机制。
- **本地模型优化**：对动态上下文尺寸、PII 清理及改进本地模型部署指南（如将 NVIDIA RTX 整合进 `llama.cpp` 文档）兴趣浓厚。
- **跨提供方一致性**：需要在各提供方之间统一错误处理、工具签名验证与结构化诊断。

---

### **7. 开发者痛点**

- **Windows 终端损坏**：持续问题，当 Pi 崩溃后终端进入异常状态（鼠标报告异常、乱码回显）。见于 #12133、#12564 —— 需手动重置终端。
- **无限重试循环**：自动压缩失败引发无限重试（#12483），耗尽 CPU 并阻塞进程。
- **提供方元数据不完整**：缺少 `reasoning_effort`、`thought_signature` 或 `responseId` 导致各提供方（OpenAI、Bedrock、Gemini）出现静默失败或异常行为。
- **配置污染与混乱**：`.pi/settings.json` 中出现重复条目（如 #12550），`AGENTS.*` 文件间优先级不明确，无效的 `models.json` 语法破坏工具链。
- **错误可见性差**：由于 `models.json` 格式错误、缺失 `contextWindow` 类型或非交互模式（RPC、JSON）下忽略错误，导致调试困难。

> 🔍 **建议**：优先稳定核心提供方（OpenAI、Anthropic、Bedrock）表现，改善终端清理机制，并在运行时强制执行模式校验。

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
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*