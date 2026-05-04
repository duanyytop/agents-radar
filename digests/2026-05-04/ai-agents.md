# OpenClaw 生态日报 2026-05-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-04 00:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-05-04

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内 Issues 与 PR 各更新 500 条，社区讨论密度显著。v2026.5.3-beta.2 版本发布聚焦文件传输插件的安全增强。核心工程团队持续推进性能优化（pdfjs 懒加载、typing 指示器可配置）与稳定性修复，但 **Gateway 性能退化**（CPU 100%、长输出截断）和 **WebChat 会话持久化回归** 成为今日最紧迫的技术债务。PR 队列待合并比例高达 88.6%（443/500），合并吞吐量偏低，存在积压风险。

---

## 2. 版本发布

### [v2026.5.3-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-beta.2) — OpenClaw 2026.5.3 beta 2

| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-05-03/04 |
| **类型** | Beta 预发布 |
| **核心变更** | 新增捆绑式 `file-transfer` 插件 |

**详细更新：**
- **文件传输插件** (`Plugins/file-transfer`)：提供 4 个 Agent 工具用于二进制文件操作：
  - `file_fetch` — 获取远程/本地文件
  - `dir_list` — 目录列表
  - `dir_fetch` — 批量目录获取
  - `file_write` — 文件写入
- **安全策略**：默认拒绝（default-deny）的按节点路径策略，通过 `plugins.entries.file-transfer.config.nodes` 配置，需运营人员审批

**迁移注意事项：** 启用前需显式配置节点级路径白名单，否则文件传输工具将对所有配对节点保持禁用状态。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 状态 | 影响域 | 核心贡献 |
|:---|:---|:---|:---|:---|
| [#74995](https://github.com/openclaw/openclaw/pull/74995) | martins-oss | **已合并** | CI/脚本 | 将 Barnacle 活跃 PR 上限从 10 提升至 100，缓解可靠性 PR 队列阻塞 |
| [#45664](https://github.com/openclaw/openclaw/pull/45664) | zanehu-ai | **已合并** | BlueBubbles/Slack | 修复启动时 webhook 路由注册竞态条件，消除 5 秒空窗期的消息丢失风险 |

### 高价值待合并 PR（技术前瞻）

| PR | 作者 | 标签 | 技术价值 |
|:---|:---|:---|:---|
| [#77005](https://github.com/openclaw/openclaw/pull/77005) | 1yihui | `agents`, `size: XS` | **pdfjs-dist 懒加载**：消除每轮 2.5 秒阻塞开销，PDF 工具未启用时零成本 |
| [#76054](https://github.com/openclaw/openclaw/pull/76054) | kagura-agent | `agents`, `size: S` | **按 Agent 上下文注入覆盖**：解决多 Agent 场景下规则严格度差异化需求 |
| [#72009](https://github.com/openclaw/openclaw/pull/72009) | suntp | `web-ui`, `gateway` | **Typing 指示器 TTL 可配置**：默认 2→5 分钟，支持会话级/Agent 级覆盖 |
| [#45535](https://github.com/openclaw/openclaw/pull/45535) | yiShanXin | `agents` | **Token 用量归一化**：修复阿里云百炼等 OpenAI 兼容提供商的 0 用量报告问题 |
| [#45530](https://github.com/openclaw/openclaw/pull/45530) | bingolam | `discord` | **TTS 语音持久切换**：跨会话记忆用户语音偏好，provider 无关的通用机制 |

**整体评估**：今日代码流动以"性能优化"和"可配置性增强"为主线，但合并速率（57/500 = 11.4%）显著低于社区需求增速，建议维护者优先 review XS/S 尺寸的高影响修复。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| # | Issue | 评论 | 状态 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|:---|
| 1 | **分层引导文件加载** — 渐进式上下文控制 | 16 | OPEN | 大型工作区的 Token 预算优化：按引用频率分层加载引导文件，避免子 Agent/Cron 任务全量加载 | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| 2 | **Gateway 运行时退化** — 定价获取 60s 超时、Telegram 轮询停滞 | 15 | OPEN | Windows 11 + Node 24 环境下的慢性网络/定时器退化，跨版本（4.23-4.26）持续存在 | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| 3 | **gh-issues 技能：未信任 Issue 正文直接注入子 Agent 提示词** | 12 | OPEN | **安全漏洞**：GitHub Issue 正文未经净化直接进入子 Agent 提示词，存在提示注入风险 | [#45740](https://github.com/openclaw/openclaw/issues/45740) |
| 4 | **Skills 未从 ~/.openclaw/workspace/skills/ 加载** | 12 | OPEN | 技能发现机制不完整，Agent 上下文仅显示子集 | [#43735](https://github.com/openclaw/openclaw/issues/43735) |
| 5 | **允许私有网络访问配置** `tools.web.fetch.allowPrivateNetwork` | 12 | OPEN | 企业内网场景需求：显式启用后允许 web_fetch 访问 localhost/10.x/192.168.x | [#39604](https://github.com/openclaw/openclaw/issues/39604) |

### 情绪信号分析

- **#65302**（已关闭，10 评论，👍6）：AI Agent "邵小红" 以中文历史典故（刘邦约法三章）批评项目更新策略导致自我破坏，获得显著共鸣，反映**社区对版本稳定性优先于功能速度的集体焦虑**
- **#76804**（7 评论，👍4）：WebChat 助手文本未持久化到会话转录 — 5.2 回归，用户数据丢失感知强烈

---

## 5. Bug 与稳定性

### 🔴 严重（数据丢失 / 服务中断 / 安全漏洞）

| Issue | 类型 | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#76804** | 回归 | WebChat 助手文本响应未写入 session JSONL 转录（5.2 回归） | 待确认 | [链接](https://github.com/openclaw/openclaw/issues/76804) |
| **#45740** | 安全 | gh-issues 技能未净化外部 Issue 正文即注入子 Agent 提示词 | 无 | [链接](https://github.com/openclaw/openclaw/issues/45740) |
| **#76307** | 回归 | 长输出 Agent 在 ~25-80 字符处截断，跨渠道/模型确定性复现 | **已关闭**（修复验证中） | [链接](https://github.com/openclaw/openclaw/issues/76307) |
| **#73323** | 慢性退化 | Gateway 多子系统网络/定时器退化（定价 60s 超时、Telegram 轮询 127-266s 停滞） | 无 | [链接](https://github.com/openclaw/openclaw/issues/73323) |
| **#76382** | 回归 | Gateway CPU 100% 单线程满载（4.24-5.2） | 无 | [链接](https://github.com/openclaw/openclaw/issues/76382) |

### 🟡 中等（功能异常 / 用户体验受损）

| Issue | 类型 | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#45698** | 回归 | Control UI 长时间运行后渐进式卡死（2026.3.12） | 无 | [链接](https://github.com/openclaw/openclaw/issues/45698) |
| **#45269** | 回归 | `apply_patch` 被工具策略管道视为未知工具，Agent 路由运行无法执行 | 无 | [链接](https://github.com/openclaw/openclaw/issues/45269) |
| **#44905** | 行为 | Discord 泄露内部工具调用痕迹（NO_REPLY、to=functions 等） | 无 | [链接](https://github.com/openclaw/openclaw/issues/44905) |
| **#43747** | 回归 | 内存管理混乱：同团队 3 人出现 3 种不同存储行为（sqlite/vector/混合） | 无 | [链接](https://github.com/openclaw/openclaw/issues/43747) |
| **#40540** | 行为 | `openclaw update` Windows EBUSY 错误 | 无 | [链接](https://github.com/openclaw/openclaw/issues/40540) |

### 🟢 轻微 / 有规避方案

| Issue | 描述 | 链接 |
|:---|:---|:---|
| #45799 | Telegram 媒体下载代理不可用时静默失败（无重试） | [链接](https://github.com/openclaw/openclaw/issues/45799) |
| #44599 | `OPENCLAW_CONFIG_DIR` 不能包含空格 | [链接](https://github.com/openclaw/openclaw/issues/44599) |
| #41201 | Control UI 头像显示损坏（404/路径问题） | [链接](https://github.com/openclaw/openclaw/issues/41201) |

---

## 6. 功能请求与路线图信号

### 高可行性（已有 PR 或明确技术路径）

| 需求 | Issue/PR | 状态 | 纳入概率 | 关键信号 |
|:---|:---|:---|:---:|:---|
| **按 Agent 成本预算强制限制** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | OPEN | ⭐⭐⭐⭐ | 网关级实现，复用现有 `session-cost-usage.ts`，企业运营刚需 |
| **重置前 Agentic 内存刷新** | [#45608](https://github.com/openclaw/openclaw/issues/45608) | OPEN | ⭐⭐⭐⭐ | 复用现有 `runMemoryFlushIfNeeded` 机制，`/new`/`/reset`/日重置统一 |
| **YAML 配置格式支持** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | OPEN | ⭐⭐⭐ | DevOps 用户高频需求，与现有 JSON5 并行 |
| **MathJax/LaTeX Control UI 渲染** | [#42840](https://github.com/openclaw/openclaw/issues/42840) | OPEN | ⭐⭐⭐ | 👍4，学术/科学场景，前端范围可控 |
| **按 Agent 浏览器配置隔离** `userDataDir` | [#44635](https://github.com/openclaw/openclaw/issues/44635) | OPEN | ⭐⭐⭐ | 👍3，多账号登录刚需，Playwright 原生支持 |

### 架构级需求（需 RFC 或核心团队决策）

| 需求 | Issue | 核心挑战 |
|:---|:---|:---|
| **分层引导文件加载** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 需定义"引用频率"统计机制，与现有上下文注入架构整合 |
| **路径级 RWX 权限**（Unix DAC 模型） | [#39979](https://github.com/openclaw/openclaw/issues/39979) | 替换二进制级 exec 白名单，涉及安全模型重构 |
| **技能级模型路由** `model` frontmatter | [#43260](https://github.com/openclaw/openclaw/issues/43260) | 需扩展调度器，与现有 Agent/默认模型层级协调 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---:|
| **"更新杀死产品"** — 频繁破坏性更新导致 Agent 身份/记忆/行为不稳定 | #65302 | 🔥🔥🔥🔥🔥 |
| **Windows 二等公民体验** — EBUSY 更新失败、路径空格不支持、节点启动卡死 | #40540, #44599, #39038 | 🔥🔥🔥🔥 |
| **静默失败黑洞** — 子 Agent 完成丢失、Telegram 轮询停滞无通知、压缩超时无限重试 | #44925, #50040, #43661 | 🔥🔥🔥🔥 |
| **内存管理不可预期** — 同团队不同成员出现 sqlite/vector/混合三种行为，无文档解释 | #43747 | 🔥🔥🔥🔥 |
| **Gateway 性能慢性死亡** — CPU 100%、响应延迟累积，重启仅暂时缓解 | #76382, #73323 | 🔥🔥🔥🔥 |

### 😊 满意点

- 文件传输插件的安全默认策略获认可（显式节点级授权）
- 社区对 Barnacle PR 上限提升（#74995）的响应速度表示肯定
- TTS 语音持久化（#45530）和 typing 指示器可配置（#72009）等"细节体验"PR 获期待

### 💡 使用模式洞察

- **企业/团队场景**：多账号 Feishu（#45673）、私有网络访问（#39604）、成本预算（#42475）需求密集
- **多 Agent 编排**：ping-pong 上限 5→20（#45871）、上下文注入覆盖（#76054）、浏览器隔离（#44635）反映复杂拓扑需求
- **Cron/自动化**：`write` 工具缺失 append 模式导致共享文件覆盖（#40001）、sessionTarget 与 delivery.mode 冲突（#44922）

---

## 8. 待处理积压

### ⚠️ 需维护者优先关注的长期 Issue

| Issue | 创建日期 | 最后更新 | 天数 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **分层引导文件加载** | 2026-02-21 | 2026-05-03 | **72** | Token 成本优化核心需求，16 评论无核心团队回应 | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| **Skills 未从 workspace 加载** | 2026-03-12 | 2026-05-03 | **53** | 技能发现机制基础缺陷，12 评论 | [#43735](https://github.com/openclaw/openclaw/issues/43735) |
| **私有网络访问配置** | 2026-03-08 | 2026-05-03 | **57** | 企业内网部署 blocker，👍5 | [#39604](https://github.com/openclaw/openclaw/issues/39604) |
| **sandbox workspaceAccess=none 时只读问题** | 2026-03-06 | 2026-05-03 | **59** | 安全与功能冲突，👍4 | [#37634](https://github.com/openclaw/openclaw/issues/37634) |
| **MathJax/LaTeX 支持** | 2026-03-11 | 2026-05-03 | **54** | 学术用户群体诉求，👍4 | [#42840](https://github.com/openclaw/openclaw/issues/42840) |

### PR 队列健康度预警

- **443 个待合并 PR** 中，大量为 2026-03-14 集中创建（疑似 sprint 或 hackathon 产出），距今已 **51 天**
- 建议：按 `size: XS/S` + `fix/regression` 标签优先分流，避免高价值小修复被 XL 功能 PR 阻塞

---

*日报生成时间：2026-05-04 | 数据来源：OpenClaw GitHub 开放数据*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-05-04 | 覆盖项目：11 个活跃仓库**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从功能扩张向生产就绪的集体转型期**。头部项目（OpenClaw、ZeroClaw、IronClaw）日均处理 50+ Issues/PRs，聚焦稳定性债务清理与安全加固；中型项目（NanoBot、PicoClaw、CoPaw）在国产模型适配、多模态扩展上快速迭代；尾部项目（LobsterAI、TinyClaw）则面临维护者带宽枯竭或社区冻结风险。**Token 效率、安全沙箱、配置系统一致性**成为跨项目的高频痛点，反映行业正从"能跑"向"可运维、可治理"跃迁。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并/关闭 | 待合并 | 今日 Release | 健康度评估 |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | 57 | 443 (88.6%) | v2026.5.3-beta.2 | 🟡 极高活跃，但合并吞吐量危机，PR 积压严重 |
| **ZeroClaw** | 50 | 50 | 22 | 28 | 无 | 🟢 高活跃，功能冻结前密集合入，桌面端冲刺中 |
| **IronClaw** | 50 | 50 | 28 | 22 | 无 | 🟢 高活跃，Reborn 架构冲刺与生产修复并行 |
| **NanoClaw** | 11 | 50 | 31 | 19 | 无 | 🟢 高活跃，v2 迁移收尾，安全 PR 待审 |
| **CoPaw** | 32 | 16 | 5 | 11 | 无 | 🟢 中高活跃，记忆系统重构期，首次贡献者活跃 |
| **NanoBot** | 6 | 23 | 7 | 16 | 无 | 🟢 中高活跃，安全加固救火期，响应极快 |
| **PicoClaw** | ~5 | 19 | 6 | 13 | nightly v0.2.8 | 🟢 中高活跃，架构基础设施（事件总线）里程碑 |
| **Hermes Agent** | 50 | 50 | 28 | 22 | 无 | 🟢 高活跃，teknium1 抢救合并社区 PR，Token 效率主题突出 |
| **ZeptoClaw** | 5 | 22 | 19 | 3 | 无 | 🟡 中活跃，单维护者驱动，外部贡献生态薄弱 |
| **Moltis** | 1 | 2 | 0 | 2 | 无 | 🟡 低活跃，稳定维护，DeepSeek 兼容性修复待合 |
| **NullClaw** | 1 | 1 | 0 | 1 | 无 | 🟡 低活跃，核心团队深耕沙箱安全 |
| **LobsterAI** | 1 | 2 (stale) | 0 | 2 | 无 | 🔴 停滞，39 天零合并，社区信任资本消耗中 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 无 | 🔴 冻结，24h 零活动 |

> **关键指标**：OpenClaw 的 88.6% 待合并率为生态最高风险点；NanoBot 当日 Issue→PR→合并闭环（#3604→#3607 等）展现最快响应速度。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues/500 PRs 日更，绝对体量第一 | ZeroClaw/IronClaw/Hermes Agent 同级（50/50），NanoClaw 同级（50 PRs），其余量级差距显著 |
| **技术路线** | **多平台 Gateway + 插件化工具系统 + 企业级配置**（节点级路径白名单、成本预算、Agent 级覆盖） | ZeroClaw 侧重桌面端/语音双工；IronClaw 押注 Reborn WASM 架构；Hermes Agent 聚焦 Token 效率与 Curator 技能市场 |
| **核心优势** | ① 最成熟的**多通道编排**（BlueBubbles/Slack/Telegram/Discord/Feishu 全覆盖）；② **企业运营控制**（按节点文件传输策略、成本预算、上下文注入覆盖）；③ **插件生态广度**（file-transfer、gh-issues 等技能） | NanoBot/NanoClaw 更轻量；PicoClaw 强调国产模型适配；CoPaw 聚焦记忆系统 |
| **结构性风险** | **合并吞吐量崩溃**（11.4%），443 PR 积压；Gateway 性能慢性退化（CPU 100%、长输出截断）；WebChat 会话持久化回归 | ZeroClaw 同受文档-代码一致性困扰；IronClaw 受 Reborn 分支漂移风险；Hermes Agent 配置陷阱问题 |
| **差异化锚点** | "**运营人员审批**"的安全模型（file-transfer 默认拒绝） vs. 其他项目的自动/配置驱动安全策略 | NullClaw 的内核原生 Landlock、NanoBot 的软 workspace 边界为替代路径 |

> **定位结论**：OpenClaw 是生态中**最接近企业级 SaaS 运营平台**的项目，但工程化债务（合并管道、性能退化）正侵蚀其先发优势。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与信号强度 |
|:---|:---|:---|
| **Token 效率优化** | Hermes Agent (#6839, 7👍)、OpenClaw (#22438 分层引导)、NanoClaw (#2219 RULES.md 瘦身) | 懒加载工具 Schema、FTS5 语义检索、混合工具预选择、按引用频率分层加载——**本地模型用户与成本敏感用户倒逼** |
| **安全沙箱与权限治理** | NullClaw (#882 Landlock 默认)、NanoBot (#3613/#3614 workspace 边界)、OpenClaw (#45740 gh-issues 注入漏洞)、NanoClaw (#2217 MCP 工具信任等级) | 从"二进制白名单"向"路径级 RWX、按 Agent 隔离、内核原生机制"演进 |
| **配置系统一致性** | IronClaw (#3229 LLM 配置持久化 Bug)、ZeroClaw (#6149 文档-配置不匹配)、CoPaw (#4018 update 重置配置)、OpenClaw (#19214 terminal.cwd 陷阱) | 配置覆盖优先级、持久化安全、文档同步——**复杂度超越新手友好阈值** |
| **国产/严格 Provider 适配** | PicoClaw (DeepSeek/Gemini/Mimo)、CoPaw (MiniMax/火山引擎)、Moltis (DeepSeek reasoning)、IronClaw (DeepSeek 工具调用失效) | Schema 严格性差异（Gemini 拒 `$ref`）、推理内容回放、视觉错误模式识别 |
| **语音/多模态交互** | ZeroClaw (#5896 双工语音)、NanoBot (#3604 WhatsApp 语音)、CoPaw (#1516 Telegram 语音)、PicoClaw (#2755 视频理解) | 从文本 Bot 向"全渠道多模态 Agent"升级，端侧推理需求浮现 |
| **记忆系统可靠性** | CoPaw (#3977 memory_search 崩溃、#4007 MemoryHook)、NanoClaw (#2097 Lore Context 语义记忆)、OpenClaw (#43735 Skills 加载不完整) | 从文件式记忆向向量检索+长期记忆演进，但类型安全、配置持久化、污染防护问题集中爆发 |
| **生产级可观测性** | PicoClaw (#2677 事件总线)、ZeptoClaw (#568 技能遥测)、OpenClaw (typing 指示器 TTL)、CoPaw (#1642 错误码体系) | 运行时事件、成本追踪、使用统计——从黑箱调试向数据驱动治理 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多通道编排、运营控制、插件市场 | 团队/企业运营者、多平台部署者 | Node.js 网关 + 插件化工具 + 节点级安全策略 |
| **ZeroClaw** | 桌面端原生体验（macOS 菜单栏）、语音双工、自托管网关 | 个人高级用户、边缘硬件部署者 | Rust/Tauri 桌面 + WebSocket 网关 + 技能内置化 |
| **IronClaw** | 自主金融代理（NEAR Intents/DCA）、WASM 沙箱运行时 | Web3/区块链开发者、自主经济代理设计者 | Reborn WASM 架构 + 链上意图原生集成 + libSQL 持久化 |
| **Hermes Agent** | Token 效率、技能生命周期管理（Curator）、多模型编排 | 本地模型用户、成本极客、技能开发者 | Python 核心 + Two-Pass 工具加载 + 技能市场机制 |
| **NanoBot** | 轻量 CLI 交互、快速迭代、安全边界 | 开发者/个人用户、远程 SSH 工作者 | Python CLI + 软 workspace 边界 + 并发子代理控制 |
| **PicoClaw** | 国产模型深度适配、边缘计算（Android/Termux）、MCP 生态 | 国内用户、硬件极客、MCP 工具链用户 | Go 实现 + 事件总线 + 小米/DeepSeek 原生适配 |
| **NanoClaw** | v2 容器架构、语义记忆、Anthropic 生态对齐 | Claude Code 迁移用户、容器化部署者 | TypeScript + Docker 运行时 + Lore Context 记忆 |
| **CoPaw** | 桌面端（Windows 托盘）、国产云集成、错误码体系 | 中文桌面用户、企业运维 | Electron + 火山/Minimax 内置 + 全链路可观测性 |
| **ZeptoClaw** | local-first 基础设施、middleware 框架、自改进循环 | Rust 生态开发者、基础设施构建者 | Rust 全栈 + middleware 管道 + MQTT 边缘协议 |
| **NullClaw** | 内核原生安全沙箱、Zig 系统编程 | 安全极客、最小化 Linux 用户 | Zig 实现 + Landlock 优先 + 零外部依赖启动 |
| **Moltis** | 多提供商抽象、TTS 本地化、推理内容透明 | 多模型切换用户、本地 TTS 部署者 | Python + 提供商抽象层 + Piper/Coqui 本地语音 |

> **架构范式分化**：① **网关型**（OpenClaw/ZeroClaw/CoPaw）vs. **运行时型**（IronClaw/NanoClaw）；② **Python 快速迭代**（NanoBot/Hermes Agent/Moltis）vs. **Rust/Go/Zig 性能优先**（ZeroClaw/PicoClaw/NullClaw）；③ **云原生**（NanoClaw 容器）vs. **边缘原生**（PicoClaw Android/ZeroClaw Pi）。

---

## 6. 社区热度与成熟度

| 阶段 | 项目 | 特征信号 |
|:---|:---|:---|
| **🔥 快速迭代期** | OpenClaw、ZeroClaw、IronClaw、Hermes Agent | 日更 50+ 活动量，功能冻结/版本冲刺中，新架构（Reborn/middleware/语音）密集落地，但技术债务同步累积 |
| **🚀 质量巩固期** | NanoBot、PicoClaw、NanoClaw、CoPaw | 安全加固/架构基础设施（事件总线/错误码/记忆重构）为主，响应速度快，首次贡献者活跃 |
| **🛠️ 维护深耕期** | ZeptoClaw、Moltis、NullClaw | 单/双维护者驱动，依赖自动化（Dependabot），功能增量小，聚焦特定技术纵深 |
| **❄️ 停滞/冻结期** | LobsterAI、TinyClaw | 39 天+ 零合并、stale PR 100%、社区零互动，或完全无活动 |

> **成熟度悖论**：OpenClaw 体量最大但合并管道最脆弱；NanoBot 体量中等但当日闭环修复能力最强；PicoClaw 事件总线等基础设施投入预示长期运维 readiness。

---

## 7. 值得关注的趋势信号

| 趋势 | 证据链 | 对开发者的价值 |
|:---|:---|:---|
| **"Token 经济学"成为核心设计约束** | Hermes Agent #6839 (7👍)、OpenClaw #22438、NanoClaw #2219 (-12K tokens) | 工具系统必须从"全量注入"转向懒加载/动态选择/RAG 预筛选，长上下文模型不等于无限上下文预算 |
| **安全从"功能"转向"基础设施"** | NullClaw Landlock 默认化、NanoBot 软边界+重试节流、OpenClaw 节点级路径策略、NanoClaw MCP 信任等级 | 沙箱机制需嵌入架构底层而非后期补丁，"默认拒绝+可观测"取代"默认允许+黑名单" |
| **国产模型适配成为必选项而非加分项** | PicoClaw DeepSeek/Mimo、CoPaw MiniMax/火山、Moltis/IronClaw DeepSeek 修复 | OpenAI 兼容层不足以覆盖 schema 严格性、推理内容、视觉协议差异，需原生适配投入 |
| **"自改进 Agent"从概念进入工程验证** | ZeptoClaw #567-569 skill CRUD+遥测、Hermes Agent 自改进写操作审批 (#19324)、IronClaw DCA 自主金融 | Agent 元认知能力（自我修改、使用数据驱动优化）需要配套治理框架，防止越权执行 |
| **桌面端/边缘端成为新战场** | ZeroClaw macOS 菜单栏、CoPaw Windows 托盘、PicoClaw Android/Termux、ZeptoClaw MQTT 边缘 | 云端 Bot 向"个人设备常驻 Agent"迁移，语音双工、离线能力、低资源优化是差异化关键 |
| **配置系统复杂性成为 adoption 瓶颈** | 跨项目 6+ 配置相关 Issues，IronClaw #3229 持久化 Bug、ZeroClaw #6149 文档不匹配 | 建议采用"配置即代码+验证时错误+迁移工具"模式，避免运行时静默失败 |
| **社区治理模式分化：抢救合并 vs. 自然腐烂** | Hermes Agent teknium1 单日抢救 8 个社区 PR vs. LobsterAI 39 天零审阅 | 维护者主动"打捞"社区贡献是健康度领先指标，自动化 stale 机制不足以替代人为判断 |

---

**报告结论**：2026-05-04 的个人 AI 助手生态呈现**"头部承压、中部冲刺、尾部冻结"**的分化格局。OpenClaw 需优先解决合并管道危机以维持领导地位；ZeroClaw/IronClaw 的架构赌注（桌面原生/Reborn WASM）将在下一版本验证；NanoBot/PicoClaw 的当日修复响应能力值得借鉴。全行业共同面临**Token 效率、安全治理、国产适配**三重挑战，率先系统性解决者将获得企业级 adoption 的先发优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-04

---

## 1. 今日速览

今日 NanoBot 社区活跃度**极高**，24小时内产生 **23 个 PR 更新**（含 7 个已合并/关闭）和 **6 个 Issues 更新**，形成近期罕见的集中爆发。核心焦点集中在**安全边界机制**的紧急修复（workspace safety guard 误杀与静默失败）、**WhatsApp 语音消息**支持、以及**并发子代理控制**等稳定性议题。值得注意的是，多个安全相关 PR 由同一贡献者（mohamed-elkholy95）持续推动，显示项目正经历系统性安全加固期。CLI 用户体验（终端乱码、Provider 认证管理）也成为高频痛点。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | chengyongru | **安全边界误杀修复**：豁免 `/dev/*` 路径（如 `2>/dev/null`）、修复 workspace 路径解析、防止安全阻断后消息丢失 | ✅ 合并 |
| [#3614](https://github.com/HKUDS/nanobot/pull/3614) | Re-bin | **软 workspace 边界策略**：将硬性 abort 改为可恢复的工具错误，带重试节流，避免 LLM 反复越界 | ✅ 合并 |
| [#3609](https://github.com/HKUDS/nanobot/pull/3609) | 04cb | **CLI 重试消息渲染修复**：将 `retry_wait` 消息路由到进度行，解决 SSH 终端 ANSI 乱码 | ✅ 合并 |
| [#3606](https://github.com/HKUDS/nanobot/pull/3606) | hussein1362 | **Cron 持久化原子写**：`jobs.json` 原子写入 + 损坏文件不静默覆盖，修复容器重启后定时任务丢失 | ✅ 合并 |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | ramonpaolo | **WebUI 体验优化**：`turn_end` 信号驱动加载状态、聊天隔离修复、前端测试覆盖 | ✅ 合并 |
| [#2727](https://github.com/HKUDS/nanobot/pull/2727) | mikaku9944 | ~~Provider logout 命令~~（被 #3612 替代关闭） | ❌ 关闭 |
| [#3599](https://github.com/HKUDS/nanobot/issues/3599) | jermeyhu | ~~Safety guard 误报~~（由 #3613/#3614 解决关闭） | ❌ 关闭 |

**整体推进评估**：今日合并的 5 个 PR 形成**"安全-稳定-体验"三位一体修复包**，直接回应了 v0.1.5.post3 发布后用户集中反馈的 workspace safety guard 回归问题。项目从"功能迭代期"短暂转入"稳定性救火期"，修复质量高但暴露出版本测试覆盖不足。

---

## 4. 社区热点

### 最高讨论热度议题

| 排名 | 议题 | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2665](https://github.com/HKUDS/nanobot/issues/2665) OpenAI Codex 账户切换后重新认证 | 3 评论，创建 3 月 31 日，持续活跃至今日 | **OAuth 凭证生命周期管理缺失**：团队账户过期 → Plus 个人升级后，CLI 无 `logout` 命令导致旧 token 滞留。用户已自行尝试 `--help` 排查，说明文档 discoverability 不足。**该 Issue 直接催生了 #3612 PR**。 |
| 🔥2 | [#3604](https://github.com/HKUDS/nanobot/issues/3604) WhatsApp 语音消息无法下载 | 1 评论，当日创建 | **多模态消息类型覆盖缺口**：WhatsApp bridge 缺少 `audioMessage` 分支处理，语音作为高频率交互形式被遗漏。**已有修复 PR #3607 待合并**。 |
| 🔥3 | [#3605](https://github.com/HKUDS/nanobot/issues/3605) Safety guard 静默丢弃对话回合 | 0 评论，当日创建 | **错误处理透明度危机**：安全阻断后用户端无任何反馈，比"报错"更糟糕的 UX 黑洞。**与 #3613/#3614 形成问题-修复闭环**。 |

**背后诉求模式**：用户正在将 NanoBot 推向**生产级多租户场景**（团队账户切换、WhatsApp 语音交互、远程 SSH 终端），但项目的单用户桌面起源架构（OAuth 无 logout、bridge 媒体类型不全、CLI 假设本地终端）产生系统性摩擦。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃** | 并发子代理导致本地 LLM OOM | [#3611](https://github.com/HKUDS/nanobot/issues/3611) / [#3615](https://github.com/HKUDS/nanobot/pull/3615) | **有 PR 待合并** | mlx_lm/Ollama 用户，消费级硬件 |
| 🔴 **P0-功能丧失** | WhatsApp 语音消息完全不可用 | [#3604](https://github.com/HKUDS/nanobot/issues/3604) / [#3607](https://github.com/HKUDS/nanobot/pull/3607) | **有 PR 待合并** | WhatsApp bridge 用户 |
| 🟡 **P1-静默失败** | Safety guard 阻断后无用户反馈 | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | **已由 #3613/#3614 修复** | 所有使用 exec 工具的 channel（Telegram 等）|
| 🟡 **P1-回归误杀** | v0.1.5.post3 workspace 路径误判 | [#3599](https://github.com/HKUDS/nanobot/issues/3599) | **已由 #3613/#3614 修复** | 升级至 post3 的所有用户 |
| 🟡 **P1-体验劣化** | CLI 重试消息混入流式输出致终端乱码 | [#3600](https://github.com/HKUDS/nanobot/issues/3600) / [#3609](https://github.com/HKUDS/nanobot/pull/3609) | **已修复合并** | SSH 远程使用 `nanobot chat` 用户 |
| 🟢 **P2-数据丢失** | Cron 任务容器重启后消失 | [#3606](https://github.com/HKUDS/nanobot/pull/3606) | **已修复合并** | 使用 cron 调度功能的部署 |

**稳定性健康度评估**：v0.1.5.post3 引入的 workspace safety guard 产生**级联回归**（#3599 误杀 → #3605 静默失败），显示该版本的安全加固未经充分边界测试。今日密集修复表明维护团队响应迅速，但建议对安全相关变更建立**金丝雀发布机制**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **Provider logout 命令** | [#2665](https://github.com/HKUDS/nanobot/issues/2665) + [#3612](https://github.com/HKUDS/nanobot/pull/3612) | PR 已提交，机制完整（`_LOGOUT_HANDLERS` 注册表） | **高（90%）** — 替代了 4 月的 #2727，设计更成熟 |
| **并发子代理限制** | [#3611](https://github.com/HKUDS/nanobot/issues/3611) + [#3615](https://github.com/HKUDS/nanobot/pull/3615) | PR 已提交，含 `maxConcurrentSubagents` 配置 + 信号量 + 回归测试 | **高（85%）** — 本地 LLM 场景刚需 |
| **HookCenter 插件系统** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | 大型架构 PR，替换 AgentHook 方法重写模式，支持 `entry_points` 分发 | **中（50%）** — 设计深远但需长期 review |
| **Panel 式终端显示** | [#3601](https://github.com/HKUDS/nanobot/pull/3601) | 纯 UI 增强，有截图展示 | **中（40%）** — 体验优化，非阻塞 |
| **Heartbeat 推理与通知解耦** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | 3 月 PR，配置驱动 `sendReasoning`，文档已更新 | **中（60%）** — 设计成熟但长期未合并 |

**路线图信号**：项目正从"功能扩张"转向**"架构治理"**——安全加固（mohamed-elkholy95 的 4 个安全 PR）、插件化（HookCenter）、配置精细化（并发限制、heartbeat 行为）并行推进，预示 v0.2.x 可能聚焦**企业级部署就绪性**。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 原声摘录 | 来源 |
|:---|:---|:---|
| **OAuth 账户迁移困境** | "I checked nanobot provider --help, but I did not see any logout command" | [#2665](https://github.com/HKUDS/nanobot/issues/2665) |
| **安全机制过度防御** | "在v.0.1.5.post2 的时候并没有遇到过。让ai重试又可以实现我需要的功能。看日志操作的是工作目录内的内容，应该是被允许的" | [#3599](https://github.com/HKUDS/nanobot/issues/3599) |
| **静默失败比报错更可怕** | Safety guard 阻断后 Telegram 无任何消息，用户完全不知发生何事的黑洞体验 | [#3605](https://github.com/HKUDS/nanobot/issues/3605) |
| **远程终端体验破碎** | "问题在 SSH 远程终端环境下尤为明显" — ANSI 乱码导致无法阅读 | [#3600](https://github.com/HKUDS/nanobot/issues/3600) |

### 满意度信号

- **响应速度认可**：当日创建的 Issue 当日即有修复 PR（#3604→#3607, #3611→#3615, #3600→#3609）
- **社区贡献活跃**：非核心维护者（04cb, yorkhellen, hussein1362 等）快速提交高质量修复

### 不满意信号

- **版本质量波动**：v0.1.5.post3 被用户感知为"引入回归的版本"，信任损耗需修复
- **文档/帮助系统滞后**：用户被迫通过 `--help` 试错而非文档指引（#2665）

---

## 8. 待处理积压

### 需维护者重点关注

| PR/Issue | 创建时间 | 滞留原因 | 风险 |
|:---|:---|:---|:---|
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) SDK `RunResult` 字段填充 | 2026-04-17 | **18 天未决** — SDK 核心契约长期为空实现，影响所有程序化调用方 | 外部开发者信任流失 |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) 公共部署安全加固 | 2026-04-28 | **6 天未决** — 涉及 CSRF、Cloudflare/nginx 等生产部署场景 | 安全漏洞公开暴露 |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) 文件系统层历史文件保护 | 2026-04-17 | **18 天未决** — 替代 regex 的根治方案，与 #3240 绕过修复相关 | 下一次 bash 扩展绕过风险 |
| [#3252](https://github.com/HKUDS/nanobot/pull/3252) 非 HTTP 协议 SSRF 检测 | 2026-04-17 | **18 天未决** — `file://`, `gopher://` 等协议仍可利用 | 本地文件读取/Redis 攻击面 |
| [#3235](https://github.com/HKUDS/nanobot/pull/3235) DNS 失败时 fail-closed | 2026-04-17 | **18 天未决** — SSRF 防护的 fail-open 路径 |  DNS 劫持场景下的绕过 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) Heartbeat 推理解耦 | 2026-03-02 | **63 天未决** — 设计成熟、文档完整、无冲突 | 功能腐烂，社区贡献者流失 |

**积压风险警示**：mohamed-elkholy95 的 **4 个安全 PR（#3252/#3235/#3255/#3492）形成安全加固矩阵**，但均滞留 6-18 天。今日紧急修复的 #3599/#3605 本可通过提前合并这些系统性方案避免。建议维护者**优先 review 安全 PR 队列**，而非逐个响应表面症状。

---

*日报生成时间：2026-05-04 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-04

---

## 1. 今日速览

Hermes Agent 今日保持**极高开发活跃度**，50 条 Issues 与 50 条 PR 的双高流量反映出社区处于密集迭代期。核心维护者 `teknium1` 主导了大规模 PR 清理工作，单日合并/关闭 28 个 PR，其中包含 8 个"Salvage"性质的社区 PR 抢救合并，显示出维护团队对社区贡献的积极消化。项目当前聚焦三大主题：**TUI/CLI 终端体验重构**、**Gateway 多平台稳定性加固**、**工具系统 Token 效率优化**。值得注意的是，今日无新版本发布，但代码合并速度表明 v0.12.0 或类似版本可能正在酝酿中。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（按影响排序）

| PR | 作者 | 核心改进 | 状态 |
|:---|:---|:---|:---|
| [#19435](https://github.com/NousResearch/hermes-agent/pull/19435) | oluwadareab12 | **Python 3.12+ 兼容性修复**：将 `asyncio.get_event_loop()` 替换为 `get_running_loop()`，消除后台线程 RuntimeWarning | 🔵 Open（待合并）|
| [#19418](https://github.com/NousResearch/hermes-agent/pull/19418) | Mind-Dragon | **TUI 输入系统重构**：以能力驱动模型替代平台检测逻辑，解决 SSH/tmux/本地终端的粘贴、复制、中断信号路由问题 | 🔵 Open |
| [#18340](https://github.com/NousResearch/hermes-agent/pull/18340) | kagura-agent | **成本核算准确性修复**：解决 Google Gemini 等别名导致 `estimated_cost_usd` 始终为 0 的问题 | 🔵 Open |
| [#12794](https://github.com/NousResearch/hermes-agent/pull/12794) | thesunofdog | **子代理模型覆盖**：`delegate_task` 支持按子代理指定 model/provider，增强多模型编排能力 | 🔵 Open |
| [#19420](https://github.com/NousResearch/hermes-agent/pull/19420) | cmcgrabby-hue | **Kanban 仪表盘增强**：集成 Mission Control 战略卡片视图（Class B 人机配对任务） | 🔵 Open |

### 维护者抢救合并的社区 PR（teknium1 主导，共 8 个）

| PR | 原 PR | 修复内容 |
|:---|:---|:---|
| [#19422](https://github.com/NousResearch/hermes-agent/pull/19422) | #19230 | QQBot C2C 私聊与群聊支持 |
| [#19424](https://github.com/NousResearch/hermes-agent/pull/19424) | #19259 | Windows UTF-8 强制编码，修复 `UnicodeEncodeError` 崩溃 |
| [#19426](https://github.com/NousResearch/hermes-agent/pull/19426) | #19266 | 剥离终端围栏标记泄漏，净化文件读取输出 |
| [#19427](https://github.com/NousResearch/hermes-agent/pull/19427) | #19351 | Kanban worker 身份声明去重，避免与 SOUL.md 冲突 |
| [#19428](https://github.com/NousResearch/hermes-agent/pull/19428) | #19273 | Discord 语音转录去重，抑制重复回复 |
| [#19429](https://github.com/NousResearch/hermes-agent/pull/19429) | #19317 | Telegram `require_mention` 顶层配置桥接 |
| [#19430](https://github.com/NousResearch/hermes-agent/pull/19430) | #19371 | Telegram 命令名规范化（小写+下划线）|
| [#19431](https://github.com/NousResearch/hermes-agent/pull/19431) | #19372 | Gateway 技能重载状态泄漏修复 |
| [#19432](https://github.com/NousResearch/hermes-agent/pull/19432) | #19356 | Anthropic 显式 API key 传播修复 |
| [#19433](https://github.com/NousResearch/hermes-agent/pull/19433) | - | Cron 任务技能使用计数更新（与 #18811 重复）|

**整体推进评估**：今日合并以**稳定性修复**为主，覆盖 Windows、Discord、Telegram、QQ 四大平台，同时 Cron/技能生命周期管理得到完善。TUI 架构级重构和成本核算修复表明项目正从"功能堆砌"转向"工程化打磨"。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🥇 | [#8430](https://github.com/NousResearch/hermes-agent/issues/8430) `context_length` 配置被忽略 | 6 | **模型兼容性**：小上下文窗口模型（<64K）用户被硬编码限制阻塞，配置覆盖机制失效 |
| 🥈 | [#14637](https://github.com/NousResearch/hermes-agent/issues/14637) OpenRouter 认证失败 | 5 | **第三方提供商可靠性**：API key 配置与 `.env` 文件优先级混乱，已关闭 |
| 🥉 | [#19214](https://github.com/NousResearch/hermes-agent/issues/19214) `terminal.cwd` 配置陷阱 | 5 | **CLI 体验**：setup 流程永久钉死工作目录为 `$HOME`，违背用户直觉 |

### 高反应 Issues

| Issue | 👍 | 信号 |
|:---|:---|:---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) 懒加载工具 Schema | 7 | **Token 效率是社区最强痛点**，50+ 工具每次全量注入消耗 3500-5000 tokens |

**诉求分析**：社区核心矛盾在于 **"功能丰富 vs. 资源效率"**。工具系统、技能系统的 Token 膨胀问题（#6839、#17649、#13332）获得最多支持，表明本地模型用户和成本敏感用户占比上升。配置系统的"静默陷阱"（#19214、#8430）反映出项目复杂度已超出新手友好阈值。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **P1** | [#13248](https://github.com/NousResearch/hermes-agent/issues/13248) | Slack 群线程空响应重试循环（claude-opus-4-7）| ❌ 无 |
| **P1** | [#14128](https://github.com/NousResearch/hermes-agent/issues/14128) | Gateway 关闭挂起导致 PID 文件竞争 | ❌ 无 |
| **P1** | [#19426](https://github.com/NousResearch/hermes-agent/pull/19426) | 终端围栏标记泄漏到文件读取 | ✅ 已合并 |
| **P2** | [#19294](https://github.com/NousResearch/hermes-agent/issues/19294) | `_chromium_installed()` 忽略环境变量和系统 Chrome | ❌ 无 |
| **P2** | [#19287](https://github.com/NousResearch/hermes-agent/issues/19287) | Telegram 图片作为文件路径传递，视觉模型无法解析 | ❌ 无 |
| **P2** | [#19362](https://github.com/NousResearch/hermes-agent/issues/19362) | Azure/OpenAI 内容过滤器对压缩提示误报 | ❌ 无 |
| **P2** | [#19417](https://github.com/NousResearch/hermes-agent/issues/19417) | MCP 调用 `ClosedResourceError` 空错误消息 | [#19425](https://github.com/NousResearch/hermes-agent/pull/19425) 🔄 待合并 |
| **P2** | [#19293](https://github.com/NousResearch/hermes-agent/issues/19293) | Curator 误分类非 ASCII 名称的 Hub 技能 | ❌ 无 |
| **P2** | [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) | MiniMax 提供商频繁连接断开 | ❌ 无 |
| **P2** | [#11020](https://github.com/NousResearch/hermes-agent/issues/11020) | 浏览器会话生命周期：每轮清理杀死持久会话 | ❌ 无 |
| **P3** | [#19288](https://github.com/NousResearch/hermes-agent/issues/19288) | Telegram `/background` 自动执行缺提示参数 | ❌ 无 |

**稳定性评估**：Gateway 多平台（Slack、Telegram、Discord、Feishu）存在一类共性问题——**空/异常响应的处理逻辑缺陷**。浏览器工具的环境变量识别盲区（#19294）影响容器化部署。今日合并的 PR 主要覆盖 Gateway 层，Agent 核心层的 P1/P2 Bug 仍待处理。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) 懒加载工具 Schema | 性能 | ⭐⭐⭐⭐⭐ **高** | 7👍，社区最强诉求，技术方案成熟（Two-Pass） |
| [#17649](https://github.com/NousResearch/hermes-agent/issues/17649) SQLite FTS5 语义技能检索 | 性能 | ⭐⭐⭐⭐⭐ **高** | 与 #6839 同主题，已有 PR #bc79e227e 部分实现 |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) 混合工具预选择 | 性能 | ⭐⭐⭐⭐☆ | 与 #6839 互补，RAG 方案无需额外 LLM 轮次 |
| [#19384](https://github.com/NousResearch/hermes-agent/issues/19384) Curator CLI 技能管理 | 工具 | ⭐⭐⭐⭐☆ | teknium1 今日提交相关 PR， curator 系统正在产品化 |
| [#13072](https://github.com/NousResearch/hermes-agent/issues/13072) CLI 自动队列模式 | 体验 | ⭐⭐⭐☆☆ | 架构改动大，需与现有 TUI 重构协调 |
| [#19344](https://github.com/NousResearch/hermes-agent/issues/19344) Planning Consultant `/consult` | 智能 | ⭐⭐⭐☆☆ | 前沿模型审查机制，与现有 delegate 系统重叠 |
| [#18074](https://github.com/NousResearch/hermes-agent/issues/18074) Anthropic Tool Search | 集成 | ⭐⭐⭐☆☆ | 依赖 Anthropic Beta API，稳定性风险 |
| [#19320](https://github.com/NousResearch/hermes-agent/issues/19320) Codex `web.run` 搜索提供商 | 集成 | ⭐⭐⭐☆☆ | OpenAI 专属，社区贡献者可能快速实现 |
| [#19324](https://github.com/NousResearch/hermes-agent/issues/19324) 自改进写操作审批策略 | 安全 | ⭐⭐⭐☆☆ | 安全敏感，但需设计治理框架 |
| [#5021](https://github.com/NousResearch/hermes-agent/issues/5021) 每轮会话刷新防数据丢失 | 可靠性 | ⭐⭐⭐☆☆ | 技术方案明确，但 I/O 性能影响需权衡 |

**路线图信号**：**Token 效率优化**已形成明确主题集群（#6839/#17649/#13332），预计成为下一版本核心卖点。Curator 系统从后台机制走向用户可见的 CLI 工具（#19384），暗示项目正在构建"技能生命周期管理"的产品差异化。

---

## 7. 用户反馈摘要

### 🔴 痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---|
| "配置写了不生效"——`context_length` 被忽略，小模型完全无法使用 | #8430 | 😤 高 |
| "AI 擅自 git push"——自改进系统越权执行写操作，用户感到失控 | #19324 | 😤 高 |
| "终端 setup 后永远钉在 HOME 目录"——`terminal.cwd` 成一次性陷阱 | #19214 | 😠 中高 |
| "50 个工具每次全塞，本地模型跑不动"——Token 焦虑 | #6839 | 😠 中高 |
| "Windows 服务启动就崩溃"——编码问题 | #19424 | 😠 中（已修复）|
| "Slack 里机器人自己跟自己循环"——空响应重试 | #13248 | 😐 中 |

### 🟢 满意/期待

| 场景 | 来源 |
|:---|:---|
| Cron 任务技能使用计数终于修复，避免误归档 | #18810/#19433 |
| 多 OAuth token 自动回退（已关闭）| #933 |
| 子代理可指定不同模型，编排灵活性提升 | #12794 |

**用户画像变化**：从早期"极客尝鲜者"向"生产环境部署者"迁移——出现 systemd 服务管理、Windows 服务、多账户 OAuth 等企业级需求，同时对 AI 自主行为的**安全焦虑**显著上升（#19324）。

---

## 8. 待处理积压

### 长期未响应的高价值 Issue

| Issue | 创建日期 | 天数 | 风险 |
|:---|:---|:---|:---|
| [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) Telegram 冷启动解析器耗尽 | 2026-04-07 | 27 | 网关可靠性，生产部署阻塞 |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) 懒加载工具 Schema | 2026-04-09 | 25 | 社区最高票，技术债务累积 |
| [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) MiniMax 连接稳定性 | 2026-04-09 | 25 | 国内用户流失风险 |
| [#5021](https://github.com/NousResearch/hermes-agent/issues/5021) 强制退出数据丢失 | 2026-04-04 | 30 | 数据可靠性核心承诺 |
| [#11020](https://github.com/NousResearch/hermes-agent/issues/11020) 浏览器会话生命周期 | 2026-04-16 | 18 |  headed 模式基本不可用 |

### 需要维护者决策的 PR

| PR | 状态 | 阻塞原因 |
|:---|:---|:---|
| [#16547](https://github.com/NousResearch/hermes-agent/pull/16547) 安全加固：MEDIA 指令文件交付限制 | Open | **P1 安全**，需架构审查 |
| [#19418](https://github.com/NousResearch/hermes-agent/pull/19418) TUI 能力驱动重构 | Open | 大型重构，需测试矩阵覆盖 |

---

**日报生成时间**：2026-05-04  
**数据覆盖**：过去 24 小时 GitHub 活动  
**项目健康度评分**：🟢 活跃（合并率高、维护者响应快）/ 🟡 技术债务（Token 效率、配置陷阱、平台边缘情况）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-04

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，19 个 PR 更新（13 个待合并）显示社区贡献持续涌入。核心进展集中在**多模态能力扩展**（视频/推理内容流式传输）、**MCP 工具链健壮性**（初始化失败非致命化、动态头部透传）以及**DeepSeek/Gemini 等国产/严格提供商兼容性修复**。2 个关键 Bug（Gemini MCP 模式崩溃、DeepSeek 图片历史残留 400 错误）已关闭，但 Android v0.2.8 数据访问故障和源码构建缺失 launcher 的新 Bug 需紧急关注。nightly 构建持续发布，v0.2.8 迭代节奏稳定。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.8-nightly.20260503.a94ba821
- **发布时间**：2026-05-03
- **状态**：自动化构建，**可能不稳定**
- **变更范围**：自 v0.2.8 以来 main 分支全部提交
- **完整日志**：[sipeed/picoclaw/compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
- **注意事项**：此为持续集成产物，生产环境建议等待正式版；当前 main 分支包含大量未发布的 provider 层重构和 MCP 修复

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2677](https://github.com/sipeed/picoclaw/pull/2677) Feat/runtime events | alexhoshina | **统一运行时事件基础设施**：`pkg/events` 包引入共享事件信封、事件类型、订阅通道、背压策略和进程内总线；Agent 可观测性全量迁移 | 🏗️ **架构里程碑**：为分布式追踪、实时监控、调试工具奠定底座，是 PicoClaw 从"能跑"到"可运维"的关键跃迁 |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) fix(mcp): sanitize MCP tool schemas for Gemini | afjcjsbx | **Gemini 函数调用 schema 消毒器**：自动展平 `$ref`/`$defs`/`anyOf` 等复杂 JSON Schema，解决 [#2668](https://github.com/sipeed/picoclaw/issues/2668) 崩溃 | 🔧 **兼容性突破**：打通 MCP 生态（如 Notion）与 Gemini 模型的关键阻塞点 |
| [#2717](https://github.com/sipeed/picoclaw/pull/2717) feat: add DeepSeek vision unsupported error detection | LiusCraft | **DeepSeek 视觉错误模式识别**：在 JSON schema 层面捕获 `unknown variant image_url` 错误，替代粗暴 400 崩溃 | 🇨🇳 **国产模型适配**：针对性解决 DeepSeek 等严格 provider 的多模态降级策略 |
| [#2669](https://github.com/sipeed/picoclaw/pull/2669) feat(agent): add network error retry | david1gp | **LLM 调用网络错误重试**：可配置最大重试次数和退避策略，覆盖连接重置、管道破裂等瞬态故障 | 🛡️ **可靠性提升**：减少边缘网络环境下的随机失败 |
| [#2682](https://github.com/sipeed/picoclaw/pull/2682) docs: fix agents.defaults model configuration format | dtapps | **文档修正**：`agents.defaults.model` 从错误对象格式修复为扁平格式 | 📚 **降低配置门槛** |
| [#2735](https://github.com/sipeed/picoclaw/pull/2735) AWS SDK 依赖升级 | dependabot | `config` 1.32.16 → 1.32.17 | 🔒 安全/稳定性维护 |

**整体评估**：今日合并内容覆盖**架构基础设施**（事件总线）、**核心兼容性**（Gemini/DeepSeek/MCP）、**运维可靠性**（网络重试），属于**高质量迭代日**。特别是事件总线的引入，标志着 PicoClaw 开始为生产级部署做准备。

---

## 4. 社区热点

### 🔥 讨论最活跃：Issue #2225 — Ollama Cloud 凭证支持
- **链接**：[sipeed/picoclaw/issues/2225](https://github.com/sipeed/picoclaw/issues/2225)
- **数据**：10 条评论，创建 2026-03-31，最后更新 2026-05-03
- **作者**：Suisei110
- **核心诉求**：Ollama Cloud（非本地 Ollama）需要身份验证凭据配置，当前 PicoClaw 无此选项
- **背后信号**：
  - **私有化部署需求上升**：用户不满足于本地 Ollama，开始使用托管版 Ollama Cloud
  - **企业安全合规**：云实例必须带认证，说明 PicoClaw 正在进入需要 SSO/API Key 管理的场景
  - **Provider 配置抽象不足**：凭证体系可能是各 provider 各自实现，缺乏统一认证框架

### 📌 其他高关注议题
| 条目 | 热度指标 | 关键张力 |
|:---|:---|:---|
| [#2668](https://github.com/sipeed/picoclaw/issues/2668) Gemini MCP 400 错误 | 👍 1，已关闭 | **复杂 JSON Schema 与严格 Provider 的永恒矛盾** — 社区需要通用 schema 降级策略 |
| [#2753](https://github.com/sipeed/picoclaw/issues/2753) 源码构建无 launcher | 新建，0 评论 | **文档与构建系统脱节** — README 承诺与交付物不一致 |

---

## 5. Bug 与稳定性

### 🚨 严重：新建/活跃 Bug

| 优先级 | Issue/PR | 描述 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P0** | [#2753](https://github.com/sipeed/picoclaw/issues/2753) | **源码构建后 `picoclaw-launcher` 不存在** | 所有从源码安装的用户（Ubuntu 24.04, Go 1.26 确认） | ❌ **无** — 构建系统或文档缺陷，阻塞开发者上手 |
| **P0** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) | **Android v0.2.8 标签页无法访问任何数据** | Android/Termux 全量用户 | ❌ **无** — 移动端核心功能完全不可用 |
| **P1** | [#2725](https://github.com/sipeed/picoclaw/pull/2725) | MCP 全失败时 Agent 变僵尸（网关运行但无法处理消息） | 网络不稳定环境下的 MCP 用户 | 🔄 **PR 待合并** — 非致命化修复已提交 |
| **P1** | [#2750](https://github.com/sipeed/picoclaw/pull/2750) | 执行守卫将相对路径误判为根绝对路径（`archive/SKILL.md` → `/SKILL.md`） | 使用文件路径工具的用户 | 🔄 **PR 待合并** |
| **P1** | [#2751](https://github.com/sipeed/picoclaw/pull/2751) | 陈旧 PID 文件被外部进程复用，阻塞网关启动 | 崩溃后重启的实例 | 🔄 **PR 待合并** |

### ✅ 已修复 Bug

| Issue | 修复 PR | 根因 | 修复策略 |
|:---|:---|:---|:---|
| [#2668](https://github.com/sipeed/picoclaw/issues/2668) Gemini MCP 400 | [#2681](https://github.com/sipeed/picoclaw/pull/2681) | Gemini 拒绝 `$ref`/`anyOf` schema | Schema 消毒器：内联引用、展平复合类型 |
| [#2718](https://github.com/sipeed/picoclaw/issues/2718) DeepSeek `image_url` 400 | [#2717](https://github.com/sipeed/picoclaw/pull/2717) | 非多模态模型收到图片历史消息 | 错误模式检测 + 优雅降级 |

---

## 6. 功能请求与路线图信号

### 🎯 用户明确需求

| 需求 | 来源 | 成熟度 | 纳入 v0.2.9 概率 |
|:---|:---|:---|:---|
| **Ollama Cloud 统一凭证配置** | [#2225](https://github.com/sipeed/picoclaw/issues/2225) | 有详细场景，10 评论讨论 | **高** — 认证框架可能是 #2752（模型配置工作流改进）的自然延伸 |
| **视频理解 + 流式推理内容** | [#2755](https://github.com/sipeed/picoclaw/pull/2755) | **PR 已提交**，基于小米 Mimo 集成 | **极高** — 多模态是明确方向，Mimo 作为国内厂商代表有战略意义 |
| **并行多子 Agent 调用** | [#2754](https://github.com/sipeed/picoclaw/pull/2754) | **PR 已提交**，同步多 subagent 工具 | **高** — 架构层面提升 Agent 编排能力，与现有单线程形成互补 |
| **Telegram 话题上下文保持** | [#2756](https://github.com/sipeed/picoclaw/pull/2756) | **PR 已提交**，含回归测试 | **高** — 频道层修复，影响真实社区运营场景 |
| **MCP 动态头部透传** | [#2696](https://github.com/sipeed/picoclaw/pull/2696) | **PR 已提交**，per-request 认证 | **中高** — 企业 MCP 代理场景必需 |
| **模型配置工作流改进** | [#2752](https://github.com/sipeed/picoclaw/pull/2752) | **PR 已提交**，上游模型获取 + 连通性测试 | **极高** — 直接降低配置门槛，与 #2225 凭证需求可联动 |

### 🔮 路线图推断

```
v0.2.8 当前 → v0.2.9 预期方向：
├─ 多模态完整闭环（图片✓ → 视频 PR#2755 → 音频待跟进）
├─ 国产模型深度适配（DeepSeek ✓ → 小米 Mimo PR#2755 → 更多厂商）
├─ MCP 生产级健壮（schema 消毒 ✓ → 非致命启动 PR#2725 → 动态认证 PR#2696）
├─ 配置体验重构（文档修复 ✓ → 模型配置工作流 PR#2752 → 凭证统一 #2225）
└─ 可观测性基础设施（事件总线 ✓ → 下一步：指标导出、分布式追踪）
```

---

## 7. 用户反馈摘要

### 😫 真实痛点

> *"I'm trying using picoclaw and im using Ollama cloud right now, but unfortunately there is no credential option."*
> — **Suisei110**, [#2225](https://github.com/sipeed/picoclaw/issues/2225)
> 
> **痛点**：云托管服务的认证缺口，暗示用户从本地实验转向生产部署

> *"Do 'install from source' from README → try to run picoclaw-launcher → No such file."*
> — **guettli**, [#2753](https://github.com/sipeed/picoclaw/issues/2753)
> 
> **痛点**：文档与构建产物不同步，新手入门路径断裂

> *"Android v0.2.8, cannot access any data from tabs"*
> — **stl3**, [#2744](https://github.com/sipeed/picoclaw/issues/2744)
> 
> **痛点**：移动端核心功能完全不可用，Android 作为边缘计算节点场景受阻

### 🛠️ 使用场景洞察

| 场景 | 来源 | 项目启示 |
|:---|:---|:---|
| Android TV Box + Termux + Telegram 长期运行 | [#2462](https://github.com/sipeed/picoclaw/pull/2462) | **边缘 AI 节点**是真实需求，需关注低资源稳定性 |
| 小米 Mimo 多模态 API 接入 | [#2755](https://github.com/sipeed/picoclaw/pull/2755) | **国内厂商 OpenAI 兼容层**成为主要集成模式 |
| Telegram Forum Topic 运营 | [#2756](https://github.com/sipeed/picoclaw/pull/2756) | **社区自动化**场景需要精细的上下文管理 |

### ✅ 满意度信号

- MCP 生态整合（Notion 等）被积极使用，触发 Gemini 兼容修复 → 说明工具链价值被认可
- 事件总线 PR 无阻力合并 → 架构演进方向获维护团队认同
- 多个国内模型适配 PR 快速响应 → 本土化是项目优先事项

---

## 8. 待处理积压

### ⏳ 长期未响应 / 需维护者介入

| 条目 | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) Ollama Cloud 凭证 | 2026-03-31 | 2026-05-03 | 10 评论无维护者回应，需求明确但无实现承诺 | **指派给认证/配置模块负责人**，或与 #2752 模型配置工作流统筹设计 |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) Docker compose privileged | 2026-04-01 | 2026-05-03 | 标记 stale，无评论讨论 | 评估安全影响：privileged 模式是否应默认开启？需安全审查 |
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) Codex 流式输出 + Telegram 重试修复 | 2026-04-09 | 2026-05-03 | 复杂修复，涉及 Android/Termux 边缘场景，可能缺乏测试环境 | **优先审查**：包含真实生产环境验证，解决 Telegram 重复发送问题 |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) web_search YAML 配置 + DuckDuckGo 默认 | 2026-04-24 | 2026-05-03 | 标记 stale，功能完整但无合并 | 简单配置修复，建议快速合并或明确拒绝 |

### 🔔 今日特别提醒

1. **#2753 源码构建断裂** — 直接影响新开发者转化率，建议 24h 内响应
2. **#2744 Android 完全不可用** — 若 v0.2.8 为正式版，需考虑 hotfix 或回滚
3. **#2755 / #2754 / #2752 三大新 PR** — 功能重大，需设计审查资源分配

---

*日报生成时间：2026-05-04 | 数据来源：GitHub API / sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-04

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | **日期**: 2026-05-04 | **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

NanoClaw 今日展现**极高活跃度**，24 小时内 50 个 PR 更新（31 条已合并/关闭，19 条待审阅）、11 个 Issues 更新（8 条关闭，3 条新开），无新版本发布。项目处于**密集迭代期**：v2 架构迁移收尾、容器运行时稳定性攻坚、安全加固三线并行。核心维护者 andrebrov 主导关闭 6 条跟踪型 Issue，社区贡献者在 macOS 生态支持（MacPorts）、本地 LLM 兼容性（llama.cpp）、以及消息投递可靠性方面持续涌入高质量 PR。整体健康度良好，但待合并 PR 积压（19 条）需关注审阅带宽。

---

## 2. 版本发布

**无新版本发布**

> 最新 Release 仍待更新。大量功能已合入主干但未打包，建议维护者评估是否需发布补丁版本以交付近期安全修复与 v2 迁移改进。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#2229** | SebTardif | **认证层完善**：`setup/verify.ts` 正式识别 `ANTHROPIC_AUTH_TOKEN`，与 `credential-proxy.ts` 的 OAuth 模式对齐，解决 Claude Code CLI 用户 setup 失败问题 | [PR #2229](https://github.com/qwibitai/nanoclaw/pull/2229) |
| **#2216** → **#2235** | Koshkoshinsk | **v2 迁移体验优化**：OneCLI 健康检查端点修正、TTY 交互守卫（防止 Claude Code Bash 工具折叠输出）、遗留服务文件清理；#2235  superseded 并扩展了容器清理逻辑 | [PR #2216](https://github.com/qwibitai/nanoclaw/pull/2216) · [PR #2235](https://github.com/qwibitai/nanoclaw/pull/2235) |
| **#2097** | zhushuanbao-dot | **语义记忆技能**：集成 Lore Context，提供跨会话向量检索记忆，替代纯文件式 `CLAUDE.local.md` | [PR #2097](https://github.com/qwibitai/nanoclaw/pull/2097) |
| **#2228** | SamBagetAI | **baget.ai 团队工作流**：支持动态角色剥离（仅保留已雇佣角色）+ 非在编角色回退至 CoS 人设，适配创始人实际团队规模 | [PR #2228](https://github.com/qwibitai/nanoclaw/pull/2228) |

### 里程碑意义

- **v2 架构迁移进入硬化阶段**：迁移脚本从"能跑"到"防呆"，开始处理边缘场景（无 TTY、残留容器）
- **记忆系统从文件向语义化演进**：Lore Context 集成标志 NanoClaw 从"上下文工程"向"长期记忆"跃迁
- **生态适配拓宽**：Anthropic 官方 CLI 认证令牌、macOS 双包管理器（Homebrew/MacPorts）支持降低准入门槛

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | **[#853](https://github.com/qwibitai/nanoclaw/issues/853)** ANTHROPIC_AUTH_TOKEN setup 验证失败 | 3 评论 | **跨工具兼容性诉求**：Claude Code CLI 与 NanoClaw 认证体系割裂，用户困惑于"同一公司两套令牌"。已随 #2229 关闭，但暴露文档/UX 债务 |
| 🥈 | **[#2223](https://github.com/qwibitai/nanoclaw/issues/2223)** Agent 身份混淆（MythicalClaw vs Main） | 1 评论 | **平台抽象泄漏**：Telegram handle 被误认为 agent identity，反映多通道适配器的身份建模缺陷 |
| 🥉 | **[#2219](https://github.com/qwibitai/nanoclaw/issues/2219)** RULES.md 瘦身（-12K tokens） | 1 评论 | **上下文窗口治理**：主动削减 system prompt 体积，应对模型长上下文成本与性能压力 |

### 背后诉求分析

- **开发者体验一致性**：用户期望 Anthropic 生态工具链认证无缝互通（#853）
- **生产级身份隔离**：多通道部署时 agent 自我认知需与平台句柄解耦（#2223）
- **成本敏感型优化**：大模型 token 经济学驱动 prompt 工程从"堆砌"转向"精益"（#2219）

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 根因 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **[#2227](https://github.com/qwibitai/nanoclaw/issues/2227)** `engage_mode='always'` 静默丢弃群消息 | **OPEN** | `evaluateEngage()` switch 缺 `'always'` case，fall through 至 `return false` | **待修复** — 逻辑简单，建议优先合并 |
| 🔴 **高** | **[#2221](https://github.com/qwibitai/nanoclaw/issues/2221)** `gh` CLI 容器内缺失（回归） | **CLOSED** | 容器 PATH 或镜像层变更导致 CLI 工具丢失 | 已关闭，未标注具体修复 PR |
| 🟡 **中** | **[#2220](https://github.com/qwibitai/nanoclaw/issues/2220)** 已注销聊天仍被投递 | **CLOSED** | 聊天注销后 agent 输出目标未清理 | 已关闭 |
| 🟡 **中** | **[#2214](https://github.com/qwibitai/nanoclaw/issues/2214)** iMessage local-mode 消息永不投递 | **CLOSED** | `onInbound` handler 未触发，Photon SDK 与 host 桥接断裂 | 已关闭 |
| 🟡 **中** | **[#2200](https://github.com/qwibitai/nanoclaw/issues/2200)** OpenRC 系统 Telegram 配对挂起 | **OPEN** | 服务启动检测硬编码 systemd/launchd，OpenRC 服务状态未被识别 | **待修复** — 需 init 系统抽象层 |
| 🟢 **低** | **[#853](https://github.com/qwibitai/nanoclaw/issues/853)** 认证令牌识别不全 | **CLOSED** | 验证逻辑与代理逻辑不一致 | #2229 |

### 稳定性评估

- **回归风险可控**：gh CLI 缺失、iMessage 投递失败均为快速修复，反映测试覆盖缺口
- **init 系统兼容性债务显现**：OpenRC 支持 (#2200) 与 systemd/launchd 的假设硬编码，影响 Alpine/ Gentoo 用户群体
- **#2227 为今日最大隐患**：配置合法但行为静默失效，用户无感知丢失消息，建议 24h 内响应

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 技术路径 | 纳入可能性 |
|:---|:---|:---|:---|
| **llama.cpp 本地推理支持** | **[#2234](https://github.com/qwibitai/nanoclaw/issues/2234)** Kwisss | 已验证 Claude Code 兼容 llama-server；NanoClaw 连接超时需排查 HTTP 适配层/流式响应处理 | ⭐⭐⭐⭐⭐ **高** — 本地/私有化部署为 AI 助手核心诉求，社区呼声强烈 |
| **MacPorts 包管理器支持** | **[#2238](https://github.com/qwibitai/nanoclaw/pull/2238)** felipek | 安装脚本增加 `port` 检测，Docker Desktop 手动下载回退 | ⭐⭐⭐⭐☆ **高** — PR 已提交，符合贡献规范，合并门槛低 |
| **间隔调度 `@every:<ms>`** | **[#2237](https://github.com/qwibitai/nanoclaw/pull/2237)** NeuerUser | 基于 `process_after` 锚定的防漂移间隔调度 | ⭐⭐⭐⭐☆ **高** — 补充 cron 表达式的自然需求，实现严谨 |
| **按组模型+effort覆盖** | **[#2233](https://github.com/qwibitai/nanoclaw/pull/2233)** tamasPetki | `container-config` 扩展 per-group 配置 | ⭐⭐⭐☆☆ **中** — 与现有配置体系整合需评估一致性 |
| **MCP 服务端工具按信任等级过滤** | **[#2217](https://github.com/qwibitai/nanoclaw/issues/2217)** andrebrov | 动态工具注册，按容器 tier 过滤 38K tokens 目录 | ⭐⭐⭐⭐☆ **高** — 已标注为跟踪项，关联 ligolnik/nanoclaw-public#123，基础设施级优化 |
| **单实例锁防重复 host** | **[#2224](https://github.com/qwibitai/nanoclaw/pull/2224)** kpscheffel | PID file advisory lock (`data/host.lock`) | ⭐⭐⭐⭐⭐ **高** — 数据安全关键，PR 已就绪 |

---

## 7. 用户反馈摘要

### 痛点

> *"Claude code works seamlessly with llama.cpp... Nano-claw seems to have trouble to connect? Setup fails on: 'Your assistant didn't reply in time.'"*
> — **[#2234](https://github.com/qwibitai/nanoclaw/issues/2234)** Kwisss

**本地 LLM 兼容性落差**：用户明确对比 Claude Code 与 NanoClaw 的 llama.cpp 支持，NanoClaw 在连接层存在额外假设（超时策略、流式解析？），阻碍完全离线部署。

> *"The pair-telegram step waits for the running NanoClaw service... On OpenRC... the service setup step reports service never started"*
> — **[#2200](https://github.com/qwibitai/nanoclaw/issues/2200)** markhawrylak

**Linux 发行版兼容性盲区**：systemd 中心主义排除轻量级发行版用户，安装流程在 init 检测环节硬着陆。

### 满意点

- **迁移体验持续改进**：TTY 守卫、遗留清理等"防呆"设计获认可（#2216/#2235）
- **记忆系统升级路径清晰**：Lore Context 集成回应了跨会话持久化的长期需求

### 场景洞察

- **双包管理器 macOS 用户**：MacPorts 用户群体被长期忽视，felipek 的 PR 填补生态缺口
- **多通道身份管理复杂度**：Telegram/iMessage/其他通道并行时，agent 自我认知需平台无关抽象

---

## 8. 待处理积压

| 类型 | 条目 | 等待时长 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| **PR 积压** | 19 条待合并 PR | 1-10 天 | 贡献者流失、分支漂移 | 维护者 andrebrov 需分配审阅带宽，或引入二级维护者 |
| **安全加固系列** | **[#2004](https://github.com/qwibitai/nanoclaw/pull/2004)** 渠道安装器信任边界、**[#2000](https://github.com/qwibitai/nanoclaw/pull/2000)** Webhook 请求体上限、**[#1999](https://github.com/qwibitai/nanoclaw/pull/1999)** 符号链接目录拒绝 | ~10 天 | 安全 PR 久悬增加漏洞暴露窗口 | 优先审阅合并，或标注具体阻塞原因 |
| **高影响 Bug** | **[#2227](https://github.com/qwibitai/nanoclaw/issues/2227)** 静默消息丢弃 | 1 天 | 数据丢失，用户无感知 | 24h 内响应，单文件修改，合并成本低 |
| **架构兼容性** | **[#2200](https://github.com/qwibitai/nanoclaw/issues/2200)** OpenRC 支持 | 1 天 | 排除特定 Linux 用户群 | 评估 #2238 作者 felipek 或 cfis 是否有兴趣扩展 init 系统检测 |

---

> **明日关注**：#2227 修复进度、安全 PR  trio（#2004/#2000/#1999）审阅状态、llama.cpp 兼容性诊断回应。

---

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-04

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-04  
> **分析周期**: 过去 24 小时（2026-05-03 至 2026-05-04）

---

## 1. 今日速览

NullClaw 今日保持**低活跃度但高质量技术推进**的节奏。过去 24 小时内产生 1 条新 Issue 和 1 条配套 PR，均聚焦于**沙箱安全机制的启动性能与可靠性优化**，由核心维护者 `mark-os` 主导。无版本发布，无社区外部贡献者介入，属于典型的核心团队技术深耕日。项目健康度稳定，安全架构的精细化打磨显示其向生产就绪迈进的意图明确。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| 项目 | 状态 | 说明 |
|:---|:---|:---|
| PR #883 | 🟡 **待合并** | 为沙箱探针工具添加可执行文件预解析检查，修复 Zig stdlib `execve` 失败后的僵尸进程泄漏问题 |

**技术推进分析**：

- **PR #883** ([nullclaw/nullclaw#883](https://github.com/nullclaw/nullclaw/pull/883)) 是对 Issue #882 提出的启动性能问题的**直接技术响应**。该 PR 在 `src/security/probe.zig` 的 `runQuietCommand` 中引入可执行文件预解析逻辑，避免在目标二进制不存在时仍触发子进程创建。
- **关联性**：该 PR 是 Issue #882 中"停止启动时探测外部工具"诉求的**阶段性妥协方案**——未完全移除探测机制，但通过前置检查降低了失败路径的系统开销。
- **整体迈进评估**：⭐⭐☆☆☆（2/5）—— 属于防御性修复，未引入新功能，但为后续默认启用 Landlock 扫清部分障碍。

---

## 4. 社区热点

### 🔥 最活跃讨论：Issue #882 — 沙箱启动探测机制重构

| 指标 | 数据 |
|:---|:---|
| 链接 | [nullclaw/nullclaw#882](https://github.com/nullclaw/nullclaw/issues/882) |
| 评论数 | 2 |
| 反应数 | 0 |
| 创建者 | @mark-os（核心维护者） |

**诉求分析**：

| 层级 | 内容 |
|:---|:---|
| **表层诉求** | 将 Linux 默认沙箱后端从"自动探测"改为 Landlock，消除启动时的 3 次外部进程探测（firejail、bwrap、docker） |
| **深层诉求** | 解决长期存在的**启动延迟**与**失败模式不可控**问题——引用历史 Issues 显示此为**复发性痛点** |
| **架构信号** | 项目正从"多后端兼容"向"内核原生安全优先"迁移，降低对外部工具链的依赖 |

> **关键引用**：*"This has caused recurring issues"* —— 明确指向该问题有多次历史回归，非偶发故障。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔶 **中** | Zig stdlib `execve` 调用失败导致子进程泄漏（僵尸进程） | PR #883 摘要 | #883 | 🟡 待合并 |
| 🔶 **中** | 沙箱后端探测时外部工具未安装/不可用时产生不必要的进程开销 | Issue #882 | #883（部分缓解） | 🟡 待合并 |

**风险评估**：

- **PR #883 的局限性**：该修复仅解决"可执行文件不存在"路径的泄漏，未覆盖 `execve` 失败的其他可能原因（权限拒绝、格式错误等）。Issue #882 提出的**完全移除探测**才是根治方案。
- **生产影响**：启动时重复创建失败子进程在容器化/无特权环境中尤为突出，可能影响 Serverless 场景下的冷启动时间。

---

## 6. 功能请求与路线图信号

| 信号来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| Issue #882 | Linux 默认沙箱后端改为 Landlock | 🔵 **高** | 维护者自提 + 配套 PR 已部分实现 + 明确引用历史问题 |
| Issue #882 | 停止启动时探测外部工具 | 🟡 **中** | 架构方向明确，但涉及向后兼容性，需渐进式迁移 |

**路线图推断**：

```
当前状态：auto 默认 → 探测 firejail → bwrap → docker → fallback
目标状态：auto 默认 → Landlock（Linux）/ 平台原生机制 → 可选 opt-in 外部工具
```

- **下一版本（推测）**：可能引入 `sandbox.backend: "landlock"` 作为显式选项，随后切换默认。
- **PR #883 的角色**：作为过渡期的可靠性补丁，为默认切换降低风险。

---

## 7. 用户反馈摘要

> ⚠️ **说明**：今日无外部用户评论，以下为从维护者技术文档中提炼的**隐含用户场景与痛点**。

| 维度 | 内容 |
|:---|:---|
| **隐含用户场景** | 在 CI/CD 管道、容器环境、最小化 Linux 发行版中运行 NullClaw |
| **核心痛点** | 启动时无条件探测未安装的工具（如 `firejail`、`docker`），造成：① 延迟 ② 日志污染 ③ 安全审计噪音 |
| **满意之处** | 项目对安全沙箱的多后端支持策略（历史积累） |
| **不满之处** | "自动"默认行为的**不可预测性**——用户无法预知实际生效的沙箱机制 |
| **期望行为** | 明确、可预期的默认安全策略，优先使用内核原生能力（Landlock）而非外部依赖 |

---

## 8. 待处理积压

| 项目 | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| PR #883 | 2026-05-03 | 🟡 待合并 | **建议 24-48h 内审阅合并**，作为 Issue #882 的关联修复，延迟将阻塞后续 Landlock 默认切换工作 |

**维护者关注建议**：

1. **短期**：合并 PR #883，发布 patch 版本缓解已知泄漏问题
2. **中期**：在 Issue #882 中明确 Landlock 默认切换的时间表与兼容性策略（是否保留 `auto` 作为显式兼容选项？）
3. **长期**：评估是否彻底移除启动探测机制，改为按需延迟初始化或配置显式声明

---

> **数据置信度**：高（原始数据完整，无外部贡献者噪声）  
> **下次更新建议**：关注 PR #883 合并状态及 Issue #882 是否有关闭或里程碑分配动作

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-04

## 1. 今日速览

IronClaw 今日呈现**高强度架构冲刺与关键 Bug 修复并行**的态势。过去 24 小时 Issues 活跃度极高（20 条更新，其中 19 条为新建/活跃），PR 管线压力显著（25 条更新，22 条待合并）。核心焦点集中在两大战线：一是 **Reborn 架构的系统性落地**——PR #3230 正将 Reborn  substrate 合并入主分支，配套 10+ 个架构定义 Issue 同步推进；二是 **生产稳定性紧急修复**——Gemini 工具调用 thought_signature 丢失问题（Issue #3225 / PR #3226）和 LLM 配置持久化 Bug（Issue #3229）被快速识别并部分修复。社区贡献者 thomasmaerz 单日提交 5 个高质量 Issue，反映出 v0.27.0 版本在实际部署中的边缘场景暴露。整体健康度：**架构前瞻性强，但生产稳定性债务需持续关注**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#3226](https://github.com/nearai/ironclaw/pull/3226) | thomasmaerz | **已关闭** | **修复 Gemini thought_signature 在 OpenAI 兼容工具循环中丢失**——补充 `ToolCall` 可选字段，在 Gemini 适配器中捕获并回放 `thoughtSignature`，覆盖第二轮工具调用回归场景。直接解决 Issue #3225 的根因，但 Issue #3214 揭示此前 #1565、#1752 的修复并不完整，需持续关注上游协议对齐。 |
| [#3234](https://github.com/nearai/ironclaw/pull/3234) | ilblackdragon | **已关闭** | **CI 修复**：替换被删除的 preflight 测试为 `tool_activate` 表面测试，解决 #2868 合并后 E2E 工作流引用失效问题。 |
| [#3170](https://github.com/nearai/ironclaw/pull/3170) | serrrfirat | **已关闭** | **Reborn 测试加固**：在 `reborn-integration` 最新基线上重设 HostRuntime 垂直门控覆盖，新增持久化重放游标/间隙行为、作用域挂载衰减等调用级验证。 |

### 🚀 待合并的战略级 PR

| PR | 作者 | 规模 | 里程碑意义 |
|:---|:---|:---|:---|
| [#3230](https://github.com/nearai/ironclaw/pull/3230) | serrrfirat | **XL** | **Reborn substrate 入主分支**——当前 Reborn 集成分支合并入 `main`，默认关闭（需显式启用）。包含 DB 迁移，是 Reborn 从长期分支走向可渐进交付的关键一步，直接降低分支漂移风险。 |
| [#3233](https://github.com/nearai/ironclaw/pull/3233) | ilblackdragon | **L** | **无头服务器 WASM 通道激活**——修复 `ironclaw run` 无设置 DB/无 Web UI 时，Telegram 等 WASM 通道静默不启动的问题，对自动化/服务器部署场景至关重要。 |
| [#3218](https://github.com/nearai/ironclaw/pull/3218) | abbyshekit | **XL** | **NEAR Intents 试验模式**——引入小额 NEAR 意图排练、DripStack 免费目录获取、付费边界确认等，连接链上意图与对话式 UX。 |
| [#3223](https://github.com/nearai/ironclaw/pull/3223) / [#3224](https://github.com/nearai/ironclaw/pull/3224) | abbyshekit | **XL** | **DCA 定投使命脚手架**——从单资产扩展到多资产篮子 DCA，完整闭环：意图文档 → cron 表达式 + 安全护栏 + YAML 配置，是 IronClaw 作为"自主金融代理"的核心能力扩展。 |

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#3016](https://github.com/nearai/ironclaw/issues/3016) `AgentLoopHost facade` | **3 评论** | Reborn 架构核心阻塞点，定义宿主层循环协调的参考门面。评论围绕与 #2987 架构追踪器的依赖关系展开，体现核心团队对"循环由谁驱动、边界在哪里"的深层设计博弈。 |
| 2 | [#3013](https://github.com/nearai/ironclaw/issues/3013) `TurnCoordinator` | **1 评论** | 同作者 serrrfirat 的配套议题，聚焦线程/轮次准入控制与单活跃运行强制。与 #3016 形成"门面-内核"设计对，反映 Reborn 执行模型的权力分配架构。 |
| 3 | [#3225](https://github.com/nearai/ironclaw/issues/3225) / [#3214](https://github.com/nearai/ironclaw/issues/3214) Gemini thought_signature | **各 1 评论** | **生产痛点爆发**：thomasmaerz 连续报告 Gemini 3.x 工具调用在第二轮失败，揭示 OpenAI 兼容层与原生 Gemini 协议的语义鸿沟。Issue #3214 尖锐指出此前两次"修复"实为表面修补，上游根因从未解决——这是对项目技术债管理质量的公开质疑。 |

### 诉求背后的模式

- **架构层**：serrrfirat 单日创建 8 个 Reborn 子议题，显示"大设计先行、小 PR 跟进"的意图，但社区参与度极低（全部 0 👍），存在**架构设计与社区共识脱节**的风险。
- **稳定层**：thomasmaerz 的 5 个 Issue 全部来自 v0.27.0 实际部署（LXC/Debian/无头环境），代表**边缘基础设施场景的用户声音被系统性低估**——TUI 剪贴板、终端鼠标追踪、配置持久化等"开发者体验"问题在核心功能优先的排期中积压。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 环境 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#3229](https://github.com/nearai/ironclaw/issues/3229) | LLM Provider 回退配置**持久化写入 DB**，重启后永久覆盖用户原始配置 | LXC, libSQL, v0.27.0 | **无** | 待修复 |
| 🟠 **High** | [#3228](https://github.com/nearai/ironclaw/issues/3228) | `/quit` 后终端鼠标追踪**仅部分禁用**，SSH/noVNC/screen/tmux 会话字符损坏 | LXC, Debian trixie, `TERM=xterm-256color` | **无** | 待修复 |
| 🟠 **High** | [#3225](https://github.com/nearai/ironclaw/issues/3225) | Gemini `gemini-3.1-flash-lite-preview` 第二轮工具调用 HTTP 400 `INVALID_ARGUMENT` | API key auth, fresh deploy | [#3226](https://github.com/nearai/ironclaw/pull/3226) | **已关闭，但 #3214 揭示修复可能不完整** |
| 🟡 **Medium** | [#3227](https://github.com/nearai/ironclaw/issues/3227) | TUI 文本复制在无 X11/Wayland 环境静默失败（`arboard` 依赖图形后端） | Headless LXC, SSH/noVNC | **无** | 待修复 |
| 🟡 **Medium** | [#3201](https://github.com/nearai/ironclaw/issues/3201) | DeepSeek `deepseek-v4-flash` 工具调用完全失效 | Local clone, 93c7d6a4 | **无** | 待修复 |

### 回归风险警示

- **Issue #3214** 明确指出：Gemini thought_signature 问题在 #1565、#1752 中被"关闭为已修复"，但根因（Cloud Code SSE handler 中的协议转换）从未真正解决。这是**"关闭-复发"模式的典型案例**，建议维护团队建立"修复验证-根因追踪"的闭环机制。

---

## 6. 功能请求与路线图信号

### Reborn 架构密集定义（默认下一版本核心）

| Issue | 主题 | 与 #3230 关系 | 纳入概率 |
|:---|:---|:---|:---|
| [#3238](https://github.com/nearai/ironclaw/issues/3238) | 取消语义全定义（状态机、围栏、恢复） | substrate 后深化 | 高 |
| [#3237](https://github.com/nearai/ironclaw/issues/3237) | Runtime HTTP 系统调用合约（共享出口） | 已有服务，需契约化 | 高 |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) | 同线程跟进与转向策略（`/btw` 等） | 用户体验关键 | 中高 |
| [#3232](https://github.com/nearai/ironclaw/issues/3232) | `LoopExit` 合约 | 循环生命周期 | 高 |
| [#3202](https://github.com/nearai/ironclaw/issues/3202) / [#3199](https://github.com/nearai/ironclaw/issues/3199) / [#3198](https://github.com/nearai/ironclaw/issues/3198) / [#3195](https://github.com/nearai/ironclaw/issues/3195) | Turn 持久化、TurnRunner 执行模型、公共 API、`ironclaw_turns` crate 边界 | 核心基础设施 | 极高（#3230 已含） |

### 用户驱动的新功能信号

| 来源 | 信号 | 判断 |
|:---|:---|:---|
| PR [#1549](https://github.com/nearai/ironclaw/pull/1549) Slack Socket Mode | NAT 友好连接，WASM 模块零改动 | **可能纳入**：解决企业内网部署痛点，设计干净（host 管连接生命周期，WASM 无感知） |
| PR [#3218](https://github.com/nearai/ironclaw/pull/3218) + [#3223](https://github.com/nearai/ironclaw/pull/3223)/[#3224](https://github.com/nearai/ironclaw/pull/3224) NEAR Intents/DCA | 链上金融意图的原生对话式封装 | **路线图核心**：abbyshekit 连续贡献，与 IronClaw "自主代理"定位高度契合，但依赖外部协议稳定性 |

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 描述与复现步骤）

| 用户场景 | 痛点 | 情绪信号 |
|:---|:---|:---|
| **无头服务器部署**（thomasmaerz, LXC/Debian） | "fresh install"后配置被静默覆盖、通道不启动、TUI 复制不可用、终端退出后损坏 | **挫败感强**：多次使用 "silently" 描述失败，强调"高严重度" |
| **多模型供应商切换** | Gemini 3.x 系列在 OpenAI 兼容层下系统性工具调用失败，DeepSeek 完全不可用 | **信任损耗**：#3214 直言"prior fixes incomplete"，质疑修复质量 |
| **远程/多路复用终端工作流** | SSH + noVNC + screen/tmux 是标准开发环境，但鼠标追踪清理不完整导致终端不可用 | **被忽视感**：明确列出四种访问方式"全部受影响"，暗示测试覆盖缺口 |

### 满意点

- PR #3226 的快速响应（当日创建当日关闭）显示**关键生产问题仍有快速通道**。
- Reborn 架构的文档化程度（每个 Issue 含 Parent/Tracker 链接网络）体现**长期技术规划的可追溯性**。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#1549](https://github.com/nearai/ironclaw/pull/1549) Slack Socket Mode | 2026-03-21 | 2026-05-03 | **43 天** | XL 规模，新贡献者，评论 undefined（可能为数据缺失或实际零评论）。NAT 友好连接是企业采用的关键差异化功能，长期悬置可能导致贡献者流失。 |
| [#2973](https://github.com/nearai/ironclaw/pull/2973) Dependabot 39 依赖更新 | 2026-04-26 | 2026-05-03 | 8 天 | "everything-else" 组批量更新，含 `agent-client-protocol` 0.10→0.11 等潜在 Breaking Change，阻塞其他依赖 PR 的基线刷新。 |
| [#2972](https://github.com/nearai/ironclaw/pull/2972) wasmtime 43→44 | 2026-04-26 | 2026-05-03 | 8 天 | WASM 运行时大版本升级，与 Reborn 的 WASM 通道策略（#3233）存在交互风险，需协调测试。 |
| [#3201](https://github.com/nearai/ironclaw/issues/3201) DeepSeek 工具调用失效 | 2026-05-02 | 2026-05-03 | 2 天 | 虽新但**零评论零互动**，且 DeepSeek 是国产模型生态的重要节点，沉默处理将损害区域采用。 |

---

**日报生成时间**：2026-05-04  
**数据基线**：GitHub API 2026-05-03 24h 窗口

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-04

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **分析日期**: 2026-05-04  
> **数据周期**: 过去 24 小时（2026-05-03 至 2026-05-04）

---

## 1. 今日速览

LobsterAI 今日活跃度**偏低**，社区以存量 PR 的被动更新为主，缺乏实质性代码合并。两条 PR 均因长期未获审阅被标记为 `[stale]` 后于昨日触发更新，但未见维护者介入；唯一新 Issue 提出 Agent 生态扩展诉求，反映出用户对第三方 Agent 集成的迫切期待。整体项目处于**维护停滞期**，核心代码线近 40 天无合并记录，社区贡献者耐心正被消耗。

---

## 2. 版本发布

**无新版本发布。**

最近一次 Release 需追溯至更早周期，建议关注者订阅仓库 Release Watch 获取通知。

---

## 3. 项目进展

**今日无 PR 被合并或关闭。**

两条处于 `[stale]` 状态的 PR 于昨日被系统或作者触发更新，但均未进入代码审查流程：

| PR | 状态 | 核心改进 | 停滞天数 |
|:---|:---|:---|:---|
| [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | `[stale]` OPEN | SQLite 同步写入防抖 + 异步化，缓解 Electron 主线程阻塞 | **39 天** |
| [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | `[stale]` OPEN | Skill 执行统计分析 + SkillsManager UI 弹窗展示 | **39 天** |

**进展评估**：两项均为性能优化与可观测性增强的重要贡献，但自 3 月 25 日创建以来零审阅反馈，项目在技术债务治理和功能迭代上**零推进**。

---

## 4. 社区热点

### 🔥 最热讨论：Hermes Agent 集成请求
- **Issue [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880)** | 作者: [@ecolife007](https://github.com/ecolife007) | 👍: 0 | 评论: 0

**诉求分析**：用户明确要求对标 [Open WebUI 的 Agent 连接能力](https://docs.openwebui.com/getting-started/quick-start/connect-an-agent/)，将 **Hermes Agent** 与 **OpenClaw** 作为外部 Agent 接入 LobsterAI。这释放出两个关键信号：
1. **生态开放性焦虑**：用户希望 LobsterAI 从封闭工具链转向可插拔 Agent 架构，避免被单一技术栈锁定
2. **对标压力**：Open WebUI 已成为开源 LLM 前端的事实标准之一，LobsterAI 在 Agent 生态灵活性上存在代差

> 注：该 Issue 零互动（0 评论/0 反应），反映社区参与度不足或用户已习惯"提出即沉默"的项目氛围。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告。**

| 相关项 | 类型 | 严重程度 | 状态 | 说明 |
|:---|:---|:---|:---|:---|
| [#562](https://github.com/netease-youdao/LobsterAI/issues/562)（关联 PR #812） | 性能退化/主线程阻塞 | **高** | ❌ 无 fix 合并 | SQLite 同步写盘导致 Electron 卡顿，PR #812 已提供完整方案但悬置 39 天 |

**风险评估**：PR #812 解决的 Issue #562 属于**影响所有桌面端用户的性能瓶颈**，长期未合并意味着：
- 用户持续承受 streaming 过程中的 UI 冻结
- 贡献者 @noransu 的优化工作被浪费，可能降低后续贡献意愿

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 与现有 PR 关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [Issue #1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | 外部 Agent 接入（Hermes/OpenClaw） | 无直接关联 PR | ⚠️ **低** — 需架构层改造，但无维护者回应 |
| [PR #871](https://github.com/netease-youdao/LobsterAI/pull/871) | Skill 执行统计/可观测性 | 自身即为实现 | ⚠️ **中低** — 功能完整但缺乏审阅，作者 @tiamy 已提供 UI 截图 |

**路线图推断**：项目当前无可见的公开路线图（Roadmap）。两条 `[stale]` PR 均涉及工程体验优化（性能 + 可观测性），属于成熟项目的基础建设，但维护优先级似乎低于新功能开发——然而新功能开发同样停滞，形成**"双停滞"困局**。

---

## 7. 用户反馈摘要

基于今日有限数据，提炼以下信号：

| 维度 | 反馈内容 | 来源 |
|:---|:---|:---|
| **痛点** | SQLite 同步写入导致卡顿，影响 streaming 体验 | PR #812 摘要（Issue #562 用户诉求） |
| **期望** | 希望 LobsterAI 支持主流 Agent 生态（Hermes/OpenClaw），降低集成门槛 | Issue #1880 |
| **隐性不满** | 贡献者 PR 长期无回应，社区活力衰减 | PR #812、#871 的 `[stale]` 标签 |
| **使用场景** | Skill 高频调用后的效果追踪与优化（开发者/高级用户） | PR #871 功能设计 |

> **关键洞察**：用户/贡献者正在用"对标竞品"（Open WebUI）和"自行提交 PR"两种方式推动项目，但维护层的响应缺位正在消耗社区信任资本。

---

## 8. 待处理积压

### 🚨 需维护者紧急关注

| 类型 | 编号 | 标题 | 创建日期 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|:---|:---|
| PR | [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | perf(sqlite): debounce save() 并缓存 getConfig() | 2026-03-25 | 2026-05-03 | **39 天无审阅**，性能问题直接影响用户体验，解决方案完整且已验证 |
| PR | [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | feat(skills): 新增 skill 执行统计展示 | 2026-03-25 | 2026-05-03 | **39 天无审阅**，功能完整含 UI，贡献者 @tiamy 可能流失 |

### 建议行动
1. **优先审阅 #812**：合并成本低（纯优化、有 Issue 关联、测试覆盖可见），收益明确
2. **评估 #871 产品契合度**：Skill 统计是否为官方规划方向？需明确 yes/no 避免贡献者空等
3. **回应 #1880**：即使暂不支持 Agent 接入，也需声明立场以管理社区预期

---

## 附录：数据健康度仪表盘

| 指标 | 数值 | 健康度 |
|:---|:---|:---|
| 24h Issue 新建 | 1 | ⚠️ 偏低 |
| 24h PR 合并 | 0 | 🔴 停滞 |
| 平均 PR 审阅响应时间 | >39 天 | 🔴 严重滞后 |
| 社区互动率（Issue #1880） | 0% | 🔴 沉默 |
| `[stale]` PR 占比（活跃 PR 中） | 100%（2/2）| 🔴 极高 |

---

*本日报基于 GitHub 公开数据生成，不构成投资建议。如需订阅或反馈，请联系项目维护团队。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-04

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-05-04（覆盖过去24小时：2026-05-03 至 2026-05-04）

---

## 1. 今日速览

Moltis 今日保持**低活跃度的稳定维护状态**。社区贡献 2 个待合并 PR 和 1 个新 Bug 报告，无版本发布。两位贡献者（`penso`、`Cstewart-HC`）推动工作，显示核心维护者持续活跃但社区参与度有限。整体健康度**平稳**，无阻塞性风险，但 PR 积压需注意及时审阅以避免贡献者流失。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日 **0 个 PR 合并/关闭**，2 个 PR 处于待合并状态，项目代码库未发生主干更新。待合并 PR 涉及以下方向：

| PR | 贡献者 | 进展方向 | 状态 |
|:---|:---|:---|:---|
| [#962 Update local TTS provider docs](https://github.com/moltis-org/moltis/pull/962) | penso | 文档维护：更新 Piper/Coqui TTS 本地提供商文档，指向活跃维护的社区 fork 和最新资源 | ⏳ 待合并 |
| [#961 fix(providers): replay DeepSeek reasoning content](https://github.com/moltis-org/moltis/pull/961) | penso | 功能修复：保留并回放 DeepSeek 推理内容，修复持久化聊天记录中的 reasoning 丢失问题 | ⏳ 待合并 |

**整体推进评估**：今日无代码入主干，但 `penso` 的 PR #961 涉及核心提供商兼容性问题（DeepSeek V4 推理链），合并后将提升多模型支持的稳定性；PR #962 为文档债清理，降低新用户接入本地 TTS 的门槛。

---

## 4. 社区热点

| 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|
| [#963 Tool calls with malformed or empty arguments collapse to missing required fields](https://github.com/moltis-org/moltis/issues/963) | 👍 0, 💬 0 | **新发 Bug 报告**，尚未引发讨论 |
| [#962 Update local TTS provider docs](https://github.com/moltis-org/moltis/pull/962) | 👍 0, 💬 undefined | 文档更新，技术债清理 |
| [#961 fix(providers): replay DeepSeek reasoning content](https://github.com/moltis-org/moltis/pull/961) | 👍 0, 💬 undefined | 推理内容兼容性修复，关联 #959 |

**诉求分析**：社区当前最紧迫诉求集中在 **AI 提供商兼容性**（DeepSeek 推理链持久化）和 **工具调用稳定性**（#963 的 schema 验证失败）。TTS 文档更新反映本地部署场景的用户需求仍在增长。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 修复状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#963](https://github.com/moltis-org/moltis/issues/963) | **工具调用参数解析失败**：`exec` 工具调用间歇性因 `missing=command` 被 runner 前置拒绝，发生在 `ExecTool.execute()` 和 `BeforeToolCall` hooks 之前，属 schema 验证层问题。影响：模型已激活工具但无法执行，阻断 agent 工作流 | ❌ **无 fix PR** |
| 🟡 中 | — | （无其他 Bug 报告） | — |

**风险评估**：#963 为**运行时阻断问题**，影响 agent 执行可靠性。需关注是否为模型输出格式变更（如空参数 `{}` 或畸形 JSON）导致 schema 验证严格拒绝，建议维护者优先复现并评估是否需放宽预检或增强参数容错。

---

## 6. 功能请求与路线图信号

| 信号来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| PR #961 | DeepSeek/OpenAI-compatible 推理内容回放 | **高** — 已提交完整实现含回归测试，属提供商兼容性刚需 |
| PR #962 | 本地 TTS 文档现代化（Piper/Coqui） | **高** — 低风险文档债，维护者 `penso` 自提自审可能快速合并 |
| Issue #963（隐含） | 工具调用参数容错/调试能力 | **待评估** — 若确认为系统性问题，可能需增强 schema 验证日志或参数补全机制 |

**路线图判断**：近期版本 likely 聚焦 **多模型提供商兼容性**（DeepSeek、OpenAI 推理协议）和 **本地部署体验优化**（TTS、文档）。

---

## 7. 用户反馈摘要

> 基于今日有限 Issue 内容提炼

| 维度 | 反馈 |
|:---|:---|
| **痛点** | 工具调用链的可靠性：模型已"决定"执行工具，却因参数层技术细节失败，用户难以诊断（#963 中 "Intermittent" 暗示不可预测性） |
| **使用场景** | 本地 TTS 部署（Piper、Coqui）持续有用户关注，社区 fork 替代官方废弃项目的文档需及时同步 |
| **深层诉求** | DeepSeek 等国产/新兴模型的完整能力支持（推理链可见性），用户期望 Moltis 作为抽象层能无损传递提供商特色功能 |
| **满意度信号** | `penso` 作为维护者快速响应 #958/#959 并提交修复，显示项目维护节奏健康 |

---

## 8. 待处理积压

| 条目 | 等待时长 | 提醒原因 |
|:---|:---|:---|
| [#961](https://github.com/moltis-org/moltis/pull/961) | ~1 天 | 含回归测试的提供商修复，建议优先审阅合并以避免 DeepSeek 用户持续遭遇 reasoning 丢失 |
| [#962](https://github.com/moltis-org/moltis/pull/962) | ~1 天 | 文档更新零风险，可快速合并释放维护者注意力 |
| [#963](https://github.com/moltis-org/moltis/issues/963) | 新开 | 需维护者确认是否为已知问题，或关联现有 schema 验证相关 Issue |

---

> **日报生成说明**：基于 GitHub 公开数据自动分析，未包含私有讨论或分支提交。建议维护者关注 #963 的复现细节补充请求。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-04

> **数据周期**：2026-05-03 00:00 - 2026-05-03 23:59 UTC+8  
> **项目**：agentscope-ai/CoPaw（原 QwenPaw）

---

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24 小时内产生 **32 条 Issue 动态**（21 活跃/新开，11 关闭）与 **16 条 PR 动态**（11 待合并，5 已合并/关闭），无新版本发布。社区讨论集中在**记忆系统稳定性**、**多智能体隔离机制**、**桌面端用户体验**三大主题。值得注意的是，今日有 3 个长期 Issue（#2430、#3019、#3944）获得新评论，显示维护团队正在清理历史积压。首次贡献者参与活跃，5 个 PR 标记为 `first-time-contributor`，项目生态吸引力持续增强。

---

## 2. 版本发布

**无新版本发布**

- 最新版本仍为 **v1.1.5**（2026-04-30 前后发布）
- PR #4012 `[chore(version): bumping version to 1.1.6b1]` 于今日关闭，版本升级工作可能仍在内部测试中，未正式推出版本标签

---

## 3. 项目进展

### 今日已合并/关闭的 PR（5 条）

| PR | 作者 | 类型 | 进展说明 |
|:---|:---|:---|:---|
| [#4013](https://github.com/agentscope-ai/QwenPaw/pull/4013) | xieyxclack | 文档更新 | v1.1.5 官方文档同步完成，降低新版本上手门槛 |
| [#4012](https://github.com/agentscope-ai/QwenPaw/pull/4012) | xieyxclack | 版本升级 | v1.1.6b1 内部版本升级（已关闭，未发布） |
| [#1642](https://github.com/agentscope-ai/QwenPaw/pull/1642) | xieyxclack | 功能特性 | **错误码体系**正式合入，为全链路可观测性奠基 |
| [#1055](https://github.com/agentscope-ai/QwenPaw/pull/1055) | ximiximi423 | 功能特性 | **MiniMax 内置提供商**上线，扩展国产模型支持矩阵 |
| [#559](https://github.com/agentscope-ai/QwenPaw/pull/559) | beiyu | Bug 修复 | **会话污染防护**：异常查询的用户消息不再持久化到记忆，解决 #557 根因 |

**关键里程碑**：错误码体系（#1642）与 MiniMax 支持（#1055）的合入，标志着 CoPaw 在**企业级可运维性**和**国产模型生态适配**上取得实质性进展。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) **智能体工作空间隔离机制** | 8 | **多租户安全刚需**：用户要求智能体间文件系统完全隔离，当前黑名单机制无法满足细粒度权限控制 |
| 2 | [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) **Telegram 语音消息处理崩溃** | 5 | **渠道兼容性**：`AudioContent` 未在 Telegram 管道正确转换，语音交互场景阻断 |
| 3 | [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) **记忆管理上下文丢失** | 4 | **核心功能稳定性**：`memory_search` 因类型错误崩溃，list 对象被误用为 dict |
| 4 | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) **FunctionCallOutput 校验失败 + 配置损坏** | 3 | **数据完整性**：`call_id` 为 None 触发 Pydantic 校验错误，连带破坏 `loop_config.json` |
| 5 | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) **Ollama 对话历史丢失** | 3 | **本地模型体验**：Ollama 渠道上下文携带失败，与在线 API 表现不一致 |

**诉求洞察**：#3936 的 8 条评论反映出企业用户对**安全隔离**的强烈需求——当前"文件防护"是全局黑名单，用户需要**白名单+按智能体配置**的能力。这与今日新 Issue #4020（MEMORY/AGENTS/SOUL 文件只读保护）形成呼应，显示**多智能体安全治理**正成为社区共识性痛点。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排列

| 严重度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **P0-崩溃/数据丢失** | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | `FunctionCallOutput` 校验失败导致 `loop_config.json` 损坏，配置持久化失效 | ❌ 无 |
| **P0-核心功能阻断** | [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) | `memory_search` 类型错误，记忆检索完全不可用 | ❌ 无 |
| **P1-渠道功能缺失** | [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | Telegram 语音消息无法处理，`AudioContent` 管道缺失 | ❌ 无（PR #4021 修复相关 `file://` URL 处理，可能部分关联） |
| **P1-配置回归** | [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) | `qwenpaw update` 后 `embedding_model_config` 被重置为空，向量搜索失效 | ❌ 无 |
| **P1-网络恢复失败** | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | HEARTBEAT.md 开启时网络中断后渠道无法自动重连 | ❌ 无 |
| **P2-会话异常终止** | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | 多轮对话后 agent 停止响应 | ✅ 已关闭（未标注修复方式） |
| **P2-空闲清理误杀** | [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | UnifiedQueueManager 600秒超时误将运行中任务标记为空闲 | ❌ 无 |

**稳定性信号**：今日关闭的 #559 修复了"异常消息污染记忆"的隐患，但**记忆系统**仍是重灾区——#3977、#4018、#4007（PR 待合并）均指向记忆相关模块的可靠性问题。PR #4007 同时修复 #3182（向量索引未构建）和 #3828（配置同步失败），建议优先审阅合并。

---

## 6. 功能请求与路线图信号

### 今日新提交的功能请求（5 条）

| Issue | 需求 | 与现有 PR 关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#4022](https://github.com/agentscope-ai/QwenPaw/issues/4022) 工作区配置文件子目录化 | 配置管理结构化 | 无 | ⭐⭐⭐ 高（架构清理，低风险） |
| [#4020](https://github.com/agentscope-ai/QwenPaw/issues/4020) 核心文件工具层只读保护 | 安全加固 | 无 | ⭐⭐⭐ 高（与 #3936 安全诉求一致） |
| [#4019](https://github.com/agentscope-ai/QwenPaw/issues/4019) 类 Codex 中途引导功能 | 交互式任务控制 | 社区原型已验证 | ⭐⭐ 中（需产品化评估） |
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) Fallback 模型降级 | 高可用架构 | 无 | ⭐⭐⭐ 高（企业刚需，#4004 上下文自适应可协同） |
| [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) 单条消息手动删除 | 对话管理体验 | 无 | ⭐⭐ 中（体验优化，非阻断） |

### 待合并 PR 中的功能信号

| PR | 功能 | 状态 |
|:---|:---|:---|
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) 火山引擎提供商 + Coding Plan | Under Review | 国产云生态扩展 |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) 巴西葡萄牙语本地化 | Under Review | 国际化推进 |
| [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) MemoryHook 长期记忆增强 | 待合并 | **记忆系统重大改进** |
| [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) GPT Image 2 工具插件 | 待合并 | 多模态能力扩展 |

**路线图判断**：**记忆系统重构**是最大公约数——#4007 的 MemoryHook + #4018 的配置持久化修复 + #3977/#3182 的崩溃修复，建议打包为 **v1.1.6 核心主题**。安全隔离（#3936/#4020）和模型降级（#4011）是企业级必备，可纳入 v1.2 规划。

---

## 7. 用户反馈摘要

### 💬 真实痛点（来自 Issue 评论提炼）

| 痛点 | 来源 | 典型场景 |
|:---|:---|:---|
| **"关闭窗口=服务停止"** | [#2430](https://github.com/agentscope-ai/QwenPaw/issues/2430), [#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979) | Windows 用户期望托盘后台运行，每次重启丢失会话状态 |
| **"更新后配置清零"** | [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) | `qwenpaw update` 重置 embedding 配置，向量搜索突然失效 |
| **"本地模型二等公民"** | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991), [#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003) | Ollama 上下文丢失、ARM Mac 子进程架构错误（Rosetta 问题） |
| **"系统对话污染记忆"** | [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | 心跳/定时任务被 Auto-Memory 积累为"经验"，记忆质量下降 |
| **"渠道端无法控制"** | [#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010) | 飞书/微信端无法打断长时间运行的 agent |

### 😊 满意点

- MiniMax 提供商支持（#1055 合入）获社区认可
- 错误码体系（#1642）提升问题定位效率
- 技能卸载编码修复（#3019 有临时方案）显示响应速度

---

## 8. 待处理积压

### ⚠️ 需要维护者重点关注

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险 |
|:---|:---|:---|:---|:---|
| [#2430](https://github.com/agentscope-ai/QwenPaw/issues/2430) 系统托盘功能 | 2026-03-27 | 今日 | **37 天** | 高频诉求，体验阻断，有社区 PR 潜力 |
| [#3019](https://github.com/agentscope-ai/QwenPaw/issues/3019) skill.json 编码损坏 | 2026-04-07 | 今日 | **26 天** | 中文用户阻断性问题，PR #4016 可能相关 |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) Telegram 语音支持 | 2026-03-15 | 今日 | **49 天** | 渠道兼容性缺口，PR #4021 部分关联 |
| [#3928](https://github.com/agentscope-ai/QwenPaw/pull/3928) delegate_external_agent 超时安全 | 2026-04-28 | 今日 | 5 天 | **Under Review**，防止无限等待的关键修复 |
| [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) MemoryHook + 双 Bug 修复 | 2026-05-02 | 今日 | 1 天 | **建议优先合并**：同时修复 #3182/#3828，影响记忆核心链路 |

**维护建议**：#2430 和 #1516 已分别积压 37 天和 49 天，虽今日有新评论但无明确排期，建议维护者标注 `help wanted` 或 `good first issue` 引导社区贡献。PR #4007 涉及记忆系统根基，建议加速审阅以避免更多用户遭遇 #3977/#4018 类问题。

---

> **日报生成时间**：2026-05-04 00:00 UTC+8  
> **数据置信度**：基于 GitHub 公开 API 数据，Issue/PR 链接可直接访问验证

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-04

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-05-04（数据截止：2026-05-03）  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

今日 ZeptoClaw 展现**高强度维护活跃度**，24小时内处理 **22 个 PR**（合并/关闭 19 个，待合并 3 个）并更新 **5 个 Issue**（4 个活跃，1 个关闭）。核心信号是项目正从"功能扩展期"转向**架构深化期**：middleware 框架（#399 系列）完成 Phase 1 落地，同时启动"Hermes Agent 自改进循环"三阶段 adoption（#567-#569）。依赖维护由 Dependabot 全自动化处理，无版本发布。整体健康度良好，但需关注文档定位校准（#565/#570）与自改进循环的技术债务风险。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔧 核心架构：Middleware 框架 Phase 1 完成

| PR | 状态 | 说明 | 链接 |
|:---|:---|:---|:---|
| [#564](https://github.com/qhkm/zeptoclaw/pull/564) | **已关闭** | Middleware 框架 + 11 个实现落地，`src/agent/middleware/` 下新增代码，**未接入 agent 循环**（additive only） | [PR #564](https://github.com/qhkm/zeptoclaw/pull/564) |
| [#404](https://github.com/qhkm/zeptoclaw/pull/404) | 已关闭 | 原 scaffolding PR，被 #564 取代清理 | [PR #404](https://github.com/qhkm/zeptoclaw/pull/404) |

**技术意义**：这是 #399 长期计划的首个里程碑。11 个 middleware 实现覆盖工具执行前后的横切关注点（日志、重试、权限、遥测等），为后续 agent 循环重构提供插桩点。当前"只添加不接入"的策略降低了回归风险，但意味着**实际价值尚未释放**——需跟踪 Phase 2 的集成时间表。

### 🔄 自改进循环（Hermes Agent Pattern）启动

| Issue | 阶段 | 目标 | 链接 |
|:---|:---|:---|:---|
| [#567](https://github.com/qhkm/zeptoclaw/issues/567) | Phase 1 | `skill_manage` 工具：agent 可 CRUD 自身 skills | [Issue #567](https://github.com/qhkm/zeptoclaw/issues/567) |
| [#569](https://github.com/qhkm/zeptoclaw/issues/569) | Phase 1.5 | `longterm_memory` 工具描述加入 trigger-phrase 引导 | [Issue #569](https://github.com/qhkm/zeptoclaw/issues/569) |
| [#568](https://github.com/qhkm/zeptoclaw/issues/568) | Phase 2 | 技能使用遥测 sidecar (`.usage.json`) | [Issue #568](https://github.com/qhkm/zeptoclaw/issues/568) |

**对应 PR**：
- [#571](https://github.com/qhkm/zeptoclaw/pull/571) 已实现 Phase 1.5 的 trigger-phrase 引导 + doc-test 防护（待合并）
- [#570](https://github.com/qhkm/zeptoclaw/pull/570) 文档定位校准（待合并）

### 📝 文档校准

| PR | 状态 | 说明 | 链接 |
|:---|:---|:---|:---|
| [#570](https://github.com/qhkm/zeptoclaw/pull/570) | 待合并 | 关闭 #565，统一 README/Cargo/CLAUDE.md/AGENTS.md 的"local-first personal AI assistant infrastructure"定位，软化无来源的竞争对比 | [PR #570](https://github.com/qhkm/zeptoclaw/pull/570) |
| [#566](https://github.com/qhkm/zeptoclaw/pull/566) | 待合并 | AGENTS.md 数据同步：LOC ~106k → ~154k，MQTT 特性状态澄清，移除过时的 nextest blocker 注释 | [PR #566](https://github.com/qhkm/zeptoclaw/pull/566) |

### 🔒 依赖维护（Dependabot 批量处理）

19 个已关闭 PR 全部为依赖升级，覆盖：
- **Rust 生态**：tokio 1.51.1、libc 0.2.185、lettre 0.11.21、webpki-roots 1.0.7、zip 8.5.1
- **JavaScript/文档**：astro 6.1.6（两处）、@astrojs/starlight 0.38.3（两处）、vite 8.0.8
- **CI/CD**：cargo-deny-action 2.0.17、taiki-e/install-action 2.75.17、action-gh-release 3.0.0、upload-artifact 7.0.1
- **基础设施**：debian trixie-slim 镜像更新

---

## 4. 社区热点

> 注：所有 PR 评论数均显示为 `undefined`，Issues 评论数普遍为 0-2，社区讨论深度有限。以下为相对热点分析。

| 条目 | 类型 | 互动指标 | 核心诉求分析 | 链接 |
|:---|:---|:---|:---|:---|
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) | Issue | 2 评论，👍 0 | **边缘 AI 模型集成诉求**：Liquid AI 的 LFM 非 Transformer 架构（1B/3B/7B）针对端侧内存优化，LEAP SDK 支持 iOS/Android 部署。反映社区对**端侧推理能力**的迫切需求，与项目"local-first"定位高度契合。已关闭但未说明原因——需确认是已实现、搁置还是合并至其他 Issue。 | [Issue #541](https://github.com/qhkm/zeptoclaw/issues/541) |
| [#564](https://github.com/qhkm/zeptoclaw/pull/564) | PR | 架构级变更 | Middleware 框架是 #399 的奠基工作，虽无评论但技术影响力最大。11 个实现涵盖 `logging`、`retry`、`rate_limit`、`authz`、`metrics` 等，显示设计者对生产级 agent 运行时的系统性思考。 | [PR #564](https://github.com/qhkm/zeptoclaw/pull/564) |
| [#567](https://github.com/qhkm/zeptoclaw/issues/567) | Issue | 0 评论，👍 0 | **元能力（meta-capability）诉求**：agent 自我修改技能的能力是迈向自主系统的关键一步。Hermes Agent 的验证路径被明确引用，显示维护者正在积极研究竞品架构。 | [Issue #567](https://github.com/qhkm/zeptoclaw/issues/567) |

**社区活跃度评估**：🔶 **中等偏低**——代码提交活跃（qhkm 单兵作战+Dependabot），但外部贡献者互动稀少。所有 Issues/PRs 作者均为 qhkm 或 Dependabot，无社区成员参与讨论。项目处于**核心维护者驱动阶段**，尚未形成外部贡献生态。

---

## 5. Bug 与稳定性

**今日无新报告的 Bug、崩溃或回归问题**

| 观察项 | 说明 |
|:---|:---|
| 已知技术债务 | Middleware 框架（#564）当前"additive only"未接入循环，属于**可控债务** |
| 依赖风险 | 19 个依赖升级全部合并，无已知安全漏洞修复（均为常规版本迭代） |
| 测试状态 | #566 提到 `auth::oauth::tests::test_callback_server` 的 nextest blocker 已移除，测试基础设施改善 |

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Agent 自改进循环**（skill CRUD + trigger-phrase + 遥测） | #567-#569 | ⭐⭐⭐⭐⭐ **高** | 三 Issue 同日创建，已有对应 PR #571，明确标注 Phase 1/1.5/2，是**当前最高优先级功能线** |
| **边缘模型集成**（Liquid AI LFM） | #541 | ⭐⭐⭐ 中 | 与项目定位契合，但 Issue 已关闭且未关联实现 PR，可能因架构优先级调整被搁置 |
| **Middleware 框架集成至 Agent 循环** | #399 / #564 | ⭐⭐⭐⭐ 高 | Phase 1 已完成，Phase 2 集成是逻辑下一步，但未创建具体 Issue |
| **文档定位校准** | #565 | ⭐⭐⭐⭐⭐ 高 | PR #570/#566 已待合并，属即时性工作 |

**路线图推断**：短期（1-2 周）聚焦自改进循环落地 + 文档刷新；中期（1 个月）需完成 middleware 与 agent 循环的集成，否则 #564 的 11 个实现将沦为死代码。

---

## 7. 用户反馈摘要

> 由于所有 Issues/PRs 作者均为项目维护者 qhkm，**无外部用户直接反馈**。以下为从维护者自身 Issue 描述中提炼的**设计假设与痛点推断**：

| 维度 | 内容 |
|:---|:---|
| **设计痛点** | "Today, ZC skills are author-only..."（#567）—— 当前技能系统需要人工编写，agent 无法自主演化，制约了长期个性化能力 |
| **技术假设** | Hermes Agent 的"self-improving loop"被明确研究并计划 adoption，显示维护者认为**元认知能力**是下一代 personal AI 的核心差异化点 |
| **定位焦虑** | #565/#570 主动校准对比 claims、软化竞争对手描述，反映维护者对**项目声誉风险**的敏感——避免过度承诺 |
| **数据驱动诉求** | "Without telemetry there is no signal for which skills are stale, hot, or never used"（#568）—— 明确表达需要**使用数据指导技能生命周期管理** |

**满意度信号**：项目规模增长（154k LOC）且基础设施健全（CI/CD、文档站点、多语言绑定），维护者对技术底座有信心。  
**不满意信号**：技能系统的"author-only"限制、缺乏使用数据、文档与代码不同步（AGENTS.md LOC 数据滞后）。

---

## 8. 待处理积压

| 条目 | 创建时间 | 状态 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) Liquid AI 集成 | 2026-04-23 | 已关闭，无说明 | 社区可能误解为"拒绝边缘模型" | 补充关闭原因：已实现/搁置/合并至其他？ |
| [#399](https://github.com/qhkm/zeptoclaw/issues/399) Middleware 完整计划 | 较早 | Phase 1 完成，Phase 2 无 Issue | 架构债务累积 | 创建 Phase 2 集成 Issue，明确时间表 |
| PR #571, #570, #566 | 2026-05-03 | 待合并（3个） | 阻塞后续工作 | 优先审查合并，尤其 #571（有对应 Issue #569） |

---

## 附录：今日数据全景

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 5（新开/活跃 4，关闭 1） |
| PRs 更新 | 22（待合并 3，已合并/关闭 19） |
| 新版本 | 0 |
| 外部贡献者 | 0 |
| 维护者活跃 | qhkm（Issues/PRs 创建+更新）、Dependabot（19 个依赖 PR） |

---

*日报生成时间：2026-05-04*  
*数据来源：GitHub API / 项目公开信息*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-04

> **仓库**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
> **分析日期**: 2026-05-04  
> **数据周期**: 过去 24 小时（2026-05-03 至 2026-05-04）

---

## 1. 今日速览

ZeroClaw 今日呈现**高强度开发态势**：50 条 Issues 更新（42 条新开/活跃，8 条关闭）与 50 条 PR 更新（28 条待合并，22 条已合并/关闭）双双达到近期峰值，表明 v0.8.0 集成窗口与桌面端发布冲刺并行推进。社区贡献者 `theonlyhennygod` 单日批量提交 12 个 desktop/tauri 相关 Issue，标志 macOS 菜单栏应用进入**工程化收尾阶段**。核心基础设施方面，语音双工对话（#5896）的三联 PR 持续迭代，配置系统 v3 迁移（#6266）明确锁定集成分支，整体项目处于**功能冻结前的密集合入期**。

---

## 2. 版本发布

**无新版本发布。**

当前最新版本仍为此前发布版本。值得注意的是，[#6343](https://github.com/zeroclaw-labs/zeroclaw/issues/6343) 明确将桌面端功能对齐目标定为 **v0.7.7**，暗示该版本即将进入发布候选阶段。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) | theonlyhennygod | **技能系统重构**：将 first-party skills 从独立仓库迁入主仓库 `skills/` 目录，默认启用 compact 模式 | 消除多仓库同步负担，简化技能分发与版本对齐，为后续技能市场奠定基础 |
| [#5590](https://github.com/zeroclaw-labs/zeroclaw/pull/5590) | WareWolf-MoonWall | **文档 RFC #5576 Phase 2-3**：AI 辅助对齐审计与目标结构重组 | 完成文档体系从 legacy 归档到 intentional 结构的转型 |
| [#5589](https://github.com/zeroclaw-labs/zeroclaw/pull/5589) | WareWolf-MoonWall | **文档 RFC #5576 Phase 1**：当前文档树归档至 `docs/legacy/` | 为后续四阶段文档重构清理工作区 |
| [#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) | nxajh | **安全修复**：区分 `git -C` 与 `git -c`，保留大小写进行策略匹配 | 关闭 [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)，解除本地开发工作流阻塞 |

### 关键里程碑

- **语音对话基础设施**（#5896）：三联 PR [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) / [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) / [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) 全部处于待作者响应状态，能量基 VAD、PCM16 验证管道、语音捕获缓冲已就绪，等待最终集成
- **配置系统 v3**（#6266）：明确标注 `DO NOT MERGE YET`，目标 `integration/v0.8.0`，涉及渠道别名、模型-提供商别名、配置提升等破坏性变更，需协调批量合入

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **配置文档与二进制不匹配** — `config.toml` YOLO/本地测试示例使用过期的配置键 | 4 | 新手入门摩擦：文档滞后于代码，导致"按文档操作却无法运行" | [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) |
| 2 | **Shell 策略误杀 `git -C`** — 大小写归一化导致合法命令被拦截 | 3 | 安全策略过度严格影响开发效率，已修复 | [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) |
| 3 | **install.sh 未提取 Web Dashboard** — 预构建二进制安装后网关无前端 | 3 | 安装体验断裂：二进制与前端资产分离导致功能不完整 | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) |
| 4 | **self-test 硬编码 127.0.0.1** — 忽略用户配置的绑定地址 | 3 | 诊断工具不可靠，网络配置场景（Docker、远程）调试困难 | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) |

### 热点分析

- **文档-代码一致性** 成为高频痛点：[#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) 与 [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) 共同指向"配置系统演进快于文档更新"的系统性问题
- **安全策略的精确性** 引发持续讨论：[#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) 的修复（[#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939)）展示了社区对"安全不碍事"的期望

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **S1 - workflow blocked** | [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | **WebSocket 网关绕过 ApprovalManager**：监督模式下的工具审批在 Web UI 永不呈现，用户无法批准/拒绝工具调用 | 🔴 开放，待维护者评审 | 无 |
| **S1 - workflow blocked** | [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | **Fallback 提供商链忽略 `[providers.X]` 配置**：凭据和 `base_url` 仅从环境变量解析，配置文件中定义无效 | 🟡 开放，标记 `in-progress` | [#6314](https://github.com/zeroclaw-labs/zeroclaw/pull/6314)（Anthropic 部分修复）|
| **S1 - workflow blocked** | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | self-test 报告使用 127.0.0.1 而非配置值 | ✅ 已关闭 | 已修复 |
| **S2 - degraded behavior** | [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | **WhatsApp Web 自聊模式误触发**：对所有 `fromMe` 消息响应，导致代理以操作者身份向其联系人发送消息 | 🔴 开放，今日新建 | 无 |
| **S2 - degraded behavior** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | **WhatsApp Web LID 联系人绕过 allowed-numbers**：消息静默丢弃，日志仅 DEBUG 级别记录 | 🔴 开放，今日新建 | 无 |
| **S2 - degraded behavior** | [#6348](https://github.com/zeroclaw-labs/zeroclaw/issues/6348) | **Dashboard 将 tool_call 内联渲染为聊天消息**：包括错误调用也显示为气泡，干扰对话流 | 🔴 开放，今日新建 | 无 |
| **S2 - degraded behavior** | [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) | **桌面菜单栏聊天继承同上缺陷** | 🔴 开放，今日新建 | 无 |
| **S2 - degraded behavior** | [#6347](https://github.com/zeroclaw-labs/zeroclaw/issues/6347) | Telegram 频道测试在默认特性下失败 | 🔴 开放，今日新建 | 无 |

### 稳定性评估

- **WhatsApp 渠道** 今日出现两起新建 Bug（[#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)、[#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351)），均涉及身份/路由逻辑，建议优先评审
- **桌面端** 批量 Issue 中 [#6340](https://github.com/zeroclaw-labs/zeroclaw/issues/6340)（崩溃报告/ panic 捕获）尚未关联实现 PR，属发布阻塞项

---

## 6. 功能请求与路线图信号

### 高置信度纳入下一版本（v0.7.7 / v0.8.0）

| 功能 | Issue/PR | 信号强度 | 判断依据 |
|:---|:---|:---:|:---|
| **macOS 菜单栏应用** | [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) + 12 个关联 Issue | ⭐⭐⭐⭐⭐ | 工程化 Issue 批量创建（签名、公证、通用二进制、权限流），目标版本明确 |
| **语音双工对话（barge-in）** | [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) / 三联 PR | ⭐⭐⭐⭐⭐ | PR 规模 XL，作者 `hurtdidit` 持续迭代，RFC 级功能 |
| **Dashboard 在线编辑器（Persona 文件）** | [#6344](https://github.com/zeroclaw-labs/zeroclaw/issues/6344) | ⭐⭐⭐⭐☆ | 补齐 web UI 最后一块核心编辑能力，与现有 workspace 体系自然衔接 |
| **节点健康与管理 CLI** | [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) | ⭐⭐⭐⭐☆ | 继承 #2991 基础，多机部署的刚需补齐 |
| **渠道级回复节流** | [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | ⭐⭐⭐☆☆ | WhatsApp 场景明确需求，实现复杂度低 |

### 需观察的实验性功能

| 功能 | Issue | 风险/不确定性 |
|:---|:---|:---|
| 剪贴板/拖拽图片支持 | [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | 开放 22 天，无 PR，可能依赖 Web UI 重构完成 |
| Matrix 文件上传流模式 | [#6177](https://github.com/zeroclaw-labs/zeroclaw/issues/6177) | 已关闭，但实现范围限于 finalize 场景 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"按文档做却跑不起来"** | [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | 文档示例与二进制实际配置键不匹配，信任损耗 |
| **"安装完缺了前端"** | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | `./install.sh` 选择预构建二进制后 `zeroclaw gateway` 404，安装流程未闭环 |
| **"调试网络问题工具撒谎"** | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | self-test 硬编码 localhost，与 `0.0.0.0` 配置矛盾，误导诊断方向 |
| **"代理以我名义乱发消息"** | [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | WhatsApp 自聊模式边界情况，身份混淆造成社交风险 |

### 积极信号

- **Raspberry Pi 部署** 文档（[#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704)，👍 3）显示社区对边缘/低成本硬件的强烈兴趣，文档贡献活跃
- **语音对话** 需求（[#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896)）来自真实产品（Tavina.ai），验证商业场景可行性

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 年龄 | 阻塞原因 | 行动建议 |
|:---|:---:|:---|:---|
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | 5 天 | **安全功能失效**：监督模式审批在 Web 路径完全绕过，标记 `needs-maintainer-review` 无响应 | 分配安全模块维护者，评估是否需 hotfix |
| [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | 17 天 | Fallback 提供商配置解析缺陷，仅部分修复（[#6314](https://github.com/zeroclaw-labs/zeroclaw/pull/6314) 限 Anthropic） | 确认是否扩展至所有提供商分支 |
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | 31 天 | 桌面菜单栏核心 PR，标记 `needs-author-action`，可能因关联 Issue 批量创建而重新激活 | 协调 `theonlyhennygod` 确认是否需拆分提交 |

### 长期沉默风险

| Issue | 年龄 | 状态 | 风险 |
|:---|:---:|:---|:---|
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | 23 天 | 开放，无 PR，无维护者指派 | 高价值 UX 功能（剪贴板图片）可能错过 v0.7.7 窗口 |

---

## 附录：数据速查

| 指标 | 数值 | 环比趋势 |
|:---|:---:|:---|
| Issues 更新 | 50 | ↑ 活跃 |
| PR 更新 | 50 | ↑ 活跃 |
| 新建 Issue（今日） | 12 | 集中 desktop/tauri |
| 已合并 PR | 4 | 含 1 个安全修复 |
| 待合并 PR | 28 | 含 3 个 XL 规模语音 PR |
| 无响应 >14 天 | 2 | 需维护者介入 |

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或安全漏洞披露信息。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*