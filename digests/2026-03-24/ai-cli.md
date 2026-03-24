# AI CLI 工具社区动态日报 2026-03-24

> 生成时间: 2026-03-24 00:08 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# 2026-03-24 AI CLI 工具生态横向对比分析报告

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**"头部工具稳定性危机与新兴工具功能追赶"**并行的分化格局。Claude Code 和 OpenAI Codex 作为先发者，正承受付费用户因 Token 计费不透明、版本回归问题引发的信任压力；Gemini CLI、Kimi Code、Qwen Code 等后发工具则通过插件系统、多模型支持、IDE 深度集成等差异化能力快速迭代。整体趋势显示，**企业级身份管控、MCP 生态扩展、跨平台稳定性**已成为行业共同攻坚方向，而**计费透明度与开发者可控性**正成为用户选择的核心决策因素。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | 版本发布 | 关键动态 |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 10+ 热点 | 8+ | 无 | v2.1.81 回归集群（worktree 挂起、桌面应用故障） |
| **OpenAI Codex** | 10+ 热点 | 10+ | 2 个 Alpha | Token 消耗争议（#14593 达 204 评论）、Rust 核心重构 |
| **Gemini CLI** | 10 热点 | 10 热点 | 4 个版本 | v0.35.0-preview.3/4/5 补丁链、v0.36.0-nightly 遥测增强 |
| **GitHub Copilot CLI** | 38 条活跃 | 2 条 | 3 个版本 | v1.0.11 系列：MCP 策略强制管控、Monorepo 技能发现 |
| **Kimi Code** | 4 条 | 10 条 | **v1.25.0** | **插件系统正式发布**、子代理架构重构 |
| **OpenCode** | 10 热点 | 10 条 | 无 | Anthropic OAuth 合规危机、Poe 替代方案涌现 |
| **Qwen Code** | 10 热点 | 10 条 | **v0.13.0** + 4 个预览版 | VSCode 发布流程多次失败、IDE 集成深化 |

> **活跃度分层**：Claude Code / OpenAI Codex / Gemini CLI 处于**高活跃-高压力**状态；Kimi Code / Qwen Code 处于**功能追赶-发布密集**期；GitHub Copilot CLI 呈现**版本密集-社区反馈滞后**特征；OpenCode 处于**外部冲击-生态重构**的特殊阶段。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|:---|:---|:---|
| **MCP 生态与工具管控** | Claude Code、Copilot CLI、Kimi Code、Gemini CLI、Qwen Code | Copilot CLI 强制组织策略管控（v1.0.11）；Claude Code MCP OAuth 作用域调整（#37658）；Kimi v1.25.0 正式支持 Tools 插件；Qwen Code 需求动态启停 MCP 服务器（#2617） |
| **计费透明度与 Token 控制** | Claude Code、OpenAI Codex | Claude Code #29579（Max 用户 16% 额度触发限流）、#37917（用量异常激增）；OpenAI Codex #14593（204 评论 Token 燃烧争议）、#14762（$40 额度数小时耗尽） |
| **IDE 深度集成** | Kimi Code、Qwen Code、Gemini CLI | Kimi #1334（JetBrains 长期不可用）；Qwen Code 密集投入 VSCode（Plan Mode、Skills 命令、IME 修复）；Gemini CLI #22584（tmux/终端兼容） |
| **多层级/Monorepo 配置** | Copilot CLI、Claude Code | Copilot CLI v1.0.11-0 全层级技能发现；Claude Code `--worktree` 参数（v2.1.81 回归）；多项目隔离成企业刚需 |
| **子代理/多智能体架构** | Kimi Code、Gemini CLI、Claude Code | Kimi #1552（子代理执行架构重构）；Gemini CLI #23582/#23608（子代理感知 Approval Mode）；Claude Code 社区插件 claude-tunnels（多项目编排） |
| **ARM/跨平台支持** | Claude Code、OpenAI Codex、Qwen Code | Claude Code #30864（Co-Work ARM 支持）；OpenAI Codex #15578（Windows 沙盒 unified exec）；Qwen Code Windows 中文输入/图片粘贴专项修复 |

---

## 4. 差异化定位分析

| 工具 | 核心侧重 | 目标用户 | 技术路线特征 |
|:---|:---|:---|:---|
| **Claude Code** | 企业级安全沙盒、桌面-CLI 一体化 | 中大型企业、安全敏感团队 | TypeScript/Electron 双端架构，**版本耦合风险凸显**；Claude Max 订阅绑定 |
| **OpenAI Codex** | Rust 核心性能、Python SDK 生态 | 性能敏感开发者、AI 原生应用构建者 | **Rust 重写进行中**，强调沙盒安全与流式处理；与 Azure/OpenAI 服务深度集成 |
| **Gemini CLI** | 智能体架构深化、Evals 质量基础设施 | 研究型开发者、质量工程团队 | Google 内部 Evals 文化外溢，**GSoC 项目驱动社区**；TypeScript/Node.js 栈 |
| **GitHub Copilot CLI** | IDE 生态互通、组织级策略管控 | GitHub 生态深度用户、企业合规团队 | 与 VS Code Copilot Chat **技能目录互通**（`~/.agents/skills/`）；微软企业合规优先 |
| **Kimi Code** | 插件系统开放性、子代理编排 | 中文开发者、定制化需求强烈的团队 | **v1.25.0 插件系统双轨制**（Skills+Tools）；Wire 协议自主可控 |
| **OpenCode** | 多 Provider 聚合、移动端拓展 | 多模型切换用户、移动场景开发者 | **Anthropic OAuth 危机倒逼多元化**；Poe/自托管 API key 替代方案；React Native 移动端适配 |
| **Qwen Code** | 阿里云生态集成、IDE 原生体验 | 阿里云用户、中文企业开发者 | **阿里云 Coding Plan 认证**（#2490）；VSCode 插件优先级高于 CLI；百炼模型家族深度优化 |

---

## 5. 社区热度与成熟度

### 社区热度矩阵

```
高社区声量 ╔══════════════════════════════════════════════════════╗
(评论/👍密集)║  Claude Code  │  OpenAI Codex  │  OpenCode*       ║
            ║  #29579: 92评论 │ #14593: 204评论 │ #18267: 137评论  ║
            ║  (计费争议)    │  (Token燃烧)   │  (OAuth危机)     ║
            ╠══════════════════════════════════════════════════════╣
            ║  Gemini CLI   │  GitHub Copilot CLI │  Kimi Code    ║
            ║  #23331: 41评论 │ #33: 36评论(OAuth) │  v1.25.0发布   ║
            ║  (GSoC活跃)   │  (功能落地)        │  (功能驱动)    ║
            ╠══════════════════════════════════════════════════════╣
            ║  Qwen Code                                    ║
            ║  产品定位困惑(#2613)、发布流程失败              ║
            ║  (工程债务期)                                  ║
            ╚══════════════════════════════════════════════════════╝
            低功能迭代速度 ←────────────────────────→ 高功能迭代速度
```

### 成熟度评估

| 阶段 | 工具 | 特征 |
|:---|:---|:---|
| **平台期-信任危机** | Claude Code、OpenAI Codex | 功能完备但稳定性/计费问题引发用户焦虑；版本回归风险高 |
| **快速迭代-功能追赶** | Kimi Code、Qwen Code | 密集发布核心功能（插件系统、IDE 集成）；工程债务可见 |
| **生态重构-外部冲击** | OpenCode | 核心依赖（Anthropic OAuth）被切断，紧急寻找替代路径 |
| **稳定演进-企业深耕** | GitHub Copilot CLI | 版本节奏可控，聚焦组织合规与 IDE 互通；社区反馈响应偏慢 |
| **质量驱动-学术气质** | Gemini CLI | GSoC 项目主导，Evals 基础设施优先于用户功能；长期主义明显 |

---

## 6. 值得关注的趋势信号

### 🔴 行业级风险信号

| 信号 | 影响 | 开发者应对建议 |
|:---|:---|:---|
| **OAuth 依赖单一 Provider 的合规脆弱性** | OpenCode 因 Anthropic 法务要求移除 OAuth，Claude Code 亦有限流争议 | 优先选择支持 **API key 直连、多 Provider 聚合** 的工具；企业部署评估供应商锁定风险 |
| **Token 计费"黑箱化"引发用户信任崩塌** | OpenAI Codex #14593 204 条评论、Claude Code #29579 持续发酵 | 要求工具提供 **实时 Token 计数、硬上限设置、后台任务隔离计费**；建立用量监控告警 |
| **版本迭代速度与稳定性权衡失当** | Claude Code v2.1.81 回归集群、Qwen Code 24 小时内 4 次发布失败 | 生产环境锁定 **LTS 版本或特定 SHA**；建立金丝雀发布流程 |

### 🟡 技术演进方向

| 信号 | 趋势解读 | 行动建议 |
|:---|:---|:---|
| **MCP 从"功能插件"转向"企业安全管控对象"** | Copilot CLI v1.0.11 强制组织 allowlist、Claude Code 调整作用域判定 | 企业安全团队需制定 **MCP 服务器准入清单**；开发者关注工具的组织策略兼容性 |
| **子代理/多智能体从"实验功能"进入"架构核心"** | Kimi Code 子代理执行重构、Gemini CLI 路由 Evals、Claude Code 社区多项目编排插件 | 评估工具的 **Agent 编排能力、会话隔离机制、跨 Agent 状态共享** 设计 |
| **IDE 集成从"附加功能"变为"主战场"** | Qwen Code VSCode 投入、Kimi JetBrains 需求、Gemini CLI tmux 兼容专项 | 优先选择 **与主力 IDE 深度集成** 的工具；关注 LSP、Skills 命令、终端 IME 等细节体验 |

### 🟢 差异化机会窗口

| 信号 | 机会领域 |
|:---|:---|
| **Gemini CLI 的 Evals 基础设施开源化** | 质量工程团队可参与 GSoC 项目，建立 **模型能力基线对比** 能力 |
| **Kimi Code v1.25.0 插件系统早期红利** | 中文开发者生态的 **Skills/Tools 开发** 存在先发优势窗口 |
| **OpenCode 的多 Provider 聚合模式验证** | 若 Poe OAuth 方案成功，将证明 **"模型层抽象+认证层聚合"** 架构的可行性 |

---

> **决策建议摘要**：当前阶段，**计费透明度、版本稳定性、多 Provider 支持** 应作为工具选型的首要评估维度；企业用户重点关注 **组织策略管控与 MCP 安全** 能力；个人开发者可把握 **Kimi/Gemini 生态早期红利**，但需警惕快速迭代中的 API 变动风险。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-03-24）

---

## 1. 热门 Skills 排行（按关注度）

| 排名 | Skill | 功能概述 | 社区热点 | 状态 |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | AI 生成文档的排版质量控制，解决孤字换行、寡段标题、编号错位等通病 | 被赞为"每个 Claude 文档都需要的技能"，切中 AI 生成内容的最后一公里痛点 | 🟡 Open |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | Skill 元质量分析工具，从结构、安全、性能等五维度评估 Skill 质量 | 首个"评审计 Skill 的 Skill"，填补生态质量基础设施空白 | 🟡 Open |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 改进版前端设计 Skill，提升指令可执行性和内部一致性 | 讨论聚焦"如何让 Skill 指令对 Claude 真正 actionable" | 🟡 Open |
| 4 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** / [session-memory](https://github.com/anthropics/skills/pull/629) | 跨会话持久化记忆系统，解决上下文压缩导致的技术事实丢失 | 两个竞争方案同期出现，反映"记忆"是高频刚需 | 🟡 Open |
| 5 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | 集成 SAP 开源表格基础模型，用于企业业务数据预测分析 | 企业级集成案例，展示 Skills 连接专有数据系统的能力 | 🟡 Open |
| 6 | **[ODT](https://github.com/anthropics/skills/pull/486)** | OpenDocument 文本创建、模板填充及 ODT→HTML 解析 | 填补 LibreOffice/开源办公套件生态缺口，与现有 docx Skill 形成互补 | 🟡 Open |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 代码库清理审计，识别孤儿代码、未使用文件、文档缺口 | 10 步系统化工作流，输出 CODEBASE-STATUS.md 作为单一真相源 | 🟡 Open |
| 8 | **[AURELION](https://github.com/anthropics/skills/pull/444)** | 四件套认知框架（kernel/advisor/agent/memory），专业知识管理 | 结构化思维模板 vs. 自由对话的张力引发讨论 | 🟡 Open |

---

## 2. 社区需求趋势（Issues 提炼）

| 方向 | 代表 Issue | 核心诉求 |
|:---|:---|:---|
| **Skill 治理与安全** | [#492](https://github.com/anthropics/skills/issues/492) | 社区 Skill 滥用 `anthropic/` 命名空间造成信任边界漏洞，需官方治理机制 |
| **Skill 开发体验** | [#202](https://github.com/anthropics/skills/issues/202) | `skill-creator` 本身需重构——从"教人类"转向"指令 Claude"，提升 token 效率 |
| **基础设施稳定性** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Skill 丢失、上传失败、删除 500 错误——生产级可靠性待加强 |
| **MCP 协议融合** | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) | Skills 与 MCP 的边界模糊化，期望统一协议暴露 AI 能力 |
| **评估与触发机制** | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` 0% 触发率暴露 Skill 匹配算法的深层问题 |
| **企业/SSO 兼容** | [#532](https://github.com/anthropics/skills/issues/532) | 依赖 `ANTHROPIC_API_KEY` 的工具链对企业 SSO 用户不可用 |

---

## 3. 高潜力待合并 Skills

| Skill | PR | 合并潜力 | 关键障碍 |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | 通用性强，零依赖，解决普遍痛点 |
| **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | ⭐⭐⭐⭐⭐ | 与 shodh-memory 存在方案竞争，需官方选型 |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/issues/452) | ⭐⭐⭐⭐⭐ | 社区健康度 25%→100% 的最快路径，已关联关闭 Issue |
| **Pre-Deployment Validator** | [#740](https://github.com/anthropics/skills/pull/740) | ⭐⭐⭐⭐☆ | 刚提交（3-23），Node.js/Next.js 垂直场景，需观察社区反馈 |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | ⭐⭐⭐⭐☆ | Imagen 3.0/Veo 3.1 集成，多媒体生成能力补全 |
| **x402 BSV micropayment** | [#374](https://github.com/anthropics/skills/pull/374) | ⭐⭐⭐☆☆ | 区块链支付小众场景，需评估与核心工作流的关联度 |

---

## 4. Skills 生态洞察

> **核心诉求：从"功能扩展"转向"可信基础设施"**——社区不再满足于更多垂直 Skill，而是迫切要求 Skill 的质量标准（元分析工具）、安全边界（命名空间治理）、记忆持久化（跨会话状态）和开发体验（creator 重构）成为生态一级公民。

---

*数据截止：2026-03-24 | 来源：github.com/anthropics/skills*

---

# Claude Code 社区动态日报 | 2026-03-24

## 今日速览

今日社区聚焦于 **v2.1.81 版本的多个回归问题**，特别是 `--worktree` 参数导致启动挂起、桌面应用权限绕过失效等关键故障。同时，**插件生态持续活跃**，新增多项目编排、批量任务并行等社区插件，显示开发者正积极扩展 Claude Code 的企业级能力。

---

## 社区热点 Issues

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|---------|
| [#29579](https://github.com/anthropics/claude-code/issues/29579) | **API 速率限制误触发**：Claude Max 订阅用户仅使用 16% 额度却遭遇限流 | 🔴 **极高** — 付费核心体验受损，涉及计费系统信任 | 92 评论，49 👍，持续发酵近一个月，用户要求透明化配额计算逻辑 |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | **多 Connector 账户支持**：同一连接器（如 GitHub）绑定多个账户 | 🟡 **高** — 企业/多身份用户刚需，影响工作流隔离 | 72 评论，93 👍，长期热门需求，涉及 claude.ai/code 架构设计 |
| [#30864](https://github.com/anthropics/claude-code/issues/30864) | **Co-Work ARM 处理器支持** | 🟡 **高** — ARM 服务器/Apple Silicon 云端部署趋势 | 64 评论，76 👍，云原生开发者强烈关注 |
| [#1455](https://github.com/anthropics/claude-code/issues/1455) | **XDG Base Directory 规范支持**：配置目录硬编码为 `~/.claude` | 🟡 **高** — Linux 用户目录整洁度与可移植性 | 52 评论，309 👍，历史最久热门 Issue 之一，涉及破坏性变更 |
| [#11447](https://github.com/anthropics/claude-code/issues/11447) | **Tab 缩进文件编辑失败** | 🟡 **高** — 代码库兼容性，影响旧项目维护 | 41 评论，42 👍，有复现，修复优先级待评估 |
| [#37874](https://github.com/anthropics/claude-code/issues/37874) | **回归：`claude -w <worktree>` 启动挂起** (v2.1.81) | 🔴 **极高** — 多工作流用户核心路径阻断 | 3 评论，已确认回归，降级至 v2.1.80 可恢复 |
| [#37967](https://github.com/anthropics/claude-code/issues/37967) | **桌面应用 1.1.7714 严重故障**：权限绕过失效 + Windows Hyper-V 初始化失败 | 🔴 **极高** — 跨平台远程开发场景崩溃 | 4 评论，涉及安全沙盒与虚拟化堆栈 |
| [#35646](https://github.com/anthropics/claude-code/issues/35646) | **受保护目录提示无覆盖选项** (v2.1.78) — 已关闭 | 🟡 **高** — 自动化脚本 CI/CD 场景受阻 | 16 评论，20 👍，官方已响应但方案待完善 |
| [#36653](https://github.com/anthropics/claude-code/issues/36653) | **桌面应用本地会话崩溃**：OAuth 429 限流 | 🟡 **高** — 桌面端与 CLI 版本耦合问题 | 4 评论，显示更新节奏不一致风险 |
| [#37917](https://github.com/anthropics/claude-code/issues/37917) | **用量异常激增** | 🟡 **高** — 成本敏感用户警报 | 8 评论，9 👍，需官方调查是否为计费或模型调用问题 |

---

## 重要 PR 进展

| # | PR | 类型 | 内容说明 |
|---|-----|------|---------|
| [#37979](https://github.com/anthropics/claude-code/pull/37979) | **hookify: StopFailure Hook 支持** | 功能增强 | 新增 API 错误（速率限制、余额不足等）的钩子响应能力，解决 #31537，提升故障自愈能力 |
| [#36625](https://github.com/anthropics/claude-code/pull/36625) | **修复 Pre/PostToolUse 消息对 Claude 不可见** | Bug 修复 | 关键架构修复：将权限决策消息从仅用户可见改为 Claude 可见，影响工具调用决策质量 |
| [#37800](https://github.com/anthropics/claude-code/pull/37800) | **claude-tunnels 多项目编排插件** | 社区插件 | 企业级功能：通过 Slack/Telegram/Teams 路由任务至隔离 Claude 会话，支持依赖感知分阶段执行 |
| [#37680](https://github.com/anthropics/claude-code/pull/37680) | **parallel-batch-safe 批量任务插件** | 社区插件 | 解决并行 `claude -p` 导致的认证丢失问题，tmux 隔离会话 + 令牌预刷新机制 |
| [#37631](https://github.com/anthropics/claude-code/pull/37631) | **spinner-customization 插件** | 社区插件 | 可视化定制：支持 quirky/plain/minimal/none 四种加载动画风格 |
| [#37648](https://github.com/anthropics/claude-code/pull/37648) | **Skill 开发文档完整 frontmatter 参考** | 文档 | 补全 11 个 frontmatter 字段文档，降低自定义 Skill 开发门槛 |
| [#29943](https://github.com/anthropics/claude-code/pull/29943) | **MCP OAuth redirectUri 热修复** | Bug 修复 | 支持 HTTPS 回调地址，解决企业 IdP 强制 HTTPS 场景下的授权失败 |
| [#37658](https://github.com/anthropics/claude-code/pull/37658) | **移除 Claude.ai MCP 服务器客户端作用域拦截** — 已关闭 | 架构调整 | 将权限控制从客户端前置判断改为服务端权威决策，修复 #21874 |
| [#31501](https://github.com/anthropics/claude-code/pull/31501) | **防止 TodoWrite 覆盖阶段级待办** | Bug 修复 | 修复 `/feature-dev` 工作流跳过 Phase 6-7 的问题，根因是待办列表全量替换 |
| [#37658](https://github.com/anthropics/claude-code/pull/37658) | **MCP 作用域门控移除** | 架构 | 客户端不再预检 `user:mcp_servers` OAuth 作用域，改由服务端判定，提升灵活性 |

---

## 功能需求趋势

基于过去 24 小时 Issues 分析，社区关注焦点集中于：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|---------|
| **企业身份与多账户** | #27302, #29513, #32668 | 多 Connector 账户、Bedrock 后端、Max 计划功能解锁成为规模化部署瓶颈 |
| **ARM/异构计算支持** | #30864 | 云端 ARM 实例成本优势驱动 Co-Work 跨架构需求 |
| **Linux 生态合规** | #1455 | XDG 规范、TTY 设备处理等底层适配反映专业开发者工具链要求 |
| **成本透明与可控** | #29579, #25970, #37917 | 用量计量准确性、速率限制策略成为付费用户信任核心 |
| **桌面-CLI 一致性** | #36653, #37967, #38008 | 版本耦合、插件市场混淆显示桌面应用架构债务 |

---

## 开发者关注点

### 🔴 关键痛点

1. **v2.1.81 回归集群**
   - `--worktree` 启动挂起（#37874, #37965）
   - 桌面应用权限沙盒过度限制（#37967, #37990）
   - 建议：生产环境用户暂缓自动更新，锁定 v2.1.80

2. **OAuth/认证系统不稳定**
   - 令牌频繁过期（#36911）
   - MCP 授权作用域冲突（#7744, #37658）
   - 桌面与 CLI 认证状态不同步

3. **计量与计费透明度**
   - 速率限制与订阅状态脱节（#29579）
   - 用量统计异常（#25970, #37917）

### 🟡 高频需求

| 需求 | 场景 | 当前状态 |
|------|------|---------|
| 多工作区/项目隔离 | 微服务、多仓库企业开发 | 社区插件填补（claude-tunnels） |
| 批量/自动化安全执行 | CI/CD、夜间构建 | 社区插件填补（parallel-batch-safe） |
| 语音交互增强 | 无障碍、快速草稿 | 功能请求阶段（#34305） |
| 自定义视觉反馈 | 品牌一致性、可访问性 | 社区插件实现（spinner-customization） |

---

> 📌 **订阅提示**：本日报基于 GitHub 公开数据生成，关注 [anthropics/claude-code](https://github.com/anthropics/claude-code) 获取实时更新。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-03-24

---

## 1. 今日速览

今日社区核心矛盾集中在**Token 消耗异常**与**稳定性问题**：VS Code 扩展更新后仍被用户报告"烧钱"过快（#14593 已 204 条评论），同时 Windows 沙盒、Azure 流断开、macOS 客户端挂起等多平台稳定性问题持续发酵。开发团队密集推进 Rust 核心改进，包括 Windows 沙盒统一执行运行时支持、认证刷新风暴修复及 Python SDK CI 体系建设。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|:---|:---|:---|
| [rust-v0.117.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.9) | Alpha | 常规迭代版本 |
| [rust-v0.117.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.10) | Alpha | 常规迭代版本 |

> 注：两个 Alpha 版本均为常规发布，未附带详细变更说明。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 关键度 | 社区反应与核心问题 |
|:---|:---|:---|:---|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | VS Code 扩展更新后 Token 消耗仍过快 | 🔴 Open | ⭐⭐⭐⭐⭐ | **204 评论/77 👍**，Business 订阅用户报告 26.311.21342 版本仍存在异常消耗；社区情绪焦虑，要求透明计费机制 |
| [#14762](https://github.com/openai/codex/issues/14762) | 付费额度下降过快 | 🔴 Open | ⭐⭐⭐⭐⭐ | Pro 用户报告 $40 额度数小时内消耗 80%，夜间后台任务进一步扣费；**21 👍** 反映普遍痛点 |
| [#10601](https://github.com/openai/codex/issues/10601) | Windows 沙盒设置错误 | 🔴 Open | ⭐⭐⭐⭐☆ | **32 评论**，CLI 0.95.0 + Windows 10 环境沙盒初始化失败，阻碍 Windows 企业用户采用 |
| [#8865](https://github.com/openai/codex/issues/8865) | Azure 频繁流断开 | 🔴 Open | ⭐⭐⭐⭐☆ | **26 评论**，Azure Microsoft Foundry 用户专用问题，影响企业级部署稳定性 |
| [#13715](https://github.com/openai/codex/issues/13715) | macOS 本地客户端发送提示后挂起 | 🔴 Open | ⭐⭐⭐⭐☆ | **10 评论**，v0.111.0 + GPT-5.4/5.3-codex 组合下复现率高，影响核心生产力场景 |
| [#11427](https://github.com/openai/codex/issues/11427) | Codex App 支持多终端/标签页 | 🔴 Open | ⭐⭐⭐☆☆ | **13 评论/24 👍**，高频功能请求，对比 Copilot/Claude Code 的终端体验差距 |
| [#15060](https://github.com/openai/codex/issues/15060) | 侧边栏仅显示最近 50 个线程 | 🔴 Open | ⭐⭐⭐☆☆ | **5 评论**，历史记录可访问性问题，与 #14751 形成关联反馈 |
| [#15105](https://github.com/openai/codex/issues/15105) | 远程压缩期间 API 错误率高 | 🔴 Open | ⭐⭐⭐⭐☆ | **5 评论/4 👍**，`/compact` 命令触发"high demand"错误，导致 CLI 完全不可用 |
| [#15503](https://github.com/openai/codex/issues/15503) | 正常使用期间 CPU 飙升 | 🔴 Open | ⭐⭐⭐⭐☆ | **3 评论/5 👍**，v26.318.11754 扩展版本每秒毫秒级 debug 输出，Ubuntu + VS Code 环境 |
| [#14601](https://github.com/openai/codex/issues/14601) | 配置污染：分离项目信任级别与 config.toml | 🔴 Open | ⭐⭐⭐☆☆ | **5 评论/10 👍**，开发者体验改进请求，涉及配置管理架构设计 |

---

## 4. 重要 PR 进展

| # | PR | 作者 | 核心内容 | 影响范围 |
|:---|:---|:---|:---|:---|
| [#15530](https://github.com/openai/codex/pull/15530) | 修复认证刷新风暴 | celia-oai | 永久 Token 失败后停止 app-server 重复刷新，补全 #11802 漏洞 | 认证稳定性 |
| [#15578](https://github.com/openai/codex/pull/15578) | Windows 沙盒 unified exec 运行时支持 | iceweasel-oai | 为受限令牌后端和提权运行器后端添加统一执行会话支持 | **Windows 企业用户关键修复** |
| [#15360](https://github.com/openai/codex/pull/15360) | 使用 OsString 构建 PATH 环境变量 | bolinfest | 修复非 UTF-8 PATH 导致的别名注入失败，提升跨平台兼容性 | 底层稳定性 |
| [#15547](https://github.com/openai/codex/pull/15547) | command/exec 背压与批处理 | euroelessar | 添加 `send_server_notification_to_connection_and_wait`，限制 stdout/stderr 流速率 | 高并发场景性能 |
| [#15569](https://github.com/openai/codex/pull/15569) | 优雅处理内联图片请求限制 | fjord-oai | 强制执行 512MiB/1500 张图片上限，超限时分批处理 | 大上下文场景 |
| [#15239](https://github.com/openai/codex/pull/15239) | 添加 Fork 快照模式 | charley-oai | `ForkSnapshotMode` 支持提交快照或中断快照，共享 `<turn_aborted>` 标记 | 对话状态管理 |
| [#15246](https://github.com/openai/codex/pull/15246) | Python SDK PR CI 建设 | shaqayeq-oai | 重构 sdk.yml，添加 lint、mypy、pytest、wheel 冒烟测试 | **Python 生态基础设施** |
| [#15577](https://github.com/openai/codex/pull/15577) | 回滚时裁剪前置上下文更新 | charley-oai | 修剪连续的 developer/contextual-user 更新，防止历史重复 | 内存/上下文优化 |
| [#15519](https://github.com/openai/codex/pull/15519) | MCP 工具默认审批行为修复 | fouad-openai | 无注解工具默认 `destructiveHint=true`，强制走审批/ARC 监控 | 安全合规 |
| [#15548](https://github.com/openai/codex/pull/15548) | 提取 rollout 为独立 crate | aibrahim-oai | 将 rollout recorder、metadata、policy 等移至 `codex-rollout` | 架构模块化 |

---

## 5. 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注方向呈现以下聚类：

| 方向 | 热度 | 典型 Issue | 核心诉求 |
|:---|:---|:---|:---|
| **计费透明度与 Token 控制** | 🔥🔥🔥🔥🔥 | #14593, #14762, #14750 | 实时消耗可视化、硬上限设置、后台任务计费隔离 |
| **Windows 平台成熟度** | 🔥🔥🔥🔥☆ | #10601, #15578 | 沙盒稳定性、统一执行运行时、企业部署支持 |
| **上下文/压缩可靠性** | 🔥🔥🔥🔥☆ | #14860, #15105, #14425, #11641 | `/compact` 命令稳定性、远程压缩超时处理、Spark 模型支持 |
| **IDE 集成体验** | 🔥🔥🔥☆☆ | #6410, #11427, #15503 | 历史记录持久化、多终端支持、CPU 占用优化 |
| **Azure/企业级部署** | 🔥🔥🔥☆☆ | #8865, #9936 | 流连接稳定性、私有云网关兼容性 |
| **配置与可观测性** | 🔥🔥☆☆☆ | #14601, #14339 | 项目级配置隔离、计划执行前的上下文清理选项 |

---

## 6. 开发者关注点

### 🔴 高频痛点

| 问题 | 影响面 | 紧急度 |
|:---|:---|:---|
| **Token 消耗不可控** | 全平台付费用户 | 极高 — 已出现"一夜烧光额度"案例 |
| **流断开/连接不稳定** | Azure、Windows、macOS 用户 | 高 — 直接阻断工作流 |
| **压缩/上下文管理失败** | 长会话重度用户 | 高 — 导致会话不可用或历史丢失 |
| **Windows 沙盒体验差距** | 企业 Windows 用户 | 中高 — 竞品已支持成熟沙盒方案 |

### 🟡 体验改进诉求

- **历史记录可访问性**：20/50 条聊天限制被多次报告（#6410, #15060, #14751）
- **多终端/标签页**：与 Copilot、Claude Code 的功能对标（#11427）
- **配置管理**：项目级信任设置与全局配置分离（#14601）

### 🟢 积极信号

- 团队对 Windows 沙盒投入显著（#15578 为运行时基础，#10601 有望缓解）
- Python SDK 工程化加速（#15246, #15245 建设 CI/制品管理）
- 认证与背压等底层稳定性问题获得针对性修复

---

> 📊 数据来源：github.com/openai/codex | 统计周期：2026-03-23 至 2026-03-24

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-03-24

---

## 1. 今日速览

Google 团队密集发布 **v0.35.0-preview.3/4/5** 三连版本，专注修复补丁合并冲突；同时 **v0.36.0-nightly** 引入 onboarding 遥测与 evals 重试机制。社区层面，GSoC 项目正式开启，多模型 eval 对比工具成为首个外部贡献亮点，子代理模式感知与内存路由设计进入深度开发阶段。

---

## 2. 版本发布

### v0.36.0-nightly.20260323.6055c4707
| 项目 | 内容 |
|:---|:---|
| **核心更新** | 新增 onboarding 遥测数据采集；evals 支持 API 错误自动重试 |
| **代码质量** | 移除 evals 工具限制，增加编译时防护 |
| **贡献者** | @yunaseoul, @gundermanc |
| **链接** | [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-nightly.20260323.6055c4707) |

### v0.35.0-preview.3/4/5（补丁系列）
| 版本 | 说明 |
|:---|:---|
| preview.3 | 机器人自动 cherry-pick 补丁至 preview.2 |
| preview.4 | 空版本（changelog 未提供） |
| preview.5 | 修复 preview.4 的合并冲突（含冲突标记） |
| **链接** | [preview.5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-preview.5) · [preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-preview.3) |

> ⚠️ 预览版通道近期补丁合并频繁，建议生产环境用户等待稳定版。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心看点 | 社区反应 |
|:---|:---|:---|:---|
| **#23331** | [GSoC: Behavioral evals, Quality, and OSS Community](https://github.com/google-gemini/gemini-cli/issues/23331) | **官方 GSoC 项目主页**，定义 2025 夏季开源贡献路线图，聚焦 prompt/tools/evals 质量改进 | 🔥 **41 评论** / 14 👍，活跃度登顶 |
| **#22745** | [AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | 探索用 AST 工具（tilth/glyph）替代正则搜索，减少 token 浪费与误读边界 | EPIC 级调研，4 评论 |
| **#23230** | [Plan mode 退出后未切换模型](https://github.com/google-gemini/gemini-cli/issues/23230) | 计划模式确认后应自动降级至 gemini-3-flash-preview，实际需手动触发 | 用户体验痛点，3 评论 |
| **#22855** | [`/plan` 支持直接传参](https://github.com/google-gemini/gemini-cli/issues/22855) | 当前 `/plan` 进入独立输入框，期望 `/plan <prompt>` 单命令启动 | 效率优化需求，2 👍 |
| **#23604** | [GSoC: 多模型 eval 对比工具](https://github.com/google-gemini/gemini-cli/issues/23604) | 外部贡献者提案：一键对比同一 eval 在不同 Gemini 模型上的表现 | GSoC 首个工具类提案，刚创建 |
| **#23582** | [子代理感知 Approval Mode](https://github.com/google-gemini/gemini-cli/issues/23582) | 子代理缺乏 Plan/Auto-Edit 模式上下文，导致策略冲突与失败循环 | 架构设计问题，刚创建 |
| **#23571** | [模型随机生成临时脚本污染工作区](https://github.com/google-gemini/gemini-cli/issues/23571) | 限制 shell 执行后，模型在多处目录生成编辑脚本，清理成本高 | 工作流干扰问题，刚创建 |
| **#23320** | [SDD Phase 3: Tasks 集成](https://github.com/google-gemini/gemini-cli/issues/23320) | 用 `TrackerService` DAG 替代 Markdown checkbox，实现持久化任务追踪 | 核心功能演进，1 评论 |
| **#22819** | [内存路由：全局 vs 项目级](https://github.com/google-gemini/gemini-cli/issues/22819) | 定义记忆存储边界：`~/.gemini/`（用户偏好）vs `.gemini/`（代码库特定） | 个性化基础设施，1 👍 |
| **#22809** | [优化主代理 prompt 触发记忆写入](https://github.com/google-gemini/gemini-cli/issues/22809) | 当前代理缺乏"何时调用记忆工具"的指导，需明确偏好捕获与纠错场景 | 提示工程优化，1 👍 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 关键内容 | 状态 |
|:---|:---|:---|:---|:---|
| **#23611** | [refactor(core): remove redundant casts](https://github.com/google-gemini/gemini-cli/pull/23611) | 代码质量 | 清理 `snippets.ts` 冗余类型转换，新增 eval 防止回归 | 🟢 Open |
| **#23601** | [feat(cli): Open Plugin manifest 标准支持](https://github.com/google-gemini/gemini-cli/pull/23601) | 生态扩展 | 统一 `gemini-extension.json` 与 `plugin.json`，支持 Open Plugin 生态接入 | 🟢 Open |
| **#23610** | [feat(cli): Open Plugin skill 发现与命名空间](https://github.com/google-gemini/gemini-cli/pull/23610) | 生态扩展 | 约定式 skill 发现，自动前缀 `plugin-name:skill-name` 隔离冲突 | 🟢 Open |
| **#23272** | [feat(evals): subagent routing 行为评估](https://github.com/google-gemini/gemini-cli/pull/23272) | 测试基建 | 验证专家路由 vs 通用代理的决策质量，无需显式指令即可匹配领域专家 | 🟢 Open |
| **#23281** | [fix(telemetry): 内存泄漏补丁 + 隐私加固](https://github.com/google-gemini/gemini-cli/pull/23281) | 性能/安全 | **关键修复**：V8 闭包泄漏导致 ~1.7GB 内存占用，OOM 风险；同步修复 `logPrompts` 隐私泄露 | 🟢 Open |
| **#22584** | [fix(cli): 稳定复制模式防止闪烁](https://github.com/google-gemini/gemini-cli/pull/22584) | 交互体验 | 修复 macOS/Windows 全屏模式下选中文本时的光标重置与闪烁（P1 优先级） | 🟢 Open |
| **#23326** | [feat(evals): 500 错误重试与可靠性日志](https://github.com/google-gemini/gemini-cli/pull/23326) | 可靠性 | 3 次指数退避重试，新增开发者摩擦指标采集，含 Windows 环境变量修复 | 🟢 Open |
| **#23608** | [fix(core): 子代理感知 Approval Mode](https://github.com/google-gemini/gemini-cli/pull/23608) | 架构修复 | 注入 Plan Mode 上下文，阻断子代理在受限模式下的无效尝试，解决失败循环 | 🟢 Open |
| **#23607** | [feat(scripts): 多模型 eval 对比工具](https://github.com/google-gemini/gemini-cli/pull/23607) | GSoC 贡献 | 本地一键对比多模型 eval 结果，替代"推送-等待 CI"流程 | 🟢 Open |
| **#22067** | [fix(cli): tmux 安全 thinking 指示器](https://github.com/google-gemini/gemini-cli/pull/22067) | 终端兼容 | 修复 tmux 分屏时 spinner 重绘干扰邻 pane 鼠标选区问题 | 🟢 Open |

---

## 5. 功能需求趋势

从 50 条活跃 Issue 提炼的四大方向：

| 趋势 | 具体表现 | 代表 Issue |
|:---|:---|:---|
| **🧠 智能体架构深化** | Subagent 模式感知、任务追踪 DAG 化、记忆路由分层 | #23582, #23320, #22819 |
| **🔍 代码理解升级** | AST 感知工具替代文本搜索，精准读取方法边界 | #22745, #22746 |
| **⚡ 开发者效率** | `/plan` 直接传参、模型自动切换、eval 本地快速对比 | #22855, #23230, #23604 |
| **🛡️ 质量与可靠性** | Evals 自动化（GSoC 核心）、500 错误重试、内存泄漏修复 | #23331, #23326, #23281 |

> GSoC 项目将 **behavioral evals** 确立为质量基础设施的核心，预示社区将从"功能开发"转向"质量度量驱动"。

---

## 6. 开发者关注点

| 痛点/需求 | 典型反馈 | 进展状态 |
|:---|:---|:---|
| **模式切换断裂** | Plan 模式退出后模型未降级，需手动干预 | #23230 待修复 |
| **工作区污染** | 临时脚本散落各处，git 清理成本高 | #23571 刚上报 |
| **tmux/终端兼容** | 全屏模式闪烁、分屏干扰、复制模式不稳定 | #22067, #22584 处理中 |
| **eval 反馈闭环** | 希望 PR 阶段即获知 prompt 修改的模型影响，而非等待 CI | #23169 提案中 |
| **Windows 体验差距** | nvm 安装指引缺失、环境变量传播问题 | #23605 已补充文档，#23326 修复测试 |

---

*日报生成时间：2026-03-24 | 数据来源：google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-03-24

## 今日速览

GitHub Copilot CLI 在 24 小时内密集发布三个版本（v1.0.11 系列），重点强化 **MCP 服务器策略管控**、**Monorepo 技能发现** 与 **会话管理** 能力。社区同步涌现 38 条活跃 Issue，MCP 配置加载异常与组织策略误报成为开发者最集中的痛点反馈。

---

## 版本发布

### v1.0.11 系列（2026-03-23）

| 版本 | 核心更新 |
|:---|:---|
| **v1.0.11** | • 模型选择器正确显示模型名称<br>• **组织策略强制管控第三方 MCP 服务器**（allowlist 机制）<br>• 新增 `~/.agents/skills/` 个人技能目录 |
| **v1.0.11-1** | • **`/clear` 彻底放弃当前会话**，`/new` 后台保留旧会话启动新对话<br>• 修复多扩展 hooks 覆盖问题，改为合并机制 |
| **v1.0.11-0** | • **全层级技能发现**：从工作目录到 Git 根目录逐层扫描，完整支持 Monorepo<br>• 启动时显示已加载 hooks 数量<br>• 后台 Agent 进度展示优化 |

🔗 [Releases 页面](https://github.com/github/copilot-cli/releases)

---

## 社区热点 Issues

| # | 状态 | 标题 | 评论 | 👍 | 关键价值 |
|:---|:---|:---|:---:|:---:|:---|
| [#33](https://github.com/github/copilot-cli/issues/33) | 🟢 CLOSED | **支持 OAuth HTTP MCP 服务器** | 36 | 107 | **高票功能落地**：Figma、Atlassian 等远程 MCP 服务器正式支持，打通企业设计/项目管理工具链 |
| [#640](https://github.com/github/copilot-cli/issues/640) | 🔴 OPEN | 无效 Session ID 错误：`read_sql_files` | 23 | 9 | **稳定性痛点**：Gemini 3 Preview 用户高频遭遇，阻塞 SQL 文件读取工作流 |
| [#2232](https://github.com/github/copilot-cli/issues/2232) | 🔴 OPEN | **v1.0.11-1 无法加载 `.mcp.json`** | 6 | 8 | **版本回归**：新版本的 Monorepo 发现逻辑疑似破坏根目录 MCP 配置加载 |
| [#1707](https://github.com/github/copilot-cli/issues/1707) | 🟢 CLOSED | 第三方 MCP 服务器被错误禁用 | 5 | 0 | 组织策略误报典型案例，v1.0.11 的策略强制机制可能加剧此类问题 |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | 🔴 OPEN | **组织注册表 MCP 服务器消失** | 0 | 0 | v1.0.11 新策略引擎的**误报警告**，与 #1707 形成模式，需紧急关注 |
| [#2142](https://github.com/github/copilot-cli/issues/2142) | 🟢 CLOSED | `onSessionStart` hook 忽略 `additionalContext` | 6 | 0 | SDK 文档与实现不一致，扩展开发者集成受阻 |
| [#2076](https://github.com/github/copilot-cli/issues/2076) | 🟢 CLOSED | 扩展 hooks 覆盖 `hooks.json` | 2 | 0 | v1.0.11-1 已修复：多扩展 hooks 现可合并而非覆盖 |
| [#2230](https://github.com/github/copilot-cli/issues/2230) | 🟢 CLOSED | 添加 `~/.agents/skills/` 默认技能目录 | 0 | 0 | **VS Code 扩展生态互通**：GHCP4A 技能无需额外配置即可在 CLI 使用 |
| [#2235](https://github.com/github/copilot-cli/issues/2235) | 🔴 OPEN | **MCP 配置文件（Profile）支持** | 0 | 0 | 前瞻需求：多项目场景下 MCP 服务器分组管理，避免全部加载 |
| [#1585](https://github.com/github/copilot-cli/issues/1585) | 🔴 OPEN | macOS Cmd+C 复制失效 | 5 | 6 | 体验退化：`--experimental` 默认启用 alt-screen 模式的副作用 |

---

## 重要 PR 进展

| # | 状态 | 标题 | 功能价值 |
|:---|:---|:---|:---|
| [#1253](https://github.com/github/copilot-cli/pull/1253) | 🟢 CLOSED | 实验模式文档补全 | 正式文档化 `--experimental` 标志与 `/experimental` 命令，Autopilot 模式首次公开说明 |
| [#959](https://github.com/github/copilot-cli/pull/959) | 🟢 CLOSED | Ubuntu/Debian apt 安装支持 | Linux 发行版官方包管理渠道打通，降低企业部署门槛 |

> 注：过去 24 小时仅 2 条 PR 更新，核心工程活动集中于 Release 迭代而非社区贡献。

---

## 功能需求趋势

基于 38 条活跃 Issue 的聚类分析：

```
┌─────────────────────────────────────────┐
│  🔧 MCP 生态管控（32%）                  │
│     • 组织策略强制/误报问题              │
│     • OAuth 远程服务器支持 ✓ 已解决      │
│     • 配置文件分层/Profile 管理           │
├─────────────────────────────────────────┤
│  🏗️ Monorepo/多层级配置（21%）           │
│     • 技能/MCP/指令的目录级联发现 ✓ 1.0.11-0 │
│     • 根目录配置加载回归 🔥 新问题        │
├─────────────────────────────────────────┤
│  🔌 IDE 集成与工具链（16%）              │
│     • /ide 命令 VS Code 连接失败         │
│     • 子 Agent 工具调用可见性            │
├─────────────────────────────────────────┤
│  ⚡ 交互体验与稳定性（18%）               │
│     • 终端复制/选择/滚动异常             │
│     • 消息队列取消机制                   │
│     • Session ID 管理混乱                │
├─────────────────────────────────────────┤
│  🧩 扩展与 Hook 系统（13%）              │
│     • Hooks 合并机制 ✓ 1.0.11-1 修复     │
│     • Session ID 注入 Hook 输入          │
└─────────────────────────────────────────┘
```

---

## 开发者关注点

### 🔥 紧急痛点

| 问题 | 影响范围 | 建议跟进 |
|:---|:---|:---|
| **v1.0.11-1 MCP 配置加载失败** (#2232) | 所有使用 `.mcp.json` 的 Monorepo 用户 | 检查是否因层级扫描逻辑导致根目录配置被覆盖 |
| **组织策略误报** (#2236, #1707) | 企业用户 | 验证组织 allowlist 与实际策略的同步状态 |
| **无效 Session ID** (#640) | Gemini 3 Preview 用户 | 临时切换模型或回退版本 |

### 📈 高频需求

1. **MCP Profile 管理** — 多项目场景下避免 20+ 服务器全部加载的性能与权限混乱
2. **子 Agent 可观测性** — 对标 VS Code Copilot Chat 的工具调用详情展示
3. **终端原生交互修复** — macOS 复制、滚动、单词删除等基础编辑体验
4. **模型透明度** — 官方 `copilot --list-models` 命令缺失，开发者无法获知可用模型与计费倍率

### 💡 生态信号

- **VS Code ↔ CLI 技能互通** 已成官方方向（`~/.agents/skills/` 目录统一）
- **组织级策略管控** 从"可配置"转向"强制 enforce"，企业合规需求优先级提升
- **OAuth MCP** 正式支持，预示远程/托管 MCP 服务器将成为企业集成主流

---

*日报生成时间：2026-03-24 | 数据来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-03-24

## 今日速览

Kimi Code CLI 今日发布 **v1.25.0** 重大更新，核心亮点是引入 **插件系统（Skills + Tools）**，支持多插件仓库和凭证注入。同时社区活跃度高，过去24小时合并 6 个 PR，包括子代理执行架构重构和 Web UI 协议适配。

---

## 版本发布

### v1.25.0（2026-03-23）

| 类别 | 更新内容 |
|:---|:---|
| **🚀 新功能** | **插件系统（Skills + Tools）**：支持 Skills 和 Tools 双类型插件，多插件仓库管理，OAuth/环境变量凭证注入 |
| **🛠️ 改进** | 终端提示显示 Git 分支和状态；新增 `/loop` 命令支持定时循环任务 |
| **🐛 修复** | Web 端工具执行状态同步修复；键盘原始模式 SIGTSTP 信号处理 |

📎 [Release 详情](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.25.0) | [版本升级 PR #1556](https://github.com/MoonshotAI/kimi-cli/pull/1556)

---

## 社区热点 Issues

> 注：过去24小时实际更新 Issue 共 4 条，全部列出

| # | 状态 | 标题 | 关键分析 |
|:---|:---|:---|:---|
| [#1548](https://github.com/MoonshotAI/kimi-cli/issues/1548) | 🔴 OPEN | 近期更新后模型性能下降 | **高优先级反馈**：用户报告 `kimi-for-coding` 模型在 v1.24.0 后响应质量下滑，需官方关注是否为模型端或客户端问题 |
| [#1550](https://github.com/MoonshotAI/kimi-cli/issues/1550) | 🔴 OPEN | 请求添加状态栏信息 | **体验优化需求**：用户希望终端显示 token 消耗、当前目录等实时状态，与 Claude Code 等竞品对齐 |
| [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334) | 🔴 OPEN | JetBrains IDE 集成不可用 | **IDE 生态痛点**：长期未解决的 IDE 插件兼容问题，影响专业开发者工作流 |
| [#1382](https://github.com/MoonshotAI/kimi-cli/issues/1382) | ✅ CLOSED | 手机连接器需求 | 移动端远程控制场景，已关闭但反映用户对跨设备协作的强烈需求 |

---

## 重要 PR 进展

| # | 状态 | 标题 | 技术价值 |
|:---|:---|:---|:---|
| [#1503](https://github.com/MoonshotAI/kimi-cli/pull/1503) | ✅ 已合并 | **插件系统核心实现** | 架构级更新：定义 Skills（工作流）+ Tools（工具）双插件类型，支持 MCP 协议兼容，为生态扩展奠基 |
| [#1552](https://github.com/MoonshotAI/kimi-cli/pull/1552) | ✅ 已合并 | **子代理执行架构重构** | 统一前后台子代理实例，支持会话级恢复；引入 Wire 1.6 协议，为复杂多代理任务提供基础设施 |
| [#1551](https://github.com/MoonshotAI/kimi-cli/pull/1551) | ✅ 已合并 | `/loop` 定时任务命令 | 对标 Claude Code 的 cron 功能，实现周期性任务调度，回应 #1309 长期需求 |
| [#1555](https://github.com/MoonshotAI/kimi-cli/pull/1555) | ✅ 已合并 | Web UI 适配 Wire 1.6 | 前端协议对齐，支持子代理审批和追踪可视化 |
| [#1554](https://github.com/MoonshotAI/kimi-cli/pull/1554) | ✅ 已合并 | 插件系统完整文档 | 开发者体验关键：中英双语文档，降低插件开发门槛 |
| [#1549](https://github.com/MoonshotAI/kimi-cli/pull/1549) | 🟡 OPEN | 可配置上下文压缩模型 | 性能优化：允许独立设置压缩模型，降低长会话成本 |
| [#1545](https://github.com/MoonshotAI/kimi-cli/pull/1545) | 🟡 OPEN | 修复 Ctrl+Z 信号处理 | 终端体验：解决 #38 历史遗留问题，修复交互模式中断异常 |
| [#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400) | 🟡 OPEN | ACP 0.8 终端 API 迁移 | 协议升级：替换废弃的 `TerminalHandle`，适配最新 ACP 标准 |
| [#1553](https://github.com/MoonshotAI/kimi-cli/pull/1553) | ✅ 已合并 | 修复关闭时字典迭代异常 | 稳定性：解决并发场景下的 `RuntimeError` 崩溃 |
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) | 🟡 OPEN | Ruff 0.15.0 升级 | 代码质量工具链维护 |

---

## 功能需求趋势

基于近期 Issues 分析，社区关注焦点呈现以下梯度：

```
第一梯队（高频刚需）
├── IDE 深度集成（JetBrains/VS Code）—— 工作流嵌入需求
├── 性能与响应质量稳定性 —— 生产环境可用性
└── 终端信息可视化（状态栏/token 消耗）—— 透明度需求

第二梯队（体验增强）
├── 移动端/跨设备控制 —— 灵活办公场景
├── 上下文压缩与长会话成本优化 —— 大规模使用经济性
└── 定时任务与自动化 —— v1.25.0 已部分解决

第三梯队（生态扩展）
└── 插件市场与第三方工具集成 —— v1.25.0 插件系统已奠基
```

---

## 开发者关注点

| 痛点类别 | 具体表现 | 社区声音 |
|:---|:---|:---|
| **🔴 稳定性疑虑** | v1.24.0+ 后模型输出质量波动 | "Performance drop since recent update" — 直接影响付费用户信任 |
| **🟡 IDE 碎片化** | JetBrains 插件长期不可用，VS Code 体验待完善 | 专业开发者被迫在终端与 IDE 间切换，打断心流 |
| **🟡 可观测性不足** | 缺乏 token 消耗、API 调用成本实时反馈 | 企业/个人用户难以预估和控制开支 |
| **🟢 生态开放性** | v1.25.0 插件系统获期待，但文档和示例需完善 | 社区渴望 MCP 兼容的第三方工具接入指南 |

---

*日报基于 GitHub 公开数据生成，关注 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) 获取最新动态*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-03-24

---

## 今日速览

Anthropic OAuth 认证危机持续发酵，过去 24 小时内多个相关 Issue 被密集关闭，官方疑似应法律要求移除 Claude Pro/Max 的 OAuth 登录方式（#18186）。同时社区涌现大量替代方案 PR，包括 Poe OAuth 集成（#18477）和移动端触控优化（#18767），显示生态正在快速适应变化。

---

## 版本发布

今日无新版本发布。

---

## 社区热点 Issues

| # | 标题 | 状态 | 关键要点 |
|---|------|------|---------|
| [#18267](https://github.com/anomalyco/opencode/issues/18267) | Claude code OAuth 失效（429 错误） | 🔴 CLOSED | **核心事件**：OAuth 认证完全中断，137 条评论为近期最高。用户报告"token 刷新失败"，最终与 #18362 合并处理。反映 Anthropic 侧策略变更的连锁反应。 |
| [#18362](https://github.com/anomalyco/opencode/issues/18362) | Anthropic OAuth callback 失败（Windows） | 🔴 CLOSED | 47 评论，多版本复现（1.1.37-1.2.27）。错误码 `ProviderAuthOauthCallbackFailed`，确认为 Anthropic 授权码验证策略变更所致。 |
| [#18315](https://github.com/anomalyco/opencode/issues/18315) | Claude Pro/Max 返回 Invalid token | 🟡 OPEN | 22 评论，28 👍。用户尝试重新授权后遭遇新错误，显示官方修复后仍存在边缘 case。 |
| [#18811](https://github.com/anomalyco/opencode/issues/18811) | 为何移除 API key 创建和 Claude Max 登录？ | 🔴 CLOSED | 用户质疑官方移除"即时创建 API key"功能——该功能本可绕过 OAuth 限制。关闭速度快，疑似合规压力下的快速响应。 |
| [#18827](https://github.com/anomalyco/opencode/issues/18827) | 如何登录 Claude Max？ | 🔴 CLOSED | 2 评论即关闭，用户明确表达"不愿按 token 付费"的诉求，代表大量订阅用户心态。 |
| [#17318](https://github.com/anomalyco/opencode/issues/17318) | SSE read timed out 错误 | 🔴 CLOSED | 46 评论，文件写入时 SSE 超时。与 #18267 同期高活跃，可能为同一基础设施压力所致。 |
| [#266](https://github.com/anomalyco/opencode/issues/266) | Gemini edit tool 匹配失败 | 🟡 OPEN | 34 评论，长期悬案。`oldString not found` 错误频发，社区建议 whitespace 归一化方案待评估。 |
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | Opus 4.6 不支持 assistant message prefill | 🟡 OPEN | 28 评论，GitHub Copilot 集成场景下的模型兼容性问题，影响对话连续性。 |
| [#18794](https://github.com/anomalyco/opencode/issues/18794) | `/compact` 导致 agent 意外继续 | 🟡 OPEN | 3 评论，上下文压缩后的行为失控问题，长期会话场景的关键痛点。 |
| [#18843](https://github.com/anomalyco/opencode/issues/18843) | OpenAI Unauthorized 错误 | 🟡 OPEN | 3 评论，Plus 订阅用户遭遇 401，API 与订阅权限边界模糊问题浮现。 |

---

## 重要 PR 进展

| # | 标题 | 状态 | 技术要点 |
|---|------|------|---------|
| [#18186](https://github.com/anomalyco/opencode/pull/18186) | Anthropic 法律合规：移除相关引用 | 🔴 CLOSED | **关键变更**：删除 `anthropic-20250930.txt` prompt、provider hints、`opencode-anthropic-auth` 插件及枚举值。标注 `[Vouched]` 表明经法务审核。 |
| [#18477](https://github.com/anomalyco/opencode/pull/18477) | 新增 Poe OAuth 认证插件 | 🟡 OPEN | 替代方案：支持浏览器 OAuth + API key 双模式，直接回应 #18811 移除的功能缺口。 |
| [#18852](https://github.com/anomalyco/opencode/pull/18852) | 修复外部编辑权限提示路径 | 🟡 OPEN | 规范化 `edit`/`write`/`apply_patch` 的权限提示：工作区内相对路径、外部绝对路径，含回归测试。 |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | 移动端触控优化 | 🟡 OPEN | 新增触摸手势、虚拟键盘适配、响应式布局，拓展使用场景至平板/手机。 |
| [#18798](https://github.com/anomalyco/opencode/pull/18798) | 恢复 Effect 子进程的 cross-spawn 行为 | 🟡 OPEN | Windows 兼容性修复，解决命令解析和 shell 行为回归问题。 |
| [#18842](https://github.com/anomalyco/opencode/pull/18842) | 新增自动审查流程与模型偏好 | 🔴 CLOSED | 可配置默认模型/审查模型、自动审查开关，任务完成后自动排队审查跟进。 |
| [#18849](https://github.com/anomalyco/opencode/pull/18849) | 升级 gitlab-ai-provider 至 5.3.1 | 🟡 OPEN | 支持 GPT-5.4/GPT-5.4 Mini/GPT-5.4 Nano 代理模型，跟进 OpenAI 最新模型家族。 |
| [#18845](https://github.com/anomalyco/opencode/pull/18845) | 基于复杂度的模型路由插件钩子 | 🟡 OPEN | 允许插件根据任务复杂度动态选择模型，智能化成本与性能平衡。 |
| [#18280](https://github.com/anomalyco/opencode/pull/18280) | 插件系统健壮性改进 | 🟡 OPEN | 修复 `Agent.get()`/`Command.get()` 返回 `undefined` 导致的崩溃、异步错误处理、两阶段初始化等 5 处隐患。 |
| [#17236](https://github.com/anomalyco/opencode/pull/17236) | WordPress 项目自动启用 stubs | 🟡 OPEN | 检测 `wp-load.php` 后自动注入 WordPress 函数 stubs，解决 Intelephense 误报阻塞 agent 编辑的问题。 |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注焦点呈现三大方向：

| 趋势 | 证据 | 紧迫度 |
|------|------|--------|
| **认证体系重构** | 7 条 OAuth 相关 Issue 占今日热榜主导，Anthropic 合规事件倒逼替代方案（Poe、API key 直连） | 🔴 紧急 |
| **模型生态扩展** | GPT-5.4 支持（#18850）、GitLab Duo DAP 工作流（#15577）、Gemini 工具修复（#266）、Opus 4.6 兼容（#13768） | 🟡 高 |
| **开发者体验优化** | 移动端适配（#18767）、长会话稳定性（#18794, #17318）、TUI 渲染修复（#13854, #13239） | 🟡 高 |

---

## 开发者关注点

### 🔥 即时痛点
1. **认证断层**：Claude Pro/Max 用户被迫转向 API key 计费模式，成本结构突变引发强烈反弹
2. **Windows 稳定性**：字符乱码（#8715）、路径处理（#18852）、子进程行为（#18798）持续困扰 Windows 用户群
3. **工具执行可靠性**：`Tool execution aborted`（#18757）、SSE 超时（#17318）中断开发流

### 📊 高频诉求
- **透明的模型降级策略**：当首选模型不可用时自动切换
- **会话生命周期可观测性**：#3815 反映的"idle 事件误报"问题需确定性状态机
- **IDE 深度集成**：LSP 场景扩展（WordPress #17236、更广泛的框架 stubs）

### 💡 新兴机会
Poe OAuth 插件（#18477）的合并将验证"第三方认证聚合"模式，可能开启更多 provider 的即插即用支持。

---

*数据来源：github.com/anomalyco/opencode | 生成时间：2026-03-24*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-03-24

---

## 1. 今日速览

**v0.13.0 正式版发布**，带来系统提示词自定义优化与 OpenRouter 流式响应修复。同时 VSCode 插件发布流程出现多次失败，社区正积极排查 CI/CD 稳定性问题。IDE 集成与 MCP 生态扩展成为近期开发重点。

---

## 2. 版本发布

### v0.13.0 正式版 & 多个预览版
| 版本 | 类型 | 核心更新 |
|:---|:---|:---|
| [v0.13.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0) | 稳定版 | 系统提示词自定义优化、OpenRouter 重复 finish_reason 修复 |
| [v0.13.0-preview.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-preview.7) ~ [preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-preview.2) | 预览版 | 同上 |
| [v0.13.0-nightly.20260323](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-nightly.20260323.38caa0b21) |  nightly | 同上 |

**关键修复**：`@simon100500` 贡献的 [PR #2403](https://github.com/QwenLM/qwen-code/pull/2403) 解决了 OpenRouter 返回重复 `finish_reason` chunks 导致的管道处理问题。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 重要性 | 社区反应 |
|:---|:---|:---|:---|:---|
| [#2040](https://github.com/QwenLM/qwen-code/issues/2040) | 支持项目级 Insight（当前为机器级） | 🔵 OPEN | ⭐⭐⭐⭐⭐ | 17 评论，长期需求。多项目管理场景的核心痛点，作者 `wenshao` 亲自提出 |
| [#2603](https://github.com/QwenLM/qwen-code/issues/2603) | 允许自定义 session ID（如 `--session my-project`） | 🔵 OPEN | ⭐⭐⭐⭐⭐ | 6 评论，会话管理可观测性需求，便于追踪和复现 |
| [#2613](https://github.com/QwenLM/qwen-code/issues/2613) | 阿里 coding 产品矩阵解惑 | 🔵 OPEN | ⭐⭐⭐⭐☆ | 反映用户认知混乱：Qoder CLI / Qwen Code / 灵码 定位不清，需官方澄清 |
| [#2543](https://github.com/QwenLM/qwen-code/issues/2543) | Global Skills 无法引用内部文件（read_file 被 workspace 限制） | 🔵 OPEN | ⭐⭐⭐⭐☆ | 3 评论，Skills 生态的关键阻塞，影响可复用组件建设 |
| [#2596](https://github.com/QwenLM/qwen-code/issues/2596) | CLI 持续在末尾添加 `</think>` | 🔵 OPEN | ⭐⭐⭐⭐☆ | 模型输出污染问题，影响代码生成可靠性，已获 1 👍 |
| [#2598](https://github.com/QwenLM/qwen-code/issues/2598) | VSCode 终端输入中文假死 | 🔵 OPEN | ⭐⭐⭐⭐☆ | 中文用户高频痛点，IME 与终端集成问题 |
| [#2599](https://github.com/QwenLM/qwen-code/issues/2599) | Windows 图片粘贴/路径识别矛盾 | 🔵 OPEN | ⭐⭐⭐☆☆ | 多模态输入体验问题，Alt+V 快捷键冲突 |
| [#2617](https://github.com/QwenLM/qwen-code/issues/2617) | 动态启用/禁用 MCP 服务器的 CLI 命令 | 🔵 OPEN | ⭐⭐⭐⭐☆ | 0 评论但高价值，MCP 生态运维效率需求 |
| [#2553](https://github.com/QwenLM/qwen-code/issues/2553) | VS Code 关闭后 ACP 后台进程残留 | 🔵 OPEN | ⭐⭐⭐⭐☆ | 系统资源泄漏，影响开发体验，已获 1 👍 |
| [#2615](https://github.com/QwenLM/qwen-code/issues/2615) / [#2614](https://github.com/QwenLM/qwen-code/issues/2614) | VSCode IDE Companion / 主发布流程失败 | 🔵 OPEN | ⭐⭐⭐⭐⭐ | CI/CD 稳定性危机，影响版本交付 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 目标版本 | 核心内容 |
|:---|:---|:---|:---|:---|
| [#2525](https://github.com/QwenLM/qwen-code/pull/2525) | 添加任务完成后跟进建议功能 | `wenshao` | - | 对标 Claude Code NES，上下文感知的下一步操作建议（如"提交代码"、"运行测试"）|
| [#2591](https://github.com/QwenLM/qwen-code/pull/2591) | 修复 VSCode 切换模型时元数据丢失 | `yiliang114` | 0.14.0 | 解决 context-left 指示器显示旧模型窗口大小的问题 |
| [#2551](https://github.com/QwenLM/qwen-code/pull/2551) | VSCode 启用 Plan Mode 切换与审批 UI | `yiliang114` | 0.14.0 | Plan Mode 功能补齐，Tab 键循环切换审批模式 |
| [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | VSCode 暴露 `/skills` 斜杠命令 | `yiliang114` | 0.14.0 | 二级选择器支持，输入 `/skills` 后展示可用技能列表 |
| [#2547](https://github.com/QwenLM/qwen-code/pull/2547) | 改进 C++/Java/Python LSP 支持 | `yiliang114` | 0.14.0 | 修复非 TypeScript LSP（jdtls/clangd/pylsp）返回空结果问题 |
| [#2546](https://github.com/QwenLM/qwen-code/pull/2546) | 改进 ACP 错误处理防止静默挂起 | `yiliang114` | 0.14.0 | 解决 malformed `settings.json` 导致无限"Preparing Qwen Code..." |
| [#2490](https://github.com/QwenLM/qwen-code/pull/2490) | 添加阿里云 Coding Plan 认证 | `xuewenjie123` | 0.14.0 | 百炼 Coding Plan 认证支持 + WebUI 多语言国际化 |
| [#2420](https://github.com/QwenLM/qwen-code/pull/2420) | Ctrl+Y 跳过限流重试等待 | `huww98` | 0.14.0 | TPM 限流场景下，60 秒倒计时期间按 Ctrl+Y 立即重试 |
| [#2611](https://github.com/QwenLM/qwen-code/pull/2611) | 优雅处理 PTY 竞态条件错误 | `Mingholy` | - | 修复 `EIO`/`EBADF` 导致的崩溃，macOS/Linux 终端稳定性 |
| [#2612](https://github.com/QwenLM/qwen-code/pull/2612) | Kitty 键盘协议序列超时管理 | `qqqys` | - | 200ms 超时机制，修复 VS Code 集成终端 IME 输入问题 |

---

## 5. 功能需求趋势

基于 28 个活跃 Issue 分析，社区关注焦点集中在：

```
┌─────────────────────────────────────────┐
│  🔧 IDE 集成深化（40%）                  │
│     • VSCode 插件稳定性、Plan Mode、      │
│       Skills 命令、终端 IME 支持          │
├─────────────────────────────────────────┤
│  🌐 MCP 生态扩展（20%）                  │
│     • 动态服务器管理、Global Skills 文件 │
│       引用、非 GitHub 扩展源支持          │
├─────────────────────────────────────────┤
│  ⚡ 可靠性与性能（20%）                  │
│     • 后台进程清理、发布 CI/CD、         │
│       限流处理、PTY 稳定性                │
├─────────────────────────────────────────┤
│  🎯 可观测性与控制（15%）                │
│     • 项目级 Insight、自定义 Session ID、 │
│       模型输出污染修复                    │
├─────────────────────────────────────────┤
│  🖼️ 多模态输入（5%）                     │
│     • Windows 图片粘贴、剪贴板集成        │
└─────────────────────────────────────────┘
```

---

## 6. 开发者关注点

| 痛点类别 | 具体表现 | 代表 Issue |
|:---|:---|:---|
| **产品定位困惑** | 阿里系 coding 工具矩阵（Qwen Code / Qoder / 灵码）边界模糊，用户选择困难 | [#2613](https://github.com/QwenLM/qwen-code/issues/2613) |
| **Windows 体验落差** | 图片粘贴失效、中文输入异常、后台进程残留、安装脚本 SSL 错误 | [#2599](https://github.com/QwenLM/qwen-code/issues/2599), [#2598](https://github.com/QwenLM/qwen-code/issues/2598), [#2553](https://github.com/QwenLM/qwen-code/issues/2553), [#2317](https://github.com/QwenLM/qwen-code/issues/2317) |
| **企业级扩展限制** | 无法使用私有 Git 服务器安装扩展、Global Skills 文件隔离过严 | [#2538](https://github.com/QwenLM/qwen-code/issues/2538), [#2543](https://github.com/QwenLM/qwen-code/issues/2543) |
| **模型输出污染** | `</think>` 标签泄漏、特殊 token（`<\|image_pad\|>`）被拦截 | [#2596](https://github.com/QwenLM/qwen-code/issues/2596), [#2531](https://github.com/QwenLM/qwen-code/issues/2531) |
| **发布工程债务** | 24 小时内 4 次发布流程失败，影响预览版可用性 | [#2615](https://github.com/QwenLM/qwen-code/issues/2615), [#2614](https://github.com/QwenLM/qwen-code/issues/2614), [#2608](https://github.com/QwenLM/qwen-code/issues/2608), [#2606](https://github.com/QwenLM/qwen-code/issues/2606) |

---

*日报基于 GitHub 公开数据生成，关注 [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) 获取最新动态*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*