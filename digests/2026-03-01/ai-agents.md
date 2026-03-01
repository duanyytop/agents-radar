# OpenClaw 生态日报 2026-03-01

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-01 00:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-03-01

## 1. 今日速览

OpenClaw 今日维持**极高开发活跃度**，24小时内产生 **500 条 Issues 更新**（新开/活跃 373，关闭 127）与 **500 条 PR 更新**（待合并 401，已合并/关闭 99），无新版本发布。社区聚焦三大主线：**消息生命周期可靠性工程**（持久化去重、写前日志、投递队列）、**多语言国际化**（i18n 系统落地）、**认证与成本优化**（Anthropic OAuth 修复、提示缓存问题）。值得注意的是，@nohat 单日提交 6 个 PR 主导消息基础设施重构，显示核心架构正在向生产级可靠性演进。

---

## 2. 版本发布

**无新版本发布**（v2026.2.26 仍为最新版本，但存在 [#28877](https://github.com/openclaw/openclaw/issues/28877) 报告的 Intel Mac 回归问题）。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#13622](https://github.com/openclaw/openclaw/pull/13622) | @vaur94 | Web UI 完整国际化系统（EN/TR/FR/DE） | **里程碑**：i18n 架构落地，为全球化奠定基础 |
| [#29993-29996](https://github.com/openclaw/openclaw/pull/29993) | @nohat | 批量为 16+ 渠道适配器添加 `sendPayload` 统一接口 | 消息投递管道标准化，支撑后续 outbox 重构 |
| [#30112](https://github.com/openclaw/openclaw/pull/30112) | @kevinWangSheng | Kimi Coding 订阅认证修复（User-Agent）+ 内存代理环境变量 | 解除国内用户订阅阻断，修复企业代理场景 |

### 架构级推进（待合并）

| PR | 作者 | 技术债务/创新 | 影响 |
|:---|:---|:---|:---|
| [#30009](https://github.com/openclaw/openclaw/pull/30009) / [#30011](https://github.com/openclaw/openclaw/pull/30011) / [#30012](https://github.com/openclaw/openclaw/pull/30012) | @nohat | **写前日志 Outbox + 持久化 Turn 跟踪 + 孤儿恢复** | 消息**恰好一次投递**语义，网关重启不丢消息 |
| [#29793](https://github.com/openclaw/openclaw/pull/29793) | @nathan-deepmm | 工作区文件并发写入锁 | 解决多 Agent 共享工作区时的更新丢失 |
| [#16565](https://github.com/openclaw/openclaw/pull/16565) | @mdlmarkham | Agent-to-Agent 调用与辩论工具 | 多 Agent 协作架构，向 AutoGen/CrewAI 能力看齐 |

**整体评估**：项目正从"功能可用"向"企业级可靠性"跃迁，消息生命周期和并发控制是基础设施层面的关键投资。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n & Localization Support | **71 评论** | 全球用户强烈要求多语言，但维护方明确"无带宽支持" | **Open**，社区 PR #13622 已提供部分实现 |
| [#4531](https://github.com/openclaw/openclaw/issues/4531) Docker 配对断开 (1008) | 36 评论 | 自托管部署的 WebSocket 稳定性 | **Closed**，需配对流程优化 |
| [#1818](https://github.com/openclaw/openclaw/issues/1818) Ubuntu Systemd 服务未安装 | 31 评论 | Linux 生产部署的 systemd 集成 | **Closed**，根因是用户服务检测逻辑 |
| [#9095](https://github.com/openclaw/openclaw/issues/9095) / [#23538](https://github.com/openclaw/openclaw/issues/23538) Anthropic OAuth 401 | 24+16 评论 | **订阅用户阻断性故障**：setup-token 存储成功但运行时失效 | **#9095 Closed, #23538 Open**，疑似版本回归 |

### 背后诉求分析

- **#3460 的 71 评论** 反映国际化是**增长瓶颈**：非英语用户无法使用高级功能（如 TUI 的 `/` 命令），但维护团队资源受限，形成"社区想要 vs 团队能交付"的张力。
- **Anthropic OAuth 双 Issue** 显示认证层存在**状态不一致 bug**：token 存储与运行时使用的上下文分离，可能涉及 profile 隔离或 token 刷新机制。

---

## 5. Bug 与稳定性

### 🔴 严重（阻断使用）

| Issue | 现象 | 修复状态 | 影响范围 |
|:---|:---|:---|:---|
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | macOS v2026.2.26 **仅 arm64**，Intel Mac 崩溃 | **无 PR**，需紧急回滚构建配置 | Intel Mac 用户完全无法使用 |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | Anthropic setup-token 401（隔离 profile 可复现） | **Open**，#9095 修复可能不完整 | Claude 订阅用户 |
| [#29572](https://github.com/openclaw/openclaw/issues/29572) | `/model` TUI 命令静默失败，模型未实际切换 | **Open**，sessions.patch 200 但状态未持久 | 多模型用户 |
| [#26207](https://github.com/openclaw/openclaw/issues/26207) | v2026.2.24 `setGlobalDispatcher` 破坏 HTTP 代理 | **Open**，GFW/企业代理用户无法连接 | 中国大陆及企业用户 |

### 🟡 高（成本/体验受损）

| Issue | 现象 | 修复状态 |
|:---|:---|:---|
| [#20894](https://github.com/openclaw/openclaw/issues/20894) / [#19989](https://github.com/openclaw/openclaw/issues/19989) / [#23715](https://github.com/openclaw/openclaw/issues/23715) | **提示缓存失效导致 5-100x 成本激增** | #20894, #19989 **Closed**，#23715 **Open**（共享系统提示前缀问题） |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | Windows `spawn EINVAL` 插件安装失败 | **Open**，Node 子进程权限问题 |
| [#29757](https://github.com/openclaw/openclaw/issues/29757) | Cron 任务 2 小时后重复执行 | **Open**，时区/调度器逻辑 bug |

### 🟢 中/低

- [#29214](https://github.com/openclaw/openclaw/issues/29214) Signal 群聊 @mention 无效
- [#28042](https://github.com/openclaw/openclaw/issues/28042) Avatar 端点 404

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或强烈信号）

| 需求 | Issue/PR | 证据 |
|:---|:---|:---|
| **完整 i18n 系统** | #3460 + #13622 (已合并) + #28920 (俄语 PR) | 架构已落地，语言扩展成本低 |
| **加密密钥管理** | [#7916](https://github.com/openclaw/openclaw/issues/7916) | 13 评论，9 👍，安全合规刚需 |
| **LLM 输入/输出中间件钩子** | [#20416](https://github.com/openclaw/openclaw/issues/20416) | PII 脱敏、内容过滤的企业需求 |
| **Cron 会话隔离选项** | [#20092](https://github.com/openclaw/openclaw/issues/20092) | 8 👍，有 PR #30140 修复相关超时问题 |

### 长期路线图信号（需架构决策）

| 需求 | Issue | 阻碍 |
|:---|:---|:---|
| **API 密钥防 Agent 泄露** | [#11829](https://github.com/openclaw/openclaw/issues/11829) | 需重构 prompt 序列化与系统提示隔离 |
| **Brave Search 替代方案** | [#16629](https://github.com/openclaw/openclaw/issues/16629) | Brave 收费后需评估 DuckDuckGo/SearXNG |
| **微信集成** | [#29591](https://github.com/openclaw/openclaw/issues/29591) | 非官方生态，合规风险 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

> *"5x API costs due to ineffective prompt caching"* — @svenssonaxel [#23715](https://github.com/openclaw/openclaw/issues/23715)

> *"Model context window too small (4096 tokens). Minimum is 16000"* — 自定义 API 提供商默认配置陷阱 [#21653](https://github.com/openclaw/openclaw/issues/21653)

> *"CLI is extremely slow on pi4b — 17+ seconds for --help"* — 嵌入式设备性能问题 [#5871](https://github.com/openclaw/openclaw/issues/5871)

> *"Telegram messages replaced on model failures"* — 错误处理破坏用户信任 [#19982](https://github.com/openclaw/openclaw/issues/19982)

### ✅ 满意场景

- Docker 快速部署流程（[#4531](https://github.com/openclaw/openclaw/issues/4531) 虽有问题但文档清晰）
- 多渠道统一抽象（用户积极测试 Signal、WhatsApp、Telegram 集成）

### 📊 使用模式洞察

- **企业/自托管用户**：高度关注 systemd、HTTP 代理、密钥加密
- **成本敏感用户**：密集反馈提示缓存、模型切换、Token 计费
- **中文社区**：微信集成需求强烈（#29591），Kimi Coding 订阅修复紧迫

---

## 8. 待处理积压

### ⚠️ 需维护者关注的长期 Issue

| Issue | 天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n 官方支持 | 32 天 | 社区 PR 已提供，需官方表态合并策略 | 定义 i18n 维护模式（社区驱动 vs 官方核心） |
| [#5871](https://github.com/openclaw/openclaw/issues/5871) Pi4B CLI 性能 | 28 天 | 嵌入式场景可用性 | 性能剖析，Tree-shaking 或 Rust 重写评估 |
| [#7916](https://github.com/openclaw/openclaw/issues/7916) 加密密钥管理 | 26 天 | 安全合规 blocker | 优先纳入 Q2 路线图 |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) API 密钥防泄露 | 21 天 | 企业采用障碍 | 与 #7916 合并设计安全架构 |
| [#20416](https://github.com/openclaw/openclaw/issues/20416) LLM 中间件钩子 | 11 天 | 生态扩展性 | 评估与现有插件系统兼容性 |

### 🔧 待合并 PR 风险

- **#30009/#30011/#30012**（nohat 的消息生命周期重构）：批量大 PR，需仔细审查 SQLite 模式迁移与向后兼容
- **#16565**（A2A Agent 调用）：架构重大变更，需 API 设计审查

---

*日报生成时间：2026-03-01 | 数据来源：OpenClaw GitHub 公开 API*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告
**数据基准：2026-03-01 | 分析周期：24小时**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**从"功能可用"向"生产级可靠"跃迁的关键阶段**。头部项目 OpenClaw 以 500+ Issues/PR 的日活维持绝对领导地位，但 ZeroClaw、PicoClaw、NanoBot 等新兴力量正以 Rust/Go 重写、多通道架构、企业级特性等差异化路径快速追赶。生态技术焦点高度收敛：**消息生命周期可靠性**（持久化、恰好一次投递）、**多模型供应商兼容性**（OpenRouter、本地 Ollama、推理模型适配）、**企业部署就绪**（OAuth、配额管理、多租户）成为共同攻坚方向。与此同时，Windows 平台支持、国际化、成本治理等"最后一公里"体验问题成为用户流失的主要摩擦点。

---

## 2. 各项目活跃度对比

| 项目 | 语言/框架 | Issues (新/关/活) | PR (新/关/待) | Release | 健康度评估 |
|:---|:---|:---:|:---:|:---:|:---|
| **OpenClaw** | TypeScript/Node | 500 (373/127/500) | 500 (99/401) | 无 | 🟢 **极高活跃，架构跃迁期** — 消息可靠性重构主导，Intel Mac 回归问题待解 |
| **ZeroClaw** | Rust | 50 (10/40/50) | 50 (44/6) | 无 | 🟢 **高强度迭代，质量冲刺** — CI 队列积压 380+ 成瓶颈，编译稳定性修复密集 |
| **NanoBot** | Python | 25 (21/4/25) | 79 (25/54) | v0.1.4.post3 | 🟢 **快速迭代，企业通道攻坚** — QQ/飞书/钉钉稳定性修复，PR 积压需关注 |
| **PicoClaw** | Go | 85 (76/9/85) | 94 (18/76) | v0.2.0 (维护性) | 🟢 **极高活跃，可靠性加固** — Provider 生态扩张，网关并发/内存泄漏系统性修复 |
| **NanoClaw** | TypeScript/Node | 12 (4/8/12) | 37 (9/28) | 无 | 🟡 **稳健维护，技术债务清理** — 8 个代码质量 Issue 批量修复，多通道架构重构中 |
| **IronClaw** | Rust | 10 (10/0/10) | 25 (2/23) | 无 | 🟡 **高活跃，审查瓶颈** — 安装体验 6 PR 矩阵式加固，23 PR 待审 |
| **ZeptoClaw** | Rust | 8 (8/0/8) | 2 (1/1) | 无 | 🟡 **维护者驱动路线图** — 7 个自提 Issue 预研多模态/企业/IoT，社区参与待激活 |
| **LobsterAI** | Python | 21 (19/2/21) | 4 (2/2) | 无 | 🟡 **高反馈压力，响应积极** — Ollama/Windows 问题集中爆发，IM 集成迭代快 |
| **EasyClaw** | 未明确 | 0 (0/0/0) | 0 (0/0) | v1.5.12+v1.5.13 | 🔴 **静默维护，社区待兴** — 双版本连发均为 macOS 文档，零 Issues/PR 活动 |
| **TinyClaw** | 未明确 | 1 (0/1/1) | 1 (0/1) | v0.0.7 (空版本) | 🔴 **活跃度极低，信任危机** — Windows 兼容性 Issue 被情绪性关闭，无技术回应 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 绝对领先：500 Issues/PR 日活 ≈ 第2-4名总和 | ZeroClaw 50、PicoClaw 85、NanoBot 25，数量级差距明显 |
| **技术路线** | **可靠性优先的渐进演进** — 消息生命周期（outbox、WAL、孤儿恢复）、并发控制、持久化 Turn 跟踪 | ZeroClaw/PicoClaw 选择 **Rust/Go 重写** 追求性能与内存安全；NanoBot 押注 **Python 生态与学术场景** |
| **核心优势** | ① **最成熟的渠道抽象**（16+ 适配器统一 `sendPayload` 接口）<br>② **企业级可靠性投资**（恰好一次投递语义）<br>③ **最大技能生态**（OpenClaw SKILL 成为事实标准） | 劣势：Node.js 运行时资源占用高（ZeroClaw 用户反馈 1.5GB 网关损耗），编译/启动速度受诟病 |
| **竞争压力** | ZeroClaw 直接对标迁移路径（#88 生产级迁移清单），PicoClaw 以 LiteLLM 统一代理层消解 Provider 碎片化 | 需警惕"性能敏感型用户"和"多供应商异构部署"场景的流失 |

**关键差异**：OpenClaw 是**唯一进入"可靠性工程"深水区**的项目（@nohat 的 WAL/outbox 重构），而竞品仍在功能补齐或语言层迁移。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与信号强度 |
|:---|:---|:---|
| **消息生命周期可靠性** | OpenClaw ⭐⭐⭐⭐⭐、ZeroClaw ⭐⭐⭐⭐、NanoClaw ⭐⭐⭐⭐ | OpenClaw: WAL + outbox + 孤儿恢复；ZeroClaw: 内存数据优化；NanoClaw: OOM 崩溃修复（ghost sockets） |
| **多模型供应商兼容** | PicoClaw ⭐⭐⭐⭐⭐、LobsterAI ⭐⭐⭐⭐⭐、ZeptoClaw ⭐⭐⭐⭐⭐、ZeroClaw ⭐⭐⭐⭐ | PicoClaw: OpenRouter/Groq/MiniMax/LiteLLM 密集 PR；LobsterAI: Ollama 本地模型"完全无法使用"；ZeptoClaw: Azure/Bedrock 预设；ZeroClaw: 硬编码 Anthropic ID 修复 |
| **推理模型适配** | NanoBot ⭐⭐⭐⭐⭐、LobsterAI ⭐⭐⭐⭐ | NanoBot: DeepSeek/Kimi/o1 的 `reasoning_content` 字段兼容；LobsterAI: 提示缓存失效导致 5-100x 成本激增 |
| **企业部署就绪** | IronClaw ⭐⭐⭐⭐⭐、ZeptoClaw ⭐⭐⭐⭐、OpenClaw ⭐⭐⭐⭐ | IronClaw: PostgreSQL 版本检查、TLS、多租户；ZeptoClaw: 配额管理、OAuth；OpenClaw: Anthropic OAuth 修复 |
| **成本治理与缓存** | OpenClaw ⭐⭐⭐⭐⭐、ZeptoClaw ⭐⭐⭐⭐ | OpenClaw: 提示缓存失效（#20894/#19989/#23715）；ZeptoClaw: 按 provider 配额管理 |
| **Windows 平台支持** | LobsterAI ⭐⭐⭐⭐⭐、TinyClaw ⭐⭐⭐⭐⭐、OpenClaw ⭐⭐⭐ | LobsterAI: 404 错误、乱码、权限问题集中爆发；TinyClaw: "完全不可用"信任危机；OpenClaw: `spawn EINVAL` 插件安装失败 |
| **国际化 (i18n)** | OpenClaw ⭐⭐⭐⭐⭐、ZeroClaw ⭐⭐⭐ | OpenClaw: #3460 71 评论，社区 PR #13622 已合并 EN/TR/FR/DE；ZeroClaw: 架构就绪，语言扩展成本低 |
| **多通道架构解耦** | NanoClaw ⭐⭐⭐⭐⭐、ZeroClaw ⭐⭐⭐⭐ | NanoClaw: #500 可插拔架构重构（WhatsApp 硬耦合→通用抽象）；ZeroClaw: 钉钉/飞书/BlueBubbles iMessage 持续扩展 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级可靠性、最大渠道生态、技能市场 | 技术团队、多代理协调场景、需要"恰好一次"消息保证的生产环境 | Node.js + SQLite，渐进式可靠性工程，技能即插件 |
| **ZeroClaw** | 性能与内存效率、OpenClaw 迁移承接 | 资源受限 VPS 用户（4vCPU/30GB RAM）、Rust 生态偏好者、成本敏感型 | Rust 全栈，"合并优先"迁移策略，WASM 技能运行时 |
| **PicoClaw** | 轻量网关、Provider 统一代理、本地模型优先 | 嵌入式/边缘设备、多供应商路由需求、Go 生态用户 | Go 实现，LiteLLM 代理层消解碎片化，追求更小二进制 |
| **NanoBot** | 学术/研究场景、快速原型、多通道企业 IM | 高校实验室、飞书/钉钉/QQ 企业用户、Python 数据科学生态 | Python + Qdrant 向量存储，上下文降噪抗幻觉，Skill 即 MCP |
| **IronClaw** | WASM 安全执行、NEAR 区块链生态、多租户 SaaS | 区块链开发者、需要密钥扫描/隔离的安全敏感场景、WASM 插件市场 | Rust + WASM 沙盒，NEAR AI 集成，多作用域内存架构 |
| **ZeptoClaw** | 多模态（视觉）、IoT 硬件、企业预设 | 硬件创客（MQTT）、需要视觉输入的消费级场景、Azure/ Bedrock 企业 | Rust，串口/UART/MQTT 硬件通道，快速路线图迭代 |
| **LobsterAI** | 有道云笔记生态、IM 精细化集成、快速版本迭代 | 中文知识工作者、飞书重度用户、需要笔记联动的场景 | Python，与有道产品矩阵协同，"每天一个版本"节奏 |
| **NanoClaw** | 金融/交易场景、容器化部署、实时追踪 | 量化交易者、需要纸面/实盘隔离的专业用户、DevOps 团队 | TypeScript，原子化部署流水线，Docker 优雅关闭 |
| **EasyClaw** | 桌面端易用性、macOS 优先 | 非技术终端用户、追求一键安装的个人用户 | 未明确，双版本聚焦 Gatekeeper 绕过文档 |
| **TinyClaw** | OpenViking 插件生态 | 特定插件需求用户 | 未明确，Windows 支持存疑 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **L1: 架构跃迁期** | OpenClaw | 日活 500+，核心重构（WAL/outbox），从功能可用→生产可靠 | 高风险高回报，需关注向后兼容 |
| **L2: 快速迭代期** | ZeroClaw、PicoClaw、NanoBot | 日活 50-100，功能冲刺与质量修复并行，CI/PR 积压成瓶颈 | 规模扩张期，需加强审查带宽 |
| **L3: 质量巩固期** | NanoClaw、IronClaw | 技术债务主动清理（8 Issue 批量修复）、安装体验矩阵式加固 | 稳健但需防止审查停滞 |
| **L4: 路线图预研期** | ZeptoClaw | 维护者驱动 7 个战略 Issue，社区参与待激活 | 需开放 RFC 流程引入外部输入 |
| **L5: 反馈压力期** | LobsterAI | 高 Bug 报告率（Ollama/Windows），快速响应但架构债务显现 | 需平衡迭代速度与根因修复 |
| **L6: 静默/危机期** | EasyClaw、TinyClaw | 零活动或负面事件处理失当 | EasyClaw 需激活社区；TinyClaw 需修复信任 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"推理模型兼容性"成为新兼容性层** | NanoBot、LobsterAI、OpenClaw 密集出现 `reasoning_content`、提示缓存、思考内容过滤需求 | 设计 LLM 抽象层时，需将推理模型（DeepSeek-R1、Kimi、o1/o3）的**非标准字段**和**成本结构**作为一等公民，而非事后补丁 |
| **本地模型部署从"爱好者选项"变为"成本刚需"** | LobsterAI #174 "Ollama 从未成功"、PicoClaw #28 LM Studio 一键连接、OpenClaw #5871 Pi4B 性能 | 边缘/本地推理优化（量化、模型切换热加载、内存管理）将成为差异化竞争力，而非边缘功能 |
| **Provider 碎片化催生"统一代理层"标准** | PicoClaw #930 LiteLLM、ZeroClaw 硬编码 Anthropic ID 修复、ZeptoClaw Azure/Bedrock 预设 | 新项目应优先集成 LiteLLM/统一代理层，而非逐个适配；存量项目需评估迁移成本 |
| **多通道架构从"渠道适配器"演进为"可插拔运行时"** | NanoClaw #500 重构、ZeroClaw 钉钉/飞书/BlueBubbles 密集落地 | "渠道"概念正在泛化为"交互端点"（IM、邮件、硬件、Web），需设计统一的会话隔离、身份、速率限制抽象 |
| **成本治理从"事后账单"前移到"实时配额"** | ZeptoClaw #200 按 provider 配额、OpenClaw 提示缓存失效、NanoBot Token 异常消耗 | 企业场景需要**调用级预算控制**和**模型降级路由**，而非仅依赖供应商侧限制 |
| **Windows 支持成为"包容性"试金石** | TinyClaw 信任危机、LobsterAI 乱码/404 集中爆发、OpenClaw `spawn EINVAL` | 声明跨平台支持需配套**自动化 Windows CI**和**原生安装包**，而非文档层面的"理论支持" |
| **技能/工具生态从"代码插件"向"WASM 沙盒+MCP"迁移** | IronClaw WASM 通道、ZeroClaw MCP 原生客户端、NanoBot Skill 即 MCP | 安全执行与生态互通需求推动运行时隔离标准化，WASM + MCP 可能成为下一代技能协议栈 |

---

**报告结论**：OpenClaw 凭借可靠性工程深度和生态规模维持领导地位，但 Rust 重写派（ZeroClaw、IronClaw、ZeptoClaw）和 Python 实用派（NanoBot、LobsterAI）正从性能、企业特性、垂直场景等维度形成合围。未来 6-12 个月的关键胜负手在于：**多模型路由的统一抽象成熟度**、**推理模型的成本优化能力**、以及**Windows/企业部署的"最后一公里"体验完整性**。

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-03-01

## 1. 今日速览

ZeroClaw 今日呈现**高强度迭代态势**：24小时内处理 **50 Issues**（关闭40/活跃10）和 **50 PRs**（合并关闭44/待合并6），无新版本发布。项目处于**密集 bug 修复与功能冲刺阶段**，编译稳定性问题（S0级）得到快速响应，同时社区对 iMessage 支持、OpenClaw 迁移路径、多提供商兼容等需求持续升温。CI 基础设施出现显著瓶颈（Actions 队列积压超380个），可能成为近期交付风险点。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 核心功能落地

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#2212](https://github.com/zeroclaw-labs/zeroclaw/pull/2212) | @chumyin | **OpenClaw 迁移工具正式上线**：实现"合并优先"迁移策略，解决数据漂移和覆盖风险，支持 onboarding 向导和 in-agent 操作 |
| [#2271](https://github.com/zeroclaw-labs/zeroclaw/pull/2271) | @maxtongwang | **BlueBubbles iMessage 通道合并**：填补美国主流 IM 平台空白，Webhook 推送架构，支持 macOS 自托管 |
| [#2296](https://github.com/zeroclaw-labs/zeroclaw/pull/2296) | @theonlyhennygod | **SKILL.toml 原生工具处理器**：技能生态基础设施就绪，支持可信域名安装和透明预加载 |
| [#1842](https://github.com/zeroclaw-labs/zeroclaw/pull/1842) | @zverozabr | **熔断器机制 + 提供商健康追踪**：防止级联故障，自动降级至健康节点 |

### 通道与集成增强

| PR | 说明 |
|:---|:---|
| [#2297](https://github.com/zeroclaw-labs/zeroclaw/pull/2297) | 钉钉 Open API 主动消息发送（解决 cron 提醒场景）|
| [#2198](https://github.com/zeroclaw-labs/zeroclaw/pull/2198) | 可配置 ACK 表情策略 + `channel_ack_config` 工具 |
| [#2147](https://github.com/zeroclaw-labs/zeroclaw/pull/2147) | 钉钉回调文本载荷丰富化 |
| [#1843](https://github.com/zeroclaw-labs/zeroclaw/pull/1843) | **MCP 原生客户端**：stdio/HTTP/SSE 三协议支持，对接 Claude Desktop 生态 |

### 基础设施与可靠性

| PR | 说明 |
|:---|:---|
| [#2300](https://github.com/zeroclaw-labs/zeroclaw/pull/2300) | Prometheus 指标注册错误传播修复（高风险）|
| [#2294](https://github.com/zeroclaw-labs/zeroclaw/pull/2294) | wasmtime 生态依赖对齐至 36.0.6 |
| [#2295](https://github.com/zeroclaw-labs/zeroclaw/pull/2295) | 服务器环境 OAuth UX 改进 |
| [#2298](https://github.com/zeroclaw-labs/zeroclaw/pull/2298) | REST-first PR 验证器（规避 GraphQL 限流）|

---

## 4. 社区热点

### 高互动 Issues（评论≥4）

| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#88](https://github.com/zeroclaw-labs/zeroclaw/issues/88) | 6 | **生产级 OpenClaw→ZeroClaw 迁移阻塞清单**：4vCPU/30GB RAM VPS 场景，内存占用优化（当前 OpenClaw 网关损耗 1.5GB）| 🔄 持续跟踪 |
| [#2175](https://github.com/zeroclaw-labs/zeroclaw/issues/2175) | 8 | **编译错误**：`ChannelRuntimeCommand` 非穷尽模式匹配（`ApprovePendingRequest`/`DenyToolApproval` 未覆盖）| ✅ 已关闭 |
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | 5 | **GitHub 原生通道**：观察/操作 repo 活动（issues/PRs/评论/reviews）的统一接口 | ✅ 已关闭 |
| [#2058](https://github.com/zeroclaw-labs/zeroclaw/issues/2058) | 5 | **OneBot v11 协议支持**：QQ Bot 功能受限，需社区协议补充 | ✅ 已关闭 |
| [#2053](https://github.com/zeroclaw-labs/zeroclaw/issues/2053) | 5 | **运行时配置 CLI**：`config show/get/set` 子命令，免手动编辑 toml | ✅ 已关闭 |
| [#2270](https://github.com/zeroclaw-labs/zeroclaw/issues/2270) | 4 | **硬编码 fallback 模型 ID 破坏非 Anthropic 提供商**：`anthropic/claude-sonnet-4-20250514` 在 OpenRouter/Vertex/Bedrock 返回 400 | ✅ 已关闭 |
| [#2223](https://github.com/zeroclaw-labs/zeroclaw/issues/2223) | 4 | **Web 聊天历史丢失**：`ws.rs` 内存存储，页面刷新即清空 | ✅ 已关闭 |

**诉求分析**：生产迁移准备度、多提供商兼容性、企业级可观测性/配置管理是社区最迫切的三大主题。

---

## 5. Bug 与稳定性

### S0 - 数据丢失/安全风险（已修复）

| Issue | 问题 | Fix PR |
|:---|:---|:---|
| [#2175](https://github.com/zeroclaw-labs/zeroclaw/issues/2175) | 编译失败：`ChannelRuntimeCommand` 匹配不完整 | 已合并 |
| [#2206](https://github.com/zeroclaw-labs/zeroclaw/issues/2206) | v0.1.7 编译失败：缺失 `runtime_perplexity_filter_snapshot`、`DocxReadTool` 未声明 | 已合并 |
| [#2230](https://github.com/zeroclaw-labs/zeroclaw/issues/2230) | `channel-lark` Windows 编译失败 | 已合并 |

### S1 - 工作流阻塞

| Issue | 问题 | 状态 |
|:---|:---|:---|
| [#2275](https://github.com/zeroclaw-labs/zeroclaw/issues/2275) | README 安装说明被误删（commit 7d65b29） | ✅ 已关闭 |

### S2 - 行为降级

| Issue | 问题 | 状态 |
|:---|:---|:---|
| [#2223](https://github.com/zeroclaw-labs/zeroclaw/issues/2223) | WebSocket 聊天历史内存存储，刷新丢失 | ✅ 已关闭 |
| [#2233](https://github.com/zeroclaw-labs/zeroclaw/issues/2233) | 飞书通道消息重复+配置问题 | ✅ 已关闭 |
| [#2220](https://github.com/zeroclaw-labs/zeroclaw/issues/2220) | Cron 任务循环重复执行 | ✅ 已关闭 |
| [#2210](https://github.com/zeroclaw-labs/zeroclaw/issues/2210) | 内存仅存储用户消息，丢失 Agent 回复 | ✅ 已关闭 |
| [#2224](https://github.com/zeroclaw-labs/zeroclaw/issues/2224) | Slack 显示原始用户 ID 而非显示名 | ✅ 已关闭 |
| [#2176](https://github.com/zeroclaw-labs/zeroclaw/issues/2176) | `require_pairing=true` 时 Web UI Agent Chat 连接失败 | ✅ 已关闭 |
| [#2181](https://github.com/zeroclaw-labs/zeroclaw/issues/2181) | QQ 消息无历史上下文 | ✅ 已关闭 |

### 待修复

| Issue | 问题 | 严重度 |
|:---|:---|:---|
| [#2168](https://github.com/zeroclaw-labs/zeroclaw/issues/2168) | Web Dashboard Agent 标签页损坏：`web/dist` 资源与 `ws.ts` auth 变更不匹配 | S2 |

---

## 6. 功能请求与路线图信号

### 已纳入近期版本（有 PR 或明确计划）

| 需求 | Issue/PR | 信号强度 |
|:---|:---|:---|
| GitHub 原生通道 | [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | ⭐⭐⭐ 高（已关闭，待实现）|
| OneBot v11 支持 | [#2058](https://github.com/zeroclaw-labs/zeroclaw/issues/2058) | ⭐⭐⭐ 高（已关闭）|
| 运行时配置 CLI | [#2053](https://github.com/zeroclaw-labs/zeroclaw/issues/2053) | ⭐⭐⭐ 高（已关闭）|
| Cortex Memory 后端 | [#2208](https://github.com/zeroclaw-labs/zeroclaw/issues/2208) | ⭐⭐⭐ 高（社区生态整合）|
| 子 Agent 支持 | [#2204](https://github.com/zeroclaw-labs/zeroclaw/issues/2204) | ⭐⭐⭐ 高（架构级需求）|

### 路线图讨论中（RFI/设计阶段）

| 需求 | Issue | 说明 |
|:---|:---|:---|
| 多 Crate 工作区拆分 | [#2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263) | M4-5 正式化，编译时间优化，已发 RFI |
| Token 消耗与成本管理 | [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) | 产品化部署成本可行性，分层模型路由 |
| 内存重新索引 | [#2273](https://github.com/zeroclaw-labs/zeroclaw/issues/2273) | 模型变更后 embeddings 失效问题 |

### 待评估

| 需求 | Issue | 用户场景 |
|:---|:---|:---|
| `default_model` hint 支持 | [#2234](https://github.com/zeroclaw-labs/zeroclaw/issues/2234) | 配置化模型路由 |
| 本地模型工具数量优化 | [#2264](https://github.com/zeroclaw-labs/zeroclaw/issues/2264) | 30B 本地模型 33 个工具 token 浪费 |

---

## 7. 用户反馈摘要

### 痛点

| 场景 | 来源 |
|:---|:---|
| **编译稳定性**：v0.1.7 连续出现编译失败，影响信任度 | [#2175](https://github.com/zeroclaw-labs/zeroclaw/issues/2175), [#2206](https://github.com/zeroclaw-labs/zeroclaw/issues/2206) |
| **提供商锁定**：硬编码 Anthropic 模型 ID 排斥异构部署 | [#2270](https://github.com/zeroclaw-labs/zeroclaw/issues/2270) |
| **内存管理**：Web 历史丢失、内存仅存用户消息 | [#2223](https://github.com/zeroclaw-labs/zeroclaw/issues/2223), [#2210](https://github.com/zeroclaw-labs/zeroclaw/issues/2210) |
| **CI 瓶颈**：自托管 runner 队列饱和，p99 等待 656 分钟 | [#2299](https://github.com/zeroclaw-labs/zeroclaw/issues/2299) |

### 满意点

- OpenClaw 迁移路径得到官方重视（[#88](https://github.com/zeroclaw-labs/zeroclaw/issues/88) 高赞）
- 钉钉/飞书等企业通道持续完善
- iMessage 支持快速落地

### 典型用户画像

> "我们在 4vCPU/30GB RAM VPS 上运行 OpenClaw 生产环境，协调多个 AI 子代理（Claude Code 会话）。ZeroClaw 的内存数据引起了我们的注意——目前 OpenClaw 网关损耗约 1.5GB，直接与我们 3 个并发 Claude 会话竞争资源。" — @MbBrainz

---

## 8. 待处理积压

### 高优先级提醒

| Issue | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#2299](https://github.com/zeroclaw-labs/zeroclaw/issues/2299) | 0（新） | **CI 基础设施崩溃风险**：382 个排队运行，最长等待 17+ 小时 | 紧急扩容 runner 或优化并行策略 |
| [#2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263) | 0（新） | 多 crate 拆分 RFI 截止 | 维护者需回应设计提案 |
| [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) | 0（新） | 产品化成本模型设计 | 需产品/架构联合评审 |
| [#1849](https://github.com/zeroclaw-labs/zeroclaw/pull/1849) | 4 | Prometheus 错误传播（与 #2300 重复）| 评估 #2300 替代后关闭 |
| [#2229](https://github.com/zeroclaw-labs/zeroclaw/pull/2229) | 1 | XL 级构建修复 PR，SOP/MQTT 合并线路恢复 | 需要核心维护者 review |
| [#1870](https://github.com/zeroclaw-labs/zeroclaw/pull/1870) | 3 | 提供商描述符中心化重构 | 中等优先级，避免与 #1842 冲突 |

---

**日报生成时间**：2026-03-01  
**数据覆盖**：过去 24 小时 GitHub 活动

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-01

> **项目地址**: https://github.com/gaoyangz77/easyclaw  
> **观测周期**: 2026-02-28 至 2026-03-01（24小时）

---

## 1. 今日速览

EasyClaw 今日呈现**低代码活跃度、高发布节奏**的特征。过去24小时内，Issues 与 PR 均无新增或关闭记录，社区讨论处于静默期；但项目连续发布 **v1.5.12** 与 **v1.5.13** 两个补丁版本，表明维护者正聚焦于**macOS 安装体验的文档完善与分发优化**。整体健康度评估：**稳定维护中**，核心开发活动转向版本迭代而非功能扩展，适合用户升级体验，但需关注社区参与度的持续低迷。

---

## 2. 版本发布

### 🔖 v1.5.13 | 最新
**发布时间**: 2026-03-01  
**Release 链接**: https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.13

| 维度 | 详情 |
|:---|:---|
| **更新类型** | 文档/分发补丁（Documentation & Distribution） |
| **核心变更** | 补充 macOS Gatekeeper 拦截问题的完整解决方案说明 |
| **破坏性变更** | 无 |
| **迁移注意** | 无需迁移；macOS 用户若遇"已损坏"提示，按 Release 中 Terminal 命令解除隔离即可 |

> **关键内容摘录**: Release 包含中英双语的 macOS 安装故障排查指南，针对 `"'EasyClaw' is damaged and can't be opened"` 错误提供 Terminal 修复步骤（命令未完整展示，推测为 `xattr -cr` 或 `spctl` 相关操作）。

---

### 🔖 v1.5.12
**发布时间**: 2026-02-28（推测，基于 v1.5.13 的连续性）  
**Release 链接**: https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.12

| 维度 | 详情 |
|:---|:---|
| **更新类型** | 同 v1.5.13，macOS 安装文档优化 |
| **与 v1.5.13 关系** | 内容高度重合，推测为**快速迭代修复**或**多平台分发包分批上传** |

**版本节奏分析**: 24小时内连发两版且内容相近，可能原因：
- ① v1.5.12 发布后发现问题，v1.5.13 紧急修正
- ② 区分 Intel/Apple Silicon 双架构包的分版本标记
- ③ 自动化发布流程的测试性触发

**建议维护者**: 在 Release Note 中明确版本差异，避免用户选择困惑。

---

## 3. 项目进展

| 指标 | 数据 | 状态 |
|:---|:---|:---|
| 合并 PR | 0 | — |
| 关闭 PR | 0 | — |
| 功能推进 | 无 | 今日无代码层面进展 |

**进展评估**: ⏸️ **停滞期**。项目今日无代码合并，核心功能未向前推进。连续两个版本的发布均为**外围文档优化**，表明当前优先级为**降低新用户上手门槛**而非功能迭代。此策略合理（macOS 签名问题是桌面应用常见痛点），但长期需平衡"体验优化"与"功能演进"。

---

## 4. 社区热点

**今日无活跃讨论**。

| 指标 | 数值 | 说明 |
|:---|:---|:---|
| 活跃 Issues | 0 | 无新开、无评论、无反应 |
| 活跃 PRs | 0 | 无待审、无合并讨论 |
| 社区参与度 | 极低 | 24小时零互动 |

**深层信号**: 零 Issues/PR 可能反映：
- ✅ 项目成熟稳定，用户无阻塞性问题
- ⚠️ 用户基数小或反馈渠道不畅
- ⚠️ 社区建设不足，用户缺乏参与动力

**建议**: 维护者可主动开启 Discussion 板块或发布"用户故事"征集，激活社区。

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 | Fix PR |
|:---|:---|:---|:---|
| 🔴 Critical | 0 | — | — |
| 🟠 High | 0 | — | — |
| 🟡 Medium | 0 | — | — |
| 🟢 Low | 0 | — | — |

**稳定性评估**: ✅ **无新 Bug 报告**。但需注意 **v1.5.12/13 的 Release Note 本身揭示了已知问题**——macOS Gatekeeper 拦截虽非应用 Bug，却是**分发层面的稳定性障碍**。维护者已通过文档缓解，长期建议申请 Apple Developer ID 签名以根治。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| 今日 Issues | 无 | — |
| Release 隐含信号 | 桌面端体验优化（macOS 签名/安装） | 🔶 **高** — 连续两版聚焦此点，预计 v1.6.x 或引入正式签名 |
| 推测方向 | Windows/Linux 安装包优化、自动更新机制 | 🔶 **中** — 参照 macOS 处理模式，可能平行推进 |

**路线图判断**: 项目处于**"打磨期"**，下一里程碑可能为：
1. **v1.6.0**: 全平台签名分发 + 自动更新
2. **v2.0 信号**: 暂无（无架构级 PR 或 RFC）

---

## 7. 用户反馈摘要

**今日无直接用户反馈**（零 Issues/零 PR 评论）。

**间接反馈提取**（基于 Release 内容反推）：

| 痛点 | 来源 | 严重程度 |
|:---|:---|:---|
| macOS 安装流程受阻，用户误以为是文件损坏 | 历史用户报告 → 驱动 v1.5.12/13 发布 | 高（阻碍新用户转化）|
| 缺乏中文文档支持 | Release 双语化回应 | 中 |
| 对命令行修复步骤不熟悉 | Release 步骤截断（`pres` 后缺失）| 中 |

**满意度推测**: 现有用户可能满意核心功能（无 Bug 报告），但**新用户 onboarding 体验存在摩擦**。

---

## 8. 待处理积压

| 类型 | 数量 | 最长期限 | 关注建议 |
|:---|:---|:---|:---|
| 未响应 Issues | 0 | — | — |
| 未响应 PRs | 0 | — | — |
| 历史版本技术债 | 推测存在 | — | 建议维护者检查 < v1.5.12 的未关闭 Issue |

**积压健康度**: ✅ **当前无积压**。但需警惕"零活动"背后的**隐性债务**：
- 建议定期扫描**未关联 Release 的历史 Issue**
- 建议开启 **GitHub Discussions** 分流使用咨询类话题

---

## 📊 今日健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | ⭐⭐☆☆☆ (2/5) | 无 PR 合并 |
| 发布节奏 | ⭐⭐⭐⭐⭐ (5/5) | 双版本连续发布 |
| 社区健康 | ⭐☆☆☆☆ (1/5) | 零互动 |
| 文档完善 | ⭐⭐⭐⭐☆ (4/5) | 积极补充安装指南 |
| 稳定性 | ⭐⭐⭐⭐⭐ (5/5) | 无新 Bug |

**综合**: ⭐⭐⭐☆☆ (3/5) — **维护稳健，社区待兴**

---

*日报基于公开 GitHub 数据生成，如需深度分析请提供 Issues/PR 历史数据或 Discussions 内容。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-01

## 1. 今日速览

LobsterAI 今日社区活跃度极高，24小时内产生 **21 条 Issues 更新**（19 活跃/新开，2 关闭）和 **4 条 PR 更新**（2 待合并，2 已合并/关闭）。项目处于快速迭代期，用户反馈密集涌入，核心痛点集中在**本地模型兼容性（Ollama）、Windows 平台稳定性、多供应商 API 适配**三大领域。维护团队响应积极，今日合并的 PR 已解决飞书 IM 渲染模式和思考内容过滤问题，但积压的功能请求和平台适配问题仍需持续关注。

---

## 2. 版本发布

**无新版本发布**

> 注：最新版本仍为 v0.1.22，用户反馈中多次提及该版本仍存在 Ollama 连接超时、Windows 报错等问题。

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 核心改进 | 影响 |
|:---|:---|:---|:---|
| [#83](https://github.com/netease-youdao/LobsterAI/pull/83) | @liugang519 | **飞书 IM 渲染优化**：默认 renderMode 改为 card，支持 markdown；**IM 返回过滤思考内容** | 直接响应社区高频诉求（Issue #28），提升 IM 集成体验 |
| [#155](https://github.com/netease-youdao/LobsterAI/pull/155) | @liuzhq1986 | App 更新相关（具体变更未详细描述） | 持续迭代应用层功能 |

### 待合并 PR

| PR | 作者 | 状态 | 价值 |
|:---|:---|:---|:---|
| [#127](https://github.com/netease-youdao/LobsterAI/pull/127) | @mammut001 | **修复设置中的默认模型问题** — 合并后自动寻找首个启用的 provider 作为 activeProvider，避免使用旧配置中的 stale baseUrl | 🔴 **高优先级**：解决多供应商配置混乱的根因 |
| [#113](https://github.com/netease-youdao/LobsterAI/pull/113) | @hyooeewee | 开发体验优化：添加 `.vscode` 到 gitignore，符号链接 `CLAUDE.md` 到 `AGENTS.md` | 维护性改进 |

**整体评估**：今日合并的 PR 针对性解决了 IM 集成的用户体验问题，但核心架构问题（默认模型选择、多供应商适配）仍有待 #127 合并后才能根本改善。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 🥇 | [#150](https://github.com/netease-youdao/LobsterAI/issues/150) Ollama 本地部署无法使用 | **4** | **本地模型支持是刚需**：用户希望脱离云端 API 限制，降低 Token 成本，但当前实现存在连接超时、无响应等问题 |
| 🥈 | [#28](https://github.com/netease-youdao/LobsterAI/issues/28) 【已关闭】IM BOT 思考过程显示控制 | **3** | 已通过 PR #83 解决，验证社区反馈响应效率 |
| 🥉 | [#185](https://github.com/netease-youdao/LobsterAI/issues/185) 建议 custom 供应商支持 OpenAI 新格式 | **2** | **API 标准跟进滞后**：gpt-5.3-codex 需要新的 Responses API 格式，用户希望 LobsterAI 快速适配最新模型能力 |

**背后信号**：社区对**成本控制（本地模型）**和**前沿模型适配**的需求强烈，项目需在"稳定兼容现有生态"与"快速跟进最新标准"之间平衡。

---

## 5. Bug 与稳定性

### 🔴 严重（阻断使用）

| Issue | 平台/场景 | 症状 | Fix PR |
|:---|:---|:---|:---:|
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) | Ollama 本地部署 | 完全无法使用，长时间无响应或超时 | ❌ 无 |
| [#144](https://github.com/netease-youdao/LobsterAI/issues/144) [#184](https://github.com/netease-youdao/LobsterAI/issues/184) | Windows 11 | 404 Not Found 错误（Anthropic SDK 相关） | ❌ 无 |
| [#187](https://github.com/netease-youdao/LobsterAI/issues/187) | 非阿里系模型 | 除阿里模型外均无法使用 | ❌ 无 |
| [#188](https://github.com/netease-youdao/LobsterAI/issues/188) | Skill 系统 | 默认全开但全部调用失败，依赖 cygpath 未文档化 | ❌ 无 |
| [#139](https://github.com/netease-youdao/LobsterAI/issues/139) | IMAP 邮箱配置 | Claude Code 进程退出，配置后无法恢复 | ❌ 无 |

### 🟡 中等（影响体验）

| Issue | 问题 | 备注 |
|:---|:---|:---|
| [#141](https://github.com/netease-youdao/LobsterAI/issues/141) | 沙箱读取文件路径拼接错误 | 有截图，定位明确 |
| [#183](https://github.com/netease-youdao/LobsterAI/issues/183) | Windows 命令行中文乱码（GBK/UTF-8 编码问题） | 需转码处理 |
| [#180](https://github.com/netease-youdao/LobsterAI/issues/180) | 【已关闭】Linux 下 read 权限不足 | ✅ 已解决 |
| [#175](https://github.com/netease-youdao/LobsterAI/issues/175) | 私有云部署模型 Max_tokens 参数报错 | DeepSeek/Qwen3 私有化部署场景 |
| [#178](https://github.com/netease-youdao/LobsterAI/issues/178) | NVIDIA LLM API 连接失败 | 自定义配置无效 |

### 🟢 性能与资源

| Issue | 问题 |
|:---|:---|
| [#177](https://github.com/netease-youdao/LobsterAI/issues/177) | 内存占用过高（有截图显示资源消耗） |

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | 支持 OpenAI Responses API 新格式 | 技术债务，需重构 provider 层 | 🔶 高（模型适配是核心能力） |
| [#176](https://github.com/netease-youdao/LobsterAI/issues/176) | 任务记录分组、笔记功能、Skill 内置编辑、TODO 列表 | 产品化方向明确，与有道云笔记生态协同潜力大 | 🔶 中高（差异化竞争力） |
| [#181](https://github.com/netease-youdao/LobsterAI/issues/181) | TG 机器人群组对话@触发控制 | IM 集成精细化需求 | 🔶 中（PR #83 类似思路可复用） |
| [#179](https://github.com/netease-youdao/LobsterAI/issues/179) | IM 启动新会话机制 | 会话管理基础能力 | 🔶 中 |
| [#182](https://github.com/netease-youdao/LobsterAI/issues/182) | 无图形界面/浏览器访问支持 | 服务器部署场景，需评估架构改造成本 | 🔷 中低 |
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | 加强 Ollama 调用能力 | 与 #150 关联，需系统性修复 | 🔶 高（社区呼声最高） |

**关键洞察**：用户将 LobsterAI 与 "原版 OpenClaw" 对比（[#186](https://github.com/netease-youdao/LobsterAI/issues/186)），指出**记忆能力**差距，这可能是长期竞争力隐患。

---

## 7. 用户反馈摘要

### 😊 满意点
- **迭代速度快**："龙虾最近每天一个版本，看得出来在非常快速地解决问题"（[#174](https://github.com/netease-youdao/LobsterAI/issues/174)）
- **IM 集成响应及时**：Issue #28 的解决验证了团队对用户反馈的重视

### 😤 核心痛点

| 痛点 | 典型反馈 | 来源 |
|:---|:---|:---|
| **Ollama 几乎不可用** | "从 0.1.17 版到现在 0.1.22，就没有一次成功的" | [#174](https://github.com/netease-youdao/LobsterAI/issues/174) |
| **Windows 体验差** | 乱码、404 错误、权限问题集中爆发 | #144, #183, #184 |
| **供应商锁定感** | "非阿里模型好像都不能用" | [#187](https://github.com/netease-youdao/LobsterAI/issues/187) |
| **记忆能力不如竞品** | "换了好几个模型都不行，不如原版的 openclaw" | [#186](https://github.com/netease-youdao/LobsterAI/issues/186) |
| **文档/依赖缺失** | "官网教程好像并没有提到 [cygpath]" | [#188](https://github.com/netease-youdao/LobsterAI/issues/188) |

### 使用场景洞察
- **成本敏感型用户**：强烈依赖本地 Ollama 降低 Token 消耗
- **企业/私有化部署**：需要对接私有云模型（DeepSeek/Qwen3），遇到参数兼容问题
- **IM 自动化**：飞书、Discord、Telegram 群组集成是高频场景

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 积压原因 | 建议行动 |
|:---|:---|:---|
| [#127](https://github.com/netease-youdao/LobsterAI/pull/127) | 待合并 — 修复默认模型选择逻辑，影响所有多供应商用户 | **优先合并**，可解决大量"模型无法使用"类问题 |
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) + [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | Ollama 支持问题分散多个 Issue，无统一跟踪 | 创建 meta-issue 统一规划，或指派专项负责人 |
| [#176](https://github.com/netease-youdao/LobsterAI/issues/176) | 产品功能大需求，涉及有道云笔记生态协同 | 评估是否纳入官方路线图，给予用户预期 |
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | 与竞品 OpenClaw 的记忆能力对比 | 技术调研，明确差距根因（模型层？架构层？） |

---

**报告生成时间**：2026-03-01  
**数据来源**：GitHub API / 手工整理  
**项目地址**：https://github.com/netease-youdao/LobsterAI

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-01

> **项目地址**: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **定位**: AI 智能体与个人 AI 助手开源框架

---

## 1. 今日速览

过去24小时 ZeptoClaw 呈现**高活跃度开发状态**：核心维护者 @qhkm 单日密集提交 7 个功能 Issue 与 1 个安全修复 PR，社区贡献者 @superhero75 持续反馈 Telegram 场景需求。8 个活跃 Issue 全部为新开，覆盖多模态、IoT、企业集成等战略方向；PR 侧 #192 MCP stdio 传输层已合并，#194 安全修复待审。整体信号：**项目正从"基础框架"向"生产级平台"跃迁**，企业功能（Azure/Bedrock、配额管理）与硬件生态（MQTT）成为新焦点。

---

## 2. 版本发布

**无新版本发布**  
最新 Release 仍为历史版本，建议关注即将成型的功能集群（vision 支持 + 企业 provider + 配额管理）可能触发的 v0.x 里程碑发布。

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#192](https://github.com/qhkm/zeptoclaw/pull/192) | **已合并** | MCP 协议支持 **stdio 传输层**，实现 transport 抽象架构（Http/Stdio 统一接口） | ⭐⭐⭐⭐☆ **架构升级**：为本地 MCP 服务器（如 Claude Desktop 插件生态）打开接入通道，是"工具即服务"的关键基础设施 |
| [#195](https://github.com/qhkm/zeptoclaw/pull/195) | 待合并 | 安全加固：shell blocklist 新增 6 组 git 危险命令正则（`push --force`, `reset --hard`, `clean -f` 等） | ⭐⭐⭐⭐⭐ **安全红线**：阻断子代理通过 shell 绕过安全 git 工具的路径，生产部署必备 |

**技术债务信号**：#192 合并后需关注 MCP shutdown 生命周期与 transport 错误处理的边界 case。

---

## 4. 社区热点

| 排名 | Issue | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#193](https://github.com/qhkm/zeptoclaw/issues/193) Telegram 端点热切换 | 3 评论，@superhero75 持续跟进 | **真实痛点**：移动场景下 LLM 限流/故障时的逃生需求；用户明确提出对标 OpenClaw 的 `/models` + `/model` 命令设计，交互层需求明确 |
| 2 | [#196](https://github.com/qhkm/zeptoclaw/issues/196) SearXNG 搜索集成 | 0 评论，但契合自托管趋势 | 成本敏感用户的典型诉求：替代付费搜索 API，与 ZeptoClaw 的"去中心化"定位高度契合 |
| 3 | 其余 6 个 @qhkm 自提 Issue | 0 评论，维护者驱动 | 路线图级功能预研，社区参与窗口尚未打开 |

**洞察**：#193 是当前唯一有真实用户对话的功能请求，建议优先响应以维持社区贡献者活跃度。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#194](https://github.com/qhkm/zeptoclaw/issues/194) / [#195](https://github.com/qhkm/zeptoclaw/pull/195) | 子代理可通过 shell 执行破坏性 git 操作（force-push、hard reset），绕过安全 git 工具 | **PR #195 待合并**，预计 24h 内解决 |
| 🟡 Medium | — | 无新增稳定性问题 | — |

**安全评估**：#194 属于"设计层面的权限逃逸"，影响多租户/共享仓库部署场景。建议在 #195 合并后补充集成测试：验证子代理尝试执行 `git push --force` 时被阻断并返回明确错误。

---

## 6. 功能请求与路线图信号

| Issue | 功能域 | 纳入下一版本概率 | 关键依赖 |
|:---|:---|:---|:---|
| [#197](https://github.com/qhkm/zeptoclaw/issues/197) 全渠道视觉输入 | 多模态核心 | ⭐⭐⭐⭐⭐ **极高** | "2026 年 messaging bot 的 table stakes"，维护者明确优先级 |
| [#198](https://github.com/qhkm/zeptoclaw/issues/198) Azure OpenAI / Bedrock 预设 | 企业集成 | ⭐⭐⭐⭐⭐ **极高** | 零代码解锁企业客户，配置层工作无架构风险 |
| [#200](https://github.com/qhkm/zeptoclaw/issues/200) 按 provider 配额管理 | 成本治理 | ⭐⭐⭐⭐☆ **高** | 依赖 #197/#198 的 provider 抽象成熟度 |
| [#199](https://github.com/qhkm/zeptoclaw/issues/199) MQTT IoT 通道 | 硬件生态 | ⭐⭐⭐☆☆ **中** | 需评估与现有 serial/UART 架构的融合方案 |
| [#201](https://github.com/qhkm/zeptoclaw/issues/201) DOCX 提取工具 | 文档处理 | ⭐⭐⭐⭐☆ **高** | 与 `pdf_read` 工具模式一致，实现成本低 |
| [#196](https://github.com/qhkm/zeptoclaw/issues/196) SearXNG 搜索 | 工具生态 | ⭐⭐⭐☆☆ **中** | 需设计通用搜索工具抽象（SearXNG / SerpAPI / Bing 统一接口） |
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) Telegram 端点切换 | 交互优化 | ⭐⭐⭐⭐☆ **高** | 社区贡献者已提供需求细节，适合标记 `good first issue` |

**路线图推测**：下一版本（v0.x）大概率打包 **#197 + #198 + #201**，形成"视觉+企业+文档"的生产级功能三角。

---

## 7. 用户反馈摘要

> 提炼自 #193 评论对话与 Issue 描述

| 维度 | 具体内容 |
|:---|:---|
| **痛点** | "Most llm endpoints have rate limit, it is difficult to switch to another model/endpoint **on the road**" —— 移动/外出场景下的服务连续性焦虑 |
| **使用场景** | Telegram 作为主力交互界面，需要类似 OpenClaw 的命令式模型管理（`/models` 列表、`/model <name>` 切换） |
| **满意点** | ZeptoClaw 的多渠道架构（Telegram/Discord/WhatsApp/Slack/Lark/email）被默认认可，用户选择在 Telegram 场景深耕 |
| **不满意/期待** | 端点切换功能"scope estimate: No idea"——用户不确定实现复杂度，需要维护者给出可行性反馈 |

**行动建议**：@qhkm 可在 #193 回复技术可行性评估（是否复用现有 provider 配置热重载机制），并邀请 @superhero75 参与命令交互设计。

---

## 8. 待处理积压

> 本日数据均为新开 Issue/PR，无长期积压。但需关注以下**隐性债务**：

| 风险项 | 说明 | 建议动作 |
|:---|:---|:---|
| #193 社区贡献者响应窗口 | @superhero75 已连续贡献 2 个功能请求，若 48h 内无维护者反馈，可能流失 | 优先回复可行性评估 |
| MCP #192 文档缺失 | 合并内容涉及 transport 抽象架构，但 PR 描述未更新用户文档 | 补充 `docs/mcp.md` 或代码内 rustdoc |
| 单日 7 个自提 Issue 的消化节奏 | @qhkm 一次性抛出多模态、IoT、企业、成本治理四大主题，需防止社区信息过载 | 创建 GitHub Project 看板，标注优先级标签（P0/P1/P2） |

---

**日报生成时间**: 2026-03-01  
**数据截止**: 2026-02-28 24:00 UTC  
**维护者**: @qhkm | 活跃贡献者: @superhero75

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-03-01

## 1. 今日速览

NanoBot 今日保持**极高活跃度**，24小时内产生 **25 条 Issues 更新**（21 活跃/新开，4 关闭）与 **79 条 PR 更新**（54 待合并，25 已合并/关闭），并发布 **v0.1.4.post3** 补丁版本。社区贡献者规模持续扩大，新增 16 位贡献者。核心工作聚焦于**多通道稳定性修复**（QQ、钉钉、飞书、Matrix、Telegram）、**推理模型兼容性**（DeepSeek、Moonshot Kimi）以及**内存架构升级**（Qdrant 向量化存储）。项目处于快速迭代期，PR 积压量较高（54 待合并），需关注合并效率。

---

## 2. 版本发布

### [v0.1.4.post3](https://github.com/HKUDS/nanobot/releases/tag/v0.1.4.post3)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-02-28 |
| **PR 合并数** | 33 |
| **新增贡献者** | 16 |
| **核心主题** | 上下文降噪、会话历史加固、幽灵消息消除 |

**关键改进：**
- **"Less noise in → less hallucination out"** —— 通过清理上下文、强化会话历史管理、减少幽灵消息，降低模型幻觉
- 上下文窗口优化：更智能的上下文裁剪策略
- 会话隔离增强：防止历史消息污染当前对话

**迁移注意事项：** 建议所有用户升级，尤其是长期运行多会话实例的用户，可显著改善响应质量。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#1346](https://github.com/HKUDS/nanobot/pull/1346) | @zerone0x | **修复 QQ 通道只读文件系统错误** — 禁用 botpy 文件日志，解决 systemd `ProtectSystem=strict` 下的启动失败 | ✅ 已合并 |
| [#1348](https://github.com/HKUDS/nanobot/pull/1348) | @yorkhellen | **修复飞书通道启动崩溃** — 移除对 `lark.ws.Client.stop()` 的不存在方法调用 | ✅ 已合并 |
| [#1330](https://github.com/HKUDS/nanobot/pull/1330) | @fengxiaohu | **修复推理模型兼容性** — 允许消息历史中存在 `reasoning_content` 字段，解决 Moonshot Kimi 工具调用失败 | ✅ 已合并 |
| [#1337](https://github.com/HKUDS/nanobot/pull/1337) | @asdf17128 | **钉钉通道增强** — 支持发送图片消息（原仅支持文件附件） | ✅ 已合并 |
| [#1351](https://github.com/HKUDS/nanobot/pull/1351) | @Re-bin | **新增推理强度配置** — `reasoning_effort` 参数（low/medium/high），支持 OpenAI o1 等模型的思考模式 | ✅ 已合并 |
| [#1347](https://github.com/HKUDS/nanobot/pull/1347) | @Re-bin | **代码重构** — 简化子代理提示词构建，复用 ContextBuilder 减少 42% 代码行数 | ✅ 已合并 |

**整体进展评估：** 今日合并的 PR 集中解决**企业 IM 通道的生产环境稳定性问题**（QQ、飞书、钉钉），并补齐**推理模型生态支持**（DeepSeek、Kimi、o1）。项目在企业级部署可靠性方面迈出关键一步。

---

## 4. 社区热点

### 高讨论度 Issues

| Issue | 评论数 | 核心诉求 | 分析 |
|:---|:---|:---|:---|
| [#215 飞书无法建立长连接](https://github.com/HKUDS/nanobot/issues/215) | **21** | 飞书事件订阅配置后仍无法启用长连接模式 | **企业用户部署阻塞问题** — 配置文档与实际行为存在 gap，用户难以自助排查 |
| [#222 Multi agents setup - Supported?](https://github.com/HKUDS/nanobot/issues/222) | **6** | 多代理配置支持状态与文档缺失 | **架构能力认知缺口** — 用户从配置推测支持多代理，但缺乏官方指南，易配置错误 |
| [#1302 per-session working directory isolation](https://github.com/HKUDS/nanobot/issues/1302) | **4** | 多会话共享工作目录导致文件冲突 | **多租户场景刚需** — 有对应 PR [#1345](https://github.com/HKUDS/nanobot/pull/1345) 正在解决 |

**热点趋势：** 企业用户规模化部署需求凸显（飞书、多代理隔离、工作目录隔离），项目需加强企业级文档与配置验证工具。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 优先级 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-已修复** | [#1343](https://github.com/HKUDS/nanobot/issues/1343) | QQ 通道 systemd 服务启动失败：`Read-only file system: '/botpy.log'` | [#1346](https://github.com/HKUDS/nanobot/pull/1346) | ✅ 已合并 |
| 🔴 **P0-已修复** | [#1348](https://github.com/HKUDS/nanobot/pull/1348) | 飞书通道启动崩溃：调用不存在方法 `lark.ws.Client.stop()` | [#1348](https://github.com/HKUDS/nanobot/pull/1348) | ✅ 已合并 |
| 🟡 **P1-活跃** | [#1313](https://github.com/HKUDS/nanobot/issues/1313) | Moonshot Kimi 推理模型工具调用失败：缺失 `reasoning_content` | [#1330](https://github.com/HKUDS/nanobot/pull/1330) | ✅ 已合并 |
| 🟡 **P1-活跃** | [#1225](https://github.com/HKUDS/nanobot/issues/1225) | DeepSeek-R1 推理模型请求格式错误：缺失 `reasoning_content` | 待验证 #1330 是否覆盖 | 🔍 需确认 |
| 🟡 **P1-活跃** | [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Matrix 通道完全无法启动 | 无 | ❌ 待修复 |
| 🟡 **P1-活跃** | [#1315](https://github.com/HKUDS/nanobot/issues/1315) | Discord 斜杠命令与原生命令冲突，记忆清除失效 | 无 | ❌ 待修复 |
| 🟢 **P2-活跃** | [#1318](https://github.com/HKUDS/nanobot/issues/1318) | 安装 Skill 后机器人重复回复消息 | 无 | ❌ 待修复 |
| 🟢 **P2-活跃** | [#1332](https://github.com/HKUDS/nanobot/issues/1332) | Token 消耗异常：单条 "hello" 消耗 5000+ tokens | 无 | ❌ 待分析 |

**稳定性评估：** 今日修复 3 个 P0 级生产环境问题，但 Matrix、Discord 通道仍存在阻塞性 Bug。推理模型兼容性问题有集中爆发趋势（DeepSeek、Kimi、Codex）。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 下一版本可能性 |
|:---|:---|:---|:---|
| **Claude Code 订阅支持** | [#281](https://github.com/HKUDS/nanobot/issues/281) + [#1333](https://github.com/HKUDS/nanobot/pull/1333) | 🟢 PR 已提交 | **高** — 用户呼声强烈，PR 就绪 |
| **多搜索引擎支持（百度）** | [#1354](https://github.com/HKUDS/nanobot/pull/1354) | 🟢 PR 已提交 | **高** — 国内用户刚需，代码完整 |
| **Web 聊天界面（SSE 流式）** | [#1341](https://github.com/HKUDS/nanobot/pull/1341) | 🟢 PR 已提交 | **中高** — 降低新用户门槛 |
| **Qdrant 多嵌入模型支持** | [#1357](https://github.com/HKUDS/nanobot/pull/1357) | 🟢 PR 已提交 | **中高** — 内存架构核心升级 |
| **会话级工作目录隔离** | [#1302](https://github.com/HKUDS/nanobot/issues/1302) + [#1345](https://github.com/HKUDS/nanobot/pull/1345) | 🟡 PR 待评审 | **中** — 架构改动需审慎 |
| **Window Protocol/iOS 原生应用** | [#339](https://github.com/HKUDS/nanobot/pull/339) | 🟡 长期 PR | **中低** — 创新但维护负担大 |
| **Telegram 消息反应支持** | [#1334](https://github.com/HKUDS/nanobot/issues/1334) + [#1338](https://github.com/HKUDS/nanobot/issues/1338) | 🔴 重复 Issue | **低** — 需先合并重复请求 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **企业部署** | [#215](https://github.com/HKUDS/nanobot/issues/215) 飞书用户 | "配置都对了但长连不上，没有排查文档" |
| **成本控制** | [#1332](https://github.com/HKUDS/nanobot/issues/1332) | "hello 消耗 5000 tokens，问个安装问题 3 万 tokens" |
| **模型兼容性** | [#1313](https://github.com/HKUDS/nanobot/issues/1313), [#1225](https://github.com/HKUDS/nanobot/issues/1225) | "推理模型一用就崩，错误信息看不懂" |
| **多用户隔离** | [#1302](https://github.com/HKUDS/nanobot/issues/1302) | "不同用户文件混在一起，互相污染" |
| **Skill 生态** | [#1328](https://github.com/HKUDS/nanobot/issues/1328) | "agent 创建的 skill gateway 用户用不上" |
| **输出格式** | [#110](https://github.com/HKUDS/nanobot/issues/110) | "反复强调不要 markdown，照样输出" |

### 正向反馈
- [#1358](https://github.com/HKUDS/nanobot/issues/1358) 用户："2019 MBP + Docker + OpenRouter 本地跑通 Whisper 转录，不快但极准"

---

## 8. 待处理积压

### 需维护者关注的高价值事项

| 类型 | 条目 | 等待时间 | 风险/机会 |
|:---|:---|:---|:---|
| **PR 积压** | [#339](https://github.com/HKUDS/nanobot/pull/339) Window Protocol | ~20 天 | iOS 原生体验差异化功能，但 review 停滞 |
| **PR 积压** | [#1299](https://github.com/HKUDS/nanobot/pull/1299) Cursor CLI 配置支持 | ~1 天 | 低代码风险，快速合并可提升开发者体验 |
| **重复 Issue** | [#1334](https://github.com/HKUDS/nanobot/issues/1334) vs [#1338](https://github.com/HKUDS/nanobot/issues/1338) Telegram Reaction | 同日 | 需标记重复并统一跟踪 |
| **安全审计** | [#1232](https://github.com/HKUDS/nanobot/issues/1232) SkillSec 安全评估提议 | ~2 天 | 25k+ stars 项目应重视安全审计，建议官方回应 |
| **架构债务** | [#1310](https://github.com/HKUDS/nanobot/issues/1310) Heartbeat 两阶段机制信息丢失 | 当日 | 任务追踪核心机制，需架构层面评估 |

---

**日报生成时间：** 2026-03-01  
**数据来源：** GitHub API (HKUDS/nanobot)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-01

## 1. 今日速览

PicoClaw 今日呈现**极高活跃度**，24小时内产生 **85 条 Issues 更新**（89% 为新建/活跃）和 **94 条 PR 更新**（81% 待合并），社区贡献者持续涌入。项目刚发布 **v0.2.0** 版本，但变更日志显示主要为文档和二维码更新，功能迭代仍集中在主分支。Provider 生态（OpenRouter、Groq、MiniMax、LiteLLM 等）成为今日技术焦点，同时网关稳定性、会话持久化和错误处理类 PR 密集涌现，显示项目正从功能扩展期进入**可靠性加固期**。

---

## 2. 版本发布

### [v0.2.0](https://github.com/sipeed/picoclaw/releases/tag/v0.2.0) 已发布

| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-02-28 |
| **核心变更** | 文档维护：更新微信二维码、删除未使用 MP4 文件、新增 CONTRIBUTING.md |
| **破坏性变更** | 无 |
| **迁移注意** | 无需迁移，纯维护性发布 |

> ⚠️ **观察**：版本号跃升但功能变更极少，建议维护者考虑采用更精细的版本策略（如 0.1.3），避免用户对新版本产生功能期待落差。

---

## 3. 项目进展

### 今日关键 PR 推进（已合并/关闭 18 条）

| PR | 作者 | 进展 | 技术价值 |
|:---|:---|:---|:---|
| [#920](https://github.com/sipeed/picoclaw/pull/920) | @CZH-THU | **关键 Bug 修复** | `gateway status` 不再错误启动完整网关运行时，解决多实例竞争问题 |
| [#919](https://github.com/sipeed/picoclaw/pull/919) | @CZH-THU | 可靠性提升 | GitHub Copilot provider 错误处理完善，消除被忽略的 `SendAndWait` 错误 |
| [#918](https://github.com/sipeed/picoclaw/pull/918) | @alexhoshina | 并发安全 | 修复 WeCom 通道 context 泄漏和数据竞争 |
| [#917](https://github.com/sipeed/picoclaw/pull/917) | @ItsT0ng | 资源管理 | Slack 通道转录后及时取消 context，防止资源泄漏 |
| [#913](https://github.com/sipeed/picoclaw/pull/913) | @westwind027 | 工具增强 | Shell 工具本地改进提交 |
| [#911](https://github.com/sipeed/picoclaw/pull/911) | @ItsT0ng | 性能优化 | HTTP 状态正则预编译，避免每次错误分类重复编译 |
| [#883](https://github.com/sipeed/picoclaw/pull/883) | @afjcjsbx | 稳定性加固 | WebFetch 工具增加严格内存限制（防 OOM/带宽耗尽） |
| [#864](https://github.com/sipeed/picoclaw/pull/864) | @afjcjsbx | 可靠性提升 | State manager 文件操作错误处理完善 |

**整体评估**：今日合并 PR 聚焦**稳定性、资源管理和并发安全**，标志项目从"功能可用"向"生产可靠"演进。网关多实例竞争、内存泄漏、数据竞争等底层问题得到系统性修复。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#694](https://github.com/sipeed/picoclaw/issues/694) OpenRouter API 配置 | 14 | 多模型路由配置文档缺失 | **Provider 配置 UX 是最大痛点**，用户需要更清晰的配置范例 |
| 2 | [#4](https://github.com/sipeed/picoclaw/issues/4) 网关本地网络不可见 | 11 | AMD Ryzen + Ubuntu 网关启动后无法发现 | 已关闭，但反映**网关网络发现机制**仍需优化 |
| 3 | [#901](https://github.com/sipeed/picoclaw/issues/901) OpenRouter/free 模型添加失败 | 10 | 免费模型识别和配置问题 | **OpenRouter 集成成熟度不足**，免费/付费模型区分逻辑需完善 |
| 4 | [#680](https://github.com/sipeed/picoclaw/issues/680) 默认 api_base 指向 GLM | 10 | DeepSeek 配置被错误路由到 GLM | **Provider 路由逻辑存在硬编码陷阱** |
| 5 | [#79](https://github.com/sipeed/picoclaw/issues/79) Gemini 3 Flash 函数调用失败 | 9 | thought_signature 缺失导致工具调用失败 | **Google 最新模型适配滞后** |
| 6 | [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio 易连接 | 8 | 本地 LLM 一键连接需求 | **本地模型用户群体庞大**，LM Studio/Ollama 集成是差异化机会 |
| 7 | [#148](https://github.com/sipeed/picoclaw/issues/148) OpenClaw SKILL 兼容 | 8 | 生态兼容性诉求 | 用户希望**技能生态互通**，避免重复开发 |

### 高价值 PR 讨论

| PR | 技术方向 | 意义 |
|:---|:---|:---|
| [#930](https://github.com/sipeed/picoclaw/pull/930) LiteLLM provider 别名支持 | 统一代理层 | 解决多 Provider 碎片化问题，一个 PR 覆盖数十个模型后端 |
| [#633](https://github.com/sipeed/picoclaw/pull/633) MiniMax provider | 国产模型支持 | 响应 [#675](https://github.com/sipeed/picoclaw/issues/675) 功能请求，填补 MiniMax-M2.5 支持空白 |
| [#926](https://github.com/sipeed/picoclaw/pull/926) Anthropic OAuth 登录 | 企业级认证 | 支持 setup-token 和用量监控，面向团队部署场景 |
| [#925](https://github.com/sipeed/picoclaw/pull/925) OpenAI/Gemini 协议路由到 SDK | 架构优化 | 官方 SDK 替代 HTTP 兼容层，获取完整功能支持 |

---

## 5. Bug 与稳定性

### 今日报告 Bug（按严重程度）

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **P0 - 数据损坏** | [#704](https://github.com/sipeed/picoclaw/issues/704) | 会话历史竞态条件导致 tool_call_ids 与响应消息不匹配，HTTP 400 | 待修复，[#711](https://github.com/sipeed/picoclaw/issues/711) 提出 JSONL 持久化方案 |
| 🔴 **P0 - 功能完全失效** | [#901](https://github.com/sipeed/picoclaw/issues/901) | OpenRouter/free 模型完全无法添加 | 待调查 |
| 🟡 **P1 - 核心功能异常** | [#680](https://github.com/sipeed/picoclaw/issues/680) | 默认 api_base 硬编码为 GLM，DeepSeek 等配置被覆盖 | 待修复 |
| 🟡 **P1 - 核心功能异常** | [#748](https://github.com/sipeed/picoclaw/issues/748) | Groq API 工具调用格式错误（`<function=name>` 非标准格式） | 待修复 |
| 🟡 **P1 - 提供商适配** | [#79](https://github.com/sipeed/picoclaw/issues/79) | Gemini 3 Flash Preview 函数调用因 thought_signature 缺失失败 | 待修复 |
| 🟡 **P1 - 用户体验** | [#778](https://github.com/sipeed/picoclaw/issues/778) | 会话摘要丢失上下文，压缩后对话质量下降 | 待修复 |
| 🟢 **P2 - 配置体验** | [#109](https://github.com/sipeed/picoclaw/issues/109) | 本地 Ollama 配置仍提示 "no API key" | 待修复 |
| 🟢 **P2 - 已修复** | [#671](https://github.com/sipeed/picoclaw/issues/671) | `gateway status` 启动额外工作进程 | ✅ [#920](https://github.com/sipeed/picoclaw/pull/920) 已修复 |
| 🟢 **P2 - 已修复** | [#683](https://github.com/sipeed/picoclaw/issues/683) | 网络超时误分类为上下文窗口错误 | 已关闭 |

### 稳定性修复 PR（今日待合并）

- [#920](https://github.com/sipeed/picoclaw/pull/920) 网关状态命令修复
- [#919](https://github.com/sipeed/picoclaw/pull/919) Copilot 错误处理
- [#918](https://github.com/sipeed/picoclaw/pull/918) / [#917](https://github.com/sipeed/picoclaw/pull/917) 通道资源泄漏修复
- [#883](https://github.com/sipeed/picoclaw/pull/883) WebFetch 内存限制
- [#864](https://github.com/sipeed/picoclaw/pull/864) State 文件操作错误处理

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或强烈信号）

| 功能 | 来源 | 证据 | 预计版本 |
|:---|:---|:---|:---:|
| **LiteLLM 统一代理** | PR [#930](https://github.com/sipeed/picoclaw/pull/930) | 今日新提，解决 Provider 碎片化核心痛点 | v0.3.0 |
| **MiniMax 支持** | PR [#633](https://github.com/sipeed/picoclaw/pull/633) + Issue [#675](https://github.com/sipeed/picoclaw/issues/675) | 国产模型需求明确，PR 已就绪 | v0.2.1 |
| **Anthropic OAuth** | PR [#926](https://github.com/sipeed/picoclaw/pull/926) | 企业团队部署刚需 | v0.2.1 |
| **会话 JSONL 持久化** | Issue [#711](https://github.com/sipeed/picoclaw/issues/711) | 解决 #704 数据损坏问题，架构级改进 | v0.3.0 |
| **Agent 沙盒 (Docker)** | PR [#536](https://github.com/sipeed/picoclaw/pull/536) | 安全执行环境，WIP 状态 | v0.3.0 |

### 用户需求强烈但暂无 PR

| 功能 | 来源 | 用户声音 | 建议优先级 |
|:---|:---|:---|:---:|
| **LM Studio 一键连接** | [#28](https://github.com/sipeed/picoclaw/issues/28) (8评论, 👍1) | "just outside my reach" - 技术门槛阻碍本地用户 | P1 |
| **OpenClaw SKILL 兼容** | [#148](https://github.com/sipeed/picoclaw/issues/148) (8评论, 👍2) | 生态互通避免重复开发 | P2 |
| **Azure OpenAI** | [#260](https://github.com/sipeed/picoclaw/issues/260) | 企业合规需求 | P2 |
| **`picoclaw doctor` 诊断工具** | [#39](https://github.com/sipeed/picoclaw/issues/39) | 配置验证、健康检查、修复工作流 | P2 |
| **远程 Agent 通信** | [#669](https://github.com/sipeed/picoclaw/issues/669) | 集群化 Agent 架构 | P3 |

---

## 7. 用户反馈摘要

### 真实痛点

> *"My current config structure... How to set config for openrouter api?"* — @0xSaurabhx [#694](https://github.com/sipeed/picoclaw/issues/694)

**配置发现性危机**：即使提供 JSON 结构，用户仍无法正确配置 OpenRouter，文档和验证机制双重缺失。

> *"Task hang without retry, logs output 'error' then stop"* — @manhnt9 [#629](https://github.com/sipeed/picoclaw/issues/629)

**长任务可靠性**：LLM 调用失败无重试机制，长任务中途崩溃无法恢复。

> *"Summary contains no relevant context"* — @hum-ma [#778](https://github.com/sipeed/picoclaw/issues/778)

**会话压缩质量**：摘要机制丢失关键上下文，压缩后对话"失忆"。

### 使用场景洞察

| 场景 | 代表 Issue | 占比估算 |
|:---|:---|:---:|
| 本地/私有化部署 | #28 LM Studio, #75 Ollama, #109 本地配置 | ~25% |
| 多模型路由 | #694 OpenRouter, #901 free模型, #680 配置冲突 | ~30% |
| 企业/团队部署 | #926 OAuth, #260 Azure, #669 远程通信 | ~20% |
| 通道集成 | #639 Discord, #99 WhatsApp, #667 Telegram | ~15% |
| 边缘/嵌入式 | #171 更小二进制, 硬件资源受限 | ~10% |

### 满意度信号

- ✅ 积极：CLI agent 单次任务执行稳定（[#36](https://github.com/sipeed/picoclaw/issues/36) 提及）
- ❌ 负面：网关模式可靠性低于预期（[#36](https://github.com/sipeed/picoclaw/issues/36) Telegram 挂起，[#671](https://github.com/sipeed/picoclaw/issues/671) 多实例竞争）

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>7天，高互动）

| Issue | 天数 | 评论 | 风险 | 建议行动 |
|:---|:---:|:---:|:---|:---|
| [#75](https://github.com/sipeed/picoclaw/issues/75) Ollama 支持 | 16 | 6, 👍6 | 本地模型用户流失 | 官方回应与 #28 合并规划 |
| [#79](https://github.com/sipeed/picoclaw/issues/79) Gemini 3 Flash | 16 | 9 | Google 最新模型适配滞后 | 优先修复或文档说明限制 |
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio | 17 | 8 | 本地用户群体被忽视 | 与 #75 统一本地模型战略 |
| [#39](https://github.com/sipeed/picoclaw/issues/39) doctor 命令 | 18 | 3 | 支持成本居高不下 | 社区贡献者招募 |
| [#171](https://github.com/sipeed/picoclaw/issues/171) 更小二进制 | 15 | 3 | 嵌入式场景拓展受阻 | 评估构建标签 PR 可行性 |

### 高价值 PR 待审

| PR | 等待天数 | 价值 | 阻塞风险 |
|:---|:---:|:---|:---|
| [#633](https://github.com/sipeed/picoclaw/pull/633) MiniMax | 7 | 国产模型生态 | 作者可能失去动力 |
| [#536](https://github.com/sipeed/picoclaw/pull/536) Docker 沙盒 | 9 | 安全执行基础 | 需架构评审，长期 WIP |
| [#300](https://github.com/sipeed/picoclaw/pull/300) Telegram 命令 | 12 | 用户体验 | 简单功能，快速合并窗口 |

---

## 附录：数据速查

| 指标 | 数值 | 环比评估 |
|:---|:---:|:---|
| Issues 更新 | 85 | 🔥 极高 |
| PR 更新 | 94 | 🔥 极高 |
| 版本发布 | 1 (v0.2.0) | 维护性发布 |
| 待合并 PR | 76 | 需关注评审带宽 |
| 社区最活跃主题 | Provider 配置/路由 | 生态整合期典型特征 |

---

*日报生成时间：2026-03-01*  
*数据来源：GitHub API / sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-01

## 1. 今日速览

NanoClaw 今日展现出**极高活跃度**，24小时内处理 **37 个 PR**（9 个已合并/关闭，28 个待审）和 **12 个 Issues**（8 个已关闭，4 个待处理）。核心维护者 @klangberater 单日高效关闭 8 个代码质量与安全相关 Issue，显示团队对技术债务的主动清理。社区贡献者聚焦三大方向：**稳定性修复**（OOM 崩溃、内存泄漏）、**多通道扩展**（Gmail、Slack、飞书）、**架构现代化**（可插拔通道架构、第三方模型支持）。项目整体健康度良好，但 PR 积压率（75%）提示审阅带宽可能成为瓶颈。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#593](https://github.com/qwibitai/nanoclaw/pull/593) | @tglowaski | **原子化部署流水线 + Dev Container** | 生产可靠性大幅提升，部署失败零影响；开发环境标准化 |
| [#594](https://github.com/qwibitai/nanoclaw/pull/594) | @tglowaski | **实时交易追踪 + 运行隔离** | 金融场景能力增强，纸面交易与实盘分离，Dashboard 可过滤 |
| [#470](https://github.com/qwibitai/nanoclaw/pull/470) | @youyouhe | **优雅关闭 Docker 容器** | 解决 systemd 90s 超时强制杀容器问题，数据完整性保障 |
| [#600](https://github.com/qwibitai/nanoclaw/pull/600) | @miiimchelle | **求职工作流个性化 + AI-Slop 审阅器** | 垂直场景扩展，但已关闭（可能合并至其他分支） |
| [#589](https://github.com/qwibitai/nanoclaw/pull/589) | @pkhlebko | **Telegram 模型 v1** | 通道扩展，但已关闭（可能方案调整） |

### 代码质量攻坚（8 个 Issue 批量修复）

@klangberater 今日系统性修复深层隐患：
- **内存安全**：容器输出缓冲区未释放 [#582](https://github.com/qwibitai/nanoclaw/issues/582)
- **并发安全**：GroupQueue 竞态条件 [#578](https://github.com/qwibitai/nanoclaw/issues/578)、重试逻辑不一致 [#583](https://github.com/qwibitai/nanoclaw/issues/583)
- **输入验证**：路径遍历边缘案例 [#584](https://github.com/qwibitai/nanoclaw/issues/584)、MAX_CONCURRENT_CONTAINERS 无上限 [#581](https://github.com/qwibitai/nanoclaw/issues/581)
- **错误处理**：静默吞错 [#580](https://github.com/qwibitai/nanoclaw/issues/580)、JSON.parse 无防护 [#579](https://github.com/qwibitai/nanoclaw/issues/579)
- **构建修复**：Rollup 依赖问题 [#585](https://github.com/qwibitai/nanoclaw/issues/585)

---

## 4. 社区热点

### 高关注度议题

| 议题 | 类型 | 热度信号 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) / [#596](https://github.com/qwibitai/nanoclaw/pull/596) | Bug + Fix PR | 生产崩溃，已有关键修复 PR | **长期运行稳定性**：~40 小时 OOM 崩溃是 WhatsApp 重连时旧 socket 未销毁导致内存泄漏。社区用户 @scruffalo 主动提供详尽日志和修复方案，体现生产环境用户的深度参与 |
| [#500](https://github.com/qwibitai/nanoclaw/pull/500) | 架构重构 | 多通道扩展的底层基础设施 | **解耦硬编码架构**：从 WhatsApp 强耦合转向"可插拔多通道架构"，是项目从单一 IM 工具向通用 AI 助手平台进化的关键一步 |
| [#598](https://github.com/qwibitai/nanoclaw/pull/598) | 功能扩展 | 企业集成场景 | **多通道刚需**：Gmail + Slack 支持反映企业用户将 NanoClaw 作为中央 AI 工作台的诉求 |
| [#592](https://github.com/qwibitai/nanoclaw/pull/592) | 模型支持 | 第三方 LLM 生态 | **供应商多元化**：ANTHROPIC_BASE_URL 和自定义 Token 支持，满足企业私有化部署和成本优化需求 |

### 诉求洞察
- **企业级需求上升**：Slack、Gmail、Google Workspace MCP 等 PR 集中出现，信号明确
- **稳定性优先于功能**：OOM 崩溃 Issue 与修复 PR 同日出现，社区响应迅速
- **地域扩展**：飞书/Lark 支持 [#590](https://github.com/qwibitai/nanoclaw/pull/590) 反映中国/东南亚市场需求

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | OOM 崩溃：WhatsApp 重连时 ghost sockets 累积 | 已有关键修复 | [#596](https://github.com/qwibitai/nanoclaw/pull/596) | 长期运行实例（>40h），生产环境 |
| 🟡 **High** | 调度器任务重复执行（执行超 poll 间隔） | 待审 | [#601](https://github.com/qwibitai/nanoclaw/pull/601) | 定时任务场景 |
| 🟡 **High** | Linux 孤儿容器未清理 | 待审 | [#588](https://github.com/qwibitai/nanoclaw/pull/588) | Linux 生产部署 |
| 🟢 **Medium** | 移动端网站布局错误 | 待处理 | 无 | 文档/品牌体验 |
| 🟢 **Medium** | 容器缺少 `jq` 工具 | 待处理 | 无 | API 响应解析，安全替代方案 |

**注**：8 个由 @klangberater 关闭的 Issue 均为代码审查发现的潜在缺陷，尚未有用户报告实际触发，体现**主动防御式维护**。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 PR/Issue | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **多通道架构重构** | [#500](https://github.com/qwibitai/nanoclaw/pull/500) | 核心架构 PR，改动面大 | ⭐⭐⭐⭐⭐ 高优先级，基础设施级 |
| **第三方模型支持** | [#592](https://github.com/qwibitai/nanoclaw/pull/592) | 配置层扩展，侵入性低 | ⭐⭐⭐⭐⭐ 高概率，社区需求明确 |
| **Google Workspace 集成** | [#597](https://github.com/qwibitai/nanoclaw/pull/597) | MCP Skill 形式，标准化 | ⭐⭐⭐⭐☆ 高概率，企业场景 |
| **飞书/Lark 通道** | [#590](https://github.com/qwibitai/nanoclaw/pull/590) | 新 Skill，模式成熟 | ⭐⭐⭐⭐☆ 高概率，地域扩展 |
| **Gmail + Slack 通道** | [#598](https://github.com/qwibitai/nanoclaw/pull/598) | 个人定制 PR，需泛化 | ⭐⭐⭐☆☆ 中等，可能合并至 #500 |
| **求职/简历工作流** | [#600](https://github.com/qwibitai/nanoclaw/pull/600)（已关闭）| 垂直场景，过于特定 | ⭐⭐☆☆☆ 低概率，或转为示例 Skill |
| **团队 Dashboard** | [#344](https://github.com/qwibitai/nanoclaw/pull/344) | 长期开放，需维护者反馈 | ⭐⭐⭐☆☆ 中等，UI 方向待明确 |

---

## 7. 用户反馈摘要

### 真实痛点
> *"NanoClaw crashes with a JavaScript heap OOM error after running for ~40 hours... `launchd` restarts the process silently, so the bot stops responding briefly then recovers — easy to miss without checking `logs/nanoclaw.error.log`"* — @scruffalo [#595](https://github.com/qwibitai/nanoclaw/issues/595)

**洞察**：静默故障比崩溃更危险，需要更好的可观测性（health check endpoint？）

> *"it would be wise to include jq for parsing responses... Right now, the swam tends to use `node -e` for parsing, but that can cause eval attacks"* — @ErikDeBruijn [#574](https://github.com/qwibitai/nanoclaw/issues/574)

**洞察**：安全意识的社区成员关注容器工具链的 attack surface

### 使用场景
- **长期运行服务**：OOM 问题显示用户将 NanoClaw 作为 7×24 基础设施部署
- **多 IM 工作台**：Gmail/Slack/飞书并行请求，非替代而是叠加
- **金融/交易场景**：实时交易追踪 PR 显示专业用户群体

### 满意度信号
- 主动贡献修复：@scruffalo 报告问题同时提交完整修复 PR
- 详尽的问题报告：包含日志、复现步骤、系统环境

---

## 8. 待处理积压

| PR/Issue | 开放时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#344](https://github.com/qwibitai/nanoclaw/pull/344) Add agent team dashboard | 8 天 | 功能完整但无维护者反馈，贡献者可能流失 | 明确 Dashboard 产品方向，或提供设计反馈 |
| [#506](https://github.com/qwibitai/nanoclaw/pull/506) Save tokens in debug skill | 3 天 | 简单优化，积压不必要 | 快速审阅合并或关闭 |
| [#466](https://github.com/qwibitai/nanoclaw/pull/466) Exponential backoff for WhatsApp reconnect | 5 天 | 与 #596 相关但独立，可能冲突 | 协调 @ianzein2 与 @scruffalo 的方案 |
| [#491](https://github.com/qwibitai/nanoclaw/pull/491) Filter protocol messages | 4 天 | 性能优化，低侵入 | 优先审阅，减少无效处理 |
| [#385](https://github.com/qwibitai/nanoclaw/pull/385) @mention support for WhatsApp | 7 天 | 社交功能，用户体验 | 评估与核心架构的兼容性 |

**维护者注意**：28 个待审 PR 中，**架构级 PR #500** 和 **稳定性修复 #596** 建议优先处理，以释放依赖它们的下游 PR。

---

*本日报基于 GitHub 公开数据生成，时间范围：2026-02-28 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-03-01

---

## 1. 今日速览

IronClaw 项目今日呈现**高强度活跃状态**，单日 25 个 PR 更新（23 个待审）创下近期峰值。核心贡献者 @zmanian 主导了 14 个 PR 的提交，聚焦**安装体验加固**（PostgreSQL 版本检查、pgvector 验证、TLS 支持）与**安全层强化**（入站消息密钥扫描、密钥名规范化）。社区同步涌现出多租户架构（#348-#351 系列）和 Podman 支持（#414）等重大功能提案。Issues 侧 10 条新开无关闭，反映用户规模扩张期的典型支持压力。整体评估：**开发节奏健康，但代码审查队列积压需关注**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭 PR（2 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#295](https://github.com/nearai/ironclaw/pull/295) | @zmanian | Skills 系统集成测试（Tier 1-3） | 建立技能生态的质量基线，为第三方技能市场铺路 |
| [#425](https://github.com/nearai/ironclaw/pull/425) | @BroccoliFin | CLI 日志级别动态控制 (`--logs`) | 提升运维可观测性，减少生产环境调试摩擦 |

### 关键进展领域

**安装体验系统性加固**（6 个 PR 构成完整修复矩阵）：
- **PostgreSQL 生态**：#423 新增版本检查（≥15）+ pgvector 预检；#427 引入 TLS 支持解锁托管数据库（AWS RDS/Neon/Supabase）
- **隧道配置**：#424 校验 cloudflared 二进制与令牌格式；#430 修复 Tailscale 后台模式挂起
- **凭证管理**：#431 规范化密钥名大小写，根治 Slack "not_authed" 错误

**安全层主动防御**：
- [#433](https://github.com/nearai/ironclaw/pull/433) 入站消息密钥扫描——阻断用户误贴 API key 引发的循环泄露风险

**WASM 通道完整性**：
- [#421](https://github.com/nearai/ironclaw/pull/421) 补全凭证注入机制，使 `capabilities.json` 中的 `credentials` 块真正生效

---

## 4. 社区热点

### 讨论焦点：安装摩擦与跨项目学习

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#407 Ideas from Hermes Agent worth adopting](https://github.com/nearai/ironclaw/issues/407) | 2 评论，@zmanian 参与 | **架构对标需求**：用户希望 IronClaw 吸收 Hermes Agent 的成熟模式（多通道、工具执行、记忆、技能），暗示项目需强化差异化价值主张 |
| [#413 Slack Channel fails with "not_authed"](https://github.com/nearai/ironclaw/issues/413) | 1 评论，v0.12.0 回归 | **凭证注入失败 + CLI 配置失忆**：用户遭遇双重配置层断裂，已有 fix PR #431 #426 |

### 多租户架构三部曲（长期热点）

| PR 链 | 状态 | 技术债务信号 |
|:---|:---|:---|
| [#348](https://github.com/nearai/ironclaw/pull/348) → #349 → #351 | 全部待审 | 分层内存 → 多作用域读取 → 用户隔离工作空间，构成 Issue #59 的完整实现。依赖链过长，建议优先合并 #348 降低 rebase 成本 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#413](https://github.com/nearai/ironclaw/issues/413) | Slack WASM 通道 "not_authed" + CLI 配置重启丢失 | ✅ #431（密钥名规范化）、#426（.env 持久化） |
| 🔴 **高** | [#415](https://github.com/nearai/ironclaw/issues/415) | 安装向导未校验 PostgreSQL 版本（允许 PG 14 导致迁移失败） | ✅ #423 |
| 🔴 **高** | [#416](https://github.com/nearai/ironclaw/issues/416) | 缺少 pgvector 预检，迁移错误信息晦涩 | ✅ #423 |
| 🟡 **中** | [#418](https://github.com/nearai/ironclaw/issues/418) | Cloudflare 隧道未检查二进制/验证令牌 | ✅ #424 |
| 🟡 **中** | [#419](https://github.com/nearai/ironclaw/issues/419) | 未检测冲突的 cloudflared 服务（brew vs 系统） | 🔄 #428（批量修复中包含） |
| 🟡 **中** | [#420](https://github.com/nearai/ironclaw/issues/420) | zsh 补全文件未保护 `compdef` 调用 | ✅ #422 |
| 🟡 **中** | [#417](https://github.com/nearai/ironclaw/issues/417) | macOS Docker 自动启动缺乏引导 | 🔄 #428 |
| 🟢 **低** | [#410](https://github.com/nearai/ironclaw/issues/410) | 平板端 UI 裁剪 | ⏳ 待响应 |

**回归风险**：#413 揭示 v0.12.0 存在配置持久化缺陷，建议紧急 patch release。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性评估 | 版本信号 |
|:---|:---|:---|:---|
| **WASM 扩展密钥操作能力** | [#412](https://github.com/nearai/ironclaw/issues/412) @dpc | 高——安全签名场景刚需，需设计 HSM 抽象层 | v0.13+ |
| **Podman 原生支持** | [#414](https://github.com/nearai/ironclaw/pull/414) @elohmeier | 高——bollard 已兼容，无新依赖 | v0.12.1 或 v0.13 |
| **多租户/工作空间隔离** | #348-#351 系列 | 中——架构复杂，需分阶段落地 | v0.14 主线功能 |
| **WhatsApp 企业级可靠性** | [#403](https://github.com/nearai/ironclaw/pull/403) @jrevillard | 高——Webhook 验证 + 去重 + 已读回执，生产就绪 | v0.12.1 |

**路线图推断**：短期聚焦安装体验打磨（v0.12.1），中期押注多租户企业特性（v0.14），长期需回应 WASM 安全计算扩展。

---

## 7. 用户反馈摘要

### 真实痛点

> *"The setup wizard accepted any DATABASE_URL and attempts to run migrations without checking the PostgreSQL server version"* —— [#415](https://github.com/nearai/ironclaw/issues/415)

**诊断**：早期用户多为技术爱好者，当前扩张至更广泛开发者群体，**防御性安装向导**成为刚需。@zmanian 单日 6 个 setup 相关 PR 精准回应此趋势。

> *"If a user sources this file before compinit has run in their .zshrc, they get: compdef: command not found"* —— [#420](https://github.com/nearai/ironclaw/issues/420)

**诊断**：Shell 集成细节影响专业开发者体验，需遵循 rustup/starship 等工具的成熟模式。

### 满意信号

- Hermes Agent 对标提案（#407）暗示用户认可 IronClaw 的**架构定位**
- 技能系统测试合并（#295）反映对**扩展生态**的长期信心

### 不满意信号

- 平板 UI 裁剪（#410）无响应，**移动端/多设备体验**存在盲区
- 配置重启丢失（#413）造成"配置 amnesia"负面感知

---

## 8. 待处理积压

| 类型 | 条目 | 积压天数 | 风险提示 |
|:---|:---|:---|:---|
| 📚 文档 | [#294 Comprehensive documentation suite](https://github.com/nearai/ironclaw/pull/294) | 7 天 | 阻碍新贡献者 onboarding，与 #407 对标需求形成呼应 |
| 🔧 功能 | [#403 WhatsApp 企业级可靠性](https://github.com/nearai/ironclaw/pull/403) | 2 天 | 实现完整，需审查资源投入 |
| 🏗️ 架构 | [#348-#351 多租户链](https://github.com/nearai/ironclaw/pull/348) | 5 天 | 依赖链阻塞，建议 @standardtoaster 与维护者同步合并节奏 |
| 🐛 Bug | [#410 Tablet UI cropped](https://github.com/nearai/ironclaw/issues/410) | 1 天 | 响应缺失，影响移动端用户印象 |

---

**数据截至**：2026-03-01 00:00 UTC  
**项目健康度**：🟢 活跃开发（代码流动快）| 🟡 审查积压（23 PR 待审）| 🔴 需关注安装体验回归

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-03-01

> **项目**: [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw) — AI 智能体与个人 AI 助手开源框架  
> **分析日期**: 2026-03-01  
> **数据周期**: 过去 24 小时

---

## 1. 今日速览

今日 TinyClaw 项目活跃度**偏低**，仅完成 1 个版本发布（v0.0.7）和 1 个 Issue 关闭，无新 Issue 或 PR 合并。社区出现**显著的跨平台兼容性争议**——一位 Windows 用户在配置过程中遭遇多重阻碍后激烈反馈，反映出项目在 Windows 支持方面的文档与实际体验存在落差。技术层面，OpenViking 插件架构的强化工作仍在持续推进中，处于待合并状态。

---

## 2. 版本发布

### [v0.0.7](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.7) | 2026-03-01

| 属性 | 详情 |
|:---|:---|
| **类型** | 版本号递增（Chore） |
| **变更内容** | 仅执行版本号从 0.0.6 提升至 0.0.7（[#148](https://github.com/TinyAGI/tinyclaw/pull/148)） |
| **破坏性变更** | 无 |
| **迁移注意事项** | 无需任何操作 |

**评估**: 本次发布为**空版本**，无功能性更新或修复。结合社区反馈的 Windows 兼容性问题，建议维护团队考虑加快实质性修复的发布节奏，避免版本号膨胀与用户期望落差。

---

## 3. 项目进展

### 今日合并/关闭的 PR/Issue

| 项目 | 状态 | 说明 |
|:---|:---|:---|
| [#151](https://github.com/TinyAGI/tinyclaw/issues/151) | **已关闭** | 非技术性问题，因言辞激烈被关闭。未产生实际代码改进，但暴露了 Windows 支持的真实缺陷 |

### 进行中工作

| PR | 状态 | 进展评估 |
|:---|:---|:---|
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | 🟡 **待合并** | OpenViking 插件架构的延续性开发，基于 #149 的强化工作重新基线到 main 分支 |

**整体推进度**: ⭐☆☆☆☆（1/5）  
今日无功能合并，核心开发工作停滞在 PR 审查阶段。OpenViking 插件栈的迭代是近期主要技术方向，但尚未落地。

---

## 4. 社区热点

### 🔥 最高热度：[#151 - "this shit aint for Windows quit lying"](https://github.com/TinyAGI/tinyclaw/issues/151)

| 指标 | 数据 |
|:---|:---|
| 作者 | @SiN-Kiliko |
| 评论数 | 2 |
| 情绪 | 😤 强烈负面 |
| 关闭时间 | 2026-03-01（创建后约 1 天）|

**用户遭遇的完整路径**:
```
 defeating package managers 
    → 安装 jq 
    → 修复损坏的 settings.json 
    → 强制 PowerShell 执行 Linux 脚本 
    → 脚本要求不存在的 Linux 窗口管理器 
    → 报错信息仍显示 "✓" 成功标记
```

**诉求分析**:
| 表层诉求 | 深层诉求 |
|:---|:---|
| 停止"支持 Windows"的虚假宣传 | 建立真实的跨平台测试与文档体系 |
| 修复技术问题 | 尊重用户时间成本，提供诚实的平台支持声明 |

**项目方响应**: Issue 被关闭，未见技术回应或修复承诺。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Windows 平台完全不可用：脚本依赖 Linux 窗口管理器，错误处理逻辑缺陷（失败仍显示 ✓） | [#151](https://github.com/TinyAGI/tinyclaw/issues/151) | 无 | ❌ 未承认 |
| 🟡 **中** | 安装流程文档与实际依赖不符（jq、settings.json 损坏） | [#151](https://github.com/TinyAGI/tinyclaw/issues/151) | 无 | ❌ 未跟踪 |

**风险评估**: Windows 兼容性问题已从"技术债务"升级为**信任危机**。当前处理方式（关闭 Issue 无回应）可能加剧社区负面情绪。

---

## 6. 功能请求与路线图信号

| 来源 | 隐含需求 | 与现有 PR 关联 | 纳入可能性 |
|:---|:---|:---|:---|
| [#151](https://github.com/TinyAGI/tinyclaw/issues/151) 用户反馈 | 原生 Windows 支持 / WSL 明确指引 / 平台检测与友好报错 | 无直接关联 | 低（未进入官方跟踪） |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | OpenViking 插件生态扩展 | 自身即为实现 | 高（已提交待审） |

**路线图信号**: 项目当前聚焦于 **OpenViking 插件架构强化**（#149 → #150），平台兼容性尚未成为优先级。

---

## 7. 用户反馈摘要

### 💔 痛点（来自 [#151](https://github.com/TinyAGI/tinyclaw/issues/151)）

| 维度 | 具体描述 |
|:---|:---|
| **时间成本** | "defeating package managers" — 与包管理器反复斗争 |
| **配置地狱** | 手动修复 settings.json、强制脚本跨平台执行 |
| **错误引导** | 失败流程仍显示 ✓ 成功标记，造成认知混乱 |
| **信任破裂** | 文档声明支持 Windows，实际体验完全不符 |

### 🎯 使用场景
- **目标用户**: 希望在 Windows 环境部署 AI 助手的开发者
- **实际门槛**: 需要 Linux 环境知识 + 手动排错能力，远超声明的易用性

### 📊 满意度评估
- 该用户: ⭐☆☆☆☆（极度不满，已流失）
- 潜在 Windows 用户群体: 高风险流失

---

## 8. 待处理积压

| PR/Issue | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | 2026-02-27 | 2026-02-28 | 待审查 | ⚠️ **优先合并** — 核心功能开发，已等待 3+ 天 |
| [#151](https://github.com/TinyAGI/tinyclaw/issues/151) 衍生问题 | — | — | 原 Issue 被关闭 | 🔴 **新建跟踪 Issue** — 将 Windows 兼容性作为正式 Bug 录入，避免情绪化处理掩盖技术债务 |

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---:|:---|
| 代码活跃度 | ⭐⭐☆☆☆ | 无合并，开发停滞 |
| 社区响应 | ⭐☆☆☆☆ | 关闭 Issue 无技术回应 |
| 版本管理 | ⭐⭐☆☆☆ | 空版本发布，节奏存疑 |
| 跨平台支持 | ⭐☆☆☆☆ | 严重缺陷未跟踪 |
| **综合健康度** | **⭐⭐☆☆☆** | 技术债务累积，社区信任承压 |

---

> **分析师备注**: 建议维护团队本周内（1）审查并合并 #150 恢复开发节奏；（2）针对 Windows 兼容性建立正式 Issue 跟踪，或明确更新文档声明限制，修复用户信任。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*