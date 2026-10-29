# AI Infrastructure Digest 2026-10-29

> Generated: 2026-10-29 04:07 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

---

### **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-29**

---

#### **1. Ecosystem Overview**  
The AI inference and serving landscape in late 2026 is defined by rapid specialization across hardware, model architectures, and deployment patterns. Projects are diverging into distinct roles: high-performance engines (vLLM, SGLang), lightweight local runtimes (llama.cpp), unified gateways (LiteLLM), and full-stack fine-tuning platforms (Unsloth). A clear trend toward **heterogeneous hardware support**, **multimodal expansion**, and **distributed inference optimization** is evident. Critical stability issues persist—especially around speculative decoding, MoE caching, and backend-specific memory handling—highlighting that performance gains are still being traded for operational complexity.

---

#### **2. Activity Comparison**

| Project       | Issues Open (Last 7 Days) | PRs Merged (Last 7 Days) | Release Status     |
|---------------|----------------------------|-----------------------------|--------------------|
| vLLM          | 34                         | 87                          | None               |
| SGLang        | 28                         | 52                          | None               |
| llama.cpp     | 41                         | 68                          | ✅ v0.8.0 (Today)  |
| Ollama        | 37                         | 33                          | ✅ v0.40.13 (Today)|
| LiteLLM       | 26                         | 45                          | ✅ RCs released    |
| Unsloth       | 43                         | 39                          | ✅ v0.1.912-beta   |

> **Insight**: *llama.cpp* and *Ollama* led in release activity today, driven by multimodal model launches. *vLLM* dominates in PR volume, reflecting deep kernel-level optimization momentum.

---

#### **3. Model Support Race**

| New Model / Architecture         | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **Kimi-K3 (DSpark)**             | ✅   | ⚠️ (tool call bug) | ❌        | ❌     | ❌      | ❌      |
| **DeepSeek-V4-Flash / V4.1-Flash** | ✅ (ROCm/TP) | ⚠️ (OOM crash) | ✅ (deepseek41 branch) | ⚠️ (OOM crash) | ❌      | ❌      |
| **Qwen3.8-Flash-Next**           | ✅ (ROCm) | ❌     | ❌        | ❌     | ❌      | ❌      |
| **LiquidAI LFM3 (text/audio/omni)** | ❌   | ❌     | ✅ (v0.8.0) | ✅ (MLX-only) | ❌      | ✅ (MLX) |
| **Hybrid Mamba/SWA Models**      | ❌   | ✅ (PD + L3 offload) | ❌        | ❌     | ❌      | ❌      |
| **Moore Threads (MUSA)**         | ❌   | ⚠️ (tracking) | ❌        | ❌     | ❌      | ❌      |

> **Winner**: *SGLang* leads in **architectural innovation** (PD disaggregation, HiCache write-back), while *llama.cpp* and *Ollama* lead in **model availability** (LFM3). *vLLM* maintains edge in **ROCm/AMD performance** for cutting-edge models.

---

#### **4. Performance Frontier**

| Focus Area                | vLLM                            | SGLang                         | llama.cpp                      | Ollama                     | LiteLLM                   | Unsloth                    |
|---------------------------|----------------------------------|--------------------------------|--------------------------------|----------------------------|---------------------------|----------------------------|
| **KV Cache Efficiency**   | ✅ MooncakeConnector, hybrid MoE | ✅ HiCache write-back (0.6ms)  | ✅ ClassLRU cache (+6–7%)      | ⚠️ Vulkan regression       | ❌                        | ✅ Context compaction      |
| **Speculative Decoding**  | ✅ ROCm optimizations            | ❌ (critical regression)       | ✅ Spark2.6 DSpark support     | ⚠️ tool call corruption    | ✅ Drafted/accepted metrics | ✅ Multi-L fine-tuning     |
| **Batching & Prefill**    | ✅ Mixed batch skip, XCD run     | ✅ PD disaggregation           | ❌                             | ⚠️ Prompt cache slowdown   | ✅ Router scalability     | ✅ Pipeline parallelism    |
| **Quantization & Kernels**| ✅ NVFP4, Marlin fallback        | ✅ SM120 Qwen-image kernels    | ✅ Fused MoE, IM2COL HVX       | ⚠️ MXFP4 metadata bugs     | ✅ Cost accuracy fixes    | ✅ Tensor parallelism      |
| **Distributed Serving**   | ✅ Elastic TP sharing            | ✅ L3 offload, hybrid MoE       | ❌                             | ❌                         | ✅ Redis-based routing    | ✅ Interleaved/BFS scheduling |

> **Trend**: The frontier has shifted from raw throughput to **elastic, shared resource management**—especially KV cache reuse and distributed decode offloading—driven by the rise of long-context agents and large MoE models.

---

#### **5. Layer Positioning**

| Project       | Primary Layer                  | Key Differentiator                                  |
|---------------|--------------------------------|-----------------------------------------------------|
| **vLLM**      | High-Performance Serving Engine | Optimized for GPU kernels, ROCm, speculative decoding, and hybrid MoE |
| **SGLang**    | Disaggregated Inference Platform | Enables PD disaggregation, HiCache, L3 offload — ideal for scalable cluster inference |
| **llama.cpp** | Local Runtime / Edge Execution | Lightweight, cross-backend (Hexagon, Vulkan, SYCL), now multimodal |
| **Ollama**    | Unified Gateway & CLI Runner   | User-friendly, model-centric; but opaque MLX dependency creates friction |
| **LiteLLM**   | API Abstraction & Routing Layer  | Aggregates providers, enforces cost guardrails, enables tool search bridging |
| **Unsloth**   | Fine-Tuning & Training Framework | Specializes in efficient QLoRA, multi-GPU pipeline/tensor parallelism, context compaction |

> **Strategic Insight**: The ecosystem is becoming **layered and compositional**—developers increasingly combine tools (e.g., *vLLM* for serving, *LiteLLM* for routing, *Unsloth* for training).

---

#### **6. Trend Signals**

- **Hardware Fragmentation is Accelerating**: AMD ROCm, Intel XPU, Moore Threads, Snapdragon Hexagon, and Blackwell SM120 all have active, non-trivial support efforts. *vLLM* and *SGLang* are leading in AMD/ROCm maturity.
- **Multimodality is No Longer Optional**: *llama.cpp* and *Ollama* now ship with audio and vision support via LFM3, signaling a shift from text-only inference.
- **Speculative Decoding Stability is Fragile**: Despite performance wins, multiple projects report regressions in structured output, tool calling, and memory leaks—indicating this feature remains high-risk in production.
- **MLX is Becoming a Gatekeeper**: *Ollama* and *Unsloth* now require MLX for new models, creating a **platform lock-in risk** for Apple Silicon users unless cross-platform support (PR #19366) matures.
- **Rust Migration is Gaining Traction**: *LiteLLM’s* Rust beta signals a move toward sub-millisecond overheads—future benchmarking will likely favor native-Rust infra.

> **Actionable Advice for Developers**:
> - Use **vLLM** or **SGLang** for high-throughput, long-context inference on AMD/Blackwell.
> - Choose **llama.cpp** for edge/local deployment with multimodal workloads.
> - Leverage **LiteLLM** as a stable, auditable gateway layer with cost tracking.
> - Avoid `lfm3-*` models outside Apple Silicon until MLX dependency is documented.
> - Monitor *Unsloth*’s tensor/pipeline parallelism for scalable fine-tuning pipelines.
> - Test speculative decoding workflows under load—expect silent failures in tool calls and structured outputs.

---  
*Data compiled from GitHub activity (2026-10-29). Targets: infrastructure engineers, platform architects, and technical decision-makers in AI product teams.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-10-29

---

### **1. Today's Highlights**  
vLLM continues its aggressive optimization for next-gen hardware and models, with multiple high-impact PRs focused on ROCm (AMD) performance improvements for Kimi-K3 and DeepSeek-V4-Flash, including faster speculative decoding and reduced memory pressure. Key progress is also seen in KV cache offloading, hybrid MoE support, and the introduction of a modular `MooncakeConnector` backend interface to enable elastic shared cache reuse across heterogeneous TP configurations.

---

### **2. Releases & Breaking Changes**  
*None.* No new releases or breaking API/config changes were published in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- ✅ **ROCm (gfx1151 / MI355X)**: Full support for `DeepSeek-V4-Flash-0731` via #64098, which bounds steady-state memory usage during long-running DSpark serving to prevent OOM kills.  
- ✅ **Kimi-K3 (DSpark Markov sampling)**: Now supports sharded vocabulary sampling across TP ranks on ROCm (#64031), enabling efficient speculative decoding at scale.  
- 🔧 **SM120 (Blackwell RTX 6000/5000)**: Native NVFP4 MoE kernel support is actively being tracked (#31085); currently falls back to Marlin due to missing compute capability detection.  
- 📌 **SM8x (Ampere A100/A800/RTX 30xx)**: Requested support for `DeepSeek-V4-Flash` models (#50576), currently blocked by lack of SM8x-compatible kernels.  

> [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) | [PR #64098](https://github.com/vllm-project/vllm/pull/64098)

---

### **4. Performance & Optimization**  
- ⚡ **Speculative Decoding (ROCm)**:  
  - Faster vocab top-k fallback using Triton + `aiter topk_plain` (#61429).  
  - Deferred GDN state stores to next step, reducing per-draft token overhead (#61434).  
  - Unified attention prioritized over `ROCM_ATTN` in spec decode/hybrid cases (#61433).  
- 🚀 **Prefill Optimization**:  
  - Mixed batch processing now skips empty query blocks and runs on all XCDs (#62605), improving throughput in chunked prefill scenarios.  
- 🔥 **Kernel-Level Improvements**:  
  - Reduced per-layer overhead in FlashInfer GDN prefill via uninitialized `core_attn_out` allocation (#64419).  
  - Split-K segmentation now respects sliding window pruning (#61760), improving memory locality.  
- 💾 **KV Cache Efficiency**:  
  - Modular `MooncakeConnectorWorker` introduced (#64363) to route KV transfers through a unified backend interface, enabling future elastic sharing.  
  - Heterogeneous TP sharing extended for hybrid KV caches (#54307).  

> [PR #64419](https://github.com/vllm-project/vllm/pull/64419) | [PR #61434](https://github.com/vllm-project/vllm/pull/61434) | [PR #62605](https://github.com/vllm-project/vllm/pull/62605)

---

### **5. Stability & Regressions**  
- ❌ **Critical Regression (Speculative Decoding + Structured Output)**:  
  A performance regression under PP + spec decode with structured outputs was identified; reverted in #63219 after causing significant latency degradation.  
  > [PR #63219](https://github.com/vllm-project/vllm/pull/63219) | [Issue #54437](https://github.com/vllm-project/vllm/issues/54437)  
- ⚠️ **Memory Leak / OOM Risk**:  
  Long-running `DeepSeek-V4-Flash-DSpark` sessions on gfx1151 may exhaust Linux page-table memory unless bounded (fixed in #64098).  
- ⚠️ **GPU Memory Spike**:  
  `cuda.graph` usage causes excessive memory consumption on Qwen3.5 models (#38486), impacting deployment density.  
- ⚠️ **Crashes on Hybrid MoE + TurboQuant**:  
  `TurboQuant` + hybrid MoE (e.g., Qwen3.6-35B-A3B-FP8) fails on Ampere GPUs (SM 80–86) due to Hopper+ assumptions (#40124).  
- ⚠️ **Unstable Builds**:  
  `torch.compile` artifacts fail to load under non-UTF-8 locales due to source file encoding issues (#64365).  

> [PR #64365](https://github.com/vllm-project/vllm/pull/64365) | [Issue #40124](https://github.com/vllm-project/vllm/issues/40124)

---

### **6. What This Means for Application Developers**  
- If you're deploying **Kimi-K3**, **DeepSeek-V4-Flash**, or **Qwen3.8-Flash-Next** on **AMD GPUs (MI355X/gfx1151)**, expect substantial performance gains from recent ROCm optimizations—especially in speculative decoding and long-context inference.  
- Use `mooncake.engine.TransferEngine` via the new connector interface (#64363) to build scalable, shared KV cache systems across multi-node clusters.  
- Avoid `TurboQuant` with hybrid MoE models on Ampere GPUs until #40124 is resolved.  
- Monitor `cuda.graph` memory usage when running large Qwen3.5 instances—consider disabling it temporarily if memory pressure arises.  
- For agents requiring structured output and speculative decoding, ensure you’re not on a version affected by the regression fixed in #63219.  

> **Pro Tip**: Enable `thinking_token_budget` in `/v1/responses` via #63896 for better reasoning cost control in agent workflows.  

---  
*Digest generated from GitHub data: [vllm-project/vllm](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **SGLang Digest — 2026-10-29**

---

#### **1. Today's Highlights**  
The SGLang ecosystem continues to advance its multi-GPU, disaggregated inference capabilities with significant progress on **Prefill-Decode Disaggregation (PD)** and **HiCache optimizations**, including write-back eviction improvements and L3 offload support for hybrid Mamba/SWA models. Critical stability fixes were merged for **DeepSeek-V4.1-Flash + DSPARK** (OOM crash) and **Kimi-K3 tool call handling**, while performance work accelerates on **GLM-5.3-Flash** and **Qwen-image** kernels for SM120 Blackwell GPUs.

---

#### **2. Releases & Breaking Changes**  
*None* — No new releases or breaking API/config changes reported in the last 24 hours.

---

#### **3. New Model & Hardware Support**  
- **AMD RDNA3/RDNA4 Support (gfx1100/gfx1201)**: Tracking umbrella issue #30599 highlights strategic enablement efforts for consumer Radeon cards, expanding ROCm support beyond datacenter Instinct GPUs.  
- **Moore Threads (MUSA)**: Feature request #16565 remains open, seeking first-class GPU support for Moore Threads’ emerging ecosystem.  
- **Intel XPU**: PR #40763 enables **DWDP (Distributed Weight Data Parallelism)** for MoE models on Intel XPU, verified on Arc Pro B60.  
- **Hybrid Models**: PD disaggregation now supports **Mamba and SWA hybrid models** via decode KV offload (PR #46940).

> 🔗 [AMD RDNA3/RDNA4 Support](https://github.com/sgl-project/sglang/issues/30599) | [Moore Threads MUSA](https://github.com/sgl-project/sglang/issues/16565) | [Intel XPU DWDP](https://github.com/sgl-project/sglang/pull/40763)

---

#### **4. Performance & Optimization**  
- **Qwen-Image 2.1**: Packing BF16 gate/up projections on SM120 reduces E2E latency by **3.16% (512² T2I)** and **2.63% (512² editing)** on RTX PRO 6000 Blackwell (PR #47090).  
- **Joy Image Edit**: Fusing image MLP GELU improves high-quality generation throughput on SM120 (PR #47022).  
- **GLM-5.3-Flash**: Ongoing kernel optimization tracking (PR #45373), with targeted PoC work underway for Hopper (SM90).  
- **HiCache Write-Back**: Eviction duration reduced from ~600ms to ~0.6ms average per call (PR #46952), improving prefix-cache hit rates under steady load.  
- **Multi-LoRA Serving**: PR #45951 improves PP efficiency in both throughput and GPU memory usage during multi-LoRA inference.

> 🔗 [Qwen-Image 2.1 Optimization](https://github.com/sgl-project/sglang/pull/47090) | [HiCache Write-Back](https://github.com/sgl-project/sglang/issues/46952) | [Multi-LoRA PP Optimization](https://github.com/sgl-project/sglang/pull/45951)

---

#### **5. Stability & Regressions**  
- **Critical OOM Crash**: `DeepSeek-V4.1-Flash + DSPARK` causes unbounded `SparsePrefillWorkspace` allocation, crashing entire TP group (#41076). *Fix pending.*  
- **Tool Call Corruption**: Kimi-K3 returns 400 errors; glm47/deepseek silently drop tool calls due to JSON-schema + tools combo bug (#47167). *Fix pending.*  
- **KV Cache Hangs**: GLM-5.3 FP8 inference hangs after sustained workload when KV cache is full (TP8, EAGLE, H200) (#45781). *Reproducible, no fix yet.*  
- **HiCache Scheduler Lock**: `buffer_only` + Mooncake L3 leads to scheduler crashes when evicted working set exceeds host mamba pool capacity (#45989). *High severity, no fix.*  

> 🔗 [DeepSeek-V4.1 OOM Crash](https://github.com/sgl-project/sglang/issues/41076) | [Tool Call Bug](https://github.com/sgl-project/sglang/issues/47167) | [HiCache Scheduler Crash](https://github.com/sgl-project/sglang/issues/45989)

---

#### **6. What This Means for Application Developers**  
- **Use HiCache with caution** in production: Avoid `write_back` if low-latency scheduling is critical—eviction can cause 500ms+ stalls per request. Consider `write_through` unless you have strict memory constraints.  
- **Avoid DeepSeek-V4.1-Flash + DSPARK** until PR #41076 is resolved—risk of cluster-wide OOMs in TP environments.  
- **Validate tool call integration** with Kimi-K3, glm47, and deepseek models: The current behavior silently drops tool calls—expect inconsistent output.  
- **Leverage PD disaggregation** for large-scale deployments: Recent work on hybrid Mamba/SWA model support and L3 offload (PR #46940) unlocks efficient decode reuse.  
- **Monitor AMD/ROCm CI** closely: Flaky tests (#42752) and test migration (e.g., Kimi-K2.5 MXFP4 BCG moved to nightly) may impact CI reliability.

> ✅ **Recommendation**: For production inference, prefer `write_through` HiCache, avoid DSPARK with DeepSeek-V4.1, and verify tool schema compatibility before deployment.

--- 

*Digest generated from GitHub data: sgl-project/sglang | 2026-10-29*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-29**

---

### **1. Today's Highlights**  
The latest development cycle centers on **hardware-specific optimizations**, particularly for Hexagon (Qualcomm Snapdragon), Vulkan, and SYCL backends, with notable improvements in IM2COL parallelization and MoE cache management. A major release introduces the **LiquidAI LFM3 family** (text, vision, audio, omni) and experimental streaming audio via `/v1/realtime` and `/tts`, marking a significant expansion of llama.cpp’s multimodal capabilities.

---

### **2. Releases & Breaking Changes**  
- **v0.8.0**: Released today, this version adds:
  - Support for **LiquidAI LFM3 series** (text, vision, audio, omni) via `--model`.
  - New **experimental streaming audio API** in `mtmd` with real-time input/output through `/v1/realtime` and `/tts` endpoints.
  - Introduction of **DeepSee** architecture support.
  - Fixes to control vector layer bounds and M-RoPE position loops (`#31336`).
  - [GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)

> 🔔 *Migration Note*: The new `/v1/realtime` and `/tts` endpoints are experimental; expect API changes before stabilization.

---

### **3. New Model & Hardware Support**  
- **Models**:
  - LiquidAI LFM3 family (text, vision, audio, omni) — added via `--model`.
  - Spark2.6 DSpark draft support — added in PR #31168.
  - DeepSeek-V4.1-Flash (in `deepseek41` branch) — ongoing integration; see issue #30817.

- **Hardware & Backends**:
  - **Hexagon (Snapdragon)**: IM2COL now uses block-based HVX parallelization (`#31050`); improved TTS performance via PocketTTS optimization.
  - **Vulkan**: Added `count_experts.comp` optimization to reduce redundant workgroup loops (`#31163`).
  - **SYCL**: Improved oneDNN FA cache thread safety and runtime failure memoization (`#31138`).
  - **OpenVINO**: Added slice view support for SCALE ops (`#31334`).
  - **WebGPU**: Updated `get_max_size` to return `maxBufferSize` and avoid whole-buffer bindings (`#31348`).
  - **CI Expansion**: Added Windows on Snapdragon (SC8480XP) build and backend-ops test (`#31349`).

---

### **4. Performance & Optimization**  
- **Hexagon IM2COL**: Block-based HVX parallelization improves throughput for TTS workloads (e.g., PocketTTS); loop unrolling and multi-threaded output-col blocks enhance efficiency (`#31050`).
- **SYCL**: Work-group argmax optimized for short TOP_K rows using angelX; reduces coordination overhead (`#31110`).
- **CUDA**: Fused MoE gate/up and GLU operations in MMQ (`#31188`); batched tensor reads now use mapped host memory for faster access (`#30986`).
- **MoE Cache**: New `ClassLRU` hybrid cache replaces SLRU, showing **+6% decode speed on QFN** and **+7% on GLM** with 8% fewer uploads (`#31233`).
- **Quantization**: IQ4 quant creation sped up via pre-computed halfway points (`#31201`).

---

### **5. Stability & Regressions**  
Critical issues reported today include:

| Severity | Issue | Summary | Fix Status |
|--------|-------|---------|------------|
| ⚠️ High | [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) | CUDA graphs hang GPU (RTX 5090 Laptop, sm_120) | ✅ Workaround: `GGML_CUDA_DISABLE_GRAPHS=1` |
| ⚠️ High | [#29092](https://github.com/ggml-org/llama.cpp/issues/29092) | HIP/ROCm: fused Gated Delta Net carries recurrent state across requests | ❌ No fix yet |
| ⚠️ Medium | [#30869](https://github.com/ggml-org/llama.cpp/issues/30869) | Compile failure on AMD MI210 (gfx9a CDNA2) with HIP | ❌ No fix yet |
| ⚠️ Medium | [#31262](https://github.com/ggml-org/llama.cpp/issues/31262) | SYCL performance drop (~35%) between b11804 and b11046 with CPU-offloaded MoE | ❌ Regression suspected |
| ⚠️ Low | [#31140](https://github.com/ggml-org/llama.cpp/issues/31140) | SYCL CPY rounding mismatch for q2_0/q4_0/q5_0 | ✅ Patch PR #31120 pending review |

> 📌 *Note*: Several stability issues involve speculative decoding, MoE caching, and backend-specific memory handling—common pain points in high-throughput inference systems.

---

### **6. What This Means for Application Developers**  
- **Multimodal apps**: Use `v0.8.0`’s `/v1/realtime` and `/tts` endpoints to build low-latency audio agents or real-time voice assistants.
- **Hardware-aware deployment**: Optimize for Snapdragon (Hexagon) devices using `b11976`’s IM2COL improvements; leverage `ClassLRU` cache for better MoE performance.
- **Avoid regressions**: Pin builds to `b11046` or earlier if using SYCL + MoE offloading until #31262 is resolved.
- **Memory management**: Use `/metrics` and `GET /memory` (PR #26130) to monitor per-device memory usage and detect leaks early.
- **Model conversion**: Update `convert_hf_to_gguf.py` to handle `extra_special_tokens` as lists (PR #31343) to avoid crashes.

> ✅ *Best Practice*: Always test model loading and prompt reuse under load—issues like KV cache holes (#27408) can silently corrupt outputs during speculative decoding.

---  
*Source: [ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-29**

---

### **1. Today's Highlights**  
The latest release, v0.40.13, expands native support for Liquid AI’s LFM3 series—including audio and multimodal variants—on Linux, Windows, and Apple Silicon. However, users on non-Apple platforms face a critical runtime dependency: the MLX backend is now mandatory for these models, with no clear documentation or filtering available in the model library. This has triggered multiple high-priority issues around missing MLX detection and model pull failures.

---

### **2. Releases & Breaking Changes**  
- **v0.40.13**: Released today, this version enables **LFM3 models (lfm3-audio, lfm3-omni)** on Linux and Windows.  
  🔗 [GitHub Release](https://github.com/ollama/ollama/releases/tag/v0.40.13)  
- **Breaking Change**: `lfm3-*` models now require **MLX runtime**, but this requirement is not surfaced in the model page, CLI error output, or README.  
  🔗 Issue #19369 – *Documentation missing MLX requirement*  
  🔗 Issue #19343 – *Pull fails silently without MLX*

---

### **3. New Model & Hardware Support**  
- ✅ **LFM3 Series (Text-to-Speech, Multimodal)**: Now supported on **Linux, Windows, and Apple Silicon (M-series)** via MLX.  
  🔗 [Model Library – lfm3](https://ollama.com/library/lfm3)  
- 🚀 **MLX Backend Expansion**: PR #19366 adds **Windows support and CPU backend** for MLX runner, enabling full inference on non-Metal systems.  
  🔗 [PR #19366 – MLX: Add Windows & CPU support](https://github.com/ollama/ollama/pull/19366)  
- 💡 **GGUF Support**: Continued work on large MoE models (e.g., `gpt-oss:120b`) with MXFP4 format, though metadata parsing remains unstable.  
  🔗 Issue #19375 – *Error reading GGUF metadata on MXFP4 MoE models*

---

### **4. Performance & Optimization**  
- ⚠️ **Vulkan/AMD RADV Regression**: Users report a **~30× slowdown** in generation throughput after first request when prompt cache is enabled on AMD GPUs (Radeon RX 6600 XT).  
  🔗 Issue #19201 – *Vulkan performance collapse post-cache hit*  
- ⚠️ **Gemma 4 E-Series Memory Overestimation**: Scheduler overestimates VRAM usage by **3–4x**, causing unnecessary model evictions.  
  🔗 Issue #19357 – *Memory estimate inflated due to CPU-mapped embeddings*  
- ✅ **Speculative Decoding Metrics**: PR #19368 adds per-request metrics (drafted/accepted tokens), improving observability of speculative decoding behavior.  
  🔗 [PR #19368 – Report speculative decoding metrics](https://github.com/ollama/ollama/pull/19368)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Link |
|--------|------|--------|------|
| Critical | `lfm3-audio:latest` fails to pull on non-MLX systems | Closed | [#19343](https://github.com/ollama/ollama/issues/19343) |
| High | MLX requirement not documented anywhere | Closed | [#19369](https://github.com/ollama/ollama/issues/19369) |
| High | `qwen3.8:27b-mlx` fails to emit `tool_calls` if assistant produces free text first | Open | [#19353](https://github.com/ollama/ollama/issues/19353) |
| High | Pull resume fails after server restart (>1hr in progress) | Open | [#19337](https://github.com/ollama/ollama/issues/19337) |
| Medium | `gpt-oss:120b` fails on MXFP4 format due to metadata overflow | Open | [#19375](https://github.com/ollama/ollama/issues/19375) |
| Medium | Gibberish output with `qwen2.5-coder` under Vulkan | Open | [#16281](https://github.com/ollama/ollama/issues/16281) |
| Medium | Ollama auto-starts despite disabled autostart | Open | [#19067](https://github.com/ollama/ollama/issues/19067) |

> Note: No fix PRs yet exist for top regressions (e.g., `qwen3.8` tool calling, `gpt-oss` MXFP4), indicating ongoing stability challenges.

---

### **6. What This Means for Application Developers**  
- **Avoid `lfm3-*` models unless on Apple Silicon or MLX-enabled systems** — they will fail silently elsewhere. Use the model library filter (if added) or check `OLLAMA_RUNNER=mlx` explicitly.  
- **Expect inconsistent tool calling behavior with `qwen3.8:27b-mlx`** — avoid hybrid content (text + tool call); use empty `content` only pattern for reliable results.  
- **Disable Vulkan on AMD systems until #19201 is resolved** — expect severe latency degradation in production workloads.  
- **Use `--verbose` with `ollama run`** to monitor speculative decoding performance and detect inefficient draft acceptance rates.  
- **Prepare for model pull resumption failures** — do not restart `ollama serve` mid-pull, especially for large models (>1hr).  

🔧 **Recommendation**: Pin to v0.40.12 if you're not on Apple Silicon or using MLX. Monitor PR #19366 for cross-platform MLX support and watch for future updates on model filtering (Issue #19355).

---  
*Digest generated from GitHub activity (2026-10-29).*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-29**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem accelerates toward a high-performance, Rust-powered future with the ongoing migration to Rust (tracked in #31263), now entering early beta. Critical fixes improve cost accuracy for Anthropic and Nebius providers (#48937, #41782), while new PRs enhance streaming reliability, guardrail resilience, and support for Codex tool search on Claude via Responses API. Security remains strong with signed Docker images verified via Cosign.

---

### **2. Releases & Breaking Changes**  
- **v1.108.0-rc.1**, **v1.106.6**, and **v1.105.7** released today. All are signed with Cosign using the key from [commit `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).  
- **Rust Migration Progress**: The parent issue #31263 tracks the transition to Rust — expected to deliver sub-1ms overheads. Early Beta sign-up available: [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...).

---

### **3. New Model & Hardware Support**  
- **Codex Tool Search on Anthropic**: PR #48972 enables Codex client tool_search functionality on Anthropic models via Responses API bridging.  
- **DashScope Additions**: PR #48998 adds support for **image edits** and **text-to-speech** on DashScope, expanding QwenCloud integration capabilities.  
- **Bedrock Region-Prefixed Embeddings**: PR #47751 now routes region-specific embedding models (e.g., `bedrock/us-west-2/amazon.titan-embed-text-v2:0`) to their correct AWS region and bills accordingly.

---

### **4. Performance & Optimization**  
- **Streaming Efficiency**: PR #49002 fixes incorrect stream reconstruction for `n > 1` responses by rebuilding each choice independently, preventing tool call data loss in post-call processing.  
- **Router Scalability**: PR #49000 enhances least-busy routing by tracking in-flight requests per call in Redis sorted sets — prevents stale "idle" states from long-running requests.  
- **Token Counter Resilience**: PR #48916 ensures loaded Hugging Face tokenizers persist even if background downloads fail, avoiding latency spikes during token counting.

---

### **5. Stability & Regressions**  
- **Cost Tracking Bugs**:  
  - #48937: Streaming completions logged at $0 despite upstream reporting `usage.cost`.  
  - #47533: Non-streaming OpenAI-compatible calls ignore `usage.cost`, logging $0.  
  - #41782: Nebius provider cost calculation off by ×10.  
  *Fixes in progress: PRs #48937, #47533, #41782 all under review.*  
- **Stream Corruption**:  
  - #48773: Responses bridge duplicates tool-call arguments in streaming mode. Fixed in PR #48773.  
- **Configuration & Auth Issues**:  
  - #48815: Per-model budget caps not enforced — now fixed with enforcement in shared auth checks.  
  - #36917: System role messages silently dropped in Anthropic `/v1/messages`.  

---

### **6. What This Means for Application Developers**  
- **Use the latest RC (`v1.108.0-rc.1`)** for improved stability and cost tracking — especially critical for production billing with Anthropic, Nebius, and Azure AI Foundry.  
- **Prepare for Rust migration**: Start testing early beta builds via the [sign-up form](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...) — expect lower latency and higher throughput.  
- **Leverage new features**: Use `tool_search` on Claude via Codex bridges and enable TTS/image edits on DashScope without direct API calls.  
- **Ensure secure deployments**: Verify Docker image signatures using Cosign; enforce `claude_code_marketplace_auth_required` (PR #48980) to restrict public access to sensitive marketplace content.  

> 🔗 Full details: [GitHub – BerriAI/litellm](https://github.com/BerriAI/litellm)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-10-29**

#### **1. Today's Highlights**  
The v0.1.912-beta release introduces Halloween-themed UX enhancements and key performance improvements, including faster first-launch times, optimized Linux tool calls, and better support for multi-L fine-tuning workflows. Critical stability fixes address VRAM overuse in QLoRA training (notably on 2×A100), OOM issues with large models like Qwen3-Coder-Next-Base, and context compaction failures in long-running GGUF chats.

#### **2. Releases & Breaking Changes**  
- **v0.1.912-beta** (released 2026-10-28):  
  - Introduced “Trick or Treat” Halloween UI theme with interactive elements (spiders, bats).  
  - Optimized startup latency, model loading speed, and Linux system call handling.  
  - Added support for training compatible fine-tuning jobs in parallel across multiple Ls (multi-L).  
  🔗 [GitHub Release v0.1.912-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.912-beta)

#### **3. New Model & Hardware Support**  
- ✅ **LFM3 family support**: PR #15889 enables full MLX-based inference for `LFM3-Audio` and `LFM3-Omni`, including spoken input/output via Apple MLX.  
  🔗 [PR #15889 – MLX: LFM3-Audio / LFM3-Omni on MLX](https://github.com/unslothai/unsloth/pull/15889)  
- ✅ **Intel Arc B580 GPU (XPU)**: Issue #15583 highlights demand for Intel XPU support; currently unsupported but under discussion.  
  🔗 [Issue #15583 – Intel Arc B580 GPU support](https://github.com/unslothai/unsloth/issues/15583)  
- ✅ **Qwen-Image-2.1-Turbo Safetensors**: Now visible in "On Device" list after fix in v0.1.911-beta.  
  🔗 [Issue #15735 – Safetensors missing from On Device](https://github.com/unslothai/unsloth/issues/15735)

#### **4. Performance & Optimization**  
- **VRAM Efficiency**: Multiple PRs target memory leaks and excessive VRAM usage during fine-tuning:
  - PR #15899 resolves training failure on single-column `text` JSONL datasets by correctly detecting format.
  - PR #15893 implements proper context compaction for long GGUF conversations, preventing “Message too long” errors.
  - PR #15857 adds UTF-8 byte count checks to prevent `/apply-template` timeouts due to oversized payloads.
  🔗 [PR #15893 – Compact long chats](https://github.com/unslothai/unsloth/pull/15893) | [PR #15857 – Guard against oversized payloads](https://github.com/unslothai/unsloth/pull/15857)
- **Tensor & Pipeline Parallelism**: Major progress in distributed training:
  - PR #15722 lifts restrictions on tensor parallelism (supports few KV heads, full finetuning, MoE, dropout).
  - PR #15656 & #15655 enable per-stage sharded model loading and full pipeline schedule support (Interleaved1F1B, LoopedBFS, ZBV, DualPipeV).
  🔗 [PR #15722 – Tensor parallel: lift refusals](https://github.com/unslothai/unsloth/pull/15722) | [PR #15656 – Pipeline parallel: sharded loading](https://github.com/unslothai/unsloth/pull/15656)

#### **5. Stability & Regressions**  
- ⚠️ **Critical VRAM Overuse (OOM)**: Users report severe VRAM spikes during QLoRA fine-tuning (e.g., Qwen3-Coder-Next-Base on 2×A100 80GB), causing crashes.  
  🔗 [Issue #4504 – Fine-tuning uses more VRAM than advertised](https://github.com/unslothai/unsloth/issues/4504)  
- ⚠️ **GPU Detection Failure**: RTX 2060 Super and AMD GPUs not detected on mixed NVIDIA-AMD Linux systems.  
  🔗 [Issue #1760 – No NVIDIA GPU found](https://github.com/unslothai/unsloth/issues/1760) | [Issue #15444 – AMD GPUs not showing up](https://github.com/unslothai/unsloth/issues/15444)
- ⚠️ **Studio Recycle Bin Flooding**: Windows Studio creates thousands of SQLite WAL/SHM files per second during training.  
  🔗 [Issue #15552 – Recycle Bin flooded with temp files](https://github.com/unslothai/unsloth/issues/15552)
- ⚠️ **SIGSEGV in pyarrow JSON reader**: Crashes when previewing 81.7MB ChatML JSONL dataset in Studio.  
  🔗 [Issue #15681 – SIGSEGV in pyarrow JSON reader](https://github.com/unslothai/unsloth/issues/15681)

#### **6. What This Means for Application Developers**  
- **Build robust fine-tuning pipelines**: Use `v0.1.912-beta` to avoid common OOM traps; ensure datasets are properly formatted (`instruction`+`output`, `text`, or conversation) to prevent silent failures.  
- **Leverage distributed training**: The new tensor/pipeline parallelism PRs unlock scalable training across multi-GPU clusters—ideal for large models like Qwen3 or LFM3.  
- **Design for long-context workflows**: Context compaction now works reliably (PR #15893), enabling persistent chat agents without manual truncation.  
- **Prepare for future hardware**: While Intel Arc and AMD support remain limited, monitor PRs like #15583 and #15444 for emerging compatibility.  
- **Avoid UI pitfalls**: Be cautious with file-heavy operations (e.g., large JSONL previews); consider using `--disable-wal` or external tools until #15552 is resolved.

> 💡 *Pro Tip*: For production-grade fine-tuning, always verify VRAM usage with `nvidia-smi` and use `UNSLOTH_TP_SIZE=2` + `UNSLOTH_FSDP2=1` for optimal scaling.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*