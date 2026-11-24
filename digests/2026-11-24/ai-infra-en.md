# AI Infrastructure Digest 2026-11-24

> Generated: 2026-11-24 06:20 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in late 2026 is characterized by rapid convergence between high-performance inference engines, lightweight local runtimes, and unified gateways—driven by the demand for low-latency, scalable, and cost-efficient deployment across diverse hardware. Projects like vLLM and SGLang are pushing the envelope in distributed serving and speculative decoding, while llama.cpp and Ollama dominate edge and Apple Silicon optimization. LiteLLM continues to cement its role as the de facto gateway for multi-provider interoperability, and Unsloth accelerates fine-tuning and real-time inference with aggressive kernel-level optimizations. The ecosystem is increasingly defined by cross-architecture support, quantization innovation, and a growing focus on agent-native workflows.

---

### **2. Activity Comparison**

| Project       | Open Issues (High/Critical) | PRs Merged (Last 7 Days) | Releases (Last 7 Days) | Status |
|---------------|------------------------------|----------------------------|--------------------------|--------|
| **vLLM**      | 12 (4 critical)              | 8                          | None                     | Active development, stable nightly builds |
| **SGLang**    | 13 (3 critical)              | 10                         | None                     | Pre-v1.0 stabilization phase |
| **llama.cpp** | 15 (7 high)                  | 6                          | None                     | High instability on legacy GPUs |
| **Ollama**    | 10 (5 high)                  | 5                          | v0.40.18-rc0             | Recent release with regression risks |
| **LiteLLM**   | 9 (3 critical)               | 7                          | v1.110.3 / v1.109.4 / v1.108.16 | Security-focused update |
| **Unsloth**   | 14 (4 critical)              | 6                          | v0.1.923-beta            | Beta release with performance trade-offs |

> ✅ *vLLM and SGLang lead in PR velocity; Ollama and LiteLLM prioritize release stability and security hardening.*

---

### **3. Model Support Race**

| New Model / Architecture         | Supported By                      | Notes |
|----------------------------------|-----------------------------------|-------|
| **Qwen3.8-Flash-Next**           | vLLM (ROCm gfx950), SGLang        | vLLM leads with verified ROCm perf kernels |
| **Hy4 & Hy4-Flash (FP8)**        | vLLM (ROCm gfx950)                | First full enablement outside of NVIDIA |
| **Kimi-K3.1 (DFlash)**           | SGLang (CUDA + Ascend NPU)        | Only project with cross-platform speculative decoding |
| **SenseNova Loop**               | llama.cpp (PR #32588)             | Official author support, first in this space |
| **Inkling 2 Mini (GGUF)**        | Ollama (via llama.cpp b12651), Unsloth (v0.1.923-beta) | Unsloth leads in speed gains (1.9x); Ollama in integration |
| **Gemma 4 Multimodal**           | SGLang (breakable prefill CUDA graph) | SGLang enables image+text throughput |
| **FastWan / Qwen-Image-Flash**   | Unsloth (GGUF)                    | Early mover in multimodal translation pipelines |

> 🏆 **Winner**: **SGLang** — best overall model support coverage, especially in speculative decoding and cross-backend compatibility.  
> 🥈 **Runner-up**: **vLLM** — strongest ROCm and MoE optimization for next-gen hardware.

---

### **4. Performance Frontier**

| Optimization Focus          | Leading Projects                              | Key Advances |
|-----------------------------|-----------------------------------------------|--------------|
| **KV Cache & Memory Efficiency** | Ollama (MLX), SGLang (HiCache), vLLM (paged-MQA) | Ollama’s KV cache bug (16-bit only) is a major blocker; SGLang improves eviction logic |
| **Speculative Decoding**     | vLLM (Humming kernel), SGLang (DFlash)         | vLLM replacing Marlin for broader architecture support |
| **Kernel-Level Fusions**     | SGLang (RMSNorm fused QKV), vLLM (MoE all-reduce fusion), Unsloth (INT8 attention) | SGLang: 8.6μs → 1.9μs RMSNorm on ROCm |
| **Quantization Intelligence** | llama.cpp (auto-optimal type selection), Unsloth (multi-quant GGUF) | llama.cpp targets file size; Unsloth enables A/B testing |
| **Distributed Serving**      | vLLM (TP=8 MoE fusions), SGLang (async pipeline, PD disaggregation) | vLLM leads in tensor parallelism efficiency |
| **Edge/Local Runtime Speed** | Unsloth (Inkling 2 Mini: 1.9x faster), Ollama (Metal kernels) | Unsloth dominates consumer GPU performance |

> 🔥 **Top Performer**: **SGLang** — most advanced async and disaggregated pipeline design.  
> ⚡ **Speed Champion**: **Unsloth** — highest raw inference gains on widely available GPUs.

---

### **5. Layer Positioning**

| Project       | Primary Layer                 | Role Summary |
|---------------|-------------------------------|--------------|
| **vLLM**      | **Inference Engine (Server-Scale)** | High-throughput, multi-GPU, MoE-optimized serving; targeting datacenter clusters |
| **SGLang**    | **Inference Engine + Gateway** | Full-stack engine with async pipelines, multi-backend support, and emerging API gateway capabilities |
| **llama.cpp** | **Local Runtime (Edge/Device)** | Lightweight, cross-platform, ideal for mobile, embedded, and CPU/GPU hybrid deployments |
| **Ollama**    | **Local Runtime + CLI Gateway** | Developer-friendly wrapper around llama.cpp; strong Apple Silicon and Windows support |
| **LiteLLM**   | **API Gateway + Proxy Layer** | Multi-provider abstraction layer with cost control, logging, and identity verification |
| **Unsloth**   | **Fine-Tuning + Inference Accelerator** | Specialized for training (GRPO/AsyncGRPO) and inference acceleration via optimized kernels |

> 💡 **Strategic Differentiation**:  
> - **vLLM/SGLang**: Building the future of large-scale inference.  
> - **llama.cpp/Ollama**: Powering edge and developer-first use cases.  
> - **LiteLLM**: Enabling enterprise-grade orchestration.  
> - **Unsloth**: Bridging training and inference performance.

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-11-24 activity):**
1. **Hardware Diversification is Now Mainstream**  
   ROCm, AMD NPU, Intel XPU, Apple MLX, and TPU are no longer experimental—projects now ship verified support, often with dedicated kernels. **ROCm gfx950 (MI355X)** and **AMD NPU (Lemonade)** are key battlegrounds.

2. **Speculative Decoding is Maturing Beyond NVIDIA**  
   SGLang and vLLM are enabling DFlash across CUDA and Ascend backends. The shift from Marlin to **Humming** (vLLM) signals a move toward architecture-aware, portable speculative decoding.

3. **Agent Workflows Demand Deep Integration**  
   Features like **prefix caching**, **structured output preservation**, **tool schema fidelity**, and **KV cache awareness** are now central—not optional. Regressions in these areas (e.g., Ollama’s 16-bit KV cache) can break agent pipelines.

4. **Security & Trust Are Non-Negotiable**  
   LiteLLM’s adoption of **keyless cosign verification** via GitHub OIDC reflects a broader industry shift toward verifiable, reproducible releases—especially critical for production proxies.

5. **Quantization is No Longer Just Compression**  
   From auto-optimal type selection (llama.cpp) to multi-quant GGUF support (Unsloth), quantization is evolving into a dynamic, context-aware optimization strategy.

---

### **Actionable Takeaways for Application Developers**
- ✅ **Prioritize SGLang or vLLM** for large-scale, multi-GPU inference with speculative decoding.
- ✅ **Use Unsloth** for real-time agents on consumer GPUs—its 1.9x Inkling 2 Mini speedup is transformative.
- ✅ **Leverage LiteLLM** for secure, auditable, multi-provider APIs with cost controls.
- ⚠️ **Avoid Ollama v0.40.18+ on Apple Silicon** until KV cache issues are resolved.
- ⚠️ **Don’t deploy llama.cpp v1.0-dev on V100/MI300X**—use v0.9.0-dev for stability.
- 🔍 **Monitor regressions closely**: Many projects have open critical issues affecting production workloads—especially on older hardware and mixed-GPU systems.

> 🎯 **Bottom Line**: The infrastructure stack is rapidly maturing—but reliability still hinges on careful version selection and proactive monitoring. Choose based on your **hardware target**, **latency SLA**, and **agent complexity**.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-24**

---

### **1. Today’s Highlights**  
The vLLM project continues accelerating toward full support for next-generation hardware and advanced inference patterns. Key developments include a major push to replace Marlin with the more flexible and architecture-aware **Humming quantization kernel across NVIDIA GPUs**, and active work on **ROCm gfx950/MI355X performance optimization for Qwen3.8-Flash-Next**. Additionally, the Rust frontend is nearing default adoption, with critical fixes to build stability and cache invalidation.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, **PR #69383** introduces a crucial change: excluding frontend and install-time environment variables from `compile_factors`, preventing unnecessary invalidation of `torch.compile` caches when switching between Python and Rust frontends. This improves development workflow efficiency.  
🔗 [PR #69383](https://github.com/vllm-project/vllm/pull/69383)

---

### **3. New Model & Hardware Support**  
- **ROCm gfx950 (MI355X)**: Full enablement for **Hy4 and Hy4-Flash models** (`tencent/Hy4-FP8`, `tencent/Hy4-flash-FP8`) with DFly speculative decoding and verified via recipe.  
  🔗 [PR #68839](https://github.com/vllm-project/vllm/pull/68839)  
- **Intel GPU (XPU)**: Enhanced LoRA performance via dense GEMM fallback for single-adapter prefill batches; FP8 linear kernel now properly flattens N-D inputs.  
  🔗 [PR #66752](https://github.com/vllm-project/vllm/pull/66752), [PR #68308](https://github.com/vllm-project/vllm/pull/68308)  
- **TPU**: Initial support for **Gemma4 suppression-token caching** with improved stability.  
  🔗 [PR #66525](https://github.com/vllm-project/vllm/pull/66525)  

---

### **4. Performance & Optimization**  
- **MoE Optimization**: Fusing LatentMoE TP all-reduces using `reduce_commutative` yields up to **+5.74% output token throughput** and **–3.42% TPOT** on 8×H200 (TP8).  
  🔗 [PR #68469](https://github.com/vllm-project/vllm/pull/68469)  
- **Whisper Decoder**: Replaying CUDA graphs on audio admission reduces decode latency by avoiding redundant graph capture.  
  🔗 [PR #69552](https://github.com/vllm-project/vllm/pull/69552)  
- **Qwen4Exp**: Added SM100 TP=2 and TP=8 skinny GEMM plans, eliminating reliance on cuBLAS for BF16 projections on B200.  
  🔗 [PR #69529](https://github.com/vllm-project/vllm/pull/69529)  
- **ROCm**: New paged-MQA logits kernel for DSA indexer MTP verify rows on gfx950 — targeted performance uplift for speculative decoding.  
  🔗 [PR #68596](https://github.com/vllm-project/vllm/pull/68596)  

---

### **5. Stability & Regressions**  
- **Critical Crash (CUDA MPS + Blackwell)**: Illegal memory access (Xid 31) during CUDA graph capture observed with Qwen3.6-27B-FP8 + LoRA on RTX PRO 6000 Blackwell under CUDA MPS.  
  🔗 [Issue #67488](https://github.com/vllm-project/vllm/issues/67488)  
- **CPU KV Offload Crash**: Xid 31 fault on NVIDIA vGPU due to `cuMemcpyBatchAsync` failure even with one valid descriptor.  
  🔗 [Issue #61052](https://github.com/vllm-project/vllm/issues/61052)  
- **Weight Memory Spike**: DeepSeek-V4.1 model weight memory increased by ~12.5 GiB per GPU between two nightly builds (H100), likely due to an internal state or load change.  
  🔗 [Issue #68647](https://github.com/vllm-project/vllm/issues/68647)  
- **Model Startup Failure**: OmniASR fails at startup due to `padding_mask` being kept on CPU but forwarded to `get_audio_features`.  
  🔗 [Issue #69320](https://github.com/vllm-project/vllm/issues/69320)  

> ✅ *Fix PRs exist for some issues (e.g., #66752, #66327), but no PRs directly address the above regressions yet.*

---

### **6. What This Means for Application Developers**  
- **Use Rust frontend with confidence**: With `torch.compile` cache stability improved via #69383, developers can now switch between Python and Rust frontends without cache pollution—ideal for CI/CD and rapid iteration.  
- **Optimize for Hopper/Blackwell**: Leverage the new MoE fusions (#68469) and GEMM plans (#69529) to maximize throughput on B200 and H200 clusters.  
- **Avoid regression traps**: Monitor nightly builds closely—especially for large models like DeepSeek-V4.1—due to unexplained weight memory increases.  
- **Enable ROCm early**: For users targeting MI355X with Qwen3.8-Flash-Next or Hy4 models, ROCm support is maturing rapidly with dedicated perf kernels and verification.  
- **Watch speculative decoding**: The ongoing shift from Marlin to Humming (#65560) will expand supported formats and improve cross-arch consistency—plan for future config changes.  

➡️ **Actionable**: Test your models on recent nightlies, especially if using speculative decoding, multi-GPU setups, or mixed precision on newer architectures.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-24**

---

### **1. Today's Highlights**  
The SGLang project continues to solidify its position as a high-performance, multi-backend inference engine with active development in **prefill-decode disaggregation**, **MoE and Mamba2 optimizations**, and **cross-platform support for NPU (Ascend) and AMD ROCm**. Key PRs enable speculative decoding on Kimi-K3.1 across CUDA and Ascend backends, while performance improvements target latency-sensitive workloads via kernel fusion and async pipeline design.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes announced today.*  
However, the **SGLang 1.0 Release Tracker (#50045)** is actively being discussed, signaling the project’s move toward stability and API compatibility guarantees. Upgrades from `0.5.x` may require configuration updates—see [Upgrade notes](https://github.com/sgl-project/sglang/issues/50045).

---

### **3. New Model & Hardware Support**  
- ✅ **Kimi-K3.1**: Full DFlash speculative decoding now supported on **Ascend NPU** ([PR #52518](https://github.com/sgl-project/sglang/pull/52518)) and **CUDA** ([PR #51689](https://github.com/sgl-project/sglang/pull/51689)).  
- ✅ **Mamba2**: Performance optimization for `_chunk_scan_fwd_kernel` compilation during serving on NemotronH ([Issue #51628](https://github.com/sgl-project/sglang/issues/51628)) — pre-compilation recommended to avoid first-request stalls.  
- ✅ **AMD ROCm**: Expanded CI coverage with 111 additional CUDA kernel-unit tests now running on AMD ([PR #51524](https://github.com/sgl-project/sglang/pull/51524)), improving regression detection.  
- ✅ **Gemma 4 Multimodal**: Breakable prefill CUDA graph enabled by default ([PR #52404](https://github.com/sgl-project/sglang/pull/52404)), improving throughput for image+text inputs.

---

### **4. Performance & Optimization**  
- 🚀 **AMD ROCm**:  
  - gfx1250 RMSNorm fused QKV read-in-place reduces norm time from **8.6μs → 1.9μs per layer** ([PR #49347](https://github.com/sgl-project/sglang/pull/49347)).  
  - Coalescer mode for DP prefill delayer improves load balancing; reduces micro-batch gaps ([PR #51265](https://github.com/sgl-project/sglang/pull/51265)).  
- 🔥 **NVIDIA (FP8)**:  
  - GDN RMSNormGated + attention sigmoid_mul fused with blockwise FP8 quantization for Qwen3.5 — targets hybrid MoE models ([PR #52047](https://github.com/sgl-project/sglang/pull/52047)).  
- ⚙️ **Async Pipeline**:  
  - AsyncPP prefill stages now copy logprob rows before pickling ([PR #52196](https://github.com/sgl-project/sglang/pull/52196)), enabling fully asynchronous pipeline execution.  
- 📈 **HiCache & Disaggregation**:  
  - Per-path Mamba state cap now accounts for host copies to prevent eviction-induced hit rate drops ([PR #50954](https://github.com/sgl-project/sglang/pull/50954)).  
  - PP prefill stage sends last KV chunk immediately after forward completion, reducing latency in PD-disaggregated setups ([PR #50958](https://github.com/sgl-project/sglang/pull/50958)).

---

### **5. Stability & Regressions**  
- ❌ **Critical**:  
  - **Host pin budget OOM-kills MiniMax-H3** on 24GB GPU + 32GB host; server still reports ready but returns 503 errors ([Issue #51188](https://github.com/sgl-project/sglang/issues/51188)).  
  - **Radix eviction policy ignores priority flag**, evicting highest-priority prefixes first ([Issue #52423](https://github.com/sgl-project/sglang/issues/52423)).  
- ⚠️ **High Severity**:  
  - First large prefill bursts stall due to **Triton kernel compilation** (`_chunk_scan_fwd_kernel`) on fresh servers ([Issue #51628](https://github.com/sgl-project/sglang/issues/51628)) — fix: pre-compile during engine init.  
  - `--max-running-requests 0` silently clamped to 1, causing unexpected behavior ([Issue #52483](https://github.com/sgl-project/sglang/issues/52483)).  
- 🛠️ *Fixes in progress*: PRs addressing DFlash draft layout assumptions ([#40144](https://github.com/sgl-project/sglang/issues/40144)) and reasoning parser marker handling ([#52612](https://github.com/sgl-project/sglang/issues/52612)) are under review.

---

### **6. What This Means for Application Developers**  
- **Use pre-compiled kernels** for Mamba2 and MoE models (especially on fresh instances) to avoid initial request stalls.  
- **Leverage async pipelines and PD disaggregation** for low-latency, scalable inference—ensure your deployment uses updated SGLang builds with AsyncPP and coalescing enabled.  
- **Monitor memory usage carefully** when using HiCache or diffusion models; host pin budget limits can cause silent failures.  
- **Expect stricter config validation in v1.0**—silent defaults will be replaced with explicit errors; prepare migration scripts early.  
- **Optimize for AMD/ROCm** with recent kernel fusions and expanded CI testing—ideal for cost-sensitive, heterogeneous deployments.

---  
*Data source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-24**

---

### **1. Today’s Highlights**  
The latest updates focus on backend-specific performance and correctness improvements, particularly for CUDA, ROCm/HIP, Metal, and Vulkan. Key progress includes optimized `FLASH_ATTN_EXT` bias handling, enhanced BF16 support in Metal and CUDA for `MUL_MAT`, and critical fixes for GPU timeouts on iPhone (Bonsai) and segmentation faults in HIP environments. A major quantization improvement enables automatic selection of optimal quant types to target file size with minimal error.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were published today. However, several PRs introduce behavioral changes:  
- **`server: ask exec_shell_command for a short description`** (#32894): The shell tool schema now requires a `description` field (plain-text summary), which clients may display instead of raw command strings. This is a breaking change for custom tool integrations expecting no schema changes. [PR #32894](https://github.com/ggml-org/llama.cpp/pull/32894)  
- **`gguf-py : do not write metaspace prepend_scheme "always" for BPE vocabs`** (#32917): Fixes incorrect metadata emission for BPE models (e.g., mmBERT), preventing misinterpretation during model loading. [PR #32917](https://github.com/ggml-org/llama.cpp/pull/32917)

---

### **3. New Model & Hardware Support**  
- ✅ **SenseNova Loop**: Official support added via PR #32588 — enables inference for the SenseNova Loop model family. Maintained by the model authors. [PR #32588](https://github.com/ggml-org/llama.cpp/pull/32588)  
- ✅ **Vulkan on Android Termux**: Added build and documentation support for native Android Vulkan drivers via Termux. Enables mobile deployment on ARM devices. [PR #32261](https://github.com/ggml-org/llama.cpp/pull/32261)  
- ✅ **WebGPU ROLL support**: Added `ROLL` operation support, improving compatibility across backends. [PR #31887](https://github.com/ggml-org/llama.cpp/pull/31887)  

---

### **4. Performance & Optimization**  
- 🔥 **CUDA: NVFP4 dequant speed increase** (#32875): Significant improvement in dequantization speed for NVFP4 kernels, directly addressing poor inference performance on V100 GPUs with Inkling 2 Mini. Critical for long-context agent workloads. [PR #32875](https://github.com/ggml-org/llama.cpp/pull/32875)  
- ⚡ **CUDA: walk MMQ stream-k column tiles outermost** (#32921): Optimizes memory access patterns in MMQ quantization, reducing cache thrashing and improving throughput under high load. [PR #32921](https://github.com/ggml-org/llama.cpp/pull/32921)  
- 📈 **Vulkan: reduce cm1 int8 MMQ gap** (#32395 series): Part 3 adds load-only A prefetch optimization, narrowing performance differences between AMD shader compilers. [PR #32395](https://github.com/ggml-org/llama.cpp/pull/32395)  
- 🎯 **Quantization: auto-optimal type selection** (#15550): Refactored Pareto optimization logic to automatically choose quant types targeting specific file size (e.g., 10 MB) while minimizing accuracy loss. Ideal for constrained deployments. [PR #15550](https://github.com/ggml-org/llama.cpp/pull/15550)  

---

### **5. Stability & Regressions**  
| Issue | Severity | Summary | Fix Status |
|------|----------|--------|------------|
| [#32630](https://github.com/ggml-org/llama.cpp/issues/32630) | High | Segmentation fault after upgrading `hip-runtime-amd` to 10.1-2.1 | Open |
| [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) | High | Prefill regression on V100 (sm_70) in v1.0 for hybrid GDN models | Open |
| [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) | High | Draft-model speculative decoding ~2.2–2.4× slower on Qwen3.5 (GDN hybrid) on CUDA | Open |
| [#32858](https://github.com/ggml-org/llama.cpp/issues/32858) | Medium | `q6_K` token_embd rejected by Vulkan_Host buffer → fallback to CPU, causing GPU slowdown | Open |
| [#30892](https://github.com/ggml-org/llama.cpp/issues/30892) | High | SYCL F16: NaN output on Qwen3.8-27B Q4_K_M since #29107 | Open |
| [#30973](https://github.com/ggml-org/llama.cpp/issues/30973) | Medium | Metal aborts on MUL_MAT with BF16 src1 at K ≥ 64, batch > 8 | Open |

> **Note**: Several regressions affect production-grade inference on older GPUs (V100, MI300X) and newer hardware (iPhone Bonsai, Intel Arc). No fix PRs yet available.

---

### **6. What This Means for Application Developers**  
- **Use `--quantize-auto`** (via PR #15550) to achieve optimal compression/accuracy trade-offs when deploying models to edge or low-storage environments.  
- **Avoid `q6_K` on Vulkan** if you want GPU acceleration — it silently falls back to CPU (see #32858). Use `q4_K_M` or `q8_0` instead for better GPU utilization.  
- **Expect performance regressions on V100 and MI300X** for hybrid (GDN) models — consider pinning to `v0.8.0` or earlier until fixes land.  
- **Update tooling integrations** to include `description` in `exec_shell_command` payloads (PR #32894) for better UX in agentic workflows.  
- **Monitor for crashes in HIP/CUDA** environments post-upgrade; ensure runtime versions are compatible with current `llama.cpp` master.  

👉 **Recommendation**: For production agents using draft models or speculative decoding, avoid `v1.0.0-dev` builds until #32776 and #32810 are resolved. Use `v0.9.0-dev` or earlier for stability on legacy GPUs.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-24**

---

### **1. Today's Highlights**  
The latest release, **v0.40.18**, brings significant performance and stability improvements for Apple Silicon (MLX) and `inkling2`-based models, including Metal kernel optimizations and updated `llama.cpp` support. Critical issues around VRAM exhaustion on M-series Macs and CUDA OOM crashes on Jetson AGX Orin have been highlighted, signaling ongoing hardware-specific tuning needs.

---

### **2. Releases & Breaking Changes**  
- **v0.40.18-rc0** released with:  
  - ✅ MLX: Fused Inkling residual mixing on Metal via [PR #19808](https://github.com/ollama/ollama/pull/19808)  
  - ✅ MLXRunner: Shared tensor helpers and model setup across architectures ([#19805](https://github.com/ollama/ollama/pull/19805))  
  - 🔧 `llama.cpp`: Version bumped to `b12651`, JetPack 5 support removed ([#19865](https://github.com/ollama/ollama/pull/19865))  

> ⚠️ **Migration Note**: Users upgrading from v0.40.17 may experience regressions (see #19866). Reverting or waiting for patch releases is advised until stability is confirmed.

---

### **3. New Model & Hardware Support**  
- ✅ **Inkling 2 Mini GGUF** now supported via `llama.cpp` master (`b12651`) — enables `inkling2_loop` and `inkling2v` projector loading ([#19826](https://github.com/ollama/ollama/issues/19826), [#19861](https://github.com/ollama/ollama/pull/19861))  
- ✅ **Jetson AGX Orin (JetPack 6)**: Fix available via `GGML_CUDA_NO_VMM=ON` build flag ([#19815](https://github.com/ollama/ollama/issues/19815))  
- ✅ **AMD RX 5500 (gfx1010)**: Vulkan backend now works after fix in `llama-server --list-devices` ([#19589](https://github.com/ollama/ollama/issues/19589))  
- ✅ **Windows ARM64**: Gemma3 vision now loads successfully (though timeout persists during CPU image processing; see [#19444](https://github.com/ollama/ollama/issues/19444))

---

### **4. Performance & Optimization**  
- 🚀 **MLX Metal Kernels**: Optimized decoding, prefill, and draft rounds for Inkling 2 via dedicated Metal kernels ([#19843](https://github.com/ollama/ollama/pull/19843))  
- 📈 **KV Cache Quantization**: Not yet implemented for MLX runner — currently ignores `OLLAMA_KV_CACHE_TYPE`, causing OOM at 16K context on 24GB Macs ([#19857](https://github.com/ollama/ollama/issues/19857))  
- 📊 **Metrics Logging**: Opt-in per-request inference metrics (latency, tokens/sec) added via `OLLAMA_LOG_METRICS=1` ([#19869](https://github.com/ollama/ollama/pull/19869))  
- ⏱️ **Load Duration Tracking**: Now reported even for load-only requests (`/api/generate` without prompt) ([#19868](https://github.com/ollama/ollama/pull/19868))

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Notes |
|------|----------|--------|-------|
| [#19866](https://github.com/ollama/ollama/issues/19866): v0.40.17 performance regression (M4 Pro MLX Qwen 3.8 27b) | 🔴 High | Open | Major slowdown reported; no fix PR yet |
| [#19857](https://github.com/ollama/ollama/issues/19857): MLX KV cache always 16-bit → OOM on 24GB Macs | 🔴 High | Open | Critical memory issue; workaround: reduce context |
| [#18131](https://github.com/ollama/ollama/issues/18131): MLX prefix cache causes heavy swap on 32GB Apple Silicon | 🟡 Medium | Open | Expected growth, not a leak — affects agent workloads |
| [#19815](https://github.com/ollama/ollama/issues/19815): Jetson AGX Orin CUDA OOM in `cuMemAddressReserve` | 🔴 High | Open | Crashes every image request; requires build flag fix |
| [#19854](https://github.com/ollama/ollama/issues/19854): Built-in parsers drop output when no tools declared | 🟡 Medium | Open | Response content lost in non-stream mode |

> ✅ **Fixed PRs**:  
> - [#19860](https://github.com/ollama/ollama/pull/19860): Fixes legacy template panic in `if...else` blocks (#19859)  
> - [#19855](https://github.com/ollama/ollama/pull/19855): Preserves tool markup when no tools are present (#19854)  
> - [#19853](https://github.com/ollama/ollama/pull/19853): Retains unmodeled keys like `strict` in `ToolFunction` (#19852)

---

### **6. What This Means for Application Developers**  
- 🛠️ **For agents & long-running workflows**: Avoid `qwen3.8:27b-mlx` on 24–32GB Apple Silicon systems due to unchecked KV cache and prefix cache bloat ([#18131](https://github.com/ollama/ollama/issues/18131), [#19857](https://github.com/ollama/ollama/issues/19857)). Use `OLLAMA_KV_CACHE_TYPE=fp16` only if you control the runtime environment.  
- 💻 **For Windows deployments**: Use `OLLAMA_RUNNER=llama.cpp` instead of MLX if running multi-user or headless services — avoid login-session dependency via [issue #19862](https://github.com/ollama/ollama/issues/19862).  
- 🔄 **For API integrations**: Expect silent loss of `strict`, `tool_choice`, and other function-level parameters unless using `ToolFunction` with `Extra` field (fixed in [#19853](https://github.com/ollama/ollama/pull/19853)).  
- 📦 **For local AI tooling**: Leverage new integrations like **RocketRide** ([#19867](https://github.com/ollama/ollama/pull/19867)), **TealKit** ([#19863](https://github.com/ollama/ollama/pull/19863)), and **Hushavyr** ([#19858](https://github.com/ollama/ollama/pull/19858)) for enhanced agent and code review pipelines.

> ✅ **Recommendation**: Monitor v0.40.18+ stability closely; avoid upgrading to v0.40.17 until #19866 is resolved. Use `OLLAMA_LOG_METRICS=1` for observability in production inference flows.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-24**

---

### **1. Today's Highlights**  
The LiteLLM project released **v1.110.3**, **v1.109.4**, and **v1.108.16**, with a critical shift to *keyless verification* for Docker images via `cosign`—validating releases now requires OIDC-based identity from GitHub Actions. Major progress was made in proxy stability and cost control, including fixes for Kafka-backed request log replication, TPM enforcement during realtime sessions, and robust handling of model budgeting across teams.

---

### **2. Releases & Breaking Changes**  
- **v1.110.3 / v1.109.4 / v1.108.16** (released today):  
  - **Keyless image signing**: Starting with v1.108.10, all new images are signed using keyless `cosign` with GitHub OIDC identity (`https://token.actions.githubusercontent.com`). Verification now requires:  
    ```bash
    cosign verify \
      --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      ghcr.io/berriai/litellm:v1.110.3
    ```
    [Issue #52837](https://github.com/BerriAI/litellm/issues/52837) | [Docs](https://docs.litellm.ai/docs/deployment/security#verifying-image-signatures)

- **Breaking Change (Proxy)**:  
  - `chatgpt/` deployments now return `401` if the underlying credential (e.g., ChatGPT subscription login) does not exist. Previously, it would silently fail or prompt for login.  
    [PR #53744](https://github.com/BerriAI/litellm/pull/53744)

---

### **3. New Model & Hardware Support**  
- **NVIDIA NIM**: Full support for `logprobs` and `top_logprobs` on models that natively serve them (e.g., Llama 3, Mistral). Now correctly forwarded through LiteLLM without requiring `allowed_openai_params`.  
  [PR #54008](https://github.com/BerriAI/litellm/pull/54008) | [PR #54043 (backport)](https://github.com/BerriAI/litellm/pull/54043)

- **Databricks**: Added per-deployment OAuth M2M credentials (client_id/client_secret), enabling service principal isolation per workspace.  
  [PR #50675](https://github.com/BerriAI/litellm/pull/50675)

- **Vertex AI / Gemini**: Improved tool schema handling (preserving `$defs`, fixing boolean sub-schema crashes), and enhanced structured output support for newer models.  
  [PR #53478](https://github.com/BerriAI/litellm/issues/53478) | [PR #51137](https://github.com/BerriAI/litellm/pull/51137)

---

### **4. Performance & Optimization**  
- **Realtime Sessions**: Enforced TPM limits per turn, preventing abuse in long-running sessions (e.g., voice agents).  
  [PR #53689](https://github.com/BerriAI/litellm/pull/53689)

- **Kafka Replication**: Regional proxy workers now replicate request logs and spend metadata over Kafka, enabling cross-region auditability and consistent cost reporting.  
  [PR #54061](https://github.com/BerriAI/litellm/pull/54061)

- **Image Edits**: Fixed incorrect form encoding for JSON-based image edits (OpenAI/Azure), reducing upstream rejection risk.  
  [PR #53864](https://github.com/BerriAI/litellm/pull/53864)

---

### **5. Stability & Regressions**  
- **Critical Crash (Proxy)**: Proxy startup fails on PostgreSQL databases with `SQL_ASCII` encoding due to `ValueError: invalid literal for int() with base 10`.  
  [Issue #52247](https://github.com/BerriAI/litellm/issues/52247) — Fix pending; workaround: use UTF8 encoding.

- **Cost Control Regression**: Multi-window budget resets can leave stale spend in cache if database commit succeeds but cache update fails.  
  [Issue #36941](https://github.com/BerriAI/litellm/issues/36941) — PRs under review.

- **Structured Output Failure**: `vertex_ai/claude-haiku-5-5` silently falls back to JSON tool instead of native structured output when `response_format` is set.  
  [Issue #53478](https://github.com/BerriAI/litellm/issues/53478) — Patch in progress.

- **Stream Corruption Risk**: Truncated SSE streams go undetected. Opt-in `strict_stream_completion` feature proposed.  
  [Issue #42085](https://github.com/BerriAI/litellm/issues/42085) — PR #42085

---

### **6. What This Means for Application Developers**  
- **Security**: Update your image verification scripts to use **keyless `cosign`** with OIDC issuer. Legacy key-based verification will no longer work.  
- **Cost Control**: Use **per-principal budgets** (team/user/key) to manage spending across model families. [Feature Request #53946](https://github.com/BerriAI/litellm/issues/53946) — currently open but widely used.
- **Reliability**: Avoid `SQL_ASCII` DBs in production proxies. Use UTF8 to prevent startup crashes.
- **Accuracy**: For structured outputs on Vertex AI/Gemini, ensure you're on v1.110+ and explicitly check `supports_native_structured_output` in model mappings.
- **Streaming Apps**: Consider enabling `strict_stream_completion` (if available) to detect dropped responses early.

> ✅ **Action Items**:  
> - Audit image verification pipelines.  
> - Upgrade to v1.110.3+ for improved NIM and cost control features.  
> - Test `chatgpt/` deployments post-upgrade—credentials must be valid.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-24**

---

### **1. Today's Highlights**  
Unsloth v0.1.923-beta delivers a major performance leap with **Inkling 2 Mini running up to 1.9x faster on all GPUs**, including RTX Spark optimizations and faster GRPO/AsyncGRPO training. The release also introduces **multi-format support for audio, subtitles, and image translation**, alongside new knowledge management features in Studio.

---

### **2. Releases & Breaking Changes**  
- **v0.1.923-beta**:  
  - Inkling 2 Mini achieves **up to 1.9x faster inference** across GPU backends (CUDA, ROCm, Metal).  
  - New: **faster GRPO and AsyncGRPO training pipelines**, enabling more efficient fine-tuning workflows.  
  - Added **Qwen-Image-Flash and FastWan** model support via GGUF.  
  - Introduced **Knowledge page in Settings** for context-aware agent memory.  
  - Supports **audio, subtitle, and image translation** in Unsloth Translate.  
  🔗 [GitHub Release v0.1.923-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.923-beta)

> ⚠️ **Note**: Some users report regression in Inkling-2-Mini GPU offloading speed post-update (down from 40 → 12 tokens/s), tracked in [#19137](https://github.com/unslothai/unsloth/issues/19137).

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - `Qwen-Image-Flash` (GGUF) now supported.  
  - `FastWan` (multimodal) added as experimental model.  
- **Backends & Accelerators**:  
  - **AMD NPU (Lemonade/FastflowLM)**: Still under investigation due to JSON parsing crash ([#18763](https://github.com/unslothai/unsloth/issues/18763)).  
  - **ROCm**: Partial support confirmed; issues reported with system libamdhip64 loading in Studio ([#18948](https://github.com/unslothai/unsloth/issues/18948)).  
  - **Apple Silicon M1 Pro**: Confirmed working, but `inkling2_loop` model type not recognized ([#18972](https://github.com/unslothai/unsloth/issues/18972)).  
- **Quantization Formats**:  
  - Full support for **GGUF** (including multi-quant variants of same model repo) via PR #19169.

---

### **4. Performance & Optimization**  
- **Inference Speed**:  
  - **Inkling 2 Mini** runs **1.9x faster** on all GPUs (RTX, AMD, Apple Silicon) during decoding.  
  - **Krea 2 Turbo** renders **5.1% faster** on L4, **8.1% faster** on RTX PRO 6000 (G4) using INT8 attention without mask ([PR #19208](https://github.com/unslothai/unsloth/pull/19208)).  
- **Memory & Kernel Efficiency**:  
  - **CFG replica activation counting** now includes partner card’s activations before admission ([PR #19209](https://github.com/unslothai/unsloth/pull/19209)).  
  - **Prompt count reuse** in GGUF context fit avoids redundant tokenization ([PR #19159](https://github.com/unslothai/unsloth/pull/19159)).  
- **CI/Build Optimization**:  
  - Backend CI now uses `uv pip install --system` for faster dependency resolution ([PR #19207](https://github.com/unslothai/unsloth/pull/19207)).  
  - Windows smoke tests consolidated into single install phase ([PR #19204](https://github.com/unslothai/unsloth/pull/19204)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR / Notes |
|--------|------|--------|----------------|
| 🟡 High | **Inkling-2-Mini GGUF outputs NaN ("!!!!") on Tesla V100S (sm_70)** | Open | [Issue #19013](https://github.com/unslothai/unsloth/issues/19013) – Appears to be CUDA 12.x + llama.cpp-specific issue. |
| 🟡 Medium | **Inkling-2-Mini GPU offloading regression (40 → 12 tokens/s)** | Open | [Issue #19137](https://github.com/unslothai/unsloth/issues/19137) – Likely due to recent kernel changes. |
| 🟡 Medium | **Studio llama-server crashes on ROCm when launched by Studio** | Open | [Issue #18948](https://github.com/unslothai/unsloth/issues/18948) – System libamdhip64 conflict; works fine from shell. |
| 🔴 Critical | **AMD mixed-GPU systems ignore AMD card, fail to use both cards simultaneously** | Open | [Issue #12248](https://github.com/unslothai/unsloth/issues/12248) – Known venv/GPU driver isolation bug. No fix yet. |
| 🟡 Medium | **"A script was blocked" error with transformers==5.13.1** | Open | [Issue #18699](https://github.com/unslothai/unsloth/issues/18699) – Scanner false positive; no immediate impact. |

---

### **6. What This Means for Application Developers**  
- ✅ **Leverage Inkling 2 Mini’s 1.9x speed boost** for real-time inference on consumer-grade GPUs (8–12 GB VRAM). Ideal for edge deployment and low-latency agents.  
- 🔧 **Use multiple quantizations of the same model** concurrently thanks to PR #19169 — enables A/B testing or fallback strategies.  
- 🛠️ **Expect stability issues on older hardware (V100S, AMD NPU)** — avoid production use until regressions are patched.  
- 🔄 **Prepare for model-level configuration drift**: The removal of `engram table` setting from UI ([#19043](https://github.com/unslothai/unsloth/issues/19043)) suggests deeper config refactoring is underway.  
- 💬 **Build multi-modal apps**: With image/audio translation and Qwen-Image-Flash support, you can now design full-stack AI assistants with rich input/output handling.  
- 🌐 **Future-proof for remote orchestration**: Feature requests like **Telegram bot integration** ([#18991](https://github.com/unslothai/unsloth/issues/18991)) and **remote Studio server connection** ([#19173](https://github.com/unslothai/unsloth/issues/19173)) signal move toward distributed agent ecosystems.

> 👉 **Recommendation**: Use v0.1.923-beta for benchmarking, but validate performance on target hardware—especially if deploying on ROCm or older NVIDIA cards. Monitor issue trackers for critical fixes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*