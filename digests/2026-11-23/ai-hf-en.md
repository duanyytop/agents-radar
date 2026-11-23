# Hugging Face Trending Models Weekly 2026-11-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-23 03:03 UTC

---

**Hugging Face Trending Models Digest – 2026-11-23**

---

### **Today's Highlights**  
The Hugging Face ecosystem continues to see explosive growth in multimodal and quantized models, with **Qwen3.8-27B** leading the pack in both likes (20,939) and downloads (6.3M), cementing its dominance in the LLM space. Notably, GGUF-optimized versions—especially from **unsloth** and **DavidAU**—are driving massive download spikes, with **unsloth/Qwen3.8-27B-GGUF** reaching over 7.6 million downloads. The rise of uncensored, fine-tuned variants (e.g., *Heretic*, *Defiant*, *Uncensored*) reflects growing demand for high-performance, unrestricted models. Meanwhile, **Lightricks/LTX-2.5** stands out as a top-performing image-to-video model with nearly 3M downloads, signaling strong momentum in generative video pipelines.

---

### **Trending Models**

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,939 | 6,297,396 | A flagship multimodal LLM with strong reasoning and conversational capabilities; widely adopted due to robust performance and open weights. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,578 | 1,827,784 | A heavily fine-tuned, uncensored GGUF variant optimized for speed and creativity—popular among power users seeking unfiltered output. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 2,082 | 2,266,182 | A compact yet powerful 9B-parameter GGUF model with aggressive fine-tuning for niche use cases; notable for community-driven customization. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,084 | 2,993,088 | A state-of-the-art image-to-video diffusion model with high temporal coherence; one of the most downloaded generation models this week. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,788 | 952,024 | A versatile text-to-image model with strong visual fidelity; popular for creative applications and prompt-based design workflows. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 810 | 381,769 | An omnimodal, quantized version of Qwen’s image generator with uncensored output—ideal for developers needing lightweight, high-speed inference. |
| [Apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | Apple | 539 | 0 | A new text-to-video model leveraging Wan-AI’s base architecture; promising early-stage innovation in AI video generation. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 642 | 0 | A specialized audio-to-audio model for voice isolation and speech enhancement; gaining attention for real-time audio cleanup in podcasts and calls. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | Facebook | 7,261 | 1,806,893 | A next-gen segmentation model with enhanced mask generation; widely used in robotics, medical imaging, and content editing. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | Facebook | 1,726 | 18,709 | Extends SAM to 3D human mesh recovery—key for motion capture and virtual avatars; emerging in VR/AR pipelines. |
| [briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0) | briaai | 334 | 225 | A highly accurate background removal model with alpha matting; favored for e-commerce and media production. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,365 | 7,683,660 | The most-downloaded GGUF model on Hub this week—optimized for local inference via llama.cpp; exemplifies the shift toward efficient, accessible deployment. |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 902 | 805,993 | A lightweight, quantized version of Inkling-2-Mini enabling fast inference on consumer hardware—ideal for edge devices. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 506 | 129,693 | A community-driven uncensored variant with improved freedom and responsiveness—popular in creative and experimental environments. |

---

### **Ecosystem Signal**  
The Hugging Face ecosystem is witnessing a clear bifurcation between **open-weight dominance** and **community-driven optimization**. Qwen and Inkling families are surging in popularity, particularly in their quantized (GGUF) forms, driven by tools like **unsloth** and **llama.cpp**, which enable low-latency, local inference. This trend highlights a maturing infrastructure where accessibility trumps raw size—users increasingly favor smaller, faster, and customizable models. Uncensored and fine-tuned variants (e.g., *Heretic*, *Defiant*, *Neo Imatrix*) reflect a growing appetite for models that bypass default safety filters, especially in creative and developer communities. Meanwhile, multimodal generation—particularly image-to-video and text-to-image—is accelerating, with Lightricks and Black Forest Labs leading in adoption. The dominance of GGUF files suggests a long-term shift toward decentralized, user-friendly model deployment, reducing reliance on cloud compute.

---

### **Worth Exploring**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – With over 7.6M downloads, it’s the gold standard for local, high-performance LLM inference. Ideal for developers building offline AI apps or deploying on edge devices.  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – The most downloaded generative video model this week, offering cinematic-quality image-to-video conversion. A must-try for creators exploring AI animation.  
3. **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** – Represents the cutting edge of community fine-tuning. Its blend of speed, capability, and “unrestricted” behavior makes it a compelling choice for experimental AI projects.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*