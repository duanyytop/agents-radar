# AI 开源趋势日报 2026-11-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-16 02:22 UTC

---

# **AI 开源趋势报告 – 2026-11-16**

---

## **1. 今日亮点**

AI 开源生态正迎来以智能体为中心的工具链与工作流编排热潮，*AG-UI*、*plannotator* 以及 *Chrome DevTools for coding agents* 等项目正在推动人机交互的新标准。Google 的 *stitch-skills* 和 NVIDIA 的 *SkillEvaluator* 表明，可互操作、可评估的智能体技能正成为关注重点——这对构建可靠、生产级的 AI 工作流至关重要。与此同时，阿里巴巴的 *open-code-review* 与腾讯的 *LoopForge* 展现了企业在代码质量与交付流水线中实现大规模自动化的能力。值得注意的是，*GoogleChrome/modern-web-guidance-src* 反映出一项战略动向：将 AI 智能体与不断演进的 Web 最佳实践对齐，确保智能体行为具备未来适应性。

---

## **2. 按类别划分的顶级项目**

### 🔧 **AI 基础设施**
| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+247) | 面向编码智能体的标准化智能体技能库；兼容 Antigravity、Gemini CLI、Claude Code 与 Cursor。标志着基于技能的 AI 生态系统的兴起。 |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | 0 (+355) | 引入智能体-用户交互协议（Agent-User Interaction Protocol），实现 AI 智能体无缝集成至前端应用。由真实场景需求催生的基础性标准。 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+717) | 专为编码智能体优化的 Chrome DevTools——将调试、检查与交互能力直接引入智能体工作流。迈向开发者优先的 AI 工具链的重要一步。 |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 0 (+122) | 多层级框架，用于评估 AI 智能体技能，支持语义重叠检测与实时行为度量。对规模化部署中的可信度与可靠性至关重要。 |

### 🤖 **AI 智能体 / 工作流**
| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+988) | Univer Office SDK 允许开发者将 AI 驱动的协作、编辑与文件处理功能嵌入产品中。是构建原生 AI 办公体验的强大平台。 |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 0 (+866) | 一个集规划、标注、评审与反馈于一体的智能体工作区——一键完成所有操作。设计初衷是确保人类在智能体执行过程中始终参与其中。 |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 0 (+423) | 自托管的编码智能体工作流，通过脚本与人工审批节点协调 CodeBuddy、Codex 等工具。支持安全、可审计的 AI 交付流水线。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 303,882 | 智能体运行时性能优化系统——涵盖技能、直觉、记忆、安全与研究驱动设计。病毒式传播势头表明社区对强大智能体基础设施的强烈需求。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,091 | 为 AI 智能体注入实时网络数据能力。正在构建“超智能”的数据层——对动态、实时推理至关重要。 |

### 📦 **AI 应用**
| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 0 (+706) | 针对股票交易员的精选技能包——包含市场分析、技术图表绘制与策略开发。反映出垂直领域智能体应用日益增长的兴趣。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 143,835 | 通过自动化 AI 流水线从关键词生成高清短视频。展现了媒体与营销领域中 AI 驱动内容创作的爆炸式增长。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 72,539 | 基于大模型的多市场股票分析，支持实时新闻、决策仪表盘与零成本定时运行。是金融科技自动化领域的典范案例。 |

### 🧠 **大模型 / 训练**
| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,155 | 采用 Rust 编写的模块化、可扩展的大模型应用框架——适用于高性能、低延迟推理系统。正逐渐成为系统工程师的首选技术栈。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,744 | 在 Apple Silicon 上构建极小体积的 vLLM + Qwen——非常适合在边缘设备上学习大模型推理。兼具教育价值与实际部署意义。 |
| [EgoAlpha/prompt-in-context-learning](https://github.com/EgoAlpha/prompt-in-context-learning) | Jupyter Notebook | 2,253 | 聚合的上下文学习与提示工程资源——无需重新训练即可最大化大模型效能的关键。从业者必备资料。 |

### 🔍 **RAG / 知识**
| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,205 | 从传统 RAG 演进而来的原生智能体 RAG 引擎，已发展为上下文基础设施。支持跨会话的持久化、结构化知识存储——对长期智能体记忆至关重要。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 117,397 | 实现智能体会话间持久化上下文存储——压缩日志与输出，并将相关历史注入大模型提示。对提升生产力极具吸引力。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,760 | 在输入大模型前压缩工具输出、日志与 RAG 块——在代码场景中减少 20% 到 95% 的 token 消耗，同时保持回答质量。对成本优化至关重要。 |
| [OpenViking](https://github.com/volcengine/OpenViking) | Python | 42,279 | 自演化上下文数据库，统一智能体记忆、RAG 与技能体系。面向自主智能体的下一代架构。 |

---

## **3. 趋势信号分析**

当前数据清晰地揭示出一个关键转变：**以智能体为核心的基础架构**——不再局限于模型或工具本身，而是围绕它们的**生态系统**。AG-UI、stitch-skills 与 plannotator 等项目正预示着**标准化、可互操作的智能体协议**的诞生，这对可扩展性与跨平台兼容性至关重要。这一趋势与 Google（MCP）、Anthropic（Claude Code）和 Microsoft（CopilotKit）近期的布局遥相呼应，标志着从孤立的 AI 助手向集成化、可组合的智能体工作流的成熟转型。

一种新的技术栈正在成型：**智能体技能 → 智能体中枢（如 ECC、CopilotKit） → 上下文管理（如 claude-mem、headroom） → 网页与代码库检索（如 firecrawl、zilliztech/claude-context）**。这构成了一条连贯的链条，用于打造具备智能性、持久性与可问责性的智能体。

尤为值得关注的是，**企业级自动化**正获得广泛认可——阿里巴巴的 *open-code-review* 与腾讯的 *LoopForge* 反映出软件交付中对安全、可审计 AI 的强劲需求。同时，**垂直领域专用应用**（如交易、视频生成）的兴起表明，AI 正从通用工具走向专业化领域，背后是社区驱动的创新浪潮。

这一趋势与 GPT-5、Gemini 2.0、Qwen3 等先进大模型的发布高度一致，这些模型更强调推理能力、记忆机制与工具使用，使得强大的智能体基础设施不再是可选项，而是必需品。

---

## **4. 社区热点聚焦**

- **[AG-UI 协议](https://github.com/ag-ui-protocol/ag-ui)** — 将智能体嵌入 UI 的基础标准。开发者应尽早采用，以塑造未来的人机交互形态。
- **[stitch-skills](https://github.com/google-labs-code/stitch-skills)** — 在 Google 支持下，正成为技能互操作性的事实标准。任何智能体集成者都不可或缺。
- **[headroom](https://github.com/headroomlabs-ai/headroom)** — 在不损失准确率的前提下减少 token 消耗，是成本敏感型 AI 任务的颠覆性方案。非常适合扩展智能体流水线。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — 超越静态 RAG，迈向原生智能体上下文管理。是实现长期记忆与有状态智能体的关键项目。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — 实时网页数据访问是智能体获取最新情报的缺失环节。与其它智能体栈集成潜力巨大。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*