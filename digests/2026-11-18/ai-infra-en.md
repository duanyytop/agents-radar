# AI Infrastructure Digest 2026-11-18

> Generated: 2026-11-18 03:49 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-18**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in late 2026 is defined by a rapid shift toward **heterogeneous hardware support**, **agent-centric optimization**, and **deep stack specialization**. Projects are no longer competing on raw throughput alone—instead, they’re differentiating through **multi-backend performance parity**, **low-latency agent workflows**, and **secure, scalable model serving**. The rise of **MCP (Model Control Protocol) integration**, **speculative decoding enhancements**, and **Rust-based backend migration** signals a maturing ecosystem where reliability, security, and developer experience are as critical as speed.

---

### **2. Activity Comparison**  

| Project       | Issues Opened (Last 24h) | PRs Merged (Last 24h) | Release Status         |
|---------------|----------------------------|--------------------------|--------------------------|
| **vLLM**      | 9                          | 5                        | None                     |
| **SGLang**    | 7                          | 6                        | v0.5.23 released (regression) |
| **llama.cpp** | 6                          | 6                        | No release; commits only |
| **Ollama**    | 5                          | 3                        | None                     |
| **LiteLLM**   | 4                          | 2                        | `v1.111.0-rc.1` (security fix) |
| **Unsloth**   | 8                          | 4                        | `v0.1.919-beta` (beta feature) |

> ✅ *Insight*: SGLang leads in active development velocity, while LiteLLM and Unsloth drive innovation via high-impact RC releases and beta features. vLLM remains the most stable with no new releases or breaking changes.

---

### **3. Model Support Race**  

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-2.4T-A95B (ROCm)**     | ✅ (gfx950/MI355X) | — | — | — | — | — |
| **Qwen3.8-Flash-Next (MXFP4)**   | ✅ (gfx950) | — | — | — | — | — |
| **Muse Spark Open PTPC-FP8**     | ✅ (gfx942/RDNA4) | — | — | — | — | — |
| **Kimi-K3.1 (Ascend/NPU)**       | — | ✅ | — | — | — | — |
| **Mistral-Large-4 (1M-context)** | — | ✅ | — | — | — | — |
| **MiniMax-H3-Image (GGUF/FP8)**  | — | — | — | — | — | ✅ |
| **Qwen3-TTS ICL/Reference Mode** | — | — | ✅ | — | — | — |
| **NVIDIA Nemotron 3.5 ASR Streaming** | ✅ | — | — | — | — | — |

> 🏆 **Leader**: **SGLang** takes the lead in **multi-architecture model support**, particularly for **Ascend NPU (Kimi-K3.1)** and **Mistral-Large-4**. **Unsloth** leads in **specialized agent models** (MiniMax-H3-Image), while **vLLM** dominates **AMD ROCm optimization** for Qwen series.

---

### **4. Performance Frontier**  

| Optimization Focus            | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache & Offload**        | ✅✅ (Lifecycle metrics, request-level promotions) | ✅ (CUDA graphs for MoE) | ❌ | ✅ (VRAM accounting fix) | ⚠️ (Redis replica timeout) | ❌ |
| **MoE & Quantization**        | ✅✅ (FlashInfer CuTe-DSL, MXFP4) | ✅ (DSPARK, DSA sparse attention) | ✅ (MMQ for V100s) | — | — | ✅ (LoRA training) |
| **Batching & Scheduling**     | ✅✅ (V1 Scheduler, front-of-queue re-admission) | ✅ (Beam search speedup) | ✅ (few-row MMQ) | — | — | — |
| **Distributed Serving**       | ✅ (DFlash acceptance collapse fix) | — | — | — | ✅ (Rust DB migration) | — |
| **Kernel-Level Tuning**       | ✅✅ (Block-FP8 Triton GEMM, DeepGEMM clamping) | ✅ (Grouped Triton, CUDA graphs) | ✅ (Fastdiv, conv2d path) | ❌ (Vulkan gap) | — | — |

> 🔥 **Hotspots**: **vLLM** and **SGLang** are pushing boundaries in **MoE execution**, **KV cache lifecycle control**, and **distributed scheduling**. **llama.cpp** continues to dominate **kernel-level optimizations** across platforms (CUDA, Vulkan, SYCL). **LiteLLM**’s move to **Rust-backed auth** targets long-term scalability.

---

### **5. Layer Positioning**  

| Project       | Primary Layer              | Secondary Role                         | Key Differentiator                                  |
|---------------|------------------------------|----------------------------------------|-----------------------------------------------------|
| **vLLM**      | **Inference Engine**         | Model Serving (via API gateway)        | Industry standard for high-throughput, low-latency serving on NVIDIA/AMD |
| **SGLang**    | **Multi-Backend Inference Engine** | Agent orchestration, speculative decoding | Full-stack support for AMD, Ascend, Intel XPU; strong focus on agent pipelines |
| **llama.cpp** | **Local Runtime / Embedded Engine** | Cross-platform inference (CPU/GPU)     | Universal portability; optimized kernels for edge and heterogeneous systems |
| **Ollama**    | **Local Model Gateway + Runner** | Developer CLI, local inference server  | Simplified UX for local AI; growing NPU/Intel support |
| **LiteLLM**   | **LLM Gateway / Aggregator** | Auth, billing, routing, caching        | Enterprise-grade proxy with Rust migration for performance and security |
| **Unsloth**   | **Agent SDK / Local App Integrator** | Fine-tuning, UI, computer use (MCP)    | First-mover in **desktop app integration** (Unity, Blender, Roblox); agent-first design |

> 📌 **Strategic Clarity**:  
> - **vLLM/SGLang** = High-performance inference engines  
> - **llama.cpp** = Universal runtime for edge/heterogeneous deployment  
> - **Ollama** = Developer-friendly local inference platform  
> - **LiteLLM** = Production-grade LLM gateway with security and scalability  
> - **Unsloth** = Agent-native framework enabling real-world application interaction

---

### **6. Trend Signals**  

1. **Heterogeneity is the new norm**: All projects now prioritize **AMD ROCm**, **Ascend NPU**, **Intel XPU**, and **Apple MLX**—no single vendor dominates. This reflects enterprise demand for **vendor-agnostic AI acceleration**.

2. **Agent workloads drive innovation**: Features like **MCP integration (Unsloth)**, **DSPARK speculative decoding (SGLang)**, and **tool calling fixes (vLLM)** indicate that **agent inference** is now the primary use case—not just chatbots.

3. **Security & observability are non-negotiable**: LiteLLM’s `salt_key_rotations`, vLLM’s KV offload telemetry, and SGLang’s config validation policy show that **production-grade stability** is being baked into core APIs.

4. **Rust is becoming the new engine layer**: LiteLLM’s database migration and SGLang’s transport abstraction signal a **shift from Python-heavy stacks to performant, memory-safe backends**—critical for scaling.

5. **Edge-to-cloud continuum matures**: Projects like **llama.cpp (Vulkan, SYCL)** and **Ollama (Intel NPU, Metal)** enable **consistent inference across devices**, from mobile to data center.

> 💡 **Developer Guidance**:  
> - Prioritize **vLLM** for high-throughput cloud deployments.  
> - Choose **SGLang** for multi-architecture agent pipelines.  
> - Use **llama.cpp** for edge/local inference with minimal dependencies.  
> - Adopt **LiteLLM** for secure, scalable LLM gateways in regulated environments.  
> - Leverage **Unsloth** for applications requiring direct desktop app interaction (automation, game AI).

---  
*Report compiled from GitHub activity (2026-11-18). For real-time insights, monitor project issue trackers and release channels.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-11-18

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate its support for next-generation hardware and advanced inference patterns, with significant progress on **ROCm backend optimization for AMD’s Qwen3.8 and Muse Spark models**, including gfx950/MI355X and gfx942/RDNA4 targets. Key PRs include a fix for MoE SwiGLU clamping in batched DeepGEMM (resolving severe logprob mismatches) and improvements to CPU offloading lifecycle metrics. Meanwhile, the Rust frontend is advancing toward feature parity, now tracking its roadmap in Issue #44280.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **AMD ROCm Support**:  
  - **Qwen3.8-2.4T-A95B** (`amd/Qwen3.8-2.4T-A95B-Quark-MXFP4`) — performance optimization tracker open for gfx950 / MI355X ([#57149](https://github.com/vllm-project/vllm/issues/57149)).  
  - **Qwen3.8-Flash-Next** (`amd/Qwen3.8-Flash-Next-Quark-MXFP4`) — optimized for MXFP4 MoE + QuerySparse Attention on gfx950 ([#59575](https://github.com/vllm-project/vllm/issues/59575)).  
  - **Muse Spark Open PTPC-FP8** — gfx942/RDNA4 performance optimization underway ([#64018](https://github.com/vllm-project/vllm/issues/64018)).  
- ✅ **New Model Features**:  
  - **NVIDIA Nemotron 3.5 ASR Streaming** (`nemotron-3.5-asr-streaming-0.6b`) — request for streaming ASR support ([#47455](https://github.com/vllm-project/vllm/issues/47455)).  
  - **Exaone4 & DeciLM** — now support EAGLE-3 auxiliary hidden states for speculative decoding ([PR #68289](https://github.com/vllm-project/vllm/pull/68289)).  
- ✅ **Backend Expansion**:  
  - **Octave KV caching** extended to RDNA4 GPUs via native HIP kernels ([PR #67844](https://github.com/vllm-project/vllm/pull/67844)).

---

### **4. Performance & Optimization**  
- 🔧 **MoE & Quantization**:  
  - Fixed missing `SwiGLU clamp` in batched DeepGEMM (DeepSeek-V4-Flash), resolving **9 severe token log-probability mismatches per 16K tokens** under `deepep_low_latency` mode ([PR #68084](https://github.com/vllm-project/vllm/pull/68084)).  
  - Added **FlashInfer CuTe-DSL unquantized MoE backend** for Hopper (SM90), enabling faster non-quantized MoE execution via `--moe-backend flashinfer_cutedsl` ([PR #66749](https://github.com/vllm-project/vllm/pull/66749)).  
- 📈 **Kernel & Memory**:  
  - **Block-FP8 Triton GEMM** now uses 64-bit row offsets to prevent out-of-bounds memory access at scale ([PR #66200](https://github.com/vllm-project/vllm/pull/66200)).  
  - **KV Offload Lifecycle Metrics** expanded: new histogram metric `vllm:kv_offload_cpu_chunk_idle_before_evict_seconds` exposes idle time before eviction ([Issue #67909](https://github.com/vllm-project/vllm/issues/67909)).  
- ⚙️ **Scheduler & Pipeline**:  
  - **Request-level KV promotions** being rearchitected to decide promotion timing early, reducing over-commit and lifetime bans ([Issue #66782](https://github.com/vllm-project/vllm/issues/66782)).  
  - **V1 Scheduler**: Proposal to eliminate 1.0–1.8s re-queueing stalls after async KV pulls via front-of-queue re-admission ([Issue #62532](https://github.com/vllm-project/vllm/issues/62532)).

---

### **5. Stability & Regressions**  
- ❌ **Critical Issues**:  
  - **DeepSeek-V4.1 Flash on SM120 (Blackwell)**: Extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable — urgent fix needed ([#56892](https://github.com/vllm-project/vllm/issues/56892)).  
  - **DFlash acceptance collapse** when tensor parallel > 1 (MiMo-V2.6-Flash-MOPD), blocking high-TP deployments ([#66387](https://github.com/vllm-project/vllm/issues/66387)).  
- ❌ **Correctness Bugs**:  
  - **Hybrid Mamba/attention prefix cache** silently drops hits when align-mode checkpoints land in request-unique tokens ([#45238](https://github.com/vllm-project/vllm/issues/45238)).  
  - **Tool calling with special-token names** causes 500 errors in gpt-oss due to improper header encoding ([#65770](https://github.com/vllm-project/vllm/issues/65770)), fixed in [PR #65771](https://github.com/vllm-project/vllm/pull/65771).  
- ⚠️ **Performance Degradation**:  
  - `--prefix-match-unit` adds ~30ms TTFT on every request for hybrid models (Qwen3.5-GDN) on Triton/FLA backend ([#67674](https://github.com/vllm-project/vllm/issues/67674)).

---

### **6. What This Means for Application Developers**  
- **For high-throughput AI agents**: Monitor `--enforce-eager` behavior on Blackwell (SM120) GPUs — expect degraded decode performance until [#56892](https://github.com/vllm-project/vllm/issues/56892) is resolved. Use eager mode only if necessary; consider `--disable-cuda-graphs` as workaround.  
- **For developers using AMD ROCm**: Expect better performance from Qwen3.8 and Muse Spark models on MI355X and RDNA4 GPUs — track [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575), and [#64018](https://github.com/vllm-project/vllm/issues/64018) for updates.  
- **For tool-call-heavy apps**: Avoid tool names with special tokens (e.g., `<|end|>`) in `gpt-oss`-based workflows — this has been fixed but may still affect older versions.  
- **For production deployment**: Enable `--moe-backend flashinfer_cutedsl` on Hopper GPUs for faster MoE inference; monitor KV offload metrics like `vllm:kv_offload_cpu_chunk_idle_before_evict_seconds` to tune CPU tiering strategies.  

> ✅ *Recommendation*: Update to latest nightly builds to benefit from MoE fixes, CUDA graph stability, and improved offload telemetry. Test critical workflows on multi-TP configurations ahead of scaling.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-11-18

---

### **Today's Highlights**  
SGLang continues to advance its multi-architecture support with major progress on AMD ROCm (MI355X) and NPU (Ascend/Mooncake) integration, particularly for Kimi-K3.1 and Mistral-Large-4. Critical stability fixes address CUDA coredumps, decode NaNs in FP16, and macOS CPU device failures. The roadmap for SGLang 1.0 is gaining focus, emphasizing API stability and backward compatibility.

---

### **Releases & Breaking Changes**  
None. No new releases reported in the last 24 hours. However, **SGLang 1.0** is now actively tracked in [#50045](https://github.com/sgl-project/sglang/issues/50045), signaling a shift toward stabilization: silent config changes will be replaced with explicit errors, and a formal compatibility policy for the 1.x series will be defined. Upgrades from v0.5.x may require configuration adjustments.

---

### **New Model & Hardware Support**  
- ✅ **AMD ROCm (gfx950)**: Full-stack optimizations for `Qwen3.8-27B-Quark-AWQ-MXFP4` and `DeepSeek-V4.1-Flash` on MI355X ([#49324](https://github.com/sgl-project/sglang/issues/49324), [#49327](https://github.com/sgl-project/sglang/issues/49327)).  
- ✅ **NPU / Ascend**: Added full support for **Kimi-K3.1** with DSA sparse attention path ([#48420](https://github.com/sgl-project/sglang/pull/48420)), including hybrid KDA linear attention and MXFP4 MoE.  
- ✅ **Mooncake (Ascend/NPU)**: Transport layer abstraction completed via PR [#46460](https://github.com/sgl-project/sglang/pull/46460), enabling future engine integrations.  
- ✅ **Intel XPU**: EPD multimodal encoder path now supports Intel XPU ([#47961](https://github.com/sgl-project/sglang/pull/47961)).  
- ✅ **Mistral-Large-4**: Added model support with native 1M-context YaRN, MLA+DSA sparse attention, and bundled DSPARK draft head ([#47271](https://github.com/sgl-project/sglang/pull/47271)).

---

### **Performance & Optimization**  
- 🚀 **AMD ROCm**: QSA score kernel optimized with grouped Triton kernel on MI355X, improving decode throughput under high concurrency ([#50702](https://github.com/sgl-project/sglang/pull/50702)).  
- ⚙️ **CUDA Graphs**: Prefill CUDA graphs enabled for FlashInfer CuTe DSL MoE and MegaMoE models on Blackwell, enhancing e2e latency ([#50684](https://github.com/sgl-project/sglang/pull/50684)).  
- 🔥 **Beam Search**: Trie-constrained beam search speedup on SM120 (RTX PRO 6000) via kernel rework ([#49429](https://github.com/sgl-project/sglang/pull/49429)).  
- 💡 **Weight Cache**: `vmm_fd` transport added as placeholder for IPC-based weight sharing ([#46953](https://github.com/sgl-project/sglang/pull/46953)), enabling future off-node weight serving.

---

### **Stability & Regressions**  
- 🔴 **Critical Crash**: `decode_attention_fwd` returns `NaN` in FP16 when `q*k` product exceeds 65504 — affects MHA models on SM90 (Hopper). Reported in [#51095](https://github.com/sgl-project/sglang/issues/51095); fix pending.  
- 🔴 **CUDA Coredump Storm**: Auto-collected coredumps from CI (`pr-test.yml`) indicate widespread instability; 380 comments in [#26340](https://github.com/sgl-project/sglang/issues/26340) — root cause likely in low-level kernel or memory handling.  
- 🔴 **Decode Regression**: v0.5.22 → v0.5.23 upgrade causes **33–45% per-step decode latency increase** at concurrency 12 on H20-3e (SM90), impacting DSPARK speculative decoding ([#49336](https://github.com/sgl-project/sglang/issues/49336)).  
- 🟡 **macOS CPU Failure**: `--device cpu` fails due to `lscpu` runtime error on macOS ([#50915](https://github.com/sgl-project/sglang/issues/50915)); workaround needed for local dev.  
- 🟡 **Speculative Decoding Confusion**: Non-intrusive dumps cannot distinguish draft vs target model (both labeled `TARGET_VERIFY`) — impacts debugging ([#50087](https://github.com/sgl-project/sglang/issues/50087)).

---

### **What This Means for Application Developers**  
- **Expect increased complexity in multi-backend deployment**: With growing support for ROCm, NPU, and Intel XPU, ensure your app’s inference pipeline handles backend-specific behaviors (e.g., memory layout, quantization). Use `--dp-rank-policy least_tokens` ([#51147](https://github.com/sgl-project/sglang/pull/51147)) for better KV balance across ranks.  
- **Avoid v0.5.23 if using DSPARK on Hopper**: The 33–45% regression could severely impact throughput — consider pinning to v0.5.22 until fixed.  
- **Monitor for NaN outputs in FP16**: If running MHA models on Hopper, validate model inputs to avoid `q*k` overflow.  
- **Prepare for SGLang 1.0**: Expect stricter validation of config settings and potential breaking changes. Audit your codebase now for deprecated flags — many are being removed in [#51074](https://github.com/sgl-project/sglang/pull/51074).  
- **Leverage new models and hardware**: Try `Mistral-Large-4` and `Kimi-K3.1` on AMD/NPU for high-throughput, low-latency agent workloads with speculative decoding.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-18**

---

### **1. Today's Highlights**  
The latest updates focus on AMD GPU performance tuning, particularly for GCN and RDNA3 architectures, with improvements to `stream_k` in HIP and optimizations for Flash Attention on Vulkan. New support for Qwen3-TTS ICL/reference mode and Kokoro TTS adds advanced speech synthesis capabilities, while kernel-level fixes address critical correctness issues in MoE and quantized inference paths.

---

### **2. Releases & Breaking Changes**  
No new releases were published today. However, the following changes are notable:
- **`b12496` (HIP/GCN)**: Enables `stream_k` on AMD GCN GPUs after testing confirms no performance gain on CDNA — removes a TODO and cleans up code.
- **`b12493`**: Switches F32 CUDA kernels to use implicit GEMM conv2d path, significantly improving large-channel convolution performance (previously fell back to slow naive direct convolution).
- **`b12489`**: Enforces HTTP 400 error when both `grammar` and `ignore_eos` are enabled in server mode — prevents undefined behavior during sampling.
- **`b12488`**: Disables quantized matvec fusion on Pascal GPUs due to instability; this may affect older NVIDIA hardware performance.

🔗 [GitHub Commit b12496](https://github.com/ggml-org/llama.cpp/commit/b12496) | [Commit b12493](https://github.com/ggml-org/llama.cpp/commit/b12493) | [Commit b12489](https://github.com/ggml-org/llama.cpp/commit/b12489)

---

### **3. New Model & Hardware Support**  
- ✅ **Qwen3-TTS ICL/Reference Mode**: Added full support via `mtmd` backend (PR #32438), enabling context-aware text-to-speech generation.
- ✅ **Kokoro TTS Integration**: Added G2P template support and `tts_dict` for improved phoneme mapping (PR #32413).
- ✅ **OpenCL A7 DP4A Bin Kernels**: New optimized binary GEMM kernels for Q4_0, Q4_K, Q5_K, Q6_K, and Q8_0 on Apple A7 GPUs (PR #32510).
- ✅ **AMD RDNA3 Vulkan Fix**: Driver bug workaround disables flip-direct Flash Attention path on Windows (PR #32415).

🔗 [PR #32438](https://github.com/ggml-org/llama.cpp/pull/32438) | [PR #32413](https://github.com/ggml-org/llama.cpp/pull/32413) | [PR #32510](https://github.com/ggml-org/llama.cpp/pull/32510) | [PR #32415](https://github.com/ggml-org/llama.cpp/pull/32415)

---

### **4. Performance & Optimization**  
- **CUDA**: 
  - `few-row MMQ` now supports MUL_MAT_ID dispatch (PR #32065), improving small-token throughput on DGX Spark.
  - `block reductions` used in whole-row pool_1d improves memory coalescing (PR #31855).
  - Fastdiv applied to conv2d patch indexing boosts long-reduction performance by up to **1.6x** (PR #32492).
- **Vulkan**: 
  - Reduces INT8 MMQ performance gap between AMDVLK and RADV drivers (~15% improvement) through shader tuning (PR #32395).
- **SYCL**: 
  - Grouped XMX GEMM optimized by avoiding SLM staging (PR #31428) — reduces memory traffic and improves bandwidth utilization.
- **MoE**: 
  - PR #32504 introduces MMQ usage for MoE on V100s where tensor cores are FP16-only but not int8-capable — addresses known performance regression.

🔗 [PR #32065](https://github.com/ggml-org/llama.cpp/pull/32065) | [PR #31855](https://github.com/ggml-org/llama.cpp/pull/31855) | [PR #32492](https://github.com/ggml-org/llama.cpp/pull/32492) | [PR #32395](https://github.com/ggml-org/llama.cpp/pull/32395) | [PR #31428](https://github.com/ggml-org/llama.cpp/pull/31428) | [PR #32504](https://github.com/ggml-org/llama.cpp/pull/32504)

---

### **5. Stability & Regressions**  
- 🔴 **Critical**: `server: 400 error on grammar + ignore_eos` (Issue #32377) — previously caused crashes; now properly rejected at request time.
- 🔴 **GPU Crash**: Vulkan FA prefill crashes on RDNA3/Windows due to driver shader compiler bug (Issue #32353); fixed via PR #32415.
- 🔴 **Memory Leak**: Reported on dual Intel B70 SYCL backend with `-sm tensor` (Issue #27845, 29 comments); remains unconfirmed.
- 🟡 **Nondeterministic logprobs**: On SYCL iGPU + MoE models, even with seed set (Issue #31206); under investigation.
- 🟡 **All-NaN logits**: Observed on Radeon 680M with Vulkan (Issue #31509); resolved temporarily by disabling integer dot product.
- 🟡 **Model download corruption**: HF downloader not router-aware causes race conditions when multiple profiles update same model (Issue #32104).

🔗 [Issue #32377](https://github.com/ggml-org/llama.cpp/issues/32377) | [Issue #32353](https://github.com/ggml-org/llama.cpp/issues/32353) | [Issue #27845](https://github.com/ggml-org/llama.cpp/issues/27845) | [Issue #31206](https://github.com/ggml-org/llama.cpp/issues/31206) | [Issue #31509](https://github.com/ggml-org/llama.cpp/issues/31509) | [Issue #32104](https://github.com/ggml-org/llama.cpp/issues/32104)

---

### **6. What This Means for Application Developers**  
- **For edge/TTS apps**: Leverage new Qwen3-TTS and Kokoro integration for low-latency, high-fidelity voice agents — especially useful for real-time transcription or interactive assistants.
- **For multi-GPU deployments**: Use `--n-cpu-moe` with CPU offloading (PR #20596) and hybrid tensor/layer mode prototype (PR #32508) to scale MoE inference efficiently.
- **For production stability**: Avoid `grammar` and `ignore_eos` together unless you’re handling errors explicitly — server now enforces 400 responses.
- **For AMD users**: Enable `stream_k` on GCN GPUs (via HIP) and expect better consistency on RDNA3 systems after recent Vulkan patches.
- **For developers using custom tools**: Be cautious with `namespace` and `web_search` tool types — they’re silently dropped in Responses API (Issue #24295).

> ✅ **Recommendation**: Update to `b12496+` if using AMD ROCm/HIP or Vulkan, especially on RDNA3 systems. Monitor PR #32504 for future V100 MoE improvements.

🔗 [llama.app](https://llama.app) | [GitHub Attestations](https://github.com/ggml-org/llama.cpp/attestations)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-18**

---

### **1. Today's Highlights**  
The Ollama project continues to strengthen its low-level inference engine with critical improvements in memory management, GPU backend robustness, and model serving efficiency. Key developments include a fix for incorrect VRAM accounting that was causing model eviction and improper GPU splitting (#19632), and enhanced support for Metal (MLX) runners with graceful shutdown and persistent conversation caching (#19744, #19745). New community integrations highlight growing ecosystem adoption, particularly in productivity tools like RuneTranslate and AITerm.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **Intel NPU (via OpenVINO)**: Feature request (#19535) emphasizes demand for Intel Core Ultra NPU support on AI PCs, with users noting current models fall back to CPU despite NPU availability.
- **Ascend NPU (CANN backend)**: Proposal submitted (#19735) to enable CANN build and device discovery, leveraging existing llama.cpp support.
- **AMD Radeon RX 6750 XT**: Still unsupported; users report initialization failure even with `HSA_OVERRIDE_GFX_VERSION=gfx1031` (#6003).
- **Vulkan on Intel IGPUs**: PR #19568 enables Vulkan by default for qualifying Intel Ultra Series GPUs (MTL+), with driver and RAM requirements.
- **New model integration**: PPLX Decider v1.3 added to MLX runner via #19734, supporting chunked decision protocols and image-based queries.

---

### **4. Performance & Optimization**  
- **VRAM Accounting & GPU Splitting**: Critical fix in #19632 resolves multiple issues where models were incorrectly evicted or split across GPUs due to inaccurate memory tracking — directly improving stability and throughput.
- **Batch Sizing for Decision Models**: PR #19743 adjusts batch sizing for non-causal models like `d1-2B`, preventing misleading "context length" errors by aligning with actual context limits instead of fixed 512-token batches.
- **Streaming Buffer Growth**: PR #19736 introduces on-demand buffer expansion for streaming responses, reducing initial memory allocation from 8MB to just enough for small streams while preserving upper limit.
- **Prompt Processing Speed**: Issue #19747 reports 13x slower prompt processing on RX 5700 XT (RDNA1) with Vulkan vs upstream llama.cpp — indicating potential optimization gaps in Ollama’s Vulkan kernel path.

---

### **5. Stability & Regressions**  
- **High Severity**:  
  - `tensor blk.0.ssm_beta.weight not found` error when loading custom models via llama.cpp (v0.9.0-dev) — blocks inference entirely (#19733).  
  - `glm-ocr` model fails to terminate generation after EOS — potentially causing infinite loops (#19738).  
- **Medium Severity**:  
  - `qwen tool call parsing failed` due to XML syntax error (unexpected EOF) — impacts agentic workflows (#14834).  
  - `listen tcp 127.0.0.1:11434: bind: address already in use` — common port conflict issue requiring user intervention (#19712).  
- **Build Failures**:  
  - GCC 15 compilation fails due to missing `<cstdint>` in `llama-mmap.h` — strict standard compliance issue (#19714).  
- **Fixes in Progress**:  
  - #19743 addresses d1-2B batch size regression.  
  - #19744 and #19745 implement graceful shutdown and state persistence for MLX runners.

---

### **6. What This Means for Application Developers**  
- **Avoid runtime crashes**: Be cautious with `glm-ocr` and `qwen` tool calling until fixes land; validate output handling for XML/JSON structure consistency.
- **Optimize local inference**: Use `OLLAMA_VULKAN=1` only on tested hardware (e.g., RDNA2+ AMD); expect degraded performance on older RDNA1 cards like RX 5700 XT.
- **Memory-aware design**: Leverage improved MLX runner features (#19744–#19745, #19677) to reduce redundant prompt processing and improve state retention under memory pressure.
- **Future-proof integrations**: Monitor Intel NPU and Ascend CANN support requests — these represent strategic shifts toward heterogeneous AI acceleration beyond NVIDIA/AMD.
- **CI reliability**: If contributing, note the ongoing hardening of GitHub Actions workflows (#19741) to prevent flaky builds.

> 🔗 [View Issues](https://github.com/ollama/ollama/issues) | [View PRs](https://github.com/ollama/ollama/pulls)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **1. Today's Highlights**  
LiteLLM’s latest release cycle (v1.111.0-rc.1) introduces critical security and stability improvements, including support for salt key rotation to mitigate debug logging leaks—addressing a high-priority production concern raised in Issue #12448. Meanwhile, ongoing work on Rust-based database backends (PRs #52170, #52173) signals a major architectural shift toward improved auth performance and scalability.

---

### **2. Releases & Breaking Changes**  
- **`v1.111.0-rc.1` (Release Candidate)**: Introduces experimental `salt_key_rotations` support (mirroring existing `master_key_rotations`) to prevent credential exposure via debug logs. Verify with:  
  ```bash
  cosign verify \
    --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com \
    ghcr.io/berriai/litellm:v1.111.0-rc.1
  ```  
  [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.1)

- **`v1.110.0`**: Stability patch; no breaking changes noted.  
  [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.110.0)

- **LTS Update**: `v1.108.11` (LTS) now available. Use `ghcr.io/berriai/litellm:lts` to auto-upgrade to the latest stable patch.  
  [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.108.11)

> ✅ **Migration Note**: Users relying on `config.yaml` in OpenAPI docs should note its absence in recent versions (Issue #16623); use `/config` endpoint instead.

---

### **3. New Model & Hardware Support**  
No new models or hardware backends announced today. However, PRs indicate progress toward native **Rust-powered Vertex AI / Anthropic `/v1/messages` routing** (PR #52314), which will improve efficiency for Google Cloud and Claude model users by offloading Python logic.

---

### **4. Performance & Optimization**  
- **Rust Database Migration (WIP)**: Core auth workflows (user, end user, budget) are being migrated from Prisma to SQLx-backed Rust repositories (PRs #52170, #52173). Expected benefits:
  - Eliminates O(n²) sync overhead during config reloads (fixes Issue #43922).
  - Reduces event loop blocking by moving heavy auth checks out of Python.
- **Streaming Efficiency**: Fixes to `stream_chunk_builder` (Issue #50893) and `fallback_stream_wrapper` (Issue #51936) reduce memory bloat and GC pressure during long-running streams.
- **Cache Key Optimization**: Avoids costly stringification of large payloads (e.g., base64 images) in cache key computation (Issue #51935).

---

### **5. Stability & Regressions**  
Critical issues reported today:

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| 🔴 High | [#52284](https://github.com/BerriAI/litellm/issues/52284) | Redis read replica timeout causes permanent DB unavailability; proxy fails to fall back to writer | ❌ Pending |
| 🔴 High | [#52247](https://github.com/BerriAI/litellm/issues/52247) | Proxy crashes at startup if DB uses `SQL_ASCII` encoding | ❌ Pending |
| 🟡 Medium | [#50905](https://github.com/BerriAI/litellm/issues/50905) | Audit logs return 500 due to JSON stringified `before_value` post-v1.108.0 | ⚠️ Partial fix in PR #52425 |
| 🟡 Medium | [#52362](https://github.com/BerriAI/litellm/issues/52362) | Budget reservation not released on abandoned streamed requests → false `budget_exceeded` | ⚠️ In review |

> ⚠️ **Action Required**: Avoid `SQL_ASCII` databases; upgrade to `UTF8` immediately.

---

### **6. What This Means for Application Developers**  
- **Security**: Enable `salt_key_rotations` in v1.111.0-rc.1 to prevent master/salt key leaks in debug logs—critical for production deployments.
- **Reliability**: If using PostgreSQL with `SQL_ASCII`, migrate to `UTF8` immediately to avoid startup crashes.
- **Scalability**: Monitor upcoming Rust-based auth changes—expect faster key validation and reduced latency under load.
- **Stream Handling**: Be cautious with long-running streaming calls; ensure clients handle disconnects gracefully to avoid budget drift (Issue #52362).
- **Enterprise Users**: The removal of `enable_projects_ui` toggle (PR #49391) means Projects are now enabled by default in the Admin UI—adjust access policies accordingly.

> 💡 **Pro Tip**: Use `ghcr.io/berriai/litellm:lts` for production stability and auto-update to the latest LTS patch.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-11-18**

#### **1. Today's Highlights**  
The latest `v0.1.919-beta` release introduces **computer use (beta)** with full MCP integration for Unity, Unreal Engine, Blender, and Roblox—enabling local models to interact directly with desktop apps. This update also adds support for **MiniMax-H3-Image** in GGUF, FP8, and INT8 formats with LoRA training, alongside a redesigned model picker and UI refinements. Meanwhile, the Studio team continues to enhance UX with improved model aliasing, context management, and chat scheduling features.

> 🔗 [GitHub v0.1.919-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.919-beta)

---

#### **2. Releases & Breaking Changes**  
- **`v0.1.919-beta`**: Introduces **computer use (beta)** via MCP integrations (Unity, Unreal, Blender, Roblox).  
- **Model Picker Redesign**: New UI for selecting models with better layout and visibility.
- **API Provider Compaction Policy Loss**: A regression reported in #18189 indicates API/provider connections no longer retain the same compaction policy as local models (e.g., evict whole turns + searchable archive), potentially impacting long-context handling.

> 🔗 [Issue #18189](https://github.com/unslothai/unsloth/issues/18189) | 🔗 [Release Notes](https://github.com/unslothai/unsloth/releases/tag/v0.1.919-beta)

---

#### **3. New Model & Hardware Support**  
- **MiniMax-H3-Image**: Now supports **GGUF**, **FP8**, and **INT8** quantizations, with full **LoRA fine-tuning** capability.  
- **AMD ROCm (Linux/Windows)**: Continued improvements; however, users report GPU monitor showing `0.0% utilization` despite active workload (#18005).  
- **Apple MLX (macOS 27.1)**: Vision models like Gemma 4 26B MLX show issues with `<unused6226>` tokens (#15473).  
- **Wayland (Linux)**: Computer use remains disabled on Wayland sessions due to window access restrictions (#18221).

> 🔗 [Issue #15473](https://github.com/unslothai/unsloth/issues/15473) | 🔗 [Issue #18221](https://github.com/unslothai/unsloth/issues/18221) | 🔗 [PR #18245](https://github.com/unslothai/unsloth/pull/18245)

---

#### **4. Performance & Optimization**  
- **FLUX.3 Klein Base**: Per-step speed improves by **3.3% on L4** and **1.9% on A100**, with now-bit-identical rendering across processes.  
- **KV Cache Management**: PR #18231 highlights a hard limit of `MAX_TOTAL_MODEL_IMAGES = 8` in `mcp_images.py`, leading to cache invalidation after ~8 computer use calls—indicating potential scalability bottlenecks.  
- **Context Slider UX**: The context slider is now being repositioned into its own row (#18235) to avoid UI clutter and improve usability at narrow screen widths.

> 🔗 [PR #18245](https://github.com/unslothai/unsloth/pull/18245) | 🔗 [Issue #18231](https://github.com/unslothai/unsloth/issues/18231) | 🔗 [PR #18235](https://github.com/unslothai/unsloth/pull/18235)

---

#### **5. Stability & Regressions**  
- **Critical Regression (UI Lag)**: Users report severe lag and model loading failures post-update in `v0.1.918-beta` and `v0.1.919-beta` (#18002, #18063). One user was forced into a smaller Gemma E2B model instead of their last-used Gemma-4-26B-A4B.  
- **Crash on macOS After Update**: Model loading fails and UI becomes unresponsive (#18002).  
- **OAuth Consent Loop**: Even after token refresh, users are prompted for consent repeatedly when reconnecting to MCP servers (#18164, fixed in #18203).  
- **GPU Monitor Misreporting**: On Windows ROCm, GPU utilization and temperature remain `0.0` and `null` despite visible load (#18005).  
- **NaN in VAE Decode (ROCm)**: Image generation fails due to NaN values during final VAE decode under half-math default (#18016).

> 🔗 [Issue #18002](https://github.com/unslothai/unsloth/issues/18002) | 🔗 [Issue #18063](https://github.com/unslothai/unsloth/issues/18063) | 🔗 [PR #18203](https://github.com/unslothai/unsloth/pull/18203) | 🔗 [Issue #18005](https://github.com/unslothai/unsloth/issues/18005)

---

#### **6. What This Means for Application Developers**  
- **Computer Use is Now Beta**: If building agent workflows involving app interaction (e.g., game scripting, automation), integrate with the new MCP framework—but expect stability risks and platform limitations (e.g., Wayland blocked).  
- **Model Aliasing & Launch Configs**: Use `model aliases` to expose multiple launch configurations (context length, KV cache type, speculative decoding) for a single GGUF model (#17885, #18217)—ideal for A/B testing or multi-mode inference.  
- **MCP OAuth State Management**: Avoid repeated consent prompts by ensuring your server’s OAuth metadata endpoint is correctly configured and cached (#18203).  
- **Fine-Tuning Workflow**: Consider requesting an **automatic `max_seq_length` setter** (#18236) to streamline dataset preprocessing and reduce manual overhead.  
- **Plugin Ecosystem**: The community is pushing for a **first-class Plugin/Integration Store** (#10801), signaling growing demand for extensible agent tooling—early adopters should prepare for future plugin-based architectures.

> 🔗 [Feature Request #10801](https://github.com/unslothai/unsloth/issues/10801) | 🔗 [Feature Request #18236](https://github.com/unslothai/unsloth/issues/18236) | 🔗 [PR #18217](https://github.com/unslothai/unsloth/pull/18217)

--- 

*Digest compiled from GitHub activity (2026-11-18). For real-time updates, follow [unslothai/unsloth](https://github.com/unslothai/unsloth).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*