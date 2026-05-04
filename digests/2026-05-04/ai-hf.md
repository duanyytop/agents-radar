# Hugging Face 热门模型日报 2026-05-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-04 00:19 UTC

---

# Hugging Face 热门模型日报 | 2026-05-04

---

## 今日速览

DeepSeek-V4-Pro 以 3,471 点赞稳居榜首，下载量逼近 50 万，国产大模型持续领跑全球开源生态。Google Gemma-4-31B-it 以 790 万+下载量成为实际部署最广的模型，展现开源权重的商业渗透力。Qwen3.6 系列形成密集矩阵（27B/35B-MoE + GGUF 量化版），配合社区 Uncensored 微调，构建起最活跃的开源模型家族。NVIDIA Nemotron-3 Nano Omni 系列推动 any-to-any 原生多模态成为新赛道，而 poolside、inclusionAI 等新玩家入场显示 AI 基础设施层持续分化。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,471 | 457,348 | 当前开源社区热度最高的旗舰对话模型，延续 DeepSeek 系列在推理与代码场景的强势表现 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 929 | 413,995 | V4 系列的轻量高速版本，以接近 Pro 版的下载量验证边缘部署需求爆发 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 407 | 11,055 | 小米推出的 Agent 专用长上下文模型，标志消费电子厂商深入 LLM 基础设施层 |
| **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** | poolside | 198 | 9,204 | AI 编程助手领域新玩家 poolside 的代码生成模型，直接对标 Cursor/Windsurf 底层 |
| **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)** | inclusionAI | 162 | 1,039 | 蚂蚁集团 inclusionAI 推出的轻量对话模型，"Bailing" 架构显示国产自研路线分化 |
| **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)** | inclusionAI | 110 | 642 | Ling 系列 1T 参数规模实验版本，探索超大规模 MoE 的中文优化路径 |
| **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** | z-lab | 218 | 21,714 | 社区对 Qwen3.6 的 DFlash 架构改造版本，反映开源生态的快速迭代与架构创新 |
| **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)** | ibm-granite | 139 | 17,108 | IBM Granite 系列企业级语言模型，专注可信 AI 与合规场景的企业部署 |
| **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)** | ibm-granite | 86 | 3,491 | Granite-4.1 大参数版本，下载量差距显示企业偏好 8B 级高效部署 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,100 | 1,199,862 | 阿里 Qwen 视觉语言旗舰，百万级下载验证其作为开源多模态事实标准的地位 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,589 | 2,575,808 | 激活参数仅 3B 的 MoE 多模态模型，以 257 万下载成为本周实际使用最广的 VLM |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,187 | 755,634 | 月之暗面 Kimi 系列开源版本，"compressed-tensors" 标签暗示高效推理优化 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | nvidia | 205 | 38,865 | NVIDIA 原生 any-to-any 多模态推理模型，30B 总参数/3B 激活的 MoE 架构定义端侧智能 |
| **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)** | XiaomiMiMo | 200 | 45,473 | 小米多模态基座模型，覆盖视觉-语言-音频三模态，为 IoT 生态预置技术栈 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 126 | 1,489 | 商汤 SenseNova 的 Mixture-of-Transformers 多模态模型，8B 规模探索高效架构 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,493 | 7,907,233 | Google Gemma 4 代多模态指令模型，790 万下载量断层领先，开源权重商业化的标杆 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)** | nvidia | 77 | 220,908 | NVIDIA 自研 NVFP4 量化格式的 Omni 推理版本，22 万下载显示硬件-模型协同优化需求 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 113 | 1,647 | 动漫风格文生图专用模型，GGUF 支持暗示社区对本地动漫生成的强需求 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 104 | 332 | 新兴文生视频基础模型，endpoint 兼容标签瞄准 API 服务化部署 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,231 | 104,695 | OpenAI 罕见开源的 token 级隐私检测模型，PII 识别与合规过滤的企业级工具 |
| **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** | mistralai | 244 | 9,489 | Mistral 128B 总参数的中等规模模型，vLLM 优化标签瞄准高吞吐推理服务 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 80 | 599 | 腾讯 Hunyuan 1.5 的 1.25bit 极端量化翻译模型，探索亚 2-bit 精度的可用边界 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 558 | 1,045,084 | Unsloth 官方 Qwen3.6-27B GGUF 量化，104 万下载成为本地部署 VLM 的首选入口 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 904 | 2,080,953 | MoE 架构的 GGUF 量化突破，208 万下载验证 Unsloth 在量化生态的统治力 |
| **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)** | unsloth | 96 | 41,418 | Unsloth 快速跟进 NVIDIA Omni 系列量化，多模态 GGUF 成为新战场 |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 274 | 320,747 | 社区激进去审查微调，32 万下载反映特定市场对无过滤多模态模型的强需求 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 541 | 799,579 | MoE 版本激进去审查，80 万下载逼近官方 GGUF，社区微调的分发能力惊人 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,454 | 203,453 | "ABLITERATED" 标签的 Gemma-4 安全机制移除版本，MLX 格式瞄准 Apple Silicon 本地部署 |
| **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)** | talkie-lm | 211 | 0 | 零下载但高点赞的 13B 指令微调实验，"talkie" 品牌暗示语音交互特化方向 |
| **[talkie-lm/talkie-1930-13b-base](https://huggingface.co/talkie-lm/talkie-1930-13b-base)** | talkie-lm | 74 | 0 | talkie 系列基座模型，同样零下载，预训练阶段即获关注显示社区对语音 LLM 的期待 |

---

## 生态信号

**Qwen 家族**以 5 个官方/衍生条目、累计 690 万+下载形成绝对统治，覆盖 27B Dense、35B MoE、GGUF 量化及社区去审查版本，构建起最完整的开源模型矩阵。**Gemma-4** 以 790 万下载验证 Google 开源战略的商业成功，但社区 CRACK 版本的高热度（1,454 点赞）暴露安全机制与开放需求的张力。**DeepSeek** 维持旗舰影响力，而 **NVIDIA Nemotron Omni** 系列标志硬件厂商从 CUDA 生态向模型层垂直整合。量化层面，**Unsloth** 独占 3 席且下载量碾压，GGUF 已成为事实标准；**1.25bit、NVFP4** 等极端格式涌现，推理成本压缩进入新阶段。闭源厂商（OpenAI、Moonshot）选择性开源工具/旧版模型，与全权重开源形成互补格局。

---

## 值得探索

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — 790 万下载的断层数据背后是多框架优化与商业许可的成熟支持，若需部署生产级多模态应用，这是经过最大规模验证的基线选择；同时关注其社区 CRACK 版本可理解安全边界。

2. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — "any-to-any" 非营销标签而是架构原生设计，30B/3B 的 MoE 比例配合 NVIDIA 硬件协同优化，可能是端侧 Agent 与机器人智能的最前沿实验平台。

3. **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** — 编程助手赛道新贵 poolside 的首个公开模型，198 点赞/9K 下载的"低热度高潜力"组合，若关注 AI 编程工具链的底层模型竞争，值得提前建立认知。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*