# OpenClaw 生态日报 2026-05-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-05 00:20 UTC

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

# OpenClaw 项目动态日报 | 2026-05-05

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度**：24小时内 500 条 Issues 更新（436 活跃/新开，64 关闭）与 500 条 PR 更新（412 待合并，88 已合并/关闭），4 个版本密集发布。核心团队正在快速迭代 **2026.5.x 系列**，重点推进文件传输插件、Discord/Telegram 渠道稳定性修复及 Codex 扩展集成。社区侧对 **Linux/Windows 桌面端支持**（#75，104 评论）和 **预编译 Android APK**（#9443）的呼声持续高涨，而网关事件循环阻塞（#75882，已关闭）等关键稳定性问题已获修复。整体项目健康度良好，但 PR 积压量较大，待合并比例高达 82%。

---

## 2. 版本发布

### v2026.5.4-beta.1 | [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.1)
**核心更新：文件传输插件正式内建**
- 新增捆绑插件 `Plugins/file-transfer`，提供 `file_fetch`、`dir_list`、`dir_fetch`、`file_write` 四个 Agent 工具，支持配对节点间的二进制文件操作
- 安全策略：默认拒绝（default-deny）的按节点路径策略，需操作员审批，支持符号链接处理
- **迁移注意**：需在 `plugins.entries.file-transfer.config.nodes` 中显式配置允许路径

### v2026.5.3 / v2026.5.3-beta.3 | [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3)
- 与 beta.1 相同的文件传输插件功能，从 beta 通道晋升稳定版

### v2026.5.3-1 (npm hotfix) | [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-1)
- **关键修复**：安全插件安装扫描器不再误拦截官方捆绑包——当 `process.env` 访问与普通 API 调用出现在同一编译包的不同位置时，此前会错误触发阻断
- 已发布核心 npm 包：`openclaw@2026.5.3-1`（`beta` 标签）

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（8 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#77592](https://github.com/openclaw/openclaw/pull/77592) | jyothepro | **CLI JSON 模式诊断输出修复**：`openclaw agent --json` 时插件生命周期日志不再污染 stdout，确保 JSON 管道消费可靠 | — |
| [#77591](https://github.com/openclaw/openclaw/pull/77591) | vincentkoc | **远程节点 OAuth 写入阻断**：检测非回环远程网关配置，阻止本地 OAuth 登录，根治 `refresh_token_reused` 事件；替代 #42381 | #42291 |
| [#77589](https://github.com/openclaw/openclaw/pull/77589) | vincentkoc | **状态命令认证配置修复**：`status` 命令尊重会话选定的 auth profile，跨 provider 查找时保留偏好设置 | #58498 |
| [#77588](https://github.com/openclaw/openclaw/pull/77588) | vincentkoc | **遗留 Codex OAuth 配置兼容**：加载持久化 profile 时规范化旧版 `openai-codex` 字段别名，解决配置模式不匹配导致的 profile 屏蔽 | #47964 |
| [#77587](https://github.com/openclaw/openclaw/pull/77587) | vincentkoc | **OpenAI SSE 流分割修复**：SSE 解析器持续读取直到获得完整可读事件，避免分块边界处的帧饥饿 | #76305 |
| [#77595](https://github.com/openclaw/openclaw/pull/77595) | vincentkoc | **Codex 音频路由修正**：将 Codex 聊天模型的音频转写请求路由至专用转写模型，而非直接传递聊天模型 ID | — |
| [#77585](https://github.com/openclaw/openclaw/pull/77585) | vincentkoc | **Plugin SDK API 基线刷新**：更新生成基线哈希，提升堆内存上限防止 `release:check` OOM | — |
| [#77557](https://github.com/openclaw/openclaw/pull/77557) | pashpashpash | **Codex 用量限制提示**：在 Telegram 聊天中显式展示 Codex 订阅用量重置详情（已关闭，需重新设计） | — |

**整体推进评估**：今日核心团队在 **认证安全、流式稳定性、Codex 扩展集成** 三条主线取得实质进展。vincentkoc 单日合并 5 项维护者级修复，显示核心维护者正在集中清理技术债务。但 #77557 的关闭表明 Codex 与渠道层的集成仍需更深层架构调整。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---|:---|:---|
| 1 | [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 104 | 74 | **跨平台桌面端缺口**：macOS/iOS/Android 已有应用，Linux/Windows 用户长期被排除在完整体验外 |
| 2 | [#9443 预编译 Android APK](https://github.com/openclaw/openclaw/issues/9443) | 23 | 1 | **降低 Android 使用门槛**：现有源码构建对非开发者不友好，要求 Release 页面直接提供 APK |
| 3 | [#52875 Session_send 会话丢失](https://github.com/openclaw/openclaw/issues/52875) | 20 | 0 | **2026.3.22 升级回归**：主 Agent 无法联系其他 Agent，`session_list` 仅返回 cron 任务 |
| 4 | [#50090 社区技能开发与 ClawHub](https://github.com/openclaw/openclaw/issues/50090) | 14 | 1 | **技能生态基础设施**：SKILL.md → ClawHub 的发布承诺与实际差距大，Driftnet 等工具碎片化 |
| 5 | [#50096 长期记忆与知识管理](https://github.com/openclaw/openclaw/issues/50096) | 12 | 0 | **记忆系统可靠性**：上下文压缩导致状态丢失，Agent 每次对话"从零开始" |

**诉求分析**：社区存在明显的 **"平台覆盖焦虑"**（桌面端缺失）与 **"生态成熟度焦虑"**（技能市场、记忆系统承诺未兑现）。#75 的 74 个 👍 是项目历史最高之一，但创建于 2026-01-01 已逾 4 个月无实质响应，存在核心用户需求被忽视的风险。

---

## 5. Bug 与稳定性

### 严重级别排序

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#75882 Gateway 事件循环阻塞](https://github.com/openclaw/openclaw/issues/75882) | ✅ **已关闭** | 网关间歇性阻塞数十至数百秒，跨渠道延迟/失败/断开 | 已合并 |
| 🔴 **高** | [#77295 Fal GPT Image 2 路由 404](https://github.com/openclaw/openclaw/issues/77295) | 🟡 开放 | `image-to-image` 错误路由至 `/image-to-image` 而非 `/edit`，参考图编辑完全不可用 | 无 |
| 🔴 **高** | [#77241 Discord 插件 secret contract 未加载](https://github.com/openclaw/openclaw/issues/77241) | ✅ **已关闭** | `resolvePluginContractApiPath` 未搜索 `dist/` 子目录，npm 插件密钥合约永远加载失败 | 已合并 |
| 🔴 **高** | [#77416 Discord 渠道仍静默跳过](https://github.com/openclaw/openclaw/issues/77416) | ✅ **已关闭** | v2026.5.3-1 中 env-backed SecretRef token 仍导致 Discord 渠道启动失败，#76449 修复遗漏 `dist/` 布局 | 已合并（#77596 关联） |
| 🟡 **中** | [#52875 Session_send 无会话](https://github.com/openclaw/openclaw/issues/52875) | 🟡 开放 | 2026.3.22 升级后主 Agent 无法联系其他 Agent | 无 |
| 🟡 **中** | [#51871 Cron 任务仪表盘不显示](https://github.com/openclaw/openclaw/issues/51871) | 🟡 开放 | 2026.3.13 回归，Raspberry Pi 5 上 Cron 页面空白 | 无 |
| 🟡 **中** | [#52305 异步任务完成报告丢失](https://github.com/openclaw/openclaw/issues/52305) | 🟡 开放 | `system event/wake` 非会话定向，外部任务运行器通知不可靠 | 无 |
| 🟡 **中** | [#73148 Image 工具 opaque 错误](https://github.com/openclaw/openclaw/issues/73148) | 🟡 开放 | 未安装 `sharp` 时"Failed to optimize image"无明确提示 | 无 |
| 🟡 **中** | [#71127 卡住会话未中止](https://github.com/openclaw/openclaw/issues/71127) | 🟡 开放 | 诊断检测到卡住会话但无恢复动作，需外部重启网关 | [#73243](https://github.com/openclaw/openclaw/pull/73243) 待合并 |
| 🟡 **中** | [#65309 Active Memory 阻塞直接聊天](https://github.com/openclaw/openclaw/issues/65309) | ✅ **已关闭** | Active Memory 触发后阻塞约 30 秒超时 | 已合并 |
| 🟡 **中** | [#50880 Steer 队列静默降级](https://github.com/openclaw/openclaw/issues/50880) | ✅ **已关闭** | `steer` 模式消息从未在工具调用边界注入，静默降级为 `followup` | 已合并 |

**稳定性评估**：今日关闭 3 项高严重度网关/渠道问题，但 **RISC-V 支持**（#54253）、**WhatsApp/Telegram 消息可靠性**（#50093, #50040, #51628）等长期问题仍无修复。值得注意的是，#77241/#77416 的连续出现揭示 **npm 插件 `dist/` 布局** 是系统性盲点，已有两次修复遗漏。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 热度 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---|:---|
| **Linux/Windows 桌面端** | [#75](https://github.com/openclaw/openclaw/issues/75) | 🔥🔥🔥 | 无相关 PR，但作者 steipete 今日活跃于 #77565 | 中（需资源投入） |
| **预编译 Android APK** | [#9443](https://github.com/openclaw/openclaw/issues/9443) | 🔥🔥 | 无 PR，CI 构建流程缺失 | 高（工程成本低） |
| **exec-approval 拒绝列表** | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 🔥 | 7 👍，安全相关，与现有 allowlist 互补 | 高（设计清晰） |
| **模型上下文超限回退** | [#9986](https://github.com/openclaw/openclaw/issues/9986) | 🔥 | 已有 `fallbacks` 配置，仅需扩展触发条件 | 高（改动面小） |
| **Telegram allowBots** | [#8295](https://github.com/openclaw/openclaw/issues/8295) | 🔥 | 4 👍，Discord/Slack 已有 parity | 高（模式可复制） |
| **子 Agent 静默模式** | [#8299](https://github.com/openclaw/openclaw/issues/8299) | 🔥 | 6 评论，现有 `ANNOUNCE_SKIP` 机制不可靠 | 中（需模型行为配合） |
| **技能优先级配置** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | 🔥 | 7 评论，技能重叠选择混乱 | 中（架构设计问题） |
| **长期记忆系统重构** | [#50096](https://github.com/openclaw/openclaw/issues/50096) | 🔥🔥 | 12 评论，与 #2597 上下文可见性相关 | 低（需大架构调整） |

**路线图判断**：短期（v2026.5.x）最可能落地的是 **exec-approval 拒绝列表**、**Telegram allowBots** 和 **上下文超限回退**——它们都基于现有机制扩展。Linux/Windows 桌面端虽呼声最高，但 4 个月无 PR 表明可能受 Electron/Tauri 技术选型或团队资源约束。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 来源 Issue | 用户原声/行为 |
|:---|:---|:---|
| **升级即破坏** | #52875, #51871 | "after upgrading to 2026-3-22 my main agent is not able to contact other agents" — 版本升级导致核心功能回归 |
| **错误信息不透明** | #73148, #54253 | "Failed to optimize image" 未提示缺少 `sharp`；RISC-V 上 "LLM Request Failed" 无诊断 |
| **路径硬编码泄露** | #51429 | 安装后创建 `/Users/wangtao` 目录，"这位 wangtao 是谁？"——构建流程审查缺失引发信任危机 |
| **消息沉默丢失** | #50093, #50040, #51088 | WhatsApp 重连后消息丢失、Telegram 轮询停滞、iMessage 无送达确认——渠道可靠性是生产使用瓶颈 |
| **记忆/上下文焦虑** | #50096, #2597, #51857 | "An agent's value is directly proportional to what it can remember" — 用户对"从零开始"的 Agent 体验极度不满 |

### 满意度信号
- **文件传输插件**：beta 系列快速迭代，安全策略设计（default-deny + 操作员审批）获认可
- **Codex 集成**：持续投入，但 #77557 关闭表明"工具仅限"模式与渠道通知机制存在架构张力

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#75 Linux/Windows 桌面端](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-05-04 | 4 个月无响应，74 👍 社区最大诉求 | 官方路线图声明或招募社区贡献者 |
| [#6731 Safe/Unsafe ClawdBot](https://github.com/openclaw/openclaw/issues/6731) | 2026-02-02 | 2026-05-05 | "用 Rust 重写"不切实际，但沙箱需求合理 | 拆分需求：聚焦 Electron/Node 沙箱方案 |
| [#50090 ClawHub 生态](https://github.com/openclaw/openclaw/issues/50090) | 2026-03-19 | 2026-05-04 | 技能发布流程碎片化，生态增长受阻 | 与 #50199 技能优先级合并设计 |
| [#38713 `skills info` 名称匹配](https://github.com/openclaw/openclaw/pull/38713) | 2026-03-07 | 2026-05-05 | 2 个月待合并，CLI 体验问题 | 低冲突，建议优先合并 |
| [#74163 Microsoft 生态跟踪](https://github.com/openclaw/openclaw/pull/74163) | 2026-04-29 | 2026-05-05 | Teams/Windows/WSL/Azure/M365 长期需求汇总 | 转为 GitHub Project 或 Discussion |

### PR 积压健康度
- **412 待合并 / 500 总更新 = 82.4% 积压率**，高于健康阈值（通常 <60%）
- 今日 vincentkoc 集中合并 5 项，但多为替代/关闭他人 PR（#77591 替代 #42381，#77589 替代 #59208），显示 **PR 重复/冲突问题** 需流程优化

---

*日报生成时间：2026-05-05 | 数据来源：openclaw/openclaw GitHub 仓库*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**分析日期：2026-05-05 | 数据来源：GitHub 公开活动流**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从演示可用向生产可靠"的关键转折期**：头部项目（OpenClaw、ZeroClaw）维持极高吞吐量（日均 500+ Issues/PRs），但社区诉求已从功能丰富度转向**稳定性、安全性和可观测性**；中型项目（NanoBot、CoPaw、PicoClaw）通过集中技术债务清理提升成熟度；新兴项目（NanoClaw、NullClaw）在架构创新（MCP、Zig 运行时）与边缘场景（低资源设备）寻求差异化。整体呈现**"上层功能收敛、底层架构分化"**的格局——多 Agent 协同、技能化架构、模型容灾成为共同演进方向，但实现路径因技术栈（Node/Rust/Zig）和目标场景（个人/企业/边缘）而异。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已合并） | 今日 Release | 健康度评估 | 关键信号 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 436 / 64 | 412 / 88 | 4 个（v2026.5.4-beta.1 等） | ⚠️ **高活跃、高积压**（82% PR 积压率） | 核心维护者 vincentkoc 单日合并 5 项，但 #75 桌面端诉求 4 个月无响应 |
| **NanoBot** | 5 / 3 | 7 / 12 | 0 | 🟢 **良好**（高合并率、关键 bug 快速修复） | #3618 区域模型 10 天中断暴露监控缺失 |
| **Hermes Agent** | 47 / 3 | 44 / 6 | 0 | 🔴 **高压力**（P0 崩溃集中爆发，v0.12.0 回滚危机） | 3 个 P0/P1 安全漏洞同时开放，安全债隐形化 |
| **PicoClaw** | 14 / 15 | 19 / 41 | 0 | 🟢 **强劲**（52% Issue 关闭率、68% PR 关闭率） | v0.2.7→v0.2.8 连续 Gateway 启动回归，配置模块存系统性缺陷 |
| **NanoClaw** | 4 / 1 | 15 / 19 | 0 | ⚠️ **打磨期**（v2 架构稳定性修复密集，无发版） | #2257 配置静默丢失为数据丢失级缺陷，需立即响应 |
| **NullClaw** | 3 / 0 | 3 / 2 | 1（v2026.5.4） | 🟢 **稳健**（版本节奏稳定、质量基建投入） | #871 低资源设备搜索失效持续 10 天，核心定位承压 |
| **IronClaw** | 2 / 0 | 11 / 8 | 0 | 🟡 **工程推进稳健，社区待激活** | Reborn 架构内存层里程碑达成，但 #3036 配置即代码需求沉默 |
| **LobsterAI** | 1 / 1 | 2 / 0 | 0 | 🟡 **低活跃、高积压** | PR #811 性能优化 41 天 stale，维护者 review 带宽不足 |
| **Moltis** | 1 / 0 | 1 / 0 | 0 | 🟡 **维护性迭代** | #964 并发沙箱命名冲突为新暴露的架构缺陷 |
| **CoPaw** | 13 / 0 | 7 / 15 | 0 | 🟢 **高质量贡献活跃**（4 个 first-time-contributor） | 15 个历史积压 PR 集中关闭，技术债务清理显著 |
| **ZeroClaw** | 48 / 2 | 29 / 21 | 0 | ⚠️ **极高活跃、高摩擦** | v0.8.0 集成分支待合并，#5415 S0 安全漏洞 30 天 blocked |
| **TinyClaw** | — | — | — | ⚪ **无活动** | — |
| **ZeptoClaw** | — | — | — | ⚪ **无活动** | — |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | **绝对领先**：500 Issues/500 PRs 日吞吐量，为 NanoBot（20）的 25 倍、CoPaw（22）的 23 倍 | 但 PR 积压率 82% 远超健康阈值（<60%），质量过滤机制弱于 PicoClaw（32% 积压） |
| **技术路线** | **Node.js 插件化架构**，强调渠道广度（Discord/Telegram/iMessage/Slack 等 15+）和快速迭代 | 对比 IronClaw（Rust + WASM + 事件溯源）、NullClaw（Zig + 安全沙箱）、NanoClaw（MCP 优先），OpenClaw 牺牲运行时安全性换取开发速度和生态兼容性 |
| **核心优势** | ① **渠道覆盖最全**：企业级 IM（飞书、企业微信、Teams）适配成熟度领先；② **Codex 集成深度**：专用音频路由、用量提示、OAuth 兼容层；③ **文件传输插件**：default-deny 安全策略设计获认可 | 对比 Hermes Agent（同等 Node 栈但安全债更重）、PicoClaw（边缘设备优先但渠道少） |
| **结构性风险** | ① **平台覆盖焦虑**：#75 Linux/Windows 桌面端 4 个月无响应，74 👍 为历史最高；② **npm 插件 dist/ 布局**为系统性盲点（#77241/#77416 连续修复遗漏）；③ **记忆系统承诺未兑现**：#50096 长期记忆可靠性社区极度不满 | 对比 NanoBot（记忆压缩比率可配置 #3281）、PicoClaw（6 阶段结构化上下文压缩 #2333） |

**定位结论**：OpenClaw 是生态中**"最大公约数"**——功能最全、社区最大、迭代最快，但正面临从"功能堆砌"向"架构深耕"的转型压力。其 Node.js 插件化路线与 IronClaw 的 Rust 安全优先、NullClaw 的 Zig 边缘原生形成鲜明技术光谱。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 成熟度差异 |
|:---|:---|:---|:---|
| **模型容灾/自动切换** | NanoBot（#3376）、PicoClaw（FreeRide #2603、搜索降级 #2582）、ZeroClaw（#6059 DeepSeek 兼容） | 单点模型故障时不中断任务，跨 provider 级联而非单 provider 内重试 | NanoBot #1163 已实现错误码降级；PicoClaw 聚焦成本优化（免费模型轮询）；OpenClaw 无相关实现 |
| **MCP 工具生态标准化** | NanoClaw（#2242 工具注册修复、#2263 send_card 跨通道）、CoPaw（#1977/#1978/#2052 MCP 健壮性）、ZeroClaw（#6136 MCP 继承、#6065 Xcode MCP） | MCP 工具注册后不被静默过滤、跨通道一致性、超时独立配置、拆卸优雅 | NanoClaw 修复"注册成功但无法调用"的隐蔽缺陷；CoPaw 实现 MCP 故障降级为工具级失败；OpenClaw 无原生 MCP 支持 |
| **会话/记忆连续性** | OpenClaw（#50096 长期记忆、#52875 session 丢失）、Hermes Agent（#14420 8 轮失忆）、CoPaw（#2374 会话重连、#2783 上下文压缩）、PicoClaw（#2333 6 阶段压缩） | 避免 Agent"从零开始"，上下文压缩不丢失状态，跨会话身份保持 | CoPaw 实现运行中会话重连恢复；PicoClaw 结构化压缩算法最完整；OpenClaw 记忆系统仍为架构短板 |
| **可观测性/推理透明度** | NullClaw（#886 思考过程可视化）、IronClaw（#3036 配置即代码审计）、Moltis（#965 CI 诊断日志）、CoPaw（#763 错误透传） | 长任务执行时不"黑盒等待"，配置变更可版本控制，错误可追溯 | IronClaw 事件存储+投影服务（#3171/#3212）架构最先进；NullClaw 用户痛点最尖锐（30 分钟无输出） |
| **安全沙箱/权限隔离** | NullClaw（#882 探针优化、Zig 安全测试）、PicoClaw（#2688 find / 逃逸、#1067 CLI 无认证）、Hermes Agent（#4427 子进程绕过、#19897 密钥泄露）、ZeroClaw（#5415 上下文泄漏） | 工具执行不可遍历全文件系统，密钥不暴露于日志，会话数据隔离 | NullClaw Zig 层测试覆盖最系统；Hermes Agent 安全债最重（3 个 P0/P1 同时开放）；OpenClaw 文件传输插件的 default-deny 为设计亮点 |
| **语音/多模态交互** | PicoClaw（#1648 TTS/ASR 架构设计，24 评论）、NanoBot（#3607 WhatsApp 语音下载） | 完整语音 Pipeline（STT → LLM → TTS），非仅文本聊天 | PicoClaw 社区提案最完整（Protocol Buffer 接口），但 PR #1642 与 Gateway 架构冲突待决策；OpenClaw 无相关规划 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 渠道广度、Codex 深度集成、文件传输 | 追求"一站式"的开发者/极客 | Node.js 插件化，快速迭代，但运行时安全依赖外部审批 |
| **NanoBot** | 模型兼容性（DeepSeek、Xiaomi MiMo）、SDK 完整性 | 多模型切换的灵活部署者 | Python 异步，记忆压缩可配置，LLM 降级链内置 |
| **Hermes Agent** | 企业 IM（飞书、企业微信）、TUI 体验 | 中国企业用户 | Node.js，但 TUI 依赖 prompt_toolkit，v0.12.0 质量危机 |
| **PicoClaw** | 边缘设备（Android/树莓派）、语音交互、成本优化 | 资源受限场景、硬件爱好者 | 类 OpenClaw 架构，但更激进的多模态探索，FreeRide 工具独特 |
| **NanoClaw** | MCP 原生、per-wiring 权限、Agent-to-Agent 路由 | 企业级多 Agent 编排 | v2 架构重塑中，MCP 为一级公民，但稳定性债务高 |
| **NullClaw** | 低资源设备、安全沙箱、推理透明度 | ARM 单板、旧手机、隐私敏感用户 | **Zig 语言**，firejail/bwrap 沙箱原生，差异化最显著 |
| **IronClaw** | 企业级可观测性、事件溯源、WASM 安全 | 平台运维、场景开发者 | **Rust + WASM**，libSQL/Postgres 双后端，Reborn 架构最重 |
| **CoPaw** | 新手友好、MCP 生态、国际化 | 首次接触 Agent 的普通用户 | 基于 Qwen 系列优化，配置流程简化诉求最集中 |
| **ZeroClaw** | 技能化架构（SKILL.md）、成本追踪、企业工具链 | 从个人向团队扩展的重度用户 | Rust，schema v3 重构中，"更轻的 ZeroClaw"转型明确 |
| **Moltis** | 并行工具执行、Docker 沙箱 | 多任务 Agent 工作流开发者 | 并发架构，但 #964 命名冲突暴露竞态条件设计缺陷 |
| **LobsterAI** | 网易有道生态、中文优化 | 中国区开发者 | Electron，但维护资源明显不足 |

---

## 6. 社区热度与成熟度

| 阶段 | 项目 | 特征 |
|:---|:---|:---|
| **🔥 快速迭代期** | OpenClaw、ZeroClaw、PicoClaw | 日吞吐量 30+ PRs，功能释放密集，但稳定性回归风险高（OpenClaw Gateway 事件循环、ZeroClaw v0.8.0 重构、PicoClaw 连续版本启动失败） |
| **🛠️ 质量巩固期** | NanoBot、CoPaw、NullClaw、IronClaw | 合并率高（NanoBot 63%、CoPaw 68%），聚焦技术债务清理和测试加固；IronClaw Reborn 架构里程碑式推进 |
| **🚨 危机修复期** | Hermes Agent、NanoClaw | Hermes v0.12.0 P0 崩溃+安全漏洞集中爆发；NanoClaw v2 架构"最后一公里"数据丢失缺陷（#2257） |
| **😴 维护性停滞** | LobsterAI、Moltis、TinyClaw、ZeptoClaw | 日活动 <3 条，或完全无活动；LobsterAI 41 天 stale PR、Moltis 并发 Bug 待响应 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"技能化"取代"内置化"成为架构共识** | ZeroClaw #6165（skills 替代专用工具）、#6140（混合插件）；OpenClaw #50090（ClawHub 生态承诺落差） | Agent 框架应从"功能堆砌"转向"能力市场"，SKILL.md/WASM 组合可能是下一代插件标准 |
| **MCP 从"支持"升级为"原生"** | NanoClaw v2 架构 MCP 一级公民、CoPaw 15 个 PR 围绕 MCP 健壮性、ZeroClaw #6065 Xcode MCP | MCP 不仅是工具协议，更可能成为 Agent 间互操作的基础设施；早期 MCP 实现者（注册、跨通道一致性、超时治理）将获生态优势 |
| **"推理透明度"从体验优化变为信任刚需** | NullClaw #886（30 分钟黑盒焦虑）、IronClaw #3036（配置审计）、Moltis #965（CI 诊断） | 长运行 Agent 必须提供结构化进度事件流，OpenTelemetry/事件溯源不再是可选项 |
| **边缘/低资源场景从"能跑"到"好用"的鸿沟** | NullClaw #871（DuckDuckGo 替代 Brave）、PicoClaw #28（LM Studio 一键连接）、#1648（TTS/ASR） | API Key 依赖、构建复杂度、多模态资源消耗是边缘部署的三大杀手；无本地模型+无外部依赖+低算力消耗的"三零"方案存在产品空白 |
| **安全从"事后加固"转向"架构原生"** | NullClaw Zig 测试覆盖、IronClaw WASM 隔离、PicoClaw 路径遍历防护 vs Hermes Agent 密钥泄露/子进程绕过 | Node.js 动态语言的运行时安全天花板显现；Rust/Zig 的内存安全+沙箱原生可能成为企业选型决定性因素 |
| **"配置即代码"成为企业采纳的 blocking 需求** | IronClaw #3036（无 schema/无 diff/无审计）、ZeroClaw v0.8.0 schema v3 重构 | Agent 框架的运维界面必须支持 GitOps、版本控制、多环境漂移检测；手写 JSON/YAML 的配置时代正在终结 |

---

**报告结论**：2026-05-05 的生态快照显示，个人 AI 助手开源领域正经历**"规模扩张"向"质量竞争"的范式转移**。OpenClaw 凭借社区规模和渠道广度维持领导地位，但技术债务（82% PR 积压、记忆系统缺失、桌面端承诺落空）为追赶者创造窗口；IronClaw（Rust 企业级架构）、NullClaw（Zig 边缘原生）、NanoClaw（MCP 原生）代表三条差异化突围路径。对开发者而言，**MCP 生态位、推理透明度、边缘"三零"方案、配置即代码**是下一个 6-12 个月最具杠杆效应的投入方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-05

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内 19 个 PR 更新（12 条已合并/关闭）、8 个 Issues 更新（3 条关闭），无新版本发布。核心进展集中在**稳定性修复**（DeepSeek 推理内容回溯、WhatsApp 语音消息）、**SDK 补全**（RunResult 字段实际填充）以及**基础设施扩展**（HF Spaces 多 Agent 部署、Xiaomi MiMo 文档）。社区对**模型容灾切换**和**会话级任务聚焦**两大增强需求持续升温，但尚未进入实现阶段。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 `v0.1.5.post3`（2026-04-30 前后发布）。值得注意的是，Issue #3554 和 #3618 均报告该版本存在生产环境问题，建议维护者评估是否需要紧急补丁版本。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3616](https://github.com/HKUDS/nanobot/pull/3616) | 04cb | **修复 DeepSeek-V4 `reasoning_content` 历史丢失问题**：将破坏性历史裁剪改为非破坏性空字符串回溯填充，覆盖 V4/reasoner 全场景 | [#3554](https://github.com/HKUDS/nanobot/issues/3554), [#3584](https://github.com/HKUDS/nanobot/issues/3584) |
| [#3612](https://github.com/HKUDS/nanobot/pull/3612) | chengyongru | **新增 `provider logout` CLI 命令**：支持清除 OpenAI Codex 和 GitHub Copilot 的 OAuth 凭证，解决账户切换痛点 | [#2665](https://github.com/HKUDS/nanobot/issues/2665) |
| [#3607](https://github.com/HKUDS/nanobot/pull/3607) | yorkhellen | **WhatsApp 语音消息下载支持**：修复语音消息无法被 LLM 理解的问题 | [#3604](https://github.com/HKUDS/nanobot/issues/3604) |
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | chengyongru | **安全守卫误报修复 + 流消息丢失修复**：豁免 `/dev/*` 路径、修复流式消息截断 | — |
| [#3480](https://github.com/HKUDS/nanobot/pull/3480) | boogieLing | **OpenAI Codex 流式进度增量恢复**：Codex 的 SSE 流终于能向频道推送中间进度，而非仅返回最终结果 | — |
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) → 被 [#3620](https://github.com/HKUDS/nanobot/pull/3620) 取代 | mohamed-elkholy95 / chengyongru | **SDK `RunResult` 字段实际填充**：`tools_used` 和 `messages` 从硬编码 `[]` 改为通过 `SDKCaptureHook` 捕获真实数据 | — |
| [#3281](https://github.com/HKUDS/nanobot/pull/3281) | subalkum | **记忆压缩比率可配置**：`consolidationRatio` 默认 0.5，范围 0.1-0.95 | [#3270](https://github.com/HKUDS/nanobot/issues/3270) |
| [#3091](https://github.com/HKUDS/nanobot/pull/3091) | OldSuns | **Tavily 搜索支持自定义 base_url**：代理/镜像场景可用 | — |
| [#3080](https://github.com/HKUDS/nanobot/pull/3080) | OldSuns | **Agent 自定义 Provider + 工作区命令加载**：OpenAI 兼容端点直接接入 | — |
| [#1163](https://github.com/HKUDS/nanobot/pull/1163) | coldxiangyu163 | **LLM 降级链（Timeout/503/502/429）**：主模型异常时自动 fallback | — |
| [#1154](https://github.com/HKUDS/nanobot/pull/1154) | dnd288 | **Mezon 频道实现**：新 IM 平台接入 | — |
| [#3548](https://github.com/HKUDS/nanobot/pull/3548) | Re-bin | **回滚飞书流式卡片修复**：#3543 引入的回复消息逻辑被撤销 | — |

**整体评估**：今日合并质量高，覆盖了 SDK 完整性、模型兼容性、渠道扩展三大支柱，项目成熟度显著提升。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#3376](https://github.com/HKUDS/nanobot/issues/3376) Provider/Model Failover | **13 评论** | **多模型容灾自动切换**——用户已配置多 provider，但单点故障即中断任务，要求跨 provider 级联而非单 provider 内重试 |
| 2 | [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | **7 评论** | **会话级任务锚定**——LLM 被旁支问题打断后无法回归主任务，要求类似人类"任务板"的持续注意力机制 |

### 诉求分析

- **#3376 容灾切换**：与今日合并的 [#1163](https://github.com/HKUDS/nanobot/pull/1163)（LLM fallback chain）形成**需求-供给对照**——#1163 实现了错误码触发的降级，但 #3376 作者 1723229 明确要求更智能的"异常感知切换"（含超时、429、5xx、服务不可用）。当前实现可能仅覆盖子集，社区期待更完整的解决方案。
- **#3292 任务聚焦**：PR [#3622](https://github.com/HKUDS/nanobot/pull/3622) 今日提交，由 subalkum 实现"focus key 持久化到会话元数据"，直接回应此需求，进入代码审查阶段。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **严重** | [#3618](https://github.com/HKUDS/nanobot/issues/3618) | 区域模型 403 错误导致 **4月25日-5月4日长达 10 天的服务中断**，用户依赖备份恢复 | 开放，待根因分析 | 无 |
| 🟡 **高** | [#3625](https://github.com/HKUDS/nanobot/issues/3625) | WhatsApp + OpenAI Codex 流式增量导致**逐 token 发送消息**，消息轰炸 | 开放 | 无（#3480 可能相关但未覆盖 WhatsApp 逻辑） |
| 🟡 **高** | [#3554](https://github.com/HKUDS/nanobot/issues/3554) | DeepSeek-V4 `reasoning_content` 错误在 v0.1.5.post3 复现 | **已关闭** | ✅ [#3616](https://github.com/HKUDS/nanobot/pull/3616) |
| 🟢 **中** | [#2804](https://github.com/HKUDS/nanobot/issues/2804) | DuckDuckGo 搜索无限挂起，阻塞整个会话消息管道 | **已关闭** | 已修复（未标注具体 PR） |

**稳定性警示**：#3618 的 10 天静默故障暴露出版本升级/模型可用性监控的缺失，建议建立启动时模型健康检查机制。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 纳入可能性评估 |
|:---|:---|:---|:---|
| **模型异常自动切换** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | [#1163](https://github.com/HKUDS/nanobot/pull/1163)（基础 fallback） | ⭐⭐⭐⭐☆ 高——基础设施已启动，需扩展触发条件和切换策略 |
| **会话级任务聚焦** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | [#3622](https://github.com/HKUDS/nanobot/pull/3622)（实现中） | ⭐⭐⭐⭐⭐ 极高——PR 已提交，预计下一版本纳入 |
| **幻觉工具调用检测** | — | [#3624](https://github.com/HKUDS/nanobot/pull/3624)（新提交） | ⭐⭐⭐⭐☆ 高——Agent 安全关键特性，opt-in 设计降低风险 |
| **工具提示长度可配置** | — | [#3623](https://github.com/HKUDS/nanobot/pull/3623) | ⭐⭐⭐☆☆ 中——体验优化，低优先级 |
| **HF Spaces 多 Agent 部署** | — | [#3621](https://github.com/HKUDS/nanobot/pull/3621) | ⭐⭐⭐☆☆ 中——实验性，nightly 分支特性 |
| **MCP 图像内容处理** | — | [#2438](https://github.com/HKUDS/nanobot/pull/2438)（长期开放） | ⭐⭐⭐☆☆ 中——技术债务，需维护者决策 |

---

## 7. 用户反馈摘要

### 真实痛点

> *"4月25日到5月4日期间大量定时任务和消息都因为 'This model is not available in your region' 失败……还好我有备份习惯"*  
> — [#3618](https://github.com/HKUDS/nanobot/issues/3618) bigsinger

**信号**：生产环境缺乏模型可用性降级机制，用户被迫手动降级版本。

> *"当前 provider 或模型出现超时、连接异常、429 限流、5xx、服务不可用等问题时，不会自动切换到其他已配置的 provider"*  
> — [#3376](https://github.com/HKUDS/nanobot/issues/3376) 1723229

**信号**：企业/重度用户对高可用有明确需求，当前架构为单点瓶颈。

> *"I checked nanobot provider --help, but I did not see any logout command"*  
> — [#2665](https://github.com/HKUDS/nanobot/issues/2665) liuzhangjie1713

**信号**：账户生命周期管理（尤其是 OAuth 场景）是完整 UX 的缺口，今日已填补。

### 积极反馈

- Xiaomi MiMo 用户主动贡献文档（[#3617](https://github.com/HKUDS/nanobot/issues/3617) → [#3619](https://github.com/HKUDS/nanobot/pull/3619)），显示社区文档共创意愿强。
- DeepSeek 修复后无新增复现报告，#3616 方案获得验证。

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|:---|
| **长期开放 PR** | [#2438](https://github.com/HKUDS/nanobot/pull/2438) MCP ImageContent 处理 | 2026-03-24 | 2026-05-04 | 42 天未合并，MCP 生态扩展关键路径，base64 图像浪费 token 影响体验 |
| **长期开放 Issue** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) 模型容灾切换 | 2026-04-22 | 2026-05-04 | 13 评论高需求，与已合并 #1163 存在方案重叠，需维护者明确路线图 |
| **待审查 PR** | [#3621](https://github.com/HKUDS/nanobot/pull/3621) HF Spaces 多 Agent | 2026-05-04 | 2026-05-04 | 实验性特性，代码量大（含 gatekeeper 中间件、Docker 编排），需架构审查 |
| **待审查 PR** | [#3624](https://github.com/HKUDS/nanobot/pull/3624) 幻觉工具调用守卫 | 2026-05-04 | 2026-05-04 | AI 安全关键特性，需评估误报率和性能开销 |

---

**日报生成时间**：2026-05-05  
**数据来源**：HKUDS/nanobot GitHub 公开活动流  
**健康度评分**：🟢 良好（高合并率、活跃社区、关键 bug 快速修复，但需关注 #3618 根因和长期 PR 积压）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-05

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高压力**状态：24小时内 **50 Issues + 50 PRs** 的吞吐量表明社区参与密集，但 **P0 级崩溃问题集中爆发**——v0.12.0 版本因 `prompt_toolkit` 键位绑定兼容性问题导致 Linux/macOS 双平台启动崩溃，已快速形成修复闭环（3个相关Issue，2关闭1开放）。安全类议题显著升温，API密钥泄露、会话文件明文存储、子进程环境变量绕过等 **3个P0/P1安全漏洞** 同时处于开放状态，暴露出生产环境硬ening不足。PR侧以**配置修复和平台适配**为主，无重大功能发布，整体处于"救火+补丁"模式，版本质量债务正在累积。

---

## 2. 版本发布

**无新版本发布**

> 注：v0.12.0（2026-04-30）为当前最新版本，但该版本今日被确认存在广泛启动崩溃问题（见第5节）。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs（6条）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#19952](https://github.com/NousResearch/hermes-agent/pull/19952) | quen0xi | **FTS5搜索语法修复**：对冒号分隔字面量（如 `path:config.yaml`）和Windows路径进行正确引号转义，解决 `no such column` 内部错误 | ✅ 已关闭 |
| [#19811](https://github.com/NousResearch/hermes-agent/pull/19811) | briandevans | **企业微信长消息拆分**：将4000字符静默截断改为多消息分段发送，解决企业微信场景下内容丢失 | ✅ 已关闭 |
| [#12221](https://github.com/NousResearch/hermes-agent/pull/12221) | lancecheney | **飞书平台体验升级**：流式卡片渲染、输入状态反馈、完成元数据展示，飞书适配进入生产可用阶段 | ✅ 已关闭 |
| [#15693](https://github.com/NousResearch/hermes-agent/pull/15693) | el-analista | **TUI文件描述符泄漏修复**：session teardown时正确关闭AIAgent，解决httpx客户端GC延迟释放问题 | ✅ 已关闭 |
| [#11581](https://github.com/NousResearch/hermes-agent/pull/11581) | el-analista | **回复上下文注入修复**：消除Telegram等平台"回复上一条消息"时的上下文锚点丢失 | ✅ 已关闭 |
| [#4455](https://github.com/NousResearch/hermes-agent/pull/4455) | el-analista | **YouTube转录API适配**：迁移至 `youtube-transcript-api` v1.x 实例化API | ✅ 已关闭 |

### 待合并关键 PRs（推进中）

| PR | 作者 | 解决Issue | 状态 |
|:---|:---|:---|:---|
| [#19945](https://github.com/NousResearch/hermes-agent/pull/19945) | aideautomation | #19915 空字符串voice键崩溃 + #19861 BYOK迁移配置错误 | 🔄 开放 |
| [#19947](https://github.com/NousResearch/hermes-agent/pull/19947) | konsisumer | #18060 `HERMES_HOME` 环境变量被23处硬编码绕过 | 🔄 开放 |
| [#19948](https://github.com/NousResearch/hermes-agent/pull/19948) | oluwadareab12 | #19944 TUI虚拟行高度缓存漂移导致滚动空白 | 🔄 开放 |
| [#19946](https://github.com/NousResearch/hermes-agent/pull/19946) | liuhao1024 | #19937 飞书/微信WebSocket断开超时导致网关关闭挂起 | 🔄 开放 |

**整体评估**：今日合并以**平台适配可靠性**和**搜索基础设施**为主，无架构级进展。v0.12.0的紧急补丁（#19945）尚未合并，阻断用户升级路径。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) `c-S-c` 启动崩溃（通用修复方案讨论） | 7 | 4 | **跨平台键位绑定兼容性**：社区在争论 `prompt_toolkit` 的Shift修饰符支持缺失应如何在框架层优雅降级，而非简单删除快捷键 |
| 2 | [#19894](https://github.com/NousResearch/hermes-agent/issues/19894) macOS `c-S-c` 崩溃（已关闭） | 6 | 1 | **v0.12.0回滚需求**：用户需要紧急降级指南，反映发布测试覆盖不足 |
| 3 | [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) 记忆/上下文丢失 | 5 | 0 | **长期记忆可靠性**：中文用户群体反复报告Ollama后端下多轮对话后"失忆"，8轮对话即丢失用户姓名，涉及记忆压缩策略缺陷 |
| 4 | [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) 终端resize导致状态栏重复 | 4 | 0 | **macOS Terminal.app兼容性**：旧版macOS（10.15.7）终端模拟器适配，反映企业用户环境多样性 |

### 社区情绪分析

- **#19903 成为事实上的"主线程"**：尽管 #19894/#19896 分别按平台关闭，开发者 kojotekarl 提出的根因分析（`cli.py:10487` 的no-op handler）成为统一修复基础，体现社区自组织协作
- **安全议题"叫好不叫座"**：#19897（密钥泄露）和 #19845（会话文件明文）虽标记P0，但👍数为0，说明安全漏洞发现者多为专业审计人员，普通用户感知度低，存在"安全债隐形化"风险

---

## 5. Bug 与稳定性

### P0 级（系统崩溃/数据泄露）

| Issue | 平台/组件 | 描述 | 修复状态 |
|:---|:---|:---|:---|
| [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) | CLI (all platforms) | `prompt_toolkit` 不支持 `c-S-c` 导致启动崩溃 | **PR #19945 待合并** |
| [#19897](https://github.com/NousResearch/hermes-agent/issues/19897) | Gateway / Telegram / Discord | `HERMES_REDACT_SECRETS` 默认关闭，API密钥明文暴露于聊天输出 | ❌ 无PR |
| [#4427](https://github.com/NousResearch/hermes-agent/issues/4427) | Agent / Subprocess | 环境变量黑名单绕过：子进程可通过 `/proc/<pid>/environ` 读取被剥离的密钥 | ❌ 无PR（创建于4月初，长期滞留） |
| [#19845](https://github.com/NousResearch/hermes-agent/issues/19845) | Agent / Session | 会话捕获文件 `session_*.json` 明文存储HTTP请求中的 `Authorization` 头 | ❌ 无PR |

### P1 级（功能阻断）

| Issue | 平台/组件 | 描述 | 修复状态 |
|:---|:---|:---|:---|
| [#19822](https://github.com/NousResearch/hermes-agent/issues/19822) | Gateway / Discord | 辅助任务（vision检测、标题生成）竞态导致消息发送丢失 | ❌ 无PR |
| [#13274](https://github.com/NousResearch/hermes-agent/pull/13274) | Gateway / Telegram | 用户名格式chat_id被强制int转换导致投递失败 | **PR开放，待合并** |

### P2 级（体验降级）

| Issue | 描述 | 修复状态 |
|:---|:---|:---|
| [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) | 终端resize导致状态栏重复和空行泛滥 | ❌ 无PR |
| [#19944](https://github.com/NousResearch/hermes-agent/issues/19944) | TUI长对话滚动后内容空白 | **PR #19948 待合并** |
| [#19937](https://github.com/NousResearch/hermes-agent/issues/19937) | WSL+飞书/微信网关关闭90秒超时 | **PR #19946 待合并** |
| [#19861](https://github.com/NousResearch/hermes-agent/issues/19861) | `claw migrate` 生成错误 `api_mode` | **PR #19945 待合并** |

### 回归分析

> **v0.12.0 成为问题版本**：今日所有P0崩溃均指向4月30日发布的v0.12.0，键位绑定问题在Linux/macOS双平台复现，表明**发布前的跨平台CLI测试缺失**。建议维护者建立 `prompt_toolkit` 版本兼容性CI矩阵。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 需求描述 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#19852](https://github.com/NousResearch/hermes-agent/issues/19852) | UX优化 | 官网导航区分新/老用户（"Existing Users" → /login） | **高** — 低实现成本，直接影响转化漏斗 |
| [#19816](https://github.com/NousResearch/hermes-agent/issues/19816) | 可观测性 | 长会话agentic运行期间实时写入 `state.db`（当前仅会话结束写入） | **中** — 需权衡I/O性能与可见性，架构改动中等 |
| [#19818](https://github.com/NousResearch/hermes-agent/issues/19818) | 可观测性 | `max_turns` 截断后的会话续接需保留父会话ID关联 | **中** — 依赖#19816的数据模型变更 |
| [#19809](https://github.com/NousResearch/hermes-agent/issues/19809) | 架构 | Discord单bot多频道按profile路由（N→1网关缩减） | **低-中** — 网关层重大架构调整，但社区呼声明确 |
| [#19922](https://github.com/NousResearch/hermes-agent/issues/19922) | 可观测性 | `display.runtime_footer` 扩展至 `/usage` 全部变量（成本、token实时展示） | **高** — PR #19942 已实现工具进度合并，UI状态扩展为自然延伸 |

**路线图信号**：今日功能请求高度集中在**多租户网关架构**（#19809）和**可观测性/实时状态**（#19816/#19818/#19922）两大主题，反映Hermes从个人工具向团队/企业基础设施演进的压力。

---

## 7. 用户反馈摘要

### 🔴 核心痛点

| 场景 | 原声摘录 | 影响范围 |
|:---|:---|:---|
| **升级即崩溃** | "Just started with today when I update" — LordDeTracy, #19896 | v0.12.0全量用户 |
| **记忆不可靠** | "hermes agent 無法根據上下文與記憶去回答我" — chenchen6, #14420 | Ollama后端中文用户 |
| **安全合规焦虑** | "live API key values...echoes back...visible chat responses" — frogwraps, #19897 | 所有网关部署 |
| **Docker部署隐形故障** | "sessions, state, and channel data are written to the container overlay FS instead of the mounted volume" — Hunnyboy1217, #18060 | 容器化生产环境 |

### 🟡 体验摩擦

- **配置迁移陷阱**：`claw migrate` 生成的BYOK配置指向404端点（#19861），"freshly migrated user hits 404" — 新用户 onboarding 断裂
- **平台差异感知**：WSL用户反复遭遇网络超时（#19937），"flaky networking"环境下优雅降级缺失

### 🟢 积极反馈

- 飞书平台PR #12221 的流式卡片获得隐性认可（无负面评论，快速合并）
- `hermes doctor` 的 `gh CLI` 认证识别已修复（#16115关闭），CLI工具链集成体验改善

---

## 8. 待处理积压

### 🔥 超期高危（>30天，P0/P1）

| Issue | 创建日期 | 天数 | 风险描述 |
|:---|:---|:---:|:---|
| [#4427](https://github.com/NousResearch/hermes-agent/issues/4427) | 2026-04-01 | **34** | **子进程环境变量绕过**：安全漏洞公开已知超1个月，无PR、无维护者回应，存在被利用窗口 |
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | 2026-04-23 | **12** | 记忆上下文丢失：中文社区高频投诉，跨语言用户留存威胁 |

### ⚠️ 有PR但长期未合并

| PR | 创建日期 | 天数 | 阻塞原因 |
|:---|:---|:---:|:---|
| [#11103](https://github.com/NousResearch/hermes-agent/pull/11103) | 2026-04-16 | **19** | Signal平台配置优先级修复，代码已就绪，缺乏维护者review |
| [#18131](https://github.com/NousResearch/hermes-agent/pull/18131) | 2026-05-01 | **4** | 飞书工具客户端构建，依赖 #12221 合并后的基础架构 |

### 📋 建议维护者行动

1. **立即**：合并 #19945 发布v0.12.1热修复，阻断启动崩溃蔓延
2. **本周**：指派安全专项owner给 #4427（子进程绕过）和 #19897/#19845（密钥泄露），制定redaction默认开启的迁移方案
3. **本月**：建立跨平台CLI启动测试矩阵（Linux/macOS/Windows × prompt_toolkit版本），防止 #19903 类回归

---

*日报生成时间：2026-05-05 | 数据来源：NousResearch/hermes-agent GitHub 公开活动*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-05

## 1. 今日速览

PicoClaw 项目今日保持**高度活跃**，24小时内 Issues 更新 29 条（14 活跃/新开，15 关闭），PR 更新 60 条（19 待合并，41 已合并/关闭），**关闭率高达 52%（Issues）和 68%（PRs）**，显示维护团队处理效率强劲。社区核心诉求集中在**语音交互（TTS/ASR）**、**模型配置重构**、**安全沙箱加固**及**多平台部署（Android/树莓派）**四大方向。值得注意的是，今日出现 3 个关于 Gateway 启动无通道的高优 Bug 报告（v0.2.7-v0.2.8），以及一个跨提供商的 API 认证失效问题，稳定性面临短期压力。

---

## 2. 版本发布

**无新版本发布**（v0.2.8 为当前最新稳定版）。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2670](https://github.com/sipeed/picoclaw/pull/2670) | david1gp | 工具反馈美化：新增 `pretty_print` 和 `disable_escape_html` 选项，修复 `&&` → `\u0026` 等 Unicode 转义问题 | **用户体验**：解决长期存在的工具输出可读性痛点，关闭关联 Issue [#2081](https://github.com/sipeed/picoclaw/issues/2081) |
| [#2336](https://github.com/sipeed/picoclaw/pull/2336) | xiwuqi | 修复 thinking level 解析 Bug：通过 model reference 配置时正确继承 `thinking_level` | **功能正确性**：解决深度思考模式配置失效问题，关联 Issue [#2286](https://github.com/sipeed/picoclaw/issues/2286) |
| [#2333](https://github.com/sipeed/picoclaw/pull/2333) | diegofornalha | 结构化上下文压缩（6 阶段算法）：迭代摘要、Token 预算保护、工具调用对完整性 | **架构升级**：为长会话 Agent 提供可扩展的内存管理机制 |
| [#2332](https://github.com/sipeed/picoclaw/pull/2332) | diegofornalha | SkillManager 动态技能创建：CRUD、重复检测、路径遍历防护 | **生态扩展**：Agent 可自主创建可复用技能，降低重复工具调用开销 |
| [#2603](https://github.com/sipeed/picoclaw/pull/2603) | picoclawbot | FreeRide 工具：OpenRouter 免费模型自动轮询与降级管理 | **成本优化**：自动化免费模型调度，降低用户 API 成本 |
| [#2329](https://github.com/sipeed/picoclaw/pull/2329) | diegofornalha | WhatsApp 群组触发器支持：`mention_only` 防信息泄露 | **安全合规**：补齐 WhatsApp 与其他通道的安全策略差距 |
| [#2731](https://github.com/sipeed/picoclaw/pull/2731) | dependabot[bot] | AWS Bedrock Runtime SDK 升级（1.50.5 → 1.50.6） | **基础设施**：云提供商依赖保持最新 |

**整体进展评估**：今日合并内容覆盖**可观测性（OTel）、安全加固、多语言（pt-BR）、模型管理、成本优化**五大主题，项目向企业级部署和 Agent 自主能力两个战略方向稳步迈进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 🥇 | **TTS/ASR 语音交互架构设计** | 24 | 要求 PicoClaw 支持完整语音 Pipeline（STT → LLM → TTS），已有 PR #1642 但未合入 Gateway | [#1648](https://github.com/sipeed/picoclaw/issues/1648) |
| 🥈 | **LM Studio 简易连接** | 17 | 降低本地模型接入门槛，Android/嵌入式场景需求强烈 | [#28](https://github.com/sipeed/picoclaw/issues/28) |
| 🥉 | **openai_compat 认证头丢失（v0.2.6）** | 13 | 安全回归：API Key 从所有配置源静默丢弃，导致全量 HTTP 模型失效 | [#2578](https://github.com/sipeed/picoclaw/issues/2578) |

### 分析

- **#1648（TTS/ASR）**：社区对多模态交互的期待已从"功能请求"升级为"架构设计"阶段，24 条评论中包含详细的 Protocol Buffer 接口提案。阻碍在于 PR #1642 与 Gateway 的集成存在架构冲突，需要维护者做出**核心架构决策**。
- **#28（LM Studio）**：17 条评论中反复出现"Android Termux""Raspberry Pi"等关键词，反映**边缘部署场景**的用户基数正在扩大，但文档和配置复杂度构成显著门槛。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **Critical** | **跨提供商 API 认证失效（401）** | v0.2.8 中有效 API Key 被全局拒绝（Groq/OpenRouter/Nvidia），疑似密钥解析层回归 | **今日新建，0 评论** | ❌ 无 | [#2769](https://github.com/sipeed/picoclaw/issues/2769) |
| 🔴 **Critical** | **Gateway v0.2.8 启动无通道** | 配置 Telegram 等通道后 Gateway 仍报告 "no channels" | 待处理 | ❌ 无 | [#2742](https://github.com/sipeed/picoclaw/issues/2742) |
| 🟠 **High** | **Gateway v0.2.7 启动无通道（Docker）** | QQ 通道配置下 Docker 部署复现，影响 2 个版本 | 待处理 | ❌ 无 | [#2690](https://github.com/sipeed/picoclaw/issues/2690) |
| 🟠 **High** | **沙箱逃逸：find / 可遍历全文件系统** | `cat`/`ls` 被拦截但 `find /` 绕过，路径枚举风险 | 待处理 | ❌ 无 | [#2688](https://github.com/sipeed/picoclaw/issues/2688) |
| 🟡 **Medium** | **Android APK 服务启动失败** | `libpicoclaw.so` 执行权限问题，Termux/原生均受影响 | 待处理 | ❌ 无 | [#2590](https://github.com/sipeed/picoclaw/issues/2590) |
| 🟡 **Medium** | **Codex OAuth 空响应** | ChatGPT backend 通过 `response.output_item.done` 流式返回时解析失败 | 待处理 | [#2679](https://github.com/sipeed/picoclaw/pull/2679) 待审 | [#2674](https://github.com/sipeed/picoclaw/issues/2674) |
| 🟡 **Medium** | **定时任务触发通道错误** | v0.2.3 中每小时任务导致 Telegram 通道异常 | 待处理 | ❌ 无 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) |
| 🟢 **Low** | **源码构建后 launcher 不存在** | README 指引与实际构建产物不符 | 待处理 | ❌ 无 | [#2753](https://github.com/sipeed/picoclaw/issues/2753) |

**稳定性预警**：Gateway "启动无通道"问题在 v0.2.7→v0.2.8 连续两个版本出现，且影响不同通道（Telegram/QQ），暗示**配置加载或通道初始化模块存在系统性回归**。建议维护者优先建立复现测试。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue/PR | 成熟度评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **语音交互（TTS/ASR）** | [#1648](https://github.com/sipeed/picoclaw/issues/1648) + PR #1642 | 设计文档完整，实现部分就绪 | **高**（需架构决策） |
| **Gemini 搜索提供商** | PR [#2763](https://github.com/sipeed/picoclaw/pull/2763) | 今日新建，实现完整 | **高**（快速合入可能） |
| **结构化进度更新（update_plan）** | PR [#2765](https://github.com/sipeed/picoclaw/pull/2765) | 从 OpenClaw 移植，设计成熟 | **中高** |
| **搜索 API 自动降级链** | [#2582](https://github.com/sipeed/picoclaw/issues/2582) | 需求明确，与 FreeRide 工具理念一致 | **中** |
| **LM Studio 一键连接** | [#28](https://github.com/sipeed/picoclaw/issues/28) | 需求强烈但实现方案模糊 | **中低**（需社区贡献） |
| **树莓派/Pi Zero 2W 支持** | [#2675](https://github.com/sipeed/picoclaw/issues/2675) | 硬件适配文档缺失 | **低**（资源受限） |
| **SerpAPI 搜索集成** | [#2232](https://github.com/sipeed/picoclaw/issues/2232) | 替代 Brave 免费额度，需求合理 | **中** |

**路线图信号**：今日 PR 密集涌现 **Gemini 搜索、update_plan 工具、Seahorse 会话隔离**，显示贡献者正围绕 **"增强 Agent 自主执行能力"** 和 **"扩展搜索/知识工具链"** 两个主题集中发力。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 原声引用 | 来源 |
|:---|:---|:---|
| **配置复杂度** | *"i'm trying to get this installed on an android... its just outside my reach right now"* | [#28](https://github.com/sipeed/picoclaw/issues/28) |
| **边缘设备部署难** | 树莓派 Zero W + Raspbian 11 反复出现通道/定时任务问题 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) |
| **安全焦虑** | *"if anyone gains access to the CLI... they can execute any arbitrary commands without authentication"* | [#1067](https://github.com/sipeed/picoclaw/issues/1067) |
| **工具输出不可读** | shell 命令中的 `&&` 显示为 `\u0026`，*making shell commands in the preview unreadable* | [#2081](https://github.com/sipeed/picoclaw/issues/2081) |
| **API 成本敏感** | Brave 搜索不再免费，主动寻求 SerpAPI 替代 | [#2232](https://github.com/sipeed/picoclaw/issues/2232) |
| **版本回归挫败** | v0.2.7→v0.2.8 连续升级后 Gateway 失效，*config.json 配置无效* | [#2742](https://github.com/sipeed/picoclaw/issues/2742) |

### 满意度信号

- **OTel GenAI 可观测性**（[#1731](https://github.com/sipeed/picoclaw/issues/1731)）：企业用户主动贡献完整方案，显示对项目企业级潜力的认可。
- **Agent Skills 生态对接**（[#2315](https://github.com/sipeed/picoclaw/issues/2315)）：外部标准组织主动邀请 PicoClaw 加入官方客户端列表，社区影响力获外部验证。

---

## 8. 待处理积压

| 风险等级 | 项目 | 闲置时间 | 阻塞原因 | 行动建议 |
|:---|:---|:---|:---|:---|
| 🔴 | **#28 LM Studio 简易连接** | ~84 天 | 无明确实现方案，作者技能不足 | 维护者提供配置模板或标记 `good first issue` |
| 🔴 | **#1757 定时任务通道错误** | ~48 天 | v0.2.3 旧版本，缺乏复现确认 | 请求报告者验证 v0.2.8 是否仍复现 |
| 🟠 | **#2232 SerpAPI 集成** | ~35 天 | 与现有搜索工具架构待对齐 | 评估与 PR #2763（Gemini 搜索）的优先级冲突 |
| 🟠 | **#2582 搜索 API 降级链** | ~17 天 | 与 FreeRide 工具（PR #2603）功能边界模糊 | 统一设计：FreeRide 聚焦模型降级，搜索降级独立实现 |
| 🟠 | **#2590 Android 服务启动** | ~16 天 | 原生库加载权限问题，需 Android 专家 | 联系 Sipeed 官方 Android 团队介入 |
| 🟡 | **#2675 树莓派支持文档** | ~10 天 | 硬件生态扩展，资源投入大 | 社区征集测试志愿者，先建 Wiki 页面 |

---

*日报生成时间：2026-05-05 | 数据来源：GitHub API 实时抓取 | 分析框架：PicoClaw 社区健康度模型 v1.2*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-05

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | **日期**: 2026-05-05 | **分析师**: AI 智能体开源项目分析师

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**，24小时内 34 个 PR 更新（19 条已合并/关闭，15 条待审），5 个 Issues 中有 4 个为新开或活跃状态。核心团队正集中火力修复 v2 架构的稳定性问题——WhatsApp LID 处理、容器配置持久化、MCP 工具注册等底层缺陷成为焦点。值得注意的是，**无新版本发布**，表明当前处于密集修 Bug 的"打磨期"而非功能释放期。社区贡献者 glifocat 单日提交 3 个高质量修复 PR，成为今日最活跃贡献者。

---

## 2. 版本发布

**无新版本发布**（v2 架构的稳定性修复尚未达到发版阈值）

---

## 3. 项目进展

### 已合并/关闭的关键 PR（19 条中的核心项）

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#2242](https://github.com/qwibitai/nanoclaw/pull/2242) | mashkovtsevlx | **修复 MCP 工具注册失效**——动态推导 `allowedTools` 白名单，解决 `add_mcp_server` 注册后工具被静默过滤的致命问题，关闭 [#2241](https://github.com/qwibitai/nanoclaw/issues/2241) |
| [#2055](https://github.com/qwibitai/nanoclaw/pull/2055) | dooha333 | **修复安装后 CLI 不可达**——注入 `~/.local/bin` 到 PATH，解决全新安装后 `onecli` 命令找不到的入门阻断问题 |
| [#2251](https://github.com/qwibitai/nanoclaw/pull/2251) | axxml | **DeltaChat 平台适配修复**——添加 `namespacedPlatformId` 排除规则，关闭 |
| [#2258](https://github.com/qwibitai/nanoclaw/pull/2258) | CrAzyScreamx | 关闭（与 [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) 重复）——ffmpeg MCP 工具技能 |
| [#2253](https://github.com/qwibitai/nanoclaw/pull/2253) | jxrrdan | 关闭——WhatsApp API 集成功能技能（未通过或重复） |
| [#2254](https://github.com/qwibitai/nanoclaw/pull/2254) | ulimonte05 | 关闭——Rial 平台 WhatsApp 商业流程集成（可能为实验性撤回） |

**整体推进评估**: 今日合并集中在 **MCP 生态可用性** 和 **安装体验** 两大主题，修复了 v2 架构下"工具注册成功但无法调用"的隐蔽缺陷，以及"安装完成即遇到第一个报错"的新用户流失点。WhatsApp 相关 3 个关闭 PR 暗示该通道的集成策略可能在调整。

---

## 4. 社区热点

### 讨论热度最高的 Issues/PRs

| 排名 | 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) llama.cpp 兼容性 | 1 评论，持续更新 | **本地模型部署刚需**: 用户明确对比 Claude Code 的 llama.cpp 支持，NanoClaw 连接超时问题暴露了 OpenAI-centric 架构对第三方推理端点的适配不足。诉求：打破供应商锁定，支持本地/自托管模型 |
| 🔥2 | [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) + [#2266](https://github.com/qwibitai/nanoclaw/pull/2266) Discord 卡片重复 | Bug + 配套 Fix PR | **SDK 版本管理漏洞**: 技能模板锁定旧版本 adapter，导致已修复的 bug 在新安装中复现。诉求：建立技能模板的自动化版本同步机制 |
| 🔥3 | [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) + [#2265](https://github.com/qwibitai/nanoclaw/pull/2265) send_card 静默失效 | Bug + 配套 Fix PR | **MCP 工具与 Chat SDK 桥接断裂**: `send_card` 在 7 个通道全部 no-op，说明 MCP 工具的多通道测试覆盖存在系统性缺口 |

**背后诉求洞察**: 社区正从"能跑通演示"转向"生产环境可靠"——llama.cpp 诉求代表**成本可控性**，Discord/Chat SDK  bug 代表**多通道一致性**，两者共同指向：NanoClaw 需要更开放的架构和更严格的集成测试。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue/PR | 描述 | Fix PR 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) | 损坏的 `container.json` 在下次容器启动时被**静默清空**，导致所有自定义配置（挂载、MCP 服务器、允许工具）丢失 | ❌ **无 Fix PR**，今日新开 | 所有使用 per-group 容器配置的用户 |
| 🔴 **High** | [#2241](https://github.com/qwibitai/nanoclaw/issues/2241) → [#2242](https://github.com/qwibitai/nanoclaw/pull/2242) | `add_mcp_server` 注册的工具被 `allowedTools` 静态白名单过滤，**MCP 生态完全不可用** | ✅ **已合并** | 所有通过 SDK/API 注册 MCP 服务器的场景 |
| 🟡 **Medium** | [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) → [#2266](https://github.com/qwibitai/nanoclaw/pull/2266) | Discord 卡片消息重复发送（adapter v4.26.0 回归） | ✅ **待审** (#2266) | 新安装的 Discord 通道 |
| 🟡 **Medium** | [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) → [#2265](https://github.com/qwibitai/nanoclaw/pull/2265) | `send_card` MCP 工具在全部 Chat SDK 通道**静默无操作** | ✅ **待审** (#2265) | 所有 Chat SDK 通道（Discord, Slack, Teams, Telegram, WhatsApp, GChat, Linear）|
| 🟡 **Medium** | [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) | llama.cpp 连接超时，无法作为替代提供商 | ❌ **无 Fix PR**，需诊断 | 本地模型/自托管推理用户 |

**稳定性健康度**: ⚠️ **中等风险**——两个 High 严重度问题中，一个已修复（MCP 白名单），另一个（配置静默丢失）仍处于开放状态且无 PR，这是**数据丢失类缺陷**，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

### 用户/贡献者提出的新功能方向

| 功能 | 来源 | 成熟度评估 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| **per-wiring 通道权限控制** (read/write/read+write) | [#2248](https://github.com/qwibitai/nanoclaw/pull/2248) CrAzyScreamx | PR 已提交，遵循贡献指南 | ⭐⭐⭐⭐⭐ **高**——架构层改动，解决多通道场景的安全隔离需求 |
| **ffmpeg/ffprobe MCP 工具** | [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) CrAzyScreamx | PR 已提交（替代关闭的 #2258） | ⭐⭐⭐⭐☆ **中高**——媒体处理是常见 agent 技能，社区需求明确 |
| **WhatsApp Baileys v7 升级 + LID 处理** | [#2259](https://github.com/qwibitai/nanoclaw/pull/2259) gavrielc | PR 已提交，含迁移清理 (#2260) | ⭐⭐⭐⭐⭐ **高**——修复 v6→v7 降级遗留问题，影响消息送达可靠性 |
| **Agent-to-Agent 回复路由修复** | [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) ddaniels | PR 已提交 | ⭐⭐⭐⭐☆ **中高**——共享模式多会话场景的关键修复 |
| **OpenCode 提供商 BASE_URL 转发** | [#2262](https://github.com/qwibitai/nanoclaw/pull/2262) hirojinho | PR 已提交 | ⭐⭐⭐⭐☆ **中高**——非 Anthropic 提供商（DeepSeek/OpenRouter）的可用性 |
| **Telegram 设置体验优化** | [#2249](https://github.com/qwibitai/nanoclaw/pull/2249), [#2246](https://github.com/qwibitai/nanoclaw/pull/2246) alipgoldberg | 2 个 PR 已提交 | ⭐⭐⭐☆☆ **中**——UX 改进，非阻塞性 |
| **llama.cpp 原生支持** | [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) Kwisss | 仅 Issue，需架构评估 | ⭐⭐☆☆☆ **低中**——涉及提供商抽象层重构，短期可能依赖社区 workaround |

**路线图信号**: 贡献者正主动填补 v2 架构的"最后一公里"——权限模型、媒体工具、第三方模型支持。维护者若将 [#2248](https://github.com/qwibitai/nanoclaw/pull/2248) + [#2259](https://github.com/qwibitai/nanoclaw/pull/2259) + [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) 打包为 v2.1，可形成"更安全、更开放、更实用"的发布叙事。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 来源 | 用户场景 | 痛点 | 情绪 |
|:---|:---|:---|:---|
| [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) Kwisss | 本地部署，用 llama.cpp 替代 Claude API 降低成本 | "Claude Code 能无缝工作，NanoClaw 却超时"——**对比落差挫败感** | 😤 失望 |
| [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) rscheuermann | 生产环境，自定义容器配置（挂载、MCP 服务器） | 配置**静默丢失**，无报错无警告，下次启动"一切归零" | 😱 震惊/不信任 |
| [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) glifocat（贡献者视角） | 新用户安装 Discord 技能 | 模板锁定旧版本，已知 bug 在新安装中复现——**"出厂即缺陷"** | 😤 无奈 |
| [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) glifocat | 开发 send_card MCP 工具 | 工具在 7 个通道全部静默失效，无错误日志——**调试黑洞** | 😵 困惑 |

### 满意点
- 贡献者 alipgoldberg 持续优化 Telegram 设置流程（[#2246](https://github.com/qwibitai/nanoclaw/pull/2246), [#2249](https://github.com/qwibitai/nanoclaw/pull/2249)），体现对新手 onboarding 体验的重视
- 社区响应速度快：[#2241](https://github.com/qwibitai/nanoclaw/issues/2241) 报告当日即有修复 PR 并合并

### 不满意点
- **"静默失败"模式反复出现**: send_card no-op、container.json 丢失、MCP 工具过滤——系统缺乏"失败即报错"的防御性设计
- **版本漂移管理缺失**: 技能模板与核心 SDK 版本不同步，导致 regression

---

## 8. 待处理积压

### 需维护者关注的高风险/长期项

| 条目 | 天数 | 风险说明 | 行动建议 |
|:---|:---|:---|:---|
| [#2257](https://github.com/qwibitai/nanoclaw/issues/2257) 配置静默丢失 | **0 天（今日新开）** | 🔴 **数据丢失类 High 缺陷**，无 PR，影响所有容器自定义配置用户 | **立即分配**，需在下次容器启动周期前修复 |
| [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) llama.cpp 支持 | 2 天 | 本地模型部署是开源社区核心诉求，竞品已支持 | 维护者回应是否纳入路线图，或提供社区 workaround 文档 |
| [#2123](https://github.com/qwibitai/nanoclaw/pull/2123) 重复文本抑制 | 6 天 | 待合并，影响所有 send_message/send_file 场景的用户体验 | 审阅合并，或说明阻塞原因 |
| [#2143](https://github.com/qwibitai/nanoclaw/pull/2143) 管理员取消命令 | 5 天 | 待合并，生产环境运维刚需 | 审阅合并 |
| [#2256](https://github.com/qwibitai/nanoclaw/pull/2256) Claude/strange haslett d9ec7c | 1 天 | 标题混乱，疑似自动化提交或测试 PR | 确认是否为有效贡献，避免积压噪音 |

---

## 附录：今日数据卡片

```
Issues:  5 更新 (新开/活跃 4 | 关闭 1)
PRs:    34 更新 (待合并 15 | 已合并/关闭 19)
Releases: 0
贡献者活跃: glifocat(3 PRs), CrAzyScreamx(2 PRs), alipgoldberg(2 PRs), gavrielc(2 PRs)
```

---

*本日报基于 GitHub 公开数据生成，仅供项目健康度参考。建议维护者优先处理 #2257（High 数据丢失缺陷）并回应 #2234（社区核心诉求）。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-05

---

## 1. 今日速览

NullClaw 今日保持**中高活跃度**，24小时内产生 3 条活跃 Issue、5 条 PR 动态及 1 个版本发布。核心进展围绕 **v2026.5.4 版本迭代**展开：Agent Skills RFC 0.2.0 支持落地、Web Skill 安全加固完成，同时社区对低资源设备适配、沙箱启动性能、推理透明度三大痛点展开密集讨论。3 个待合并 PR 涉及 Zig 构建修复、数据治理层创新功能及进程探针安全改进，项目技术栈正从功能扩展向**稳定性与边缘场景优化**深度演进。

---

## 2. 版本发布

### [v2026.5.4](https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.4) | 2026-05-04 发布

| 维度 | 详情 |
|:---|:---|
| **发布性质** | 常规迭代版本，含功能增强与关键修复 |
| **核心变更** | ① **Agent Skills RFC 0.2.0 合规支持** — 技能接口协议升级，提升跨 Agent 互操作性<br>② **Web Skill 拉取流程安全加固** — 强化外部技能获取的验证与容错机制 |
| **合并 PR** | [#830](https://github.com/nullclaw/nullclaw/pull/830) 版本基础、[#831](https://github.com/nullclaw/nullclaw/pull/831) 核心功能修复 |
| **破坏性变更** | 暂无明确标注；Skills RFC 0.2.0 升级建议依赖自定义 Skill 实现的开发者验证兼容性 |
| **迁移建议** | 使用 Web Skill 功能的部署方建议审查网络策略，确认加固后的拉取行为符合预期 |

> ⚠️ 发布说明存在截断（`feat: add to`），建议维护者补全遗漏内容。

---

## 3. 项目进展

| PR | 状态 | 贡献者 | 进展说明 |
|:---|:---|:---|:---|
| [#888](https://github.com/nullclaw/nullclaw/pull/888) | **已关闭** | @DonPrus | 版本发布管理 PR，完成 v2026.5.4 发版流程 |
| [#884](https://github.com/nullclaw/nullclaw/pull/884) | **已关闭** | @DonPrus | **关键质量基建**：新增 Zig 语言级关键路径测试覆盖，涉及所有权、生命周期、安全沙箱、路由、解析器、注册表六大高风险运行时契约；同步修复测试暴露的生产问题 |

**整体推进评估**：今日合并内容聚焦**"发版+质量兜底"**，未引入新用户-facing 功能，但 [#884](https://github.com/nullclaw/nullclaw/pull/884) 的测试加固显著降低了运行时安全风险，为后续快速迭代奠定可靠性基础。

---

## 4. 社区热点

### 🔥 最高讨论热度：[#871 web_search 低资源设备不可用](https://github.com/nullclaw/nullclaw/issues/871)
| 指标 | 数据 |
|:---|:---|
| 评论数 | **5 条**（24h 内持续活跃） |
| 创建时间 | 2026-04-25（已持续 10 天） |
| 核心诉求 | 要求原生集成 DuckDuckGo 搜索，消除对 Brave Search API Key 的外部依赖 |

**深层分析**：该 Issue 触及 NullClaw 核心定位矛盾——标榜"弱设备、低成本"场景，却依赖付费/需配置的搜索服务。评论显示用户实际部署在 ARM 单板、旧手机等资源受限环境，API 密钥管理成为规模化部署的阻塞点。**此 Issue 若长期未解，将直接削弱项目差异化竞争力**。

### 次热点：[#882 沙箱启动探针优化](https://github.com/nullclaw/nullclaw/issues/882)
- 2 条评论，关联历史重复问题，反映 `firejail`/`bwrap`/`docker` 进程探测的启动延迟与权限困扰已成顽疾

---

## 5. Bug 与稳定性

| 优先级 | Issue/PR | 严重度 | 状态 | 说明 |
|:---|:---|:---|:---|:---|
| P0 | [#871](https://github.com/nullclaw/nullclaw/issues/871) web_search 低资源设备失效 | **🔴 高** | ❌ 无 fix PR | 核心场景不可用，影响项目定位可信度 |
| P1 | [#882](https://github.com/nullclaw/nullclaw/issues/882) 沙箱探针启动性能 | **🟡 中** | 🔄 关联 PR [#883](https://github.com/nullclaw/nullclaw/pull/883) | @mark-os 已提交可执行文件预解析修复，待合并 |
| P2 | [Zig stdlib execve 残留进程](https://github.com/nullclaw/nullclaw/pull/883) | **🟡 中** | 🔄 PR [#883](https://github.com/nullclaw/nullclaw/pull/883) 待合并 | 底层库 bug 导致的进程泄漏风险 |

> **积极信号**：[#884](https://github.com/nullclaw/nullclaw/pull/884) 的测试加固已前置拦截同类运行时缺陷。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#886](https://github.com/nullclaw/nullclaw/issues/886) | **推理/思考过程可视化** — 长任务执行时显示中间步骤，避免"黑盒等待" | 高；涉及日志/事件流改造，无架构颠覆 | **75%** — 用户体验痛点明确，实现成本可控 |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | **数据治理层（Hackathon 作品）** — 企业级数据访问控制、审计、合规 | 中高；代码质量需 review，概念契合 B 端扩展 | **50%** — 需评估与核心架构的耦合度，Hackathon 代码通常需大幅重构 |
| [#887](https://github.com/nullclaw/nullclaw/pull/887) | **Zig v0.16 构建修复** | 高 | **90%** — 构建链兼容性为基础设施优先级 |

**路线图推断**：短期（v2026.5.x）聚焦构建修复+推理透明度；中期需回应低资源设备适配与数据治理的企业级需求。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论提炼）

| 场景 | 痛点 | 来源 |
|:---|:---|:---|
| **边缘设备部署** | "弱、便宜、低资源设备"上 web_search 完全不可用，被迫选择 Brave API（需密钥+潜在费用）或放弃搜索功能 | [#871](https://github.com/nullclaw/nullclaw/issues/871) |
| **长任务焦虑** | 执行 Outlook MCP 读邮件任务 30 分钟无终端输出，"不知道在做什么还是卡住了" | [#886](https://github.com/nullclaw/nullclaw/issues/886) |
| **启动性能敏感** | 沙箱工具探测每次启动都 spawn 子进程，在容器/受限环境反复触发权限失败 | [#882](https://github.com/nullclaw/nullclaw/issues/882) |

### 满意度暗示
- **认可**：Skills RFC 标准化、Web Skill 安全加固获技术层面正向反馈
- **不满**："intended NullClaw use case" 与实际体验落差（[#871](https://github.com/nullclaw/nullclaw/issues/871) 措辞显失望），长任务无反馈导致信任损耗

---

## 8. 待处理积压

| 项目 | 积压时长 | 风险等级 | 提醒 |
|:---|:---|:---|:---|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) web_search DuckDuckGo 支持 | **10 天** | 🔴 **高** | 核心定位 Issue，5 条评论无维护者明确回应，已有用户表达"practical way"缺失的挫败感 |
| [#883](https://github.com/nullclaw/nullclaw/pull/883) 探针预解析修复 | 2 天 | 🟡 中 | 关联 [#882](https://github.com/nullclaw/nullclaw/issues/882) 历史顽疾，建议优先 review 合并 |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) 数据治理层 | 1 天 | 🟡 中 | Hackathon 作品，需维护者裁定是否纳入主线或作为生态插件 |

---

> **健康度评分**：⭐⭐⭐⭐☆（4/5）
> - 优势：版本节奏稳定、质量基建投入、社区参与活跃
> - 风险：核心场景 Issue 响应滞后、边缘设备承诺兑现压力增大

*日报基于 GitHub 公开数据生成，链接均为 `https://github.com/nullclaw/nullclaw` 下对应资源。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-05

> **项目**: nearai/ironclaw | **日期**: 2026-05-05 | **分析周期**: 过去24小时

---

## 1. 今日速览

IronClaw 今日保持**高强度开发节奏**，19 个 PR 更新（8 个已合并/关闭）显示核心团队正在加速推进 **Reborn 架构落地**。最显著的信号是 nickpismenkov 将原本 7-PR 的 Reborn 内存栈（#3118）压缩合并为单一 PR #3180，体现工程效率优化；同时 runtime 策略词汇表（#3243）作为 8-PR 栈的首个 PR 开启，标志着 #3045 大规模重构进入执行阶段。Issues 侧活跃度偏低（仅 2 条），社区讨论尚未形成热点。整体健康度：**工程推进稳健，社区参与待激活**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 作者 | 核心进展 | 链接 |
|:---|:---|:---|:---|
| **#3180** | nickpismenkov | **Reborn 内存基础设施完整落地** — 将原 7-PR 栈（#3180-#3185）压缩为单一 PR，包含：原生隔离 guardrails、lib.rs 模块拆分、libSQL/Postgres 双后端仓库实现、行为契约测试、垂直集成测试。这是 Reborn 架构存储层的里程碑。 | [PR #3180](https://github.com/nearai/ironclaw/pull/3180) |
| #3242 | zetyquickly | 补充遗漏的 mission markdown 文档 | [PR #3242](https://github.com/nearai/ironclaw/pull/3242) |
| #3241 | zetyquickly | Abound demo 修复：新增目标汇率检查 mission 支持，支持成功触发后终止 | [PR #3241](https://github.com/nearai/ironclaw/pull/3241) |
| #3181-#3185 | nickpismenkov | 原 Reborn 内存栈的 2-6 号 PR，因 squash 合并至 #3180 而关闭 | [PR #3181](https://github.com/nearai/ironclaw/pull/3181) · [PR #3182](https://github.com/nearai/ironclaw/pull/3182) · [PR #3183](https://github.com/nearai/ironclaw/pull/3183) · [PR #3184](https://github.com/nearai/ironclaw/pull/3184) · [PR #3185](https://github.com/nearai/ironclaw/pull/3185) |
| #2390 | georgeglarson | **OpenAI 兼容视觉修复**：将默认 image detail 设为 `'auto'`，解决所有 OpenAI 兼容 provider 的 vision 失败问题 | [PR #2390](https://github.com/nearai/ironclaw/pull/2390) |

### 🔄 整体推进评估

| 维度 | 进展 |
|:---|:---|
| **Reborn 架构** | 内存存储层（#3118）→ **完成**；runtime 策略层（#3045）→ **启动**；事件存储（#3171）+ 投影服务（#3212）→ **进行中**；substrate 入主干（#3230）→ **待合并** |
| **生产稳定性** | Approval gate 内联修复（#3157）、Live Canary auth 修复（#3235）→ **关键修复待合并** |
| **生态集成** | Abound demo（#1764）、WeChat 通道（#1666）→ **长期演进中** |

---

## 4. 社区热点

> 今日无高评论/高反应的社区热点。以下按现有讨论分析：

### 讨论相对活跃的议题

| 议题 | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---|:---|
| **#3090** [Reborn] Add ToolSurfaceService and CapabilityCatalog | 3 | 0 | **架构可见性 vs 权限分离的设计讨论**。社区关注 Reborn 如何在不授予实际权限的前提下，向模型暴露工具/能力视图 —— 这是 AI 安全的关键边界问题。作者 serrrfirat 强调 "visibility only, never grant authority"。 | [Issue #3090](https://github.com/nearai/ironclaw/issues/3090) |
| **#3036** Configuration-as-Code for IronClaw Reborn | 3 | 1 | **运维痛点集中爆发**。ilblackdragon 揭示了两类操作者（平台运维 + 场景开发者）在配置管理上的共同困境：无 schema、无 diff、无审计追踪、无法版本控制。这是 Reborn 面向企业落地的** blocking 需求**。 | [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) |

### 热点洞察

- **#3036 的 1 个 👍** 虽少，但反映了配置即代码（CaC）是**沉默的大多数需求** —— 企业用户通常不会大量互动，但会在评估阶段因缺乏此能力而流失
- **#3090 的零 👍** 不代表不重要，而是过于技术底层，受众局限于核心贡献者

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **High** | **Approval gate 异步路径错误地将暂停状态抛为 RuntimeError**，导致 CodeAct 脚本内部崩溃而非正确暂停等待用户 | **待合并** | #3157 | [PR #3157](https://github.com/nearai/ironclaw/pull/3157) |
| 🔴 **High** | **Live Canary auth 测试连续 3+ 天失败**，因 engine-v2 callable-only 契约变更导致 OAuth 矩阵测试断裂 | **待合并** | #3235 | [PR #3235](https://github.com/nearai/ironclaw/pull/3235) |
| 🟡 **Medium** | OpenAI 兼容 vision 因 `detail: None` 失败 | **已修复** | #2390 ✅ | [PR #2390](https://github.com/nearai/ironclaw/pull/2390) |

### 稳定性风险评估

- **#3157 + #3235 均为 engine-v2 升级后的回归问题**，表明 v2 架构的边界契约变更影响面正在显现，需加强迁移兼容性测试
- #3235 的 "3+ 天失败" 提示 CI/CD 信号响应机制存在延迟，建议优化 on-call 流程

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Runtime 策略词汇表 + 预设系统** | #3243（PR 1/8 of #3045） | ⭐⭐⭐⭐⭐ **极高** | 已作为 8-PR 栈启动，核心团队主导，Reborn 基础设施的必备组件 |
| **事件存储后端（JSONL/Postgres/libSQL）** | #3171 | ⭐⭐⭐⭐⭐ **极高** | 已开 PR，与 #3212 投影服务形成完整事件溯源架构 |
| **事件投影服务（ThreadTimeline, RunStatusProjection）** | #3212 | ⭐⭐⭐⭐⭐ **极高** | 依赖 #3171，已形成设计闭环 |
| **WASM  per-request 凭证签名（HMAC/EIP-712/NEP-413）** | #3240 | ⭐⭐⭐⭐☆ **高** | 新贡献者 neo-sky 提交，技术方向契合 Web3 原生定位，但需 review 安全模型 |
| **Configuration-as-Code（tenant blueprints + use-case harnesses）** | #3036 | ⭐⭐⭐⭐☆ **高** | EPIC 级 Issue，有明确用户痛点，但实现复杂度高，可能分阶段交付 |
| **WeChat 通道（WASM + host 扩展）** | #1666 | ⭐⭐⭐☆☆ **中** | 长期开放 PR（3/26 创建），覆盖 9 个 scope，体量过大可能阻碍 review |
| **Abound demo 完整集成** | #1764 | ⭐⭐⭐☆☆ **中** | 同样为 XL 级长期 PR， forex timing intelligence 为差异化功能，但 merge 优先级受 Reborn 重构影响 |

---

## 7. 用户反馈摘要

> 基于 Issues/PR 描述提炼的真实信号

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"配置管理像黑箱"** — 必须手改 `.env`、`.system/...`、JSON、runtime flags 的混合，无 schema/无 diff/无审计 | #3036 | 😤 **强负面** |
| **"每次 engine 升级都怕回归"** — Live Canary 连续失败 3+ 天，auth 测试矩阵脆弱 | #3235 | 😰 **焦虑** |
| **"vision 功能突然全挂"** — OpenAI 兼容 provider 集体失效，影响所有多模态场景 | #2390 | 😤 **强负面** → 😌 **已缓解** |
| **"Reborn 什么时候能真正可用？"** — substrate 已入主干但 default-off，用户可见 cutover 时间不明 | #3230 | 🤔 **观望** |

### 满意度亮点
- Reborn 内存层的 squash 合并策略（#3180）体现团队**工程成熟度提升**，减少 review 负担

---

## 8. 待处理积压

> 以下 Issue/PR 长期未决或存在风险，建议维护者优先关注

| 项目 | 创建时间 | 当前状态 | 风险/建议 |
|:---|:---|:---|:---|
| **#1764** Abound demo | 2026-03-30（36天）| OPEN, XL, high risk | 覆盖 15 个 scope 的巨型 PR，建议拆分或设定明确的 merge 里程碑，避免与 Reborn 重构持续冲突 | [PR #1764](https://github.com/nearai/ironclaw/pull/1764) |
| **#1666** WeChat 通道 | 2026-03-26（40天）| OPEN, XL, medium risk | 同样为超长期 PR，9 个 scope 涵盖 WASM + host 扩展 + 交互流程，建议分阶段交付 | [PR #1666](https://github.com/nearai/ironclaw/pull/1666) |
| **#3036** Configuration-as-Code | 2026-04-28（7天）| OPEN, 3 评论 | EPIC 级需求但无 assignee，建议纳入 Reborn 路线图并拆分 MVP | [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) |
| **#3090** ToolSurfaceService | 2026-04-29（6天）| OPEN, 3 评论 | 依赖 #2987，需确认与 #3243 runtime 策略词汇表的接口兼容性 | [Issue #3090](https://github.com/nearai/ironclaw/issues/3090) |

---

## 附录：今日数据仪表盘

```
Issues:  ████░░░░░░ 2 更新（2 活跃 / 0 关闭）
PRs:     ████████████████████ 19 更新（11 待合并 / 8 已合并关闭）
Releases: 0
核心贡献者活跃: nickpismenkov, ilblackdragon, zetyquickly, zmanian, serrrfirat
新贡献者: neo-sky（#3240 WASM 签名）, Mr-In4inci3le（#3239 SECURITY.md）
```

---

*本日报基于 GitHub 公开数据生成，不代表项目官方立场。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-05

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-05（统计周期：过去24小时）

---

## 1. 今日速览

LobsterAI 今日活跃度**偏低**，社区活动以维护性事务为主。过去24小时内仅1个 Issue 关闭、2个 PR 待合并，无新版本发布。项目核心开发节奏趋于平稳，但存在一个已标记为 `[stale]` 的性能优化 PR 和一个依赖更新 PR 长期悬而未决，合并吞吐量不足可能反映维护资源有限。整体健康度**平稳但需关注积压**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| 类型 | 内容 | 进展评估 |
|:---|:---|:---|
| **Issue 关闭** | [#1877](https://github.com/netease-youdao/LobsterAI/issues/1877) OpenAI 认证失败问题 | 用户反馈的 `unsupported_country_region_territory` 403 错误已关闭，但未明确标注解决方案（是配置修复、文档更新还是用户自行解决）。该 Issue 涉及中国区用户访问 OpenAI 服务的典型网络限制问题，关闭状态可能意味着问题被归类为"外部限制"而非产品缺陷。 |

**今日无 PR 合并**，项目功能层面无实质推进。

---

## 4. 社区热点

### 🔥 讨论焦点：OpenAI 认证地域限制问题
- **Issue [#1877](https://github.com/netease-youdao/LobsterAI/issues/1877)** | 作者: [AK-blank](https://github.com/AK-blank) | 👍 0 | 评论 2
  - **核心矛盾**: 用户本地 Codex 可正常使用，但 LobsterAI 触发 `unsupported_country_region_territory` 错误
  - **背后诉求**: 用户期望 LobsterAI 提供与 Codex 同等的地域绕过能力（如代理配置、自定义 API 端点、或更灵活的 Token 交换机制），而非简单暴露底层错误
  - **信号价值**: 该 Issue 虽关闭，但反映了中国大陆用户接入国际 AI 服务的**持续性痛点**，产品层需评估是否将"网络兼容性"作为差异化能力

### 📌 长期悬而未决
- **PR [#811](https://github.com/netease-youdao/LobsterAI/pull/811)** | `[stale]` 性能优化 | 更新于今日但状态未变
  - 作者 [swuzjb](https://github.com/swuzjb) 3月提交的 O(n)→O(1) 核心性能优化，关联 Issue [#810](https://github.com/netease-youdao/LobsterAI/issues/810)
  - **社区信号**: 长会话性能是真实用户场景（企业级/深度研究），维护者未响应可能损害贡献者积极性

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🟡 **中** | OpenAI 认证 403 地域限制（[#1877](https://github.com/netease-youdao/LobsterAI/issues/1877)） | **已关闭** | 无明确 fix，可能为配置/文档层面处理 |
| 🔵 **低** | Electron 依赖版本滞后（[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)） | **待合并** | [dependabot[bot]](https://github.com/apps/dependabot) 已提交，40.2.1 → 41.5.0 |

> **风险评估**: Electron 大版本跨越（40→41）涉及 Chromium 内核升级，延迟合并可能累积安全漏洞。当前无安全相关 Issue 报告，但依赖管理节奏值得警惕。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性评估 |
|:---|:---|:---|
| PR [#811](https://github.com/netease-youdao/LobsterAI/pull/811) | 流式消息索引优化 | **高** — 技术方案完整、关联 Issue 明确、性能收益可量化，瓶颈在维护者 review 带宽而非技术争议 |
| Issue [#1877](https://github.com/netease-youdao/LobsterAI/issues/1877) 隐含需求 | 增强型代理/地域绕过配置 | **中** — 属于合规敏感功能，需产品决策；但竞品（如用户提及的 Codex）已解决，存在竞争压力 |
| PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 生态跟进 | **必做** — 基础设施维护，无功能争议 |

---

## 7. 用户反馈摘要

> 基于今日 Issue 评论提炼

| 维度 | 内容 |
|:---|:---|
| **痛点** | OpenAI 集成在特定网络环境下"开箱即用"失败，错误信息直接暴露底层 API 响应，用户体验粗糙 |
| **对比预期** | 用户以"本地 Codex 可用"为基准，期望 LobsterAI 达到同等网络兼容性——暗示竞品对比已成为选型因素 |
| **场景** | 中国大陆开发者使用国际 LLM 服务的企业/个人生产力场景 |
| **满意度缺口** | 错误处理缺乏引导（无重试机制、无代理配置提示、无降级方案），将基础设施问题转化为产品体验问题 |

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| 项目 | 积压时长 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [PR #811](https://github.com/netease-youdao/LobsterAI/pull/811) `[stale]` 性能优化 | **41天** | 贡献者流失、长会话性能问题持续影响用户 | 优先 review，或明确反馈所需修改 |
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 依赖更新 | **33天** | 安全漏洞暴露、构建工具链落后 | 自动化测试通过后合并，或配置 dependabot 自动合并策略 |
| [Issue #810](https://github.com/netease-youdao/LobsterAI/issues/810)（PR #811 关联）| 同 PR | 用户侧性能问题无官方回应 | 同步更新状态，避免用户重复报告 |

---

**分析师备注**: LobsterAI 作为网易有道出品的 AI 助手项目，今日数据呈现"低活跃、高积压"特征。建议维护团队关注两点：一是建立 `[stale]` PR 的定期清理机制，二是将中国区用户的国际服务接入体验纳入产品优先级评估。

---

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-05

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-05-05  
> **分析周期**: 过去24小时（2026-05-04 至 2026-05-05）

---

## 1. 今日速览

Moltis 今日活跃度**偏低**，仅产生 1 条 Issue 和 1 条 PR 更新，无版本发布。社区活动集中在**稳定性调试**与**并发执行缺陷**两个技术方向：一位贡献者提交了 CI 诊断增强的 PR 并已关闭，同时有用户报告了并行工具执行时的 Docker 沙箱命名冲突 Bug。整体项目处于**维护性迭代阶段**，核心功能开发节奏放缓，工程团队更聚焦于可观测性与并发稳定性治理。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 贡献者 | 核心变更 | 项目推进价值 |
|:---|:---|:---|:---|:---|
| [#965 debug(e2e): add RPC logging + gateway.log capture for CI diagnosis](https://github.com/moltis-org/moltis/pull/965) | **已关闭** | [penso](https://github.com/penso) | ① WebSocket RPC 全量日志记录（方法、耗时、状态）<br>② 连接关闭事件 warn 级别告警<br>③ Gateway stderr 捕获为 `gateway.log` 并作为 CI artifact 上传<br>④ 锁获取与 RPC 分发耗时 >50ms 触发告警 | **可观测性基础设施升级**：解决 CI 环境 30s 超时悬停但本地无法复现的调试困境。该 PR 为后续定位网络层/并发层 Bug（如 #964）提供了关键诊断数据，是工程债务偿还的重要一步。 |

**整体评估**：今日无功能合并，但诊断能力的增强将**间接加速**稳定性问题的修复周期。

---

## 4. 社区热点

| 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#964 [Bug]: Parallel tool execution results in docker name sandbox collisions](https://github.com/moltis-org/moltis/issues/964) | 新建 Issue，👍×0，评论 0 | **并发安全架构缺陷**：用户 `faevourite` 报告并行工具执行时 Docker 容器命名冲突，暗示 Moltis 的**沙箱隔离机制在并发场景下存在竞态条件**。该问题直接影响 AI Agent 多任务并行能力——作为"AI 智能体"框架，并行执行是核心卖点，此 Bug 具有**高用户影响潜力**。零评论零反应反映问题刚暴露，尚未形成社区讨论，但技术严重性不容忽视。 |
| [#965 debug(e2e): add RPC logging + gateway.log capture for CI diagnosis](https://github.com/moltis-org/moltis/pull/965) | 已关闭，评论 undefined（数据异常） | **开发者体验诉求**：贡献者 `penso` 主动填补 CI 调试工具链缺口，反映核心团队与贡献者均受困于"CI 失败不可复现"的经典分布式调试难题。PR 的快速关闭（同日创建关闭）表明该变更可能作为**热修复或内部工具**被直接采用，而非走完整 review 流程。 |

**诉求总结**：社区当前最迫切的隐性需求是**"并发稳定性"**与**"可观测性"**——两者形成因果链条，#965 的诊断能力正是为排查 #964 类并发 Bug 铺路。

---

## 5. Bug 与稳定性

| 严重等级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#964](https://github.com/moltis-org/moltis/issues/964) | **并行工具执行导致 Docker 沙箱命名冲突**：并发场景下容器名生成逻辑存在竞态，可能导致沙箱覆盖或启动失败 | **Open**，无分配，无标签 | **无** — 但 #965 的诊断日志将为定位根因提供数据支持 |
| 🟡 中 | — | （无其他 Bug 报告） | — | — |

**风险评估**：#964 属于**并发安全类架构缺陷**，非边界 case 错误。若沙箱命名采用简单自增或时间戳方案，在高并发下必现；若涉及容器复用/清理逻辑，可能伴随**数据隔离风险**（敏感信息跨任务泄漏）。建议维护者优先响应并分配 `concurrency` / `sandbox` 标签。

---

## 6. 功能请求与路线图信号

**今日无显式功能请求（Feature Request）提交。**

但从技术动态可提取**路线图信号**：

| 信号来源 | 推断需求 | 纳入下一版本可能性 |
|:---|:---|:---|
| #964 并发 Bug | **原生并发沙箱隔离机制**：需重构容器命名策略（如加入 UUID/任务 ID 前缀）或引入沙箱池化调度 | **高** — 属于核心能力修复，阻塞并行 Agent 工作流 |
| #965 CI 诊断 PR | **内置可观测性面板**：当前为日志级方案，长期应提供结构化追踪（OpenTelemetry 等） | **中** — 工程体验优化，非阻塞但提升开发者留存 |

---

## 7. 用户反馈摘要

> ⚠️ 今日 Issues/PR 评论数为 0 或 undefined，无直接用户对话可提炼。以下基于 Issue 元数据与上下文推断：

| 维度 | 观察 |
|:---|:---|
| **痛点** | 并行执行能力"宣传可用、实际易碎"——用户主动勾选"使用最新版本"仍遇 Bug，说明该场景测试覆盖不足 |
| **使用场景** | `faevourite` 的会话上下文勾选暗示该 Bug 发生在**实际对话工作流中**，非单元测试触发；用户可能在构建多工具协作的 Agent（如同时调用代码执行+搜索+文件操作） |
| **满意度信号** | 负面：Bug 报告的前置 checklist 勾选完整，用户遵循规范但问题未解，可能积累挫败感 |
| **缺失反馈** | 无性能数据、无替代方案尝试记录，用户可能首次遇阻即上报，表明问题**阻断性强** |

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| [#964 [Bug]: Parallel tool execution results in docker name sandbox collisions](https://github.com/moltis-org/moltis/issues/964) | 2026-05-04 | **Open，无分配，无评论，无标签** | ⚠️ **需维护者当日介入**：并发类 Bug 具有"静默恶化"特性——更多用户尝试并行工作流后将批量触发，且可能伴随数据隔离安全漏洞。建议：① 分配 `bug` + `concurrency` + `security?` 标签 ② 确认命名冲突是否可复现 ③ 评估是否需热修复或纳入 Sprint |

---

## 附录：数据健康度检查

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issue/PR 比 | 1:1 | 健康，问题与修复配对出现 |
| 平均响应时间 | N/A（#964 未满24h） | 待观察，建议 <48h 内首次响应 |
| 社区参与度 | 低（👍 总数 0，评论 0） | 需关注是否因项目阶段或沟通渠道导致反馈沉默 |
| PR 关闭效率 | 高（#965 当日关闭） | 内部工具/诊断类变更流转快，功能类 PR 未知 |

---

> **明日关注**：#964 是否获得维护者分配与首次响应；是否有基于 #965 新日志数据的根因分析更新。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-05

> **项目**: agentscope-ai/CoPaw (原 QwenPaw)  
> **报告日期**: 2026-05-05  
> **数据周期**: 过去 24 小时

---

## 1. 今日速览

CoPaw 今日呈现**高活跃度与高质量贡献并存**的态势：24 小时内 Issues 新增/活跃 13 条（0 关闭），PR 更新 22 条（15 已合并/关闭，7 待审阅），无新版本发布。社区贡献者活跃度显著提升——13 条 Issues 中 5 条来自首次贡献者，PR 侧亦有 4 个 first-time-contributor 提交。项目核心痛点集中在**稳定性加固**（会话中断、虚拟环境命中、MCP 超时）与**用户体验优化**（模型配置流程、输入卡顿、国际化）两大方向。值得关注的是，今日 15 个已关闭 PR 均为历史积压的健壮性修复，显示维护团队正在集中清理技术债务，为后续版本迭代铺路。

---

## 2. 版本发布

**无新版本发布**

最新 Release 仍停留在之前版本，今日无 tag 更新。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（15 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#1508](https://github.com/agentscope-ai/QwenPaw/pull/1508) | ekzhu | Docker 镜像补全"full"依赖，声明 7 个缺失的第三方包 | **基础设施完善**：解决 Docker 用户"装完却缺依赖"的痛点，提升部署可靠性 |
| [#763](https://github.com/agentscope-ai/QwenPaw/pull/763) | ekzhu | iMessage 通道错误透传至 UI；新增 `last_error` 基类属性 | **可观测性提升**：结束通道"静默崩溃"时代，为所有通道建立错误报告范式 |
| [#756](https://github.com/agentscope-ai/QwenPaw/pull/756) | ekzhu | OpenAI 连接测试改用 `max_completion_tokens` 兼容 GPT-5/o-series | **前瞻性兼容**：提前适配 OpenAI 新模型参数规范 |
| [#1977](https://github.com/agentscope-ai/QwenPaw/pull/1977) | futuremeng | MCP 拆卸噪音抑制、Cron/Channel 异常优雅处理 | **运行时健壮性**：消除已知竞态条件，提升长期运行稳定性 |
| [#1480](https://github.com/agentscope-ai/QwenPaw/pull/1480) | futuremeng | Ollama 默认 127.0.0.1 规避 IPv6 解析问题 | **本地化体验**：解决 macOS/Linux 用户常见的 Ollama 连接超时 |
| [#2520](https://github.com/agentscope-ai/QwenPaw/pull/2520) | futuremeng | 模型激活前预检可用性，透明显示提供商计算错误 | **防御性设计**：避免用户配置无效模型后才发现问题 |
| [#2052](https://github.com/agentscope-ai/QwenPaw/pull/2052) | futuremeng | MCP 连接失败降级为工具级失败，ReAct 可继续替代路径 | **容错架构**：关键修复——MCP 故障不再阻断整个对话流 |
| [#1978](https://github.com/agentscope-ai/QwenPaw/pull/1978) | futuremeng | MCP 导入验证/预览、运行时状态结构化暴露 | **MCP 生态成熟**：降低 MCP 工具接入门槛 |
| [#1848](https://github.com/agentscope-ai/QwenPaw/pull/1848) | futuremeng | MCP 模板填充、描述字段保留、`streamable-http` 别名支持 | **MCP 易用性**：减少配置错误 |
| [#2783](https://github.com/agentscope-ai/QwenPaw/pull/2783) | futuremeng | 上下文溢出自动压缩重试 | **长对话可靠性**：核心体验修复，避免对话中途崩溃 |
| [#1883](https://github.com/agentscope-ai/QwenPaw/pull/1883) | futuremeng | Agents Square 源浏览与导入流程 | **生态扩展**：为第三方 Agent 分发铺路 |
| [#2784](https://github.com/agentscope-ai/QwenPaw/pull/2784) | futuremeng | 流式输出思考前缀清理 | **输出质量**：消除模型推理痕迹泄露到用户可见文本 |
| [#2374](https://github.com/agentscope-ai/QwenPaw/pull/2374) | futuremeng | 运行中会话重连恢复、历史顺序保序 | **会话连续性**：解决路由切换后对话"断片"问题 |

**整体评估**：今日合并的 PR 构成一次**"稳定性大扫除"**——覆盖 Docker 部署、本地模型连接、MCP 生态、长对话容错、会话恢复等关键路径。技术债务清理进度显著，但 7 个待审阅 PR 中包含多个高价值新功能，需加速评审以释放社区贡献动能。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 深层信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) Windows 打包 conda-pack 与 pip 冲突 | 3 | 构建流程可观测性 + 依赖隔离 | **企业部署痛点**：Windows 打包是商业落地关键路径，工具链冲突暴露构建系统脆弱性 |
| 2 | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) 输入框严重卡顿 | 3 | 前端性能优化 | **日常体验阈值突破**：卡顿问题直接影响用户留存，需紧急定位是渲染层还是模型响应层问题 |
| 3 | [#4024](https://github.com/agentscope-ai/QwenPaw/issues/4024) 借鉴 Hermes 机制升级 | 3 | 架构演进方向探讨 | **社区对"下一代 Agent 架构"的期待**：Hermes 作为标杆引发对标讨论，维护团队需明确路线图 |

### 待审阅高价值 PR

| PR | 状态 | 亮点 |
|:---|:---|:---|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) LLM 异步生成会话标题 | Under Review, 评论最多 | 替代"前10字符截断"的粗糙方案，提升专业感 |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) 巴西葡萄牙语本地化 | first-time-contributor | 国际化社区扩张信号 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#4027](https://github.com/agentscope-ai/QwenPaw/issues/4027) | 会话中断偶发失效 + Python 解释器未命中虚拟环境 | 所有使用 skills 的用户，可能导致系统环境污染 | ✅ [#4028](https://github.com/agentscope-ai/QwenPaw/pull/4028) 已提交，待合并 |
| 🔴 **高** | [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) | MiMo/DeepSeek 流式模型触发 ReAct 循环重复调用工具 | 特定模型用户，响应膨胀、Token 浪费 | ❌ 无 Fix PR |
| 🟡 **中** | [#4033](https://github.com/agentscope-ai/QwenPaw/issues/4033) | MCP 工具超时硬编码 30s，实际应独立配置 | MCP 重度用户，长耗时工具无法完成 | ❌ 无 Fix PR |
| 🟡 **中** | [#4025](https://github.com/agentscope-ai/QwenPaw/issues/4025) | Debian 12 GLIBC 2.36 与 ARM64 llama.cpp 不兼容 | ARM64 Docker 用户，本地模型无法启动 | ❌ 无 Fix PR，建议升级基础镜像 |
| 🟡 **中** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | conda-pack ≤0.7.1 与 pip 升级动作冲突 | Windows 打包构建者 | ❌ 无 Fix PR，需构建系统重构 |
| 🟢 **低** | [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) | HTTP 网关默认无认证，非本地绑定风险 | 公网部署用户，安全合规 | ❌ 无 Fix PR，需设计决策 |

**关键风险**：[#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) 流式模型重复调用问题涉及 ReAct 核心循环，若确认是框架层 bug 而非模型特定行为，可能影响更广泛的新模型接入。[#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) 安全 Issue 虽标注"enhancement"，但工具调用网关的默认开放状态具有实际攻击面，建议提升优先级。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 与现有 PR 关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---:|
| [#4024](https://github.com/agentscope-ai/QwenPaw/issues/4024) 借鉴 Hermes 升级架构 | Agent 通信协议/调度机制革新 | 无直接关联 | ⭐⭐⭐ 中长期，需 RFC |
| [#4031](https://github.com/agentscope-ai/QwenPaw/issues/4031) 多 Agent 协同上下文与轮询阻塞 | Session 连续性、异步通知机制 | 无 | ⭐⭐⭐⭐ 高优先级，核心架构缺口 |
| [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) Vertex AI Gemini 提供商 | 云厂商生态扩展 | 无 | ⭐⭐⭐⭐ 已有 Gemini Dev API，Vertex 是自然延伸 |
| [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) 一次性定时任务 `--at` | Cron 系统补全 | 无 | ⭐⭐⭐⭐ 低实现成本，高用户价值 |
| [#4020](https://github.com/agentscope-ai/QwenPaw/issues/4020) MEMORY/AGENTS/SOUL 文件强制只读 | 工具层安全加固 | ✅ [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) 已提交 write_file 防护 | ⭐⭐⭐⭐⭐ 高，PR 已就绪 |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) 简化模型添加流程 | 配置 UX 重构 | 无 | ⭐⭐⭐⭐ 高频痛点，影响新用户转化 |

**路线图推断**：社区诉求呈现**"安全加固"（#4020/#4037）→ "核心体验"（#4023/#4036）→ "架构演进"（#4024/#4031）**的三层结构。维护团队近期聚焦底层稳定性，但用户已开始期待上层创新，建议在下个版本周期中明确多 Agent 协同（#4031）的架构设计。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | 输入框"非常卡顿" | 日常高频交互，性能阈值被突破 |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | 添加模型需 5+ 步骤、多次跳转 | 新用户 onboarding，配置流失率高 |
| [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | Windows 构建失败无有效日志 | 企业私有化部署，排障成本极高 |
| [#4031](https://github.com/agentscope-ai/QwenPaw/issues/4031) | 多 Agent 任务分配后"黑盒"运行 | 复杂工作流编排，用户失去掌控感 |

### 满意点

- MCP 生态支持获认可（多 Issue 围绕 MCP 优化而非质疑必要性）
- 国际化社区自发贡献（pt-BR 本地化 PR #4009）
- 首次贡献者活跃（今日 4 个 first-time-contributor PR）

### 不满意点

- **"配置复杂"** 反复出现：模型添加、MCP 导入、Provider 设置均有优化空间
- **"Windows 二等公民"**：打包问题、路径长度限制（[#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032) 开始关注）、任务栏图标（[#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729)）
- **流式模型适配滞后**：MiMo/DeepSeek 新问题（#4034） vs Qwen 系列稳定

---

## 8. 待处理积压

### 需维护者关注的高价值/长期事项

| Issue/PR | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) Windows 任务栏图标修复 | 2026-04-23 | [WIP] Under Review | 首次贡献者可能因长期无反馈流失；Windows 体验缺口持续 |
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) 异步会话标题生成 | 2026-04-25 | Under Review | 高用户可见度功能，评审拖延影响版本叙事 |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) 巴西葡萄牙语本地化 | 2026-05-02 | Under Review | 国际化贡献者激励，快速合并可释放社区信号 |
| [#4028](https://github.com/agentscope-ai/QwenPaw/pull/4028) 会话中断+虚拟环境修复 | 2026-05-04 | 待合并 | **关联高严重 bug #4027，建议 24h 内评审** |
| [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) write_file 覆盖防护 | 2026-05-04 | 待合并 | **关联安全需求 #4020，建议优先合并** |

---

> **日报生成说明**：本报告基于 GitHub 公开数据自动生成，PR 评论数因 API 限制显示为 undefined，实际活跃度以更新时间和作者互动为准。建议维护团队优先处理带 🔴 标记的稳定性问题及关联 Fix PR。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-05

## 1. 今日速览

ZeroClaw 今日保持**极高活跃度**：24小时内 48 个 Issues 处于新开/活跃状态，仅 2 个关闭；PR 管线中 29 个待合并、21 个已合并/关闭，**无新版本发布**。社区聚焦于 **v0.8.0 集成分支的准备工作**（PR #6266 明确标注"DO NOT MERGE TO MASTER YET"），同时 WhatsApp 渠道修复、成本追踪完善、HMAC 工具收据重新激活等工程议题并行推进。值得注意的是，**用户配置/引导体验问题持续高发**（#6123、#6180、#6364 等），表明新手入门路径仍是社区摩擦点。

---

## 2. 版本发布

**无新版本发布。** 当前版本迭代聚焦于 v0.8.0 集成分支（见 PR #6266），该大型 PR 包含 schema v3 迁移、渠道别名、模型-提供商别名等**破坏性变更**，预计将通过 `integration/v0.8.0` 分支统一合并后 squash 至 master。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#6116](https://github.com/zeroclaw-labs/zeroclaw/pull/6116) | aliasliao | **Jira Server 认证修复**：使 `jira.email` 可选，支持 Jira Server/Data Center 的 Bearer Token 认证（API v2），解决 Cloud/Server 双模式兼容 | ✅ 已合并 |
| [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) | ilteoood | **Cron + WhatsApp 集成**：将 WhatsApp 加入定时任务支持的投递渠道 | ✅ 已合并 |
| [#6263](https://github.com/zeroclaw-labs/zeroclaw/pull/6263) | ilteoood | **性能优化**：`HandContext.learned_facts` 从 `Vec<String>` 改为 `HashSet<String>`，消除 O(n²) 去重循环 | ✅ 已合并 |
| [#6046](https://github.com/zeroclaw-labs/zeroclaw/pull/6046) | jscholz | **内存管理 CLI**：暴露 `zeroclaw memory reindex` 命令，解决批量导入后 embedding 为 NULL 的回补需求 | ✅ 已合并 |
| [#6356](https://github.com/zeroclaw-labs/zeroclaw/pull/6356) | singlerider | **成本追踪降噪**：对缺失定价的 (provider, model) 组合改为 WARN once，避免日志洪水 | ✅ 已合并 |

**整体推进评估**：今日合并以**稳定性修复和性能优化**为主，Jira 企业级支持和 Cron-WhatsApp 闭环是用户可见的功能增量。v0.8.0 的"配置系统重构"这一核心里程碑仍在集成分支等待最终合并。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 🥇 | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) `default_model` 全新安装问题 | **15** | **新手引导阻塞**：LXC 容器 + 外部 Ollama 场景下，默认模型配置在首次安装后失效，用户无法启动 agent |
| 🥈 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API 格式不兼容 | **8** | **头部提供商兼容性**：DeepSeek 的 thinking mode 导致 API 调用失败，影响国产大模型接入 |
| 🥉 | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) Matrix 语音转录格式错误 | **6** | **渠道细节打磨**：Element 客户端的音频格式 `.` 不被识别，语音消息处理链路断裂 |

**诉求分析**：社区正从"功能有无"转向"体验好坏"——安装即用的平滑度、主流国产模型的开箱支持、渠道特性的完整覆盖成为核心期待。#6123 的 15 条评论中反复出现"fresh install"关键词，表明项目增长期的新用户转化效率直接受此瓶颈制约。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **S0** | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | **安全/数据丢失**：聊天上下文泄漏至定时任务调度，跨会话数据隔离失效 | ❌ 无 fix，状态 `blocked`，标记 `r:needs-repro` |
| **S1** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | 全新安装 `default_model` 配置失效，agent 无法启动 | ❌ 无 fix，高评论活跃中 |
| **S1** | [#6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095) | Bedrock `claude-opus-4-7` 因 temperature 字段非可选返回 400 | ❌ 无 fix，需验证 Anthropic 原生 API 是否同病（见 #6147） |
| **S1** | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) | llama-server 服务无法使用，agent 功能阻塞 | ❌ 无 fix，`r:needs-repro` |
| **S1** | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | 引导流程误将 OpenAI Codex 订阅引导至普通 OpenAI API key | ❌ 无 fix |
| **S2** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek-V4 API 格式不兼容（thinking mode） | ❌ 无 fix，高优先级 P1 |
| **S2** | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | Matrix 语音转录格式不支持 | ❌ 无 fix |
| **S2** | [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge 自动生成 TOML 包含非 schema 字段 | 🔄 关联 #6128 进行中 |
| **S2** | [#6136](https://github.com/zeroclaw-labs/zeroclaw/issues/6136) | 延迟加载的 MCP 工具未被 delegate 子会话继承 | ❌ 无 fix |

**稳定性信号**：S0 级安全问题 #5415 已滞留近一个月（创建于 2026-04-06），跨上下文隔离是 AI Agent 系统的核心安全假设，长期 `blocked` 状态构成项目信任风险。

---

## 6. 功能请求与路线图信号

### 用户提出的关键需求

| Issue | 主题 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | **"更轻的 ZeroClaw"**：用 skills 替代专用工具代码（gws-cli、jira、github 等） | ⭐⭐⭐⭐⭐ 高 | 与 #6253 (v0.7.6 skills UX 主题) 直接对齐，架构方向明确 |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) | **混合插件**：SKILL.md + WASM 二进制组合 | ⭐⭐⭐⭐☆ 中高 | 标记为 markdown-only skills 的"natural follow-on"，有技术铺垫 |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | 渠道回复意图预检可配置（轻量模型 + 超时 + 计时日志） | ⭐⭐⭐⭐☆ 中高 | 性能优化类，已有 `status:in-progress` |
| [#6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150) | Telegram/Discord 原生 `/clear` 内存清除命令 | ⭐⭐⭐☆☆ 中 | `good first issue` 标签，社区友好 |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord Bot 限制特定频道（非仅特定服务器） | ⭐⭐⭐☆☆ 中 | 今日新开，配置扩展，实现成本低 |
| [#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) | ZeroClaw MCP → Xcode 集成 | ⭐⭐☆☆☆ 低 | 生态扩展，优先级 P3 |

**路线图信号**：项目正从"内置一切"向"skill 化、插件化"架构转型（#6165、#6140、#6253 形成清晰脉络）。v0.7.6 聚焦 skills 基础设施，v0.8.0 重构配置系统，**MCP 作为工具集成标准**的地位在 #6136、#6065 中反复出现。

---

## 7. 用户反馈摘要

### 真实痛点

> **"After I set up my onboarding I get this error... root@zeroclaw:~# zeroclaw agent"** — [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) rgnyldz

**安装后首跑失败**是最高频痛点，容器化部署（LXC）+ 外部模型服务（Ollama 异地）的组合场景缺乏验证。

> **"When I run `zeroclaw onboard` and enter a base URL for the OpenAI-compatible endpoint it fails"** — [#6364](https://github.com/zeroclaw-labs/zeroclaw/issues/6364) tigran123

引导流程对**兼容端点（OpenAI-compatible）的支持存在回归**，今日关闭为 duplicate，表明问题分散在多个 issue 中，根因追踪困难。

> **"Context from 1 chat in a Discord channel is somehow known to the scheduled execution"** — [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) databillm

**隐私焦虑**：用户明确预期"chat memory 不应成为 schedule task 的一部分"，此信任边界破裂直接影响企业场景采用。

> **"Many of the fixes in this release are essential for the project UX and you risk losing community support"** — [#6279](https://github.com/zeroclaw-labs/zeroclaw/issues/6279) eabase

**社区耐心预警**：长期贡献者直接指出"低垂但重要"的修复速度不足，存在社区流失风险。

### 满意点

- Jira Server 支持终获修复（#6116），企业用户认证阻塞解除
- 成本追踪逐步完善（#6159、#6356、#6357），运营可见性提升

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 创建时间 | 滞留原因 | 风险 |
|:---|:---|:---|:---|
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) 上下文泄漏 | 2026-04-06（30天） | `blocked` + `r:needs-repro`，缺乏复现环境 | **S0 安全漏洞**，长期 open 损害项目可信度 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits 批量回滚审计 | 2026-04-24（11天） | 历史债务，需系统性的 commit 恢复评估 | 代码资产流失，贡献者劳动成果未回收 |
| [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) Gateway 静默回退加固 | 2026-04-26（9天） | 依赖 #6099 合并条件，gateway 侧未闭环 | 安全加固不完整，配置回退仍可能静默失败 |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) v0.8.0 集成分支 | 2026-05-02（3天） | 明确标注"DO NOT MERGE"，协调中 | 大型 PR 长期挂起增加合并冲突风险 |

---

*日报基于 ZeroClaw GitHub 公开数据生成。所有链接指向 github.com/zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*