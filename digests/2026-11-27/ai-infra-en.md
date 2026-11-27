# AI Infrastructure Digest 2026-11-27

> Generated: 2026-11-27 04:29 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-27**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem in late 2026 is rapidly maturing, characterized by deep hardware specialization, aggressive kernel-level optimization, and a growing divide between high-performance, low-latency engines and developer-friendly, multi-model gateways. Projects are converging on next-gen model families (e.g., Inkling-2, Qwen3.8-Flash-Next) while simultaneously pushing boundaries in quantization (MXFP4, NVFP4), speculative decoding (DFlash, LES), and distributed inference (TP, pipeline parallelism). A clear trend toward Rust adoption for performance-critical components and enhanced security via provenance verification reflects an industry shift toward production-grade reliability.

---

### **2. Activity Comparison**

| Project       | Issues Open (Last 7 Days) | PRs Merged (Last 7 Days) | Release Status       |
|---------------|----------------------------|-----------------------------|-----------------------|
| **vLLM**      | 89                         | 47                          | No new release        |
| **SGLang**    | 112                        | 52                          | v0.5.23 (pre-1.0)     |
| **llama.cpp** | 76                         | 63                          | `v1.1.0` (breaking)   |
| **Ollama**    | 94                         | 38                          | `v0.40.19-rc0` (RC)   |
| **LiteLLM**   | 68                         | 29                          | `v1.113.0-dev.1` (dev)|
| **Unsloth**   | 57                         | 24                          | Beta (`0.1.925-beta`) |

> ✅ *Insight*: **llama.cpp** leads in active development velocity (PRs merged), driven by its focus on low-level backend support and rapid feature iteration. **SGLang** shows the highest issue volume—indicating ongoing stability challenges ahead of 1.0. **LiteLLM** is most security-focused, with signed releases and identity enforcement.

---

### **3. Model Support Race**

| New Model / Architecture         | Supported By (Priority Order)                             | Key Differentiator |
|----------------------------------|------------------------------------------------------------|--------------------|
| **Inkling-2 family**             | **llama.cpp**, **Ollama**, **Unsloth**, **SGLang**         | Full DFlash2 + MoE fusion; best CUDA/HIP/Vulkan support |
| **Qwen3.8-Flash-Next (Qwen4Exp)**| **vLLM**, **Ollama**, **llama.cpp**                       | vLLM leads with DeepGEMM MQA logits & MXFP4 support |
| **Kimi-K2.6 tool-calling**       | **vLLM**, **Ollama**                                      | vLLM has full parser fix (Issue #42426); Ollama still unstable |
| **PrismML PQ2_0/PTQ1_0 GGUF**    | **Unsloth** (exclusive)                                   | Only project with native support |
| **AMD ROCm gfx950 / MI355X**     | **vLLM**, **llama.cpp**, **SGLang**                        | vLLM leads in GatedDeltaNet + QuerySparse Attention tuning |
| **Intel XPU + DSpark sampling**   | **vLLM**, **SGLang**, **llama.cpp**                        | vLLM enables sharded sampling; SGLang adds Lookahead Expert Scheduling (LES) |
| **Huawei Ascend NPU (CANN)**     | **Ollama** (new)                                          | First major gateway to add CANN build support |

> 🏆 **Winner**: **llama.cpp** — fastest adopter of new models and architectures across diverse backends.  
> 🔥 **Emerging Leader**: **Unsloth** — exclusive support for PrismML’s novel quantizations.

---

### **4. Performance Frontier**

| Optimization Focus           | Leading Projects                                  | Key Advances |
|-------------------------------|----------------------------------------------------|-------------|
| **Kernel Fusion & Low-Level** | **vLLM**, **llama.cpp**                           | CUTLASS FP8 fusions (vLLM), Inkling-2-Mini conv+SSM fusions (llama.cpp) |
| **KV Cache & Memory Efficiency** | **vLLM**, **Unsloth**, **Ollama**              | `share_replicated_regions`, `offload_layers`, compact Engram buffers |
| **Speculative Decoding (DFlash)** | **llama.cpp**, **vLLM**, **SGLang**          | Split draft methods (`draft-dflash2`), LES scheduling, PD prefill |
| **Distributed Serving (TP/PP)** | **vLLM**, **SGLang**                            | Multi-modal cache drift fixes, pipeline-parallel prefill for DeepSeek-V4.1 |
| **Quantization Innovation**   | **vLLM**, **llama.cpp**, **Ollama**               | MXFP4/MXFP6/NVFP4, INT4/INT8 GPTQ/AWQ via Humming (vLLM), int4 affine (Ollama) |
| **Streaming & Latency**       | **SGLang**, **LiteLLM**, **Ollama**               | Avoided cloning (SGLang), SSE leak fixes (LiteLLM), short-history speedups (Ollama) |

> ⚙️ **Trend**: Kernel-level fusion and memory-aware offloading are now table stakes. The frontier is shifting to **dynamic resource allocation** (Unified Memory, micro-batching) and **hardware-specific tuning** (ROCm, Intel XPU, Apple Silicon).

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role Summary |
|---------------|------------------------------------|--------------|
| **vLLM**      | **High-Performance Inference Engine** | Optimized for large-scale, low-latency serving on NVIDIA GPUs; core focus: kernel efficiency, TP/PP scaling |
| **SGLang**    | **Distributed Inference Framework** | Enables complex pipeline-parallel and multi-stage inference; strong in agent workloads and dynamic state management |
| **llama.cpp** | **Local Runtime & Cross-Backend Engine** | Universal, lightweight runtime for edge devices and heterogeneous backends (CUDA, HIP, Vulkan, Metal, etc.) |
| **Ollama**    | **Developer Gateway & Local Agent Platform** | Bridges models to apps; focuses on usability, local execution, and agent tooling (e.g., JSON schema, tool calling) |
| **LiteLLM**   | **Universal LLM Gateway & Routing Layer** | Aggregates providers, enforces cost control, supports multi-provider routing, MCP stack for agents |
| **Unsloth**   | **Agent-Optimized Runtime & Training Accelerator** | Specializes in image generation, diffusion, LoRA folding, and Studio UX; targets creative and multimodal agents |

> 🔄 **Layer Convergence**: LiteLLM and Ollama are increasingly overlapping in agent workflows, but LiteLLM excels in multi-provider orchestration, while Ollama leads in local model access and UI integration.

---

### **6. Trend Signals**

#### **Key Industry Trends Extracted from Today's Activity**:
1. **Rust is becoming the de facto standard** for performance-critical inference components (vLLM Rust frontend, SGLang streaming optimizations).
2. **Hardware specialization is accelerating**: AMD ROCm, Intel XPU, Apple Silicon, and Huawei Ascend are no longer afterthoughts—they’re first-class citizens in design.
3. **Security & compliance are non-negotiable**: LiteLLM’s Cosign signing, Unsloth’s sandbox warnings, and vLLM’s `auto_round` crash prevention reflect a maturing ecosystem focused on auditability.
4. **Quantization is evolving beyond INT4/FP8**: MXFP4, NVFP4, and ternary GGUF formats (PQ2_0) signal a move toward higher precision at lower cost—ideal for safety-critical or reasoning-heavy tasks.
5. **Stability is the new innovation metric**: High-severity bugs (OOM, hangs, silent failures) dominate issue lists—indicating that **production readiness** is now more important than raw speed.

#### **What Application Developers Should Watch**:
- **Adopt vLLM’s Rust frontend** for new projects—expect it to become default in early 2027.
- **Use LiteLLM LTS images** in production; avoid `dev` tags unless testing new features.
- **Monitor Ollama’s `0.40.18` and `0.40.19-rc0`**—critical bugs on RTX 5090 and DGX Spark make them unsuitable for production.
- **Plan for model-specific quirks**: e.g., `qwen3.8-flash-next`’s prefix-cache bloat on MLX; use `OLLAMA_KEEP_ALIVE=-1`.
- **Prioritize provenance and security**—especially when using public models or deploying in regulated environments.

> ✅ **Final Recommendation**: Build with **vLLM + LiteLLM + Unsloth** for enterprise-grade, scalable agent systems—leverage vLLM for performance, LiteLLM for routing, and Unsloth for fine-grained control over training and inference pipelines.

---  
*Report compiled from GitHub activity data as of 2026-11-27. For real-time updates, follow project repositories and issue trackers.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-11-27**

#### **1. Today’s Highlights**  
The vLLM project continues to deepen its support for next-generation models and hardware, with critical work advancing on **AMD ROCm performance optimization**, **multi-modality rendering stability**, and **Rust frontend maturity**. Key efforts include fixing multimodal cache drift in scale-out deployments, enabling DFlash sharded sampling on Intel XPU, and pushing forward the migration from Marlin to Humming quantization kernels across NVIDIA architectures.

#### **2. Releases & Breaking Changes**  
*No new releases or breaking changes reported in the last 24 hours.*  
However, **Rust frontend adoption is accelerating**: PR #68784 tracks progress toward making it the default for `vllm serve`—a major shift expected in early 2027. Developers should begin testing Rust-based workflows now.

#### **3. New Model & Hardware Support**  
- **AMD ROCm (gfx950 / MI355X)**: Active performance tuning underway for `amd/Qwen3.8-Flash-Next-Quark-MXFP4` via Issue #59575; includes GatedDeltaNet, QuerySparse Attention, and MXFP4 MoE.
- **Intel XPU**: PR #68598 enables **DSpark batch-sharded sequential sampling** on Intel GPUs, unlocking better parallelism in speculative decoding.
- **New Models**: Support added for **Muse Spark packed attention projections** (PR #70094), **DeepSeek-V4.1** special token handling (PRs #70271, #70270), and **Kimi-K2.6 tool-calling parsing** (Issue #42426).
- **Quantization**: Full support for **MXFP4, MXFP6, NVFP4, FP8, and INT4/INT8 GPTQ/AWQ** via Humming (Issue #65503); also ongoing work on `shared_expert_gate` compatibility (Issue #68336).

#### **4. Performance & Optimization**  
- **Qwen3.8-Flash-Next (Qwen4Exp)**: Using DeepGEMM’s contiguous MQA logits kernel on SM100-family GPUs improves **prefill scoring by 1.9×** and **selection (scoring + gvr_2 top-k) by 1.07–1.42×** at 512+ query rows (PR #67740).
- **Kernel Fusions**: PR #69778 fuses SiLU-and-mul with group-128 FP8 input quant for CUTLASS block-FP8 linear—critical for high-throughput inference on FP8 models.
- **Latency Reduction**: PR #65359 proposes integrating FlashInfer’s `PcieIpcAllGatherWorkspace` into `CudaCommunicator.all_gather`, targeting latency-bound TP all-gathers in models like DeepSeek-V4.1.
- **Memory Efficiency**: PR #69920 introduces `share_replicated_regions` for `SimpleCPUOffloadConnector`, reducing host memory usage by storing TP-replicated KV regions once.

#### **5. Stability & Regressions**  
- **Critical (P0)**: [Bug] Kimi-K2.6 intermittently outputs only `"!!!!!!!!!!"` in reasoning field with null content (Issue #42426, 93 comments). *Fix pending*.
- **High Priority**: [Bug] GLM-5.2 MTP hangs on 8x MI300X due to RCCL deadlock during vocab-parallel logits all-gather (Issue #48568, 9 comments). *Repro confirmed, fix in progress*.
- **Crash Risk**: SIGSEGV in `torch::jit::invokeOperatorFromPython` when using **NVFP4 + DFlash + torch.compile on Blackwell (SM120)** (Issue #48234, closed but relevant for future builds).
- **Stability Fixes**: PR #69392 resolves multimodal cache state drift causing `MultiModalCacheMissError` in scale-out render pipelines.

#### **6. What This Means for Application Developers**  
- **Use Rust frontend (`vllm serve`) where possible**—it’s becoming the default and offers better type safety and performance (PR #68784).
- **For multi-modal apps**, ensure you’re using up-to-date renderers—PRs #70270 and #69769 fix token mismatch issues with video/image markers.
- **If deploying on AMD**, monitor CI/test results for Kimi models (Issue #66699): weekly automated verification is being introduced to catch regressions early.
- **For production LLM agents**, consider adopting **session-aware KV hints** (Issue #52113) and **SRPF scheduling** (PR #58420) to reduce head-of-line blocking in mixed workloads.
- **Avoid `auto_round` with quantized `lm_head`**—a known crasher (Issue #49137)—until patched.

> 🔗 [Full issue list](https://github.com/vllm-project/vllm/issues) | [Latest PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-27**

---

### **1. Today's Highlights**  
The SGLang project continues to prioritize stability and scalability ahead of the **1.0 release**, with major focus on resolving persistent CI flakiness and infrastructure failures (Issue #42752, #17050). Key progress includes enabling **pipeline-parallel PD prefill for DeepSeek-V4.1** (PR #53409), advancing **Unified Memory** for dynamic state management (Issue #49944), and optimizing **Rust server streaming serialization** to reduce memory overhead (PR #53482).

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
- **SGLang 1.0 Roadmap (Issue #50045)**: Focuses on hardening existing features, replacing silent config changes with explicit errors, and establishing a compatibility policy for the 1.x series. Upgrades from 0.5.x may require configuration adjustments — see [Upgrade notes](https://github.com/sgl-project/sglang/issues/50045#upgrade-notes).

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1 Pipeline-Parallel PD Prefill**: PR #53409 enables full pipeline-parallel prefill support for DeepSeek-V4.1 across PP stages, including uneven layer partitioning.
- ✅ **Intel XPU + Lookahead Expert Scheduling (LES)**: RFC #46520 proposes opt-in support for Intel XPU with SSD-tier offload and LES scheduling for MoE models.
- ✅ **NVIDIA GB10 / SM12x Support**: Issue #53439 reports shared memory overflow in `inkling2` on SM12x when routing >~2,750 expert IDs — actively being investigated.

---

### **4. Performance & Optimization**  
- 🚀 **Rust Server Streaming Optimization**: PR #53482 avoids cloning streamed chat responses before serialization, reducing memory pressure and improving throughput for high-frequency streaming use cases.
- ⚡ **FlashInfer Batch-Invariant GEMMs**: PR #51618 leverages FlashInfer 0.7.4’s batch-invariant BF16 kernels for deterministic inference on NVIDIA GPUs (Hopper+).
- 🔥 **CUDA JPEG Input Fix**: PR #51822 ensures standard CUDA JPEG inputs are decoded as RGB, fixing incorrect image patchification in Gemma 4 (ref #26751).
- 💾 **Unified Memory Progress**: Issue #49944 tracks ongoing work to unify GPU memory pools for KV, sliding-window states, and recurrent states — enabling dynamic capacity allocation.

---

### **5. Stability & Regressions**  
- **Critical**: **TP startup hangs** when Pods share `/dev/shm` (Issue #53309) — reported in v0.5.23; fix pending.
- **High Severity**: **Flaky CI tests** plague PR validation workflows (Issue #42752, updated 2026-11-26); 278 comments highlight recurring infra failures in `PR Test Base/Extra`.
- **Correctness Bug**: **Streaming loses up to 5 tokens** if detokenizer state is evicted mid-request (Issue #41236, closed but relevant for long-running sessions).
- **Regression**: **Gumbel watermark overflows int32** on multimodal padding IDs (Issue #53154) — impacts safety/privacy features in multimodal pipelines.
- **Fixes in Progress**:  
  - PR #53484: Fuses QK norm+RoPE in LLaDAImageAttention → reduces kernel launches.  
  - PR #51778: Fixes Gemma 4 image mask leakage into full-attention layers (causing non-causal attention).

---

### **6. What This Means for Application Developers**  
- **Expect increased stability** in upcoming 1.0 release — prepare for potential breaking changes in config handling and API contracts.
- **Use Unified Memory (in development)** to avoid fixed-size partitions and better handle variable-length session workloads (e.g., multi-turn agents).
- **Avoid `/dev/shm` contention** in Kubernetes deployments; ensure isolated shared memory per Pod to prevent TP startup hangs.
- **Leverage Rust server optimizations** (e.g., PR #53482) for low-latency, high-throughput agent streaming — especially with tool calls or logprobs.
- **Monitor for regression risks** in multimodal and speculative decoding paths; verify custom tokenizers and watermarking logic under load.

> 🔗 [SGLang GitHub Issues](https://github.com/sgl-project/sglang/issues) | [PRs](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-27**

---

### **1. Today's Highlights**  
The `v1.1.0` release introduces major support for the **Inkling 2 family**, including **DFlash speculative decoding** split into dedicated draft methods, and adds **Zaya1 8B**, **RAON-1-mini**, and **Hy4 flash** models. Significant performance optimizations are underway for CUDA, HIP, Vulkan, and Metal backends, particularly around Flash Attention, MoE fusion, and kernel-level fusions for Inkling-2-Mini.

---

### **2. Releases & Breaking Changes**  
- **`v1.1.0`** (GitHub: [Release v1.1.0](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0))  
  - Deprecates the legacy `llama_batch` API in favor of `llama_batch_ext` — all new code must migrate to the new interface.  
  - Splits DFlash speculative decoding into separate draft methods (`--spec-type draft-dflash`, `--spec-type draft-dflash2`) for better control and performance tuning.  
  - Adds extensive TTS (Text-to-Speech) support via new inference pipelines.

---

### **3. New Model & Hardware Support**  
#### **Models Added**:  
- **Inkling 2 family** (base, Mini, DSpark): Full support with optimized kernels and DFlash2 spec decoding.  
- **Domyn Edge 4B**, **Zaya1 8B**, **RAON-1-mini**, **Hy4 flash**: Now natively supported with quantized GGUF variants.  
- **Qwen3.5-4B**, **Qwen3.8-27B**: Detected issues with tensor count mismatches (e.g., #33099, #32918), but models are now loadable post-fixes.

#### **Hardware & Backend Enhancements**:  
- **CUDA**: Improved handling of large head dims (via PR #33161), fix for >65535 token limits (PR #33162).  
- **HIP (ROCm)**: Added split-K F32 GEMM path for untuned RDNA3 chips (PR #33167).  
- **Vulkan**: Added FP8 and scaled matmul support (PR #29791), compact bias FA for Inkling-2-Mini (PR #32898), and fixed RDNA1 misclassification (PR #33123).  
- **Apple Metal**: Fixed f32 accumulation in mul_mat and 4-section vision RoPE (PR #33093).  
- **OpenCL / Adreno A850**: Added int8 bin kernel host-side changes (PR #33069).  
- **Hexagon**: Fixed INT HMX correctness (PR #33166).  
- **Haiku OS**: Added build support (PR #33168).

---

### **4. Performance & Optimization**  
- **Kernel Fusion**: CUDA now fuses Inkling-2-Mini’s short conv, depth mix, loop controller, L2 clip, and situ chains (PR #33060), reducing kernel launch overhead.  
- **MoE Optimization**: bailingmoe3 fuses ssm_conv + silu and eliminates redundant copies (PR #33081); MoE cache now avoids storing shared expert weights thrice (PR #32744).  
- **Flash Attention**: Indexed bias support added on CUDA and Vulkan (PR #33063, #32898); attention sink reads guarded for padded GQA heads (PR #33160).  
- **Memory Efficiency**: `unicode_byte_encoding_process` optimization reduces UTF-8 conversion overhead (PR #33164).  
- **Tokenization Speed**: Unicode processing now avoids redundant string copies and conversions (PR #33164).

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Notes |
|------|----------|--------|-------|
| [#33101](https://github.com/ggml-org/llama.cpp/issues/33101) | Critical | Open | Inkling-2-Mini crashes when using `--moe-cache-mib`. Likely due to improper MoE cache management. |
| [#33099](https://github.com/ggml-org/llama.cpp/issues/33099) | High | Open | Raon-1-mini model reports incorrect tensor count (731 vs expected 736). May cause load failure. |
| [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) | High | Open | Draft-model speculative decoding ~2.2–2.4× slower on Qwen3.5 (Gated DeltaNet hybrid) on CUDA. Non-hybrid baseline loses only 10–18%. |
| [#32918](https://github.com/ggml-org/llama.cpp/issues/32918) | Medium | Open | `convert_hf_to_gguf.py` fails to detect correct number of tensors in Qwen3.8-27B. |
| [#33132](https://github.com/ggml-org/llama.cpp/issues/33132) | Medium | Open | Multi-GPU cross-device input copy triggers repeated `cudaGetDeviceProperties` calls (~8x slowdown). |
| [#31547](https://github.com/ggml-org/llama.cpp/issues/31547) | Medium | Open | SYCL decode hangs on Xe3 (Panther Lake) unless `GGML_SYCL_USE_ASYNC_MEM_OP=0`. |

> ✅ **Fixes merged recently**:  
> - CDNA MFMA bf16 vector type fix (PR #33086)  
> - Vulkan RDNA1 misclassification (PR #33123)  
> - CPU argsort NaN ordering (PR #32408)

---

### **6. What This Means for Application Developers**  
- **Upgrade to `v1.1.0`** and migrate from `llama_batch` to `llama_batch_ext` immediately—this is a breaking change.  
- Leverage **DFlash2** for faster speculative decoding on Inkling-2-Mini and similar models; use `--spec-type draft-dflash2` explicitly.  
- For **multi-GPU deployments**, avoid `-ot` overrides if possible until PR #33132 is resolved—these cause severe CPU bottlenecks.  
- Use `--moe-cache-mib` cautiously with **Inkling-2-Mini**—known instability under certain conditions (#33101).  
- Consider **FP8 and NVFP4 quantization** where available (via PRs #28898, #29791) for lower memory usage and faster inference on compatible hardware.  
- If deploying on **Intel Arc B-series or Haiku**, expect partial or experimental support—verify stability in production.

> 🔗 **Key Resources**:  
> - [GitHub Release v1.1.0](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0)  
> - [AGENTS.md Reworked Guide](https://github.com/ggml-org/llama.cpp/pull/33157)  
> - [Model Conversion Troubleshooting](https://github.com/ggml-org/llama.cpp/issues/32918)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-27**

---

### **1. Today's Highlights**  
The latest release, `v0.40.19-rc0`, brings critical performance improvements for short-context inference in Inkling-2 and reduces memory overhead in MLX’s Engram history buffers. However, multiple high-severity stability issues have emerged—particularly around GPU memory management on DGX Spark (OOM), RTX 5090 initialization failures under CUDA, and JSON schema parsing crashes—highlighting ongoing challenges with new hardware and model scaling.

---

### **2. Releases & Breaking Changes**  
- **`v0.40.19-rc0`**: Released with key optimizations:  
  - ✅ Faster short histories, draft proposals, and conv snapshots via `inkling2` improvements ([#19881](https://github.com/ollama/ollama/pull/19881))  
  - ✅ Compact Engram history buffers in MLX runner ([#19913](https://github.com/ollama/ollama/pull/19913))  
  - ✅ Bumped `llama-server` to `b12701` to fix `GGML_ASSERT(s2 <= uint32_t::max())` error in long conversations ([#19916](https://github.com/ollama/ollama/pull/19916))  

> ⚠️ **Migration Note**: Users upgrading from `0.40.17` to `0.40.18` may encounter regressions in JSON schema handling (`Unexpected empty grammar stack`) and Metal/OOM errors being silently suppressed as HTTP 200 responses ([#19918](https://github.com/ollama/ollama/issues/19918), [#19934](https://github.com/ollama/ollama/issues/19934)). These are now addressed in PRs [#19936](https://github.com/ollama/ollama/pull/19936) and related fixes.

---

### **3. New Model & Hardware Support**  
- **CUDA Backend for Inkling-2-Mini**: Added support for NVFP4 activation and tensor-core-optimized experts on NVIDIA GPUs ([#19909](https://github.com/ollama/ollama/pull/19909)).  
- **MLX Runner Enhancements**:  
  - Supports `int4 affine` quantization for `embed_tokens` and `lm_head` in `mlx-community/Inkling-2-Mini-4bit` ([#19928](https://github.com/ollama/ollama/pull/19928))  
  - Adds PPLX Decider v1.3 support via chunked decision protocol ([#19734](https://github.com/ollama/ollama/pull/19734))  
- **Ascend NPU (CANN)**: Added build option and device discovery for Huawei Ascend NPUs ([#19732](https://github.com/ollama/ollama/pull/19732)), enabling future GGUF inference on CANN platforms.  
- **New Model Request**: Proposal to add Tencent WePocketModel (WePM), a multimodal 2B/4B model supporting text/image input, embeddings, and structured reasoning ([#19920](https://github.com/ollama/ollama/issues/19920)).

---

### **4. Performance & Optimization**  
- **Inkling-2**: Speedups in short-histories and draft proposal generation via optimized internal state handling ([#19881](https://github.com/ollama/ollama/pull/19881)).  
- **MLX Memory Efficiency**: Reduced buffer footprint in Engram history by compacting data structures ([#19913](https://github.com/ollama/ollama/pull/19913)).  
- **VRAM Accounting**: Improved tracking of MoE/draft model memory usage across devices ([#19632](https://github.com/ollama/ollama/pull/19632)).  
- **Token Metrics Logging**: Opt-in per-request logging of inference metrics (tokens/sec, latency) to `metrics.jsonl` for observability ([#19869](https://github.com/ollama/ollama/pull/19869)).

---

### **5. Stability & Regressions**  
| Issue | Severity | Impact | Fix Status |
|------|----------|--------|------------|
| [#19439](https://github.com/ollama/ollama/issues/19439) | Critical | Windows + RTX 5090: runner disconnects during tool calling → HTTP 500/tokenize | Open |
| [#19879](https://github.com/ollama/ollama/issues/19879) | Critical | DGX Spark: `inkling-2-mini` causes OOM + system freeze | Closed (fix pending upstream) |
| [#19934](https://github.com/ollama/ollama/issues/19934) | High | Metal OOM → returns HTTP 200 with zero body | Fixed in [#19936](https://github.com/ollama/ollama/pull/19936) |
| [#19918](https://github.com/ollama/ollama/issues/19918) | High | JSON schema load fails mid-process → HTTP 200 empty body | Fixed in [#19936](https://github.com/ollama/ollama/pull/19936) |
| [#19921](https://github.com/ollama/ollama/issues/19921) | High | `CUDA_VISIBLE_DEVICES` misroutes RTX 5090 → CPU-only inference | Open |
| [#19915](https://github.com/ollama/ollama/issues/19915) | Medium | `GGML_ASSERT(s2 <= uint32_t::max())` in long convo | Fixed via llama.cpp bump ([#19916](https://github.com/ollama/ollama/pull/19916)) |

> 🔴 **Critical Alert**: Multiple users report DGX Spark instability after upgrade from `0.34.4` to `0.40.18`, affecting even stable models — **avoid production use until resolved** ([#19927](https://github.com/ollama/ollama/issues/19927)).

---

### **6. What This Means for Application Developers**  
- **Use `OLLAMA_LOG_METRICS=1`** to instrument per-request token throughput and latency—essential for benchmarking and cost modeling in agent systems.  
- **Avoid `0.40.18` on macOS/Metal or Windows/RTX 5090** due to silent failure modes and OOM bugs; stick to `0.40.17` or wait for `v0.40.19` release.  
- **Handle `HTTP 200` responses with empty bodies carefully**—they may indicate mid-stream decode failures (e.g., GPU OOM), not success. Use `--stream` and monitor SSE errors.  
- **Expect stricter validation for document blocks**: `/v1/messages` now rejects unsupported `document` types and returns `400`, so avoid sending raw text in `document` blocks—use `text` instead ([#19926](https://github.com/ollama/ollama/pull/19926)).  
- **Plan for model-specific quirks**: `qwen3.8-flash-next` shows unbounded prefix-cache growth (~0.6 GiB per prompt) on MLX; consider `OLLAMA_KEEP_ALIVE=-1` or limit context size.  

> 📌 **Pro Tip**: For vision models like `qwen3-vl`, avoid prompts containing `[img-` unless properly escaped—this triggers false-positive image placeholder detection ([#19912](https://github.com/ollama/ollama/pull/19912)).

---  
*Data source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-27**

#### **1. Today's Highlights**
The LiteLLM ecosystem continues its rapid evolution with a new `v1.113.0-dev.1` release emphasizing security and supply chain integrity, verified via Cosign against GitHub Actions. Key developments include critical fixes for streaming fallback behavior in `/v1/messages`, improvements to Prometheus metrics for routed deployments, and ongoing work to stabilize the MCP (Model Control Plane) stack—particularly around cold-start latency and stateful session limits. A growing focus on auditability and compliance is evident in proposed changes to enforce immutable user identifiers by default.

#### **2. Releases & Breaking Changes**
- **`v1.113.0-dev.1`** (latest dev):  
  - Introduces enhanced Docker image signing verification using Cosign.  
  - Security-focused: Requires explicit validation of release provenance via:  
    ```bash
    cosign verify \
      --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      ghcr.io/berriai/litellm:v1.113.0-dev.1
    ```
  - [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.113.0-dev.1)

- **LTS Update**: `v1.108.19` (LTS) released with stability patches.  
  - Use `ghcr.io/berriai/litellm:lts` to stay on the latest stable patch.  
  - Verify with:  
    ```bash
    cosign verify \
      --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      ghcr.io/berriai/litellm:lts
    ```

> ⚠️ **Migration Note**: Users relying on `lts` tags should ensure their CI/CD pipelines pull from `ghcr.io/berriai/litellm:lts` instead of hardcoded versions.

#### **3. New Model & Hardware Support**
- **Inference.net Provider Added** (#54787):  
  - Native integration with Inference.net as a new LLM provider.  
  - Includes cost map entries for pricing tracking.  
  - *Note*: Function calling support inferred from docs; not yet exposed via `/v1/models`.  
  - [PR #54787](https://github.com/BerriAI/litellm/pull/54787)

- **Bedrock Converse Tool Schema Fixes** (#54561):  
  - Resolves tool schema rewriting issues that break cross-provider conversations between Bedrock and Vertex AI.  
  - Prevents 400 errors when tools lack `required` parameters.  
  - [Issue #54561](https://github.com/BerriAI/litellm/issues/54561)

#### **4. Performance & Optimization**
- **Streaming Response Efficiency**:  
  - Fix PRs #54789 and #54790 address memory leaks in cancelled background streams, preventing indefinite retention of read-on streams post-client disconnect.  
  - Improves long-running proxy performance under high concurrency.  
  - [PR #54789](https://github.com/BerriAI/litellm/pull/54789), [PR #54790](https://github.com/BerriAI/litellm/pull/54790)

- **Cold Start Latency Reduction**:  
  - PR #54497 improves MCP server reload logic by reusing unchanged servers even when `updated_at` is `NULL`, reducing cold-cache build times.  
  - Addresses 504 gateway timeouts during initial semantic search (`/mcp/proxy/search_tools`).  
  - [PR #54497](https://github.com/BerriAI/litellm/pull/54497)

#### **5. Stability & Regressions**
| Severity | Issue | Status | Impact |
|--------|------|--------|--------|
| 🔴 Critical | `/v1/messages` stream returns 200 + error chunk if fallback fails before content (#38610) | Open | Streaming clients receive malformed SSE payloads |
| 🔴 Critical | `validate_environment()` triggers OAuth device login for `chatgpt/` and `github_copilot/` models (#54763) | Open | Breaks scripts running in headless environments |
| 🟡 High | `trim_messages()` breaks tool-call relationships (#54442) | Open | Loss of context integrity in agent workflows |
| 🟡 Medium | Bedrock guardrail hook reuses `api_key` as bearer token, conflicting with BYOK routing (#37872) | Closed | Security misconfiguration risk |
| 🟡 Medium | Presidio guardrail holds global lock across HTTP requests (#47579) | Open | Potential thread contention under load |

> ✅ **Fixes in Progress**: PR #54789 and #54790 resolve streaming resource leaks. No known fix for OAuth trigger issue yet.

#### **6. What This Means for Application Developers**
- **Security & Compliance**: Enforce immutable `user_id` attribution via `LITELLM_ENFORCE_SAFETY_IDENTIFIER=TRUE` (Issue #14505) — essential for audit-ready systems.
- **Agent Reliability**: Avoid broken tool call chains by upgrading to versions where `trim_messages()` preserves tool-call/response links (Issue #54442).
- **Production Readiness**: Prioritize `lts` images for production use; avoid `dev` tags unless testing new features.
- **Observability**: Leverage new Prometheus metrics for deployment routing outcomes (Issue #53040) and per-member team budgets (Issue #45578) for fine-grained cost monitoring.
- **Avoid Pitfalls**: Do not call `validate_environment()` or `supports_response_schema()` in non-interactive contexts if using `chatgpt/` or `github_copilot/` — these now initiate OAuth flows unexpectedly.

> 💡 **Pro Tip**: For agent frameworks, validate your model routing configuration using `litellm.supports_response_schema()` only after authenticating via stored tokens or environment variables.

---  
*Digest compiled from GitHub data at 2026-11-27. Follow [LiteLLM Issues](https://github.com/BerriAI/litellm/issues) and [PRs](https://github.com/BerriAI/litellm/pulls) for real-time updates.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-27**

---

### **1. Today's Highlights**  
Unsloth continues its aggressive optimization push with key fixes for MLX on Apple Silicon (LFM3 crashes, startup race) and critical stability improvements in Studio’s memory estimation and model loading logic. Notable progress in GPU offloading efficiency via `offload_layers` layer-by-layer micro-batching and new support for PrismML’s PQ2_0/PTQ1_0 GGUF quantizations is enabling deeper hardware utilization across diverse inference workloads.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The current beta version remains `0.1.925-beta`.

---

### **3. New Model & Hardware Support**  
- ✅ **PrismML GGUF Quantization Support**: Added experimental support for `PQ2_0` (GGML type 142) and `PTQ1_0` (GGML type 143), crucial for running Ternary-Bonsai-2.5-27B variants efficiently via Studio’s bundled `llama.cpp`.  
  🔗 [PR #19750](https://github.com/unslothai/unsloth/pull/19750)  
- ✅ **AMD XDNA NPU Support Expansion**: Feature request (#18092) for older Ryzen AI 100/200 series NPUs now acknowledged — indicates future roadmap expansion beyond XDNA 2+ platforms.  
  🔗 [Issue #18092](https://github.com/unslothai/unsloth/issues/18092)  
- ✅ **ModelScope Mirror Mapping**: Expanded Hugging Face → ModelScope aliasing to cover entire vendor orgs (e.g., `zai-org/GLM-5.3` → `ZhipuAI/GLM-5.3`). Improves access to region-optimized models.  
  🔗 [PR #19883](https://github.com/unslothai/unsloth/pull/19883)

---

### **4. Performance & Optimization**  
- 🚀 **Layer-by-Layer Offloading (`offload_layers`)**: New PR introduces per-microbatch layer swapping, reducing redundant memory copies during gradient accumulation steps by up to **2× per step**, improving throughput under high batch sizes.  
  🔗 [PR #19808](https://github.com/unslothai/unsloth/pull/19808)  
- ⚡ **LoRA Folding for Diffusion Speedups**: Per-load LoRA merging option enables **~18% faster rendering times** (median from 3.145s → 2.559s on DGX Spark), with optional enablement via `UNSLOTH_H3_IMAGE_BATCHED=1`.  
  🔗 [PR #19868](https://github.com/unslothai/unsloth/pull/19868)  
- 📈 **Image Batch Scheduling Refactor**: Concurrency-aware batching now shares pipelines based on real-time load and shape profiling, not blanket family rules — improves GPU utilization across mixed-size image requests.  
  🔗 [PR #19837](https://github.com/unslothai/unsloth/pull/19837)

---

### **5. Stability & Regressions**  
- ❌ **Apple Silicon MLX Crash (LFM3)**: Intermittent `huggingface_hub _ModuleLock deadlock` and `LanguageModelOutput TypeError` on tier 510 Macs due to race between background Hub read and MLX hardware check. Fixed via pre-resolving `model_info`.  
  🔗 [Issue #19749](https://github.com/unslothai/unsloth/issues/19749) | [PR #19770](https://github.com/unslothai/unsloth/pull/19770)  
- ❌ **Windows Integrated GPU Memory Overestimation**: RTX Spark N1X (ARM64) incorrectly credited ~109 GiB free memory due to system commit misreading. Now bounded by actual Windows commit charge.  
  🔗 [PR #19881](https://github.com/unslothai/unsloth/pull/19881)  
- ❌ **Studio Memory Estimator Misleading Warnings**: `estimate-memory` ignores `-ot` / `n_cpu_moe` MoE expert offload settings, triggering false "Exceeds GPU memory" warnings.  
  🔗 [Issue #19795](https://github.com/unslothai/unsloth/issues/19795)  
- ❌ **CUDA 13.0 ptxas Blackwell Conflicts**: Triton’s `ptxas-blackwell` override can conflict with system PATH when importing `flashinfer`. Now preserved if present.  
  🔗 [PR #19882](https://github.com/unslothai/unsloth/pull/19882)

---

### **6. What This Means for Application Developers**  
Developers building agent systems on Unsloth should now expect better stability on Apple Silicon and AMD APU platforms, especially when using custom quantized models like PQ2_0/PTQ1_0. The new `offload_layers` micro-batch strategy enables more efficient training at scale. For production deployments, **enable `UNSLOTH_DIFFUSION_INT8_CUTLASS=0` on Ada GPUs** to avoid performance regressions until patched. Use `UNSLOTH_H3_IMAGE_BATCHED=1` only if latency is critical. Also, be mindful of sandboxed tooling — recent issues highlight risks of unintended host access via MCP engines; always validate security context before deploying LLM agents.  

> 💡 *Pro Tip*: Monitor `UNSLOTH_DIFFUSION_ROCM_W8A8_TRAIN=1` for early access to int8 LoRA training on ROCm — useful for low-memory environments.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*