# AI 开源趋势日报 2026-03-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-02 00:07 UTC

---

# AI 开源趋势日报 · 2026-03-02

---

## 第一步：AI 相关性筛选

**Trending 榜单过滤结果**：13 个项目中，**11 个为 AI 相关**，排除 2 个非 AI 项目：
- ❌ `basecamp/omarchy`（Linux 发行版）
- ❌ `microsoft/markitdown`（通用文档转换工具，无 AI 特性）

**主题搜索**：79 个项目全部为 AI/ML 相关，无需过滤。

---

## 第二步：分类体系

| 维度 | 定义 | 项目数 |
|:---|:---|:---|
| 🔧 AI 基础工具 | 框架、SDK、推理引擎、开发工具、CLI | 12 |
| 🤖 AI 智能体/工作流 | Agent 框架、自动化、多智能体、编排平台 | 14 |
| 📦 AI 应用 | 具体应用产品、垂直场景解决方案 | 6 |
| 🧠 大模型/训练 | 模型权重、训练框架、微调工具 | 8 |
| 🔍 RAG/知识库 | 向量数据库、检索增强、知识管理 | 10 |

---

## 第三步：趋势日报

### 1. 今日速览

今日 AI 开源领域呈现**"智能体基础设施"**爆发态势：字节跳动开源 `deer-flow` 超级智能体框架、阿里巴巴推出 `OpenSandbox` 通用沙箱平台，叠加 `ruflo` 等多智能体编排工具同日上榜，标志着**企业级 Agent 开发工具链**正在快速成熟。同时，`wifi-densepose` 以 4,539 今日 stars 的惊人增速，展示了**无视觉感知 AI** 这一新兴方向的巨大潜力。Claude Code 生态持续扩张，`superset` 等 IDE 集成工具涌现，AI 编程助手正从单点工具向**系统化开发环境**演进。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [ollama/ollama](https://github.com/ollama/ollama) | 163,787 | - | 本地大模型运行的事实标准，已支持 Kimi-K2.5、GLM-5、MiniMax 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 71,583 | - | 高吞吐 LLM 推理引擎，生产级部署的首选基础设施 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,190 | - | Rust 生态崛起的模块化 LLM 应用框架，填补系统级 AI 开发空白 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | 389 | +389 | **今日新热**：AI 智能体时代的 IDE，本地运行 Claude Code、Codex 等多智能体 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 3,834 | - | 面向系统工程师的 LLM 推理服务课程，Apple Silicon 上的 vLLM+Qwen 实战 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 766 | +766 | **今日新热**：Claude 生态领先的智能体编排平台，支持多智能体集群与分布式工作流 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 355 | +355 | **字节开源**：具备沙箱、记忆、工具、子智能体的超级智能体框架，支持分钟到小时级任务 |
| [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | 1,179 | +1,179 | **阿里开源**：面向 Coding Agent、GUI Agent、RL 训练的通用沙箱平台，多语言 SDK 支持 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 79,287 | - | 让网站对 AI 智能体可访问，浏览器自动化的事实标准 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 68,369 | - | AI 驱动开发的开源标杆，代码生成与调试的端到端解决方案 |
| [trycua/cua](https://github.com/trycua/cua) | 12,783 | - | 计算机使用智能体的开源基础设施，支持 macOS/Linux/Windows 全桌面控制 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,014 | - | 集成 ~400 个 MCP 服务器的 AI 工作流自动化平台 |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 41,675 | - | 国产 CowAgent 超级助理，支持多平台接入与主动任务规划 |

#### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose) | 4,539 | +4,539 | **今日爆款**：仅用 WiFi 信号实现实时人体姿态估计与生命体征监测，零摄像头隐私保护方案 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 736 | +736 | **今日新热**：自托管 Grok 伴侣，支持实时语音聊天、Minecraft/Factorio 游戏交互的虚拟生命体 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 40,463 | - | 国产 AI 生产力套件，聚合 300+ 助手与自主智能体 |
| [X-PLUG/MobileAgent](https://github.com/X-PLUG/MobileAgent) | 190 | +190 | **今日新热**：阿里达摩院开源的强大多模态移动端 GUI 智能体家族 |
| [presenton/presenton](https://github.com/presenton/presenton) | 4,189 | - | 开源 AI 演示文稿生成器，Gamma/Beautiful AI 的替代方案 |
| [waoowaooAI/waoowaoo](https://github.com/waoowaooAI/waoowaoo) | 4,691 | - | 工业级 AI 影视生产平台，从短剧到真人电影的好莱坞标准工作流 |

#### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 157,195 | - | 模型定义框架的事实标准，覆盖文本/视觉/音频/多模态全领域 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 67,708 | - | 100+ LLM/VLM 统一高效微调框架，ACL 2024 收录 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 86,591 | - | 从零实现 ChatGPT 级 LLM 的权威教程，系统工程师必读 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 130 | - | 可靠、极简、可扩展的基础模型与世界模型预训练库 |
| [xuyang-liu16/VidCom2](https://github.com/xuyang-liu16/VidCom2) | 64 | - | EMNLP 2025 视频大模型推理加速，即插即用压缩方案 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 301 | - | X-Bit 量化驱动的端侧 LLM 推理，边缘 AI 部署利器 |

#### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 56,136 | - | 闪电级搜索引擎 API，为站点和应用提供 AI 混合搜索 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47,278 | - | 领先的文档智能体与 OCR 平台，RAG  pipeline 的核心基础设施 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 73,964 | - | 融合前沿 RAG 与智能体能力的检索增强生成引擎 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 12,760 | - | 6 行代码构建 AI 智能体记忆的知识引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 48,371 | - | AI 智能体的通用记忆层，跨会话长期记忆管理 |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 323 | +323 | **今日新热**：面向 24/7 主动式智能体（如 OpenClaw）的持久化记忆方案 |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | 10,206 | - | MLSys 2026：97% 存储节省的端侧 RAG，100% 隐私保护 |
| [khoj-ai/khoj](https://github.com/khoj-ai/khoj) | 32,742 | - | 自托管 AI 第二大脑，支持网络搜索、文档问答与深度研究 |

---

### 3. 趋势信号分析

**智能体基础设施军备竞赛白热化**。今日热榜中，字节 `deer-flow`、阿里 `OpenSandbox`、独立开发者 `ruflo` 同日涌现，形成**"框架-沙箱-编排"**三层架构的完整工具链。这标志着 AI 智能体开发正从 Demo 阶段进入**企业级生产就绪**阶段，沙箱安全、多智能体协作、长周期任务执行成为竞争焦点。

**无视觉感知 AI 开辟新赛道**。`wifi-densepose` 以单日 4,539 stars 的增速登顶，证明**射频信号驱动的环境感知**正在突破计算机视觉的垄断地位。该技术路线在隐私敏感场景（医疗监护、安防监控）具备不可替代性，可能催生"无摄像头智能空间"的新品类。

**Claude Code 生态形成平台效应**。`superset`、`everything-claude-code`、`learn-claude-code` 等工具围绕 Anthropic 的 CLI 产品构建衍生生态，类似早期 VS Code 插件经济的形成。这预示着**AI 编程助手正在从功能工具向操作系统级入口**演进，掌握核心交互层的厂商将获得生态定义权。

---

### 4. 社区关注热点

- **🔥 `wifi-densepose`** — 射频 AI 感知的里程碑项目，隐私友好型姿态估计可能重塑智能家居、健康监测的产品形态，技术路线具备高度差异化壁垒

- **🔥 `alibaba/OpenSandbox`** — 大厂开源的通用智能体沙箱，填补了 AI Agent 安全执行环境的标准化空白，Coding Agent 与 RL 训练的双场景设计显示阿里对 AGI 基础设施的长线布局

- **🔥 `bytedance/deer-flow`** — 字节跳动的超级智能体框架，"分钟到小时级任务"的定位直击当前 Agent 无法处理复杂长流程的痛点，与 OpenSandbox 形成潜在协同

- **🔥 `moeru-ai/airi`** — 虚拟生命体的情感计算探索，支持游戏交互与实时语音的"容器化灵魂"概念，代表 AI 陪伴向多模态、沉浸式体验的演进方向

- **🔥 `NevaMind-AI/memU`** — 24/7 主动智能体的记忆方案，针对 OpenClaw 等持续运行 Agent 的持久化需求，长期记忆管理正成为智能体"存活"的关键基础设施

---

*本报告基于 2026-03-02 GitHub 公开数据生成，趋势分析代表技术观察视角，不构成投资建议。*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*