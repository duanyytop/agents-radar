# Hugging Face Trending Models Digest 2026-04-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-18 00:13 UTC

---

# Hugging Face Trending Models Digest — April 18, 2026

---

## 1. Today's Highlights

Google's **Gemma 4** family continues to dominate the ecosystem with three variants in the top 30, collectively amassing over 8.5 million downloads. The most striking trend is the explosive community activity around **uncensored and abliterated fine-tunes** of Gemma 4, with four such models trending this week—suggesting strong demand for unfiltered open-weight alternatives. **Qwen 3.6** is gaining serious momentum as a multimodal MoE architecture, with both official releases and community distillations like Jackrong's Claude-reasoning variant performing exceptionally well. Meanwhile, **MiniMax M2.7** has emerged as a surprise challenger in the text-generation space, outperforming many larger models in engagement despite its compact size. The audio generation frontier is also heating up, with **k2-fsa/OmniVoice** nearing 850K downloads for zero-shot voice cloning.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,381 | 100,019 | Next-gen GLM with MoE+DSA architecture, strong reasoning capabilities in a chat-optimized format |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 923 | 188,737 | Compact yet powerful Chinese-developed LLM punching above its weight class in conversational quality |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,723 | 579,463 | Community distillation transferring Claude-4.6-level reasoning into open Qwen weights—highest likes this week |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 381 | 53,781 | Popular uncensored GGUF of Gemma 4 for local inference, optimized for llama.cpp |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 246 | 74,404 | NVIDIA FP4-quantized Gemma 4 variant pushing efficiency boundaries for RTX 50-series GPUs |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 275 | 6,866 | Aggressively abliterated Gemma 4 E4B with both Safetensors and GGUF formats for maximum flexibility |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,122 | 3,513,465 | Flagship vision-language Gemma 4 with massive adoption—over 3.5M downloads in its first weeks |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 724 | 21,180 | 35B MoE with only 3B active params, delivering efficient image-text-to-text with strong benchmark scores |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 852 | 1,287 | Hunyuan's first embodied AI vision model for robotics and spatial reasoning applications |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 422 | 2,254 | Apache-2.0 licensed 8B text-to-image model from Baidu, competitive with mid-tier SD variants |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 289 | 2,992 | Faster inference variant of ERNIE-Image with minimal quality trade-off |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 214 | 0 | Ambitious world model for image-to-3D generation, fresh release with zero downloads but high anticipation |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 866 | 0 | Netflix's video-to-video inpainting model for object removal—surprising corporate open-weight release |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 629 | 847,404 | Near-million-download zero-shot multilingual TTS with voice cloning, approaching mainstream adoption |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,095 | 18,089 | Research-grade multilingual TTS with exceptional prosody control and emotional range |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 723 | 1,950,853 | Experimental "any-to-any" Gemma 4 variant—unified encoder-decoder for arbitrary modality interconversion |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 726 | 2,562,020 | Mid-size vision-language Gemma 4 with 4B active params in MoE, optimal compute-quality balance |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 158 | 802 | Sparse MoE diffusion architecture demonstrating parameter-efficient image generation |
| **[LiconStudio/Ltx2.3-VBVR-lora-I2V](https://huggingface.co/LiconStudio/Ltx2.3-VBVR-lora-I2V)** | LiconStudio | 135 | 5,539 | Specialized LoRA for logical video reasoning in image-to-video generation, niche but innovative |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 161 | 35 | NVIDIA's research artifact for arXiv:2604.13036—likely embedding or retrieval model, details sparse |
| **[OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M)** | OpenMOSS-Team | 132 | 29,102 | Ultra-compact 100M Chinese TTS for edge deployment and resource-constrained environments |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,257 | 152,762 | MLX-native abliterated Gemma 4 for Apple Silicon, "4M-CRACK" suggests extensive fine-tuning dataset |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 363 | 153,019 | Unsloth's optimized GGUF conversion enabling local multimodal MoE inference—153K downloads shows demand |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 170 | 11,971 | Apple Silicon-optimized 4-bit MLX of uncensored Gemma 4, filling a specific local inference niche |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 150 | 13,664 | Experimental GGUF quantization of diffusion model—unusual application of format typically used for LLMs |
| **[unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF)** | unsloth | 128 | 78,293 | Rapid community quantization of trending MiniMax model, 78K downloads in short timeframe |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 387 | 656,354 | Most-downloaded uncensored variant this week—"Aggressive" abliteration with vision capabilities preserved |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 523 | 2,203,787 | Over 2.2M downloads—likely the most successful quantization release ever, making MoE VLMs accessible |
| **[Qwen/Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Qwen | 108 | 22,905 | Official FP8 release for H100/B200 deployment, showing Qwen's enterprise infrastructure focus |

---

## 3. Ecosystem Signal

**Gemma 4 has achieved ecosystem dominance** unmatched since Llama 2's release, with Google's strategic release of three tiered variants (E4B "any-to-any," 26B-A4B MoE, 31B dense) creating a complete product ladder. The sheer volume of community fine-tunes—particularly uncensored and abliterated versions—demonstrates both the model's architectural accessibility and unmet demand for unfiltered open weights. This represents a significant shift: Google is successfully cultivating a developer community around its open models that rivals Meta's Llama ecosystem.

**Quantization has become a primary distribution channel**, not merely an optimization. Unsloth's GGUF conversions of Gemma 4 and Qwen 3.6 are achieving download volumes exceeding many base models, with their [gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) nearing 2.2M downloads. This suggests local inference is transitioning from hobbyist niche to mainstream deployment pattern.

**Chinese labs are increasingly competitive at the frontier.** MiniMax, Qwen, Baidu, and Tencent all have trending releases this week, with Qwen 3.6's MoE architecture and MiniMax's efficiency gains challenging Western assumptions about open-weight leadership. The [Jackrong distillation](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) achieving the week's highest likes (2,723) also reveals sophisticated community knowledge transfer—distilling proprietary Claude reasoning into open Qwen weights.

**Proprietary-to-open distillation** and **uncensored fine-tuning** are the two most active community innovation vectors, sometimes converging as with the aggressive abliteration trend. Meanwhile, corporate open releases from unexpected sources (Netflix, Baidu's Apache licensing) suggest open weights are becoming standard competitive practice even for traditionally closed industries.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — Highest engagement this week (2,723 likes, 579K downloads) for good reason: this represents a new paradigm in capability transfer, distilling frontier proprietary reasoning into an efficient open model. Worth studying for both the technical methodology and as a practical powerful reasoning model. The combination of Qwen's strong base with Claude-level chain-of-thought quality at 27B parameters challenges assumptions about necessary model scale.

**[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — The "any-to-any" experimental variant is the most architecturally ambitious release this week. With nearly 2M downloads despite its research status, it's worth exploring for understanding Google's multimodal unification strategy. If the "any-to-any" claims hold, this could presage a fundamental shift away from pipeline-based multimodal systems toward unified architectures—relevant for anyone building cross-modal applications.

**[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — Approaching mainstream adoption with 847K downloads, this zero-shot multilingual TTS with voice cloning achieves quality previously requiring proprietary APIs. The k2-fsa team's speech processing expertise shows in the natural prosody and cross-lingual transfer. Worth trying for any voice application, and particularly valuable for studying how open TTS is approaching human parity in 2026.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*