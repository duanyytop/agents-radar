# AI 开源趋势日报 2026-04-03

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-04-03 00:11 UTC

---

# AI 开源趋势日报 | 2026-04-03

---

## 第一步：AI 相关性筛选

**Trending 榜单筛选结果**（4进3）：
| 项目 | AI相关性 | 判定 |
|:---|:---|:---|
| openscreen | ❌ 录屏工具 | 排除 |
| **oh-my-codex** | ✅ AI 编程助手增强框架 | **保留** |
| **system_prompts_leaks** | ✅ 大模型系统提示词研究 | **保留** |
| sherlock | ❌ 社交媒体 OSINT 工具 | 排除 |

**主题搜索**：80 个项目全部为 AI/ML 相关，全部保留。

---

## 第二步：分类体系

| 维度 | 项目数量 | 核心特征 |
|:---|:---|:---|
| 🔧 AI 基础工具 | 18 | 框架、SDK、推理引擎、CLI 工具 |
| 🤖 AI 智能体/工作流 | 15 | Agent 框架、多智能体协作、自动化编排 |
| 📦 AI 应用 | 12 | 垂直场景产品、终端用户应用 |
| 🧠 大模型/训练 | 16 | 预训练、微调、评估、模型实现 |
| 🔍 RAG/知识库 | 19 | 向量数据库、检索增强、记忆层 |

---

## 第三步：完整报告

### 1. 今日速览

今日 GitHub Trending 呈现**AI 编程工具链爆发**态势：`oh-my-codex` 以 2867 新增 stars 登顶，标志着开发者对 Codex/Claude Code 等 AI 编程助手的**增强层生态**需求激增。同时，`system_prompts_leaks` 的持续热度（+306）反映社区对大模型**提示工程与对齐机制**的深度好奇。主题搜索侧，**Agent 基础设施**（MCP 协议、沙箱环境、记忆层）与**企业级 RAG** 成为 7 天活跃项目的两大主轴，显示 AI 应用正从原型走向生产就绪。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [**oh-my-codex**](https://github.com/Yeachan-Heo/oh-my-codex) | 2,867 | ⭐+2,867 | **今日最热**：为 Codex/Claude Code 添加 hooks、Agent 团队、HUD 等增强能力的开源框架，填补 AI 编程助手生态空白 |
| [**ollama**](https://github.com/ollama/ollama) | 166,846 | - | 本地大模型运行的事实标准，今日新增支持 Kimi-K2.5、GLM-5、MiniMax 等前沿模型 |
| [**vllm**](https://github.com/vllm-project/vllm) | 75,030 | - | 高吞吐 LLM 推理引擎，生产环境部署的核心基础设施 |
| [**langchain-ai/langchain**](https://github.com/langchain-ai/langchain) | 132,133 | - | 从"LLM 框架" rebranding 为"Agent 工程平台"，反映战略重心转移 |
| [**open-webui/open-webui**](https://github.com/open-webui/open-webui) | 129,714 | - | 支持多后端（Ollama/OpenAI API）的友好型 AI 界面，降低本地部署门槛 |
| [**firecrawl/firecrawl**](https://github.com/firecrawl/firecrawl) | 103,128 | - | AI Agent 的 Web 数据 API，解决 Agent 获取干净网页数据的核心痛点 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [**shareAI-lab/learn-claude-code**](https://github.com/shareAI-lab/learn-claude-code) | 47,223 | - | "Bash is all you need"——从零构建 Claude Code 风格 Agent  harness 的教学型项目 |
| [**everything-claude-code**](https://github.com/affaan-m/everything-claude-code) | 133,570 | - | Agent 性能优化系统，覆盖技能、本能、记忆、安全等全维度，支持 Claude Code/Codex/Cursor 全家桶 |
| [**activepieces/activepieces**](https://github.com/activepieces/activepieces) | 21,530 | - | 集成 ~400 个 MCP 服务器的 AI 工作流自动化平台，MCP 生态集大成者 |
| [**trycua/cua**](https://github.com/trycua/cua) | 13,365 | - | 计算机使用 Agent（Computer-Use Agent）的开源基础设施，提供跨平台沙箱与评测基准 |
| [**e2b-dev/E2B**](https://github.com/e2b-dev/E2B) | 11,552 | - | 企业级 Agent 安全运行环境，支持真实工具链的云端沙箱 |
| [**alibaba/OpenSandbox**](https://github.com/alibaba/OpenSandbox) | 9,698 | - | 阿里开源的 Agent 沙箱运行时，强调安全、快速、可扩展 |
| [**jackwener/opencli**](https://github.com/jackwener/opencli) | 11,479 | - | 将任意网站/Electron 应用/本地二进制文件转化为标准化 CLI，构建 AI Agent 的统一工具发现层 |

#### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [**siddharthvaddem/openscreen**](https://github.com/siddharthvaddem/openscreen) | 2,573 | ⭐+2,573 | ❌ 已排除：非 AI 相关（录屏工具） |
| [**langgenius/dify**](https://github.com/langgenius/dify) | 135,526 | - | 生产级 Agentic 工作流开发平台，从原型到部署的一站式解决方案 |
| [**CherryHQ/cherry-studio**](https://github.com/CherryHQ/cherry-studio) | 42,792 | - | 集成 300+ 助手的 AI 生产力套件，支持自主 Agent 与多模型统一接入 |
| [**zhayujie/chatgpt-on-wechat**](https://github.com/zhayujie/chatgpt-on-wechat) | 42,720 | - | 多平台超级 AI 助理（CowAgent），比 OpenClaw 更轻量，支持主动思考与任务规划 |
| [**iOfficeAI/AionUi**](https://github.com/iOfficeAI/AionUi) | 20,857 | - | 24/7 本地协作应用，支持 Gemini CLI、Claude Code、Codex 等主流 AI 编程工具的统一界面 |
| [**saturndec/waoowaoo**](https://github.com/saturndec/waoowaoo) | 10,762 | - | 工业级 AI 影视生产平台，从短片到真人电影的好莱坞标准工作流 |

#### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [**system_prompts_leaks**](https://github.com/asgeirtj/system_prompts_leaks) | 306 | ⭐+306 | 持续追踪提取 GPT-5.4/5.3、Claude Opus 4.6、Gemini 3.1 等前沿模型的系统提示词，提示工程研究的重要参考 |
| [**huggingface/transformers**](https://github.com/huggingface/transformers) | 158,707 | - | 多模态模型定义框架，文本/视觉/音频/多模态的统一基础设施 |
| [**rasbt/LLMs-from-scratch**](https://github.com/rasbt/LLMs-from-scratch) | 89,852 | - | 从零实现 ChatGPT 风格 LLM 的 PyTorch 教程，教育领域标杆项目 |
| [**hiyouga/LlamaFactory**](https://github.com/hiyouga/LlamaFactory) | 69,405 | - | 100+ LLM/VLM 统一高效微调框架（ACL 2024），国产化适配的重要工具 |
| [**jingyaogong/minimind**](https://github.com/jingyaogong/minimind) | 45,418 | - | 2 小时从零训练 64M 参数 GPT，大模型教育的最小可行实现 |
| [**open-compass/opencompass**](https://github.com/open-compass/opencompass) | 6,828 | - | 支持 100+ 数据集的 LLM 评测平台，覆盖国内外主流模型 |

#### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) | 76,942 | - | 融合前沿 RAG 与 Agent 能力的检索增强生成引擎，构建 LLM 优质上下文层 |
| [**mem0ai/mem0**](https://github.com/mem0ai/mem0) | 51,804 | - | AI Agent 的通用记忆层，解决长期上下文与个性化核心痛点 |
| [**thedotmack/claude-mem**](https://github.com/thedotmack/claude-mem) | 44,691 | - | Claude Code 专用记忆插件，自动捕获、压缩、注入会话上下文 |
| [**milvus-io/milvus**](https://github.com/milvus-io/milvus) | 43,582 | - | 云原生高性能向量数据库，可扩展 ANN 搜索的行业标准 |
| [**run-llama/llama_index**](https://github.com/run-llama/llama_index) | 48,243 | - | 从"RAG 框架"演进为"文档 Agent 与 OCR 平台"，定位升级 |
| [**meilisearch/meilisearch**](https://github.com/meilisearch/meilisearch) | 56,919 | - | 闪电般速度的 AI 混合搜索引擎，为站点和应用提供即插即用的搜索能力 |
| [**qdrant/qdrant**](https://github.com/qdrant/qdrant) | 29,996 | - | 高性能大规模向量数据库，下一代 AI 的向量搜索引擎 |
| [**topoteretes/cognee**](https://github.com/topoteretes/cognee) | 14,872 | - | 6 行代码构建 AI Agent 记忆的知识引擎，极简 API 设计 |

---

### 3. 趋势信号分析

**爆发性关注领域：AI 编程助手的"增强层"生态**

今日 `oh-my-codex` 的 2867 新增 stars 揭示了一个关键信号：开发者不再满足于原生 AI 编程工具（Codex、Claude Code、Cursor）的默认能力，而是迫切需要**可扩展的增强框架**——支持自定义 hooks、多 Agent 协作、HUD 可视化等高级功能。这与 2023-2024 年 VS Code 插件生态的爆发路径高度相似，标志着 AI 编程工具从"单点工具"向"平台化生态"演进。

**新兴技术栈：MCP 协议与 Agent 沙箱的工业化**

`activepieces`（~400 MCP 服务器）、`trycua/cua`（Computer-Use Agent 基础设施）、`alibaba/OpenSandbox` 等项目的活跃，表明 **Model Context Protocol (MCP)** 正快速成为 Agent 与外部工具交互的事实标准，而**安全沙箱**则从"可选组件"变为"生产必备"。这一趋势与 Anthropic 近期对 MCP 的官方推广、以及企业客户对 Agent 安全性的刚性需求直接相关。

**与行业事件的关联**

`system_prompts_leaks` 的持续热度与近期 GPT-5.4、Claude Opus 4.6、Gemini 3.1 等模型的密集发布形成呼应，社区对**大模型内部工作机制**（系统提示、对齐策略、能力边界）的研究兴趣达到新高。同时，`ollama` 对 Kimi-K2.5、GLM-5、MiniMax 的快速支持，反映开源社区对**中国大模型**的集成速度正在赶超传统欧美模型。

---

### 4. 社区关注热点

- **🔥 `oh-my-codex` —— AI 编程助手的"Oh My Zsh"时刻**
  类比 shell 生态的 Oh My Zsh，该项目有望成为 Codex/Claude Code 用户的首选增强框架，早期贡献者有机会定义插件标准。

- **🛡️ Agent 安全沙箱三足鼎立：`trycua/cua` vs `e2b-dev/E2B` vs `alibaba/OpenSandbox`**
  跨平台开源方案（cua）、企业级云服务（E2B）、大厂背书实现（OpenSandbox）形成差异化竞争，开发者需根据场景（本地开发/企业部署/云原生）选择。

- **🧠 `mem0` 与 `claude-mem` 的记忆层之争**
  通用记忆层（mem0）vs 专用记忆插件（claude-mem）代表两种产品哲学：横向平台化 vs 纵向深度优化，长期看可能走向融合或分层。

- **📡 MCP 生态的"App Store"效应**
  `activepieces` 集成 ~400 MCP 服务器预示：MCP 正在复制当年 HTTP API 生态的爆发路径，下一个关键节点是 MCP 服务器的发现、评级与 monetization 机制。

- **🎬 `waoowaoo` —— AI 影视生产的工业化尝试**
  从"AI 生成视频"（Runway/Pika）到"AI 影视工作流"的跃迁，标志着生成式 AI 进入专业内容生产领域，好莱坞标准 workflow 的开放化可能颠覆传统影视工业。

---

*报告生成时间：2026-04-03*  
*数据来源：GitHub Trending + GitHub Search API (7天活跃)*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*