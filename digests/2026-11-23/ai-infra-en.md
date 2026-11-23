# AI Infrastructure Digest 2026-11-23

> Generated: 2026-11-23 03:03 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

---

### **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-23**

---

#### **1. Ecosystem Overview**  
The AI inference and serving landscape in late 2026 is defined by a sharp bifurcation between **high-performance, kernel-optimized engines** (vLLM, SGLang) and **developer-friendly, gateway-abstraction layers** (LiteLLM, Ollama). Projects are rapidly converging on multi-architecture support—especially NVIDIA Blackwell (SM12x), AMD ROCm/gfx11, and Apple Silicon—with growing emphasis on multimodal processing, speculative decoding, and efficient quantization. Meanwhile, local runtimes like llama.cpp and Unsloth continue to push boundaries in GGUF compatibility and edge deployment, while LLM gateways increasingly abstract provider diversity through standardized APIs.

---

#### **2. Activity Comparison**

| Project       | Issues Open (↑) | PRs Merged (↑) | Release Status       | Notes |
|---------------|------------------|------------------|------------------------|-------|
| **vLLM**      | 348 (+5)         | 79 (+12)         | No new release         | Heavy focus on kernel unification (Humming), stability fixes |
| **SGLang**    | 412 (+8)         | 64 (+10)         | No new release; CI paused | v1.0 hardening; critical regressions in GLM/Mamba2 |
| **llama.cpp** | 521 (+11)        | 47 (+8)          | `b12646`–`b12635` (bugfixes) | Audio & MoE stability; Vulkan/RDNA1 regression alert |
| **Ollama**    | 674 (+6)         | 22 (+5)          | Stable: 0.40.17          | VRAM accounting fix; Jetson/Apple Silicon optimizations |
| **LiteLLM**   | 487 (+7)         | 41 (+9)          | No new release           | Native provider additions (BlockRun, Architect); security patch pending |

> 🔍 *Trend*: vLLM and SGLang lead in engineering velocity, while Ollama and LiteLLM prioritize reliability over innovation speed. llama.cpp shows high issue volume due to broad hardware/model coverage.

---

#### **3. Model Support Race**

| New Model / Architecture       | vLLM ✅ | SGLang ✅ | llama.cpp ✅ | Ollama ✅ | LiteLLM ✅ | Winner |
|----------------------------------|--------|----------|--------------|-----------|------------|--------|
| **DeepSeek-V4.1-Flash (B300)**   | ✅     | ✅       | ❌           | ❌        | ❌         | **vLLM/SGLang** |
| **Qwen3.8-Flash-Next (ROCm)**    | ✅     | ❌       | ❌           | ❌        | ❌         | **vLLM** |
| **Kimi K2.5 (Multimodal)**       | ✅     | ❌       | ❌           | ❌        | ❌         | **vLLM** |
| **Inkling 2 DSpark (GGUF)**     | ❌     | ❌       | ✅ (experimental) | ✅ (Metal) | ❌         | **llama.cpp/Ollama** |
| **Qwen3.5-122B-A10B (sm_70)**   | ⚠️     | ❌       | ✅ (crash risk) | ❌        | ❌         | **llama.cpp** (but risky) |
| **Jetson AGX Orin (JetPack 6)** | ❌     | ❌       | ❌           | ✅        | ❌         | **Ollama** |
| **Apple Silicon (Metal)**        | ❌     | ❌       | ❌           | ✅        | ❌         | **Ollama** |

> 🏆 **Winner**: **vLLM** leads in cutting-edge model + GPU architecture support (Blackwell, B300, ROCm), particularly for MoE and FP8 models. **Ollama** dominates edge and device-specific deployments (Jetson, Apple Silicon).

---

#### **4. Performance Frontier**

| Optimization Focus         | vLLM                     | SGLang                   | llama.cpp              | Ollama               | LiteLLM                |
|----------------------------|--------------------------|--------------------------|------------------------|----------------------|------------------------|
| **KV Cache Efficiency**    | ✅ DeepSeek-V4-Flash memory bloat (56B/token) reported | ❌ GLM-5.3-Flash FP8 bug | ⚠️ MoE cache duplication (×3) | ✅ Fixed VRAM over-allocation | ❌ No direct focus |
| **Quantization Kernel**    | ✅ **Humming** default on SM12x (replacing Marlin) | ❌ Marlin still used | ❌ GDN-hybrid regression | ❌ Limited support | ❌ Provider-level only |
| **Speculative Decoding**   | ✅ Draft LM-head quantization via plugins | ❌ Not yet supported | ❌ Not available | ❌ Not supported | ✅ Enabled via providers |
| **Distributed Serving**    | ✅ Sequence parallelism (Intel XPU) | ✅ Pipeline + seq par (Qwen3.5) | ❌ Single-device only | ❌ Local-only | ✅ Multi-provider routing |
| **Kernel-Level Fusing**    | ✅ DEP2/4/8, Triton-optimized MoE | ✅ gfx942, NPU prefill graphs | ✅ SYCL/CUDA ballot ops | ❌ No low-level fusing | ❌ Abstraction layer only |

> 📈 **Frontier Leaders**:  
> - **vLLM**: Kernel-level optimization (Humming, fused MoE, draft LM-head)  
> - **SGLang**: Hardware-specific graph capture (AMD/NPU)  
> - **llama.cpp**: Low-latency audio & memory safety (WebGPU/Vulkan)

---

#### **5. Layer Positioning**

| Project       | Layer Position                         | Primary Role                                  | Key Differentiator |
|---------------|----------------------------------------|------------------------------------------------|--------------------|
| **vLLM**      | **Serving Engine**                     | High-throughput, low-latency inference engine | Kernel fusion, Humming quantization, SM12x optimization |
| **SGLang**    | **Serving Engine**                     | Optimized for heterogeneous hardware           | Pre-fill CUDA graphs, NPU/AMD support, Mamba2 |
| **llama.cpp** | **Local Runtime / Edge Inference**     | CPU/GPU-accelerated local execution            | GGUF flexibility, Vulkan/WebGPU, cross-platform |
| **Ollama**    | **Local Gateway / CLI Runtime**        | Developer-first local model runner             | Simplified UX, device-specific tuning (Jetson, Metal) |
| **LiteLLM**   | **LLM Gateway / Orchestration Layer**  | Unified API abstraction across providers       | Native BlockRun/Architect support, streaming fidelity |

> 💡 **Strategic Insight**: The ecosystem is evolving into a **stacked architecture**:  
> - **Engine** (vLLM/SGLang) → **Runtime** (llama.cpp) → **Gateway** (Ollama/LiteLLM)  
> - Developers increasingly **orchestrate** multiple layers (e.g., LiteLLM → vLLM → llama.cpp) for optimal performance.

---

#### **6. Trend Signals**

| Trend                          | Evidence from Digest                                                                 | Developer Action |
|--------------------------------|--------------------------------------------------------------------------------------|------------------|
| **Kernel Unification**         | vLLM replacing Marlin with **Humming** across SM12x; SGLang’s Triton dependency issues | Prioritize Humming-based deployments; monitor kernel deprecation |
| **Edge & Heterogeneous Push**  | Ollama (Jetson, Apple Silicon), SGLang (NPU, gfx942), llama.cpp (Vulkan, WebGPU)      | Validate model loads on target devices; avoid sm_70/72 GPUs |
| **Security-by-Design Emergence** | ReDoS in LiteLLM (`secret_redaction`), `/parse_function_call` DoS risk in SGLang         | Patch immediately; sanitize inputs; use async wrappers |
| **Provider Abstraction Growth**| LiteLLM adding **BlockRun**, **Architect**, **Vertex AI pass-through**                 | Leverage native providers; avoid manual `api_base` config |
| **Model-Centric Stability**    | Qwen3 tool-calling loops, Mistral emoji corruption, GLM-ROCm weight errors              | Apply workarounds until patches land; test with real-world input |

> 🔮 **Watchlist for Developers**:  
> - **vLLM's Humming shift** → Update configs early.  
> - **SGLang v1.0** → Prepare for breaking changes in config validation.  
> - **LiteLLM’s ReDoS fix** → Patch ASAP if using secret redaction.  
> - **Ollama’s multi-GGUF import** → Monitor for future release (expected soon).  

---

**Final Takeaway**: The AI infrastructure stack is maturing rapidly — with **vLLM and SGLang leading the performance frontier**, **Ollama excelling in accessibility**, and **LiteLLM enabling multi-provider agility**. Application developers must now **strategically compose these tools** rather than rely on single-stack solutions, prioritizing **hardware alignment, security hygiene, and stable model loading**.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-23**

---

### **1. Today's Highlights**  
The vLLM project is accelerating its shift toward **Humming** as the default quantization kernel across NVIDIA architectures, with active efforts to replace legacy Marlin kernels on Hopper and Blackwell (SM12x). Key developments include performance optimizations for DeepSeek-V4.1-Flash on B300 GPUs and a major push to unify and stabilize multimodal processing through improved ViT CUDA graph support and shared rendering APIs.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. However, ongoing RFCs (#65560, #66101) indicate upcoming deprecations of Marlin kernels and expansion of draft LM-head quantization support.

---

### **3. New Model & Hardware Support**  
- **New GPU Architectures**: Active enablement for **RTX PRO 6000 Blackwell (SM120)** via PR #69081 (fixing missing kernel for `reshape_and_cache_flash`) and continued support for **Rubin (sm_107)** under CUDA 13.4 (tracked in #49735).
- **New Models**: Full support for **Qwen3.8-Flash-Next** on ROCm (PR #64662), **DeepSeek-V4.1-Flash** on B300 (PR #68366), and **Kimi K2.5** via multi-modality tracking (Issue #38175).
- **Backends & Platforms**:  
  - AMD ROCm: Added W4A8 MoE decode kernel for RDNA3/RDNA3.5 (gfx11) (PR #62480).  
  - Intel XPU: Sequence parallelism now enabled with pipeline parallelism for Qwen3.5 (PR #69314).  
  - CPU Offload: Joint GPU/CPU prefix cache lookup now supported (PR #57325).

---

### **4. Performance & Optimization**  
- **Fused Kernel Optimizations**:  
  - DEP2/4/8 optimized decode path for **DeepSeek-V4.1-Flash on B300**, enabling direct dispatch buffer routing and reduced memory traffic (PR #68366).  
  - Triton-optimized fused MoE config for **Qwen3.8-Flash-Next-FP8 on MI325X at TP4** (PR #64662).  
- **Quantization Improvements**:  
  - Preference for **Humming over Marlin** on SM12x for INT4 G128, MXFP8, and NVFP4 (PR #65676, #63777).  
  - Experimental support for **platform-provided draft_lm_head_quantization formats** via plugins (PR #67908).  
- **Memory Efficiency**:  
  - KV cache reduction effort continues; issue #51041 highlights excessive 56B/token usage in *DeepSeek-V4-Flash-0731* (vs. ~7B/token in prior version), suggesting potential inefficiencies in state management.

---

### **5. Stability & Regressions**  
- **Critical Bugs**:  
  - `apply_top_k_top_p_triton` underflows silently when normalization fails (PR #68411).  
  - `decode_attention_fwd` reads wrong KV head for GQA groups >16 not divisible by 16 (PR #68413).  
  - `HF3FSKVConnector` may reuse freed blocks before saving preempted request states (PR #69271).  
- **Model-Specific Issues**:  
  - Qwen3 models enter infinite loops in strict mode with empty tool calls (Issue #50989).  
  - Mistral tokenizer corrupts emoji/multibyte characters (Issue #68003).  
  - GLM-5.3 crashes on ROCm when `index_topk_freq > 1` due to missing weight keys (Issue #68919).  
- **Fixes in Progress**:  
  - PRs #68411, #68413, #69271 are actively addressing core correctness issues.  
  - PR #66087 fixes EPLB startup failure with MoE layers across multiple pipeline stages.

---

### **6. What This Means for Application Developers**  
- **Expect faster inference on Blackwell and B300 GPUs** with Humming-based kernels replacing Marlin — especially for MoE and FP8/NVFP4 models. Prioritize updating your deployment configs to align with this shift.  
- **Multimodal applications should monitor ViT CUDA graph support** (Issue #38175) for production stability; streaming input latency grows quadratically in long sessions (Issue #52471), so consider chunking strategies.  
- **Use `vllm.Render` (via gRPC or HTTP)** for consistent prompt tokenization and offloading preprocessing from gateways (Issues #65503, #65502).  
- **Avoid model-specific quirks**: Qwen3 tool-calling strict mode, Mistral emoji corruption, and GLM-ROCm weight loading bugs require workarounds until patches land.  
- **Enable speculative decoding with draft LM-head quantization** via platform-specific formats (PR #67908) for lower-latency generation.

> 🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [Pull Requests](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-23**

---

### **1. Today's Highlights**  
The SGLang project continues its focused push toward **SGLang 1.0 stability**, with critical infrastructure improvements in CI reliability and model correctness, particularly around GLM-5.3-Flash and Mamba2 serving. Key performance optimizations landed for AMD (gfx942) and NPU (Ascend A5), while new fixes address NaN propagation in sampling and flaky test infrastructure.

---

### **2. Releases & Breaking Changes**  
*No new releases announced.*  
- **SGLang 1.0 Roadmap (#50045)**: Officially tracking stability hardening, stricter configuration validation (replacing silent changes with explicit errors), and a defined compatibility policy for the 1.x series. Upgrading from `0.5.x` may require code adjustments—[see upgrade notes](https://github.com/sgl-project/sglang/issues/50045).  
- **CI Maintenance Mode (#21065)**: Active due to ongoing flakiness; PRs are paused until resolution. [Last auto-update: 2026-11-23](https://github.com/sgl-project/sglang/issues/21065).

---

### **3. New Model & Hardware Support**  
- **AMD gfx942**: DeepSeek-V4.1 now supports FP8 dense linear serving via BF16 weight expansion ([PR #51001](https://github.com/sgl-project/sglang/pull/51001)).  
- **NPU (Ascend A5)**: Added prefill graph capture for DeepSeek-V4.1 and interleaved prefill CP for GLM-5.3-Flash ([PRs #51185](https://github.com/sgl-project/sglang/pull/51185), [#52427](https://github.com/sgl-project/sglang/pull/52427)).  
- **MUSA (Huawei)**: JIT kernel backend support added via `mcc` compiler ([PR #51491](https://github.com/sgl-project/sglang/pull/51491)).  
- **Qwen4-Exp**: Local and remote Engram storage via Mooncake EngramStore ([PR #47673](https://github.com/sgl-project/sglang/pull/47673)).

---

### **4. Performance & Optimization**  
- **AMD gfx942 (DeepSeek-V4.1, 8x MI300X)**:  
  - +41.0% P50 E2E interactivity  
  - +37.2% P90 interactivity  
  - +18.8% output throughput per GPU  
  *(via FP8 serving through BF16 weight expansion)* → [PR #51001](https://github.com/sgl-project/sglang/pull/51001)  
- **NVIDIA SM120 (Blackwell)**:  
  - GDN decode was stuck on Triton by default; fix pending to enable flashinfer fused kernels ([Issue #51208](https://github.com/sgl-project/sglang/issues/51208)).  
- **Mamba2**: Pre-fill compilation stalls due to kernel recompilation during serving addressed via isolation of non-finite inputs ([PR #51342](https://github.com/sgl-project/sglang/pull/51342)).  
- **Multimodal Gemma 4**: Breakable prefill CUDA graph now enabled by default ([PR #52404](https://github.com/sgl-project/sglang/pull/52404)).

---

### **5. Stability & Regressions**  
- **Critical**: GLM-5.3-Flash fails with `--kv-cache-dtype fp8_e4m3` on H20 (SM90) due to `index_kpool: 4` conflict ([Issue #36830](https://github.com/sgl-project/sglang/issues/36830)). *Fix pending.*  
- **Severe**: GLM-5.3-Flash NVFP4 at TP4 loops indefinitely with no final answer on B200/B300 ([Issue #41939](https://github.com/sgl-project/sglang/issues/41939)). *Regression confirmed.*  
- **High-Risk**: `/parse_function_call` triggers catastrophic regex backtracking under crafted input, blocking event loop ([Issue #52090](https://github.com/sgl-project/sglang/issues/52090)). *Immediate risk to agent systems.*  
- **Memory Exhaustion**: Unbounded `instances` list in `/vertex_generate` causes ZMQ socket exhaustion (`Too many open files`) ([Issue #52345](https://github.com/sgl-project/sglang/issues/52345)). *Fix PR pending.*  
- **NaN Propagation**: Sampling logic lacks consistent NaN probing — fixed in progress ([PR #52428](https://github.com/sgl-project/sglang/pull/52428)).

---

### **6. What This Means for Application Developers**  
- **Expect breaking changes in v1.0**: Review [upgrade notes](https://github.com/sgl-project/sglang/issues/50045) if upgrading from 0.5.x. Silent config changes will now raise explicit errors.  
- **Avoid untrusted input in tool calls**: The `/parse_function_call` endpoint is vulnerable to DoS via crafted text — sanitize inputs or use async wrappers.  
- **Use `--enable-unified-cache-external-linker-config`**: For Mooncake-backed Qwen models, ensure correct linker config to avoid startup failures ([PR #52373](https://github.com/sgl-project/sglang/pull/52373)).  
- **Monitor CI health**: Active maintenance mode means PRs are delayed — expect longer merge cycles.  
- **Optimize for hardware-specific kernels**: Leverage AMD gfx942 and NPU prefill graphs for better throughput; consider `--schedule-low-priority-values-first` for priority-aware scheduling.  

> 🔗 **Track key issues**: [SGLang 1.0 Tracker](https://github.com/sgl-project/sglang/issues/50045), [CI Failure Tracker](https://github.com/sgl-project/sglang/issues/17050), [GLM-5.3-Flash Bug Tracker](https://github.com/sgl-project/sglang/issues/37524)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-23**

---

### **1. Today’s Highlights**  
The latest release cycle (b12646–b12635) focuses on critical stability fixes for audio processing in `mtmd`, robustness in MoE model handling, and improved token-aware parsing for LLM tool calling. Notably, a long-standing regression in Vulkan backend performance on RDNA1 GPUs has been highlighted (#30039), while new support for Inkling 2 DSpark speculators is being introduced via PR #32218.

---

### **2. Releases & Breaking Changes**  
- **Latest Builds**: `b12646` through `b12635` released within the past 24h. No breaking API changes reported; all updates are bugfixes or feature enhancements.
- **Critical Fix**: `b12643` resolves Qwen3a audio tail corruption by removing spurious zero-padding tokens ([#32697](https://github.com/ggml-org/llama.cpp/issues/32697)).
- **Parser Enhancement**: `b12642` implements token-aware parsing for better consistency in structured output ([#29307](https://github.com/ggml-org/llama.cpp/issues/29307)).

> 🔗 [GitHub Release Notes](https://github.com/ggml-org/llama.cpp/releases)

---

### **3. New Model & Hardware Support**  
- **Model Support**:
  - Added experimental support for **Inkling 2 DSpark speculator** (PR #32218).
  - Extended template detection for **LFM2.5-VL** models ([#32843](https://github.com/ggml-org/llama.cpp/pull/32843)).
  - Added **SenseNova Loop** architecture integration (PR #32588).
- **Backend & Hardware**:
  - Enhanced WebGPU softmax indexing safety ([#32691](https://github.com/ggml-org/llama.cpp/pull/32691)).
  - Continued improvements to SYCL and ROCm backends, though some issues persist on iGPU and Volta devices.

> 🔗 [PR #32218: Inkling 2 DSpark](https://github.com/ggml-org/llama.cpp/pull/32218) | [PR #32588: SenseNova Loop](https://github.com/ggml-org/llama.cpp/pull/32588)

---

### **4. Performance & Optimization**  
- **Audio Processing**: `mtmd` now speeds up shared audio FFT via iterative radix-2 splitting and batched odd-size DFTs ([#32815](https://github.com/ggml-org/llama.cpp/pull/32815)), reducing overhead in real-time speech pipelines.
- **CUDA/SYCL**: AMDGCN `mbcnt`-based ballot operations reduce lane-level reduction latency ([#32841](https://github.com/ggml-org/llama.cpp/pull/32841), [#32840](https://github.com/ggml-org/llama.cpp/pull/32840)).
- **Memory Efficiency**: Chunk-based mask construction in Inkling 2 reduces GPU memory usage during prefill ([#32752](https://github.com/ggml-org/llama.cpp/pull/32752)).

> ⚠️ **Regression Alert**: ~45% prompt processing slowdown on **RDNA1 (gfx1010)** between `b10455` and `b11429` with GDN-hybrid models — confirmed via bisect ([#30039](https://github.com/ggml-org/llama.cpp/issues/30039)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Status |
|--------|------|--------|--------|
| High | **Vulkan hangs on device loss** (`ggml_vk_wait_for_fence` spins forever) | GPU crashes cause permanent hang | Open ([#29926](https://github.com/ggml-org/llama.cpp/issues/29926)) |
| High | **Qwen3.5-122B-A10B crashes at first request on sm_70** | Instant kernel launch rejection | Open ([#29783](https://github.com/ggml-org/llama.cpp/issues/29783)) |
| Medium | **MoE cache stores shared experts 3× on looped models** | Memory bloat, potential correctness risk | Open ([#32744](https://github.com/ggml-org/llama.cpp/issues/32744)) |
| Medium | **RPC worker corruption after long prompts (DeepSeek V4)** | Output degenerates to repeated tokens | Open ([#30794](https://github.com/ggml-org/llama.cpp/issues/30794)) |
| Low | **Windows working set retention post-load** | Memory pressure despite offload | Open ([#32373](https://github.com/ggml-org/llama.cpp/issues/32373)) |

> ✅ **Fixes Merged**:  
> - Audio tail fix: [#32697](https://github.com/ggml-org/llama.cpp/pull/32697)  
> - LFM2.5-VL template detection: [#32843](https://github.com/ggml-org/llama.cpp/pull/32843)  
> - SVE gemv kernels: [#29256](https://github.com/ggml-org/llama.cpp/pull/29256), [#31736](https://github.com/ggml-org/llama.cpp/pull/31736)

---

### **6. What This Means for Application Developers**  
- **Use caution with Qwen3.5 and DeepSeek V4 models on older CUDA cards (sm_70/72)** — expect crashes under load. Prefer `sm_80+` targets where possible.
- **Enable `--override-tensor offloading` for Inkling 2 Mini models** if encountering garbage outputs with CPU MoE layers ([#32755](https://github.com/ggml-org/llama.cpp/issues/32755)).
- **Monitor Vulkan performance on RDNA1 GPUs** — recent builds show significant regressions; consider pinning to `b10455` or earlier for stable inference.
- **For high-throughput agents**, leverage the new **Inkling 2 DSpark support** and **token-aware parsing** for more reliable tool use and reduced hallucination.
- **On Windows**, apply PR #31709 (`unmap_fragment()` fix) to avoid memory bloat after model load.

> 📌 **Best Practice**: Always test quantized models with `--n-gpu-layers max` and monitor GPU memory usage — especially for hybrid MoE/GDN models like Qwen3.5.

---  
*Digest generated from [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) — data as of 2026-11-23.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Digest – 2026-11-23**

---

### **1. Today's Highlights**  
Critical fixes for VRAM accounting and GPU memory management were merged, addressing long-standing issues that caused model evictions and crashes on high-memory systems—particularly affecting hybrid models like Qwen3.5/3.8 and Jetson AGX Orin devices. Concurrently, PRs landed to improve reliability in distributed blob downloads (via `checkedDialer`) and resolve encoding inconsistencies in manifest paths, enhancing stability across edge cases.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable version remains **0.40.17**, with ongoing improvements focused on internal correctness and performance rather than user-facing changes.

---

### **3. New Model & Hardware Support**  
- ✅ **Jetson AGX Orin (JetPack 6)**: A fix has been merged ([PR #19847](https://github.com/ollama/ollama/pull/19847)) to disable CUDA’s VMM pool (`GGML_CUDA_NO_VMM=ON`) by default for JetPack runners, resolving fatal `cuMemAddressReserve` OOM crashes during image inference.  
- ✅ **Inkling 2 Mini (26B) on Metal**: [PR #19843](https://github.com/ollama/ollama/pull/19843) introduces optimized Metal kernels for faster decoding, prefill, and draft rounds—specifically targeting Apple Silicon performance.  
- 🔧 **Multi-file GGUF Models**: While not yet released, a major feature request (#5245) is actively being addressed; support for importing split GGUF files (e.g., `model-00001-of-00003.gguf`) is under development and expected soon.

---

### **4. Performance & Optimization**  
- 📈 **VRAM Accounting Fix**: [PR #19632](https://github.com/ollama/ollama/pull/19632) resolves severe over-allocation of KV cache (4–8x inflation) for hybrid models (e.g., Qwen3.5/3.8), preventing premature eviction and enabling proper use of `keep_alive=-1`. This improves effective GPU utilization and reduces context switching overhead.  
- ⚙️ **Memory Admission Correctness**: [PR #19848](https://github.com/ollama/ollama/pull/19848) bounds cgroup memory allocation by actual host RAM, preventing unsigned underflow and ensuring accurate local inference admission control.  
- 🔄 **Blob Download Resilience**: [PR #19846](https://github.com/ollama/ollama/pull/19846) enhances `transfer.checkedDialer` to dial *all validated CDN addresses*, not just the first—improving reliability when IPv6 routes fail or hosts have mixed connectivity.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|-------|-------|
| 🔴 High | Jetson AGX Orin crashes on image requests due to CUDA OOM in `cuMemAddressReserve` | Open | [PR #19847](https://github.com/ollama/ollama/pull/19847) ✅ |
| 🔴 High | Qwen3-VL-8B + mmproj crashes on first image request on Apple Silicon (Metal) | Open | [PR #16264](https://github.com/ollama/ollama/issues/16264) (pending) |
| 🔴 High | Windows auto-update fails with `0xc0000142`, leaving dead console processes | Open | [PR #19840](https://github.com/ollama/ollama/issues/19840) (pending) |
| 🟡 Medium | VRAM prediction over-counts KV cache → model eviction despite sufficient memory | Open | [PR #19632](https://github.com/ollama/ollama/pull/19632) ✅ |
| 🟡 Medium | Manifest host encoding non-reversible (due to `%` unescaping) | Closed | [PR #19835](https://github.com/ollama/ollama/pull/19835) ✅ |

> Note: Several regressions (e.g., `qwen3.8:27b-mtp_q8` using 127GB VRAM instead of 51GB) point to potential config drift or build-time issues post-upgrade—users should verify builds and consider rolling back if needed.

---

### **6. What This Means for Application Developers**  
- **For agents & tooling integrators**: Expect improved reliability when using vision-capable models (like Qwen3-VL or Inkling 2) on Apple Silicon and Jetson hardware—especially in long-running or batched workflows.  
- **For LLM gateway builders**: The upcoming multi-GGUF import support will enable seamless deployment of large, split models (e.g., from Hugging Face), reducing dependency on single-file formats.  
- **For production deployments**: The merged VRAM accounting fixes mean you can now trust `keep_alive=-1` and `OLLAMA_NUM_PARALLEL` settings more accurately—ideal for high-throughput inference services.  
- **For Windows users**: Be cautious with silent updates—this may cause restart failures. Monitor logs for `taskkill.exe`/`cmd.exe` errors and consider manual restarts until [PR #19840](https://github.com/ollama/ollama/issues/19840) ships.  

👉 **Recommendation**: Upgrade to **0.40.17+** and validate your model loads, especially on Apple Silicon and Jetson platforms. Watch for future release notes around multi-GGUF support and enhanced CLI image path handling.

---  
*Data source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **1. Today's Highlights**  
LiteLLM continues to expand its provider ecosystem with native support for new inference platforms like **BlockRun** and **Architect**, enabling seamless integration via standardized OpenAI-compatible APIs. Critical fixes address streaming correctness (e.g., `n>1` chat responses), guardrail reliability in Gemini streams, and improved routing behavior for Vertex AI pass-through calls—enhancing stability for production workloads.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, several **breaking changes are underway in active PRs**:  
- **PR #53693** introduces `blockrun/<provider>/<model>` as a first-class OpenAI-compatible provider, eliminating the need for manual `api_base` configuration. [Link](https://github.com/BerriAI/litellm/pull/53693)  
- **PR #53683** adds **Architect** as a native provider, allowing users to route requests through an auction-based inference exchange using a single API key. [Link](https://github.com/BerriAI/litellm/pull/53683)  
- **PR #53678** resolves admin OIDC reference handling across batch cancel, fine-tuning listing, OCR, and cache prediction endpoints—ensuring correct token resolution. [Link](https://github.com/BerriAI/litellm/pull/53678)

> ⚠️ Developers relying on custom `api_base` configurations for BlockRun or Architect should migrate to the new native providers to avoid deprecation risks.

---

### **3. New Model & Hardware Support**  
- **BlockRun** is now supported natively as a JSON-configured OpenAI-compatible provider (PR #53693).  
- **Architect** (inference marketplace) added as a first-class provider (PR #53683), enabling dynamic bidding on model inference.  
- **Vertex Gemini image models** now respect `imageConfig`, `aspect_ratio`, and `resolution` controls—previously silently ignoring them or returning square images (PR #53581). [Link](https://github.com/BerriAI/litellm/pull/53581)  
- **Gnani** gains REST transcription support (PR #52520), closing gaps in audio pipeline coverage.

---

### **4. Performance & Optimization**  
- **PR #53588** improves load distribution by ensuring least-busy Vertex AI deployments are selected during concurrent pass-through calls—reducing hotspots and improving throughput under high concurrency.  
- **PR #53592** ensures every choice in an `n>1` streamed chat response starts with the `assistant` role, fixing client-side parsing issues that could arise when reading multiple responses. [Link](https://github.com/BerriAI/litellm/pull/53592)  
- **PR #53600** enhances stream performance by correctly parsing tool calls in Google’s `streamGenerateContent` responses under the tool permission guardrail—avoiding unnecessary 400 errors. [Link](https://github.com/BerriAI/litellm/pull/53600)  
- **PR #53333** enables native model list enforcement for virtual keys, reducing Python gateway round-trips and lowering latency. [Link](https://github.com/BerriAI/litellm/pull/53333)

> ✅ These changes collectively improve routing efficiency, reduce backend overhead, and enhance real-time streaming fidelity.

---

### **5. Stability & Regressions**  
Top stability concerns reported today:  

| Issue | Severity | Status | Fix PR |  
|------|----------|--------|--------|  
| `ModelNotMappedError` in `utils.py` (Issue #51452) | High | Open | ❌ No fix yet |  
| `ReDoS` in `secret_redaction.redact_string()` due to regex backtracking (Issue #32353) | Critical | Open | ✅ **Fix PR pending** ([#53539](https://github.com/BerriAI/litellm/pull/53539)) |  
| Streaming `tool_use` arguments dropped in Anthropic `/v1/messages` (Issue #45348) | High | Closed | ✅ Fixed in v1.108.0+ |  
| `watsonx` usage not captured — proxy reports own estimate (Issue #46059) | Medium | Open | ❌ No fix yet |  
| `Gemini generateContent → Anthropic` drops parallel function calls & duplicates IDs (Issue #53345) | High | Open | ❌ No fix yet |  

> 🔴 **Critical Alert:** The `ReDoS` vulnerability (Issue #32353) can crash proxies via malicious input—patch urgently if deployed in production.

---

### **6. What This Means for Application Developers**  
- **Adopt native provider support** for BlockRun and Architect to simplify deployment and avoid manual `api_base` overrides.  
- **Ensure robust error handling** for `n>1` streaming responses—use `assistant` role checks at the client level until PR #53592 lands.  
- **Validate guardrails** on Gemini/GCP routes: Tool call permissions now work correctly in streams (PR #53600).  
- **Avoid `ReDoS` risk** by upgrading to a version with PR #53539 applied—especially if handling user-generated logs or secrets.  
- **Monitor cost tracking** for WatsonX and Vertex AI: Usage data may be inaccurate; use upstream billing APIs for audit accuracy.  

> 💡 **Pro Tip:** Use `enable_pre_call_checks: true` with caution—it still routes some requests to Python unless PR #53039 is merged. Monitor latency spikes accordingly.

---  
*Digest generated: 2026-11-23 | Source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-23**

---

### **1. Today's Highlights**  
Unsloth continues its aggressive optimization push with multiple low-level kernel fixes and stability improvements across ROCm, MPS, and MLX backends. A major focus is on resolving model loading failures (e.g., Inkling-2-Mini-GGUF, Qwen-Image-Edit) and improving support for new languages in the Translate module. The team also landed critical fixes for FP8 precision handling and memory management in diffusion training workflows.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, ongoing changes suggest a shift toward stricter local DB persistence for chat settings (Issue #5862), which may affect users upgrading from older versions. Additionally, `transformers==5.13.1` has triggered false positives in some security scanners (Issue #18699), potentially impacting CI/CD pipelines.

> 🔗 [Issue #5862](https://github.com/unslothai/unsloth/issues/5862) | 🔗 [Issue #18699](https://github.com/unslothai/unsloth/issues/18699)

---

### **3. New Model & Hardware Support**  
- **New language support**: Amharic (`am`), Swahili (`sw`), Hausa (`ha`), Yoruba (`yo`), Igbo (`ig`), and Zulu (`zu`) added to Unsloth Translate (PR #18738).  
- **ROCm/Windows stability**: Fixes for `llama-server` crashes when launched via Studio due to system libamdhip64 conflicts (Issue #18948).  
- **MLX/Mac support**: Z-Image base rendering now works correctly on M1/M2 Macs (PR #18964).  
- **GGUF model compatibility**: Issues reported for Inkling-2-Mini-GGUF (Issue #18757) and Qwen-Image-Edit GGUF (Issue #18759) — likely due to recent backend or kernel changes.

> 🔗 [PR #18738](https://github.com/unslothai/unsloth/pull/18738) | 🔗 [Issue #18757](https://github.com/unslothai/unsloth/issues/18757) | 🔗 [Issue #18759](https://github.com/unslothai/unsloth/issues/18759)

---

### **4. Performance & Optimization**  
- **FP8 precision**: Improved VRAM efficiency in diffusion training by checking host RAM before enabling Auto-FP8 below 1.15x free VRAM (PR #18967).  
- **Kernel fusion**: Folded constant LoRA sets under group offload only when opted in (PR #18983), reducing unnecessary computation.  
- **Block compilation**: Prevented recompilation per call under `torch.compile` in batched grouped decode (PR #18985), improving inference throughput.  
- **Attention optimization**: Saved attention on ROCm now stays within a checkpoint frame during fullgraph compile (PR #18990), reducing memory overhead.  

> 🔗 [PR #18967](https://github.com/unslothai/unsloth/pull/18967) | 🔗 [PR #18983](https://github.com/unslothai/unsloth/pull/18983) | 🔗 [PR #18985](https://github.com/unslothai/unsloth/pull/18985)

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix PR? |
|--------|------|--------|--------|
| ⚠️ High | #18757 | Inkling-2-Mini-GGUF fails to load in latest Docker version | ❌ No fix yet |
| ⚠️ High | #18759 | Qwen-Image-Edit GGUF fails with device mismatch in `_adaln_continuous_forward` | ❌ No fix yet |
| ⚠️ Medium | #18805 | Windows Strix Halo: `host-shortfall` check still forces mmap after carve-out fix | ✅ Follow-up in progress |
| ⚠️ Medium | #18763 | AMD NPU: "Extra data" error when listing models (FastFlowLM 1.0.13) | ❌ Regression suspected |
| 🟡 Low | #18666 | Translation mode lacks image/audio/video support | ✅ Partially addressed by PR #18992 |

> 🔗 [Issue #18757](https://github.com/unslothai/unsloth/issues/18757) | 🔗 [Issue #18759](https://github.com/unslothai/unsloth/issues/18759) | 🔗 [PR #18992](https://github.com/unslothai/unsloth/pull/18992)

---

### **6. What This Means for Application Developers**  
- **Expect breaking changes in model loading** — especially for GGUF models on AMD/NPU and Windows ROCm. Monitor issues like #18757 and #18759 if deploying production workloads.  
- **Leverage new translation capabilities** — support for African languages and subtitle file translation (SRT/VTT) via PR #18992 enables richer multilingual agent UX.  
- **Optimize for FP8 and kernel fusion** — use `UNSLOTH_GC_SAVE_ATTENTION=1`, `offload_policy=group`, and avoid unnecessary LoRA fusions unless explicitly needed.  
- **Avoid `transformers==5.13.1` in CI/CD** if using security scanners that flag it as malicious (Issue #18699).  
- **Use `--lazy-mode on-direct` on Windows ROCm** to sidestep mmap-related crashes (follow-up to #17605).

> 🔗 [PR #18992](https://github.com/unslothai/unsloth/pull/18992) | 🔗 [Issue #18699](https://github.com/unslothai/unsloth/issues/18699)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*