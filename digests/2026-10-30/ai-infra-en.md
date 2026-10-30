# AI Infrastructure Digest 2026-10-30

> Generated: 2026-10-30 02:07 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-30**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem in late 2026 is rapidly maturing beyond monolithic LLM backends into a layered, hardware-aware stack. Projects are diverging along functional lines: high-performance engines (vLLM, SGLang) focus on low-latency, scalable inference; local runtimes (llama.cpp, Unsloth) prioritize portability and edge deployment; gateways (LiteLLM) enable multi-provider abstraction and cost control; while fine-tuning platforms (Unsloth) integrate training workflows directly into agent pipelines. A clear trend toward heterogeneous hardware support—especially AMD ROCm, Intel XPU, Apple MLX, and China’s sovereign T-Head/Ascend NPUs—is accelerating, driven by both performance demands and geopolitical diversification.

---

### **2. Activity Comparison**  

| Project       | Issues Open | PRs Merged (Last 24h) | Release Status |
|---------------|-------------|-------------------------|----------------|
| vLLM          | 187         | 12                      | None (stable v0.32.x) |
| SGLang        | 215         | 9                       | None (stable v0.5.22) |
| llama.cpp     | 168         | 11                      | b11998–b11988 (beta) |
| Ollama        | 192         | 8                       | None (stable v0.5.83) |
| LiteLLM       | 143         | 10                      | v1.108.0-rc.1 (signed) |
| Unsloth       | 176         | 7                       | v0.1.912-beta (no release) |

> ✅ *Insight*: vLLM and SGLang lead in issue volume, indicating active production-grade debugging. LiteLLM shows strong release velocity with security-hardened RCs, signaling maturity for enterprise adoption.

---

### **3. Model Support Race**  

| New Model / Architecture      | vLLM       | SGLang     | llama.cpp  | Ollama     | LiteLLM    | Unsloth     |
|-------------------------------|------------|------------|------------|------------|------------|-------------|
| **Qwen3-VL / Kimi K2.5**      | ✅ CUDA graph | ❌ (tracking) | ❌ | ❌ | ❌ | ❌ |
| **DeepSeek-V4.1-MXFP8**       | ✅ gfx950 + FlyDSL | ⚠️ crash (SM120) | ❌ | ❌ | ❌ | ❌ |
| **LFM3 series (1.7B, VL)**    | ❌ | ❌ | ⚠️ `response_format` crash | ✅ audio/video work | ✅ `response_format` | ✅ #15588 (requested) |
| **Gemma 3 (Flex Attention)**  | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ PR #16049 (fix) |
| **EXL3 (ExLlamaV3)**          | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ PR #7115 |
| **T-Head PPU (Zhenwu/M890P)** | ❌ | ✅ tracking | ❌ | ❌ | ❌ | ❌ |
| **Ascend NPU (MoE FP8)**      | ❌ | ✅ dynamic load balancing | ❌ | ❌ | ❌ | ❌ |

> 🏆 **Winner**: **SGLang** leads in strategic hardware expansion (T-Head, Ascend), while **Unsloth** gains ground in emerging model integration via EXL3 and Flows. **vLLM** remains strongest in mainstream multimodal support and MoE optimization.

---

### **4. Performance Frontier**  

| Optimization Focus           | vLLM                        | SGLang                         | llama.cpp                     | Ollama                   | LiteLLM                    | Unsloth                     |
|------------------------------|-----------------------------|--------------------------------|-------------------------------|--------------------------|----------------------------|-----------------------------|
| **KV Cache & Offload**       | Tiered memory, P2P offload  | HiCache, memory pooling        | q8_0 KV cache (CUDA)          | ROCm state bleeding fix  | Cost accounting (streaming) | Context compaction (high-priority) |
| **Batching & Scheduling**    | DiffKV tiling, DP delayer   | Multi-node DP attention        | CPU staging reuse             | Concurrency (MLX)        | Least-busy load balancing  | Train/Benchmark flows       |
| **Quantization**             | PDL gating, NVFP4 launch    | AITER GEMM (gfx950)            | IQ2_S, MXFP4, DP4A (Adreno)   | No new quant               | Z.AI, CLF AI providers     | Fused NF4 decode (1.6–2.3x) |
| **Distributed Serving**      | SM120, MooncakeConnector    | Multi-node DP attention        | Limited to GPU fusion         | Not applicable           | Redis-backed routing       | Not applicable              |
| **Kernel-Level**             | Triton sigmoid+bias, MoE grouping | AOTriton (diffusion)         | Metal MXFP4, SYCL DPAS        | Top-K chunk sort         | Pydantic parsing overhead  | Flex attention (Gemma 3)    |

> 🔥 **Top Focus Areas**: vLLM dominates in kernel-level attention optimizations and MoE scalability. SGLang pushes hard on diffusion and long-sequence handling. Unsloth leads in lightweight, efficient inference via fused kernels and memory-aware scheduling.

---

### **5. Layer Positioning**  

| Project       | Primary Layer                | Key Differentiators                                                                 |
|---------------|------------------------------|--------------------------------------------------------------------------------------|
| **vLLM**      | **Inference Engine**         | High-throughput, optimized for datacenter-scale MoE and multimodal models on NVIDIA/AMD |
| **SGLang**    | **Inference Engine + Gateway** | Full-stack orchestration: supports heterogeneous backends, speculative decoding, and multi-node serving |
| **llama.cpp** | **Local Runtime / Embedded** | Universal portability: Metal, OpenCL, SYCL, Hexagon — ideal for edge, mobile, and privacy-first use cases |
| **Ollama**    | **Gateway + Local Runtime**  | Developer-friendly CLI, agent-native features (audio, tool calling), MLX concurrency |
| **LiteLLM**   | **API Gateway / Proxy**      | Multi-provider abstraction, cost tracking, OpenAI spec compliance, security hardening |
| **Unsloth**   | **Fine-Tuning + Inference UI** | Integrated Flows pipeline for iterative training, benchmarking, and real-time agent development |

> 🎯 **Strategic Insight**: The layering is becoming increasingly specialized. Developers now pick tools based on *deployment context* (edge vs. cloud), *hardware constraints*, and *workflow needs* (training vs. inference).

---

### **6. Trend Signals**  

1. **Hardware Diversification Is Accelerating**  
   - AMD ROCm (gfx950/gfx1151/gfx1201), Intel XPU, Apple MLX, T-Head PPU, and Ascend NPU are no longer experimental. Each project now has dedicated PRs or issues targeting them.
   - *Developer Action*: Design deployments with hardware agnosticism in mind—use abstractions like LiteLLM or SGLang to avoid vendor lock-in.

2. **Agent Workflows Are Driving Core Innovation**  
   - Features like `--speculative-algorithm DSPARK`, `draft_num_predict=0`, `tool_calling`, and `Flows` indicate that agent-native capabilities are shaping engine design.
   - *Developer Action*: Prioritize projects with built-in agent support (e.g., Ollama, Unsloth) for next-gen applications.

3. **Stability & Reliability Now Outweigh Feature Velocity**  
   - Critical crashes in vLLM (Qwen3 prefix cache), SGLang (DeepSeek-V4 scheduler), and Ollama (ROCm state bleeding) highlight that production readiness is a top concern.
   - *Developer Action*: Avoid beta features in production until regressions are resolved. Use pinned versions (e.g., `v0.5.22`, `b11988`) and monitor GitHub issue trackers closely.

4. **Security & Cost Accountability Are Non-Negotiable**  
   - LiteLLM’s cosign-signed images and cost accounting fixes reflect growing demand for auditability and spend visibility in multi-provider environments.
   - *Developer Action*: Always validate cost logs and use signed images in CI/CD pipelines.

5. **Model-Specific Bugs Are Becoming Systemic**  
   - Issues like `response_format` crashes in LFM3 or silent tool call drops in Qwen3.8-MLX suggest that new model families are introducing unique runtime challenges.
   - *Developer Action*: Test against known model bugs before scaling. Monitor upstream PRs for quick fixes.

---

> ✅ **Final Recommendation for Infrastructure Engineers & Decision-Makers**:  
> Choose your stack based on **deployment profile**:  
> - **Cloud/Datacenter (MoE, multimodal)** → **vLLM**  
> - **Edge/Embedded (Apple, Android, Linux)** → **llama.cpp**  
> - **Agent Apps (tool calling, audio, streaming)** → **Ollama + Unsloth**  
> - **Multi-Provider / Cost Control** → **LiteLLM**  
> - **Heterogeneous Clusters (NPU, ROCm, etc.)** → **SGLang**  

Monitor critical regressions daily—stability is the new bottleneck.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-30

---

### **1. Today's Highlights**  
vLLM continues to advance its support for next-generation multimodal and MoE models, with critical work on ViT CUDA graph optimization and MooncakeConnector enhancements for disaggregated inference. Key performance gains are emerging for AMD ROCm (gfx950) and Blackwell SM120 hardware, while stability improvements address high-severity crashes in speculative decoding and KV offload under tiered memory configurations.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes observed. The project remains focused on feature delivery and stability fixes ahead of upcoming v0.33.0.

---

### **3. New Model & Hardware Support**  
- **Multimodal Models**: Active development for full CUDA graph support in ViT encoders (e.g., Qwen3-VL, Kimi K2.5, GLM-V) via [RFC #38175](https://github.com/vllm-project/vllm/issues/38175).  
- **ROCm (AMD)**:  
  - Performance optimizations for `Qwen3.8-Flash-Next gfx950 / MI355X` ([#59575](https://github.com/vllm-project/vllm/issues/59575)).  
  - Enabled AITER FlyDSL GEMM for DeepSeek V4.1 MXFP8 linears on gfx950 ([PR #60169](https://github.com/vllm-project/vllm/pull/60169)).  
  - Fixed kpool sparse indexer int32/int64 casts in GLM-5.3-Flash ([PR #63910](https://github.com/vllm-project/vllm/pull/63910)).  
- **Intel XPU**: Fix to `MooncakeStoreConnector` for Intel GPU support ([PR #62546](https://github.com/vllm-project/vllm/pull/62546)).  
- **CPU**: MRv2 now enabled by default on non-Triton CPU backends (Arm, IBM Z) ([PR #61995](https://github.com/vllm-project/vllm/pull/61995)).

---

### **4. Performance & Optimization**  
- **Attention & Kernel Optimizations**:  
  - DiffKV prefill tiling on SM80 achieves **3.0x speedup** on 200K-context chunks with `BLOCK_M=128 + KV tile 64` ([Issue #61095](https://github.com/vllm-project/vllm/issues/61095)).  
  - Triton sigmoid+bias top-k optimized when MoE grouping eliminates no experts ([PR #63076](https://github.com/vllm-project/vllm/pull/63076)).  
- **Quantization & Memory**:  
  - Added size-gated PDL to `silu_and_mul_nvfp4_quant` kernel for better SM90+ launch control ([PR #64494](https://github.com/vllm-project/vllm/pull/64494)).  
  - Avoid unused index caches in MiniMax-M3 sharing layers on ROCm ([PR #64403](https://github.com/vllm-project/vllm/pull/64403)).  
- **Scheduler & Pipeline**:  
  - Opt-in `--dp-prefill-delayer` reduces decode interruptions in MoE engines ([PR #61834](https://github.com/vllm-project/vllm/pull/61834)).  
  - Balanced decode batches across PP microbatches without restricting prefill scheduling ([PR #50410](https://github.com/vllm-project/vllm/pull/50410)).

---

### **5. Stability & Regressions**  
- **Critical Crashes**:  
  - **Qwen3.8-27B (GDN hybrid)** on sm_86: illegal memory access (Xid 31) with prefix caching; regression since v0.28.0 ([Issue #63505](https://github.com/vllm-project/vllm/issues/63505)).  
  - **DeepSeek-V4.1-Flash** fails on SM120 due to missing FlashInfer sparse-MLA decode kernel for `page_block_size=32` ([Issue #59203](https://github.com/vllm-project/vllm/issues/59203)).  
- **Correctness Bugs**:  
  - Kimi-K3 prefix cache miss at exact 1536-token boundary ([Issue #50235](https://github.com/vllm-project/vllm/issues/50235)).  
  - Logprob drift up to 0.2 when sequences share engine step ([Issue #59764](https://github.com/vllm-project/vllm/issues/59764)).  
- **Fixes in Progress**:  
  - Priority scheduling fix for request un-scheduling in same step ([PR #59963](https://github.com/vllm-project/vllm/pull/59963)).  
  - P2P KV offload failure-fast on peer faults ([Issue #63602](https://github.com/vllm-project/vllm/issues/63602)).

---

### **6. What This Means for Application Developers**  
Developers serving multimodal or large MoE models (e.g., Kimi, Qwen3-VL, GLM-5.3) should monitor for regressions in prefix caching and memory safety on newer GPUs (SM120, gfx950). Use `--dp-prefill-delayer` to stabilize decode throughput in agentic workflows. For production deployments on AMD or Intel GPUs, prioritize latest PRs like #60169 and #62546 for optimal performance. Enable `VLLM_SLEEP_RETAIN_CPU_BACKUP=1` if you need fine-grained memory control during sleep mode. Expect further improvements in structured output and speculative decoding consistency in v0.33.0.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-30**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to deepen its support for advanced inference patterns, with critical work on **T-Head PPU**, **AMD ROCm (gfx1151/gfx1201)**, and **Ascend NPU** infrastructure. High-priority issues around flaky CI and stability in speculative decoding (e.g., DeepSeek-V4 crashes) underscore ongoing challenges in production-grade reliability. New PRs focus on performance optimization for diffusion models and efficient KV cache management across heterogeneous backends.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. The latest stable version remains `v0.5.22`, with ongoing efforts to stabilize CI/CD workflows via PRs like [#47365](https://github.com/sgl-project/sglang/pull/47365) (NPU coverage baseline refresh).

---

### **3. New Model & Hardware Support**  
- **T-Head SAIL (Zhenwu 810/810E/M890P)**: Tracking first-class support via [Issue #37519](https://github.com/sgl-project/sglang/issues/37519). This marks a strategic expansion into China’s sovereign AI hardware stack.
- **AMD ROCm (gfx1151/gfx1201)**: Active perf improvements for diffusion models through PRs like [#46515](https://github.com/sgl-project/sglang/pull/46515) and [#46065](https://github.com/sgl-project/sglang/pull/46065), enabling dense attention paths and long-sequence handling.
- **Ascend NPU**: New features including dynamic expert load balancing ([#47266](https://github.com/sgl-project/sglang/pull/47266)), mixed-chunk support ([#47367](https://github.com/sgl-project/sglang/pull/47367)), and MoE FP8 dispatch ([#43994](https://github.com/sgl-project/sglang/pull/43994)).

---

### **4. Performance & Optimization**  
- **Diffusion Models (AMD)**: AOTriton kernel optimizations improve throughput by up to **~3×** on long sequences (16K tokens) via dense operand materialization ([#46065](https://github.com/sgl-project/sglang/pull/46065)).
- **HiCache & Memory Pooling**: PRs like [#47260](https://github.com/sgl-project/sglang/pull/47260) reduce per-decode overhead by caching static decode inputs, improving scheduler efficiency.
- **Multi-node DP Attention**: Fix in [#47319](https://github.com/sgl-project/sglang/pull/47319) ensures `/v1/loads` is served correctly across all listeners, avoiding node 0 bottlenecks.
- **XPU**: Added full prefill graph support ([#30980](https://github.com/sgl-project/sglang/pull/30980)) and FP8 MoE dispatch ([#43994](https://github.com/sgl-project/sglang/pull/43994)).

---

### **5. Stability & Regressions**  
- **Critical Crash**: DeepSeek-V4 scheduler crash due to `items_offset_list` becoming `None` under concurrent aborted streams ([#47218](https://github.com/sgl-project/sglang/issues/47218)). *High severity; no fix yet.*
- **Speculative Decoding Hang**: EAGLE speculative decoding hangs on Ampere GPUs under parallel sampling ([#35822](https://github.com/sgl-project/sglang/issues/35822)). *Regressed in v0.5.17+.*
- **Flaky CI**: Persistent CI failures in `PR Test Base/Extra` workflows impact PR validation ([#42752](https://github.com/sgl-project/sglang/issues/42752)), affecting release velocity.
- **Python 3.13 Compatibility**: Installation fails due to hidden Rust toolchain dependency from `outlines_core==0.1.26` ([#47242](https://github.com/sgl-project/sglang/issues/47242)).

---

### **6. What This Means for Application Developers**  
Developers building agents or high-throughput LLM apps should:
- **Avoid `--speculative-algorithm DSPARK`** on DeepSeek-V4 until [#47218](https://github.com/sgl-project/sglang/issues/47218) is resolved.
- **Expect instability on AMD gfx1151/gfx1201** if using long-sequence diffusion models without recent PR patches.
- **Plan for T-Head PPU and Ascend NPU** adoption via upcoming support — ideal for deployments requiring local compliance or low-latency inference.
- **Monitor CI health** before merging PRs; flakiness may delay validation.
- **Use `update_weights_from_disk` cautiously** — it silently loads weights into draft models without selector control ([#46806](https://github.com/sgl-project/sglang/issues/46806)).

> ✅ *Recommendation:* Pin to `v0.5.22` temporarily while critical regressions are addressed; track progress via GitHub issue trackers linked above.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-10-30**

---

### **1. Today's Highlights**  
The latest development in `llama.cpp` centers on expanded hardware and quantization support, with significant progress in Metal (Apple Silicon), OpenCL (Adreno), and SYCL (Intel Arc) backends. Critical fixes address model loading issues for LFM3 and Qwen3.5+ models, while performance optimizations continue to target MoE inference and flash attention efficiency across GPU platforms.

---

### **2. Releases & Breaking Changes**  
- **b11998**: Added support for *Mistral Le Chonk* model via DSA/sdpark extension; CI fix.  
  🔗 [PR #31376](https://github.com/ggml-org/llama.cpp/pull/31376)  
- **b11997**: Optimized tensor staging buffer reuse in CPU backend, eliminating direct-I/O bounce buffer overhead.  
  🔗 [PR #31321](https://github.com/ggml-org/llama.cpp/pull/31321)  
- **b11988**: Added native support for **Limite 1B - Violetto** GGUF model (architecture + conversion tools).  
  🔗 [Issue #29433](https://github.com/ggml-org/llama.cpp/issues/29433)  

> ✅ **Migration Note**: Users upgrading to b11988 should ensure their Limite 1B GGUF files are converted using the updated `gguf-py` toolchain.

---

### **3. New Model & Hardware Support**  
- **Models**:  
  - ✅ **Limite 1B - Violetto** (GGUF): Full support added via new arch definition and conversion pipeline.  
    🔗 [PR #29433](https://github.com/ggml-org/llama.cpp/issues/29433)  
  - ✅ **Mistral Le Chonk**: Extended DSA/sdpark support for improved context handling.  
    🔗 [PR #31376](https://github.com/ggml-org/llama.cpp/pull/31376)  
  - ❗ **LFM3-VL-2B-GGUF**: Still experiencing `response_format` crashes (see Stability section).

- **Hardware & Backends**:  
  - 🟩 **OpenCL**: Initial support for `iq2_s` quantization (AOS/SOA, tiled MM, DP4A for Adreno).  
    🔗 [PR #31267](https://github.com/ggml-org/llama.cpp/pull/31267)  
  - 🟩 **Metal**: Faster MXFP4 mat-vec kernel via fp16 bit trick (replaces lookup table); full threadgroup support for unary/binary/GLU ops.  
    🔗 [PR #31075](https://github.com/ggml-org/llama.cpp/pull/31075)  
  - 🟩 **Hexagon**: Basic `UPSCALE` op support with optimized 2x/4x nearest and bilinear 4x modes.  
    🔗 [PR #31331](https://github.com/ggml-org/llama.cpp/pull/31331)  
  - 🟩 **SYCL**: Added DPAS flash attention kernel for quantized KV cache (q4_0/q8_0); vectorized dequant stores for Q4_0/K-quants/IQ3/MXFP4.  
    🔗 [PRs #31125](https://github.com/ggml-org/llama.cpp/pull/31125), [#30976](https://github.com/ggml-org/llama.cpp/pull/30976)

---

### **4. Performance & Optimization**  
- **Metal**: MXFP4 mat-vec kernel now runs faster by avoiding threadgroup lookup tables and leveraging aligned 32-bit word loads.  
  🔗 [PR #31075](https://github.com/ggml-org/llama.cpp/pull/31075)  
- **SYCL**: Vectorized reordered-layout dequantization stores improve throughput for Q4_0, K-quants, IQ3, and MXFP4.  
  🔗 [PR #30976](https://github.com/ggml-org/llama.cpp/pull/30976)  
- **CUDA**: Tiled flash attention kernel now supports `q8_0` KV cache directly (previously fallback to scalar dequant).  
  🔗 [PR #31399](https://github.com/ggml-org/llama.cpp/pull/31399)  
- **GPU Fusion**: CUDA kernel fusion for Hadamard rotation reduces launch overhead in Prism/Hadamard models.  
  🔗 [PR #31398](https://github.com/ggml-org/llama.cpp/pull/31398)  
- **OpenCL**: `dp4a q4_0 GEMM` now used by default for batched matmul — improves accuracy without penalty.  
  🔗 [PR #30535](https://github.com/ggml-org/llama.cpp/pull/30535)  

> ⚠️ **Note**: Regression reported in `b11804` causing ~35% slower MoE prompt processing on Intel Arc B70 (SYCL/XMX-ESIMD path).  
> 🔗 [Issue #31262](https://github.com/ggml-org/llama.cpp/issues/31262)

---

### **5. Stability & Regressions**  
- **Critical**: LFM3 models (`LFM3-1.7B`, `LFM3-VL-2B`) fail when `response_format` is set (`json_schema` or `json_object`).  
  Error: `Unexpected empty grammar stack after accepting piece: 6 (30)`  
  🔗 [Issue #31328](https://github.com/ggml-org/llama.cpp/issues/31328)  
  ✅ **Fix PR**: [PR #31374](https://github.com/ggml-org/llama.cpp/pull/31374) — pending merge.

- **Severe**: Metal backend fails to initialize on macOS 14 / M2 Ultra due to `constexpr bfloat cast` in `unary.metal`.  
  🔗 [Issue #31272](https://github.com/ggml-org/llama.cpp/issues/31272)

- **Performance Regression**: SYCL MoE prompt processing ~35% slower on Arc Pro B70 between `d81d0d8fb` and `edc353842`.  
  🔗 [Issue #31262](https://github.com/ggml-org/llama.cpp/issues/31262)

- **Crash/Leak**: Potential memory leak during token generation with dual Intel B70 SYCL backend (`-sm tensor`).  
  🔗 [Issue #27845](https://github.com/ggml-org/llama.cpp/issues/27845)

---

### **6. What This Means for Application Developers**  
- ✅ **New Models**: You can now run **Limite 1B** and **Mistral Le Chonk** efficiently on Apple Silicon and Linux via `llama.cpp`’s expanding model support.  
- ⚙️ **Hardware Targets**: Optimize for **Intel Arc (B70)** using SYCL with `XMX-ESIMD` paths — but monitor for regressions in MoE workloads.  
- 📉 **Caution**: Avoid `response_format` with **LFM3** models until PR #31374 is merged. Use `--reasoning-budget 0` workaround if needed.  
- 🔍 **Debugging Tip**: If using `qwen35moe` on RTX 5090 (sm_120), expect suboptimal memory bandwidth utilization (~28% of roofline) — investigate `b11804` regression.  
- 🛠 **Tooling**: Consider enabling `--moe-cache-cpu-share auto` (PR #31286) for hybrid MoE inference to better manage CPU/GPU memory trade-offs.

> 💡 **Recommendation**: For production deployment, pin to `b11988` or later for stability and use pre-merged fixes from PRs listed above. Monitor GitHub for urgent stability updates.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-30**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its multimodal and agent-native capabilities, with critical fixes for audio/video handling in `lfm3-omni` and robust improvements to MLX backend performance. Key PRs enable concurrent generation on MLX, fix silent failures in tool calling and content array parsing, and improve memory accounting—essential for production-grade inference deployments.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes reported in the last 24 hours.*  
However, several high-priority PRs are addressing compatibility and correctness issues in OpenAI-compatible APIs:
- **PR #19381**: Fixes `/v1/models` returning `null` instead of `[]` when no models are installed — a breaking change for strongly-typed SDKs (e.g., .NET/Java). [GitHub PR #19381](https://github.com/ollama/ollama/pull/19381)
- **PR #19387**: Ensures empty embeddings return an empty array (`[]`) rather than `null`, aligning with OpenAI spec. [GitHub PR #19387](https://github.com/ollama/ollama/pull/19387)

---

### **3. New Model & Hardware Support**  
- **Audio/Video Input/Output**: Native support for audio and video input/output is under active development via `--audio`, `--speak`, and `--tts` CLI flags, particularly targeting models like `lfm3-omni` and `phonon`. [Issue #19396](https://github.com/ollama/ollama/issues/19396), [Issue #19380](https://github.com/ollama/ollama/issues/19380), [Issue #19378](https://github.com/ollama/ollama/issues/19378)
- **Ternary Quantization**: Feature request for support of ternary quantization used by *Bonsai 2*. [Issue #19388](https://github.com/ollama/ollama/issues/19388)
- **Korean TTS Support**: Request to extend phonon model’s multilingual support to include Korean. [Issue #19295](https://github.com/ollama/ollama/issues/19295)

---

### **4. Performance & Optimization**  
- **MLX Concurrency**: PR #19197 enables `OLLAMA_NUM_PARALLEL` support for MLX models, allowing multiple concurrent generations and reducing first-token latency. Default remains 1; higher parallelism requires more memory. [GitHub PR #19197](https://github.com/ollama/ollama/pull/19197)
- **Top-K Optimization on Metal**: PR #19392 optimizes `mlx.TopKIndices` by sorting chunks of 2048 values instead of entire rows, cutting multi-pass merge sort overhead on large vocabularies (~248K tokens). [GitHub PR #19392](https://github.com/ollama/ollama/pull/19392)
- **Speculative Drafting Control**: PR #19391 introduces `draft_num_predict=0` to disable speculative decoding per request—critical for benchmarking. [GitHub PR #19391](https://github.com/ollama/ollama/pull/19391)
- **Memory Accounting Fix**: PR #17857 corrects VRAM reporting for hybrid attention and multi-model loads, preventing misleading `ollama ps` outputs. [GitHub PR #17857](https://github.com/ollama/ollama/pull/17857)

---

### **5. Stability & Regressions**  
- **Critical: ROCm KV State Bleeding** ([#17847](https://github.com/ollama/ollama/issues/17847)): On AMD Strix Halo (gfx1151 iGPU), responses from sequential requests leak content from prior requests. Affects stability in multi-user or long-running sessions.
- **CUDA Host → CPU Fallback Failure** ([#17380](https://github.com/ollama/ollama/issues/17380)): Intermittent `CUDA error: shared object initialization failed` leads to silent fallback to CPU pinned buffers, degrading performance without warning.
- **Model Rollback Issue** ([#19385](https://github.com/ollama/ollama/issues/19385)): Users cannot revert to previous versions after updating a model (e.g., `qwen3:4b`). No rollback mechanism exists today.
- **Tool Calling Breakage in Qwen3.8-MLX** ([#19353](https://github.com/ollama/ollama/issues/19353)): Tool calls only work if assistant output is empty. Natural language preamble causes `tool_calls` to be dropped entirely.
- **GGUF Metadata Overflow** ([#19375](https://github.com/ollama/ollama/issues/19375)): Large MoE models with MXFP4 format fail due to unsupported tensor size overflow. Blocks deployment of cutting-edge models.

> ✅ **Fix PRs in progress**:  
> - PR #19397 addresses silent ignoring of `audio` field in `/api/chat`. [GitHub PR #19397](https://github.com/ollama/ollama/pull/19397)  
> - PR #19384 preserves reasoning in assistant messages with `content` as array. [GitHub PR #19384](https://github.com/ollama/ollama/pull/19384)

---

### **6. What This Means for Application Developers**  
- **Agent Builders**: Be cautious with `qwen3.8:27b-mlx` — avoid natural language prelude before tool calls. Use `--json` or ensure `content` is empty if relying on tool calling.
- **Multimodal Apps**: Do not rely on `images` field for audio input. Use native `audio` field once supported (tracked in [#19378](https://github.com/ollama/ollama/issues/19378)). Expect ongoing API refinement.
- **Production Deployments**: Avoid using `OLLAMA_NUM_PARALLEL=1` for strict sequencing — it may not prevent concurrency. Verify behavior with real workload testing.
- **Model Management**: There is no safe way to roll back models post-update. Implement version pinning externally until rollback is added.
- **SDK Integration**: Validate against OpenAI spec: expect `data: []` not `data: null` in `/v1/models` and embedding endpoints.

> 🔧 **Pro Tip**: Monitor PRs #19384, #19397, and #19391 for upcoming fixes to tool calling and streaming audio support—key for next-gen agent UIs.

---  
*Digest generated from GitHub data: ollama/ollama | 2026-10-30*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-10-30**

#### **1. Today's Highlights**  
The v1.108.0-rc.1 release introduces critical security hardening with signed Docker images via cosign, validating integrity through commit `e82a3c6`. Key stability improvements focus on cost accounting in streaming responses—particularly for OpenRouter and Gemini—where upstream cost data was previously lost or misreported. Parallel efforts in refactoring Redis and database dependencies are streamlining proxy reliability and scalability.

#### **2. Releases & Breaking Changes**  
- **v1.108.0-rc.1** is now available with **cosign-signed Docker images** for enhanced trust and supply chain security. Verify using:  
  🔐 [Verify signature](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)  
- **Breaking Change**: `rc/1.108.0` restores upstream token admission for legacy delegate servers (PR #49167), fixing a regression introduced in v1.103.0.  
- **Deprecation Note**: The `litellm.acompletion`/`aresponses` bridge pattern is being phased out in favor of native executors (PR #46707), affecting internal routing logic but not public APIs.

#### **3. New Model & Hardware Support**  
- **Z.AI models** now support `response_format` and `max_completion_tokens` (PR #48335). GLM-5V-Turbo pricing is fully integrated.  
- **CLF AI Gateway** added as an OpenAI-compatible provider with ten open-weight models (PR #39324).  
- **OpenAI audio models** (e.g., `gpt-4o-realtime`, `whisper-1`) now supported in real-time streaming mode with per-second billing (PR #35600).  
- **Azure AI Foundry Agents v2** integration enabled via `agent_reference` API (Issue #25372, resolved).

#### **4. Performance & Optimization**  
- **Streaming performance**: PR #49166 eliminates redundant `AttributeError` exceptions during Pydantic field parsing, reducing CPU overhead per chunk by up to 70% in high-throughput scenarios.  
- **Routing efficiency**: PR #47484 improves least-busy load balancing by reserving picked deployments atomically, preventing request bursts from concentrating on one node.  
- **Redis stack refactoring** (PRs #48958, #49162, #49163) enables future Rust-based backend migration and ensures state consistency across rolling deploys.

#### **5. Stability & Regressions**  
- **Critical**: Streaming cost loss in OpenRouter (`usage.cost` missing in final response) — Issue #16021 (closed), fixed in PR #46095.  
- **High Severity**: Gemini streaming tool call corruption due to `stream_chunk_builder` bug — Issue #25869 (open), impacting web search + tool use workflows.  
- **Cost Accounting**: Non-streaming OpenAI-compatible calls ignore `usage.cost` entirely (Issue #47533), leading to $0 spend logging despite actual costs.  
- **Data Loss**: In-memory spend buffers dropped on proxy shutdown (Issue #34872); persistent storage via Redis required.  
- **Security**: Provider-reported `cost` values trusted without unit validation can cause phantom spend (Issue #35829).  

#### **6. What This Means for Application Developers**  
- **Use `v1.108.0-rc.1`** for production-grade security and cost accuracy—especially if relying on OpenRouter, Gemini, or real-time audio.  
- **Avoid `n>1` streaming requests** until PR #38180 is merged; currently, they’re logged as a single completion.  
- **Explicitly configure Redis** for cost tracking, budget resets, and persistence—default in-memory state is volatile.  
- **Update tooling** to handle new `response_format` and `max_completion_tokens` support for Z.AI and CLF AI Gateway models.  
- **Monitor `/v1/chat/completions` cost logs** closely: streaming requests may show $0 spend even when upstream reports valid costs (Issue #48937).  

👉 For full context:  
- [Issue #16021](https://github.com/BerriAI/litellm/issues/16021)  
- [PR #49166](https://github.com/BerriAI/litellm/pull/49166)  
- [PR #48335](https://github.com/BerriAI/litellm/pull/48335)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-30**

---

### **1. Today's Highlights**  
The Unsloth project continues to advance its core inference engine and UI/UX capabilities, with key performance improvements for Gemma 3 on NVIDIA and AMD GPUs via flex attention optimizations. Significant progress in Flows (data pipelines) now enables full fine-tuning workflows with hold-out splits, editable data recipes, and unified Studio components—marking a major step toward production-grade agent development.  

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were published. Users should continue using `v0.1.912-beta` or later for latest fixes.

---

### **3. New Model & Hardware Support**  
- ✅ **LFM3-1.7B** support requested (#15588): The new LFM3 series from LiquidAI is under active consideration; users are encouraged to test and provide feedback.  
- ✅ **MLX-backed models**: Enhanced support for Apple Silicon (MLX backend), including improved memory estimation and model listing via `/v1/models`.  
- ✅ **EXL3 (ExLlamaV3)**: Additive backend support added via PR #7115 — enables 2–8-bit quantization and MoE model handling, expanding flexibility beyond bitsandbytes.  
- ✅ **Windows + AMD GGUF**: Fixes addressing commit charge issues on AMD systems are being tracked (PR #16046).  

> 🔗 [Issue #15588](https://github.com/unslothai/unsloth/issues/15588) | [PR #7115](https://github.com/unslothai/unsloth/pull/7115)

---

### **4. Performance & Optimization**  
- ⚡ **Gemma 3 Flex Attention Fix**: PR #16049 resolves a critical regression where short prompts caused fallback to eager attention, degrading throughput by up to 60% on high-memory cards (L4, A10, RTX 3090/4090). Now, all prompt orders compile efficiently.  
- ⚡ **Fused NF4 Decode**: Opt-in kernel (`UNSLOTH_DECODE_FUSED_NF4=1`) delivers **1.6–2.3x faster decoding per token** in batch size 1 for 4-bit Llama models.  
- 📈 **MLX Memory Estimator Accuracy**: PR #16021 corrects overestimation by charging attention scores based on actual width used (f16 vs. quantized KV cache), improving accuracy on Macs.  
- 🧩 **Flows Pipeline Performance**: Integration of Data Recipes and Train nodes (PRs #15604, #15611) enables iterative benchmarking and hold-out evaluation, reducing training overhead.  

> 🔗 [PR #16049](https://github.com/unslothai/unsloth/pull/16049) | [PR #16032](https://github.com/unslothai/unsloth/pull/16032) | [PR #16021](https://github.com/unslothai/unsloth/pull/16021)

---

### **5. Stability & Regressions**  
- 🔴 **Core Dumps on Model Ejection** (#14411): Models crash after a few turns due to undefined behavior during unloading. No fix PR yet — logs required for diagnosis.  
- 🔴 **Context Compaction Failure** (#15800): Long conversations fail to compact upon return, making them non-continuable. High-priority stability issue.  
- 🔴 **Audio Model Load Failures** (#16048): `vibevoice-1.5b-q4-ios.gguf` is incorrectly listed as loadable but fails due to quantized tensor mismatch. Removed from default list.  
- 🔴 **Windows AMD Commit Charge Bloat** (#16015): GGUF loads cause ~16 GB commit charge despite VRAM-only usage. PR #16046 in progress.  
- 🟡 **UI Lag in AppImage Studio** (#15999): Noted on Linux; likely related to rendering or GPU context switching.  

> 🔗 [Issue #14411](https://github.com/unslothai/unsloth/issues/14411) | [PR #16046](https://github.com/unslothai/unsloth/pull/16046)

---

### **6. What This Means for Application Developers**  
- **Build robust agents with Flows**: Use the new `Train` and `Benchmark` nodes to create self-validating, iterative fine-tuning pipelines with hold-out evaluation.  
- **Optimize for low-latency inference**: Enable `UNSLOTH_DECODE_FUSED_NF4=1` for 4-bit Llama models in batch-1 scenarios to achieve 2x+ speedups.  
- **Avoid platform-specific pitfalls**: On Windows AMD, monitor commit charge; use `llama-server.exe` warnings (PR #16046) to prevent OOM crashes.  
- **Be cautious with model sources**: Avoid `q4-ios` GGUFs if using audio.cpp — verify compatibility before deployment.  
- **Prepare for LFM3 and EXL3 integration**: Watch for future updates to support next-gen models and advanced quantization.  

> 💡 *Pro tip*: Use the MLX estimator accurately only after PR #16021 lands; otherwise, expect inflated memory estimates on Apple Silicon.  

---  
*Digest generated from GitHub activity on 2026-10-30. For real-time updates, follow [unslothai/unsloth](https://github.com/unslothai/unsloth).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*