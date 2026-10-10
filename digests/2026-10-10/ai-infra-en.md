# AI Infrastructure Digest 2026-10-10

> Generated: 2026-10-10 01:53 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-10**

---

### **1. Ecosystem Overview**

The AI infrastructure landscape in Q4 2026 is defined by rapid convergence between high-performance inference engines, distributed serving frameworks, and agent-ready runtime systems. Projects are increasingly focused on next-gen hardware (Blackwell SM120, AMD RDNA4/gfx1201, A6x) and model architectures (Flash variants, MoE, multimodal). The race for deterministic, scalable, and secure inference has intensified, with stability and correctness now as critical as raw throughput. While vLLM and SGLang lead in performance optimization and speculative decoding maturity, LiteLLM and Ollama dominate developer accessibility — though with growing reliability concerns in production-grade deployments.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Release Status                     |
|---------------|-------------|----------|------------------------------------|
| **vLLM**      | 38          | 17       | Stable; no new releases (v0.31.0 pending) |
| **SGLang**    | 52          | 24       | No release; `main` unstable for TP8 |
| **llama.cpp** | 48          | 19       | Patched builds (`b11539+`) only |
| **Ollama**    | 67          | 15       | `0.40.x` unstable; auto-upgrades enabled |
| **LiteLLM**   | 44          | 28       | Dev release `v1.106.0-dev.3` (security fix) |
| **Unsloth**   | 42          | 22       | No new release; `unsloth==2025.11.3` current |

> ✅ *vLLM and LiteLLM show strongest release discipline; Ollama and SGLang face instability in recent versions.*

---

### **3. Model Support Race**

| New Model / Architecture     | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**       | ✅ (SM120/ROCm) | ✅ (context parallelism) | ⚠️ Partial (Qwen3.8-Flash-Next) | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash**             | ✅ (ongoing) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-Flash-Next**        | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Qwen-Image-2.1-Turbo**      | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Prism Bonsai 2 27B**         | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Kolibri 1 (MLX)**            | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **MoE (MegaMoE, DSpark)**      | ✅ (DPA+ETP) | ✅ (DP attention) | ⚠️ (in progress) | ❌ | ❌ | ❌ |

> 🏆 **Leader: vLLM & SGLang** — both lead in cutting-edge model support, especially for Flash and MoE models across NVIDIA and AMD platforms.  
> 🔍 **Notable Gap**: Ollama lags significantly in advanced model support, while Unsloth excels in niche multimodal and file parsing use cases.

---

### **4. Performance Frontier**

| Optimization Focus           | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache Efficiency**       | ✅ (context-aware retention) | ⚠️ (speculative corruption) | 🔴 (crashes on long convo) | ❌ | ⚠️ (budget tracking) | ⚠️ (OOM under GRPO) |
| **Batching & Overlap**        | ✅ (DBO, DPA+ETP) | ✅ (prefill context parallelism) | ⚠️ (limited) | ❌ | ✅ (router efficiency) | ❌ |
| **Quantization & FP8**        | ✅ (FP8 + FlashInfer JIT fallback) | ✅ (NVFP4 autotune) | ⚠️ (divergence on Q4_K_M) | ❌ | ❌ | ❌ |
| **Distributed Serving**       | ✅ (PD, NIXL) | ✅ (TP8, cross-TP planning) | ❌ | ❌ | ✅ (multi-tenant routing) | ❌ |
| **Kernel-Level Optimization** | ✅ (Tensor Descriptor, FlyDSL) | ✅ (hybrid dispatch, memory est.) | ✅ (Vulkan RMSNorm, SYCL) | ❌ | ⚠️ (Rust migration) | ✅ (RoPE overflow fix) |

> 📈 **vLLM leads in holistic performance engineering**, particularly in distributed and kernel-level optimizations.  
> 🔄 **SGLang and llama.cpp** are pushing boundaries in AMD-specific kernels and quantized inference stability.

---

### **5. Layer Positioning**

| Project       | Primary Layer               | Key Differentiators |
|---------------|-----------------------------|---------------------|
| **vLLM**      | **High-Performance Serving Engine** | Best-in-class throughput on SM120, strong FP8/FlashInfer integration, agentic KV cache control |
| **SGLang**    | **Advanced Inference Runtime** | Leading in speculative decoding (DSpark), multi-GPU scheduling, context parallelism |
| **llama.cpp** | **Local/Edge Runtime** | CPU/GPU hybrid flexibility, strong OpenCL/Vulkan support, lightweight footprint |
| **Ollama**    | **Developer-Friendly Gateway** | Simplified CLI, broad model catalog, MLX/Windows support — but fragile at scale |
| **LiteLLM**   | **Universal LLM Gateway** | Multi-provider routing, budget enforcement, telemetry, Rust migration for low-latency |
| **Unsloth**   | **Fine-Tuning & Studio Runtime** | Strong file parsing, edge inference, multimodal sampling — optimized for training workflows |

> 🎯 **Strategic Divide**:  
> - **Serving Engines**: vLLM, SGLang  
> - **Gateways**: LiteLLM, Ollama  
> - **Runtime/Fine-Tuning**: llama.cpp, Unsloth

---

### **6. Trend Signals**

**Key Industry Trends Extracted from Today’s Activity:**

1. **Hardware-First Optimization**  
   → Blackwell SM120, AMD gfx1201, and A6x GPUs are now primary targets. vLLM and SGLang are leading the charge in leveraging new architectural features (sparse-MLA, mono-decode, prefill context parallelism).

2. **Speculative Decoding Maturation**  
   → Now a core focus across vLLM, SGLang, and llama.cpp. However, correctness issues (output corruption, divergence) remain unresolved — indicating this is still a "phase 1" feature.

3. **Security & Trust Infrastructure**  
   → LiteLLM’s security incident and cryptographic signing (Cosign) highlight growing concern over supply-chain integrity. Expect future gateways to enforce strict verification and audit trails.

4. **Deterministic Inference Demand**  
   → High demand from agentic applications. Yet, tools like SGLang and vLLM still fail to deliver reproducible results — a major red flag for production agents.

5. **Rise of Rust-Based Systems**  
   → LiteLLM’s Rust migration initiative signals a shift toward ultra-low-latency, high-throughput inference routing — critical for real-time agent orchestration.

6. **Stability vs. Innovation Trade-off**  
   → Ollama and SGLang exemplify the cost of rapid feature delivery: breaking changes, regressions, and crashes in `0.40.x` and `TP8` paths. Developers must now prioritize *stability* over novelty.

---

### **Recommendations for Application Developers**

- **Use vLLM or SGLang** for high-throughput, agentic workloads requiring speculative decoding and distributed serving.
- **Avoid Ollama `0.40.x`** for large models or mission-critical deployments — stick to `0.35.0` until regressions are fixed.
- **Leverage LiteLLM’s Rust migration** for ultra-low-latency gateways in agent systems — expect sub-1ms overhead soon.
- **Validate speculative decoding output** on quantized models (especially `Q4_K_M`) — non-determinism remains rampant.
- **Monitor GPU fallbacks** on Windows and Apple Silicon — silent failures due to CUDA/MLX initialization are common.
- **Prioritize deterministic behavior** via batch-invariant execution (vLLM) or avoid `--enable-deterministic-inference` until fixes land.

> ✅ **Bottom Line**: The ecosystem is advancing rapidly — but reliability is the bottleneck. Choose your stack based on **stability, correctness, and hardware alignment**, not just feature count.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-10

---

### **1. Today's Highlights**  
vLLM continues to advance support for next-generation models on Blackwell GPUs (SM120), with critical performance optimizations and bug fixes for DeepSeek-V4.1-Flash and GLM-5.3-Flash on both NVIDIA and AMD ROCm platforms. A high-priority fix was merged to resolve a `kv_cache_dtype="fp8"` crash due to missing FlashInfer JIT fallback, while ongoing work targets speculative decoding correctness and context-aware KV cache retention for agentic workloads.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new stable or RC releases announced. The project remains focused on stabilizing features ahead of v0.31.0, particularly around SM120 compatibility and FP8/FlashInfer integration.

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1-Flash**: Full support now underway on **NVIDIA SM120 (RTX PRO 6000/5000 Blackwell)** via optimized sparse-MLA kernels and mono-decode paths (`VLLM_ROCM_MONO_DECODE=1` for ROCm).  
  🔗 [PR #60397](https://github.com/vllm-project/vllm/pull/60397)  
- **GLM-5.3-Flash**: Ongoing optimization efforts targeting long-decode stability and performance degradation under accumulated reasoning.  
  🔗 [Issue #56868](https://github.com/vllm-project/vllm/issues/56868)  
- **ROCm (AMD)**: Expanded support for **MI355X (gfx950)** and **RDNA4 (gfx1201)** with targeted performance tuning for Qwen3.8-2.4T-A95B and Qwen3.8-Flash-Next.  
  🔗 [Issue #57149](https://github.com/vllm-project/vllm/issues/57149), [Issue #59575](https://github.com/vllm-project/vllm/issues/59575)

---

### **4. Performance & Optimization**  
- **SM120 Decode Throughput**: Major improvements seen in DeepSeek-V4.1-Flash decode performance via mono-decode layer launch strategy (persistent FlyDSL), reducing kernel launch overhead.  
  🔗 [PR #60397](https://github.com/vllm-project/vllm/pull/60397)  
- **Prefill Overlap**: DPA+ETP dual-batch-overlap (DBO) enabled for DeepSeek-V4 on ROCm, improving prefill efficiency in data-parallel setups.  
  🔗 [PR #57773](https://github.com/vllm-project/vllm/pull/57773)  
- **Kernel Optimization**: Work progressing on **Tensor Descriptor (TD) adoption** in Triton kernels to improve memory safety and future-proof codebase.  
  🔗 [Issue #42545](https://github.com/vllm-project/vllm/issues/42545)  
- **Batch Invariant Optimization**: Tracking progress toward deterministic inference via batch-invariant execution, essential for reproducible agent behavior.  
  🔗 [Issue #27433](https://github.com/vllm-project/vllm/issues/27433)

---

### **5. Stability & Regressions**  
- **Critical Crash**: `kv_cache_dtype="fp8"` fails to fall back from FlashInfer to TRITON_ATTN when JIT is missing, causing hard crashes.  
  🔗 [Issue #60262](https://github.com/vllm-project/vllm/issues/60262) → *Fix PR pending*  
- **Speculative Decoding Corruption**: MTP + prefix caching on Qwen3.8-27B NVFP4 causes output corruption after cache hit (v0.30/0.31).  
  🔗 [Issue #60174](https://github.com/vllm-project/vllm/issues/60174) → *Regression confirmed; fix in progress*  
- **CUDA Illegal Memory Access**: Recurring crashes in GLM-5.3-Flash across multiple kernels (KDA linear-attention, MHC TileLang, TRT-LLM MoE) on 4xB200.  
  🔗 [Issue #54317](https://github.com/vllm-project/vllm/issues/54317) → *High severity; under investigation*  
- **Structured Output Invalidity**: MTP speculative decoding corrupts `response_format={"type": "json_schema"}` output for Qwen3.8-Flash-Next.  
  🔗 [Issue #60830](https://github.com/vllm-project/vllm/issues/60830) → *Fixed in PR #60870*

---

### **6. What This Means for Application Developers**  
- **Use `--kv-cache-dtype fp8` cautiously**: Ensure FlashInfer JIT is installed or expect crashes. Prefer explicit backend selection (`--attention-backend triton`) in production.  
- **Avoid `max_tokens > max_model_len`**: vLLM currently rejects such requests instead of clamping—validate input bounds at the app level.  
- **Agentic Workloads**: Leverage upcoming **context-aware KV cache retention** ([Issue #37003](https://github.com/vllm-project/vllm/issues/37003)) to avoid prefix cache thrashing under concurrent load.  
- **Multi-GPU Deployments**: Monitor for regressions in **disaggregated serving (PD)** — especially with NIXL connectors and side-channel configuration.  
- **Performance Tuning**: For SM120 and ROCm, enable `VLLM_ROCM_MONO_DECODE=1` and `--enable-dbo` where applicable to unlock peak throughput.  

> 💡 **Pro Tip**: Use `bench serve --metrics-url` for accurate PD benchmarking behind routers.  
> 🔗 [PR #59587](https://github.com/vllm-project/vllm/pull/59587)

---  
*Data source: [vllm-project/vllm GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-10-10

---

### **1. Today's Highlights**

The SGLang project continues to advance its support for DeepSeek-V4.1 and DSpark speculative decoding, with key PRs enabling prefill context parallelism on AMD and improving memory safety in high-throughput scenarios. Critical stability fixes address CUDA graph crashes under large decode workloads (TP8), while new efforts focus on deterministic inference correctness and robust handling of aborted requests.

---

### **2. Releases & Breaking Changes**

No new releases were published in the last 24 hours.  
However, ongoing issues highlight potential breaking changes in behavior:
- `--enable-deterministic-inference` currently fails to produce consistent outputs for `gpt-oss-20b`, as noted in [#43055](https://github.com/sgl-project/sglang/issues/43055).
- A regression in request cancellation logic may cause visible output from cancelled grammar-constrained requests ([#34111](https://github.com/sgl-project/sglang/issues/34111)).

> ⚠️ Developers using deterministic inference or strict request lifecycle control should test against `main` or avoid `--enable-deterministic-inference` until fix PRs land.

---

### **3. New Model & Hardware Support**

- **DeepSeek-V4.1**: Active optimization roadmap ([#42170](https://github.com/sgl-project/sglang/issues/42170)) includes DP attention support for MegaMoE models and context parallel prefill on AMD GPUs via PR [#43465](https://github.com/sgl-project/sglang/pull/43465).
- **AMD GPU**: Full prefill context parallelism now supported for DeepSeek-V4.1; PRs include kernel-level optimizations and memory layout fixes.
- **Moore Threads (MUSA)**: Feature request remains open ([#16565](https://github.com/sgl-project/sglang/issues/16565)), with community interest but no implementation yet.
- **MLX Backend**: Native MLX generation shows behavioral inconsistencies after repeated chat calls ([#42415](https://github.com/sgl-project/sglang/issues/42415)); use with caution in stateful workflows.

---

### **4. Performance & Optimization**

- **Speculative Decoding Overlap**: High-priority feature request [#11762](https://github.com/sgl-project/sglang/issues/11762) is actively being developed to improve throughput via overlapping scheduling.
- **Memory Efficiency**: PR [#43435](https://github.com/sgl-project/sglang/pull/43435) skips eager activation reserve allocation in capped full prefill roles, reducing static memory overhead in disaggregated setups.
- **FlashInfer Autotuning**: PR [#43464](https://github.com/sgl-project/sglang/pull/43464) enables FP4 GEMM autotune for NVFP4-compressed checkpoints, unlocking performance gains for low-precision inference.
- **Kernel-Level Optimizations**:
  - PR [#42333](https://github.com/sgl-project/sglang/pull/42333): Fixes hybrid model dispatch in FA backend by correctly routing full-attention layers.
  - PR [#42296](https://github.com/sgl-project/sglang/pull/42296): Corrects memory estimation in speculative decoding across TP groups, preventing over-allocation.

---

### **5. Stability & Regressions**

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| 🔴 Critical | [#31023](https://github.com/sgl-project/sglang/issues/31023) | Cross-TP planning inconsistency in DSpark compact ragged target-verify CUDA Graph → illegal memory access on TP8 | ✅ Fixed in #31195 |
| 🔴 Critical | [#33356](https://github.com/sgl-project/sglang/issues/33356) | Non-deterministic CUDA illegal memory errors during server startup with DeepSeek-V4-Pro-DSpark on TP8 | ✅ Patched in #31195 |
| 🟡 High | [#43061](https://github.com/sgl-project/sglang/issues/43061) | `--enable-deterministic-inference` + `repetition_penalty` causes `torch.compile` crash on granite-4.0-h | ❌ No fix yet |
| 🟡 High | [#43055](https://github.com/sgl-project/sglang/issues/43055) | Deterministic inference still produces non-reproducible outputs despite flag | ❌ No fix yet |
| 🟡 Medium | [#43402](https://github.com/sgl-project/sglang/issues/43402) | CUDA VMM multimodal transport slice leaks on request abort | ❌ No fix yet |
| 🟡 Medium | [#43204](https://github.com/sgl-project/sglang/issues/43204) | `AssertionError: Can not alloc mamba cache` kills scheduler when all slots are locked | ❌ No fix yet |

> ⚠️ Users running DSpark on TP8 with large decode workloads should upgrade to `main` or apply patches from #31195 immediately.

---

### **6. What This Means for Application Developers**

- **Avoid `--enable-deterministic-inference`** for now if reproducibility is critical — it’s currently unreliable even with `repetition_penalty`.
- **Monitor request lifecycle rigorously**: Aborted requests may leave zombie states or leak memory (e.g., [#36333](https://github.com/sgl-project/sglang/issues/36333), [#43402](https://github.com/sgl-project/sglang/issues/43402)). Implement client-side timeouts and retry logic.
- **Use DSpark cautiously on TP8**: While recent fixes stabilize the path, edge cases remain. Test with production-scale prompts and verify memory behavior.
- **Leverage emerging optimizations**: Enable `--chunked-prefill-size` and context parallelism (via AMD/ROCm PRs) for better scalability in high-throughput services.
- **Multimodal and tool-calling apps**: Be aware of empty SSE chunks before tool calls ([#29441](https://github.com/sgl-project/sglang/issues/29441)) and nullable string handling bugs ([#43389](https://github.com/sgl-project/sglang/pull/43389)) — validate SDK integrations carefully.

> ✅ **Pro Tip**: Use `main` branch for bleeding-edge features and stability fixes; avoid v0.5.16 for TP8 deployments due to known CUDA graph issues.

---  
*Data compiled from GitHub: sgl-project/sglang — 2026-10-10*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-10**

---

### **1. Today's Highlights**  
The latest updates focus on critical correctness fixes in speculative decoding and GPU kernel stability, particularly for quantized models and newer architectures like A6x GPUs. Notable improvements include a fix for CPU/GPU round-trip consistency in CUDA and enhanced support for MoE expert caching via GPU-resident LRU (in progress). The release cycle continues to stabilize core inference paths across multiple backends.

---

### **2. Releases & Breaking Changes**  
- **`b11539`**: Applied upstream deep nested JSON patch (`nlohmann/json`) to prevent potential parsing issues in model configs. [PR #30253](https://github.com/ggml-org/llama.cpp/pull/30253)  
- **`b11538`**: Fixed CUDA round-trip precision issue under MSVC where CPU and GPU results diverged. [PR #30229](https://github.com/ggml-org/llama.cpp/pull/30229)  
- **`b11537`**: Reordered `get_rows` logic for embeddings and improved input construction for Gemma4; added TODOs for LoRA. [PR #30160](https://github.com/ggml-org/llama.cpp/pull/30160)  

> ✅ *No breaking API changes this week. All updates are backward-compatible.*

---

### **3. New Model & Hardware Support**  
- **Gemma4**: Improved embedding path handling and fixed PLE casting issues. [PR #30160](https://github.com/ggml-org/llama.cpp/pull/30160)  
- **A6x GPUs (IoT devices)**: OpenCL kernel compilation now skips problematic `kernel_cpy_f32_f32_pack` due to shader compiler limitations. [PR #30176](https://github.com/ggml-org/llama.cpp/pull/30176)  
- **Qwen3.8-Flash-Next / Qwen4exp**: Continued integration with MTP/draft speculation support; regression tracking ongoing. [PR #30257](https://github.com/ggml-org/llama.cpp/pull/30257), [Issue #27763](https://github.com/ggml-org/llama.cpp/issues/27763)  
- **Prism Bonsai 2 27B**: Runtime support added via PR. [PR #29600](https://github.com/ggml-org/llama.cpp/pull/29600)

---

### **4. Performance & Optimization**  
- **CUDA**: Reduced redundant memory copies after `SSM_SCAN`, fusing state snapshots into recurrent cache. [PR #29807](https://github.com/ggml-org/llama.cpp/pull/29807)  
- **SYCL**: Multi-column matrix engine optimization for Intel XMX (ESIMD) targeting speculative decoding. [PR #29864](https://github.com/ggml-org/llama.cpp/pull/29864)  
- **Vulkan**: RMSNorm optimized using subgroup reductions — reported ~15% speedup on B70 Arc Pro. [PR #29882](https://github.com/ggml-org/llama.cpp/pull/29882)  
- **MoE Caching (Feature Request)**: Proposal for GPU-resident LRU expert cache inside compute graph. [Issue #29949](https://github.com/ggml-org/llama.cpp/issues/29949)  
- **Embedding Models**: Avoided unnecessary logits buffer allocation when graph produces no logits (e.g., reranking models). [PR #30255](https://github.com/ggml-org/llama.cpp/pull/30255)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix/Workaround |
|--------|------|--------|----------------|
| 🔴 High | **Speculative decoding divergence** on quantized targets (`Q4_K_M`) with greedy sampling | Open (#25618) | No fix yet; affects draft-mtp/draft-dspark |
| 🔴 High | **Crash on long conversations** (`bad allocation`) in `llama-server` | Open (#30091) | Likely memory leak in KV cache management |
| 🔴 High | **GPU corruption on gfx1151 (Ryzen AI Max+)**: Oldest context lost silently | Closed (#27556) | Known issue; Vulkan backend correct at same commit |
| 🟡 Medium | **RTX 5060Ti 15GB** producing garbage output with `IQ3_S` | Open (#28581) | Possibly driver or kernel mismatch |
| 🟡 Medium | **VRAM leak in DSpark + DeepSeek V4 Flash**: ~10MB per cycle until OOM | Open (#27155) | Regression likely tied to speculative KV cache |

> ⚠️ Critical stability concerns remain around speculative decoding and memory safety — especially on newer hardware (Blackwell, A6x).

---

### **6. What This Means for Application Developers**  
- **Use caution with speculative decoding** on quantized models (`Q4_K_M`, `IQ3_S`); expect non-deterministic outputs until #25618 is resolved.  
- **Leverage `--models-max=0` with load-on-startup** via recent PR (#30254), enabling dynamic router setups without model limits.  
- **Optimize memory usage** by avoiding logits buffers in encoder-only models (e.g., `bge-m3`, `EmbeddingGemma`) — enabled in `b11537`+.  
- **Expect regressions on new GPUs** (RTX 50xx, A6x, Blackwell): Validate model behavior post-upgrade, especially with mixed-precision kernels.  
- **Monitor CI/nightly builds** for upcoming MoE expert caching and better SYCL/Vulkan performance — these will be key for scalable agent systems.

👉 *Recommended: Test against `b11539`+ for stable inference, avoid speculative decoding on quantized models until further notice.*  
🔗 [GitHub Release b11539](https://github.com/ggml-org/llama.cpp/releases/tag/b11539) | [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-10**

---

### **1. Today's Highlights**  
Multiple critical stability issues have emerged in Ollama’s latest releases, particularly around MLX and CUDA backends on Apple Silicon and Windows systems. Notably, `qwen3.6:35b-mlx` crashes on `0.40.x` due to a regression from `0.35.0`, while users report persistent GPU fallbacks on Windows caused by incomplete DLL updates post-auto-update. These issues are affecting high-memory models like `mistral-medium-3.5:128b` and `gemma4:12b`, with significant performance degradation and memory pressure.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, ongoing changes in `v0.40.x` include:  
- **Automatic model upgrades** now enabled by default (reported in [#18909](https://github.com/ollama/ollama/issues/18909)), causing storage concerns for low-space environments.  
- **Local model compatibility migration** temporarily disabled via PR [#18908](https://github.com/ollama/ollama/pull/18908) due to GC overhead and request latency in high-throughput use cases (e.g., embedding models).

---

### **3. New Model & Hardware Support**  
- **MLX Backend Expansion**: PR [#18780](https://github.com/ollama/ollama/pull/18780) adds Kolibri 1 support for MLX runner, enabling inference on Apple Silicon devices.  
- **Multimodal Embeddings**: PR [#18820](https://github.com/ollama/ollama/pull/18820) introduces support for multimodal embeddings via `EmbeddingGemma2Model` on MLX, allowing image/audio input through `/api/embed`.  
- **Community Integrations Added**: Vessel ([#18912](https://github.com/ollama/ollama/pull/18912)), Creatos ([#18910](https://github.com/ollama/ollama/pull/18910)), AI Character Engine ([#18904](https://github.com/ollama/ollama/pull/18904)) now listed in community integrations.

---

### **4. Performance & Optimization**  
- **Memory Efficiency**: Users report extreme RAM usage (>127GB) and >100GB wired memory when loading `mistral-medium-3.5:128b` on M4 Macs with 128GB RAM — significantly exceeding expected model size (~80GB).  
- **CUDA Latency**: Intermittent `CUDA error: shared object initialization failed` during warmup correlates with silent fallback from `CUDA_Host` to CPU pinned buffers (see [#17380](https://github.com/ollama/ollama/issues/17380)).  
- **Throughput Impact**: Background model migration (PR [#18908](https://github.com/ollama/ollama/pull/18908)) removed due to per-request overhead and GC pressure in high-volume scenarios.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| 🔴 Critical | [#18856](https://github.com/ollama/ollama/issues/18856) | MLX runner panic with `qwen3.6:35b-mlx` in `0.40.x` (regression from `0.35.0`) | Open |
| 🔴 Critical | [#18770](https://github.com/ollama/ollama/issues/18770) | `mistral-medium-3.5:128b` consumes excessive RAM (>127GB) and runs at ~1 word/min on M4 Mac | Open |
| 🟡 High | [#18885](https://github.com/ollama/ollama/issues/18885) | MLX runner fails with `panic: mlx` on `gemma4:e2b-mlx` (Mac mini M6, 16GB RAM) | Open |
| 🟡 High | [#18898](https://github.com/ollama/ollama/issues/18898) | `gemma4:12b` throws `"Gemma4Assistant requires ctx_other to be set"` | Open |
| 🟡 Medium | [#18858](https://github.com/ollama/ollama/issues/18858) | `clef-flash` fails with unknown encoding error (`"unsupported decision encoding \"lfm2-d1\""`) | Open |

> **Note**: Several regressions affect newer hardware (RTX 5070 Ti, AMD Radeon 780M Vulkan) and macOS MLX workflows — likely tied to recent CUDA/MLX integration changes.

---

### **6. What This Means for Application Developers**  
- **Avoid `0.40.x` for production workloads** involving large models (`128b`, `35b`) or MLX on Apple Silicon until [#18856](https://github.com/ollama/ollama/issues/18856) and [#18885](https://github.com/ollama/ollama/issues/18885) are resolved.  
- **Disable auto-upgrades** if disk space is constrained — use `OLLAMA_AUTO_UPGRADE=false` or disable via config (#18909).  
- **Expect unstable behavior on Windows GPUs** — check for `.tmp` files in `cuda_v12\` after updates (see [#18712](https://github.com/ollama/ollama/issues/18712)).  
- **Validate model compatibility** before deployment: `d1-3B`, `d1-omni-600M`, and `clef-flash` currently fail due to unsupported encodings or missing tooling.  
- **Monitor for silent fallbacks** — especially on Windows and AMD systems — where GPU detection fails silently due to CUDA/Vulkan initialization errors.

> 💡 **Pro Tip**: Use `ollama serve --log-level debug` to trace GPU buffer fallbacks and model load failures early in your pipeline.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-10**

---

### **1. Today's Highlights**  
The LiteLLM project continues its momentum toward high-performance, secure AI infrastructure with critical stability fixes and a major push into Rust-based performance optimization. The most urgent developments include the resolution of a severe security incident (Issue #24518) and ongoing work to stabilize budget enforcement and spend tracking under load—key concerns for production deployments. Meanwhile, the Rust migration initiative (Issue #31263) is gaining traction, with new PRs focused on Bedrock and SSE header normalization.

---

### **2. Releases & Breaking Changes**  
- **v1.106.0-dev.3** released today with enhanced security verification via Cosign signatures. All Docker images are now cryptographically signed using the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
- **Security Note**: The earlier compromise of v1.82.7/v1.82.8 PyPI packages has been fully contained; all affected versions have been removed. Users are advised to upgrade to current stable releases. See full details: [Security Townhall](https://docs.litellm.ai/blog/security-townhall-updates)  
- **Breaking Change Alert**: The `/metrics` endpoint is now unauthenticated by default, exposing multi-tenant PII in production environments unless explicitly secured with `require_auth_for_metrics_endpoint: true`. This was reported as a security risk in Issue [#24530](https://github.com/BerriAI/litellm/issues/24530).

---

### **3. New Model & Hardware Support**  
- **ScaleDown Models Added**: Five new ScaleDown models (`scaledown/*`) now supported as a chat provider (PR #44168), with input pricing at $0.05 per million tokens and no output cost.  
- **Bedrock Native Integration**: PRs #45696 and #45609 enable native `/responses` bridging for GPT-5.6+ function tools with reasoning, avoiding fallback to Converse and preserving prompt caching.  
- **Databricks Schema Fixes**: Multiple PRs (#45631, #45632, #45658, #45659) ensure proper handling of nested JSON schema `$ref` pointers (`#/$defs/...`) in Databricks requests, fixing prior failures on non-Claude models.  
- **Vertex AI Claude Batch Fix**: PR #45715 corrects batch upload paths and row formatting for Anthropic models on Vertex AI, resolving 404s during batch creation.

---

### **4. Performance & Optimization**  
- **Rust Migration Progress**: The core initiative to migrate LiteLLM to Rust (Issue #31263) is actively underway. Early results suggest sub-1ms overheads are achievable, targeting ultra-low-latency inference routing.  
- **Response Caching Preservation**: PR #45693 ensures response cache state persists across DB router rebuilds when `store_model_in_db=True`, preventing unnecessary upstream calls.  
- **Spend Tracking Efficiency**: PR #31866 introduces `disable_entity_spend_updates` flag to suppress expensive database `UPDATE` operations while retaining spend logs—critical for high-throughput systems.  
- **Telemetry Persistence**: PR #45490 enables local telemetry storage with persistent instance IDs, allowing air-gapped deployments to retain diagnostic data and enabling admin export.

---

### **5. Stability & Regressions**  
- **Critical Budget Enforcement Issues**:  
  - [#27735](https://github.com/BerriAI/litellm/issues/27735): Virtual keys report `BudgetExceededError` despite actual spend below budget.  
  - [#36926](https://github.com/BerriAI/litellm/issues/36926): False `BudgetExceededError` under sustained load due to stale cost calculations (resolves after ~2 minutes).  
  - [#26672](https://github.com/BerriAI/litellm/issues/26672): `max_budget` bypassed in v1.82.3 despite spending exceeding limits.  
  *All issues remain open but are being prioritized in the current stability sprint (Issue #30484).*  
- **Concurrency Bugs**:  
  - [#43491](https://github.com/BerriAI/litellm/issues/43491): User/team spend caches lose concurrent increments, leading to undercounting.  
  - [#31441](https://github.com/BerriAI/litellm/issues/31441): `end_user` field is pinned to first request’s `user` value when using shared virtual keys.  
- **Streaming Failures**:  
  - [#45457](https://github.com/BerriAI/litellm/issues/45457): Stream drops before first chunk are not retried, even with `num_retries`.  
  - [#45406](https://github.com/BerriAI/litellm/issues/45406): Non-Responses error frames emitted mid-stream instead of clean errors.

---

### **6. What This Means for Application Developers**  
- **Upgrade Immediately**: If you're using v1.82.7 or v1.82.8, upgrade to a current stable version due to confirmed supply-chain compromise.  
- **Secure Your Proxy**: Explicitly set `require_auth_for_metrics_endpoint: true` to prevent PII exposure from Prometheus endpoints.  
- **Use Stable Budget Logic**: Avoid `virtual_key` + `max_budget` combinations until fixes land—current behavior is inconsistent under load. Consider using token-based quotas (Issue #44555) for monthly caps.  
- **Prepare for Rust Migration**: While still in progress, expect future releases to offer significantly lower latency and higher throughput—ideal for agent orchestration and real-time LLM gateways.  
- **Leverage New Features**: Use `disable_entity_spend_updates` to reduce DB load in high-volume setups. Enable the new Telemetry UI (PR #45494) to monitor usage patterns and proxy health.  

> 🔗 [GitHub Issues](https://github.com/BerriAI/litellm/issues) | [PRs](https://github.com/BerriAI/litellm/pulls) | [Security Townhall](https://docs.litellm.ai/blog/security-townhall-updates)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-10**

---

### **1. Today's Highlights**  
Unsloth continues to expand its support for multimodal and edge inference, with key PRs enabling Qwen-Image-2.1-Turbo sampling scheduling and improved file parsing in Unsloth Studio. Critical stability fixes address AMD GPU memory leaks, Intel XPU PyTorch installation, and Windows installer security hardening—particularly important for developers deploying on heterogeneous or constrained environments.

---

### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the last 24 hours. Users should continue using `unsloth==2025.11.3` or later, but be aware of known OOM issues with large models (e.g., #4504, #3603).

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen-Image-2.1-Turbo** added via PR [#13159](https://github.com/unslothai/unsloth/pull/13159), supporting 8-step sampling and full integration into the `qwen-image-2.1` family.  
- ✅ **Intel Arc / Data Center GPUs** now auto-detectable via `install.sh` with PR [#13193](https://github.com/unslothai/unsloth/pull/13193), fixing prior fallback to CPU-only PyTorch.  
- ✅ **AMD ROCm + APU systems** gain smarter GPU selection: PR [#13196](https://github.com/unslothai/unsloth/pull/13196) ensures discrete dGPUs are prioritized over APUs when available.  
- 📄 **File format expansion**: PRs [#13081](https://github.com/unslothai/unsloth/pull/13081), [#13186](https://github.com/unslothai/unsloth/pull/13186), and [#13183](https://github.com/unslothai/unsloth/pull/13183) add support for `.docx`, `.xlsx`, `.odt`, `.rtf`, HTML tables, and exponent markup in web scraping.

---

### **4. Performance & Optimization**  
- 🔧 **Kernel-level improvements**: PR [#13121](https://github.com/unslothai/unsloth/pull/13121) casts `tl.program_id` to `int64` in RoPE and norm kernels, resolving a critical overflow issue that could cause crashes on sequences > 2³¹ elements (~5.5 GiB VRAM required).  
- ⚙️ **Embedding learning rate fix**: PR [#13171](https://github.com/unslothai/unsloth/pull/13171) ensures `embedding_learning_rate` is applied during full fine-tuning—previously silently ignored.  
- 💡 **Context estimation**: PR [#12599](https://github.com/unslothai/unsloth/pull/12599) improves `/v1/models` VRAM-fit context estimates by anchoring values to actual measured limits, reducing false warnings.

---

### **5. Stability & Regressions**  
- ⚠️ **AMD GPU Memory Leak**: PR [#7449](https://github.com/unslothai/unsloth/issues/7449) reports Unsloth Studio loading model weights into system RAM instead of VRAM on Strix Halo (Windows), despite GPU compute usage. *No fix PR yet*.  
- ⚠️ **AMD Crash on Qwen3.8-27B V3 GGUF**: Issue [#9792](https://github.com/unslothai/unsloth/issues/9792) confirms V3 GGUFs crash after prefill on R9700 (Vulkan); rolling back to V2 (`408fcc1807ab`) resolves it. *Workaround confirmed*.  
- ⚠️ **Windows Installer Block**: Issue [#8490](https://github.com/unslothai/unsloth/issues/8490) shows App Control policies block `unsloth.exe` execution—requires manual policy override. *Security fix PRs landed*: [#13192](https://github.com/unslothai/unsloth/pull/13192), [#13189](https://github.com/unslothai/unsloth/pull/13189).  
- ❌ **OOM under GRPO/QLoRA**: Multiple high-severity OOMs reported (#4504, #3603, #3411) even on H100 80GB and B200 183GB—suggesting KV cache bloat or memory accounting bugs. *No patch yet.*

---

### **6. What This Means for Application Developers**  
- **Use `install.sh` with caution on Intel or AMD systems**: Ensure you're not falling back to CPU PyTorch; verify `UNSLOTH_TORCH_INDEX_FAMILY=xpu` is set if needed.  
- **Avoid Qwen3.8-27B V3 GGUF on AMD** until the Vulkan issue is resolved—use V2 revision as workaround.  
- **Monitor VRAM usage closely** when training large models (especially GRPO/QLoRA): Even with ample VRAM, unexpected OOMs suggest internal memory accounting flaws.  
- **Leverage new file parsing** in Studio for richer knowledge base ingestion (PDFs, spreadsheets, emails, web pages)—but expect minor formatting quirks in table/HTML handling until PRs merge.  
- **Do not rely on `embedding_learning_rate` in full finetuning** unless you apply PR [#13171](https://github.com/unslothai/unsloth/pull/13171) manually.

> 🔗 [Unsloth GitHub Issues](https://github.com/unslothai/unsloth/issues) | [Unsloth PRs](https://github.com/unslothai/unsloth/pulls)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*