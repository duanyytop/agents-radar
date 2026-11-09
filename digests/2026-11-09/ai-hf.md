# Hugging Face 热门模型周报 2026-11-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-09 02:04 UTC

---

### **今日亮点**  
Hugging Face 生态系统正迎来多模态与量化模型的爆发式增长，其中 **Lightricks/LTX-2.5** 以超过 260 万次下载和 1.1 万次点赞领跑，凸显了对高性能图像转视频生成的强大需求。**Qwen/Qwen3.8-27B** 在点赞数（19,419）和下载量（766 万）上均占据首位，进一步巩固了 Qwen 作为顶级多模态基础模型的地位。与此同时，社区驱动的 DeepSeek-V4 与 Qwen3.5 变体的 GGUF 格式及去审查化微调版本持续涌现，反映出本地推理与可定制大语言模型日益增长的兴趣。*图像转 3D*（如 *speridlabs/idol*）和 *视频编辑*（如 *Viggle/Viggle-Remake*）等专用流程的兴起，标志着生成能力已超越文本与静态图像，迈向成熟阶段。

---

### **热门模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,419 | 7,668,187 | 一款强大的多模态模型，在图文理解与对话任务中表现卓越；目前 Hugging Face 上下载量最高的模型之一。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,711 | 1,553,252 | 重度修改、去审查化的 Qwen3.8-27B GGUF 版本，专为本地推理与代码生成优化。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,538 | 1,548,621 | 针对 vLLM 与 Unsloth 加速优化的快速、高效 GGUF 变体，适用于低延迟推理。 |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,558 | 73,562 | 一个轻量但高效的 17 亿参数 LLM，具备出色的文本生成能力，适合边缘部署。 |

#### 🎨 多模态与生成（图像、视频、音频、文本转 X）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,137 | 2,661,026 | 基于扩散模型的顶尖图像转视频生成模型，运动连贯性与风格保真度极佳。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,761 | 1,167,959 | Flux-3 的 ComfyUI 兼容版本，聚焦高质量图像生成与编辑，支持对风格与结构的精细控制。 |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,726 | 76,804 | Qwen Image 2.1 的量化 GGUF 版本，支持本地快速文本转图像生成，兼容 ComfyUI。 |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 253 | 625,136 | 基于 Minimax-H3 的 ComfyUI 优化型文本转图像模型，以表达力强的风格和自定义工作流兼容性著称。 |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 516 | 1,083 | Pika 推出的新一代视频生成模型，基于 H3 架构，支持音视频合成与灵活场景控制。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 921 | 254,053 | 一个 40 亿参数的微调模型，专用于 Three.js 支持的 3D 内容创作，可实现从代码直接生成 3D 网格。 |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 275 | 33,641 | 专门生成 GLB 文件的变体，直接根据提示生成，特别适合游戏与 VR 开发者。 |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,394 | 22,854 | 利用高斯点云技术，从单张图像生成高保真 3D 资产的图像转 3D 模型，深受数字艺术家欢迎。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 858 | 7,088 | 一种高度激进的去审查化微调模型，融合 DeepSeek-V4 与 Qwen3.5，深受追求无限制行为的开发者青睐。 |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 391 | 130,020 | DeepSeek-V4.1-Flash 的 GGUF 量化版本，采用 GSQ 压缩与 RCO 优化，适用于本地推理。 |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,292 | 4,938 | 基于 MoE 的精简版 GGUF 模型，经神经架构搜索优化，兼顾效率与性能。 |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 187 | 136,706 | 小众但受欢迎的 GGUF 变体，采用 i1 量化，专注于推理速度与模块化设计。 |

---

### **生态信号**  
截至 2026 年 11 月，Hugging Face 生态系统明显转向 **本地化、高效化与高度专业化推理**，这由 GGUF 与量化模型的爆炸式增长所驱动。Qwen 与 DeepSeek 系列在各领域占据主导地位——尤其是 Qwen 3.8 与 3.5 系列，涌现出大量针对代码、3D 和多模态任务的微调与量化版本。**去审查化与“异端”变体** 的兴起，反映了用户对不受限行为的需求，尤其在创意与开发工作流中。值得注意的是，**可组合流程** 正日益流行：像 *LTX-2.5*、*Flux-3* 与 *P-H3-Image-Comfy* 这类模型明确设计为集成至 ComfyUI 等工具链，标志着从单一模型向模块化 AI 组件的转变。开源权重模型仍占主导，但如 Minimax-H3、Pika-H3 等专有架构也越来越多地被开源或重制供社区使用。这种开放访问与性能优化的结合，彰显了一个日益成熟、民主化的 AI 基础设施正在形成，其中定制化与部署速度成为核心诉求。

---

### **值得探索**
1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 下载量超 260 万，树立了图像转视频生成的新标杆。其从静态图像生成电影级视频的能力，使其成为探索生成叙事的创作者与动画师的理想选择。
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – 作为 Hugging Face 上下载量最高的模型，它提供了无与伦比的多模态推理能力。研究人员与开发者应深入研究其架构与提示工程模式，以把握当前大规模视觉-语言融合的前沿水平。
3. **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** – 在新兴的图像转 3D 生成领域脱颖而出，采用高斯点云技术。对于从事数字资产创建、游戏开发或 AR/VR 的用户而言，该模型展示了如何仅通过 2D 输入即可低成本生成交互式 3D 场景。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*