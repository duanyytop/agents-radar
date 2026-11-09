# AI Infrastructure Digest 2026-11-09

> Generated: 2026-11-09 02:04 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-09**

---

### **1. Ecosystem Overview**

The AI inference infrastructure landscape in late 2026 is defined by a sharp bifurcation between **high-performance, hardware-optimized serving engines** and **lightweight, portable runtime frameworks**, with growing convergence at the edge and in multi-backend deployments. NVIDIA Blackwell (SM120/SM121) and AMD ROCm are now central to development priorities, driving deep kernel-level optimizations across vLLM, SGLang, and Unsloth. Meanwhile, LiteLLM and Ollama are maturing as unified gateways and local executors, enabling seamless model orchestration across diverse backends—reflecting an industry shift toward composability over monolithic stacks.

---

### **2. Activity Comparison**

| Project       | Issues Open | PRs Merged | Releases (Past 24h) | Notes |
|---------------|-------------|------------|----------------------|-------|
| **vLLM**      | 78          | 32         | None                 | High focus on Blackwell/ROCm regressions; RFCs dominate strategic direction |
| **SGLang**    | 85          | 28         | None                 | Critical stability issues in long-context handling; active tuning for SM120 |
| **llama.cpp** | 63          | 24         | None                 | Strong emphasis on speculative decoding & MoE correctness; debug tooling gains traction |
| **Ollama**    | 59          | 21         | None                 | Rapid edge/NPU integration; UX and metadata fixes prioritized |
| **LiteLLM**   | 47          | 29         | `v1.110.0-dev.2`     | Security hardening via cosign signing; proxy reliability fixes critical |
| **Unsloth**   | 42          | 35         | None                 | Highest PR throughput; focused on memory efficiency and hardware compatibility |

> ✅ *Observation*: vLLM and SGLang lead in issue volume due to complex high-end hardware validation, while Unsloth shows strongest internal momentum with near-ideal PR-to-issue ratio.

---

### **3. Model Support Race**

| New Model / Architecture        | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash (SM120)** | ✅ (dev) | ⚠️ (prefill gap) | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-Flash-Next (GB10)**   | ✅ (dev) | ⚠️ (decode collapse) | ❌ | ❌ | ❌ | ❌ |
| **Nemotron-3.5 ASR Streaming**   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Rockchip NPU (RK3588/RK3576)** | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Ascend DSA + HiCache Mamba**   | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **OSADIA Axiom (5-Pillar)**      | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (request) |
| **Kitani (OpenAI-compatible)**  | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

> 🏆 **Leader**: **Ollama** leads in **edge and embedded hardware support** (Rockchip NPU), while **SGLang** and **vLLM** are most advanced in **Blackwell-era model performance**.  
> ⚠️ **Gap**: No project fully supports **Qwen3.8-Flash-Next** or **DeepSeek-V4.1-Flash** at scale on Blackwell/ROCm—indicating early-stage production readiness.

---

### **4. Performance Frontier**

Optimization efforts are sharply concentrated in three core areas:

- **KV Cache & Memory Management**:  
  - vLLM (#64460): KV-pool saturation impact on TPOT → automatic admission backoff proposed.  
  - SGLang: Unified memory exhaustion on GB10 (>40k tokens) — silent OOMs risk.  
  - Ollama: Per-layer KV cache sizing improves VRAM estimation accuracy.

- **Quantization & Kernel Efficiency**:  
  - vLLM: RFC #65560 proposes replacing Marlin with **Humming backend**—a unifying, architecture-agnostic kernel for INT4/INT8/GPTQ/AWQ/FP8/MXFP4/8.  
  - SGLang: MXFP8 GEMMs via FlashInfer b12x warp-MMA on SM12x.  
  - Unsloth: Int8 denoiser weights retained as int8 on CPU (~3x memory savings).

- **Distributed & Parallel Serving**:  
  - vLLM: MoE prefill sharding for SM90 MegaMoE reduces communication overhead.  
  - Unsloth: Ulysses context parallelism via FSDP2 + Ulysses enables scalable multi-GPU inference.  
  - SGLang: PD Disaggregation roadmap targets future distributed inference.

> 🔥 **Frontier Focus**: **Kernel-level optimization** (especially for FP8/MXFP4) and **MoE scalability** are the dominant technical frontiers—driven by Blackwell’s capabilities and rising model complexity.

---

### **5. Layer Positioning**

| Project       | Primary Layer           | Key Differentiator |
|---------------|--------------------------|--------------------|
| **vLLM**      | **High-Performance Serving Engine** | Benchmark-leading throughput; aggressive kernel-level tuning; target for datacenter-scale LLM serving |
| **SGLang**    | **High-Throughput Inference Engine** | Deep focus on low-latency, hybrid attention models; strong SM120 tuning but less mature in API abstraction |
| **llama.cpp** | **Local Runtime & Embedded Executor** | Cross-platform, minimal dependencies; ideal for edge, mobile, and offline inference |
| **Ollama**    | **Local Gateway & Developer Runtime** | User-friendly CLI; rapid hardware expansion (NPU, Vulkan); gateway for agent workflows |
| **LiteLLM**   | **Universal LLM Gateway** | Agnostic provider routing; cost tracking; essential for multi-cloud, multi-vendor deployments |
| **Unsloth**   | **Optimized Runtime & Diffusion Engine** | Heavy focus on memory efficiency, UI polish, and cross-GPU compatibility; niche strength in diffusion + LLM fusion |

> 💡 **Strategic Insight**: The ecosystem is fragmenting into **performance-tier** (vLLM/SGLang), **portability-tier** (llama.cpp), and **composability-tier** (Ollama/LiteLLM), with Unsloth carving a unique space in **efficient, cross-hardware execution**.

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-11-09 activity):**
1. **Blackwell-Centric Optimization**  
   - All major projects now prioritize SM120/SM121 support. vLLM’s Humming backend RFC signals a move toward **hardware-agnostic, unified kernels**—a foundational shift for future-proofing.

2. **MoE & Long-Context Stability is Now a Bottleneck**  
   - Multiple regressions in MoE routing, KV cache, and prefix caching (vLLM, SGLang, llama.cpp) reveal that **scaling beyond 100k tokens remains fragile**—even on cutting-edge hardware.

3. **Edge & Heterogeneous Hardware Integration Accelerates**  
   - Ollama’s Rockchip NPU support and Unsloth’s Intel Arc/AMD RDNA 2 fixes show that **inference is no longer confined to datacenter GPUs**—edge deployment is becoming mainstream.

4. **Security & Observability in Gateways**  
   - LiteLLM’s cosign-signed Docker images and streaming leak fixes highlight that **proxy layers are now mission-critical for billing integrity and compliance**.

5. **Speculative Decoding Still Unstable**  
   - Critical divergence in greedy speculative decoding (llama.cpp #25618) shows that **optimization hasn’t caught up with algorithmic advances**—caution advised for production use.

#### **What Application Developers Should Watch:**
- ✅ **Avoid v0.33.0 of vLLM on Blackwell/ROCm** until #65139 and #54173 are resolved.
- ✅ **Test MoE models rigorously**—router quantization bugs (SGLang #49185, llama.cpp #31704) can cause silent failures.
- ✅ **Monitor `max_budget` behavior in LiteLLM**—it may allow over-spending by ~10%.
- ✅ **Leverage new NPU/edge backends** (Ollama, Unsloth) for lightweight agent and edge inference.
- ✅ **Prepare for Humming backend adoption** in vLLM—future-proof your quantization strategy.

> 📌 **Bottom Line**: The AI inference stack is evolving rapidly—but **stability and correctness remain fragile at the edge of innovation**. Prioritize testing, observability, and fallback strategies when adopting bleeding-edge features.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-11-09

---

### **1. Today's Highlights**

The vLLM project continues its aggressive push toward full support for NVIDIA Blackwell (SM120) and AMD ROCm ecosystems, with critical performance and stability fixes targeting DeepSeek-V4.1-Flash and Qwen3.8-Flash-Next on high-end hardware. A major RFC (#65560) proposes replacing the legacy Marlin quantization kernel with the newer, architecture-agnostic Humming backend across all NVIDIA architectures — a foundational shift that could redefine low-level inference efficiency.

---

### **2. Releases & Breaking Changes**

*None reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**

- **NVIDIA Blackwell (SM120)**: Active development and field validation ongoing for **DeepSeek-V4.1-Flash** (8x RTX PRO 6000) and **Qwen3.8-Flash-Next** (GB10). Issues #56892, #62776, and #65139 highlight persistent decode throughput and memory access issues under CUDA graphs and prefix caching.
- **AMD ROCm**: Continued focus on **GLM-5.3-Flash**, **Kimi-K3**, and **Nemotron 3.5 ASR Streaming**. PRs like #66219 optimize fused RMSNorm for KDA, while #64031 enables efficient DSpark Markov sampling sharded over TP ranks.
- **Intel XPU**: CI migration of B70 jobs to `intel_gpu_k8s` (#66034) improves test reliability; EPLB fault tolerance now reports async worker failures (#66146).
- **New Models**:
  - Added streaming ASR model: [nemotron-3.5-asr-streaming-0.6b](https://github.com/vllm-project/vllm/issues/47455)
  - Multi-modal support expanded: PaliGemma prompt bidirectional attention fixed (#63033)

---

### **4. Performance & Optimization**

- **Quantization & Kernel Efficiency**:
  - **Humming Backend Adoption (RFC #65560)**: Proposed replacement of Marlin with Humming to unify INT4/INT8 GPTQ/AWQ, FP8, MXFP4/8, and NVFP4 kernels across SM80+, Hopper, and Blackwell — enabling future-proof, architecture-optimized execution.
  - **Batch Invariance (PR #65065, #65068)**: Enabling batch-invariant MoE routing and tensor-core GEMMs for DeepSeek-V4.1, reducing overhead in large-scale distributed inference.
  - **MoE Prefill Optimization (PR #66236)**: Sharding replicated TP prefill tokens for SM90 MegaMoE reduces communication bottlenecks.

- **Memory & Throughput**:
  - **KV Cache Management**: Issue #64460 identifies that KV-pool saturation inflates decode TPOT by ~2.3x; proposed automatic admission backoff aims to stabilize throughput under load.
  - **CUDA Graphs & Warmup**: PR #66397 ensures DSv4.1 replay builders are built during warmup (not first step), avoiding sync errors on SM120.
  - **FlashInfer & Memory Reuse**: PR #63874 fixes FlashInfer workspace leaks during teardown, improving long-running server stability.

---

### **5. Stability & Regressions**

| Severity | Issue | Summary | Fix PR? |
|--------|------|--------|--------|
| 🔴 High | [#65139](https://github.com/vllm-project/vllm/issues/65139) | CUDA illegal memory access at MTP verify step (v0.33.0 → regression from v0.32.0) on SM120 with NVFP4 MoE, fp8 KV, chunked prefill, prefix caching. | ❌ No fix yet |
| 🔴 High | [#54173](https://github.com/vllm-project/vllm/issues/54173) | CUBLAS_STATUS_INTERNAL_ERROR / illegal memory access in GDN path with prefix caching on GB10 (sm_121). | ❌ No fix yet |
| 🟡 Medium | [#62776](https://github.com/vllm-project/vllm/issues/62776) | Prompt content beyond `indexer_budget` (~2048 tokens) becomes invisible in Qwen3.8-Flash-Next. | ❌ No fix yet |
| 🟡 Medium | [#54308](https://github.com/vllm-project/vllm/issues/54308) | Qwen3-Next decode collapses to repeated token (`!!!!!!...`) on non-Blackwell ROCm GPUs with `fp32 SSM cache`. | ❌ No fix yet |
| 🟢 Low | [#66345](https://github.com/vllm-project/vllm/issues/66345) | `llguidance` is unconditionally required, blocking install on glibc < 2.31 systems. | ✅ Partial fix in PR #66441 (docstring style only) |

> ⚠️ **Critical Note**: Multiple regressions affect **Blackwell (SM120)** and **ROCm** paths, especially around **prefix caching**, **MoE**, and **CUDA graph capture**. These impact production-grade deployments of Qwen3.8, DeepSeek-V4.1, and Kimi-K3.

---

### **6. What This Means for Application Developers**

- **Avoid v0.33.0 on SM120/ROCm** until #65139 and #54173 are resolved — use v0.32.0 or earlier for stable inference.
- **Enable `--enforce-eager` cautiously** on Blackwell: it disables CUDA graphs, drastically lowering throughput (see #56892). Use `--no-async-scheduling` as workaround if needed.
- **Leverage new multi-token sampling support** (PR #65841): `n > 1` generation via OpenAI-compatible `/v1/chat/completions` will soon be available in `vllm.Inference`.
- **Prepare for Humming adoption**: If using custom quantization (e.g., MXFP4, WNA16), expect better performance and broader hardware coverage once #65560 lands.
- **Use endpoint lifecycle hooks** (RFC #65545): Soon, plugins can implement readiness checks and graceful shutdown — essential for Kubernetes and edge deployment orchestration.

> 💡 **Pro Tip**: For long-context models (e.g., Qwen3.8, Kimi-K3), monitor `indexer_budget` limits and consider increasing via `--max-num-seqs` or `--max-model-len` if prompts are truncated.

---  
*Data source: [vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-09**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to mature with deepening support for Blackwell-era hardware (SM120/SM121), particularly around kernel optimization and memory management for high-throughput inference. Key focus areas include resolving critical prefill throughput gaps on DeepSeek-V4, stabilizing long-context handling (up to 1M tokens), and advancing disaggregated inference via the PD Disaggregation roadmap.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing changes to CUDA graph capture behavior—particularly around `full` prefill graphs on hybrid attention models—may affect users relying on deterministic execution or performance tuning. A fix is pending in PR #48593.

---

### **3. New Model & Hardware Support**  
- **Blackwell GPU Support**: Active work on SM120/SM121 optimizations for DeepSeek-V4, Qwen3, and GLM-5.3-Flash across NVIDIA (RTX PRO 6000, B200) and AMD ROCm platforms.
- **Ascend NPU Integration**: Expanded HiCache Mamba host pool control (`--hicache-mamba-size-gb`) and native LIM/CopySFA KV offload added for Ascend DSA serving (PR #47383).
- **Intel CPU Backend**: Ulysses SP enabled for diffusion models; packed QKV kernel added (PR #36153).
- **XPU FP8 MoE**: Added support for Xe2 FP8 W8A16 grouped GEMM via `sgl-kernel-xpu` (PR #43994).

---

### **4. Performance & Optimization**  
- **DeepSeek-V4 Prefill Throughput**: Reports of ~2–7K tok/s on 4× RTX PRO 6000 (SM120, TP=4) vs. vLLM/Marlin’s ~12.5K suggest underutilization; investigation underway (Issue #33422).
- **AMD ROCm Optimization**: Fused GDN decode unpack + Conv1D kernel reduces decode latency for Qwen3.5 (PR #47287).
- **NVIDIA SM120 Tuning**: 
  - `hc_mix` kernel now uses `BLOCK_K=32` for better performance on SM120 (PR #45264).
  - Triton block-fp8 configs added for RTX PRO 5000 (72GB Blackwell) (PR #45263).
  - FlashInfer b12x warp-MMA backend used for MXFP8 GEMMs on SM12x (PR #45262).
- **Kernel Fusion**: SWA index translation moved into Intel AMX kernels to reduce Python overhead (PR #48861).

---

### **5. Stability & Regressions**  
- **Critical Hangs & Crashes**:
  - **Decode hang at ~245K context** on 8× H20 with DeepSeek-V4 DSPARK (Issue #33549) — GPUs spin at 100%, watchdog kills server.
  - **Engine state corruption after 1M-token request** on GLM-5.3-Flash (v0.5.23), leading to 0% accept rate (Issue #48964); reproducible on single node (4× H100).
  - **Full prefill CUDA graph capture fails** on HybridLinearAttnBackend models due to IndexError (Issue #48593).
- **Silent Failures**:
  - **Qwen3-MoE router quantization bug**: Compressed-tensors never loaded → garbage output without error (Issue #49185).
  - **DeepSeek-V4 BF16 checkpoint routed to MXFP4 path**, causing fused MoE failure (Issue #44810).
- **Memory Issues**:
  - Long prefills (>40k tokens) exhaust unified memory on GB10 nodes, killing worker rank silently (Issue #36941).
  - `#48399` introduced regression by excluding SM120/SM121 from DSV4.1 DeepGEMM indexer → 8x prefill slowdown (Issue #49173).

> ✅ *Fix PRs exist for some regressions (e.g., #48593, #49173), but none are merged yet.*

---

### **6. What This Means for Application Developers**  
- **Avoid large contexts (>40k tokens)** on GB10 until unified memory limits are addressed (Issue #36941). Monitor for silent OOMs.
- **Use `--cuda-graph-config '{"prefill": {"backend": "full"}}' only cautiously** — it’s unstable on hybrid attention models (Issue #48593).
- **Leverage new tuning knobs**: `--hicache-mamba-size-gb` for Mamba-heavy models on Ascend, and `--max-mamba-cache-size` for better memory isolation.
- **Expect variability in MoE performance** — verify that FP8 quantized routers are correctly loaded (Issue #49185).
- **Monitor nightly builds** closely: v0.5.23 has known stability issues (e.g., Issue #48964), while v0.5.22 remains clean.

> 🔗 [GitHub Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-09**

---

### **1. Today's Highlights**  
The latest updates focus on speculative decoding stability, MoE cache optimization, and GPU backend improvements—particularly for CUDA, Metal, and SYCL. Key fixes address deterministic Top-K selection in radix sorting (critical for reproducibility) and a persistent NaN state bug in recurrent layers that could corrupt long-context generation. New PRs introduce debug buffer pools for CUDA and device-side MoE scheduling for SYCL, enhancing visibility and offloading flexibility.

---

### **2. Releases & Breaking Changes**  
No new releases were published today. However, **PR #31084** (`ggml: update CUDA/Metal radix Top-K to make tied selections deterministic`) introduces a behavioral change: tied token selections are now ordered by block → warp → step → lane, ensuring consistent output across runs. This may affect downstream correctness testing for speculative decoding workflows. [GitHub PR #31084](https://github.com/ggml-org/llama.cpp/pull/31084)

---

### **3. New Model & Hardware Support**  
- **New quant format support**: `bf16` and `q8_0` now supported via `llamafile` with VXE acceleration (IBM). [PR #31866](https://github.com/ggml-org/llama.cpp/pull/31866)  
- **Hardware acceleration**:  
  - Apple Silicon (arm64): SpacemiT IME2 MXFP4 dense repack enabled on CPU. [PR #31776](https://github.com/ggml-org/llama.cpp/pull/31776)  
  - Intel B-series Vulkan: Persistent output corruption issue reported but workaround remains incomplete. [Issue #31828](https://github.com/ggml-org/llama.cpp/issues/31828)  
- **Backend enhancements**:  
  - SYCL: Device-side MoE scheduler added (optional), enabling full GPU graph continuity. [PR #30156](https://github.com/ggml-org/llama.cpp/pull/30156)  
  - OpenBSD: `getexecpath(3)` now used for executable path detection. [PR #31885](https://github.com/ggml-org/llama.cpp/pull/31885)

---

### **4. Performance & Optimization**  
- **CUDA**:  
  - Added Hopper Q6_K prefill kernel using TMA + WGMMA for optimized dense quantized inference. [PR #31916](https://github.com/ggml-org/llama.cpp/pull/31916)  
  - Debug buffer pool introduced via `GGML_CUDA_POOL_DEBUG=1` for granular memory tracking. [PR #31919](https://github.com/ggml-org/llama.cpp/pull/31919)  
- **MoE & Speculative Decoding**:  
  - MoE expert upload now supports optional separate stream with event lifetime control. [PR #31850](https://github.com/ggml-org/llama.cpp/pull/31850)  
  - IQ2 quant creation sped up via pattern caching (byte-identical results). [PR #31910](https://github.com/ggml-org/llama.cpp/pull/31910)  
- **Memory Efficiency**:  
  - `--moe-cache-cpu-share auto` controller improved for dynamic LRU tuning. [PR #31286](https://github.com/ggml-org/llama.cpp/pull/31286)  
  - Draft model free VRAM calculation corrected in server logging. [PR #31917](https://github.com/ggml-org/llama.cpp/pull/31917)

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|-------|--------|------------|
| Critical | [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | Greedy speculative decoding diverges from vanilla on quantized models (e.g., Q4_K_M); matches only on BF16. | No fix yet; high comment count (39) |
| High | [#31704](https://github.com/ggml-org/llama.cpp/issues/31704) | Cancelled long embedding never released — server becomes unresponsive while health check passes. | No fix yet |
| Medium | [#31913](https://github.com/ggml-org/llama.cpp/issues/31913) | Sticky NaN in recurrent state causes permanent corruption after single NaN injection. | Fix merged: [PR #31913](https://github.com/ggml-org/llama.cpp/pull/31913) |
| Medium | [#31828](https://github.com/ggml-org/llama.cpp/issues/31828) | Vulkan output corruption persists on Intel Arc B-series under long-context prompts despite `GGML_VK_DISABLE_COOPMAT`. | Workaround insufficient; active investigation |

---

### **6. What This Means for Application Developers**  
- **Speculative decoding users**: Avoid `Q4_K_M` or similar quantizations until [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) is resolved—output may diverge unpredictably under greedy sampling. Use `bf16` targets for stable behavior.
- **MoE workloads**: Leverage the new device-side MoE scheduler (SYCL) and dedicated upload streams ([PR #31850](https://github.com/ggml-org/llama.cpp/pull/31850)) to reduce CPU-GPU synchronization overhead.
- **Debugging & observability**: Enable `GGML_CUDA_POOL_DEBUG=1` for detailed scratch memory diagnostics during development.
- **Long-running servers**: Be cautious with cancellation flows—[#31704](https://github.com/ggml-org/llama.cpp/issues/31704) may cause silent hangs. Monitor `/health` endpoints carefully.
- **Future-proofing**: Consider upgrading to build artifacts with deterministic Top-K (via PR #31084) if reproducibility is critical.

> ✅ *Recommended action*: Audit speculative decoding pipelines and MoE model configurations against recent changes. Test with `--spec-type draft-mtp` and quantized models before production deployment.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-09**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its hardware and model support, with new PRs introducing Rockchip NPU (`rknpu`) backend integration and improved handling of MoE models via consistent expert stacking in the MLX runner. Critical fixes address a typo in `gemma4:12b-it-qat` metadata and memory exhaustion issues on AMD Radeon 780M under Vulkan — both impactful for production stability. Meanwhile, developers are pushing for granular concurrency control per model and longer load timeouts to improve usability in long-running agent workflows.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, ongoing work includes:
- **PR #19617** (formatting): Improves human-readable byte display by promoting units at binary boundaries (e.g., `1024.0 KiB` → `1.0 MiB`). [GitHub](https://github.com/ollama/ollama/pull/19617)
- **PR #19500 / #19499**: Fixes unit promotion logic in `HumanNumber`, preventing misleading outputs like `1000K` instead of `1M`. [GitHub](https://github.com/ollama/ollama/pull/19500) | [GitHub](https://github.com/ollama/ollama/pull/19499)

---

### **3. New Model & Hardware Support**  
- **Rockchip NPU Backend**: Added native support for RK3588 and RK3576 SoCs via `rocket/rknpu` backend, enabling offloading of prefill and MoE operations to NPU while retaining single-token decode on CPU. Ideal for edge devices and embedded AI systems. [GitHub](https://github.com/ollama/ollama/pull/19480)
- **MLX/Vulkan for NVIDIA in Docker**: PR #18592 adds required libraries/configs to enable MLX and Vulkan backends on NVIDIA GPUs within Docker containers — critical for cloud-native deployment. [GitHub](https://github.com/ollama/ollama/pull/18592)
- **OSADIA Axiom Architecture Request**: Feature request (#19611) calls for official support of Next GenAi Mexico’s OSADIA Axiom 5-Pillar neural architecture. [GitHub](https://github.com/ollama/ollama/issues/19611)

---

### **4. Performance & Optimization**  
- **KV Cache Sizing Per Layer**: PR #19327 improves VRAM estimation accuracy by sizing KV cache per layer based on actual head count and embedding dimensions, reducing unnecessary evictions and improving scheduler efficiency. [GitHub](https://github.com/ollama/ollama/pull/19327)
- **Expert Stacking Consistency**: PR #19614 ensures all MoE models are properly stacked regardless of source format, eliminating unstacked experts that degrade performance. [GitHub](https://github.com/ollama/ollama/pull/19614)
- **Lossless FP8 Import**: Fixing lossy re-quantization of block FP8 and adding support for per-tensor FP8 in MLX runner enhances precision and reduces accuracy degradation in quantized models. [GitHub](https://github.com/ollama/ollama/pull/19614)
- **Benchmark Reliability**: PR #19600 ensures `cmd/bench` fails on incomplete runs and truncates reused output files, improving consistency in automated benchmarking pipelines. [GitHub](https://github.com/ollama/ollama/pull/19600)

---

### **5. Stability & Regressions**  
- **AMD Radeon 780M Vulkan Regression**: Issue #17748 reports `radv/amdgpu: Not enough memory for command submission` errors after v0.32.10 when loading large models. Users report same hardware/model works fine prior to update. *No fix PR yet*, but actively discussed. [GitHub](https://github.com/ollama/ollama/issues/17748)
- **Gemma4 Typo in Metadata**: Critical typo in `gemma4:12b-it-qat` Modelfile sets `toos` instead of `tools`, breaking tool use. Fixed in PR #19596. [GitHub](https://github.com/ollama/ollama/pull/19596)
- **Long Load Timeout Needed**: User reports `OLLAMA_LOAD_TIMEOUT=300s` too short for interactive use; often hits timeout during reflection or complex reasoning. Feature request #19616 proposes configurable timeout. [GitHub](https://github.com/ollama/ollama/issues/19616)
- **Image Generation Models Not Supported**: macOS users cannot run image generation models (e.g., `x/flux2-klein`) due to unsupported backend. Issue #19615 confirms current lack of support. [GitHub](https://github.com/ollama/ollama/issues/19615)

---

### **6. What This Means for Application Developers**  
Developers should prepare for more diverse hardware deployments with the addition of Rockchip NPU and enhanced MLX/Vulkan support in Docker — ideal for edge and containerized inference. However, be cautious with AMD GPU users on Linux: avoid v0.32.10+ if running larger models until #17748 is resolved. For agent applications, consider using `PARAMETER env` (PR #16711) for per-model environment control and anticipate upcoming per-model concurrency settings (see #11977, #5693). Long-running agents will benefit from increased `OLLAMA_LOAD_TIMEOUT` flexibility — currently only a feature request but highly actionable. Finally, ensure tool call compatibility by validating model manifests (e.g., correct `tools` vs `toos`) and monitor benchmarks for reliable performance measurement.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-09**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to mature with critical fixes in streaming reliability, budget accounting, and proxy stability—especially for Bedrock and Anthropic Messages integrations. Key improvements include closing leaked HTTP streams during client disconnections (`#50657`), fixing undercounted usage in streaming scenarios (`#36114`), and resolving silent cache misbehavior when using disk-based caching (`#36309`). A new `--providers` flag proposal (`#43670`) and support for Kitani (`#50656`) expand extensibility.

---

### **2. Releases & Breaking Changes**  
- **v1.110.0-dev.2** released with enhanced security via cosign-signed Docker images (verify using [cosign](https://docs.sigstore.dev/cosign/overview/) and key from [commit e82a3c6](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)).  
- No breaking API changes reported; focus remains on stability and correctness in production workloads.

---

### **3. New Model & Hardware Support**  
- **Kitani** added as an OpenAI-compatible provider via PR [#50656](https://github.com/BerriAI/litellm/pull/50656). Supports open-weight models through a standardized API interface.
- **TopxAI** integration now available as a named provider (PR [#41919](https://github.com/BerriAI/litellm/pull/41919)), enabling cost tracking across 11 text models.
- **DeepSeek Fetch Tool** support introduced (PR [#50618](https://github.com/BerriAI/litellm/pull/50618)), extending tool-use capabilities beyond Search.

---

### **4. Performance & Optimization**  
- **Proxy-level optimization**: PR [#50641](https://github.com/BerriAI/litellm/pull/50641) eliminates unnecessary deployment reads during callback filtering and caches Anthropic capability probes—reducing per-request overhead.
- **Guardrail efficiency**: PR [#44417](https://github.com/BerriAI/litellm/pull/44417) skips shadow-eval snapshotting when no job exists, reducing CPU load on pre-call guardrails.
- **Prompt caching**: PR [#49412](https://github.com/BerriAI/litellm/pull/49412) enables caching of developer system prompts with role injection points, improving hit rates for Claude deployments.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| Streaming usage severely undercounted despite correct non-streaming counts | High | Open (#36114) | — |
| Bedrock `/v1/messages` stream leaks HTTPX response after client disconnect | Critical | Open (#50514) | ✅ [`#50657`](https://github.com/BerriAI/litellm/pull/50657) |
| `Router(cache_responses=True, cache_kwargs={'type': 'disk'})` silently uses in-memory cache | Medium | Open (#36309) | — |
| `max_budget` allows over-spending by ~10% (11 calls vs expected 9) | High | Open (#50125) | — |
| `output_config` fails on Xiaomi MiMo models (`MiMo-V2-Pro/Omni`) | Medium | Closed (#24549) | — |

> ⚠️ **Critical Note**: The `max_budget` regression and streaming leak are high-risk issues affecting billing integrity and resource exhaustion in multi-tenant environments.

---

### **6. What This Means for Application Developers**  
- **Avoid `max_budget` until #50125 is resolved**—your cost controls may be unreliable under bursty loads.
- **Use `--providers` flag (proposed in #43670)** to simplify configuration management for custom providers.
- **Enable `turn_off_message_logging` + `redact message content`** via PR [#50622](https://github.com/BerriAI/litellm/pull/50622) to reduce log exposure while retaining debugging context.
- **Ensure `cache_kwargs` is respected**—disk caching currently ignored unless Redis is configured (see #36309).
- **Monitor Prometheus/Grafana mismatches** (#26611): verify that spend metrics align with actual charges, especially post-v1.93.1 due to stale gauge updates (fixed in #49199).

> 📌 *Recommended action*: Upgrade to `v1.110.0-dev.2` and validate your proxy’s security posture using the cosign signature verification process.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-09**

---

### **1. Today's Highlights**  
Unsloth continues its deep optimization push for diffusion and LLM inference, with critical PRs improving memory efficiency, reducing GPU overhead, and stabilizing support across diverse hardware (Intel Arc, AMD RDNA 2, NVIDIA sm80–sm90). Notably, the team has addressed persistent issues in FP8/INT8 runtime behavior on older GPUs and fixed multiple UI inconsistencies affecting user experience in Studio.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. All recent activity centers around internal optimizations and bug fixes.

---

### **3. New Model & Hardware Support**  
- ✅ **Intel Arc A-series (LTX RoPE)**: Added explicit `supports_float64` detection to prevent fp64 kernel crashes on devices lacking native support. [PR #17070](https://github.com/unslothai/unsloth/pull/17070)  
- ✅ **AMD RX 6700 XT (gfx1031)**: Fixed incorrect RDNA 2 classification that led to PyTorch segfaults during GPU operations. [Issue #17147](https://github.com/unslothai/unsloth/issues/17147)  
- ✅ **Qwen-Image-2.1 & FLUX.3**: Enhanced prompt encoder and attention handling for improved stability and reduced memory footprint. [PRs #17182, #17181](https://github.com/unslothai/unsloth/pull/17182), [PR #17181](https://github.com/unslothai/unsloth/pull/17181)  
- ✅ **LTX-2.5 INT8**: Auto-picks hosted int8 ConvRot text encoder (~13 GB vs 23.9 GB bf16), enabling efficient CPU/GPU offload. [PR #17179](https://github.com/unslothai/unsloth/pull/17179)

---

### **4. Performance & Optimization**  
- 🚀 **Memory Efficiency**:  
  - Int8 denoiser weights now kept as int8 on CPU instead of being expanded to float32 (saves ~3x memory). [PR #17178](https://github.com/unslothai/unsloth/pull/17178)  
  - Prompt encoders no longer retain unused hidden states from Qwen3-VL — reduces unnecessary GPU memory usage. [PR #17182](https://github.com/unslothai/unsloth/pull/17182)  
- ⚙️ **Kernel Optimizations**:  
  - cuDNN attention now receives strided Q/K/V projections directly instead of contiguous copies. Reduces memory bandwidth and improves throughput on NVIDIA sm80+ cards. [PR #17180](https://github.com/unslothai/unsloth/pull/17180)  
  - Triton kernels for Wan video blocks now compile one binary per sequence length, avoiding redundant compilation. [PR #17101](https://github.com/unslothai/unsloth/pull/17101)  
- 🔧 **Context Parallelism**:  
  - Ulysses support added for gpt-oss and Qwen3.5 GatedDeltaNet via FSDP2 + Ulysses context parallel. Enables scalable multi-GPU inference. [PR #17183](https://github.com/unslothai/unsloth/pull/17183), [PR #12052](https://github.com/unslothai/unsloth/pull/12052)

---

### **5. Stability & Regressions**  
- 🔥 **Critical**:  
  - **FP8 hangs on T4 (sm75)**: Fixed by allowing INT8/FP8 execution on Turing GPUs where previously rejected due to missing BF16 support. [PR #17167](https://github.com/unslothai/unsloth/pull/17167)  
  - **First render hang on L4 (fp8)**: Resolved by fixing CUDA graph replay under torch < 2.12. [PR #17166](https://github.com/unslothai/unsloth/pull/17166)  
- ⚠️ **Medium Severity**:  
  - **Image generation models fail on Intel Arc 140V**: Reported but no fix yet. [Issue #17137](https://github.com/unslothai/unsloth/issues/17137)  
  - **Model size mismatch in desktop app**: Displayed size differs between Model Hub and picker dropdown. [Issue #17074](https://github.com/unslothai/unsloth/issues/17074)  
- 💡 **UI/UX**:  
  - Palette pickers close after every selection (Radix Select behavior). [Issue #17161](https://github.com/unslothai/unsloth/issues/17161)  
  - Duplicate glass material settings in Appearance tab. [Issue #17162](https://github.com/unslothai/unsloth/issues/17162)  
  - Composer settings split across tabs, causing confusion. [Issue #17163](https://github.com/unslothai/unsloth/issues/17163)  

---

### **6. What This Means for Application Developers**  
- **Build more efficient agents**: Use hosted INT8 checkpoints (e.g., LTX-2.5) to reduce VRAM/CPU memory use without sacrificing performance.  
- **Target broader hardware**: Your apps can now run reliably on Intel Arc, older NVIDIA (T4), and AMD RDNA 2 GPUs with proper quantization fallbacks.  
- **Avoid pipeline stalls**: The fixes to FP8 hangs and first-render compilation ensure smoother inference workflows—critical for real-time applications.  
- **Design robust UIs**: Be cautious when relying on client-side storage; account for server-side sync gaps ([#16912](https://github.com/unslothai/unsloth/issues/16912)).  
- **Optimize model loading**: Leverage auto-precision and offloading strategies—especially useful in low-memory environments like Colab.  

> ✅ *Recommendation*: Update your deployment pipelines to leverage the latest `unsloth` Docker images and prioritize `int8`/`fp8` quantized models where supported. Monitor for upcoming releases integrating Ulysses context parallelism for larger models.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*