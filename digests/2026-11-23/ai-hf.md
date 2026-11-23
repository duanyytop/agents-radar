# Hugging Face 热门模型周报 2026-11-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-23 03:03 UTC

---

**Hugging Face 趋势模型简报 – 2026-11-23**

---

### **今日亮点**  
Hugging Face 生态系统在多模态与量化模型领域持续爆发式增长，**Qwen3.8-27B** 在点赞数（20,939）和下载量（630万）上均位居榜首，巩固了其在大语言模型领域的主导地位。值得注意的是，经 GGUF 优化的版本——尤其是来自 **unsloth** 与 **DavidAU** 的模型——正推动下载量激增，其中 **unsloth/Qwen3.8-27B-GGUF** 下载量已突破 760 万。未受限制、经过微调的变体（如 *Heretic*、*Defiant*、*Uncensored*）兴起，反映出用户对高性能、无约束模型的日益增长需求。与此同时，**Lightricks/LTX-2.5** 作为表现卓越的图像转视频模型，下载量接近 300 万，彰显生成式视频流水线的强大势头。

---

### **趋势模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,939 | 6,297,396 | 领军级多模态大语言模型，具备强大的推理与对话能力；凭借稳健性能与开源权重，被广泛采用。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,578 | 1,827,784 | 经深度微调、未受限制的 GGUF 变体，专为速度与创造力优化——深受追求无过滤输出的进阶用户青睐。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 2,082 | 2,266,182 | 参数量仅 90 亿但功能强大，针对特定场景进行激进微调的 GGUF 模型；以社区驱动定制化著称。 |

#### 🎨 多模态与生成模型（图像、视频、音频、文本转任意）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,084 | 2,993,088 | 先进的图像转视频扩散模型，具备高度时间连贯性；本周最受欢迎的生成类模型之一。 |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,788 | 952,024 | 多用途文本转图像模型，视觉保真度高；广泛用于创意应用与基于提示的设计工作流。 |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 810 | 381,769 | Qwen 图像生成器的全模态量化版本，支持无限制输出——适合需要轻量、高速推理的开发者。 |
| [Apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | Apple | 539 | 0 | 基于 Wan-AI 架构的新一代文本转视频模型；在 AI 视频生成领域展现早期创新潜力。 |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 642 | 0 | 专用于语音分离与语音增强的音频转音频模型；因在播客与通话中实现实时音频清理而受到关注。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入向量）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | Facebook | 7,261 | 1,806,893 | 新一代分割模型，掩码生成能力显著提升；广泛应用于机器人、医学影像与内容编辑。 |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | Facebook | 1,726 | 18,709 | 将 SAM 扩展至 3D 人体网格恢复——对动作捕捉与虚拟化身至关重要；正在进入 VR/AR 流水线。 |
| [briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0) | briaai | 334 | 225 | 高精度背景移除模型，支持透明通道合成；在电商与媒体制作中广受欢迎。 |

#### 📦 微调与量化模型（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,365 | 7,683,660 | 本周 Hub 上下载量最高的 GGUF 模型——通过 llama.cpp 实现本地低延迟推理；体现了向高效、易用部署转变的趋势。 |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 902 | 805,993 | Inkling-2-Mini 的轻量级量化版本，可在消费级硬件上实现快速推理——非常适合边缘设备使用。 |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 506 | 129,693 | 社区驱动的未受限制变体，具备更强自由度与响应性——在创意与实验性环境中广受欢迎。 |

---

### **生态信号**  
Hugging Face 生态系统正清晰地分化为 **开源权重主导** 与 **社区驱动优化** 两大方向。Qwen 与 Inkling 系列模型尤其在量化（GGUF）形式下人气飙升，得益于 **unsloth** 与 **llama.cpp** 等工具，实现了低延迟本地推理。这一趋势凸显出基础设施日趋成熟：可访问性超越原始规模——用户越来越倾向于更小、更快、可自定义的模型。未受限制与微调变体（如 *Heretic*、*Defiant*、*Neo Imatrix*）反映了创作者与开发者社区对绕过默认安全过滤的强烈需求。与此同时，多模态生成——尤其是图像转视频与文本转图像——正在加速发展，Lightricks 与 Black Forest Labs 在采纳率上领先。GGUF 文件的主导地位表明，长期来看模型部署正向去中心化、用户友好的方向演进，逐步减少对云算力的依赖。

---

### **值得探索**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – 下载量超 760 万，是本地高性能大语言模型推理的行业标准。特别适合开发离线 AI 应用或在边缘设备上部署。  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 本周下载量最高的生成式视频模型，提供电影级质量的图像转视频转换。创作者探索 AI 动画时必试之选。  
3. **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** – 代表社区微调的前沿水平。其速度、能力与“无约束”行为的结合，使其成为实验性 AI 项目的理想选择。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*