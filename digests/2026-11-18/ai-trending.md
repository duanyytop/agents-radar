# AI 开源趋势日报 2026-11-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-18 03:49 UTC

---

# **AI 开源趋势报告 – 2026-11-18**

---

## **1. 今日亮点**

当前的 AI 开源生态正经历以智能体为中心的工具与基础设施的爆发式增长，**“智能体工作流”** 成为今日最热门的趋势。值得注意的是，**`obra/superpowers`** 突破 1,917 颗星，迅速崛起为领先的智能体技能框架，将开发方法论与可执行智能融为一体。与此同时，**`elementalsouls/Claude-BugHunter`** 获得 1,005 颗新星，凭借经过实战检验的技能组合包，在 LLM 驱动的红队测试与漏洞挖掘领域广受欢迎。**`google-labs-code/stitch-skills`** 与 **`copilotkit/copilotkit`** 的兴起，预示着对智能体技能和 AG-UI 协议的标准化日益成型，使得 Cursor、Claude Code、Gemini CLI 等工具间实现互操作性成为可能。这些进展反映出生态系统正在成熟：开发者不再仅仅构建模型，而是致力于打造智能、可组合且安全的智能体。

---

## **2. 按类别划分的顶级项目**

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [**NousResearch/hermes-agent**](https://github.com/NousResearch/hermes-agent) | Python | 264,262 | 一个自我演进的个人智能体，随用户成长而进化。其广泛采用反映了日常工作中对持久化、自适应 AI 伙伴的需求。 |
| [**career-ops-hq/career-ops**](https://github.com/career-ops-hq/career-ops) | JavaScript | 83,390 | 开源求职智能体，自动化简历评分、简历定制与申请追踪——支持本地运行或作为插件使用。在由 AI 驱动的职业流动性中具有极高实用性。 |
| [**zhayujie/CowAgent**](https://github.com/zhayujie/CowAgent) | Python | 47,982 | 轻量级、多模型、多通道个人 AI 助手，通过记忆与知识实现自我演化。一行安装即可快速原型开发。 |
| [**siyuan-note/siyuan**](https://github.com/siyuan-note/siyuan) | TypeScript | 47,272 | 注重隐私、自托管的知识工作区，支持人类与 AI 智能体协作——适用于长期认知增强场景。 |
| [**HKUDS/nanobot**](https://github.com/HKUDS/nanobot) | Python | 50,159 | 极简但功能强大的个人智能体，用于任务规划、工具执行与上下文感知推理——专为高效与低开销设计。 |
| [**codewhale-hq/Codewhale**](https://github.com/codewhale-hq/Codewhale) | Rust | 41,188 | 全开源编码智能体，基于 Rust 构建，具备完全透明性；支持跨智能体的任务拆分与模型无关设计。 |

### 🔧 AI 基础设施

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [**google-labs-code/stitch-skills**](https://github.com/google-labs-code/stitch-skills) | TypeScript | 350 | 与 Stitch MCP 服务器及主流编码智能体兼容的标准化智能体技能库。跨平台智能体互操作性的关键推手。 |
| [**CopilotKit/CopilotKit**](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,779 | 生成式 UI 与智能体的前端栈，由 AG-UI 协议驱动。可无缝集成 AI 到网页与移动应用中。 |
| [**affaan-m/ECC**](https://github.com/affaan-m/ECC) | JavaScript | 305,642 | 智能体引擎的性能优化系统——支持安全、内存管理、本能机制与研究优先开发，覆盖 Claude Code、Codex 等平台。 |
| [**alibaba/open-code-review**](https://github.com/alibaba/open-code-review) | Go | 763 | 混合代码审查工具，结合确定性流水线与 LLM 智能体。在阿里巴巴规模下构建，支持 NPE、XSS、SQLi 及多语言规则集。 |
| [**Tencent/LoopForge**](https://github.com/Tencent/LoopForge) | Go | 591 | 自托管的工作流编排器，专为 AI 编码智能体（CodeBuddy、Codex、Claude）设计。支持本地执行并设置人工审批节点——对企业控制至关重要。 |

### 🔍 RAG / 知识

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [**thedotmack/claude-mem**](https://github.com/thedotmack/claude-mem) | TypeScript | 118,034 | AI 智能体的持久会话记忆系统——利用 AI 压缩上下文，并将相关历史注入未来会话。兼容 Claude Code、Copilot 等。 |
| [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) | Go | 94,345 | 从原生智能体视角演进的 RAG 引擎，已发展为完整的上下文基础设施——支持大规模动态知识检索、存储与推理。 |
| [**mem0ai/mem0**](https://github.com/mem0ai/mem0) | Python | 69,152 | 为智能体提供即插即用的记忆层——实现持久化、生产就绪的上下文管理，开销极小。 |
| [**headroomlabs-ai/headroom**](https://github.com/headroomlabs-ai/headroom) | Python | 79,934 | 在输入大模型前压缩工具输出、日志与 RAG 块——编码场景减少 20% 令牌，JSON 场景最高减少 95%，不损失准确性。 |
| [**Graphify-Labs/graphify**](https://github.com/Graphify-Labs/graphify) | Python | 149,725 | 通过本地 AST 解析将代码库转化为可查询的知识图谱——无需向量存储，每个边均有解释。 |

### 🧠 LLM / 训练

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [**jingyaogong/minimind**](https://github.com/jingyaogong/minimind) | Python | 192 | 在两小时内从零训练一个 6400 万参数的 LLM——适合研究人员与爱好者在消费级硬件上快速实验。 |
| [**skyzh/tiny-llm**](https://github.com/skyzh/tiny-llm) | Python | 5,752 | 在 Apple Silicon 上学习 LLM 推理——构建小型 vLLM + Qwen 堆栈。专为系统工程师与边缘部署爱好者设计。 |
| [**ollama/ollama**](https://github.com/ollama/ollama) | Go | 187,451 | 本地运行 Kimi、GLM、DeepSeek、Qwen、Gemma 等模型。因易用性与广泛的模型支持，社区采纳势头强劲。 |
| [**f/prompts.chat**](https://github.com/f/prompts.chat) | MDX | 177,763 | 社区驱动的提示词仓库（前身为 Awesome ChatGPT Prompts）——支持自托管并保障隐私。对提示工程工作流至关重要。 |

### 📦 AI 应用

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [**dream-num/univer**](https://github.com/dream-num/univer) | TypeScript | 1,774 | 使用 Univer SDK 打造属于自己的 AI 办公室——将编辑、计算、协作与文件处理能力集成到产品中，服务于人类与智能体。 |
| [**hugohe3/ppt-master**](https://github.com/hugohe3/ppt-master) | Python | 77,995 | 将文档或主题自动转换为带动画、图表、过渡效果与语音旁白的原生 PowerPoint 演示文稿——完美适用于自动化内容创作。 |
| [**ZhuLinsen/daily_stock_analysis**](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,132 | LLM 驱动的多市场股票分析系统，支持实时新闻、决策仪表盘与零成本定时运行——零售交易员的理想选择。 |
| [**TauricResearch/TradingAgents**](https://github.com/TauricResearch/TradingAgents) | Python | 122,985 | 基于 LLM 实现策略生成与市场模拟的多智能体金融交易框架——正成为算法金融的关键平台。 |

> ✅ **注**：`sveltejs/svelte`、`getarcaneapp/arcane` 与 `backnotprop/plannotator` 等项目因属于通用型或开发工具类，无核心 AI 功能，故被排除。

---

## **3. 趋势信号分析**

今日数据清晰揭示了向 **以智能体为中心、模块化、可互操作的 AI 工具链** 的转型，标志着生态系统已超越单纯的模型访问阶段。`obra/superpowers`、`affaan-m/ECC` 与 `google-labs-code/stitch-skills` 等框架的爆炸式增长，表明对标准化、可复用“技能”与优化智能体引擎的需求持续上升——尤其是那些支持安全、记忆与跨平台兼容性的方案。这与近期 LLM 发布（如 Claude 3.5、GPT-4.5）所强调的智能体能力与长上下文推理高度契合。

一个新趋势浮现：**AG-UI 协议与 CopilotKit 堆栈** 正逐渐成为将智能体集成至前端的默认标准，推动更丰富、更具交互性的体验。与此同时，**RAG 与记忆系统** 正从简单的检索层演变为持久化、智能化的上下文引擎——`thedotmack/claude-mem` 与 `mem0ai/mem0` 的出现即是明证。这些项目解决了关键瓶颈：大模型上下文窗口限制。

尤为显著的是，**本地模型执行** 正通过 `ollama`、`tiny-llm` 与 `open-code-review` 等项目获得广泛认可，背后驱动力是隐私、成本与延迟的考量。这一转变表明开发者正从依赖云端的实验，转向自托管、可持续的 AI 工作流——尤其在企业与受监管环境中更为明显。智能体编排、本地推理与语义记忆的融合，预示着一个新时代的到来：**自主、私密、可组合的 AI 智能体**。

---

## **4. 社区热点聚焦**

- **[`obra/superpowers`](https://github.com/obra/superpowers)** — 当前增长最快的智能体框架（+1,917 颗星）；适合希望构建下一代智能体工作流的开发者，拥有结构化方法论。
- **[`affaan-m/ECC`](https://github.com/affaan-m/ECC)** — 智能体引擎的性能优化利器；对于安全高效扩展智能体负载至关重要。
- **[`thedotmack/claude-mem`](https://github.com/thedotmack/claude-mem)** — 持久化智能体记忆的领先解决方案；任何长时间运行或状态敏感的 AI 应用都不可或缺。
- **[`infiniflow/ragflow`](https://github.com/infiniflow/ragflow)** — 正演变为原生智能体的知识骨干；适合构建复杂动态 AI 系统的团队。
- **[`google-labs-code/stitch-skills`](https://github.com/google-labs-code/stitch-skills)** — 首个推动通用智能体技能标准化的重大举措；实现跨平台即插即用的智能体生态。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*