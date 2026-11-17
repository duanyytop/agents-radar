# AI Infrastructure Digest 2026-11-17

> Generated: 2026-11-17 04:44 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-17**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in late 2026 is defined by rapid convergence across serving engines, local runtimes, and LLM gateways—driven by demand for high-throughput inference, multi-modal support, and agent-native execution. Projects are increasingly focused on hardware specialization (AMD ROCm/CDNA4, Intel NPU, Huawei CANN), distributed optimization (MoE offloading, extensible KV cache), and end-to-end agent enablement through MCP integrations and speculative decoding. A clear bifurcation is emerging: low-latency, edge-optimized runtimes like `llama.cpp` and `Unsloth` target local autonomy, while scalable, cloud-aligned systems like `vLLM`, `SGLang`, and `Ollama` prioritize throughput, stability, and multi-GPU orchestration.

---

### **2. Activity Comparison**

| Project       | Issues Open (Last 7d) | PRs Merged (Last 7d) | Release Status      |
|---------------|------------------------|------------------------|---------------------|
| **vLLM**      | 89                     | 132                    | v0.34.0 (stable)    |
| **SGLang**    | 67                     | 58                     | No new release      |
| **llama.cpp** | 53                     | 71                     | Builds b12453–b12441 |
| **Ollama**    | 42                     | 29                     | No new release      |
| **LiteLLM**   | 38                     | 41                     | v1.108.10 (patch)   |
| **Unsloth**   | 35                     | 48                     | v0.1.918-beta (beta) |

> ✅ *vLLM leads in both velocity and maturity; SGLang shows strong engineering momentum despite instability; Unsloth and llama.cpp are pushing frontier capabilities with active beta and build releases.*

---

### **3. Model Support Race**

| New Model / Architecture         | Supported By                          | Notes |
|----------------------------------|---------------------------------------|------|
| **Mistral Large 4**              | vLLM, Ollama (via proxy)              | vLLM adds native support; Ollama relies on LiteLLM gateway |
| **Kimi K2.5 / K3 Flash**         | vLLM, Unsloth                         | AMD-specific variants prioritized in vLLM; Unsloth enables GGUF + LoRA |
| **DeepSeek-V4.1-Flash (SM120)**  | vLLM (fixed), SGLang (crashes)         | vLLM stabilizes SM120 via CUDA graph fixes; SGLang still unstable |
| **Qwen3.8-2.4T-A95B / Flash-Next** | vLLM, llama.cpp (AMD-specific)      | vLLM leads with full ROCm optimization; llama.cpp targets gfx950 |
| **MiniMax-M3.1-Flash**           | vLLM                                  | First project to add this model |
| **Nemotron-3.5-Transcribe**      | vLLM                                  | Specialized audio transcription model added |
| **Ascend A3/A5 (NPU)**           | SGLang, Ollama                        | Both now support GLM-5.3-Flash via CANN/OpenVINO |
| **AMD RDNA3_5 / gfx1013**        | llama.cpp                             | Exclusive early access; vLLM & SGLang tracking |
| **Intel Core Ultra NPU**         | Ollama (feature request)              | Not yet implemented; major gap vs. AMD/Huawei |
| **Strata (MoE streaming, AMD-native)** | Unsloth (experimental)            | Emerging niche backend; not yet mainstream |

> 🏆 **Winner: vLLM** — leads in breadth of model coverage, especially for multimodal, large-context, and cutting-edge proprietary models.  
> 🔥 **Emerging Contenders**: `llama.cpp` (hardware diversity), `Unsloth` (agent integration), `Ollama` (ecosystem expansion).

---

### **4. Performance Frontier**

| Optimization Focus             | Leading Projects                     | Key Developments |
|-------------------------------|--------------------------------------|------------------|
| **Extensible KV Cache**       | vLLM (default)                       | Dynamic sizing post-warmup using free memory; reduces waste in long prompts |
| **MoE Expert Offloading**     | vLLM (RFC #38256), SGLang (tuning)   | vLLM enables async pipeline + GPU cache; SGLang faces regression risks |
| **Multi-GPU / Distributed Serving** | vLLM, SGLang, Unsloth               | vLLM: tensor parallelism; SGLang: HiCache under load; Unsloth: DDP/FSDP2 auto-selection |
| **Kernel-Level Optimization** | vLLM, llama.cpp, Unsloth             | vLLM: MXFP4 dequantization; llama.cpp: GDN MMA, split_k; Unsloth: CPU-based embedding serving |
| **Quantization Efficiency**   | llama.cpp (PTQ1_0/STQ1_0), vLLM (W4A16 non-determinism) | llama.cpp introduces ternary quant formats; vLLM warns against W4A16 for reproducibility |
| **Speculative Decoding**      | vLLM, SGLang, Ollama                 | All improving batching and verification; Ollama’s adaptive history reuse stands out |

> ⚙️ **vLLM dominates in core inference optimizations**, particularly around memory efficiency and MoE scalability. `llama.cpp` excels in low-level kernel tuning across diverse backends.

---

### **5. Layer Positioning**

| Project       | Primary Layer                  | Role Summary |
|---------------|-------------------------------|--------------|
| **vLLM**      | **Inference Engine**          | High-performance, scalable serving engine; optimized for cloud/datacenter deployments |
| **SGLang**    | **Inference Engine + Gateway** | Hybrid runtime with focus on agent pipelines, control APIs, and multi-GPU/NPU support |
| **llama.cpp** | **Local Runtime / Embedded**  | Cross-platform, lightweight, self-contained inference; ideal for edge, mobile, and privacy-first apps |
| **Ollama**    | **Model Gateway / Local CLI** | Developer-friendly interface layer; abstracts backend complexity; expanding into NPU/CANN |
| **LiteLLM**   | **LLM Gateway / Proxy Layer** | Multi-provider routing, cost control, stream cleanup; critical for agent frameworks and observability |
| **Unsloth**   | **Fine-Tuning + Agent Runtime** | Blends training (LoRA), local serving, and computer use (MCP) for autonomous desktop agents |

> 🎯 **vLLM and SGLang** are the dominant **inference engines** for high-scale production.  
> 🧩 **Unsloth** and **Ollama** are evolving into **agent-native platforms**.  
> 🔗 **LiteLLM** remains the essential **integration layer** for multi-cloud workflows.

---

### **6. Trend Signals**

#### 🔍 **Key Industry Trends Extracted from Today’s Activity:**
1. **Hardware Specialization is Accelerating**: AMD CDNA4/gfx950, Intel NPU, Huawei CANN, and Apple Silicon are no longer experimental—they’re being actively optimized by all major projects.
2. **Agent-Centric Design is Mainstream**: `Unsloth`’s computer use (beta) and `SGLang`’s HiCache/MoE tuning reflect a shift toward real-time, interactive agent execution.
3. **Memory Efficiency is Non-Negotiable**: Extensible KV cache (vLLM), async input copying (llama.cpp), and CPU-serving of embeddings (Unsloth) show that long-context inference demands smarter resource management.
4. **Stability Is the New Differentiator**: Despite feature velocity, **critical regressions** (e.g., SGLang CUDA coredumps, Ollama Vulkan crashes) highlight that reliability is now a competitive moat—not just performance.
5. **Security & Observability Are Now Built-In**: LiteLLM’s cosign verification, Ollama’s per-request metrics logging, and SGLang’s config validation signal growing enterprise readiness.

#### 📌 **What Application Developers Should Watch:**
- **Adopt vLLM’s extensible KV cache** for long-context agents—no manual tuning needed.
- **Test Unsloth v0.1.918-beta** if building desktop automation or game AI agents.
- **Use Ollama + LiteLLM** for secure, observable, multi-provider agent pipelines.
- **Avoid W4A16 quantization** in vLLM until deterministic kernels stabilize.
- **Monitor CI stability**—SGLang and Ollama have flaky test environments; prefer local validation.
- **Prepare for Unix domain sockets** (Ollama issue #19464)—low-latency IPC will be key for next-gen local agents.

> 💡 **Bottom Line**: The future of AI infrastructure isn’t just faster—it’s more intelligent, resilient, and agent-ready. Choose your stack based on whether you're optimizing for scale (vLLM), edge autonomy (llama.cpp), or human-agent collaboration (Unsloth).

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-11-17

---

### **1. Today's Highlights**  
vLLM v0.34.0 ships with 1,061 commits from 412 contributors, introducing **10 new model supports**, including Mistral Large 4 and Kimi K2.5 variants. The most significant change is that **extensible KV cache is now enabled by default**, dynamically sizing the cache based on post-warmup free memory—boosting efficiency for long-context workloads. Meanwhile, active development accelerates across AMD ROCm optimization, Rust frontend parity, and MoE expert offloading.

---

### **2. Releases & Breaking Changes**  
- **v0.34.0**: Released today with no breaking API changes, but introduces a critical behavioral shift: `extensible_kv_cache` is **enabled by default**. This improves memory utilization in high-throughput scenarios but may affect behavior in edge cases involving strict memory budgeting.  
  🔗 [GitHub Release v0.34.0](https://github.com/vllm-project/vllm/releases/tag/v0.34.0)

---

### **3. New Model & Hardware Support**  
#### ✅ **New Models Added**  
- Mistral Large 4 (`mistralai/Mistral-Large-4`)  
- MiniMax-M3.1-Flash (`minimax/MiniMax-M3.1-Flash`)  
- Nemotron-3.5-Transcribe (`nvidia/Nemotron-3.5-Transcribe`)  
- Qwen3.8-2.4T-A95B (AMD-specific)  
- Qwen3.8-Flash-Next (AMD-specific)  
- DeepSeek-V4.1-Flash (with SM120 support tracking)  
- Pixtral (HF format, via `LlavaForConditionalGeneration`)  
- LFM3-VL-2B (LiquidAI)  
- Ling VL (multi-modal vision-language)  
- Muse Spark Open PTPC-FP8 (AMD)  

#### ✅ **Hardware & Backend Advances**  
- **ROCm / AMD CDNA4 (gfx950)**: Active performance optimization campaigns underway for Qwen3.8 series, DeepSeek-V4.1-Flash, and Muse Spark models.  
- **CUDA SM120 (Blackwell RTX PRO 6000)**: Fixes landed for DeepSeek-V4.1-Flash to enable CUDA graph capture and address low decode throughput.  
- **Rust Frontend**: Still experimental (`VLLM_USE_RUST_FRONTEND=1`), but feature parity roadmap (#44280) is gaining traction.  
- **Multi-modality**: Encoder CUDA graph support added for LFM3-VL; ViT full CUDA graph support tracked for Qwen3-VL, GLM-V, Kimi K2.5 (#38175).

---

### **4. Performance & Optimization**  
#### 🚀 **Key Optimizations**  
- **Extensible KV Cache (Default)**: Dynamically sizes cache after warmup using actual free memory, reducing waste in long-context inference.  
- **MoE Expert Offloading (RFC #38256)**: Incremental offloading with GPU cache + async pipeline enables running large MoE models beyond VRAM limits.  
- **ROCm MXFP4 Dequantization**: PR #68086 reduces MoE dequant overhead by only dequantizing *distinct routed experts*, eliminating host syncs.  
- **Kimi-K3 FlashKDA**: AITER backend now uses `FlashKDA` on gluon prefill path for faster decoding on CDNA4 GPUs.  
- **Qwen3.8-Flash-Next (gfx950)**: Dedicated performance tracker (#59575) includes kernel fusion and memory layout optimizations.  

#### ⚙️ **Pending Work**  
- **Octave KV (3-bit)**: RFC #59773 proposes native 3-bit KV cache for AMD GPUs to reduce memory footprint.  
- **Specialized Decodes (RFC #60904)**: Standardizing mono-kernels for model-specific hardware acceleration.  
- **CI Pipeline Speedup**: PR #66411 targets reducing PR time from ~73 min to ~30 min via build lane optimization.

---

### **5. Stability & Regressions**  
#### 🔴 **Critical Issues (High Priority)**  
- **DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell)**: Extremely low decode throughput when `--enforce-eager` used; CUDA graphs unusable. Fixed in PR #65527 (admitting SM120 to flattened device-query-lens path).  
  🔗 [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [PR #65527](https://github.com/vllm-project/vllm/pull/65527)  
- **ROCM Attention Bug (RDNA4)**: `ROCM_ATTN` returns incorrect attention results or faults GPU for head size ≥96 with non-default block size.  
  🔗 [Issue #62697](https://github.com/vllm-project/vllm/issues/62697)  
- **Prefix Cache Corruption with LoRA**: Same name, different ID causes corruption.  
  🔗 [Issue #30931](https://github.com/vllm-project/vllm/issues/30931)  

#### 🟡 **Other Notable Bugs**  
- **W4A16 HummingLinearKernel Non-Deterministic**: Results vary across processes despite same input; faster than Machete on H100.  
  🔗 [Issue #66232](https://github.com/vllm-project/vllm/issues/66232)  
- **FlexAttention Paged vs Contiguous BF16 Output Mismatch**: One ULP difference observed on gfx950.  
  🔗 [Issue #66460](https://github.com/vllm-project/vllm/issues/66460)  

---

### **6. What This Means for Application Developers**  
- **Use extensible KV cache by default**: You no longer need to manually tune `max_num_seqs` or `max_model_len` for long prompts—vLLM now adapts memory usage post-warmup.  
- **Enable Rust frontend cautiously**: While available via `VLLM_USE_RUST_FRONTEND=1`, it lacks feature parity (e.g., tool calling, structured output); expect divergence between Python and Rust APIs until #44280 matures.  
- **Optimize for multi-modal agents**: With encoder CUDA graph support now live for LFM3-VL and ongoing work for Qwen3-VL/Kimi, consider enabling `supports_encoder_cuda_graph` in your model configs.  
- **Avoid W4A16 quantization for reproducibility**: Due to non-determinism in `HummingLinearKernel`, use alternative kernels (e.g., Machete) if deterministic outputs are required.  
- **Monitor AMD ROCm performance**: If deploying on MI355X/gfx950, track progress on Qwen3.8 and DeepSeek-V4.1 optimizations—performance gains expected in next few weeks.  

> 💡 **Pro Tip**: Use `--max-tokenize-tokens` (new in v0.34.0) to cap tokenization memory for agent pipelines handling large inputs. Default: `max(max_model_len * 2, 131072)`.

---  
*Digest generated from GitHub data: [vllm-project/vllm](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-17**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues its momentum toward SGLang 1.0 with significant progress on the Rust server migration, including the final stack of control-API routes being ported. Critical stability work is underway for multi-GPU and NPU platforms, particularly around CUDA coredumps (Issue #26340) and flaky CI infrastructure (Issue #42752), while performance optimizations target HiCache under L2/L3 pressure and MoE tuning robustness.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
However, **SGLang 1.0 Release Tracker (Issue #50045)** is active: this will be a stability-focused release emphasizing configuration validation, erroring on silent changes, and defining a compatibility policy for the 1.x series. Upgrades from `0.5.x` may require code changes—refer to [Upgrade notes](#upgrade-notes) in the issue.

---

### **3. New Model & Hardware Support**  
- ✅ **Ascend A3/A5 (NPU)**: PR #43305 adds full support for `GLM-5.3-Flash` on Ascend, enabling DSA/KDA/NEXTN draft attention and MLA preprocessing without RoPE.  
- ✅ **AMD RDNA3/RDNA4 (gfx1100/gfx1201)**: Issue #46900 tracks CI and upstreaming plans for SGLang on AMD GPUs; PRs are progressing toward full feature parity.  
- ✅ **Intel XPU**: PR #50249 reports a critical regression in GDN chunk prefill speed (2.6x slower) and incorrect `recompute_w_u` output when `K != V`, indicating incomplete support.  
- ✅ **Multi-modal**: PR #50933 improves diffusion test suite naming and staging logic for NVIDIA, enhancing reproducibility across CI lanes.

---

### **4. Performance & Optimization**  
- 🔥 **HiCache + Mooncake**: Issue #47481 documents a reproducible cache hit-rate dip during L2/L3 capacity pressure—critical for long-context inference at scale.  
- 🚀 **MoE Tuning**: PR #50761 identifies that fused MoE tuner configs can regress at intermediate batch sizes, requiring smarter tuning strategies.  
- ⚙️ **Kernel Fusion**:  
  - PR #41860 fuses FP8 row-padding zero-fills into group quantization, reducing kernel launches in small-batch inference.  
  - PR #44446 optimizes `hisparse` by preloading PD decode device buffer in a single all-layer launch, improving latency on large sequence workloads.  
- 💡 **Streaming & Offload**: PR #49413 eliminates host syncs in label-logprob readback for multi-item scoring, boosting throughput on pointwise yes/no tasks.

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|-------|--------|------------|
| 🔴 High | [#26340](https://github.com/sgl-project/sglang/issues/26340) | Auto-collected CUDA coredumps from `pr-test.yml`; widespread crashes across builds | In progress — no fix yet |
| 🔴 High | [#42752](https://github.com/sgl-project/sglang/issues/42752) | Flaky tests and recurring CI failures in `PR Test Base/Extra` — blocking PR validation | Active tracking; no fix merged |
| 🟡 Medium | [#42012](https://github.com/sgl-project/sglang/issues/42012) | `fa4` attention backend crashes on SM120 (RTX PRO 6000) during hybrid extend reshape | Only `triton` backend works; workaround confirmed |
| 🟡 Medium | [#50521](https://github.com/sgl-project/sglang/issues/50521) | FP16 Stream-K GEMM produces NaNs for exact-zero results | Reproduced on main; upstream dependency link provided |
| 🟢 Low | [#44501](https://github.com/sgl-project/sglang/issues/44501) | `WeightChecker.reset_tensors` fills `MRotaryEmbedding.axis_map` with random values | Bug confirmed post-#34446; no fix yet |

---

### **6. What This Means for Application Developers**  
- **Expect instability in CI/CD pipelines**: Frequent flaky tests and CUDA crashes (e.g., #26340) mean local testing should be prioritized over relying on CI status alone.  
- **Use `triton` backend for GLM-5.3-Flash on SM120** until `fa4` is fixed (#42012).  
- **Monitor cache behavior under load**: If using HiCache + Mooncake, anticipate transient hit-rate drops during high concurrency (#47481); consider tuning L3 eviction policies.  
- **Prepare for SGLang 1.0 upgrade path**: Silent config changes will become errors—review your deployment scripts now.  
- **Rust server is nearing completion**: The final control-API routes are being migrated (PRs #49742–#49748); expect improved operational observability and reduced Python overhead in production.

> 🔗 *Stay updated via:* [SGLang GitHub Issues](https://github.com/sgl-project/sglang/issues), [Release Tracker #50045](https://github.com/sgl-project/sglang/issues/50045), and [CI Failure Tracker #17050](https://github.com/sgl-project/sglang/issues/17050).

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-17**

---

### **1. Today's Highlights**  
The latest development cycle brings significant progress in **multi-backend optimization**, particularly for **Vulkan, HIP/CUDA, and WebGPU**, with new support for RDNA3_5, AMD’s gfx1013, and per-head flash attention. Key improvements include better handling of **MoE models on SYCL/Metal**, enhanced **speculative decoding stability**, and critical fixes to **VMM pool allocation failures** that previously caused hard aborts.

---

### **2. Releases & Breaking Changes**  
- **New builds**: `b12453` through `b12441` released in the last 24h, with no breaking API changes noted.  
- **UI Refactor**: The web UI has been moved into `/ui/apps/chat`, marking the first step toward a modular architecture (`ui/lib` + `ui/apps`) — see [PR #32032](https://github.com/ggml-org/llama.cpp/pull/32032).  
- **Config Flexibility**: `--tensor-split` and `--fit-target` now support up to `llama_max_devices()` configurations ([#13293](https://github.com/ggml-org/llama.cpp/issues/13293)).

---

### **3. New Model & Hardware Support**  
- **Hardware Backends**:  
  - Added **RDNA3_5** tuning via `ne11 Gate` for AMD GPUs ([#32308](https://github.com/ggml-org/llama.cpp/pull/32308)).  
  - Expanded **HIP support** to include `gfx1013` (Radeon RX 6700 XT) ([#32236](https://github.com/ggml-org/llama.cpp/pull/32236)).  
  - **WebGPU** now supports **per-head flash attention masks** ([#32394](https://github.com/ggml-org/llama.cpp/pull/32394)).  
  - **Termux & native Android Vulkan** drivers now supported ([#32261](https://github.com/ggml-org/llama.cpp/pull/32261)).  

- **Model Support**:  
  - Added **MiniCPM5 MoE** inference support with gated GQA and expert routing ([#32386](https://github.com/ggml-org/llama.cpp/pull/32386)).  
  - Added **RAON-1-mini-preview** GGUF support ([#32176](https://github.com/ggml-org/llama.cpp/pull/32176)).  
  - Added **Kokoro TTS** and **tiny-voca** voice model support via MTMD ([#32413](https://github.com/ggml-org/llama.cpp/pull/32413), [#32427](https://github.com/ggml-org/llama.cpp/pull/32427)).  

- **Quantization Formats**:  
  - Experimental **PTQ1_0 (ternary at group 128)** added ([#29672](https://github.com/ggml-org/llama.cpp/pull/29672)).  
  - **STQ1_0 (Sparse Ternary Quantization)** introduced for ARM NEON ([#22836](https://github.com/ggml-org/llama.cpp/pull/22836)).

---

### **4. Performance & Optimization**  
- **Kernel Optimizations**:  
  - `split_k` enabled for `conv3d` on Vulkan, improving performance on RDNA3+ GPUs ([#29929](https://github.com/ggml-org/llama.cpp/pull/29929)).  
  - **GDN MMA kernel** enabled on CDNA architectures (AMD Instinct) for CUDA/HIP ([#31327](https://github.com/ggml-org/llama.cpp/pull/31327)).  
  - **RVV vectorization** applied to Mamba-2 SSM scan on RISC-V CPUs ([#32448](https://github.com/ggml-org/llama.cpp/pull/32448)).  

- **Memory & Pipeline Efficiency**:  
  - **Async host input copies** now supported across backends via `ggml_backend_dev_caps.async_host_input` ([#30685](https://github.com/ggml-org/llama.cpp/pull/30685)).  
  - **Double buffering** during quantization improves I/O overlap on macOS ([#21507](https://github.com/ggml-org/llama.cpp/pull/21507)).  

- **Speculative Decoding**:  
  - Fix for `FFN_MOE_DOWN` fallback to CPU in CUDA paths ([#30704](https://github.com/ggml-org/llama.cpp/issues/30704)) reported as a major regression; fix PR in review.

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - **Vulkan FA prefill crash on Windows/RDNA3** due to fp32 shmem overflow ([#32353](https://github.com/ggml-org/llama.cpp/issues/32353)). Fixed in `b12443`.  
  - **CUDA VMM pool OOM** causes process abort instead of graceful failure ([#31974](https://github.com/ggml-org/llama.cpp/issues/31974)). Patched in [`#32440`](https://github.com/ggml-org/llama.cpp/pull/32440).  

- **Performance Regressions**:  
  - **~15–50% slower MoE prompt processing on HIP/gfx906** since `#29948` ([#31599](https://github.com/ggml-org/llama.cpp/issues/31599)).  
  - **Significant prefill drop on V100 (sm_70)** from v0.8.0 to v1.0.0 ([#32245](https://github.com/ggml-org/llama.cpp/issues/32245)).  

- **Other Issues**:  
  - **Metal stalls** during large-context processing (262k tokens) on Apple Silicon ([#30726](https://github.com/ggml-org/llama.cpp/issues/30726)).  
  - **Cache reuse disabled** for IMROPE/Qwen3.5 models despite identical prompts ([#32316](https://github.com/ggml-org/llama.cpp/issues/32316)).

---

### **6. What This Means for Application Developers**  
- **Deployments on AMD/Apple**: Expect improved performance and stability with RDNA3_5 and Metal, especially for MoE and long-context models.  
- **TTS & Voice Apps**: With Kokoro/Tiny-Voca support, developers can now build local voice agents using `mtmd` pipelines.  
- **Robustness in Production**: Use `b12443+` to avoid Vulkan crashes and `b12440+` to prevent OOM-induced server aborts.  
- **Future-Proofing**: Start migrating toward the new `/ui/apps/chat` structure and leverage async input copying for higher throughput in multi-threaded servers.  
- **Quantization Strategy**: Evaluate **PTQ1_0/STQ1_0** for edge deployments where ternary weights reduce memory footprint without sacrificing accuracy.

> 🔗 [Latest Releases](https://github.com/ggml-org/llama.cpp/releases) | [GitHub Issue Tracker](https://github.com/ggml-org/llama.cpp/issues)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Digest – 2026-11-17**

---

### **1. Today's Highlights**  
The Ollama project continues to expand its hardware and backend support, with active development on Intel NPU (OpenVINO), Huawei CANN, and enhanced MLX runner optimizations for Metal and CUDA. Critical stability fixes were merged for Vulkan backend crashes on AMD iGPUs and VRAM accounting issues impacting model loading and GPU splitting. A new feature request for Unix domain sockets (IPC) highlights growing demand for low-latency, secure local communication in high-performance AI workflows.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the past 24 hours.*  
However, ongoing work on `ollama run` multiline input handling (PR #19731) and `OLLAMA_LOG_METRICS` logging (PR #19723) may impact user experience and observability in future versions. No migration notes required at this time.

---

### **3. New Model & Hardware Support**  
- ✅ **Intel NPU Backend (OpenVINO)**: Feature request #19535 calls for native support on Core Ultra NPUs (e.g., MSI Stealth 16), enabling full utilization of "AI PC" hardware promises.  
- ✅ **Huawei Ascend CANN Backend**: PR #19732 adds build option and device discovery for `ggml-cann`, allowing Ollama to leverage Ascend NPUs via llama.cpp integration.  
- ✅ **PPLX Decider v1.3 Support**: PR #19734 introduces support for PPLX’s Flash and 27B checkpoints with chunked decision protocols, expanding agent tooling capabilities.  
- ✅ **Tencent Hy4 Flash Model**: Issue #19722 requests adding Hy4 Flash to the cloud model catalog, citing competitive pricing and performance vs. DeepSeek V4.1 Flash.

> 🔗 [Intel NPU Request](https://github.com/ollama/ollama/issues/19535) | [CANN Backend PR](https://github.com/ollama/ollama/pull/19732) | [PPLX Decider Support](https://github.com/ollama/ollama/pull/19734)

---

### **4. Performance & Optimization**  
- 🚀 **MLX Runner Optimizations**: Multiple PRs enhance speculative decoding and memory-aware history reuse:
  - PR #19678 / #19730: Adaptive saved history retention based on memory pressure (Linux/Windows).
  - PR #19677 / #19730: Reuse of saved prefixes across request slots to avoid redundant prefill processing.
  - PR #19663: Batch speculative verification to maintain speedups during concurrent requests.
- ⚙️ **GPU Splitting & VRAM Accounting Fix**: PR #19632 resolves critical VRAM tracking bugs causing incorrect model eviction and inefficient GPU usage (#19463, #18679, #18349).
- 📊 **Per-Request Metrics Logging**: PR #19723 enables opt-in JSONL logging of token-level inference metrics (`OLLAMA_LOG_METRICS=1`) for observability and benchmarking.

> 🔗 [MLX Memory Pressure Fixes](https://github.com/ollama/ollama/pull/19678) | [VRAM Fix](https://github.com/ollama/ollama/pull/19632) | [Metrics Logging](https://github.com/ollama/ollama/pull/19723)

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Impact | Fix PR |
|--------|------|--------|--------|--------|
| High | Vulkan crash on AMD Renoir iGPU (Ryzen 4700U) | Closed | Model load failure | — |
| High | SIGBUS on AMD RX 5500 (Navi 14/gfx1010) | Open | GPU not detected | #19589 |
| Medium | Qwen2.5-Coder / Qwen3 native tool calling fails | Closed | Agent workflow disruption | — |
| Medium | `uint32_t` build error with GCC 15 | Open | Source compilation failure | #19714 |
| Low | `tensor blk.0.ssm_beta.weight not found` | Open | Model load failure | #19733 |
| Low | Windows socket bind error (port in use) | Open | Service startup failure | #19712 |

> 🔗 [AMD Vulkan Crash](https://github.com/ollama/ollama/issues/19558) | [GCC 15 Build Error](https://github.com/ollama/ollama/issues/19714) | [Qwen Tool Calling](https://github.com/ollama/ollama/issues/19524)

---

### **6. What This Means for Application Developers**  
- **Expect better cross-hardware compatibility**: With upcoming Intel NPU and Huawei CANN support, developers can now target a broader range of edge and embedded devices—ideal for private AI deployments on modern "AI PCs" and specialized inference platforms.  
- **Enhanced agent reliability**: Improvements in MLX runner memory management and speculative decoding will reduce latency spikes and improve throughput in multi-user or high-concurrency agent systems.  
- **Better observability**: Enable `OLLAMA_LOG_METRICS=1` to capture per-request token statistics—critical for cost modeling, rate limiting, and fine-tuning agent efficiency.  
- **Avoid platform-specific pitfalls**: Be cautious when deploying on AMD iGPUs (Vulkan backend instability) or using GCC 15; monitor for known build issues until fixes land.  
- **Design for IPC**: The open request for Unix domain sockets (#19464) signals a shift toward secure, zero-latency inter-process communication—consider migrating from TCP/IP if running local agents on Linux/macOS.

> 💡 *Pro Tip*: Use `ollama run` with `--no-stream` and `--keep-alive` to mitigate multiline input bugs until PR #19731 is released.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-17**

#### **1. Today's Highlights**  
The LiteLLM team delivered critical fixes to core inference routing and stability across major providers, including Anthropic, Gemini, and Bedrock. Notably, recent PRs address long-standing issues with reasoning block handling in `/v1/messages`, tool call signature preservation, and stream abort cleanup—key for agent frameworks and real-time systems.

#### **2. Releases & Breaking Changes**  
- **v1.108.10** released today with enhanced security via [cosign verification](https://github.com/BerriAI/litellm/releases/tag/v1.108.10).  
- No breaking API changes reported; backward compatibility maintained.  
- Users are advised to verify Docker image signatures using the provided `cosign` command for production deployments.

#### **3. New Model & Hardware Support**  
No new models or hardware backends were added in this update. However, ongoing work includes:
- **Databricks Claude Opus 5.5**: Explicit support for mid-conversation system messages now being formalized in cost mapping ([PR #52214](https://github.com/BerriAI/litellm/pull/52214)).
- **Cursor CLI Integration**: New proxy support enables native agent streaming from Cursor’s CLI, expanding developer workflow integration ([PR #52205](https://github.com/BerriAI/litellm/pull/52205)).

#### **4. Performance & Optimization**  
- **Bedrock Stream Cleanup**: Fixed delayed connection closure after client aborts (`#52210`), reducing wasted tokens by ~1,500 per abandoned Sonnet 4.5 call and improving resource efficiency.
- **Rate-Limiting Efficiency**: Skip Redis writes for keys without rate limits configured ([PR #31880](https://github.com/BerriAI/litellm/pull/31880)), reducing unnecessary I/O and improving throughput under high load.
- **Rust Callbacks**: Parallel request limiter v3 ported to Rust as `CustomLoggerV2` ([PR #51537](https://github.com/BerriAI/litellm/pull/51537)), enabling lower-latency, higher-throughput concurrency control.

#### **5. Stability & Regressions**  
| Issue | Severity | Fix Status | GitHub Link |
|------|----------|------------|-------------|
| `ModelNotMappedError` during model resolution | High | Open | [#51452](https://github.com/BerriAI/litellm/issues/51452) |
| Intermittent 503/Connection errors with Gemini | High | Open | [#50434](https://github.com/BerriAI/litellm/issues/50434) |
| Groq 401 error misclassified as `BadRequestError` | Medium | Closed | [#51994](https://github.com/BerriAI/litellm/issues/51994) |
| Free models blocked after spend cap exceeded | High | Open | [#52071](https://github.com/BerriAI/litellm/issues/52071) |
| Tool-call arguments dropped on `response.function_call_arguments.done` | High | Closed | [#27144](https://github.com/BerriAI/litellm/issues/27144) |

> ⚠️ Critical: Multiple open bugs affect model availability, cost tracking, and response fidelity—especially around reasoning models and provider-specific edge cases.

#### **6. What This Means for Application Developers**  
- **Agent Developers**: Prioritize upgrading to v1.108.10 to benefit from improved reasoning block integrity and reduced stream latency. Be cautious with `gemini-*` and `gpt-5.*` models due to unresolved streaming and caching issues.
- **Proxy Operators**: Use `cosign verify` to ensure trusted builds; enable the new Rust-backed auth stores ([PR #52173](https://github.com/BerriAI/litellm/pull/52173)) for better scalability and performance.
- **Cost Control**: Watch for billing discrepancies related to global Vertex AI deployments pricing as `us-central1` ([Issue #52043](https://github.com/BerriAI/litellm/issues/52043)); avoid relying on `COHERE_API_BASE` for embeddings unless explicitly passed.
- **Future-Proofing**: Monitor upcoming features like `litellm.agent_eval()` ([Issue #52143](https://github.com/BerriAI/litellm/issues/52143)) for automated model benchmarking in your pipelines.

> 🔗 **Key Resources**:  
> - [GitHub Release v1.108.10](https://github.com/BerriAI/litellm/releases/tag/v1.108.10)  
> - [Cosign Verification Guide](https://github.com/BerriAI/litellm/blob/main/docs/security.md)  
> - [Rust Backend Roadmap (Internal)](https://app.devin.ai/sessions/d853803359854d30b79ebddf396653dc)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-11-17**

#### **1. Today's Highlights**  
The v0.1.918-beta release introduces **computer use (beta)**, enabling local LLMs to interact with apps via MCP integrations for Unity, Unreal Engine, Blender, and Roblox—marking a major leap toward agent-driven desktop automation. Concurrently, performance improvements and bug fixes address critical UI lag, model loading issues, and GPU monitoring regressions across macOS, Windows, and AMD/NVIDIA platforms.

#### **2. Releases & Breaking Changes**  
- **v0.1.918-beta**: Released today with enhanced computer use capabilities, MiniMax-H3-Image support for GGUF/FP8/INT8 + LoRA training, and redesigned model picker.  
  🔗 [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.918-beta)  
- **Breaking Change**: `UNSLOTH_PARALLEL=auto` now defaults to DDP when model fits on all GPUs; otherwise uses native FSDP2—reducing manual configuration overhead.  
  🔗 [PR #18061](https://github.com/unslothai/unsloth/pull/18061)

#### **3. New Model & Hardware Support**  
- **Models**:  
  - MiniMax-H3-Image now supports GGUF, FP8, INT8 quantizations and LoRA fine-tuning.  
  - Ollama models created from Modelfiles now preserve `SYSTEM` prompt text in chat sessions.  
    🔗 [PR #18045](https://github.com/unslothai/unsloth/pull/18045)  
- **Hardware Backends**:  
  - Full support for **AMD NPU (FastFlowLM via Lemonade)** in deep research workflows, with fallback to prompt-only JSON mode if `response_format: json_object` fails.  
    🔗 [PR #18042](https://github.com/unslothai/unsloth/pull/18042)  
  - Improved **ROCm (Windows)** GPU monitoring: fixed `gpu_utilization_pct = 0.0` and `temperature_c = null` display issues.  
    🔗 [Issue #18005](https://github.com/unslothai/unsloth/issues/18005)  
- **Architecture**: Added optional integration with **Strata inference engine** (MoE streaming, AMD-native) via Studio.  
  🔗 [Feature Request #16626](https://github.com/unslothai/unsloth/issues/16626)

#### **4. Performance & Optimization**  
- **Tensor Parallelism**: Optimized memory usage by serving large frozen input embeddings (e.g., Qwen3.8-27B 4-bit) from CPU instead of duplicating across ranks. Reduces per-GPU memory load by ~40% on 2x T4 setups.  
  🔗 [PR #18068](https://github.com/unslothai/unsloth/pull/18068)  
- **Model Loading**: Fixed incorrect GGUF quant selection (e.g., selecting `Q6_K` loads cached `UD-Q6_K_XL`)—now respects user choice and avoids redundant downloads.  
  🔗 [PR #18006](https://github.com/unslothai/unsloth/pull/18006)  
- **UI Responsiveness**: Composer and model picker now scale dynamically with window size and zoom level.  
  🔗 [PR #18074](https://github.com/unslothai/unsloth/pull/18074)

#### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |  
|---------|------|--------|--------|  
| Critical | Unsloth Desktop crashes after `lama.cpp` update | Open | [PR #17981](https://github.com/unslothai/unsloth/pull/17981) |  
| High | UI lag + failed model loading post-update (e.g., Gemma-4-26B-A4B not restored) | Open | [Issue #18002](https://github.com/unslothai/unsloth/issues/18002) |  
| Medium | "Could not sync pinned chats" + interface lag on Linux | Open | [Issue #18063](https://github.com/unslothai/unsloth/issues/18063) |  
| Low | Browser menu renders behind site content | Open | [Issue #18013](https://github.com/unslothai/unsloth/issues/18013) |  
| Low | `backend process stdout closed unexpectedly` logged as crash during clean shutdown | Fixed | [PR #18073](https://github.com/unslothai/unsloth/pull/18073) |

#### **6. What This Means for Application Developers**  
- **Agent Builders**: The new **computer use (beta)** and **MCP integrations** enable direct app interaction—ideal for building autonomous agents in game dev (Unity/Unreal), 3D modeling (Blender), or simulation environments.  
- **Fine-Tuning & Serving**: Use `UNSLOTH_PARALLEL=auto` to let the system choose between DDP/FSDP2—no need to manually tune for multi-GPU setups.  
- **Edge Cases**: Be cautious with AMD NPU models in deep research—ensure fallback logic is handled via prompt-only JSON.  
- **UI/UX**: Leverage dynamic sizing (PR #18074) and model picker search persistence (PR #17477) for polished user experiences.  
- **API Clients**: Update tool names in `enabled_tools`: use `terminal`, not `bash`.  
  🔗 [Issue #18056](https://github.com/unslothai/unsloth/issues/18056)  

> ✅ **Actionable Takeaway**: If you're deploying local models with complex workflows (e.g., web search + file I/O + UI generation), test with v0.1.918-beta and enable `computer_use` + `mcp` features early. Monitor for GPU monitor inaccuracies on ROCm and ensure your backend exit handling logs cleanly.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*