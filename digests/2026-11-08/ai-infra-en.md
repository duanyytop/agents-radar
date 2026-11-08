# AI Infrastructure Digest 2026-11-08

> Generated: 2026-11-08 01:46 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-08**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of high-performance specialization, driven by next-generation hardware like NVIDIA Blackwell (SM120) and AMD ROCm gfx950. Projects are diverging in focus: vLLM and SGLang prioritize raw throughput and speculative decoding on new architectures; llama.cpp emphasizes cross-platform robustness and CPU/Metal efficiency; Ollama expands local deployment reach with MLX runner enhancements; LiteLLM consolidates multi-provider routing with growing security rigor; and Unsloth pushes boundaries in training efficiency and memory optimization. Stability remains a critical concern—especially around CUDA graphs, MoE workflows, and kernel consistency—indicating maturing infrastructure under real-world load.

---

### **2. Activity Comparison**  

| Project       | Open Issues | Open PRs | Recent Release? | Notes |
|---------------|-------------|----------|------------------|-------|
| **vLLM**      | 34          | 27       | No               | High severity issues on SM120; major kernel shift to Humming |
| **SGLang**    | 28          | 31       | No               | Active fixes for DCP/DFLASH, FlashInfer autotuning |
| **llama.cpp** | 42          | 39       | No               | Highest issue count; stability challenges on Vulkan/SYCL |
| **Ollama**    | 21          | 19       | No               | Critical Windows/AMD regressions; strong model runner momentum |
| **LiteLLM**   | 17          | 15       | Yes (`v1.110.0-dev.1`) | Security-focused dev release; streaming/tooling bugs persist |
| **Unsloth**   | 25          | 24       | No               | UI and training stability issues; strong R&D in Ulysses context |

> ✅ *Insight*: **llama.cpp** leads in open issue volume, reflecting its broad backend coverage and platform diversity. **vLLM** shows the most aggressive architectural changes (Humming, ReplaySSM), while **LiteLLM** stands out in security and compliance maturity.

---

### **3. Model Support Race**  

| New Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|---------|
| **NVIDIA Blackwell (SM120)** | ✅ (DeepSeek-V4.1-Flash, NVFP4 MoE) | ✅ (DeepSeek-V4, GLM-5.3-Flash) | ❌ | ⚠️ (pending) | ❌ | ⚠️ (FlashInfer preinstall) |
| **AMD ROCm (gfx950)** | ✅ (Whisper, MoE fallback) | ✅ (fp8 KV cache default) | ⚠️ (Intel Arc B-series) | ❌ | ❌ | ✅ (SYCL support) |
| **Mamba2 ReplaySSM** | 🚧 (Triton support via PR #66318) | 🚧 (Triton backend) | ❌ | ❌ | ❌ | ✅ (Ulysses context parallelism) |
| **Qwen3.5-35B** | 📌 Requested (#43561) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 ASR Streaming** | 📌 Requested (#47455) | ❌ | ❌ | ✅ (MLX runner) | ❌ | ❌ |
| **Kandinsky6 / MiniMax-H3 / FLUX.3 Image** | ❌ | ✅ (diffusion pipelines) | ❌ | ❌ | ❌ | ❌ |
| **Ripple Models (DFlash + NoPE)** | ❌ | ❌ | ❌ | ✅ (PR #19592) | ❌ | ❌ |

> 🏆 **Winner**: **SGLang** leads in active model support for emerging modalities and long-context models (Kimi-K3.1, GLM-5.3-Flash).  
> 🥈 **Runner-up**: **Ollama** excels in consumer-facing model accessibility (MLX on Windows/CPU, Ripple, Nemotron) despite lacking backend depth.  
> 🛠️ **Innovation Leader**: **Unsloth** pioneers advanced context handling (Ulysses) and training optimizations.

---

### **4. Performance Frontier**  

| Optimization Focus         | vLLM                     | SGLang                    | llama.cpp                | Ollama                  | LiteLLM                 | Unsloth                   |
|----------------------------|--------------------------|---------------------------|--------------------------|-------------------------|-------------------------|---------------------------|
| **KV Cache & Memory**      | FP8, persistent_topk, sparse MLA | FP8 (ROCm), HiCache hit rate | MoE CPU offloading, VRAM limits | Accurate `ollama ps` estimation | Budget tracking | LTX-2 VAE tile memory reduction |
| **Batching & Inference**   | Batch-invariant mode, CUDA graphs | Hybrid linear attention, fused RoPE | Split-mode, CPU offload | Parallel generation (`OLLAMA_NUM_PARALLEL`) | Stream timeout bounding | RAG ingestion batching bottleneck |
| **Quantization**           | Marlin → Humming (unified) | MoE expert autotune | Q4_1/Q5_1 precision fixes | N/A | N/A | BF16 AdamW stability |
| **Speculative Decoding**   | MTP + MoE + FP8 regression | DCP + DFLASH, Kimi-K3.1 | ❌ | ❌ | ❌ | Ulysses context alignment |
| **Kernel & Backend**       | Triton + ReplaySSM, FlashInfer | FlashInfer autotuning, fused kernels | SYCL, Vulkan, WebGPU | MLX runner (Windows/CPU) | cosign-signed images | FlashInfer pre-installation |

> 🔥 **Key Trend**: The frontier is shifting toward **kernel unification** (vLLM’s Humming), **context-aware parallelism** (Unsloth’s Ulysses), and **memory-efficient diffusion** (Unsloth, SGLang).

---

### **5. Layer Positioning**  

| Project       | Primary Layer              | Secondary Role                             | Distinctive Strength |
|---------------|------------------------------|--------------------------------------------|------------------------|
| **vLLM**      | Serving Engine (GPU)         | Model Gateway (via API)                    | Industry standard for high-throughput GPU inference |
| **SGLang**    | Serving Engine (GPU)         | Agent Orchestrator (speculative decoding)  | Advanced agentic pipeline support |
| **llama.cpp** | Local Runtime (Multi-Backend)| Edge/Edge-Cloud Deployment                 | Best-in-class CPU/Metal/Vulkan portability |
| **Ollama**    | Local Runtime + Gateway      | Developer Experience Platform              | Universal model runner with MLX on Windows/CPU |
| **LiteLLM**   | Gateway / Proxy Layer        | Multi-Provider Abstraction                 | Secure, compliant, production-grade orchestration |
| **Unsloth**   | Training/Fine-Tuning Engine  | Model Optimizer (RAG, diffusion)           | End-to-end efficiency from training to inference |

> 🎯 **Strategic Insight**:  
> - **vLLM/SGLang** dominate at scale on GPU clusters.  
> - **llama.cpp/Ollama** lead in democratizing access beyond GPUs.  
> - **LiteLLM** is becoming the de facto secure proxy layer for enterprise.  
> - **Unsloth** is carving a niche as an end-to-end performance optimizer.

---

### **6. Trend Signals**  

#### 🔍 **Emergent Trends Extracted from Today's Activity**:
1. **Hardware-Centric Regression Surge**: Critical failures on **NVIDIA Blackwell (SM120)** and **AMD gfx950** indicate that early adopters face significant stability risks — especially with MoE + FP8 + speculative decoding.
2. **Kernel Unification Push**: vLLM’s move from Marlin to **Humming** signals a shift toward cross-architecture consistency, reducing fragmentation across Hopper, Blackwell, and future generations.
3. **Agent Pipeline Optimization**: ReplaySSM (vLLM), DCP/DFLASH (SGLang), and Ulysses (Unsloth) all target faster, more efficient agent reasoning — a clear signal that **agentic inference** is now a primary performance battleground.
4. **Security & Compliance Maturation**: LiteLLM’s cosign-signed images and Ollama’s `lts` tag reflect growing need for **trusted, auditable deployments** in production.
5. **Local Runtime Democratization**: Ollama’s MLX support on Windows/CPU and llama.cpp’s Intel Arc/Vulkan fixes show that **non-GPU inference** is no longer a niche — it’s a core use case.

#### 📌 **What Application Developers Should Watch**:
- **Avoid `--enforce-eager` on Blackwell** until v0.33.0 patches land (vLLM).
- **Pin to stable releases** (e.g., Ollama `lts`, LiteLLM `v1.108.3`) in production.
- **Monitor MoE + FP8 + speculative decoding** combinations — they’re currently unstable on SM120.
- **Use `persistent_topk` on ROCm** and `--moe-cache-cpu-share` for better scalability.
- **Leverage prebuilt kernels** (Unsloth) and **accurate VRAM estimation** (Ollama) to avoid silent OOM crashes.

> ✅ **Bottom Line**: The ecosystem is moving from *basic inference* to *optimized, secure, agent-ready* deployment — but only if you stay ahead of hardware-specific regressions and leverage the right tools for your stack.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# **vLLM Digest – 2026-11-08**

---

### **1. Today's Highlights**  
Critical performance and stability issues are emerging on **NVIDIA Blackwell (SM120)** hardware, particularly with `DeepSeek-V4.1-Flash` models under `--enforce-eager` and CUDA graph capture. A regression in v0.33.0 causes illegal memory access during speculative decoding with MoE + FP8 KV caches. Meanwhile, the community is advancing support for **ReplaySSM speculative decoding on Triton** and pushing to replace Marlin with Humming across NVIDIA architectures.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **NVIDIA Blackwell (SM120)**: Active development and bug tracking for `DeepSeek-V4.1-Flash`, `NVFP4 MoE`, and `fp8 KV cache` workflows.
- ✅ **ROCm (gfx950, gfx1100)**: Continued parity work for encoder-decoder models (Whisper), MoE fallbacks (`AITER FP8`), and persistent_topk support.
- 🚧 **Mamba2 ReplaySSM**: Triton backend now supports speculative decoding via PR #66318 — previously FlashInfer-only.
- 📌 **New Models Requested**:  
  - *NVIDIA Nemotron 3.5 ASR Streaming* (nemotron-3.5-asr-streaming-0.6b) – [Issue #47455](https://github.com/vllm-project/vllm/issues/47455)  
  - *Qwen3.5-35B* – [Issue #43561](https://github.com/vllm-project/vllm/issues/43561) (V100 compatibility)

---

### **4. Performance & Optimization**  
- 🔥 **SM120 Performance Fix**: Issue #56892 reports extremely low decode throughput on RTX PRO 6000 Blackwell (8xTP) when using `--enforce-eager`. Workarounds involve disabling CUDA graphs until a fix lands.
- ⚡ **Triton Batch-Invariant Mode**: PR #65569 highlights that `enable_batch_invariant_mode` routes Linear layers to Triton even though cuBLAS is already batch-invariant on SM90/SM100 — potential unnecessary overhead.
- 🔄 **Quantization Efficiency**: PR #65560 proposes replacing Marlin with **Humming** as the default kernel across all NVIDIA architectures (Hopper/Blackwell), unifying INT4/INT8/GPTQ/AWQ/Fp8/MXFP formats.
- 🎯 **Sparse MLA Optimizations**: PR #65403 reduces index-group workspace usage and enables opt-in masked-MHA prefill path for quantized KV caches on GLM-5.3 (743B model) at TP8.
- 💾 **Memory Footprint**: PR #65143 adds `get_weight_byte_size()` to `QuantizationConfig` to improve MFU/MBU estimation accuracy for out-of-tree quantizations.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Status |
|---------|-------|-------------|--------|
| ❗ Critical | [#65139](https://github.com/vllm-project/vllm/issues/65139) | CUDA illegal memory access at first MTP verify step on v0.33.0 (SM120, NVFP4 MoE, fp8 KV, chunked prefill, prefix caching, MTP spec decode) — **regression from v0.32.0** | Open |
| ❗ High | [#56892](https://github.com/vllm-project/vllm/issues/56892) | Extremely low decode throughput on SM120 with DeepSeek-V4.1-Flash + `--enforce-eager`; CUDA graphs unusable | Open |
| ⚠️ Medium | [#51525](https://github.com/vllm-project/vllm/issues/51525) | Explicit `VLLM_CUTLASS NVFP4 MoE` selection produces empty completions on SM120 | Open |
| ⚠️ Medium | [#65592](https://github.com/vllm-project/vllm/issues/65592) | `"max_tokens": null` bypasses platform output-token caps silently | Open |

> ✅ **Fixes in Progress**:  
> - PR #65446: Fixes Dynamo UVA incoherence in CC environments ([#59981](https://github.com/vllm-project/vllm/pull/59981))  
> - PR #66333: Preserves text before `<think>` in reasoning parsers  
> - PR #64945: Fixes Mooncake save offset stalls with evicted SWA blocks

---

### **6. What This Means for Application Developers**  
- **Avoid `--enforce-eager` on Blackwell (SM120)** until #56892 is resolved — expect severe latency degradation.
- **Monitor for regressions in v0.33.0**, especially if using MoE + FP8 KV caches with MTP speculative decoding (#65139).
- **Expect better quantization performance** via the upcoming switch from Marlin to Humming — improves cross-architecture consistency.
- **Use `persistent_topk` on ROCm** for faster top-k sampling (PR #63847); consider enabling it in high-throughput scenarios.
- **Ensure correct handling of `max_tokens: null`** — it may silently bypass safety limits; prefer explicit defaults.
- **Leverage ReplaySSM speculative decoding** on Triton (via PR #66318) for faster Mamba2 inference in agentic pipelines.

> 👉 *Recommendation*: Pin to v0.32.0 temporarily for production Blackwell deployments until #65139 and #56892 are patched. Monitor PRs and issue threads closely for updates.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-08**

---

### **1. Today's Highlights**  
The SGLang project continues to prioritize stability and performance for large-scale, long-context inference on NVIDIA Blackwell (SM120) and AMD ROCm (gfx950) platforms. Key developments include critical fixes for speculative decoding consistency in Kimi-K3.1 DCP/DFLASH workflows, optimizations for FP8 KV cache handling on AMD, and a major perf improvement in FlashInfer’s MoE expert parallelism autotuning behavior. The community remains active in tracking flaky CI and CUDA coredumps—highlighting ongoing infrastructure maturity.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*  
However, ongoing work on `--cuda-graph-config` and `max_running_requests`/`cuda_graph_max_bs` interaction (see #33483) may require attention in high-throughput deployments.

---

### **3. New Model & Hardware Support**  
- **AMD ROCm (gfx950)**: Defaulting DSA KV cache to `fp8_e4m3` for better memory efficiency (#48996).  
- **NVIDIA Blackwell (SM120)**: Active optimization for DeepSeek-V4 and GLM-5.3-Flash with TP=4 on 4× RTX PRO 6000; tuning guidance sought for prefill throughput gaps vs. vLLM/Marlin (#33422).  
- **Apple Silicon**: RFC for Torch-owned SRT path with exported MLX region underway (#32321), signaling future native Apple Silicon support.  
- **Multimodal Models**: Kandinsky6, MiniMax-H3, and FLUX.3 Image now under active test and optimization via diffusion pipelines (#48366, #48122).

---

### **4. Performance & Optimization**  
- **FlashInfer Autotune**: Fixed issue where MoE EP>1 causes full cache discard at boot due to per-rank shape divergence (#40320); now preserves cached tactics across restarts.  
- **Kimi-K3.1 DCP**: Fused DCP8 indexer top-k improves decode efficiency (#48895).  
- **Qwen3.8 Hybrid**: Added QSA cache sharding to reduce memory pressure (#43527).  
- **Diffusion Pipeline**:  
  - Reduced eager E2E latency by **8.11–11.3%** via fused RoPE kernels on SM103 (#48442).  
  - Enabled image-prefix SP for ERNIE-Image, unlocking Ulysses2-style parallelism (#48218).  
- **HiCache + Mooncake**: Reproducible hit-rate dip under L2/L3 capacity pressure observed (#47481); needs investigation.

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |  
|------|----------|--------|--------|  
| [CUDA Coredump Tracker](https://github.com/sgl-project/sglang/issues/26340) | Critical | Open | — |  
| [Flaky CI Tests](https://github.com/sgl-project/sglang/issues/42752) | High | Open | — |  
| [Long Prefill OOM on GB10](https://github.com/sgl-project/sglang/issues/36941) | Critical | Open | — |  
| [Full Prefill CUDA Graph Failure](https://github.com/sgl-project/sglang/issues/48593) | High | Open | — |  
| [DSpark + Grammar-Constrained Batch Deadlock](https://github.com/sgl-project/sglang/issues/41449) | High | Open | — |  
| [MambaPool CUDA OOM under Burst Admission](https://github.com/sgl-project/sglang/issues/47916) | Medium | Closed | #47916 |  
| [Kimi-K3 DCP Garbled Output (NCCL_GRAPH_REGISTER=0 fix)](https://github.com/sgl-project/sglang/issues/45367) | Medium | Closed | #45824 |

> ✅ **Resolved**: `generation-health` routing corruption (#35241), MambaPool OOM (#47916), Kimi-K3 DCP output (#45367).

---

### **6. What This Means for Application Developers**  
- **Use `--cuda-graph-config '{"prefill": {"backend": "full"}}'` cautiously**: Avoid hybrid linear attention models until #48593 is resolved.  
- **Deploying on AMD gfx950?** Expect improved FP8 KV cache defaults post-#48996—leverage this for memory-constrained scenarios.  
- **Multi-turn agents on long contexts?** Monitor HiCache hit rate dips under load (#47481); consider increasing prefix cache capacity.  
- **Speculative decoding with DFLASH+DCP?** Ensure consistent CFG mode across TP/SP ranks—fixes landed in #46430 and #49110.  
- **Build with caution on flaky CI**: Use `/sglang-pr-babysit` and monitor #42752 for transient failures during PR integration.

> 📌 *Pro tip*: For production use, pin to stable releases and validate against real-world workloads—especially around GPU memory exhaustion and graph capture behaviors.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-08**

---

### **1. Today's Highlights**  
The latest updates focus on robustness and performance across multiple backends, with critical fixes for SYCL and Vulkan correctness, particularly around FP16/FP32 precision and memory management. Notable progress includes improved MoE caching efficiency via CPU offloading (`--moe-cache-cpu-share`) and enhanced support for Intel Arc GPUs through oneDNN fusion and bug fixes in Flash Attention.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were issued today. However, the following **behavioral changes** are notable:  
- **SYCL**: `sycl: refuse device buffers that would exceed VRAM` (#31285) introduces a hard limit to prevent GPU OOM crashes—may require tuning of `--n-gpu-layers` or `--split-mode`.  
- **Hexagon**: Automatic loading of `libhtp` without legacy environment variables (e.g., `HTP_LIB_PATH`) is now enabled (#31781), simplifying deployment on Windows and non-ASCII paths.  

> 🔗 [PR #31285](https://github.com/ggml-org/llama.cpp/pull/31285) | [PR #31781](https://github.com/ggml-org/llama.cpp/pull/31781)

---

### **3. New Model & Hardware Support**  
- **Model**: Full support for **MageVL-Cowork** added via `mtmd` (#31819), enabling multimodal reasoning with visual inputs.  
- **Hardware**:  
  - **Intel Arc B-series (Battlemage)**: Fixes for cooperative matrix (`KHR_coopmat`) issues under long-context/RAG scenarios (#31560, #31828).  
  - **Apple M4 Max (Metal)**: Continued optimization for draft-MTP memory usage during high-token sessions (#30174).  
- **Backend**: WebGPU gains native `group_norm` kernel implementation (#31490), improving compatibility with newer GPU drivers.

> 🔗 [Issue #31819](https://github.com/ggml-org/llama.cpp/issues/31819) | [Issue #31560](https://github.com/ggml-org/llama.cpp/issues/31560) | [PR #31490](https://github.com/ggml-org/llama.cpp/pull/31490)

---

### **4. Performance & Optimization**  
- **SYCL**: Exact rounding in `CPY` operations to Q4_1/Q5_1/Q8_0 ensures deterministic results matching CPU reference (#31465, #31140).  
- **SYCL + MKL**: Flash attention with attention sinks (e.g., Flint, gpt-oss) now uses MKL path, yielding **1.87x speedup at Flint prompt shape**, **1.32x at gpt-oss** (#31542).  
- **Mixture-of-Experts (MoE)**: Hybrid CPU/GPU cache misses via `--moe-cache-cpu-share` improves scalability; benchmark shows **+3.4% throughput** on Qwen3.8-27B Q3_K_P (#31753).  
- **CPU Backend**: Switching `src1` to F32 in `GGML_TYPE_F16` matrix ops reduces precision loss and enables better vectorization (#31854).

> 🔗 [PR #31465](https://github.com/ggml-org/llama.cpp/pull/31465) | [PR #31542](https://github.com/ggml-org/llama.cpp/pull/31542) | [PR #31753](https://github.com/ggml-org/llama.cpp/pull/31753) | [PR #31854](https://github.com/ggml-org/llama.cpp/pull/31854)

---

### **5. Stability & Regressions**  
High-severity stability issues reported today:  
1. **Vulkan Output Corruption on Intel Arc B-series** persists even after disabling `KHRCOOPMAT`, affecting long-context RAG prompts (#31828).  
2. **SYCL CPY Precision Drift** causes non-deterministic output vs CPU reference on Intel Arc B70/B580 (#31140, fixed by #31465).  
3. **llama-server Hangs Indefinitely** when loading large models (>19GB) across two RPC backends (#31847).  
4. **Metal Draft-MTP Memory Leak**: Up to **~15 GB host malloc** during ~96k-token sessions on M4 Max (#30174).  

> 🔗 [Issue #31828](https://github.com/ggml-org/llama.cpp/issues/31828) | [Issue #31140](https://github.com/ggml-org/llama.cpp/issues/31140) | [Issue #31847](https://github.com/ggml-org/llama.cpp/issues/31847) | [Issue #30174](https://github.com/ggml-org/llama.cpp/issues/30174)

---

### **6. What This Means for Application Developers**  
- **Use `--moe-cache-cpu-share`** to reduce GPU memory pressure in MoE inference pipelines—ideal for low-RAM deployments.  
- **Avoid `KHRCOOPMAT` on Intel Arc B-series** until #31828 is resolved; disable via `GGML_VK_DISABLE_COOPMAT=1`.  
- **Enable `--split-mode none` only if you have sufficient VRAM**—SYCL now enforces VRAM limits (#31285), preventing silent OOM crashes.  
- **Validate model outputs rigorously** when using SYCL or Vulkan backends due to known precision drifts (e.g., Q4_1/Q5_1 quantization).  
- **Monitor server memory usage** with draft-MTP and large models—host memory allocation can spike unexpectedly on Metal.

> ✅ Recommended: Use `--moe-cache-cpu-share auto` (PR #31286) for adaptive MoE handling in production workloads.  
> 🔗 [PR #31286](https://github.com/ggml-org/llama.cpp/pull/31286)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-08**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its support for advanced model runners and cross-platform execution, with key contributions including MLX runner enhancements for Windows and CPU backends, and improvements to Gemma 4 tool call rendering. Critical stability fixes were merged for model parsing and metadata handling, while a new PR introduces ripple preview support in the MLX runner—signaling growing maturity in local inference pipelines.

---

### **2. Releases & Breaking Changes**  
*No new releases detected in the last 24 hours.*  
However, several PRs address backward compatibility and configuration rigor:  
- **PR #19442** ensures `/v1/models` returns an empty array (`[]`) instead of `null` when no models are installed—aligning with OpenAI spec expectations.  
- **PR #19594** improves Gemma 4’s message serialization by preserving content *before* tool calls, preventing misordering in agent workflows.  
- **PR #19574** fixes a parser leak where stray `<channel|>` close tags were incorrectly emitted as content during streaming.  
👉 [PR #19442](https://github.com/ollama/ollama/pull/19442) | [PR #19594](https://github.com/ollama/ollama/pull/19594) | [PR #19574](https://github.com/ollama/ollama/pull/19574)

---

### **3. New Model & Hardware Support**  
- **MLX Runner on Windows & CPU**:  
  PR #19366 adds native Windows support and a CPU backend for the MLX runner, enabling full text-to-speech inference (e.g., `phonon:en`) on non-Metal systems. This is a major step toward universal deployment.  
  👉 [PR #19366](https://github.com/ollama/ollama/pull/19366)  
- **Ripple Model Integration**:  
  PR #19592 adds support for the Ripple model family with DFlash drafts, NoPE per-layer support, and attention gating fusion—targeting high-efficiency inference.  
  👉 [PR #19592](https://github.com/ollama/ollama/pull/19592)  
- **Nemotron & Luciole Tokenization**:  
  PR #19567 enables dense Nemotron and Luciole models via direct MLX/Safetensors loading, expanding accessible open-source LLMs.  
  👉 [PR #19567](https://github.com/ollama/ollama/pull/19567)

---

### **4. Performance & Optimization**  
- **KV Cache Estimation Improvements**:  
  PR #18866 addresses four VRAM miscounting issues between `ollama ps` and `nvidia-smi`, particularly critical for large context windows. Accurate KV cache prediction helps avoid out-of-memory crashes.  
  👉 [PR #18866](https://github.com/ollama/ollama/pull/18866)  
- **Parallel Generation for MLX**:  
  PR #19197 enables concurrent generation via `OLLAMA_NUM_PARALLEL`, reducing first-token latency for interactive apps. Default remains single request; higher parallelism increases memory usage proportionally.  
  👉 [PR #19197](https://github.com/ollama/ollama/pull/19197)  
- **Benchmark Tool Reliability**:  
  PR #19600 improves `cmd/bench` by failing incomplete runs and truncating reused output files—critical for automated performance testing.  
  👉 [PR #19600](https://github.com/ollama/ollama/pull/19600)

---

### **5. Stability & Regressions**  
**Critical Issues Reported:**  
- **Windows RTX 5090 Disconnects** (#19439): Intermittent HTTP 500 errors during tool calling in Open WebUI due to runner disconnection. Affects Muse Glimmer 30B and Q-series models.  
  👉 [Issue #19439](https://github.com/ollama/ollama/issues/19439)  
- **AMD Radeon 780M Vulkan Regression** (#17748): Models fail to load with `ErrorDeviceLost` on Vulkan backend post-0.32.10. Affected users report stable operation prior to update.  
  👉 [Issue #17748](https://github.com/ollama/ollama/issues/17748)  
- **Typo in gemma4:12b-it-qat Modelfile** (#19596): `toos` instead of `tools` breaks tool integration. Immediate fix required for correct functionality.  
  👉 [Issue #19596](https://github.com/ollama/ollama/issues/19596)  

*Note: No corresponding PRs yet for these regressions.*

---

### **6. What This Means for Application Developers**  
- **Agent Builders**: Ensure your tool-calling logic accounts for Gemma 4’s content ordering (fix in PR #19594). Avoid relying on `toos`—use corrected models.  
- **Multi-User / Cloud Deployments**: Be cautious with `OLLAMA_NUM_PARALLEL`—it increases memory use linearly per concurrent request. Use only if you control resource allocation.  
- **Cross-Platform Apps**: With MLX now supporting Windows and CPU, you can deploy lightweight agents (e.g., TTS, small LLMs) without Metal or GPU dependencies.  
- **Large Payloads**: Ollama Cloud’s undocumented 32 MiB limit for `/api/chat` may break image-heavy apps. Monitor payload size and consider chunked processing.  
  👉 [Issue #19597](https://github.com/ollama/ollama/issues/19597)  

For improved reliability, adopt community tools like [`ollama-update`](https://github.com/bgupta/ollama-update) (PR #19599) to automate model sync across environments.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-08**

#### **1. Today's Highlights**  
The latest release, `v1.110.0-dev.1`, introduces enhanced security via cosign-signed Docker images and includes critical fixes for Anthropic/Bedrock streaming reliability and budget tracking consistency. A surge in high-priority bug reports highlights ongoing challenges with tooling interoperability (especially MCP) and stream handling across providers.

#### **2. Releases & Breaking Changes**  
- **`v1.110.0-dev.1`**: Security-focused dev release with signed Docker images using cosign (`commit e82a3c6`). Verify via:  
  [cosign verify](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-dev.1)  
- **`v1.108.3` (LTS)**: Stable long-term support version. Use `ghcr.io/berriai/litellm:lts` for guaranteed stability.  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.108.3)

> ⚠️ No breaking changes reported in this cycle; all updates are additive or corrective.

#### **3. New Model & Hardware Support**  
No new models, backends, or hardware targets announced today. However, active PRs indicate progress toward broader support:
- **Azure AI Foundry Agents v2** (`/responses` with `agent_reference`) is under development ([#25372](https://github.com/BerriAI/litellm/issues/25372)).
- **Vertex AI TTS** now properly respects `vertex_location` in endpoint construction ([#50219](https://github.com/BerriAI/litellm/issues/50219)).

#### **4. Performance & Optimization**  
No direct performance improvements landed today. However, two significant optimizations are underway:
- **`total_timeout`** introduced as opt-in per-request timeout bounding non-streaming calls ([#50496](https://github.com/BerriAI/litellm/pull/50496)).
- **Stream failure logging** now captures mapped exception classes (e.g., `AnthropicError`) instead of generic `MidStreamFallbackError` ([#50597](https://github.com/BerriAI/litellm/pull/50597)).

These improve observability and debugging without impacting throughput.

#### **5. Stability & Regressions**  
Top severity issues reported in the last 24h:

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|------------|
| [#24498](https://github.com/BerriAI/litellm/issues/24498) | High | Empty system message sanitization on Claude models returns `[System: Empty message content...]` | ✅ Closed |
| [#49179](https://github.com/BerriAI/litellm/issues/49179) | High | `/key/update` during in-flight request drops cost from budget window spend | ✅ Closed |
| [#49359](https://github.com/BerriAI/litellm/issues/49359) | High | MCP tool execution errors lose `is_error` flag and don’t propagate to `tool_result` | 🟡 Open (PR pending) |
| [#48384](https://github.com/BerriAI/litellm/issues/48384) | High | Anthropic server_tool_use misinterpreted as `tool_calls`, causing agent loops | ✅ Closed |
| [#50065](https://github.com/BerriAI/litellm/issues/50065) | Medium | `tools/list` hangs 18–50s after `notifications/initialized` on legacy clients | 🟡 Open |

> 🔍 Note: Several regression bugs relate to **streaming**, **tooling**, and **budget accounting**—critical for production inference proxies.

#### **6. What This Means for Application Developers**  
- **Use `lts` tag** (`ghcr.io/berriai/litellm:lts`) for stable deployments; avoid `dev` tags in production.
- **Watch out for tooling quirks**: MCP tools, `reasoning_effort="none"`, and `tool_choice` behavior remain inconsistent across providers (e.g., Mistral, Google AI Studio).
- **Implement robust error handling** for streams: use `total_timeout` and expect `is_error` flags in tool results.
- **Avoid key updates during active requests**—this can cause budget leakage ([#49179](https://github.com/BerriAI/litellm/issues/49179)).
- **Verify endpoint routing** when mixing models (e.g., switching from Claude to GLM on Bedrock may fail due to replayed `signature` fields).

> 💡 Pro tip: Leverage `cosign verify` to ensure image integrity in CI/CD pipelines.  
> 🔗 [Verification Guide](https://docs.sigstore.dev/cosign/overview/)  

---  
*Digest generated: 2026-11-08 | Source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-11-08**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to deepen its support for advanced inference and training workflows, with key PRs advancing context parallelism (Ulysses) and memory optimization in diffusion pipelines. Critical fixes address UI rendering issues, CPU backend stability for MoE models, and a long-standing bug where `.nul` files were being created on Windows via Git Bash—now resolved.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The project remains in active development with ongoing refinements to Studio and core engine components.

---

### **3. New Model & Hardware Support**  
- **New Ulysses Context Parallelism Support**: PR #17051 adds dynamic/longrope RoPE alignment across all ranks for Gemma 4, DeepSeek V2/V3, and Kimi models — enabling longer context handling without positional distortion.
- **Intel SYCL Integration**: PR #17048 introduces an option to source `setvars.sh` before launching `llama-server`, enabling SYCL-backed performance gains on Intel GPUs (e.g., Arc).
- **FlashInfer Kernel Pre-installation**: PR #17063 installs prebuilt FlashInfer kernels into vLLM/SGLang environments, eliminating JIT compilation delays at first launch.

> 🔗 [PR #17063](https://github.com/unslothai/unsloth/pull/17063) | 🔗 [PR #17051](https://github.com/unslothai/unsloth/pull/17051) | 🔗 [PR #17048](https://github.com/unslothai/unsloth/pull/17048)

---

### **4. Performance & Optimization**  
- **Memory Efficiency in Diffusion Inference**:  
  - PR #17060 reduces VRAM usage during LTX-2 tiled VAE decode by keeping only one tile’s accumulator active per GPU card.  
  - PR #17045 cuts SDXL VRAM overhead by ~1.15 GiB by consolidating allocator segments into a single expandable block.
- **RAG Ingestion Speedup**:  
  Issue #16715 reveals that RAG ingestion processes documents one at a time, resulting in 99ms/chunk vs. 2.07ms when batched — highlighting a major bottleneck for large corpus indexing.
- **CPU AdamW BF16 Stability**:  
  PR #17046 ensures each parameter gets its own rounding stream during CPU-based BF16 AdamW updates, preventing convergence drift due to seed collisions.

> 🔗 [PR #17060](https://github.com/unslothai/unsloth/pull/17060) | 🔗 [PR #17045](https://github.com/unslothai/unsloth/pull/17045) | 🔗 [Issue #16715](https://github.com/unslothai/unsloth/issues/16715) | 🔗 [PR #17046](https://github.com/unslothai/unsloth/pull/17046)

---

### **5. Stability & Regressions**  
- **Critical UI Rendering Bugs (High Severity)**:  
  - Issue #17004 reports overlapping content and misplaced images in the Model Hub UI (desktop).  
  - Issue #16962 notes blurred search icons in the Model Hub — both affect usability and visual fidelity.
- **MoE Router Aux Loss Divergence (High Severity)**:  
  Issue #17054 confirms a critical regression: gradient accumulation > 1 causes divergent router aux loss values on CPU backend (`UNSLOTH_FORCE_CPU=1`) in pipeline-parallel MoE training.
- **Windows `.nul` File Creation (Medium Severity)**:  
  Issue #16991 documented that Git Bash on Windows creates real `.nul` files during model operations due to improper shell redirection handling — now fixed in PR #17010.

> 🔗 [Issue #17004](https://github.com/unslothai/unsloth/issues/17004) | 🔗 [Issue #16962](https://github.com/unslothai/unsloth/issues/16962) | 🔗 [Issue #17054](https://github.com/unslothai/unsloth/issues/17054) | 🔗 [PR #17010](https://github.com/unslothai/unsloth/pull/17010)

---

### **6. What This Means for Application Developers**  
- **For Agents & Multi-turn Apps**: Be cautious with tool use in Qwen hybrid models — Issue #17015 shows repeated full prompt processing after tool calls, which can degrade latency and context efficiency. Consider caching or pruning redundant inputs.
- **For Training Workflows**: Use `--keep-all-checkpoints` (requested in #16980) to preserve intermediate results during Image LoRA training; currently, only the final checkpoint is retained.
- **For Deployment Engineers**: Leverage PR #17061’s `.safetensors`-only loading path for improved security and faster startup times in production environments.
- **For Low-Resource Systems**: Monitor CPU MoE training stability (PR #17054), and avoid gradient accumulation >1 until fix lands. Also, consider upgrading to latest nightly builds to benefit from memory optimizations like those in #17045 and #17060.

> 📌 *Pro Tip*: Enable `UNSLOTH_FORCE_CPU=1` only for debugging — it exposes subtle bugs in loss computation and weight initialization that may not surface on GPU.

---  
*Data Source: [unslothai/unsloth GitHub repo](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*