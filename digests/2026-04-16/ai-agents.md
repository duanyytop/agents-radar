# OpenClaw 生态日报 2026-04-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-16 00:17 UTC

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

# OpenClaw 项目动态日报 | 2026-04-16

---

## 1. 今日速览

OpenClaw 社区今日保持极高活跃度，24 小时内 Issues 与 PR 各更新 **500 条**，形成近期罕见的讨论高峰。项目发布了 **v2026.4.15-beta.1**，重点补强 Control UI 的模型认证可观测性。然而，**v2026.4.14 引入的 onboarding 崩溃问题（`Cannot read properties of undefined (reading 'trim')`）正在大规模爆发**，成为当前最严重的稳定性威胁，多个相关 Issue 在 24 小时内集中涌现。PR 侧待合并积压达 **362 条**，合并/关闭 **138 条**，社区贡献活跃但维护吞吐面临压力。

---

## 2. 版本发布

### [v2026.4.15-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15-beta.1)

| 属性 | 内容 |
|:---|:---|
| **版本名** | OpenClaw 2026.4.15-beta.1 |
| **类型** | Beta 预发布 |
| **核心变更** | Control UI / Overview 新增 **Model Auth 状态卡片** |

**详细更新：**
- 在 Control UI 的 Overview 页面新增模型认证状态卡片，可一目了然查看 OAuth token 健康度及提供商速率限制压力
- 当 OAuth token 即将过期或已过期时，会触发醒目的 attention callout
- 后端由新的 `models.authStatus` gateway 方法支撑，该方法会脱敏处理凭据并将结果缓存 60 秒

**破坏性变更：** 无已知破坏性变更。

**迁移注意事项：** 从 v2026.4.14 升级的用户需特别关注 onboarding 崩溃问题（见第 5 节），建议等待相关 hotfix 后再升级生产环境。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#66378** | athletesofthereef | **WhatsApp 媒体发送修复**：绕过 legacy outbound send 依赖路径，修复媒体发送回归问题，并补充回归测试 | [PR #66378](https://github.com/openclaw/openclaw/pull/66378) |
| **#66331** | acwilan | ** per-agent TTS/STT 覆盖配置**：打破全局语音配置限制，支持多 agent 场景下按 agent 配置语音合成与识别参数 | [PR #66331](https://github.com/openclaw/openclaw/pull/66331) |
| **#43961** | happydog-intj | **网关优雅关闭强化**：当 SIGTERM 10 秒超时后旧进程仍未退出时，自动追加 SIGKILL，解决重启时的端口占用与僵尸进程问题 | [PR #43961](https://github.com/openclaw/openclaw/pull/43961) |
| **#59619** | MoerAI | **飞书语音消息修复**：TTS 音频由文件附件改为语音消息气泡发送，修复 `audioAsVoice` 标志未透传问题 | [PR #59619](https://github.com/openclaw/openclaw/pull/59619) |
| **#67437** | MoerAI | **BlueBubbles 附件获取重试**：当 Private API 关闭时，webhook 附件数组为空会导致漏收图片，新增重试逻辑 | [PR #67437](https://github.com/openclaw/openclaw/pull/67437) |
| **#67025** | ly85206559 | **setup-runtime 插件 HTTP 路由注册修复**：延迟加载的插件此前使用 noop `registerHttpRoute`，现改为完整激活后重新绑定真实实现 | [PR #67025](https://github.com/openclaw/openclaw/pull/67025) |

**整体推进评估：** 今日合并的 PR 覆盖了**渠道稳定性（WhatsApp、飞书、BlueBubbles）、语音能力、网关可靠性、插件生命周期**等关键领域，属于高质量的维护性推进。但 onboarding 崩溃的紧急修复 PR 尚未见合并，是当前的明显短板。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 状态 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| **#49971** — RFC: Native Agent Identity & Trust Verification | **89** | 🟡 OPEN | **去中心化身份与信任验证**：由 MolTrust 提出，结合 ERC-8004、W3C DID/VC 标准，希望为 OpenClaw agent 建立原生身份层。讨论深度涉及加密学架构，但暂无官方回应。 | [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) |
| **#45064** — Memory Leak / OOM on basic commands | **31** | 🔴 CLOSED | v2026.3.12 的内存泄漏导致 CLI 完全不可用，今日关闭，说明该版本问题已得到处理。 | [Issue #45064](https://github.com/openclaw/openclaw/issues/45064) |
| **#25592** — Text between tool calls leaks to messaging channels | **19** | 🟡 OPEN | **工具调用中间文本泄露**：agent 在工具调用之间产生的内部处理文本被路由到 Slack/iMessage 等渠道，严重破坏 UX。已有相关修复 PR #65508 处理 `tool_call` XML 标签泄露。 | [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) |
| **#34830** — 401 missing authentication header (OpenRouter) | **19** | 🟡 OPEN | OpenRouter 认证头回归问题，影响基础模型调用，用户反复确认 API key 无误。 | [Issue #34830](https://github.com/openclaw/openclaw/issues/34830) |
| **#35220** — Codex Responses API streaming server_error 不触发 fallback | **15** | 🟡 OPEN | OpenAI Codex 流式响应中的 `server_error` 未触发模型降级，与 #24378 同源。 | [Issue #35220](https://github.com/openclaw/openclaw/issues/35220) |

### 高反应 Issues（👍 数）

| Issue | 👍 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#66718** | **7** | `openclaw configure` 在 Channels 段崩溃（`trim` 错误），影响面极广 | [Issue #66718](https://github.com/openclaw/openclaw/issues/66718) |
| **#66674** | **6** | `openai-codex/gpt-5.4` CLI 推理返回 HTML 错误却被包装为 "DNS lookup failed" | [Issue #66674](https://github.com/openclaw/openclaw/issues/66674) |
| **#20562** | **6** | 功能请求：新增 Serper.dev 作为 `web_search` 提供商（Brave 已取消免费层） | [Issue #20562](https://github.com/openclaw/openclaw/issues/20562) |
| **#66633** | **5** | openai-codex 升级 2026.4.14 后全量请求触发 Cloudflare 403 | [Issue #66633](https://github.com/openclaw/openclaw/issues/66633) |
| **#66641** | **5** | 安装程序在 "Select channel (QuickStart)" 后必现 `trim` 崩溃 | [Issue #66641](https://github.com/openclaw/openclaw/issues/66641) |

**热点分析：** 社区核心诉求集中在两类——**一是 v2026.4.14 的 onboarding/configure 崩溃正在阻断新用户入门**；**二是 OpenAI Codex / OpenRouter 等主流提供商的认证与降级链路出现多处回归**，直接影响现有用户的日常可用性。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 现象 | 是否有 Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **P0 — 阻断新用户** | **#66718 / #67291 / #67353 / #66641 / #67074 / #67347** | `openclaw onboard` / `openclaw configure` 在 Channels 步骤必现 `TypeError: Cannot read properties of undefined (reading 'trim')`，无论选择渠道或 Skip 都无法绕过 | 🟡 **#67130** 已关闭（"bundled setup plugin meta is incomplete"），但仍有大量用户报告相同错误，说明修复可能未覆盖全部场景或尚未进入稳定版 | [Issue #66718](https://github.com/openclaw/openclaw/issues/66718) |
| **P0 — 提供商阻断** | **#66633** | 2026.4.14 升级后 `openai-codex` 全量请求遭 Cloudflare 403 拦截 | 🔴 暂无明确 PR | [Issue #66633](https://github.com/openclaw/openclaw/issues/66633) |
| **P1 — 提供商降级失效** | **#66674** | `openai-codex/gpt-5.4` 直接 CLI 推理失败，原始 HTML 错误被误报为 "DNS lookup failed" | 🔴 暂无明确 PR | [Issue #66674](https://github.com/openclaw/openclaw/issues/66674) |
| **P1 — 认证回归** | **#34830** | OpenRouter 401 missing authentication header，v2026.3.2 引入的回归 | 🔴 暂无明确 PR | [Issue #34830](https://github.com/openclaw/openclaw/issues/34830) |
| **P1 — UI 回归** | **#67035** | Windows 版 2026.4.14 聊天 UI 严重退化：输入文字被吞、流式回复不可见、打字指示器闪烁后空白 | 🔴 暂无明确 PR | [Issue #67035](https://github.com/openclaw/openclaw/issues/67035) |
| **P1 — UI 体验** | **#66207** | Control UI 聊天中用户刚发送的消息会短暂消失 1-2 秒后重现 | 🔴 暂无明确 PR | [Issue #66207](https://github.com/openclaw/openclaw/issues/66207) |
| **P2 — 崩溃** | **#67261** | Venice 模型返回缺少 `id`/`status` 导致崩溃：`Cannot read properties of undefined (reading 'id')` | 🔴 已关闭，但需确认修复是否进入主线 | [Issue #67261](https://github.com/openclaw/openclaw/issues/67261) |
| **P2 — 行为异常** | **#67288** | `amazon-bedrock-mantle` 每次请求都执行 IAM token discovery，缺少 `config.discovery.enabled` 开关 | 🔴 暂无明确 PR | [Issue #67288](https://github.com/openclaw/openclaw/issues/67288) |
| **P2 — 分类错误** | **#67377** | Cron 运行分类器将成功摘要误判为 `status=error` | 🔴 暂无明确 PR | [Issue #67377](https://github.com/openclaw/openclaw/issues/67377) |

**稳定性健康度评估：** ⚠️ **中高风险**。v2026.4.14 的 onboarding 崩溃已形成**用户入门阻断事件**，且 Codex 提供商链路与 Windows UI 出现多处回归。虽然今日有若干渠道/网关修复合并，但**缺乏针对当前最热问题的紧急 hotfix PR 合并**。

---

## 6. 功能请求与路线图信号

| Issue/PR | 内容 | 纳入下一版本可能性 | 链接 |
|:---|:---|:---|:---|
| **#49971** — Agent Identity & Trust Verification (ERC-8004/DID/VC) | 原生去中心化身份与信任层 | 中低 — 架构宏大，需长期 RFC 评审 | [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) |
| **#20562** — Serper.dev web_search provider | 替代 Brave Search 的实时 Google 搜索 | **高** — Brave 已取消免费层，用户付费迁移压力大，需求紧迫且边界清晰 | [Issue #20562](https://github.com/openclaw/openclaw/issues/20562) |
| **#28930** — Memory v2: Associative Traversal, Salience Weighting, Access-Based Forgetting | 由运行中的 AI agent 提出的内存系统改进 | 中 — 来自真实长期运行场景，但涉及核心架构改动 | [Issue #28930](https://github.com/openclaw/openclaw/issues/28930) |
| **#34400** — memory_search 递归子目录搜索 | 支持 `memory/**/*.md` 模式 | 中高 — 需求明确，实现范围小 | [Issue #34400](https://github.com/openclaw/openclaw/issues/34400) |
| **#35071** — Eval Framework for skill-creator | 为技能开发者提供测试、基准与触发分析 CLI | 中高 — PR 已存在且结构完整，等待评审 | [PR #35071](https://github.com/openclaw/openclaw/pull/35071) |
| **#28106** — Agent-to-Agent Task Delegation Protocol | 去中心化 agent 经济协议 | 低 — 长期愿景型，社区兴趣有限 | [Issue #28106](https://github.com/openclaw/openclaw/issues/28106) |
| **#66168** — MCP Apps protocol extension | 网关 MCP 工具/资源/UI 元数据协议扩展 | **高** — XL 级 PR 已存在，由核心贡献者推动，与生态扩展战略高度相关 | [PR #66168](https://github.com/openclaw/openclaw/pull/66168) |

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 Issue | 场景 |
|:---|:---|:---|
| **"完全无法完成最基础任务"** | [#67237](https://github.com/openclaw/openclaw/issues/67237) | 用户描述 agent 频繁出现关键错误、自我覆盖配置、或彻底失败，对可靠性极度失望 |
| **安装/配置即崩溃，入门门槛陡增** | #66718, #67291, #67074, #67347 等 | 大量新用户在 onboarding 第一步就被 `trim` 错误挡在门外 |
| **Windows 体验明显劣化** | [#67035](https://github.com/openclaw/openclaw/issues/67035) | 输入不可见、回复不渲染，怀疑"不是简单的模型慢" |
| **提供商错误信息误导严重** | [#66674](https://github.com/openclaw/openclaw/issues/66674) | HTML 返回被包装成 DNS 错误，极大增加排查成本 |
| **Brave 搜索免费层取消后无平价替代** | [#20562](https://github.com/openclaw/openclaw/issues/20562) | 现有搜索能力成本骤增 |

### 满意/亮点

- **多 agent 语音隔离配置**（PR #66331）受到多语言/多角色用户期待
- **Control UI 认证状态卡片**（v2026.4.15-beta.1）被视作运维可观测性的正向补充
- 有 **AI agent 自身作为用户**（[#28930](https://github.com/openclaw/openclaw/issues/28930) 中的 Brian）参与内存系统改进讨论，体现社区独特性

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR（提醒维护者关注）

| 项目 | 创建时间 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#49971** — RFC: Native Agent Identity & Trust Verification | 2026-03-18 | 2026-04-15 | 高讨论量（89 评论）但 **0 官方回应**，可能流失生态合作伙伴兴趣 | [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) |
| **#25592** — Text between tool calls leaks to messaging channels | 2026-02-24 | 2026-04-15 | 标记 stale 但持续活跃，**PR #65508 仅覆盖 XML 标签泄露**，未解决文本本身路由问题 | [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) |
| **#35181** — node-llama-cpp 预编译二进制缺失，GPU 回退 | 2026-03-05 | 2026-04-15 | Windows 本地部署高频问题，影响离线/隐私优先用户 | [Issue #35181](https://github.com/openclaw/openclaw/issues/35181) |
| **#43419** — `npm install -g openclaw` 因 Git 依赖失败 | 2026-03-11 | 2026-04-15 | **安装基础设施问题**，阻断无 Git 环境用户 | [Issue #43419](https://github.com/openclaw/openclaw/issues/43419) |
| **#35071** — Eval Framework for skill-creator | 2026-03-04 | 2026-04-16 | PR 已存在超 6 周，技能生态急需测试工具 | [PR #35071](https://github.com/openclaw/openclaw/pull/35071) |
| **#65554** — Media support v2 (WebChat 完整媒体套件) | 2026-04-12 | 2026-04-16 | XL 级 PR，覆盖图像/音频/视频/文档全格式，但评审进度不明 | [PR #65554](https://github.com/openclaw/openclaw/pull/65554) |

---

**日报生成时间：** 2026-04-16  
**数据来源：** github.com/openclaw/openclaw

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**分析日期：2026-04-16**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**功能爆发与质量债务并行的高峰期**。头部项目（OpenClaw、ZeroClaw、CoPaw）日均处理 40-100 条 PR/Issue，迭代速度接近商业产品团队；中腰部项目（Moltis、NanoBot、Hermes Agent）则在快速响应社区痛点与清理技术债务之间寻找平衡。整体技术焦点从"多模型接入"转向"多 Agent 协作、MCP 生态集成、生产级部署隔离"，但**新用户 onboarding 体验、Web UI 稳定性、文档与构建可复现性**成为跨项目的共同瓶颈，部分项目已出现社区信任分化信号。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Release | 健康度评估 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.4.15-beta.1 | ⚠️ **中高风险** — 活跃度断层领先，但 onboarding 崩溃（P0）与 Codex 提供商回归未解，维护吞吐承压 |
| **NanoBot** | 17 | 46 | 无 | ✅ **良好** — 高动能，性能优化进入规范化拆分阶段，仅 1 个 P0 升级回归待响应 |
| **Hermes Agent** | 50 | 50 | 无 | ✅ **良好** — 稳定性修复速度超过引入速度，多代理架构里程碑收官，基础设施 hardened 扎实 |
| **PicoClaw** | 7 | 26 | v0.2.6-nightly | ✅ **良好** — delegate 工具与 MCP slash 命令落地，核心能力演进清晰，cron 定时任务阻塞待修 |
| **NanoClaw** | 5 | 17 | 无 | ⚠️ **中等** — 架构级 PR（7 层 scope expansion、Vercel AI SDK 多 provider）密集，但 setup/mount 体验债务突出 |
| **NullClaw** | 9 | 8 | 无 | ⚠️ **中等偏下** — 历史积压有所清理，但 Zig 0.16 迁移、http_request 失效、OTel 中断等基础问题悬置 |
| **IronClaw** | 17 | 50 | 无 | ⚠️ **中高风险** — 代码流动极快，但 P0 Secret 扫描安全漏洞、Dashboard 循环刷新、消息输入消失等 Web 质量风暴眼未解 |
| **LobsterAI** | 3 | 27 | 无 | ✅ **良好（开发侧）/ ⚠️ 中等（社区侧）** — PR 吞吐量极高，IM 集成与 OpenClaw 运行时持续优化，但 Issues 零关闭、用户反馈零官方回应 |
| **Moltis** | 7 | 20 | 无 | ✅ **优秀** — 15/20 PR 合并，6/7 Issue 24h 内闭环，响应速度为生态最佳 |
| **CoPaw** | 50 | 50 | v1.1.2-beta.1 + v1.1.1.post1 | ✅ **良好** — Mission Mode 等重大功能落地，版本迭代紧凑，但上下文黑盒、文件管理缺陷、品牌命名混淆待修 |
| **ZeroClaw** | 50 | 41 | 无 | ⚠️ **高风险** — 功能迭代快但技术债务累积，Web Dashboard 长期不可用、社区信任危机（#2691，👍 9）已至临界点 |
| **TinyClaw** | — | — | — | ❌ 无活动 |
| **ZeptoClaw** | — | — | — | ❌ 无活动 |

---

## 3. OpenClaw 在生态中的定位

### 优势
- **绝对规模领先**：24h 内 500 Issues + 500 PRs，社区体量约为第二名（ZeroClaw/CoPaw）的 10 倍，生态网络效应最强。
- **渠道覆盖最全**：WhatsApp、飞书、BlueBubbles、Discord、Slack、iMessage 等修复并行，是企业 IM 集成的"事实标准参考"。
- **可观测性先行**：Control UI Model Auth 状态卡片、OAuth token 健康度监控等运维能力领先同类。

### 技术路线差异
- **重运行时、重网关**：OpenClaw 的核心复杂度集中在 gateway 层与 channel 适配，对比 NanoClaw 的"poll-loop + Vercel AI SDK"轻量架构、NullClaw 的 Zig 原生实现，OpenClaw 选择 Node.js/TypeScript 全栈堆叠，牺牲启动性能换取生态兼容性。
- **渐进式演进**：无 Microkernel 或 7 层 scope expansion 等激进架构重构，而是通过高频小版本（beta.1 节奏）持续迭代。

### 社区规模对比
| 维度 | OpenClaw | 最接近竞品 | 差距 |
|:---|:---|:---|:---|
| 日 Issues | 500 | ZeroClaw/CoPaw (50) | **10x** |
| 日 PRs | 500 | ZeroClaw (41) / NanoBot (46) | **10x** |
| 渠道修复密度 | 3+ 渠道/日 | 1-2 渠道/日 | **3-5x** |
| 待审 PR 积压 | 362 | IronClaw (43) / ZeroClaw (34) | **8-10x** |

> **关键风险**：规模优势正在转化为维护瓶颈。362 条待合并 PR 与 onboarding P0 崩溃的"无 hotfix"状态形成反差，若核心稳定性问题持续，用户可能向 Moltis、NanoBot 等"响应更快"的项目迁移。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|:---|:---|:---|
| **MCP 生态集成与容错** | Moltis、IronClaw、CoPaw、PicoClaw | Moltis #732/733（MCP 健康检查误报）、IronClaw #2087（Notion MCP 致 Agent 无响应）、PicoClaw #2535（MCP slash 命令）、CoPaw 语义 skill 路由 — 共同指向"降低 MCP 接入门槛+提升运行时容错" |
| **多 Agent 协作/委托** | Hermes Agent、PicoClaw、CoPaw、NanoClaw | Hermes #344（多代理架构收官）、PicoClaw #2531（delegate 工具）、CoPaw #3364（Mission Mode）、NanoClaw #1786（7 层 scope expansion）— 从"单轮对话"向"长期自主执行+Agent 间委托"跃迁 |
| **本地/开源模型接入体验** | NanoBot、PicoClaw、NullClaw、CoPaw | NanoBot #3186（LM Studio 一级支持）、PicoClaw #28（LM Studio 一键连接）、NullClaw #820（Debian 安装 Zig 文档）、CoPaw v1.1.1.post1（Ollama 修复）— 降低非 OpenAI 依赖的部署门槛 |
| **上下文/记忆管理可视化与压缩** | CoPaw、Moltis、OpenClaw | CoPaw #3426/#3411（token 用量可视化+自动压缩）、Moltis #728（LLM 引导 memory_forget）、OpenClaw #28930（Memory v2）— 长对话场景下的成本与性能可控性 |
| **生产级部署隔离** | Hermes Agent、IronClaw、NanoClaw、ZeroClaw | Hermes #10570（HERMES_HOME 隔离）、IronClaw #2421（DB 化跨用户授权）、NanoClaw #1785（单 channel 失败不拖垮服务）、ZeroClaw #5773/5779（Shell 权限分级）— 多租户/多实例安全边界 |
| **Web UI 稳定性与 onboarding** | OpenClaw、IronClaw、ZeroClaw、LobsterAI | OpenClaw #66718（configure 崩溃）、IronClaw #2410/#2409（Dashboard 刷新/消息消失）、ZeroClaw #4866（Dashboard 不可用）、LobsterAI #1693（未配置模型时输入丢失）— 新用户入门体验是跨项目最大漏斗 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业 IM 集成、多渠道稳定性、Control UI 可观测性 | 需要"开箱即用"多平台 AI 助手的团队/开发者 | Node.js/TS 全栈，gateway 中心化，插件化扩展 |
| **NanoBot** | 性能优化、本地 LLM 友好、渠道扩展 | 个人开发者、轻量部署场景 | 模块化设计，LM Studio/MiniMax 原生支持，拆分式 PR 治理 |
| **Hermes Agent** | 多代理架构、Docker/企业部署、终端/Web 双交互 | 追求 Claude Artifacts 竞品体验的技术用户 | 从单代理向编排/协作演进，HERMES_HOME 多实例隔离 |
| **PicoClaw** | 多 Agent 委托、MCP 生态、Web 前端体验 | 需要灵活交互（/btw、delegate）的进阶用户 | delegate 工具先行，React 前端独立演进 |
| **NanoClaw** | 架构激进扩展（scope expansion、多 provider）、容器化 agent | 构建复杂自动化工作流的企业开发者 | Vercel AI SDK 多 provider，poll-loop runtime，mount 权限模型 |
| **NullClaw** | Zig 原生性能、Signal/隐私优先渠道 | 对内存占用与可审计性敏感的用户 | Zig 全栈，静态编译，shell/git 安全沙盒 |
| **IronClaw** | V2 引擎、多租户权限、CI/发布基础设施 | NEAR 生态开发者、需要共享 Agent 的平台用户 | Rust/Elixir 混合，DB 化 scope grants，Engine V2 沙盒 |
| **LobsterAI** | 网易内部产品矩阵集成（有道龙虾/智企帝王蟹）、Copilot 生态 | 中国企业用户、网易生态使用者 | 基于 OpenClaw 运行时二次开发，IM 集成深度定制 |
| **Moltis** | 协议兼容性（MCP/Matrix/WhatsApp/Gemini）、内存智能管理 | 生产环境 headless/API-first 部署用户 | Rust 全栈，GraphQL/WebSocket 双 API，LLM 引导 memory_forget |
| **CoPaw** | 自主迭代任务（Mission Mode）、Qwen 生态、开发者工具链 | 中文开发者、需要长期运行 Agent 的平台用户 | Python 为主，Mission Mode 自主 harness，Agent 模板 CLI |
| **ZeroClaw** | 功能覆盖广度（Channel/Provider/Skill/Memory）、安全管控 | 愿意深度定制的技术极客 | 单体 Rust 架构，Microkernel RFC 讨论中，编译性能债务显著 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（高动能，功能扩张为主）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 日 1000 条更新，beta 版本高频发布 | 维护瓶颈，P0 稳定性问题响应滞后 |
| **CoPaw** | Mission Mode、路由策略、SIP 语音并行推进 | 产品体验债务（setup、文件管理、命名混淆） |
| **NanoClaw** | 7 层 scope expansion、Vercel AI SDK 多 provider 即将 landing | 地基体验（mount、setup）与新用户漏斗 |
| **IronClaw** | V2 引擎、权限系统、CI 基础设施密集更新 | P0 Web 缺陷与安全漏洞未解，XL PR 积压 |

### 质量巩固阶段（修复速度 > 引入速度）
| 项目 | 特征 | 机会 |
|:---|:---|:---|
| **Moltis** | 24h Issue 闭环率 86%，PR 合并率 75% | 可作为"响应速度标杆"吸引流失用户 |
| **Hermes Agent** | 多代理架构收官，配置隔离与 Docker 兼容性 hardened | 企业部署信任度提升窗口期 |
| **NanoBot** | 性能优化 PR 规范化拆分，LM Studio/MiniMax 接入落地 | 本地 LLM 友好型定位强化 |
| **PicoClaw** | delegate 工具、MCP slash 命令等核心能力清晰 | 需补齐 LM Studio 接入与 cron 稳定性 |

### 停滞/转型风险区
| 项目 | 特征 | 建议 |
|:---|:---|:---|
| **ZeroClaw** | Dashboard 19 天不可用，社区信任危机高赞 | 短期必须设立"社区响应 SLA"与"Dashboard 攻坚" |
| **NullClaw** | Zig 0.16 迁移阻塞，核心功能（http_request、OTel）回归 | 需明确迁移时间表，或接受用户向 PicoClaw/Moltis 迁移 |
| **LobsterAI** | 开发引擎全速，但 Issues 零关闭、零官方回应 | 建立社区支持轮值机制，避免"有代码无温度" |
| **TinyClaw / ZeptoClaw** | 24h 无活动 | 可能已停止维护或处于极早期休眠 |

---

## 7. 值得关注的趋势信号

### 信号 1：MCP 正从"实验协议"变为"生产阻塞点"
- **证据**：Moltis #732/733（MCP 健康检查误报）、IronClaw #2087（Notion MCP 致 Agent 无响应）、PicoClaw #2535（MCP slash 命令）。
- **价值**：AI 智能体开发者应将 MCP 服务器的认证容错、工具 schema 兼容性、状态可观测性纳入核心路线图，而非视为边缘功能。

### 信号 2："上下文黑盒"与成本焦虑催生记忆管理创新
- **证据**：CoPaw #3426（token 用量可视化）、Moltis #728（LLM 引导 memory_forget）、OpenClaw #28930（Memory v2 关联遍历）。
- **价值**：长运行 Agent 的竞争力将从"能记住多少"转向"能主动遗忘什么"，salience weighting 与访问驱动遗忘将成为差异化焦点。

### 信号 3：本地/开源模型接入体验决定用户基数天花板
- **证据**：NanoBot #3186（LM Studio 一级支持）、PicoClaw #28（LM Studio 一键连接，64 天未回应）、CoPaw Ollama 热修复。
- **价值**：支持列表中的"✅ Ollama"已不够，用户要求"一键连接、无需假密钥、自动发现模型"。本地模型友好度将成为个人助手项目的核心护城河。

### 信号 4：多 Agent 协作从"愿景"进入"基础设施竞赛"
- **证据**：Hermes Agent #344（多代理架构收官）、PicoClaw #2531（delegate 工具）、CoPaw #3364（Mission Mode）、NanoClaw #1786（scope expansion）。
- **价值**：2026 年 Q2 是"Agent 编排协议"（delegate/ACP/Mission Mode）的定型窗口，落后者将面临生态锁定风险。

### 信号 5：社区信任与响应速度成为比功能数量更重要的留存因子
- **证据**：Moltis 86% Issue 闭环率 vs. ZeroClaw #4866 19 天无修复、LobsterAI 零官方回应、OpenClaw 362 PR 积压。
- **价值**：在功能同质化加剧的背景下，"问题多久被看见、多久有进展"正成为开发者选择开源 Agent 框架的首要决策依据。

---

*报告完*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-16

---

## 1. 今日速览

NanoBot 今日社区活跃度极高，过去24小时内 **46 个 PR** 和 **17 个 Issues** 产生更新，是近期罕见的密集迭代日。核心进展集中在 **性能优化、稳定性修复和渠道扩展** 三大方向：mohamed-elkholy95 将一份大型综合 PR #3158 拆分为 6 个独立子 PR 推进，chengyongru 重启了 MyTool 自检查功能的合并流程，T3chC0wb0y 正在将 Microsoft Teams 渠道重新整合到 nightly 分支。Issues 侧出现一例 **v0.1.5 → v0.1.5.post1 的升级回归**（#3190），需维护者优先响应。整体项目健康度良好，但待合并 PR 积压达 28 个，合并带宽是潜在瓶颈。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#3158** → 拆分为 6 个子 PR | mohamed-elkholy95 | 原综合性能优化 PR 被关闭，拆分为 #3180~#3184 及 #3187 独立推进，涵盖队列边界、缓存、Profiling、流式优先、API 上传安全等 | [PR #3158](https://github.com/HKUDS/nanobot/pull/3158) |
| **#3186** | sohamb117 | **LM Studio 一级支持** + 允许 `apiKey: null`，解决本地 LLM 用户需填假密钥的痛点 | [PR #3186](https://github.com/HKUDS/nanobot/pull/3186) |
| **#3160** | Aisht669 | 新增 **MiniMax Anthropic 兼容端点**，支持 `reasoning_effort` 思考模式 | [PR #3160](https://github.com/HKUDS/nanobot/pull/3160) |
| **#3178** | LeoFYH | 修复 Discord handler 中重复的 `channel_id` 赋值 | [PR #3178](https://github.com/HKUDS/nanobot/pull/3178) |
| **#2600 / #2929** | T3chC0wb0y | Teams 渠道相关旧 PR 关闭，为 #3191 的重新整合铺路 | [PR #2600](https://github.com/HKUDS/nanobot/pull/2600) · [PR #2929](https://github.com/HKUDS/nanobot/pull/2929) |
| **#2521** | chengyongru | 旧版 MyTool PR 关闭，新版 #3177 已开启 | [PR #2521](https://github.com/HKUDS/nanobot/pull/2521) |

### 整体推进评估

- **基础设施层**：性能优化从"大杂烩 PR"进入规范化拆分阶段，代码审查可行性显著提升。
- **模型接入层**：MiniMax 思考模式 + LM Studio 原生支持，降低了本地/国产模型接入门槛。
- **渠道层**：Teams 渠道经历两次关闭后第三次尝试整合，飞书渠道在 #3176 中获得线程级会话隔离。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 热度原因 | 链接 |
|:---|:---|:---|:---|
| **#623** 自定义 Skill "Tool Not Found" 错误 | 8 条 | 新手开发者的入门阻塞问题，涉及 `google_calendar`、`ha-voice` 等热门自定义技能，今日关闭但无明确修复说明 | [Issue #623](https://github.com/HKUDS/nanobot/issues/623) |
| **#3123** cron 任务消息无法后续追问 | 7 条 | 用户强烈希望 cron 发送的内容能像普通消息一样被追问/修正，触及 NanoBot 会话架构设计边界 | [Issue #3123](https://github.com/HKUDS/nanobot/issues/3123) |
| **#3143** LLM `messages parameter is illegal` (code 1214) | 5 条 | 高频出现的 Token 合并错误，用户反馈"出现频率挺高的"，影响飞书等企业渠道稳定性 | [Issue #3143](https://github.com/HKUDS/nanobot/issues/3143) |
| **#3107** 多项建议合集 | 5 条 | 社区资深用户系统性提出 7 条改进建议，其中 2 条已完成（status 显示 task 数、retry 终止提示），其余 5 条涉及 CLI 传参、timeout、provider fallback 等核心配置能力 | [Issue #3107](https://github.com/HKUDS/nanobot/issues/3107) |

### 诉求分析

- **架构级诉求**：cron 会话隔离（#3123）、线程级 session 隔离（#3176）说明用户正在将 NanoBot 从"个人助手"推向"多用户/多线程生产环境"。
- **可观测性诉求**：#3107 中反复出现的"黑盒"一词，反映用户对 agent 内部状态可见性的焦虑。

---

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue | 描述 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 升级回归** | **#3190** | v0.1.5 → v0.1.5.post1 升级后崩溃，堆栈指向 memory 处理逻辑，用户怀疑 memory 格式不兼容 | **无 fix PR** | [Issue #3190](https://github.com/HKUDS/nanobot/issues/3190) |
| 🟠 **P1 - 数据丢失** | **#2957** | `MEMORY.md` 被 Dream 覆盖为空，无 git 备份，已关闭但需确认是否有后续防护措施 | 已关闭，修复情况不明 | [Issue #2957](https://github.com/HKUDS/nanobot/issues/2957) |
| 🟠 **P1 - 高频错误** | **#3143** | Token 合并时 `messages parameter is illegal`（code 1214），飞书渠道高频触发 | **无 fix PR** | [Issue #3143](https://github.com/HKUDS/nanobot/issues/3143) |
| 🟡 **P2 - 渠道行为不一致** | **#3166** | 飞书渠道 `send_progress` 不显示进度通知，与其他渠道行为不一致 | **无 fix PR**（但 #3176 飞书大改可能覆盖） | [Issue #3166](https://github.com/HKUDS/nanobot/issues/3166) |
| 🟡 **P2 - 配置失效** | **#3115** | cron `deliver: false` 被忽略，agent 输出仍会被推送 | **已关闭** | [Issue #3115](https://github.com/HKUDS/nanobot/issues/3115) |
| 🟡 **P2 - 类型错误** | **#3102** | `max_tokens=None` 导致 `<= not supported` 类型错误 | **已关闭** | [Issue #3102](https://github.com/HKUDS/nanobot/issues/3102) |
| 🟢 **P3 - 配置暴露未实现** | **#2921** | MSTeams `restart_notify_*` 配置暴露但未实际生效 | **PR #3191 可能覆盖** | [Issue #2921](https://github.com/HKUDS/nanobot/issues/2921) |

> **维护者行动建议**：#3190 升级回归需今日内响应，建议维护者确认是否为 memory schema 变更导致，必要时发布 hotfix 或迁移指南。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性判断 | 链接 |
|:---|:---|:---|:---|
| **LM Studio 原生支持** | #3185 / #3186 | **高** — PR #3186 已合并 | [Issue #3185](https://github.com/HKUDS/nanobot/issues/3185) |
| **MiniMax 思考模式** | PR #3160 | **已合并**，下一版本大概率包含 | [PR #3160](https://github.com/HKUDS/nanobot/pull/3160) |
| **MyTool 运行时自检查** | #3177 | **高** — 作者已根据审查反馈重启 PR，功能成熟 | [PR #3177](https://github.com/HKUDS/nanobot/pull/3177) |
| **Heartbeat 分阶段模型覆盖** | PR #3156 | **中高** — 设计清晰，针对两阶段 heartbeat 的 eval/exec 分别指定模型，企业场景刚需 | [PR #3156](https://github.com/HKUDS/nanobot/pull/3156) |
| **飞书线程级会话隔离 + reply_in_thread** | PR #3176 | **高** — 飞书是企业用户主力渠道，该 PR 直接解决群聊上下文混乱问题 | [PR #3176](https://github.com/HKUDS/nanobot/pull/3176) |
| **AgentHiFive 集成** | PR #3144 | **中** — 涉及 MCP backend、vault 渠道、审批流，改动面大，审查周期可能较长 | [PR #3144](https://github.com/HKUDS/nanobot/pull/3144) |
| **cron 消息可追问/修正** | #3123 | **中低** — 需改动会话架构，目前无 PR，短期内更可能通过文档说明限制 | [Issue #3123](https://github.com/HKUDS/nanobot/issues/3123) |
| **LLM timeout / fallback / 多 custom provider** | #3107 (5~7) | **中** — 属于配置灵活性增强，社区呼声明确，但需维护者确认配置系统重构计划 | [Issue #3107](https://github.com/HKUDS/nanobot/issues/3107) |

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 | 典型引述 |
|:---|:---|:---|
| **Memory 不可靠/黑盒** | #2957, #1186, #3107 | "Woke up to a huge bug, MEMORY.md is entirely blank"；"nanobot 当前状态黑盒" |
| **本地 LLM 接入体验差** | #3185 | "pass a gibberish key into the openai provider... also requires you to change API Base URL" |
| **渠道行为不一致** | #3166, #3123 | 飞书进度通知缺失、cron 消息无法后续交互 |
| **错误信息不友好** | #3143, #3006 | API 欠费无提示、LLM 返回 code 1214 高频出现但无排查指南 |
| **自定义技能开发门槛** | #623 | 新手首次开发个人 AI，自定义 skill 注册后仍报 "Tool Not Found" |

### 满意点

- #623 开篇："I am enjoying nanobot! This is my first personal ai. It's very exciting getting things to work! Thanks for developing and sharing this project!" — 项目对新用户仍有强吸引力。
- #3107 中维护者快速响应并标记完成 2 条建议，反映社区协作效率获认可。

---

## 8. 待处理积压

以下 Issue/PR 长期活跃或今日新开但尚无响应，建议维护者优先关注：

| 项目 | 原因 | 链接 |
|:---|:---|:---|
| **#3190** v0.1.5.post1 升级崩溃 | **今日新开，P0 回归**，无响应 | [Issue #3190](https://github.com/HKUDS/nanobot/issues/3190) |
| **#3144** AgentHiFive 集成 | 4月14日开启，涉及大量新基础设施，需维护者给出架构审查意见 | [PR #3144](https://github.com/HKUDS/nanobot/pull/3144) |
| **#2220** ContextVar 工具路由上下文提案 | 3月18日开启，async 安全硬化提案，评论数 4，无维护者明确反馈 | [Issue #2220](https://github.com/HKUDS/nanobot/issues/2220) |
| **#3006** API 欠费无警告 | 4月10日开启，仅 1 条评论，属于基础可观测性缺失 | [Issue #3006](https://github.com/HKUDS/nanobot/issues/3006) |
| **#3188** nanobot-channel-webhook 无法安装 | 4月15日开启，文档引导的插件安装直接报错，阻塞新渠道接入 | [Issue #3188](https://github.com/HKUDS/nanobot/issues/3188) |

---

*日报基于 HKUDS/nanobot 公开 GitHub 数据生成，数据截止时间：2026-04-16。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-16

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**：24小时内共处理 **50 条 Issues**（关闭 28，新开/活跃 22）与 **50 条 PR**（合并/关闭 19，待审 31），无新版本发布。项目核心推进方向集中在**多代理架构落地**、**Slack/Discord 网关稳定性修复**、**HERMES_HOME 配置隔离**以及**Docker 兼容性**等基础设施 hardened 上。社区对 #344 多代理架构的关闭标志着该里程碑的正式完成，同时大量网关边缘 case 的集中修复表明项目正从功能扩张期进入**稳定性打磨期**。

---

## 2. 版本发布

**无今日新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#10570](https://github.com/NousResearch/hermes-agent/pull/10570) | teknium1 | **一次性修复 5 处 HERMES_HOME 配置隔离泄漏**，涵盖 honcho session、skill 外部目录、install.sh --dir 等，解决多实例部署的核心痛点 |
| [#10569](https://github.com/NousResearch/hermes-agent/pull/10569) | teknium1 | 将 `ps eww -ax` 替换为 POSIX 兼容的 `ps -A eww`，**修复 Docker 环境下网关状态误判** |
| [#6644](https://github.com/NousResearch/hermes-agent/pull/6644) | shin4 | `execute_code` 子进程继承 `HERMES_HOME`，修复 Docker 中 vision 等工具找不到 `auth.json` |
| [#6527](https://github.com/NousResearch/hermes-agent/pull/6527) | iacker | `install.sh --dir` 现在正确迁移状态与配置，安装器输出同步更新 |
| [#6338](https://github.com/NousResearch/hermes-agent/pull/6338) | iacker | **禁止对外部 skill 目录执行编辑/补丁/删除**，保护外部 skill 不被意外破坏 |
| [#6025](https://github.com/NousResearch/hermes-agent/pull/6025) | dontcallmejames | honcho 配置回退路径尊重 `HERMES_HOME`，避免跨 profile 污染 |

**整体判断**：今日合并 PR 以**配置隔离、Docker 兼容、权限边界**为主，属于项目成熟度的关键基础设施 hardened，为后续大规模部署和多用户场景扫清障碍。

---

## 4. 社区热点

### 高讨论度 Issues

| Issue | 状态 | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| [#344](https://github.com/NousResearch/hermes-agent/issues/344) | **CLOSED** | 27 | **多代理架构里程碑收官** — 从单代理+子代理委托演进为真正的编排/协作/角色专业化架构，13 👍 反映社区长期期待 |
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) | OPEN | 24 | **安全漏洞报告渠道缺失** — 用户请求启用 GitHub Private Vulnerability Reporting，属于合规与信任基础设施 |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | CLOSED | 13 | **原生 AWS Bedrock 支持** — 绕过 OpenRouter 的延迟/成本/企业功能损失，17 👍 为今日最高 |
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | CLOSED | 13 | **Web UI Gateway 完成** — 本地浏览器界面补齐与 Claude Artifacts 等竞品的关键差距 |
| [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) | CLOSED | 13 | **终端渲染引擎五层 PR 合并** — 行内 diff、语法高亮、完整 Markdown、主题支持 |

**背后诉求分析**：社区最强烈的呼声集中在**企业级部署能力**（Bedrock、Docker、HERMES_HOME 隔离）与**交互体验升级**（Web UI、富终端渲染）。#344 的关闭和 #501 的完成标志着 Hermes 在架构层和交互层均已对齐第一梯队竞品。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 说明 | Fix PR |
|:---|:---|:---|:---|:---|
| [#10575](https://github.com/NousResearch/hermes-agent/issues/10575) | 🔴 **高** | OPEN | Anthropic OAuth/Claude Max 代理路径误将完整系统提示判定为 "extra usage exhausted"，导致合法请求失败 | [#10576](https://github.com/NousResearch/hermes-agent/pull/10576) 已开 |
| [#10223](https://github.com/NousResearch/hermes-agent/issues/10223) | 🔴 **高** | OPEN | GitHub Copilot provider 通过 credential pool 解析时返回空 base URL，导致启动失败 | 待 fix |
| [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) | 🟡 中 | CLOSED | `UnicodeEncodeError` 导致 API 调用失败（zai provider） | 已修复 |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | 🟡 中 | CLOSED | 长回复触发 "Response truncated due to output length limit" | 已修复 |
| [#7588](https://github.com/NousResearch/hermes-agent/issues/7588) | 🟡 中 | CLOSED | 工具完全无法使用（历史会话/记忆/读文件均失败） | 已修复 |
| [#6360](https://github.com/NousResearch/hermes-agent/issues/6360) | 🟡 中 | CLOSED | quick install 自定义模型配置解析出 `Invalid port: 6153export` | 已修复 |
| [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) | 🟢 低 | OPEN | Discord `/sethome` 将 channel ID 写入 `config.yaml` 而非 `.env` | 待 fix |
| [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) | 🟢 低 | OPEN | Home channel 自动提示只读 env var，不回退到 yaml 配置（与 #6447 连锁） | 待 fix |
| [#10579](https://github.com/NousResearch/hermes-agent/issues/10579) | 🟢 低 | CLOSED | Slack mention 前缀导致 `is_command()` 无法识别 `/` 命令 | 已修复 |
| [#10550](https://github.com/NousResearch/hermes-agent/issues/10550) | 🟢 低 | CLOSED | Discord `/skill` 命令组超 8000 字节导致 `CommandSyncFailure` | 已修复 |
| [#10454](https://github.com/NousResearch/hermes-agent/issues/10454) | 🟢 低 | CLOSED | 飞书对话最后一条消息偶尔丢失 | 已修复 |

**稳定性评估**：今日关闭的 bug 数量（8+）显著高于新增，且覆盖网关（Slack/Discord/飞书）、终端编码、安装配置、模型输出等多个层面，表明项目**修复速度超过引入速度**。但 Anthropic OAuth 和 Copilot provider 的两个高严重度问题仍需优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#10299](https://github.com/NousResearch/hermes-agent/issues/10299) | 级联上下文文件发现（AGENTS.md/CLAUDE.md/.cursorrules） | ⭐⭐⭐ **高** | 作者 iRonin 已给出完整设计，与当前 context 系统直接相关，实现路径清晰 |
| [#10488](https://github.com/NousResearch/hermes-agent/issues/10488) | 首次运行 Web 引导向导 | ⭐⭐⭐ **高** | #501 Web UI Gateway 已关闭，该功能是自然延伸，降低非技术用户门槛 |
| [#10585](https://github.com/NousResearch/hermes-agent/issues/10585) | 多分辨率上下文压缩（降本 80%+） | ⭐⭐ **中** | 痛点真实（MEMORY.md/USER.md 全量加载），但涉及核心 prompt 架构，需评估方案 |
| [#10583](https://github.com/NousResearch/hermes-agent/issues/10583) | Slack `reaction_added` 事件路由 | ⭐⭐⭐ **高** | 平台适配小功能，作者 denysgaievskyi 同日已提交多个 Slack fix，实现成本低 |
| [#10513](https://github.com/NousResearch/hermes-agent/issues/10513) | WhatsApp 默认 chat 方法改为 self-chat | ⭐⭐ **中** | 用户体验优化，但涉及默认行为变更，需产品决策 |
| [#10577](https://github.com/NousResearch/hermes-agent/pull/10577) | 系统提示增加"战略重新评估"（防 fix-loop） | ⭐⭐⭐ **高** | 已作为 PR 提交，直接引用 google-gemini/gemini-cli#25062，属于 prompt engineering 最佳实践移植 |

---

## 7. 用户反馈摘要

### 核心痛点
- **配置与安装门槛**：quick install 解析错误（#6360）、HERMES_HOME 隔离不完善（#5947）、首次运行缺乏 Web 引导（#10488）反复出现，说明非技术用户 onboarding 仍有摩擦。
- **网关平台边缘 case**：Slack/Discord/飞书/WhatsApp 均有"最后一条消息丢失"、"命令识别失败"、"字节超限"等问题，反映多平台适配的维护负担。
- **成本焦虑**：#10585 明确提出上下文膨胀导致 API 费用失控，用户已开始关注"智能体越用越贵"的可持续性问题。

### 满意与认可
- **架构演进受认可**：#344 多代理架构获得 13 👍，社区对 Hermes 从单代理向多代理跃迁表示高度期待。
- **企业功能补齐**：#3863 Bedrock 原生支持、#501 Web UI 的完成被视为对齐竞品的标志性进步。

### 典型使用场景
- Docker 部署（#9723、#6644）
- 多实例/多用户隔离（HERMES_HOME 系列）
- 企业 IM 集成（Slack、Discord、飞书）
- 本地开源模型（Ollama，#10574 新增 docker-compose 示例）

---

## 8. 待处理积压

| 条目 | 创建时间 | 状态 | 提醒原因 |
|:---|:---|:---|:---|
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) | 2026-04-13 | OPEN，24 评论 | **安全合规基础设施** — 无 Private Vulnerability Reporting 将阻碍企业用户和负责任披露 |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) | 2026-04-03 | OPEN | **Ink/React 新终端 UI** — 架构级重构，已挂起近两周，需维护者评估是否继续推进或拆分 |
| [#4424](https://github.com/NousResearch/hermes-agent/pull/4424) | 2026-04-01 | OPEN | `hermes update` 跟踪远程逻辑错误 — 影响贡献者体验，已积压半月 |
| [#10160](https://github.com/NousResearch/hermes-agent/pull/10160) | 2026-04-15 | OPEN | Nous OAuth 跨进程同步 — 防止 cron 任务撤销会话，属于可靠性关键修复 |
| [#9882](https://github.com/NousResearch/hermes-agent/pull/9882) | 2026-04-14 | OPEN | Hindsight 云客户端超时硬编码 — 已提供配置化方案，等待合并 |

---

**日报生成时间**：2026-04-16  
**数据来源**：NousResearch/hermes-agent GitHub 公开数据

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-16

> 项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**：24 小时内 26 个 PR 更新（20 条已合并/关闭，6 条待审），7 个 Issue 新增或复现，并发布了 1 个 Nightly 构建。开发节奏集中在**代理能力增强**（delegate 工具、MCP 命令、/btw 旁路提问）、**Web 前端稳定性修复**（聊天组件状态、Markdown 高亮、配置保存）以及**跨平台兼容性**（freebsd/arm、认证回退）三大方向。社区侧对 LM Studio 一键接入、定时任务执行失败等诉求持续发酵。

---

## 2. 版本发布

### Nightly Build: v0.2.6-nightly.20260415.c0fadc59
- **发布类型**：自动化夜间构建
- **状态**：不稳定，谨慎使用
- **变更范围**：自 `v0.2.6` 以来 `main` 分支的全部累积提交
- **完整 Changelog**：https://github.com/sipeed/picoclaw/compare/v0.2.6...main
- **迁移注意**：作为 nightly 版本，不建议用于生产环境；无官方迁移指南，需自行验证关键路径（agent loop、gateway PID 管理、Web UI 配置保存）。

---

## 3. 项目进展

今日合并/关闭的 20 个 PR 中，以下几条标志着核心能力的实质性推进：

| PR | 核心贡献 | 链接 |
|:---|:---|:---|
| **#2531** `delegate` 跨 Agent 任务移交工具 | 实现 Phase 2 计划（#2148）中的 `delegate(agent_id, task)` 工具，支持目标 Agent 在独立 workspace/model/tools/system prompt 下同步执行任务，是多 Agent 协作架构的关键里程碑。 | https://github.com/sipeed/picoclaw/pull/2531 |
| **#2535** MCP Slash 命令 | 在聊天通道中直接通过 `/list mcp`、`/show mcp <server>` 等命令查看 MCP 服务器及工具详情，降低 MCP 使用门槛。 | https://github.com/sipeed/picoclaw/pull/2535 |
| **#2532** `/btw` 一次性旁路提问 | 新增 `/btw <question>` 命令，允许用户在不污染会话历史、不进入工具执行流的情况下快速提问，提升交互灵活性。（替代了 #2502） | https://github.com/sipeed/picoclaw/pull/2532 |
| **#2525** 非视觉模型图片输入失败后的自愈 | 当向不支持图片的模型发送图片后，会话不再"卡死"；后续自动降级为纯文本重试，显著改善容错体验。 | https://github.com/sipeed/picoclaw/pull/2525 |
| **#2529** Web 端 Markdown 代码高亮 | 为聊天消息和 Skills 详情预览增加语法高亮，前端体验提升。 | https://github.com/sipeed/picoclaw/pull/2529 |
| **#2413** LINE 通道重构：接入官方 SDK v8 | 替换 270+ 行手写 HTTP/HMAC/JSON 代码，消除签名验证和请求构造中的潜在 bug，长期维护成本降低。 | https://github.com/sipeed/picoclaw/pull/2413 |
| **#2524** 搜狗搜索默认接入（已关闭） | 尝试为中国大陆用户提供开箱即用的网页搜索能力，并附带 Web UI 配置面板；虽被关闭，但方向明确。 | https://github.com/sipeed/picoclaw/pull/2524 |

**基础设施与稳定性**方面，`wj-xiao` 密集修复了 gateway PID 生命周期管理（#2403、#2422）、freebsd/arm 兼容性（#2417）、launcher 认证回退（#2466）、React 版本对齐（#2467）等底层问题，项目跨平台健壮性明显增强。

---

## 4. 社区热点

### 讨论最活跃的 Issue
| Issue | 评论数 | 热度分析 | 链接 |
|:---|:---|:---|:---|
| **#28** Feat Request: LM Studio Easy Connect | **12 条** | 社区长期呼声最高的本地化模型接入诉求。发帖者坦承技术能力不足，希望有"一键连接"方案，反映出 PicoClaw 在降低本地 LLM 部署门槛上仍有缺口。 | https://github.com/sipeed/picoclaw/issues/28 |
| **#2468** [BUG] Scheduled Task Fails to Execute | **5 条** | 定时任务（cron）执行被限制在"internal channels"的错误直接影响自动化工作流，是企业/进阶用户的高频场景，亟需维护者回应。 | https://github.com/sipeed/picoclaw/issues/2468 |

### 高价值待审 PR
- **#2531** `delegate` 工具 与 **#2535** MCP  slash 命令代表了项目向"多 Agent + MCP 生态"演进的核心能力，值得优先审阅。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | **#2468** | cron 定时任务执行报错 `scheduling command execution is restricted to internal channels`，功能完全不可用 | **无 fix PR**，开放中 |
| 🔴 **高** | **#2302** | antigravity API 频繁出现 `PERMISSION_DENIED`，Web UI 需手动反复重新认证，会话/凭证持久化异常 | **无 fix PR**，开放中 |
| 🟡 **中** | **#2446** | 多通道场景下，某通道 pending 任务未返回时，另一通道会"回声"重复用户消息而非正常处理 | **无 fix PR**，开放中 |
| 🟡 **中** | **#2046** | LongCat API 下 PicoClaw 不调用工具，疑似 provider 兼容性问题 | **无 fix PR**，开放中 |
| 🟢 **低** | **#2528** (已合并) | 修复 tool call ID 跨 turn 复用时被全局去重误删的问题，改善部分 provider 的严格序列要求 | ✅ **已修复** |
| 🟢 **低** | **#2530** (待审) | 修复 launcher 通道配置保存时嵌套 `channel_list` patch 丢失的问题 | 🔄 **PR 开放中** |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性分析 |
|:---|:---|:---|
| **LM Studio 一键连接** | #28 | 高。本地化部署是 AI 助手类项目的必争之地，需求存在数月且评论活跃，预计会在 provider 扩展周期中被纳入。 |
| **CLI 认证支持 `--no-browser`** | #2533 | 高。对容器/无头环境（如用户自述的 picoclaw-webtop 场景）是刚需，实现成本低，社区 PR 潜力大。 |
| **Seahorse `fresh_tail_size` 可配置** | #2527 | 高。将硬编码常量（32）暴露为配置项，属于典型的"上下文预算调优"需求，与记忆/长上下文优化路线一致，已有明确实现路径。 |
| **搜狗搜索默认接入 + Web UI 配置面板** | #2524（已关闭） | 中。方向被认可（中国大陆可用性），但 PR 被关闭可能因实现细节或合规考量，预计会以迭代形式回归。 |
| **LLM-as-Judge for membench** | #2484（已关闭） | 中。评测基础设施的增强，对研究/开发者友好，但优先级可能低于产品功能。 |

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的真实声音：

| 痛点/场景 | 来源 | 核心诉求 |
|:---|:---|:---|
| **"技术不够好，希望有人做 LM Studio 一键连接"** | #28 | 降低本地模型接入门槛，非专业开发者也能用上 PicoClaw |
| **定时任务完全跑不通** | #2468 | 自动化/无人值守是核心工作流，cron 工具不能沦为摆设 |
| **容器/远程环境无法弹浏览器做 OAuth** | #2533 | 认证流程必须支持无头/非交互场景 |
| **多通道并发时消息乱序/回声** | #2446 | 企业级多用户部署对通道隔离性要求极高 |
| **向非视觉模型发图后会话卡死** | #2525（已修复） | 容错机制不足，一次误操作导致整个会话报废 |

**满意度信号**：`/btw` 旁路提问、MCP slash 命令、delegate 工具等 PR 显示项目在高速响应高级用户的交互效率需求；底层稳定性修复密集，维护团队执行力强。

---

## 8. 待处理积压

以下 Issue/PR 已开放较长时间或具有较高影响，建议维护者关注：

| 条目 | 创建时间 | 积压天数 | 风险/影响 | 链接 |
|:---|:---|:---|:---|:---|
| **#28** LM Studio Easy Connect | 2026-02-11 | **64 天** | 社区最高票功能请求之一，长期无官方回应可能导致用户流失至更友好的竞品 | https://github.com/sipeed/picoclaw/issues/28 |
| **#2046** LongCat API 不调用工具 | 2026-03-26 | **21 天** | provider 兼容性问题，影响特定用户群体的核心功能可用性 | https://github.com/sipeed/picoclaw/issues/2046 |
| **#2302** antigravity API 频繁掉认证 | 2026-04-03 | **13 天** | 直接影响 Web UI 日常可用性，用户体验劣化明显 | https://github.com/sipeed/picoclaw/issues/2302 |
| **#2413** LINE 通道 SDK 重构 | 2026-04-07 | **9 天** | 待审 PR，代码质量改进显著，但可能因测试覆盖或回归风险而滞留 | https://github.com/sipeed/picoclaw/pull/2413 |

---

*日报基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-16

> 项目：NanoClaw (github.com/qwibitai/nanoclaw)  
> 分析日期：2026-04-16

---

## 1. 今日速览

过去24小时 NanoClaw 社区保持**高活跃度**：新增 5 条 Issues（全部 Open）且 17 条 PR 有更新，其中 4 条 PR 完成合并/关闭，13 条仍在 review 队列。无新版本发布。整体呈现出**"快速迭代、功能扩张与基础稳定性修复并行"**的特征——既有 Vercel AI SDK 多 provider 接入、7 层 scope expansion 等大型功能 PR，也有 scheduler hot-loop、channel 启动隔离、凭证代理 ETIMEDOUT 等关键稳定性补丁。Issues 侧则集中暴露了 `/setup` 引导流程、mount 权限模型和国际化命名的产品体验债务。

---

## 2. 版本发布

**无今日新版本发布。**

---

## 3. 项目进展

今日共有 **4 条 PR 完成合并/关闭**，推进情况如下：

| PR | 作者 | 状态 | 贡献 |
|:---|:---|:---|:---|
| [#1281](https://github.com/qwibitai/nanoclaw/pull/1281) | heyjawrsh | **CLOSED** | 修复 headless Linux 环境下 `openBrowser()` 静默失败问题，新增 URL 打印回退与 Linux/VPS 部署文档，降低服务器部署门槛。 |
| [#1777](https://github.com/qwibitai/nanoclaw/pull/1777) | johnnyfish | **CLOSED** | 将 `ONECLI_API_KEY` 透传至 OneCLI SDK，修复云端/开发环境容器配置接口的认证失败问题。 |
| [#1782](https://github.com/qwibitai/nanoclaw/pull/1782) | openclaw-shi | **CLOSED** | 凭证代理层 TCP keepalive + 连接错误处理优化，解决长流式调用中的 `ETIMEDOUT` 及上游断连清理问题。 |
| [#1760](https://github.com/qwibitai/nanoclaw/pull/1760) | Viral1010 | **CLOSED** | 语音提醒新增 Twilio  fallback 呼叫能力，主号码未接听时自动拨打备用号码。 |

**整体迈进评估**：今日合并的 PR 覆盖了**部署体验（Linux/VPS）、云认证、网络稳定性、语音通道可靠性**四个基础支柱，属于"基础设施加固"类型进展。同时有 13 条待合并 PR  queued，预示着未来 1-2 周将有大量功能集中 landing。

---

## 4. 社区热点

由于所有 Issues/PR 的 👍 和评论数均为 0，**按"内容影响力与潜在波及面"判断热点**：

| 条目 | 类型 | 热度理由 |
|:---|:---|:---|
| [#1786](https://github.com/qwibitai/nanoclaw/pull/1786) | PR | **7 层 scope expansion 完整落地**，一次性实现 14 项设计规范（webhook 事件源、pre-action LLM 校验、置信度标记、跨源验证等），是近期最大的架构级 PR。 |
| [#1784](https://github.com/qwibitai/nanoclaw/pull/1784) | PR | **多 provider LLM 层 via Vercel AI SDK**，直接决定 NanoClaw 是否能从 Anthropic 单绑走向 OpenAI/Google/Ollama/Groq/Together 多模型生态。 |
| [#1792](https://github.com/qwibitai/nanoclaw/issues/1792) | Issue | `additionalMounts` 的"静默前缀"行为未文档化，且绝对路径被拒绝，对容器化 agent 开发者造成**隐蔽的调试成本**。 |
| [#1791](https://github.com/qwibitai/nanoclaw/issues/1791) | Issue | Mount allowlist 的**目录级粒度导致同目录文件无法差异化授权**，被报告为"real security gap"，安全敏感用户高度关注。 |

**背后诉求**：社区一方面在** aggressively 扩展模型能力与 agent 架构边界**（#1786、#1784、#1774、#1776），另一方面**基础配置与权限模型的透明性、可预测性严重滞后**（#1792、#1791、#1790、#1789），存在"上层建筑超速、地基体验欠债"的张力。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue/PR | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1788](https://github.com/qwibitai/nanoclaw/pull/1788) | **Scheduler 静默 hot-loop**：`runTask` 抛出异常或非 text 类型 script 导致调度器空转，有三层防御修复（写入时强制类型、启动时修复、运行时捕获）。 | **PR Open，待 review** |
| 🔴 **高** | [#1785](https://github.com/qwibitai/nanoclaw/pull/1785) | **单 channel 启动失败拖垮整个服务**：如 Gmail OAuth 过期会导致 Discord/Telegram/WhatsApp 等全部不可用。 | **PR Open，待 review** |
| 🟡 **中** | [#1787](https://github.com/qwibitai/nanoclaw/issues/1787) | macOS 上 `/setup` 选择 Apple Container 时，`skill/apple-container` 分支合并到 `v2` 产生 **6 个 merge conflicts**，首次安装即阻断。 | **无 Fix PR** |
| 🟡 **中** | [#1789](https://github.com/qwibitai/nanoclaw/issues/1789) | 非 ASCII 显示名称（中日韩等）被静默替换为 `dm-with-unnamed`，无警告无回退，国际化用户受影响。 | **无 Fix PR** |
| 🟡 **中** | [#1792](https://github.com/qwibitai/nanoclaw/issues/1792) | `additionalMounts.containerPath` 必须是相对路径，绝对路径被拒且行为未文档化。 | **无 Fix PR** |
| 🟢 **低** | [#1790](https://github.com/qwibitai/nanoclaw/issues/1790) | `/setup` 中 mount allowlist 的"根目录 vs 文件"语义不清晰，用户需反复试错。 | **无 Fix PR** |

---

## 6. 功能请求与路线图信号

**已提交的大型功能 PR（高度可能纳入下一版本）**：

| PR | 功能 | 路线图信号 |
|:---|:---|:---|
| [#1786](https://github.com/qwibitai/nanoclaw/pull/1786) | 7 层 scope expansion 完整实现 | 官方设计规范的直接落地，属于核心路线图 |
| [#1784](https://github.com/qwibitai/nanoclaw/pull/1784) | Vercel AI SDK 多 provider LLM 层 | 打破 Anthropic 依赖，是生态扩张的关键 |
| [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) | OpenAI 模型支持 + token 追踪 + stats API | 与 #1784 方向一致，可能部分重叠或互补 |
| [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) | OpenCode agent provider (v2) | v2 原生 provider 扩展，符合 poll-loop 架构 |
| [#1781](https://github.com/qwibitai/nanoclaw/pull/1781) | Composio MCP 托管 OAuth | 降低 Gmail/Calendar 接入门槛，商业化友好 |
| [#1780](https://github.com/qwibitai/nanoclaw/pull/1780) | 5 个营销/客户 pipeline 容器 skills | 垂直场景扩展，展示生态应用层活力 |
| [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) | 新建会话功能 | 基础 UX 能力，长期 pending 需推动 |
| [#886](https://github.com/qwibitai/nanoclaw/pull/886) | AI agent swarms 每日新闻简报 | 社区贡献的 skill，展示多 agent 协作场景 |

**从 Issues 中识别的隐含需求**：
- **Mount 权限模型需要文件级粒度**（#1791）—— 当前目录级 allowlist 已构成安全与功能瓶颈
- **Setup 流程需要更清晰的语义反馈与国际化支持**（#1787、#1789、#1790、#1792）—— 产品化前的必要打磨

---

## 7. 用户反馈摘要

从今日 5 条 Issues 中提炼的真实痛点：

| 痛点 | 来源 | 用户场景 |
|:---|:---|:---|
| **"静默行为"是最大摩擦源** | #1792, #1789 | 用户输入绝对路径或非 ASCII 名称时，系统不报错也不解释，而是偷偷改写，导致调试时间浪费。 |
| **安全模型粒度不足** | #1791 | 多 token 共享目录时，无法只暴露 A 文件而隐藏 B 文件，迫使运营者在"不安全"和"不方便"之间二选一。 |
| **首次安装体验脆弱** | #1787, #1790 | macOS 新用户跑 `/setup` 即遇 merge conflict；mount 配置 trial-and-error， onboarding 流失风险高。 |
| **文档与产品行为脱节** | #1792 | 代码实现（强制相对路径 + 前缀）没有任何文档说明，用户通过阅读源码或反复失败才能发现规则。 |

> **满意度信号**：今日无正面反馈 Issue。  
> **不满意信号**：`/setup` 流程、mount 系统、命名国际化是三大集中抱怨区。

---

## 8. 待处理积压

**需要维护者优先关注的长期/高影响积压**：

| 条目 | 创建时间 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) 新建会话功能 | 2026-03-21 | 2026-04-15 | **已积压 26 天**，属于核心 UX 能力，持续 delay 影响用户留存 |
| [#886](https://github.com/qwibitai/nanoclaw/pull/886) AI agent swarms 新闻简报 skill | 2026-03-09 | 2026-04-15 | **已积压 38 天**，社区贡献的大型 skill，长期 pending 会挫伤外部贡献者积极性 |
| [#1791](https://github.com/qwibitai/nanoclaw/issues/1791) Mount allowlist 文件级粒度 | 2026-04-15 | 2026-04-15 | 虽新但标记为"real security gap"，建议快速响应以建立安全信任 |
| [#1787](https://github.com/qwibitai/nanoclaw/issues/1787) macOS `/setup` merge conflicts | 2026-04-15 | 2026-04-15 | **首次安装阻断**，对新用户增长有直接负面影响 |

---

**日报结语**：NanoClaw 今日处于**"功能爆发期与体验债务期叠加"**的阶段。建议核心维护者在快速 landing #1786、#1784 等架构级 PR 的同时，分配带宽修复 `/setup` 和 mount 系统的产品体验问题，避免"新用户进来即碰壁"的漏斗损耗。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-16

---

## 1. 今日速览

NullClaw 今日社区活跃度较高，过去 24 小时内新增 **9 条活跃 Issue** 和 **8 条 PR 动态**，但无新版本发布。值得关注的是，3 个积压 PR 于今日关闭/合并，包括 Signal "Note to Self" 支持和 shell 沙盒安全增强，显示维护团队正在清理历史积压。同时，项目正面临 **Zig 0.16 大版本迁移**（PR #823）和多项稳定性问题（http_request 失效、版本号显示异常、OTel 中断），技术债务与社区增长并行。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日有 **3 个 PR 被合并/关闭**，推进了安全加固、消息同步和代码审查效率：

| PR | 作者 | 进展 | 贡献 |
|:---|:---|:---|:---|
| [#378](https://github.com/nullclaw/nullclaw/pull/378) | jmylchreest | **已合并/关闭** | 修复 `git -C` 大小写误判的安全漏洞，同时集成 Signal "Note to Self" 同步消息支持 |
| [#369](https://github.com/nullclaw/nullclaw/pull/369) | jmylchreest | **已合并/关闭** | 单独交付 Signal "Note to Self" 功能，4 个新增测试覆盖同步信封解析 |
| [#377](https://github.com/nullclaw/nullclaw/pull/377) | jmylchreest | **已合并/关闭** | 新增 `tools.path_env_vars` 配置，对 shell 子进程传递的 PATH 类环境变量进行沙盒规则校验 |

**整体评估**：今日进展集中在安全边界收紧（git/shell）和 Signal 生态完善，但核心架构层面（如网络搜索、OTel、网关）暂无合并修复。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#812 http_request 网络搜索失效](https://github.com/nullclaw/nullclaw/issues/812) | 4 评论, 👍 1 | 新用户从 PicoClaw/ZeroClaw 迁移后，核心功能（互联网搜索）完全不可用，已持续多日，严重影响首次体验 |
| 🔥 2 | [#820 Debian 安装 Zig 文档缺失](https://github.com/nullclaw/nullclaw/issues/820) | 3 评论 | 用户质疑 Docker 是否为必需依赖，反映从源码构建的门槛过高，文档覆盖不足 |
| 🔥 3 | [#791 Shell 在物理 Linux 上无法运行](https://github.com/nullclaw/nullclaw/issues/791) | 3 评论 | 原生 Linux 环境下 shell 工具授权后仍失效，说明权限/沙盒检测在物理机与容器环境存在差异 |

**背后诉求**：新用户 onboarding 体验脆弱——"安装难 → 构建难 → 核心功能跑不通" 的流失漏斗明显。

---

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **P0** | [#812](https://github.com/nullclaw/nullclaw/issues/812) | `http_request` 网络搜索能力完全失效，影响所有新用户 | **无** |
| 🔴 **P0** | [#800](https://github.com/nullclaw/nullclaw/issues/800) | v2026.4.9 强制 HTTPS 端点约束导致 OTel 容器内通信中断，属于回归问题 | **无** |
| 🟡 **P1** | [#791](https://github.com/nullclaw/nullclaw/issues/791) | Shell 在物理 Linux 上无法运行，沙盒/权限检测兼容性问题 | **无** |
| 🟡 **P1** | [#821](https://github.com/nullclaw/nullclaw/issues/821) | 从源码安装时 `nullclaw version` 仅显示 `dev`，无版本号或 commit hash | **无** |
| 🟡 **P1** | [#827](https://github.com/nullclaw/nullclaw/issues/827) | `nullclaw channel status` 与 `nullclaw doctor` 输出矛盾，健康检查可信度受损 | **无** |
| 🟢 **P2** | [#824](https://github.com/nullclaw/nullclaw/pull/824) | 历史压缩中存在 UTF-8 截断问题（已提交 PR 待审） | [PR #824](https://github.com/nullclaw/nullclaw/pull/824) |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性评估 |
|:---|:---|:---|
| **嵌套 Agent Skills 目录结构** | [#825](https://github.com/nullclaw/nullclaw/issues/825) | 高。由知名贡献者 tunnckoCore 提出，且明确指出"客户端实现决定支持度"，改动范围可控，易被接受 |
| **微信二维码登录** | [#817](https://github.com/nullclaw/nullclaw/issues/817) | 中低。属于中国市场特定需求，需评估 IM 适配层扩展成本，暂无相关 PR |
| **Tailscale + Gateway 集成** | [#826](https://github.com/nullclaw/nullclaw/issues/826) | 中。远程安全访问场景增长，但当前报错 `NotImplemented`，说明隧道后端尚未支持该网络栈 |
| **Zig 0.16 迁移** | [PR #823](https://github.com/nullclaw/nullclaw/pull/823) | **极高**。大版本语言升级属于阻塞性技术债务，必须合并才能继续跟上 Zig 生态 |

---

## 7. 用户反馈摘要

**真实痛点：**
- **"安装即劝退"**：Debian 用户 eabase 连续提交 #819→#820→#821→#826→#827，反映从源码构建缺乏版本标识、依赖安装文档、网关远程访问指引，且健康检查工具输出自相矛盾。
- **"功能回归无感知"**：lestan 指出 #800 中 HTTPS 强制约束在补丁版本中引入，未提供迁移路径，直接破坏现有 Podman 内 OTel 架构。
- **"跨项目迁移期望落差"**：uMendex 从 PicoClaw/ZeroClaw 慕名而来，但核心卖点（网络搜索）"自周五起完全无法工作"，品牌好感度受损。

**满意点：**
- 项目代码组织性获得认可（uMendex："seems very organized"）。
- Signal 消息同步和 shell 沙盒安全有持续投入，长期用户感知到维护活跃度。

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 风险提醒 |
|:---|:---|:---|:---|
| PR | [#774 文档统计数据全量更新](https://github.com/nullclaw/nullclaw/pull/774) | 2026-04-05（11 天前） | 文档与代码事实不一致，持续误导新用户，但改动低风险，建议尽快合并 |
| PR | [#783 Cron 子代理引擎 + JSON 输出](https://github.com/nullclaw/nullclaw/pull/783) | 2026-04-07（9 天前） | 大型功能 PR，涉及调度器、数据库、CLI 输出格式，需维护者投入审查资源 |
| PR | [#789 Gateway 绑定与限流安全修复](https://github.com/nullclaw/nullclaw/pull/789) | 2026-04-08（8 天前） | 网关公开绑定和速率限制属于安全修复，与社区热点 #826（Tailscale/Gateway）直接相关 |
| Issue | [#791 Shell 物理 Linux 失效](https://github.com/nullclaw/nullclaw/issues/791) | 2026-04-08（8 天前） | 无维护者回应，影响原生 Linux 部署场景 |

---

*日报基于 NullClaw GitHub 公开数据生成，所有链接指向 github.com/nullclaw/nullclaw。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-16

---

## 1. 今日速览

IronClaw 今日保持**高活跃度**：24 小时内 Issues 更新 17 条（9 开/活跃，8 关闭），PR 更新 50 条（43 待合并，7 已合并/关闭），无新版本发布。项目核心工作集中在 **V2 引擎稳定性修复**、**Web 端 P0 质量缺陷治理**、**CI/基础设施加固**三大方向。安全侧出现一枚关键漏洞（Engine V2 绕过入站 Secret 扫描，P0 质量），已引起维护者高度重视。整体而言，项目处于**密集迭代与质量收敛期**，合并节奏稳健但待审 PR 积压较多，需关注评审带宽。

---

## 2. 版本发布

**无今日发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#2509](https://github.com/nearai/ironclaw/pull/2509) | henrypark133 | **CI 基础设施**：支持历史 Dockerfile target 的自动检测与回退，解决 v0.24.0 及更早版本镜像重建失败问题。 |
| [#2507](https://github.com/nearai/ironclaw/pull/2507) | henrypark133 | **CI 基础设施**：新增历史发布镜像手动重建工作流，强化发布可追溯性与灾备能力。 |
| [#2421](https://github.com/nearai/ironclaw/pull/2421) | standardtoaster | **权限系统重大升级**：引入基于 DB 的跨用户读写授权（scope grants），补全 #1626 移除 `GATEWAY_USER_TOKENS` 后的共享数据能力缺口，含 DB 迁移。 |
| [#2508](https://github.com/nearai/ironclaw/pull/2508) | zetyquickly | **通知可靠性**：修复静默失败通知 bug，并重构 `send_wire` 流程以支持“重新开始”提示。 |

**整体迈进评估**：权限模型完成关键补全（DB 化跨用户授权），CI 侧建立历史版本重建能力，V2 引擎与通知链路持续打磨。项目在向**生产级多租户部署**演进上迈出实质性一步。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 |
|:---|:---|:---|
| [#548](https://github.com/nearai/ironclaw/issues/548) | 4 | **Chat API 默认集成 Web Search** — 用户希望 IronClaw 原生具备搜索能力，减少自定义配置。今日关闭，说明功能已落地或纳入计划。 |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | 3 | **MCP/Notion 配置导致 Agent 无响应** — 用户在尝试配置 Notion MCP 时触发 Agent 卡死，反映 MCP 生态接入的容错性与用户体验仍需优化。 |
| [#2474](https://github.com/nearai/ironclaw/issues/2474) | 1 | **stdio MCP 错误触发 OAuth 发现流程** — 技术社区对 MCP 传输层行为边界敏感，此问题已快速关闭，显示维护团队对 MCP 稳定性的响应优先级高。 |

### 高关注度 PR

| PR | 评论状态 | 核心看点 |
|:---|:---|:---|
| [#2512](https://github.com/nearai/ironclaw/pull/2512) | 活跃评审中 | **Slack Relay OAuth 状态查找修复**，涉及网关所有者作用域与遗留密钥兼容，是多通道企业部署的阻塞性问题。 |

**背后诉求分析**：社区对 **MCP 生态成熟度**、**多通道（Slack/Telegram/Web）企业部署稳定性**、**开箱即用的工具能力（搜索/Notion）** 需求强烈。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P0 / 安全** | [#2491](https://github.com/nearai/ironclaw/issues/2491) | **OPEN** | **Engine V2 完全绕过入站 Secret 扫描**，用户粘贴的 API Token 直接送达 LLM。已在 Staging 复现（Slack bot token `xoxb-...`）。 | **尚无关联 Fix PR，需紧急响应** |
| **P0 / 质量** | [#2410](https://github.com/nearai/ironclaw/issues/2410) | OPEN | Dashboard 循环刷新并清空内容，Web 端核心体验阻断。 | 待定位 |
| **P0 / 质量** | [#2409](https://github.com/nearai/ironclaw/issues/2409) | OPEN | 用户消息在聊天输入后消失，Web 端核心体验阻断。 | 待定位 |
| **P2** | [#2284](https://github.com/nearai/ironclaw/issues/2284) | OPEN | Staging Agent 实例闲置 1 小时后死亡，影响长会话与异步工作流。 | 待定位 |
| **已修复/关闭** | [#2474](https://github.com/nearai/ironclaw/issues/2474) | CLOSED | stdio MCP 错误触发 OAuth 发现流程。 | 已关闭 |
| **已修复/关闭** | [#2345](https://github.com/nearai/ironclaw/issues/2345) | CLOSED | 工具安装反复请求权限，无法记住“始终允许”。 | 已关闭（E2E 测试跟进见 [#2485](https://github.com/nearai/ironclaw/issues/2485)） |
| **已修复/关闭** | [#2276](https://github.com/nearai/ironclaw/issues/2276) | CLOSED | Orchestrator 因 `nearai_chat` 返回 HTTP 413 崩溃。 | 已关闭（直接 HTTP  provider 的 413 覆盖扩展见 [#2489](https://github.com/nearai/ironclaw/issues/2489)） |
| **已修复/关闭** | [#2405](https://github.com/nearai/ironclaw/issues/2405) | CLOSED | Gateway `broadcast()` 缺少 `thread_id` 导致路由错误。 | 已关闭 |
| **已修复/关闭** | [#2279](https://github.com/nearai/ironclaw/issues/2279) | CLOSED | Bot 在底层工具报错时虚假报告成功。 | 已关闭 |

**稳定性信号**：V2 引擎与 Web 前端是当前质量风暴眼。Secret 扫描绕过为**新增关键安全回归**，需立即评估修复窗口；两个 P0 Web 问题已持续数日，建议集中前端资源攻坚。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 功能方向 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#2484](https://github.com/nearai/ironclaw/issues/2484) | Enhancement | **参数感知的 Always-Allow 权限**：当前“始终允许”仅按工具名生效，`shell ls` 的授权会隐式覆盖 `shell rm -rf`。 | **高** — 安全刚需，作者 henrypark133 活跃，已有明确技术方案 |
| [#2485](https://github.com/nearai/ironclaw/issues/2485) | Enhancement | **Always-Approve 持久化的 Playwright E2E 测试**：补全 #2428 的用户可见行为验证。 | **高** — 测试债务，通常随功能 PR 合并 |
| [#2489](https://github.com/nearai/ironclaw/issues/2489) | Fix/Enhancement | **为所有直接 HTTP provider 添加 HTTP 413 / 上下文长度检测**：扩展 #2339 的修复范围。 | **高** — 技术债务，作者 serrrfirat 已提交，修复路径清晰 |
| [#2482](https://github.com/nearai/ironclaw/issues/2482) | Bug/Enhancement | **Telegram 群组消息元数据规范化**：群组聊天缺少 `chat_type` 与对应提示行为。 | **中** — 多通道完善项，依赖社区优先级 |
| [#2481](https://github.com/nearai/ironclaw/issues/2481) | Question/Feature | **自定义 Secret 管理文档/能力**：用户不知如何安全配置站点访问凭据。 | **中** — 文档与 UX 改进需求 |

**路线图信号**：权限粒度细化（参数级授权）、E2E 测试覆盖、LLM provider 错误码规范化是近期最可能落地的三大方向。

---

## 7. 用户反馈摘要

### 真实痛点

- **安全焦虑**：用户发现无法设置自定义 Secret 且“安全无法设置”（[#2481](https://github.com/nearai/ironclaw/issues/2481)），叠加今日曝光的 Secret 扫描绕过漏洞，表明**安全感知与实际控制力**是用户信任的关键。
- **Web 端不可用**：Dashboard 循环刷新、消息输入后消失（[#2410](https://github.com/nearai/ironclaw/issues/2410)、[#2409](https://github.com/nearai/ironclaw/issues/2409)）直接破坏基础交互信任。
- **MCP 配置即崩溃**：Notion MCP 设置导致 Agent 无响应（[#2087](https://github.com/nearai/ironclaw/issues/2087)），反映**第三方工具接入的容错性**不足，用户害怕“尝试新集成”。
- **权限疲劳**：反复弹出的工具授权对话框打断工作流（[#2345](https://github.com/nearai/ironclaw/issues/2345)）——虽已修复，但说明自动化与信任边界的设计仍需优化。

### 使用场景

- **多通道部署**：Slack、Telegram、Web 并行使用，企业用户对通道级工具过滤与 OAuth 稳定性（[#2512](https://github.com/nearai/ironclaw/pull/2512)）有刚性需求。
- **长生命周期 Agent**：用户期望 Agent 实例能持久存活，而非 1 小时后死亡（[#2284](https://github.com/nearai/ironclaw/issues/2284)）。

### 满意点

- MCP 与权限相关问题的**关闭速度较快**（#2474、#2345 均在 1-2 日内关闭），显示核心团队对关键路径的响应效率。

---

## 8. 待处理积压

以下 Issue/PR 已持续开放多日，建议维护者关注：

| 条目 | 开放时长 | 风险/影响 | 链接 |
|:---|:---|:---|:---|
| **PR #1446** — Aliyun Coding Plan 支持 | ~27 天 | 超大 PR（XL），涉及 15+ 作用域，合并阻塞可能源于评审带宽不足；中国云市场集成具有生态战略价值。 | [PR #1446](https://github.com/nearai/ironclaw/pull/1446) |
| **PR #2086** — 共享 Skills 修复 | ~9 天 | XL 级别，解决管理员安装 Skills 对网关用户不可见的问题，影响多租户知识共享。 | [PR #2086](https://github.com/nearai/ironclaw/pull/2086) |
| **PR #1764** — Abound Demo（Responses API、凭证注入、Guardrails） | ~17 天 | XL 高风险管理，含生产级 Responses API 修复与凭证注入框架，是 V2 架构对外演示的关键依赖。 | [PR #1764](https://github.com/nearai/ironclaw/pull/1764) |
| **Issue #2087** — Notion MCP 配置致 Agent 无响应 | ~9 天 | 用户可见的 MCP 稳定性问题，评论活跃，尚无明确修复归属。 | [Issue #2087](https://github.com/nearai/ironclaw/issues/2087) |
| **Issue #2284** — Staging Agent 闲置 1 小时死亡 | ~6 天 | 基础设施/生命周期管理，影响异步与长时任务场景。 | [Issue #2284](https://github.com/nearai/ironclaw/issues/2284) |

---

**分析师备注**：今日 IronClaw 的健康度呈现**“高动能、高债务”**特征——代码流动极快（50 PRs/日），但 P0 Web 缺陷、关键安全漏洞与 XL 级长期 PR 并存。建议接下来 48 小时内：1）为 #2491 分配紧急修复资源；2）集中前端力量闭环 #2410/#2409；3）安排 XL PR 的专项评审冲刺。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-16

---

## 1. 今日速览

LobsterAI 今日呈现**极高开发活跃度**：过去24小时内 **27 个 PR 更新**（合并/关闭 22 个，待合并 5 个），但 **0 个新版本发布**，Issues 侧相对平静仅 3 条新增。开发团队正密集推进功能迭代与稳定性修复，覆盖 OpenClaw 运行时、IM 集成（微信/钉钉/飞书/POPO）、Cowork 协作模式、Agent 模板导入导出等核心模块。值得注意的是，今日所有 Issues 均为用户新报 Bug/需求且**无一获得关闭或官方回复**，社区支持响应速度明显滞后于开发节奏。

---

## 2. 版本发布

**无新版本发布。**

最新 Release 仍为历史版本，今日无 tag 或 release notes 更新。

---

## 3. 项目进展

今日合并/关闭的 22 个 PR 中，以下几条标志着项目关键进展：

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#1697](https://github.com/netease-youdao/LobsterAI/pull/1697) | nmgwddj | **OpenClaw 运行时瘦身 + 钉钉官方连接器迁移**：剔除重复插件 payload，修复 macOS 打包阻塞；将钉钉从旧版实现迁移至官方 `dingtalk-connector`，降低维护成本。 |
| [#1694](https://github.com/netease-youdao/LobsterAI/pull/1694) + [#1695](https://github.com/netease-youdao/LobsterAI/pull/1695) | btc69m979y-dotcom | **Copilot  provider ID 统一**：完成从 `github-copilot` 到 `lobsterai-copilot` 的数据库迁移与常量对齐，消除历史债务导致的模型引用失效。 |
| [#1696](https://github.com/netease-youdao/LobsterAI/pull/1696) | liuzhq1986 | **微信状态判断简化**：移除 `accountId` 依赖，仅按 `enabled` 判断连接状态，修复微信开关状态不一致问题；增强 QR 登录诊断日志。 |
| [#1689](https://github.com/netease-youdao/LobsterAI/pull/1689) | liuzhq1986 | **yd_cowork 遗留代码清理**：删除死代码与过时 SDK 引用，为 Cowork 架构瘦身。 |
| [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691) | liulingfeng | **Agent 模板导入导出（待合并）**：实现 Agent ↔ JSON 互转、文件/URL 导入、`.agent.json` 导出，解决 Agent 配置无法跨设备共享的痛点。 |
| [#1693](https://github.com/netease-youdao/LobsterAI/pull/1693) | leedalei | **模型设置入口优化 + 草稿保护（待合并）**：未配置模型时一键跳转设置页，防止新用户因发送消息导致输入内容丢失。 |

**整体判断**：项目今日在 **企业 IM 集成稳定性、OpenClaw 运行时健康度、Copilot 生态一致性** 三方面取得实质进展，同时 Agent 可移植性与新手体验有显著功能储备。

---

## 4. 社区热点

今日 Issues/PR 评论数均极低（最高仅 1 条评论），社区讨论热度不高，但以下条目反映用户核心诉求：

| 条目 | 热度指标 | 诉求分析 |
|:---|:---|:---|
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 1 评论 | **产品与产品线冲突**：用户报告「有道龙虾」与「智企帝王蟹」同机运行时必现 gateway 端口冲突与进程竞争。这不仅是技术 Bug，更暴露网易内部 AI 产品线（ToC 龙虾 vs ToB 帝王蟹）在本地网关架构上缺乏隔离设计，影响企业用户部署信心。 |
| [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | 0 评论 | **大模型参数可控性**：用户希望动态调整 `temperature`，甚至通过在对话中输入关键字实时修改。反映进阶用户对生成可控性的强烈需求。 |
| [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) | 0 评论 | **Linux 登录稳定性**：Deepin V25 用户持续反馈 OAuth 登录流程中浏览器回调失败（显示网络错误），但浏览器直接访问官网正常。说明桌面端登录通道在 Linux 发行版上存在兼容性或代理问题。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 龙虾与智企帝王蟹 gateway 端口冲突、进程竞争，后者鉴权失败无响应 | **无 fix PR**，需架构层面协调 |
| 🟡 **中** | [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) | Deepin V25 登录回调网络错误，阻断 Linux 用户正常使用 | **无 fix PR** |
| 🟢 **低** | [#1699](https://github.com/netease-youdao/LobsterAI/pull/1699) | 设置导入时本地不存在的 provider 导致崩溃 | **已修复并关闭** |
| 🟢 **低** | [#1696](https://github.com/netease-youdao/LobsterAI/pull/1696) | 微信 switch 状态判断依赖 accountId 导致不一致 | **已修复并关闭** |
| 🟢 **低** | [#1686](https://github.com/netease-youdao/LobsterAI/pull/1686) | POPO 消息在本地聊天记录中显示系统 header，污染 UI | **已修复并关闭** |

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) 温度参数动态调整 | 对话中通过关键字修改 `temperature` | **中**。需求明确且实现成本较低，但需设计安全的关键词拦截机制，避免误触。 |
| [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691) Agent 模板导入导出 | `.agent.json` 跨设备共享 | **高**。PR 已提交且功能完整，是社区长期痛点，预计很快合并。 |
| [#1693](https://github.com/netease-youdao/LobsterAI/pull/1693) 模型设置入口优化 + 草稿保护 | 新手引导与输入防丢 | **高**。体验优化类 PR，风险低，合并阻力小。 |
| [#1690](https://github.com/netease-youdao/LobsterAI/pull/1690) IM 实例删除二次确认 | 钉钉/飞书/QQ 配置防误删 | **高**。同理，属于低风险高价值体验改进。 |
| [#1700](https://github.com/netease-youdao/LobsterAI/pull/1700) POPO 文档/消息技能 + OpenClaw 升级 | 企业协作场景扩展 | **高**。技能生态扩展与运行时升级是项目主线，PR 内容量大但战略优先级高。 |

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的真实用户声音：

- **部署冲突焦虑**：「关闭有道龙虾，重装帝王蟹，就恢复正常」—— 用户被迫二选一，对网易 AI 产品矩阵的兼容性产生质疑。
- **参数控制饥渴**：「最好可以在对话中以关键字来动态调整」—— 高阶用户不满足于默认模型行为，希望更细粒度操控生成过程。
- **Linux 边缘化感受**：「已经升到 4.13 了还是不行」—— 多次更新仍未解决登录问题，Deepin 用户易产生被忽视感。
- **新手流失风险**（由 #1693 PR 描述反推）：未配置模型时发送消息导致输入丢失，已有用户因此受挫，说明 onboarding 流程存在明显漏斗。

---

## 8. 待处理积压

| 条目 | 创建时间 | 状态 | 提醒原因 |
|:---|:---|:---|:---|
| [#429](https://github.com/netease-youdao/LobsterAI/pull/429) | 2026-03-15 | **OPEN，stale** | Windows 下 `workingDirectory` 中文字符编码错误，已挂起 **31 天**。今日有更新但未合并，需维护者 review 是否仍阻塞。 |
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 2026-04-15 | OPEN | 产品线级端口冲突，涉及跨团队协调，建议升级至内部架构评审。 |
| [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) | 2026-04-15 | OPEN | Linux 登录问题反复出现，建议分配专人跟进 OAuth 回调与 Electron 浏览器窗口兼容性。 |

---

**日报结语**：LobsterAI 今日开发引擎全速运转，PR 吞吐量与功能深度俱佳，但 **Issues 零关闭、用户反馈零官方响应** 的现象提示社区支持带宽不足。建议团队在高速迭代的同时，至少对高严重度 Bug（#1698、#1687）给予公开进展同步，以维持开源社区信任度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-04-16

---

## 1. 今日速览

Moltis 昨日展现出**极高的开发活跃度**：20 个 PR 中有 15 个完成合并/关闭，7 个 Issues 中 6 个被迅速解决，仅余 1 个新 Bug 待处理。核心团队在社区反馈闭环上表现强劲——WhatsApp 解析失效、MCP 健康检查误报、GraphQL 消息不同步等用户痛点均在 24 小时内获得修复并合入主线。同时，配置系统、Agent 上下文管理、Matrix 认证等中长期能力正在多条 PR 线上并行推进，项目整体健康度良好。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（15 条）

| PR | 作者 | 核心进展 |
|:---|:---|:---|
| [#734](https://github.com/moltis-org/moltis/pull/734) | penso | **修复 GraphQL API 与 Web UI 的消息同步断裂**——`chat.send` 发送的消息现在会广播 `user_message` 事件，前端无需刷新即可渲染。 |
| [#733](https://github.com/moltis-org/moltis/pull/733) | penso | **修正 MCP 健康检查逻辑**——Streamable HTTP 服务器返回非 2xx/401 响应时不再被误判为 dead，解决 Bearer/OAuth 场景下的状态显示错误。 |
| [#728](https://github.com/moltis-org/moltis/pull/728) | penso | **引入 LLM 引导的 memory_forget 流程**——在确定性 `memory_delete` 之上增加智能遗忘层，由模型自主判断应删除的记忆片段。 |
| [#731](https://github.com/moltis-org/moltis/pull/731) | penso | **大规模代码结构重构**——将 27 个 `mod.rs`/`lib.rs` 中的实现代码迁移至独立模块，工程可维护性显著提升，零行为变更。 |
| [#718](https://github.com/moltis-org/moltis/pull/718) | Cstewart-HC | **发布完整配置参考文档**——1078 行的 `moltis.toml` 全选项手册，降低新用户上手门槛。 |
| [#725](https://github.com/moltis-org/moltis/pull/725) | penso | **Qwen 系统消息规范化**——合并多 system 消息为单条，避免严格 chat template 下的请求失败。 |
| [#724](https://github.com/moltis-org/moltis/pull/724) | penso | **修复 MCP 工具可选枚举参数传 `"null"` 字符串问题**——`make_nullable()` 现在会同步向 `enum` 数组注入 `null`。 |
| [#721](https://github.com/moltis-org/moltis/pull/721) | penso | **Web UI 品牌化错误页**——404/500 页面品牌化，SPA 未知路由返回真实 404 而非总回退到应用壳。 |
| [#722](https://github.com/moltis-org/moltis/pull/722) | penso | **修复 OpenAI 兼容层 CI 回归**——按文件大小守卫拆分模块，并将 strict mode 补丁逻辑隔离到独立子模块。 |
| [#720](https://github.com/moltis-org/moltis/pull/720) | penso | **去除 LLM 泄露的尾部 stop token**（如 `<\|eom\|>`），提升响应清洁度。 |
| [#709](https://github.com/moltis-org/moltis/pull/709) | penso | **WhatsApp 生态升级 0.2 → 0.5**——修复 protobuf  schema 更新导致的消息解析为空问题。 |
| [#719](https://github.com/moltis-org/moltis/pull/719) | Cstewart-HC | **Strict mode 下折叠 type 数组**——解决 Gemini via OpenRouter 拒绝 `["object", "string"]` 类型的问题。 |
| [#717](https://github.com/moltis-org/moltis/pull/717) | penso | **对 Google/Gemini via OpenRouter 跳过 strict tool schemas**，根治 #716 的 `INVALID_ARGUMENT` 错误。 |
| [#714](https://github.com/moltis-org/moltis/pull/714) | Cstewart-HC | **支持 `GUIDELINES.md` 文件覆写硬编码工具指南**，与 SOUL.md/IDENTITY.md 等保持一致的加载策略。 |
| [#667](https://github.com/moltis-org/moltis/pull/667) | Cstewart-HC | **原生 `file_read` / `file_info` 工具落地**——带目录隔离和审批门控，减少对外部 MCP filesystem 的依赖。 |

**整体判断**：昨日合并的 PR 覆盖了 **API 稳定性、UI 一致性、第三方协议兼容（MCP/WhatsApp/Matrix）、模型提供商适配（Gemini/Qwen/OpenRouter）、Agent 内存与上下文管理、开发者体验** 六大维度，项目在技术债务清理与功能演进之间取得了扎实平衡。

---

## 4. 社区热点

昨日 Issues/PRs 均无评论或 👍 数据，社区互动以**核心开发者快速响应用户报告**为主，而非公开讨论。以下条目因解决用户直接痛点而具有隐性热度：

- **[#729](https://github.com/moltis-org/moltis/issues/729) / [#734](https://github.com/moltis-org/moltis/pull/734)**：GraphQL 消息不同步——反映 API-first 用户与 Web 用户并存的场景，对 headless 部署模式至关重要。
- **[#732](https://github.com/moltis-org/moltis/issues/732) / [#733](https://github.com/moltis-org/moltis/pull/733)**：MCP HTTP 健康检查误报——说明社区正在将 Moltis 接入企业级/认证型 MCP 服务器。
- **[#716](https://github.com/moltis-org/moltis/issues/716) / [#717](https://github.com/moltis-org/moltis/pull/717) / [#719](https://github.com/moltis-org/moltis/pull/719)**：Gemini/OpenRouter 工具 schema 兼容性——表明用户群体正在积极使用非 OpenAI 主流模型。

**诉求分析**：用户正在将 Moltis 推向生产环境（认证 MCP、多模型路由、API 集成），对协议兼容性和稳定性的要求高于纯功能尝鲜。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| **高** | [#716](https://github.com/moltis-org/moltis/issues/716) | Google/Gemini via OpenRouter 因 strict tool schema 崩溃 | ✅ 已修复（#717, #719 已合并） |
| **高** | [#712](https://github.com/moltis-org/moltis/issues/712) | MCP 工具可选枚举参数传 `"null"` 字符串导致解析失败 | ✅ 已修复（#724 已合并） |
| **高** | [#732](https://github.com/moltis-org/moltis/issues/732) | MCP UI 状态错误显示为 dead | ✅ 已修复（#733 已合并） |
| **高** | [#729](https://github.com/moltis-org/moltis/issues/729) | GraphQL 发送的消息未出现在 Web UI | ✅ 已修复（#734 已合并） |
| **中** | [#534](https://github.com/moltis-org/moltis/issues/534) | WhatsApp 入站消息解密后解析为空 | ✅ 已修复（#709 已合并） |
| **中** | [#705](https://github.com/moltis-org/moltis/issues/705) | Docker 容器暴露 `/proc` 和 `/sys` | ✅ 已关闭（安全相关，需确认是否合并了对应修复 PR） |
| **待观察** | [#735](https://github.com/moltis-org/moltis/issues/735) | **自定义 ElevenLabs 语音无法工作** | 🔴 **新报，暂无修复 PR** |

> **注**：#705 虽标记为 CLOSED，但数据中未显示对应修复 PR，建议维护者确认关闭原因（是否通过 PR 合并关闭或用户自行关闭）。

---

## 6. 功能请求与路线图信号

### 待合并的功能性 PR（5 条）

| PR | 作者 | 功能方向 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#730](https://github.com/moltis-org/moltis/pull/730) | penso | **Matrix OIDC 认证**（MAS / MSC3861） | 高——解决 matrix.org 等现代 homeserver 的登录阻断问题 |
| [#723](https://github.com/moltis-org/moltis/pull/723) | Cstewart-HC | **按模型覆盖 context window**（配置层 PR 1/N） | 高——配置系统增强，文档已同步 |
| [#727](https://github.com/moltis-org/moltis/pull/727) | Cstewart-HC | **将 context window 覆盖接入 provider runtime**（PR 2/N） | 高——依赖 #723，系列 PR 完整度高 |
| [#726](https://github.com/moltis-org/moltis/pull/726) | Cstewart-HC | **Agent 工具结果 oldest-first 压缩** | 中高——解决长循环中的上下文丢失，有明确 issue 关联 |
| [#566](https://github.com/moltis-org/moltis/pull/566) | penso | **External Agents CLI Bridge 基础 crate** | 中——架构奠基，可能分多阶段释放 |

### 新功能信号

- **语音合成扩展**：#735 暴露了 ElevenLabs 自定义语音支持缺口，可能推动 TTS 提供商配置的进一步细化。
- **外部 Agent 生态**：#566 预示 Moltis 正从"单一聊天 Agent"向"多 Agent 编排中枢"演进，Claude Code / Codex CLI / ACP 等桥接值得期待。

---

## 7. 用户反馈摘要

从 Issues 中提炼的真实用户场景与情绪：

| 痛点/场景 | 来源 | 核心反馈 |
|:---|:---|:---|
| **API 与 UI 数据不一致** | #729 | "我用 GraphQL 发消息，后端存了，但前端不显示"——headless 集成用户对端到端一致性敏感。 |
| **MCP 企业级部署受阻** | #732 | 带 Bearer/OAuth 的 Streamable HTTP MCP 服务器被误判离线——安全认证场景下的可用性问题。 |
| **多模型路由兼容性** | #716 | Gemini via OpenRouter 因工具 schema 严格模式崩溃——用户 actively 使用替代模型，兼容性是关键卖点。 |
| **WhatsApp 生产可靠性** | #534 | Termux/Linux 上 WhatsApp 入站消息解密后为空——移动端/边缘部署用户依赖此通道。 |
| **语音个性化失败** | #735 | 自定义 ElevenLabs 语音不工作——TTS 深度用户对默认语音不满足，有品牌/角色化需求。 |

**满意度信号**：核心团队响应速度极快（多数 issue 24 小时内闭环），社区对问题解决效率应有正面感知。
**不满意信号**：TTS 自定义配置、Docker 安全默认设置仍有粗糙感。

---

## 8. 待处理积压

### 需维护者关注的长期/开放项

| 项目 | 类型 | 创建时间 | 风险/提醒 |
|:---|:---|:---|:---|
| [#566](https://github.com/moltis-org/moltis/pull/566) | PR (OPEN) | 2026-04-06 | **已开放 10 天**，external agents 是战略方向，建议尽快完成架构评审或拆分合并，避免分支长期漂移。 |
| [#735](https://github.com/moltis-org/moltis/issues/735) | Issue (OPEN) | 2026-04-15 | **唯一未关闭的新 Bug**，ElevenLabs 自定义语音失败，需确认是配置文档缺失还是 API 集成缺陷。 |
| #705 关闭原因 | Issue (CLOSED) | 2026-04-14 | 安全类 issue `/proc` `/sys` 暴露，建议公开备注关闭原因（对应 PR 编号或安全公告链接），避免社区疑虑。 |

---

*日报生成时间：2026-04-16 · 数据来源：moltis-org/moltis GitHub 公开活动*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-16

---

## 1. 今日速览

CoPaw（QwenPaw）昨日维持**极高活跃度**：24小时内 Issues 与 PR 各更新 **50 条**，社区吞吐量达到近期峰值。版本迭代节奏紧凑，连发 **v1.1.2-beta.1** 与 **v1.1.1.post1** 两个版本，聚焦内存文件监控、Cron 任务提示与 Ollama  provider 修复。PR 侧 **25 条已合并/关闭**，包括 Mission Mode（自主迭代长任务代理）、qwen3-coder-plus 静默停止修复等重大功能落地，显示核心开发推进有力。同时仍有 **25 个 PR 待合并**，其中本地模型路由、ACP 外部代理委托、SIP 语音通道等处于评审关键期。Issues 侧用户反馈密集，围绕**上下文管理、API 安全、模型供应商兼容性、飞书频道对接**等痛点展开讨论。

---

## 2. 版本发布

### v1.1.2-beta.1
| 属性 | 内容 |
|:---|:---|
| 发布性质 | Beta 预发布 |
| 核心变更 | ① 内存模块文件监听器支持递归配置化（`file watcher recursive configurable`）；② 新增默认 memory summary 机制 |
| 破坏性变更 | 暂无明确 Breaking Change |
| 迁移注意 | 若自定义了内存监控路径，建议检查 `recursive` 配置是否符合预期 |

**相关 PR：** [#3416](https://github.com/agentscope-ai/QwenPaw/pull/3416) [#3347](https://github.com/agentscope-ai/QwenPaw/pull/3347)

### v1.1.1.post1
| 属性 | 内容 |
|:---|:---|
| 发布性质 | 热修复（post-release） |
| 核心变更 | ① 更新 Cron Job ID 提示文案；② 修复 Ollama Provider 连接问题 |
| 破坏性变更 | 无 |
| 迁移注意 | 使用 Ollama 本地模型的用户建议升级以解决"识别为未就绪"问题 |

**相关 PR：** [#3399](https://github.com/agentscope-ai/QwenPaw/pull/3399) [#3404](https://github.com/agentscope-ai/QwenPaw/pull/3404)

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) `feat(mission): add mission mode` | @rayrayraykk | **重大功能落地**：引入自主迭代代理系统，支持复杂长运行任务，参考 Anthropic 的 long-running agent harnesses 设计。标志 CoPaw 从单轮/多轮对话向**持续自主执行**演进。 |
| [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) `fix tool call stop silently of models similar to qwen3-coder-plus` | @yuanxs21 | 修复 DashScope `qwen3-coder-plus` 等模型在工具调用前**静默停止**的 P0 级问题，直接解决 [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) 用户反馈。 |
| [#3385](https://github.com/agentscope-ai/QwenPaw/pull/3385) `Feat(Agent): Create Agent CLI && Local Agent Template` | @pan-x-c | 重构 Agent 模板系统，支持 CLI 创建 Agent 与本地模板初始化，提升开发者扩展性与工作区可维护性。 |
| [#2144](https://github.com/agentscope-ai/QwenPaw/pull/2144) `feat(routing): add local judge routing v1` | @vvv214 | 本地模型路由从固定启发式升级为 local-judge v1，为后续 [#3443](https://github.com/agentscope-ai/QwenPaw/pull/3443) [#3451](https://github.com/agentscope-ai/QwenPaw/pull/3451) 的路由策略体系奠定 runtime 基础。 |
| [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) `fix: register AgentApp dispatched requests with TaskTracker` | @ekzhu | 修复 `--background` 任务在 Agent 工作区重载时被意外取消的稳定性问题。 |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) `Feat/semantic skill routing` | @hellogxp | 语义化 Skill 路由（基于 embedding 检索 top-k 相关技能），虽标记为 `need discussions`，但已进入评审流程，有望缓解多技能场景下的 token 消耗问题。 |

**整体迈进评估**：核心 runtime（Mission Mode、路由策略、模型兼容性修复）与开发者体验（CLI/模板）双线推进，项目正从"对话式 AI 助手"向"可长期自主运行的 Agent 平台"升级。

---

## 4. 社区热点

### 高讨论 Issues

| Issue | 评论 | 热度分析 |
|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) `🐾 Help Wanted: Open Tasks — Come Contribute!` | **57** | 社区贡献任务看板，持续高活跃。昨日仍有更新，说明新贡献者涌入。P0-P2 任务分级清晰，是观察项目路线图的最佳窗口。 |
| [#3392](https://github.com/agentscope-ai/QwenPaw/issues/3392) `[Bug]: it has no api login password so insecure` | 6 | 用户强烈呼吁**默认启用 API/Web UI 密码认证**，认为当前无密码登录存在安全风险。已关闭（标记 `invalid`），但安全诉求真实且迫切，可能 resurfaced。 |
| [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) `[Bug]: 长任务执行时，中途静默停止` | 5 | qwen3-coder-plus 百分百复现的静默停止问题，已由 [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) 修复关闭。 |
| [#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426) `[Feature]: 什么时候能加上一个当前对话的上下文的使用情况呢？` | 5 | 用户需要**上下文 token 用量可视化**，长对话场景下的核心痛点，与 [#3411](https://github.com/agentscope-ai/QwenPaw/issues/3411)（配置上下文长度+自动压缩）形成需求集群。 |
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) `[Question]: QwenPaw和CoPaw关系是啥？以后是一起维护吗？` | 5 | **品牌/命名混淆**成为社区显性疑问，需官方文档或 README 明确说明，避免新用户流失。 |

### 高价值 PR 评审中

| PR | 说明 |
|:---|:---|
| [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) `ACP-based external agent delegation` | 允许主 Agent 通过 ACP 协议委托外部 Agent，实时透传工具输出。架构级扩展，评审中。 |
| [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) `SIP voice channel with pyVoIP/LiveKit` | 首个 SIP 语音通道支持，含流式 STT/TTS，对应 Roadmap #2291 Task #15。首贡献者提交，值得关注。 |

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue/PR | 状态 | 说明 |
|:---|:---|:---|:---|
| **P0** | [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) 长任务静默停止 | ✅ **已修复** | qwen3-coder-plus 等模型工具调用前无响应，[#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) 已合并。 |
| **P0** | [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) session state JSON 并发写入损坏 | 🔄 **Fix PR 待合并** | `JSONDecodeError: Extra data` 导致会话永久不可用，首贡献者提交修复， urgently needs review。 |
| **P1** | [#3397](https://github.com/agentscope-ai/QwenPaw/issues/3397) `max_input_length` 大值时 CLI 多步任务永久卡死 | 🆕 **待响应** | 无错误日志，重启无效，可能与上下文截断或 token 计算逻辑有关。 |
| **P1** | [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) 下载文件 URL 重复 `/api/files/preview` | 🆕 **待响应** | 前端路由拼接错误，影响文件下载功能。 |
| **P1** | [#3421](https://github.com/agentscope-ai/QwenPaw/issues/3421) 刷新后聊天中图片预览丢失 | 🆕 **待响应** | 前端状态持久化/URL 失效问题。 |
| **P1** | [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) Pipeline ops 每条消息执行两次 | 🆕 **待响应** | `ToolResultCompactor` 与 `ContextChecker` 重复执行，工具 ID 集合无限增长，性能与正确性隐患。 |
| **P2** | [#3375](https://github.com/agentscope-ai/QwenPaw/issues/3375) gunicorn 启动与 pydantic 冲突 | ✅ **已关闭** | 启动兼容性问题。 |
| **P2** | [#3434](https://github.com/agentscope-ai/QwenPaw/issues/3434) Ollama 本地已运行但识别为未就绪 | ✅ **已修复** | v1.1.1.post1 已包含修复。 |
| **P2** | [#3420](https://github.com/agentscope-ai/QwenPaw/issues/3420) 编辑 skill.md 后 workspace 其他文件丢失 | ✅ **已关闭** | 数据丢失风险，已快速处理。 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| **上下文用量可视化** | [#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426) | ⭐⭐⭐ 高 | 与 [#3411](https://github.com/agentscope-ai/QwenPaw/issues/3411)（配置上下文长度+自动压缩）需求共振，用户呼声强，实现路径清晰。 |
| **本地模型路由策略 v1** | [#3451](https://github.com/agentscope-ai/QwenPaw/pull/3451) [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) | ⭐⭐⭐ 高 | 昨日连发 3 个相关 PR，一个已关闭拆分，两个活跃评审中，显示团队正在集中攻关。 |
| **Agent 统计面板** | [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | ⭐⭐⭐ 高 | PR 已进入 Under Review，功能完整（会话/消息趋势、渠道 breakdown）。 |
| **Mission Mode（自主迭代任务）** | [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) | ✅ **已落地** | 已合并，预计进入 v1.2 或后续正式版。 |
| **语义化 Skill 路由** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | ⭐⭐ 中 | 需要进一步讨论，但技术方案已提交，可能作为可选实验性功能发布。 |
| **SIP 语音通道** | [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | ⭐⭐ 中 | 首贡献者大型 PR，功能完整但评审周期长，可能分阶段合并。 |
| **Plan Mode（计划模式）** | [#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) | ⭐⭐ 中 | 3月底提出，昨日仍有更新，严肃工作流用户的强需求，但尚无对应 PR。 |
| **一键备份恢复** | [#3380](https://github.com/agentscope-ai/QwenPaw/issues/3380) | ⭐⭐ 中 | Docker 用户痛点，涉及工作区、模型配置、通道等多维度，实现复杂度中等。 |
| **Kimi Code API 支持** | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | ⭐⭐ 中 | 新模型供应商接入请求，模式成熟，社区 PR 可能快速跟进。 |
| **工具操作红色风险提醒** | [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349) | ⭐⭐ 中 | 安全 UX 改进，需求明确，前端改动量小。 |
| **飞书频道/云文档/多维表格深度对接** | [#3432](https://github.com/agentscope-ai/QwenPaw/issues/3432) | ⭐ 低-中 | 用户对比 OpenClaw 体验后提出的落差反馈，涉及 Channels 体系，需评估优先级。 |

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 来源 | 典型表述 |
|:---|:---|:---|
| **上下文黑盒** | [#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426) [#3411](https://github.com/agentscope-ai/QwenPaw/issues/3411) | "一个对话久了不知道什么时候上下文满了" |
| **模型兼容性/静默失败** | [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) [#3397](https://github.com/agentscope-ai/QwenPaw/issues/3397) [#3434](https://github.com/agentscope-ai/QwenPaw/issues/3434) | "前后端无报错""永久停止响应""识别为 ollama 未就绪" |
| **安全与权限焦虑** | [#3392](https://github.com/agentscope-ai/QwenPaw/issues/3392) [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349) | "没有 api login password so insecure""增加红色醒目提醒" |
| **文件/数据管理缺陷** | [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) [#3420](https://github.com/agentscope-ai/QwenPaw/issues/3420) [#3421](https://github.com/agentscope-ai/QwenPaw/issues/3421) | "下载 URL 重复""编辑 skill.md 后其他文件丢失""刷新后图片预览丢失" |
| **备份恢复体验差** | [#3380](https://github.com/agentscope-ai/QwenPaw/issues/3380) | "恢复过程感觉不是很好，有坑""工作区域文件夹和智能体 id 必须一致" |
| **飞书生态对接不畅** | [#3432](https://github.com/agentscope-ai/QwenPaw/issues/3432) | "权限给足都无法使用""不如 OpenClaw 的插件方便" |

### 满意/期待点

- **Mission Mode 与自主任务能力**被部分高级用户期待（[#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) Plan Mode 诉求）
- **模板化 Agent 创建**（[#3385](https://github.com/agentscope-ai/QwenPaw/pull/3385)）受到开发者欢迎
- 社区对 **Roadmap 任务看板**（[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)）认可度较高，贡献参与感强

---

## 8. 待处理积压

以下 Issue/PR 需要维护者关注，避免长期悬置：

| 条目 | 创建时间 | 状态 | 关注理由 |
|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) Open Tasks | 2026-03-25 | 开放 | 57 评论的社区贡献中枢，需定期同步任务状态，防止贡献者流失。 |
| [#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) Plan Mode Request | 2026-03-28 | 开放 | 严肃工作流核心需求，提出近 3 周仍无 PR 对应，建议官方回应路线图。 |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) Skill classification function | 2026-04-05 | 开放 | 技能池分类/文件夹管理，多技能用户高频诉求，已积压 11 天。 |
| [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) Channel testing infrastructure | 2026-03-29 | Under Review | 11 个 Channel 的测试体系与 CI 门控，质量基础设施，评审已逾 2 周。 |
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) Fix session JSON corruption | 2026-04-12 | Under Review | **P0 可用性修复**，首贡献者提交， urgently needs maintainer review。 |
| [#3299](https://github.com/agentscope-ai/QwenPaw/pull/3299) Fix 400 error on multimodal tool calls | 2026-04-12 | Ready for Merge | 标记为可合并，涉及多模态工具调用的永久性 400 错误，建议尽快合入。 |

---

*日报基于 GitHub 公开数据生成，部分 PR 评论数显示为 undefined，系原始数据字段缺失。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-16

---

## 1. 今日速览

ZeroClaw 社区今日保持**高活跃度**，24小时内产生 **50 条 Issue 更新**（39 活跃/新开，11 关闭）与 **41 条 PR 更新**（34 待合并，7 已合并/关闭），无新版本发布。项目核心矛盾集中在三方面：**Web Dashboard 长期不可用**（#4866 持续发酵，12 评论）、**架构治理与编译性能**（WareWolf-MoonWall 连发 4 篇 RFC）、以及 **Provider/Channel 兼容性 Bug 密集爆发**（Groq、Kimi、Gemini、Telegram、Feishu 等）。整体健康度呈**"功能迭代快、技术债务累积、社区情绪分化"**态势——大量待合并 PR 显示贡献者热情高涨，但核心基础设施问题（构建、文档、Dashboard）正消耗用户耐心。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日已合并/关闭的 PR 共 **7 条**（从 PR 列表中推断，因数据未显式标注 merged，以下基于 Issue 关闭关联及 PR 状态分析），明确推进的功能与修复：

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #5531 | RyanHoldren | **修复 Groq 兼容性**：为 native tool 消息补充 `name` 字段，解决 Groq 400 错误 | [PR #5531](https://github.com/zeroclaw-labs/zeroclaw/pull/5531) |
| #5762 | ilteoood | **修复 MiniMax 工具调用兼容性问题**：处理 `native_tool_calling = false` 时 tool-role 消息被拒绝的问题 | [PR #5762](https://github.com/zeroclaw-labs/zeroclaw/pull/5762) |
| #5773 | RyanHoldren | **修复 Shell 权限绕过**：当 `allowed_commands=["*"]` 且 `block_high_risk_commands=false` 时，解除对反引号、`$()` 等 shell 扩展的过度拦截 | [PR #5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) |
| #5777 | hazyone | **修复流式推理内容丢失**：保留 `reasoning_content` 在 `AssistantToolCalls` 中的传递，修复 Kimi/GLM 思考模型报错 | [PR #5777](https://github.com/zeroclaw-labs/zeroclaw/pull/5777) |
| #5779 | DjaPy | **Shell 工具 TOTP 分级管控（Phase 1）**：为 `gated_commands` 引入 TOTP 门控，允许常规 shell 开放的同时对 `sudo/rm -rf` 等命令二次确认 | [PR #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) |
| #5780 | singlerider | **新增 Claude Code Skill**：`github-issue-triage` 技能，结构化 Issue 分类与生命周期管理 | [PR #5780](https://github.com/zeroclaw-labs/zeroclaw/pull/5780) |
| #5774 | RyanHoldren | **修复 WebSocket/Gateway 路径 Agent 工具注册缺失**：`Agent::from_config` 未调用 `register_skill_tools`，导致技能工具"Unknown tool" | [PR #5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) |

**进展评估**：今日合并以**"修复兼容性与安全管控"**为主，覆盖 Provider 层（Groq、MiniMax、Kimi）、Runtime 层（Shell 权限、Agent 工具注册）与工程化（Issue Triage Skill）。但**无架构级或性能级突破**，WareWolf-MoonWall 的 Microkernel RFC 系列仍停留在讨论阶段。

---

## 4. 社区热点

### 🔥 最热议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | **#4866 Web Dashboard 仍不可用** | 12 | 跨版本持续存在的 S1 级阻塞问题，用户反复遭遇 `"Web dashboard not available. Build it with: cd web && npm ci && npm run build"`。反映 **Tauri 桌面端与 Web UI 的构建/分发流程存在系统性缺陷**，且官方修复反复回退，严重损害新用户体验。 |
| 2 | **#5574 RFC: Microkernel 架构转型** | 5 | WareWolf-MoonWall 提出的 v0.7.0→v1.0.0 架构蓝图，意图将"被动增长"的代码库重构为"有意设计"的微内核。社区对**编译慢、耦合重**的痛点高度共鸣，但转型成本与时间表存疑。 |
| 3 | **#4851 配置 GitHub Copilot 作为 Provider** | 5 | 已关闭的支持类 Issue，暴露 **Copilot 集成功能"有代码无文档"** 的典型问题，用户无法自助完成配置。 |
| 4 | **#5537 文件解析导致持久性错误循环** | 4 | S0 级安全问题：GPT 不支持文件解析，但 ZeroClaw 自动提交文件给模型，触发错误后进入**无限循环**，存在数据滥用与 API 费用失控风险。 |
| 5 | **#5575 编译极慢影响开发效率** | 4 | 已关闭，但问题未根治。单文件修改触发全量编译，与 #5574 Microkernel RFC 形成因果链——**架构债务直接转化为开发者体验债务**。 |
| 6 | **#2691 代码质量与社区协作态度堪忧** | 4 | 👍 **9**（全站最高），社区成员 creke 长篇控诉维护者**忽视 PR、关闭 Issue 草率、沟通冷漠**。此 Issue 虽被关闭，但高赞说明**社区信任危机已积累到临界点**。 |

**诉求总结**：用户不再满足于"功能多"，而是要求 **"构建可复现、文档可跟随、Bug 可闭环、决策可透明"**。

---

## 5. Bug 与稳定性

按严重程度排列，标注 fix PR 状态：

### S0 - 数据丢失 / 安全风险

| Issue | 标题 | 状态 | 是否有 fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #5537 | 文件解析导致持久性错误循环 | 已关闭 | ❌ 无明确 PR，支持类关闭 | [Issue #5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) |
| #5542 | WSL2 连续 OOM 杀死进程 | 进行中 | ❌ 无 | [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) |
| #5528 | 邮件通道配置逻辑不当 | 进行中 | ❌ 无 | [Issue #5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) |
| #5672 | Feishu `mention_only` 失效，非提及消息仍响应 | 进行中 | ❌ 无 | [Issue #5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) |
| #5654 | Telegram 配置加密后 token 无法工作 | 进行中 | ❌ 无 | [Issue #5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) |
| #5533 | `allowed_path` 包含逻辑不生效（`~/` 允许后 `~/dev` 仍被拒绝） | 进行中 | ❌ 无 | [Issue #5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) |
| #5518 | `forbidden_path_argument` 误拦截安全重定向目标（`/dev/null` 等） | 进行中 | ❌ 无 | [Issue #5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518) |

### S1 - 工作流阻塞

| Issue | 标题 | 状态 | 是否有 fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #4866 | Web Dashboard 不可用 | 开放 | ❌ 长期无有效修复 | [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| #5600 | Kimi-code Provider 流式调用工具时报错 | 进行中 | ✅ #5777 可能相关（`reasoning_content` 修复） | [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| #5628 | Daemon 服务开机自启导致手动运行端口冲突 | 进行中 | ❌ 无 | [Issue #5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) |
| #5564 | 自定义 Provider 工具空输出导致后续请求失败 | 进行中 | ❌ 无 | [Issue #5564](https://github.com/zeroclaw-labs/zeroclaw/issues/5564) |
| #5527 | Gemini OAuth 再次变更导致认证失败 | 进行中 | ❌ 无 | [Issue #5527](https://github.com/zeroclaw-labs/zeroclaw/issues/5527) |
| #5475 | Copilot + Telegram 导致 "Invalid parameter" | 进行中 | ❌ 无 | [Issue #5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475) |

### S2 - 性能降级

| Issue | 标题 | 状态 | 是否有 fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #5670 | Groq Provider 400 错误 | 进行中 | ✅ #5531 已合并（Groq `name` 字段修复） | [Issue #5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) |
| #5634 | Web Dashboard 每次刷新创建新会话，`session_persistence` 被忽略 | 进行中 | ❌ 无 | [Issue #5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) |
| #5562 | Windows 执行 shell 命令时闪 cmd 窗口 | 进行中 | ❌ 无 | [Issue #5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562) |
| #5470 | "safe mode" 下多问题并存（Telegram 重复记忆等） | 进行中 | ❌ 无 | [Issue #5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) |
| #5269 | 安装文档与方法需改进 | 进行中 | ❌ 无 | [Issue #5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) |

### S3 - 轻微问题

| Issue | 标题 | 状态 | 是否有 fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #5536 | Embedding 搜索分数未乘 100 显示为百分比 | 进行中 | ❌ 无 | [Issue #5536](https://github.com/zeroclaw-labs/zeroclaw/issues/5536) |
| #5541 | `Dockerfile.debian` 三处错误导致本地构建失败 | 进行中 | ❌ 无 | [Issue #5541](https://github.com/zeroclaw-labs/zeroclaw/issues/5541) |

---

## 6. 功能请求与路线图信号

| Issue/PR | 内容 | 纳入下一版本可能性 | 分析 |
|:---|:---|:---|:---|
| **#5574 Microkernel Transition RFC** | 架构级重构：crate 拆分、内核-服务分离 | ⭐⭐⭐⭐⭐ 高优先级讨论中 | 与 #5575 编译慢、#5447 crate split 请求形成强关联，维护团队 WareWolf-MoonWall 主导，但实施周期可能跨 v0.7→v1.0 |
| **#5619 原生 OpenRouter Provider 路由支持** | 支持 `provider` 字段与 `extra_body` | ⭐⭐⭐⭐☆ 高 | 技术方案清晰（扩展 `NativeChatRequest`），OpenRouter 为热门聚合器，用户呼声明确 |
| **#5162 Mattermost WebSocket 多通道支持** | 替换 3 秒轮询为实时 WS | ⭐⭐⭐⭐☆ 高 | PR 已开放近两周，功能完整，属于 Enterprise 集成刚需 |
| **#5727 Matrix 加密媒体下载与出站附件** | 修复 E2E 媒体并补全发送能力 | ⭐⭐⭐⭐☆ 高 | PR 已存在，修复 regression，属于合规性必需 |
| **#5779 Shell TOTP 分级门控** | `gated_commands` 细粒度安全 | ⭐⭐⭐⭐☆ 高 | **已合并 Phase 1**，后续可能扩展至更多工具 |
| **#5714 Prometheus/TUI onboarding 改为 opt-in** | 减少默认依赖体积 | ⭐⭐⭐☆☆ 中 | 性能优化类，影响开发者体验，但非用户-facing |
| **#5700 OTEL 导出认证头支持** | `otel_headers` 配置 | ⭐⭐⭐☆☆ 中 | 企业可观测性需求，PR 已存在，改动面小 |

**信号判断**：下一版本（v0.7.0 或补丁版）极可能聚焦 **"架构瘦身 + Provider 生态补全 + 企业集成加固"**，而 Dashboard 可用性若再不解决，将成为版本发布的**阻塞性风险**。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实声音：

### 😤 核心痛点

- **"安装即劝退"**：Web Dashboard 不可用（#4866）、Docker 构建失败（#5541）、安装文档缺失（#5269）形成**新用户流失漏斗**。
- **"Provider 配置像黑箱"**：Copilot（#4851）、Groq（#5670）、Kimi（#5600）、Gemini（#5527）接连出现兼容性问题，用户感知为"**支持列表长，但每个都要自己踩坑修**"。
- **"安全与便利的边界混乱"**：`allowed_path` 逻辑反直觉（#5533）、`forbidden_path_argument` 过度拦截（#5518）、Shell 权限绕过（#5773 修复前）——用户不理解"为什么配置了还不行"。
- **"社区贡献没有回响"**：#2691 高赞控诉维护者**不 review PR、不解释关闭原因、不更新进展**，导致外部贡献者热情消退。

### 😊 正向反馈

- 功能覆盖广（多 Channel、多 Provider、Skills、Memory）被认可，用户愿意"基于 ZeroClaw 做二次开发"（#5575）。
- 安全设计（OTP、路径隔离、命令白名单）的方向获得认同，但**执行细节需要打磨**。

### 🎯 典型使用场景

- **个人 AI 助手**：通过 Telegram/Feishu 远程控制本地 Agent。
- **开发者工具链**：将 ZeroClaw 作为 Claude Code/Codex 的本地编排层。
- **企业 IM 集成**：Mattermost、Matrix、飞书的团队级部署。

---

## 8. 待处理积压

以下 Issue/PR **长期未获有效响应或处于悬停状态**，建议维护者优先关注：

| 类型 | 编号 | 标题 | 悬停时间 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| Issue | #4866 | Web Dashboard 不可用 | 创建 19 天，最后更新 1 天前，12 评论无修复 | **新用户转化率崩塌** | [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| Issue | #2691 | 代码质量与社区协作态度 | 创建 43 天，👍 9，关闭后仍被引用 | **社区信任危机** | [Issue #2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) |
| PR | #5162 | Mattermost WebSocket 支持 | 开放 14 天 | 企业用户集成刚需 | [PR #5162](https://github.com/zeroclaw-labs/zeroclaw/pull/5162) |
| PR | #4954-#4947 系列 | 工具层 RateLimit 重构（yijunyu） | 开放 18+ 天，共 6 个关联 PR | 代码整洁与可维护性， contributor 体验 | [PR #4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954) 等 |
| Issue | #5542 | WSL2 OOM | 开放 7 天，S0 级，无响应 | 内存泄漏或无限增长嫌疑 | [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) |
| Issue | #5269 | 安装文档改进 | 开放 12 天 | 文档债务持续累积 | [Issue #5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) |

---

**分析师备注**：ZeroClaw 正处于"**功能繁荣期向治理成熟期过渡**"的关键节点。WareWolf-MoonWall 的 RFC 系列表明团队已意识到技术债务，但**执行速度若跟不上讨论速度**，高活跃 PR/Issue 数据反而会成为"积压焦虑"的放大器。建议短期内设立 **"Dashboard 可用性"** 与 **"社区响应 SLA"** 两个攻坚目标，以修复用户信心。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*