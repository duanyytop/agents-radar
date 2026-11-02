# AI Infrastructure Digest 2026-11-02

> Generated: 2026-11-02 01:46 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-02**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in late 2026 is defined by a rapid convergence of hardware acceleration (especially NVIDIA Blackwell SM120 and AMD MI355X), distributed serving demands, and the rise of agent-centric workloads. Projects are increasingly focused on performance at scale—driven by speculative decoding, multi-node coordination, and low-latency streaming—while also grappling with stability issues stemming from new backends and complex model architectures. The shift toward Rust-based routing and kernel-level optimizations signals a maturation phase where reliability and observability are becoming as critical as raw throughput.

---

### **2. Activity Comparison**

| Project       | Open Issues (High/Crit) | PRs (Last 24h) | Releases | Key Stability Risk |
|---------------|--------------------------|----------------|----------|--------------------|
| **vLLM**      | 4 (2 High, 2 Medium)     | 8              | None     | SM120 decode regression (#56892), KV cache corruption |
| **SGLang**    | 5 (3 Critical, 2 High)   | 7              | None     | CUDA coredumps (#26340), fa4 attention crash (#42012) |
| **llama.cpp** | 4 (2 High, 2 Medium)     | 5              | Build b12032 | MoE OOB read (#27792), SYCL multi-GPU slowdown |
| **Ollama**    | 5 (2 High, 3 Medium)     | 4              | None     | Qwen3.8 GGUF load failure (#19459), structured output bug |
| **LiteLLM**   | 5 (2 Critical, 2 High, 1 Medium) | 6       | None     | Cost overbilling (#48398), JSON-RPC ID stripping (#49479) |
| **Unsloth**   | 6 (1 High, 5 Medium/Low) | 5              | None     | GPU memory not released (#16436), model loading timeouts |

> *Note: SGLang and LiteLLM lead in critical stability risks; vLLM shows strong engineering velocity with targeted kernel fixes.*

---

### **3. Model Support Race**

| New Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash** | ✅ (SM120 validated) | ⚠️ Active tuning | ❌ No support | ❌ Fails to load | ❌ Not listed | ❌ Not listed |
| **MiniMax-M3.1-Flash** | ✅ (ROCm + SM120) | ✅ (AMD gfx950, full support) | ❌ No support | ❌ Not listed | ❌ Not listed | ❌ Not listed |
| **GLM-5.3-Flash** | ✅ (ROCm optimized) | ✅ (SM120/AMD) | ✅ (test suite) | ❌ Not listed | ❌ Not listed | ❌ Not listed |
| **DiffusionGemma-26B-A4B** | ⚠️ Concurrent decode crash | ❌ Not supported | ❌ Not supported | ❌ Not supported | ❌ Not supported | ❌ Not supported |
| **Qwen3.8-27B (GGUF)** | ❌ Not reported | ❌ Not reported | ❌ Not reported | 🔴 Fail to load | ❌ Not listed | ❌ Not listed |
| **Gemini API Models** | ❌ Not listed | ❌ Not listed | ❌ Not listed | ❌ Not listed | ❌ Not listed | ✅ Full discovery via `nextPageToken` |

> **Winner**: **SGLang** leads in cross-platform model coverage, especially for advanced models like MiniMax-M3.1 and GLM-5.3 across SM120 and ROCm. **Unsloth** stands out in ecosystem integration (Gemini API access), while **vLLM** dominates in performance validation for flagship models on Blackwell.

---

### **4. Performance Frontier**

| Optimization Focus             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache & Offloading**       | ✅✅ (scoped invalidation, store pub) | ⚠️ (scheduler stress under high load) | ❌ | ⚠️ (prompt cache budgeting) | ❌ | ❌ |
| **Batching & Parallelism**       | ✅ (P/D disaggregation, mHC overlap tuning) | ✅ (DSA path, row-split DCP) | ✅ (dflash, device copies) | ⚠️ (dynamic prompt caching) | ❌ | ✅ (UNSLOTH_PARALLEL env) |
| **Quantization & FP8 GEMMs**     | ✅ (MXFP8 → cuBLASLt, NVFP4 bias fusion) | ✅ (RMSNorm JIT, fused QK+RoPE) | ✅ (IQ3_S, LRFU/MQ MoE cache) | ❌ | ❌ | ✅ (FP8 LoRA training) |
| **Distributed Serving & Routing**| ✅ (NixlPushMode, MoRI-IO) | ✅ (multi-node HTTP, X-Data-Parallel-Rank) | ❌ | ❌ | ✅ (Rust router core, Redis-backed state) | ❌ |
| **Kernel-Level Tuning**         | ✅ (epilogue fusion, cuBLASLt routing) | ✅ (JIT templates, fused kernels) | ✅ (SWIGLU_CLAMP, Maple TQ) | ❌ | ✅ (Rust Redis clients) | ❌ |

> **Frontier Leaders**:  
> - **vLLM**: Kernel-level optimization depth (NVFP4/MXFP8).  
> - **SGLang**: Distributed inference readiness (DSA, IPC).  
> - **Unsloth**: Emerging efficiency in fine-tuning (FP8 LoRA).  
> - **LiteLLM**: Architectural leap with Rust router and Redis state layer.

---

### **5. Layer Positioning**

| Project       | Primary Layer                          | Secondary Role                             | Key Differentiator |
|---------------|----------------------------------------|--------------------------------------------|--------------------|
| **vLLM**      | **Inference Engine** (GPU-accelerated) | Model serving, P/D disaggregation          | Benchmark leader on Blackwell; deep kernel control |
| **SGLang**    | **Agent-First Inference Runtime**      | dLLM, HiCache, multi-node HTTP frontend   | Built for long-context agents; active disaggregation roadmap |
| **llama.cpp** | **Local Runtime / Cross-Backend**      | Edge inference, GGUF execution             | Broadest hardware support (Vulkan, SYCL, Intel Arc, Adreno) |
| **Ollama**    | **Local LLM Gateway & CLI**            | Multi-model server, RAG tooling integrations | Developer-friendly UX; growing modelfile ecosystem |
| **LiteLLM**   | **LLM Gateway & Proxy**                | Cost tracking, provider routing, observability | Dual-core Rust/Python transition; cost integrity focus |
| **Unsloth**   | **Fine-Tuning & Studio Environment**   | Multimodal UI, model management            | Rich text editing, MLX preview, virtual environment isolation |

> **Strategic Clustering**:  
> - **Engine Layer**: vLLM, SGLang  
> - **Runtime Layer**: llama.cpp  
> - **Gateway/Proxy Layer**: LiteLLM, Ollama  
> - **Studio/Fine-Tuning Layer**: Unsloth

---

### **6. Trend Signals**

#### 🔍 **Key Industry Trends Extracted from Today’s Activity**:
1. **Hardware-Driven Convergence**: SM120 (Blackwell) and MI355X are now primary targets—projects are optimizing kernel paths (e.g., MXFP8 → cuBLASLt), attention backends, and offload strategies.
2. **Agent-Centric Infrastructure Emergence**: SGLang and vLLM are actively building **disaggregated inference** (P/D split, MoRI-IO), **speculative decoding**, and **long-context streaming**—critical for agentic systems.
3. **Rust Migration Accelerating**: LiteLLM’s **Rust router core**, vLLM’s experimental Rust frontend, and unsloth’s improved parallelism all point to a broader industry shift toward **performance-isolated, memory-safe components**.
4. **Cost & Observability as First-Class Concerns**: LiteLLM’s critical cost overbilling issue (#48398) and Ollama’s new per-model prompt cache budgets signal that **inference economics** are no longer an afterthought.
5. **Stability Over Novelty**: Despite strong innovation, **high-severity regressions** dominate headlines—especially around CUDA, ROCm, and speculative decoding—indicating that **production readiness** is now a bottleneck, not just performance.

#### 📌 **What Application Developers Should Watch**:
- **Avoid production deployment** on SM120 with SGLang (`fa4`) or vLLM’s `--enforce-eager` until stability fixes land.
- **Prioritize Rust-based deployments** when scaling beyond 100 RPM—LiteLLM and vLLM are paving the way.
- **Implement defensive cost controls**—never trust provider-reported `cost` fields without validation.
- **Prepare for rich media payloads**—Unsloth’s text/video/audio improvements and SGLang’s dLLM roadmap imply future apps will handle complex inputs/outputs natively.
- **Leverage model-specific tuning**—use `--kernel-config` in vLLM, `prompt_cache` in Ollama, and `UNSLOTH_PARALLEL` in Unsloth for maximum efficiency.

---

> ✅ **Final Takeaway**: The AI infrastructure stack is evolving from *raw speed* to *resilient, observable, and agent-ready* systems. The next wave of innovation will be less about peak throughput—and more about **trust, scalability, and composability**.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# **vLLM Digest – 2026-11-02**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate its support for NVIDIA Blackwell (SM120) and ROCm platforms, with critical performance fixes and new optimizations targeting DeepSeek-V4.1-Flash and MiniMax-M3.1. A major focus is on stabilizing distributed inference workflows—particularly P/D disaggregation via NixlPushMode and MoRI-IO—while addressing persistent memory corruption and kernel compatibility issues across multiple backends.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were introduced. The `VLLM_USE_RUST_FRONTEND=1` experimental flag remains unchanged, but ongoing efforts (Issue #44280) aim to close feature parity gaps between Rust and Python frontends.

> 🔗 [Rust Frontend Roadmap](https://github.com/vllm-project/vllm/issues/44280)

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1-Flash**: Full end-to-end validation confirmed on **8x RTX PRO 6000 Blackwell (SM120)**, with detailed field reports (Issue #56700) and targeted perf tuning (PRs #63837, #64815).  
- **MiniMax-M3.1-Flash**: ROCm-specific optimizations landed (PR #65032, #62509), including parallel top-k decode and MXFP8 tile tuning for MI355X.  
- **GLM-5.3-Flash**: ROCm support improved via reduced CPU-GPU sync in chunk indexing (PR #63072) and optimized sparse indexer (PR #63910).  
- **DiffusionGemma-26B-A4B**: Now supported under concurrent decode (though a crash persists due to tensor shape mismatch; Issue #58035).

> 🔗 [DeepSeek-V4.1 SM120 Field Report](https://github.com/vllm-project/vllm/issues/56700)  
> 🔗 [MiniMax-M3.1 ROCm Perf PRs](https://github.com/vllm-project/vllm/pulls?query=ROCm+MiniMax-M3.1)

---

### **4. Performance & Optimization**  
- **SM120 NVFP4 GEMM**: Bias addition now fused into epilogue (PR #61821), eliminating separate kernel overhead—critical for large prefills in Qwen2-style models.  
- **MXFP8 GEMMs**: Large inputs (>8192 rows) routed to cuBLASLt instead of FlashInfer CuTe-DSL (PR #64815), yielding measurable speedups on Blackwell.  
- **Fused All-Reduce + mHC Token Cap**: Made configurable via `--kernel-config '{"mhc_overlap_max_tokens": N}'` (PR #63837), enabling fine-grained tuning for DSV4.1 workloads.  
- **KV Cache Offloading**: Improved reliability via scoped invalidation events (PR #62394) and successful store publication (PR #64444), reducing stale state risks in multi-node setups.

> 🔗 [NVFP4 Bias Fusion](https://github.com/vllm-project/vllm/pull/61821)  
> 🔗 [cuBLASLt for MXFP8](https://github.com/vllm-project/vllm/pull/64815)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| ⚠️ High | [#65034](https://github.com/vllm-project/vllm/issues/65034) | Quark `exclude` entries silently ignored in MTP speculative decoding | ✅ *Open* — blocks correct spec-decoding behavior |
| ⚠️ High | [#58035](https://github.com/vllm-project/vllm/issues/58035) | DiffusionGemma crashes during concurrent decode due to shape mismatch | ✅ *Open* — affects all versions using NVFP4/bf16 checkpoints |
| ⚠️ Medium | [#44280](https://github.com/vllm-project/vllm/issues/44280) | Rust frontend lacks feature parity with Python API | ✅ *Open* — impacts production adoption |
| ⚠️ Medium | [#56892](https://github.com/vllm-project/vllm/issues/56892) | Extremely low decode throughput on SM120 with `--enforce-eager`; CUDA graphs unusable | ✅ *Open* — high priority for Blackwell users |

> 🔗 [Critical SM120 Decode Throughput Bug](https://github.com/vllm-project/vllm/issues/56892)

---

### **6. What This Means for Application Developers**  
- **For Agentic & RLHF Workloads**: Use `--kernel-config` to tune mHC overlap limits (PR #63837) and monitor KV cache corruption risks under rapid LoRA switching (Issue #38606).  
- **For Disaggregated Deployments**: Prioritize testing with `NixlPushModeConnector` (Issue #48633) and MoRI-IO (Issue #59116); ensure engine ID synchronization across PCP ranks (PR #62916).  
- **For Realtime Streaming**: Avoid `num_output_placeholders` underflow by upgrading to latest vLLM (Issue #35755). Consider opt-in request logging (Issue #64654) for cross-component tracing without exposing payloads.  
- **For Multi-Backend Users**: Expect increased stability on ROCm (MiniMax-M3.1, GLM-5.3) and Blackwell (DSV4.1), but verify model-specific behaviors (e.g., DiffusionGemma) before production use.

> 🔗 [Developer Guidance: Request Logging](https://github.com/vllm-project/vllm/issues/64654)  
> 🔗 [Disaggregation Best Practices](https://github.com/vllm-project/vllm/issues/59116)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-02**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to mature with a strong focus on **stability and performance on next-gen hardware**, particularly SM120 (Blackwell) GPUs. Critical issues around CUDA coredumps, attention backend crashes (fa4), and speculative decoding correctness are actively being addressed. Meanwhile, significant progress is underway on **dLLM serving roadmap**, **HiCache IPC data plane**, and **multi-node HTTP frontend support**, signaling deeper infrastructure readiness for production-scale agent workloads.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable version remains `v0.5.20` (`lmsysorg/sglang:v0.5.20`), with ongoing development concentrated in `main`.

---

### **3. New Model & Hardware Support**  
- **SM120 (RTX PRO 6000 Blackwell)**: Active support and debugging for GLM-5.3-Flash and DeepSeek-V4.1-Flash models; several PRs target kernel optimizations and backend compatibility.
- **AMD MI350X / MI355X**: PR #46693 adds full support for MiniMax-M3.1-Flash via AMD backend (`gfx950`) with attention, MoE, and quick all-reduce kernels merged.
- **Intel XPU**: RFC #46520 proposes paged-experts with Lookahead Expert Scheduling (LES) and SSD tiering for single-GPU MoE offload — foundational for future XPU integration.
- **Ascend NPU**: Documentation improvements (PR #36090) and accuracy test additions (PR #47611) enhance deployment clarity and validation coverage.

---

### **4. Performance & Optimization**  
- **DeepSeek-V4-Flash Prefill**: Reported throughput of ~2–7K tok/s on 4× RTX PRO 6000 (SM120, TP=4) lags behind vLLM/Marlin’s ~12.5K tok/s (Issue #33422). Investigation into tuning gaps and kernel optimization is ongoing.
- **Kernel-Level Optimizations**:
  - PR #47785: Fuses QK norm + RoPE with contiguous Q for Qwen3 → reduces kernel launch overhead.
  - PR #47503: Introduces one SM100-tuned JIT template for RMSNorm across plain/fused-add/FP8 quant paths → improves consistency and performance.
  - PR #47309: Row-splits DCP indexer and pipelines a2a on AMD → targets reduced decode latency in DSA path.
- **Memory Efficiency**:
  - PR #47680: Skips Mamba checkpoint donation when slots exhausted → prevents scheduler termination under high load (fixes #43204).
  - PR #47813: Forces decode DCP over non-fp8 KV cache to use Gluon instead of asm kernel → avoids type mismatch errors.

---

### **5. Stability & Regressions**  
High-severity stability issues dominate recent activity:

| Issue | Severity | Status | Fix PR? | Link |
|------|----------|--------|---------|------|
| [CUDA Coredump Tracker](https://github.com/sgl-project/sglang/issues/26340) | Critical | Open | No | [#26340](https://github.com/sgl-project/sglang/issues/26340) |
| [fa4 Attention Crash on SM120 (hybrid extend)](https://github.com/sgl-project/sglang/issues/42012) | Critical | Open | No | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| [Scheduler crash on None multimodal offsets](https://github.com/sgl-project/sglang/issues/47218) | High | Open | No | [#47218](https://github.com/sgl-project/sglang/issues/47218) |
| [DSV4.1 Flash + DSPARK: OOM from CUDA allocator](https://github.com/sgl-project/sglang/issues/43486) | High | Open | No | [#43486](https://github.com/sgl-project/sglang/issues/43486) |
| [Unstable FullTopK index order in C1/C2 decode](https://github.com/sgl-project/sglang/issues/46798) | Medium | Open | No | [#46798](https://github.com/sgl-project/sglang/issues/46798) |

> ⚠️ These represent **critical blockers for production deployment** on Blackwell and advanced inference patterns (speculative decoding, multi-modal, high-concurrency).

---

### **6. What This Means for Application Developers**  
- **Avoid `fa4` backend on SM120** for now — use `triton` as the only stable path until issue #42012 is resolved.
- **Be cautious with concurrent streams and multimodal models** — unexpected scheduler crashes may occur if `items_offset_list` becomes `None`.
- **Expect memory pressure under sustained decode loads** even with low KV pool usage (e.g., #43486); consider reducing batch size or enabling `--mem-fraction-static` cautiously.
- **Leverage upcoming dLLM serving features** (RFC #39499) for scalable, efficient block-diffusion inference — expect better throughput and stability for long-context agents.
- **Prepare for multi-node deployments** — global `X-Data-Parallel-Rank` header support (#47657) will enable external routers like `llm-d` to route requests correctly across clusters.

👉 *Recommendation*: Monitor PRs linked above closely, especially those marked `[Fix]` or `[Perf]`, and avoid deploying on SM120 with fa4 or complex streaming workflows until fixes land.

---  
*Digest generated from GitHub data: sgl-project/sglang • 2026-11-02*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-02**

---

### **1. Today's Highlights**  
The latest development focus centers on **multi-backend performance improvements**, particularly for Vulkan, SYCL, and CUDA, with key optimizations to speculative decoding and flash attention. Critical fixes address memory safety (e.g., out-of-bounds reads in MoE kernels) and stability on Intel Arc B70/B60 and Adreno GPUs. Notably, a new `dflash` prefill optimization using device copies promises significant speedups.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, **build `b12032`** introduced a critical fix for LevelZero/SYCL backend linking via PkgConfig (#31076), which may affect builds relying on external LevelZero installations. No API-breaking changes reported.

> 🔗 [GitHub PR #31076](https://github.com/ggml-org/llama.cpp/pull/31076)

---

### **3. New Model & Hardware Support**  
- **Gemma 4** support enabled in test suite (`test-llama-archs`) with GQA configuration (#31401).  
- **NVIDIA Nemotron 3.5 Transcribe** model added to MTMD conversion pipeline (#31471) — supports multilingual offline transcription with speaker attribution.  
- **Intel Arc B60/B70** and **Adreno 830** GPU backends continue to see targeted stability work, especially around Vulkan/Metal driver compatibility.  
- **OpenCL**: Initial IQ3_S quantization support added with AOS/SOA MV and tiled GEMM variants for Adreno (#31338).

> 🔗 [PR #31401](https://github.com/ggml-org/llama.cpp/pull/31401) | [PR #31338](https://github.com/ggml-org/llama.cpp/pull/31338) | [PR #31471](https://github.com/ggml-org/llama.cpp/pull/31471)

---

### **4. Performance & Optimization**  
- **DFlash prefill acceleration**: New `dflash: copy hidden features via device copies` PR (#31506) reduces prefill latency by avoiding host-device roundtrips; decode throughput also improves slightly.  
- **MoE cache hybrid LRFU/MQ**: PR #31233 introduces a smarter expert caching strategy that reduces uploads by 8% and boosts decode speed by +6–7% on QFN/GLM models.  
- **CUDA Flash Attention**: PR #29510 enables `flash_attn_ext_rows` for unified KV-cache optimization across sequences, improving multi-sequence inference efficiency.  
- **Kernel-level improvements**:  
  - CUDA SWIGLU_CLAMP kernel implemented and tested (#31517)  
  - Maple TQ1_0/TQ2_0 CUDA kernels added for preview support (#31512)  
  - Volta crash fix for FA tests (#31518)

> 🔗 [PR #31506](https://github.com/ggml-org/llama.cpp/pull/31506) | [PR #31233](https://github.com/ggml-org/llama.cpp/pull/31233) | [PR #29510](https://github.com/ggml-org/llama.cpp/pull/29510) | [PR #31517](https://github.com/ggml-org/llama.cpp/pull/31517)

---

### **5. Stability & Regressions**  
High-severity issues reported today include:  
- **SYCL Multi-GPU Regression**: On Intel Arc B60/B70, `--cpu-moe` + `--split-mode layer` causes 100–1000× slowdowns during prefill (#31510). *No fix yet.*  
- **Vulkan Memory Leak / Device Lost**: Repeated crashes on AMD RADV/Vulkan with `--spec-type draft-mtp` due to improper queue submission after prompt processing (#27306).  
- **CUDA PTX Toolchain Incompatibility**: Builds `11176`, `11243`, `12030` fail on Tesla T4 (sm_75); only `12004` works reliably (#31503).  
- **Out-of-Bounds Read in MoE Kernel**: `ggml_cuda_mmq_get_J_max` returns 0 for MoE paths, causing illegal memory access (#27792). *Fix pending.*  

> 🔗 [Issue #31510](https://github.com/ggml-org/llama.cpp/issues/31510) | [Issue #27306](https://github.com/ggml-org/llama.cpp/issues/27306) | [Issue #31503](https://github.com/ggml-org/llama.cpp/issues/31503) | [Issue #27792](https://github.com/ggml-org/llama.cpp/issues/27792)

---

### **6. What This Means for Application Developers**  
- **Use `dflash` with caution**: While it offers faster prefill, ensure your backend (especially HIP/Vulkan) handles device-to-device transfers correctly. Monitor for regression in prompt throughput.  
- **Avoid `--cpu-moe` on multi-GPU SYCL setups** until #31510 is resolved — performance will be unusable.  
- **For production deployment on Intel Arc**: Prefer build `b12004` or earlier if targeting sm_75/Tesla T4; avoid recent `server-cuda13` images.  
- **Enable MoE caching with `moe-cache`**: The new LRFU/MQ hybrid cache can improve decode performance by up to 7% with minimal overhead.  
- **Validate GGUF metadata output**: Avoid terminal escape injection via `gguf-dump` by sanitizing input files or using safe rendering tools.

> 📌 Pro Tip: Use `--flash-attn off` as a workaround for known Vulkan/FA regressions until #31505 and #29039 are addressed.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

---

### **1. Today's Highlights**  
Ollama continues to strengthen its support for advanced reasoning and multimodal workflows, with critical fixes for Qwen3.8-27B GGUF loading failures and LLM-jp-4’s harmony tokenization quirks. Notably, the `api: add per-model prompt cache budgets` PR introduces granular control over caching—essential for multi-model server environments. Meanwhile, a new proposal for opt-in token metrics logging signals growing focus on observability in inference pipelines.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes were published in the last 24 hours.*  
However, several impactful PRs are nearing merge:  
- **[PR #19450](https://github.com/ollama/ollama/pull/19450)**: Introduces `prompt_cache` as a per-request runner option (supports `0`, `-1`, and MiB values), enabling dynamic memory allocation across models sharing a server. This will allow fine-grained tuning of prompt caching behavior.  
- **[PR #19445](https://github.com/ollama/ollama/pull/19445)**: Clarifies `keep_alive` duration syntax in API docs—now explicitly supports `"10m"`, integers (seconds), and `-1` for indefinite loading. Improves clarity for long-running model sessions.

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-27B hybrid-attention GGUFs**: Identified as failing to load due to missing `attn_qkv/attn_gate` projections at layer 64 ([Issue #19459](https://github.com/ollama/ollama/issues/19459)). This indicates potential incompatibility between Ollama’s current parser and newer MTP (Multi-Token Prediction) architectures.  
- **LLM-jp-4.1 (8b/32b/33b)**: Requires explicit handling of space-after-special-token parsing; currently breaks output formatting due to GPT-OSS harmony format misalignment ([Issue #18728](https://github.com/ollama/ollama/issues/18728)).  
- **Alysis Code & Cognito**: New integrations added to community tools list ([PR #19454](https://github.com/ollama/ollama/pull/19454), [PR #19448](https://github.com/ollama/ollama/pull/19448)), expanding use cases for local RAG and coding agents.

---

### **4. Performance & Optimization**  
- **Prompt Cache Granularity**: The upcoming `prompt_cache` per-model budgeting feature ([PR #19450](https://github.com/ollama/ollama/pull/19450)) enables efficient resource sharing in multi-model deployments—critical for reducing redundant computation and improving throughput under high concurrency.  
- **Token Repeat Prevention**: Added in MLX runner via [PR #19422](https://github.com/ollama/ollama/pull/19422), which aborts generation after 101 repeated tokens—preventing infinite loops and freeing up GPU/CPU resources.  
- **Scheduler Eviction Improvements**: [PR #19449](https://github.com/ollama/ollama/pull/19449) enhances scheduler logic by using predicted memory and GPU placement to select runners, improving fit accuracy and reducing eviction thrashing.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🔴 High | [Qwen3.8-27B GGUF fails to load](https://github.com/ollama/ollama/issues/19459) | Model crashes during initialization; blocks usage of large hybrid-attention Qwen variants | ❌ No fix yet — architecture mismatch suspected |
| 🔴 High | [Gemma3:4b returns empty JSON](https://github.com/ollama/ollama/issues/19427) | Structured output fails silently on long prompts; breaks agent pipelines | ✅ Closed — likely patch imminent |
| 🟡 Medium | [Qwen models terminate chat on `</thinking>`](https://github.com/ollama/ollama/issues/19424) | Premature session termination during reasoning steps | ✅ Fixed in PR #19456 |
| 🟡 Medium | [Long replies degrade deepseek-r1/phi3.5 performance](https://github.com/ollama/ollama/issues/19457) | Context shift causes persistent degradation until model reload | ⚠️ Reported; no fix PR yet |
| 🟡 Medium | [Windows ARM64 Gemma3 vision times out](https://github.com/ollama/ollama/issues/19444) | CPU-based image processing hangs indefinitely | ⚠️ Unresolved; may relate to thread blocking |

---

### **6. What This Means for Application Developers**  
- **Enable per-model prompt caching** once merged ([PR #19450](https://github.com/ollama/ollama/pull/19450)) to optimize latency and memory usage when running multiple models on shared hardware.  
- **Avoid relying on structured outputs with Gemma3:4b** until confirmed fixed—consider fallback strategies or schema validation layers.  
- **Handle Qwen3.8-27B GGUFs cautiously**; verify compatibility before deployment, especially in production inference servers. Use `--modelfile` overrides if needed.  
- **Implement token metric tracking** via [proposal #19455](https://github.com/ollama/ollama/issues/19455) to monitor real-time inference efficiency—key for cost modeling and SLA compliance.  
- **Update tool parsers** to handle malformed function names in arguments ([Issue #19425](https://github.com/ollama/ollama/issues/19425)); consider validating input schemas upstream.  

> 💡 *Pro Tip:* Use `ollama run --think` with LLM-jp-4 only after defining a custom Modelfile to avoid parsing errors ([PR #19440](https://github.com/ollama/ollama/pull/19440)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **1. Today's Highlights**  
The LiteLLM project is making significant strides in its dual-core architecture transition, with multiple PRs landing to stabilize the Rust-based router and gateway components. Critical fixes address JSON-RPC 2.0 compatibility (Issue #49479), cost overbilling risks due to unvalidated provider-reported costs (Issue #48398), and a high-severity bug where `pass_through_endpoints` strips the `id` field from JSON-RPC requests—breaking downstream clients. These updates signal growing maturity in LiteLLM’s proxy and routing layer.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
However, two critical issues highlight potential breaking changes:  
- **Issue #49479**: The `pass_through_endpoints` feature now silently removes `id` from JSON-RPC 2.0 request bodies, which may break client applications expecting valid RPC semantics. A fix is pending. [GitHub Issue](https://github.com/BerriAI/litellm/issues/49479)  
- **Issue #48398**: Provider-reported `usage.cost` is trusted as USD without validation, leading to catastrophic overbilling (up to 1,000,000×). This requires immediate attention for production deployments. [GitHub Issue](https://github.com/BerriAI/litellm/issues/48398)

---

### **3. New Model & Hardware Support**  
*No new models or hardware backends announced today.*  
However, ongoing work continues on model translation parity across providers:  
- **Issue #35645**: DeepSeek’s `output_config.effort` and adaptive thinking are incorrectly mapped to `budget_tokens`, which it ignores. This affects cost modeling and behavior. [GitHub Issue](https://github.com/BerriAI/litellm/issues/35645)  
- **Issue #35663**: Ollama streaming tool calls end with `finish_reason: stop` instead of `tool_calls`, violating OpenAI spec. [GitHub Issue](https://github.com/BerriAI/litellm/issues/35663)  

> ✅ *Note: FAL.ai provider still uses hardcoded model list despite 200+ available models; this limits flexibility.* [GitHub Issue #34619](https://github.com/BerriAI/litellm/issues/34619)

---

### **4. Performance & Optimization**  
*Major architectural progress in performance and scalability:*  
- **PR #49513**: Introduction of the **Rust router core**, with the Python host as its only boundary—eliminating native executor paths and enabling full isolation. This is foundational for future performance gains. [GitHub PR](https://github.com/BerriAI/litellm/pull/49513)  
- **PR #49525 & #49592**: Router cooldowns and usage tracking now run on **Rust-backed Redis stores**, matching existing Python behavior but with lower latency and reduced memory footprint. Enables shared state between Python and Rust pods during rolling deploys. [GitHub PRs](https://github.com/BerriAI/litellm/pulls?query=is%3Aopen+author%3Ayujonglee-berri)  
- **PR #49606 & #49607**: Opt-in **Rust forwarding server** now available for proxies and containerized deployments. Allows offloading public-facing traffic to Rust while preserving Python auth, metrics, and graceful shutdown. [GitHub PRs](https://github.com/BerriAI/litellm/pull/49606)  
- **PR #49510 & #49589**: Rust Redis clients now align with `redis-py` 5.3.1 in command behavior, error classification, and credential rotation (AWS/GCP/Azure), reducing drift and improving reliability. [GitHub PRs](https://github.com/BerriAI/litellm/pull/49510)

---

### **5. Stability & Regressions**  
Top stability concerns today:  
1. **Critical - Cost Overbilling Risk (#48398)**: Unvalidated `provider.usage.cost` values can lead to 1M× billing errors. No fix PR yet. [GitHub Issue](https://github.com/BerriAI/litellm/issues/48398)  
2. **High - JSON-RPC 2.0 Breakage (#49479)**: `id` field stripped from request bodies during pass-through, invalidating JSON-RPC 2.0 semantics. Fix PR expected soon. [GitHub Issue](https://github.com/BerriAI/litellm/issues/49479)  
3. **High - Budget Cap Bypass (#46874)**: Fallback budget checks ignore team-member caps, allowing zero-cost models to exceed budget via paid fallbacks. [GitHub Issue](https://github.com/BerriAI/litellm/issues/46874)  
4. **Medium - Cache Inconsistency (#49313)**: Exact-match cache is not scoped by virtual key/team, causing cross-user response leakage. Fixed in v1.106+. [GitHub Issue](https://github.com/BerriAI/litellm/issues/49313)  
5. **Medium - Image Token Pricing Bug (#48422)**: Images priced at 85 tokens regardless of size when `detail=auto`. [GitHub Issue](https://github.com/BerriAI/litellm/issues/48422)

---

### **6. What This Means for Application Developers**  
- **Adopt caution with cost tracking**: Do not trust provider-reported `cost` fields until #48398 is patched. Implement manual cost validation or use LitLLM’s `cost_per_token` with safe defaults.  
- **Avoid `pass_through_endpoints` for JSON-RPC apps**: Until #49479 is fixed, expect broken RPC calls. Use direct routing or alternative middleware.  
- **Prepare for Rust migration**: The new Rust router and forwarding server (PRs #49513–#49607) offer better performance and scalability. Consider opting into Rust for high-throughput deployments.  
- **Use declarative config management**: With #28168, export proxy state to YAML for reproducible environments—critical for CI/CD and multi-environment ops. [GitHub Issue](https://github.com/BerriAI/litellm/issues/28168)  
- **Watch out for tooling regressions**: Streaming tool calls (Ollama, Fireworks) may misreport `finish_reason`, and MCP tools may fail if client appends suffixes. Validate tool output carefully in agents.

---  
*Digest generated: 2026-11-02 | Source: GitHub @ BerriAI/litellm*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-02**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to expand its support for multimodal and distributed inference workflows, with key improvements in model loading reliability (especially for GGUF MoE models) and UI responsiveness. Critical regressions around isolated installations and GPU memory handling have been addressed, while new features like full rich text editing and RTL language support signal deeper investment in user experience and internationalization.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, two high-severity regression issues were resolved:  
- **#16186 / #16185**: Fixed silent overwrites of baseline virtual environments during `--local` installs via `UNSLOTH_STUDIO_HOME`. This was a critical incident-level bug affecting multi-environment isolation ([PR #16426](https://github.com/unslothai/unsloth/pull/16426), [PR #16430](https://github.com/unslothai/unsloth/pull/16430)).  
- **#16429**: Hidden "MoE Layers on CPU" slider now disabled when GPU layers are set to zero, preventing misleading configuration options ([PR #16429](https://github.com/unslothai/unsloth/pull/16429)).

---

### **3. New Model & Hardware Support**  
- **Gemini API Expansion**: PR #16433 enables discovery of all Gemini chat models by following `nextPageToken`, including new families like `gemini-4-argon` and `gemini-3.8-flash` ([Issue #16432](https://github.com/unslothai/unsloth/issues/16432)).  
- **Vulkan on AMD RX 5700 XT**: A long-standing hardware compatibility issue is being actively investigated ([Issue #16395](https://github.com/unslothai/unsloth/issues/16395)), with PR #16421 adding retry logic on GPU fit failure to improve stability under edge cases.  
- **MLX Backend Preview**: PR #16441 introduces experimental MLX tooling support for speculative decoding, video, grammar constraints, KV quantization, and LoRA replies — marking early progress toward Apple Silicon-native inference acceleration.

---

### **4. Performance & Optimization**  
- **FP8 Training for LoRA**: PR #16423 enables `float8_training=True` on frozen 16-bit base models with LoRA, allowing gradient computation in FP8 while keeping the base model at 16-bit precision — a major step toward efficient fine-tuning on limited hardware ([PR #16423](https://github.com/unslothai/unsloth/pull/16423)).  
- **Memory Efficiency Improvements**: PR #16438 fixes incorrect RSS reporting on macOS by scaling `ru_maxrss` from bytes to mebibytes, improving monitoring accuracy for LTX workers ([PR #16438](https://github.com/unslothai/unsloth/pull/16438)).  
- **Pipeline Parallelism**: PR #16407 introduces unified environment-based parallelism control via `UNSLOTH_PARALLEL`, enabling dynamic combinations of DP/TP/PP/CP across multiple backends — foundational for large-scale training orchestration ([PR #16407](https://github.com/unslothai/unsloth/pull/16407)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |  
|--------|------|--------|-------|  
| Critical | Isolated install (`--local`) silently overwrites venv | Resolved | [#16426](https://github.com/unslothai/unsloth/pull/16426), [#16430](https://github.com/unslothai/unsloth/pull/16430) |  
| High | GPU memory not released during concurrent model load | Open | [#16436](https://github.com/unslothai/unsloth/issues/16436) |  
| Medium | Flickering on Linux (X11 + LXQt) | Resolved | [#16186](https://github.com/unslothai/unsloth/issues/16186) |  
| Medium | Spell check broken on Linux desktop | Resolved | [#16184](https://github.com/unslothai/unsloth/issues/16184) |  
| Low | “MoE Layers on CPU” visible even when GPU=0 | Resolved | [#16429](https://github.com/unslothai/unsloth/pull/16429) |  

> *Note: Several issues remain open related to model loading timeouts (e.g., #16267), stream interruptions (e.g., #16317), and audio/video attachment handling (e.g., #16248), indicating ongoing work in runtime stability.*

---

### **6. What This Means for Application Developers**  
- **Build robust, multi-environment tools**: Use `UNSLOTH_STUDIO_HOME` safely — the fix ensures true isolation, enabling developers to manage multiple model configurations without interference.  
- **Leverage emerging FP8 + LoRA workflows**: With PR #16423, you can now train LoRAs efficiently using FP8 gradients on 16-bit bases — ideal for low-memory fine-tuning pipelines.  
- **Prepare for richer input/output handling**: The rollout of full rich text composer (#16396) and improved video/audio support means future apps should expect richer media payloads and better formatting fidelity.  
- **Design for distributed inference**: The `UNSLOTH_PARALLEL` environment variable (PR #16407) allows declarative control over pipeline, tensor, and data parallelism — essential for scalable agent systems.  
- **Monitor memory carefully**: Be aware of GPU memory release errors during model switching; avoid loading new models mid-generation until #16436 is resolved.

> 🔗 *Track active development:* [GitHub Issues](https://github.com/unslothai/unsloth/issues), [Pull Requests](https://github.com/unslothai/unsloth/pulls)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*