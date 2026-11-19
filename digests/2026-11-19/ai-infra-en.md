# AI Infrastructure Digest 2026-11-19

> Generated: 2026-11-19 03:48 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-19**

---

### **1. Ecosystem Overview**

The AI infrastructure landscape in late 2026 is defined by a sharp bifurcation between **high-performance inference engines** and **developer-centric gateways**, with deep specialization emerging across hardware platforms—especially AMD ROCm. Projects like *vLLM*, *SGLang*, and *Unsloth* are aggressively optimizing for low-latency, high-throughput inference on diverse backends, while *LiteLLM* and *Ollama* focus on abstraction, usability, and agent-friendly routing. The rise of multi-modal, real-time audio, and speculative decoding signals a shift toward full-stack AI agents. Meanwhile, security hardening (e.g., Cosign signing) and observability integrations indicate production readiness maturity.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Recent Release | Status |
|---------------|-------------|----------|----------------|--------|
| **vLLM**      | 873         | 421      | None           | Active development; stable experimental features |
| **SGLang**    | 642         | 315      | None           | High instability; critical ROCm/CUDA issues |
| **llama.cpp** | 918         | 456      | None           | High bug density; performance gains but stability risks |
| **Ollama**    | 1,045       | 298      | None           | Stability-focused; major UI/memory regressions |
| **LiteLLM**   | 522         | 210      | v1.109.2       | Security-hardened release; active stability fixes |

> ✅ **Insight**: *vLLM* and *llama.cpp* lead in technical depth and innovation velocity, while *Ollama* and *SGLang* face higher instability due to complex integration challenges. *LiteLLM* stands out with a secure, verified release amid ongoing reliability work.

---

### **3. Model Support Race**

| New Model / Architecture             | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|--------------------------------------|------|--------|-----------|--------|---------|
| Qwen3.8-Flash-Next (AMD)            | ✅ (gfx942/gfx950) | ⚠️ In progress | ❌ | ❌ | ❌ |
| Muse Spark Open (PTPC-FP8)          | ✅ (ROCm/FP8) | ❌ | ❌ | ❌ | ✅ (image support) |
| DeepSeek-V4.1-Flash (ROCm)          | ✅ (DEP/EP) | ✅ (gfx950) | ❌ | ❌ | ❌ |
| Unlimited-OCR-2                     | ✅ (extensible KV disabled) | ❌ | ❌ | ❌ | ❌ |
| VoxCPM2 / Inflect v3 / Hibiki TTS    | ❌ | ❌ | ✅ (`mtmd`) | ❌ | ❌ |
| MiniMax-H3-Image / HunyuanImage 2.1 | ❌ | ❌ | ❌ | ❌ | ✅ (rendering recipes) |
| WildEdge Observability              | ❌ | ❌ | ❌ | ❌ | ✅ (via LiteLLM) |

> 🏆 **Leader**: **vLLM** leads in **new model & hardware support**, especially for **Qwen3.8, Muse Spark, and ROCm-optimized MoE models**.  
> 🔥 **Emerging Player**: **Unsloth** is accelerating in **multi-modal image generation** and **fine-tuning tooling**, with strong community-driven model support.

---

### **4. Performance Frontier**

| Optimization Focus               | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|
| **KV Cache Management**          | ✅✅ (Large-page allocator, DiffKV tiling) | ⚠️ (Sliding-window bugs) | ⚠️ (Crashes under long sessions) | ✅ (VRAM accounting fix) | ✅ (CFG replica offloading) |
| **Batching & Parallelism**       | ✅✅ (TP=1 DP-aware routing, DEP/EP) | ✅ (total_tokens load balancing) | ✅ (fused dequantization) | ✅ (whole-prompt batching) | ✅ (auto GPU placement) |
| **Quantization & Mixed Precision**| ✅✅ (MXFP4/NVFP4 on MoE, FP8 per-token scaling) | ⚠️ (FP8 issues on ROCm) | ✅ (q8_0/q4_0/f8_e4m3 fused) | ❌ | ✅ (INT8/FP8 GGUF + LoRA) |
| **Kernel-Level Optimizations**   | ✅✅ (SM80 DiffKV tiling, native 16-head GEMM) | ⚠️ (AITER MLA degradation) | ✅ (fused flash attention) | ❌ | ✅ (FLUX.1 AdaLN precompute) |
| **Distributed Serving**          | ✅✅ (Pipeline, Expert Parallelism) | ⚠️ (CI flakiness blocks testing) | ❌ | ❌ | ❌ |

> 📈 **Dominant Focus**: *vLLM* dominates in **distributed serving and kernel-level optimization**, especially for **long-context, MoE, and ROCm-native workloads**. *Unsloth* excels in **model-specific runtime efficiency** (e.g., image rendering). *llama.cpp* shows strong **low-level backend fusion** (CUDA/WebGPU).

---

### **5. Layer Positioning**

| Project       | Primary Layer               | Key Differentiator |
|---------------|-----------------------------|--------------------|
| **vLLM**      | **Inference Engine**        | Highest throughput; ROCm-first; advanced scheduling & quantization |
| **SGLang**    | **Multi-Backend Runtime**   | Aggressive ROCm support; lightweight but unstable; AITER/MLA focus |
| **llama.cpp** | **Local Runtime / Embedded**| Cross-platform; WebGPU/WASM/SYCL; real-time audio/TTS support |
| **Ollama**    | **Developer Gateway**       | User experience; local model orchestration; UI-first design |
| **LiteLLM**   | **API Gateway / Router**    | Unified API surface; fallback/retry logic; observability integration |
| **Unsloth**   | **Fine-Tuning & Agent Runtime** | Training acceleration; GUI automation; agent workflow support |

> 🧩 **Strategic Insight**:  
> - **vLLM** = Production-grade inference engine  
> - **LiteLLM** = Enterprise API gateway  
> - **Ollama** = Local dev & prototyping  
> - **Unsloth** = Agent + fine-tuning stack  
> - **llama.cpp** = Edge/embedded inference  

---

### **6. Trend Signals**

#### 🔍 **Key Industry Trends from Today’s Activity**
1. **AMD ROCm is the new battleground** — vLLM, SGLang, and Unsloth are investing heavily in gfx942/gfx950/gfx1151/gfx1200 optimizations. This signals **AMD’s growing role in LLM inference**, especially for MoE and long-context models.
2. **Real-time multimodal agents are maturing** — TTS support in *llama.cpp*, image rendering in *Unsloth*, and structured output fixes in *LiteLLM* show convergence toward **full-duplex, audio-visual agent workflows**.
3. **Security and observability are non-negotiable** — *LiteLLM*’s Cosign-signed Docker images and WildEdge tracing reflect **production-grade expectations** for trust and visibility.
4. **Stability > Speed in developer tools** — Despite performance gains, *SGLang* and *Ollama* face critical regressions (core dumps, silent truncation), indicating that **user experience and correctness now outweigh raw speed** in adoption.
5. **Rust is becoming the new standard** — vLLM’s Rust frontend roadmap and LiteLLM’s Rust-native gateway suggest **a shift toward memory-safe, high-performance systems** for inference and routing.

#### 🛠️ **What Application Developers Should Watch**
- **Adopt vLLM for high-throughput, ROCm-optimized inference** — especially for Qwen3.8/Muse Spark variants.
- **Use LiteLLM as your gateway layer** — its security, observability, and retry logic make it ideal for agent pipelines.
- **Test Ollama carefully** — avoid `qwen3.8:27b` on Apple Silicon or AMD GPUs until #19765 and #19757 are patched.
- **Monitor unsloth’s ROCm QLoRA crashes** — use `fp16` + loss scaling for training on gfx1151/gfx1200.
- **Leverage llama.cpp’s `mtmd` TTS framework** for browser-based voice agents.

> ✅ **Final Takeaway**: The ecosystem is no longer about “which engine is fastest”—it’s about **stack cohesion, reliability, and agent readiness**. Choose based on your deployment layer: *vLLM* for inference, *LiteLLM* for routing, *Unsloth* for fine-tuning, and *Ollama* for local experimentation.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-19**

---

### **1. Today's Highlights**  
The vLLM project continues to accelerate its focus on **ROCm/AMD GPU performance optimization**, with multiple high-priority issues and PRs targeting gfx942/gfx950 hardware for models like Qwen3.8-Flash-Next and Muse Spark Open. A major architectural shift is underway with the **Rust frontend’s feature parity roadmap**, now gaining traction via Issue #44280, signaling a strategic move toward language-agnostic, high-performance inference serving. Additionally, significant progress is being made in **KV cache lifecycle management** and **multi-modal support**, including fixes for OCR models and improved CPU offload metrics.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases or breaking API/config changes were published in the last 24 hours. The `VLLM_USE_RUST_FRONTEND=1` flag remains experimental but stable enough to be used in production testing environments.

---

### **3. New Model & Hardware Support**  
- **ROCm Support Expansion**: Targeting **gfx942 (MI355X)** and **gfx950 (MI355X)** for AMD-specific optimizations across:
  - `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` (#57149)
  - `amd/Qwen3.8-Flash-Next-Quark-MXFP4` (#59575)
  - `amd/Muse-Spark-Open-816B-A42B-Quark-PTPC-FP8` (#64018)
- **New Model Support**:
  - `Unlimited-OCR-2`: Disabled extensible KV cache due to strict input requirements; fix landed in PR #68254.
  - **DeepSeek-V4.1-Flash**: Specialized decode path for B300 deployments using Data Parallelism (DEP) and Expert Parallelism (EP), with PR #68366 introducing TP=1, DP-aware routing.
- **Quantization Formats**:
  - MXFP4 and NVFP4 support extended to MoE models (e.g., Muse Spark) via online quantization in PR #64552.
  - FP8 per-token scaling now available on ROCm with Triton backend (#61091).

---

### **4. Performance & Optimization**  
- **ROCm Performance Gains**: 
  - Qwen3.8-Flash-Next on gfx950: Optimizations planned via stacked PRs to improve throughput by up to **~3.2x** on long-context inputs.
  - Muse Spark Open PTPC-FP8 on gfx942: Targeted uplift via dedicated tuning (#64018).
- **Kernel & Memory Optimizations**:
  - **DiffKV prefill tiling** on SM80: BLOCK_M=128 + KV tile=64 delivers **3.0x speedup** on 200K-context chunks (#61095).
  - **Breakable CUDA graphs** enabled for MXFP4 models under `VLLM_BATCH_INVARIANT=1`, avoiding runtime tile lookup freezes (#68467).
  - **Native 16-head DeepGEMM MQA logits** used for HY4 Flash models, improving decode efficiency (#68364).
- **KV Cache & Offload**:
  - **Large-page KV allocator** proposal (#64401): One KV cache group per spec enables better memory alignment and reduces fragmentation.
  - **CPU offload metrics**: New histogram metrics (`vllm:kv_offload_cpu_chunk_idle_before_evict_seconds`) added to track eviction pressure (#67909).
- **Scheduler & Pipeline**:
  - Long prefill chunking under pipeline parallelism now enforced even for single requests (#68560), preventing stage-level starvation.

---

### **5. Stability & Regressions**  
- **Critical Bug (High Severity)**:  
  - `Dynamic Per-Tensor FP8 Amax` includes stale token IDs from CUDA graph padding → leads to incorrect outputs. Reported in #67802. *Fix pending.*
- **High-Impact Regression**:  
  - `GDN Triton/FLA prefill` produces non-deterministic results on Hopper (H20) GPUs when `BK < K` and `num_warps >= 4`. Fixed in PR #65385 (closed).  
- **Minor but Notable Issues**:
  - Silent garbage output in Confidential Computing mode (TDX/H100) due to stale UVA views — fixed in #57224 (closed).
  - Tool call truncation due to `max_output_tokens` causing malformed responses — PR #68547 submitted to address.
  - Structured output grammar validation fails on `tool_choice="auto"` with mismatched behavior between Python/Rust frontends (#66858).

---

### **6. What This Means for Application Developers**  
- **Adopt Rust Frontend with Caution**: While the Rust frontend is now usable (`VLLM_USE_RUST_FRONTEND=1`), it lacks parity with Python APIs. Expect ongoing work on tool calling, structured outputs, and plugin lifecycle hooks (#44280, #66858, #65545).
- **Leverage ROCm Optimizations for AMD Workloads**: If deploying on MI355X or MI355X systems, prioritize builds with `--linear-backend triton` and monitor for performance uplift on Qwen3.8 and Muse Spark variants.
- **Enable Breakable CUDA Graphs for Batch-Invariant Workloads**: Use `VLLM_BATCH_INVARIANT=1` with MXFP4 models to avoid stalls during dynamic inference.
- **Handle Multi-Modal Inputs Carefully**: Ensure `--mm-processor-kwargs` are passed through processors (fix in #68317); disable extensible KV cache for models like Unlimited-OCR-2.
- **Monitor for OOM Clarity**: PR #68317 improves error messaging during model loading — expect clearer diagnostics instead of raw PyTorch OOM hints.

> 🔗 [GitHub Repository](https://github.com/vllm-project/vllm) | [Latest PRs](https://github.com/vllm-project/vllm/pulls?q=is%3Aopen+sort%3Aupdated-desc) | [Top Issues](https://github.com/vllm-project/vllm/issues?q=is%3Aopen+sort%3Acomments-desc)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-19**

---

### **1. Today's Highlights**  
The SGLang project continues to accelerate its focus on **multi-backend stability**, with significant progress on AMD ROCm support for GLM-5.3-Flash and DeepSeek-V4.1-Flash, including kernel optimizations and memory management fixes. Critical issues around **CUDA coredumps (Issue #26340)** and **flaky CI infrastructure (Issue #42752)** remain active, indicating ongoing challenges in test reliability and low-level debugging.

---

### **2. Releases & Breaking Changes**  
*None.* No new releases were published in the last 24 hours. The upcoming **SGLang 1.0 release (Issue #50045)** is targeting a stability-focused hardening phase, with stricter validation of configuration changes and a formal compatibility policy defined for the 1.x series—upgrades from 0.5.x may require code adjustments.

---

### **3. New Model & Hardware Support**  
- **AMD MI355X (gfx950):** Active optimization work for `DeepSeek-V4.1-Flash` (Issue #49327) and `GLM-5.3-Flash` (PR #51126, #48875), including FlyDSL kernels and KDA replay improvements.
- **NPU (Huawei DSV4-Flash):** Added nightly model data collection via PR #51004, enabling better regression tracking for production-grade inference.
- **Multi-modal:** `Wan2.1 I2V` LoRA support now properly mapped in PR #51425; `Krea-2-Turbo` image generation fixed for non-16-pixel-aligned inputs in PR #50639.
- **CPU (Xeon):** Nightly large-model tests added for accuracy/performance verification (PR #37333).

---

### **4. Performance & Optimization**  
- **ROCm/AMD:**  
  - PR #51408 restores fp8 v-absorb and enables fused RoPE/KV-write on gfx942, addressing performance gaps vs. gfx950.  
  - PR #47309 implements row-splitting for DCP indexer and uses aiter ASM kernel for owned sparse MLA—key for scaling DSA models on ROCm.
- **Diffusion:**  
  - PR #51383 proposes cold-start reduction to ~20 seconds for diffusion models (MiniMax-H3), a major UX improvement.  
  - PR #50639 aligns request sizes to 16-pixel grid, preventing `EinopsError` crashes.
- **Scheduler & Memory:**  
  - PR #50088 fixes total_tokens load accounting in `total_tokens` load balancing, improving fairness for chunked requests.  
  - PR #51422 re-enables fresh HTTP connections per benchmark request, reducing intermittent connection errors under high concurrency.

---

### **5. Stability & Regressions**  
- **Critical:**  
  - **CUDA Coredump Tracker (Issue #26340)**: 382 comments; auto-collected from `pr-test.yml`. High-severity instability likely affecting GPU inference pipelines. *No fix PR yet.*
  - **macOS CPU Device Failure (Issue #50915)**: `--device cpu` fails due to `lscpu` error (`get_cpu_ids_by_node`). Blocking CPU-only deployment on macOS. *Fix pending.*
- **High Priority:**  
  - **AITER MLA Decode Degradation on AMD (Issue #51278)**: Outputs degrade to garbage when `SGLANG_AITER_MLA_PERSIST=0` on MI355X with FP8 KV cache. *PR #51425 addresses related LoRA key mapping but not this core issue.*
  - **Sliding-Window Tree-Mask Bug (Issue #51096)**: `extend_attention_fwd_unified` reads incorrect bits—could cause silent correctness failures in long-context inference.

---

### **6. What This Means for Application Developers**  
- **Expect instability on AMD ROCm** until PRs like #51408 and #47309 land—especially if using `GLM-5.3-Flash`, `DeepSeek-V4.1-Flash`, or `aiter` backends.
- **Avoid `SGLANG_AITER_MLA_PERSIST=0` on AMD** until #51278 is resolved; use `persist=1` for stable outputs.
- **Use `--load-balance-method total_tokens` cautiously**: PR #50088 fixes an oversight in token counting for chunked prefill requests—ensure your load balancer behavior matches expected semantics.
- **For multi-modal apps**: Confirm image input resolution aligns with 16-pixel grids to avoid crashes (PR #50639).
- **CI flakiness (Issue #42752)** suggests test results may be unreliable—validate critical PRs manually before merging.

> 🔗 [SGLang GitHub Issues](https://github.com/sgl-project/sglang/issues) | 🔗 [PR #51424: Re-enable NPU PR trigger](https://github.com/sgl-project/sglang/pull/51424)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-19**

---

### **1. Today's Highlights**  
The latest updates focus on expanding real-time audio and multimodal support, with new TTS model integrations (VoxCPM2, Inflect v3, Hibiki) via the `mtmd` framework. Critical performance improvements landed in CUDA and WebGPU backends, including fused KV dequantization in flash attention and relaxed SIMD enhancements for WASM—boosting inference efficiency across diverse hardware.

---

### **2. Releases & Breaking Changes**  
No new releases were tagged in the past 24 hours. However, several PRs introduce breaking changes in behavior or configuration:  
- **PR #32583** ([#32583](https://github.com/ggml-org/llama.cpp/pull/32583)) updates SYCL build documentation to reflect current requirements.  
- **PR #32115** ([#32115](https://github.com/ggml-org/llama.cpp/pull/32115)) enforces stricter CORS policies by blocking access to local addresses from media URLs and proxy endpoints—important for security-hardened deployments.  

> ⚠️ Developers using `llama-server` in local environments should review their CORS and media handling configurations post-merge.

---

### **3. New Model & Hardware Support**  
- **Multimodal TTS Models**: Added support for:
  - [**VoxCPM2**](https://huggingface.co/openbmb/VoxCPM2) via `mtmd` (#32443).
  - [**Inflect v3 series**](https://huggingface.co/owensong/Inflect-Mini-v3) (Mini, Micro, Atom) — full-text-to-speech support (#32581).
  - [**Hibiki 1B/2B**](https://huggingface.co/kyutai/hibiki-1b-pytorch-bf16) — full-duplex voice-in/voice-out streaming (#32443).  
- **Hardware Backends**:
  - **WebGPU**: Added 2D indexing fix for copy kernel (#32576), improving stability on complex GPU layouts.
  - **OpenCL**: Now fetches Adreno binary kernels automatically at configure time on Windows Snapdragon devices (#31759).
  - **Hexagon**: Added support for `int-hmx` (w8a8/w8a16) and automatic f32 → f16 lowering (#32582).

---

### **4. Performance & Optimization**  
- **CUDA**: Fused `q8_0/q4_0/f8_e4m3` KV dequant into MMA flash-attention kernels (#31802), eliminating a separate scratch-memory pass—reducing latency and memory pressure during decode.
- **WASM**: Relaxed SIMD enhancement improves dot product throughput by ~15–20% in browser-based inference (#19590).
- **WebGPU**: Fixed 2D indexing in copy kernel, enabling better tile alignment and reducing off-by-one errors in large tensor transfers (#32576).
- **Vulkan**: RFC proposal introduces RT Core-assisted KV filtering for FlashAttention (#32558), promising up to 30% decode speedups on modern GPUs by pruning irrelevant KV pages early.

---

### **5. Stability & Regressions**  
High-severity issues reported today include:  
- **Crash on Vulkan A770 after 7–8h runtime** (#29526): Empty EOS replies due to GPU fence corruption; affects long-running servers. *No fix yet.*  
- **CUDA illegal memory access in flash-attn path** with Qwen3.6-35B MoE + partial offload (#26609): Deterministic crash on second request. *Fix pending.*  
- **Server crash when client connects to `/v1/realtime` while sleeping** (#32541): Race condition in sleep state management. *PR open but unmerged.*  
- **Persistent NaN in recurrent state corrupts future requests** (#29830): Leads to garbled output; confirmed on CPU backend. *Workaround: reset session.*  

> 🔴 **Critical**: Users of MoE models on CUDA or Vulkan should monitor for crashes and avoid long sessions until fixes are merged.

---

### **6. What This Means for Application Developers**  
- **Build real-time multimodal apps**: With new TTS model support (`mtmd`), you can now deploy full-duplex voice agents directly in `llama-server`, ideal for assistants and chatbots with audio feedback.  
- **Optimize GPU memory use**: Use fused KV dequant in CUDA (`#31802`) to reduce memory overhead and improve decode throughput—especially critical for high-context MoE models.  
- **Secure your server**: Update CORS rules if exposing `llama-server` publicly—recent changes block local address access from media and proxy endpoints.  
- **Avoid long-running workloads**: Be cautious with Vulkan on Intel Arc A770 or CUDA MoE models until known regressions are patched.  
- **Test on multiple backends**: The growing diversity in OpenCL, Hexagon, and WebGPU support enables cross-platform deployment—but verify compatibility with your target hardware.

👉 **Recommended action**: Upgrade to latest master, especially if using `llama-server` with TTS or MoE models. Monitor issue tracker for fixes to #29526, #26609, and #32541.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-19**

---

### **1. Today's Highlights**  
Critical memory and context handling issues were reported for high-context models on macOS and AMD GPUs, including silent truncation at 65K tokens and excessive memory pressure during offloading. Two key PRs landed to fix model reloading due to `shift` mismatches and duplicate GGUF metadata conflicts—both impacting stability in multi-request and model-loading workflows.

---

### **2. Releases & Breaking Changes**  
None. No new releases or breaking changes were published in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- **New community integrations added**:  
  - [Meta-Capp](https://github.com/ollama/ollama/pull/19766) (AI PDF companion with local inference via Ollama)  
  - [Coati](https://github.com/ollama/ollama/pull/19763) (browser-side panel for web page analysis using local LLMs)  
- **Vulkan support improvements**:  
  - RX 5700 XT (RDNA1) performance issue reported (~13x slower prompt processing vs upstream `llama.cpp`); ongoing investigation.  
- **ROCm/AMD GPU**: Issue #18950 shows model reloads under context shift mismatch; fixed via PR #19748 (shared runner across `shift` settings).

---

### **4. Performance & Optimization**  
- **VRAM accounting & GPU splitting**: PR #19632 addresses multiple critical VRAM misreporting bugs that caused incorrect model eviction and suboptimal GPU utilization.  
- **Speculative decoding metrics**: PR #19368 adds per-request reporting of drafted and accepted tokens, improving observability of speculative decoding efficiency.  
- **Batch sizing for decision models**: PRs #19743 and #19760 introduce whole-prompt batching for non-causal models like `d1-2B`, preventing misleading "context length" errors and improving throughput.  
- **MLX runner optimizations**: PR #19769 enables batched DFlash2 proposal replay and recurrent state reconstruction, reducing overhead for long drafts.

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |  
|---------|------|--------|------------|  
| 🔴 High | Silent token truncation at 65,536 tokens despite 147K context window (#19765) | Models silently stop mid-input without `done_reason: length` | Open — no fix yet |  
| 🔴 High | Memory pressure on 24GB M6 Mac with `qwen3.8:27b` and partial offload (#19757) | System hits critical memory pressure; ~3GiB above expected footprint | Open — urgent |  
| 🟡 Medium | Numbered list rendering cutoff in real-time thinking UI (#19751, #19755) | Visual corruption in UI when listing >9 items | Fixed via PR #19755 (merged) |  
| 🟡 Medium | Duplicate GGUF metadata keys lead to inconsistent behavior (#19768) | First-wins vs last-wins conflict between readers | Fixed via PR #19770 (merged) |  
| 🟡 Medium | Tool call parsing failure when `<tool_call>` opener missing (#18530) | Silent loss of tool calls in `qwen3-coder` | Fixed via PR #19764 (merged) |  
| 🟡 Low | Model load retries with CPU projector offload despite user intent (#19759) | Hinders reproducible GPU-memory budget testing | Open — feature request |  

---

### **6. What This Means for Application Developers**  
- **Avoid silent truncation**: Do not assume `done_reason: stop` implies completion—validate input length against actual token counts. Use `--max-tokens` or `max_tokens` explicitly to avoid surprises.  
- **GPU memory constraints are critical**: On Apple Silicon and AMD systems, monitor actual memory usage closely—partial offloads can exceed expectations. Use `OLLAMA_CONTEXT_LENGTH` and `OLLAMA_KEEP_ALIVE` carefully.  
- **Enable deterministic model loading**: For benchmarking, opt-in to fail on unexpected offload via `OLLAMA_FAIL_ON_CPU_OFFLOAD` (proposed in #19759).  
- **Use modern runners**: Ensure your deployment uses up-to-date `llama-server` builds to benefit from improved VRAM accounting and batch scheduling.  
- **Tool call robustness**: When using `qwen3-coder`, expect some flexibility in tool call formatting—but validate output structure if relying on strict JSON parsing.  

> 🔗 Full details: [GitHub Issues](https://github.com/ollama/ollama/issues) | [Pull Requests](https://github.com/ollama/ollama/pulls)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-19**

---

### **1. Today's Highlights**  
The latest release, **v1.109.2**, includes critical security verification via Cosign for Docker image integrity, reinforcing trust in production deployments. Major stability improvements focus on database resilience (`DATABASE_URL_READ_REPLICA` recovery), streaming tool-calling correctness (Anthropic `/v1/messages`), and routing logic fixes under `usage-based-routing-v2`. The Rust-native gateway continues its migration with significant refactoring to support fallbacks, retries, and model restamping.

---

### **2. Releases & Breaking Changes**  
- **v1.109.2** released: [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.109.2)  
  - ✅ **Security**: Docker image signed using Cosign with GitHub Actions OIDC identity verification:  
    ```bash
    cosign verify \
      --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      ghcr.io/berriai/litellm:v1.109.2
    ```
  - No breaking API changes reported; backward compatibility preserved.

---

### **3. New Model & Hardware Support**  
- **WildEdge Observability Integration** added as a new OpenTelemetry v2 preset ([#52290](https://github.com/BerriAI/litellm/issues/52290)) — enables end-to-end tracing from LiteLLM Proxy to WildEdge.dev for AI monitoring.
- **Sambanova Vision Support**: Fixes issue where image URLs were lost due to content flattening ([#37609](https://github.com/BerriAI/litellm/issues/37609)) — now properly forwards multimodal inputs.
- **Vertex Claude / Gemini**: Corrected message ordering in `/v1/messages` to preserve prompt cache behavior ([#50070](https://github.com/BerriAI/litellm/issues/50070)).

---

### **4. Performance & Optimization**  
- **Streaming Efficiency**: PR [#52544](https://github.com/BerriAI/litellm/pull/52544) ensures *no byte is dropped* during SSE relay — including comments, BOM, and keepalives — improving fidelity in real-time agent workflows.
- **Router Core Refactor**: PRs [#52509](https://github.com/BerriAI/litellm/pull/52509) and [#52274](https://github.com/BerriAI/litellm/pull/52274) restructure host handling in native router, enabling per-request host binding and better load balancing across model groups.
- **Latency Reduction**: PR [#51533](https://github.com/BerriAI/litellm/pull/51533) restores accurate token counts and `stop_reason` in native Llama streams — critical for cost tracking and agent loop control.

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| 🔴 High | [#52284](https://github.com/BerriAI/litellm/issues/52284) | Read replica DB connection timeout leaves proxy permanently unable to read; no self-healing | ❌ Pending fix |
| 🔴 High | [#52548](https://github.com/BerriAI/litellm/issues/52548) | Priority routing groups ignore TPM limits and fail over early under `usage-based-routing-v2` | ❌ Pending fix |
| 🟡 Medium | [#52456](https://github.com/BerriAI/litellm/issues/52456) | Out-of-order OpenAI decisions are silently relabeled — breaks reasoning trace integrity | ✅ Fixed in v1.110.0 |
| 🟡 Medium | [#45348](https://github.com/BerriAI/litellm/issues/45348) | Streaming tool-call arguments dropped when multiple tools emitted in single turn (Anthropic) | ❌ Pending fix |
| 🟢 Low | [#49680](https://github.com/BerriAI/litellm/issues/49680) | `prisma_migration --skip_server_startup` crashes if `psycopg` fails to load `libpq` | ✅ Fix PR submitted |

---

### **6. What This Means for Application Developers**  
- **Avoid downtime**: If using `DATABASE_URL_READ_REPLICA`, monitor for permanent read failures post-blip — current workaround involves manual restart or retry logic.
- **Ensure accurate budgeting**: Use `usage-based-routing-v2` with caution — `priority` routing may bypass TPM limits; validate routing config in staging.
- **Build robust agents**: Leverage the new `model_restamping` and `stream_hold` features in Rust gateway ([#52428](https://github.com/BerriAI/litellm/pull/52428)) to safely override response models and handle partial streams.
- **Monitor observability**: Enable the new **WildEdge preset** ([#52290](https://github.com/BerriAI/litellm/issues/52290)) for full-stack tracing of agent loops and cost anomalies.
- **Use latest version**: Upgrade to **v1.109.2+** for verified image signing and improved stability in high-concurrency scenarios.

> 💡 Pro Tip: For local Ollama + tool calling, ensure `supports_function_calling: true` is set explicitly — UI schema issues ([#36463](https://github.com/BerriAI/litellm/issues/36463)) can delay tool discovery.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-19**

---

### **1. Today's Highlights**  
Unsloth continues to advance its multi-GPU and inference optimization capabilities, with key PRs introducing automatic model placement across GPUs (including CFG replica offloading) and improved attention backend reporting. Critical fixes address GPU memory mismanagement on AMD ROCm (gfx1151/gfx1200), including a `HIP error: illegal memory access` in fused kernels during QLoRA training. The UI also sees refinement via new model picker options and audio interface unification.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **AMD ROCm Support**: Expanded support for RDNA4 (gfx1200) and gfx1151 with experimental hybrid linear-attention packing (`UNSLOTH_EXPERIMENTAL_HYBRID_PACKING=1`) — though no net speedup observed on gfx1151 yet.  
- **New Models**: MiniMax-H3-Image, HunyuanImage 2.1 distilled, Anima-Turbo, Chroma1-Flash now respect publisher-specific rendering recipes (PR #18280).  
- **Quantization**: INT8/FP8 GGUF builds now properly load LoRAs (PR #18420); support for training DiT LoRAs on non-bf16 GPUs (e.g., T4 sm75) in fp16 with loss scaling (PR #18355).  
- **Hardware**: Multi-GPU auto-placement now considers guided diffusion efficiency — opting for single-card + CFG replica when faster than layer splitting (PR #18421).

---

### **4. Performance & Optimization**  
- **Memory Efficiency**: On gfx1151, `--fit on` now correctly estimates device memory usage (avoiding system RAM exhaustion from ~43GB → 57GB) (Issue #18316).  
- **Speed Improvements**:  
  - MiniMax-H3-Image renders reduced from **82.7s to 36.7s** on 8GB card by pinning text encoder layers (PR #18417).  
  - FLUX.1 streamed: AdaLN modulation precomputed once per request, reducing per-step overhead by **~28%** (PR #18342).  
- **Kernel Optimizations**:  
  - Flash attention backends now report actual runtime backend used (PR #18418).  
  - Training now processes every token in long raw-text rows when packing enabled (PR #18408).  
- **Latency**: Audio preview samples added for built-in TTS voices (PR #18251); scroll lag addressed (Issue #18259).

---

### **5. Stability & Regressions**  
| Severity | Issue | Impact | Fix Status |
|---------|------|--------|------------|
| High | [Bug] GPU not used after driver upgrade (620.70.06-1) | No model loads; vRAM unavailable | Closed (PR pending) |
| High | [Bug] QLoRA on gfx1200 aborts with `HIP error: illegal memory access` | Fails during training on RDNA4 | Open (PR #18403) |
| Medium | [Bug] KV cache invalidation after 8 computer use calls (`MAX_TOTAL_MODEL_IMAGES = 8`) | Limits automation use cases | Closed (fix merged) |
| Medium | [Bug] API/provider connections drop oversized tool results → infinite retry loop | Breaks agent workflows | Closed (PR #18185) |
| Low | [UI Bug] Model picker feels cramped in v0.1.919-beta | UX degradation | Open (PR #18321) |

> 🔗 [Issue #18403](https://github.com/unslothai/unsloth/issues/18403) — *Critical ROCm kernel crash during QLoRA training*  
> 🔗 [Issue #18189](https://github.com/unslothai/unsloth/issues/18189) — *API provider compaction policy mismatch with local models*

---

### **6. What This Means for Application Developers**  
- **Multi-GPU Deployments**: Use `--fit on` and monitor actual attention backends (`flash`, `cuDNN`, etc.) via Studio’s status reporting (PR #18418) to optimize inference layout.  
- **Agent Reliability**: Avoid `tool-result` truncation loops by validating output size limits in API connections (PR #18185). Use `json_schema` and `grammar` fields directly in `/v1/chat/completions` (PR #18385).  
- **Model Fine-Tuning**: Leverage `--fit on` for accurate memory estimation (Issue #18316), and enable automatic `max_seq_length` detection (Feature Request #18236) to streamline training prep.  
- **Cross-Platform Dev**: Be cautious with ROCm hardware (especially gfx1151/gfx1200) — expect kernel-level crashes in QLoRA unless using `fp16`+loss scaling (PR #18355).  
- **UI Automation**: Use `computer-use` features only under X11 (not Wayland) (Issue #18221); consider disabling it on Linux if session is Wayland-based.

👉 *Pro Tip*: Monitor PRs like #18421 and #18417 for future optimizations in large-scale image and reasoning pipelines.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*