# Hugging Face 热门模型日报 2026-04-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-16 00:17 UTC

---

# Hugging Face 热门模型日报 | 2026-04-16

---

## 1. 今日速览

本周 Hugging Face 热度由 **Google Gemma-4 系列** 主导，31B 与 26B 多模态版本下载量均突破 200 万，生态衍生模型密集涌现。**Jackrong 的 Qwen3.5 蒸馏模型** 以 2,665 点赞登顶社区热度榜首，中国模型力量持续强势。值得注意的是，**Uncensored/Abliterated 微调版本** 在 Gemma-4 和 Qwen3.5 家族中形成显著子生态，GGUF/MLX 量化适配活跃。此外，**百度 ERNIE-Image** 与 **腾讯 Hunyuan 具身模型** 代表了国内大厂在多模态生成与视觉-语言-动作领域的最新布局。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,242 | 91,474 | 智谱新一代 MoE+DSA 架构对话模型，技术路线持续迭代。 |
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 788 | 85,549 | MiniMax 开源文本生成模型，国内大厂基础模型布局再进一步。 |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | **2,665** | 588,732 | 本周热度之王，将 Claude-4.6 Opus 推理能力蒸馏至 Qwen3.5 架构。 |
| [google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it) | google | 438 | 1,155,791 | Gemma-4 轻量 any-to-any 版本，20 亿激活参数即可驱动多模态交互。 |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 667 | 1,654,482 | 40 亿激活参数的 any-to-any 模型，Google 下一代端侧智能核心。 |
| [LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) | LGAI-EXAONE | 140 | 6,626 | LG 最新 EXAONE 4.5 系列，韩系开源大模型的持续更新。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | **1,930** | **2,894,077** | 本周下载量冠军，31B 多模态对话模型，Gemma-4 系列旗舰。 |
| [google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it) | google | 672 | 2,200,218 | 26B 总参数/4B 激活的多模态高效模型，性能与成本平衡之选。 |
| [tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5) | tencent | 662 | 818 | 腾讯 Hunyuan 视觉-语言-动作模型，切入具身智能赛道。 |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 287 | 445 | 百度文心图像生成模型开源版本，Apache 2.0 协议发布。 |
| [baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo) | baidu | 215 | 419 | ERNIE-Image 加速版，面向高效推理场景优化。 |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 837 | 0 | Netflix 开源视频修复/物体消除模型，基于 CogVideoX 架构。 |
| [LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M) | LiquidAI | 146 | 12,386 | 4.5 亿参数液态神经网络视觉语言模型，非 Transformer 架构新尝试。 |

---

### 🔧 专用模型（语音、视频编辑、特定领域）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 915 | 12,827 | OpenBMB 新一代多语言 TTS 模型，语音合成质量引发社区关注。 |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 583 | **606,113** | 零样本多语言语音克隆工具，下载量证明其实用性已被广泛验证。 |
| [OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M) | OpenMOSS-Team | 103 | 9,940 | 复旦 MOSS 团队 1 亿参数中文 TTS 轻量模型，端侧友好。 |
| [LiconStudio/Ltx2.3-VBVR-lora-I2V](https://huggingface.co/LiconStudio/Ltx2.3-VBVR-lora-I2V) | LiconStudio | 115 | 4,074 | 面向视频逻辑推理的 LTX-Video 2.3 LoRA，I2V 视频生成新细分方向。 |

---

### 📦 微调与量化（社区微调、GGUF、MLX、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,131 | 134,547 | Gemma-4 31B 社区破解/去审查微调版，热度紧随官方模型。 |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 335 | 569,122 | Gemma-4 E4B 激进去审查 GGUF 版，50 万+下载显示端侧需求旺盛。 |
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,143 | 968,595 | 9B 小体积激进去审查 Qwen3.5，近百万下载成为本周量化明星。 |
| [unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 319 | 1,306,431 | Unsloth 官方 Gemma-4 31B GGUF，130 万下载是量化基础设施的核心。 |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 482 | 2,028,444 | Unsloth 官方 26B-A4B GGUF，200 万下载量印证其作为本地部署首选。 |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 316 | 148,451 | Qwen3.5 27B 推理增强版 GGUF，社区推理模型量化新标杆。 |
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 291 | 26,673 | 个人开发者推出的 Gemma-4 26B 去审查 fast 版，llama.cpp 生态适配。 |
| [Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2) | Jiunsong | 132 | 6,468 | Apple Silicon 专属 MLX 4bit 量化版，Mac 本地部署友好。 |
| [LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo) | LilaRest | 222 | 51,148 | NVIDIA FP4 精度 Turbo 版，面向 RTX 50 系显卡的推理优化实验。 |
| [unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF) | unsloth | 113 | 47,368 | Unsloth 为 MiniMax-M2.7 提供的官方 GGUF 量化支持。 |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 93 | 0 | Gemma-4 E4B 去审查实验版，虽零下载但标签生态值得关注。 |

---

## 3. 生态信号

**Gemma-4 已形成本周绝对核心生态。** Google 官方 5 个模型占据下载量头部，而社区在 48 小时内即涌现出超过 10 个去审查、GGUF、MLX、FP4 衍生版本，显示开源权重的"基础设施化"速度极快。**Qwen3.5 与 MiniMax、GLM-5.1 构成中国模型三叉戟**，其中 Jackrong 的蒸馏与量化作品证明社区创作者已能基于国产基座打造全球热门模型。趋势上，**"any-to-any" 正在取代纯文本或纯视觉成为新卖点**（Gemma-4 E2B/E4B）；同时 **Uncensored/Abliterated 微调已形成可识别的子赛道**，HauhauCS、Jiunsong 等量化专家成为关键节点。闭源侧仅 Netflix 一个视频模型上榜，开源权重的迭代密度与社区参与度仍在加速扩大领先优势。

---

## 4. 值得探索

### ⭐ [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)
**理由：** 本周点赞冠军，首次将顶尖闭源模型（Claude-4.6 Opus）的推理模式成功蒸馏至开源可部署的 27B 架构。对于研究模型蒸馏、推理增强或寻求本地高性能推理方案的团队，这是必测标杆。

### ⭐ [google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it) + [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)
**理由：** 26B 总参数 / 4B 激活的 MoE 多模态模型，官方版本下载破 220 万，配合 Unsloth GGUF 可直接在消费级显卡运行。是验证"小激活大参数"架构在实际多模态任务中效率与质量平衡的最佳入口。

### ⭐ [tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)
**理由：** 腾讯 Hunyuan 首次以"具身智能"定位开源模型，切入 image-text-to-text 与 VLA（Vision-Language-Action）交叉领域。在大厂纷纷卷多模态对话时，这是少有的面向机器人/具身场景的开源权重，前沿研究方向明确。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*