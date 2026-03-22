# AI 开源趋势日报 2026-03-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-22 00:08 UTC

---

# AI 开源趋势日报 | 2026-03-22

---

## 第一步：AI 相关性过滤

**Trending 榜单筛选结果**（9→5 个 AI 相关）：
| 项目 | 判定 | 理由 |
|:---|:---|:---|
| MoneyPrinterV2 | ❌ 排除 | 营销自动化工具，非 AI 核心技术 |
| systemd | ❌ 排除 | 系统服务管理器，与 AI 无关 |
| trivy | ❌ 排除 | 安全漏洞扫描工具，非 AI 专项 |
| **project-nomad** | ✅ 保留 | 离线 AI 生存计算机，含 AI 知识助手 |
| **opendataloader-pdf** | ✅ 保留 | PDF 解析为 AI-ready 数据 |
| **claude-hud** | ✅ 保留 | Claude Code 插件，AI 开发工具 |
| protobuf | ❌ 排除 | 通用序列化格式，非 AI 专项 |
| **vllm-omni** | ✅ 保留 | 多模态模型推理框架 |
| arnis | ❌ 排除 | Minecraft 地图生成工具，非 AI |

**主题搜索**：80 个项目全部保留（已按 topic 预筛选）

---

## 第二步：分类结果

| 维度 | 项目数量 | 主要来源 |
|:---|:---|:---|
| 🔧 AI 基础工具 | 18 | ollama, transformers, open-webui, vllm, claude-hud 等 |
| 🤖 AI 智能体/工作流 | 16 | dify, langchain, OpenHands, browser-use, activepieces 等 |
| 📦 AI 应用 | 12 | project-nomad, chatgpt-on-wechat, cherry-studio, AionUi 等 |
| 🧠 大模型/训练 | 15 | LlamaFactory, unsloth, LLMs-from-scratch, faceswap 等 |
| 🔍 RAG/知识库 | 19 | ragflow, mem0, milvus, llama_index, PageIndex 等 |

---

## 第三步：趋势日报

### 1. 今日速览

今日 AI 开源领域呈现**"开发工具链深化"与"垂直场景落地"**双轨并进态势。Claude Code 生态爆发：两款插件（claude-hud、everything-claude-code）同时高热，显示开发者对 AI 编程可观测性的强烈需求。多模态推理基础设施 vllm-omni 登榜，标志着社区开始系统性支持端到端多模态部署。RAG 赛道持续火热，PageIndex 提出"无向量推理式 RAG"新范式，挑战传统向量检索架构。此外，离线 AI 生存设备 project-nomad 以 2032 星暴涨，揭示 AI 应用向极端场景渗透的新趋势。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架/推理/CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [ollama/ollama](https://github.com/ollama/ollama) | 165,801 | - | 本地大模型运行的事实标准，已支持 Kimi-K2.5、GLM-5、gpt-oss 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 73,877 | - | 高吞吐 LLM 推理引擎，生产环境部署首选 |
| [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni) | - | **+71** ⭐ | **今日登榜**：专为多模态模型（视觉-语言-音频）设计的高效推理框架 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | - | **+970** ⭐ | **今日爆款**：Claude Code 实时状态面板，解决 AI 编程"黑盒"痛点 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 128,155 | - | 最成熟的本地 LLM Web 界面，Ollama 生态核心组件 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 153,606 | - | 社区驱动的高质量 Prompt 库，组织级私有化部署支持 |

#### 🤖 AI 智能体/工作流（Agent/自动化）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [langgenius/dify](https://github.com/langgenius/dify) | 133,867 | - | 企业级 Agent 工作流平台，"AI 应用工厂"定位清晰 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 130,500 | - | Agent 工程化基础设施，工具链最完备的编排框架 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 69,506 | - | AI 驱动软件开发，端到端代码生成与调试 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 81,835 | - | 让 AI 代理能"看懂"网页并自动操作，浏览器自动化新标准 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,352 | - | 集成 ~400 个 MCP 服务器的 AI 自动化平台，Agent 与工具链的"超级连接器" |
| [trycua/cua](https://github.com/trycua/cua) | 13,209 | - | 计算机使用代理（Computer-Use Agent）开源基础设施，支持多 OS 沙箱 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 35,265 | - | 从零构建 Claude Code 类 Agent  harness，教育价值极高 |

#### 📦 AI 应用（垂直场景/产品）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | - | **+2032** ⭐ | **今日榜首**：离线生存 AI 计算机，极端场景下的知识+工具一体化设备 |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,351 | - | 多平台 AI 助理（CowAgent），支持主动思考、任务规划、长期记忆 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 41,998 | - | 300+ 助手的 AI 生产力工作室，统一接入前沿大模型 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 19,624 | - | 24/7 本地协同办公应用，聚合 Gemini CLI、Claude Code、Codex 等工具 |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | 9,937 | - | 工业级 AI 影视生产平台，从短片到真人电影的好莱坞标准工作流 |

#### 🧠 大模型/训练（微调/推理/学习）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 158,207 | - | 模型定义框架的事实标准，文本/视觉/音频/多模态全覆盖 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 88,921 | - | 从零实现 ChatGPT 级 LLM，最系统的 PyTorch 教程 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 68,843 | - | 100+ LLM/VLM 统一高效微调，ACL 2024 明星项目 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 57,353 | - | 本地模型训练与运行统一 Web UI，Qwen/DeepSeek/gpt-oss 支持 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 94,233 | - | Claude Code 性能优化系统：技能、记忆、安全、研究优先开发 |
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | 55,051 | - | 深度学习换脸工具，生成式 AI 经典应用 |

#### 🔍 RAG/知识库（检索/向量/记忆）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 75,725 | - | RAG+Agent 融合引擎，企业级上下文层构建 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 50,627 | - | AI Agent 通用记忆层，跨会话长期记忆 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47,844 | - | 文档代理与 OCR 平台，RAG  pipeline 核心基础设施 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,441 | - | 云原生高性能向量数据库，ANN 搜索规模化解法 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 22,508 | - | **"无向量 RAG"**：基于推理的文档索引，97% 存储节省 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 14,449 | - | 6 行代码构建 AI Agent 记忆知识引擎 |
| [memvid/memvid](https://github.com/memvid/memvid) | 13,543 | - | 无服务器单文件记忆层，替代复杂 RAG pipeline |
| [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | - | **+950** ⭐ | **今日登榜**：PDF 解析为 AI-ready 数据，自动化文档可访问性 |

---

### 3. 趋势信号分析

**开发工具链的可观测性革命**是今日最显著信号。claude-hud（+970⭐）与 everything-claude-code（94K⭐）共同指向：随着 AI 编程助手深度嵌入工作流，开发者迫切需要**理解 AI 的"思考过程"**——上下文使用、工具调用、代理状态的可视化成为新刚需。这与 Anthropic 近期 Claude Code 的广泛推广直接相关。

**多模态基础设施进入实用阶段**。vllm-omni 的登榜表明，社区不再满足于文本模型，开始系统性建设视觉-语言-音频统一的推理架构，为 GPT-4o 类原生多模态模型的开源替代铺路。

**RAG 范式出现分化**。PageIndex 提出的"无向量、纯推理"RAG 挑战了 Milvus/Qdrant 主导的传统架构，若 97% 存储节省的宣称属实，将重塑边缘设备与隐私敏感场景的检索方案。

**极端场景 AI 设备意外走红**。project-nomad（+2032⭐）将 AI 与离线生存结合，反映技术社区对"AI 韧性"（resilience）的前瞻关注——在地缘冲突、网络中断等场景下，本地化 AI 的知识储备价值被重新评估。

---

### 4. 社区关注热点

- **🔥 claude-hud** — [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud)  
  今日增速最高（+970⭐），解决 AI 编程核心痛点：代理在"做什么、用了多少上下文、哪些工具在运行"。预计引发 Claude Code 插件生态爆发。

- **🔥 project-nomad** — [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)  
  今日总增速冠军（+2032⭐）。离线 AI 生存计算机概念独特，融合知识库、工具集与硬件设计，可能开辟"AI 应急设备"新品类。

- **🔥 PageIndex** — [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)  
  "无向量 RAG"技术路线值得持续跟踪。若推理式检索在精度与效率上验证成功，将对向量数据库市场产生结构性影响。

- **🔥 vllm-omni** — [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni)  
  vLLM 官方多模态扩展，标志生产级多模态推理框架成熟。关注其与 Qwen2.5-VL、Kimi-VL 等开源多模态模型的集成进展。

- **🔥 activepieces** — [activepieces/activepieces](https://github.com/activepieces/activepieces)  
  ~400 MCP 服务器的集成规模惊人，成为 AI Agent 与工具生态的"超级枢纽"。MCP（Model Context Protocol）作为工具调用标准的确立速度超预期。

---

*报告生成时间：2026-03-22 | 数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*