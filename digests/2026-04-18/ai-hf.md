# Hugging Face 热门模型日报 2026-04-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-18 00:13 UTC

---

# Hugging Face 热门模型日报 · 2026-04-18

---

## 今日速览

本周 Hugging Face 生态呈现多模态爆发态势：Google Gemma-4 系列以 3 个变体、超 680 万总下载量强势霸榜，成为当前最活跃的开源模型家族；中国模型力量显著，MiniMax-M2.7、Qwen3.6-35B-A3B 及百度 ERNIE-Image 系列占据核心位置；社区微调与"去审查化"（uncensored/abliterated）需求持续高涨，衍生出大量 GGUF/MLX 量化版本；视频生成与 3D 世界模型开始崭露头角，腾讯 Hunyuan 生态向具身智能与物理世界延伸。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,381 | 100,019 | 智谱最新 MoE+DSA 架构对话模型，社区热度超越多数国际主流模型 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 923 | 188,737 | MiniMax 新一代文本生成模型，周下载逼近 19 万，国产大模型出海代表 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 723 | 1,950,853 | Google 首个"any-to-any"原生多模态 LLM，近 200 万下载验证其通用架构潜力 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 726 | 2,562,020 | Gemma-4 系列主力视觉语言模型，256 万下载量为本周最高 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,723 | 579,463 | **本周点赞冠军**，社区蒸馏 Claude-4.6 Opus 推理能力至 Qwen3.5，现象级微调作品 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 275 | 6,866 | 激进去审查化 Gemma-4，反映社区对无限制开源权重的强烈需求 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,122 | 3,513,465 | **本周下载冠军**（351 万），Gemma-4 旗舰视觉语言模型，开源多模态新标杆 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 724 | 21,180 | 阿里 Qwen3.6 MoE 架构视觉语言模型，35B 激活仅 3B，效率与能力并重 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 852 | 1,287 | 腾讯混元具身智能模型，将 VLM 能力延伸至机器人/物理交互场景 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 422 | 2,254 | 百度 ERNIE 系列文生图模型，8B 参数 Apache-2.0 开源 |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 289 | 2,992 | ERNIE-Image 加速版，平衡生成质量与推理效率 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 214 | 0 | 腾讯混元世界模型 2.0，支持图像到 3D 生成，探索物理世界模拟 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 866 | 0 | Netflix 视频修复/擦除模型，基于 CogVideoX 架构，影视工业级应用 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,095 | 18,089 | 清华 OpenBMB 多语言 TTS 模型，语音合成领域高赞新秀 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 629 | 847,404 | 零样本多语言语音克隆，84 万下载验证其工程实用性 |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 158 | 802 | 稀疏 MoE 架构扩散模型，探索大模型与生成式 AI 的架构融合 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 161 | 35 | NVIDIA 研究模型，关联 arxiv 论文 2604.13036，学术前沿信号 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 523 | 2,203,787 | Unsloth 官方量化版 Gemma-4，220 万下载证明端侧部署刚需 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,257 | 152,762 | MLX 平台去审查化 Gemma-4，苹果生态+无限制双重卖点 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 387 | 656,354 | 激进去审查 GGUF 版，65 万下载反映特定用户群体规模 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 363 | 153,019 | Qwen3.6 MoE 高效量化，Unsloth 持续押注中国模型生态 |
| **[unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF)** | unsloth | 128 | 78,293 | MiniMax 官方量化衍生，国产模型国际化分发基础设施 |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 150 | 13,664 | 罕见文生图模型 GGUF 化尝试，Unsloth 拓展量化边界 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 381 | 53,781 | 社区"超级 Gemma"微调，uncensored+fast 标签直击本地部署痛点 |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 170 | 11,971 | 苹果 Silicon 专属 4bit 版，MLX 生态细分持续深化 |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 246 | 74,404 | NVIDIA FP4 格式实验，硬件厂商量化标准之争缩影 |
| **[Qwen/Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Qwen | 108 | 22,905 | 官方 FP8 精度版本，推理优化从社区回归官方主线 |

---

## 生态信号

**Gemma-4 家族确立开源多模态霸权**：Google 以 4 个上榜模型、累计超 680 万周下载量，构建起从 4B 到 31B、从 text-only 到 any-to-any 的完整矩阵，其社区衍生版本（去审查、量化、微调）超过 10 个，开源生态活跃度已超越 Llama 同期。

**中国模型"三足鼎立"格局成型**：阿里 Qwen、百度 ERNIE、MiniMax、智谱 GLM、腾讯混元五大厂商全部上榜，覆盖语言、视觉、语音、世界模型全栈；Unsloth 等国际化工具链主动适配中国模型，标志国产开源模型从"自主分发"进入"全球基础设施"阶段。

**"去审查化"成为显性需求**：uncensored/abliterated 标签出现 6 次，相关模型下载量超 88 万，社区对模型权重的完全控制诉求与厂商安全策略持续博弈。量化技术从 GGUF 向 MLX、NVFP4、FP8 多极分化，端侧部署场景驱动格式创新。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **本周最大黑马**：点赞 2,723 为全榜第一，社区首次成功将 Claude-4.6 Opus 的推理能力蒸馏至开源 Qwen3.5，57 万下载验证其实用性。若蒸馏方法可复现，将颠覆"闭源模型能力不可获取"的假设，值得优先复现研究。 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | 具身智能关键节点：将视觉语言模型与物理世界动作空间对齐，是通往通用机器人的核心路径。腾讯混元在此布局早于多数国际厂商，1,287 下载虽低但技术信号极强，机器人/自动驾驶研究者应密切关注后续迭代。 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | 架构范式潜在变革者："any-to-any" 原生设计区别于拼接式多模态，195 万下载证明工程可行性。若其统一表征策略被验证可扩展，或成为下一代多模态基础架构的参考实现，建议对比测试其跨模态迁移能力。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*