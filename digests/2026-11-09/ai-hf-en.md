# Hugging Face Trending Models Weekly 2026-11-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-09 02:04 UTC

---

---

### **Today's Highlights**  
The Hugging Face ecosystem is witnessing a surge in multimodal and quantized models, with **Lightricks/LTX-2.5** leading the pack with over 2.6 million downloads and 11K likes—highlighting strong demand for high-performance image-to-video generation. **Qwen/Qwen3.8-27B** dominates both likes (19,419) and downloads (7.6M), cementing Qwen’s position as a top-tier multimodal foundation model. Meanwhile, community-driven GGUF and uncensored fine-tunes of DeepSeek-V4 and Qwen3.5 variants are proliferating, reflecting growing interest in local inference and customizable LLMs. The rise of specialized pipelines like *image-to-3D* (e.g., *speridlabs/idol*) and *video editing* (e.g., *Viggle/Viggle-Remake*) signals maturing capabilities beyond text and static image generation.

---

### **Trending Models**

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,419 | 7,668,187 | A powerful multimodal model excelling in image-text understanding and conversation; one of the most downloaded models on HF. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,711 | 1,553,252 | A heavily modified, uncensored GGUF version of Qwen3.8-27B optimized for local inference and code generation. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,538 | 1,548,621 | A fast, optimized GGUF variant of Qwen3.8-Flash-Next, designed for low-latency inference via vLLM and Unsloth acceleration. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,558 | 73,562 | A lightweight but efficient 1.7B parameter LLM with strong text-generation performance, ideal for edge deployment. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,137 | 2,661,026 | A state-of-the-art diffusion-based model for image-to-video generation with exceptional motion coherence and style fidelity. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,761 | 1,167,959 | A ComfyUI-compatible version of Flux-3 focused on high-quality image generation and editing with advanced control over style and structure. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,726 | 76,804 | A quantized GGUF version of Qwen Image 2.1, enabling fast, local text-to-image generation with ComfyUI support. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 253 | 625,136 | A ComfyUI-optimized text-to-image model based on Minimax-H3, known for its expressive style and compatibility with custom workflows. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 516 | 1,083 | A new video-generation model from Pika leveraging H3 architecture, supporting audio-video synthesis and flexible scene control. |

#### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 921 | 254,053 | A 4B-parameter model fine-tuned for 3D content creation using Three.js, enabling direct code-to-3D mesh generation. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 275 | 33,641 | A specialized variant generating GLB files directly from prompts—ideal for game and VR developers. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,394 | 22,854 | An image-to-3D model using Gaussian Splatting to generate high-fidelity 3D assets from single images—popular among digital artists. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 858 | 7,088 | A highly aggressive uncensored fine-tune combining DeepSeek-V4 and Qwen3.5, popular among developers seeking unfiltered behavior. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 391 | 130,020 | A GGUF-quantized version of DeepSeek-V4.1-Flash with GSQ compression and RCO optimization for local inference. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,292 | 4,938 | A slimmed-down, MoE-based GGUF version of GLM-5.3 with neural architecture search optimizations for efficiency. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 187 | 136,706 | A niche but well-liked GGUF variant targeting inference speed and modularity with i1 quantization. |

---

### **Ecosystem Signal**  
As of November 2026, the Hugging Face ecosystem shows a clear pivot toward **local, efficient, and highly specialized inference**, driven by the explosion of GGUF and quantized models. Qwen and DeepSeek families dominate across categories—Qwen’s 3.8 and 3.5 series are particularly prominent, with numerous fine-tunes and quantizations tailored for code, 3D, and multimodal tasks. The rise of **uncensored and "heretic" variants** reflects user demand for unrestricted behavior, especially in creative and development workflows. Notably, **composable pipelines** are gaining traction: models like *LTX-2.5*, *Flux-3*, and *P-H3-Image-Comfy* are explicitly built for integration into tools like ComfyUI, signaling a shift from monolithic models to modular AI components. Open-weight models remain dominant, but proprietary architectures (e.g., Minimax-H3, Pika-H3) are increasingly open-sourced or repackaged for community use. This blend of open access and performance optimization underscores a maturing, democratized AI infrastructure where customization and deployment speed are paramount.

---

### **Worth Exploring**
1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – With over 2.6 million downloads, this model sets a benchmark for image-to-video generation. Its ability to produce cinematic-quality videos from still images makes it ideal for creators and animators exploring generative storytelling.
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – As the most downloaded model on HF, it offers unmatched multimodal reasoning. Researchers and developers should study its architecture and prompt engineering patterns to understand the current state of large-scale vision-language fusion.
3. **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** – A standout in the emerging field of image-to-3D generation via Gaussian Splatting. For those working in digital asset creation, gaming, or AR/VR, this model demonstrates how 2D inputs can be transformed into interactive 3D scenes with minimal effort.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*