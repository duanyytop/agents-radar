# AI CLI 工具社区动态日报 2026-11-25

> 生成时间: 2026-11-25 05:36 UTC | 覆盖工具: 7 个

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

# **AI CLI 工具生态跨工具对比报告**  
*编制时间：2026-11-25 | 面向技术决策者与开发者*

---

### **1. 生态概览**

截至2026年末，AI CLI 工具生态正迅速演进为功能完整的、以代理驱动的开发环境。工具已从简单的代码生成助手，转向具备持久记忆、多代理工作流以及通过 MCP（模型控制协议）服务器深度集成外部系统的复杂编排平台。尽管核心功能仍聚焦于代码补全与推理，但社区需求日益集中于**会话管理、安全加固、跨平台稳定性以及上下文使用与成本的透明性**。这反映出一个日益成熟的生态系统——开发者不仅期望智能响应，更追求可预测、可靠且可审计的工作流，尤其是在AI代理承担高风险任务的场景下。

---

### **2. 活跃度对比**

| 工具 | 问题（开放中） | PR（过去24小时） | 讨论 | 发布状态（24小时） |
|------|----------------|------------------|-------------|------------------------|
| **Claude Code** | 380+ | 0 | N/A | ✅ v2.1.332（MCP + PreSkillShellCommand） |
| **OpenAI Codex** | 60+ | 10 | 5个活跃线程 | 🔁 Alpha 构建（rust-v0.174.0/0.173.0） |
| **Gemini CLI** | 30+ | 10 | N/A | 无新发布 |
| **GitHub Copilot CLI** | 10+ | 2（已合并） | N/A | ✅ v1.0.116（安全 + UX） |
| **OpenCode** | 10+ | 10（已合并） | N/A | 无新发布 |
| **Pi** | 10+ | 10（已合并） | N/A | 无新发布 |
| **Qwen Code** | 10+ | 10（已合并） | N/A | 无新发布 |

> ✅ *注释：* “N/A” 表示上游禁用问题/PR或仅依赖讨论区。GitHub Copilot CLI 的两个已合并 PR 反映了贡献者入门流程的改进（devcontainer 设置）。

---

### **3. 共享功能方向**

在所有工具中，以下需求逐渐成为**跨领域优先级**，表明行业正在趋同：

| 要求 | 受影响工具 | 具体需求 |
|------------|----------------|----------------|
| **会话与项目管理** | 所有工具（尤其是 Claude Code、OpenAI Codex、OpenCode、Qwen Code） | 细粒度删除（`/delete`, `claude session delete`），目录范围内的恢复（`-c`），项目级概览，归档持久化 |
| **上下文透明性与可见性** | Claude Code、OpenAI Codex、Pi、Qwen Code | 实时上下文使用指示器，实时会话状态，令牌预算，对话记录完整性 |
| **安全与安全执行** | 所有工具（以 Copilot CLI、Pi、Qwen Code 最强） | 命令行阻断（`PreSkillShellCommand`），沙箱机制，`refs/agents/*` 退出选项，权限追踪，插件完整性检查 |
| **跨平台稳定性** | Claude Code、OpenAI Codex、Gemini CLI、OpenCode、Qwen Code | macOS TCC/WebAuthn，Windows CRLF 损坏，Linux/Wayland 渲染，SSH 配置处理 |
| **配置灵活性** | 所有工具（尤其是 Qwen Code、OpenAI Codex） | 自定义提供方注册，模型选择持久化，环境变量注入，UI 默认值 |

> 📌 这些共享需求表明，**开发者体验的成熟度**如今不再由模型能力定义，而是由**操作可靠性、可配置性与可信度**决定。

---

### **4. 差异化分析**

| 工具 | 功能侧重 | 目标用户 | 技术路径 |
|------|---------------|--------------|--------------------|
| **Claude Code** | 通过 MCP 实现代理自主性，早期代理工作流 | 高级开发者、需要控制力的企业用户 | 实验性 MCP 服务器技能；强调预执行钩子与安全性 |
| **OpenAI Codex** | 工作流连续性、执行控制、子代理编排 | DevOps 团队、安全环境（BYOK）、长周期流水线 | 高度关注会话状态保存、工作模式一致性、本地/云选择 |
| **Gemini CLI** | 代理可靠性、AST感知导航、非破坏性分支 | 研究工程师、写作者、复杂工作流构建者 | `/fork` 支持迭代开发；深度投入代理恢复与安全防护 |
| **GitHub Copilot CLI** | 企业级安全、策略强制、集成清晰度 | 大型企业、受监管行业 | 优先保障插件安全警告、重新认证流程与清晰的认证用户体验 |
| **OpenCode** | 跨平台一致性、远程执行可扩展性、界面打磨 | 全球开发团队、移动端优先贡献者 | 强调路径标准化、云 Durable Objects 与终端保真度 |
| **Pi** | 流式传输鲁棒性、持久状态、提供方互操作性 | 构建自定义代理栈的开发者、CI/CD 集成者 | 事件驱动设计；修复 SSE 解析、压缩逻辑与 OSC 协议合规性 |
| **Qwen Code** | 开发者工具成熟度、企业嵌入、流水线稳定性 | 以 Java 为主的团队、内部 AI 平台构建者 | 强调 CI/CD 健康度、Spring Boot 启动器、类型化 SDK 与可审计日志 |

> 🔍 **关键洞察：** 尽管所有工具均支持类代理行为，其差异化体现在**可靠性负担的落点**上：  
> - *Copilot CLI* 将其置于**策略层**（安全门控）。  
> - *Pi* 和 *Qwen Code* 关注**基础设施韧性**（流式传输、状态管理）。  
> - *Gemini CLI* 与 *Claude Code* 优先保障**代理智能与编排能力**。

---

### **5. 社区活力与成熟度**

| 指标 | 表现领先者 | 说明 |
|---------|----------------|-------|
| **最高问题数量** | **Claude Code**（>380 个开放问题） | 反映广泛采用与高用户期待 |
| **近期最活跃的 PR** | **Qwen Code、OpenCode、Pi**（24小时内合并超10个） | 显示快速迭代与工程速度 |
| **最佳贡献者入门** | **GitHub Copilot CLI** | devcontainer PR 显示对降低入门门槛的刻意关注 |
| **最成熟的反馈循环** | **OpenAI Codex、OpenCode** | Codex 有活跃讨论，OpenCode 保持稳定提交，体现健康社区参与 |
| **最低信号噪声比** | **Gemini CLI、Pi** | 尽管问题严重性高，公开讨论却少——可能暗示集中决策 |

> 🏁 **结论：**  
> - **Qwen Code、OpenCode 与 Pi** 展现出最高的技术动能，频繁且有影响力的 PR 正解决基础稳定性问题。  
> - **Claude Code** 在社区规模与可见性上领先，但在 PR 活跃度上滞后——暗示潜在路线图对齐延迟。  
> - **OpenAI Codex** 在成熟用户体验与持续优化之间取得平衡，适合生产环境。  
> - **Copilot CLI** 在企业就绪与开发者入门方面表现卓越。

---

### **6. 趋势信号**

基于各工具社区反馈，以下**行业趋势**正在浮现：

1. **代理编排 > 简单代码生成**  
   > 对 `/fork`、子代理恢复与自主技能路由的需求表明，用户已不再满足于一次性建议——他们需要**持久、目标驱动的工作流**。

2. **透明带来信任**  
   > 对实时上下文指标、成本追踪与会话元数据的反复请求揭示，**开发者需要可观测性**来信任 AI 输出——尤其在高风险环境中。

3. **安全应为默认，而非附加项**  
   > 如 `PreSkillShellCommand`、`exit-2 PreToolUse` 与 `MCP env value preservation` 等功能，标志着从被动应对到主动防御的转变——**设计即加固**。

4. **企业级集成不容妥协**  
   > BYOK 支持、重新认证流程、多重运行时控制、组织管理的服务器等不再是小众功能——它们已成为基本预期。

5. **用户体验即基础设施**  
   > 有关终端截断、CRLF 损坏与 WebAuthn 失败的大量问题表明，**无缝开发者体验已成为核心技术要求**，而非锦上添花。

> 💡 **开发者参考价值：**  
> 评估工具时，优先选择具备以下特性的：
> - **关键缺陷的活跃 PR**（如会话泄漏、挂起代理）
> - **清晰的重新认证与会话清理路径**
> - **配置持久化与跨平台一致性支持**
> - **强大的贡献者入门机制（devcontainers、文档）**

---

### ✅ 最终建议

对于 **2026年生产级 AI 开发工作流**，优先选择具备以下特性的工具：
- **经验证的会话与状态管理**（Copilot CLI、OpenCode、Qwen Code）
- **活跃的安全加固**（Pi、Copilot CLI、Qwen Code）
- **跨平台可靠性**（OpenCode、OpenAI Codex、Gemini CLI）

避免那些 PR 静止且存在未解决 P1 问题的工具——即使它们提供前沿功能——除非你已准备好承担相关风险。

---  
*本报告基于 GitHub 社区数据（2026-11-25）整理*  
*实时更新请关注：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code), [github.com/openai/codex](https://github.com/openai/codex), [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli), [github.com/github/copilot-cli](https://github.com/github/copilot-cli), [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode), [github.com/earendil-works/pi](https://github.com/earendil-works/pi), [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*数据截至 2026-11-25 | 来源：github.com/anthropics/skills*

---

### **1. 技能排名前五**  
*(基于社区参与度和讨论热度)*

1. **`proofcore-contract-auditor`**  
   - **功能**：通过 ProofCore 的零存储 Merkle 协议，将加密审计证明锚定至 TON 区块链，对 Solidity/Rust 智能合约进行自动化静态分析。面向寻求可验证代码完整性的 Web3 开发者。  
   - **讨论亮点**：区块链安全话题备受关注；因其支持无信任审计而广受赞誉。PR #1771 仍处于开放状态，但已获得早期强力支持。  
   - **状态**：开放（PR #1771）| [在 GitHub 查看](https://github.com/anthropics/skills/pull/1771)

2. **`md2video-audio`**  
   - **功能**：使用 Marp 生成幻灯片并结合音频合成技术，将 Markdown 文档自动转换为具备自然语音旁白的专业级 MP4 视频，全程零成本、全自动。  
   - **讨论亮点**：被视作内容创作者与教育者的变革性工具。在多个问题线程中被称为“知识传播必备功能”。  
   - **状态**：开放（PR #1703）| [在 GitHub 查看](https://github.com/anthropics/skills/pull/1703)

3. **`notion-spec-to-implementation`**  
   - **功能**：将 Notion 中的产品或技术规格文档转化为可执行的实现任务，包含验收标准与进度追踪机制，打通从愿景到落地的鸿沟。  
   - **讨论亮点**：被公认为解决 AI 驱动开发流程中的核心痛点。PR #1245 包含详尽用例与集成逻辑。  
   - **状态**：开放（PR #1245）| [在 GitHub 查看](https://github.com/anthropics/skills/pull/1245)

4. **`scnet-hpc`**  
   - **功能**：通过 SSH 实现对 SCNet HPC 集群的访问，并支持 Slurm 作业管理，根据用户配置提供内存、分区及加速器使用建议。  
   - **讨论亮点**：虽属小众领域，但对学术与科研用户极具价值。PR #1615 强调了领域专用基础设施技能的迫切需求。  
   - **状态**：开放（PR #1615）| [在 GitHub 查看](https://github.com/anthropics/skills/pull/1615)

5. **`document-typography`**  
   - **功能**：通过检测并修复孤字、寡段以及编号错位等问题，保障 AI 生成文档的排版质量。  
   - **讨论亮点**：多次被提及为专业输出不可或缺的功能。因对文档精致度影响显著，Issue #514 被标记为关键问题。  
   - **状态**：开放（PR #514）| [在 GitHub 查看](https://github.com/anthropics/skills/pull/514)

6. **`compact-memory`（提案）**  
   - **功能**：引入符号化表示法，实现紧凑的代理状态表达，降低长时间运行代理中的上下文膨胀问题。  
   - **讨论亮点**：在 Issue #1329 中被列为应对上下文衰减的前瞻性解决方案。社区认为其是高级代理系统的基础。  
   - **状态**：提案（Issue #1329）| [在 GitHub 查看](https://github.com/anthropics/skills/issues/1329)

7. **`quantitative-resume-auditor`**  
   - **功能**：对简历进行量化评估——涵盖结构合理性、关键词密度、经验指标及 ATS 兼容性。  
   - **讨论亮点**：随着 `notion-spec-to-implementation` 的兴起，成为结构化、可评估输出趋势的一部分，广受关注。  
   - **状态**：开放（PR #1245）| [在 GitHub 查看](https://github.com/anthropics/skills/pull/1245)

---

### **2. 社区需求趋势**  
社区日益聚焦于**结构化、可度量且可投入生产的 AI 工作流**，明确需求包括：

- **工作流自动化与集成**：能够贯通设计 → 实现的技能（如 *Notion 规格 → 代码*、*Markdown → 视频*）。  
- **代码质量与安全**：`proofcore-contract-auditor`、`agent-governance`（Issue #412）、`compact-memory` 等工具反映出对稳健性与问责制的持续关注。  
- **文档与输出打磨**：对排版质量（`document-typography`）与文档清晰度（`docs/claude-api` 更新）的需求旺盛。  
- **开发者基础设施**：支持访问 HPC（`scnet-hpc`）、Web 应用测试（`webapp-testing`）及文件格式处理（`docx`、`xlsx`）的技能，表明生态系统正日趋成熟。  
- **安全与信任**：排名第一的 Issue #492 反映出对透明技能溯源与命名空间完整性的紧迫需求。

---

### **3. 高潜力待合并技能**  
以下 PR 正在积极讨论中，极有可能近期合并：

- **`proofcore-contract-auditor`**（PR #1771）：高价值细分场景技能，用例清晰，开发者拥护度高。  
- **`md2video-audio`**（PR #1703）：广受欢迎、低风险功能，适用于教育、营销与开发团队。  
- **`notion-spec-to-implementation` + `quantitative-resume-auditor`**（PR #1245）：捆绑提案，解决两项高需求问题；概念已获批准。  
- **`webapp-testing` 修复**（PRs #1980, #1976, #1975）：关键稳定性与安全性补丁，虽改动小但影响显著。  
- **`skill-creator` 改进**（PRs #1681, #1997, #1730）：解决技能创建流程中的核心可用性与可靠性问题。

---

### **4. 技能生态洞察**  
社区最集中的需求是**可信赖、生产级的技能**，能够将抽象提示转化为**可执行、可审计、可精修的成果**——尤其在文档、代码安全与工作流自动化领域。

---  
*报告由 Claude Code 生态技术分析师生成 | 数据来源：官方 anthropics/skills 仓库*

---

**Claude Code 社区简报 – 2026-11-25**

---

### **1. 今日亮点**  
最新版本 **v2.1.332** 引入了对 MCP 服务器技能的实验性支持（在 `/` 菜单中显示为 `server:skill`），并新增 `PreSkillShellCommand` 钩子，用于在加载时控制内联 shell 执行。与此同时，社区关注焦点集中在会话管理、UI 明晰度以及跨平台稳定性上——尤其涉及 macOS TCC 权限、Windows 认证持久化及内存/会话清理问题。

---

### **2. 发布记录**  
**v2.1.332**  
- ✅ 新增对 **MCP 服务器技能**（测试版）的支持：外部服务器提供的技能现在可在命令菜单中以 `server:skill` 形式出现。  
- 🛠 新增 `PreSkillShellCommand` 钩子事件：允许插件或安全模组在执行前拒绝或阻止内联 shell 命令。旧版本（≤2.1.331）中该行为通过设置文件控制。  
> [GitHub 发布页 v2.1.332](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

---

### **3. 热门问题**  

| 问题 | 重要性说明 | 社区反馈 |
|------|----------------|--------------------|
| [#38005](https://github.com/anthropics/claude-code/issues/38005) 为希伯来语与阿拉伯语添加 RTL 支持 | 关系全球可访问性；当前阻碍右到左语言使用。高关注度（50 条评论，99 个 👍）。 | 🔥 *获赞最多的问题* – 国际用户亟需的用户体验改进 |
| [#26904](https://github.com/anthropics/claude-code/issues/26904) 添加 `/delete` 命令以删除当前会话 | 开发者希望在不丢失整个项目状态的前提下实现细粒度会话清理。多次被提出。 | 💬 *最高呼声功能请求* – 被视为工作流清洁的关键 |
| [#90708](https://github.com/anthropics/claude-code/issues/90708) 在桌面端底部恢复上下文使用指示器 | 用户更倾向实时可见的上下文窗口，而非仅依赖使用上限。中段会话更具操作性。 | 📊 *评论数量极高* – 反映用户对透明度的强烈偏好 |
| [#79217](https://github.com/anthropics/claude-code/issues/79217) 使 `MEMORY.md` 限制可配置 | 当前 200 行 / 25KB 的上限限制了长期代理记忆。开发者需要复杂工作流的灵活性。 | ⚙️ *高频痛点* – 反映代理能力复杂度持续增长 |
| [#105621](https://github.com/anthropics/claude-code/issues/105621) 自 2026 年 10 月中旬以来使用限额消耗加快 | 暗示后端或令牌计费逻辑可能存在回归，且无用户行为变更。普遍担忧。 | ⚠️ *关键错误信号* – 影响成本可预测性 |
| [#77473](https://github.com/anthropics/claude-code/issues/77473) 内置浏览器在 macOS 上无法通过 passkey（WebAuthn）登录 | 阻碍 GitHub 等安全登录。在 Apple 设备上存在重大安全与用户体验缺陷。 | 🔐 *安全关键级* – 阻碍企业环境采纳 |
| [#87891](https://github.com/anthropics/claude-code/issues/87891) 后台守护进程泄漏 64+ 进程（约 7GB） | 六周后持续内存泄漏。影响性能与稳定性。 | 🧨 *高风险缺陷* – 影响长时间运行会话 |
| [#106708](https://github.com/anthropics/claude-code/issues/106708) MCP App 工具调用失败，提示“IPC 不可用” | 导致桌面应用中远程工具集成中断。阻碍自动化流程。 | 🔄 *回归问题* – 可能与近期 MCP 变更相关 |
| [#94878](https://github.com/anthropics/claude-code/issues/94878) macOS 自动更新后丢失 TCC 权限 | 导致重复权限提示。破坏自动化流程与用户信任。 | 📱 *平台特有问题* – 影响开发体验 |
| [#111879](https://github.com/anthropics/claude-code/issues/111879) 支持目录作用域的会话恢复（`claude -c`） | 实现跨项目的上下文感知恢复。当前为全局且不可预测。 | 🗂️ *高价值用户体验修复* – 多项目工作流必需 |

---

### **4. 关键 PR 进展**  
*过去 24 小时内无更新的拉取请求。*  
> 注：无活跃 PR 反映高优先级功能（如会话删除、内存配置、RTL 支持）可能延迟实现。社区可能正在等待内部路线图对齐。

---

### **5. 热门讨论**  
*数据源中未提供讨论帖。*  
> 因缺乏讨论活动而省略。

---

### **6. 功能请求趋势**  
从开放问题中可归纳出以下主要趋势：  
- **会话与项目管理**：细粒度会话删除（`/delete`、`claude session delete`）、目录作用域恢复（`-c`）、项目级工作概览。  
- **UI/UX 透明度**：上下文使用指标、实时会话状态、可配置侧边栏视图。  
- **跨平台可靠性**：持久认证（尤其是 Chrome/Windows）、macOS TCC 权限处理、WebAuthn 支持。  
- **内存与代理控制**：可配置的 `MEMORY.md` 大小，以及对并行工作流（如代码评审）中多上下文处理的优化。  
- **安全与自动化**：OAuth 令牌过期追踪、插件完整性校验（如 `known_marketplaces.json` 修复）、通过钩子实现安全技能执行。

---

### **7. 开发者痛点**  
反复出现的困扰包括：  
- **会话冗余** 与缺乏清理选项（删除、清除、作用域控制）。  
- **状态不可预测**，源于全局恢复行为和缺失的会话元数据。  
- **macOS 上的持续缺陷**（TCC、WebAuthn、后台进程泄漏）。  
- **认证不稳定**（Chrome 重启导致登录失效、旧令牌残留）。  
- **错误反馈不佳**（例如，零字节的 `known_marketplaces.json` 无声破坏插件）。  
- **核心行为缺乏配置**（内存大小、上下文显示、远程控制中的主题渲染）。

> 这些问题表明，随着 Claude Code 演进为完整的 AI 开发环境，**可配置性、可观测性与平台一致性**的需求日益迫切。

---  
*简报基于 GitHub 数据整理 — anthropics/claude-code, 2026-11-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区简报 – 2026-11-25**

---

### **1. 今日亮点**  
Codex 团队在 CLI、TUI 及桌面应用中推出了一系列稳定性与用户体验优化，重点修复了会话持久性、终端兼容性及沙箱行为等关键问题。关于速率限制、模型容量错误和权限处理的高优先级问题持续引发社区关注，尤其在用户为 12 月使用政策调整做准备之际。

---

### **2. 发布动态**  
过去 24 小时内未发布新的稳定版本。不过，发布了五个 `rust-v0.174.0` 与 `rust-v0.173.0` 的 alpha 版本，表明核心 Rust 组件仍在进行内部开发与测试。这些版本主要面向使用 CLI 及嵌入式运行环境的开发者。

---

### **3. 热门问题**  

| 问题 | 重要性说明 | 社区反应 |
|------|----------------|--------------------|
| [#58530](https://github.com/openai/codex/issues/58530) | 高度关注：希望在 2026 年 12 月预期的使用量上限上线前，仍能保留 **Plus 订阅用户对 ChatGPT High 与 Codex 的访问权限**。对依赖高吞吐模型的高级 AI 开发者而言至关重要。 | 43 条评论，68 个点赞 —— 社区最紧迫的关注点之一。 |
| [#54841](https://github.com/openai/codex/issues/54841) | 工作模式下启用 **BYOK（自带密钥）** 与本地工具后，消息提交被阻断。破坏企业级安全架构下的工作流连续性。 | 43 条评论，28 个点赞 —— 安全功能与可用性之间的摩擦明显。 |
| [#15723](https://github.com/openai/codex/issues/15723) | 子代理完成任务后无法唤醒调用代理，导致任务无声卡死。对多代理工作流至关重要。 | 33 条评论，15 个点赞 —— 长期存在，影响复杂自动化流水线。 |
| [#62975](https://github.com/openai/codex/issues/62975) | 第一条消息发送后，权限选择器消失；**工作主页强制启用云/TPP**，禁用本地执行。11 月更新后的重大用户体验退化。 | 28 条评论，10 个点赞 —— 直接影响开发者对执行环境的控制权。 |
| [#62943](https://github.com/openai/codex/issues/62943) | 11 月 21 日更新后，新对话丢失 **权限与执行位置选择器**。造成用户困惑并破坏一致性。 | 27 条评论，15 个点赞 —— 暗示会话状态管理存在更广泛的回归问题。 |
| [#62912](https://github.com/openai/codex/issues/62912) | 新聊天不再显示执行位置选项 —— 用户无法在本地或云端之间选择。削弱对控制流的信任。 | 13 条评论，3 个点赞 —— 强化了配置灵活性丧失的担忧。 |
| [#63577](https://github.com/openai/codex/issues/63577) | 同一网络下其他账户正常，但本账户出现“所选模型已达容量”错误。暗示负载均衡可能存在误判。 | 6 条评论，2 个点赞 —— 引发对模型可用性公平性与透明度的质疑。 |
| [#63822](https://github.com/openai/codex/issues/63822) | TUI 的 `FenceTracker` 在行首为 `> ```` 时关闭普通代码块，破坏 Markdown 渲染。影响文档编写流程。 | 5 条评论，0 个点赞 —— 虽属小众场景，但对使用代码块的技术写作者影响显著。 |
| [#63819](https://github.com/openai/codex/issues/63819) | TUI 中子代理条目不再展开详情 —— CLI 接口导航失效。阻碍调试过程。 | 4 条评论，0 个点赞 —— 显示交互工具链质量下降。 |
| [#63779](https://github.com/openai/codex/issues/63779) | 桌面应用在推理过程中间歇性卡顿，重连延迟且频繁提示“模型已达容量”。影响工作效率。 | 2 条评论，0 个点赞 —— 表明底层基础设施或连接稳定性存在问题。 |

---

### **4. 关键 PR 进展**  

| PR | 摘要 | 影响 |
|----|--------|--------|
| [#63821](https://github.com/openai/codex/pull/63821) | 默认启用共享 MCP REPL 服务器的固定启动目录。提升协作环境中的可复现性。 | 增强多用户与 CI/CD 场景下的可靠性。 |
| [#63811](https://github.com/openai/codex/pull/63811) | 将捆绑的 `ripgrep` 升级至 16.0.0 —— 搜索速度更快，Unicode 支持更好。 | 提升代码库扫描性能与准确性。 |
| [#63810](https://github.com/openai/codex/pull/63810) | 使用 ChatGPT 账户偏好设置管理 Codex 语音聊天 —— 实现跨平台语音设置统一。 | 优化语音工作流的一致性。 |
| [#63809](https://github.com/openai/codex/pull/63809) | 在实时目标延续中保留已保存的 Daybreak 选择 —— 防止自主任务中上下文丢失。 | 对长期运行的目标驱动代理会话至关重要。 |
| [#63808](https://github.com/openai/codex/pull/63808) | 修复启动与刷新时的 API 工作负载身份认证 —— 解决凭证冲突问题。 | 防止安全部署场景下的静默失败。 |
| [#63807](https://github.com/openai/codex/pull/63807) | 自动探测 `/models` 路由以支持自定义 HTTPS 网关 —— 实现私有模型仓库的无缝发现。 | 简化与内部模型提供方的集成。 |
| [#63806](https://github.com/openai/codex/pull/63806) | 加强插件市场中的 SSH 主机校验 —— 防止 URL 模糊性攻击。 | 提升插件生态系统的安全性。 |
| [#63802](https://github.com/openai/codex/pull/63802) | 在 TUI 中集中管理终端能力检测 —— 减少冗余，提升检测准确性。 | 为跨环境终端行为一致性奠定基础。 |
| [#63797](https://github.com/openai/codex/pull/63797) | 在终端能力中集中管理剪贴板决策 —— 避免粘贴行为不一致。 | 提升 CLI 工作流中的复制粘贴体验。 |
| [#63788](https://github.com/openai/codex/pull/63788) | 全屏对话记录默认折叠回合详情 —— 降低长对话中的视觉噪音。 | 改善复杂多轮会话的可读性。 |

---

### **5. 热门讨论**  

#### **创意提案**
- [#12567](https://github.com/openai/codex/discussions/12567): *Codex 中的记忆机制* —— 用户希望 Codex 能引用过往对话，43 条评论就“应启用多少记忆”（1–5 分制）展开辩论。对可审查、可追溯的知识体系兴趣浓厚。
- [#27941](https://github.com/openai/codex/discussions/27941): *支持多个远程 Codex 机器/运行时* —— 请求通过统一客户端控制分布式 Codex 实例。对 DevOps 与分布式团队具有现实意义。

#### **展示与分享**
- [#63534](https://github.com/openai/codex/discussions/63534): *Memlayer v0.3.1* —— 开源项目，赋予 Codex **可审查与可修订的项目记忆**。支持命令如：“从现在起，把测试命令放在首位。”
- [#63816](https://github.com/openai/codex/discussions/63816): *Docsworth* —— 每页文档均标注所有者与审核日期的团队所有权文档。Codex 可带出处意识引用。
- [#63634](https://github.com/openai/codex/discussions/63634): *StoryDesk* —— 本地 Markdown 写作代理，具备作者批准的记忆机制。专为使用 Codex 撰写小说的作家设计。
- [#63536](https://github.com/openai/codex/discussions/63536): *indiebiz-evidence 0.9.1* —— 通过 SQLite + MCP 工具交叉验证导出数据。确保事实一致性。
- [#63629](https://github.com/openai/codex/discussions/63629): *CybeDefend* —— AGPL-3.0 安全审计技能，每个漏洞均以攻击测试证明。通过 `npx skills add` 集成至 Codex。
- [#63681](https://github.com/openai/codex/discussions/63681): *`codex mcp get` 中的拼写错误* —— 展示无需触发模型会话即可检查配置的案例。适用于安全研究工具的验证。

---

### **6. 功能需求趋势**  
- **持久上下文与记忆**：用户强烈要求实现 **可审查、可审计的跨会话记忆**（如 Memlayer、StoryDesk）。
- **项目优先导航**：长期痛点 —— 用户希望恢复 **以项目为中心的工作流**，而非基于对话的界面（参见 #62449）。
- **执行环境控制权**：持续呼吁支持 **本地执行选项**、**执行位置选择** 与 **权限持久化**。
- **多实例支持**：期望从单一客户端管理 **多个远程 Codex 运行时**。
- **透明度与调试能力**：需要更清晰的反馈机制，涵盖 **速率限制**、**模型可用性** 与 **会话状态**。

---

### **7. 开发者痛点**  
- **会话状态丢失**：频繁出现 **权限、执行位置与设置在新对话中重置** 的回归问题。
- **不可预测的速率限制**：用户报告 **突发配额耗尽**（如 GPT-6.2 Astra），即使在相似工作负载下也如此（#63138）。
- **工作模式下的破损用户体验**：多起报告指出 **发送按钮失效**、**选择器缺失** 与 **审批失败**。
- **子代理生命周期问题**：持续存在孤立的子代理、状态更新缺失，以及无法正确恢复。
- **终端兼容性脆弱**：不同终端（TUI）行为不一致，尤其在粘贴处理与图像渲染方面。
- **安全与可用性权衡困境**：BYOK 与本地工具常因权限配置错误或隐藏约束而失效。

---

*简报数据来源：GitHub（openai/codex）—— 2026年11月25日*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI 社区简报 — 2026-11-25**

---

### **1. 今日亮点**  
Gemini CLI 社区持续聚焦稳定性与代理可靠性，针对挂起代理和 SSH 配置问题的关键修复现已进入评审阶段。一项重大新功能——`/fork` 命令（用于非破坏性对话分支）即将推出，以提升工作流灵活性。与此同时，提升 AST 感知的代码库导航能力与安全的 shell 执行机制的持续努力，正推动下一代 AI 代理智能的发展。

---

### **2. 发布情况**  
*过去 24 小时内无新版本发布。*

---

### **3. 热门问题**

| 问题 # | 标题 | 为何重要 | 社区反馈 |
|--------|-------|----------------|--------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | MAX_TURNS 后子代理恢复被报告为目标成功 | 错误的成功状态掩盖了真实失败，削弱了对代理进度追踪的信任。 | 🔥 14 条评论，2 👍 – P1 优先级，表明核心逻辑缺陷 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | 通用代理无限挂起 | 完全阻塞用户工作流；严重可用性影响。在特定条件下可复现。 | 🔥 8 条评论，8 👍 – 高可见度；P1 严重性 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 不自主使用技能/子代理 | 违背设计初衷：模型未能自动调用可用的专业工具。 | 🔥 7 条评论，0 👍 – 个案但广泛感知；信号弱代理编排能力 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知文件读取/搜索/映射的影响 | 可通过精准代码边界减少上下文膨胀和回合数。未来代理效率的基础。 | 🔥 7 条评论，1 👍 – 战略性架构方向探究 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | 浏览器代理忽略 `settings.json` 覆盖项 | 配置漂移导致跨环境行为不一致。存在安全与用户体验风险。 | 🔥 5 条评论，0 👍 – 对可复现性和策略执行至关重要 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 浏览器子代理在 Wayland 下失败 | 平台相关回归限制了 Linux 桌面端采用。阻碍开发者包容性。 | 🔥 4 条评论，1 👍 – 实际使用中活跃的缺陷 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 模型在随机目录创建临时脚本 | 污染工作区，增加清理难度，有误提交风险。沙箱管理不佳。 | 🔥 3 条评论，0 👍 – 清洁开发中的高摩擦点 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | 代理应停止或阻止破坏性行为 | 防止危险操作如 `git reset --force`。确保自主执行的安全性。 | 🔥 3 条评论，1 👍 – 对设置安全护栏达成强烈共识 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done 输出钩子导致崩溃 | 打断执行后摘要流程，破坏用户反馈闭环。 | 🔥 3 条评论，0 👍 – P1 问题，影响核心用户体验 |
| [#30328](https://github.com/google-gemini/gemini-cli/issues/30328) | `core.sshCommand=""` 导致 fatal: unable to fork | 由错误配置的环境变量引发直接 Git 失败。阻断所有基于 SSH 的操作。 | 🔥 2 条评论，0 👍 – 紧急修复；影响每个集成 Git 的工作流 |

---

### **4. 关键 PR 进展**

| PR # | 标题 | 摘要 | 影响 |
|------|-------|---------|--------|
| [#30464](https://github.com/google-gemini/gemini-cli/pull/30464) | 添加 `/fork` 命令及回滚分支选项 | 通过 `fork` 和共享的 `ChatRecordingService.forkAsync()` 实现非破坏性对话分支。 | 🚀 重大用户体验升级，适用于迭代开发 |
| [#30454](https://github.com/google-gemini/gemini-cli/pull/30454) | 强制 MCP OAuth 流中的来源一致性 | 依据 RFC 8414 验证颁发者和端点来源，强化安全性。 | 🔐 对身份与认证完整性至关重要 |
| [#30451](https://github.com/google-gemini/gemini-cli/pull/30451) | 加强 shell 包装器检查以进行策略验证 | 确保包装器内的命令替换与被拒命令能一致检测。 | 🔐 提升复杂 shell 交互中的安全性 |
| [#30456](https://github.com/google-gemini/gemini-cli/pull/30456) | 限制子代理伪装令牌接收者 | 通过强制主机白名单和必需作用域，缓解数据外泄风险。 | 🔐 高严重性安全修复 |
| [#30415](https://github.com/google-gemini/gemini-cli/pull/30415) | 为网页搜索添加时间限制，并在取消时停止重试 | 修复 `google_web_search` 工具在服务器卡住时的无限挂起问题。 | ⏱️ 解决关键挂起问题（报告于 #29594） |
| [#30468](https://github.com/google-gemini/gemini-cli/pull/30468) | 修复 `read_many_files` 以尊重二进制资源 | 恢复对包含目录中 PDF、图片、音频文件的读取支持。 | 📂 修复来自 #30211 的回归问题 |
| [#30335](https://github.com/google-gemini/gemini-cli/pull/30335) | 停止用空字符串覆盖 `core.sshCommand` | 修复因空 SSH 配置导致的 `fatal: unable to fork` 错误。 | 🛠️ 修复 Git 集成的关键问题 |
| [#30331](https://github.com/google-gemini/gemini-cli/pull/30331) | 保留 `=` 和空值的 MCP 环境值 | 修复 `gemini mcp add` 期间 `TOKEN=abc=def==` 或 `EMPTY=` 等值的损坏问题。 | 💼 确保环境变量正确传递 |
| [#30332](https://github.com/google-gemini/gemini-cli/pull/30332) | 支持逗号分隔的 MCP 工具过滤器 | 允许 `--include-tools=tool1,tool2` 语法，使 CLI 输入更清晰。 | ✅ 提升管理员体验 |
| [#30467](https://github.com/google-gemini/gemini-cli/pull/30467) | 保留 Markdown 代码块边界 | 修复带围栏代码块和表格的渲染问题。 | 🖋️ 提升可读性与终端输出保真度 |

---

### **5. 热门讨论**  
*数据源中未提供讨论线程。*

---

### **6. 功能请求趋势**  
社区正趋于以下几个关键方向：  
- **代理智能与编排**：对更好的子代理发现、技能利用和轨迹可视化的强烈需求（例如 `/chat share` 用于子代理日志）。  
- **安全与防护**：持续呼吁防御性行为——防止破坏性命令（如 `git reset`、`--force`），并在 shell 执行中强制策略检查。  
- **代码库导航**：对 **AST 感知工具**（如 `tilth`、`glyph`）的兴趣日益增长，以实现精准、低回合的代码探索与映射。  
- **工作流灵活性**：`/fork` 与持久任务追踪等新功能反映出对鲁棒、非线性开发工作流的渴望。  
- **沙箱与隔离**：推动零依赖操作系统沙箱与 Bash 亲和性，以安全地利用模型原生能力。

---

### **7. 开发者痛点**  
反复出现的困扰包括：  
- **代理挂起**（尤其是通用代理和浏览器代理），阻塞生产力。  
- **不可靠的配置处理**，如 `settings.json` 被忽略或 `core.sshCommand` 被错误设置。  
- **糟糕的工作区卫生**：模型在任意位置生成临时脚本，难以清理。  
- **缺乏自主性**：即使相关，代理也未能使用可用技能/子代理。  
- **错误报告不一致**：漏洞缺乏子代理上下文（如 `/bug` 报告中缺少日志）。  
- **工具过载**：系统在工具数超过 400 时崩溃，暴露出代理工具管理的可扩展性短板。

---

*生成时间：2026-11-25 | 来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# **GitHub Copilot CLI 社区简报 – 2026-11-25**

---

### **1. 今日亮点**  
最新版本 `v1.0.116` 在插件与 MCP 服务器安全方面引入关键改进——当插件与独立的 MCP 服务器同时连接至同一端点时，会向用户发出警告。ACP 新增功能支持在兼容编辑器中动态选择上下文大小，而无需更改默认设置；PowerShell 参数处理现已正确遵循允许规则。这些更新强化了跨环境的安全性、可用性与开发者控制力。

---

### **2. 发布记录**  
**`v1.0.116` 系列（2026-11-23 至 2026-11-25）**  
- ✅ **新增**：  
  - 扩展清单的构建时 JSON Schema（提升工具链验证能力）。  
  - 全屏时间线中的“跳转到最新”按钮，便于实时追踪输出。  
  - ACP 兼容编辑器中的上下文大小覆盖选项（不修改已保存的默认值）。  
  - 所有由 Copilot 启动的进程均支持环境变量注入。  
- 🔧 **修复**：  
  - PowerShell 参数如 `-n1`、`-ExpectedSha256` 现在正确遵守允许规则，不再需要完整脚本审批。  
  - 文件夹信任提示在选择“是”后立即关闭。  
  - 重新连接主机后防止空闲会话误报。  
  - 解决 Unix 前台进程取消时的问题。  
- 🛡️ **优化**：  
  - 对组织管理的 MCP 服务器（除 Connectors 外）抑制慢连接/登录警告，仅在必要处聚焦提示。  
  - 延迟浏览器打开，直到执行 `/mcp auth <name>`，提升认证流程清晰度。

> 🔗 [GitHub Copilot CLI v1.0.116 发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.116)

---

### **3. 热门问题**  

| 问题 | 重要性 | 社区反应 |
|------|--------|----------|
| [#1148](https://github.com/github/copilot-cli/issues/1148) Windows 上 CRLF 换行符损坏 | 破坏 Git 工作流；静默修改文件格式，导致合并冲突与 CI 失败。 | 👍 9 | 评论：8 |
| [#2165](https://github.com/github/copilot-cli/issues/2165) Ubuntu 密钥链支持已失效 | 阻碍 Linux 上的认证；文档过时，`secret-tool` 依赖未明确说明。 | 👍 23 | 评论：7 |
| [#5323](https://github.com/github/copilot-cli/issues/5323) 禁用代理检查点引用 (`refs/agents/*`) | 引用污染 Git 历史，干扰版本工具判断。用户希望获得可选关闭控制。 | 👍 5 | 评论：7 |
| [#5559](https://github.com/github/copilot-cli/issues/5559) 自 v1.0.93-0 起 macOS 上 TLS 1.3 已失效 | 企业用户依赖安全 MCP 端点，导致网络连接回归失败。 | 👍 0 | 评论：2 |
| [#5175](https://github.com/github/copilot-cli/issues/5175) 无法重新认证过期的 MCP 会话 | 应用显示绿色状态，但无重签入路径——对企业集成而言是关键用户体验缺陷。 | 👍 1 | 评论：2 |
| [#5568](https://github.com/github/copilot-cli/issues/5568) MCP 注册表请求缺少 User-Agent 头 | AWS WAF 因缺少 `User-Agent` 拦截请求，在受保护基础设施中导致注册表查询失败。 | 👍 0 | 评论：0 |
| [#5564](https://github.com/github/copilot-cli/issues/5564) 沙箱中被拒绝的文件仍被复制到 COPILOT_HOME | 安全风险：敏感文件虽被策略阻止，但仍被读取并持久化存储。 | 👍 0 | 评论：0 |
| [#5565](https://github.com/github/copilot-cli/issues/5565) 子主机失败时 `create_session` 无限挂起 | 导致工作流死锁，无超时或错误反馈——对自动化流水线影响重大。 | 👍 0 | 评论：0 |
| [#5563](https://github.com/github/copilot-cli/issues/5563) 终端持续截断 Copilot 输出 | 长响应无法使用；屏幕渲染问题限制了 AI 辅助的实际可用性。 | 👍 0 | 评论：0 |
| [#5518](https://github.com/github/copilot-cli/issues/5518) Gemini 4 Neon/Hydrogen 报告 `xhigh` 但行为如 `medium` | 使用指标误导；影响生产环境的成本估算与任务优先级判定。 | 👍 0 | 评论：1 |

---

### **4. 关键 PR 进展**  
*(注：过去 24 小时内仅有两项 PR 更新——均已关闭)*

| PR | 摘要 | 影响 |
|----|------|------|
| [#4316](https://github.com/github/copilot-cli/pull/4316) 创建 `devcontainer.json` | 为本地开发添加初始 dev container 设置。 | 实现一致、可复现的贡献者环境。 |
| [#4428](https://github.com/github/copilot-cli/pull/4428) 添加初始 devcontainer 配置 | 使用基础镜像和工具链完成 devcontainer 设置。 | 降低新贡献者的入门门槛。 |

> ✅ 两项 PR 已合并 —— 在改善贡献者体验方面取得显著进展。

---

### **5. 热门讨论**  
*源数据中未提供讨论信息。*  
👉 **省略** —— 数据集中未发现活跃讨论。

---

### **6. 功能需求趋势**  
社区反馈中浮现的几大新兴功能方向：

- **配置灵活性增强**：  
  - ACP 会话中暴露 `contextTier`（Issue #4275）。  
  - 默认代理设置（Issue #5383）。  
  - 每会话动态调整上下文大小（v1.0.116 已为 ACP 添加此功能）。

- **安全与隐私控制**：  
  - 可选关闭 `refs/agents/*` 检查点引用（Issue #5323）。  
  - 持久化存储 URL 权限（Issue #3253）。  
  - 更完善的沙箱机制（Issue #5564：防止读取被拒绝的文件）。

- **企业与集成支持**：  
  - 多个 BYOK 提供商支持（Issue #4976）。  
  - 过期 MCP 会话的完整重新认证流程（Issue #5175）。  
  - MCP 注册表请求中加入正确的 `User-Agent`（Issue #5568）。

- **用户体验与渲染优化**：  
  - `ask_user` 提示中支持 Markdown 渲染（Issue #5084）。  
  - 修复终端文本截断问题（Issue #5563）。  
  - Gemini 模型默认展开推理步骤（Issue #5532）。

---

### **7. 开发者痛点**  
开发者反复提及的困扰：

- **认证与会话管理**：  
  - 无法通过应用界面重新认证过期的 MCP 会话（Issue #5175）。  
  - 会话无限挂起，无超时或错误提示（Issue #5565）。  
  - Ubuntu 上的密钥链问题完全阻断访问（Issue #2165）。

- **文件系统与安全漏洞**：  
  - 静默的 CRLF 转换破坏 Git 文件（Issue #1148）。  
  - 被拒绝的文件仍被读取并本地存储（Issue #5564）。  
  - 沙箱策略在文件访问期间未被遵守。

- **渲染与输出问题**：  
  - 终端输出被持续截断且难以阅读（Issue #5563）。  
  - 结构化提示中丢失 Markdown 格式（Issue #5084）。  
  - Gemini 模型默认折叠思考块（Issue #5532）。

- **网络与企业兼容性**：  
  - macOS 上的 TLS 1.3 回退问题（Issue #5559）。  
  - 缺少 `User-Agent` 导致 AWS WAF 保护失效（Issue #5568）。  
  - Entra ID 拒绝回环回调（Issue #5040）。

---

*📌 *本简报基于 GitHub Copilot CLI 仓库活动整理（2026-11-25）*。  
*如需实时更新，请关注项目：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区简报 – 2026-11-25

---

### **1. 今日亮点**  
OpenCode 社区在 v2.4 版本发布周期前，持续聚焦稳定性、性能与可用性改进。关键进展包括会话管理、模型路由及跨平台兼容性的重大漏洞修复——尤其在 Windows 与 macOS 平台表现突出。围绕 UI/UX 优化与无障碍功能的活跃讨论，反映出桌面端与网页界面日益成熟的趋势。

---

### **2. 发布情况**  
过去 24 小时内未报告新版本发布。

---

### **3. 热门问题**

| 问题 | 摘要与影响 | 社区反应 |
|------|------------------|--------------------|
| [#64073](https://github.com/anomalyco/opencode/issues/64073) | 恢复前台子代理执行对代理编排工作流至关重要。若缺失此功能，子代理无法在活动上下文中可靠运行。 | 27 条评论，12 个点赞 — 高需求，用户普遍构建复杂代理链。 |
| [#28030](https://github.com/anomalyco/opencode/issues/28030) | 用户无法在桌面端删除项目 — 长期存在的用户体验障碍。经 6 个月后关闭，表明团队已优先处理。 | 20 条评论，21 个点赞 — 最高呼声功能之一；关闭标志着进展。 |
| [#66067](https://github.com/anomalyco/opencode/issues/66067) | `deepseek-v4.1-flash` 请求虽有稳定 `x-opencode-session`，仍被路由至多个后端，导致重复计费与缓存未命中。 | 19 条评论 — 成本控制与推理效率方面的紧急关切。 |
| [#48411](https://github.com/anomalyco/opencode/issues/48411) | 需增强沙箱隔离与执行权限控制，防止不安全代码执行。对安全开发环境至关重要。 | 15 条评论 — 反映高级用户对安全性的日益关注。 |
| [#66166](https://github.com/anomalyco/opencode/issues/66166) | 自定义提供者因缺少配置重载逻辑，在服务启动时无法注册。影响依赖私有模型的用户工作流。 | 6 条评论 — 影响高级用户与企业级采用者。 |
| [#66087](https://github.com/anomalyco/opencode/issues/66087) | 成本显示硬编码为美元（USD），无人民币（CNY）或其他货币选项。对全球团队构成障碍。 | 3 条评论 — 小但关键的本地化需求。 |
| [#66053](https://github.com/anomalyco/opencode/issues/66053) | 当目录命令使用 I/O 重定向（如 `cd . > file`）时，跳过 Shell 权限检查 — 脚本执行存在安全风险。 | 3 条评论 — 揭示了 Shell 处理中的潜在漏洞。 |
| [#66192](https://github.com/anomalyco/opencode/issues/66192) | Windows 上预推送钩子因 `/` 与 `\` 路径格式不一致导致路径比较失败 — 妨碍 CI/CD 可靠性。 | 2 条评论 — 平台相关回归，影响 DevOps 流水线。 |
| [#66172](https://github.com/anomalyco/opencode/issues/66172) | Linux/Wayland 系统中浏览器面板标签页即使可见也会冻结 — `requestAnimationFrame` 停止触发。 | 2 条评论 — 影响现代桌面生产力的用户体验问题。 |
| [#66268](https://github.com/anomalyco/opencode/issues/66268) | Windows 上会话移动失败，因 `~\repo` 中波浪号未展开 — 阻碍基于主目录的项目组织。 | 1 条评论 — 显示跨平台路径处理仍存痛点。 |

---

### **4. 关键 PR 进展**

| PR | 摘要与影响 | 状态 |
|----|------------------|--------|
| [#66270](https://github.com/anomalyco/opencode/pull/66270) | 将 OpenCode TTS 插件加入生态文档 — 提升社区工具的可发现性。 | ✅ 已合并 |
| [#66240](https://github.com/anomalyco/opencode/pull/66240) | 集成 Cloudflare Durable Object `alarm()` 睡眠机制与基于 WebSocket 的 `WorkerClient` — 为远程执行扩展奠定基础。 | ✅ 已合并 |
| [#66263](https://github.com/anomalyco/opencode/pull/66263) | 修复格式化后精确编辑失败的问题 — 同步格式化后状态，解决 #66262。 | ✅ 已合并 |
| [#66269](https://github.com/anomalyco/opencode/pull/66269) | 在会话移动过程中展开 Windows 下的 `~\` 路径 — 修复 #66268。 | ✅ 已合并 |
| [#66265](https://github.com/anomalyco/opencode/pull/66265) | 补全合并侧边栏导航（固定项、首页选择器）的空白 — 提升 UI 一致性。 | ✅ 已合并 |
| [#66215](https://github.com/anomalyco/opencode/pull/66215) | 确保子代理随父会话迁移 — 防止孤立代理产生。 | ✅ 已合并 |
| [#66254](https://github.com/anomalyco/opencode/pull/66254) | 追踪后台压缩等待时间 — 帮助调试会话清理中的长时间延迟。 | ✅ 已合并 |
| [#66251](https://github.com/anomalyco/opencode/pull/66251) | 在 Code Mode 目录中跳过冗余的模式工作 — 提升启动速度。 | ✅ 已合并 |
| [#66246](https://github.com/anomalyco/opencode/pull/66246) | 通过跳过空侧边减少文件差异开销 — 核心操作中的性能提升。 | ✅ 已合并 |
| [#66250](https://github.com/anomalyco/opencode/pull/66250) | 消除 Code Mode 执行中的重复工作 — 进一步优化执行效率。 | ✅ 已合并 |

---

### **5. 热门讨论**  
*数据源中未提供讨论帖。*

---

### **6. 功能请求趋势**

基于热门问题与 PR，以下功能方向正逐渐成为主流：

- **跨平台一致性**：在 Windows/macOS/Linux 上实现一致行为，尤其在路径处理（`~\`）、Shell 命令与 GUI 渲染方面。
- **增强的 UI/UX 控制**：持久化默认设置（如模型选择）、更好的会话管理（删除、搜索限制）以及更优的快捷键支持。
- **本地化与商业化**：支持多种货币（如 CNY）、成本透明度与账单可视化。
- **安全与隔离**：细粒度执行权限、沙箱机制，以及对 Shell 命令与文件操作的安全处理。
- **无障碍访问**：支持屏幕阅读器对流式内容与实时更新的读取 — 对包容性设计至关重要。
- **远程与分布式工作流**：支持纯远程模式、移动端推送通知与健壮的设备配对能力。

---

### **7. 开发者痛点**

开发者反复反映的痛点包括：

- **会话管理限制**：每项目静默截断至 64 个会话（#64127），无法删除项目（#28030），更新后会话重置（#66124）。
- **模型路由不稳定**：后端分配不一致导致重复计费（#66067）。
- **平台特定缺陷**：Windows 上持续存在路径展开、Ctrl+F 失效等问题；Linux/Wayland 上浏览器标签页冻结。
- **状态处理不一致**：格式化工具变更后，因残留文本引用导致工具失效（#66262）。
- **配置持久性缺失**：服务重启后自定义提供者未重新加载（#66166）。
- **错误反馈不佳**：Safari 中粘贴图片时提示“请求失败”等通用错误（#66260）。

上述问题反映出 OpenCode 架构复杂性的持续增长，也凸显出对更稳健、可预测且用户友好的开发者工具的迫切需求。

---  
*简报生成时间：2026-11-25 | 来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# **Pi 社区简报 – 2026-11-25**

---

### **1. 今日重点**  
Pi 生态系统持续成熟，关键修复解决了流式传输、模型兼容性以及有状态会话处理中的稳定性问题。值得注意的是，多项 PR 已解决长期存在的 GitHub Copilot 推理回放问题、OpenAI 兼容代理异常行为，以及对大型 SSE 事件处理不当的问题。社区在压缩行为、令牌预算和终端集成方面的活跃讨论，反映出对长运行代理工作流稳健性的日益增长的需求。

---

### **2. 发布情况**  
*过去 24 小时内无新发布。*

---

### **3. 热门问题**  

| 问题 | 摘要与重要性 | 社区反应 |
|------|------------------------|--------------------|
| [#10956](https://github.com/earendil-works/pi/issues/10956) | `cacheWarming: "idle"` 在 `turn_end` 处理器后静默失效 —— 对会话效率至关重要 | 🔥 17 条评论，5 个 👍 —— 表明核心流程崩溃影响性能调优 |
| [#12242](https://github.com/earendil-works/pi/issues/12242) | 压缩摘要失控增长（17k → 164k 字符），导致极端延迟 | 🔥 6 条评论 —— 引发对长时间会话中内存安全与可扩展性的担忧 |
| [#12407](https://github.com/earendil-works/pi/issues/12407) | `gemini-4-neon` 因 OpenRouter 对 `"MALFORMED_RESPONSE"` 的标准化而中途停止流式传输 | 🔥 4 条评论 —— 揭露跨提供商错误传播的风险 |
| [#12443](https://github.com/earendil-works/pi/issues/12443) | `gemini-4-neon` 不支持 `xhigh` 思维层级，尽管 Google API 支持 | 🔥 3 条评论 —— 指示模型配置中存在提供商不匹配 |
| [#12482](https://github.com/earendil-works/pi/issues/12482) | 压缩后重新检查输出预算，避免请求超出令牌限额 | 🔥 3 条评论 —— 对可靠自动重试逻辑至关重要 |
| [#12510](https://github.com/earendil-works/pi/issues/12510) | Codemode 解析错误缺乏源上下文，迫使模型盲目重试 | 🔥 1 条评论 —— 影响代码生成中的调试准确性 |
| [#12509](https://github.com/earendil-works/pi/issues/12509) | Kimi 编码端点拆分函数调用，导致回放时出现重复的 `call_id` | 🔥 1 条评论 —— 打破工具执行的幂等性 |
| [#12439](https://github.com/earendil-works/pi/issues/12439) | 启动对话无法发出 OSC 7501 `blocked` 状态，破坏无人值守会话流程 | 🔥 3 条评论 —— 影响自动化与 CI/CD 集成 |
| [#12474](https://github.com/earendil-works/pi/issues/12474) | `openai-responses` 提供商未发送 `previous_response_id`，破坏会话关联 | 🔥 2 条评论 —— 威胁有状态网关设计的完整性 |
| [#12476](https://github.com/earendil-works/pi/issues/12476) | `turn_end` 处理器无法在不终止运行的情况下请求原生压缩 | 🔥 2 条评论 —— 为如 `pi-obsidian-memory` 等扩展所期望 |

---

### **4. 关键 PR 进展**  

| PR | 摘要与影响 | 状态 |
|----|------------------|--------|
| [#12505](https://github.com/earendil-works/pi/pull/12505) | 修复 `openai-completions` 中 `reasoning_opaque` 的回放问题 —— 保留完整 Copilot 上下文 | ✅ 已合并 |
| [#12495](https://github.com/earendil-works/pi/pull/12495) | 添加 `gpt-6-luna-decisions` 并根据账户可用性过滤分类器模型 | ✅ 已合并 |
| [#12494](https://github.com/earendil-works/pi/pull/12494) | 修复在非 `ProgramFiles` 路径下的 Windows Git Bash 检测问题 | ✅ 已合并 |
| [#12490](https://github.com/earendil-works/pi/pull/12490) | 根据程序状态协议，将启动对话报告为 `permission` 请求 | ✅ 已合并 |
| [#12487](https://github.com/earendil-works/pi/pull/12487) | 确保在启动对话期间发出 OSC 7501 `blocked` 状态 | ✅ 已合并 |
| [#12451](https://github.com/earendil-works/pi/pull/12451) | 修复大行/事件的线性时间流式传输 —— 防止内存膨胀 | ✅ 已合并 |
| [#12489](https://github.com/earendil-works/pi/pull/12489) | 移除对 Claude 5.5 模型无效的 `thinking: disabled` 支持 | ✅ 已合并 |
| [#12470](https://github.com/earendil-works/pi/pull/12470) | 处理 OpenRouter 返回的 `native_finish_reason`，以保持上游错误语义 | ✅ 已合并 |
| [#12475](https://github.com/earendil-works/pi/pull/12475) | 将 OSC 8 超链接限制在 ≤8192 字符以内，防止 V8 堆耗尽 | ✅ 已合并 |
| [#12473](https://github.com/earendil-works/pi/pull/12473) | 在 Windows 上跳过 Tabby 的合成右键粘贴，避免重复粘贴 | ✅ 已合并 |

---

### **5. 热门讨论**  
*数据集中未提供讨论帖。*

---

### **6. 功能请求趋势**  
- **模型与提供商灵活性**：强烈希望内置添加 EXAONE 2.5 作为提供商，并加强对 OpenAI 兼容后端（如 Kimi、Qwen）的支持。  
- **有状态会话完整性**：反复呼吁对所有交互流程实现完整的 `previous_response_id` 跟踪和 `OSC 7501` 报告。  
- **流式传输鲁棒性**：高优先级修复 SSE/事件解析问题，尤其是大负载和格式错误分块场景（如 Kimi、OpenRouter）。  
- **扩展控制**：开发者希望对压缩（`turn_end` 处理器）、输入中止和持久化存储拥有更精细的控制权。  
- **持久化存储扩展**：请求支持 Postgres 后端用于 Chord/Durable，以实现企业级持久化能力。

---

### **7. 开发者痛点**  
- **压缩与内存膨胀**：压缩摘要失控增长（问题 #12242）以及长时间会话中的内存泄漏仍是首要关注点。  
- **流式传输可靠性**：多个模型（Gemini、Kimi）表现出中途中断或事件边界断裂，需手动绕过。  
- **提供商不一致**：上游 API 与 Pi 模型目录之间行为不一致（如 `xhigh` 虽然文档支持但实际不可用）。  
- **错误处理缺口**：缺少向 `onResponse` 和 `after_provider_response` 传递 HTTP 错误信息（问题 #12376），阻碍诊断。  
- **平台特定缺陷**：Windows 平台持续存在 Git 检测问题、鼠标逃逸序列（问题 #12133）及终端回显损坏。  
- **错误缺乏上下文**：Codemode 解析失败仅提供行/列信息 —— 无源代码片段（问题 #12510），调试困难。

---

*敬请期待下周简报。关注 [earendil-works/pi](https://github.com/earendil-works/pi) 以获取实时更新。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区简报 — 2026-11-25

---

### **今日重点**  
Qwen Code 项目在稳定托管代理（Managed Agent）基础设施方面持续保持强劲势头，但 `Managed Agent gate` 与 `E2E Tests` 多次出现 CI 失败，凸显出 Java SDK 可靠性与测试覆盖率方面的持续挑战。关键进展包括在 CLI 中引入新的 `reasoning_effort` 持久化机制，以及在会话管理方面，特别是在归档与实时对话记录完整性方面的改进。

---

### **发布情况**  
过去 24 小时内未报告新版本发布。

---

### **热门问题**

| 问题 | 摘要与重要性 | 社区反应 |
|------|------------------------|--------------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | 主 CI 持续失败：“未识别到测试”——影响发布稳定性，至关重要 | 🔥 **546 条评论** —— 最活跃的问题之一；表明整个 CI 流水线存在系统性不稳定性，影响所有 PR。 |
| [#18252](https://github.com/QwenLM/qwen-code/issues/18252) | E2E 测试失败：计划任务工具默认未注册——破坏自动化工作流 | ⚠️ 对工作流可靠性影响重大；虽标记为“临时”，但仍处于积极排查中。 |
| [#17045](https://github.com/QwenLM/qwen-code/issues/17045) | 跟踪 1.0 预览版循环内核落地——向事件驱动型代理架构的根本性转变 | 🎯 P1 优先级；v1.0 路线图核心；开发者密切关注增量发布进展。 |
| [#18253](https://github.com/QwenLM/qwen-code/issues/18253) | ClassSizeRatchetTest 失败——Java SDK 类大小超出限制 | 🔧 表明代码库复杂度持续增长；在功能合并前需引起重视。 |
| [#18288](https://github.com/QwenLM/qwen-code/issues/18288) | 新的“未识别到测试”CI 失败——重复出现的模式 | 🔁 属于一组 CI 不稳定现象；提示需要更深入的流水线诊断。 |
| [#18298](https://github.com/QwenLM/qwen-code/issues/18298) | Web Shell 将未设置的布尔配置显示为 OFF——掩盖真实默认行为 | 💡 用户体验问题：误导用户对实验性功能状态的认知；影响配置清晰度。 |
| [#17559](https://github.com/QwenLM/qwen-code/issues/17559) | 用户提示在回合中途发送却未记录于会话日志——存在数据丢失风险 | ⚠️ 对调试与审计追踪至关重要；影响用户对会话历史的信任。 |
| [#18258](https://github.com/QwenLM/qwen-code/issues/18258) | HostedMonitorRunFaultGatesIT 失败——MySQL 进程故障处理问题 | 🔍 指出生产级部署中边缘情况的容错能力存在缺口。 |
| [#17668](https://github.com/QwenLM/qwen-code/issues/17668) | `read_file` 在文件末尾报告无效行范围——输出误导 | 🐞 低层级缺陷但影响工具可用性；必须修复以确保文件操作稳健。 |
| [#18313](https://github.com/QwenLM/qwen-code/issues/18313) | Web Shell 在独立会话创建时缺乏原生推理选择功能 | 🛠️ 阻碍自定义；无法在会话流程早期设置偏好。 |

---

### **关键 PR 进展**

| PR | 摘要与影响 | GitHub 链接 |
|----|------------------|-------------|
| [#18297](https://github.com/QwenLM/qwen-code/pull/18297) | 修复可复现的主分支 CI 失败——稳定核心流水线 | [PR #18297](https://github.com/QwenLM/qwen-code/pull/18297) |
| [#18303](https://github.com/QwenLM/qwen-code/pull/18303) | 实现版本-0 公共会话的 Shell 审批停放——增强会话生命周期控制 | [PR #18303](https://github.com/QwenLM/qwen-code/pull/18303) |
| [#17902](https://github.com/QwenLM/qwen-code/pull/17902) | 修正仪表板与 `/stats` 间令牌计数不一致问题——提升使用透明度 | [PR #17902](https://github.com/QwenLM/qwen-code/pull/17902) |
| [#18316](https://github.com/QwenLM/qwen-code/pull/18316) | 在 CLI 中持久化每个模型的推理努力与上下文窗口——提升用户体验 | [PR #18316](https://github.com/QwenLM/qwen-code/pull/18316) |
| [#18315](https://github.com/QwenLM/qwen-code/pull/18315) | 在定时任务测试中固定时钟——消除不稳定性 | [PR #18315](https://github.com/QwenLM/qwen-code/pull/18315) |
| [#18319](https://github.com/QwenLM/qwen-code/pull/18319) | 在独立会话创建时传递推理选择——修复 Web Shell 用户体验缺口 | [PR #18319](https://github.com/QwenLM/qwen-code/pull/18319) |
| [#18324](https://github.com/QwenLM/qwen-code/pull/18324) | 将 MCP SDK 超时归类为执行超时——改善错误语义 | [PR #18324](https://github.com/QwenLM/qwen-code/pull/18324) |
| [#18267](https://github.com/QwenLM/qwen-code/pull/18267) | 将闭合的 JSON 字段重构为显式类型——提升代码可维护性 | [PR #18267](https://github.com/QwenLM/qwen-code/pull/18267) |
| [#18322](https://github.com/QwenLM/qwen-code/pull/18322) | 确保 exit-2 PreToolUse 钩子覆盖其他钩子——强化安全逻辑 | [PR #18322](https://github.com/QwenLM/qwen-code/pull/18322) |
| [#18317](https://github.com/QwenLM/qwen-code/pull/18317) | 添加对重复工具调用拒绝的解释说明——改善用户引导 | [PR #18317](https://github.com/QwenLM/qwen-code/pull/18317) |

---

### **热门讨论**  
*提供的数据中未包含讨论线程。*

---

### **功能请求趋势**  
社区关注度日益集中在：
- **增强的会话生命周期控制**：多个请求呼吁改进归档会话处理、僵尸会话日志管理及回合中消息持久化。
- **开发工具链优化**：对官方 Spring Boot Starter（`#18311`）和类型化 Java SDK 客户端（`#18247`）的需求，反映出向企业级嵌入方案推进的趋势。
- **定制化与配置灵活性**：用户希望实现持久化偏好（如推理努力、模型上下文窗口）、自定义提供者中可发现的模型（`#17446`），以及更清晰的 UI 默认值（`#18298`）。
- **跨平台与多语言支持**：持续推动国际化（`#18320`）、语音输入兼容性（`#18305`）及扩展提交路径（`#14540`）的改进。

---

### **开发者痛点**  
反复出现的困扰包括：
- **CI/CD 不稳定**：频繁出现的 `no test identified`、`ClassSizeRatchetTest` 与 `E2E Test` 失败，表明流水线脆弱，阻碍合并。
- **配置歧义**：布尔配置项未设置时显示为 `OFF`（`#18298`）以及默认值不明确，削弱用户信心。
- **会话状态不一致**：回合中途消息未记录（`#17559`）、归档相关僵尸日志（`#17251`）及会话无持久化，引发信任问题。
- **工具链局限**：自定义提供者中缺少模型发现、语音检测模式硬编码（`#17000`, `#18305`），以及缺乏通过 Spring Boot Starter 提供的 API 优先访问。
- **测试不稳定**：依赖时钟的断言（`#18315`）与无作用域的 CI 检查（`#18310`）增加维护负担。

---  
*生成时间：2026-11-25 | 数据来源：[QwenLM/qwen-code GitHub](https://github.com/QwenLM/qwen-code)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*