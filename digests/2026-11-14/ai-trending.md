# AI 开源趋势日报 2026-11-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-14 02:39 UTC

---

# **AI 开源趋势报告**  
*日期：2026-11-14*

---

## **1. 今日亮点**

AI 开源生态正迎来以智能体为中心的工具链和 RAG 基础设施的爆发式增长，背后是企业对智能化、自主化工作流日益增强的需求。阿里巴巴的 **open-code-review** 今日新增 +215 颗星，展示了一种融合大模型与智能体的混合代码审查系统，专为大规模企业级安全性和精确性而设计。与此同时，**affaan-m/ECC**、**f/prompts.chat** 以及 **firecrawl/firecrawl** 反映出社区对智能体性能优化、提示工程和网页数据访问的关注持续升温——这些正是下一代 AI 智能体的关键使能技术。值得注意的是，**ZhuLinsen/daily_stock_analysis**（71.7K 星）展现了由大模型驱动的垂直领域 AI 应用的兴起，将实时市场情报与自动化决策相结合。

---

## **2. 按类别划分的热门项目**

### 🔧 AI 基础设施
| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+215) | 经过实战检验的混合架构代码审查工具，结合确定性流水线与 LLM 智能体。支持多语言规则集（如 NPE、XSS、SQLi），并集成 OpenAI 与 Anthropic API，适用于大规模、可扩展的安全代码治理。 |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 0 (+751) | OpenAI 提供的 CLI 与 SDK，用于检测、验证和修复代码中的安全漏洞。专为开发者工作流集成而设计，可在 CI/CD 流水线中实现主动的 AI 驱动安全扫描。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,903 | 轻量级本地 LLM 运行器，支持 Kimi、GLM、DeepSeek、Qwen、Gemma 等模型。让开发者以极简配置在本地运行模型——对隐私优先的 AI 开发与实验至关重要。 |

### 🤖 AI 智能体 / 工作流
| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 302,498 | 智能体运行时性能优化系统，提升 Claude Code、Codex、Opencode 与 Cursor 的技能、记忆、直觉与安全性。其病毒式传播势头表明社区对智能体效率与鲁棒性的强烈需求。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 116,869 | 通过压缩并注入相关历史记录，实现跨会话的持久上下文。兼容多种模型（包括 Claude Code 与 Gemini），使长期智能体记忆变得可访问且实用。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 82,415 | 一款开源 AI 求职代理，可评分职位、定制简历、生成求职信并追踪申请状态——全部可在本地或通过 Codex、OpenCode 等 AI CLI 运行。个人 AI 自动化的强大范例。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 111,587 | 通过单一 CLI 使智能体具备全网可见能力，可读取并搜索 Twitter、Reddit、YouTube、GitHub 与 Bilibili——零 API 费用，完全自主。 |

### 📦 AI 应用
| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 71,676 | 由 LLM 驱动的多市场股票分析系统，整合实时新闻、市场数据与决策仪表盘。支持零成本定时运行——适合不依赖云服务却希望获得 AI 洞察的交易员。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 143,319 | 利用 AI 工作流从关键词自动生成高清视频。展现了生成式 AI 在内容创作中的快速增长趋势，尤其适用于社交媒体与营销团队。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,172 | “Vibe-Trading：你的个人交易助手”——轻量级、自托管的 AI 助手，支持策略开发、技术图表绘制与经济日历集成。 |

### 🧠 大模型 / 训练
| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,595 | 全面的大模型评估平台，支持超过 100 个数据集，涵盖知识、推理、编程、科学与安全等多个维度。对 GPT、Qwen、Gemini 等模型的基准测试至关重要，是研究与模型选型的必备工具。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,734 | 面向 Apple Silicon 构建的手把手大模型推理系统，指导系统工程师从零搭建 vLLM + Qwen 技术栈。非常适合边缘部署及深入理解底层大模型机制。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,369 | 逐步实现一个类似 ChatGPT 的大模型（基于 PyTorch）。是理解 Transformer 内部结构与训练动态最受欢迎的教育资源之一。 |

### 🔍 RAG / 知识库
| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,131 | 从智能体原生数据库演进而来的完整上下文基础设施。支持复杂文档结构与模式感知检索，实现动态、持久的 RAG 流水线。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 147,317 | 将代码库、文档、配置文件与 PDF 转换为可查询的知识图谱。采用确定性 AST 解析——无需向量存储——特别适合企业级 RAG 中的可审计性与可复现性。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,613 | 在输入大模型前压缩日志、文件与 RAG 块，使令牌使用量减少 20%（编程场景）至 95%（JSON 场景），同时保持回答质量。是成本与延迟优化的关键。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,691 | 为 Claude Code 设计的代码搜索 MCP，使整个代码仓库可作为上下文使用——无需手动索引，实现更深层次的代码理解。 |

---

## **3. 趋势信号分析**

今日数据揭示了明显的转向：**智能体原生工具链**与**上下文感知智能**，标志着行业已超越基础提示阶段，迈向成熟。**affaan-m/ECC** 与 **thedotmack/claude-mem** 的爆炸式增长，反映出社区对智能体性能、记忆与持久性的强烈需求——这些特性是构建可靠、长期运行的 AI 助手的核心。与此同时，**RAG 基础设施**正从简单的检索机制演变为完整的上下文管理系统，如 **infiniflow/ragflow** 与 **Graphify-Labs/graphify** 所示，它们更强调确定性与可解释性，而非黑箱式的向量相似度匹配。

一个显著的新方向是**智能体与网络的连接能力**，以 **Panniantong/Agent-Reach** 与 **firecrawl/firecrawl** 为代表，赋予智能体自主探索与操作公开数据的能力——这与 AutoGPT 以及 Claude 新增浏览器功能等近期进展遥相呼应。这反映了整个行业向**自主工作流执行**的演进趋势：AI 不再仅被动响应，而是主动搜集、分析并采取行动。

此外，**安全优先开发**正在兴起，**alibaba/open-code-review** 与 **openai/codex-security** 正成为将 AI 安全嵌入代码管线的关键工具。这些项目契合了日益增长的监管与企业对 AI 生成代码质量及漏洞暴露风险的关注。

---

## **4. 社区热点聚焦**

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – 增速最快的智能体优化框架；对于提升智能体可靠性、降低幻觉风险至关重要。
- **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)** – 实现智能体对完整代码库的感知能力——彻底改变 AI 与大型代码仓库交互的方式。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – 代码密集环境下的 RAG 革命性突破；通过确定性、可解释的解析消除对向量数据库的依赖。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** – 展现大模型如何被用于构建具有现实影响的垂直领域 AI 应用的典范——非常适合金融科技领域的初学者开发者。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** – 大模型多维度评估的行业标准工具；对研究人员与产品团队而言不可或缺。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*