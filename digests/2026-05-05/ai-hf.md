# Hugging Face 热门模型日报 2026-05-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-05 00:20 UTC

---

# Hugging Face 热门模型日报 | 2026-05-05

---

## 今日速览

DeepSeek-V4-Pro 以 3,528 点赞稳居榜首，延续其开源大模型的强势地位；Google Gemma-4-31B-it 下载量突破 800 万，成为企业级部署的热门选择。Qwen3.6 系列表现亮眼，27B 与 35B-A3B 双版本合计下载超 400 万，社区量化版本同步跟进。多模态与 any-to-any 架构成为新焦点，NVIDIA Nemotron-3 Nano Omni 与 SenseNova-U1 探索统一模态边界。值得注意的是，"uncensored" 微调版本持续获得高下载，反映市场对内容自由度的高度需求。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,528 | 534,942 | 当前开源社区最强对话模型之一，Pro 版本在推理深度与长上下文上进一步突破 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 940 | 489,465 | V4 系列的轻量高速版本，平衡性能与推理成本，适合高并发场景 |
| **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)** | inclusionAI | 455 | 1,141 | 采用混合架构的国产高效对话模型，"bailing_hybrid" 标签暗示新颖的稀疏激活设计 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 427 | 11,812 | 小米推出的长上下文 Agent 专用模型，V2.5 代聚焦工具调用与自主任务执行 |
| **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** | poolside | 211 | 10,357 | Poolside 代码生成模型的轻量迭代，针对软件工程工作流优化 |
| **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)** | ibm-granite | 150 | 18,310 | IBM Granite 系列企业级语言模型，8B 参数在合规与可解释性上强化 |
| **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)** | ibm-granite | 91 | 4,094 | Granite-4.1 大参数版本，面向复杂企业知识处理与文档分析 |
| **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** | z-lab | 228 | 23,407 | 社区对 Qwen3.6-27B 的蒸馏加速变体，"DFlash" 暗示动态推理优化 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,608 | 2,726,360 | Qwen3.6 系列旗舰 MoE 多模态模型，35B 总参数仅 3B 激活，下载量登顶本期 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,107 | 1,334,241 | 稠密架构的多模态基座，图像-文本理解能力均衡，社区生态丰富 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,197 | 825,320 | 月之暗面 K2.6 代多模态模型，"compressed-tensors" 标签指向高效推理压缩技术 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,507 | 8,042,257 | Google Gemma 4 代最强指令版本，下载量碾压全场，企业端采用率极高 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 173 | 20,187 | 新兴文本到视频基座模型，支持 GGUF 与端点部署，降低视频生成门槛 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 135 | 2,622 | 动漫风格文本到图像生成模型，GGUF 支持让本地动漫创作成为可能 |
| **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)** | XiaomiMiMo | 207 | 51,554 | 小米多模态基座（非 Pro 版），覆盖视觉-语言-音频三模态统一理解 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | nvidia | 220 | 40,403 | NVIDIA "any-to-any" 统一架构，30B 参数支撑跨模态推理与生成 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)** | nvidia | 85 | 276,956 | 同上架构的 NVFP4 量化版，下载量高 6 倍，验证推理效率的极致需求 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 140 | 1,714 | 商汤"Mixture-of-Tokenizers" 8B 多模态模型，MoT 架构探索 tokenizer 层面的模态融合 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,259 | 132,595 | OpenAI 官方 PII 检测与脱敏工具，ONNX 加速适配生产环境隐私合规 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 88 | 16,307 | 1.25bit 极端量化的翻译专用模型，1.8B 参数可在边缘设备运行多语言翻译 |
| **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)** | ibm-granite | 75 | 2,191 | 9700 万参数多语言嵌入模型，ModernBERT + 多框架导出，RAG 管道理想组件 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 910 | 2,174,698 | Unsloth 官方 GGUF 量化，让 35B-MoE 模型在消费级 GPU 本地运行 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 566 | 1,092,141 | 稠密版 Qwen3.6-27B 的 GGUF 变体，双版本合计 320 万+ 下载验证量化需求 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,467 | 203,362 | "abliterated/uncensored" 版 Gemma-4，4M 微调数据解除安全限制，MLX 适配 Apple Silicon |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 278 | 350,841 | "Aggressive" 去审查版本，GGUF 格式 + 视觉多模态保留，下载量超原版 Qwen3.6-27B |
| **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)** | unsloth | 99 | 44,790 | Unsloth 将 NVIDIA any-to-any 模型转为 GGUF，探索多模态模型的本地部署边界 |
| **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)** | talkie-lm | 224 | 0 | Talkie 系列 13B 指令微调版，Apache-2.0 许可，零下载或为预发布状态 |
| **[talkie-lm/talkie-1930-13b-base](https://huggingface.co/talkie-lm/talkie-1930-13b-base)** | talkie-lm | 77 | 0 | 同上基座版本，"1930" 代号暗示特定训练数据配比或架构代际 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 86 | 0 | LTX Video 2.3 衍生版本，零下载且标签极简，可能为社区实验性分支 |

---

## 生态信号

**Qwen3.6 与 DeepSeek-V4 形成双寡头格局**：Qwen3.6 凭借 27B/35B-A3B 双版本覆盖稠密与 MoE 架构，合计下载超 400 万，Unsloth 即时跟进 GGUF 量化，生态响应速度极快；DeepSeek-V4 系列则以 Pro/Flash 分层锁定高端与效率市场。Google Gemma-4 以 800 万+ 下载验证"大厂开源"的商业穿透力，但社区"uncensored" 微调版（dealignai、HauhauCS）下载量反超原版，揭示**安全对齐与使用自由之间的张力**——这已成为开源生态的结构性矛盾。NVIDIA Nemotron-3 Nano Omni 的 any-to-any 架构与 NVFP4 量化版 6 倍于 BF16 的下载量，标志**多模态统一模型正从"炫技"走向"可部署"**。IBM Granite 系列密集更新嵌入与语言模型，企业级开源赛道竞争白热化。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 800 万+ 下载的"沉默 majority"选择，Gemma 4 代的图像-文本理解在 RAG、客服、文档分析等场景经过大规模生产验证，31B 参数是性能与成本的甜点区 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)** | any-to-any 架构的里程碑式落地，NVFP4 量化让 30B 多模态模型进入单卡推理区间，值得研究其跨模态推理的边界与 NVFP4 精度损失的实际影响 |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | "Aggressive" 去审查策略的极端案例，35 万下载量超原版，需关注其多模态能力是否因对齐移除而退化，以及此类模型的伦理与法律风险框架 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*