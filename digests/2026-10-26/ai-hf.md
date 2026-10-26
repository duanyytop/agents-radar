# Hugging Face 热门模型周报 2026-10-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-26 00:40 UTC

---

### **今日亮点**

Hugging Face 生态系统在多模态创新方面持续爆发，**Qwen3.8-27B** 以超过 18,000 个点赞和近 800 万次下载的成绩，成为本周评分最高的模型，凸显其在图文生成任务中的广泛应用。**Lightricks/LTX-2.5**——一款文本生成视频模型，获得 9,336 个点赞和 210 万次下载，标志着生成式视频 AI 的强劲发展势头。与此同时，由社区驱动的量化版与去审查版本（尤其是 Qwen 和 DeepSeek 的 GGUF 版本）主导了微调活动，反映出对本地化、隐私友好推理日益增长的需求。值得注意的是，**Comfy-Org** 已成为通过 ComfyUI 兼容模型（如 *MOSS-Image* 与 *Fibo-2.0*）实现可访问工作流的关键推动者，极大地降低了尖端生成流水线的使用门槛。

---

### **热门模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,394 | 7,762,014 | 一款强大且具备多模态能力的视觉语言模型，广泛应用于实际场景，在多模态推理与对话式 AI 领域表现卓越。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,091 | 1,671,015 | 一款激进且去审查的 Qwen3.8-27B GGUF 微调版本，专为本地高性能推理设计，深受希望摆脱云端依赖的开发者欢迎。 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 495 | 3,488 | 一个仅 40 亿参数的紧凑型语言模型，专注于高效文本生成，因其在边缘设备上的轻量部署能力而受到关注。 |

#### 🎨 多模态与生成模型（图像、视频、音频、文本转 X）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,336 | 2,107,108 | 文本生成视频领域的突破性成果，输出质量高保真；本周下载量最高模型之一，表明主流应用兴趣迅速升温。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,603 | 660,874 | 专为 ComfyUI 优化的扩散模型，提供高质量图像生成与编辑能力，广泛用于创意工作流。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,040 | 2,235,846 | Qwen Image 2.1 的流行 GGUF 量化版本，支持快速本地化图文生成——是其下载量庞大的核心驱动力。 |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 727 | 10,757 | 基于 MOSS 架构的微调图文生成模型，在开源图像生成社区中稳步获得认可。 |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 451 | 2,161,961 | MOSS-Image Base 的 ComfyUI 就绪版本，由社区贡献构建——展示了工作流集成如何推动模型采用。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,921 | 212,769 | 用于语义相似性任务的前沿嵌入模型；在特征提取方面表现优异，跨领域性能稳定。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,108 | 1,849,059 | SAM 的最新迭代版本，现已支持视频分割——对动态目标追踪与高级视觉分析至关重要。 |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 425 | 4,636 | 一个轻量级、基于 ONNX 的 OCR 模型，专为 CPU 效率优化——适用于低资源环境与文档数字化场景。 |

#### 📦 微调与量化版本（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 280 | 412,392 | 使用 GSQ 与 RCO 技术的混合精度 GGUF 量化版本，兼顾高性能与更低内存占用。 |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 248 | 103,369 | Flint 的 GGUF 优化版本，展现了 UnSloth 在通过先进量化技术加速推理方面的专注。 |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 216 | 7,293 | DeepSeek-V4.1 的重度修改版“abliterated” GGUF 版本——代表了向极端定制化与对抗性微调趋势的演进。 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,154 | 143,152 | 基于 Gemma、经过 GGUF 量化的模型，专为生成自然类人化文本而调优，广泛用于内容创作与角色扮演场景。 |

---

### **生态信号**

截至 2026 年 10 月，Hugging Face 生态系统正经历开放权重模型与社区驱动优化的深度融合。**Qwen** 与 **DeepSeek** 系列凭借高影响力的微调版本与量化形式（如 GGUF）迅速走红，表明开发者愈发重视部署便利性而非单纯模型规模。**Comfy-Org** 与 **RecursiveSI** 在模型打包与分发中的主导地位，反映出生态系统日趋成熟——工作流的可访问性已成为关键考量维度，模型的价值不仅取决于性能，更取决于其在 ComfyUI 等工具中的集成便捷程度。值得注意的是，去审查及“异端”风格微调版本（如 DavidAU 的 Qwen 变体）的泛滥，揭示出尽管存在伦理争议，但用户对无过滤、高自主性的模型需求仍在上升。与此同时，**嵌入模型**（如 Google 的 *embeddinggemma-2*）与 **分割工具**（SAM3）仍是支撑更广泛人工智能应用的核心基础设施。该生态系统偏好模块化、高速度与本地执行——清晰地标志着向民主化、自托管人工智能的转型。

---

### **值得探索**

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – 接近 800 万次下载，已不仅是趋势，更是基准。适用于评估多模态推理，尤其适合需要强大视觉语言理解能力的企业或研究场景。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 首批真正可访问的高保真文本生成视频模型之一。创作者探索生成视频工作流时必试之选，尤其适用于社交媒体或动画制作领域。

3. **[Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image)** – 开放协作加速创新的典范。其惊人的下载量证明：精心包装、原生支持 ComfyUI 的模型，甚至能超越官方发布版本的采纳速度。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*