# Hugging Face Trending Models Weekly 2026-11-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-16 02:22 UTC

---

---

### **Today's Highlights**  
The Hugging Face ecosystem is witnessing a surge in multimodal and quantized models, with Qwen3.8-27B leading in downloads and popularity due to its strong performance in image-text-to-text tasks. The MiniMax-H3 series dominates the image and video generation space, with both *MiniMax-H3-Image* and *MiniMax-H3* ranking among the top 5 in downloads. Notably, GGUF-quantized versions of Qwen and DeepSeek models are gaining traction for local inference, driven by community fine-tunes like *DavidAU*'s uncensored variants. Meanwhile, Facebook’s *SAM3* and *DINOv3* show sustained interest in foundational vision models, signaling growing demand for robust feature extractors.

---

### **Trending Models**

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,130 | 6,547,772 | A powerful 27B parameter model optimized for image-text-to-text and conversational AI; one of the most downloaded models on HF, reflecting massive adoption in multimodal applications. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 7,548 | 27,037 | A highly modified, uncensored version of DeepSeek-V4 Pro fused with Qwen3.5-9B, popular among users seeking unfiltered reasoning and creative output. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,000 | 6,566,295 | A GGUF-quantized variant of Qwen3.8-27B optimized for local inference via Unsloth’s fast training pipeline—top download count among quantized models. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,800 | 103,744 | A lightweight yet capable text-generation model built for efficiency, ideal for edge deployment and low-latency inference. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,190 | 571,067 | A top-performing text-to-image model with strong visual coherence; widely used across ComfyUI workflows and community tools. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,067 | 2,754,355 | An advanced image-to-video model enabling high-quality motion generation from static images; rapidly adopted for creative content pipelines. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 412 | 1,973,388 | A ComfyUI-compatible wrapper of MiniMax-H3-Image, driving widespread use in decentralized AI art workflows. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,255 | 1,182,267 | A compact, ComfyUI-ready diffusion model focused on image editing and generation with minimal resource overhead. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,367 | 33,423 | A cutting-edge image-to-3D model using Gaussian splatting; emerging as a key tool for AR/VR asset creation. |
| [meituan-longcat/LongCat-2.5](https://huggingface.co/meituan-longcat/LongCat-2.5) | meituan-longcat | 269 | 1,573 | A multimodal model designed for long-context reasoning and image-text understanding, with early signs of niche adoption. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,658 | 2,011,153 | The latest iteration of Segment Anything Model, now supporting video segmentation and enhanced prompt generalization—widely used in medical imaging and robotics. |
| [facebook/dinov3-vitl16-pretrain-lvd1689m](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m) | facebook | 2,286 | 687,007 | A large-scale vision transformer pre-trained on diverse data; excels at zero-shot classification and transfer learning across domains. |
| [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) | pyannote | 4,431 | 4,905,484 | One of the most popular speaker diarization models, enabling accurate voice separation in meetings and podcasts—essential for transcription pipelines. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,170 | 1,708,637 | A heavily fine-tuned, uncensored GGUF version of Qwen3.8-27B with enhanced coding and narrative abilities—popular for local AI experimentation. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 1,791 | 2,139,859 | A 9B variant with aggressive fine-tuning and multiple optimization layers; one of the highest-downloaded GGUF models for personal AI setups. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 296 | 149,532 | A decensored, community-optimized GGUF version of Gemma-4-31B, tailored for open-ended creativity and roleplay scenarios. |
| [Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF) | Abiray | 236 | 127,803 | A GGUF-converted version of MiniMax-H3-Image, enabling efficient local inference on consumer hardware—key for indie artists and developers. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,178 | 4,202,683 | A massively popular uncensored, abliterated GGUF variant of Qwen3.8-27B—drives local AI innovation with minimal guardrails. |

---

### **Ecosystem Signal**  
As of November 2026, the Hugging Face ecosystem shows a clear pivot toward **open-weight, locally deployable models**, particularly those leveraging **GGUF quantization** and **community-driven fine-tunes**. The Qwen family remains dominant, with Qwen3.8-27B and its derivatives leading in both likes and downloads—evidence of strong developer trust in scalable, multimodal reasoning. The rise of uncensored and "heretic" variants (e.g., DavidAU’s and huihui-ai’s models) signals growing demand for unrestricted AI capabilities, especially for creative and experimental use cases. Meanwhile, **MiniMax-H3** has emerged as a major player in generative AI, with multiple variants across image, video, and ComfyUI compatibility driving adoption. Facebook’s continued investment in foundational vision models like SAM3 and DINOv3 underscores the importance of robust, general-purpose vision systems. The dominance of GGUF formats indicates that **local inference** is no longer niche—it’s mainstream, fueled by tools like Unsloth and community modding. Open-source momentum is outpacing proprietary models, though commercial players remain influential through base model releases.

---

### **Worth Exploring**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – For anyone building local AI apps, this model offers unmatched speed and efficiency via Unsloth’s optimized inference stack. Its 6.5M+ downloads prove it’s a benchmark for GGUF performance.  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – If you're exploring AI video generation, this model stands out for its ability to animate still images with cinematic quality and temporal consistency—ideal for creators and animators.  
3. **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** – A must-study for understanding how community fine-tuning can unlock extreme capabilities in open models, especially for code generation and narrative crafting.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*