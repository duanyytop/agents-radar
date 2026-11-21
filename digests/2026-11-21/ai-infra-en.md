# AI Infrastructure Digest 2026-11-21

> Generated: 2026-11-21 03:25 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-21**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is rapidly maturing into a multi-layered, hardware-aware stack optimized for agentic workloads, real-time interactivity, and low-resource deployment. Key trends include aggressive kernel-level optimizations for next-gen GPUs (Blackwell, RDNA4), proliferation of speculative decoding and multimodal support, and growing focus on security, observability, and cost control in production gateways. Projects are increasingly diverging by specialization: high-throughput engines target performance at scale, local runtimes prioritize memory efficiency, and gateways emphasize developer experience and integration.

---

### **2. Activity Comparison**

| Project       | Issues (Open) | PRs (Recent 24h) | Release Status         |
|---------------|----------------|------------------|------------------------|
| **vLLM**      | 127            | 18               | Stable (`v0.30.0+`); no breaking changes |
| **SGLang**    | 149            | 15               | No new release; critical SSRF fix merged |
| **llama.cpp** | 172            | 22               | `b12600` released with deprecation |
| **Ollama**    | 138            | 14               | No release; preview channel in PR |
| **LiteLLM**   | 114            | 19               | `v1.111.0-rc.3`, `v1.108.14-LTS` released |
| **Unsloth**   | 102            | 12               | `v0.1.922-beta` released; stability concerns |

> ✅ *Observation:* **llama.cpp** and **Unsloth** show the highest development velocity, while **LiteLLM** leads in structured release cadence with security verification requirements.

---

### **3. Model Support Race**

| New Model / Architecture     | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 Mini** (Looped)   | ✅   | ❌     | ✅        | ✅     | ❌      | ✅      |
| **MiniCPM5-15B-A2.5B**        | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| **Kimi-K3 / DeepSeek-V4.1**   | ✅   | ✅     | ❌        | ❌     | ❌      | ❌      |
| **FLUX.3 / QVG Diffusion**    | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |
| **Gemini Live Avatar**        | ❌   | ❌     | ❌        | ❌     | ✅      | ❌      |
| **GPT-Live over WebRTC**      | ❌   | ❌     | ❌        | ❌     | ✅      | ❌      |

> 🏆 **Winner**: **Unsloth** and **vLLM** lead in early adoption of **Inkling 2 Mini**, with **Unsloth** offering optimized low-memory deployment (16GB RAM). **LiteLLM** dominates in **real-time avatar & streaming** capabilities.

---

### **4. Performance Frontier**

| Focus Area                 | Leading Projects                          | Key Innovations |
|----------------------------|-------------------------------------------|-----------------|
| **KV Cache Optimization**  | vLLM, Unsloth                             | 2-bit Kitty KV quantization (`--kv-cache-dtype kitty`), per-tensor view derivation |
| **Batching & Throughput**  | vLLM, SGLang                              | MTP decode kernels, FlashInfer MoE backend (vs Triton), prefill-decode disaggregation |
| **Quantization**           | vLLM, llama.cpp                           | DSpark + BF16, `q8_0 K / q8_0 V` FlashAttention, SYCL vectorized RMS-NORM |
| **Kernel-Level Speed**     | vLLM, SGLang, llama.cpp                   | Dedicated CUDA MTP decode kernels, coopmat on Intel Alchemist, `chunk_scan_fwd_kernel` precompile |
| **Distributed Serving**    | SGLang, LiteLLM                           | HiCache unified memory (GB10), hybrid cache management, trace mirroring |

> 🔥 **Trend**: The frontier is shifting toward **kernel-specific tuning** (e.g., Mamba2 Gated DeltaNet, MoE) and **memory layout reorganization** to reduce redundant computation and GC overhead.

---

### **5. Layer Positioning**

| Project       | Layer Position                     | Core Differentiator |
|---------------|------------------------------------|---------------------|
| **vLLM**      | High-performance inference engine  | GPU-native, kernel-optimized, scalable for cloud-scale LLM serving |
| **SGLang**    | Agentic inference runtime          | Specialized for agent workflows: prefill-decode disaggregation, tool calling, HiCache |
| **llama.cpp** | Local inference runtime            | Cross-platform, CPU/GPU/NPU support, lightweight, GGUF-first design |
| **Ollama**    | Developer-friendly gateway / runner| Unified CLI, MLX/macOS focus, easy model management |
| **LiteLLM**   | Universal API gateway              | Multi-provider abstraction, real-time streaming, cost tracing, security hardening |
| **Unsloth**   | Optimized local runtime + UX       | Fast image/video generation, MCP tooling fixes, Apple Silicon support |

> 💡 **Positioning Insight**:  
> - **vLLM/SGLang**: Cloud-scale, high-throughput inference.  
> - **llama.cpp/Ollama/Unsloth**: Edge/local deployment, memory efficiency.  
> - **LiteLLM**: Integration layer — "universal adapter" for multi-provider workflows.

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-11-21 activity):**
1. **Agent-Centric Optimization**: Projects are prioritizing **tool call reliability**, **stateful reasoning**, and **long-context stability** (e.g., Unsloth’s MCP fix, Ollama’s Glimmer parser).
2. **Security as Priority**: Critical SSRF vulnerabilities (SGLang), unverified releases (LiteLLM), and OAuth misconfigurations highlight rising security scrutiny.
3. **Hardware Diversity Push**: AMD ROCm, Intel XPU, MLU, Apple Silicon, and NPU support are now table stakes — but **ROCm and AMD NPU remain unstable**.
4. **Real-Time Interactivity**: Gemini Live Avatars, GPT-Live WebRTC, and structured output rendering signal demand for **low-latency, interactive agents**.
5. **Cost & Budget Control**: LiteLLM’s budget overruns and cost accounting issues reveal growing need for **granular spend monitoring** in production.

#### **What Developers Should Watch:**
- ✅ **Adopt `--kv-cache-dtype kitty` (vLLM)** for large-context inference if memory is constrained.
- ✅ **Use `OLLAMA_CHANNEL=preview`** for access to cutting-edge features (MLX, Glimmer) — but test rigorously.
- ✅ **Verify all LiteLLM releases with `cosign`** — avoid untrusted builds.
- ⚠️ **Avoid `--enforce-eager` on Blackwell (SM120)** until #56892 is fixed (vLLM).
- 📌 **Monitor ROCm/gfx1200 stability** across vLLM, SGLang, and Unsloth — not production-ready yet.

---

> **Final Recommendation**: For **high-throughput, cloud-scale inference**, use **vLLM**. For **agent workflows with tools and state**, prefer **SGLang** or **Unsloth**. For **local, cross-platform deployment**, **llama.cpp** or **Ollama** offer best balance. For **multi-provider orchestration**, **LiteLLM** remains the most mature gateway — but enforce security hygiene.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-11-21**

#### **1. Today’s Highlights**  
The vLLM project continues to advance high-performance inference for next-gen LLMs, with critical fixes for speculative decoding stability on Blackwell GPUs and new optimizations for AMD ROCm (gfx942/gfx950) hardware. Key PRs include a 2-bit *Kitty KV quantization* feature, kernel-level improvements for Mamba2 Gated DeltaNet decoding, and enhanced support for multimodal and RL-reload workflows.

#### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed. Users should continue using stable branches (`v0.30.0` or later) for production deployments.

#### **3. New Model & Hardware Support**  
- **New Models**:  
  - Added support for **Inkling 2 Mini** (`thinkingmachines/Inkling-2-Mini`) via [PR #69028](https://github.com/vllm-project/vllm/pull/69028), enabling BF16 serving and DSpark speculative decoding.  
  - Added **MiniCPM5-15B-A2.5B** with INT4 W4A16 compression, BF16 inference, and native DSpark support ([PR #68748](https://github.com/vllm-project/vllm/pull/68748)).  
- **Hardware & Backends**:  
  - **ROCm (AMD)**: Ongoing performance tracking and optimization for `gfx942` (MI355X) and `gfx950` (MI355X) targeting Qwen3.8-Flash-Next and Muse Spark Open models ([Issue #59575](https://github.com/vllm-project/vllm/issues/59575), [Issue #64018](https://github.com/vllm-project/vllm/issues/64018)).  
  - **Intel GPU (XPU)**: Added support for MXFP4 MoE LoRA via XpuFusedMoe hooks ([PR #62631](https://github.com/vllm-project/vllm/pull/62631)), with block-size enforcement fixed ([PR #68108](https://github.com/vllm-project/vllm/pull/68108)).  
- **Quantization**:  
  - Introducing **2-bit Kitty KV quantization** with dynamic precision boosting via `--kv-cache-dtype kitty` ([PR #68945](https://github.com/vllm-project/vllm/pull/68945)).

#### **4. Performance & Optimization**  
- **Kernel-Level Improvements**:  
  - Faster fused CUDA MTP decode for 16-bit recurrent states (BF16/FP16) via dedicated kernel ([PR #69065](https://github.com/vllm-project/vllm/pull/69065)).  
  - Optimized ReplaySSM caching for Gated DeltaNet standard decode, reducing redundant computation ([PR #62004](https://github.com/vllm-project/vllm/pull/62004)).  
- **Memory & Throughput**:  
  - Cache K/V view derivation per tensor to avoid repeated re-computation in eager attention calls ([PR #66963](https://github.com/vllm-project/vllm/pull/66963); addresses #64572).  
  - Multimodal engine now avoids GC pauses by keeping receiver cache items out of Python’s cyclic GC ([PR #68826](https://github.com/vllm-project/vllm/pull/68826)).  
- **Benchmarking & Verification**:  
  - RFC for Bring-Your-Own-GPU reproducible evals to improve PR review confidence ([Issue #61698](https://github.com/vllm-project/vllm/issues/61698)).  

#### **5. Stability & Regressions**  
- **Critical Crashes / Bugs**:  
  - **MTP Speculative Decoding Crash** on long sequences with FP8-quantized Qwen3.6-27B (v0.19.1): illegal memory access triggers segfaults ([Issue #40756](https://github.com/vllm-project/vllm/issues/40756), 46 comments, fix pending).  
  - **DeepSeek-V4.1 Flash on SM120 (Blackwell)**: Extremely low decode throughput with `--enforce-eager`, CUDA graphs unusable — urgent fix needed ([Issue #56892](https://github.com/vllm-project/vllm/issues/56892), 35 comments).  
  - **CUDA Graph Corruption** at batch=1 for Kimi-K3 across all modes ([Issue #52531](https://github.com/vllm-project/vllm/issues/52531), 8 comments).  
- **Other Notable Issues**:  
  - Qwen3 parser misinterprets model quotes as tool calls ([Issue #58147](https://github.com/vllm-project/vllm/issues/58147)).  
  - Qwen3.6 MoE CT INT4 checkpoint fails due to mismatched `shared_expert_gate` vs `weight` naming ([Issue #68336](https://github.com/vllm-project/vllm/issues/68336)).  

#### **6. What This Means for Application Developers**  
- **Use Case Guidance**:  
  - Avoid `--enforce-eager` on Blackwell GPUs (SM120) until #56892 is resolved — use CUDA graphs or `--no-fast-prompt` instead.  
  - For high-throughput speculative decoding, validate that your model + quantization combo doesn’t trigger MTP crashes (e.g., Qwen3.6-27B-FP8).  
- **Model Serving**:  
  - Consider leveraging **Kitty KV quantization** (`--kv-cache-dtype kitty`) for aggressive memory savings in large-context inference (e.g., 1M+ tokens).  
  - Use `vllm.Render` services for structured output rendering (chat, tools, reasoning) — now supports derendering completions with JSON/SSE envelopes ([Issue #67652](https://github.com/vllm-project/vllm/issues/67652)).  
- **Development Best Practices**:  
  - Monitor `envvars` usage: RFC #25700 proposes deprecating global envvars in favor of config-driven settings.  
  - Enable MyPy checks in tests (RFC #49569) to catch type errors early.  
  - Ensure embedding payloads are valid; malformed inputs now return HTTP 400 instead of leaking internal errors ([PR #69073](https://github.com/vllm-project/vllm/pull/69073)).

> ✅ **Recommendation**: For production workloads on Blackwell or AMD ROCm, test against latest `main` or `v0.31.0-dev` builds. Monitor issue trackers for regression fixes before deploying to high-scale inference pipelines.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-21**

---

### **1. Today's Highlights**  
The SGLang project continues to prioritize stability and scalability for agentic workloads, with critical fixes for SSRF vulnerabilities in multimodal endpoints and ongoing efforts to resolve flaky CI infrastructure failures. Key performance improvements are emerging in MoE and Mamba kernels on Hopper and ROCm platforms, while the team advances prefill-decode disaggregation and hybrid cache management for high-throughput inference.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes reported in the past 24 hours.*

---

### **3. New Model & Hardware Support**  
- **AMD ROCm Support**: Expanded CI coverage with 73 additional CUDA-based tests now running on AMD (PR #51523), improving parity between NVIDIA and ROCm pipelines.  
- **MLU Backend**: Added GQA and MLA attention support for MLU via shared interfaces (PR #49214).  
- **Multi-modal Models**: Enhanced diffusion pipeline support for FLUX.3 base/distilled models and QVG quantization under Triton 3.9 (PR #51982).  
- **HiCache Unified Memory**: RFC introduced for GB10/DGX Spark systems where GPU/CPU share memory pools (Issue #51733).

---

### **4. Performance & Optimization**  
- **Mamba2 Kernel Compilation**: First large prefill bursts stall due to `chunk_scan_fwd_kernel` compilation time (~1.45s per rank); proposed fix: pre-compile during engine init (Issue #51628).  
- **Triton vs FlashInfer MoE**: On H100 at TP8, Triton MoE backend is **5–8× slower** than `flashinfer_cutlass` for Nemotron 3 Nano FP8 (step time: 3.1 → 19.8 ms @ batch 16) (Issue #51626).  
- **Kimi K3 Shared Experts**: Optimized stream ordering to reduce GPU idle time during shared-expert passes (PR #51900).  
- **DeepSeek-V4 Identity Prefill**: Reduced launch overhead by batching identity prefill writes (PR #48866).  
- **LTX-2.3 Guidance Passes**: Reused cond pass prefix blocks in STG pass, reducing redundant computation (PR #51999).

---

### **5. Stability & Regressions**  
- **Critical SSRF Risk**: Unvalidated URLs in `/v1/videos` endpoint allow remote code execution via malicious media paths (Issue #51701). *Fix merged:* PR #51738.  
- **CUDA Coredumps**: Persistent coredump tracking issue (#26340) with **387 comments**, indicating systemic instability in nightly test runs.  
- **HiCache L3 Prefetch Failure**: Under CP with `fast_file`, prefetch never completes; storage_hit remains 0 despite accumulating writes (Issue #51608).  
- **FlashInfer on Blackwell**: Backend not supported on B200 GPUs (Issue #35080).  
- **H200/MI300 Parity**: Missing DeepSeek-v4 Pro support on MI300/MI325 (Issue #27890).  

> ⚠️ *High-severity issues include unpatched SSRF, persistent coredumps, and backend compatibility gaps on next-gen hardware.*

---

### **6. What This Means for Application Developers**  
- **Security**: Avoid using raw user-provided URLs in `/v1/videos` until you’ve upgraded to a version including PR #51738.  
- **Performance**: For Mamba and MoE models, prefer `--moe-runner-backend flashinfer_cutlass` over Triton unless you’re optimizing for specific custom kernels.  
- **Scalability**: Leverage prefill-decode disaggregation (Q4 roadmap) for large-scale agent workloads, but monitor for idle-burst latency spikes (Issue #50920).  
- **Hardware Choice**: If targeting AMD ROCm or MLU, ensure your model config aligns with latest backends (PRs #49214, #51523).  
- **CI Reliability**: Be aware of flaky tests (Issue #42752) and intermittent coredumps (Issue #26340) when integrating into automated workflows.

🔗 [View full GitHub activity](https://github.com/sgl-project/sglang)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-21**

---

### **1. Today’s Highlights**  
The latest release (`b12600`) adds full support for **Inkling 2 Mini**, a looped architecture model, via PRs #32694 and #32695, marking a significant step in handling complex, iterative model designs. Concurrently, performance improvements are advancing across backends: **Vulkan now enables cooperative matrices (coopmat) on Intel Alchemist GPUs**, while **SYCL gains fused RMS normalization with vectorization**, boosting inference throughput by up to +3.4% on Qwen3.8-27B.

---

### **2. Releases & Breaking Changes**  
- `b12600` introduces major internal changes:  
  - **Deprecation of `ggml_ftype`** in favor of a new `model_type` field (#32647).  
  - Adoption of updated naming conventions from PR #32588 for consistency in metadata handling.  
  - *Migration Note:* Existing GGUF files using deprecated `ftype` fields may require re-conversion or manual patching during load.  
  - [GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/b12600)

---

### **3. New Model & Hardware Support**  
- ✅ **Inkling 2 Mini** fully supported via PR #32694 (looped architecture), including DSpark speculator support in #32218.  
- ✅ **Intel Alchemist (Xe1) dGPU** now supports **KHR cooperative matrices (coopmat)** on Vulkan via PR #32706 — previously disabled due to performance issues.  
- ✅ **RDNA1 HIP backend** now includes explicit MMVQ parameter tables (1 warp per block for ncols=1), improving compatibility with older AMD cards (#32389).  
- ✅ **Apple Metal**: Fused MUL/ADD operations now accept norm chains in either operand (#32300).

---

### **4. Performance & Optimization**  
- **SYCL**: Fused ADD + RMS_NORM + MUL vectorization improves Qwen3.8-27B Q3_K_P throughput by **+3.4%** at `tg128` (13.53 t/s vs 13.09 t/s) (#31753).  
- **CUDA**: Native `q8_0 KV` and `f16 K / q8_0 V` support in FlashAttention tile kernel reduces fallback to less efficient paths (#30792).  
- **Vulkan**: coopmat enabled on Intel Alchemist GPUs, resolving prior performance bottlenecks from register spills and SLM staging (#32706).  
- **Gemma4**: Optimized prompt processing for multi-sequence queries via PR #32342.

---

### **5. Stability & Regressions**  
- ⚠️ **Critical Crash**: `Inkling-2-Mini-GGUF:IQ4_NL` experiences **abysmal prefill performance and crashes on RTX 5090** (#32707). No fix yet; likely tied to looped graph execution or memory layout.  
- ⚠️ **SIGSEGV on OpenVINO**: Fails on Qwen3.5 models due to **mask shape mismatch (CPU)** and **SIGSEGV (GPU)** — severe regression reported in #32291.  
- ⚠️ **ROCm/RDNA4 FlashAttention**: ~4× lower efficiency on head size 512 (Gemma 4 global layers) vs head size 256 (#30838).  
- ⚠️ **Power10**: `llamafile sgemm (MMA)` corrupts output for Flint MoE when `GGML_LLAMAFILE=ON` (#31680).  
- ✅ **Fixes in Progress**:  
  - PR #32704 addresses scale tensor misapplication in Inkling 2 Loop arch.  
  - PR #32697 fixes audio tail issue in Qwen3A ASR.  

---

### **6. What This Means for Application Developers**  
- **Model developers** should update conversion pipelines to handle the new `model_type` field and avoid legacy `ggml_ftype`.  
- **Agent builders** leveraging speculative decoding (e.g., MTP/DSpark) must validate Inkling 2 Mini behavior — early reports show instability under heavy loads.  
- **Deployment engineers** using Intel Arc Alchemist GPUs should enable `coopmat` via Vulkan for improved throughput.  
- **Performance-sensitive apps** can expect immediate gains from SYCL vectorization and CUDA FlashAttention optimizations.  
- **Avoid `--reasoning-preserve` default** if using templates that drop past reasoning (e.g., Nemotron 3.5 Bolt); it overrides model defaults (#32688).  

> 🔗 Full context: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-21**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to mature with critical fixes to VRAM accounting, GPU resource management, and streaming reliability—especially for MLX and native macOS backends. New PRs are stabilizing model runners, improving tool call parsing (notably Glimmer/ATEM), and enhancing error propagation in OpenAI-compatible endpoints. A growing number of issues highlight persistent challenges around GPU utilization on M4 Pro systems and Alpine Linux compatibility.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
However, **PR #19801** introduces support for a `preview` channel via `OLLAMA_CHANNEL=preview`, allowing users to opt into early builds. This is not yet released but will be available in an upcoming RC. See: [PR #19801](https://github.com/ollama/ollama/pull/19801).

---

### **3. New Model & Hardware Support**  
- **Inkling 2 Mini**: Added via PR #19799 ([#19799](https://github.com/ollama/ollama/pull/19799)), expanding MLX runner support for smaller, efficient models.
- **Pi Integration**: PR #19798 enables direct `ollama launch pi` with automatic plugin checks and versioning, streamlining local deployment workflows. See: [PR #19798](https://github.com/ollama/ollama/pull/19798).
- **Control Plane Cloud Template**: Added to documentation; supports Ollama 0.32.15 on NVIDIA GPUs with persistent volumes. See: [PR #19793](https://github.com/ollama/ollama/pull/19793).
- **Intel Mac Support (macOS 12/13)**: Community build available for v0.40.11 (Issue #19308). Not officially supported yet but shows demand for legacy Apple Silicon compatibility.

---

### **4. Performance & Optimization**  
- **VRAM Accounting Fix**: PR #19632 addresses multiple root causes of incorrect VRAM tracking, preventing premature model eviction and enabling proper GPU splitting across devices. Fixes: [#19463](https://github.com/ollama/ollama/issues/19463), [#18679](https://github.com/ollama/ollama/issues/18679), [#18349](https://github.com/ollama/ollama/issues/18349), [#16599](https://github.com/ollama/ollama/issues/16599).
- **MLX Runner Parallelism**: PR #19785 auto-scales default parallelism (1–8 slots) based on available memory and context size, improving throughput without manual tuning. See: [PR #19785](https://github.com/ollama/ollama/pull/19785).
- **GPU Memory Reclamation**: PR #19745 adds async checkpointing of inactive conversations, reducing cold-start latency after memory pressure events. See: [PR #19745](https://github.com/ollama/ollama/pull/19745).

---

### **5. Stability & Regressions**  
- **Critical**: **MLX runner not using full GPU** (M4 Pro, 48GB RAM) — Issue #18754 reports only partial GPU utilization despite ample VRAM. No fix PR yet.  
- **High Severity**: **Glimmer parser raises mid-generation**, causing silent stream termination without `finish_reason` or `[DONE]`. Fixed by PR #19797 ([#19797](https://github.com/ollama/ollama/pull/19797)) and PR #19795 ([#19795](https://github.com/ollama/ollama/pull/19795)).
- **Regression**: **Cloud `beam` model returns empty tool_calls** since Nov 20. Issue #19804 indicates a possible regression tied to recent changes. No fix yet.
- **Minor**: **Alpine Linux fails due to `fcntl64` symbol not found** — Issue #19800 highlights missing dynamic linking support. PR #19787 proposes SHA256 verification for Linux installers, improving security but not resolving runtime errors.

---

### **6. What This Means for Application Developers**  
- **Streaming Reliability**: Use `fix(openai): emit SSE error frame and [DONE] on mid-stream errors` (PR #19795) to avoid silent failures in agent workflows. Ensure clients handle `error` frames and `[DONE]` markers explicitly.
- **Tool Call Robustness**: Be cautious with `glimmer-glimmer` and `inkling-2-mini` models—parser crashes can terminate streams unexpectedly. Validate tool output schemas and implement retry logic.
- **Memory Management**: With improved VRAM accounting (PR #19632), developers can now better predict load behavior. Use `num_ctx`, quantization, and `keep_alive` settings with confidence.
- **Deployment Flexibility**: Leverage `OLLAMA_CHANNEL=preview` for early access to new features. For production, monitor cloud regressions like `beam` tool-call issues (#19804).
- **Security & Integrity**: The proposed installer SHA256 check (PR #19787) underscores the need to verify downloads in CI/CD pipelines until implemented.

> *Recommendation: Upgrade to latest preview builds if testing MLX, Glimmer, or tooling-heavy flows. Monitor `ollama serve` logs closely for `parse` errors during long-running inference sessions.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-21**

#### **1. Today's Highlights**  
The LiteLLM project continues rapid evolution with a focus on **real-time AI capabilities**, **security hardening**, and **observability enhancements**. Key developments include support for **Gemini Live Avatar** in Vertex AI, improvements to **WebRTC-based GPT-Live streaming**, and critical fixes to **cost accounting**, **OAuth pass-through**, and **tracing integrity**. A major refactor of the messages pipeline improves consistency across providers.

#### **2. Releases & Breaking Changes**  
- **v1.111.0-rc.3**, **v1.110.2**, **v1.109.3**, and **v1.108.14 (LTS)** were released today.  
- **Important**: The `lts` tag now points to `v1.108.14`. Teams relying on long-term stability should update accordingly.  
- **Security Verification Required**: All releases must be verified using `cosign` with the GitHub Actions OIDC issuer and certificate identity:  
  ```bash
  cosign verify \
    --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com \
    ghcr.io/berriai/litellm:v1.111.0-rc.3
  ```
  [GitHub Release Verification Guide](https://github.com/BerriAI/litellm#verify-releases)

#### **3. New Model & Hardware Support**  
- ✅ **Gemini Live Avatar (avatar_config)** now supported via Vertex AI integration ([PR #53270](https://github.com/BerriAI/litellm/pull/53270)). Enables real-time lip-synced video avatars in live sessions.  
- ✅ **GPT-Live over WebRTC with sideband attach** introduced ([PR #53282](https://github.com/BerriAI/litellm/pull/53282)), enabling accurate billing and low-latency audio/video interaction.  
- ✅ **OpenRouter reasoning_details-only chunks** are now preserved during streaming ([Issue #48401](https://github.com/BerriAI/litellm/issues/48401))—critical for Anthropic model tooling.

#### **4. Performance & Optimization**  
- 🔧 **Refactored Messages Pipeline**: A series of stacked PRs ([#53199](https://github.com/BerriAI/litellm/pull/53199), [#53203](https://github.com/BerriAI/litellm/pull/53203), [#53204](https://github.com/BerriAI/litellm/pull/53204)) standardize message configuration layouts across providers, improving maintainability and reducing drift.  
- ⚡ **Faster Rust Bridge HTTPS Clients**: OpenSSL is now used in FIPS builds, replacing ring + rustls, improving compliance and performance under constrained environments ([PR #53104](https://github.com/BerriAI/litellm/pull/53104)).  
- 📊 **Improved Tracing Accuracy**: Gateway traces now mirror agent-native trace structure ([PR #53285](https://github.com/BerriAI/litellm/pull/53285)), enhancing debugging in Lens.

#### **5. Stability & Regressions**  
- **Critical**: `/v1/responses` budget reservation incorrectly uses `max_tokens` instead of `max_output_tokens`, leading to **budget overruns** ([Issue #51445](https://github.com/BerriAI/litellm/issues/51445)) — *fix pending*.  
- **High Severity**: `litellm.num_retries` permanently set to `None` after any exception, disabling retries globally ([Issue #33272](https://github.com/BerriAI/litellm/issues/33272)) — *fix pending*.  
- **High Severity**: POST/OAuth GET requests with `client_id` in query string rejected due to upstream auth misconfiguration ([Issue #53185](https://github.com/BerriAI/litellm/issues/53185)) — *fix in progress*.  
- **Medium**: Cost calculation fails for ElevenLabs models ([Issue #18058](https://github.com/BerriAI/litellm/issues/18058)) — *fix merged in v1.110.2*.  
- **Low**: Admin UI JWT cookie not marked `HttpOnly` — security risk ([Issue #36997](https://github.com/BerriAI/litellm/issues/36997)) — *fixed*.

#### **6. What This Means for Application Developers**  
- **Real-Time Agents**: Use `gemini/live` with `avatar_config` and `gpt-live/web-rtc` for rich, interactive avatars and speech — ideal for customer-facing agents.  
- **Budget Safety**: Avoid `max_tokens` in `responses` calls; use `max_output_tokens` explicitly to prevent overspending. Monitor spend logs carefully when `store_prompts_in_spend_logs: true`.  
- **Security**: Never rely on unverified Docker images. Always validate releases with `cosign`. Be cautious with OAuth client IDs in query strings — ensure your proxy config permits them.  
- **Observability**: Leverage new Lens tracing features (`#53285`) to debug agent behavior end-to-end. Ensure OpenTelemetry is configured consistently to avoid cache misses ([Issue #49311](https://github.com/BerriAI/litellm/issues/49311)).  
- **Future-Proofing**: Prepare for upcoming `team_budget_schedules` ([Issue #52251](https://github.com/BerriAI/litellm/issues/52251)) — expect granular, time-based spending controls soon.

---  
*Digest generated from GitHub data: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-21**

---

### **1. Today's Highlights**  
Unsloth releases **v0.1.922-beta**, introducing *Inkling 2 Mini* — the strongest 26.4B model running efficiently on 16GB RAM — with significant improvements in image generation speed and reduced GPU memory usage. Critical fixes include elimination of full prompt reprocessing in MCP-enabled chats and Apple Silicon video restyling support, enhancing agent workflows and local inference usability.

---

### **2. Releases & Breaking Changes**  
- **v0.1.922-beta** (GitHub: [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.922-beta))  
  - Introduces `Inkling 2 Mini` (UD_Q4_K_M) as a new default high-performance option for 16GB RAM systems.  
  - Fixes repeated full prompt processing in MCP tool chains ([#17015](https://github.com/unslothai/unsloth/issues/17015), now closed).  
  - Enables video restyling on Macs with Apple Silicon via Metal backend.  

> ⚠️ **Migration Note**: Users relying on Qwen hybrid models with MCP tools should update to avoid redundant context reprocessing.

---

### **3. New Model & Hardware Support**  
- ✅ **New Model**:  
  - *Inkling 2 Mini* (26.4B) — optimized for low-memory inference (16GB RAM), supports GGUF quantization (Q4_K_M).  
  - Requested support for *DaisyRose-27B* ([#18465](https://github.com/unslothai/unsloth/issues/18465)) — not yet implemented but under consideration.

- ✅ **Hardware & Backend**:  
  - Enhanced AMD Strix Halo NPU/GPU detection logic ([PR #17538](https://github.com/unslothai/unsloth/pull/17538)) — auto-detects faster GPU execution path.  
  - Improved ROCm compatibility for gfx1200 (RDNA4) GPUs, though kernel crashes remain unresolved ([#18403](https://github.com/unslothai/unsloth/issues/18403)).  
  - Full BF16 support across non-CUDA devices (Intel XPU, Ascend NPU) via device-aware checks ([PR #18712](https://github.com/unslothai/unsloth/pull/18712)).

---

### **4. Performance & Optimization**  
- 🚀 **Image Generation**: Up to **40% faster** on small GPUs due to lighter kernels and improved memory layout ([v0.1.921-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.921-beta)).  
- 🔁 **MCP Tool Efficiency**: Eliminates full conversation reprocessing per message — critical for long-running agentic workflows ([#17015](https://github.com/unslothai/unsloth/issues/17015)).  
- 💾 **Memory Usage**: Reduced SSD/RAM pressure from mmap forced loading (`--load-mode none`) ([#17605](https://github.com/unslothai/unsloth/issues/17605)).  
- ⚙️ **Fine-tuning UX**: Automatic `max_seq_length` detection proposed ([#18236](https://github.com/unslothai/unsloth/issues/18236)) — removes manual token counting step.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR? |
|--------|------|--------|--------|
| Critical | Crash on model load (v0.1.920-beta) on specific hardware ([#18563](https://github.com/unslothai/unsloth/issues/18563)) | Open | ❌ No PR yet |
| High | Inkling 2 Mini fails to load on 32GB RAM laptop ([#18690](https://github.com/unslothai/unsloth/issues/18690)) | Open | ❌ Pending investigation |
| High | Dual RX 6700 XT ROCm crash ([#18622](https://github.com/unslothai/unsloth/issues/18622)) | Open | ❌ No fix |
| Medium | Managed accounts cannot load subfolder repos ([#18647](https://github.com/unslothai/unsloth/issues/18647)) | Open | ❌ Not resolved |
| Low | macOS security alert during update ([#18699](https://github.com/unslothai/unsloth/issues/18699)) | Open | ❌ False positive likely |

> ⚠️ Multiple stability issues persist around ROCm, AMD NPU, and multi-GPU configurations.

---

### **6. What This Means for Application Developers**  
- **Build efficient agents**: Leverage `Inkling 2 Mini` and fixed MCP tooling for low-latency, stateful reasoning on consumer-grade hardware (16GB RAM).  
- **Optimize fine-tuning pipelines**: Use upcoming automatic `max_seq_length` detection ([#18236](https://github.com/unslothai/unsloth/issues/18236)) to reduce pre-processing overhead.  
- **Future-proof for multimodal apps**: The addition of video restyling on Apple Silicon and planned audio preview support ([#18251](https://github.com/unslothai/unsloth/issues/18251)) enables richer agent interfaces.  
- **Avoid regressions**: Do not deploy v0.1.920-beta or earlier on ROCm/gfx1200 systems; monitor [#18403](https://github.com/unslothai/unsloth/issues/18403) for patch updates.

> 🔗 **Key Resources**:  
> - [Model Picker UI Feedback](https://github.com/unslothai/unsloth/issues/18321)  
> - [Themes Marketplace Proposal](https://github.com/unslothai/unsloth/issues/18706)  
> - [Translation Mode Enhancements](https://github.com/unslothai/unsloth/issues/18666)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*