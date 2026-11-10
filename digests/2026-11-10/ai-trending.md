# AI 开源趋势日报 2026-11-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-10 04:17 UTC

---

# **AI 开源趋势报告 – 2026-11-10**

---

## **1. 今日亮点**

AI 开源生态正迎来**以代理为中心的基础设施**的爆发式增长，*firecrawl*、*thedotmack/claude-mem* 以及 *mem0ai/mem0* 等项目引领了对持久化、上下文感知的代理记忆与网页数据访问需求的热潮。值得注意的是，*anthropics/skills* 与 *anthropics/claude-quickstarts* 迎来了巨大新关注，表明开发者对 Claude 代理生态系统的高度参与。轻量级、可自托管的代理（如 *Codewhale*、*nanobot* 与 *CowAgent*）的兴起，反映出人们对以隐私优先、本地优先为原则的 AI 工作流日益增长的偏好。与此同时，RAG 与知识管理工具也在快速成熟，*ragflow*、*PageIndex* 与 *Cognee* 正在成为构建智能、长期记忆系统的关键力量。

---

## **2. 按类别排名的顶级项目**

### 🔧 AI 基础设施（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,467 | 一个流行的本地 LLM 运行时，支持 Kimi、GLM、Qwen、Gemma 等模型。其迅速普及反映了向自托管模型部署转变的趋势。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 200,222 | 为 AI 代理提供零 API 费用的网页数据采集能力。其病毒式增长表明对可扩展、开源网页数据管道的需求正在上升。 |
| [graphify](https://github.com/Graphify-Labs/graphify) | Python | 145,109 | 使用确定性 AST 解析将代码库转化为可查询的知识图谱——非常适合代理推理与调试。 |
| [caveman](https://github.com/JuliusBrussee/caveman) | Go | 118,694 | 一种令牌优化工具，通过“caveman”风格简化使 LLM 输入减少 65%——在编码代理中广受欢迎。 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | MDX | 176,767 | 由社区驱动的提示词中心，替代专有集合；支持大规模私有、自托管提示共享。 |

### 🤖 AI 代理 / 工作流（代理框架、自动化、多代理系统）

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 187,975 | 基础代理框架，支持自主任务执行。仍是开发者构建代理工作流的首选。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 262,129 | 一种随用户交互自我进化的代理——正成为个人 AI 助手的标杆案例。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 81,518 | 一款开源求职代理，可自动完成简历定制、申请追踪与面试准备——对开发者极具实用性。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 110,669 | 使代理能跨 Twitter、Reddit、GitHub 与 YouTube 浏览整个互联网——零 API 成本，仅需一个 CLI。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 47,855 | 轻量、可扩展的个人代理，支持多模型与自我进化——适合爱好者与专业开发者。 |

### 📦 AI 应用（特定应用、垂直解决方案）

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 69,090 (+506) | 完全自动化、零成本的 LLM 驱动股票分析系统，支持实时新闻、仪表盘与推送提醒——在金融社区中迅速获得关注。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 75,332 | 将文档或主题一键转换为带动画、图表与旁白的原生 PowerPoint 演示文稿——彻底革新 AI 内容创作。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 121,672 | 一套基于 LLM 生成策略的多代理金融交易框架——代表了 AI 与量化金融的融合趋势。 |
| [Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 37,979 | “你的个人交易代理”——轻量、直观的系统，支持自动化、情绪感知的交易决策。 |

### 🧠 LLMs / 训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,579 | 支持超过 100 个模型与数据集的综合性 LLM 评估平台——对下一代 AI 性能基准测试至关重要。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,701 | 在 Apple Silicon 上构建极简 vLLM + Qwen 堆栈——非常适合在边缘设备上学习 LLM 推理的开发者。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,122 | 逐步实现类似 ChatGPT 的 LLM 的 PyTorch 实现——对基础 LLM 设计的教育与研究至关重要。 |
| [EgoAlpha/prompt-in-context-learning](https://github.com/EgoAlpha/prompt-in-context-learning) | Jupyter Notebook | 2,251 | 关于上下文学习与提示工程的精选资源——如今已成为高效使用 LLM 的必备内容。 |

### 🔍 RAG / 知识（向量数据库、检索增强生成、知识管理）

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,921 | 以代理为中心的 RAG 引擎，正演变为完整的上下文基础设施——支持大规模文档处理、分块与检索。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,720 | 为代理提供即插即用的记忆层，具备持久上下文——对长期任务执行与个性化至关重要。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 115,464 | 捕获并压缩代理会话历史，供未来交互复用——对 Claude 基础代理的连续性至关重要。 |
| [Cognee](https://github.com/topoteretes/cognee) | Python | 33,192 | 使用小型模型实现的开源 AI 记忆平台，免费——让代理的长期记忆民主化。 |
| [PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 40,323 | 无向量、基于推理的 RAG 系统，优先考虑逻辑推理而非嵌入相似性——知识检索的新范式。 |

---

## **3. 趋势信号分析**

今日数据揭示了一次**向以代理为核心开发的范式转变**：焦点已从独立模型转向**智能、持久且互联的代理**。*firecrawl*、*claude-mem* 与 *ragflow* 的爆炸式增长，表明对**持久上下文与真实世界数据访问**的需求已超越单纯的模型算力。这与 Anthropic 与 OpenAI 最近关于代理能力的公告相呼应，说明开发者正基于这些基础进行构建，而非等待其就绪。

一种新的**技术栈正在形成**：**本地 LLM + 代理框架 + RAG/记忆层 + 网页数据管道**。像 *ollama*、*AutoGPT*、*mem0* 与 *firecrawl* 这样的工具，共同构成了一个连贯的自托管代理生态系统——由隐私保护、成本控制与自主性驱动。尤为关键的是，**令牌效率**正成为核心指标（*caveman* 实现 65% 减少），反映出生产环境中对计算优化的压力。

**无向量 RAG**（*PageIndex*）与**自我进化记忆**（*Volcengine/OpenViking*、*Cognee*）的兴起，表明对知识管理的理解正在超越简单的嵌入。这些趋势预示着我们正进入一个**代理智能时代**，而不仅仅是生成式 AI——其中代理能够学习、记忆、推理并自主行动。

---

## **4. 社区热点**

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — AI 代理的首选开源网页数据管道；任何需要实时网络访问的项目都不可或缺。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 代理记忆的事实标准；任何持久化、持续演化的流程都必须集成。
- **[thepowerofdata/ragflow](https://github.com/infiniflow/ragflow)** — 正演变为全栈上下文引擎——适用于企业级 RAG 应用。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — 内容创作者与营销人员的杀手级应用；可瞬间将想法转化为精美演示。
- **[zchoi/Awesome-Embodied-Robotics-and-Agent](https://github.com/zchoi/Awesome-Embodied-Robotics-and-Agent)** — 精心整理的列表，突出展示 LLM 与物理代理的融合——面向未来且影响深远。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*