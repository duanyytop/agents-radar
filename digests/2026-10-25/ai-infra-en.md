# AI Infrastructure Digest 2026-10-25

> Generated: 2026-10-25 00:30 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-25**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of *hardware specialization, distributed robustness, and agent-centric optimization*. Projects are converging on high-performance, low-latency inference across diverse backends—especially AMD ROCm, Apple Silicon (MLX/Metal), and Qualcomm Hexagon—while prioritizing stability in complex workflows like speculative decoding, MoE execution, and multi-model concurrency. The rise of agent systems is driving demand for composability (e.g., KV cache policies), deterministic control flow, and real-time audio/speech output. Security and cost accuracy are now non-negotiable, with recent incidents underscoring the need for signed releases and precise billing.

---

### **2. Activity Comparison**

| Project       | Issues Open (Today) | PRs Merged (Today) | Release Status         |
|---------------|---------------------|--------------------|------------------------|
| **vLLM**      | 7                   | 8                  | None (stable v0.32.0)  |
| **SGLang**    | 9                   | 6                  | None                   |
| **llama.cpp** | 4                   | 5                  | None (b11869+ hotfixes)|
| **Ollama**    | 5                   | 4                  | **v0.40.11** (new)     |
| **LiteLLM**   | 5                   | 6                  | **v1.106.3+** (critical security update) |
| **Unsloth**   | 5                   | 4                  | None (beta changes pending) |

> 🔍 *Observation*: vLLM leads in PR velocity and issue density, reflecting its role as a foundational engine. LiteLLM stands out in release activity due to urgent security patching.

---

### **3. Model Support Race**

| New Model / Architecture       | Project(s) with Support | Notes |
|-------------------------------|-------------------------|-------|
| **Kimi-K3 (gfx942/MI325X)**   | vLLM ✅, SGLang 🟡 (tracking) | vLLM leads with ROCm kernel alignment and NVFP4 support |
| **DeepSeek-V4.1-Flash (MRV2)** | vLLM ✅, SGLang ✅, llama.cpp 🟡 | All three enable DBO/speculative decoding; vLLM has most mature fastpath |
| **Nemotron 3.5 Bolt 74B-A9B** | Ollama ✅ (MLX)           | Only project with native MLX + LiLiCorr support |
| **Cerebras Llama 3.1**        | LiteLLM ✅                | First major integration beyond OpenAI/Anthropic |
| **SANA-Sprint 0.6B (diffusion)** | SGLang ✅              | Emerging niche: text-to-image via efficient diffusion runtime |
| **UD-IQ1_S GGUF**             | Unsloth ✅                | Niche but important for quantized model streaming |

> 🏆 **Leader**: **vLLM** holds clear lead in *model diversity* and *hardware breadth*, especially in ROCm and speculative decoding. **Ollama** excels in *user-facing model delivery* (e.g., Nemotron, speech). **LiteLLM** dominates *provider catalog completeness*.

---

### **4. Performance Frontier**

| Optimization Focus          | Leading Projects                     | Key Developments |
|------------------------------|--------------------------------------|------------------|
| **KV Cache Efficiency**      | vLLM (NVFP4), Unsloth (preempt-ram) | vLLM’s `FLASHINFER_MLA` cuts KV from 576B → 352B; Unsloth enables shared cache |
| **Speculative Decoding**     | vLLM, SGLang                         | vLLM adds draft-acceptance fastpaths; SGLang fixes ngram corruption |
| **MoE & Distributed Serving**| SGLang, vLLM, Unsloth               | SGLang targets MoE graph capture; Unsloth enables sharded loading |
| **Kernel-Level Tuning**      | vLLM, llama.cpp                      | Triton pivot selection (vLLM); Hexagon team-split attention (llama.cpp) |
| **Batch & Streaming**        | LiteLLM, SGLang                      | LiteLLM parses batch-tier costs; SGLang improves reduce-scatter for Engram |

> ⚙️ **Trend**: Low-level kernel optimization (Triton, Flash Attention) is critical for edge-case performance, while system-level optimizations (shared KV, offloading) drive scalability in agent workloads.

---

### **5. Layer Positioning**

| Project       | Primary Layer                    | Secondary Role                              | Differentiator |
|---------------|----------------------------------|---------------------------------------------|----------------|
| **vLLM**      | Inference Engine (GPU)           | Model Serving, Speculative Decoding         | Industry-standard backend for cloud-scale inference |
| **SGLang**    | Distributed Serving Framework    | Multi-node orchestration, Diffusion Runtime | Focus on correctness in large-scale, heterogeneous deployments |
| **llama.cpp** | Local Runtime (Edge/On-Prem)     | NPU Support (Hexagon), Quantization         | Best-in-class on-device inference (Snapdragon, Apple Silicon) |
| **Ollama**    | Developer Gateway / CLI Tool     | Agent Backend, Speech Integration           | End-user-first UX with macOS-native features |
| **LiteLLM**   | Universal API Gateway            | Cost Tracking, Provider Abstraction         | Central hub for cross-provider routing and billing |
| **Unsloth**   | UI-First Runtime + Training Tool | Parallel Chat, Tensor Parallelism           | Strong focus on developer experience and training scalability |

> 🎯 **Positioning Insight**:  
> - **vLLM/SGLang** = Core inference engines for production-grade systems  
> - **llama.cpp** = On-device/edge deployment champion  
> - **Ollama** = Developer experience layer (CLI, voice, agents)  
> - **LiteLLM** = Cross-platform API abstraction layer  
> - **Unsloth** = Hybrid runtime + UI stack for interactive development

---

### **6. Trend Signals**

#### 🔥 **Key Trends Extracted from Today’s Activity**
1. **ROCm Democratization**: AMD RDNA3/4 consumer GPUs are now first-class targets (SGLang, vLLM), enabling cheaper, accessible inference.
2. **Agent-Driven Optimization**: Features like `--preempt-ram`, shared KV caches, and `preserve_thinking` show a shift toward long-running, multi-turn agent sessions.
3. **Security as a First-Class Concern**: LiteLLM’s yanked release highlights that trust in open-source infra is fragile—image signing, key rotation, and audit trails are now mandatory.
4. **Quantization Composability**: NVFP4, UD-IQ1_S, MXFP4 — multiple new formats indicate a move toward flexible, workload-specific quantization.
5. **Hybrid Workflows Are the Norm**: Diffusion models, vision, speech, and tool use are no longer add-ons—they’re integrated into core pipelines.

#### 🛠️ **What Application Developers Should Watch**
- **Avoid v0.32.0 for Qwen4Exp** (vLLM) — use v0.31.1 until crash fix lands.
- **Monitor `NCCL_GRAPH_REGISTER=0`** for Kimi-K3/Draft-DCP (SGLang).
- **Validate JSON nesting depth** in llama.cpp — potential DoS vector.
- **Update LiteLLM image signatures** immediately — old keys are invalid.
- **Benchmark MLX vs. non-MLX** on Apple Silicon — performance divergence is real.
- **Prepare for programmable KV cache** (vLLM RFC #59538) — future agent systems will rely on it.

> ✅ **Final Takeaway**: The infrastructure layer is maturing rapidly. Choose your stack based on *deployment context* (cloud vs. edge), *workload type* (batch vs. agents), and *security posture*. The era of “just run a model” is over—reliability, cost control, and composability are now table stakes.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-25**

---

### **1. Today's Highlights**  
The vLLM project continues strong momentum in hardware and model specialization, with critical PRs advancing ROCm support for Kimi-K3 on gfx942/gfx950, including alignment of AITER Triton kernels and NVFP4 KV cache for dense MLA models. Two high-impact bugfixes were merged: one resolving ORCA metric aggregation across data-parallel engines, and another fixing incorrect `extra_args` forwarding in beam search — both directly affecting production-grade inference reliability.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **Kimi-K3 (gfx942 / MI325X)**: New ROCm-specific optimizations and recipe alignment ([PR #63520](https://github.com/vllm-project/vllm/pull/63520)) improve inference stability and performance on AMD RDNA4 GPUs.  
- ✅ **DeepSeek-V4.1-Flash (MRV2)**: Added support for DBO + speculative decoding and DCP ([PR #61464](https://github.com/vllm-project/vllm/pull/61464)), enabling more efficient draft-acceptance workflows.  
- ✅ **NVFP4 KV Cache**: Experimental support added for dense MLA models like DeepSeek-V3.1 and Kimi-K3 via `FLASHINFER_MLA`, reducing per-token KV cache memory from 576B (FP8) to 352B ([PR #63203](https://github.com/vllm-project/vllm/pull/63203)).  
- ⚠️ **ROCm Attention Backend (`ROCM_ATTN`)**: Bug identified on RDNA4 GPUs for head sizes ≥96 and MHA configurations ([Issue #62697](https://github.com/vllm-project/vllm/issues/62697)) — may impact stability on certain AMD GPUs.

---

### **4. Performance & Optimization**  
- 📈 **Triton Kernel Optimization**: The monolithic top-k kernel now avoids fallback to full-vocab search by improving pivot selection from initial logits, addressing outlier gather misses on MiMo-V2.6 (~6–10% of rows affected) ([Issue #61998](https://github.com/vllm-project/vllm/issues/61998)).  
- 🔥 **Fastpath Improvements (DRAFT-Prepare)**: Draft-path fastpaths introduced for DeepSeek-V4.1 Flash serving on gfx950: shared-output deduplication, parallel pad-tail fix, and KV-only context insert ([PR #63182](https://github.com/vllm-project/vllm/pull/63182)).  
- 💡 **Metadata Fusion**: Host-side metadata math is being offloaded from torch dispatches to reduce latency in eager decode paths ([PR #63523](https://github.com/vllm-project/vllm/pull/63523)).  
- 🧩 **KV Compression RFC**: A reusable, pluggable KV compression layer proposed for transfer/storage efficiency ([RFC #59538](https://github.com/vllm-project/vllm/issues/59538)) — could enable future storage-aware caching strategies.

---

### **5. Stability & Regressions**  
High-severity issues reported today:  
1. **CUDA Illegal Memory Access Crashes**:  
   - Qwen4Exp (Qwen3.8-Flash-Next) single prefill >262k tokens crashes engine on v0.32.0 due to native boundary crossing ([Issue #63383](https://github.com/vllm-project/vllm/issues/63383)). *Fix pending.*  
   - Qwen3.8-27B (GDN hybrid) with PP=3 on sm_86 causes illegal memory access (Xid 31) with prefix caching ([Issue #63505](https://github.com/vllm-project/vllm/issues/63505)). *Regression since v0.28.0.*  
2. **Speculative Decoding Bugs**:  
   - Ngram speculative decoding produces corrupted output on hybrid GDN Qwen3.5 models ([Issue #39273](https://github.com/vllm-project/vllm/issues/39273)).  
   - V1 thinking budget corrupts multi-token reasoning_end_str under speculative decoding ([Issue #58485](https://github.com/vllm-project/vllm/issues/58485)).  
3. **ROCm Runtime Faults**:  
   - `ROCM_ATTN` returns wrong attention and can fault GPU on RDNA4 with specific head sizes ([Issue #62697](https://github.com/vllm-project/vllm/issues/62697)).

---

### **6. What This Means for Application Developers**  
- **Use `--kv-cache-dtype nvfp4` cautiously**: While it cuts KV cache footprint significantly, it’s experimental and may have edge-case correctness implications — validate with your workload.  
- **Avoid v0.32.0 for large-context Qwen4Exp models**: Use v0.31.1 until #63383 is resolved; this affects agents using long input sequences.  
- **Enable proper ORCA metrics in DP deployments**: The fix in #63445 ensures load-balancing gateways receive accurate per-endpoint metrics — essential for dynamic routing.  
- **Monitor ROCm support for Kimi-K3**: If deploying on AMD gfx942/Mi325X, use the updated recipe (#63520) and avoid `ROCM_ATTN` if head size ≥96.  
- **Plan for programmable KV cache (RFC #57103)**: Future agent systems will benefit from composable policies for session retention, movement, and quota — early adopters should track progress.

---  
*Digest generated from GitHub activity: [vllm-project/vllm](https://github.com/vllm-project/vllm) | October 25, 2026*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-10-25

---

### **1. Today's Highlights**  
The SGLang project continues to prioritize stability and performance across diverse hardware, with critical fixes for flaky CI infrastructure (#42752) and multiple crash-inducing bugs in MoE and diffusion pipelines. Notable progress includes new kernel optimizations for Engram prefill sharding and improved KV cache management, while AMD support remains a key focus with ongoing enablement efforts.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking API/config changes were introduced. The `main` branch remains stable but under active refinement for edge-case correctness and CI reliability.

---

### **3. New Model & Hardware Support**  
- **AMD Consumer GPUs (RDNA3/RDNA4)**: Active tracking and enablement underway via #30599 — targeting `gfx1100`, `gfx1101`, `gfx1200`, and `gfx1201`. This expands ROCm support beyond datacenter Instinct chips into consumer-grade hardware.
- **Diffusion Models**: Native support for **SANA-Sprint 0.6B** is being added via #43671, enabling efficient text-to-image inference with minimal steps and high resolution (1024px).
- **NPU Integration**: Partial support for **PD_Disaggregation** with Mooncake transfer backend now in PR (#46223), signaling early traction in heterogeneous NPU deployment scenarios.

> 🔗 [AMD RDNA3/4 Support](https://github.com/sgl-project/sglang/issues/30599) | [SANA-Sprint 0.6B](https://github.com/sgl-project/sglang/issues/43671)

---

### **4. Performance & Optimization**  
- **Engram Prefill Optimization**: PR #46338 introduces reduce-scatter for large uniform prefill shards, reducing unnecessary all-reduce traffic and improving scalability in distributed inference.
- **DSA Interleave Overlap**: PR #46179 overlaps CP KV gather with indexer computation during interleave prefills, minimizing idle time and boosting throughput on SM90+ architectures.
- **Diffusion Runtime Gains**: Multiple PRs (#46246, #46337) target cross-attention reuse and incremental batch admission tracking, cutting redundant computation and memory pressure.
- **LoRA Test Simplification**: PR #45981 streamlines LoRA testing pipeline, reducing CI runtime and increasing test coverage without sacrificing validation rigor.

> 🔗 [Reduce-Scatter for Engram](https://github.com/sgl-project/sglang/pull/46338) | [DSA KV-Gather Overlap](https://github.com/sgl-project/sglang/pull/46179)

---

### **5. Stability & Regressions**  
Critical issues reported today highlight instability in complex configurations:

| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| 🚨 High | #45367 | Kimi-K3 DCP a2a produces garbled decode output on 2-node GB300 when NCCL graph registration is enabled; workaround: `NCCL_GRAPH_REGISTER=0` | ❌ No fix yet |
| 🚨 High | #46316 | DeepSeek-V4-Flash NVFP4 + `flashinfer_megamoe` + dp-attention fails during decode CUDA graph capture due to undeclared sum group | ❌ No fix yet |
| 🟡 Medium | #46314 | 11 correctness bugs in diffusion quantization layer (MXFP4, FP8, ROCm) affecting model accuracy | ✅ In review (PR #46302) |
| 🟡 Medium | #46312 | AWQ checkpoints fail to load on CUDA due to missing `sglang.kernel_api_logging` module | ❌ No fix yet |
| ⚠️ Low | #42752 | Flaky CI tests and infrastructure failures in `PR Test Base/Extra` impacting PR validation | ❌ Ongoing investigation |

> 🔗 [Kimi-K3 DCP Crash](https://github.com/sgl-project/sglang/issues/45367) | [DeepSeek-MegaMoE Graph Failure](https://github.com/sgl-project/sglang/issues/46316)

---

### **6. What This Means for Application Developers**  
- **Avoid complex MoE + multi-tool agentic prompts** on GLM-5.3-Flash until #36669 is resolved — expect degenerate outputs (`!` repetition).
- **Use `NCCL_GRAPH_REGISTER=0`** when deploying Kimi-K3 or DeepSeek-V4-Flash with DCP across nodes until #45367 is patched.
- **Expect instability in diffusion workflows** until #46314 and #46302 are merged — verify quantization correctness manually.
- **Leverage new optimization PRs** like #46338 and #46179 for better throughput in large-scale, multi-node deployments.
- **Monitor CI health** — frequent flaky runs may delay merges; consider using `--skip-ci` temporarily if needed.

> 💡 Pro Tip: Use `--enable-deterministic-inference` cautiously — it may not work as expected on hybrid Mamba or W4A4 checkpoints (#36291).

---  
*Digest generated from GitHub activity (2026-10-25). For real-time updates, follow [SGLang GitHub](https://github.com/sgl-project/sglang).*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-25**

---

### **1. Today’s Highlights**  
The latest updates focus on critical stability fixes for MoE models, Flash Attention on Hexagon/HMX, and robustness in Jinja templating and JSON parsing. Key improvements include a fix for MoE expert cache corruption due to quant scale propagation and a resolution to head-splitting logic in multicore HMX flash attention, enhancing performance on Qualcomm Snapdragon platforms.

---

### **2. Releases & Breaking Changes**  
No new release versions were published today. However, the following PRs introduce significant behavioral changes:  
- **`hexagon: KV-head team split for multicore HMX flash attention`** ([#31055](https://github.com/ggml-org/llama.cpp/pull/31055)) restructures Flash Attention execution on Hexagon NPUs by grouping cores into teams based on `gcd(n_kv_heads, N)`, improving load balance and avoiding redundant computation across KV heads. This may affect performance tuning for large MoE models on HTP v75 and later devices.  
- **`server: refactor server entrypoint`** ([#31113](https://github.com/ggml-org/llama.cpp/pull/31113)) introduces a modular `server_role` abstraction to cleanly separate router, single, and download modes—improving maintainability but requiring careful review of custom deployment scripts using `llama-server`.

---

### **3. New Model & Hardware Support**  
- **Hexagon (Snapdragon)**: Enhanced support for **multicore HMX Flash Attention** with dynamic core-teaming, enabling better utilization on devices like HTP v75 and newer.  
- **New Model**: The **DSV4.1 Flash** model is now under active conversion ([#31086](https://github.com/ggml-org/llama.cpp/pull/31086)), targeting high-throughput inference with optimized attention patterns.  
- **Backend Improvements**: Continued refinement of **SYCL** (Intel Arc B70) and **Metal** (Apple Silicon) backends, including better handling of BF16 matmuls and memory pinning for MoE caches.

---

### **4. Performance & Optimization**  
- **Flash Attention (Hexagon)**: The team-split approach reduces redundant KV head traversal by up to **~40%** on non-divisible `n_kv_heads` configurations, significantly improving throughput on multicore HMX setups.  
- **Moe Cache Optimization**: PR [#31122](https://github.com/ggml-org/llama.cpp/pull/31122) enables opt-in host expert page pinning, reducing `cudaMemcpyAsync` overhead from pageable memory by **~25–30%** during decode-phase MoE uploads.  
- **CUDA Kernel Tuning**:  
  - PR [#30788](https://github.com/ggml-org/llama.cpp/pull/30788) improves NVFP4 MMVQ performance for small-K, single-column outputs via lane-packed row assignment—critical for low-latency token generation.  
  - PR [#30727](https://github.com/ggml-org/llama.cpp/pull/30727) adds legacy Kepler GPU compatibility for cuBLAS GEMMs, restoring usability on older hardware.  

---

### **5. Stability & Regressions**  
Critical issues reported today include:  
1. **Crash in Metal backend** when using `BF16 src1` with `K >= 64` and `batch > 8` due to missing kernel fallback ([#30973](https://github.com/ggml-org/llama.cpp/issues/30973)). *Fix pending.*  
2. **Vision encoder output corruption on Hexagon** for certain image shapes (e.g., CLIP mmproj), resulting in garbled transcription loops ([#31104](https://github.com/ggml-org/llama.cpp/issues/31104)). *Reproduced in official Android ARM64 build.*  
3. **CUDA illegal memory access** during MTP draft generation when KV cache is rolled back ([#31077](https://github.com/ggml-org/llama.cpp/issues/31077)). Affects Gemma 4 31B + draft-MTP workflows on RTX 4060 Ti and RTX 5090.  
4. **Jinja stack overflow** in `from_json` when processing deeply nested `chat_template_kwargs` or `tools` parameters ([#31032](https://github.com/ggml-org/llama.cpp/pull/31032), [#31099](https://github.com/ggml-org/llama.cpp/pull/31099)) — potential DoS vector if unauthenticated endpoints are exposed. *Fixed via depth limiting.*

---

### **6. What This Means for Application Developers**  
- **Use `--moe-cache-mib` and `--models-memory-margin`** (newly added via PRs) to manage memory pressure in multi-model server deployments, especially with hybrid embedding/text workloads.  
- **Avoid `BF16` in Metal on Apple Silicon** until [#30973](https://github.com/ggml-org/llama.cpp/issues/30973) is resolved; use `F16` or `FP32` instead for high-K matmuls.  
- **Pin MoE expert pages** (`--moe-pinned-host`) to reduce GPU-CPU transfer latency in high-batch scenarios.  
- **Validate input JSON depth** in `/v1/chat/completions` endpoints—use `--max-nested-depth=128` (or similar) to prevent stack overflows.  
- **Test vision models on Hexagon** carefully; avoid certain image dimensions until [#31104](https://github.com/ggml-org/llama.cpp/issues/31104) is patched.  
- **Monitor MTP + MoE interactions**, particularly with checkpoint restoration—[#31077](https://github.com/ggml-org/llama.cpp/issues/31077) indicates a risk of GPU crashes in long-context sessions.

> ✅ **Recommendation**: Update to `b11869` or later, and audit all user-provided JSON inputs for nesting depth. Enable `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB` for Vulkan users hitting context window cliffs.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-25**

---

### **1. Today's Highlights**  
Ollama has introduced native speech generation on macOS via `ollama run` and the OpenAI-compatible `/v1/audio/speech` endpoint, enabling real-time audio playback of model responses. Concurrently, critical stability fixes were merged for MLX engine issues including `stop` sequence handling and memory accounting, while new PRs aim to improve tokenization accuracy and support for advanced models like Nemotron 3.5 Bolt.

---

### **2. Releases & Breaking Changes**  
- **v0.40.11**: Released today with full macOS speech support via `ollama run` and the `/v1/audio/speech` endpoint.  
  🔗 [GitHub Release v0.40.11](https://github.com/ollama/ollama/releases/tag/v0.40.11)  
  *Note: No breaking changes reported in this release; backward compatibility preserved.*

---

### **3. New Model & Hardware Support**  
- **MLX Engine**: Added support for **Nemotron 3.5 Bolt 74B-A9B** with per-layer expert configurations, LiLiCorr speculative decoding, and mixed-precision expert stacking.  
  🔗 [PR #19229](https://github.com/ollama/ollama/pull/19229)  
- **Vision Models**: Improved small-image detail preservation in compact Gemma 4 vision towers via dynamic grid rounding.  
  🔗 [PR #19247](https://github.com/ollama/ollama/pull/19247)  
- **Community Integrations**: Added **Pixeltable**, **Knovum**, **ShibaClaw**, and **Golem** to community integrations (DB/embeddings, desktop agents, frameworks).  
  🔗 [PR #19269](https://github.com/ollama/ollama/pull/19269), [PR #19261](https://github.com/ollama/ollama/pull/19261), [PR #19259](https://github.com/ollama/ollama/pull/19259), [PR #18816](https://github.com/ollama/ollama/pull/18816)

---

### **4. Performance & Optimization**  
- **MLX vs. llama.cpp**: A regression observed where `flint:40b-a2b-gguf-nvfp4` (MLX) is significantly slower than `flint:40b-a2b-qat-int4` on Apple Silicon (M3, 36GB). Benchmark data shows ~2x throughput difference under identical prompts.  
  🔗 [Issue #19254](https://github.com/ollama/ollama/issues/19254)  
- **Tokenization Accuracy**: PR #19265 replaces heuristic-based token counting with precise Anthropic Tokenization API + local caching, reducing context overflow risk in multimodal prompts.  
  🔗 [PR #19265](https://github.com/ollama/ollama/pull/19265)  
- **Memory Accounting**: Fixes to `ollama ps` and scheduler VRAM reporting ensure accurate memory usage for multi-model and hybrid attention loads.  
  🔗 [PR #17857](https://github.com/ollama/ollama/pull/17857), [PR #19263](https://github.com/ollama/ollama/pull/19263)

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR? | Notes |
|------|----------|--------|---------|-------|
| `OLLAMA_NUM_PARALLEL=1` ignored (two sessions running) | Critical | OPEN | ❌ | Memory-constrained users cannot enforce sequential execution. |
| `stop` sequences ignored on MLX engine | High | OPEN | ✅ [PR #19267](https://github.com/ollama/ollama/pull/19267) | Breaks deterministic control flow; fix pending merge. |
| Per-layer quantization overrides fail to load (MLX safetensors) | High | OPEN | ❌ | Shape mismatch causes model import failure. |
| Beam model returns empty responses in OMP | Medium | OPEN | ❌ | Intermittent failure despite working via OpenCode Go. |
| `max_completion_tokens` silently dropped | Medium | CLOSED | ✅ [PR #18608](https://github.com/ollama/ollama/pull/18608) | Fixed: now maps correctly to `num_predict`. |

---

### **6. What This Means for Application Developers**  
- **Speech Output Ready**: Apps can now stream synthesized speech directly from Ollama on macOS using standard OpenAI-compatible endpoints—ideal for voice-enabled agents or interactive UIs.  
- **MLX Users Must Watch for Regressions**: Be cautious when using `stop` sequences or mixed-precision models on MLX; current behavior may lead to unbounded generation or failed loads. Wait for PR #19267 before production use.  
- **Token Counting Is Now More Accurate**: Stop relying on rough heuristics—your prompt engineering will be more predictable, especially with multimodal inputs.  
- **Agent Frameworks Are Now Better Integrated**: With additions like ShibaClaw, Golem, and Knovum, developers can build self-hosted, persistent agents with Ollama as a backend without external APIs.  
- **Deployment Best Practices**: Use `OLLAMA_NUM_PARALLEL=1` only if you're managing memory strictly—current behavior appears inconsistent. Monitor for future fixes.

> 💡 **Pro Tip**: For high-throughput inference on Apple Silicon, benchmark both MLX and non-MLX variants of large models (e.g., Flint 40B) due to recent performance divergence.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-10-25**

---

#### **1. Today's Highlights**  
LiteLLM continues rapid iteration with a focus on security, cost accuracy, and stability. A critical security incident involving a compromised `v1.107.0` release has been resolved: PyPI and Docker images have been yanked, and users are urged to verify image signatures using the new cosign key from commit [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065). Meanwhile, multiple high-severity bugs related to budget enforcement, streaming usage tracking, and tool preservation have been addressed in PRs targeting core inference reliability.

---

#### **2. Releases & Breaking Changes**  
- **v1.106.3, v1.105.4, v1.104.6, v1.103.8**: All include a **critical breaking change** — the image-signing key has been rotated.  
  - ✅ **Action Required**: Users must update their verification workflows to use the new cosign key from commit [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).  
  - ❌ Old keys will no longer validate images or Helm charts.  
  - [GitHub Release Notes](https://github.com/BerriAI/litellm/releases/tag/v1.106.3) | [Security Advisory #47826](https://github.com/BerriAI/litellm/issues/47826)

---

#### **3. New Model & Hardware Support**  
- **Cerebras Llama 3.1 Models**: Added hyphenated aliases (`cerebras/llama-3.1-8b`, `cerebras/llama-3.1-70b`) with official pricing and context window data.  
  - ✅ Supported in `model_prices_and_context_window.json` and backup.  
  - [PR #48178](https://github.com/BerriAI/litellm/pull/48178) | [PR #48158](https://github.com/BerriAI/litellm/pull/48158)  
- **NVIDIA Nemotron 3.5 Super VL**: Updated pricing via Weights & Biases (W&B) serverless inference rates.  
  - [PR #48264](https://github.com/BerriAI/litellm/pull/48264)  
- **Azure Transcription Sessions**: Now routed through GA client_secrets endpoint; fixes prior 404 errors.  
  - [PR #48067](https://github.com/BerriAI/litellm/pull/48067)  

---

#### **4. Performance & Optimization**  
- **Batch & Ultrafast Tier Pricing**: LiteLLM now parses 12-hour prompt cache write costs for OpenAI’s latest tiers.  
  - Enables accurate cost modeling for batched inference workloads.  
  - [PR #48259](https://github.com/BerriAI/litellm/pull/48259)  
- **Streaming Efficiency**: Fixes for `tools` preservation and `usage` loss during early client disconnects improve billing fidelity.  
  - [PR #48267](https://github.com/BerriAI/litellm/pull/48267) | [PR #48220](https://github.com/BerriAI/litellm/pull/48220)  

---

#### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR |
|--------|------|--------|--------|
| 🔴 Critical | Budget enforcement bypassed in `v1.82.3` despite spend exceeding `max_budget` | OPEN | [Issue #26672](https://github.com/BerriAI/litellm/issues/26672) |
| 🔴 High | Streaming usage lost when client disconnects (billing gaps) | OPEN | [Issue #14457](https://github.com/BerriAI/litellm/issues/14457) |
| 🔴 High | `end_user` field incorrectly pinned to first request for shared virtual keys | OPEN | [Issue #31441](https://github.com/BerriAI/litellm/issues/31441) |
| 🟡 Medium | False `BudgetExceededError` under sustained load due to Redis sync delay | OPEN | [Issue #36926](https://github.com/BerriAI/litellm/issues/36926) |
| 🟡 Medium | Tools stripped from uncatalogued models in JSON providers | CLOSED | [PR #48267](https://github.com/BerriAI/litellm/pull/48267) |

> ⚠️ **Note**: Several regressions stem from recent changes to model routing and cost calculation logic. The team is actively addressing them via targeted PRs.

---

#### **6. What This Means for Application Developers**  
- **Immediate Action**: If you're using LiteLLM in production, **verify your image signatures today** using the new cosign key from [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).  
- **Billing Integrity**: Be cautious with streaming requests and long-running sessions — incomplete `usage` tracking can cause significant billing inaccuracies. Monitor logs for `spend = 0` on cached or interrupted calls.  
- **Custom Providers**: Ensure tools are preserved when using non-catalogued models via JSON config. Use `fix(openai_like): preserve tools for uncatalogued models` ([PR #48267](https://github.com/BerriAI/litellm/pull/48267)) in your fork or wait for v1.107+ release.  
- **Cost Modeling**: Leverage updated pricing for Cerebras and NVIDIA models, and use the new batch-tier cost parsing for accurate forecasting.  

> 💡 **Pro Tip**: Audit your `max_budget` and `budget_reset_period` configurations — some users report budget resets not persisting due to DB write issues ([#25386](https://github.com/BerriAI/litellm/issues/25386)). Use the latest patch releases to avoid silent overages.

---  
*Digest generated: 2026-10-25 | Source: GitHub @ BerriAI/litellm*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-25**

---

### **1. Today's Highlights**  
The Unsloth ecosystem continues to advance core inference and UI stability, with critical fixes for GPU memory management and model loading on Windows and macOS. Key developments include a new `--preempt-ram`-based KV cache sharing mechanism in `llama-server`, enabling efficient parallel chat handling, and significant UI refinements focused on storage visibility and user experience consistency.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, several breaking changes are pending in active PRs:  
- **PR #10301**: Introduces `--preempt-ram` support in `llama-server`, allowing Studio to manage shared KV caches across parallel chats. This will require updates to client-side logic if relying on per-chat cache isolation. [Link](https://github.com/unslothai/unsloth/pull/10301)  
- **PR #15175 & #15174**: New pipeline and tensor parallelism APIs (`apply_pipeline_parallel`, `sharded_loading`) enable multi-GPU training and inference for dense decoders (e.g., GPipe, 1F1B), but require explicit opt-in via `apply_tensor_parallel()` calls. [Link](https://github.com/unslothai/unsloth/pull/15175)  

> ⚠️ Users upgrading to v0.1.910-beta should expect potential regressions related to model loading (see Issue #15142).

---

### **3. New Model & Hardware Support**  
- **Hardware**: AMD gfx1201 (Radeon 8060S) users report ROCm launch failures post-llama.cpp b11696 update — this is currently under investigation (Issue #14085).  
- **Backends**: Metal out-of-memory recovery improvements landed in PR #14431, now reserving DSpark/DFlash sidecar memory during `--fit-target` operations on Mac.  
- **Quantization**: UD-IQ1_S quantization (used in DeepSeek-V4.1-Flash-1017-GGUF) now receives better memory accounting and streaming support via PR #15166.  

> ✅ No new model architectures or quant formats added today.

---

### **4. Performance & Optimization**  
- **Parallel Inference**: PR #10301 enables true KV cache sharing between parallel chats via `llama-server`-owned parking, reducing memory overhead by up to ~40% in high-concurrency scenarios (estimated).  
- **Model Offloading**: PR #15173 extends Wan video encoding streaming to model/sequential offload paths, improving latency during generation.  
- **Efficient Encoding**: PR #15166 introduces caching of negative prompt encodings in Wan workflows, cutting redundant UMT5 text encoder passes by ~50% on fp16-only GPUs like T4.  
- **Training Speed**: Tensor parallelism (PR #15174) now supports sharded loading of 16-bit 8B LoRA models across two 16GB GPUs, reducing training startup time by ~30%.  

> 📈 These optimizations target both inference throughput and training scalability on mid-tier hardware.

---

### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|--------|------|--------|------------|
| 🔴 High | [#15142](https://github.com/unslothai/unsloth/issues/15142) | All models fail to load after v0.1.910-beta update on Windows 11 Insider Preview | ❌ Open |
| 🔴 High | [#15022](https://github.com/unslothai/unsloth/issues/15022) | False "child not listening" error kills every GGUF load on Windows | ❌ Open |
| 🟡 Medium | [#14519](https://github.com/unslothai/unsloth/issues/14519) | CPU-based conversation-archive embedding stalls for long tool-heavy chats | ❌ Closed (no fix yet) |
| 🟡 Medium | [#15115](https://github.com/unslothai/unsloth/issues/15115) | `preserve_thinking=true` forced at launch, overriding custom templates | ❌ Open |
| 🟡 Medium | [#15172](https://github.com/unslothai/unsloth/issues/15172) | Studio crashes on image generation (core dumped) | ❌ Open |

> 💡 Note: Several issues stem from recent UI and backend refactors — particularly around port-handling, model lifecycle, and metadata persistence.

---

### **6. What This Means for Application Developers**  
- **Inference Workloads**: Leverage `--preempt-ram` and `parallel=4` for higher concurrency without excessive memory duplication. Monitor for edge cases in long-running chats (Issue #14519).  
- **Multi-Host Training**: Use `apply_tensor_parallel()` and `apply_pipeline_parallel()` (PRs #15174, #15175) to scale training across multiple GPUs; ensure `random_seed` validation is enforced (PR #15176).  
- **UI Integration**: Be cautious when using custom chat templates — `preserve_thinking=true` is now hard-coded at server launch (Issue #15115). Consider using `--no-reasoning-preserve` only if you control the full llama-server command line.  
- **Security & Reliability**: Avoid unvalidated `random_seed` values (PR #15176); validate inputs before sending to Studio API.  
- **Future-Proofing**: Expect increased complexity in model loading (especially on Windows/macOS), so implement robust error handling for `llama-server` startup failures (Issue #15022).

> ✅ Recommended: Audit all model-loading pipelines against v0.1.910-beta+ behavior, especially when integrating with remote providers (Issue #14811) or custom folders (Issue #15043).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*