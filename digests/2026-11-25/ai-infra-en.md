# AI Infrastructure Digest 2026-11-25

> Generated: 2026-11-25 05:36 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-25**

---

### **1. Ecosystem Overview**  
The AI inference and serving landscape is rapidly maturing into a layered, hardware-aware stack with strong specialization across projects. vLLM and SGLang lead in high-performance, scalable inference engines targeting large-scale agentic workloads, while llama.cpp and Ollama dominate lightweight, portable, and edge-friendly deployments. LiteLLM acts as the critical gateway layer enabling multi-provider abstraction and cost-aware routing, and Unsloth is emerging as a key player in efficient fine-tuning and model export. The convergence of quantization (Humming, GGUF), distributed serving (speculative decoding, PD disaggregation), and cross-architecture support (ROCm, XPU, NPU) reflects a shift toward unified, production-grade infrastructure that balances performance, portability, and developer experience.

---

### **2. Activity Comparison**

| Project       | Issues Open | PRs Merged (Last 24h) | Releases (Last 24h) | Release Status |
|---------------|-------------|------------------------|----------------------|----------------|
| **vLLM**      | 1,487       | 12                     | 0                    | No new release; Marlin deprecation in progress |
| **SGLang**    | 1,324       | 9                      | 0                    | v1.0 tracking; stability focus |
| **llama.cpp** | 1,145       | 8                      | 0                    | No release; ARM SVE & Metal optimizations active |
| **Ollama**    | 1,623       | 5                      | 0                    | Critical memory regressions in v0.40.17 |
| **LiteLLM**   | 943         | 10                     | 2 (RC + LTS)         | `v1.112.0-rc.1` and `v1.108.17` released |
| **Unsloth**   | 1,089       | 7                      | 1 (beta)             | `v0.1.924-beta` focused on Inkling 2 Mini |

> ✅ *Insight*: vLLM and Ollama are most active in issue volume, indicating high user engagement and stability challenges. LiteLLM leads in release velocity with two significant updates, reflecting its role as a mission-critical proxy layer.

---

### **3. Model Support Race**

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next**        | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| **Qwen4-Max**                 | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| **OmniLingual ASR**           | ✅ (exp.) | ❌    | ❌        | ❌     | ❌      | ❌      |
| **Inkling-2-Mini (GGUF)**     | ❌   | ❌     | ✅        | ✅ (fails) | ❌     | ✅ (fine-tune) |
| **Tencent Hy4 Flash (220B)**  | ❌   | ❌     | ✅        | ❌     | ✅      | ❌      |
| **Ascend NPU (EPLB migration)**| ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |
| **AMD ROCm 7.13+ (RX 7900 GRE)**| ✅ (CI/opts) | ✅ | ❌ (OOM) | ❌ (OOM) | ❌ | ⚠️ (partial) |
| **Intel Arc Pro B70 (BMG G31)**| ❌ | ❌     | ⚠️ (nondet) | ❌ | ❌ | ❌ |

> 🏆 **Leader**: **vLLM** and **llama.cpp** are leading in cutting-edge model and hardware support, particularly for Qwen series and ARM SVE. **Unsloth** is ahead in fine-tuning support for **Inkling 2 Mini**, while **LiteLLM** leads in cloud provider integration (e.g., GMI Cloud, Vertex AI).

---

### **4. Performance Frontier**

| Focus Area                  | Primary Projects                              | Key Innovations                                                                 |
|----------------------------|-----------------------------------------------|---------------------------------------------------------------------------------|
| **KV Cache Management**    | vLLM, SGLang                                  | Programmable policies, session-aware hints, composable retention, HiCache fixes |
| **Speculative Decoding**   | vLLM, SGLang, llama.cpp                       | DEP2/4/8 fused expert routing, DSpark correctness, top-k merge optimization     |
| **Quantization & Kernels** | vLLM (Humming), llama.cpp (SVE), Unsloth    | Humming-based unified kernel, SVE dot-product fusion, LoRA/QLoRA speedups       |
| **Distributed Serving**    | vLLM, SGLang                                  | Prefill-Decode Disaggregation (PD), TP > 1 speculative decoding, supernode sharing |
| **Memory Efficiency**      | vLLM, SGLang, llama.cpp, Ollama               | GPU staging during load, RadixCache skip, chunked GDN replay, MLX memory leak fix |

> 🔥 **Hotspot**: **vLLM** and **SGLang** are converging on advanced KV cache orchestration for agentic systems, while **llama.cpp** and **Unsloth** are pushing boundaries in low-level kernel optimization (SVE, MoE fusion).

---

### **5. Layer Positioning**

| Project       | Layer Position                          | Core Differentiator                                               |
|---------------|-----------------------------------------|--------------------------------------------------------------------|
| **vLLM**      | Inference Engine (GPU-native)           | High-throughput, low-latency serving with advanced scheduling     |
| **SGLang**    | Inference Engine + Agentic Orchestration | PD Disaggregation, session-aware KV, hierarchical cache control   |
| **llama.cpp** | Local Runtime / Edge Inference          | Portable, CPU/GPU/NPU-optimized, minimal dependencies             |
| **Ollama**    | Local Runtime + Developer UX            | One-command deployment, GUI-first, but stability issues at scale   |
| **LiteLLM**   | LLM Gateway / Proxy                     | Multi-provider routing, cost tracking, guardrails, MCP toolset support |
| **Unsloth**   | Fine-Tuning Framework + Exporter        | Fast LoRA/QLoRA training, GGUF export, multi-GPU parallelism       |

> 📊 **Strategic View**: The ecosystem is bifurcating: **engineers** use vLLM/SGLang for scale, **developers** rely on Ollama/llama.cpp for simplicity, and **platform teams** depend on LiteLLM for abstraction and cost control.

---

### **6. Trend Signals**

1. **Agentic Workloads Are Driving Infrastructure Evolution**:  
   - vLLM’s RFCs on programmable KV cache and SGLang’s session-aware scheduling indicate that **stateful, long-running agent systems** are now a primary design constraint—shifting focus from single-token throughput to context retention and reuse.

2. **Hardware Diversity Is Accelerating**:  
   - AMD ROCm, Intel XPU, Ascend NPU, and Apple Silicon are no longer niche. Projects like vLLM, SGLang, and llama.cpp are actively optimizing for these backends—signaling a move toward **cross-architecture portability**.

3. **Quantization Is Unifying Under New Backends**:  
   - The planned deprecation of Marlin in favor of **Humming** in vLLM marks a strategic pivot toward **unified, backend-agnostic quantization**—a sign that fragmentation is being reduced in favor of consistency.

4. **Stability Is Now a Competitive Moat**:  
   - Despite innovation, **Ollama’s critical memory leaks**, **SGLang’s flaky CI**, and **llama.cpp’s nondeterministic output** show that reliability is not keeping pace with feature development. This will pressure teams to prioritize robustness over novelty.

5. **Fine-Tuning Is Becoming a Deployment Pipeline**:  
   - Unsloth’s ability to train and export models directly to GGUF highlights a trend: **fine-tuning is no longer isolated—it’s part of the full lifecycle from training to inference**.

> ✅ **Actionable Insight for Developers**:  
> - Prioritize **vLLM or SGLang** for high-throughput agentic systems requiring dynamic state management.  
> - Use **llama.cpp** for ARM or edge deployments where portability is key.  
> - Choose **LiteLLM** when building multi-provider agents with strict cost controls.  
> - Avoid **Ollama v0.40.17** until memory fixes land—especially on Apple Silicon.  
> - Monitor **Humming migration** in vLLM and **Unsloth’s CUDA runtime bugs** for production readiness.

---  
*Generated: 2026-11-25 | For technical decision-makers and infrastructure engineers*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-11-25**

---

#### **1. Today's Highlights**  
The vLLM project is accelerating its shift toward next-generation inference infrastructure with major progress on **Humming-based quantization** for NVIDIA Hopper and Blackwell architectures, marking a strategic move away from legacy Marlin kernels. Significant momentum is also building in **agentic serving**, with new RFCs introducing programmable KV cache policies and session-aware hints to enable smarter state management across multi-agent workflows. On the hardware front, **AMD ROCm support** is being strengthened through expanded CI testing and targeted optimizations.

---

#### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, ongoing work in [Issue #65560](https://github.com/vllm-project/vllm/issues/65560) signals a potential future breaking change: **replacement of Marlin with Humming as the default quantized kernel across all NVIDIA architectures (SM80+)**, including Hopper and Blackwell. This will require users relying on Marlin-specific behavior (e.g., custom tuning or format assumptions) to adapt their deployment pipelines.

---

#### **3. New Model & Hardware Support**  
- **Model Support**:  
  - Added support for **Qwen3.8-Flash-Next** and **Qwen4-Max** via [Issue #67922](https://github.com/vllm-project/vllm/issues/67922), which includes large embedding tables (up to 328B params) requiring disaggregated embedding serving via PLE connectors.  
  - Experimental support for **OmniLingual ASR** (1600+ languages) via [Issue #28509](https://github.com/vllm-project/vllm/issues/28509), addressing inefficient official inference pipelines.  

- **Hardware & Backend**:  
  - **ROCm (AMD)**: Enhanced CI testing via [Issue #66699](https://github.com/vllm-project/vllm/issues/66699) introduces weekly Kimi Vendor Verifier (KVV) regression checks. PRs like [#69581](https://github.com/vllm-project/vllm/pull/69581) re-enable XPU KV connector tests.  
  - **Intel GPU (XPU)**: PR [#67891](https://github.com/vllm-project/vllm/pull/67891) optimizes FP8 linear kernels by preferring W8A8 on Xe3p and W8A16 elsewhere.  
  - **NVIDIA**: Expanded support for **Blackwell (SM120)** with NVFP4 validation across model families ([Issue #66101](https://github.com/vllm-project/vllm/issues/66101)) and B200/B300-specific GEMM plans for Qwen3 series ([PR #69736](https://github.com/vllm-project/vllm/pull/69736)).

---

#### **4. Performance & Optimization**  
- **Speculative Decoding**: PR [#68366](https://github.com/vllm-project/vllm/pull/68366) introduces DEP2/4/8 optimized fused expert communication for **DeepSeek-V4.1-Flash on B300**, reducing inter-node overhead via direct routing into dispatch buffers.  
- **Memory Efficiency**: PR [#69803](https://github.com/vllm-project/vllm/pull/69803) enables **GPU staging during tensor-parallel model loading**, bypassing CPU memory bottlenecks—now on by default for CUDA.  
- **Kernel-Level Optimizations**:  
  - PR [#69736](https://github.com/vllm-project/vllm/pull/69736) adds **skinny-GEMM plans for SM100/SM103 (B200/B300)** on Qwen3-family decode projections, improving low-token throughput.  
  - PR [#69787](https://github.com/vllm-project/vllm/pull/69787) upgrades FlashKDA to `a32181e`, pruning 132 variants and improving codegen efficiency.  
- **KV Cache Management**: RFCs such as [Issue #66782](https://github.com/vllm-project/vllm/issues/66782) and [Issue #57103](https://github.com/vllm-project/vllm/issues/57103) lay groundwork for **request-level KV promotion decisions** and **composable retention policies**, enabling dynamic resource allocation in agentic systems.

---

#### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| High | [Issue #66387](https://github.com/vllm-project/vllm/issues/66387) | DFlash acceptance fails at TP > 1 (MiMo-V2.6-Flash-MOPD); crashes under sustained load | Open – affects multi-node speculative decoding |
| Medium | [Issue #52540](https://github.com/vllm-project/vllm/issues/52540) | ModelOpt NVFP4 on SM120 crashes/wedges under CUDA graphs | Open – impacts Blackwell stability |
| Medium | [Issue #52150](https://github.com/vllm-project/vllm/issues/52150) | GLM-5.2-FP8 emits garbage after GPU idle; CUDA graph cold replay corrupts prefill | Open – ROCm-specific |
| Low | [Issue #69137](https://github.com/vllm-project/vllm/issues/69137) | KV transfer scheduler frees blocks unconditionally → assertion crash after request abort | Open – critical for offload reliability |

---

#### **6. What This Means for Application Developers**  
- **Agentic Workloads**: Start designing with **programmable KV cache policies** ([RFC #57103](https://github.com/vllm-project/vllm/issues/57103), [RFC #52113](https://github.com/vllm-project/vllm/issues/52113)) and **session-aware hints** to avoid prefix cache thrashing and improve reuse.  
- **Multi-Model Serving**: Use **per-model kernel warmups** ([PR #69567](https://github.com/vllm-project/vllm/pull/69567)) and **GPU-staged model loading** ([PR #69803](https://github.com/vllm-project/vllm/pull/69803)) to reduce startup latency and improve GPU utilization when co-hosting models.  
- **Cross-Architecture Portability**: Expect stronger **ROCm and Intel GPU support** soon—test your deployments using nightly builds with AMD CI enabled ([Issue #66699](https://github.com/vllm-project/vllm/issues/66699)).  
- **Quantization Migration**: Prepare for **Marlin deprecation** ([Issue #65560](https://github.com/vllm-project/vllm/issues/65560)); verify that your quantized models (INT4/FP8/MXFP*) are compatible with Humming’s unified backend before upgrading.  

> ✅ *Recommendation*: Monitor the `vllm` release notes and GitHub issues for updates around **Humming migration**, **KV offload improvements**, and **speculative decoding stability** ahead of production rollouts.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-25**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to mature with a strong focus on stability and scalability for large-scale inference deployments. Key developments include progress toward **Prefill-Decode Disaggregation (PD Disaggregation)** as the default production mode, ongoing work on **KV cache orchestration and session-aware scheduling**, and critical fixes for **CUDA/ROCm runtime reliability** and **CI flakiness**. Notably, a new PR introduces **asynchronous expert migration on Ascend NPU**, enabling smoother model updates during inference.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, **SGLang 1.0 is now actively tracked** (#50045), signaling a shift toward stability and backward compatibility guarantees. The roadmap emphasizes:  
- Hardening of configuration validation (e.g., silent config changes replaced with explicit errors)  
- Defining a clear compatibility policy for the `1.x` series  
- Upgrading from `0.5.x` may require code changes — see [Upgrade notes](https://github.com/sgl-project/sglang/issues/50045#upgrade-notes)

---

### **3. New Model & Hardware Support**  
- **Ascend NPU**: Asynchronous EPLB weight migration via HCCL P2P (`PR #50784`) enables smooth dynamic expert updates without blocking inference.  
- **AMD ROCm**: Continued improvements in DSA indexer handling (`PR #46822`) and support for target-aligned speculative decoding via PARD2 (`PR #51465`).  
- **Intel Xeon CPU**: Auto-detection for `sglang-cpu` installations (`PR #53029`) and fusion of attention/FFN/MoE kernels for Gemma 4 (`PR #53022`) improve CPU inference readiness.  
- **Diffusion Models**: Enhanced BF16 loading for UMT5 text encoder in Wan pipelines (`PR #52655`) and offline Hy-Nomas denoising with breakable CUDA graphs (`PR #52918`).

---

### **4. Performance & Optimization**  
- **Memory Efficiency**: `RadixCache.match_prefix` now skips unnecessary page-aligned buffer copies when `page_size > 1` (`PR #53027`), reducing redundant memory traffic.  
- **Startup Latency**: Multi-GPU server startup reduced via lazy PyNccl, shared DiT copy, early peer access, and held NVML (`PR #51966`), accelerating time-to-healthy state.  
- **Throughput**: `DSA DCP top-k merge` now supports `--dcp-size 2` and `4` (K3 decode), avoiding fallback paths that degrade performance (`PR #53024`).  
- **Speculative Decoding**: Fixed RoPE head-count mismatch under TP>1 in DSpark (`PR #53025`), ensuring correctness in distributed setups.

---

### **5. Stability & Regressions**  
High-severity issues reported today:  
1. **CUDA Coredump Tracker (#26340)** – 388 comments; auto-collected crashes from CI runs. Affects multiple backends and ranks. No fix yet; requires root-cause analysis.  
2. **Flaky CI Infrastructure (#42752)** – 233 comments; recurring failures in NVIDIA `PR Test Base/Extra`. Impacts PR review velocity. Workaround: temporary HF token skip (`PR #53028`).  
3. **HiCache + Hybrid SSM/Mamba Crash (#40926)** – Closed but critical: `cudaHostRegister` failure aborts entire instance due to improper error handling. Fix in `0.5.19` was incomplete.  
4. **Negative `max-running-requests` Silently Clamped to 1 (#52483)** – Bug prevents proper rate limiting; no fix yet.  

---

### **6. What This Means for Application Developers**  
- **Use `--enable-hierarchical-cache --hicache-storage-backend dynamic` cautiously** — known to crash hybrid SSM/Mamba models (see #40926).  
- **Expect stricter config validation in SGLang 1.0** — avoid relying on silent defaults; validate settings early.  
- **Leverage new KV cache features** like **session-aware orchestration** (#45189) and **supernode-wide sharing** (#43098) for agent systems requiring persistent context across sessions.  
- **Monitor CI stability** if contributing or using nightly builds — flaky tests are impacting PR turnaround.  
- **For high-concurrency workloads**, consider tuning `SGLANG_SCHEDULER_DECREASE_PREFILL_IDLE` and `SGLANG_PREFILL_DELAYER_MAX_DELAY_PASSES` (documented in #50447) to reduce TPOT by up to 30% on long-context tasks.

---

🔗 *Full issue tracking*: [sgl-project/sglang Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-25**

---

### **1. Today's Highlights**  
The latest development in `llama.cpp` centers on critical performance and stability improvements across multiple backends, particularly for ARM (SVE), CUDA, Vulkan, and Metal. Key updates include SVE-optimized dot-product kernels for Q5_0/Q5_1, refined top-k selection logic on Apple Silicon GPUs, and fixes to deterministic behavior in speculative decoding and logprobs—essential for agent-based inference pipelines.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were published in the last 24 hours. However, several PRs introduce significant changes:
- **`b12711`**: Repacked CPU kernels for ARMv8.0 without dotprod support (Q4_0/Q8_0), improving compatibility with older ARM devices.
- **`b12709`**: Added SVE-optimized `q5_0/q5_1` dot-product kernels via PR #30867 — a major optimization for high-throughput inference on ARM64 servers.
- **`b12706`**: Revised Metal’s bitonic top-k path to use radix sort for `ncols > 128`, improving performance on M5/M2 Ultra chips.
- **`b12703`**: Fused RMS_NORM + MUL + MROPE/IMROPE on CUDA with tuned block size — enables faster prefill for models using RoPE extensions.

> 🔗 [PR #30867](https://github.com/ggml-org/llama.cpp/pull/30867) | [PR #32500](https://github.com/ggml-org/llama.cpp/pull/32500)

---

### **3. New Model & Hardware Support**  
- **ARM SVE Support**: Full SVE acceleration added for Q5_0/Q5_1 quantized dot products (via `ggml_vec_dot_q5_0_q8_0`, `q5_1_q8_1`) — ideal for upcoming server-class ARM64 systems (e.g., AWS Graviton3+).
- **Intel Arc Pro B70 (BMG G31)**: Continued investigation into cooperative matrix (`KHR_coopmat`) issues; now confirmed to produce nondeterministic results under certain configurations (see Issue #31560).
- **Vulkan**: Chunked GDN replay support added (PR #32721), enabling more efficient memory reuse during long-context generation on AMD RDNA4 hardware.
- **New Model Support**:  
  - Tencent Hy4 Flash (220B, 12B active) added via DSA iSWA cache (PR #32960).  
  - Inkling 2 Mini now uses optimized weighted sum in `mix()` and `control()` (PR #32948).

> 🔗 [PR #32960](https://github.com/ggml-org/llama.cpp/pull/32960) | [PR #32721](https://github.com/ggml-org/llama.cpp/pull/32721)

---

### **4. Performance & Optimization**  
- **ARM (SVE)**: Up to **~35% speedup** in Q5_0/Q5_1 dot-product operations due to vectorized kernel fusion (PR #30867).
- **Metal (Apple Silicon)**: Bitonic top-k replaced with radix sort for `ncols > 128`, yielding **~1.8× improvement** in short-row decode throughput on M5/M2 Ultra.
- **CUDA**:  
  - Fused `RMS_NORM + MUL + MROPE/IMROPE` with optimal block size (64 threads for `ncols <= 256`) — reduces kernel launches and improves prefill latency.
  - Improved `ADD_ID` handling for large batches (>65k tokens) via PR #32444 (fix pending).
- **Vulkan**: Chunked GDN replay reduces memory fragmentation and improves sustained decode throughput on high-context workloads.

> 🔗 [PR #30867](https://github.com/ggml-org/llama.cpp/pull/30867) | [PR #32500](https://github.com/ggml-org/llama.cpp/pull/32500)

---

### **5. Stability & Regressions**  
Several critical stability issues reported today:

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|------------|
| ⚠️ High | [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) | Nondeterministic output on Intel Arc Pro B70 (Mesa 26.2.5) with `KHR_coopmat` enabled | ❌ Unresolved |
| ⚠️ High | [#32918](https://github.com/ggml-org/llama.cpp/issues/32918) | `convert_hf_to_gguf.py` miscounts tensors (Qwen3.8-27B → 770 vs expected 866) | ❌ Unresolved |
| ⚠️ Medium | [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | `/v1/completions` `logprobs` non-deterministic on SYCL MoE models despite seed | ❌ Unresolved |
| ⚠️ Medium | [#30301](https://github.com/ggml-org/llama.cpp/issues/30301) | `rms_norm_f32_sycl` fails with `UR_RESULT_ERROR_UNSUPPORTED_FEATURE` on Intel Arc Pro B60 | ❌ Unresolved |
| ⚠️ Low | [#32444](https://github.com/ggml-org/llama.cpp/issues/32444) | `ADD_ID` crashes on CUDA/HIP with >65535 tokens | ✅ Fix PR submitted (#32983) |

> 🔗 [Issue #31560](https://github.com/ggml-org/llama.cpp/issues/31560) | [Issue #32918](https://github.com/ggml-org/llama.cpp/issues/32918)

---

### **6. What This Means for Application Developers**  
- **Agent Frameworks**: The addition of `--ui-agent` flag (PR #33004) allows building browser-only tool agents—ideal for privacy-first, low-latency LLM apps.
- **Multi-Token Prediction (MTP)**: Public C API now exposed (PR #27788), enabling direct integration with Rust, Python, and JavaScript bindings.
- **Model Serving**: Expect improved consistency in speculative decoding and prompt caching after recent fixes (e.g., PR #32942, #32855).
- **Hardware Choice**: ARM SVE optimizations make `llama.cpp` a strong contender for edge/cloud deployments on ARM64. Intel Arc users should disable `KHR_coopmat` until #31560 is resolved.
- **Future-Proofing**: Use `--split-mode tensor` cautiously—quantized KV cache support remains disabled (Issue #23567), requiring full-float caches for now.

> 🔗 [PR #33004](https://github.com/ggml-org/llama.cpp/pull/33004) | [PR #27788](https://github.com/ggml-org/llama.cpp/pull/27788)

---  
*Digest generated: 2026-11-25 | Source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-25**

---

### **1. Today's Highlights**  
Critical memory and stability issues have emerged for high-context models on Apple Silicon (MLX) and NVIDIA DGX Spark, including OOM crashes with `inkling-2-mini` and unbounded memory growth in the MLX runner. A major performance regression was reported in v0.40.17 on macOS M4 Pro with Qwen 3.8 27B, while VRAM accounting inaccuracies and goroutine leaks continue to impact reliability. Fixes are underway via PRs addressing model loading, streaming handlers, and GPU memory management.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, **v0.40.17** is under active scrutiny due to:
- Severe performance regression on macOS M4 Pro (Qwen 3.8 27B) — [Issue #19866](https://github.com/ollama/ollama/issues/19866)
- Unbounded memory growth in MLX runner (~0.6 GiB per distinct prompt) — [Issue #19891](https://github.com/ollama/ollama/issues/19891)
- Memory overflow from saved history exceeding physical RAM — [Issue #19886](https://github.com/ollama/ollama/issues/19886)

> ⚠️ **Migration Note**: Users on macOS M4 Pro with large-context models should consider reverting to v0.40.16 until fixes land.

---

### **3. New Model & Hardware Support**  
- **Inkling-2-Mini (GGUF)**: Added support via `unsloth/Inkling-2-Mini-GGUF`, but model fails to load due to missing tensor dimensions (`blk.24.attn_q.weight`) — [Issue #19888](https://github.com/ollama/ollama/issues/19888)
- **Olmo3 Tool Call Parsing**: Fix for incorrect `<` → `\u003c` escaping in tool arguments — [PR #19878](https://github.com/ollama/ollama/pull/19878)
- **Intel IGPU Vulkan Support**: Enabled default Vulkan backend for Intel Ultra Series 1+ GPUs (MTL+) with 16GB+ RAM — [PR #19568](https://github.com/ollama/ollama/pull/19568)
- **MLX Runner Enhancements**: Optimized short history handling using Metal split attention kernels — [PR #19881](https://github.com/ollama/ollama/pull/19881)

---

### **4. Performance & Optimization**  
- **MLX Runner**:  
  - Speedup for short histories (<1K tokens) via Metal split attention kernels — [PR #19881](https://github.com/ollama/ollama/pull/19881)  
  - Memory grows ~0.6 GiB per unique prompt due to unevicted prefix-cache snapshots — [Issue #19891](https://github.com/ollama/ollama/issues/19891)  
  - History grows past physical RAM (23 GB → 70 GB in 13 min) on 64GB Mac — [Issue #19886](https://github.com/ollama/ollama/issues/19886)  

- **VRAM Accounting**:  
  - Inaccurate VRAM usage shown by `ollama ps` vs actual `rocm-smi` values — [Issue #17251](https://github.com/ollama/ollama/issues/17251)  
  - Fix in progress: [PR #19632](https://github.com/ollama/ollama/pull/19632) addresses multiple VRAM accounting bugs affecting model eviction and GPU splitting.

- **Streaming & Goroutines**:  
  - Streaming handlers leak goroutines and runner semaphore slots on client disconnect — [Issue #17131](https://github.com/ollama/ollama/issues/17131)  
  - Fix merged: [PR #17881](https://github.com/ollama/ollama/pull/17881) implements proper cleanup on disconnection.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|---------|------|--------|--------|
| 🔴 Critical | `inkling-2-mini` crashes DGX Spark (OOM + High CPU) — [Issue #19879](https://github.com/ollama/ollama/issues/19879) | Open | None |
| 🔴 Critical | MLX runner memory grows uncontrollably (~0.6 GiB/prompt) — [Issue #19891](https://github.com/ollama/ollama/issues/19891) | Open | [PR #19891](https://github.com/ollama/ollama/pull/19891) (in review) |
| 🔴 Critical | MLX history exceeds physical RAM (23→70 GB in 13 min) — [Issue #19886](https://github.com/ollama/ollama/issues/19886) | Open | [PR #19886](https://github.com/ollama/ollama/pull/19886) (in review) |
| 🟡 High | Incorrect VRAM reporting (`ollama ps` vs `rocm-smi`) — [Issue #17251](https://github.com/ollama/ollama/issues/17251) | Open | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| 🟡 Medium | Image marker construction uses O(N²) string ops — [Issue #19885](https://github.com/ollama/ollama/issues/19885) | Open | [PR #19885](https://github.com/ollama/ollama/pull/19885) (in review) |

---

### **6. What This Means for Application Developers**  
- **Avoid v0.40.17** on macOS M4 Pro with large-context models (e.g., Qwen 3.8 27B). Use `OLLAMA_KEEP_ALIVE=-1` cautiously—memory leaks may trigger system instability.
- **Monitor memory usage closely** when deploying on Apple Silicon (MLX) or high-memory systems; expect unbounded growth if using diverse prompts without cache eviction.
- **Validate tool call outputs**—especially for Olmo3 and Gemma 4—due to JSON escape handling bugs (e.g., `<` → `\u003c`). Use latest build or apply patch [PR #19878](https://github.com/ollama/ollama/pull/19878).
- **Enable `OLLAMA_NO_THINK=true`** globally if you're building agents that require deterministic, low-latency responses — [PR #17739](https://github.com/ollama/ollama/pull/17739).
- **Use `GET /api/status`** to expose detected hardware (GPU/CPU, memory) for observability — [Issue #19880](https://github.com/ollama/ollama/issues/19880), [PR #19880](https://github.com/ollama/ollama/pull/19880).

> ✅ **Best Practice**: For production inference on high-end hardware, use `--gpu` explicitly and monitor `ollama ps` output against `nvidia-smi` or `rocm-smi`.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# **LiteLLM Digest – 2026-11-25**

---

### **1. Today's Highlights**  
The LiteLLM project continues its rapid evolution with a focus on stability, cost accuracy, and enhanced proxy behavior—especially around streaming responses, guardrail handling, and budgeting. Critical fixes landed for `v1.108.17` (LTS) and `v1.112.0-rc.1`, including proper billing of blocked streams (`PR #54238`) and improved handling of `previous_response_id` resolution in the Responses API (`PR #53768`). These updates ensure more reliable spend tracking and better compatibility with agent workflows.

---

### **2. Releases & Breaking Changes**  
- **`v1.112.0-rc.1`**: Release candidate with significant improvements to gateway routing and authentication logic. Notable changes include early budget reservation (`PR #54354`) and stricter input validation in `responses` flows.  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-rc.1)  
  ✅ Verify signature:  
  ```bash
  cosign verify \
    --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com \
    ghcr.io/berriai/litellm:v1.112.0-rc.1
  ```

- **`v1.108.17` (LTS)**: Patch release addressing multiple regressions impacting production stability, particularly in MCP toolsets (`#47856`), model fallback cleanup (`#37670`), and incorrect cost reporting for Azure AI Foundry models (`#53787`).  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.108.17)  
  📌 Use `ghcr.io/berriai/litellm:lts` for guaranteed LTS stability.

> ⚠️ **Migration Note**: If using `v1.108.x` + `mcp/toolset` or `responses` APIs, upgrade to `v1.108.17` immediately to avoid silent data loss and cost miscalculations.

---

### **3. New Model & Hardware Support**  
- **GMI Cloud Models Added to Cost Map**:  
  - `gmi/tencent/hy4-flash` — supports high-throughput inference with low latency (input: $7e-8/token, output: $2.81e-7/token).  
  🔗 [PR #53484](https://github.com/BerriAI/litellm/pull/53484)

- **Meta Muse Models on Vertex AI (LTS)**: Native support added via `lts/1.108.x` branch. Enables use of Meta’s latest multimodal models through Google Cloud.  
  🔗 [PR #53388](https://github.com/BerriAI/litellm/pull/53388)

- **Prisma v2.5/v3.0 Realtime Transcription (Experimental)**: Adds real-time audio transcription via Prisma models through LiteLLM’s gateway.  
  🔗 [PR #53828](https://github.com/BerriAI/litellm/pull/53828)

---

### **4. Performance & Optimization**  
- **Streaming Response Billing Fix**: Previously, blocked streamed responses were either ignored or incorrectly billed as successes. Now each blocked stream is logged once as a failure, with accurate token cost from upstream provider.  
  🔗 [PR #54238](https://github.com/BerriAI/litellm/pull/54238)

- **Early `message_start` Emission During Thinking**: Streaming `/v1/messages` requests now emit `message_start` immediately—even during retries—reducing perceived latency by up to ~90% in long-thinking scenarios.  
  🔗 [PR #54319](https://github.com/BerriAI/litellm/pull/54319)

- **Redis Connection Leak Fix**: Synchronous `Router.completion()` calls no longer open new Redis connections indefinitely when RPM/TPM limits are enabled.  
  🔗 [PR #48589](https://github.com/BerriAI/litellm/pull/48589)

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR | Impact |
|------|----------|--------|--------|--------|
| `tools/list` blocks 18–50s on legacy protocol clients (`#50065`) | High | Open | None | Affects Open WebUI users; causes timeouts in agent workflows |
| `azure_ai/Microsoft-Decision-1.1` missing US/EU zone pricing (`#53787`) | Medium | Open | None | Underreports costs for regional deployments |
| `gemini/image_request` returns empty 200 instead of error (`#29125`) | Medium | Open | Pending | Risk of silent failures in image generation pipelines |
| `Ollama.get_runtime_model_info` ignores `api_base` (`#37041`) | High | Closed | Fixed | Causes 8s connect timeout per call; critical for remote Ollama setups |

> 💡 **Critical Fix Merged**: `#54238` (streamed response billing) and `#54354` (budget reservation) are now available in `v1.112.0-rc.1`.

---

### **6. What This Means for Application Developers**  
- **Upgrade to `v1.108.17` (LTS) if you’re in production**—especially if using MCP toolsets, `responses`, or Azure AI. The patch addresses several silent data integrity issues.
- **Enable `strict_stream_completion`** (via config) to catch truncated SSE streams early—prevents silent data loss in agent chains.
- **Use `ghcr.io/berriai/litellm:lts`** for consistent, stable deployments across environments.
- **Monitor spend logs closely**—new fixes ensure accurate cost attribution even for rejected or blocked requests (e.g., Presidio guardrails).
- **For custom OAuth2 providers**, watch **Issue #12367**—support is being considered for future releases.

👉 **Best Practice**: Always verify Docker images with `cosign` and pin your deployment to `lts` unless testing RC features.

---  
*Digest generated: 2026-11-25 | Source: [GitHub – BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-11-25**

---

### **1. Today's Highlights**  
Unsloth v0.1.924-beta delivers major performance gains for **Inkling 2 Mini (1.8–3.1x)** fine-tuning, enabling **50% VRAM reduction** and up to **3.1x faster training** via LoRA/QLoRA, with support for tensor, pipeline, and context parallelism across GPUs. The release also introduces **native GGUF export and merged 16-bit model export**, expanding deployment flexibility. Meanwhile, the team continues refining multi-GPU training infrastructure with new DDP/FSDP2/TP/PP/CP/EP backend support in development.

---

### **2. Releases & Breaking Changes**  
- **v0.1.924-beta**:  
  - ✅ **Inkling 2 Mini fine-tuning acceleration**: Up to 3.1x speedup, 50% lower VRAM usage with LoRA/QLoRA.  
  - ✅ **Multi-GPU parallelism**: Supports tensor, pipeline, and context parallelism across GPUs for training.  
  - ✅ **GGUF & 16-bit model export**: Fine-tuned Inkling models can now be exported to GGUF or merged into 16-bit format.  
  - 📌 *Note: Use `UNSLOTH_PARALLEL` or `torchrun` for distributed training configurations.*  
  [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.924-beta)

---

### **3. New Model & Hardware Support**  
- **Newly Supported Models**:  
  - ✅ **Inkling 2 Mini (1.8–3.1x)**: Full fine-tuning and inference support in v0.1.924-beta.  
  - ✅ **Ling-3.2-air (multi-modal)**: Requested via #19298; currently under consideration.  
  - ⚠️ **Gemma 4**: Tool argument rendering issues reported (#18847); not yet fully supported.  

- **Hardware & Backend Updates**:  
  - ✅ **ROCm 7.13.99004 (AMD Radeon RX 7900 GRE)**: Partial support confirmed, but memory mapping bugs persist (#12248, #19340).  
  - ✅ **NVIDIA RTX 4070 / Arc 140V XPU (Vulkan)**: OOM and regex errors reported (#19376, #19239); no official fix yet.  
  - ❌ **Ryzen 8700G + Radeon 780M**: Unified memory loading fails despite ROCm support (#18001, #19309).  
  - 🔧 **Strata & other engines**: Feature request for native integration (#18895), currently unimplemented.

---

### **4. Performance & Optimization**  
- **Fine-tuning Speed**:  
  - Inkling 2 Mini training is now **3.1x faster** and uses **50% less VRAM** vs prior versions.  
  - Trains efficiently on Kaggle’s free 2x T4 instances with full parallelization support.  
- **Inference Optimization**:  
  - LTX-2.5 now renders **768x512 clips on 6 GiB cards** (previously OOM’d) via memory optimization PR #19377.  
  - Denoise phase pricing and VAE encoder parking reduce peak memory usage by ~25%.  
- **Memory Efficiency**:  
  - PR #19397 improves GGUF lookup-table handling, reducing redundant Hugging Face API calls during model loading.  
  - PR #19395 limits re-renders to only changed tool outputs, improving UI responsiveness.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Status | PR/Link |
|---------|------|-------------|--------|--------|
| ⚠️ High | **VRAM OOM: Inkling 2 Mini** (#19275) | Crashes on AMD RX 7900 GRE with ROCm 7.13.99004 | Open | [Issue #19275](https://github.com/unslothai/unsloth/issues/19275) |
| ⚠️ High | **CUDA runtime missing in portable llama.cpp** (#19341) | Prebuilt `cuda13-portable` runs silently on CPU, no CUDA fallback | Open | [Issue #19341](https://github.com/unslothai/unsloth/issues/19341) |
| ⚠️ Medium | **Memory leak on Windows (Drive C loss)** (#14487) | 200–400 MB leaked per session; no cleanup mechanism | Open | [Issue #14487](https://github.com/unslothai/unsloth/issues/14487) |
| ⚠️ Medium | **Failed to process regex in Inkling-2-Mini** (#19376) | `std::regex error_stack` on RTX 4070 | Open | [Issue #19376](https://github.com/unslothai/unsloth/issues/19376) |
| ⚠️ Low | **Chat banner empty** (#19346) | UI blank in desktop app after startup | Open | [Issue #19346](https://github.com/unslothai/unsloth/issues/19346) |

> 🔥 **Critical Note**: The **GPU memory leak** and **missing CUDA runtime** in portable builds are high-risk for production deployments.

---

### **6. What This Means for Application Developers**  
- **Fine-tune efficiently**: Leverage v0.1.924-beta’s Inkling 2 Mini improvements to train smaller models faster with minimal hardware overhead—ideal for edge or cloud-based agents.  
- **Design for multi-GPU**: Use `UNSLOTH_PARALLEL` + `torchrun` for DDP/FSDP2/TP/PP/CP/EP support (PR #19378) when scaling training.  
- **Handle model exports carefully**: Exporting fine-tuned models to GGUF requires verifying quantization compatibility and GPU backends (ROCm/CUDA).  
- **Avoid unstable paths**: Do not rely on `cuda13-portable` builds if CUDA is required—use official PyTorch distributions instead.  
- **Monitor memory leaks**: If using Windows or AMD systems, expect increased disk usage and potential crashes due to unresolved memory leaks.  
- **Plan for future UI enhancements**: The chat Files menu (#19140) will return post-performance fix (PR #19416), so avoid building on its current unstable state.

> ✅ **Best Practice**: For production workloads, pin to stable releases and test on target hardware early. Monitor issue trackers for AMD/ROCm and CUDA runtime regressions.

---  
*Digest generated: 2026-11-25 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*