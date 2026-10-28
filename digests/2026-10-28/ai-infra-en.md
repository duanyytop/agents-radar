# AI Infrastructure Digest 2026-10-28

> Generated: 2026-10-28 01:38 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-28**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in Q4 2026 is defined by rapid convergence on next-gen hardware (Blackwell SM120, AMD MI355X/gfx1250), aggressive optimization for multimodal and agent-centric workloads, and a growing emphasis on reproducibility, cost control, and cross-platform portability. Projects are no longer siloed—vLLM, SGLang, and llama.cpp are pushing kernel-level performance; Ollama and LiteLLM are unifying model access via lightweight gateways; while Unsloth is redefining the developer experience with integrated agent orchestration. The shift from pure serving to full-stack agent platforms is accelerating, driven by demand for real-time, low-latency, and highly scalable inference across diverse hardware.

---

### **2. Activity Comparison**

| Project       | Issues Open (Last 24h) | PRs Merged (Last 24h) | Releases (Last 24h) |
|---------------|------------------------|------------------------|----------------------|
| **vLLM**      | 12                     | 5                      | 0                    |
| **SGLang**    | 14                     | 7                      | 0                    |
| **llama.cpp** | 9                      | 6                      | 3 (b11944, b11930, b11940) |
| **Ollama**    | 11                     | 3                      | 0                    |
| **LiteLLM**   | 10                     | 5                      | 4 (v1.106.5, v1.105.6, v1.104.8, v1.103.10) |
| **Unsloth**   | 8                      | 2                      | 0                    |

> ✅ *Observation: High activity across all projects indicates mature, fast-moving ecosystems. Release velocity peaks in llama.cpp and LiteLLM due to frequent patching of stability and billing issues.*

---

### **3. Model Support Race**

| New Model / Architecture         | Supported By                          | Status & Notes |
|----------------------------------|---------------------------------------|----------------|
| **DeepSeek-V4-Flash/4.1-Flash**  | vLLM (#50576), SGLang (#44304)         | Partial on SM120; critical regressions in vLLM |
| **Qwen3.8-Flash-Next (NVFP4)**   | SGLang (✅), vLLM (⚠️), llama.cpp (✅) | SGLang leads with ROCm/NVIDIA support |
| **Qwen3.8-2.4T-A95B-MXFP4**     | vLLM (✅), SGLang (✅)                 | AMD-specific optimizations underway |
| **GLM-5.3-Flash**                | vLLM (✅), SGLang (✅)                 | MXFP4 + MonoKernel support in progress |
| **LFM3 Series (Audio/VL/Decision)** | llama.cpp (✅), Ollama (✅), Unsloth (📌 Requested) | llama.cpp and Ollama lead; Unsloth lags |
| **AMD RDNA3/RDNA4 (gfx1100–1201)** | SGLang (📌 Plan #30599), vLLM (⚠️)     | SGLang actively expanding consumer GPU reach |
| **RTX PRO 6000 Blackwell (SM120)** | vLLM (⚠️), SGLang (✅), Ollama (❌)     | vLLM has major regression; SGLang stable |

> 🏆 **Winner**: **SGLang** — most comprehensive early adoption of new models (Qwen3.8-Flash-Next, LFM3), with proactive ROCm and consumer GPU enablement.  
> ⚠️ **Notable Gaps**: Unsloth lacks LFM3 support; Ollama struggles with LFM3 architecture detection despite GGUF integration.

---

### **4. Performance Frontier**

| Optimization Focus             | Leading Projects                                | Key Developments |
|-------------------------------|------------------------------------------------|------------------|
| **KV Cache Compression**       | vLLM (SpectralQuant RFC), SGLang (HiCache)     | vLLM’s SpectralQuant aims for 2× compression via signal concentration |
| **Speculative Decoding**       | vLLM, SGLang, llama.cpp                         | vLLM reduces redundant projections; SGLang fixes JIT crashes |
| **Hardware-Specific Kernels**  | SGLang (gfx1250), vLLM (SM120), llama.cpp (Hexagon) | SGLang fuses RoPE+concat+KV write; llama.cpp optimizes TOP_K sampling |
| **Distributed Serving**        | SGLang (PD disaggregation), vLLM (PDL flags)     | SGLang enables async transfer tracking; vLLM explores auto-enablement |
| **Quantization & Offload**     | vLLM (MXFP4), llama.cpp (ClassLRU cache), SGLang (GatedDeltaNet) | ClassLRU improves throughput by +6%–7% |
| **Memory Efficiency**          | llama.cpp (`--models-memory-max`), Ollama (resumption) | Dynamic unload and partial pull recovery now standard |

> 🔥 **Frontier Focus**: Kernel fusion (SGLang), structural compression (vLLM), and dynamic memory management (llama.cpp/Ollama) dominate today’s innovation.

---

### **5. Layer Positioning**

| Project       | Primary Layer                  | Role Summary |
|---------------|-------------------------------|--------------|
| **vLLM**      | **Inference Engine**           | High-performance GPU-serving core; optimized for Hopper/Blackwell, MoE, speculative decoding |
| **SGLang**    | **Inference Engine + Gateway** | Full-stack engine with PD disaggregation, HiCache, and protocol flexibility; bridges model and app |
| **llama.cpp** | **Local Runtime / Edge Inference** | Lightweight, multi-backend (Vulkan/SYCL/MLX), ideal for on-device and CPU/GPU hybrid use |
| **Ollama**    | **Model Gateway / CLI Runtime** | Developer-friendly interface layer; abstracts backend complexity, enables local model deployment |
| **LiteLLM**   | **API Gateway / Cost Proxy**   | Universal API layer with cost accounting, tool-use routing, and cloud provider abstraction |
| **Unsloth**   | **Agent Platform / Training UI** | Shifts toward full-stack agent workflow with MCP integration, visual tools, and benchmarking |

> 📊 **Strategic Differentiation**:  
> - **vLLM/SGLang**: Pushing raw performance at scale.  
> - **llama.cpp/Ollama**: Prioritizing accessibility and edge deployment.  
> - **LiteLLM**: Monetizing and governing inference flows.  
> - **Unsloth**: Building the future of autonomous agents.

---

### **6. Trend Signals**

1. **Hardware First, Software Second**  
   Projects are racing to support **SM120 (Blackwell)** and **AMD gfx1250**, signaling that next-gen GPUs are already shaping software development priorities. vLLM’s high-priority regression on Blackwell highlights the risk of premature adoption.

2. **Agent-Centric Design is Now Standard**  
   All projects now include features for agentic workflows: SGLang’s Agentic Cache Scheduling, Unsloth’s MCP integration, Ollama’s `tool_reference`, and LiteLLM’s improved tool call handling. This reflects a clear pivot from static LLM serving to dynamic, multi-step reasoning systems.

3. **Reproducibility & Trust Are Critical**  
   vLLM’s RFC on **reproducible BYOG benchmarks** and LiteLLM’s **budgeting inconsistency fix (Issue #27735)** show growing awareness of trust and auditability in inference pipelines—essential for production systems.

4. **Multimodal Workflows Are Live**  
   With LFM3 audio/vision support in **llama.cpp** and **Ollama**, and Cloudflare Workers AI on deck in **LiteLLM**, real-time multimodal agents are no longer experimental—they’re deployable.

5. **Security & Stability Matter More Than Features**  
   Despite feature momentum, **critical regressions** (e.g., vLLM crash on SM120, Ollama infinite loops) indicate that stability is still a bottleneck. Developers must prioritize testing on target hardware before production rollout.

---

### **Recommendations for Application Developers**
- **For production inference**: Use **SGLang** or **vLLM** on Blackwell/ROCm with latest builds; avoid `--enforce-eager` until fixes land.
- **For edge/on-device**: Prefer **llama.cpp** with `--models-memory-max` and Hexagon/MLX backends.
- **For agent workflows**: Leverage **Unsloth Studio** for multi-agent orchestration, but monitor Windows/AMD GPU bugs.
- **For cost-sensitive apps**: Use **LiteLLM** with verified releases and avoid streaming `tool_choice` until #48481 is fixed.
- **For enterprise RAG/multimodal**: Combine **Ollama (OCI support)** + **llama.cpp (LFM3)** + **LiteLLM (cost tracking)**.

> ✅ **Final Note**: The ecosystem is maturing rapidly—but stability, reproducibility, and hardware parity remain key risks. Monitor issue trackers closely, especially for new GPU architectures.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-28**

---

### **1. Today's Highlights**  
The vLLM project is advancing critical support for next-generation hardware, with a strong focus on **Blackwell (SM120)** and **ROCm/Mi355X** performance optimization. Key efforts include enabling DeepSeek-V4-Flash/DeepSeek-V4.1 on SM8x and SM120 GPUs, resolving speculative decoding regressions, and optimizing Qwen3.8-2.4T-A95B and GLM-5.3-Flash on AMD ROCm platforms. A new RFC proposes reproducible BYOG benchmarks to improve PR review quality.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **SM120 (RTX PRO 6000 Blackwell, Hopper/Blackwell-era GPUs)**:  
  - Issue [#50576](https://github.com/vllm-project/vllm/issues/50576) tracks support for `DeepSeek-V4-Flash` and `DeepSeek-V4.1-Flash` on SM120 (compute capability 12.0). This is crucial for RTX 5090 and upcoming workstations.  
  - Issue [#40802](https://github.com/vllm-project/vllm/issues/40802) reiterates demand for full SM120 support.  
- **ROCm / AMD MI355X**:  
  - Multiple performance optimization issues ([#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575)) target `Qwen3.8-2.4T-A95B-Quark-MXFP4` and `Qwen3.8-Flash-Next-Quark-MXFP4`, leveraging MXFP4 MoE and sparse attention.  
  - PR [#64121](https://github.com/vllm-project/vllm/pull/64121) enables `--kv-cache-dtype mxfp4_mla` for GLM-5.3-Flash on ROCm, improving memory efficiency.  
- **Rust Frontend (RFC)**:  
  - Issue [#40846](https://github.com/vllm-project/vllm/issues/40846) continues discussion on a Rust-based front-end to reduce Python overhead and improve performance portability.

---

### **4. Performance & Optimization**  
- **Speculative Decoding Efficiency**:  
  - PR [#63710](https://github.com/vllm-project/vllm/pull/63710) reduces redundant computation in DeepSeek-V4.1 DSpark during long prefills by skipping unnecessary context projections—improving throughput on large inputs.  
- **KV Cache Compression & Offloading**:  
  - RFC [#43475](https://github.com/vllm-project/vllm/issues/43475) proposes **SpectralQuant**, an advanced KV cache compression method building on TurboQuant (#38479), promising up to 2× better compression ratios via structural signal concentration.  
  - PR [#40545](https://github.com/vllm-project/vllm/pull/40545) adds fused MoE tuning support for Kimi-VL-A3B, improving model-specific kernel performance.  
- **PDL & Low-Latency Optimizations**:  
  - Issue [#40543](https://github.com/vllm-project/vllm/issues/40543) documents undocumented `TRTLLM_ENABLE_PDL` and `TORCHINDUCTOR_ENABLE_PDL` flags that boost low-latency performance on Hopper/Blackwell GPUs—now under RFC for potential auto-enablement.

---

### **5. Stability & Regressions**  
- **Critical Speculative Decoding Regression**:  
  - Issue [#56892](https://github.com/vllm-project/vllm/issues/56892): Extremely low decode throughput on **8x RTX PRO 6000 Blackwell (SM120)** when using `--enforce-eager`. CUDA graphs are unusable; this is a high-priority fix.  
- **System Message Validation Bug**:  
  - Issue [#41114](https://github.com/vllm-project/vllm/issues/41114): Incorrect error message `"System message must be at the beginning."` when using `qwen3.6-27B`—blocks valid prompts.  
- **Accuracy Collapse on ROCm**:  
  - Issue [#60160](https://github.com/vllm-project/vllm/issues/60160): High-concurrency inference of `Qwen3.8-27B-FP8` on MI355X collapses accuracy when `VLLM_ROCM_USE_AITER=1`—fine with AITER off.  
- **Crash on OpenShift**:  
  - Issue [#44548](https://github.com/vllm-project/vllm/issues/44548): `gemma4-unified-cu129` image crashes immediately due to `KeyError` in containerized environments.

---

### **6. What This Means for Application Developers**  
- **Deploying on Blackwell GPUs?** Expect suboptimal performance or failure with DeepSeek-V4.1/Flash until SM120 support lands—monitor [#50576](https://github.com/vllm-project/vllm/issues/50576) and [#56892](https://github.com/vllm-project/vllm/issues/56892) for fixes. Use `--enforce-eager` cautiously on SM120.  
- **Using AMD ROCm?** Ensure you’re on latest builds; performance gaps exist for Qwen3.8 and GLM-5.3. Track [#57149](https://github.com/vllm-project/vllm/issues/57149) and [#64121](https://github.com/vllm-project/vllm/pull/64121) for optimized MXFP4 and MonoKernel support.  
- **Building Agents with Speculative Decoding?** Avoid `DFlash` for long prompts—use PR [#63710](https://github.com/vllm-project/vllm/pull/63710)’s optimizations. Also, watch for acceptance length regression in Eagle/Eagle3 drafts ([#41838](https://github.com/vllm-project/vllm/issues/41838)).  
- **Need Reproducible Benchmarks?** Join the discussion on [#61698](https://github.com/vllm-project/vllm/issues/61698)—a formal BYOG benchmark framework is being proposed to validate performance and accuracy claims across PRs.

---  
*Source: [vLLM GitHub Repository](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-10-28

---

### **1. Today's Highlights**  
The SGLang project continues its momentum in scaling inference infrastructure, with major progress on **Prefill-Decode (PD) disaggregation** and **AMD ROCm support** for consumer GPUs. Critical stability fixes address speculative decoding crashes and HiCache race conditions, while new performance optimizations target AMD gfx1250 and Hopper (SM90) architectures—particularly for Qwen3.8-Flash-Next and GLM-5.3-Flash.

---

### **2. Releases & Breaking Changes**  
None. No new releases or breaking API/config changes were published in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **AMD RDNA3/RDNA4 (gfx1100/gfx1101/gfx1200/gfx1201)**: Tracking issue #30599 outlines a strategic enablement plan to extend official ROCm support beyond datacenter Instinct GPUs to consumer Radeon cards.
- ✅ **Qwen3.8-Flash-Next (NVFP4)**: Now supported on **AMD MI355X (gfx950)** and **RTX PRO 6000 (sm_120)** via PRs #44304 and #44291; includes FP8 MoE, GatedDeltaNet, and QuerySparse Attention.
- ✅ **Nemotron-3-Embed-1B-BF16/NVFP4**: Native support added via PR #45885 for NVIDIA’s retrieval-focused embedding model.
- 🔧 **Apple Silicon (MLX/Torch interoperability)**: Redesign roadmap #32321 proposes a Torch-owned SRT path with exported MLX model regions—key for future Metal-accelerated serving.

---

### **4. Performance & Optimization**  
- ⚡ **AMD gfx1250**: Multiple kernel-level optimizations landed:
  - Fuse RoPE + concat + KV-cache write (#44459)
  - Use paged Gluon MLA decode backend (#44458)
  - Skip unnecessary K rescaling when `k_scale=1.0` (#44457)
  - Replace `torch.bmm` with batched BF16 GEMM via aiter (#44456)
- ⚡ **NVIDIA SM90 (Hopper)**:
  - W8A16 small-M GEMM added for GLM-5.2 block-FP8 decode projections (#45862): up to **6.8% lower latency per token**, without increasing weight memory footprint.
- ⚡ **HiCache & Disaggregation**:
  - Optimize ack queue drains using slice deletion instead of `list.pop(0)` (#46903): reduces O(k*N) overhead in async transfer tracking.
  - Stop device admission at first refusal in decode transfer pass (#46898): improves scalability under high load.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| 🚨 High | [#43412](https://github.com/sgl-project/sglang/issues/43412) | Speculative decoding crashes server on first non-greedy request due to FlashInfer JIT failure in pip-installed CUDA bundles | ❌ Open — root cause: bundled cccl vs pip cu13 toolkit mismatch |
| 🟡 Medium | [#44070](https://github.com/sgl-project/sglang/issues/44070) | PD prefill: early cached-prefix send transfers stale KV before HiCache load-back completes | ❌ Open — silent correctness bug affecting prefix reuse |
| 🟡 Medium | [#45755](https://github.com/sgl-project/sglang/issues/45755) | `flashinfer_mxfp4` computes GPT-OSS SwiGLU instead of SiTU on Kimi-K3 (SM90) | ❌ Open — depends on upstream flashinfer-ai/flashinfer#4209 |
| 🟡 Medium | [#44291](https://github.com/sgl-project/sglang/issues/44291) | EP2 (tp=2 + ep=2) crashes with illegal memory access on Qwen3.8-Flash-Next-NVFP4 (sm_120) | ❌ Open — kernel-level memory access violation |

> 💡 *Note: The flaky CI infrastructure issue #42752 (134 comments) remains unresolved and impacts PR validation across multiple teams.*

---

### **6. What This Means for Application Developers**  
- **For large-scale deployments**: Prioritize PD disaggregation configurations using the new flags documented in PR #46904. Ensure `SGLANG_DISAGG_PREFILL_EARLY_SEND_CACHED_PREFIX=1` is used cautiously—avoiding stale KV issues requires careful request scheduling.
- **For AMD users**: If targeting consumer RDNA3/RDNA4 cards, use the latest ROCm builds and monitor #30599 for official support updates. The new recipes in PR #46757 provide validated configs for Qwen3.5 on MI355X.
- **For agents & agentic workflows**: The Agentic Cache Scheduling Roadmap (#43098) introduces supernode-wide L1/L2 cache sharing—critical for reducing redundant computation across parallel agents.
- **For stability-critical apps**: Avoid speculative decoding with pip-installed CUDA toolkits until #43412 is resolved. Prefer system CUDA or containerized environments with consistent toolchain alignment.
- **For edge/AI-on-device**: Apple Silicon support via MLX integration (PR #36164) opens the door to low-latency, on-device inference—ideal for mobile or embedded agents.

> 🔗 [View full issue tracker](https://github.com/sgl-project/sglang/issues?q=is%3Aopen+sort%3Aupdated-desc) | [Latest PRs](https://github.com/sgl-project/sglang/pulls?q=is%3Aopen+sort%3Aupdated-desc)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-28**

---

### **1. Today's Highlights**  
The latest updates focus on expanding support for LiquidAI’s LFM3 family of multimodal models, including audio, vision, and decision-making variants (LFM3-Audio-2B, LFM3-Omni-2B, LFM3-1.7B, LFM3-VL-2B), with full integration into the server and CLI via `/v1/realtime` and tool call support. New capabilities include reasoning effort level exposure in chat templates, dynamic model unloading via `--models-memory-max`, and improvements to speculative decoding performance and MoE caching.

---

### **2. Releases & Breaking Changes**  
- **`b11944`**: Added exposure of reasoning effort levels (minimal → max) in chat templates via server-side capability probing ([#31271](https://github.com/ggml-org/llama.cpp/pull/31271)). This enables fine-grained control over agent behavior in real-time inference.
- **`b11930`**: Introduced `--models-memory-max` parameter to dynamically unload models exceeding a memory threshold, improving multi-model server stability on constrained devices ([#21231](https://github.com/ggml-org/llama.cpp/issues/21231)).
- **`b11940`**: Added support for deferred tools and `tool_reference` content parts in common schema ([#31256](https://github.com/ggml-org/llama.cpp/pull/31256)).

> 🔗 *All releases: [GitHub Releases](https://github.com/ggml-org/llama.cpp/releases)*

---

### **3. New Model & Hardware Support**  
- **New Models**:  
  - `LiquidAI/LFM3-Audio-2B` and `LiquidAI/LFM3-Omni-2B` added with full support for audio input/output and tool use ([#31257](https://github.com/ggml-org/llama.cpp/pull/31257)).  
  - `LiquidAI/LFM3-1.7B` and `LiquidAI/LFM3-VL-2B` added as part of the LFM3 family ([#31252](https://github.com/ggml-org/llama.cpp/pull/31252)).  
  - `LiquidAI/d1-2B` and `LiquidAI/d1-omni-2B` (decision models) now supported ([#31275](https://github.com/ggml-org/llama.cpp/pull/31275)).

- **Backends & Quantizations**:  
  - Vulkan: Fixed broadcast handling in `MUL_MAT` for dim-3 compatibility ([#31239](https://github.com/ggml-org/llama.cpp/pull/31239)).  
  - SYCL: Added VRAM cap enforcement to prevent overcommit ([#31285](https://github.com/ggml-org/llama.cpp/pull/31285)).  
  - Hexagon: Added `DSV4_HC_PRE` and `DSV4_HC_POST` ops for advanced quantized inference ([#30953](https://github.com/ggml-org/llama.cpp/pull/30953)).

---

### **4. Performance & Optimization**  
- **Moe Cache**: PR [#31233](https://github.com/ggml-org/llama.cpp/pull/31233) introduces **ClassLRU**, a hybrid LRFU/MQ-inspired cache that improves decode throughput by **+6% (QFN)** and **+7% (GLM)**, with **8% fewer GPU uploads** under warm-cache conditions.
- **Speculative Decoding**:  
  - PR [#31278](https://github.com/ggml-org/llama.cpp/pull/31278) excludes unloaded MTP layers from GPU placement counts, enabling better CPU/GPU layer distribution on VRAM-limited devices (e.g., RTX 4070 Super).  
  - PR [#31284](https://github.com/ggml-org/llama.cpp/pull/31284) re-instantiates CUDA graphs when kernel cluster dims change (critical for Hopper sm_120), reducing hangs and improving long-context stability.
- **Kernel Optimizations**:  
  - Hexagon backend: Faster TOP_K sampling via optimized kernel reduces draft processing overhead by up to **42%** in DFlash profiles ([#31279](https://github.com/ggml-org/llama.cpp/pull/31279)).

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - `llama-server` crashes on Windows/Vulkan with `0xC0000005` error due to improper context checkpointing ([#27560](https://github.com/ggml-org/llama.cpp/issues/27560)) — reported on AMD Ryzen AI 9 HX 370.  
  - Vulkan on Intel Gen9.5 iGPU (UHD 630) causes deterministic hang + `SIGABRT` with `q8_0` KV cache ([#29054](https://github.com/ggml-org/llama.cpp/issues/29054)).
- **Correctness Bugs**:  
  - Speculative decoding (`draft-mtp`) diverges from vanilla output on quantized targets (e.g., Q4_K_M), but matches on `bf16` — critical for consistency in agents ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)).  
  - Hybrid LFM2 models produce corrupted output when co-batching sequences due to recurrent state corruption ([#29002](https://github.com/ggml-org/llama.cpp/issues/29002)).
- **Memory Issues**:  
  - `repeat_last_n` / `dry_penalty_last_n` can allocate multi-GB zero-filled buffers, leading to OOM in servers ([#29494](https://github.com/ggml-org/llama.cpp/issues/29494)).

> ⚠️ *Fixes are in progress or pending review; no stable patches yet.*

---

### **6. What This Means for Application Developers**  
- **Build robust agents**: Use `--models-memory-max` and `--slot-attach` to manage memory-heavy multi-model deployments. Leverage exposed reasoning effort levels to conditionally trigger deep reasoning steps.
- **Integrate multimodal workflows**: The new LFM3 support enables real-time audio + video input in `mtmd-cli` and `/v1/realtime`. Use `--tools` and `tool_reference` for structured agent interactions.
- **Optimize speculative decoding**: Avoid `draft-mtp` on older GPUs until fixes land; monitor for divergence on quantized models. Prefer `d2t`-trimmed vocabularies where available.
- **Watch out for regressions**: Do not use `q8_0` KV cache on Intel Gen9.5 iGPUs or `--split-mode layer` on ROCm. Limit batch sizes if using `repeat_last_n` or `dry_penalty_last_n`.

> ✅ *Recommended: Pin to `b11944` or later for production; avoid `b11930` if using Vulkan on low-end Intel GPUs.*  
> 🔗 *Full changelog: [GitHub Release Notes](https://github.com/ggml-org/llama.cpp/releases/tag/b11944)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-28**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand support for new models and hardware, with critical fixes for LFM3 GGUF compatibility and CUDA/MLX stability on recent GPUs. Key PRs address streaming reliability, model pull resumption after server restarts, and improved handling of multimodal embeddings—essential for agent and RAG applications.  

---

### **2. Releases & Breaking Changes**  
*None* — No new releases were published in the past 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **LFM3 GGUF**: PR [#19344](https://github.com/ollama/ollama/pull/19344) adds foundational support for LiquidAI’s LFM3 series (including `lfm3-audio:latest`), fixing BOS token handling and enabling text-to-speech via updated `llama.cpp`.  
- ✅ **MLX Backend**: PR [#18780](https://github.com/ollama/ollama/pull/18780) adds Kolibri 1 support; PR [#19197](https://github.com/ollama/ollama/pull/19197) enables concurrent generation for MLX models via `OLLAMA_NUM_PARALLEL`.  
- ✅ **AMD Radeon RX 6750 GRE 10GB**: Issue [#19329](https://github.com/ollama/ollama/issues/19329) requests native support for Navi23 architecture (ROCm), signaling growing demand for AMD GPU parity.  
- ✅ **OCI Registry Integration**: PRs [#4204](https://github.com/ollama/ollama/pull/4204) and [#9215](https://github.com/ollama/ollama/pull/9215) advance OCI registry support with authentication and proxy mode, enabling enterprise-grade model distribution.

---

### **4. Performance & Optimization**  
- 🔧 **Streaming Efficiency**: PR [#19331](https://github.com/ollama/ollama/pull/19331) introduces heartbeat detection for idle streams (>15s), improving UX during long prompt evaluations.  
- 🚀 **GPU Memory Utilization**: PR [#19197](https://github.com/ollama/ollama/pull/19197) allows concurrent generation on MLX backends, reducing first-token latency by sharing projection/FFN layers while maintaining attention isolation.  
- ⚙️ **Model Pull Resumption**: PR [#19339](https://github.com/ollama/ollama/pull/19339) fixes persistent failure when restarting `ollama serve` mid-pull (e.g., >1hr), ensuring partial downloads can resume safely.  
- 📊 **Multimodal Embedding Accuracy**: PR [#19334](https://github.com/ollama/ollama/pull/19334) corrects media ordering in embedding payloads for Gemma 4, resolving assertion failures caused by improper token interleaving.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🔴 High | `qwen3.8`: `no user query found in messages` (500 error) | Streaming chat breaks on large context prompts | [Issue #17778](https://github.com/ollama/ollama/issues/17778) – *No fix yet* |
| 🔴 High | `deepseek-v4-flash:0731`: infinite thinking loop without `</think>` | Agent tasks fail due to unbounded reasoning | [Issue #17892](https://github.com/ollama/ollama/issues/17892) – *No fix yet* |
| 🔴 High | Windows: connection reset after ~15s with large prompts | Blocks high-context inference on Windows | [Issue #19139](https://github.com/ollama/ollama/issues/19139) – *No fix yet* |
| 🟡 Medium | `clef-flash:latest`: CUDA shared object init failed on RTX 5060 Ti (Blackwell) | Crashes on new NVIDIA hardware | [Issue #19122](https://github.com/ollama/ollama/issues/19122) – *PR pending* |
| 🟡 Medium | `mlx runner panic` on macOS Metal / Mac Mini M6 | Prevents use of small models like `gemma4:e2b-mlx` | [Issue #18885](https://github.com/ollama/ollama/issues/18885) – *No fix yet* |
| 🟡 Medium | `lfm3` model architecture unrecognized | Blocks use of new audio model despite version 0.40.12 | [Issue #19347](https://github.com/ollama/ollama/issues/19347) – *Fix PR exists* |

---

### **6. What This Means for Application Developers**  
- **Agent Builders**: Avoid `deepseek-v4-flash` for complex agent workflows today—expect infinite loops. Use `qwen3:8b` or `claude` as alternatives until issue #17892 is resolved.  
- **Enterprise Deployments**: Leverage OCI registry support (PRs #4204, #9215) for secure, private model distribution behind firewalls.  
- **RAG & Multimodal Apps**: Ensure your prompt structure respects token ordering—use `llama-server` v0.40.12+ to avoid embedding crashes with Gemma 4 (PR #19334).  
- **Memory-Constrained Environments**: Set `OLLAMA_NUM_PARALLEL=1` carefully—issue #19262 confirms it may not enforce sequential execution if not properly isolated.  
- **Edge Cases**: Handle `Ctrl+C` during multiline input (`ollama run`) to prevent session corruption (issue #19340); use `/clear` to restore system state.  

> 💡 **Pro Tip**: For high-context apps on Windows, consider using `--keep_alive=0` or splitting prompts to avoid the 15s connection reset (issue #19139).

---  
*Data sourced from GitHub: ollama/ollama (2026-10-28)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **1. Today's Highlights**  
LiteLLM’s latest updates focus on critical cost accounting fixes, improved error handling for streaming and tool-use workflows, and enhanced support for Cloudflare Workers AI. Notably, a long-standing budgeting inconsistency in virtual keys has been flagged (Issue #27735), while new PRs address token counting for custom tools (#48698) and correct billing for Databricks’ OpenJev model (#48694). The proxy now better handles malformed `tool_choice` inputs with 400 errors instead of crashes.

---

### **2. Releases & Breaking Changes**  
- **v1.106.5**, **v1.105.6**, **v1.104.8**, and **v1.103.10** released in the last 24h.  
- All releases include security verification via [cosign](https://github.com/BerriAI/litellm#verify-this-release) using the same public key:  
  ```bash
  cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.106.5
  ```
- No major API-breaking changes reported today, but users should validate behavior around `max_tool_calls`, `partial_images`, and `prompt_cache_options` in `/v1/responses` calls due to pending PRs (#48655).

---

### **3. New Model & Hardware Support**  
- **Cloudflare Workers AI**: Multiple feature requests (#21115, #35055, #35056) and active PRs signal imminent support for image and audio generation via Workers AI’s expanded API. This includes native support for text-to-image, speech-to-text, and text-to-speech models.  
- **Databricks OpenJev Decision Model**: Now correctly priced at **0.6 DBUs per 1M input tokens** (#48694), improving cost transparency for decision-making workloads.  
- **SAP Conversational AI**: Tool call argument preservation during replay is being fixed (#48696), enabling more robust agent flows.

---

### **4. Performance & Optimization**  
- **Token Counting Improvements**:  
  - Custom tool calls are now counted properly instead of failing with "Unsupported tool call" (#48698).  
  - Batched cached tokens are billed at input rate when no cache read price exists (#48697), preventing under-billing.  
- **Timeout Handling**:  
  - Gemini and Vertex AI embeddings now respect user-provided `timeout` values in both sync and async calls (#47305, #48690), fixing a persistent 300s default issue.  
- **Streaming Efficiency**:  
  - Web search interception no longer leaks `max_parallel_requests` slots in streaming scenarios (#46093), mitigating resource exhaustion risks.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|-------|--------|------------|
| High | [#27735](https://github.com/BerriAI/litellm/issues/27735) – Virtual key `BudgetExceededError` uses stale spend | False over-budget rejections despite valid spend | Open — affects cost control in multi-tenant setups |
| High | [#48481](https://github.com/BerriAI/litellm/issues/48481) – `message_start` reports `input_tokens: 0` in streaming `/v1/messages` | Inaccurate real-time cost tracking | Open — impacts analytics and monitoring |
| Medium | [#47396](https://github.com/BerriAI/litellm/issues/47396) – Anthropic `tool_choice` triggers max_input_tokens reservation | Over-reservation of budget for tool-using requests | Open — risk of premature budget exhaustion |
| Medium | [#47904](https://github.com/BerriAI/litellm/issues/47904) – eMudhra root CA still trusted in v1.106.x images | Security risk from compromised CA chain | Backport requested; fix in `main` (#47670) — needs backport to `stable/1.106.x` |

---

### **6. What This Means for Application Developers**  
- **Cost Control**: Avoid false budget rejections by monitoring virtual key spend logs closely—this may require temporary workaround until #27735 is resolved.  
- **Streaming Workflows**: Be cautious with `tool_choice` and `web_search` in streaming `/v1/messages`—they can consume parallel slots indefinitely (#46093). Use non-streaming or implement client-side limits.  
- **Model Accuracy**: Ensure your app doesn’t rely on `input_tokens` from `message_start` events—use final `message_delta` for accurate counts (#48481).  
- **Security**: If using v1.106.x images, consider upgrading to v1.106.3+ once backported to patch the eMudhra CA trust issue (#47904).  
- **Future-Proofing**: Prepare for upcoming Cloudflare Workers AI support—watch for PRs like #21115 and #35055 to integrate image/audio capabilities into agents.

> 🔗 *See full details: [LiteLLM GitHub Issues](https://github.com/BerriAI/litellm/issues)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-28**

---

### **1. Today's Highlights**  
Unsloth continues to expand its agent-centric vision with key UI/UX refinements and deeper integration of local tooling via MCP (Multi-Agent Control Plane). Critical stability fixes address long-standing issues in Studio’s training workflows and file handling, while new PRs push forward native multi-agent orchestration, visual computer use, and benchmarking capabilities. The project is clearly shifting toward a unified, developer-first AI workflow platform.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. All recent activity centers on feature development and bug fixes.

---

### **3. New Model & Hardware Support**  
- **New model support:**  
  - Request for support for **LFM3-1.7B** ([#15588](https://github.com/unslothai/unsloth/issues/15588)) — a newly released expressive backbone model from LiquidAI.
  - **Qwen3.8-Flash-Next-FP8** is under active investigation for FP8 n-gram table loading issues ([#15632](https://github.com/unslothai/unsloth/pull/15632)).
- **Hardware & backend coverage:**  
  - Intel Arc B580 (XPU) GPU support requested ([#15583](https://github.com/unslothai/unsloth/issues/15583)).  
  - AMD GPU visibility issues persist on mixed Nvidia-AMD Linux systems using `llama.cpp` ([#15444](https://github.com/unslothai/unsloth/issues/15444)).  
  - Apple MLX backend continues to see usage, particularly with vision models like Gemma 4 26B ([#15473](https://github.com/unslothai/unsloth/issues/15473)).

---

### **4. Performance & Optimization**  
- **Benchmarking enhancements:**  
  - New `llama-bench` tab added to Benchmarks page for real-time throughput testing ([#12522](https://github.com/unslothai/unsloth/pull/12522)).  
  - Evals tab now supports `lm-eval-harness` scoring across MMLU, GSM8K, TruthfulQA, and more ([#12521](https://github.com/unslothai/unsloth/pull/12521)).  
  - Config sweep capabilities extended to speculative decoding, KV cache types, and RAM offload settings ([#11808](https://github.com/unslothai/unsloth/pull/11808)).
- **Inference engine progress:**  
  - Active PRs targeting **exllamav3** support ([#15527](https://github.com/unslothai/unsloth/issues/15527)), including potential sorting for exl3 quants.  
  - Block Swap issues with Qwen3.8-Flash-Next due to CPU-kept n-gram tables are being addressed ([#15633](https://github.com/unslothai/unsloth/pull/15633)).

---

### **5. Stability & Regressions**  
- **Critical regressions:**  
  - **Studio floods Recycle Bin with SQLite WAL/SHM files** every second during training on Windows ([#15552](https://github.com/unslothai/unsloth/issues/15552)) — severe UX impact; no fix yet.  
  - **Deep Research mode ignored** in Gemma-4-26B-A4B despite activation — model relies solely on internal weights ([#15581](https://github.com/unslothai/unsloth/issues/15581)).  
  - **Anthropic passthrough fails** with context overflow instead of auto-compaction, even when enabled ([#15417](https://github.com/unslothai/unsloth/issues/15417)).  
- **UI/UX bugs:**  
  - Image edit unavailable in `unsloth/flux-3-image-klein-GGUF` on macOS ([#15241](https://github.com/unslothai/unsloth/issues/15241)).  
  - Download toast shows original filename regardless of user rename ([#15621](https://github.com/unslothai/unsloth/issues/15621)).  
  - Browser tabs in desktop app have ultra-thin click areas ([#14314](https://github.com/unslothai/unsloth/issues/14314)).  
- **Fixes in progress:**  
  - Stack trace during training addressed in PR [#15538](https://github.com/unslothai/unsloth/issues/15538).  
  - Transcription progress percentage missing — proposed fix in [#15573](https://github.com/unslothai/unsloth/issues/15573).

---

### **6. What This Means for Application Developers**  
Developers should expect **increasingly sophisticated agent workflows** in Unsloth Studio, with native support for multi-agent orchestration ([#10776](https://github.com/unslothai/unsloth/issues/10776)), browser automation ([#10800](https://github.com/unslothai/unsloth/issues/10800)), and visual computer use ([#15532](https://github.com/unslothai/unsloth/issues/15532)).  
The addition of **MCP server integration** ([#14348](https://github.com/unslothai/unsloth/pull/14348), [#15629](https://github.com/unslothai/unsloth/pull/15629)) enables direct control over local tools — critical for building autonomous agents.  
For performance-critical apps, the upcoming benchmarking suite (`llama-bench`, `lm-eval-harness`) will allow precise quantization and config selection.  
However, be cautious with **Windows deployments** due to the persistent SQLite temp file issue ([#15552](https://github.com/unslothai/unsloth/issues/15552)) and **AMD GPU detection problems** ([#15444](https://github.com/unslothai/unsloth/issues/15444)).  

👉 *Pro tip:* Monitor PRs #15633 and #15632 for FP8 compatibility fixes if working with Qwen3.8-Flash-Next.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*