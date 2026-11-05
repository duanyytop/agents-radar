# AI Infrastructure Digest 2026-11-05

> Generated: 2026-11-05 02:44 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-05**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in late 2026 is characterized by intense specialization, rapid hardware diversification, and a growing emphasis on real-world stability and production readiness. Projects are converging toward high-performance, multi-GPU, heterogeneous serving with deep support for emerging models like Qwen3.8-Flash-Next and DeepSeek-V4-Flash. Critical focus areas include kernel-level optimization, memory safety, and distributed inference robustness—especially in disaggregated (P/D) architectures. While vLLM and SGLang lead in performance engineering, LiteLLM and Ollama dominate the gateway and developer experience layer, enabling seamless agent workflows across diverse backends.

---

### **2. Activity Comparison**

| Project       | Issues Opened (Last 24h) | PRs Merged (Last 24h) | Release Status         |
|---------------|----------------------------|--------------------------|-------------------------|
| vLLM          | 18                         | 12                       | None (v0.32.0+ unstable) |
| SGLang        | 15                         | 9                        | None                    |
| llama.cpp     | 14                         | 8                        | **v0.9.0 released**     |
| Ollama        | 12                         | 7                        | None                    |
| LiteLLM       | 9                          | 6                        | **v1.108.0 stable**     |
| Unsloth       | 10                         | 5                        | **v0.1.915-beta**       |

> ✅ *Insight*: **llama.cpp** and **LiteLLM** show strongest release momentum; **vLLM** and **SGLang** exhibit highest issue density, reflecting active stabilization of complex distributed systems.

---

### **3. Model Support Race**

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next**          | ✅ (ROCm/SM120) | ✅ (ROCm) | ❌ | ✅ (MLX) | ❌ | ✅ (beta) |
| **DeepSeek-V4-Flash (DSv4.1)**   | ✅ (SM120/Blackwell) | ⚠️ (tracking) | ⚠️ (in progress) | ⚠️ (known issues) | ❌ | ❌ |
| **Meta MobileMoE**               | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Ripple-65B**                   | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Drama-3 TTS**                  | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| **Nemotron 3.5 ASR Streaming**   | ❌ | ✅ (feature request) | ❌ | ❌ | ❌ | ❌ |

> 🏆 **Leader**: **Unsloth** leads in new model breadth (TTS, MobileMoE, Krea), while **vLLM** and **SGLang** are most advanced in **Qwen3.8-Flash-Next** and **DSv4.1** deployment readiness.

---

### **4. Performance Frontier**

| Optimization Focus             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache & Memory Safety**     | ✅✅ (critical bugs: corruption, leaks) | ✅✅ (PD decode corruption, OOM) | ✅ (Vulkan device loss, illegal access) | ✅ (VRAM prediction bug) | ✅ (early stream drop) | ✅ (UI lag under load) |
| **Batching & Throughput**        | ✅✅ (flash_attn_ext_rows, DSparK) | ✅ (DCP wire-bytes routing) | ✅ (multi-sequence batching) | ✅ (streaming flush) | ✅ (fan-out aggregates) | ✅ (RAG batching) |
| **Quantization & Precision**     | ✅ (FP8 dynamic fusion) | ✅ (W4A8 MoE, ROCm sparse) | ✅✅ (**OCP FP8 E4M3**, MXFP8) | ✅ (BF16 + MXFP8) | ❌ | ✅ (native FP8) |
| **Distributed Serving (P/D)**    | ✅✅ (multi-node, remote KV) | ✅✅ (PD decode corruption) | ❌ | ❌ | ✅ (control-plane audit) | ❌ |
| **Kernel & Backend Tuning**      | ✅✅ (Triton, SM120/MI355X) | ✅ (HIP sort skip, MoE) | ✅ (OpenCL, WebGPU) | ❌ | ❌ | ✅ (CUDA graphs) |

> 🔥 **Frontier Leaders**:  
> - **vLLM** dominates kernel-level tuning on NVIDIA/AMD.  
> - **llama.cpp** leads in low-level quantization innovation (OCP FP8).  
> - **Unsloth** excels in runtime efficiency via CUDA graphs and RAG batching.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Key Differentiator |
|---------------|------------------------------------|--------------------|
| **vLLM**      | **Inference Engine** (high-throughput serving) | Industry standard for large-scale, GPU-optimized inference; strong P/D and Flash Attention support. |
| **SGLang**    | **Distributed Serving Framework** | Built for PD disaggregation; agentic control flow, flexible policy management. |
| **llama.cpp** | **Local Runtime / Edge Inference** | Cross-backend portability (Vulkan, WebGPU, SYCL); ideal for edge and embedded devices. |
| **Ollama**    | **Gateway & Local Dev Experience** | Developer-first UX; seamless local model hosting, tool calling, and WSL2 integration. |
| **LiteLLM**   | **Control Plane / Gateway** | Universal API abstraction; cost tracking, auditing, and cross-provider routing. |
| **Unsloth**   | **Agent-First UI Runtime** | Browser-native interface with file interaction, Composer controls, and context persistence. |

> 🧩 *Positioning Insight*: The stack is clearly layered — from **engine (vLLM/SGLang)** → **gateway (LiteLLM/Ollama)** → **agent runtime (Unsloth)**, with **llama.cpp** bridging edge and local execution.

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-11-05 activity):**
1. **Heterogeneous Hardware Dominance**: AMD ROCm (gfx950/MI355X), Apple Silicon (MLX), Intel Arc, and Ascend NPU are no longer niche — all projects now have dedicated optimization tracks.
2. **Disaggregated Inference Stability Crisis**: Multiple critical bugs in PD (Prefill/Decode) systems (vLLM #61160, SGLang #48356) signal that distributed serving is still fragile at scale.
3. **Quantization Innovation Accelerating**: OCP FP8 E4M3 (llama.cpp), MXFP8 (Ollama), and W4A8 MoE (SGLang) indicate a shift toward higher-precision, lower-bit formats for edge and cloud.
4. **Agent-Centric Control Flow**: Unsloth’s Composer slider, LiteLLM’s guardrail early exit, and SGLang’s programmable KV policies point to mature agent frameworks.
5. **Production Readiness > Feature Velocity**: Despite aggressive feature releases (v0.9.0, v1.108.0), **stability fixes outnumber new features** — signaling maturity phase.

#### **What Application Developers Should Watch:**
- ✅ **Upgrade cautiously**: Use `v0.31.1` (vLLM), `v1.108.0` (LiteLLM), or `v0.9.0` (llama.cpp) only after verifying hardware compatibility.
- ✅ **Avoid long-context deployments** (>40k tokens) until OOM bugs (SGLang #36941, Ollama #19463) are resolved.
- ✅ **Monitor VRAM estimation accuracy** — current tools overestimate cache needs (Ollama #19463).
- ✅ **Prepare for agent state management**: Leverage per-request speculative decoding (SGLang), KV cache policies (SGLang), and structured tool output (Ollama).

> 📌 **Bottom Line**: The ecosystem is maturing rapidly — but **production stability is the new battleground**. Prioritize reliability, test deeply on target hardware, and avoid bleeding-edge releases unless you’re building infrastructure.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-05**

---

### **1. Today's Highlights**  
The vLLM project is advancing aggressively in **multi-GPU, multi-node inference optimization**, with critical performance work on **DeepSeek-V4-Flash (DSv4.1)** and **Qwen3.8-Flash-Next** across both NVIDIA (SM120/Blackwell) and AMD ROCm (gfx950/MI355X). Key developments include a major fix for **DSpark draft acceptance failure** due to missing `packed_modules_mapping`, and ongoing efforts to enable **batch-invariant mode** on Hopper/Blackwell with proper Triton kernel routing.

---

### **2. Releases & Breaking Changes**  
*None* — No new releases or breaking API/config changes observed in the past 24 hours.

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4-Flash-0731** now under active support tracking via [Issue #50576](https://github.com/vllm-project/vllm/issues/50576), with urgent need for **SM8x (Ampere/A100/A800) compatibility**.
- **Qwen3.8-Flash-Next** and **Qwen3.8-2.4T-A95B** receive dedicated ROCm performance optimization plans ([#59575](https://github.com/vllm-project/vllm/issues/59575), [#57149](https://github.com/vllm-project/vllm/issues/57149)) targeting gfx950 (MI355X).
- **NVIDIA Nemotron 3.5 ASR Streaming** added as a feature request ([#47455](https://github.com/vllm-project/vllm/issues/47455)), enabling streaming speech recognition use cases.
- **Intel GPU (XPU)** support expanded: test coverage enabled for attention kernels via [PR #65788](https://github.com/vllm-project/vllm/pull/65788).

---

### **4. Performance & Optimization**  
- **DSpark Drafting Fix**: A critical regression in DSv4.1 draft acceptance (0% success rate) due to missing `packed_modules_mapping` was identified and fixed in [PR #65618](https://github.com/vllm-project/vllm/issues/65618).
- **ROCm Optimization**: Multiple PRs targeting **MiniMax-M3.1** and **Qwen3.8-Flash-Next** on MI355X:
  - Tile tuning for MXFP8 GEMMs ([#65530](https://github.com/vllm-project/vllm/pull/65530))
  - XCD-aware sparse decode split selection ([#65481](https://github.com/vllm-project/vllm/pull/65481))
  - Defer FFN all-reduce into next layer’s norm ([#61119](https://github.com/vllm-project/vllm/pull/61119))
- **Kernel Fusion**: Added `gelu_tanh_and_mul_per_token_quant` fusion for dynamic FP8 quantization ([#64212](https://github.com/vllm-project/vllm/pull/64212)).
- **MoE Optimization**: Fall back to Triton for small M on Hopper when using DeepGEMM MoE backend ([#65790](https://github.com/vllm-project/vllm/pull/65790)).

---

### **5. Stability & Regressions**  
- **Critical Crash**: Single prefill exceeding 262,144 tokens crashes engine due to CUDA illegal memory access in Qwen4Exp (Qwen3.8-Flash-Next) on v0.32.0 — confirmed working in v0.31.1 ([#62383](https://github.com/vllm-project/vllm/issues/62383)).
- **Batch Invariance Bug**: On SM90/SM100, `enable_batch_invariant_mode` routes Linear layers to Triton even though cuBLAS is already batch-invariant, causing unnecessary overhead ([#65569](https://github.com/vllm-project/vllm/issues/65569)).
- **KV Cache Corruption**: Cross-request context contamination in PD disaggregation due to shared-prefix KV reuse with automatic prefix caching enabled — reproducible with DeepSeek-V4.1-Flash ([#61160](https://github.com/vllm-project/vllm/issues/61160)).
- **Remote KV Leak**: NixlConnector releases KV blocks during remote READ in flight, leading to silent consumption of overwritten data ([#61229](https://github.com/vllm-project/vllm/issues/61229)).

---

### **6. What This Means for Application Developers**  
- **Use v0.31.1 or earlier** if running Qwen4Exp or DeepSeek-V4.1-Flash with large prefills until fixes land in v0.32.1+.
- **Avoid `--enable-prefix-caching`** in production P/D disaggregated deployments until [#61160](https://github.com/vllm-project/vllm/issues/61160) is resolved — risk of cross-request data leakage.
- **Enable `enable_batch_invariant_mode` cautiously** on Blackwell/Hopper; monitor for unintended Triton fallbacks ([#65569](https://github.com/vllm-project/vllm/issues/65569)).
- Leverage **DSpark + DSv4.1** only after confirming `packed_modules_mapping` is properly set — expect 0% draft acceptance without the fix ([#65618](https://github.com/vllm-project/vllm/issues/65618)).
- For **AMD ROCm users**, expect improved performance on MiniMax-M3.1 and Qwen3.8-Flash-Next models via upcoming ROCm-specific kernel optimizations.

> ✅ *Recommendation*: Monitor [GitHub Issues #65618](https://github.com/vllm-project/vllm/issues/65618), [#61160](https://github.com/vllm-project/vllm/issues/61160), and [#62383](https://github.com/vllm-project/vllm/issues/62383) for stability updates before upgrading to v0.32.0+.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-05

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to deepen its support for multi-GPU, heterogeneous serving with key progress on Apple Silicon integration and AMD ROCm optimization. Critical stability fixes address high-severity issues in disaggregated inference (PD decode corruption) and memory exhaustion during long prefill sequences (>40k tokens). CI/CD reliability remains a top concern, with ongoing efforts to stabilize flaky test pipelines.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API/config changes were released.

---

### **3. New Model & Hardware Support**  
- **Apple Silicon (M-series)**: RFC #32321 proposes a redesign of the Torch-owned SRT path with an exported MLX region for native Apple Silicon serving, targeting future support via `torch` + `mlx` interoperability.  
- **AMD ROCm (gfx950 / MI355X)**: Active performance tracking for Qwen3.8-Flash-Next (#44304), with optimizations underway for MoE, sparse attention, and MTP.  
- **Ascend NPU**: Added W4A8 MoE online quantization support (#43739) and sampling-mask export for RL workloads (#43517).  
- **Intel Xeon (SPR)**: PR #45717 adds CPU core binding support for Compute Building Block (CBB) mode on next-gen Xeons.  

> 🔗 [RFC: Apple Silicon Serving Redesign](https://github.com/sgl-project/sglang/issues/32321)  
> 🔗 [ROCm Qwen3.8-Flash-Next Optimization Tracker](https://github.com/sgl-project/sglang/issues/44304)  
> 🔗 [Ascend W4A8 MoE Support](https://github.com/sgl-project/sglang/pull/43739)

---

### **4. Performance & Optimization**  
- **DeepSeek-V4 Prefill Throughput**: On 4× RTX PRO 6000 Blackwell (SM120), SGLang achieves ~2–7K tok/s vs vLLM/Marlin’s ~12.5K — under investigation for kernel tuning gaps (#33422).  
- **AMD DCP Prefill Routing**: PR #48505 introduces wire-bytes-based routing to reduce GPU communication overhead in distributed prefill.  
- **ROCm Speculative Decoding**: PR #48090 skips vocabulary-wide sort in rejection sampling, improving speed on HIP platforms.  
- **Unified Memory Management**: PR #48507 caps CUDA VMM feature copies per GPU and stages excess in pinned host memory to avoid OOM in multimodal workloads.  
- **Kernel-Level Optimizations**: Multiple PRs target memory layout efficiency (e.g., skipping unused decode workspace in vectorized_5d KV layout, #47911).

> 🔗 [DeepSeek-V4 Prefill Performance Gap](https://github.com/sgl-project/sglang/issues/33422)  
> 🔗 [AMD DCP Prefill Wire-Bytes Routing](https://github.com/sgl-project/sglang/pull/48505)  
> 🔗 [ROCm Speculative Sampling Optimization](https://github.com/sgl-project/sglang/pull/48090)

---

### **5. Stability & Regressions**  
High-severity stability issues reported today:

1. **Disaggregated Decode Corruption (Critical)**: PD decode with Qwen EAGLE produces corrupted output after retraction (#48356). *Fix pending*.  
2. **Long Prefill OOM Kill (Critical)**: Prefills >40k tokens exhaust unified memory on GB10 nodes (~54k token threshold), silently killing worker ranks with no traceback (#36941). *No fix yet*.  
3. **CI Infrastructure Flakiness (High Priority)**: Persistent flaky tests and infrastructure failures in PR Test Base/Extra runs; impacting developer productivity (#42752). *Active tracking*.  
4. **Host Memory Exhaustion in Diffusion**: Wan VAE decode time spikes 2–10x on `1-gpu-5090` runners due to runner-dependent perf variance (#48196).  
5. **MambaPool OOM Under Burst Admission**: `MambaPool.copy_from` gathers all temporal states into one large buffer, causing CUDA OOM during parallel admission bursts (#47916).

> 🔗 [Qwen EAGLE PD Decode Corruption](https://github.com/sgl-project/sglang/issues/48356)  
> 🔗 [Long Prefill Unified Memory OOM](https://github.com/sgl-project/sglang/issues/36941)  
> 🔗 [CI Flakiness Tracker](https://github.com/sgl-project/sglang/issues/42752)

---

### **6. What This Means for Application Developers**  
- **Use caution with long context (>40k tokens)**: Avoid deploying models like GLM-5.3-Flash on GB10 until the OOM issue is resolved. Monitor unified memory usage closely.  
- **Expect latency variability on AMD**: Performance may vary based on runner placement; use stable hardware pools for benchmarking.  
- **Leverage emerging agentic features**: Programmable KV cache policies (#46542) and per-request speculative decoding opt-out (#47797) enable fine-grained control over agent state management.  
- **Watch for CI instability**: Expect delays in PR reviews due to flaky tests; consider self-testing before submitting.  
- **Plan for model-specific quirks**: Some models (e.g., Kimi-K3, Muse-Glimmer-NVFP4) require explicit flags or hooks (e.g., #48510, #48128) for full functionality.

> 📌 **Action Item**: For production deployments involving long contexts or multimodal workloads, apply manual memory limits and monitor host memory usage via `--crash-dump-folder` and `--mm-feature-transport cuda_vmm`.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-05**

---

### **1. Today's Highlights**  
The **v0.9.0 release** delivers major advancements in quantization and inference efficiency, introducing **OCP FP8 E4M3 support**, a new `flash_attn_ext_rows` op for optimized multi-sequence KV caching, and a generic batched tensor API. Key improvements span backends including Vulkan (Intel), OpenCL, WebGPU, and SYCL, with critical stability fixes for real-time server error handling and memory safety.

---

### **2. Releases & Breaking Changes**  
- **v0.9.0**: Official release with backward-incompatible changes in backend behavior due to new Flash Attention extensions and OCP FP8 quantization.  
  - [Release v0.9.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.9.0)  
  - **Migration Note**: Users upgrading from prior versions should verify model compatibility with new `flash_attn_ext_rows` and OCP FP8 quants; existing `.gguf` files may require re-conversion if using `--flash-attn` or `--quantize` flags.

---

### **3. New Model & Hardware Support**  
#### **Models & Architectures**  
- Added support for **Clover**, **Limite**, **Metis-1.6**, and **Mistral Large 4** architectures.  
- Added **Drama-3 TTS** model support via `mtmd` module.  
- Added **Meta MobileMoE** (S/M/L variants) and **Ripple-65B** (recursiveAI) models.  
  - [PR #31706: Meta MobileMoE support](https://github.com/ggml-org/llama.cpp/pull/31706)  
  - [PR #31692: Ripple-65B support](https://github.com/ggml-org/llama.cpp/pull/31692)  

#### **Backends & Quantizations**  
- **OCP FP8 E4M3** quantization now supported (new format).  
- **XDNA backend** feature request opened ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725)) — no implementation yet.  
- **WebGPU** gains batched tensor APIs (`get_tensor_n`, `set_tensor_n`) and `MEAN` operator support.  
  - [PR #31473](https://github.com/ggml-org/llama.cpp/pull/31473) | [PR #31591](https://github.com/ggml-org/llama.cpp/pull/31591)

---

### **4. Performance & Optimization**  
- **Flash Attention Efficiency**: `flash_attn_ext_rows` enables unified KV cache optimization for multi-sequence batching, improving throughput in high-concurrency scenarios.  
- **OpenCL**: Improved decode performance on Qualcomm devices via better workgroup utilization and FA support for GQA 2/6 with head size 256.  
  - [PR #31633](https://github.com/ggml-org/llama.cpp/pull/31633)  
- **CUDA**: PR [#31679](https://github.com/ggml-org/llama.cpp/pull/31679) aligns host-side MMVQ batch limits with actual GPU compute capability, preventing underutilization.  
- **SYCL**: Fix for MTP + Q3 quant performance degradation ([#27373](https://github.com/ggml-org/llama.cpp/issues/27373)) reported but not yet resolved.  
- **WebGPU**: Optimized `memset/clear` by avoiding full-buffer bindings and returning `maxBufferSize`.  
  - [PR #31348](https://github.com/ggml-org/llama.cpp/pull/31348)

---

### **5. Stability & Regressions**  
#### **Critical Issues (High Severity)**  
- **Vulkan Device Lost Errors** on Intel Arc B580/B70 and AMD RX 7900 XTX after long-running inference (>7h) — causes empty EOS replies.  
  - [Issue #29526](https://github.com/ggml-org/llama.cpp/issues/29526)  
- **Nondeterministic Results on Intel Arc Pro B70 (BMG G31)** with KHR_coopmat enabled — different outputs per run.  
  - [Issue #31560](https://github.com/ggml-org/llama.cpp/issues/31560)  
- **Flash Attention Fallback to SCALAR Path** on Intel Arc B580 → O(N²) decode degradation and device loss.  
  - [Issue #27638](https://github.com/ggml-org/llama.cpp/issues/27638)  
- **Real-Time Server Crashes on Exceptions** — fixed via `ex_wrapper` and error event propagation.  
  - [PR #31632](https://github.com/ggml-org/llama.cpp/pull/31632)  

#### **Other Notable Bugs**  
- **Gemma 4 Decode Regression (-5%)** on Intel Arc B580 post-#29622 — bisected to token batch handling.  
  - [Issue #30018](https://github.com/ggml-org/llama.cpp/issues/30018)  
- **CUDA Illegal Memory Access** when MTP drafts follow KV cache rollback.  
  - [Issue #31077](https://github.com/ggml-org/llama.cpp/issues/31077)  
- **GGML_ASSERT(buffer)** crash on `qwen4exp` + `draft-mtp`.  
  - [Issue #30860](https://github.com/ggml-org/llama.cpp/issues/30860)

---

### **6. What This Means for Application Developers**  
- **For LLM Serving Platforms**: Use `v0.9.0` to enable efficient multi-sequence batching via `flash_attn_ext_rows`; expect improved throughput on large-scale deployments.  
- **For Edge/Embedded Devs**: OCP FP8 E4M3 support enables higher-precision low-bit quantization for mobile and edge models (e.g., MobileMoE).  
- **For Real-Time Apps**: The fix to prevent server crashes during exceptions ensures more robust streaming endpoints.  
- **For Backend Integrators**: Monitor Vulkan/SYCL performance on Intel Arc GPUs — known regressions persist; consider disabling cooperative matrices (`--coopmat=0`) until [issue #31560](https://github.com/ggml-org/llama.cpp/issues/31560) is resolved.  
- **For CI/CD Pipelines**: Update build scripts to handle `ccache` failures in GitHub Actions ([#31705](https://github.com/ggml-org/llama.cpp/pull/31705)) and FreeBSD Vulkan builds ([#31701](https://github.com/ggml-org/llama.cpp/pull/31701)).  

> ✅ **Recommendation**: Upgrade to `v0.9.0` for new features, but test thoroughly on target hardware — especially Intel Arc and long-running inference scenarios.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-05**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to evolve with critical stability fixes for model serving on Windows and WSL2, particularly around GPU memory handling and tool calling in Qwen models. Key PRs address JSON rendering issues in the Qwen2.5 template (`#19534`) and improve CUDA v13 compatibility for long-context generation (`#17026`), while a new fix enables full GPU memory utilization on NVIDIA RTX Spark N1X laptops via WSL2 (`#19520`). These developments signal strong momentum in optimizing inference across heterogeneous hardware.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, ongoing work suggests potential breaking changes in future versions:  
- The `qwen2.5` library template now correctly renders tool definitions as JSON (fixing `{{ .Function }}` struct dumps — [PR #19534](https://github.com/ollama/ollama/pull/19534)), which may affect downstream agent logic relying on legacy Go formatting.  
- MLX runner now rejects unsupported CUDA devices at startup ([PR #19521](https://github.com/ollama/ollama/pull/19521)), improving early error detection but requiring validation of GPU compatibility before deployment.

---

### **3. New Model & Hardware Support**  
- **Qwen3.5/3.8**: MLX support now honors YaRN rope scaling and mRoPE parameters ([PR #19231](https://github.com/ollama/ollama/pull/19231)), enabling accurate long-context behavior on Apple Silicon.  
- **RTX Spark N1X (NVIDIA)**: WSL2 now properly exposes full GPU memory (up to 80 GB) on unified-memory laptops ([PR #19520](https://github.com/ollama/ollama/pull/19520)), resolving prior memory caps due to firmware/OS limitations.  
- **Kimi Code CLI**: Added native integration via `ollama launch kimi` using config-driven model selection ([PR #19506](https://github.com/ollama/ollama/pull/19506)).  
- **AutoTrust Decision Models**: Now supported through MLX backend ([PR #19399](https://github.com/ollama/ollama/pull/19399)).

---

### **4. Performance & Optimization**  
- **Memory Efficiency**: MLX optimizes Qwen3.8 Flash Next by keeping key projections in BF16 and applying MXFP8 quantization elsewhere, reducing memory pressure without sacrificing quality ([PR #18078](https://github.com/ollama/ollama/pull/18078)).  
- **KV Cache Prediction**: A major bug in VRAM estimation has been identified — `PredictServerVRAM` over-counts KV cache by 4–8x for hybrid models like Qwen3.5/3.8, leading to premature runner eviction even when sufficient memory exists ([Issue #19463](https://github.com/ollama/ollama/issues/19463)). This impacts large model loading under `keep_alive=-1`.  
- **Streaming Latency**: OpenAI-compatible streaming now flushes responses promptly, preventing UI hangs in clients like Chatbox and OpenWebUI ([PR #17027](https://github.com/ollama/ollama/pull/17027)).

---

### **5. Stability & Regressions**  
**Critical**:  
- **Tool Calling Failures**: Multiple reports confirm native tool calling fails on `qwen2.5-coder:7b` and `qwen3:7b` with HTTP 500 errors or silent failures ([Issue #19524](https://github.com/ollama/ollama/issues/19524), [Issue #19439](https://github.com/ollama/ollama/issues/19439)). Likely tied to JSON rendering bugs fixed in `#19534`.  
- **CUDA v13 Crashes**: Long grammar-constrained generations trigger "CUDA error: unspecified launch failure" on RTX 4070 Ti SUPER (driver 595.71.05) — same request works on `cuda_v12` ([Issue #17026](https://github.com/ollama/ollama/issues/17026)). Requires workaround until driver-level fix.  

**High Priority**:  
- **Windows Runner Disconnects**: Intermittent communication loss during tool calls in Open WebUI, especially on Windows with newer GPUs ([Issue #19439](https://github.com/ollama/ollama/issues/19439)).  
- **Vision Model Truncation**: `qwen2.5vl:3b` fails with “token repeat limit reached” on GPU-only vision inference, though CPU fallback works ([Issue #19483](https://github.com/ollama/ollama/issues/19483)).  
- **API Usage Regression**: Cloud `/api/usage` no longer returns session/weekly usage percentages despite UI showing them ([Issue #19511](https://github.com/ollama/ollama/issues/19511)).

---

### **6. What This Means for Application Developers**  
- **Avoid `qwen2.5` tool calling** until `#19534` is deployed — expect malformed function definitions and dropped calls. Use `qwen2.5:7b` only if you can control the template.  
- **Use `cuda_v12` instead of `cuda_v13`** on RTX 40xx cards if running long-context, grammar-constrained tasks. Monitor for driver updates.  
- **Validate GPU memory allocation** on WSL2 systems with unified memory (e.g., RTX Spark N1X); rely on `#19520` patch or wait for official release.  
- **Monitor `OLLAMA_KV_CACHE_TYPE` behavior** — current VRAM prediction is inaccurate for hybrid models, risking unnecessary runner evictions.  
- **Leverage new API endpoints** like `/api/me` for cloud usage stats (requested in [#12532](https://github.com/ollama/ollama/issues/12532)) and consider implementing auto-update checks via proposed API (`#19514`).  
- **Prepare for structured tool output** — `openai: match complete tool result groups by call ID` ([PR #18767](https://github.com/ollama/ollama/pull/18767)) ensures reliable parallel tool execution, crucial for agent workflows.

> 🔗 *For real-time tracking: [GitHub Issues](https://github.com/ollama/ollama/issues) | [Pull Requests](https://github.com/ollama/ollama/pulls)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-05**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues its rapid evolution with a focus on control plane maturity and stability fixes for streaming and cost tracking. Key developments include the introduction of S3 object lock audit sinks, W3C trace propagation across control and data planes, and critical bug fixes around early stream termination and budget window inconsistencies. The release candidate `v1.107.0-rc.3` and stable `v1.108.0` (signed via cosign) signal readiness for production use.

---

### **2. Releases & Breaking Changes**  
- **`v1.108.0`** (stable): Released with enhanced security via cosign signing (`e82a3c6`). Includes fixes for cost accounting, streaming reliability, and model routing.  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.108.0) | Verify: [`cosign verify`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)  
- **`v1.107.0-rc.3`**: RC build from commit `f9778e9`, testing upstream changes ahead of v1.108.0.  
  🔗 [PR #50129](https://github.com/BerriAI/litellm/pull/50129)  

> ⚠️ **Migration Note**: Ensure your proxy configuration accounts for new audit log sinks and control-plane flags (`--control-plane`) introduced in this release cycle.

---

### **3. New Model & Hardware Support**  
- **Qoder Cloud Agents**: Added to Interactions API via PR #50041 — enables agent exposure through standard model aliases with server-side credential management.  
  🔗 [PR #50041](https://github.com/BerriAI/litellm/pull/50041)  
- **Bedrock Converse Tool Replay Fix**: Addresses `signature` replay issues when switching between Anthropic and non-Anthropic models (e.g., GLM 5.3).  
  🔗 [Issue #49969](https://github.com/BerriAI/litellm/issues/49969)  
- **Cloudflare Workers AI Provider Update Request**: Feature request (#21115) to modernize integration with expanded Cloudflare AI endpoints (text-to-image, etc.).  
  🔗 [Issue #21115](https://github.com/BerriAI/litellm/issues/21115)

---

### **4. Performance & Optimization**  
- **Rust Router Core (in progress)**: PR #49513 introduces a pure Rust router core with PythonHost bridge — designed for low-latency, high-throughput routing with minimal GC overhead.  
  🔗 [PR #49513](https://github.com/BerriAI/litellm/pull/49513)  
- **Fan-out Aggregates & Global Usage Metrics**: PR #49656 enables fleet-wide visibility by aggregating usage across dataplanes without single points of failure.  
  🔗 [PR #49656](https://github.com/BerriAI/litellm/pull/49656)  
- **Pre-call Guardrail Early Exit**: PRs #49295 and #49289 skip pre-call guardrails if model routing fails — reduces vendor call latency and cost for invalid model names.  
  🔗 [PR #49295](https://github.com/BerriAI/litellm/pull/49295)

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🚨 High | [#14457](https://github.com/BerriAI/litellm/issues/14457): Usage lost on early client disconnect during streaming | Billing gaps, quota inaccuracies | ✅ Fixed in `v1.108.0` |
| 🚨 High | [#49179](https://github.com/BerriAI/litellm/issues/49179): `/key/update` drops running request cost from budget window | Budget limits bypassed | ✅ Patched in `v1.108.0` |
| 🟡 Medium | [#36168](https://github.com/BerriAI/litellm/issues/36168): Streaming drops upstream `usage` when final chunk has `choices` | Cost billed at full input rate | ✅ Resolved in `v1.108.0` |
| 🟡 Medium | [#50065](https://github.com/BerriAI/litellm/issues/50065): MCP `tools/list` blocks 18–50s on legacy clients | Latency spike post-upgrade | ❌ In progress |
| 🟡 Medium | [#49795](https://github.com/BerriAI/litellm/issues/49795): Reasoning-only prefix loses fallback after mid-stream failure | Client receives no fallback despite partial output | ❌ In progress |

---

### **6. What This Means for Application Developers**  
- **Build more resilient agents**: With improved streaming error handling and fallback logic, ensure your clients handle `MidStreamFallbackError` correctly, especially for reasoning-heavy models.
- **Avoid billing leaks**: Use `v1.108.0+` to prevent missing usage data due to early disconnections or key updates mid-request.
- **Leverage new observability**: The control plane audit trail (PRs #49660–#49662) now supports Splunk, Sentinel, and S3 WORM storage — ideal for compliance (SOC 2, PCI DSS).
- **Future-proof routing**: Prepare for the Rust router core (PR #49513), which will enable faster, safer routing in high-scale deployments.
- **Monitor deprecations**: The new UI banner (#50080) and `/health/test_model` endpoint (#49337) help proactively detect and migrate deprecated models.

> 💡 **Action Item**: Upgrade to `v1.108.0` and review your guardrail and budget configurations — especially if using dynamic key updates or streaming with long-running tools.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-05**

---

### **1. Today's Highlights**  
The v0.1.915-beta release introduces **Qwen3.8-Flash-Next**, enhanced Glass themes (now in Beta), and improved browser integration with file interaction and Composer position controls. Critical fixes address UI lag during long conversations, persistent chat context across GGUF model switches, and memory efficiency gains via lower idle usage and FP8 support.

---

### **2. Releases & Breaking Changes**  
- **v0.1.915-beta**:  
  - Added **Qwen3.8-Flash-Next** model support.  
  - Polished **Glass themes** (Beta) for desktop and web.  
  - Introduced **Composer position slider** and **browser file interaction**.  
  - Reduced idle memory usage; preserved chat context when switching GGUF models.  
  - Faster MLX loading and native FP8 inference support.  
  🔗 [Release Notes](https://github.com/unslothai/unsloth/releases/tag/v0.1.915-beta)

---

### **3. New Model & Hardware Support**  
- **New Models**:  
  - `Qwen3.8-Flash-Next` added to core model registry.  
  - Support expanded for **Anima, Chroma1-HD, MOSS-Image, Krea 2 (int4/FP8)** via single `.safetensors` files.  
  - Community LoRAs for Anima/Krea/MOSS now loadable via ComfyUI-style formats.  
  🔗 [PR #16710](https://github.com/unslothai/unsloth/pull/16710), [PR #16711](https://github.com/unslothai/unsloth/pull/16711)

- **Hardware & Backend**:  
  - Enhanced **MLX backend** performance on Apple Silicon (macOS).  
  - Improved **CUDA graphs** support for decode-heavy workloads.  
  - Expanded **S3 audio ingestion** with Unicode-safe JSONL parsing and path rewriting.  
  🔗 [PR #16725](https://github.com/unslothai/unsloth/pull/16725), [PR #16723](https://github.com/unslothai/unsloth/pull/16723)

---

### **4. Performance & Optimization**  
- **Memory & Throughput**:  
  - Idle memory usage reduced significantly post-v0.1.915-beta.  
  - **FP8 inference** now supported natively in MLX and CUDA paths.  
  - **Decode with CUDA graphs by default** in `generate()` — reduces kernel launch overhead (from ~675 kernels per step to near-zero).  
    🔗 [PR #16691](https://github.com/unslothai/unsloth/pull/16691)  

- **Batching & Ingestion**:  
  - RAG ingest now batches **within documents**, improving throughput from ~99 ms/chunk (batch-of-1) to **~2.07 ms/batch**.  
    🔗 [Issue #16715](https://github.com/unslothai/unsloth/issues/16715)  

- **Audio Processing**:  
  - Audio.cpp model size estimation now based on measured peaks, reducing false refusals.  
    🔗 [PR #16628](https://github.com/unslothai/unsloth/pull/16628)

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR | Description |
|------|----------|--------|--------|-------------|
| `search_conversation` tool missing (repeated) | High | Open | [PR #16718](https://github.com/unslothai/unsloth/pull/16718) | Fails if embedding model fails to load; now preserves searchability even with archiving failure. |
| Long conversation UI lag (web + desktop) | High | Open | — | Performance regression under heavy chat history; reported in multiple issues. |
| AppImage UI lag (desktop) | Medium | Open | — | Lag observed on Linux systems (e.g., Slackware). |
| S3 audio JSONL fails on Unicode separators (U+2028/U+2029) | Critical | Open | [PR #16725](https://github.com/unslothai/unsloth/pull/16725), [PR #16723](https://github.com/unslothai/unsloth/pull/16723) | Fixed: split only on LF after newline normalization. |
| Embedding model download blocks RAG indexing | High | Open | [PR #16722](https://github.com/unslothai/unsloth/pull/16722) | Now waits for download instead of failing all files. |

---

### **6. What This Means for Application Developers**  
- **Build robust agents with stable state**: Context persistence across GGUF model switches is now reliable — ideal for multi-model workflows.  
- **Optimize for low-latency inference**: Enable `decode_with_cuda_graphs=True` by default in `generate()` calls for up to **~70% reduction in kernel overhead** on T4-class GPUs.  
- **Handle large-scale RAG pipelines safely**: The new batching logic and retry behavior for failed embeddings ensure consistent document processing even during model downloads.  
- **Extend functionality via CLI & Studio commands**: `/skills`, `/context`, and `/rewind` are now accessible without a loaded model — perfect for agent scripting and debugging.  
- **Avoid regressions in fine-tuning flows**: The fix for `cancelled_jobs` being omitted from paginated results ensures accurate monitoring in production pipelines.  

> 📌 **Action Item**: Update to **v0.1.915-beta** to benefit from FP8, lower memory footprint, and critical stability fixes. Monitor the `search_conversation` and `long-conversation-lag` issues if deploying in high-load environments.

---  
*Digest generated: 2026-11-05 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*