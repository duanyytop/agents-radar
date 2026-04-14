# OpenClaw 生态日报 2026-04-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-14 00:16 UTC

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

# OpenClaw 项目动态日报 | 2026-04-14

---

## 1. 今日速览

OpenClaw 社区今日保持极高活跃度：24 小时内 **500 条 Issues** 与 **500 条 PRs** 更新，其中 Issues 新开/活跃 410 条、关闭 90 条；PRs 待合并 342 条、已合并/关闭 158 条。项目刚发布 **v2026.4.12** 质量更新，聚焦插件加载、内存与 dreaming 可靠性、本地模型选项及飞书配置优化。社区讨论热点集中在 **OAuth token 竞态条件**、**Telegram 语音转录失效**、**浏览器 CDP 连接问题** 以及多个 **模型解析回归故障**。整体项目健康度良好，但待合并 PR 积压较高（342 条），需关注合流效率。

---

## 2. 版本发布

### v2026.4.12 — openclaw 2026.4.12
- **发布日期**：2026-04-12（今日日报覆盖期内）
- **性质**：Broad quality release（质量改进版，无重大破坏性变更）
- **核心更新**：
  - **插件加载可靠性**：改进插件加载机制，减少启动失败
  - **内存与 dreaming 稳定性**：修复 memory embedding 及 dreaming 流程中的崩溃与挂起
  - **本地模型选项扩展**：新增更多本地模型配置路径
  - **飞书（Feishu）配置体验**：大幅简化 Feishu 机器人接入流程
- **QA/实验室功能**：新增 Convex 支撑的 Telegram 凭证池化租赁机制，以及 `openclaw qa credentials` 管理命令
- **迁移注意**：从 2026.4.10/2026.4.11 升级的用户建议重点验证 **browser CDP 启动** 与 **memory embedding provider** 配置，近期有多个相关回归报告

🔗 [Release v2026.4.12](https://github.com/openclaw/openclaw/releases/tag/v2026.4.12)

---

## 3. 项目进展

### 今日已合并/关闭的重要 PRs

| PR | 作者 | 说明 | 影响 |
|:---|:---|:---|:---|
| **#66223** | amittell | `feat(auth): add models auth clean command` — 新增 `openclaw models auth clean` 命令，可清理失效的 auth profile，支持 `--dry-run` 与文件锁防竞态 | 降低 OAuth 配置腐烂，提升多环境可维护性 |
| **#56964** | suboss87 | `fix(security): warn about insecure session.dmScope` — 多用户场景下 `session.dmScope="main"` 时发出安全警告 | 防止 DM 消息跨用户泄漏 |
| **#66167** | jalehman | `fix: recover reasoning-only OpenAI turns` — 修复仅含 reasoning 无可见回复的 OpenAI turn 被误判为空 turn 的问题 | 解决 GPT 风格运行"假死" |
| **#66220** | omarshahine | `docs(changelog): backfill #65447 and #65461` | 发布流程文档补全 |
| **#63511** | jetd1 | `fix(tts): allow OpenClaw temp directory paths in reply media normalizer` — TTS 音频附件因 `/tmp/openclaw/` 路径被过滤而丢失的问题 | 恢复 Telegram/WhatsApp 等渠道的 TTS 语音输出 |
| **#66216** | jinalex | `test(voice-call): add replay quality harness baseline` | 语音通话质量回归测试基线 |
| **#65461** | omarshahine | `fix: sendPolicy deny should suppress delivery, not inbound processing` — `sendPolicy: deny` 从阻断入站处理改为仅抑制投递 | 修复 #53328，代理可正常读取被 deny 的消息 |

**整体推进评估**：今日合并 PR 以 **稳定性修复、安全加固、发布流程完善** 为主，功能侧有 Bluesky skill (#65972) 和 You.com 插件 (#64989) 待审，预计将在未来 1-2 个版本周期落地。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| **#26322** — OAuth token refresh race condition causes spurious failovers (`refresh_token_reused`) | 21 | 多 agent 共享同一 OAuth profile 时并发刷新 token 导致竞态，诉求是**引入分布式锁或 token 刷新队列** |
| **#64799** — Volcengine Coding Plan model resolves to "Unknown model: volcengine-plan/ark-code-latest" on macOS 26.4.1 | 19 | 火山引擎模型别名解析回归，用户急需**模型映射表热修复** |
| **#17101** — Telegram Voice Messages Not Transcribed | 14 | 语音消息未被自动转录为文本，影响 Telegram 语音交互体验 |
| **#31486** — image tool does not support custom providers configured in openclaw.json | 13 | 自定义 vision provider 无法被 `image` 工具识别，反映**工具层与配置层模型解析逻辑不一致** |
| **#62496** — Telegram DM voice-note transcription silently fails in 4.5 | 13 | 与 #17101 同源，进一步定位到 `normalizeAttachments` 过滤掉音频附件的代码路径 |
| **#32473** — control ui requires device identity (use HTTPS or localhost secure context) | 12 | VPS/Docker 部署 Control UI 时 HTTPS/安全上下文要求造成使用门槛，诉求**放宽或提供绕过方案** |
| **#34644** — make embedded agent LLM-request timeout configurable (currently hardcoded 15s) | 10 | 上游高延迟时 15s 硬编码超时导致整条 fallback 链失败，诉求**配置化超时** |

**背后诉求分析**：社区当前最焦虑的三类问题是 **(1) 模型解析/别名映射的频繁回归**、**(2) Telegram 语音/媒体处理链路的质量**、**(3) OAuth 与认证在多 agent 场景下的可靠性**。这些问题直接影响生产环境的稳定性。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | **#26322** | OAuth token refresh 竞态条件导致误故障转移 | 开放，无 fix PR |
| 🔴 **高** | **#65701** | Telegram provider **重复发送消息**（回归） | 开放，今日新报 |
| 🔴 **高** | **#65706** | `openclaw nodes status` 与 `openclaw nodes list` 不同步（2026.4.9 回归，标记为 **Beta blocker**） | 开放，无 fix PR |
| 🔴 **高** | **#62762** | Gateway 1006 closed-before-connect 在 2026.4.12 仍可复现 | 开放，无 fix PR |
| 🟡 **中** | **#64799** | Volcengine Coding Plan "Unknown model" | 开放，无 fix PR |
| 🟡 **中** | **#62496** / **#17101** | Telegram 语音转录静默失败 | 开放，无 fix PR |
| 🟡 **中** | **#65990** / **#64978** / **#65093** / **#65528** | **Chrome CDP WebSocket 连接问题集群**（managed browser 启动失败、attachOnly 被忽略、进程静默退出） | 开放，#66224 发布同步可能含部分修复 |
| 🟡 **中** | **#64238** | Qwen `qwen/qwen3.6-plus` 在 2026.4.9 报 Unknown model（2026.4.5 正常） | 开放，无 fix PR |
| 🟡 **中** | **#48479** / **#49885** | Google Vertex auth 回退到 API key 而非 ADC/Bearer；ADC 有效时仍报无凭证 | 开放，无 fix PR |
| 🟡 **中** | **#57099** | 显式 `api ollama` provider 配置在 2026.3.28+ 报 `No API provider registered` | 开放，无 fix PR |
| 🟡 **中** | **#58115** | `voice_call` 工具在非 gateway 进程调用时 `EADDRINUSE` | 开放，无 fix PR |
| 🟢 **低** | **#58986** | Discord slash commands 返回 "✅ Done." 而非实际输出 | 开放，PR #66226 已提出修复方案 |

**修复进展**：PR **#66226**（Telegram status 命令路由修复）和 **#66225**（`<final/>` 自闭合标签解析）今日新开，分别针对交互阻塞和标签解析边缘情况。

---

## 6. 功能请求与路线图信号

| Issue/PR | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| **#55342** — Behavioral reputation for OpenClaw skills | 在身份验证之外增加技能行为信誉层，应对恶意技能 | 长期架构议题，短期难落地 |
| **#65972** — Add Bluesky skill (CLI + MCP server) | 新增 Bluesky 社交媒体技能 | **高**，PR 已开且功能完整 |
| **#64989** — You.com plugin for web search, research, content extraction | 集成 You.com 搜索与研究 API | **高**，PR 已开，且 You.com 提供免费 tier |
| **#66168** — MCP Apps protocol extension (tools, resources, UI meta) | 为 Gateway 客户端提供 MCP 工具/资源的 WebSocket RPC 表面 | **高**，与 Bluesky/You.com 等插件战略一致 |
| **#30215** — Support Amazon Bedrock API Key (Bearer Token) Authentication | Bedrock 除 AWS SDK 外支持 API Key | **中**，PR #64512 已增加 `service_tier` 参数，但 API Key 认证尚无 PR |
| **#34644** — Configurable embedded agent LLM timeout | 将 15s 硬编码超时改为可配置 | **中**，社区呼声高，改动面小 |
| **#22358** — Post-subagent completion extension hook | 子 agent 完成后扩展钩子 | **低**，已 stale，需求较垂直 |

---

## 7. 用户反馈摘要

### 真实痛点

- **"Unknown model" 疲劳**：多个用户报告不同 provider（Volcengine、Qwen、Ollama、image tool）在版本升级后突然报 Unknown model，"配置未变，升级即坏" 是高频抱怨
- **Telegram 体验断裂**：语音消息不转录、重复发送、status 命令被阻塞，使 Telegram 成为当前最"脆弱"的渠道
- **Browser/CDP 心累**：macOS 上 managed Chrome 启动问题反复出现，用户不得不退回 manual CDP 方案
- **认证配置腐烂**：OAuth refresh token 丢弃、多 agent 共享 profile 竞态、auth profile failover 级联失败，反映认证生命周期管理尚未成熟

### 满意之处

- **v2026.4.12 的 Feishu 优化** 获得正面反馈，配置流程明显简化
- **本地模型选项扩展** 受到私有化部署用户欢迎

### 不满意之处

- 部分用户认为 **"质量更新"版本仍携带回归**（如 2026.4.9 的 nodes status、2026.4.12 的 1006 连接问题），对版本稳定性信心有所动摇
- **342 条待合并 PR** 让社区贡献者感到合流周期过长

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR（stale 标记或高价值）

| 条目 | 创建时间 | 说明 | 提醒 |
|:---|:---|:---|:---|
| **#33557** — Telegram long-polling health check watchdog | 2026-03-03 | 为 Telegram 长轮询添加健康检查看门狗，解决连接静默卡死 | 高价值稳定性改进，已开放 42 天 |
| **#33556** — Sandbox 60s timeout to prevent hung Docker | 2026-03-03 | 防止 Docker 守护进程挂起阻塞整个消息管道 | 基础设施韧性关键修复 |
| **#33551** — Telegram `groupPolicy: "members"` | 2026-03-03 | 自动验证群组成员身份，减少私域群配置负担 | 渠道安全体验双提升 |
| **#10356** — Typecast TTS provider | 2026-02-06 | 亚洲语言情感语音合成，差异化功能 | 已开放 67 天，建议评估合并窗口 |
| **#32495** — Support switching agents in Control UI | 2026-03-03 | 多 agent 用户在 Web UI 切换需求，今日关闭（stale） | 如产品路线支持多 agent，建议 reopen 评估 |

---

**日报编制说明**：本报告基于 2026-04-14 00:00–23:59（UTC）GitHub 公开数据生成。所有链接指向 `https://github.com/openclaw/openclaw`。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期：2026-04-14**

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现"一超多强、垂直分化"格局：**OpenClaw 以绝对体量领跑**（单日 500 Issues/500 PRs），形成事实上的技术参照基准；**Hermes Agent、CoPaw(QwenPaw)、ZeroClaw、IronClaw 构成第二梯队**，在特定场景（移动端、中文市场、安全优先、企业级）展开差异化竞争；**Moltis、NanoBot、PicoClaw、NanoClaw、LobsterAI 等处于高速成长期**，通过渠道扩张或架构重构抢占细分市场。整体生态共同面临**多平台适配碎片化、模型解析回归频发、长运行可靠性不足**三大挑战，同时**Web UI、本地模型支持、MCP/插件扩展**正成为下一代产品的标配能力。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500（新开/活跃 410，关闭 90） | 500（待合并 342，已合并/关闭 158） | v2026.4.12（质量更新） | 🔶 活跃但 PR 积压严重（342 待合并），合流效率是瓶颈 |
| **Hermes Agent** | 50 | 50（待合并约 25） | v0.9.0 "The everywhere release" | 🔶 功能跃迁强劲，新平台 bug 密集，Issue 积压超 1000 需治理 |
| **CoPaw (QwenPaw)** | 40（28 新开/活跃，12 关闭） | 50（30 待合并，20 已合并/关闭） | v1.1.1-beta.1 | 🔶 品牌迁移期阵痛，但 Channel 修复和模型发现能力推进扎实 |
| **ZeroClaw** | 21（18 新开/活跃，3 关闭） | 50（28 待合并，22 已合并/关闭） | 无 | 🔶 架构突破（编排系统、WASM 插件）与安全漏洞并存，S0/S1 修复滞后 |
| **IronClaw** | 45（38 新开/活跃，7 关闭） | 50（41 待合并，9 已合并/关闭） | 无 | 🔶 v0.25.0 staging 冲刺期，Web UI 资源泄漏等 P0 响应极快 |
| **Moltis** | 7（全部关闭） | 18（全部闭环） | 20260413.01 + 20260413.03 | 🟢 **当日零积压**，发布日响应速度优秀，但回归测试需加强 |
| **NanoBot** | 44（18 新开/活跃，26 关闭） | 58（28 待合并，30 已合并/关闭） | 无 | 🟢 修复密集，Heartbeat Token 膨胀等架构债务尚存 |
| **PicoClaw** | 5 | 41（29 待审，12 已合并/关闭） | v0.2.6-nightly | 🟢 工程化提速，Channel 多实例+AgentLoop 并行标志架构升级 |
| **NanoClaw** | 5（4 开 1 关） | 13（8 待合并，5 已合并/关闭） | 无 | 🟢 企业工作流（邮件、语音、支付）扩展积极，容器稳定性待巩固 |
| **LobsterAI** | 1 | 22（7 待合并，15 已合并/关闭） | 2026.4.13 | 🟢 发布日集中交付，OpenClaw 同步问题修复密集，用户侧声音弱 |
| **NullClaw** | 3（全部新开） | 2（全部待合并） | 无 | 🔴 中等活跃度，3 个核心功能 bug 全部 open，修复响应慢 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 24 小时无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
- **规模统治力**：单日 1000 条 Issues+PRs 更新，社区体量是第二梯队的 **10-20 倍**，插件生态、渠道覆盖、模型支持最为完备
- **基础设施深度**：拥有独立的 `gateway` 架构、MCP Bridge、CDP 浏览器托管、多租户 OAuth 体系，是少数具备**企业级部署底座**的开源项目
- **版本发布节奏稳定**：月度质量更新（v2026.4.12）+ 实验室功能并行，平衡稳定性与创新

### 技术路线差异
| 维度 | OpenClaw | 生态对比 |
|:---|:---|:---|
| **架构哲学** | 中心化 Gateway + 插件化 Skills | Hermes/ZeroClaw 偏向去中心化多代理编排；NanoClaw 强调容器隔离 |
| **扩展机制** | 原生 TypeScript/JavaScript 插件 + MCP | ZeroClaw 押注 WASM 沙箱；Moltis 采用 Rust-native + WASM 混合 |
| **渠道策略** | 全渠道覆盖（Telegram、Discord、Slack、飞书、WhatsApp 等） | CoPaw 深耕中文 IM（钉钉、QQ、微信）；NanoClaw 聚焦 B2B（邮件、语音） |
| **本地/隐私优先** | 支持本地模型选项扩展，但非核心叙事 | Moltis、NanoBot、PicoClaw 将本地 Whisper/TTS 作为差异化卖点 |

### 社区规模对比
OpenClaw 的社区吞吐量相当于 **Hermes + CoPaw + ZeroClaw + IronClaw + Moltis + NanoBot 的总和**。但这种体量也带来了 **342 条待合并 PR 的积压问题**——合流周期过长已开始挫伤贡献者积极性，这是中小项目尚未遇到的"幸福的烦恼"。

---

## 4. 共同关注的技术方向

### 方向一：Web UI / 浏览器交互入口
- **涉及项目**：Hermes (#501)、NanoBot (#3030/#2972)、IronClaw (#1852 用户体验相关)、Moltis（会话归档 #701）、CoPaw（控制台优化）
- **具体诉求**：从纯 CLI/IM 渠道向"本地浏览器界面"扩展，要求 Streaming、Artifacts、移动端适配

### 方向二：模型解析与 Provider 兼容性
- **涉及项目**：OpenClaw（Volcengine #64799、Qwen #64238、Ollama #57099）、NanoBot（Gemini #2185、自定义 provider 路由）、NullClaw（OpenRouter #809）、CoPaw（vLLM #2897）
- **具体诉求**："配置未变，升级即坏"的 Unknown model 疲劳；OpenAI 兼容端点的稳定性；模型自动发现/热修复映射

### 方向三：语音与本地模型支持
- **涉及项目**：OpenClaw（本地模型选项扩展）、Moltis（本地 Whisper/OpenAI TTS #700、Voicebox #199）、NanoBot（Whisper 语言参数 #2756/#3116）、PicoClaw（OGG Opus 解码 #2504）
- **具体诉求**：隐私优先部署、本地 STT/TTS 端到端、多语言语音转写

### 方向四：多代理编排与子代理系统
- **涉及项目**：ZeroClaw（智能团队/子代理编排 #2420）、Hermes（委托任务分层 #9255）、NanoClaw（容器化多 bot #1765）、IronClaw（Agent 高级能力 #84）
- **具体诉求**：从单 agent 对话向多 agent 协作演进，需要运行时路由、任务分层、权限隔离

### 方向五：安全策略与沙箱机制
- **涉及项目**：ZeroClaw（S0 安全漏洞 #5698、WASM 插件 #5231）、PicoClaw（Agent Shield #2313、exec guard 误报 #1042）、NanoClaw（PII 脱敏 #1563）、OpenClaw（session.dmScope 安全警告 #56964）
- **具体诉求**：工具执行的安全 guard 精确化、插件沙箱化、多租户数据隔离

### 方向六：认证与 OAuth 生命周期管理
- **涉及项目**：OpenClaw（OAuth token refresh 竞态 #26322）、IronClaw（Google OAuth #2229/#2391）、Hermes（Moonshot 国内线路 #8856）、ZeroClaw（原生 OAuth 扩展 #5601）
- **具体诉求**：多 agent 共享 profile 的并发安全、token 刷新队列、第三方 OAuth 的拼写/配置正确性

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全功能、全渠道、企业级部署 | 进阶开发者、企业 IT、插件开发者 | Node.js/TS 生态，中心化 Gateway，MCP 原生 |
| **Hermes Agent** | 移动端 + 跨平台消息（iMessage、WeChat、Termux） | 个人极客、移动优先用户 | Python 生态，Fast 模式，TUI 为主 |
| **CoPaw (QwenPaw)** | 中文 IM 深度集成、低门槛 Agent 构建 | 中国开发者、中小企业 | Python，AgentScope 底座，品牌背靠阿里 |
| **ZeroClaw** | 安全优先、Rust 性能、WASM 扩展 | 安全敏感型企业、Rust 开发者 | Rust 全栈，ClawGuard 安全扫描，WASM 插件 |
| **IronClaw** | 企业 SaaS、多租户、技能市场 | 企业团队、技能分发平台 | Rust + TS，Near AI 生态，RBAC/SSO 优先 |
| **Moltis** | 本地优先、语音端到端、Rust 工程化 | 隐私优先用户、自托管爱好者 | Rust 全栈，模块原子化重构，cargo feature 控制 |
| **NanoBot** | 轻量、可嵌入、自定义扩展 | 个人开发者、开源爱好者 | Python，Heartbeat/Dream 记忆机制 |
| **NanoClaw** | 容器隔离、B2B 通信（邮件/语音/支付） | 企业工作流集成商 | Node.js + Docker，x402 微支付实验 |
| **PicoClaw** | 多实例/多租户、Channel 并发 | 中小型 SaaS、多机器人运营者 | Go，Channel 多实例重构，AgentLoop 并行 |
| **LobsterAI** | 桌面端封装（Electron）、OpenClaw 同步 | 中文桌面用户、企业办公 | Electron + OpenClaw 内核，有道背书 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（功能扩张为主）
| 项目 | 特征 |
|:---|:---|
| **Hermes Agent** | v0.9.0 "everywhere" 大版本后，新平台 bug 井喷，处于扩张后的消化期 |
| **CoPaw** | 品牌迁移+Provider 自动发现+Channel 修复三线并行，beta 版本密集 |
| **IronClaw** | v0.25.0 staging 冲刺，v2 引擎+企业功能（RBAC/SSO）同步推进 |
| **NanoClaw** | 企业通信渠道（邮件、Matrix、Twilio）和记忆系统快速补全 |

### 🛠 质量巩固阶段（修复与架构还债为主）
| 项目 | 特征 |
|:---|:---|
| **OpenClaw** | 质量更新月，聚焦插件加载、内存、 dreaming 可靠性，但 PR 积压需治理 |
| **Moltis** | 当日零积压的高效修复模式，但连续版本回归提示测试覆盖需加强 |
| **NanoBot** | Heartbeat Token 膨胀、Dream 数据安全等长期架构问题进入还债期 |
| **PicoClaw** | Channel 多实例+AgentLoop 并行标志从功能补全转向工程化深化 |

### ⚠️ 风险关注阶段（活跃度不足或核心 bug 未修）
| 项目 | 特征 |
|:---|:---|
| **ZeroClaw** | 功能突破（WASM、编排）与 S0/S1 安全漏洞并存，修复速度落后报告速度 |
| **NullClaw** | 搜索、子代理、OpenRouter 三个核心功能同日报 bug 且全部 open，有流失风险 |
| **TinyClaw / ZeptoClaw** | 24 小时零活动，可能已进入维护停滞或项目早期休眠 |

### 🟢 稳健发布阶段
| 项目 | 特征 |
|:---|:---|
| **LobsterAI** | 发布日集中交付模式，OpenClaw 同步修复密集，但用户侧社区运营较弱 |

---

## 7. 值得关注的趋势信号

### 信号 1："本地优先"从边缘需求走向主流配置
Moltis 的本地 Whisper 向导、OpenClaw 的本地模型选项扩展、NanoBot 的 Ollama 适配焦虑，共同说明**用户对数据不出境、模型可离线的诉求已从极客圈层扩散到常规配置**。AI 智能体开发者应将本地模型路径视为与云端 API 同等重要的 first-class citizen。

### 信号 2：MCP 正在成为插件生态的事实标准
OpenClaw 的 MCP Bridge、IronClaw 的 MCP/WASM 工具名规范化、Moltis 的 MCP Schema 清理、CoPaw 的 ACP 外部 Agent 委托，显示**Model Context Protocol 正快速取代各项目私有的插件接口**。尚未接入 MCP 的项目将面临生态隔离风险。

### 信号 3："语音+IM"的渠道体验差距决定用户留存
Telegram 语音转录失效（OpenClaw #17101/#62496、NanoBot #100）、QQ/微信阻塞（CoPaw #3136）、Matrix E2EE 崩溃（ZeroClaw #4657）、飞书按钮超时（Hermes #8764）——**渠道适配的粗糙感已成为用户流失的首要原因**。智能体产品的竞争焦点正从"能对话"转向"全渠道体验一致"。

### 信号 4：长运行可靠性是生产部署的生死线
NanoBot Heartbeat 56 万 Token 单次消耗、CoPaw 批量任务自动中断、OpenClaw OAuth token 竞态、NanoClaw 容器静默失败，揭示**Agent 从"演示可用"到"7×24 可靠运行"存在巨大鸿沟**。状态管理、错误恢复、成本熔断、会话持久化将是下一代架构的核心战场。

### 信号 5：品牌/合规治理意外成为技术项目风险点
CoPaw → QwenPaw 的迁移混乱、PicoClaw 的 CLA 协议主体错误（#2506）、Hermes 的 `claw cleanup` 数据丢失风险，说明**开源项目的法律合规与用户体验治理已成为与技术同等重要的信任基础设施**。企业用户在评估采用时，对此类信号的敏感度正在上升。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-14

---

## 1. 今日速览

NanoBot 社区今日保持**高活跃度**：24小时内 Issues 更新 44 条（18 新开/活跃，26 关闭），PR 更新 58 条（28 待合并，30 已合并/关闭），**无新版本发布**。项目维护节奏稳健，Bug 修复与功能迭代并行推进，但仍有部分核心问题（如心跳机制 Token 膨胀、模型路由缺失）待深度解决。Web UI 与 Dream 钩子等前沿功能正在社区 PR 中积极探索。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日已合并/关闭的 30 个 PR/Issues 中，以下进展值得关注：

| 进展 | 说明 | 链接 |
|:---|:---|:---|
| **Agent 注入队列安全修复** | PR #3110 / #3111 修复了 Agent 在 LLM 错误、工具错误或空响应退出时未清空注入队列的问题，避免残留消息被重复发布为独立消息，消除重复/混乱回复。 | [PR #3110](https://github.com/HKUDS/nanobot/pull/3110) · [PR #3111](https://github.com/HKUDS/nanobot/pull/3111) |
| **OpenAI 兼容层协议对齐** | Issue #2757 关闭，`openai` 注册表项现已正确设置 `supports_max_completion_tokens`，避免向新模型发送废弃的 `max_tokens`。 | [Issue #2757](https://github.com/HKUDS/nanobot/issues/2757) |
| **Telegram 稳定性多项修复** | 合并了长消息拆分（#2650）、话题/回复上下文保留（#2546）、"Message text is empty" 崩溃修复（#100），显著提升 Telegram 通道可靠性。 | [PR #2650](https://github.com/HKUDS/nanobot/pull/2650) · [PR #2546](https://github.com/HKUDS/nanobot/pull/2546) · [Issue #100](https://github.com/HKUDS/nanobot/issues/100) |
| **Windows exec 工具回归修复** | Issue #2868 关闭，撤销了强制使用 `bash` 的提交，恢复 Windows 原生兼容性。 | [Issue #2868](https://github.com/HKUDS/nanobot/issues/2868) |
| **内存/Dream 安全修复** | Issue #2957 关闭，修复了 Dream 过程可能完全覆盖 `MEMORY.md` 为空白文件的严重 Bug。 | [Issue #2957](https://github.com/HKUDS/nanobot/issues/2957) |
| **语音转写语言参数扩展** | PR #2756 合并，为 Groq Whisper 增加 `transcriptionLanguage` 配置；OpenAI Whisper 同类功能待审（PR #3116）。 | [PR #2756](https://github.com/HKUDS/nanobot/pull/2756) |

**整体判断**：项目在通道稳定性、Agent 核心循环健壮性、多平台兼容性方面取得实质性进展。

---

## 4. 社区热点

| 排名 | 议题 | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 #1 | **Issue #2375** — Heartbeat 会话历史导致单次 560k Token 巨额消耗 | 11 | 核心架构问题。心跳任务每 30 分钟执行一次，但 `heartbeat.jsonl` 无限制累积历史（用户案例达 600+ 行），导致每次心跳一次性烧掉 **56 万 Token**。诉求明确：需要心跳历史的截断、摘要或分片机制。已关闭，但需观察是否有后续根治性 PR。 |
| 🔥 #2 | **Issue #2185** — 0.1.4 → 0.1.4post5 升级后 gemini-3-flash-preview 不可用 | 8 | 回归问题，涉及 provider 注册/路由变更对自定义 OpenAI 兼容端点的兼容性破坏。用户通过 Ollama 桥接 Gemini，升级后模型解析失败。反映出自定义 provider 的稳定性仍是痛点。 |
| 🔥 #3 | **Issue #2868** — `exec` 工具在 Windows 上强制使用 bash | 5 | 典型的跨平台回归，一个 commit 打破了 Windows 用户体验，WSL 用户甚至遭遇 RPC 错误。已快速关闭，说明社区对平台兼容性敏感。 |
| 🔥 #4 | **PR #3030 / PR #2972** — Web UI 双方案竞争 | 活跃 | 两个独立的 Web UI PR 同时推进：#3030 强调"无 NPM、安全默认、为移动 App 奠基"；#2972 提供完整的 `nanobot web` 命令与现代化管理界面。社区对浏览器/移动端交互入口需求强烈。 |

**链接汇总**：
- [Issue #2375](https://github.com/HKUDS/nanobot/issues/2375)
- [Issue #2185](https://github.com/HKUDS/nanobot/issues/2185)
- [Issue #2868](https://github.com/HKUDS/nanobot/issues/2868)
- [PR #3030](https://github.com/HKUDS/nanobot/pull/3030)
- [PR #2972](https://github.com/HKUDS/nanobot/pull/2972)

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | **Issue #2957** — Dream 覆盖 `MEMORY.md` 为空白文件，无 Git 备份可恢复 | 已关闭 | 待确认具体修复 PR |
| 🔴 **Critical** | **Issue #2375** — Heartbeat 历史无限累积导致单次 560k Token，成本爆炸 | 已关闭 | 无明确根治 PR |
| 🟡 **High** | **Issue #2826** — `restrictToWorkspace=true` 仍允许删除任意路径文件 | 已关闭 | 安全边界需持续审计 |
| 🟡 **High** | **Issue #2713** — v0.1.4.post6 响应速度从 1s 退化到 3min | 已关闭 | 疑似与某次提交引入的额外开销有关 |
| 🟡 **High** | **Issue #3028** — 心跳触发时重复创建定时任务，导致消息重复发送 | **Open** | 无 |
| 🟡 **High** | **Issue #2185** — 小版本升级破坏 gemini-3-flash-preview | **Open** | 无 |
| 🟢 **Medium** | **Issue #2868** — Windows `exec` 强制 bash | 已关闭 | 已回滚 |
| 🟢 **Medium** | **Issue #100** — Telegram "Message text is empty" 崩溃 | 已关闭 | 已修复 |
| 🟢 **Medium** | **Issue #3074** — message 工具跨 channel 发送成功但无实际接收 | **Open** | 无 |

**稳定性信号**：核心 Agent 循环和通道适配器的修复密集落地，但 **Heartbeat 架构缺陷** 和 **Dream 数据安全** 两类问题显示长期运行场景下的可靠性仍需加强。

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性分析 |
|:---|:---|:---|
| **Issue #3070** — 模型路由（类似 OpenRouter），按任务复杂度自动切换性价比模型 | Open | **高可能性**。与成本控制强相关，社区呼声高，实现路径清晰（自建模型库 + 任务分级）。 |
| **PR #3030 / #2972** — Web UI / 浏览器与移动端界面 | Open | **高可能性**。两个 PR 同时推进，显示这是官方或社区重点方向，预计下一版本会合并其一。 |
| **PR #3104** — Dream 完成后 Hook，支持外存记忆（ Lark Docs、腾讯文档等） | Open | **中高可能性**。Issue #3103 有明确场景，PR 已提交，改动面较小，易合并。 |
| **PR #3021** — 防止 Dream `edit_file` 损坏导致 SOUL.md / USER.md 膨胀 | Open | **高优先级**。直接修复数据腐败问题，与 Dream 稳定性挂钩。 |
| **Issue #3096** — 工具调度应信任 LLM 的并行工具调用，减少串行瓶颈 | Open | **中长期**。涉及 Tool 基类静态属性（`read_only`/`exclusive`/`concurrency_safe`）的架构调整，需要审慎设计。 |
| **PR #3116** — Whisper STT `language` 参数扩展至 OpenAI | Open | **高可能性**。Groq 侧已合并（#2756），OpenAI 侧对称实现，合并阻力小。 |
| **PR #3114** — 新增 LongCat Provider | Open | **中可能性**。标准的 OpenAI 兼容注册，测试覆盖完整，通常易通过。 |

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实声音：

**😫 痛点**
- **成本控制焦虑**：Heartbeat 机制在长期使用下 Token 消耗失控，用户直言 "ENORMOUS token usage"（Issue #2375）。
- **升级恐惧**：小版本升级（0.1.4 → 0.1.4post5/6）多次引入回归，破坏原有工作流（Issue #2185、#2713、#2562）。
- **数据安全感缺失**：`MEMORY.md` 被 Dream 覆写为空白且无任何备份机制，用户对核心记忆持久化失去信心（Issue #2957）。
- **本地/离线场景支持薄弱**：网络隔离环境下 LiteLLM、tiktoken 首次启动超时，配置开关无效（Issue #2145）；Ollama 本地运行成功但 NanoBot 请求 502（Issue #3069）。

**😊 满意/期待**
- **自定义扩展需求旺盛**：用户积极配置自定义端点、自定义 provider、自定义 Dream Hook，显示 NanoBot 的开放架构吸引了大量进阶用户。
- **中文社区活跃**：钉钉、QQ、飞书等通道的 Bug 反馈和功能请求密集，说明在国内 IM 集成场景有显著 adoption。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃或涉及核心架构，建议维护者优先关注：

| 项目 | 创建时间 | 当前状态 | 提醒原因 |
|:---|:---|:---|:---|
| **Issue #2318** | 2026-03-21 | Open，1 评论 | Tool-loop 成本与可靠性路线图，聚合了多个边缘 case，是 Agent 核心循环的系统性问题。 |
| **Issue #141** | 2026-02-05 | Open，1 评论 | Provider 逻辑冗余与 Ruff Lint 遗留问题，属于代码质量债务，长期未决。 |
| **PR #2217** | 2026-03-18 | Open | Cron 工具增加 `edit` 动作，用户高频需求，PR 已挂起近一个月。 |
| **PR #2597** | 2026-03-28 | Open | `find_legal_message_start` 的 off-by-one 修复，涉及会话消息合法性校验，影响稳定性。 |
| **Issue #2925** | 2026-04-08 | Open，2 评论 | PIP 安装 `nanobot-ai[api]` 失败，直接阻塞新用户入门，需快速响应。 |

---

*日报基于 HKUDS/nanobot GitHub 公开数据生成。项目健康度评估：活跃（高社区参与），稳定（修复密集但架构债务尚存），前进（功能探索积极）。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-14

---

## 1. 今日速览

Hermes Agent 在 4 月 13-14 日保持**极高活跃度**：24 小时内 Issues 与 PR 各更新 50 条，社区讨论热烈。项目刚刚发布 **v0.9.0 "The everywhere release"**，新增 Termux/Android、iMessage、WeChat 支持，并引入 Fast 模式，是近几个月最大的一次功能跃迁。与此同时，新平台适配的 bug 报告密集涌现（BlueBubbles、WhatsApp、Signal、Feishu），显示多平台扩张带来的稳定性压力；CLI/TUI 体验、上下文压缩、模型路由等核心模块也有多项待修复问题。整体健康度：**功能迭代强劲，但需加强新平台 QA 与 Issue  triage**（当前 open issues 已超 1000）。

---

## 2. 版本发布

### [v0.9.0 — "The everywhere release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.13)
**发布日期：** 2026-04-13

| 统计 | 数值 |
|:---|:---|
|  commits | 487 |
|  merged PRs | 269 |
|  resolved issues | 167 |
|  files changed | 493 |
|  insertions | 63,281 |
|  contributors | 24 |

**核心更新：**
- **移动端：** 原生支持 Termux / Android 部署
- **新消息平台：** iMessage、WeChat 接入
- **性能：** 新增 Fast 模式，优化响应延迟
- **规模：** 近 500 文件改动，是社区协作最密集的一个周期

**迁移与破坏性变更提示：**
- `hermes claw cleanup` 与 `openclaw doctor` 存在**数据丢失风险**：迁移后会重命名 `~/.openclaw/` 目录，若 OpenClaw gateway 仍在运行，将重建空白配置，导致运行时状态、插件、agent 配置被销毁。建议迁移前完全停止相关服务（详见 [#8596](https://github.com/NousResearch/hermes-agent/issues/8596)）。
- 新增 Camofox 依赖后，`package.json` 与 `package-lock.json` 曾出现不同步，v0.9.0 已修复（[#4408](https://github.com/NousResearch/hermes-agent/issues/4408) 已关闭）。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#9228](https://github.com/NousResearch/hermes-agent/pull/9228) | DeployFaith | **Web UI 移动端适配**：使用 Tailwind `sm:` 断点修复小屏布局崩溃，无新依赖。 |
| [#6170](https://github.com/NousResearch/hermes-agent/pull/6170) + [#6167](https://github.com/NousResearch/hermes-agent/pull/6167) | nepenth | **Matrix 平台深度增强**：新增可折叠 thinking 字段、审批按钮、模型选择器，以及 6 个 LLM 可调用的 Matrix 工具（发反应、撤回消息、踢人、置顶等）。 |
| [#9255](https://github.com/NousResearch/hermes-agent/pull/9255) | MestreY0d4-Uninter | **委托任务分层系统**：引入 5 级任务配置（light/fast/balanced/heavy/custom），每级可独立设置模型、路由、reasoning_effort 与迭代次数，解决 #3719、#6306。 |
| [#8011](https://github.com/NousResearch/hermes-agent/pull/8011) + [#9233](https://github.com/NousResearch/hermes-agent/pull/9233) + [#9275](https://github.com/NousResearch/hermes-agent/pull/9275) | akhater / teknium1 | **模型选择器去重与分组**：修复同一 provider 多模型配置时 `/model` 选择器显示异常的问题。 |
| [#8856](https://github.com/NousResearch/hermes-agent/pull/8856) | bugmaker2 | **Moonshot 国内线路**：新增 `moonshot-cn` provider，服务 `platform.moonshot.cn` 注册用户。 |
| [#9071](https://github.com/NousResearch/hermes-agent/issues/9071) / [#9211](https://github.com/NousResearch/hermes-agent/issues/9211) | — | **LCM 上下文引擎状态栏修复**：两个关联 issue 均已关闭，解决插件 context engine 导致 CLI 状态栏显示 `ctx --` 的问题。 |

**整体推进评估：** v0.9.0 发布后，社区迅速跟进修复了 Web UI 移动端、模型选择器、Matrix 平台能力、任务委托系统等关键路径，显示核心贡献者对用户体验的高度响应。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) Web UI Gateway — Local Browser-Based Interface | **12 条** | 用户强烈希望 Hermes 拥有本地 Web UI，对标 Claude Artifacts、Open WebUI。该需求与 v0.9.0 的" everywhere" 愿景高度契合，但官方尚未落地。 |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) More than 1000 open issues | **9 条** | 社区对 Issue 积压失控表达担忧，呼吁建立更有效的 triage 机制。 |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) smart_model_routing 预压缩阈值错误绑定到 cheap model | **3 条** | 智能路由的核心 bug：上下文压缩按廉价模型阈值执行，可能导致长上下文被过度压缩。 |
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) SECURITY.md / 私有漏洞报告 | **3 条** | 安全研究员请求启用 GitHub Private Vulnerability Reporting，显示外部安全关注上升。 |
| [#4408](https://github.com/NousResearch/hermes-agent/issues/4408) package.json 与 lock 不同步 | **3 条** | 已关闭。反映依赖管理在快速迭代中的脆弱性。 |

**热点分析：** 社区最大声量集中在 **"本地 Web UI"** 和 **"Issue 治理"** 两个主题。前者是产品竞争力缺口，后者是项目可持续性风险。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#8596](https://github.com/NousResearch/hermes-agent/issues/8596) | `hermes claw cleanup` / `openclaw doctor` 静默销毁 OpenClaw 运行时状态、插件与配置 | Open，无 fix PR |
| 🔴 **高** | [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) | `smart_model_routing` 将预压缩阈值错误绑定到 cheap model，导致上下文质量下降 | Open，无 fix PR |
| 🔴 **高** | [#9263](https://github.com/NousResearch/hermes-agent/issues/9263) + [#9265](https://github.com/NousResearch/hermes-agent/issues/9265) | BlueBubbles 适配器 webhook 注册完全失败：无效 event 名 + URL 缺少密码，导致 iMessage 消息无法 inbound | Open，无 fix PR |
| 🟡 **中** | [#7966](https://github.com/NousResearch/hermes-agent/issues/7966) | Gateway 启动时 session suspension 因 `datetime` 与 `float` 比较报错 | **已关闭** |
| 🟡 **中** | [#8478](https://github.com/NousResearch/hermes-agent/issues/8478) | Ctrl+D 行为不符合 Unix 惯例（未空行时直接 EOF 退出） | Open，无 fix PR |
| 🟡 **中** | [#8764](https://github.com/NousResearch/hermes-agent/issues/8764) | Feishu 卡片交互按钮报错 code:200340，回调超时 | Open，无 fix PR |
| 🟡 **中** | [#5434](https://github.com/NousResearch/hermes-agent/issues/5434) | 自托管 Honcho memory 因 SDK 2.x / Server 3.x 不兼容而静默失败 | Open，无 fix PR |
| 🟡 **中** | [#9080](https://github.com/NousResearch/hermes-agent/issues/9080) | Signal 网关回复开头出现多余 `▉` 字符 | Open，无 fix PR |
| 🟡 **中** | [#9268](https://github.com/NousResearch/hermes-agent/issues/9268) | Slack `reply_in_thread: false` 仍强制线程回复 | Open，无 fix PR |
| 🟢 **低** | [#9270](https://github.com/NousResearch/hermes-agent/issues/9270) | 空 LLM 响应被替换为字面量 `"(No response generated)"` 并送达用户 | Open，无 fix PR |
| 🟢 **低** | [#9239](https://github.com/NousResearch/hermes-agent/issues/9239) | NixOS managed 模式下 `/save` 权限为 0600 导致普通用户无法写入 | **有 fix PR** [#9279](https://github.com/NousResearch/hermes-agent/pull/9279) |
| 🟢 **低** | [#9236](https://github.com/NousResearch/hermes-agent/issues/9236) | WhatsApp 适配器缺少 `send_voice()`，语音消息以文本路径发送 | Open，无 fix PR |
| 🟢 **低** | [#9240](https://github.com/NousResearch/hermes-agent/issues/9240) | Discord `free_response_channels` 重启后可能失效 | Open，无 fix PR |

**稳定性评估：** v0.9.0 的新平台扩张（iMessage/BlueBubbles、WhatsApp、Signal、Feishu）带来了**密集的适配层 bug**。BlueBubbles 适配器目前处于**完全不可用**状态，建议优先修复。

---

## 6. 功能请求与路线图信号

| Issue/PR | 内容 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | 本地 Web UI Gateway（浏览器界面、Streaming、Artifacts） | **高** — 评论数第一，与"everywhere"发布主题一致，已有社区强烈呼声 |
| [#9269](https://github.com/NousResearch/hermes-agent/issues/9269) | Tailscale serve 集成，零配置安全远程访问 | 中 — 基础设施类需求，实现成本不高 |
| [#9154](https://github.com/NousResearch/hermes-agent/issues/9154) | Feishu 自动线程与话题级会话隔离（对标 Discord） | 中 — 已有 Telegram/Discord 先例，平台 parity 需求 |
| [#9245](https://github.com/NousResearch/hermes-agent/issues/9245) | TUI 流式响应自动换行（word wrap） | 中 — 纯体验优化，影响 CLI 用户日常 |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) | Ink (React) TUI 重构，替换 prompt_toolkit | 中-高 — 大型重构 PR，若合并将根本性改变 CLI 架构 |
| [#9281](https://github.com/NousResearch/hermes-agent/pull/9281) | vLLM/本地服务器错误模式 + MCP 初始连接重试 | 高 — 来自 Kilo-Org 的 upstream 改进，提升本地部署可靠性 |
| [#9278](https://github.com/NousResearch/hermes-agent/pull/9278) | Action Auditor + Heuristic Sanitizer（自主改进） | 中 — 创新性功能，需评估对核心循环的性能影响 |

---

## 7. 用户反馈摘要

**真实痛点：**

- **平台适配质量参差：** "BlueBubbles webhook 完全注册不上"、"Signal 每个回复开头多个方块"、"Feishu 按钮点一下就报错"——用户感受到新平台接入的粗糙感。
- **数据安全感缺失：** `claw cleanup` 会无提示覆盖用户配置，被描述为 "silently destroy"，用户对迁移工具的信任度低。
- **上下文管理黑盒：** `smart_model_routing` 的压缩行为不可预测，长回复被截断（[#7237](https://github.com/NousResearch/hermes-agent/issues/7237)），用户难以理解背后的模型切换逻辑。
- **权限/部署边缘场景：** NixOS 用户、Termux 用户、国内 Moonshot 用户均在官方路径外遇到阻塞，显示用户基数正在向多元化场景扩散。

**满意/期待：**
- v0.9.0 的"everywhere"愿景获得认可，尤其是移动端和 iMessage 支持被频繁提及。
- Matrix 平台的新交互能力（thinking 折叠、审批按钮）受到技术用户好评。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃或存在高影响但尚未获得维护者明确响应，建议优先 triage：

| 条目 | 创建时间 | 说明 |
|:---|:---|:---|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) Web UI Gateway | 2026-03-06 | 评论数最高的功能请求，已逾 1 个月，需路线图确认 |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) 1000+ open issues | 2026-04-10 | 项目治理信号，需官方回应 triage 策略 |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) Ink TUI 重构 | 2026-04-03 | 大型架构 PR，10 天无合并/关闭动作，需核心维护者评审 |
| [#5434](https://github.com/NousResearch/hermes-agent/issues/5434) Honcho 自托管内存失效 | 2026-04-06 | 自托管用户核心功能静默损坏，已 1 周无 fix |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) smart_model_routing 压缩阈值 bug | 2026-04-11 | 影响核心智能路由正确性，3 天无 PR |

---

*日报生成时间：2026-04-14*  
*数据来源：NousResearch/hermes-agent GitHub 公开活动*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-14

---

## 1. 今日速览

PicoClaw 社区在过去 24 小时展现出**极高活跃度**：PR 吞吐量达 **41 条**（29 条待审、12 条已合并/关闭），Issues 更新 5 条。开发重心明显向**安全加固**（exec 工具路径校验、策略评估系统）、**多实例/多租户架构**（Channel 多实例、Feishu 多应用）和**稳定性修复**（OGG 音频解码、404 fallback、Docker 部署）倾斜。同时，一个 nightly 版本自动发布，但无正式版。值得注意的是，社区首次出现对 **CLA 协议主体错误**的法律合规性质疑，需维护者尽快回应。

---

## 2. 版本发布

### 🔸 Nightly Build: `v0.2.6-nightly.20260413.6d037919`
- **发布时间**：2026-04-13
- **性质**：自动化构建，**可能不稳定，谨慎使用**
- **变更范围**：自 `v0.2.6` 标签以来 `main` 分支的全部累积提交
- **完整日志**：[compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)
- **迁移建议**：生产环境建议继续锁定 `v0.2.6` 稳定版；如需测试近期 Channel 多实例重构或安全加固特性，可在隔离环境试用该 nightly。

> ⚠️ **无正式版本发布**，v0.2.6 仍是当前最新稳定版。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#2481** | cytown | **Channel 配置架构重构**：将 `config.channels` 改为 `channel_list`，新增 `type` 字段，配置版本升级至 v3，为**多实例 Channel** 奠定底层基础。 | [PR #2481](https://github.com/sipeed/picoclaw/pull/2481) |
| **#2503** | cytown | **AgentLoop 并行化**：基于 #2481，重构 `pkg/agent/loop.go` 支持用户消息并行处理与正确路由。这是性能与并发能力的重要跃进。 | [PR #2503](https://github.com/sipeed/picoclaw/pull/2503) |
| **#2495** | liuy | **`/clear` 指令完整性修复**：此前仅清 JSONL 会话文件，现同步清理 seahorse SQLite 数据库，避免旧消息在上下文组装时“幽灵复活”。 | [PR #2495](https://github.com/sipeed/picoclaw/pull/2495) |
| **#2507** | cytown | `allowFrom` 空字符串 bugfix，防御性修复配置解析。 | [PR #2507](https://github.com/sipeed/picoclaw/pull/2507) |
| **#2508** | cytown | 批量修复 manager_channel 类型断言 panic、微信配置解码错误处理等稳定性问题。 | [PR #2508](https://github.com/sipeed/picoclaw/pull/2508) |
| **#2394** | darrenzeng2025 | **Provider 404 容错 fallback**：模型 API 返回 404 时自动切换 fallback，提升服务可用性。 | [PR #2394](https://github.com/sipeed/picoclaw/pull/2394) |
| **#2504** | jacrify | **OGG Opus 解码内存安全**：修复 `DecodeOggOpus` 中 buffer reuse 导致音频帧损坏的问题，直接影响 Discord 等语音通道质量。 | [PR #2504](https://github.com/sipeed/picoclaw/pull/2504) |

**整体判断**：今日合并的 PR 覆盖了**架构升级**（Channel 多实例）、**运行时性能**（AgentLoop 并行）、**数据一致性**（seahorse /clear）、**基础设施健壮性**（404 fallback、Docker 路径、音频解码）。项目正从“功能补全期”迈向“工程化与规模化期”。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标签 | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| **#1042** | `bug`, `tool` | 3 | **exec 工具安全 guard 误杀**：`restrict_to_workspace=true` 时，正则粗暴匹配把 `curl wttr.in/Beijing?T` 中的 URL 参数误判为相对路径 `../../../../Beijing?T`，导致合法命令被拦截。社区对安全策略的**精确性**提出强烈需求。 | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |
| **#2479** | `bug`, `provider`, `channel` | 3 | **NVIDIA API + DeepSeek-V3.1 / GLM-4.7 404 错误**：Telegram 窗口报 `LLM call failed after retries: 404 page not found`。该 Issue 已被关闭，对应修复为 PR #2394（404 fallback），但根本原因是 NVIDIA API 端点兼容性问题。 | [Issue #2479](https://github.com/sipeed/picoclaw/issues/2479) |
| **#2499** | `enhancement`, `channel`, `config` | 1 | **第三方 WebSocket 客户端的安全接入**：提出为浏览器扩展、外部桌面工具提供可持续、安全的 Pico WS 集成路径，要求明确认证边界、安全策略和版本兼容策略。 | [Issue #2499](https://github.com/sipeed/picoclaw/issues/2499) |

### 热点分析

- **#1042** 反映出一个典型矛盾：**安全加固 vs 用户体验**。PR #2378（终端输出转义、路径校验硬化）与 #2313（Agent Shield 安全套件）正在推进，但 guard 的误报率需要更精细的正则或 AST 级解析来根治。
- **#2499** 代表了 PicoClaw 生态扩展的**下一个增长极**：从“内置 WebUI 单一体”走向“开放第三方客户端平台”。这与 Channel 多实例重构（#2481）形成战略呼应，但缺少官方的 WS 认证协议设计。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | 修复 PR / 进展 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | exec 工具 `guardCommand` 误拦截无路径命令（如 curl URL） | 开放 | **PR #2378** 部分相关（硬化路径检查），但未完全解决正则误匹配 | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |
| 🟡 **中** | NVIDIA API 404 导致 LLM 调用失败 | **已关闭** | **PR #2394** 已提供 fallback 机制 | [Issue #2479](https://github.com/sipeed/picoclaw/issues/2479) |
| 🟡 **中** | OGG Opus 解码 buffer reuse 致音频帧损坏 | 待合并 | **PR #2504** 待审 | [PR #2504](https://github.com/sipeed/picoclaw/pull/2504) |
| 🟡 **中** | `allowFrom` 含空字符串的解析 bug | **已修复** | **PR #2507** 已合并 | [PR #2507](https://github.com/sipeed/picoclaw/pull/2507) |
| 🟢 **低** | manager_channel 类型断言 panic、微信配置解码缺错误处理 | **已修复** | **PR #2508** 已合并 | [PR #2508](https://github.com/sipeed/picoclaw/pull/2508) |

> **建议**：#1042 作为长期存在的安全误报问题，已有 3 条评论和 0 👍，说明影响面明确但尚未引发大规模情绪。建议在 PR #2378 基础上追加专门修复，或拆分独立 PR。

---

## 6. 功能请求与路线图信号

| 功能需求 | 提出者 | 与现有 PR 的关联 | 纳入下一版本概率 | 链接 |
|:---|:---|:---|:---:|:---|
| **多 Feishu 应用支持**（按配置目录隔离） | zuozhehao | 与 **Channel 多实例重构 #2481** 直接相关，配置架构已就绪 | **高** | [Issue #2493](https://github.com/sipeed/picoclaw/issues/2493) |
| **第三方 Pico WS 安全接入**（浏览器扩展、外部客户端） | SiYue-ZO | 与 **#2481 / #2503** 的并发/路由能力相关，但缺少认证层 PR | **中** | [Issue #2499](https://github.com/sipeed/picoclaw/issues/2499) |
| **Agent Shield 安全套件集成**（多用户、技能白名单） | stevef1uk | **PR #2313** 正在推进，范围极大，涉及 agent/tool/config/docker 多域 | **中-高**（可能分阶段合并） | [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) |
| **策略评估系统**（YAML 策略、运行时意图/工具调用管控） | rjungles | **PR #2509** 已关闭（原因不明），但实现完整，可能重新打开或拆分 | **中** | [PR #2509](https://github.com/sipeed/picoclaw/pull/2509) |

**路线图信号**：
- **v0.3.x 或 v0.2.7** 极有可能以 **Channel 多实例 + AgentLoop 并行** 为核心卖点。
- **安全**正成为社区共识优先级：#1042、#2313、#2509、#2378 形成密集的安全议题簇。
- **第三方生态开放**（#2499）是下一个战略机会，但需官方在认证协议（如 API Key / OAuth / mTLS）上给出设计。

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的真实用户声音：

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---:|
| **“curl 查天气都被安全 guard 拦住，安全策略太粗暴”** — 用户希望安全机制能理解命令语义，而非正则硬匹配。 | #1042 | 😤 不满 |
| **“NVIDIA API 配 DeepSeek 直接 404，完全不可用”** —  Provider 兼容性仍是新用户 onboarding 的最大障碍。 | #2479 | 😤 不满 |
| **“需要同时管理多个飞书应用，现在只能跑一个”** — 企业/多租户场景下的刚需，配置灵活性不足。 | #2493 | 😐 期待 |
| **“想给浏览器扩展接 PicoClaw，但 WS 认证和兼容策略不清楚”** — 开发者希望项目从“自用工具”升级为“可集成平台”。 | #2499 | 😐 期待 |
| **“CLA 协议签的是 SAP，这合法吗？”** — 首次出现对项目合规治理的质疑，可能打击企业贡献者信心。 | #2506 | 😟 担忧 |

---

## 8. 待处理积压

### 需维护者重点关注

| 类型 | 编号 | 问题 | 已闲置/未响应时间 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **Issue** | **#2506** | **CLA 协议主体错误**（写的是 SAP 而非 Sipeed/PicoClaw） | 0 天（刚创建）但性质紧急 | 🔴 **法律合规风险**，可能吓退企业贡献者，需法务或维护者 24h 内回应 | [Issue #2506](https://github.com/sipeed/picoclaw/issues/2506) |
| **Issue** | **#1042** | exec guard 误报 | 40 天（3-04 创建，4-13 更新） | 🟡 安全与 UX 冲突的经典问题，已有 PR #2378 但无根治方案 | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |
| **PR** | **#2313** | Agent Shield 大规模安全重构 | 10 天 | 🟡 改动面极广（agent/tool/config/docker），Review 成本高，长期挂起易腐烂 | [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) |
| **PR** | **#2249** | Inbound context routing session 重构 | 13 天 | 🟡 与 #2481/#2503 的并发路由方向相关，若长期不审可能冲突 | [PR #2249](https://github.com/sipeed/picoclaw/pull/2249) |

---

**日报结语**：PicoClaw 今日工程推进迅猛，Channel 多实例与 AgentLoop 并行化标志着架构升级进入深水区。建议维护者优先处理 **CLA 合规质疑（#2506）** 和 **exec 安全误报（#1042）**，以平衡社区信任与产品体验。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-14

---

## 1. 今日速览

NanoClaw 今日保持**高活跃度**：24小时内Issues更新5条（4开1关）、PR更新13条（8开5关），无新版本发布。社区焦点集中在**容器运行时稳定性**（3条Bug报告）、**多渠道集成扩张**（IMAP/SMTP、Matrix、Discord、Twilio）以及**AI Agent记忆与支付基础设施**（x402微支付、SQLite记忆系统）。项目处于快速功能迭代期，但容器权限与错误处理等基础稳定性问题需要维护者优先关注。

---

## 2. 版本发布

**无今日新版本发布。**

---

## 3. 项目进展

今日合并/关闭5条PR，推进以下关键方向：

| PR | 作者 | 进展 |
|:---|:---|:---|
| [#1563](https://github.com/qwibitai/nanoclaw/pull/1563) | simonstudios | **PII保护扩展至PDF与图片**——PDF通过`pdf-parse`在host侧提取并脱敏，图片经`llava`本地描述替代原始内容，实现fail-closed安全策略 |
| [#1743](https://github.com/qwibitai/nanoclaw/pull/1743) | vrknetha | **SQLite-first自进化记忆Agent完工**——包含D1富信号追踪、D2嵌入检索、D3反馈与D4梦境维护的完整记忆系统落地 |
| [#1765](https://github.com/qwibitai/nanoclaw/pull/1765) | stevengonsalvez | **Discord多Bot支持**——单实例运行多Discord bot，每bot独立身份、JID前缀与触发词，修复@mention注入逻辑 |
| [#1766](https://github.com/qwibitai/nanoclaw/pull/1766) | martin-erlandsson-lego | ~~MS Graph MCP bridge~~（已关闭，未合并） |
| [#82](https://github.com/qwibitai/nanoclaw/pull/82) | rachen | ~~历史PR清理关闭~~ |

**整体评估**：安全合规（PII）、核心Agent能力（记忆系统）、渠道生态（Discord）三条主线均有实质交付，项目向生产级部署迈进一步。

---

## 4. 社区热点

### 讨论最活跃：Native Runner Mode 架构辩论
- **[#1732](https://github.com/qwibitai/nanoclaw/issues/1732)** `feat: native runner mode — bypass Docker for host-tool access`
- **作者**：stevengonsalvez | **2条评论** | 创建于04-10，昨日仍活跃更新
- **核心诉求**：容器隔离虽是安全优势，但已成为tmux编码、 headed浏览器、macOS API等Agentic场景的**硬阻塞**。社区在"安全优先"与"能力扩展"之间寻求新架构方案（如可选native runner模式），这关系到NanoClaw能否覆盖开发者工具链集成场景。

### 其他高关注度
- **[#1764](https://github.com/qwibitai/nanoclaw/pull/1764)** IMAP/SMTP邮件集成（开放待审）——企业工作流集成的关键缺口
- **[#1767](https://github.com/qwibitai/nanoclaw/pull/1767)** x402微支付技能（开放待审）——Agent经济的实验性基础设施

---

## 5. Bug 与稳定性

| 优先级 | Issue | 问题描述 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | [#1763](https://github.com/qwibitai/nanoclaw/issues/1763) | **容器UID不匹配**：host以root创建session/IPC目录，容器内`node`用户(UID 1000)无写入权限，导致SDK崩溃`EACCES`。影响所有Linux root部署的新group | **无** — 作者已提`chownForContainer()`方案 |
| 🔴 **高** | [#1762](https://github.com/qwibitai/nanoclaw/issues/1762) | **TypeScript编译错误导致容器静默失败**：`tsc` exit code 2后容器死亡，错误未透传用户，重试循环不断生成失败容器，引发**全group同时静默** | **无** |
| 🟡 **中** | [#1761](https://github.com/qwibitai/nanoclaw/issues/1761) | **EFS陈旧Claude Code会话未清理**：gateway传递过期session ID导致Claude Code返回"No conversation found"，影响部署恢复与本地开发数据迁移 | **无** |

**风险评估**：两条高优先级Bug均指向容器运行时的基础可靠性，且均已提出修复方向但无对应PR，建议维护者48小时内响应。

---

## 6. 功能请求与路线图信号

| 功能 | 来源 | 纳入可能性评估 |
|:---|:---|:---|
| **Native Runner / 绕过Docker模式** | [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) | 中-高。需求明确且阻塞核心场景，但涉及安全架构重大调整，预计需RFC阶段 |
| **IMAP/SMTP邮件集成** | [#1764](https://github.com/qwibitai/nanoclaw/pull/1764) | **高**。PR已提交，设计成熟（密码通过host侧launchd管理，容器不可见），接近可合并状态 |
| **Matrix渠道（E2EE）** | [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | 高。PR已开放10天，遵循现有channel代码风格，完整实现E2EE，待最终review |
| **x402微支付（pay-per-call）** | [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) | 中。创新性技能，但依赖外部支付协议成熟度，可能作为实验性技能合并 |
| **Twilio语音回拨** | [#1760](https://github.com/qwibitai/nanoclaw/pull/1760) | 高。功能聚焦，测试计划清晰，企业通知场景刚需 |
| **MCP文件发送工具** | [#1757](https://github.com/qwibitai/nanoclaw/pull/1757) | 高。Agent向用户发送文件的基础能力，PR实现完整 |

**路线图信号**：NanoClaw正从"聊天渠道聚合器"向**企业工作流基础设施**（邮件、语音、文件传输）和**Agent经济平台**（微支付、记忆系统）演进。

---

## 7. 用户反馈摘要

### 痛点
- **容器调试体验差**："容器死了，没有错误到达用户"（[#1762](https://github.com/qwibitai/nanoclaw/issues/1762)）——开发者对黑盒故障极度沮丧
- **权限管理在Linux生产环境脆弱**：root host vs. node user的默认配置冲突，说明安装/部署文档的假设与现实环境脱节（[#1763](https://github.com/qwibitai/nanoclaw/issues/1763)）
- **状态持久化混乱**：EFS会话残留、Obsidian vault路径重组（[#1759](https://github.com/qwibitai/nanoclaw/pull/1759)）反映项目快速发展中配置迁移工具不足

### 场景诉求
- **开发者工具链原生集成**：tmux、headed浏览器、macOS API访问（[#1732](https://github.com/qwibitai/nanoclaw/issues/1732)）——目标用户是构建coding agent的开发者
- **企业通信全覆盖**：邮件、电话、Matrix——表明社区正在将NanoClaw推向B2B/内部工具场景

---

## 8. 待处理积压

以下PR/Issue已开放较长时间，需维护者关注避免社区热情衰减：

| 项目 | 创建时间 | 状态 | 风险提示 |
|:---|:---|:---|:---|
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix渠道+E2EE | 2026-04-04 | **开放10天** | 大型功能PR，久未合并可能导致与主分支冲突累积 |
| [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) Native Runner Mode | 2026-04-10 | **开放4天，2条评论** | 架构级议题，需要维护者明确表态是否纳入路线图 |
| [#1563](https://github.com/qwibitai/nanoclaw/pull/1563) | 2026-03-31 | 已于今日合并 | — |

**特别提醒**：[#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix实现是社区贡献的大型channel功能，若继续搁置可能影响bitcryptic-gw等贡献者的后续参与意愿。

---

*日报基于 GitHub 公开数据生成，不代表项目官方立场。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-14

---

## 1. 今日速览

过去24小时，NullClaw 项目保持**中等活跃度**：新增 3 个 Issues（全部待处理）、2 个 PR（均待合并），无新版本发布。社区焦点集中在**网络搜索功能失效**、**子代理与自定义 OpenAI 兼容 provider 连接失败**，以及 **OpenRouter 模型列表刷新因缓冲区过小而崩溃**三个稳定性问题上。PR 方面，一位贡献者提交了 SysVinit 服务安装回退支持，而 Cron 子代理功能 PR 在经历近一周讨论后仍有更新。整体而言，项目今日以**问题暴露与基础设施补强**为主，暂无功能合并落地。

---

## 2. 版本发布

无。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目代码层面未有直接推进。

待合并 PR 中值得关注的进展：
- **PR #783** — `yanggf8` 的 Cron 子代理功能持续更新（最后更新 2026-04-13），涵盖 DB 调度器、JSON CLI 输出、安全加固等，是近期较大的功能增量，但尚未进入合并阶段。
- **PR #810** — `mark-os` 今日新提，为 Linux 服务安装增加 SysVinit 回退支持，补全了 systemd/OpenRC 之外的部署场景。

---

## 4. 社区热点

| 条目 | 热度指标 | 链接 | 诉求分析 |
|:---|:---|:---|:---|
| **Issue #812** — `[bug] http_request` | 评论: 1 | [nullclaw/nullclaw#812](https://github.com/nullclaw/nullclaw/issues/812) | 一位从 Picoclaw/ZeroClaw 迁移而来的新用户，自上周五起**始终无法启用互联网搜索能力**，已尝试所有示例。该 Issue 反映了**核心能力文档不足或存在回归**，对新用户留存构成直接威胁。 |
| **Issue #811** — `[bug] Fails to connect to sub agent with a custom OpenAI-compatible provider` | 评论: 0 | [nullclaw/nullclaw#811](https://github.com/nullclaw/nullclaw/issues/811) | 用户通过 `--agent` CLI 调用子代理时，自定义 OpenAI 兼容 provider 触发 `error.CompatibleApiError`（exit_code=3）。诉求明确：**子代理的 provider 路由/兼容层需要修复**，这是多 agent 架构的关键路径。 |
| **Issue #809** — `models refresh fails for OpenRouter` | 评论: 0 | [nullclaw/nullclaw#809](https://github.com/nullclaw/nullclaw/issues/809) | 贡献者 `mark-os` 已定位根因：`std.process.Child.run()` 默认 `max_output_bytes` 仅 50KB，而 OpenRouter 返回约 400KB。诉求：**提升缓冲区大小或改为流式读取**。 |

**热点洞察**：今日社区情绪偏向**挫败感**——两名用户因基础功能（搜索、子代理连接）阻塞而无法正常使用；一名贡献者主动提交了根因明确的修复方向（Issue #809）并配套了服务安装 PR（PR #810）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue | 描述 | 是否有 Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **#812** | `http_request` / 互联网搜索能力完全失效，影响所有尝试使用该功能的新用户 | ❌ 无 | [nullclaw/nullclaw#812](https://github.com/nullclaw/nullclaw/issues/812) |
| 🔴 **高** | **#811** | 子代理无法连接自定义 OpenAI 兼容 provider，`--agent` CLI 核心路径崩溃 | ❌ 无 | [nullclaw/nullclaw#811](https://github.com/nullclaw/nullclaw/issues/811) |
| 🟡 **中** | **#809** | `nullclaw models refresh` 对 OpenRouter 全平台失败，根因已定位（缓冲区 50KB 硬限制） | ⚠️ **相关**：作者 `mark-os` 今日活跃并提交 PR #810，但尚未直接提交 #809 的修复 PR | [nullclaw/nullclaw#809](https://github.com/nullclaw/nullclaw/issues/809) |

**稳定性评估**：今日新增 3 个 Bug 全部 Open，涉及**核心能力（搜索）**、**多 Agent 架构（子代理路由）**、**第三方集成（OpenRouter）**。修复响应速度将直接影响项目健康度。

---

## 6. 功能请求与路线图信号

今日 Issues 中**无纯功能请求**（均为 bug 报告），但可从 PR 中读取路线图信号：

| PR | 功能方向 | 纳入下一版本可能性 | 链接 |
|:---|:---|:---|:---|
| **PR #783** — Cron 子代理、运行历史、JSON 输出、安全加固 | 调度与自动化基础设施 | **高** | [nullclaw/nullclaw#783](https://github.com/nullclaw/nullclaw/pull/783) |
| **PR #810** — SysVinit 服务安装回退 | 部署兼容性 | **高**（改动面小、需求明确） | [nullclaw/nullclaw#810](https://github.com/nullclaw/nullclaw/pull/810) |

**信号判断**：Cron 子代理（PR #783）是近期最大的功能增量，若合并将显著扩展 NullClaw 的自动化场景；SysVinit 支持（PR #810）属于快速落地的运维补丁。

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的真实用户声音：

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **"我从 Picoclaw/ZeroClaw 迁移而来，喜欢 NullClaw 的组织性，但搜索功能完全无法启用"** | Issue #812 | 新用户 onboarding，核心能力（互联网搜索）文档或实现存在断层 |
| **"子代理 + 自定义 OpenAI 兼容 provider = 直接报错退出"** | Issue #811 | 企业/高级用户尝试构建多 agent 工作流，被兼容层阻断 |
| **"OpenRouter 模型列表刷新全平台失败"** | Issue #809 | 依赖 OpenRouter 的用户无法更新模型列表，影响日常调用 |

**满意度/不满意关键词**：
- ✅ 满意："very organized"（#812）
- ❌ 不满意："doesn't work"、"tested all the examples"、"fails with curl failed"、"cannot send any messages"

---

## 8. 待处理积压

**需维护者关注的高优先级未响应项：**

- **Issue #812** — 新用户核心功能阻塞，已超 24 小时无维护者回复，建议优先确认是否为已知回归或文档问题。[nullclaw/nullclaw#812](https://github.com/nullclaw/nullclaw/issues/812)
- **Issue #811** — 子代理与自定义 provider 连接失败，无评论、无标签，涉及多 agent 架构稳定性，建议分配 `bug` + `agent` 标签并安排排查。[nullclaw/nullclaw#811](https://github.com/nullclaw/nullclaw/issues/811)
- **PR #783** — Cron 子代理大型功能 PR 已开启 7 天，评论数为 `undefined`（可能为数据异常或评论较多），建议维护者推进 review 或明确合并时间表。[nullclaw/nullclaw#783](https://github.com/nullclaw/nullclaw/pull/783)

---

*日报生成时间：2026-04-14 | 数据来源：NullClaw GitHub 公开活动流*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-14

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**：过去 24 小时内 Issues 更新 45 条（38 活跃/新开，7 关闭）、PR 更新 50 条（41 待合并，9 已合并/关闭），无新版本发布。核心团队正集中火力修复 **v0.25.0 staging** 环境在 bug bash 中暴露的 Web UI 稳定性与消息流问题，同时并行推进 v2 引擎的并发工具执行、权限持久化和配对流程等架构升级。社区侧，Google OAuth 与 Sheets 集成、Twitter/X MCP 连接等扩展能力问题持续获得关注，反映出用户对第三方集成的迫切需求。

---

## 2. 版本发布

**无今日发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#2200** | zetyquickly | 引入 `system_project_id()` 作为管理员共享技能的稳定存储空间，修复了共享技能对普通租户不可见的问题，为技能市场的多租户分发扫清障碍。 | [PR #2200](https://github.com/nearai/ironclaw/pull/2200) |
| **#2227** | henrypark133 | 规范化 MCP/WASM 工具名中的连字符为下划线，解决 LLM 回调时因名称不匹配导致的 "Tool not found" 错误，提升多扩展生态的兼容性。 | [PR #2227](https://github.com/nearai/ironclaw/pull/2227) |
| **#2431 → 重开为 #2433** | henrypark133 | 修复 Web UI 长时间使用后的浏览器崩溃（#2406），根因是 `setInterval` 泄漏、DOM 无限增长和 SSE 缓冲区未清理。首版关闭后快速迭代为 #2433。 | [PR #2433](https://github.com/nearai/ironclaw/pull/2433) |
| **#2435** | henrypark133 | 消除 v2 引擎 gate 暂停流程中的双重卡片+文本输出，统一为仅 UI 卡片，显著改善审批/授权体验的界面整洁度。 | [PR #2435](https://github.com/nearai/ironclaw/pull/2435) |
| **#2436 → 重开为 #2432** | henrypark133 | 配对审批流程闭环：从 `approve_pairing` 到 `ExtensionManager.complete_pairing_approval()` 的持久化、通道更新、轮询重启和 SSE 通知一气呵成。 | [PR #2432](https://github.com/nearai/ironclaw/pull/2432) |

**整体判断**：今日合并以**稳定性修复和 v2 引擎体验打磨**为主，同时 henrypark133 单日输出 5+ 个高复杂度 PR，显示核心团队处于冲刺状态。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| **#1** | #2229 Google Sheets OAuth 被拦截：Error 400 invalid_request | 5 | **Google 扩展的 OAuth 流程在 staging 完全不可用**，用户无法完成授权。这是企业/生产力场景的高频阻塞点。 | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) |
| **#2** | #1852 "should make it easy to use" | 4 | **非技术用户的 onboarding 门槛过高**，配置文件分散、概念复杂。这是 IronClaw 从开发者工具向大众产品跃迁的根本挑战。 | [Issue #1852](https://github.com/nearai/ironclaw/issues/1852) |
| **#3** | #846 `onboard` 数据库保存失败但主程序能启动 | 4 | **首次安装体验存在不一致性**：CLI 向导报错却又能运行，易让新手困惑并埋下数据丢失隐患。 | [Issue #846](https://github.com/nearai/ironclaw/issues/846) |
| **#4** | #84 Agent 系统高级功能（多 Agent、流式、thinking modes） | 3 | **与竞品的 agent 能力差距**：社区期待多 agent 路由、全局会话、推理模式等现代 AI 助手核心能力。 | [Issue #84](https://github.com/nearai/ironclaw/issues/84) |

**诉求分析**：热点议题呈现 **"底层稳定性 → 上手易用性 → 高级 AI 能力"** 的三层递进，说明社区用户群体正在从早期开发者向更广泛受众扩散。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | #2406 | **Web UI 长时间使用后浏览器崩溃**（"Pages Unresponsive" 弹窗 + 黑屏） | **#2433 待合并** | [Issue #2406](https://github.com/nearai/ironclaw/issues/2406) |
| 🔴 **P0** | #2409 | **用户消息输入后消失**（切换线程时历史记录加载为空） | **#2434 待合并** | [Issue #2409](https://github.com/nearai/ironclaw/issues/2409) |
| 🔴 **P0** | #2402 | **工具操作后 Agent 进入无限 "Calling LLM" 循环** | 无明确 PR | [Issue #2402](https://github.com/nearai/ironclaw/issues/2402) |
| 🟠 **P1** | #2408 | **上下文长度溢出**：输入超过 200K token 限制 | 无明确 PR | [Issue #2408](https://github.com/nearai/ironclaw/issues/2408) |
| 🟠 **P1** | #2276 | **Orchestrator 因 payload 过大被 nearai_chat  provider 返回 HTTP 413** | 无明确 PR | [Issue #2276](https://github.com/nearai/ironclaw/issues/2276) |
| 🟠 **P1** | #2229 | Google Sheets OAuth 授权失败 Error 400 | 无明确 PR | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) |
| 🟡 **P2** | #2391 | Google OAuth 参数拼写错误：`access_type='offlin'`（少一个 `e`） | 无明确 PR，但属单字符修复，应可快速落地 | [Issue #2391](https://github.com/nearai/ironclaw/issues/2391) |
| 🟡 **P2** | #2230 | Twitter/X 连接不可用：MCP 需要手动提取浏览器 cookie | 无明确 PR | [Issue #2230](https://github.com/nearai/ironclaw/issues/2230) |
| 🟡 **P2** | #2240 | **Agent 对同一失败工具调用重复重试最多 50 次** | **已关闭**（#2240） | [Issue #2240](https://github.com/nearai/ironclaw/issues/2240) |
| 🟡 **P2** | #2378 | OpenAI 兼容 provider 图片 vision 缺失 `detail` 字段 | **已关闭**（#2378） | [Issue #2378](https://github.com/nearai/ironclaw/issues/2378) |

**稳定性评估**：v0.25.0 staging 在 bug bash 中暴露出**严重的 Web UI 资源泄漏和消息持久化问题**，但核心团队响应极快，24 小时内已产出针对性修复 PR。无限循环和 token 溢出类问题仍需持续关注。

---

## 6. 功能请求与路线图信号

### 用户/社区提出的新功能需求

| Issue/PR | 功能方向 | 纳入下一版本可能性 | 判断依据 | 链接 |
|:---|:---|:---|:---|:---|
| #2360 | **内置浏览器工具**（Chromiumoxide CDP + AX-tree） | ⭐⭐⭐ 高 | 有明确 parent #2355 和依赖链，架构设计完整，属于 v2 能力补齐 | [Issue #2360](https://github.com/nearai/ironclaw/issues/2360) |
| #1609 | **Admin 管理面板**（用户/工作区/角色/用量监控 Web UI） | ⭐⭐⭐ 高 | 依赖 #1608 (RBAC) 和 #1610 (SSO)，三者同由 ilblackdragon 提出且标记 P1/P2，属于企业化必经之路 | [Issue #1609](https://github.com/nearai/ironclaw/issues/1609) |
| #1608 | **RBAC 基于角色的访问控制** | ⭐⭐⭐ 高 | P2 高优先级，数据库 schema 已部分就绪（`workspace_members.role`），只待权限中间件落地 | [Issue #1608](https://github.com/nearai/ironclaw/issues/1608) |
| #1610 | **SSO/OIDC 认证**（Google、Okta、通用 OIDC） | ⭐⭐⭐ 高 | 明确标记为 **P1 阻塞企业采用**，与 #1608/#1609 形成完整企业身份管理套件 | [Issue #1610](https://github.com/nearai/ironclaw/issues/1610) |
| #84 | **Agent 高级功能**（多 Agent 路由、流式、thinking modes） | ⭐⭐☆ 中 | 优先级 P2-P3，属于长期 feature parity 目标，但工程量大，短期内更可能是分阶段交付 | [Issue #84](https://github.com/nearai/ironclaw/issues/84) |
| #1852 | **降低使用门槛/更好的 onboarding** | ⭐⭐☆ 中 | 产品战略级需求，但涉及 UX 重构和文档体系，周期较长 | [Issue #1852](https://github.com/nearai/ironclaw/issues/1852) |
| #1339 | **ARMv7 / Raspberry Pi 支持** | ⭐☆☆ 低 | 硬件架构适配，当前资源集中在核心功能和稳定性，社区驱动可能性更高 | [Issue #1339](https://github.com/nearai/ironclaw/issues/1339) |

### 已出现的实现信号

- **PR #2423**：并发只读工具执行（batch partitioning）→ 提升 agent 吞吐
- **PR #2425**：每用户 `CachedSettingsStore` → 减少 DB 压力，为大规模用户铺垫
- **PR #2429**：跨线程并行消息处理 → 支撑高并发多租户
- **PR #2418**："slim mode" 运行时 + Docker 镜像 + `/health` 路由 → 云原生部署优化

**路线图推断**：下一版本（推测 v0.26.0）将聚焦 **"企业就绪 + 云原生 + v2 引擎成熟化"** 三大主题。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 反馈 | 场景 |
|:---|:---|:---|
| #1852 | "You are making claws launching very fast and safe... But the majority of the users are not IT technicians." | **非技术用户被复杂的配置文件和概念淹没**，希望一键运行而非手动编辑 TOML/YAML |
| #846 | `onboard` 失败但 `ironclaw` 能启动，"Failed to save settings to database" | **首次安装信任崩塌**：向导报错让用户以为安装失败，实际却能运行，造成困惑 |
| #1846 | "Don't do this. I was on version 0.24.0... Tried the update instance button in UI. Reverted back v0.21.0. Lost a bunch of things." | **Hosted UI 升级导致数据回滚和丢失**，用户明确警告他人"不要在 UI 里升级" |
| #1680 | Railway 一键部署模板中 `LLM_*` 环境变量运行时不可见，模型被锁死在 Anthropic Sonnet | **PaaS 一键部署用户的配置自主权受限**，模板与运行时行为不一致 |
| #2426 | Telegram open mode 与 web UI 历史记录分裂，"easy to misconfigure during setup" | **多通道身份模型不透明**，用户在 Telegram 和 Web 之间获得割裂体验 |

### 满意之处

- 启动速度和安全性获得认可（#1852："launching very fast and safe"）
- 架构迭代积极，社区能感受到 v2 引擎的快速演进

### 不满意之处

- **文档与引导缺口**：升级警告、通道模式说明、环境变量配置等关键信息未前置到用户路径
- **第三方集成脆弱**：Google OAuth 拼写错误、Twitter cookie 手动提取等细节反映出扩展生态的测试覆盖不足
- **错误处理不透明**：Agent 在工具失败后仍向用户报告成功（#2279），损害信任

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建日期 | 已静置 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| #84 Agent 系统高级功能 | 2026-02-14 | **~2 个月** | 中：竞品功能差距可能扩大 | [Issue #84](https://github.com/nearai/ironclaw/issues/84) |
| #1339 ARMv7 支持 | 2026-03-18 | **~4 周** | 低：边缘硬件需求，但社区有热情 | [Issue #1339](https://github.com/nearai/ironclaw/issues/1339) |
| #1680 Railway 模板 LLM 变量问题 | 2026-03-26 | **~3 周** | **高**：直接影响一键部署用户留存 | [Issue #1680](https://github.com/nearai/ironclaw/issues/1680) |
| #1846 Hosted UI 升级数据丢失 | 2026-04-01 | **~2 周** | **高**：有用户发出明确警告，可能劝退新用户 | [Issue #1846](https://github.com/nearai/ironclaw/issues/1846) |

### 建议维护者优先关注

1. **#1846 / #1680**：属于"用户成功"路径上的致命伤，建议在产品文档或 FAQ 中紧急添加警告，并分配修复 owner
2. **#1852**：可启动一个轻量级的 onboarding 改进专项（如交互式 CLI 向导或 Docker Compose 一键模板），快速回应社区呼声

---

*日报生成时间：2026-04-14 | 数据来源：nearai/ironclaw GitHub*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-14

---

## 1. 今日速览

LobsterAI 昨日保持**高活跃度**，单日处理 **22 个 PR**（合并/关闭 15 个，待合并 7 个），并发布了 **2026.4.13 正式版本**。开发节奏呈现典型的 release day 特征：大量修复集中合入、发布分支合并、以及后续的 revert 与 restore 波动。社区侧仅有 **1 条新增 Issue**，反馈 groupPolicy 被异常覆盖的问题。整体项目健康度良好，但需关注发布日后的代码回滚链式反应（#1649 → #1656，#1651 → #1655 → #1657）。

---

## 2. 版本发布

### 🏷️ [LobsterAI 2026.4.13](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.13)  
发布日期：2026-04-13

| 类型 | 变更内容 |
|:---|:---|
| **构建优化** | 加速 NSIS 覆盖安装：通过异步删除旧目录减少安装等待时间（[#1633](https://github.com/netease-youdao/LobsterAI/pull/1633)） |
| **任务调度修复** | 定时任务保存后正确重置 dirty 状态（[#1645](https://github.com/netease-youdao/LobsterAI/pull/1645)） |
| **OpenClaw 修复** | 回填会话保持时长策略，默认会话连续性统一为 30 天（[#1638](https://github.com/netease-youdao/LobsterAI/pull/1638)） |
| **架构重构** | 统一 provider 元数据管理，整合 provider registry（发布说明截断，完整内容见 [#1646](https://github.com/netease-youdao/LobsterAI/pull/1646)） |

> **迁移注意事项**：本次为常规 patch release，无已知破坏性变更。涉及 OpenClaw 会话策略的升级已保持设置入口隐藏，用户无感知迁移。

---

## 3. 项目进展

### 已合并/关闭的核心 PR（按领域分组）

#### 🔧 OpenClaw 稳定性与配置同步
- **[#1658](https://github.com/netease-youdao/LobsterAI/pull/1658)** `fix(openclaw): allow silent scope-upgrade for loopback cron connections`  
  修复 #54694 安全补丁对内部 `cron` 回环客户端的误杀，恢复 `operator.admin` 静默 scope 升级。
- **[#1654](https://github.com/netease-youdao/LobsterAI/pull/1654)** `fix(openclaw): surface lifecycle phase=error when chat error event is missing`  
  解决 OpenClaw 升级后模型不可达（如 402 认证错误）时前端会话卡死在"执行中"的关键缺陷。
- **[#1650](https://github.com/netease-youdao/LobsterAI/pull/1650)** `fix: prevent OpenClaw gateway restart on config hot-reload`  
  消除 `gateway.auth.token` 与 `gateway.tailscale` 的持久化差异，阻止配置热重载时 gateway 无意义重启。
- **[#1647](https://github.com/netease-youdao/LobsterAI/pull/1647)** `fix: resolve MCP Bridge 401 auth mismatch on startup`  
  修复 MCP Bridge 启动时的竞态条件（`LOBSTER_MCP_BRIDGE_SECRET=unconfigured`），并增加可观测性日志。

#### 🔄 发布日代码波动（Revert 链）
- **[#1649](https://github.com/netease-youdao/LobsterAI/pull/1649)** → 被 **[#1656](https://github.com/netease-youdao/LobsterAI/pull/1656)** Revert：技能创建路径提示功能先合后回滚。
- **[#1651](https://github.com/netease-youdao/LobsterAI/pull/1651)** → 被 **[#1655](https://github.com/netease-youdao/LobsterAI/pull/1655)** Revert → 再由 **[#1657](https://github.com/netease-youdao/LobsterAI/pull/1657)** Restore：非 main agent 的 persona 文件路径修复经历了"合入-回滚-恢复"的完整链条。

#### 🧹 代码质量与基础设施
- **[#1498](https://github.com/netease-youdao/LobsterAI/pull/1498)** `fix: 修复全部 ESLint error`：批量清零 165 个 ESLint error（164 个自动修复 + 1 个手动修复），代码库 lint 状态回归零错误。
- **[#1646](https://github.com/netease-youdao/LobsterAI/pull/1646)** `refactor(providers): unify provider config and fix minimax openclaw sync`：provider 配置统一化，补充 MiniMax OAuth 支持。

#### ✨ 产品功能
- **[#1648](https://github.com/netease-youdao/LobsterAI/pull/1648)** `fix: 修复创建agent时不支持多机器人的问题；飞书高级设置，群聊默认为open`：多机器人创建能力修复，飞书集成默认策略调整。

---

## 4. 社区热点

> 注：昨日所有 PR 评论数均为 `undefined` 或 0，无高评论热度条目。以下为**变更影响面最大、最值得关注**的 PR。

| 条目 | 链接 | 热度分析 |
|:---|:---|:---|
| **#1654** `fix(openclaw): surface lifecycle phase=error when chat error event is missing` | [PR #1654](https://github.com/netease-youdao/LobsterAI/pull/1654) | 修复了用户最直观的"卡死"体验问题（模型报错后会话状态不更新），直接影响核心交互路径的可靠性。 |
| **#1651 → #1655 → #1657** 非 main agent persona 文件加载修复链 | [PR #1657](https://github.com/netease-youdao/LobsterAI/pull/1657) | 发布日 revert 链反映代码审查与分支管理存在摩擦，社区开发者（btc69m979y-dotcom）与发布负责人（liuzhq1986）之间需要更清晰的沟通机制。 |
| **#1498** 全量 ESLint 修复 | [PR #1498](https://github.com/netease-youdao/LobsterAI/pull/1498) | 161 个文件变更，影响面极广，是代码健康度的标志性事件，但大规模格式化 PR 也易引发合并冲突。 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR / Issue |
|:---|:---|:---|:---|
| 🔴 **高** | OpenClaw 升级后模型不可达时，会话卡死在"执行中"状态，错误未传递到前端 | **已修复** | [#1654](https://github.com/netease-youdao/LobsterAI/pull/1654) |
| 🔴 **高** | MCP Bridge 启动 401 认证不匹配，gateway 以 `LOBSTER_MCP_BRIDGE_SECRET=unconfigured` 启动 | **已修复** | [#1647](https://github.com/netease-youdao/LobsterAI/pull/1647) |
| 🟡 **中** | OpenClaw 配置热重载导致 gateway 无意义重启 | **已修复** | [#1650](https://github.com/netease-youdao/LobsterAI/pull/1650) |
| 🟡 **中** | 安全补丁 #54694 误阻断内部 cron 客户端的 scope 升级 | **已修复** | [#1658](https://github.com/netease-youdao/LobsterAI/pull/1658) |
| 🟡 **中** | 非 main agent 的 persona 文件（SOUL.md/IDENTITY.md）因 workspace 路径不匹配无法加载 | **已修复（经回滚后恢复）** | [#1657](https://github.com/netease-youdao/LobsterAI/pull/1657) |
| 🟡 **中** | 偶现"任务超时"提前触发（对话时长未达 3600s 阈值） | **诊断中** | [#1652](https://github.com/netease-youdao/LobsterAI/pull/1652)（仅增加日志，未修复根因） |
| 🟢 **低/待确认** | `groupPolicy` 每隔一段时间被覆盖为 `allowlist` | **待响应** | [Issue #1653](https://github.com/netease-youdao/LobsterAI/issues/1653) |

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 纳入可能性 | 说明 |
|:---|:---|:---|:---|
| **会话/消息分页加载** | [#924](https://github.com/netease-youdao/LobsterAI/pull/924) `feat(cowork): 会话列表与消息历史分页加载` | ⭐⭐⭐ 高 | 3 月 26 日提出，持续更新至昨日。解决大会话量下的性能瓶颈，产品价值明确，技术方案成熟，预计进入下一版本。 |
| **非 main agent 首页个性化欢迎** | [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) `feat(cowork): 非 main agent 首页欢迎区域显示 agent 名称和描述` | ⭐⭐⭐ 高 | 昨日新提，改动小而体验提升明显，合入阻力低。 |
| **日志敏感信息脱敏导出** | [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) `fix(log): 脱敏导出日志中的敏感信息` | ⭐⭐⭐ 高 | 安全合规类需求，涉及 API Key、Bearer token 等脱敏，优先级高。 |
| **Electron & 依赖升级** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Dependabot | ⭐⭐ 中 | Electron 40.2.1 → 41.1.1，已挂起 11 天，需评估大版本升级兼容性。 |
| **Claude Agent SDK 升级** | [#1278](https://github.com/netease-youdao/LobsterAI/pull/1278) Dependabot | ⭐⭐ 中 | 0.2.12 → 0.2.90，跨度极大，需充分测试。 |

---

## 7. 用户反馈摘要

昨日仅 **1 条 Issue**，直接提炼如下：

- **[#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)** `groupPolicy为啥每过一会就被覆盖为allowlist`
  - **痛点**：用户配置的 `groupPolicy` 策略无法持久保持，周期性被重置为 `allowlist`。
  - **场景推测**：企业/团队场景下需要基于 group 的访问控制，策略被覆盖可能导致权限管理失效。
  - **情绪**：困惑 + 影响使用（"每次过一会就会被覆盖"），目前无官方回应，存在支持空白。

> 整体而言，昨日用户侧声音较弱，项目处于"开发冲刺/发布日"模式，社区运营注意力集中在代码交付而非用户支持。

---

## 8. 待处理积压

| 条目 | 链接 | 挂起时间 | 提醒 |
|:---|:---|:---|:---|
| **Electron 大版本升级** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 11 天 | 安全与性能相关，但 40→41 跨版本需充分回归测试，建议指定责任人跟进。 |
| **Claude Agent SDK 0.2.12 → 0.2.90** | [#1278](https://github.com/netease-youdao/LobsterAI/pull/1278) | 11 天 | 近 400 个 patch 版本跨度，API 兼容性风险高，建议分阶段验证或查看 SDK changelog。 |
| **会话/消息分页加载** | [#924](https://github.com/netease-youdao/LobsterAI/pull/924) | 18 天 | 已接近可合并状态，长期 open 易积累冲突，建议优先 review。 |
| **groupPolicy 被覆盖问题** | [Issue #1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | 1 天 | 虽新但涉及权限核心机制，若 24 小时内无响应，用户可能重复提报或流失信任。 |

---

*日报基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-04-14

---

## 1. 今日速览

Moltis 在 4 月 13 日展现出**极高的工程活跃度**：24 小时内 18 个 PR 全部闭环（合并或关闭），7 个 Issues 同步清零，并连发 2 个版本（`20260413.01`、`20260413.03`）。开发节奏呈现"密集修复 + 快速发布"特征，核心团队对工具调用回归、MCP 模式兼容、会话管理等用户痛点响应迅速。代码库层面正在进行大规模原子化重构（gateway 拆 crate、节点执行类型解耦），项目健康度处于**上升通道**。

---

## 2. 版本发布

| 版本 | 发布时间 | 说明 |
|:---|:---|:---|
| **20260413.03** | 2026-04-13 | 当日第二个补丁版本，推测包含对 `20260413.01` 发布后紧急问题的追加修复（如 #693 工具序列化回归）。 |
| **20260413.01** | 2026-04-13 | 当日首个版本，合并了 MCP 工具 Schema 清理、缓存 Token 展示、本地 Whisper 设置向导等用户可见功能。 |

> **迁移注意事项**：今日连续两个版本间隔较短，使用 `20260413` 系列早期构建的用户若遇到工具调用异常（falsy/null 参数丢失、MCP 工具不可用），建议直接升级至 `20260413.03`。

---

## 3. 项目进展

### 用户可见功能
- **会话归档上线**（[#702](https://github.com/moltis-org/moltis/pull/702)）：Web UI 终于支持归档/取消归档聊天会话，解决了长期存在的会话管理混乱问题。底层存储的 `archived` 字段此前已存在，但 gateway API 和前端均未暴露。
- **缓存 Token 可视化**（[#699](https://github.com/moltis-org/moltis/pull/699)）：助手消息页脚和调试面板现在显示 cached input tokens，帮助用户精准感知 prompt caching 效果与成本。
- **本地 Whisper / OpenAI TTS 设置向导**（[#700](https://github.com/moltis-org/moltis/pull/700)）：新增基于 `Base URL` 的本地/OpenAI 兼容语音端点配置，支持 Chatterbox、faster-whisper-server 等本地部署方案。
- **Voicebox TTS 本地克隆**（[#199](https://github.com/moltis-org/moltis/pull/199)）：新增基于 Qwen3-TTS 的 Voicebox 提供商，两步生成（metadata → audio），以 cargo feature `voicebox` 开关控制。
- **XMPP 频道支持**（[#48](https://github.com/moltis-org/moltis/pull/48)）：从硬编码 Telegram 重构为多频道架构，支持 1:1 聊天、MUC 群聊、XEP-0444 表情回应。
- **Telegram 文档持久化**（[#689](https://github.com/moltis-org/moltis/pull/689)）：入站文档不再仅依赖 body text，而是以结构化元数据存入会话历史，提升多轮对话中的文档引用可靠性。

### 稳定性与兼容性
- **MCP 工具 Schema 清理**（[#698](https://github.com/moltis-org/moltis/pull/698)）：修复 OpenAI 兼容层对 `not`、`if/then/else` 等 JSON Schema draft-2020-12 关键字的拒绝问题，Attio MCP 等工具恢复可用。
- **工具参数序列化回归修复**（[#697](https://github.com/moltis-org/moltis/pull/697)）：修复 `0`、`false`、`null` 等 falsy 参数在 OpenAI 兼容路径上的丢失问题。
- **工具调用兼容性综合修复**（[#696](https://github.com/moltis-org/moltis/pull/696)）：隐藏内部 `*_wasm` 工具、简化 cron schema、修复 legacy WASM 工具名兼容性。
- **Browserless v2 沙盒支持**（[#659](https://github.com/moltis-org/moltis/pull/659)）：新增 `browserless_api_version` 配置，支持 v2 的 WebSocket 路径回退逻辑。

### 架构重构（技术债偿还）
- **Gateway "God Object" 原子化拆解**：Cstewart-HC 主导了 5 个递进式重构 PR（[#683](https://github.com/moltis-org/moltis/pull/683) → [#685](https://github.com/moltis-org/moltis/pull/685) → [#688](https://github.com/moltis-org/moltis/pull/688) → [#690](https://github.com/moltis-org/moltis/pull/690) → [#691](https://github.com/moltis-org/moltis/pull/691)），将节点执行类型、MCP 服务逻辑、广播状态等从 gateway 中剥离，最终由 penso 在 [#703](https://github.com/moltis-org/moltis/pull/703) 中完成节点类型归并清理。
- **超大 Rust 模块拆分**（[#695](https://github.com/moltis-org/moltis/pull/695)）：移除 `check-file-size.sh` 最后的 allowlist，代码库全面进入模块树治理阶段。

---

## 4. 社区热点

| 排名 | 条目 | 互动量 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#548](https://github.com/moltis-org/moltis/issues/548) 应用/频道级代理支持 | 5 评论 | 企业用户希望在 Moltis 应用层或单个频道粒度配置 HTTP 代理，而非全局系统代理，以满足合规和网络隔离需求。 |
| 2 | [#646](https://github.com/moltis-org/moltis/issues/646) 远程部署无法登录 | 3 评论 | 自托管用户在远程访问时遇到认证阻塞，属于部署体验的关键路径问题。 |
| 3 | [#692](https://github.com/moltis-org/moltis/issues/692) 显示缓存输入 Token 数 | 1 评论 | 高级用户需要可观测性来验证 prompt caching 是否生效，直接推动 [#699](https://github.com/moltis-org/moltis/pull/699) 当日合并。 |

> **洞察**：代理配置（#548）是今日评论数最高的 Issue，且创建已逾 10 天，说明企业级网络配置仍是 Moltis 的明显短板，社区呼声持续。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|:---|:---|:---|:---|
| 🔴 **高** | [#693](https://github.com/moltis-org/moltis/issues/693) 20260413 工具参数序列化回归 | 已关闭 | [#697](https://github.com/moltis-org/moltis/pull/697) |
| 🔴 **高** | [#694](https://github.com/moltis-org/moltis/issues/694) MCP 工具 Schema 含 `not` 关键字被 OpenAI 提供商拒绝 | 已关闭 | [#698](https://github.com/moltis-org/moltis/pull/698) |
| 🟡 **中** | [#646](https://github.com/moltis-org/moltis/issues/646) 远程部署无法登录 | 已关闭 | 未明确关联 PR，推测在版本补丁中修复 |
| 🟡 **中** | PR [#696](https://github.com/moltis-org/moltis/pull/696) 工具调用兼容性回归（cron、legacy WASM） | 已合并 | 自带修复 |

> **风险评估**：今日 2 个高严重度 Bug 均为 **20260413 版本引入的回归**，团队在 24 小时内完成定位、修复、发版，响应速度优秀。但连续回归也提示 release 前的集成测试覆盖（尤其是 OpenAI 兼容路径和 MCP 模式）仍有加强空间。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#701](https://github.com/moltis-org/moltis/issues/701) 归档会话/对话 | 会话归档 | ✅ **已发布** | 当日由 [#702](https://github.com/moltis-org/moltis/pull/702) 实现并合并 |
| [#692](https://github.com/moltis-org/moltis/issues/692) 显示缓存输入 Token | Token 可观测性 | ✅ **已发布** | 当日由 [#699](https://github.com/moltis-org/moltis/pull/699) 实现 |
| [#570](https://github.com/moltis-org/moltis/issues/570) 本地 OpenAI Whisper 设置向导 | 语音本地部署 | ✅ **已发布** | 当日由 [#700](https://github.com/moltis-org/moltis/pull/700) 实现 |
| [#548](https://github.com/moltis-org/moltis/issues/548) 应用/频道级代理 | 网络代理粒度 | 🟡 **可能纳入** | 评论最多、创建较早，但尚无 PR，属于企业级刚需 |
| 隐含（PR #199） | Voicebox 本地 TTS | ✅ **已合并** | 功能完整，待后续版本发布 |

---

## 7. 用户反馈摘要

### 痛点
- **代理配置缺失**："需要在应用或频道级别配置代理，而不是只能改系统代理"（#548）—— 反映多租户/企业网络环境的刚性需求。
- **版本回归焦虑**：#693、#694 均为最新版本引入的破坏性变更，用户明确标注 "I am using the latest version of Moltis"，说明部分用户处于紧跟版本的测试前沿，对稳定性敏感。
- **远程部署门槛**：#646 的登录失败问题显示自托管路径的认证/网络配置文档或错误提示仍需优化。

### 满意点
- **功能响应速度快**：#692（缓存 Token 显示）、#701（会话归档）从提出到实现均在当日或极短时间内完成，体现团队对高频使用体验的重视。
- **本地语音支持完善**：从 Whisper STT 到 Voicebox TTS，本地/隐私优先的部署选项持续扩展，受到自托管用户欢迎。

---

## 8. 待处理积压

> 今日所有 7 个 Issues 和 18 个 PR 均已关闭/合并，**无 24 小时内遗留的活跃 backlog**。但以下历史 Issue 仍值得维护者持续关注：

| Issue | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#548](https://github.com/moltis-org/moltis/issues/548) 应用/频道级代理支持 | 2026-04-03 | 已关闭 | **今日评论最多**，虽已关闭但需确认是否真正解决（关闭可能是因讨论结束而非功能实现），建议维护者复核关闭原因。 |
| 无其他长期未响应项 | — | — | 团队清理效率极高，建议保持。 |

---

*日报基于 moltis-org/moltis 公开 GitHub 数据生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-14

> 项目地址：https://github.com/agentscope-ai/CoPaw（已重定向至 QwenPaw）

---

## 1. 今日速览

CoPaw（QwenPaw）今日社区活跃度极高，24小时内产生 **40条 Issues 更新**（28条新开/活跃，12条关闭）和 **50条 PR 更新**（30条待合并，20条已合并/关闭），形成近 **90个并发讨论线程**。项目刚发布 **v1.1.1-beta.1** 版本，处于快速迭代期。核心进展集中在：飞书/钉钉等 Channel 稳定性修复、文件操作回滚功能落地、品牌迁移（CoPaw → QwenPaw）带来的用户配置兼容性问题。社区对品牌更名存在明显分歧，但技术贡献热情未减。

---

## 2. 版本发布

### v1.1.1-beta.1 已发布
- **发布时间**：2026-04-13
- **更新内容**：
  - 文档更新：同步最新新闻动态（[#3287](https://github.com/agentscope-ai/QwenPaw/pull/3287)）
  - 品牌视觉：更新 IP Logo（[#3289](https://github.com/agentscope-ai/QwenPaw/pull/3289)）
  - 版本号升级至 `1.1.1b1`（[#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343) 已关闭的 beta.2 版本号 PR 显示团队可能在同日尝试更激进迭代）
- **破坏性变更**：无明确功能级 Breaking Change
- **迁移注意事项**：
  - ⚠️ 多名用户反馈从 CoPaw 升级至 QwenPaw 后，出现 `qwenpaw` 命令未找到、`.qwenpaw` 与 `.copaw` 目录并存、历史 agent/skill/workspace 数据仍留在旧目录等问题（[#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288)，[#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)）。建议维护者补充官方平滑迁移指南，明确 PATH 配置与数据目录映射关系。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #3343 | xieyxclack | 版本号升级至 1.1.1b2（已关闭，可能为 beta.1 的配套准备） | [PR #3343](https://github.com/agentscope-ai/QwenPaw/pull/3343) |
| #3341 | pan-x-c | **为所有 Provider 启用模型自动发现（Model Discovery）**，解决多个 Provider 下模型列表缺失问题 | [PR #3341](https://github.com/agentscope-ai/QwenPaw/pull/3341) |
| #3337 | hongxicheng | 钉钉 AI Card 模式支持媒体文件传输，并修复 base64 溢出导致消息发送失败的问题 | [PR #3337](https://github.com/agentscope-ai/QwenPaw/pull/3337) |
| #3335 | rayrayraykk | 新增 RESTful API 文档及小幅优化 | [PR #3335](https://github.com/agentscope-ai/QwenPaw/pull/3335) |
| #3164 | x1n95c | 优化浏览器启动策略与隐私模式处理，减少自动化检测信号 | [PR #3164](https://github.com/agentscope-ai/QwenPaw/pull/3164) |
| #3136 | Wesinqte | **修复 QQ/微信 Channel `stop()` 阻塞 asyncio 事件循环 8-10 秒的性能问题** | [PR #3136](https://github.com/agentscope-ai/QwenPaw/issues/3136) |
| #3088 | — | 智能体技能配置异常问题（已关闭） | [Issue #3088](https://github.com/agentscope-ai/QwenPaw/issues/3088) |
| #3075 | — | browser_visible 人机验证规避问题（已关闭） | [Issue #3075](https://github.com/agentscope-ai/QwenPaw/issues/3075) |
| #3265 | ltzu929 | 修复暗黑模式下置顶聊天按钮对比度过低 | [PR #3265](https://github.com/agentscope-ai/QwenPaw/issues/3265) |
| #3247 | LinWanCen | 取消智能体已选技能功能（已关闭） | [Issue #3247](https://github.com/agentscope-ai/QwenPaw/issues/3247) |
| #2931 | HackLinjiuyue | 新建 agent 后技能全选 Bug（已关闭） | [Issue #2931](https://github.com/agentscope-ai/QwenPaw/issues/2931) |
| #2852 | Tcc-magic | 飞书群聊引用文件无法识别问题（已关闭） | [Issue #2852](https://github.com/agentscope-ai/QwenPaw/issues/2852) |

**整体评估**：今日合并内容覆盖 **Channel 稳定性**（钉钉、QQ、微信、飞书）、**模型生态扩展**（Provider 自动发现）、**前端体验**（暗黑模式、浏览器策略）三大主线，项目在多平台集成健壮性上迈出实质性一步。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) Help Wanted: Open Tasks | **55 条** | 官方任务认领板，P0-P2 优先级公开招募贡献者，反映项目依赖社区共建的开放策略 |
| 2 | [#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288) CoPaw 怎么平滑升级到 QwenPaw | **23 条** | 品牌更名引发的最大用户焦虑：数据迁移、配置保留、记忆延续 |
| 3 | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) 会自动中断 | **8 条** | 批量处理大任务时 agent 中途"罢工"，用户已做分批和断点续传仍无效，指向长任务调度可靠性 |
| 4 | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) 关于更新的建议和 /approve 的更改建议 | **8 条** | 一键更新、/approve 按钮化、模型自动切换天梯、自我反思进化、跨端同步——集中体现用户对"低门槛+高智能"的期待 |
| 5 | [#2897](https://github.com/agentscope-ai/QwenPaw/issues/2897) vLLM 部署 qwen3.5-9B 不显示 think 后内容 | **7 条** | 推理内容（think）前端渲染问题，涉及 vLLM + Qwen 模型生态适配 |

### 高反应 Issue
- [#3336](https://github.com/agentscope-ai/QwenPaw/issues/3336) `qwenpaw-copaw 别折腾了`（👍 **3**）—— 一位小白用户直言品牌更名"不伦不类"，担忧阿里内部混乱导致产品烂尾，情绪代表相当一部分社区声音。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | 批量文件处理时 agent 自动中断，断点续传失效 | OPEN | 无 |
| 🔴 **高** | [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) | 飞书 Channel WebSocket 多 agent 环境下跨 loop RuntimeError 崩溃 | **CLOSED** | 已修复（当日关闭） |
| 🟡 **中** | [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) | 飞书消息无去重机制，一条消息被多次处理 | OPEN | 无 |
| 🟡 **中** | [#3342](https://github.com/agentscope-ai/QwenPaw/issues/3342) | 本地大模型管理状态识别不准，已删除模型仍显示可用，且无法删减 | **CLOSED** | 当日关闭 |
| 🟡 **中** | [#3323](https://github.com/agentscope-ai/QwenPaw/issues/3323) | 局域网部署 icon 找不到 | OPEN | 无 |
| 🟡 **中** | [#3317](https://github.com/agentscope-ai/QwenPaw/issues/3317) | Agent 创建的 memory 子目录未被索引，导致检索失效 | OPEN | [#3347](https://github.com/agentscope-ai/QwenPaw/pull/3347) 待审 |
| 🟡 **中** | [#3328](https://github.com/agentscope-ai/QwenPaw/issues/3328) | 控制台聊天页特定缩放级别出现额外侧边栏切换按钮 | OPEN | 无 |
| 🟢 **低** | [#3339](https://github.com/agentscope-ai/QwenPaw/issues/3339) | Ollama 局域网端点连接失败 | **CLOSED** | 当日关闭 |
| 🟢 **低** | [#3265](https://github.com/agentscope-ai/QwenPaw/issues/3265) | 暗黑模式置顶按钮对比度过低 | **CLOSED** | 已修复 |

---

## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 纳入可能性分析 |
|:---|:---|:---|
| **文件操作回滚**（误删恢复、覆盖撤销） | [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) + [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) | **高**。PR #3346 当日已提交，关联官方任务板 Task 6，预计进入 v1.1.1 正式版 |
| **Plan 模式**（结构化多步计划 /plan） | [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) | **高**。PR 已 Under Review 多日，是 AgentScope 核心能力向 CoPaw 产品化的关键功能 |
| **用户资产备份与迁移** | [#2457](https://github.com/agentscope-ai/QwenPaw/pull/2457) | **中高**。ZIP 导出/导入、自动备份、敏感字段脱敏，契合品牌迁移期的用户痛点 |
| **ACP 外部 Agent 委托** | [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) | **中高**。当日新 PR，实时工具输出管道 + 外部 agent 调用，架构级扩展 |
| **自定义 Agent ID** | [#3325](https://github.com/agentscope-ai/QwenPaw/issues/3325) | **中**。用户体验改进，HTTP API 调用友好，实现成本低 |
| **技能池同步状态可视化** | [#3327](https://github.com/agentscope-ai/QwenPaw/issues/3327) | **中**。前端体验优化，后端已有状态字段，开发成本可控 |
| **在线图片/视频直接查看** | [#3329](https://github.com/agentscope-ai/QwenPaw/issues/3329) | **中**。API 提供商已支持 URL，只需扩展 `view_media.py` |
| **并发对话与运行中追加消息** | [#2416](https://github.com/agentscope-ai/QwenPaw/issues/2416) | **中低**。架构改动较大，涉及对话流状态机重构 |
| **Agent 操作红色风险提醒** | [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349) | **中**。安全合规向需求，产品化必经之路 |
| **自动时间戳注入** | [#3268](https://github.com/agentscope-ai/QwenPaw/pull/3268) | **低-中**。首次贡献者 PR，需讨论是否作为默认行为 |

---

## 7. 用户反馈摘要

### 核心痛点
1. **品牌迁移混乱**：`qwenpaw` 命令找不到、`.copaw` 与 `.qwenpaw` 目录双轨并存、历史数据未自动迁移——这是今日最高频焦虑（[#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288)，[#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)）。
2. **长任务可靠性差**：批量处理 1500 个文件时 agent 中途停止，用户虽已做分批和断点续传仍无效（[#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377)）。
3. **Channel 稳定性**：飞书消息去重、群聊文件引用、QQ/微信阻塞等问题反复出现，企业场景部署信心受挫。
4. **模型管理粗糙**：本地 Ollama 模型删除后仍显示可用，且无法手动清理列表（[#3342](https://github.com/agentscope-ai/QwenPaw/issues/3342)）。

### 满意之处
- 有用户表示"一直在用，越用越顺"，认可 CoPaw 的产品价值（[#3336](https://github.com/agentscope-ai/QwenPaw/issues/3336)）。
- 开放任务板（[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)）降低了贡献门槛，社区共建氛围受认可。

### 产品期待
- **"傻瓜式"体验**：一键更新、自动切换模型天梯、跨端（浏览器↔QQ↔微信）无缝同步。
- **自我进化**：内置反思与经验总结，"越用越懂你"（[#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301)）。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃但尚未闭环，建议维护者优先关注：

| 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) Open Tasks | 2026-03-25 | 2026-04-13 | 社区贡献中枢，需持续维护任务状态，避免贡献者流失 |
| [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) Channel 测试基础设施 | 2026-03-29 | 2026-04-13 | Channel 质量问题的根因是测试覆盖不足，此 PR 是系统性解 |
| [#2416](https://github.com/agentscope-ai/QwenPaw/issues/2416) 并发对话 | 2026-03-27 | 2026-04-13 | 架构级需求，用户呼声高，但尚无 PR 对应 |
| [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) 自动中断 | 2026-03-27 | 2026-04-13 | 影响生产力场景的核心可靠性问题，已开放 17 天 |
| [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) 飞书去重 | 2026-03-13 | 2026-04-13 | 已开放 32 天，企业用户高频投诉 |
| [#1088](https://github.com/agentscope-ai/QwenPaw/pull/1088) Venice AI Provider | 2026-03-10 | 2026-04-13 | 首次贡献者 PR，已搁置 35 天，需明确是合并还是拒绝 |
| [#2177](https://github.com/agentscope-ai/QwenPaw/pull/2177) 默认记忆摘要 Cron | 2026-03-24 | 2026-04-13 | 首次贡献者 PR，已开放 21 天，记忆管理长期痛点 |

---

*日报基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-14

---

## 1. 今日速览

ZeroClaw 过去 24 小时保持**高度活跃**：Issues 更新 21 条（18 条新开/活跃，3 条关闭），PR 更新 50 条（28 条待合并，22 条已合并/关闭），无新版本发布。社区讨论集中在**安全策略漏洞、Matrix/邮件渠道稳定性、编译性能优化**三大主题。值得注意的是，今日出现 5 个 S0/S1 级别的严重 Bug（含 2 个安全漏洞），同时有多个性能优化 PR 密集提交，显示项目正处于"快速迭代+紧急修复"并行的阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展 |
|:---|:---|:---|
| [#2420](https://github.com/zeroclaw-labs/zeroclaw/pull/2420) | chumyin | **智能团队/子代理编排系统落地** — 实现 `agent teams` 与 `subagents` 的显式分离、热运行时配置，无需硬编码路由逻辑。这是核心架构层面的重大推进。 |
| [#5706](https://github.com/zeroclaw-labs/zeroclaw/pull/5706) | theonlyhennygod | **维护者名单清理** — 从 CODEOWNERS 和 CI 文档中移除离职成员 `SimianAstronaut7`，保障代码审查流程健康。 |

### 已关闭的重要 Issues

| Issue | 作者 | 进展 |
|:---|:---|:---|
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | LongCHN | **修复原生工具调度器的重复 assistant 消息问题** — 当模型返回叙述文本+工具调用时，不再向 provider 发送重复消息。 |
| [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268) | mmaryam2020 | **修复上下文压缩器丢失 `tool_call_id`** — 解决 DeepSeek 400 错误，长对话压缩后工具结果消息字段完整性得到保障。 |
| [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | sept-joe | **编译速度优化** — 二次开发场景下的增量编译效率问题已关闭。 |

**整体判断**：核心运行时（daemon/gateway）、安全策略、渠道稳定性均有实质推进，但 28 个待合并 PR 显示 review 带宽仍承压。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#4657 Matrix channel: friction tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 11 条 | **Matrix 渠道的" umbrella 追踪帖"**，汇总 v0.6.2 以来所有摩擦点（E2EE OTK 重试循环、媒体处理、提及过滤等）。社区将其视为 Matrix 支持成熟度的晴雨表，多个子问题已有竞争 PR 但作者不响应 review，反映**贡献者协调成本**是主要瓶颈。 |
| 🥈 | [#5125 CPU spikes when typing into agent chat](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | 4 条 | Firefox + Ubuntu 环境下输入即 CPU 飙升，标记为 **S0 严重**。用户持续补充复现细节，但暂无 fix PR，成为桌面用户体验的突出痛点。 |
| 🥉 | [#5584 Duplicate consecutive assistant messages](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | 4 条 | 已关闭。讨论围绕"叙述文本+工具调用"的边界情况，揭示了原生工具调度器与多模型兼容性的深层问题。 |

### 高价值待合并 PR

| PR | 核心诉求 |
|:---|:---|
| [#5602](https://github.com/zeroclaw-labs/zeroclaw/pull/5602) | Mattermost 渠道从 REST 轮询升级为 WebSocket，支持全频道+DM — 企业用户的高频诉求 |
| [#5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166) | Matrix 渠道功能补齐（提及过滤、MIME 媒体、加密媒体错误处理、TUI 配置保留）— 与 #4657 直接呼应 |
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) | **WASM 插件系统+安全沙箱** — 社区期待已久的扩展机制，避免核心代码分叉 |

---

## 5. Bug 与稳定性

按严重程度排列，标注 fix PR 状态：

| 级别 | Issue | 标题 | 状态 |
|:---|:---|:---|:---|
| **S0** | [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | Firefox/Ubuntu 输入 agent chat 时 CPU 多核飙升 | 🔴 **无 fix PR** |
| **S0** | [#5698](https://github.com/zeroclaw-labs/zeroclaw/issues/5698) | 白名单解释器（python3/node/pip/npm/cargo）通过 `-c/-e/install` 绕过命令策略 | 🟡 **有 fix PR [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702)** |
| **S0** | [#5692](https://github.com/zeroclaw-labs/zeroclaw/issues/5692) | 工作目录文件创建因权限声明错误被拒绝 | 🔴 **无 fix PR** |
| **S1** | [#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) | Telegram 渠道返回原始 `tool_calls` JSON 或空结果 | 🔴 **无 fix PR** |
| **S1** | [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) | `skills.allow_scripts = true` 时技能仍被阻止 | 🔴 **无 fix PR** |
| **S1** | [#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685) | CLI channel factory 未注册导致 agent 模式崩溃 | 🔴 **无 fix PR** |
| **S2** | [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon systemd 服务开机自启，与手动运行端口冲突 | 🔴 **无 fix PR** |
| **S3** | [#5687](https://github.com/zeroclaw-labs/zeroclaw/issues/5687) | rust-analyzer 报错影响开发体验 | 🔴 **无 fix PR** |
| **S3** | [#5683](https://github.com/zeroclaw-labs/zeroclaw/issues/5683) | 官网 skills 页面 typo：`zeroclaw skill install` 应为 `zeroclaw skills install` | 🔴 **无 fix PR** |

**关键观察**：今日新报 3 个 S0 级别问题，其中 [#5698](https://github.com/zeroclaw-labs/zeroclaw/issues/5698) 是**安全策略的明显漏洞**（默认白名单解释器的危险参数未校验），作者同日提交了 fix PR [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702)，响应迅速。但另外 2 个 S0 和 3 个 S1 暂无修复，稳定性风险积聚。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能方向 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | 为 Ollama Cloud、智谱、Kimi、MiniMax 添加订阅原生 OAuth | ⭐⭐⭐⭐ 高 — 与现有 3 家 provider 的 OAuth 模式一致，需求明确 |
| [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | Pre/post message hooks（内存、日志、上下文注入） | ⭐⭐⭐ 中 — 架构改动较大，但社区呼声持续 |
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) | WASM 插件系统+安全沙箱 | ⭐⭐⭐⭐⭐ 极高 — 已提交 PR，被多次引用为"避免分叉"的关键方案 |
| [#5701](https://github.com/zeroclaw-labs/zeroclaw/issues/5701) / [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) | Session 重置/删除工具 + `clear_messages` trait 方法 | ⭐⭐⭐⭐ 高 — PR 已提交，解决会话管理的明确缺失 |
| [#5661](https://github.com/zeroclaw-labs/zeroclaw/pull/5661) | Cron 功能补齐（CLI delivery flags、announce、bounds） | ⭐⭐⭐⭐ 高 — 同一作者持续迭代，功能边界清晰 |
| [#5686](https://github.com/zeroclaw-labs/zeroclaw/issues/5686) | QQ 消息命令文档补充 | ⭐⭐ 低 — 纯文档，但反映中文社区渠道覆盖诉求 |

**路线图信号**：v0.7.0 质量 RFC [#5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653) 提出"Zero Compromise"生产就绪标准，可能使部分新功能进入更严格的准入流程。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实声音：

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"Matrix 加密房间完全不可用"** — E2EE OTK 重试循环导致加密房间崩溃，是 v0.6.2 以来的老问题 | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 😤 沮丧 |
| **"Docker  onboarding 选本地 AI  provider 得到 localhost URL，根本连不上"** | [#5552](https://github.com/zeroclaw-labs/zeroclaw/pull/5552) | 😤 沮丧 |
| **"翻译文档里的 install.sh 参数已经不存在了，跟着走会失败"** | [#5679](https://github.com/zeroclaw-labs/zeroclaw/issues/5679) | 😕 困惑 |
| **"编译太慢，改一行代码要等很久"** | [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | 😤 沮丧（已关闭） |
| **"ClawGuard 扫出 188 个安全问题，其中 66 个 Critical"** | [#5709](https://github.com/zeroclaw-labs/zeroclaw/issues/5709) | 😰 担忧 |
| **"官网 skills 页面的命令复制下来直接报错，少了个 s"** | [#5683](https://github.com/zeroclaw-labs/zeroclaw/issues/5683) | 😕 困惑 |

**满意度亮点**：上下文压缩器修复 [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268) 和工具调度器修复 [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) 获得快速关闭，显示核心运行时问题的响应效率在提升。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃但尚未关闭，提醒维护者优先关注：

| 项目 | 创建时间 | 最后更新 | 风险提示 |
|:---|:---|:---|:---|
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 2026-03-25 | 2026-04-13 | **Matrix 渠道成熟度追踪帖**，已存在 20 天。多个子项有竞争 PR 但作者不响应 review，可能拖累 v0.7.0 发布。 |
| [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | 2026-03-29 | 2026-04-13 | **S0 严重 Bug**，16 天无 fix PR，直接影响桌面端核心交互体验。 |
| [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | 2026-03-16 | 2026-04-13 | **Pre/post message hooks**，近 1 个月，架构级功能请求，若纳入 roadmap 需尽快给出设计反馈。 |
| [#5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166) | 2026-04-02 | 2026-04-13 | **Matrix 功能补齐 PR**，与 #4657 强关联，已存在 11 天，亟待 review 以避免与后续改动冲突。 |
| [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) | 2026-04-08 | 2026-04-13 | **配置 schema 版本化（V1→V2 迁移）**，6 天前提交，属于破坏性变更窗口期的关键 PR，延迟合并将增加迁移成本。 |

---

**日报结语**：ZeroClaw 今日展现出强劲的功能推进势头（编排系统、WASM 插件、渠道升级），但 **S0/S1 Bug 的修复速度落后于报告速度**，安全扫描结果 [#5709](https://github.com/zeroclaw-labs/zeroclaw/issues/5709) 也增添了不确定性。建议维护者在接下来 48 小时内集中 review 安全修复 PR [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702) 和配置迁移 PR [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517)，以稳固项目健康度。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*