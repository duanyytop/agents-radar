# AI Infrastructure Digest 2026-11-14

> Generated: 2026-11-14 02:39 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-14**

---

### **1. Ecosystem Overview**

The AI inference and serving landscape in late 2026 is characterized by rapid convergence between high-performance engines, cross-platform runtime support, and agent-native orchestration. Projects are no longer siloed—vLLM and SGLang are pushing hardware-specific optimizations for Blackwell (SM120) and ROCm, while Ollama and LiteLLM are deepening integration with local agents and cloud gateways. The emergence of Rust-based performance layers (LiteLLM), unified quantization backends (vLLM’s Humming RFC), and model export tooling (Unsloth) signals a maturing ecosystem where efficiency, portability, and developer experience are equally prioritized. This is not just about speed—it's about building *reliable, scalable, and secure* inference stacks across heterogeneous hardware.

---

### **2. Activity Comparison**

| Project       | Issues Open | PRs Merged (Last 24h) | Release Status        |
|---------------|-------------|--------------------------|------------------------|
| **vLLM**      | 187         | 12                       | No new release         |
| **SGLang**    | 354         | 9                        | v1.0 tracking (no release) |
| **llama.cpp** | 192         | 11                       | **v1.0.0 released** (breaking) |
| **Ollama**    | 218         | 7                        | No new release         |
| **LiteLLM**   | 245         | 10                       | v1.111.0-dev & LTS v1.108.8 |
| **Unsloth**   | 162         | 6                        | No new release         |

> ✅ **Key Insight**: *llama.cpp* leads in activity momentum with a major v1.0.0 release removing legacy APIs, signaling API maturity. *SGLang* and *LiteLLM* show strong stability focus with 1.0 tracking and security hardening.

---

### **3. Model Support Race**

| New Model / Architecture           | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**            | ✅ (ROCm/MI355X) | ⚠️ (SM120 perf issues) | ❌ | ✅ (MLX/MXFP4) | ❌ | ❌ |
| **Qwen3.8-2.4T-A95B-Quark-MXFP4**  | ✅ (ROCm) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Kimi-K3/K2.5 (AMD)**             | ⚠️ (ROCm optimization) | ✅ (optimized FP8/MXFP4) | ❌ | ❌ | ❌ | ❌ |
| **Zaya1 8B (Zyphra)**              | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Granite4VisionForConditionalGeneration** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **AMD gfx1250 (MI45x)**            | ❌ | ✅ (AITER pinning) | ❌ | ❌ | ❌ | ❌ |
| **Ascend NPU**                     | ❌ | ✅ (Q4 2026 roadmap) | ❌ | ❌ | ❌ | ❌ |
| **Cambricon MLU**                  | ❌ | ❌ | ❌ | ❌ | ✅ (feature request) | ❌ |

> 🏆 **Winner: SGLang** — fastest adoption of new AMD models (Kimi-K series) and strongest roadmap clarity for non-NVIDIA hardware.  
> 🥈 **Runner-up: Ollama** — broadest *practical* support for local models via MLX and fine-tuning workflows.  
> 🥉 **Note**: *llama.cpp* leads in *native* support for niche backends (Hexagon, Vulkan iGPU), but lags in cutting-edge LLMs.

---

### **4. Performance Frontier**

| Focus Area               | vLLM                          | SGLang                         | llama.cpp                   | Ollama                      | LiteLLM                     | Unsloth                    |
|--------------------------|-------------------------------|--------------------------------|-----------------------------|-----------------------------|-----------------------------|----------------------------|
| **KV Cache Efficiency**  | ✅ Lookahead hashes, EAGLE drop | ⚠️ HiCache host-tier failure   | ❌                            | ✅ VRAM accounting fixes     | ❌                          | ❌                         |
| **Batching & Concurrency**| ✅ DSpark concurrency fix      | ✅ `prefill-cache-reserve`     | ❌                            | ✅ Auto-context sizing       | ✅ Dynamic rate limiting    | ❌                         |
| **Quantization**         | ✅ Marlin → Humming RFC        | ✅ MXFP4 + MLA fusion          | ✅ IQ2_XXS, NVFP4, MXFP4     | ✅ Mixed MXFP4/MXFP8         | ✅ Image signing            | ✅ INT8 DiT kernels (experimental) |
| **Distributed Serving**  | ✅ Engram pool splitting (NVLink/RDMA) | ❌                             | ❌                            | ❌                          | ✅ Native callback stack    | ❌                         |
| **Kernel Optimization**  | ✅ FlyDSL, MXFP8 GEMMs         | ✅ AITER, DSpark MHA draft     | ✅ GCN/RDNA3.5 MMQ, WMMA     | ❌                          | ✅ Rust-native callbacks     | ✅ GUI idle-state throughput gain |

> 🔥 **Frontier Leaders**:  
> - *vLLM*: Distributed scaling and kernel-level tuning (especially on ROCm).  
> - *SGLang*: Scheduler resilience under load (prefill cache reserve).  
> - *LiteLLM*: Observability and guardrail infrastructure via Rust-native callbacks.

---

### **5. Layer Positioning**

| Project       | Primary Layer                 | Key Differentiator                                      |
|---------------|-------------------------------|----------------------------------------------------------|
| **vLLM**      | **High-Performance Serving Engine** | GPU-optimized, low-latency inference; dominant in datacenter-scale deployments |
| **SGLang**    | **Agent-First Inference Runtime** | Built for agentic workloads: speculative decoding, memory-aware scheduling |
| **llama.cpp** | **Cross-Platform Local Runtime** | Single binary, no dependencies; ideal for edge/mobile/embedded |
| **Ollama**    | **Local Agent Gateway + Runtime** | Developer-friendly CLI, model manager, and agent integrations (Wirken, Claude Desktop) |
| **LiteLLM**   | **Multi-Provider Gateway & Orchestrator** | Unified API layer for hybrid cloud/local inference, cost control, and observability |
| **Unsloth**   | **Fine-Tuning Studio + Local Runtime** | End-to-end UX for training/fine-tuning and model export; focused on ease-of-use |

> 💡 **Strategic Implication**: Developers are increasingly selecting based on *workflow*, not just performance. vLLM for scale, SGLang for agents, Ollama for desktop apps, LiteLLM for multi-cloud orchestration.

---

### **6. Trend Signals**

1. **Hardware Diversification Accelerates**  
   - AMD ROCm (gfx950/gfx942/gfx1250) and Ascend/NPU support are no longer experimental—they’re actively being optimized in vLLM, SGLang, and Ollama.
   - **Watch**: MI355X and MI45x performance benchmarks will define next-gen inference economics.

2. **Rust is Becoming the Performance Backbone**  
   - LiteLLM’s native Rust callbacks signal a shift toward lower-latency, safer, and more scalable systems.
   - **Implication**: Expect future releases from vLLM/SGLang to adopt Rust for core logic.

3. **Agent Workflows Demand Specialized Tooling**  
   - Features like `--prefill-cache-reserve`, auto-context sizing, and speculative decoding early filtering are now standard.
   - **Action Item**: Avoid relying solely on generic inference engines for long-running agents—choose platforms built for stateful execution.

4. **Security & Compliance Are Now First-Class Concerns**  
   - LiteLLM’s Cosign image signing, JWT hygiene alerts, and secret scrubbing highlight growing trust needs.
   - **Recommendation**: Always verify signatures when using production-grade proxy images.

5. **API Stability Is Rising**  
   - vLLM’s breaking changes, llama.cpp’s v1.0.0, and SGLang’s 1.0 tracking reflect maturity.
   - **Developer Advice**: Migrate early to stable versions—don’t wait for “perfect” stability.

---

### **Final Takeaway for Application Developers**

Choose your stack by workflow:
- **Scale & Speed?** → Use **vLLM** with ROCm or SM120.
- **Agents & Stateful Sessions?** → **SGLang** or **Ollama** with auto-context and cache controls.
- **Edge/Embedded?** → **llama.cpp** (Hexagon/Vulkan/iGPU).
- **Multi-Cloud Orchestration?** → **LiteLLM** with Rust callbacks and budgeting.
- **Fine-Tuning + UI?** → **Unsloth** (with caution on v0.1.917-beta mmap bug).

> ⚠️ **Critical Note**: Avoid `fp8_e5m2` KV cache (vLLM), `--enforce-eager` on SM120 (vLLM/SGLang), and v0.32.10+ on AMD 780M (Ollama) until patches land.

This ecosystem is no longer fragmented—it’s converging around *performance, reliability, and developer experience*. The time to plan for cross-stack interoperability is now.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-14**

---

### **1. Today's Highlights**
The vLLM project is advancing aggressively on **ROCm/AMD performance optimization**, with multiple PRs targeting high-profile models like *DeepSeek-V4.1-Flash* and *Qwen3.8-2.4T-A95B* on MI355X (gfx950). Critical work is underway to resolve **Blackwell SM120 decode throughput issues** and **CUDA graph compatibility** for DSpark, while a major RFC proposes replacing Marlin with the more future-proof **Humming quantization backend** across NVIDIA architectures.

---

### **2. Releases & Breaking Changes**
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**
- ✅ **DeepSeek-V4.1-Flash** now has dedicated ROCm performance tracking on **MI355X (gfx950)** via Issue #66587 and PR #67377.
- ✅ **Qwen3.8-2.4T-A95B-Quark-MXFP4** and **Qwen3.8-Flash-Next-Quark-MXFP4** are under active ROCm optimization (Issue #57149, #59575).
- 🚀 **SM120 (RTX PRO 6000 Blackwell)** support is being prioritized for DeepSeek-V4-Flash, with a critical fix needed for `--enforce-eager` and CUDA graphs (Issue #56892).
- 🔧 **ROCm/Metal/CPU**: Continued focus on AMD gfx950/gfx942 support; ongoing CI fixes for ROCm stability (PR #67567).

> 🔗 [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [PR #67377](https://github.com/vllm-project/vllm/pull/67377)

---

### **4. Performance & Optimization**
- ⚡ **DeepSeek-V4.1-Flash on MI355X**: PR #67377 introduces tuned FlyDSL kernels and faster MXFP8 activation quant, improving dense GEMMs and MoE linears (MXFP8 peak utilization: ~21–31% vs. baseline).
- ⚙️ **DFlash/DSpark Concurrency Fix**: PR #64364 improves TP4 latency-specialized decode performance at concurrency 1 on GB300.
- 📈 **Speculative Decoding**: PR #66534 enables early top-k/top-p cutoffs during target logits load — reducing redundant computation.
- 🔄 **KV Cache Efficiency**: PR #66234 removes legacy EAGLE block dropping, defaulting to lookahead hashes to improve prefix cache reuse.
- 🌐 **Multi-node Scaling**: PR #67539 introduces engram pool splitting across NVLink/RDMA, enabling scalable lookup table distribution.

> 🔗 [PR #67377](https://github.com/vllm-project/vllm/pull/67377) | [PR #66234](https://github.com/vllm-project/vllm/pull/66234) | [PR #67539](https://github.com/vllm-project/vllm/pull/67539)

---

### **5. Stability & Regressions**
- ❌ **Critical Regression**: `--kv_cache_dtype="fp8_e5m2"` silently corrupts output on Qwen-VL models (Qwen2-VL, Qwen2.5-VL) with default scaling (**Issue #41343**).
- ❌ **High Priority Bug**: Extremely low decode throughput on **SM120 (Blackwell)** GPUs with `--enforce-eager`, and unusable CUDA graphs (**Issue #56892**).
- ❌ **Memory Corruption Risk**: CPU expand_kernel shim discards output — leads to uninitialized memory use in non-greedy spec decoding (**Issue #55005**).
- ⚠️ **Load Balancer Failure**: After 48–72 hours of sustained use, load balancer fails to distribute requests across data parallel axis (**Issue #40279**).
- ✅ **Fixes in Progress**: 
  - PR #66488 resolves AWQ key name mismatch in MoE configs.
  - PR #63874 fixes FlashInfer workspace leak during teardown.

> 🔗 [Issue #41343](https://github.com/vllm-project/vllm/issues/41343) | [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [PR #66488](https://github.com/vllm-project/vllm/pull/66488)

---

### **6. What This Means for Application Developers**
- **For AMD users**: Expect improved performance on MI355X with Qwen3.8 and DeepSeek-V4.1-Flash — but avoid `fp8_e5m2` KV cache until #41343 is patched.
- **For Blackwell (SM120) adopters**: Avoid `--enforce-eager` and disable CUDA graphs temporarily; wait for fix from Issue #56892.
- **For speculative decoding workflows**: Enable `--top_k/--top_p` early filtering via PR #66534 to reduce compute overhead.
- **For large-scale inference**: Leverage engram pooling (PR #67539) and KV connector optimizations for better multi-node scalability.
- **For RL fine-tuning**: Direct weight reload (`VLLM_RELOAD_MODE=direct`) is now supported via PR #67576 — enable efficient online quantization updates.

> 🔗 [PR #67576](https://github.com/vllm-project/vllm/pull/67576) | [PR #67539](https://github.com/vllm-project/vllm/pull/67539)

---  
*Digest compiled from GitHub activity (2026-11-14).*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-11-14

---

### **1. Today's Highlights**  
SGLang continues its aggressive push toward stability and performance for next-gen hardware, with critical fixes for Blackwell (SM120) compatibility and HiCache memory management. Key progress includes a new `--prefill-cache-reserve` scheduler feature to prevent prefix cache collapse under high concurrency and ongoing optimization of AMD ROCm backends for Kimi-K series models.

---

### **2. Releases & Breaking Changes**  
No new releases in the past 24 hours. However, **SGLang 1.0 is now actively tracked** via [Issue #50045](https://github.com/sgl-project/sglang/issues/50045), signaling a shift toward API stability and breaking-change enforcement. Upgrades from 0.5.x may require configuration adjustments; see [Upgrade notes](#upgrade-notes) in the tracker.

---

### **3. New Model & Hardware Support**  
- **AMD gfx1250 (MI45x)**: PR [#47562](https://github.com/sgl-project/sglang/pull/47562) tracks readiness for AITER pinning, though CI validation remains manual.
- **Ascend NPU**: [Roadmap issue #43519](https://github.com/sgl-project/sglang/issues/43519) confirms Q4 2026 focus on multimodal model support and serving features.
- **Cambricon MLU**: [Feature request #45615](https://github.com/sgl-project/sglang/issues/45615) formally opens backend development.
- **Multimodal Video Support**: PR [#50407](https://github.com/sgl-project/sglang/pull/50407) enables passing frame and token caps to video processors in `/generate`.

---

### **4. Performance & Optimization**  
- **AMD ROCm**: Multiple optimizations landed:
  - Fuse MLA value projection with MXFP4 output quantization ([PR #33873](https://github.com/sgl-project/sglang/pull/33873)).
  - Enable DSpark MHA draft on non-causal unified_attention ([PR #47437](https://github.com/sgl-project/sglang/pull/47437)).
  - Optimize fp8-Q asm verify launch for Kimi-K3 ([PR #48878](https://github.com/sgl-project/sglang/pull/48878)).
- **NVIDIA SM120 (Blackwell)**: 
  - DeepSeek-V4 prefill throughput (~2–7K tok/s vs ~12.5K in vLLM/Marlin) under investigation ([Issue #33422](https://github.com/sgl-project/sglang/issues/33422)).
  - Fix for CUDA 13 wheel install failure on RTX 50-series consumer cards ([Issue #49209](https://github.com/sgl-project/sglang/issues/49209)).
- **Scheduler**: PR [#50213](https://github.com/sgl-project/sglang/pull/50213) introduces `--prefill-cache-reserve` to preserve KV/state slots for cached prefixes under multi-turn agent loads.

---

### **5. Stability & Regressions**  
Critical issues reported today include:  
1. **CUDA Coredump Tracker** ([Issue #26340](https://github.com/sgl-project/sglang/issues/26340)) – 361 comments tracking auto-collected coredumps from CI; affects multiple GPU configurations.  
2. **HiCache Host-Tier Hits Drop to Zero** ([Issue #45400](https://github.com/sgl-project/sglang/issues/45400)) – Occurs when host Mamba pool is exhausted, despite KV retention on host.  
3. **Xid 13 "CTA Not Present" Crashes on B200** ([Issue #46203](https://github.com/sgl-project/sglang/issues/46203)) – 7 crashes across 4 machines under agentic workloads.  
4. **NaN Logits Latched After Padding** ([Issue #49881](https://github.com/sgl-project/sglang/issues/49881)) – Affects GLM-5.3-Flash with speculative decoding; persists across requests.  
*Note: No fix PRs are linked yet for these high-severity issues.*

---

### **6. What This Means for Application Developers**  
- **Avoid SM120/Blackwell deployments** until coredump and throughput regressions are resolved—especially for DeepSeek-V4 and other high-throughput models.  
- Use `--prefill-cache-reserve` to stabilize long-running agent sessions and prevent prefix cache thrashing.  
- For AMD users: expect improved performance on Kimi-K2.5/K3 models with recent PRs, but test `--attention-backend aiter` carefully due to known fallbacks.  
- Monitor [CI Failure Tracker #17050](https://github.com/sgl-project/sglang/issues/17050) for flaky tests affecting CI reliability.  
- Prepare for **SGLang 1.0** by auditing configs—expect stricter validation and deprecation of silent settings.  

> 🔗 *All links direct to GitHub issues or PRs for deeper inspection.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-14**

---

### **1. Today's Highlights**  
The release of **v1.0.0** marks a major milestone, removing deprecated public APIs and stabilizing the core inference stack. Key advancements include Metal backend fixes for large batched outputs, improved Hexagon SSM_SCAN support, and enhanced Vulkan device management. These updates solidify llama.cpp’s position as a production-grade, cross-platform LLM inference engine.

---

### **2. Releases & Breaking Changes**  
- **`v1.0.0` released**: This is a **breaking release** that removes legacy public APIs (e.g., `llama_eval`, `llama_load_model`). Developers must migrate to the new `llama_infer` and `llama_context`-based API.  
  🔗 [Release Notes](https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0) | 📝 [Blog Post](https://huggingface.co/blog/ggml-org/llama-cpp-v1)

---

### **3. New Model & Hardware Support**  
- **Hexagon**: Added support for `SSM_SCAN` op and improved buffer stacking for Snapdragon devices (including Android).  
  🔗 [PR #31921](https://github.com/ggml-org/llama.cpp/pull/31921), [PR #32144](https://github.com/ggml-org/llama.cpp/pull/32144)  
- **AMD ROCm**: Added `gfx1013` (RDNA1) support in HIP backend for BC250-class GPUs.  
  🔗 [PR #32236](https://github.com/ggml-org/llama.cpp/pull/32236)  
- **New Models**: Added support for **Zaya1 8B (Zyphra)** and **Granite4VisionForConditionalGeneration** via GGUF conversion.  
  🔗 [PR #32071](https://github.com/ggml-org/llama.cpp/pull/32071), [PR #32237](https://github.com/ggml-org/llama.cpp/pull/32237)  
- **Quantization**: Expanded Hexagon support to include `IQ2_XXS` and `NVFP4` quant types.  
  🔗 [PR #31954](https://github.com/ggml-org/llama.cpp/pull/31954)

---

### **4. Performance & Optimization**  
- **CUDA/HIP**: Tuned MMQ configs for GCN and RDNA3.5; added `few-row MMQ with WMMA` for RDNA3.5.  
  🔗 [PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021), [PR #32224](https://github.com/ggml-org/llama.cpp/pull/32224)  
- **Vulkan**: Optimized `TOP_K_MASK` barrier and kernel reuse; introduced optional device keepalive.  
  🔗 [PR #31544](https://github.com/ggml-org/llama.cpp/pull/31544), [PR #29267](https://github.com/ggml-org/llama.cpp/pull/29267)  
- **CPU**: BF16 support added to `RMS_NORM` (CPU/CUDA); AMX optimizations now correctly handle broadcasted weights.  
  🔗 [PR #32135](https://github.com/ggml-org/llama.cpp/pull/32135), [PR #29670](https://github.com/ggml-org/llama.cpp/pull/29670)  
- **SYCL**: Added script to check DLL dependencies post-oneAPI upgrade.  
  🔗 [PR #32134](https://github.com/ggml-org/llama.cpp/pull/32134)

---

### **5. Stability & Regressions**  
- **Critical**: `Vulkan: GLM-OCR vision encoder produces garbage on Intel Arc A380` (Issue #31836) — affects vision models on iGPU. No fix yet.  
- **High Severity**: `Metal: mul_mv destination offset overflow` causes silent data corruption in large batched outputs (fixed in PR #32221).  
  🔗 [Fix PR #32221](https://github.com/ggml-org/llama.cpp/pull/32221)  
- **Medium**: `Vulkan: device lost after GPU fault` leads to infinite spin in `ggml_vk_wait_for_fence` (Issue #29926).  
- **Recurring**: Multiple CUDA/SYCL crashes on dual-GPU setups (`-sm tensor`) and with large prefill + prefix reuse (Issues #27845, #29255, #29549).  
- **Known**: `HIP/gfx1151: SOLVE_TRI aborts with rocBLAS 'hipErrorInvalidImage'` (Issue #27557) — blocks Qwen3.5/Kimi-linear models.

---

### **6. What This Means for Application Developers**  
- **Upgrade to v1.0.0 immediately**: The new API is more robust and future-proof. Migrate from old `llama_eval` calls to `llama_infer` and context-based workflows.  
- **Use `--cache-type-k-swa`** for SWA models to optimize memory usage across attention types.  
- **Avoid `-sm tensor` on multi-GPU systems** until issues #27845 and #29255 are resolved.  
- **Leverage new hardware support** for Hexagon (mobile), AMD gfx1013 (BC250), and Vulkan keepalive for long-running services.  
- **Monitor Vulkan/iGPU stability** — especially on Intel Arc A380 and Radeon 680M (Issue #31509: all-NaN logits).  
- **Enable `--spec-draft-p-min` only with deterministic draft sampling** — probabilistic drafts can ignore p_min cutoffs (Issue #31294).

👉 **Recommended Action**: Update to `v1.0.0` and validate against your model stack, especially if using vision models, multiple GPUs, or mobile backends.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-14**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its agent and cloud integration capabilities, with new PRs adding support for Claude Desktop CLI launchers and tools like Wirken and SelectTranslate. Critical stability fixes are underway, including VRAM accounting improvements and stream parsing corrections for Qwen and DeepSeek models. A notable regression in AMD Radeon 780M Vulkan support has been reported in v0.32.10+, affecting larger model inference on consumer-grade GPUs.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases were published in the last 24 hours. No breaking changes or migration notes apply at this time.

---

### **3. New Model & Hardware Support**  
- **New Integration**: Added `SelectTranslate` (AI browser extension using local Ollama models) and **Wirken** (agent gateway) to community integrations via [PR #19695](https://github.com/ollama/ollama/pull/19695), [PR #18989](https://github.com/ollama/ollama/pull/18989).  
- **CLI Launch Support**: Introduced `ollama launch claude-desktop` for macOS, enabling CLI-driven configuration and model routing via the Ollama app’s gateway ([PR #19691](https://github.com/ollama/ollama/pull/19691)).  
- **MLX Backend Enhancements**: Added support for **DeepSeek V4.1 Flash** with mixed MXFP4/MXFP8 quantization, host-backed tensor lifecycle management, compressed sparse attention, and vision/audio support ([PR #19667](https://github.com/ollama/ollama/pull/19667)).  
- **Hardware Compatibility**: PRs now address MLX-C/XGrammar binary compatibility for packaging systems ([PR #19688](https://github.com/ollama/ollama/pull/19688)).

---

### **4. Performance & Optimization**  
- **Auto-context Sizing**: The long-standing PR [#13619](https://github.com/ollama/ollama/pull/13619) introduces automatic `num_ctx` sizing based on available VRAM — a major step toward eliminating manual tuning and reducing CPU fallbacks due to over-allocation.  
- **VRAM Accounting Fixes**: PR [#19632](https://github.com/ollama/ollama/pull/19632) resolves multiple critical issues in GPU memory tracking that caused incorrect model eviction, failed loads, and inefficient GPU splitting across devices.  
- **Streaming Efficiency**: PRs [#19689](https://github.com/ollama/ollama/pull/19689) and [#19694](https://github.com/ollama/ollama/pull/19694) improve whitespace handling in stream chunks and fix tool-call argument corruption in Qwen3.5/Coder parsers — crucial for agentic workflows with structured outputs.

---

### **5. Stability & Regressions**  
- **Critical**: AMD Radeon 780M Vulkan regression in v0.32.10+ causes `ErrorDeviceLost` due to insufficient memory for command submission (`radv/amdgpu: Not enough memory for command submission`) when running large models. Affected users should downgrade to v0.32.9 or earlier until a fix is released ([Issue #17748](https://github.com/ollama/ollama/issues/17748)).  
- **High Severity**: Tool-call flooding in `mimo-v2.6-pro:cloud` during multi-turn agentic sessions leads to session degradation and unusable output ([Issue #19672](https://github.com/ollama/ollama/issues/19672)). This is suspected to be an upstream checkpoint issue.  
- **Moderate**: Intermittent `500 "chat prompt error"` (`wsarecv reset`) on Windows after ~19 seconds for long prompts (>70k chars) — reproducible in agent scenarios ([Issue #19696](https://github.com/ollama/ollama/issues/19696)). Immediate retry usually succeeds.  
- **Low Severity**: Misidentification of `ornith-1.5:35b` as "Claude" in chat context ([Issue #17904](https://github.com/ollama/ollama/issues/17904)) — likely a metadata or system prompt misconfiguration.

---

### **6. What This Means for Application Developers**  
- **Agent Workflows**: Be cautious with `mimo-v2.6-pro:cloud` and `qwen3.5/coder` in long-running agents — expect potential tool-call duplication or data loss due to parser bugs. Use explicit tool schemas and validate streaming behavior.  
- **Cloud Pricing Confusion**: The $0.30/M input cost vs. Zero Data Retention promise raises concerns around cached input billing ([Issue #17489](https://github.com/ollama/ollama/issues/17489)); developers should audit their usage patterns and consider local-only deployments for privacy-sensitive use cases.  
- **Local Deployment**: Leverage auto-context sizing ([PR #13619](https://github.com/ollama/ollama/pull/13619)) to avoid trial-and-error tuning of `num_ctx`. For AMD users, avoid v0.32.10+ until Vulkan memory management is fixed.  
- **Integration Ecosystem**: The growing number of CLI-supported integrations (e.g., Claude Desktop, Wirken, Recordist) enables richer, unified AI application stacks — ideal for building desktop-native AI agents with minimal setup overhead.

---  
*Digest compiled from GitHub activity on 2026-11-14 | Source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-14**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues its momentum toward high-performance, secure, and extensible inference orchestration. Key developments include foundational work on native Rust-based callbacks for budgeting, Prometheus metrics, and rate limiting—laying the groundwork for future performance and observability gains. Critical fixes address streaming reliability (e.g., Azure stream drops), model mapping errors, and security hardening around sensitive data in logs.

---

### **2. Releases & Breaking Changes**  
- **v1.111.0-dev.2**, **v1.111.0-dev.1**, and **v1.108.8 (LTS)** released with enhanced image signing via Cosign using key from [commit `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).  
  - **Verify signature**:  
    ```bash
    cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.108.8
    ```
  - Use `ghcr.io/berriai/litellm:lts` to stay on latest stable release.
- **No breaking changes** in API or config structure this cycle; focus remains on stability and security.

---

### **3. New Model & Hardware Support**  
- **Vispark Vision models** added via PR [#41192](https://github.com/BerriAI/litellm/pull/41192): `vispark/vision-small`, `medium`, `large`. Supports vision tasks with billing based on 600-token minimum.
- **Soniox STT v6 models** (`stt-async-v6`, `stt-rt-v6`) now supported via PR [#50934](https://github.com/BerriAI/litellm/pull/50934); v5 models deprecated Dec 15, 2026.
- **Ollama text-to-image support** requested in issue [#28026](https://github.com/BerriAI/litellm/issues/28026), currently returning empty response — not yet implemented.

---

### **4. Performance & Optimization**  
- **Rust-native callback stack** launched:  
  - Budget reservation (#51535), Prometheus logging (#51541), dynamic rate limiting (#51540), S3 logging (#51539), and parallel request limiter (#51537) are being ported to Rust via `CustomLoggerV2` contract.  
  - Enabled via environment flags (`LITELLM_NATIVE_BUDGETS=true`, etc.), default off.  
  - Expected benefits: lower latency, reduced Python overhead, better scalability under load.  
  - [PR #51526](https://github.com/BerriAI/litellm/pull/51526) establishes the foundation.
- **Azure Foundry integration improvements**:  
  - Fixes for `/openai/v1` endpoints: removing redundant `api-version` param (#51767) and restoring project/resource base paths (#51769) improve compatibility and reduce 404s.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| 🔴 High | [#50434](https://github.com/BerriAI/litellm/issues/50434) | Intermittent 503/`APIConnectionError` on Gemini calls | Open – impacts reliability of production gateways |
| 🔴 High | [#51723](https://github.com/BerriAI/litellm/issues/51723) | No way to force `/chat/completions` endpoint for OpenAI-like servers | Closed – workaround via `openai/` prefix now effective |
| 🟡 Medium | [#51456](https://github.com/BerriAI/litellm/issues/51456) | Bedrock Llama native streaming drops `prompt_token_count` and undercounts usage | Fixed in PR #51747 (via `reasoning_effort`) |
| 🟡 Medium | [#51389](https://github.com/BerriAI/litellm/issues/51389) | Shared YAML `model_info` causes metadata contamination and incorrect spend tracking | Open – affects cost accuracy in multi-model deployments |
| 🟢 Low | [#36997](https://github.com/BerriAI/litellm/issues/36997) | Admin UI uses non-HttpOnly JWT with proxy key in cookie | Open – security risk if session hijacked |

> ✅ **Fix PRs merged**:  
> - [#51747](https://github.com/BerriAI/litellm/pull/51747): Sends `reasoning_effort` to Foundry Kimi K3, fixes token counting  
> - [#51767](https://github.com/BerriAI/litellm/pull/51767): Removes `api-version` from Foundry `/openai/v1` paths  
> - [#51769](https://github.com/BerriAI/litellm/pull/51769): Backports Azure Foundry fixes to LTS branch

---

### **6. What This Means for Application Developers**  
- **Prioritize migration to LTS (`lts` tag)** for production systems: `v1.108.8` is stable and receives critical patches. Avoid `dev` builds unless testing new features.
- **Enable native Rust callbacks** (e.g., `LITELLM_NATIVE_BUDGETS=true`) in high-throughput environments for improved latency and resource efficiency—especially relevant for agents using real-time guardrails or custom logging.
- **Be cautious with shared `model_info` anchors** in YAML configs: cross-model metadata leakage can cause inaccurate cost reporting. Use isolated per-model definitions where possible.
- **Use `openai/chat/completions` prefix** when routing to non-standard OpenAI-compatible APIs (e.g., Reflection.AI) to avoid endpoint misrouting.
- **Monitor for upstream API quirks**: Gemini’s intermittent failures and Ollama’s silent timeouts (issue #37041) suggest adding retry logic and circuit-breaking patterns in client code.

> 💡 **Pro tip**: Audit your proxy’s `spend_logs` and `guardrail` configurations—PR #50214 ensures blocked requests don’t leak secrets into logs.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-14**

---

### **1. Today's Highlights**  
The Unsloth project continues rapid iteration on its Studio and Desktop clients, with a strong focus on UX polish, stability fixes for GPU inference (especially ROCm/Metal), and critical improvements to model loading and export workflows. Key developments include fixing config.json missing errors post-fine-tuning, resolving Docker audio.cpp symlink issues, and enhancing the reliability of release notes and file import/export functionality.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, several **critical bug fixes and feature PRs are in progress or merged**, including:
- Fixing `config.json` missing error during Hugging Face model load ([#368](https://github.com/unslothai/unsloth/issues/368)) — *confirmed closed but requires user-side validation.*
- Resolving `invalid cross-device link` error in Docker when updating `audio.cpp` ([#17638](https://github.com/unslothai/unsloth/issues/17638) → [PR #17647](https://github.com/unslothai/unsloth/pull/17647)).
- Adding environment variable support for TLS certs (`UNSLOTH_STUDIO_SSL_CERTFILE`, `UNSLOTH_STUDIO_SSL_KEYFILE`) to avoid CLI bloat ([#17640](https://github.com/unslothai/unsloth/issues/17640) → [PR #17648](https://github.com/unslothai/unsloth/pull/17648)).

> 🔧 **Migration Note**: Users upgrading from v0.1.916 to v0.1.917-beta should be aware of the forced mmap behavior regression ([#17605](https://github.com/unslothai/unsloth/issues/17605)) — explicitly set `--load-mode none` to avoid excessive RAM/SSD usage.

---

### **3. New Model & Hardware Support**  
- **ROCm 7.14 / MI300X (gfx942)**: A math fallback assertion issue has been reported in `_scaled_dot_product_flash_attention_backward` — indicates incomplete kernel support for newer AMD architectures. ([#17548](https://github.com/unslothai/unsloth/issues/17548))
- **NVIDIA sm75 to sm120 & AMD gfx1151 (Strix Halo)**: An experimental INT8 attention kernel for diffusion DiTs (e.g., FLUX.3 klein, MiniMax-H3) is under development ([PR #17718](https://github.com/unslothai/unsloth/pull/17718)) — promising for faster image generation workloads.
- **Custom folder model discovery**: Improved detection of Hugging Face snapshots in non-default cache paths, now visible in "Select Model" UI ([PR #17673](https://github.com/unslothai/unsloth/pull/17673)).

---

### **4. Performance & Optimization**  
- **Inference throughput gain observed**: On LinuxMint with Intel B70, users report up to **300% token/s increase** when minimizing the GUI window — suggests background thread scheduling or GPU context management improvements in idle state ([#17722](https://github.com/unslothai/unsloth/issues/17722)).
- **Memory efficiency**: The fix for forced mmap in v0.1.917-beta addresses excessive RAM/SSD usage during model loading ([#17605](https://github.com/unslothai/unsloth/issues/17605)), which was causing performance degradation on high-RAM systems.
- **GPU utilization**: Post-engine update, some Windows users report CPU-only execution until "Repair installation" is triggered — tied to missing CUDA runtime DLLs in bundled app packages ([PR #17675](https://github.com/unslothai/unsloth/pull/17675)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|---------|------|--------|--------|
| ⚠️ High | Forced mmap in v0.1.917-beta causes excessive RAM/SSD use despite `--load-mode none` | Open | [PR #17605](https://github.com/unslothai/unsloth/issues/17605) |
| ⚠️ High | `config.json` missing after fine-tuning + HF upload | Closed | [Issue #368](https://github.com/unslothai/unsloth/issues/368) |
| ⚠️ Medium | `Show release notes` button fails on slow connections | Open | [PR #17670](https://github.com/unslothai/unsloth/pull/17670) |
| ⚠️ Medium | Combined CSV export merges multiple chats into one | Open | [PR #17656](https://github.com/unslothai/unsloth/pull/17656) |
| ⚠️ Low | File picker hides `.md` exports in web UI | Open | [PR #17652](https://github.com/unslothai/unsloth/pull/17652) |

> ✅ **Note**: Several regressions stem from recent engine updates (llama.cpp, whisper.cpp, audio.cpp) — particularly affecting Docker and Windows deployments.

---

### **6. What This Means for Application Developers**  
- **Model Serving & Fine-Tuning Workflows**: Ensure `config.json` is included when uploading fine-tuned models to Hugging Face — unsloth currently enforces strict schema checks at load time. Use `unsloth save_model` utilities to validate metadata integrity.
- **Docker Deployments**: Avoid using `podman` or `docker` with bind-mounted `/opt` directories if `audio.cpp` updates fail due to cross-device links — apply [PR #17647](https://github.com/unslothai/unsloth/pull/17647) patch or restructure volumes.
- **Cross-Platform Reliability**: For HIP/ROCm users on MI300X, expect degraded performance or crashes until INT8 kernels land — monitor [PR #17718](https://github.com/unslothai/unsloth/pull/17718) for early access.
- **UI Automation & Integration**: If building agents on top of Unsloth Studio, leverage the new `UNSLOTH_STUDIO_SSL_*` env vars for secure HTTPS deployment without CLI overhead — ideal for CI/CD pipelines.

> 📌 **Pro Tip**: For production inference stacks, avoid v0.1.917-beta until the mmap regression is resolved; stick to v0.1.916 or earlier for stable memory usage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*