# Hugging Face Trending Models Digest 2026-04-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-16 00:17 UTC

---

# Hugging Face Trending Models Digest — April 16, 2026

## 1. Today's Highlights

Google's **Gemma 4** family continues to dominate the trending list, with multiple variants—including the massive 31B instruction-tuned and experimental any-to-any E4B/E2B models—racking up millions of downloads. **Jackrong's Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled** leads in weekly likes (2,665), signaling strong appetite for reasoning-distilled open weights. The Chinese ecosystem remains highly active with **MiniMax-M2.7**, **GLM-5.1**, and **ERNIE-Image** all gaining traction. Meanwhile, an unusual surge in "uncensored" and "abliterated" fine-tunes—particularly around Gemma 4 and Qwen3.5—reflects a growing community interest in unaligned model variants. Notably, **Netflix's void-model** marks a rare corporate entry into open video-to-video editing.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,242 | 91,474 | A MoE-based Chinese LLM with dynamic sparse attention, gaining strong domestic and international interest. |
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 788 | 85,549 | MiniMax's latest compact conversational model, praised for efficient inference and strong multilingual performance. |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,665 | 588,732 | A community-distilled reasoning model combining Qwen3.5 architecture with Claude-4.6-level chain-of-thought quality. |
| [LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) | LGAI-EXAONE | 140 | 6,626 | LG's updated bilingual Korean-English vision-language model, now with stronger text-generation capabilities. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 1,930 | 2,894,077 | Google's flagship multimodal Gemma, setting the open-weight standard for vision-language instruction following. |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 667 | 1,654,482 | An experimental "any-to-any" Gemma 4 variant, enabling unified generation across text, image, and audio modalities. |
| [google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it) | google | 438 | 1,155,791 | A lighter any-to-any Gemma 4 model, making unified multimodal AI more accessible to researchers and developers. |
| [tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5) | tencent | 662 | 818 | Hunyuan's first open embodied vision-language model, designed for robotics and physical-world reasoning. |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 287 | 445 | Baidu's Apache-2.0 text-to-image diffusion model, offering an open alternative in the Chinese generative image space. |
| [baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo) | baidu | 215 | 419 | A faster, distilled variant of ERNIE-Image optimized for rapid inference and lower compute costs. |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 837 | 0 | Netflix's surprise open release for video inpainting and object removal, built on CogVideoX diffusion architecture. |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 583 | 606,113 | A highly downloaded zero-shot multilingual TTS and voice-cloning model with broad hardware compatibility. |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 915 | 12,827 | A multilingual text-to-speech model from OpenBMB, noted for expressive prosody and cross-lingual speaker transfer. |
| [LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M) | LiquidAI | 146 | 12,386 | A compact 450M-parameter liquid neural network for image-text understanding, exploring alternative architectures to transformers. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M) | OpenMOSS-Team | 103 | 9,940 | A tiny 100M-parameter Chinese TTS model demonstrating that high-quality speech synthesis no longer requires billions of parameters. |
| [LiconStudio/Ltx2.3-VBVR-lora-I2V](https://huggingface.co/LiconStudio/Ltx2.3-VBVR-lora-I2V) | LiconStudio | 115 | 4,074 | A LoRA for LTX Video 2.3 focused on visual reasoning-based video generation from images, targeting logical consistency in AI video. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,131 | 134,547 | An MLX-optimized, uncensored Gemma 4 31B fine-tune that has sparked significant community debate and interest. |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 335 | 569,122 | A heavily downloaded GGUF abliteration of Gemma-4-E4B, stripping alignment to enable unrestricted multimodal outputs. |
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | 1,143 | 968,595 | One of the most liked models this week: a compact but widely deployed uncensored Qwen3.5 GGUF for local use. |
| [unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 319 | 1,306,431 | Unsloth's official GGUF quantization of Gemma 4 31B, enabling local inference of a top-tier multimodal model. |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 482 | 2,028,444 | The most downloaded quantization on the list, making Google's 26B A4B multimodal model runnable on consumer hardware. |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 316 | 148,451 | A GGUF-packaged reasoning-enhanced Qwen3.5 variant, popular among llama.cpp users seeking local reasoning models. |
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 291 | 26,673 | A fast llama.cpp-compatible uncensored Gemma 4 26B, targeting speed-focused local deployment. |
| [Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2) | Jiunsong | 132 | 6,468 | An Apple Silicon-optimized MLX quantization of an uncensored Gemma 4, filling a niche for Mac-based local AI. |
| [LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo) | LilaRest | 222 | 51,148 | An NVIDIA FP4-optimized turbo variant of Gemma 4 31B, pushing efficiency boundaries on RTX 50-series GPUs. |
| [unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF) | unsloth | 113 | 47,368 | Official Unsloth GGUF conversion of MiniMax-M2.7, expanding access to this efficient Chinese conversational model. |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 93 | 0 | A newly released abliterated any-to-any Gemma 4, notable for attempting to remove alignment from a multimodal foundation model. |

---

## 3. Ecosystem Signal

**Gemma 4 has become the gravitational center of the open-weight ecosystem.** Google's release of 26B, 31B, and experimental E2B/E4B any-to-any variants has triggered an unprecedented wave of community activity—official quantizations from Unsloth, aggressive uncensored fine-tunes from HauhauCS and Jiunsong, and hardware-specific optimizations for MLX and NVIDIA FP4. This mirrors the Llama 3 moment of 2024 but with stronger multimodal integration from day one.

**Chinese model families are increasingly competitive on the global stage.** MiniMax-M2.7, GLM-5.1, Qwen3.5 (and its many community derivatives), and Baidu's ERNIE-Image are all trending simultaneously—indicating that open-weight innovation is no longer concentrated in Western labs. The Qwen ecosystem in particular has become a preferred base for distillation experiments, as seen in Jackrong's Claude-reasoning distill.

**Quantization and "abliteration" are the two dominant community activities.** Unsloth's GGUF releases regularly exceed 1–2 million downloads, proving that local/edge deployment demand remains massive. At the same time, the volume and popularity of uncensored/abliterated fine-tunes—often with zero downloads but high likes, or vice versa—suggests a bifurcated user base: one seeking polished, safe products; another actively stripping alignment for research, roleplay, or unrestricted applications.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — This is the most-liked model of the week for good reason. It represents a successful cross-architecture distillation: taking Qwen3.5's efficient open weights and infusing Claude-4.6-level reasoning patterns. For researchers studying distillation or developers needing strong reasoning without API costs, this is a must-test.

**[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — The "any-to-any" paradigm is still rare in open weights. Gemma-4-E4B-it offers a genuine research opportunity to probe unified multimodal generation and understanding in a single model, with over 1.6M downloads suggesting the community is already building on it. If you're working on multimodal agents or cross-modal translation, start here.

**[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — With 606K downloads, this is the hidden workhorse of the list. Unlike flashier releases, OmniVoice solves a practical problem exceptionally well: zero-shot multilingual TTS and voice cloning that runs on modest hardware. For product builders and accessibility researchers, it's likely the most immediately useful model on this list.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*