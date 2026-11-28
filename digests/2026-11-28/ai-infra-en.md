# AI Infrastructure Digest 2026-11-28

> Generated: 2026-11-28 04:11 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-28**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of high specialization and hardware-aware optimization, driven by the rollout of NVIDIA Blackwell (SM120), next-gen NPU/accelerator support, and agentic workloads demanding deterministic behavior. Projects are diverging in focus: vLLM and SGLang are pushing the envelope in high-throughput, low-latency inference with deep GPU kernel tuning; llama.cpp maintains broad hardware coverage with lightweight backends; Ollama prioritizes developer experience but faces stability challenges in production-grade deployments; LiteLLM consolidates as the dominant LLM gateway with growing cost and routing precision; Unsloth emerges as a key player in fine-tuning and local runtime efficiency, especially for edge and heterogeneous environments.

---

### **2. Activity Comparison**

| Project       | Issues Open (Est.) | PRs Merged (Last 24h) | Release Status         |
|---------------|--------------------|------------------------|-------------------------|
| **vLLM**      | ~3,200             | 5                      | `v0.34.0rc1.dev1129+gc32251b5d` (stable) |
| **SGLang**    | ~1,800             | 6                      | No new release; pre-1.0 stabilization |
| **llama.cpp** | ~2,600             | 4                      | `b12823` (patched), `b12819`, `b12818` |
| **Ollama**    | ~1,700             | 2                      | Critical regression in `0.40.18`; no new release |
| **LiteLLM**   | ~1,400             | 4                      | `v1.108.20` (LTS); `v1.110.2` has regression |
| **Unsloth**   | ~1,200             | 6                      | No new release; active feature development |

> 🔍 *Insight*: Despite lower visible activity, **SGLang** and **Unsloth** show strong momentum in foundational infrastructure—SGLang on distributed systems, Unsloth on training/runtime portability.

---

### **3. Model Support Race**

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 Mini**            | ✅ (SM120 MXFP8, fused kernels) | ✅ (Mooncake state leasing) | ✅ (MoE support) | ⚠️ (`inkling-2-mini` crash reported) | ❌ | ✅ (GGUF packed, attn_qkv_gate) |
| **Inkling 2 Loop**            | ❌ | ✅ (Mooncake integration) | ✅ (new support) | ❌ | ❌ | ✅ |
| **Qwen3.8-Flash-Next-Quark-MXFP4** | ⚠️ (ROCm tracking) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **SenseNova Loop**            | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **DeepSeek-V4.1-Flash**       | ⚠️ (SM120 decode issues) | ✅ (CXL-backed Engram tables) | ❌ | ⚠️ (crashes in `0.40.18`) | ❌ | ❌ |
| **Claude 5.x (Bedrock Mantle)** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

> 🏆 **Winner**: **SGLang** leads in cutting-edge model & memory architecture integration (Mooncake, CXL), while **Unsloth** dominates GGUF-specific model support and LoRA flexibility.

---

### **4. Performance Frontier**

| Focus Area                 | vLLM                                  | SGLang                                 | llama.cpp                          | Ollama                         | LiteLLM                        | Unsloth                         |
|----------------------------|---------------------------------------|----------------------------------------|------------------------------------|--------------------------------|--------------------------------|---------------------------------|
| **KV Cache Optimization**  | ✅ Fused sizing, IPC accounting       | ✅ Distributed KVCache, AOT Cartridges | ❌ Memory corruption (Vulkan)     | ❌ Aggressive eviction (~64k)  | ✅ Cost-aware token tracking   | ✅ Dynamic cell-weighted estimation |
| **Batching & Inference**   | ✅ Batch-invariant, speculative decode | ✅ Tensor parallelism, MoE routing    | ✅ Cooperative GDN kernels         | ❌ Redundant re-tokenization   | ✅ Stream reassembly fix       | ✅ Mixed-length batch processing |
| **Quantization**           | ✅ MXFP8, NVFP4 emulation, MoE support | ✅ INT8/FP8 KPool cache (Ascend)        | ✅ Per-tensor scales (FP8/NVFP4)   | ❌ No explicit quant control    | ✅ Token count accuracy        | ✅ 4-bit QLoRA without bitsandbytes |
| **Distributed Serving**    | ⚠️ Limited (via TP)                   | ✅ ✅ Distributed KVCache, hybrid radix | ❌ Not designed for scale          | ❌ No multi-node support        | ✅ Routing across providers    | ⚠️ Offload optimizer state (future) |
| **Kernel-Level Tuning**    | ✅ SM120 MXFP8, fused up-projection    | ✅ SM12x/GB10 attention, shared mem fix | ✅ Vulkan cooperative matrix       | ❌ None                         | ✅ Prometheus observability    | ✅ Packed GGUF kernels (fused)   |

> 📈 **Trend**: The performance frontier is shifting toward **hardware-aware kernels** (SM120, Mooncake, CXL) and **distributed memory management**, with vLLM and SGLang leading in both.

---

### **5. Layer Positioning**

| Project       | Primary Layer                  | Secondary Role                             | Key Differentiator |
|---------------|--------------------------------|--------------------------------------------|--------------------|
| **vLLM**      | **Inference Engine**           | Serving abstraction, batching              | High-throughput, native SM120 optimization |
| **SGLang**    | **Distributed Inference Engine** | Agentic orchestration, memory offloading | Next-gen memory integration (CXL, Mooncake) |
| **llama.cpp** | **Local Runtime / Backend**    | Cross-platform inference (GPU/CPU)         | Minimal dependencies, Vulkan/Metal stability |
| **Ollama**    | **LLM Gateway + Local Runtime** | Developer UX, model hub                    | Ease-of-use at cost of stability |
| **LiteLLM**   | **LLM Gateway / Orchestration** | Cost tracking, provider routing            | Unified API with granular billing control |
| **Unsloth**   | **Fine-Tuning + Local Runtime** | Training efficiency, GGUF support          | 4-bit QLoRA without `bitsandbytes`, Apple Silicon speed |

> 🧩 **Strategic Insight**: vLLM/SGLang are becoming the **high-performance backbone** for production inference; LiteLLM is the **de facto standard for multi-provider routing**; Unsloth is critical for **edge/fine-tuning workflows**.

---

### **6. Trend Signals**

1. **Hardware Specialization is Accelerating**  
   - SM120 (Blackwell) optimizations are now central to vLLM and SGLang.
   - Mooncake (NPU memory), CXL, and dev-dax backing signal deeper integration with **next-gen memory architectures**.

2. **Determinism and Reproducibility Are Non-Negotiable**  
   - vLLM’s `batch_invariance` (#27433), Unsloth’s `@skill` cache fixes, and LiteLLM’s token counter accuracy all point to rising demand for **predictable, reproducible agent behavior**.

3. **Agent Workloads Are Driving System Design**  
   - SGLang’s distributed KVCache, vLLM’s speculative decoding, and Unsloth’s mixed-batch inference are all tailored for **long-running, stateful agents**.

4. **Gateway Stability Is a Bottleneck**  
   - Ollama’s `0.40.18` instability highlights that **developer-friendly tools can compromise production reliability**—a red flag for enterprise use.

5. **Open Source ≠ Production Ready**  
   - While projects like SGLang and vLLM are maturing rapidly, **critical regressions (e.g., CUDA graphs, memory leaks)** persist—indicating that even mature projects require rigorous validation.

> 🔮 **Action for Developers**:  
> - Use **vLLM or SGLang** for high-throughput, deterministic inference on Blackwell/GB10.  
> - Choose **LiteLLM** for multi-provider routing with accurate cost tracking.  
> - Leverage **Unsloth** for 4-bit QLoRA and GGUF-based fine-tuning on ARM/ROCm.  
> - Avoid **Ollama `0.40.18`** in production until stability fixes land.  
> - Monitor **PRs from `b12823` onward in llama.cpp** for large-context stability.

---  
*Generated: 2026-11-28 | Data sourced from GitHub repositories and issue trackers.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-28**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate its focus on **batch-invariant inference**, with a major feature request (#27433) gathering momentum, now with 107 comments and growing community engagement. Critical performance and stability work is underway for **Blackwell GPUs (SM120)**, including optimizations for Inkling 2 Mini and fixes for DeepSeek-V4.1-Flash decode throughput issues. Notably, two high-impact PRs landed today: one enabling native MXFP8 use on SM120 for prefill experts (#70465), and another improving speculative decoding efficiency via larger verify windows (#70253).

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable release remains `v0.34.0rc1.dev1129+gc32251b5d`. Developers should continue monitoring `main` for upcoming features like Rust frontend defaulting (#68784) and enhanced render fingerprinting (#68940).

---

### **3. New Model & Hardware Support**  
- **SM120 (Blackwell) Optimization**: Major progress on RTX PRO 6000 Blackwell / RTX 5090 platforms, with native MXFP8 support for Inkling 2 Mini prefill experts (#70465) and fused kernel improvements (#70466).  
- **Inkling 2 Mini**: Full optimization roadmap being tracked; supports 128-row tiles and block-scaled E4M3 MMA on SM120.  
- **ROCm (gfx950 / MI355X)**: Performance tracking ongoing for Qwen3.8-Flash-Next-Quark-MXFP4 (`amd/Qwen3.8-Flash-Next-Quark-MXFP4`) — see #59575.  
- **Quantization Formats**: NVFP4 emulation now compiles on pre-SM89 GPUs via fallback logic (#70464); MXFP4 MoE support progressing under kimi SIG.

---

### **4. Performance & Optimization**  
- **Inkling 2 Mini (SM120)**:  
  - Native MXFP8 usage improves warmed single-request TTFT to **3,325 tokens/sec** on RTX 5090 (#70465).  
  - Fused up-projection + blend reduces FP32 writes by half, cutting memory bandwidth pressure (#70466).  
- **Speculative Decoding**:  
  - Fused GDN MTP decode kernel now supports **16-token verify windows**, eliminating fallback to slower Triton delta-rule path (#70253).  
  - Tensor parallelism added for context-aware sparse draft heads (#70255), enabling scaling across multiple devices.  
- **General Efficiency**:  
  - Reduced redundant Hugging Face downloads via `maybe_pull_model_tokenizer_for_runai` (#70467).  
  - IPC workspace accounted for in KV cache sizing to prevent over-allocation (#68138).

---

### **5. Stability & Regressions**  
- **Critical**:  
  - **DeepSeek-V4.1-Flash on SM120**: Extremely low decode throughput with `--enforce-eager`, CUDA graphs unusable — prioritized fix needed (#56892).  
  - **Inkling 2 Prompt Repetition Bug**: Identical prompts in batch produce different outputs run-to-run with prefix caching enabled (#70043).  
- **High Severity**:  
  - **LoRA Nondeterminism in Serving**: Run-to-run output differences in `lora_shrink/lora_expand` paths despite identical input — affects model consistency (#50602).  
  - **Triton FP8 Casts Off-by-One on SM89**: FP8 KV cache values stored one step off due to double-rounding in `e4m3` conversion (#69199).  
- **Fixes in Progress**:  
  - PR #70462 resolves logit bias race condition during allowed token handling (#70415).  
  - PR #70364 prevents scheduler resumption after incomplete weight updates (#70364).

---

### **6. What This Means for Application Developers**  
- **For Agents & Agentic Workloads**: Enable `batch_invariance` early — it’s critical for RL alignment and deterministic behavior (#27433). Use zero-mismatch-RL recipes from Inferact (#66550) for end-to-end reproducibility.  
- **For Multi-Modal & Tool-Calling Apps**: Expect improved preprocessing offloading via `vllm.Render` and future session-aware routing (#65503, #48049). Be cautious with `chat_template_kwargs["tools"]` — it can override server-defined tools and cause HTTP 500 errors (#70385).  
- **For Production Deployments on Blackwell**: Monitor SM120 performance closely — while optimizations are landing, deep-seated issues remain in DeepSeek-V4.1-Flash and CUDA graph capture (#56892).  
- **For High-Throughput Systems**: Leverage fused kernels (Inkling 2, GDN MTP) and consider upgrading to `vllm-rs` when available (#68784) for lower-latency rendering and better control flow.

> 🔗 [View Issues](https://github.com/vllm-project/vllm/issues) | [View PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-28

---

### **1. Today's Highlights**

SGLang continues its aggressive push toward SGLang 1.0 stability with critical fixes to flaky CI, persistent crash bugs in multi-modal and distributed workloads, and significant performance optimizations for MoE and attention kernels on NVIDIA SM12x/GB10 hardware. Major progress is underway on the distributed KV cache system for agentic workloads, while new support for Mooncake-based Mamba state leasing and CXL-backed Engram tables signals deeper integration with next-gen memory architectures.

---

### **2. Releases & Breaking Changes**

- **None**  
  No new releases or breaking changes were published in the last 24 hours. The project remains focused on stabilizing pre-1.0 features.

> 🔗 *SGLang 1.0 Release Tracker*: [#50045](https://github.com/sgl-project/sglang/issues/50045) — Upgrading from 0.5.x may require changes; see [Upgrade notes](#upgrade-notes).

---

### **3. New Model & Hardware Support**

- **Mooncake Memory Integration**: PR #53586 introduces lease-only deep Mamba state retrieval during Mooncake lookups, improving cache efficiency for models like Inkling-2-Mini.
- **CXL/dev-dax Backed Engram Tables**: PR #53686 enables backing DeepSeek-V4.1’s 188.8 GiB static FP8 Engram tables via file or CXL (dev-dax), reducing GPU memory pressure.
- **Ascend NPU Quantization**: PR #53662 adds INT8 and FP8 KPool index cache support for GLM-5.3-Flash on Ascend (C8 quant), enabling efficient inference on NPUs.
- **Hunyuan V4 Flash Attention**: PR #53685 optimizes small-batch iHC post/pre/RMSNorm ops on SM90 using cluster CUDA kernels.

> 🔗 [PR #53586](https://github.com/sgl-project/sglang/pull/53586), [PR #53686](https://github.com/sgl-project/sglang/pull/53686), [PR #53662](https://github.com/sgl-project/sglang/pull/53662), [PR #53685](https://github.com/sgl-project/sglang/pull/53685)

---

### **4. Performance & Optimization**

- **SM12x/GB10 Attention Optimization**: PR #53439 identifies shared memory overflow in `inkling2` at high routing loads (>2,750 IDs); fix pending. This impacts throughput on DGX Spark clusters.
- **MoE Kernel Efficiency**: PR #48072 routes padding rows of TP-MoE gather to "no expert" — reduces unnecessary computation in decode steps.
- **FlashInfer Upgrade**: PR #51964 bumps FlashInfer to `0.7.5.post1`, including a batched GEMM fix that improves trtllm-gen performance.
- **KV-Cartridge AOT Caching**: PR #53151 proposes Ahead-of-Time (AOT) pinned prefix caching via KV-Cartridges in RadixAttention — enables deterministic, low-latency reuse for repeated prefixes.
- **Trace Replay for Decoding**: PR #52435 adds support for trace replay during normal decoding — useful for debugging model divergence and scoring.

> 🔗 [PR #53439](https://github.com/sgl-project/sglang/pull/53439), [PR #48072](https://github.com/sgl-project/sglang/pull/48072), [PR #51964](https://github.com/sgl-project/sglang/pull/51964), [PR #53151](https://github.com/sgl-project/sglang/pull/53151), [PR #52435](https://github.com/sgl-project/sglang/pull/52435)

---

### **5. Stability & Regressions**

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| Critical | [#26340](https://github.com/sgl-project/sglang/issues/26340) | Auto-collected CUDA coredumps from CI; widespread crashes observed across test runs | In progress (390 comments) |
| High | [#42752](https://github.com/sgl-project/sglang/issues/42752) | Flaky tests and CI infrastructure failures in `PR Test Base/Extra` — blocks PR validation | Active tracking |
| High | [#52090](https://github.com/sgl-project/sglang/issues/52090) | `/parse_function_call` triggers catastrophic regex backtracking in tool detectors — can block event loop | Open |
| Medium | [#53439](https://github.com/sgl-project/sglang/issues/53439) | `inkling2` on SM12x: `route_metadata` exceeds shared memory limits under high routing load | Open |
| Medium | [#53149](https://github.com/sgl-project/sglang/issues/53149) | Hybrid SWA + state radix cache causes full prefix misses in multi-turn workloads due to window mismatch | Open |
| Low | [#53447](https://github.com/sgl-project/sglang/issues/53447) | Malformed `response_format.schema` returns HTTP 500 instead of 400 | Open |

> 🔗 All issues linked above are open and actively discussed; several have associated PRs in review.

---

### **6. What This Means for Application Developers**

- **Expect stricter error handling**: SGLang 1.0 will enforce configuration validation via explicit errors (not silent changes). Validate your configs early.
- **Avoid malformed inputs**: Be cautious with `response_format.schema` and tool call detection patterns — malformed input can cause DoS or infinite loops (see #52090).
- **Leverage AOT caching**: For agents with repetitive prompts (e.g., chatbots, code assistants), use KV-Cartridges (#53151) to pin common prefixes and reduce latency.
- **Plan for distributed scaling**: The roadmap for distributed KVCache (#21846) and hybrid cache scheduling (#43098) indicates upcoming support for large-scale agentic systems with shared state.
- **Monitor CI health**: Flakiness in CI (#42752) may delay merges — consider contributing to test stability or using stable branches for production deployments.

> ✅ Pro tip: Use `--enable-prefill-delayer` cautiously — recent fixes (#52466) address idle delayer hangs, but behavior still depends on DP/TP setup.

--- 

*Digest generated: 2026-11-28 | Source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-28**

---

### **1. Today’s Highlights**  
Critical fixes for CUDA and HIP backends address long-standing issues with `ADD_ID` launches exceeding 65,535 tokens—previously causing invalid configuration errors on NVIDIA and AMD GPUs. Significant Vulkan performance improvements target cooperative matrix (GDN) kernels, while Metal now maintains consistent graph fusion regardless of batch size. These updates collectively improve stability and efficiency across high-context inference workloads.

---

### **2. Releases & Breaking Changes**  
- **b12823**: Fixed `ADD_ID` launch grid dimension overflow affecting CUDA and HIP backends when token count exceeds 65,535 ([#33162](https://github.com/ggml-org/llama.cpp/pull/33162)).  
- **b12819**: Caches device type at init to eliminate repeated `cudaGetDeviceProperties()` calls (~0.7–1 ms per call), reducing overhead in multi-GPU tensor override scenarios ([#33142](https://github.com/ggml-org/llama.cpp/pull/33142)).  
- **b12818**: Added support for per-tensor/channel/expert quantization scales for FP8 and NVFP4 types, enabling more precise model calibration ([#28898](https://github.com/ggml-org/llama.cpp/pull/28898)).

> ✅ *Migration note*: Users running large-context models on multiple GPUs should update to `b12819+` to avoid CPU-bound scheduler delays due to redundant device queries.

---

### **3. New Model & Hardware Support**  
- **Model**: Added official support for **SenseNova Loop** via PR [#32588](https://github.com/ggml-org/llama.cpp/pull/32588), a new MoE-based architecture optimized for efficient inference.  
- **Hardware**:  
  - Enhanced **Vulkan** backend now handles empty conv3d kernels and supports subgroup shaders for `pool1d`, improving throughput on Intel Arc B-series and Xe2 GPUs ([#32860](https://github.com/ggml-org/llama.cpp/pull/32860), [#33221](https://github.com/ggml-org/llama.cpp/pull/33221)).  
  - **Metal**: Maintains ADD-chain fusion independence from batch size, preventing graph allocation failures under `GGML_SCHED_DEBUG_REA` ([#33217](https://github.com/ggml-org/llama.cpp/pull/33217)).  
- **Quantization**: Experimental support for **Prism PQ2_0 (type 142)** and **PTQ1_0 (type 143)** added via feature request [#29058](https://github.com/ggml-org/llama.cpp/issues/29058).

---

### **4. Performance & Optimization**  
- **Vulkan**: Refactored `coopmat2 GDN` storage callbacks to enable vectorized stores, improving memory bandwidth utilization ([#32860](https://github.com/ggml-org/llama.cpp/pull/32860)).  
- **CUDA**: Optimized `ADD_ID` kernel launch configuration to prevent gridDim.y overflow, ensuring stable execution at scale.  
- **Metal**: Eliminated batch-size-dependent node reordering in ADD fusion, stabilizing graph scheduling and reducing allocator pressure.  
- **SYCL**: Introduced early rejection of unsupported flash attention configurations (e.g., f16 K + f8_e4m3 V), avoiding silent crashes and improving debugability ([#33213](https://github.com/ggml-org/llama.cpp/pull/33213)).  

> ⚡ *Impact*: High-context MoE models (e.g., Inkling-2-Mini, Qwen3.6-27B) benefit from reduced latency and improved GPU utilization across backends.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix/Workaround |
|--------|------|-------|----------------|
| 🔴 High | `ADD_ID` fails with >65,535 tokens (CUDA/HIP) | Open (reported in #32444) | Patched in b12823 |
| 🔴 High | CUDA graphs hang GPU channel on RTX 5090 Laptop (sm_120) | Open (#27330) | `GGML_CUDA_DISABLE_GRAPHS=1` works |
| 🟡 Medium | Vulkan output corruption on Intel Arc B-series despite `GGML_VK_DISABLE_COOPMAT` | Open (#31828) | No fix yet; workaround limited |
| 🟡 Medium | `--split-mode tensor` crashes on second request (Tesla P100, CUDA) | Open (#29466) | Reproducible in v0.4.0-dev |
| 🟡 Medium | `logprobs` nondeterministic across identical requests (SYCL iGPU + MoE) | Open (#31206) | Seed does not pin results |

> 💡 *Note*: Several regression reports involve complex multi-GPU or MoE setups—common in production agents and RAG pipelines.

---

### **6. What This Means for Application Developers**  
- **Use `b12819+`** if deploying multi-GPU systems with tensor overrides to avoid unnecessary `cudaGetDeviceProperties()` overheads that degrade token generation speed.  
- **Avoid `ADD_ID` grid overflows** by upgrading to `b12823`; this is critical for models using deep context or speculative decoding.  
- **Leverage `GGML_VK_DISABLE_COOPMAT` cautiously**—while it mitigates Vulkan corruption on Intel Arc B-series, it may reduce performance; monitor impact on your workload.  
- **Enable `GGML_SYCL_USE_ASYNC_MEM_OP=0`** on Xe3 (Panther Lake) platforms until #31547 is resolved to prevent decode hangs.  
- **Monitor `logprobs` determinism** in SYCL/MoE environments—seed-based reproducibility remains unreliable.  

> 📌 *Recommendation*: For agent frameworks relying on deterministic outputs (e.g., tool calling, reasoning chains), prioritize builds from `b12823` onward and test with `--seed` and `--logprobs` enabled.

---  
*Digest generated from [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) — data as of 2026-11-28.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-28**

---

### **1. Today's Highlights**  
A surge in critical stability and correctness issues has emerged around the latest `0.40.18` release, particularly affecting high-end GPU systems like DGX Spark and Apple M5 Pro Macs. Multiple regressions—ranging from memory exhaustion and system freezes to malformed JSON responses and incorrect token handling—have been reported, with several PRs already underway to address them. The most pressing concerns involve MLX runner memory management, parser edge cases, and improper error handling for invalid request types.

---

### **2. Releases & Breaking Changes**  
- **No new releases** in the last 24 hours.  
- **Critical regression in `0.40.18`**: Several users report system-wide instability after upgrading from `0.34.4` to `0.40.18`, including crashes on DGX Spark (Issue #19927) and unresponsive machines when running `inkling-2-mini` (Issue #19879).  
- **API behavior change**: Invalid request options now return HTTP 500 instead of HTTP 400 (Issue #19945), which breaks client-side validation logic (PR #19954 proposed fix).

> 🔗 [Issue #19945](https://github.com/ollama/ollama/issues/19945) | 🔗 [PR #19954](https://github.com/ollama/ollama/pull/19954)

---

### **3. New Model & Hardware Support**  
- **No new models added** today.  
- **DeepSeek model requests remain active**: Users continue requesting downloadable versions of `deepseek-v4-flash:0731` (Issue #17510) and `deepseek-v4.1-flash` (Issue #18379), indicating demand for local deployment flexibility.  
- **Hardware-specific issues**:  
  - RTX 5090 fails to initialize under `CUDA_VISIBLE_DEVICES` on dual-GPU systems (Issue #19921).  
  - macOS MLX runner exhibits aggressive cache eviction on 64GB M5 Pro systems (Issue #19962).  
  - Vulkan performance on RX 5700 XT is 13x slower than upstream `llama.cpp` (Issue #19747).

> 🔗 [Issue #19921](https://github.com/ollama/ollama/issues/19921) | 🔗 [Issue #19747](https://github.com/ollama/ollama/issues/19747)

---

### **4. Performance & Optimization**  
- **MLX runner inefficiencies**: Persistent cache growth overcounts against available RAM due to double-counting in `snapshotWorkspace` (PR #19964).  
- **Inefficient string operations**: Image marker construction uses O(N²) string ops, causing CPU spikes even for small requests (Issue #19885).  
- **Redundant re-tokenization**: `/api/chat` truncation re-renders and re-tokenizes full history per dropped message (Issue #19942).  
- **Hybrid model inefficiency**: MLX runner re-reads up to 8k tokens during chat follow-ups (Issue #19952).  
- **Parser optimizations in progress**: PRs #19956 and #19590 aim to fix whitespace trimming after `</think>` in `cogito` and `deepseek3` parsers, improving streaming fidelity.

> 🔗 [PR #19964](https://github.com/ollama/ollama/pull/19964) | 🔗 [Issue #19885](https://github.com/ollama/ollama/issues/19885) | 🔗 [PR #19956](https://github.com/ollama/ollama/pull/19956)

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|--------|------|--------|------------|
| 🚨 Critical | `inkling-2-mini` crashes DGX Spark (OOM + CPU spike) | System unresponsiveness, hard reboot required | [Closed](https://github.com/ollama/ollama/issues/19879) |
| 🚨 Critical | `0.40.18` upgrade causes system freeze on multiple models | Full system lockup, not limited to one model | [Open](https://github.com/ollama/ollama/issues/19927) |
| 🟡 High | MLX prefix cache evicted at ~64k tokens (Issue #19819) | Re-prefills entire conversation, kills latency | [Open](https://github.com/ollama/ollama/issues/19819) |
| 🟡 High | `max_tokens: 0` returns 10 tokens instead of empty response | Breaks downstream logic expecting empty output | [Open](https://github.com/ollama/ollama/issues/19965) |
| 🟡 Medium | Invalid `options` return HTTP 500 instead of 400 | Clients cannot validate input, leading to silent failures | [PR in review](https://github.com/ollama/ollama/pull/19954) |

> 🔗 [Issue #19819](https://github.com/ollama/ollama/issues/19819) | 🔗 [Issue #19965](https://github.com/ollama/ollama/issues/19965)

---

### **6. What This Means for Application Developers**  
- **Avoid `0.40.18` until patches land**: If using high-memory or multi-GPU setups (especially DGX Spark or RTX 5090), roll back to `0.40.17` or earlier to prevent system crashes.  
- **Validate input types strictly**: Due to HTTP 500 errors on invalid `options`, add robust type checking in clients—don’t rely on Ollama’s error codes.  
- **Expect inconsistent streaming behavior**: Issues with `</think>` whitespace handling and reasoning index misalignment may break agent workflows relying on precise token-level control.  
- **Monitor cache and memory usage closely**: With MLX runner aggressively evicting history beyond 64k tokens, long-running agents may lose context unpredictably.  
- **Prepare for parsing fixes**: If building tools that parse `cogito`, `deepseek3`, or `FunctionGemma` outputs, expect changes to stream handling (e.g., `</think>` whitespace) in upcoming releases.

> ✅ **Actionable**: Pin your Ollama version to `0.40.17` or earlier for production stability. Track PRs #19964, #19954, #19956, and #19961 for imminent fixes.

---  
*Digest generated: 2026-11-28 | Source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-28**

---

### **1. Today's Highlights**  
The latest LTS release, `v1.108.20`, stabilizes critical routing and cost tracking logic across major providers. Key fixes address token counting inaccuracies in Gemini and Anthropic integrations, while new PRs enhance MCP OAuth reliability and improve Prometheus observability for routed deployments. A notable regression in `v1.110.2` affecting Gemini image usage has been identified and is under active investigation.

---

### **2. Releases & Breaking Changes**  
- **`v1.108.20` (LTS)**: Released as the latest stable version. Always use `ghcr.io/berriai/litellm:lts` to stay updated.  
  🔗 [Release Notes](https://github.com/BerriAI/litellm/releases/tag/v1.108.20)  
- **Note**: The `lts` tag now points to this version; no breaking changes expected in patch updates.

---

### **3. New Model & Hardware Support**  
- **Claude 5.x on Bedrock Mantle**: PR #54946 introduces native support for pricing and serving Claude models via the `bedrock_mantle` provider in Rust. This enables lower-latency routing with full cost tracking parity.  
  🔗 [PR #54946](https://github.com/BerriAI/litellm/pull/54946)  
- **ElevenLabs Diarization**: PR #31324 adds support for `diarize=true` and multi-channel speaker separation in speech-to-text via LiteLLM, enabling accurate transcription of group conversations.  
  🔗 [PR #31324](https://github.com/BerriAI/litellm/pull/31324)

---

### **4. Performance & Optimization**  
- **Stream Reassembly Fix**: PR #31277 ensures `stream_chunk_builder` uses metadata from the *first* chunk correctly, preventing incorrect prompt token counts during streaming.  
  🔗 [PR #31277](https://github.com/BerriAI/litellm/pull/31277)  
- **Token Counter Accuracy**: PR #31280 fixes `token_counter` to include tool function names in prompt tokens — a previously missed but meaningful component.  
  🔗 [PR #31280](https://github.com/BerriAI/litellm/pull/31280)  
- **Cost Tracking Precision**: PR #31304 ensures custom pricing rules are honored during Vertex AI passthrough cost calculation, avoiding overbilling due to misaligned tracking.  
  🔗 [PR #31304](https://github.com/BerriAI/litellm/pull/31304)

---

### **5. Stability & Regressions**  
- **Critical Regression**: `v1.110.2` reintroduced an issue where `Gemini image models` incorrectly report `thoughtsTokenCount` outside `candidatesTokenCount`, leading to billing discrepancies. This regresses a fix from `v1.108.10`.  
  🔗 [Issue #54804](https://github.com/BerriAI/litellm/issues/54804)  
- **OAuth Race Condition**: Multiple PRs (#54812, #54815, #54816) address concurrent OAuth credential revocation and reauthentication issues in MCP, preventing stale sessions and UI desync.  
  🔗 [PR #54812](https://github.com/BerriAI/litellm/pull/54812), [PR #54815](https://github.com/BerriAI/litellm/pull/54815), [PR #54816](https://github.com/BerriAI/litellm/pull/54816)  
- **UI Performance**: Users report extreme slowness in the LiteLLM UI (`v1.82.x`) — a known issue being tracked in #23005. No fix yet in progress.

---

### **6. What This Means for Application Developers**  
- **Use `lts` images**: Avoid instability by always pulling `ghcr.io/berriai/litellm:lts` — it’s your safest path to production stability.  
- **Monitor cost accuracy**: If using Gemini image models or custom pricing, verify that `prompt_tokens` and `usageMetadata.thoughtsTokenCount` align with upstream billing.  
- **Enable structured output safely**: For Anthropic models, ensure you’re using `output_config.format` (GA API) instead of legacy `output_format`.  
- **Watch for UI delays**: If using older versions (`v1.82.x`+), expect sluggishness in the admin dashboard — consider upgrading to `v1.108.20` or later.  
- **Build robust guards**: With new MCP OAuth improvements, developers can now enforce tighter guardrails on tool calls via local policy checks (see #37929).  

👉 **Actionable**: Update to `v1.108.20` immediately if running LTS; avoid `v1.110.2` until the Gemini regression is patched.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-11-28**

#### **1. Today's Highlights**  
The Unsloth team made significant progress in GPU memory management and model loading reliability, particularly for Windows and Apple Silicon users. Key PRs include fixing CUDA memory overestimation on integrated GPUs (e.g., RTX Spark N1X), improving GGUF tensor handling for BF16 precision, and enabling 4-bit QLoRA without `bitsandbytes` via a stand-in package. These changes enhance stability and compatibility across diverse hardware configurations.

#### **2. Releases & Breaking Changes**  
*None*  
No new releases were published in the last 24 hours. However, ongoing work in PRs suggests potential breaking changes in future versions related to model quantization behavior (e.g., `load_in_8bit="int8"` now selects rotated LoRA base) and GGUF loader defaults.

#### **3. New Model & Hardware Support**  
- ✅ **RTX Spark N1X (Windows)**: Memory estimation now caps at actual allocatable limits, preventing crashes due to OS commit accounting errors ([PR #20086](https://github.com/unslothai/unsloth/pull/20086)).
- ✅ **Apple Silicon (M5 Max)**: Studio installs now default to `torch==2.14.1`, unlocking up to **1.45x faster MPS inference** vs. 2.13 ([PR #20066](https://github.com/unslothai/unsloth/pull/20066)).
- ✅ **GGUF Architectures**: Full support added for `inkling2`, `inkling2_loop`, and `qwen3.5` with fused attention tensors (`attn_qkv_gate`, `ssm_beta_alpha`) in packed format ([PRs #20080, #20070](https://github.com/unslothai/unsloth/pull/20080), [20070](https://github.com/unslothai/unsloth/pull/20070)).
- ✅ **4-bit QLoRA on Unsupported Platforms**: Stand-in `bitsandbytes` package enables training on systems where native `bitsandbytes` fails (e.g., ROCm, Windows ARM, missing CUDA wheels) ([PR #20096](https://github.com/unslothai/unsloth/pull/20096)).

#### **4. Performance & Optimization**  
- ⚡ **LoRA Training Speedup**: `gguf_packed=True` now uses constant-type compilation, recompute reuse, and optimized kernels — leading to **faster packed GGUF LoRA training** ([PR #20091](https://github.com/unslothai/unsloth/pull/20091)).
- 📈 **Batch Inference Efficiency**: Qwen-Image-2.1 batch processing now supports mixed prompt lengths in one forward pass, achieving **2.12x streamed throughput on A100** ([PR #20072](https://github.com/unslothai/unsloth/pull/20072)).
- 🔁 **Memory Estimation Accuracy**: GGUF KV cache allocation now weights by actual cache cell counts (especially SWA layers), improving prediction accuracy under dynamic contexts ([PR #20082](https://github.com/unslothai/unsloth/pull/20082)).
- 💾 **Live Denoise Preview Optimization**: Previews now cost zero CPU/GPU when no tab is active — critical for background rendering efficiency ([PR #20081](https://github.com/unslothai/unsloth/pull/20081)).

#### **5. Stability & Regressions**  
- 🔥 **Critical**: AMD GPU detection failure on Windows 11 (RX 6700) — reported in #17874; currently unresolved.  
- 🔥 **High Severity**: DSpark auto-selection incorrectly promotes slower decoding paths on CUDA builds ([PR #20087](https://github.com/unslothai/unsloth/pull/20087) proposed fix).
- 🐞 **Moderate**: ASR/transcription models not visible in API/logs despite being loaded ([#19387](https://github.com/unslothai/unsloth/issues/19387)); impacts debugging.
- 🐞 **Moderate**: `@skill` content causes prompt cache misses due to system prompt reprocessing ([#19212](https://github.com/unslothai/unsloth/issues/19212)); affects multi-turn agent workflows.
- 🐞 **Low**: Translations misclassify CR-delimited WebVTT as plain text ([#19472](https://github.com/unslothai/unsloth/issues/19472)) — fixed via PR [#19473](https://github.com/unslothai/unsloth/pull/19473).

#### **6. What This Means for Application Developers**  
- **Build robust agents with dynamic tooling**: The `@skill` cache miss bug (#19212) implies that tools relying on persistent state must be carefully designed to avoid redundant processing. Consider caching logic at the app level.
- **Leverage new 4-bit QLoRA support**: Your fine-tuning pipelines can now run on ARM or ROCm without requiring `bitsandbytes` — ideal for edge deployments or cloud environments with limited wheel availability.
- **Optimize for heterogeneous hardware**: Use `UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1` and portable resumes to reduce host-device transfer overhead during distributed training ([PR #20092](https://github.com/unslothai/unsloth/pull/20092)).
- **Handle GGUF metadata carefully**: When importing or exporting models, ensure `BF16` tensors are interpreted correctly — the loader now returns `torch.bfloat16` views directly ([PR #20097](https://github.com/unslothai/unsloth/pull/20097)).
- **Plan for SSO and multi-user scaling**: The feature request for a central hub with mesh compute nodes (#19842) signals future enterprise-grade deployment paths — consider designing your apps for shared state and cross-device sync early.

---  
*Digest generated from GitHub activity (2026-11-28). For real-time updates, monitor [unslothai/unsloth](https://github.com/unslothai/unsloth).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*