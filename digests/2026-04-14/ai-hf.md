# Hugging Face 热门模型日报 2026-04-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-14 00:16 UTC

---

# Hugging Face 热门模型日报 | 2026-04-14

---

## 今日速览

Google **Gemma 4** 系列全面霸榜，官方 31B、26B 及 E4B/E2B 多模态变体占据下载量前列，社区 GGUF 和 uncensored 衍生版本密集涌现。中国模型力量显著：**Qwen 3.5** 蒸馏版与 **GLM 5.1** 获高赞，MiniMax、百度、腾讯、智谱均有上榜。语音与视频生成领域出现新玩家：**OmniVoice** 零样本语音克隆下载超 46 万，Netflix 发布 **void-model** 进军视频修复。1-bit 量化与 NVFP4 格式成为边缘部署新热点。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,145 | 35,906 | 智谱最新 MoE+DSA 架构对话模型，以高效稀疏激活跻身高赞榜首。 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 634 | 18,279 | MiniMax 新一代文本生成模型，MoE 架构代表国产大模型持续迭代。 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 580 | 76,787 | 极端 1-bit 量化 LLM，以极小体积挑战边缘部署可行性，引发技术社区热议。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,838 | 2,439,350 | Gemma 4 旗舰多模态模型，单周下载破 240 万，稳居生态流量核心。 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,620 | 585,351 | 本周点赞冠军，将 Claude 4.6 Opus 推理能力蒸馏至 Qwen 3.5，社区热度极高。 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 816 | 9,301 | 清华 OpenBMB 新一代多语言 TTS，语音合成质量与可控性双提升。 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 542 | 460,224 | 零样本多语言语音克隆模型，下载量与实用价值兼具的语音赛道黑马。 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 793 | 0 | Netflix 首款开源视频修复模型，专注对象移除与视频补全，影视工业意义显著。 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 629 | 1,394,523 | "任意模态到任意模态"原生架构，Google 下一代统一多模态基座。 |
| **[black-forest-labs/FLUX.2-small-decoder](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder)** | black-forest-labs | 86 | 7,135 | FLUX 系列轻量图像解码器，图像编辑与生成工作流的新组件。 |
| **[ACE-Step/acestep-v15-xl-turbo](https://huggingface.co/ACE-Step/acestep-v15-xl-turbo)** | ACE-Step | 95 | 3,253 | 音乐/音频生成加速版模型，文本到音频赛道的小众高潜选手。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,143 | 56,563 | 百度千帆视觉语言 OCR 模型，文档理解与企业场景落地能力突出。 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 167 | 642 | 腾讯混元具身智能小模型，机器人视觉-语言-动作协同的早期探索。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,014 | 107,378 | Gemma 4 31B 去限制化 MLX 微调版，高赞反映社区对" uncensored "多模态的强烈需求。 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 456 | 1,803,416 | Unsloth 官方 GGUF 量化版，下载量逼近原版，成为本地部署首选。 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,118 | 905,234 | Qwen 3.5 9B 激进去限制 GGUF，以极高下载量验证小体积+无审查的市场缺口。 |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 371 | 757,154 | NVIDIA 官方 NVFP4 精度优化版，为 RTX 50 系显卡提供原生高效推理。 |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 193 | 28,829 | 社区 NVFP4 加速衍生版，与 NVIDIA 官方形成互补的实验性优化。 |

---

## 生态信号

**Gemma 4** 已构成绝对核心生态：Google 官方释放 31B、26B、E4B、E2B 四档模型，覆盖纯文本、图文对话与原生 any-to-any，单周总下载量突破 **600 万**。Unsloth、HauhauCS、Jiunsong 等社区力量围绕 Gemma 4 和 Qwen 3.5 快速产出 GGUF、MLX、NVFP4 及 uncensored 变体，显示开源权重模型的"二次创作"生态极度活跃。与此同时，**1-bit（Bonsai-8B）与 NVFP4 量化**成为新焦点，边缘部署与消费级 GPU 推理的技术竞赛加剧。闭源侧则以蒸馏形式渗透——Claude 4.6 Opus 推理能力被蒸馏至开源 Qwen，模糊了开源/闭源边界。

---

## 值得探索

1. **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**  
   本周点赞冠军（2,620）。若你关注长思维链、数学或代码推理，这是目前开源社区中"闭源能力开源化"最激进的尝试之一，值得作为推理模型基准测试对象。

2. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
   下载量 46 万+的零样本语音克隆模型，支持多语言且无需微调。对播客、游戏配音、本地化内容生产极具即开即用价值。

3. **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)**  
   1-bit 量化的极端实验，8B 参数模型体积被压缩至前所未有的水平。若你研究端侧 LLM 的可用性边界，这是不可多得的测试样本。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*