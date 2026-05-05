# Hugging Face Trending Models Digest 2026-05-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-05 00:20 UTC

---

# Hugging Face Trending Models Digest — May 5, 2026

---

## 1. Today's Highlights

**DeepSeek-V4-Pro** dominates the trending list with 3,528 weekly likes and over half a million downloads, signaling continued appetite for frontier Chinese LLMs despite geopolitical headwinds. **Google's Gemma-4-31B-it** is the ecosystem's workhorse with 8M+ downloads, proving open-weight models can achieve mass adoption at scale. The Qwen3.6 family shows extraordinary ecosystem depth with multiple variants (27B, 35B-A3B MoE, GGUFs, uncensored forks) collectively driving 6M+ weekly downloads. Notably, **NVIDIA's Nemotron-3-Nano-Omni** introduces true any-to-any multimodal reasoning with aggressive quantization (NVFP4, GGUF), while community fine-tuning activity around Qwen and Gemma suggests robust open-source experimentation. Privacy-focused tooling also gains traction with OpenAI's **privacy-filter** token-classifier entering the top three.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,528 | 534,942 | Flagship reasoning-optimized LLM with massive engagement; DeepSeek's strongest open-weight challenger to Western labs. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 940 | 489,465 | Distilled fast-inference variant balancing capability and deployment cost for production use. |
| [inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash) | inclusionAI | 455 | 1,141 | Emerging Chinese "Bailing" architecture with hybrid routing; niche but growing developer interest. |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 211 | 10,357 | Coding-specialized small model from the AI-native IDE company; vLLM-optimized for latency-sensitive applications. |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 427 | 11,812 | Agent-optimized long-context model from Xiaomi's emerging AI lab; targeting autonomous workflows. |
| [ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) | ibm-granite | 150 | 18,310 | Enterprise-trustworthy 8B parameter model with strong language understanding benchmarks. |
| [ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b) | ibm-granite | 91 | 4,094 | Larger Granite variant for demanding enterprise NLP workloads with responsible AI guardrails. |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 228 | 23,407 | Community-optimized "DFlash" inference variant of Qwen3.6 with feature-extraction enhancements. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,107 | 1,334,241 | Vision-language workhorse with 1.3M weekly downloads; strong image understanding with conversational interface. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,608 | 2,726,360 | **Most downloaded model this week** — MoE architecture (35B active/3B total) delivering frontier VLM performance at inference efficiency. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,507 | 8,042,257 | **Ecosystem giant** — 8M+ downloads make this the most deployed open vision-language model; Google's Gemma-4 generation hits product-market fit. |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,197 | 825,320 | Moonshot's multimodal successor with compressed-tensor optimization; strong Chinese+English bilingual performance. |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 220 | 40,403 | True any-to-any multimodal reasoning model — text, image, audio, video unified in single 30B-A3B architecture. |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4) | nvidia | 85 | 276,956 | NVFP4-quantized variant with 7x the downloads of BF16; aggressive quantization enabling edge deployment of omni-modal AI. |
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 173 | 20,187 | Emerging text-to-video model with GGUF support and endpoint compatibility; early but promising open video generation. |
| [SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 135 | 2,622 | Niche anime-style text-to-image model with GGUF quantization; vibrant community around stylized diffusion. |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 207 | 51,554 | Multimodal foundation with vision-language-audio triple modality; broader but less polished than Pro variant. |
| [sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 140 | 1,714 | SenseTime's 8B Mixture-of-Transformers any-to-any model; efficient multimodal from major Chinese AI lab. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,259 | 132,595 | **Surprise top-3 entry** — OpenAI's first HF Hub model in years; ONNX-optimized PII detection for enterprise data pipelines. |
| [ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2) | ibm-granite | 75 | 2,191 | ModernBERT-based multilingual embedding with ONNX/OpenVINO optimization; enterprise retrieval at sub-100M scale. |
| [AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 88 | 16,307 | Extreme 1.25-bit quantized Hunyuan translation model; pushing quantization boundaries for multilingual NLP. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 566 | 1,092,141 | Unsloth's optimized GGUF conversion drives 1M+ downloads; consumer GPU deployment of frontier VLM. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 910 | 2,174,698 | **Top GGUF by volume** — MoE VLM runnable on consumer hardware; 2.1M downloads prove quantization demand. |
| [unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF) | unsloth | 99 | 44,790 | Community GGUF of NVIDIA's omni-modal model; experimental but enabling local multimodal reasoning. |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,467 | 203,362 | **"Abliterated" uncensored Gemma-4** with MLX optimization; controversial but massively popular safety bypass. |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 278 | 350,841 | Aggressive uncensored Qwen3.6 VLM fork; 350K downloads reveal strong demand for unfiltered multimodal models. |
| [talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it) | talkie-lm | 224 | 0 | Mysterious zero-download Apache-2.0 instruct model; likely pre-release or research artifact generating curiosity. |
| [talkie-lm/talkie-1930-13b-base](https://huggingface.co/talkie-lm/talkie-1930-13b-base) | talkie-lm | 77 | 0 | Base counterpart to above; same zero-download anomaly with regional US tagging. |
| [TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros) | TenStrip | 86 | 0 | Zero-download placeholder with minimal tagging; possible upcoming video model tease. |

---

## 3. Ecosystem Signal

**Qwen has achieved ecosystem dominance** rivaling Meta's Llama in prior cycles. With four distinct variants in the top 30—base, MoE, GGUF, and community forks—Alibaba's family shows remarkable architectural breadth and community adoption. The 35B-A3B MoE's 2.7M downloads prove mixture-of-experts has transitioned from research curiosity to production default for efficient inference.

**Open-weight momentum accelerates against proprietary APIs.** Google's Gemma-4-31B-it (8M downloads) and DeepSeek-V4-Pro demonstrate that frontier-capable open weights now capture both hobbyist and enterprise deployment. Even OpenAI's presence—via the privacy-filter model—represents tacit acknowledgment of Hugging Face as distribution infrastructure.

**Quantization is no longer afterthought but primary distribution channel.** Unsloth's GGUF variants consistently out-download base models (Qwen3.6-35B-A3B-GGUF: 2.1M vs. base: 2.7M), while NVIDIA's NVFP4 variant achieves 7x BF16 downloads. The 1.25-bit Hy-MT translation model pushes boundaries of viable precision. This reflects hardware constraints driving software innovation—consumers demand frontier capability on commodity GPUs.

**Safety bypassing as growth strategy** remains problematically popular. Two of the top five fine-tunes by downloads are explicitly "uncensored" or "abliterated," with dealignai's Gemma-4 fork achieving 1,467 likes. This creates tension for foundation model providers balancing openness with responsible deployment.

**Multimodal unification** is the emerging frontier. NVIDIA's "Omni" branding and Qwen's image-text-to-text pipeline convergence suggest 2026's defining architecture will handle arbitrary input/output modalities through single models rather than stitched pipelines.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With 8M weekly downloads, this is the most battle-tested open vision-language model available. Its production readiness, Google's responsible AI tooling, and massive community validation make it the safest bet for multimodal product integration. The scale of deployment suggests robust error surface has been explored by the community.

**[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)** — The most technically ambitious model this week: true any-to-any reasoning with 277K downloads despite minimal marketing. NVFP4 quantization enables local deployment of capabilities that previously required API calls. For researchers studying multimodal architecture convergence or builders needing unified audio-visual-language understanding, this is essential study material.

**[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — If you have one consumer GPU and want frontier multimodal performance, this is the practical optimum. The MoE architecture's 3B active parameters during inference mean 35B-quality output at 8B-speed memory footprint. Unsloth's quantization preserves VLM capabilities surprisingly well, and 2.1M downloads have surfaced most failure modes. Ideal for prototyping before scaling to API-based solutions.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*