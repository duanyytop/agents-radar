# OpenClaw 生态日报 2026-11-14

> Issues: 325 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-14 02:39 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# **OpenClaw 项目简报 – 2026-11-14**

---

### **1. 今日概览**  
OpenClaw 项目持续保持高度活跃，过去 24 小时内更新了 325 个问题与 500 个拉取请求（Pull Requests），反映出强大的社区参与度和持续的开发势头。大量高严重性漏洞（P0/P1）正在积极排查中，主要集中在会话稳定性、内存管理、认证流程以及跨平台可靠性（尤其是 Windows 与 macOS 平台）。尽管今日未发布新版本，但一系列修复与增强功能正稳步推进于审查与合并阶段，预示着即将推出更新。

---

### **2. 发布情况**  
*今日未发布新版本。*  
最新稳定版仍为 `v2026.11.3`，该版本改进了更新验证、插件目录处理及会话恢复机制。运维人员需注意，近期出现的回归问题（如 #191847、#193094）可能影响此版本在高负载或受控更新场景下的部署表现。

---

### **3. 项目进展**  
**今日合并的 PR：**  
- ✅ **[PR #183168](https://github.com/openclaw/openclaw/pull/183168)**：修复会话代理与 UI 间 MCP 发现的错位问题，避免会话切换时出现 `FORBIDDEN` 错误。  
- ✅ **[PR #183166](https://github.com/openclaw/openclaw/pull/183166)**：通过修复 `/avatar/<id>` URL 路由，解决会话视图中缺失数据头像的问题。  
- ✅ **[PR #182079](https://github.com/openclaw/openclaw/pull/182079)**：在控制台 UI 中为敏感配置字段添加明确的“替换”按钮，提升凭据管理的用户体验。  
- ✅ **[PR #182598](https://github.com/openclaw/openclaw/pull/182598)**：通过解决早期线程租约冲突，实现应用发现过程中的首次回复功能。  
- ✅ **[PR #182977](https://github.com/openclaw/openclaw/pull/182977)**：确保持久化用户请求在 `agent_end` 观察中被保留，以支持准确的审计日志记录。  
- ✅ **[PR #179611](https://github.com/openclaw/openclaw/pull/179611)**：在构建失败后清理失败的临时插件树，减少磁盘冗余。  
- ✅ **[PR #192128](https://github.com/openclaw/openclaw/pull/192128)**：在向导步骤被拒绝后重新聚焦输入框，改善表单可用性。  
- ✅ **[PR #193599](https://github.com/openclaw/openclaw/pull/193599)**：防止主代理认证信息在存储迁移后泄漏至继承的录制内容中。  
- ✅ **[PR #181776](https://github.com/openclaw/openclaw/pull/181776)**：修正诊断信息，使 `models status` 中订阅阻塞与冷却状态得以区分。  
- ✅ **[PR #183251](https://github.com/openclaw/openclaw/pull/183251)**：通过分离关注点，改善 Android 元数据刷新失败的反馈机制。  
- ✅ **[PR #176264](https://github.com/openclaw/openclaw/pull/176264)**：停止多账号配置下误报的 Telegram 首次设置警告。

上述合并体现了对 **界面一致性**、**会话完整性**、**安全规范性** 及 **用户体验优化** 的持续投入，覆盖各平台。

---

### **4. 社区热点议题**  
最受关注且讨论最热烈的问题揭示了系统在 **可靠性**、**跨平台兼容性** 和 **核心架构瓶颈** 方面的深层挑战：

- 🔥 **[Issue #170956](https://github.com/openclaw/openclaw/issues/170956)** – *Windows 启动与更新不可靠*：32 条评论；因崩溃循环与 schtasks 权限问题被定为 P0 严重性。表明在托管服务环境中存在根深蒂固的 Windows 部署痛点。  
- 🔥 **[Issue #119720](https://github.com/openclaw/openclaw/issues/119720)** – *同步持久化阻塞事件循环（大规模场景）*：26 条评论；在高负载下对性能造成关键影响，暗示代理运行时设计存在根本性架构限制。  
- 🔥 **[Issue #191847](https://github.com/openclaw/openclaw/issues/191847)** – *大会话导致 SQLite 工作线程内存溢出崩溃*：11 条评论；自 2026.9.7 版本以来的回归问题。对长时间运行会话及生产环境构成高风险。  
- 🔥 **[Issue #193094](https://github.com/openclaw/openclaw/issues/193094)** – *托管更新挂起 57 分钟后才触发 SIGKILL*：11 条评论；严重阻碍用户体验与发布流程，暴露出更新验证逻辑的重大缺陷。

上述顶级问题揭示了系统在 **韧性**、**资源效率** 与 **部署可预测性** 方面日益增长的压力——尤其在企业级、长期运行的部署场景中更为明显。

---

### **5. 漏洞与稳定性**  
今日报告的高优先级稳定性问题包括：

| 严重性 | 问题编号 | 摘要 | 状态 | 修复 PR？ |
|--------|---------|--------|--------|--------|
| **P0** | [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows 重启失败，源于启动缓慢、关闭不干净及 schtasks 权限问题 | 开放 | ❌ 无 |
| **P0** | [#193094](https://github.com/openclaw/openclaw/issues/193094) | 托管更新挂起 57 分钟 → 触发 SIGKILL | 开放 | ❌ 无 |
| **P1** | [#191847](https://github.com/openclaw/openclaw/issues/191847) | 大会话导致 512MB SQLite 工作线程崩溃 → “准入已关闭” | 开放 | ❌ 无 |
| **P1** | [#181120](https://github.com/openclaw/openclaw/issues/181120) | macOS 网关因阻塞的 MessagePort 关闭而冻结 | 开放 | ❌ 无 |
| **P1** | [#182369](https://github.com/openclaw/openclaw/issues/182369) | 网关 RSS 内存每小时增长约 0.1 GiB，直至重启 | 开放 | ❌ 无 |

这些问题代表影响核心工作流的 **关键稳定性风险**。由于尚未提交修复 PR，推测其复杂度较高或需进行更深层次的架构重构。

---

### **6. 功能请求与路线图信号**  
用户驱动的功能请求显示出对 **定制化能力**、**安全控制** 与 **平台一致性** 的强烈需求：

- 📌 **[Feature #192009](https://github.com/openclaw/openclaw/issues/192009)** – 显式授权跨提供方的 cron 回退机制（如 OpenAI → xAI）。随着自动化可靠性提升，该功能预计将成为优先事项。  
- 📌 **[Feature #170997](https://github.com/openclaw/openclaw/issues/170997)** – 为内存 FTS 添加中文双字词分词器。对非英文用户具有极高相关性，可能纳入下一个 v2026.12 版本。  
- 📌 **[Feature #164620](https://github.com/openclaw/openclaw/issues/164620)** – 禁用托管插件目录源。对隔离网络或注重隐私的部署至关重要。  
- 📌 **[Feature #197739](https://github.com/openclaw/openclaw/pull/197739)** – 支持通过 `gateway.roles.definitions` 自定义成员角色。表明用户希望超越 `operator`/`viewer` 的细粒度权限控制。

这些请求预示着未来路线图将向 **企业级安全**、**多语言支持** 与 **可配置自主性** 演进。

---

### **7. 用户反馈摘要**  
用户反馈在多个维度上呈现一致痛点：

- **平台特异性不稳定**：Windows 与 macOS 用户频繁遭遇崩溃、卡死与静默失败（如 #170956、#181120）。  
- **会话可靠性差**：长时间会话存在内存泄漏（#182369）、消息丢失（#155119）与上下文损坏等问题。  
- **用户体验摩擦**：Safari 中缺少聊天编辑器（#195192）、头像渲染异常、错误信息不透明，降低用户信任感。  
- **安全与控制缺口**：用户渴望对认证、模型回退及插件行为拥有更精细的控制权。  
- **跨工具不一致**：静默丢弃（如 Telegram 回调载荷 #126950）、审批失败（#138528）与诊断信息不完整，令调试困难重重。

尽管存在诸多问题，社区仍保持高度活跃——从评论数量与详尽复现过程可见一斑，反映出对平台成功的坚定投入。

---

### **8. 待办清单关注**  
多个高影响力、长期未解决的问题仍待维护者重点关注：

- ⏳ **[Issue #119720](https://github.com/openclaw/openclaw/issues/119720)** – 大规模场景下同步持久化阻塞事件循环。关乎可扩展性，亟需架构评审。  
- ⏳ **[Issue #170956](https://github.com/openclaw/openclaw/issues/170956)** – Windows 可靠性问题。虽为 P0，但 32 条评论后仍未提交修复 PR。  
- ⏳ **[Issue #191847](https://github.com/openclaw/openclaw/issues/191847)** – 大会话内存溢出。回归问题，尚无修复路径。  
- ⏳ **[Issue #195192](https://github.com/openclaw/openclaw/issues/195192)** – Safari 聊天编辑器缺失。虽为简单但影响显著的 UI 问题。  
- ⏳ **[PR #163267](https://github.com/openclaw/openclaw/pull/163267)** – 同频道线程召回无完整可见性。已批准，但等待维护者审查。

上述条目构成了 **采纳与信任的关键瓶颈**，尤其对企业和国际用户而言。建议立即开展维护者优先级评估。

---

> ✅ **项目健康快照**：活动水平高，社区参与度强，但核心稳定性与平台一致性方面技术债务累积加剧。亟需加强对 P0/P1 漏洞及待办清单的优先处理，以维持发展势头。  
> 🔗 [GitHub 仓库](https://github.com/openclaw/openclaw) | [问题追踪器](https://github.com/openclaw/openclaw/issues) | [拉取请求](https://github.com/openclaw/openclaw/pulls)

---

## 横向生态对比

# **跨项目对比报告：个人AI代理生态 – 2026-11-14**

---

### **1. 生态概览**  
截至2026年末，开源个人AI代理领域呈现出快速创新、对安全性和运营控制的关注度持续提升，以及代理运行时架构日趋成熟的特征。各项目在专业化方向上逐渐分化——从全栈助手平台（OpenClaw、QwenPaw）到零信任执行环境（ZeroClaw），Hermes Agent则作为一款经过安全强化的模块化代理框架崭露头角。尽管技术路径各异，所有项目均沿着共同的发展轨迹前行：从基础自动化迈向企业级可靠性、可审计性与跨平台一致性。

---

### **2. 活跃度对比**  

| 项目 | 最近24小时问题数 | 最近24小时PR数 | 发布状态 | 健康评分* |
|------|------------------|----------------|----------------|---------------|
| **OpenClaw** | 325 | 500 | 无新发布 | ⭐⭐⭐⭐☆ (高) |
| **Hermes Agent** | 50 | 50 | 预发布版 (`v0.23.1+canary`) | ⭐⭐⭐⭐☆ (高) |
| **QwenPaw** | 17 | 35 | 无新发布 | ⭐⭐⭐⭐☆ (高) |
| **ZeroClaw** | 9 | 50 | 无新发布 | ⭐⭐⭐☆☆ (中) |
| **IronClaw** | 0 | 0 | — | ⭐☆☆☆☆ (低) |

> *健康评分：基于活跃度、稳定性信号、待办事项优先级和社区参与度综合评估（1–5星）。*

---

### **3. OpenClaw 的定位**  
OpenClaw 在生态系统中处于最**活跃且功能最丰富**的位置，拥有最高数量的问题与PR，反映出广泛的用户采纳和深度的工程投入。其技术路线聚焦于**会话完整性**、**跨平台可靠性**以及**UI/UX优化**，区别于专注于安全隔离（ZeroClaw）或模块化设计（Hermes）的同类项目。相较 QwenPaw 的频道中心设计和 ZeroClaw 的零信任模型，OpenClaw 更强调**端到端用户体验**，因此特别适合追求统一、生产就绪助手平台的高级用户与开发者。社区规模似乎最大，体现在顶级问题下的评论量极高（如 #170956：32条评论）。

---

### **4. 共同的技术关注点**  
多个项目在关键基础设施需求上趋于一致：

- **会话与状态管理**：  
  - OpenClaw (#182369)：堆外内存增长；大会话导致OOM崩溃  
  - QwenPaw (#8710, #8725)：每对话会话绑定失败，模型切换异常  
  - ZeroClaw (#12421)：定时任务缺乏会话密钥作用域 → 无提示缓存亲和性  
  → *需求：跨渠道与工作流的范围化、持久化会话状态*

- **安全加固与凭证控制**：  
  - OpenClaw (#193599)：迁移后认证信息泄露  
  - Hermes Agent (#87779)：会话搜索跨边界泄露  
  - ZeroClaw (#12408, #12402)：作用域内HTTP/TLS凭证管理  
  → *需求：由运维者控制、仅写入的密钥，具备严格访问边界*

- **跨平台可靠性**：  
  - OpenClaw (#170956, #181120)：Windows/macOS启动与更新卡顿  
  - QwenPaw (#8720)：因状态管理不当导致微信机器人冲突  
  - ZeroClaw (#12150)：macOS沙箱正则表达式问题阻塞文件访问  
  → *需求：支持操作系统特性的运行时处理，保持一致的故障模式*

- **部署灵活性**：  
  - QwenPaw (#8719)：支持基路径部署  
  - ZeroClaw (#12417)：通过 ADR-016 异常实现 WASM 插件唤醒调度  
  → *需求：可配置、反向代理友好的部署方式*

---

### **5. 差异化分析**  

| 项目 | 功能重点 | 目标用户 | 技术架构 |
|------|----------|----------|----------|
| **OpenClaw** | 统一界面、会话稳定性、多平台用户体验 | 高级用户、团队、助手开发者 | 单体+插件化；强调整体持久性与恢复能力 |
| **Hermes Agent** | 安全优先、可扩展语音/音频、看板工作流 | 开发者、注重隐私用户、团队协作成员 | 模块化、基于角色；受RFC驱动的架构 |
| **QwenPaw** | 频道集成（微信、钉钉）、插件可扩展性 | 企业集成商、消息密集型工作流 | 网关中心化；丰富的插件生命周期与CLI工具链 |
| **ZeroClaw** | 零信任执行、MITM出站代理、作用域凭证 | 隔离环境、合规敏感组织 | 沙箱化、运维可控运行时；基于ADR的安全模型 |
| **IronClaw** | — | — | —（近期无活动） |

> **核心差异化**：ZeroClaw 是唯一一个正在主动设计**网络层隔离**（MITM代理RFC）与**非泄漏凭证编排**的项目，使其成为高安全性部署场景下的首选。

---

### **6. 社区动量与成熟度**  

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw、QwenPaw、Hermes Agent | PR/问题数量高，频繁修复，活跃的RFC流程，强反馈循环 |
| **稳定化 / 成熟期** | ZeroClaw | 进展较慢但审慎，强调架构严谨性、安全审查与共识决策 |
| **停滞 / 风险期** | IronClaw | 24小时内无活动；若30天内未重新激活，存在被放弃风险 |

> OpenClaw 和 QwenPaw 显现出**规模化生产成熟度**的迹象，而 Hermes Agent 与 ZeroClaw 处于**预稳定、安全整合阶段**。IronClaw 仍为例外，缺乏可见动量。

---

### **7. 趋势信号**  
基于社区反馈与PR模式，行业关键趋势浮现：

- **零信任执行正成为标准**：如 ZeroClaw 与 Hermes Agent 所强调的**非泄漏密钥**、**作用域凭证**与**MITM代理**，表明在严肃部署中，无信任代理操作已不再是可选项。

- **会话保真度是关键用户体验要求**：在 OpenClaw、QwenPaw 与 ZeroClaw 中反复出现的会话作用域、模型绑定与缓存亲和性问题，凸显用户对**可预测、隔离对话**的需求——尤其在多用户或定时任务场景下。

- **频道集成需保持一致性**：微信、Telegram、Slack 集成问题揭示了**跨消息平台统一会话语义**的迫切需求，预示未来框架将更注重抽象层而非针对各频道的“拼凑”方案。

- **开发者体验驱动采纳**：插件CLI支持（QwenPaw #8554）、主题扩展点（QwenPaw #8071）、ADR机制（ZeroClaw）表明，**工具链成熟度**如今与核心功能同等重要。

> ✅ **对开发者的价值**：这些项目共同构建了一个**丰富、可定制、可集成的安全与扩展模式生态**，非常适合构建可扩展、可审计的AI代理。优先选择具有活跃RFC与结构化待办清单的项目（如 ZeroClaw、Hermes），可保障长期可行性。

---

> **最终建议**：对于**企业级、高安全性代理平台**，应投资于 **ZeroClaw** 与 **Hermes Agent**。对于**面向用户的、可生产使用的助手系统**，**OpenClaw** 与 **QwenPaw** 在可用性与可扩展性方面领先。请密切监控 **IronClaw**；若连续30天无活动，建议降低依赖风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **赫尔墨斯代理项目简报 – 2026-11-14**

---

### **1. 今日概览**  
赫尔墨斯代理项目持续保持高度活跃，过去24小时内更新了50个问题和50个拉取请求，表明社区参与度强劲且开发势头不减。`v0.23.1+canary.20261113T064447Z` 版本的发布，凸显了在潜在稳定版 v0.24 发布前对迭代改进与稳定性测试的关注。大量拉取请求聚焦于安全强化（特别是凭证暴露、文件访问控制及内容脱敏），反映出对信任机制与数据保护的更高要求。开放问题数量众多，暗示功能积压正在增长，用户驱动的创新活动活跃；而关闭项则验证了强大的问题分类管理能力。

---

### **2. 发布情况**  
**新版本**：[`v0.23.1+canary.20261113T064447Z`](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261113T064447Z)  
- **发布时间**：2026年11月13日  
- **类型**：预发布版本（小范围试用）  
- **核心亮点**：  
  - 包含 *Sec-Marathon-2026-11-13* 安全行动中的多项修复（如凭证掩码、文件预览防护、URL 脱敏）。  
  - 修复了仪表板、网关及 CLI 工具中与密钥泄露和无界文件读取相关的关键漏洞。  
  - 未报告破坏性变更；旨在用于测试与反馈，为正式集成做准备。  
- **下载选项**：可通过 [hermes-assets.nousre](https://hermes-assets.nousre) 获取适用于 macOS Apple Silicon (M系列) 的 DMG 文件（链接不完整但可正常使用）。

> 🔗 [查看完整发布说明](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261113T064447Z)

---

### **3. 项目进展**  
**今日合并/关闭的拉取请求 (PRs)**：1  
- ✅ **[PR #155432]**：`fix(plugins): a linked plugin gets an update hint that works, not adopt`  
  - 修复使用符号链接时插件管理中的混淆问题。现在会正确提示用户执行 `pull` 更新，而非因“解析超出插件目录”而失败。  
  - 提升开发者管理外部插件仓库时的可用性。

**今日值得关注的已关闭问题**：  
- 🛡️ **[Issue #77111]**：*RFC: RealtimeVoiceProvider ABC 接口设计* — 在四个竞争性的双向语音 PR 长期停滞后，经过讨论达成高影响力架构决策，现优先采用抽象基类 + 协调器模式。  
- 🔒 **[Issue #87779]**：*session_search 工具缺乏所有权作用域* — 已实现安全修复；现尊重聊天/个人资料边界，防止跨会话对话记录泄露。  
- ⚠️ **[Issue #155310]**：*cron 重启安全采纳在负载下失败* — 已由进行中的 PR 处理；很可能已在本预发布版本中解决。

---

### **4. 社区热议话题**  
评论数最高的3个问题反映了用户的深层关切：

1. **[Issue #77111] RFC: RealtimeVoiceProvider ABC**  
   - **评论数**：29 | **链接**：[GitHub #77111](https://github.com/nousresearch/hermes-agent/issues/77111)  
   - **分析**：多个竞争性语音集成 PR 因缺乏统一接口而停滞。此问题成为推动 API 标准化的催化剂——用户希望实现实时音频交互而不受碎片化影响，反映出对可扩展、模块化语音系统的强烈需求。

2. **[Issue #135487] cron: database is locked on restart-safe worker**  
   - **评论数**：12 | **链接**：[GitHub #135487](https://github.com/nousresearch/hermes-agent/issues/135487)  
   - **分析**：影响定时任务可靠性的严重缺陷。用户报告系统重启期间任务丢失——对生产环境具有极高严重性。与 **[Issue #155310]** 同源，表明问题紧迫。

3. **[Issue #149025] Auto-generated session title is mojibake for Turkish text**  
   - **评论数**：3 | **链接**：[GitHub #149025](https://github.com/nousresearch/hermes-agent/issues/149025)  
   - **分析**：本地化痛点。非拉丁字符支持仍不稳定。凸显出在各界面（Telegram、桌面端、终端界面）需加强 Unicode 处理能力。

---

### **5. 问题与稳定性**  
**高优先级问题 (P1/P2)**：  
| 问题 | 严重性 | 状态 | 修复 PR？ | 描述 |
|------|----------|--------|---------|-------------|
| [#135487](https://github.com/nousresearch/hermes-agent/issues/135487) | P1 | 打开 | ❌ | Cron 工作器在 `database is locked` 时退出，导致任务丢失。 |
| [#155310](https://github.com/nousresearch/hermes-agent/issues/155310) | P2 | 打开 | ⚠️ | 同上——负载下重启安全采纳静默失败。 |
| [#146835](https://github.com/nousresearch/hermes-agent/issues/146835) | P3 | 打开 | ❌ | 在 `busy_input_mode: steer` 模式下，图像后续操作被排队而非引导当前动作。 |

**稳定性信号**：  
- 反复出现的 `sqlite3.OperationalError: database is locked` 错误，表明持久化存储层存在并发瓶颈。  
- 多个拉取请求（如 #155427、#155428）正在处理文件 I/O 边界与原子性问题——暗示底层基础设施脆弱。

---

### **6. 功能请求与路线图信号**  
顶级功能请求揭示了新兴用户需求：

- **语音与音频集成**  
  - [Issue #77111] → *RealtimeVoiceProvider ABC 接口*  
    - 信号：对标准化、可插拔语音提供者（TTS、双向语音）有强烈需求。极有可能纳入 v0.24。
  - [Issue #153488] → *允许桌面插件在原生语音选择器中注册引擎*  
    - 用户诉求：将第三方语音工具（如 Synero Live Voice）无缝集成至核心界面。

- **用户界面与用户体验优化**  
  - [Issue #112877] → *可配置内联 ::preview 框架的最大宽度*  
    - 信号：构建仪表盘/数据可视化用户需要灵活布局控制。
  - [Issue #146873] → *文档说明 Slack 原生 Markdown 块选项*  
    - 信号：平台特定文档缺失阻碍了推广与采纳。

- **高级配置与控制**  
  - [Issue #100944] → *Kanban：按配置文件禁止工作器创建/链接*  
    - 信号：团队环境中需要更细粒度的权限模型。

> 📌 **预测将纳入 v0.24**：实时语音抽象、可配置预览框宽度、以及改进的 Kanban 角色隔离。

---

### **7. 用户反馈摘要**  
- **满意度**：高度赞扬预发布周期的透明度及安全修复（如脱敏功能提升）。  
- **痛点**：  
  - **安全疲劳**：尽管已有脱敏功能，用户仍频繁遭遇凭证泄露——表明过度依赖事后补救。  
  - **流程摩擦**：插件链接、配置编辑、会话恢复（如清晰卡片显示答案）降低用户体验。  
  - **平台不一致**：非拉丁脚本下 Telegram 标题乱码；不同网关间图像处理行为差异明显。  
- **使用场景**：  
  - 开发者将赫尔墨斯作为本地 AI 代理用于编码（LSP、终端工具）。  
  - 团队部署基于配置文件访问控制的 Kanban 流程。  
  - 高级用户集成自定义技能与语音代理。

---

### **8. 待办事项监控**  
需维护者重点关注的关键长期或资源不足问题：

| 问题 | 链接 | 状态 | 为何重要 |
|------|------|--------|----------------|
| [Issue #77111] | [GitHub #77111](https://github.com/nousresearch/hermes-agent/issues/77111) | 打开 | 必须做出核心架构决策以解决语音提供者混乱局面。阻碍未来语音集成。 |
| [Issue #155365] | [GitHub #155365](https://github.com/nousresearch/hermes-agent/issues/155365) | 打开 | 插件安装绕过版本检查——在旧版本主机上存在安全风险。 |
| [Issue #154951] | [GitHub #154951](https://github.com/nousresearch/hermes-agent/issues/154951) | 打开 | 配置重写跳过托管密钥检查——可能导致权限提升。 |
| [Issue #154944] | [GitHub #154944](https://github.com/nousresearch/hermes-agent/issues/154944) | 打开 | A2A 服务器接受负值 Content-Length——存在潜在拒绝服务攻击向量。 |

> 🔔 **建议**：优先处理 **#77111** 和 **#154944**——两者均代表系统性风险，若未解决可能动摇用户信任。

---

**最终评估**：  
赫尔墨斯代理正处于**高强度安全加固与架构整合阶段**，由用户需求与主动威胁建模共同驱动。尽管稳定性与用户体验仍是关注点，但项目整体健康状况良好，体现在高贡献者活跃度、明确的路线图信号以及对漏洞的快速响应。随着 v0.23.1+canary 版本稳定核心组件，迈向 v0.24 的路径前景乐观——前提是当前基础性问题的积压能获得及时关注。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw 项目简报 – 2026-11-14**

---

### **1. 今日概览**  
QwenPaw 社区活跃度高，过去24小时内新增35个拉取请求（pull requests）并更新了17个开放问题，反映出持续的开发投入与真实场景中的使用挑战。项目整体保持稳定，暂无新版本发布，但围绕模型网关故障、微信渠道不稳定及令牌追踪等问题出现大量关键修复，表明团队对生产环境可靠性持续关注。功能进展方面，插件扩展性、控制台自定义以及会话管理优化均展现出强劲势头。总体来看，QwenPaw 呈现健康状态：贡献者活动频繁、问题分类精准，用户需求与工程优先级高度对齐。

---

### **2. 发布情况**  
*今日未发布新版本。*  
最新版本仍为 **v2.3.0**（发布于 2026-11-11）。目前无需重大变更或迁移说明。未来更新预计将涵盖插件生命周期管理优化、渠道稳定性提升（如 Matrix、微信），以及对定时任务和消息通道的会话控制能力增强。

---

### **3. 项目进展**  
今日多个关键拉取请求已合并或关闭，推动核心功能演进：

- ✅ **PR #8729** ([fix(hub): expose request_headers on AnthropicProvider presets](https://github.com/agentscope-ai/QwenPaw/pull/8729)) 通过暴露缺失的 `request_headers()` 方法，解决了 `anthropic`、`minimax` 及 `minimax-cn` 预设在 Hub 模型网关中出现的严重失败问题，直接修复了 Issue #8718。
- ✅ **PR #8728** ([fix(providers): use declared Responses thinking-off control](https://github.com/agentscope-ai/QwenPaw/pull/8728)) 确保 `disable_thinking=True` 在所有支持该功能的模型上正确禁用推理逻辑，修复了 Issue #8727 中报告的不一致行为。
- ✅ **PR #8721** ([fix(plugins): retry recovery before enabling plugins](https://github.com/agentscope-ai/QwenPaw/pull/8721)) 通过在启用插件前增加恢复重试机制，提升了微信渠道启动时的容错能力，直接应对了 Issue #8709 的部分问题。
- ✅ **PR #8720** ([fix(wechat): prevent false bot conflicts and isolate workspace state](https://github.com/agentscope-ai/QwenPaw/pull/8720)) 通过解耦凭证存储与运行中的 Bot 状态，有效缓解了 `ACCOUNT_IN_USE` 的误报问题，显著增强微信渠道的可靠性。
- ✅ **PR #8719** ([feat(console): support runtime base-path deployment](https://github.com/agentscope-ai/QwenPaw/pull/8719)) 支持将 Console 和 API 部署在可配置路径前缀（如 `/app/`）下，解决了 Issue #8714。

上述 PR 充分体现了对 **稳定性**、**部署灵活性** 与 **插件健壮性** 的高度重视。

---

### **4. 社区热点话题**  
讨论焦点集中在深度定制、系统可靠性与跨渠道一致性：

- 🔥 **Issue #8071** ([Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)): 13 条评论；用户呼吁超越 `colorPrimary` 的更深层次主题控制，要求支持语义令牌覆盖。*这表明插件层面的 UI 一致性与设计自主性需求日益增长。*
- 🔥 **Issue #8710** ([Per-conversation session binding](https://github.com/agentscope-ai/QwenPaw/issues/8710)): 1 条评论；指出消息渠道存在根本性用户体验缺陷：缺乏真正的会话切换（`/new`, `/switch`）与对话隔离机制。*用户期望每个发送方拥有独立聊天线程——这对多用户环境至关重要。*
- 🔥 **PR #8554** ([feat(plugins): support CLI commands and extension points](https://github.com/agentscope-ai/QwenPaw/pull/8554)): 正在评审中，规模 XXXL；旨在通过 Click 标准化插件的 CLI 集成。*反映出开发者对插件工具链与开发体验的兴趣正在上升。*
- 🔥 **Issue #8725** ([Model switch not working in channels](https://github.com/agentscope-ai/QwenPaw/issues/8725)): 1 条评论；用户反馈在钉钉/飞书频道中 `/model` 命令无法切换当前激活模型。*指向会话模型绑定逻辑中的系统性问题。*

这些话题共同揭示出用户对 **更高控制力**、**模块化可扩展性** 以及 **跨渠道一致的会话语义** 的强烈需求。

---

### **5. 问题与稳定性**  
今日报告了若干影响生产可用性的严重问题：

| 严重程度 | 问题 | 摘要 | 是否有修复 PR？ |
|--------|-------|---------|--------|
| ⚠️ 高 | [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718) | Anthropic/Minimax 预设的 Hub 模型网关因缺少 `request_headers()` 而立即失败 | ✅ **是** – 已提交 PR #8729 |
| ⚠️ 高 | [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709) | 微信渠道启动失败（`ACCOUNT_IN_USE`），且成功状态返回为 `PLATFORM_RESULT_UNKNOWN` | ✅ **部分修复** – PR #8721（bug 2）与 #8720 解决根本原因 |
| ⚠️ 高 | [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) | 当模型耗尽全部 4000 令牌预算时，响应续写摘要功能失效 | ✅ **是** – PR #8728 修复了 `disable_thinking` 行为 |
| ⚠️ 中 | [#8725](https://github.com/agentscope-ai/QwenPaw/issues/8725) | `/model` 命令在频道中无法切换会话级模型 | ❌ 尚无修复；需深入重构会话模型绑定逻辑 |
| ⚠️ 中 | [#8712](https://github.com/agentscope-ai/QwenPaw/issues/8712) | 资源保护终止时隐藏结果，导致模型循环 | ❌ 尚无修复；影响 Shell 工具安全性和模型反馈 |

这些问题反映出在 **渠道集成**、**资源限制** 与 **模型响应处理** 方面仍面临持续压力——均为代理可靠性核心环节。

---

### **6. 功能请求与路线图信号**  
新兴路线图方向包括：

- 🎨 **UI/UX 定制化**：Issue #8071 与 PR #8719 显示对 **主题可扩展性** 与 **基础路径部署** 的强烈需求，预示未来版本可能引入模块化主题与反向代理支持。
- 🔄 **会话管理**：Issue #8710 与 #8725 强调对 **按对话绑定会话**、**真正 `/new` 行为** 与 **动态模型切换** 的需求——极可能成为 v2.4 版本重点。
- 📊 **定时任务与令牌追踪**：Issue #8705 揭露了 **定时任务中令牌使用日志缺失** 的缺口，预计将在后续任务追踪更新中解决。
- 🧩 **插件生态发展**：PR #8554 与 Issue #8071 表明 **插件 CLI 支持**、**扩展点** 与 **插件专属主题** 正成为优先事项——显示插件框架正趋于成熟。

预计 **v2.4** 将聚焦于 **会话完整性**、**插件能力强化** 与 **跨渠道一致性**。

---

### **7. 用户反馈摘要**  
真实使用痛点反映了高级使用模式：

- **微信渠道不稳定** 是反复出现的投诉：用户反映无法启动机器人或获取准确发送状态反馈。
- **频道内模型切换失败** 让依赖动态模型选择的用户感到困扰。
- **定时任务中的令牌核算缺失** 严重影响成本可见性，尤其对自动化工作流而言。
- **创作助手输入延迟**（Issue #8706）暗示长对话场景下的可扩展性隐患。
- **含 `#` 的 Windows 路径附件解析失败** 突显文件处理中的操作系统特异性边缘案例。

用户重视 **可靠性**、**行为可预测性** 与 **细粒度控制**，但在集成层仍遭遇明显摩擦。

---

### **8. 待办清单监控**  
需维护者重点关注的高优先级问题：

- 🔴 **Issue #8071** ([Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)): 13 条评论，0 个点赞，已存在 15 天。*对插件开发者至关重要；亟需架构决策。*
- 🔴 **Issue #8710** ([Per-conversation session binding](https://github.com/agentscope-ai/QwenPaw/issues/8710)): 1 条评论，0 个点赞，1 天龄。*消息渠道的根本性 UX 缺陷——必须优先处理。*
- 🔴 **Issue #8725** ([Model switch not working in channels](https://github.com/agentscope-ai/QwenPaw/issues/8725)): 1 条评论，0 个点赞，1 天龄。*直接影响工作流灵活性。*
- 🔴 **Issue #8705** ([Cron token usage not logged](https://github.com/agentscope-ai/QwenPaw/issues/8705)): 2 条评论，0 个点赞。*影响计费透明度与监控能力。*

这些问题代表了在会话、模型与成本追踪方面的 **系统性缺口**，对可用性与信任度构成紧迫挑战。

--- 

**简报生成时间：** 2026-11-14  
**数据来源：** GitHub – agentscope-ai/QwenPaw  
**分析方法：** 活动驱动、问题/拉取请求聚类、情感推断、趋势预测

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目简报 – 2026-11-14**

---

### **1. 今日概览**  
ZeroClaw 项目持续保持高度活跃，核心聚焦于安全加固、代理运行时完整性以及由操作员控制的凭据管理。过去 24 小时内共新增或更新了 9 个问题与 50 个拉取请求（Pull Requests），反映出社区参与度高且迭代迅速。尽管尚未发布新版本，但在核心安全架构（如 MITM 出站代理 RFC）和基础设施稳定性（如 cron 任务会话范围修复）方面已取得显著进展。项目在应对高风险安全问题的同时，仍维持对代理行为的可控性，展现出强劲的发展势头。

---

### **2. 发布情况**  
截至 2026-11-14，未发布新版本。最新稳定版仍为 **v0.9.0 (6c78ba5)**，当前工作重点集中在预发布阶段的改进，包括密钥处理、代理隔离及安全通信通道优化。

---

### **3. 项目进展**  
*本日合并/关闭 1 个 PR（PR #12150），另有 49 个仍在开放中。*  
- **PR #12150** (`fix(runtime): emit single SBPL backslash for home-dotfile regex`) 修复了 macOS Seatbelt沙盒机制中的一个缺陷，此前该问题导致对 `~/.cargo`、`~/.nvm` 等路径的访问被阻断，原因是正则表达式转义错误。此修复确保在 Apple 安全模型下可正确访问工具配置文件。
- 多项关键功能 PR 正并行推进：  
  - **PR #12408** (feat(web): manage scoped HTTP credentials) 与 **PR #12402** (feat(web): manage write-only plugin TLS credentials) 正在构建一个安全、由操作员控制的凭据目录系统。  
  - **PR #12418** (feat(ssh): use scoped credentials in task-owned transports) 实现了使用加密密钥和 OpenBao 引用进行 SSH 访问，而无需将凭据暴露给代理。

这些进展标志着项目正向所有绑定代理服务的 *零信任凭据编排* 模式迈进。

---

### **4. 社区热点话题**  
顶级活动集中于 **安全架构**、**操作员控制权** 和 **代理自主边界**：

- **Issue #12422** ([RFC]: Scoped use of operator-managed service credentials) — 新增高优先级 RFC（安全：重大变更），提议一种机制，使操作员可在不暴露底层凭据的前提下授权代理任务调用外部服务。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12422)  
- **Issue #12001** ([RFC]: MITM egress proxy to control what the agent can access) — 一项基础性安全 RFC，旨在通过网络层过滤和秘密屏蔽，遏制被攻陷代理的影响范围。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12001)  
- **PR #12417** (docs(runtime): propose ADR-016 exception for plugin wake dispatch) — 支持通过主机中介调度实现关键 WASM 插件集成，从而启用安全的进程间通信。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12417)

这些议题反映出对 **操作主权** 与 **攻击面最小化** 在智能体系统中的日益增长的需求。

---

### **5. 问题与稳定性**  
今日报告 5 个问题，按严重性排序：

| 严重性 | 问题 | 摘要 | 修复 PR？ |
|--------|------|--------|-------|
| S2 | [#12413](https://github.com/zeroclaw-labs/zeroclaw/issues/12413) | OpenCode Go 上下文窗口发现返回无容量 | ❌ |
| S2 | [#12412](https://github.com/zeroclaw-labs/zeroclaw/issues/12412) | OpenCode Go 使用 Zen 的模型目录而非 Go 的 | ❌ |
| S3 | [#12421](https://github.com/zeroclaw-labs/zeroclaw/issues/12421) | 代理 cron 任务缺少会话密钥范围 → 无提示缓存亲和性 | ⚠️ 部分解决于 PR #12417（但尚未合并） |
| S3 | [#12415](https://github.com/zeroclaw-labs/zeroclaw/issues/12415) | 仪表板登出未触发 OIDC RP 初始化登出 | ❌ |
| S3 | [#12416](https://github.com/zeroclaw-labs/zeroclaw/issues/12416) | 插件唤醒调度需要 ADR-016 异常 | ⚠️ PR #12417 待评审 |

值得注意的是，**OpenCode Go 提供商问题 (#12412, #12413)** 表明亟需更完善的提供商标记处理与注册表验证机制。

---

### **6. 功能请求与路线图信号**  
从高优先级问题中浮现的新兴趋势显示，用户强烈关注：
- **操作员主导的安全强制**：仅写凭据管理 (#12373)，作用域服务访问 (#12422)，以及 MITM 代理 (#12001)。
- **代理生命周期精准控制**：会话作用域 cron 任务 (#12421)，重复调用去重 (#11868)，以及通道进度报告 (#11874)。
- **跨平台可靠性**：修复 macOS 沙盒漏洞 (#12150)，WebSocket 凭据泄露 (#12335)，以及 TLS 重放缓存一致性 (#11847)。

**对 v0.10.0 的预测**：预计将迎来一次重大发布，聚焦于 **安全凭据编排**、**基于 MITM 的出站控制** 与 **作用域代理执行环境**——并可选支持基于 WebUI 的审计追踪与合规日志功能。

---

### **7. 用户反馈摘要**  
用户痛点主要集中在 **信任与透明度** 上：
- 操作员希望全面掌握代理所使用的凭据，尤其是与外部 API 或 SSH 服务交互时。
- 开发者反映提供商标记不一致的问题（例如：OpenCode Go 获取了错误的模型列表）。
- 用户期望无缝的 OIDC 登出流程，以避免静默重新认证。
- 明确需求在于 **非泄漏式凭据暴露**：代理不应以任何形式（包括日志或聊天历史）间接接触敏感信息。

正面情绪则体现在对 **结构化 RFC 流程**、**透明决策机制** 与 **严密安全姿态** 的认可上，显示出用户对项目发展方向的高度信心。

---

### **8. 待办事项观察**  
多个长期存在且影响深远的事项亟需维护者关注：

- **Issue #11138** ([enhancement] define caller tool-level approval in bounded delegation) — 已接受（状态：已接受），但自 2026 年 9 月以来仍未解决。对定义嵌套代理工作流中的信任边界至关重要。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11138)
- **Issue #11868** (fix(agent): stop repeated calls before dispatch) — 已合并至 `master`，但仍需正式文档与 ADR 跟踪。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11868)
- **Issue #12001** (RFC: MITM egress proxy) — 高风险安全 RFC，待核心团队达成共识；尽管战略意义重大，目前仍处于停滞状态。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12001)

这些事项构成项目安全演进中的 **战略瓶颈**，应优先安排评审与解决。

---  
*数据来源：GitHub — zeroclaw-labs/zeroclaw (2026-11-14)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*