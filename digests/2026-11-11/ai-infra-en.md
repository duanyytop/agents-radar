# AI Infrastructure Digest 2026-11-11

> Generated: 2026-11-11 02:12 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-11**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in late 2026 is characterized by intense specialization, rapid hardware acceleration, and a growing focus on agent-native workloads. Projects are diverging along architectural lines: high-performance serving engines (vLLM, SGLang) push the envelope on kernel-level optimizations for MoE, FP8/FP4 quantization, and distributed inference; local runtimes (llama.cpp, Ollama) prioritize cross-platform compatibility and multimodal support; gateways (LiteLLM) emphasize security, cost observability, and tooling integration; while fine-tuning platforms (Unsloth) refine UX for model deployment and agent orchestration. A clear trend toward *real-time, structured reasoning*—evidenced by system-one APIs, video input, and dynamic thinking controls—is reshaping how developers design agent applications.

---

### **2. Activity Comparison**

| Project        | Issues Open (Last 24h) | PRs Merged (Last 24h) | Release Status         |
|----------------|------------------------|------------------------|------------------------|
| vLLM           | 12                     | 8                      | None                   |
| SGLang         | 15                     | 7                      | None                   |
| llama.cpp      | 13                     | 5                      | Internal fixes only    |
| Ollama         | 9                      | 5                      | `v0.40.17-rc0` (stable) |
| LiteLLM        | 11                     | 6                      | `v1.110.0-rc.1`, `v1.109.0`, `v1.108.5` (LTS) |
| Unsloth        | 6                      | 4                      | None                   |

> ✅ **Key Insight**: LiteLLM leads in release velocity with multiple tagged versions (including security-critical updates), while vLLM and SGLang show higher issue volumes indicating active stability challenges—particularly around multi-node scaling and backend crashes.

---

### **3. Model Support Race**

| New Model / Architecture       | Supported By               | Notes |
|-------------------------------|----------------------------|-------|
| **Kimi-K3 / Kimi-K3.1 Vision** | vLLM, SGLang, Ollama, Unsloth | Full metadata/image support in vLLM/SGLang; Ollama adds video input via MLX |
| **Qwen3.8-Flash-Next (UD 3.1)** | vLLM, SGLang, Unsloth         | Unsloth reports ~74% draft acceptance drop vs. older heads — potential regression |
| **DeepSeek-V4.1-Flash**       | vLLM, SGLang                 | Both enable FP8 KV cache on ROCm; SGLang adds sparse MLA |
| **Mistral-Large-4 (MoE, DSA)** | SGLang                       | First project to ship full MoE + DSA + vision support |
| **ZONOS3-Mini TTS**           | llama.cpp                    | New addition in `mtmd` ecosystem |
| **Nemotron 3.5 Bolt 74B-A9B**  | Ollama                       | Full MLX support with speculative decoding |
| **System One Decision Models**| Ollama                       | Experimental `/v1/systemone` format for structured reasoning |

> 🏆 **Leaderboard**:  
> - **SGLang** leads in cutting-edge model architecture support (MoE, DSA, multimodal).  
> - **Ollama** wins in real-world agent readiness with video input, TTS, and decision API experiments.  
> - **vLLM** maintains edge in AMD/ROCm optimization depth and performance tuning.

---

### **4. Performance Frontier**

| Optimization Focus          | Leading Projects                          | Key Developments |
|-----------------------------|------------------------------------------|------------------|
| **KV Cache Efficiency**     | vLLM, SGLang, llama.cpp                  | vLLM fixes redundant view re-derivation; SGLang introduces HiCache prefetching; llama.cpp optimizes flash attention |
| **Quantization & Kernel Tuning** | vLLM, SGLang, llama.cpp            | AITER’s FlyDSL GEMM (vLLM); FP4/FP8 ASM (SGLang); fused Q8_0/Q4_0 dequant (llama.cpp) |
| **Speculative Decoding**    | vLLM, SGLang, Ollama                     | vLLM fuses Markov sampling; Ollama exposes metrics; SGLang has critical fa4 crash on SM120 |
| **Distributed Serving**     | vLLM, SGLang                             | vLLM improves MoE DP alignment; SGLang suffers from `DFlash` collapse at TP > 1 |
| **Batching & Throughput**   | SGLang, vLLM                             | SGLang uses padded Q + group-strided launch; vLLM optimizes batch-invariant GPTQ |

> 🔥 **Hotspots**:  
> - **AMD ROCm (gfx950/Mi355X)**: vLLM and SGLang both aggressively optimize for MXFP8, FP8, and sparse MLA.  
> - **Blackwell (SM120)**: SGLang faces severe stability issues (`fa4` crash), highlighting risk in early adoption.  
> - **Multi-modal inference**: Video, image, and audio support are now table stakes—Ollama and Unsloth lead in integration maturity.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role in Stack                              | Differentiator |
|---------------|-----------------------------------|--------------------------------------------|----------------|
| **vLLM**      | Inference Engine                  | High-throughput, low-latency serving       | Kernel-level tuning, MoE, P/D disaggregation |
| **SGLang**    | Inference Engine + Gateway        | Unified engine with rich scheduling & tools| HiCache, Mooncake, hybrid offload, diffusion |
| **llama.cpp** | Local Runtime                     | CPU/GPU/NPU-local inference                | Lightweight, embedded, Vulkan/SYCL support |
| **Ollama**    | Gateway + Local Runtime           | Developer-friendly CLI + API gateway       | Video input, UI thinking toggle, MLX runner |
| **LiteLLM**   | LLM Gateway / Routing Layer       | Multi-provider routing, cost tracking      | Security hardening, stream handling, guardrails |
| **Unsloth**   | Fine-tuning Studio + Agent UX     | Model deployment, agent workflow builder   | Reverse proxy security, PDF export, theme polish |

> 💡 **Strategic Implication**:  
> - **Engineers building scalable inference clusters**: vLLM and SGLang remain top choices.  
> - **Developers building local agents or RAG systems**: Ollama + Unsloth offer superior UX and multimodal readiness.  
> - **Enterprises managing multi-vendor LLM stacks**: LiteLLM is essential for cost control and reliability.

---

### **6. Trend Signals**

#### 🔍 **Emergent Industry Trends**
1. **Agent-Centric Infrastructure**:  
   - Dynamic "thinking" toggles (Ollama), structured output formats (`systemone`), and tool-call guardrails (LiteLLM) signal a shift from pure text generation to *reasoning-aware* systems.
   
2. **Security as Core Infrastructure**:  
   - The `litellm==1.107.0` credential-stealer incident underscores that **package integrity is non-negotiable**. Signed images, LTS tags, and immediate patching are now baseline expectations.

3. **Hardware-Specific Optimization Is Now Standard**:  
   - AMD ROCm, Intel XPU, Blackwell SM120, and integrated GPUs (Radeon 780M) are no longer niche—they’re central to performance claims. Projects must validate across diverse hardware.

4. **Multimodality Is Mature Enough for Production**:  
   - Video input (Ollama), image metadata (vLLM), and TTS (llama.cpp) are now stable features—not experimental. This enables rich local RAG and agent workflows.

5. **Performance Trade-offs Are Visible**:  
   - High-severity regressions in speculative decoding (llama.cpp), KV cache correctness (SGLang), and draft acceptance rates (Qwen3.8-Flash-Next UD 3.1) reveal that **optimization often comes with hidden costs**.

#### 📌 **What Application Developers Should Watch**
- **Avoid v0.5.23+ of SGLang on Hopper** until #49336 is fixed — expect 33–45% decode latency increase.
- **Do not use `fa4` on Blackwell (SM120)** — stick with Triton backend for GLM-5.3-Flash.
- **Upgrade immediately from `litellm==1.107.0`** — the package is compromised.
- **Test speculative decoding behavior carefully**, especially on quantized models (llama.cpp, vLLM).
- **Monitor GPU memory pressure** — HiCache + Mooncake hit rate drops under load; adjust buffer thresholds proactively.

---

> ✅ **Final Recommendation**:  
> Choose your stack based on **workload type**:  
> - **High-scale inference**: vLLM or SGLang (with caution on SM120/ROCm).  
> - **Local agent development**: Ollama + Unsloth (for multimodal + UX).  
> - **Multi-provider routing & security**: LiteLLM (with `lts` tag).  
> - **Edge/CPU-only deployment**: llama.cpp.  

Stay vigilant—performance gains are increasingly tied to **hardware-specific trade-offs and security hygiene**.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-11-11**

#### **1. Today's Highlights**  
The vLLM project continues to deepen its support for AMD ROCm platforms, with multiple performance optimization efforts targeting Qwen3.8 and MiniMax-M3.1 models on gfx950/Mi355X hardware. New PRs focus on kernel-level tuning (e.g., AITER’s FlyDSL GEMM for MXFP8), improved P/D disaggregation resilience via NIXL reconnect logic, and enhanced EPD support for Kimi-K3 image metadata inputs. Additionally, a major RFC proposes switching the Rust regex engine in response parsing to support lookaround — critical for complex prompt handling.

#### **2. Releases & Breaking Changes**  
None. No new releases or breaking API/config changes reported in the last 24 hours.

#### **3. New Model & Hardware Support**  
- **AMD ROCm**: Active optimizations for `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` and `Qwen3.8-Flash-Next-Quark-MXFP4` on gfx950 / MI355X (`#57149`, `#59575`).  
- **Intel XPU**: CI tests enabled for `v1/engine` suites (`#66926`); `LMCacheMPConnector` test skipping added when `lmcache` not installed (`#66924`).  
- **Kimi-K3**: Metadata-only image input support in EPD (`#66925`), aligning with InferenceX presets (`#66433`).  
- **DeepSeek V4/V4.1**: FP8 KV cache support via sparse MLA on ROCm (`#66036`).  

#### **4. Performance & Optimization**  
- **ROCm GEMM Tuning**: AITER’s tuned FlyDSL GEMM now prioritized for MXFP8 linear kernels on gfx950 (`#65479`), improving throughput for MoE models.  
- **FlashInfer Optimizations**: Warp split-K BF16 GEMM and `ll_bf16` added to SM107 low-latency table for GLM-5.3 (`#65706`).  
- **Speculative Decoding**: DSpark draft norm + Markov sampling fused on NVIDIA SM100, reducing TPOT latency by ~4.4% (`#66764`).  
- **Batch-Invariant Mode**: Batch-invariant GPTQ linear now routed through Humming backend to avoid repeated unpacking (`#66838`).  
- **KV Cache Efficiency**: PRs address redundant K/V view re-derivation in attention backends (`#64572`) and first-boot KV cache size inconsistency (`#54383`).  

#### **5. Stability & Regressions**  
- **Critical**: `DFlash` acceptance collapses at TP > 1 for MiMo-V2.6-Flash-MOPD (`#66387`), blocking multi-node inference.  
- **High Severity**: `Qwen3.5-122B-A10B-FP8` accuracy drops after commit `0fae39a` (`#65906`), likely due to tokenizer or post-processing change.  
- **Moderate**: `MooncakeConnector` fails to re-fetch encoder embeddings after cache reset (`#66846`); fixed via local cache clear.  
- **Other**: `NIXL` connector stalls during sustained load due to lost peer connection (`#66795`); fix implemented with re-handshake logic.  

#### **6. What This Means for Application Developers**  
- **AMD Users**: Expect improved throughput on Qwen3.8 and MiniMax-M3.1 models on MI355X; monitor `#57149`, `#59575`, and `#65479` for stable builds.  
- **Multi-Node Deployments**: Use `--prefill-schedule-policy delayer` (`#65655`) to improve MoE DP alignment and reduce prefill contention.  
- **Agent/Tooling Workloads**: Update to latest vLLM if using Kimi-K3 or structured output; `#66925` enables cleaner image metadata handling.  
- **Production Stability**: Avoid `DFlash` with TP > 1 until `#66387` is resolved; consider pinning to pre-regression commits if accuracy is critical (`#65906`).  
- **Rust Parsing**: Watch for `#65959` — future updates may enable advanced regex features in response parsing.  

> 🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-11**

---

### **1. Today’s Highlights**  
The SGLang ecosystem continues to deepen its support for next-gen hardware, with critical performance and stability work advancing on **Blackwell (SM120)** and **ROCm (gfx950)** platforms. Major focus areas include fixing flaky CI infrastructure (#42752), resolving high-severity crashes in `fa4` attention on SM120 (#42012), and optimizing KV cache behavior under memory pressure (#47481). New PRs also expand AMD ROCm support for Qwen4-Exp and DeepSeek-V4.1-Flash.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **New model support**: Added `Mistral-Large-4` (`mistralai/Mistral-Large-4-1T-A52B`) with MoE, MLA, DSA sparse attention, and multimodal vision support via Pixtral. [PR #47271](https://github.com/sgl-project/sglang/pull/47271)  
- **AMD ROCm support expanded**:  
  - Added `--kv-cache-dtype auto` defaulting to `fp8_e4m3` on gfx950 (MI355X) via DSA backend. [PR #48996](https://github.com/sgl-project/sglang/pull/48996)  
  - Added `--hicache-mamba-size-gb` to control Mamba host pool size for hybrid models. [PR #47867](https://github.com/sgl-project/sglang/pull/47867)  
  - Enabled FP4 GEMM backend selection (`aiter`, `triton`) on ROCm. [PR #43360](https://github.com/sgl-project/sglang/pull/43360)  
- **Intel CPU**: Moved all PR test suites to SPR runners for better CPU binding and testing coverage. [PR #49488](https://github.com/sgl-project/sglang/pull/49488)

---

### **4. Performance & Optimization**  
- **DeepSeek-V4.1-Flash (SM120)**: Optimized mHC mix to run in BF16x3 for decode batches, reducing side-stream overhead. [PR #48456](https://github.com/sgl-project/sglang/pull/48456)  
- **AMD ROCm (gfx950)**:  
  - Faster decode MQA logits via padded Q + group-strided launch. [PR #48649](https://github.com/sgl-project/sglang/pull/48649)  
  - 12-head MLA decode and 8-token verify now use FP8-Q ASM. [PR #45320](https://github.com/sgl-project/sglang/pull/45320)  
- **HiCache & Mooncake**: Introduced prefetching of SSD-resident KV into DRAM while queued to reduce latency. [PR #49696](https://github.com/sgl-project/sglang/pull/49696)  
- **Diffusion**: Made conditioning cache eviction O(1) and configurable. [PR #49576](https://github.com/sgl-project/sglang/pull/49576)  
- **Kernel-level**: Optimized sparse MLA prefill for small heads on SM100. [PR #48891](https://github.com/sgl-project/sglang/pull/48891)

---

### **5. Stability & Regressions**  
- **Critical crash**: `fa4` attention backend crashes during CUDA graph capture on SM120 (RTX PRO 6000) with GLM-5.3-Flash. Triton is only stable backend. [Issue #42012](https://github.com/sgl-project/sglang/issues/42012)  
- **High-severity regression**: v0.5.22 → v0.5.23 upgrade causes **+33–45% per-step decode time** at concurrency 12 on Hopper (H20-3e). [Issue #49336](https://github.com/sgl-project/sglang/issues/49336)  
- **Cache correctness issue**: HiCache + Mooncake shows reproducible drop in prefix cache hit rate under L2/L3 pressure. [Issue #47481](https://github.com/sgl-project/sglang/issues/47481)  
- **Model-specific bugs**:  
  - GLM-4.7-Flash W4A16 compressed-tensors fails due to missing `kv_b_proj.weight`. [Issue #49369](https://github.com/sgl-project/sglang/issues/49369)  
  - Qwen4-Exp PLE embeddings incorrectly cast to FP8 despite config specifying BF16. [Issue #49493](https://github.com/sgl-project/sglang/issues/49493)  
  - `/v1/responses` streaming returns HTTP 200 instead of 400 for context-length-exceeded requests. [Issue #48557](https://github.com/sgl-project/sglang/issues/48557)  

*Note: No fix PRs have been merged for these issues yet.*

---

### **6. What This Means for Application Developers**  
- **Use caution with v0.5.23+ on Hopper**: If you rely on speculative decoding or high-concurrency inference, expect significant latency degradation—consider pinning to v0.5.22 until #49336 is resolved.  
- **Avoid `fa4` backend on Blackwell (SM120)**: Use Triton for production workloads with GLM-5.3-Flash until #42012 is fixed.  
- **Leverage new AMD optimizations**: For multi-modal agents on MI355X, enable `--kv-cache-dtype fp8_e4m3` and `--hicache-mamba-size-gb` to improve cache utilization and reduce latency.  
- **Monitor cache hit rates**: In high-load scenarios with HiCache + Mooncake, expect transient drops in hit rate; consider tuning buffer sizes or adjusting offload thresholds.  
- **Be cautious with tool-call parsing**: The updated `minicpm5` detector fixes XML parsing but may affect agent workflows using legacy tool-call formats. [PR #49222](https://github.com/sgl-project/sglang/pull/49222)  

Stay tuned to CI and issue trackers for resolution updates.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-11**

---

### **1. Today's Highlights**  
The latest updates focus on critical stability fixes for CUDA and SYCL backends, including a memory reservation reduction to prevent OOM errors on GPUs with unified memory (e.g., RTX 5090). Significant progress is also underway in speculative decoding correctness—particularly for quantized targets—while new support for Kimi K3.1 vision and ZONOS3-Mini TTS expands multimodal and voice capabilities.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were published in the last 24 hours. However, notable changes include:  
- **CUDA**: VMM pool reservation halved to 8 GB on combined-memory GPUs to avoid `cuMemAddressReserve` failures ([#30542](https://github.com/ggml-org/llama.cpp/pull/30542)).  
- **CUDA**: Graph compatibility checks skipped when reusing graphs to reduce redundant rebuilds ([#32004](https://github.com/ggml-org/llama.cpp/pull/32004)).  
- **CUDA**: Moved graph/stream state out of `common.cuh` to avoid full rebuilds on any change ([#32001](https://github.com/ggml-org/llama.cpp/pull/32001)).  

> 🔧 *Note: These are internal optimizations; no API or config changes require migration.*

---

### **3. New Model & Hardware Support**  
- ✅ **Kimi K3.1 Vision**: Added support via `mtmd` backend ([#31980](https://github.com/ggml-org/llama.cpp/pull/31980)).  
- ✅ **ZONOS3-Mini TTS**: Added as a new model in `mtmd` ecosystem ([#32020](https://github.com/ggml-org/llama.cpp/pull/32020)).  
- 🚧 **XDNA Backend**: Feature request open for hardware-specific backend support ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725)).  
- 🚧 **GLM5.3 (flash)**: Requested for future integration ([#27922](https://github.com/ggml-org/llama.cpp/issues/27922)).  
- 🚧 **Prism PQ2_0 (type 142) & PTQ1_0 (type 143)**: Support requested for Ternary-Bonsai-2 quantization formats ([#29058](https://github.com/ggml-org/llama.cpp/issues/29058)).

---

### **4. Performance & Optimization**  
- **CUDA**: Fused Q8_0/Q4_0 KV dequant into MMA flash-attention kernels reduces scratch memory use and improves bandwidth efficiency ([#31802](https://github.com/ggml-org/llama.cpp/pull/31802)).  
- **HIP/ROCm**: Fixed dynamic BLAS workspace allocation by introducing a fixed 32 MB workspace, eliminating per-call allocations and improving reliability ([#31838](https://github.com/ggml-org/llama.cpp/pull/31838)).  
- **SYCL**: Optimized device ID caching in `set_main_device` to avoid repeated mutex locks ([#32013](https://github.com/ggml-org/llama.cpp/pull/32013)).  
- **Vulkan**: Folded token verification and GQA head processing into single flash-attention row tiles to improve coalescing ([#30190](https://github.com/ggml-org/llama.cpp/pull/30190)) — WIP but promising for throughput gains.

---

### **5. Stability & Regressions**  
Critical issues reported today include:  
1. **Speculative Decoding Divergence** (`temperature=0`, quantized targets): Greedy output differs from vanilla run on Q4_K_M models ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618), 40 comments).  
2. **Segfault in Speculative Decoding** with Llama-3.1-405B-Instruct + draft model on CPU/GPU split ([#9949](https://github.com/ggml-org/llama.cpp/issues/9949), critical severity).  
3. **GPU Driver TDR Reset** on dual Intel Arc Pro B70 using SYCL + DFlash2 draft model ([#28778](https://github.com/ggml-org/llama.cpp/issues/28778)).  
4. **Memory Leak** with `-sm tensor` on dual Intel B70 SYCL backend during long conversations ([#27845](https://github.com/ggml-org/llama.cpp/issues/27845), 24 comments).  
5. **Vulkan Crash on Adreno 840** due to `vkGetDeviceFaultInfoEXT` failure during full offload of TQ1_0 model ([#30649](https://github.com/ggml-org/llama.cpp/issues/30649)).  

> ⚠️ *No PRs currently address these high-severity bugs. Developers relying on speculative decoding or Vulkan/SYCL backends should proceed with caution.*

---

### **6. What This Means for Application Developers**  
- **Use caution with speculative decoding on quantized models** — results may diverge from non-speculative runs until [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) is resolved.  
- **For large MoE models on SYCL**, expect severe performance degradation with `--cpu-moe -sm layer` on multi-GPU setups ([#31510](https://github.com/ggml-org/llama.cpp/issues/31510)); consider alternative split modes or GPU-only offloading.  
- **Leverage new TTS and vision models** like Kimi K3.1 and ZONOS3-Mini for agent applications requiring multimodal input/output.  
- **Enable `GGML_CUDA_POOL_DEBUG=1`** for detailed memory tracing during debugging ([#31919](https://github.com/ggml-org/llama.cpp/pull/31919)).  
- **Avoid full Vulkan offload on Adreno 840** until driver-level fixes are confirmed.  

👉 *Stay tuned for upcoming v0.9.0-dev builds incorporating these patches.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-11**

---

### **1. Today's Highlights**  
The latest release, `v0.40.17-rc0`, introduces critical improvements for model runner stability on Vulkan-based GPUs and enhances CLI resilience during restarts. Key progress includes full support for video input in MLX models via `/api/chat` and `/api/generate`, expanding multimodal capabilities. A new PR enables dynamic thinking controls in the UI by leveraging `capabilities` from `/api/show`, aligning UI behavior with API-level model features.

---

### **2. Releases & Breaking Changes**  
- **v0.40.17-rc0**: Released with several stability fixes:  
  - Improved ChatGPT CLI restore and graceful restart logic ([#19583](https://github.com/ollama/ollama/pull/19583))  
  - Vulkan backend now uses memory-mapped files (`mmap`) for integrated GPUs to reduce latency and improve resource sharing ([#19409](https://github.com/ollama/ollama/pull/19409))  
  - MLX runner now reports load progress and detects stalls more reliably ([#17834](https://github.com/ollama/ollama/pull/17834))  

> ⚠️ No breaking changes in this release; backward compatibility preserved.

---

### **3. New Model & Hardware Support**  
- ✅ **Video Input Support (MLX)**: Added native MP4/MOV clip support in LFM3-VL, LFM3-Omni, and Qwen3.5/3.6 models via existing `images` field in API calls ([#19348](https://github.com/ollama/ollama/pull/19348)).  
- ✅ **Nemotron 3.5 Bolt 74B-A9B**: Full MLX support added with per-layer expert config, LiLiCorr speculative decoding, and mixed-precision stacking ([#19229](https://github.com/ollama/ollama/pull/19229)).  
- ✅ **System One Decision Models**: Experimental support for `/v1/systemone` format via decision models (e.g., Liquid d1, Laya, Kev) — first steps toward structured reasoning APIs ([#19639](https://github.com/ollama/ollama/issues/19639)).  
- ✅ **AMD Radeon 780M Vulkan**: Regression fix confirmed in older versions (pre-0.32.10), but ongoing issues persist on newer builds — workaround recommended until patch lands ([#17748](https://github.com/ollama/ollama/issues/17748)).

---

### **4. Performance & Optimization**  
- 🔧 **Speculative Decoding Metrics**: Now exposed per-request via API and `--verbose` output, including drafted/accepted tokens — enabling accurate benchmarking of speedup vs. cost ([#19368](https://github.com/ollama/ollama/pull/19368)).  
- 📈 **Drafting Control**: `draft_num_predict=0` now disables speculative decoding entirely while preserving draft caches for future reuse — ideal for controlled performance testing ([#19391](https://github.com/ollama/ollama/pull/19391)).  
- 🔄 **Concurrent Generation (MLX)**: Enabled via `OLLAMA_NUM_PARALLEL` — allows multiple requests to share projection/FFW work, reducing first-token latency ([#19197](https://github.com/ollama/ollama/pull/19197)).  
- ⏱️ **Model Load Time**: MLX runner now binds listeners *before* model load, preventing premature timeouts during long loads ([#17834](https://github.com/ollama/ollama/pull/17834)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix/Workaround |
|--------|------|-------|----------------|
| Critical | Windows RTX 5090: Runner disconnects during tool calling → HTTP 500 /tokenize | [OPEN](https://github.com/ollama/ollama/issues/19439) | Unresolved; intermittent under high load |
| High | AMD Radeon 780M Vulkan: `ErrorDeviceLost` due to insufficient memory | [OPEN](https://github.com/ollama/ollama/issues/17748) | Fixed in v0.32.10; regression in v0.32.10+ |
| Medium | MLX KV-cache memory accumulation across requests (not released post-response) | [CLOSED](https://github.com/ollama/ollama/issues/17875) | Patched in v0.40.17-rc0 |
| Medium | Intel Iris Xe iGPU: `ErrorOutOfDeviceMemory` on qwen2.5:14b after v0.32.6 | [CLOSED](https://github.com/ollama/ollama/issues/18531) | Regression resolved in v0.32.6; unstable in later versions |
| Low | `ollama -v` shows misleading "Warning" messages even when no instance is running | [CLOSED](https://github.com/ollama/ollama/issues/19613) | Fixed in v0.40.17-rc0 |

> 💡 Note: Several GPU-specific regressions suggest deeper Vulkan driver interaction issues requiring cross-platform validation.

---

### **6. What This Means for Application Developers**  
- **Build robust agents using real-time reasoning**: The new UI toggle for "thinking" (via `capabilities.thinking`) enables granular control over reasoning layers without hardcoding model names — perfect for agent workflows that need conditional introspection ([#19648](https://github.com/ollama/ollama/pull/19648)).  
- **Support rich multimodal inputs**: With video input now available in MLX models, developers can build local RAG systems with visual context (e.g., video summaries, frame analysis).  
- **Tune inference performance precisely**: Use `draft_num_predict=0` and `OLLAMA_NUM_PARALLEL` to isolate speculative decoding impact or scale concurrency — crucial for latency-sensitive apps.  
- **Avoid silent failures**: Be aware of undocumented payload limits in `/api/chat` (e.g., ~32 MiB cap causing 400 errors) — implement client-side chunking or fallbacks ([#19597](https://github.com/ollama/ollama/issues/19597)).  
- **Prepare for system-level decisions**: As `/v1/systemone` gains traction, expect growing interest in lightweight, calibrated decision models for production-grade agents.

> 🔗 **Pro Tip**: Monitor `OLLAMA_KEEP_ALIVE` (default: 5 min) — users report it’s too short for deep thinking workflows ([#19624](https://github.com/ollama/ollama/issues/19624)); consider increasing it in long-running sessions.

---  
*Data source: github.com/ollama/ollama | Last updated: 2026-11-11*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-11**

#### **1. Today's Highlights**  
A critical security incident involving a malicious `litellm==1.107.0` package on PyPI and Docker Hub has been resolved: the compromised release was yanked, and all associated images (`latest`, `main-stable`, `main-latest`) have been removed. Meanwhile, ongoing work focuses on improving cost tracking accuracy, fixing stream handling in Anthropic-compatible endpoints, and enhancing guardrail support for MCP tools and regex flags.  

#### **2. Releases & Breaking Changes**  
- **v1.110.0-rc.1**, **v1.109.0**, **v1.108.5 (LTS)** released.  
- All Docker images are now signed with [cosign](https://docs.sigstore.dev/cosign/overview/) using the key from commit [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).  
- **Migration Note**: Users on `v1.107.0` must upgrade immediately due to a confirmed credential-stealer exploit ([Issue #47826](https://github.com/BerriAI/litellm/issues/47826)). Use `ghcr.io/berriai/litellm:lts` for stable LTS deployments.

#### **3. New Model & Hardware Support**  
- **Bedrock Knowledge Base Search Enhancement**: Supports image-based vector search via multimodal embeddings (PR [#51063](https://github.com/BerriAI/litellm/pull/51063)), returning image results instead of failing silently.  
- **Mistral Native Token Counting**: Added support for upstream token counting via Mistral’s official `/responses/input_tokens` endpoint (PR [#50653](https://github.com/BerriAI/litellm/pull/50653)).  
- **Vertex AI Labeling**: Proxy can now inject caller identity (key, team, org, project) into Vertex requests for granular Cloud Billing (PR [#50732](https://github.com/BerriAI/litellm/pull/50732)).

#### **4. Performance & Optimization**  
- **Stream Handling Improvements**:  
  - Streams now end at terminal event instead of waiting for upstream close (PR [#51033](https://github.com/BerriAI/litellm/pull/51033)), reducing client-side latency.  
  - SSE keepalive ping no longer blocks error propagation; failures are now properly signaled in stream body (PR [#49711](https://github.com/BerriAI/litellm/pull/49711)).  
- **Cost Accuracy**: Fixes ensure spend logs reflect actual costs even when upstream returns `usage.cost: 0` (PR [#48937](https://github.com/BerriAI/litellm/pull/48937)), and base model pricing is correctly applied regardless of `custom_llm_provider` (PR [#47908](https://github.com/BerriAI/litellm/pull/47908)).

#### **5. Stability & Regressions**  
- **High Severity**:  
  - `MidStreamFallbackError` not retried on Vertex AI (PR [#29808](https://github.com/BerriAI/litellm/pull/29808)) – fixed in v1.108.5+.  
  - Infinite loop on invalid requests (PR [#18060](https://github.com/BerriAI/litellm/pull/18060)) – addressed in recent releases.  
- **Medium Severity**:  
  - `tpm_limit` not rolling over with in-memory cache (PR [#47340](https://github.com/BerriAI/litellm/pull/47340)) – workaround: use Redis or manually reset keys.  
  - `reasoning_effort="none"` ignored on default-on Claude models (PR [#47924](https://github.com/BerriAI/litellm/pull/47924)) – fix pending.  
  - `tool_calls` dropped by Ollama backend (PR [#24091](https://github.com/BerriAI/litellm/pull/24091)) – patch available.

#### **6. What This Means for Application Developers**  
- **Security First**: Immediately update from `v1.107.0` to avoid credential theft. Use `lts` tag for production stability.  
- **Cost Tracking Reliability**: Expect accurate spend logging even with streaming and complex routing (e.g., `base_model` + `custom_llm_provider`).  
- **Tooling & Guardrails**: Enhancements to MCP tool handling and custom code guardrails (regex flags, sensitive data routing) improve agent safety and observability.  
- **Multi-Model Routing**: Use `vertex_ai/gemini-*` with `cache_control` safely—fixes prevent conversation reordering and system prompt loss (PR [#47046](https://github.com/BerriAI/litellm/pull/47046)).  
- **Streaming UX**: Clients (especially Claude Code) will receive timely errors and faster stream termination, improving responsiveness.

> ✅ **Recommended Action**: Audit proxy configuration for `tpm_limit`, `rpm_limit`, and `cost_breakdown` logic. Upgrade to `v1.108.5` or later. Monitor OpenTelemetry spans: `gen_ai.response.model` now reflects the actual model used (PR [#51029](https://github.com/BerriAI/litellm/pull/51029)).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-11**

---

### **1. Today's Highlights**  
The Unsloth team made significant progress in stabilizing core inference workflows and improving UX for local model deployment. Key PRs addressed critical UI/UX issues in Studio (e.g., model selector visibility, PDF export wrapping) and resolved long-standing bugs in reverse proxy support and GGUF weight placement tracking. A major fix was merged to prevent the desktop app from exposing seeded admin credentials through proxied requests.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases were published in the last 24 hours. No breaking changes or migration notes are active at this time.

---

### **3. New Model & Hardware Support**  
- ✅ **MiniMax-H3-Image** added to Studio’s image generation pipeline (PR #17453), supporting text-to-image and reference-based edits with up to 16 images.  
- ✅ **Yandex** integrated as a primary web search engine fallback tier (PR #17447), improving reliability during anti-bot throttling on DuckDuckGo.  
- ✅ **RPM package request** formally acknowledged (Issue #17445), signaling growing demand for Linux distribution packaging.  
- ⚠️ **Qwen3.8-Flash-Next UD 3.1 GGUFs** show ~74% draft acceptance drop vs. older MTP heads (Issue #17402); confirmation needed if 3.1-matched heads are planned.

---

### **4. Performance & Optimization**  
- 🔧 **Context window handling**: Studio now correctly aligns `max_tokens` with available context on vLLM and SGLang tool requests (PR #17426), preventing `context_length_exceeded` errors when prompt + max_tokens exceeds capacity.  
- 📦 **On-demand PDF dependency loading**: PyMuPDF and pymupdf4llm are now installed only when first used (PR #17206), reducing initial startup overhead.  
- 🧠 **Pipeline parallelism on CPU**: Ongoing investigation into MoE router aux loss divergence under gradient accumulation >1 (Issue #17054), indicating potential instability in distributed CPU training.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status | GitHub Link |
|--------|------|--------|------------|-------------|
| High | `404 Not Found` behind custom domains with `X-Forwarded-Host` (Cloudflare Tunnel) | Breaks secure reverse proxy setups | ✅ Fixed in PR #17435 | [PR #17435](https://github.com/unslothai/unsloth/pull/17435) |
| High | Admin password leaked via proxy-referenced pages | Security risk: credential exposure | ✅ Fixed in PR #17454 | [PR #17454](https://github.com/unslothai/unsloth/pull/17454) |
| Medium | Glass theme mangles UI on model card click | Visual corruption in Studio | ✅ Closed | [Issue #17417](https://github.com/unslothai/unsloth/issues/17417) |
| Medium | Repeated full prompt processing after tool use in Qwen hybrid models | Inefficient inference, context bloat | Open | [Issue #17015](https://github.com/unslothai/unsloth/issues/17015) |
| Low | Stray `</think>` rendered after OpenAI tool calls | Incorrect token leakage | ✅ Fixed in PR #17455 | [PR #17455](https://github.com/unslothai/unsloth/pull/17455) |

---

### **6. What This Means for Application Developers**  
- **Secure deployments**: Use `--api-only` mode with allowlisted reverse proxies (e.g., Cloudflare Tunnel) — ensure your setup includes host validation (PR #17435). Avoid exposing internal endpoints.
- **Model selection clarity**: Expect improved visibility of TTS/audio model choice above “Load model into” (PR #17443) and better search discoverability via capability tags (PR #17452).
- **Tool integration robustness**: Tool call handling is now more consistent — avoid manual `<think>` closing; let Studio manage it (PR #17455).
- **Quantization caution**: If using Qwen3.8-Flash-Next UD 3.1 GGUFs, be aware of reduced draft acceptance rates (~56–66%) compared to prior versions (Issue #17402); monitor for performance degradation in production.
- **Future-proofing**: Watch for upcoming RPM packages (Issue #17445) and consider contributing to language coverage (e.g., Ukrainian in imatrix calibration, Issue #17371).

> *For developers building agents or fine-tuned apps: prioritize testing with custom connections and reverse proxies, especially when integrating external tools or audio models.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*