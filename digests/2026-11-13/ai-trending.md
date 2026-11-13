# AI 开源趋势日报 2026-11-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-13 02:52 UTC

---

# **AI 开源趋势报告 – 2026-11-13**

---

## **步骤 1：筛选与 AI 相关的项目**

从 GitHub 趋势列表和话题搜索中，我们剔除了非 AI 项目（如通用工具 `nvm`、`nodejs`、`netdata`、`tesseract`、`siyuan`），并专注于具有明确 AI/ML 相关性的仓库。这包括代理框架、大语言模型推理引擎、RAG 系统、编程代理、模型评估平台、向量数据库以及 AI 应用工具包。

---

## **步骤 2：分类**

根据项目的主功能，将项目归入主要类别：

- **🔧 AI 基础设施**：SDK、CLI 工具、推理引擎、开发者工具链  
- **🤖 AI 代理 / 工作流**：代理框架、多代理系统、自动化流水线  
- **📦 AI 应用**：垂直领域应用（如金融、视频生成、求职）  
- **🧠 大语言模型 / 训练**：模型权重、训练框架、微调工具  
- **🔍 RAG / 知识**：检索增强生成、知识图谱、向量数据库  

---

## **步骤 3：输出报告**

### **1. 今日亮点**

开源 AI 生态系统正迎来爆发式增长，核心驱动力是 **以代理为中心的工具链与本地优先智能**，反映出对自主性、安全性与可定制化工作流的强烈需求。值得注意的是，*OpenAI 的 Codex Security* CLI 和 TypeScript SDK 近期人气飙升，标志着业界对 **AI 代理安全与合规性** 的关注日益加深。与此同时，*Meta 的 Astryx* 与 *Qwen Code* 正逐步成为统一、代理就绪的设计与开发环境，广受青睐。**多模型、多工具协同的代理**（如 *free-claude-code* 与 *ECC*）的兴起，反映了向灵活、开放生态系统的转变，有效规避了厂商锁定问题。这些发展共同指向一个成熟的开发栈：开发者更重视控制力、隐私保护与性能表现，而非单纯追求便捷。

---

### **2. 各类别顶级项目**

#### **🔧 AI 基础设施**

| 项目 | 语言 | 星标数（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 0 (+643) | OpenAI 新推出的 CLI 与 SDK，用于检测、验证并修复 AI 生成代码中的安全漏洞——对企业级采纳至关重要。快速成长反映出对 AI 安全性的日益担忧。 |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | C++ | 0 (+176) | 高性能大语言模型推理引擎，支持本地运行、GPU 加速的 Llama 3 等模型——是隐私导向型 AI 部署的关键推手。 |
| [meta/astryx](https://github.com/meta/astryx) | TypeScript | 0 (+1830) | Meta 推出的完全可定制、代理就绪的设计系统——融合 UI/UX 与 AI 工作流集成，面向构建 AG-UI 应用的开发者。 |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 0 (+298) | 开源的 AI 同事，配备专用浏览器、文件与工具——每项操作预先设定并记录。迈向可验证、可问责代理的基础一步。 |

#### **🤖 AI 代理 / 工作流**

| 项目 | 语言 | 星标数（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | TypeScript | 0 (+151) | 开源的终端内嵌编程代理——专为跨多个模型的无缝、实时代码生成与调试设计。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 302,058 | 优化 Claude Code、Codex 及其他代理在性能、内存、安全与研究方面的领先代理调度器。已成为高级代理工程的事实标准。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 262,992 | 自我演化的 AI 代理，随用户行为持续进化——强调长期学习、自适应技能与上下文记忆。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 82,238 | 开源的求职代理，可扫描招聘板、定制简历并追踪申请状态——支持本地运行，兼容 Codex、OpenCode，或作为插件使用。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 76,335 | 将文档自动转化为带动画、图表与语音旁白的原生 PowerPoint 演示文稿——非常适合由 AI 驱动的内容创作流程。 |

#### **🔍 RAG / 知识**

| 项目 | 语言 | 星标数（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 116,607 | 在代理会话间保持持久上下文——通过 AI 压缩历史，并注入相关上下文。兼容 Claude Code、Copilot 等。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,097 | 代理就绪的 RAG 引擎，正演变为完整的上下文基础设施——支持结构化数据、日志及动态知识更新。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,500 | 在输入大语言模型前压缩工具输出、日志与 RAG 数据块——编码量减少 20%（编程场景）、最高达 95%（JSON 场景），且不损失准确性。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,690 | 为 Claude Code 提供代码搜索 MCP——使整个代码库可作为代理上下文，显著降低幻觉风险。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,884 | AI 用文档处理平台——广泛应用于 RAG 流水线，现已集成至多个代理框架。 |

#### **📦 AI 应用**

| 项目 | 语言 | 星标数（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 142,968 | 通过 AI 工作流从关键词生成高质量短视频——内容创作者与营销人员的理想选择。具备病毒传播潜力。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 71,101 | 基于大语言模型的股票分析系统，整合实时新闻、决策仪表盘与自动化提醒——零成本、定时运行任务。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,117 | “Vibe-Trading”：个人化 AI 交易代理，可解读市场情绪并基于实时数据执行交易。 |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 0 (+415) | 通过终端、IDE 或浏览器免费使用 Claude Code、Codex、Pi 等工具——支持语音输入与符合服务条款的访问方式。 |

#### **🧠 大语言模型 / 训练**

| 项目 | 语言 | 星标数（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,589 | OpenCompass 是一个全面的大语言模型评估平台，支持 100+ 个数据集，覆盖推理、编码、安全与长上下文任务——对基准测试至关重要。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,728 | 在 Apple Silicon 上搭建极简 vLLM + Qwen 堆栈——适合系统工程师规模化学习大语言模型推理。 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | Python | 6,328 | 推崇“原子化”构建 AI 代理——模块化、可组合组件，支持可扩展的代理架构设计。 |
| [FonaTech/Project_Chronos](https://github.com/FonaTech/Project_Chronos) | Python | 207 | 通过前瞻预测与异步 DMA 预取实现零卡顿 MoE 推理——针对 SSD I/O 与低延迟大语言模型服务进行优化。 |

> ❌ *今日数据中无项目属于“大语言模型”类别（权重、基础模型）——多数为基于现有模型构建的框架或工具。*

---

### **3. 趋势信号分析**

当前开源 AI 场景呈现出明确的转向：**以代理为核心、注重安全与自托管智能**。像 *Codex Security*、*ECC*、*Headroom* 与 *Claude-Mem* 等项目的激增，表明生态系统正在成熟——开发者不再满足于黑箱式 AI 助手，而是要求透明度、控制权与可审计性。这一趋势与近期行业动向高度一致：OpenAI 本身对安全的强调，以及 Anthropic 推动负责任 AI 的努力，叠加日益严格的监管审查，共同推动了这一变革。

尤为值得注意的是，**多工具协同代理工具链**正成为主导主题——如 *free-claude-code* 与 *ECC* 允许用户通过单一界面串联多个模型（Claude、Codex、Gemini），打破厂商锁定，赋能混合型 AI 工作流。这反映了一个更广泛的潮流：**单体化 AI 平台的终结**，以及模块化、可组合代理堆栈的崛起。

此外，**本地优先推理**正获得越来越多关注——不仅出于隐私考量，也因成本效率与延迟降低。*llama.cpp* 与 *Tiny-LLM* 满足希望在设备端直接运行模型的开发者需求，而 *RAGFlow* 与 *Headroom* 则优化了数据流入路径。这些趋势预示着未来：AI 代理不仅是智能的，更是**稳健、高效且由开发者掌控的**。

---

### **4. 社区热点聚焦**

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – 性能优化与安全的终极代理调度器；任何严肃的代理开发者都不可或缺。  
- **[openai/codex-security](https://github.com/openai/codex-security)** – 保障 AI 生成代码安全的关键工具；企业级与生产环境下的必备项。  
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** – 解决代理中上下文丢失问题的核心方案；对长期运行、持续演化的 AI 工作流至关重要。  
- **[Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)** – 民主化高端 AI 工具的访问权限；适合无预算限制的爱好者与研究人员。  
- **[CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)** – 代表了 AI 同事的下一代形态：自主、可审计、资源感知——前端与全栈开发者值得深入探索。  

---

**报告结束**

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*