# AI CLI 工具社区动态日报 2026-03-02

> 生成时间: 2026-03-02 00:07 UTC | 覆盖工具: 6 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 | 2026-03-02

## 1. 生态全景

当前 AI CLI 工具市场呈现"一超多强"格局，Claude Code 凭借 Anthropic 的模型优势占据生态主导地位，但 OpenAI Codex、Google Gemini CLI 等追赶者通过差异化功能快速迭代。社区贡献模式从"提需求"转向"直接实现"，插件/MCP 生态成为各平台争夺焦点。中文市场（Kimi、Qwen）加速追赶，但在国际化标准和远程部署能力上仍有差距。整体行业正从"功能可用"向"企业就绪"演进，稳定性、计费透明度、多环境适配成为共同瓶颈。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | 版本发布 | 社区活跃度评级 |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 10+ 热点 | 10+ 开放 | 无 | ⭐⭐⭐⭐⭐ 极高 |
| **OpenAI Codex** | 10+ 热点 | 10+ 开放 | 无 | ⭐⭐⭐⭐⭐ 极高 |
| **Gemini CLI** | 10+ 热点 | 10+ 开放 | 无 | ⭐⭐⭐⭐⭐ 极高 |
| **Kimi Code CLI** | 4 条 | 4 条 | 无 | ⭐⭐⭐☆☆ 中等 |
| **OpenCode** | 10+ 热点 | 10+ 开放 | 无 | ⭐⭐⭐⭐☆ 高 |
| **Qwen Code** | 7 条 | 10 条 | v0.11.0-nightly | ⭐⭐⭐⭐☆ 高 |

> **活跃度解读**：Claude Code/Codex/Gemini 形成第一梯队，日均 20+ 社区贡献；OpenCode 作为开源替代方案热度上升；Kimi 活跃度偏低但问题聚焦；Qwen 中文场景迭代密集。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **远程/无头环境适配** | Claude Code (Cowork VM)、Codex (SSH)、Kimi (SSH)、OpenCode (Server) | 容器、CI/CD、SSH 跳板机、无图形界面服务器的完整支持 | 🔴 P0 |
| **计费透明度与可控性** | Codex (用量异常)、OpenCode (Copilot 计费错误)、Qwen (免费额度引导) | 实时仪表盘、硬上限设置、agent 请求正确分类、额度耗尽友好引导 | 🔴 P0 |
| **MCP/插件生态治理** | Claude Code (子代理权限)、Codex (僵尸进程)、Gemini (MCP 开关)、OpenCode (工具运行时开关) | 进程生命周期管理、权限一致性、工具热插拔、上下文爆炸防护 | 🟡 P1 |
| **Plan 模式专业化** | Claude Code、Gemini、OpenCode、Qwen | 从"一次性审批"转向"协作式迭代"，支持批注、外部编辑器、状态恢复 | 🟡 P1 |
| **稳定性与内存管理** | OpenCode (116GB 泄漏)、Gemini (JS 堆耗尽)、Codex (MCP 泄漏) | 长会话不崩溃、compaction 不中断、孤儿进程回收 | 🔴 P0 |
| **AGENTS.md 标准化** | Claude Code (#29835)、Qwen (#2018) | 与 CLAUDE.md 等价支持，降低多代理项目迁移成本 | 🟢 P2 |

---

## 4. 差异化定位分析

| 工具 | 核心功能侧重 | 目标用户画像 | 技术路线特点 |
|:---|:---|:---|:---|
| **Claude Code** | Cowork 虚拟机协作、深度 IDE 集成、插件生态 | 企业开发团队、需要安全隔离环境的用户 | 闭源 + 官方插件市场，强调"Agent 即服务" |
| **OpenAI Codex** | 语音交互、实时协作、Subagents 并行 | Pro/Plus 付费用户、追求最新模型能力 | 强绑定 OpenAI 模型栈，语音优先设计 |
| **Gemini CLI** | 远程智能体基础设施、Plan 模式专业化 | Google Cloud 生态用户、多模态需求者 | Sprint 化开发，MCP 协议深度集成 |
| **Kimi Code CLI** | 中文场景优化、阿里云生态集成 | 中国开发者、阿里云用户 | 本土化优先，国际化能力待补 |
| **OpenCode** | 多 Provider 支持、开源可定制、企业合规 | 开源偏好者、多模型策略企业、安全敏感组织 | 最大开放度，快速接入新 Provider |
| **Qwen Code** | 中文语言稳定性、阿里云 Coding Plan 商业化 | 中文开发者、阿里云付费用户 | 中文场景深度优化，商业模式清晰 |

---

## 5. 社区热度与成熟度

```
成熟度矩阵（横轴：功能完整度，纵轴：社区活跃度）

高活跃度 │
         │    🟢 Claude Code    🟢 Gemini CLI
         │         (生态成熟)      (快速迭代)
         │
         │              🟡 OpenCode
         │         (功能追赶期)
         │
         │    🟢 OpenAI Codex    🟡 Qwen Code
         │    (高热度/稳定性痛点)   (中文深耕)
         │
         │              🔵 Kimi Code CLI
         │              (早期阶段)
         └─────────────────────────────────────
              低完整度              高完整度
```

| 阶段 | 工具 | 关键特征 |
|:---|:---|:---|
| **生态成熟期** | Claude Code | 插件市场活跃，但 Cowork/VM 层稳定性拖累口碑 |
| **快速迭代期** | Gemini CLI、Codex | 功能密集发布，远程智能体/语音成为差异化赌注 |
| **功能追赶期** | OpenCode、Qwen | 多 Provider 接入/中文优化，稳定性债务累积 |
| **早期建设期** | Kimi | 基础功能可用，企业场景适配缺口明显 |

---

## 6. 值得关注的趋势信号

| 趋势 | 信号来源 | 开发者参考价值 |
|:---|:---|:---|
| **"Agent 即基础设施"** | Gemini 远程智能体 Sprint、Claude Cowork VM | 未来 CLI 工具将内置轻量级运行时环境，本地开发→远程执行的无缝切换成为标配 |
| **计费模型透明化战争** | Codex 用量异常、OpenCode Copilot 事故、Qwen 付费引导 | 企业采购将强制要求可观测的 Token/请求级计费，"黑盒计费"工具将被淘汰 |
| **MCP 成为事实标准** | 全部 6 款工具均深度集成 | 投资 MCP 工具开发具备跨平台复用价值，但需关注进程治理和权限模型差异 |
| **中文场景技术债显性化** | Qwen 空格问题、Kimi 远程适配 | 中文开发者需评估工具的 CJK 支持深度，非国际化原生工具存在隐性成本 |
| **开源替代方案窗口期** | OpenCode 多 Provider PR 密集、Claude Code 闭源限制 | 企业对供应商锁定的警惕创造 OpenCode 等替代方案机会，但需承担稳定性风险 |
| **"预防性安全"设计** | Claude push-guardrails、Qwen VibeGuard、OpenCode 便携模式 | 安全从"事后审计"转向"事前阻断"，代码推送前的可见性检查、PII 脱敏成为合规刚需 |

---

*报告基于 2026-03-02 各工具 GitHub 公开数据生成，建议结合具体业务场景进行 POC 验证。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-03-02）

---

## 1. 热门 Skills 排行（按社区关注度）

| 排名 | Skill | 功能概述 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **skill-quality-analyzer / skill-security-analyzer** | 元技能（Meta Skills）：自动评估其他 Skill 的质量（结构、文档、安全性等5维度） | 🔵 Open | [#83](https://github.com/anthropics/skills/pull/83) |
| 2 | **frontend-design** | 前端设计技能优化版，提升指令清晰度与单轮对话可执行性 | 🔵 Open | [#210](https://github.com/anthropics/skills/pull/210) |
| 3 | **codebase-inventory-audit** | 代码库健康度审计：识别孤儿代码、未使用文件、文档缺口等10步工作流 | 🔵 Open | [#147](https://github.com/anthropics/skills/pull/147) |
| 4 | **Google Workspace 集成套件** | 6个 Agent Skills 通过 GOG CLI 实现邮件分类、草稿、日历、任务管理 | 🔵 Open | [#299](https://github.com/anthropics/skills/pull/299) |
| 5 | **ShieldCortex** | 持久化内存系统 + AI Agent 安全框架（含威胁检测、信任评分、审计追踪） | 🔵 Open | [#386](https://github.com/anthropics/skills/pull/386) |
| 6 | **masonry-generate-image-and-videos** | Masonry CLI 集成：Imagen 3.0 图像生成、Veo 3.1 视频生成 | 🔵 Open | [#335](https://github.com/anthropics/skills/pull/335) |
| 7 | **SAP-RPT-1-OSS predictor** | SAP 开源表格基础模型集成，用于企业数据预测分析 | 🔵 Open | [#181](https://github.com/anthropics/skills/pull/181) |
| 8 | **flutter-theme-factory** | Flutter 主题工厂：12套预置主题（含 ColorScheme、Google Fonts、亮暗模式） | 🔵 Open | [#368](https://github.com/anthropics/skills/pull/368) |

---

## 2. 社区需求趋势（Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|:---|:---|:---|
| **🔐 Agent 治理与安全** | [#412](https://github.com/anthropics/skills/issues/412) | 缺乏 AI Agent 系统的策略执行、威胁检测、审计追踪技能 |
| **⚙️ Skills 即 MCP 服务** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skills 暴露为标准 MCP 接口，实现跨工具复用 |
| **📦 Skills 包管理器** | [#185](https://github.com/anthropics/skills/issues/185) | 社区项目 [skills-mcp](https://github.com/leezhuuuuu/skills-mcp) 推动标准化分发机制 |
| **🛠️ 企业级工作流** | [#202](https://github.com/anthropics/skills/issues/202) | skill-creator 需从"教学文档"转型为"高效执行工具" |
| **☁️ 多云/Bedrock 兼容** | [#29](https://github.com/anthropics/skills/issues/29) | 非 Claude 原生环境的 Skills 运行支持 |

---

## 3. 高潜力待合并 Skills（评论活跃 + 近期更新）

| Skill | 关键价值 | 最后更新 | 链接 |
|:---|:---|:---|:---|
| **feature-dev 工作流修复** | 修复 TodoWrite 覆盖 bug，解决 Phase 6-7 被跳过问题 | 2026-02-12 | [#363](https://github.com/anthropics/skills/pull/363) |
| **YAML 特殊字符预检** | 在 `quick_validate.py` 新增未引号特殊字符检测，避免静默解析错误 | 2026-02-12 | [#361](https://github.com/anthropics/skills/pull/361) |
| **skill-creator UTF-8 编码修复** | Windows 环境 UnicodeDecodeError 根治方案 | 2026-01-30 | [#284](https://github.com/anthropics/skills/pull/284) |
| **webapp-testing 依赖声明** | 补充 `requirements.txt` 预声明 Playwright 依赖，减少运行时摩擦 | 2026-02-01 | [#282](https://github.com/anthropics/skills/pull/282) |

---

## 4. Skills 生态洞察

> **核心结论**：社区正从"单点工具技能"向"元能力层（Meta-Skills）+ 企业级治理框架"跃迁——既需要能审计/生成其他 Skills 的质量基础设施（如 #83），也迫切要求 Agent 安全、MCP 标准化、多云部署等生产级能力，反映出 Claude Code 正从个人效率工具向团队级 AI 工程平台演进。

---

*数据截止：2026-03-02 | 来源：github.com/anthropics/skills*

---

# Claude Code 社区动态日报 | 2026-03-02

## 今日速览

今日社区活跃度极高，**Cowork 功能成为焦点**——文件夹选择器限制、VM 启动失败等关键问题持续发酵。同时，**AskUserQuestion 工具出现严重回归**，多个用户报告交互式 UI 无法渲染、直接返回空答案。社区贡献者积极提交插件 PR，包括 AGENTS.md 支持、代码验证增强等实用功能。

---

## 社区热点 Issues

| 排名 | Issue | 重要性 | 社区反应 |
|:---|:---|:---|:---|
| 1 | [#24964](https://github.com/anthropics/claude-code/issues/24964) **Cowork 文件夹选择器拒绝家目录外路径** | 🔴 严重限制工作流 | 60 评论，75 👍，跨平台影响（Windows/macOS），符号链接/ junction 也被阻断 |
| 2 | [#26554](https://github.com/anthropics/claude-code/issues/26554) **Cowork RPC 错误：virtiofs/Plan9 挂载失败** | 🔴 阻断 Cowork 使用 | 38 评论，47 👍，虚拟机文件系统层问题 |
| 3 | [#18170](https://github.com/anthropics/claude-code/issues/18170) **终端复制粘贴包含多余缩进和尾部空格** | 🟡 高频使用痛点 | 36 评论，65 👍，长期存在的 UX 问题 |
| 4 | [#29530](https://github.com/anthropics/claude-code/issues/29530) **AskUserQuestion 不渲染交互 UI，立即返回空响应** | 🔴 工具功能完全失效 | 9 评论，9 👍，今日新爆发，影响自动化流程 |
| 5 | [#27801](https://github.com/anthropics/claude-code/issues/27801) **Cowork 工作空间启动失败，VM 服务未运行** | 🔴 完全阻断功能 | 15 评论，7 👍，重启后仍持续 |
| 6 | [#13605](https://github.com/anthropics/claude-code/issues/13605) **自定义插件子代理无法访问 MCP 工具** | 🟡 插件生态限制 | 14 评论，16 👍，内置代理正常但自定义代理受限 |
| 7 | [#13898](https://github.com/anthropics/claude-code/issues/13898) **自定义子代理无法访问项目级 MCP 服务器** | 🟡 与 #13605 相关 | 9 评论，7 👍，表现为幻觉而非真实调用 |
| 8 | [#29774](https://github.com/anthropics/claude-code/issues/29774) **AskUserQuestion 在自定义命令中自动选择** | 🔴 与 #29530 同根 | 5 评论，3 👍，今日新增，技能系统受影响 |
| 9 | [#29733](https://github.com/anthropics/claude-code/issues/29733) **AskUserQuestion 无用户输入即完成** | 🔴 与 #29530 重复报告 | 4 评论，7 👍，确认问题普遍性 |
| 10 | [#5186](https://github.com/anthropics/claude-code/issues/5186) **通知钩子 10 秒延迟** | 🟡 性能问题 | 21 评论，24 👍，Linux 平台，内存相关 |

> **关键洞察**：AskUserQuestion 工具今日出现**集中爆发式故障报告**，3 个相关 Issue 同时更新，表明可能是近期版本引入的回归。Cowork 功能的文件系统/VM 层稳定性仍是最大痛点。

---

## 重要 PR 进展

| PR | 状态 | 功能/修复内容 |
|:---|:---|:---|
| [#29759](https://github.com/anthropics/claude-code/pull/29759) | 🟢 Open | **修复 RTL 文本渲染回归**（v2.1.63 起 VSCode webview 中阿拉伯语/希伯来语显示异常），根因是全局 CSS `direction: ltr` 覆盖 |
| [#29835](https://github.com/anthropics/claude-code/pull/29835) | 🟢 Open | **AGENTS.md 插件支持**——当无 CLAUDE.md 时自动加载 AGENTS.md，解决社区最高票需求 |
| [#29755](https://github.com/anthropics/claude-code/pull/29755) | 🟢 Open | **verified-code-answers 插件**——区分 Claude 的"已验证断言"与"未验证推测"，解决 #29753 的置信度混淆问题 |
| [#29732](https://github.com/anthropics/claude-code/pull/29732) | 🟢 Open | **push-guardrails 插件**——防止向公共仓库意外推送私有代码，直接响应 #29225 的安全事故 |
| [#29757](https://github.com/anthropics/claude-code/pull/29757) | 🟢 Open | **文档修复**：技能开发指南中统一使用小写连字符命名规范（`skill-name` 而非 `Skill Name`） |
| [#29731](https://github.com/anthropics/claude-code/pull/29731) | 🟢 Open | **文档修复**：技能名称示例格式标准化，说明 `name` 字段作为斜杠命令触发器的约束 |
| [#29833](https://github.com/anthropics/claude-code/pull/29833) | 🔴 Closed | AGENTS.md 插件（首版），已被 #29835 替代 |
| [#28062](https://github.com/anthropics/claude-code/pull/28062) | 🔴 Closed | 批量修复社区 PR：hookify 导入路径、Python 3.8 兼容、子代理 MCP 访问等 |
| [#28065](https://github.com/anthropics/claude-code/pull/28065) | 🔴 Closed | 额外小修复批量合并：Write/Edit 字段映射、Python 3.8 typing、子代理工具注入 |
| [#26442](https://github.com/anthropics/claude-code/pull/26442) [#26447](https://github.com/anthropics/claude-code/pull/26447) | 🔴 Closed | Sonnet 1M 上下文窗口消失问题（重复关闭） |

> **贡献趋势**：今日社区贡献**高度聚焦插件生态**——4 个新插件 PR 覆盖文档规范、代码安全、答案可信度、多格式支持，显示开发者对可扩展性的强烈需求。

---

## 功能需求趋势

基于 50 个活跃 Issue 分析，社区关注焦点分布：

```
┌─────────────────────────────────────────┐
│  🔥 Cowork 虚拟机/文件系统稳定性    28%  │
│     (挂载失败、路径限制、VM 启动)         │
├─────────────────────────────────────────┤
│  🛠️ 工具系统可靠性                  22%  │
│     (AskUserQuestion 故障、MCP 访问)     │
├─────────────────────────────────────────┤
│  🔌 MCP/插件生态完善                18%  │
│     (子代理权限、项目级配置、工具注入)     │
├─────────────────────────────────────────┤
│  🎨 IDE/编辑器集成体验                15%  │
│     (VSCode 扩展、远程控制、复制粘贴)      │
├─────────────────────────────────────────┤
│  ⚡ 性能与可靠性                     12%  │
│     (延迟、超时、历史持久化)              │
├─────────────────────────────────────────┤
│  🔐 安全与权限控制                     5%  │
│     (.claudeignore、仓库可见性)           │
└─────────────────────────────────────────┘
```

**新兴趋势**：
- **AGENTS.md 标准化**：社区主动推动与 CLAUDE.md 的等价支持
- **答案可信度标记**：开发者需要区分"执行验证"与"推测回答"
- **预防性安全控制**：代码推送前的仓库可见性检查

---

## 开发者关注点

### 🔴 阻塞性痛点

| 问题 | 影响范围 | 紧急度 |
|:---|:---|:---|
| **AskUserQuestion 完全失效** | 所有依赖交互式确认的技能/自动化 | P0 |
| **Cowork 路径限制** | 跨驱动器/网络存储的企业用户 | P0 |
| **Cowork VM 启动失败** | 虚拟机依赖的工作流 | P1 |

### 🟡 高频摩擦点

1. **MCP 工具访问权限不一致**
   - 内置代理 ✓ vs 自定义子代理 ✗
   - 全局配置 ✓ vs 项目配置 ✗
   - *开发者期望：统一的能力模型*

2. **复制粘贴体验**
   - 终端输出包含视觉对齐用的缩进
   - 需要"纯文本复制"模式或自动清理

3. **错误信息模糊**
   - "API Error: Rate limit" 不区分用量限制 vs 吞吐量限制
   - 导致付费用户困惑和无效排查

### 🟢 积极信号

- **插件开发活跃度激增**：社区从"提需求"转向"直接实现"
- **文档贡献规范化**：命名约定、验证清单等基础设施改进
- **安全事件快速响应**：push-guardrails 插件在 #29225 后 4 天内提出

---

*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-03-02

---

## 1. 今日速览

今日社区焦点集中在**用量计费异常**与**连接稳定性**两大痛点：多位 Plus/Pro 用户报告 Codex 消耗速率突然提升 2-4 倍，同时 WebSocket 连接在 Linux 平台频繁降级至 HTTPS。开发团队正密集推送语音跨平台支持与认证修复相关 PR。

---

## 2. 版本发布

**无新版本发布**（过去24小时无 Releases）

---

## 3. 社区热点 Issues

| 优先级 | Issue | 核心问题 | 社区反应 |
|:---|:---|:---|:---|
| 🔴 **P0** | [#13167](https://github.com/openai/codex/issues/13167) [#13186](https://github.com/openai/codex/issues/13186) | **用量计费异常**：Plus/Pro 用户报告极短任务消耗大量配额，Reddit 广泛讨论 | 4+ 重复报告，用户开始自行追踪 Token 消耗数据 |
| 🔴 **P0** | [#13041](https://github.com/openai/codex/issues/13041) | **WebSocket 1008 Policy 关闭**：Linux 用户连接升级后立即被服务端断开，强制降级 HTTPS | 40 评论，62 👍，影响 Arch/Fedora 等多发行版 |
| 🟡 **P1** | [#10450](https://github.com/openai/codex/issues/10450) | **远程开发支持**：请求 SSH/远程主机支持，对标 VS Code Remote | 217 👍 最高票功能请求，企业用户刚需 |
| 🟡 **P1** | [#13179](https://github.com/openai/codex/issues/13179) | **子代理指数级消耗消息配额**：使用 subagents 时 messages 用量爆炸 | 新报告，需官方澄清计费逻辑 |
| 🟡 **P1** | [#12491](https://github.com/openai/codex/issues/12491) | **MCP 僵尸进程泄漏**：Codex.app 任务完成后未回收子进程，1300+ zombies / 37GB 内存泄漏 | 生产环境严重问题，4 评论待跟进 |
| 🟡 **P1** | [#3141](https://github.com/openai/codex/issues/3141) | **沙箱 GPU 访问**：Linux 沙箱阻断 NVIDIA GPU，影响 ML 工作流 | 28 评论长期未解决，32 👍 |
| 🟢 **P2** | [#10760](https://github.com/openai/codex/issues/10760) | **macOS "Awaiting approval" 卡死**：审批提示无法交互，已关闭 | 59 评论高讨论，67 👍，方案待验证 |
| 🟢 **P2** | [#2952](https://github.com/openai/codex/issues/2952) | **@搜索忽略 .gitignore 文件**：VS Code 插件无法搜索被 Git 忽略的文件 | 23 评论，影响 monorepo 场景 |
| 🟢 **P2** | [#11325](https://github.com/openai/codex/issues/11325) | **App 缺失 /compact 命令**：CLI 有手动压缩，App 无对等功能 | 21 评论，上下文管理刚需 |
| 🟢 **P2** | [#13148](https://github.com/openai/codex/issues/13148) | **Windows EOL 被破坏**：Codex 持续将 CRLF 替换为 LF， despite 明确指令 | 4 评论但情绪强烈，"SERIOUS PITA" |

---

## 4. 重要 PR 进展

| 状态 | PR | 功能/修复 | 技术要点 |
|:---|:---|:---|:---|
| 🆕 **OPEN** | [#13193](https://github.com/openai/codex/pull/13193) | **持久化语音设备 ID** | cpal 设备 ID 持久化，解决每次重启需重新选择麦克风/扬声器 |
| 🆕 **OPEN** | [#13192](https://github.com/openai/codex/pull/13192) | **跨平台 TUI 语音支持** | 升级 cpal 0.17.3，Linux 语音路径与 macOS/Windows 对齐 |
| 🆕 **OPEN** | [#13191](https://github.com/openai/codex/pull/13191) | **Windows 认证存储修复** | 二进制分片存储 OAuth token，解决 Credential Manager 大小限制 |
| 🆕 **OPEN** | [#13177](https://github.com/openai/codex/pull/13177) | **Turn 上下文热刷新** | 采样请求间重载上下文，支持 mid-turn nudges 实时生效 |
| 🆕 **OPEN** | [#13187](https://github.com/openai/codex/pull/13187) | **Plan 模式指令配置** | 新增 `plan_mode_developer_instructions` 配置项 |
| 🔄 **OPEN** | [#13096](https://github.com/openai/codex/pull/13096) | **可恢复式 Rollout 重建** | 支持回溯时恢复历史状态，提升长会话稳定性 |
| ✅ **CLOSED** | [#13181](https://github.com/openai/codex/pull/13181) | **账户状态同步修复** | `account/updated` 新增 plan 类型，修复付费用户升级提示错误 |
| ✅ **CLOSED** | [#12989](https://github.com/openai/codex/pull/12989) | **macOS 自动化权限修复** | 沙箱扩展允许 `launchservicesd` mach lookup，修复应用启动 |
| 🔄 **OPEN** | [#12951](https://github.com/openai/codex/pull/12951) | **OSC-52 剪贴板支持** | `/copy` 命令支持 SSH 远程会话剪贴板集成 |
| 🔄 **OPEN** | [#13137](https://github.com/openai/codex/pull/13137) | **host_executable 集成测试** | 补全 execpolicy 与 zsh-fork 的端到端测试覆盖 |

---

## 5. 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注优先级：

```
1. 计费透明度与可控性 ████████████████████  用量异常、配额消耗可视化、硬上限设置
2. 连接与传输稳定性   ████████████████░░░░  WebSocket 可靠性、降级策略、重连机制
3. 远程/云开发支持     ██████████████░░░░░░  SSH、容器、CI/CD 集成
4. 沙箱能力扩展       ████████████░░░░░░░░  GPU、网络、许可证验证绕过
5. IDE 深度集成       ██████████░░░░░░░░░░  VS Code 插件功能补齐、JetBrains 支持
6. 上下文管理优化     █████████░░░░░░░░░░░  手动 compact、会话恢复、长上下文策略
7. 跨平台一致性       ████████░░░░░░░░░░░░  Windows 特有问题、Linux 功能 parity
```

---

## 6. 开发者关注点

| 痛点类别 | 具体表现 | 出现频率 |
|:---|:---|:---|
| **"黑盒计费"焦虑** | 用量突然飙升、子代理计费逻辑不透明、缺乏实时仪表盘 | 🔥🔥🔥🔥🔥 |
| **Linux 二等公民** | WebSocket 降级、语音功能缺失、GPU 沙箱限制、认证问题 | 🔥🔥🔥🔥🔥 |
| **Windows 边缘场景** | EOL 处理、PowerShell 默认、文件路径、更新流程 | 🔥🔥🔥🔥 |
| **MCP 生产就绪** | 僵尸进程、配置热重载、错误隔离 | 🔥🔥🔥🔥 |
| **上下文失控** | 循环生成、计划遗忘、无法强制压缩 | 🔥🔥🔥 |
| **企业合规** | 审计日志、数据驻留、离线/私有化部署 | 🔥🔥🔥 |

---

*日报基于 GitHub 公开数据生成，不代表 OpenAI 官方立场。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-03-02

## 今日速览

今日社区活跃度极高，**远程智能体（Remote Agents）** 基础设施成为核心焦点，官方团队密集推进 Sprint 1-3 的规划与实现。同时，**用户体验优化** 持续发力，多个 PR 针对终端闪烁、启动延迟、交互细节等痛点进行深度改进。值得关注的是，社区贡献者 `aishop-lab` 单日提交 5 个高质量 PR，专注测试补全与边缘情况修复。

---

## 版本发布

无新版本发布。

---

## 社区热点 Issues

| # | Issue | 重要性 | 社区动态 |
|---|-------|--------|---------|
| [#20142](https://github.com/google-gemini/gemini-cli/issues/20142) | AskUser 开放问题不支持 Ctrl+R 搜索历史 | ⭐⭐⭐⭐⭐ | **8 条评论**居首，开发者高频痛点。用户在回答复杂开放问题时无法快速引用历史输入，严重影响多轮对话效率。 |
| [#18896](https://github.com/google-gemini/gemini-cli/issues/18896) | Windows 滚动时屏幕闪烁/撕裂 | ⭐⭐⭐⭐⭐ | **5 条评论**，长期存在的终端渲染问题，影响 Windows 用户基础体验，标记为 P2 优先级。 |
| [#20302](https://github.com/google-gemini/gemini-cli/issues/20302) | [Epic] 远程智能体 Sprint 1 - 基础架构 | ⭐⭐⭐⭐⭐ | **核心路线图**，Adam Weidman 主导，建立远程智能体的流式传输与核心基础设施，是未来生态扩展的基石。 |
| [#20181](https://github.com/google-gemini/gemini-cli/issues/20181) | AskUser 支持外部编辑器回答开放问题 | ⭐⭐⭐⭐⭐ | 与 #20142 同作者，形成**输入体验改进组合**。长文本输入场景（如 Conductor 轨道描述）急需编辑器支持。 |
| [#19514](https://github.com/google-gemini/gemini-cli/issues/19514) | Plan 模式下 AskUser 工具输出原始标签 | ⭐⭐⭐⭐☆ | 模型输出 `<question>` 标签未渲染，暴露 Plan 模式的 UI 适配缺陷，影响专业用户工作流。 |
| [#18953](https://github.com/google-gemini/gemini-cli/issues/18953) | 复杂 Shell 命令执行速度极慢 | ⭐⭐⭐⭐☆ | 带进度动画的 CLI 工具执行速度比原生慢 100 倍，涉及终端渲染性能瓶颈，需架构级优化。 |
| [#20461](https://github.com/google-gemini/gemini-cli/issues/20461) | 支持 Plan 批注反馈迭代 | ⭐⭐⭐⭐☆ | 与 #17721 编辑器集成联动，推动 Plan 模式从"一次性审批"向"协作式迭代"演进。 |
| [#20550](https://github.com/google-gemini/gemini-cli/issues/20550) | JS 堆内存耗尽 | ⭐⭐⭐⭐☆ | 生产环境问题，长时间运行后 GC 无法回收内存，需紧急关注稳定性。 |
| [#19519](https://github.com/google-gemini/gemini-cli/issues/19519) | 长时 Shell 命令误触发循环检测 | ⭐⭐⭐⭐☆ | **2 个👍**，用户体验干扰问题，大目录 `grep` 等场景频繁误报。 |
| [#20795](https://github.com/google-gemini/gemini-cli/issues/20795) | Vim 模式设置错误修改用户级配置 | ⭐⭐⭐⭐☆ | **今日新建**，设置作用域隔离缺陷，Workspace 修改意外污染 User 配置，影响多项目开发者。 |

---

## 重要 PR 进展

| # | PR | 类型 | 核心改进 |
|---|-----|------|---------|
| [#18963](https://github.com/google-gemini/gemini-cli/pull/18963) | SettingsDialog.tsx 重构：移除 React 反模式 | 🔧 架构 | 消除过度状态同步，提升类型安全与可维护性，延续 #14915 的技术债清理。 |
| [#20643](https://github.com/google-gemini/gemini-cli/pull/20643) | 延迟加载降低启动延迟 | ⚡ 性能 | **P1 优先级**，`--version` 快速路径 + 按需初始化，解决 #10726 长期痛点。 |
| [#20673](https://github.com/google-gemini/gemini-cli/pull/20673) | 稳定页脚架构与 UX 改进 | 🎨 UX | 根治页脚闪烁问题，重构信息层级与安全状态可见性。 |
| [#20774](https://github.com/google-gemini/gemini-cli/pull/20774) | `/directory` 重命名为 `/workspace` | 🏗️ 术语统一 | **v2 版本**，保留别名兼容，全链路术语标准化（CWD + 信任目录）。 |
| [#20745](https://github.com/google-gemini/gemini-cli/pull/20745) | 新增 `/colors` 命令与语义焦点色 | 🎨 主题 | 可视化主题调试工具，焦点/选择色标准化，提升无障碍体验。 |
| [#20786](https://github.com/google-gemini/gemini-cli/pull/20786) | MCP 工具输出紧凑模式 | 🎨 UX | `Ctrl+O` 全局切换，单行摘要替代冗长输出，减少终端 clutter。 |
| [#20793](https://github.com/google-gemini/gemini-cli/pull/20793) | 保留尾部换行符支持 Heredoc | 🐛 修复 | 修复 `.trim()` 破坏多行 Shell 构造的问题，关键边缘情况修复。 |
| [#20788](https://github.com/google-gemini/gemini-cli/pull/20788) | 代理环境变量传递至沙箱进程 | 🐛 修复 | 解决 #19187，企业网络环境下 `HTTP_PROXY` 配置失效问题。 |
| [#20794](https://github.com/google-gemini/gemini-cli/pull/20794) | errorClassification.ts 测试补全 | 🧪 质量 | `aishop-lab` 贡献，8 个测试覆盖 4 条核心路径，提升错误处理可靠性。 |
| [#20717](https://github.com/google-gemini/gemini-cli/pull/20717) | `/mcp remove` 交互式子命令 | ✨ 功能 | 会话内直接移除 MCP 服务器，完善 MCP 生命周期管理。 |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注焦点呈现三大主线：

| 趋势方向 | 热度 | 代表 Issue | 说明 |
|---------|------|-----------|------|
| **智能体生态扩展** | 🔥🔥🔥🔥🔥 | #20302, #20303, #20304, #20195, #20233 | 远程/本地子智能体并行推进，Sprint 化开发，MCP 协议深度集成 |
| **Plan 模式专业化** | 🔥🔥🔥🔥☆ | #20461, #20595, #20344, #19514 | 从基础审批向"协作式规划"演进，需支持批注、迭代、外部编辑器 |
| **终端体验精细化** | 🔥🔥🔥🔥☆ | #20142, #20181, #18896, #20217, #20673 | 输入效率（历史搜索、外部编辑器）、渲染稳定性（闪烁）、性能（启动、内存） |

**新兴信号**：OAuth/MCP 认证体系（#20121）、Token 优化读取策略（#19561 "Tactful Extraction"）、会话恢复提示（#19379）等基础设施能力正在积累。

---

## 开发者关注点

### 🔴 高频痛点
1. **输入体验瓶颈** — AskUser 的历史搜索、编辑器支持、长文本处理形成完整需求簇（#20142 + #20181）
2. **Windows 终端渲染** — 闪烁问题跨多个场景（滚动 #18896、输入路径 #20217），影响专业用户 adoption
3. **性能与稳定性** — 启动延迟（#20643 已解决）、内存泄漏（#20550）、长命令执行慢（#18953）

### 🟡 工作流改进诉求
- **Plan 模式**：需要更像 Code Review 的协作体验，而非一次性审批
- **会话管理**：意外退出后的恢复指引缺失（#19379）
- **配置隔离**：Workspace/User 作用域混淆（#20795）

### 🟢 生态期待
- 远程智能体的开放时间表与第三方接入文档
- MCP 市场的官方运营与质量审核机制

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-03-02

## 今日速览

今日社区活跃度平稳，无新版本发布。核心关注点集中在 **SSH 远程环境兼容性** 和 **任务执行流程优化** 两大方向，同时文件自动补全功能的改进方案已进入 PR 评审阶段。

---

## 社区热点 Issues

> 实际 4 条，全部收录

| # | 标题 | 类型 | 关键信息 | 链接 |
|:---|:---|:---|:---|:---|
| **#1293** | 远程 SSH 服务器无法交流 | 🔴 Bug | 无图形界面、无法修改 DNS 的服务器环境下 CLI 完全不可用，企业服务器场景阻塞性问题 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1293) |
| **#1276** | `@` 文件自动补全遗漏文件 | 🔴 Bug | 深层目录文件无法被补全，与 #1286 PR 直接关联 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1276) |
| **#1292** | Task 子任务执行时卡住 | 🔴 Bug | 多子任务场景下的偶发阻塞，影响复杂工作流稳定性 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1292) |
| **#1287** | 执行任务时无法准备下一任务提示词 | 🟡 Enhancement | 交互阻塞设计限制批量任务效率，工作流连续性痛点 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1287) |

**社区反应观察**：SSH 环境问题 (#1293) 和 Task 卡顿 (#1292) 均为 3 月 1 日新报，尚未获得官方回应，用户情绪偏向焦虑；文件补全问题已有社区贡献者提交修复方案。

---

## 重要 PR 进展

> 实际 4 条，全部收录

| # | 标题 | 状态 | 功能/修复内容 | 链接 |
|:---|:---|:---|:---|:---|
| **#1286** | 优先扫描浅层子目录以优化补全 | 🟢 Open | 针对 #1276 的修复：调整目录扫描优先级，提升深层文件发现率 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/1286) |
| **#1236** | 启用 `trust_env` 支持代理环境变量 | 🟢 Open | 允许 `aiohttp.ClientSession` 读取系统代理配置，解决企业网络环境下的连接问题 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/1236) |
| **#743** | 更新 `uv_build` 版本约束 | 🟢 Open | 构建系统依赖维护，确保与新版 uv 工具链兼容 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/743) |
| **#173** | 版本号升级至 0.50 | 🔴 Closed | 历史 PR 清理关闭，无实际功能变更 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/173) |

**评审动态**：#1286 与 #1236 均为网络/环境适配类改进，对服务器部署场景价值显著，建议关注合并进度。

---

## 功能需求趋势

基于近期 Issues 提炼的社区关注方向：

| 优先级 | 方向 | 具体表现 |
|:---|:---|:---|
| **P0** | **远程/无头环境适配** | SSH 服务器、容器环境、无图形界面场景的连接与认证问题集中爆发 |
| **P1** | **任务执行可靠性** | Task 子任务卡顿、中断恢复、多任务队列管理 |
| **P1** | **交互效率优化** | 异步提示词准备、更灵活的中断与续作机制 |
| **P2** | **文件索引精度** | 大型代码库的补全准确性、忽略规则优化 |

---

## 开发者关注点

### 🔴 高频痛点

1. **企业服务器部署壁垒**
   - 核心矛盾：Kimi CLI 依赖的认证/连接机制与无图形、受限网络环境不兼容
   - 典型场景：SSH 跳板机、CI/CD 流水线、容器化开发环境

2. **复杂任务流稳定性**
   - Task 子任务的偶发卡顿无明确复现规律，调试困难
   - 缺乏任务执行状态的可观测性（日志、进度、超时控制）

### 🟡 体验优化诉求

- **工作流连续性**：当前单线程阻塞式交互限制批量处理效率
- **环境感知能力**：代理、DNS、证书等系统级配置的自动适配

---

*数据来源：github.com/MoonshotAI/kimi-cli | 统计周期：2026-03-01 至 2026-03-02*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-03-02

## 今日速览

今日社区焦点集中在 **Copilot 认证计费异常**（Issue #8030 引发 134 条讨论）和 **内存泄漏导致的系统崩溃**（Issue #13230）两大严重问题。同时，开发者密集提交了多个新 Provider 支持 PR（Databricks、Blackbox AI、Jules）以及运行时工具开关等核心功能改进，显示生态扩展进入加速期。

---

## 版本发布

**无新版本发布**（过去 24 小时无 Releases）

---

## 社区热点 Issues

| # | 标题 | 状态 | 评论 | 核心问题与社区反应 |
|---|------|------|------|------------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | Copilot auth 错误将 agent 请求计为 user 请求，快速消耗 premium 额度 | 🔴 OPEN | **134** | **最高优先级计费事故**。用户报告单次会话 60 个 agent 请求被错误标记为 user 发起，导致额度瞬间耗尽。46 个 👍 显示影响面广，需紧急修复 X-Initiator 头设置逻辑。 |
| [#13230](https://github.com/anomalyco/opencode/issues/13230) | 内存泄漏导致 Linux 内核软死锁、OOM 杀死、系统完全崩溃 | 🔴 OPEN | 10 | **Critical 级稳定性问题**。单进程膨胀至 116GB 虚拟内存/21GB RSS，触发 7/8 CPU 同时软死锁 356 秒。用户称"唯一恢复方式是强制关机"，严重影响生产环境使用。 |
| [#7979](https://github.com/anomalyco/opencode/issues/7979) | Windows 启动极慢 | 🔴 OPEN | 10 | 33 个 👍 的高频痛点。每次启动重复下载 oh-my-opencode 二进制并更新插件，缺乏缓存机制。 |
| [#3523](https://github.com/anomalyco/opencode/issues/3523) | 工具名称超长导致静默崩溃 | 🔴 OPEN | 9 | MCP 工具名超过 64 字符时 TUI 无错误提示直接退出，且后续所有请求失效，调试体验极差。 |
| [#13217](https://github.com/anomalyco/opencode/issues/13217) | Compaction 后任务停止 | 🔴 OPEN | 7 | 长任务场景高频触发，需手动输入"keep going"恢复。与 #11301 形成关联问题群，反映会话状态机缺陷。 |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) | 原生 Claude Code hooks 兼容性（PreToolUse/PostToolUse/Stop） | 🔴 OPEN | 5 | 6 个 👍。企业用户迁移痛点，Claude Code 生态兼容性的关键缺口，影响现有 hooks 资产复用。 |
| [#8676](https://github.com/anomalyco/opencode/issues/8676) | Desktop 版插件 API 401 未授权 | 🔴 OPEN | 5 | Desktop 自动生成的 UUID 密码未正确传递给插件 client，阻断插件生态在 Desktop 场景的使用。 |
| [#7261](https://github.com/anomalyco/opencode/issues/7261) | v1.1.6 内存膨胀未修复 + MCP 孤儿进程 | 🔴 OPEN | 5 | 官方声称修复内存问题后用户仍遇此问题，且 MCP 进程残留，信任度受损。 |
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | 免费模型提示"免费额度已用完" | 🔴 OPEN | 4 | 用户质疑免费模型的真实计费策略，6 小时长会话后触发，存在策略透明度问题。 |
| [#11301](https://github.com/anomalyco/opencode/issues/11301) | Windows 下 compaction 后处理**每次**停止 | 🔴 OPEN | 6 | 与 #13217 同源，但强调"100% 复现"，Windows 平台特异性问题。 |

---

## 重要 PR 进展

| # | 标题 | 状态 | 类型 | 功能说明 |
|---|------|------|------|---------|
| [#15538](https://github.com/anomalyco/opencode/pull/15538) | 修复 OpenAI-compatible schema required 字段规范化 | 🟢 OPEN | Bug fix | 解决 DeepSeek 等网关因 `required: []` 空数组拒绝请求的问题，提升第三方兼容网关稳定性。 |
| [#7984](https://github.com/anomalyco/opencode/pull/7984) | 新增 Databricks Provider 支持 | 🟢 OPEN | Feature | 支持 Databricks Workspace 的按 token 计费 LLM 端点，含 Claude/LLaMA/Mistral 等模型的 SDK 路由。 |
| [#15630](https://github.com/anomalyco/opencode/pull/15630) | 防止 SSE 流客户端断开时的内存泄漏 | 🟢 OPEN | Bug fix | 修复长会话多次重连后的内存累积问题，与 #13230 内存危机直接相关。 |
| [#15631](https://github.com/anomalyco/opencode/pull/15631) | TUI 工具输出添加可点击 URL 和文件路径 | 🟢 OPEN | Feature | 基于 OSC8 超链接协议，支持 iTerm2/Ghostty/Kitty 等终端直接点击跳转，提升交互效率。 |
| [#15629](https://github.com/anomalyco/opencode/pull/15629) | 新增 Blackbox AI Provider | 🟢 OPEN | Feature | 内置 Blackbox AI（OpenAI-compatible），提供 128K-200K 上下文的三种模型选项。 |
| [#15625](https://github.com/anomalyco/opencode/pull/15625) | 添加 Jules (Google) 无状态代理路由 | 🟢 OPEN | Feature | 对接 Google 的编码智能体 Jules REST API，支持 session/activity/source 管理，无流式/chat completions。 |
| [#8963](https://github.com/anomalyco/opencode/pull/8963) | 完整便携模式与环境隔离支持 | 🟢 OPEN | Feature | 新增 `OPENCODE_DATA_DIR/CACHE_DIR/LOG_DIR/STATE_DIR` 等环境变量，满足企业安全合规的完全可配置部署。 |
| [#15624](https://github.com/anomalyco/opencode/pull/15624) | 跨 API/TUI/Web 的运行时工具开关 | 🟢 OPEN | Feature | 动态启用/禁用工具，解决 #15623 #13827，缓解工具过多导致的上下文爆炸问题。 |
| [#15619](https://github.com/anomalyco/opencode/pull/15619) | 修复 cloudflare-ai-gateway 元数据转发 | 🟢 OPEN | Bug fix | 补全 `createAiGateway()` 的 `options.metadata` 透传，修复 #15621 的配置失效问题。 |
| [#14877](https://github.com/anomalyco/opencode/pull/14877) | 修复 getSDK 中 authToken 选项被忽略 | 🟢 OPEN | Bug fix | 解决 provider 配置中 `authToken` 与 `apiKey` 冲突，确保自定义认证优先级正确。 |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注方向呈现以下优先级：

| 趋势方向 | 热度指标 | 典型 Issue |
|---------|---------|-----------|
| **🔥 计费与额度透明** | #8030 (134评论, 46👍) | Copilot 计费错误、免费模型额度策略不明 |
| **🔥 稳定性与内存管理** | #13230, #7261, #7979 | 内存泄漏致系统崩溃、启动慢、孤儿进程 |
| **🚀 多 Provider 生态扩展** | #7984, #15629, #15625, #10232 | Databricks/Blackbox/Jules/Routstr 等新接入 |
| **⚙️ 企业级部署能力** | #8963, #8676, #14544 | 便携模式、Desktop 插件认证、服务端配置持久化 |
| **🎛️ 工具与 Agent 可控性** | #15624, #12472, #13217 | 运行时工具开关、Claude hooks 兼容、Compaction 状态恢复 |
| **🖥️ TUI/IDE 体验优化** | #15631, #4464, #13682 | 可点击链接、亮色模式、SSH 远程授权复制 |

---

## 开发者关注点

### 🔴 阻塞性痛点
1. **计费准确性危机**：#8030 的 Copilot 计费错误直接影响商业用户信任，需立即修复
2. **生产环境稳定性**：内存泄漏（#13230）和 compaction 中断（#13217/#11301）使 OpenCode 无法承担长时任务
3. **Windows 体验落差**：启动慢（#7979）、compaction 必现停止（#11301）、OAuth 闪错（#15626）形成平台特异性问题群

### 🟡 高频改进需求
- **工具生态治理**：工具名长度限制（#3523）、运行时开关（#15624）、MCP 进程生命周期管理
- **配置可移植性**：环境变量全覆盖（#8963）、跨设备

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-03-02

## 今日速览

今日社区聚焦**中文场景稳定性修复**与**认证体验优化**：多个 PR 紧急修复模型输出空格导致的 Skill 调用失败、数字汉字间空格引发文件读取错误等中文用户痛点；同时认证流程重构进入密集开发期，扁平化三选项设计提升付费转化路径清晰度。v0.11.0-nightly 版本持续迭代，为 0.11.1 正式版铺路。

---

## 版本发布

### v0.11.0-nightly.20260301.14df5a57
- **类型**：Nightly 预览版
- **变更日志**：[对比 v0.11.0](https://github.com/QwenLM/qwen-code/compare/v0.11.0...v0.11.0-nightly.20260301.14df5a57)

> 该版本为 0.11.1 正式版的前置预览，包含多项关键修复的预发布验证。

---

## 社区热点 Issues（10 条）

| # | 状态 | 标题 | 重要性分析 | 链接 |
|---|------|------|-----------|------|
| **2032** | 🔴 OPEN | 模型在数字与汉字间强制加空格导致文件读取失败 | **P0 级中文场景阻断性 Bug**：影响含"数字+汉字"命名文件的读取，波及批量中文用户工作流；与 #2025 同属模型输出格式化问题，需系统性修复 | [链接](https://github.com/QwenLM/qwen-code/issues/2032) |
| **2025** | 🔴 OPEN | 调用 Skill 自动加空格导致无限循环 | **高频中文 Skill 故障**：中文命名的 Skill（如"comfyui工作流"）被错误添加空格，引发调用失败→重试→失败的死循环；已有 PR #2027 针对性修复 | [链接](https://github.com/QwenLM/qwen-code/issues/2025) |
| **2034** | 🟡 OPEN | 自定义/禁用"思考中"引用语 | **体验优化类高票需求**：TUI 旋转引用语被用户反馈"过时且干扰"，反映终端 UI 个性化配置缺口 | [链接](https://github.com/QwenLM/qwen-code/issues/2034) |
| **2016** | 🟡 OPEN | 重构 /auth 对话框：将 Coding Plan 提升为顶级选项 | **商业化关键路径**：优化免费用户向付费转化漏斗，与 #1983 形成组合拳；PR #2030 已实现待合入 | [链接](https://github.com/QwenLM/qwen-code/issues/2016) |
| **1983** | 🟡 OPEN | 免费额度耗尽时引导升级 Coding Plan | **用户留存痛点**：当前错误提示为"死胡同"，缺乏明确升级指引；直接影响阿里云百灵 Coding Plan 付费转化 | [链接](https://github.com/QwenLM/qwen-code/issues/1983) |
| **1708** | 🔴 OPEN | 无法使用 hooks | **配置系统长期缺陷**：settings.json 中 hooks 配置不被识别，影响自动化工作流集成；创建近 1 个月无响应，需维护者介入 | [链接](https://github.com/QwenLM/qwen-code/issues/1708) |
| **2033** | 🟢 CLOSED | 无法编辑工作空间外的文件 | **安全策略误伤**：用户期望编辑外部配置文件，被工作空间限制阻断；关闭状态待确认是否为设计预期或需文档说明 | [链接](https://github.com/QwenLM/qwen-code/issues/2033) |

> 注：今日 Issues 总量 7 条，以上为全部值得关注的条目。

---

## 重要 PR 进展（10 条）

| # | 状态 | 标题 | 功能/修复详解 | 链接 |
|---|------|------|-------------|------|
| **2027** | 🟢 OPEN | fix(tools): 修剪 Skill 名称空白字符 | **紧急修复 #2025**：在 `validateToolParams` 中增加 `trim()` 处理，解决模型对中文 Skill 名添加多余空格导致的查找失败；防止无限循环 | [链接](https://github.com/QwenLM/qwen-code/pull/2027) |
| **2030** | 🟢 OPEN | [0.11.1] 优化认证对话框 UX | **商业化体验升级**：将嵌套二级菜单改为扁平三选项（Qwen OAuth/API-KEY/Coding Plan），每项显示"免费/付费""请求限制""可用模型"等关键决策信息；直接响应 #2016 | [链接](https://github.com/QwenLM/qwen-code/pull/2030) |
| **2031** | 🟢 OPEN | feat(security): 引入 VibeGuard 式客户端脱敏 | **企业安全刚需**：请求发送至模型提供商前，将密钥/PII 按配置规则脱敏为 `__VG_<CATEGORY>_<hash>__` 占位符，响应后本地还原；支持关键词/正则/内置规则三类匹配 | [链接](https://github.com/QwenLM/qwen-code/pull/2031) |
| **2029** | 🟢 OPEN | fix(tools): 为 shell 工具添加 bash/sh 别名 | **模型兼容性修复**：解决模型常用 `bash`/`sh` 别名与注册工具名 `run_shell_command` 不匹配导致的"Tool not found"错误；同步迁移遗留工具名 | [链接](https://github.com/QwenLM/qwen-code/pull/2029) |
| **2021** | 🟢 OPEN | [0.11.1] 检测并防护截断的工具调用输出 | **可靠性加固**：当 LLM 输出触及 `max_tokens` 时，工具调用 JSON 可能被截断；DashScope/Qwen 等提供商误报 `finish_reason: "stop"`，导致静默写入不完整代码；新增截断检测与防护机制 | [链接](https://github.com/QwenLM/qwen-code/pull/2021) |
| **1980** | 🟢 OPEN | feat: 实现 Modes Layer 专业代理配置 | **架构级新功能**：新增 `@qwen-code/modes` 包，内置 Architect/Code/Ask/Debug/Review/Orchestrator 6 种模式；支持 `/mode` 斜杠命令切换与 settings.json 自定义模式；实现工具路由与提示词组合器分离 | [链接](https://github.com/QwenLM/qwen-code/pull/1980) |
| **1954** | 🟢 OPEN | Feat: VS Code 辅助侧边栏支持 | **IDE 深度集成**：支持将 Qwen Code 面板置于 VS Code 辅助侧边栏（Secondary Sidebar），优化宽屏工作区布局；与现有侧边栏 Webview 提供商并行运行 | [链接](https://github.com/QwenLM/qwen-code/pull/1954) |
| **2018** | 🟢 OPEN | [0.11.1] 支持 AGENTS.md 作为默认上下文文件 | **生态标准兼容**：除 `QWEN.md` 外新增 `AGENTS.md` 自动识别，无需手动配置即可兼容 [agents.md](https://agents.md/) 标准；降低多代理项目迁移成本 | [链接](https://github.com/QwenLM/qwen-code/pull/2018) |
| **2007** | 🟢 OPEN | fix: 清理终端输出中的控制字符 | **UI 稳定性修复**：修复 Windows 风格换行符（`\r\n`）或独立 `\r` 导致的 Ink-based TUI 错位问题；将 `\r` 替换为 `\n` 保障跨平台一致性 | [链接](https://github.com/QwenLM/qwen-code/pull/2007) |
| **2005** | 🟢 OPEN | feat(i18n): 强化 output-language.md 模板约束力 | **多语言一致性**：将"Prefer responding"软提示改为"You MUST always respond"强制规则，解决多轮对话中 LLM 镜像用户输入语言、忽略设置的问题 | [链接](https://github.com/QwenLM/qwen-code/pull/2005) |

---

## 功能需求趋势

基于今日 Issues 与 PR 分析，社区关注焦点呈现三大方向：

| 趋势方向 | 具体表现 | 优先级 |
|---------|---------|--------|
| **中文场景稳定性** | 数字-汉字空格、Skill 名空格、输出语言一致性等问题集中爆发，反映中文语料微调与后处理逻辑存在系统性缺陷 | 🔴 紧急 |
| **商业化体验优化** | 认证流程重构（#2016/#2030）、免费额度引导升级（#1983）双轨并行，Coding Plan 付费转化成为产品核心 KPI | 🟡 高优 |
| **企业级安全合规** | VibeGuard 式脱敏（#2031）引入，叠加容器环境 DNS 检测（#1817），显示 B 端部署场景需求上升 | 🟡 高优 |
| **IDE 生态深度整合** | VS Code 辅助侧边栏（#1954）、AGENTS.md 标准兼容（#2018），从"可用"向"好用"的体验跃迁 | 🟢 持续 |
| **多模式代理架构** | Modes Layer（#1980）引入专业角色分离，Architect/Orchestrator 等模式预示向复杂项目工作流演进 | 🟢 前瞻 |

---

## 开发者关注点

### 🔥 

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*