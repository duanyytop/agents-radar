# AI Infrastructure Digest 2026-11-13

> Generated: 2026-11-13 02:52 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in late 2026 is defined by rapid convergence across hardware abstraction, model serving efficiency, and agent-native tooling. Projects are increasingly focused on cross-architecture support—especially AMD ROCm and NPU platforms—while pushing performance boundaries through kernel-level optimizations and unified quantization backends. The shift toward Rust-based cores (LiteLLM) and modernized inference engines (vLLM, SGLang) reflects a maturing ecosystem prioritizing stability, security, and scalability. Meanwhile, local-first deployment tools (Ollama, Unsloth) are enhancing usability for developers and researchers, enabling seamless model experimentation and integration into desktop agents.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Recent Release? | Notes |
|---------------|-------------|----------|------------------|-------|
| **vLLM**      | 38          | 47       | No               | High focus on Blackwell/ROCm stability; critical regression in v0.24.0 |
| **SGLang**    | 54          | 39       | Yes (v0.5.23)    | Performance regression in v0.5.23 raises concerns; active NPU/ROCm work |
| **llama.cpp** | 42          | 33       | Yes (security patch) | Security fixes + Vulkan/CUDA gains; high-severity regressions |
| **Ollama**    | 36          | 28       | No               | Critical AMD VRAM detection bug; community integrations growing |
| **LiteLLM**   | 28          | 22       | Yes (v1.110.0-rc.2) | RC release with Rust-core migration; breaking changes for middleware |
| **Unsloth**   | 24          | 21       | No               | Major UX and memory improvements; lazy mode and RPM packaging |

> *Note: Issue/PR counts reflect open status as of 2026-11-13. LiteLLM’s RC indicates imminent production adoption.*

---

### **3. Model Support Race**

| New Model / Architecture         | Supported By | Key Advancement |
|----------------------------------|--------------|-----------------|
| **Qwen3.8-Flash-Next (AMD/NPU)** | ✅ SGLang, Unsloth, vLLM | Full graph replay & Triton support on NPU; Studio UI precision control |
| **DeepSeek-V4-Flash (Ampere)**   | ❌ vLLM (Feature Request) | Pending native support on A100/RTX 30xx; blocker for wider deployment |
| **Nemotron-3.5 ASR Streaming**   | ✅ vLLM | Enables multilingual streaming speech recognition |
| **Raon-1-mini-preview (GGUF)**   | ✅ llama.cpp | Full Hugging Face → GGUF conversion |
| **Zaya1-8B (GGUF)**              | ✅ llama.cpp | SSM_CONV fix enables CUDA compatibility |
| **MI355X / gfx950 (ROCm)**       | ✅ vLLM, SGLang, Unsloth | Active optimization for Qwen3.8 series; kernel fusion in progress |
| **Fedora RPM (Unsloth)**         | ✅ Unsloth | First major Linux distro packaging for local AI runtime |

> 🏆 **Leader**: **Unsloth** leads in user experience and deployment flexibility (RPM, nested folders), while **vLLM** dominates in hardware breadth and low-level kernel tuning.

---

### **4. Performance Frontier**

| Optimization Focus             | Leading Projects | Key Developments |
|-------------------------------|------------------|------------------|
| **Kernel-Level Efficiency**   | vLLM, llama.cpp | NVFP4 prioritization (vLLM); fused KV dequant in MMA (llama.cpp) |
| **Batch-Invariant Matmuls**   | vLLM             | 1.76× throughput gain at concurrency 1 (Gemma 4 E2B/E4B) |
| **Speculative Decoding**      | SGLang, llama.cpp | SGLang reports 33–45% decode latency drop (v0.5.22); llama.cpp has draft decoding crashes |
| **KV Cache & Offloading**     | vLLM, SGLang     | TP-agnostic offloading (vLLM RFC #61886); HiCache data plane (SGLang) |
| **Memory Management**         | Ollama, llama.cpp | Lazy VRAM allocation (Vulkan); Metal prefix reuse (Ollama) |
| **Quantization Unification**  | vLLM (RFC #65560) | Push to replace Marlin with Humming backend for INT4/INT8/F8/MXFP4/MoE |

> 🔥 **Trend**: Optimization is shifting from single-model gains to **systemic efficiency**—kernel fusion, batch-invariant execution, and dynamic memory management are now central.

---

### **5. Layer Positioning**

| Project       | Primary Layer             | Differentiator |
|---------------|----------------------------|----------------|
| **vLLM**      | Inference Engine           | Industry standard for high-throughput, GPU-optimized serving; strong Blackwell/ROCm focus |
| **SGLang**    | Inference Engine + Agent Runtime | Hybrid engine with HiCache, Mamba state mgmt; optimized for agentic workflows |
| **llama.cpp** | Local Runtime / Edge Inference | Cross-platform, lightweight; excels in mobile (Hexagon), Vulkan, and Apple Silicon |
| **Ollama**    | Local Runtime + Gateway    | Developer-friendly CLI, desktop agent integrations; growing ecosystem but API gaps |
| **LiteLLM**   | LLM Gateway / Orchestration | Multi-provider routing, cost monitoring, security-hardened (cosign-signed images) |
| **Unsloth**   | Training + Local Runtime   | End-to-end Studio experience with fine-tuning, quantization control, and audio/image pipelines |

> 📊 **Positioning Insight**: vLLM and SGLang dominate the **inference engine layer**; LiteLLM owns **gateway orchestration**; Ollama and Unsloth lead in **local developer experience**; llama.cpp remains the **edge/low-resource champion**.

---

### **6. Trend Signals**

1. **Cross-Architecture Abstraction is Now Table-Stakes**  
   AMD ROCm, NPU, and Intel OpenVINO are no longer experimental—they’re actively being optimized in all major projects. **vLLM**, **SGLang**, and **Unsloth** are leading this charge, signaling that future-proof deployments must support heterogeneous hardware.

2. **Quantization Is Consolidating Around Unified Backends**  
   The push to replace legacy systems like Marlin with **Humming (vLLM)** or **native MoE-aware kernels** indicates a move toward **single, maintainable quantization stack**—reducing technical debt and enabling broader model coverage.

3. **Agent Workloads Are Driving Infrastructure Innovation**  
   Features like **multi-turn prefix reuse (SGLang)**, **tool schema enhancements (Ollama)**, and **streaming tool call reliability (LiteLLM)** show that agent applications are now shaping core infrastructure priorities—not just inference speed.

4. **Security and Stability Are No Longer Afterthoughts**  
   Cosign-signed Docker images (LiteLLM), SSRF fixes (llama.cpp), and rigorous testing of speculative decoding (SGLang) reflect an industry-wide maturity shift: **production-grade guardrails are non-negotiable**.

5. **Migration Risk Is Rising with Core Architecture Shifts**  
   The Rust-core transition in LiteLLM and Humming replacement in vLLM will break existing middleware. Developers should **audit dependencies early** and adopt LTS versions where available.

---

### ✅ **Recommendation for Application Developers**
- **Prioritize stability over bleeding-edge features**: Avoid v0.5.23 (SGLang), v0.24.0 (vLLM), and unpatched Ollama 0.30+ on AMD Strix Halo.
- **Adopt unified quantization (e.g., Humming)** early for NVIDIA Hopper+ and future Blackwell GPUs.
- **Use `lazy VRAM` (llama.cpp)** and **HiCache data planes (SGLang)** for long-context, memory-constrained workloads.
- **Monitor LiteLLM’s cost logging bugs (#48398)**—never trust provider-reported costs without validation.
- **Leverage Ollama’s new integrations (Bluebird Harness, Valo)** for rapid local agent prototyping.

> *The infrastructure is evolving fast—but only the resilient, observant, and proactive will thrive.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-13**

---

### **1. Today's Highlights**  
The vLLM project is advancing toward broader hardware and model support, with significant momentum in ROCm/AMD optimization for Qwen3.8 series models on gfx950 (MI355X) and a major push to replace Marlin with the more modern Humming quantization backend across NVIDIA architectures. Critical performance improvements are landing for SM120 (Blackwell), including NVFP4 kernel prioritization and batch-invariant matmul tuning for Gemma 4 E2B/E4B.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the past 24 hours.*

---

### **3. New Model & Hardware Support**  
- **AMD ROCm Support**: Active performance optimization for `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` and `amd/Qwen3.8-Flash-Next-Quark-MXFP4` on **gfx950 / MI355X**, with planned stacked PRs targeting full utilization of specialized kernels.
- **NVIDIA Blackwell (SM120)**: Enhanced support for FP8/NVFP4 kernels via prioritized FlashInfer b12x paths and alignment with newer compute capabilities.
- **DeepSeek-V4-Flash (SM8x)**: Feature request #50576 seeks native support on Ampere GPUs (A100/A800, RTX 30xx), critical for wider deployment of DeepSeek’s latest flash variants.
- **NVIDIA Nemotron 3.5 ASR Streaming**: RFC #47455 tracks support for `nemotron-3.5-asr-streaming-0.6b`, enabling multilingual streaming speech recognition in production pipelines.

> 🔗 [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) | 🔗 [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) | 🔗 [Issue #59575](https://github.com/vllm-project/vllm/issues/59575)

---

### **4. Performance & Optimization**  
- **Kernel-Level Gains**:  
  - ✅ **NVFP4**: On SM120, `FlashInferB12xNvFp4LinearKernel` now preferred over CUTLASS due to 1.5–2× faster execution across test shapes (#67202).  
  - ✅ **Batch Invariant Matmuls**: Tuned for Gemma 4 E2B/E4B under `VLLM_BATCH_INVARIANT=1`, yielding **1.76× throughput at concurrency 1** and **1.21× at concurrency 128** (#67351).  
- **Model-Specific Optimizations**:  
  - **Qwen3.8 Series**: Ongoing fusion of mHC seams on gfx942 (ROCm) to reduce Triton launches and AITER overhead (#60153).  
  - **GLM-5.3**: Follow-up optimizations leveraging existing `glm_moe_dsa` architecture gains (#57406).  
- **Quantization Migration**:  
  - **Humming vs Marlin**: RFC #65560 advocates replacing Marlin with Humming across all NVIDIA architectures—offering unified support for INT4/INT8 GPTQ/AWQ, FP8, MXFP4/6/8, and MoE layers without legacy SM80-specific code.

> 🔗 [PR #67202](https://github.com/vllm-project/vllm/pull/67202) | 🔗 [PR #67351](https://github.com/vllm-project/vllm/pull/67351) | 🔗 [RFC #65560](https://github.com/vllm-project/vllm/issues/65560)

---

### **5. Stability & Regressions**  
- **Critical Regression**: vLLM `0.24.0` fails to start on **Blackwell (sm_120)** with FP8 models due to `DeepGEMM Unknown recipe` assertion — confirmed as a regression from `0.23.0` (#47130). *Fix pending.*  
- **Crash Under Load**: Engine crashes during async KV transfer when handling aborted requests (`Scheduler._update_from_kv_xfer_finished` asserts on stale `req_id`) — reported in #43226; fix PRs under review.  
- **ROCm Crash**: GPU memory access fault on MI325X when sequences exceed 2048 tokens with DeepSeek-V4 Flash + sparse_attn_indexer + FP8 KV cache (#48266).  
- **Confidential Computing Issue**: Silent garbage output due to stale UVA views in V2 model runner under TDX/CC mode — workaround exists via `VLLM_USE_V2_MODEL_RUNNER=0` (#57224).

> 🔗 [Issue #47130](https://github.com/vllm-project/vllm/issues/47130) | 🔗 [Issue #43226](https://github.com/vllm-project/vllm/issues/43226) | 🔗 [Issue #48266](https://github.com/vllm-project/vllm/issues/48266) | 🔗 [Issue #57224](https://github.com/vllm-project/vllm/issues/57224)

---

### **6. What This Means for Application Developers**  
- **Expect better multi-model serving latency**: The CUDA checkpoint/restore RFC (#34303) and TP-agnostic KV offloading efforts (#61886) will soon enable near-zero cold starts and smoother model switching in dynamic environments.  
- **Adopt Humming early**: For new deployments on NVIDIA Hopper+ or future Blackwell, migrate from Marlin to Humming to benefit from unified, architecture-aware quantization support and avoid legacy kernel limitations.  
- **Use batch-invariant mode for consistency**: With #27433 and recent tuning, enabling `VLLM_BATCH_INVARIANT=1` improves determinism and performance stability—especially in high-concurrency scenarios.  
- **Avoid v0.24.0 on Blackwell**: Until #47130 is resolved, stick to v0.23.0 or earlier for FP8 inference on sm_120 GPUs.  

> 🔗 [RFC #34303](https://github.com/vllm-project/vllm/issues/34303) | 🔗 [RFC #65560](https://github.com/vllm-project/vllm/issues/65560) | 🔗 [Issue #27433](https://github.com/vllm-project/vllm/issues/27433)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-13

---

### **1. Today's Highlights**  
The SGLang project continues its aggressive multi-hardware and performance optimization push, with significant progress on AMD ROCm support, NPU integration for Qwen3.8-Flash-Next, and critical stability improvements in HiCache and Mamba state management. A major regression in decode performance (33–45% worse) between v0.5.22 and v0.5.23 has been reported on Hopper GPUs, raising concerns about recent speculative decoding changes.

---

### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the last 24 hours. However, **v0.5.23** is under scrutiny due to a severe performance regression (see #49336), which may require a rollback or hotfix. The upcoming **SGLang 1.0 release tracker (#50045)** emphasizes API stability, configuration hardening, and breaking change documentation—expected to be a pivotal milestone for production use.

---

### **3. New Model & Hardware Support**  
- **NPU Support**: Full support for **Qwen3.8-Flash-Next** on NPU with graph replay, MTP, and Triton kernels via PR #37570.  
- **AMD ROCm**: Enhanced DeepSeek-V4 and Qwen3 prefill optimizations via fused kernels (PR #47052), improved MoE dispatch with MORI EPv2 (PR #48097), and reduced host overhead (PR #48093).  
- **Unified Memory Roadmap**: Progress tracked in #49944, enabling dynamic KV/recurrent state sharing across GPU memory arenas—critical for long-context and agentic workloads.

---

### **4. Performance & Optimization**  
- **Hopper (SM90)**: A **33–45% per-step decode latency increase** observed from v0.5.22 → v0.5.23 with `DeepSeek-V4.1-Flash` and DSPARK speculation (#49336). This is a high-priority regression impacting throughput at scale.  
- **AMD ROCm**: Significant prefill and verify overhead reduction on gfx1250 via unified metadata and optimized gather/index reuse (PR #48093).  
- **HiCache + Mooncake**: Reproducible cache hit-rate dips under L2/L3 pressure; root cause under investigation (#47481).  
- **Memory Efficiency**: PR #49473 introduces the **HiCache backend data plane**, improving offload coordination between L2/L3 tiers.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| 🔴 High | #49336 | 33–45% decode latency regression on SM90 (v0.5.23) | Pending |
| 🔴 High | #49881 | NaN logits latched after padding-induced CUDA graph resize (batch=9 → bs=10) | Under investigation |
| 🟡 Medium | #50030 | `--enable-hisparse` fails on GLM-5.3-Flash due to missing `register_mapping` | In review |
| 🟡 Medium | #49327 | MI355X (gfx950) performance issues with DeepSeek-V4.1-Flash | Tracking via PRs |
| 🟡 Medium | #50130 | Short Mooncake zero-copy reads incorrectly counted as full cache hits | Bug reported |

> **Note**: Flaky CI infrastructure remains a top concern (#42752, #17050), affecting developer velocity and release confidence.

---

### **6. What This Means for Application Developers**  
- **Avoid v0.5.23** if running high-concurrency, low-latency inference on Hopper GPUs—expect significant degradation in throughput.  
- Leverage **multi-turn prefix reuse** more aggressively now that hybrid state checkpointing is being refined (PR #49886); ensure state pool sizing accounts for idle session retention (PR #50033).  
- For **multi-hardware deployment**, SGLang’s plugin system (tracked in #49968) enables consistent orchestration across NVIDIA, AMD, and NPU backends—ideal for heterogeneous clusters.  
- Be cautious with **streaming tool calls** and **length-based truncation**; bugs in argument handling (#50131, #49897) may silently corrupt outputs.  
- Monitor the **SGLang 1.0 roadmap (#50045)** for future stable APIs—expect stricter config validation and backward compatibility guarantees.

> 💡 *Recommendation*: Pin to v0.5.22 until the decode regression is resolved, and test your pipelines on AMD/ROCm and NPU platforms using latest PRs (e.g., #47052, #37570) for early adoption of cross-architecture support.  

🔗 [View all open issues](https://github.com/sgl-project/sglang/issues) | 🔗 [SGLang 1.0 Tracker](https://github.com/sgl-project/sglang/issues/50045)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-13**

---

### **1. Today's Highlights**  
The latest development cycle brings significant performance gains for CUDA and Vulkan backends, particularly in speculative decoding and prefill stages. Critical fixes address security vulnerabilities (SSRF) and memory safety issues in the server layer, while new support for Raon-1-mini-preview and expanded OpenVINO/NPU capabilities enhance model diversity and hardware reach.

---

### **2. Releases & Breaking Changes**  
- **Security Fix**: Fixed SSRF vulnerability in CORS proxy and media URL handling via `server: fix SSRF for CORS proxy and media URLs` ([#32115](https://github.com/ggml-org/llama.cpp/pull/32115)).  
- **Memory Safety**: Avoided unnecessary initialization of unused graph metadata pages (`llama: avoid touching unused graph metadata pages`, [#32043](https://github.com/ggml-org/llama.cpp/pull/32043)) — improves memory footprint on long-running sessions.  
- **Migration Note**: A new migration guide for `llama_batch` → `llama_batch_ext` is now available ([#32163](https://github.com/ggml-org/llama.cpp/pull/32163)), essential for users upgrading from older API usage.

---

### **3. New Model & Hardware Support**  
- **Model Support Added**:  
  - [Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview-gguf) now supported with full Hugging Face-to-GGUF conversion ([#32173](https://github.com/ggml-org/llama.cpp/pull/32173)).  
  - [Zaya1 8B (Zyphra)](https://huggingface.co/varun10221/Zaya1-8B-GGUF) added with SSM_CONV fix for CUDA compatibility ([#32071](https://github.com/ggml-org/llama.cpp/pull/32071)).  
- **Backend & Hardware Expansion**:  
  - Hexagon backend gains `SSM_SCAN` op support (f32, tested on v75/v81/v85 Android and WoS devices) ([#31921](https://github.com/ggml-org/llama.cpp/pull/31921)).  
  - OpenVINO backend now supports Qwen3.5 GDN decomposition, MTP multi-sequence inference, and gemma-4 with improved NPU/GPU/memory efficiency ([#32172](https://github.com/ggml-org/llama.cpp/pull/32172)).  
  - Vulkan now supports `d_state=96` in `SSM_SCAN`, enabling Nemotron-3-Puzzle to run entirely on GPU instead of falling back to CPU ([#32162](https://github.com/ggml-org/llama.cpp/pull/32162)).

---

### **4. Performance & Optimization**  
- **CUDA**: Fused KV dequantization into MMA flash-attention kernels for q8_0/q4_0/f8_e4m3, eliminating separate scratch-memory pass — reduces latency and PCIe bandwidth pressure ([#31802](https://github.com/ggml-org/llama.cpp/pull/31802)).  
- **CUDA/Vulkan**: Optimized prefill via fusion of `w_s scale` in epilogue MMQ for nvfp4 checkpoints — improves throughput for high-end models ([#26048](https://github.com/ggml-org/llama.cpp/pull/26048)).  
- **Vulkan**: Introduced lazy VRAM allocation (`VRAM memory grows dynamically with context`) — avoids upfront reservation of massive GPU memory (e.g., 1M-token contexts), mimicking virtual disk behavior ([#32170](https://github.com/ggml-org/llama.cpp/pull/32170)).  
- **Apple Silicon**: SpacemiT Q4_1 32x256 now uses HP kernel on M1/M2 chips, aligning with Q4_0 path and improving load efficiency ([#31929](https://github.com/ggml-org/llama.cpp/pull/31929)).  

---

### **5. Stability & Regressions**  
- **High Severity**:  
  - `--spec-type draft-dflash` crashes during post-decode on hybrid Qwen3.8-27B with `--parallel 8` due to cache inconsistency ([#31656](https://github.com/ggml-org/llama.cpp/issues/31656)).  
  - Flash Attention crash in Gemma 4 with MTP due to query head dimension mismatch (`neq0 != HSK`) — affects both Vulkan and SYCL backends ([#29419](https://github.com/ggml-org/llama.cpp/issues/29419), [#29418](https://github.com/ggml-org/llama.cpp/issues/29418)).  
- **Medium Severity**:  
  - `llama-server` logs nondeterministic `logprobs` across identical requests on SYCL + MoE setups despite seed input ([#31206](https://github.com/ggml-org/llama.cpp/issues/31206)).  
  - Vulkan driver TDR resets when loading DFlash2 draft models on dual Intel Arc Pro B70 GPUs ([#28778](https://github.com/ggml-org/llama.cpp/issues/28778)).  
- **Note**: No PRs yet exist for these critical regressions; developers should monitor issue trackers closely.

---

### **6. What This Means for Application Developers**  
- **Use Cases**: Leverage `lazy VRAM allocation` ([#32170](https://github.com/ggml-org/llama.cpp/pull/32170)) to deploy long-context models without over-provisioning GPU memory — ideal for document QA or code generation pipelines.  
- **Deployment**: Enable `draft-dflash` only if avoiding regression risks — current stability issues suggest caution in production use.  
- **Optimization**: For CUDA deployments, prioritize models using fused KV dequant (`f8_e4m3`, `q4_0`, `q8_0`) to reduce latency by up to ~30% in speculative decoding scenarios.  
- **Cross-Platform**: Use OpenVINO and Hexagon backends for optimized inference on Intel NPU and mobile SoCs (Android/WoS).  
- **Tooling**: Upgrade to `llama_batch_ext` immediately to avoid future API breakage — a migration guide is now live ([#32163](https://github.com/ggml-org/llama.cpp/pull/32163)).  

> ✅ **Action Item**: Review your deployment stack against recent regressions — especially if using MTP, draft decoding, or SYCL/SYCL+MoE combinations. Monitor [#31656](https://github.com/ggml-org/llama.cpp/issues/31656) and [#29419](https://github.com/ggml-org/llama.cpp/issues/29419) for urgent fixes.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-13**

---

### **1. Today's Highlights**  
A critical regression in AMD ROCm support has emerged in Ollama 0.30+, where Strix Halo systems incorrectly report only 2GB VRAM due to a firmware carve-out misinterpretation—this impacts containerized deployments and is actively being addressed. Simultaneously, the community continues to expand integrations with new desktop agents like *Bluebird Harness* and *Valo*, while developers push for better CLI control and model management via PRs such as `stop --all` and improved tool schema handling.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes were published.

---

### **3. New Model & Hardware Support**  
- **Hardware**: Active work on fixing iGPU memory allocation logic (PR #19670) to properly respect system RAM limits without capping free memory unnecessarily—critical for AMD integrated GPUs.  
- **Model Integrations**:  
  - Added **Bluebird Harness** (PR #19687) to community integrations: a local-first desktop AI app leveraging Ollama’s native API with OS accessibility.  
  - Added **Valo** (PR #19685): a cross-platform AI workspace that runs Ollama models alongside Claude Code and Codex.  
- **Tooling**: Enhanced support for non-standard tool schema keywords (PR #19686), including `default`, `minimum`, and `maximum` fields in JSON Schema, improving fidelity in agent workflows.

---

### **4. Performance & Optimization**  
- **Memory Management**: Two key PRs optimize Metal (`mlxrunner`) memory usage:  
  - PR #19677 enables reuse of saved prefixes across request slots, reducing redundant prompt processing.  
  - PR #19678 adapts saved history retention based on available memory pressure, avoiding unnecessary discards.  
- **Kernel-Level Fixes**:  
  - PR #19680 resolves context shift amplification drift in RoPE embeddings (fixes #19457), ensuring consistent attention patterns during long-context inference.  
- **Download Efficiency**: PR #19676 improves error reporting by respecting HTTP status codes from blob hosts instead of retrying on EOF—reducing false retries and improving pull reliability under proxy environments.

---

### **5. Stability & Regressions**  
- **Critical (High Severity)**:  
  - **AMD Strix Halo VRAM Detection Regression** (#16462): Ollama 0.30+ reports only 2GB VRAM despite full system memory availability in containerized deployments. A fix PR exists: [#19670](https://github.com/ollama/ollama/pull/19670) — currently open and under review.  
- **Moderate Severity**:  
  - **Cloud Model Crashes**: `minimax-m3.1-flash` crashes intermittently (Issue #19671). Root cause unclear; likely tied to backend state or tokenization.  
  - **Tool-Call Flooding**: `mimo-v2.6-pro:cloud` emits hundreds of duplicate tool calls in agentic sessions (Issue #19672), likely due to upstream model behavior or session state corruption.  
- **CLI/UX**:  
  - `/save` fails with “file does not exist” for `nemotron-3.5-lightning` despite valid manifest (Issue #17735).  
  - `ollama stop all` missing (Feature Request #6987); implemented in PR #18665 but not merged.

---

### **6. What This Means for Application Developers**  
- **Avoid Ollama 0.30+ on AMD Strix Halo in containers** until PR #19670 lands—expect severe performance degradation or out-of-memory errors.  
- **Build robust agent workflows** around tool schemas: expect richer parameter metadata now supported via PR #19686, but be cautious with `NaN`/`Infinity` values (PR #19679 fixes JSON encoding issues).  
- **Leverage new integrations** like Bluebird Harness and Valo for local-first agent experiences with minimal configuration overhead.  
- **Use `stop --all` (PR #18665)** once merged to streamline lifecycle management in CI/CD pipelines or multi-model orchestration.  
- **Monitor cloud models closely**: `mimo-v2.6-pro:cloud` and `minimax-m3.1-flash` show instability—consider fallback strategies or version pinning.  

> 🔗 [GitHub Issues & PRs Summary](https://github.com/ollama/ollama/issues)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **1. Today's Highlights**  
LiteLLM’s v1.110.0-rc.2 release introduces hardened security via cosign-signed Docker images and advances the migration to a Rust-based core for authentication and routing, significantly improving performance and maintainability. Critical fixes address budget enforcement bypasses, OpenTelemetry telemetry accuracy, and prompt caching failures in Gemini/Vertex AI — all vital for production reliability.

---

### **2. Releases & Breaking Changes**  
- **v1.110.0-rc.2**: First RC in the new Rust-core era; includes signed Docker images using [cosign](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065). Verify with:  
  ```bash
  cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.110.0-rc.2
  ```
- **v1.108.7 (LTS)**: Recommended for stable deployments. Use `ghcr.io/berriai/litellm:lts` to stay on the latest LTS patch.  
  → [GitHub Release v1.108.7](https://github.com/BerriAI/litellm/releases/tag/v1.108.7)

> ⚠️ **Migration Note**: The shift to native Rust auth/core is breaking for custom middleware relying on Python-level request handling. See PRs #51374–#51531 for full stack changes.

---

### **3. New Model & Hardware Support**  
- **New Models Added**:  
  - `fal_ai/google/gemini-omni-flash/v1.2/upscale` (video processing, priced per second) – PR [#51500](https://github.com/BerriAI/litellm/pull/51500)  
  - `together_ai/thinkingmachines/Inkling-2-Small` – PR [#51501](https://github.com/BerriAI/litellm/pull/51501)  
- **Hardware/Backend**: No new hardware support announced. Focus remains on optimizing existing GPU/CPU inference paths through Rust-native routing and cache layers.

---

### **4. Performance & Optimization**  
- **Routing & Auth Core**: Full transition to Rust-based auth and router logic underway. Key optimizations include:  
  - Eliminating redundant Python auth layers: PR [#51374](https://github.com/BerriAI/litellm/pull/51374)  
  - Moving route matching, key validation, and session pin storage into native Rust: PRs [#51531](https://github.com/BerriAI/litellm/pull/51531), [#50870](https://github.com/BerriAI/litellm/pull/50870)  
- **Memory & Cache**: In-memory cache now rebuilds correctly on expiry: PR [#51388](https://github.com/BerriAI/litellm/pull/51388)  
- **Redis Efficiency**: Redis key construction moved out of core: PR [#50356](https://github.com/BerriAI/litellm/pull/50356); reduces latency and improves scalability.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| 🔴 High | [Bug #50065](https://github.com/BerriAI/litellm/issues/50065): MCP `tools/list` hangs on legacy clients | ~18–50s delay for older SDKs (e.g., Open WebUI) | Open |
| 🔴 High | [Bug #48398](https://github.com/BerriAI/litellm/issues/48398): Provider-reported cost trusted as USD → 1M× overbilling | Financial risk | Open |
| 🟡 Medium | [Bug #51456](https://github.com/BerriAI/litellm/issues/51456): Bedrock Llama streaming drops provider usage & undercounts tokens | Inaccurate billing, poor observability | Open |
| 🟡 Medium | [Bug #42104](https://github.com/BerriAI/litellm/issues/42104): Mid-conversation `system` messages break Gemini/Vertex prompt caching | Reduced efficiency | Open |
| 🟢 Low | [Bug #51396](https://github.com/BerriAI/litellm/issues/51396): Invalid `fallbacks` type crashes router core (HTTP 500) | Routing failure | Fixed in PR [#51396](https://github.com/BerriAI/litellm/pull/51396) |

---

### **6. What This Means for Application Developers**  
- **Upgrade to v1.108.7 (LTS) or v1.110.0-rc.2** for stability and security. Avoid rolling non-LTS versions until RC stabilizes.
- **Expect fewer Python bottlenecks** as the proxy shifts to Rust for auth, routing, and cache management — expect lower latency and higher concurrency.
- **Audit your tool schemas and model routing logic**, especially if using `anthropic/`, `vertex_ai/`, or `gemini-*` models. Bugs like missing `function.strict` or broken prompt caching can silently degrade performance.
- **Monitor cost logging rigorously**: A known bug (#48398) allows provider-reported costs to be unvalidated — implement manual checks until patched.
- **Use `ghcr.io/berriai/litellm:lts`** to avoid unexpected breaks during upgrades.

👉 *Next steps*: Review [Rust migration docs](https://github.com/BerriAI/litellm/pull/51374) and test `lts` image with your agent pipelines before upgrading.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-13**

---

### **1. Today's Highlights**  
The Unsloth team has made significant progress in refining Studio’s model runtime and UI experience, with key PRs enabling finer control over quantization precision (PR #17641), improving memory efficiency via lazy tensor mode handling (PR #17607), and fixing long-running audio transcription issues by properly budgeting `max_tokens` (PR #17599, #17603). New support for Fedora RPM packaging (PR #17611) and nested project folders (PR #17612) enhances deployment flexibility and organizational workflows.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, several breaking changes are imminent:  
- **`loraplus_lr_ratio` will now conflict with `q_galore_config`**, raising a clear error if both are used together (PR #17604). This prevents silent misconfiguration during training.  
- **Lazy tensor mode (`--lazy-mode on-direct`) is now correctly recognized across Studio’s memory accounting**, preventing excessive RAM usage when explicitly disabling mmap (PR #17607).

> 🔗 [PR #17604](https://github.com/unslothai/unsloth/pull/17604) | [PR #17607](https://github.com/unslothai/unsloth/pull/17607)

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-Flash-Next & DeepSeek-V4.1 GGUFs**: Users can now select Engram table precision directly in Studio (PR #17641), removing the need for manual file replacement.  
- **ROCm 7.14 / MI300X (gfx942)**: A critical stride assertion fix was merged to prevent MATH fallbacks in `_scaled_dot_product_flash_attention_backward` (Issue #17548).  
- **AMD NPU Models**: Now display under their Hugging Face repo name (e.g., `Qwen3.6-35B-A3B-NPU2`) instead of opaque Lemonade IDs (PR #17610).  
- **Fedora RPM Bundles**: Added support for Linux desktop deployment via native `.rpm` packages (PR #17611).  

> 🔗 [PR #17641](https://github.com/unslothai/unsloth/pull/17641) | [PR #17610](https://github.com/unslothai/unsloth/pull/17610) | [PR #17611](https://github.com/unslothai/unsloth/pull/17611)

---

### **4. Performance & Optimization**  
- **FLUX.3 klein**: Successfully loads on 12 GB Colab T4 VMs by reading bf16 weights as stored float16 on host (PR #17642), avoiding SIGKILL due to memory pressure.  
- **MiniMax-H3/H3-Image VAE decode**: Tiled decoding with batched tiles, CUDA graphs, and fp16 linears reduces decode time from **2.82s to 1.43s at 2048px** (PR #17595).  
- **H3-Image fused kernels**: Bit-exact `q/k RMSNorm + RoPE` fusion enabled across all tiers, ensuring consistency without drift (PR #17593).  
- **Qwen3.8-Flash-Next UD 3.1**: Draft acceptance drops (~74% → 56–66%) with current MTP heads; users report need for 3.1-matched draft heads (Issue #17402).  

> 🔗 [PR #17642](https://github.com/unslothai/unsloth/pull/17642) | [PR #17595](https://github.com/unslothai/unsloth/pull/17595) | [PR #17593](https://github.com/unslothai/unsloth/pull/17593)

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |  
|------|----------|--------|--------|  
| `--load-mode none` ignored in v0.1.917 (forces mmap) | Critical | Open | [PR #17607](https://github.com/unslothai/unsloth/pull/17607) |  
| DiffusionGemma ignores context/parallelism settings in Studio | High | Closed | [PR #17558](https://github.com/unslothai/unsloth/pull/17558) |  
| MOSS-Transcribe-Diarize fails on long audio (no `max_tokens`) | High | Closed | [PR #17599](https://github.com/unslothai/unsloth/pull/17599) |  
| Qwen3.8-Flash-Next UD 3.1 draft acceptance drop | Medium | Open | — |  
| Audio.cpp update fails in Docker with "invalid cross-device link" | Medium | Open | [PR #17638](https://github.com/unslothai/unsloth/pull/17638) |  

> ⚠️ **Critical regression in v0.1.917**: Forced mmap despite `--load-mode none`. Fixed in PR #17607.

---

### **6. What This Means for Application Developers**  
- **Use `--lazy-mode on-direct`** to reduce RAM pressure on low-memory systems—ensure your environment respects this flag.  
- **Avoid combining `loraplus_lr_ratio` with `q_galore_config`**—this configuration will soon be blocked with a clear error.  
- **For long-context audio tasks**, rely on the updated `max_tokens` budgeting in MOSS-Transcribe-Diarize (now fixed).  
- **When deploying on AMD ROCm or Fedoras**, use the new RPM bundles and verify NPU model names match HF repos.  
- **For inference-heavy workloads**, expect improved performance with tiled VAE decoding and fused attention kernels—especially impactful for image generation pipelines.  

> 📌 **Actionable**: Update to latest Studio build and test `--lazy-mode` behavior if running large models on constrained hardware.

---  
*Digest generated from GitHub data: [unslothai/unsloth](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*