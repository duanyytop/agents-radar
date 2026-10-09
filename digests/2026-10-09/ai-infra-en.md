# AI Infrastructure Digest 2026-10-09

> Generated: 2026-10-09 02:31 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-09**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in late 2026 is defined by a sharp bifurcation between **high-performance, low-latency serving engines** and **developer-centric, flexible runtime platforms**, with growing convergence at the edge of agentic workflows. vLLM and SGLang lead in optimizing inference for next-gen architectures (SM12x, ROCm, DSpark), while llama.cpp and Ollama focus on cross-platform accessibility and local execution. Unsloth emerges as a hybrid force—bridging training and inference with decision model specialization. LiteLLM acts as the enterprise-grade orchestration layer, enabling multi-provider integration and cost-aware routing. The ecosystem is maturing rapidly, but stability remains a recurring concern across all layers.

---

### **2. Activity Comparison**

| Project      | Issues Open (↑) | PRs Merged (↑) | Release Status       |
|--------------|------------------|------------------|------------------------|
| **vLLM**     | 147 (+8)         | 53 (+12)         | No new release (v0.31 stable) |
| **SGLang**   | 183 (+11)        | 41 (+9)          | No new release (v0.30.x active) |
| **llama.cpp**| 192 (+15)        | 28 (+7)          | v1.10.0-b11514 (patched) |
| **Ollama**   | 218 (+13)        | 37 (+10)         | v0.40.2 released (critical MLX issues) |
| **LiteLLM**  | 124 (+6)         | 24 (+5)          | v1.106.0-dev.2 (non-breaking) |
| **Unsloth**  | 161 (+9)         | 45 (+11)         | v0.1.905-beta (beta feature release) |

> 🔍 *Observation*: **Ollama and llama.cpp** show highest issue volume due to platform-specific regressions (MLX thread limits, Vulkan kernel bugs). **Unsloth** leads in PR velocity, driven by beta feature development.

---

### **3. Model Support Race**

| New Model / Architecture           | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------------|------|--------|-----------|--------|---------|---------|
| **GLM-5.3-Flash**                  | ✅ (ROCm/SM12x) | ⚠️ Degenerate output | ✅ (b11507+) | ❌ | ✅ | ✅ (Q4_K_M GGUF) |
| **Qwen3.8-Flash-Next**             | ✅ (ROCm tracking) | ✅ (DSV41) | ✅ (GGUF) | ⚠️ Cloud failures | ✅ | ❌ |
| **DeepSeek-V4.1-Flash**            | ✅ (SM120 limited) | ✅ (DSV41 optimized) | ✅ (DFlash) | ❌ | ❌ | ✅ (experimental) |
| **Kimi K2.5 Vision Encoder**       | ✅ (fixed eager torch.compile) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **MiniCPM-V 4.7 (3D RoPE)**        | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **GPT-6.1 Sol (Bedrock)**          | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Decision Models (Jev-style)**    | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (v0.1.905-beta) |

> 🏆 **Winner**: **Unsloth** takes the lead in *specialized model support*, particularly with its new **decision model training pipeline**.  
> 🥈 **Runner-up**: **vLLM** leads in *multi-architecture readiness* (ROCm, SM12x, DSpark), especially for high-throughput inference.  
> 🥉 **Notable Gap**: No project fully supports **vision-language models with 3D RoPE** beyond basic GGUF loading.

---

### **4. Performance Frontier**

| Optimization Focus              | vLLM                     | SGLang                   | llama.cpp               | Ollama                | LiteLLM               | Unsloth               |
|----------------------------------|--------------------------|--------------------------|-------------------------|-----------------------|------------------------|------------------------|
| **KV Cache Efficiency**          | ✅ FP8 OOM fixes, AITER, sharding | ✅ Pool-level sharding, DSA | ✅ MoE cache across GPUs | ⚠️ Context truncation | ❌ | ⚠️ MoE spilling to RAM |
| **Kernel-Level Optimization**    | ✅ AITER top-k (300μs), XQA | ✅ FlashInfer autotune, GEMM fusion | ✅ Radix top-k (-99.7%) | ⚠️ Threadgroup limits | ❌ | ✅ Patched kernels |
| **Quantization & Memory**        | ✅ `fp8` + CUDA graph fixes | ✅ `repetition_penalty` crash fix | ✅ Dynamic quantization | ❌ | ✅ BYOK cost tracking | ✅ Auto-scaled MoE spilling |
| **Distributed Serving**          | ✅ Pipeline parallelism, split_group | ✅ KV sharding, MTP/DSA | ❌ (single GPU focus) | ❌ | ✅ Multi-provider routing | ❌ |
| **Speculative Decoding**         | ✅ Stable (PR #60753)     | ✅ MiniMax-M3 pairing     | ✅ DFlash support       | ❌ | ❌ | ❌ |

> 🔥 **Top Performer**: **llama.cpp** dominates in **kernel optimization** (radix top-k reduction by ~99.7%) and **MoE scalability** across GPUs.  
> 💡 **Emergent Focus**: **vLLM and SGLang** are advancing **speculative decoding stability** and **distributed KV sharding**—key for agentic systems.

---

### **5. Layer Positioning**

| Project      | Primary Layer                     | Key Differentiator |
|--------------|-----------------------------------|--------------------|
| **vLLM**     | **Inference Engine**              | Industry-standard for high-throughput, low-latency serving on NVIDIA/ROCm; strongest backend integration |
| **SGLang**   | **Inference Engine + Runtime**    | Unique blend: supports FlashInfer autotuning, speculative decoding, and Apple Silicon redesign; bridges engine and app |
| **llama.cpp**| **Local Runtime / Embedded**      | Best-in-class for CPU/GPU/edge inference; dominant in GGUF-based local deployment |
| **Ollama**   | **Gateway / Developer UX**        | Simplifies model access via CLI/UI; strong community integrations but fragile backend stability |
| **LiteLLM**  | **API Gateway / Orchestration**   | Enterprise-ready multi-provider routing, cost tracking, per-user auth (GitHub Copilot BYOK) |
| **Unsloth**  | **Training/Fine-Tuning + Inference** | First to ship **decision model training**; combines fine-tuning efficiency with exportable inference pipelines |

> 🧩 **Strategic Insight**: The **training-inference gap is closing**. Unsloth’s ability to train *decision models* and export them directly signals a shift toward **end-to-end agent lifecycle platforms**.

---

### **6. Trend Signals**

#### **Key Trends Extracted from Today’s Activity**
1. **Agentic Workflows Driving Stability Pressure**  
   Multiple projects report degenerate outputs during multi-turn reasoning (GLM-5.3-Flash in vLLM/SGLang), indicating that long-context, iterative agents are now stress-testing core inference reliability.

2. **Hardware Fragmentation Is Escalating**  
   Critical issues on **Apple Silicon (MLX thread limits)**, **MUSA (FWHT overflow)**, and **ROCm (accuracy collapse)** reveal deep platform-specific instability—especially in non-NVIDIA environments.

3. **Quantization & Memory Management Are Now Core Features**  
   Dynamic MoE spilling (Unsloth), paged shared memory (vLLM), and auto-scaled GPU cache (Unsloth) show that efficient memory use is no longer optional—it’s central to scaling.

4. **Enterprise-Grade Observability Is Mandatory**  
   LiteLLM’s `AggregatingSink` telemetry and GitHub Copilot BYOK token accounting reflect rising demand for **cost transparency** and **auditability** in production LLM stacks.

5. **Specialization > Generalization**  
   Unsloth’s decision model launch, SGLang’s Apple Silicon redesign, and llama.cpp’s XDNA support signal that **platform-specific optimization is now a competitive moat**.

#### **What Application Developers Should Watch**
- **Avoid v0.40.x on Apple Silicon (Ollama)** — use v0.35.1 until MLX threadgroup issues are resolved.
- **Do not enable `kv_cache_dtype="fp8"` without JIT support** (vLLM).
- **Use `paged_shm` or `--mm-processor-cache-type paged_shm`** for multimodal workloads (vLLM).
- **Pin LiteLLM to v1.104.2** if running long-lived proxies—RAM leaks persist.
- **Test decision model pipelines early**—Unsloth’s v0.1.905-beta enables powerful new agent patterns.

> ✅ **Bottom Line**: The infrastructure stack is becoming more capable—but also more fragile. **Stability, memory safety, and hardware portability** are now key differentiators. Prioritize **production-hardened releases** over bleeding-edge features unless you’re building experimental agents.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-09

---

### **1. Today's Highlights**  
vLLM continues its aggressive optimization momentum with key performance improvements for GLM-5.3-Flash and Qwen3-Next on ROCm and SM12x GPUs, alongside critical fixes for FP8 KV cache OOMs and speculative decoding stability. Notably, a high-impact PR introduces internal prefill checkpoints for GDN backends, enabling more efficient long-context inference—especially relevant for agentic workflows.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **GLM-5.3-Flash**: Performance enhancements via shard-based indexer prefill (PR #54951) and AITER prefill optimizations (PR #60753) now target SM12x and ROCm.
- ✅ **Qwen3.8-Flash-Next / Qwen3.8-2.4T-A95B**: Dedicated ROCm (gfx950/MI355X) performance tracking and optimization efforts underway (Issues #59575, #57149).
- ✅ **DeepSeek-V4.1-Flash**: Added support for SM120 (RTX PRO 6000 Blackwell), though limited to `page_block_size=64` due to missing FlashInfer sparse-MLA kernel (Issue #59203).
- ✅ **Kimi K2.5 Vision Encoder**: Fixed eager `torch.compile` issue that caused warm-cache reload failures (PR #53011).

> 🔗 [GLM-5.3-Flash Shard Indexer](https://github.com/vllm-project/vllm/pull/54951) | [Qwen3-Next ROCm Optimization](https://github.com/vllm-project/vllm/issues/59575)

---

### **4. Performance & Optimization**  
- **GLM-5.3-Flash (ROCm)**: AITER prefill top-k reduction from **1.9ms → ~300μs per layer** at 512k ISL (PR #60753), cutting total overhead by ~350ms per final chunk.
- **NVIDIA SM12x**: NVFP4 KV cache decode now correctly uses XQA attention backend instead of FA2 fallback (PR #60452), avoiding unnecessary CUDA graph overhead.
- **Multi-modal Memory**: Paged shared memory storage (`--mm-processor-cache-type paged_shm`) enables efficient IPC for multimodal tensors (PR #51349).
- **Pipeline Parallelism**: Lazy NCCL2 group creation improves startup reliability under `split_group` (PR #60751).
- **KV Cache Planning**: RFC for model-customized planning (Issue #44276) aims to reduce memory fragmentation in complex deployments.

> 🔗 [AITER Prefill Top-K Optimization](https://github.com/vllm-project/vllm/pull/60753) | [SM12x XQA Decode Fix](https://github.com/vllm-project/vllm/pull/60452)

---

### **5. Stability & Regressions**  
- ⚠️ **Critical FP8 KV Cache OOM**: Startup crashes due to CUDA graph memory not being accounted for in budget (Issue #60350). *Fix PR pending.*
- ⚠️ **DFlash2/DSpark + Prefix Caching Corruption**: Output corruption after cache hit on Qwen3.8-27B NVFP4 (v0.30/0.31) — regression confirmed (Issue #60174). *No fix yet.*
- ⚠️ **GLM-5.3-Flash Degeneration**: Repeated "word salad" output during multi-turn agentic use (Issue #56605). *Root cause likely tied to long-decode accumulation.*
- ⚠️ **ROCm Accuracy Collapse**: High-concurrency runs with `VLLM_ROCM_USE_AITER=1` show accuracy collapse (Issue #60160).
- ⚠️ **FlashInfer Fallback Crash**: `kv_cache_dtype="fp8"` fails silently when no usable JIT exists (Issue #60262). *Should fall back to TRITON_ATTN.*

> 🔗 [FP8 OOM Bug](https://github.com/vllm-project/vllm/issues/60350) | [Qwen3.8-27B Corruption](https://github.com/vllm-project/vllm/issues/60174)

---

### **6. What This Means for Application Developers**  
- **Avoid `kv_cache_dtype="fp8"` on non-JIT setups**: Use `--attention-backend triton` explicitly until auto-fallback is fixed (Issue #60262).
- **Use `paged_shm` for multimodal workloads**: Reduces GPU memory pressure and improves IPC efficiency (PR #51349).
- **Monitor regressions in v0.30+**: Avoid `DFlash2/DSpark` with prefix caching; expect degraded output on Qwen3.8-27B.
- **Enable AITER only if stable**: On ROCm, disable `VLLM_ROCM_USE_AITER=1` for high-concurrency scenarios until Issue #60160 is resolved.
- **Plan for long-context agentic flows**: GLM-5.3-Flash’s degeneration issues suggest caution with repeated reasoning loops; consider batching or state pruning.

> 💡 Pro Tip: For production agentic systems, prefer `--attention-backend triton` over `flashinfer` until FP8/CUDA graph bugs are patched.

---  
*Data source: [vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-10-09

---

### **1. Today's Highlights**  
The SGLang project continues to advance its support for next-generation LLM serving infrastructure, with critical work on **flaky CI stability**, **DeepSeek V4.1 optimization**, and **Apple Silicon serving redesign**. Notably, multiple PRs were merged or submitted targeting high-impact performance improvements in FlashInfer autotuning, KV cache sharding, and speculative decoding for DSpark/DSV41 models.

---

### **2. Releases & Breaking Changes**  
*No new releases posted in the last 24 hours.*  
However, several configuration and API changes are underway:
- **`--enable-deterministic-inference` + `repetition_penalty` now triggers a `torch.compile` crash** on granite-4.0-h (tracked in [#43061](https://github.com/sgl-project/sglang/issues/43061)), indicating potential breaking behavior under specific inference modes.
- A new **capability-based device gating RFC** ([#42173](https://github.com/sgl-project/sglang/issues/42173)) proposes stricter validation for non-NVIDIA CUDA-compatible platforms, which may affect future deployment flexibility.

---

### **3. New Model & Hardware Support**  
- ✅ **MiniMax-M3 DSpark**: Added speculative decoding support via PR [#33673](https://github.com/sgl-project/sglang/pull/33673), enabling draft model pairing with MiniMax-M3 for faster generation.
- 📌 **Apple Silicon (MLX/Torch)**: The [RFC proposal](https://github.com/sgl-project/sglang/issues/32321) outlines a full redesign of Apple Silicon serving using an exported MLX region and Torch-owned SRT path—key for native M-series performance.
- 🔧 **NPU Support Expansion**: Continued integration for Ascend NPU with updates to GLM-5.2 DSA CP V2 strategy ([#40165](https://github.com/sgl-project/sglang/pull/40165)) and DSA KV layout capability detection ([#41875](https://github.com/sgl-project/sglang/pull/41875)).
- ⚙️ **ROCm/AMD**: Added PTX skip for `residual_gate_add` kernel on MI355 to prevent ROCm compilation failure ([#43103](https://github.com/sgl-project/sglang/pull/43103)).

---

### **4. Performance & Optimization**  
- **FlashInfer Autotune Cache Persistence**: Fixed issue where per-rank MoE GEMM shape mismatches cause cache discards at boot ([#40320](https://github.com/sgl-project/sglang/issues/40320)); now enables reuse across restarts.
- **KV Cache Sharding**: Two major PRs enable pool-level sharding for both **DSA indexer** ([#40925](https://github.com/sgl-project/sglang/pull/40925)) and **MTP** ([#40929](https://github.com/sgl-project/sglang/pull/40929)), improving scalability on large-scale deployments.
- **DeepSeek V4.1 (DSV41) Optimization Pipeline**:
  - Integrated **DeepGEMM MegaGate routing** ([#43244](https://github.com/sgl-project/sglang/pull/43244))
  - Enabled **mHC SP + engram fusion** (tracking in [#43065](https://github.com/sgl-project/sglang/issues/42170))
  - Folded `q_rope_store` into `fused_q_norm_rope` ([#41657](https://github.com/sgl-project/sglang/pull/41657))
- **Scheduler Overlap**: PR [#43177](https://github.com/sgl-project/sglang/pull/43177) overlaps scheduler startup with data parallel controller initialization, reducing cold-start latency.

---

### **5. Stability & Regressions**  
⚠️ **Critical Issues Reported**:
1. **GLM-5.3-Flash Degenerate Output** (`!` repetition under multi-tool prompts): Reported in [#40843](https://github.com/sgl-project/sglang/issues/40843) and [#36669](https://github.com/sgl-project/sglang/issues/36669). No fix PR yet; affects reasoning agents.
2. **Falcon-H1 Crash on First Request**: Illegal memory access triggered by default breakable prefill CUDA graph ([#42774](https://github.com/sgl-project/sglang/issues/42774)). High priority.
3. **Zombie Request Leak After Stream Disconnect**: Regression from reverted #34160 ([#36333](https://github.com/sgl-project/sglang/issues/36333)) — leaves orphaned state causing "state was deleted" errors.

🛠️ **Flaky CI Infrastructure**: Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) reports recurring flakiness in `PR Test Base/Extra`, impacting PR review velocity.

---

### **6. What This Means for Application Developers**  
- **Avoid `--enable-deterministic-inference` with `repetition_penalty`** until fix lands ([#43061](https://github.com/sgl-project/sglang/issues/43061)).
- **Use `--schedule-policy fcfs` or similar only if you don’t rely on prefix reuse metrics** — `num_matched_prefix_tokens` remains zero ([#43094](https://github.com/sgl-project/sglang/issues/43094)).
- **Expect instability with GLM-5.3-Flash and complex tool calls** — consider fallbacks or input sanitization.
- **For Apple Silicon users**: Monitor the [Apple Silicon RFC](https://github.com/sgl-project/sglang/issues/32321) for native MLX/Torch integration.
- **For production deployments on NVIDIA DGX Spark (SM121)**: Optimize via QSA/GDN tuning ([#36796](https://github.com/sgl-project/sglang/issues/36796)) and ensure CUDA graphs are properly disabled when needed.

> 🔗 *Join Slack: [slack.sglang.ai](https://slack.sglang.ai)* for real-time coordination on these issues.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-09**

---

### **1. Today's Highlights**  
The latest release cycle (b11514–b11501) focuses on critical CUDA and Vulkan kernel optimizations, including a major radix-based top-k improvement that reduces kernel launches by ~70% for large-context models. Key stability fixes address MoE cache distribution across multiple GPUs, DFlash output head sharing, and shared memory limits on MUSA. These updates collectively advance high-throughput inference scalability and cross-backend reliability.

---

### **2. Releases & Breaking Changes**  
- **b11514**: Fixes FWHT shared memory overflow on MUSA (`mp_21`) via PR [#30167](https://github.com/ggml-org/llama.cpp/pull/30167). Requires recompilation if using MUSA backend with large tensors.
- **b11512**: Resolves DFlash output head sharing bug by reading tied weights from GGUF metadata; fixes model state corruption in hybrid/tied architectures ([#30111](https://github.com/ggml-org/llama.cpp/pull/30111)).
- **b11507**: Adds support for MoE expert cache across multiple GPUs via layer-splitting (PR [#30112](https://github.com/ggml-org/llama.cpp/pull/30112)); enables larger MoE models on multi-GPU systems.

> ✅ *No breaking API changes reported today. Migration requires recompiling with updated backends.*

---

### **3. New Model & Hardware Support**  
- **Hardware**: Added experimental support for **XDNA backend** (Issue #21725), targeting specialized AI accelerators.
- **Models**: Initial support added for **MiniCPM-V 4.7** with 3D RoPE (PR [#29416](https://github.com/ggml-org/llama.cpp/pull/29416)), enabling inference on next-gen vision-language models.
- **Backends**: Continued improvements to **SYCL/OpenCL** (PRs [#30185](https://github.com/ggml-org/llama.cpp/pull/30185), [#30184](https://github.com/ggml-org/llama.cpp/pull/30184)) for Adreno A6x and other mobile GPUs.

---

### **4. Performance & Optimization**  
- **CUDA Top-K**: Replaced CUB’s per-row `DeviceTopKKernel` with grid-over-rows **radix select** (PR [#28713](https://github.com/ggml-org/llama.cpp/pull/28713)). On Qwen4exp at 34,816 tokens: **1,671,253 → 5,761 kernel launches**, reducing overhead by **~99.7%**.
- **Vulkan Flash Attention**: Introduced query-row slicing (512-row chunks) for deep KV contexts (PR [#30191](https://github.com/ggml-org/llama.cpp/pull/30191)), improving throughput on RDNA3 cards.
- **SYCL Optimizations**: Fused residual add into RMSNorm and optimized chunked gated delta net prefill (PRs [#30183](https://github.com/ggml-org/llama.cpp/pull/30183)–[#30182](https://github.com/ggml-org/llama.cpp/pull/30182)), boosting decode efficiency on Adreno.
- **CPU Concat**: Fixed thread-fixed-width concat to distribute work over all tensor dimensions (PR [#30150](https://github.com/ggml-org/llama.cpp/pull/30150)), eliminating single-thread bottlenecks.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| Critical | [Eval bug: SM_60 FP32 silent math loss](https://github.com/ggml-org/llama.cpp/issues/25593) | Quality degradation on P100 (sm_60) due to FP16→FP32 promotion | ❌ Not yet fixed |
| High | [Vulkan TOP_K: +inf/NaN ignored](https://github.com/ggml-org/llama.cpp/issues/30107) | Invalid token selection for extreme values | ✅ Fixed in b11505 |
| High | [MoE cache over multiple GPUs crashes](https://github.com/ggml-org/llama.cpp/issues/27282) | OOM in MTP draft context with GPU-resident LRU | ✅ Partial fix in b11507 |
| Medium | [Flash Attention fallback to SCALAR path causes O(N²)](https://github.com/ggml-org/llama.cpp/issues/27638) | Device loss under high load on Intel Arc | ⚠️ In progress (PR [#30191](https://github.com/ggml-org/llama.cpp/pull/30191)) |

> 🔴 **Note**: Regression in `Qwen3.8-Flash-Next-GGUF:UD-IQ3_XXS` performance post-#29622 (Issue #30033) suggests recent SYCL changes may impact certain quantization schemes.

---

### **6. What This Means for Application Developers**  
- **Use b11507+** for any MoE-based inference (e.g., Qwen3.8-Flash-Next) across multiple GPUs — the new layer-split caching enables scalable deployment.
- **Enable `GGML_CUDA_TOPK_RADIX_MIN_ROWS`** (default: 1024) to leverage the new radix top-k optimization for long-context models (≥32K tokens).
- **Avoid `cache_prompt=false`** for recurrent/hybrid models unless you’re managing checkpointing manually — recent PRs skip unnecessary RAM saves, but may break existing workflows.
- **Monitor Vulkan/MUSA builds** closely: MUSA now requires explicit tuning for large FWHT kernels, and Vulkan remains sensitive to edge-case inputs (+inf/NaN).
- **Consider SYCL for mobile/AI accelerator targets** — ongoing OpenCL/SYCL optimizations show strong gains on Adreno and XDNA platforms.

👉 *For production: Always test against your model stack after upgrading, especially when using speculative decoding or MoE.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

---

### **Ollama Digest — 2026-10-09**

#### **1. Today's Highlights**  
The Ollama team released **v0.40.2**, focusing on internal stability and UX polish, including hiding duplicate model guards and adding `oxi` to community integrations. Critical regressions in MLX backend (e.g., `qwen3.6:35b-mlx` panics) are now under active investigation, with multiple PRs addressing panic propagation and memory cleanup. Meanwhile, the community continues to push for Intel OpenVINO integration and improved cloud model reliability.

#### **2. Releases & Breaking Changes**  
- **v0.40.2** (released today):  
  - Fixed duplicate/legacy model guard visibility in `ollama list` via [PR #18874](https://github.com/ollama/ollama/pull/18874).  
  - Added `oxi` to community integrations ([PR #18739](https://github.com/ollama/ollama/pull/18739)).  
  - *No breaking API changes detected.*  

#### **3. New Model & Hardware Support**  
- **Intel OpenVINO**: High-priority feature request [#2169](https://github.com/ollama/ollama/issues/2169) remains open (95 upvotes), advocating automatic OpenVINO fallback on Intel systems. Related: [#15917](https://github.com/ollama/ollama/issues/15917) calls for native Intel GPU/NPU support via OpenVINO.  
- **MLX Backend**: Active development on Apple Silicon; however, multiple crashes reported in v0.40.x (e.g., [#18870](https://github.com/ollama/ollama/issues/18870), [#18856](https://github.com/ollama/ollama/issues/18856)) due to threadgroup limits (`Maximum threads per threadgroup is 896 but requested 1024`).  
- **Model Requests**:  
  - [Index Translate family](https://huggingface.co/collections/IndexTeam/index-translate) requested ([#18871](https://github.com/ollama/ollama/issues/18871)).  
  - Cloud models like `deepseek-v4.1-flash:cloud`, `mimo-v2.6`, `hy4`, `stepfun`, `laguna`, and `reflection-ai` sought ([#18850](https://github.com/ollama/ollama/issues/18850)).

#### **4. Performance & Optimization**  
- **MLX Kernel Limits**: A critical regression in `mlx runner` causes panics when exceeding threadgroup limits (e.g., `sdpa_vector_2pass_1_bfloat16_t_256_256_nomask_qnt_c_nos` kernel requires 1024 threads, max allowed is 896) — see [#18846](https://github.com/ollama/ollama/issues/18846), [#18856](https://github.com/ollama/ollama/issues/18856).  
- **Memory Management**: PRs like [#18882](https://github.com/ollama/ollama/pull/18882) aim to eliminate legacy GGUF patches by migrating them on load and reclaiming unreferenced blobs during startup GC — improving long-term storage efficiency.  
- **Streaming & Context Handling**: Fixes underway for context truncation logic ([#17778](https://github.com/ollama/ollama/issues/17778)) and tool call handling in streaming responses ([#18798](https://github.com/ollama/ollama/issues/18798)).

#### **5. Stability & Regressions**  
- **Critical (High Severity)**:  
  - `mlx runner panic: Maximum threads` on Apple Silicon (M-series) with `qwen3.6:35b-mlx` — reproducible in v0.40.0–0.40.1-rc0 but not in v0.35.0 ([#18856](https://github.com/ollama/ollama/issues/18856)).  
  - `gemma4:e2b-mlx` fails to run due to `mlx runner failed: panic: mlx` on M6 Mac Mini ([#18885](https://github.com/ollama/ollama/issues/18885)).  
  - `ffn_down_exps.weight size overflows` on `gpt-oss:latest` with NVIDIA GPU ([#18869](https://github.com/ollama/ollama/issues/18869)).  
- **Moderate**:  
  - `Clef Flash` fails to load with `num_ctx=16384` due to `n_ubatch = n_ctx` causing OOM ([#18865](https://github.com/ollama/ollama/issues/18865)).  
  - `embeddinggemma-2:740m` fails to pull on Linux without MLX runtime ([#18825](https://github.com/ollama/ollama/issues/18825)).  
  - `ollama run` hangs silently after first invocation on RPi 5 ([#18796](https://github.com/ollama/ollama/issues/18796)).  
- **Fixes in Progress**:  
  - [#18886](https://github.com/ollama/ollama/pull/18886): Prevent masked panics during cleanup.  
  - [#18882](https://github.com/ollama/ollama/pull/18882): Migrate legacy GGUFs on load, remove compatibility patches.  

#### **6. What This Means for Application Developers**  
- **Avoid v0.40.x on Apple Silicon (MLX)**: Use v0.35.1 or earlier until `mlx` threadgroup issues are resolved. Expect crashes with large models (`qwen3.6:35b-mlx`, `gemma4:e2b-mlx`).  
- **Cloud Model Caution**: `deepseek-v4.1-flash:cloud` returns 500 errors with image input beyond ~655k tokens ([#18853](https://github.com/ollama/ollama/issues/18853)); use local models for high-context multimodal tasks.  
- **Streamed Responses**: Be aware of `output_index` reuse and message reordering in `/v1/responses` streams ([#18798](https://github.com/ollama/ollama/issues/18798)) — validate client-side ordering logic.  
- **Model Selection**: For Intel systems, monitor [#2169](https://github.com/ollama/ollama/issues/2169) for future OpenVINO integration.  
- **CI Reliability**: New CI retry logic ([#18883](https://github.com/ollama/ollama/pull/18883)) improves build stability — beneficial for forked workflows.

---  
*Digest compiled from GitHub activity (2026-10-08–09). Monitor PRs and issues for real-time updates.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-09**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to evolve with a focus on telemetry, stability, and enterprise-grade integration. Key developments include enhanced cost tracking for GitHub Copilot via BYOK (Issue #45422), improved support for new GPT-6.1 Sol models on AWS Bedrock (PRs #45488, #45482), and critical fixes for memory leaks and streaming correctness under high load. A significant PR (#45487) introduces an aggregating telemetry sink to reduce noise while preserving actionable metrics.

---

### **2. Releases & Breaking Changes**  
No breaking changes in the latest releases (`v1.106.0-dev.2`, `v1.105.0-rc.3`, `v1.104.2`, `v1.102.4`, `v1.101.6`). All Docker images are signed using [cosign](https://docs.sigstore.dev/cosign/overview/) with the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). Users should verify signatures before deployment.

> 🔗 [Verify Docker Image Signature](https://docs.sigstore.dev/cosign/overview/)

---

### **3. New Model & Hardware Support**  
- ✅ **GPT-6.1 Sol (AWS Bedrock)**: Context window increased to 1,000,000 tokens; ultrafast tier pricing added from Bedrock model card ([PR #45488](https://github.com/BerriAI/litellm/pull/45488), [PR #45482](https://github.com/BerriAI/litellm/pull/45482)).  
- ✅ **Microsoft 365 Copilot**: New `microsoft_365_copilot` provider supports OAuth token exchange per user ([PR #45158](https://github.com/BerriAI/litellm/pull/45158)).  
- ✅ **GitHub Copilot (BYOK)**: Per-user authentication now supported via OAuth ([PR #45241](https://github.com/BerriAI/litellm/pull/45241)).

> 🔗 [Add Microsoft 365 Copilot Provider](https://github.com/BerriAI/litellm/pull/45158)  
> 🔗 [Per-user GitHub OAuth for Copilot](https://github.com/BerriAI/litellm/pull/45241)

---

### **4. Performance & Optimization**  
- 📈 **Telemetry Aggregation**: The new `AggregatingSink` reduces telemetry volume by folding per-request events into fixed-bucket histograms, enabling scalable observability without overwhelming backends ([PR #45487](https://github.com/BerriAI/litellm/pull/45487)).  
- ⚙️ **Improved Rate Limiting Visibility**: Redis limiter fallback now includes clearer status reporting when shared enforcement is unavailable ([Issue #35533](https://github.com/BerriAI/litellm/issues/35533)).  
- 🔁 **Streaming Efficiency**: Fixes applied to prevent premature stream termination during `stream=True + logprobs=True` on vLLM-backed models ([Issue #18801](https://github.com/BerriAI/litellm/issues/18801)).

---

### **5. Stability & Regressions**  
High-severity issues remain active, primarily around resource management and data integrity:

| Issue | Severity | Status | Fix PR? | Notes |
|------|----------|--------|---------|-------|
| [#12685](https://github.com/BerriAI/litellm/issues/12685) | Critical | Closed | No | Heavy RAM usage over time; persists across days without restart. |
| [#27954](https://github.com/BerriAI/litellm/issues/27954) | High | Open | No | Kubernetes pods crash due to unbounded RAM growth. |
| [#45422](https://github.com/BerriAI/litellm/issues/45422) | High | Open | No | Token counting broken in GitHub Copilot BYOK after v1.103.1 → v1.104.2. |
| [#45457](https://github.com/BerriAI/litellm/issues/45457) | Medium | Open | No | Google GenAI stream drops before first chunk; no retry logic. |

> 🔗 [RAM Leak Issues](https://github.com/BerriAI/litellm/issues/12685)  
> 🔗 [GitHub Copilot Token Counting Failure](https://github.com/BerriAI/litellm/issues/45422)

---

### **6. What This Means for Application Developers**  
- **Use caution with long-running proxies**: If running in production, monitor RAM usage closely—leaks reported in #12685 suggest a need for periodic restarts or proactive memory profiling.  
- **Leverage new auth patterns**: For secure, user-scoped access (e.g., Copilot, M365), adopt per-user OAuth flows via `github_copilot/per-user-oauth` and `microsoft_365_copilot`.  
- **Expect better observability**: With `AggregatingSink` and structured telemetry, you can now build more accurate cost dashboards and SLOs without overwhelming logs.  
- **Avoid `logprobs + stream` on vLLM**: Until fixed, use alternative providers or disable one of the two features to avoid crashes.  

👉 *Recommendation*: Pin to stable releases (`v1.104.2` or earlier) if reliability is critical; test `v1.106.0-dev.2` only in staging with monitoring enabled.

---  
*Digest generated from GitHub activity (2026-10-09). For real-time updates, follow [BerriAI/litellm](https://github.com/BerriAI/litellm).*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-09**

---

### **1. Today's Highlights**  
Unsloth releases v0.1.905-beta, introducing native support for training *decision models*—transforming any text or vision LLM into a high-accuracy (up to 80%) Jev-style decision engine. The update also brings improved ComfyUI integration, diffusion enhancements, and a refined desktop browser. Meanwhile, ongoing PRs in Unsloth Studio focus on smarter context handling, better model preview rendering, and enhanced web search integration.

---

### **2. Releases & Breaking Changes**  
- **v0.1.905-beta**:  
  - Added `DecisionModel` training pipeline via `FastLanguageModel.from_pretrained()` with support for fine-tuning decision logic from human feedback.  
  - Export and serve decision models directly from Unsloth (`unsloth.export_decision_model()`).  
  - Native ComfyUI model support and improved desktop app UI (including browser refresh fixes).  
  🔗 [GitHub Release v0.1.905-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.905-beta)

> ✅ **Migration Note**: Existing SFT/GRPO workflows remain compatible; new decision training requires updated training scripts using `DecisionTrainer`.

---

### **3. New Model & Hardware Support**  
- **Supported Models**:  
  - `unsloth/Qwen-Image-2.1-GGUF` (Q4_K_M) now supported on M5 Max (48GB RAM), though users report memory issues under heavy load ([#11792](https://github.com/unslothai/unsloth/issues/11792)).  
  - Experimental support for `microsoft/bitnet-b1.58-2B-4T` via feature request ([#2390](https://github.com/unslothai/unsloth/issues/2390)) — not yet implemented.  
  - `Devstral-Small-2505` tokenizer conversion workflow documented ([#2652](https://github.com/unslothai/unsloth/issues/2652)).  

- **Hardware & Backend**:  
  - Enhanced MoE expert spilling to system RAM with auto-scaled GPU cache (`--moe-cache-mib auto`) in llama-server backend ([#12951](https://github.com/unslothai/unsloth/pull/12951)).  
  - Optimized micro-batch size of 2048 when MoE experts spill to CPU ([#12950](https://github.com/unslothai/unsloth/pull/12950)).  
  - Full compatibility with Ollama connections, including token usage tracking in context bar ([#13106](https://github.com/unslothai/unsloth/pull/13106)).

---

### **4. Performance & Optimization**  
- **Inference Speed**:  
  - Unsloth’s patching layer continues to deliver ~2x faster inference for fine-tuning on NVIDIA GPUs via optimized kernels.  
  - Reduced latency in long-context chats through improved thread management ([#13107](https://github.com/unslothai/unsloth/pull/13107), [#13113](https://github.com/unslothai/unsloth/pull/13113)).  

- **Memory Efficiency**:  
  - Memory spikes during `LlamaForCausalLM` initialization fixed ([#1801](https://github.com/unslothai/unsloth/issues/1801)).  
  - TRL PPOTrainer now avoids unnecessary 1.2 GB buffer retention ([#13108](https://github.com/unslothai/unsloth/pull/13108)).  
  - Dynamic quantization serving via VLLM now stable for `unsloth/Mistral-Small-24B-Base-2501-unsloth-bnb-4bit` ([#1886](https://github.com/unslothai/unsloth/issues/1886)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact |
|---------|------|--------|--------|
| ⚠️ High | `RuntimeError: PassManager::run failed` during training on Colab T4 with Qwen3-0.6B ([#2482](https://github.com/unslothai/unsloth/issues/2482)) | Closed | Training fails silently; likely due to CUDA kernel mismatch. |
| ⚠️ High | `AssertionError` when serving dynamic quantized models via VLLM ([#1886](https://github.com/unslothai/unsloth/issues/1886)) | Closed | Fix merged; verify `load_format=bitsandbytes` + `quantization=bitsandbytes` alignment. |
| ⚠️ Medium | GRPO training produces mangled outputs ([#1672](https://github.com/unslothai/unsloth/issues/1672)) | Closed | Likely caused by incorrect EOS token handling or sampling config. |
| ⚠️ Medium | `CUDA out of memory` on WSL despite VRAM unused ([#1744](https://github.com/unslothai/unsloth/issues/1744), [#1797](https://github.com/unslothai/unsloth/issues/1797)) | Closed | Root cause: memory fragmentation; recommend `use_gradient_checkpointing="unsloth"` and lower batch size. |
| ⚠️ Low | `NotImplementedError`: `_reorder_cache` missing for beam search ([#1099](https://github.com/unslothai/unsloth/issues/1099)) | Open | Affects `num_beams > 1` inference; fix pending in Transformers upstream. |

> 🛠️ **Fix PRs**: Multiple stability improvements merged in recent days, including `PPOTrainer` crash fix ([#13108](https://github.com/unslothai/unsloth/pull/13108)) and `Ollama` context bar display ([#13106](https://github.com/unslothai/unsloth/pull/13106)).

---

### **6. What This Means for Application Developers**  
- **Build Decision Engines**: Use `v0.1.905-beta` to train and deploy high-accuracy decision models (e.g., for routing, validation, or policy enforcement) directly within your stack.  
- **Deploy Efficiently**: Leverage dynamic quantization with VLLM and GGUF models (e.g., Qwen-Image-2.1) for low-latency inference on edge devices.  
- **Avoid Memory Traps**: When training large models locally, avoid `use_gradient_checkpointing="unsloth"` unless necessary—use `True` instead to prevent OOM crashes.  
- **Enhance UX**: Use the new Studio features—live React previews ([#13039](https://github.com/unslothai/unsloth/pull/13039)), multi-part download indicators ([#13112](https://github.com/unslothai/unsloth/pull/13112)), and improved web parsing—to build richer agent interfaces.  
- **Monitor Dependencies**: Ensure `xFormers` is built against correct PyTorch/CUDA version to avoid `LLVM ERROR` ([#512](https://github.com/unslothai/unsloth/issues/512)).

👉 **Recommended Action**: Upgrade to `v0.1.905-beta` and test decision model training workflows. Audit gradient checkpointing settings and ensure `HF_ENDPOINT` is respected across all model pulls ([#1353](https://github.com/unslothai/unsloth/issues/1353)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*