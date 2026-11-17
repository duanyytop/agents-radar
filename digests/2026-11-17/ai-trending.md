# AI 开源趋势日报 2026-11-17

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-17 04:44 UTC

---

# **AI 开源趋势报告 – 2026-11-17**

---

## **1. 今日亮点**

AI 开源生态正经历以“智能体”为中心的工具与基础设施爆发式增长，*智能体技能*、*记忆层* 和 *本地优先的 RAG* 成为关键主题。**NVIDIA/SkillEvaluator** 和 **Google-Labs-Code/stitch-skills** 等项目表明，对标准化、可评估智能体能力的需求正在快速上升。与此同时，**dream-num/univer** 与 **ag-ui-protocol/ag-ui** 展现了嵌入智能体的原生 AI 前端框架的崛起，推动用户体验向智能化演进。**Claude-BugHunter** 与 **claude-trading-skills** 的迅猛增长，反映出社区在安全与金融等高影响力领域对专用大模型应用的深度参与，其背后是真实场景下的实用价值驱动。

---

## **2. 按类别划分的顶级项目**

### 🔧 AI 基础设施

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 873 (+873) | 多层级智能体技能评估框架，包含质量门禁、合成数据集和实时行为测量——保障生产级智能体可靠性至关重要。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 529 (+529) | 一套兼容主流编码智能体（Claude Code、Gemini CLI、Cursor）的标准智能体技能库，促进跨生态系统的互操作性。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 951 (+951) | 混合代码审查工具，结合确定性流水线与 LLM 智能体，支持超过 10 种语言规则集（如 XSS、SQLi、NPE），已在阿里巴巴大规模实战验证。 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 841 (+841) | 针对 AI 编码智能体重构的 Chrome DevTools —— 通过 MCP 服务集成，实现浏览器自动化、调试与检查。 |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 367 (+367) | 面向编码智能体的本地视频编辑技能，集成 42 个 FFmpeg 工具，具备机器可读契约且无云依赖——适合注重隐私的工作流。 |

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 1,094 (+1,094) | 收录 82 项漏洞挖掘技能与 15 条斜杠命令，覆盖 24 类漏洞——面向 Claude Code 的企业级红队攻击套件。 |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 837 (+837) | 股票投资者的完整交易技能套件：技术分析、经济日历、筛选器、策略生成——全部由 Claude 驱动。 |
| [zchoi/Awesome-Embodied-Robotics-and-Agent](https://github.com/zchoi/Awesome-Embodied-Robotics-and-Agent) | — | 1,923 | 整合大模型与机器人技术的具身智能研究精选列表——聚焦物理智能体交互前沿成果。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 77,617 (+77,617) | 将文档或主题自动转化为带动画、数据图表与语音旁白的原生 PowerPoint 演示文稿——全自动 AI 演讲引擎。 |
| [CowAgent](https://github.com/zhayujie/CowAgent) | Python | 47,960 (+47,960) | 轻量级、可扩展的个人智能助手，具备任务规划、工具执行与自我进化能力，支持多模型、多通道部署。 |

### 📦 AI 应用

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [Dream-Num/univer](https://github.com/dream-num/univer) | TypeScript | 1,828 (+1,828) | Univer Office SDK 允许开发者构建定制化 AI 办公系统——将智能体嵌入协作文档编辑、计算与文件处理流程中。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 72,871 (+72,871) | 基于 LLM 的股票分析系统，支持实时新闻、多市场数据、决策仪表盘，零成本定时执行。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,393 (+38,393) | 个人交易智能体，通过分析市场情绪（“vibe”）执行交易并动态调整策略，全部基于 LLM 构建。 |
| [getarcaneapp/arcane](https://github.com/getarcaneapp/arcane) | Go | 46 (+46) | 现代化 Docker 管理工具，以易用性为核心设计，正被采用 AI 辅助容器编排的 DevOps 团队广泛采纳。 |

### 🧠 LLM / 训练

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,290 (+187,290) | 支持本地推理 Qwen、DeepSeek、Gemma、GLM 等模型——本地 LLM 运行的核心推动力。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 304,744 (+304,744) | 针对性能、安全性和内存优化的智能体运行时，专为 Claude Code、Opencode 与 Cursor 打造。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,411 (+202,411) | 为智能体设计的网页数据采集引擎——支持隐身浏览与丰富上下文提取，赋能超智能工作流。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,068 (+188,068) | 开创性项目，使智能体能够自主完成复杂任务全流程——智能体工作流设计的核心参考。 |

### 🔍 RAG / 知识

| 项目 | 语言 | 星标数（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 149,138 (+149,138) | 将代码库、文档与配置转化为可查询的知识图谱——无需向量存储；适用于确定性、可解释的 RAG 场景。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,275 (+94,275) | 演进为完整上下文基础设施的原生智能体 RAG 引擎——专为可扩展性与低延迟检索而设计。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 117,754 (+117,754) | 智能体持久会话记忆系统——压缩并注入相关上下文，提升交互连贯性与召回率。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,088 (+69,088) | 可即插即用的智能体记忆层——生产就绪，支持长期上下文保留与结构化知识存储。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 42,328 (+42,328) | 自演化上下文数据库，统一智能体记忆、RAG 与技能——实现无外部依赖的持续学习。 |

---

## **3. 趋势信号分析**

今日趋势数据揭示了一个明确转向：**以智能体为中心的开发范式**。此时，AI 不再仅是模型，而是作为嵌入式、持久化且可问责的执行实体深度融入工作流。最具爆发力的增长集中在**专业化智能体技能**上——而非通用模型。**Claude-BugHunter**、**claude-trading-skills** 与 **stitch-skills** 等项目每日星标激增，印证了这一趋势。这些项目标志着一种新的“插件经济”出现：开发者构建模块化、可评估、可复用的能力，专门服务于网络安全、金融、内容创作等领域。

一个显著转变是**本地优先、自托管智能体栈**的兴起。**Univer**、**OpenViking** 与 **ECC** 等项目强调隐私保护、自主控制与低延迟，与 OpenAI、Anthropic、Meta 最新发布的模型优先支持设备端推理与微调的趋势高度一致，反映出行业对去中心化 AI 的普遍信心。

此外，**MCP（模型控制协议）** 已成为基础技术栈，多个仓库（如 `chrome-devtools-mcp`、`zilliztech/claude-context`）围绕其构建。这预示着智能体与工具间通信正迈向标准化——这是实现互操作性与生态系统成熟的关键一步。

最后，**基于确定性知识图谱的 RAG**（如 Graphify、OpenViking）相比传统向量数据库更受青睐，反映出对透明度、可复现性与可审计性的日益增长需求——尤其在企业及受监管环境中。

---

## **4. 社区热点**

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** – 首个全面的智能体技能评估框架；在部署前验证真实世界智能体表现不可或缺。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – 提供完全确定性、可解释的向量式 RAG 替代方案——适用于安全关键系统。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – 性能优化的智能体运行时，已成为 Claude Code 与 Cursor 用户追求速度与安全的默认标准。
- **[dream-num/univer](https://github.com/dream-num/univer)** – 开创“AI 办公室 SDK”概念——开发者可轻松将智能体嵌入生产力应用，几乎无摩擦。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** – 通过安全的大规模网页数据采集，支撑下一代智能体的核心能力——是让 AI 接地气的关键。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*