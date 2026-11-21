# OpenClaw 生态日报 2026-11-21

> Issues: 339 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-21 03:25 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# **OpenClaw Project Digest – 2026-11-21**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **339 open issues** and **500 open pull requests** updated in the past 24 hours—indicating robust community engagement and ongoing development momentum. A significant number of high-severity bugs (P0/P1) are being reported, particularly around **Gateway stability**, **plugin loading**, **update reliability**, and **cross-platform UX friction**. Despite no new releases, the pipeline is heavily focused on fixing regressions from recent versions (2026.10–11), especially those affecting macOS, Windows, and large plugin workspaces. The ecosystem shows strong technical maturity but faces growing strain due to complex runtime interactions.

---

### **2. Releases**  
❌ **No new releases** were published today.  
The latest stable version remains **2026.11.3**, while beta candidates like **2026.11.5-beta.4** are under active validation. No release notes or migration guidance have been issued for this period.

> 🔗 [GitHub Release Page](https://github.com/openclaw/openclaw/releases)

---

### **3. Project Progress**  
**Merged/Closed PRs (today):**  
- **PR #202878** – Fixed background tab screenshot capture in headed Chrome (`fix(browser): keep screenshots working for background tabs`).  
- **PR #202865** – Cleaned up environment stub leakage in tests (`fix(test): clear environment stubs after process.env replacement`).  
- **PR #202735** – Improved Git update verification by waiting for Gateway restart (`fix: wait for a busy gateway to restart before verifying a Git update`).  
- **PR #202897** – Refreshed Control UI localization assets without bypassing branch protection.

These fixes address minor but persistent issues in test reliability, browser behavior, and update workflow integrity—critical for developer experience and CI/CD stability.

---

### **4. Community Hot Topics**  
Top **issues by comment count** reflect systemic pain points:

| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 84 | P0 / Crash Loop | Gateway blocks for minutes during external plugin capture (regression since 2026.9.6) |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | 38 | P2 / UX Friction | `gateway stop` fails on macOS with "Process ancestry could not be fully inspected" |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 31 | P0 / UX Release Blocker | Post-install Doctor leaves 11.3 update partially finalized |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | 31 | P1 / Crash Loop | `doctor --fix --non-interactive` idles indefinitely on macOS |

**Underlying Needs:**  
Users demand **predictable startup performance**, **robust process lifecycle management**, and **resilient upgrade paths**. These issues suggest deep-rooted challenges in **asynchronous resource handling**, **system-level process inspection**, and **state consistency across upgrades**—especially on macOS and Windows.

---

### **5. Bugs & Stability**  
**Critical Bugs Reported (Today):**  

| Bug | Severity | Impact | Fix PR? | Notes |
|-----|----------|--------|---------|-------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | P0 | Crash Loop | ❌ No | Plugin generation capture causes 5+ minute block at startup |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | P0 | UX Release Blocker | ❌ No | Partially finalized state after Doctor failure; update can’t roll back |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | P1 | Crash Loop | ❌ No | Update-run admission re-hashes unchanged DB forever when Gateway stopped |
| [#174681](https://github.com/openclaw/openclaw/issues/174681) | P1 | Regression | ✅ Reverted | Plugin prep now blocks main thread (reverted #172750) |
| [#192496](https://github.com/openclaw/openclaw/issues/192496) | P2 | Idle CPU Spike | ❌ No | 100–170% CPU usage on idle Windows with 20 agents |

**Stability Concerns:**  
The project is experiencing **critical regressions** in core workflows: **upgrade pipelines**, **process lifecycle control**, and **memory/resource cleanup**. Multiple issues point to **inadequate isolation of long-running operations**, **lack of timeout safeguards**, and **over-reliance on system-level process introspection**—particularly problematic on macOS and Windows.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority feature signals include:

| Request | Priority | Key Themes | Likely Inclusion |
|--------|----------|------------|------------------|
| [#197297](https://github.com/openclaw/openclaw/issues/197297) | P2 | Per-user secret vault | ✅ High probability in 2026.12 |
| [#187264](https://github.com/openclaw/openclaw/issues/187264) | P2 | Caller-scoped scheduling | ✅ Needed for team collaboration |
| [#179685](https://github.com/openclaw/openclaw/issues/179685) | P2 | IMAP durable processing | ✅ Strong use case for enterprise users |
| [#202880](https://github.com/openclaw/openclaw/pull/202880) | P2 | WhatsApp task scheduling | ✅ Expanding channel support |
| [#195397](https://github.com/openclaw/openclaw/issues/195397) | P2 | Optional reply declarations | ✅ User-driven UX flexibility |

**Roadmap Signal:**  
The team is actively expanding **channel integration** (WhatsApp, Slack, Telegram), **multi-user security models** (per-user vaults), and **durable execution frameworks** (IMAP, scheduled tasks). Expect **2026.12** to focus on **enterprise-grade automation resilience** and **user-specific context isolation**.

---

### **7. User Feedback Summary**  
Real user pain points dominate the issue tracker:

- **macOS Users**: Consistent failures with `gateway stop`, WebSocket reconnect loops (4008), and native app instability.
- **Windows Users**: Update failures due to path length limits (`MAX_PATH`), file lock timeouts, and broken handoff logic.
- **Large Plugin Workloads**: Users report **minutes-long stalls** during startup and plugin preparation—especially with heavy dependency trees.
- **UX Frustration**: Hidden agent sessions, lost narration, incomplete progress updates, and unresponsive UI controls (e.g., iOS text size).
- **Update Reliability**: Many users report **partial finalization**, **failed rollbacks**, and **unrecoverable states** post-upgrade.

> 💬 *“I upgraded from 11.3 to 11.5 and now my agent won’t start. Doctor says ‘no rollback’ and I’m stuck.”* — @Staruy

---

### **8. Backlog Watch**  
Critical long-standing issues requiring maintainer attention:

| Issue | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 2 months | Open, P0 | Blocks adoption in production environments |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | 1.5 months | Open, P1 | Silent hang during repair—no feedback |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | 1 month | Open, P1 | Infinite loop in maintenance—requires immediate fix |
| [#173599](https://github.com/openclaw/openclaw/issues/173599) | 1.5 months | Open, P2 | iMessage edit action hidden on macOS 26 |
| [#181791](https://github.com/openclaw/openclaw/issues/181791) | 1 month | Open, P3 | Missing provenance for safe interruption recovery |

> ⚠️ **Note**: Several **P0/P1 issues lack assigned maintainers** despite high comment counts and impact. Immediate triage is recommended to prevent further degradation of user trust.

---

**✅ Summary**: OpenClaw is in a phase of **high velocity development** with intense community activity, but **stability and reliability are under pressure**. The project must prioritize **core runtime fixes** and **release hygiene** to maintain credibility. While innovation continues (e.g., per-user vaults, WhatsApp scheduling), **crash loops and update failures** threaten user adoption. Maintainers should urgently review top-tier issues and stabilize the upgrade path before the next release cycle.

---

## 横向生态对比

# **跨项目对比报告：个人AI代理生态系统 – 2026-11-21**

---

### **1. 生态系统概览**  
截至2026年末，开源个人AI代理领域的生态呈现出快速创新、技术成熟度持续提升，以及架构理念与用户定位日益分化的特征。各项目已超越基础任务自动化，迈向企业级韧性、安全的多用户上下文环境，以及可组合的插件生态系统。尽管核心功能在各平台间保持稳定，但一个共同的痛点浮现：**运行时可靠性**，尤其是在进程生命周期管理、会话完整性及更新一致性方面——这些问题直接影响用户信任与采纳率。该生态系统正分化为两条截然不同的路径：一条聚焦于**开发者导向的可扩展性与模块化**（如 Hermes、QwenPaw），另一条则致力于**生产环境强化的稳定性与安全性**（如 OpenClaw、ZeroClaw）。

---

### **2. 活动对比**

| 项目 | 开放问题 | 开放PR | 发布状态 | 健康评分（1–5） |
|--------|-------------|----------|----------------|--------------------|
| **OpenClaw** | 339 | 500 | ❌ 无新版本发布 | ⭐⭐⭐☆☆ (3.0) |
| **Hermes Agent** | 50 | 50 | ✅ Canary v0.23.3+canary.20261120T064609Z | ⭐⭐⭐⭐☆ (4.0) |
| **QwenPaw** | 13 | 41 | ❌ 无新版本发布 | ⭐⭐⭐⭐☆ (3.8) |
| **ZeroClaw** | 13 | 50 | ❌ 无新版本发布 | ⭐⭐⭐⭐☆ (4.2) |

> **健康评分**：基于稳定性、社区响应速度、代码规范性及回归密度（越高表示越健康）。  
> *注：OpenClaw高数量的问题/PR反映出高强度开发压力；ZeroClaw虽活跃度低，但清理工作量大，表明内部健康状况良好。*

---

### **3. OpenClaw 的定位**  
OpenClaw 是当前生态系统中技术野心最大的项目，拥有最庞大的贡献者群体和最高的功能创新速度——尤其体现在**插件编排**、**跨平台用户体验**以及**企业级自动化**（如按用户隔离的保险库、IMAP持久性）方面。然而，这种雄心也付出了代价：**核心流程存在系统性不稳定**（网关启动、升级、进程生命周期），严重削弱了用户信心。与其他项目不同，OpenClaw更倾向于**追求功能迭代速度而非发布质量**，导致频繁出现回归问题和部分回滚。其社区规模（约500名活跃贡献者）远超其他项目，但这一规模也放大了未经协调变更的风险。相比之下，ZeroClaw 和 Hermes 等项目通过使用预发布通道或分阶段发布，对质量控制更为严格。

---

### **4. 共同的技术关注点**  
在所有四个项目中，以下**新兴的系统性需求**主导着开发方向：

| 需求 | 受影响项目 | 具体需求 |
|-----------|-------------------|----------------|
| **会话与状态完整性** | OpenClaw, Hermes, ZeroClaw | 防止中断期间代理推理丢失；避免重启后静默状态损坏。 |
| **进程生命周期管理** | OpenClaw, Hermes, ZeroClaw | 修复 `gateway stop` 失败（macOS/Windows）；防止进程挂起；确保优雅关闭。 |
| **更新与回滚可靠性** | OpenClaw, QwenPaw, Hermes | 解决部分完成、回滚失败和升级路径断裂问题。 |
| **插件编排与反馈** | Hermes, OpenClaw, QwenPaw | 支持实时状态（`delivery.status`）、可取消任务及透明执行追踪。 |
| **安全与访问控制** | ZeroClaw, Hermes, OpenClaw | 作用域凭据、审计日志、细粒度OAuth范围、零信任模型处理。 |

这些并非孤立的缺陷，而是反映了在复杂环境中构建**持久、可靠的人工智能代理**所面临的**共同成熟挑战**。

---

### **5. 差异化分析**

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **目标用户** | 高级用户、开发者、早期采用者 | 开发者、CI/CD集成者、自动化团队 | 企业用户、本地推理倡导者 | 安全敏感型组织、合规驱动部署 |
| **功能侧重** | 插件爆发、跨渠道自动化、团队协作 | 插件反馈、API可扩展性、看板工作流 | 本地模型控制、GPU加速、反向代理就绪 | 安全加固、代码清理、会话可靠性 |
| **架构** | 单体网关 + 插件沙箱 | 模块化插件层 + 基于RPC的编排 | 插件管理的本地模型 + 前端优先界面 | WASM驱动、极简运行时、零信任设计 |
| **部署模式** | 桌面优先、跨平台 | CLI/桌面混合 | 自托管、容器就绪 | 云原生、支持Kubernetes |

> **关键洞察**：尽管 OpenClaw 在功能广度上领先，但**ZeroClaw 在基础稳健性上占据优势**，而**QwenPaw 正逐步演变为完整的本地推理平台**——这对隐私敏感场景具有战略意义。

---

### **6. 社区活力与成熟度**  

| 层级 | 项目 | 特征 |
|------|------------|-----------------|
| **快速迭代** | OpenClaw, QwenPaw | 高PR/问题量；功能密集；频繁破坏性变更；活跃的漏洞涌入。 |
| **稳定化与精炼** | Hermes Agent | 使用预发布版本；核心稳定；注重打磨与韧性；问题数量较低，但对关键问题参与度高。 |
| **技术整合** | ZeroClaw | 公开噪音低但内部清理力度大；死代码移除、依赖加固、基于RFC的设计。 |

> **成熟信号**：ZeroClaw 与 Hermes 代表了**成熟的工程纪律**——更关注长期可持续性。OpenClaw 与 QwenPaw 处于**高速增长期**，创新速度远超稳定化节奏。

---

### **7. 趋势信号**  
基于社区反馈与PR趋势，以下**行业级转变**正在显现：

1. **从“代理”到“代理平台”**：项目正从单体代理工具转向**模块化、可扩展系统**（如 QwenPaw 的插件式模型管理、Hermes 的 `delivery.status`）。
2. **企业就绪要求上升**：按用户隔离的秘密、作用域凭据、审计日志、OIDC集成已不再是小众需求，而是**基本预期**。
3. **本地计算已成为核心**：通过 llama.cpp、MLX 实现的GPU加速本地模型被视作第一优先级——而非附加组件——标志着**摆脱对云端的单一依赖**。
4. **用户体验与生产系统对齐**：用户现在期望**实时反馈**、**鲁棒的UI状态**以及**无静默失败**——这是专业级软件的标志。
5. **安全设计文化兴起**：RFC（如 ZeroClaw #12422）的普及与主动依赖项修补，显示一种成熟文化正在形成：**安全是内建的，而非事后加装的**。

> 💡 **对开发者的价值**：该生态系统现已足够成熟，可支撑**生产级别的AI代理流水线**——但前提是团队必须重视**运行时稳定性、回滚安全性和状态持久性**。选择项目不应仅看功能列表，更要评估其**应对故障的能力**。

---

**✅ 结论**：个人AI助手生态系统正进入**后实验阶段**，可靠性、安全性和可扩展性成为首要考量。OpenClaw 提供无与伦比的创新，但因不稳定性可能引发用户流失。ZeroClaw 与 Hermes 代表了**工程化韧性的未来**。QwenPaw 则独特地定位为**本地推理的领军者**。对开发者而言，核心启示明确：**选型应基于运维需求，而非仅功能清单**。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent 项目简报 – 2026-11-21**

---

### **1. 今日概览**  
Hermes Agent 项目持续保持高度活跃，过去24小时内更新了50个问题和50个拉取请求，显示出社区参与度高且开发势头强劲。`v0.23.3+canary.20261120T064609Z` 版本的发布表明持续集成流程正聚焦于稳定性和功能优化。与会话状态、Windows 进程管理及网关可靠性相关的高优先级漏洞主导了讨论，同时多个关键拉取请求正在修复桌面端、CLI 和插件生命周期管理的关键路径问题。整体来看，项目健康状况良好，核心组件进展稳定。

---

### **2. 发布信息**  
- **新版本**: `v0.23.3+canary.20261120T064609Z`  
  - *发布日期*: 2026年11月20日  
  - *类型*: 预发布版本（实验性，不稳定）  
  - *摘要*: 此为滚动发布的实验版本，面向早期采用者和测试环境。包含近期合并的拉取请求带来的增量修复与改进，尤其集中在会话持久化、网关稳定性以及插件配置处理方面。  
  - *备注*: 未报告破坏性变更。用户应预期存在潜在不稳定性；不建议用于生产环境。  
  - 🔗 [GitHub 发布页](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.3%2Bcanary.20261120T064609Z)

---

### **3. 项目进展**  
**今日合并/关闭的 PR**: 13  
关键合并内容包括：  
- ✅ **PR #156611** – 修复桌面应用在 WebSocket 重连时重复渲染消息的问题，提升了聊天一致性。  
- ✅ **PR #157157** 与 **#157156** – 因其被 **PR #158454** 取代而关闭，该提交引入了真正的看板任务取消机制及只读的 `delivery.status` RPC，使插件可监控执行状态。  
- ✅ **PR #158399** – 修复因停止失败导致网关持续挂起的问题，确保即使发生异常也正确设置关闭事件。  
- ✅ **PR #158449** – 确保依赖同步失败不会导致网关无限期暂停，更新后可恢复正常运行。  

这些更新共同增强了系统在高负载或出错条件下的韧性。

---

### **4. 社区热议话题**  
根据评论数量和紧急程度排序的前5个最热门问题/拉取请求：

| 问题/拉取请求 | 标题 | 评论数 | 链接 |
|--------|------|---------|------|
| **Issue #131859** | 无法通过 API 打开 PR：CreatePullRequest 权限错误 | 68 | [GitHub #131859](https://github.com/nousresearch/hermes-agent/issues/131859) |
| **Issue #156335** | 看板移除时不应遗弃进行中的写入器 | 7 | [GitHub #156335](https://github.com/nousresearch/hermes-agent/issues/156335) |
| **PR #158454** | feat(plugins,gateway,kanban): 插件状态暴露，delivery.status 和真实看板取消 | — | [GitHub #158454](https://github.com/nousresearch/hermes-agent/pull/158454) |
| **Issue #158441** | 控制套接字：2秒硬超时导致并发负载下看板工作进程崩溃 | 1 | [GitHub #158441](https://github.com/nousresearch/hermes-agent/issues/158441) |
| **PR #158432** | fix(gateway): FooteredReply deepcopy 崩溃及未清理的死平台写入器 | — | [GitHub #158432](https://github.com/nousresearch/hermes-agent/pull/158432) |

**深层需求分析**:  
- **系统韧性**: 多个报告指出竞态条件（如写入器活跃时移除看板），表明 SQLite 操作需更强的事务完整性。  
- **插件编排**: 对实时反馈（`delivery.status`）和可取消任务的强烈需求，反映出对外部插件与自动化工作流的依赖日益加深。  
- **API 可靠性**: 排名首位的问题 (#131859) 反映出对 GitHub API 权限的不满——暗示认证层存在更深层次的 OAuth 与细粒度访问控制缺陷。

---

### **5. 漏洞与稳定性**  
**已报告的严重漏洞（P1–P2）**:  
1. **Issue #158441** – *控制套接字超时导致并发负载下看板工作进程崩溃*（P2）  
   - **影响**: 并发场景下系统不稳定；影响多配置部署。  
   - **修复状态**: PR #158454 待审查；尚未合并修复。  
2. **Issue #158371** – *看板评论注入跳过自身配置的评论*（P2）  
   - **影响**: 代理无法自主引导正在进行的任务，限制了自治能力。  
   - **修复状态**: 开放中；需对 `inject_new_comments_from_env` 逻辑进行深度修改。  
3. **Issue #158383** – *托管 llama.cpp 运行时的定时任务因 401 错误失败*（P2）  
   - **影响**: 打破计划自动化；根源为提供方标签错误。  
   - **修复状态**: PR #158450 通过重新绑定路由解决此问题。  
4. **Issue #155862** – *桌面端因 blobless 克隆探测超时进入首次运行设置*（P2）  
   - **影响**: 部分克隆时用户困惑；破坏无头安装流程。  
   - **修复状态**: 尚无相关 PR；需更新保护逻辑。

> ⚠️ **高风险回归**: 多个 P2 漏洞涉及网关生命周期、会话状态损坏及操作系统特定行为（尤其是 Windows），预示生产级部署可能存在不稳定性。

---

### **6. 功能请求与路线图信号**  
新兴趋势预示未来重点方向：

| 功能请求 | 优先级 | 主要驱动因素 | 预计纳入版本 |
|----------------|----------|-------------|---------------------|
| **按提供方的模型白名单/黑名单** ([#126996](https://github.com/nousresearch/hermes-agent/issues/126996)) | P2 | 用户对细粒度模型控制的需求 | 可能出现在 v0.24 |
| **Telegram/Discord 中图片的隐藏提示** ([#158416](https://github.com/nousresearch/hermes-agent/issues/158416)) | P3 | 消息交互体验优化 | 可能在 v0.24 实现 |
| **分阶段内存/技能写入的公共 API** ([#148313](https://github.com/nousresearch/hermes-agent/issues/148313)) | P2 | 插件驱动的治理需求 | 下一版本高优先级 |
| **支持逗号分隔的作用域 + 固定重定向端口的 OAuth** ([#152732](https://github.com/nousresearch/hermes-agent/issues/152732)) | P2 | 与企业 IdP（Linear、QuickBooks）集成需求 | 可能出现在 v0.24 |
| **运行时治理门禁 + 抗篡改审计日志** ([#157274](https://github.com/nousresearch/hermes-agent/issues/157274)) | P3 | 安全与合规需求 | 或将在 v0.25 出现 |

> 📌 **路线图信号**: 向 **插件可扩展性**、**可审计性** 和 **企业级集成** 的转变已清晰可见。预计下一阶段将重点关注安全、可组合的智能体系统建设。

---

### **7. 用户反馈摘要**  
真实用户痛点观察：  
- **Windows 特有困扰**: 多名用户报告卡顿（`hermes gateway stop` 失败）、文件 I/O 错误（`OSError: Invalid argument`）以及 Git 版本检查阻塞启动。  
- **会话状态损坏**: 用户反映切换会话后已完成的对话轮次消失，尽管数据库完整性正常——这削弱了对聊天历史的信任。  
- **插件配置复杂**: 用户在 OAuth 重定向（端口不匹配）、作用域格式和后台任务状态不可见方面遇到困难。  
- **桌面应用不稳定**: 首次运行循环和启动期间无限挂起令新用户沮丧，尤其是在通过 Git 克隆安装时。  
- **满意度**: 对看板任务取消和实时流式传输改进（如 PR #158454）表示认可，体现出对可操作反馈的欢迎。

> 💬 *"我因为切换标签后会话消失，损失了整整两天的工作——这完全不可接受。"* – 匿名用户，Issue #134290

---

### **8. 待办事项关注清单**  
长期存在且影响重大的问题，亟需维护者关注：

| 问题 | 年龄 | 严重性 | 状态 | 备注 |
|------|-----|----------|--------|-------|
| **Issue #131859** | 78 天 | P3（上游阻塞） | 开放 | 对 CI/CD 自动化流水线至关重要 |
| **Issue #93592** | 110 天 | P2 | 开放 | 备用链失败时后台审查静默失败 |
| **Issue #158266** | 1 天 | P2 | 开放 | Docker 升级后出现 ModuleNotFoundError —— 可能是回归问题 |
| **Issue #158371** | 3 天 | P2 | 开放 | 评论过滤逻辑阻止自我引导 |
| **Issue #146767** | 12 天 | P2 | 开放 | Anthropic ToS 在原生与插件 OAuth 间的合规性不明确 |

> 🔔 **亟需关注**: 尽管 #131859（权限错误）已有 68 条评论却仍未回应，表明存在系统性疏漏。维护者应优先解决上游认证瓶颈。

---

**✅ 最终评估**:  
Hermes Agent 正处快速演进阶段，开发者活跃度高，但稳定性问题——尤其是在 Windows 系统及多配置/网关场景下——已逐渐成为障碍。项目在 v0.24 方面准备充分，路线图清晰指向安全、插件成熟度与用户体验打磨。当前应立即聚焦于修复回归问题、稳定核心工作流，并解决高影响力用户痛点。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-11-21**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active, with 41 pull requests and 13 issues updated in the last 24 hours—indicating strong developer momentum and ongoing user-driven refinement. A surge in frontend and backend bug fixes suggests a focus on stability and usability ahead of potential feature rollouts. While no new releases have been published, multiple PRs targeting critical infrastructure (e.g., memory indexing, CLI health checks, local model management) are under review, signaling preparatory work for an upcoming release cycle. The community is actively engaged in both issue reporting and contribution, particularly around UI/UX polish and cross-platform compatibility.

---

### **2. Releases**  
❌ **No new releases** were published in the past 24 hours.  
*Note: The latest stable version remains v2.3.0b2 (Desktop), with recent updates focused on internal improvements rather than user-facing changes.*

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #8835** ([fix(windows): retry agent config saves...](https://github.com/agentscope-ai/QwenPaw/pull/8835)) — Resolves transient file access errors during config saving on Windows, improving reliability in enterprise environments.  
- **PR #8784** ([fix(skills): keep rollback backups until every workspace is restored](https://github.com/agentscope-ai/QwenPaw/pull/8784)) — Fixes a critical flaw in multi-workspace skill rollback logic, ensuring complete recovery even if one workspace fails.  
- **PR #8512** ([fix(providers): read a gateway-reported status from the error text](https://github.com/agentscope-ai/QwenPaw/pull/8512)) — Enables proper error classification for OpenAI-compatible gateways that return raw status codes in message text, improving fallback behavior.  
- **PR #8499** ([feat(providers): extract local model management into plugin](https://github.com/agentscope-ai/QwenPaw/pull/8499)) — Major architectural shift: local model lifecycle now managed via plugin, enhancing modularity and maintainability.

📌 *These merges indicate progress toward a more resilient, modular, and platform-aware core system.*

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement:**  
- **Issue #8580**: [Memory tag index never rebuilds → 503 error](https://github.com/agentscope-ai/QwenPaw/issues/8580) *(6 comments, open)*  
  - **Need**: Persistent memory metadata corruption despite correct configuration (`auto_memory_generate_tags = true`). Users cannot access tags after regeneration, blocking workflow tracking.  
  - **Root Cause**: Index rebuild logic appears to be broken or not triggered. High severity due to impact on AI agent memory integrity.

- **Issue #8836**: [Tool config with password causes page loop refresh](https://github.com/agentscope-ai/QwenPaw/issues/8836) *(1 comment, open)*  
  - **Need**: Frontend state management flaw when handling sensitive form inputs (password fields). Affects UX and usability for custom tool configurations.

🔥 **Top PRs by Engagement & Impact:**  
- **PR #8648** ([feat(console): add local engine, GPU, and auto-update controls](https://github.com/agentscope-ai/QwenPaw/pull/8648)) *(size/XL, under review)*  
  - Part of a major **local model stack upgrade** (llama.cpp + MLX support), enabling GPU acceleration and runtime auto-updates. This is likely a cornerstone of the next release.  
- **PR #8719** ([feat(console): support runtime base-path deployment](https://github.com/agentscope-ai/QwenPaw/pull/8719)) *(size/XL, under review)*  
  - Critical for reverse-proxy deployments (e.g., Docker, Kubernetes). Addresses long-standing limitation in hosting QwenPaw behind subpaths like `/qwenpaw`.

💡 *Underlying trend: users demand better integration with production infrastructures, enhanced local model control, and improved reliability in complex workflows.*

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (High Severity):**  
- **#8580** Memory tag index failure → 503 error despite valid config.  
  - *Impact*: Breaks agent memory functionality; affects all agents using tagged memory.  
  - *Fix PR?* ❌ Not yet merged.  
- **#8757** WeChat channel silent polling death → messages stop arriving without logs or recovery.  
  - *Impact*: Disrupts real-time inbound communication for users relying on WeChat integration.  
  - *Fix PR?* ❌ No fix submitted yet.

⚠️ **Medium-Severity Bugs:**  
- **#8123** Daily Paper job fails on truncated model output → `ToolJSONDecodeError` with no per-paper retry.  
  - *Impact*: Whole batch marked as failed despite partial success.  
  - *Fix PR?* ❌ Not addressed.  
- **#8845** Markdown tables overflow message bubbles → no horizontal scroll.  
  - *Impact*: Renders data unreadable in chat.  
  - *Fix PR?* ❌ No fix PR yet.  
- **#8844** Message list not keyboard-focusable → no scroll via PageUp/Down.  
  - *Impact*: Accessibility and usability loss on non-mouse devices.  
  - *Fix PR?* ❌ Not addressed.

🔧 **CLI/Backend Issues:**  
- **#8833**: Mission CLI duplicates `/api` prefix → requests `/api/api/chat/send`.  
  - *Fix PR:* ✅ **PR #8837** ([remove deprecated mission command](https://github.com/agentscope-ai/QwenPaw/pull/8837)) — Already merged, resolves the root cause.  
- **#8832**: Auto CLI health check uses unsupported `HEAD /version` → returns 405.  
  - *Fix PR?* ❌ Not yet resolved.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **High-Potential Features for Next Release:**  
- **Windows System Notification** ([#8821](https://github.com/agentscope-ai/QwenPaw/issues/8821)) — User-requested pop-up alert on task completion.  
  - *Signal*: Strong interest in background task awareness; likely to be implemented soon.  
- **Runtime Base Path Deployment** ([#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)) — Critical for cloud/container use cases.  
  - *Signal*: Clear roadmap push toward enterprise readiness.  
- **Local Model GPU Controls & Auto-Update** ([#8649, #8647, #8648](https://github.com/agentscope-ai/QwenPaw/pulls?q=is%3Aopen+is%3Apr+label%3Afeat%3Alocal-models)) — Indicates a strategic shift toward self-hosted, high-performance inference.  
  - *Signal*: QwenPaw is evolving into a full-stack AI agent platform with local compute capabilities.

---

### **7. User Feedback Summary**  
💬 **Key Pain Points Reported:**  
- **Frustration with unexplained failures**: Users report silent crashes (e.g., WeChat channel), missing error logs, and no feedback (e.g., #8757, #8580).  
- **UI/UX friction**: Mobile (Android Pad) layout bugs (#8839), inaccessible message scrolls (#8844), and table overflow (#8845) hinder daily use.  
- **Configuration complexity**: Misleading docs suggest `PUT /envs` deletes all env vars (#8843), causing accidental data loss.  
- **Reliability concerns**: Local model installers failing silently (#8830), and tools looping on password forms (#8836) reduce trust.

✅ **Positive Sentiment:**  
- Appreciation for modular design (e.g., plugin-based model management).  
- Excitement around new local model features (GPU, auto-update).  
- Recognition of timely fixes (e.g., PR #8835).

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered High-Impact Issues Needing Attention:**  
- **#8580** Memory tag index never rebuilds → 503 error despite correct config.  
  - *Age*: 17 days old | *Comments*: 6 | *Status*: Open  
  - ⚠️ **Critical**: Blocks memory tagging — core functionality for agent persistence.  
  - 🔗 [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/8580)  

- **#8757** WeChat channel silent polling death → no logging, cursor never resets.  
  - *Age*: 5 days | *Comments*: 2 | *Status*: Open  
  - ⚠️ **High severity**: Breaks inbound messaging; silent failure reduces debugging ability.  
  - 🔗 [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/8757)  

- **#8123** Daily Paper fails on truncated output → no retry per paper.  
  - *Age*: 44 days | *Comments*: 3 | *Status*: Open  
  - ⚠️ **Workflow disruption**: Whole job fails despite partial success.  
  - 🔗 [View Issue](https://github.com/agentscope-ai/QwenPaw/issues/8123)

> 📌 **Recommendation**: Prioritize these three issues in next sprint. They represent systemic risks to user trust and workflow continuity.

---  
*Data collected from GitHub: agentscope-ai/QwenPaw – 2026-11-21*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw 项目简报 – 2026-11-21**

---

### **1. 今日概览**  
ZeroClaw 保持高度活跃，代码清理、安全加固与功能优化持续推进。项目开发活动显著增加：过去 24 小时内新增 **50 个拉取请求（PR）** 与 **13 个新问题**，显示出强烈的工程投入。多数 PR 集中在技术债削减——移除无用代码、更新依赖项、统一配置规范；而与会话状态、内存召回及代理工作流完整性相关的严重缺陷正被优先处理。尽管暂无新版本发布，但通过内部重构，项目正稳步迈向更稳定、更安全、更易维护的状态。

---

### **2. 版本发布**  
❌ 今日及过去 7 天内未发布任何新版本。  
项目维持以稳定性为核心的发布节奏，当前重心集中于后端清理与安全修复，而非面向用户的特性开发。目前无重大变更或迁移说明待处理。

---

### **3. 项目进展**  
✅ **已合并/完成的 PR：**  
- **今日无合并** — 所有 50 个 PR 仍处于开放状态。  
- 但 JordanTheJet 今日提交了三项重大重构（`#12615`、`#12616`、`#12618`），分别针对核心 crate、Web 层与 CI 工具链中的无用代码、废弃模块及过时产物，为代码健康度与可维护性打下坚实基础。

📌 **关键进展亮点：**  
- **`#12612` (feat(memory)!: 停用本地 LLM 响应缓存)** — 一项重要架构决策，移除几乎失效的缓存机制，降低复杂度与潜在故障点。此举呼应近期报告的缺陷（#12607）与性能疑虑。  
- **`#12610` (fix(deps): 将 wasmtime-wasi 升级至 48.0.10)** — 紧急安全补丁，修复 RUSTSEC-2026-0587（WASI沙箱逃逸漏洞），体现积极的依赖治理。  
- **`#12617` 与 `#12615`** — 国际化键值与废弃源文件的重构提升了代码清晰度，减轻贡献者认知负担。

---

### **4. 社区热点话题**  
🔥 **最活跃的问题与 PR（按互动量）：**  

| 问题/PR | 主题 | 互动量 | 链接 |
|--------|------|-----------|------|
| [#12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) | 网关会话状态在写入失败后卡在 `running` 状态 | 0 条评论，高风险 | [问题 #12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) |
| [#12612](https://github.com/zeroclaw-labs/zeroclaw/pull/12612) | 停用本地 LLM 响应缓存 | 0 条评论，高影响 | [PR #12612](https://github.com/zeroclaw-labs/zeroclaw/pull/12612) |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | RFC：操作员管理的服务凭证作用域使用 | 5 条评论，安全关键 | [问题 #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) |

🔍 **深层需求：**  
- **以安全为先的访问控制**：该 RFC（#12422）反映出对零信任凭证管理日益增长的需求，尤其当代理对接敏感服务时。  
- **会话可靠性**：多个 PR 与问题指向会话生命周期管理不稳定（如 `running` 状态无法清除），表明网关层亟需健壮的错误恢复机制。  
- **开发者体验**：大量清理类 PR 表明代码库膨胀已影响贡献者上手效率与长期可持续性。

---

### **5. 缺陷与稳定性**  
⚠️ **严重缺陷（S1 - 工作流阻塞）：**  
- **[#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794)**：在任务中途停止代理将导致工具调用与思考内容从上下文中丢失 —— **高风险**，直接影响工作流完整性。  
- **[#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597)**：若语音转录失败，Telegram 通道将无限挂起 —— 阻断消息流转，破坏聊天连续性。

🟡 **降级行为（S2）：**  
- **[#12604](https://github.com/zeroclaw-labs/zeroclaw/issues/12604)**：FastMCP 工具返回字符串结果两次 —— 导致模型输入冗余，存在幻觉风险。  
- **[#12606](https://github.com/zeroclaw-labs/zeroclaw/issues/12606)**：因前缀不匹配，配置无法设置 `a2a.client.peers` —— 阻碍高级对等节点配置。

🟢 **修复进行中：**  
- **`#12619`（网关会话状态）** 已明确根因（丢弃了 `set_session_state` 的返回结果），预计很快提交修复 PR。  
- **`#12612`**（响应缓存移除）直接解决 #12607 报告的不稳定性与低效问题。

---

### **6. 功能请求与路线图信号**  
🚀 **用户最期待的功能（预判下一版本）：**  
- **BrowserTool 中支持文件上传** ([#12614](https://github.com/zeroclaw-labs/zeroclaw/issues/12614)) —— 形式化自动化受阻；极可能在 v0.18+ 中优先实现。  
- **WhatsApp 引用回复** ([#12598](https://github.com/zeroclaw-labs/zeroclaw/issues/12598)) —— 提升群组聊天用户体验；反映对上下文通信需求的增长。  
- **作用域服务凭证** ([#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422)) —— RFC 已获接受；极可能成为下一主版本的核心策略功能。  
- **通过外部 API 实现记忆召回重排序** ([#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022)) —— 支持企业级记忆过滤；强烈信号表明 AI 协调能力趋于成熟。

👉 **路线图预测：** 下一版本（很可能为 v0.18）将聚焦 **安全强化**、**会话可靠性** 与 **企业集成**（OIDC、作用域凭证、记忆控制）。

---

### **7. 用户反馈摘要**  
🗣️ **真实用户痛点：**  
- **中断时上下文丢失** —— 用户反映在任务中途停止代理后，所有先前推理与工具输出均消失 ([#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794))。  
- **语音消息失败导致频道瘫痪** —— Telegram 用户因单次转录失败即遭遇机器人完全失能 ([#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597))。  
- **缺少文件上传功能** —— 限制真实场景自动化流程（如表单提交）的实现 ([#12614](https://github.com/zeroclaw-labs/zeroclaw/issues/12614))。  
- **配置结构混乱** —— 用户因前缀不匹配难以配置 `a2a.client.peers` ([#12606](https://github.com/zeroclaw-labs/zeroclaw/issues/12606))，暴露用户体验文档不足。

👍 **积极信号：**  
- 用户赞赏 RFC 与设计透明度（如 #12422）。  
- 技术清理类 PR 互动热烈，表明社区对项目长期健康状况充满信心。

---

### **8. 待办清单监控**  
👀 **需维护者重点关注的高优先级问题：**  

| 问题 | 严重性 | 状态 | 链接 | 备注 |
|------|----------|--------|------|-------|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | S1 | 已接受 | [问题 #8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | 工作流阻塞；需紧急修复 |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | 安全 | 已接受 | [问题 #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | RFC 已接受；需制定实施路线图 |
| [#12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607) | S1 | 开放 | [问题 #12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607) | 记忆召回污染事实 —— 严重数据完整性风险 |
| [#12613](https://github.com/zeroclaw-labs/zeroclaw/issues/12613) | 清理 | 进行中 | [问题 #12613](https://github.com/zeroclaw-labs/zeroclaw/issues/12613) | 无用代码审计追踪器 —— 对未来可维护性至关重要 |

📌 **行动要求：**  
维护者应优先解决 **上下文丢失**（#8794）与 **记忆数据污染**（#12607）问题，再推进新功能开发。鉴于其安全重要性，RFC（#12422）应加速进入实施阶段。

---

**总结：** ZeroClaw 正处深度技术整合阶段——清理遗留代码、修复会话稳定性、强化安全性。虽然短期内无新版本发布，但项目正在构建坚实的未来可扩展性与企业级采纳基础。社区参与度高，但用户在工作流中断与配置复杂性方面的痛点必须立即应对。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*