# AI 开源趋势日报 2026-04-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-04-02 00:10 UTC

---

# AI 开源趋势日报 | 2026-04-02

---

## 第一步：AI 相关性筛选

**Trending 榜单筛选结果**（7 → 6 个 AI 相关）：
| 项目 | 判定 | 说明 |
|:---|:---|:---|
| anthropic/claude-code | ✅ AI | Agentic 编码工具 |
| microsoft/VibeVoice | ✅ AI | 语音 AI 开源项目 |
| google-research/timesfm | ✅ AI | 时间序列基础模型 |
| luongnv89/claude-howto | ✅ AI | Claude Code 教程 |
| axios/axios | ❌ 排除 | 通用 HTTP 客户端 |
| openai/codex | ✅ AI | 终端编码 Agent |
| f/prompts.chat | ✅ AI | AI 提示词社区平台 |

---

## 第二步：分类体系

| 类别 | 涵盖范围 |
|:---|:---|
| 🔧 AI 基础工具 | CLI 工具、SDK、推理引擎、开发框架 |
| 🤖 AI 智能体/工作流 | Agent 框架、自动化、多智能体系统、MCP |
| 📦 AI 应用 | 具体产品、垂直场景、UI/UX 层 |
| 🧠 大模型/训练 | 模型权重、训练框架、微调、评估 |
| 🔍 RAG/知识库 | 向量数据库、检索增强、知识管理、记忆层 |

---

## 第三步：完整报告

### 1. 今日速览

今日 AI 开源领域呈现**"终端 Agent 工具爆发"**态势：Anthropic 的 Claude Code 以单日 **+10,749 stars** 登顶，OpenAI Codex 同日获得 **+2,390 stars**，两大顶级实验室的终端编码 Agent 形成直接竞争。微软开源 VibeVoice 进军语音 AI 前沿，Google TimesFM 持续巩固时序预测基础设施。社区生态层面，Claude Code 的教程、插件、记忆扩展项目迅速涌现，显示开发者对"自然语言驱动开发"的强烈需求。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | — | **+10,749** | Anthropic 官方终端 Agent 工具，支持代码理解、Git 工作流、自然语言命令，今日爆发登顶 |
| [openai/codex](https://github.com/openai/codex) | — | **+2,390** | OpenAI 轻量级终端编码 Agent，Rust 构建，与 Claude Code 正面竞争 |
| [ollama/ollama](https://github.com/ollama/ollama) | 166,702 | — | 本地大模型运行基础设施，已支持 Kimi-K2.5、GLM-5、MiniMax 等前沿模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 74,939 | — | 高吞吐 LLM 推理引擎，生产级 Serving 标准方案 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 131,968 | — | Agent 工程平台，从编排框架向"Agent 操作系统"演进 |
| [langgenius/dify](https://github.com/langgenius/dify) | 135,376 | — | 生产级 Agent 工作流开发平台，企业落地首选 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 46,394 | — | "Bash is all you need"——从零构建 Claude Code 类 Agent  harness，极简主义代表 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 130,942 | — | Agent harness 性能优化系统，涵盖技能、本能、记忆、安全与研究优先开发 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 85,516 | — | 让网站对 AI Agent 可访问，浏览器自动化的事实标准 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 70,383 | — | AI 驱动开发平台，端到端软件工程 Agent |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,511 | — | AI 工作流自动化，集成 ~400 个 MCP server，Agent 与 MCP 深度结合 |
| [trycua/cua](https://github.com/trycua/cua) | 13,353 | — | Computer-Use Agent 开源基础设施，支持 macOS/Linux/Windows 桌面控制 |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 11,532 | — | 企业级 Agent 安全沙箱环境，真实工具集成 |

#### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | — | **+1,685** | 微软开源前沿语音 AI，可能是对标 Sesame/GPT-4o 实时语音的新作 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 129,568 | — | 用户友好的 AI 界面，Ollama/OpenAI API 统一接入 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 42,724 | — | AI 生产力工作室，智能聊天 + 自主 Agent + 300+ 助手 |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,698 | — | CowAgent 超级 AI 助理，支持微信/飞书/钉钉/企微/QQ 全平台接入 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 155,987 | **+398** | 社区驱动提示词平台，支持私有化部署，今日 Trending  resurgence |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | — | **+3,301** | Claude Code 可视化教程，从基础到高级 Agent 的即插即用模板 |

#### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 158,653 | — | 模型定义框架，覆盖文本/视觉/音频/多模态，推理与训练统一 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 98,725 | — | 动态神经网络框架，AI 研究的基础设施基石 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 89,747 | — | 从零实现 ChatGPT 类 LLM，教育领域标杆项目 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,352 | — | 100+ LLM/VLM 统一高效微调（ACL 2024） |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 45,295 | — | 2 小时从零训练 64M 参数 GPT，大模型教育极简方案 |
| [google-research/timesfm](https://github.com/google-research/timesfm) | — | **+380** | Google 时间序列基础模型，时序预测领域的 "BERT" |

#### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 48,208 | — | 文档 Agent 与 OCR 平台，RAG 向 Agent 化演进 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,553 | — | 云原生高性能向量数据库，可扩展 ANN 搜索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 29,970 | — | 高性能大规模向量数据库，下一代 AI 向量搜索引擎 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 76,815 | — | RAG + Agent 融合引擎，构建 LLM 优质上下文层 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 51,705 | — | AI Agent 通用记忆层，跨会话长期记忆 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 14,848 | — | 6 行代码构建 AI Agent 记忆知识引擎 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 44,412 | — | Claude Code 记忆插件，自动捕获会话上下文并注入未来会话 |

---

### 3. 趋势信号分析（约 280 字）

**终端 Agent 工具进入"双寡头"竞争时代**：Anthropic Claude Code 与 OpenAI Codex 同日高热，标志着"自然语言驱动软件开发"从实验走向主流。两者均选择**终端（Terminal）**作为核心交互界面，而非 IDE 插件或 Web UI，反映开发者对**工作流无缝集成**的偏好——代码、Git、Shell 命令在同一上下文完成。

**技术栈信号**：Codex 采用 Rust 构建，Claude Code 基于 Shell/TypeScript，性能与可扩展性成为差异化焦点。社区迅速涌现 **Agent harness** 优化（everything-claude-code）、**记忆层扩展**（claude-mem）、**极简复现**（learn-claude-code）三类生态项目，显示开发者从"使用工具"转向"定制基础设施"。

**关联事件**：微软 VibeVoice 开源恰逢 GPT-4o 实时语音 API 扩展，语音 AI 开源化加速；Google TimesFM 持续更新巩固其在时序预测的基础设施地位。整体看，**2026 Q1 的"Agent 基建"浪潮**在 Q2 首日达到新高度，开发者注意力正从"模型能力"转向"工程化落地"。

---

### 4. 社区关注热点

- **🔥 Claude Code 生态爆发**  
  单日 +10,749 stars 创近期纪录，配套教程（claude-howto +3,301）、记忆插件（claude-mem）、性能优化框架（everything-claude-code）同步涌现，建议关注其 MCP 协议扩展能力。

- **⚔️ Codex vs Claude Code 技术选型**  
  Rust 构建的 Codex 在性能上有潜在优势，但 Claude Code 的先发生态更成熟。建议团队根据现有技术栈（Python/Node vs Rust）和 Anthropic/OpenAI API 偏好做决策。

- **🎙️ 语音 AI 开源化拐点**  
  微软 VibeVoice 入局，结合此前 Fish Speech、F5-TTS 等开源项目，实时语音合成/识别的开源方案正在逼近闭源商业产品，建议关注其与 WebRTC 的集成方案。

- **🧠 "Agent 记忆"成为独立赛道**  
  mem0、cognee、claude-mem 等项目显示，跨会话记忆正从 RAG 子功能演变为独立基础设施，长期记忆 + 上下文压缩是技术难点。

- **📊 时序基础模型持续演进**  
  Google TimesFM 保持活跃更新，金融、IoT、运维场景的时序预测需求推动该领域从统计模型向 Foundation Model 迁移，建议关注其与 LangChain/LlamaIndex 的集成案例。

---

*报告生成时间：2026-04-02*  
*数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*