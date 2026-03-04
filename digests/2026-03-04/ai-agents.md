# OpenClaw 生态日报 2026-03-04

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-03-04 00:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 | 2026-03-04

---

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度**：24小时内 Issues 和 PR 各更新 500 条，新开/活跃 Issues 434 条，待合并 PR 414 条，社区参与热情持续高涨。项目发布 **v2026.3.2 正式版及 beta 版**，核心聚焦于 SecretRef 凭证管理系统的全面扩展，覆盖 64 个目标场景。与此同时，**回归问题集中爆发**——v2026.3.2 引入的 exec 插件安装失败、文件操作权限丢失等问题成为用户升级的主要阻碍，维护团队需快速响应以稳定版本质量。

---

## 2. 版本发布

### [v2026.3.2](https://github.com/openclaw/openclaw/releases/tag/v2026.3.2) & [v2026.3.2-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.2-beta.1)

| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-03-03 |
| **更新类型** | 功能增强 + 安全加固 |
| **核心变更** | SecretRef 支持范围扩展至 64 个目标，覆盖运行时采集器、`openclaw secrets` 规划/应用/审计流程、入门引导 SecretInput UX 及相关文档 |

**⚠️ 破坏性变更与迁移注意**
- **未解析的 SecretRef 现在快速失败（fail fast）**：此前未解析的引用可能静默忽略，现在会直接导致错误，需确保所有 `SecretRef` 配置正确指向有效密钥源
- 建议运行 `openclaw secrets audit` 验证现有配置，特别是使用外部密钥管理（#26155）的用户

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#29713](https://github.com/openclaw/openclaw/pull/29713) | @liquidhorizon88-bot | **已关闭** | 安全审计增强：为 `gateway.nodes.denyCommands` 无效条目提供智能建议（前缀匹配 + Levenshtein 距离） |

### 高价值待合并 PR 预览（今日新建/更新）

| PR | 领域 | 价值 |
|:---|:---|:---|
| [#33651](https://github.com/openclaw/openclaw/pull/33651) | Provider: Moonshot | 修复中国区域端点选择持久化问题，解决 401 认证失败 |
| [#33583](https://github.com/openclaw/openclaw/pull/33583) | Channel: Discord | 解耦 MESSAGE_CREATE 处理器与 AI 执行，解决长任务阻塞消息队列问题 |
| [#31263](https://github.com/openclaw/openclaw/pull/31263) | Provider: Bedrock | 为 Anthropic Claude 启用 1M 上下文窗口支持 |
| [#33647](https://github.com/openclaw/openclaw/pull/33647) | Channel: Telegram | 论坛群组按话题路由代理，支持多 Agent 隔离部署 |
| [#33499](https://github.com/openclaw/openclaw/pull/33499) | Agents | 引入 Agent 自主续轮 + 网关原生子代理委托机制（大型功能 PR） |

**整体推进评估**：今日代码层面聚焦**稳定性修复**（Discord 阻塞、Moonshot 端点、systemd 安装）与**企业级功能**（1M 上下文、话题路由），但 v2026.3.2 的回归问题尚未完全覆盖，需优先处理。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#3460](https://github.com/openclaw/openclaw/issues/3460) 国际化 (i18n) 支持 | 73 | **长期呼声最高的功能**，社区多次提交 PR，但维护团队明确表示"当前无足够带宽支持多语言"，需社区主导或赞助资源 | 🔴 开放，需决策 |
| 2 | [#26534](https://github.com/openclaw/openclaw/issues/26534) 钉钉首次安装渠道选项 | 28 | 钉钉渠道已实现但未在引导向导中展示，用户需手动配置，** onboarding 体验断裂** | 🔴 开放 |
| 3 | [#23538](https://github.com/openclaw/openclaw/issues/23538) Anthropic setup-token 401 错误 | 17 | 隔离环境可复现的认证回归问题，影响 v2026.2.21-2 | 🔴 开放 |
| 4 | [#21872](https://github.com/openclaw/openclaw/issues/21872) Telegram + MiniMax 流式传输失效 | 15 | 增量响应无法送达，仅完整完成后显示 | 🔴 开放 |
| 5 | [#29632](https://github.com/openclaw/openclaw/issues/29632) 飞书插件重复配置导致配对失败 | 15 | **今日已关闭**，v2026.2.26 升级后的配置污染问题 | 🟢 已解决 |

**诉求分析**：社区对**中国企业级集成**（钉钉、飞书、MiniMax）的需求强烈，但相关渠道的 polish 程度明显落后于 Discord/Telegram；**流式传输稳定性**成为近期高频痛点，与 v2026.3.2 的 streaming 默认改动相关。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug 报告

| 严重程度 | Issue | 描述 | 版本 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🔴 **阻断性** | [#32833](https://github.com/openclaw/openclaw/issues/32833) | **exec 插件安装失败** - v2026.3.2 回归，命令行功能完全不可用 | v2026.3.2 | ❌ 无 |
| 🔴 **阻断性** | [#33225](https://github.com/openclaw/openclaw/issues/33225) | **非交互式 onboard 的 Agent 无法写文件** - 模型报告"无文件写入工具" | v2026.3.2 | ❌ 无（作者标注"inline resolution"但未详述）|
| 🔴 **阻断性** | [#33419](https://github.com/openclaw/openclaw/issues/33419) | **Agent 完全丧失文件操作权限** - 全新安装复现 | v2026.3.2 | ❌ 无 |
| 🔴 **阻断性** | [#33468](https://github.com/openclaw/openclaw/issues/33468) | **Google Chat 启动失败** - "Cannot convert undefined or null to object" | v2026.3.2 | ❌ 无 |
| 🟡 **严重** | [#32245](https://github.com/openclaw/openclaw/issues/32245) | Vertex 嵌入式运行失败 - Telegram + cron 场景 | v2026.3.1 | ❌ 无 |
| 🟡 **严重** | [#32088](https://github.com/openclaw/openclaw/issues/32088) | **Slack 全渠道崩溃** - Bolt 4.6.0 事件类型不兼容 | - | ❌ 无 |
| 🟡 **严重** | [#33229](https://github.com/openclaw/openclaw/issues/33229) | Slack `/session` 命令损坏 | - | ❌ 无 |
| 🟡 **严重** | [#33453](https://github.com/openclaw/openclaw/issues/33453) | Telegram partial streaming 重复消息 | - | ❌ 无 |
| 🟡 **严重** | [#33623](https://github.com/openclaw/openclaw/issues/33623) | `openclaw doctor --fix` **清除自定义 API 密钥** | - | ❌ 无 |
| 🟢 **一般** | [#33083](https://github.com/openclaw/openclaw/issues/33083) | exec 事件时间戳错误（偏差 11.5 小时） | - | ❌ 无 |

**稳定性评估**：v2026.3.2 存在**多个阻断性回归**，集中在插件系统（exec）、Agent 能力（文件操作）和渠道启动（Google Chat）。建议维护团队暂停推广该版本，优先发布 hotfix。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---:|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n 国际化 | 多语言 UI 与文档 | 中 | ⭐⭐⭐ 社区 PR 已存在，需维护团队承诺 review 资源 |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) Agent 视觉能力 | 图片识别（飞书/Minimax） | **高** | ⭐⭐⭐⭐ 模型已支持，平台层缺失，实现路径清晰 |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) Telegram Business Bot | 商业账号消息接收 | 中 | ⭐⭐⭐ 企业用户需求明确，需新事件类型支持 |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` 子代理路由 | 完成通知路由至父会话 | **高** | ⭐⭐⭐⭐ 与 [#33499](https://github.com/openclaw/openclaw/pull/33499) 大型 PR 方向一致 |
| [#8079](https://github.com/openclaw/openclaw/issues/8079) Browser 工具代理配置 | 企业防火墙/区域访问 | 高 | ⭐⭐⭐⭐ 企业部署刚需，实现简单 |
| [#33647](https://github.com/openclaw/openclaw/pull/33647) Telegram 话题路由 | 论坛群组多 Agent | **已提交** | ⭐⭐⭐⭐⭐ 代码就绪，待合并 |

**下一版本预测**：v2026.3.3 可能以**稳定性修复**为主，v2026.4.x 或将整合视觉能力、子代理委托机制及企业网络配置增强。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **升级体验** | [#32833](https://github.com/openclaw/openclaw/issues/32833), [#33419](https://github.com/openclaw/openclaw/issues/33419) | "每次升级都担心破坏现有工作流，v2026.3.2 又中招" |
| **配置复杂度** | [#27877](https://github.com/openclaw/openclaw/issues/27877) | Tailscale 配置向导不自动填充 allowedOrigins，手动易错 |
| **流式体验** | [#21872](https://github.com/openclaw/openclaw/issues/21872), [#33453](https://github.com/openclaw/openclaw/issues/33453) | "partial streaming 不是重复消息就是延迟显示，不如关掉" |
| **中国企业集成** | [#26534](https://github.com/openclaw/openclaw/issues/26534) | "钉钉支持做了但不给用，每次都要翻文档手动配" |
| **调试困难** | [#17052](https://github.com/openclaw/openclaw/issues/17052) | "HEARTBEAT.md 被静默截断到 899 字符，排查了两天" |

### 正向反馈
- SecretRef 扩展（v2026.3.2）获安全敏感用户认可："终于不用把密钥明文写进配置文件了"

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>30天，高互动）

| Issue | 天数 | 最后活动 | 风险 |
|:---|:---:|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n | **35天** | 2026-03-03 | 社区贡献者流失风险，多次 PR 未 review |
| [#19193](https://github.com/openclaw/openclaw/issues/19193) Telegram partial 文本丢失 | **15天** | 2026-03-03 | 标记 stale 但未关闭，实际影响严重 |
| [#10386](https://github.com/openclaw/openclaw/issues/10386) Workspace skills 发现失败 | **26天** | 2026-03-03 | 自定义技能核心功能不可用 |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker 内 brew 依赖失败 | **20天** | 2026-03-03 | 官方镜像体验断裂 |

### 提醒维护者关注
- **#3460**：建议明确 i18n 路线图（社区主导 vs. 官方支持时间表），避免重复劳动
- **#32833, #33225, #33419**：v2026.3.2 回归问题集群，建议发布紧急修复或回滚建议

---

*日报生成时间：2026-03-04 | 数据来源：GitHub API 快照*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-03-04 | 数据来源：GitHub 社区动态**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正经历**从"单点工具"向"平台化运行时"的集体跃迁**。OpenClaw 以 500+ Issues/PR 的日活稳居头部，但 ZeptoClaw、IronClaw 等项目在安全架构（TaintEngine、污染追踪）、部署形态（MCP Server、OpenAI 兼容 API）等维度实现技术反超。整体呈现**"功能扩张期"与"质量巩固期"并存**的分化格局：新兴项目（TinyClaw、ZeptoClaw）快速迭代 Provider 生态以降低成本焦虑，成熟项目（OpenClaw、LobsterAI）则面临稳定性债务与架构重构压力。中国企业级集成（钉钉、飞书、企微）成为差异化竞争的关键战场。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | Release | 健康度评估 |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500（新开434） | 500（待合并414） | v2026.3.2 正式版 | ⚠️ **高活跃-高风险**：版本回归问题集中爆发，阻断性 Bug 4 个无修复 |
| **NanoBot** | 29（活跃22） | 57（待合并42） | 无 | 🟡 **高活跃-高积压**：PR 积压量大，架构级 PR（双层 Steering Loop）待审 |
| **ZeroClaw** | 15（关闭15） | 23（合并/关闭23） | v0.1.8-alpha.1 | 🟢 **高活跃-高质量**：功能-修复闭环极快（<24h），S0 级 ARM 问题待解 |
| **PicoClaw** | 107（活跃103） | 239（待合并203） | 无 | 🔴 **极高活跃-极低吞吐**：Issue 关闭率 3.7%，PR 合并率 15%，审查瓶颈严重 |
| **NanoClaw** | 7 | 26（合并10） | 无 | 🟢 **稳健迭代**：架构成熟（IPC 优化、多模态），技能市场成战略焦点 |
| **IronClaw** | 15（活跃13） | 29（待合并19） | v0.14.0 RC | 🟡 **质量转向期**：6 个 Bug 当日修复，测试基建引入 OpenClaw 策略 |
| **LobsterAI** | 30（活跃19） | 9（合并7） | 无（v0.1.23 存在） | 🟡 **修复密集型**：Windows 沙箱大修复落地，macOS 性能退化新危机 |
| **TinyClaw** | 4 | 5（合并1） | v0.0.8/v0.0.9 连发 | 🟢 **快速迭代**：Telegram 稳定性热修复，Provider 矩阵扩展中 |
| **CoPaw** | 50（活跃35） | 50（待合并22） | v0.0.5-beta.1 | 🟡 **国际化冲刺**：法语/日语本地化，推理模型兼容性危机待解 |
| **ZeptoClaw** | 7（关闭7） | 14（合并14） | 无 | 🟢 **架构突破期**：TaintEngine、MCP Server、OpenAI API 三大支柱落地 |
| **EasyClaw** | 2（关闭2） | 0 | v1.5.15/v1.5.16 | 🟡 **维护模式**：双版本文档修复，社区贡献度为零 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | 表现 | 数据支撑 |
|:---|:---|:---|
| **社区规模** | 绝对头部 | 日活 500 Issues/PR，为第二名 PicoClaw 的 2-4 倍 |
| **SecretRef 安全体系** | 生产级凭证管理 | v2026.3.2 扩展至 64 个目标场景，获安全敏感用户认可 |
| **渠道覆盖** | 最全 IM 矩阵 | Discord/Telegram/Slack/钉钉/飞书/企微/微信全支持 |
| **企业功能** | 子代理委托、网关原生编排 | PR #33499 大型功能推进中 |

### 技术路线差异
| 对比项 | OpenClaw | 竞品（ZeptoClaw/IronClaw） |
|:---|:---|:---|
| **安全模型** | 运行时凭证隔离（SecretRef） | 编译期/类型级污染追踪（TaintEngine） |
| **部署形态** | 传统服务端 + CLI | MCP Server 双向节点、OpenAI 兼容 API |
| **架构哲学** | 功能完备性优先 | 最小可审计核心 + 严格扩展边界 |
| **测试策略** | 社区驱动，回归问题频发 | 分层测试、StubChannel 基建（IronClaw #507 引入）|

### 社区规模对比
- **OpenClaw**：~500 日活事件，但 **Issue 关闭率未披露**，回归问题集群（v2026.3.2 阻断性 Bug 4 个）暗示质量-速度权衡偏后者
- **ZeroClaw**：~38 日活事件，**功能-修复闭环 <24h**，S0 级问题响应滞后（ARM 嵌入式）
- **ZeptoClaw**：~21 日活事件，**0 评论 Issues/PRs**，核心维护者单点驱动，外部贡献者生态未形成

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **推理模型兼容性** | OpenClaw, PicoClaw, CoPaw, LobsterAI | Kimi/DeepSeek/Gemini 3 的 `reasoning_content`/`thought_signature` 处理，tool call 后字段缺失导致 400 错误 | 🔴 **P0** |
| **MCP 协议支持** | NanoBot, ZeptoClaw, LobsterAI, IronClaw | 从 Client 升级为 Server 模式，session 持久化，SSE/streamableHttp 传输 | 🟡 **P1** |
| **多 Provider 成本优化** | TinyClaw, NanoBot, OpenClaw | Cursor/Copilot/OpenRouter/本地模型（Ollama/LM Studio）接入，降低 Claude API 依赖 | 🟡 **P1** |
| **中国企业级集成** | OpenClaw, PicoClaw, NanoClaw, LobsterAI, EasyClaw, CoPaw | 钉钉/飞书/企微的 onboarding 体验、话题路由、长文本/图片消息处理 | 🟡 **P1** |
| **安全沙箱/污染追踪** | ZeptoClaw, ZeroClaw, IronClaw, LobsterAI | TaintEngine、Canary 令牌、技能安装时静态扫描、命令白名单 | 🟢 **P2** |
| **流式传输稳定性** | OpenClaw, NanoBot, ZeroClaw, PicoClaw | partial streaming 重复消息、延迟显示、增量响应丢失 | 🟡 **P1** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道企业集成、子代理编排、SecretRef 安全 | 中大型企业 IT 团队、多 Agent 场景需求者 | TypeScript/Node，插件化扩展，网关中心化 |
| **NanoBot** | 极简异步消息处理、双层 Steering Loop 架构 | 开发者、技术爱好者、成本敏感型个人用户 | Python，单层 ReAct 循环可选增强，轻量化 |
| **ZeroClaw** | 记忆持久化、金丝雀安全、MCP 兼容、容器化 | 安全敏感企业、自托管优先团队 | Rust，Post-turn 事实提取，CanaryGuard 主动防御 |
| **PicoClaw** | 全平台部署（Android/Windows/Docker）、本地模型优先 | 边缘设备用户、隐私极端主义者、中文开发者 | Go，跨平台野心，但质量债务累积 |
| **NanoClaw** | 多模态 Agent、Unix Socket 高性能 IPC、技能市场 | 多模态场景开发者、企业私有化部署 | TypeScript/Bun 迁移中，架构成熟期 |
| **IronClaw** | WASM 工具生态、内存系统、Routine 自动化 | 自动化工作流用户、Rust 生态开发者 | Rust，WASM 沙箱，libSQL 向量存储 |
| **LobsterAI** | 沙箱安全执行、数理化公式渲染、Windows 深度优化 | 教育场景、Windows 企业用户、安全合规需求 | Electron + 虚拟机沙箱，垂直场景差异化 |
| **TinyClaw** | 多 Provider 矩阵、团队管理、跨通道命令 | 小团队、多模型切换需求、Cursor/Copilot 现有订阅者 | TypeScript，快速 Provider 适配，运维友好 |
| **CoPaw** | 多语言本地化、Twilio 语音、技能安全扫描 | 国际化团队、语音交互场景、企业合规 | Python，AgentScope 继承，国际化冲刺 |
| **ZeptoClaw** | 类型级安全（TaintEngine）、MCP/OpenAI 双协议、LoopGuard | 安全关键系统、协议互操作性需求者 | Rust，Thin Kernel 重构，生产就绪期 |
| **EasyClaw** | 飞书深度集成、个人长期迭代使用 | 飞书生态重度用户、非技术背景个人 | 单一维护者，稳定维护模式 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（功能扩张期）
| 项目 | 特征 | 风险信号 |
|:---|:---|:---|
| **PicoClaw** | 107 Issues/239 PRs 日活，Android/Windows/Docker 并行推进 | 关闭率 3.7%，审查瓶颈，Gemini 3 系统性适配风险 |
| **CoPaw** | 50/50 日活，法语/日语/Twilio 密集落地 | 推理模型兼容性危机（#388/#507），渠道深度不足 |
| **TinyClaw** | 双版本连发，Provider 矩阵快速扩展 | macOS 启动崩溃（#156）未解，平台兼容性债务 |

### 🛠️ 质量巩固阶段（架构成熟期）
| 项目 | 特征 | 关键动作 |
|:---|:---|:---|
| **ZeptoClaw** | TaintEngine/MCP Server/OpenAI API 三大支柱落地 | 偿还测试基础设施债务（#238 Docker/act 不匹配）|
| **NanoClaw** | IPC 优化、多模态、多运行时推进 | 技能市场（#384）战略决策，Bun 迁移技术债务 |
| **IronClaw** | 引入 OpenClaw 测试策略，6 Bug 当日修复 | v0.14.0 破坏性变更管理，embedding 维度硬编码（#494）|

### ⚠️ 稳定维护/风险期
| 项目 | 特征 | 关键挑战 |
|:---|:---|:---|
| **OpenClaw** | 规模绝对领先，但 v2026.3.2 回归问题集群 | 阻断性 Bug 4 个无修复，建议暂停版本推广 |
| **LobsterAI** | Windows 沙箱大修复落地，但 macOS 性能退化 | 长会话 API 错误（#191/#243）反复出现，上下文管理待重构 |
| **EasyClaw** | 双版本文档修复，0 PR 社区贡献 | 升级路径 regression（#6），飞书配置体验断裂 |

---

## 7. 值得关注的趋势信号

### 信号一：推理模型兼容性成为架构级挑战
> **数据**：CoPaw #388/#507、PicoClaw #79/#161、OpenClaw 流式问题均指向 `reasoning_content`/`thought_signature` 字段处理。
>
> **价值**：Agent 框架需从"支持模型列表"升级为"支持模型能力谱系"，thinking/reasoning/tool call 的组合矩阵需显式建模。

### 信号二：MCP 协议从"可选集成"变为"基础设施"
> **数据**：ZeptoClaw #233（MCP Server 模式）、NanoBot #1488（MCP SSE）、LobsterAI #233（MCP 支持）、IronClaw WASM 工具 OAuth。
>
> **价值**：Agent 框架正从"工具调用者"进化为"工具提供者"，双向 MCP 节点能力将成为生态位关键。

### 信号三：成本焦虑驱动"多 Provider"成为默认架构
> **数据**：TinyClaw #124（"Claude Code API 配额迅速耗尽"）、NanoBot #75（Ollama 配置困惑）、OpenClaw 社区对本地模型的持续诉求。
>
> **价值**："Bring Your Own Model" 不再是边缘需求，框架需提供模型路由、成本监控、自动降级等中台能力。

### 信号四：中国企业级集成的"最后一公里"体验差距
> **数据**：OpenClaw #26534（钉钉 onboarding 断裂）、PicoClaw #190（Android 教程）、EasyClaw #5（飞书白名单循环）、CoPaw #510（钉钉长文本报错）。
>
> **价值**：功能存在 ≠ 体验可用，IM 集成的配置向导、错误码映射、OAuth 替代手动配置是差异化关键。

### 信号五：安全模型从"边界防御"转向"数据流追踪"
> **数据**：ZeptoClaw TaintEngine（类型级污染追踪）、ZeroClaw CanaryGuard（金丝雀令牌）、IronClaw #284（技能安全扫描）。
>
> **价值**：提示词注入、数据外泄的防御需从"规则黑名单"升级为"来源-流向"显式建模，编译期/类型级安全成为新战场。

---

**报告结论**：OpenClaw 仍以规模和功能完备性领跑，但 ZeptoClaw（安全架构）、ZeroClaw（响应速度）、IronClaw（质量基建）在垂直维度实现技术超越。生态整体正从"功能竞赛"转向"质量-安全-成本"的三维平衡，中国企业级集成与推理模型兼容性是下一阶段的决胜战场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-03-04

## 1. 今日速览

NanoBot 今日保持**高活跃开发状态**，24小时内产生 **29 条 Issue 更新**（22 活跃/新开，7 关闭）和 **57 条 PR 更新**（42 待合并，15 已合并/关闭），无新版本发布。社区聚焦于**多模型提供商兼容性**（Codex、Ollama、LM Studio）、**架构增强**（双层 Steering Loop、子代理独立配置）以及**渠道扩展**（Telegram 视频/话题、Nostr、Web 聊天）。值得注意的是，今日关闭的 7 个 Issue 中包含 3 个 Bug 修复，显示维护团队对稳定性问题的响应效率。PR 积压量较大（42 待合并），建议关注核心架构 PR 的评审进度。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 状态 | 贡献 |
|:---|:---|:---|:---|
| [#313](https://github.com/HKUDS/nanobot/pull/313) | @weidonglian | **已合并** | **模型别名解析与自动提供商前缀映射** — 用户可定义简短别名，系统自动根据配置节添加提供商前缀，解决 `ollama/kimi-k2.5:cloud` 等复杂模型标识的易用性问题 |
| [#1485](https://github.com/HKUDS/nanobot/pull/1485) | @cocolato | **已合并** | **修复缺失的 `openai` 依赖** — 将间接依赖转为显式依赖，避免 `custom_provider.py` 导入失败 |
| [#1477](https://github.com/HKUDS/nanobot/pull/1477) | @KimGLee | **已合并** | **重构运行时上下文合并逻辑** — 提取 `_merge_runtime_context` 辅助函数，保持消息形状行为不变，简化代码可维护性 |
| [#1480](https://github.com/HKUDS/nanobot/pull/1480) | @chinesewebman | **已关闭** | Telegram 流式输出实验（含 `send_message_draft` 动画打字效果），因策略调整关闭 |

**整体推进评估**：今日合并集中在**开发者体验优化**（模型别名、依赖修复）和**代码健康度**（重构），功能层面进展较保守。42 个待合并 PR 中多个高价值功能（MCP SSE、子代理独立 LLM、Nostr 渠道）等待集成，建议加速评审以释放社区贡献价值。

---

## 4. 社区热点

### 高互动 Issues

| Issue | 互动指标 | 核心诉求分析 |
|:---|:---|:---|
| [#75](https://github.com/HKUDS/nanobot/issues/75) Ollama 连接配置 | 17 评论 | **新手 onboarding 痛点**：用户反复询问 `ollama/kimi-k2.5:cloud` 等模型字符串格式，文档示例不足导致配置困惑。PR #313 的别名功能可部分缓解，但需配套文档更新 |
| [#222](https://github.com/HKUDS/nanobot/issues/222) 多代理设置支持 | 8 评论, 5 👍 | **架构认知缺口**：配置中已存在多代理结构，但用户缺乏官方指南。诉求从"是否支持"转向"如何配置"，PR #1489（子代理独立 LLM 配置）直接响应此需求 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) GitHub Copilot 提供商支持 | 8 评论, 4 👍 | **企业/开发者工具链整合**：用户希望复用已有的 Copilot 订阅，避免额外 API 成本。与 #1304、#1459（Codex 使用问题）形成主题簇，显示 OpenAI/Copilot 生态的强烈需求 |
| [#1181](https://github.com/HKUDS/nanobot/issues/1181) 双层架构提案 (Steering Loop + AgentMessage) | 2 评论, 9 👍 | **架构升级共识**：知乎技术文章引出的深度讨论，用户认可 NanoBot 的简洁性，但希望可选增强自主性。PR #1224 已实现该提案，处于待合并状态 |

### 高价值待合并 PR

| PR | 价值评估 |
|:---|:---|
| [#1224](https://github.com/HKUDS/nanobot/pull/1224) 双层架构实现 | 9 👍 的 #1181 配套实现，**架构级增强**，建议优先评审 |
| [#1489](https://github.com/HKUDS/nanobot/pull/1489) 子代理独立 LLM 配置 | 解决 #222 核心诉求，成本优化场景关键功能 |
| [#1488](https://github.com/HKUDS/nanobot/pull/1488) MCP SSE 传输支持 | MCP 协议生态扩展，自动检测 SSE/streamableHttp |
| [#1475](https://github.com/HKUDS/nanobot/pull/1475) Nostr 渠道 (NIP-17) | 去中心化社交协议支持，扩展 Web3 用户群 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1197](https://github.com/HKUDS/nanobot/issues/1197) | `message` 工具使用时最终响应被静默丢弃 | **已关闭** ✅ |
| 🔴 **高** | [#1394](https://github.com/HKUDS/nanobot/issues/1394) | QQ 渠道消息去重错误 (`msgseq` 重复) | **已关闭** ✅ |
| 🔴 **高** | [#1441](https://github.com/HKUDS/nanobot/issues/1441) | Cron 提醒触发无限循环（消息被误判为用户输入） | **已关闭** ✅ |
| 🟡 **中** | [#1304](https://github.com/HKUDS/nanobot/issues/1304) | Codex 无法使用（截图显示配置/认证错误） | 待调查 |
| 🟡 **中** | [#1459](https://github.com/HKUDS/nanobot/issues/1459) | Codex-5.3 模型"懒惰"不实际执行（仅承诺不行动） | 待调查 |
| 🟡 **中** | [#1401](https://github.com/HKUDS/nanobot/issues/1401) | `TypeError: type 'Choice' is not subscriptable` 崩溃 | 待调查 |
| 🟡 **中** | [#1478](https://github.com/HKUDS/nanobot/issues/1478) | LM Studio 集成报错 "No API key configured" | 待调查 |
| 🟡 **中** | [#1486](https://github.com/HKUDS/nanobot/issues/1486) | 强制 `dashscope` 提供商但 `kimi-k2.5` 被路由至 Moonshot | 待调查 |
| 🟡 **中** | [#1487](https://github.com/HKUDS/nanobot/issues/1487) | Qwen3.5 调用报错 `function.arguments` 必须为 JSON 格式 | 待调查 |
| 🟢 **低** | [#1473](https://github.com/HKUDS/nanobot/issues/1473) | 子代理重复调用（OpenRouter Minimax 2.5） | **PR #1474 待合并** 🔧 |

**稳定性评估**：今日关闭 3 个高严重 Bug，显示维护响应积极。但**模型提供商兼容性**成为突出风险点——Codex、LM Studio、Qwen、Kimi 等均有故障报告，建议建立标准化的提供商测试矩阵。PR #1474 已针对子代理重复调用提供修复。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 纳入可能性 | 关键信号 |
|:---|:---|:---|:---|
| **子代理独立 LLM 配置** | #1489 | ⭐⭐⭐⭐⭐ **高** | PR 已提交，直接响应 #222 多代理需求 |
| **MCP SSE 传输支持** | #1488 | ⭐⭐⭐⭐⭐ **高** | PR 已提交，附测试截图，生态扩展关键 |
| **双层架构 (Steering Loop)** | #1224 | ⭐⭐⭐⭐⭐ **高** | 9 👍 社区支持，架构级 PR 待合并 |
| **本地 HuggingFace 模型支持** | #1470 | ⭐⭐⭐⭐☆ | 隐私/成本敏感用户强烈需求，无 PR  yet |
| **统一守护进程网关** | #1461 | ⭐⭐⭐⭐☆ | 企业部署场景，架构提案完整 |
| **技能执行沙箱隔离** | #1448 | ⭐⭐⭐⭐☆ | 安全敏感场景，BoxLite 替代方案 #1229 |
| **Telegram 视频文件接收** | #1472 | ⭐⭐⭐⭐⭐ **高** | PR 已提交，功能完整 |
| **Telegram 群组话题支持** | #1482 | ⭐⭐⭐⭐⭐ **高** | PR 已提交，解决上下文泄漏问题 |
| **Nostr 去中心化渠道** | #1475 | ⭐⭐⭐⭐☆ | PR 已提交，Web3 生态扩展 |
| **Web 聊天界面** | #1297 | ⭐⭐⭐⭐☆ | Flask 实现，多会话管理，待评审 |
| **PDF 文本提取** | #1484 | ⭐⭐⭐⭐☆ | PR 已提交，技能增强 |
| **小米音响等 IoT 接入** | #1411 | ⭐⭐⭐☆☆ | 作者表示愿自行开发扩展 |
| **GitHub Copilot 提供商** | #140 | ⭐⭐⭐☆☆ | 需求明确，但需官方合作/逆向工程 |

**路线图推断**：下一版本可能聚焦 **MCP 协议完善**、**多代理架构 GA**、**渠道生态扩展**（Telegram 深度优化、Nostr、Web）。本地模型支持（HF、LM Studio）和安全性（沙箱）是中期重点。

---

## 7. 用户反馈摘要

### 😊 满意点
- "Nanobot 是**简洁高效的 Agent 框架**，单层 ReAct 循环在异步消息场景表现卓越" — #1181
- "nanobot is an **excellent lightweight LLM interaction framework**，高度赞赏其对话管理和工具调用设计" — #1470

### 😤 痛点与场景

| 痛点 | 典型反馈 | 来源 |
|:---|:---|:---|
| **配置复杂，文档不足** | "How Do I content the Ollama" — 17 评论的配置求助 | #75 |
| **模型响应"懒惰"/不执行** | "I haven't read it yet... I haven't actually executed" — 承诺但不行动 | #1459 |
| **长任务无进展反馈** | "Starting execution now" 后无响应，用户不知是否卡住 | #1022 |
| **历史记录噪音过大** | `HISTORY.md` 快速增长，包含大量无价值状态信息 | #1449 |
| **Windows 兼容性** | `npm` 子进程调用失败（`npm.cmd` 找不到） | #1479（已 PR 修复） |
| **提供商路由混乱** | 显式配置 `dashscope` 却被路由至 Moonshot | #1486 |

### 💡 使用场景洞察
- **异步任务托管**：用户期望"启动后离开"，但缺乏进度感知机制
- **成本优化**：主代理用强模型协调，子代理用便宜模型执行（#1489 场景）
- **多平台部署**：企业需要守护进程化、统一管控的网关（#1461）

---

## 8. 待处理积压

### 长期未响应的高价值 Issue/PR

| 条目 | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#126](https://github.com/HKUDS/nanobot/pull/126) Docker 镜像自动构建 | 2026-02-05 | 待合并 27 天 | **基础设施关键**，社区已自行推送 `birdxs/nanobot`，建议官方接管 |
| [#75](https://github.com/HKUDS/nanobot/issues/75) Ollama 配置文档 | 2026-02-04 | 开放 28 天，17 评论 | **新手门槛**，需文档更新或配置向导 |
| [#1022](https://github.com/HKUDS/nanobot/issues/1022) 长任务无反馈 | 2026-02-22 | 开放 10 天 | 用户体验核心问题，建议结合 #1461 守护进程方案 |
| [#1181](https://github.com/HKUDS/nanobot/issues/1181) / [#1224](https://github.com/HKUDS/nanobot/pull/1224) 双层架构 | 2026-02-25 / 2026-02-26 | 9 👍，PR 待合并 | **架构里程碑**，建议优先评审合并 |
| [#1229](https://github.com/HKUDS/nanobot/issues/1229) BoxLite 沙箱后端 | 2026-02-26 | 开放 6 天 | 安全增强，与 #1448 技能沙箱需求呼应 |

**维护建议**：当前 42 个待合并 PR 存在积压风险，建议：
1. **设立 PR 分类标签**（`architecture`/`channel`/`provider`/`bugfix`）优先处理架构级变更
2. **每周文档日** 专门处理 #75 类配置文档 Issue
3. **CI/CD 优先** 合并 #126 释放社区镜像维护负担

---

*日报生成时间：2026-03-04 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 | 2026-03-04

## 1. 今日速览

ZeroClaw 项目今日呈现**高强度开发态势**：24小时内完成 **23 个 PR 合并/关闭**，处理 **15 个 Issue 关闭**，同时新开/活跃 Issue 12 个。核心贡献者 @theonlyhennygod 主导了安全加固、内存持久化和多通道功能的多项关键落地。社区活跃度极高，涉及安全架构、MCP 协议兼容、容器化部署等深层技术议题。v0.1.8-alpha.1 预发布版本已推送，聚焦安全修复与 Slack 稳定性改进。

---

## 2. 版本发布

### v0.1.8-alpha.1 预发布版本
**发布日期**: 2026-03-03  
**链接**: https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.8-alpha.1

| 变更项 | 详情 | 影响 |
|--------|------|------|
| **安全修复** | 允许 `allowed_commands` 中显式指定可执行路径 | 修复命令注入风险，需检查现有配置 |
| **Slack 稳定性** | 防止重启后重复处理旧消息 | 解决消息回放问题，建议所有 Slack 用户升级 |
| **配置验证** | 增强配置模式校验（描述截断，推测为配置 schema 强化） | 可能暴露此前被忽略的配置错误 |

**迁移注意事项**: 若使用 `allowed_commands` 功能，建议审计命令路径是否需显式声明；Slack 部署需验证重启行为。

---

## 3. 项目进展

### 🔥 核心功能落地（今日合并 PR）

| PR | 作者 | 功能 | 项目推进 |
|:---|:---|:---|:---|
| [#2664](https://github.com/zeroclaw-labs/zeroclaw/pull/2664) | @theonlyhennygod | **Post-turn 持久化事实提取** | 解决短会话/单轮调用无法持久化记忆的关键架构缺陷，为 Agent 长期记忆能力奠定基础 |
| [#2663](https://github.com/zeroclaw-labs/zeroclaw/pull/2663) | @theonlyhennygod | **Agent 级工具白名单/黑名单** (`allowed_tools`/`denied_tools`) | 启用安全的编排器-工作者多 Agent 架构，企业级场景就绪 |
| [#2661](https://github.com/zeroclaw-labs/zeroclaw/pull/2661) | @theonlyhennygod | **金丝雀令牌防数据外泄** (`CanaryGuard`) | 主动防御提示词注入导致的数据外泄，安全能力达到生产级 |
| [#2656](https://github.com/zeroclaw-labs/zeroclaw/pull/2656) | @theonlyhennygod | **MCP HTTP 传输 Session 状态保持** | 修复与 Docker Desktop MCP Toolkit 等主流工具的兼容性问题 |
| [#2569](https://github.com/zeroclaw-labs/zeroclaw/pull/2569) | @theonlyhennygod | **Telegram 原生流式响应** (`StreamMode::On`) | 利用 Bot API 9.5 `sendMessageDraft` 实现真流式，UX 重大升级 |
| [#2657](https://github.com/zeroclaw-labs/zeroclaw/pull/2657) | @theonlyhennygod | **全功能容器镜像发布** | 解决 GHCR 镜像功能缺失问题，容器化部署体验完整 |
| [#2660](https://github.com/zeroclaw-labs/zeroclaw/pull/2660) | @theonlyhennygod | **定时任务模型继承修复** | 自定义端点场景下 `cron_add` 模型选择逻辑正确化 |

**整体评估**: 今日合并 PR 覆盖**安全架构、记忆系统、协议兼容、通道体验、部署运维**五大维度，项目成熟度显著提升，v0.2.0 里程碑特征明显。

---

## 4. 社区热点

### 讨论最活跃的议题

| Issue | 评论数 | 核心诉求 | 状态 |
|:---|:---:|:---|:---|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | **5** | Web Agent 连接错误，daemon 与 CLI 行为不一致 | 🔴 **S1 阻塞中，待修复** |
| [#2650](https://github.com/zeroclaw-labs/zeroclaw/issues/2650) | 4 | `zeroclaw skills install` 失败，ClawHub URL 识别问题 | ✅ 已关闭（#2662 修复） |
| [#2641](https://github.com/zeroclaw-labs/zeroclaw/issues/2641) | 3 | 增量记忆持久化（非压缩时提取事实） | ✅ 已关闭（#2664 实现） |
| [#2651](https://github.com/zeroclaw-labs/zeroclaw/issues/2651) | 3 | 主 Agent 工具可见性控制 | ✅ 已关闭（#2663 实现） |
| [#2594](https://github.com/zeroclaw-labs/zeroclaw/issues/2594) | 3 | 仓库 URL 过时 | ✅ 已关闭（#2659 修复） |

**诉求分析**: 社区高度关注**运行时稳定性**（Web Agent 连接）和**企业级控制能力**（工具过滤、记忆持久化）。核心贡献者响应极快，功能请求到实现闭环平均 <24 小时。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|:---|:---|:---|:---|
| **S0** | [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) | Raspberry Pi 3B+ 上无法调用工具（文件创建失败） | 🔴 **开放，无 PR** |
| **S1** | [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | Web Agent "Connection error. Attempting to reconnect..." | 🔴 **开放，高优先级** |
| **S1** | [#2650](https://github.com/zeroclaw-labs/zeroclaw/issues/2650) | `skills install` 无法识别 ClawHub URL | ✅ **#2662 已修复** |
| **S1** | [#2589](https://github.com/zeroclaw-labs/zeroclaw/issues/2589) | 自定义 OpenAI 端点默认模型不响应 | ✅ 已关闭 |
| **S1** | [#2562](https://github.com/zeroclaw-labs/zeroclaw/issues/2562) | `http_request` 无法访问 `credential_profile` 环境变量 | ✅ **#2570 已修复** |
| **S1** | [#2631](https://github.com/zeroclaw-labs/zeroclaw/issues/2631) | Slack `group_reply` 配置键被忽略 | ✅ **#2658 已修复** |
| **S1** | [#2638](https://github.com/zeroclaw-labs/zeroclaw/issues/2638) | MCP HTTP 传输未处理 `Mcp-Session-Id` | ✅ **#2656 已修复** |
| **S2** | [#2665](https://github.com/zeroclaw-labs/zeroclaw/issues/2665) | Memory 页面 React 错误（category 对象类型不匹配） | 🔴 **开放** |
| **S2** | [#2403](https://github.com/zeroclaw-labs/zeroclaw/issues/2403) | Telegram 首轮照片重复发送为两个图像块 | 🔴 **开放** |

**风险评估**: S0 级 ARM 嵌入式场景工具调用失效问题尚未有修复方案，可能影响边缘部署用户。S1 级 Web Agent 连接问题是当前最大稳定性隐患。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 技术可行性 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---|:---|
| [#2669](https://github.com/zeroclaw-labs/zeroclaw/issues/2669) | LM Studio 专属 Provider | 高（已有 #2671 PR） | ⭐⭐⭐⭐⭐ | **已提交 PR** |
| [#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602) | LiteLLM 注册 Provider | 高（OpenAI-compatible 模式） | ⭐⭐⭐⭐⭐ | 主贡献者提案 |
| [#2668](https://github.com/zeroclaw-labs/zeroclaw/issues/2668) | Matrix 频道语音转录 | 中（需集成 STT） | ⭐⭐⭐⭐☆ | 多通道 parity 需求 |
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | 金丝雀令牌 + 语义 VectorDB 防护 | 高（#2661 已实现金丝雀部分） | ⭐⭐⭐⭐⭐ | **部分已实现** |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook 转换与自定义路径 | 中 | ⭐⭐⭐☆☆ | 企业集成需求 |
| [#2601](https://github.com/zeroclaw-labs/zeroclaw/issues/2601) | Telegram `allowed_users` 环境变量支持 | 高 | ⭐⭐⭐⭐☆ | 配置安全最佳实践 |

**路线图预测**: LM Studio 与 LiteLLM 支持将强化本地/网关部署能力；Matrix 语音功能补齐多模态通道矩阵；语义 VectorDB 防护可能成为 v0.2.0 安全亮点。

---

## 7. 用户反馈摘要

### 痛点
- **配置体验**: "custom url connector is messy on the configuration file" — LM Studio 用户抱怨通用 OpenAI-compatible 配置复杂
- **部署边缘案例**: Raspberry Pi 工具沙箱失效，ARM 嵌入式支持存在盲区
- **Web 端稳定性**: daemon 模式 Web Agent 连接不可靠，与 CLI 行为不一致

### 满意点
- **响应速度**: 功能请求到实现极快（如 #2641 记忆提取当日提案当日合并）
- **安全投入**: 金丝雀令牌等企业级安全功能获得认可
- **容器化**: 全功能镜像解决长期痛点

### 使用场景洞察
- **多 Agent 团队**: 用户明确需要 "orchestrator-worker multi-agent architectures" 的上下文工程能力
- **自托管优先**: 大量 Issue 围绕本地模型（LM Studio、Ollama、vLLM、SGLang）的顺滑集成

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) RPi 3B+ 工具调用失败 | 2026-03-03 | 🔴 S0 开放 | **ARM 嵌入式场景关键缺陷，需安全/沙箱专家介入** |
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) `channel_ack_config` schema 错误 | 2026-03-02 | 🔴 S1 开放 | 影响特定 provider 组合，需 schema 审计 |
| [#2403](https://github.com/zeroclaw-labs/zeroclaw/issues/2403) Telegram 照片重复 | 2026-03-01 | 🔴 S2 开放 | anthropic-custom provider 特定，需媒体处理审查 |
| [#2652](https://github.com/zeroclaw-labs/zeroclaw/pull/2652) SIGTERM 优雅关闭 | 2026-03-03 | 🟡 待合并 | 容器/K8s 部署关键修复，建议优先 review |
| [#2653](https://github.com/zeroclaw-labs/zeroclaw/pull/2653) 抑制 HEARTBEAT_OK 哨兵 | 2026-03-03 | 🟡 待合并 | 用户体验修复，与 #2670 重复提案，需协调 |

---

**日报生成时间**: 2026-03-04  
**数据来源**: github.com/zeroclaw-labs/zeroclaw

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-04

## 1. 今日速览

PicoClaw 今日呈现**极高活跃度**，24小时内 Issues 更新 107 条（103 条活跃/新开，仅 4 条关闭），PR 更新 239 条（203 条待合并，36 条已合并/关闭）。社区讨论聚焦于 **Gemini 3 系列模型兼容性危机**、**本地 LLM（Ollama）配置困境** 以及 **多平台部署需求**（Android/Windows）。项目处于快速迭代期，但关闭率偏低（Issue 关闭率 3.7%，PR 合并率 15%），维护者面临显著的代码审查压力。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 类型 | 进展说明 |
|:---|:---|:---|:---|
| [#783](https://github.com/sipeed/picoclaw/issues/783) | @fernandoacf | Bug 修复 | **关键修复**：解决模型名称含 `/` 时（如 `stepfun/step-3.5-flash:free`）Provider 解析失败问题，已关闭 |
| [#433](https://github.com/sipeed/picoclaw/pull/433) | @agenciaspace | Bug 修复 | Agent 持久化问题修复，已关闭 |
| [#370](https://github.com/sipeed/picoclaw/pull/370) | @firaseth | 文档 | 社交媒体集成指南，已关闭 |
| [#668](https://github.com/sipeed/picoclaw/pull/668) | @rfschubert | 功能增强 | Telegram 命令菜单自动注册，已关闭 |
| [#853](https://github.com/sipeed/picoclaw/pull/853) | @nayihz | 功能增强 | Discord 代理支持，已关闭 |
| [#951](https://github.com/sipeed/picoclaw/pull/951) | @shikihane | 功能增强 | 飞书频道入站图片消息支持，已关闭 |
| [#532](https://github.com/sipeed/picoclaw/pull/532) | @Giordano10 | Bug 修复 | 任务调度器 Cron 问题修复，已关闭 |

**整体评估**：今日合并 PR 以**稳定性修复**和**渠道集成**为主，核心架构（Agent 循环、Provider 系统）的重大 PR 仍处于待审状态，项目前进节奏稳健但非突破性。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 |
|:---|:---|:---|
| [#190](https://github.com/sipeed/picoclaw/issues/190) Android 安装教程 | 10 | **移动端部署刚需**：用户强烈需求在 Android 手机运行 PicoClaw，反映边缘设备部署场景增长 |
| [#79](https://github.com/sipeed/picoclaw/issues/79) Gemini 3 Flash 函数调用失败 | 9 | **Google API 变更冲击**：`thought_signature` 缺失导致工具调用失效，影响生产环境 |
| [#148](https://github.com/sipeed/picoclaw/issues/148) OpenClaw Skill 兼容性 | 8 | **生态互通需求**：用户希望复用 OpenClaw 技能库，避免重复建设 |
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio 易连接 | 8 | **本地 LLM 平民化**：非技术用户需要零配置本地模型接入方案 |
| [#297](https://github.com/sipeed/picoclaw/issues/297) 螳螂虾 Logo 设计 | 7 | 品牌视觉建设，已关闭 |

### 背后诉求分析

- **本地化优先**：Ollama/LM Studio 相关 Issue 形成集群（#75, #109, #28），用户希望摆脱云 API 依赖
- **Google 生态脆弱性**：Gemini 3 系列变更导致多处 breakage（#79, #161, #127），暴露 Provider 抽象层的适配滞后
- **跨平台野心**：Android (#190)、Windows (#425)、Docker (#288) 并行推进，项目定位从"服务器端"向"全平台"扩张

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **P0** | [#79](https://github.com/sipeed/picoclaw/issues/79) | Gemini 3 Flash/Pro `thought_signature` 缺失导致函数调用失败 | ❌ 无 |
| **P0** | [#161](https://github.com/sipeed/picoclaw/issues/161) | Gemini 3 系列强制思维签名不兼容 | ❌ 无 |
| **P0** | [#127](https://github.com/sipeed/picoclaw/issues/127) | Windows + Gemini 双路径失效（404 v1main + 无 API Key） | ❌ 无 |
| **P1** | [#109](https://github.com/sipeed/picoclaw/issues/109) | Ollama 本地端点误报 "no API key configured" | ❌ 无 |
| **P1** | [#96](https://github.com/sipeed/picoclaw/issues/96) | OpenRouter 模型 `z-ai/glm4.7` API Key 识别失败 | ❌ 无 |
| **P1** | [#966](https://github.com/sipeed/picoclaw/issues/966) | Qwen 3.5 思考模型返回空内容（reasoning 耗尽 token） | ❌ 无 |
| **P1** | [#1037](https://github.com/sipeed/picoclaw/issues/1037) | 官网 footer 链接指向欺诈网站 `nanoclaw.net` | ❌ 无（安全紧急）|
| **P2** | [#288](https://github.com/sipeed/picoclaw/issues/288) | Docker 环境 identity/soul.md 修改不生效 | ❌ 无 |

**风险评估**：Google Gemini 3 系列适配问题形成**系统性风险**，3 个独立 Issue 指向同一根因（Mandatory Thought Signatures），需紧急协调 Provider 层重构。官网安全 Issue #1037 需立即处理。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **集中式命令系统** | [#959](https://github.com/sipeed/picoclaw/pull/959), [#960](https://github.com/sipeed/picoclaw/pull/960) | PR 已提交，Phase 1/2 完整 | ⭐⭐⭐⭐⭐ 高 |
| **会话管理（/new, /clear）** | [#572](https://github.com/sipeed/picoclaw/issues/572) | 依赖 #959/#960 | ⭐⭐⭐⭐⭐ 高 |
| **可配置 Hook 系统** | [#738](https://github.com/sipeed/picoclaw/issues/738) | 生态扩展刚需 | ⭐⭐⭐⭐☆ 中高 |
| **Open-Skills 集成** | [#415](https://github.com/sipeed/picoclaw/issues/415) | 有现成生态可对接 | ⭐⭐⭐⭐☆ 中高 |
| **Matrix 频道** | [#356](https://github.com/sipeed/picoclaw/pull/356) | PR 待审 | ⭐⭐⭐⭐☆ 中高 |
| **Azure OpenAI** | [#260](https://github.com/sipeed/picoclaw/issues/260) | 企业需求明确 | ⭐⭐⭐☆☆ 中 |
| **WhatsApp 支持** | [#248](https://github.com/sipeed/picoclaw/issues/248) | 无 PR | ⭐⭐☆☆☆ 低 |
| **多用户支持** | [#995](https://github.com/sipeed/picoclaw/issues/995) | 架构改动大 | ⭐⭐☆☆☆ 低 |

**路线图信号**：命令系统重构（#959/#960）是当前最成熟的架构级改进，将统一 Telegram/Discord/Slack 的命令体验，建议优先合并。

---

## 7. 用户反馈摘要

### 💬 真实痛点

> *"I tried so many times to change the soul.md, identity.md... I already remove all my configuration and directory and rebuild docker"* — [#288](https://github.com/sipeed/picoclaw/issues/288) @Fieter955

**Docker 配置持久化混乱**：用户反复修改身份文件无效，反映 Volume 挂载和配置加载顺序文档不足。

> *"When I ask bot to start any service it waits for the service to finish to proceed further"* — [#197](https://github.com/sipeed/picoclaw/issues/197) @Akshay-Rana-Gujjar

**长运行任务阻塞**：Express 服务器启动后 Agent 挂起，暴露工具执行模型的同步假设缺陷。

> *"The bot starts quite valueless initially"* — [#415](https://github.com/sipeed/picoclaw/issues/415) @nobuxpt

**冷启动体验差**：零 Skill 启动需要大量引导，用户期望开箱即用。

### ✅ 满意点

- 项目"small, fast, and powerful"定位获认同（#297 Logo 设计讨论）
- Windows 移植社区自发完成（#425），体现代码可移植性良好

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要事项

| 类型 | 条目 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| Issue | [#66](https://github.com/sipeed/picoclaw/issues/66) 环境变量 `{{.Name}}` 解析失败 | 2026-02-12 | 配置库 `caarlos0/env` 模板语法不兼容 | 高优先级修复，影响所有 Provider 环境变量注入 |
| Issue | [#116](https://github.com/sipeed/picoclaw/issues/116) 代码质量审计（Claude 扫描）| 2026-02-13 | 含 P0 级 BUG-001 重复函数定义 | 技术债务清理，建议下个补丁版本前处理 |
| Issue | [#171](https://github.com/sipeed/picoclaw/issues/171) 构建标签精简二进制 | 2026-02-14 | 无响应 | 边缘设备场景优化，契合项目定位 |
| PR | [#696](https://github.com/sipeed/picoclaw/pull/696) 模型解析修复 | 2026-02-23 | 待审 | 与 #783 相关，需确认是否已覆盖 |
| PR | [#844](https://github.com/sipeed/picoclaw/pull/844) Avian Provider | 2026-02-27 | 待审 | 新兴 Provider，可观察社区需求再决定 |

---

**日报生成时间**：2026-03-04  
**数据基准**：GitHub API 24h 滚动窗口

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-04

---

## 1. 今日速览

NanoClaw 今日呈现**高度活跃的开发态势**，24小时内产生 **26 个 PR 更新**（10 个已合并/关闭）和 **7 个 Issues 更新**，表明社区正处于密集迭代期。核心进展集中在**运行时架构升级**（Bun 迁移、多模型支持）、**通信层优化**（Unix Socket 替换文件 IPC）及**企业级功能**（飞书/Lark 集成、权限控制）。值得关注的是，项目正从"Claude 专用"向"多 LLM 运行时平台"演进，同时社区对技能市场（Skill Marketplace）的呼声持续高涨。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#667](https://github.com/qwibitai/nanoclaw/pull/667) | @echthesia | **Unix Socket 替换文件 IPC** | 消除轮询延迟，实现近即时消息传递；为高频交互场景（语音、实时协作）奠定基础设施 |
| [#644](https://github.com/qwibitai/nanoclaw/pull/644) | @brandontan | **多模态 Agent 能力**（语音转录、文件/图片发送、视觉输入） | 突破纯文本限制，使 NanoClaw 具备完整的富媒体处理能力 |
| [#677](https://github.com/qwibitai/nanoclaw/pull/677) | @garettmd | **可配置模型选择**（`/model` 命令 + `DEFAULT_MODEL` 环境变量） | 用户可运行时切换 Claude 模型，降低 token 成本或适应不同任务复杂度 |
| [#327](https://github.com/qwibitai/nanoclaw/pull/327) | @worldofgeese | **第三方 API 端点支持** | 为企业私有化部署、合规审查场景打开通道 |
| [#673](https://github.com/qwibitai/nanoclaw/issues/673) 关联修复 | - | `hq-sync` 脚本未追踪新文件问题 | 解决开发工作流中的隐性数据丢失风险 |

**整体评估**：今日合并的 PR 标志着 NanoClaw 从"功能扩展期"进入"架构成熟期"，核心改进围绕**性能（IPC）、灵活性（模型/运行时）、企业就绪（多模态/私有部署）**三大维度。

---

## 4. 社区热点

### 高互动议题

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#384 Skill Marketplace](https://github.com/qwibitai/nanoclaw/issues/384) | 👍 13, 评论 8, 持续 10 天 | **战略性基础设施需求**。作者 @longregen 提出 NanoClaw 的核心安全优势在于"最小可审计核心 + 按需扩展"，但当前缺乏官方技能发现/分发机制。社区需要：版本化技能仓库、依赖审计、可信签名。此议题若解决，将形成差异化护城河。 |
| [#664 vs Claude Code](https://github.com/qwibitai/nanoclaw/issues/664) | 评论 2, 创建即热 | **定位澄清需求**。用户 @paipeline 询问与 Claude Code 的本质差异，特别关注 Agents.md/SOUL.md/TOOL.md 等 agentic 能力。反映项目文档在**价值主张传达**上的不足——技术用户需要明确的架构对比图。 |
| [#661 Web UI](https://github.com/qwibitai/nanoclaw/issues/661) | 社区衍生项目 | **可视化需求溢出**。用户 @node 已自行开发并发布 [WhosClaw/nanoclaw-webui](https://github.com/WhosClaw/nanoclaw-webui)，表明纯 CLI/聊天界面存在用户体验瓶颈。官方是否收编或提供标准接口值得关注。 |

---

## 5. Bug 与稳定性

| 严重程度 | 议题 | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#669 定时任务重复执行](https://github.com/qwibitai/nanoclaw/issues/669) | 已报告，有 PR 待审 | 所有使用 `SCHEDULER_POLL_INTERVAL=60s` 的部署，容器启动慢时导致用户收到重复消息/邮件 | [#657](https://github.com/qwibitai/nanoclaw/pull/657)（原子化 claim 机制，3 行核心修复） |
| 🟡 **中** | [#670 API 限流时消息丢失](https://github.com/qwibitai/nanoclaw/pull/670) | PR 待合并 | Anthropic 限流场景下，用户仅收到限流提示，原请求被静默丢弃 | [#670](https://github.com/qwibitai/nanoclaw/pull/670)（自动重试 + 队列机制） |
| 🟢 **低** | [#603 移动端网站布局](https://github.com/qwibitai/nanoclaw/issues/603) | 已关闭 | 文档网站移动端显示异常 | 已修复 |

**风险评估**：定时任务重复执行是**生产环境数据完整性风险**，建议优先合并 #657。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度信号 | 纳入可能性 |
|:---|:---|:---|:---|
| **技能市场/注册中心** | #384 | 有详细架构论述，社区高赞 | ⭐⭐⭐⭐⭐ 高优先级基础设施 |
| **发送者白名单/触发权限控制** | [#678](https://github.com/qwibitai/nanoclaw/issues/678) | 企业场景刚需（家庭群防误触、工作团队成本控制） | ⭐⭐⭐⭐☆ 预计下一版本 |
| **Bun 运行时迁移** | [#675](https://github.com/qwibitai/nanoclaw/pull/675) / [#161](https://github.com/qwibitai/nanoclaw/pull/161) | 旧 PR 关闭，新 PR 重新基于主线 | ⭐⭐⭐⭐☆ 技术债务清理，性能收益明确 |
| **多运行时支持**（Claude/Codex/Gemini/OpenCode） | [#663](https://github.com/qwibitai/nanoclaw/pull/663) | PR 已提交，关闭 #80 | ⭐⭐⭐⭐⭐ 战略方向，打破供应商锁定 |
| **飞书/Lark 通道** | [#671](https://github.com/qwibitai/nanoclaw/pull/671) | PR 已提交，WebSocket 长连接模式 | ⭐⭐⭐⭐☆ 中国企业市场关键入口 |
| **Composio 100+ 集成** | [#545](https://github.com/qwibitai/nanoclaw/pull/545) | MCP 协议集成，HTTP 模式免本地依赖 | ⭐⭐⭐☆☆ 生态扩展，但增加外部依赖 |
| **Avian LLM 提供商** | [#549](https://github.com/qwibitai/nanoclaw/pull/549) | 支持 DeepSeek/Kimi/GLM/Minimax 等国产模型 | ⭐⭐⭐☆☆ 与 #663 多运行时存在重叠，需协调 |

---

## 7. 用户反馈摘要

### 痛点
- **成本控制焦虑**：[#678](https://github.com/qwibitai/nanoclaw/issues/678) 反映大群中任何人可触发 Agent 消耗 API token，缺乏细粒度权限
- **定位困惑**：[#664](https://github.com/qwibitai/nanoclaw/issues/664) 显示用户难以区分 NanoClaw 与 Claude Code 的边界
- **移动端体验**：[#603](https://github.com/qwibitai/nanoclaw/issues/603) 文档网站适配问题

### 满意点
- **安全架构认可**：#384 评论中用户明确赞赏"最小核心 + 按需扩展"的安全模型
- **自扩展能力**：[#661](https://github.com/qwibitai/nanoclaw/issues/661) 用户成功让 NanoClaw 自举开发 Web UI，验证 Agent 自我改进能力

### 使用场景
- **家庭场景**：家长希望限制孩子误触触发（#678）
- **企业协作**：飞书集成需求（#671）暗示国内团队部署
- **跨平台工作流**：Things.app 集成（[#496](https://github.com/qwibitai/nanoclaw/pull/496)）显示与现有生产力工具链整合需求

---

## 8. 待处理积压

| 项目 | 时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#384 Skill Marketplace](https://github.com/qwibitai/nanoclaw/issues/384) | 10 天 | 社区衍生方案可能碎片化，丧失架构一致性机会 | 维护者回应路线图，或创建 `nanoclaw/registry` 实验仓库 |
| [#276 Chrome Browser Skill](https://github.com/qwibitai/nanoclaw/pull/276) | 16 天 | 高价值功能（持久化浏览器、跨会话登录）被阻塞 | 审查 Docker 侧车安全模型，明确合并标准 |
| [#161 Bun 迁移](https://github.com/qwibitai/nanoclaw/pull/161) → [#675](https://github.com/qwibitai/nanoclaw/pull/675) | 21 天 | 技术债务累积，Node/Bun 双轨维护成本 | 设定 #675 审查截止日期，或明确拒绝并记录决策 |

---

*报告生成时间：2026-03-04 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-03-04

> 项目地址：https://github.com/nearai/ironclaw  
> 分析周期：过去24小时（2026-03-03）

---

## 1. 今日速览

IronClaw 今日呈现**高活跃度开发状态**：29个PR更新（19个待合并）、15个Issue更新（13个活跃/新开），核心团队持续密集输出。v0.14.0 发布候选已就绪（[#480](https://github.com/nearai/ironclaw/pull/480)），包含API破坏性变更。社区贡献者活跃度提升，新增 Venice.ai 提供商支持（[#451](https://github.com/nearai/ironclaw/pull/451)）等大型功能PR。稳定性方面，今日合并6个bug修复，主要集中在WASM工具参数解析、技能安装流程和内存搜索体验。

---

## 2. 版本发布

### v0.14.0 发布候选 | [#480](https://github.com/nearai/ironclaw/pull/480)

| 属性 | 详情 |
|:---|:---|
| **版本** | 0.13.1 → 0.14.0 |
| **状态** | 待合并（发布PR已创建） |
| **风险等级** | ⚠️ **API破坏性变更** |

**破坏性变更摘要：**
- `constructible_struct_adds_field`：外部可构造的公开结构体新增公开字段，现有结构体字面量构造代码需更新

**迁移建议：** 使用 `cargo semver-checks` 验证下游依赖兼容性，关注 `ironclaw` crate 的公开结构体变更。

---

## 3. 项目进展

### 今日已合并/关闭的 PR（6个）

| PR | 作者 | 核心贡献 | 关联Issue |
|:---|:---|:---|:---|
| [#502](https://github.com/nearai/ironclaw/pull/502) | @zmanian | **修复技能安装502错误**：使用slug替代显示名称构建ClawHub下载URL | [#482](https://github.com/nearai/ironclaw/issues/482) ✅ |
| [#503](https://github.com/nearai/ironclaw/pull/503) | @zmanian | **修复内存搜索结果链接**：将chunk UUID替换为源文档路径 | [#481](https://github.com/nearai/ironclaw/issues/481) ✅ |
| [#500](https://github.com/nearai/ironclaw/pull/500) | @zmanian | **修复手动触发routine的输出路由**：生成唯一`thread_id`避免输出到错误会话 | [#484](https://github.com/nearai/ironclaw/issues/484) |
| [#497](https://github.com/nearai/ironclaw/pull/497) | @zmanian | **修复工具调用标记泄露**：过滤`[Called tool ...]`等内部标记 | [#487](https://github.com/nearai/ironclaw/issues/487) |
| [#505](https://github.com/nearai/ironclaw/pull/505) | @henrypark133 | **优化工作空间模板加载顺序**：自定义模板优先于默认种子 | - |
| [#506](https://github.com/nearai/ironclaw/pull/506) | @nickpismenkov | **移除Okta工具**：减少依赖负担 | - |

### 关键进展评估

| 维度 | 进展 |
|:---|:---|
| **稳定性** | ⬆️ 6个生产bug修复，覆盖技能安装、内存搜索、routine触发、响应清理 |
| **测试基建** | ⬆️ [#507](https://github.com/nearai/ironclaw/pull/507) 引入OpenClaw风格的StubChannel和分层测试策略 |
| **开发者体验** | ⬆️ [#498](https://github.com/nearai/ironclaw/pull/498) 解决LLM参数类型不匹配这一长期痛点 |
| **平台扩展** | ➡️ [#451](https://github.com/nearai/ironclaw/pull/451) Venice.ai提供商、[#489](https://github.com/nearai/ironclaw/pull/489) WASM工具OAuth支持待审 |

---

## 4. 社区热点

### 最高讨论热度

| 排名 | Issue/PR | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🥇 | [#467](https://github.com/nearai/ironclaw/issues/467) Trajectory benchmark system | 2评论 | **质量基础设施**：社区需要可量化的agent评估体系，区分"硬断言"与"LLM-as-judge"两层评估 |
| 🥈 | [#410](https://github.com/nearai/ironclaw/issues/410) Cropped UI - Tablet | 1评论 | **移动端体验**：平板UI裁剪问题，影响生产环境使用 |
| 🥉 | [#459](https://github.com/nearai/ironclaw/issues/459) Missing docker images | 1评论 | **部署阻塞**：`ironclaw-worker:latest`镜像缺失，直接影响自托管用户 |

**深层信号：** 项目正从"功能建设期"转向"质量验证期"——benchmark系统提案（[#467](https://github.com/nearai/ironclaw/issues/467)）与测试基建PR（[#507](https://github.com/nearai/ironclaw/pull/507)）形成呼应，表明核心团队对生产就绪度的重视。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#494](https://github.com/nearai/ironclaw/issues/494) | Embedding维度不匹配（768 vs 1536），libSQL存储失败 | 无 | 🆘 **待响应** |
| 🔴 **高** | [#495](https://github.com/nearai/ironclaw/issues/495) | 内存清理任务重复执行（AFK后触发） | 无 | 🆘 **待响应** |
| 🟡 **中** | [#486](https://github.com/nearai/ironclaw/issues/486) | WASM工具拒绝JSON字符串形式的数字参数 | [#498](https://github.com/nearai/ironclaw/pull/498) | ✅ **已修复** |
| 🟡 **中** | [#487](https://github.com/nearai/ironclaw/issues/487) | 工具调用失败时泄露`[Called tool ...]`原始文本 | [#497](https://github.com/nearai/ironclaw/pull/497) | ✅ **已修复** |
| 🟡 **中** | [#485](https://github.com/nearai/ironclaw/issues/485) | Job重启失败无UI错误反馈 | 无 | ⏳ **待修复** |
| 🟡 **中** | [#483](https://github.com/nearai/ironclaw/issues/483) | Routine"Run Now"按钮无UI反馈 | 无 | ⏳ **待修复** |
| 🟡 **中** | [#504](https://github.com/nearai/ironclaw/issues/504) | Google Calendar集成bug（list等操作失效） | 无 | ⏳ **待修复** |
| 🟢 **低** | [#482](https://github.com/nearai/ironclaw/issues/482) | 技能下载失败时创建幽灵DB记录 | [#502](https://github.com/nearai/ironclaw/pull/502) | ✅ **已修复** |
| 🟢 **低** | [#481](https://github.com/nearai/ironclaw/issues/481) | 内存搜索结果链接到chunk UUID | [#503](https://github.com/nearai/ironclaw/pull/503) | ✅ **已修复** |

### 稳定性健康度评估

- **修复响应率：** 9个bug中6个已有fix（67%）
- **阻塞性问题：** 2个高严重度问题（embedding维度、内存清理）暂无响应，需优先关注
- **UI/UX债务：** 3个routine/job相关的UI反馈问题待处理

---

## 6. 功能请求与路线图信号

### 用户提出的新功能

| Issue | 描述 | 可行性评估 | 版本预测 |
|:---|:---|:---|:---|
| [#467](https://github.com/nearai/ironclaw/issues/467) | Trajectory benchmark system | ⭐⭐⭐⭐⭐ 高——与[#507](https://github.com/nearai/ironclaw/pull/507)测试基建PR协同 | v0.15.0 |
| [#466](https://github.com/nearai/ironclaw/issues/466) | 采用OpenClaw测试策略（三层分离、stub channels） | ⭐⭐⭐⭐⭐ 高——[#507](https://github.com/nearai/ironclaw/pull/507)正在实现 | v0.14.0 |
| [#492](https://github.com/nearai/ironclaw/issues/492) | Slack webhook HMAC-SHA256签名验证 | ⭐⭐⭐⭐☆ 中高——模式与现有Discord/Telegram验证类似 | v0.14.x |
| [#451](https://github.com/nearai/ironclaw/pull/451) | Venice.ai提供商支持 | ⭐⭐⭐⭐☆ 中高——PR已提交，待审 | v0.14.0 |
| [#465](https://github.com/nearai/ironclaw/pull/465) | 对话历史加载与消息批处理 | ⭐⭐⭐⭐☆ 中高——PR已提交，解决[#259](https://github.com/nearai/ironclaw/issues/259) | v0.14.0 |
| [#291](https://github.com/nearai/ironclaw/pull/291) | Anthropic prompt caching | ⭐⭐⭐⭐☆ 中高——大型PR，已开放11天 | v0.15.0 |
| [#321](https://github.com/nearai/ironclaw/pull/321) | NPA心理画像系统 | ⭐⭐⭐☆☆ 中——大型功能，需评估隐私影响 | v0.16.0+ |

### 路线图信号

```
v0.14.0（即将发布）→ 测试基建 + 稳定性修复 + 新提供商
    ↓
v0.14.x → Slack安全增强 + Google Calendar修复
    ↓
v0.15.0 → Benchmark系统 + Prompt caching + 性能优化
```

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#494](https://github.com/nearai/ironclaw/issues/494) @PolBlanco | Embedding维度硬编码限制 | 使用非OpenAI嵌入模型时完全无法工作 |
| [#495](https://github.com/nearai/ironclaw/issues/495) @PolBlanco | 内存清理任务竞态条件 | 长时间AFK后系统不稳定 |
| [#459](https://github.com/nearai/ironclaw/issues/459) @JeremyHutchings | Docker镜像缺失 | 自托管部署阻塞 |
| [#410](https://github.com/nearai/ironclaw/issues/410) @henrypark133 | 平板UI不可用 | 移动办公场景受限 |
| [#504](https://github.com/nearai/ironclaw/issues/504) @henrypark133 | Google Calendar集成残缺 | 日程管理自动化失败 |

### 满意度信号

- ✅ **测试质量认可：** @zmanian 主动研究OpenClaw测试架构并引入（[#466](https://github.com/nearai/ironclaw/issues/466)/[#507](https://github.com/nearai/ironclaw/pull/507)），表明对代码质量的投资意愿
- ✅ **快速修复响应：** 技能安装、内存搜索等bug当日修复

### 不满意信号

- ❌ **基础设施文档：** Docker镜像问题（[#459](https://github.com/nearai/ironclaw/issues/459)）表明部署文档/镜像发布流程有缺口
- ❌ **配置灵活性：** Embedding维度硬编码（[#494](https://github.com/nearai/ironclaw/issues/494)）显示多模型支持不足

---

## 8. 待处理积压

### 需维护者关注的重要事项

| 类型 | 条目 | 年龄 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| 🔥 **阻塞性Issue** | [#494](https://github.com/nearai/ironclaw/issues/494) Embedding维度错误 | 1天 | 高——完全阻断非OpenAI嵌入 | 评估是否紧急发布v0.14.1或提供配置绕过 |
| 🔥 **阻塞性Issue** | [#495](https://github.com/nearai/ironclaw/issues/495) 内存清理竞态 | 1天 | 高——系统稳定性 | 需要核心团队调查并发控制 |
| 🔥 **部署Issue** | [#459](https://github.com/nearai/ironclaw/issues/459) Docker镜像缺失 | 1天 | 高——自托管用户 | 检查CI/CD镜像发布流程 |
| ⏳ **大型PR** | [#291](https://github.com/nearai/ironclaw/pull/291) Anthropic prompt caching | 11天 | 中——功能就绪待审 | 安排代码审查，避免长期腐烂 |
| ⏳ **大型PR** | [#321](https://github.com/nearai/ironclaw/pull/321) NPA心理画像 | 9天 | 中——需要架构决策 | 明确隐私/安全审查流程 |
| ⏳ **UX债务** | [#410](https://github.com/nearai/ironclaw/issues/410) 平板UI裁剪 | 4天 | 中——移动端体验 | 分配前端资源响应 |

---

## 附录：核心贡献者活跃度

| 贡献者 | 今日PR | 今日Issue | 主要领域 |
|:---|:---|:---|:---|
| @zmanian | 5个（4个修复+1个测试基建） | 2个提案 | 稳定性、测试架构 |
| @henrypark133 | 3个（1个合并+2个待审） | 3个报告 | 集成（Slack/GCalendar）、UI |
| @PierreLeGuen | - | 6个bug报告 | 质量反馈 |
| @jrevillard | 2个待审 | - | WhatsApp、对话历史 |
| @PolBlanco | - | 2个bug报告 | 运行时问题 |

---

*日报生成时间：2026-03-04*  
*数据来源：GitHub API /nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-04

## 1. 今日速览

LobsterAI 今日社区活跃度极高，30 条 Issues 更新（19 条活跃/新开，11 条关闭）与 9 条 PR 更新（7 条已合并/关闭）显示项目处于快速迭代期。核心进展集中在 **Windows 沙箱稳定性修复**（PR #238 一次性解决 VM 启动、文件附件、镜像构建三大问题）与 **MCP 协议支持**（PR #233 已合并）。用户侧痛点明显：macOS 性能问题（输入卡顿、内存飙升）与长会话 API 错误成为新的稳定性瓶颈，而沙箱文件访问问题虽有多项关闭 Issue，但仍有用户报告异常。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 **v0.1.23**（2026-03-02 左右发布），但用户反馈显示该版本存在明显的 macOS 性能退化（#232、#244）与覆盖安装失败问题（#246）。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#238](https://github.com/netease-youdao/LobsterAI/pull/238) | @btc69m979y-dotcom | **Windows 沙箱 VM 全面修复**：解决 QEMU 重试文件锁冲突、VM 启动卡空 runlevel、Alpine 镜像 OpenRC 配置、agentd 服务依赖优化、Windows 路径处理（反斜杠/UNC）、附件目录权限、镜像构建 npm 安装失败等 7 类问题 | ⭐⭐⭐⭐⭐ 彻底解决 Windows 沙箱可用性，是近期最大稳定性跃进 |
| [#233](https://github.com/netease-youdao/LobsterAI/pull/233) | @liugang519 | **MCP (Model Context Protocol) 支持** | ⭐⭐⭐⭐⭐ 架构级升级，为插件生态和跨工具集成奠定基础 |
| [#216](https://github.com/netease-youdao/LobsterAI/pull/216) | @btc69m979y-dotcom | Windows 打包时 skill 依赖安装失败修复（`shell: true`） | ⭐⭐⭐ 配套 #238 完善 Windows 体验 |
| [#236](https://github.com/netease-youdao/LobsterAI/pull/236) | @liuzhq1986 | 修复 Issue #195（邮箱 SKILL 搜不到发票类型邮件） | ⭐⭐⭐ 垂直场景体验优化 |
| [#222](https://github.com/netease-youdao/LobsterAI/pull/222) | @liuzhq1986 | **数理化公式渲染**（KaTeX + remark-math） | ⭐⭐⭐⭐ 教育/学术场景差异化能力 |
| [#229](https://github.com/netease-youdao/LobsterAI/pull/229) | @fisherdaddy | IM 配置保存 bug 修复、邮箱配置页交互优化、关于页新增服务条款与导出日志 | ⭐⭐⭐ 基础体验打磨 |
| [#228](https://github.com/netease-youdao/LobsterAI/pull/228) | @renhongchao | 小蜜蜂账号实时变更支持 | ⭐⭐ 账号体系灵活性 |

### 待审阅 PR

- [#240](https://github.com/netease-youdao/LobsterAI/pull/240): Workflow 增强提案（多 Agent 协作 + soul.md 专属配置 + PASS/REJECTS 状态流转）—— 社区创新设计，需维护者评估架构契合度
- [#237](https://github.com/netease-youdao/LobsterAI/pull/237): 新增 Stepfun 模型提供商（step-3.5-flash）

---

## 4. 社区热点

| 排名 | Issue/PR | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 #1 | [#3](https://github.com/netease-youdao/LobsterAI/issues/3) Sandbox 自动下载安装的版本错误 | 7 评论，👍1，跨 12 天持续讨论 | **Apple Silicon Mac 架构错配**：M4 设备被强制安装 x86_64 沙箱导致 HVF 加速失败，反映发布流程的架构检测缺陷 |
| 🔥 #2 | [#205](https://github.com/netease-youdao/LobsterAI/issues/205) 最新版的还是安装不了？？ | 6 评论，用户情绪强烈 | **安装器可靠性危机**：用户多次反馈安装卡住，清理重装导致数据丢失，信任度受损 |
| 🔥 #3 | [#125](https://github.com/netease-youdao/LobsterAI/issues/125) + [#78](https://github.com/netease-youdao/LobsterAI/issues/78) + [#213](https://github.com/netease-youdao/LobsterAI/issues/213) 沙箱文件访问问题 | 各 1-3 评论，批量关闭 | **沙箱文件 IO 是持续痛点**：虽有多项修复，但用户反复报告"文件已上传但沙箱找不到"，说明修复未完全覆盖场景或回归风险 |

**深层信号**：用户对"沙箱可用性"的容忍阈值极低，一次失败即导致工具链断裂感；同时数据迁移/升级路径的缺失（#246）正在积累用户流失风险。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃** | [#232](https://github.com/netease-youdao/LobsterAI/issues/232) | v0.1.23 macOS 内存飙升至卡死，无法结束任务，疑似沙箱模式导致 | 无 | **待响应** |
| 🔴 **P0-功能阻断** | [#239](https://github.com/netease-youdao/LobsterAI/issues/239) | Windows 10 全新安装 v0.1.24 后，任何提问均报错 `Claude Code process exited with code 1` | 无 | **待响应** |
| 🔴 **P0-功能阻断** | [#243](https://github.com/netease-youdao/LobsterAI/issues/243) [#191](https://github.com/netease-youdao/LobsterAI/issues/191) | 长会话多轮任务后必现 API Error 400：`tool_calls` 后缺少对应 tool messages | 无 | **待响应，重复出现** |
| 🟡 **P1-体验受损** | [#244](https://github.com/netease-youdao/LobsterAI/issues/244) | macOS 输入严重卡顿（M2 Max 32G），搜狗/系统拼音均有延迟 | 无 | **待响应** |
| 🟡 **P1-功能受限** | [#231](https://github.com/netease-youdao/LobsterAI/issues/231) | 新版本内置 Python 不可用 | 无 | **待响应** |
| 🟡 **P1-集成故障** | [#245](https://github.com/netease-youdao/LobsterAI/issues/245) | Ollama 本地模型调用频繁中断报错 | 无 | **待响应** |
| 🟡 **P1-数据风险** | [#246](https://github.com/netease-youdao/LobsterAI/issues/246) | 无法覆盖安装，清理重装导致训练话术丢失，用户寻求数据库迁移方案 | 无 | **待响应** |

**关键观察**：今日关闭的 11 条 Issues 中 **8 条为沙箱相关问题**，但新报告的 #232、#239、#243 显示稳定性债务仍在转移而非消除。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 技术可行性 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **Workflow 多 Agent 协作** | [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | 中（架构改动） | 60% — 设计完整，需评估与现有 skill 体系兼容性 |
| **MCP 协议支持** | [#233](https://github.com/netease-youdao/LobsterAI/pull/233) | ✅ 已合并 | — |
| **上下文压缩** | [#227](https://github.com/netease-youdao/LobsterAI/issues/227) | 高（常见方案） | 70% — 直接解决 #191/#243 类问题根因 |
| **IM 独立会话启动** | [#179](https://github.com/netease-youdao/LobsterAI/issues/179) | 中 | 50% — 企业场景刚需 |
| **Stepfun 模型接入** | [#237](https://github.com/netease-youdao/LobsterAI/pull/237) | 高（OpenAI-compatible） | 80% — 提供商扩展常规迭代 |
| **OAuth 支持** | [#189](https://github.com/netease-youdao/LobsterAI/issues/189) | 中 | 40% — 企业 SSO 场景，需安全评审 |
| **中文路径空格处理** | [#230](https://github.com/netease-youdao/LobsterAI/issues/230) | 高 | 75% — 明确的字符串处理 bug |

---

## 7. 用户反馈摘要

### 😤 核心痛点
- **"沙箱像黑盒"**：文件明明在 `attachments/manual` 却报告未上传（#125），路径含中文被强制加空格（#230）
- **"升级即冒险"**：覆盖安装失败、清理导致 14MB 训练数据丢失（#246），用户被迫研究 sqlite 备份
- **"长会话诅咒"**：多轮后必现 API 400 错误，被迫频繁开新对话（#191/#243）

### 😐 体验摩擦
- macOS 输入延迟"比其他 app 都明显"（#244）
- 飞书集成缺少状态图标与实时回显（#242）
- Telegram 群组多用户无法区分，非 @ 消息也全回复（#241）

### ✅ 正向反馈
- 本地 OpenClaw 部署对比：用户认可 LobsterAI 的集成度，但指出"记忆能力不如原版"（#186）
- 公式渲染（#222）与教育场景契合度被期待

---

## 8. 待处理积压

| Issue | 创建时间 | 问题性质 | 提醒原因 |
|:---|:---|:---|:---|
| [#37](https://github.com/netease-youdao/LobsterAI/issues/37) 联网搜索能力被禁用 | 2026-02-22 | 产品策略 | 10 天无响应，涉及应用层策略配置，需产品决策 |
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) 记忆能力很差 | 2026-02-28 | 核心能力 | 与 #227 上下文压缩相关，建议关联评估 |
| [#202](https://github.com/netease-youdao/LobsterAI/issues/202) Windows 强制依赖 Cygwin | 2026-03-02 | 兼容性 | 与 #238 同作者领域，可能需补充修复 |
| [#195](https://github.com/netease-youdao/LobsterAI/issues/195) 邮箱 SKILL 发票搜索 | 2026-03-01 | 垂直场景 | PR #236 声称修复，需验证关闭后用户反馈 |

---

**日报生成时间**：2026-03-04  
**数据基准**：GitHub API 过去 24 小时活动流

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-03-04

## 1. 今日速览

TinyClaw 今日呈现**高活跃度开发态势**，24小时内产生4条活跃Issue、5条PR更新（含1条已合并），并连发v0.0.8/v0.0.9两个版本。核心焦点集中在**AI Provider生态扩展**（Cursor CLI、GitHub Copilot SDK、ClawRouter等）与**Telegram通道稳定性修复**。社区对多模型支持诉求强烈，同时macOS启动崩溃问题成为新的稳定性隐患。整体健康度良好，但需关注快速迭代中的平台兼容性债务。

---

## 2. 版本发布

### v0.0.9 | [Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.9)
**关键修复：Telegram轮询重启死循环**

| 属性 | 内容 |
|:---|:---|
| **问题场景** | 笔记本休眠/ WiFi重连后触发无限409冲突循环 |
| **根因** | `stopPolling()` 未await导致旧轮询线程存活，与新线程竞争 |
| **影响范围** | 所有使用Telegram通道的生产部署 |
| **迁移建议** | 无需配置变更，建议所有v0.0.8用户立即升级 |

### v0.0.8 | [Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.8)
**功能更新：跨通道重启命令 + 轮询看门狗**

| 功能 | 说明 |
|:---|:---|
| `/restart` 聊天命令 | 支持Discord、Telegram、WhatsApp三端内直接重启TinyClaw |
| `tinyclaw-admin` Skill | 注册系统级管理指令 |
| 轮询看门狗 | Telegram客户端自动恢复机制（v0.0.9对此进行了热修复） |

> ⚠️ **注意**：v0.0.8的轮询看门狗实现存在竞态条件，已被v0.0.9覆盖修复。

---

## 3. 项目进展

### 已合并/关闭
| PR | 作者 | 贡献 |
|:---|:---|:---|
| [#153](https://github.com/TinyAGI/tinyclaw/pull/153) | @mokizzz | **团队管理基础设施** — 新增`team add-agent`/`team remove-agent`命令，修复Agent移除时的团队引用残留问题，支持Leader自动重分配或空团队清理 |

### 待合并（4条）
| PR | 状态 | 推进价值 |
|:---|:---|:---|
| [#159](https://github.com/TinyAGI/tinyclaw/pull/159) Cursor CLI支持 | 🔍 Review中 | **AI Provider生态第4极** — 填补Cursor Pro/Business团队需求，与Claude/Codex/OpenCode形成完整矩阵 |
| [#155](https://github.com/TinyAGI/tinyclaw/pull/155) Telegram自动重连 | 🔍 Review中 | 与v0.0.9形成双重保险，覆盖瞬断网络场景（ECONNRESET/ETIMEDOUT） |
| [#154](https://github.com/TinyAGI/tinyclaw/pull/154) 安全加固 | 🔍 Review中 | 关闭#19安全缺口：移除日志明文消息、Chromium沙箱默认启用 |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) OpenViking续作 | 🔄 更新中 | 插件系统硬化后的功能延续，依赖#149基础 |

**整体推进评估**：团队管理能力正式落地（v0.0.10可期），AI Provider扩展进入密集期，安全基线显著提升。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🥇 | [#124](https://github.com/TinyAGI/tinyclaw/issues/124) 更多Provider支持 | 4评论，18天持续活跃 | **成本焦虑驱动**：用户明确提到"Claude Code API配额消耗过快"，寻求z.ai/Kimi/OpenRouter等平价替代，反映Agent Token用量爆炸的普遍痛点 |
| 🥈 | [#159](https://github.com/TinyAGI/tinyclaw/pull/159) Cursor CLI PR | 新增高价值PR | **企业现有工具复用**：团队已购Cursor Pro/Business，拒绝重复采购Claude API |
| 🥉 | [#158](https://github.com/TinyAGI/tinyclaw/issues/158) ClawRouter集成 | 新提Feature | **路由智能化需求**：希望集成BlockRunAI的ClawRouter实现模型自动选型与负载均衡 |

**信号解读**：社区正从"能用"转向"省着用"——多Provider支持已从Nice-to-have变为Cost-critical需求。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 备注 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | macOS启动即崩溃（zsh初始化竞态） | [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | ❌ 无Fix PR | **阻塞新用户**：tmux会话存活但所有子进程秒退，无错误输出，重启无效 |
| 🟡 **High** | Telegram轮询死循环（已修复） | v0.0.9 | ✅ 已发布 | 影响休眠恢复场景 |
| 🟡 **High** | Telegram瞬断后永久失联 | [#155](https://github.com/TinyAGI/tinyclaw/pull/155) | 🔄 PR待合并 | 与v0.0.9互补覆盖不同故障模式 |
| 🟢 **Medium** | 日志泄露消息内容 + 沙箱配置风险 | [#154](https://github.com/TinyAGI/tinyclaw/pull/154) | 🔄 PR待合并 | 安全合规项 |

> **行动建议**：#156 需要维护者优先响应，建议补充`tinyclaw start --debug`模式收集zsh初始化日志。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性评估 | 版本预测 |
|:---|:---|:---|:---|
| **Cursor CLI Provider** | PR #159 | ⭐⭐⭐⭐⭐ 代码已就绪 | v0.0.10 |
| **GitHub Copilot SDK** | Issue #157 | ⭐⭐⭐⭐☆ 官方SDK成熟，订阅即解锁多模型 | v0.0.11 |
| **ClawRouter集成** | Issue #158 | ⭐⭐⭐☆☆ 需评估与现有路由架构兼容性 | Backlog |
| **z.ai/Kimi/OpenRouter** | Issue #124 | ⭐⭐⭐⭐☆ 社区呼声高，OpenRouter已有标准接口 | v0.0.11-0.0.12 |

**路线图推断**：TinyClaw正从"单一Claude依赖"转向"Provider中台化"，下一版本核心叙事将是**"Bring Your Own Model"**。

---

## 7. 用户反馈摘要

> 提炼自Issue #124评论及PR描述

| 维度 | 反馈 |
|:---|:---|
| **痛点** | "Agent Token用量大 → Claude Code API配额迅速耗尽" — 成本不可控 |
| **场景** | 团队已采购Cursor Business，希望工具链整合而非重复付费 |
| **满意点** | /restart跨通道命令获得好评（v0.0.8），降低运维门槛 |
| **不满点** | macOS稳定性"开箱即败"，影响开发者体验口碑 |
| **隐需** | 模型路由自动化（ClawRouter信号）——不想手动切换Provider |

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 风险 |
|:---|:---|:---|:---|
| **长期Issue** | [#124](https://github.com/TinyAGI/tinyclaw/issues/124) 多Provider支持 | 2026-02-18（14天） | 需求已被PR #159部分覆盖，需更新Scope或关闭 |
| **Stale PR** | 无 | — | 当前PR周转健康（均3日内更新） |

**维护者提醒**：建议对#124进行状态同步——确认Cursor/Copilot/ClawRouter是否满足原始诉求，或需保留OpenRouter等特定实现。

---

*日报生成时间：2026-03-04 | 数据来源：TinyClaw GitHub 公开事件流*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-03-04

## 1. 今日速览

CoPaw 今日呈现**高度活跃状态**，24小时内产生50条Issues更新（35条新开/活跃，15条关闭）和50条PR更新（22条待合并，28条已合并/关闭），社区贡献者参与度显著提升。项目发布v0.0.5-beta.1版本，重点修复vLLM嵌入支持和配置持久化问题。值得注意的是，**推理模型（Kimi/DeepSeek）的tool call兼容性**成为今日技术焦点，多个相关Issue集中爆发；同时**多语言本地化**（法语、日语）和**渠道功能增强**（Twilio语音、Telegram配置）显示项目正加速国际化和功能扩展。

---

## 2. 版本发布

### v0.0.5-beta.1 已发布
🔗 https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.5-beta.1

| 变更项 | 说明 | 影响 |
|:---|:---|:---|
| **vLLM嵌入支持修复** | 新增vLLM embedding支持（#383） | 使用vLLM作为嵌入模型的用户可正常初始化 |
| **配置持久化修复** | `providers.json`现在正确持久化到`SECRET_DIR`同级目录（#396） | 修复Docker部署下自定义配置丢失问题 |
| **版本号升级** | 0.0.5b1 | 无破坏性变更 |

**迁移注意事项**：Docker用户建议重新拉取镜像并检查`providers.json`路径是否正确迁移。

---

## 3. 项目进展

### 今日已合并/关闭的关键PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| #390 | @lailoo | **记忆系统优化**：保留thinking内容用于更好的摘要 | 解决Kimi K2.5等推理模型的记忆压缩问题 |
| #390 | @lailoo | 简化`TimestampedDashScopeChatFormatter`的thinking块处理 | 提升长对话稳定性 |

### 待合并的重要PR（22条中精选）

| PR | 状态 | 功能价值 | 预计影响 |
|:---|:---|:---|:---|
| #534 法语支持 | 🔍 审核中 | 完整17页文档+README法语翻译 | 北美法语区用户获取门槛大幅降低 |
| #38 Twilio语音渠道 | 🔍 审核中 | 实时电话交互+Cloudflare隧道集成 | 开启语音AI助手新场景 |
| #514 渠道思考内容过滤 | 🔍 审核中 | 飞书默认过滤tool/thinking消息 | 企业场景信息泄露风险降低 |
| #408 模型自动发现 | 🔍 审核中 | `/api/models/{provider_id}/discover`端点+Anthropic支持 | 多模型管理UX质变 |
| #284 技能安全扫描 | 🔍 审核中 | 安装/创建/启用时的多层静态分析（YARA/正则） | 供应链安全关键基础设施 |
| #373 动态MCP持久化 | 🔍 审核中 | 修复session间MCP连接丢失问题 | MCP生态可用性核心修复 |
| #519 Web UI认证 | 🔍 审核中 | 基于.env的基础登录页 | 公网部署安全刚需 |

**整体评估**：项目正从"功能可用"向"企业就绪"演进，安全、国际化、渠道多样性成为明确方向。

---

## 4. 社区热点

### 🔥 讨论最活跃的Issues

| 排名 | Issue | 评论数 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|
| 1 | #61 [CLOSED] 虚拟环境初始化失败 | 15 | Windows虚拟环境下`.copaw`文件夹未创建 | **安装体验**仍是最大流失点 |
| 2 | #414 [CLOSED] ClosedResourceError对话报错 | 11 | `/tmp/copaw_query_error`临时文件异常 | 错误处理机制需优化 |
| 3 | #423 [CLOSED] GGUF模型加载失败 | 9 | Qwen3-VL-2B-Thinking-GGUF加载报错 | 本地模型+视觉模型组合需求上升 |
| 4 | #91 [OPEN] QQ机器人不回复 | 7 | 控制台可见消息但无回调 | 渠道集成深度不足 |
| 5 | #510 [OPEN] 钉钉长文本报错 | 6 | 131072 token上下文限制触发 | 企业场景长文档处理刚需 |
| 6 | #280 [OPEN] 内置Skills和MCP讨论 | 6 | 开箱即用vs自定义扩展的平衡 | **产品定位**核心议题 |

### 高价值讨论

**#280 内置Skills和MCP讨论**（🔗 https://github.com/agentscope-ai/CoPaw/issues/280）
- 核心矛盾：预装热门技能提升开箱体验 vs 依赖膨胀和版本冲突
- 社区建议方向：分级安装（核心/推荐/可选）、依赖隔离、技能市场

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 现象 | 状态 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🔴 **P0-阻塞** | #388 Kimi 2.5 thinking模式400错误 | `reasoning_content`在tool call后缺失 | 🟡 OPEN | #158 审核中 |
| 🔴 **P0-阻塞** | #507 DeepSeek-reasoner工具调用后失败 | "Missing reasoning_content field" | 🟡 OPEN | #158 可能相关 |
| 🟡 **P1-高** | #372 配置自动重写阻断LLM访问 | 本地Ollama配置被覆盖 | 🟡 OPEN | 待认领 |
| 🟡 **P1-高** | #400 钉钉图片消息异常 | `image_url` variant不被识别 | 🟡 OPEN | 待认领 |
| 🟡 **P1-高** | #148 Gemini 3系列缺少thought_signature | 工具调用触发400错误 | 🟡 OPEN | 待认领 |
| 🟡 **P1-高** | #511 v0.0.4技能重复显示 | builtin+customized各11+10个重复 | 🟡 OPEN | 待认领 |
| 🟢 **P2-中** | #505 停止输出后无法继续 | "Answer has been stopped"需刷新 | 🟡 OPEN | 待认领 |
| 🟢 **P2-中** | #497 切换页面丢失任务状态 | Chat页任务执行中跳转后不可见 | 🟡 OPEN | 待认领 |

### 关键技术分析

**推理模型兼容性危机**：#388和#507揭示同一根因——CoPaw的message formatter未正确处理thinking/reasoning_content在tool call场景下的传递。这是推理模型（Kimi K2.5、DeepSeek-R1、Qwen3-Thinking）普及后的架构级挑战，#158的formatter修复是系统性解决方案。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 需求 | 场景 | 纳入可能性评估 |
|:---|:---|:---|:---:|
| #508 多Agent编排网关 | 从单Agent架构转向真正的多Agent协作 | 复杂工作流、角色分工、并行执行 | ⭐⭐⭐⭐⭐ 高优先级，架构级需求 |
| #415 完整Human-in-the-Loop | 继承AgentScope的人工介入能力 | 关键决策人工审核、异常处理 | ⭐⭐⭐⭐☆ 框架能力补全 |
| #492 Web UI登录页 | 基础认证防止未授权访问 | 公网部署安全 | ⭐⭐⭐⭐⭐ **#519已实现，待合并** |
| #478 服务停止命令 | `copaw stop`优雅关闭 | 运维标准化 | ⭐⭐⭐☆☆ 体验优化 |
| #509 前端文件发送/查看 | 上传/下载文件能力 | 文档问答、文件分析 | ⭐⭐⭐⭐☆ 多模态能力扩展 |

### 路线图信号

- **近期（v0.0.5正式版）**：推理模型兼容性修复、Web UI认证、动态MCP持久化
- **中期（v0.1.0）**：多Agent编排网关（#508）、技能安全扫描框架（#284）
- **长期**：企业级渠道生态（Twilio语音+Telegram+现有IM矩阵）

---

## 7. 用户反馈摘要

### 真实痛点（来自Issue评论）

| 痛点类别 | 具体描述 | 代表Issue |
|:---|:---|:---|
| **安装门槛** | "比网易龙虾AI还难用"（#231）、Windows LTSC环境安装失败 | #61, #484 |
| **配置脆弱性** | Docker重启丢配置、配置被自动重写、虚拟环境路径问题 | #80, #372 |
| **模型兼容性** | 推理模型tool call崩溃、Gemini 3新API适配滞后 | #388, #507, #148 |
| **渠道深度** | QQ回调失败、钉钉图片/长文本异常、飞书图片兼容 | #91, #400, #510, #70 |
| **可观测性** | Playwright下载无进度、任务执行中切换页面丢失状态 | #376, #497 |

### 满意点

- 多渠道覆盖能力（钉钉、飞书、QQ、iMessage等）获认可
- 自定义模型配置灵活性（CLI方式）
- 开源社区响应速度（多数Issue 24-48小时内有回复）

---

## 8. 待处理积压

### 需维护者关注的重要积压

| Issue/PR | 创建时间 | 问题 | 行动建议 |
|:---|:---:|:---|:---|
| #158 保留reasoning_content | 2026-02-28 | 推理模型兼容性核心修复，审核中4天 | 优先合并，阻断P0问题 |
| #231 llama.cpp使用问题 | 2026-03-01 | 本地模型部署文档缺失 | 合并#247 FAQ补充 |
| #280 内置Skills讨论 | 2026-03-02 | 产品定位战略议题，6条评论无官方回应 | 维护者参与定调 |
| #38 Twilio语音渠道 | 2026-02-28 | 大型功能PR，审核中4天 | 安排架构评审 |
| #373 动态MCP持久化 | 2026-03-02 | MCP生态关键修复，影响session状态 | 优先测试合并 |

---

**数据来源**：GitHub API | **生成时间**：2026-03-04 | **项目地址**：https://github.com/agentscope-ai/CoPaw

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-04

---

## 1. 今日速览

ZeptoClaw 今日展现**极高开发活跃度**，24小时内完成 **7个 Issues 关闭、14个 PR 合并/关闭**，核心贡献者 @qhkm 主导了架构层面的重大推进。项目正经历从"功能扩展期"向"生产就绪期"的关键转型：安全体系（TaintEngine 污染追踪）、部署形态（MCP Server 模式、OpenAI 兼容 API）、运行时可靠性（LoopGuard 升级）三大支柱同步落地。依赖更新自动化程度良好（Dependabot 5个 PR），但测试基础设施（Docker/act 环境差异）暴露出稳定性风险需关注。

---

## 2. 版本发布

**无新版本发布**

> 今日无 Release 产出，但密集的功能合并预示近期可能有 v0.x 里程碑版本。

---

## 3. 项目进展

### 🔥 核心架构突破

| PR | 功能 | 影响 |
|:---|:---|:---|
| [#224](https://github.com/qhkm/zeptoclaw/pull/224) | **Thin Kernel 重构** | 将 970 行的 `create_agent_with_template()` 拆解为 `ZeptoKernel::boot()` 统一入口，provider 链、工具注册、安全模块、指标、钩子、内存、运行时、定时任务全部标准化组装 |
| [#233](https://github.com/qhkm/zeptoclaw/pull/233) | **MCP Server 模式** | ZeptoClaw 从 MCP Client 升级为双向 MCP 节点，支持 Claude Desktop/VS Code/Cursor 直接调用其工具；提供 stdio（默认）和 HTTP 两种传输层 |
| [#235](https://github.com/qhkm/zeptoclaw/pull/235) | **OpenAI 兼容 API** | 完整实现 `/v1/chat/completions`（流式 SSE + 非流式 JSON）和 `/v1/models`，任何 OpenAI SDK 应用可零改动迁移 |

### 🛡️ 安全体系升级

| PR | 功能 | 技术要点 |
|:---|:---|:---|
| [#239](https://github.com/qhkm/zeptoclaw/pull/239) → [#240](https://github.com/qhkm/zeptoclaw/pull/240) → [#241](https://github.com/qhkm/zeptoclaw/pull/241) | **TaintEngine 污染追踪** | 类型级数据流追踪：自动标记 `ExternalNetwork`/`Secret`/`UserInput`/`Pii`/`UntrustedAgent` 来源，阻断污染数据流入 shell/网络/message 敏感 sink |
| [#236](https://github.com/qhkm/zeptoclaw/pull/236) | **LoopGuard 2.0** | 多层检测：ping-pong 周期振荡（period-2/3）、结果感知阻塞（hash 含 tool+params+result）、轮询松弛策略、分级响应（Warn→Block→CircuitBreak） |

### 🔧 工具生态

| PR | 功能 | 说明 |
|:---|:---|:---|
| [#214](https://github.com/qhkm/zeptoclaw/pull/214) | **SearXNG 搜索支持** | 新增自托管搜索引擎选项，与 Brave/DuckDuckGo 并列，满足隐私敏感场景 |

### 📦 基础设施

- [#183](https://github.com/qhkm/zeptoclaw/pull/183) 大规模依赖更新（cargo/npm/Docker/Actions）+ Dependabot 配置优化
- 5个 Dependabot 自动 PR 合并（clap、futures、@types/node、rust 基础镜像）

---

## 4. 社区热点

**今日无高互动讨论**。所有 Issues/PR 评论数均为 0-1，反映：
- 开发模式以**核心维护者主导**为主，社区参与度有限
- 功能设计通过 Issue 模板预先充分定义，减少后期讨论成本
- ⚠️ **信号**：项目尚未形成外部贡献者生态，需关注 #222 #221 等开放 Issue 的社区反馈

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| **P2-high** | [#238](https://github.com/qhkm/zeptoclaw/issues/238) | **Docker/act 测试环境不一致**：`providers::plugin::tests::test_chat_spawn_failure`、`tools::binary_plugin_tests` 等在容器化 CI 中失败，本地通过 | 🔴 **开放，无 fix PR** |
| P3-normal | [#237](https://github.com/qhkm/zeptoclaw/issues/237) | 文档：screenshot 功能行为混淆（`--features screenshot` 是网页截图非桌面截图，且 LLM 可能误解指令路由到错误工具） | 🟡 开放，文档类 |

> **风险评估**：#238 阻塞了依赖更新的可靠验证，建议优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 可行性评估 | 纳入预测 |
|:---|:---|:---|:---|
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) | 模板级能力沙盒（工具白名单、shell 模式、资源限制） | ⭐⭐⭐⭐⭐ 高 | **下一版本**（与 Kernel 重构架构契合） |
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) | Merkle 哈希链审计日志 | ⭐⭐⭐⭐☆ 中高 | 下一版本（安全体系自然延伸） |
| ~~#219~~ | ~~Taint 追踪~~ | ✅ 已完成 | #239 #240 #241 |
| ~~#217~~ | ~~MCP Server~~ | ✅ 已完成 | #233 |
| ~~#220~~ | ~~LoopGuard 升级~~ | ✅ 已完成 | #236 |
| ~~#218~~ | ~~OpenAI API~~ | ✅ 已完成 | #235 |

**路线图信号**：安全（TaintEngine → 审计日志 → 模板沙盒）与部署形态（MCP Server → OpenAI API → 更多协议）两条主线清晰。

---

## 7. 用户反馈摘要

> 今日 Issues 无用户评论，从 Issue 描述反推设计诉求：

| 来源 | 痛点/诉求 | 项目响应 |
|:---|:---|:---|
| #196 (@superhero75) | 需要**免费、无限制的搜索后端**（SearXNG 自托管） | ✅ #214 已实现 |
| #237 | 功能命名与直觉不符导致误用 | 🟡 待文档改进 |
| #238 | CI 可靠性影响贡献者信心 | 🔴 待修复 |

**满意度**：功能覆盖度获认可；**不满意度**：文档精确性、测试稳定性有待提升。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#238](https://github.com/qhkm/zeptoclaw/issues/238) Docker/act 测试不匹配 | 2026-03-03 | 环境差异根因未定位 | 维护者分配专人，优先于新功能开发 |
| [#228](https://github.com/qhkm/zeptoclaw/pull/228) [#229](https://github.com/qhkm/zeptoclaw/pull/229) [#232](https://github.com/qhkm/zeptoclaw/pull/232) gog-* 依赖更新 | 2026-03-03 | 可能受 #238 阻塞验证 | 合并前强制通过 Docker CI |
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) 模板沙盒 | 2026-03-03 | 设计待社区反馈 | 开放 RFC 征集用例 |
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) Merkle 审计链 | 2026-03-03 | 设计待社区反馈 | 评估与现有 TaintEngine 的集成点 |

---

**项目健康度评分：A-**（功能迭代极快，安全架构领先，但测试基础设施债务需偿还以支撑规模化贡献）

*报告生成时间：2026-03-04*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-04

---

## 1. 今日速览

EasyClaw 今日以**版本迭代**为主要活动，24小时内连续发布 **v1.5.15** 与 **v1.5.16** 两个补丁版本，显示维护者处于高频修复模式。Issues 区域完成闭环处理，2条历史 Issue 于今日关闭，无新增活跃讨论。PR 通道完全静默，社区贡献度为零。整体活跃度评估：**维护者驱动型更新，社区参与度偏低**，项目处于稳定维护期而非功能扩张期。

---

## 2. 版本发布

### 🔖 v1.5.16 & v1.5.15 双版本连发

| 版本 | 发布时间 | 核心变更 |
|:---|:---|:---|
| [v1.5.16](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.16) | 2026-03-03 | 延续安装指引优化 |
| [v1.5.15](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.15) | 2026-03-03 | 新增 macOS Gatekeeper 故障排除文档 |

**关键发现：**
- 两版本 Release Note **内容高度重合**，均聚焦 macOS 安装问题的文档补充
- **无代码变更说明**，推测为文档修复或构建流程调整
- 未提及任何功能更新、API 变更或安全修复

**破坏性变更：** 无  
**迁移注意事项：** 无需迁移；macOS 用户若遇"已损坏"提示，按 Release 中 Terminal 命令绕过 Gatekeeper 即可

> ⚠️ **观察**：连续两个补丁版本仅更新安装文档，可能反映：
> 1) 用户 onboarding 流失率高，被迫紧急优化
> 2) 版本号策略偏激进，文档更新也触发版本 bump

---

## 3. 项目进展

**今日合并/关闭 PR：** 0 条  
**代码层面推进：** 无可见进展

**Issue 闭环成就：**
- 关闭 [#5](https://github.com/gaoyangz77/easyclaw/issues/5) 飞书连接问题（11 评论深度排查）
- 关闭 [#6](https://github.com/gaoyangz77/easyclaw/issues/6) Windows 升级配置丢失问题（3 评论）

**整体评估**：今日项目以"债务清理"为主，未产生向前功能迭代。维护者精力集中于用户支持而非代码演进。

---

## 4. 社区热点

### 🔥 最高讨论热度：Issue #5 飞书连接白名单困境

| 指标 | 数据 |
|:---|:---|
| 链接 | https://github.com/gaoyangz77/easyclaw/issues/5 |
| 评论数 | **11 条**（项目历史最高）|
| 状态 | ✅ 已关闭 |
| 核心矛盾 | 用户按指引添加飞书白名单后仍无法连接，形成"循环提示" |

**诉求分析：**
- **表面问题**：飞书开放平台配置流程晦涩，EasyClaw 的指引与飞书实际界面存在错位
- **深层痛点**：企业 IM 集成场景下，普通用户缺乏开发者后台操作经验，报错信息未本地化（"加白名单" vs 飞书实际术语"添加 IP 白名单"或"启用事件订阅"）
- **产品信号**：飞书作为核心集成目标，其配置体验直接影响用户留存，需考虑**一键配置向导**或**错误码精准映射**

### Issue #6：Windows 升级配置丢失

| 指标 | 数据 |
|:---|:---|
| 链接 | https://github.com/gaoyangz77/easyclaw/issues/6 |
| 评论数 | 3 条 |
| 状态 | ✅ 已关闭 |

**关键背景**：用户从 v1.5.10→v1.5.13 覆盖安装均正常，**v1.5.13→v1.5.14 首次出现配置归零**

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复版本 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Windows 覆盖安装导致配置/记忆全丢失 | ✅ 已关闭 | 未明确，推测 v1.5.15+ | [#6](https://github.com/gaoyangz77/easyclaw/issues/6) |
| 🟡 **中** | 飞书连接白名单配置循环失败 | ✅ 已关闭 | 文档/指引更新 | [#5](https://github.com/gaoyangz77/easyclaw/issues/5) |

**回归风险警示**：  
Issue #6 揭示 **v1.5.14 引入安装程序 regression**，破坏此前稳定的升级路径。虽 Issue 已关闭，但：
- 未见到针对性 fix PR
- Release Note 未提及数据迁移保护机制
- 建议维护者公开说明根因（NSIS 脚本变更？配置目录重定位？）

---

## 6. 功能请求与路线图信号

**今日新功能请求：** 0 条

**从 Issues 推断的潜在需求：**

| 信号来源 | 隐含需求 | 纳入可能性评估 |
|:---|:---|:---|
| #5 飞书配置困难 | **可视化配置向导** / **飞书应用市场一键授权** | 中 - 高（核心集成体验）|
| #6 配置丢失 | **自动备份/云同步配置**、**升级前配置导出提醒** | 高（稳定性基础）|
| 双版本文档更新 | **签名证书申请**（根治 macOS Gatekeeper 问题）| 中（成本考量）|

**下一版本预测**：v1.5.17 可能聚焦 Windows 安装程序稳定性修复，或推进配置持久化机制。

---

## 7. 用户反馈摘要

### 😣 痛点
- **企业集成门槛高**："在飞书发消息一直让我加白名单，加过白名单后也没用" — 非技术用户被困在开发者后台
- **升级信任崩塌**："easyclaw被重置了……被归零重新开始" — 长期用户遭遇数据丢失，品牌信任受损
- **跨平台体验割裂**：macOS 需命令行绕过安全机制，Windows 存在升级风险，无统一顺滑体验

### ✅ 满意点
- **历史升级稳定性获认可**："从1.5.10一路使用升级到1.5.13，都是下载最新的exe安装文件覆盖安装升级，easyclaw的配置和记忆都是可以保留的" — 说明 v1.5.14 前体验良好

### 🎯 使用场景
- **个人长期迭代使用**：用户持续跟踪小版本更新，非一次性试用
- **企业飞书生态深度绑定**：飞书作为核心工作流入口，EasyClaw 作为飞书侧 AI 增强层

---

## 8. 待处理积压

**当前 Open Issues 总数**：需进一步确认（今日关闭 2 条后存量未知）

**建议维护者关注：**

| 类型 | 描述 | 优先级 |
|:---|:---|:---|
| 技术债务 | Windows 安装程序回归测试机制 | 高 |
| 体验债务 | 飞书集成配置流程重构（考虑 OAuth 替代手动白名单）| 高 |
| 社区建设 | 0 PR 活跃度，需审视贡献者文档与 good-first-issue 标签 | 中 |

---

**数据来源**：https://github.com/gaoyangz77/easyclaw  
**报告生成**：2026-03-04

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*