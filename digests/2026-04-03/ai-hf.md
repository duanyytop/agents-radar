# Hugging Face 热门模型日报 2026-04-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-03 00:11 UTC

---

# Hugging Face 热门模型日报 | 2026-04-03

---

## 今日速览

**Qwen 3.5 生态持续爆发**，社区蒸馏与量化版本占据榜单前列，Jackrong 的 Claude-4.6-Opus 推理蒸馏版以 2128 点赞领跑。多模态视频生成领域，**Lightricks LTX-2.3** 下载量突破 150 万，显示商业级视频模型开源化加速。Google Gemma-4 系列密集发布 6 个变体，但社区热度不及 Qwen 生态。值得注意的是，**极端量化（1-bit）** 与 **无审查微调** 成为社区活跃方向，prism-ml 的 Bonsai-8B 和 HauhauCS 的 Uncensored 系列下载量亮眼。

---

## 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [Qwen/Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B) | Qwen | 1,147 | 4,772,421 | **官方基座模型**，下载量碾压级领先，多模态对话能力全面 |
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 922 | 674,007 | **激进无审查版本**，社区对内容自由度需求旺盛 |
| [nvidia/Nemotron-Cascade-2-30B-A3B](https://huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B) | nvidia | 453 | 114,462 | **NVIDIA 级联 MoE 架构**，推理效率与性能平衡的新尝试 |
| [chromadb/context-1](https://huggingface.co/chromadb/context-1) | chromadb | 356 | 2,820 | **向量数据库厂商入局 LLM**，RAG 原生设计引关注 |
| [LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M) | LiquidAI | 200 | 7,703 | **液态神经网络架构**，非 Transformer 路线的小参数高效模型 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,128 | 428,791 | **榜首模型**，Claude-4.6 级推理能力蒸馏至 27B，视觉推理双优 |
| [Lightricks/LTX-2.3](https://huggingface.co/Lightricks/LTX-2.3) | Lightricks | 868 | 1,541,633 | **商业级视频生成开源标杆**，下载量证明生产就绪度 |
| [baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 811 | 19,085 | **百度千帆 OCR**，中文场景文档理解的新选择 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 305 | 29,015 | **Gemma-4 旗舰多模态**，Google 对标 Qwen 的正式回应 |
| [GAIR/daVinci-MagiHuman](https://huggingface.co/GAIR/daVinci-MagiHuman) | GAIR | 288 | 670 | **人像视频生成**，多模态统一生成（视频/音频/图像）的探索 |
| [kpsss34/FHDR_Uncensored](https://huggingface.co/kpsss34/FHDR_Uncensored) | kpsss34 | 329 | 250,221 | **无审查图像生成**，高下载量反映特定内容需求市场 |
| [CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | CohereLabs | 733 | 71,028 | **Cohere 语音转录**，ASR 领域新竞争者 |
| [mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603) | mistralai | 632 | 4,316 | **Mistral 语音合成**，4B 参数 TTS 的轻量化尝试 |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) / [gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it) | google | 134/99 | 4,639/20,913 | **Any-to-Any 原生架构**，统一模态交互的实验性路线 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [microsoft/harrier-oss-v1-0.6b](https://huggingface.co/microsoft/harrier-oss-v1-0.6b) / [270m](https://huggingface.co/microsoft/harrier-oss-v1-270m) | microsoft | 139/111 | 2,814/3,029 | **微软嵌入模型双版本**，基于 Qwen3/Gemma3 的 MTEB 优化 |
| [facebook/sam3.1](https://huggingface.co/facebook/sam3.1) | facebook | 115 | 4,858 | **SAM 3.1 视频分割**，Meta 视觉基础模型的迭代 |
| [facebook/tribev2](https://huggingface.co/facebook/tribev2) | facebook | 263 | 25,665 | **神秘新品**，任务标签缺失但下载活跃，或为未公开能力预览 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) | Jackrong | 546 | 745,910 | **GGUF 量化版下载冠军**，本地部署需求爆炸 |
| [HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,150 | 621,967 | **35B MoE 无审查版**，点赞数全场第三，社区热度极高 |
| [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) / [mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit) | prism-ml | 315/116 | 13,844/7,582 | **1-bit 极端量化**，边缘设备部署的技术前沿 |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF) | Jackrong | 467 | 202,605 | **v2 迭代优化**，版本快速迭代显示社区工程活跃度 |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 86 | 1 | **Unsloth 首发 GGUF**，量化工具链厂商紧跟 Gemma-4 发布 |

---

## 生态信号

**Qwen 3.5 已成事实标准**。榜单 30 个模型中 10 个基于 Qwen 架构，覆盖官方基座、社区蒸馏、无审查微调、极端量化全链条。Google Gemma-4 虽密集发布 6 变体（含 Any-to-Any 实验），但点赞与下载均不及 Qwen 生态，显示后发劣势。**开源权重竞争白热化**：Cohere、Mistral、NVIDIA 均推新模型，但社区创新（Jackrong、HauhauCS、prism-ml）热度超越大厂官方发布。**量化成为基础设施**：GGUF 格式占据下载量头部，1-bit 量化进入实用阶段，Unsloth 等工具链厂商快速跟进新模型。**"无审查"标签成流量密码**，相关模型下载量异常突出，反映开源社区对内容管控的反弹性需求。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **推理能力蒸馏的标杆案例**——27B 参数实现 Claude-4.6-Opus 级推理，视觉多模态未损失，是研究大模型知识蒸馏与能力迁移的必看样本。 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | **1-bit 量化的工程前沿**——8B 模型压缩至极限位宽仍保持可用性，对端侧部署、低功耗场景有突破性意义，技术路线值得跟踪。 |
| **[Lightricks/LTX-2.3](https://huggingface.co/Lightricks/LTX-2.3)** | **商业视频生成的开源转折点**——150 万+下载量证明生产就绪，对比 Runway/Pika 闭源生态，观察开源视频模型如何改变行业格局。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*