# AI CLI 工具社区动态日报 2026-03-04

> 生成时间: 2026-03-04 00:08 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-03-04

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**"三强主导、多极追赶"**格局：Anthropic Claude Code 与 OpenAI Codex 凭借先发优势占据企业心智，Google Gemini CLI 依托 A2A/ACP 协议快速构建 Agent 互联生态，而 Kimi、Qwen、OpenCode 等新锐正以**差异化体验**（Undo 机制、AGENTS.md 标准化、IDE 深度集成）争夺细分场景。整体技术路线从"单工具智能"向**多 Agent 编排、标准化协议、企业级治理**跃迁，社区对**计费透明度、上下文可控性、MCP 稳定性**的诉求已成为全行业共同压力测试点。

---

## 2. 各工具活跃度对比

| 工具 | 今日活跃 Issues | 今日活跃 PRs | 版本发布 | 迭代特征 |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 10+（高优先级 4 个） | 9 个（8 Open/1 Closed） | 无 | 安全插件生态爆发，Hook 扩展点成熟 |
| **OpenAI Codex** | 10+（P0 级 2 个） | 10 个（全 Open） | **4 个 Rust Alpha**（v0.108.0-alpha.1~5） | 核心层高频迭代，Hooks 引擎 MVP |
| **Gemini CLI** | 10+ | 10 个（9 Open/1 Closed） | **v0.32.0 + v0.33.0-preview.0** | A2A/远程 Agent 基础设施冲刺 |
| **GitHub Copilot CLI** | 10+ | **0 个** | **v0.0.421-2** | 官方主导，外部贡献极低 |
| **Kimi Code CLI** | 15+ | 10 个（6 Open/4 Closed） | **v1.17.0** | 新功能密集发布，MCP 稳定性承压 |
| **OpenCode** | 10+ | 10 个（8 Open/2 Closed） | **v1.2.16** | TUI 体验攻坚，Copilot 计费危机持续 |
| **Qwen Code** | 20+ | 10 个（全 Open） | **v0.11.1** | AGENTS.md 新功能即遇缺陷，国际化加速 |

> **活跃度排序**：Qwen Code > Kimi Code CLI > Gemini CLI ≈ OpenAI Codex ≈ Claude Code > OpenCode > Copilot CLI

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **MCP 生态治理** | Claude Code, Kimi, OpenCode, Gemini | 超时隔离、故障降级、加载可视化、配置验证 | 🔥🔥🔥 |
| **Hooks/插件扩展** | Claude Code, OpenAI Codex, Kimi, Qwen | PreToolUse/PostToolUse 生命周期、安全拦截、外部通知 | 🔥🔥🔥 |
| **上下文可控性** | Claude Code, Kimi, Qwen, OpenCode | 压缩阈值配置、跨会话同步、Token 用量实时感知 | 🔥🔥🔥 |
| **计费透明度** | OpenAI Codex, OpenCode | 实时用量仪表板、异常计量告警、请求分类准确 | 🔥🔥🔥 |
| **IDE 深度集成** | Claude Code, Copilot CLI, Qwen, OpenCode | VS Code/Xcode/Zed 原生扩展、LSP 协议、Slash 命令 | 🔥🔥 |
| **多 Agent 可靠性** | Claude Code, Gemini, Kimi, Qwen | 子代理生命周期、竞态条件消除、编排器幻觉修复 | 🔥🔥 |
| **终端交互体验** | Gemini, Kimi, Copilot CLI, OpenCode | 无闪烁渲染、鼠标选择、剪贴板、主题自适应 | 🔥🔥 |

---

## 4. 差异化定位分析

| 工具 | 核心侧重 | 目标用户 | 技术路线特征 |
|:---|:---|:---|:---|
| **Claude Code** | **安全与可控性** | 企业安全敏感团队、合规驱动组织 | PreToolUse Hook 生态成熟，社区安全插件爆发（4+ PR/日），"Block/Warn"分级策略领先 |
| **OpenAI Codex** | **基础设施与企业治理** | 大型组织、需要 MDM/强制策略的 IT 部门 | Rust 核心层重写，Hooks 引擎 MVP，企业功能强制策略（`requirements.toml`）补全最后缺口 |
| **Gemini CLI** | **Agent 互联协议** | 多 Agent 协作场景、跨平台生态构建者 | A2A/ACP 协议原生支持，远程 Agent 基础设施（30min 超时），`AGENT=gemini` 行业标准推动 |
| **GitHub Copilot CLI** | **微软生态无缝衔接** | 现有 Copilot 订阅用户、VS Code 重度用户 | 闭源主导，MCP Elicitations 结构化表单，终端主题自适应，但 WSL/自定义命令长期悬置 |
| **Kimi Code CLI** | **交互体验精细化** | 追求 IDE 级体验的个人开发者、多设备用户 | Undo 机制、会话导入/导出、视频剪贴板粘贴、子代理快捷键（2-9 键），"好用"优先于"能用" |
| **OpenCode** | **开放生态与模型中立** | 多模型切换用户、成本敏感开发者 | 20+ 模型提供商支持，AGENTS.md 标准化，ASK MODE 省 token 模式，TUI 动画与交互持续打磨 |
| **Qwen Code** | **本地化与开发者工具链** | 中文开发者、Apple 生态用户、模型选型需求者 | AGENTS.md 默认上下文、Insight 多语言报告、Agent 竞技场（多模型对比）、Xcode/Zed 原生集成 |

---

## 5. 社区热度与成熟度

### 🔥 高活跃·快速迭代
| 工具 | 关键指标 | 阶段判断 |
|:---|:---|:---|
| **Qwen Code** | 20+ Issues/日，AGENTS.md 新功能即遇反馈，国际化 PR 就绪 | **功能爆发期**，v0.11.x 快速迭代，生态工具待对齐 |
| **Kimi Code CLI** | v1.17.0 新功能 4 项，MCP 稳定性问题同日暴露并修复 | **体验打磨期**，从"功能补齐"转向"交互精致化" |
| **Gemini CLI** | 远程 Agent Sprint 三阶段并行，A2A 协议落地加速 | **协议定义期**，押注 Agent 互联基础设施标准 |

### ⚖️ 成熟稳定·优化深耕
| 工具 | 关键指标 | 阶段判断 |
|:---|:---|:---|
| **Claude Code** | Hook 生态标准化，安全插件社区自驱动，无版本发布 | **平台化期**，扩展点成熟，官方聚焦核心稳定性 |
| **OpenAI Codex** | 4 个 Rust Alpha/日，Hooks 引擎 MVP，企业策略闭环 | **架构重构期**，核心层 Rust 化，企业功能收尾 |

### ⚠️ 活跃度警示
| 工具 | 关键指标 | 风险提示 |
|:---|:---|:---|
| **GitHub Copilot CLI** | **0 PR/日**，滚动/渲染问题反复，WSL 需求 7 个月未决 | **外部生态封闭**，完全依赖官方团队，创新节奏受限 |
| **OpenCode** | Copilot 计费危机 152 评论未解，TUI 交互债务持续 | **信任修复期**，核心集成可靠性存疑，需重建付费用户信心 |

---

## 6. 值得关注的趋势信号

### 🎯 对开发者的决策参考价值

| 趋势信号 | 行业意义 | 行动建议 |
|:---|:---|:---|
| **MCP 成为"双刃剑"** | 扩展机制从差异化优势演变为**稳定性瓶颈**，多工具出现"单点故障"模式 | 生产环境部署需配置 MCP 超时隔离与降级策略，优先选择支持故障隔离的工具（Kimi 已修复 #1314，Claude Code 有社区验证插件） |
| **Hooks 系统标准化** | PreToolUse/PostToolUse 成为**事实标准扩展点**，安全拦截、审计、通知等场景插件化 | 团队可基于 Hooks 构建内部治理层，避免锁定单一工具；关注 Qwen #1988、OpenAI Codex #13276 的 API 设计差异 |
| **AGENTS.md 生态分化** | OpenCode 推动标准化，Qwen 默认加载，Claude Code 依赖 CLAUDE.md | 多工具用户需维护多套配置文件，或选择支持 AGENTS.md 作为**通用标准**的工具降低迁移成本 |
| **"Plan 模式"体验鸿沟** | Gemini #20716（截断）、Claude Code（不可控压缩）vs Kimi ACC 自动压缩 #1329 | 长任务场景优先评估**上下文压缩的可配置性**与**任务恢复能力**，避免心流中断 |
| **计费透明度成为采购决策因子** | OpenAI Codex #13186、OpenCode #8030 引发用户自建计量系统 | 企业评估需要求**实时用量 API** 与**异常扣费申诉机制**，订阅制工具需验证"代理请求"分类准确性 |
| **A2A/ACP 协议先行优势** | Gemini 30min 远程 Agent 超时、OAuth 原语提取，可能定义跨工具协作标准 | 构建多 Agent 系统的团队可提前适配 A2A 协议，降低未来集成成本 |

---

*报告基于 2026-03-04 各工具 GitHub 公开数据生成 | 适合技术选型、团队工具链规划、AI 工程基础设施投资决策参考*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-03-04）

---

## 1. 热门 Skills 排行（按社区关注度）

| 排名 | Skill | 功能概述 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **skill-quality-analyzer / skill-security-analyzer** | 元分析工具，从结构、文档、安全等五维度评估 Skill 质量 | 🟡 Open | [#83](https://github.com/anthropics/skills/pull/83) |
| 2 | **frontend-design** | 前端设计 Skill 改进版，提升指令可执行性与上下文连贯性 | 🟡 Open | [#210](https://github.com/anthropics/skills/pull/210) |
| 3 | **shodh-memory** | AI 代理持久化记忆系统，跨会话维护上下文 | 🟡 Open | [#154](https://github.com/anthropics/skills/pull/154) |
| 4 | **codebase-inventory-audit** | 代码库清理审计工具，识别孤儿代码、文档缺口、基础设施膨胀 | 🟡 Open | [#147](https://github.com/anthropics/skills/pull/147) |
| 5 | **SAP-RPT-1-OSS predictor** | 集成 SAP 开源表格基础模型，用于业务数据预测分析 | 🟡 Open | [#181](https://github.com/anthropics/skills/pull/181) |
| 6 | **AURELION skill suite** | 四件套认知框架：结构化思维模板、决策顾问、代理编排、记忆管理 | 🟡 Open | [#444](https://github.com/anthropics/skills/pull/444) |
| 7 | **Buildr** | Telegram 桥接工具，手机端远程控制 Claude Code 会话 | 🟡 Open | [#419](https://github.com/anthropics/skills/pull/419) |
| 8 | **masonry-generate-image-and-videos** | 集成 Imagen 3.0/Veo 3.1 的 AI 图像视频生成工具 | 🟡 Open | [#335](https://github.com/anthropics/skills/pull/335) |

---

## 2. 社区需求趋势（Issues 提炼）

| 方向 | 代表 Issue | 核心诉求 |
|:---|:---|:---|
| **MCP 集成与标准化** | [#16](https://github.com/anthropics/skills/issues/16), [#185](https://github.com/anthropics/skills/issues/185) | 将 Skills 暴露为 MCP 工具，建立 AI 代理的包管理生态 |
| **Agent 治理与安全** | [#412](https://github.com/anthropics/skills/issues/412) | 政策执行、威胁检测、信任评分、审计追踪等安全模式 |
| **企业级部署（Bedrock）** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 兼容性与私有化部署支持 |
| **Skill 质量与开发体验** | [#202](https://github.com/anthropics/skills/issues/202) | 官方 skill-creator 需重构，减少教育性内容、提升 token 效率 |
| **开源许可放宽** | [#100](https://github.com/anthropics/skills/issues/100) | 文档类 Skill 的 restrictive license 阻碍社区复用 |

---

## 3. 高潜力待合并 Skills

> 评论活跃、功能完整、接近落地条件的 PR

| Skill | 亮点 | 阻塞因素 | 链接 |
|:---|:---|:---|:---|
| **skill-quality-analyzer** | 首个元 Skill，可自我优化生态质量 | 需官方安全审查 | [#83](https://github.com/anthropics/skills/pull/83) |
| **shodh-memory** | 解决 Claude 无状态核心痛点，跨会话持久化 | 内存存储策略待确认 | [#154](https://github.com/anthropics/skills/pull/154) |
| **frontend-design** | 官方博客背书的设计工作流改进 | 需与现有 web-artifacts-builder 整合 | [#210](https://github.com/anthropics/skills/pull/210) |
| **AURELION suite** | 企业级知识管理框架，四 Skill 协同 | 体积较大，需分阶段 review | [#444](https://github.com/anthropics/skills/pull/444) |
| **skill-creator UTF-8 修复** | 解决多字节字符 panic 的生产级 bug | 测试覆盖待补充 | [#362](https://github.com/anthropics/skills/pull/362) |

---

## 4. Skills 生态洞察

> **核心诉求：从"单次对话工具"演进为"有记忆、可治理、可编排的持久化代理系统"** —— 社区正集中推动 Claude Code Skills 突破无状态限制，建立企业级 AI 代理的完整生命周期管理（记忆持久化、安全治理、MCP 互操作、质量自控）。

---

---

# Claude Code 社区动态日报 | 2026-03-04

## 今日速览

今日社区活跃度显著，**印度市场定价诉求**持续发酵（121👍），成为最受关注的外部议题；技术层面，**GPG 签名终端冲突**、**MCP 工具调用可视化**及**子代理竞态条件**等核心稳定性问题密集曝光，社区贡献者同步提交了多个安全加固插件与修复方案。

---

## 版本发布

**无新版本发布**（过去24小时）

---

## 社区热点 Issues

| 优先级 | Issue | 核心看点 |
|:---|:---|:---|
| 🔥 **高** | [#17432](https://github.com/anthropics/claude-code/issues/17432) 印度市场 INR 定价计划 | **商业扩张关键诉求**。121👍 反映印度开发者强烈需求，对比 OpenAI/Google 已本地化定价，Anthropic 的定价策略滞后可能影响市场份额。49 条评论持续施压。 |
| 🔥 **高** | [#15942](https://github.com/anthropics/claude-code/issues/15942) Visual Studio 2026 集成 | **企业级 IDE 生态缺口**。Windows 企业开发者主力工具，93👍 显示 VS 生态支持仍是短板，影响企业采购决策。 |
| 🔥 **高** | [#19018](https://github.com/anthropics/claude-code/issues/19018) 上下文限制与 `/compact` 机制缺陷 | **核心体验痛点**。上下文压缩触发时机不可控，用户被迫中断工作流手动清理，13 条评论反映长期困扰。 |
| ⚡ **中** | [#29579](https://github.com/anthropics/claude-code/issues/29579) Claude Max 订阅者遭遇速率限制 | **付费权益信任危机**。订阅者仅使用 16% 配额即被限流，API 层与订阅层状态同步存在 Bug，影响付费转化。 |
| ⚡ **中** | [#30021](https://github.com/anthropics/claude-code/issues/30021) iOS Web UI "创建 PR" 按钮缺失 | **移动端工作流断裂**。iOS 场景下代码推送后无法直接发起 PR，12👍 反映移动优先开发者的阻塞体验。 |
| ⚡ **中** | [#30541](https://github.com/anthropics/claude-code/issues/30541) TTY 设备访问导致终端冻结 | **Linux 稳定性隐患**。远程设备/串口调试场景高频触发，影响嵌入式与 IoT 开发者。 |
| ⚡ **中** | [#30539](https://github.com/anthropics/claude-code/issues/30539) GPG pinentry 终端冲突 | **安全工具链兼容性**。签名提交失败阻断 Git 工作流，终端交互模型与 GPG 密码输入机制冲突，已有社区 PR 修复。 |
| ⚡ **中** | [#30520](https://github.com/anthropics/claude-code/issues/30520) 子代理竞态条件导致编排器幻觉 | **多代理架构可靠性**。高并发子任务场景下，编排器虚假声称已集成结果，影响复杂任务分解的准确性。 |
| ⚡ **中** | [#30545](https://github.com/anthropics/claude-code/issues/30545) MCP 指令覆盖 CLAUDE.md 项目规则 | **提示工程优先级混乱**。MCP 服务器长指令消耗大量 token 并覆盖本地规则，导致成本失控与行为偏离。 |
| ⚡ **中** | [#27128](https://github.com/anthropics/claude-code/issues/27128) 多代理会话中系统消息误标为 Human | **安全边界突破**。模型将系统生成内容误判为用户指令，引发未授权自主操作（如删除团队目录），风险等级高。 |

---

## 重要 PR 进展

| 状态 | PR | 功能/修复内容 |
|:---|:---|:---|
| 🆕 **Open** | [#30521](https://github.com/anthropics/claude-code/pull/30521) | **GPG 签名修复插件**：通过 PreToolUse Hook 拦截问题场景，自动切换至图形化 pinentry 或提示用户，解决 #30539 终端冻结问题 |
| 🆕 **Open** | [#30537](https://github.com/anthropics/claude-code/pull/30537) | **ralph-loop 崩溃修复**：处理无参数调用时的未绑定变量错误，提升插件鲁棒性 |
| 🆕 **Open** | [#30305](https://github.com/anthropics/claude-code/pull/30305) | **安全插件分级系统**：将二元"全阻断"改为 Block/Warn 两级，减少开发摩擦同时保持高风险的严格拦截 |
| 🆕 **Open** | [#30299](https://github.com/anthropics/claude-code/pull/30299) | **VibeGuard 提示防护插件**：敏感信息/PII 检测与脱敏，支持占位符替换后的安全复制重发 |
| 🆕 **Open** | [#30261](https://github.com/anthropics/claude-code/pull/30261) | **破坏性命令护栏插件**：覆盖 23 种高危操作（`rm -rf`、`git reset --hard`、`DROP TABLE` 等），防止自主代理会话中的数据丢失 |
| 🆕 **Open** | [#30257](https://github.com/anthropics/claude-code/pull/30257) | **MCP-Doctor 配置验证插件**：绕过内置 `/doctor` 的 JSON 解析误报，提供可靠的 `.mcp.json` 诊断 |
| 🆕 **Open** | [#30245](https://github.com/anthropics/claude-code/pull/30245) | **Bash 安全 Hook 示例**：文档化 PreToolUse 安全检测模式，降低社区插件开发门槛 |
| 🆕 **Open** | [#29461](https://github.com/anthropics/claude-code/pull/29461) | **重复 Issue 检测优化**：约束候选目标为开放状态，减少循环重复与噪音 |
| ✅ **Closed** | [#29522](https://github.com/anthropics/claude-code/pull/29522) | **hookify 插件功能修复**：解决 Python 导入路径与规则发现路径问题，恢复插件可用性 |
| ✅ **Closed** | [#30273](https://github.com/anthropics/claude-code/pull/30273) | 树木库存管理 Web 应用（Flask）— 非核心功能，已关闭 |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注焦点集中于：

| 方向 | 热度 | 典型诉求 |
|:---|:---|:---|
| **区域化定价与支付** | 🔥🔥🔥 | 印度 INR、其他地区本地化，降低汇率摩擦 |
| **IDE 生态扩展** | 🔥🔥🔥 | Visual Studio、JetBrains 深度集成，企业开发者刚需 |
| **上下文与内存管理** | 🔥🔥🔥 | 可配置压缩阈值、跨会话历史同步、Skills 多端同步 |
| **MCP 生态治理** | 🔥🔥 | 工具调用 diff 可视化、配置验证、指令优先级控制 |
| **多代理可靠性** | 🔥🔥 | 子代理生命周期管理、竞态条件消除、消息归属正确性 |
| **终端交互兼容性** | 🔥🔥 | GPG、SSH、交互式命令的 stdin 透传 |
| **移动端体验** | 🔥 | iOS/Android Web 功能对等、PR 创建等完整工作流 |

---

## 开发者关注点

### 🔴 高频痛点
1. **不可控的上下文压缩** — 无预警触发、无阈值配置，打断心流状态
2. **权限系统的过度保守** — 复合命令中 `cd` 误触发权限提示，Plan 模式与免确认模式冲突
3. **付费权益兑现问题** — Max 订阅仍遭遇限流，定价透明度与 API 状态同步存疑

### 🟡 能力缺口
- **跨端状态同步**：CLI ↔ Desktop ↔ Web 的历史、Skills、配置孤岛
- **MCP 可观测性**：工具调用的变更 diff、token 消耗归因、规则覆盖诊断
- **企业安全合规**：破坏性操作审计、代理自主行为边界控制

### 🟢 社区活力信号
- **安全插件爆发**：单日 4+ 个安全相关插件 PR，覆盖命令拦截、PII 防护、配置验证
- **Hook 生态成熟**：PreToolUse/PostToolUse 成为标准化扩展点，社区开始沉淀最佳实践文档

---

*数据来源：github.com/anthropics/claude-code | 统计周期：2026-03-03 至 2026-03-04*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-03-04

---

## 今日速览

今日社区焦点集中在**计费计量异常**与**WebSocket 连接稳定性**两大问题，多个高热度 Issue 持续发酵；同时开发团队密集发布 4 个 Rust 版本迭代，并推进了 **Hooks 引擎**、**插件应用加载**、**图像生成核心功能**等重大架构升级。

---

## 版本发布

### Rust 组件连续迭代（v0.108.0-alpha.1 ~ alpha.5）

过去 24 小时内发布 4 个 Alpha 版本，版本号从 `v0.108.0-alpha.1` 快速推进至 `alpha.5`，显示 Rust 核心层处于**高频迭代期**。虽然 release note 较为简略，但结合同期 PR 推测主要涉及：
- 网络代理安全加固（CONNECT 隧道端口限制）
- 企业级功能强制策略配置
- 执行引擎统一化改造

> 🔗 [Releases 页面](https://github.com/openai/codex/releases)

---

## 社区热点 Issues

| 优先级 | Issue | 核心问题 | 社区反应 |
|:---|:---|:---|:---|
| 🔴 **P0** | [#13186](https://github.com/openai/codex/issues/13186) **Plus 用户计费异常** | 极短任务消耗 5h+ 周额度，计量系统疑似存在严重 bug | **53 评论**，Reddit 广泛传播，用户要求紧急修复 |
| 🔴 **P0** | [#13041](https://github.com/openai/codex/issues/13041) **WebSocket 1008 策略关闭** | 升级成功后服务器立即断开，强制降级 HTTPS，影响实时性 | **43 评论，81 👍**，Arch Linux 用户集中反馈 |
| 🟡 **P1** | [#11561](https://github.com/openai/codex/issues/11561) **GPT-5.3 被路由至 5.2** | 模型调度层错误，用户付费后未获得承诺模型 | **47 评论，44 👍**，已关闭但影响信任 |
| 🟡 **P1** | [#8745](https://github.com/openai/codex/issues/8745) **LSP 自动集成需求** | 请求内置语言服务器协议支持，含自动检测/安装 | **23 评论，132 👍**，长期高票功能请求 |
| 🟡 **P1** | [#13179](https://github.com/openai/codex/issues/13179) **子代理消息用量指数爆炸** | 嵌套 agent 调用导致 messages 配额异常消耗 | **12 评论**，Pro/Plus 双订阅用户受害 |
| 🟡 **P1** | [#10571](https://github.com/openai/codex/issues/10571) **"Bad request" 错误** | gpt-5.2 xhigh 模型频繁返回 400 错误 | **17 评论**，Pro 用户工作流中断 |
| 🟢 **P2** | [#2137](https://github.com/openai/codex/issues/2137) **Windows 多行粘贴截断** | 粘贴含换行文本仅保留首行并自动提交 | **29 评论，40 👍**，历史遗留问题终于关闭 |
| 🟢 **P2** | [#12661](https://github.com/openai/codex/issues/12661) **VS Code 扩展 file:// 链接行为** | Markdown 本地文件链接错误打开 Edge 而非编辑器 | **7 评论，10 👍**，Windows 开发者体验问题 |
| 🟢 **P2** | [#12890](https://github.com/openai/codex/issues/12890) **ANSI 主题渲染为 RGB** | `ansi` 主题未使用终端调色板索引，破坏主题一致性 | **5 评论，6 👍**，终端用户细节体验 |
| 🟢 **P2** | [#13117](https://github.com/openai/codex/issues/13117) **Windows 沙箱权限回归** | 每文件读取均请求权限，此前已修复的问题复发 | **4 评论**，扩展版稳定性受质疑 |

---

## 重要 PR 进展

| PR | 作者 | 功能/修复 | 技术意义 |
|:---|:---|:---|:---|
| [#13329](https://github.com/openai/codex/pull/13329) | @aaronl-openai | **js_repl 硬中断机制** | 用户显式中断时强制停止执行，保留持久化 REPL 状态，解决"僵尸进程"问题 |
| [#13401](https://github.com/openai/codex/pull/13401) | @sayan-oai | **插件应用动态加载** | 从 `.app.json` 加载插件，运行时按 `connector_id` 过滤，为生态扩展奠基 |
| [#13290](https://github.com/openai/codex/pull/13290) | @won-openai | **图像生成核心（image-gen-core）** | 基于 Responses API 的图像请求/接收工具调用，多模态能力重大升级 |
| [#13177](https://github.com/openai/codex/pull/13177) | @charley-oai | **Turn 上下文热刷新** | 采样请求前重载上下文，支持 mid-turn 设置变更即时生效，无需重启会话 |
| [#13292](https://github.com/openai/codex/pull/13292) | @rhan-oai | **CLI 诊断信息增强** | 新增环境变量收集与诊断头显示，提升故障排查效率 |
| [#13331](https://github.com/openai/codex/pull/13331) | @fjord-oai | **js_repl 图像输出可控化** | 停止自动提升嵌套工具输出，由 JS 代码决定返回值，精细化 I/O 控制 |
| [#13388](https://github.com/openai/codex/pull/13388) | @bolinfest | **企业功能强制策略** | `requirements.toml`/MDM 可锁定功能标志，补全企业治理最后缺口 |
| [#13276](https://github.com/openai/codex/pull/13276) | @eternal-openai | **Hooks 引擎 MVP** | 同步阻塞式钩子执行（SessionStart/Stop），为工作流自动化提供扩展点 |
| [#13409](https://github.com/openai/codex/pull/13409) | @celia-oai | **只读沙箱保留网络访问** | `ReadOnly` 策略新增 `network_access` 字段，安全与功能兼得 |
| [#13392](https://github.com/openai/codex/pull/13392) | @bolinfest | **统一执行层 zsh-fork 后端** | 为 `exec_command` 复用 `shell_zsh_fork` 的可执行文件审批机制，架构统一化 |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注焦点呈现代际迁移特征：

| 趋势方向 | 代表 Issue | 热度指标 |
|:---|:---|:---|
| **🔥 计费透明度与配额控制** | #13186, #13179, #13167 | 3 个高评论 Issue，用户强烈质疑计量准确性 |
| **🔥 企业级安全与治理** | #8745 (LSP), #8732 (Azure 认证), #13388 | 企业部署刚需，合规驱动 |
| **⚡ 连接稳定性与实时性** | #13041 (WebSocket), #13406 (IPv6 连接挂起) | 基础设施可靠性成为瓶颈 |
| **🎨 IDE 深度集成** | #3405 (@搜索文件夹), #12661 (链接处理) | VS Code 扩展体验精细化 |
| **🧠 模型调度与路由** | #11561 (5.3→5.2 错误路由) | 用户对模型版本确定性要求提升 |
| **🔧 可观测性与调试** | #13384 (工作状态不明确), #13292 (诊断增强) | 长任务透明度不足 |

---

## 开发者关注点

### 高频痛点

1. **"黑盒"计费焦虑**  
   多个用户建立私有用量追踪系统，发现官方计量与自测偏差达 2-4 倍。Plus/Pro 订阅者对"小额任务大额扣费"容忍度极低，要求实时用量仪表板。

2. **Windows 平台二等公民体验**  
   粘贴行为、沙箱权限、路径处理等基础功能反复回归，开发者质疑 CI 覆盖率不足。

3. **网络层调试困难**  
   WebSocket 1008 错误、IPv6 优先导致的连接挂起等问题，缺乏底层诊断工具，用户只能抓包分析。

### 强烈期待

| 需求 | 场景 | 当前状态 |
|:---|:---|:---|
| **Plan 模式 CLI/TS SDK 支持** | CI/CD 自动化工作流 | [#13377](https://github.com/openai/codex/issues/13377) 刚开启，呼声高 |
| **原生 LSP 集成** | 代码智能补全与诊断 | [#8745](https://github.com/openai/codex/issues/8745) 132 👍，长期未决 |
| **用量预警与硬限制** | 防止意外超额消费 | 无官方 Issue，Reddit 自发讨论 |
| **离线/本地模型支持** | 敏感代码场景 | 零星提及，无正式追踪 |

---

> 📌 **订阅提示**：本日报基于 GitHub 公开数据生成，如需深度分析特定模块（Rust 核心/CLI/扩展/App），可指定聚焦范围。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-03-04

## 今日速览

今日社区聚焦 **A2A（Agent-to-Agent）协议与远程 Agent 基础设施**的密集迭代，v0.32.0 正式版与 v0.33.0-preview.0 相继发布，同时团队正全力推进子 Agent（Subagent）功能的实验转正。UI 体验优化与终端渲染稳定性仍是高频议题。

---

## 版本发布

### v0.32.0（正式版）
| 项目 | 内容 |
|:---|:---|
| **核心更新** | Plan 模式集成测试覆盖；ACP 认证握手协议对齐规范；A2A 流式读取鲁棒性实现 |
| **PR 链接** | [#20214](https://github.com/google-gemini/gemini-cli/pull/20214) [#19725](https://github.com/google-gemini/gemini-cli/pull/19725) |

### v0.33.0-preview.0（预览版）
| 项目 | 内容 |
|:---|:---|
| **核心更新** | 模型文档清理预览功能标记；安装文档 typo 修复；Windows PowerShell 文档补充 |
| **PR 链接** | [#20084](https://github.com/google-gemini/gemini-cli/pull/20084) [#20153](https://github.com/google-gemini/gemini-cli/pull/20153) |

---

## 社区热点 Issues（Top 10）

| # | Issue | 状态 | 核心痛点 | 社区反应 |
|---|:---|:---|:---|:---|
| **20716** | [Plan 审批对话框截断问题](https://github.com/google-gemini/gemini-cli/issues/20716) | 🔴 Open | Plan 模式退出时仅显示 15 行内容，长计划被隐藏 | **8 评论**，影响 Plan 模式可用性，需紧急修复 |
| **20142** | [AskUser 支持 Ctrl+R 搜索历史](https://github.com/google-gemini/gemini-cli/issues/20142) | 🔴 Open | 开放式问题无法复用历史答案，重复输入成本高 | **8 评论**，UX 痛点，用户强烈呼吁 |
| **20882** | [Windows Terminal Kitty 支持](https://github.com/google-gemini/gemini-cli/issues/20882) | 🔴 Open | Windows Terminal 已合并 Kitty 协议，但 `Shift+Enter` 仍失效 | **5 评论**，跨平台兼容性关键问题 |
| **7231** | [工具确认消息总线 Epic](https://github.com/google-gemini/gemini-cli/issues/7231) | 🔴 Open | 工具确认逻辑与核心实现耦合，需解耦为 pub/sub 架构 | **5 评论**，架构级改进，影响扩展性 |
| **10673** | [无闪烁终端渲染](https://github.com/google-gemini/gemini-cli/issues/10673) | 🔴 Open | 常规/备用缓冲区切换、Ink 静态渲染性能、窗口外内容渲染 | **3 评论**，终端体验基础能力 |
| **20302** | [远程 Agent Sprint 1 - 基础架构](https://github.com/google-gemini/gemini-cli/issues/20302) | 🔴 Open | 远程 Agent 核心基础设施与流式支持 | **3 评论**，A2A 生态基石，P0 优先级 |
| **20181** | [AskUser 支持外部编辑器](https://github.com/google-gemini/gemini-cli/issues/20181) | 🔴 Open | 长文本回答（如 Conductor track 描述）需编辑器支持 | **3 评论**，与 #20142 同属 AskUser 体验优化 |
| **19514** | [AskUser 在 Plan 模式输出原始标签](https://github.com/google-gemini/gemini-cli/issues/19514) | 🔴 Open | Plan 模式下模型提问显示 `<question>` 原始标签而非渲染 | **3 评论**，Plan 模式渲染缺陷 |
| **20886** | [子 Agent UX 精细化](https://github.com/google-gemini/gemini-cli/issues/20886) | 🔴 Open | 工具调用历史展开器、UX mock 对齐、思考过程清理 | **2 评论**，子 Agent 功能完善中 |
| **20550** | [JS 堆内存耗尽](https://github.com/google-gemini/gemini-cli/issues/20550) | 🔴 Open | 长会话触发 GC 失败，进程崩溃 | **2 评论**，稳定性问题，需内存优化 |

---

## 重要 PR 进展（Top 10）

| # | PR | 状态 | 功能/修复内容 | 影响面 |
|---|:---|:---|:---|:---|
| **21034** | [版本升级至 0.34.0-nightly](https://github.com/google-gemini/gemini-cli/pull/21034) | 🟡 Open | 自动化夜间版本发布准备 | 发布流程 |
| **21032** | [AGENT=gemini 环境变量](https://github.com/google-gemini/gemini-cli/pull/21032) | 🟡 Open | 为子进程添加 vendor-neutral 的 `AGENT=gemini` 变量，标准化 Agent 检测 | **生态互操作性** |
| **20895** | [OAuth 流程原语提取](https://github.com/google-gemini/gemini-cli/pull/20895) | 🟡 Open | 从 MCPOAuthProvider 提取通用 OAuth 2.0 + PKCE 模块，供 MCP/A2A 复用 | A2A 认证基础设施 |
| **20745** | [语义焦点颜色标准化](https://github.com/google-gemini/gemini-cli/pull/20745) | 🟡 Open | 统一语义色彩系统，增强历史可见性，新增主题验证开发工具 | **UI 一致性** |
| **18725** | [Thinking UI 全面改版](https://github.com/google-gemini/gemini-cli/pull/18725) | 🟡 Open | 状态栏思考指示器文本化，内联思考 UI 现代化 | 实时反馈体验 |
| **21028** | [A2A Agent 超时延长至 30 分钟](https://github.com/google-gemini/gemini-cli/pull/21028) | 🟢 Closed | 解决 Deep Research 等长时远程 Agent 被 5 分钟超时切断问题 | **远程 Agent 可用性** |
| **20940** | [防御性编码：Maximum update depth 错误](https://github.com/google-gemini/gemini-cli/pull/20940) | 🟡 Open | 重构 Overlay 组件防止 React 无限更新循环 | 稳定性修复 |
| **20922** | [Header 紧凑化重设计](https://github.com/google-gemini/gemini-cli/pull/20922) | 🟡 Open | Mac Terminal 徽标优化，其他终端保持兼容 | 品牌呈现 |
| **20931** | [Shell 自动补全渲染优化](https://github.com/google-gemini/gemini-cli/pull/20931) | 🟡 Open | 补全项以 ghost text 形式渲染，更贴近原生 shell 体验 | 输入体验 |
| **20928** | [合并重复导入（141 文件）](https://github.com/google-gemini/gemini-cli/pull/20928) | 🟡 Open | 使用 inline type 语法统一类型与值导入，修复 ESLint `import/no-duplicates` | 代码质量 |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注焦点呈现四大方向：

| 趋势方向 | 代表 Issue | 热度 |
|:---|:---|:---:|
| **Agent 生态基础设施** | #20302 #20303 #20304（远程 Agent 三阶段）#20195 #20312（子 Agent） | 🔥🔥🔥🔥🔥 |
| **终端交互体验** | #20142 #20181（AskUser 增强）#10673 #20217（渲染稳定性）#20882（Kitty/Windows） | 🔥🔥🔥🔥 |
| **Plan 模式完善** | #20716（截断）#19514（原始标签）#20060（Conductor 策略） | 🔥🔥🔥 |
| **稳定性与工程化** | #20550（内存）#20193 #20191 #20190（API 解析防御性）#19519（循环检测误报） | 🔥🔥🔥 |

> **关键洞察**：远程 Agent（A2A）与子 Agent 功能正从实验阶段向生产就绪冲刺，相关 Issue 占比超 30%，预计将在未来 2-3 个版本成为核心卖点。

---

## 开发者关注点

### 🔴 高频痛点

| 痛点 | 典型反馈 | 关联 Issue |
|:---|:---|:---|
| **Plan 模式可用性缺陷** | "20 行计划只显示 15 行，关键信息被截断" | #20716 |
| **长文本输入体验差** | "描述 Conductor track 需要大量文本，没有编辑器支持" | #20181 |
| **历史复用困难** | "反复输入相同答案，Ctrl+R 搜索历史是刚需" | #20142 |
| **内存泄漏与崩溃** | "长会话后 JS 堆耗尽，GC 无法回收" | #20550 |

### 🟡 架构级期待

- **标准化 Agent 检测**：`AGENT=gemini` 环境变量（#21032）获社区认可，期待成为行业惯例
- **API 解析鲁棒性**：多次生产事故后，团队正系统性加强防御性编程（#20193 系列）

### 🟢 积极信号

- Windows Terminal Kitty 支持进入排查阶段，跨平台体验有望改善
- 子 Agent 实验功能默认开启在即（#20312），多 Agent 协作能力即将普惠

---

*日报基于 GitHub 公开数据生成，关注 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 获取最新动态。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-03-04

---

## 1. 今日速览

今日 Copilot CLI 发布 **v0.0.421** 系列版本，重点引入 **MCP Elicitations 结构化表单输入** 和 **终端主题自适应** 功能。社区持续高度关注**自定义 Slash 命令**（#618，86 👍）和 **WSL 支持**（#475）等长期需求，同时**窗口滚动异常**（#1775、#1805）成为新的体验痛点。

---

## 2. 版本发布

### v0.0.421 / v0.0.421-2（2026-03-03）

| 类别 | 更新内容 |
|:---|:---|
| **新增** | MCP Elicitations 实验性功能：为 `ask_user` 工具添加结构化表单输入 |
| **新增** | `--plugin-dir` 标志：支持从本地目录加载插件 |
| **新增** | Linux 鼠标选中文本自动复制到主选择缓冲区（中键粘贴） |
| **改进** | **AUTO 主题** 现直接读取终端 ANSI 调色板，实现主题无缝匹配 |
| **改进** | Autopilot 权限对话框优化：首次提交提示时触发，而非模式切换时 |

🔗 [Release 页面](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues（Top 10）

| # | 状态 | 标题 | 关键价值 | 社区反应 |
|:---|:---|:---|:---|:---|
| [#618](https://github.com/github/copilot-cli/issues/618) | 🔵 OPEN | 支持 `.github/prompts` 目录自定义 Slash 命令 | **生态对齐**：与 VS Code Copilot 扩展保持一致，降低跨工具切换成本 | 19 评论，86 👍，最高票功能请求 |
| [#1161](https://github.com/github/copilot-cli/issues/1161) | 🔵 OPEN | `invalid session id` 错误（Opus 4.5） | **稳定性**：影响 Claude 3.5 Opus 用户的核心阻塞问题 | 18 评论，用户已迁移竞品 |
| [#1348](https://github.com/github/copilot-cli/issues/1348) | 🟢 CLOSED | iTerm2 流式输出屏幕闪烁 | **体验修复**：`clearScreenDown` 重绘导致的可访问性问题 | 10 评论，已解决 |
| [#978](https://github.com/github/copilot-cli/issues/978) | 🟢 CLOSED | Skills 需显式声明才触发 | **功能完善**：Agent 能力发现机制优化 | 8 评论，技能系统核心反馈 |
| [#475](https://github.com/github/copilot-cli/issues/475) | 🔵 OPEN | WSL 终端支持 | **平台覆盖**：微软生态基础需求，长期悬而未决 | 7 评论，3 👍 |
| [#491](https://github.com/github/copilot-cli/issues/491) | 🔵 OPEN | LSP 集成 | **智能增强**：无需构建即可检测问题，对标 VS Code 体验 | 7 评论，21 👍 |
| [#1048](https://github.com/github/copilot-cli/issues/1048) | 🔵 OPEN | CLI 支持设置 reasoning effort | **模型控制**：GPT-5.2 等推理模型的精细调参 | 6 评论，21 👍 |
| [#1739](https://github.com/github/copilot-cli/issues/1739) | 🔵 OPEN | Codex 5.3 服务器错误 | **新模型适配**：最新模型兼容性问题 | 5 评论，4 👍 |
| [#132](https://github.com/github/copilot-cli/issues/132) | 🟢 CLOSED | MCP `tools/list_changed` 动态加载 | **协议合规**：MCP 服务器工具热更新支持 | 4 评论，影响 Wassette 等工具 |
| [#1775](https://github.com/github/copilot-cli/issues/1775) | 🔵 OPEN | Windows Terminal 滚动位置异常 | **体验崩溃**：自动滚动失控，难以复现但严重影响使用 | 3 评论，4 👍，新增高优先级 |

---

## 4. 重要 PR 进展

> **今日无活跃 PR 更新**（过去 24 小时 0 条）

社区开发完全依赖官方团队，外部贡献者参与度低。建议关注 **#1805**（火箭滚动修复方案）等社区提案是否转化为 PR。

---

## 5. 功能需求趋势

基于 50 条活跃 Issue 分析，社区聚焦五大方向：

| 趋势 | 代表 Issue | 需求强度 |
|:---|:---|:---:|
| **IDE/编辑器生态对齐** | #618（Slash 命令）、#491（LSP）、#1009（内置编辑器）、#1432（Vim 支持） | ⭐⭐⭐⭐⭐ |
| **模型控制与推理能力** | #1048（reasoning effort）、#1739（Codex 5.3）、#1161（Opus 4.5） | ⭐⭐⭐⭐⭐ |
| **终端体验与可访问性** | #1775/#1805（滚动异常）、#1348（屏幕闪烁）、#1799（alt-screen 关闭） | ⭐⭐⭐⭐☆ |
| **平台与部署覆盖** | #475（WSL）、#903（MCP 环境变量注入） | ⭐⭐⭐⭐☆ |
| **Agent 系统深化** | #1374（多级子 Agent）、#1632（Skills 子文件夹）、#978（Skills 自动触发） | ⭐⭐⭐☆☆ |

---

## 6. 开发者关注点

### 🔴 高频痛点

| 问题 | 影响 | 现状 |
|:---|:---|:---|
| **滚动/渲染异常** | #1775、#1805、#1348 等终端显示问题集中爆发 | 部分修复，Windows Terminal 问题待解 |
| **模型兼容性与稳定性** | Claude Opus、Codex 5.3 等新模型适配滞后 | 官方响应中，用户被迫迁移 |
| **会话状态管理** | #1161（session id）、#1503（resume 不加载 hooks）、#1772（EIO 错误） | 核心功能可靠性存疑 |

### 🟡 生态期待

- **配置灵活性**：#1729（可配置键位）、#1799（关闭 alt-screen）
- **企业场景**：#1814（EMU 用户 rate limit）、#903（环境变量安全注入）
- **工作流整合**：#1541（/list-tools）、#1774（Agent 作为 Slash 命令）

### 💡 关键洞察

> 今日发布的 **MCP Elicitations** 和 **终端主题自适应** 显示官方正聚焦**交互体验精细化**，但社区更迫切期待**平台覆盖（WSL）**和**生态开放（自定义命令/LSP）**的突破性进展。滚动渲染问题的技术方案（#1805）已获社区提案，建议官方优先评估。

---

*数据来源：github.com/github/copilot-cli | 生成时间：2026-03-04*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-03-04

---

## 今日速览

Kimi Code CLI 正式发布 **v1.17.0**，带来 ACP 协议版本协商、会话恢复及 MCP 加载状态可视化等核心能力。社区 Issues 激增，MCP 稳定性与升级兼容性成为焦点，同时开发者密集提出多行输入导航、Hooks 系统、Undo 功能等交互体验需求。

---

## 版本发布

### v1.17.0（2026-03-03）

| 更新项 | 说明 |
|--------|------|
| **ACP 协议增强** | 支持协议版本协商与会话恢复/续传能力（[#1100](https://github.com/MoonshotAI/kimi-cli/pull/1100)） |
| **MCP 状态可视化** | 首次响应前显示 MCP 加载状态，解决"黑屏等待"问题（[#1318](https://github.com/MoonshotAI/kimi-cli/pull/1318)） |
| **会话导入/导出** | 新增 `/export` 与 `/import` 命令，支持跨设备会话迁移（[#1330](https://github.com/MoonshotAI/kimi-cli/pull/1330)） |
| **上下文感知** | Shell 状态栏实时显示 Token 使用率（如 `42.0% (4.2k/10.0k)`）（[#1322](https://github.com/MoonshotAI/kimi-cli/pull/1322)） |

---

## 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 核心问题 | 社区反应 |
|---|------|------|---------|---------|
| [#1332](https://github.com/MoonshotAI/kimi-cli/issues/1332) | Ubuntu 22.04 升级 1.17.0 后启动报错 | 🔴 OPEN | 升级兼容性：Linux 环境版本升级后出现运行时错误 | 新反馈，待官方响应 |
| [#1316](https://github.com/MoonshotAI/kimi-cli/issues/1316) | MCP 超时导致整个 CLI 不可用 | 🔴 OPEN | 单点故障：任一 MCP 连接失败即中断全部工作流 | 与 #1314 同类问题，用户迫切 |
| [#1321](https://github.com/MoonshotAI/kimi-cli/issues/1321) | 系统内核变量污染导致 CLI 完全失效 | 🔴 OPEN | 防御性编程缺失：环境变量未做清洗校验 | 涉及系统级稳定性，影响面广 |
| [#1314](https://github.com/MoonshotAI/kimi-cli/issues/1314) | MCP 服务器连接失败导致 CLI 崩溃 | ✅ CLOSED | MCPRuntimeError 未捕获处理 | 已快速修复，体现响应速度 |
| [#1266](https://github.com/MoonshotAI/kimi-cli/issues/1266) | `platform.version()` 尾部空格引发 HTTP 头验证错误 | 🔴 OPEN | 边缘 case：系统信息含空格导致连接失败 | 跨平台兼容性隐患 |
| [#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327) | 默认步骤数过低（100步）限制长任务 | 🔴 OPEN | 配置合理性：上下文仅 34.5% 即触发上限 | 开发者效率痛点 |
| [#1320](https://github.com/MoonshotAI/kimi-cli/issues/1320) | 多行输入时方向键导航逻辑冲突 | 🔴 OPEN | UX：↑↓ 键历史导航与光标移动行为矛盾 | 高频交互场景，体验优化需求 |
| [#1319](https://github.com/MoonshotAI/kimi-cli/issues/1319) | 本地 Skills 缺乏统一管理方法 | 🔴 OPEN | 生态缺口：无 `skills list/rm` 等生命周期管理 | 技能生态建设需求 |
| [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315) | 按 ESC 后子代理仍在后台运行 | 🔴 OPEN | 任务生命周期：取消信号未级联至子代理 | 资源泄漏风险 |
| [#1313](https://github.com/MoonshotAI/kimi-cli/issues/1313) | 请求添加 Hooks 系统用于通知和生命周期事件 | 🔴 OPEN | 可扩展性：长任务运行时需要外部通知机制 | 自动化/集成场景刚需 |

---

## 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 功能/修复内容 | 影响面 |
|---|------|------|-------------|--------|
| [#1331](https://github.com/MoonshotAI/kimi-cli/pull/1331) | chore: bump version to 1.17.0 | ✅ CLOSED | 版本发布：同步更新 CHANGELOG、文档（MCP 状态/ACP 认证） | 全量用户 |
| [#1329](https://github.com/MoonshotAI/kimi-cli/pull/1329) | feat: add auto context compress ability for agent | 🔵 OPEN | **ACC 自动上下文压缩**：Agent 自主决策压缩时机，延长任务连续性 | 长任务场景突破 |
| [#1328](https://github.com/MoonshotAI/kimi-cli/pull/1328) | Fix minor bugs in file tools and UI feedback | 🔵 OPEN | 文件工具修复：多编辑替换计数、行号校验、路径显示优化 | 代码编辑准确性 |
| [#1326](https://github.com/MoonshotAI/kimi-cli/pull/1326) | fix(ui): terminal resize fixes | 🔵 OPEN | 终端尺寸变化处理：SIGWINCH 信号、Rich 缓存清理、重绘机制 | 窗口管理/分屏用户 |
| [#1325](https://github.com/MoonshotAI/kimi-cli/pull/1325) | feat(ui): add video clipboard paste support | 🔵 OPEN | 视频剪贴板粘贴：支持 MP4/MKV/MOV 等 10 种格式自动识别 | 多媒体工作流 |
| [#1324](https://github.com/MoonshotAI/kimi-cli/pull/1324) | feat: add session logging | ✅ CLOSED | 结构化会话日志：`~/.kimi/sessions/` 审计与调试追踪 | 可观测性基建 |
| [#1322](https://github.com/MoonshotAI/kimi-cli/pull/1322) | feat(shell): show context token usage in status | ✅ CLOSED | 上下文用量可视化：状态栏百分比+数值显示 | 资源管理感知 |
| [#1318](https://github.com/MoonshotAI/kimi-cli/pull/1318) | feat(mcp): show MCP loading status | ✅ CLOSED | MCP 加载状态事件：解决连接等待期的用户焦虑 | 首次体验优化 |
| [#1317](https://github.com/MoonshotAI/kimi-cli/pull/1317) | feat: add session context export/import | ✅ CLOSED | 会话迁移基础设施：跨设备工作流连续性 | 多设备用户 |
| [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) | feat(http): enable trust_env in aiohttp.ClientSession | 🔵 OPEN | 代理环境变量信任：企业网络/代理场景兼容 | 企业部署 |

---

## 功能需求趋势

基于 15 条 Issues 分析，社区关注聚焦五大方向：

```
┌─────────────────────────────────────────────────────────┐
│  1. 交互体验优化  ████████████████████  多行输入、Undo、   │
│     (35%)          方向键导航、Hooks 通知                │
├─────────────────────────────────────────────────────────┤
│  2. MCP 生态稳定  ██████████████████    超时处理、故障隔离 │
│     (25%)          连接管理、加载可视化                  │
├─────────────────────────────────────────────────────────┤
│  3. 任务生命周期  ████████████████      子代理管理、步骤   │
│     (20%)          上限配置、自动压缩                    │
├─────────────────────────────────────────────────────────┤
│  4. Skills 管理   ██████████            本地技能版本、     │
│     (12%)          发现、删除机制                        │
├─────────────────────────────────────────────────────────┤
│  5. 可视化增强    ████████              Mermaid 图表、     │
│     (8%)           WebUI 富媒体                          │
└─────────────────────────────────────────────────────────┘
```

**关键洞察**：开发者从"能用"转向"好用"，对 IDE 级交互细节（如智能导航、Undo、状态感知）提出专业要求；同时 MCP 作为核心扩展机制，其稳定性直接影响生产力工具的可信赖度。

---

## 开发者关注点

### 🔴 高频痛点

| 问题 | 典型场景 | 紧迫度 |
|------|---------|--------|
| **MCP 单点故障** | 任一 MCP 服务异常即导致整个会话中断 | P0 |
| **升级兼容性** | 1.16→1.17 跨版本出现启动/运行错误 | P0 |
| **环境变量污染** | 系统内核变量未隔离导致服务失效 | P1 |
| **长任务中断** | 100 步上限+无法恢复，重复劳动成本高 | P1 |

### 🟡 体验诉求

- **Undo 机制**：代码修改后的安全回退（对比 OpenCode）
- **子代理可见性**：[#1312](https://github.com/MoonshotAI/kimi-cli/issues/1312) 提出的多会话切换（2-9 键快捷访问）
- **跨平台一致性**：终端尺寸变化、主题适配（Ghostty light 主题可读性 [#1301](https://github.com/MoonshotAI/kimi-cli/issues/1301)）

### 🟢 生态期待

- **OpenClaw 能力下沉**：将 kimi.com 的 Heartbeat/Cron/Memories 引入 CLI（[#1309](https://github.com/MoonshotAI/kimi-cli/issues/1309)）
- **Hooks 系统**：集成外部通知服务（Slack/企业微信/邮件），实现"后台长任务-异步通知"工作流

---

*日报基于 GitHub 公开数据生成，关注 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) 获取最新动态*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-03-04

---

## 1. 今日速览

今日 OpenCode 发布 **v1.2.16** 补丁版本，重点修复认证 URL 处理和 Cloudflare AI Gateway 元数据转发问题。社区持续高度关注 **GitHub Copilot 集成缺陷**——大量用户报告代理请求被错误计为"用户请求"导致额度快速消耗，该 Issue 已积累 152 条评论成为历史热帖。同时，TUI 交互体验（鼠标选择、剪贴板、LaTeX 渲染）成为近期质量攻坚焦点。

---

## 2. 版本发布

### v1.2.16（2026-03-04）

| 类别 | 更新内容 |
|:---|:---|
| **认证修复** | 规范化 `auth login` URL 的尾部斜杠处理（@elithrar） |
| **TUI 升级** | OpenTUI 升级至 v0.1.86，默认启用 Markdown 渲染 |
| **模型适配** | 修复 Gemini 组合器 schema 的兄弟节点注入问题 |
| **提供商增强** | 向 Cloudflare AI Gateway 提供商转发元数据选项（@ryanskidmore） |
| **事件系统** | Bus 事件中克隆部分数据以避免引用问题 |

---

## 3. 社区热点 Issues

| 优先级 | Issue | 状态 | 核心问题 | 社区反应 |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | [#8030](https://github.com/anomalyco/opencode/issues/8030) Copilot 认证将过多请求标记为"user" | OPEN | **计费灾难**：60+ 代理发起的请求被错误计为高级用户请求，单次对话消耗半月额度 | 152 评论，50 👍，用户愤怒，要求紧急修复 |
| 🟡 **P1** | [#6918](https://github.com/anomalyco/opencode/issues/6918) qwen3-coder 无法调用 edit 工具 | OPEN | OpenRouter 的 qwen3-coder 模型持续报错 `oldString` 参数类型错误 | 28 评论，16 👍，影响主流模型使用 |
| 🟡 **P1** | [#9178](https://github.com/anomalyco/opencode/issues/9178) Copilot 认证后提示重新认证 | OPEN | OAuth 流程完成但模型调用失败，凭证状态不同步 | 18 评论，6 👍，新用户 onboarding 阻塞 |
| 🟡 **P1** | [#7048](https://github.com/anomalyco/opencode/issues/7048) 复制文本功能失效 | OPEN | GhostTTY + Ubuntu 环境下"已复制"提示但实际未写入剪贴板 | 13 评论，5 👍，基础交互体验受损 |
| 🟡 **P1** | [#13469](https://github.com/anomalyco/opencode/issues/13469) GPT-5.3-Codex-Spark 模型不支持 | OPEN | Codex + ChatGPT 账户组合被 OpenAI 拒绝 | 13 评论，企业用户受阻 |
| 🟢 **P2** | [#15760](https://github.com/anomalyco/opencode/issues/15760) VS Code 终端鼠标选择极不可靠 | **CLOSED** | 拖拽选择多数情况下无法注册，需多次重试 | 8 评论，已关闭但反映 TUI 交互债务 |
| 🟢 **P2** | [#8549](https://github.com/anomalyco/opencode/issues/8549) Web 版无法离线/企业内网使用 | OPEN | 依赖 app.opencode.ai，无法自托管 | 7 评论，6 👍，企业部署 blocker |
| 🟢 **P2** | [#1573](https://github.com/anomalyco/opencode/issues/1573) 请求增加 ASK MODE 省 token | OPEN | 简单问候消耗 17.7K token，希望纯对话模式禁用工具 | 7 评论，成本敏感用户强烈需求 |
| 🟢 **P2** | [#14194](https://github.com/anomalyco/opencode/issues/14194) 本地+Docker 共享配置导致数据库损坏 | OPEN | SQLite 并发访问冲突，会话崩溃 | 6 评论，3 👍，容器化部署隐患 |
| 🟢 **P2** | [#11176](https://github.com/anomalyco/opencode/issues/11176) 官方 VS Code 扩展请求 | OPEN | 希望原生 IDE 集成替代 TUI | 5 评论，11 👍，生态扩展方向 |

---

## 4. 重要 PR 进展

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#15919](https://github.com/anomalyco/opencode/pull/15919) | @kesku | **OPEN** | **新增 Perplexity Agent API 提供商**：使用 `sdk.responses()` 替代默认 `sdk.llm()`，支持 Agent 模式 |
| [#15895](https://github.com/anomalyco/opencode/pull/15895) | @jlongster | **OPEN** | **工作空间集成重构**：重新设计 adaptor 接口，分离配置生成与工作树创建，为路由架构升级做准备 |
| [#15863](https://github.com/anomalyco/opencode/pull/15863) | @kitlangton | **OPEN** | **TUI 动画与交互大修**：工具调用 UI 显式变体化、时间轴动画优化、自动滚动稳定性、会话轮次展示美化 |
| [#14969](https://github.com/anomalyco/opencode/pull/14969) | @tristan-stahnke-GPS | **OPEN** | **Bedrock IAM 认证流**：替换通用 API Key 表单，支持访问密钥+密钥+区域表单及环境变量认证 |
| [#15899](https://github.com/anomalyco/opencode/pull/15899) | @zeke | **CLOSED** | **Cloudflare Markdown for Agents**：`Accept: text/markdown` 优先级提升，已合并 |
| [#15770](https://github.com/anomalyco/opencode/pull/15770) | @jerome-benoit | **OPEN** | **Task 点击导航修复**：`InlineTool` 新增 `onClick` 属性，完成任务可点击跳转 |
| [#15573](https://github.com/anomalyco/opencode/pull/15573) | @vglafirov | **OPEN** | **GitLab Duo Agent Platform 集成**：迁移至新无作用域 npm 包名，支持 DAP 工作流模型 |
| [#15908](https://github.com/anomalyco/opencode/pull/15908) | @prestonvanloon | **OPEN** | **可配置终端标题**：`terminal_title` 支持模板变量（`{project}`, `{agent}`, `{model}` 等） |
| [#9139](https://github.com/anomalyco/opencode/pull/9139) | @sauerdaniel | **OPEN** | **思考块可见性快捷键**：`Ctrl+I` 快速切换 reasoning block 显示，无需菜单导航 |
| [#15900](https://github.com/anomalyco/opencode/pull/15900) | @michaeldwan | **CLOSED** | **工作树会话修复**：项目 ID 缓存改用 git common dir，解决 worktree 重启后会话丢失 |

---

## 5. 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注焦点呈现四大方向：

| 趋势方向 | 热度 | 代表 Issue | 关键诉求 |
|:---|:---|:---|:---|
| **IDE 生态集成** | 🔥🔥🔥 | #11176 (VS Code 扩展)、#11653 (CodeCompanion 集成) | 超越 TUI 限制，嵌入主流编辑器工作流 |
| **成本与效率优化** | 🔥🔥🔥 | #1573 (ASK MODE)、#8030 (Copilot 计费) | 精细控制 token 消耗，区分"对话"与"执行"模式 |
| **企业级部署** | 🔥🔥 | #8549 (离线 Web)、#14194 (Docker 并发安全) | 内网可用、配置同步、高可用架构 |
| **模型生态扩展** | 🔥🔥 | #13486 (Cloudflare Markdown)、#14086 (PPQ.ai)、#15573 (GitLab Duo) | 快速接入新兴模型与代理平台 |

**新兴信号**：`text/markdown` 内容协商（#13486/#15899）代表 **Agent-Optimized Web** 趋势，OpenCode 正跟进 Cloudflare 提出的"为 AI 代理优化的 Markdown"标准。

---

## 6. 开发者关注点

### 🔴 高频痛点

| 问题域 | 具体表现 | 影响规模 |
|:---|:---|:---|
| **认证与计费** | Copilot 集成多环节故障（OAuth 状态、请求分类错误、模型可见性） | 付费用户核心流失风险 |
| **TUI 可靠性** | 剪贴板、鼠标选择、LaTeX 误渲染（`$` 符号）等基础交互缺陷 | 日常体验摩擦累积 |
| **状态管理** | 上下文压缩丢失对话（#14368）、工作树会话不可见、数据库并发损坏 | 数据安全与信任危机 |

### 🟡 能力缺口

- **模式区分**：强烈需求"轻量询问模式"（ASK MODE）与"全功能代理模式"解耦
- **可观测性**：缺乏对 token 消耗、工具调用链路的透明展示
- **扩展机制**：MCP/工具配置迁移成本高，生态锁定感明显

### 🟢 积极信号

- 社区贡献活跃：Nix 构建、多语言文档（印尼语 #15912）、终端标题定制等边缘需求快速响应
- 架构层面开始偿还技术债务：Env 命名空间移除（#12822）、工作空间抽象重构（#15895）

---

*日报基于 github.com/anomalyco/opencode 公开数据生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-03-04

---

## 1. 今日速览

Qwen Code 发布 **v0.11.1** 稳定版，正式支持 **AGENTS.md 作为默认上下文文件**，并修复子代理系统提示词问题。社区 Issues 活跃度显著上升，Xcode 集成、流式 API 异常、中文路径解析等问题成为焦点，同时多语言 Insight 报告、Hooks 系统等重磅功能正在密集开发中。

---

## 2. 版本发布

### v0.11.1 正式版 & 预览版
| 版本 | 类型 | 核心更新 |
|:---|:---|:---|
| [v0.11.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.11.1) | 稳定版 | AGENTS.md 默认上下文支持、子代理系统提示词修复 |
| [v0.11.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.11.1-preview.1) | 预览版 | 同上 |
| [v0.11.1-nightly.20260303](https://github.com/QwenLM/qwen-code/releases/tag/v0.11.1-nightly.20260303.407a66c9) | 夜间版 | 同上 |

**关键变更解读：**
- **AGENTS.md 支持**（[#2018](https://github.com/QwenLM/qwen-code/pull/2018)）：项目根目录下的 `AGENTS.md` 将自动作为系统上下文加载，标准化 AI 代理配置流程
- **子代理修复**：`output-language.md` 正确附加至子代理系统提示词，解决多语言场景下的指令传递问题

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 核心问题 | 社区影响 |
|:---|:---|:---|:---|:---|
| [#643](https://github.com/QwenLM/qwen-code/issues/643) | Xcode 无法使用 qwen3-coder-plus | P1 | `[] is too short - 'tools'` 错误，Xcode 扩展工具调用参数校验失败 | **高频阻塞**：5 条评论，影响 macOS 开发者主流 IDE 集成 |
| [#2064](https://github.com/QwenLM/qwen-code/issues/2064) | 流式 API 异常终止 | - | `Model stream ended without finish reason`，HTTP 200 但空响应 | **稳定性痛点**： transient 错误影响生产环境可靠性 |
| [#2062](https://github.com/QwenLM/qwen-code/issues/2062) | AGENTS.md 未生效 | - | 新发布的 v0.11.1 功能存在实现缺陷，配置读取逻辑有误 | **新功能反馈**：发布当日即暴露，需紧急修复 |
| [#1924](https://github.com/QwenLM/qwen-code/issues/1924) | 上下文压缩失效 | - | 第二轮压缩 816k→815k 几乎无效果，llama.cpp + Qwen3-Coder-Next 场景 | **性能瓶颈**：长上下文场景成本敏感用户关注 |
| [#2066](https://github.com/QwenLM/qwen-code/issues/2066) | 中文数字混合路径解析失败 | - | CLI 在 `数字+中文` 路径间强制插入空格 | **本地化障碍**：中文开发者高频操作场景 |
| [#2058](https://github.com/QwenLM/qwen-code/issues/2058) | 编辑失败回退全量写入 | - | `apply_edit` 频繁失败，降级为 `write_file` 重写整个文件 | **体验退化**：代码审查成本激增，信任度下降 |
| [#2054](https://github.com/QwenLM/qwen-code/issues/2054) | Xcode 26 工具调用错误 | - | 与 #643 同源，Xcode 26 版本 `[] is too short - 'tools'` | **IDE 兼容性**：Apple 生态开发者阻塞 |
| [#2068](https://github.com/QwenLM/qwen-code/issues/2068) | 输入长度超限错误 | - | `Range of input length should be [1, 983616]`，内部错误码 -32603 | **边界处理**：超长输入场景缺乏优雅降级 |
| [#773](https://github.com/QwenLM/qwen-code/issues/773) | Termux (Android) 安装失败 | P3 | 平台识别为 "android" 失败，构建脚本损坏 | **移动端扩展**：社区已提供补丁，待官方合并 |
| [#2053](https://github.com/QwenLM/qwen-code/issues/2053) | Windows Markdown frontmatter 解析失败 | - | CRLF / UTF-8 BOM 导致自定义命令描述无法显示 | **跨平台一致性**：Windows 开发者体验受损 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心贡献 | 技术价值 |
|:---|:---|:---|:---|:---|
| [#2065](https://github.com/QwenLM/qwen-code/pull/2065) | 流式异常独立重试预算 | 🟡 Open | 为 `NO_FINISH_REASON` / `NO_RESPONSE_TEXT` 设计独立重试机制（5 次指数退避），分离 transient 重试与内容重试逻辑 | **可靠性提升**：解决 #2064 类 transient 错误 |
| [#2061](https://github.com/QwenLM/qwen-code/pull/2061) | Insight 多语言报告 | 🟡 Open | `/insight` HTML 报告支持 LLM 生成内容本地化，动态 UI 文本翻译 | **国际化**：回应 #2022，企业级部署必备 |
| [#1912](https://github.com/QwenLM/qwen-code/pull/1912) | Agent 协作竞技场 | 🟡 Open | 多模型并行执行同一任务（git worktree 隔离），结果并排对比合并 | **模型选型**：解决多模型配置下的决策困境 |
| [#2063](https://github.com/QwenLM/qwen-code/pull/2063) | ACP 协议官方 SDK 迁移 | 🟡 Open | 从自定义实现迁移至 `@agentclientprotocol/sdk`，移除 legacy `acp.ts` | **生态标准化**：对接 Zed 等编辑器生态 |
| [#1988](https://github.com/QwenLM/qwen-code/pull/1988) | Hooks 系统基础设施 | 🟡 Open | 12 种生命周期事件（PreToolUse/PostToolUse 等），CLI + UI 管理 | **扩展性**：插件化架构关键基石 |
| [#2000](https://github.com/QwenLM/qwen-code/pull/2000) | 并行工具调用执行 | 🟡 Open | `Promise.allSettled` 替代顺序循环，独立工具调用并发执行 | **性能优化**：工具密集型场景延迟降低 |
| [#2056](https://github.com/QwenLM/qwen-code/pull/2056) | 扩展安装符号链接处理 | 🟡 Open | 修复 `ENOTSUP: operation not supported on socket`（GitHub 仓库含目录软链场景） | **生态兼容**：解决 #2050 |
| [#2024](https://github.com/QwenLM/qwen-code/pull/2024) | 拒绝 PDF 防止会话损坏 | 🟡 Open | 源头拦截 PDF 文件，避免 base64 内联导致 API 400 错误 | **稳定性**：替代 #1838 的根治方案 |
| [#1817](https://github.com/QwenLM/qwen-code/pull/1817) | 容器环境 DNS 异步检测 | 🟡 Open | `host.docker.internal` 异步解析，code-server / WebIDE 自动降级 | **云原生**：容器化部署关键修复 |
| [#1830](https://github.com/QwenLM/qwen-code/pull/1830) | VS Code 设置 JSON Schema | 🟡 Open | `.qwen/settings.json` 自动补全、类型检查、内联文档 | **开发者体验**：配置即代码的 IDE 支持 |

---

## 5. 功能需求趋势

基于 20 条活跃 Issues 分析，社区关注焦点呈 **"四极分布"**：

```
┌─────────────────┐    ┌─────────────────┐
│  IDE 生态深度集成  │ ←→ │   企业级可靠性   │
│  (Xcode/Zed/VS) │    │ (重试/限流/审计) │
└─────────────────┘    └─────────────────┘
         ↑                      ↓
┌─────────────────┐    ┌─────────────────┐
│  智能体工作流标准化 │ ←→ │   本地化体验    │
│  (AGENTS.md/Skills)│   │ (中文/i18n/移动端)│
└─────────────────┘    └─────────────────┘
```

**具体方向：**

| 趋势 | 代表 Issue/PR | 成熟度 |
|:---|:---|:---|
| **AGENTS.md 生态标准化** | #2018, #2042, #2062 | 🔴 刚发布即遇实现问题，生态工具待对齐 |
| **IDE 原生集成** | #643, #2054, #1817, #2063 | 🟡 Xcode 阻塞性 Bug 待解，Zed/VS Code 推进中 |
| **多语言/国际化** | #2061, #2066, #2040 | 🟡 Insight 多语言 PR 就绪，中文路径解析待修 |
| **模型上下文优化** | #1924, #2051, #2052 | 🟢 压缩策略、上下文窗口、模型切换精细化配置 |
| **安全合规** | #2010 | 🟡 客户端密钥脱敏需求明确，待排期 |
| **移动端/边缘场景** | #773, #2046 | 🔴 Termux 补丁待合并，剪贴板图片粘贴体验待优化 |

---

## 6. 开发者关注点

### 🔴 阻塞性痛点（需立即响应）
1. **Xcode 集成断裂**：`tools` 参数校验错误（#643/#2054）影响 Apple 生态主力开发者
2. **v0.11.1 AGENTS.md 功能缺陷**：发布当日即反馈未生效（#2062），新功能信任度受损
3. **流式 API 稳定性**：transient 空流错误（#2064）生产环境不可接受

### 🟡 高频体验问题
| 场景 | 反馈密度 | 典型 Issue |
|:---|:---|:---|
| 中文路径/文件名处理 | 高 | #2066 |
| Windows 换行符兼容性 | 中 | #2053 |
| 编辑操作失败降级全量写入 | 中 | #2058 |
| 命令行 `@` 文件补全 | 中 | #2055 |

### 🟢 积极信号
- **社区贡献活跃**：Hooks 系统、Agent 竞技场、并行执行等重磅功能均由外部开发者主导
- **响应速度快**：#2044, #2042, #2060 等 Issues/PRs 24 小时内关闭/合并
- **生态扩展意愿强**：Termux 补丁、Skills 目录规范、MCP 协议等外围生态积极共建

---

*日报生成时间：2026-03-04 | 数据来源：github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*