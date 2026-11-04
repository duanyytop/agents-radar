# AI Infrastructure Digest 2026-11-04

> Generated: 2026-11-04 02:39 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-04**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is rapidly maturing into a multi-layered, hardware-aware stack where performance, scalability, and developer experience are tightly interwoven. Key players like vLLM, SGLang, and llama.cpp are pushing the boundaries of low-latency inference through kernel-level optimizations and disaggregated architectures, while Ollama and LiteLLM are redefining the developer workflow with agent-native tooling and proxy abstraction. The rise of MoE models, FP8/FP4 quantization, and cross-architecture support (AMD ROCm, Intel XPU, Apple MLX) signals a shift toward heterogeneous, production-grade deployment environments. Meanwhile, Unsloth’s focus on UI/UX and real-time inference acceleration highlights growing demand for seamless local agent experiences.

---

### **2. Activity Comparison**

| Project       | Issues Open | PRs Merged (Last 7d) | Release Status         |
|---------------|-------------|------------------------|------------------------|
| **vLLM**      | 342         | 87                     | No new release; RC pending |
| **SGLang**    | 298         | 65                     | No new release; active dev |
| **llama.cpp** | 411         | 52                     | `b12091+` stable build |
| **Ollama**    | 315         | 49                     | v0.40.15-rc0 released |
| **LiteLLM**   | 276         | 41                     | v1.109.0-rc.1 released |
| **Unsloth**   | 257         | 38                     | v0.1.914-beta (beta) |

> *Note: Issue counts reflect open issues as of 2026-11-04; PRs based on GitHub activity in last 7 days.*

---

### **3. Model Support Race**

| New Model / Architecture        | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1**                | ✅ (ROCm + MI350X/P) | ⚠️ (in progress) | ❌ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash**                | ✅ (ROCm opt) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Muse Spark (AMD)**             | ✅ (MI350P/X) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 ASR Streaming**   | ✅ (FR #47455) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 Transcribe**      | ❌ | ❌ | ✅ (`b12087`) | ❌ | ❌ | ❌ |
| **Metis-1.6**                    | ❌ | ❌ | ✅ (`b12089`) | ❌ | ❌ | ❌ |
| **xing4_0**                      | ❌ | ❌ | ✅ (`b12089`) | ❌ | ❌ | ❌ |
| **MiMo V2.6**                    | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Qwen3.8-Flash-Next**           | ✅ (ROCm, SM120) | ✅ (SM120, gfx950) | ✅ (SM120) | ❌ | ❌ | ✅ (CUDA graphs) |
| **FP8 LoRA**                     | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (`v0.1.914-beta`) |

> **Leader**: **Unsloth** leads in model-specific CUDA graph optimization and MoE support.  
> **Front-runner in diversity**: **llama.cpp** demonstrates broadest native model coverage across GGUF, CPU, and mobile backends.  
> **Agent-first**: **Ollama** is fastest to adopt multimodal agents (MiMo V2.6), video input, and tool call reliability.

---

### **4. Performance Frontier**

| Optimization Focus          | vLLM                          | SGLang                        | llama.cpp                     | Ollama                         | LiteLLM                       | Unsloth                        |
|-------------------------------|-------------------------------|-------------------------------|-------------------------------|--------------------------------|-------------------------------|--------------------------------|
| **KV Cache & Memory**         | ✅ Cyclic GC reduction, cache-aware admission | ✅ HiCache deadlock fix | ✅ Lazy host memory allocation | ⚠️ MLX swap issue (#18131)     | ✅ Redis circuit breaker fix  | ✅ Reduced DB connections |
| **Batching & Inference Mode** | ✅ Batch-invariant mode (progress) | ✅ PD disaggregation (critical fixes) | ✅ MTP speculative decoding (fixes) | ✅ Concurrent gen via `OLLAMA_NUM_PARALLEL` | ✅ Virtual keys + callback hooks | ✅ CUDA graphs (all FastModels) |
| **Quantization**              | ✅ NVFP4, Q4_K_M, context-aware sparse LM head | ✅ NVFP4 draft experts, MoE quant | ✅ NVFP4 LFM3, Q8_1 correction | ✅ BF16/NVFP4 only (no mixed) | ✅ Soft budget alerts, cost governance | ✅ FP8 LoRA over 16-bit base |
| **Kernel & Hardware**         | ✅ SM89 BF16 fusion, ROCm deep optimization | ✅ SM120 block32 DeepGEMM, Gluon kernels | ✅ SYCL tensor mode (+19%), HIP fast-math | ✅ On-the-fly SHA256 verification | ✅ Pre-built UI artifacts | ✅ All FastModel CUDA graphs (T4: 3–7x speedup) |
| **Distributed Serving**       | ✅ `/token-in/token-out` API roadmap | ✅ DFLASH crash fixes under PD | ❌ | ❌ | ✅ Multi-tenant routing | ❌ |

> **Key Trend**: **CUDA graph application across all FastModels** (Unsloth) and **disaggregated serving** (vLLM/SGLang) represent the most aggressive performance pushes today.

---

### **5. Layer Positioning**

| Project       | Primary Layer               | Secondary Role                                | Key Differentiator |
|---------------|-----------------------------|------------------------------------------------|--------------------|
| **vLLM**      | **Inference Engine**        | Model Serving, Gateway (via `/token-in/out`) | Industry standard for high-throughput, batch-aware inference |
| **SGLang**    | **Inference Engine + Framework** | PD Disaggregation, RL workflows | Leading edge in distributed inference architecture |
| **llama.cpp** | **Local Runtime / CLI Tool** | Cross-platform, embedded inference | Unmatched portability and backend diversity (SYCL, Hexagon, WebGPU) |
| **Ollama**    | **Agent Gateway / Local Runtime** | Full-stack agent engine, RAG, tooling | Developer-centric; best-in-class agent UX and multimodal support |
| **LiteLLM**   | **API Gateway / Proxy**     | Cost control, multi-provider routing | Enterprise-grade observability, soft budgeting, security |
| **Unsloth**   | **Agent Studio / Training Toolkit** | Real-time inference, UI customization | Blends training, fine-tuning, and inference in one UI-driven platform |

> **Strategic Insight**: The divide between **infrastructure engines** (vLLM, SGLang) and **developer platforms** (Ollama, LiteLLM, Unsloth) is now clearly defined — each excelling in distinct layers.

---

### **6. Trend Signals**

1. **Disaggregation is the Future of Scaling**: Both vLLM and SGLang are investing heavily in **prefill-decode disaggregation (PD)**, signaling that high-throughput, low-latency inference will increasingly rely on split pipeline architectures.
   
2. **MoE & Hybrid Models Demand Specialized Tooling**: With Qwen3-MoE, xing4_0, and Metis-1.6 now supported, the ecosystem is moving beyond single-model serving — expect more projects to add MoE-aware scheduling, expert offloading, and partial weight updates.

3. **FP8 and NVFP4 Are Now Mainstream**: Multiple projects (vLLM, SGLang, Unsloth) now support FP8 or NVFP4 quantization — indicating that efficient, low-precision inference is no longer experimental but production-ready.

4. **Agent Workflows Are Driving UX Innovation**: Ollama’s video input, MiMo V2.6, and concurrent generation features show that **local agent development** is shifting from academic prototypes to full-fledged applications — requiring robust tooling and stability.

5. **Security & Observability Are Non-Negotiable**: LiteLLM’s cosign-signed images and per-request callbacks reflect rising demands for secure, auditable, and governable inference pipelines — especially in SaaS and regulated environments.

> **Action for Developers**:  
> - Prioritize **vLLM** for large-scale, batch-invariant inference.  
> - Use **Ollama** for building local, vision-enabled agent systems.  
> - Leverage **Unsloth** for rapid prototyping with GPU-accelerated inference and LoRA.  
> - Adopt **LiteLLM** for multi-provider orchestration with strict cost controls.  
> - Monitor **SGLang** for future PD-based agent frameworks.

---  
*Generated from GitHub data as of 2026-11-04 | For technical decision-makers in AI infrastructure.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# **vLLM Digest – 2026-11-04**

---

### **1. Today's Highlights**  
The vLLM project continues to deepen its support for **batch-invariant inference**, with a high-impact feature request (#27433) nearing completion after extensive community discussion and design work. On the hardware front, **ROCm/AMD progress accelerates**, with multiple PRs targeting DeepSeek-V4.1, GLM-5.3, and Muse Spark optimizations on MI350X/MI350P. Meanwhile, **Rust frontend maturity** advances through improved benchmarking and stability fixes, signaling readiness for production use.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1**: ROCm support expanded via PR #65555 (sharded sparse-indexer prefill rows across TP ranks), and tokenizer hardening via PR #62812 (rejects reserved special tokens).  
- **GLM-5.3-Flash**: ROCm-specific performance improvements via PR #63070 (default to breakable CUDA graphs) and kernel-level optimization tracking in issue #57406.  
- **Muse Spark (AMD)**: Specialized decode path now supports MI350P (#63712) and resolves long-context decoding stalls on MI350X (#65190).  
- **NVIDIA Nemotron 3.5 ASR Streaming**: Feature request #47455 tracks support for this 600M-parameter multilingual streaming ASR model.  
- **Intel GPU (XPU)**: CI test fixes in PR #65416 ensure stable P2P lifecycle and multimodal prefix-LM tests.  

> 🔗 [PR #65555](https://github.com/vllm-project/vllm/pull/65555) | [PR #63070](https://github.com/vllm-project/vllm/pull/63070) | [PR #65416](https://github.com/vllm-project/vllm/pull/65416)

---

### **4. Performance & Optimization**  
- **Speculative Decoding**: PR #59740 reports **+13.8% decode throughput at c=1** (and +7.7% at c=4) using a context-aware sparse LM head on Qwen3.8-Flash-Next-NVFP4. Composes well with quantization (+23.3% with NVFP4).  
- **Kernel Fusion**: PR #65344 introduces opt-in BF16 gated projection fusion for SM89 (RTX 4090) prefills in Qwen2MoeMLP, improving dense MLP efficiency.  
- **Rust Benchmarks**: PR #64308 adds ramp-up run tracking to result JSON/filenames; PR #64946 ensures `--output-len` maps correctly to ShareGPT/HF datasets.  
- **Memory Efficiency**: PR #65300 removes per-request token/block ID lists from cyclic GC—reducing memory pressure in long-context scenarios.  
- **Prefill Optimization**: PR #54625 implements cache-aware admission ordering to prioritize requests with cached prefixes, reducing cold-start latency.  

> 🔗 [PR #59740](https://github.com/vllm-project/vllm/pull/59740) | [PR #65344](https://github.com/vllm-project/vllm/pull/65344) | [PR #65300](https://github.com/vllm-project/vllm/pull/65300)

---

### **5. Stability & Regressions**  
- **Critical ROCm Crash**: PR #65554 addresses illegal memory access at startup with extensible KV cache on DeepSeek-V3.2 (TP2+PP2), caused by unaligned KV segments.  
- **Cross-Request Caching Contamination**: Issue #61160 reports intermittent content leakage between requests in PD disaggregated deployments due to shared-prefix reuse with automatic prefix caching enabled.  
- **Silent Garbage Output under Confidential Computing**: Issue #57224 shows stale UVA views of pinned host memory cause silent garbage output when `VLLM_USE_V2_MODEL_RUNNER=1`.  
- **Block Size Failure in v0.32.0**: Issue #59203 reports no working block size (64/128 fail) on Blackwell RTX PRO 6000 servers—tracked in #60762.  

> 🔗 [PR #65554](https://github.com/vllm-project/vllm/pull/65554) | [Issue #61160](https://github.com/vllm-project/vllm/issues/61160) | [Issue #57224](https://github.com/vllm-project/vllm/issues/57224)

---

### **6. What This Means for Application Developers**  
- **Use batch-invariant mode** for deterministic inference in production—tracking progress in #27433.  
- **Enable Rust frontend** (`VLLM_USE_RUST_FRONTEND=1`) for low-latency, high-throughput serving; expect better tooling and benchmarks soon.  
- **Leverage cache-aware admission** and **priority preemption** (issue #40004) for fine-grained control over request scheduling in agent systems.  
- **Avoid ROCm crashes** by upgrading to latest nightly builds or applying fixes like #65554 and #63712.  
- **Prepare for disaggregated serving**—the `/token-in/token-out` API roadmap (#22817, #34407) enables custom frontends, MM input processing, and RL workflows.  

> 📌 Pro Tip: Use `--no-enable-prefix-caching` temporarily if seeing cross-request contamination (#61160); future updates will resolve this safely.

---  
*Data source: [vllm-project/vllm GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-04**

---

### **1. Today's Highlights**  
The SGLang project continues to accelerate its focus on **prefill-decode disaggregation (PD)** and **multi-architecture performance optimization**, with key work on AMD ROCm support, Blackwell SM120 kernel tuning, and stability fixes for speculative decoding under PD mode. Critical CI infrastructure issues and flaky test tracking remain active concerns, while several PRs advance MoE quantization, cache management, and tool call handling.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **AMD ROCm (gfx950 / MI355X):** Ongoing performance optimization for `Qwen3.8-Flash-Next` via Gluon kernels (`PR #46486`) and new DCP-size crash fix (`PR #38709`).  
- **Intel XPU:** RFC introduced for paged-experts support with Lookahead Expert Scheduling (LES) and SSD tier offload (`PR #46520`).  
- **Mooncake Engram Storage:** Added node-sharded storage for Qwen4-Exp PLE N-gram tables (`PR #47673`).  
- **NVIDIA Blackwell (SM120):** Native block32 DeepGEMM enabled for DeepSeek-V4.1 FP8 (`PR #47210`).  
- **New Models:** Native support added for `nvidia/Nemotron-3-Embed-1B-BF16` embedding model (`PR #45885`).  

---

### **4. Performance & Optimization**  
- **DeepSeek-V4.1 (SM120):** `--fp8-gemm-backend deep_gemm` now explicitly uses native block32 GEMM for improved throughput (`PR #47210`).  
- **Qwen3.8-Flash-Next (SM120):** Split-K sparse decode kernel for FP8 KV improves MTP target verification efficiency (`PR #48296`).  
- **MoE Optimization:** NVFP4 quantization of draft experts in MIXED_PRECISION checkpoints (`PR #48295`) and preserved expert integrity during partial weight updates (`PR #48299`).  
- **Memory Efficiency:** Optimized indexer page table expansion in one Triton kernel reduces CPU overhead (`PR #48229`).  
- **Kernel Tuning:** Bit-identical cuBLASLt algorithm table for BF16 linears enables higher occupancy and better utilization (`PR #48294`).  

---

### **5. Stability & Regressions**  
- **Critical Crash:** `DFLASH` speculative decoding crashes under PD disaggregation due to missing disagg wiring (`Issue #36140`, closed).  
- **CUDA Coredumps:** Auto-collected coredump tracker shows recurring hardware-level failures (`Issue #26340`, 354 comments).  
- **ROCm Crashes:** `--dcp-size > 1` causes runtime crash due to incorrect return unpacking (`Issue #38709`).  
- **Flaky CI:** Persistent flakiness in PR tests and infrastructure failures tracked in `#42752`.  
- **Cache Deadlock:** HiCache prefetch deadlock under TP=4, no PP (`Issue #30760`, closed).  
- **Tool Call Issues:** Malformed multimodal requests cause engine-wide crashes (`Issue #38022`, closed); malformed Harmony headers now recoverable (`PR #48297`).  

---

### **6. What This Means for Application Developers**  
- **Use PD Disaggregation with Caution:** Avoid `DFLASH` speculative decoding if using PD mode — use DSPARK/EAGLE instead until `#36140` is fully resolved.  
- **Expect Better Throughput on SM120:** Leverage `--fp8-gemm-backend deep_gemm` and `block32` kernels for high-throughput inference on RTX PRO 6000 Blackwell.  
- **Handle Tool Calls Robustly:** Use updated Harmony rendering logic (`PR #48297`) to avoid silent function call loss in malformed inputs.  
- **Monitor CI Health:** Be prepared for flaky test runs; expect frequent re-runs when submitting PRs.  
- **Plan for Multi-Architecture Deployments:** ROCm and XPU support is maturing — validate performance on gfx950/MI355X and Intel XPU early in your pipeline.  

> 🔗 [View full issue list](https://github.com/sgl-project/sglang/issues) | [Browse recent PRs](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-04**

---

### **1. Today's Highlights**  
The latest development cycle focuses on stabilizing speculative decoding (MTP) with critical fixes for hidden state management and GPU kernel correctness. Notable progress includes performance gains for Intel SYCL via `--sm tensor` optimization (+19% prompt eval), improved support for Nemotron 3.5 Transcribe, and new model-level support for Metis-1.6 and xing4_0. A major CUDA fix addresses Q8_1 correction sum issues, while ongoing efforts target memory safety and backend-specific regressions.

---

### **2. Releases & Breaking Changes**  
- **`b12091`**: Fixed MTP hidden state save/restore logic — essential for stable speculative decoding across quantized models ([#30141](https://github.com/ggml-org/llama.cpp/pull/30141)).  
- **`b12090`**: Resolved fattn test failure in `ggml-zdnn` backend ([#31583](https://github.com/ggml-org/llama.cpp/pull/31583)).  
- **`b12089`**: Added full support for **Metis-1.6** models including architecture registration and GGUF conversion ([#31134](https://github.com/ggml-org/llama.cpp/pull/31134)).  
- **`b12088`**: Enabled **NVFP4 LFM3** GGUF format support — unlocks efficient inference for specific LFM3 variants ([#31608](https://github.com/ggml-org/llama.cpp/pull/31608)).  
- **`b12087`**: Introduced **Nemotron 3.5 Transcribe** support with draft model compatibility and BF16 checkpoint validation ([#31471](https://github.com/ggml-org/llama.cpp/pull/31471)).

> ✅ *Migration note:* Users relying on MTP speculative decoding with quantized targets should update to `b12091+` to avoid greedy output divergence.

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - ✅ **Metis-1.6** (full support: architecture, hyperparameters, conversion, inference graph).  
  - ✅ **xing4_0** (architecture registration, MoE/MTP/MHC/MLA support, GGUF conversion).  
  - ✅ **Nemotron 3.5 Transcribe** (draft model integration, vocab alignment, BF16-only enforcement).  
- **Backends & Hardware**:  
  - ✅ **Hexagon (Snapdragon 7 Gen 4)**: Added `LIGHTNING_INDEXER` support via PR [#31289](https://github.com/ggml-org/llama.cpp/pull/31289).  
  - ✅ **WebGPU**: Batched tensor API (`get_tensor_n`, `set_tensor_n`) now supported ([#31473](https://github.com/ggml-org/llama.cpp/pull/31473)).  
  - ✅ **SYCL (Intel)**: Optimized `comm_exchange` kernel boosts `-sm tensor` throughput by +19% on B70s ([#30956](https://github.com/ggml-org/llama.cpp/pull/30956)).  

---

### **4. Performance & Optimization**  
- **Intel SYCL**: `--sm tensor` prompt evaluation speed increased by **+19%** (mean), matching `--sm layer` performance without PPL degradation ([#30956](https://github.com/ggml-org/llama.cpp/pull/30956)).  
- **CUDA**: Potential fix for Q8_1 correction sum error improves numerical stability ([#31247](https://github.com/ggml-org/llama.cpp/pull/31247)).  
- **OpenCL (Adreno)**: Improved `q2_0 GEMV` kernel via higher row output per thread (4–8 rows), boosting efficiency on mobile GPUs ([#31577](https://github.com/ggml-org/llama.cpp/pull/31577)).  
- **HIP**: Fast-math enabled without regressions — final step toward ROCm performance parity ([#31625](https://github.com/ggml-org/llama.cpp/pull/31625)).  
- **Host Memory**: Lazy allocation in scheduler context and graph metadata reduces host memory footprint ([#31274](https://github.com/ggml-org/llama.cpp/pull/31274)).

---

### **5. Stability & Regressions**  
- **Critical**:  
  - 🚨 **Speculative Decoding Divergence** (`--spec-type draft-mtp`): Greedy sampling produces different outputs vs vanilla on quantized targets (e.g., Q4_K_M); confirmed on `b12091` but not fixed yet ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618), 37 comments).  
  - 🚨 **CUDA Illegal Memory Access**: Crashes occur when MTP drafts follow KV cache rollback/clear; affects Gemma 4 31B ([#31077](https://github.com/ggml-org/llama.cpp/issues/31077)).  
- **High Priority**:  
  - ⚠️ **SYCL Segmentation Fault**: Reported on oneAPI 2026.2.0; likely tied to memory layout or buffer handling ([#31064](https://github.com/ggml-org/llama.cpp/issues/31064)).  
  - ⚠️ **Qwen4exp + MTP Crash**: `GGML_ASSERT(buffer)` on server startup due to improper input setup ([#30860](https://github.com/ggml-org/llama.cpp/issues/30860)).  
- **Ongoing Issues**:  
  - ❌ **AMD CDNA2 Compilation Failure** on gfx90a (MI210): Build fails due to HIP codegen issues ([#30869](https://github.com/ggml-org/llama.cpp/issues/30869)).  
  - ❌ **Hexagon HMX MUL_MAT returns inf** for `n >= 5` — blocks usage on Snapdragon 7 Gen 4 ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473)).

> 🔧 *Fixes in progress*: PR [#31634](https://github.com/ggml-org/llama.cpp/pull/31634) aims to stabilize GDN kernel orderings for CUDA; PR [#31630](https://github.com/ggml-org/llama.cpp/pull/31630) already merged to address related issues.

---

### **6. What This Means for Application Developers**  
- **Use `b12091+` for production speculative decoding** — older versions risk inconsistent output on quantized models.  
- **Leverage `--sm tensor` with Intel SYCL** for near-layer-level performance; expect ~+19% prompt eval speed.  
- **Integrate Nemotron 3.5 Transcribe and xing4_0** today via `b12087+` and `b12089+`; ensure you use BF16/NVFP4 quants.  
- **Avoid `--model-draft` with DFlash2 + `--split-mode tensor`** until [#28777](https://github.com/ggml-org/llama.cpp/issues/28777) is resolved — crashes expected.  
- **Monitor SYCL and CUDA backends closely** — recent regressions may affect real-time agents or servers under load.  
- **Prepare for future MoE/MTT workloads**: New `xing4_0` and `Metis-1.6` support signals growing ecosystem maturity for hybrid architectures.

> 📌 *Pro Tip*: Use `--n-cpu-mode` and `--n-cpu-ffn` for CPU-heavy FFNs — feature request [#27987](https://github.com/ggml-org/llama.cpp/issues/27987) still open but widely requested.

---  
*Digest generated from GitHub data at 2026-11-04 | Source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-04**

---

### **1. Today's Highlights**  
Ollama v0.40.15-rc0 introduces native MLX CUDA library bundling on Linux and adds support for the new **MiMo V2.6** model, enhancing multimodal and agent-capable workflows. Key improvements include video input support on MLX (PR #19348), tokenization APIs (`/api/tokenize`), and fixes for streaming authorization errors and tool call truncation (PRs #19494, #19491). These advances strengthen Ollama’s role as a full-stack inference engine for local LLM agents.

---

### **2. Releases & Breaking Changes**  
- **v0.40.15-rc0**: Released with critical stability and performance updates. No breaking API changes reported, but users should verify compatibility with custom tooling relying on `num_return_sequences`, `truncation`, or `AuthorizationError` handling in streaming responses.
- **API Fix**: Streaming `401 Unauthorized` responses now correctly propagate `AuthorizationError` even when response body is malformed (PR #19491).
- **Bug Fix**: Tool calls truncated mid-generation no longer cause HTTP 500 errors; they are now safely dropped (PR #19494).

> 🔗 [Full Changelog](https://github.com/ollama/ollama/compare/v0)

---

### **3. New Model & Hardware Support**  
- ✅ **MiMo V2.6** (MLX & GGUF): Added via PR #19400 — supports advanced reasoning and multi-agent orchestration.
- 🎥 **Video Input Support (MLX)**: MLX models now accept MP4/MOV clips via `images` field in `/api/chat` and `/api/generate`. Works on macOS (PR #19348); Linux/Windows support pending (Issue #19503).
- 🧠 **AutoTrust Decision Models (MLX)**: Experimental support added for trust-aware, vision+text models (PR #19399).
- 💻 **Kimi Code CLI Integration**: `ollama launch kimi` now supports modern config-driven model selection (PR #19506).

> 🔗 [Test MiMo V2.6](https://github.com/ollama/ollama/pull/19400) | 🔗 [Video Input PR](https://github.com/ollama/ollama/pull/19348)

---

### **4. Performance & Optimization**  
- ⚡ **Model Pull Speedup**: PR #19505 introduces **on-the-fly SHA256 verification during parallel downloads**, eliminating redundant post-pull hash checks. This reduces latency by up to ~30% for large GGUF models (e.g., 100GB+).
- 🔄 **Concurrent Generation (MLX)**: PR #19197 enables multiple concurrent generations per MLX model via `OLLAMA_NUM_PARALLEL` (default: 1). Improves throughput for agent pipelines without increasing memory overhead per request.
- 🔤 **Tokenization API**: PR #19498 adds `/api/tokenize` and `/api/detokenize` endpoints — allows pre-tokenization without model loading, enabling faster prompt engineering and cost estimation.

> 🔗 [Parallel Gen PR](https://github.com/ollama/ollama/pull/19197) | 🔗 [Tokenization PR](https://github.com/ollama/ollama/pull/19498)

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix/Workaround |
|------|----------|--------|----------------|
| #18131: MLX prefix cache causes heavy swap on 32GB Apple Silicon | High | Open | Reduce `prefix_cache_size` manually until fix lands |
| #17408: Scheduler deadlock during model eviction | Critical | Open | Blocking all new loads; reproducible on 0.31.1 and main |
| #19489: `AuthorizationError` lost in non-JSON 401 streams | Medium | Open | Fixed in PR #19491 (pending merge) |
| #19493 / #19494: Tool call cut-off → HTTP 500 | High | Open | Fixed in PR #19494 (pending merge) |
| #19492: Responses silently truncate oversized inputs | High | Open | Reproduced on Windows; affects accuracy |
| #19485: NVIDIA Pascal GPU CUDA error in v0.40.13 | High | Closed | Likely due to outdated driver or CUDA version |

> 🔗 [Scheduler Deadlock](https://github.com/ollama/ollama/issues/17408) | 🔗 [MLX Swap Bug](https://github.com/ollama/ollama/issues/18131)

---

### **6. What This Means for Application Developers**  
- **Agent Workflows**: Use `OLLAMA_NUM_PARALLEL` and `miMo-v2.6` to build low-latency, multi-step agents with vision and decision-making capabilities.
- **Streaming Reliability**: Expect consistent `AuthorizationError` propagation in `Client.stream()` after PR #19491 merges — critical for secure, stateful apps.
- **Tooling & Automation**: Leverage new `/api/tokenize` and `--json` flags in `list`/`ps` commands (PR #17349) to integrate Ollama into CI/CD, monitoring, and RAG pipelines.
- **Avoid Pitfalls**: Do not rely on `num_return_sequences` or `temperature=0` alone for deterministic output — use fixed `seed` + `top_p=1` + `repetition_penalty=1.0` (Issue #5738).
- **Build Systems**: On Windows, use `cmake -G Ninja` only if you're building from source — avoid `CMakeLists.txt` issues (PR #19496).

> 🔗 [Developer Guide](https://docs.ollama.ai) | 🔗 [API Reference](https://github.com/ollama/ollama/blob/main/docs/api.md)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-04**

---

### **1. Today's Highlights**  
The latest release candidate `v1.109.0-rc.1` introduces enhanced security via cosign-signed Docker images and key improvements in proxy stability, including fixes for Redis circuit breaker behavior and timezone handling (`Asia/Calcutta`) during startup. Notably, new PRs enable per-request callback configuration and soft budget alerts for internal users—critical for multi-tenant cost governance.

---

### **2. Releases & Breaking Changes**  
- **v1.109.0-rc.1**: First release candidate with full cosign signature verification; image integrity confirmed via [commit `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).  
- **Breaking Change (Pending)**: The legacy `AccountingDelivery` table will be removed in favor of the new `SpendLogsDelivery` system ([PR #49856](https://github.com/BerriAI/litellm/pull/49856)), requiring schema migration for users relying on historical accounting data.  
- **New Feature**: Virtual keys can now reference `callback_settings` definitions resolved at request time via environment secrets ([PR #49995](https://github.com/BerriAI/litellm/pull/49995)).

---

### **3. New Model & Hardware Support**  
- **Cloudflare Workers AI**: Experimental support for **image and audio generation** via Cloudflare’s Workers AI endpoints is being tracked in closed issues (#35055, #35056), though not yet merged.  
- **Bedrock Converse Claude**: Improved handling of `output_config.effort` in `/v1/messages` calls without thinking blocks ([PR #49990](https://github.com/BerriAI/litellm/pull/49990)).  
- **Google GenAI**: Proxy client headers are now properly forwarded in `generate_content` and `streamGenerateContent` routes ([PR #49972](https://github.com/BerriAI/litellm/pull/49972)).

---

### **4. Performance & Optimization**  
- **Text-to-Speech Streaming**: Real-time audio streaming from providers like ElevenLabs is now supported — long clips begin playback after ~0.65 seconds instead of waiting for full generation ([PR #46222](https://github.com/BerriAI/litellm/pull/46222)).  
- **Proxy Efficiency**: UI text extraction into i18n files ([PRs #49991, #49994, #49992](https://github.com/BerriAI/litellm/pulls?utf8=%E2%9C%93&q=is%3Aopen+author%3Ayuneng-berri)) reduces frontend bundle size and improves future localization speed.  
- **Build Optimization**: Pre-built UI artifacts are now reused in Docker builds, cutting CI pipeline time by up to 40% ([PR #29092](https://github.com/BerriAI/litellm/pull/29092)).

---

### **5. Stability & Regressions**  
- **Critical**: Redis circuit breaker remains in `HALF_OPEN` state indefinitely after failover if probe fails with non-connectivity errors (e.g., `READONLY`) — affects high-availability deployments ([Issue #49884](https://github.com/BerriAI/litellm/issues/49884)).  
- **High Severity**: Timezone misconfiguration (`Asia/Calcutta`) causes proxy startup failure due to missing `tzdata-legacy` package — common on Ubuntu 24.04/26.04 ([Issue #49813](https://github.com/BerriAI/litellm/issues/49813)).  
- **Moderate**: OpenAI `403` responses raise `APIError` instead of `PermissionDeniedError`, breaking expected SDK error hierarchy ([Issue #49936](https://github.com/BerriAI/litellm/issues/49936)).  
- **Fixes in Progress**: Multiple fixes for model-specific bugs (e.g., Mistral dropping `tool_choice`, Gemini ignoring early system messages) are under review ([Issues #39736](https://github.com/BerriAI/litellm/issues/39736), [#48813](https://github.com/BerriAI/litellm/issues/48813)).

---

### **6. What This Means for Application Developers**  
- **Enhanced Observability & Governance**: Use `soft_budget` and per-request callbacks to implement fine-grained cost alerting and logging across teams/users — ideal for SaaS or agent platforms.  
- **Future-Proofing APIs**: Expect stricter type enforcement and error handling — e.g., `PermissionDeniedError` alignment with OpenAI SDK will improve error consistency.  
- **Avoid Pitfalls**: Avoid `Asia/Calcutta` in production environments until `tzdata-legacy` is installed; use `UTC` or `Asia/Kolkata` instead.  
- **Agent Workflows**: The upcoming `complexity_router` improvements and `fusion_model` feature request ([#35781](https://github.com/BerriAI/litellm/issues/35781)) signal growing support for advanced Mixture-of-Experts patterns in routing.

---  
*For real-time updates, follow [LiteLLM GitHub Issues](https://github.com/BerriAI/litellm/issues) and [PRs](https://github.com/BerriAI/litellm/pulls).*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-11-04**

---

#### **1. Today's Highlights**  
The v0.1.914-beta release introduces the highly requested *Glass Theme* and enhanced customization for UI backgrounds, greetings, and chat interfaces, alongside significant performance gains in generation speed and expanded multi-GPU training support—including experimental CPU training. Meanwhile, core development accelerates with multiple high-impact PRs focused on CUDA graph optimization, FP8 LoRA support, and real-time inference visibility in Studio.

---

#### **2. Releases & Breaking Changes**  
- **v0.1.914-beta** (GitHub: [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.914-beta))  
  - Added: Glass theme, personalized UI elements (backgrounds, greetings), faster generation pipeline.  
  - Expanded: Multi-GPU training support, initial CPU training via `unsloth` CLI.  
  - Note: Update issues reported (e.g., #16573, #16561) indicate potential incomplete AppImage or desktop installer handling—users should verify update success manually.

---

#### **3. New Model & Hardware Support**  
- **New Backends**: Experimental support for **CPU training** via `unsloth` CLI (reported in v0.1.914-beta).  
- **GPU Support**:  
  - AMD ROCm now receives test parity improvements via #16609 (NVIDIA-host spoofing fix).  
  - Vulkan support remains limited—#16395 reports failure on RX 5700 XT under Windows 10 22H2; no resolution yet.  
- **Model Formats**:  
  - FP8 LoRA enabled for frozen 16-bit base models (#16423).  
  - Qwen3-MoE, Mistral 3, Granite, Cohere 2, GLM-4, OLMo 2 added to CUDA graph decoding scope (#16587).

---

#### **4. Performance & Optimization**  
- **CUDA Graphs**: Decoding now applies CUDA graphs to *all FastModel variants* (Gemma 3, Qwen3-VL, Llama 4, Mistral 3, Phi-4, etc.), yielding **3–7x speedup on T4** with bitwise identical results to eager mode (#16587).  
- **LoRA Optimization**:  
  - FP8 forward + input gradient support for LoRA over 16-bit base layers (#16423).  
  - Folding 16-bit LoRA into base weights during long generate calls improves decode speed by **1.3–1.4x** (#16576).  
- **Memory & I/O**:  
  - Reduced redundant DB connections in RAG sync: one `rag.db` per thread (#16607).  
  - `adapter_config.json` read once per inference worker load (#16604), reducing overhead.

---

#### **5. Stability & Regressions**  
- **Critical UI Lag**: Long conversations cause noticeable UI lag (desktop + web); regression confirmed in #16603. No fix PR yet.  
- **Silent Failures**:  
  - Model loading silently cancels running chats without warning (#16479).  
  - `search_conversation` tool disappeared (2nd occurrence; #16602).  
- **Update & Launch Issues**:  
  - AppImage fails to start on Slackware64-current due to GLib/AppIndicator symbol lookup error (#16605).  
  - Desktop update fails on macOS (Apple MLX) and Windows (AppImage) due to incomplete download or unpacking (#16573, #16561).  
- **Fixes in Progress**:  
  - #16587 (CUDA graphs) and #16576 (LoRA folding) are stable and merged—no regressions reported.  
  - #16609 (ROCm test fix) is test-only; not a runtime regression.

---

#### **6. What This Means for Application Developers**  
- **Build Faster Agents**: Leverage CUDA graphs across all major models (Llama 4, Qwen3, Mistral 3) for up to **7x faster inference**—ideal for low-latency agent workflows.  
- **Optimize LoRA Workloads**: Use FP8 LoRA for reduced memory footprint and faster forward passes; fold LoRA weights at runtime for longer generations.  
- **Handle State Carefully**: Be aware of silent model unloading during chat sessions—always check `force_cancel_active` before switching models.  
- **Future-Proof Configurations**: Monitor changes to `chat_template_kwargs` filtering (only `enable_thinking`, `reasoning_effort`, `preserve_thinking` preserved; #16545) when building custom agents.  
- **UI/UX Caution**: Avoid long-running conversations if using unsloth-studio in production; expect UI lag until #16603 is resolved.

> 🔗 **Key Links**:  
> - [v0.1.914-beta Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.914-beta)  
> - [CUDA Graphs PR #16587](https://github.com/unslothai/unsloth/pull/16587)  
> - [FP8 LoRA PR #16423](https://github.com/unslothai/unsloth/pull/16423)  
> - [LoRA Folding PR #16576](https://github.com/unslothai/unsloth/pull/16576)  
> - [UI Lag Issue #16603](https://github.com/unslothai/unsloth/issues/16603)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*