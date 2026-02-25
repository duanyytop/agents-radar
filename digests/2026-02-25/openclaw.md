# OpenClaw 项目动态日报 2026-02-25

> 数据来源: [openclaw/openclaw](https://github.com/openclaw/openclaw) | Issues: 500 | PRs: 500 | 生成时间: 2026-02-25 01:41 UTC

# OpenClaw 项目日报 | 2026-02-25

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内处理 500 条 Issues（339 活跃/161 关闭）和 500 条 PR（335 待合并/165 已处理），发布 v2026.2.23 版本。社区焦点集中在 **KiloCode 提供商集成**（新功能）、**Telegram/WhatsApp 渠道稳定性**（回归问题）、以及 **i18n 国际化长期诉求**（68 评论热帖）。安全加固成为今日代码审查主线，多个沙箱逃逸和跨渠道隐私漏洞获修复。项目整体健康度良好，但渠道插件（尤其是 Telegram）的近期回归需持续关注。

---

## 2. 版本发布

### [v2026.2.23](https://github.com/openclaw/openclaw/releases/tag/v2026.2.23) — 2026-02-23

| 属性 | 内容 |
|:---|:---|
| **发布类型** | 功能版本 |
| **破坏性变更** | 无明确标注 |
| **迁移注意** | Browser Relay 扩展用户需更新令牌格式（见 #24430） |

**核心变更：**

- **KiloCode 提供商一级支持** ([#20212](https://github.com/openclaw/openclaw/pull/20212)) — 由 @jrf0110 和 @markijbema 贡献
  - 完整认证流程与引导式接入
  - 隐式提供商自动检测
  - 模型默认值与转录/缓存-TTL 处理
  - 默认模型：`kilocode/anthropic/claude-opus-4.6`

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 影响领域 | 进展说明 |
|:---|:---|:---|:---|
| [#24571](https://github.com/openclaw/openclaw/pull/24571) | @brandonwise | **安全/隐私** | 修复共享会话中的跨渠道回复路由泄露（#24152）。`dmScope="main"` 时，不同 DM 渠道的 `lastChannel`/`lastTo` 字段不再互相覆盖，消除隐私风险 |
| [#25804](https://github.com/openclaw/openclaw/pull/25804) | @Lucenx9 | **WhatsApp 渠道** | 过滤推理消息投递，解决 `thinking=low` 模式下内部推理内容外泄至用户端（修复 #25214, #24328） |
| [#25891](https://github.com/openclaw/openclaw/pull/25891) | @albertlieyingadrian | **沙箱安全** | 阻止路径以 `-` 开头的 shell 选项注入攻击，修复 `---` 模式导致的语法错误崩溃 |
| [#25729](https://github.com/openclaw/openclaw/pull/25729) | @Suko | **Web UI** | 修复 `/agents` 面板回退模型输入未继承 `agents.defaults` 配置的问题 |
| [#22458](https://github.com/openclaw/openclaw/pull/22458) | @apethree | **macOS 客户端** | 修复 WebChat 面板圆角裁剪视觉问题 |

**整体推进评估：** 今日合并聚焦**安全加固**（2 项隐私/沙箱修复）和**渠道稳定性**（WhatsApp 推理过滤），项目在安全基线和用户体验层面稳步前进。

---

## 4. 社区热点

### 高讨论度 Issues

| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) **i18n & 本地化支持** | 68 | 全球用户强烈需求多语言界面，维护团队承认资源不足但保持开放 | 🔥 **长期热点** |
| [#1690](https://github.com/openclaw/openclaw/issues/1690) Webchat UI 网关令牌缺失 | 31 | 配置复杂度问题，URL 令牌与网关配置不匹配导致认证失败 | ✅ 已关闭 |
| [#1649](https://github.com/openclaw/openclaw/issues/1649) iMessage 自聊回声循环 | 26 | 苹果生态集成稳定性，历史修复未完全解决边界场景 | ✅ 已关闭 |
| [#24718](https://github.com/openclaw/openclaw/issues/24718) Telegram 插件不可用 | 18 | **v2026.2.22 回归问题**，插件加载失败阻断新用户接入 | ✅ 已关闭 |
| [#13991](https://github.com/openclaw/openclaw/issues/13991) 联想层级记忆系统提案 | 16 | 社区成员提出类人类记忆架构，引发架构层面深度讨论 | 💡 **路线图信号** |

**诉求分析：** i18n 是**结构性需求**（用户规模扩张瓶颈），记忆系统提案代表**架构创新方向**，而 Telegram/WhatsApp 渠道回归反映**发布质量管控**需加强。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#24395](https://github.com/openclaw/openclaw/issues/24395) | **v2026.2.22 全渠道插件失效回归** — 所有渠道插件保持 `disabled` 状态，2026.2.19 正常 | ✅ 已关闭 |
| 🔴 **高** | [#25545](https://github.com/openclaw/openclaw/issues/25545) | **v2026.2.22-2 Telegram 插件不可用** — 引导向导无法完成配置 | ✅ 已关闭 |
| 🟡 **中** | [#6470](https://github.com/openclaw/openclaw/issues/6470) | 推理/思考内容泄露至 Discord，与模型无关 | 🔄 待修复（#25804 修复 WhatsApp，Discord 待确认） |
| 🟡 **中** | [#6156](https://github.com/openclaw/openclaw/issues/6156) | macOS 网关永不就绪，设置向导卡死 | 🔄 开放中 |
| 🟡 **中** | [#22445](https://github.com/openclaw/openclaw/issues/22445) | WSL 环境下网关连接失败，即使配置 `dangerouslyAllowLocalhost: true` | 🔄 开放中 |
| 🟡 **中** | [#23116](https://github.com/openclaw/openclaw/issues/23116) | MiniMax `tool_use_id` 不匹配导致会话永久损坏（HTTP 400 error 2013） | 🔄 开放中 |
| 🟢 **低** | [#24430](https://github.com/openclaw/openclaw/issues/24430) | Browser Relay 扩展升级后拒绝有效 `gateway.auth.token` | ✅ 已关闭 |

**关键观察：** v2026.2.22 出现**渠道插件系统性回归**，24 小时内密集报告 Telegram/WhatsApp/全渠道失效问题，建议维护团队审查该版本插件加载机制变更。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 可行性信号 | 纳入预测 |
|:---|:---|:---|:---|
| **完整 MCP 支持** | [#13248](https://github.com/openclaw/openclaw/issues/13248) | 代码库已有 `mcporter` 工具基础设施，社区投票 12 👍 | **高** — 下一季度 |
| **任务级智能模型路由** | [#19166](https://github.com/openclaw/openclaw/issues/19166) | 标记为重复，但需求明确（按任务类型自动选模型） | 中 — 需架构设计 |
| **Telegram 原生执行审批 UI** | [#24104](https://github.com/openclaw/openclaw/pull/24104) | **PR 已提交**，实现内联按钮审批，对标 Discord 体验 | **高** — 近期合并 |
| **MABOS 前端仪表板** | [#20450](https://github.com/openclaw/openclaw/pull/20450) | 大型 PR（XL），含 7 模块 SPA + 20 推理引擎工具，AI 辅助开发 | 中 — 需深度审查 |
| **联想层级记忆** | [#13991](https://github.com/openclaw/openclaw/issues/13991) | 架构级提案，16 评论深度讨论，无现成 PR | 低 — 长期研究 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪 |
|:---|:---|:---|
| **"我配置了 groupPolicy='disabled'，群组消息仍然进来"** — 配置语义不明确 | [#2019](https://github.com/openclaw/openclaw/issues/2019) | 😤 挫败 |
| **"升级后所有渠道失效，回退到 2026.2.19 才恢复"** — 版本信任危机 | [#24395](https://github.com/openclaw/openclaw/issues/24395) | 😠 焦虑 |
| **"WSL 环境文档不足，dangerouslyAllowLocalhost 也不工作"** — 开发者体验缺口 | [#22445](https://github.com/openclaw/openclaw/issues/22445) | 😕 困惑 |
| **"workspace 文件每消息注入 35,600 tokens，浪费 93.5%"** — 成本敏感用户 | [#9157](https://github.com/openclaw/openclaw/issues/9157) | 💸 担忧 |

### 满意点
- KiloCode 集成获积极反馈（"一键接入 Anthropic 模型"）
- 安全漏洞响应迅速（跨渠道隐私修复 24 小时内合并）

---

## 8. 待处理积压

### 需维护者关注的长期 Issue

| Issue | 年龄 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n 支持 | 28 天 | 用户增长天花板 | 发布社区贡献指南，建立翻译工作流 |
| [#9831](https://github.com/openclaw/openclaw/issues/9831) gemini-cli 检测失败 | 20 天 |  Google 生态集成 | 复现环境配置，优先级：中 |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) Matrix E2EE 自验证缺失 | 22 天 | 企业/隐私用户需求 | 评估加密库依赖，优先级：低 |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) Workspace 文件重复注入 | 21 天 | **成本效率关键** | 缓存机制设计，优先级：高 |
| [#9030](https://github.com/openclaw/openclaw/issues/9030) "鉴别器层"中间件架构 RFC | 21 天 | 安全架构创新 | 标记为 `roadmap`，维护者回应 |

---

*日报生成时间：2026-02-25 | 数据来源：GitHub API 与社区活动流*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*