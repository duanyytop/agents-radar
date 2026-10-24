# OpenClaw 生态日报 2026-10-24

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-24 01:00 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# **OpenClaw 项目简报**  
**日期：** 2026-10-24  
**仓库：** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)  

---

### **1. 今日概览**  
OpenClaw 项目持续高度活跃，过去 24 小时内更新了 **500 个问题与 500 个拉取请求**，反映出高强度的开发节奏与用户参与度。问题积压清单显示，项目重点聚焦于稳定性、性能与可靠性——尤其集中在启动延迟、内存管理、磁盘清理以及跨平台（Windows、macOS、Android/Termux）兼容性方面。尽管今日无新版本发布，但多项高优先级的缺陷修复与功能增强正在评审或已合并，表明系统虽已成熟，却仍在快速演进。社区主导的问题分类与维护者响应速度依然强劲，但部分关键回归问题已影响生产环境可用性。

---

### **2. 版本发布**  
❌ **今日未发布新版本**。  
- 最近一个稳定版本仍为 **2026.9.6**，用户反馈在 **2026.10.1** 和 **2026.10.2** 版本中存在显著回归。  
- 本阶段无迁移说明、破坏性变更或版本发布公告。

---

### **3. 项目进展**  
✅ **关键已合并/更新的 PR（24h）**：  
- **[PR #182053]** 修复：即使禁用 cron 也应用归档保留策略 —— 解决静默数据累积问题 ([#181976](https://github.com/openclaw/openclaw/issues/181976))。  
- **[PR #182048]** 修复：空闲 3 分钟后释放 PostgreSQL 桥接 —— 提升长运行网关的资源整洁度。  
- **[PR #182066]** 性能优化：避免在 cron 轮次记账中重复进行权限检查 —— 每轮减少约 38,000 次权限校验开销。  
- **[PR #182059]** 修复：UI 中尊重代理特定的 `verboseDefault` 配置 —— 使聊天历史展示与代理配置保持一致。  
- **[PR #182052]** 修复：Ollama Web 搜索正确遵循 `maxResults` 与 `timeoutSeconds` —— 修复误配置行为。  
- **[PR #182039]** 文档：明确超大沙盒制品恢复步骤 —— 提升管理员对错误的可见性。  

🔹 这些更新体现出对 **资源效率**、**UI 一致性** 与 **配置保真度** 的强烈关注，尤其在边缘场景下表现突出。

---

### **4. 社区热点话题**  
🔥 **按评论数与严重性排序的热门问题**：  
| 问题 | 标题 | 评论数 | 严重性 | 链接 |  
|------|-------|---------|----------|------|  
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 插件捕获期间网关阻塞数分钟（2026.9.6 回归） | 44 | 🦞 P0（崩溃循环） | [查看](https://github.com/openclaw/openclaw/issues/160959) |  
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 网关状态数据库 WAL 检查点永远无法完成（被读取器锁定） | 29 | 🦪 P2（其他） | [查看](https://github.com/openclaw/openclaw/issues/164294) |  
| [#180690](https://github.com/openclaw/openclaw/issues/180690) | `doctor --fix` 在 6GB 时引发堆内存溢出（v28 → v31） | 20 | 🦪 P1（崩溃循环） | [查看](https://github.com/openclaw/openclaw/issues/180690) |  
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 启动性能退化：1030 秒对比 410 秒（2026.10.1 对比 2026.9.9） | 18 | 🦪 P1（崩溃循环） | [查看](https://github.com/openclaw/openclaw/issues/168955) |  
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows 重启/更新失败，因启动过慢 + schtasks 权限问题 | 16 | 🦪 P1（用户体验发布阻塞） | [查看](https://github.com/openclaw/openclaw/issues/170956) |  

🔍 **根本需求**：  
- **启动性能下降** 是多个操作系统平台（Windows、macOS）的共同痛点。  
- **内存与磁盘资源耗尽**（OOM、未清理 tmp 目录、WAL 阻塞）暗示生命周期管理与垃圾回收机制存在深层系统性问题。  
- **跨平台可靠性**（尤其是 Windows 与 Android）是终端用户的重大困扰。

---

### **5. 缺陷与稳定性**  
🚨 **报告的关键缺陷（P0/P1，影响：崩溃循环、用户体验发布阻塞）**：  
- **[#160959]** 插件捕获后事件循环阻塞长达 **数分钟**，影响所有大规模插件部署。*尚未提交修复 PR。*  
- **[#168955]** Windows 上启动时间从约 410 秒增至 **约 1030 秒**；sidecars.control-ui-assets 阻塞 477 秒。*2026.10.1 版本确认为回归。*  
- **[#158592]** 休眠唤醒后，一个代理无法恢复 —— 所有入站消息均失败，直至网关重启。*对可用性影响极高。*  
- **[#170928]** 2026.10.2 版本的 Windows 网关需 7–9 分钟才就绪，且持续无响应。*确认为回归。*  
- **[#164294]** WAL 检查点无限期卡住 —— 若不解决，存在数据库完整性风险。*尚无已知修复方案。*  

🛠️ **正在进行中的修复**：  
- **[PR #182057]** 修复回复屏障截止时间与单调时钟不同步问题 —— 降低时间漂移风险。  
- **[PR #182066]** 减少 cron 中的认证检查开销 —— 提升负载下的可扩展性。

---

### **6. 功能请求与路线图信号**  
💡 **用户呼声最高的功能（高参与度）**：  
| 功能 | 请求人 | 投票数 | 状态 | 链接 |  
|--------|--------------|-------|--------|------|  
| 代理级成本预算强制执行 | hkochar | 1 | ⏳ 需决策 | [#42475](https://github.com/openclaw/openclaw/issues/42475) |  
| 代理级“梦”配置 | aaronwong1989 | 5 | ⏳ 需审查 | [#67413](https://github.com/openclaw/openclaw/issues/67413) |  
| 单向分发模式（无往返） | Kaze310 | 1 | ⏳ 需审查 | [#44309](https://github.com/openclaw/openclaw/issues/44309) |  
| 可配置的梦境日记语言 | mtuwei | 2 | ⏳ 需审查 | [#79223](https://github.com/openclaw/openclaw/issues/79223) |  
| 交互式“记忆疗法”会话 | kip-claw | 0 | ⏳ 需设计 | [#105494](https://github.com/openclaw/openclaw/issues/105494) |  

🔮 **预测将纳入下一版本（2026.11）**：  
- **代理级成本预算**（企业采用的关键功能）。  
- **单向分发模式**（提升 A2A 可扩展性）。  
- **可配置的梦境日记语言**（面向全球用户的体验优化）。

---

### **7. 用户反馈摘要**  
🗣️ **来自用户的实际痛点**：  
- **性能退化** 引发用户不满：“网关启动需 10+ 分钟”（Windows）、“更新反复失败”（托管服务）。  
- **磁盘空间膨胀** 是持续问题：`/tmp/plugin-captures/` 无限增长且无自动清理。  
- **Windows 可靠性差**：schtasks 权限问题、非正常关机、更新失败。  
- **错误信息模糊**：无上下文提示“运行时所有者未发布”；工具返回“空响应”。  
- **配置缺失**：“无法设置回退模型链”，“无法在引导阶段添加多个提供方”。  

🎯 **用户满意度**：参半。核心功能仍可用，但近期回归导致 **稳定性与可靠性正在下滑**。成本控制与会话隔离等高价值功能备受期待。

---

### **8. 待办事项监控**  
👀 **长期积压、高影响问题亟待维护者关注**：  
| 问题 | 描述 | 年龄 | 状态 | 链接 |  
|------|-------------|-----|--------|------|  
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 网关状态数据库 WAL 检查点永不完成 | 21 天 | ✅ 开放，需修复 | [查看](https://github.com/openclaw/openclaw/issues/164294) |  
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | 插件捕获临时目录未被垃圾回收 —— 磁盘填满 | 30 天 | ✅ 开放，需修复 | [查看](https://github.com/openclaw/openclaw/issues/158390) |  
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 代理级成本预算强制执行（功能） | 230 天 | 🔍 需产品决策 | [查看](https://github.com/openclaw/openclaw/issues/42475) |  
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 代理级“梦”配置 | 230 天 | 🔍 需审查 | [查看](https://github.com/openclaw/openclaw/issues/67413) |  
| [#155563](https://github.com/openclaw/openclaw/issues/155563) | 代理回合后服务子进程仍被保留（回归） | 32 天 | ✅ 开放，需修复 | [查看](https://github.com/openclaw/openclaw/issues/155563) |  

📌 **行动建议**：维护者应优先处理 **WAL 检查点**、**磁盘清理** 与 **成本预算** 问题——它们代表了长期稳定性与运维信任的核心风险。

---

**下次更新**：关注 PR #182049、#182053 与 #182066 是否集成至下一个补丁版本。  
**项目健康评分**：⚠️ **中等风险** —— 开发活跃，但关键回归与资源泄漏威胁生产使用。

---

## 横向生态对比

# **跨项目对比报告：个人AI代理开源生态系统（2026-10-24）**

---

### **1. 生态系统概览**  
2026年第四季度，个人AI助手与代理开源生态系统呈现出快速迭代、企业就绪度提升，以及对稳定性、安全性和可扩展性关注度持续增长的特征。各项目成熟度开始分化：部分项目（如 OpenClaw、QwenPaw）正处于高强度开发阶段，伴随关键回归问题；而另一些项目（如 IronClaw、ZeroClaw）则趋于稳定或正准备重大发布。模块化架构、细粒度访问控制及跨平台可靠性成为明显趋势，这由在 Windows、macOS、Android 及容器化环境中的实际部署需求所驱动。

---

### **2. 活动对比**

| 项目 | 问题数（24小时） | PR数（24小时） | 发布状态 | 健康评分 |
|------|------------------|----------------|----------|----------|
| **OpenClaw** | 500 | 500 | ❌ 无新版本发布 | ⚠️ 中等风险 |
| **Hermes Agent** | 50 | 50 | ✅ v0.22.5（补丁版） | ✅ 高稳定性 |
| **IronClaw** | 0 | 5（自动更新） | ❌ 无新版本发布 | ✅ 健康但被动 |
| **QwenPaw** | 25 | 50 | ❌ 无新版本发布 | ⚠️ 高活跃度，中等风险 |
| **ZeroClaw** | 28 | 50 | ❌ 无新版本发布 | ⚠️ 关键预发布 |

> 🔍 *备注*：OpenClaw 和 QwenPaw 展现出最高的参与量，表明其已在生产环境中广泛使用，但存在显著痛点。ZeroClaw 的活动高度集中于预发布阶段的强化工作。IronClaw 用户驱动活动极少，依赖自动化依赖治理。

---

### **3. OpenClaw 的定位**  
**OpenClaw 是当前最活跃且规模最大的项目**，拥有前所未有的社区体量（每日500个问题/PR），反映出其在多样环境中的广泛采纳——尤其在 Windows、Android/Termux 以及托管服务场景中表现突出。其技术路线强调 **深度生命周期管理**（启动延迟、内存清理、WAL 完整性）和 **配置保真度**，区别于更侧重用户体验或访问控制的同类项目。相比 Hermes Agent（聚焦会话容错）或 ZeroClaw（安全优先），OpenClaw 更注重 **大规模场景下的系统稳定性与资源效率**，已成为大型代理部署的事实核心。然而，其庞大的社区规模也放大了回归风险，近期出现的启动时间飙升10倍及 OOM 崩溃等问题，凸显了规模与可靠性之间的权衡。

---

### **4. 共同技术关注点**  
各项目普遍面临以下系统性挑战：

| 需求 | 涉及项目 | 具体案例 |
|------|--------|--------|
| **启动与会话性能** | OpenClaw, QwenPaw, ZeroClaw | OpenClaw：启动时间从410秒升至1030秒；QwenPaw：会话卡死；ZeroClaw：WebSocket 升级失败 |
| **内存/磁盘资源泄漏** | OpenClaw, QwenPaw, ZeroClaw | OpenClaw：`/tmp/plugin-captures` 未清理；QwenPaw：48MB 媒体负载；ZeroClaw：RPC 会话耗尽 |
| **跨平台可靠性（Windows）** | OpenClaw, QwenPaw, ZeroClaw | OpenClaw：schtasks 权限问题；QwenPaw：QQ频道中断；ZeroClaw：PowerShell `@` 解析错误 |
| **会话状态完整性** | Hermes Agent, QwenPaw, ZeroClaw | Hermes：重复回复；QwenPaw：草稿残留；ZeroClaw：对话截断丢失 |
| **安全与访问控制** | ZeroClaw, OpenClaw, QwenPaw | ZeroClaw：OIDC 凭证泄露；OpenClaw：静默数据积累；QwenPaw：缺失工具策略执行 |

这些信号表明，**基础设施层面的健壮性**——而非功能丰富度——已成为当前采纳的主要瓶颈。

---

### **5. 差异化分析**

| 项目 | 功能重点 | 目标用户 | 架构核心差异 |
|------|--------|--------|-------------|
| **OpenClaw** | 系统稳定性、性能、可扩展性 | 企业运维、DevOps 团队、大规模部署 | 单体核心 + 深度生命周期钩子；重在守护进程生命周期与资源核算 |
| **Hermes Agent** | 会话持久化、目标追踪、界面保真度 | 个人高级用户、长期运行代理 | 有状态会话管理 + 上下文压缩；强桌面客户端集成 |
| **IronClaw** | 开发者体验、前端工具链 | 内部开发团队、CI/CD 流水线 | 前端主导，以 Storybook/Vitest 为核心；极少面向用户的特性 |
| **QwenPaw** | 可扩展性、插件模块化、媒体处理 | 开发者、集成者、多通道工作流 | 插件重构架构（v2.3.0）；丰富的媒体与频道特定逻辑 |
| **ZeroClaw** | 安全性、访问控制、企业治理 | 团队、受监管环境、合规驱动组织 | OIDC 优先访问模型；作用域仪表板；MITM 代理 RFC 支持 |

> 📌 **核心洞察**：尽管 OpenClaw 在规模与复杂性上领先，但 ZeroClaw 正在定义下一代 **企业级 AI 代理平台** 的标准，而 QwenPaw 则通过模块化设计塑造着 **插件经济** 的未来。

---

### **6. 社区势头与成熟度**  

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw, QwenPaw, ZeroClaw | 高问题/PR量，频繁提交缺陷报告，积极分类处理；聚焦修复回归与启用新功能 |
| **稳定化与维护** | Hermes Agent | 补丁导向更新（v0.22.5），响应迅速，新功能减少——成熟可靠的基础版本 |
| **被动 / 自动化驱动** | IronClaw | 用户参与度低；活动仅限 Dependabot PR；无可见反馈循环 |

> 🔥 **趋势**：生态系统正在分叉：**高势头项目** 正解决基础性问题（延迟、泄漏、安全），而 **稳定项目** 正成为特定用例的可信支柱。

---

### **7. 趋势信号**  
基于社区反馈与 PR 活动，以下行业趋势正在成型：

1. **企业就绪性已成为首要任务**  
   - ZeroClaw 的 OIDC 集成、基于角色的仪表板及 S1 安全漏洞，反映出对身份感知、可审计 AI 系统的需求。  
   - 每代理成本预算（OpenClaw、QwenPaw）与工具策略执行，表明对 **成本管控与合规性** 的要求日益迫切。

2. **模块化架构是下一前沿**  
   - QwenPaw 的 v2.3.0 路线图与 IronClaw 的 Storybook 升级，凸显向 **开发者优先设计、插件可扩展性与可测试性** 的转变。

3. **用户体验质量已不再是可选项**  
   - 重复回复（Hermes）、媒体崩溃（QwenPaw）、不可见错误（OpenClaw）正在侵蚀信任——表明 **可靠性与清晰度** 已与功能性同等重要。

4. **跨平台一致性是主要瓶颈**  
   - 所有项目的 Windows 特定问题占据主导——说明 **桌面与操作系统级兼容性** 仍是主流采纳的关键障碍。

5. **依赖治理是战略要务**  
   - IronClaw 依赖自动化更新，以及 ZeroClaw 对 `dompurify`、`certifi` 的紧急修复，凸显 **安全必须内嵌于开发流程**。

---

### ✅ **结论**  
个人AI代理生态系统正从新颖概念转向基础设施阶段。**OpenClaw 在规模与复杂性上处于领先地位**，但面临系统性稳定性挑战。**ZeroClaw 与 QwenPaw 正在定义下一代能力**：安全与模块化。**Hermes Agent** 展现了成熟可靠的个人代理使用范式。与此同时，**IronClaw 的低调维护** 反映出一个更广泛趋势：一旦稳定，项目便变得“隐形”——但不可或缺。对开发者与决策者而言，信息明确：**应优先考虑稳定性、安全性和可扩展性，而非花哨功能**。 “只要能用”的时代已经结束——现在，它必须 **可靠地、安全地、规模化地** 运行。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **赫尔墨斯代理项目简报 – 2026-10-24**

---

### **1. 今日概览**  
赫尔墨斯代理项目保持高度活跃，过去24小时内更新了50个问题和50个拉取请求，显示出强劲的开发势头。10月22日发布了一个新的补丁版本 **v0.22.5**，将约81个已合并的PR整合到所有平台的稳定构建中，包括CLI、Docker、微软商店及赫尔墨斯云。生态系统正聚焦于稳定会话管理、提升跨平台兼容性（尤其是Windows）、以及增强插件与网关工作流中的安全边界。与会话状态损坏、消息传递失败和认证异常相关的高危漏洞占据当前关注焦点。

---

### **2. 发布情况**  
- **[v0.22.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5)** *(发布日期：2026-10-22)*  
  - **类型**: 补丁版本  
  - **摘要**: 本版本将自v0.22.4以来约81个已合并的PR统一集成至所有平台的稳定版本中：GitHub CLI/安装程序、微软商店应用、Docker容器以及赫尔墨斯云。  
  - **重点方向**: 会话容错能力、流式传输可靠性、插件稳定性及平台特异性修复（尤其针对Windows）。  
  - **迁移说明**: 未报告破坏性变更。建议用户升级至v0.22.5以获得累积的错误修复与稳定性提升。完整变更日志将在即将发布的 **v0.23.0** 版本中提供。

---

### **3. 项目进展**  
**今日合并/关闭的拉取请求（20+条）:**  
- ✅ **PR #143820** – *fix(goals): 跨 session-id 轮换迁移持续目标*  
  → 确保在上下文压缩与自动重置周期中，`/goal` 跟踪保持持久化。对长期运行的代理工作流至关重要。
- ✅ **PR #143821** – *fix(desktop): 序列化桌面插件根目录的写入器*  
  → 解决插件安装启动序列中的 `ENOTEMPTY` 错误，防止崩溃。
- ✅ **PR #143822** – *fix(plugins): 可移植插件技能名称与插件同名*  
  → 通过简化技能命名（如 `blender:blender`）而非使用晦涩标识符，改善用户体验。
- ✅ **PR #143819** – *fix(discord): 跳过空数据块*  
  → 防止因空消息被Discord API拒绝（HTTP 400 错误码 50006）。
- ✅ **PR #143811** – *fix(cli): 无远程仓库时保留分支提交*  
  → 在 `hermes -w` 会话清理过程中防止意外数据丢失。

这些修复共同提升了**会话完整性**、**插件稳定性**与**平台互操作性**，尤其在Windows及Linux WSL环境中表现突出。

---

### **4. 社区热点话题**  
按互动量排序的热门问题/拉取请求：

| 问题/拉取请求 | 标题 | 评论数 | 严重程度 | 链接 |
|--------|------|---------|----------|------|
| [Issue #129993](https://github.com/NousResearch/hermes-agent/issues/129993) | 桌面端：助手回复重复渲染 | 17 | P2（高） | [查看问题](https://github.com/NousResearch/hermes-agent/issues/129993) |
| [Issue #139818](https://github.com/NousResearch/hermes-agent/issues/139818) | 远程后端会话无法恢复 —— `not_found` 错误 | 11 | P2（高） | [查看问题](https://github.com/NousResearch/hermes-agent/issues/139818) |
| [Issue #46303](https://github.com/NousResearch/hermes-agent/issues/46303) | 并发会话交叉污染（共享内存/git 工作树） | 11 | P2（高） | [查看问题](https://github.com/NousResearch/hermes-agent/issues/46303) |
| [PR #143820](https://github.com/NousResearch/hermes-agent/pull/143820) | 跨 session-id 轮换迁移持续目标 | — | P2（高） | [查看拉取请求](https://github.com/NousResearch/hermes-agent/pull/143820) |

**底层需求分析**:  
- **会话状态一致性**是反复出现的痛点：用户期望在重启、升级和远程连接后仍能可靠恢复会话行为。  
- **并发会话间的隔离性**对多用户或多任务场景至关重要。共享状态会导致不可预测的结果。  
- **UI呈现精度**（如重复回复）反映出桌面客户端深层的渲染与状态同步问题。

---

### **5. 漏洞与稳定性**  
今日报告的关键漏洞（按严重性排序）：

| 漏洞 | 描述 | 严重程度 | 状态 | 修复拉取请求？ |
|-----|-------------|----------|--------|---------|
| [Issue #129993](https://github.com/NousResearch/hermes-agent/issues/129993) | 助手回复在对话记录中重复出现（仅一条持久化） | P2 | 打开 | ❌ |
| [Issue #139818](https://github.com/NousResearch/hermes-agent/issues/139818) | 远程桌面会话无法恢复（`not_found`） | P2 | 打开 | ❌ |
| [Issue #46303](https://github.com/NousResearch/hermes-agent/issues/46303) | 并发会话共享内存/工作树 → 交叉污染 | P2 | 打开 | ❌ |
| [Issue #143775](https://github.com/NousResearch/hermes-agent/issues/143775) | 陈旧PID导致网关启动无限阻塞 | P2 | 已关闭 | ✅ （通过 PR #143775 修复） |
| [Issue #143816](https://github.com/NousResearch/hermes-agent/issues/143816) | 重新附加机器人屏幕时出现 `UnscopedSecretError`（Docker沙箱） | P2 | 打开 | ❌ |
| [Issue #143806](https://github.com/NousResearch/hermes-agent/issues/143806) | 日志过载 → 无界队列 → 内存持续增长 | P2 | 打开 | ❌ |

> **备注**: 尽管部分高危漏洞仍处于开放状态，但团队响应迅速——多数问题已在拉取请求中着手处理。

---

### **6. 功能请求与路线图信号**  
用户请求中浮现的趋势：

| 请求 | 摘要 | 优先级 | 重要性 |
|--------|--------|----------|--------------|
| [Issue #136931](https://github.com/NousResearch/hermes-agent/issues/136931) | 技能自我改进必须区分持久性经验与临时修复 | P3 | 反映对更智能、更负责任的AI学习机制的需求 |
| [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379) | RFC：文档链基础网络（读取、治理、压缩） | P2 | 显示构建永久可审计代理记忆层的意图 |
| [Issue #143053](https://github.com/NousResearch/hermes-agent/issues/143053) | 插件目录指南支持完整工作流/源代码包 | P3 | 表明生态成熟度提升，亟需正式插件标准 |
| [Issue #118181](https://github.com/NousResearch/hermes-agent/issues/118181) | 从操作系统文件管理器粘贴文件（Ctrl+C/V），保留原始路径 | P3 | 用户导向的体验优化；与主流聊天客户端一致 |

**对 v0.23.0 的预测**: 基于上述信号，预计将进一步强化 **会话持久性**、**插件治理** 与 **文档链记忆架构**。

---

### **7. 用户反馈摘要**  
用户报告的真实痛点：

- **Windows 安装失败** ([#131199](https://github.com/NousResearch/hermes-agent/issues/131199))：首次运行安装在Python依赖阶段失败——新用户采用的拦路虎。
- **Discord语音消息损坏** ([#123680](https://github.com/NousResearch/hermes-agent/issues/123680))：TTS生成MP3，但Discord要求Opus → 音频无法播放。需添加转码回退机制。
- **桌面UI异常**：助手气泡重复显示 ([#129993](https://github.com/NousResearch/hermes-agent/issues/129993)) 和“未确认发送”闪烁提示 ([#143285](https://github.com/NousResearch/hermes-agent/issues/143285)) 降低对代理输出的信任感。
- **远程会话中断**：用户报告无法恢复通过远程后端发起的对话，尤其是在切换设备或重启服务器时。

**满意度备注**: 尽管存在缺陷，用户仍赞赏团队快速响应和对补丁及修复的清晰沟通。

---

### **8. 后备任务监控**  
长期存在且影响重大的问题，需维护者重点关注：

| 问题 | 描述 | 年龄 | 状态 | 优先级 |
|------|-------------|-----|--------|----------|
| [Issue #46303](https://github.com/NousResearch/hermes-agent/issues/46303) | 并发会话交叉污染（共享内存 + git 工作树） | 4个月 | 打开 | ⚠️ 关键 |
| [Issue #98801](https://github.com/NousResearch/hermes-agent/issues/98801) | `lifecycle_guard` 递归阻塞赫尔墨斯文档读取 | 2个月 | 打开 | P3（但具系统性） |
| [Issue #136931](https://github.com/NousResearch/hermes-agent/issues/136931) | 技能自我改进可能破坏良好工作流 | 1个月 | 打开 | 需决策 |
| [Issue #96703](https://github.com/NousResearch/hermes-agent/issues/96703) | MCP信任门批准卡缺乏调用参数可见性 | 2个月 | 已关闭 | 仍相关 |

> **建议**: 优先处理 **#46303** 和 **#136931**，因其直接威胁核心代理的可靠性与自主性。这是实现安全、可扩展使用的基础。

---

**最终评估**:  
赫尔墨斯代理正处于 **高速成长、高稳定性阶段**。快速迭代与强大的社区反馈正在推动实质性改进。项目为v0.23.0做好了充分准备，重点聚焦于 **会话完整性**、**记忆持久性** 与 **跨平台可靠性**。维护者响应迅速，代码库健康状况与贡献者活跃度表明项目具备强劲的可持续性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目简报 – 2026-10-24**

---

### **1. 今日概览**  
截至2026年10月24日，IronClaw 项目处于稳定、以维护为主的阶段。过去24小时内未发布新版本，也未创建新的问题，表明用户报告的事件活动水平较低。然而，有五项拉取请求（PR）被更新——其中四项仍开放，一项已合并，主要由 Dependabot 自动化依赖更新驱动。这些变更反映了核心依赖项在 JavaScript/TypeScript 前端生态和 Python 测试环境中的常规安全与兼容性维护。当前无活跃问题，说明系统稳定性良好，但长期功能开发似乎已暂停。

---

### **2. 版本发布**  
*过去24小时未发布新版本。*  
项目自上一发布周期以来尚未发布任何版本更新。目前无重大变更、迁移说明或发布公告。

---

### **3. 项目进展**  
今日关闭一项 PR：  
- **[PR #8149](https://github.com/nearai/ironclaw/pull/8149)**：*chore(deps): 将 dompurify 从 3.4.12 升级至 3.4.16*  
  - **状态**：已于 2026年10月23日 合并  
  - **影响**：修复了 DOMPurify 中与不当清理处理相关的一个漏洞（特别是属性解析问题）。该更新提升了 `/crates/product/ironclaw_webui/frontend` 模块的 Web UI 安全性。  
  - **备注**：后续已有 PR #8155 提出升级至更新版（3.4.17），表明安全维护工作持续进行。

---

### **4. 社区热点话题**  
目前无开放问题或活跃讨论。但以下 **五项开放的 PR** 代表了今日最显著的社区驱动活动：

- **[PR #8157](https://github.com/nearai/ironclaw/pull/8157)**：将 `certifi` 从 2026.7.22 升级至 2026.10.19（Python 测试环境）  
  - *理由*：证书信任包的安全补丁；影响测试环境的可靠性。  
- **[PR #8156](https://github.com/nearai/ironclaw/pull/8156)**：将 `@storybook/addon-vitest` 升级至 10.6.2  
  - *理由*：启用新版 Vitest 集成特性，并修复 Storybook 测试插件相关问题。  
- **[PR #8158](https://github.com/nearai/ironclaw/pull/8158)**：将 `storybook` 核心升级至 10.6.2  
  - *理由*：改进 UI 开发工作流，符合 Storybook 最新最佳实践。  
- **[PR #8155](https://github.com/nearai/ironclaw/pull/8155)**：将 `dompurify` 从 3.4.12 升级至 3.4.17  
  - *理由*：修复上游发布版（3.4.17）中报告的 XSS 边界情况。  
- **[PR #8149](https://github.com/nearai/ironclaw/pull/8149)**：已合并 —— #8155 的前置版本  

> 🔍 **分析**：主导主题为 **依赖项维护**，尤其集中在 **安全补丁**（certifi、dompurify）和 **前端工具链升级**（Storybook、Vitest）。所有变更均由 Dependabot 自动生成，表明项目高度依赖自动化手段进行风险控制。目前未见社区主导的功能争论或紧急缺陷报告。

---

### **5. 缺陷与稳定性**  
*过去24小时未报告任何缺陷、崩溃或回归问题。*  
所有近期 PR 均为非破坏性依赖更新。已合并的 PR（#8149）解决了 `dompurify` 中已知问题，但未再出现其他事件记录。鉴于无开放问题且活跃 PR 无任何评论或反应，生产或预发布环境均无不稳定迹象。

---

### **6. 功能请求与路线图信号**  
截至今日，问题追踪器中 **无开放的功能请求** 或用户驱动的提案。唯一活动为自动化依赖更新。  
然而，`Storybook` 和 `Vitest` 集成的持续升级暗示了对 **开发者体验（DX）** 与 **UI 测试基础设施** 的日益关注——这可能是未来路线图迭代的重点方向，例如：  
- 增强的视觉回归测试能力  
- 更好的本地开发环境一致性  
- 前端组件在 CI/CD 流水线中的更好集成  

若此趋势持续，这些可能成为未来的优先事项。

---

### **7. 用户反馈摘要**  
*由于缺乏开放问题、评论或讨论，目前无法获取用户反馈或满意度指标。*  
项目似乎处于安静、自我维护阶段，用户未报告痛点。这可能意味着：  
- 当前功能获得较高用户满意度  
- 用户参与度或采用率较低  
- 或依赖内部团队而非公开贡献者  

在缺乏反馈回路的情况下，难以评估实际可用性，仅能基于技术稳定性判断。

---

### **8. 待办清单监控**  
尽管当前无高优先级问题开放，但仍有若干 **长期存在的依赖项 PR** 未合并或待审查：

- **[PR #8155](https://github.com/nearai/ironclaw/pull/8155)**：将 `dompurify` 升级至 3.4.17 —— *关键安全修复*  
  - **创建时间**：2026年10月23日（1天龄）  
  - **风险**：安全补丁延迟应用可能导致 Web UI 面临潜在 XSS 攻击风险  
  - **需采取行动**：需合并批准以关闭安全缺口  

- **[PR #8158](https://github.com/nearai/ironclaw/pull/8158)**：Storybook v10.6.2 升级 —— *增强开发者工具链*  
  - **创建时间**：1天  
  - **需采取行动**：若继续使用过时的 Storybook 版本，可能阻碍未来 UI 组件改进  

> ⚠️ **注意**：尽管这些 PR 为自动化生成，仍需人工审查。其延迟可能反映维护者资源有限或任务优先级调整。若长期未解决，将累积技术债务并带来安全风险。

---

**总结评分**：✅ **健康但被动**  
IronClaw 通过自动化依赖管理展现了良好的技术规范，且未报告严重故障。然而，用户参与度不足及 PR 审查停滞表明创新与社区互动动力不足。维护者应优先审查并合并关键安全更新，以防止技术漂移。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw 项目简报 – 2026-10-24**

---

### **1. 今日概览**  
QwenPaw 项目持续保持高度活跃，问题与拉取请求（PR）活动均呈现强劲势头：过去 24 小时内共更新 25 个问题（18 个开启，7 个关闭），50 个 PR 更新（38 个开启，12 个合并/关闭）。这反映出社区参与度持续高涨，开发团队聚焦于系统稳定性、可扩展性及核心用户体验的优化。尽管今日无新版本发布，但近期提交的 PR 显示出向 v2.3.0 模块化重构和增强插件支持方向的进展。整个生态正明显转向更深层次的自定义能力与可靠性提升——尤其体现在会话管理、媒体处理及跨渠道一致性方面。

---

### **2. 版本发布**  
❌ **今日未发布新版本**。  
- 当前最新稳定版仍为 **v2.2.2.post1**，发布于 2026 年 10 月 22 日。  
- 一次发布验证检查（`#8386`）已成功通过，确认了发布后构建包的完整性。  
- 目前无重大变更或迁移说明。

> 🔗 [发布 v2.2.2.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2.post1)

---

### **3. 项目进展**  
✅ 今日共合并/关闭 12 个 PR，涵盖关键修复与基础架构升级：

| PR | 摘要 | 影响 |
|----|--------|--------|
| [#8399](https://github.com/agentscope-ai/QwenPaw/pull/8399) | 刷新时保留模型策略草稿 | 防止切换模型时丢失自定义超时设置 |
| [#8383](https://github.com/agentscope-ai/QwenPaw/pull/8383) | 修复 Windows 上的 sips 预检测试 | 提升测试平台一致性；实现跨操作系统的可靠 CI |
| [#8381](https://github.com/agentscope-ai/QwenPaw/pull/8381) | 稳定顾问列表与 TUI 消耗断言 | 修复特定于 Windows 的单元测试失败 |
| [#8382](https://github.com/agentscope-ai/QwenPaw/pull/8382) | 通过原始套接字响应答案侧车探针 | 解决与服务生命周期相关的 macOS 测试超时问题 |
| [#8372](https://github.com/agentscope-ai/QwenPaw/issues/8372) | 已关闭 — HUB 网关超时时间过短 | 表明用户可配置覆盖功能现已可用 |
| [#8396](https://github.com/agentscope-ai/QwenPaw/issues/8396) | 修复：删除时出现“聊天未找到”错误 | 修复删除后的界面不一致问题 |
| [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) | 修复：长对话中滚轮滚动吸附问题 | 改善长聊天会话的用户体验 |
| [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) | 修复：`send_file_to_user` 在视频上传时卡死会话 | 关键修复，提升媒体处理可靠性 |
| [#8368](https://github.com/agentscope-ai/QwenPaw/issues/8368) | 修复：删除当前会话时返回 404 | 移除后端竞态条件 |
| [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) | 修复：钉钉最终回复在过期时被丢弃 | 确保在 TTL 限制下仍能可靠交付 |
| [#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359) | 修复：Hub 就绪探针硬编码 `127.0.0.1` | 支持 Docker-in-Docker 部署 |
| [#8378](https://github.com/agentscope-ai/QwenPaw/issues/8378) | 修复：升级导致 `active_model` 配置解析失败 | 恢复向后兼容性 |

这些修复共同提升了系统的**稳定性**、**部署灵活性**以及**高负载场景下的用户信任度**。

---

### **4. 社区热点话题**  
🔥 **按互动量排序的热门议题（评论/点赞数）**

1. **[议题 #8071](https://github.com/agentscope-ai/QwenPaw/issues/8071): 插件面向的主题扩展点（语义标记覆盖层）**  
   - *8 条评论*，0 个赞 — 但被标记为**对插件开发者至关重要的功能**。  
   - **需求**：目前插件仅能通过 `colorPrimary` 进行有限的视觉控制。用户希望实现更细粒度的主题覆盖（如 `--token-accent`, `--bg-surface`），以适配其 UI 设计。  
   - **信号**：对**插件级主题可扩展性**有强烈需求 —— 可能是 v2.3.0 插件重构的核心要素。

2. **[议题 #8289](https://github.com/agentscope-ai/QwenPaw/issues/8289): 让 QwenPaw 更轻量化、更具可扩展性（v2.3.0 路线图）**  
   - *3 条评论*，1 个 👍 — 所有功能请求中获赞最高。  
   - **需求**：通过插件重构实现模块化架构，以减小打包体积并支持动态加载。  
   - **信号**：维护者方向明确 —— 这是即将推出的 v2.3.0 的**核心主题**。

3. **[PR #8347](https://github.com/agentscope-ai/QwenPaw/pull/8347): 集成 ReMe 0.4.2.0，支持决策压缩、图像、标签**  
   - *高优先级* —— 整合记忆系统增强功能。  
   - **影响**：未来 AI 代理将能更好处理上下文，保留更丰富的元数据，并压缩无关决策。  
   - **备注**：已在生产工作流中进行测试。

---

### **5. 问题与稳定性**  
🚨 **报告的关键问题（按严重程度排序）**

| 问题 | 描述 | 状态 | 修复 PR？ |
|------|-------------|--------|--------|
| [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351) | 因基于单个代理的键值导致作曲家草稿在会话间传递 | 开放 | ❌ |
| [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350) | 飞书频道在同步网络调用时阻塞整个服务 | 开放 | ❌ |
| [#8394](https://github.com/agentscope-ai/QwenPaw/issues/8394) | 小艺频道在长时间交互中静默丢弃 WebSocket 连接 | 开放 | ❌ |
| [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) | QQ 频道启用标志在无提示情况下重置 | 开放 | ❌ |
| [#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335) | 聊天历史中的媒体导致请求体达 48MB → 会话卡死 | 开放 | ❌ |
| [#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388) | 升级后 QQ 频道因缺少 `_qwenpaw_remote_backend` 而损坏 | 开放 | ❌ |

> ⚠️ **所有主要问题均涉及会话损坏、静默失败或不可逆状态丢失**。这些是生产环境中的高风险区域。

---

### **6. 功能请求与路线图信号**  
📌 **v2.3.0 的新兴优先事项（基于趋势）**

| 功能 | 证据 | 预计发布时间 |
|-------|----------|------------|
| ✅ **以插件为中心的主题系统** ([#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)) | 需求旺盛，与插件生态增长紧密相关 | v2.3.0 |
| ✅ **更轻量、模块化的架构** ([#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)) | 排名最高的改进项；关联如 #8187 等 PR | v2.3.0 |
| ✅ **办公文件预览（docx/xlsx/pptx）** ([#8404](https://github.com/agentscope-ai/QwenPaw/issues/8404)) | 用户生成报告时的日常痛点 | 很可能在 v2.3.0 |
| ✅ **流式传输期间自动滚动切换** ([#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339)) | 长期存在的用户体验请求 | 可能在 v2.3.0 |
| ✅ **跨频道引用回复路由** ([#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342)) | 报告跨频道不一致问题 | v2.3.0 |

> 📌 **预测**：**v2.3.0** 将成为重要里程碑，聚焦于**模块化、性能与可扩展性**——由于范围较大，可能推迟至 2027 年初发布。

---

### **7. 用户反馈摘要**  
💬 **来自用户的实际痛点（直接引述与观察）**

- **“升级后，我的 QQ 频道完全无法使用。”** → 证实**升级不稳定**与**依赖管理不当**问题 ([#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388))。
- **“我在切换会话时丢失了所有草稿文本。”** → 突显**草稿持久性缺陷** ([#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351))。
- **“在执行长时间任务时，代理会沉默几分钟。”** → 反映小艺等频道存在**WebSocket 静默问题** ([#8394](https://github.com/agentscope-ai/QwenPaw/issues/8394))。
- **“媒体文件会导致整个会话崩溃。”** → 强调**载荷大小与类型校验中的未处理边界情况** ([#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335))。
- **“删除会话时显示令人困惑的错误。”** → 尽管功能已修复，但仍暴露**反馈机制薄弱**问题 ([#8396](https://github.com/agentscope-ai/QwenPaw/issues/8396))。

> ✅ **满意度**：用户赞赏及时的漏洞修复与透明度（如发布验证日志）。

---

### **8. 后备任务监控**  
🔍 **长期存在或高影响问题亟需关注**

| 问题 | 年龄 | 状态 | 为何重要 |
|------|-----|--------|----------------|
| [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | 22 天 | 开放 | 跨会话消息被拆分为独立聊天 —— **核心用户体验缺陷**，引发混淆 |
| [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) | 3 天 | 开放 | 最终回复静默丢失 —— **关键流程中信任度下降** |
| [#8333](https://github.com/agentscope-ai/QwenPaw/issues/8333) | 5 天 | 开放 | 侧边栏视觉重叠 —— 虽为小问题，但持续存在 UI 退化 |
| [#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342) | 4 天 | 开放 | 引用回复失去命令路由 —— 在 7 个频道中破坏预期行为 |
| [#8405](https://github.com/agentscope-ai/QwenPaw/issues/8405) | 1 天 | 开放 | MCP 配置对话框无法关闭 —— **阻塞用户交互** |

> ⏳ **行动建议**：需为这些问题设立专门的审查周期。它们虽非致命，但构成**降低用户信心的摩擦点**。

---

### ✅ **最终评估**  
**项目健康状况：高活跃度，中等风险**  
QwenPaw 处于**强劲开发阶段**，贡献者参与度高，且路线图信号清晰。然而，**多个高严重性问题依然存在**，尤其集中在会话完整性、媒体处理及跨渠道一致性方面。团队正在积极应对，但**升级后脆弱性与静默失败仍令人担忧**。  

随着 v2.3.0 临近，项目将迎来转型契机——但必须优先保障**稳定性测试**、**向后兼容性**与**用户反馈整合**，以避免回归疲劳。

> 🔗 **跟踪所有问题**：[GitHub 问题仪表板](https://github.com/agentscope-ai/QwenPaw/issues)  
> 🔗 **关注 PR**：[GitHub 拉取请求](https://github.com/agentscope-ai/QwenPaw/pulls)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw 项目简报**  
**日期：** 2026-10-24  
**仓库：** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. 今日概览**

ZeroClaw 项目持续保持高度活跃，过去 24 小时内新增 **50 个拉取请求（Pull Requests）** 与 **28 个新问题（Issues）**，反映出开发进程与社区参与度的强劲势头。当前工作重心集中在安全加固、网关稳定性、会话持久性以及访问控制增强，尤其在 OIDC 集成与工具策略强制方面。尽管尚未发布新版本，但已出现多个高严重性漏洞（S1–S2），表明团队正聚焦于可靠性，为即将到来的 **v0.9.0 发布里程碑** 做准备。大量拉取请求的涌入也预示着功能整合与质量保障方面取得显著进展。

---

### **2. 发布情况**

> ❌ **过去 24 小时内未发布新版本**。  
> 截至本日，v0.9.0 版本暂无发布计划。  
> 所有近期活动均集中于完成发布前特性、修复关键路径漏洞。

---

### **3. 项目进展**

今日多个关键拉取请求推进，主要支持 **v0.9.0 发布列车**：

- ✅ **PR #11986** (`feat(gateway): scoped dashboard chat through the core`) — 实现非管理员用户的受控角色化仪表板访问，基于 OIDC 登录机制构建。
- ✅ **PR #11965** (`feat(gateway): opt-in OIDC dashboard sign-in`) — 支持通过 OIDC 提供商实现身份联合；为企业级访问控制奠定基础。
- ✅ **PR #11976** (`ci(cli-only): build and test the CLI-only feature set`) — 为无头、轻量部署添加 CI 验证，提升对服务器环境的支持能力。
- ✅ **PR #12007** (`fix(tools): serve deferred tool schemas from live tools`) — 修复重载后工具模式滞留问题；解决影响动态工具可用性的高风险缺陷。
- ✅ **PR #11933** (`fix(web): keep the chat header on screen in narrow layouts`) — 改善移动端用户体验；虽为小改动，但对界面友好性影响显著。

上述 PR 共同推进了 **安全性**、**访问控制**、**部署灵活性** 与 **用户体验** 的提升。

---

### **4. 社区热点议题**

| 问题 / 拉取请求 | 链接 | 活动 | 关键洞察 |
|-----------|------|---------|-----------|
| **Issue #11984** ([非管理员的仪表板聊天](https://github.com/zeroclaw-labs/zeroclaw/issues/11984)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) | 1 条评论，1 次点赞 | 用户强烈要求在无需管理员权限的前提下，实现对代理聊天的细粒度访问——这对团队协作流程至关重要。 |
| **PR #11986** ([受控仪表板聊天](https://github.com/zeroclaw-labs/zeroclaw/pull/11986)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) | 0 条评论，0 次点赞 | 高优先级实现，追踪 OIDC + 受控访问；依赖前期 PR，体现深层架构集成。 |
| **Issue #11991** ([邮件中包含原始 HTML 标记](https://github.com/zeroclaw-labs/zeroclaw/issues/11991)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11991) | 1 条评论 | 真实用户痛点：代理可向出站邮件注入恶意 HTML——亟需内容净化机制。 |
| **PR #11680** ([新增 Firecrawl 网络搜索服务提供者](https://github.com/zeroclaw-labs/zeroclaw/pull/11680)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11680) | 0 条评论，0 次点赞 | Firecrawl 团队提出的功能请求——显示实时网络搜索集成需求日益增长。 |

**核心诉求：** 用户正在要求 **细粒度访问控制**、**安全输出渲染** 与 **现代化工具链集成**，尤其是面向生产环境与团队协作场景。

---

### **5. 漏洞与稳定性**

| 问题 | 严重性 | 组件 | 状态 | 修复分支？ |
|------|----------|----------|--------|--------|
| **#11951** [WebSocket 升级在 TLS 监听器上失败](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) | S2 | 网关 | 开放 | ❌ 尚无修复分支 |
| **#11711** [对话截断永久删除旧轮次](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | S2 | 运行时/会话存储 | 开放 | ❌ 尚无修复分支 |
| **#11987** [内联 `nosemgrep` 注释被 Semgrep 忽略](https://github.com/zeroclaw-labs/zeroclaw/issues/11987) | S3 | CI 工具链 | 开放 | ❌ 尚无修复分支 |
| **#11992** [邮件通道缺少净化后的 HTML 正文](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) | S2 | 通道 | 开放 | ❌ 尚无修复分支 |
| **#11989** [按通道配置的 `excluded_tools` 始终未生效](https://github.com/zeroclaw-labs/zeroclaw/issues/11989) | S2 | 通道 | 开放 | ❌ 尚无修复分支 |
| **#11970** [代理删除/重命名跳过网关的级联检查](https://github.com/zeroclaw-labs/zeroclaw/issues/11970) | S2 | 运行时/守护进程 | 开放 | ❌ 尚无修复分支 |
| **#11962** [64 个 RPC 会话永不释放 → 资源耗尽风险](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | S2 | 守护进程 | 开放 | ❌ 尚无修复分支 |
| **#11957** [OIDC 注册发送明文客户端凭证](https://github.com/zeroclaw-labs/zeroclaw/issues/11957) | S1 | 安全/沙箱 | 开放 | ❌ 尚无修复分支 |
| **#12005** [PowerShell 语法拒绝参数中的裸 `@`](https://github.com/zeroclaw-labs/zeroclaw/issues/12005) | S3 | Shell 策略 | 开放 | ❌ 尚无修复分支 |

> ⚠️ **严重风险**：S1 漏洞 (#11957) 在 OIDC 注册过程中暴露明文密钥——必须立即处理。

---

### **6. 功能请求与路线图信号**

| 请求 | 链接 | 优先级 | 预计纳入版本 |
|-------|------|----------|---------------------|
| **新增 DeepSeek 网络搜索服务提供者** | [Issue #12000](https://github.com/zeroclaw-labs/zeroclaw/issues/12000) | 中等 | 很可能在 v0.9.0 或 v0.9.1 中实现 |
| **通过 `send_via` 发送附件并执行读取策略检查** | [Issue #11996](https://github.com/zeroclaw-labs/zeroclaw/issues/11996) | 高 | v0.9.0 强候选 |
| **操作员模板 + 邮件的净化后 HTML** | [Issue #11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) | 高 | 预期在 v0.9.0 中实现 |
| **代理中间人出站代理以控制代理流量** | [RFC #12001](https://github.com/zeroclaw-labs/zeroclaw/issues/12001) | 高 | 受架构影响，或推迟至 v1.0 |
| **仅 CLI 源码构建** | [Issue #11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971) | 高 | 已通过 PR #11976 实现 |

> 🔮 **路线图信号**：项目正转向 **企业级部署**、**安全输出** 与 **灵活配置**，预计 v0.9.0 将成为一次重大稳定性和访问控制里程碑。

---

### **7. 用户反馈摘要**

- **痛点**：
  - 代理可向邮件中 **注入任意 HTML** (#11991)，存在钓鱼或 XSS 风险。
  - **长对话在截断后永久消失** (#11711)，破坏审计链。
  - **非管理员无法与授权使用的代理聊天** (#11984)。
  - **OIDC 流程中明文暴露密钥** (#11957)——严重的安全缺陷。
  - **PowerShell 命令因合法语法（`@` 在参数中）而失败**，限制可用性。

- **满意信号**：
  - 对 **OIDC 登录** 与 **受控访问** 的积极进展表示认可——用户赞赏更严格的安全机制与基于角色的权限控制。
  - 开发者对 **CI 改进**（如 PR #11976）和 **工具链增强**（如 Firecrawl 集成）表示欢迎。

---

### **8. 待办事项监控**

| 问题 | 链接 | 状态 | 重要性说明 |
|------|------|--------|----------------|
| **#7432** [运行时、网关、仪表板路线图跟踪器](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 开放，已接受，非过期 | v0.9.0 规划的关键项——追踪运行时/网关交付的剩余缺口。需维护者审查以确定排序。 |
| **#8279** [委托绕过父级工具白名单](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | 开放，P1，高风险 | 安全关键：子代理可调用被禁止的工具。尚无修复分支——亟需紧急修复。 |
| **#11013** [统一文件输入/解析/交付](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | 开放，已接受 | 核心基础设施工作——必须在文件密集型工作流扩展前解决。 |
| **#11876** [聚焦拉取请求评审：目的、安全与质量](https://github.com/zeroclaw-labs/zeroclaw/issues/11876) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11876) | 已关闭 | RFC 已通过——现需实施。将影响所有未来拉取请求评审。 |

> 🛑 **高优先级待办事项**：#8279 和 #7432 需立即获得维护者关注，避免阻碍 v0.9.0 发布。

---

### **结论**

ZeroClaw 正处 **关键的发布前阶段**，重点聚焦于 **安全性**、**访问控制** 与 **会话完整性**。尽管代码库展现出强劲势头——尤其是在 OIDC、仅 CLI 构建与工具链方面——但 **多个 S1/S2 漏洞** 与 **未修复的安全缺陷** 对按时发布 v0.9.0 构成风险。社区贡献质量高，且与长期目标高度一致。对高严重性问题的及时响应与待办事项的优先排序，将决定 ZeroClaw 是否能自信达成下一里程碑。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*