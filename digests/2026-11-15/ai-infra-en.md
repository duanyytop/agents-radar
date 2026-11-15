# AI Infrastructure Digest 2026-11-15

> Generated: 2026-11-15 02:05 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-15**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in late 2026 is defined by rapid hardware specialization, convergence of serving and local execution, and a growing emphasis on agent-native capabilities. Projects are increasingly diverging along silicon-specific paths—especially around NVIDIA Blackwell (SM120), AMD MI355X/MI300X, and Intel NPU—while also unifying around shared workloads like speculative decoding, tool calling, and voice-enabled agents. The shift toward Rust-based backends (vLLM, SGLang, LiteLLM) signals a maturation phase focused on performance, memory safety, and production-grade reliability. Meanwhile, model formats (FP8, MXFP4, NVFP4) and quantization backends (Humming vs Marlin) are becoming strategic differentiators.

---

### **2. Activity Comparison**

| Project       | Issues Open (↑) | PRs Merged (↑) | Release Status         |
|---------------|------------------|------------------|------------------------|
| **vLLM**      | 127 (+5)         | 24 (+8)          | No new release; breaking changes imminent |
| **SGLang**    | 98 (+3)          | 14 (+4)          | No new release; v1.0 roadmap active |
| **llama.cpp** | 142 (+6)         | 12 (+5)          | 4 incremental patches (b12387–b12383); deprecation warning |
| **Ollama**    | 161 (+4)         | 4 (+2)           | No new release; community integrations dominant |
| **LiteLLM**   | 118 (+3)         | 8 (+3)           | `v1.110.0-rc.3` signed; security focus |
| **Unsloth**   | 134 (+7)         | 6 (+2)           | Beta desktop update; no core release |

> 🔍 *Trend*: **vLLM** and **Unsloth** show highest engineering velocity, with vLLM driving kernel-level innovation and Unsloth pushing agent-centric features. Ollama leads in community-driven integration activity.

---

### **3. Model Support Race**

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **Blackwell SM120** (RTX PRO 6000) | ✅ | ✅ (opt-in) | ❌ | ⚠️ (WSL2 limitation) | ⚠️ | ⚠️ |
| **Qwen3.6-27B-FP8**            | ✅ | ⚠️ (crash risk) | ⚠️ (tool call corruption) | ⚠️ (corruption) | ⚠️ | ⚠️ |
| **DeepSeek-V4.1-Flash**        | ✅ | ✅ (opt-in) | ✅ (prompt reuse bug) | ⚠️ (crash) | ⚠️ | ✅ (native) |
| **GLM-5.3-Flash FP4-Local**    | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **MiniMax-M3.1 MoE**           | ✅ (cuTile NVFP4) | ✅ | ✅ | ⚠️ | ⚠️ | ✅ (native) |
| **ZAOERIS AXIOM MoE (79.43B)** | ✅ (request) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **Intel NPU (Core Ultra)**     | ⚠️ | ⚠️ | ⚠️ | ✅ (request) | ⚠️ | ⚠️ |

> 🏆 **Leader**: **Unsloth** takes the lead in native model support for cutting-edge models like DeepSeek-V4.1 and MiniMax-M3.1.  
> 📈 **Emerging Leader**: **vLLM** leads in hardware-first integration (Blackwell, ROCm), especially for high-end inference workloads.

---

### **4. Performance Frontier**

| Focus Area                | vLLM                              | SGLang                            | llama.cpp                         | Ollama                          | LiteLLM                           | Unsloth                          |
|--------------------------|------------------------------------|------------------------------------|------------------------------------|----------------------------------|------------------------------------|-----------------------------------|
| **KV Cache Optimization** | ✅ Batch-invariant, encoder cache config | ✅ HiCache tuning, L2/L3 pressure handling | ✅ Unified KV per sequence (Qwen4Exp) | ✅ VRAM accounting fix (critical) | ⚠️ Budget misalignment (high-risk) | ⚠️ Draft acceptance drop (UD 3.1 GGUF) |
| **Batching & Throughput** | ✅ Speculative decoding (top-k during load) | ✅ SPF chunk reservation logic | ✅ DFlash refactoring | ✅ Speculative batching (mlxrunner) | ✅ Congestion-aware queuing | ⚠️ MTP draft head mismatch |
| **Quantization Backend**  | ✅ Phasing out Marlin → **Humming** (FP8, MXFP4, NVFP4) | ✅ cuTile NVFP4 W4A4 | ⚠️ Hexagon HMX inf bug | ⚠️ FP8 Metal abort | ⚠️ Legacy accounting | ⚠️ Experimental hybrid packing |
| **Distributed Serving**   | ✅ Multi-GPU + data parallelism (epic issues) | ✅ FSDP2/TP/PP (Qwen3.8-Flash-Next) | ⚠️ Limited distributed training | ⚠️ Multi-GPU splits (VRAM fixes) | ✅ Redis-backed coordination | ✅ FSDP2/TP/PP (full support) |
| **Kernel-Level Optimization** | ✅ Humming, sparse MLA, FlyDSL (MI355X) | ✅ Stream-K GEMM (fixing NaN) | ✅ Flash Attention (OpenCL) | ✅ — | ✅ Rust-based metrics & limiter | ✅ Hybrid linear attention (ROCm) |

> 🎯 **Performance Leadership**: **vLLM** dominates at the kernel level with Humming and cross-architecture optimizations. **LiteLLM** leads in system-level observability and congestion control. **Unsloth** excels in end-to-end agent workflows with voice and draft tuning.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Secondary Role                             | Key Differentiator                                  |
|---------------|------------------------------------|---------------------------------------------|-----------------------------------------------------|
| **vLLM**      | **Inference Engine**               | Model Serving (with gateway-like APIs)      | High-performance CUDA kernels, Blackwell focus      |
| **SGLang**    | **Inference Engine + Gateway**     | Agent orchestration (Rust server backend)   | Native Ollama/Anthropic compatibility, control API migration |
| **llama.cpp** | **Local Runtime / Embedded Inference** | Cross-platform CPU/GPU execution           | Extreme portability (Hexagon, Vulkan, Metal), low footprint |
| **Ollama**    | **LLM Gateway + Developer Platform** | Community integrations (PipesHub, SynapCores)| Ecosystem expansion via third-party connectors        |
| **LiteLLM**   | **API Gateway / Proxy Layer**      | Cost monitoring, request routing            | Supply chain integrity (Cosign), congestion-aware queuing |
| **Unsloth**   | **Agent Runtime + Training Tool**  | Desktop UI, voice mode, fine-tuning         | Native model support, voice-enabled chat interface  |

> 🧩 **Strategic Insight**: A clear layering is emerging:  
> - **Engines** (vLLM, SGLang, llama.cpp) handle compute efficiency.  
> - **Gateways** (Ollama, LiteLLM) manage routing, cost, and integration.  
> - **Agents** (Unsloth, SGLang) build the next-gen application stack.

---

### **6. Trend Signals & Strategic Watchlist**

#### **Industry Trends Extracted from Activity**
1. **Hardware Specialization is Now Central**: Projects are racing to optimize for **NVIDIA Blackwell (SM120)**, **AMD MI355X/gfx942**, and **Intel NPU**—not just general GPU support. This demands siloed development and early adoption.
2. **Rust is Becoming the De Facto Standard**: vLLM, SGLang, and LiteLLM are all investing heavily in Rust for performance and safety—indicating a shift toward production-ready, low-latency systems.
3. **Agent Workloads Are Driving Innovation**: Voice mode (Unsloth), speculative decoding (all), tool-call resilience (Ollama, LiteLLM), and persistent caching (llama.cpp) are all optimized for long-running, multi-turn agent use.
4. **Quantization Migration Is Underway**: Marlin is being deprecated in favor of **Humming** (vLLM), signaling a need for future-proof inference pipelines.
5. **Security & Observability Are Non-Negotiable**: Signed releases (LiteLLM), spend logging (LiteLLM), and detailed metrics (SGLang, LiteLLM) reflect growing demand for auditability and cost control.

#### **What Application Developers Should Watch**
- ✅ **Migrate from Marlin to Humming** now—future-proof your inference stack.
- ✅ **Avoid `--load-mode none` in Unsloth**—it causes severe RAM pressure.
- ✅ **Use `--hicache-mamba-size-gb` or `--cache-disk`** for long-running agents.
- ✅ **Test speculative decoding under load**—especially with unified KV caches and large context windows.
- ✅ **Prepare for heterogeneous deployment**—design apps with backend-agnostic paths (e.g., OpenVINO for Intel NPU).
- ✅ **Audit configs for deprecated settings** (e.g., `accounting_capture`) before upgrading.

> 🔮 **Forward Look**: By Q1 2027, expect **agent-native stacks** to dominate—not just model serving. The winners will be those that unify inference engines, gateways, and runtime tools into a single, secure, observable, and scalable platform.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-11-15**

#### **1. Today's Highlights**  
The vLLM project continues to accelerate its support for next-generation hardware, with critical fixes and enhancements targeting Blackwell (SM120) GPU performance and stability. Key developments include a major push to replace legacy Marlin kernels with the more efficient **Humming** quantization backend across NVIDIA architectures, alongside ongoing work to stabilize speculative decoding and KV offloading on high-end multi-GPU setups. The Rust frontend is maturing rapidly, now approaching feature parity with Python.

#### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, several PRs signal upcoming breaking changes:  
- `VLLM_USE_RUST_FRONTEND=1` is now stable enough for production use but still experimental; expect future API divergence from Python.  
- **Deprecation of Marlin**: Issue #65560 proposes replacing Marlin with Humming across all NVIDIA architectures (Hopper, Blackwell), which may require re-quantizing models or updating inference configs.  
- New `--encoder-cache-size` flag (PR #65534) introduces configurable multimodal encoder cache—this is non-breaking but will affect memory planning in vision-language models.

> 🔗 [Marlin → Humming RFC](https://github.com/vllm-project/vllm/issues/65560) | [Encoder Cache Configurable](https://github.com/vllm-project/vllm/pull/65534)

#### **3. New Model & Hardware Support**  
- ✅ **Blackwell SM120 Support**: Multiple issues highlight deep integration progress with RTX PRO 6000 Blackwell (8x TP), including:
  - Fixes for `DeepSeek-V4.1-Flash`, `Qwen3.6-27B-FP8`, and `GLM-5.3-Flash` on SM120.
  - Ongoing work to fix CUDA graph capture failures (`#67488`) and low decode throughput (`#56892`).
- ✅ **ROCm / AMD Support**:  
  - Native NVFP4 MoE support on gfx942 via `tl.dot_scaled` (PR #67723).  
  - Flint model added to ROCm support (PR #66216).  
  - DSpark draft layer consolidation via monokernel launch (PR #65985) improves efficiency on MI355X.
- ✅ **New Model Formats**:  
  - ZAQERIS AXIOM MoE model (79.43B sparse MoE) proposed for native support (Issue #67412).  
  - GLM-5.3-Flash FP4-Local now under active community adoption (Issue #66218).

> 🔗 [AXIOM MoE Request](https://github.com/vllm-project/vllm/issues/67412) | [Flint on ROCm](https://github.com/vllm-project/vllm/pull/66216)

#### **4. Performance & Optimization**  
- 🚀 **Speculative Decoding Improvements**:  
  - PR #66534 proposes applying top-k/top-p cutoffs *during* target logits load in verification phase—could reduce redundant computation by up to ~15% in high-top-k scenarios.  
  - PR #67724 enables device-generic streams/events for D2H paths, enabling speculative decoding on non-CUDA backends (e.g., ROCm, Intel GPU).
- ⚙️ **Kernel-Level Optimizations**:  
  - PR #67338 eliminates redundant route decisions in sparse MLA prefill metadata builder—reduces CPU overhead per request by ~10–15%.  
  - PR #67377 shows **21–31% of MXFP8 peak** achieved on MI355X using tuned FlyDSL kernels—up from unoptimized baseline.
- 🔁 **Batch Invariance**:  
  - Issue #27433 tracks remaining work on batch-invariant inference; users are directed to [Inferact/zero-mismatch-rl](https://github.com/Inferact/zero-mismatch-rl) for end-to-end recipes.

> 🔗 [Top-k Top-p During Load](https://github.com/vllm-project/vllm/pull/66534) | [Sparse MLA Route Decision Fix](https://github.com/vllm-project/vllm/pull/67338)

#### **5. Stability & Regressions**  
Critical stability issues reported today, primarily affecting **Blackwell SM120** and **multi-GPU deployments**:

| Severity | Issue | Description | Status |
|--------|------|-------------|--------|
| ⚠️ High | [#67488](https://github.com/vllm-project/vllm/issues/67488) | Illegal memory access during CUDA graph capture with Qwen3.6-27B-FP8 + LoRA on RTX PRO 6000 Blackwell (SM120) under CUDA MPS | Open |
| ⚠️ High | [#56892](https://github.com/vllm-project/vllm/issues/56892) | Extremely low decode throughput with DeepSeek-V4.1-Flash on SM120 when `--enforce-eager` used; CUDA graphs unusable | Open |
| ⚠️ High | [#67575](https://github.com/vllm-project/vllm/issues/67575) | `flashinfer_cutlass MoE` crashes at startup with `--data-parallel-size 2` (EP16) | Open |
| ⚠️ Medium | [#67684](https://github.com/vllm-project/vllm/issues/67684) | GLM-4.7 tool parser silently drops unknown function calls, causing retry loops | Open |
| ⚠️ Medium | [#67631](https://github.com/vllm-project/vllm/issues/67631) | ZeroDivisionError in `kv_cache_planning` due to silent `block_size_bytes = 0` | Open |

> ✅ **Fixes in Progress**:  
> - PR #67724 (device-generic streams) aims to resolve async scheduling race conditions (see #61239).  
> - PR #67723 adds NVFP4 MoE support on ROCm, addressing kernel compatibility issues.

#### **6. What This Means for Application Developers**  
- **Deploying on Blackwell?** Avoid `--enforce-eager` until #56892 is resolved—it severely degrades throughput. Use `--disable-elastic-draft-tokens` as a workaround if needed.  
- **Using LoRA or MoE models?** Be cautious with `--data-parallel-size > 1` on Blackwell—multiple crashes reported (#67575, #67631). Stick to `dp=1` or use `--moe-backend auto`.  
- **Rust Frontend?** Now viable for production use (`VLLM_USE_RUST_FRONTEND=1`). Ensure your app handles `EngineCoreRequest` validation (PR #67623 fixes missing checks).  
- **Quantization Choices**: Marlin is being phased out—plan migration to **Humming** (supported formats: INT4/INT8 GPTQ/AWQ, FP8, MXFP4/6/8, NVFP4) for better Blackwell/Hopper performance.  
- **Tool Calling?** Patch `tool_call_parser` logic to avoid silent drops (issue #67684); consider adding fallback mechanisms.

> 📌 **Pro Tip**: For high-concurrency agent workloads on Blackwell, use `vllm-bench` with shared stream conformance (issue #66782) to ensure consistent latency metrics across Python/Rust tools.

---  
*Digest generated: 2026-11-15 | Source: [vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-15**

---

### **1. Today's Highlights**  
The SGLang project continues its momentum in stabilizing the Rust-based server backend, with 14 PRs targeting control-API migration to `rust-server`, including full support for Ollama, Anthropic, and Vertex-compatible routes. Critical stability fixes were merged for `sgl-router` (handling inline system messages) and `FP16 Stream-K GEMM` (fixing NaN outputs), while ongoing work focuses on improving HiCache behavior under capacity pressure and enhancing cross-platform NPU compatibility.

---

### **2. Releases & Breaking Changes**  
None. No new releases or breaking changes were announced in the past 24 hours. The roadmap for **SGLang 1.0** remains active ([#50045](https://github.com/sgl-project/sglang/issues/50045)), emphasizing stability, explicit configuration errors, and backward compatibility policy.

---

### **3. New Model & Hardware Support**  
- **NPU Support**: Added experimental support for **Ascend 910B** with Qwen3.8-27B GDN hybrid models via `--mamba-ssm-dtype bfloat16` workaround ([#50487](https://github.com/sgl-project/sglang/issues/50487)).  
- **Blackwell GPU**: Opt-in **cuTile NVFP4 W4A4** runner for MiniMax-M3.1 MoE experts on SM12x (RTX 50-series Blackwell) via PR [#49795](https://github.com/sgl-project/sglang/pull/49795).  
- **AMD ROCm**: Added probe test coverage for ROCm runner path ([#50567](https://github.com/sgl-project/sglang/pull/50567)).

---

### **4. Performance & Optimization**  
- **Speculative Decoding**: Optimized MiniMax-H3 T2VA inference by fusing attention gated residual with norm2 modulation, reducing kernel overhead ([#50391](https://github.com/sgl-project/sglang/pull/50391)).  
- **HiCache Efficiency**: Addressed reproducible cache hit-rate dip during L2/L3 capacity pressure with Mooncake offload ([#47481](https://github.com/sgl-project/sglang/issues/47481)); new `--hicache-mamba-size-gb` flag allows finer host pool control ([#47867](https://github.com/sgl-project/sglang/pull/47867)).  
- **Scheduler**: Improved chunk reservation logic to prevent encoder replay row starvation under SPF policies ([#50170](https://github.com/sgl-project/sglang/pull/50170)).  
- **Metrics**: Introduced configurable Prometheus metric naming style (`sglang_...`) to avoid colon-related collector issues ([#45551](https://github.com/sgl-project/sglang/pull/45551)).

---

### **5. Stability & Regressions**  
- **Critical Crash**: `FP16 Stream-K GEMM` produces incorrect `NaN` results for exact-zero output — a correctness bug impacting numerical stability ([#50521](https://github.com/sgl-project/sglang/issues/50521)).  
- **Model Crashes**: Qwen-VL image preprocessing causes OOM due to unreturned memory from `torch.cat()` ([#49796](https://github.com/sgl-project/sglang/issues/49796)).  
- **Router Bug**: `/v1/messages` returns 400 for inline `role="system"` due to improper handling of chat templates ([#50348](https://github.com/sgl-project/sglang/issues/50348)) — fixed in PR [#50435](https://github.com/sgl-project/sglang/pull/50435).  
- **CUDA 13 Compatibility**: RTX 50-series (sm_120) cannot run any model out-of-the-box with CUDA 13 wheel install ([#49209](https://github.com/sgl-project/sglang/issues/49209)) — no fix yet.

---

### **6. What This Means for Application Developers**  
- **Rust Server Adoption**: If building high-throughput agents or integrating with Ollama/Anthropic APIs, migrate to `SGLANG_RUST_SERVER=1` now — the core control API is being ported incrementally.  
- **Avoid `FP16 Stream-K`** until #50521 is resolved; use alternative kernels for deterministic numerics.  
- **Use `--hicache-mamba-size-gb`** when running hybrid Mamba/KDA models to prevent host KV misses.  
- **For NPU deployments**, enforce `--mamba-ssm-dtype bfloat16` on Ascend 910B to avoid runtime crashes.  
- **Expect configuration rigor in v1.0**: Silent config changes will be replaced with clear error messages — audit your deployment scripts early.

> 🔗 *Full issue tracker: [github.com/sgl-project/sglang/issues](https://github.com/sgl-project/sglang/issues)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-15**

---

### **1. Today's Highlights**  
The latest release series (b12387–b12376) focuses on critical stability fixes for **Qwen2VL**, **Hexagon (Snapdragon)**, and **Metal/Vulkan backends**, resolving severe correctness issues that caused garbage output or crashes. Significant progress continues in **speculative decoding (DFlash)** and **persistent disk caching**, with new PRs advancing both feature sets.

---

### **2. Releases & Breaking Changes**  
- **b12387**: Fixed `ctz64` on 32-bit systems ([#32273](https://github.com/ggml-org/llama.cpp/pull/32273))  
- **b12386**: Patched Hexagon FA no-mask tail issue ([#32243](https://github.com/ggml-org/llama.cpp/pull/32243))  
- **b12385**: Applied FFN weight scales to Qwen2VL models—critical fix for correct inference ([#32241](https://github.com/ggml-org/llama.cpp/pull/32241))  
- **b12383**: Improved backend split handling during incompatible weight loading ([#31775](https://github.com/ggml-org/llama.cpp/pull/31775))  

> ⚠️ **Migration Note**: The upcoming deprecation of the old batch API (`llama_batch`) is now formally tracked in [#32306](https://github.com/ggml-org/llama.cpp/pull/32306). Developers must migrate to `llama_batch_ext` by end-of-year.

---

### **3. New Model & Hardware Support**  
- ✅ **New Model Support**:  
  - Added support for **MiniMax-M3.1** via [#32301](https://github.com/ggml-org/llama.cpp/pull/32301), including vision validation.  
  - Added **ZONOS3-Mini TTS model** support ([#32020](https://github.com/ggml-org/llama.cpp/pull/32020)).  
  - Experimental DFlash2 support added for **Recursive Ripple-65B-Preview** ([#31904](https://github.com/ggml-org/llama.cpp/pull/31904)).  

- ✅ **Hardware & Backend Enhancements**:  
  - **Hexagon (Snapdragon 7 Gen 4)**: Added IQ2_XXS and NVFP4 support ([#31954](https://github.com/ggml-org/llama.cpp/pull/31954)), though early testing shows HMX MUL_MAT returns `inf` for `n >= 5` ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473)).  
  - **Vulkan**: Initial PowerVR GPU support merged ([#29315](https://github.com/ggml-org/llama.cpp/pull/29315)).  
  - **Metal**: Non-contiguous row support added for `NORM`/`L2_NORM` ops ([#30778](https://github.com/ggml-org/llama.cpp/pull/30778)).  

---

### **4. Performance & Optimization**  
- **Speculative Decoding (DFlash)**:  
  - Refactored DFlash-based speculative decoding methods for better modularity and scalability ([#32016](https://github.com/ggml-org/llama.cpp/pull/32016)).  
  - Graph-level top-k ordering fix improves consistency across backends ([#32299](https://github.com/ggml-org/llama.cpp/pull/32299)).  

- **Memory & Throughput**:  
  - **Qwen4Exp**: Unified KV cache now decodes independently per sequence, avoiding performance degradation from idle conversations (-37% slowdown previously observed) ([#32247](https://github.com/ggml-org/llama.cpp/pull/32247)).  
  - **MTMD**: Reduced video pixel aspect ratio and rotation bugs; improved decoder flexibility ([#32267](https://github.com/ggml-org/llama.cpp/pull/32267), [#32188](https://github.com/ggml-org/llama.cpp/pull/32188)).  
  - **Jinja Template Engine**: Reduced value allocation and lookup overhead ([#32023](https://github.com/ggml-org/llama.cpp/pull/32023)).  

- **Kernel Optimizations**:  
  - OpenCL: Added specialized GMEM-based Flash Attention kernel ([#32302](https://github.com/ggml-org/llama.cpp/pull/32302)).  
  - CUDA: Updated top-k kernel to preserve index order for consistent attention sums ([#32297](https://github.com/ggml-org/llama.cpp/pull/32297)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Affected Backend | Impact | Fix Status |
|---------|------|------------------|--------|------------|
| 🔴 High | **Qwen3.5 9B tool call corruption** when thinking enabled ([#20837](https://github.com/ggml-org/llama.cpp/issues/20837)) | CPU/CUDA | Frequent XML tool call leakage, inference stops | ❌ No fix yet |
| 🔴 High | **DeepSeek-V4.1-Flash prompt reuse corruption** with Engram n-gram history ([#30944](https://github.com/ggml-org/llama.cpp/issues/30944)) | CUDA/Vulkan | Single-token output corruption | ❌ In draft PR |
| 🔴 High | **Hexagon HMX MUL_MAT returns inf for n ≥ 5** ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473)) | Hexagon/HMVX | Garbled output, unstable inference | ❌ No fix |
| 🟡 Medium | **CPU→GPU prompt-cache restore stalls inference** under unified KV + concurrent requests ([#32280](https://github.com/ggml-org/llama.cpp/issues/32280)) | Vulkan/CUDA | Latency spikes in multi-user scenarios | ❌ No fix |
| 🟡 Medium | **FP8 KV cache aborts at load on Metal** (`SET_ROWS` failure) ([#32270](https://github.com/ggml-org/llama.cpp/issues/32270)) | Metal | Prevents use of FP8 quantization on Apple Silicon | ❌ No fix |

> 💡 **Note**: Multiple high-severity issues persist in **Vulkan**, **Hexagon**, and **Metal** backends—especially around speculative decoding, unified KV caches, and quantized memory layout.

---

### **6. What This Means for Application Developers**  
- **Migrate Early**: Begin transitioning from `llama_batch` to `llama_batch_ext` now—deprecation is imminent ([#32306](https://github.com/ggml-org/llama.cpp/pull/32306)).  
- **Avoid High-Risk Backends**: Do not deploy **Hexagon** or **Qwen3.5/Qwen4Exp** models in production until fixes land—critical correctness bugs exist.  
- **Enable Disk Caching**: Use `--cache-disk` (in progress via [#32303](https://github.com/ggml-org/llama.cpp/pull/32303)) for long-running agents to avoid re-prefilling prompts.  
- **Monitor Speculative Decoding**: DFlash-based systems are still experimental—test thoroughly under load, especially with unified KV and large context windows.  
- **Use Stable Models**: Prefer models with verified stable inference (e.g., Gemma, Llama, Qwen2) over experimental branches like `deepseek41`.  

> 📌 **Pro Tip**: For agents requiring low-latency reasoning, prioritize **Metal (Apple Silicon)** or **CUDA** builds—avoid Vulkan and Hexagon for now due to unresolved regressions.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-15**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its community integrations and infrastructure robustness, with key contributions focused on enhancing observability, improving parser resilience for Qwen models, and enabling broader hardware compatibility. Notably, the community is pushing for Intel NPU support via OpenVINO—highlighting growing demand for native AI acceleration across diverse silicon platforms.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **Intel NPU Backend (Request)**: A high-priority feature request (#19535) calls for native OpenVINO integration to enable Ollama to leverage Intel Core Ultra NPUs on AI PCs (e.g., MSI Stealth 16). Currently, these NPUs remain underutilized during inference.  
  🔗 [Issue #19535](https://github.com/ollama/ollama/issues/19535)  

- **Model Hosting Request**: Community member requests public FP16 hosting of `prometech_corp/prettybird_bce_basic_14b_coder` on Ollama Cloud (#13503), signaling demand for accessible, high-quality open models in cloud environments.  
  🔗 [Issue #13503](https://github.com/ollama/ollama/issues/13503)

- **Community Integrations Added**:  
  - **PipesHub** added to RAG & Knowledge Bases ([PR #19703](https://github.com/ollama/ollama/pull/19703)) – enables enterprise-grade search over Slack, Google Drive, Jira, and Microsoft 365.  
  - **SynapCores** added to Database & Embeddings ([PR #19702](https://github.com/ollama/ollama/pull/19702)) – self-hosted SQL/vector DB with Ollama-compatible API.  
  - **ForgeMind** added to Mobile Chat Interfaces ([PR #19700](https://github.com/ollama/ollama/pull/19700)) – Android app with local network/Tailscale discovery.  
  - **inference-vitals** added to Observability & Monitoring ([PR #19697](https://github.com/ollama/ollama/pull/19697)) – local dashboard tracking tokens/sec, latency, and system load.

---

### **4. Performance & Optimization**  
- **VRAM Accounting Fix**: PR #19632 addresses critical VRAM accounting bugs that caused incorrect model eviction, failed loads, and suboptimal GPU splitting across multiple issues (#19463, #18679, #18349, #16599). This improves memory efficiency and enables better multi-GPU utilization.  
  🔗 [PR #19632](https://github.com/ollama/ollama/pull/19632)  

- **Speculative Decoding Optimization**: PR #19663 enhances speculative verification batching in `mlxrunner`, allowing continuous draft generation during overlapping requests—critical for models using MTP/DFlash/DFlash2, preserving speedups in concurrent workloads.  
  🔗 [PR #19663](https://github.com/ollama/ollama/pull/19663)  

- **Tool Call Parser Resilience**: PR #16398 introduces tolerance for format drift in Qwen3.6 and Qwen3-coder tool calls, preventing parsing failures due to minor model-level output variations.  
  🔗 [PR #16398](https://github.com/ollama/ollama/pull/16398)

---

### **5. Stability & Regressions**  
- **Windows Long Prompt Crash**: Issue #19696 reports intermittent HTTP 500 errors (`chat prompt error`, `wsarecv reset`) on Windows after ~19 seconds when processing long prompts (>70k chars). Reproducible with agent workflows; retry usually succeeds. No fix PR yet.  
  🔗 [Issue #19696](https://github.com/ollama/ollama/issues/19696)  

- **WSL2 GPU Memory Limitation**: Issue #19519 reveals that NVIDIA RTX Spark N1X laptops (with 80GB unified GPU memory) are only offloading a fraction of the model in WSL2—despite sufficient GPU RAM—due to guest OS memory limits.  
  🔗 [Issue #19519](https://github.com/ollama/ollama/issues/19519)  

- **Qwen Tool Call Corruption**: Issue #19694 documents lost or corrupted tool-call arguments depending on content and streaming chunking, particularly affecting `qwen3.5` and `qwen3-coder` parsers.  
  🔗 [Issue #19694](https://github.com/ollama/ollama/issues/19694)  

- **CLI Crash on Short Digests**: PR #14251 fixes a runtime panic in `ollama list` when model digests are shorter than 12 characters.  
  🔗 [PR #14251](https://github.com/ollama/ollama/pull/14251)  

---

### **6. What This Means for Application Developers**  
- **Build resilient agents**: Expect intermittent crashes on long prompts in Windows environments—implement retry logic and monitor for `wsarecv reset`.  
- **Leverage community integrations**: Use PipesHub for enterprise knowledge retrieval, SynapCores for local vector DBs, and ForgeMind for mobile access—all Ollama-compatible.  
- **Prepare for heterogeneous deployment**: As Intel NPU support becomes a priority, design applications with backend-agnostic inference paths (via OpenVINO or similar).  
- **Expect improved model stability**: VRAM fixes and parser resilience mean fewer silent failures during model loading and tool use—especially important for production LLM orchestration.  
- **Monitor performance closely**: With speculative decoding optimizations now active, ensure your clients can benefit from batched drafting—ideal for high-throughput agent systems.

---  
*Data source: github.com/ollama/ollama | Updated: 2026-11-15*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-15**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues its momentum toward high-performance, secure, and scalable inference serving with the release of `v1.110.0-rc.3` and `v1.108.9`, both now signed via Cosign for supply chain integrity. Key developments include foundational work on congestion-aware request queuing in the router (`PR #51892`, `#51883`) and a major refactoring of the Prometheus metrics system to Rust for lower overhead and higher throughput (`PR #51541`). These changes lay the groundwork for improved reliability under load.

---

### **2. Releases & Breaking Changes**  
- **`v1.110.0-rc.3` and `v1.108.9` released**: Both versions are signed using Cosign with the key from [commit `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).  
  🔐 *Verify signature:* Use `cosign verify` with the public key from the referenced commit.  
  📌 **Note:** No breaking API changes reported; focus remains on stability and security hardening.  

- **Deprecation Warning**: `fix(config): warn about removed accounting settings` ([PR #51869](https://github.com/BerriAI/litellm/pull/51869)) adds runtime warnings when legacy `accounting_capture` or `accounting_sync_ack` are used—these settings have been deprecated and no longer function.

---

### **3. New Model & Hardware Support**  
No new models or hardware backends were added in this cycle. However:
- **Z.AI’s `glm-5.1` model pricing** was integrated ([PR #27782](https://github.com/BerriAI/litellm/pull/27782)), enabling accurate cost tracking for users routing through Z.AI’s Anthropic-compatible endpoint.
- The proxy now supports **OpenAI-style Skills routing via MCP** (in progress) — see [Issue #37074](https://github.com/BerriAI/litellm/issues/37074) and [PR #51877](https://github.com/BerriAI/litellm/pull/51877) for future support.

---

### **4. Performance & Optimization**  
- **Rust-based performance improvements** are being rolled out across core components:  
  - Prometheus metric logging replaced with a Rust callback (`PR #51541`), reducing CPU overhead and improving scalability.  
  - Parallel request limiter and dynamic rate limiting v3 ported to Rust (`PR #51537`, `#51540`) — expected to reduce latency spikes during peak loads.  
  - S3 logging backend refactored to use `s3_v2` exclusively (`PR #51893`), streamlining I/O path and reducing memory fragmentation.  

- **Congestion-aware request queuing** introduced:  
  - `PR #51892` and `#51883` enable priority-based queuing for 429/529 errors, preserving P0 requests during provider overload.  
  - Redis-backed coordination ensures consistent behavior across proxy instances.

---

### **5. Stability & Regressions**  
Top issues reported today:

| Severity | Issue | Status | Impact | Fix PR |
|---------|------|--------|--------|--------|
| ⚠️ High | `/v1/responses` budget reservation misaligned due to missing `max_output_tokens` forwarding | Open | Can cause overbilling in multi-user environments | [`#51445`](https://github.com/BerriAI/litellm/issues/51445) |
| ⚠️ High | Streaming requests not cancelled on client disconnect pre-first-chunk (regression in `v1.107.0`) | Open | Wastes compute and inflates costs | [`#51393`](https://github.com/BerriAI/litellm/issues/51393) |
| ⚠️ High | `Gemini image requests` return 200 OK but skip SpendLogs (silent failure) | Open | Breaks cost monitoring and audit trails | [`#49567`](https://github.com/BerriAI/litellm/issues/49567) |
| ⚠️ Medium | `MCP tools/list` hangs on legacy clients after upgrade (v1.108.0) | Open | Blocks agent tool discovery | [`#50065`](https://github.com/BerriAI/litellm/issues/50065) |
| ⚠️ Medium | `ModelNotMappedError` in `utils.py` on unknown model mapping | Open | Hinders integration testing | [`#51452`](https://github.com/BerriAI/litellm/issues/51452) |

> ✅ **Note**: Several fixes are in flight (e.g., `PR #51894` backports spend log fixes), but none yet merged.

---

### **6. What This Means for Application Developers**  
- **Use `v1.110.0-rc.3` for production proxies** if you prioritize security and stability—signatures are verified and critical bugs are being addressed.  
- **Avoid `max_tokens`-only budgeting** in `/v1/responses` until [`#51445`](https://github.com/BerriAI/litellm/issues/51445) is resolved—use `max_output_tokens` explicitly.  
- **Monitor streaming cancellations**: If your app relies on early client disconnect handling, test against `v1.107.0+` and expect delays before first chunk; consider rolling back until fix lands.  
- **Leverage upcoming features**: Prepare for key-level `disallowed_models` (`PR #50333`) and configurable `banned_request_body_params` (`#51765`) to tighten access control.  
- **Expect faster metrics and reduced latency** as Rust ports roll out—especially beneficial for high-throughput agent systems.

➡️ **Actionable**: Review your config for deprecated accounting settings and update any `COHERE_API_BASE` usage for embeddings (see [`#50248`](https://github.com/BerriAI/litellm/issues/50248)).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-15**

---

### **1. Today’s Highlights**  
The Unsloth team is advancing core inference capabilities with major progress on **voice-mode integration** in Desktop, enabling hands-free chat via audio.cpp with real-time speech synthesis and turn detection. On the infrastructure side, new support for **native DeepSeek-V4.1** and **FSDP2/TP/PP optimizations for Qwen3.8-Flash-Next** are being implemented, signaling deeper multi-GPU scalability. Critical ROCm compatibility fixes are also underway, particularly around GDN causal conv1d fallbacks and hybrid linear attention performance.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24h.*  
However, **Unsloth Desktop v0.1.917-beta** (package 2026.11.4) has introduced breaking changes:  
- `--load-mode none` now **forces mmap usage**, causing excessive RAM/SSD consumption (see [Issue #17605](https://github.com/unslothai/unsloth/issues/17605)). Users should avoid this flag until a fix lands.  
- The **"Show release notes" button fails to load changelogs**, suggesting a UI or backend misconfiguration ([Issue #17661](https://github.com/unslothai/unsloth/issues/17661)).

---

### **3. New Model & Hardware Support**  
- ✅ **Native DeepSeek-V4.1**: First-class model support via `unsloth/models/deepseek_v41`, including sparse attention, fp8/MXFP4 release loading, and engram tables — eliminating dependency on community Hugging Face ports ([PR #17778](https://github.com/unslothai/unsloth/pull/17778)).  
- ✅ **Qwen3.8-Flash-Next FSDP2/TP/PP**: Full distributed training support with frozen n-gram tables preserved across shards ([PR #17785](https://github.com/unslothai/unsloth/pull/17785)).  
- 🔧 **ROCm 7.14 / MI300X (gfx942)**: Known stride assertion issues in `_scaled_dot_product_flash_attention_backward` require MATH fallback; workaround confirmed but not yet resolved ([Issue #17548](https://github.com/unslothai/unsloth/issues/17548)).  
- 📱 **iOS Home Screen Icon Fix**: PR #17776 adds `apple-touch-icon.png` to resolve placeholder text icon issue ([Issue #17773](https://github.com/unslothai/unsloth/issues/17773)).

---

### **4. Performance & Optimization**  
- ⚠️ **Qwen3.8-Flash-Next UD 3.1 GGUFs**: Draft acceptance drops from ~74% to 56–66% at production temperature when using current MTP heads — indicates potential mismatch between new weights and existing draft logic ([Issue #17402](https://github.com/unslothai/unsloth/issues/17402)). A fix may require updated MTP heads.  
- 💥 **ROCm Hybrid Linear Attention**: Despite passing exactness probe, no net speedup on gfx1151 — step count halves but time per step doubles (~3.1x cost), indicating kernel inefficiency ([Issue #17738](https://github.com/unslothai/unsloth/issues/17738)).  
- 🚀 **Voice Mode Improvements**: Hands-free voice mode in Desktop is being refactored to keep audio models loaded alongside chat models, reducing latency and improving responsiveness ([PR #12384](https://github.com/unslothai/unsloth/pull/12384), [#14084](https://github.com/unslothai/unsloth/pull/14084), [#17069](https://github.com/unslothai/unsloth/pull/17069)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Link |
|---------|------|--------|------|
| High | `mtp stopped working` after llama.cpp CUDA upgrade (b12340-mix-6186f42) | Open | [Issue #17733](https://github.com/unslothai/unsloth/issues/17733) |
| High | `--load-mode none` forces mmap → high RAM/SSD usage | Open | [Issue #17605](https://github.com/unslothai/unsloth/issues/17605) |
| Medium | ROCm GDN causal conv1d falls back to MIOpen on gfx1151 (3.1x step cost) | Open | [Issue #17734](https://github.com/unslothai/unsloth/issues/17734) |
| Medium | Audio.cpp update fails in Docker due to "invalid cross-device link" | Closed | [Issue #17638](https://github.com/unslothai/unsloth/issues/17638) |
| Low | Studio transcribe fails on long audio due to missing `max_tokens` | Closed | [Issue #17598](https://github.com/unslothai/unsloth/issues/17598) |

> ✅ **Fix PRs exist for:**  
> - iOS icon: [PR #17776](https://github.com/unslothai/unsloth/pull/17776)  
> - Default model setting: [PR #17777](https://github.com/unslothai/unsloth/pull/17777)  
> - Project folder nesting: [PR #17779](https://github.com/unslothai/unsloth/pull/17779)

---

### **6. What This Means for Application Developers**  
- **Leverage native DeepSeek-V4.1** immediately for training and inference without relying on unstable community ports. Use `UNSLOTH_FSDP2=1` for scalable multi-GPU training.  
- **Avoid `--load-mode none`** in production environments until the mmap regression is fixed — it can cause severe memory pressure on large models.  
- **Monitor draft head compatibility** for UD 3.1 GGUFs — expect lower draft acceptance unless matched heads are released.  
- **Build voice-enabled agents** using the new voice mode stack (audio.cpp + real-time turn detection); use PRs #12384, #14084, and #17069 as foundation.  
- **Ensure ROSA/ROCm users test on gfx1151/gfx942** — hybrid linear attention gives no speedup, and GDN fallbacks degrade performance significantly.  

> 💡 *Pro tip:* Use `UNSLOTH_EXPERIMENTAL_HYBRID_PACKING=1` cautiously — it passes exactness checks but offers no benefit on some AMD cards. Monitor perf benchmarks before deployment.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*