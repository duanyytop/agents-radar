# AI Infrastructure Digest 2026-10-24

> Generated: 2026-10-24 01:00 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-24**

---

### **1. Ecosystem Overview**

The AI inference infrastructure landscape in Q4 2026 is defined by aggressive hardware specialization, rising complexity in distributed and heterogeneous serving, and growing urgency around security and correctness. Projects are diverging along performance, portability, and developer experience axes: vLLM and SGLang lead in high-throughput, low-latency engine optimization for datacenter-scale deployments; llama.cpp and Unsloth dominate lightweight, local inference on consumer-grade hardware; Ollama and LiteLLM serve as accessible gateways and orchestrators for developers and agents. A critical wave of security incidents — notably the compromised `litellm==1.107.0` release — underscores increasing attack surface in open-source tooling ecosystems.

---

### **2. Activity Comparison**

| Project         | Issues (Open) | PRs (Recent) | Release Status               |
|----------------|---------------|--------------|------------------------------|
| **vLLM**       | 318           | 52           | No new release; nightly focus |
| **SGLang**     | 421           | 68           | No new release; CI instability |
| **llama.cpp**  | 397           | 41           | `b11846`, `b11840`, `b11838` |
| **Ollama**     | 267           | 32           | v0.40.11-rc0 + Nemotron model |
| **LiteLLM**    | 526           | 29           | Security patch; yanked version |
| **Unsloth**    | 215           | 45           | v0.1.910-beta released        |

> 🔍 *Observation*: Despite fewer releases, **SGLang** and **LiteLLM** show highest activity in issues and PRs — reflecting intense development and stability challenges. **Unsloth** stands out with a major beta release, signaling maturity in local inference tooling.

---

### **3. Model Support Race**

| New Model / Architecture          | Supported By                     | Notes |
|-----------------------------------|----------------------------------|-------|
| **Qwen3.8-Flash-Next (GB10)**     | vLLM, SGLang, llama.cpp          | vLLM leads in optimizations; SGLang adds Engram/MLU support |
| **DeepSeek-V4-Flash / V4.1**      | SGLang (priority), vLLM (in progress) | SGLang has deeper kernel-level tuning |
| **Kimi-K3 (ROCm/Hopper)**         | vLLM (fixed), SGLang (tracking)   | vLLM now stable on ROCm |
| **Nemotron 3.5 Bolt E4B (128K)**  | **Ollama** (exclusive)            | First major vision-language model in Ollama Library |
| **Flint, MOSS-Image, Nemotron Bolt 4B (GGUF)** | **Unsloth** (beta)              | Only project offering full local GGUF support |
| **Cambricon MLU, T-Head SAIL, Ascend NPU** | **SGLang** (roadmap)             | Leading multi-hardware support initiative |

> 🏆 **Leader**: **SGLang** is ahead in cross-architecture model support, especially for emerging Chinese and domestic silicon. **Ollama** wins in curated, production-ready model availability.

---

### **4. Performance Frontier**

| Focus Area                 | Leading Projects                          | Key Developments |
|----------------------------|-------------------------------------------|------------------|
| **KV Cache Management**    | vLLM, SGLang                              | Programmable policies (vLLM RFC #57103), HiCache staging (SGLang), batch-invariant execution |
| **Speculative Decoding**   | vLLM, SGLang                              | Triton-based single-launch draft budget (vLLM); hybrid spec-decoding crash risks in SGLang |
| **Kernel Optimization**    | vLLM, SGLang, llama.cpp                   | Fused KDA conv1d (vLLM), vectorized dequantization (SGLang), DP4A MMQ enforcement (llama.cpp) |
| **Quantization & Memory**  | llama.cpp, Unsloth                        | JQ2_K to JQ6_K quant types; QSA attention skip (Qwen4exp); MoE offloading on Mac |
| **Distributed Serving**    | SGLang, vLLM                              | Engram row reading (SGLang), paged KV, tensor-parallel allreduce (llama.cpp) |

> ⚙️ **Trend**: The frontier is shifting from raw speed to **predictability and composability** — e.g., deterministic behavior, programmable cache, and reproducible agent outputs.

---

### **5. Layer Positioning**

| Project         | Primary Layer                | Key Differentiator |
|----------------|------------------------------|--------------------|
| **vLLM**       | High-performance Inference Engine | Optimized kernels, Blackwell/ROCm focus, scalable batching |
| **SGLang**     | Distributed Inference Runtime | Hierarchical scheduling, multi-node support, heterogenous backend pipeline |
| **llama.cpp**  | Local/Edge Runtime           | GPU/CPU/NPU portability, minimal dependencies, low-footprint deployment |
| **Ollama**     | Local Gateway & UX Platform  | Developer-first CLI, model library, voice/vision integration |
| **LiteLLM**    | Multi-Provider API Gateway   | Unified routing, cost tracking, OpenAI-compatible proxy |
| **Unsloth**    | Local Agent Development Stack | Desktop installer, fine-tuning API, Flows editor, MLX MoE offloading |

> 🧩 **Positioning Insight**:  
> - **Engineers**: vLLM/SGLang for scale-out systems  
> - **Developers**: Ollama/LiteLLM for rapid prototyping  
> - **Researchers/Power Users**: llama.cpp/Unsloth for edge/local experimentation

---

### **6. Trend Signals**

#### ✅ **Key Industry Trends Extracted**
1. **Hardware Specialization Is Accelerating**: AMD (ROCm), NVIDIA (GB10), Apple (Hexagon), Cambricon, T-Head — projects are no longer “one-size-fits-all.” vLLM and SGLang are investing heavily in vendor-specific kernels.
2. **Security Is Now a Core Infrastructure Concern**: The `litellm==1.107.0` compromise signals that supply chain integrity must be baked into CI/CD pipelines — expect more audit tools and signed releases.
3. **Agent-Centric Design Is Driving Innovation**: Features like `/render`/`/derender`, structured output control, session-aware routing (`x-opencode-session`), and Flows node editors point to a shift from prompt engineering to **agent orchestration**.
4. **Memory Efficiency Is Non-Negotiable**: With models exceeding 128K context and MoE architectures, optimizations like QSA attention (llama.cpp), VRAM budget preservation (Unsloth), and dynamic offloading (MLX) are essential.
5. **Local Inference Is Maturing**: Unsloth’s desktop install, Ollama’s Apple Foundation Models, and llama.cpp’s Hexagon support show that **local, secure, and fast inference** is no longer niche.

#### 📌 **What Application Developers Should Watch**
- **Monitor vLLM’s `indexer_budget` fix (#62776)** — it affects prompt fidelity on GB10 and may break downstream agents.
- **Avoid `litellm==1.107.0` at all costs** — use `main-latest` or `main-stable` instead.
- **Prepare for programmable KV cache** (vLLM RFC #57103): future APIs will let you define retention rules per request.
- **Leverage Ollama’s Nemotron 3.5 Bolt E4B** for fast, high-context vision-language tasks locally.
- **Use Unsloth’s Flows editor** for building visual agent workflows without external tools.

---

> ✅ **Final Recommendation**: For production agents, **pin to vLLM 0.31.0** until regressions are resolved. Use **Ollama + Unsloth** for local development and **LiteLLM** for cloud routing. Always validate against **security advisories** before deploying.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-24

---

### **1. Today's Highlights**

vLLM continues its aggressive expansion into high-performance, hardware-specific inference with critical fixes for ROCm (AMD) and Blackwell (SM12x) platforms. Key developments include a fix for Kimi-K3 accuracy regression on ROCm, optimizations for Qwen3.8-Flash-Next on GB10 (DGX Spark), and foundational work on programmable KV cache and batch-invariant execution to enable more predictable, scalable serving. The PR pipeline reflects strong momentum in low-level kernel tuning and cross-platform stability.

---

### **2. Releases & Breaking Changes**

No new releases were published in the last 24 hours.  
**Note**: vLLM 0.32 nightly builds are actively being tested; users on GB10 (DGX Spark) should monitor for known issues like prompt truncation beyond `indexer_budget` (see #62776).

---

### **3. New Model & Hardware Support**

- ✅ **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731** now has SM8x (Ampere: A100/A800/RTX 30xx) support in progress via [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) — critical for broader deployment.
- 🚀 **Qwen3.8-Flash-Next** gains targeted performance optimization on **gfx950 / MI355X (ROCm)** via [Issue #59575](https://github.com/vllm-project/vllm/issues/59575).
- 🔧 **Dory1.0-4B-BF16** added as a supported model ([PR #60149](https://github.com/vllm-project/vllm/pull/60149)), a latent-recurrent LLM from NVIDIA-Nemotron-Labs.
- 🎯 **Kimi-K3** receives dedicated ROCm performance and correctness fixes ([PR #63409](https://github.com/vllm-project/vllm/pull/63409)) and is now better supported on Hopper devices.

---

### **4. Performance & Optimization**

- ⚡ **Qwen3.8-Flash-Next on GB10 (DGX Spark)**: Significant performance improvements underway via [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) and [PR #63342](https://github.com/vllm-project/vllm/pull/63342), which optimizes `block_m=128` in fused KDA prefill conv1d — fixing a >2x slowdown at `block_m=8`.
- 📈 **Speculative Decoding**: [PR #63421](https://github.com/vllm-project/vllm/pull/63421) replaces `torch.compile`-based draft budget selection with a single-launch Triton kernel, eliminating mid-serving compile stalls and reducing host cost by ~6×.
- 🛠️ **MoE & Specialized Kernels**: AMD-led efforts advancing [Specialized MonoKernels](https://github.com/vllm-project/vllm/issues/60904) for Qwen and Kimi models on ROCm, with [PR #61482](https://github.com/vllm-project/vllm/pull/61482) delivering standalone mono-decode layers for DeepSeek-V4-Pro on MI355X.
- 🔄 **Batch Invariant Execution**: Progress on [Issue #27433](https://github.com/vllm-project/vllm/issues/27433) enables deterministic behavior across batches — essential for reproducible agent outputs.

---

### **5. Stability & Regressions**

| Severity | Issue | Summary | Fix Status |
|---------|-------|--------|------------|
| 🔴 Critical | [#62776](https://github.com/vllm-project/vllm/issues/62776) | Prompt content beyond `indexer_budget` (~2048 tokens) is invisible on Qwen3.8-Flash-Next (GB10). Model answers as if prompt ended early. | ❌ No fix yet |
| 🔴 Critical | [#60007](https://github.com/vllm-project/vllm/issues/60007) | TRITON_MLA attention backend fails to be batch-invariant under chunked prefill with `VLLM_BATCH_INVARIANT=1`. | ❌ No fix yet |
| 🟡 High | [#61229](https://github.com/vllm-project/vllm/issues/61229) | NixlConnector releases KV blocks during remote read → decode consumes overwritten data. | ❌ No fix yet |
| 🟡 Medium | [#60160](https://github.com/vllm-project/vllm/issues/60160) | Qwen3.8-27B-FP8 accuracy collapses under high concurrency on ROCm when `VLLM_ROCM_USE_AITER=1`. | ❌ No fix yet |

> **Note**: Multiple high-severity bugs affecting production-grade inference (especially on AMD and newer NVIDIA architectures) remain unresolved. Users should avoid `--decode-context-parallel-size`, `VLLM_ROCM_USE_AITER=1`, or `VLLM_BATCH_INVARIANT=1` in unstable configurations.

---

### **6. What This Means for Application Developers**

- **Use caution with experimental features**: Avoid `VLLM_BATCH_INVARIANT=1`, `VLLM_ROCM_USE_AITER=1`, and `--decode-context-parallel-size` until stable fixes land — they may cause silent correctness issues.
- **Expect variable performance across hardware**: ROCm (MI355X) and GB10 (DGX Spark) performance is rapidly improving but still inconsistent; test your models end-to-end.
- **Leverage disaggregated serving**: With `/render` and `/derender` endpoints stabilizing, you can build custom pipelines for agents using structured output, tool calling, and streaming reasoning.
- **Prepare for programmable KV cache**: [RFC #57103](https://github.com/vllm-project/vllm/issues/57103) introduces composable policies — expect future APIs to let you control retention, movement, and quota per request.
- **Monitor nightly builds**: vLLM 0.32 nightly shows active optimization for Qwen and Kimi models — useful for testing cutting-edge performance, but not production-ready.

> ✅ **Recommended Action**: Pin to vLLM 0.31.0 for stable inference until major regressions are resolved. Track [Issue #62776](https://github.com/vllm-project/vllm/issues/62776) and [PR #63432](https://github.com/vllm-project/vllm/pull/63432) for prompt truncation fixes on GB10.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-24**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to deepen its support for advanced inference patterns, with critical performance optimizations for DeepSeek-V4/V4.1 and Qwen3.8-Flash-Next on both NVIDIA and AMD hardware. Major progress is underway in speculative decoding adaptability and hierarchical KV cache scheduling, while CI stability remains a top concern due to persistent flakiness in PR testing pipelines.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new versions or breaking API/config changes were released. The project remains stable in production use, though several PRs address dependency hygiene (e.g., avoiding prerelease dependencies; #14930) and CI reliability (#42752).

---

### **3. New Model & Hardware Support**  
- **Cambricon MLU**: Initial platform support added via PR #45149, including device management, CNCL communication, RMSNorm kernels, and CI integration.
- **T-Head SAIL (Zhenwu 810/810E/M890P)**: Roadmap established for first-class support (#37519); upstreaming underway.
- **Ascend NPU**: Topology-aware CPU/NUMA affinity for worker ranks now tracked (#39348), with ongoing validation of MXFP8/MXFP4 capabilities (#34559).
- **SenseNova-U1/U1.5**: Feature and performance tracking initiated based on official OpenSenseNova repository (#37742).

---

### **4. Performance & Optimization**  
- **DeepSeek-V4/V4.1**: Multiple optimizations landed:
  - Engram row reading from peer devices reduces cross-node traffic (#46180).
  - MegaMoE input writing under MegaGate improves throughput by eliminating redundant passes (#46163).
  - Paged KV dequantization vectorized to process 4 tokens per program, improving memory reuse efficiency (#42929).
- **Qwen3.8-Flash-Next (ROCm)**: Performance tracker opened for gfx950 / MI355X optimization (#44304).
- **General Kernel Improvements**:
  - Fused residual add + RMSNorm kernel introduced for deterministic mode, reducing kernel launches from ~10 to 1 (#46159).
  - Spatial-parallel causal conv inputs now built in one pass, cutting decode overhead (#46174).
  - HiCache staging allocator replaced `list.pop(0)` with `deque` to eliminate O(N) cost in hot paths (#46178).

---

### **5. Stability & Regressions**  
High-severity issues reported today:
- **Crash on EP2 (tp=2 + ep=2)**: Illegal memory access on RTX PRO 6000 (sm_120) during Qwen3.8-Flash-Next-NVFP4 serving (#44291). *Fix pending.*
- **HiCache + Mooncake L3 crash**: Scheduler admits prefill it cannot finish, leading to "Prefill out of memory" when all radix nodes are locked (#45989). *Reproduced on 8×H200.*
- **Speculative decoding + NVFP4 KV cache**: Crashes due to `extend_prefix_lens_cpu` being `None` in dequant workspace path (#36010). *Blocking deployment of hybrid spec-decoding workflows.*
- **Streaming tool call corruption**: Anthropic streaming drops closing `}` if whitespace appears between arguments (#42260), affecting multi-tool outputs.

> 🔴 **Critical**: Flaky CI infrastructure (#42752) continues to disrupt PR validation, impacting developer velocity.

---

### **6. What This Means for Application Developers**  
- **Use caution with speculative decoding + NVFP4** — these features remain incompatible until #36010 is resolved.
- **Optimize for high-throughput batched inference** using the new fused kernels and Engram/MLU optimizations, especially for DeepSeek-V4 models.
- **Leverage HiCache improvements** like deque-based allocators and staged buffer optimizations for better scalability in large-scale agent workloads.
- **Monitor CI stability** before merging PRs — flaky tests may delay release cycles despite passing locally.
- **Plan for heterogeneous deployments**: With growing support for T-Head, Ascend, and Cambricon backends, your application should be ready to handle diverse hardware topologies and NUMA-aware scheduling.

👉 [GitHub Issue #42752](https://github.com/sgl-project/sglang/issues/42752) | [PR #46178](https://github.com/sgl-project/sglang/pull/46178)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-10-24**

---

### **1. Today's Highlights**  
The `b11846` release strengthens CUDA DP4A MMQ kernel robustness with a static assertion enforcing warp-aligned tile heights, critical for Blackwell-era GPUs. On macOS/iOS, Hexagon backend gains `CEIL` operations (f32/f16), expanding support for edge inference on Apple Silicon. Meanwhile, active development continues in model-specific optimizations—Qwen4exp now skips `kq_mask` allocation via QSA attention, saving up to 4 GB memory at ultra-long context lengths.

---

### **2. Releases & Breaking Changes**  
- **`b11846` (CUDA):** Enforces DP4A MMQ tile height must be multiple of warp size via static assertion (#30837). This prevents silent failures on SM 12.0+ GPUs but may require recompilation if using custom kernels.  
  🔗 [PR #30837](https://github.com/ggml-org/llama.cpp/pull/30837)  
- **`b11840` (Hexagon):** Adds `CEIL(f32)` and `CEIL(f16)` ops for Apple’s Hexagon NPU; updates op list and docs.  
  🔗 [PR #31006](https://github.com/ggml-org/llama.cpp/pull/31006)  
- **`b11838` (Core):** Fixes `ggml_time_us` overflow by switching from `int64_t` to `double`. Affects high-precision timing in long-running inference sessions.  
  🔗 [PR #30969](https://github.com/ggml-org/llama.cpp/pull/30969)

> ✅ *No breaking API changes reported today.*

---

### **3. New Model & Hardware Support**  
- **Model:** `qwen4exp` now supports QSA attention without `kq_mask`, reducing memory overhead by 2–4 GB at 4K–8K context lengths.  
  🔗 [PR #30965](https://github.com/ggml-org/llama.cpp/pull/30965)  
- **Hardware:**  
  - **Hexagon:** Added `CEIL` operation support for Apple Silicon (arm64) devices.  
    🔗 [PR #31006](https://github.com/ggml-org/llama.cpp/pull/31006)  
  - **Vulkan:** PR #25051 introduces tensor-parallel allreduce for multi-GPU scaling (in progress).  
    🔗 [PR #25051](https://github.com/ggml-org/llama.cpp/pull/25051)  
- **Quantization:** Five new CPU/Metal/CUDA/Vulkan quant types (`JQ2_K` through `JQ6_K`) added—based on ikawrakow’s IQ*_K design—offering finer-grained tradeoffs between accuracy and speed.  
  🔗 [PR #30715](https://github.com/ggml-org/llama.cpp/pull/30715)  

---

### **4. Performance & Optimization**  
- **Memory Savings:** Qwen4exp’s removal of `kq_mask` reduces GPU/host memory usage by ~2–4 GB at ultra-long contexts (UB 4096–8192), freeing resources for expert cache or larger context.  
  🔗 [PR #30965](https://github.com/ggml-org/llama.cpp/pull/30965)  
- **Kernel-Level:** Hexagon flash attention now uses team-based KV-head splitting when `n_kv_heads` doesn’t divide core count, avoiding inefficient token partition fallbacks.  
  🔗 [PR #31055](https://github.com/ggml-org/llama.cpp/pull/31055)  
- **CI Optimization:** Fixed data race in CI runners sharing model cache directories, improving test reliability and build stability.  
  🔗 [PR #31046](https://github.com/ggml-org/llama.cpp/pull/31046)

---

### **5. Stability & Regressions**  
| Severity | Issue | Affected Backend | Status | Fix PR? |
|--------|------|------------------|--------|---------|
| Critical | `Q4_1/Q5_1` mat-vec kernels overflow FP16 during block offset multiplication → NaN logits | CUDA | Open | ❌ |
| High | Metal MUL_MAT crashes with BF16 src1 at K ≥ 64, batch > 8 | Metal | Open | ❌ |
| High | SYCL F16: NaN output on Qwen3.8-27B Q4_K_M since #29107 (IQ3 reorder) | SYCL | Open | ❌ |
| Medium | Vulkan: model not reloaded after being evicted from VRAM | Vulkan | Closed | ⚠️ Partial fix (no auto-reload logic yet) |
| Medium | Context checkpoints invalidated on hybrid/recurrent models | Hybrid | Open | ❌ |

> 📌 **Top Priority:** Fix `Q4_1/Q5_1` overflow bug (Issue #30950) — currently breaks model output integrity.

---

### **6. What This Means for Application Developers**  
- **Use `--spec-type draft-mtp-adaptive`** (new in PR #27210) for dynamic draft depth control in speculative decoding, improving throughput without manual tuning.
- **Avoid `--tensor-split` with MoE models** until #28185 is resolved—intermittent output degeneration occurs under load.
- **For Apple Silicon users:** Enable `CEIL` ops via Hexagon backend for improved precision in edge inference tasks (e.g., real-time audio/video processing).
- **On CUDA systems:** Avoid `Q4_1/Q5_1` quantizations with large models until #30950 is patched—expect corrupted logits.
- **For server deployments:** Monitor `/tools` endpoint security (PR #29834) to prevent cross-origin exploits targeting system tools like `exec_shell_command`.

> 💡 **Pro Tip:** Use `--cache-disk` (Issue #20697, 21 comments) for offloading context to disk—ideal for long-context agents running on low-memory hardware.

---  
*Digest generated from [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) – October 24, 2026.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-24**

---

### **1. Today's Highlights**  
Ollama v0.40.11-rc0 introduces critical fixes for `qwen3coder` and OpenCode context handling, while the release of **NVIDIA Nemotron 3.5 Bolt E4B**—a 128K-token, Gemma 4-based vision-language model optimized for local use—marks a major step in lightweight, high-context AI inference. New PRs focus on tool call fidelity, compaction robustness, and improved voice processing via Phonon.

---

### **2. Releases & Breaking Changes**  
- **v0.40.11-rc0**:  
  - Fixed `qwen3coder` to preserve literal function closing tags in parameters ([#19228](https://github.com/ollama/ollama/pull/19228)).  
  - Ensured OpenCode uses allocated (not advertised) context size during launch ([#19193](https://github.com/ollama/ollama/pull/19193)).  
  - Enabled empty state support for `vllm-d3` decision models ([#19173](https://github.com/ollama/ollama/pull/19173), [#19226](https://github.com/ollama/ollama/pull/19226)).  
- **v0.40.10**: Introduced **Nemotron 3.5 Bolt E4B**, a compact, fast, 128K-context vision-language model ideal for local reasoning and tool use ([Ollama Library](https://ollama.com/library/nemotron-3.5-bolt)).

---

### **3. New Model & Hardware Support**  
- **New Model**:  
  - **Nemotron 3.5 Bolt E4B** (Gemma 4-based, 128K context, DFlash d-supported) — now available via `ollama run nemotron-3.5-bolt:latest`.  
- **Hardware & Backend Updates**:  
  - Added experimental runner for **Apple Foundation Models** (`apple-foundation-model`) on macOS 27+ ([#19184](https://github.com/ollama/ollama/pull/19184)).  
  - Continued work on **MLX optimizations** for Apple Silicon (M3/M5), though performance gaps remain (e.g., `flint:40b-a2b-gguf-nvfp4` slower than QAT-int4 variant on M3 Pro) ([#19254](https://github.com/ollama/ollama/issues/19254)).  
  - **Windows/Snapdragon X Elite NPU/GPU** support remains unmet; feature request (#5360) has 68 upvotes and is actively tracked.  
  - AMD GPU support on Intel Macs still blocked by issue #1016 (174 comments).

---

### **4. Performance & Optimization**  
- **Tool Call Fidelity**: Fixed integer-to-float argument conversion in tool calls (e.g., `30000` → `"30000.0"`) via PR [#19252](https://github.com/ollama/ollama/pull/19252), preventing schema validation failures.  
- **Compaction & Streaming**:  
  - Improved compaction repair logic with reminder prompts ([#19230](https://github.com/ollama/ollama/pull/19230)).  
  - Stream flushing now properly handled in OpenAI-compatible endpoints ([#17027](https://github.com/ollama/ollama/pull/17027)).  
- **Vision Processing**: Enhanced small-image detail preservation in compact Gemma 4 towers via dynamic grid rounding ([#19247](https://github.com/ollama/ollama/pull/19247)).  
- **Voice Synthesis**: Phonon now supports full text normalization (spelling out symbols, numbers, links) and voice catalog integration ([#19242](https://github.com/ollama/ollama/pull/19242), [#19234](https://github.com/ollama/ollama/pull/19234)).

---

### **5. Stability & Regressions**  
- **Critical Regressions**:  
  - **Massive generation failure** in `glm-5.3-flash:cloud` since Oct 12 (German time): ~5–8% of requests exhibit degenerate output ("the = the = the..."), linked to cluster 829 data corruption ([#18980](https://github.com/ollama/ollama/issues/18980)).  
  - **Cloud model reliability**: Frequent 503 errors reported in Ollama Cloud usage ([#15419](https://github.com/ollama/ollama/issues/15419)), impacting production agents.  
  - **JSON schema violation**: Cloud models ignore reply schemas despite correct client-side setup ([#12362](https://github.com/ollama/ollama/issues/12362)).  
- **High-Impact Bugs**:  
  - `OLLAMA_CONTEXT_LENGTH` not respected in `/api/tags` and `/api/show` responses ([#18995](https://github.com/ollama/ollama/issues/18995)).  
  - Connection resets after ~15 seconds on Windows with large prompts ([#19139](https://github.com/ollama/ollama/issues/19139)).  
  - Scheduler stalls when eviction conflicts with active `keep_alive` requests ([#19245](https://github.com/ollama/ollama/issues/19245)).  
- **Fixes in Progress**:  
  - PRs addressing tool call rendering, compaction flow, and context length reporting are open but not yet merged.

---

### **6. What This Means for Application Developers**  
- **For Agents & Tool Use**: Expect improved reliability in structured outputs and tool call integrity—especially with Flint and Qwen3 variants. However, avoid `glm-5.3-flash:cloud` until regression is resolved.  
- **For Cloud Deployments**: Be prepared for intermittent 503s and schema mismatches; consider fallbacks or local model caching.  
- **For Local Inference**: Leverage Nemotron 3.5 Bolt E4B for fast, high-context conversations with image understanding. On Apple Silicon, monitor MLX performance differences between quantization formats.  
- **For API Integrations**: Use `OLLAMA_CONTEXT_LENGTH` carefully—its value is not reflected in API metadata. Ensure clients handle streaming flushes correctly.  
- **Security Note**: Local deployments lack built-in auth (see [#19238](https://github.com/ollama/ollama/issues/19238)); implement reverse proxies or middleware for production access control.  

> 🔗 *Stay updated: [GitHub Issues](https://github.com/ollama/ollama/issues) | [Model Library](https://ollama.com/library)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-10-24**

#### **1. Today's Highlights**  
A critical security incident involving a compromised `litellm==1.107.0` release has been resolved: PyPI and Docker images (`latest`, `main-latest`, `main-stable`) have been yanked due to a credential-stealing backdoor (`cook.pth` + `sitecustomize` RCE loader). The community is advised to immediately verify their deployments are not using this version. Meanwhile, several high-priority fixes were merged, including improved spend logging reliability, enhanced context management for tool clearing, and support for OpenCode Go’s `x-opencode-session` header.

#### **2. Releases & Breaking Changes**  
- **Security Alert**: `litellm==1.107.0` (released 2026-10-21) was **compromised** with a malicious payload. All associated PyPI packages and Docker images (`ghcr.io/berriai/litellm*`, `docker.io/litellm/litellm`) have been **yanked**. Users must avoid this version entirely.  
  🔗 [Issue #47826](https://github.com/BerriAI/litellm/issues/47826) | 🔗 [PR #48131](https://github.com/BerriAI/litellm/pull/48131) (fixes spend log consistency)

#### **3. New Model & Hardware Support**  
- **Engy** added as an OpenAI-compatible provider via PR #46744: supports 8 models via `https://api.engy.ai/v1`, with `ENGY_API_KEY` auth.  
- **OpenCode Zen & Go** providers now supported in LiteLLM proxy (PR #39549), enabling automatic `x-opencode-session` injection for stable session routing.  
- **Gemini Live Avatar** support requested (Issue #43166): pending integration of `avatar_config` for real-time talking-head video avatars via `bidiGenerateContent`.

#### **4. Performance & Optimization**  
- **Cost Attribution Fix**: PR #48088 ensures OpenAI’s 12-hour prompt cache writes are billed at the correct 2.5x rate instead of defaulting to 1.25x, improving cost accuracy for GPT-5.6+ users.  
- **Router Efficiency**: PR #48134 introduces retry logic for pinned sessions on healthy deployments before cooldown, reducing unnecessary fallback delays.  
- **Spend Logging Reliability**: PR #48131 ensures per-request spend rollups are awaited and their failures reported, resolving discrepancies between `spend_logs` and daily rollups.

#### **5. Stability & Regressions**  
- **Critical Security Compromise**: `1.107.0` contains a backdoor (RCE + credential theft); all instances must be upgraded or reverted immediately.  
- **Token Counting Bug**: Issue #47327 reports `token_counter` rejecting `"original"` image detail value — newly added by OpenAI. This causes pre-call validation errors and skips context window checks.  
- **Response Stream Corruption**: Issue #26387 shows BedrockGuardrail streaming hook drops HTTPException after 200 OK, resulting in broken SSE streams.  
- **Missing Metadata**: Issue #47841 confirms `spend_logs_metadata` is never recorded for `/v1beta/interactions`, breaking audit trails for Gemini Interactions.  
- **Key Budget Bypass**: PR #47681 fixes a vulnerability where budget resets could be bypassed via `budget_duration` manipulation; now gated like `max_budget`.

#### **6. What This Means for Application Developers**  
- **Immediate Action Required**: Audit all deployments for `litellm==1.107.0`. Remove any usage of this version from production environments.  
- **Enhanced Observability**: With PRs #48131 and #48135, spend logs and request metrics are now more reliable and better integrated with PostHog. Use `x-litellm-call-id` to correlate logs.  
- **New Provider Integrations**: Leverage Engy and OpenCode Go providers for diversified inference routing and stable conversation tracking.  
- **Agent Development**: Be mindful of `context_management` behavior — recent fixes (#47857, #47861) ensure system prompts and tool clears are handled consistently across models.  
- **Future-Proofing**: Watch for `avatar_config` support (Gemini Live) and `x-opencode-session` propagation — essential for advanced agent UIs and session-aware services.  

> ✅ **Recommendation**: Upgrade to latest stable release (`main-latest` or `main-stable` as of 2026-10-24) and validate all custom providers and middleware against the new security hardening.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-10-24**

#### **1. Today's Highlights**  
The v0.1.910-beta release brings full local inference support for Recursive’s Flint, MOSS-Image, and NVIDIA’s Nemotron Bolt 4B via GGUF, enabling high-performance LLM serving on consumer hardware. A major leap in usability: MLX MoE models now run on Macs even when larger than system memory, thanks to advanced offloading. Additionally, a new OpenAI-compatible fine-tuning API and chat-only desktop install expand Unsloth’s reach for developers and power users.

> 🔗 [v0.1.910-beta Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.910-beta)

---

#### **2. Releases & Breaking Changes**  
- **v0.1.910-beta**: Introduces **OpenAI-compatible fine-tuning API**, **chat-only desktop installer**, and enhanced model loading for multi-user environments.  
- **Breaking Change**: The `llama-server` port-ownership check has been reworked (fixing #15022), which may affect legacy scripts relying on prior behavior. Ensure updated configurations are used.  
- **Note**: Model Hub defaults and persistence settings remain non-persistent (#10631), requiring manual configuration per session.

> 🔗 [v0.1.910-beta Changelog](https://github.com/unslothai/unsloth/releases/tag/v0.1.910-beta)  
> 🔗 [Issue #15022 – Port Ownership Fix](https://github.com/unslothai/unsloth/issues/15022)

---

#### **3. New Model & Hardware Support**  
- ✅ **Recursive Flint** (Flint-1.2, 7B–13B variants)  
- ✅ **MOSS-Image** (Vision-language model with multimodal input)  
- ✅ **NVIDIA Nemotron Bolt 4B** (optimized for low-latency inference)  
- 🖥️ **MLX MoE Models on Apple Silicon**: Full support for MoE models exceeding Mac memory limits via dynamic CPU/GPU offloading.  
- 📦 **Flatpak Support Requested** (#4380): Community demand growing for Linux native packaging.  
- ⚙️ **MIG GPU Instance Enumeration** (#14981): Now detects and exposes all MIG instances on R570+ CUDA drivers.

> 🔗 [Issue #4380 – Flatpak Support](https://github.com/unslothai/unsloth/issues/4380)  
> 🔗 [PR #14981 – MIG GPU Instance Exposure](https://github.com/unslothai/unsloth/pull/14981)

---

#### **4. Performance & Optimization**  
- **BF16 cuBLAS for Q8_0 Models Only** (#15054): Optimizes large Q8_0 matmuls by using BF16 cuBLAS *only* when all loaded GGUFs are Q8_0, avoiding unnecessary overhead.  
- **CFG-Batch Decision Keyed by Quantization** (#15047): Prevents incorrect batched-vs-plain reuse across different weight quant types (e.g., INT8 vs. FP8).  
- **VRAM Budget Reserve Preservation** (#15048): Ensures decode-time VRAM budget is respected during offload release, preventing OOM crashes.  
- **Prompt Progress UI** (#14909): Live feedback shows prompt processing %, estimated time remaining, and model offload status—critical for debugging long prompts.

> 🔗 [PR #15054 – Q8_0 cuBLAS Optimization](https://github.com/unslothai/unsloth/pull/15054)  
> 🔗 [PR #15047 – CFG-Batch Quantization Keying](https://github.com/unslothai/unsloth/pull/15047)  
> 🔗 [PR #14909 – Prompt Progress UI](https://github.com/unslothai/unsloth/pull/14909)

---

#### **5. Stability & Regressions**  
| Severity | Issue | Summary | Status | Fix PR |
|--------|------|--------|--------|--------|
| High | #15022 | Studio kills valid `llama-server` due to false "child not listening" port check | Closed | ✅ Fixed in #15022 |
| High | #14519 | Long chats stall due to CPU-based conversation-archive embedding before inference | Closed | ✅ Fixed in #14519 |
| High | #14411 | Core dumps after few turns; model stops responding post-eject | Open | ❌ No fix yet |
| Medium | #14987 | MiniCPM-V-4.7-1B fails on Vulkan backend | Open | ❌ No fix yet |
| Medium | #14695 | DeepSeek-V4.1-Flash fails to load (`deepseek41-dspark` arch unsupported) | Closed | ✅ Suggests updating llama.cpp |
| Medium | #14906 | Silent CPU fallback on AMD RDNA3 due to `/opt/rocm/lib` prepend | Closed | ✅ Regression from #7208 fix |
| Low | #14708 | Attachments become unreadable after auto-compaction | Closed | ✅ Fix applied |

> 🔗 [Issue #14411 – Core Dumps After Inference](https://github.com/unslothai/unsloth/issues/14411)  
> 🔗 [Issue #14987 – MiniCPM-V-4.7-1B Vulkan Crash](https://github.com/unslothai/unsloth/issues/14987)  
> 🔗 [Issue #14906 – AMD CPU Fallback Regression](https://github.com/unslothai/unsloth/issues/14906)

---

#### **6. What This Means for Application Developers**  
- **Build agent pipelines locally**: With the new **Flows node editor** (#14730), developers can design AI workflows, story games, or 2D worlds directly in Studio—no external tools needed.  
- **Enable robust fine-tuning**: Use the new **OpenAI-compatible fine-tuning API** to integrate unsloth into existing training pipelines without rewriting clients.  
- **Handle large MoE models safely**: Leverage MLX MoE offloading on Macs—ideal for prototyping multimodal agents with minimal hardware.  
- **Avoid regressions**: Update to v0.1.910-beta immediately to resolve critical port-check and CPU-embedding stalls. Monitor issue #14411 for core dump fixes.  
- **Future-proof your apps**: Use the `load_token` in image/video loads (#14827) to manage concurrent assets safely. Watch for scheduled tasks (#13871) and prompt progress UI (#14909) in future releases.

> 🔗 [PR #14730 – Flows Node Editor](https://github.com/unslothai/unsloth/pull/14730)  
> 🔗 [PR #13871 – Scheduled Tasks](https://github.com/unslothai/unsloth/pull/13871)  

---  
*Digest generated: 2026-10-24 | Source: GitHub @ unslothai/unsloth*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*