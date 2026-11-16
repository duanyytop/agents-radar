# Hugging Face 热门模型周报 2026-11-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-16 02:22 UTC

---

### **今日亮点**  
Hugging Face 生态系统正迎来多模态与量化模型的爆发式增长，其中 Qwen3.8-27B 凭借在图文到文本任务中的出色表现，成为下载量和受欢迎度最高的模型。MiniMax-H3 系列在图像与视频生成领域占据主导地位，*MiniMax-H3-Image* 与 *MiniMax-H3* 均跻身下载量前五。值得注意的是，基于 GGUF 量化的 Qwen 与 DeepSeek 模型正迅速获得本地推理青睐，这主要得益于社区微调版本（如 *DavidAU* 的无审查变体）的推动。与此同时，Facebook 的 *SAM3* 与 *DINOv3* 在基础视觉模型领域持续受到关注，反映出对强大特征提取器日益增长的需求。

---

### **热门模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,130 | 6,547,772 | 一个专为图文到文本及对话式 AI 优化的 270 亿参数强大模型；目前 Hugging Face 上下载量最高的模型之一，反映出其在多模态应用中的广泛采用。 |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 7,548 | 27,037 | 一种高度修改的无审查版 DeepSeek-V4 Pro，融合 Qwen3.5-9B，深受追求无限制推理与创意输出用户的欢迎。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,000 | 6,566,295 | Qwen3.8-27B 的 GGUF 量化版本，通过 Unsloth 快速训练流水线优化本地推理——在量化模型中下载量排名第一。 |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,800 | 103,744 | 一款轻量但功能强大的文本生成模型，专为高效部署设计，适用于边缘设备与低延迟推理场景。 |

#### 🎨 多模态与生成模型（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,190 | 571,067 | 性能顶尖的文生图模型，具备出色的视觉连贯性；广泛应用于 ComfyUI 工作流与社区工具中。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,067 | 2,754,355 | 一种先进的图生视频模型，可从静态图像生成高质量动态效果；在创意内容生产流程中迅速普及。 |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 412 | 1,973,388 | MiniMax-H3-Image 的 ComfyUI 兼容封装，推动其在去中心化 AI 艺术工作流中的广泛应用。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,255 | 1,182,267 | 一个紧凑、适配 ComfyUI 的扩散模型，专注于图像编辑与生成，资源开销极低。 |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,367 | 33,423 | 采用高斯溅射技术的前沿图生 3D 模型，正成为 AR/VR 资产创作的关键工具。 |
| [meituan-longcat/LongCat-2.5](https://huggingface.co/meituan-longcat/LongCat-2.5) | meituan-longcat | 269 | 1,573 | 一款专为长上下文推理与图文理解设计的多模态模型，已初现小众应用场景迹象。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入向量）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,658 | 2,011,153 | Segment Anything Model 的最新版本，现已支持视频分割与增强提示泛化能力——广泛用于医学影像与机器人领域。 |
| [facebook/dinov3-vitl16-pretrain-lvd1689m](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m) | facebook | 2,286 | 687,007 | 基于多样化数据预训练的大规模视觉变换器；在零样本分类与跨领域迁移学习方面表现卓越。 |
| [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) | pyannote | 4,431 | 4,905,484 | 最受欢迎的说话人分离模型之一，可在会议与播客中实现精准语音分离——是转录流水线的核心组件。 |

#### 📦 微调与量化模型（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,170 | 1,708,637 | 重度微调、无审查的 Qwen3.8-27B GGUF 版本，强化了编程与叙事能力——广受本地 AI 实验用户欢迎。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 1,791 | 2,139,859 | 90 亿参数版本，经过激进微调与多重优化，是个人 AI 设置中下载量最高的 GGUF 模型之一。 |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 296 | 149,532 | 由社区优化的无审查版 Gemma-4-31B GGUF，专为开放式创造力与角色扮演场景定制。 |
| [Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF) | Abiray | 236 | 127,803 | MiniMax-H3-Image 的 GGUF 转换版本，可在消费级硬件上实现高效本地推理——对独立艺术家与开发者至关重要。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,178 | 4,202,683 | Qwen3.8-27B 的大规模无审查、消融版 GGUF 变体，以极低的防护机制驱动本地 AI 创新。 |

---

### **生态信号**  
截至 2026 年 11 月，Hugging Face 生态系统明显转向 **开源权重、可本地部署的模型**，尤其是采用 **GGUF 量化** 与 **社区驱动微调** 的模型。Qwen 家族依然占据主导地位，Qwen3.8-27B 及其衍生模型在点赞与下载量上均遥遥领先，充分体现了开发者对可扩展、多模态推理能力的信任。无审查与“异端”类变体（如 DavidAU 与 huihui-ai 的模型）的兴起，反映出对不受限 AI 能力的强烈需求，尤其在创意与实验性使用场景中。与此同时，**MiniMax-H3** 已成为生成式 AI 领域的重要玩家，其在图像、视频及 ComfyUI 兼容性方面的多种变体推动了广泛采用。Facebook 对 SAM3 与 DINOv3 等基础视觉模型的持续投入，凸显了强大通用视觉系统的重要性。GGUF 格式的主导地位表明，**本地推理** 已不再是小众选择——它已成为主流，由 Unsloth 等工具与社区改造共同推动。开源势头已超越专有模型，尽管商业厂商仍通过基础模型发布保持影响力。

---

### **值得探索**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – 任何构建本地 AI 应用的开发者都应关注此模型，其借助 Unsloth 优化的推理栈，实现了无与伦比的速度与效率。超过 650 万次下载证明了其在 GGUF 性能上的标杆地位。  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 若你正在探索 AI 视频生成，该模型凭借将静态图像以电影级质量与时间一致性进行动画化的能力脱颖而出——非常适合创作者与动画师。  
3. **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** – 想深入理解社区微调如何释放开源模型的极致潜力，尤其是在代码生成与叙事创作方面，此模型必读。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*