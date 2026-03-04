# AI 开源趋势日报 2026-03-04

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-04 00:08 UTC

---

# AI 开源趋势日报 | 2026-03-04

---

## 第一步：AI 相关性过滤

**Trending 榜单筛选结果**（10→8个，排除2个非AI项目）：
| 项目 | 判定 | 说明 |
|:---|:---|:---|
| ruvnet/RuView | ✅ AI | WiFi 信号人体姿态估计 |
| K-Dense-AI/claude-scientific-skills | ✅ AI | Claude 科学技能 Agent |
| moeru-ai/airi | ✅ AI | 自托管 AI 伴侣 |
| CodebuffAI/codebuff | ✅ AI | 终端代码生成 |
| agentscope-ai/agentscope | ✅ AI | Agent 框架 |
| agentscope-ai/ReMe | ✅ AI | Agent 记忆管理 |
| LMCache/LMCache | ✅ AI | LLM KV Cache 加速 |
| superset-sh/superset | ✅ AI | AI Agent IDE |
| aquasecurity/trivy | ❌ 非AI | 安全漏洞扫描工具 |
| alibaba/OpenSandbox | ✅ AI | AI 应用沙箱平台 |

---

## 第二步：分类体系

| 项目 | 主分类 | 次分类 |
|:---|:---|:---|
| RuView | 📦 AI 应用 | 🔧 AI 基础工具 |
| claude-scientific-skills | 🤖 AI 智能体/工作流 | |
| airi | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| codebuff | 🔧 AI 基础工具 | |
| agentscope | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| ReMe | 🤖 AI 智能体/工作流 | 🔍 RAG/知识库 |
| LMCache | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| superset | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| OpenSandbox | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| ollama | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| transformers | 🧠 大模型/训练 | 🔧 AI 基础工具 |
| dify | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| langchain | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| open-webui | 📦 AI 应用 | 🔧 AI 基础工具 |
| vllm | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| OpenHands | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| LlamaFactory | 🧠 大模型/训练 | |
| browser-use | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| ragflow | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |
| chatgpt-on-wechat | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| cherry-studio | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| CopilotKit | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| activepieces | 🤖 AI 智能体/工作流 | |
| cua | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| E2B | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| waoowaoo | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| intentkit | 🤖 AI 智能体/工作流 | |
| OpenSandbox(ai-agent) | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| mem0 | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |
| llama_index | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |
| milvus | 🔍 RAG/知识库 | |
| qdrant | 🔍 RAG/知识库 | |
| chroma | 🔍 RAG/知识库 | |
| weaviate | 🔍 RAG/知识库 | |
| memvid | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |
| cognee | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |

---

## 第三步：完整报告

---

## 1. 今日速览

今日 AI 开源领域呈现**"Agent 基础设施"**与**"物理世界感知"**双主线爆发。WiFi 信号视觉化项目 RuView 以 4,419 星登顶 Trending，标志无摄像头感知技术获得社区高度关注；阿里 OpenSandbox 与 superset 等 Agent 运行环境工具同步热榜，反映开发者对"可控 AI 执行环境"的迫切需求。同时，Claude Code 生态持续繁荣，科学技能包与零配置工作流工具涌现，印证 2026 年 Q1 Agent 编程助手已成为开发者标配。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 4,419 | +4,419 | **今日最热**：用 WiFi 信号实现 DensePose 人体姿态估计，无需摄像头即可完成生命体征监测与存在检测，开创"射频视觉"新范式 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 632 | +632 | AI Agent 时代的 IDE，支持本地并行运行 Claude Code、Codex 等多款编程 Agent，解决多 Agent 协作与资源隔离问题 |
| [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | 5,360 | +1,150 | 通用 AI 应用沙箱平台，提供多语言 SDK 与统一 API，支持 Coding Agent、GUI Agent、RL 训练等场景的安全执行环境 |
| [ollama/ollama](https://github.com/ollama/ollama) | 163,964 | - | 本地大模型运行的事实标准，今日已支持 Kimi-K2.5、GLM-5、MiniMax 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 71,813 | - | 高吞吐、内存高效的 LLM 推理引擎，生产级 serving 的首选基础设施 |
| [LMCache/LMCache](https://github.com/LMCache/LMCache) | 135 | +135 | 最快的 KV Cache 层，通过缓存复用显著降低 LLM 推理延迟与计算成本 |
| [CodebuffAI/codebuff](https://github.com/CodebuffAI/codebuff) | 126 | +126 | 终端代码生成工具，将自然语言指令直接转化为可执行代码 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) | 798 | +798 | 面向科研、工程、金融的即用型 Agent 技能库，降低 Claude 在专业领域的落地门槛 |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | 112 | +112 | 强调"可观测、可理解、可信赖"的 Agent 构建框架，今日新增可视化运行能力 |
| [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | 49 | +49 | Agent 记忆管理工具包，解决长期记忆存储、检索与精炼的核心痛点 |
| [langgenius/dify](https://github.com/langgenius/dify) | 131,071 | - | 生产级 Agentic 工作流开发平台，支持从原型到部署的全生命周期 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 128,081 | - | Agent 工程平台的事实标准，持续迭代工具调用与多 Agent 编排能力 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 68,480 | - | AI 驱动软件开发，支持端到端的代码生成、测试与 PR 提交 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 79,486 | - | 让 AI Agent 可控浏览器，自动化完成网页任务 |
| [trycua/cua](https://github.com/trycua/cua) | 12,829 | - | Computer-Use Agent 开源基础设施，提供沙箱、SDK 与评测基准 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 832 | +832 | **现象级项目**：自托管 AI 伴侣，支持实时语音聊天、Minecraft/Factorio 游戏互动，目标实现 Neuro-sama 级别的虚拟主播能力 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 125,614 | - | 用户友好的 AI 界面，支持 Ollama 与 OpenAI API，本地部署的首选 UI |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 41,808 | - | CowAgent 超级 AI 助理，支持主动思考、任务规划、长期记忆，多平台接入 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 40,638 | - | AI 生产力工作室，集成 300+ 助手，统一访问前沿大模型 |
| [waoowaooAI/waoowaoo](https://github.com/waoowaooAI/waoowaoo) | 7,403 | - | 首家工业级 AI 影视生产平台，从短片到真人电影的好莱坞标准工作流 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 157,302 | - | 最先进的 ML 模型定义框架，覆盖文本、视觉、音频与多模态 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 67,824 | - | 统一高效的 100+ LLM/VLM 微调框架，ACL 2024 成果 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 86,842 | - | 从零实现 ChatGPT 类 LLM，PyTorch 逐步教程 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 193,963 | - | 开源机器学习框架的基石 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 97,901 | - | 动态神经网络与 GPU 加速的工业标准 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 74,102 | - | 领先的 RAG 引擎，融合前沿检索与 Agent 能力，构建 LLM 优质上下文层 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 48,568 | - | AI Agent 的通用记忆层，支持跨会话的长期记忆 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47,342 | - | 领先的文档 Agent 与 OCR 平台，RAG  pipeline 的核心组件 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,080 | - | 云原生高性能向量数据库，可扩展的 ANN 搜索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 29,242 | - | 下一代 AI 的高性能大规模向量搜索引擎 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 12,882 | - | 6 行代码实现的 AI Agent 记忆知识引擎 |
| [memvid/memvid](https://github.com/memvid/memvid) | 13,264 | - | Serverless 单文件记忆层，替代复杂 RAG pipeline，赋予 Agent 即时检索与长期记忆 |

---

## 3. 趋势信号分析

**爆发性关注类别：物理感知 AI 与 Agent 执行环境**

今日最显著的信号是 **RuView 的 4,419 星爆发**，该项目将 WiFi 信号转化为人体姿态估计，代表"无摄像头计算机视觉"这一新兴方向获得社区认可。这呼应了近期边缘 AI 与隐私计算的趋势——在无法部署摄像头的场景（医疗、家居、工业）中，射频信号成为 AI 感知的新模态。

**技术栈新动向：Rust 在 AI 基础设施的渗透**

RuView（Rust）、rig（Rust LLM 框架）、meilisearch/qdrant/chroma（Rust 向量数据库）共同印证 Rust 正在取代 Python 成为高性能 AI 基础设施的首选语言，尤其在推理引擎、向量检索、边缘计算等对延迟敏感的场景。

**与行业事件的关联**

Claude Code 生态的繁荣（claude-scientific-skills、superset、零配置工具）直接响应 Anthropic 近期对编程 Agent 能力的强化；阿里 OpenSandbox 的登榜则与国内"AI 代码执行安全"监管讨论密切相关，企业级沙箱需求从隐性变为显性。

---

## 4. 社区关注热点

- **🔥 RuView：WiFi "看" 人的技术突破** — 射频感知首次以高热度进入主流视野，关注其 DensePose 精度与隐私保护特性的实际表现，可能开启智能家居、健康监测的新产品形态

- **🛡️ OpenSandbox + superset：Agent 安全运行时代启幕** — 两个项目从不同角度解决同一问题：当 AI Agent 获得代码执行权限时，如何隔离风险。这是 2026 年企业采用 Agent 的前提条件

- **🎭 airi：虚拟陪伴的"神经主播"野心** — 明确对标 Neuro-sama，支持实时语音与游戏互动，观察其能否突破"玩具"定位，成为可商业化的 VTuber 基础设施

- **⚡ LMCache：推理成本的结构性优化** — KV Cache 复用是降低 LLM 推理成本的关键技术，关注其与 vLLM 等引擎的集成进展，可能显著改变云 AI 的经济模型

- **🧠 ReMe + cognee + memvid：Agent 记忆的模块化趋势** — 三个项目从不同维度解构"记忆"问题（管理、知识引擎、serverless 层），预示 2026 年 Agent 架构将从"单体智能"走向"可插拔认知模块"

---

*报告生成时间：2026-03-04*  
*数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*