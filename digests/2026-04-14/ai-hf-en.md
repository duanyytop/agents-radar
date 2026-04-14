# Hugging Face Trending Models Digest 2026-04-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-14 00:16 UTC

---

# Hugging Face Trending Models Digest — April 14, 2026

---

## 1. Today's Highlights

This week's trending models are dominated by **Google's Gemma-4 family**, with multiple variants spanning vision-language and any-to-any capabilities racking up millions of downloads. **Jackrong's Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled** leads in community enthusiasm with 2,620 likes, signaling strong interest in reasoning-distilled open weights. The ecosystem also shows vibrant quantization activity, with **unsloth** releasing GGUF versions of Gemma-4, GLM-5.1, and MiniMax-M2.7 shortly after their base model drops. Meanwhile, **uncensored fine-tunes** continue to attract significant attention, with HauhauCS and dealignai posting strong download numbers. Notably, **non-text modalities are gaining ground**, with advances in TTS (VoxCPM2, OmniVoice), video editing (Netflix's void-model), and audio generation (ACE-Step).

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,145 | 35,906 | A MoE-based text-generation model with dynamic sparse attention, drawing strong researcher interest. |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 634 | 18,279 | MiniMax's latest conversational LLM, positioning itself as a competitive open-weight alternative. |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 580 | 76,787 | An extreme 1-bit quantized 8B model enabling local LLM inference on highly constrained hardware. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,838 | 2,439,350 | Google's flagship vision-language model, topping downloads with production-grade image-text-to-text performance. |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,620 | 585,351 | A community-distilled reasoning powerhouse, the week's most-liked model by a wide margin. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 816 | 9,301 | A multilingual text-to-speech model gaining traction for natural prosody and voice control. |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 793 | 0 | A video-to-video inpainting model for object removal, notable as a major studio's open research release. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 542 | 460,224 | A zero-shot multilingual voice cloning TTS system with exceptionally high download velocity. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 629 | 1,394,523 | An "any-to-any" Gemma-4 variant signaling Google's push toward unified multimodal architectures. |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,143 | 56,563 | A vision-language document understanding model leveraging InternVL for OCR and feature extraction. |
| **[ACE-Step/acestep-v15-xl-turbo](https://huggingface.co/ACE-Step/acestep-v15-xl-turbo)** | ACE-Step | 95 | 3,253 | A fast text-to-audio generation model for music and sound synthesis. |
| **[black-forest-labs/FLUX.2-small-decoder](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder)** | black-forest-labs | 86 | 7,135 | A compact FLUX image-to-image decoder for efficient local image editing and generation. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 167 | 642 | A Hunyuan vision-language model tuned for embodied AI and robotics applications. |
| **[LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)** | LGAI-EXAONE | 128 | 4,148 | LG's latest EXAONE release, a 33B parameter model competing in the Korean and global LLM space. |
| **[LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M)** | LiquidAI | 125 | 7,523 | A highly efficient 450M-parameter vision-language model from Liquid AI's LFM family. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,014 | 107,378 | An uncensored/abliterated MLX variant of Gemma-4-31B, controversial but heavily downloaded. |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 193 | 28,829 | A community NVFP4-quantized turbo version of Gemma-4 optimized for NVIDIA inference. |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 293 | 486,019 | An aggressive uncensored GGUF fine-tune of Gemma-4-E4B with substantial community uptake. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 143 | 7,307 | A fast llama.cpp-compatible uncensored GGUF of Gemma-4-26B for edge deployment. |
| **[unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF)** | unsloth | 136 | 28,533 | Rapid GGUF conversion of GLM-5.1 by unsloth, enabling efficient local inference. |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,118 | 905,234 | The week's most-downloaded uncensored fine-tune, a compact but wildly popular Qwen3.5 GGUF. |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 306 | 1,181,417 | Unsloth's official GGUF of Google's top vision-language model, crossing 1.1M downloads. |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 294 | 126,509 | A reasoning-enhanced Qwen3.5 GGUF fine-tune for local multimodal inference. |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 252 | 1,100,025 | The any-to-any Gemma-4-E4B in GGUF format, showing massive demand for quantized multimodal models. |
| **[unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF)** | unsloth | 92 | 23,720 | Quick-turn GGUF quantization bringing MiniMax's conversational model to local runners. |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 371 | 757,154 | NVIDIA's official NVFP4-optimized Gemma-4, demonstrating strong enterprise and consumer interest. |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 84 | 2,284 | An Apple Silicon-optimized MLX 4-bit uncensored variant for Mac-based local inference. |

---

## 3. Ecosystem Signal

**Google's Gemma-4 family is the undeniable gravitational center** of this week's ecosystem, with six official variants and numerous community derivatives accounting for the majority of total downloads. The rapid proliferation of **GGUF and NVFP4 quantizations**—especially from **unsloth**—demonstrates that accessibility and local deployment are now first-class concerns, not afterthoughts. **Qwen3.5** maintains strong momentum through both official and community channels, with Jackrong's reasoning distillates and HauhauCS's uncensored fine-tunes capturing distinct user segments. The continued prominence of **uncensored/abliterated models** suggests an enduring market gap around alignment and content restrictions in mainstream releases. Meanwhile, **multimodal capabilities are becoming table stakes**: even mid-sized labs like LiquidAI and Tencent are shipping vision-language or embodied models. The open-weight ecosystem is increasingly **layered**, with foundation labs releasing base models, hyperscalers optimizing hardware-specific variants (NVIDIA), and community creators filling niches within days of release.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**
This model is worth studying as a case study in **community-driven capability distillation at scale**—it leads all models in likes by a significant margin and suggests that open-weight reasoning performance may be advancing faster than official release cycles.

**[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
With nearly half a million downloads and strong multilingual, zero-shot voice cloning, this is a **practical breakthrough in accessible TTS** that could disrupt commercial voice synthesis services.

**[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)**
As a **1-bit quantized 8B parameter model**, Bonsai represents the bleeding edge of efficiency research. If quality holds up, it could redefine the hardware floor for useful local LLM inference.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*