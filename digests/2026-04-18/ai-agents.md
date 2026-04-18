# OpenClaw 生态日报 2026-04-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-18 00:13 UTC

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

# OpenClaw 项目动态日报 | 2026-04-18

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内 500 条 Issues 更新（338 活跃/新开，162 关闭）、500 条 PR 更新（360 待合并，140 已合并/关闭），无新版本发布。社区聚焦三大主线：**安全可信基础设施**（Agent 身份验证、行为信誉）、**多通道稳定性攻坚**（Telegram/Discord/Slack/Web UI 修复潮）、以及 **2026.4.14 版本回归问题**的紧急修复。PR 侧呈现"小步快跑"特征，大量 XS/S 级安全补丁与通道修复并行推进，但 XL 级架构重构（BlueBubbles 客户端统一、WhatsApp 策略层治理）仍处于 Draft/Review 阶段，整体项目处于**高动能、高债务并存**状态。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#64722](https://github.com/openclaw/openclaw/pull/64722) | Linux2010 | `node:sqlite` 不可用时自动降级 JSON 文件存储 | 解决 Homebrew Node.js 构建导致的网关每 6-7 分钟崩溃，提升兼容性 |
| [#68292](https://github.com/openclaw/openclaw/pull/68292) | thesomewhatyou | **安全加固四连击**：MCP 所有权伪造防护、轮询重复投递修复、cron 信任边界提升、故障分类缺口补齐 | 🔴 **两项 Critical**：阻断 MCP 会话劫持与权限提升攻击向量 |
| [#61693](https://github.com/openclaw/openclaw/pull/61693) | Linux2010 | 模型冷却熔断器：全凭证返回 `model_cooldown` 时进入冷却态，拒绝消息并提示自动恢复 | 终结"静默消耗资源数小时的无限重试循环" |
| [#67515](https://github.com/openclaw/openclaw/pull/67515) | barronlroth | 新增 Google Gemini TTS 提供商，支持 `responseModalities: ["AUDIO"]` | 扩展语音能力，24kHz PCM/WAV 双输出 |
| [#65644](https://github.com/openclaw/openclaw/pull/65644) | coygeek | Podman 环境模板加固：显式标注"模板专用"，强制复制到私有 env 文件 | 消除空 `OPENCLAW_GATEWAY_TOKEN=` 误部署风险 |

**整体推进评估**：今日合并以**可靠性兜底**和**安全补漏**为主，无重大功能突破。核心架构债务（多通道统一客户端、WhatsApp 策略层）仍在 Review 队列。

---

## 4. 社区热点

### 🔥 讨论最激烈的 Issues

| Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) **RFC: Native Agent Identity & Trust Verification** | 93 | 基于 ERC-8004/W3C DID/VC 的 Agent 原生身份与信任验证 | **基础设施级命题**：MolTrust 推动将加密身份层植入 OpenClaw 内核，而非插件层。社区在争论"是否应由项目内置"还是"保持中立、由用户自选"。高评论量反映 AI Agent 生态对**防冒充、防权限升级**的集体焦虑 |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker 中 `brew not installed` 导致 Skill 安装失败 | 24 / 👍17 | 官方 Docker 镜像应内置 Linux 包管理器或移除 brew 依赖 | **长期痛点**：17 个赞显示广泛影响，但标记 `stale` 说明维护资源倾斜。用户被迫在容器内手动安装 brew 或绕过官方镜像，体验断裂 |
| [#64799](https://github.com/openclaw/openclaw/issues/64799) Volcengine Coding Plan 模型解析失败 | 23 | `volcengine-plan/ark-code-latest` 被识别为 Unknown model | **国产模型适配滞后**：字节跳动火山引擎最新模型代号变更后，OpenClaw 的模型别名映射未及时跟进，影响国内开发者 |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) OAuth 多步工具调用 60 秒挂起（google-gemini-cli） | 21 | 原生 OAuth 路径存在硬编码重试+静默 429，自架代理快 6 倍 | **性能与透明度缺陷**：用户通过对比实验定位到根因，但官方未提供调试开关或指数退避配置 |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) OAuth Token 刷新竞态条件导致误故障转移 | 21 / 👍14 | 多 Agent 共享 OAuth Profile 时并发刷新触发 `refresh_token_reused` | **已关闭**：今日关闭，说明修复落地。14 赞显示该问题曾造成广泛的生产环境抖动 |

### 关联 PR 信号
- 身份验证 RFC（#49971）直接催化了行为信誉层提案 [#55342](https://github.com/openclaw/openclaw/issues/55342)（15 评论），形成"身份→行为"双层安全讨论脉络

---

## 5. Bug 与稳定性

### 🔴 Critical / 高影响

| Issue | 状态 | 严重程度 | 根因 | Fix PR |
|:---|:---|:---|:---|:---|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) Windows 聊天 UI 回归：输入吞字、流式回复不可见 | OPEN | **P0-UI 阻断** | 2026.4.14 渲染层变更 | 无明确 PR，[#67649](https://github.com/openclaw/openclaw/issues/67649) 同类崩溃可能相关 |
| [#67295](https://github.com/openclaw/openclaw/issues/67295) `agents add` 写入错误 baseUrl，多提供商同时断裂 | OPEN | **P0-配置损坏** | CLI 生成 `models.json` 时 URL 拼接逻辑错误（多 `/v1` 或缺失） | 无 |
| [#67744](https://github.com/openclaw/openclaw/issues/67744) 未配置 TTS 时 Agent 无限循环（275 条消息/10分钟） | OPEN | **P0-资源耗尽** | TTS 工具调用失败未正确终止，进入重试风暴 | [#67980](https://github.com/openclaw/openclaw/pull/67980) **已提交**：标记 TTS 失败为 error 而非 success |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) Coding Agent 完全无法完成任务（2026.4.2→4.x 回归） | OPEN | **P1-核心功能退化** | 状态更新模糊化，实际执行流中断 | 无 |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) Azure Foundry GPT 模型请求 schema 被拒 | OPEN | **P1-云提供商兼容** | 2026.4.11 工具/推理载荷格式变更 | 无 |

### 🟡 中影响 / 有 workaround

| Issue | 状态 | 说明 | Fix PR |
|:---|:---|:---|:---|
| [#64799](https://github.com/openclaw/openclaw/issues/64799) Volcengine 模型 Unknown | OPEN | 别名映射缺失 | 无 |
| [#48479](https://github.com/openclaw/openclaw/issues/48479) google-vertex 错误使用 API-key 而非 ADC | OPEN | 2026.3.13 认证路径回退错误 | 无 |
| [#64852](https://github.com/openclaw/openclaw/issues/64852) google-vertex OAuth 401（4.9→4.10 回归） | OPEN | 服务账号凭证加载断裂 | 无 |
| [#63132](https://github.com/openclaw/openclaw/issues/63132) STT 私有 IP 被 SSRF 防护拦截 | OPEN | 2026.4.7 安全策略过严 | 无 |
| [#67888](https://github.com/openclaw/openclaw/issues/67888) Opus 4.7 首轮请求 400（thinking 类型不匹配） | OPEN | `supportsAdaptiveThinking()` 未包含 `opus-4-7` | 无 |

### ✅ 今日关闭的 Bug

| Issue | 说明 |
|:---|:---|
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | OAuth 刷新竞态 → 已修复 |
| [#32892](https://github.com/openclaw/openclaw/issues/32892) | `openai-codex` 登录无提供商插件 → 已修复 |
| [#33229](https://github.com/openclaw/openclaw/issues/33229) | Slack `/session` 损坏 → 已修复 |
| [#32833](https://github.com/openclaw/openclaw/issues/32833) | exec 插件安装失败 → 已修复 |
| [#67074](https://github.com/openclaw/openclaw/issues/67074) | QuickStart `trim` 崩溃 → 已修复（同 [#67649](https://github.com/openclaw/openclaw/issues/67649)） |
| [#64978](https://github.com/openclaw/openclaw/issues/64978) | Chrome CDP 启动误报失败 → 已修复 |
| [#59205](https://github.com/openclaw/openclaw/issues/59205) | Ollama Cloud 401 → 已修复 |
| [#58986](https://github.com/openclaw/openclaw/issues/58986) | Discord slash 命令仅返回 "✅ Done." → 已修复 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent 原生身份验证 RFC | 基础设施 | ⭐⭐⭐⭐ 高 | 93 评论+外部标准引用（ERC-8004），已有配套行为信誉提案 #55342，生态刚需 |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) 行为信誉层（Skill 恶意行为检测） | 安全 | ⭐⭐⭐⭐ 高 | 直接引用 #49971 数据（341 恶意 Skill、13.4% 严重问题），与 Koi Security/Snyk 报告联动 |
| [#8081](https://github.com/openclaw/openclaw/issues/8081) 多用户 RBAC 权限管理 | 企业功能 | ⭐⭐⭐☆ 中 | 👍28 为今日最高赞需求，但创建于 2 月初、9 评论未获官方回应，资源优先级存疑 |
| [#68331](https://github.com/openclaw/openclaw/pull/68331)  per-agent TTS/STT 配置覆盖 | 体验增强 | ⭐⭐⭐⭐⭐ **已提交** | PR 已开，解决多 Agent 语音个性化痛点，预计下一版本纳入 |
| [#67515](https://github.com/openclaw/openclaw/pull/67515) Google Gemini TTS 提供商 | 语音 | ⭐⭐⭐⭐⭐ **已合并** | 已落地 |
| [#32513](https://github.com/openclaw/openclaw/issues/32513) Agent 超时自动重试 | 可靠性 | ⭐⭐⭐☆ 中 | 6 评论/3 赞，需求明确但设计争议（重试策略、退避算法） |
| [#32621](https://github.com/openclaw/openclaw/issues/32621) message 工具内 hook 点 | 扩展性 | ⭐⭐☆☆ 低 | 7 评论，架构侵入性强，需核心团队决策 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 典型引用 | 根因归类 |
|:---|:---|:---|
| **版本升级即"踩雷"** | "2026.4.14 升级后聊天体验严重退化"（[#67035](https://github.com/openclaw/openclaw/issues/67035)）、"Coding Agent 之前能用现在完全不做实事"（[#62505](https://github.com/openclaw/openclaw/issues/62505)） | 回归测试覆盖不足，快速迭代牺牲稳定性 |
| **配置即故障** | "新装 4.14，Skip for now 就 TypeError"（[#67074](https://github.com/openclaw/openclaw/issues/67074)）、"`agents add` 同时搞坏 OpenRouter/Arcee/OpenAI-Codex/GitHub Copilot"（[#67295](https://github.com/openclaw/openclaw/issues/67295)） | CLI 向导与配置生成缺乏校验层 |
| **Docker 体验断裂** | "官方镜像里没有 brew，Linux 容器装不了 Skill"（[#14593](https://github.com/openclaw/openclaw/issues/14593)）、"ACP 工具要装在 gateway 容器而非 sandbox"（[#68337](https://github.com/openclaw/openclaw/pull/68337) 文档补丁） | 容器化策略与文档指引脱节 |
| **国产/区域模型适配滞后** | "Volcengine 模型被识别为 Unknown"（[#64799](https://github.com/openclaw/openclaw/issues/64799)） | 模型别名维护依赖社区 PR，非官方主动跟进 |
| **调试黑箱** | "60 秒挂起，自架代理快 6 倍，但官方路径没有任何 429 提示"（[#36399](https://github.com/openclaw/openclaw/issues/36399)） | 错误处理与可观测性不足 |

### 😊 正向反馈

- **安全响应速度获认可**：[#68292](https://github.com/openclaw/openclaw/pull/68292) 安全加固 PR 快速合并，社区对 Critical 漏洞处理效率表示肯定
- **多通道覆盖广度**：Telegram/Discord/Slack/Matrix/BlueBubbles/WhatsApp 等持续迭代，满足多元部署场景

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue

| Issue | 创建 | 最后更新 | 危险信号 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#8081](https://github.com/openclaw/openclaw/issues/8081) RBAC 多用户权限 | 2026-02-03 | 2026-04-17 | 👍28 / 9 评论 / 2.5 个月无官方回应 | 标记 `roadmap-candidate` 或明确拒绝，避免企业用户流失 |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker brew 缺失 | 2026-02-12 | 2026-04-17 | `stale` 标签 / 👍17 / 2 个月 | 移除 stale，分配 `area:docker` 负责人，或官方声明"不支持容器内 brew" |
| [#28222](https://github.com/openclaw/openclaw/issues/28222) diagnostics-otel 插件无法加载 | 2026-02-27 | 2026-04-17 | `stale` / 11 评论 / 依赖 `@opentelemetry/api` 缺失 | 明确插件依赖管理策略：内置 vs 用户自装 |
| [#30257](https://github.com/openclaw/openclaw/issues/30257) boot-md hook 竞态 | 2026-03-01 | 2026-04-17 | `stale` / 6 评论 / 核心启动逻辑 | 网关启动时序重构时需纳入验收清单 |

### PR 侧风险

| PR | 状态 | 风险 |
|:---|:---|:---|
| [#68234](https://github.com/openclaw/openclaw/pull/68234) BlueBubbles 客户端统一（XL） | Draft | 4 月 17 日开 Draft，"smoke-test on Lobster before marking ready"——大型重构缺乏明确 Review 截止日期，可能长期悬置 |
| [#65700](https://github.com/openclaw/openclaw/pull/65700) WhatsApp 策略层统一（XL） | OPEN | 4 月 13 日创建，涉及"inbound policy facts 四处重复计算"的架构债务，需核心维护者深度 Review |

---

**日报生成时间**：2026-04-18  
**数据来源**：openclaw/openclaw GitHub 公开活动流  
**健康度评分**：⭐⭐⭐☆☆（高活跃度/高债务，稳定性修复压力大于功能创新动能）

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告 | 2026-04-18

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能堆砌"向"架构治理"的关键转折**：头部项目（OpenClaw、ZeroClaw）日均 500+ 条 Issues/PR 的极端活跃度背后，是稳定性债务与安全漏洞的集中爆发；中型项目（NanoBot、Moltis、CoPaw）以 50-100 条日活聚焦特定场景，工程纪律更优；尾部项目（TinyClaw、ZeptoClaw）则因维护者带宽不足或定位模糊而边缘化。**容器化部署、多模型路由、记忆系统架构**成为全生态共同攻坚的三大技术高地，而品牌迁移（CoPaw→QwenPaw）、编译器升级（NullClaw Zig 0.16）、工作空间重构（ZeroClaw Cargo workspace）等工程决策的质量，直接决定项目能否跨越"可用"到"可靠"的鸿沟。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已处理) | 今日 Release | 健康度评分 | 核心状态 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (338/162) | 500 (360/140) | 无 | ⭐⭐⭐☆☆ | 高动能、高债务，P0 回归问题紧急修复中 |
| **NanoBot** | 18 (11/7) | 54 (28/26) | 无 | ⭐⭐⭐⭐☆ | 可靠性工程密集落地，记忆架构讨论升温 |
| **Hermes Agent** | 50 (43/7) | 50 (34/16) | 无 | ⭐⭐⭐⭐☆ | 修复响应快，Kimi/macOS 稳定性攻坚 |
| **PicoClaw** | 109 (105/4) | 138 (111/27) | v0.2.6-nightly | ⭐⭐⭐☆☆ | 极高产出/极低关闭率，审查瓶颈严重 |
| **NanoClaw** | 12 (11/1) | 22 (9/13) | 无 | ⭐⭐⭐⭐☆ | v2 架构加速，Bun 迁移+多模型扩展 |
| **NullClaw** | ~8 (估) | 19 (3/16) | **v2026.4.17** | ⭐⭐⭐⭐⭐ | 高收敛度，Zig 迁移+安全加固完成 |
| **IronClaw** | 28 (20/8) | 50 (36/14) | 无 | ⭐⭐⭐☆☆ | Bug Bash 高缺陷产出，staging 承压 |
| **LobsterAI** | 7 (4/3) | 28 (7/21) | **2026.4.17** | ⭐⭐⭐⭐☆ | 网易有道背书，IM 通道多元化推进 |
| **TinyClaw** | 0 | 1 (0/1) | 无 | ⭐⭐☆☆☆ | 极低活跃度，社区参与待激活 |
| **Moltis** | 14 (7/7) | 16 (5/11) | 2 个日更版本 | ⭐⭐⭐⭐⭐ | 当日 Bug 闭环率 71%，工程效率标杆 |
| **CoPaw/QwenPaw** | 50 (28/22) | 45 (20/25) | **v1.1.2** | ⭐⭐⭐☆☆ | 品牌迁移阵痛，Mission Mode 发布 |
| **ZeptoClaw** | 0 | 0 | 无 | — | 24h 无活动，项目停滞 |
| **ZeroClaw** | 33 (29/4) | 50 (31/19) | 3 个 beta | ⭐⭐⭐☆☆ | 历史最大重构期，31 PR 积压含 5+ 高风险 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 绝对领先：500 Issues/500 PR 日活 = 第二名 10 倍量级 | NanoBot(54)、Moltis(16) 等难以望其项背；ZeroClaw(50) 为最接近追赶者 |
| **技术路线** | **"全栈覆盖、多通道优先"**：Telegram/Discord/Slack/Matrix/WhatsApp/BlueBubbles 全量支持，Web UI 重度投入 | 对比 Moltis（Rust 原生、协议层深度）、NullClaw（Zig 高性能、极简内核）、NanoClaw（容器化 Agent 专用），OpenClaw 选择"广度优先"而非"深度优先" |
| **架构债务** | **最严重**：XL 级重构（BlueBubbles 客户端统一 #68234、WhatsApp 策略层 #65700）长期 Draft，360 待合并 PR 形成审查黑洞 | Moltis 同日 71% Bug 闭环率、NullClaw 16/19 PR 合并率形成鲜明反差 |
| **安全响应** | **快速但被动**：Critical 漏洞（MCP 所有权伪造 #68292）24h 内合并，但缺乏主动安全治理（对比 Hermes #9179 安全政策讨论、Moltis NIP-59 Gift Wrap 隐私增强） |
| **核心优势** | **生态位垄断**：作为"个人 AI 助手"品类的默认参照系，技能插件（Skills）、多通道适配器、MCP 集成构成事实标准；迁移用户（NanoClaw、NullClaw 文档均提及 OpenClaw 对比）验证其标杆地位 |
| **隐忧** | **"成功者的诅咒"**：规模膨胀导致核心维护者带宽耗尽，P0 回归（#67035 Windows UI 吞字、#67295 配置损坏）频发，企业用户可能向 Moltis/ZeroClaw 分流 |

**关键差异点**：OpenClaw 是唯一将 **"社交渠道原生集成"** 作为核心架构（而非插件）的项目，这使其在个人用户场景不可替代，但也导致代码库膨胀、测试矩阵爆炸。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与紧迫性 |
|:---|:---|:---|
| **记忆系统架构升级** | NanoBot(#3227)、PicoClaw(#1919 Seahorse)、ZeroClaw(#5823 prune_history)、Hermes(#7619 149轮污染) | 线性 `history.jsonl`→`MEMORY.md`→LLM 压缩管道被普遍识别为瓶颈；生物启发记忆（Seahorse）、知识图谱（NullClaw #712）、向量检索（CoPaw #3548）等替代方案涌现 |
| **多模型智能路由** | NanoClaw(#1811 三级分类器)、CoPaw(#3452/#3550 LLM路由)、OpenClaw(模型冷却熔断器 #61693) | 成本敏感场景下"Haiku→Sonnet→Opus"降级策略、本地优先/云端优先按 Agent 作用域分流成为标配需求 |
| **容器化与边缘部署** | NanoClaw(Bun 运行时 #1813)、ZeroClaw(Docker 沙箱 #5153)、OpenClaw(Podman 模板 #65644)、Moltis(Podman 兼容 #765) | "开发机→VPS→边缘设备"全链路容器化，但配置发现（NanoClaw #1819 遥测无 opt-in）、沙箱策略（ZeroClaw Landlock 毒化）等工程细节决定生产可用性 |
| **安全可信基础设施** | OpenClaw(#49971 Agent 身份 RFC)、Hermes(#9179 安全政策)、ZeroClaw(S1 沙箱问题)、Moltis(NIP-59 Gift Wrap) | 从"功能安全"（漏洞修复）向"架构安全"（身份验证、行为信誉、隐私增强）演进，ERC-8004/W3C DID 等标准进入讨论 |
| **IM 通道企业级深化** | LobsterAI(微信/邮件/NIM)、CoPaw(企业微信/Signal/WhatsApp)、Moltis(Slack/Matrix)、ZeroClaw(Telegram) | 从"能收发消息"到"权限状态机一致""消息去重""话题回复"等企业协作刚需 |
| **可观测性与调试** | NanoBot(#3107 状态可视化)、PicoClaw(#2137 Live Task List)、OpenClaw(#36399 60秒挂起黑箱) | Agent 执行过程"黑盒"导致用户焦虑，实时任务列表、上下文使用可视化（`/context`）、流式延迟指标成为体验分水岭 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 多通道社交集成 + 技能插件生态 | 个人极客、小型团队、渠道运营者 | Node.js 单体架构，通道深度耦合内核；MCP 作为一等扩展机制 |
| **NanoBot** | 轻量可扩展 + 教育入门价值 | AI Agent 初学者、快速原型开发者 | 代码整洁度获社区赞誉；"轻量"定位与记忆架构瓶颈形成张力 |
| **Hermes Agent** | 自改进 Agent + 技能迁移工具 | 研究者、Claude Code 迁移用户 | 唯一强调"自修改架构"（#11692）；macOS 原生体验优先 |
| **PicoClaw** | 中文生态适配 + 嵌入式/移动端 | 中国开发者、Android Termux 用户 | Go 语言实现；LM Studio Easy Connect、QQ/飞书等本土渠道优先 |
| **NanoClaw** | 容器化 Agent 运行时 + 商业化工作流 | Telegram 商业化运营者、多租户 SaaS 构建者 | v2 全面容器化（Bun）；OpenCode/OpenAI 多模型；邮件分类等垂直场景 |
| **NullClaw** | 高性能极简内核 + 长期记忆 | 性能敏感型开发者、Zig 生态早期采用者 | Zig 语言实现；SQLite 递归 CTE 知识图谱；Heartbeat 守护模式 |
| **IronClaw** | 托管服务 + 企业渠道（钉钉） | 企业 IT 部门、NEAR 生态用户 | Rust 实现；Gateway 前端重度投入；staging 环境驱动开发 |
| **LobsterAI** | 桌面端 IM 客户端 + OpenClaw 引擎封装 | 中文个人用户、网易有道生态 | Electron 桌面应用；Cowork 会话模式；NIM 多 bot 企业投递 |
| **Moltis** | 多 Agent 协作工作区 + 代码自检索 | 开发者团队、多项目管理者 | Rust 实现；4-PR 完成代码索引子系统；PWA 移动端推送 |
| **CoPaw/QwenPaw** | 自主任务执行（Mission Mode）+ 国产模型优先 | 中国开发者、Qwen 生态用户 | Python 实现；品牌迁移中；LLM 路由+语义技能路由推进 |
| **ZeroClaw** | 安全沙箱 + 金融合规（FINOS） | 金融机构、合规敏感型企业 | Rust Cargo workspace；Landlock/Seccomp 沙箱分层；Supervised 权限模式 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **超大规模·债务承压** | OpenClaw、ZeroClaw | 日活 500+ 条，待合并 PR >300/30，P0-P1 缺陷持续涌现 | **快速迭代期** → 需紧急转入"质量巩固 Sprint"，否则企业用户流失 |
| **中型规模·效率标杆** | Moltis、NanoBot、Hermes Agent、NullClaw | 日活 15-50 条，当日闭环率 50-70%，工程纪律严明 | **质量巩固期** → 具备向"稳定发行"跃迁的条件，Moltis 已接近 |
| **功能冲刺·体验摩擦** | CoPaw/QwenPaw、NanoClaw、IronClaw、LobsterAI | 版本发布密集（v1.1.2、3 个 beta、日更版本），但品牌迁移/架构重构/Staging 稳定性等摩擦显著 | **快速迭代期** → 需平衡功能创新与升级体验 |
| **边缘化/停滞** | TinyClaw、ZeptoClaw、PicoClaw | 日活 <5 或 0，或极高产出/极低关闭率（PicoClaw 111 待合并 PR） | **维护性活跃或衰退期** → PicoClaw 需审查机制改革，其余需维护者注入或重新定位 |

**关键转折点信号**：Moltis 的 71% Bug 当日闭环率 + 代码索引子系统 4 日完工，证明**中型项目可通过严格工程纪律实现"快而稳"**；OpenClaw 的 360 待合并 PR 则警示**规模扩张若无治理机制升级，将陷入"越活跃越脆弱"的陷阱**。

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的价值 |
|:---|:---|:---|
| **"Agent 身份层"从插件走向内核** | OpenClaw #49971 (93 评论)、MolTrust 推动 ERC-8004/W3C DID | 2026 年 H2 可能成为 Agent 互操作标准落地窗口期，提前适配身份验证架构可避免后期重构 |
| **记忆系统从"压缩摘要"向"结构化检索"范式转移** | NanoBot #3227 明确对比 OpenClaw；PicoClaw Seahorse #1919；NullClaw 知识图谱 #712 | 纯 LLM 压缩记忆在长对话场景已触及天花板，向量检索+知识图谱+分层记忆（工作/情景/语义）的组合方案将成主流 |
| **容器化 Agent 运行时成为独立赛道** | NanoClaw v2 Bun 迁移、ZeroClaw Docker 沙箱、OpenClaw Podman 模板 | "Agent 即服务"（Agent-as-a-Service）部署模式成熟，关注 NanoClaw 的 Provider 自注册架构（#1814）对多租户场景的启发 |
| **金融合规场景驱动安全模型硬化** | ZeroClaw Jason Perlow 三连 Issue（FINOS）、IronClaw 钉钉企业功能 | 沙箱策略（Landlock/Seccomp）、权限状态机、审计日志将从"可选功能"变为"准入门槛" |
| **国产/区域模型适配从"社区补丁"走向"官方战略"** | CoPaw Qwen 生态、PicoClaw Volcengine #64799、NanoBot GLM #3143 | 模型层多元化不可逆转，Provider 配置的"模型别名映射+参数覆盖"机制需设计为可扩展架构，而非硬编码列表 |
| **TUI/Web UI 的"反黑盒"设计成为体验竞争焦点** | NanoBot #3107 状态可视化、PicoClaw #2137 Live Task List、Moltis #748 Prompt 重试 | Agent 执行过程的实时反馈（非最终输出）直接影响用户信任度，流式进度、工具调用动画、可取消操作将成为标配 |
| **国际化（i18n）从技术债变为工程规范** | ZeroClaw #5787 Mozilla Fluent RFC、Moltis 多语言日志 | 项目全球化 adoption 的隐性门槛，早期采用标准化方案（Fluent、ICU）可降低后期迁移成本 |

---

**报告生成时间**：2026-04-18  
**数据基础**：13 个开源项目 GitHub 公开活动流  
**适用场景**：技术选型评估、贡献者方向选择、投资/孵化决策参考

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-18

## 1. 今日速览

NanoBot 今日保持**高活跃度**：24小时内54个PR流动（28待审/26已处理）、18个Issue更新（11个新开或活跃），无新版本发布。社区聚焦三大主线：**记忆系统架构长期局限引发深度讨论**（#3227，9评论）、**安全性加固密集落地**（3个安全相关PR合并）、**LLM提供商兼容性与错误处理**持续修复。项目健康度良好，但待合并PR积压达28个，需关注审阅带宽。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR（6项）

| PR | 作者 | 核心贡献 | 关联Issue |
|:---|:---|:---|:---|
| [#3266](https://github.com/HKUDS/nanobot/pull/3266) | JakobBonhoeffer | **修复流式响应中断误报成功**：mid-stream错误不再以`finish_reason: "stop"`终止 | #3256 |
| [#3261](https://github.com/HKUDS/nanobot/pull/3261) | shaun0927 | **my-tool敏感信息泄露修复**：嵌套配置字段（如`web_config.search.api_key`）在check输出中脱敏 | #3259 |
| [#3262](https://github.com/HKUDS/nanobot/pull/3262) | shaun0927 | **SSE流终止符安全修复**：后端异常后不再发送`data: [DONE]`，避免客户端误判成功 | #3260 |
| [#3163](https://github.com/HKUDS/nanobot/pull/3163) | sicnuyudidi | **cron工具schema修正**：`message`字段在add action中标记为required，消除LLM循环 | #3113 |
| [#3249](https://github.com/HKUDS/nanobot/pull/3249) | fuleinist | **工具执行守卫**：检查`finish_reason`防止非标准API网关注入空tool_calls导致无限循环 | - |
| [#3248](https://github.com/HKUDS/nanobot/pull/3248) | chengyongru | **记忆归档容错**：LLM错误响应时回退到`raw_archive`，防止对话历史不可逆丢失 | #3244 |
| [#3233](https://github.com/HKUDS/nanobot/pull/3233) | chengyongru | **GLM API兼容性**：历史截断时保留user消息，修复Zhipu/GLM错误码1214 | #3143 |
| [#3238](https://github.com/HKUDS/nanobot/pull/3238) | mcampo | **子agent环境变量传递**：exec工具调用继承`allowed_env_keys` | - |

**整体推进评估**：今日合并聚焦**可靠性工程**——流式协议边界处理、敏感数据防护、LLM容错机制，项目稳定性基线显著提升。记忆系统与多厂商兼容性两大技术债务开始偿还。

---

## 4. 社区热点

### 🔥 最高讨论热度：记忆系统架构局限（#3227）
- **链接**：[HKUDS/nanobot#3227](https://github.com/HKUDS/nanobot/issues/3227)
- **数据**：9评论，4👍，跨2天持续活跃
- **核心诉求**：用户kxsk-git在长期项目场景中发现`history.jsonl`→`MEMORY.md`→Dream提炼的线性记忆管道存在**细节丢失瓶颈**——整块文本注入导致上下文窗口效率低下，且Dream压缩是"有损摘要"
- **信号意义**：这是**架构级反馈**，非简单功能请求。用户明确对比OpenClaw，暗示NanoBot需在"轻量"与"可扩展记忆"间找到新平衡点。维护者尚未回应是否有改进计划，社区期待路线图表态。

### 次热点：功能建议聚合（#3107）
- **链接**：[HKUDS/nanobot#3107](https://github.com/HKUDS/nanobot/issues/3107)
- **数据**：6评论，7项子任务（2项已完成）
- **诉求矩阵**：状态可视化（✅）、超时配置（⬜）、provider fallback（⬜）、多custom provider（⬜）
- **PR响应**：[#3263](https://github.com/HKUDS/nanobot/pull/3263)（session history提示）、[#3264](https://github.com/HKUDS/nanobot/pull/3264)（custom provider支持）已提交，社区协作效率可见

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| **P0** | 环境变量`${VAR}`语法未解析，飞书鉴权静默失败78+小时 | 🟡 待修复 | 无 | 配置系统、飞书通道 |
| **P0** | SMTP自邮件无限循环：发送1封自邮件→数千封回复 | 🟡 待修复 | 无 | 邮件通道、agent循环 |
| **P1** | 流式响应中断不retry，部分结果当成功处理 | ✅ **已修复** | #3266 | 所有流式LLM调用 |
| **P1** | GLM/Zhipu API错误码1214（messages参数非法） | ✅ **已修复** | #3233 | GLM/智谱用户 |
| **P1** | 记忆归档时LLM错误导致数据丢失 | ✅ **已修复** | #3248 | 长对话用户 |
| **P1** | 工具执行无finish_reason守卫，API网关异常注入致无限循环 | ✅ **已修复** | #3249, #3225 | 非标准API网关用户 |
| **P2** | Gemini provider多重认证冲突 | 🟡 待诊断 | 无 | Gemini用户 |
| **P2** | UI输出ANSI转义序列污染（`⠋ nanobot is thinking...`） | 🟡 待修复 | 无 | 终端用户体验 |
| **P2** | PPTX表格/组合形状文本提取缺失 | 🟡 待修复 | 无 | 文档处理 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度信号 | 纳入可能性 |
|:---|:---|:---|:---|
| **Custom Provider配置**（多provider、fallback） | #3107, **#3264** | PR已提交，配置schema扩展完成 | 🔵 **高** — 社区痛点明确，PR结构完整 |
| **Session History提示优化** | #3107, **#3263** | PR已提交 | 🔵 **高** — 低侵入，用户体验提升 |
| **Silent/Quiet Retry模式** | #3246 | 仅Issue，无PR | 🟡 中 — UX优化，需设计评审 |
| **语音交互Pipeline延迟指标**（STT→LLM→TTS） | #3257 | 仅Issue，含具体场景（35-60s） | 🟡 中 — 可观测性基础设施，需架构讨论 |
| **AgentHiFive集成**（MCP后端、审批流、Telegram/Slack通道） | **#3144** | 大型PR待审，评论活跃 | 🟡 中 — 功能重大，审阅周期长 |
| **LangSmith全功能集成恢复** | **#3140** | PR待审，含Evaluability Logging Contract | 🟡 中 — 依赖v0.1.5历史债务 |
| **WhatsApp音频消息转录** | #2529 | PR长期待审（3月27日） | 🔴 低 — 通道特定，审阅资源不足 |
| **WebSocket工具化+会话生命周期** | #3216 | PR待审，跨多个子系统 | 🟡 中 — 架构影响大，需协调合并 |

---

## 7. 用户反馈摘要

### ✅ 满意点
> "我真的很喜欢这套代码——整洁、轻巧、容易上手，探索起来是一种享受" — kxsk-git, [#3227](https://github.com/HKUDS/nanobot/issues/3227)

> 从OpenClaw迁移的学习价值认可，项目作为"AI智能体入门教育工具"的定位获肯定

### ❌ 痛点矩阵

| 痛点 | 典型场景 | 代表Issue |
|:---|:---|:---|
| **"黑盒"运行状态** | 不知道task数量、retry进度、是否卡住 | #3107 |
| **记忆=细节坟墓** | 200+轮对话后，早期决策依据丢失 | #3227, #3244 |
| **配置即陷阱** | `${VAR}`语法文档有、实现无，静默失败 | #3251 |
| **通道特有毒性** | 自邮件→无限循环、WhatsApp不回自己 | #3215, #1672 |
| **厂商兼容性债务** | GLM/智谱、Gemini、MiniMax各有个性错误 | #3143, #3206, #3244 |
| **TUI输出污染** | 思考动画ANSI序列混入正式输出 | #3265 |

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高龄/高影响项

| 项目 | 年龄 | 阻塞原因 | 建议动作 |
|:---|:---|:---|:---|
| **#2529** WhatsApp音频转录PR | 22天 | 通道特定，审阅优先级低 | 指定通道模块维护者专项审阅 |
| **#1672** WhatsApp自消息不回复 | 42天 | 仅1评论，未分类 | 标记`bug`+`whatsapp-channel`，分配诊断 |
| **#3144** AgentHiFive大型集成 | 4天 | 代码量大（MCP+审批+通道+设置流） | 分阶段审阅：先MCP适配器，后通道扩展 |
| **#3140** LangSmith集成恢复 | 4天 | 依赖v0.1.5历史上下文 | 维护者确认litellm替换决策背景 |
| **#3227** 记忆系统架构讨论 | 2天 | **9评论无维护者回应** | **最高优先级**：路线图表态，是否纳入v0.2.x设计 |

---

*日报基于 GitHub 公开数据生成，PR评论数因API限制显示为undefined，实际活跃度以页面为准。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-18

---

## 1. 今日速览

Hermes Agent 今日保持**极高活跃度**：50 条 Issues 更新（43 条新开/活跃，7 条关闭）与 50 条 PR 更新（34 条待合并，16 条已合并/关闭）构成双高流量。核心战场集中在 **Kimi 提供商兼容性修复**（temperature 限制问题爆发 3 个关联 Issue）、**macOS 平台稳定性**（启动时间读取、launchd 重启竞争、PID 文件竞争等多处修复），以及 **Memory 系统安全加固**（BOM 处理、env 变量泄露、字符上限校验）。社区贡献显著：新增 crypto-analyze、swarm-exploration 等技能 PR，但无新版本发布，功能积累等待集中释放。

---

## 2. 版本发布

**无新版本发布**（v0.x.x 持续开发中）

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #11856 | malaiwah | **修复 Memory UTF-8 BOM 污染**：Windows 编辑器写入的 BOM 不再注入系统提示词，关闭 #10878 | [PR #11856](https://github.com/NousResearch/hermes-agent/pull/11856) |
| #11859 | malaiwah | **修复 voice.record_key alt+ 前缀崩溃**：`alt+b` 等组合键启动崩溃问题，关闭 #11387 | [PR #11859](https://github.com/NousResearch/hermes-agent/pull/11859) |
| #5663 | eleata | **新增 Claude Code 迁移技能**：支持规则、记忆、MCP 服务器、自定义命令迁移，含 dry-run 预览与结构化报告 | [PR #5663](https://github.com/NousResearch/hermes-agent/pull/5663) |
| #11807 | julian3xl | **修复 MCP OAuth URL path 被截断**：GitHub MCP 资源验证失败问题 | [PR #11807](https://github.com/NousResearch/hermes-agent/pull/11807) |

### 关键推进中的 PR（待合并，影响深远）

| PR | 作者 | 进度意义 |
|:---|:---|:---|
| #9664 | xiaoqiang243 | Kimi `/coding/v1` 完整修复：User-Agent 伪装、api_mode 检测、API key 回退——**解决近期最大兼容性危机** |
| #10353/#10317/#11720 | AJV20 | macOS 三连修：进程启动时间、launchd 重启竞争、PID 文件竞争——**平台稳定性基石** |
| #11615 | binhnt92 | 阻止 `save_config` 将 `${ENV_VAR}` 泄露为明文——**安全红线修复** |
| #11855 | Mibayy | 工具输出提示词注入免疫系统——**安全架构升级** |

---

## 4. 社区热点

### 最高讨论热度 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | #9179 Security Policies and Practices Thread | **24** | 启用 GitHub 私有漏洞报告渠道，安全治理基础设施缺失 | [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) |
| 2 | #11765 Kimi provider temperature 400 错误 | **10** | **紧急**：`kimi-for-coding` 强制 temperature=0.6，需按模型覆盖参数 | [#11765](https://github.com/NousResearch/hermes-agent/issues/11765) |
| 3 | #7893 Gemini provider 多重认证 400 错误 | **10** | Vertex AI 与原生 API key 冲突，认证逻辑需重构 | [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) |
| 4 | #7734 飞书插件双问题 | **5** | 企业 IM 集成质量：授权卡片按钮错误 + 话题回复逻辑混乱 | [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) |

### 热点分析

- **#9179 安全政策讨论**：24 评论关闭但未完全解决——社区要求建立正式安全响应流程，而非依赖公开 issue 报告漏洞。反映项目从"快速迭代"向"企业级治理"过渡的阵痛。
- **Kimi 温度门爆发**：#11765、#9125、#11764 形成**关联 Issue 集群**，主模型与 auxiliary 调用分别要求 0.6 和 1.0 的 temperature，暴露提供商配置模型的粒度不足。PR #9664 是针对性修复，但"per-model override"架构需求已被提出。
- **#7893 Gemini 认证**：Google 生态复杂性（AI Studio vs Vertex AI vs OAuth）导致用户配置困惑，需统一认证抽象层。

---

## 5. Bug 与稳定性

### 🔴 严重（崩溃/数据丢失/安全）

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| #11551 | **`save_config` 将 `${ENV_VAR}` 覆写为明文密钥泄露** | #11615 待合并 | [#11551](https://github.com/NousResearch/hermes-agent/issues/11551) |
| #10877 | Memory 外部文件超字符上限无校验，可 OOM | 无 | [#10877](https://github.com/NousResearch/hermes-agent/issues/10877) |
| #10879 | 非 UTF-8 MEMORY.md 引发 UnicodeDecodeError，记忆静默丢失 | 无 | [#10879](https://github.com/NousResearch/hermes-agent/issues/10879) |
| #11387 | `alt+*` 语音录制键崩溃启动（**已修复**） | #11859 已合并 | [#11387](https://github.com/NousResearch/hermes-agent/issues/11387) |

### 🟡 高（功能阻断）

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| #11765 / #11764 / #9125 | Kimi 全链路 temperature 400 错误（主模型+auxiliary） | #9664 待合并 | [#11765](https://github.com/NousResearch/hermes-agent/issues/11765) |
| #7893 | Gemini 多重认证冲突 | 无 | [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) |
| #11840 | macOS SSH ControlMaster socket 路径超 104 字符（IPv6） | 无 | [#11840](https://github.com/NousResearch/hermes-agent/issues/11840) |
| #11016 | Telegram 会话死锁：adapter busy lock 与 gateway 状态分裂 | 无 | [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) |
| #7731 | Copilot 硬编码上下文窗口，企业订阅失效 | 无 | [#7731](https://github.com/NousResearch/hermes-agent/issues/7731) |

### 🟢 中（体验降级）

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| #7734 | 飞书插件授权+话题回复异常 | 无 | [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) |
| #3956 | Codex 空响应误标为 incomplete，无效重试 3 次 | 无 | [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) |
| #7723 | `tool_progress=verbose` 渲染退化同 `full` | 无 | [#7723](https://github.com/NousResearch/hermes-agent/issues/7723) |
| #7619 | 149 轮后上下文污染，话题切换失效 | 无 | [#7619](https://github.com/NousResearch/hermes-agent/issues/7619) |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度评估 | 链接 |
|:---|:---|:---|:---|
| **Docker/VPS 一键部署** | #913 | ⭐⭐⭐ 高：PR 已关联，7 👍 社区强需求，基础设施标配 | [#913](https://github.com/NousResearch/hermes-agent/issues/913) |
| **GPU 监控状态栏** | #11757 PR | ⭐⭐⭐ 高：PR 已提交，本地 LLM 用户刚需 | [#11757](https://github.com/NousResearch/hermes-agent/pull/11757) |
| **WhatsApp service-conversation** | #11751 | ⭐⭐⭐ 高：PR #11751 + #11854 配套，企业客服场景明确 | [#11751](https://github.com/NousResearch/hermes-agent/issues/11751) |
| **swarm-exploration 并行推理技能** | #11844 PR | ⭐⭐⭐ 高：零依赖，架构优雅，研究向核心能力 | [#11844](https://github.com/NousResearch/hermes-agent/pull/11844) |
| **crypto-analyze DeFi 技能** | #11862 PR | ⭐⭐☆ 中：无 API key 设计好，但需评估维护负担 | [#11862](https://github.com/NousResearch/hermes-agent/pull/11862) |
| **Google Workspace 官方 CLI 迁移** | #411 | ⭐⭐☆ 中：长期架构方向，但 gws 项目自身成熟度待观察 | [#411](https://github.com/NousResearch/hermes-agent/issues/411) |
| **自改进 Agent 溯源收据** | #11692 | ⭐⭐☆ 中：哲学层面重要，实现复杂度高，需 RFC | [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) |
| **Vibe Coding 升级（Kanban+自学习）** | #11857 PR | ⭐⭐☆ 中：概念包装强，但需拆分评审避免大 PR | [#11857](https://github.com/NousResearch/hermes-agent/pull/11857) |

**下一版本信号**：Kimi 兼容性修复 + macOS 稳定性三连 + Memory 安全加固构成**必须发布**的技术债务；Docker 支持、GPU 监控、WhatsApp 企业功能构成**用户可见价值**，建议打包 v0.x.0。

---

## 7. 用户反馈摘要

### 痛点

| 场景 | 来源 Issue |
|:---|:---|
| **"更新后配置丢失/被覆盖"** — `hermes update` 覆盖 systemd 工作目录，且 `save_config` 破坏 env 引用 | #11312, #11551 |
| **"长会话后 Agent 变笨"** — 149 轮后上下文污染，话题切换失效，打印厂用户自建 Task-Centric Memory 技能 workaround | #7619, #11652 |
| **"平台集成质量参差不齐"** — Discord 附件丢失、飞书话题混乱、Telegram 死锁，企业部署信心受挫 | #11860, #7734, #11016 |
| **"提供商配置黑盒"** — Kimi/Gemini/Copilot 各自认证、温度、上下文规则不统一，调试成本高 | #11765, #7893, #7731 |

### 满意点

- **自修改架构独特性**：#11692 用户主动引用 README 定位 Hermes 为"唯一自改进 Agent"，愿意深度参与治理设计
- **技能扩展性**：#11652 用户（印刷厂主）基于实际业务自建记忆技能，验证 Skill 系统对非开发者友好
- **社区响应速度**：安全 issue #9179 4 天内关闭，Kimi 问题当日即有 PR #9664

---

## 8. 待处理积压

### ⚠️ 需维护者介入的长期/高价值 Issue

| Issue | 天数 | 风险 | 建议动作 |
|:---|:---:|:---|:---|
| #913 Docker/VPS 支持 | **38 天** | 部署门槛阻碍采用，7 👍 社区呼声最高 | 指定 reviewer 推进关联 PR |
| #411 Google Workspace CLI 迁移 | **44 天** | 技能生态战略方向 | 评估 gws 成熟度，出决策结论 |
| #9179 安全政策（已关闭） | **5 天** | 关闭但无实质政策落地，漏洞报告渠道仍缺失 | 重开或新建官方安全政策文档 |
| #7619 长会话上下文污染 | **7 天** | 核心架构缺陷，影响产品可信度 | 标记 `architecture` 标签，纳入技术规划 |
| #3956 Codex 空响应误重试 | **19 天** | 用户体验劣化，浪费 token | 低 hanging fruit，快速修复 |
| #11692 自改进溯源收据 | **1 天** | 哲学层面定义项目独特性 | 转为 Discussion 或 RFC |

---

**日报生成时间**：2026-04-18  
**数据覆盖**：过去 24 小时 GitHub 活动  
**项目健康度**：⭐⭐⭐⭐☆（高活跃度，修复响应快，但架构债务累积需释放版本）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-18

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-04-18 | **分析周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日呈现**极高活跃度**，24小时内产生 **109 条 Issues 更新**（105条新开/活跃，仅4条关闭）和 **138 条 PR 更新**（111条待合并，27条已合并/关闭），Issue 关闭率仅 3.7% 显示社区需求持续涌入但消化速度滞后。夜间构建版本 `v0.2.6-nightly.20260417` 发布，项目处于快速迭代期。核心矛盾集中在**多实例部署稳定性**（Docker/Gateway配置）、**Provider 兼容性**（Groq/OpenRouter/Gemini）以及**新兴架构提案**（Seahorse记忆系统、OpenAI Responses API 迁移）的并行推进。

---

## 2. 版本发布

### 🌙 Nightly Build: [v0.2.6-nightly.20260417.ba08d523](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

| 属性 | 详情 |
|:---|:---|
| **类型** | 自动化夜间构建（可能不稳定） |
| **基线对比** | [v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) |
| **风险提示** | ⚠️ 此为自动化构建，生产环境使用需谨慎 |

**迁移注意事项**: 夜间构建未提供详细变更日志，建议追踪 `main` 分支的 [compare 页面](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) 获取具体 commit 差异。从 Issue #1708 反馈看，v0.2.3 存在 Gateway REST API 不可用问题，建议夜间构建用户重点验证 `/chat`、`/a2a` 端点可用性。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（5条）

| PR | 作者 | 类型 | 核心贡献 | 状态 |
|:---|:---|:---|:---|:---|
| [#2579](https://github.com/sipeed/picoclaw/pull/2579) | afjcjsbx | Bugfix | **MCP 工具调用兼容性修复**：将 `nil` 参数规范化为空对象 `{}`，解决 Zod 验证的 TypeScript MCP 服务器报错 `"expected record, received null"` | ✅ **已合并** |
| [#2437](https://github.com/sipeed/picoclaw/pull/2437) | grearsl | Bugfix | **Codex/OAuth 流式输出修复**：累积 `response.output_item.done` 事件中的输出项，解决 Codex  provider 返回空内容（0字符）的严重回归 | ✅ **已关闭** |
| [#2571](https://github.com/sipeed/picoclaw/pull/2571) | alexhoshina | Docs | **会话与路由文档**：补充 session 和 routing 架构文档，配合 Issue #2233 的上下文标准化提案 | ✅ **已关闭** |
| [#2566](https://github.com/sipeed/picoclaw/pull/2566) | lc6464 | Refactor | **Provider/Tool 包重组**：按职责划分子包，减少根目录文件膨胀，保持向后兼容 | ✅ **已关闭** |
| [#2567](https://github.com/sipeed/picoclaw/pull/2567) | wj-xiao | Docs | **文档体系重构**：按类型重组文档，新增 `docs/README.md` 贡献者指南，配套 lint 脚本 | ✅ **已关闭** |

**整体推进评估**: 今日合并以**稳定性修复**和**工程债务清理**为主。MCP 和 Codex 的修复解决了生产环境关键路径的兼容性问题；包重组和文档体系化为后续大规模功能扩展（如 Seahorse、多用户支持）奠定工程基础。但 111 条待合并 PR 的积压表明代码审查带宽仍是瓶颈。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **LM Studio Easy Connect** — 请求简化本地 LLM 连接配置 | 15 | 1 | 降低非技术用户接入门槛，Android 部署场景 | [#28](https://github.com/sipeed/picoclaw/issues/28) |
| 2 | **LLM 调用失败无重试机制** — 长任务遇 HTTP 500 即挂死 | 9 | 0 | **可靠性刚需**：OpenRouter 等 provider 不稳定时需要指数退避重试 | [#629](https://github.com/sipeed/picoclaw/issues/629) |
| 3 | **Seahorse 生物启发记忆系统** — 类海马体短期/长期记忆架构 | 9 | 0 | **架构级创新**：突破上下文长度限制，实现记忆巩固与检索 | [#1919](https://github.com/sipeed/picoclaw/issues/1919) |
| 4 | **Docker 端口修改导致 Web 输入框禁用** — 网关路由硬编码问题 | 8 | 0 | **部署灵活性**：非标准端口场景的生产可用性 | [#2236](https://github.com/sipeed/picoclaw/issues/2236) |
| 5 | **自升级支持** — 跨平台包管理器集成 | 8 | 2 | **运维自动化**：Ubuntu/Windows/嵌入式设备的持续交付 | [#618](https://github.com/sipeed/picoclaw/issues/618) |

**诉求分析**: 社区正从"能跑通"向**生产级可靠**和**架构创新**两极分化。高评论 Issue 中，#28 代表**易用性民主化**诉求（非技术用户涌入），#1919 代表**AI Agent 能力边界突破**（记忆系统），#629/#2236 代表**企业部署的硬性稳定性要求**。👍 数据偏低（最高仅2）说明讨论深度高但社区投票参与不足。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM 调用失败无重试，长任务直接挂死 | 所有使用 OpenRouter 等不稳定 provider 的生产环境 | ❌ 无 |
| 🔴 **高** | [#748](https://github.com/sipeed/picoclaw/issues/748) | Groq API 工具调用格式不兼容：`<function=name{...}>` 被拒 | Groq provider 完全不可用 | ❌ 无 |
| 🔴 **高** | [#2371](https://github.com/sipeed/picoclaw/issues/2371) | Agent loop 崩溃：`loop.go:2171` 运行时错误 | Qwen + OpenRouter/Ollama 组合 | ❌ 无 |
| 🟡 **中** | [#2236](https://github.com/sipeed/picoclaw/issues/2236) | Docker 非默认端口部署时 Web UI 输入框禁用 | 所有自定义端口 Docker 用户 | ❌ 无 |
| 🟡 **中** | [#1790](https://github.com/sipeed/picoclaw/issues/1790) | OpenRouter free 模型 ID 验证失败：`minimax-m2.5:free is not valid` | OpenRouter free tier 用户 | ❌ 无 |
| 🟡 **中** | [#1058](https://github.com/sipeed/picoclaw/issues/1058) | Cron `deliver=false` 任务静默丢弃 LLM 响应 | 定时任务用户，消息永不送达 | ❌ 无 |
| 🟡 **中** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Gemini provider 多认证凭据冲突 | 显式配置 provider + model_list 的用户 | ❌ 无 |
| 🟡 **中** | [#2136](https://github.com/sipeed/picoclaw/issues/2136) | 工具调用提取逻辑缺陷，正则匹配不可靠 | 所有依赖非标准工具调用格式的 provider | ⚠️ 作者曾提交 PR，因冲突未合并 |
| 🟢 **低** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) | Windows QQ 渠道无法使用 | Windows + QQ 特定组合 | ❌ 无 |
| 🟢 **低** | [#2052](https://github.com/sipeed/picoclaw/issues/2052) | 网页版飞书配置界面异常 | Android Termux 环境 | ❌ 无 |

**稳定性评估**: **红色警报** — 3个高严重度 Bug 均无修复 PR，且覆盖核心执行路径（LLM调用、工具调用、Agent主循环）。今日合并的 [#2579](https://github.com/sipeed/picoclaw/pull/2579) 和 [#2437](https://github.com/sipeed/picoclaw/pull/2437) 虽修复了 MCP 和 Codex 问题，但主线的重试机制、Groq 兼容性、Agent 崩溃仍是未爆弹。

---

## 6. 功能请求与路线图信号

### 🎯 高潜力纳入下一版本的功能（已有 PR 或强信号）

| 功能 | Issue/PR | 状态 | 纳入概率 | 关键路径 |
|:---|:---|:---|:---:|:---|
| **Seahorse 可配置 fresh tail** | PR [#2570](https://github.com/sipeed/picoclaw/pull/2570) | 🟡 待合并 | **高** | 配合 Issue #1919 记忆系统，配置化是落地第一步 |
| **多用户支持与 Agent Shield 安全套件** | PR [#2313](https://github.com/sipeed/picoclaw/pull/2313) | 🟡 待合并 | **高** | 4月3日大型 PR，含权限隔离、技能白名单，企业刚需 |
| **Mattermost 渠道支持** | PR [#1586](https://github.com/sipeed/picoclaw/pull/1586) + Issue [#1587](https://github.com/sipeed/picoclaw/issues/1587) | 🟡 待合并 | **中高** | 代码+需求双验证，企业 IM 生态扩展 |
| **上下文使用可视化** (`/context` 命令) | PR [#2537](https://github.com/sipeed/picoclaw/pull/2537) | 🟡 待合并 | **中** | 调试体验提升，依赖 Agent loop 重构 |
| **渠道工具反馈动画统一** | PR [#2569](https://github.com/sipeed/picoclaw/pull/2569) | 🟡 待合并 | **中** | Discord/Telegram/飞书三端 UX 统一 |
| **OpenAI Responses API 迁移** | Issue [#2171](https://github.com/sipeed/picoclaw/issues/2171) | 🔵 讨论中 | **中** | 官方推荐方向，但涉及广泛 breaking change |

### 📡 早期信号（无 PR，需关注）

| 功能 | Issue | 社区热度 | 技术风险 |
|:---|:---|:---:|:---|
| **自升级机制** | [#618](https://github.com/sipeed/picoclaw/issues/618) | ⭐⭐⭐ | 跨平台包管理复杂度高 |
| **LangSmith 可观测性集成** | [#2173](https://github.com/sipeed/picoclaw/issues/2173) | ⭐⭐⭐ | 依赖外部 SaaS，需考虑私有化部署 |
| **实时任务列表 (Live Task List)** | [#2137](https://github.com/sipeed/picoclaw/issues/2137) | ⭐⭐⭐ | 需渠道 API 支持消息编辑 |
| **Web Chat 流式输出** | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | ⭐⭐⭐ | 网关 SSE 架构改造 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

> *"Run a long task... Server may return HTTP 500 sometimes... Task hang without retry"*  
> — **可靠性焦虑**：生产环境长任务无重试 = 不可接受（Issue [#629](https://github.com/sipeed/picoclaw/issues/629)）

> *"docker部署修改了web监听端口，web页面无法发送任何消息，输入框是禁用的"*  
> — **部署僵化**：硬编码端口假设阻碍真实生产环境（Issue [#2236](https://github.com/sipeed/picoclaw/issues/2236)）

> *"i'm trying to get this installed on an android... its just outside my reach right now"*  
> — **移动端/低门槛诉求**：非技术用户被配置复杂度挡在门外（Issue [#28](https://github.com/sipeed/picoclaw/issues/28)）

> *"When the agent executes tools... there is zero feedback to the user about what's happening"*  
> — **黑盒执行焦虑**：多工具链长时间无反馈导致用户流失（Issue [#571](https://github.com/sipeed/picoclaw/issues/571)）

### 😊 满意点

- **架构开放性**：Seahorse 记忆系统提案获积极讨论，社区认可"生物启发"创新方向
- **渠道覆盖广度**：飞书、QQ、Discord、Telegram 等多渠道支持满足差异化场景
- **夜间构建频率**：每日自动构建让前沿用户能快速验证修复

### 🤔 矛盾点

- **功能丰富 vs 稳定性**：PR #2313（多用户+安全）等大型功能 PR 与 #629/#748 等基础稳定性问题并行竞争审查资源
- **配置灵活性 vs 易用性**：Issue #1883 暴露的 `provider/model` 命名歧义显示高级用户与新手配置需求冲突

---

## 8. 待处理积压

### ⚠️ 需维护者优先关注的高价值积压

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---:|:---|
| **Issue #28** [LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 2026-02-11 | 2026-04-17 | **66天** | 评论最多(15)，代表最大用户群体（本地LLM+移动端），无官方回应 |
| **Issue #618** [自升级支持](https://github.com/sipeed/picoclaw/issues/618) | 2026-02-22 | 2026-04-17 | **55天** | 👍2，运维基础设施，影响安全补丁交付 |
| **PR #2313** [多用户+Agent Shield](https://github.com/sipeed/picoclaw/pull/2313) | 2026-04-03 | 2026-04-17 | **15天** | 超大型 PR（跨 agent/tool/config/build/docker），审查瓶颈，可能阻塞企业采用 |
| **PR #1586** [Mattermost渠道](https://github.com/sipeed/picoclaw/pull/1586) | 2026-03-15 | 2026-04-17 | **34天** | 代码已完成，长期未合并导致与 main 漂移风险 |
| **Issue #1919** [Seahorse记忆系统](https://github.com/sipeed/picoclaw/issues/1919) | 2026-03-23 | 2026-04-17 | **26天** | 架构级提案，需核心维护者架构决策，社区已贡献 PR #2570 配置化补丁 |

**维护建议**: 当前 111 待合并 PR / 105 活跃 Issue 的比率（~1.06）显示**代码产出速度略高于问题消化速度**，长期将形成技术债务雪崩。建议：
1. **设立稳定性 Sprint**：优先合并 #629 类重试机制、#748 类 Provider 修复
2. **大型 PR 拆分**：#2313 可按安全/多用户/技能白名单拆分为独立审查单元
3. **社区审查者扩容**：文档类 PR（#2567, #2571）可快速合并释放带宽

---

> **数据来源**: GitHub API / sipeed/picoclaw 公开仓库 | **生成时间**: 2026-04-18 00:00 UTC+8  
> **免责声明**: 本日报基于公开 GitHub 数据自动生成，具体技术细节请以官方仓库为准。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-18

---

## 1. 今日速览

NanoClaw 今日呈现**高强度开发态势**：24小时内 22 个 PR 更新（13 个已合并/关闭）、12 个 Issues 活跃（11 个新开/活跃），无新版本发布。核心贡献者 `shakhruz` 单日提交 3 个功能提案，聚焦容器化 Agent 的 Telegram 扩展、安全隔离与浏览器会话持久化；`nhod` 连续抛出 4 个基础设施层面的缺陷报告，涉及环境变量覆盖、遥测合规、API 密钥透传等运维痛点。社区对 v2 容器运行时（Bun 迁移、OpenCode/OpenAI 多模型支持）的落地进度高度关注，但 Agent Teams 交互阻塞、schedule/RemoteTrigger API 不可用等用户体验问题仍未获修复。

---

## 2. 版本发布

**无新版本发布**。

注：PR [#1815](https://github.com/qwibitai/nanoclaw/pull/1815) 正在修复 `@semantic-release/git` 导致的分支保护阻塞问题，可能为后续发版铺路。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（13 个）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1816](https://github.com/qwibitai/nanoclaw/pull/1816) | stereographica | **大规模重构+测试覆盖≥90%**：400+行文件全部分割，引入覆盖率 CI 强制门控，新建 8 个集成测试套件，Agent SDK 升级 `0.2.76 → 0.2.112` | 技术债务清偿里程碑，为 v2 稳定性奠定工程基础 |
| [#1813](https://github.com/qwibitai/nanoclaw/pull/1813) | gavrielc | **Bun 容器运行时**：替换 Node+pnpm+tsc，消除 `better-sqlite3` 原生编译和每会话 tsc 重编译，Dockerfile 采用 BuildKit 缓存、tini PID 1 | v2 性能拐点：镜像构建时间大幅压缩，冷启动问题缓解 |
| [#1814](https://github.com/qwibitai/nanoclaw/pull/1814) | gavrielc | **Provider 自注册架构**：容器端 barrel 模式 + 宿主机配置注册表，Provider 自主声明挂载/环境变量透传 | 解耦核心代码与 Provider 扩展，OpenCode/OpenAI 等新 Provider 接入成本趋近于零 |
| [#1811](https://github.com/qwibitai/nanoclaw/pull/1811) | topcoder1 | **v1 LLM 邮件分类管道**：三级路由分类器（Haiku→Sonnet→Opus），Vercel AI SDK 提示缓存，PPLX 深度研究回退 | 首个生产级"超级能力"落地，验证多模型协作架构可行性 |
| [#1821](https://github.com/qwibitai/nanoclaw/pull/1821) | topcoder1 | **Agent 并行化提示**：系统提示强制独立工作扇出，减少 Telegram 排队确认 | 多 Agent 协作场景下的交互延迟优化 |
| [#1822](https://github.com/qwibitai/nanoclaw/pull/1822) | topcoder1 | **"已处理"分流按钮**：用户可在 Agent 确认卡片上标记离线处理完毕，终止冗余任务 | 人机协作闭环：解决"手机已回复但 Agent 仍在等待"的典型摩擦 |
| [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) | talmosko-code | **OpenCode Agent Provider**：SSE、会话恢复、MCP 透传，对齐 poll-loop 模型 | v2 多 Provider 战略关键拼图，与 OpenAI Provider ([#1774](https://github.com/qwibitai/nanoclaw/pull/1774)) 形成互补 |
| [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) | meeech | **v2 包管理器迁移 npm→pnpm**：CI、Dockerfile、setup.sh 全链路改造 | 构建可复现性提升，为 Bun 迁移前置条件 |
| [#1632](https://github.com/qwibitai/nanoclaw/pull/1632) | gavrielc | **会话产物自动清理**：基于时间的 JSONL/日志/遥测清理，保护活跃会话 | 运维自动化：解决长期运行磁盘膨胀问题 |
| [#1696](https://github.com/qwibitai/nanoclaw/pull/1696) | ashsolei | **README 全面刷新**：状态表、开发/部署/配置章节，适配 AiFeatures fork 语境 | 新用户上手门槛降低 |
| [#1828](https://github.com/qwibitai/nanoclaw/pull/1828) | ashsolei | 文档耦合修正：agent-hub → iAsh 重命名补漏 | 品牌一致性维护 |

**整体评估**：今日合并量占 24 小时 PR 总量的 59%，涵盖**运行时架构（Bun）、测试基础设施、多模型扩展（OpenCode/OpenAI）、核心工作流（邮件分类、并行化、人机分流）**四大维度，项目处于 v2 成熟化的加速爬坡期。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#957 Podman 支持](https://github.com/qwibitai/nanoclaw/issues/957) | 6 评论, 6 👍 | **长期积累的生态兼容性诉求**：macOS/Linux 开发者对 Docker Desktop 许可/性能不满，希望文档明确 Podman 路径。6 个 👍 反映社区规模性需求，但创建日期为 2026-03-11，至今 38 天无维护者响应，存在贡献者流失风险 |
| 2 | [#1831 MTProto 大文件回退](https://github.com/qwibitai/nanoclaw/issues/1831) | 0 评论, 0 👍, 但创建即带完整方案 | **Telegram 场景的深度使用信号**：200-500MB 视频会议文件下载失败，用户已自行设计 Bot API → MTProto 回退方案，体现生产环境压力 |
| 3 | [#1830 公开线索自动注册](https://github.com/qwibitai/nanoclaw/issues/1830) | 0 评论, 0 👍, 与 #1831/#1829 同作者同日提交 | **商业化扩展诉求**：Telegram Ads 引流场景下，新用户被静默丢弃是致命漏斗断裂；同时提出容器凭证隔离，反映多租户安全焦虑 |

**深层信号**：`shakhruz` 三连发（#1831/#1830/#1829）揭示 NanoClaw 在 **Telegram 商业化部署**场景下的三块短板：大媒体处理、公域用户转化、有状态会话管理。该用户可能是重度生产环境使用者，其提案质量高（含完整 Problem/Solution 结构），建议维护者优先对接。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1824 openclaw 崩溃循环致 SIGTERM](https://github.com/qwibitai/nanoclaw/issues/1824) | openclaw 因 `browser.profiles.my-chrome.driver` 配置错误 12 秒崩溃循环，systemd 资源压迫致 NanoClaw 被 SIGTERM 且 `Restart=always` 失效（被识别为显式 stop）| **已关闭**（2026-04-17），但关闭原因未注明是修复还是记录，需确认 |
| 🟡 **中高** | [#1825 cleanup-sessions.sh 硬编码路径](https://github.com/qwibitai/nanoclaw/issues/1825) | 忽略 `NANOCLAW_*_DIR` 环境变量，fork 同步时路径断裂；无一致性校验 | **无 Fix PR**，但 #1632 作者 `gavrielc` 为同一人，可能快速响应 |
| 🟡 **中** | [#1820 CLAUDE_CODE_AUTO_COMPACT_WINDOW 无条件覆盖](https://github.com/qwibitai/nanoclaw/issues/1820) | 宿主机/运维者无法覆盖自动压缩阈值，紧急调参和实验受阻 | **无 Fix PR** |
| 🟡 **中** | [#1819 setup.sh 遥测无 opt-in](https://github.com/qwibitai/nanoclaw/issues/1819) | PostHog 遥测每次运行自动发送，无用户告知、无退出路径，存在合规风险（GDPR/CCPA） | **无 Fix PR**，但属快速修复类问题 |
| 🟡 **中** | [#1818 ONECLI_API_KEY 未透传宿主机客户端](https://github.com/qwibitai/nanoclaw/issues/1818) | `src/index.ts` 构造 OneCLI 时仅传 URL 不传 API key，认证失效 | **Fix PR #1823 已开**（[@josephadamsdev](https://github.com/josephadamsdev)）|
| 🟡 **中** | [#1812 Agent Teams 交互阻塞](https://github.com/qwibitai/nanoclaw/issues/1812) | Team lead 进入非交互模式后，**所有用户消息被阻塞**至全队关闭 | **无 Fix PR**，PR #1821 的并行化提示可能缓解但非根治 |
| 🟡 **中** | [#1806 schedule/RemoteTrigger API-key 容器不可用](https://github.com/qwibitai/nanoclaw/issues/1806) | 容器内无法解析 org UUID，持久化定时 Agent 功能完全失效，无文档说明 | **无 Fix PR** |

**稳定性评估**：基础设施层（脚本健壮性、环境变量、遥测合规）出现**系统性疏漏**，`nhod` 的连续报告暗示 v2 快速迭代中工程纪律有所松弛。Agent Teams 和 schedule API 的功能性缺陷直接影响核心卖点，需纳入高优先级修复队列。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 成熟度 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|:---|
| **Podman 文档支持** | [#957](https://github.com/qwibitai/nanoclaw/issues/957) | 高（社区验证需求明确） | ⭐⭐⭐⭐☆ | 6 👍 + 38 天沉淀，低实现成本，品牌友好 |
| **MTProto 大文件回退** | [#1831](https://github.com/qwibitai/nanoclaw/issues/1831) | 高（含完整实现方案） | ⭐⭐⭐⭐⭐ | 生产阻塞问题，作者已提供 `downloadFile()` 修改方案，可直接转化为 PR |
| **公开线索自动注册 + 凭证隔离** | [#1830](https://github.com/qwibitai/nanoclaw/issues/1830) | 高（双问题双方案） | ⭐⭐⭐⭐☆ | 商业化关键路径，但涉及安全模型变更，需设计评审 |
| **Agent-browser 会话持久化** | [#1829](https://github.com/qwibitai/nanoclaw/issues/1829) | 中（依赖上游修复） | ⭐⭐⭐☆☆ | 需等待 [agent-browser#259](https://github.com/vercel-labs/agent-browser/issues/259)，或采用 PR 提出的 volume mount 绕过方案 |
| **SkillClaw 技能生命周期集成** | [#1827](https://github.com/qwibitai/nanoclaw/issues/1827) | 低（方向性建议） | ⭐⭐☆☆☆ | 外部项目推介，需评估架构契合度，非短期优先级 |
| **Quad-inbox 技能** | [PR #1826](https://github.com/qwibitai/nanoclaw/pull/1826) | 高（已实现） | ⭐⭐⭐⭐⭐ | 已提交 PR，含冲突检测、构建规则、验证步骤，接近合并就绪 |
| **OpenAI 模型支持 + Token 追踪** | [PR #1774](https://github.com/qwibitai/nanoclaw/pull/1774) | 高（已实现，待合并） | ⭐⭐⭐⭐⭐ | 4 天前提交，今日仍有更新，多模型战略核心组件 |
| **API Server v2.0.0** | [PR #1800](https://github.com/qwibitai/nanoclaw/pull/1800) | 高（已实现，待合并） | ⭐⭐⭐⭐☆ | 生产级 OpenAI 兼容端点，但需评估与现有架构的重复建设 |

**路线图推断**：v2.x 短期聚焦 **多模型扩展（OpenAI/OpenCode）+ 容器运行时硬化（Bun、会话持久化、凭证隔离）+ 商业化工作流（邮件分类、quad-inbox、公域注册）**。

---

## 7. 用户反馈摘要

### 痛点
- **"配置试错成本高"**：挂载路径错误提示仅说"不在允许根目录下"，用户需猜测应使用父目录（[#1817](https://github.com/qwibitai/nanoclaw/pull/1817) 已修复）
- **"Agent 不懂我已经用手机处理完了"**：重复确认、无法中断已线下完成的任务（[#1822](https://github.com/qwibitai/nanoclaw/pull/1822) 已修复）
- **"新用户发消息没反应，完全不知道为什么"**：Telegram 静默丢弃未注册聊天，无日志、无引导（[#1830](https://github.com/qwibitai/nanoclaw/issues/1830)）
- **"容器里定时任务直接报错，文档一个字没提"**：schedule/RemoteTrigger 在 API-key 容器内完全不可用（[#1806](https://github.com/qwibitai/nanoclaw/issues/1806)）

### 满意点
- **"项目设计精良、非常有用"**：[#957](https://github.com/qwibitai/nanoclaw/issues/957) 开篇即表达认可，反映核心架构获专业用户认同
- **邮件分类管道的模型路由设计**：三级 LLM 降级策略体现成本意识，受技术型用户好评

### 使用场景深化信号
- **视频会议转录/归档**：200-500MB 文件处理需求暗示企业会议记录场景
- **Telegram Ads 公域获客**：从私域 Bot 向公域营销基础设施演进
- **多 Agent 团队协作**：Team lead + teammates 模式进入真实使用，但交互模型尚未成熟

---

## 8. 待处理积压

| Issue/PR | 创建日期 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#957 Podman 支持](https://github.com/qwibitai/nanoclaw/issues/957) | 2026-03-11 | 2026-04-17 | **38 天** | 6 👍 社区需求明确，零维护者响应，贡献者 `fuyb` 可能流失；竞品若优先支持 Podman 将形成差异化 |
| [#1624 Matrix E2EE + 分组模型配置](https://github.com/qwibitai/nanoclaw/pull/1624) | 2026-04-04 | 2026-04-17 | **14 天** | 大型 PR（双功能），作者已表示可拆分，需维护者决策是否接受及如何拆分，否则会持续腐烂 |
| [#1809 合并上游 1.2.35→1.2.53](https://github.com/qwibitai/nanoclaw/pull/1809) | 2026-04-17 | 2026-04-17 | 1 天 | 虽新但体量大，涉及 18 版本跨度合并，需快速评审避免分支进一步偏离 |
| [#1774 OpenAI 模型支持](https://github.com/qwibitai/nanoclaw/pull/1774) | 2026-04-14 | 2026-04-17 | **4 天** | 战略级 PR，4 天未合并可能因测试覆盖或架构评审阻塞，建议公开阻塞原因 |
| [#1800 API Server v2.0.0](https://github.com/qwibitai/nanoclaw/pull/1800) | 2026-04-16 | 2026-04-17 | **2 天** | 与现有 API 设计可能存在重叠，需维护者明确 NanoClaw 的"技能即服务"边界 |

**维护者行动建议**：
1. **立即响应 #957**：即使仅文档更新，可释放强烈社区信号
2. **拆分决策 #1624**：14 天无反馈对贡献者 `bitcryptic-gw` 不尊重，且 Matrix E2EE 是差异化功能
3. **公开 #1774 阻塞状态**：多模型支持是社区高度关注方向，透明化评审进度可降低焦虑

---

*日报生成时间：2026-04-18 | 数据来源：qwibitai/nanoclaw GitHub 公开 API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-18

## 1. 今日速览

NullClaw 昨日呈现**高活跃度合并潮**，24小时内 16 个 PR 完成合并/关闭，仅 3 个待合并，Issues 净关闭 4 条，项目维护效率显著。核心亮点是 **v2026.4.17 版本发布**，完成 Zig 0.16 大版本迁移并修复多项安全与稳定性问题。社区侧，http_request 网络搜索能力的配置痛点仍是用户主要反馈来源，需持续关注文档与错误引导体验。

---

## 2. 版本发布

### [v2026.4.17](https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.17) ⚠️ **含破坏性变更**

| 维度 | 详情 |
|:---|:---|
| **核心变更** | 全项目迁移至 **Zig 0.16**（[#823](https://github.com/nullclaw/nullclaw/pull/823)） |
| **安全修复** | Docker 沙箱挂载参数改为工厂模式初始化，消除潜在的安全配置泄漏风险（[commit](http)） |
| **版本迭代** | 自 v2026.4.9 的累积更新（[#795](https://github.com/nullclaw/nullclaw/pull/795)） |

**迁移注意事项：**
- Zig 0.16 为编译器主版本升级，下游构建依赖需同步更新 Zig 工具链
- Docker 沙箱用户需验证 `nullclaw doctor` 通过后再部署生产环境

---

## 3. 项目进展

### 已合并/关闭的关键 PR（16 条）

| 类别 | PR | 推进价值 |
|:---|:---|:---|
| **基础设施** | [#830](https://github.com/nullclaw/nullclaw/pull/830) v2026.4.17 版本发布 | 完成发布流水线 |
| **编译器迁移** | [#823](https://github.com/nullclaw/nullclaw/pull/823) Zig 0.16 迁移 | **项目级技术债清偿**，锁定未来语言特性 |
| **技能生态** | [#735](https://github.com/nullclaw/nullclaw/pull/735) Web 发现式技能安装 | 支持 `nullclaw skills install https://...` + `.well-known/nullclaw-skill.json` 标准，**降低技能分发门槛** |
| **平台扩展** | [#818](https://github.com/nullclaw/nullclaw/pull/818) 微信 QR 登录与通道支持 | 新增 iLink 微信个人号接入，覆盖中文用户核心场景 |
| **心跳调度** | [#757](https://github.com/nullclaw/nullclaw/pull/757) HEARTBEAT.md 任务自动分派 | **修复长期静默故障**——此前心跳任务仅计数不执行 |
| **代理稳定性** | [#814](https://github.com/nullclaw/nullclaw/pull/814) 命名子代理提供方生命周期修复 | 消除 vtable 悬垂指针导致的 UB 风险 |
| **模型目录** | [#813](https://github.com/nullclaw/nullclaw/pull/813) 提升 models refresh 输出预算 | 解决 OpenRouter 400KB 响应截断问题（关联 [#809](https://github.com/nullclaw/nullclaw/issues/809)） |
| **诊断体验** | [#828](https://github.com/nullclaw/nullclaw/pull/828) 澄清 CLI-only channel 状态 | 消除 `nullclaw channel status` 与 `nullclaw doctor` 的矛盾输出（关联 [#827](https://github.com/nullclaw/nullclaw/issues/827)） |
| **网络代理** | [#755](https://github.com/nullclaw/nullclaw/pull/755) HTTP(S)_PROXY 环境变量支持 | 企业内网部署兼容性 |
| **测试覆盖** | [#786](https://github.com/nullclaw/nullclaw/pull/786), [#787](https://github.com/nullclaw/nullclaw/pull/787) 工具类单元测试 | 填补 version/verbose/web_search/search_base_url/status 模块测试空白 |
| **安全加固** | [#798](https://github.com/nullclaw/nullclaw/pull/798) CI 工作流 action 固定与权限收紧 | 供应链安全：SHA 锁定 + `contents: read` 最小权限 |
| **错误分类** | [#754](https://github.com/nullclaw/nullclaw/pull/754) 提供方错误文本谓词重构 | 中英双语错误处理代码复用，减少重复逻辑 |
| **Telegram** | [#782](https://github.com/nullclaw/nullclaw/pull/782) 交互式技能菜单 + Codex 超时硬化 | 提升 IM 渠道用户体验 |
| **Responses API** | [#772](https://github.com/nullclaw/nullclaw/pull/772) 工具 schema 与空错误分类修复 | 解锁 foxnio 等 Responses 端点提供方 |
| **管理 CLI** | [#829](https://github.com/nullclaw/nullclaw/pull/829) 管理员导向 config/models CLI | `--json` 机器可读输出，服务 NullHub 集成需求 |
| **搜索引导** | [#815](https://github.com/nullclaw/nullclaw/pull/815) 缺失搜索提供方设置指引 | 降低 `web_search` 配置失败的用户挫败感 |

**整体评估：** 昨日合并密度创近期高峰，覆盖编译器升级、安全加固、跨平台扩展、用户体验四层，项目技术健康度显著提升。

---

## 4. 社区热点

| 排名 | 议题 | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 **#1** | [#812](https://github.com/nullclaw/nullclaw/issues/812) `[bug] http_request` | 4 评论, 👍1 | **迁移用户上手阻塞**：Picoclaw/ZeroClaw 迁移用户无法启用网络搜索，文档与示例存在"最后一公里"断裂 |
| #2 | [#764](https://github.com/nullclaw/nullclaw/issues/764) Agent Skills 官方客户端列表收录 | 2 评论, 👍0 | **生态位确认需求**：项目方需主动申请 agentskills.io 收录，提升标准合规可见性 |
| #3 | [#811](https://github.com/nullclaw/nullclaw/issues/811) 自定义 OpenAI-compatible 子代理连接失败 | 0 评论, 👍1 | **企业私有化部署痛点**：`--agent` CLI flag 与兼容 API 的集成边界未覆盖 |

**深度观察：** [#812](https://github.com/nullclaw/nullclaw/issues/812) 虽关闭，但反映系统性问题——"最新版本已安装但功能不工作"的反馈模式表明，版本发布后的功能发现机制（feature discovery）弱于竞品。建议维护者考虑 `nullclaw doctor --check-feature http_request` 类诊断。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Docker 沙箱挂载参数未通过工厂初始化 | **已修复** | v2026.4.17 内置 | 安全边界，所有 Docker 沙箱用户 |
| 🟡 **中** | `models refresh` OpenRouter 响应截断（50KB → 需 400KB+） | **已修复** | [#813](https://github.com/nullclaw/nullclaw/pull/813) | OpenRouter 用户，全平台 |
| 🟡 **中** | `nullclaw doctor` 与 `channel status` 诊断矛盾 | **已修复** | [#828](https://github.com/nullclaw/nullclaw/pull/828) | 仅 CLI 使用场景 |
| 🟡 **中** | 命名子代理提供方 vtable 悬垂指针 | **已修复** | [#814](https://github.com/nullclaw/nullclaw/pull/814) | 自定义命名代理配置 |
| 🟢 **低** | Responses API 工具 schema 格式错配 | **已修复** | [#772](https://github.com/nullclaw/nullclaw/pull/772) | `api_mode=responses` 提供方（foxnio 等） |
| 🟢 **低** | HEARTBEAT.md 任务解析后未分派代理 | **已修复** | [#757](https://github.com/nullclaw/nullclaw/pull/757) | 心跳守护模式用户 |

**今日无新增未修复 Bug。** 历史遗留的 http_request 配置问题（[#812](https://github.com/nullclaw/nullclaw/issues/812)）已通过 [#815](https://github.com/nullclaw/nullclaw/pull/815) 的错误引导缓解，但根因在于配置分散于多个来源。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#411](https://github.com/nullclaw/nullclaw/pull/411) **OPEN** | 工具定制系统：触发词优先级 + 参数预配置 | ⭐⭐⭐⭐☆ **高** | PR 已开 38 天，功能完整，待 review 瓶颈 |
| [#712](https://github.com/nullclaw/nullclaw/pull/712) **OPEN** | 知识图谱内存后端（SQLite + 递归 CTE） | ⭐⭐⭐⭐☆ **高** | 长期记忆核心基础设施，作者 manelsen 为活跃维护者 |
| [#789](https://github.com/nullclaw/nullclaw/pull/789) **OPEN** | 网关公网绑定安全 + 速率限制按客户端隔离 | ⭐⭐⭐☆☆ **中** | 安全相关，但需与隧道配置逻辑协调 |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | Agent Skills 标准收录申请 | ⭐⭐⭐☆☆ **中** | 零代码成本，纯运营动作 |
| 隐含信号 | 企业代理/内网部署深化 | ⭐⭐⭐⭐☆ **高** | [#755](https://github.com/nullclaw/nullclaw/pull/755) 代理支持 + [#789](https://github.com/nullclaw/nullclaw/pull/789) 网关安全连续落地 |

**下一版本（v2026.4.24?）预测：** 工具定制系统 + 知识图谱内存有较大合并概率，二者分别解决"技能可组合性"与"长期记忆"两大 AI Agent 核心命题。

---

## 7. 用户反馈摘要

### 😤 痛点
> *"I've tested all the examples and it doesn't work"* — [#812](https://github.com/nullclaw/nullclaw/issues/812) uMendex

- **配置发现困难**：http_request / web_search 的启用条件分散于 env var、config file、provider 设置，无统一检查点
- **迁移摩擦**：Picoclaw → NullClaw 的功能映射不透明，用户预期"同样叫 search 就应同样工作"

### 😐 困惑
> *"nullclaw channel status contradicts doctor info"* — [#827](https://github.com/nullclaw/nullclaw/issues/827) eabase

- 诊断工具输出语义不一致，"ok" 与 "no channels configured" 并存，信任感受损

### 🙂 认可
> *"NullClaw and it seems very organized"* — [#812](https://github.com/nullclaw/nullclaw/issues/812) uMendex

- 项目结构获迁移用户认可，但**组织性未转化为可配置性**

### 💡 场景洞察
- **微信生态**：[#818](https://github.com/nullclaw/nullclaw/pull/818) 的合并验证了中国个人开发者"微信即基础设施"的需求强度
- **Heartbeat 自动化**：[#757](https://github.com/nullclaw/nullclaw/pull/757) 修复前，任务文件形同虚设，反映守护进程的功能完整性曾存在盲区

---

## 8. 待处理积压

| 时长 | 条目 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| **39 天** | [#411](https://github.com/nullclaw/nullclaw/pull/411) 工具定制系统 | 功能腐烂（bitrot），Zig 0.16 迁移后需 rebase | 优先 review，或指定 co-author 协助 rebase |
| **25 天** | [#712](https://github.com/nullclaw/nullclaw/pull/712) 知识图谱内存 | 长期记忆为竞品差异化点，延迟将丧失先发优势 | 安排架构 review，评估 SQLite 递归 CTE 性能边界 |
| **11 天** | [#789](https://github.com/nullclaw/nullclaw/pull/789) 网关安全加固 | 公网暴露风险敞口 | 与安全相关 PR 批量 review，或拆分合并 |
| **15 天** | [#764](https://github.com/nullclaw/nullclaw/issues/764) Agent Skills 收录 | 标准生态位被竞品占据 | 指定社区运营负责人，1 个工作日内完成申请 |

---

**日报编制说明：** 基于 NullClaw 官方仓库 2026-04-17 00:00–23:59 UTC 活动数据。项目定位：Zig 编写的高性能 AI Agent 运行时，支持多模型、多通道、技能扩展与长期记忆。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-18

> **项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw) | **日期**: 2026-04-18 | **角色**: AI 智能体与个人 AI 助手开源项目分析

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，24 小时内 28 条 Issues 更新（20 活跃/新开，8 关闭）、50 条 PR 更新（36 待合并，14 已合并/关闭），无新版本发布。核心特征为：**Bug Bash 4/17 密集产出**（单日新增 8 条 P1/P2 级缺陷）、**Gateway 前端工程大规模重构**（PR #2555、#2571 等 XL 级变更并行）、**CI/CD 流水线持续高压运转**（3 条自动晋升 PR）。项目处于**快速迭代但质量承压**阶段，staging 环境稳定性成为关键瓶颈。

---

## 2. 版本发布

**无新版本发布。** 当前最新可用版本仍为 `v0.25.0`（staging 镜像 `nearaidev/ironclaw-dind:0.25.0`）。值得注意的是，PR #2486 正在为非标签构建添加 commit hash 显示功能，未来 dev 构建可追溯至具体提交。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（14 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2595](https://github.com/nearai/ironclaw/pull/2595) | henrypark133 | MCP 生命周期测试网关模式化 | 解决 `advanced::mcp_extension_lifecycle` 超时问题，为 MCP 扩展稳定性奠基 |
| [#2594](https://github.com/nearai/ironclaw/pull/2594) | henrypark133 | 修复网关认证与 Telegram 配对流程 | 统一 OAuth UI 路径，消除无关聊天输入阻塞，E2E 覆盖对齐线程作用域 |
| [#2592](https://github.com/nearai/ironclaw/pull/2592) | henrypark133 | 恢复 Web 登录引导（修复 JS 语法错误） | **关键热修复**：移除 `app.js` 多余闭包大括号，修复 staging 网关 bundle 解析失败；新增 CI `node --check` 前置防护 |
| [#2265](https://github.com/nearai/ironclaw/pull/2265) | dependabot[bot] | GitHub Actions 依赖批量升级（13 项） | 基础设施安全维护 |

**整体进展评估**：今日合并以**修复类**为主，聚焦网关认证流程、前端构建稳定性、测试基础设施。无功能型大 PR 合入，项目处于**"修稳存量"而非"扩展增量"**阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#2522](https://github.com/nearai/ironclaw/issues/2522) 本地数据库 API key 保存失败 | 3 | 2 | **新手入门阻塞点**：`ironclaw onboard` 选择本地 DB 后无法保存 OpenRouter API key，数据库错误信息模糊（"db error"），用户无法自助排查 |
| 2 | [#2411](https://github.com/nearai/ironclaw/issues/2411) Telegram bot token 保存无响应 | 2 | 0 | **Staging QA 回归**：设置页面保存 Telegram token 操作失效，影响渠道配置核心路径 |
| 3 | [#2284](https://github.com/nearai/ironclaw/issues/2284) 代理实例 1 小时空闲后死亡 | 2 | 0 | **托管服务可靠性**：hosted-staging 环境实例生命周期管理缺陷，影响生产可用性预期 |
| 4 | [#2285](https://github.com/nearai/ironclaw/issues/2285) 页面刷新聊天消息消失 | 2 | 0 | **状态持久化架构缺陷**：前端状态与后端执行脱节，用户感知为"数据丢失" |

**诉求洞察**：评论集中区反映 **setup/配置体验**（#2522、#2411）和 **staging 环境可靠性**（#2284、#2285）是社区最大痛点。用户期望"开箱即用"的本地部署和"所见即所得"的会话持久化。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug

#### 🔴 P1 级（阻塞核心功能）

| Issue | 描述 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|
| [#2580](https://github.com/nearai/ironclaw/issues/2580) | Telegram 消息发送虚假成功（实际未送达） | Telegram 渠道消息投递 | **无** |
| [#2581](https://github.com/nearai/ironclaw/issues/2581) | 代理泄露内部推理链（CoT 暴露给用户） | 输出安全/用户体验 | **无** |
| [#2582](https://github.com/nearai/ironclaw/issues/2582) | Markdown 文件附件虚假声明（未实际提供） | Telegram 文件传输 | **无** |
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | 例程创建失败："5 次连续代码错误" | 自动化/例程核心功能 | **无** |
| [#2584](https://github.com/nearai/ironclaw/issues/2584) | 内部系统文件暴露于 App UI | 信息安全隐患 | **无** |
| [#2491](https://github.com/nearai/ironclaw/issues/2491) ⚠️ **已关闭** | Engine V2 绕过入站密钥扫描 | **安全漏洞** — 密钥直送 LLM | ✅ 已修复关闭 |
| [#2409](https://github.com/nearai/ironclaw/issues/2409) ⚠️ **已关闭** | 用户输入消息打字后消失 | Web UI 聊天基础交互 | ✅ 已修复关闭 |

#### 🟡 P2 级（功能降级/体验受损）

| Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|
| [#2543](https://github.com/nearai/ironclaw/issues/2543) | Linear MCP OAuth 授权后未识别 | **无** |
| [#2585](https://github.com/nearai/ironclaw/issues/2585) | 活跃任务未计入已完成任务数 | **无** |
| [#2586](https://github.com/nearai/ironclaw/issues/2586) | Slack 工具安装按钮无功能 | **无** |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | 页面刷新聊天消息消失 | **无** |
| [#2408](https://github.com/nearai/ironclaw/issues/2408) | 上下文长度溢出（200K token 限制） | **无** |

**稳定性评估**：Bug Bash 4/17 单日爆发 **5 条全新 P1**，且均**无关联修复 PR**，staging 环境质量红线告急。PR #2592 虽修复了网关登录崩溃，但属于"救火式"热修，根因（JS 语法错误流入 staging）暴露 CI 前端检查缺口。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#2601](https://github.com/nearai/ironclaw/issues/2601) | 功能请求 | **CLI/TUI 密钥管理工具** — 解决认证配置文档不足、入门困难 | ⭐⭐⭐⭐⭐ **高** — 同日关闭的 #2600 为重复项，说明需求迫切；与现有 secrets 体系（#2522、#2543）痛点共振 |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Epic | **网关功能边界与 crate 护栏** — 重构 web gateway 为有限功能切片，CI 强制边界 | ⭐⭐⭐⭐⭐ **高** — 核心维护者 henrypark133 发起，与当前 XL 级 gateway PR 集群（#2555、#2571）方向一致 |
| [#2591](https://github.com/nearai/ironclaw/issues/2591) | 功能请求 | `SKILLS_BUNDLED_ENABLED` 编译时技能可选加载 | ⭐⭐⭐⭐☆ **中高** — 构建灵活性改进，实现成本低 |
| [#2569](https://github.com/nearai/ironclaw/issues/2569) | 功能请求 | 专用 `web_fetch` 工具 + 二级模型摘要 | ⭐⭐⭐⭐☆ **中高** — 与现有工具链扩展方向一致，serrrfirat 提出 |
| [#2590](https://github.com/nearai/ironclaw/issues/2590) | 生态提案 | **SkillClaw 集成** — 外部技能生命周期管理层 | ⭐⭐⭐☆☆ **中** — 长期架构方向，需评估与现有 skill 体系兼容性 |
| [#2589](https://github.com/nearai/ironclaw/pull/2589) | PR | **钉钉反静默 UX** — AI 卡片实时展示代理思考过程 | ⭐⭐⭐⭐⭐ **高** — XL 级功能 PR，含 DB 迁移，计划日期即今日 |

**路线图信号**：项目正从"功能堆叠"转向"架构治理"（#2599 Epic）和"企业渠道深化"（钉钉 #2589）。密钥管理 CLI（#2601）是最具用户呼声的"最后一公里"体验补齐。

---

## 7. 用户反馈摘要

### 真实痛点

> *"When I run `ironclaw onboard` I select `Y` for a local DB and when I try to add API key for Openrouter I get this error... Database error: db error"* — [#2522](https://github.com/nearai/ironclaw/issues/2522) Serhioromano

**诊断**：本地部署的"最后一公里"断裂 — 引导流程承诺本地 DB 可用，但密钥保存路径未正确适配，错误信息过度模糊（无具体 DB 错误码）。

> *"it's not well documented how users are intended to manage their secrets... authentication patterns may drift over time"* — [#2601](https://github.com/nearai/ironclaw/issues/2601) ek775

**诊断**：认证模式演进导致文档滞后，用户被迫"摸索式"配置，secrets 管理成为隐性知识门槛。

### 使用场景

- **Raspberry Pi 边缘部署**：[#1339](https://github.com/nearai/ironclaw/issues/1339) 已关闭，但 ARMv7 支持缺失反映 IoT/边缘场景覆盖不足
- **多线消息输入（TUI）**：[#2448](https://github.com/nearai/ironclaw/issues/2448) 已关闭，开发者用户需要粘贴长提示词/代码块
- **事件驱动自动化**：[#2524](https://github.com/nearai/ironclaw/issues/2524) 已关闭，但"手动例程"误标签问题显示例程分类逻辑脆弱

### 满意度/不满意度

| 维度 | 表现 | 证据 |
|:---|:---|:---|
| ✅ 安全响应 | Engine V2 密钥扫描绕过快速修复 | #2491 2 天内关闭 |
| ❌ Staging 稳定性 | 连续 Bug Bash 高缺陷产出 | 4/16、4/17 两批次共 13+ 条 |
| ❌ 错误信息质量 | "db error"、"5 consecutive code errors" 等模糊提示 | #2522、#2583 |
| ❌ 状态同步 | 前端显示与后端实际状态不一致 | #2580、#2582、#2585 |

---

## 8. 待处理积压

### 需维护者重点关注的高龄/高影响项

| Issue/PR | 创建时间 | 状态 | 风险说明 |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | 2026-03-20（29 天） | OPEN XL | **阿里云 Coding Plan 支持** — 超大型跨领域 PR，覆盖 15+ 作用域，长期未合并可能产生冲突雪球 |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | 2026-03-21（28 天） | OPEN XL | **Slack Socket Mode** — NAT 友好连接方案，企业部署关键能力，同样面临长期合并延迟 |
| [#2367](https://github.com/nearai/ironclaw/pull/2367) | 2026-04-12（6 天） | OPEN XL | **[codex] 认证流程收紧** — 安全核心改进，与当前 staging 认证问题（#2594、#2595）直接相关，需加速评审 |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | 2026-04-10（8 天） | OPEN | **实例 1 小时死亡** — 托管服务 SLA 核心问题，无 assignee，影响生产承诺 |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | 2026-04-10（8 天） | OPEN | **聊天状态丢失** — 用户体验致命伤，与 PR #2415（SSE 重连优化）部分相关但非同一问题 |

**维护建议**：XL 级 PR 队列（#1446、#1549、#2367、#2555、#2571、#2589）已构成**合并队列拥堵**，建议维护者进行优先级仲裁，避免"越大越难合"的恶性循环。短期应优先保障 #2367（安全）和 #2555/#2571（gateway 核心）的评审带宽。

---

> **健康度评分**: ⚡ 开发活跃度 A / 🐛 缺陷控制 C+ / 🔄 合并吞吐量 B- / 📋 社区响应 B  
> **关键行动**: ① 为 Bug Bash 4/17 的 5 条 P1 分配修复责任人 ② 建立 XL PR 合并节奏（建议每周上限 2 条） ③ 优先落地 #2601 密钥管理 CLI 降低入门流失

---

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-18

## 1. 今日速览

LobsterAI 今日呈现**高强度开发态势**：28 个 PR 更新（21 个已合并/关闭）与 7 个 Issues 更新表明核心团队正在密集推进功能迭代与稳定性修复。版本 `2026.4.17` 的发布标志着 OpenClaw 引擎升级至 2024.4.8 版本，同时微信网关修复完成。社区活跃度中等，但需警惕 3 个垃圾广告 Issue（#1716/#1717/#1718）对 issue 队列的污染。整体项目健康度**良好**，技术债务清理与 IM 通道扩展并行推进。

---

## 2. 版本发布

### [LobsterAI 2026.4.17](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.17) | 2026-04-17

| 维度 | 详情 |
|:---|:---|
| **核心变更** | OpenClaw 引擎升级至 **2024.4.8**（[#1709](https://github.com/netease-youdao/LobsterAI/pull/1709)）|
| **关键修复** | 微信网关 `gatewayMethods` patch 恢复 + 通道配置修复（[#1592](https://github.com/netease-youdao/LobsterAI/pull/1592)）|
| **破坏性变更** | 未发现明确 breaking change |
| **迁移注意** | OpenClaw 插件需确认兼容性；微信通道配置建议重新验证 |

> ⚠️ 发布说明被截断（`fix(openclaw): remov...`），建议维护者补全完整 changelog。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（21 个中的核心项）

| PR | 作者 | 领域 | 进展意义 |
|:---|:---|:---|:---|
| [#1711](https://github.com/netease-youdao/LobsterAI/pull/1711) | nmgwddj | IM/OpenClaw/Renderer | **NIM 多机器人投递 + GitHub 插件安装**：支持多实例 NIM bot 的 IM 投递与定时任务，新增 QR 扫码绑定流程；优化 GitHub 来源 OpenClaw 插件安装体验 |
| [#1710](https://github.com/netease-youdao/LobsterAI/pull/1710) | nmgwddj | Cowork | **心跳提示历史泄漏修复**：阻止 `HEARTBEAT_OK` 确认消息在 Cowork 会话 UI 中重复出现，提升长会话稳定性 |
| [#1708](https://github.com/netease-youdao/LobsterAI/pull/1708) | liuzhq1986 | MCP/OpenClaw | **MCP 桥接配置热重载**：解决 `callbackUrl`/`tools` 启动时序竞态，强制 gateway hard restart 确保配置同步 |
| [#1699](https://github.com/netease-youdao/LobsterAI/pull/1699) | liuzhq1986 | Settings | **导入崩溃防护**：`providers[providerKey]` 空值安全访问，避免导入配置时 renderer 进程崩溃 |
| [#1696](https://github.com/netease-youdao/LobsterAI/pull/1696) | liuzhq1986 | IM | **微信状态判断简化**：移除 `accountId` 依赖，仅检查 `enabled` 状态，与启动条件对齐；补充 QR 登录诊断日志 |
| [#1689](https://github.com/netease-youdao/LobsterAI/pull/1689) | liuzhq1986 | Cowork | **yd_cowork 遗留代码清理**：删除死代码、内联 `isQuestionLikeMemoryText`，减少技术债务 |
| [#1684](https://github.com/netease-youdao/LobsterAI/pull/1684) | liuzhq1986 | Build | **安装包瘦身 ~65MB**：清理已移除 tlon channel 的残留原生二进制（`@tloncorp/tlon-skill-darwin-x64`）|

**整体推进评估**：今日合并聚焦 **IM 基础设施扩展**（NIM 多 bot、邮箱通道）、**Cowork 会话稳定性**、**MCP 生态可靠性** 三大战略方向，同时持续偿还技术债务。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) 提问后不运行，无信息显示 | 4 评论 | **核心痛点**：用户反馈交互后完全静默失败，无错误提示，属于严重体验缺陷。截图显示界面卡死/无响应状态，可能涉及 renderer 进程崩溃或主进程消息丢失 |
| 🥈 | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) 提议集成 hermes-agent 引擎 | 2 评论 | **生态扩展诉求**：用户希望 LobsterAI 支持 [hermes-agent](https://github.com/search?q=hermes-agent&type=repositories) 作为可选 AI agent 引擎，与 OpenClaw 并列。反映社区对多引擎策略的关注 |

### 待审阅的重要 PR

| PR | 状态 | 价值 |
|:---|:---|:---|
| [#1719](https://github.com/netease-youdao/LobsterAI/pull/1719) **feat: add clawemail channel** | 🔴 OPEN | 跨 6 个 area 的大型功能 PR，将"龙虾邮箱"集成为新 IM 网关通道，支持邮件驱动的 AI 代理通信，含完整配置 UI 与会话映射 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 提问后完全无响应，无错误信息，用户无法诊断 | ❌ 无 fix PR，需紧急响应 |
| 🟡 **中** | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 安装过程图标变白且无效 | ❌ 新报告，待调查 |
| 🟡 **中** | [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) → **已关闭** | Deepin V25 登录后网络错误（浏览器正常） | ✅ 已在 `2026.4.17` 中修复 |
| 🟢 **低** | [#1708](https://github.com/netease-youdao/LobsterAI/pull/1708) | MCP bridge 启动竞态导致功能不可用 | ✅ 已合并修复 |
| 🟢 **低** | [#1699](https://github.com/netease-youdao/LobsterAI/pull/1699) | 导入配置中不存在 provider 导致崩溃 | ✅ 已合并修复 |
| 🟢 **低** | [#1710](https://github.com/netease-youdao/LobsterAI/pull/1710) | Cowork 心跳消息泄漏到历史记录 | ✅ 已合并修复 |

**稳定性趋势**：今日合并 5 个稳定性修复，但 **#1569 静默失败** 与 **#1714 Win11 安装异常** 两个新问题需高度关注。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 可行性评估 | 纳入概率 |
|:---|:---|:---|:---|
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | 集成 hermes-agent 作为可选引擎 | 中 — 需评估与 OpenClaw 的架构兼容性 | 🟡 可能纳入中长期路线图 |
| [#1719](https://github.com/netease-youdao/LobsterAI/pull/1719) | **clawemail 邮件通道**（已提 PR） | 高 — 代码已就绪，跨 6 个 area 的大型功能 | 🟢 **极可能下一版本发布** |
| [#1711](https://github.com/netease-youdao/LobsterAI/pull/1711) | NIM 多 bot + GitHub 插件安装 | 高 — 已合并 | ✅ 已在 `2026.4.17` |

**路线图信号**：IM 通道多元化（微信 → NIM 多 bot → 邮件）成为明确方向；AI 引擎层保持 OpenClaw 单一核心，但社区对多引擎支持有期待。

---

## 7. 用户反馈摘要

### 真实痛点

| Issue | 场景 | 情绪 |
|:---|:---|:---|
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | "提问后不运行，也不显示任何信息" — **完全黑箱失败**，用户无法自助诊断 | 😤 挫败感极强 |
| [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) | Linux (Deepin) 环境下 OAuth 登录流程中断，浏览器成功但应用内报错"网络错误" | 😕 平台兼容性疑虑 |
| [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 安装体验瑕疵：图标异常影响品牌信任 | 😐 第一印象受损 |

### 积极信号

- **#1614** 用户主动提议技术集成，表明 LobsterAI 在 AI agent 开发者社区中建立一定认知度
- 登录/配置相关修复密集（#1696, #1699, #1687），显示团队响应账户体系体验问题

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| 🔴 **垃圾信息污染** | [#1716](https://github.com/netease-youdao/LobsterAI/issues/1716), [#1717](https://github.com/netease-youdao/LobsterAI/issues/1717), [#1718](https://github.com/netease-youdao/LobsterAI/issues/1718) | 2026-04-17 | 同一用户批量发布赌博广告，污染 issue 队列，影响社区健康度指标 | **立即关闭并封禁用户 changan1524**；建议启用 issue 模板或新用户审核机制 |
| 🟡 **依赖升级积压** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 40→41, [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) Vite 5→8, [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) Headless UI 1→2, [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) React 18→19 | 2026-04-02 | 4 个 dependabot PR 已挂起 **15 天**，React 19 与 Electron 41 均为大版本升级，延迟合并增加安全漏洞与兼容性风险 | 安排专项 review，优先处理 Electron 安全更新；React 19 需评估 breaking changes |
| 🟡 **静默失败诊断** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 2026-04-08 | 9 天无维护者响应，用户已提供截图但缺乏进一步诊断引导 | 请求补充日志（`~/.lobsterai/logs`）、复现步骤、版本与环境信息 |

---

> **日报生成时间**：2026-04-18  
> **数据来源**：GitHub API / LobsterAI 公开仓库  
> **健康度评分**：⭐⭐⭐⭐☆（4/5）开发活跃度高，垃圾信息治理与依赖升级需加强

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报 | 2026-04-18

> **项目**: [TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)（TinyClaw）  
> **分析日期**: 2026-04-18  
> **数据周期**: 过去 24 小时（2026-04-17 至 2026-04-18）

---

## 1. 今日速览

TinyClaw 今日活跃度处于**极低水平**，过去 24 小时内无新增 Issues，仅 1 条 PR 完成关闭流程。该 PR 为新增 Novita AI 作为内置 LLM 提供商的功能扩展，标志着项目在**第三方模型生态接入**方面持续推进。整体社区互动冷淡（无评论、无点赞），项目处于功能迭代后的稳定消化期，维护者注意力可能已转向下一迭代周期。健康度评估：**维护性活跃，社区参与待激活**。

---

## 2. 版本发布

**无新版本发布**

- 最新 Release 暂无更新，Novita AI 接入功能尚未打包进正式版本，用户需通过源码或等待下一版本获取。

---

## 3. 项目进展

### ✅ 已关闭 PR

| PR | 作者 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#243 feat: add Novita AI as a built-in LLM provider](https://github.com/TinyAGI/tinyagi/pull/243) | [Alex-wuhu](https://github.com/Alex-wuhu) | 将 Novita AI 提升为一等公民 LLM 提供商，复用现有 codex harness 机制，通过自定义 `OPENAI_BASE_URL` 实现零新增 CLI 依赖的兼容接入 | **中等** — 扩展模型生态覆盖，降低用户接入 Novita AI 的门槛，但技术实现路径为"适配型"而非"架构创新型" |

**技术细节**：该集成采用 OpenAI 兼容层策略，而非独立 harness 实现，表明项目架构的**可扩展性设计得到验证**——新提供商接入成本较低。支持的模型范围需进一步查看完整 PR 描述确认。

---

## 4. 社区热点

**今日无活跃讨论**

| 指标 | 数据 | 分析 |
|:---|:---|:---|
| 最热 PR 评论数 | 0（undefined） | PR #243 关闭前无公开讨论，可能为维护者直接审核合并或线下沟通 |
| 最热 Issue 反应数 | N/A | 无活跃 Issue |
| 用户参与度 | 👍: 0 | 社区对 Novita AI 接入关注度极低，或该需求为 B2B/定向场景驱动 |

**诉求分析**：PR 由外部贡献者 Alex-wuhu 提交，指向 Novita AI 这一特定平台，推测背后存在**实际部署场景需求**（如成本优化、区域合规、特定模型访问），而非社区广泛呼声。项目需评估是否应建立更正式的[提供商接入提案流程](https://github.com/TinyAGI/tinyagi/discussions)。

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 | Fix PR |
|:---|:---|:---|:---|
| 🔴 Critical | 0 | — | — |
| 🟠 High | 0 | — | — |
| 🟡 Medium | 0 | — | — |
| 🟢 Low | 0 | — | — |

**今日零 Bug 报告**。结合零 Issues 活动，项目处于稳定运行期，或用户基数/使用场景尚未触发边缘问题暴露。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性评估 |
|:---|:---|:---|
| PR #243（已合并）| Novita AI 原生支持 | **已落地**；模式可复用至其他 OpenAI 兼容端点（如 Together、Fireworks、本地 vLLM） |
| 架构暗示 | codex harness 的 `OPENAI_BASE_URL` 参数化 | 高 — 建议官方抽象为通用 "OpenAI-Compatible Provider" 模板，降低未来同类 PR 的维护成本 |

**路线图建议**：若 Novita AI 验证成功，可考虑：
1. 文档化"添加兼容提供商"的开发者指南
2. 将 base_url / api_key / model mapping 提取为配置文件驱动，避免代码级 PR

---

## 7. 用户反馈摘要

**今日无可提取的用户反馈**（无 Issues 评论、无 PR 讨论）。

**历史隐含信号**（基于 PR #243 推断）：
- **痛点**：用户需手动配置非官方支持的 LLM 提供商，存在文档碎片化风险
- **场景**：多模型路由、成本敏感型部署、特定区域 API 可用性需求
- **满意度**：零互动可能表明功能"够用即走"，或用户群体偏技术导向、低参与习惯

---

## 8. 待处理积压

| 类型 | 数量 | 风险提醒 |
|:---|:---|:---|
| 长期未响应 Issue | 暂无数据 | 建议维护者检视 30+ 天无活动的 Issue，确认是否因今日零活动而被掩盖 |
| 待合并 PR | 0 | 当前队列清空，合并流程通畅 |
| 需关注项 | PR #243 的 `undefined` 评论数 | 数据异常或 GitHub API 限制，建议人工复核 [PR 页面](https://github.com/TinyAGI/tinyagi/pull/243) 确认实际讨论内容是否被遗漏 |

---

## 附录：关键链接汇总

| 资源 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/TinyAGI/tinyagi |
| 今日关闭 PR #243 | https://github.com/TinyAGI/tinyagi/pull/243 |
| 作者 Alex-wuhu | https://github.com/Alex-wuhu |
| Novita AI 官网 | https://novita.ai |

---

*日报生成基于公开 GitHub 数据，未包含私有仓库、Draft PR 或 Projects 看板信息。建议结合维护者内部路线图综合判断。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-18

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-04-18（基于过去24小时数据）

---

## 1. 今日速览

Moltis 今日呈现**高活跃度、高收敛度**的健康态势：24小时内 14 条 Issues 与 16 条 PR 形成均衡闭环（关闭率各达 50%/69%），且 7 个 Bug 中有 5 个已当日修复。核心工程团队（penso、Cstewart-HC）展现出极强的执行密度——Matrix 认证现代化、Slack 集成修复、Podman 兼容性等关键基础设施问题均获快速响应。社区侧出现 TypeScript Web UI 迁移和 Nix Flake 打包等生态扩展信号，显示项目正从"功能补全"向"开发者体验优化"阶段过渡。

---

## 2. 版本发布

今日发布 **2 个版本**，均为日期标记版本（`20260417.01`、`20260417.02`），未提供详细变更日志。

| 版本 | 发布时间 | 说明 |
|:---|:---|:---|
| [20260417.02](https://github.com/moltis-org/moltis/releases/tag/20260417.02) | 2026-04-17 | 第二日更版本，推测为当日修复聚合 |
| [20260417.01](https://github.com/moltis-org/moltis/releases/tag/20260417.01) | 2026-04-17 | 首日更版本 |

> ⚠️ **迁移注意事项**：版本号采用日期语义（`YYYYMMDD.NN`），但无 Release Notes 可供审计。建议维护者补充自动化变更日志生成，以便用户评估升级风险。

---

## 3. 项目进展

### 🔧 当日合并/关闭的核心 PR（11 条）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#730](https://github.com/moltis-org/moltis/pull/730) | penso | **Matrix OIDC 认证**：实现 OAuth 2.0/OIDC 流程，解决 matrix.org 等现代 homeserver 弃用密码认证后的登录阻塞 | [#711](https://github.com/moltis-org/moltis/issues/711) |
| [#767](https://github.com/moltis-org/moltis/pull/767) | penso | **Slack Slash Commands 修复**：注册 `POST /api/channels/slack/{account_id}/commands` 端点，修复 webhook 模式 404 | [#766](https://github.com/moltis-org/moltis/issues/766) |
| [#765](https://github.com/moltis-org/moltis/pull/765) | penso | **Podman 兼容性修复**：跳过 sysfs tmpfs overlay，解决 Ubuntu 24.04/26.04 下 `--cap-drop ALL` 导致的启动失败 | [#757](https://github.com/moltis-org/moltis/issues/757) |
| [#763](https://github.com/moltis-org/moltis/pull/763) | penso | **Nostr 隐私增强**：NIP-59 Gift Wrap 替代 NIP-04，隐藏收发方元数据 | [#759](https://github.com/moltis-org/moltis/issues/759) |
| [#761](https://github.com/moltis-org/moltis/pull/761) | penso | **Matrix 连接稳定性**：同步循环指数退避重试（5s→300s），修复瞬断永久掉线问题 | [#758](https://github.com/moltis-org/moltis/issues/758) |
| [#762](https://github.com/moltis-org/moltis/pull/762) | penso | **日志噪音治理**：递归剥离 `$schema` 字段，降级 fallback 日志级别，消除千次/会话的 WARN 泛滥 | [#760](https://github.com/moltis-org/moltis/issues/760) |
| [#768](https://github.com/moltis-org/moltis/pull/768) | penso | **安全工程**：移除硬编码测试密钥，消除 CodeQL `rust/hard-coded-cryptographic-value` 误报 | — |
| [#756](https://github.com/moltis-org/moltis/pull/756) | Cstewart-HC | **代码索引系统收官**：SQLite+FTS5 后端、增量重索引、文件监听、Clippy 清理，4-PR 栈完结 | — |
| [#755](https://github.com/moltis-org/moltis/pull/755) | Cstewart-HC | 代码索引网关集成：QMD 后端、工具注册 | — |
| [#754](https://github.com/moltis-org/moltis/pull/754) | Cstewart-HC | 代码索引编排器：搜索工具、增量同步、快照持久化 | — |
| [#753](https://github.com/moltis-org/moltis/pull/753) | Cstewart-HC | 代码索引基础：crate 脚手架、配置、文件发现 | — |

**里程碑意义**：代码索引子系统（`moltis-code-index`）历经 4 日 4 PR 完成从 0 到 1，使 Moltis 具备**项目内代码自检索能力**——这是 AI 助手实现"理解自身代码库"的关键基础设施。

---

## 4. 社区热点

### 🔥 讨论最活跃

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#748](https://github.com/moltis-org/moltis/issues/748) Prompt 错误重试机制 | **7 评论** | 核心 UX 痛点：LLM 调用失败后的恢复流程繁琐，用户期望"一键重试"而非手动重建上下文。反映生产环境中 prompt 工程的高频迭代需求 |
| 2 | [#769](https://github.com/moltis-org/moltis/issues/769) 心跳/Cron 多 Agent 文档澄清 | **3 评论** | 架构理解门槛：用户困惑全局工作区心跳与多 Agent 上下文的隔离边界，说明多租户/多 Agent 模型的文档滞后于实现 |
| 3 | [#441](https://github.com/moltis-org/moltis/issues/441) CSS 路径自动化（已关闭） | 2 评论 | DX 改进落地，Rust 前端构建的静态资源处理长期痛点 |

**诉求洞察**：社区正从"能不能跑"转向"好不好用"——重试机制、文档清晰度、构建体验构成新阶段的核心诉求。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#758](https://github.com/moltis-org/moltis/issues/758) Matrix 同步循环永久断连 | ✅ 已关闭 | [#761](https://github.com/moltis-org/moltis/pull/761) | 所有 Matrix 用户，网络不稳定场景必现 |
| 🔴 **高** | [#757](https://github.com/moltis-org/moltis/issues/757) Podman Ubuntu 启动失败 | ✅ 已关闭 | [#765](https://github.com/moltis-org/moltis/pull/765) | Podman + Ubuntu 24.04/26.04 用户 |
| 🟡 **中** | [#766](https://github.com/moltis-org/moltis/issues/766) Slack /commands 404 | ✅ 已关闭 | [#767](https://github.com/moltis-org/moltis/pull/767) | Slack webhook 模式用户 |
| 🟡 **中** | [#760](https://github.com/moltis-org/moltis/issues/760) 日志洪水（1000+ WARN/会话） | ✅ 已关闭 | [#762](https://github.com/moltis-org/moltis/pull/762) | 所有用户，可观测性污染 |
| 🟡 **中** | [#776](https://github.com/moltis-org/moltis/issues/776) `task_list.list` 默认列表行为异常 | 🟡 **待合并** | [#779](https://github.com/moltis-org/moltis/pull/779) | 使用自定义列表 ID 的 Agent |
| 🟢 **低** | [#773](https://github.com/moltis-org/moltis/issues/773) PWA 推送消息 CTA 404 | 🆕 **待处理** | — | PWA 用户 |
| 🟢 **低** | [#770](https://github.com/moltis-org/moltis/issues/770) 部分环境变量无法解析 | 🆕 **待处理** | — | 配置复杂部署用户 |

> **健康度评估**：5/7 Bug 当日闭环，剩余 2 个新报低优先级问题 + 1 个待合并修复，无遗留高危缺陷。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#774](https://github.com/moltis-org/moltis/issues/774) 简化 primary agent/agents 配置 | 架构简化 | **高** | vvuk 提出（核心贡献者），与当前多 Agent 文档混乱问题共振，可能伴随配置系统重构 |
| [#748](https://github.com/moltis-org/moltis/issues/748) Prompt 错误重试 | UX 增强 | **高** | 7 评论高互动，生产刚需，实现复杂度低 |
| [#764](https://github.com/moltis-org/moltis/issues/764) Netbird VPN 支持 | 网络基础设施 | **中** | 企业部署场景，需评估与现有网络抽象的兼容性 |
| [#775](https://github.com/moltis-org/moltis/pull/775) TypeScript Web UI 迁移 | 前端现代化 | **推进中** | penso 已开 PR，Vite+Preact+Tailwind 技术栈选定，属主动技术债偿还 |
| [#745](https://github.com/moltis-org/moltis/pull/745) Nix Flake 打包 | 分发渠道 | **待评审** | 社区贡献（tbaumann），Nix 生态用户需求明确，但需维护者承诺长期支持 |

**路线图信号**：项目正经历**前端架构换代**（TS 迁移）与**核心能力内化**（代码索引）双线并进，外部集成请求（Netbird、Nix）考验模块化设计是否足够开放。

---

## 7. 用户反馈摘要

### 😤 痛点
- **"重试太麻烦"**：[#748](https://github.com/moltis-org/moltis/issues/748) 用户描述 LLM 调用失败后需手动复制粘贴重建上下文，"easy way to retry" 直接写在标题里
- **"文档没说清多 Agent 怎么跑"**：[#769](https://github.com/moltis-org/moltis/issues/769) 用户列出 4 个具体问题，心跳能否跨 Agent 访问历史、Cron 触发哪个 Agent 的上下文等
- **"配置太啰嗦"**：[#774](https://github.com/moltis-org/moltis/issues/774) "make less clunky" —— 核心用户对当前 agent 声明语法的不满

### 😊 认可
- **快速修复响应**：多个 Issue 当日开当日关（#758/#761、#766/#767），社区对维护效率有正面预期
- **安全隐私主动改进**：NIP-59 Gift Wrap（[#763](https://github.com/moltis-org/moltis/pull/763)）获零评论直接合并，显示技术判断力受信任

### 🎯 使用场景
- 多 Agent 协作工作区（企业/团队部署）
- PWA 移动端推送交互
- NixOS 原生集成（开发者工作站场景）

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#745](https://github.com/moltis-org/moltis/pull/745) Nix Flake | 2026-04-16 | 2026-04-17 | 社区贡献流失 | 明确评审时间线或指派 Nix 经验维护者 |
| [#779](https://github.com/moltis-org/moltis/pull/779) task_list 修复 | 2026-04-17 | 2026-04-18 | 阻塞 #776 | 已更新，优先合并避免用户持续遇障 |
| [#775](https://github.com/moltis-org/moltis/pull/775) TS UI 迁移 | 2026-04-17 | 2026-04-17 | 大型重构分歧 | 需架构决策记录（ADR）确认技术选型 |
| [#777](https://github.com/moltis-org/moltis/pull/777) Docker 文档自动更新 | 2026-04-17 | 2026-04-17 | 自动化可靠性 | 验证 Doc Rotisserie 工具链是否纳入 CI |

> **维护者关注提醒**：今日新报 3 个无评论 Issue（#770、#773、#774）均来自活跃用户（supergeoff、vvuk），建议 48 小时内给予初步分类响应，防止感知上的"黑洞"。

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或安全披露信息。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-18

## 1. 今日速览

CoPaw/QwenPaw 项目今日保持**高活跃度**，24小时内处理50条Issues（28条新开/活跃，22条关闭）和45条PR（20条待合并，25条已合并/关闭），并发布v1.1.2版本。社区焦点集中在**品牌迁移遗留问题**（.copaw → .qwenpaw 目录混乱）、**MCP配置架构缺陷**以及**LLM路由功能**的推进。项目处于快速迭代期，功能开发（Mission Mode、多通道扩展）与稳定性修复并行，但用户升级体验存在明显摩擦。

---

## 2. 版本发布

### v1.1.2 已发布
- **核心新增**：**Mission Mode（任务模式）** — 通过 `/mission` 命令实现自主多阶段任务执行，Agent可自主规划、执行并迭代自纠正，支持 `/mission status` 和 `/mission list` 监控运行中任务 ([#3364](https://github.com/agentscope-ai/QwenPaw/issues/3364))
- **迁移注意事项**：该版本未解决从CoPaw向QwenPaw品牌迁移中的目录兼容性问题，升级用户需注意WORKING_DIR指向（详见Bug与稳定性章节）

---

## 3. 项目进展

### 今日合并/关闭的重要PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386) | rayrayraykk | **启动性能优化**：通过懒加载+并行初始化，服务端就绪时间从~4.5秒降至~0.05秒（50x提升），已合并 |
| [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) | xuanrui-L | **ACP协议支持**：暴露QwenPaw为ACP服务器，Zed/OpenCode等编辑器可通过`qwenpaw acp`连接，已关闭（可能需迭代） |
| [#3535](https://github.com/agentscope-ai/QwenPaw/pull/3535) | pan-x-c | **文档清理**：移除过时文档，更新`make_plan`技能，已合并 |
| [#3539](https://github.com/agentscope-ai/QwenPaw/pull/3539) | bowenliang123 | **暗黑模式修复**：空选择下拉框文字颜色不可见问题，已合并 |
| [#3536](https://github.com/agentscope-ai/QwenPaw/pull/3536) | zhijianma | **CLI增强**：支持更新provider base URLs，已关闭（可能方案调整） |
| [#3515](https://github.com/agentscope-ai/QwenPaw/pull/3515) | gnipping | **安全护栏增强**：工具审批提示增加风险等级（🔴/🟡）与说明，已关闭（需讨论） |

**整体推进**：项目向"生产就绪"迈进——性能基线（启动速度）、协议生态（ACP）、安全交互（风险可视化）三线并进，但部分PR关闭暗示评审标准趋严或方案需重构。

---

## 4. 社区热点

### 讨论最活跃的Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) 升级后WORKING_DIR仍指向旧目录 | **18条** | **品牌迁移的"技术债务"爆发**：全新安装QwenPaw到`.qwenpaw\`，但数据仍写入`.copaw\`，用户手动迁移后路径混乱。诉求：干净的迁移工具或明确的兼容性声明 |
| 🔥2 | [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) 更新到1.1.0后对qwenpaw和copaw的疑问 | 11条（已关闭） | **双重身份困惑**：qwenpaw/copaw命令并存、PATH配置手动、目录分裂。反映品牌重命名未做CLI兼容层 |
| 3 | [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) MCP配置GUI未传递到ReMe模块 | 6条 | **架构透明性缺失**：用户发现内部存在两套MCP系统，GUI配置与运行时实际使用的配置字段不一致 |
| 4 | [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) 多Agent编排网关 | 6条（已关闭） | **架构演进压力**：当前单Agent架构无法满足复杂协作场景，社区期待原生多Agent支持而非提示词模拟 |
| 5 | [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) `copaw init`安全警告后挂起 | 5条 | **Windows安装阻塞**：Python 3.13环境下的初始化流程中断，影响新用户转化 |

**背后诉求分析**：社区正经历"品牌升级阵痛期"——功能迭代速度（Mission Mode、LLM路由）与用户迁移体验严重失衡。高频出现的"目录混乱""命令找不到"表明安装/升级路径缺乏自动化测试覆盖。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-阻塞** | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | **OPEN** | 品牌迁移导致数据目录分裂，WORKING_DIR硬编码指向旧路径 | 无 |
| 🔴 **P0-阻塞** | [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) | **OPEN** | `copaw init`在Windows+Python 3.13挂起 | 无 |
| 🟡 **P1-高** | [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) | **OPEN** | MCP GUI配置与ReMe模块运行时脱节，连接永久"Connecting..." | 无 |
| 🟡 **P1-高** | [#3532](https://github.com/agentscope-ai/QwenPaw/issues/3532) | **CLOSED** | 远程LM Studio服务初始化缺少API URL配置步骤 | 已修复（v1.1.2相关） |
| 🟡 **P1-高** | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | **OPEN** | Anthropic兼容API 400错误：消息格式含`None`值/空content数组 | 无 |
| 🟡 **P1-高** | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) | **OPEN** | ARM设备上`FunctionCallOutput.call_id`验证失败（Armbian/RK3318） | 无 |
| 🟡 **P1-高** | [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | **OPEN** | `/api/models`接口响应时快时慢（2.5s vs 19ms波动） | 无 |
| 🟢 **P2-中** | [#3541](https://github.com/agentscope-ai/QwenPaw/issues/3541) | **OPEN** | 前端双Bug：技能搜索无法输入、MCP客户端暗黑模式文字不可见 | [#3547](https://github.com/agentscope-ai/QwenPaw/pull/3547) 部分修复 |
| 🟢 **P2-中** | [#3523](https://github.com/agentscope-ai/QwenPaw/issues/3523) | **OPEN** | 企业微信群消息重复创建chat，一条user_id为空 | 无 |
| 🟢 **P2-中** | [#3421](https://github.com/agentscope-ai/QwenPaw/issues/3421) | **OPEN** | 聊天中图片预览刷新后丢失 | 无 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **LLM智能路由**（本地优先/云端优先+按Agent作用域） | [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) + [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | ⭐⭐⭐⭐⭐ **极高** | 连续两个PR形成完整闭环，UI+运行时均已实现，作者vvv214持续迭代 |
| **语义化技能路由**（Embedding检索Top-K技能） | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | ⭐⭐⭐⭐☆ **高** | 首次贡献者，解决多技能场景token爆炸痛点，评审中需讨论 |
| **Signal/WhatsApp通道** | [#3508](https://github.com/agentscope-ai/QwenPaw/pull/3508) + [#3498](https://github.com/agentscope-ai/QwenPaw/pull/3498) | ⭐⭐⭐⭐☆ **高** | joe2643连续贡献，遵循neonize-qwenpaw适配策略，架构一致 |
| **备份恢复系统** | [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) | ⭐⭐⭐☆☆ **中** | 功能完整（zip流式备份），但评审中，可能需安全审计 |
| **Agent统计面板** | [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | ⭐⭐⭐⭐☆ **高** | bowenliang123成熟贡献者，趋势图+渠道分析已成型 |
| **内存与上下文重建** | [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) | ⭐⭐⭐⭐☆ **高** | WIP状态，BaseMemoryManager抽象+后台摘要，架构级改进 |
| **Kimi Code API支持** | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | ⭐⭐⭐☆☆ **中** | 用户手动添加失败，需官方适配，竞争优先级 |
| **多Agent编排网关** | [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) | ⭐⭐☆☆☆ **低-中** | 已关闭，架构改动大，可能v2.0规划 |

---

## 7. 用户反馈摘要

### 😤 核心痛点
- **"升级即踩坑"**：`qiyuanlicn` 描述的典型路径——"全新安装到.qwenpaw，手动迁移数据，发现程序写回.copaw"（[#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)）
- **"两套系统，双重困惑"**：`linhuang0405` 的PATH手动配置、app并存问题（[#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)）
- **"审批提示像墙"**：`hjgsv85jxm-svg` 指出工具护栏消息冗长且无风险分级，普通用户看不懂（[#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349)）

### 🎯 使用场景
- **远程开发**：`Na-Yun1990` 在NAS/服务器部署LM Studio，初始化流程假设本地（[#3532](https://github.com/agentscope-ai/QwenPaw/issues/3532)）
- **ARM边缘设备**：`linjk03` 在Armbian盒子运行，序列化兼容性问题暴露（[#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549)）
- **企业微信集成**：`jackgun` 的群机器人场景触发消息去重bug（[#3523](https://github.com/agentscope-ai/QwenPaw/issues/3523)）

### ✅ 满意点
- Mission Mode的自主任务能力获期待（v1.1.2发布）
- 启动速度优化（[#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386)）解决长期抱怨

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) Agent思考后无反馈直接结束 | 2026-03-25 | 2026-04-17 | **24天无实质响应**，核心对话稳定性问题，影响用户信任 |
| [#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026) copaw死循环2小时重复执行 | 2026-04-07 | 2026-04-17 | **11天**，任务中断机制缺失，生产环境高危 |
| [#3170](https://github.com/agentscope-ai/QwenPaw/issues/3170) 新版本内存占用很大 | 2026-04-09 | 2026-04-17 | **9天**，资源泄漏可能，无诊断进展 |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) 语义技能路由 | 2026-04-08 | 2026-04-17 | **首次贡献者PR**，"need discussions"标签，需维护者主动引导避免流失 |
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) session状态JSON损坏恢复 | 2026-04-12 | 2026-04-17 | **P0可用性问题**，并发写入race condition，评审中 |

---

*日报基于 GitHub 公开数据生成，项目地址：https://github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-18

## 1. 今日速览

ZeroClaw 今日维持**极高开发活跃度**，24小时内产生 **33 条 Issue 更新**（29 活跃/新开，4 关闭）与 **50 条 PR 更新**（31 待合并，19 已合并/关闭），并密集发布 **3 个 v0.7.0-beta 版本**。社区正全力冲刺 v0.7.0 里程碑，核心工作围绕**架构重构**（Cargo workspace 拆分）、**安全沙箱修复**、**渠道功能完善**及**会话管理基础设施**展开。值得注意的是，资深贡献者 Jason Perlow（FINOS 生态）连续提交生产环境阻塞问题，反映出项目正经历真实企业级场景的硬考验。

---

## 2. 版本发布

### v0.7.0-beta.1030 / .1040 / .1041 — 历史最大规模结构重构

| 属性 | 详情 |
|:---|:---|
| 版本链 | `v0.7.0-beta.1030` → `v0.7.0-beta.1040` → `v0.7.0-beta.1041` |
| 基础版本 | `v0.6.9` stable |
| 核心变更 | **Cargo workspace 化**：代码库拆分为聚焦的独立 crate |

**关键变更内容**（基于 Changelog 摘要）：
- **架构层面**：单体代码库 → 多 crate Workspace 结构，提升编译并行度与模块可维护性
- **配置系统**：全新配置 schema 上线，附带**实时迁移路径**（live migration）
- **风险提示**：Changelog 被截断，但 "largest structural overhaul in ZeroClaw's history" 表明存在显著破坏性变更

**迁移注意事项**：
> ⚠️ 自 v0.6.9 升级的用户需密切关注配置迁移文档；自定义构建脚本可能因 crate 路径变更而失效。

**Release 链接**：
- [v0.7.0-beta.1041](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1041) | [v0.7.0-beta.1040](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1040) | [v0.7.0-beta.1030](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1030)

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 状态 | 贡献 |
|:---|:---|:---|:---|
| [#5676](https://github.com/zeroclaw-labs/zeroclaw/pull/5676) | theonlyhennygod | **已关闭** | 修复飞书 `mention_only` 配置被忽略 + Groq `tool_use_failed` 400 错误（由 #5848 接替） |
| [#5839](https://github.com/zeroclaw-labs/zeroclaw/pull/5839) | theonlyhennygod | **已合并** | CI 修复：使用 `RELEASE_TOKEN` 绕过标签保护规则，解除手动发布阻塞 |
| [#5723](https://github.com/zeroclaw-labs/zeroclaw/issues/5723) | micookie | **已关闭** | 主题模式显示 bug（暗黑/明亮选项均显示为暗黑）— 关联 PR #5207 |
| [#5564](https://github.com/zeroclaw-labs/zeroclaw/issues/5564) | aliasliao | **已关闭** | 自定义 Provider 空输出导致后续请求 400 的边界 case |
| [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) | JerryVDP | **已关闭** | Web Dashboard 不可用问题（构建指引缺失）|
| [#5778](https://github.com/zeroclaw-labs/zeroclaw/issues/5778) | ErCondor1886 | **已关闭** | Telegram 内联键盘（reply_markup）在出站消息中丢失 |

**整体推进评估**：今日完成 6 项闭环，CI 发布管道恢复、2 个 S1 级渠道 Bug 清除，但 **31 个待合并 PR 形成显著积压**，其中多个高安全风险 PR（`risk: high` 标签）等待维护者审查。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---:|:---|
| 🥇 | [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) RFC: 以 Mozilla Fluent 替换 TOML i18n | **4** | **国际化架构升级**：要求采用标准化 `.ftl` 方案，移除仓库内翻译文档，降低维护负担 |
| 🥈 | [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) Landlock 沙箱毒化宿主进程 | **3** | **安全根基动摇**：Linux Landlock 后端导致 workspace 文件访问永久损坏，S1 阻塞 |
| 🥉 | [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) Web Dashboard 不可用 | **3** | 开发者体验断裂（已关闭）|
| 4 | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) `runtime.kind = "native"` 未绕过 Docker | **2** | 容器逃逸失败：用户期望原生执行却仍需 Docker，影响 FINOS 合规场景 |
| 5 | [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) Supervised 模式 Telegram 渠道 "Denied by user" | **2** | 权限状态机跨渠道不一致 |

**诉求分析**：社区正从"功能可用"向**企业级可维护性**跃迁——i18n RFC 反映对工程规范的诉求，而 Landlock/沙箱系列问题暴露安全模型在复杂 Linux 环境下的脆弱性。Jason Perlow 的三连 Issue（#5719/#5720/#5722）代表**金融合规场景**的刚性需求，项目需响应此信号以获取 FINOS 生态信任。

---

## 5. Bug 与稳定性

### 今日报告 Bug 按严重程度排列

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **S0** | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | 🆕 新开 | `gateway.web_dist_dir` / `ZEROCLAW_WEB_DIST_DIR` 文档缺失，存在配置误用导致的安全/数据风险 | 无 |
| **S1** | [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) | 活跃 3 天 | Landlock 沙箱毒化调用进程，workspace 访问永久中断 | 无 |
| **S1** | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | 活跃 3 天 | `runtime.kind = "native"` 未实际绕过 Docker | 无 |
| **S1** | [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) | 活跃 7 天 | Telegram 渠道 supervised 模式误报 "Denied by user" | 无 |
| **S1** | [#5778](https://github.com/zeroclaw-labs/zeroclaw/issues/5778) | ✅ 已关闭 | Telegram inline_keyboard 丢失 | — |
| **S2** | [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | 🆕 新开 | Shell 策略错误将 `git -C` 小写化为 `-c`，合法命令被拒 | 无 |
| **S2** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | 🆕 新开 | 系统提示过度强调 memory，cron 任务偏离当前指令 | 无 |
| **S2** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | 活跃 3 天 | 默认 shell 沙箱配置阻断所有 Python skill 模式 | 无 |

**高优先级技术债**（无独立 Issue，但影响深远）：
- [#5822](https://github.com/zeroclaw-labs/zeroclaw/issues/5822) OpenRouter SSE 流泄露 HTTP 连接（`JoinHandle` 被丢弃）
- [#5823](https://github.com/zeroclaw-labs/zeroclaw/issues/5823) `prune_history` 工具消息保护逻辑缺陷，可能静默驱逐受保护消息
- [#5824](https://github.com/zeroclaw-labs/zeroclaw/issues/5824) `cron_run` 无 delivery handler 时误报 `status=ok`（静默丢消息）
- [#5825](https://github.com/zeroclaw-labs/zeroclaw/issues/5825) `strip_native_tool_messages` 产生连续 assistant 消息，导致严格角色交替 Provider 返回 400

---

## 6. 功能请求与路线图信号

### 用户提出的关键功能需求

| Issue | 类别 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) Mozilla Fluent i18n | 工程规范 | ⭐⭐⭐⭐⭐ | RFC 格式完整，作者 singlerider 有合并历史，符合 v0.7 架构清理方向 |
| [#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) Webhook 指数退避重试 | 可靠性 | ⭐⭐⭐⭐⭐ | **已实现**：PR [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) 已提交，待合并 |
| [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) 模型级推理配置 | 配置精细化 | ⭐⭐⭐⭐☆ | 需求清晰，与现有 `[providers.models.<name>]` 结构天然契合 |
| [#5246](https://github.com/zeroclaw-labs/zeroclaw/issues/5246) 可配置默认 Shell | 开发者体验 | ⭐⭐⭐☆☆ | 需求合理，但需协调沙箱策略（与 #5722 冲突）|
| [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) MariaDB 内存后端 | 基础设施 | ⭐⭐⭐☆☆ | 长期悬停，依赖数据库抽象层成熟度 |
| [#5701](https://github.com/zeroclaw-labs/zeroclaw/issues/5701) `clear_messages` O(1) 会话重置 | 性能 | ⭐⭐⭐⭐⭐ | **已实现**：PR [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705) 包含相关基础设施 |
| [#5840](https://github.com/zeroclaw-labs/zeroclaw/issues/5840) 多 chunk 推理回放保真度 | 流式处理 | ⭐⭐⭐⭐☆ | 与已合并 PR #5606 直接相关，需评估阶段 |

**基础设施层密集建设信号**：
- Audacity88 单日提交 5 个关联 Issue（#5833-#5837）+ PR #5705，聚焦**会话取消令牌传播、FTS 索引一致性、会话所有权模型**——表明 v0.7 正在构建**可中断、可持久化、多租户安全**的运行时内核。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 用户/场景 | 痛点 | 来源 Issue |
|:---|:---|:---|
| **Jason Perlow / FINOS 金融合规** | v0.6.9 沙箱策略与 Python 生态严重冲突：`PYTHONPATH=` 内联语法失效、默认沙箱阻断所有 realistic Python 模式、`native` runtime 仍强制 Docker | [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720), [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722), [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) |
| **kriku / Telegram 生产用户** | 交互式 CLI 与 Telegram 渠道权限状态机不一致，supervised 模式在渠道中不可用 | [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) |
| **databillm / 记忆系统用户** | `show_tool_calls = true` 与系统提示硬编码冲突；记忆权重过高导致 cron 任务偏离 | [#5831](https://github.com/zeroclaw-labs/zeroclaw/issues/5831), [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) |
| **eabase / 自托管运维** | `gateway.web_dist_dir` 环境变量用法完全无文档，S0 级配置黑洞 | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| **mn13 / Webhook 集成方** | 单次 HTTP 无重试，瞬态故障导致消息静默丢失 | [#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) |

### 满意度信号
- ✅ Web Dashboard 构建指引问题快速关闭（#5348）
- ✅ Telegram inline_keyboard 修复闭环（#5778）
- ⚠️ 但 **S1 级安全/沙箱问题平均响应 >3 天**，企业用户耐心承压

---

## 8. 待处理积压

### 需维护者紧急关注的高风险 PR

| PR | 风险标签 | 滞留时间 | 阻塞原因 |
|:---|:---|:---|:---|
| [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) `fix(shell): guard bypass` | `risk: high` | 3 天 | Shell 通配符绕过逻辑修复，安全关键 |
| [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) `fix(agent): register skill tools` | `risk: high` | 3 天 | Gateway 路径技能工具未注册，功能断裂 |
| [#5361](https://github.com/zeroclaw-labs/zeroclaw/pull/5361) `fix: use codex exec subcommand` | `risk: high` | 12 天 | Codex CLI v0.118.0+ 兼容性，工具失效 |
| [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705) `feat(gateway): session abort + streaming persistence` | `risk: high` | 5 天 | 核心基础设施，Audacity88 系列 Issue 的依赖基础 |
| [#5552](https://github.com/zeroclaw-labs/zeroclaw/pull/5552) `fix(onboard): container-aware URLs` | `risk: high` | 9 天 | Docker  onboarding 本地 AI Provider 配置失效 |

### 长期未响应的重要 Issue

| Issue | 创建时间 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) MariaDB 支持 | 2026-03-25 | 今日 | 企业自托管刚需，24 天无实质推进 |
| [#4917](https://github.com/zeroclaw-labs/zeroclaw/pull/4917) WhatsApp mention 文档 | 2026-03-28 | 今日 | 渠道功能对等性，20 天 `needs-author-action` |

---

**健康度评分**：🟡 **活跃但承压**（7/10）
- ✅ 发布节奏密集，CI 管道恢复
- ✅ 社区贡献者多元化（金融、运维、国际化）
- ⚠️ 31 待合并 PR 中 5+ 个 `risk: high` 滞留超 3 天
- 🔴 S1 安全/沙箱问题响应速度不匹配企业用户期望

*日报生成时间：2026-04-18 | 数据来源：ZeroClaw GitHub 开放数据*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*