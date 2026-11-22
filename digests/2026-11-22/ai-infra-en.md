# AI Infrastructure Digest 2026-11-22

> Generated: 2026-11-22 02:37 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-22**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of deep specialization and hardware convergence, with projects rapidly differentiating by target layer (serving, local runtime, gateway, training) and platform (NVIDIA Blackwell, AMD MI355X/M300X, Apple M4, Intel XPU). Performance optimization is no longer just about throughput—it’s now deeply tied to kernel efficiency, memory layout, speculative decoding stability, and cross-platform consistency. The rise of hybrid models (MoE, looped attention), quantized LoRA, and diffusion pipelines is accelerating innovation at the infrastructure level, while security, cost tracking, and structured output fidelity are becoming non-negotiable for production use.

---

### **2. Activity Comparison**

| Project | Issues Open | PRs Merged (Last 24h) | Release Status |
|--------|-------------|------------------------|----------------|
| **vLLM** | 872 | 9 | None |
| **SGLang** | 745 | 12 | v1.0 roadmap active; breaking changes expected |
| **llama.cpp** | 1,038 | 10 | No breaking changes; fixes merged |
| **Ollama** | 1,114 | 5 | Pending `--no-animation`, split GGUF support |
| **LiteLLM** | 567 | 8 | Dev release (`v1.112.0-dev.2`) with security verification |

> 🔍 *Insight*: **Ollama** leads in issue volume (indicating high user-driven feedback), while **SGLang** shows the most active development velocity. **LiteLLM** stands out with secure, verifiable dev releases—critical for enterprise trust.

---

### **3. Model Support Race**

| New Model / Architecture | Supported By | Notes |
|--------------------------|--------------|-------|
| **Inkling-2-Mini (GGUF)** | ✅ **llama.cpp**, **Ollama**, **Unsloth** | Full GGUF support via `inkling2_loop` and `inkling2v`; Ollama still fails on Windows due to arch recognition |
| **MiniCPM5-15B-A2.5B (GQA MoE)** | ✅ **vLLM** | Native support with FP32 sigmoid MoE routing |
| **Qwen3.8-2.4T-A95B (MI355X)** | ✅ **vLLM**, **SGLang** | ROCm optimizations underway; SGLang adds block-scaled LoRA MoE |
| **Hy4-flash-FP8 (Tencent)** | ✅ **vLLM**, **SGLang** | Verified on ROCm; vLLM enables DFly speculative decoding |
| **Krea 2 / Wan2.2-T2V** | ✅ **Unsloth** | Full LoRA/QLoRA training support; video distillation enabled |
| **Maxwell-V1 MoE (35B total)** | ✅ **llama.cpp** | Full graph, tokenizer, converter support added |
| **Gemini 4+ Interactions API** | ✅ **LiteLLM** (in progress) | PR #53469 routes chat completions through new Google path — closing parity gap |

> 🏆 **Leader**: **vLLM** and **SGLang** are ahead in **ROCm/AMD** and **MoE/LoRA** model support. **Unsloth** leads in **diffusion + training** integration. **LiteLLM** is leading in **provider diversity and structured output routing**.

---

### **4. Performance Frontier**

| Focus Area | Leading Projects | Key Developments |
|-----------|------------------|------------------|
| **KV Cache & Prefix Optimization** | vLLM, SGLang, Ollama | vLLM fixes prefix-cache corruption; SGLang improves prefill continuity; Ollama sees cache eviction beyond 64K tokens |
| **Speculative Decoding** | vLLM, SGLang, llama.cpp | vLLM: DSpark broken on H200; SGLang: 2355 tok/s on 4×B200; llama.cpp: DSpark up to 80 tok/s after FA fix |
| **Quantization & Kernel Innovation** | vLLM, SGLang, Unsloth | vLLM replacing Marlin with **Humming** backend; SGLang enables **fully quantized LoRA MoE** (FP8, MXFP4); Unsloth adds W8A8 int8 base |
| **Distributed Serving & Scaling** | SGLang, vLLM | SGLang introduces data-parallel LoRA training; vLLM focuses on multi-GPU coordination |
| **Flash Attention & Memory Efficiency** | llama.cpp, vLLM | llama.cpp: compact bias FA reduces memory overhead; vLLM: ongoing SM120 CUDA graph issues |

> 🔥 **Hotspot**: **Blackwell (SM120)** is the primary performance battleground — all major engines report critical regressions or tuning needs. **ROCm/AMD** is also emerging as a key frontier with real-time optimization efforts.

---

### **5. Layer Positioning**

| Project | Primary Layer | Role in Stack |
|--------|---------------|---------------|
| **vLLM** | **Inference Engine** | High-throughput, low-latency serving; optimized kernels, speculative decoding, full GPU offload |
| **SGLang** | **Inference Engine + Gateway** | Production-grade engine with robust config validation, structured output, and scheduling |
| **llama.cpp** | **Local Runtime / Edge Inference** | CPU/GPU/MLX/Vulkan-focused; ideal for offline, lightweight, or heterogeneous deployment |
| **Ollama** | **Local Runtime + Developer Gateway** | Simplified CLI/tooling for local inference; bridges GGUF models with developer workflows |
| **LiteLLM** | **LLM Gateway / Aggregator** | Multi-provider routing, cost tracking, response formatting, OAuth handling — central orchestration layer |
| **Unsloth** | **Fine-tuning / Training Framework** | Specialized for LoRA/QLoRA training, diffusion, and multi-GPU data parallelism |

> 💡 **Architectural Insight**: A clear division is forming:
- **Engine Layer**: vLLM, SGLang
- **Runtime Layer**: llama.cpp, Ollama
- **Gateway Layer**: LiteLLM
- **Training Layer**: Unsloth

This reflects a maturing ecosystem where each project owns its domain with increasing depth.

---

### **6. Trend Signals**

1. **Hardware Divergence is Accelerating**  
   - NVIDIA Blackwell (SM120) and AMD MI355X are now **primary optimization targets**—not afterthoughts.
   - Projects like vLLM and SGLang are investing heavily in **kernel-level tuning** for these platforms, signaling that hardware-specific performance will define competitive advantage.

2. **MoE + LoRA + Quantization Are the New Standard**  
   - All projects now support **quantized LoRA MoE** (SGLang, vLLM, Unsloth).
   - The shift from legacy kernels (Marlin) to modern backends (Humming) shows a move toward **unified, scalable quantization** across model types.

3. **Structured Output & Cost Control Are Now Non-Negotiable**  
   - LiteLLM’s Gemini 4+ routing and cost export fixes reflect growing demand for **accurate billing and structured responses**.
   - Developers must now design around **response format fidelity**, **token counting accuracy**, and **security policies**—not just speed.

4. **Stability Over Novelty**  
   - Despite rapid feature additions, **critical stability issues dominate** (e.g., crashes, silent data corruption, memory overflows).
   - This signals that the industry is transitioning from "can it run?" to "can it run reliably at scale?"

5. **Developer Experience Matters**  
   - Features like `--no-animation`, `vllm.Render`, `metadata-only media items`, and `UNSLOTH_MEMORY_REPORT` show a growing focus on **observability, debugging, and CI/CD integration**.

---

### ✅ **Actionable Takeaways for Application Developers**
- **For production inference**: Use **vLLM** or **SGLang** on NVIDIA/AMD for best performance and stability—avoid `--enforce-eager` on Blackwell.
- **For edge/local agents**: Prefer **llama.cpp** or **Ollama** with GGUF models—ensure Vulkan/Metal builds are tested on non-UMA devices.
- **For multi-provider apps**: **LiteLLM** is the most mature gateway—leverage its cost tracking and structured output features.
- **For fine-tuning & training**: **Unsloth** offers the most advanced LoRA/diffusion tooling—especially for multi-GPU setups.
- **Watch for**: Breaking changes in **SGLang v1.0**, **vLLM's Humming migration**, and **Ollama's split GGUF support**—update your CI/agent pipelines accordingly.

> 📌 **Final Note**: The AI infrastructure stack is no longer monolithic. Choose based on **your hardware, deployment model, and operational needs**—the era of one-size-fits-all is over.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-11-22**

---

#### **1. Today's Highlights**  
The vLLM project continues its aggressive push toward full Rust frontend parity and ROCm/AMD hardware optimization, with critical performance work on Blackwell (SM120) and MI355X platforms. Key focus areas include stabilizing speculative decoding on H200/DGX Spark, fixing HF3FS KV connector load failures, and advancing the replacement of legacy Marlin kernels with the more modern Humming quantization backend across NVIDIA architectures.

---

#### **2. Releases & Breaking Changes**  
*None*  
No new releases or breaking API/config changes were published in the last 24 hours.

---

#### **3. New Model & Hardware Support**  
- ✅ **New Model Support**:  
  - Added native support for `MiniCPM5-15B-A2.5B` with gated GQA and FP32 sigmoid MoE routing via PR [#69127](https://github.com/vllm-project/vllm/pull/69127).  
  - Enabled `tencent/Hy4-flash-FP8` and `tencent/Hy4-flash` on ROCm (MI355X) with DFly speculative decoding via PR [#68839](https://github.com/vllm-project/vllm/pull/68839).

- ✅ **Hardware & Backend Expansion**:  
  - AMD ROCm: Added support for `MiniMax-M3.1-Flash-Quark-MXFP4` and `MiniMax-M3-MXFP4` checkpoints in AITER Triton W4A16 backend on gfx942 (MI300X/M325X) via PR [#69179](https://github.com/vllm-project/vllm/pull/69179).  
  - Intel GPU: Introduced `modelopt_mxfp8` quantization format for XPU via PR [#68858](https://github.com/vllm-project/vllm/pull/68858).

---

#### **4. Performance & Optimization**  
- 🔥 **Blackwell (SM120) Focus**:  
  - Ongoing performance tuning for `DeepSeek-V4.1-Flash` on RTX PRO 6000 Blackwell (SM120) due to extremely low decode throughput with `--enforce-eager` and unusable CUDA graphs — prioritized fix requested in issue [#56892](https://github.com/vllm-project/vllm/issues/56892).  
  - Fixing `--long-prefill-token-threshold` regression that breaks short request protection since v0.31.0 ([#60476](https://github.com/vllm-project/vllm/issues/60476)).

- 📈 **ROCm/AMD Optimizations**:  
  - Performance plan tracking for `Qwen3.8-2.4T-A95B` (gfx950 / MI355X) via issue [#57149](https://github.com/vllm-project/vllm/issues/57149).  
  - Optimizing `Muse Spark Open PTPC-FP8` (gfx942) with per-layer kernel improvements via PR [#64018](https://github.com/vllm-project/vllm/issues/64018).  
  - Stacked PRs improving attention fragment launches and deferred-scale kernels for W4A16 on gfx1151 ([#67388](https://github.com/vllm-project/vllm/pull/67388), [#68516](https://github.com/vllm-project/vllm/pull/68516)).

- ⚙️ **Quantization & Kernel Improvements**:  
  - Planning to replace legacy Marlin kernels with **Humming** across all NVIDIA architectures ([#65560](https://github.com/vllm-project/vllm/issues/65560)), which supports INT4/INT8 GPTQ/AWQ, FP8, MXFP8, MXFP4, NVFP4, MXFP6, and INT8/FP8 activations.  
  - Tuning Marlin for Mamba2 NVFP4 projections on SM120/SM121 via PR [#66675](https://github.com/vllm-project/vllm/pull/66675).

---

#### **5. Stability & Regressions**  
- ⚠️ **Critical Crashes & Failures**:  
  - **HF3FS KV Connector Load Failure**: Reports failed loads as "finished" without returning block IDs, causing incorrect prefix-cache hits and silent data corruption ([#69058](https://github.com/vllm-project/vllm/issues/69058)). Fixed in PR [#69095](https://github.com/vllm-project/vllm/pull/69095).  
  - **Host Memory Collapse**: Engine startup crashes on DGX Spark (GB10) due to `NV_ERR_NO_MEMORY`, despite 22 GiB free host memory ([#56824](https://github.com/vllm-project/vllm/issues/56824)).  
  - **DSpark Speculative Decoding Breakage**: DSpark fails on H200 nightly due to shared code path assumptions with DFlash ([#50851](https://github.com/vllm-project/vllm/issues/50851)).

- ⚠️ **Performance Degradations**:  
  - DFlash2 acceptance length collapses under batched requests when using `ROCM_ATTN` draft backend ([#53323](https://github.com/vllm-project/vllm/issues/53323)).  
  - Low decode throughput on SM120 GPUs with `--enforce-eager` — CUDA graph capture is unusable ([#56892](https://github.com/vllm-project/vllm/issues/56892)).

---

#### **6. What This Means for Application Developers**  
- **Use caution with Blackwell (SM120)**: Avoid `--enforce-eager` and expect lower-than-expected throughput until the CUDA graph fix lands. Monitor for regressions in `DeepSeek-V4.1-Flash` and `Qwen3.8` series.  
- **Adopt ROCm for AMD inference**: If deploying on MI355X/M300X, prioritize `Qwen3.8`, `Hy4-Flash`, and `MiniMax-M3` models — they’re now verified with performance optimizations underway.  
- **Avoid unstable speculative decoding paths**: Do not rely on `DSpark` on H200 or `DFlash2` with `ROCM_ATTN` draft backend until fixes are merged.  
- **Prepare for future quantization shifts**: The move from Marlin to Humming will eventually remove legacy kernels; ensure your deployment pipeline accounts for this transition (tracked in [#65560](https://github.com/vllm-project/vllm/issues/65560)).  
- **Leverage new rendering features**: The `vllm.Render` service (PRs [#65993](https://github.com/vllm-project/vllm/pull/65993), [#65994](https://github.com/vllm-project/vllm/pull/65994)) enables local rendering with JSON/SSE envelopes — ideal for gateway-side token processing and structured output workflows.

---  
*Digest generated from GitHub activity: [vllm-project/vllm](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-22

---

### **1. Today's Highlights**

The SGLang project continues its aggressive push toward **SGLang 1.0**, with a focus on stability, hardened configuration validation, and robustness for production deployments. Key developments include ongoing work on **quantized LoRA MoE support** across multiple backends (FP8, MXFP4, NVFP4), new optimizations for **Blackwell-era GPUs (sm_120)** and **AMD MI300X**, and critical fixes for **PD disaggregation race conditions** and **speculative decoding memory overflows**.

---

### **2. Releases & Breaking Changes**

- **SGLang 1.0 Release Tracker (#50045)**: The roadmap is active and focused on hardening existing functionality. Upgrading from `0.5.x` may require changes due to stricter config validation and the introduction of explicit error messages for invalid settings. See [Upgrade notes](https://github.com/sgl-project/sglang/issues/50045#upgrade-notes).
- **Security Advisory**: A high-severity issue was previously reported via [GHSA-74p5-rgj8-w57v](https://github.com/sgl-project/sglang/security/advisories/GHSA-74p5-rgj8-w57v) — unbounded `max_new_tokens` and `n` can monopolize the scheduler. This has been addressed in internal builds; users should upgrade promptly.

---

### **3. New Model & Hardware Support**

- **RTX 50-series (sm_120 / Blackwell)**: Several issues highlight compatibility problems with CUDA 13 wheels (`#49209`, `#51628`). The community is actively working on resolving Triton kernel compilation stalls and out-of-the-box model execution failures.
- **AMD MI300X (gfx942/gfx95)**: PRs #51746 and #51921 introduce optimized FP8 GEMMs using CK’s bpreshuffle kernel and block-scaled LoRA MoE providers, targeting performance gains on ROCm.
- **NPU (Ascend A2, Huawei)**: Ongoing support for hybrid models like `Qwen3.8-27B` on A2 32GB systems, though a bug exists where output is silently truncated when KV pool < input length (`#50443`).
- **Diffusion Models**: RFC #51383 targets cold-start optimization for diffusion models (e.g., MiniMax-H3), aiming for sub-20s startup times.

---

### **4. Performance & Optimization**

- **Speculative Decoding Efficiency**:  
  - PR #50032 reduces per-step host overhead in batch-1 speculative decode loops, crucial for low-latency stacks (e.g., DeepSeek-V4.1-Flash).  
  - PR #51636 improves throughput on 4×B200 by overlapping decode-path projections and reducing CUDA graph memory usage — achieving **~2355 tokens/sec** steady-state on 8K/1K prompt/response.
- **MoE & LoRA Optimization Stack**:  
  - Eight-part PR series (#48319, #51917–#51924) enables **fully quantized LoRA MoE** (FP8, MXFP4, NVFP4) with fused kernels and optimized execution plans. On SM100, generic prefill plans now overlap base GEMMs with gate/up-A computations.
- **GDN Prefill Optimization**: PR #51815 enables Triton-based GDN kernels during prefill graph capture on SM90, avoiding unnecessary breaks and improving continuity.
- **Kernel Compilation**: PR #51628 addresses long prefill stalls caused by `Mamba2 _chunk_scan_fwd_kernel` compilation at runtime — fix involves pre-compiling during engine init.

---

### **5. Stability & Regressions**

| Severity | Issue | Description | Status |
|--------|------|-------------|--------|
| Critical | [#51980](https://github.com/sgl-project/sglang/issues/51980) | PD-disaggregated decode requests reuse `bootstrap_room` incorrectly, returning another request’s output with HTTP 200 | Open |
| High | [#51188](https://github.com/sgl-project/sglang/issues/51188) | Host pin budget OOM-kills MiniMax-H3 on 24GB GPU + 32GB host; server reports ready but returns 503 | Open |
| High | [#51175](https://github.com/sgl-project/sglang/issues/51175) | Speculative state reservation on hybrid-GDN scales with draft length — block-16 draft fails on 72GB GPU | Open |
| Medium | [#49209](https://github.com/sgl-project/sglang/issues/49209) | sm_120 (Blackwell) cannot run any model with CUDA 13 wheel install | Open |
| Medium | [#51531](https://github.com/sgl-project/sglang/issues/51531) | `--mamba-ssm-dtype bfloat16` causes ~8-point drop in MATH-500 score vs float16 | Open |

> ✅ **Fixes merged today**:  
> - #52189: Added CI diagnostic workflow for self-hosted GPU runners (read-only metadata probe).  
> - #52171: Prevents request log buffer from stalling workers under load.  
> - #52180: Fixes `llguidance` grammar EOS handling edge case.

---

### **6. What This Means for Application Developers**

- **Expect breaking changes in v1.0**: Validate all `sampling_params` and `generation_config` inputs early — silent config drift is being replaced with explicit errors.
- **Use `--skip-tokenize` and `--skip-detokenize`** if you're doing custom tokenization or need lower-level control (feature requested in #51188).
- **Avoid unbounded `max_new_tokens`/`n`**: These can starve other requests — implement client-side limits or use `--max-new-tokens` enforced at server level.
- **For multi-modal apps**: Use `metadata-only media items` (RFC #51316) to reduce payload size during P/D disaggregated inference.
- **For security-sensitive apps**: Enforce render fingerprint checks on `/generate` (RFC #51315) to prevent unauthorized access via forged clients.
- **If deploying on Blackwell or AMD**: Monitor for unresolved issues around `sm_120` and `gfx942` — expect temporary instability until kernel fixes land.

> 🔗 **Actionable links**:  
> - [SGLang 1.0 Roadmap](https://github.com/sgl-project/sglang/issues/50045)  
> - [Quantized LoRA MoE Stack](https://github.com/sgl-project/sglang/pull/48319)  
> - [CI Diagnostic Workflow](https://github.com/sgl-project/sglang/pull/52189)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-22**

---

### **1. Today's Highlights**  
The latest round of updates centers on **Flash Attention (FA) stability**, **Inkling 2 DSpark speculation improvements**, and **critical fixes for Metal/Vulkan memory handling on non-UMA devices**. Notably, a fix for unaligned `memset` in Vulkan has been merged to prevent crashes on discrete GPUs, while new PRs enable tensor splitting and adaptive pausing for Inkling 2 models under constrained VRAM.

---

### **2. Releases & Breaking Changes**  
- **vulkan**: Fixed `memset` for unaligned ranges on non-UMA devices via [PR #32725](https://github.com/ggml-org/llama.cpp/pull/32725), critical for stable inference on discrete GPUs.  
- **model**: Automatic `.scale` tensor application now enabled by default ([PR #32669](https://github.com/ggml-org/llama.cpp/pull/32669)), improving model correctness and reducing manual tuning needs.  
- **chat**: `reasoning_effort = none` is now properly passed when supported ([PR #32763](https://github.com/ggml-org/llama.cpp/pull/32763)).

> ⚠️ No breaking API changes reported; all updates are additive or corrective.

---

### **3. New Model & Hardware Support**  
- **New Models**:  
  - Added support for **Inkling-2-Mini-GGUF** with IQ4_NL/IQ3_XXS quantizations ([PR #32778](https://github.com/ggml-org/llama.cpp/issues/32778), #32718).  
  - Added **Nemotron 3.6 Academia** architecture support (looped hybrid: GDP + dense attention + MLP) via [PR #32766](https://github.com/ggml-org/llama.cpp/pull/32766).  
  - Added **Maxwell-V1 MoE** (35B total / 3B active) with full graph, tokenizer, and converter support ([PR #32643](https://github.com/ggml-org/llama.cpp/pull/32643)).  
  - Added **MiniCPM5 MoE** support including gated GQA and routed experts ([PR #32644](https://github.com/ggml-org/llama.cpp/pull/32644)).  

- **Backends & Hardware**:  
  - **SYCL**: Added IQ4_NL and IQ4_XS weight reordering support ([PR #31998](https://github.com/ggml-org/llama.cpp/pull/31998)).  
  - **Metal**: Full real-time duplex support for Kyutai/Hibiki ([PR #32491](https://github.com/ggml-org/llama.cpp/pull/32491)).  
  - **WebGPU**: Updated Dawn SDK to fix compilation issues ([PR #32779](https://github.com/ggml-org/llama.cpp/pull/32779)).

---

### **4. Performance & Optimization**  
- **Flash Attention**:  
  - Compact bias implementation now enables full FA for Inkling 2 models ([PR #32740](https://github.com/ggml-org/llama.cpp/pull/32740)), eliminating materialization of intermediate tensors that previously caused massive memory overhead.  
  - On RTX 4070 SUPER, **DSpark speculative decoding improved from ~47.6 tok/s to 80 tok/s at long context** after fixing q4 draft KV and graph-rebuild cost ([PR #32773](https://github.com/ggml-org/llama.cpp/pull/32773)).  

- **CPU Optimizations**:  
  - AVX-512 kernels added for `iq3_s`, `iq2_s`, `q6_K`, and `iq3_xxs` dot products ([PRs #32774](https://github.com/ggml-org/llama.cpp/pull/32774), #32775, #32027).  
  - Gated delta net state passes fused on AVX2 ([PR #32028](https://github.com/ggml-org/llama.cpp/pull/32028)), reducing kernel invocations per token.

- **Memory Efficiency**:  
  - **mtmd**: Parakeet rel-pos views merged to avoid out-of-bounds access ([PR #32722](https://github.com/ggml-org/llama.cpp/pull/32722)).  
  - **fit**: Prioritized looped MoE layers in device memory to reduce VRAM pressure ([PR #32777](https://github.com/ggml-org/llama.cpp/pull/32777)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| Critical | `inkling2_loop`: prompts >96 tokens → all '?' output + server freeze ([#32778](https://github.com/ggml-org/llama.cpp/issues/32778)) | Breaks inference; affects GGUF models on CUDA | In progress (PR #32773 provides partial fix) |
| High | Qwen3.8-27B: decode throughput collapses ~25x at >80K context ([#27623](https://github.com/ggml-org/llama.cpp/issues/27623)) | Severe regression in long-context performance | Open |
| High | Vulkan: OOB token ID = n_vocab (248320) on AMD gfx1150 ([#28158](https://github.com/ggml-org/llama.cpp/issues/28158)) | Crashes inference; model fails to initialize | Open |
| Medium | SYCL XMX-ESIMD path slows MoE prompt processing by ~35% on Arc Pro B70 ([#31068](https://github.com/ggml-org/llama.cpp/issues/31068)) | Regression in Intel GPU performance | Open |
| Low | Web UI unresponsive at Chrome font size ≥24 ([#32361](https://github.com/ggml-org/llama.cpp/issues/32361)) | UX issue only | Open |

> ✅ **Fixes merged**: Vulkan `memset` alignment ([#32725](https://github.com/ggml-org/llama.cpp/pull/32725)), model `.scale` auto-application ([#32669](https://github.com/ggml-org/llama.cpp/pull/32669)).

---

### **6. What This Means for Application Developers**  
- **For agents using speculative decoding**: Use `--speculative-draft-model inkling2_loop` with `-sm tensor` (via [PR #32751](https://github.com/ggml-org/llama.cpp/pull/32751)) for better memory efficiency on 12–16 GB GPUs. Monitor [PR #32773](https://github.com/ggml-org/llama.cpp/pull/32773) for real-world DSpark speedups.  
- **For long-context apps**: Avoid `Qwen3.8-27B` with contexts >80K until [#27623](https://github.com/ggml-org/llama.cpp/issues/27623) is resolved—expect severe slowdowns.  
- **For high-performance CPU inference**: Enable AVX-512 kernels (`-march=native`) for `iq3_s`, `iq2_s`, and `q6_K` models—benchmarks show up to **~2x faster dot product** on modern Xeon systems.  
- **For cross-platform deployment**: Verify Vulkan/Metal builds on non-UMA devices (e.g., desktop AMD/NVIDIA) due to recent `memset` fixes—older versions may crash silently.  

> 🔗 **Key resources**:  
> - [Inkling 2 DSpark guide](https://github.com/ggml-org/llama.cpp/pull/32218)  
> - [Flash Attention compact bias](https://github.com/ggml-org/llama.cpp/pull/32740)  
> - [AVX-512 optimization docs](https://github.com/ggml-org/llama.cpp/wiki/Performance-Tuning)

---  
*Digest generated: 2026-11-22 | Source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-22**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to expand its support for multi-file GGUF models and complex local inference workflows, with critical progress on `inkling2` GGUF compatibility across MLX and CUDA backends. Major stability improvements are underway for Windows and Jetson platforms, particularly around GPU memory management and model loading failures—key concerns for edge and high-performance deployments.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, several **breaking changes are pending** due to PRs addressing core infrastructure:
- **PR #19825** enables `ollama create` to import split GGUF models via a single shard reference (fixes #5245). This will require updates to Modelfiles using `FROM model-*.gguf` or directory-based imports.
- **PR #19830** introduces a `--no-animation` CLI flag (fixes #19828), which will suppress spinner animations in CI/agent pipelines—ideal for clean logging but not yet released.

> 🔗 [PR #19825](https://github.com/ollama/ollama/pull/19825) | [PR #19830](https://github.com/ollama/ollama/pull/19830)

---

### **3. New Model & Hardware Support**  
- **Inkling 2 Mini (26B)**: Full GGUF support now available upstream in `llama.cpp` master (merged Nov 21).  
  - ✅ `inkling2_loop`, `inkling2v` architectures recognized via updated `LLAMA_CPP_VERSION` (PR #19826).
  - ❌ Still fails on Windows due to unknown architecture (`inkling2_loop`) — requires further runtime handling (Issue #19817).
- **Apple M4 Max**: MLX backend lacks support for relative-attention kernels despite sharing `applegpu_g16s` with M4 Pro (Issue #19820).
- **Jetson AGX Orin (JetPack 6)**: Image requests crash due to CUDA OOM in `cuMemAddressReserve`. Fix requires building runner with `GGML_CUDA_NO_VMM=ON` (Issue #19815).

> 🔗 [Issue #19817](https://github.com/ollama/ollama/issues/19817) | [PR #19826](https://github.com/ollama/ollama/pull/19826)

---

### **4. Performance & Optimization**  
- **Inkling 2 Prefix Cache Issues**:
  - Cache is fully evicted beyond ~64k tokens due to growing peak in `relative_attention_prefill` (Issue #19819).
  - Prefix cache recomputes up to 2k tokens per turn due to misaligned batch splits during restoration (Issue #19818).
- **Windows GPU Memory Spill**: On RTX 3050 (6GB VRAM), models exceeding VRAM spill ~13.9GB into shared memory even with `Prefer No Sysmem Fallback` enabled (Issue #19824).
- **MLX Kernel Optimization**: Relative-attention kernels disabled on M4 Max; enabling them could improve long-context efficiency.

> 🔗 [Issue #19819](https://github.com/ollama/ollama/issues/19819) | [Issue #19818](https://github.com/ollama/ollama/issues/19818) | [Issue #19824](https://github.com/ollama/ollama/issues/19824)

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| 🚨 Critical | #19815 | Jetson AGX Orin crashes on image input due to CUDA OOM in `cuMemAddressReserve` | Pending (requires build flag change) |
| 🚨 Critical | #19817 | Inkling 2 Mini fails to load on Windows due to unrecognized `inkling2_loop` arch | Pending (needs `llama.cpp` update + Ollama patch) |
| ⚠️ High | #19782 | Windows `/api/embed` returns 400 due to internal loopback connection refusal | Open (network-level issue in bundled server) |
| ⚠️ Medium | #19829 | Qwen3.5 parser ends thinking early when close tag appears as plain text | In progress (PR #18624) |
| ⚠️ Medium | #19823 | Security concern: Ollama Cloud’s third-party providers may expose data despite Zero Data Retention promise | Open (documentation clarification needed) |

> 🔗 [Issue #19815](https://github.com/ollama/ollama/issues/19815) | [Issue #19817](https://github.com/ollama/ollama/issues/19817) | [Issue #19782](https://github.com/ollama/ollama/issues/19782)

---

### **6. What This Means for Application Developers**  
- **For agents & CI pipelines**: Use `--no-animation` (once merged) to eliminate noisy spinner output in logs. Avoid relying on `stderr` for structured messages if animation is enabled.
- **For local inference apps**: Be cautious with large models (>64k context) on MLX/M4 hardware—expect repeated prefix recomputation and degraded performance. Monitor `OLLAMA_DEBUG=1` logs for cache behavior.
- **For production deployments**: Avoid `qwen3` models with thinking enabled via OpenAI-compatible API until #17969 is resolved (disabled via `/no_think` ignored).
- **For edge/cloud workloads**: Jetson users must build runners with `GGML_CUDA_NO_VMM=ON`; Windows users face memory spillover issues even with fallback policies disabled.

> 🔗 [PR #19830](https://github.com/ollama/ollama/pull/19830) | [Issue #17969](https://github.com/ollama/ollama/issues/17969) | [Issue #19815](https://github.com/ollama/ollama/issues/19815)

---  
*Digest compiled from GitHub activity (2026-11-22).*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-22**

---

#### **1. Today's Highlights**
The LiteLLM project continues its rapid evolution with key improvements in cost tracking accuracy and UI consistency, particularly around Gemini 4+ routing and usage dashboard alignment. A major PR (#53469) introduces native routing of Gemini 4+ chat completions through the Interactions API, closing a critical parity gap with Google’s upstream behavior. Meanwhile, several high-impact fixes address token counting, streaming reliability, and OAuth handling—critical for production inference systems.

---

#### **2. Releases & Breaking Changes**
- **v1.112.0-dev.2** (latest dev release):  
  Includes security verification via Cosign using GitHub Actions OIDC identity:  
  ```bash
  cosign verify \
    --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com \
    ghcr.io/berriai/litellm:v1.112.0-dev.2
  ```
  > [GitHub Release v1.112.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.2)

- **v1.108.15 (LTS)**:  
  Recommended for production use. The `lts` Docker tag now points to this version.  
  > [GitHub Release v1.108.15](https://github.com/BerriAI/litellm/releases/tag/v1.108.15)

> ⚠️ **Breaking Change**: PR #53497 introduces a breaking change in Lens gateway export logic—cost records are now only exported *after* ledger commit. Ensure your spend logs ledger is enabled before upgrading if you currently export without it.  
> [PR #53497 – Export cost after ledger commit](https://github.com/BerriAI/litellm/pull/53497)

---

#### **3. New Model & Hardware Support**
- **Gemini 4+ Interactions API Routing** (in progress):  
  PR #53469 enables routing Gemini 4+ chat completions through the new Interactions API path, improving fidelity with Google’s latest model behavior. 131 test cases remain unaligned—work in progress.  
  > [PR #53469 – Route Gemini 4+ through Interactions API](https://github.com/BerriAI/litellm/pull/53469)

- **GMI Cloud Models Added to Cost Map**:  
  One new model (`gmi/tencent/hy4-flash`) added with full pricing metadata:  
  - Input: $7e-08/token | Output: $2.81e-07/token  
  - Max input: 1,000,000 tokens  
  > [PR #53484 – Add GMI Cloud models to cost map](https://github.com/BerriAI/litellm/pull/53484)

- **iFlytek Spark Chat Provider** (new):  
  PR #31690 adds support for iFlytek’s Spark series via the LiteLLM provider interface.  
  > [PR #31690 – Add iFlytek Spark provider](https://github.com/BerriAI/litellm/pull/31690)

---

#### **4. Performance & Optimization**
- **Streaming Reliability Improvements**:  
  Fixes address streaming crashes due to malformed chunks (PR #43487), incorrect `finish_reason` reporting (PR #46542), and decoder reuse issues in `amazon_nova` streaming (PR #35589). These ensure more predictable and accurate streaming outputs.

- **Token Counting Accuracy**:  
  PRs #31280 and #31282 fix undercounting of tool call names and double-counting of Anthropic cache tokens, respectively—critical for precise cost estimation and budget enforcement.

- **Vertex AI Efficiency**:  
  PR #53338 identifies that every Vertex Gemini image request rebuilds credentials unnecessarily due to per-instance caching. This will be addressed in future refactors to reduce latency and auth overhead.

---

#### **5. Stability & Regressions**
| Issue | Severity | Status | Fix PR | Notes |
|------|----------|--------|--------|-------|
| [#18058] Cost calculation fails for ElevenLabs | High | Closed | N/A | Regression in cost tracking; confirmed fixed by community |
| [#35589] `amazon_nova` streaming fails 100% | Critical | Closed | N/A | Caused by zstd decompressor reuse; resolved via upstream patch |
| [#53478] Vertex Claude Haiku 5.5 ignores `response_format` | High | Open | N/A | Missing `supports_native_structured_output` flag causes fallback to JSON tool |
| [#53263] Spend logs omit payloads despite prompt storage enabled | Medium | Closed | N/A | Regression in v1.110.2; logged but not yet patched |
| [#53477] UI layout inconsistencies | Medium | Open | N/A | Refactor underway to unify page padding via layout frame |

> ✅ **Fixes in Progress**: Several high-priority issues related to cost, streaming, and authentication are actively being addressed in open PRs.

---

#### **6. What This Means for Application Developers**
- **Production Systems**: Upgrade to `v1.108.15-lts` or wait for stable `v1.112.0` to benefit from enhanced cost tracking, streaming stability, and security verification.
- **Cost-Aware Apps**: Use `gmi/tencent/hy4-flash` and other newly added models in cost-sensitive workflows—pricing is now fully integrated.
- **Gemini 4+ Users**: If relying on structured output or real-time avatar features, monitor PR #53469 for full integration. Avoid `response_format` mismatches until the flag is properly recognized.
- **OAuth & MCP Integrations**: Be cautious with `pass-through` routes and `GET` queries (see #53185); consider re-testing browser-based flows post-upgrade.
- **Custom Tooling**: Address the issue with missing tools when no upstream credential is supplied (#52849) by explicitly setting authorization headers or updating configuration.

> 🔗 **Action Items**:  
> - Verify Docker image signatures using Cosign ([docs](https://docs.litellm.ai/docs/security)).  
> - Review spending logs and response payload visibility (fix PR #53516 aligns UI date handling).  
> - Audit cost calculations for multi-model deployments using custom pricing.

---  
*Digest generated: 2026-11-22 | Source: [BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-22**

---

### **1. Today's Highlights**  
The Unsloth team has made significant progress in multi-GPU and diffusion training optimizations, with key PRs enabling data-parallel LoRA training across GPUs and fixing critical issues in Qwen-Image 2.1 and Krea 2 inference. A major fix addresses raw LFM tool-call markup exposure in Studio (PR #18820), improving output cleanliness. Meanwhile, stability concerns persist around AMD NPU support and memory management on Windows ROCm/Strix Halo systems.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, several breaking changes are active in `v0.1.920-beta` and `v0.1.922-beta`:  
- The `--load-mode none` flag is now being overridden by forced `mmap` behavior on Windows (tracked in [#17605](https://github.com/unslothai/unsloth/issues/17605), fixed in #17607) — a regression affecting high-memory GGUF models.  
- `--diffusion-fa` is deprecated in favor of `--flash-attn off,diffusion=on` in `sd.cpp` builds ([#18787](https://github.com/unslothai/unsloth/pull/18787)).  
- `UNSLOTH_DIFFUSION_INT8_TRAIN=w8a8` now enables an opt-in frozen W8A8 int8 base for faster training on non-fp8 cards ([#18782](https://github.com/unslothai/unsloth/pull/18782)).

---

### **3. New Model & Hardware Support**  
- **Model Support**:  
  - Full LoRA/QLoRA training support added for **Inkling-2-Mini and Inkling-2-Small** (PR #18812).  
  - Wan2.2-T2V-A14B now supports 4-step distill LoRA pairs ([#18778](https://github.com/unslothai/unsloth/pull/18778)).  
- **Hardware & Backend**:  
  - **ROCm**: Fixes for AMD GPU crashes (e.g., dual RX 6700 XT, gfx1200 RDNA4) and improved nf4 dequant cache support ([#18825](https://github.com/unslothai/unsloth/pull/18825)).  
  - **Apple Silicon**: Splitting large attention calls into query chunks to avoid MPSGraph precision bugs on macOS 15 ([#18783](https://github.com/unslothai/unsloth/pull/18783)).  
  - **CPU Backend**: Memory reporting now includes process RSS and available RAM via `UNSLOTH_MEMORY_REPORT=1` ([#18807](https://github.com/unslothai/unsloth/pull/18807)).

---

### **4. Performance & Optimization**  
- **Multi-GPU Training**:  
  - Data-parallel DiT LoRA training now supported via `num_gpus` setting ([#18771](https://github.com/unslothai/unsloth/pull/18771)), eliminating idle second GPU.  
  - Video rendering now splits steps across two cards by tokens ([#18789](https://github.com/unslothai/unsloth/pull/18789)), enabling full utilization.  
- **Kernel & Memory Optimizations**:  
  - Krea 2 inference and training now process only valid text rows (not padded 512-row blocks), reducing compute waste ([#18813](https://github.com/unslothai/unsloth/pull/18813), [#18788](https://github.com/unslothai/unsloth/pull/18788)).  
  - Fused SwiGLU installed on streamed int8 GEMM path for MiniMax-H3-Image ([#18798](https://github.com/unslothai/unsloth/pull/18798)).  
  - Budgeted gradient checkpointing and nf4 dequant cache now work on ROCm ([#18825](https://github.com/unslothai/unsloth/pull/18825)).  

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Link |
|---------|------|--------|------|
| Critical | AMD NPU: `Extra data: line 2025 column 1` error after FastFlowLM update | Open | [#18763](https://github.com/unslothai/unsloth/issues/18763) |
| High | Windows Strix Halo: `mmap` still enforced despite `--load-mode none` | Open | [#18805](https://github.com/unslothai/unsloth/issues/18805) |
| High | Dual RX 6700 XT: ROCm crash during inference | Open | [#18622](https://github.com/unslothai/unsloth/issues/18622) |
| Medium | QLoRA on gfx1200: `HIP error: illegal memory access` in fused kernels | Open | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| Medium | Qwen-Image-Edit GGUF: device mismatch in `_adaln_continuous_forward` | Open | [#18759](https://github.com/unslothai/unsloth/issues/18759) |
| Low | Copyable prompt token data now uncopyable | Open | [#18755](https://github.com/unslothai/unsloth/issues/18755) |

> ✅ **Fixes in Progress**: Several PRs address underlying causes (e.g., memory reporting, diffusion layer splitting, tool-call stripping).

---

### **6. What This Means for Application Developers**  
- **Build robust agents**: Use `num_gpus` for scalable, data-parallel LoRA training on multi-GPU setups.  
- **Optimize inference**: Leverage `--flash-attn off,diffusion=on` and disable `--diffusion-fa` for stable diffusion pipelines.  
- **Avoid regressions**: Avoid `--load-mode none` on Windows ROCm until #18805 is resolved; expect increased RAM usage otherwise.  
- **Handle tool outputs carefully**: Raw LFM tool-call syntax is now stripped from final answers (PR #18820), so your app logic should not rely on it.  
- **Monitor hardware-specific issues**: AMD users should expect instability on NPU and older RDNA4 cards until fixes land.  
- **Plan for future support**: Expect broader language coverage (e.g., Amharic, African languages) and goal-mode features (PR #18819) in upcoming releases.

---  
*Digest generated: 2026-11-22 | Source: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*