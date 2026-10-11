# AI Infrastructure Digest 2026-10-11

> Generated: 2026-10-11 01:12 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-11**

---

### **1. Ecosystem Overview**

The AI inference infrastructure landscape in Q4 2026 is characterized by intense specialization, rapid hardware enablement, and growing maturity in production-grade serving systems. Projects are diverging along architectural lines: high-performance engines like vLLM and SGLang focus on low-latency, scalable inference with deep GPU kernel optimization; local runtimes such as `llama.cpp` prioritize cross-platform compatibility and memory efficiency; gateways like LiteLLM drive multi-provider abstraction and cost-aware routing; while fine-tuning platforms like Unsloth emphasize usability and long-context responsiveness. A clear trend toward **hardware-specific optimizations** (Blackwell, MI355X, M5 Pro) and **distributed inference patterns** (pipeline parallelism, tiered offloading) reflects the industry’s shift from monolithic models to elastic, heterogeneous inference stacks.

---

### **2. Activity Comparison**

| Project         | Issues Open (Today) | PRs Merged (Last 24h) | Releases (Last 24h) | Notes |
|----------------|---------------------|------------------------|-----------------------|-------|
| **vLLM**       | 12                  | 8                      | 0                     | High stability pressure; critical fixes for Blackwell/ROCm |
| **SGLang**     | 9                   | 7                      | 0                     | Focus on DSpark correctness and diffusion graph compilation |
| **llama.cpp**  | 14                  | 5                      | 3 (b11552–b11550)     | Active patching of concurrency & backend crashes |
| **Ollama**     | 10                  | 3                      | 0                     | Multiple regressions in `qwen3.*` and MLX backend |
| **LiteLLM**    | 8                   | 6                      | 0                     | Backporting fixes for decisions API and telemetry |
| **Unsloth**    | 7                   | 4                      | 0                     | UI/performance issues dominate; no new releases |

> ✅ **Insight**: vLLM and SGLang lead in technical depth and proactive stability fixes; Ollama shows signs of release fatigue with unresolved regressions despite active development.

---

### **3. Model Support Race**

| New Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-27B (NVFP4)**  | ✅ (partial fix in v0.29) | ❌ (DSpark bug) | ⚠️ (speculative decoding unstable) | ❌ (crashes in v0.40.x) | — | — |
| **DeepSeek-V4.1**        | ✅ (length-aware indexer) | ✅ (DSpark + torch.compile) | ✅ (full support) | ⚠️ (works but needs `ctx_other`) | — | — |
| **MiniCPM-V 4.7**        | ❌ | ❌ | ✅ (b11552+) | ❌ | — | — |
| **Qwen3-TTS**            | ❌ | ❌ | ❌ | ❌ | — | ✅ (feature request) |
| **K2 Horizon (MoE)**     | ❌ | ❌ | ❌ | ✅ (requested) | — | — |
| **Gemma4:12b**           | ✅ | ✅ | ✅ | ⚠️ (requires `ctx_other`) | — | — |
| **Prism Bonsai 2 27B**   | ❌ | ❌ | ✅ | ❌ | — | — |

> 🏆 **Leaderboard**:  
> - **llama.cpp** leads in *model breadth* with native support for MiniCPM-V 4.7, DeepSeek-V4.1, and Prism Bonsai.  
> - **SGLang** excels in *specialized model paths*, particularly for DSpark-enabled variants.  
> - **Ollama** lags in quality control despite feature requests—critical models (`qwen3.5:4b`, `qwen3.6:35b-mlx`) remain unstable.

---

### **4. Performance Frontier**

| Optimization Focus               | vLLM                          | SGLang                        | llama.cpp                    | Ollama                 | LiteLLM                     | Unsloth                   |
|----------------------------------|-------------------------------|-------------------------------|------------------------------|------------------------|-----------------------------|---------------------------|
| **KV Cache Management**          | ✅ Partial tail preservation (PR #61019) | ✅ HiCache resilience (PR #43550) | ⚠️ Flash Attention crash (issue #29419) | ❌ Silent failure in `qwen3.5:4b` | — | — |
| **Batching & Invariance**        | ✅ Batch-invariant MoE fixes (PR #61035–61038) | ⚠️ TP>1 speculative decoding race | ❌ Prompt cache slot races (issue #30295) | ❌ Context loss in long sessions | — | — |
| **Quantization Efficiency**      | ✅ FA4 sparse MQA (Blackwell) | ✅ W4A16 compressed tensor degradation (issue #42917) | ✅ Q1_0 on Hexagon, MXFP4 MoE | ⚠️ MLX quantization slowdown (issue #18833) | — | — |
| **Distributed Serving**          | ✅ Pipeline + prefix caching | ✅ PD+HiCache, pipeline progress | ❌ Limited pipeline support | ❌ No distributed path | ✅ Cost-based routing | — |
| **Kernel-Level Optimization**    | ✅ Length-aware decode indexer (PR #61039) | ✅ Whole DiT graph compile (PR #43631) | ✅ Host op reduction (PR #61034) | ❌ Performance regression (RDNA1) | — | — |

> 🔥 **Top Focus Areas**:  
> - **vLLM** dominates in **batch-level determinism** and **kernel-level tuning**.  
> - **SGLang** is pushing boundaries in **diffusion graph compilation** and **HiCache resilience**.  
> - **llama.cpp** remains strong in **low-level memory and CPU/GPU portability**.

---

### **5. Layer Positioning**

| Project         | Primary Layer                     | Key Differentiators |
|----------------|------------------------------------|---------------------|
| **vLLM**       | **High-Performance Serving Engine** | Optimized CUDA kernels, MoE/MQA, speculative decoding, pipeline parallelism |
| **SGLang**     | **Production-Grade Inference Engine** | DSpark correctness, diffusion support, full torch.compile, HiCache |
| **llama.cpp**  | **Local Runtime & Cross-Platform Engine** | GGUF-native, RAM-backed caching, minimal dependencies, broad backend support |
| **Ollama**     | **Developer Gateway & Local CLI** | Simple UX, model lifecycle management, MLX integration, tool calling |
| **LiteLLM**    | **Multi-Provider Inference Gateway** | Unified API, cost tracking, guardrails, decision models, OpenTelemetry |
| **Unsloth**    | **Fine-Tuning & Long-Context UX Platform** | Tensor-split mode, comment trimming, UI responsiveness, Studio filter |

> 🧩 **Positioning Insight**: The ecosystem is bifurcating into **engine-centric** (vLLM/SGLang), **runtime-centric** (llama.cpp), and **gateway-centric** (LiteLLM/Ollama) layers—with Unsloth carving a niche in **agent-friendly training UX**.

---

### **6. Trend Signals**

1. **Hardware Specialization is Accelerating**:  
   - NVIDIA Blackwell (SM120/121), AMD MI355X (GFX950), and Intel Arc B70 are now key targets.  
   - vLLM and SGLang are racing to optimize for **FA4 sparse MQA**, **MXFP4**, and **DFlash2/DSpark**—indicating a shift toward **memory-efficient generation** at scale.

2. **Stability Over Feature Velocity**:  
   - Ollama and SGLang face critical regressions in `qwen3.*` and DSpark workflows—highlighting that **production readiness is now more valued than speed-to-market**.

3. **Gateways Are Becoming Security & Compliance Hubs**:  
   - LiteLLM’s focus on **decision model guardrails**, **budget enforcement**, and **OTel completeness** signals that inference gateways are evolving into **compliance layer** platforms.

4. **Agent Workloads Drive Architectural Demand**:  
   - Prefix cache miss attribution (#60044), chunked prefill hangs (#36344), and long-chat lag (#12552) point to rising demand for **deterministic, stateful agent inference**.

5. **Model Quality is No Longer Assumed**:  
   - Degradation in compressed tensors (SGLang), silent output failures (Ollama), and context corruption (llama.cpp) show that **model fidelity must be validated across engines**—no longer a black box.

---

### **Actionable Takeaways for Developers & Architects**

- ✅ **For Production Inference**: Use **vLLM v0.29.0 or earlier** for Qwen3.8-27B on Blackwell until #60174 is resolved.
- ✅ **For Agent Systems**: Avoid speculative decoding with `qwen3.8-Flash/Next` until `llama.cpp` and SGLang patches land.
- ✅ **For Multi-Provider Apps**: Upgrade to **LiteLLM v1.104.3+** for accurate billing and secure decision model guardrails.
- ✅ **For Local Deployment**: Pin **llama.cpp to b11552+** for stable prompt caching; avoid speculative decoding on RDNA1/gfx1151.
- ⚠️ **Avoid Ollama v0.40.x** for `qwen3.5:4b` or `qwen3.6:35b-mlx`—use **v0.35.0** for stability.

> 🔮 **Watchlist**:  
> - vLLM’s `VLLM_BATCH_INVARIANT=1` stability under MoE  
> - SGLang’s pipeline parallelism (Issue #11857)  
> - LiteLLM’s async callback fix (Issue #8842)  
> - Unsloth’s tensor-split performance regression (Issue #12468)

---  
*Generated: 2026-10-11 | Data Sources: GitHub issue/activity logs across projects*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-10-11**

#### **1. Today's Highlights**  
The vLLM project continues to prioritize stability and performance on emerging hardware, with critical fixes for Blackwell (SM120/121) and AMD MI355X/GFX950 platforms. Key PRs address speculative decoding correctness under pipeline parallelism, prefix cache corruption in DFlash2/DSpark + Qwen3.8-27B, and batch invariance issues affecting MoE and fused kernels. These updates are crucial for production workloads relying on high-throughput inference and deterministic behavior.

#### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, ongoing changes to `torch.compile` config hashing (see #39479) may affect users who rely on custom compilation behaviors—especially those using `--use-torch-compile`. The opt-out model is now standard, so unexpected cache misses due to omitted fields are less likely but still possible if config keys aren’t properly managed.

> 🔗 [Issue #39479 – torch.compile config hashing refactor follow-ups](https://github.com/vllm-project/vllm/issues/39479)

#### **3. New Model & Hardware Support**  
- **AMD ROCm**: Active optimization tracking for `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` (GFX950 / MI355X) and `Qwen3.8-Flash-Next-Quark-MXFP4` (PRs #57149, #59575). Performance improvements expected via kernel tuning and layout optimizations.
- **NVIDIA Blackwell (SM120/121)**: Experimental support for FA4 sparse MQA decode enabled via PR #55866, targeting improved memory efficiency during long-context generation.
- **Intel Arc B70 (Battlemage)**: Ongoing investigation into engine hangs under concurrent load (issue #54698), though no official support yet.

> 🔗 [ROCm Optimization Tracker – Qwen3.8-2.4T-A95B](https://github.com/vllm-project/vllm/issues/57149)  
> 🔗 [Blackwell FA4 Sparse MQA Enablement](https://github.com/vllm-project/vllm/pull/55866)

#### **4. Performance & Optimization**  
- **DeepSeek-V4.1**: PR #61039 introduces length-aware candidate block selection in the decode indexer, reducing unnecessary computation across full buffer widths—critical for CUDA graph efficiency on large `max_model_len`.
- **GDN Layer**: PR #61034 cuts redundant host-side PyTorch op calls in eager prefill paths of mixed steps, improving throughput without altering numerics.
- **KV Cache Management**: PR #61019 ensures partial tails are preserved during offloading when using EAGLE/MTP draft groups—prevents recomputation and improves real-world latency.
- **Batch Invariance**: Multiple PRs (#61035, #61036, #61037, #61038) fix failures under `VLLM_BATCH_INVARIANT=1`, particularly for MiniMax-M2.5 and DeepSeek models, restoring determinism.

> 🔗 [PR #61039 – Length-aware decode indexer](https://github.com/vllm-project/vllm/pull/61039)  
> 🔗 [PR #61034 – Cut host ops in GDN prefill path](https://github.com/vllm-project/vllm/pull/61034)

#### **5. Stability & Regressions**  
Top severity bugs reported today:

1. **Prefix Cache Corruption (DFlash2/DSpark + Qwen3.8-27B NVFP4)**  
   - **Impact**: Corrupt output after cache hit on RTX PRO 5000 Blackwell (sm_120). Reproducible in v0.30/0.31; fixed in v0.29.  
   - **Fix Status**: Under investigation. No PR yet.  
   > 🔗 [Issue #60174](https://github.com/vllm-project/vllm/issues/60174)

2. **Speculative Decoding + Prefix Caching Breakage (Hybrid GDN Models)**  
   - **Impact**: Silent disabling of prefix cache hits when using MTP or DFlash with hybrid GDN models on nightly builds. Worked fine in v0.24.0.  
   - **Fix Status**: PR #54360 submitted but not merged.  
   > 🔗 [Issue #54360](https://github.com/vllm-project/vllm/issues/54360)

3. **NaN Output in DeepSeek-V4.1 with CUDA Graphs**  
   - **Impact**: Model produces NaN outputs due to dummy capture batches poisoning null KV blocks. Affects SM120/121.  
   - **Fix Status**: Issue #57156 filed; no PR yet.  
   > 🔗 [Issue #57156](https://github.com/vllm-project/vllm/issues/57156)

4. **Tiered Offloading Misbehavior**  
   - **Impact**: Incorrect memory allocation or eviction logic leading to out-of-memory conditions or degraded performance.  
   > 🔗 [Issue #58804](https://github.com/vllm-project/vllm/issues/58804)

#### **6. What This Means for Application Developers**  
- **Use v0.29.0 or earlier** for stable prefix caching and speculative decoding with Qwen3.8-27B on Blackwell GPUs until #60174 is resolved.
- **Avoid `--mamba-block-size`** if you’re using `mamba_cache_mode="all"`—this flag has no effect post-removal of that mode (see #60838).
- **Enable `VLLM_BATCH_INVARIANT=1` only after testing**—it exposes latent kernel-level issues in MoE and fused kernels (e.g., MiniMax-M2.5, DeepSeek-V4.1); use with caution in production.
- **For RAG/agent workloads**, monitor prefix cache miss attribution (#60044) and pooling request behavior (#60947)—future versions will allow granular control over cache reuse during embedding extraction.

> ✅ **Actionable Tip**: If serving multimodal models like Qwen3-VL, ensure your `fps` and `num_frames` settings are preserved across repeated requests (fixed in #55203).

---  
*Data source: [vllm-project/vllm GitHub](https://github.com/vllm-project/vllm)*  
*Digest generated: 2026-10-11*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-11**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to mature around high-performance, production-grade inference with a strong focus on DSpark correctness and diffusion serving stability. Key developments include critical fixes for CUDA Graph race conditions in `DeepSeek-V4-Pro-DSpark` (PRs #31023, #33356), and new PRs enabling full `torch.compile` support for diffusion models like Qwen-Image-2.1 and Cosmos3, aiming to close the performance gap with eager mode. Additionally, proactive work on pipeline parallelism and HiCache resilience signals long-term scalability ambitions.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, ongoing fixes to **DSpark’s compact ragged target-verify CUDA Graph path** (see Issue #31023) may necessitate re-validation of speculative decoding workflows when upgrading to future v0.5.17+. Users relying on TP>1 with `DeepSeek-V4-Pro-DSpark` should monitor for regressions until these issues are resolved in patch releases.

---

### **3. New Model & Hardware Support**  
- ✅ **AMD ROCm Support**: A new opt-in decode path for **DeepSeek-V4.1-Flash on gfx950 (MI355X)** is now available via `SGLANG_ROCM_MONO_DECODE=1`. Requires TP=2/4 without DP/EP. [PR #43497](https://github.com/sgl-project/sglang/pull/43497)
- ✅ **Moore Threads (MUSA)**: Active roadmap for first-class MUSA GPU support continues ([Issue #16565](https://github.com/sgl-project/sglang/issues/16565)), though no implementation yet.
- ✅ **Diffusion Models**: Full support for **SANA-Video 2.0 breakable CUDA graphs** is being enabled via PR #41501, improving flexibility and memory reuse.

---

### **4. Performance & Optimization**  
- 🔧 **`torch.compile` Improvements**: Multiple PRs (e.g., #43631, #43586, #43577) aim to preserve entire DiT graphs during compilation, addressing significant slowdowns observed in `Qwen-Image-2.1`, `Ulysses`, and `Cosmos3` — where compile times were up to 1.43s vs. eager’s 0.93s on 2xGB300. The goal is to eliminate graph breaks from attention layers.
- 📈 **HiCache & Prefetching**: PR #43550 ensures storage workers survive backend exceptions, preventing silent thread death; PR #43512 improves radix-tree LRU consistency by throttling prefix refresh based on forward count, not wall time.
- ⚙️ **Memory Efficiency**: PR #43562 folds decode restore outcome into MIN-reduced KV poll, reducing unnecessary communication overhead in PD+HiCache setups.

---

### **5. Stability & Regressions**  
Critical correctness and stability issues reported today:
1. **CUDA Graph Memory Access Errors** (Issue #31023, #33356): Timing-sensitive illegal memory access in `DeepSeek-V4-Pro-DSpark`’s compact ragged target-verify path on TP8. *Fix PRs exist but not merged yet*.  
   - [Issue #31023](https://github.com/sgl-project/sglang/issues/31023) | [PR #31195](https://github.com/sgl-project/sglang/pull/31195)
2. **Deterministic Inference Hangs** (Issue #36344): Chunked prefill smaller than alignment causes hangs. *Reproduced on H200; fix pending.*
3. **VMM Transport Slice Leak** (Issue #43402): Aborted multimodal requests under `--mm-feature-transport cuda_vmm` fail to free VMM slices, leading to gradual memory exhaustion. *Impact: High for long-running servers.*
4. **Compressed Tensor Quality Degradation** (Issue #42917): Qwen3.8-27B W4A16 serves with degraded quality (PPL 9.98 vs vLLM’s 6.05). Likely due to incorrect handling in `CompressedTensorsConfig` path. *Confirmed on v0.5.19–0.5.21.*

---

### **6. What This Means for Application Developers**  
- If you’re using **speculative decoding with DeepSeek-V4-Pro-DSpark on TP≥2**, avoid unpatched versions (v0.5.16+) due to timing-sensitive crashes. Monitor PRs #31023 and #33356 for fixes.
- For **diffusion workloads**, expect better performance and reliability with `--enable-torch-compile` as new PRs lock in whole-graph compilation. However, disable it temporarily if encountering hangs (e.g., Z-Image).
- **Multi-modal applications** must account for the `cuda_vmm` transport leak: use shorter timeouts or implement client-side request cancellation logic.
- **Model developers** deploying compressed tensors (W4A16, etc.) should validate output quality against vLLM benchmarks — current results show measurable degradation.
- Consider enabling `SGLANG_ROCM_MONO_DECODE=1` for **DeepSeek-V4.1-Flash on MI355X** if your workload fits the TP-only constraints.

👉 *Stay tuned: Pipeline parallelism (Issue #11857) and PD disaggregation (Issue #21703) are progressing toward production readiness for ultra-long context inference.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

---

### **1. Today's Highlights**  
The `llama.cpp` project has seen significant progress in speculative decoding stability and model support, particularly with the addition of **MiniCPM-V 4.7** and improved handling of busy inference slots in `llama-server`. Critical fixes address race conditions in RAM-backed prompt caching and GPU kernel crashes across Vulkan, SYCL, and HIP backends—key for production reliability.

---

### **2. Releases & Breaking Changes**  
- **`b11552`**: Fixed a race condition where a busy slot was incorrectly updated during prompt cache lookup before deferral (`#30295`, [PR #30295](https://github.com/ggml-org/llama.cpp/pull/30295)). This prevents data corruption when multiple requests target the same slot under concurrent load.
- **`b11551`**: Added full runtime support for **MiniCPM-V 4.7**, including MoE architecture and MROPE time embedding handling (`#29416`, [PR #29416](https://github.com/ggml-org/llama.cpp/pull/29416)).
- **`b11550`**: Disabled z17 target on s390x for unsupported compilers to avoid build failures (`#30297`).

> ⚠️ **Migration Note**: Users upgrading from pre-b11552 may experience unexpected behavior in high-concurrency scenarios due to slot state inconsistencies. Apply patch or upgrade immediately.

---

### **3. New Model & Hardware Support**  
- ✅ **MiniCPM-V 4.7** – Full support added via `mini-cpm-v` architecture (MoE, MROPE time).
- ✅ **DeepSeek V4.1** – Added as `deepseek41` model type with conversion, graph, and chat template (`#28696`, [PR #28696](https://github.com/ggml-org/llama.cpp/pull/28696)).
- ✅ **Prism Bonsai 2 27B** – Runtime support now available (`#29600`, [PR #29600](https://github.com/ggml-org/llama.cpp/pull/29600)).
- ✅ **Q1_0 quantization** – Added native support on Hexagon backend (`#30122`, [PR #30122](https://github.com/ggml-org/llama.cpp/pull/30122)).

> 🔧 **Backends**: OpenCL gains new bin kernels for Q4_K/Q6_K; SYCL accelerates MXFP4 MoE via arithmetic decoding and weight reordering (`#29809`, [PR #29809](https://github.com/ggml-org/llama.cpp/pull/29809)).

---

### **4. Performance & Optimization**  
- **OpenCL**: Improved Flash Attention performance with `dk=512` support for Gemma-4 (GQA=4/8), avoiding CPU fallbacks (`#30266`, [PR #30266](https://github.com/ggml-org/llama.cpp/pull/30266)).
- **Memory Efficiency**: PR #24156 (`--reclaim-mmap-source`) reduces RSS by up to **37%** on large models like Qwen3-30B-A3B (saving ~13 GiB) — Linux-only, disabled under `--mlock`.
- **Pipeline Parallelism**: MoE experts can now reside in host RAM while enabling pipeline parallelism (`#29963`, [PR #29963](https://github.com/ggml-org/llama.cpp/pull/29963)), enabling larger MoE models on constrained VRAM systems.

---

### **5. Stability & Regressions**  
| Issue | Severity | Description | Fix Status |
|------|----------|-------------|------------|
| [#30295](https://github.com/ggml-org/llama.cpp/issues/30295) | High | Prompt cache update races on busy slots → data corruption | ✅ Patch merged (`b11552`) |
| [#30039](https://github.com/ggml-org/llama.cpp/issues/30039) | High | ~45% prompt processing regression on RDNA1 (gfx1010) between `b10455` and `b11429` | ❌ In progress |
| [#29419](https://github.com/ggml-org/llama.cpp/issues/29419) | High | Flash-Attention crash in Gemma4-Assistant: query head dim mismatch | ❌ No fix yet |
| [#30175](https://github.com/ggml-org/llama.cpp/issues/30175) | Medium | Nondeterministic FA prefill on ROCm/HIP since `b10905` | ❌ Unresolved |
| [#27556](https://github.com/ggml-org/llama.cpp/issues/27556) | High | HIP silently corrupts Qwen3.5-27B context (oldest part lost) | ❌ Known issue on gfx1151 |

> 🛠️ **Note**: Multiple Vulkan/SYCL/ROCm crashes remain unresolved. Users on RDNA1 (RX 5700 XT), gfx1151 (Strix Halo), or using speculative decoding with Qwen3.8/Flash should avoid recent builds until patches land.

---

### **6. What This Means for Application Developers**  
- ✅ **Use `b11552+` for production servers**: The slot pinning fix ensures stable concurrent inference with RAM-backed prompt caches.
- 📈 **Leverage new models**: MiniCPM-V 4.7 and DeepSeek V4.1 are now viable for local deployment with full speculative decoding support.
- ⚠️ **Avoid speculative decoding with Qwen3.8-Flash/Next** until #29419 and #30175 are resolved—risk of crashes or incorrect output.
- 💡 **Optimize memory usage**: Enable `--reclaim-mmap-source` (Linux only) for large models to reduce RSS by up to 37%.
- 🔍 **Monitor CI regressions**: If deploying on RDNA1 or gfx1151, test against `b11429` or earlier; newer builds may degrade performance significantly.

> 👉 **Best Practice**: Pin your `llama.cpp` version to `b11552` or later for stability, especially in multi-user or agent-based deployments. Monitor [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues) for ongoing fixes related to speculative decoding and GPU backends.

---  
*Digest generated: 2026-10-11 | Source: [ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-11**

---

### **1. Today's Highlights**  
The Ollama ecosystem is undergoing a critical phase of stability and architectural refinement, with multiple high-severity bugs reported in `qwen3.*` models (especially `qwen3.5:4b`, `qwen3.6:35b-mlx`) causing silent failures or crashes during inference. A regression in MLX backend performance and several persistent issues around model loading, tool calling, and device detection highlight ongoing challenges in the 0.40.x release cycle. Meanwhile, active PRs are addressing core rendering logic and streaming compatibility.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24h.*  
However, **Ollama v0.40.2** is currently under scrutiny due to multiple regressions:
- `ollama list` returns empty on Windows when model path is an NTFS mount point ([#18921](https://github.com/ollama/ollama/issues/18921))
- Duplicate model entries and bogus `llamacpp:<sha>` tags post-local compat GGUF migration ([#18830](https://github.com/ollama/ollama/issues/18830))
- `qwen3.5:4b` returning only `thinking` without content in long conversations ([#18916](https://github.com/ollama/ollama/issues/18916))

> ⚠️ **Migration Note**: The "local compat GGUF migration" introduced in v0.40.0 may cause inconsistent state—users should monitor for duplicates or missing models.

---

### **3. New Model & Hardware Support**  
- **K2 Horizon models** (architecture `"k2-horizon"`) requested for support: 0.9B–36B MoE variants from MBZUAI IFM ([#18698](https://github.com/ollama/ollama/issues/18698))
- **KailA architecture** support proposed for `llama.cpp` compat layer; current loader fails on `general.architecture = kail` ([#18922](https://github.com/ollama/ollama/issues/18922))
- **Gemma4:12b** requires `ctx_other` to be set explicitly — a breaking change from `gemma4:latest` behavior ([#18898](https://github.com/ollama/ollama/issues/18898))
- **Decision models** now supported via `/v1/systemone` after upstream `llama.cpp` update in PR [#18917](https://github.com/ollama/ollama/pull/18917)

---

### **4. Performance & Optimization**  
- **MLX backend slowdown**: Quantized K2 models (e.g., `mxfp8`) are slower than `bf16` at prefill on M5 Pro Macs ([#18833](https://github.com/ollama/ollama/issues/18833))
- **Streaming efficiency**: PRs [#18914](https://github.com/ollama/ollama/pull/18914) and [#18911](https://github.com/ollama/ollama/pull/18911) align OpenAI-compatible `/v1/completions` and history tool call parsing with spec-compliant wire formats, improving client interoperability.
- **Device probe fallback**: PR [#18923](https://github.com/ollama/ollama/pull/18923) adds fallback to native GGML probe when `llama-server --list-devices` outputs no devices — mitigates GPU detection failure edge cases.

---

### **5. Stability & Regressions**  
| Severity | Issue | Affected Models / Backends | Fix PR? |
|---------|------|-----------------------------|--------|
| Critical | `qwen3.6:35b-mlx` crashes on MLX runner in v0.40.x (worked in v0.35.0) | MLX, `qwen3.6:35b-mlx` | ❌ No fix yet ([#18856](https://github.com/ollama/ollama/issues/18856)) |
| High | `qwen3.5:4b` returns only `thinking` field with no output in long sessions | `qwen3.5:4b`, `options.num_ctx:65536` | ❌ No fix yet ([#18916](https://github.com/ollama/ollama/issues/18916)) |
| High | `rnj-1` fails with `GGML_ASSERT(hparams.is_swa_any()) failed` | GGUF, `rnj-1` | ❌ No fix yet ([#18924](https://github.com/ollama/ollama/issues/18924)) |
| Medium | `gemma4:12b` requires `ctx_other` to be set (fails otherwise) | `gemma4:12b` | ✅ Partial fix in PR [#18918](https://github.com/ollama/ollama/pull/18918) (renderer) |
| Medium | `clef-flash` fails on Windows with `llama-server process has terminated` | Windows, `clef-flash` | ❌ No fix yet ([#18858](https://github.com/ollama/ollama/issues/18858)) |

> 🔥 **Top Concern**: Multiple regressions in `qwen3.*` and MLX backends indicate instability in the latest release train.

---

### **6. What This Means for Application Developers**  
- **Avoid `qwen3.5:4b` and `qwen3.6:35b-mlx`** in production until [#18916](https://github.com/ollama/ollama/issues/18916) and [#18856](https://github.com/ollama/ollama/issues/18856) are resolved — expect silent or incomplete responses.
- **Use `:latest` tag sparingly** — it’s now omitted from display (`ollama list`, `/api/tags`) but still valid input ([#18915](https://github.com/ollama/ollama/pull/18915)).
- **Validate model paths on Windows** — if using NTFS mount points, `ollama list` may return empty results ([#18921](https://github.com/ollama/ollama/issues/18921)).
- **Tool calling workflows** must handle partial tags and empty `arguments` — PRs [#18913](https://github.com/ollama/ollama/pull/18913) and [#18759](https://github.com/ollama/ollama/pull/18759) improve robustness.
- **For MLX users**, prefer `bf16` over quantized formats for decision models until [#18833](https://github.com/ollama/ollama/issues/18833) is addressed.

> 📌 **Actionable**: Pin to **v0.35.0** if stability is critical; track PRs and issue threads closely for v0.40.x fixes.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-10-11

---

### **1. Today's Highlights**

LiteLLM continues to expand its support for next-generation AI inference patterns, with major updates focused on **Decisions API billing**, **guardrail enhancements**, and **multi-provider Messages API integration**. Critical fixes address long-standing issues in OpenTelemetry logging, async completion callback execution, and model routing under cost-based strategies—ensuring more reliable telemetry and stable proxy behavior at scale.

---

### **2. Releases & Breaking Changes**

No new releases were published in the last 24 hours. However, three backport PRs are underway to stabilize production-ready versions:

- **PR #45906** (backport to `stable/1.104.x`) ensures decisions and Jev follow-ups are available in the upcoming 1.104.3 patch.
- **PR #45905** (backport to `rc/1.105.0`) prepares the release candidate with full decisions provider coverage.
- **PR #45900** backports decision model guardrails to `stable/1.104.x`, enabling security enforcement for advanced models like Jev.

> 🔗 [PR #45906](https://github.com/BerriAI/litellm/pull/45906) | [PR #45905](https://github.com/BerriAI/litellm/pull/45905) | [PR #45900](https://github.com/BerriAI/litellm/pull/45900)

---

### **3. New Model & Hardware Support**

New native API integrations are now landing directly into main:

- **MiniMax Messages API**: Full support added via `PR #45896`, including tool payloads, cache hints, and authentication preservation.
- **Tencent Messages API**: Added in `PR #45899`, with token limit validation, credential override handling, and structured reasoning translation.
- **Microsoft Decision 1**: Feature request `#45807` proposes adding support for this Azure-hosted Foundry model.

> 🔗 [PR #45896](https://github.com/BerriAI/litellm/pull/45896) | [PR #45899](https://github.com/BerriAI/litellm/pull/45899) | [Issue #45807](https://github.com/BerriAI/litellm/issues/45807)

---

### **4. Performance & Optimization**

Performance improvements focus on **routing efficiency** and **telemetry accuracy**:

- **Cost-based routing stability**: Fixing `RouterRateLimitError` in sync methods (`completion()`, `embedding()`) when using `cost-based-routing` — critical for high-throughput agent systems.
- **Token usage aggregation**: Resolving inconsistencies in spend reporting during response cache hits (`#39057`), ensuring accurate cost accounting across repeated queries.
- **Batch processing reliability**: Fixes for Vertex AI batch creation failures (`#45671`) and xAI batch result file naming (`#45559`) improve throughput consistency for large-scale inference jobs.

> 🔗 [Issue #45718](https://github.com/BerriAI/litellm/issues/45718) | [Issue #39057](https://github.com/BerriAI/litellm/issues/39057) | [PR #45559](https://github.com/BerriAI/litellm/pull/45559)

---

### **5. Stability & Regressions**

Critical stability issues reported today include:

1. **Async Completion Callback Failure** (`#8842`)  
   - Async `.acompletion()` calls do not trigger `CustomLogger` hooks, breaking audit trails and observability.  
   > 🔗 [Issue #8842](https://github.com/BerriAI/litellm/issues/8842) – *No fix PR yet*

2. **OpenTelemetry Span Incompleteness** (`#45736`)  
   - Streaming calls produce no spans if client stops reading early, causing incomplete trace data.  
   > 🔗 [Issue #45736](https://github.com/BerriAI/litellm/issues/45736) – *No fix PR yet*

3. **False Budget Exceeded Errors** (`#36926`)  
   - Sustained load triggers `429 budget_exceeded` despite sufficient funds due to race conditions in cost tracking. Self-heals in ~2 minutes.  
   > 🔗 [Issue #36926](https://github.com/BerriAI/litellm/issues/36926)

4. **Tool Call Data Loss in OTel Logs** (`#45796`)  
   - Tool-call responses appear as empty messages with `"finish_reason": "tool_calls"`, losing function name, ID, and arguments.  
   > 🔗 [Issue #45796](https://github.com/BerriAI/litellm/issues/45796)

---

### **6. What This Means for Application Developers**

- **Use caution with `cost-based-routing`** — it can break synchronous APIs even with healthy deployments. Consider fallback strategies or delay adoption until `#45718` is resolved.
- **Ensure OpenTelemetry clients read all streaming chunks** to avoid missing spans — implement explicit stream consumption or use middleware to enforce completeness.
- **Upgrade to v1.104.3+** once released to gain secure guardrail enforcement for decision models and improved Decisions API billing accuracy.
- **Avoid `openai>=3.0.0` dependencies** unless you're pinning a fork: LiteLLM still restricts `openai<3.0.0` (see `#40317`, `#37907`). Plan for a dependency update window post-1.105.
- **Verify your model routing logic** when using pass-through endpoints — `#45787` shows that URLs containing `predict` may be misrouted to Vertex AI handlers.

> 📌 Pro Tip: Monitor `spend_logs` closely when caching is enabled — zero spend on cache hits is expected, but ensure downstream analytics tools don’t conflate this with actual cost underreporting.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-11**

---

### **1. Today's Highlights**  
Unsloth continues to strengthen its multi-GPU and long-context inference capabilities, with critical fixes for tensor-split mode performance regressions (up to 2.9x slower) and improved handling of left-padded sequences in attention. A new `Recommended` model filter in Unsloth Studio enhances UX by curating high-quality GGUF and FP8 models, while several PRs optimize memory usage and UI responsiveness in long chats.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API changes were released.

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen3-TTS**: Feature request (#3951) highlights growing demand for fine-tuning support in audio-capable Qwen models.  
- ✅ **AMD ROCm 7.14/7.2**: Ongoing work addresses training failures on dual R9700 systems (#10657), indicating active ROCm backend improvements.  
- ✅ **Intel GPU Pinning**: Documentation request (#12836) signals need for better Intel GPU support in Unsloth Studio install flow.  
- ⚠️ **Qwen3.8-Flash-Next-GGUF**: Still unsupported due to unrecognized architecture (`qwen4exp`) in desktop app (#10015).

---

### **4. Performance & Optimization**  
- 🔥 **Tensor Split Decode Regressions**: Users report up to **2.9x slower decode speeds** since `b10715-mix-86bd2d3`, specifically when using `--split-mode tensor` on dual RTX 5070 Ti setups (#12468).  
- 📈 **Long Chat Responsiveness**: PR #13255 targets scroll and hover lag in long conversations with large responses, which can make the UI effectively unusable (#12552).  
- 💡 **Memory Efficiency**: PRs #13256 (honor padding masks) and #13254 (skip fused LoRA kernels during DoRA) aim to prevent silent accuracy loss and improve training correctness.  
- 🧱 **Comment Trimming**: Multiple PRs (#12966–#12969) reduce codebase comment density by over 60%, improving maintainability without functional impact.

---

### **5. Stability & Regressions**  
| Issue | Severity | Fix Status | Link |
|------|----------|------------|------|
| `RuntimeError: illegal memory access` on RTX PRO 6000 (96GB) | Critical | Closed | [Issue #3921](https://github.com/unslothai/unsloth/issues/3921) |
| CPU spike (~95%) at idle in v0.1.903-beta (Windows + AMD R9700) | High | Closed | [Issue #12942](https://github.com/unslothai/unsloth/issues/12942) |
| Long GGUF chat blocks queued generations despite free slots | Medium | Open | [Issue #10671](https://github.com/unslothai/unsloth/issues/10671) |
| Model weights loaded into system RAM instead of VRAM (AMD Strix Halo) | Medium | Closed | [Issue #7449](https://github.com/unslothai/unsloth/issues/7449) |
| OOM on GPT-OSS-120B (183GB VRAM, B200) despite docs claiming fit | Critical | Closed | [Issue #3411](https://github.com/unslothai/unsloth/issues/3411) |

> Note: Several stability issues are resolved via closed PRs, but regression tracking remains high — especially around multi-GPU and AMD/ROCm workflows.

---

### **6. What This Means for Application Developers**  
- **Avoid recent builds if using tensor-split mode on dual GPUs** — performance degradation is severe; consider pinning to `b10687-mix-67dfc8b` or earlier until fix lands.  
- **Verify model loading behavior on AMD systems** — ensure VRAM utilization isn’t being subverted by system RAM fallback (see #7449).  
- **Use `--split-mode layer` explicitly** when doing manual GPU placement (#10770) to avoid ambiguous defaults.  
- **Monitor long-context chat state** — UI lag and stuck queues are real risks; implement client-side buffering or pagination for high-throughput agents.  
- **Ensure proper tool-call configuration even with external models** — settings are now exposed via PR #13251, so developers can enforce budgets regardless of model origin.

> 🔗 *For production use: Audit model load paths, disable auto-unload for long sessions, and validate context length handling via PR #13223.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*