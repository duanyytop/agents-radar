# AI 开源趋势日报 2026-11-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-11 02:12 UTC

---

# **AI 开源趋势报告 – 2026-11-11**

---

## **1. 今日亮点**

当前，AI 开源生态正迎来以“原生智能体工具链”为核心的爆发式增长，尤其体现在智能体工作流、上下文管理以及浏览器自动化等领域。值得注意的是，**anthropics/skills** 和 **addyosmani/agent-skills** 作为 AI 编码智能体的基础技能库，正迅速获得广泛采用，标志着智能体能力向模块化、可复用方向的转变。与此同时，尽管 **sherlock-project/sherlock** 本身并非基于 AI，但因其在社交媒体侦察等场景中被大规模使用而迅速走红，凸显了大语言模型（LLM）在数据采集管道中的深度集成趋势。**billion-context** 的兴起——一个支持上下文压缩、实现月度会话且节省 5 倍 token 的插件——反映出对可扩展长上下文 AI 系统的迫切需求。最后，**homeassistant-ai/ha-mcp** 与 **career-ops-hq/career-ops** 展示了智能体正逐步融入真实世界生产力工具，涵盖智能家居到求职辅助等场景。

---

## **2. 按类别划分的顶级项目**

### 🔧 AI 基础设施

| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | Python | 0 (+531) | Claude API 构建可部署应用的官方入门项目。快速采纳势头表明，2026 年后 Claude 模型发布后的开发者上手进程正在加速。 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | 0 (+780) | 用于 AI 智能体浏览器自动化的命令行工具。注重性能与安全——选用 Rust 体现了向高性能、生产级智能体工具链演进的趋势。 |
| [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | TypeScript | 0 (+375) | 上下文压缩插件，支持十亿级 token 会话，仅需原消耗 1/5 的 token。为长周期智能体的可扩展性带来突破性进展。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,583 | 支持 Kimi、Qwen、DeepSeek 等本地运行的 LLM 工具。自托管 AI 开发的核心基础设施，持续主导本地推理趋势。 |

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 300,838 | 面向 Claude Code、Cursor 等多模型的智能体框架，专注于性能优化。“研究优先”的开发理念使其成为下一代智能体工程的领先框架。 |
| [NouesResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 262,473 | 可随用户输入自我进化的智能体。凭借星标快速增长，社区信号强烈——正成为标志性个人智能体平台。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 110,925 | 使 AI 智能体具备全网视野：通过 CLI 读取 Twitter、Reddit、YouTube、GitHub 等内容。零 API 费用，适合成本敏感型开发者。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 81,765 | 开源的 AI 求职代理，可扫描招聘板、定制简历并追踪申请状态。支持本地运行或插件模式——对求职者极具实用价值。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 47,873 | 轻量级、多模型、多通道个人助手，支持自我演化。一行安装即可使用，非专家也能轻松上手。 |

### 📦 AI 应用

| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 75,663 | 将主题或文档一键生成带动画、图表和语音旁白的原生 PowerPoint 演示文稿。非常适合创作者与演讲者使用 AI 快速产出专业内容。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 69,578 | 基于 LLM 的股票分析系统，整合实时新闻、决策仪表盘与自动化提醒。零成本定时运行吸引量化开发者。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,011 | 利用 LLM 分析市场情绪与制定策略的个人交易代理。代表了 AI 驱动金融自动化日益增长的趋势。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,583 | 全面的 LLM 评估平台，覆盖 100+ 数据集与 20+ 模型。对于 2026 年后新模型的基准测试至关重要。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,713 | 针对 Apple Silicon 的设备端 LLM 推理系统。面向系统工程师——反映边缘侧模型部署兴趣的上升。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,206 | 使用 PyTorch 实现类 ChatGPT 的 LLM 的分步指南。仍是广大 AI 工程师学习者的最受欢迎资源之一。 |

### 🔍 RAG / 知识库

| 项目 | 语言 | 星标数（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 115,860 | 智能体持久化上下文引擎——压缩会话历史并注入相关记忆。兼容 Claude、Copilot、Gemini 等。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,978 | 原生面向智能体的 RAG 引擎，已演进为完整的上下文基础设施。支持大规模动态知识更新与检索。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,774 | AI 智能体的即插即用记忆层。专为生产环境设计，支持持久化、结构化的长期记忆。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,321 | 在送入 LLM 前压缩工具输出、日志与 RAG 块，token 消耗减少 20–95%。对编码智能体具有极高效率。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 41,966 | 自我演化的上下文数据库，统一智能体记忆、RAG 与技能体系。一种统一智能体认知的新范式。 |

---

## **3. 趋势信号分析**

今日数据清晰揭示了一个重大转向：从独立模型或玩具级应用，转向**原生智能体、可投入生产的工具链**。**agent-browser**、**billion-context**、**claude-mem** 等项目的激增，凸显出对强大、可扩展基础设施的迫切需求——这正是实现长时间、有状态 AI 交互的关键，也是真实世界部署的必要前提。这一趋势与 Anthropic 与 OpenAI 在 2026 年底宣布的扩展上下文窗口及智能体 API 完全一致。

一个显著的新趋势是**上下文压缩**已成为独立的技术类别：**billion-context** 与 **headroom** 代表了一类新型中间件，旨在优化 token 使用而不牺牲性能。这表明生态系统正在成熟，效率已不再只是附加考量，而是核心设计原则。

此外，**多智能体框架**（如 CowAgent、Hermes-Agent）与**垂直领域应用智能体**（如 career-ops、Vibe-Trading）的兴起，表明开发者正超越通用型助手，转向构建特定领域的自主工作流。**Rust** 与 **TypeScript** 在顶级智能体工具中的主导地位，也反映出对性能与网页原生集成的双重偏好。

最后，**MCP（模型控制协议）** 兼容工具的普及——如 **ha-mcp**、**openclaude** 与 **copilotkit**——表明标准化努力正在取得进展，很可能源于跨多种 AI 模型与平台间互操作性的日益增长的需求。

---

## **4. 社区热点**

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 当前最全面的智能体框架；适合构建高性能、研究导向型智能体的团队。其对“直觉”、“记忆”与“安全”的聚焦，树立了全新标杆。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 任何严肃的 Claude 基础智能体都不可或缺。其跨会话持久化与压缩上下文的能力，解决了长期工作流中的关键痛点。
- **[billion-context](https://github.com/ranxianglei/billion-context)** — 适合挑战长上下文 AI 边界的开发者：该插件可实现真正持续、长达一个月的会话，开销极低——非常适合科研与复杂推理任务。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — 从 RAG 引擎演进为完整上下文基础设施，代表了知识感知智能体的未来。完美适用于构建智能、自适应系统。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — AI 将想法转化为精美专业内容的典范案例。对教育工作者、营销人员与高管而言极具价值，可快速生成演示文稿。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*