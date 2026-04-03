# Hugging Face Trending Models Digest 2026-04-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-03 00:11 UTC

---

# Hugging Face Trending Models Digest — April 3, 2026

## 1. Today's Highlights

The Qwen 3.5 ecosystem continues its dominance with multiple community fine-tunes topping the charts, particularly Jackrong's Claude 4.6 Opus reasoning distillations which have captured significant developer attention. Google's Gemma-4 family is making a coordinated push across all parameter scales, from 26B MoE variants to experimental "any-to-any" architectures. Video generation is heating up with Lightricks' LTX-2.3 achieving massive download velocity, while 1-bit quantization (prism-ml's Bonsai series) signals growing demand for extreme edge deployment. Notably, "uncensored" fine-tunes from HauhauCS are driving substantial engagement, reflecting persistent demand for unfiltered model variants.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,128 | 428,791 | Top-trending reasoning-distilled model combining Qwen 3.5 architecture with Claude 4.6 Opus reasoning patterns for enhanced chain-of-thought performance. |
| [Qwen/Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B) | Qwen | 1,147 | 4,772,421 | Official dense release from the Qwen team, achieving massive adoption as a production-ready multimodal foundation model. |
| [HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,150 | 621,967 | Aggressive uncensored MoE variant gaining traction for research requiring reduced safety filtering. |
| [nvidia/Nemotron-Cascade-2-30B-A3B](https://huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B) | nvidia | 453 | 114,462 | NVIDIA's latest cascade architecture for efficient inference, targeting enterprise deployment scenarios. |
| [chromadb/context-1](https://huggingface.co/chromadb/context-1) | chromadb | 356 | 2,820 | Purpose-built retrieval-augmented generation model from the vector database company, optimized for long-context applications. |
| [LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M) | LiquidAI | 200 | 7,703 | Compact liquid foundation model demonstrating state-space alternative to transformers at sub-billion scale. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Lightricks/LTX-2.3](https://huggingface.co/Lightricks/LTX-2.3) | Lightricks | 868 | 1,541,633 | Dominant video generation release with exceptional throughput, supporting image-to-video, text-to-video, and video-to-video pipelines. |
| [baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 811 | 19,085 | Baidu's production OCR system leveraging InternVL architecture for document understanding and visual text extraction. |
| [CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | CohereLabs | 733 | 71,028 | Fresh Cohere speech recognition release positioning as open-weight alternative to Whisper-class models. |
| [mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603) | mistralai | 632 | 4,316 | Mistral's compact text-to-speech entry, notable for vLLM backend integration and multilingual support. |
| [GAIR/daVinci-MagiHuman](https://huggingface.co/GAIR/daVinci-MagiHuman) | GAIR | 288 | 670 | Ambitious human-centric video generation model with unified audio-video synthesis capabilities. |
| [facebook/sam3.1](https://huggingface.co/facebook/sam3.1) | facebook | 115 | 4,858 | Latest Segment Anything iteration with video segmentation capabilities, building on the SAM3 architecture. |
| [kpsss34/FHDR_Uncensored](https://huggingface.co/kpsss34/FHDR_Uncensored) | kpsss34 | 329 | 250,221 | High-dynamic-range image generation fine-tune with significant download velocity in the artistic community. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [microsoft/harrier-oss-v1-0.6b](https://huggingface.co/microsoft/harrier-oss-v1-0.6b) | microsoft | 139 | 2,814 | Qwen3-based embedding model optimized for MTEB benchmarks, targeting RAG and semantic search applications. |
| [microsoft/harrier-oss-v1-270m](https://huggingface.co/microsoft/harrier-oss-v1-270m) | microsoft | 111 | 3,029 | Lightweight Gemma3-text variant in Microsoft's embedding series, offering efficiency-focused retrieval. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 922 | 674,007 | Highest-download uncensored GGUF release, demonstrating massive demand for unfiltered 9B parameter models. |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) | Jackrong | 546 | 745,910 | Most-downloaded GGUF variant, enabling local deployment of the top-trending reasoning model. |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF) | Jackrong | 467 | 202,605 | Iterated v2 quantization with improved compatibility, sustaining strong community interest. |
| [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 315 | 13,844 | Extreme 1-bit quantization breakthrough enabling 8B model deployment on severely constrained hardware. |
| [prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit) | prism-ml | 116 | 7,582 | Apple Silicon-optimized MLX port of the 1-bit Bonsai architecture, expanding edge accessibility. |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 86 | 1 | Fresh Unsloth quantization of Google's MoE Gemma-4, positioned for rapid adoption as GGUF ecosystem matures. |

---

## 3. Ecosystem Signal

**Qwen 3.5 has achieved clear ecosystem dominance**, with the official 9B release approaching 5 million downloads and community fine-tunes occupying 6 of the top 20 positions. The "Claude 4.6 Opus Reasoning Distilled" phenomenon—exemplified by Jackrong's variants—reveals sophisticated community distillation practices that merge proprietary model capabilities with open-weight architectures. Google's **Gemma-4 family launch strategy** is notably comprehensive, spanning dense (31B), MoE (26B-A4B, 35B-A3B), and experimental "any-to-any" configurations, suggesting serious investment in multimodal foundation models.

The quantization landscape shows **bifurcation**: extreme compression (1-bit Bonsai series for edge) coexists with high-fidelity GGUF releases preserving reasoning capabilities. The "uncensored" tag's prevalence—particularly HauhauCS's aggressive fine-tunes—indicates persistent market segmentation between safety-aligned and unrestricted models. Proprietary players (Cohere, Mistral) are maintaining open-weight release cadences, though with narrower task specialization. Video generation is consolidating around fewer, higher-quality releases (LTX-2.3's 1.5M downloads dwarf competitors), suggesting this modality is approaching production maturity.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — This represents the current frontier of community-driven capability transfer: a 27B parameter model exhibiting reasoning patterns distilled from Claude 4.6 Opus. Worth studying for both the technical methodology (how reasoning traces were extracted and transferred) and practical evaluation of whether smaller distilled models can match larger proprietary systems on complex reasoning benchmarks.

**[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** — The 1-bit quantization approach here is genuinely experimental, potentially enabling 8B-parameter deployment on consumer hardware that previously topped out at 3B models. Critical to evaluate: whether task performance degradation is acceptable for the deployment gains, and whether this compression paradigm generalizes beyond the Qwen3 architecture.

**[Lightricks/LTX-2.3](https://huggingface.co/Lightricks/LTX-2.3)** — With 1.5M downloads, this is achieving production-scale adoption in video generation. The unified pipeline (image-to-video, text-to-video, video-to-video) suggests architectural consolidation that may define the next generation of video foundation models. Worth exploring for understanding how quality and throughput are being balanced in commercial-grade open video models.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*