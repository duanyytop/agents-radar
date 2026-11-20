# AI Infrastructure Digest 2026-11-20

> Generated: 2026-11-20 03:41 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-20**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in late 2026 is defined by a sharp bifurcation between **high-performance inference engines** and **integrated local agent platforms**, with deep specialization emerging across hardware backends—especially AMD ROCm, Apple MLX, and NVIDIA Blackwell. Projects are increasingly focused on **efficiency at scale**: kernel-level optimizations, speculative decoding enhancements, and disaggregated serving architectures dominate development. Meanwhile, the rise of hybrid models (MoE, HRM), multi-modal agents, and edge deployment demands is accelerating support for diverse model formats (GGUF, ONNX, FP8) and heterogeneous hardware, signaling a maturing ecosystem where performance, reliability, and developer experience are tightly coupled.

---

### **2. Activity Comparison**

| Project       | Issues Open (↑/↓) | PRs Merged (↑/↓) | Release Status         |
|---------------|-------------------|------------------|------------------------|
| **vLLM**      | 347 (+5)          | 49 (+8)          | Stable: v0.33.0; No new releases |
| **SGLang**    | 286 (+3)          | 34 (+6)          | Stable: 0.5.x; RFC for v1.0 |
| **llama.cpp** | 371 (+4)          | 28 (+5)          | No new release; critical fixes merged |
| **Ollama**    | 428 (+2)          | 19 (+3)          | Stable: v0.40.16; no breaking changes |
| **LiteLLM**   | 512 (+6)          | 36 (+7)          | `v1.112.0-dev.1`, `v1.111.0-rc.2`, `lts` available |
| **Unsloth**   | 224 (+4)          | 21 (+4)          | v0.1.920-beta (opt-in features) |

> ✅ *Trend*: LiteLLM and vLLM lead in active development velocity; Ollama and SGLang maintain stability with fewer but higher-impact changes.

---

### **3. Model Support Race**

| New Model / Architecture           | Project(s) Supporting                          | Status & Differentiator |
|------------------------------------|------------------------------------------------|--------------------------|
| **Qwen3.8-Flash-Next-gfx950**     | vLLM (PR #68544), SGLang (DFlash)              | vLLM leads in ROCm-specific tuning |
| **MiniCPM5-15B-A2.5B**             | vLLM (#68748)                                  | First to enable DSpark + INT4/W4A16 |
| **SenseNova Loop**                 | llama.cpp (#32588)                              | Official integration via vendor PR |
| **Kimi K3.1 Pro / MoRI MI355X**    | vLLM, SGLang, LiteLLM                           | Multi-project adoption; LiteLLM adds pricing |
| **LTX-2.5 / MOSS-Image LoRA**      | Unsloth (#18465, #18497)                       | Early mover in LoRA training for novel architectures |
| **NVIDIA Cosmos3 FP8 Video Diffusion** | Unsloth (v0.1.920-beta)                     | Exclusive early support in Studio UI |

> 🏆 **Leader**: **vLLM** and **Unsloth** are most aggressive in supporting cutting-edge models and niche hardware (AMD NPU, FP8 video). **LiteLLM** leads in *commercial* model pricing integration.

---

### **4. Performance Frontier**

| Optimization Focus               | Leading Projects                                | Key Developments |
|----------------------------------|------------------------------------------------|------------------|
| **KV Cache Efficiency**          | vLLM, SGLang                                   | Per-tensor DiffKV caching (#66963), typed DFlash transfers, unified memory arena (SGLang #49944) |
| **Speculative Decoding**         | vLLM, SGLang, Ollama                            | MTP+DCP dispatchers (vLLM #68811), Hy4 Flash + DFly2 (Ollama #19783), mixed-window storage (SGLang) |
| **Quantization & Kernel Tuning** | vLLM, llama.cpp, Unsloth                        | `dp4a`-accelerated KQ matmuls (OpenCL), CUTLASS hashing (Unsloth), SM100 split-K (vLLM) |
| **Distributed Serving & Disaggregation** | SGLang, vLLM                             | Asymmetric Prefill/Decode (SGLang), multi-node KV offload (vLLM) |
| **Low-Latency Local Runtime**    | Unsloth, Ollama (MLX), llama.cpp (Metal)       | Cold-card Int8 load (<3s), adaptive parallelism (Ollama #19785), Metal runner improvements |

> 🔥 **Hot Zone**: **ROCm optimization** (vLLM) and **asymmetric distributed serving** (SGLang) are now key battlegrounds for throughput and cost efficiency.

---

### **5. Layer Positioning**

| Project       | Primary Layer                  | Key Differentiators |
|---------------|-------------------------------|---------------------|
| **vLLM**      | High-Throughput Inference Engine | Optimized kernels, ROCm focus, strong support for MoE, spec decoding |
| **SGLang**    | Distributed Inference Framework | Prefill-decode disaggregation, HiCache, DFlash graph separation |
| **llama.cpp** | Universal Local Runtime        | Cross-backend (GPU/CPU/MLX/WebGPU), lightweight, supports GGUF, OpenCL, Vulkan |
| **Ollama**    | Local Agent Gateway + CLI      | Developer-first UX, prompt cache, MLX acceleration, agent tooling |
| **LiteLLM**   | Production LLM Gateway / Orchestrator | Rate limiting (Rust), Kafka logging, budget tracking, multi-provider routing |
| **Unsloth**   | Full-Stack Local AI Platform     | Integrated fine-tuning, scheduling, web UI, NPU support, security sandboxing |

> 💡 **Strategic Insight**:  
> - **vLLM/SGLang** = backend infrastructure for cloud-scale deployments  
> - **llama.cpp/Ollama** = edge/local inference with broad format/hardware coverage  
> - **Unsloth** = end-to-end local AI workflow (train → serve → deploy)  
> - **LiteLLM** = enterprise-grade API gateway with observability

---

### **6. Trend Signals**

#### 🔍 **Emerging Industry Trends (from 2026-11-20 activity):**
1. **Hardware Specialization is Accelerating**  
   - AMD ROCm (gfx950/gfx942) and Ryzen AI NPUs are no longer experimental—they’re being optimized at the kernel level (vLLM, Unsloth).
   - NVIDIA Blackwell (B200) stress testing reveals instability (SGLang #26340, #46203), indicating high-risk/high-reward deployment patterns.

2. **Agent-Centric Infrastructure is Maturing**  
   - Tools like scheduled replies (Unsloth), draft acceptance validation (Ollama), and tool call parsing (LiteLLM) show that **agent reliability** is now a core concern—not just speed.
   - Prompt cache inefficiencies (Ollama #19774) highlight the need for smarter state management in long-running workflows.

3. **Performance Gains Are Becoming "Invisible"**  
   - Fixes like DiffKV view caching (#66963), cold-start latency reduction (#18455), and `dp4a` matmuls are not user-facing but deliver 2–3x gains in real-world throughput.

4. **Security & Observability Are Non-Negotiable**  
   - LiteLLM’s Rust gateway and signed image verification, Unsloth’s network firewall, and SGLang’s file creation vulnerability (#51555) reflect growing maturity in production-grade safety.

#### ✅ **What Application Developers Should Watch:**
- **Avoid `float16` on XPU with speculative decoding** (Ollama #55250) — use `bf16` until fixed.
- **Monitor prompt cache behavior closely** — even small input changes invalidate reuse (Ollama #19774).
- **Use `ghcr.io/berriai/litellm:lts` in production** — avoid unstable dev builds.
- **Test on AMD MI355X/gfx942** if targeting ROCm; vLLM offers best performance today.
- **Prepare for SGLang 1.0** — expect stricter config validation and breaking changes.

> ⚠️ **Critical Takeaway**: The era of “just run it” is over. Infrastructure choices now dictate **model fidelity, agent reliability, and operational cost**—engineers must treat inference stacks as first-class systems engineering problems.

---  
*Generated: 2026-11-20 | For technical decision-makers and infrastructure architects*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-20**

---

### **1. Today's Highlights**  
The vLLM project continues its momentum in AMD ROCm optimization, with multiple high-impact performance tracking issues and PRs targeting gfx950 (MI355X) and gfx942 (Muse Spark Open PTPC-FP8) for Qwen3.8-Flash-Next and Muse models. Critical kernel-level optimizations are underway to eliminate redundant K/V cache view derivations in eager attention backends, while stability fixes address memory safety and KV offload edge cases across multi-node and speculative decoding workflows.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the past 24 hours.*  
Latest stable version remains **v0.33.0**, with ongoing work focused on performance tuning and model-specific optimizations rather than API surface changes.

---

### **3. New Model & Hardware Support**  
- **New Model Added**: `MiniCPM5-15B-A2.5B` now has native vLLM support via PR #68748, including BF16 serving, INT4/W4A16 quantization, and DSpark speculative decoding.  
- **ROCm/AMD Focus**: Active development for *Qwen3.8-Flash-Next-gfx950*, *Muse Spark Open PTPC-FP8-gfx942*, and *Kimi K3 MoRI MI355X disagg* with dedicated tracking issues (#59575, #64018, #68544).  
- **Hardware Backends**: Continued expansion of ROCm specialization via MonoKernel tracking (#68544), with new CI/CI builds for XPU and Intel GPU (`#67428`) and improved support for NixlConnector and UMBP eviction policies (`#67944`).  
- **Quantization Formats**: Enhanced handling of AWQ key names in MoE WNA16 configs (`#66488`) and unified MXFP6 activation gating (`#66077`).

> 🔗 [MiniCPM5-15B-A2.5B](https://github.com/vllm-project/vllm/pull/68748) | [ROCm Optimization Tracker](https://github.com/vllm-project/vllm/issues/68544)

---

### **4. Performance & Optimization**  
- **Attention Kernel Efficiency**: PR #66963 implements per-tensor caching of DiffKV K/V views to avoid repeated `transpose/split` operations during eager attention calls—directly addressing issue #64572. This is expected to reduce overhead in high-throughput scenarios.  
- **Launch Config Tuning**: PR #68842 introduces SM100 split-K launch configs for QSA sparse attention on small batches, optimizing occupancy and latency for Qwen4Exp. Similarly, PR #62344 improves prefill scoring kernel utilization on A100 (sm_80) by adjusting tile configurations.  
- **Memory Management**: PR #67944 defaults embedded DRAM pools to 0.99/0.97 eviction watermarks for better utilization under MORI v1.2.3, improving cache efficiency without manual tuning.  
- **Speculative Decoding**: Work on MTP + DCP paths using AITER paged-MQA dispatcher (#68811) enables more efficient dispatching on ROCm, reducing memory pressure during draft generation.

> 🔗 [DiffKV View Caching](https://github.com/vllm-project/vllm/pull/66963) | [QSA Launch Configs](https://github.com/vllm-project/vllm/pull/68842)

---

### **5. Stability & Regressions**  
- **Critical KV Offload Bug**: Issue #61229 reports silent corruption when KV blocks are released during remote reads due to lease expiry—potentially leading to incorrect outputs. No fix PR yet; high severity.  
- **CUDA Graph Padding Corruption**: Issue #67802 reveals that dynamic FP8 amax computation includes stale token IDs from CUDA graph padding, risking quantization inaccuracies. PR pending.  
- **DFlash2 Acceptance Failure**: Issue #55250 shows 0% draft acceptance for Qwen3.8-27B-DFlash2 on XPU when using `float16`, though `bf16` works—indicating a dtype-specific backend bug.  
- **Model-Specific Crashes**: Issue #55766 reports NaN logits after prefix-cache hits in Qwen3.8 hybrid GDN models when alignment crosses block boundaries—under investigation.  

> 🔗 [KV Lease Bug](https://github.com/vllm-project/vllm/issues/61229) | [FP8 Amax Corruption](https://github.com/vllm-project/vllm/issues/67802) | [DFlash2 Float16 Crash](https://github.com/vllm-project/vllm/issues/55250)

---

### **6. What This Means for Application Developers**  
- **Expect tighter ROCm integration**: If you're deploying on AMD MI355X/gfx950 or gfx942 hardware, prioritize testing with latest main branch builds—performance gains are significant but not yet in release.  
- **Avoid speculative decoding on XPU with float16**: Use `bf16` instead until #55250 is resolved to prevent 0% draft acceptance.  
- **Be cautious with auto-tool-choice + response_format**: Issue #66858 highlights a frontend inconsistency between Python and Rust APIs—ensure your app logic accounts for this divergence.  
- **Monitor build-time reporting**: The recent fix for empty Ninja logs (#68847) ensures robust CI metrics even in minimal builds—critical for reproducibility in production pipelines.  

> ✅ **Recommendation**: For production inference on AMD GPUs, use `--enable-prefix-caching` and `--kv-cache-dtype bfloat16` to avoid known stability issues with float16 and complex cache layouts.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **SGLang Digest — 2026-11-20**

#### **1. Today's Highlights**
The SGLang ecosystem continues to accelerate its focus on **prefill-decode disaggregation** and **speculative decoding optimizations**, with key PRs enabling typed DFlash KV transfers across asymmetric TP layouts and separating draft and target verification graphs. Critical stability work addresses HiCache L3 prefetch hangs under CP and CUDA coredumps in aggressive inference scenarios, while a major RFC tracks the path toward **SGLang 1.0** as a stability milestone.

#### **2. Releases & Breaking Changes**
None. No new releases or breaking API/config changes were published in the last 24 hours.

#### **3. New Model & Hardware Support**
- ✅ **Kimi K3.1**: Added support for decode context parallelism (DCP) via DSpark graphs on Ascend NPU (`PR #51689`).
- ✅ **Multi-modal models**: Expanded support for multimodal models with DFly speculative decoding and enhanced vision pooling logic (`PR #51672`, `PR #51615`).
- ✅ **NPU acceleration**: Integration of MindIE-SD as an optional acceleration library for diffusion workloads (`RFC #48582`).
- ✅ **Ascend deployment**: Added official instructions for DeepSeek-V4.1 Flash on Ascend NPU (`PR #50985`).

#### **4. Performance & Optimization**
- 🔧 **Speculative Decoding**: Series of PRs (#51698, #51697, #51696, #51693) introduce **typed DFlash KV transfer**, **separate draft/target graphs**, and **mixed-window KV storage**, enabling efficient asymmetric Prefill/Decode deployments.
- ⚙️ **Kernel & Memory**: Optimized EPLB dispatch map computation using scatters instead of loops (`PR #51346`), reducing per-rebalance overhead.
- 📈 **Unified Memory Roadmap**: Ongoing development aims to eliminate fixed memory partitions by sharing full-attention KV, sliding-window KV, and recurrent states in a single GPU memory arena (`Issue #49944`).
- 🎯 **Hopper (SM90)**: Performance tracking continues for GLM-5.3-Flash kernel optimization (`Issue #45373`).

#### **5. Stability & Regressions**
| Severity | Issue | Summary | Fix Status |
|---------|------|--------|------------|
| 🔴 High | [#26340](https://github.com/sgl-project/sglang/issues/26340) | Auto-collected CUDA coredumps from `pr-test.yml`; recurring crashes under agentic load | In progress |
| 🔴 High | [#46203](https://github.com/sgl-project/sglang/issues/46203) | Xid 13 "CTA Not Present" in HiCache kvcacheio transfer kernels on Blackwell (B200) — 7 crashes across 4 machines | In progress |
| 🟡 Medium | [#51608](https://github.com/sgl-project/sglang/issues/51608) | HiCache L3 storage prefetch never completes under CP (attn_cp_size=8) with fast_file; requests blocked until retry cap | Open |
| 🟡 Medium | [#51531](https://github.com/sgl-project/sglang/issues/51531) | `--mamba-ssm-dtype bfloat16` causes ~8-point drop in long-reasoning MATH-500 with Qwen3.5-9B | Open |
| 🟡 Medium | [#51188](https://github.com/sgl-project/sglang/issues/51188) | Host pin budget OOM-kills MiniMax-H3 on 24GB GPU + 32GB host; server reports ready but returns 503 | Open |

> Note: Several high-severity issues are tied to **Blackwell GPUs (B200)** and **HiCache under CP**, indicating active stress testing in production-scale environments.

#### **6. What This Means for Application Developers**
- **Design for disaggregation**: Use the new **asymmetric Prefill/Decode** patterns (via DFlash KV typing and shared drafts) to scale agents with minimal latency overhead.
- **Avoid `bfloat16` for Mamba models** if long-context accuracy matters — use `float16` unless explicitly validated.
- **Validate multi-node deployments** under CP and HiCache with large batch sizes; expect potential stalls due to L3 prefetch issues.
- **Prepare for SGLang 1.0**: Expect stricter config validation, breaking changes in upgrades from `0.5.x`, and a defined compatibility policy (`Issue #50045`).
- **Secure your endpoints**: A critical vulnerability (`#51555`) allows arbitrary file creation via `extra_sampling_params` — ensure input sanitization in production APIs.

> 💡 *Pro Tip*: Monitor `#26340` and `#46203` closely if running agentic workloads on B200 systems — these may require runtime mitigations until fixes land.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

---

### **1. Today's Highlights**  
The latest updates to `llama.cpp` focus on critical correctness fixes for MoE and hybrid attention models, including a fix for HRM layer slot count overflow (#32601) and improved support for Qwen3-series architectures with the YuE2 projector (#32606). Significant progress is also underway in backend performance: OpenCL now supports `dp4a`-accelerated KQ matmuls for int8 quantization (#32577), while Vulkan gains optimizations for UMA memory access (#32634) and Intel i915 driver timeouts (#32516).

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, several **critical fixes** were merged into master that may affect users of MoE, speculative decoding, or hybrid attention:

- **Fix for HRM layer slot count overflow**: The product of `n_hrm_layers_per_stack`, `n_hrm_h_cycles`, and `(n_hrm_l_cycles + 1)` was incorrectly computed as `uint32_t`, potentially allowing invalid model configurations to pass validation (#32601). This could cause silent corruption in large HRM-based models.
- **YuE2 projector loading fix**: Optional `cls.output.weight` tensor in MMProjectors (used by Qwen3 reranking heads) is now safely ignored during load (#32606), preventing crashes on certain variants.

> 🔗 [PR #32601](https://github.com/ggml-org/llama.cpp/pull/32601) | [PR #32606](https://github.com/ggml-org/llama.cpp/pull/32606)

---

### **3. New Model & Hardware Support**  
- ✅ **New model support**:  
  - Added official support for **SenseNova Loop** architecture via PR #32588 (submitted by SenseNova team). This enables inference for models like *SenseNova-Loop* using llama.cpp’s native runtime.  
  - **Minimax-M3** now uses `ggml_top_k_mask` for fused sparse attention, improving efficiency and correctness (#32614).
- ✅ **New hardware/backend support**:  
  - **OpenCL**: Full `dp4a` support for `KQ` matmuls in decomposed Flash Attention (FA), enabling faster speculative verification on Qualcomm Adreno GPUs (#32577).  
  - **WebGPU**: Added `POOL_2D` and `COL2IM_1D` support for TTS decoders (e.g., Qwen3-TTS, PocketTTS) (#32250, #31708).  
  - **Vulkan**: Enhanced support for **Intel i915 drivers** with timeout mitigation (#32516); optimized scheduling for Strix Halo (gfx1151) APUs (#32627).  
  - **Metal**: Fixed incorrect use of `NSMakeRange` argument (#32602).

> 🔗 [PR #32588](https://github.com/ggml-org/llama.cpp/pull/32588) | [PR #32577](https://github.com/ggml-org/llama.cpp/pull/32577) | [PR #32250](https://github.com/ggml-org/llama.cpp/pull/32250) | [PR #31708](https://github.com/ggml-org/llama.cpp/pull/31708) | [PR #32516](https://github.com/ggml-org/llama.cpp/pull/32516)

---

### **4. Performance & Optimization**  
- **OpenCL**: `dp4a`-based KQ matmuls reduce computation time for int8 KQ in FA kernels — particularly impactful for small-draft speculative decoding. Early benchmarks show up to **~30% improvement** in spec verify throughput on Adreno devices.
- **Vulkan**:  
  - Fix for slow CPU reads on UMA AMD APUs without `HOST_CACHED` memory types improves host-to-GPU data transfer speed from ~100 MB/s to near-memory bandwidth (~30 GB/s).  
  - Optimized integer matvec scheduling on gfx1151 (Strix Halo) reduces latency by **~15%** in Q2_K quantized layers.
- **CPU**: RISC-V Vector (RVV) intrinsics now enable vectorized Mamba-2 SSM scan (`SSM_SCAN`) on RVV-capable CPUs — expected to improve throughput by **~2–3x** for large sequence contexts.
- **CUDA**: Refactored scatter kernel for `set_n` enables more efficient batched tensor writes; improves batching efficiency in multi-slot scenarios.

> 🔗 [PR #32577](https://github.com/ggml-org/llama.cpp/pull/32577) | [PR #32634](https://github.com/ggml-org/llama.cpp/pull/32634) | [PR #32627](https://github.com/ggml-org/llama.cpp/pull/32627) | [PR #32448](https://github.com/ggml-org/llama.cpp/pull/32448)

---

### **5. Stability & Regressions**  
Several high-severity stability issues were reported today, primarily affecting GPU backends and speculative decoding:

| Issue | Severity | Status | Impact |
|------|----------|--------|--------|
| [#32603](https://github.com/ggml-org/llama.cpp/issues/32603): Vulkan `FLASH_ATTN_EXT` missing K/V row support | Critical | Open | Breaks flash attention on Vulkan for many models |
| [#32160](https://github.com/ggml-org/llama.cpp/issues/32160): Ternary weights with Hadamard rotation (feature request) | Medium | Open | No immediate risk, but indicates growing interest in advanced quantization |
| [#32375](https://github.com/ggml-org/llama.cpp/issues/32375): Pascal (sm_60) long-context corruption in hybrid models | Critical | Open | Silent output corruption on older NVIDIA GPUs (e.g., GTX 10xx) |
| [#32178](https://github.com/ggml-org/llama.cpp/issues/32178): HIP/gfx1200 produces NaNs in `FLASH_ATTN_EXT` | Critical | Open | Unstable inference on ROCm 7.1+ |
| [#25489](https://github.com/ggml-org/llama.cpp/issues/25489): MTP performance regression since b9935 | High | Open | ~50% drop in draft token throughput |

> ⚠️ **Note**: While no fixes are yet merged for these, several related PRs (e.g., #32634, #32516) suggest ongoing work on backend robustness.

---

### **6. What This Means for Application Developers**  
- **Use caution with MoE and hybrid models** (especially Qwen3.5+, HRM-based) until #32601 is released — invalid configuration could lead to silent errors or crashes.
- **Enable `--moe-cache-cpu-share` only if you have sufficient RAM** — recent PRs like #32636 highlight increased graph node overhead due to MoE cache tracking.
- **For low-latency agents**, prioritize OpenCL (Adreno) or Vulkan (Intel/AMD) backends — `dp4a` and `COL2IM_1D` support unlock better speculative decode and TTS performance.
- **Avoid sm_60 (Pascal)** for long-context tasks until #32375 is resolved — expect corrupted outputs.
- **Monitor RPC/WebUI behavior** — multiple reports of connection drops between Windows (Vulkan) and macOS (Metal) (#32263), suggesting need for stable networking layer in distributed setups.

> 💡 **Pro Tip**: Use `--fim-qwen-1.5b` presets with `--ui-mcp-proxy-allow-private-urls` enabled (PR #32633) for secure local UI deployment with private model access.

---  
*Digest generated: 2026-11-20 | Source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-20**

---

### **1. Today's Highlights**  
The Ollama project continues to deepen its focus on **local agent reliability**, **prompt cache efficiency**, and **MLX backend performance**. Critical issues around silent token truncation (Issue #19765), empty tool call responses (Issue #19780), and prompt cache invalidation (Issue #19774) highlight ongoing challenges in context handling and model fidelity. Meanwhile, PRs like #19785 (adaptive parallelism) and #19783 (Hy4 Flash + DFly2 drafting) signal strong momentum in optimizing inference across heterogeneous hardware.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
No new releases or breaking changes were published. The latest stable version remains `0.40.16`.

---

### **3. New Model & Hardware Support**  
- **New model support**: Proposal for OVHcloud’s **Olala-v1.0-mini-7A1B-GGUF** (Issue #19777) — currently blocked by import error; no official integration yet.
- **Hardware/Backend progress**:  
  - MLX-specific enhancements: Hy4 Flash text/vision inference, compact MLA, and adaptive DFly2 drafting (PR #19783).  
  - Metal runner improvements: dynamic memory-aware parallelism (PR #19785), persistent inactive conversation caches (PR #19745), and memory-pressure-adaptive history retention (PR #19678).

---

### **4. Performance & Optimization**  
- **Context management**:  
  - PR #19783 introduces **Hy4 Flash** and **DFly2 drafting** for MLX, promising higher throughput and reduced latency in long-context generation.  
  - PR #19785 enables **automatic selection of parallelism slots (1/2/4/8)** based on available GPU memory and estimated context storage — improving resource utilization under load.  
- **KV Cache Efficiency**:  
  - PR #19327 proposes per-layer KV cache sizing to avoid over-allocation and reduce VRAM pressure during scheduling (critical for multi-layer models with varying head counts).  
- **Prompt Caching**:  
  - Issue #19774 reveals that prompt cache is only reused on *exact* matches — even minor changes to the last message trigger full reprocessing (~2,040 tokens re-read). This impacts agentic workflows.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Status |
|--------|-------|-------------|--------|
| 🔴 High | [#19765](https://github.com/ollama/ollama/issues/19765) | Silent truncation at ~65k tokens regardless of input size; `done_reason=stop` misleads clients into thinking completion was natural. | Closed |
| 🔴 High | [#19780](https://github.com/ollama/ollama/issues/19780) | Empty `assistant.content` with `finish_reason: stop` despite valid `completion_tokens` and tool calls — breaks tool-using agents. | Closed |
| 🟡 Medium | [#19779](https://github.com/ollama/ollama/issues/19779) | `qwen2.5-coder:7b` advertises `tools` capability but emits no native `tool_calls` due to template mismatch. | Closed |
| 🟡 Medium | [#19767](https://github.com/ollama/ollama/issues/19767) | Qwen3.8 model re-reads entire prompt from token 0 in two concurrent sessions on single slot; parallel slots lose prompt cache. | Open |
| 🟡 Medium | [#19773](https://github.com/ollama/ollama/issues/19773) | Ollama Cloud reports near-zero prompt-cache hits on first requests of resumed sessions — suggests poor cache warming strategy. | Open |
| 🟡 Low | [#19782](https://github.com/ollama/ollama/issues/19782) | Windows `/api/embed` returns 400 due to loopback connection refusal (`connectex`) when calling internal `llama-server`. | Open |

> ✅ **Fixes in Progress**: PR #19776 addresses Qwen tool call parsing at stream end — critical for reliable agent output.

---

### **6. What This Means for Application Developers**  
- **Avoid silent truncation**: Monitor input length carefully — if you’re hitting ~65k tokens, your data may be silently truncated without warning. Use `max_tokens` and validate `usage.prompt_tokens` vs. actual input.  
- **Tool-call reliability**: Be cautious with `qwen2.5-coder` and similar models advertising tools — they may not emit native `tool_calls` despite API claims. Validate behavior via `/api/show` and test with real schemas.  
- **Optimize for caching**: Design prompts to minimize small variations (e.g., timestamps, IDs) that invalidate the prompt cache. Consider batching or pre-processing to maximize reuse.  
- **Leverage MLX improvements**: If using Apple Silicon or Metal backends, expect better throughput and memory efficiency from upcoming Hy4 Flash and adaptive drafters (PR #19783).  
- **Agent design caution**: Multiple active sessions on a single slot (especially with Qwen3.8) risk prompt re-processing and degraded performance — consider slot isolation or session throttling.

👉 *Pro tip*: Use `ollama run --audio` (Issue #19396) for local TTS — future-proofing for voice-enabled agents.  

---  
*Data source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-20**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues its rapid evolution with a focus on **gateway-level performance**, **enhanced guardrails**, and **improved observability**. Key PRs include native Rust-based rate limiting, Kafka logging support, and expanded Bedrock guardrail scanning—signaling deeper integration into production-grade AI infrastructures. The release of `v1.112.0-dev.1` and `v1.111.0-rc.2` underscores active development toward a stable 1.112.0 release.

---

### **2. Releases & Breaking Changes**  
- **`v1.112.0-dev.1` (dev)**: Latest development build with ongoing optimizations in routing and proxy stability.  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.1)  
- **`v1.111.0-rc.2` (release candidate)**: Final pre-production validation for v1.112.0; includes fixes for budget handling and streaming correctness.  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.2)  
- **`v1.108.12 (LTS)`**: Long-term support version now available with critical security and stability patches. Use `ghcr.io/berriai/litellm:lts` to auto-update.  
  🔗 [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.108.12)

> ✅ **Migration Note**: Operators using `DATABASE_URL_READ_REPLICA` should upgrade immediately to avoid permanent read failures after DB blips (see #52284).

---

### **3. New Model & Hardware Support**  
- **New Models Added to Price Table** (PR #53021):  
  - Kimi K3.1 Pro ($2.60 / $13.00 per 1M tokens)  
  - Kimi K2.6  
  - MiniMax M3.1 Flash  
  - Nemotron 3.5 Super VL  
  ➤ All now supported via Inference APIs backend with full cost tracking.  
  🔗 [PR #53021](https://github.com/BerriAI/litellm/pull/53021)  

- **Sglang Provider Requested** (Issue #13681):  
  Community-driven feature request to add Sglang as a local inference provider—especially relevant for MoE models in high-throughput environments.  
  🔗 [Issue #13681](https://github.com/BerriAI/litellm/issues/13681)

---

### **4. Performance & Optimization**  
- **Native Rust Gateway Enhancements** (PRs #52839, #53015, #53013):  
  - Rate limits (RPM/TPM) enforced natively in Rust instead of Python → reduced latency by ~30% in high-load scenarios.  
  - Priority-based capacity sharing across model groups now handled at the gateway level.  
  - Nagle’s algorithm disabled on supervised Python listener → improved real-time streaming responsiveness.  
  🔗 [PR #52839](https://github.com/BerriAI/litellm/pull/52839), [PR #53015](https://github.com/BerriAI/litellm/pull/53015), [PR #53013](https://github.com/BerriAI/litellm/pull/53013)  

- **Kafka Logging Native Integration** (PR #52790):  
  Enables direct export of audit logs and requests to Kafka for enterprise-scale monitoring and analytics pipelines.  
  🔗 [PR #52790](https://github.com/BerriAI/litellm/pull/52790)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| 🟠 High | [#52284](https://github.com/BerriAI/litellm/issues/52284) | Read replica failure leaves proxy permanently unable to read; no fallback to writer | ❌ Pending |
| 🔴 Critical | [#52853](https://github.com/BerriAI/litellm/issues/52853) | Streaming 400 from upstream drops connection instead of returning error | ✅ PR #52489 (fixes synthetic stream status) |
| 🟡 Medium | [#52548](https://github.com/BerriAI/litellm/issues/52548) | Priority routing ignores TPM limits under `usage-based-routing-v2` | ⚠️ In progress |
| 🟡 Medium | [#50125](https://github.com/BerriAI/litellm/issues/50125) | Budget exceeds spend threshold by 11 calls despite max_budget | ✅ PR #53020 (preserves multi-day reset offsets) |

> 💡 **Note**: Several regressions stem from misconfigured or outdated database states; ensure consistent schema migration.

---

### **6. What This Means for Application Developers**  
- **Use `lts` tag** for production systems: `ghcr.io/berriai/litellm:lts` ensures you’re on a tested, stable baseline with automatic patching.  
- **Leverage native Rust gateways** for low-latency, high-throughput inference routing—especially important for agent workflows and real-time apps.  
- **Enable Kafka logging** if you're building observability stacks; it reduces dependency on custom integrations.  
- **Avoid `v1.82.x` UI** due to severe performance issues (#23005); consider upgrading to `v1.108.12+`.  
- **Be cautious with `max_budget`**: The current behavior allows over-spending—apply `budget_reset_offset` or use `v1.111.0-rc.2+` where this is fixed.  

> ✅ **Best Practice**: Always verify image signatures using `cosign` for security assurance.  
> 🔒 Verify:  
> ```bash
> cosign verify \
>   --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
>   --certificate-oidc-issuer https://token.actions.githubusercontent.com \
>   ghcr.io/berriai/litellm:v1.112.0-dev.1
> ```

---  
*Digest generated: 2026-11-20 | Source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-20**

---

### **1. Today's Highlights**  
Unsloth’s v0.1.920-beta delivers major AMD NPU enhancements, enabling Q4NX model inference directly on Ryzen AI hardware with visibility into runtime performance. New support for LTX-2.5 and MOSS-Image LoRA training, alongside NVIDIA Cosmos3 FP8 video generation and scheduled chat replies, strengthens Unsloth’s position as a full-stack local LLM gateway and fine-tuning platform.

---

### **2. Releases & Breaking Changes**  
- **v0.1.920-beta**:  
  - AMD NPU support now includes Q4NX model loading and runtime status indicators ([GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.920-beta)).  
  - Added: Scheduled tasks with chat reply automation (via `unsloth studio`), LTX-2.5 and MOSS-Image LoRA training support.  
  - NVIDIA Cosmos3 FP8 video diffusion is now natively supported in Studio.  

> ⚠️ *No breaking API changes reported; all updates are additive or opt-in.*

---

### **3. New Model & Hardware Support**  
- **AMD NPU**: Full support for XDNA 2+ NPUs via FastFlowLM and fallback to RyzenAI ONNX Runtime (via PR #18555).  
- **Older AMD XDNA NPUs (Ryzen AI 100/200 series)**: Feature request opened (#18501) — currently unsupported.  
- **New Models**:  
  - **DaisyRose-27B** – Requested for fine-tuning support (#18465).  
  - **SenseNova-Loop-9B** – Fine-tuning use case highlighted due to its looped hybrid architecture (#18497).  
  - **MiniMax-M3.1-Flash-GGUF** – Tool call parsing stability under scrutiny (#18481).  
- **Backends**:  
  - **Windows NPU**: Dual runtime support (FastFlowLM + RyzenAI ONNX Runtime) to bypass Smart App Control restrictions (#18553, #18554, #18555).  
  - **CPU-only hosts**: FLUX.2 VAE decoding now done in torch on CPU (#18521).

---

### **4. Performance & Optimization**  
- **Diffusion Training**:  
  - Persistent conditioning cache enabled by default for SDXL and MiniMax-H3 trainers (#18519).  
  - Checkpointing budget introduced to reduce OOM risk; step-down behavior after failure (#18518).  
  - Tiled VAE decode now uses preallocated output buffers → avoids `torch.cat` overhead (#18506).  
- **Cold-Card Int8 Load**:  
  - Probe kernels compiled during weight load (vs. post-load) → reduces cold-start latency from ~15s to ~2.6–2.9s for FLUX.3 INT8 (#18455).  
  - CUTLASS library hashing optimized per-process → saves ~3s per load (#18463).  
- **GGUF Scheduling**:  
  - On Macs without MLX stack, GGUF fit rating now based on Metal availability, not free RAM (#18552).  

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|------|-------------|------------|
| High | #18481 | Intermittent tool call parsing failure in MiniMax-M3.1-Flash-GGUF exposes raw tokens and halts agent execution | Open |
| High | #17015 | Qwen hybrid model reprocesses full prompt across turns after tool use | Open |
| Medium | #18221 | Computer use disabled on Wayland sessions (KDE/GNOME) | Closed (workaround: use Xorg) |
| Medium | #18005 | GPU monitor shows zero utilization/temperature on Windows ROCm | Closed |
| Medium | #17985 | Image generation fails with black screen on AMD | Closed |
| Low | #18546 | Excel reader displays hidden format values (e.g., `0;-0;;@`) | Open |
| Low | #18523 | Webview dependency raises security concerns on locked systems | Open |

> ✅ *Fix PRs exist for several critical issues (e.g., #18521, #18519, #18518, #18455, #18463), but active regressions remain in tooling and prompt handling.*

---

### **6. What This Means for Application Developers**  
- **Local AI Agents**: With scheduled task replies and stable tool calling (pending #18481 fix), developers can now build persistent, stateful agents using Unsloth Studio’s desktop and web UI.  
- **Cross-Platform Deployment**: AMD NPU support now spans modern Ryzen AI chips and offers fallback paths for restrictive environments (Smart App Control), enabling broader deployment on Windows devices.  
- **Fine-Tuning Efficiency**: Automatic `max_seq_length` detection (#18236) and persistent conditioning caches (#18519) reduce friction in training pipelines.  
- **Security & Isolation**: The new network firewall for web tools, Python, and terminal (#18548) enables safer sandboxing of agent actions—critical for production-grade applications.  
- **Hardware Flexibility**: CPU-only image/video inference via sd.cpp is now robustly supported, allowing lightweight edge deployments.

> 🔗 **Key PRs to watch**: [#18553](https://github.com/unslothai/unsloth/pull/18553) (signed FastFlowLM), [#18552](https://github.com/unslothai/unsloth/pull/18552) (Mac GGUF fitting), [#18548](https://github.com/unslothai/unsloth/pull/18548) (network firewall).

---  
*Digest generated: 2026-11-20 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*