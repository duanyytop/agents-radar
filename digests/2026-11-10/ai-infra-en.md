# AI Infrastructure Digest 2026-11-10

> Generated: 2026-11-10 04:17 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

---

### **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-10**

---

#### **1. Ecosystem Overview**  
The AI inference and serving landscape in late 2026 is defined by a sharp bifurcation between **high-performance, hardware-optimized engines** (vLLM, SGLang) and **developer-friendly, agentic runtime platforms** (Ollama, Unsloth). While vLLM leads in kernel-level efficiency and SM120/Blackwell readiness, Ollama and Unsloth are accelerating adoption of on-device agent capabilities through native models like Ripple Preview and enhanced local workflows. LiteLLM remains the de facto gateway for multi-provider orchestration, but stability gaps persist. The ecosystem is maturing rapidly—driven by next-gen hardware (Blackwell, gfx1151), emerging quantization formats (MXFP4/MXFP8), and growing demand for structured outputs and real-time audio.

---

#### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Releases (24h) | Breaking Changes |
|---------------|-------------|----------|----------------|------------------|
| **vLLM**      | 147         | 32       | None           | None             |
| **SGLang**    | 153         | 41       | None           | None             |
| **llama.cpp** | 194         | 57       | `b12238`+      | None             |
| **Ollama**    | 178         | 49       | v0.40.16       | None             |
| **LiteLLM**   | 132         | 29       | v1.108.4 (LTS) | None             |
| **Unsloth**   | 165         | 35       | None           | None             |

> ✅ *Note: High activity across all projects indicates intense focus on stability and feature delivery ahead of Blackwell and AMD hardware rollouts.*

---

#### **3. Model Support Race**

| New Model / Hardware | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash (SM120)** | ✅ (active dev) | ⚠️ FA4 crash (Issue #42012) | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-2.4T-A95B (ROCm/gfx950)** | ✅ (tracking) | ✅ (issues open) | ❌ | ✅ (fixed VRAM) | ❌ | ❌ |
| **Gemma 4 E2B/E4B (mtmd/audio)** | ❌ | ❌ | ✅ (`mtmd_audio_stream`) | ❌ | ❌ | ❌ |
| **Ripple Preview (65B agentic)** | ❌ | ❌ | ❌ | ✅ (new model) | ❌ | ❌ |
| **MXFP4/MXFP8 Quantization** | ✅ (integrated) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **AMD gfx1151 (Strix Halo)** | ⚠️ (MLA issues) | ✅ (decode NaN) | ✅ (logits bug) | ✅ (VRAM fix) | ❌ | ✅ (SDPA fixes) |

> 🏆 **Leader**: **vLLM** leads in cutting-edge hardware support (SM120, ROCm), with **Ollama** emerging as the top choice for new agentic models. **llama.cpp** excels in edge and embedded device support (Hexagon, SpacemiT, WebGPU).

---

#### **4. Performance Frontier**

| Focus Area               | vLLM                          | SGLang                        | llama.cpp                     | Ollama                         | LiteLLM                      | Unsloth                     |
|--------------------------|-------------------------------|-------------------------------|-------------------------------|--------------------------------|------------------------------|-----------------------------|
| **KV Cache Optimization** | ✅ Deep (32MiB workspace reduction) | ⚠️ Moderate (no major updates) | ⚠️ Critical bug (truncation) | ✅ Memory savings (Qwen3.8)   | ❌ No updates                | ✅ Prompt caching fixes     |
| **Batching & Throughput** | ✅ MoE dynamic tuning, CUDA graphs | ⚠️ +33–45% decode latency (v0.5.23) | ✅ Row-faithful FlashAttention | ✅ MLX concurrent gen (PR #19197) | ✅ Streaming reuse (PR #50786) | ✅ VRAM-aware retries       |
| **Quantization Efficiency** | ✅ MXFP4/8, Marlin→Humming shift | ❌ Limited support            | ✅ SYCL Q4_0 U4 GEMM (~30% gain) | ❌ No quant-specific optimizations | ❌ Cost drift issues         | ✅ INT8 fallback logic      |
| **Distributed Serving**   | ✅ Multi-GPU, spec decoding    | ✅ PD disaggregation roadmap   | ❌ Local-only                 | ❌ Not applicable              | ✅ Multi-provider routing    | ❌ No distributed scaling   |
| **Kernel-Level Optimizations** | ✅ SM120 MoE, CUTLASS, AITER | ⚠️ Triton/FA4 instability     | ✅ Metal/Vulkan/CUDA fine-tuning | ❌ Minimal                    | ❌ No low-level control      | ✅ SDPA guard handling      |

> 🔥 **Key Insight**: vLLM is at the forefront of **kernel and hardware-specific optimization**, while **Ollama** and **llama.cpp** dominate in **local runtime performance and edge deployment**.

---

#### **5. Layer Positioning**

| Project       | Primary Layer                  | Key Differentiator                                      |
|---------------|--------------------------------|----------------------------------------------------------|
| **vLLM**      | **Inference Engine**           | Ultra-high throughput, optimized kernels for Hopper/Blackwell; target for cloud-scale deployments |
| **SGLang**    | **Inference Engine + Agent Framework** | Prefill-decode disaggregation, advanced speculative decoding, strong focus on agent pipelines |
| **llama.cpp** | **Local Runtime / Edge SDK**   | Cross-platform, minimal dependencies, ideal for mobile/embedded systems and real-time audio |
| **Ollama**    | **Agent Runtime / Developer Platform** | On-device agent models (e.g., Ripple Preview), simple CLI, built-in modelfiles, UI-first design |
| **LiteLLM**   | **LLM Gateway / Orchestration Layer** | Multi-provider routing, cost tracking, OpenAI-compatible proxy — critical for production gateways |
| **Unsloth**   | **Performance-Optimized Runtime** | Aggressive GPU memory management, diffusion acceleration, lightweight local inference |

> 🧩 **Strategic Takeaway**: vLLM and SGLang serve as **cloud-grade inference backends**; Ollama and Unsloth are **agent-first platforms**; LiteLLM acts as the **integration layer**; llama.cpp is the **edge enabler**.

---

#### **6. Trend Signals**

1. **Hardware-First Optimization Is Now Mandatory**  
   - SM120 (Blackwell) and AMD gfx1151 are no longer "future" targets—they’re live development frontiers. vLLM and SGLang are racing to stabilize CUDA graph capture and Triton kernel dispatch.  
   → *Watch*: Adoption of **MXFP4/MXFP8** and **MoE kernel tuning** on new architectures.

2. **Agent Workloads Are Driving Stack Innovation**  
   - Ollama’s Ripple Preview and Unsloth’s image generation improvements show that **on-device agents** are becoming viable.  
   → *Watch*: Integration of **structured output**, **tool calling**, and **real-time audio** in local runtimes.

3. **Stability Over Features Is the New Priority**  
   - Multiple high-severity bugs (silent failures, UAF, memory corruption) across vLLM, SGLang, and llama.cpp signal that **production readiness is still fragile** despite rapid feature growth.  
   → *Watch*: Use of LTS releases (LiteLLM v1.108.4) and CI images (vLLM deepseekv41-flash-0909) for reliability.

4. **Quantization Unification Is Coming**  
   - vLLM’s move from legacy Marlin to Humming backend signals a push toward **unified, modern quantization paths** across NVIDIA GPUs. This will improve portability and performance.  
   → *Watch*: How this shift affects downstream tools and fine-tuning frameworks.

5. **Gateway Complexity Is Growing**  
   - LiteLLM’s open rate-limiting and cost-tracking issues highlight the **hidden complexity of multi-provider orchestration**. As more teams adopt hybrid models, these gateways become critical failure points.  
   → *Watch*: Tools for observability and debugging in LiteLLM-like environments.

---

### **Final Recommendation for Application Developers**
- **For high-throughput, cloud-native inference**: Choose **vLLM** (with caution on SM120 until #56892 fixed).
- **For agent applications with real-time input/output**: Use **Ollama** (Ripple Preview) or **Unsloth**.
- **For edge/mobile/local deployment**: **llama.cpp** is unmatched.
- **For multi-provider routing and cost control**: **LiteLLM** (use `lts` tag) — but monitor for rate-limiting bugs.
- **Always test with latest CI builds and avoid unstable versions** (e.g., SGLang v0.5.23, pre-b12238 llama.cpp).

> ✅ *Pro Tip: For production, combine vLLM (engine) + LiteLLM (gateway) + Ollama (agent layer) for a robust, modular stack.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-11-10**

#### **1. Today's Highlights**  
The vLLM project continues to prioritize performance and correctness on next-generation hardware, with critical focus on **SM120 (Blackwell)** support for DeepSeek-V4.1-Flash and ROCm/AMD GPU optimizations for Qwen3.8 models. Key work includes a fix for CUDA graph capture failures on RTX PRO 6000 Blackwell (Issue #56892), ongoing refinement of MoE kernels for SM120 (PR #63533), and active efforts to unify quantization backends across architectures (Issue #65560).

#### **2. Releases & Breaking Changes**  
*None* — No new releases or breaking API/config changes reported in the last 24 hours.

#### **3. New Model & Hardware Support**  
- **SM120 (RTX PRO 6000 Blackwell)**: Active development to enable full support for `DeepSeek-V4.1-Flash` and `NVFP4 MoE`, with ongoing kernel fixes for `cutlass` backend (Issue #51525, PR #63533).  
- **ROCm / AMD (gfx950 / MI355X)**: Performance optimization tracking for `Qwen3.8-2.4T-A95B` and `Qwen3.8-Flash-Next` (Issues #57149, #59575), including AITER kernel updates (PR #66596) and KV connector improvements (PRs #66514, #66712).  
- **New Quantization Format**: `MXFP4` and `MXFP8` are now being integrated into MoE and dense layers across both CUDA and ROCm backends (Issue #37753, Issue #65560).  

> 🔗 [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [Issue #57149](https://github.com/vllm-project/vllm/issues/57149)

#### **4. Performance & Optimization**  
- **SM120 Decode Throughput**: Extremely low decode throughput observed with `--enforce-eager` on 8x Blackwell GPUs; CUDA graphs unusable due to missing SM120 graph capture support (Issue #56892).  
- **MoE Kernel Efficiency**: Dynamic `BLOCK_M` tuning for contiguous-grouped MoE on SM120 improves occupancy and reduces padding waste (PR #63533).  
- **KV Cache Memory Savings**: Reducing FlashInfer workspace size from 394 MiB to 32 MiB increased KV-cache capacity by **21.27%** on an RTX 4060 (Issue #63399).  
- **Speculative Decoding Overhead**: EAGLE/MTP prefix-cache last-block drop causes **~30–40% batch throughput loss** on prefix-reusing workloads (Issue #53670).  
- **Quantization Efficiency**: Proposal to replace legacy Marlin with Humming backend for all NVIDIA architectures (Issue #65560), enabling unified, modern kernel paths for INT4/INT8 GPTQ/AWQ, FP8, MXFP4, etc.

> 🔗 [Issue #53670](https://github.com/vllm-project/vllm/issues/53670) | [Issue #63399](https://github.com/vllm-project/vllm/issues/63399) | [Issue #65560](https://github.com/vllm-project/vllm/issues/65560)

#### **5. Stability & Regressions**  
- **Critical Bug (High Severity)**: `VLLM_CUTLASS NVFP4 MoE` on SM120 silently returns empty completions (`content: null`) without error, consuming entire `max_tokens` budget (Issue #51525). *No fix PR yet.*  
- **ROCm Kernel Misdispatch**: `ROCM_AITER_MLA` selects non-persistent kernel that returns uncorrelated output under specific conditions (fp8 Q+KV, gqa_ratio=16, decode_qlen=3–4) (Issue #66141). *Fix PR pending.*  
- **Speculative Decoding Divergence**: MTP speculative decoding diverges from target-only at high K/n/L values, causing inconsistent outputs (Issue #63593).  
- **Benchmark Flaw**: Warmup requests were incorrectly cached, inflating measured throughput (Issue #66698); fixed in PRs #66701 (#66707).  

> 🔗 [Issue #51525](https://github.com/vllm-project/vllm/issues/51525) | [Issue #66141](https://github.com/vllm-project/vllm/issues/66141) | [PR #66701](https://github.com/vllm-project/vllm/pull/66701)

#### **6. What This Means for Application Developers**  
- **Avoid `--enforce-eager` on Blackwell GPUs** until SM120 CUDA graph support is finalized (Issue #56892).  
- **Validate MoE model outputs rigorously on SM120**, especially when using `VLLM_CUTLASS` + `NVFP4` — known silent failure exists (Issue #51525).  
- **Use `cache_salt` in benchmarks** to avoid warmup cache pollution (fixed in #66701/#66707).  
- **Monitor speculative decoding behavior** on hybrid attention models like Qwen3.8-GDN — expect up to 40% throughput loss under certain configurations (Issue #53670).  
- **Prepare for future quantization shifts**: Marlin will be phased out in favor of Humming (Issue #65560), ensuring better performance and portability across Hopper/Blackwell.  

> 📌 Pro Tip: For production deployments on Blackwell or AMD MI355X, test with latest CI images (`vllm/vllm-openai:deepseekv41-flash-0909` and ROCm builds) and validate output consistency via `--response-role` and `derender` endpoints (PR #63357).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-10

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to mature with significant progress in **prefill-decode disaggregation (PD)** and **multi-backend support**, especially for emerging hardware like SM120 (Blackwell) and AMD gfx1151. Critical stability issues—particularly around **CUDA graph capture failures on SM120**, **use-after-free in UnifiedRadixCache**, and **AMD Triton attention bugs**—have emerged as top concerns, highlighting the need for robust validation across new architectures.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable version remains `v0.5.23`, which introduced notable performance regressions (see #49336).

---

### **3. New Model & Hardware Support**  
- ✅ **SM120 (RTX 50-series Blackwell)**: Active development for full model support; issues persist with FA4 backend crashes during CUDA graph capture (#42012).  
- ✅ **AMD gfx1151 (Strix Halo)**: New issues reported for decode attention (`MLA-shaped Triton`) and deterministic inference startup failure (#48967, #48968).  
- ✅ **Cambricon MLU Backend**: Roadmap initiated (#45615) for future integration.  
- ✅ **Mooncake L3 + HiCache**: Experimental support progressing with elastic EP scale-up via #47859.  
- ✅ **Kimi-K3.1-Pro MI35x**: Documentation updated to align with InferenceX benchmarks (#49453).

> 🔗 [Issue #45615](https://github.com/sgl-project/sglang/issues/45615) | [PR #47859](https://github.com/sgl-project/sglang/pull/47859)

---

### **4. Performance & Optimization**  
- 📈 **DeepSeek-V4 prefill throughput**: On 4× RTX PRO 6000 (SM120), SGLang achieves ~2–7K tok/s vs vLLM/Marlin’s ~12.5K — a clear gap needing tuning guidance (#33422).  
- ⚠️ **Decode regression**: v0.5.22 → v0.5.23 upgrade causes **+33–45% per-step decode time at concurrency 12** on Hopper (8x H20-3e), impacting long-context workloads (#49336).  
- 💡 **Qwen3 text encoder optimization**: A single FlashInfer kernel applied to RoPE computation reduces host-bound latency by ~70–95ms per request on GB200 (#49448).  
- 🔥 **Diffusion perf improvements**: Breakable CUDA graphs now supported for SANA-Video 2.0 (#41501), and CFG arithmetic fixed for multi-GPU consistency (#49162).

> 🔗 [Issue #33422](https://github.com/sgl-project/sglang/issues/33422) | [PR #49448](https://github.com/sgl-project/sglang/pull/49448)

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| 🔴 High | [#49336](https://github.com/sgl-project/sglang/issues/49336) | **33–45% decode regression** post-v0.5.22 on Hopper (8x H20-3e) | ❌ Pending |
| 🔴 High | [#49173](https://github.com/sgl-project/sglang/issues/49173) | DSV4.1 DeepGEMM indexer drops SM120/SM121 support → **8x prefill regression on GB10** | ❌ Pending |
| 🔴 High | [#49361](https://github.com/sgl-project/sglang/issues/49361) | **Use-After-Free in UnifiedRadixCache** exposes tenant KV data | ❌ Pending |
| 🟡 Medium | [#42012](https://github.com/sgl-project/sglang/issues/42012) | FA4 backend crashes on SM120 hybrid extend reshape | ❌ Only workaround: use Triton |
| 🟡 Medium | [#48967](https://github.com/sgl-project/sglang/issues/48967) | AMD gfx1151 MLA Triton decode returns NaN on ragged batches | ❌ No fix yet |

> 🔗 All listed issues are open and actively discussed.

---

### **6. What This Means for Application Developers**  
- Avoid `v0.5.23` for production deployments involving long-context decoding or high concurrency on Hopper — consider pinning to `v0.5.22`.  
- If using **SM120 hardware**, avoid `--attention-backend fa4` until #42012 is resolved; fall back to **Triton** for stability.  
- For **agent applications requiring cache isolation**, be cautious with `UnifiedRadixCache` due to UAF risk (#49361); monitor for data exposure in shared environments.  
- Leverage **breakable CUDA graphs** (via #41501 and #49162) for diffusion pipelines to improve scalability and consistency across GPUs.  
- Expect **ongoing instability** on AMD gfx1151 and Cambricon MLU until dedicated CI and testing infrastructure matures.

> 🛠️ Pro tip: Use `--enable-deterministic-inference` cautiously on AMD — it may fail due to LDS limits (#48968). Validate on target hardware early.

---  
*Data source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*  
*Digest generated: 2026-11-10*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-10**

---

### **1. Today's Highlights**  
The latest updates focus on enhancing OpenAI-compatible API robustness, particularly around structured output formatting and audio streaming support. Key improvements include better JSON schema handling in `response_format`, expanded real-time audio processing for Gemma 4 models via `mtmd`, and critical fixes to prevent silent memory corruption in sparse MoE routing.

---

### **2. Releases & Breaking Changes**  
- **`b12242`**: Fixed lazy grammar behavior when `response_format` is set with tools ([#31956](https://github.com/ggml-org/llama.cpp/pull/31956))  
- **`b12240`**: Added support for converting `text.format.json_schema` to completions in the Responses API ([#26145](https://github.com/ggml-org/llama.cpp/pull/26145))  
- **`b12238`**: Introduced `/v1/audio/speech` endpoint with full OpenAI compatibility, including WAV output and PCM/S16 rounding alignment ([#31763](https://github.com/ggml-org/llama.cpp/pull/31763))  
- **`b12237`**: Enabled `mtmd` support for Gemma 4 input audio streams using 480ms steps ([#31965](https://github.com/ggml-org/llama.cpp/pull/31965))  

> 💡 *No breaking changes; backward compatibility preserved across all new features.*

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - Full `mtmd_audio_stream` support added for **Gemma 4 E2B/E4B** models ([#31561](https://github.com/ggml-org/llama.cpp/issues/31561))  
- **Hardware & Backends**:  
  - **Hexagon**: Added SSM_SCAN op support for v75/v81/v85 Android and WoS devices ([#31921](https://github.com/ggml-org/llama.cpp/pull/31921))  
  - **SpacemiT (RISC-V)**: Enabled Q4_1 32x256 repack and GATED_DELTA_NET dispatch via RVV kernels ([#31929](https://github.com/ggml-org/llama.cpp/pull/31929), [#31897](https://github.com/ggml-org/llama.cpp/pull/31897))  
  - **WebGPU**: Added `PAD_REFLECT_1D` and `COL2IM_1D` ops for TTS vocoders ([#31877](https://github.com/ggml-org/llama.cpp/pull/31877), [#31908](https://github.com/ggml-org/llama.cpp/pull/31908))  
- **Quantization**:  
  - External PLE file loading now supported via `--ple` alias for `--shard` ([#31185](https://github.com/ggml-org/llama.cpp/pull/31185))

---

### **4. Performance & Optimization**  
- **Kernel-Level Optimizations**:  
  - Metal backend now dynamically adapts to AMD eGPU wavefront width (64-wide) instead of assuming 32-wide SIMD groups ([#31994](https://github.com/ggml-org/llama.cpp/pull/31994))  
  - Vulkan: New narrow-tile configs for N ≤ 32 improve matrix multiplication performance ([#31990](https://github.com/ggml-org/llama.cpp/pull/31990))  
  - CUDA: Opt-in row-faithful FlashAttention dispatch (`GGML_CUDA_FATTN_ROW_FAITHFUL`) improves decode fidelity on Ada/Blackwell GPUs ([#31992](https://github.com/ggml-org/llama.cpp/pull/31992))  
- **SYCL**: Enabled `Q4_0` weights to be read as `u4` in oneDNN gemm via `GGML_SYCL_Q4_0_U4_GEMM` env var — reduces matmul overhead by up to ~30% on large matrices ([#31993](https://github.com/ggml-org/llama.cpp/pull/31993))  
- **CPU**: Elbrus (E16C) now routes through x86 SIMD path, achieving **9x prompt speedup** vs native code ([#31989](https://github.com/ggml-org/llama.cpp/pull/31989))

---

### **5. Stability & Regressions**  
- **Critical**:  
  - **KV cache truncation bug** in `/v1/chat/completions` causes incorrect outputs under high load ([#11970](https://github.com/ggml-org/llama.cpp/issues/11970)) — *high priority, ongoing investigation*  
  - **Sparse MoE memory corruption** due to stale allocation plan reuse on identity change ([#28448](https://github.com/ggml-org/llama.cpp/issues/28448)) — *silent corruption, affects dynamic topologies*  
- **High Impact**:  
  - **SYCL + MoE**: Non-deterministic `logprobs` across identical requests despite fixed seed ([#31206](https://github.com/ggml-org/llama.cpp/issues/31206))  
  - **AMD ROCm (gfx1151)**: Wrong logits triggered by prompts longer than `n_ubatch` ([#28211](https://github.com/ggml-org/llama.cpp/issues/28211))  
- **Fixes in Progress**:  
  - PRs addressing `ggml_backend_sched_alloc_splits` reallocation crash ([#28753](https://github.com/ggml-org/llama.cpp/issues/28753)) and `response_format` schema nesting issues ([#28697](https://github.com/ggml-org/llama.cpp/issues/28697)) are active.

---

### **6. What This Means for Application Developers**  
- **Build more reliable agents**: With improved structured output handling (JSON Schema, tool calling), your apps can safely rely on deterministic, schema-enforced responses from LLMs.  
- **Enable real-time audio workflows**: The new `/v1/audio/speech` and `mtmd` support unlocks low-latency voice assistants and speech synthesis pipelines—ideal for WebUIs and telephony integrations.  
- **Optimize inference cost**: Use `GGML_SYCL_Q4_0_U4_GEMM` or `GGML_CUDA_FATTN_ROW_FAITHFUL` to reduce latency and memory pressure on GPU/CPU backends.  
- **Avoid silent failures**: Monitor for MoE-related crashes and KV cache truncation—especially if using dynamic batching or speculative decoding.  
- **Future-proof your stack**: Early adoption of SpacemiT, Hexagon, and WebGPU support positions you for edge AI, mobile, and embedded deployment.

👉 *For production use: Pin to `b12238` or later, avoid `b12237` if using non-Gemma 4 models with realtime audio.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-10**

---

### **1. Today's Highlights**  
The latest release, **v0.40.16**, introduces *Ripple Preview* — a 65B dense agentic coding model from Ricursive Intelligence — marking a major leap in on-device agent capabilities. Critical fixes to VRAM accounting and GPU splitting have been merged (PR #19632), resolving long-standing issues that caused models to be incorrectly evicted or split across GPUs unnecessarily. These changes significantly improve stability and resource predictability, especially for multi-GPU and high-memory workloads.

---

### **2. Releases & Breaking Changes**  
- **v0.40.16** includes:  
  - 🚀 Launch of **Ripple Preview** (65B dense, agentic coding):  
    ```sh
    ollama run ripple-preview
    ```  
    [Library Entry](https://ollama.com/library/ripple-preview) | [GitHub Release](https://github.com/ollama/ollama/releases/tag/v0.40.16)  
  - ✅ Memory optimization: `Qwen3.8 Flash Next` now uses **~27 GiB less memory on Apple silicon**, improving performance on M-series chips.  
  - 🔧 Internal configuration updates: `OLLAMA_NUM_PARALLEL=1` behavior clarified; PRs confirm it now respects concurrency limits properly.

> ⚠️ No breaking API changes reported. Existing workflows remain compatible.

---

### **3. New Model & Hardware Support**  
- **New Model**:  
  - **Ripple Preview** (65B, dense, agentic coding) — first Ollama-native model from Ricursive Intelligence. Ideal for complex code generation and reasoning tasks.  
    [Model Library](https://ollama.com/library/ripple-preview)  

- **Hardware & Backend Improvements**:  
  - **ROCm support**: Fixes continue to resolve VRAM misreporting and GPU splitting issues on AMD systems (see Issue #17251, PR #19632).  
  - **Vulkan (AMD RADV)**: Performance regression issue (#19201) remains open but is being investigated; no workaround confirmed yet.  
  - **Windows**: Updated handling of process enumeration in updater (PR #19625) prevents crashes when >512 processes are active.

---

### **4. Performance & Optimization**  
- **Memory Efficiency**:  
  - `Qwen3.8 Flash Next` now uses **~27 GiB less VRAM on Apple Silicon**, enabling better utilization on M-series Macs with limited RAM.  
- **Concurrency & Latency**:  
  - PR #19197 adds **MLX concurrent generation support** via `OLLAMA_NUM_PARALLEL`, allowing multiple requests to share projection/FFW layers while maintaining attention isolation. This reduces first-token latency under load.  
  - PR #17144 re-enables parallel request handling for `qwen35` and `qwen35moe` after upstream llama.cpp fix (March 2026).  
- **Prompt Processing**:  
  - Issue #19282 highlights suboptimal prompt processing performance on 16GB M4 — community guidance sought for tuning GGUF quantization and context window usage.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR | Notes |
|--------|------|-------|--------|------|
| 🔴 High | `ollama ps` reports incorrect VRAM usage vs actual ROCm-SMI | Open | [PR #19632](https://github.com/ollama/ollama/pull/19632) | Fixed in v0.40.16; critical for monitoring and resource planning |
| 🔴 High | `OLLAMA_LOAD_TIMEOUT` and `OLLAMA_KEEP_ALIVE` too short (5 min default) | Open | N/A | Users report frequent disconnections during long chats; feature request (#19624, #19616) |
| 🟡 Medium | `ollama pull` fails behind corporate proxy (403 Forbidden) despite working `curl` | Closed | [Issue #19604](https://github.com/ollama/ollama/issues/19604) | Proxy cert/config not properly passed to HTTP client |
| 🟡 Medium | Windows updater crashes with >512 processes | Closed | [PR #19625](https://github.com/ollama/ollama/pull/19625) | Fixed: byte count vs PID count mismatch |
| 🟡 Medium | `gemma4:26b` returns empty response after tool call if `think: false` | Open | N/A | May affect agent pipelines using tool use without thinking |
| 🟡 Medium | Qwen3.5 4B returns only `thinking` field in long conversations | Open | N/A | Suggests state or token accumulation bug |

> ✅ **Fixed in v0.40.16**: VRAM accounting, GPU splitting, updater crash, and proxy 403 (via config tweaks).

---

### **6. What This Means for Application Developers**  
- **Agent & Tooling Workflows**: Ripple Preview enables advanced on-device agent logic with minimal latency — ideal for local IDE assistants, autonomous coding agents, and LLM gateways.  
- **Multi-Modal Use**: The ongoing feature request (#4296) for image embeddings via `/api/embeddings` is critical for building RAG systems with visual data; consider tracking progress.  
- **Resource Management**: With improved VRAM accounting (PR #19632), developers can now rely on `ollama ps` for accurate GPU memory visibility — essential for containerized or edge deployments.  
- **Configuration Tuning**: Increase `OLLAMA_LOAD_TIMEOUT` and `OLLAMA_KEEP_ALIVE` beyond defaults (e.g., 1800s) to avoid session drops during long interactions.  
- **Architecture Planning**: For AMD/ROCm users, ensure you’re on v0.40.16+ to avoid model eviction or improper GPU allocation. Avoid `qwen35`/`qwen35moe` parallelism until explicit support is confirmed post-upstream fix.  

> 💡 **Pro Tip**: Use `--modelfile` with relative globs cautiously — PR #19628 fixes path resolution bugs when Modelfile directories contain special characters like `[Q4]`.

---

*Data source: github.com/ollama/ollama | Last updated: 2026-11-10*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-10**

#### **1. Today's Highlights**
The latest LTS release, `v1.108.4`, stabilizes critical cost tracking and rate-limiting behavior across multi-provider deployments. Key fixes address token accounting drift in TPM limits, JSON-RPC `id` stripping, and incorrect spending calculations for Anthropic models with custom providers. New support for Vercel AI Gateway decisions and GPT-Image-2 deprecation dates improves compatibility and operational clarity.

#### **2. Releases & Breaking Changes**
- **v1.108.4 (LTS)**: Released today as the latest stable version.  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.108.4)  
  📌 Use `ghcr.io/berriai/litellm:lts` to always pull the most recent LTS patch.  
  ⚠️ No breaking changes reported; this is a stability-focused update with multiple bug fixes impacting routing, cost tracking, and request handling.

#### **3. New Model & Hardware Support**
- ✅ **Vercel AI Gateway** added as a Decisions provider via PR #50642. Requests now route correctly instead of failing with 400s.
- ✅ **Glimpse-1.0 (Together AI)** added to cost map via PR #50830.
- ✅ **GPT-Image-2 shutdown date** (2026-11-10) documented in pricing catalog via PR #50829.
- ✅ **AWS Bedrock Converse API** now supports `performanceConfig.latency="optimized"` via PR #50809.

#### **4. Performance & Optimization**
- ✅ **Streaming efficiency boost**: PR #50786 reuses upstream choice objects during streaming, reducing CPU overhead on every chunk for providers like DeepSeek, Mistral, Groq, and Anthropic. Expected to reduce proxy CPU usage by ~15–25% under high-throughput streaming workloads.
- ✅ **Token counting precision**: PR #50734 ensures custom-named deployments (e.g., Azure AI Foundry) use their base model’s tokenizer for accurate cost estimation.
- ✅ **Prompt-only token count accuracy**: PR #50783 forces bare prompt requests to use provider-side token counting (not local estimate), improving consistency—especially for Claude and Gemini.

#### **5. Stability & Regressions**
| Severity | Issue | Description | Fix PR |
|--------|------|-------------|--------|
| High | #23741 | Anthropic 400 error due to `vector_store_ids` being passed despite not supported | ❌ Open |
| High | #49675 | TPM limiter outlives its window under upstream 429s → false rate limiting | ❌ Open |
| Medium | #47675 | `response_cost` null when `custom_llm_provider=anthropic` but pricing is elsewhere | ❌ Open |
| Medium | #49479 | `id` field stripped from JSON-RPC payloads due to internal param collision | ❌ Open |
| Medium | #47340 | `tpm_limit` never resets with in-memory cache — key permanently locked after exhaustion | ❌ Open |
| Low | #50434 | Intermittent 503/APIConnectionError with Gemini through LiteLLM | ❌ Open |

> 💡 *Note: Several high-severity issues remain open, particularly around rate limiting, cost tracking, and malformed request forwarding.*

#### **6. What This Means for Application Developers**
- **Cost visibility is improving**: Ensure your `model_prices_and_context_window.json` includes all relevant providers and models (e.g., Glimpse-1.0, GPT-Image-2). Use `ghcr.io/berriai/litellm:lts` to avoid regressions.
- **Avoid relying on legacy defaults**: PR #50720 warns about deprecated empty `models` lists at boot — migrate teams/keys to explicit model lists.
- **Streaming apps must handle metadata carefully**: Be aware that `id` fields may be stripped in JSON-RPC via `pass_through_endpoints`. Use `include_fallback_errors` with care.
- **Monitor rate limit behavior**: The v3 rate limiter can halve effective RPM/TPM limits (per #34140), so verify configurations post-upgrade.
- **Use `cost-based-routing` cautiously**: Multiple deployments per model name currently cause `compression_savings_spend` and `prompt_caching_spend` to report $0 (PR #37117).

> 🛠️ **Action Items**: Audit cost tracking, review model aliases and deployment configs, and test streaming workflows with new `lts` image.

---  
*Data source: GitHub @ BerriAI/litellm | Updated: 2026-11-10*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-10**

---

### **1. Today's Highlights**  
The Unsloth team continues to advance core inference and diffusion performance, with multiple PRs focused on GPU memory management, ROCm/Windows stability, and prompt caching optimizations. Key work includes VRAM-aware retry logic for image generation (`PR #17339`), improved quantization routing for pre-Blackwell GPUs (`PR #17343`), and fixes to SDPA kernel handling on multi-GPU setups. Meanwhile, user-facing feature requests highlight growing demand for batch chat creation, model tagging, and persistent preferences.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the past 24 hours.*

---

### **3. New Model & Hardware Support**  
- **ROCm (gfx1151)**: Improved layer-split handling with proper SDPA guard placement (`PR #17347`) and restoration of `TunableOp` state after pipeline unload (`PR #17340`).  
- **Windows + RTX 3060**: Ongoing investigation into image generation falling back to CPU despite GPU availability (`Issue #16803`).  
- **Pre-Blackwell GPUs**: Introduces intelligent INT8 fallback for official NVFP4 checkpoints via name-based detection (`PR #17343`).  
- **Custom OpenAI-compatible endpoints**: Video upload blocked when using custom connections (`Issue #17295`).

---

### **4. Performance & Optimization**  
- **VRAM Management**: `PR #17339` implements retry logic for image renders failing due to VRAM under budget — critical for 8GB cards like RTX 3070.  
- **Prompt Caching**: Prevents unintended cache invalidation by preserving `transparent-wrapper` markers during `functools.wraps` usage (`PR #17348`).  
- **Quantization Efficiency**: Shared int8 ConvRot quantization across joint blocks in FLUX.3 (`PR #17337`) reduces redundant computation.  
- **Memory-Friendly Loads**: GGUF reloads now wait for VRAM to be fully freed before reinitializing (`PR #17345`), improving stability during context changes.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| High | `#17339` | Image render fails on Windows RTX 3070 with insufficient VRAM; no recovery mechanism | ✅ *Fix in progress (PR #17339)* |
| Medium | `#16803` | Image generation falls back to CPU on Windows 11 despite GPU availability | ⚠️ *Unresolved; environment-specific* |
| Medium | `#17295` | Video upload blocked on custom OpenAI-compatible API connections | ❌ *No fix yet* |
| Low | `#17342` | Unverified cached `.pt` files may override safer safetensors twins | ✅ *Fix merged (PR #17342)* |
| Low | `#17338` | SSE event fragmentation across transport splits causes data loss | ✅ *Fix in progress (PR #17338)* |

---

### **6. What This Means for Application Developers**  
- **For agent builders**: Expect improved reliability when deploying LLM/diffusion pipelines on mixed GPU environments (especially ROCm and pre-Blackwell). Use `UNSLOTH_REUSE_CACHED_PICKLE_WEIGHTS=0` and `UNSLOTH_PREQUANT_PREFER_SAFETENSORS=1` to enforce safe weight loading.  
- **For UI/tooling developers**: The frontend is undergoing refinement — expect stricter CSS variable rules (`PR #17008`) and improved picker UX (e.g., `PR #17164`, `#17344`).  
- **For deployment engineers**: Be mindful of VRAM limits during model switching — `PR #17345` ensures safer reload timing. Also, avoid relying on unverified `.pt` caches in production.  
- **Future-proofing**: Watch for upcoming batch chat support (`#17333`) and enhanced model management (`#15038`) — essential for scalable workflows involving video chunking or fine-tuning pipelines.

🔗 [GitHub Issues](https://github.com/unslothai/unsloth/issues) | [Pull Requests](https://github.com/unslothai/unsloth/pulls)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*