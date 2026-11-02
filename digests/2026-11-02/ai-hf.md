# Hugging Face 热门模型周报 2026-11-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-02 01:46 UTC

---

**Hugging Face 趋势模型简报 – 2026-11-02**

---

### **今日亮点**  
Hugging Face 生态系统在多模态创新方面持续加速，*Lightricks/LTX-2.5* 以超过 240 万次下载领跑，展现出社区对图像生成视频的强大接纳度。*Qwen/Qwen3.8-27B* 在点赞数（18.9K）和下载量（790 万）上均占据主导地位，巩固了 Qwen 作为顶级多模态模型的地位。值得注意的是，GGUF 量化技术正蓬勃发展——多个 LiquidAI 与 ISTA-DASLab 变体下载量激增，反映出对轻量化、本地推理模型的强烈需求。与此同时，NVIDIA 的 Nemotron 系列在语音与文本任务中获得关注，而开源 OCR 与视觉模型如 *baidu/Unlimited-OCR-2* 和 *facebook/sam3* 则凸显了文档智能领域的持续进展。

---

### **趋势模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）
| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 4,314 | 170,353 | 针对图像-文本到文本任务优化的高性能闪存式 LLM；因其速度与多模态推理效率广受好评。 |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,452 | 4,576 | Mistral 最新大型模型，在复杂图像-文本理解方面表现卓越；早期用户正在测试其推理能力。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,929 | 7,892,866 | Hugging Face 上下载量最高的模型之一；具备强大对话与视觉理解能力的 270 亿参数多模态模型。 |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,294 | 26,703 | 专为实时交互设计的快速高效对话式 LLM；因低延迟推理备受关注。 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 947 | 16,707 | 一个紧凑但功能强大的 40 亿参数模型，专为编码与对话优化；属于日益壮大的 Spark 家族。 |

#### 🎨 多模态与生成模型（图像、视频、音频、文本到 X）
| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,226 | 2,431,846 | 突破性图像生成视频模型，具备出色的运动连贯性；现已成为 Hugging Face 上下载量最高的模型。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,267 | 970,633 | Flux-3 Klein 的 ComfyUI 优化版本；广泛用于高质量图像编辑与生成。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,474 | 2,548,468 | Qwen Image 2.1 的热门 GGUF 量化版本；因支持本地化、无审查文本生成而广受欢迎。 |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 520 | 109,519 | 支持无限版式解析的顶尖 OCR 模型；是文档自动化工作流的关键组件。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,635 | 1,891,055 | 最新版本的 SAM，视频分割能力显著提升；现已成为大规模掩码生成的首选模型。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 483 | 44,825 | 针对 Three.js 实现 3D 代码生成的专用 40 亿参数模型；虽小众但对网页开发者极具创新价值。 |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 202 | 5,846 | 通过 ModelOpt 优化的自定义 8 位模型；专为资源受限环境下的内存高效推理设计。 |

#### 📦 微调与量化模型（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 534 | 2,294,642 | DeepSeek-V4.1 的 GSQ+RCO 量化版 GGUF 模型；凭借本地性能最优，成为下载量最高的模型之一。 |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 177 | 46,155 | 社区驱动的无审查版 LFM3-1.7B GGUF 模型；深受追求本地无过滤 LLM 用户青睐。 |
| [LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF) | LiquidAI | 172 | 150,260 | LiquidAI 官方发布的 GGUF 版本；支持 llama.cpp，可轻松部署于消费级硬件。 |
| [OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM](https://huggingface.co/OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM) | OliviaRossi | 180 | 167,612 | 基于 Minimax-H3 与 TenStrip/10Eros-Max 合并而成的 PRISM 模型；凸显先进模型融合趋势。 |

---

### **生态信号**  
截至 2026 年 11 月，Hugging Face 生态系统正明显转向 **开放权重、可本地部署的模型**，这主要得益于 **GGUF 与量化格式的广泛应用**。LiquidAI 的 LFM3 系列在文本、音频与图像等多个领域脱颖而出，同时深度集成至 `llama.cpp` 与 ComfyUI 等工具链。*ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF*（230 万次下载）等模型的成功，充分体现了社区对大型模型轻量化、低资源占用版本的强烈需求。与此同时，**多模态生成**仍处于高活跃状态，LTX-2.5 与 Qwen3.8 在视频与图文任务中树立了新基准。开源项目如 SAM3 与 Unlimited-OCR 在实际应用中持续发力，尤其在文档处理与分割领域表现突出。值得注意的是，尽管 NVIDIA 与 Meta 的专有模型仍具影响力，但社区驱动的微调与合并（如 OliviaRossi 的 PRISM 合并）表明，模型开发文化正走向成熟与协作。

---

### **值得探索**
1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 超过 240 万次下载，创作者探索 AI 视频生成时不容错过。其从图像生成流畅连贯视频的能力，使其成为内容流水线的理想选择。  
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – 作为 Hugging Face 上下载量最高的模型，这一多模态巨兽提供了无与伦比的推理与视觉理解能力，对构建高级智能体的研究人员与开发者至关重要。  
3. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** – 量化实现真实落地应用的典范。对于计划本地部署 LLM 的用户而言，此 GGUF 版本提供卓越的速度与兼容性。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*